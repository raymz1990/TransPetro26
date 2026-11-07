# -*- coding: utf-8 -*-
"""T15: auditoria estatica do site (sintaxe JS, referencias, dados, contraste dos temas, acessibilidade basica).
Uso: python tools/auditar_site.py   (exit 1 se houver falha)"""
import os, re, json, glob, subprocess, sys
R = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
S = os.path.join(R, "site")
falhas, avisos, ok = [], [], []


def lê(p):
    return open(p, encoding="utf-8").read()


# 1. sintaxe JS
for f in sorted(glob.glob(os.path.join(S, "assets/js/*.js"))):
    r = subprocess.run(["node", "--check", f], capture_output=True, text=True)
    if r.returncode:
        falhas.append("JS com erro de sintaxe: " + os.path.basename(f) + " " + r.stderr[:200])
ok.append("sintaxe de %d arquivos JS" % len(glob.glob(os.path.join(S, "assets/js/*.js"))))

# 2. referencias do index.html
html = lê(os.path.join(S, "index.html"))
for ref in re.findall(r'(?:src|href)="([^"#][^"]*)"', html):
    if ref.startswith("http"):
        falhas.append("dependencia externa no index: " + ref)
    elif not os.path.exists(os.path.join(S, ref)):
        falhas.append("referencia inexistente no index: " + ref)
for k in ('lang="pt-BR"', 'name="viewport"', "<title>"):
    if k not in html:
        falhas.append("index sem " + k)

# 3. sem URL externa nos JS/CSS (funcoes essenciais offline)
for f in glob.glob(os.path.join(S, "assets/**/*.js"), recursive=True) + glob.glob(os.path.join(S, "assets/css/*.css")):
    for u in re.findall(r"https?://[^\s\"')]+", lê(f)):
        if "w3.org" in u:
            continue
        falhas.append("URL externa em %s: %s" % (os.path.basename(f), u))

# 4. dados e caminhos
d = os.path.join(S, "assets/data")
conteudo = json.load(open(os.path.join(d, "conteudo.json"), encoding="utf-8"))
n = 0
def achata(o):
    if isinstance(o, dict):
        for k, v in o.items():
            if k in ("arquivo", "caminho", "path") and isinstance(v, str):
                yield v
            else:
                yield from achata(v)
    elif isinstance(o, list):
        for v in o:
            yield from achata(v)


for p in achata(conteudo["grupos"]):
    if p:
        n += 1
        if not any(os.path.exists(os.path.join(S, b, p)) for b in ("", "conteudo", "conteudo-gerais")):
            falhas.append("arquivo de conteudo inexistente: " + p)
ok.append("%d caminhos de conteudo conferidos" % n)
qs = json.load(open(os.path.join(d, "questoes.json"), encoding="utf-8"))["questoes"]
ids = {q["id"] for q in qs}
sims = json.load(open(os.path.join(d, "simulados.json"), encoding="utf-8"))
sl = sims if isinstance(sims, list) else sims.get("simulados", [])
for s in sl:
    for i in s.get("questoes", s.get("ids", [])):
        i = i if isinstance(i, str) else i.get("id")
        if i not in ids:
            falhas.append("simulado %s cita questao inexistente %s" % (s.get("id"), i))
ok.append("%d questoes, %d simulados" % (len(qs), len(sl)))
for q in qs:
    if sorted(q["alternativas"]) != list("ABCDE"):
        falhas.append("alternativas != A-E em " + q["id"])
fc = json.load(open(os.path.join(d, "flashcards.json"), encoding="utf-8"))
ok.append("flashcards: %d" % len(fc if isinstance(fc, list) else fc.get("cartoes", fc.get("flashcards", []))))

# 5. contraste dos temas (WCAG)
css = lê(os.path.join(S, "assets/css/themes.css"))


def tema(bloco):
    return dict(re.findall(r"--([\w-]+):\s*(#[0-9a-fA-F]{6})", bloco))


def lum(h):
    c = [int(h[i:i + 2], 16) / 255 for i in (1, 3, 5)]
    c = [x / 12.92 if x <= 0.03928 else ((x + 0.055) / 1.055) ** 2.4 for x in c]
    return 0.2126 * c[0] + 0.7152 * c[1] + 0.0722 * c[2]


def cr(a, b):
    la, lb = sorted((lum(a), lum(b)), reverse=True)
    return (la + 0.05) / (lb + 0.05)


escuro = tema(css.split(":root[data-theme")[0])
claro = {**escuro, **tema(css.split(":root[data-theme")[1])}
pares = [("text", "bg"), ("text", "surface"), ("text-2", "bg"), ("text-2", "surface"), ("text-3", "bg"), ("text-3", "surface"),
         ("amber", "bg"), ("amber", "surface"), ("petrol", "bg"), ("petrol", "surface"), ("ok", "surface"), ("err", "surface"),
         ("amber", "amber-bg"), ("petrol", "petrol-bg"), ("ok", "ok-bg"), ("err", "err-bg")]
for nome, t in (("escuro", escuro), ("claro", claro)):
    for a, b in pares:
        c = cr(t[a], t[b])
        if c < 4.5:
            (falhas if c < 3 else avisos).append("contraste %s: %s sobre %s = %.2f:1 (< 4,5:1)" % (nome, a, b, c))

# 6. acessibilidade basica no CSS/JS
allcss = "".join(lê(f) for f in glob.glob(os.path.join(S, "assets/css/*.css")))
if ":focus-visible" not in allcss:
    falhas.append("sem :focus-visible")
if "prefers-reduced-motion" not in allcss:
    avisos.append("sem prefers-reduced-motion")
if "skip" not in html.lower():
    falhas.append("sem link 'pular para o conteudo'")
alljs = "".join(lê(f) for f in glob.glob(os.path.join(S, "assets/js/*.js")))
for padrao, msg in ((r"<img(?![^>]*alt=)", "img sem alt"), (r"onclick=\"", "handler inline onclick")):
    if re.search(padrao, alljs):
        avisos.append(msg)

print("OK:", *ok, sep="\n  - ")
print("AVISOS (%d):" % len(avisos), *avisos, sep="\n  - ")
print("FALHAS (%d):" % len(falhas), *falhas, sep="\n  - ")
sys.exit(1 if falhas else 0)
