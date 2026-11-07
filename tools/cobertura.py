# -*- coding: utf-8 -*-
"""Cobertura de questões por item do Anexo IV. Uso: python tools/cobertura.py [--md]"""
import json, glob, os, re, sys
sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
from qlib import R, TEORIA
def carrega():
    qs = []
    for f in sorted(glob.glob(os.path.join(R, "banco-questoes/**/*.json"), recursive=True)):
        d = json.load(open(f, encoding="utf-8"))
        if isinstance(d, dict) and "questoes" in d: qs += d["questoes"]
    return qs
def itens():
    out = []
    for ln in open(os.path.join(R, "docs/edital/matriz-conteudo.md"), encoding="utf-8"):
        c = [x.strip() for x in ln.split("|")]
        if len(c) > 8 and re.match(r"E5-\d{3}$", c[1]):
            it = c[2].replace("*", "")
            if it not in [o[0] for o in out]: out.append((it, c[3]))
    return out
if __name__ == "__main__":
    qs = carrega(); esp = [q for q in qs if not q["id"].startswith("GER")]
    cont = {}
    for q in esp: cont[q["item_edital"]] = cont.get(q["item_edital"], 0) + 1
    its = [i for i in itens() if not re.fullmatch(r"\d", i[0]) or i[0] == "3"]
    sem = [i[0] for i in its if cont.get(i[0], 0) == 0]
    print("itens", len(its), "sem questão principal:", len(sem), sem)
    print("por módulo:", {m: sum(1 for q in esp if q["modulo"].startswith(m)) for m in sorted({q["modulo"][:2] for q in esp})})
