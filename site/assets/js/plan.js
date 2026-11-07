/* Plano de estudos (T11): visão do dia, da semana e do mês, registro de sessões e ritmo.
   Modelo de referência: docs/estrategia/metodologia-estudo.md, seções 4 e 12 (90 min nos dias úteis,
   180 min no fim de semana, ajustáveis). O plano é DERIVADO do que o usuário já registrou: o conteúdo previsto é
   o próximo assunto ainda não estudado, de modo que uma sessão não realizada não é apagada nem marcada como
   concluída: o mesmo assunto continua previsto no dia seguinte (metodologia, 12.3).
   Dados: dados.plano (configuração) e dados.sessoes (sessões registradas), no localStorage. */
(function () {
  "use strict";
  var h = function () { return TP.h.apply(null, arguments); };
  var DIAS = ["Segunda", "Terça", "Quarta", "Quinta", "Sexta", "Sábado", "Domingo"];
  var DIAS_CURTO = ["Seg", "Ter", "Qua", "Qui", "Sex", "Sáb", "Dom"];
  var MESES = ["janeiro", "fevereiro", "março", "abril", "maio", "junho", "julho", "agosto", "setembro", "outubro", "novembro", "dezembro"];
  var TIPOS_ATIV = ["Teoria", "Questões", "Revisão", "Flashcards", "Simulado", "Correção e caderno de erros", "Consolidação (resumos, comparações)", "Outra"];
  var PADRAO_MIN = [90, 90, 90, 90, 90, 180, 180];     /* metodologia, seção 12 */
  var RESERVA_PADRAO = 4;                             /* semanas finais sem teoria nova: premissa ajustável do projeto */

  /* Blocos de referência (minutos), metodologia 4.1 e 4.2; ajustados proporcionalmente à duração configurada. */
  var B90 = [["Revisão inicial", 10, "rev"], ["Teoria", 35, "teoria"], ["Prática (questões)", 30, "pratica"], ["Correção", 10, "erros"], ["Registro e próxima ação", 5, "reg"]];
  var B180 = [["Revisão inicial", 15, "rev"], ["Teoria", 55, "teoria"], ["Intervalo", 10, "pausa"], ["Questões", 50, "pratica"], ["Correção e caderno de erros", 25, "erros"], ["Consolidação (flashcards, resumo)", 15, "flash"], ["Intervalo", 10, "pausa"]];
  var BSEX = [["Revisões e flashcards", 35, "rev"], ["Caderno de erros", 30, "erros"], ["Questões de reforço", 20, "pratica"], ["Registro e planejamento", 5, "reg"]];
  var BSIM = [["Revisão inicial", 15, "rev"], ["Simulado (por módulo ou específico, conforme o tempo)", 90, "sim"], ["Correção e caderno de erros", 50, "erros"], ["Consolidação", 25, "flash"]];
  var BCON = [["Revisão inicial", 15, "rev"], ["Revisões e flashcards", 50, "rev"], ["Caderno de erros", 45, "erros"], ["Consolidação (resumos, comparações)", 50, "flash"], ["Planejamento da semana", 20, "reg"]];

  function cfg() {
    var p = TP.dados().plano;
    if (!Array.isArray(p.minutos) || p.minutos.length !== 7) p.minutos = PADRAO_MIN.slice();
    if (typeof p.reserva !== "number") p.reserva = RESERVA_PADRAO;
    if (typeof p.prova !== "string") p.prova = "";
    if (typeof p.inicio !== "string") p.inicio = "";
    return p;
  }
  function idxSemana(data) { return (TP.paraData(data).getDay() + 6) % 7; }
  function segundaDe(data) { return TP.addDias(data, -idxSemana(data)); }
  function numSemanaISO(data) {
    var d = TP.paraData(data); d.setDate(d.getDate() + 3 - ((d.getDay() + 6) % 7));
    var s = new Date(d.getFullYear(), 0, 4, 12);
    return 1 + Math.round(((d - s) / 86400000 - 3 + ((s.getDay() + 6) % 7)) / 7);
  }
  function fmtMin(m) { var hh = Math.floor(m / 60), mm = m % 60; return hh ? hh + "h" + (mm ? (mm < 10 ? "0" : "") + mm : "") : mm + " min"; }
  function curtoBR(data) { var p = data.split("-"); return p[2] + "/" + p[1]; }

  /* ---------- Conteúdo e questões ---------- */
  function assuntos() {
    var r = { esp: [], ger: [] };
    TP.data.conteudo.grupos.forEach(function (g) { g.assuntos.forEach(function (a) { r[g.tipo === "especifico" ? "esp" : "ger"].push({ a: a, g: g }); }); });
    return r;
  }
  function escalar(base, minutos) {
    var tot = base.reduce(function (s, b) { return s + b[1]; }, 0), f = minutos / tot, out = base.map(function (b) { return { nome: b[0], min: Math.max(5, Math.round(b[1] * f / 5) * 5), cat: b[2] }; });
    var soma = out.reduce(function (s, b) { return s + b.min; }, 0), i = 0;
    while (soma !== minutos && i < 200) {                 /* acerta a soma ajustando o maior bloco útil */
      var alvo = out.filter(function (b) { return b.cat !== "pausa" && b.cat !== "reg"; }).sort(function (a, b) { return b.min - a.min; })[0];
      if (!alvo) break;
      var dif = minutos - soma, passo = dif > 0 ? Math.min(5, dif) : -Math.min(5, -dif);
      if (alvo.min + passo < 5) break;
      alvo.min += passo; soma += passo; i++;
    }
    return out;
  }

  /* Plano de um dia. usados: assuntos já alocados em dias anteriores da simulação. */
  function planoDia(data, usados) {
    var p = cfg(), i = idxSemana(data), min = p.minutos[i];
    if (!min) return { data: data, min: 0, ativ: "Dia livre", blocos: [], alvo: null };
    var ativ, base, alvo = null, estudados = TP.dados().estudados, pool = assuntos();
    function proximo(tipo) {
      var ordem = tipo === "ger" ? pool.ger.concat(pool.esp) : pool.esp.concat(pool.ger);
      for (var k = 0; k < ordem.length; k++) { var x = ordem[k]; if (!estudados[x.a.id] && !usados[x.a.id]) return x; }
      return null;
    }
    if (i === 4) { ativ = "Revisão e caderno de erros"; base = BSEX; }
    else if (i === 6) {
      if (numSemanaISO(data) % 2 === 0) { ativ = "Simulado e correção"; base = BSIM; } else { ativ = "Revisão e consolidação"; base = BCON; }
    } else {
      base = min >= 150 ? B180 : B90;
      ativ = i === 5 ? "Conteúdo aprofundado e questões" : "Teoria e questões";
      alvo = proximo(i === 2 ? "ger" : "esp");      /* quarta: Conhecimentos Gerais, para não deixar Português e Inglês sem acompanhamento */
      if (alvo) { usados[alvo.a.id] = 1; ativ += i === 2 && alvo.g.tipo === "geral" ? " (Gerais)" : ""; }
    }
    return { data: data, min: min, ativ: ativ, blocos: escalar(base, min), alvo: alvo };
  }
  /* Planos de [inicio, fim], alocando assuntos em sequência a partir de "inicio". */
  function planejar(inicio, fim) {
    var mapa = {}, usados = {}, d = inicio, n = 0;
    while (d <= fim && n < 400) { mapa[d] = planoDia(d, usados); d = TP.addDias(d, 1); n++; }
    return mapa;
  }

  function sessoesDe(data) { return TP.dados().sessoes.filter(function (s) { return s.data === data; }); }
  function minutosDe(data) { return sessoesDe(data).reduce(function (s, x) { return s + (x.real || 0); }, 0); }
  function questoesNaoRespondidas(pasta) {
    return TP.data.questoes.filter(function (q) { return q.modulo === pasta && !TP.ultimaResposta(q.id); }).length;
  }

  /* Painel do início. */
  TP.planoResumoHoje = function () {
    var hoje = TP.hoje(), pl = planoDia(hoje, {});
    return { plano: pl, realizado: minutosDe(hoje) };
  };

  /* ---------- Abas ---------- */
  function abas(main, ativa) {
    var itens = [["", "Hoje"], ["semana", "Semana"], ["mes", "Mês"], ["metas", "Metas e ajustes"]];
    main.appendChild(h("div", { class: "tabs", role: "navigation", "aria-label": "Visões do plano" },
      itens.map(function (it) { return h("a", { href: "#/plano" + (it[0] ? "/" + it[0] : ""), "aria-current": ativa === it[0] ? "page" : null }, it[1]); })));
  }

  /* ---------- Hoje ---------- */
  function hoje(main) {
    var data = TP.hoje(), pl = planoDia(data, {}), p = cfg(), real = minutosDe(data), rc = TP.revContagem();
    main.appendChild(h("h2", {}, DIAS[idxSemana(data)] + ", " + TP.dataBR(data)));
    if (!pl.min) main.appendChild(h("div", { class: "notice" }, "Dia livre no seu plano (0 min configurados). Ajuste em “Metas e ajustes”."));
    else {
      main.appendChild(h("div", { class: "stats" },
        h("div", { class: "stat" }, h("b", {}, fmtMin(pl.min)), h("span", {}, "previsto · " + pl.ativ)),
        h("div", { class: "stat" }, h("b", {}, fmtMin(real)), h("span", {}, "registrado hoje"), TP.barra(Math.min(real, pl.min), pl.min)),
        h("div", { class: "stat" }, h("b", {}, String(rc.atrasadas + rc.hoje + rc.fcVencidos)), h("span", {}, "revisões pendentes"))));
      var ul = h("ol", { class: "blocos" });
      pl.blocos.forEach(function (b) {
        var alvo = null;
        if (b.cat === "teoria" && pl.alvo) alvo = [h("a", { href: "#/conteudo/" + pl.alvo.a.id }, pl.alvo.a.titulo), h("span", { class: "muted" }, " · " + (pl.alvo.g.tipo === "especifico" ? "M" + parseInt(pl.alvo.g.numero, 10) : "Gerais") + " · " + pl.alvo.g.titulo)];
        else if (b.cat === "teoria") alvo = [h("span", { class: "muted" }, "Todos os assuntos já estão marcados como estudados: use o tempo para aprofundar pontos fracos e revisar.")];
        else if (b.cat === "pratica") {
          var nr = pl.alvo ? questoesNaoRespondidas(pl.alvo.g.pasta) : 0;
          alvo = [h("a", { href: "#/questoes" }, "Resolver questões"), h("span", { class: "muted" }, pl.alvo ? " · de preferência do módulo “" + pl.alvo.g.titulo + "” (" + nr + " ainda não respondidas)" : " · priorize módulos com pior desempenho em Desempenho")];
        } else if (b.cat === "rev") alvo = [h("a", { href: "#/revisoes" }, "Fila de revisões"), h("span", { class: "muted" }, " · " + (rc.atrasadas + rc.hoje) + " de teoria/erros, " + rc.fcVencidos + " flashcards vencidos")];
        else if (b.cat === "erros") alvo = [h("a", { href: "#/erros" }, "Caderno de erros")];
        else if (b.cat === "flash") alvo = [h("a", { href: "#/flashcards" }, "Flashcards")];
        else if (b.cat === "sim") alvo = [h("a", { href: "#/simulados" }, "Simulados")];
        ul.appendChild(h("li", {}, h("span", { class: "blk-min" }, b.min + " min"), h("span", { class: "blk-nome" }, b.nome), alvo ? h("span", { class: "blk-alvo" }, alvo) : null));
      });
      main.appendChild(ul);
      main.appendChild(h("p", { class: "muted" }, "Proporções de referência da metodologia (sessão de 90 min nos dias úteis; 180 min nos fins de semana), ajustadas ao tempo configurado. O assunto previsto é o próximo ainda não marcado como estudado."));
    }
    cronometro(main, p);
    formSessao(main, data, pl);
    listaSessoes(main);
  }

  function cronometro(main, p) {
    main.appendChild(h("h2", {}, "Cronômetro da sessão"));
    var tela = h("span", { class: "sim-timer", role: "timer", "aria-live": "off" }, "00:00:00");
    var btn = h("button", { class: "btn primary", type: "button" }, "Iniciar");
    var id = null;
    function tick() { tela.textContent = TP.fmtTempo(p.cron ? (Date.now() - p.cron) / 1000 : 0); }
    function atualizar() {
      btn.textContent = p.cron ? "Parar e usar o tempo no registro" : "Iniciar";
      tick();
      if (p.cron && !id) id = setInterval(tick, 1000);
      if (!p.cron && id) { clearInterval(id); id = null; }
    }
    btn.addEventListener("click", function () {
      if (p.cron) {
        var min = Math.max(1, Math.round((Date.now() - p.cron) / 60000)); p.cron = 0; TP.salvar();
        var campo = document.getElementById("s-real"); if (campo) { campo.value = String(min); campo.focus(); }
        TP.toast("Tempo copiado para o registro: " + min + " min.");
      } else { p.cron = Date.now(); TP.salvar(); }
      atualizar();
    });
    var antes = TP.aoSair; TP.aoSair = function () { if (id) clearInterval(id); if (antes) antes(); };
    main.appendChild(h("div", { class: "row" }, tela, btn, h("span", { class: "muted" }, "Continua contando se você sair da tela; o tempo é copiado ao parar.")));
    atualizar();
  }

  function formSessao(main, data, pl) {
    main.appendChild(h("h2", {}, "Registrar sessão"));
    var grupos = TP.data.conteudo.grupos;
    var selG = h("select", { id: "s-g" }, [h("option", { value: "" }, "Módulo…")].concat(grupos.map(function (g) {
      return h("option", { value: g.id, selected: pl.alvo && pl.alvo.g.id === g.id }, g.tipo === "especifico" ? "M" + parseInt(g.numero, 10) + " · " + g.titulo : "Gerais · " + g.titulo);
    })));
    var selA = h("select", { id: "s-a" });
    function opcoesAssunto() {
      selA.textContent = "";
      selA.appendChild(h("option", { value: "" }, "Assunto (opcional)…"));
      var g = grupos.filter(function (x) { return x.id === selG.value; })[0];
      if (g) g.assuntos.forEach(function (a) { selA.appendChild(h("option", { value: a.id, selected: pl.alvo && pl.alvo.a.id === a.id }, a.titulo)); });
    }
    selG.addEventListener("change", opcoesAssunto); opcoesAssunto();
    var selT = h("select", { id: "s-t" }, TIPOS_ATIV.map(function (t) { return h("option", { value: t }, t); }));
    var iData = h("input", { type: "date", id: "s-data", value: data });
    var iPrev = h("input", { type: "number", id: "s-prev", min: "0", max: "600", value: String(pl.min) });
    var iReal = h("input", { type: "number", id: "s-real", min: "0", max: "720", placeholder: "minutos" });
    var iRes = h("input", { type: "text", id: "s-res", maxlength: "160", placeholder: "ex.: 12/15 questões; li o cap. 4" });
    var iObs = h("textarea", { id: "s-obs", "aria-label": "Observações", placeholder: "Observações e dúvidas" });
    var iProx = h("input", { type: "text", id: "s-prox", maxlength: "160", placeholder: "Próxima ação" });
    var chk = h("input", { type: "checkbox", id: "s-est" });
    function lab(t, id, el) { return h("label", { for: id }, t, el); }
    var form = h("form", { class: "sessao-form" },
      h("div", { class: "filters" }, lab("Data", "s-data", iData), lab("Previsto (min)", "s-prev", iPrev), lab("Realizado (min)", "s-real", iReal), lab("Atividade", "s-t", selT)),
      h("div", { class: "filters" }, lab("Módulo", "s-g", selG), lab("Assunto", "s-a", selA)),
      h("div", { class: "filters" }, lab("Resultado", "s-res", iRes), lab("Próxima ação", "s-prox", iProx)),
      iObs,
      h("div", { class: "row" }, h("label", {}, chk, " Marcar o assunto escolhido como estudado (entra na fila de revisões)"),
        h("button", { class: "btn primary", type: "submit" }, "Salvar sessão")));
    form.addEventListener("submit", function (ev) {
      ev.preventDefault();
      var real = parseInt(iReal.value, 10);
      if (!(real >= 0) || isNaN(real)) { TP.toast("Informe os minutos realizados (0 se a sessão não ocorreu)."); iReal.focus(); return; }
      if (!iData.value) { TP.toast("Informe a data."); return; }
      var d = TP.dados();
      d.sessoes.push({ id: "s" + Date.now().toString(36), data: iData.value, prev: parseInt(iPrev.value, 10) || 0, real: real, tipo: selT.value, g: selG.value, a: selA.value,
        res: iRes.value.trim(), obs: iObs.value.trim(), prox: iProx.value.trim() });
      if (real) TP.somaAtividade("min", real, iData.value);
      if (chk.checked && selA.value && !d.estudados[selA.value]) { d.estudados[selA.value] = iData.value; TP.revSincronizar(); }
      TP.salvar(); TP.toast("Sessão registrada."); TP.navegar();
    });
    main.appendChild(form);
    main.appendChild(h("p", { class: "muted" }, "Sessão com 0 minutos registra que ela não aconteceu; ela não conta como concluída e o conteúdo previsto continua na fila."));
  }

  function listaSessoes(main) {
    var ss = TP.dados().sessoes.slice().sort(function (a, b) { return a.data < b.data ? 1 : a.data > b.data ? -1 : 0; }).slice(0, 12);
    main.appendChild(h("h2", {}, "Últimas sessões"));
    if (!ss.length) { main.appendChild(h("p", { class: "muted" }, "Nenhuma sessão registrada.")); return; }
    var tb = h("tbody", {});
    ss.forEach(function (s) {
      var nome = "";
      TP.data.conteudo.grupos.forEach(function (g) { g.assuntos.forEach(function (a) { if (a.id === s.a) nome = a.titulo; }); });
      tb.appendChild(h("tr", {}, h("td", {}, TP.dataBR(s.data)), h("td", {}, s.real + " / " + s.prev + " min"), h("td", {}, s.tipo), h("td", {}, nome || "—"), h("td", {}, s.res || "—"),
        h("td", {}, h("button", { class: "btn danger", type: "button", "aria-label": "Excluir sessão de " + TP.dataBR(s.data), onclick: function () {
          if (!confirm("Excluir esta sessão registrada?")) return;
          var d = TP.dados(); d.sessoes = d.sessoes.filter(function (x) { return x.id !== s.id; });
          var at = d.atividade[s.data]; if (at && at.min) at.min = Math.max(0, at.min - (s.real || 0));
          TP.salvar(); TP.navegar();
        } }, "Excluir"))));
    });
    main.appendChild(h("div", { class: "tscroll" }, h("table", { class: "table" },
      h("thead", {}, h("tr", {}, h("th", {}, "Data"), h("th", {}, "Real / previsto"), h("th", {}, "Atividade"), h("th", {}, "Assunto"), h("th", {}, "Resultado"), h("th", {}, ""))), tb)));
  }

  /* ---------- Semana ---------- */
  function semana(main, ini) {
    var hj = TP.hoje(), seg = ini && /^\d{4}-\d{2}-\d{2}$/.test(ini) ? segundaDe(ini) : segundaDe(hj), dom = TP.addDias(seg, 6);
    var mapa = dom >= hj ? planejar(hj, dom) : {}, estudadosPorDia = {};
    var est = TP.dados().estudados; Object.keys(est).forEach(function (id) { (estudadosPorDia[est[id]] = estudadosPorDia[est[id]] || []).push(id); });
    main.appendChild(h("div", { class: "nav2" },
      h("a", { class: "btn", href: "#/plano/semana/" + TP.addDias(seg, -7) }, "← Semana anterior"),
      h("strong", {}, "Semana " + curtoBR(seg) + " a " + curtoBR(dom) + (seg === segundaDe(hj) ? " (atual)" : "")),
      h("a", { class: "btn", href: "#/plano/semana/" + TP.addDias(seg, 7) }, "Próxima semana →")));
    var tb = h("tbody", {}), totPrev = 0, totReal = 0, p = cfg();
    for (var i = 0; i < 7; i++) {
      var d = TP.addDias(seg, i), prev = p.minutos[i], real = minutosDe(d), passado = d < hj, pl = mapa[d];
      totPrev += prev; totReal += real;
      var sit, cls = "";
      if (!prev) { sit = "livre"; }
      else if (real >= prev) { sit = "concluída"; cls = "ok"; }
      else if (real > 0) { sit = "parcial"; cls = "amber"; }
      else if (passado && d < p.inicio) { sit = "antes do plano"; }
      else if (passado) { sit = "não realizada"; cls = "err"; }
      else sit = d === hj ? "hoje" : "prevista";
      var alvo = pl && pl.alvo ? h("a", { href: "#/conteudo/" + pl.alvo.a.id }, pl.alvo.a.titulo) : null;
      var feitos = (estudadosPorDia[d] || []).length ? "Estudado: " + estudadosPorDia[d].length + " assunto(s)" : "";
      tb.appendChild(h("tr", { class: d === hj ? "hoje" : "" },
        h("td", {}, DIAS[i] + " " + curtoBR(d)), h("td", {}, prev ? fmtMin(prev) : "—"),
        h("td", {}, pl ? pl.ativ : (i === 4 ? "Revisão e caderno de erros" : i === 5 ? "Conteúdo aprofundado e questões" : i === 6 ? "Revisão, simulado ou consolidação" : "Teoria e questões")),
        h("td", {}, alvo || (passado ? feitos || "—" : "—")), h("td", {}, real ? fmtMin(real) : "—"), h("td", {}, h("span", { class: "badge " + cls }, sit))));
    }
    main.appendChild(h("div", { class: "tscroll" }, h("table", { class: "table" },
      h("thead", {}, h("tr", {}, h("th", {}, "Dia"), h("th", {}, "Previsto"), h("th", {}, "Atividade"), h("th", {}, "Assunto previsto / estudado"), h("th", {}, "Registrado"), h("th", {}, "Situação"))), tb)));
    main.appendChild(h("div", { class: "stats" },
      h("div", { class: "stat" }, h("b", {}, fmtMin(totPrev)), h("span", {}, "previsto na semana")),
      h("div", { class: "stat" }, h("b", {}, fmtMin(totReal)), h("span", {}, "registrado"), TP.barra(Math.min(totReal, totPrev), totPrev)),
      h("div", { class: "stat" }, h("b", {}, totPrev ? Math.round(100 * totReal / totPrev) + "%" : "—"), h("span", {}, "do previsto"))));
    main.appendChild(h("p", { class: "muted" }, "Dias passados sem registro aparecem como “não realizada”: nada é apagado nem marcado como concluído, e o assunto previsto continua na fila dos próximos dias. Revisão semanal (metodologia, seção 16): confira horas, revisões atrasadas, erros e prioridades antes de planejar a próxima semana."));
  }

  /* ---------- Mês ---------- */
  function mes(main, ym) {
    var hj = TP.hoje(), alvo = ym && /^\d{4}-\d{2}$/.test(ym) ? ym : hj.slice(0, 7), a = +alvo.slice(0, 4), m = +alvo.slice(5, 7);
    var primeiro = alvo + "-01", ult = TP.hoje(new Date(a, m, 0, 12)), nDias = +ult.slice(8, 10);
    function vizinho(delta) { var d = new Date(a, m - 1 + delta, 1, 12); return TP.hoje(d).slice(0, 7); }
    main.appendChild(h("div", { class: "nav2" },
      h("a", { class: "btn", href: "#/plano/mes/" + vizinho(-1) }, "← " + MESES[(m + 10) % 12]),
      h("strong", {}, MESES[m - 1] + " de " + a),
      h("a", { class: "btn", href: "#/plano/mes/" + vizinho(1) }, MESES[m % 12] + " →")));
    var p = cfg(), d = TP.dados(), venc = {};
    Object.keys(d.revisoes).forEach(function (k) { var x = d.revisoes[k].due; venc[x] = (venc[x] || 0) + 1; });
    Object.keys(d.flashcards).forEach(function (k) { var x = d.flashcards[k].due; venc[x] = (venc[x] || 0) + 1; });
    var tb = h("tbody", {}), linha = h("tr", {}), prevMes = 0, realMes = 0, diasEstudo = 0;
    for (var v = 0; v < idxSemana(primeiro); v++) linha.appendChild(h("td", { class: "vazio" }));
    for (var dia = 1; dia <= nDias; dia++) {
      var data = alvo + "-" + (dia < 10 ? "0" : "") + dia, i = idxSemana(data), real = minutosDe(data), prev = p.minutos[i];
      prevMes += prev; realMes += real; if (real) diasEstudo++;
      var passadoOuHoje = data <= hj, rv = venc[data] || 0;
      var cel = h("td", { class: (data === hj ? "hoje " : "") + (p.prova === data ? "prova" : "") },
        h("a", { href: "#/plano/semana/" + data, class: "dia-n" }, String(dia)),
        real ? h("span", { class: "dia-real" }, fmtMin(real)) : (passadoOuHoje || !prev ? null : h("span", { class: "dia-prev" }, fmtMin(prev))),
        rv && data >= hj ? h("span", { class: "dia-rev", title: rv + " revisão(ões) previstas (teoria, erros e flashcards)" }, rv + " rev.") : null,
        p.prova === data ? h("span", { class: "dia-prova" }, "PROVA") : null);
      linha.appendChild(cel);
      if (i === 6 || dia === nDias) { tb.appendChild(linha); linha = h("tr", {}); }
    }
    main.appendChild(h("div", { class: "tscroll" }, h("table", { class: "table cal" },
      h("thead", {}, h("tr", {}, DIAS_CURTO.map(function (x) { return h("th", {}, x); }))), tb)));
    main.appendChild(h("div", { class: "stats" },
      h("div", { class: "stat" }, h("b", {}, fmtMin(realMes)), h("span", {}, "registrado no mês"), TP.barra(Math.min(realMes, prevMes), prevMes)),
      h("div", { class: "stat" }, h("b", {}, fmtMin(prevMes)), h("span", {}, "capacidade configurada no mês")),
      h("div", { class: "stat" }, h("b", {}, String(diasEstudo)), h("span", {}, "dias com estudo registrado"))));
    main.appendChild(h("p", { class: "muted" }, "Tempo = soma das sessões registradas (não inclui o tempo de flashcards e questões que você não registrou como sessão). Em dias futuros, “rev.” = revisões que vencem naquele dia (teoria, erros e flashcards já agendados). Revisão mensal (metodologia, seção 16): avalie a evolução por módulo, a cobertura e ajuste a distribuição do tempo."));
  }

  /* ---------- Metas e ajustes ---------- */
  function metas(main) {
    var p = cfg(), pool = assuntos(), todos = pool.esp.concat(pool.ger), est = TP.dados().estudados;
    var feitos = todos.filter(function (x) { return est[x.a.id]; }).length, faltam = todos.length - feitos, hj = TP.hoje();
    main.appendChild(h("h2", {}, "Cobertura e ritmo"));
    main.appendChild(h("div", { class: "stats" },
      h("div", { class: "stat" }, h("b", {}, feitos + "/" + todos.length), h("span", {}, "assuntos de teoria estudados"), TP.barra(feitos, todos.length)),
      h("div", { class: "stat" }, h("b", {}, p.prova ? Math.max(0, TP.difDias(p.prova, hj)) + " d" : "—"), h("span", {}, p.prova ? "até a prova (" + TP.dataBR(p.prova) + ")" : "data da prova não informada"))));
    /* Ritmo realizado nas últimas 4 semanas (assuntos marcados como estudados) */
    var ini28 = TP.addDias(hj, -27), ult28 = todos.filter(function (x) { return est[x.a.id] && est[x.a.id] >= ini28 && est[x.a.id] <= hj; }).length;
    main.appendChild(h("p", {}, "Ritmo recente: ", h("b", {}, (ult28 / 4).toFixed(1).replace(".", ",")), " assuntos estudados por semana (últimas 4 semanas, " + ult28 + " no total)."));
    if (p.prova) {
      var dias = TP.difDias(p.prova, hj);
      if (dias <= 0) main.appendChild(h("div", { class: "notice" }, "A data da prova já passou ou é hoje. Atualize-a se mudou."));
      else {
        var semanas = dias / 7, util = Math.max(0, semanas - p.reserva), nec = util > 0 ? faltam / util : null;
        main.appendChild(h("p", {}, "Faltam ", h("b", {}, faltam + " assunto(s)"), " de teoria e ", h("b", {}, semanas.toFixed(1).replace(".", ",") + " semanas"), " até a prova. Reservando ", h("b", {}, p.reserva + " semanas"), " finais sem teoria nova (revisão, simulados), o ritmo necessário é ",
          nec == null ? h("b", {}, "inviável com essa reserva") : h("b", {}, nec.toFixed(1).replace(".", ",") + " assuntos por semana"), "."));
        if (nec != null && ult28 > 0 && nec > ult28 / 4 * 1.2) main.appendChild(h("div", { class: "notice" }, "O ritmo necessário está acima do seu ritmo recente. Considere ampliar o tempo semanal, priorizar com base em Desempenho ou reduzir a reserva — sem retirar itens do edital."));
        else if (nec != null && ult28 === 0 && faltam) main.appendChild(h("p", { class: "muted" }, "Ainda sem estudos registrados nas últimas 4 semanas: não há ritmo recente para comparar."));
      }
    } else main.appendChild(h("p", { class: "muted" }, "Informe a data da prova (abaixo) para calcular o ritmo necessário. A data não está registrada no material do projeto."));

    main.appendChild(h("h2", {}, "Ajustes do plano"));
    var iProva = h("input", { type: "date", id: "m-prova", value: p.prova });
    var iRes = h("input", { type: "number", id: "m-res", min: "0", max: "20", value: String(p.reserva) });
    var campos = DIAS.map(function (n, i) { return h("label", { for: "m-d" + i }, n + " (min)", h("input", { type: "number", id: "m-d" + i, min: "0", max: "720", step: "5", value: String(p.minutos[i]) })); });
    var f = h("form", { class: "sessao-form" },
      h("div", { class: "filters" }, h("label", { for: "m-prova" }, "Data da prova", iProva), h("label", { for: "m-res" }, "Semanas finais sem teoria nova", iRes)),
      h("div", { class: "filters" }, campos),
      h("div", { class: "row" }, h("button", { class: "btn primary", type: "submit" }, "Salvar ajustes"),
        h("button", { class: "btn", type: "button", onclick: function () { p.minutos = PADRAO_MIN.slice(); p.reserva = RESERVA_PADRAO; TP.salvar(); TP.navegar(); } }, "Restaurar o modelo da metodologia")));
    f.addEventListener("submit", function (ev) {
      ev.preventDefault();
      p.prova = iProva.value || "";
      p.reserva = Math.max(0, parseInt(iRes.value, 10) || 0);
      p.minutos = DIAS.map(function (n, i) { var v = parseInt(document.getElementById("m-d" + i).value, 10); return v >= 0 ? v : PADRAO_MIN[i]; });
      TP.salvar(); TP.toast("Ajustes salvos."); TP.navegar();
    });
    main.appendChild(f);
    main.appendChild(h("p", { class: "muted" }, "Modelo inicial da metodologia: 90 min de segunda a sexta e 180 min no sábado e no domingo (13h30 por semana). Os blocos de cada sessão seguem as proporções das seções 4.1 e 4.2. O plano é só uma sugestão: ajuste ao tempo real que você tem. As " + RESERVA_PADRAO + " semanas de reserva são uma premissa do projeto, não do edital."));
  }

  TP.rota("plano", function (main, args) {
    main.appendChild(h("p", { class: "eyebrow" }, "Estudo ativo"));
    main.appendChild(h("h1", {}, "Plano de estudos"));
    var aba = args[0] || "";
    if (!cfg().inicio) { cfg().inicio = TP.hoje(); TP.salvar(); }   /* dias anteriores ao primeiro uso do plano não contam como não realizados */
    abas(main, ["semana", "mes", "metas"].indexOf(aba) >= 0 ? aba : "");
    if (aba === "semana") semana(main, args[1]);
    else if (aba === "mes") mes(main, args[1]);
    else if (aba === "metas") metas(main);
    else hoje(main);
  });
})();
