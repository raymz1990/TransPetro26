/* Banco de questões: filtros, resolução, correção comentada, marcação e registro de erros. */
(function () {
  "use strict";
  var h = function () { return TP.h.apply(null, arguments); };
  var DIF = { facil: "Fácil", media: "Média", dificil: "Difícil" };
  var filtro = { modulo: "", dif: "", estado: "" };

  function passa(q) {
    if (filtro.modulo && q.modulo !== filtro.modulo) return false;
    if (filtro.dif && q.dificuldade !== filtro.dif) return false;
    var u = TP.ultimaResposta(q.id);
    if (filtro.estado === "nao" && u) return false;
    if (filtro.estado === "erradas" && !(u && !u.ok)) return false;
    if (filtro.estado === "marcadas" && !TP.dados().marcadas[q.id]) return false;
    return true;
  }

  function select(rotulo, chave, opcoes) {
    var s = h("select", { id: "f-" + chave, onchange: function (e) { filtro[chave] = e.target.value; TP.navegar(); } },
      opcoes.map(function (o) { return h("option", { value: o[0], selected: filtro[chave] === o[0] }, o[1]); }));
    return h("label", { for: "f-" + chave }, rotulo, s);
  }

  /* Lista + filtros */
  TP.rota("questoes", function (main, args) {
    var qs = TP.data.questoes;
    if (args[0]) return detalhe(main, args[0]);
    var lista = qs.filter(passa);
    var mods = Object.keys(TP.NOMES_MOD).map(function (k) { return [k, TP.NOMES_MOD[k]]; });
    main.appendChild(h("p", { class: "eyebrow" }, "Banco de questões"));
    main.appendChild(h("h1", {}, "Questões comentadas"));
    main.appendChild(h("p", { class: "lead" }, qs.length + " questões autorais (lote piloto, módulos 1 a 9). Não há ainda questões oficiais nem adaptadas, nem questões de Conhecimentos Gerais."));
    main.appendChild(h("div", { class: "filters" },
      select("Módulo", "modulo", [["", "Todos"]].concat(mods)),
      select("Dificuldade", "dif", [["", "Todas"], ["facil", "Fácil"], ["media", "Média"], ["dificil", "Difícil"]]),
      select("Situação", "estado", [["", "Todas"], ["nao", "Não respondidas"], ["erradas", "Erradas (última tentativa)"], ["marcadas", "Marcadas"]])));
    main.appendChild(h("p", { class: "muted", "aria-live": "polite" }, lista.length + " questão(ões) no filtro."));
    var ul = h("ul", { class: "list" });
    lista.forEach(function (q) {
      var u = TP.ultimaResposta(q.id);
      ul.appendChild(h("li", {},
        h("a", { href: "#/questoes/" + q.id }, q.id + " · " + q.assunto),
        h("span", { class: "badge" }, DIF[q.dificuldade] || q.dificuldade),
        TP.dados().marcadas[q.id] ? h("span", { class: "badge amber" }, "marcada") : null,
        u ? h("span", { class: "badge " + (u.ok ? "ok" : "err") }, u.ok ? "acertou" : "errou") : null));
    });
    main.appendChild(ul);
  });

  function detalhe(main, id) {
    var qs = TP.data.questoes.filter(passa);
    var q = TP.data.questoes.filter(function (x) { return x.id === id; })[0];
    if (!q) { main.appendChild(h("p", {}, "Questão inexistente.")); return; }
    var pos = qs.indexOf(q);
    var respondida = null;           /* resposta desta sessão de tela */
    main.appendChild(h("p", { class: "eyebrow" }, TP.NOMES_MOD[q.modulo] + " · item " + q.item_edital));
    main.appendChild(h("h1", {}, q.id));
    main.appendChild(h("div", { class: "qhead" },
      h("span", { class: "badge" }, q.rotulo.replace(/\.$/, "")),
      h("span", { class: "badge" }, DIF[q.dificuldade]),
      h("span", { class: "badge" }, q.assunto)));
    main.appendChild(h("div", { class: "qtext prose", html: TP.md(q.enunciado) }));
    var ul = h("div", { class: "alts", role: "group", "aria-label": "Alternativas" });
    var area = h("div", { "aria-live": "polite" });
    var botoes = {};
    Object.keys(q.alternativas).forEach(function (l) {
      var b = h("button", { class: "alt", type: "button", onclick: function () { responder(l); } },
        h("b", {}, l), h("span", {}, q.alternativas[l]));
      botoes[l] = b; ul.appendChild(b);
    });
    main.appendChild(ul); main.appendChild(area);

    function responder(l) {
      if (respondida) return;
      respondida = l;
      var ok = l === q.gabarito;
      var d = TP.dados();
      (d.respostas[q.id] = d.respostas[q.id] || []).push({ r: l, ok: ok, t: Date.now() });
      if (!ok) TP.registrarErro(q.id);
      TP.salvar();
      Object.keys(botoes).forEach(function (k) {
        botoes[k].disabled = true;
        if (k === q.gabarito) botoes[k].classList.add("right");
        else if (k === l) botoes[k].classList.add("wrong");
      });
      var an = h("ul", {});
      Object.keys(q.analise_alternativas).forEach(function (k) {
        an.appendChild(h("li", { html: "<strong>" + k + ")</strong> " + TP.mdInline(q.analise_alternativas[k]) }));
      });
      area.appendChild(h("div", { class: "explain prose" },
        h("h3", {}, ok ? "Correto. Gabarito: " + q.gabarito : "Incorreto. Gabarito: " + q.gabarito + " (você marcou " + l + ")"),
        h("div", { html: TP.md(q.resolucao) }),
        h("h4", {}, "Análise das alternativas"), an,
        h("h4", {}, "Ponto de atenção"), h("div", { html: TP.md(q.ponto_atencao) }),
        h("h4", {}, "Revisão rápida"), h("div", { html: TP.md(q.revisao_rapida) })));
    }

    var marc = h("button", { class: "btn", type: "button", "aria-pressed": String(!!TP.dados().marcadas[q.id]) }, TP.dados().marcadas[q.id] ? "Desmarcar" : "Marcar para revisão");
    marc.addEventListener("click", function () {
      var m = TP.dados().marcadas;
      if (m[q.id]) delete m[q.id]; else m[q.id] = true;
      TP.salvar(); marc.textContent = m[q.id] ? "Desmarcar" : "Marcar para revisão"; marc.setAttribute("aria-pressed", String(!!m[q.id]));
    });
    var prev = pos > 0 ? qs[pos - 1].id : null, next = pos >= 0 && pos < qs.length - 1 ? qs[pos + 1].id : null;
    main.appendChild(h("div", { class: "nav2" },
      prev ? h("a", { class: "btn", href: "#/questoes/" + prev }, "← Anterior") : h("a", { class: "btn", href: "#/questoes" }, "← Lista"),
      marc,
      next ? h("a", { class: "btn primary", href: "#/questoes/" + next }, "Próxima →") : h("a", { class: "btn", href: "#/questoes" }, "Lista")));
    main.appendChild(h("p", { class: "muted" }, "Questão autoral criada pelo projeto; não é questão de prova nem foi elaborada pela banca."));
  }
})();
