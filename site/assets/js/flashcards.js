/* Flashcards (T09): painel, sessão de estudo e ligação com a teoria.
   Cartões vêm de assets/data/flashcards.json (gerado por tools/build_flashcards.py a partir da teoria e das questões).
   O progresso (degrau, próxima data, resultados) fica em dados.flashcards, no localStorage deste navegador. */
(function () {
  "use strict";
  var h = function () { return TP.h.apply(null, arguments); };
  var TIPOS = { tabela: "Conceitos (tabelas da teoria)", comparacao: "Comparações entre conceitos", questao: "Pontos-chave das questões" };
  var ROTULO_TIPO = { tabela: "Conceito", comparacao: "Comparação", questao: "Ponto-chave de questão" };
  var LIMITE_SESSAO = 50;     /* cartões por sessão de revisão */
  var NOVOS_PADRAO = 20;
  var cache = null;

  /* Carrega (uma vez) o baralho; devolve { lista, mapa }. */
  TP.fcCarregar = function () {
    if (cache) return cache;
    cache = fetch("assets/data/flashcards.json").then(function (r) {
      if (!r.ok) throw new Error("flashcards.json (HTTP " + r.status + ")");
      return r.json();
    }).then(function (j) {
      var mapa = {}; j.cartoes.forEach(function (c) { mapa[c.id] = c; });
      return { lista: j.cartoes, mapa: mapa, aviso: j.aviso, porTipo: j.por_tipo };
    });
    cache.catch(function () { cache = null; });
    return cache;
  };

  function novosPorDia() { var n = TP.dados().config.novos_dia; return typeof n === "number" ? n : NOVOS_PADRAO; }
  function novosHoje() { var a = TP.dados().atividade[TP.hoje()]; return a && a.fcNovos ? a.fcNovos : 0; }
  function estadoDe(c) {
    var e = TP.dados().flashcards[c.id];
    if (!e) return "novo";
    return e.due <= TP.hoje() ? "vencido" : "agendado";
  }
  function nomeGrupo(gid) {
    var g = TP.data.conteudo.grupos.filter(function (x) { return x.id === gid; })[0];
    if (!g) return gid;
    return g.tipo === "especifico" ? "M" + parseInt(g.numero, 10) + " · " + g.titulo : "Gerais · " + g.titulo;
  }
  function tituloAssunto(aid) {
    var r = "";
    TP.data.conteudo.grupos.forEach(function (g) { g.assuntos.forEach(function (a) { if (a.id === aid) r = a.titulo; }); });
    return r;
  }
  function casaAlvo(c, alvo, tipo) {
    if (tipo && tipo !== "todos" && c.t !== tipo) return false;
    return !alvo || alvo === "todos" || c.g === alvo || c.a === alvo;
  }

  /* Contagens de um conjunto de cartões. */
  function contar(lista) {
    var r = { total: 0, novos: 0, vencidos: 0, aprendendo: 0, maduros: 0, dificeis: 0 }, e;
    lista.forEach(function (c) {
      r.total++;
      e = TP.dados().flashcards[c.id];
      if (!e) { r.novos++; return; }
      if (e.due <= TP.hoje()) r.vencidos++;
      if (TP.revMaduro(e)) r.maduros++; else r.aprendendo++;
      if (e.r === "errei" || e.r === "dificil") r.dificeis++;
    });
    return r;
  }
  TP.fcContar = contar;

  /* Monta a fila de uma sessão. Devolve { ids, treino }. */
  function montarFila(lista, modo, alvo, tipo) {
    var cs = lista.filter(function (c) { return casaAlvo(c, alvo, tipo); }), dados = TP.dados().flashcards, hoje = TP.hoje();
    var ids = [], treino = false;
    function novos(n) { return cs.filter(function (c) { return !dados[c.id]; }).slice(0, n).map(function (c) { return c.id; }); }
    if (modo === "revisar") {
      var venc = cs.filter(function (c) { return dados[c.id] && dados[c.id].due <= hoje; })
        .sort(function (a, b) { return dados[a.id].due < dados[b.id].due ? -1 : dados[a.id].due > dados[b.id].due ? 1 : 0; })
        .slice(0, LIMITE_SESSAO).map(function (c) { return c.id; });
      ids = venc.concat(novos(Math.max(0, Math.min(novosPorDia() - novosHoje(), LIMITE_SESSAO - venc.length))));
    } else if (modo === "novos") ids = novos(Math.max(0, novosPorDia() - novosHoje()));
    else if (modo === "maisnovos") ids = novos(10);
    else if (modo === "dificeis") {
      treino = true;
      ids = cs.filter(function (c) { var e = dados[c.id]; return e && (e.r === "errei" || e.r === "dificil"); }).map(function (c) { return c.id; });
    } else { treino = true; ids = cs.map(function (c) { return c.id; }); }
    if (treino) {                 /* embaralha (Fisher-Yates) e limita */
      for (var i = ids.length - 1; i > 0; i--) { var j = Math.floor(Math.random() * (i + 1)), t = ids[i]; ids[i] = ids[j]; ids[j] = t; }
      ids = ids.slice(0, LIMITE_SESSAO);
    }
    return { ids: ids, treino: treino };
  }

  function linkSessao(modo, alvo, tipo) { return "#/flashcards/sessao/" + modo + "/" + (alvo || "todos") + "/" + (tipo || "todos"); }

  var filtroTipo = "todos";

  /* ---------- Painel ---------- */
  function painel(main) {
    main.appendChild(h("p", { class: "eyebrow" }, "Estudo ativo"));
    main.appendChild(h("h1", {}, "Flashcards"));
    main.appendChild(h("p", { class: "lead" }, "Recuperação ativa: veja a pergunta, lembre a resposta, revele e classifique o quanto foi difícil. A classificação define quando o cartão volta (24 h, 7, 15, 30 e 60 dias; ajustes pelo resultado)."));
    var corpo = h("div", {}, h("p", { class: "muted" }, "Carregando cartões…"));
    main.appendChild(corpo);
    TP.fcCarregar().then(function (b) {
      corpo.textContent = "";
      var tot = contar(b.lista), restNovos = Math.max(0, novosPorDia() - novosHoje());
      corpo.appendChild(h("div", { class: "stats" },
        h("div", { class: "stat" }, h("b", {}, String(tot.vencidos)), h("span", {}, "vencidos para revisar")),
        h("div", { class: "stat" }, h("b", {}, restNovos + "/" + novosPorDia()), h("span", {}, "novos liberados hoje")),
        h("div", { class: "stat" }, h("b", {}, String(tot.aprendendo)), h("span", {}, "em aprendizado")),
        h("div", { class: "stat" }, h("b", {}, tot.maduros + "/" + tot.total), h("span", {}, "maduros (intervalo ≥ 30 d)"), TP.barra(tot.maduros, tot.total))));

      var selTipo = h("select", { id: "fc-tipo", onchange: function (e) { filtroTipo = e.target.value; TP.navegar(); } },
        [h("option", { value: "todos", selected: filtroTipo === "todos" }, "Todos os tipos")].concat(Object.keys(TIPOS).map(function (k) {
          return h("option", { value: k, selected: filtroTipo === k }, TIPOS[k] + " (" + b.porTipo[k] + ")");
        })));
      var selNovos = h("select", { id: "fc-novos", onchange: function (e) { TP.dados().config.novos_dia = parseInt(e.target.value, 10); TP.salvar(); TP.navegar(); } },
        [5, 10, 20, 30, 50].map(function (n) { return h("option", { value: String(n), selected: novosPorDia() === n }, String(n)); }));
      corpo.appendChild(h("div", { class: "filters" },
        h("label", { for: "fc-tipo" }, "Tipo de cartão", selTipo), h("label", { for: "fc-novos" }, "Cartões novos por dia", selNovos)));

      corpo.appendChild(h("div", { class: "row" },
        h("a", { class: "btn primary", href: linkSessao("revisar", "todos", filtroTipo) }, "Revisar agora (vencidos + novos)"),
        h("a", { class: "btn", href: linkSessao("maisnovos", "todos", filtroTipo) }, "Mais 10 novos"),
        h("a", { class: "btn", href: linkSessao("dificeis", "todos", filtroTipo) }, "Treinar os difíceis")));
      corpo.appendChild(h("p", { class: "muted" }, "“Treinar os difíceis” e “Treino livre” não alteram o agendamento. Cada sessão de revisão tem até " + LIMITE_SESSAO + " cartões."));

      var tb = h("tbody", {});
      TP.data.conteudo.grupos.forEach(function (g) {
        var cs = b.lista.filter(function (c) { return casaAlvo(c, g.id, filtroTipo); }), n = contar(cs);
        tb.appendChild(h("tr", {},
          h("td", {}, nomeGrupo(g.id)), h("td", {}, String(n.total)), h("td", {}, String(n.novos)), h("td", {}, String(n.vencidos)), h("td", {}, String(n.maduros)),
          h("td", {}, n.total ? [h("a", { class: "btn", href: linkSessao("revisar", g.id, filtroTipo) }, "Revisar"), " ",
            h("a", { class: "btn", href: linkSessao("tudo", g.id, filtroTipo) }, "Treino livre")] : "—")));
      });
      corpo.appendChild(h("h2", {}, "Baralhos por módulo"));
      corpo.appendChild(h("div", { class: "tscroll" }, h("table", { class: "table" },
        h("thead", {}, h("tr", {}, h("th", {}, "Módulo"), h("th", {}, "Cartões"), h("th", {}, "Novos"), h("th", {}, "Vencidos"), h("th", {}, "Maduros"), h("th", {}, ""))), tb)));
      corpo.appendChild(h("div", { class: "notice" }, b.aviso + " Cada cartão indica a origem e abre a teoria ou a questão correspondente. O edital prevalece sobre qualquer material do site."));
    }).catch(function (e) {
      corpo.textContent = "";
      corpo.appendChild(h("div", { class: "notice" }, "Não foi possível carregar os cartões: " + e.message));
    });
  }

  /* ---------- Sessão ---------- */
  function sessao(main, modo, alvo, tipo) {
    var NOMES_MODO = { revisar: "Revisão", novos: "Cartões novos", maisnovos: "Mais cartões novos", dificeis: "Treino dos difíceis", tudo: "Treino livre" };
    main.appendChild(h("p", { class: "eyebrow" }, "Flashcards · " + (NOMES_MODO[modo] || "Sessão")));
    var corpo = h("div", {}, h("p", { class: "muted" }, "Carregando cartões…"));
    main.appendChild(corpo);
    TP.fcCarregar().then(function (b) {
      var alvoNome = alvo && alvo !== "todos" ? (nomeGrupo(alvo) !== alvo ? nomeGrupo(alvo) : (tituloAssunto(alvo) || alvo)) : "Todos os módulos";
      var f = montarFila(b.lista, modo, alvo, tipo);
      corpo.textContent = "";
      corpo.appendChild(h("h1", {}, alvoNome));
      if (!f.ids.length) {
        var msg = modo === "revisar" ? "Nenhum cartão vencido e nenhum novo liberado para hoje neste filtro."
          : modo === "novos" ? "O limite de cartões novos de hoje foi atingido." : "Nenhum cartão disponível neste filtro.";
        corpo.appendChild(h("div", { class: "notice" }, msg));
        corpo.appendChild(h("div", { class: "row" }, h("a", { class: "btn", href: "#/flashcards" }, "← Flashcards"),
          modo === "novos" ? h("a", { class: "btn", href: linkSessao("maisnovos", alvo, tipo) }, "Liberar mais 10 novos") : null));
        return;
      }
      rodar(corpo, b, f, modo, alvo, tipo);
    }).catch(function (e) {
      corpo.textContent = "";
      corpo.appendChild(h("div", { class: "notice" }, "Não foi possível carregar os cartões: " + e.message));
    });
  }

  function rodar(corpo, b, f, modo, alvo, tipo) {
    var fila = f.ids.slice(), pos = 0, total = fila.length, reaparecidos = {}, rodada = { errei: 0, dificil: 0, medio: 0, facil: 0 };
    var seg = 0, entrou = Date.now(), revelado = false;
    var topo = h("div", { class: "fc-topo" });
    var palco = h("div", { class: "fc-palco", "aria-live": "polite" });
    corpo.appendChild(topo); corpo.appendChild(palco);

    function fechar() {
      document.removeEventListener("keydown", tecla);
      if (seg > 0) { TP.somaAtividade(f.treino ? "fcTreinoSeg" : "fcSeg", seg); seg = 0; TP.salvar(); }
    }
    TP.aoSair = fechar;

    function tecla(ev) {
      if (ev.ctrlKey || ev.metaKey || ev.altKey) return;
      var t = ev.target && ev.target.tagName;
      if (t === "INPUT" || t === "TEXTAREA" || t === "SELECT") return;
      if (!revelado && (ev.key === " " || ev.key === "Enter")) { ev.preventDefault(); revelar(); }
      else if (revelado && ev.key >= "1" && ev.key <= "4") { ev.preventDefault(); avaliar(TP.REV_RES[+ev.key - 1][0]); }
    }
    document.addEventListener("keydown", tecla);

    function textoFace(s) { return h("span", { html: TP.mdInline(s) }); }

    function mostrar() {
      var c = b.mapa[fila[pos]];
      revelado = false; entrou = Date.now();
      topo.textContent = "";
      topo.appendChild(h("span", { class: "muted" }, "Cartão " + (pos + 1) + " de " + fila.length + (f.treino ? " · treino (não altera o agendamento)" : "")));
      topo.appendChild(TP.barra(pos, fila.length));
      palco.textContent = "";
      var ctx = nomeGrupo(c.g) + (c.a ? " · " + tituloAssunto(c.a) : "") + (c.s ? " · " + c.s : "");
      var cartao = h("div", { class: "fc-card" },
        h("p", { class: "fc-ctx" }, ctx),
        h("p", { class: "fc-tipo" }, c.t === "tabela" ? c.h : ROTULO_TIPO[c.t]),
        h("p", { class: "fc-k" }, textoFace(c.k)),
        h("p", { class: "fc-p" }, c.p));
      palco.appendChild(cartao);
      palco.appendChild(h("div", { class: "row fc-acoes" },
        h("button", { class: "btn primary", type: "button", id: "fc-revelar", onclick: revelar }, "Mostrar resposta (Espaço)")));
      var rev = document.getElementById("fc-revelar"); if (rev) rev.focus({ preventScroll: true });
    }

    function revelar() {
      if (revelado) return; revelado = true;
      var c = b.mapa[fila[pos]], e = TP.dados().flashcards[c.id];
      var dl = h("dl", { class: "fc-verso" });
      c.v.forEach(function (par) { dl.appendChild(h("dt", {}, par[0])); dl.appendChild(h("dd", {}, textoFace(par[1]))); });
      var cartao = palco.querySelector(".fc-card");
      cartao.appendChild(h("hr"));
      cartao.appendChild(dl);
      var orig = c.q ? h("a", { href: "#/questoes/" + c.q }, "Ver a questão " + c.q) : h("a", { href: "#/conteudo/" + c.a }, "Abrir na teoria");
      cartao.appendChild(h("p", { class: "muted fc-orig" }, "Origem: " + (c.q ? "comentário da questão " + c.q : "teoria, seção “" + c.s + "”") + " · ", orig));
      var ac = palco.querySelector(".fc-acoes"); ac.textContent = "";
      TP.REV_RES.forEach(function (r, i) {
        var dias = TP.revPrevia(e, r[0]);
        ac.appendChild(h("button", { class: "btn fc-nota " + r[0], type: "button", onclick: function () { avaliar(r[0]); } },
          h("b", {}, (i + 1) + " · " + r[1]), h("span", {}, f.treino ? "sem agendar" : dias === 1 ? "volta em 1 dia" : "volta em " + dias + " dias")));
      });
      var primeiro = ac.querySelector("button"); if (primeiro) primeiro.focus({ preventScroll: true });
    }

    function avaliar(res) {
      if (!revelado) return;
      var c = b.mapa[fila[pos]], d = TP.dados();
      seg += Math.min(60, Math.round((Date.now() - entrou) / 1000));
      rodada[res]++;
      if (f.treino) TP.somaAtividade("fcTreino", 1);
      else {
        var e = d.flashcards[c.id], novo = !e;
        if (!e) e = d.flashcards[c.id] = { s: -1, due: TP.hoje(), ult: "", n: 0, e: 0, r: "" };
        TP.revAplicar(e, res);
        TP.somaAtividade("fc", 1);
        if (res === "medio" || res === "facil") TP.somaAtividade("fcOk", 1);
        if (novo) TP.somaAtividade("fcNovos", 1);
      }
      TP.salvar();
      /* Errei: o cartão volta ao fim desta sessão (uma vez), além do agendamento de amanhã. */
      if (res === "errei" && !reaparecidos[c.id]) { reaparecidos[c.id] = true; fila.push(c.id); }
      pos++;
      if (pos >= fila.length) fim(); else mostrar();
    }

    function fim() {
      fechar();
      topo.textContent = ""; palco.textContent = "";
      var feitos = rodada.errei + rodada.dificil + rodada.medio + rodada.facil, ok = rodada.medio + rodada.facil;
      palco.appendChild(h("h2", {}, "Sessão concluída"));
      palco.appendChild(h("div", { class: "stats" },
        h("div", { class: "stat" }, h("b", {}, String(feitos)), h("span", {}, "respostas (incluindo repetições dos errados)")),
        h("div", { class: "stat" }, h("b", {}, feitos ? Math.round(100 * ok / feitos) + "%" : "—"), h("span", {}, "médio ou fácil")),
        h("div", { class: "stat" }, h("b", {}, rodada.errei + " / " + rodada.dificil), h("span", {}, "errei / difícil"))));
      if (feitos < 20) palco.appendChild(h("p", { class: "muted" }, "Poucos cartões nesta sessão: o percentual é só indicativo."));
      var depois = modo === "revisar" ? montarFila(b.lista, "revisar", alvo, tipo) : null;
      palco.appendChild(h("div", { class: "row" },
        h("a", { class: "btn", href: "#/flashcards" }, "← Flashcards"),
        depois && depois.ids.length ? h("a", { class: "btn primary", href: linkSessao("revisar", alvo, tipo) }, "Continuar (" + depois.ids.length + " restantes)") : null,
        h("a", { class: "btn", href: "#/revisoes" }, "Fila de revisões")));
    }

    mostrar();
  }

  TP.rota("flashcards", function (main, args) {
    if (args[0] === "sessao") return sessao(main, args[1], args[2] || "todos", args[3] || "todos");
    painel(main);
  });

  /* Botão "Flashcards deste assunto" na página de teoria. */
  TP.fcBotaoAssunto = function (aid, destino) {
    TP.fcCarregar().then(function (b) {
      var cs = b.lista.filter(function (c) { return c.a === aid; });
      if (!cs.length || !destino.isConnected) return;
      var n = contar(cs);
      destino.appendChild(h("a", { class: "btn", href: linkSessao("revisar", aid, "todos") },
        "Flashcards deste assunto (" + cs.length + (n.vencidos ? ", " + n.vencidos + " vencidos" : "") + ")"));
      destino.appendChild(h("a", { class: "btn", href: linkSessao("tudo", aid, "todos") }, "Treino livre"));
    }).catch(function () { /* sem cartões: nada a mostrar */ });
  };
})();
