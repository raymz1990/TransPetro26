/* Cronômetro baseado em Date.now() (não acumula erro quando a aba fica em segundo plano). */
(function () {
  "use strict";
  window.TP = window.TP || {};

  /* "01:05:09" a partir de segundos; negativos viram 00:00:00. */
  TP.fmtTempo = function (seg) {
    seg = Math.max(0, Math.floor(seg));
    var h = Math.floor(seg / 3600), m = Math.floor((seg % 3600) / 60), s = seg % 60;
    function p(n) { return (n < 10 ? "0" : "") + n; }
    return p(h) + ":" + p(m) + ":" + p(s);
  };

  /* opts: inicio (ms), limiteSeg (0 = sem limite), onTick({decorrido, restante}), onFim() */
  TP.Timer = function (opts) {
    var id = null, acabou = false;
    function info() {
      var dec = Math.floor((Date.now() - opts.inicio) / 1000);
      return { decorrido: dec, restante: opts.limiteSeg ? opts.limiteSeg - dec : null };
    }
    function tick() {
      var i = info();
      if (opts.onTick) opts.onTick(i);
      if (opts.limiteSeg && i.restante <= 0 && !acabou) { acabou = true; parar(); if (opts.onFim) opts.onFim(); }
    }
    function iniciar() { tick(); if (!acabou) { id = setInterval(tick, 1000); document.addEventListener("visibilitychange", tick); } }
    function parar() { if (id) clearInterval(id); id = null; document.removeEventListener("visibilitychange", tick); }
    return { iniciar: iniciar, parar: parar, info: info };
  };
})();
