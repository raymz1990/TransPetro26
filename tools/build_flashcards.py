# -*- coding: utf-8 -*-
"""Gera site/assets/data/flashcards.json (T09).

Fonte única: a teoria validada (conteudo/ e conteudo-gerais/) e os campos de revisão das questões.
Não há cartão escrito "do zero": todo cartão é extraído de um trecho identificável e carrega a referência
ao arquivo/seção (tabelas de conceitos e comparações) ou à questão (ponto-chave e revisão rápida).

Tipos:
  tabela   — linha de tabela da teoria: termo (1ª coluna) -> demais colunas.
  comparacao — tabela "Conceito A | Conceito B | Diferença principal": diferença entre dois conceitos.
  questao  — "revisão rápida" + "ponto de atenção" de uma questão do banco (autoral ou oficial).

Uso: python tools/build_flashcards.py (na raiz) — também chamado por tools/build_site_data.py.
"""
import hashlib
import json
import os
import re

R = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
S = os.path.join(R, "site")

# Cabeçalhos de 1ª coluna que não formam "termo -> definição" (valores de tabela-verdade, alternativas, listas soltas).
SKIP_H0 = {"a", "#", "p", "q", "r", "vantagens", "vantagem", "prós", "pros", "linha", "n", "x", "entrada", "caso", "exemplo", "passo"}
MAX_KEY = 140
MAX_VAL = 420


def limpa_celula(c):
    c = c.replace("<br>", " / ").replace("<br/>", " / ")
    return re.sub(r"\s+", " ", c).strip()


def plano(c):
    """Texto sem marcação, para medir tamanho e comparar."""
    return re.sub(r"[*`_]", "", c).strip()


def tabelas(texto):
    """Gera (secao, cabecalho, linhas) de cada tabela Markdown fora de blocos de código."""
    texto = re.sub(r"\A---\n.*?\n---\n", "", texto, flags=re.S)
    L = texto.split("\n")
    sec, cod, i = "", False, 0
    while i < len(L) - 1:
        ln = L[i]
        if ln.startswith("```"):
            cod = not cod
        elif not cod:
            if ln.startswith("#"):
                sec = ln.lstrip("# ").strip()
            elif ln.startswith("|") and re.match(r"^\|[\s:|-]+\|\s*$", L[i + 1]):
                cab = [limpa_celula(c) for c in ln.strip().strip("|").split("|")]
                j, linhas = i + 2, []
                while j < len(L) and L[j].startswith("|"):
                    linhas.append([limpa_celula(c) for c in L[j].strip().strip("|").split("|")])
                    j += 1
                yield sec, cab, linhas
                i = j
                continue
        i += 1


def codigos_itens(itens):
    cods = []
    for t in itens:
        for c in re.findall(r"\b\d+\.\d+\b", t):
            if c not in cods:
                cods.append(c)
    if not cods and itens:
        m = re.match(r"\d+", itens[0])
        if m:
            cods.append(m.group(0))
    return cods


def cartoes_da_teoria(grupos):
    cartoes, usados = [], {}
    for g in grupos:
        for a in g["assuntos"]:
            txt = open(os.path.join(R, a["arquivo"]), encoding="utf-8").read()
            itens = codigos_itens(a["itens_edital"])
            for sec, cab, linhas in tabelas(txt):
                if len(cab) < 2 or plano(cab[0]).lower() in SKIP_H0:
                    continue
                comparacao = len(cab) == 3 and plano(cab[0]).lower() == "conceito a" and plano(cab[1]).lower() == "conceito b"
                for ln in linhas:
                    if len(ln) != len(cab):
                        continue
                    chave = ln[0]
                    vals = ln[1:]
                    if not chave or plano(chave) in ("—", "-") or len(chave) > MAX_KEY:
                        continue
                    if all(plano(v) in ("", "—", "-") for v in vals):
                        continue
                    if sum(len(v) for v in vals) < 6 or sum(len(v) for v in vals) > MAX_VAL * len(vals):
                        continue
                    if len(plano(chave)) <= 2 or plano(chave).lower() == "total":
                        continue
                    cid = "FC-" + hashlib.sha1(f"{a['arquivo']}|{sec}|{plano(chave)}".encode("utf-8")).hexdigest()[:8]
                    n = usados.get(cid, 0) + 1
                    usados[cid] = n
                    if n > 1:
                        cid += f"-{n}"
                    c = {"id": cid, "g": g["id"], "a": a["id"], "s": sec, "i": itens}
                    if comparacao:
                        c.update({"t": "comparacao", "k": f"{chave} × {vals[0]}", "p": "Qual é a diferença principal?",
                                  "v": [["Diferença", vals[1]]]})
                    else:
                        pergunta = cab[1] if len(cab) == 2 else ", ".join(cab[1:])
                        c.update({"t": "tabela", "h": cab[0], "k": chave, "p": pergunta + "?",
                                  "v": [[cab[k + 1], vals[k]] for k in range(len(vals)) if plano(vals[k]) not in ("", "—", "-")]})
                    cartoes.append(c)
    return cartoes


def cartoes_das_questoes(grupos, qs):
    por_pasta = {g["pasta"]: g["id"] for g in grupos}
    # Módulos de Gerais usam nomes "gerais-lingua-portuguesa" nas questões e "01-lingua-portuguesa" nas pastas.
    for g in grupos:
        if g["tipo"] == "geral":
            por_pasta["gerais-" + g["pasta"][3:]] = g["id"]
    cartoes = []
    for q in qs:
        rr = (q.get("revisao_rapida") or "").strip()
        if not rr:
            continue
        gid = por_pasta.get(q["modulo"])
        assert gid, ("módulo sem grupo", q["modulo"], q["id"])
        v = [["Revisão rápida", rr]]
        if (q.get("ponto_atencao") or "").strip():
            v.append(["Ponto de atenção", q["ponto_atencao"].strip()])
        cartoes.append({"id": "FQ-" + q["id"], "g": gid, "a": None, "s": "Item " + str(q["item_edital"]), "i": [str(q["item_edital"])],
                        "t": "questao", "k": q["assunto"], "p": "Qual é o ponto-chave para a prova?", "v": v, "q": q["id"]})
    return cartoes


def gerar(grupos, qs):
    cartoes = cartoes_da_teoria(grupos) + cartoes_das_questoes(grupos, qs)
    ids = [c["id"] for c in cartoes]
    assert len(ids) == len(set(ids)), "IDs de flashcards duplicados"
    por_tipo = {}
    for c in cartoes:
        por_tipo[c["t"]] = por_tipo.get(c["t"], 0) + 1
    out = {"gerado_de": "tabelas da teoria (conteudo/, conteudo-gerais/) e revisão rápida/ponto de atenção das questões",
           "aviso": "Cartões extraídos automaticamente de trechos da teoria validada e dos comentários das questões; não foram revisados um a um.",
           "total": len(cartoes), "por_tipo": por_tipo, "cartoes": cartoes}
    json.dump(out, open(os.path.join(S, "assets/data/flashcards.json"), "w", encoding="utf-8"), ensure_ascii=False, separators=(",", ":"))
    print("flashcards", len(cartoes), por_tipo)
    return cartoes


if __name__ == "__main__":
    grupos = json.load(open(os.path.join(S, "assets/data/conteudo.json"), encoding="utf-8"))["grupos"]
    qs = json.load(open(os.path.join(S, "assets/data/questoes.json"), encoding="utf-8"))["questoes"]
    gerar(grupos, qs)
