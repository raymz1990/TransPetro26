# -*- coding: utf-8 -*-
"""Junta os lotes OFI (2023, 2018...) e grava os JSON por módulo. Execute: python tools/lotes/ofi_build.py"""
import sys, os
sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
sys.path.insert(0, os.path.dirname(os.path.dirname(os.path.abspath(__file__))))
from qlib import *
import ofi_transpetro2023 as a, ofi_transpetro2018 as b, ofi_outras as c
L = a.L + b.L + c.L
for _m, _q in L:   # Q59/2023 tem aderência parcial (item 4 genérico)
    if _q["fonte_origem"]["id_prova"] == "PRV-005" and _q["fonte_origem"]["numero_original"] == 59: _q["fonte_origem"]["aderencia_edital"] = "parcial"
por = {}
for n, (mod, q) in enumerate(L, 1):
    q["id"] = "OFI-%06d" % n
    por.setdefault(mod, []).append(q)
for mod in sorted(por):
    grava(por[mod], os.path.join(R, "banco-questoes/oficiais/por-assunto", "ofi-" + SLUG[mod] + ".json"),
          "Questões oficiais — " + SLUG[mod], "T04 — Transpetro 2023 (Prova 6) e 2018 (Prova 15)", "2026-11-06")
print(len(L), {m: len(v) for m, v in por.items()})
