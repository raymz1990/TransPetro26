---
modulo: 02-projetos-produtos
arquivo: 05-pmbok-7
itens_edital:
  - "2.4 PMBOK 7ª edição"
ids_matriz: ["E5-029"]
escopo: "A — conteúdo expresso no edital. Valor agregado (EVM) e a comparação com a 6ª edição são complementos B (necessários para evitar confusão de versões)."
tipo_conteudo: "teoria"
status: "VALIDADO"
ultima_atualizacao: "2026-10-31"
---

# PMBOK Guide — 7ª Edição

**Módulo:** M02 — Gerenciamento de Projetos e Produtos
**Texto oficial (Anexo IV):** 2.4 "PMBOK 7ª edição".
**Escopo:** A. O edital de **2026** cita a **7ª edição**; o edital de **2023** citava a **6ª edição**. Os **grupos de processos e áreas de conhecimento** (item 3 do Anexo IV, interpretado como gerenciamento de projetos conforme decisão do usuário) são desenvolvidos no **Módulo 3** e aqui aparecem apenas na comparação entre edições.
**Versão considerada:** *The Standard for Project Management and A Guide to the Project Management Body of Knowledge (PMBOK® Guide)*, **7ª edição, PMI, 2021**. Em 2026-10-31 verificou-se online que a **8ª edição** foi publicada pelo PMI a partir de novembro de 2025 (fontes secundárias indicam menos princípios e domínios, com reintrodução de "áreas de foco"); **o edital cita a 7ª**, que é o referencial deste arquivo.
**Status:** `VALIDADO` (aprovado pelo usuário em 2026-10-31, com ressalvas: textos do PMI e princípios Lean-Agile do SAFe não verificados em fonte primária; interpretação dos itens 2.5 e 2.7 a confirmar — ver `docs/qualidade/relatorio-producao-modulo-02.md`).

**Objetivos de aprendizagem.** (1) Explicar a mudança da 6ª para a 7ª edição (de processos para princípios e valor); (2) enumerar e interpretar os **12 princípios**; (3) descrever os **8 domínios de desempenho**; (4) explicar o **sistema de entrega de valor**, a **adequação (*tailoring*)** e a relação com abordagens preditivas e ágeis; (5) compreender a EAP e as medidas de valor agregado como artefatos/métricas.

---

## 1. Introdução

O **PMBOK** é o corpo de conhecimento do **Project Management Institute (PMI)**. Até a 6ª edição, era organizado por **processos** (49 processos em **5 grupos** e **10 áreas de conhecimento**, com entradas, ferramentas e saídas). A **7ª edição (2021)** muda a abordagem: o foco passa a ser **entrega de valor**, com **princípios** (o que orienta a conduta e as decisões) e **domínios de desempenho** (grupos de atividades críticas), mais flexíveis, que acomodam abordagens **preditivas, ágeis e híbridas**. A edição é dividida em duas partes: o ***Standard*** (norma, com os princípios e o sistema de entrega de valor) e o ***Guide*** (guia, com os domínios de desempenho, adequação e modelos, métodos e artefatos).

*Relações:* o PMBOK 7 reconhece Scrum, Kanban e demais abordagens ágeis (arquivos `02` a `04`); a gestão de produto relaciona-se com o item 2.2 (arquivo `01`); o PMO aparece no item 2.6 (arquivo `06`); os **grupos de processos e áreas de conhecimento**, da 6ª edição, são o item 3 (Módulo 3).

## 2. Da 6ª para a 7ª edição

| Aspecto | **6ª edição (2017)** | **7ª edição (2021)** |
|---|---|---|
| Estrutura | **49 processos** em **5 grupos** (Iniciação, Planejamento, Execução, Monitoramento e Controle, Encerramento) e **10 áreas de conhecimento** | **12 princípios** e **8 domínios de desempenho** |
| Orientação | Baseada em **processos** | Baseada em **princípios** e **entrega de valor** |
| Entradas, ferramentas e saídas (ITTO) | Detalhadas por processo | **Não estruturadas por processo**; modelos, métodos e artefatos descritos à parte |
| Abordagem | Predominantemente preditiva, com adendo ágil | **Neutra**: preditiva, adaptativa e híbrida |
| Adequação (*tailoring*) | Reconhecida, mas secundária | **Central** |
| Tema | Gerenciar o projeto | Entregar **valor** e **resultados** |
| Produto | Pouco enfatizado | Considerações de **gestão de produto** |

*Atenção:* conceitos da 6ª edição (grupos de processos, áreas de conhecimento, tabela de estruturas organizacionais, termos EEF/OPA) continuam a aparecer na literatura e em provas anteriores; **não são a estrutura da 7ª edição**. Verifique sempre a edição citada no enunciado.

## 3. O sistema de entrega de valor (*Standard*)

*Aviso:* a lista abaixo e as tabelas das seções 4 a 7 foram escritas a partir do conhecimento do autor do material; as páginas do PMI não puderam ser consultadas (acesso bloqueado) e fontes secundárias confirmaram apenas a estrutura geral (oito domínios, adequação, modelos/métodos/artefatos). **Conferir os enunciados no texto do PMI antes de citá-los.**

O *Standard* apresenta uma visão sistêmica: as organizações criam **valor** (utilidade, benefício) por meio de um **sistema de entrega de valor**, que inclui:

| Elemento | Descrição |
|---|---|
| **Criação de valor** | Componentes (portfólios, programas, projetos, produtos, operações) trabalham de forma integrada para gerar valor e benefícios; o valor pode ser financeiro, social, de conformidade, de satisfação, etc. |
| **Governança organizacional** | Estruturas, políticas e regras que orientam decisões, riscos e conformidade |
| **Funções associadas a projetos** | Funções de gestão, patrocínio, especialistas, partes interessadas, entre outras |
| **Ambiente do projeto** | Fatores **internos** (cultura, estrutura, capacidade) e **externos** (mercado, regulação, tecnologia) |
| **Considerações de gestão de produto** | Os projetos fazem parte do **ciclo de vida do produto** (do desenvolvimento ao encerramento), o que aproxima a gestão de projetos da de produtos (item 2.2) |
| **Fluxo de informação** | Informações fluem entre os componentes para decisões |

## 4. Os 12 princípios de gerenciamento de projetos

Os princípios **orientam o comportamento** e as decisões; **não são regras prescritivas**.

| # | Princípio (enunciado resumido) | Ideia central |
|---|---|---|
| 1 | Ser um **administrador (*steward*) diligente, respeitoso e cuidadoso** | Responsabilidade ética e ambiental; integridade |
| 2 | Criar um **ambiente colaborativo de equipe** | Cultura de colaboração e responsabilidade compartilhada |
| 3 | **Engajar efetivamente as partes interessadas** | Compreender e envolver pessoas afetadas |
| 4 | **Focar em valor** | Alinhar entregas a resultados e benefícios |
| 5 | **Reconhecer, avaliar e responder às interações do sistema** | Visão holística; o projeto como parte de sistemas maiores |
| 6 | **Demonstrar comportamentos de liderança** | Liderar de forma adaptada ao contexto |
| 7 | **Adequar (*tailor*) com base no contexto** | Ajustar abordagem, governança e processos |
| 8 | **Incorporar qualidade aos processos e entregas** | Qualidade no resultado e no método |
| 9 | **Navegar na complexidade** | Reconhecer e gerir complexidade |
| 10 | **Otimizar as respostas aos riscos** | Gerir ameaças e oportunidades |
| 11 | **Adotar adaptabilidade e resiliência** | Capacidade de reagir e se recuperar |
| 12 | **Permitir a mudança para alcançar o estado futuro previsto** | Gestão da mudança organizacional e da adoção |

*(Os enunciados são resumos didáticos; para citação exata, consultar o texto do PMI.)*

## 5. Os 8 domínios de desempenho

Um **domínio de desempenho** é um **grupo de atividades correlatas** críticas para a entrega efetiva dos resultados do projeto. Os oito domínios **interagem, sobrepõem-se e ocorrem simultaneamente**, não em sequência.

| Domínio | Foco | Pergunta orientadora |
|---|---|---|
| **Partes interessadas** | Identificar, entender, engajar e monitorar interessados | Quem é afetado e como engajá-lo? |
| **Equipe** | Responsabilidades, desenvolvimento, cultura e liderança | A equipe é capaz e está alinhada? |
| **Abordagem de desenvolvimento e ciclo de vida** | Escolha da abordagem (preditiva, iterativa, incremental, adaptativa, híbrida), cadência de entrega e fases | Como entregar e em que cadência? |
| **Planejamento** | Planejar escopo, cronograma, orçamento, recursos, aquisições, mudanças | Quanto de planejamento é suficiente? |
| **Trabalho do projeto** | Processos, comunicação, recursos, aquisições, aprendizado | O trabalho flui com eficiência? |
| **Entrega** | Escopo, requisitos, qualidade e **realização de valor** | O que será entregue entrega valor? |
| **Mensuração** | Medidas e métricas, previsão, avaliação de desempenho | Como saber se vai bem? |
| **Incerteza** | Riscos, ambiguidade, complexidade, volatilidade | Como lidar com o desconhecido? |

### 5.1 Abordagem de desenvolvimento e ciclo de vida

| Abordagem | Característica |
|---|---|
| **Preditiva (cascata)** | Escopo, prazo e custo definidos cedo; fases **sequenciais** (cada fase depende da anterior); entregas em marcos |
| **Iterativa** | Refinamento por repetição; busca de feedback; escopo evolui |
| **Incremental** | Entrega de **partes funcionais** sucessivas |
| **Adaptativa (ágil)** | Iterativa + incremental; mudança bem-vinda; entregas frequentes |
| **Híbrida** | Combina elementos (por exemplo, requisitos preditivos e desenvolvimento ágil) |

**Cadência de entrega:** única, múltiplas, periódica ou contínua. **Ciclo de vida do projeto:** série de **fases** (por exemplo, viabilidade, projeto, construção, teste, implantação, encerramento) que o projeto percorre; as fases podem ser sequenciais, sobrepostas ou iterativas. **Ciclo de vida do desenvolvimento** é o conjunto de fases do desenvolvimento do produto (aprofundado no Módulo 5, item 5.2).

## 6. Adequação (*tailoring*)

**Adequar** é **ajustar** a abordagem, a governança e os processos ao **contexto** (tamanho, complexidade, cultura, risco, abordagem escolhida). Sequência típica: selecionar abordagem inicial; adaptar à organização; adaptar ao projeto; implementar melhoria contínua. A adequação é um princípio (#7) e uma competência do gerente de projetos.

## 7. Modelos, métodos e artefatos

O *Guide* organiza ferramentas comuns em três categorias (classificação do guia; confira a lista na fonte):

| Categoria | Exemplos |
|---|---|
| **Modelos** | De liderança, comunicação, motivação, mudança, complexidade (por exemplo, Cynefin), desenvolvimento de equipe (por exemplo, Tuckman) |
| **Métodos** | Coleta e análise de dados, estimativa, reuniões e eventos |
| **Artefatos** | Estratégia (caso de negócio, termo de abertura/*charter*, *roadmap*), registros e diários, planos, **gráficos hierárquicos (EAP)**, linhas de base, dados visuais, relatórios, acordos e contratos |

### 7.1 Estrutura Analítica do Projeto (EAP/WBS)

A **EAP** (*Work Breakdown Structure*, WBS) é a **decomposição hierárquica do escopo total do trabalho** do projeto em partes menores e mais gerenciáveis, até o nível de **pacotes de trabalho** (menor nível, ao qual se pode estimar custo e prazo e designar responsável).

| Característica | Descrição |
|---|---|
| Orientada a **entregas/escopo**, não a atividades ou tempo | Define *o que* será entregue |
| **Regra dos 100%** | Inclui **todo** o trabalho do escopo, e somente ele |
| **Dicionário da EAP** | Descreve cada elemento (escopo, critérios de aceitação, responsável, estimativas) |
| Base para outros planos | Estimativas de custo e prazo, alocação de recursos, riscos, comunicação |
| Na 6ª edição, a **linha de base do escopo** = declaração de escopo + EAP + dicionário da EAP | Referência para controle de mudanças |

*A EAP **não** é:* o cronograma (sequência e dependências das atividades), a análise de riscos, uma técnica de estimativa de custos nem o plano estratégico do projeto.

### 7.2 Valor agregado (EVM — complemento B, domínio de Mensuração)

Método de medição integrada de escopo, prazo e custo:

| Sigla | Significado | Fórmula/observação |
|---|---|---|
| **PV** (valor planejado) | Valor do trabalho planejado até a data | — |
| **EV** (valor agregado) | Valor do trabalho **realizado** até a data | — |
| **AC** (custo real) | Custo efetivamente incorrido | — |
| **BAC** | Orçamento total na conclusão | — |
| **CV** | Variação de custos | CV = EV − AC |
| **SV** | Variação de prazos | SV = EV − PV |
| **CPI** | Índice de desempenho de custos | CPI = EV ÷ AC |
| **SPI** | Índice de desempenho de prazos | SPI = EV ÷ PV |
| **EAC** | Estimativa no término (uma forma comum) | EAC = BAC ÷ CPI |

Interpretação: **CPI > 1** = gasto abaixo do previsto para o trabalho feito; **SPI > 1** = adiantado. *Exemplo (didático):* CPI = 1,2 e SPI = 1,3 indicam projeto **abaixo do custo e adiantado** em relação ao plano.

## 8. Comparações conceituais

| Conceito A | Conceito B | Diferença principal |
|---|---|---|
| PMBOK 6 | PMBOK 7 | Processos (5 grupos, 10 áreas, 49 processos) × princípios (12) e domínios (8) |
| *Standard* | *Guide* | Princípios e sistema de entrega de valor × domínios, adequação e modelos/métodos/artefatos |
| Princípio | Regra/processo | Orientação de comportamento × procedimento obrigatório |
| Domínio de desempenho | Grupo de processos | Atividades interdependentes e simultâneas × fases/sequência de processos |
| Abordagem preditiva | Adaptativa (ágil) | Planejamento antecipado, fases sequenciais × iterações e mudança bem-vinda |
| Iterativa | Incremental | Refina por repetição × entrega partes funcionais sucessivas |
| EAP | Cronograma | Decomposição do escopo × sequenciamento no tempo |
| Entrega | Valor | Resultado produzido × benefício percebido |
| Adequação | Metodologia fixa | Ajuste ao contexto × aplicação padronizada |

## 9. Aplicações e cenários

**Cenário (didático): escolha da abordagem.** Um projeto de modernização de sistemas combina requisitos regulatórios estáveis (preditivos) com módulos de interface em constante refino (adaptativos). O gerente escolhe abordagem **híbrida** (domínio de abordagem de desenvolvimento), planeja marcos regulatórios com escopo fixo e utiliza Sprints para as interfaces; mede por **tempo de ciclo** e por **valor agregado** (domínio de mensuração). *Limitação:* a governança precisa aceitar relatos distintos para cada abordagem.

**Cenário (didático): decomposição do escopo.** A EAP de um sistema de monitoramento é organizada por **entregas** (módulo de coleta, módulo de alertas, painel, treinamento) e não por fases. *Limitação:* uma EAP orientada a fases pode omitir entregas e dificultar a regra dos 100%.

## 10. Atenção para a prova

*Inferência técnica e recomendação pedagógica; sem atribuir frequência à banca.*

- **7ª edição: 12 princípios e 8 domínios de desempenho**; **6ª: 5 grupos de processos e 10 áreas de conhecimento**. Não misturar.
- A 7ª edição é **orientada a valor e princípios** e **neutra** quanto à abordagem; adequação é central.
- **EAP** é a **representação hierárquica do escopo**, decomposta até pacotes de trabalho — não é cronograma, nem análise de risco, nem técnica de estimativa de custos, nem plano estratégico.
- Valor agregado: memorizar CPI = EV/AC e SPI = EV/PV e a interpretação de valores maiores ou menores que 1.
- A cascata/preditiva tem **fases sequenciais e lineares**; os domínios de desempenho **não** são sequenciais.
- *Evidência histórica (amostra de duas provas):* a Prova 6 de 2023 (Q67) perguntou o que é a EAP "de acordo com o PMBOK"; a Prova 15 de 2018 também trouxe a EAP (Q63), uma questão com CPI e SPI em cenário de mudança de escopo (Q62) e uma sobre restrições do projeto (Q66), todas segundo a edição então vigente (6ª). As provas catalogadas **não** trouxeram questões sobre os princípios ou domínios da 7ª edição; duas provas não permitem inferir frequência, e o edital de 2026 cita expressamente a 7ª edição.

## 11. Síntese

- PMBOK 7 (2021): *Standard* (12 princípios + sistema de entrega de valor) e *Guide* (8 domínios, adequação, modelos/métodos/artefatos).
- Mudança: de **processos** para **princípios e valor**; abordagem neutra; adequação central.
- Domínios: partes interessadas, equipe, abordagem de desenvolvimento e ciclo de vida, planejamento, trabalho do projeto, entrega, mensuração, incerteza.
- Abordagens: preditiva, iterativa, incremental, adaptativa, híbrida.
- EAP: decomposição do escopo em pacotes de trabalho; regra dos 100%; dicionário da EAP.
- EVM: CV, SV, CPI, SPI, EAC.
- A 8ª edição (nov./2025) existe; o edital cita a 7ª.

## 12. Pontos para a futura produção de questões (registro)

Conceitos: princípios; domínios; sistema de entrega de valor; adequação; abordagens; EAP; EVM. Distinções: 6ª×7ª; princípio×processo; EAP×cronograma; iterativa×incremental. Interpretação: qual domínio cobre uma atividade; qual abordagem convém a um cenário; calcular e interpretar CPI/SPI.

## 13. Referências

- PROJECT MANAGEMENT INSTITUTE. *The Standard for Project Management and A Guide to the Project Management Body of Knowledge (PMBOK® Guide)*. 7th ed. PMI, 2021 — **edição, ano e a estrutura 12 princípios/8 domínios verificados online em 2026-10-31** (por fontes secundárias; o texto integral do PMI não foi consultado).
- PROJECT MANAGEMENT INSTITUTE. *PMBOK® Guide*. 8th ed. (publicação em nov./2025) — existência verificada por fontes secundárias; **conteúdo não utilizado**.
- PROJECT MANAGEMENT INSTITUTE. *A Guide to the PMBOK® Guide*. 6th ed., 2017 — para a comparação; **não verificado online nesta etapa**.
- Os enunciados dos 12 princípios, a classificação de modelos/métodos/artefatos e a descrição dos domínios são **resumos didáticos** baseados em conhecimento do autor do material; **não foram confrontados com o texto do PMI** nesta etapa.
- Edital Transpetro nº 04/2026.4, Anexo IV, item 2.4.
