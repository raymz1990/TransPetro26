---
modulo: 07-analise-dados
arquivo: 02-business-intelligence
itens_edital:
  - "7.2 Conceitos, fundamentos, características, técnicas e métodos de business intelligence (BI)"
ids_matriz: ["E5-061"]
escopo: "A — conteúdo expresso no edital."
tipo_conteudo: "teoria"
status: "VALIDADO"
ultima_atualizacao: "2026-10-31"
---

# Business Intelligence (BI): Conceitos, Fundamentos, Características, Técnicas e Métodos

**Módulo:** M07 — Análise de dados e informações
**Texto oficial (Anexo IV):** 7.2 "Conceitos, fundamentos, características, técnicas e métodos de business intelligence (BI)".
**Escopo:** A. Item amplo: o edital não lista as técnicas; este arquivo adota uma interpretação (arquitetura de BI, tipos de análise, mineração de dados, ETL, KPIs, autosserviço) **a confirmar**.
**Status:** `VALIDADO` (aprovado pelo usuário em 2026-10-31, com ressalvas: interpretação dos itens 7.2, 7.3 e 7.7 a 7.9 a confirmar; fontes de memória listadas em `docs/qualidade/relatorio-producao-modulo-07.md`). O termo e a data (1989, Dresner) foram **verificados** em fonte secundária; o restante é de memória.

**Objetivos de aprendizagem.** (1) Definir BI e situar sua origem; (2) descrever a arquitetura e os componentes; (3) distinguir tipos de análise; (4) relacionar BI, mineração de dados e analytics; (5) conhecer métodos de implantação e riscos.

---

## 1. Conceito e origem

**Business intelligence (BI)** é o conjunto de **processos, tecnologias, ferramentas e práticas** que **coletam, integram, armazenam, analisam e apresentam** dados de negócio para **apoiar decisões**. Em português, usa-se também "inteligência de negócios".

**Origem do termo:** segundo a Wikipédia, o termo aparece já em 1865 (Richard Millar Devens) e em 1958 (Hans Peter Luhn, da IBM); em **1989, Howard Dresner (depois analista da Gartner) propôs *business intelligence* como termo guarda-chuva** para métodos e conceitos de apoio à decisão baseados em fatos; o uso se generalizou no fim da década de 1990 — **verificado em fonte secundária**.

**Objetivos:** transformar dados em informação e conhecimento (arquivo `01`); dar **visão única e consistente** do negócio; reduzir o tempo entre o fato e a decisão; monitorar desempenho; descobrir padrões.

## 2. Arquitetura e componentes

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

## 3. Características de um ambiente de BI

Dados **integrados e consistentes** (uma versão da verdade); **históricos**; **orientados a assuntos**; **acesso por usuários de negócio** com pouca dependência de TI; **desempenho** em grandes volumes; **governança e segurança**; **atualização** em lote ou quase em tempo real; **escalabilidade**.

## 4. Tipos de análise (analytics)

| Tipo | Pergunta | Técnicas |
|---|---|---|
| **Descritiva** | O que aconteceu? | Relatórios, painéis, OLAP |
| **Diagnóstica** | Por que aconteceu? | Detalhamento (*drill-down*), correlação, segmentação |
| **Preditiva** | O que pode acontecer? | Regressão, classificação, séries temporais, aprendizado de máquina |
| **Prescritiva** | O que fazer? | Otimização, simulação, regras de decisão |

*(Classificação usual de mercado, de memória.)* BI tradicional concentra-se na análise **descritiva e diagnóstica**; os termos *analytics* e ciência de dados costumam enfatizar as preditiva e prescritiva, mas a fronteira é fluida.

## 5. Técnicas e métodos

- **Consulta e relatório:** SQL, relatórios paginados, consultas ad hoc.
- **OLAP:** análise multidimensional (arquivo `05`).
- **Painéis e indicadores (KPIs):** monitoramento (arquivo `07`; Módulo 6 `06`).
- **Mineração de dados (*data mining*):** descoberta de padrões em grandes bases. Tarefas usuais: **classificação** (supervisionada), **regressão**, **agrupamento/clusterização** (não supervisionada), **regras de associação** ("quem compra A compra B"), **detecção de anomalias**. Processos de referência: **KDD** e **CRISP-DM** (fases do CRISP-DM **verificadas** na Wikipedia em 2026-10-31, seis fases, sequência não estrita: entendimento do negócio, dos dados, preparação, modelagem, avaliação, implantação).
- **Mineração de texto e análise de dados não estruturados** (arquivo `04`).
- **Análise de dados em tempo real / *streaming*** (visão geral).
- **BI de autosserviço (*self-service BI*):** usuários de negócio criam suas análises com ferramentas simples; exige **governança** para evitar números divergentes ("planilhas paralelas").
- **BI corporativo × departamental;** **BI embarcado** (embutido em aplicações).
- **BI operacional, tático e estratégico** (arquivo `08`).

## 6. Métodos de implantação (visão geral)

1. Entender **objetivos e decisões** a apoiar; levantar requisitos com os usuários.
2. Identificar **fontes** e avaliar a **qualidade** dos dados (arquivo `03`).
3. Modelar (dimensional — Módulo 1 `09`; `06`) e construir o **ETL**.
4. Desenvolver relatórios e dashboards com os usuários, em ciclos incrementais (abordagem ágil; prototipação — Módulo 6).
5. Testar, treinar, implantar, **monitorar** o uso e evoluir.
6. **Governança:** responsáveis pelos dados, glossário, segurança (LGPD — Módulo 4).

**Fatores críticos de sucesso e riscos (de memória):** patrocínio executivo; foco em decisões reais; qualidade dos dados; participação dos usuários; escopo controlado; adoção; custo e desempenho; dependência de poucos especialistas.

## 7. BI × outros conceitos

| Conceito | Diferença em relação ao BI |
|---|---|
| **Banco de dados transacional** | Registra operações; BI analisa histórico |
| **Data warehouse** | Repositório que **suporta** o BI; BI é o conjunto de processos e ferramentas |
| **Mineração de dados** | Técnica de descoberta de padrões, componente do BI/*analytics* |
| **Ciência de dados** | Foco em modelos estatísticos e preditivos, programação e experimentação |
| **Big Data** | Volume, velocidade e variedade de dados; BI pode se apoiar nele (Módulo 1 `09`) |
| **Planilha** | Ferramenta individual e flexível; BI busca integração e governança (arquivo `07`) |

## 8. Exemplo (didático)

Distribuidora de combustíveis: ETL diário reúne vendas, estoques e logística em um DW; um modelo dimensional (tempo, produto, cliente, local) alimenta cubos OLAP; um painel mostra a margem por região; análise de agrupamento segmenta clientes; alertas avisam quando o estoque de uma base cai abaixo do mínimo.

## 9. Atenção para a prova

*Inferência técnica e recomendação pedagógica; sem atribuir frequência à banca.*

- BI apoia **decisão**, a partir de dados **integrados e históricos**.
- Distinguir **DW** (repositório), **OLAP** (consulta multidimensional), **mineração** (descoberta de padrões) e **dashboard** (apresentação).
- Mineração de dados: **agrupamento** é técnica **não supervisionada**; **classificação** é supervisionada. A Q21 da Prova 15 de 2018 cobrou agrupamento e foi classificada como **fora do edital 2026** pelo catálogo; trate mineração aqui como aprofundamento de 7.2 e não como item literal.
- Item 7.2 **não teve questão aderente** identificada em 2023; duas provas não permitem inferir frequência.

## 10. Síntese

BI = processos e tecnologias que transformam dados em apoio à decisão; arquitetura fontes → ETL → DW → OLAP/mineração → relatórios/dashboards; análise descritiva, diagnóstica, preditiva, prescritiva; autosserviço com governança.

## 11. Pontos para a futura produção de questões (registro)

Definição de BI; componentes e papéis; tipos de análise; mineração (supervisionada × não supervisionada); autosserviço e governança.

## 12. Referências

- Wikipedia, "Business intelligence" — **verificada em 2026-10-31** (origem do termo, Dresner 1989, usos anteriores). Glossário da Gartner não lido.
- Wikipedia, "Cross-industry standard process for data mining" — **verificada** (seis fases). KDD, classificação de *analytics* (Gartner e outros), literatura de BI (Turban; Kimball) — **de memória, não verificados**.
- Edital Transpetro nº 04/2026.4, Anexo IV, item 7.2. Prova Transpetro 2018, Prova 15, Q21 (gabarito de terceiros, não validado).
