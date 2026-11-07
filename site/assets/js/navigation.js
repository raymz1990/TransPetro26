/* Utilitários de DOM, roteamento por hash e menu lateral. */
(function () {
  "use strict";
  window.TP = window.TP || {};

  /* h("div", {class:"x"}, "texto", filho) — textos entram via textContent. */
  TP.h = function (tag, attrs) {
    var el = document.createElement(tag);
    Object.keys(attrs || {}).forEach(function (k) {
      var v = attrs[k];
      if (v === false || v == null) return;
      if (k === "class") el.className = v;
      else if (k.slice(0, 2) === "on") el.addEventListener(k.slice(2), v);
      else if (k === "html") el.innerHTML = v; /* só para saída de TP.md (já escapada) */
      else el.setAttribute(k, v === true ? "" : v);
    });
    for (var i = 2; i < arguments.length; i++) {
      var c = arguments[i];
      if (c == null || c === false) continue;
      if (Array.isArray(c)) c.forEach(function (x) { if (x != null && x !== false) el.appendChild(typeof x === "string" ? document.createTextNode(x) : x); });
      else el.appendChild(typeof c === "string" || typeof c === "number" ? document.createTextNode(String(c)) : c);
    }
    return el;
  };

  var toastTimer;
  TP.toast = function (msg) {
    var t = document.getElementById("toast");
    if (!t) { t = TP.h("div", { id: "toast", class: "toast", role: "status" }); document.body.appendChild(t); }
    t.textContent = msg; t.hidden = false;
    clearTimeout(toastTimer);
    toastTimer = setTimeout(function () { t.hidden = true; }, 4200);
  };

  var MENU = [
    ["Estudo", [["#/", "Início"], ["#/conteudo", "Conteúdo"], ["#/questoes", "Questões"], ["#/simulados", "Simulados"], ["#/erros", "Caderno de erros"], ["#/desempenho", "Desempenho"]]],
    ["Estudo ativo", [["#/flashcards", "Flashcards"], ["#/revisoes", "Revisões"], ["#/plano", "Plano de estudos"]]],
    ["Sistema", [["#/dados", "Meus dados"], ["#/sobre", "Sobre o projeto"]]]
  ];

  TP.montarMenu = function (nav) {
    nav.textContent = "";
    MENU.forEach(function (sec) {
      nav.appendChild(TP.h("h2", {}, sec[0]));
      sec[1].forEach(function (it) {
        if (it[0].charAt(0) === "#") nav.appendChild(TP.h("a", { href: it[0], "data-rota": it[0] }, it[1]));
        else nav.appendChild(TP.h("span", { class: "soon", title: "Ainda não implementado" }, it[1], TP.h("span", { class: "tag" }, "em breve")));
      });
    });
  };

  TP.rotas = {};
  TP.rota = function (nome, fn) { TP.rotas[nome] = fn; };

  TP.navegar = function () {
    var main = document.getElementById("app");
    if (TP.aoSair) { var sair = TP.aoSair; TP.aoSair = null; sair(); }   /* encerra cronômetros da tela anterior */
    var partes = (location.hash || "#/").replace(/^#\/?/, "").split("/").filter(Boolean).map(decodeURIComponent);
    var nome = partes[0] || "";
    var fn = TP.rotas[nome];
    main.textContent = "";
    document.querySelectorAll(".sidebar a").forEach(function (a) {
      var alvo = a.getAttribute("data-rota");
      var atual = nome === "" ? "#/" : "#/" + nome;
      if (alvo === atual) a.setAttribute("aria-current", "page"); else a.removeAttribute("aria-current");
    });
    document.getElementById("menu").classList.remove("open");
    try {
      if (fn) fn(main, partes.slice(1));
      else main.appendChild(TP.h("div", {}, TP.h("h1", {}, "Página não encontrada"), TP.h("p", {}, "O endereço solicitado não existe. "), TP.h("a", { href: "#/" }, "Voltar ao início")));
    } catch (e) {
      main.appendChild(TP.h("div", { class: "notice" }, "Erro ao exibir esta página: " + e.message));
      if (window.console) console.error(e);
    }
    window.scrollTo(0, 0);
    main.focus({ preventScroll: true });
  };
})();
