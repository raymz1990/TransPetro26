# Questões autorais — m07-analise-dados (expansão T05) — gabaritos comentados (T05 — expansão)

## AUT-000110 — BI como suporte à tomada de decisão

*Questão autoral — estilo Cesgranrio.*

**Gabarito: A**

O BI **transforma dados em informação para apoiar decisões** nos níveis estratégico, tático e operacional, entregando visão integrada, histórica e tempestiva. Ele **apoia**, e não **substitui** o decisor, e depende da **qualidade dos dados** e do alinhamento aos indicadores do negócio.

- **A)** Correta. Descreve o papel do BI: apoiar a decisão com informação integrada e confiável.
- **B)** Incorreta. Nenhuma ferramenta garante decisão ótima; o decisor continua responsável.
- **C)** Incorreta. BI depende de qualidade de dados; "lixo entra, lixo sai".
- **D)** Incorreta. BI atende aos três níveis decisórios.
- **E)** Incorreta. O DW é a base integrada que costuma alimentar os painéis; não é dispensável.

**Ponto de atenção:** "Garante", "elimina", "substitui", "apenas": palavras absolutas que sinalizam a alternativa errada.

**Revisão rápida:** BI apoia decisões em todos os níveis; não decide sozinho.

## AUT-000111 — OLAP: roll-up, slice e pivot

*Questão autoral — estilo Cesgranrio.*

**Gabarito: B**

**Roll-up** agrega, subindo na hierarquia (mês → ano). **Slice** fixa **um** valor de uma dimensão, resultando em uma fatia do cubo (Região = Sul). **Pivot (rotação)** muda a orientação das dimensões na visualização. **Drill-down** faz o caminho contrário do roll-up; **dice** seleciona subcubo com valores em **várias** dimensões; **drill-through** acessa os dados de detalhe da fonte.

- **A)** Incorreta. Drill-down detalha (ano → mês), o inverso do descrito em I; dice usa mais de uma dimensão.
- **B)** Correta. I é roll-up, II é slice e III é pivot.
- **C)** Incorreta. Dice exige restrição em duas ou mais dimensões; drill-through acessa a fonte, não troca eixos.
- **D)** Incorreta. Drill-down detalha, e I descreve uma agregação.
- **E)** Incorreta. Inverte II e III: fixar a região é slice, e girar eixos é pivot.

**Ponto de atenção:** Roll-up ↑ agrega; drill-down ↓ detalha; slice = 1 dimensão fixada; dice = várias; pivot = gira eixos; drill-through = vai ao detalhe na fonte.

**Revisão rápida:** Roll-up agrega, slice fixa, pivot gira.
