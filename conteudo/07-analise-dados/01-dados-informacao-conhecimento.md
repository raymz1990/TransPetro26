---
modulo: 07-analise-dados
arquivo: 01-dados-informacao-conhecimento
itens_edital:
  - "7 Análise de dados e informações:"
  - "7.1 Dado, informação, conhecimento e inteligência"
ids_matriz: ["E5-059", "E5-060"]
escopo: "A — conteúdo expresso no edital. O título do item 7 é tratado como introdução ao módulo."
tipo_conteudo: "teoria"
status: "VALIDADO"
ultima_atualizacao: "2026-10-31"
---

# Dado, Informação, Conhecimento e Inteligência

**Módulo:** M07 — Análise de dados e informações
**Textos oficiais (Anexo IV):** 7 "Análise de dados e informações:" (título); 7.1 "Dado, informação, conhecimento e inteligência".
**Escopo:** A.
**Status:** `VALIDADO` (aprovado pelo usuário em 2026-10-31, com ressalvas: interpretação dos itens 7.2, 7.3 e 7.7 a 7.9 a confirmar; fontes de memória listadas em `docs/qualidade/relatorio-producao-modulo-07.md`). A hierarquia de Ackoff foi **verificada** em página secundária (Wikipedia); as definições detalhadas e os autores de gestão do conhecimento são de memória.

**Objetivos de aprendizagem.** (1) Distinguir dado, informação, conhecimento e inteligência; (2) explicar a hierarquia DIKW; (3) classificar conhecimento tácito e explícito; (4) relacionar os conceitos a sistemas de informação e BI; (5) identificar cada nível em exemplos.

---

## 1. Introdução ao módulo

O módulo 7 trata de **transformar dados em decisões**: conceitos (7.1), *business intelligence* (7.2), fontes e tipos de dados (7.3 e 7.4), OLAP e *data warehouse* (7.5 a 7.7), relatórios, dashboards e planilhas (7.8 e 7.9), e *insights* e decisão (7.10 e 7.11). Os fundamentos de DW e modelagem dimensional já foram desenvolvidos no Módulo 1 (`01-arquitetura-dados/09`); os princípios visuais de dashboards e *storytelling*, no Módulo 6 (`05` e `06`). Aqui eles são complementados, sem repetição.

## 2. Dado, informação, conhecimento e inteligência (item 7.1)

| Nível | Definição (didática) | Exemplo |
|---|---|---|
| **Dado** | Registro **bruto**, sem contexto ou interpretação: fatos, números, símbolos | `38,2`; `P-101`; `12/03` |
| **Informação** | Dado **processado, contextualizado e com significado** para quem o recebe | "A temperatura da bomba P-101 foi 38,2 °C às 12h" |
| **Conhecimento** | Informação **interpretada e integrada** à experiência, a regras e ao contexto, permitindo **compreender e agir** | "Acima de 35 °C a bomba tende a falhar em duas semanas" |
| **Inteligência** | Conhecimento **aplicado** para **antecipar, decidir e agir estrategicamente**; capacidade de aprender e resolver problemas | Plano de manutenção preditiva e escolha de investimentos com base em padrões |

*Hierarquia DIKW* (dados–informação–conhecimento–sabedoria): atribuída a **Russell Ackoff** (apresentada em 1988 e publicada em 1989) e representada como pirâmide por outros autores — **verificado** em fonte secundária. A versão de Ackoff inclui também a camada de **compreensão** (*understanding*) antes da sabedoria, e a literatura debate as definições. A palavra **sabedoria** é a que mais aparece em livros; o edital usa **inteligência**, ligada à **inteligência de negócio**.

**Valor agregado:** a cada passo sobe o **contexto** e o **significado**, e diminui o **volume**. Mais dados não significam mais conhecimento.

## 3. Conhecimento tácito e explícito (Nonaka e Takeuchi, de memória)

| Tipo | Característica | Exemplo |
|---|---|---|
| **Tácito** | Pessoal, ligado à experiência, difícil de formalizar | Intuição do operador sobre ruídos da máquina |
| **Explícito** | Formalizado e transmissível | Manuais, procedimentos, bases de conhecimento |

Modelo SECI (socialização, externalização, combinação, internalização) descreve a conversão entre os tipos *(de memória)*.

## 4. Relações com sistemas de informação e BI

- **Sistemas transacionais** geram **dados**; **BI e relatórios** os transformam em **informação**; **análise** e experiência geram **conhecimento**; a **inteligência** orienta decisões (arquivos `02` e `08`).
- **Qualidade** do dado afeta todos os níveis: dado ruim produz informação enganosa ("lixo entra, lixo sai"; Módulo 1, `10`).
- **Metadados** são "dados sobre dados" e dão contexto ao dado (origem, significado, formato, responsável).
- **Gestão do conhecimento:** capturar, organizar, compartilhar e aplicar conhecimento (bases de conhecimento, comunidades de prática, lições aprendidas — relação com o Módulo 2).
- **Inteligência** também designa a **atividade** de coletar e analisar informação sobre o ambiente (inteligência competitiva, de mercado).

## 5. Tipos de sistemas de informação e decisão (visão geral, de memória)

| Sistema | Foco |
|---|---|
| **SPT/TPS** (processamento de transações) | Registrar operações do dia a dia |
| **SIG/MIS** (informações gerenciais) | Relatórios periódicos para gerentes |
| **SAD/DSS** (apoio à decisão) | Modelos e dados para decisões semiestruturadas |
| **SIE/ESS** (executivos) | Visão estratégica resumida |

Esses tipos reaparecem em `08-insights-e-tomada-de-decisao` (nível operacional, tático, estratégico).

## 6. Exemplo (didático)

Sensores registram valores (**dados**). Um painel apresenta "vibração média por equipamento nas últimas 24 h" (**informação**). O engenheiro, comparando com falhas passadas, conclui que certo padrão antecede falhas (**conhecimento**). A empresa passa a programar paradas preventivas e a priorizar investimentos por risco (**inteligência**).

## 7. Comparações conceituais

| A | B | Diferença |
|---|---|---|
| Dado | Informação | Fato bruto × dado com contexto e significado |
| Informação | Conhecimento | Dado interpretado × informação integrada à experiência para agir |
| Conhecimento | Inteligência | Saber × aplicar para antecipar e decidir |
| Tácito | Explícito | Pessoal e implícito × formalizado |
| Dado | Metadado | Valor × descrição do valor |

## 8. Atenção para a prova

*Inferência técnica e recomendação pedagógica; sem atribuir frequência à banca.*

- Identificar o **nível** pelo exemplo: valor isolado = dado; valor com contexto = informação; padrão/regra para agir = conhecimento; decisão estratégica orientada = inteligência.
- Cuidado com enunciados que invertem informação e conhecimento.
- Item 7.1 **não teve questão** identificada nas duas provas catalogadas (2018 e 2023). A Q54 de 2018 (tipo de sistema de informação para apoio à decisão) foi classificada como parcialmente aderente; duas provas não permitem inferir frequência.

## 9. Síntese

Dado (bruto) → informação (com contexto) → conhecimento (interpretado, aplicável) → inteligência (decisão e antecipação). DIKW (Ackoff). Conhecimento tácito × explícito. Qualidade e metadados.

## 10. Pontos para a futura produção de questões (registro)

Classificar exemplos nos níveis; distinguir dado e informação; relacionar a hierarquia a BI; identificar conhecimento tácito/explícito.

## 11. Referências

- Pirâmide DIKW / Ackoff — Wikipedia, "DIKW pyramid" — **verificada em 2026-10-31** (autoria, datas, camada de compreensão; definições debatidas, sem definição canônica).
- ACKOFF, R. (1989), NONAKA; TAKEUCHI (SECI), sistemas de informação (Laudon, Stair) — de memória; **não verificados diretamente**.
- Edital Transpetro nº 04/2026.4, Anexo IV, itens 7 e 7.1.
