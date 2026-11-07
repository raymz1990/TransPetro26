# -*- coding: utf-8 -*-
"""T07 — Gera os simulados (dados) em banco-questoes/simulados/ a partir do banco de questões.
Seleção determinística. Nenhum peso oficial por assunto é presumido: a distribuição é pedagógica e documentada."""
import sys, os, json, glob, re
sys.path.insert(0, os.path.dirname(os.path.dirname(os.path.abspath(__file__))))
from qlib import R, MODS, DIF

# --- carrega o banco ---
Q = {}
for f in sorted(glob.glob(os.path.join(R, "banco-questoes/**/*.json"), recursive=True)):
    if "/simulados/" in f.replace("\\", "/"): continue
    for q in json.load(open(f, encoding="utf-8"))["questoes"]: Q[q["id"]] = q
NOMES_MOD = {1: "Arquitetura de dados", 2: "Gerenciamento de projetos e produtos", 3: "Processos e seu gerenciamento", 4: "Gestão e governança de TI",
             5: "Engenharia de software", 6: "Experiência do usuário (UX)", 7: "Análise de dados e informações", 8: "Lógica matemática", 9: "Segurança da informação"}
def mod_n(q): return int(q["modulo"][:2]) if q["modulo"][0].isdigit() else 0
ESP = {m: [q for q in Q.values() if mod_n(q) == m] for m in range(1, 10)}
PT = [q for q in Q.values() if q["modulo"] == "gerais-lingua-portuguesa"]
EN = [q for q in Q.values() if q["modulo"] == "gerais-lingua-inglesa"]

# --- distribuição pedagógica (NÃO oficial) ---
# Proporcional ao número de itens do Anexo IV por módulo (23, 7, 1, 6, 5, 11, 11, 9, 21 de 94), com piso de 3 por módulo e ajuste manual para somar 50.
DIST = {1: 10, 2: 4, 3: 3, 4: 3, 5: 3, 6: 7, 7: 6, 8: 4, 9: 10}      # SIM-ESP-01 (só questões validadas; M1 limitado a 10 validadas)
DIST2 = {1: 11, 2: 4, 3: 3, 4: 3, 5: 3, 6: 6, 7: 6, 8: 4, 9: 10}     # SIM-ESP-02
assert sum(DIST.values()) == 50 and sum(DIST2.values()) == 50
RITMO = 270 / 70                                                      # 3,857 min/questão: mesma razão tempo/questões da prova (4h30 para 70)

def diverso(cands, n, usados_itens, quota_dif=None):
    """Escolhe n questões priorizando itens ainda não usados e mistura de dificuldade."""
    esc, itens = [], set(usados_itens)
    ordem = {"facil": 0, "media": 1, "dificil": 2}
    pool = sorted(cands, key=lambda q: (q["id"]))
    alvo = quota_dif or {"facil": 0.3, "media": 0.5, "dificil": 0.2}
    cont = {"facil": 0, "media": 0, "dificil": 0}
    while pool and len(esc) < n:
        def pont(q):
            novo = 0 if q["item_edital"] in itens else 1
            falta = cont[q["dificuldade"]] - alvo[q["dificuldade"]] * (len(esc) + 1)
            return (novo, falta, ordem[q["dificuldade"]], q["id"])
        q = min(pool, key=pont)
        pool.remove(q); esc.append(q); itens.add(q["item_edital"]); cont[q["dificuldade"]] += 1
    return esc

def monta(sid, titulo, tipo, qs_ord, status, obs, criterio, dist=None, extra=None):
    comp = {"por_tipo": {}, "por_status": {}, "por_dificuldade": {}, "por_gabarito": {}}
    for q in qs_ord:
        for k, v in (("por_tipo", q["tipo"]), ("por_status", q["status_validacao"]), ("por_dificuldade", q["dificuldade"]), ("por_gabarito", q["gabarito"])):
            comp[k][v] = comp[k].get(v, 0) + 1
    d = {"id": sid, "titulo": titulo, "tipo": tipo, "tempo_minutos": round(len(qs_ord) * RITMO), "total": len(qs_ord),
         "criterio_tempo": "proporcional à prova real (270 min para 70 questões): %.2f min por questão" % RITMO,
         "status": status, "observacoes": obs, "criterio_distribuicao": criterio,
         "distribuicao_modulos": dist or {}, "composicao": comp,
         "questoes": [{"ordem": i + 1, "id": q["id"]} for i, q in enumerate(qs_ord)]}
    if extra: d.update(extra)
    return d

SIMS = []
usadas = set()
# ---------- SIM-ESP-01: 50 específicas, somente validadas ----------
esp1 = []
for m in range(1, 10):
    cand = [q for q in ESP[m] if q["status_validacao"] == "validada"]
    esp1 += diverso(cand, DIST[m], set())
usadas |= {q["id"] for q in esp1}
SIMS.append(("SIM-ESP-01", esp1))
# ---------- SIM-ESP-02: 50 específicas, mistura OFI + autorais, disjunto do ESP-01 ----------
esp2 = []
for m in range(1, 10):
    n = DIST2[m]
    ofi = [q for q in ESP[m] if q["tipo"] == "oficial" and q["id"] not in usadas]
    aut = [q for q in ESP[m] if q["tipo"] == "autoral" and q["id"] not in usadas]
    n_ofi = min(len(ofi), (n + 1) // 2)
    esc = diverso(ofi, n_ofi, set())
    esc += diverso(aut, n - len(esc), {q["item_edital"] for q in esc})
    esp2 += esc
# ---------- Gerais ----------
def gerais():
    # 10 de Português (itens distintos sempre que possível) e 10 de Inglês
    por_item = {}
    for q in PT: por_item.setdefault(q["item_edital"], []).append(q)
    pt = []
    for it in ["LP-01", "LP-03", "LP-04", "LP-05", "LP-07", "LP-08", "LP-09", "LP-10", "LP-11", "LP-12"]:
        pt.append(por_item[it][0])
    en = sorted(EN, key=lambda q: q["id"])
    en = [q for q in en if q["item_edital"] == "LI-01"][:5] + [q for q in en if q["item_edital"] == "LI-02"][:5]
    return pt, en
pt, en = gerais()

def ordem_prova(pt_, en_, esp_): return pt_ + en_ + esp_      # 1–10 Português, 11–20 Inglês, 21–70 Específicos (como nas provas catalogadas)

todos = {}
SIMDEF = []
SIMDEF.append(monta("SIM-ESP-01", "Simulado específico 01 — 50 questões (somente questões validadas)", "especifico", esp1, "questoes_validadas",
    "Composto apenas por questões autorais com status `validada` (aprovadas pelo usuário). Sem revisão por terceiros.",
    "Distribuição PEDAGÓGICA definida pelo projeto: proporcional ao número de itens do Anexo IV por módulo (M1 23, M2 7, M3 1, M4 6, M5 5, M6 11, M7 11, M8 9, M9 21 de 94), com piso de 3 por módulo; M1 limitado a 10 pelo total de questões validadas. NÃO reproduz nem prevê a distribuição da prova real, que o edital não informa.",
    {"M%02d" % m: DIST[m] for m in DIST}))
SIMDEF.append(monta("SIM-ESP-02", "Simulado específico 02 — 50 questões (oficiais e autorais)", "especifico", esp2, "rascunho",
    "Disjunto do SIM-ESP-01. Contém questões oficiais (Transpetro 2023) e autorais da expansão T05, ainda `em_revisao` (aguardam validação do usuário).",
    "Mesma distribuição pedagógica do SIM-ESP-01, com M1 = 11 (há mais questões disponíveis). Até metade das questões de cada módulo é oficial, quando há. Não é distribuição oficial da prova.",
    {"M%02d" % m: DIST2[m] for m in DIST2}))
SIMDEF.append(monta("SIM-COM-01", "Simulado completo 01 — 70 questões", "completo", ordem_prova(pt, en, esp1), "rascunho",
    "Estrutura da prova real: 10 Língua Portuguesa + 10 Língua Inglesa + 50 Conhecimentos Específicos (mesmas 50 do SIM-ESP-01). As 20 questões de Gerais são autorais `em_revisao`. O banco de Inglês tem 11 questões, então não há um segundo simulado completo com Inglês inédito.",
    "Específicos: ver SIM-ESP-01. Gerais: 1 questão por item de Português (exceto LP-02, LP-06 e uma de LP-01) e 5 + 5 de Inglês (compreensão e itens gramaticais).",
    {"Português": 10, "Inglês": 10, "Específicos": 50},
    {"corte_edital": "Mínimo de 50% na Fase 1 (25 de 50) e 50% na Fase 2 (10 de 20); zero em Português ou Inglês elimina (edital item 7.1.4.3).",
     "blocos": [{"nome": "Língua Portuguesa", "de": 1, "ate": 10}, {"nome": "Língua Inglesa", "de": 11, "ate": 20}, {"nome": "Conhecimentos Específicos", "de": 21, "ate": 70}]}))
SIMDEF.append(monta("SIM-GER-01", "Simulado de Conhecimentos Gerais 01 — 20 questões", "gerais", pt + en, "rascunho",
    "10 de Português e 10 de Inglês (as mesmas do SIM-COM-01). Todas autorais `em_revisao`.",
    "1 questão por item de Português, exceto LP-02 e LP-06; Inglês: 5 de compreensão e 5 de gramática.", {"Português": 10, "Inglês": 10},
    {"corte_edital": "Mínimo de 10 de 20 (50%) e pelo menos 1 acerto em cada matéria."}))

# ---------- simulados por módulo ----------
for m in range(1, 10):
    cand = ESP[m]
    sel = diverso(cand, min(15, len(cand)), set())
    # ordem por item do edital
    def chave(q):
        return [int(x) for x in re.findall(r"\d+", q["item_edital"])] + [0, 0]
    sel.sort(key=chave)
    SIMDEF.append(monta("SIM-M%02d" % m, "Simulado do módulo %d — %s" % (m, NOMES_MOD[m]), "modulo", sel, "rascunho",
        "Mistura de questões oficiais e autorais do módulo; algumas ainda `em_revisao`.",
        "Até 15 questões por módulo, priorizando itens ainda não usados e mistura de dificuldade 30/50/20% (critério pedagógico).", {"M%02d" % m: len(sel)}))

# ---------- diagnóstico ----------
diag = []
val = lambda m: [q for q in ESP[m] if q["status_validacao"] == "validada" and q["dificuldade"] != "dificil"]
for m in range(1, 10):
    diag += diverso(val(m), 2, set())
for m in (1, 9):
    diag += diverso([q for q in val(m) if q["id"] not in {x["id"] for x in diag}], 1, {x["item_edital"] for x in diag if mod_n(x) == m})
diag.sort(key=lambda q: (mod_n(q), q["id"]))
SIMDEF.append(monta("SIM-DIAG-01", "Diagnóstico inicial — 20 questões", "diagnostico", diag, "questoes_validadas",
    "Somente questões validadas, fáceis ou médias, para mapear lacunas por módulo antes de iniciar a rotina de estudos.",
    "2 questões por módulo e uma a mais em M1 e M9 (módulos com mais itens). Não gera nota oficial; serve para direcionar a revisão.", {}))

# ---------- grava ----------
out = os.path.join(R, "banco-questoes/simulados")
for f in glob.glob(os.path.join(out, "*.json")) + glob.glob(os.path.join(out, "*-gabarito-comentado.md")): os.remove(f)
indice = []
for d in SIMDEF:
    ids = [x["id"] for x in d["questoes"]]
    assert len(ids) == len(set(ids)) and all(i in Q for i in ids), d["id"]
    json.dump(d, open(os.path.join(out, d["id"].lower() + ".json"), "w", encoding="utf-8"), ensure_ascii=False, indent=1)
    md = ["# %s\n" % d["titulo"], "**Status:** %s · **Tempo:** %d min · **Questões:** %d\n" % (d["status"], d["tempo_minutos"], d["total"]),
          "**Critério de distribuição:** %s\n" % d["criterio_distribuicao"], "**Observações:** %s\n" % d["observacoes"],
          "Composição: tipo %s · status %s · dificuldade %s\n" % (d["composicao"]["por_tipo"], d["composicao"]["por_status"], d["composicao"]["por_dificuldade"])]
    for x in d["questoes"]:
        q = Q[x["id"]]
        md.append("## %d. %s — %s\n" % (x["ordem"], q["id"], q["assunto"]))
        md.append("*%s* · item %s · %s · gabarito **%s**\n" % (q["rotulo"], q["item_edital"], DIF[q["dificuldade"]], q["gabarito"]))
        md.append(q["resolucao"] + "\n")
        md.append("\n".join("- **%s)** %s" % (l, t) for l, t in q["analise_alternativas"].items()) + "\n")
        md.append("**Revisão rápida:** %s\n" % q["revisao_rapida"])
    open(os.path.join(out, d["id"].lower() + "-gabarito-comentado.md"), "w", encoding="utf-8").write("\n".join(md))
    indice.append({k: d[k] for k in ("id", "titulo", "tipo", "tempo_minutos", "total", "status")})
json.dump({"simulados": indice}, open(os.path.join(out, "indice.json"), "w", encoding="utf-8"), ensure_ascii=False, indent=1)
for d in SIMDEF:
    print(d["id"], d["total"], d["tempo_minutos"], d["status"], d["composicao"]["por_gabarito"], d["composicao"]["por_status"])
