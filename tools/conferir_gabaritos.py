# -*- coding: utf-8 -*-
"""T13: confere o gabarito das questoes OFI- da Transpetro (2018 e 2023) contra os PDFs de gabarito da Cesgranrio
salvos em banco-questoes/oficiais/fontes-brutas. Uso: python tools/conferir_gabaritos.py"""
import re, json, glob, os, sys
import pypdf
R = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
FB = os.path.join(R, "banco-questoes/oficiais/fontes-brutas")
def texto(f):
    t = "\n".join(p.extract_text() or "" for p in pypdf.PdfReader(os.path.join(FB, f)).pages)
    return re.sub(r"ANU-\s*\n?\s*LADA", "ANULADA", t)
TOK = re.compile(r"(\d+)\s*-\s*(ANULADA|[A-E])")
def g2023():
    t = texto("transpetro-2023-psp002-gabarito-terra-superior-1-a-28.pdf")
    i = t.index("Análise de Sistemas – \nProcessos de Negócios")
    seg = t[i:]
    seg = seg[: seg.index("PROVA 9") if "PROVA 9" in seg else len(seg)]
    out = {}
    for ln in seg.splitlines():
        p = TOK.findall(ln)
        if len(p) == 8:
            for n, l in p[2:4]: out[int(n)] = l
    return out
def g2018():
    t = texto("transpetro-2018-gabarito-nivel-superior-10-a-32.pdf")
    i = t.index("PROVA 15 – ANALISTA DE SISTEMAS JÚNIOR – PROCESSOS DE NEGÓCIO")
    seg = t[i:i + 600]
    out = {}
    for n, l in TOK.findall(seg): out.setdefault(int(n), l)
    return {n: l for n, l in out.items() if 21 <= n <= 70}
# conhecimentos basicos (1 a 20) estao em outro bloco; so as especificas sao conferidas
fonte = {"PRV-005": g2023(), "PRV-006": g2018()}
for k, v in fonte.items(): print(k, len(v), "gabaritos lidos do PDF oficial")
qs = []
for f in glob.glob(os.path.join(R, "banco-questoes/oficiais/**/*.json"), recursive=True):
    qs += json.load(open(f, encoding="utf-8"))["questoes"]
div, ok, sem = [], 0, []
for q in qs:
    fo = q["fonte_origem"]; pid = fo["id_prova"]
    if pid not in fonte: continue
    n = fo["numero_original"]; g = fonte[pid].get(n)
    if g is None: sem.append((q["id"], n)); continue
    if g == q["gabarito"]: ok += 1
    else: div.append((q["id"], pid, n, q["gabarito"], g))
print("conferem:", ok, "| divergentes:", len(div), "| sem gabarito no PDF:", len(sem))
for d in div: print("  DIVERGE", d)
for d in sem: print("  SEM", d)
