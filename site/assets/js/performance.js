/* Desempenho avançado (T12): evolução no tempo, simulados, tempo por questão, módulos, itens do edital,
   erros, retenção dos flashcards e cobertura. Tudo calculado só do que o usuário registrou neste navegador.
   Regras de honestidade (CLAUDE.md e metodologia 13): amostras pequenas são sinalizadas; nada de "nota" única de
   domínio — mostram-se os sinais separadamente; percentual de acerto é indicador auxiliar. */
(function () {
  "use strict";
  var h = function () { return TP.h.apply(null, arguments); };
  var N_MIN = 10;         /* abaixo disso, a amostra é tratada como pequena */
  var N_GERAL = 30;       /* aviso global */
  var DIF = { facil: "Fácil", media: "Média", dificil: "Difícil" };
  var ORIGEM = { autoral: "Autoral", oficial: "Oficial", adaptada: "Adaptada" };

  function pct(a, b) { return b ? Math.round(100 * a / b) : null; }
  function fmtPct(v, n) { return v == null ? "—" : v + "%" + (n != null && n < N_MIN ? " *" : ""); }
  function mediana(v) { if (!v.length) return null; var a = v.slice().sort(function (x, y) { return x - y; }), m = Math.floor(a.length / 2); return a.length % 2 ? a[m] : (a[m - 1] + a[m]) / 2; }
  function media(v) { return v.length ? v.reduce(function (x, y) { return x + y; }, 0) / v.length : null; }
  function fmtSeg(sg) { if (sg == null) return "—"; sg = Math.round(sg); return sg >= 60 ? Math.floor(sg / 60) + " min " + (sg % 60 < 10 ? "0" : "") + (sg % 60) + " s" : sg + " s"; }
  function segundaDe(data) { return TP.addDias(data, -((TP.paraData(data).getDay() + 6) % 7)); }
  function curto(data) { var p = data.split("-"); return p[2] + "/" + p[1]; }

  /* Reúne as respostas de todas as tentativas, com a questão correspondente. */
  function coletar() {
    var D = TP.dados(), qmap = {}, resp = [];
    TP.data.questoes.forEach(function (q) { qmap[q.id] = q; });
    Object.keys(D.respostas).forEach(function (id) {
      var q = qmap[id]; if (!q) return;
      D.respostas[id].forEach(function (r, i) { resp.push({ id: id, q: q, ok: !!r.ok, t: r.t, d: typeof r.d === "number" ? r.d : null, sim: !!r.sim, primeira: i === 0 }); });
    });
    return { D: D, qmap: qmap, resp: resp };
  }

  function tabela(cab, linhas, classe) {
    return h("div", { class: "tscroll" }, h("table", { class: "table" + (classe ? " " + classe : "") },
      h("thead", {}, h("tr", {}, cab.map(function (c) { return h("th", {}, c); }))),
      h("tbody", {}, linhas.map(function (l) { return h("tr", {}, l.map(function (c) { return h("td", {}, c); })); }))));
  }

  /* ---------- Blocos ---------- */
  function resumo(c) {
    var ids = Object.keys(c.D.respostas).filter(function (i) { return c.qmap[i]; });
    var prim = c.resp.filter(function (r) { return r.primeira; }), pa = prim.filter(function (r) { return r.ok; }).length;
    var tod = c.resp.filter(function (r) { return r.ok; }).length;
    var sims = c.D.simulados.tentativas.length;
    return h("div", {},
      h("div", { class: "stats" },
        h("div", { class: "stat" }, h("b", {}, ids.length + "/" + TP.data.questoes.length), h("span", {}, "questões já respondidas"), TP.barra(ids.length, TP.data.questoes.length)),
        h("div", { class: "stat" }, h("b", {}, fmtPct(pct(pa, prim.length), prim.length)), h("span", {}, "acerto na 1ª tentativa de cada questão (n = " + prim.length + ")")),
        h("div", { class: "stat" }, h("b", {}, fmtPct(pct(tod, c.resp.length), c.resp.length)), h("span", {}, "acerto em todas as respostas (n = " + c.resp.length + ")")),
        h("div", { class: "stat" }, h("b", {}, String(sims)), h("span", {}, "simulados entregues"))),
      h("p", { class: "muted" }, "A 1ª tentativa mede melhor o que você sabe; refazer uma questão depois de ver o gabarito tende a inflar o percentual de “todas as respostas”. * = amostra pequena (menos de " + N_MIN + " respostas)."));
  }

  function evolucao(c, main) {
    main.appendChild(h("h2", {}, "Evolução no tempo"));
    var hoje = TP.hoje(), ini = segundaDe(hoje), semanas = [], i;
    for (i = 11; i >= 0; i--) semanas.push(TP.addDias(ini, -7 * i));
    var por = {}; semanas.forEach(function (s) { por[s] = { n: 0, ok: 0 }; });
    c.resp.forEach(function (r) { var s = segundaDe(TP.hoje(new Date(r.t))); if (por[s]) { por[s].n++; if (r.ok) por[s].ok++; } });
    var rot = semanas.map(curto), ns = semanas.map(function (s) { return por[s].n; });
    if (!ns.some(function (n) { return n; })) { main.appendChild(h("p", { class: "muted" }, "Sem respostas nas últimas 12 semanas.")); return; }
    main.appendChild(TP.grafLinha({ titulo: "Acerto por semana (todas as respostas; ponto vazado = menos de " + N_MIN + " respostas)", rotulos: rot, cabX: "Semana (início)", cabY: "Acerto",
      valores: semanas.map(function (s) { return por[s].n ? pct(por[s].ok, por[s].n) : null; }), n: ns, nMin: N_MIN, max: 100, passo: 25, unidade: "%", fmt: function (v) { return v + "%"; } }));
    main.appendChild(TP.grafBarras({ titulo: "Questões respondidas por semana", rotulos: rot, valores: ns, cabX: "Semana (início)", cabY: "Respostas", passo: Math.max(1, Math.ceil(Math.max.apply(null, ns) / 4)) }));
    if (ns.filter(function (n) { return n >= N_MIN; }).length < 3) main.appendChild(h("p", { class: "muted" }, "Poucas semanas com amostra suficiente: não interprete como tendência."));
  }

  function simulados(c, main) {
    main.appendChild(h("h2", {}, "Simulados"));
    var ts = c.D.simulados.tentativas;
    if (!ts.length) { main.appendChild(h("p", { class: "muted" }, "Nenhum simulado entregue ainda. ", h("a", { href: "#/simulados" }, "Ver simulados"), ".")); return; }
    var rot = ts.map(function (t) { return curto(TP.hoje(new Date(t.inicio))); });
    main.appendChild(TP.grafLinha({ titulo: "Aproveitamento por simulado entregue", rotulos: rot, cabX: "Data", cabY: "Aproveitamento", valores: ts.map(function (t) { return pct(t.acertos, t.total); }),
      max: 100, passo: 25, unidade: "%", fmt: function (v) { return v + "%"; }, ref: { y: 50, rotulo: "50% (corte por área, edital)" } }));
    var linhas = ts.slice().reverse().map(function (t) {
      var blocos = Object.keys(t.porBloco || {}).map(function (b) { return b.replace("Conhecimentos ", "").replace("Língua ", "") + " " + t.porBloco[b].acertos + "/" + t.porBloco[b].total; }).join(" · ");
      var segq = t.total ? t.tempoSeg / t.total : null;
      return [new Date(t.inicio).toLocaleDateString("pt-BR"), h("a", { href: "#/simulados/" + t.sim + "/resultado/" + t.id }, t.titulo), t.acertos + "/" + t.total + " (" + pct(t.acertos, t.total) + "%)", blocos || "—", fmtSeg(t.tempoSeg), fmtSeg(segq), String(t.brancos || 0)];
    });
    main.appendChild(tabela(["Data", "Simulado", "Acertos", "Por área", "Tempo total", "Tempo médio/questão", "Em branco"], linhas));
    main.appendChild(h("p", { class: "muted" }, "Simulados diferentes têm tamanhos e composições diferentes (alguns têm questões ainda em revisão): compare com cautela. A linha de 50% refere-se ao corte do edital por área (Específicos e Gerais), não ao total. " + (ts.length < 3 ? "Com menos de 3 simulados não há tendência a observar." : "")));
  }

  function porModulo(c, main) {
    main.appendChild(h("h2", {}, "Por módulo"));
    var linhas = [], er = c.D.erros;
    Object.keys(TP.NOMES_MOD).forEach(function (m) {
      var qs = TP.data.questoes.filter(function (q) { return q.modulo === m; }), rs = c.resp.filter(function (r) { return r.q.modulo === m; });
      var dist = qs.filter(function (q) { return c.D.respostas[q.id] && c.D.respostas[q.id].length; }).length;
      var prim = rs.filter(function (r) { return r.primeira; }), pOk = prim.filter(function (r) { return r.ok; }).length, tOk = rs.filter(function (r) { return r.ok; }).length;
      var tempos = rs.filter(function (r) { return !r.sim && r.d != null; }).map(function (r) { return r.d; });
      var abertos = Object.keys(er).filter(function (id) { return !er[id].resolvido && c.qmap[id] && c.qmap[id].modulo === m; }).length;
      linhas.push([TP.NOMES_MOD[m], dist + "/" + qs.length, fmtPct(pct(pOk, prim.length), prim.length), fmtPct(pct(tOk, rs.length), rs.length), String(rs.length), tempos.length ? fmtSeg(mediana(tempos)) + " (n=" + tempos.length + ")" : "sem dados", String(abertos)]);
    });
    main.appendChild(tabela(["Módulo", "Respondidas", "Acerto 1ª tentativa", "Acerto (todas)", "Respostas", "Tempo mediano", "Erros em aberto"], linhas));
    main.appendChild(h("p", { class: "muted" }, "* amostra pequena. O tempo mediano vale só para questões resolvidas na tela de Questões (nos simulados, veja o tempo por questão em cada resultado)."));
  }

  function porItem(c, main) {
    main.appendChild(h("h2", {}, "Por item de referência"));
    var itens = {};
    TP.data.questoes.forEach(function (q) {
      var k = String(q.item_edital), x = itens[k] = itens[k] || { k: k, assunto: q.assunto, modulo: q.modulo, n: 0, ok: 0, prim: 0, primOk: 0, qs: 0 };
      x.qs++;
    });
    c.resp.forEach(function (r) {
      var x = itens[String(r.q.item_edital)]; x.n++; if (r.ok) x.ok++;
      if (r.primeira) { x.prim++; if (r.ok) x.primOk++; }
    });
    var lista = Object.keys(itens).map(function (k) { return itens[k]; }), com = lista.filter(function (x) { return x.n > 0; }), sem = lista.filter(function (x) { return x.n === 0; });
    function cmp(a, b) { var na = a.k.split(".").map(Number), nb = b.k.split(".").map(Number); return na[0] - nb[0] || (na[1] || 0) - (nb[1] || 0); }
    main.appendChild(h("p", {}, h("b", {}, com.length + " de " + lista.length), " itens de referência das questões (rótulo de item do edital; inclui Conhecimentos Gerais) com ao menos uma resposta sua; ", h("b", {}, String(sem.length)), " ainda sem resposta."));
    var fracos = com.filter(function (x) { return x.prim >= 3; }).sort(function (a, b) { return a.primOk / a.prim - b.primOk / b.prim || b.prim - a.prim; }).slice(0, 10);
    if (fracos.length) {
      main.appendChild(h("h3", {}, "Itens com menor acerto na 1ª tentativa (mínimo 3 respostas)"));
      main.appendChild(tabela(["Item", "Exemplo de assunto", "Módulo", "1ª tentativa", "Respostas (todas)"], fracos.map(function (x) {
        return ["Item " + x.k, x.assunto, TP.NOMES_MOD[x.modulo] || x.modulo, fmtPct(pct(x.primOk, x.prim), x.prim) + " (" + x.primOk + "/" + x.prim + ")", String(x.n)];
      })));
      main.appendChild(h("p", { class: "muted" }, "Com poucas respostas por item, isto aponta onde olhar primeiro, não um diagnóstico. Um item pode ter só uma ou duas questões no banco."));
    } else main.appendChild(h("p", { class: "muted" }, "Ainda não há itens com 3 ou mais respostas para ordenar."));
    if (sem.length) {
      var det = h("details", {}, h("summary", {}, "Itens sem nenhuma resposta (" + sem.length + ")"));
      det.appendChild(h("p", { class: "muted" }, sem.sort(cmp).map(function (x) { return x.k; }).join(" · ")));
      main.appendChild(det);
    }
  }

  function porDificuldade(c, main) {
    main.appendChild(h("h2", {}, "Por dificuldade e origem"));
    function grupo(campo, nomes) {
      return Object.keys(nomes).map(function (k) {
        var rs = c.resp.filter(function (r) { return r.q[campo] === k; }), prim = rs.filter(function (r) { return r.primeira; }), pok = prim.filter(function (r) { return r.ok; }).length;
        return [nomes[k], String(rs.length), fmtPct(pct(pok, prim.length), prim.length)];
      });
    }
    main.appendChild(tabela(["Classe", "Respostas", "Acerto 1ª tentativa"], grupo("dificuldade", DIF).concat(grupo("tipo", ORIGEM))));
    main.appendChild(h("p", { class: "muted" }, "Dificuldade é a classificação do projeto (não da banca). Questões oficiais vêm de provas anteriores da Cesgranrio; as autorais foram criadas pelo projeto."));
  }

  function tempo(c, main) {
    main.appendChild(h("h2", {}, "Tempo por questão"));
    var tp = c.resp.filter(function (r) { return !r.sim && r.d != null; });
    if (!tp.length) {
      main.appendChild(h("p", { class: "muted" }, "Sem medições ainda. A partir de agora, a tela de Questões registra o tempo entre abrir e responder cada questão (limitado a 30 min). Respostas anteriores a esta função não têm tempo."));
    } else {
      var ds = tp.map(function (r) { return r.d; }), med = mediana(ds);
      main.appendChild(h("div", { class: "stats" },
        h("div", { class: "stat" }, h("b", {}, fmtSeg(med)), h("span", {}, "tempo mediano (n = " + tp.length + ")")),
        h("div", { class: "stat" }, h("b", {}, fmtSeg(media(ds))), h("span", {}, "tempo médio")),
        h("div", { class: "stat" }, h("b", {}, fmtSeg(Math.max.apply(null, ds))), h("span", {}, "maior tempo"))));
      if (tp.length >= 20) {
        var rap = tp.filter(function (r) { return r.d <= med; }), len = tp.filter(function (r) { return r.d > med; });
        main.appendChild(tabela(["Grupo", "Respostas", "Acerto"], [
          ["Resolvidas até o tempo mediano", String(rap.length), fmtPct(pct(rap.filter(function (r) { return r.ok; }).length, rap.length), rap.length)],
          ["Resolvidas acima do tempo mediano", String(len.length), fmtPct(pct(len.filter(function (r) { return r.ok; }).length, len.length), len.length)]]));
      } else main.appendChild(h("p", { class: "muted" }, "Com menos de 20 medições não comparo acerto entre respostas rápidas e lentas."));
      var maiores = tp.slice().sort(function (a, b) { return b.d - a.d; }).slice(0, 5);
      main.appendChild(h("h3", {}, "Questões em que você mais demorou"));
      main.appendChild(tabela(["Questão", "Tempo", "Resultado"], maiores.map(function (r) { return [h("a", { href: "#/questoes/" + r.id }, r.id + " · " + r.q.assunto), fmtSeg(r.d), r.ok ? "acertou" : "errou"]; })));
    }
    /* Simulados: tempo por questão registrado em cada tentativa */
    var ts = c.D.simulados.tentativas.filter(function (t) { return t.tempos; }), todos = [];
    ts.forEach(function (t) { Object.keys(t.tempos).forEach(function (id) { if (t.respostas && t.respostas[id] && t.tempos[id] > 0) todos.push(t.tempos[id]); }); });
    if (todos.length) main.appendChild(h("p", { class: "muted" }, "Nos simulados: tempo mediano de " + fmtSeg(mediana(todos)) + " por questão respondida (n = " + todos.length + ") e " + ts.reduce(function (s, t) { return s + (t.brancos || 0); }, 0) + " questão(ões) deixada(s) em branco no total."));
    main.appendChild(h("p", { class: "muted" }, "Não existe um tempo ideal fixo por questão: a prova tem 70 questões em 4h30 (cerca de 3,9 min por questão em média), e os blocos têm dificuldades diferentes."));
  }

  function erros(c, main) {
    main.appendChild(h("h2", {}, "Caderno de erros"));
    var er = c.D.erros, ids = Object.keys(er).filter(function (i) { return c.qmap[i]; });
    if (!ids.length) { main.appendChild(h("p", { class: "muted" }, "Nenhum erro registrado.")); return; }
    var tipos = {};
    ids.forEach(function (i) { var t = er[i].tipo || "Sem classificação"; (tipos[t] = tipos[t] || { a: 0, r: 0 }); if (er[i].resolvido) tipos[t].r++; else tipos[t].a++; });
    main.appendChild(tabela(["Tipo de erro", "Em aberto", "Resolvidos"], Object.keys(tipos).sort(function (a, b) { return (tipos[b].a + tipos[b].r) - (tipos[a].a + tipos[a].r); }).map(function (t) { return [t, String(tipos[t].a), String(tipos[t].r)]; })));
    var sem = tipos["Sem classificação"];
    if (sem && sem.a + sem.r > ids.length / 2) main.appendChild(h("p", { class: "muted" }, "Mais da metade dos erros não tem tipo. Classificar o motivo de cada erro (conceito, interpretação, desatenção, tempo) é o que permite agir sobre ele. ", h("a", { href: "#/erros" }, "Abrir caderno de erros"), "."));
    var recorrentes = ids.filter(function (i) { return (c.D.respostas[i] || []).filter(function (r) { return !r.ok; }).length >= 2; });
    main.appendChild(h("p", {}, h("b", {}, String(recorrentes.length)), " questão(ões) com 2 ou mais erros (erro recorrente)."));
  }

  function atividade(c, main) {
    main.appendChild(h("h2", {}, "Atividade e retenção"));
    var hoje = TP.hoje(), ini = segundaDe(hoje), semanas = [], i;
    for (i = 7; i >= 0; i--) semanas.push(TP.addDias(ini, -7 * i));
    var min = {}, fc = {}, fcOk = {};
    semanas.forEach(function (s) { min[s] = 0; fc[s] = 0; fcOk[s] = 0; });
    Object.keys(c.D.atividade).forEach(function (dia) {
      var s = segundaDe(dia), a = c.D.atividade[dia]; if (min[s] === undefined) return;
      min[s] += a.min || 0; fc[s] += a.fc || 0; fcOk[s] += a.fcOk || 0;
    });
    var rot = semanas.map(curto);
    if (semanas.some(function (s) { return min[s]; }))
      main.appendChild(TP.grafBarras({ titulo: "Horas de estudo registradas por semana (sessões do plano)", rotulos: rot, valores: semanas.map(function (s) { return Math.round(min[s] / 6) / 10; }), cabX: "Semana (início)", cabY: "Horas", unidade: " h", passo: 1 }));
    else main.appendChild(h("p", { class: "muted" }, "Nenhuma sessão registrada nas últimas 8 semanas. Registre sessões em ", h("a", { href: "#/plano" }, "Plano de estudos"), " para ver as horas aqui. Horas não medem aprendizagem: leia junto com o acerto."));
    if (semanas.some(function (s) { return fc[s]; })) {
      main.appendChild(TP.grafLinha({ titulo: "Retenção nos flashcards por semana (% de respostas “médio” ou “fácil”; ponto vazado = menos de " + N_MIN + " respostas)", rotulos: rot, cabX: "Semana (início)", cabY: "Retenção",
        valores: semanas.map(function (s) { return fc[s] ? pct(fcOk[s], fc[s]) : null; }), n: semanas.map(function (s) { return fc[s]; }), nMin: N_MIN, max: 100, passo: 25, unidade: "%", fmt: function (v) { return v + "%"; } }));
    } else main.appendChild(h("p", { class: "muted" }, "Nenhum flashcard revisado nas últimas 8 semanas."));
    var tot = Object.keys(c.D.atividade).reduce(function (s, d) { var a = c.D.atividade[d]; s.fc += a.fc || 0; s.rev += a.rev || 0; s.treino += a.fcTreino || 0; return s; }, { fc: 0, rev: 0, treino: 0 });
    main.appendChild(h("p", { class: "muted" }, "Totais registrados: " + tot.fc + " flashcards revisados (com agendamento), " + tot.treino + " em treino livre, " + tot.rev + " revisões de teoria/erros. Retenção aqui = proporção de respostas “médio” ou “fácil”, uma medida de autoavaliação."));
  }

  function cobertura(c, main) {
    main.appendChild(h("h2", {}, "Cobertura por módulo"));
    var corpo = h("div", {}, h("p", { class: "muted" }, "Carregando…"));
    main.appendChild(corpo);
    TP.fcCarregar().then(function (b) {
      var r = TP.resumoConteudo(), linhas = [], D = c.D;
      TP.data.conteudo.grupos.forEach(function (g) {
        var gr = r.grupos[g.id], cards = b.lista.filter(function (x) { return x.g === g.id; });
        var vistos = cards.filter(function (x) { return D.flashcards[x.id]; }).length, maduros = cards.filter(function (x) { return TP.revMaduro(D.flashcards[x.id]); }).length;
        var qs = TP.data.questoes.filter(function (q) { return q.modulo === g.pasta; });
        var itens = {}; qs.forEach(function (q) { itens[q.item_edital] = itens[q.item_edital] || 0; if (D.respostas[q.id] && D.respostas[q.id].length) itens[q.item_edital]++; });
        var nIt = Object.keys(itens).length, itResp = Object.keys(itens).filter(function (k) { return itens[k] > 0; }).length;
        var rev = g.assuntos.filter(function (a) { var e = D.revisoes["c:" + a.id]; return e && e.n > 0; }).length;
        linhas.push([g.tipo === "especifico" ? "M" + parseInt(g.numero, 10) + " · " + g.titulo : "Gerais · " + g.titulo, gr.estudados + "/" + gr.total, rev + "/" + gr.total, itResp + "/" + nIt,
          vistos + "/" + cards.length, String(maduros)]);
      });
      corpo.textContent = "";
      corpo.appendChild(tabela(["Módulo", "Teoria estudada", "Teoria já revisada", "Itens com questão respondida", "Flashcards vistos", "Flashcards maduros"], linhas));
      corpo.appendChild(h("p", { class: "muted" }, "“Itens” são os rótulos de item do edital usados nas questões do banco (um item pode ter só uma ou duas questões). “Maduro” = flashcard com intervalo de 30 dias ou mais. Nenhum destes números prova domínio: combine com acerto, retenção e erros recorrentes (metodologia, 13.4)."));
    }).catch(function (e) { corpo.textContent = ""; corpo.appendChild(h("p", { class: "muted" }, "Não foi possível carregar os flashcards: " + e.message)); });
  }

  TP.rota("desempenho", function (main) {
    main.appendChild(h("p", { class: "eyebrow" }, "Acompanhamento"));
    main.appendChild(h("h1", {}, "Desempenho"));
    var c = coletar();
    if (!c.resp.length && !c.D.simulados.tentativas.length && !Object.keys(c.D.atividade).length && !Object.keys(c.D.estudados).length)
      main.appendChild(h("div", { class: "notice" }, "Ainda não há dados. Estude, resolva questões, faça flashcards ou um simulado e volte aqui. Tudo é calculado a partir dos registros deste navegador."));
    else if (c.resp.length < N_GERAL) main.appendChild(h("div", { class: "notice" }, "Amostra pequena (" + c.resp.length + " respostas a questões): os percentuais são apenas indicativos e não permitem concluir tendência."));
    main.appendChild(resumo(c));
    main.appendChild(h("nav", { class: "ancoras", "aria-label": "Seções desta página" }, ["Evolução", "Simulados", "Por módulo", "Por item", "Tempo", "Erros", "Atividade", "Cobertura"].map(function (t, i) {
      return h("a", { href: "#/desempenho", onclick: function (ev) { ev.preventDefault(); var el = document.getElementById("d-" + i); if (el) el.scrollIntoView({ behavior: "smooth" }); } }, t);
    })));
    var secoes = [evolucao, simulados, porModulo, porItem, tempo, erros, atividade, cobertura];
    secoes.forEach(function (fn, i) {
      var box = h("section", { id: "d-" + i });
      main.appendChild(box);
      fn(c, box);
      if (i === 2) porDificuldade(c, box);
    });
    main.appendChild(h("p", { class: "muted" }, "Dados locais, calculados no seu navegador e não sincronizados. Percentuais de acerto são indicadores auxiliares, não comprovação de aprendizagem. O desempenho em questões autorais e oficiais soma-se aqui; use os filtros de origem (tabela por dificuldade e origem) para separá-los."));
  });
})();
