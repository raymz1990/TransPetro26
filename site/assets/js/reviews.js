/* Motor de revisão espaçada (docs/estrategia/metodologia-estudo.md, seção 8).
   Usado por flashcards, conteúdo estudado e caderno de erros. Sem dependências.

   Cada item agendado é { s, due, ult, n, e, r }:
     s    posição na escada de intervalos (-1 = ainda não revisado; 0 = R1 ... 4 = último degrau);
     due  data da próxima revisão (AAAA-MM-DD, horário local);
     ult  data da última revisão; n revisões feitas; e vezes em que errou; r último resultado.

   Escada: R1 24 h, R2 7 d, R3 15 d, R4 30 d (metodologia, 8.1) e um degrau final de 60 d, que é ajuste
   do projeto (a metodologia só define R1 a R4 e diz que os intervalos podem ser ajustados).
   Ajuste pelo resultado (metodologia, 8.3): errou -> volta ao R1; difícil (baixa confiança) -> recua um
   degrau, intervalo mais curto; médio -> avança um degrau; fácil -> avança dois. */
(function () {
  "use strict";
  window.TP = window.TP || {};

  TP.REV_INT = [1, 7, 15, 30, 60];
  TP.REV_RES = [["errei", "Errei"], ["dificil", "Difícil"], ["medio", "Médio"], ["facil", "Fácil"]];

  function dois(n) { return (n < 10 ? "0" : "") + n; }
  /* Data local no formato AAAA-MM-DD. */
  TP.hoje = function (d) { d = d || new Date(); return d.getFullYear() + "-" + dois(d.getMonth() + 1) + "-" + dois(d.getDate()); };
  TP.paraData = function (s) { var p = s.split("-"); return new Date(+p[0], +p[1] - 1, +p[2], 12); };
  TP.addDias = function (s, n) { var d = TP.paraData(s); d.setDate(d.getDate() + n); return TP.hoje(d); };
  TP.difDias = function (a, b) { return Math.round((TP.paraData(a) - TP.paraData(b)) / 86400000); };   /* a - b, em dias */
  TP.dataBR = function (s) { var p = s.split("-"); return p[2] + "/" + p[1] + "/" + p[0]; };

  /* Degrau após o resultado. */
  function proximoS(s, res) {
    var max = TP.REV_INT.length - 1;
    if (res === "errei") return 0;
    if (res === "dificil") return Math.max(s - 1, 0);
    if (res === "medio") return Math.min(s + 1, max);
    return Math.min(s + 2, max);
  }
  /* Intervalo (dias) que cada botão produziria agora. */
  TP.revPrevia = function (e, res) { return TP.REV_INT[proximoS(e ? e.s : -1, res)]; };

  /* Item recém-estudado: primeira exposição, equivalente a um resultado "médio" (R1 em 24 h). */
  TP.revNovo = function (hoje) { hoje = hoje || TP.hoje(); return { s: 0, due: TP.addDias(hoje, TP.REV_INT[0]), ult: hoje, n: 0, e: 0, r: "" }; };

  /* Aplica o resultado de uma revisão; devolve o próprio item. */
  TP.revAplicar = function (e, res, hoje) {
    hoje = hoje || TP.hoje();
    e.s = proximoS(typeof e.s === "number" ? e.s : -1, res);
    e.due = TP.addDias(hoje, TP.REV_INT[e.s]);
    e.ult = hoje; e.n = (e.n || 0) + 1; e.r = res;
    if (res === "errei") e.e = (e.e || 0) + 1;
    return e;
  };

  /* "maduro": intervalo de 30 dias ou mais. */
  TP.revMaduro = function (e) { return !!e && e.s >= 3; };

  /* Atividade diária (alimenta Plano e Desempenho): TP.atividade().fc += 1 etc. */
  TP.atividade = function (dia) {
    dia = dia || TP.hoje();
    var a = TP.dados().atividade;
    return a[dia] || (a[dia] = {});
  };
  TP.somaAtividade = function (campo, n, dia) { var a = TP.atividade(dia); a[campo] = (a[campo] || 0) + n; };
})();
