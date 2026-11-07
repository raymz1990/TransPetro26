# -*- coding: utf-8 -*-
"""Gera banco-questoes/catalogo-questoes.md e banco-questoes/relatorio-cobertura-questoes.md a partir dos JSON.
Uso: python tools/gerar_docs_banco.py"""
import json, glob, os, re, sys, datetime
sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
from qlib import R, DIF
HOJE = "2026-11-06"
qs = []
for f in sorted(glob.glob(os.path.join(R, "banco-questoes/**/*.json"), recursive=True)):
    if "/simulados/" in f.replace("\\", "/"): continue
    qs += json.load(open(f, encoding="utf-8"))["questoes"]
mods = {}
for ln in open(os.path.join(R, "docs/edital/matriz-conteudo.md"), encoding="utf-8"):
    c = [x.strip() for x in ln.split("|")]
    if len(c) > 8 and re.match(r"E5-\d{3}$", c[1]):
        it = c[2].replace("*", "")
        if it not in mods: mods[it] = (c[1], c[3], c[4])
esp = [q for q in qs if not q["modulo"].startswith("gerais")]
ger = [q for q in qs if q["modulo"].startswith("gerais")]
def cnt(lst, t=None, st=None): return sum(1 for q in lst if (t is None or q["tipo"] == t) and (st is None or q["status_validacao"] == st))
# ---------- catálogo ----------
L = ["# Catálogo geral de questões — Banco de questões\n",
     "**Atualizado em:** %s (gerado por `python tools/gerar_docs_banco.py`). **Totais:** %d questões — oficiais %d · adaptadas %d · autorais %d (Específicos %d, Gerais %d). Validadas %d · em revisão %d.\n" % (
        HOJE, len(qs), cnt(qs, "oficial"), cnt(qs, "adaptada"), cnt(qs, "autoral"), cnt(esp, "autoral"), cnt(ger), cnt(qs, st="validada"), cnt(qs, st="em_revisao")),
     "`validada` = aprovada pelo usuário (sem revisão por terceiros). `em_revisao` = produzida na fase P1 (T04 a T06) e **ainda não validada pelo usuário**. Questões oficiais trazem prova e número no campo `fonte_origem`; gabaritos de 2023 são de espelho de terceiros, **não validados contra a banca**. O catálogo das provas (metadados, sem enunciados) está em `docs/estrategia/catalogo-questoes-historicas.md`.\n",
     "| ID | Tipo | Módulo | Item | Assunto | Dificuldade | Habilidade | Gabarito | Status | Origem |", "|---|---|---|---|---|---|---|---|---|---|"]
for q in sorted(qs, key=lambda q: q["id"]):
    fo = q.get("fonte_origem")
    org = ("%s %s, %s, Q%s (%s)" % (fo["concurso"].split(" (")[0], fo["ano"], fo["prova"], fo["numero_original"], fo["id_prova"])) if fo else "—"
    m = q["modulo"]; mm = ("M" + m[:2]) if m[0].isdigit() else ("Gerais · " + ("Port." if "portug" in m else "Ing."))
    L.append("| %s | %s | %s | %s | %s | %s | %s | %s | %s | %s |" % (q["id"], q["tipo"], mm, q["item_edital"], q["assunto"].replace("|", "/"), DIF[q["dificuldade"]], q["habilidade"], q["gabarito"], q["status_validacao"], org))
open(os.path.join(R, "banco-questoes/catalogo-questoes.md"), "w", encoding="utf-8").write("\n".join(L) + "\n")
# ---------- cobertura ----------
C = ["# Relatório de cobertura por questões — Banco de questões\n",
     "**Atualizado em:** %s (gerado por `python tools/gerar_docs_banco.py`). Diferencie cobertura **teórica** (94 de 94 itens validados) de cobertura **por questões**. Um item com uma questão **não** está \"dominado\": a presença de questão indica apenas que há material de treino.\n" % HOJE,
     "## Resumo\n", "| Indicador | Valor |", "|---|---|",
     "| Questões no banco | %d (Específicos %d · Gerais %d) |" % (len(qs), len(esp), len(ger)),
     "| Oficiais / adaptadas / autorais | %d / %d / %d |" % (cnt(qs, "oficial"), cnt(qs, "adaptada"), cnt(qs, "autoral")),
     "| Validadas pelo usuário / em revisão | %d / %d |" % (cnt(qs, st="validada"), cnt(qs, st="em_revisao"))]
por_item = {}
for q in esp: por_item.setdefault(q["item_edital"], []).append(q)
itens = [i for i in mods if not (re.fullmatch(r"\d", i) and i != "3")]
sem = [i for i in itens if i not in por_item]
C.append("| Itens do Anexo IV com ao menos uma questão principal | %d de %d |" % (len(itens) - len(sem), len(itens)))
C.append("| Itens sem questão principal | %s |" % (", ".join(sem) if sem else "nenhum"))
um = [i for i in itens if len(por_item.get(i, [])) == 1]
C.append("| Itens com apenas 1 questão principal | %d |" % len(um))
C.append("| Conhecimentos Gerais | %d questões em 14 itens (Português: 12 itens; Inglês: 2 itens) |\n" % len(ger))
for m in range(1, 10):
    lst = [q for q in esp if q["modulo"].startswith("%02d" % m)]
    C.append("## M%02d (%d questões: %d oficiais, %d autorais)\n" % (m, len(lst), cnt(lst, "oficial"), cnt(lst, "autoral")))
    C.append("| ID matriz | Item | Texto oficial | Autorais | Oficiais | Total |"); C.append("|---|---|---|---|---|---|")
    for i in itens:
        if mods[i][2] != "M%02d" % m: continue
        l = por_item.get(i, [])
        C.append("| %s | %s | %s | %d | %d | %d |" % (mods[i][0], i, mods[i][1], cnt(l, "autoral"), cnt(l, "oficial"), len(l)))
    C.append("")
C.append("## Conhecimentos Gerais\n"); C.append("| Item | Questões |"); C.append("|---|---|")
gi = {}
for q in ger: gi[q["item_edital"]] = gi.get(q["item_edital"], 0) + 1
for k in sorted(gi): C.append("| %s | %d |" % (k, gi[k]))
C.append("")
C.append("## Distribuição das alternativas corretas (todo o banco)\n")
dist = {l: sum(1 for q in qs if q["gabarito"] == l) for l in "ABCDE"}
C.append("A %d · B %d · C %d · D %d · E %d. Alternativa correta é a mais longa em %d de %d questões (%d%%); nas oficiais não há controle do projeto sobre isso." % (
    dist["A"], dist["B"], dist["C"], dist["D"], dist["E"],
    sum(1 for q in qs if max(q["alternativas"], key=lambda k: len(q["alternativas"][k])) == q["gabarito"]), len(qs),
    round(100 * sum(1 for q in qs if max(q["alternativas"], key=lambda k: len(q["alternativas"][k])) == q["gabarito"]) / len(qs))))
open(os.path.join(R, "banco-questoes/relatorio-cobertura-questoes.md"), "w", encoding="utf-8").write("\n".join(C) + "\n")
print("ok", len(qs), "sem questão:", sem)
