/* Indicadores de progresso, calculados apenas a partir do que foi registrado pelo usuário. */
(function () {
  "use strict";
  window.TP = window.TP || {};

  TP.NOMES_MOD = {
    "01-arquitetura-dados": "M1 · Arquitetura de dados", "02-projetos-produtos": "M2 · Projetos e produtos",
    "03-processos-gerenciamento": "M3 · Processos", "04-governanca-ti": "M4 · Governança de TI",
    "05-engenharia-software": "M5 · Engenharia de software", "06-experiencia-usuario": "M6 · UX",
    "07-analise-dados": "M7 · Análise de dados", "08-logica-matematica": "M8 · Lógica matemática",
    "09-seguranca-informacao": "M9 · Segurança da informação",
    "gerais-lingua-portuguesa": "Gerais · Língua Portuguesa", "gerais-lingua-inglesa": "Gerais · Língua Inglesa"
  };

  TP.ultimaResposta = function (qid) {
    var r = TP.dados().respostas[qid];
    return r && r.length ? r[r.length - 1] : null;
  };

  TP.resumoQuestoes = function () {
    var qs = TP.data.questoes, r = { total: qs.length, respondidas: 0, acertos: 0, porModulo: {} };
    qs.forEach(function (q) {
      var m = r.porModulo[q.modulo] = r.porModulo[q.modulo] || { total: 0, respondidas: 0, acertos: 0 };
      m.total++;
      var u = TP.ultimaResposta(q.id);
      if (u) { m.respondidas++; r.respondidas++; if (u.ok) { m.acertos++; r.acertos++; } }
    });
    return r;
  };

  TP.resumoConteudo = function () {
    var est = TP.dados().estudados, tot = 0, ok = 0, grupos = {};
    TP.data.conteudo.grupos.forEach(function (g) {
      var n = g.assuntos.length, e = g.assuntos.filter(function (a) { return est[a.id]; }).length;
      grupos[g.id] = { total: n, estudados: e }; tot += n; ok += e;
    });
    return { total: tot, estudados: ok, grupos: grupos };
  };

  TP.barra = function (v, t) {
    var pct = t ? Math.round(100 * v / t) : 0;
    return TP.h("div", { class: "bar", role: "img", "aria-label": pct + "%" }, TP.h("i", { style: "width:" + pct + "%" }));
  };
})();
