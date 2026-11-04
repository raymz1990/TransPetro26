/* Busca textual local no conteúdo e nas questões. Índice: assets/data/busca.json (gerado por tools/build_site_data.py). */
(function () {
  "use strict";
  var h = function () { return TP.h.apply(null, arguments); };
  var indice = null, carregando = null;

  /* minúsculas e sem acentos, para casar "seguranca" com "segurança" */
  function norm(s) { return String(s).toLowerCase().normalize("NFD").replace(/[̀-ͯ]/g, ""); }

  function carregar() {
    if (indice) return Promise.resolve(indice);
    if (!carregando) carregando = fetch("assets/data/busca.json").then(function (r) {
      if (!r.ok) throw new Error("HTTP " + r.status);
      return r.json();
    }).then(function (d) {
      d.itens.forEach(function (i) { i.nt = norm(i.t); i.ns = norm(i.s); i.nx = norm(i.x); });
      indice = d.itens; return indice;
    });
    return carregando;
  }

  function contar(txt, termo) {
    var n = 0, p = 0;
    while ((p = txt.indexOf(termo, p)) !== -1) { n++; p += termo.length; }
    return n;
  }

  function buscar(consulta, tipo) {
    var termos = norm(consulta).split(/\s+/).filter(function (t) { return t.length > 1; });
    if (!termos.length) return [];
    var res = [];
    indice.forEach(function (i) {
      if (tipo && i.k !== tipo) return;
      var pontos = 0;
      for (var j = 0; j < termos.length; j++) {
        var t = termos[j];
        var a = contar(i.nt, t), b = contar(i.ns, t), c = contar(i.nx, t);
        if (!a && !b && !c) return; /* todos os termos devem aparecer (E) */
        pontos += a * 8 + b * 5 + Math.min(c, 10);
      }
      res.push({ i: i, p: pontos });
    });
    res.sort(function (x, y) { return y.p - x.p; });
    return res;
  }

  /* trecho com o primeiro termo encontrado, com destaque (mark) */
  function trecho(i, termos) {
    var ntx = i.nx, pos = -1;
    for (var j = 0; j < termos.length && pos < 0; j++) pos = ntx.indexOf(termos[j]);
    var ini = Math.max(0, (pos < 0 ? 0 : pos) - 70);
    var base = i.x.slice(ini, ini + 220);
    /* norm() preserva o comprimento para letras acentuadas pré-compostas, então os índices coincidem */
    var frag = [], resto = base, nb = norm(base);
    var marcas = [];
    termos.forEach(function (t) {
      var p = 0; while ((p = nb.indexOf(t, p)) !== -1) { marcas.push([p, p + t.length]); p += t.length; }
    });
    marcas.sort(function (a, b) { return a[0] - b[0]; });
    var cur = 0;
    marcas.forEach(function (m) {
      if (m[0] < cur) return;
      frag.push(resto.slice(cur, m[0])); frag.push(h("mark", {}, resto.slice(m[0], m[1]))); cur = m[1];
    });
    frag.push(resto.slice(cur));
    return [(ini > 0 ? "… " : "")].concat(frag).concat([ini + 220 < i.x.length ? " …" : ""]);
  }

  TP.rota("busca", function (main, args) {
    var consulta = (args[0] || "").trim(), tipo = args[1] || "";
    main.appendChild(h("p", { class: "eyebrow" }, "Busca"));
    main.appendChild(h("h1", {}, "Buscar no conteúdo e nas questões"));
    var inp = h("input", { type: "search", id: "busca-pagina", value: consulta, placeholder: "Termo ou expressão (ex.: normalização, SLE, kanban)", "aria-label": "Termo de busca" });
    var form = h("form", { class: "searchform", role: "search", onsubmit: function (e) {
      e.preventDefault();
      location.hash = "#/busca/" + encodeURIComponent(inp.value.trim()) + (tipo ? "/" + tipo : "");
    } }, inp, h("button", { class: "btn primary", type: "submit" }, "Buscar"));
    main.appendChild(form);
    var filtros = h("div", { class: "row" });
    [["", "Tudo"], ["c", "Conteúdo"], ["q", "Questões"]].forEach(function (f) {
      filtros.appendChild(h("a", { class: "btn" + (tipo === f[0] ? " primary" : ""), href: "#/busca/" + encodeURIComponent(consulta) + (f[0] ? "/" + f[0] : "") }, f[1]));
    });
    if (consulta) main.appendChild(filtros);
    var saida = h("div", { "aria-live": "polite" });
    main.appendChild(saida);
    if (!consulta) {
      saida.appendChild(h("p", { class: "muted" }, "Digite um termo. A busca ignora acentos e maiúsculas, exige todas as palavras digitadas e roda no seu navegador (sem enviar nada a servidores)."));
      return;
    }
    saida.appendChild(h("p", { class: "muted" }, "Buscando…"));
    carregar().then(function () {
      var res = buscar(consulta, tipo);
      var termos = norm(consulta).split(/\s+/).filter(function (t) { return t.length > 1; });
      saida.textContent = "";
      if (!termos.length) { saida.appendChild(h("p", { class: "muted" }, "Use termos com pelo menos 2 letras.")); return; }
      saida.appendChild(h("p", { class: "muted" }, res.length + " resultado(s)" + (res.length > 60 ? "; exibindo os 60 mais relevantes" : "") + " para “" + consulta + "”."));
      var ul = h("ul", { class: "list results" });
      res.slice(0, 60).forEach(function (r) {
        var i = r.i;
        var href = i.k === "c" ? "#/conteudo/" + i.id : "#/questoes/" + i.id;
        ul.appendChild(h("li", {}, h("div", { class: "res" },
          h("a", { href: href }, i.t), " ",
          h("span", { class: "badge" + (i.k === "q" ? " amber" : "") }, i.k === "q" ? "questão" : "conteúdo"),
          h("div", { class: "muted" }, i.k === "c" ? i.g + " › " + i.s : i.s),
          h("div", { class: "snip" }, trecho(i, termos)))));
      });
      saida.appendChild(ul);
    }).catch(function (e) {
      saida.textContent = "";
      saida.appendChild(h("div", { class: "notice" }, "Não foi possível carregar o índice de busca: " + e.message));
    });
    inp.focus();
  });

  /* Campo da barra superior: Enter leva à página de busca. */
  TP.iniciarBuscaTopo = function (form) {
    var inp = form.querySelector("input");
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      var v = inp.value.trim();
      location.hash = "#/busca" + (v ? "/" + encodeURIComponent(v) : "");
    });
    document.addEventListener("keydown", function (e) {
      var alvo = e.target && e.target.tagName;
      if (e.key === "/" && alvo !== "INPUT" && alvo !== "TEXTAREA" && alvo !== "SELECT") { e.preventDefault(); inp.focus(); }
    });
  };
})();
