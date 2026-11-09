# -*- coding: utf-8 -*-
"""T14: gera as fontes do NotebookLM em notebooklm/ a partir de conteudo/, conteudo-gerais/ e banco-questoes/.
Uso: python tools/build_notebooklm.py   (idempotente; sobrescreve os arquivos gerados)"""
import os, re, glob, json, datetime
R = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
N = os.path.join(R, "notebooklm")
HOJE = datetime.date.today().isoformat()
MODS = [  # (pasta, codigo, nome, arquivo-base)
 ("conteudo/01-arquitetura-dados", "M01", "Arquitetura de Dados", "M01_Arquitetura_Dados"),
 ("conteudo/02-projetos-produtos", "M02", "Gerenciamento de Projetos e Produtos", "M02_Projetos_Produtos"),
 ("conteudo/03-processos-gerenciamento", "M03", "Processos, Grupos de Processos e Áreas de Conhecimento", "M03_Processos_Gerenciamento"),
 ("conteudo/04-governanca-ti", "M04", "Gestão e Governança em TI", "M04_Governanca_TI"),
 ("conteudo/05-engenharia-software", "M05", "Engenharia de Software", "M05_Engenharia_Software"),
 ("conteudo/06-experiencia-usuario", "M06", "Experiência do Usuário (UX)", "M06_Experiencia_Usuario"),
 ("conteudo/07-analise-dados", "M07", "Análise de Dados e Informações", "M07_Analise_Dados"),
 ("conteudo/08-logica-matematica", "M08", "Lógica Matemática", "M08_Logica_Matematica"),
 ("conteudo/09-seguranca-informacao", "M09", "Segurança da Informação", "M09_Seguranca_Informacao"),
 ("conteudo-gerais/01-lingua-portuguesa", "GP", "Conhecimentos Gerais — Língua Portuguesa", "GP_Lingua_Portuguesa"),
 ("conteudo-gerais/02-lingua-inglesa", "GI", "Conhecimentos Gerais — Língua Inglesa", "GI_Lingua_Inglesa"),
]
QMOD = {"M01": "01-arquitetura-dados", "M02": "02-projetos-produtos", "M03": "03-processos-gerenciamento", "M04": "04-governanca-ti",
        "M05": "05-engenharia-software", "M06": "06-experiencia-usuario", "M07": "07-analise-dados", "M08": "08-logica-matematica",
        "M09": "09-seguranca-informacao", "GP": "gerais-lingua-portuguesa", "GI": "gerais-lingua-inglesa"}
EXCLUIDOS = {"08-raciocinio-logico-complementar.md"}  # RASCUNHO, fora do edital
CAB = ("- Concurso: Processo Seletivo Público TRANSPETRO 2026.4 (Edital nº 04/2026)\n"
       "- Ênfase: 5 — Análise de Sistemas: Processos de Negócios\n- Banca: Fundação Cesgranrio\n")


def w(path, txt):
    os.makedirs(os.path.dirname(path), exist_ok=True)
    open(path, "w", encoding="utf-8", newline="\n").write(txt)


def le(p):
    return open(p, encoding="utf-8").read().replace("\r\n", "\n")


def sem_fm(t):
    m = re.match(r"---\n(.*?)\n---\n", t, re.S)
    meta = {}
    if m:
        for l in m.group(1).splitlines():
            k = re.match(r"(\w+):\s*(.*)", l)
            if k:
                meta[k.group(1)] = k.group(2).strip().strip('"')
        t = t[m.end():]
    return meta, t.lstrip()


def secao(t, padrao):
    m = re.search(r"^##\s+\d+\.\s+" + padrao + r".*?\n(.*?)(?=^##\s|\Z)", t, re.S | re.M | re.I)
    return m.group(1).strip() if m else None


def rebaixa(t):
    """Desce um nivel de titulo (fora de blocos de codigo)."""
    out, cod = [], False
    for l in t.split("\n"):
        if l.startswith("```"):
            cod = not cod
        out.append("#" + l if (not cod and re.match(r"#{1,5} ", l)) else l)
    return "\n".join(out)


def limpa(dirp):
    for f in glob.glob(os.path.join(dirp, "*.md")):
        os.remove(f)


for d in ("fontes", "fontes/questoes", "resumos", "mapas-mentais", "prompts"):
    limpa(os.path.join(N, d))

indice, nq = [], 0
for pasta, cod, nome, base in MODS:
    arqs = [a for a in sorted(glob.glob(os.path.join(R, pasta, "*.md"))) if os.path.basename(a) not in EXCLUIDOS]
    status, partes, sinteses, estrut = set(), [], [], []
    for a in arqs:
        meta, corpo = sem_fm(le(a))
        status.add(meta.get("status", "?"))
        mt = re.match(r"#\s+(.+)", corpo)
        titulo = mt.group(1) if mt else os.path.basename(a)
        partes.append("\n---\n\n" + rebaixa(corpo) + "\n")
        s = secao(corpo, r"S[ií]ntese")
        if s:
            sinteses.append("## " + titulo + "\n\n" + s)
        heads = re.findall(r"^##\s+(?:\d+\.\s+)?(.+)$", corpo, re.M)
        estrut.append((titulo, [h for h in heads if not re.match(r"(Refer|Pontos para a futura|S[ií]ntese|Atenção)", h)]))
    texto = (f"# Módulo {cod} — {nome}\n\n## Identificação\n{CAB}- Módulo: {cod} — {nome}\n"
             f"- Gerado em: {HOJE}, por `tools/build_notebooklm.py`, a partir de `{pasta}/` (fonte de verdade; não editar este arquivo)\n"
             f"- Situação do conteúdo nos arquivos de origem: {', '.join(sorted(status))} (com ressalvas nos relatórios de produção em `docs/qualidade/`)\n\n"
             "## Como usar este documento\nÉ material de estudo do projeto, **não** é texto oficial do edital nem da banca. O escopo oficial é o Anexo IV do edital. "
             "Trechos marcados como complemento, aprofundamento ou estratégia **não** são exigência literal do edital. Referências indicadas como "
             "\"não verificadas\" ou \"de memória\" devem ser conferidas na fonte primária. Não afirme incidência de tema em prova sem evidência documental.\n\n"
             "## Conteúdo\n" + "".join(partes))
    w(os.path.join(N, "fontes", base + "_Completo.md"), texto)
    indice.append((cod, nome, base + "_Completo.md", len(arqs), len(texto.encode("utf-8")) // 1024))
    w(os.path.join(N, "resumos", base + "_Resumo.md"),
      f"# Resumo — Módulo {cod}: {nome}\n\n## Identificação\n{CAB}- Origem: seções \"Síntese\" dos arquivos de `{pasta}/` (extraídas automaticamente, sem reescrita)\n\n"
      "Este resumo complementa o documento completo do módulo; não o substitui.\n\n" + "\n\n".join(sinteses) + "\n")
    mm = ["mindmap", f"  root(({cod} {re.sub(r'[()]', '', nome)[:40]}))"]
    for t, hs in estrut:
        mm.append("    " + re.sub(r"[()\[\]{}\"`:]", "", t)[:60])
        for h in hs[:7]:
            mm.append("      " + re.sub(r"[()\[\]{}\"`:]", "", h)[:55])
    w(os.path.join(N, "mapas-mentais", base + "_Mapa.md"),
      f"# Mapa mental — Módulo {cod}: {nome}\n\nEstrutura (arquivos e seções) gerada a partir de `{pasta}/`. Organiza o conteúdo; não mapeia relações conceituais.\n\n```mermaid\n"
      + "\n".join(mm) + "\n```\n")

qs = []
for f in glob.glob(os.path.join(R, "banco-questoes/**/*.json"), recursive=True):
    if "simulados" in f.replace("\\", "/"):
        continue
    qs += json.load(open(f, encoding="utf-8"))["questoes"]


def orig(q):
    if q["tipo"] == "autoral":
        return "Questão autoral — estilo Cesgranrio (criada pelo projeto; não é questão aplicada pela banca)"
    fo = q["fonte_origem"]
    return f"{q['tipo'].capitalize()} — Fundação Cesgranrio, {fo['concurso']}, {fo['cargo']}, {fo['ano']}, {fo['prova']}, questão {fo['numero_original']} (gabarito: {fo['situacao_gabarito']})"


for pasta, cod, nome, base in MODS:
    lst = sorted([q for q in qs if q["modulo"] == QMOD[cod]], key=lambda q: q["id"])
    if not lst:
        continue
    nq += len(lst)
    cab = (f"## Identificação\n{CAB}- Módulo: {cod} — {nome}\n- Total: {len(lst)} questões; status `validada` ou `em_revisao` (indicado em cada questão)\n"
           f"- Gerado em {HOJE} por `tools/build_notebooklm.py` a partir de `banco-questoes/`\n\n")
    A = [f"# Questões — Módulo {cod}: {nome} (sem gabarito)\n\n" + cab]
    B = [f"# Gabarito comentado — Módulo {cod}: {nome}\n\n" + cab]
    for q in lst:
        alts = "\n".join(f"{l}) {t}" for l, t in q["alternativas"].items())
        A.append(f"### {q['id']} — item {q['item_edital']} — dificuldade {q['dificuldade']}\n*{orig(q)} · status: {q['status_validacao']}*\n\n{q['enunciado']}\n\n{alts}\n")
        an = "\n".join(f"- {l}) {t}" for l, t in q["analise_alternativas"].items())
        B.append(f"### {q['id']} — Gabarito: {q['gabarito']}\n*{orig(q)} · status: {q['status_validacao']}*\n\n{q['resolucao']}\n\n{an}\n")
    w(os.path.join(N, "fontes/questoes", base + "_Questoes_sem_gabarito.md"), "\n".join(A))
    w(os.path.join(N, "fontes/questoes", base + "_Gabarito_comentado.md"), "\n".join(B))

P = {
    "revisao.md": "Elabore uma revisão do assunto indicado com foco no concurso Transpetro 2026.4 — Ênfase 5, banca Fundação Cesgranrio.\n\nPriorize conceitos fundamentais, classificações, diferenças conceituais, aplicações práticas, exceções e relações entre assuntos.\nUse somente as fontes deste notebook e aponte lacunas. Não afirme alta incidência na prova sem evidência documental.\nDiferencie o que é item do edital, aprofundamento técnico e estratégia de prova.",
    "perguntas.md": "Com base apenas nas fontes do notebook, faça-me 10 perguntas de recuperação ativa sobre o assunto indicado, uma de cada vez.\nEspere minha resposta, corrija com base nas fontes e indique o documento e a seção em que a resposta está.\nSe as fontes não bastarem, diga explicitamente.",
    "simulado.md": "Elabore 10 questões de múltipla escolha, com cinco alternativas (A a E), sobre o assunto indicado, usando apenas as fontes do notebook.\nApresente primeiro todas as questões, sem gabarito; depois, em seção separada, o gabarito, a justificativa da correta e o erro de cada incorreta.\nIdentifique que as questões foram geradas pelo NotebookLM e que NÃO são questões da Cesgranrio.\nPara treino com as questões do projeto, use os documentos *_Questoes_sem_gabarito e abra os *_Gabarito_comentado só depois.",
    "mapa-mental.md": "Crie um mapa mental do assunto indicado: conceito central, categorias, subcategorias, dependências e diferenças entre conceitos próximos.\nUse somente as fontes do notebook. Priorize hierarquia lógica e legibilidade.",
    "podcast.md": "Gere uma conversa de áudio sobre o assunto indicado: contexto no edital, conceitos, comparações entre conceitos parecidos, exemplos, armadilhas conceituais e recapitulação com perguntas de fixação.\nUse linguagem natural mas tecnicamente precisa, apenas com as fontes do notebook; deixe claro o limite de qualquer analogia.",
    "comparacao.md": "Identifique conceitos que podem ser confundidos dentro do assunto indicado. Para cada par: definição, semelhanças, diferenças, aplicação, exemplo e o erro conceitual a evitar.\nUtilize somente as fontes do notebook.",
}
for k, v in P.items():
    w(os.path.join(N, "prompts", k), f"# Prompt — {k[:-3]}\n\nCole no NotebookLM após adicionar as fontes de `notebooklm/fontes/`.\n\n```text\n{v}\n```\n")

L = ["# Índice das fontes para o NotebookLM\n",
     f"Gerado em {HOJE} por `python tools/build_notebooklm.py`. Concurso: TRANSPETRO 2026.4, Ênfase 5, Fundação Cesgranrio.\n",
     "| Cód. | Módulo | Arquivo | Arquivos de origem | Tamanho (KB) |", "|---|---|---|---|---|"]
for c, n, f, k, s in indice:
    L.append(f"| {c} | {n} | `fontes/{f}` | {k} | {s} |")
L += ["", "Questões: `fontes/questoes/` (um par *sem gabarito* e *gabarito comentado* por módulo). Resumos: `resumos/`. Mapas: `mapas-mentais/`. Prompts: `prompts/`.", "",
      "## Exclusões e limites",
      "- `conteudo/08-logica-matematica/08-raciocinio-logico-complementar.md`: **RASCUNHO**, fora do edital; não exportado.",
      "- Itens com referência \"não verificada\" ou \"de memória\" mantêm essa ressalva no texto; ver `docs/qualidade/relatorio-t13.md`.",
      f"- {nq} questões exportadas (oficiais e autorais); 194 estão `em_revisao` (não validadas pelo usuário).",
      "- Resumos e mapas são extraídos automaticamente (seções \"Síntese\" e títulos); não são reescritos.",
      "- Roteiros de podcast: 9 (M01–M09) em `roteiros-podcast/`, escritos à mão (não gerados por este script); não há roteiros de Português e Inglês. Use também `prompts/podcast.md`.",
      "- O NotebookLM aceita até 50 fontes por notebook: use um notebook por módulo (teoria + questões) ou por fase de estudo."]
w(os.path.join(N, "fontes", "00-indice-fontes.md"), "\n".join(L) + "\n")
w(os.path.join(N, "README.md"),
  "# NotebookLM — fontes do projeto\n\nArquivos **gerados**: edite `conteudo/` ou `banco-questoes/` e rode `python tools/build_notebooklm.py`.\n\n"
  "Sugestão: um notebook por módulo, com `fontes/Mxx_*_Completo.md` e, para treino, `fontes/questoes/Mxx_*_Questoes_sem_gabarito.md`, mantendo o gabarito comentado fora até terminar. Prompts em `prompts/`.\n\n"
  "`roteiros-podcast/`: roteiros de revisão por módulo, **escritos à mão** (o build não os apaga nem regenera; revise-os quando a teoria mudar).\n\n"
  "`TESTE-ENVIO.md`: procedimento do teste de envio ao NotebookLM (**não executado**).\n\n"
  "O NotebookLM é ferramenta complementar: não valida conteúdo nem gabarito. Ver `fontes/00-indice-fontes.md`.\n")
print("fontes", len(indice), "questoes", nq)
