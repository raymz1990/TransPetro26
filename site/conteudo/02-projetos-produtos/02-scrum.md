---
modulo: 02-projetos-produtos
arquivo: 02-scrum
itens_edital:
  - "2.1 Scrum e Kanban"
ids_matriz: ["E5-026"]
escopo: "A — conteúdo expresso no edital (parte Scrum; Kanban em `03-kanban.md`). Práticas como story points, velocity e planning poker são complemento B, não definidas pelo Scrum Guide."
tipo_conteudo: "teoria"
status: "VALIDADO"
ultima_atualizacao: "2026-10-31"
---

# Scrum (e Fundamentos do Pensamento Ágil)

**Módulo:** M02 — Gerenciamento de Projetos e Produtos
**Texto oficial (Anexo IV):** 2.1 "Scrum e Kanban" (esta parte trata do **Scrum**; o Kanban está em `03-kanban.md`).
**Escopo:** A para o Scrum; B para o Manifesto Ágil (contexto) e para práticas não prescritas pelo guia (story points, velocity, planning poker, gráficos de burndown).
**Versão de referência:** *Scrum Guide* de **2020** (Schwaber e Sutherland), verificado em scrumguides.org em 2026-10-31 (a página indica a versão de 2020; não verifiquei o histórico de revisões).
**Status:** `VALIDADO` (aprovado pelo usuário em 2026-10-31, com ressalvas: textos do PMI e princípios Lean-Agile do SAFe não verificados em fonte primária; interpretação dos itens 2.5 e 2.7 a confirmar — ver `docs/qualidade/relatorio-producao-modulo-02.md`).

**Objetivos de aprendizagem.** (1) Explicar o contexto e os valores do pensamento ágil; (2) descrever a teoria, os valores, o time, os eventos e os artefatos do Scrum com suas **responsabilidades** e **prazos máximos**; (3) distinguir Scrum de abordagens preditivas e de Kanban; (4) reconhecer erros conceituais frequentes.

---

## 1. Introdução

**Scrum** é um *framework* (arcabouço) leve para que pessoas, times e organizações gerem valor por meio de **soluções adaptativas para problemas complexos**. Baseia-se no **empirismo** (decidir com base na experiência e no que se observa) e no **pensamento *lean*** (reduzir desperdício, focar no essencial), e funciona em **ciclos curtos (Sprints)** que produzem incrementos utilizáveis. É um *framework*, **não** uma metodologia completa nem um processo detalhado: o Scrum Guide define o mínimo e deixa livre a escolha de técnicas e ferramentas.

*Relações:* o Scrum é um dos pilares do item 2.1; é a base sobre a qual o SAFe escala (item 2.3, arquivo `04`); a **história do usuário** (item 6.2, Módulo 6) e o **ciclo de vida** (item 5.2, Módulo 5) o complementam; o PMBOK 7ª edição reconhece abordagens adaptativas (arquivo `05`).

## 2. Contexto: o pensamento ágil

### 2.1 Manifesto Ágil (2001)

O **Manifesto para o Desenvolvimento Ágil de Software** declara quatro valores — "valorizamos mais" os itens da esquerda, sem desprezar os da direita:

| Valorizamos mais | do que |
|---|---|
| **Indivíduos e interações** | Processos e ferramentas |
| **Software em funcionamento** | Documentação abrangente |
| **Colaboração com o cliente** | Negociação de contratos |
| **Responder a mudanças** | Seguir um plano |

Os **doze princípios** reforçam, entre outros: entrega **contínua e antecipada** de valor; acolher mudanças de requisitos; entregas frequentes (semanas a poucos meses); colaboração diária entre negócio e desenvolvedores; equipes motivadas e autoorganizadas; conversa face a face; software funcionando como medida de progresso; ritmo sustentável; atenção à excelência técnica; **simplicidade** (maximizar o trabalho não realizado); reflexão periódica para ajustar o comportamento.

### 2.2 Abordagem preditiva × ágil

| Critério | Preditiva (por exemplo, cascata) | Ágil (por exemplo, Scrum) |
|---|---|---|
| Planejamento | Detalhado no início | Contínuo, em ondas |
| Escopo | Definido e controlado por mudanças formais | Evolutivo, priorizado em backlog |
| Entrega | Ao final (ou por grandes marcos) | **Incrementos frequentes** |
| Mudanças | Custosas, exigem controle formal | Esperadas e bem-vindas |
| Fases | **Sequenciais e lineares**; cada fase depende da conclusão da anterior | Iterativas e incrementais |
| Feedback do cliente | Tardio | Constante |
| Ideal quando | Requisitos estáveis, risco baixo de mudança | Incerteza e mudanças frequentes |

O **modelo em cascata** é o exemplo clássico da abordagem sequencial: fases (requisitos, projeto, construção, testes, implantação) executadas **uma após a outra**. O Scrum **não** é sequencial por fases: cada Sprint percorre de forma integrada análise, projeto, construção e teste.

## 3. Teoria e valores do Scrum

### 3.1 Os três pilares do empirismo

| Pilar | Significado |
|---|---|
| **Transparência** | O trabalho e o progresso são visíveis a quem os realiza e a quem os recebe, com padrão comum de entendimento |
| **Inspeção** | Inspeciona-se com frequência os artefatos e o progresso, para detectar variações indesejáveis |
| **Adaptação** | Ajusta-se o processo ou o que está sendo feito quando se detecta desvio |

### 3.2 Valores

**Compromisso (*Commitment*)**, **Foco**, **Abertura**, **Respeito** e **Coragem**.

## 4. O Scrum Team e suas responsabilidades

O **Scrum Team** é a unidade fundamental: **um Scrum Master, um Product Owner e Desenvolvedores**. Não há subtimes nem hierarquias dentro dele. É **multifuncional** (reúne as habilidades necessárias para criar valor a cada Sprint) e **autogerenciado** (decide internamente quem faz o quê, quando e como). Em geral tem **dez pessoas ou menos**. É responsável por todas as atividades relacionadas ao produto: colaboração com partes interessadas, verificação, manutenção, operação, experimentação, pesquisa e desenvolvimento.

| Responsabilidade (*accountability*) | Papel |
|---|---|
| **Desenvolvedores (*Developers*)** | Pessoas do time comprometidas em criar **qualquer aspecto de um Incremento utilizável** a cada Sprint. Criam o **plano da Sprint** (Sprint Backlog), garantem qualidade aderindo à **Definição de Pronto**, adaptam o plano a cada dia rumo à **Meta da Sprint** e responsabilizam-se mutuamente |
| **Product Owner (PO)** | Responsável por **maximizar o valor do produto** resultante do trabalho do time. Desenvolve e comunica a **Meta do Produto**; cria e comunica itens do Product Backlog; **ordena** (prioriza) os itens; garante que o backlog seja transparente. É **uma pessoa**, não um comitê; as decisões são respeitadas |
| **Scrum Master** | Responsável por **estabelecer o Scrum** conforme o guia, ajudando todos a entender a teoria e a prática. **Líder-servidor**: serve ao time (coaching, remoção de impedimentos, facilitação), ao PO (técnicas de definição de meta e gestão do backlog, apoio ao planejamento do produto) e à organização (adoção do Scrum, treinamento, remoção de barreiras) |

*Terminologia histórica:* até o Scrum Guide de 2017 falava-se em "Papéis" e em **Time de Desenvolvimento** (*Development Team*); a edição de 2020 usa "responsabilidades" e **Desenvolvedores**, e enfatiza **um único** Scrum Team com foco no produto. Questões antigas podem usar a terminologia anterior e "reunião" no lugar de "evento".

## 5. Eventos do Scrum

Todos os eventos têm **duração máxima** (*timebox*) e ocorrem **dentro da Sprint**. Os prazos abaixo valem para uma Sprint de **um mês**; para Sprints mais curtas, o evento costuma ser proporcionalmente menor.

| Evento | Finalidade | Participantes | Duração máxima (Sprint de 1 mês) |
|---|---|---|---|
| **Sprint** | Contêiner dos demais eventos; produz um ou mais Incrementos; duração **fixa de um mês ou menos** e consistente | Scrum Team | ≤ 1 mês |
| **Sprint Planning (Planejamento da Sprint)** | Define **por que** a Sprint é valiosa (Meta da Sprint), **o que** pode ser feito (itens do backlog) e **como** o trabalho será realizado | Scrum Team | **8 horas** |
| **Daily Scrum (Reunião Diária)** | Inspecionar o progresso rumo à **Meta da Sprint** e adaptar o Sprint Backlog; **15 minutos**, mesmo horário e local | Desenvolvedores (PO e SM participam se estiverem trabalhando em itens da Sprint) | **15 minutos** |
| **Sprint Review (Revisão da Sprint)** | Inspecionar o **resultado** da Sprint e determinar adaptações futuras; sessão de trabalho com as partes interessadas, **não** uma apresentação; o Product Backlog pode ser ajustado | Scrum Team e partes interessadas | **4 horas** |
| **Sprint Retrospective (Retrospectiva da Sprint)** | Planejar maneiras de aumentar a **qualidade e a eficácia** do time (pessoas, interações, processos, ferramentas, Definição de Pronto); **conclui a Sprint**, ocorre **após a Revisão** e antes da próxima Sprint | Scrum Team | **3 horas** |

*Pontos de atenção:*

- A **Retrospectiva** vem **depois** da Revisão e **antes** do Planejamento da Sprint seguinte.
- Nova Sprint **começa imediatamente** após a anterior; não há intervalo entre Sprints.
- Durante a Sprint: **não** se fazem mudanças que coloquem em risco a **Meta da Sprint**; a **qualidade** não diminui; o Product Backlog é **refinado** conforme necessário; o **escopo pode ser esclarecido e renegociado** com o PO à medida que se aprende mais.
- Somente o **Product Owner** pode **cancelar** uma Sprint (por exemplo, se a Meta da Sprint se tornar obsoleta).
- O **refinamento do Product Backlog** é atividade contínua (detalhar, estimar, ordenar itens), e não um evento formal.

```text
 Product Backlog ──► SPRINT PLANNING ──► [ SPRINT (≤ 1 mês) ]
                                            │  Daily Scrum (15 min/dia)
                                            │  desenvolvimento do Incremento
                                            ▼
                                    SPRINT REVIEW ──► SPRINT RETROSPECTIVE ──► próxima Sprint
```

## 6. Artefatos e seus compromissos

O Scrum define três artefatos, cada um com um **compromisso** que reforça a transparência e o foco:

| Artefato | O que é | Compromisso associado |
|---|---|---|
| **Product Backlog** | Lista **ordenada e emergente** do que é necessário para melhorar o produto; única fonte de trabalho do Scrum Team | **Meta do Produto** (*Product Goal*): estado futuro do produto, objetivo de longo prazo do time |
| **Sprint Backlog** | Meta da Sprint (**por quê**) + itens selecionados do Product Backlog (**o quê**) + plano para entregá-los (**como**); plano **dos Desenvolvedores**, visível em tempo real | **Meta da Sprint** (*Sprint Goal*): objetivo único da Sprint |
| **Incremento** | Passo concreto rumo à Meta do Produto; soma de todos os itens concluídos, **utilizável** e verificado | **Definição de Pronto** (*Definition of Done*): descreve o estado do Incremento quando atende às medidas de qualidade |

- Um item só integra o Incremento se **atender à Definição de Pronto**; se não atender, não pode ser liberado nem apresentado na Revisão e **volta ao Product Backlog**.
- Se a Definição de Pronto de um Incremento fizer parte dos padrões da organização, todos os times devem segui-la no mínimo; caso contrário, o Scrum Team a cria.
- **Definição de Pronto** (qualidade do Incremento, comum a todos os itens) ≠ **critérios de aceitação** (condições específicas de cada item/história).

## 7. Práticas comuns não prescritas pelo Scrum Guide (complemento B)

O guia não exige as práticas abaixo, mas elas são muito usadas com o Scrum:

| Prática | Descrição |
|---|---|
| **História do usuário (*user story*)** | Descrição curta de uma necessidade do ponto de vista do usuário ("Como [papel], quero [ação], para [benefício]") — desenvolvida no item 6.2 (Módulo 6) |
| **Estimativa em *story points*** | Unidade **relativa** de esforço/complexidade/incerteza de um item (não equivale a horas) |
| **Planning poker** | Técnica de estimativa em grupo com cartas; escala típica **modificada de Fibonacci**: 0, 1, 2, 3, 5, 8, 13, 20, 40, 100 |
| **Velocity (velocidade)** | Quantidade de *story points* concluídos por Sprint; usada para previsão (não para comparar times) |
| **Burndown/Burnup** | Gráficos de trabalho restante/concluído ao longo do tempo |
| **Quadro de tarefas (*task board*)** | Visualização do Sprint Backlog (A fazer, Em andamento, Feito) |
| **Critérios de aceitação** | Condições para considerar uma história atendida |
| **Pontos de função** | Métrica de tamanho funcional, usada em outros contextos (não é prática do Scrum) |

*Observação:* a sequência de cartas acima segue uma escala **não linear**: a incerteza cresce com o tamanho, por isso os intervalos aumentam.

## 8. Comparações conceituais

| Conceito A | Conceito B | Diferença principal |
|---|---|---|
| Scrum | Cascata | Iterativo e incremental, com entregas por Sprint × sequencial por fases |
| Scrum | Kanban | Sprints de duração fixa, papéis e eventos × fluxo contínuo, limite de WIP (arquivo `03`) |
| Product Owner | Scrum Master | Maximiza o valor do produto e ordena o backlog × garante o entendimento e a prática do Scrum e remove impedimentos |
| Scrum Master | Gerente de projetos tradicional | Líder-servidor, não gerencia o time nem aloca tarefas × planeja, aloca e controla |
| Product Backlog | Sprint Backlog | Lista do produto (todo o trabalho previsto) × itens selecionados para a Sprint + plano |
| Meta do Produto | Meta da Sprint | Objetivo de longo prazo × objetivo da Sprint |
| Sprint Review | Sprint Retrospective | Inspeciona o **produto** (Incremento) × inspeciona o **processo** e o time |
| Definição de Pronto | Critérios de aceitação | Qualidade do Incremento × condições de cada item |
| *Story points* | Horas | Medida relativa × tempo absoluto |

## 9. Aplicações e cenários

**Cenário (didático): portal interno de ordens de serviço.** O PO mantém o backlog ordenado por valor (por exemplo, abertura de ordem pelo celular antes de relatórios). Na Planning, o time define a Meta da Sprint ("técnicos conseguem abrir e consultar ordens pelo celular"), seleciona itens e planeja tarefas. Diariamente, na Daily Scrum, inspeciona o progresso. Na Review, usuários testam o Incremento e sugerem ajustes; na Retrospectiva, o time decide melhorar a revisão de código. *Limitação:* depende de acesso a usuários e de um PO com autoridade.

**Cenário (didático): problemas típicos (anti-padrões).** (a) A Daily vira relatório de status ao gerente; (b) o PO é um comitê; (c) o Scrum Master atua como chefe do time; (d) a Retrospectiva é descartada por falta de tempo; (e) itens "quase prontos" são contados como entrega. Todos contrariam o guia.

## 10. Atenção para a prova

*Inferência técnica e recomendação pedagógica; sem atribuir frequência à banca.*

- Memorizar **eventos, responsáveis e *timeboxes*** (Sprint ≤ 1 mês; Planning 8 h; Daily 15 min; Review 4 h; Retro 3 h, para Sprint de um mês).
- **Retrospectiva** = após a Revisão; **Revisão** = inspeciona o Incremento; **Retrospectiva** = inspeciona o processo.
- A **Daily** é dos Desenvolvedores e serve ao **plano da Sprint**; não é relatório de status.
- O Scrum **não define** *story points*, *velocity* nem *burndown*; são práticas complementares.
- Nada de "Scrum prevê um gerente de projetos" ou "o Scrum prescreve fases sequenciais".
- Distinguir terminologia de 2017 e 2020 (Time de Desenvolvimento × Desenvolvedores; papéis × responsabilidades).
- *Evidência histórica (amostra de duas provas):* a Prova 15 de 2018 perguntou **quando ocorre a Reunião de Retrospectiva** (Q28) e **a escala de cartas de pontos de história** (Q31), com terminologia da época; a Prova 6 de 2023 (Q65) comparou Scrum e Kanban. Duas provas não permitem inferir frequência.

## 11. Síntese

- Scrum: *framework* empírico (transparência, inspeção, adaptação); valores (compromisso, foco, abertura, respeito, coragem).
- Scrum Team: Scrum Master + Product Owner + Desenvolvedores; ≤ 10 pessoas; multifuncional e autogerenciado.
- Eventos: Sprint (≤ 1 mês), Planning (8 h), Daily (15 min), Review (4 h), Retro (3 h).
- Artefatos e compromissos: Product Backlog (Meta do Produto); Sprint Backlog (Meta da Sprint); Incremento (Definição de Pronto).
- PO: valor e backlog; SM: Scrum e remoção de impedimentos; Desenvolvedores: Incremento e plano.
- Práticas complementares: história, story points, planning poker, velocity, burndown.

## 12. Pontos para a futura produção de questões (registro)

Conceitos: pilares e valores; time; eventos e prazos; artefatos e compromissos. Distinções: PO×SM; Review×Retro; Product×Sprint Backlog; Definição de Pronto×critérios de aceitação; Scrum×cascata×Kanban. Interpretação: em que evento determinada atividade ocorre; quem é responsável por quê; se uma prática é parte do Scrum.

## 13. Referências

- SCHWABER, K.; SUTHERLAND, J. *The Scrum Guide*. Nov. 2020. https://scrumguides.org — **verificado em 2026-10-31** (versão de 2020, responsabilidades, eventos, prazos, artefatos, compromissos e valores).
- *Manifesto for Agile Software Development* (2001), https://agilemanifesto.org e /principles.html — **verificado em 2026-10-31** (quatro pares de valores e doze princípios).
- Edital Transpetro nº 04/2026.4, Anexo IV, item 2.1.
