# -*- coding: utf-8 -*-
"""Valida o banco de questões (esquema v1.1) e os simulados. Uso: python tools/validar_banco.py
Falha (exit 1) se houver inconsistência."""
import json, glob, os, sys, re
R = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
erros = []
def err(m): erros.append(m)
qs = {}
for f in sorted(glob.glob(os.path.join(R, "banco-questoes/**/*.json"), recursive=True)):
    if "/simulados/" in f.replace("\\", "/"): continue
    d = json.load(open(f, encoding="utf-8"))
    for q in d["questoes"]:
        i = q["id"]
        if i in qs: err("ID duplicado " + i)
        qs[i] = q
        if sorted(q["alternativas"]) != list("ABCDE"): err(i + ": alternativas != A–E")
        if q["gabarito"] not in "ABCDE": err(i + ": gabarito inválido")
        if sorted(q["analise_alternativas"]) != list("ABCDE"): err(i + ": análise incompleta")
        else:
            for l, t in q["analise_alternativas"].items():
                ok = t.startswith("Correta") if l == q["gabarito"] else t.startswith("Incorreta")
                if not ok: err(i + ": análise da alternativa " + l + " não corresponde ao gabarito")
        pref = i.split("-")[0]
        if {"OFI": "oficial", "ADP": "adaptada", "AUT": "autoral"}[pref] != q["tipo"]: err(i + ": tipo x prefixo")
        if q["tipo"] == "autoral" and q.get("fonte_origem"): err(i + ": autoral com fonte_origem")
        if q["tipo"] != "autoral":
            fo = q.get("fonte_origem") or {}
            for k in ("banca", "concurso", "cargo", "ano", "prova", "numero_original", "id_prova", "situacao_gabarito", "aderencia_edital"):
                if not fo.get(k): err(i + ": fonte_origem sem " + k)
            if fo.get("banca") != "Fundação Cesgranrio": err(i + ": banca")
            if fo.get("aderencia_edital") in ("fora", "indeterminado"): err(i + ": aderência não permite uso")
        if q["tipo"] == "autoral" and "Cesgranrio" in q["rotulo"] and "estilo Cesgranrio" not in q["rotulo"]: err(i + ": rótulo")
        t = q["fundamentacao"].get("arquivo_teoria")
        if not t or not os.path.exists(os.path.join(R, t)): err(i + ": teoria inexistente " + str(t))
        for l, a in q["alternativas"].items():
            if not a.strip(): err(i + ": alternativa vazia " + l)
print(len(qs), "questões validadas;", len(erros), "erro(s)")
for e in erros[:60]: print(" -", e)
sys.exit(1 if erros else 0)
