/* Tema claro/escuro. O atributo inicial é aplicado por script inline no <head> (evita flash). */
(function () {
  "use strict";
  var KEY = "transpetro_enfase5_tema";
  window.TP = window.TP || {};

  TP.getTheme = function () {
    try { return localStorage.getItem(KEY) === "light" ? "light" : "dark"; } catch (e) { return "dark"; }
  };
  TP.setTheme = function (t) {
    document.documentElement.setAttribute("data-theme", t);
    try { localStorage.setItem(KEY, t); } catch (e) { /* preferência não persistida */ }
  };
  TP.toggleTheme = function () {
    var t = document.documentElement.getAttribute("data-theme") === "light" ? "dark" : "light";
    TP.setTheme(t);
    return t;
  };
})();
