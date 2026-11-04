# -*- coding: utf-8 -*-
"""Gera site/assets/data/*.json e copia os .md de conteudo/ para site/conteudo/.
Fonte única: conteudo/, conteudo-gerais/ e banco-questoes/autorais/por-assunto/*.json.
Uso: python tools/build_site_data.py (na raiz do projeto)."""
import json, re, shutil, glob, os
R = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
S = os.path.join(R, "site")
NOMES = {"01":"Arquitetura de dados","02":"Gerenciamento de projetos e produtos","03":"Processos e seu gerenciamento",
 "04":"Gestão e governança de TI","05":"Engenharia de software","06":"Experiência do usuário (UX)",
 "07":"Análise de dados e informações","08":"Lógica matemática","09":"Segurança da informação"}
def meta(path):
    t = open(path, encoding="utf-8").read()
    m = re.match(r"---\n(.*?)\n---\n", t, re.S)
    fm = m.group(1) if m else ""
    itens = re.findall(r'^\s+- "(.*?)"\s*$', fm, re.M)
    st = re.search(r"^status:\s*\"?([A-Z_]+)", fm, re.M)
    h1 = re.search(r"^# (.+)$", t, re.S and re.M)
    return (h1.group(1).strip() if h1 else os.path.basename(path)), itens, (st.group(1) if st else "")
grupos = []
dst_root = os.path.join(S, "conteudo")
if os.path.isdir(dst_root): shutil.rmtree(dst_root)
for tipo, base in (("especifico", "conteudo"), ("geral", "conteudo-gerais")):
    for d in sorted(os.listdir(os.path.join(R, base))):
        p = os.path.join(R, base, d)
        if not os.path.isdir(p): continue
        num = d[:2]
        titulo = NOMES.get(num, d[3:].replace("-", " ").capitalize()) if tipo == "especifico" else ("Língua Portuguesa" if "portug" in d else "Língua Inglesa")
        arqs = []
        for f in sorted(glob.glob(os.path.join(p, "*.md"))):
            nome = os.path.basename(f)
            if nome.lower().startswith("readme"): continue
            tt, itens, st = meta(f)
            rel = f"{base}/{d}/{nome}"
            os.makedirs(os.path.join(S, base, d), exist_ok=True)
            shutil.copyfile(f, os.path.join(S, rel))
            arqs.append({"id": f"{tipo[0]}{num}-{nome[:-3]}", "titulo": tt, "arquivo": rel, "itens_edital": itens, "status": st})
        grupos.append({"id": f"{tipo[0]}{num}", "tipo": tipo, "numero": num, "pasta": d, "titulo": titulo, "assuntos": arqs})
json.dump({"gerado_de": "conteudo/ e conteudo-gerais/", "grupos": grupos}, open(os.path.join(S, "assets/data/conteudo.json"), "w", encoding="utf-8"), ensure_ascii=False, indent=1)
qs = []
for f in sorted(glob.glob(os.path.join(R, "banco-questoes/autorais/por-assunto/*.json"))):
    for q in json.load(open(f, encoding="utf-8"))["questoes"]:
        qs.append({k: q[k] for k in ("id","tipo","rotulo","modulo","assunto","item_edital","dificuldade","habilidade","enunciado","alternativas","gabarito","resolucao","analise_alternativas","ponto_atencao","revisao_rapida","status_validacao")})
json.dump({"total": len(qs), "questoes": qs}, open(os.path.join(S, "assets/data/questoes.json"), "w", encoding="utf-8"), ensure_ascii=False)
print("grupos", len(grupos), "assuntos", sum(len(g["assuntos"]) for g in grupos), "questoes", len(qs))

# ---- Índice de busca textual (site/assets/data/busca.json) ----
def _limpa(t):
    t = re.sub(r"```.*?```", lambda m: m.group(0).replace("```", " "), t, flags=re.S)
    t = re.sub(r"!?\[([^\]]*)\]\([^)]*\)", r"\1", t)
    t = re.sub(r"[`*_>|#]", " ", t)
    t = re.sub(r"^\s*[-:]{3,}.*$", " ", t, flags=re.M)
    return re.sub(r"\s+", " ", t).strip()
busca = []
for g in grupos:
    for a in g["assuntos"]:
        t = open(os.path.join(R, a["arquivo"]), encoding="utf-8").read()
        t = re.sub(r"\A---\n.*?\n---\n", "", t, flags=re.S)
        partes = re.split(r"^(#{2,3} .+)$", t, flags=re.M)
        sec, buf = "Introdução", partes[0]
        blocos = []
        for i in range(1, len(partes), 2):
            blocos.append((sec, buf)); sec, buf = partes[i].lstrip("# ").strip(), partes[i + 1]
        blocos.append((sec, buf))
        for s_, b_ in blocos:
            tx = _limpa(b_)
            if len(tx) < 20: continue
            busca.append({"k": "c", "id": a["id"], "t": a["titulo"], "s": _limpa(s_), "x": tx[:4000], "g": g["titulo"]})
for q in qs:
    alts = " ".join(q["alternativas"][k] for k in sorted(q["alternativas"]))
    busca.append({"k": "q", "id": q["id"], "t": q["id"] + " · " + q["assunto"], "s": "item " + str(q["item_edital"]), "x": _limpa(q["enunciado"] + " " + alts + " " + q.get("revisao_rapida", ""))[:3000], "g": q["modulo"]})
json.dump({"n": len(busca), "itens": busca}, open(os.path.join(S, "assets/data/busca.json"), "w", encoding="utf-8"), ensure_ascii=False, separators=(",", ":"))
print("busca", len(busca), "entradas")
