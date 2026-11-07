/* Caderno de erros: toda resposta errada é registrada; o usuário classifica e resolve. */
(function () {
  "use strict";
  var h = function () { return TP.h.apply(null, arguments); };
  var TIPOS = ["", "Falta de conhecimento", "Interpretação", "Confusão conceitual", "Cálculo", "Desatenção", "Gestão de tempo", "Chute", "Dúvida entre alternativas"];

  TP.registrarErro = function (qid) {
    var e = TP.dados().erros;
    if (!e[qid]) e[qid] = { tipo: "", obs: "", resolvido: false, data: TP.hoje() };
    else e[qid].resolvido = false;
    /* Erro (ou erro repetido): a revisão recomeça em R1, 24 h depois (metodologia, 8.3: erro recorrente reduz o intervalo). */
    if (TP.revErro) TP.revErro(qid);
  };

  TP.rota("erros", function (main) {
    var er = TP.dados().erros, ids = Object.keys(er);
    var qmap = {}; TP.data.questoes.forEach(function (q) { qmap[q.id] = q; });
    main.appendChild(h("p", { class: "eyebrow" }, "Revisão"));
    main.appendChild(h("h1", {}, "Caderno de erros"));
    main.appendChild(h("p", { class: "lead" }, "As questões respondidas incorretamente entram aqui automaticamente. Classifique o motivo do erro e anote o que aprender."));
    if (!ids.length) { main.appendChild(h("div", { class: "notice" }, "Nenhum erro registrado ainda. Resolva questões em Questões.")); return; }
    var abertos = ids.filter(function (i) { return !er[i].resolvido; }).length;
    main.appendChild(h("p", { class: "muted" }, abertos + " em aberto · " + (ids.length - abertos) + " resolvido(s)."));
    ids.sort().forEach(function (id) {
      var e = er[id], q = qmap[id];
      if (!q) return;
      var sel = h("select", { id: "t-" + id, "aria-label": "Tipo de erro", onchange: function (ev) { e.tipo = ev.target.value; TP.salvar(); } },
        TIPOS.map(function (t) { return h("option", { value: t, selected: e.tipo === t }, t || "Tipo do erro…"); }));
      var obs = h("textarea", { "aria-label": "Observações", placeholder: "O que levar para a revisão?", onchange: function (ev) { e.obs = ev.target.value; TP.salvar(); } });
      obs.value = e.obs;
      var chk = h("input", { type: "checkbox", id: "r-" + id, onchange: function (ev) { e.resolvido = ev.target.checked; if (TP.revSincronizar) TP.revSincronizar(); TP.salvar(); } });
      chk.checked = !!e.resolvido;
      main.appendChild(h("div", { class: "errcard" },
        h("div", { class: "row" }, h("a", { href: "#/questoes/" + id }, id + " · " + q.assunto), h("span", { class: "badge" }, TP.NOMES_MOD[q.modulo]), h("span", { class: "muted" }, e.data)),
        h("div", { class: "row" }, sel, h("label", {}, chk, " Resolvido")),
        obs));
    });
  });
})();
