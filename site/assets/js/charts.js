/* Gráficos leves em SVG, sem dependências (T12). Cores e fontes vêm de CSS (estudo.css), então seguem o tema claro/escuro.
   Todo gráfico traz resumo textual (aria-label) e a tabela de dados em <details>, para leitura sem depender da imagem. */
(function () {
  "use strict";
  window.TP = window.TP || {};
  var NS = "http://www.w3.org/2000/svg";
  var W = 640, H = 230, ML = 40, MR = 12, MT = 12, MB = 30;

  function s(tag, attrs, texto) {
    var el = document.createElementNS(NS, tag);
    Object.keys(attrs || {}).forEach(function (k) { el.setAttribute(k, attrs[k]); });
    if (texto != null) el.textContent = texto;
    return el;
  }
  function numBR(v, dec) { return (dec != null && !Number.isInteger(v) ? v.toFixed(dec) : String(v)).replace(".", ","); }

  /* Envelope: título, SVG e tabela de dados. */
  function envolver(titulo, resumo, svg, cab, linhas) {
    var tb = TP.h("tbody", {});
    linhas.forEach(function (l) { tb.appendChild(TP.h("tr", {}, l.map(function (c) { return TP.h("td", {}, String(c)); }))); });
    return TP.h("figure", { class: "grafico" },
      TP.h("figcaption", {}, titulo),
      svg,
      TP.h("details", {}, TP.h("summary", {}, "Ver os dados do gráfico"),
        TP.h("div", { class: "tscroll" }, TP.h("table", { class: "table" }, TP.h("thead", {}, TP.h("tr", {}, cab.map(function (c) { return TP.h("th", {}, c); }))), tb))),
      TP.h("p", { class: "sr-only" }, resumo));
  }

  function eixoY(svg, max, passo, fmt) {
    for (var v = 0; v <= max + 1e-9; v += passo) {
      var y = MT + (H - MT - MB) * (1 - v / max);
      svg.appendChild(s("line", { class: "g-grade", x1: ML, x2: W - MR, y1: y, y2: y }));
      svg.appendChild(s("text", { x: ML - 6, y: y + 4, "text-anchor": "end" }, fmt ? fmt(v) : String(v)));
    }
  }
  function rotulosX(svg, rotulos, xs) {
    var passo = Math.max(1, Math.ceil(rotulos.length / 10));
    rotulos.forEach(function (r, i) {
      if (i % passo === 0 || i === rotulos.length - 1) svg.appendChild(s("text", { x: xs[i], y: H - 10, "text-anchor": "middle" }, r));
    });
  }

  /* Linha: serie.valores com null = sem dado (a linha se interrompe); serie.n[i] < nMin desenha o ponto vazado (amostra pequena).
     opts: titulo, rotulos, valores, n, nMin, max, passo, fmt, ref {y, rotulo}, unidade */
  TP.grafLinha = function (o) {
    var svg = s("svg", { viewBox: "0 0 " + W + " " + H, class: "g-svg", role: "img", "aria-label": o.titulo });
    var max = o.max || 100, n = o.rotulos.length, xs = [];
    eixoY(svg, max, o.passo || max / 4, o.fmt);
    for (var i = 0; i < n; i++) xs.push(n === 1 ? (ML + W - MR) / 2 : ML + (W - ML - MR) * i / (n - 1));
    svg.appendChild(s("line", { class: "g-eixo", x1: ML, x2: W - MR, y1: H - MB, y2: H - MB }));
    if (o.ref != null) {
      var yr = MT + (H - MT - MB) * (1 - o.ref.y / max);
      svg.appendChild(s("line", { class: "g-ref", x1: ML, x2: W - MR, y1: yr, y2: yr }));
      svg.appendChild(s("text", { x: W - MR - 2, y: yr - 4, "text-anchor": "end", class: "g-reft" }, o.ref.rotulo));
    }
    var d = "";
    o.valores.forEach(function (v, i) {
      if (v == null) { d += " "; return; }
      var y = MT + (H - MT - MB) * (1 - Math.min(v, max) / max);
      d += (d.slice(-1) === " " || d === "" ? "M" : "L") + xs[i].toFixed(1) + " " + y.toFixed(1);
    });
    svg.appendChild(s("path", { class: "g-linha", d: d.trim() }));
    o.valores.forEach(function (v, i) {
      if (v == null) return;
      var y = MT + (H - MT - MB) * (1 - Math.min(v, max) / max), pq = o.n && o.nMin && o.n[i] < o.nMin;
      var c = s("circle", { class: "g-ponto" + (pq ? " pq" : ""), cx: xs[i].toFixed(1), cy: y.toFixed(1), r: 4 });
      c.appendChild(s("title", {}, o.rotulos[i] + ": " + numBR(v, o.unidade === "%" ? 0 : 1) + (o.unidade || "") + (o.n ? " (n = " + o.n[i] + (pq ? ", amostra pequena" : "") + ")" : "")));
      svg.appendChild(c);
    });
    rotulosX(svg, o.rotulos, xs);
    var com = o.valores.filter(function (v) { return v != null; }).length;
    var resumo = o.titulo + ": " + com + " de " + n + " pontos com dados." + (com ? " Último valor: " + numBR(o.valores.filter(function (v) { return v != null; }).pop(), o.unidade === "%" ? 0 : 1) + (o.unidade || "") + "." : "");
    var linhas = o.rotulos.map(function (r, i) { return [r, o.valores[i] == null ? "—" : numBR(o.valores[i], o.unidade === "%" ? 0 : 1) + (o.unidade || ""), o.n ? o.n[i] : ""]; });
    return envolver(o.titulo, resumo, svg, [o.cabX || "Período", o.cabY || "Valor", o.n ? "n" : ""], linhas);
  };

  /* Barras verticais. opts: titulo, rotulos, valores, max, passo, fmt, unidade */
  TP.grafBarras = function (o) {
    var svg = s("svg", { viewBox: "0 0 " + W + " " + H, class: "g-svg", role: "img", "aria-label": o.titulo });
    var maxV = Math.max.apply(null, o.valores.concat([1])), max = o.max || Math.ceil(maxV / (o.passo || 1)) * (o.passo || 1) || 1, n = o.rotulos.length;
    eixoY(svg, max, o.passo || max / 4, o.fmt);
    svg.appendChild(s("line", { class: "g-eixo", x1: ML, x2: W - MR, y1: H - MB, y2: H - MB }));
    var larg = (W - ML - MR) / n, xs = [];
    o.valores.forEach(function (v, i) {
      var h = (H - MT - MB) * Math.min(v, max) / max, x = ML + larg * i + larg * 0.18;
      xs.push(ML + larg * i + larg / 2);
      var b = s("rect", { class: "g-barra", x: x.toFixed(1), y: (H - MB - h).toFixed(1), width: (larg * 0.64).toFixed(1), height: Math.max(h, 0).toFixed(1) });
      b.appendChild(s("title", {}, o.rotulos[i] + ": " + numBR(v, 1) + (o.unidade || "")));
      svg.appendChild(b);
    });
    rotulosX(svg, o.rotulos, xs);
    var total = o.valores.reduce(function (a, b) { return a + b; }, 0);
    return envolver(o.titulo, o.titulo + ": total " + numBR(total, 1) + (o.unidade || "") + " em " + n + " períodos.", svg, [o.cabX || "Período", o.cabY || "Valor"],
      o.rotulos.map(function (r, i) { return [r, numBR(o.valores[i], 1) + (o.unidade || "")]; }));
  };
})();
