/* Persistência local (localStorage). Os dados ficam apenas neste navegador e dispositivo. */
(function () {
  "use strict";
  var KEY = "transpetro_enfase5_dados";
  var VERSAO = 1;
  window.TP = window.TP || {};

  function vazio() {
    return { versao: VERSAO, estudados: {}, respostas: {}, marcadas: {}, erros: {}, simulados: { tentativas: [], andamento: {} },
      flashcards: {}, atividade: {}, config: {}, revisoes: {} };
  }
  function ehObjeto(x) { return x && typeof x === "object" && !Array.isArray(x); }

  /* Valida a estrutura; lança Error se incompatível. */
  function validar(d) {
    if (!ehObjeto(d)) throw new Error("O arquivo não contém um objeto de dados.");
    if (typeof d.versao !== "number") throw new Error("Versão do esquema ausente.");
    if (d.versao > VERSAO) throw new Error("Dados de uma versão mais nova (" + d.versao + ") que a suportada (" + VERSAO + ").");
    ["estudados", "respostas", "marcadas", "erros"].forEach(function (k) {
      if (d[k] === undefined) d[k] = {};
      if (!ehObjeto(d[k])) throw new Error("Campo inválido: " + k);
    });
    Object.keys(d.respostas).forEach(function (q) {
      if (!Array.isArray(d.respostas[q])) throw new Error("Respostas inválidas para " + q);
    });
    /* Simulados (campo acrescentado depois da versão 1: backups antigos não o possuem). */
    if (d.simulados === undefined) d.simulados = {};
    if (!ehObjeto(d.simulados)) throw new Error("Campo inválido: simulados");
    if (!Array.isArray(d.simulados.tentativas)) d.simulados.tentativas = [];
    if (!ehObjeto(d.simulados.andamento)) d.simulados.andamento = {};
    /* Campos acrescentados depois (T09 e T10): flashcards, atividade diária, configurações e revisões. Backups antigos não os possuem. */
    ["flashcards", "atividade", "config", "revisoes"].forEach(function (k) {
      if (d[k] === undefined) d[k] = {};
      if (!ehObjeto(d[k])) throw new Error("Campo inválido: " + k);
    });
    d.versao = VERSAO;
    return d;
  }

  var dados = vazio();

  TP.storageAviso = null;
  TP.carregar = function () {
    try {
      var raw = localStorage.getItem(KEY);
      if (raw) dados = validar(JSON.parse(raw));
    } catch (e) {
      TP.storageAviso = "Dados locais ilegíveis (" + e.message + "). Uma cópia foi mantida em outra chave e nada foi apagado.";
      try { localStorage.setItem(KEY + "_corrompido", localStorage.getItem(KEY)); } catch (e2) { /* sem espaço */ }
      dados = vazio();
    }
  };
  TP.salvar = function () {
    try { localStorage.setItem(KEY, JSON.stringify(dados)); return true; }
    catch (e) { TP.toast("Não foi possível salvar no navegador (armazenamento cheio ou bloqueado). Exporte um backup."); return false; }
  };
  TP.dados = function () { return dados; };

  TP.exportar = function () {
    return JSON.stringify({ app: "transpetro-enfase5", geradoEm: new Date().toISOString(), dados: dados }, null, 1);
  };

  /* Importa texto JSON. modo: "substituir" | "mesclar". */
  TP.importar = function (texto, modo) {
    var obj = JSON.parse(texto);
    if (!ehObjeto(obj) || obj.app !== "transpetro-enfase5") throw new Error("Arquivo não é um backup desta plataforma.");
    var novo = validar(obj.dados);
    if (modo === "substituir") { dados = novo; }
    else {
      Object.assign(dados.estudados, novo.estudados);
      Object.assign(dados.marcadas, novo.marcadas);
      Object.keys(novo.respostas).forEach(function (q) {
        var atual = dados.respostas[q] || [];
        var vistos = {};
        atual.forEach(function (r) { vistos[r.t] = 1; });
        novo.respostas[q].forEach(function (r) { if (!vistos[r.t]) atual.push(r); });
        atual.sort(function (a, b) { return a.t - b.t; });
        dados.respostas[q] = atual;
      });
      Object.keys(novo.erros).forEach(function (q) { if (!dados.erros[q]) dados.erros[q] = novo.erros[q]; });
      var ids = {};
      dados.simulados.tentativas.forEach(function (t) { ids[t.id] = 1; });
      novo.simulados.tentativas.forEach(function (t) { if (!ids[t.id]) dados.simulados.tentativas.push(t); });
      dados.simulados.tentativas.sort(function (a, b) { return a.inicio - b.inicio; });
      /* Flashcards: prevalece o registro de revisão mais recente. Atividade diária: maior valor por campo (evita somar duas vezes o mesmo dia). */
      Object.keys(novo.flashcards).forEach(function (id) {
        var a = dados.flashcards[id], b = novo.flashcards[id];
        if (!a || (b.ult || "") > (a.ult || "")) dados.flashcards[id] = b;
      });
      Object.keys(novo.revisoes).forEach(function (k) {
        var a = dados.revisoes[k], b = novo.revisoes[k];
        if (!a || (b.ult || "") > (a.ult || "")) dados.revisoes[k] = b;
      });
      Object.keys(novo.atividade).forEach(function (dia) {
        var a = dados.atividade[dia] = dados.atividade[dia] || {}, b = novo.atividade[dia];
        Object.keys(b).forEach(function (k) { a[k] = Math.max(a[k] || 0, b[k] || 0); });
      });
      Object.keys(novo.config).forEach(function (k) { if (dados.config[k] === undefined) dados.config[k] = novo.config[k]; });
      Object.keys(novo.simulados.andamento).forEach(function (s) { if (!dados.simulados.andamento[s]) dados.simulados.andamento[s] = novo.simulados.andamento[s]; });
    }
    return TP.salvar();
  };

  TP.limpar = function () { dados = vazio(); TP.salvar(); };
})();
