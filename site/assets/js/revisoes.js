/* Revisão espaçada (T10): fila unificada de revisões (atrasadas, hoje, próximas), ligada a
   teoria estudada, caderno de erros e flashcards. Motor e escada de intervalos: reviews.js.
   Dados: dados.revisoes["c:<assunto>"] e dados.revisoes["e:<questão>"]; flashcards ficam em dados.flashcards. */
(function () {
  "use strict";
  var h = function () { return TP.h.apply(null, arguments); };

  /* Mantém dados.revisoes coerente com o que o usuário registrou: cria as revisões que faltam
     (teoria marcada como estudada, erro em aberto) e remove as que perderam a origem. Idempotente. */
  TP.revSincronizar = function () {
    var d = TP.dados(), rv = d.revisoes, mudou = false;
    Object.keys(d.estudados).forEach(function (id) {
      var k = "c:" + id;
      if (!rv[k]) { rv[k] = TP.revNovo(d.estudados[id]); mudou = true; }
    });
    Object.keys(d.erros).forEach(function (qid) {
      var k = "e:" + qid, er = d.erros[qid];
      if (er.resolvido) return;
      if (!rv[k]) { rv[k] = TP.revNovo(er.data || TP.hoje()); mudou = true; }
    });
    Object.keys(rv).forEach(function (k) {
      var id = k.slice(2), ok = k.charAt(0) === "c" ? !!d.estudados[id] : !!(d.erros[id] && !d.erros[id].resolvido);
      if (!ok) { delete rv[k]; mudou = true; }
    });
    return mudou;
  };

  /* Erro novo ou repetido: recomeça em R1. */
  TP.revErro = function (qid) { TP.dados().revisoes["e:" + qid] = TP.revNovo(); };

  /* Contagens para o início e o painel. Não depende do arquivo de cartões. */
  TP.revContagem = function () {
    var d = TP.dados(), hoje = TP.hoje(), lim = TP.addDias(hoje, 7), r = { atrasadas: 0, hoje: 0, prox7: 0, total: 0, fcVencidos: 0, fcAgendados: 0 };
    Object.keys(d.revisoes).forEach(function (k) {
      var e = d.revisoes[k]; r.total++;
      if (e.due < hoje) r.atrasadas++; else if (e.due === hoje) r.hoje++; else if (e.due <= lim) r.prox7++;
    });
    Object.keys(d.flashcards).forEach(function (id) {
      var e = d.flashcards[id]; r.fcAgendados++;
      if (e.due <= hoje) r.fcVencidos++;
    });
    return r;
  };

  function nomeGrupo(gid) {
    var g = TP.data.conteudo.grupos.filter(function (x) { return x.id === gid; })[0];
    return g ? (g.tipo === "especifico" ? "M" + parseInt(g.numero, 10) + " · " + g.titulo : "Gerais · " + g.titulo) : gid;
  }
  function assuntoPorId(id) {
    var r = null;
    TP.data.conteudo.grupos.forEach(function (g) { g.assuntos.forEach(function (a) { if (a.id === id) r = { a: a, g: g }; }); });
    return r;
  }

  /* Lista as revisões (conteúdo e erros) já resolvendo título e link. */
  function itens() {
    var d = TP.dados(), qmapa = {}, out = [];
    TP.data.questoes.forEach(function (q) { qmapa[q.id] = q; });
    Object.keys(d.revisoes).forEach(function (k) {
      var e = d.revisoes[k], id = k.slice(2), x;
      if (k.charAt(0) === "c") {
        x = assuntoPorId(id); if (!x) return;
        out.push({ k: k, e: e, tipo: "Teoria", titulo: x.a.titulo, sub: nomeGrupo(x.g.id), href: "#/conteudo/" + x.a.id,
          acao: "Reler e testar-se", href2: "#/flashcards/sessao/tudo/" + x.a.id + "/todos", acao2: "Treinar flashcards" });
      } else {
        var q = qmapa[id]; if (!q) return;
        out.push({ k: k, e: e, tipo: "Erro", titulo: q.id + " · " + q.assunto, sub: TP.NOMES_MOD[q.modulo], href: "#/questoes/" + q.id,
          acao: "Refazer a questão", href2: "#/erros", acao2: "Caderno de erros" });
      }
    });
    out.sort(function (a, b) { return a.e.due < b.e.due ? -1 : a.e.due > b.e.due ? 1 : (b.e.e || 0) - (a.e.e || 0); });
    return out;
  }

  function rotuloEstagio(e) { return "R" + (Math.min(e.s, 4) + 1) + " (" + TP.REV_INT[Math.max(0, Math.min(e.s, 4))] + " d)"; }

  function linhaItem(it, aoAvaliar) {
    var hoje = TP.hoje(), atraso = TP.difDias(hoje, it.e.due);
    var quando = atraso > 0 ? "atrasada " + atraso + (atraso === 1 ? " dia" : " dias") : atraso === 0 ? "hoje" : "em " + (-atraso) + (atraso === -1 ? " dia" : " dias") + " (" + TP.dataBR(it.e.due) + ")";
    var info = h("div", { class: "rev-info" },
      h("div", {}, h("span", { class: "badge " + (it.tipo === "Erro" ? "err" : "") }, it.tipo), " ", h("a", { href: it.href }, it.titulo)),
      h("div", { class: "muted" }, it.sub + " · próxima: " + rotuloEstagio(it.e) + " · " + quando + (it.e.e ? " · errou " + it.e.e + "×" : "") + (it.e.n ? " · revisada " + it.e.n + "×" : "")),
      h("div", { class: "muted" }, h("a", { href: it.href }, it.acao), " · ", h("a", { href: it.href2 }, it.acao2)));
    var notas = h("div", { class: "rev-notas", role: "group", "aria-label": "Resultado da revisão" });
    TP.REV_RES.forEach(function (r) {
      notas.appendChild(h("button", { class: "btn fc-nota " + r[0], type: "button", title: "Volta em " + TP.revPrevia(it.e, r[0]) + " dia(s)", onclick: function () { aoAvaliar(it, r[0]); } },
        h("b", {}, r[1]), h("span", {}, TP.revPrevia(it.e, r[0]) + " d")));
    });
    return h("div", { class: "rev-item" }, info, notas);
  }

  TP.rota("revisoes", function (main) {
    main.appendChild(h("p", { class: "eyebrow" }, "Estudo ativo"));
    main.appendChild(h("h1", {}, "Revisões"));
    main.appendChild(h("p", { class: "lead" }, "Revisão espaçada: cada assunto estudado, cada erro e cada flashcard volta depois de 24 h, 7, 15, 30 e 60 dias. Você decide o resultado (errei, difícil, médio, fácil) e o intervalo se ajusta."));
    var corpo = h("div", {});
    main.appendChild(corpo);
    if (TP.revSincronizar()) TP.salvar();

    function desenhar() {
      corpo.textContent = "";
      var c = TP.revContagem(), its = itens(), hoje = TP.hoje(), lim = TP.addDias(hoje, 7);
      var atr = its.filter(function (i) { return i.e.due < hoje; }), hj = its.filter(function (i) { return i.e.due === hoje; });
      var prox = its.filter(function (i) { return i.e.due > hoje && i.e.due <= lim; }), depois = its.filter(function (i) { return i.e.due > lim; });

      corpo.appendChild(h("div", { class: "stats" },
        h("div", { class: "stat" }, h("b", {}, String(atr.length)), h("span", {}, "atrasadas (teoria e erros)")),
        h("div", { class: "stat" }, h("b", {}, String(hj.length)), h("span", {}, "para hoje (teoria e erros)")),
        h("div", { class: "stat" }, h("b", {}, String(c.fcVencidos)), h("span", {}, "flashcards vencidos")),
        h("div", { class: "stat" }, h("b", {}, String(prox.length)), h("span", {}, "nos próximos 7 dias"))));

      if (c.fcVencidos) corpo.appendChild(h("div", { class: "row" }, h("a", { class: "btn primary", href: "#/flashcards/sessao/revisar/todos/todos" }, "Revisar flashcards vencidos (" + c.fcVencidos + ")")));

      function aoAvaliar(it, res) {
        TP.revAplicar(TP.dados().revisoes[it.k], res);
        TP.somaAtividade("rev", 1);
        if (res === "medio" || res === "facil") TP.somaAtividade("revOk", 1);
        TP.salvar(); desenhar();
      }
      function secao(titulo, lista, vazio, extra) {
        corpo.appendChild(h("h2", {}, titulo + " (" + lista.length + ")"));
        if (extra) corpo.appendChild(extra);
        if (!lista.length) { corpo.appendChild(h("p", { class: "muted" }, vazio)); return; }
        lista.forEach(function (it) { corpo.appendChild(linhaItem(it, aoAvaliar)); });
      }

      var reprog = null;
      if (atr.length > 3) {
        var sel = h("select", { id: "rep-dias", "aria-label": "Distribuir em quantos dias" }, [3, 5, 7, 10].map(function (n) { return h("option", { value: String(n), selected: n === 5 }, n + " dias"); }));
        reprog = h("div", { class: "notice" }, "Revisões acumuladas atrapalham mais do que ajudam. Você pode redistribuir as atrasadas pelos próximos dias (mantendo o degrau de cada uma): ",
          h("label", { for: "rep-dias" }, "distribuir em "), sel, " ",
          h("button", { class: "btn", type: "button", onclick: function () {
            var n = parseInt(sel.value, 10), por = Math.ceil(atr.length / n);
            if (!confirm("Redistribuir " + atr.length + " revisões atrasadas pelos próximos " + n + " dias (cerca de " + por + " por dia)?")) return;
            atr.forEach(function (it, i) { TP.dados().revisoes[it.k].due = TP.addDias(hoje, Math.floor(i / por)); });
            TP.salvar(); TP.toast("Revisões atrasadas redistribuídas."); desenhar();
          } }, "Redistribuir"));
      }
      secao("Atrasadas", atr, "Nenhuma revisão atrasada.", reprog);
      secao("Hoje", hj, "Nada de teoria ou erros para hoje." + (c.total ? "" : " Marque assuntos como estudados e erre questões: as revisões nascem daí."));
      secao("Próximos 7 dias", prox, "Nada agendado nos próximos 7 dias.");
      if (depois.length) {
        corpo.appendChild(h("h2", {}, "Mais adiante (" + depois.length + ")"));
        var det = h("details", {}, h("summary", {}, "Mostrar lista"));
        depois.forEach(function (it) {
          det.appendChild(h("p", { class: "muted" }, TP.dataBR(it.e.due) + " · " + it.tipo + " · ", h("a", { href: it.href }, it.titulo), " · " + rotuloEstagio(it.e)));
        });
        corpo.appendChild(det);
      }
      corpo.appendChild(h("div", { class: "notice" }, "Intervalos: R1 24 h, R2 7 d, R3 15 d, R4 30 d (metodologia) e 60 d como degrau final (ajuste do projeto). Errei volta ao R1; difícil recua um degrau; médio avança um; fácil avança dois. Teoria entra na fila quando você a marca como estudada; erros, quando você erra uma questão (some ao marcar “Resolvido” no caderno de erros). As datas usam o relógio deste dispositivo."));
    }
    desenhar();
  });
})();
