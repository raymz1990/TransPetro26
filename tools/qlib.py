# -*- coding: utf-8 -*-
"""Biblioteca de autoria do banco de questões: monta objetos no esquema v1.1,
grava o JSON do lote e gera os .md (questões e gabaritos comentados).
Uso pelos scripts de lote (ver tools/lotes/)."""
import json, os, re
R = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
MATRIZ = {"1.1":"E5-002","1.2":"E5-003","1.3":"E5-004","1.4":"E5-005","1.5":"E5-006","1.6":"E5-007","1.7":"E5-008","1.8":"E5-009",
"1.9":"E5-010","1.10":"E5-011","1.11":"E5-012","1.12":"E5-013","1.13":"E5-014","1.14":"E5-015","1.15":"E5-016","1.16":"E5-017",
"1.17":"E5-018","1.18":"E5-019","1.19":"E5-020","1.20":"E5-021","1.21":"E5-022","1.22":"E5-023","1.23":"E5-024",
"2.1":"E5-026","2.2":"E5-027","2.3":"E5-028","2.4":"E5-029","2.5":"E5-030","2.6":"E5-031","2.7":"E5-032","3":"E5-033",
"4":"E5-034","4.1":"E5-035","4.2":"E5-036","4.3":"E5-037","4.4":"E5-038","4.5":"E5-039","4.6":"E5-040",
"5.1":"E5-042","5.2":"E5-043","5.3":"E5-044","5.4":"E5-045","5.5":"E5-046",
"6.1":"E5-048","6.2":"E5-049","6.3":"E5-050","6.4":"E5-051","6.5":"E5-052","6.6":"E5-053","6.7":"E5-054","6.8":"E5-055",
"6.9":"E5-056","6.10":"E5-057","6.11":"E5-058",
"7.1":"E5-060","7.2":"E5-061","7.3":"E5-062","7.4":"E5-063","7.5":"E5-064","7.6":"E5-065","7.7":"E5-066","7.8":"E5-067",
"7.9":"E5-068","7.10":"E5-069","7.11":"E5-070",
"8.1":"E5-072","8.2":"E5-073","8.3":"E5-074","8.4":"E5-075","8.5":"E5-076","8.6":"E5-077","8.7":"E5-078","8.8":"E5-079","8.9":"E5-080"}
MODS = {1:"01-arquitetura-dados",2:"02-projetos-produtos",3:"03-processos-gerenciamento",4:"04-governanca-ti",
 5:"05-engenharia-software",6:"06-experiencia-usuario",7:"07-analise-dados",8:"08-logica-matematica",9:"09-seguranca-informacao"}
SLUG = {1:"m01-arquitetura-dados",2:"m02-projetos-produtos",3:"m03-processos-gerenciamento",4:"m04-governanca-ti",
 5:"m05-engenharia-software",6:"m06-experiencia-usuario",7:"m07-analise-dados",8:"m08-logica-matematica",9:"m09-seguranca-informacao"}
def _teoria():
    d = {}
    try:
        for ln in open(os.path.join(R, "docs/edital/matriz-conteudo.md"), encoding="utf-8"):
            c = [x.strip() for x in ln.split("|")]
            if len(c) > 8 and re.match(r"E5-\d{3}$", c[1]) and c[1] not in d.get("_ids", set()):
                item = c[2].replace("*", "")
                m = re.search(r"conteudo/[\w\-/\.]+\.md", c[7])
                if m and item not in d: d[item] = m.group(0)
    except OSError:
        pass
    return d
TEORIA = _teoria()
DIF = {"facil":"Fácil","media":"Média","dificil":"Difícil"}

def questao(id, tipo, rotulo, mod, item, assunto, dif, hab, tq, enun, alts, gab, resol, an, ponto, rev,
            fonte=None, verif="", tags=(), status="em_revisao", teoria="", sec=(), extra=None):
    letras = "ABCDE"
    assert len(alts) == 5 and len(an) == 5 and gab in letras, id
    q = {"id": id, "tipo": tipo, "rotulo": rotulo, "modulo": MODS[mod] if isinstance(mod, int) else mod,
         "assunto": assunto, "item_edital": item, "id_matriz": MATRIZ.get(item), "itens_secundarios": list(sec),
         "dificuldade": dif, "habilidade": hab, "tipo_questao": tq, "enunciado": enun,
         "alternativas": {l: a for l, a in zip(letras, alts)}, "gabarito": gab, "resolucao": resol,
         "analise_alternativas": {l: ("Correta. " if l == gab else "Incorreta. ") + t for l, t in zip(letras, an)},
         "fundamentacao": {"item": item, "arquivo_teoria": TEORIA.get(item) or teoria},
         "ponto_atencao": ponto, "revisao_rapida": rev,
         "tags": list(tags) + [tipo, dif, hab], "fonte_origem": fonte, "verificacao": verif, "status_validacao": status}
    if extra: q.update(extra)
    return q

def grava(qs, caminho_json, titulo, lote, data):
    os.makedirs(os.path.dirname(caminho_json), exist_ok=True)
    json.dump({"modulo": titulo, "lote": lote, "data": data, "total": len(qs), "questoes": qs},
              open(caminho_json, "w", encoding="utf-8"), ensure_ascii=False, indent=1)
    base = caminho_json[:-5]
    a = ["# %s — questões (%s)\n" % (titulo, lote), "Sem gabarito; o comentário está no arquivo `gabaritos-comentados`.\n"]
    b = ["# %s — gabaritos comentados (%s)\n" % (titulo, lote)]
    for q in qs:
        a.append("## %s — %s\n\n*%s* · item %s · %s\n\n%s\n" % (q["id"], q["assunto"], q["rotulo"], q["item_edital"], DIF[q["dificuldade"]], q["enunciado"]))
        a.append("\n".join("(%s) %s" % (l, t) for l, t in q["alternativas"].items()) + "\n")
        b.append("## %s — %s\n\n*%s*\n\n**Gabarito: %s**\n\n%s\n" % (q["id"], q["assunto"], q["rotulo"], q["gabarito"], q["resolucao"]))
        b.append("\n".join("- **%s)** %s" % (l, t) for l, t in q["analise_alternativas"].items()) + "\n")
        b.append("**Ponto de atenção:** %s\n\n**Revisão rápida:** %s\n" % (q["ponto_atencao"], q["revisao_rapida"]))
        if q.get("fonte_origem"):
            f = q["fonte_origem"]; b.append("**Fonte:** %s, %s, %s (%s), prova %s, questão %s; gabarito: %s.\n" % (f["banca"], f["concurso"], f["cargo"], f["ano"], f["prova"], f["numero_original"], f["situacao_gabarito"]))
    open(base + "-questoes.md", "w", encoding="utf-8").write("\n".join(a))
    open(base + "-gabaritos-comentados.md", "w", encoding="utf-8").write("\n".join(b))
