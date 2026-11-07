/* Inicialização e páginas: início, conteúdo, desempenho, dados e sobre. */
(function () {
  "use strict";
  var h = function () { return TP.h.apply(null, arguments); };

  function carregarJson(url) {
    return fetch(url).then(function (r) {
      if (!r.ok) throw new Error(url + " (HTTP " + r.status + ")");
      return r.json();
    });
  }

  function ultimoSimulado() {
    var d = TP.dados().simulados || { tentativas: [], andamento: {} }, ts = d.tentativas, and = Object.keys(d.andamento);
    if (and.length) return h("p", {}, "Em andamento: ", h("a", { href: "#/simulados/" + and[0] + "/prova" }, and[0]), ".");
    if (!ts.length) return h("p", { class: "muted" }, "Nenhuma tentativa ainda. ", h("a", { href: "#/simulados" }, "Ver simulados"), ".");
    var t = ts[ts.length - 1];
    return h("p", {}, h("a", { href: "#/simulados/" + t.sim + "/resultado/" + t.id }, t.titulo), h("br"), t.acertos + "/" + t.total + " acertos (" + Math.round(100 * t.acertos / t.total) + "%)");
  }

  /* ---------- Início ---------- */
  TP.rota("", function (main) {
    var c = TP.resumoConteudo(), q = TP.resumoQuestoes();
    var pct = q.respondidas ? Math.round(100 * q.acertos / q.respondidas) + "%" : "—";

    /* Identificação do concurso (fatos do edital 04/2026, conforme docs/CONTEXTO-ATUAL.md) */
    main.appendChild(h("p", { class: "eyebrow" }, "Processo Seletivo Público TRANSPETRO 2026.4"));
    main.appendChild(h("h1", {}, "Ênfase 5 — Análise de Sistemas: Processos de Negócios"));
    main.appendChild(h("dl", { class: "ident" },
      h("div", {}, h("dt", {}, "Banca"), h("dd", {}, "Fundação Cesgranrio")),
      h("div", {}, h("dt", {}, "Prova"), h("dd", {}, "70 questões: 50 específicas + 10 Português + 10 Inglês")),
      h("div", {}, h("dt", {}, "Formato"), h("dd", {}, "5 alternativas, 1 ponto cada, 4h30")),
      h("div", {}, h("dt", {}, "Corte"), h("dd", {}, "mínimo de 50% em Específicos e em Gerais"))));

    /* Progresso geral */
    main.appendChild(h("div", { class: "stats" },
      h("div", { class: "stat" }, h("b", {}, c.estudados + "/" + c.total), h("span", {}, "assuntos estudados"), TP.barra(c.estudados, c.total)),
      h("div", { class: "stat" }, h("b", {}, q.respondidas + "/" + q.total), h("span", {}, "questões respondidas"), TP.barra(q.respondidas, q.total)),
      h("div", { class: "stat" }, h("b", {}, pct), h("span", {}, q.respondidas ? "acertos (última tentativa)" : "sem respostas ainda"))));

    /* Atalhos */
    main.appendChild(h("div", { class: "row" },
      h("a", { class: "btn primary", href: "#/conteudo" }, "Estudar conteúdo"),
      h("a", { class: "btn", href: "#/questoes" }, "Resolver questões"),
      h("a", { class: "btn", href: "#/simulados" }, "Simulados"),
      h("a", { class: "btn", href: "#/erros" }, "Caderno de erros"),
      h("a", { class: "btn", href: "#/busca" }, "Buscar")));

    /* Painéis: rotina, revisões e simulado (o que ainda não existe é dito como tal) */
    var erros = TP.dados().erros ? Object.keys(TP.dados().erros).length : null;
    main.appendChild(h("div", { class: "panels" },
      h("section", { class: "panel" }, h("h3", {}, "Rotina de estudos"),
        h("p", { class: "muted" }, "Plano diário, semanal e mensal: ainda não implementado. Por ora, use a lista de conteúdo e marque o que estudou.")),
      h("section", { class: "panel" }, h("h3", {}, "Próximas revisões"),
        h("p", { class: "muted" }, "Revisão espaçada: ainda não implementada." + (erros ? " Há " + erros + " item(ns) no caderno de erros." : ""))),
      h("section", { class: "panel" }, h("h3", {}, "Último simulado"), ultimoSimulado())));

    /* Cobertura por módulo */
    main.appendChild(h("h2", {}, "Progresso por módulo"));
    var tb = h("tbody", {});
    TP.data.conteudo.grupos.forEach(function (g) {
      var gr = c.grupos[g.id];
      var nome = g.tipo === "especifico" ? "M" + parseInt(g.numero, 10) + " · " + g.titulo : "Gerais · " + g.titulo;
      var qm = g.tipo === "especifico" ? (q.porModulo[g.pasta] || { total: 0, respondidas: 0, acertos: 0 }) : null;
      tb.appendChild(h("tr", {},
        h("td", {}, h("a", { href: "#/conteudo" }, nome)),
        h("td", {}, gr.estudados + "/" + gr.total, TP.barra(gr.estudados, gr.total)),
        h("td", {}, qm ? String(qm.total) : "—"),
        h("td", {}, qm && qm.respondidas ? qm.acertos + "/" + qm.respondidas : "—")));
    });
    main.appendChild(h("div", { class: "tscroll" }, h("table", { class: "table" },
      h("thead", {}, h("tr", {}, h("th", {}, "Módulo"), h("th", {}, "Estudados"), h("th", {}, "Questões"), h("th", {}, "Acertos"))), tb)));

    main.appendChild(h("div", { class: "notice" }, "Seus dados (progresso, respostas, erros) ficam armazenados apenas neste navegador e neste dispositivo; não são sincronizados. Limpar os dados do navegador apaga o progresso: faça backup em ",
      h("a", { href: "#/dados" }, "Meus dados"), ". O edital oficial prevalece sobre qualquer material deste site."));
    main.appendChild(h("p", { class: "muted" }, "Disponível: teoria (módulos 1 a 9 e Gerais), banco de questões (oficiais da Cesgranrio e autorais, com origem identificada), simulados cronometrados, caderno de erros, desempenho, busca e backup. Ainda não implementado: plano de estudos, flashcards e revisão espaçada. Questões autorais não são da Cesgranrio."));
  });

  /* ---------- Conteúdo ---------- */
  TP.rota("conteudo", function (main, args) {
    if (args[0]) return leitura(main, args[0]);
    var est = TP.dados().estudados, r = TP.resumoConteudo();
    main.appendChild(h("p", { class: "eyebrow" }, "Teoria"));
    main.appendChild(h("h1", {}, "Conteúdo"));
    main.appendChild(h("p", { class: "lead" }, "Nove módulos de conhecimentos específicos e Conhecimentos Gerais. " + r.estudados + " de " + r.total + " arquivos marcados como estudados."));
    TP.data.conteudo.grupos.forEach(function (g) {
      var gr = r.grupos[g.id];
      var ul = h("ul", { class: "list" });
      g.assuntos.forEach(function (a) {
        ul.appendChild(h("li", {}, h("a", { href: "#/conteudo/" + a.id }, a.titulo), est[a.id] ? h("span", { class: "badge ok" }, "estudado") : null));
      });
      main.appendChild(h("section", { class: "group" },
        h("h2", {}, (g.tipo === "especifico" ? "Módulo " + parseInt(g.numero, 10) + " · " : "Gerais · ") + g.titulo),
        h("p", { class: "muted" }, gr.estudados + "/" + gr.total + " estudados"), TP.barra(gr.estudados, gr.total), ul));
    });
  });

  function leitura(main, id) {
    var lista = [];
    TP.data.conteudo.grupos.forEach(function (g) { g.assuntos.forEach(function (a) { lista.push(a); }); });
    var i = lista.findIndex(function (a) { return a.id === id; });
    if (i < 0) { main.appendChild(h("p", {}, "Assunto inexistente.")); return; }
    var a = lista[i];
    main.appendChild(h("p", { class: "eyebrow" }, a.id));
    var corpo = h("div", { class: "prose" }, h("p", { class: "muted" }, "Carregando…"));
    main.appendChild(corpo);
    fetch(a.arquivo).then(function (r) {
      if (!r.ok) throw new Error("HTTP " + r.status);
      return r.text();
    }).then(function (txt) {
      var s = TP.mdSplit(txt);
      corpo.textContent = "";
      if (a.itens_edital.length) corpo.appendChild(h("div", { class: "fm" }, h("strong", {}, "Itens do edital: "), a.itens_edital.join(" · ")));
      var d = h("div", { html: TP.md(s.corpo) }); corpo.appendChild(d);
    }).catch(function (e) {
      corpo.textContent = ""; corpo.appendChild(h("div", { class: "notice" }, "Não foi possível carregar " + a.arquivo + ": " + e.message));
    });
    var chk = h("button", { class: "btn", type: "button", "aria-pressed": String(!!TP.dados().estudados[a.id]) }, TP.dados().estudados[a.id] ? "Estudado ✓ (desmarcar)" : "Marcar como estudado");
    chk.addEventListener("click", function () {
      var e = TP.dados().estudados;
      if (e[a.id]) delete e[a.id]; else e[a.id] = new Date().toISOString().slice(0, 10);
      TP.salvar(); chk.textContent = e[a.id] ? "Estudado ✓ (desmarcar)" : "Marcar como estudado"; chk.setAttribute("aria-pressed", String(!!e[a.id]));
    });
    var extras = h("div", { class: "row" });
    main.appendChild(extras);
    if (TP.fcBotaoAssunto) TP.fcBotaoAssunto(a.id, extras);
    main.appendChild(h("div", { class: "nav2" },
      i > 0 ? h("a", { class: "btn", href: "#/conteudo/" + lista[i - 1].id }, "← " + lista[i - 1].titulo) : h("a", { class: "btn", href: "#/conteudo" }, "← Índice"),
      chk,
      i < lista.length - 1 ? h("a", { class: "btn primary", href: "#/conteudo/" + lista[i + 1].id }, lista[i + 1].titulo + " →") : h("a", { class: "btn", href: "#/conteudo" }, "Índice")));
  }

  /* ---------- Desempenho ---------- */
  TP.rota("desempenho", function (main) {
    var q = TP.resumoQuestoes(), c = TP.resumoConteudo();
    main.appendChild(h("p", { class: "eyebrow" }, "Acompanhamento"));
    main.appendChild(h("h1", {}, "Desempenho"));
    if (!q.respondidas) { main.appendChild(h("div", { class: "notice" }, "Ainda não há respostas registradas. Resolva questões para ver seu desempenho.")); }
    else if (q.respondidas < 30) main.appendChild(h("div", { class: "notice" }, "Amostra pequena (" + q.respondidas + " questões respondidas): os percentuais abaixo são apenas indicativos."));
    var tb = h("tbody", {});
    Object.keys(TP.NOMES_MOD).forEach(function (m) {
      var x = q.porModulo[m] || { total: 0, respondidas: 0, acertos: 0 };
      tb.appendChild(h("tr", {}, h("td", {}, TP.NOMES_MOD[m]), h("td", {}, String(x.total)), h("td", {}, String(x.respondidas)),
        h("td", {}, x.respondidas ? x.acertos + " (" + Math.round(100 * x.acertos / x.respondidas) + "%)" : "—")));
    });
    main.appendChild(h("div", { class: "tscroll" }, h("table", { class: "table" },
      h("thead", {}, h("tr", {}, h("th", {}, "Módulo"), h("th", {}, "Questões"), h("th", {}, "Respondidas"), h("th", {}, "Acertos"))), tb)));
    main.appendChild(h("p", { class: "muted" }, "Considera a última tentativa de cada questão. Conteúdo estudado: " + c.estudados + "/" + c.total + ". Histórico de simulados, evolução temporal e tempo por questão ainda não estão disponíveis."));
  });

  /* ---------- Dados ---------- */
  TP.rota("dados", function (main) {
    main.appendChild(h("p", { class: "eyebrow" }, "Sistema"));
    main.appendChild(h("h1", {}, "Meus dados"));
    main.appendChild(h("p", { class: "lead" }, "Tudo o que você registra fica no localStorage deste navegador. Não há conta nem sincronização entre dispositivos. Exporte um backup com frequência."));
    var arq = h("input", { type: "file", accept: "application/json,.json", id: "arq", class: "sr-only" });
    function importar(modo) {
      var f = arq.files && arq.files[0];
      if (!f) { TP.toast("Escolha um arquivo de backup."); return; }
      var rd = new FileReader();
      rd.onload = function () {
        try {
          if (modo === "substituir" && !confirm("Substituir TODOS os dados atuais pelo conteúdo do arquivo?")) return;
          TP.importar(String(rd.result), modo); TP.toast("Importação concluída (" + modo + ")."); TP.navegar();
        } catch (e) { TP.toast("Falha na importação: " + e.message); }
      };
      rd.readAsText(f);
    }
    main.appendChild(h("div", { class: "row" },
      h("button", { class: "btn primary", type: "button", onclick: function () {
        var url = URL.createObjectURL(new Blob([TP.exportar()], { type: "application/json" }));
        var a = h("a", { href: url, download: "transpetro-enfase5-backup-" + new Date().toISOString().slice(0, 10) + ".json" });
        document.body.appendChild(a); a.click(); a.remove(); setTimeout(function () { URL.revokeObjectURL(url); }, 1000);
        TP.toast("Backup exportado.");
      } }, "Exportar backup (JSON)")));
    main.appendChild(h("h2", {}, "Importar"));
    main.appendChild(h("div", { class: "row" },
      h("label", { class: "btn", for: "arq" }, "Escolher arquivo…"), arq,
      h("button", { class: "btn", type: "button", onclick: function () { importar("mesclar"); } }, "Mesclar com os dados atuais"),
      h("button", { class: "btn danger", type: "button", onclick: function () { importar("substituir"); } }, "Substituir dados atuais")));
    main.appendChild(h("h2", {}, "Apagar"));
    main.appendChild(h("button", { class: "btn danger", type: "button", onclick: function () {
      if (confirm("Apagar progresso, respostas, marcações e caderno de erros deste navegador? Isto não pode ser desfeito.")) { TP.limpar(); TP.toast("Dados apagados."); TP.navegar(); }
    } }, "Apagar todos os meus dados"));
  });

  /* ---------- Sobre ---------- */
  TP.rota("sobre", function (main) {
    main.appendChild(h("p", { class: "eyebrow" }, "Projeto"));
    main.appendChild(h("h1", {}, "Sobre o projeto"));
    main.appendChild(h("div", { class: "prose", html: TP.md(
      "Plataforma estática (HTML, CSS e JavaScript) de preparação para o **Processo Seletivo Público TRANSPETRO 2026.4, Ênfase 5**, organizado pela Fundação Cesgranrio.\n\n" +
      "## Origem e limites do conteúdo\n\n" +
      "- A teoria foi produzida pelo projeto a partir do Anexo IV do edital e **validada pelo usuário com ressalvas** (fontes de memória, normas não lidas e versões a confirmar, registradas nos relatórios em `docs/qualidade/`).\n" +
      "- As questões **oficiais** foram transcritas de provas anteriores da Fundação Cesgranrio, com concurso, cargo, ano, prova e número identificados; os gabaritos são, em geral, de espelhos de terceiros e **não foram validados contra a banca**. Os comentários são do projeto.\n" +
      "- As questões **autorais** (\"estilo Cesgranrio\") foram criadas pelo projeto e **não** são questões de prova nem foram elaboradas pela banca. As marcadas como \"em revisão\" aguardam validação do usuário.\n" +
      "- O texto do edital prevalece sobre qualquer material deste site.\n\n" +
      "## Ainda não disponível\n\n" +
      "Plano de estudos, flashcards, revisão espaçada e questões adaptadas.") }));
  });

  /* ---------- Inicialização ---------- */
  document.addEventListener("DOMContentLoaded", function () {
    var tbtn = document.getElementById("tema");
    function rot() { tbtn.textContent = document.documentElement.getAttribute("data-theme") === "light" ? "Tema escuro" : "Tema claro"; }
    rot();
    tbtn.addEventListener("click", function () { TP.toggleTheme(); rot(); });
    var menu = document.getElementById("menu");
    TP.montarMenu(menu);
    document.getElementById("menu-btn").addEventListener("click", function (e) {
      var ab = menu.classList.toggle("open"); e.currentTarget.setAttribute("aria-expanded", String(ab));
    });
    TP.iniciarBuscaTopo(document.getElementById("topsearch"));
    TP.carregar();
    var main = document.getElementById("app");
    Promise.all([carregarJson("assets/data/conteudo.json"), carregarJson("assets/data/questoes.json"), carregarJson("assets/data/simulados.json")]).then(function (r) {
      TP.data = { conteudo: r[0], questoes: r[1].questoes, simulados: r[2].simulados };
      if (TP.storageAviso) TP.toast(TP.storageAviso);
      window.addEventListener("hashchange", TP.navegar);
      TP.navegar();
    }).catch(function (e) {
      main.textContent = "";
      main.appendChild(h("div", { class: "notice" }, "Falha ao carregar os dados (" + e.message + "). Abra o site por um servidor HTTP (por exemplo GitHub Pages ou python -m http.server), não diretamente pelo arquivo."));
    });
  });
})();
