# Módulo M07 — Análise de Dados e Informações

## Identificação
- Concurso: Processo Seletivo Público TRANSPETRO 2026.4 (Edital nº 04/2026)
- Ênfase: 5 — Análise de Sistemas: Processos de Negócios
- Banca: Fundação Cesgranrio
- Módulo: M07 — Análise de Dados e Informações
- Gerado em: 2026-11-09, por `tools/build_notebooklm.py`, a partir de `conteudo/07-analise-dados/` (fonte de verdade; não editar este arquivo)
- Situação do conteúdo nos arquivos de origem: VALIDADO (com ressalvas nos relatórios de produção em `docs/qualidade/`)

## Como usar este documento
É material de estudo do projeto, **não** é texto oficial do edital nem da banca. O escopo oficial é o Anexo IV do edital. Trechos marcados como complemento, aprofundamento ou estratégia **não** são exigência literal do edital. Referências indicadas como "não verificadas" ou "de memória" devem ser conferidas na fonte primária. Não afirme incidência de tema em prova sem evidência documental.

## Conteúdo

---

## Dado, Informação, Conhecimento e Inteligência

**Módulo:** M07 — Análise de dados e informações
**Textos oficiais (Anexo IV):** 7 "Análise de dados e informações:" (título); 7.1 "Dado, informação, conhecimento e inteligência".
**Escopo:** A.
**Status:** `VALIDADO` (aprovado pelo usuário em 2026-10-31, com ressalvas: interpretação dos itens 7.2, 7.3 e 7.7 a 7.9 a confirmar; fontes de memória listadas em `docs/qualidade/relatorio-producao-modulo-07.md`). A hierarquia de Ackoff foi **verificada** em página secundária (Wikipedia); as definições detalhadas e os autores de gestão do conhecimento são de memória.

**Objetivos de aprendizagem.** (1) Distinguir dado, informação, conhecimento e inteligência; (2) explicar a hierarquia DIKW; (3) classificar conhecimento tácito e explícito; (4) relacionar os conceitos a sistemas de informação e BI; (5) identificar cada nível em exemplos.

---

### 1. Introdução ao módulo

O módulo 7 trata de **transformar dados em decisões**: conceitos (7.1), *business intelligence* (7.2), fontes e tipos de dados (7.3 e 7.4), OLAP e *data warehouse* (7.5 a 7.7), relatórios, dashboards e planilhas (7.8 e 7.9), e *insights* e decisão (7.10 e 7.11). Os fundamentos de DW e modelagem dimensional já foram desenvolvidos no Módulo 1 (`01-arquitetura-dados/09`); os princípios visuais de dashboards e *storytelling*, no Módulo 6 (`05` e `06`). Aqui eles são complementados, sem repetição.

### 2. Dado, informação, conhecimento e inteligência (item 7.1)

| Nível | Definição (didática) | Exemplo |
|---|---|---|
| **Dado** | Registro **bruto**, sem contexto ou interpretação: fatos, números, símbolos | `38,2`; `P-101`; `12/03` |
| **Informação** | Dado **processado, contextualizado e com significado** para quem o recebe | "A temperatura da bomba P-101 foi 38,2 °C às 12h" |
| **Conhecimento** | Informação **interpretada e integrada** à experiência, a regras e ao contexto, permitindo **compreender e agir** | "Acima de 35 °C a bomba tende a falhar em duas semanas" |
| **Inteligência** | Conhecimento **aplicado** para **antecipar, decidir e agir estrategicamente**; capacidade de aprender e resolver problemas | Plano de manutenção preditiva e escolha de investimentos com base em padrões |

*Hierarquia DIKW* (dados–informação–conhecimento–sabedoria): atribuída a **Russell Ackoff** (apresentada em 1988 e publicada em 1989) e representada como pirâmide por outros autores — **verificado** em fonte secundária. A versão de Ackoff inclui também a camada de **compreensão** (*understanding*) antes da sabedoria, e a literatura debate as definições. A palavra **sabedoria** é a que mais aparece em livros; o edital usa **inteligência**, ligada à **inteligência de negócio**.

**Valor agregado:** a cada passo sobe o **contexto** e o **significado**, e diminui o **volume**. Mais dados não significam mais conhecimento.

### 3. Conhecimento tácito e explícito (Nonaka e Takeuchi, de memória)

| Tipo | Característica | Exemplo |
|---|---|---|
| **Tácito** | Pessoal, ligado à experiência, difícil de formalizar | Intuição do operador sobre ruídos da máquina |
| **Explícito** | Formalizado e transmissível | Manuais, procedimentos, bases de conhecimento |

Modelo SECI (socialização, externalização, combinação, internalização) descreve a conversão entre os tipos *(de memória)*.

### 4. Relações com sistemas de informação e BI

- **Sistemas transacionais** geram **dados**; **BI e relatórios** os transformam em **informação**; **análise** e experiência geram **conhecimento**; a **inteligência** orienta decisões (arquivos `02` e `08`).
- **Qualidade** do dado afeta todos os níveis: dado ruim produz informação enganosa ("lixo entra, lixo sai"; Módulo 1, `10`).
- **Metadados** são "dados sobre dados" e dão contexto ao dado (origem, significado, formato, responsável).
- **Gestão do conhecimento:** capturar, organizar, compartilhar e aplicar conhecimento (bases de conhecimento, comunidades de prática, lições aprendidas — relação com o Módulo 2).
- **Inteligência** também designa a **atividade** de coletar e analisar informação sobre o ambiente (inteligência competitiva, de mercado).

### 5. Tipos de sistemas de informação e decisão (visão geral, de memória)

| Sistema | Foco |
|---|---|
| **SPT/TPS** (processamento de transações) | Registrar operações do dia a dia |
| **SIG/MIS** (informações gerenciais) | Relatórios periódicos para gerentes |
| **SAD/DSS** (apoio à decisão) | Modelos e dados para decisões semiestruturadas |
| **SIE/ESS** (executivos) | Visão estratégica resumida |

Esses tipos reaparecem em `08-insights-e-tomada-de-decisao` (nível operacional, tático, estratégico).

### 6. Exemplo (didático)

Sensores registram valores (**dados**). Um painel apresenta "vibração média por equipamento nas últimas 24 h" (**informação**). O engenheiro, comparando com falhas passadas, conclui que certo padrão antecede falhas (**conhecimento**). A empresa passa a programar paradas preventivas e a priorizar investimentos por risco (**inteligência**).

### 7. Comparações conceituais

| A | B | Diferença |
|---|---|---|
| Dado | Informação | Fato bruto × dado com contexto e significado |
| Informação | Conhecimento | Dado interpretado × informação integrada à experiência para agir |
| Conhecimento | Inteligência | Saber × aplicar para antecipar e decidir |
| Tácito | Explícito | Pessoal e implícito × formalizado |
| Dado | Metadado | Valor × descrição do valor |

### 8. Atenção para a prova

*Inferência técnica e recomendação pedagógica; sem atribuir frequência à banca.*

- Identificar o **nível** pelo exemplo: valor isolado = dado; valor com contexto = informação; padrão/regra para agir = conhecimento; decisão estratégica orientada = inteligência.
- Cuidado com enunciados que invertem informação e conhecimento.
- Item 7.1 **não teve questão** identificada nas duas provas catalogadas (2018 e 2023). A Q54 de 2018 (tipo de sistema de informação para apoio à decisão) foi classificada como parcialmente aderente; duas provas não permitem inferir frequência.

### 9. Síntese

Dado (bruto) → informação (com contexto) → conhecimento (interpretado, aplicável) → inteligência (decisão e antecipação). DIKW (Ackoff). Conhecimento tácito × explícito. Qualidade e metadados.

### 10. Pontos para a futura produção de questões (registro)

Classificar exemplos nos níveis; distinguir dado e informação; relacionar a hierarquia a BI; identificar conhecimento tácito/explícito.

### 11. Referências

- Pirâmide DIKW / Ackoff — Wikipedia, "DIKW pyramid" — **verificada em 2026-10-31** (autoria, datas, camada de compreensão; definições debatidas, sem definição canônica).
- ACKOFF, R. (1989), NONAKA; TAKEUCHI (SECI), sistemas de informação (Laudon, Stair) — de memória; **não verificados diretamente**.
- Edital Transpetro nº 04/2026.4, Anexo IV, itens 7 e 7.1.


---

## Business Intelligence (BI): Conceitos, Fundamentos, Características, Técnicas e Métodos

**Módulo:** M07 — Análise de dados e informações
**Texto oficial (Anexo IV):** 7.2 "Conceitos, fundamentos, características, técnicas e métodos de business intelligence (BI)".
**Escopo:** A. Item amplo: o edital não lista as técnicas; este arquivo adota uma interpretação (arquitetura de BI, tipos de análise, mineração de dados, ETL, KPIs, autosserviço) **a confirmar**.
**Status:** `VALIDADO` (aprovado pelo usuário em 2026-10-31, com ressalvas: interpretação dos itens 7.2, 7.3 e 7.7 a 7.9 a confirmar; fontes de memória listadas em `docs/qualidade/relatorio-producao-modulo-07.md`). O termo e a data (1989, Dresner) foram **verificados** em fonte secundária; o restante é de memória.

**Objetivos de aprendizagem.** (1) Definir BI e situar sua origem; (2) descrever a arquitetura e os componentes; (3) distinguir tipos de análise; (4) relacionar BI, mineração de dados e analytics; (5) conhecer métodos de implantação e riscos.

---

### 1. Conceito e origem

**Business intelligence (BI)** é o conjunto de **processos, tecnologias, ferramentas e práticas** que **coletam, integram, armazenam, analisam e apresentam** dados de negócio para **apoiar decisões**. Em português, usa-se também "inteligência de negócios".

**Origem do termo:** segundo a Wikipédia, o termo aparece já em 1865 (Richard Millar Devens) e em 1958 (Hans Peter Luhn, da IBM); em **1989, Howard Dresner (depois analista da Gartner) propôs *business intelligence* como termo guarda-chuva** para métodos e conceitos de apoio à decisão baseados em fatos; o uso se generalizou no fim da década de 1990 — **verificado em fonte secundária**.

**Objetivos:** transformar dados em informação e conhecimento (arquivo `01`); dar **visão única e consistente** do negócio; reduzir o tempo entre o fato e a decisão; monitorar desempenho; descobrir padrões.

### 2. Arquitetura e componentes

```
Fontes de dados → Integração (ETL/ELT) → Armazenamento (DW, data marts, data lake)
   → Camada semântica/modelo → Análise (OLAP, consultas, mineração)
   → Apresentação (relatórios, dashboards, alertas) → Decisão
```

| Componente | Função | Onde aprofundar |
|---|---|---|
| **Fontes** | Sistemas transacionais, planilhas, arquivos, APIs, sensores, web | `03`, `04` |
| **ETL/ELT** | Extrair, transformar e carregar | Módulo 1, `08` |
| **Data warehouse / data mart / data lake** | Repositório analítico | Módulo 1 `09`; `05` |
| **Camada semântica** | Nomes de negócio, métricas e relacionamentos padronizados | `06` |
| **OLAP** | Consultas multidimensionais | `05` |
| **Mineração de dados e *analytics*** | Padrões e previsões | Seção 4 |
| **Relatórios e dashboards** | Apresentação | `07`; Módulo 6 `06` |
| **Metadados e governança** | Qualidade, catálogo, linhagem, acesso | Módulo 1 `10`; Módulo 4 |

### 3. Características de um ambiente de BI

Dados **integrados e consistentes** (uma versão da verdade); **históricos**; **orientados a assuntos**; **acesso por usuários de negócio** com pouca dependência de TI; **desempenho** em grandes volumes; **governança e segurança**; **atualização** em lote ou quase em tempo real; **escalabilidade**.

### 4. Tipos de análise (analytics)

| Tipo | Pergunta | Técnicas |
|---|---|---|
| **Descritiva** | O que aconteceu? | Relatórios, painéis, OLAP |
| **Diagnóstica** | Por que aconteceu? | Detalhamento (*drill-down*), correlação, segmentação |
| **Preditiva** | O que pode acontecer? | Regressão, classificação, séries temporais, aprendizado de máquina |
| **Prescritiva** | O que fazer? | Otimização, simulação, regras de decisão |

*(Classificação usual de mercado, de memória.)* BI tradicional concentra-se na análise **descritiva e diagnóstica**; os termos *analytics* e ciência de dados costumam enfatizar as preditiva e prescritiva, mas a fronteira é fluida.

### 5. Técnicas e métodos

- **Consulta e relatório:** SQL, relatórios paginados, consultas ad hoc.
- **OLAP:** análise multidimensional (arquivo `05`).
- **Painéis e indicadores (KPIs):** monitoramento (arquivo `07`; Módulo 6 `06`).
- **Mineração de dados (*data mining*):** descoberta de padrões em grandes bases. Tarefas usuais: **classificação** (supervisionada), **regressão**, **agrupamento/clusterização** (não supervisionada), **regras de associação** ("quem compra A compra B"), **detecção de anomalias**. Processos de referência: **KDD** e **CRISP-DM** (fases do CRISP-DM **verificadas** na Wikipedia em 2026-10-31, seis fases, sequência não estrita: entendimento do negócio, dos dados, preparação, modelagem, avaliação, implantação).
- **Mineração de texto e análise de dados não estruturados** (arquivo `04`).
- **Análise de dados em tempo real / *streaming*** (visão geral).
- **BI de autosserviço (*self-service BI*):** usuários de negócio criam suas análises com ferramentas simples; exige **governança** para evitar números divergentes ("planilhas paralelas").
- **BI corporativo × departamental;** **BI embarcado** (embutido em aplicações).
- **BI operacional, tático e estratégico** (arquivo `08`).

### 6. Métodos de implantação (visão geral)

1. Entender **objetivos e decisões** a apoiar; levantar requisitos com os usuários.
2. Identificar **fontes** e avaliar a **qualidade** dos dados (arquivo `03`).
3. Modelar (dimensional — Módulo 1 `09`; `06`) e construir o **ETL**.
4. Desenvolver relatórios e dashboards com os usuários, em ciclos incrementais (abordagem ágil; prototipação — Módulo 6).
5. Testar, treinar, implantar, **monitorar** o uso e evoluir.
6. **Governança:** responsáveis pelos dados, glossário, segurança (LGPD — Módulo 4).

**Fatores críticos de sucesso e riscos (de memória):** patrocínio executivo; foco em decisões reais; qualidade dos dados; participação dos usuários; escopo controlado; adoção; custo e desempenho; dependência de poucos especialistas.

### 7. BI × outros conceitos

| Conceito | Diferença em relação ao BI |
|---|---|
| **Banco de dados transacional** | Registra operações; BI analisa histórico |
| **Data warehouse** | Repositório que **suporta** o BI; BI é o conjunto de processos e ferramentas |
| **Mineração de dados** | Técnica de descoberta de padrões, componente do BI/*analytics* |
| **Ciência de dados** | Foco em modelos estatísticos e preditivos, programação e experimentação |
| **Big Data** | Volume, velocidade e variedade de dados; BI pode se apoiar nele (Módulo 1 `09`) |
| **Planilha** | Ferramenta individual e flexível; BI busca integração e governança (arquivo `07`) |

### 8. Exemplo (didático)

Distribuidora de combustíveis: ETL diário reúne vendas, estoques e logística em um DW; um modelo dimensional (tempo, produto, cliente, local) alimenta cubos OLAP; um painel mostra a margem por região; análise de agrupamento segmenta clientes; alertas avisam quando o estoque de uma base cai abaixo do mínimo.

### 9. Atenção para a prova

*Inferência técnica e recomendação pedagógica; sem atribuir frequência à banca.*

- BI apoia **decisão**, a partir de dados **integrados e históricos**.
- Distinguir **DW** (repositório), **OLAP** (consulta multidimensional), **mineração** (descoberta de padrões) e **dashboard** (apresentação).
- Mineração de dados: **agrupamento** é técnica **não supervisionada**; **classificação** é supervisionada. A Q21 da Prova 15 de 2018 cobrou agrupamento e foi classificada como **fora do edital 2026** pelo catálogo; trate mineração aqui como aprofundamento de 7.2 e não como item literal.
- Item 7.2 **não teve questão aderente** identificada em 2023; duas provas não permitem inferir frequência.

### 10. Síntese

BI = processos e tecnologias que transformam dados em apoio à decisão; arquitetura fontes → ETL → DW → OLAP/mineração → relatórios/dashboards; análise descritiva, diagnóstica, preditiva, prescritiva; autosserviço com governança.

### 11. Pontos para a futura produção de questões (registro)

Definição de BI; componentes e papéis; tipos de análise; mineração (supervisionada × não supervisionada); autosserviço e governança.

### 12. Referências

- Wikipedia, "Business intelligence" — **verificada em 2026-10-31** (origem do termo, Dresner 1989, usos anteriores). Glossário da Gartner não lido.
- Wikipedia, "Cross-industry standard process for data mining" — **verificada** (seis fases). KDD, classificação de *analytics* (Gartner e outros), literatura de BI (Turban; Kimball) — **de memória, não verificados**.
- Edital Transpetro nº 04/2026.4, Anexo IV, item 7.2. Prova Transpetro 2018, Prova 15, Q21 (gabarito de terceiros, não validado).


---

## Mapeamento de Fontes de Dados

**Módulo:** M07 — Análise de dados e informações
**Texto oficial (Anexo IV):** 7.3 "Mapeamento de fontes de dados".
**Escopo:** A. O edital não detalha o item; interpretação adotada (**a confirmar**): identificar, catalogar, avaliar e documentar as fontes que alimentarão a análise, incluindo mapeamento origem–destino, qualidade, linhagem e governança.
**Status:** `VALIDADO` (aprovado pelo usuário em 2026-10-31, com ressalvas: interpretação dos itens 7.2, 7.3 e 7.7 a 7.9 a confirmar; fontes de memória listadas em `docs/qualidade/relatorio-producao-modulo-07.md`). Conteúdo de memória; **não verificado online nesta etapa**.

**Objetivos de aprendizagem.** (1) Classificar fontes de dados; (2) executar um levantamento e inventário de fontes; (3) construir um mapeamento origem–destino; (4) avaliar qualidade e adequação; (5) documentar linhagem e metadados.

---

### 1. Introdução

Antes de analisar, é preciso saber **onde estão os dados**, **quem é o dono**, **em que formato**, **com que qualidade** e **como chegam** ao ambiente analítico. O **mapeamento de fontes de dados** é o levantamento e o registro estruturado dessas informações e das **regras de correspondência** entre origem e destino.

### 2. Tipos de fontes

| Categoria | Exemplos |
|---|---|
| **Sistemas transacionais internos** | ERP, CRM, sistemas de manutenção e de operação |
| **Bancos de dados** | Relacionais, NoSQL (Módulo 1) |
| **Arquivos** | Planilhas, CSV, XML, JSON, relatórios em PDF, logs |
| **Sistemas legados** | *Mainframes*, aplicações sem API |
| **Dados de dispositivos** | Sensores, IoT, SCADA, telemetria |
| **Dados externos** | Fornecedores, órgãos reguladores, dados abertos, mercado |
| **Web e redes sociais** | Páginas, APIs públicas, comentários |
| **Documentos e mídia** | Contratos, e-mails, imagens, áudio (arquivo `04`) |
| **APIs e serviços** | REST, mensageria, *streaming* |

Classificações adicionais: **primária** (gerada pela organização) × **secundária** (obtida de terceiros); **interna** × **externa**; **em lote** × **tempo real**.

### 3. Processo de mapeamento

1. **Levantar as necessidades de informação:** perguntas de negócio, indicadores e relatórios exigidos.
2. **Identificar fontes candidatas** e seus **responsáveis (donos/*data stewards*)**.
3. **Inventariar:** sistema, tabela/arquivo, campos, formato, volume, periodicidade de atualização, método de acesso, sensibilidade (dados pessoais), custo.
4. **Perfilar** os dados (*data profiling*): completude, unicidade, valores inválidos, formatos, distribuição (Módulo 1, `10`).
5. **Avaliar** adequação: qualidade, confiabilidade, atualidade, disponibilidade e aspectos legais.
6. **Definir a "fonte de verdade"** (sistema de registro) para cada dado, resolvendo duplicidades entre sistemas.
7. **Mapear origem → destino** (campo a campo) e as **regras de transformação**.
8. **Documentar** no catálogo e **monitorar** mudanças nas fontes.

### 4. Matriz de mapeamento origem–destino

| Campo de destino (DW) | Fonte | Campo/tabela de origem | Regra de transformação | Qualidade/observação |
|---|---|---|---|---|
| `dim_equipamento.codigo` | Sistema de manutenção | `EQUIP.COD` | Remover espaços; maiúsculas | Duplicidades a tratar |
| `fato_manutencao.custo` | ERP | `OS.VLR_TOTAL` | Converter moeda; somar itens | Valores nulos = 0? Confirmar |
| `dim_data.ano_mes` | Sistema de manutenção | `OS.DT_ABERT` | Derivar ano e mês | — |

*(Exemplo didático e fictício.)* O mapeamento orienta o ETL (Módulo 1, `08`).

### 5. Metadados, catálogo e linhagem

- **Metadados técnicos** (esquema, tipos, tamanhos), **de negócio** (definição, regra, responsável) e **operacionais** (carga, tempo, erros).
- **Catálogo de dados:** inventário pesquisável com glossário e responsáveis.
- **Linhagem (*lineage*):** rastreia a **origem** e as **transformações** de cada dado até o relatório, permitindo explicar números e avaliar impactos de mudanças.
- **Governança:** papéis (dono, *steward*), políticas de qualidade e acesso (Módulo 1 `10`; Módulo 4).

### 6. Desafios comuns

Dados duplicados e inconsistentes entre sistemas; **silos**; falta de documentação; definições conflitantes (ex.: "cliente ativo"); formatos heterogêneos; dados desatualizados; acesso restrito; planilhas paralelas; mudanças não comunicadas; **dados pessoais** que exigem base legal e proteção (LGPD — Módulo 4).

### 7. Acesso e integração

Padrões: carga **em lote** (extração agendada), **CDC** (captura de alterações), **APIs**, **mensageria** e **virtualização de dados** (consulta sem copiar) — de memória; ver Módulo 1, `08`. Critérios de escolha: volume, latência exigida, impacto no sistema de origem, segurança.

### 8. Exemplo (didático)

O gestor pede "custo de manutenção por unidade e mês". O mapeamento revela que o custo está no ERP, os equipamentos em outro sistema com códigos diferentes, e parte das ordens de serviço em planilhas. Decide-se: ERP como fonte de verdade para custos; criar tabela de correspondência de códigos; migrar as planilhas para o sistema; registrar regras e responsáveis.

### 9. Comparações conceituais

| A | B | Diferença |
|---|---|---|
| Fonte | Destino | Onde o dado nasce × onde será analisado |
| Perfilamento | Mapeamento | Conhecer o estado dos dados × definir correspondência e regras |
| Catálogo | Dicionário de dados | Inventário amplo e pesquisável × descrição dos campos de um sistema |
| Linhagem | Metadado | Trajetória e transformações × descrição |
| Fonte de verdade | Cópia | Sistema de registro × réplica analítica |

### 10. Atenção para a prova

*Inferência técnica e recomendação pedagógica; sem atribuir frequência à banca.*

- Item genérico: esperar enunciados sobre **tipos de fontes**, **qualidade**, **integração** e **papel do ETL**.
- Mapeamento ≠ extração: é o **planejamento** e a **documentação** (o ETL executa).
- Item 7.3 **não teve questão** identificada nas duas provas catalogadas.

### 11. Síntese

Identificar, inventariar, perfilar, avaliar, definir fonte de verdade, mapear origem–destino, documentar (metadados, catálogo, linhagem) e governar. Fontes internas/externas, estruturadas/não estruturadas.

### 12. Pontos para a futura produção de questões (registro)

Classificação de fontes; etapas do mapeamento; objetivo da linhagem; problemas de qualidade; diferença entre mapeamento e ETL.

### 13. Referências

- DAMA-DMBOK (gestão de dados), Kimball (ETL) — **de memória, não verificados**.
- Edital Transpetro nº 04/2026.4, Anexo IV, item 7.3.


---

## Dados Estruturados e Dados Não Estruturados

**Módulo:** M07 — Análise de dados e informações
**Texto oficial (Anexo IV):** 7.4 "Dados estruturados e dados não estruturados".
**Escopo:** A. Os dados **semiestruturados** não constam literalmente, mas são necessários para entender a distinção.
**Status:** `VALIDADO` (aprovado pelo usuário em 2026-10-31, com ressalvas: interpretação dos itens 7.2, 7.3 e 7.7 a 7.9 a confirmar; fontes de memória listadas em `docs/qualidade/relatorio-producao-modulo-07.md`). As três definições foram **verificadas** em página da AWS; o restante é de memória.

**Objetivos de aprendizagem.** (1) Definir os três tipos de dados; (2) reconhecer exemplos; (3) relacionar cada tipo ao armazenamento e à análise; (4) explicar desafios dos não estruturados; (5) distinguir formato de modelo.

---

### 1. Introdução

A forma como os dados estão **organizados** determina como são armazenados, consultados e analisados. Os dados costumam ser classificados em **estruturados**, **semiestruturados** e **não estruturados**. Estima-se que grande parte dos dados das organizações seja não estruturada (afirmação comum na literatura; **sem fonte verificada aqui**).

### 2. Definições

| Tipo | Definição | Fonte |
|---|---|---|
| **Estruturados** | Possuem **formato padronizado ou esquema predefinido** (linhas e colunas, tipos definidos) | Definição verificada (AWS) |
| **Semiestruturados** | **Não** seguem modelo relacional/tabular rígido, mas têm **marcadores ou etiquetas** que organizam elementos (JSON, XML, HTML, e-mail) | Verificada (AWS) |
| **Não estruturados** | **Sem modelo de dados definido** ou esquema predefinido (texto livre, imagens, áudio, vídeo, documentos) | Verificada (AWS) |

### 3. Comparação

| Aspecto | Estruturados | Semiestruturados | Não estruturados |
|---|---|---|---|
| **Esquema** | Fixo, definido antes (*schema-on-write*) | Flexível, autodescritivo | Inexistente / implícito (*schema-on-read*) |
| **Exemplos** | Tabelas de banco relacional, planilhas organizadas, CSV regular | JSON, XML, logs com campos, e-mails, YAML | Texto livre, PDFs, imagens, áudio, vídeo, posts em redes sociais |
| **Armazenamento** | SGBD relacional, DW | Bancos de documentos (NoSQL), arquivos | Sistemas de arquivos, *data lakes*, armazenamento de objetos |
| **Consulta** | SQL | Linguagens do formato (JSONPath, XPath), SQL estendido | Busca textual, indexação, processamento de linguagem natural, visão computacional |
| **Análise** | Direta (BI, OLAP) | Requer extração/achatamento | Requer **pré-processamento** para extrair estrutura |
| **Qualidade/validação** | Restrições do esquema | Validação por esquema (XSD, JSON Schema) | Difícil; depende de interpretação |

*Esquema na escrita × na leitura:* nos estruturados, o esquema é aplicado ao **gravar**; em *data lakes*, aplica-se ao **ler** (Módulo 1, `07` e `09`). Os tipos de bancos NoSQL estão no Módulo 1 (`07`).

### 4. Formato × modelo

Uma planilha em PDF contém números, mas **não está estruturada para análise** automática: o **conteúdo** é tabular, o **formato** não. Um arquivo CSV com colunas regulares é estruturado; um JSON com campos variáveis é semiestruturado. A classificação refere-se à **organização utilizável pela máquina**, não ao suporte (arquivo, banco).

### 5. Como analisar dados não estruturados

| Tipo de dado | Técnicas (visão geral, de memória) |
|---|---|
| **Texto** | Mineração de texto, tokenização, extração de entidades, análise de sentimento, classificação, modelos de linguagem |
| **Imagens/vídeo** | Visão computacional, classificação, detecção de objetos |
| **Áudio** | Transcrição automática, análise de fala |
| **Logs e sensores** | Análise de séries temporais, correlação de eventos |

Estratégia comum: **extrair atributos** e **metadados** do conteúdo para um formato estruturado (por exemplo, categoria, entidades, sentimento) e incorporá-los ao DW ou ao BI, mantendo o conteúdo original no *data lake*. Relações: Módulo 1 `09` (*data lakes*, Big Data); `02` (mineração).

### 6. Desafios e riscos

Volume e variedade; ausência de esquema; qualidade e ambiguidade (linguagem natural); custo de armazenamento e processamento; **privacidade** (documentos e e-mails podem conter dados pessoais — LGPD, Módulo 4); **segurança**; **governança** (catalogação, retenção); dificuldade de integração com dados estruturados.

### 7. Exemplo (didático)

Uma operadora tem: tabela de ordens de serviço (estruturado); eventos de equipamento em JSON (semiestruturado); fotos de inspeção e laudos em PDF (não estruturados). Para o BI, as ordens vão ao DW; os JSON são carregados com campos extraídos; dos laudos extraem-se tipo de falha e criticidade por processamento de texto, ligados à ordem de serviço por um identificador.

### 8. Comparações conceituais

| A | B | Diferença |
|---|---|---|
| Estruturado | Não estruturado | Esquema predefinido × sem modelo de dados definido |
| Semiestruturado | Estruturado | Etiquetas flexíveis × esquema rígido tabular |
| *Schema-on-write* | *Schema-on-read* | Esquema aplicado ao gravar × ao ler |
| Dado | Metadado | Conteúdo × descrição do conteúdo |
| Texto livre | Texto com campos | Sem estrutura × com campos reconhecíveis |

### 9. Atenção para a prova

*Inferência técnica e recomendação pedagógica; sem atribuir frequência à banca.*

- Classificar exemplos: tabela relacional = estruturado; JSON/XML = semiestruturado; imagens, áudio, texto livre = não estruturado.
- Não confundir **"não estruturado" com "sem valor"**: exige técnicas específicas.
- Item 7.4 **não teve questão** identificada nas duas provas catalogadas.

### 10. Síntese

Estruturado (esquema fixo, SQL), semiestruturado (etiquetas, JSON/XML), não estruturado (sem modelo; texto, mídia). Armazenamento e análise diferem; extrair estrutura para o BI; atenção a privacidade e governança.

### 11. Pontos para a futura produção de questões (registro)

Classificação de exemplos; relação entre tipo de dado e armazenamento; esquema na escrita × na leitura; técnicas de análise por tipo.

### 12. Referências

- AWS. *What is structured data?* — **verificada em 2026-10-31** (definições dos três tipos).
- Literatura de Big Data e mineração de texto — **de memória, não verificada**.
- Edital Transpetro nº 04/2026.4, Anexo IV, item 7.4.


---

## OLAP e Data Warehouse

**Módulo:** M07 — Análise de dados e informações
**Textos oficiais (Anexo IV):** 7.5 "Conceitos de OLAP e suas operações"; 7.6 "Conceitos de data warehouse".
**Escopo:** A. Base conceitual de DW, OLTP × OLAP, Inmon × Kimball e modelagem dimensional: ver Módulo 1, `09`. Aqui: características, arquitetura, OLAP e operações.
**Status:** `VALIDADO` (aprovado pelo usuário em 2026-10-31, com ressalvas: interpretação dos itens 7.2, 7.3 e 7.7 a 7.9 a confirmar; fontes de memória listadas em `docs/qualidade/relatorio-producao-modulo-07.md`). **Verificado** em fontes secundárias: roll-up, drill-down e slice/dice; MOLAP, ROLAP e HOLAP. **Revisão (2026-10-31):** as quatro características (orientado a assunto, integrado, variante no tempo, não volátil) aparecem na página "Data warehouse" da Wikipedia, mas a **atribuição a Inmon não foi confirmada**; `GROUP BY ROLLUP` e `CUBE` foram **confirmados** na documentação do PostgreSQL. **De memória:** "pivot" como operação (a fonte lista só três operações básicas), *drill-through*, *drill-across*, ODS, arquiteturas.

**Objetivos de aprendizagem.** (1) Enumerar as características de um DW; (2) descrever sua arquitetura; (3) definir OLAP e o cubo; (4) executar mentalmente as operações OLAP; (5) distinguir ROLAP, MOLAP e HOLAP.

---

### 1. Data warehouse (item 7.6)

#### 1.1 Conceito e características

**Data warehouse (DW):** repositório central de dados analíticos, integrados de várias fontes, para consulta e apoio à decisão. A definição clássica de **Inmon** (de memória) destaca quatro características:

| Característica | Significado | Exemplo |
|---|---|---|
| **Orientado a assunto** | Organizado por temas de negócio (vendas, manutenção), não por aplicação | Dados de "cliente" de vários sistemas reunidos |
| **Integrado** | Padroniza nomes, formatos, unidades e codificações | "M/F", "1/2" e "masc/fem" viram um só padrão |
| **Variante no tempo** (histórico) | Mantém série histórica, cada registro ligado a um tempo | Preço mensal durante anos |
| **Não volátil** | Dados carregados **não são alterados** pelo uso rotineiro; novas cargas acrescentam | Consultas apenas leem |

Outras características: **otimizado para leitura e consulta analítica**, volumes grandes, dados frequentemente **agregados**, carregado por **ETL/ELT** em janelas periódicas ou quase em tempo real (Módulo 1, `08`).

> O Módulo 1 (`09`, seção 2) traz a comparação **OLTP × OLAP/DW**, as abordagens **Inmon** e **Kimball** e a modelagem dimensional (estrela, floco de neve, tabelas fato, SCD). Esses pontos **não são repetidos** aqui.

#### 1.2 Arquitetura

```
Fontes → Área de preparação (staging) → DW (corporativo ou integrado por data marts)
   → Data marts → Cubos / camada semântica → Ferramentas de BI
```

| Componente | Função |
|---|---|
| **Staging** | Área temporária onde os dados são carregados e tratados antes do DW |
| **ODS** (*Operational Data Store*, de memória) | Repositório integrado de dados operacionais recentes, para consultas operacionais |
| **DW corporativo** | Repositório integrado e histórico |
| **Data mart** | Subconjunto por área ou processo (**dependente**, derivado do DW; **independente**, construído direto das fontes) |
| **Metadados** | Descrevem origem, regras, significados e linhagem |
| **Camada de acesso** | Consultas, OLAP, relatórios, mineração |

**Arquiteturas:** uma camada, duas camadas e três camadas (fontes–DW–apresentação) — classificação usual de livros; **DW em nuvem** (escalabilidade, separação de armazenamento e computação) e ***lakehouse*** (Módulo 1, `09`). *(De memória.)*

#### 1.3 Vantagens e limitações

| Vantagens | Limitações |
|---|---|
| Visão integrada e consistente | Custo e complexidade de construção |
| Histórico e desempenho analítico | Dados com latência (carga periódica) |
| Isola cargas analíticas do ambiente operacional | Exige governança e qualidade |
| Base para BI e mineração | Mudanças nas fontes impactam o ETL |

### 2. OLAP (item 7.5)

#### 2.1 Conceito

**OLAP** (*Online Analytical Processing*) é a abordagem de **análise interativa e multidimensional** de grandes volumes de dados, com **tempos de resposta rápidos**, a partir de **medidas** vistas por **dimensões** (tempo, produto, região). Os dados são vistos como um **cubo** (ou hipercubo, se houver mais de três dimensões). Termo introduzido por **E. F. Codd** (1993; de memória). O Módulo 1 `07` já situa os bancos multidimensionais frente aos relacionais.

**Elementos:** **medida** (valor numérico a analisar: vendas, custo); **dimensão** (perspectiva: tempo, local); **hierarquia** (níveis de uma dimensão: ano > trimestre > mês > dia); **atributo**; **célula** (interseção de membros das dimensões, com o valor da medida).

#### 2.2 Operações OLAP

As operações abaixo **roll-up, drill-down, slice e dice** foram **verificadas** em fonte secundária (Wikipedia, "Online analytical processing", que as chama de consolidação/*roll-up*, *drill-down* e *slicing and dicing*); *drill-up* e *pivot* como operações **não foram confirmadas** nessa fonte e são tradicionais na literatura (de memória).

| Operação | O que faz | Exemplo (vendas por Tempo × Produto × Região) |
|---|---|---|
| **Roll-up** (consolidação; *drill-up*) | **Sobe** na hierarquia, **agregando** (menos detalhe) | De vendas por **mês** para vendas por **trimestre** |
| **Drill-down** | **Desce** na hierarquia (mais detalhe) | De **ano** para **mês**; de região para cidade |
| **Slice** (fatia) | **Fixa um valor** de uma dimensão, reduzindo a dimensionalidade | Apenas o ano de 2025 |
| **Dice** (cubo menor) | Seleciona **intervalos/valores em várias dimensões**, gerando subcubo | 2025–2026, produtos A e B, região Sul |
| **Pivot** (rotação) | **Gira** o cubo, trocando linhas e colunas para novo ângulo | Produto nas linhas e tempo nas colunas, depois o inverso |
| **Drill-across** | Une medidas de **diferentes fatos** pela dimensão comum (de memória) | Vendas e devoluções por mês |
| **Drill-through** | Vai do valor agregado ao **registro detalhado** de origem (de memória) | Do total ao documento fiscal |

**Slice × dice:** o *slice* fixa **uma** dimensão a **um** valor; o *dice* restringe **mais de uma** dimensão a subconjuntos. **Roll-up × drill-down:** direções opostas na hierarquia.

#### 2.3 Tipos de OLAP (verificados)

| Tipo | Armazenamento | Característica |
|---|---|---|
| **MOLAP** | Em **matriz multidimensional** otimizada (cubo) | Consultas muito rápidas; pré-computa agregações; limitado em volume e atualização |
| **ROLAP** | Em **bancos relacionais** (esquema estrela/floco), consultas SQL | Trabalha direto com tabelas, sem pré-computação; escala para grandes volumes, desempenho depende do banco |
| **HOLAP** | **Híbrido**: parte em MOLAP (agregados), parte em ROLAP (detalhe) | Equilíbrio entre desempenho e volume |

Ferramentas de consulta: SQL analítico (funções de janela, `GROUP BY ROLLUP/CUBE`, de memória) e **MDX** (linguagem para cubos; Módulo 1, `07`).

#### 2.4 Exemplo SQL (ilustrativo, não executado)

```sql
-- Roll-up por ano e mês, com subtotais
SELECT ano, mes, SUM(valor) AS total
FROM fato_vendas f JOIN dim_tempo t ON t.sk_tempo = f.sk_tempo
GROUP BY ROLLUP (ano, mes);
```

#### 2.5 OLAP × OLTP

OLTP: transações curtas, dados atuais, normalizado (Módulo 1 `01`). OLAP: consultas complexas e agregadas sobre histórico, em modelo dimensional.

### 3. Comparações conceituais

| A | B | Diferença |
|---|---|---|
| Roll-up | Drill-down | Agregar (subir) × detalhar (descer) |
| Slice | Dice | Fixar uma dimensão × restringir várias |
| Pivot | Slice | Girar a visão × reduzir a dimensionalidade |
| MOLAP | ROLAP | Cubo multidimensional × tabelas relacionais |
| DW | Data mart | Repositório integrado corporativo × subconjunto por área |
| DW | Data lake | Dados tratados e estruturados × dados brutos de qualquer tipo (Módulo 1 `09`) |
| DW | OLAP | Armazenamento × forma de análise |

### 4. Exemplo (didático)

Cubo de manutenção (tempo × unidade × tipo de serviço, medida = custo). *Roll-up* de mês para trimestre; *drill-down* de unidade para equipamento; *slice* no ano 2026; *dice* nas unidades Norte e Sul para serviços corretivos; *pivot* para ver unidades nas colunas.

### 5. Atenção para a prova

*Inferência técnica e recomendação pedagógica; sem atribuir frequência à banca.*

- Memorizar as quatro características do DW (orientado a assunto, integrado, variante no tempo, não volátil) e sua **não volatilidade**.
- Reconhecer cada operação OLAP em um exemplo e a **direção** do roll-up e do drill-down.
- *Evidência histórica (amostra de duas provas):* a Prova 6 de 2023 trouxe **Q56 (característica de DW**, gabarito B) e **Q62 (operações OLAP**: slice, roll-up e drill; gabarito E, com observação do catálogo sobre conferir a alternativa A). Gabaritos de terceiros, não validados. Duas provas não permitem inferir frequência.

### 6. Síntese

- DW: orientado a assunto, integrado, histórico, não volátil; staging, DW, data marts, metadados; apoio ao BI.
- OLAP: análise multidimensional em cubo; roll-up, drill-down, slice, dice, pivot; MOLAP, ROLAP, HOLAP.

### 7. Pontos para a futura produção de questões (registro)

Características do DW; DW × data mart/data lake/OLTP; identificação de operação OLAP; tipos de OLAP.

### 8. Referências

- Wikipedia, "Online analytical processing" — **verificada em 2026-10-31** (roll-up, drill-down, slice/dice, MOLAP/ROLAP/HOLAP); IBM, "Data warehouse" — **verificada** (tipos de OLAP). Atribuição das quatro características a Inmon **não confirmada** (AWS, IBM e Wikipedia não a fazem); mantida de memória. PostgreSQL, "Table Expressions" (`ROLLUP`/`CUBE`) — **verificada**; exemplo SQL não executado.
- CODD et al. (1993), INMON (*Building the Data Warehouse*), KIMBALL — **de memória**.
- Edital Transpetro nº 04/2026.4, Anexo IV, itens 7.5 e 7.6. Provas: Transpetro 2023, Prova 6, Q56 e Q62 (gabaritos de terceiros, não validados).


---

## Técnicas de Modelagem e Otimização de Bases Multidimensionais

**Módulo:** M07 — Análise de dados e informações
**Texto oficial (Anexo IV):** 7.7 "Técnicas de modelagem e otimização de bases de dados multidimensionais".
**Escopo:** A. Fundamentos (estrela, floco de neve, fato, dimensão, granularidade, SCD) em `01-arquitetura-dados/09`. Este arquivo trata do que o M1 não desenvolve: processo de projeto, modelagem para o cubo e **otimização**.
**Status:** `VALIDADO` (aprovado pelo usuário em 2026-10-31, com ressalvas: interpretação dos itens 7.2, 7.3 e 7.7 a 7.9 a confirmar; fontes de memória listadas em `docs/qualidade/relatorio-producao-modulo-07.md`). **Verificados** (títulos nas páginas do Kimball Group): processo de quatro passos, tipos de tabela fato e SCD tipos 0 a 7. Técnicas de otimização são de memória.

**Objetivos de aprendizagem.** (1) Aplicar o processo de projeto dimensional; (2) escolher o tipo de tabela fato; (3) modelar hierarquias e dimensões; (4) aplicar técnicas de otimização; (5) avaliar compromissos entre desempenho, custo e atualização.

---

### 1. Revisão mínima (referência ao Módulo 1)

Esquema **estrela** (fato central e dimensões desnormalizadas), **floco de neve** (dimensões normalizadas), **granularidade** (nível de detalhe de uma linha de fato), **chaves substitutas**, **dimensões conformes** e **SCD** (dimensões lentamente mutáveis) estão em `01-arquitetura-dados/09`. Aqui, apenas se aprofunda o que serve à modelagem e à otimização.

### 2. Processo de projeto dimensional (Kimball — **verificado**)

O Kimball Group descreve um processo em **quatro passos**:

| Passo | Pergunta | Exemplo |
|---|---|---|
| 1. **Selecionar o processo de negócio** | O que será medido? | Ordens de manutenção |
| 2. **Declarar a granularidade** | O que representa **uma linha** da tabela fato? | Uma ordem de serviço por equipamento |
| 3. **Identificar as dimensões** | Quem, o quê, onde, quando, como? | Tempo, equipamento, unidade, tipo de serviço |
| 4. **Identificar os fatos** | Quais medidas numéricas? | Custo, horas, quantidade de peças |

A **granularidade** é decisão central: deve ser a **mais atômica possível** (de memória, recomendação de Kimball), pois permite agregar, mas não desagregar.

### 3. Tipos de tabela fato (títulos **verificados**; descrições de memória)

| Tipo | Descrição | Exemplo |
|---|---|---|
| **Transacional** | Uma linha por evento/transação | Cada venda |
| **Snapshot periódico** | Uma linha por entidade por período | Saldo diário do estoque |
| **Snapshot acumulativo** | Uma linha por ciclo de processo, atualizada nas etapas | Ordem de serviço: aberta, programada, executada, encerrada |
| **Factless** (sem fato) | Registra ocorrências ou cobertura, sem medida numérica | Presença em treinamento; itens em promoção |

**Aditividade das medidas:** **aditivas** (somam em todas as dimensões: quantidade), **semiaditivas** (somam em algumas, não no tempo: saldo) e **não aditivas** (razões, percentuais: devem ser calculadas a partir de componentes). Módulo 1, `09`.

### 4. Técnicas de modelagem de dimensões

- **Hierarquias:** níveis (dia–mês–trimestre–ano) em uma dimensão; **hierarquias alternativas** (calendário civil e fiscal); **hierarquias irregulares** (ex.: estrutura organizacional com profundidade variável) exigem tabelas de ponte ou chave de caminho (de memória).
- **Dimensão tempo:** pré-carregada, com atributos (dia da semana, feriado, trimestre fiscal).
- **Dimensões degeneradas:** identificadores (nº do documento) mantidos na fato, sem tabela de dimensão.
- **Dimensões *junk* (lixo):** agrupam indicadores e *flags* de baixa cardinalidade em uma só dimensão.
- **Dimensões *role-playing*:** a mesma dimensão (tempo) usada em papéis diferentes (data de abertura, data de encerramento).
- **Tabelas de ponte** para relações muitos-para-muitos.
- **SCD:** o Kimball lista os tipos **0 a 7** (títulos verificados); os mais cobrados na literatura são **tipo 1** (sobrescrever), **tipo 2** (nova linha, preserva histórico) e **tipo 3** (coluna com valor anterior) — descrições no Módulo 1, `09`.
- **Dimensões conformes** e **matriz de barramento** (processos × dimensões) para integrar *data marts* (de memória).

### 5. Modelagem para cubos (MOLAP) e camada semântica

- **Cubo:** dimensões, hierarquias, medidas e **medidas calculadas**.
- **Esparsidade:** muitas combinações de dimensões sem dado; cubos MOLAP podem desperdiçar espaço, com técnicas de compressão e agregação seletiva (de memória).
- **Camada semântica:** modelo lógico (nomes de negócio, relacionamentos, métricas) entre o DW e as ferramentas de BI.

### 6. Otimização de bases multidimensionais (técnicas de memória)

| Técnica | Efeito | Custo / cuidado |
|---|---|---|
| **Tabelas agregadas** (sumarização pré-calculada) | Consultas rápidas em níveis altos da hierarquia | Armazenamento e manutenção na carga; escolher agregações por uso |
| **Visões materializadas** | Agregações físicas mantidas pelo banco | Atualização |
| **Índices** (B-tree; **bitmap** para colunas de baixa cardinalidade) | Filtragem rápida de dimensões | Custo de carga; bitmap é adequado a DW |
| **Particionamento** (por tempo) | Lê apenas partições relevantes; facilita arquivamento | Planejar chave de partição |
| **Colunar / compressão** | Leitura de poucas colunas, alta compressão | Menos eficiente em atualizações pontuais |
| **Paralelismo e processamento massivamente paralelo (MPP)** | Escala de consultas | Custo de infraestrutura |
| **Desnormalização** (estrela em vez de floco) | Menos junções | Redundância |
| **Chaves substitutas inteiras** | Junções mais rápidas | Gestão de chaves no ETL |
| **Cache e pré-cálculo** | Respostas imediatas | Atualização dos dados em cache |
| **Controle de granularidade e volume** | Reduz linhas | Perda de detalhe |
| **Cargas incrementais** (CDC) | Reduz a janela de carga | Complexidade |

**Compromissos:** mais agregações aceleram consultas, mas **aumentam armazenamento e tempo de carga**; desnormalizar acelera a leitura, mas **duplica dados**; mais índices ajudam a consulta, mas **pioram a carga**.

**Boas práticas de projeto:** modelar a partir das **perguntas de negócio**; validar granularidade com os usuários; padronizar nomes; documentar; testar desempenho com volumes reais; monitorar uso e **ajustar agregações** conforme as consultas mais frequentes.

### 7. Exemplo SQL (ilustrativo, não executado)

```sql
-- Tabela agregada por mês e unidade (sumarização pré-calculada)
CREATE TABLE agg_manutencao_mes AS
SELECT t.ano, t.mes, f.sk_unidade, SUM(f.custo) AS custo_total, COUNT(*) AS qtd_os
FROM fato_manutencao f
JOIN dim_tempo t ON t.sk_tempo = f.sk_tempo_abertura
GROUP BY t.ano, t.mes, f.sk_unidade;
```

### 8. Comparações conceituais

| A | B | Diferença |
|---|---|---|
| Fato transacional | Snapshot periódico | Um evento × estado em intervalos |
| Snapshot periódico | Acumulativo | Linha por período × linha por ciclo, atualizada |
| Estrela | Floco de neve | Dimensões desnormalizadas × normalizadas |
| Agregação | Granularidade atômica | Resumo pré-calculado × menor nível de detalhe |
| Índice *bitmap* | Índice B-tree | Baixa cardinalidade, DW × uso geral, alta cardinalidade |
| Particionamento | Indexação | Dividir fisicamente os dados × estrutura de acesso |

### 9. Atenção para a prova

*Inferência técnica e recomendação pedagógica; sem atribuir frequência à banca.*

- Item amplo: esperar perguntas sobre **estrela/floco de neve**, **fato e dimensão**, **granularidade**, **SCD** e **desnormalização para desempenho**.
- Reconhecer os compromissos de otimização (desempenho × armazenamento × carga).
- Item 7.7 **não teve questão** identificada nas duas provas catalogadas.

### 10. Síntese

Processo de quatro passos; tipos de fato; dimensões e hierarquias; cubo e camada semântica; otimização por agregação, índices, particionamento, colunar e paralelismo, com compromissos.

### 11. Pontos para a futura produção de questões (registro)

Passos do projeto dimensional; escolha do tipo de fato; técnica de otimização adequada ao cenário; compromisso entre desnormalização e redundância.

### 12. Referências

- Kimball Group, *Dimensional Modeling Techniques* e *Four-Step Design Process* — **verificados em 2026-10-31** (quatro passos, títulos dos quatro tipos de fato e SCD 0–7); descrições das técnicas **não lidas**.
- KIMBALL; ROSS. *The Data Warehouse Toolkit* — **de memória, não verificada**. Técnicas de otimização — **de memória**.
- Edital Transpetro nº 04/2026.4, Anexo IV, item 7.7.


---

## Construção de Relatórios e Dashboards em Ferramentas de BI; Manipulação de Dados em Planilhas

**Módulo:** M07 — Análise de dados e informações
**Textos oficiais (Anexo IV):** 7.8 "Construção de relatórios e dashboards interativos em ferramentas de BI"; 7.9 "Manipulação de dados em planilhas".
**Escopo:** A. O edital **não cita produto**; o conteúdo é conceitual e independente de ferramenta. As funções de planilha são apresentadas por nome genérico, com as grafias de uso comum.
**Status:** `VALIDADO` (aprovado pelo usuário em 2026-10-31, com ressalvas: interpretação dos itens 7.2, 7.3 e 7.7 a 7.9 a confirmar; fontes de memória listadas em `docs/qualidade/relatorio-producao-modulo-07.md`). Conteúdo de memória; **não verificado online** (as páginas de suporte da Microsoft não foram lidas), salvo, na revisão de 2026-10-31, a existência das funções `XLOOKUP` (`PROCX`) e `VLOOKUP` (`PROCV`) e do recurso de tabela dinâmica (índice de ajuda da Microsoft); as **versões** em que `XLOOKUP` existe, `SUMIFS` e validação de dados **não foram confirmados**.

**Objetivos de aprendizagem.** (1) Descrever o fluxo de construção em uma ferramenta de BI; (2) aplicar recursos de interatividade; (3) manipular, limpar e resumir dados em planilhas; (4) escolher entre planilha e BI; (5) reconhecer riscos de planilhas.

---

### 1. Construção de relatórios e dashboards (item 7.8)

> **Princípios de projeto visual, KPIs, organização e tipos de dashboard:** Módulo 6, `06-dashboards-e-relatorios` e `05-data-storytelling`. Não são repetidos.

#### 1.1 Fluxo geral em ferramentas de BI (independente de produto)

1. **Conectar** às fontes (banco, DW, arquivo, API); modo **importação** (cópia dos dados) ou **consulta direta** (*DirectQuery*/*live*), com compromissos entre desempenho e atualidade.
2. **Preparar** os dados (transformações, tipos, junções, filtros, remoção de duplicidades).
3. **Modelar:** relacionamentos entre tabelas (de preferência esquema estrela, arquivo `06`), **hierarquias**, **medidas** e **colunas calculadas**; camada semântica.
4. **Visualizar:** criar gráficos, tabelas, cartões (Módulo 6 `05`).
5. **Compor** o painel: layout, filtros, navegação.
6. **Publicar e compartilhar:** serviço/servidor, permissões por perfil.
7. **Atualizar e monitorar:** agendamento de atualização, alertas, uso.

#### 1.2 Conceitos importantes

| Conceito | Descrição |
|---|---|
| **Medida** | Cálculo dinâmico, avaliado no contexto dos filtros (ex.: total de vendas; margem %) |
| **Coluna calculada** | Valor calculado linha a linha na carga/modelo |
| **Dimensão/atributo** | Campo de agrupamento ou filtro |
| **Contexto de filtro** | Seleções, filtros e linhas/colunas que determinam o valor da medida |
| **Hierarquia** | Níveis para *drill-down* (ano > mês > dia) |
| **Relacionamento** | Ligação entre tabelas; cardinalidade (um-para-muitos) e direção do filtro |
| **Parâmetro** | Valor ajustável pelo usuário (meta, período) |
| **Atualização incremental** | Carrega apenas dados novos ou alterados |

#### 1.3 Interatividade

**Filtros** (de página, de relatório, de visual), **segmentadores** (*slicers*), **seleção cruzada** entre visuais, ***drill-down/up***, ***drill-through*** (ir a página de detalhes), *tooltips* ricos, marcadores e navegação por botões, ordenação, exportação, **alertas** e assinaturas, parâmetros. Interatividade deve preservar **clareza do estado inicial** (Módulo 6 `06`).

#### 1.4 Relatórios paginados e relatórios interativos

| Tipo | Uso |
|---|---|
| **Paginado** (impressão/PDF) | Documentos formais, notas, listas extensas com paginação exata |
| **Interativo (dashboard)** | Exploração, monitoramento, filtros |

#### 1.5 Segurança, governança e desempenho

- **Segurança em nível de linha** (*row-level security*): cada usuário vê apenas seus dados (relacionado à LGPD, Módulo 4, e ao Módulo 9).
- **Conjuntos de dados compartilhados e certificados** para uma só versão da verdade (arquivo `02`).
- **Desempenho:** reduzir colunas e linhas importadas, usar agregações, evitar cálculos pesados, modelo estrela.
- **Ciclo de vida:** versionamento, ambientes de desenvolvimento e produção, documentação.
- **Acessibilidade e responsividade** (Módulo 6 `01`).

### 2. Manipulação de dados em planilhas (item 7.9)

#### 2.1 Conceitos

Uma **planilha** organiza dados em **linhas e colunas** (células), com **fórmulas** e **funções**, **formatação**, **gráficos** e **tabelas dinâmicas**. É a ferramenta de análise mais difundida e de uso pessoal e flexível.

#### 2.2 Operações fundamentais

| Grupo | Recursos |
|---|---|
| **Entrada e organização** | Tabelas estruturadas (cabeçalhos, tipos consistentes), ordenar, filtrar, congelar painéis, formatos de número/data |
| **Limpeza** | Remover duplicatas, texto para colunas, aparar espaços, padronizar maiúsculas/minúsculas, tratar erros e valores vazios, converter tipos, localizar e substituir |
| **Validação** | Validação de dados (listas, intervalos), formatação condicional, proteção de células/planilhas |
| **Fórmulas e referências** | Referências **relativas** (`A1`), **absolutas** (`$A$1`) e **mistas**; nomes de intervalos; referências a outras planilhas |
| **Resumo** | **Tabelas dinâmicas** (resumo, agrupamento, filtro, campos calculados), subtotais, gráficos dinâmicos |
| **Visualização** | Gráficos, minigráficos, formatação condicional, painéis em planilha |
| **Automação** | Macros, scripts; consultas de dados e transformação (importar, combinar e transformar dados) |

#### 2.3 Funções usuais (nomes conforme aplicativos mais comuns; **de memória**)

| Categoria | Exemplos |
|---|---|
| **Matemáticas e estatísticas** | `SOMA`, `MÉDIA`, `MÁXIMO`, `MÍNIMO`, `CONT.NÚM`, `CONT.VALORES` |
| **Condicionais** | `SE`, `SOMASE`, `SOMASES`, `CONT.SE`, `CONT.SES`, `MÉDIASE`, `E`, `OU` |
| **Pesquisa e referência** | `PROCV`, `PROCH`, `ÍNDICE` + `CORRESP`, `PROCX` (versões mais recentes de alguns aplicativos) |
| **Texto** | `CONCATENAR`/`CONCAT`, `ESQUERDA`, `DIREITA`, `EXT.TEXTO`, `LOCALIZAR`, `ARRUMAR`, `MAIÚSCULA` |
| **Data e hora** | `HOJE`, `DATA`, `DIA`, `MÊS`, `ANO`, `DIAS`, `DIATRABALHOTOTAL` |
| **Lógicas e de erro** | `SEERRO`, `ÉERRO`, `ÉNÚM` |

*Os nomes e a disponibilidade variam por aplicativo, idioma e versão; confirmar no aplicativo usado.*

**Exemplo:** `=SOMASES(C:C; A:A; "Norte"; B:B; "2026")` soma os valores da coluna C em que A é "Norte" e B é "2026".

#### 2.4 Tabela dinâmica

Resume dados por **linhas**, **colunas**, **valores** e **filtros**, com agregações (soma, contagem, média) e agrupamentos (datas em meses e anos). Boas práticas: dados de origem em formato **tabular** (um registro por linha, cabeçalho único, sem células mescladas e sem linhas de total); atualizar após alterar os dados.

#### 2.5 Planilha × BI

| Aspecto | Planilha | Ferramenta de BI |
|---|---|---|
| Volume | Limitado | Grandes volumes |
| Fontes | Manuais, arquivos | Múltiplas, automatizadas |
| Governança | Fraca (versões paralelas) | Centralizada (modelo, permissões) |
| Atualização | Manual | Agendada |
| Colaboração | Limitada | Compartilhamento e perfis |
| Flexibilidade | Muito alta, individual | Estruturada |
| Rastreabilidade | Baixa | Linhagem e histórico |

Planilhas são também **fonte de dados** para BI; devem ter estrutura tabular consistente.

#### 2.6 Riscos das planilhas

Erros de fórmula; referências quebradas; **cópias divergentes**; falta de validação; dados sensíveis expostos (compartilhamento por e-mail); dependência de macros; baixa auditoria. Mitigação: padronização de modelos, validação, proteção, controle de versão, migração para BI quando o uso se tornar crítico.

### 3. Exemplo (didático)

O analista importa as ordens de serviço (CSV) para uma planilha, remove duplicatas, padroniza datas, cria uma tabela dinâmica por unidade e mês e uma formatação condicional para atrasos. Como a análise passa a ser recorrente, o dado é conectado a uma ferramenta de BI: um modelo estrela, medidas de custo e prazo, filtros de unidade e período, atualização diária e segurança por linha por gerência.

### 4. Comparações conceituais

| A | B | Diferença |
|---|---|---|
| Medida | Coluna calculada | Avaliada no contexto de filtro × calculada por linha |
| Importação | Consulta direta | Cópia dos dados (rápida) × consulta no momento (atual) |
| Filtro | Segmentador | Restringe dados × controle visual do filtro |
| Referência relativa | Absoluta | Ajusta ao copiar × fixa a célula |
| `PROCV` | `ÍNDICE` + `CORRESP` | Busca à direita da coluna-chave × busca em qualquer direção |
| Tabela dinâmica | Fórmula `SOMASES` | Resumo interativo × cálculo pontual |

### 5. Atenção para a prova

*Inferência técnica e recomendação pedagógica; sem atribuir frequência à banca.*

- Os itens 7.8 e 7.9 estão no edital sem produto específico; trate conceitos (modelo, medida, interatividade, tabela dinâmica, funções de pesquisa e condicionais).
- Saber o que cada função faz e como funcionam as referências.
- Itens 7.8 e 7.9 **não tiveram questão** identificada nas duas provas catalogadas.

### 6. Síntese

BI: conectar, preparar, modelar (medidas), visualizar, compor, publicar, atualizar, com interatividade e segurança por linha. Planilhas: dados tabulares, limpeza, fórmulas, tabela dinâmica, formatação condicional, validação; riscos de governança.

### 7. Pontos para a futura produção de questões (registro)

Função adequada a um cenário; diferença entre referências; leitura de resultado de fórmula; uso de tabela dinâmica; escolha planilha × BI; recursos de interatividade.

### 8. Referências

- Documentação de aplicativos de planilha e de ferramentas de BI — **não lida; de memória** (tentativa de leitura de página da Microsoft falhou, HTTP 404, e não foi repetida).
- Princípios de apresentação: Módulo 6, `05` e `06`.
- Edital Transpetro nº 04/2026.4, Anexo IV, itens 7.8 e 7.9.


---

## Geração de Insights e BI como Suporte à Tomada de Decisão

**Módulo:** M07 — Análise de dados e informações
**Textos oficiais (Anexo IV):** 7.10 "Geração de insights a partir de relatórios e dashboards"; 7.11 "BI como suporte a processos de tomada decisão." (a redação do edital omite "de").
**Escopo:** A. Comunicação visual e narrativa: Módulo 6, `05-data-storytelling`; aqui, o processo analítico e a decisão.
**Status:** `VALIDADO` (aprovado pelo usuário em 2026-10-31, com ressalvas: interpretação dos itens 7.2, 7.3 e 7.7 a 7.9 a confirmar; fontes de memória listadas em `docs/qualidade/relatorio-producao-modulo-07.md`). Conteúdo de memória (Simon, Anthony, processos analíticos); **não verificado online**.

**Objetivos de aprendizagem.** (1) Definir insight e distingui-lo de dado e observação; (2) conduzir uma análise até a ação; (3) aplicar técnicas de interpretação; (4) relacionar BI aos níveis e tipos de decisão; (5) reconhecer vieses e limitações.

---

### 1. Insights (item 7.10)

#### 1.1 Conceito

***Insight*** é uma **descoberta relevante e acionável** obtida da análise de dados: algo que **explica**, **revela** um padrão, uma causa provável, uma oportunidade ou um risco, e que **orienta uma ação**. Um número não é um insight; o insight liga o **dado** ao **significado para o negócio** (arquivo `01`: dado → informação → conhecimento → inteligência).

| Nível | Exemplo |
|---|---|
| Dado | Atrasos = 18% |
| Observação | Os atrasos subiram de 12% para 18% em dois meses |
| **Insight** | O aumento concentra-se nas ordens com peças importadas, após a mudança de fornecedor |
| Ação | Renegociar prazos ou criar estoque de segurança desses itens |

#### 1.2 Processo de geração de insights

1. **Partir da pergunta de negócio** (decisão a apoiar), não do dado disponível.
2. **Entender o contexto e a definição das métricas** (período, filtros, fonte).
3. **Explorar:** tendências, sazonalidade, comparações (meta, período anterior, pares), distribuições, *outliers*.
4. **Segmentar e detalhar** (*drill-down*): por região, produto, cliente, tipo (arquivo `05`).
5. **Procurar causas** (correlações, mudanças de processo, eventos); **testar hipóteses**.
6. **Verificar a qualidade** dos dados e descartar artefatos (erro de carga, mudança de definição).
7. **Priorizar** pelo impacto e pela viabilidade de ação.
8. **Comunicar** com narrativa clara (Módulo 6 `05`) e **recomendar ação**.
9. **Acompanhar o resultado** da ação (ciclo de melhoria).

#### 1.3 Técnicas de análise de relatórios e dashboards

| Técnica | Uso |
|---|---|
| **Comparação** | Com meta, orçamento, período anterior (YoY, MoM), benchmark |
| **Tendência e sazonalidade** | Direção e padrões periódicos |
| **Decomposição** | Quebrar um total por dimensões (análise de contribuição; Pareto, 80/20) |
| **Variação e desvio** | Real × planejado; análise de variações |
| **Correlação** | Relação entre variáveis (**correlação não implica causalidade**) |
| **Segmentação / coorte** | Grupos com comportamento semelhante; análise ao longo do tempo |
| **Detecção de anomalias** | Valores fora do padrão |
| **Análise causa e efeito** | Diagrama de Ishikawa, "5 porquês" (Módulo 3, qualidade; de memória) |
| **Cenários e simulações** | "E se?" (*what-if*) |

#### 1.4 Armadilhas e vieses

- **Correlação × causalidade**; **viés de confirmação** (buscar o que confirma a crença); **viés de seleção**; ***cherry-picking*** de períodos; **paradoxo de Simpson** (tendência de grupos que se inverte no agregado); **amostras pequenas**; **métricas de vaidade**; **escala enganosa** (Módulo 6 `05`); **dados desatualizados ou incompletos**; ignorar o **contexto** de negócio; **excesso de painéis** sem decisão.
- **Alfabetização em dados (*data literacy*):** capacidade de ler, questionar e comunicar dados; essencial para os decisores.

#### 1.5 Do insight à ação

Um insight só gera valor se levar a **decisão e execução**: definir responsável, prazo, indicador de sucesso e acompanhamento. **Alertas** e metas ajudam a transformar monitoramento em ação.

### 2. BI como suporte à tomada de decisão (item 7.11)

#### 2.1 Decisão nas organizações

**Decisão** é a escolha entre alternativas para atingir um objetivo. Classificações usuais (de memória):

| Critério | Tipos |
|---|---|
| **Nível (Anthony)** | **Operacional** (dia a dia), **tático** (gerencial, médio prazo), **estratégico** (longo prazo, alta direção) |
| **Estruturação (Simon)** | **Estruturada/programada** (regras claras), **semiestruturada**, **não estruturada** (julgamento) |
| **Horizonte** | Curto, médio e longo prazos |

Etapas do processo decisório (Simon, de memória): **inteligência** (identificar o problema), **concepção** (gerar alternativas), **escolha** (selecionar) e **revisão** (avaliar o resultado).

#### 2.2 Papel do BI

| Nível | Decisão | Suporte de BI |
|---|---|---|
| **Operacional** | Reprogramar uma manutenção hoje | Dashboards operacionais em tempo (quase) real; alertas |
| **Tático** | Reforçar equipe da área no próximo trimestre | Indicadores de desempenho, análise de tendências, OLAP |
| **Estratégico** | Investir em nova unidade | Painéis executivos, cenários, indicadores balanceados (*balanced scorecard*, de memória), análise preditiva |

BI contribui para decisões **baseadas em dados** (*data-driven*), mais rápidas, consistentes e rastreáveis, reduz o uso de **informação fragmentada** e permite **monitorar** a execução. Complementos: **sistemas de apoio à decisão (SAD/DSS)**, **sistemas de informação executiva**, *analytics* preditivo e prescritivo (arquivo `02`).

#### 2.3 Limitações

BI **não decide** sozinho: depende de qualidade dos dados, de definições claras e do **julgamento humano**; pode gerar **excesso de informação**; exige **cultura** orientada a dados e governança; os modelos podem ter **vieses** (inclusive éticos e legais, como a proteção de dados pessoais — LGPD, Módulo 4).

#### 2.4 Exemplo (didático)

A diretoria de operações acompanha um painel executivo (disponibilidade, custo por unidade, backlog). O indicador de backlog sobe na região Norte; o gerente, por *drill-down*, vê que a causa são paradas programadas acumuladas; compara com o histórico; a decisão tática é reforçar a equipe e antecipar compras; o painel acompanha o efeito nas semanas seguintes.

### 3. Comparações conceituais

| A | B | Diferença |
|---|---|---|
| Insight | Observação | Descoberta que orienta a ação × constatação do que ocorreu |
| Insight | Dado | Significado acionável × fato bruto |
| Correlação | Causalidade | Variam juntas × uma causa a outra |
| Decisão operacional | Estratégica | Rotina, curto prazo × direção da organização, longo prazo |
| Decisão estruturada | Não estruturada | Regras claras × julgamento e incerteza |
| Monitoramento | Análise | Acompanhar indicadores × investigar causas |

### 4. Atenção para a prova

*Inferência técnica e recomendação pedagógica; sem atribuir frequência à banca.*

- Relacionar **nível decisório** a **tipo de painel/relatório** e a **horizonte**.
- Lembrar que BI **apoia** a decisão e não a substitui; **qualidade do dado** é condição.
- Itens 7.10 e 7.11 **não tiveram questão** aderente identificada nas duas provas catalogadas. A Q54 de 2018 (tipo de sistema para apoio à decisão) foi classificada como parcialmente aderente; duas provas não permitem inferir frequência.

### 5. Síntese

Insight = descoberta relevante e acionável. Processo: pergunta → exploração → causas → validação → priorização → comunicação → ação → acompanhamento. Cuidado com vieses. BI apoia decisões operacionais, táticas e estratégicas, com governança e julgamento humano.

### 6. Pontos para a futura produção de questões (registro)

Distinguir insight e dado; ordenar etapas da análise; relacionar nível de decisão e tipo de BI; reconhecer vieses; limitações do BI.

### 7. Referências

- SIMON, H. (processo decisório); ANTHONY (níveis); KAPLAN; NORTON (BSC); TURBAN (BI e apoio à decisão) — **de memória, não verificados**.
- Edital Transpetro nº 04/2026.4, Anexo IV, itens 7.10 e 7.11. Prova Transpetro 2018, Prova 15, Q54 (gabarito de terceiros, não validado).

