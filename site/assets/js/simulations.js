/* Simulados: lista, execução cronometrada, entrega, resultado detalhado e histórico.
   Regras: o gabarito só aparece depois da entrega; cada tentativa é independente e fica no localStorage;
   o tempo corre pelo relógio (como na prova), mesmo se a tela for fechada. */
(function () {
  "use strict";
  var h = function () { return TP.h.apply(null, arguments); };
  var TIPO = { completo: "Completo (70)", especifico: "Específicos (50)", gerais: "Conhecimentos Gerais", modulo: "Por módulo", diagnostico: "Diagnóstico" };
  var STATUS = { questoes_validadas: "Questões validadas", rascunho: "Rascunho: há questões em revisão" };
  var DIF = { facil: "Fácil", media: "Média", dificil: "Difícil" };
  var qmapa = null;

  function Q(id) {
    if (!qmapa) { qmapa = {}; TP.data.questoes.forEach(function (q) { qmapa[q.id] = q; }); }
    return qmapa[id];
  }
  function simPorId(id) { return TP.data.simulados.filter(function (s) { return s.id === id; })[0]; }
  function sd() { return TP.dados().simulados; }
  function tentativasDe(id) { return sd().tentativas.filter(function (t) { return t.sim === id; }); }
  function bloco(q) {
    if (q.modulo === "gerais-lingua-portuguesa") return "Língua Portuguesa";
    if (q.modulo === "gerais-lingua-inglesa") return "Língua Inglesa";
    return "Conhecimentos Específicos";
  }
  function dataBR(ts) { var d = new Date(ts); return d.toLocaleDateString("pt-BR") + " " + d.toLocaleTimeString("pt-BR", { hour: "2-digit", minute: "2-digit" }); }
  function pct(a, b) { return b ? Math.round(100 * a / b) + "%" : "—"; }

  /* ---------------- Rotas ---------------- */
  TP.rota("simulados", function (main, args) {
    if (!TP.data.simulados) { main.appendChild(h("div", { class: "notice" }, "Dados dos simulados indisponíveis.")); return; }
    if (!args[0]) return lista(main);
    if (args[0] === "historico") return historico(main);
    var s = simPorId(args[0]);
    if (!s) { main.appendChild(h("p", {}, "Simulado inexistente.")); main.appendChild(h("a", { href: "#/simulados" }, "Voltar")); return; }
    if (args[1] === "prova") return prova(main, s);
    if (args[1] === "resultado") return resultado(main, s, args[2]);
    return intro(main, s);
  });

  /* ---------------- Lista ---------------- */
  function lista(main) {
    main.appendChild(h("p", { class: "eyebrow" }, "Treino cronometrado"));
    main.appendChild(h("h1", {}, "Simulados"));
    main.appendChild(h("p", { class: "lead" }, "Faça provas cronometradas com correção comentada apenas após a entrega. Cada tentativa é independente e fica salva neste navegador."));
    main.appendChild(h("div", { class: "notice" },
      "A distribuição das questões por assunto é pedagógica, definida pelo projeto: o edital não informa quantas questões de cada assunto a prova terá. O simulado completo segue a estrutura do edital (10 Português, 10 Inglês e 50 Específicos, 5 alternativas, 4h30). Simulados marcados como \"rascunho\" incluem questões ainda em revisão. O resultado não é nota oficial."));
    var and = sd().andamento, ids = Object.keys(and);
    if (ids.length) {
      main.appendChild(h("div", { class: "notice" }, "Simulado em andamento: ",
        ids.map(function (i) { var s = simPorId(i); return s ? h("a", { href: "#/simulados/" + i + "/prova", style: "margin-right:12px" }, s.titulo) : null; })));
    }
    var tb = h("tbody", {});
    TP.data.simulados.forEach(function (s) {
      var ts = tentativasDe(s.id), melhor = ts.reduce(function (m, t) { return Math.max(m, t.acertos); }, -1);
      tb.appendChild(h("tr", {},
        h("td", {}, h("a", { href: "#/simulados/" + s.id }, s.titulo)),
        h("td", {}, TIPO[s.tipo] || s.tipo),
        h("td", {}, String(s.total)),
        h("td", {}, s.tempo_minutos + " min"),
        h("td", {}, h("span", { class: "badge " + (s.status === "questoes_validadas" ? "ok" : "amber") }, s.status === "questoes_validadas" ? "validadas" : "rascunho")),
        h("td", {}, ts.length ? ts.length + " (melhor: " + melhor + "/" + s.total + ")" : "—")));
    });
    main.appendChild(h("div", { class: "tscroll" }, h("table", { class: "table" },
      h("thead", {}, h("tr", {}, h("th", {}, "Simulado"), h("th", {}, "Tipo"), h("th", {}, "Questões"), h("th", {}, "Tempo"), h("th", {}, "Questões"), h("th", {}, "Tentativas"))), tb)));
    main.appendChild(h("div", { class: "row" }, h("a", { class: "btn", href: "#/simulados/historico" }, "Histórico de tentativas")));
  }

  /* ---------------- Apresentação ---------------- */
  function intro(main, s) {
    var and = sd().andamento[s.id];
    main.appendChild(h("p", { class: "eyebrow" }, TIPO[s.tipo] || s.tipo));
    main.appendChild(h("h1", {}, s.titulo));
    main.appendChild(h("dl", { class: "ident" },
      h("div", {}, h("dt", {}, "Questões"), h("dd", {}, String(s.total))),
      h("div", {}, h("dt", {}, "Tempo"), h("dd", {}, s.tempo_minutos + " min (" + TP.fmtTempo(s.tempo_minutos * 60) + ")")),
      h("div", {}, h("dt", {}, "Alternativas"), h("dd", {}, "5 (A a E), 1 ponto cada")),
      h("div", {}, h("dt", {}, "Situação"), h("dd", {}, STATUS[s.status] || s.status))));
    main.appendChild(h("p", {}, s.observacoes));
    main.appendChild(h("p", { class: "muted" }, "Critério de distribuição: " + s.criterio_distribuicao));
    main.appendChild(h("p", { class: "muted" }, s.criterio_tempo + "."));
    if (s.corte_edital) main.appendChild(h("p", { class: "muted" }, s.corte_edital));
    main.appendChild(h("h2", {}, "Regras"));
    main.appendChild(h("ul", {},
      h("li", {}, "O gabarito e os comentários só aparecem depois da entrega."),
      h("li", {}, "Você pode navegar entre as questões, alterar respostas e marcar questões para revisão."),
      h("li", {}, "O tempo corre pelo relógio, como na prova: se você sair da tela, o cronômetro continua. Ao esgotar o tempo, a prova é entregue automaticamente."),
      h("li", {}, "As respostas são salvas a cada clique no navegador. Os erros entram no caderno de erros após a entrega.")));
    var livre = h("input", { type: "checkbox", id: "livre" });
    if (and) {
      var rest = and.limite ? and.limite - Math.floor((Date.now() - and.inicio) / 1000) : null;
      main.appendChild(h("div", { class: "notice" }, "Há uma tentativa em andamento, iniciada em " + dataBR(and.inicio) + (rest != null ? (rest > 0 ? " (restam " + TP.fmtTempo(rest) + ")." : " (o tempo já esgotou; ela será entregue ao abrir).") : " (sem limite de tempo).")));
      main.appendChild(h("div", { class: "row" },
        h("a", { class: "btn primary", href: "#/simulados/" + s.id + "/prova" }, "Continuar tentativa"),
        h("button", { class: "btn danger", type: "button", onclick: function () {
          if (confirm("Descartar a tentativa em andamento? As respostas dela serão perdidas.")) { delete sd().andamento[s.id]; TP.salvar(); TP.navegar(); }
        } }, "Descartar andamento")));
    } else {
      main.appendChild(h("div", { class: "row" },
        h("button", { class: "btn primary", type: "button", onclick: function () {
          sd().andamento[s.id] = { sim: s.id, inicio: Date.now(), limite: livre.checked ? 0 : s.tempo_minutos * 60, respostas: {}, marcadas: {}, tempos: {}, atual: 0, ordem: s.questoes.map(function (x) { return x.id; }) };
          TP.salvar(); location.hash = "#/simulados/" + s.id + "/prova";
        } }, "Iniciar simulado"),
        h("label", {}, livre, " Treino sem limite de tempo (o cronômetro apenas conta)")));
    }
    var ts = tentativasDe(s.id);
    if (ts.length) {
      main.appendChild(h("h2", {}, "Tentativas anteriores"));
      var tb = h("tbody", {});
      ts.slice().reverse().forEach(function (t) {
        tb.appendChild(h("tr", {}, h("td", {}, dataBR(t.inicio)), h("td", {}, t.acertos + "/" + t.total + " (" + pct(t.acertos, t.total) + ")"),
          h("td", {}, TP.fmtTempo(t.tempoSeg)), h("td", {}, h("a", { href: "#/simulados/" + s.id + "/resultado/" + t.id }, "Ver resultado"))));
      });
      main.appendChild(h("div", { class: "tscroll" }, h("table", { class: "table" },
        h("thead", {}, h("tr", {}, h("th", {}, "Início"), h("th", {}, "Acertos"), h("th", {}, "Tempo"), h("th", {}, ""))), tb)));
    }
    main.appendChild(h("div", { class: "nav2" }, h("a", { class: "btn", href: "#/simulados" }, "← Simulados")));
  }

  /* ---------------- Execução ---------------- */
  function prova(main, s) {
    var d = TP.dados(), a = sd().andamento[s.id];
    if (!a) { location.hash = "#/simulados/" + s.id; return; }
    var N = a.ordem.length, entrou = Date.now(), entregue = false;
    var alertas = { 600: false, 300: false, 60: false };

    var timerEl = h("span", { class: "sim-timer", role: "timer", "aria-live": "off" }, "--:--:--");
    var progEl = h("span", { class: "tit" });
    main.appendChild(h("div", { class: "sim-bar" }, h("span", { class: "tit" }, s.titulo), progEl, timerEl));
    var corpo = h("div", {});
    main.appendChild(corpo);

    function contar() {
      var r = 0, m = 0;
      a.ordem.forEach(function (id) { if (a.respostas[id]) r++; if (a.marcadas[id]) m++; });
      return { respondidas: r, brancas: N - r, marcadas: m };
    }
    function salvar() { TP.salvar(); }
    function acumular() {          /* tempo gasto na questão atual */
      var id = a.ordem[a.atual], ds = Math.round((Date.now() - entrou) / 1000);
      a.tempos[id] = (a.tempos[id] || 0) + ds; entrou = Date.now();
    }

    var timer = TP.Timer({ inicio: a.inicio, limiteSeg: a.limite,
      onTick: function (i) {
        var c = contar();
        progEl.textContent = "Respondidas " + c.respondidas + "/" + N + (c.marcadas ? " · marcadas " + c.marcadas : "");
        if (a.limite) {
          timerEl.textContent = TP.fmtTempo(i.restante);
          timerEl.className = "sim-timer" + (i.restante <= 300 ? (i.restante <= 60 ? " fim" : " curto") : "");
          [600, 300, 60].forEach(function (k) { if (!alertas[k] && i.restante <= k && i.restante > k - 5) { alertas[k] = true; TP.toast("Restam " + (k / 60) + " minuto(s)."); } });
        } else timerEl.textContent = TP.fmtTempo(i.decorrido);
      },
      onFim: function () { TP.toast("Tempo esgotado: prova entregue automaticamente."); entregar("tempo"); } });
    TP.aoSair = function () { timer.parar(); if (!entregue) { acumular(); salvar(); } };

    function entregar(motivo) {
      if (entregue) return; entregue = true; timer.parar(); acumular();
      var acertos = 0, brancos = 0, porBloco = {}, porModulo = {}, porDif = {};
      a.ordem.forEach(function (id) {
        var q = Q(id), r = a.respostas[id], ok = r === q.gabarito, b = bloco(q);
        var pb = porBloco[b] = porBloco[b] || { total: 0, acertos: 0 };
        var pm = porModulo[q.modulo] = porModulo[q.modulo] || { total: 0, acertos: 0 };
        var pd = porDif[q.dificuldade] = porDif[q.dificuldade] || { total: 0, acertos: 0 };
        pb.total++; pm.total++; pd.total++;
        if (!r) brancos++;
        else {
          (d.respostas[id] = d.respostas[id] || []).push({ r: r, ok: ok, t: Date.now(), sim: s.id });
          if (!ok) TP.registrarErro(id);
        }
        if (ok) { acertos++; pb.acertos++; pm.acertos++; pd.acertos++; }
      });
      var fim = Date.now();
      var t = { id: "t" + fim.toString(36), sim: s.id, titulo: s.titulo, inicio: a.inicio, fim: fim, limite: a.limite,
        tempoSeg: Math.min(Math.round((fim - a.inicio) / 1000), a.limite || Infinity), entrega: motivo,
        respostas: a.respostas, marcadas: a.marcadas, tempos: a.tempos, ordem: a.ordem,
        acertos: acertos, total: N, brancos: brancos, porBloco: porBloco, porModulo: porModulo, porDif: porDif };
      sd().tentativas.push(t); delete sd().andamento[s.id];
      salvar(); location.hash = "#/simulados/" + s.id + "/resultado/" + t.id;
    }

    function irPara(i) { acumular(); a.atual = Math.max(0, Math.min(N - 1, i)); salvar(); mostrar(); }

    function mostrar() {
      corpo.textContent = "";
      var id = a.ordem[a.atual], q = Q(id), i = a.atual;
      corpo.appendChild(h("div", { class: "sim-blk" }, bloco(q)));
      corpo.appendChild(h("h2", { style: "margin-top:4px" }, "Questão " + (i + 1) + " de " + N));
      corpo.appendChild(h("div", { class: "qtext prose", html: TP.md(q.enunciado) }));
      var alts = h("div", { class: "alts", role: "group", "aria-label": "Alternativas da questão " + (i + 1) });
      Object.keys(q.alternativas).forEach(function (l) {
        var sel = a.respostas[id] === l;
        alts.appendChild(h("button", { class: "alt" + (sel ? " sel" : ""), type: "button", "aria-pressed": String(sel), onclick: function () {
          if (a.respostas[id] === l) delete a.respostas[id]; else a.respostas[id] = l;
          salvar(); mostrar();
        } }, h("b", {}, l), TP.altSpan(q.alternativas[l])));
      });
      corpo.appendChild(alts);
      var marc = !!a.marcadas[id];
      corpo.appendChild(h("div", { class: "row" },
        h("button", { class: "btn", type: "button", "aria-pressed": String(marc), onclick: function () { if (a.marcadas[id]) delete a.marcadas[id]; else a.marcadas[id] = true; salvar(); mostrar(); } }, marc ? "Desmarcar revisão" : "Marcar para revisão"),
        h("button", { class: "btn", type: "button", disabled: !a.respostas[id], onclick: function () { delete a.respostas[id]; salvar(); mostrar(); } }, "Limpar resposta")));
      corpo.appendChild(h("div", { class: "nav2" },
        h("button", { class: "btn", type: "button", disabled: i === 0, onclick: function () { irPara(i - 1); } }, "← Anterior"),
        h("button", { class: "btn", type: "button", disabled: i === N - 1, onclick: function () { irPara(i + 1); } }, "Próxima →")));
      corpo.appendChild(h("h3", {}, "Navegação"));
      var grade = h("div", { class: "sim-grid", role: "group", "aria-label": "Ir para a questão" });
      a.ordem.forEach(function (qid, k) {
        grade.appendChild(h("button", { type: "button", class: (a.respostas[qid] ? "a " : "") + (a.marcadas[qid] ? "f " : "") + (k === i ? "c" : ""),
          "aria-label": "Questão " + (k + 1) + (a.respostas[qid] ? ", respondida" : ", em branco") + (a.marcadas[qid] ? ", marcada" : ""), "aria-current": k === i ? "true" : null,
          onclick: function () { irPara(k); } }, String(k + 1)));
      });
      corpo.appendChild(grade);
      corpo.appendChild(h("div", { class: "sim-legenda" }, h("span", {}, "Azul: respondida"), h("span", {}, "Marca âmbar: para revisão"), h("span", {}, "Contorno: questão atual")));
      corpo.appendChild(h("div", { class: "row", style: "margin-top:18px" }, h("button", { class: "btn primary", type: "button", onclick: confirmar }, "Entregar prova")));
    }

    function confirmar() {
      var c = contar();
      corpo.textContent = "";
      corpo.appendChild(h("h2", {}, "Confirmar entrega"));
      corpo.appendChild(h("div", { class: "sim-resumo" },
        h("p", {}, h("strong", {}, c.respondidas + " respondida(s)"), " · ", h("strong", {}, c.brancas + " em branco"), " · " + c.marcadas + " marcada(s) para revisão."),
        c.brancas ? h("p", { class: "muted" }, "Questões em branco contam como erro. Após a entrega não é possível alterar as respostas.") : h("p", { class: "muted" }, "Após a entrega não é possível alterar as respostas.")));
      var pend = a.ordem.map(function (qid, k) { return !a.respostas[qid] ? k : -1; }).filter(function (k) { return k >= 0; });
      corpo.appendChild(h("div", { class: "row" },
        h("button", { class: "btn", type: "button", onclick: mostrar }, "Voltar à prova"),
        pend.length ? h("button", { class: "btn", type: "button", onclick: function () { irPara(pend[0]); } }, "Ir para a primeira em branco") : null,
        h("button", { class: "btn primary", type: "button", onclick: function () { entregar("manual"); } }, "Confirmar entrega")));
    }

    mostrar();
    timer.iniciar();
  }

  /* ---------------- Resultado ---------------- */
  function resultado(main, s, tid) {
    var t = tentativasDe(s.id).filter(function (x) { return x.id === tid; })[0];
    if (!t) { main.appendChild(h("p", {}, "Tentativa inexistente neste navegador (os dados ficam apenas no navegador em que a prova foi feita).")); main.appendChild(h("a", { href: "#/simulados/" + s.id }, "Voltar")); return; }
    main.appendChild(h("p", { class: "eyebrow" }, "Resultado · " + dataBR(t.inicio)));
    main.appendChild(h("h1", {}, s.titulo));
    var ts = tentativasDe(s.id), idx = ts.indexOf(t), ant = idx > 0 ? ts[idx - 1] : null;
    main.appendChild(h("div", { class: "stats" },
      h("div", { class: "stat" }, h("b", {}, t.acertos + "/" + t.total), h("span", {}, "acertos (" + pct(t.acertos, t.total) + ")"), TP.barra(t.acertos, t.total)),
      h("div", { class: "stat" }, h("b", {}, String(t.total - t.acertos - t.brancos)), h("span", {}, "erros")),
      h("div", { class: "stat" }, h("b", {}, String(t.brancos)), h("span", {}, "em branco")),
      h("div", { class: "stat" }, h("b", {}, TP.fmtTempo(t.tempoSeg)), h("span", {}, "tempo gasto" + (t.limite ? " de " + TP.fmtTempo(t.limite) : " (sem limite)")))));
    if (t.entrega === "tempo") main.appendChild(h("div", { class: "notice" }, "Prova entregue automaticamente ao fim do tempo."));
    if (ant) main.appendChild(h("p", { class: "muted" }, "Tentativa anterior deste simulado: " + ant.acertos + "/" + ant.total + " (" + (t.acertos - ant.acertos >= 0 ? "+" : "") + (t.acertos - ant.acertos) + " acertos)."));

    /* Referência ao critério do edital: apenas para simulados que reproduzem as fases */
    var bP = t.porBloco["Língua Portuguesa"], bI = t.porBloco["Língua Inglesa"], bE = t.porBloco["Conhecimentos Específicos"];
    if (s.tipo === "completo" && bP && bI && bE) {
      var g = bP.acertos + bI.acertos, ok1 = bE.acertos >= 25, ok2 = g >= 10, zero = bP.acertos === 0 || bI.acertos === 0;
      main.appendChild(h("div", { class: "notice sim-aprov" }, h("strong", {}, "Referência ao critério do edital (indicativo, não é nota oficial): "),
        "Específicos " + bE.acertos + "/50 (mínimo 25: " + (ok1 ? "atingido" : "não atingido") + "); Gerais " + g + "/20 (mínimo 10: " + (ok2 ? "atingido" : "não atingido") + "); " +
        (zero ? "há matéria de Gerais com nota zero, o que eliminaria." : "nenhuma matéria de Gerais com nota zero.") + " O desempenho nesta prova de treino não prevê o resultado do concurso."));
    }

    function tabela(titulo, dados, nome) {
      var ks = Object.keys(dados); if (!ks.length) return;
      var tb = h("tbody", {});
      ks.forEach(function (k) { var x = dados[k]; tb.appendChild(h("tr", {}, h("td", {}, nome(k)), h("td", {}, String(x.total)), h("td", {}, String(x.acertos)), h("td", {}, pct(x.acertos, x.total)))); });
      main.appendChild(h("h2", {}, titulo));
      main.appendChild(h("div", { class: "tscroll" }, h("table", { class: "table" }, h("thead", {}, h("tr", {}, h("th", {}, ""), h("th", {}, "Questões"), h("th", {}, "Acertos"), h("th", {}, "%"))), tb)));
    }
    if (Object.keys(t.porBloco).length > 1) tabela("Por bloco", t.porBloco, function (k) { return k; });
    tabela("Por módulo", t.porModulo, function (k) { return TP.NOMES_MOD[k] || k; });
    tabela("Por dificuldade", t.porDif, function (k) { return DIF[k] || k; });
    if (t.total < 30) main.appendChild(h("p", { class: "muted" }, "Poucas questões: os percentuais por módulo e por dificuldade são apenas indicativos."));

    /* tempo por questão */
    var tempos = t.ordem.map(function (id) { return t.tempos[id] || 0; }), soma = tempos.reduce(function (x, y) { return x + y; }, 0);
    main.appendChild(h("p", { class: "muted" }, "Tempo médio por questão: " + Math.round(soma / t.total) + " s (referência da prova real: cerca de " + Math.round(270 * 60 / 70) + " s por questão)."));

    /* revisão questão a questão */
    main.appendChild(h("h2", {}, "Correção comentada"));
    var filtro = "todas", lista = h("div", {});
    var barra = h("div", { class: "row" });
    function estado(id) { var r = t.respostas[id], q = Q(id); return !r ? "branco" : (r === q.gabarito ? "certa" : "errada"); }
    function desenhar() {
      lista.textContent = "";
      t.ordem.forEach(function (id, k) {
        var q = Q(id), e = estado(id), marc = !!t.marcadas[id];
        if (filtro === "erradas" && e !== "errada") return;
        if (filtro === "brancas" && e !== "branco") return;
        if (filtro === "marcadas" && !marc) return;
        if (filtro === "nao-certas" && e === "certa") return;
        var det = h("details", { class: "res-q" },
          h("summary", {}, h("strong", {}, (k + 1) + "."), h("span", { class: "chip " + (e === "certa" ? "c" : e === "errada" ? "e" : "b") }, e === "certa" ? "certa" : e === "errada" ? "errada" : "em branco"),
            marc ? h("span", { class: "chip" }, "marcada") : null, h("span", { class: "muted" }, bloco(q) + " · " + q.id + " · " + (t.tempos[id] || 0) + " s")));
        det.appendChild(h("div", { class: "qtext prose", html: TP.md(q.enunciado) }));
        var ul = h("div", { class: "alts" });
        Object.keys(q.alternativas).forEach(function (l) {
          var cls = "alt" + (l === q.gabarito ? " right" : (l === t.respostas[id] ? " wrong" : ""));
          ul.appendChild(h("div", { class: cls, style: "cursor:default" }, h("b", {}, l), TP.altSpan(q.alternativas[l])));
        });
        det.appendChild(ul);
        det.appendChild(TP.explicacao(q, e === "certa", t.respostas[id] || null));
        det.appendChild(h("p", {}, h("a", { href: "#/questoes/" + q.id }, "Abrir no banco de questões")));
        lista.appendChild(det);
      });
      if (!lista.childNodes.length) lista.appendChild(h("p", { class: "muted" }, "Nenhuma questão neste filtro."));
    }
    [["todas", "Todas"], ["nao-certas", "Erradas e em branco"], ["erradas", "Só erradas"], ["brancas", "Em branco"], ["marcadas", "Marcadas"]].forEach(function (f) {
      barra.appendChild(h("button", { class: "btn", type: "button", onclick: function () { filtro = f[0]; desenhar(); } }, f[1]));
    });
    main.appendChild(barra); main.appendChild(lista); desenhar();
    main.appendChild(h("p", { class: "muted" }, "As questões respondidas e erradas foram registradas no caderno de erros e em Desempenho. Questões em branco não entram no caderno de erros."));
    main.appendChild(h("div", { class: "nav2" },
      h("a", { class: "btn", href: "#/simulados/" + s.id }, "← Simulado"),
      h("a", { class: "btn", href: "#/simulados/historico" }, "Histórico"),
      h("a", { class: "btn primary", href: "#/simulados/" + s.id }, "Refazer (nova tentativa)")));
  }

  /* ---------------- Histórico ---------------- */
  function historico(main) {
    main.appendChild(h("p", { class: "eyebrow" }, "Simulados"));
    main.appendChild(h("h1", {}, "Histórico de tentativas"));
    var ts = sd().tentativas.slice().reverse();
    if (!ts.length) { main.appendChild(h("div", { class: "notice" }, "Nenhuma tentativa concluída neste navegador.")); main.appendChild(h("a", { class: "btn", href: "#/simulados" }, "Ver simulados")); return; }
    var tb = h("tbody", {});
    ts.forEach(function (t) {
      tb.appendChild(h("tr", {}, h("td", {}, dataBR(t.inicio)), h("td", {}, t.titulo), h("td", {}, t.acertos + "/" + t.total), h("td", {}, pct(t.acertos, t.total)),
        h("td", {}, TP.fmtTempo(t.tempoSeg)), h("td", {}, h("a", { href: "#/simulados/" + t.sim + "/resultado/" + t.id }, "Ver"))));
    });
    main.appendChild(h("div", { class: "tscroll" }, h("table", { class: "table" },
      h("thead", {}, h("tr", {}, h("th", {}, "Início"), h("th", {}, "Simulado"), h("th", {}, "Acertos"), h("th", {}, "%"), h("th", {}, "Tempo"), h("th", {}, ""))), tb)));
    main.appendChild(h("p", { class: "muted" }, "Os resultados ficam apenas neste navegador; use Meus dados para exportar e importar um backup."));
    main.appendChild(h("div", { class: "nav2" }, h("a", { class: "btn", href: "#/simulados" }, "← Simulados")));
  }
})();
