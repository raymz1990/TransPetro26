/* Renderizador Markdown mínimo (títulos, listas, tabelas, código, citações, ênfase).
   Todo texto é escapado antes da conversão; links só http(s). */
(function () {
  "use strict";
  window.TP = window.TP || {};

  function esc(s) { return s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;"); }

  function inline(s) {
    s = esc(s);
    var codes = [];
    s = s.replace(/`([^`]+)`/g, function (m, c) { codes.push(c); return "\u0000" + (codes.length - 1) + "\u0000"; });
    s = s.replace(/\*\*\*(.+?)\*\*\*/g, "<strong><em>$1</em></strong>");
    s = s.replace(/\*\*(.+?)\*\*/g, "<strong>$1</strong>");
    s = s.replace(/(^|[\s(])\*(?!\s)([^*]+?)\*(?=[\s).,;:!?]|$)/g, "$1<em>$2</em>");
    s = s.replace(/\[([^\]]+)\]\((https?:\/\/[^)\s]+)\)/g, '<a href="$2" target="_blank" rel="noopener noreferrer">$1</a>');
    return s.replace(/\u0000(\d+)\u0000/g, function (m, i) { return "<code>" + codes[i] + "</code>"; });
  }

  function cells(line) {
    line = line.trim().replace(/^\|/, "").replace(/\|$/, "");
    return line.split(/(?<!\\)\|/).map(function (c) { return c.trim().replace(/\\\|/g, "|"); });
  }
  var SEP = /^\s*\|?\s*:?-{2,}:?\s*(\|\s*:?-{2,}:?\s*)*\|?\s*$/;
  var ITEM = /^(\s*)([-*+]|\d+[.)])\s+(.*)$/;

  function renderList(items) {
    var out = "", st = [];
    items.forEach(function (it) {
      while (st.length && it.ind < st[st.length - 1].ind) out += "</li></" + st.pop().tag + ">";
      var tag = it.ord ? "ol" : "ul";
      if (!st.length || it.ind > st[st.length - 1].ind) { out += "<" + tag + "><li>" + inline(it.text); st.push({ ind: it.ind, tag: tag }); }
      else out += "</li><li>" + inline(it.text);
    });
    while (st.length) out += "</li></" + st.pop().tag + ">";
    return out;
  }

  function render(md) {
    var L = md.replace(/\r\n?/g, "\n").split("\n"), out = "", i = 0;
    function bloco(l) { return /^(```|#{1,6}\s|>|\s*(---+|\*\*\*+)\s*$)/.test(l) || ITEM.test(l) || /^\s*\|/.test(l); }
    while (i < L.length) {
      var l = L[i], m;
      if (!l.trim()) { i++; continue; }
      if (/^```/.test(l)) {
        var buf = []; i++;
        while (i < L.length && !/^```/.test(L[i])) buf.push(L[i++]);
        i++; out += "<pre><code>" + esc(buf.join("\n")) + "</code></pre>"; continue;
      }
      if ((m = l.match(/^(#{1,6})\s+(.*)$/))) { out += "<h" + m[1].length + ">" + inline(m[2]) + "</h" + m[1].length + ">"; i++; continue; }
      if (/^\s*(---+|\*\*\*+)\s*$/.test(l)) { out += "<hr>"; i++; continue; }
      if (/^>/.test(l)) {
        var q = [];
        while (i < L.length && /^>/.test(L[i])) q.push(L[i++].replace(/^>\s?/, ""));
        out += "<blockquote>" + render(q.join("\n")) + "</blockquote>"; continue;
      }
      if (/^\s*\|/.test(l) && i + 1 < L.length && SEP.test(L[i + 1])) {
        var head = cells(l); i += 2; var rows = [];
        while (i < L.length && /^\s*\|/.test(L[i])) rows.push(cells(L[i++]));
        out += '<div class="tscroll"><table><thead><tr>' + head.map(function (c) { return "<th>" + inline(c) + "</th>"; }).join("") + "</tr></thead><tbody>" +
          rows.map(function (r) { return "<tr>" + r.map(function (c) { return "<td>" + inline(c) + "</td>"; }).join("") + "</tr>"; }).join("") + "</tbody></table></div>";
        continue;
      }
      if ((m = l.match(ITEM))) {
        var items = [];
        while (i < L.length) {
          var im = L[i].match(ITEM);
          if (im) { items.push({ ind: im[1].replace(/\t/g, "    ").length, ord: /\d/.test(im[2]), text: im[3] }); i++; }
          else if (L[i].trim() && /^\s+\S/.test(L[i]) && items.length && !/^\s*\|/.test(L[i])) { items[items.length - 1].text += " " + L[i].trim(); i++; }
          else if (!L[i].trim() && i + 1 < L.length && ITEM.test(L[i + 1])) i++;
          else break;
        }
        out += renderList(items); continue;
      }
      var p = [l]; i++;
      while (i < L.length && L[i].trim() && !bloco(L[i])) p.push(L[i++]);
      out += "<p>" + inline(p.join(" ")) + "</p>";
    }
    return out;
  }

  /* Separa o front matter YAML (--- ... ---) do corpo. */
  TP.mdSplit = function (txt) {
    var m = txt.replace(/\r\n?/g, "\n").match(/^---\n([\s\S]*?)\n---\n?/);
    return m ? { fm: m[1], corpo: txt.replace(/\r\n?/g, "\n").slice(m[0].length) } : { fm: "", corpo: txt };
  };
  TP.md = render;
  TP.mdInline = inline;
})();
