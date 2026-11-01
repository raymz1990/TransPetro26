---
modulo: 03-processos-gerenciamento
arquivo: 01-fundamentos-processos
itens_edital:
  - "3 Processos, grupos de processos e área de conhecimento."
ids_matriz: ["E5-033"]
escopo: "A — conteúdo expresso no edital (item 3, sem subitens). Interpretação aprovada pelo usuário: grupos de processos e áreas de conhecimento do gerenciamento de projetos; BPM é complemento (`04-gerenciamento-processos.md`, escopo C)."
tipo_conteudo: "teoria"
status: "VALIDADO"
ultima_atualizacao: "2026-10-31"
---

# Fundamentos: Processos no Gerenciamento de Projetos

**Módulo:** M03 — Processos, grupos de processos e áreas de conhecimento
**Texto oficial (Anexo IV):** 3 "Processos, grupos de processos e área de conhecimento." (item sem subitens; a redação é genérica e não indica o referencial).
**Interpretação adotada (decisão do usuário, 2026-10-31):** o item trata dos **processos de gerenciamento de projetos, dos cinco grupos de processos e das áreas de conhecimento** da estrutura do PMBOK Guide (6ª edição). O **gerenciamento de processos de negócio (BPM)** é **complemento (escopo C)**, não exigência expressa. Evidência em provas anteriores: as Provas 6 de 2023 (Q55, Q70) e 15 de 2018 (Q67) cobraram grupos de processos de projetos.
**Relação com o item 2.4 (PMBOK 7ª edição):** a 7ª edição **abandonou** a organização por grupos de processos e áreas de conhecimento (12 princípios e 8 domínios de desempenho; Módulo 2, arquivo `05`). Os grupos e as áreas são a estrutura da **6ª edição** (e anteriores). O edital de 2023 citava a 6ª; o de 2026 cita a 7ª no item 2.4 e mantém o item 3 com termos da 6ª. Este módulo desenvolve a estrutura por processos; **não** a mistura com a 7ª.
**Status:** `VALIDADO` (aprovado pelo usuário em 2026-10-31, com ressalvas: atribuição individual dos processos aos grupos, fórmulas e técnicas sem confronto com o texto do PMI — ver `docs/qualidade/relatorio-producao-modulo-03.md`).

**Objetivos de aprendizagem.** (1) Definir processo e explicar entradas, ferramentas e técnicas e saídas; (2) explicar a relação entre processos, grupos de processos, áreas de conhecimento e ciclo de vida; (3) compreender a interação entre processos e o ciclo PDCA; (4) situar a estrutura por processos frente à 7ª edição.

---

## 1. Introdução

Gerenciar um projeto não é uma única atividade, e sim um **conjunto de processos** interligados. Cada processo tem um propósito (por exemplo, desenvolver o termo de abertura, estimar custos, controlar o cronograma). O PMBOK (6ª edição) organiza **49 processos** de duas formas complementares: por **grupos de processos** (*quando* acontecem na lógica do gerenciamento: iniciar, planejar, executar, monitorar e controlar, encerrar) e por **áreas de conhecimento** (*sobre o que* tratam: escopo, cronograma, custos etc.). Este arquivo apresenta os fundamentos; os arquivos `02` e `03` desenvolvem os grupos e as áreas.

## 2. Fundamentos teóricos

### 2.1 O que é um processo

**Processo** é um conjunto de atividades inter-relacionadas que, a partir de **entradas**, produzem **saídas** para um resultado pretendido (definição de uso geral, equivalente à da ISO 9000:2015; confirmar na norma). No PMBOK, um processo descreve **o que fazer**, não *quem* nem *como* detalhadamente.

```text
 Entradas ──► [ Ferramentas e técnicas ] ──► Saídas
   (o que se recebe)   (como se faz)         (o que se produz)
```

- **Entradas:** documentos, planos, informações e dados necessários ao processo (por exemplo, o termo de abertura é entrada do planejamento).
- **Ferramentas e técnicas:** meios aplicados às entradas para gerar saídas (reuniões, análise de dados, estimativa, opinião especializada).
- **Saídas:** produtos, resultados ou documentos gerados (planos, relatórios, entregas, solicitações de mudança).

A abreviação **ITTO** (*Inputs, Tools and Techniques, Outputs*) resume a estrutura descritiva de cada processo na 6ª edição.

### 2.2 Dois tipos de processos em um projeto

| Tipo | Foco | Exemplo |
|---|---|---|
| **Processos de gerenciamento de projetos** | Iniciar, planejar, executar, monitorar e encerrar o projeto; são genéricos e aplicáveis a qualquer setor | Desenvolver o plano de gerenciamento do projeto |
| **Processos orientados ao produto** | Especificar e criar o **produto** do projeto; dependem do ciclo de vida do produto e da área de aplicação | Projetar, construir e testar um sistema; construir uma tubulação |

O PMBOK trata os **processos de gerenciamento de projetos**; os orientados ao produto são definidos por cada setor (por exemplo, o ciclo de vida de desenvolvimento de software, Módulo 5, item 5.2).

### 2.3 Interação entre processos

- As **saídas** de um processo são **entradas** de outros (a EAP, saída de "Criar a EAP", é entrada de "Definir as atividades").
- Os processos **se sobrepõem e interagem**: não são rotinas isoladas nem estritamente sequenciais.
- O planejamento é **iterativo e de elaboração progressiva**: planos são refinados à medida que se aprende mais.
- Os processos são **aplicados em cada fase** do projeto, não somente uma vez.

### 2.4 Grupos de processos, áreas de conhecimento e ciclo de vida

| Conceito | Definição | Relação |
|---|---|---|
| **Grupo de processos** | Agrupamento **lógico** de processos de gerenciamento de projetos, segundo a natureza do trabalho (iniciar, planejar, executar, monitorar e controlar, encerrar) | **Não** são fases do projeto |
| **Área de conhecimento** | Conjunto de conceitos, termos e atividades de um **campo de especialização** de gerenciamento de projetos (integração, escopo, cronograma, custos, qualidade, recursos, comunicações, riscos, aquisições, partes interessadas) | Cada processo pertence a **uma** área e a **um** grupo |
| **Ciclo de vida do projeto** | Série de **fases** que o projeto percorre do início ao fim (por exemplo, viabilidade, projeto, construção, testes, implantação) | Os grupos de processos são **aplicados dentro de cada fase** |

Cada um dos 49 processos fica na interseção de **uma área** com **um grupo**. Por isso fala-se em matriz grupos × áreas (arquivo `03`).

*Exemplo (didático):* "Estimar custos" pertence à **área de Custos** e ao **grupo de Planejamento**. "Controlar custos" pertence à **área de Custos** e ao **grupo de Monitoramento e Controle**. Um projeto com três fases pode executar o grupo de Planejamento em cada fase (planejamento da fase), sem que "Planejamento" seja uma fase.

### 2.5 O ciclo PDCA e os grupos de processos

Os grupos de processos refletem o ciclo **PDCA** (*Plan–Do–Check–Act*, de Shewhart/Deming): **Planejar** → **Executar** → **Verificar** (monitorar) → **Agir** (controlar e ajustar). Planejamento corresponde a "Plan"; Execução a "Do"; Monitoramento e Controle a "Check/Act". A Iniciação e o Encerramento delimitam o ciclo do projeto.

### 2.6 Documentos de referência dos processos

| Tipo | Exemplos |
|---|---|
| **Termo de abertura do projeto** (*project charter*) | Autoriza formalmente o projeto e o gerente; resultado do processo de iniciação |
| **Plano de gerenciamento do projeto** | Integra os planos subsidiários (escopo, cronograma, custos, qualidade, recursos, comunicações, riscos, aquisições, partes interessadas) e as **linhas de base** |
| **Linhas de base** | Escopo, cronograma e custos aprovados, contra os quais se mede o desempenho |
| **Documentos do projeto** | Registro de riscos, registro de partes interessadas, registro de lições aprendidas, requisitos |
| **Solicitações de mudança** | Pedidos formais para alterar escopo, cronograma, custos ou outros elementos |
| **Fatores ambientais da empresa e ativos de processos organizacionais** | Condições e ativos que influenciam e apoiam os processos (Módulo 2, arquivo `01`) |

### 2.7 Adequação (*tailoring*)

Os processos **não são aplicados de forma rígida**: o gerente de projetos e a equipe **adequam** quais processos usar e com que rigor, conforme tamanho, complexidade, risco, abordagem (preditiva, ágil, híbrida) e cultura. Em projetos ágeis, as atividades dos processos ocorrem em ciclos curtos, mantendo-se os resultados de cada grupo (por exemplo, planejamento por iteração e retrospectivas).

## 3. Comparações conceituais

| Conceito A | Conceito B | Diferença principal |
|---|---|---|
| Processo | Fase | Conjunto de atividades com entradas e saídas × segmento do ciclo de vida do projeto |
| Grupo de processos | Fase do projeto | Agrupamento lógico, repetido em cada fase × etapa cronológica do ciclo de vida |
| Grupo de processos | Área de conhecimento | Agrupa por natureza do trabalho (iniciar, planejar…) × agrupa por especialização (escopo, custos…) |
| Processo de gerenciamento | Processo orientado ao produto | Como gerenciar o projeto × como construir o produto |
| Entrada | Saída | O que o processo recebe × o que produz |
| PMBOK 6 | PMBOK 7 | 5 grupos, 10 áreas, 49 processos × 12 princípios e 8 domínios |

## 4. Aplicações e cenários

**Cenário (didático): onde o "Planejamento" aparece em um projeto de três fases.** Um projeto de implantação de sistema tem as fases *Análise*, *Construção* e *Implantação*. O grupo de **Iniciação** ocorre no início (e ao iniciar cada fase, se necessário); o de **Planejamento** é aplicado no começo e refinado a cada fase; o de **Execução** realiza o trabalho de cada fase; o de **Monitoramento e Controle** acompanha **durante todo o projeto**; o de **Encerramento** encerra cada fase e o projeto. *Conclusão:* os grupos se **repetem** nas fases; não equivalem a elas.

## 5. Atenção para a prova

*Inferência técnica e recomendação pedagógica; sem atribuir frequência à banca.*

- **Grupos de processos não são fases do projeto**: alternativas que os tratam como etapas cronológicas únicas são incorretas.
- Cada processo pertence a **uma área** e a **um grupo**.
- Distinguir **entradas, ferramentas e técnicas e saídas**.
- Conferir **a edição do PMBOK** citada: grupos/áreas = 6ª; princípios/domínios = 7ª.
- *Evidência histórica (amostra de duas provas):* a Prova 6 de 2023 (Q55: sequência dos processos a partir da autorização formal; Q70: grupo responsável por monitorar, rastrear e revisar o progresso) e a Prova 15 de 2018 (Q67: atividade antes de passar às próximas fases, "validar escopo") tocaram este item. Duas provas não permitem inferir frequência.

## 6. Síntese

- Processo: atividades inter-relacionadas que transformam entradas em saídas (ITTO).
- PMBOK 6: 49 processos, 5 grupos, 10 áreas; cada processo em um grupo e uma área.
- Grupos ≠ fases; repetem-se em cada fase.
- Processos de gerenciamento (genéricos) × orientados ao produto.
- Interação: saídas viram entradas; elaboração progressiva; adequação.
- PDCA: Planejar–Executar–Monitorar/Controlar.
- 7ª edição: princípios e domínios em lugar de grupos e áreas.

## 7. Pontos para a futura produção de questões (registro)

Conceitos: processo; ITTO; grupo; área; fase. Distinções: grupo×fase; grupo×área; gerenciamento×produto. Interpretação: classificar um processo por grupo e área; identificar a edição pela terminologia.

## 8. Referências

- PROJECT MANAGEMENT INSTITUTE. *A Guide to the Project Management Body of Knowledge (PMBOK® Guide)*. 6th ed., 2017 — **estrutura (49 processos, 5 grupos, 10 áreas) confirmada em fontes secundárias em 2026-10-31**; o texto do PMI **não foi consultado** (acesso bloqueado).
- ISO 9000:2015 (definição de processo) — formulação ("conjunto de atividades inter-relacionadas ou interativas que usam entradas para entregar um resultado pretendido") atribuída à edição de 2015 por fonte secundária; **numeração da cláusula e edição vigente não verificadas** (um catálogo consultado indica a edição de 2015 como retirada; conferir a edição atual no site da ISO).
- Edital Transpetro nº 04/2026.4, Anexo IV, item 3.
