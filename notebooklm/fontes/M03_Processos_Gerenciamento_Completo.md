# Módulo M03 — Processos, Grupos de Processos e Áreas de Conhecimento

## Identificação
- Concurso: Processo Seletivo Público TRANSPETRO 2026.4 (Edital nº 04/2026)
- Ênfase: 5 — Análise de Sistemas: Processos de Negócios
- Banca: Fundação Cesgranrio
- Módulo: M03 — Processos, Grupos de Processos e Áreas de Conhecimento
- Gerado em: 2026-11-07, por `tools/build_notebooklm.py`, a partir de `conteudo/03-processos-gerenciamento/` (fonte de verdade; não editar este arquivo)
- Situação do conteúdo nos arquivos de origem: EM_REVISAO, VALIDADO (com ressalvas nos relatórios de produção em `docs/qualidade/`)

## Como usar este documento
É material de estudo do projeto, **não** é texto oficial do edital nem da banca. O escopo oficial é o Anexo IV do edital. Trechos marcados como complemento, aprofundamento ou estratégia **não** são exigência literal do edital. Referências indicadas como "não verificadas" ou "de memória" devem ser conferidas na fonte primária. Não afirme incidência de tema em prova sem evidência documental.

## Conteúdo

---

## Fundamentos: Processos no Gerenciamento de Projetos

**Módulo:** M03 — Processos, grupos de processos e áreas de conhecimento
**Texto oficial (Anexo IV):** 3 "Processos, grupos de processos e área de conhecimento." (item sem subitens; a redação é genérica e não indica o referencial).
**Interpretação adotada (decisão do usuário, 2026-10-31):** o item trata dos **processos de gerenciamento de projetos, dos cinco grupos de processos e das áreas de conhecimento** da estrutura do PMBOK Guide (6ª edição). O **gerenciamento de processos de negócio (BPM)** é **complemento (escopo C)**, não exigência expressa. Evidência em provas anteriores: as Provas 6 de 2023 (Q55, Q70) e 15 de 2018 (Q67) cobraram grupos de processos de projetos.
**Relação com o item 2.4 (PMBOK 7ª edição):** a 7ª edição **abandonou** a organização por grupos de processos e áreas de conhecimento (12 princípios e 8 domínios de desempenho; Módulo 2, arquivo `05`). Os grupos e as áreas são a estrutura da **6ª edição** (e anteriores). O edital de 2023 citava a 6ª; o de 2026 cita a 7ª no item 2.4 e mantém o item 3 com termos da 6ª. Este módulo desenvolve a estrutura por processos; **não** a mistura com a 7ª.
**Status:** `VALIDADO` (aprovado pelo usuário em 2026-10-31, com ressalvas: atribuição individual dos processos aos grupos, fórmulas e técnicas sem confronto com o texto do PMI — ver `docs/qualidade/relatorio-producao-modulo-03.md`).

**Objetivos de aprendizagem.** (1) Definir processo e explicar entradas, ferramentas e técnicas e saídas; (2) explicar a relação entre processos, grupos de processos, áreas de conhecimento e ciclo de vida; (3) compreender a interação entre processos e o ciclo PDCA; (4) situar a estrutura por processos frente à 7ª edição.

---

### 1. Introdução

Gerenciar um projeto não é uma única atividade, e sim um **conjunto de processos** interligados. Cada processo tem um propósito (por exemplo, desenvolver o termo de abertura, estimar custos, controlar o cronograma). O PMBOK (6ª edição) organiza **49 processos** de duas formas complementares: por **grupos de processos** (*quando* acontecem na lógica do gerenciamento: iniciar, planejar, executar, monitorar e controlar, encerrar) e por **áreas de conhecimento** (*sobre o que* tratam: escopo, cronograma, custos etc.). Este arquivo apresenta os fundamentos; os arquivos `02` e `03` desenvolvem os grupos e as áreas.

### 2. Fundamentos teóricos

#### 2.1 O que é um processo

**Processo** é um conjunto de atividades inter-relacionadas que, a partir de **entradas**, produzem **saídas** para um resultado pretendido (definição de uso geral, equivalente à da ISO 9000:2015; confirmar na norma). No PMBOK, um processo descreve **o que fazer**, não *quem* nem *como* detalhadamente.

```text
 Entradas ──► [ Ferramentas e técnicas ] ──► Saídas
   (o que se recebe)   (como se faz)         (o que se produz)
```

- **Entradas:** documentos, planos, informações e dados necessários ao processo (por exemplo, o termo de abertura é entrada do planejamento).
- **Ferramentas e técnicas:** meios aplicados às entradas para gerar saídas (reuniões, análise de dados, estimativa, opinião especializada).
- **Saídas:** produtos, resultados ou documentos gerados (planos, relatórios, entregas, solicitações de mudança).

A abreviação **ITTO** (*Inputs, Tools and Techniques, Outputs*) resume a estrutura descritiva de cada processo na 6ª edição.

#### 2.2 Dois tipos de processos em um projeto

| Tipo | Foco | Exemplo |
|---|---|---|
| **Processos de gerenciamento de projetos** | Iniciar, planejar, executar, monitorar e encerrar o projeto; são genéricos e aplicáveis a qualquer setor | Desenvolver o plano de gerenciamento do projeto |
| **Processos orientados ao produto** | Especificar e criar o **produto** do projeto; dependem do ciclo de vida do produto e da área de aplicação | Projetar, construir e testar um sistema; construir uma tubulação |

O PMBOK trata os **processos de gerenciamento de projetos**; os orientados ao produto são definidos por cada setor (por exemplo, o ciclo de vida de desenvolvimento de software, Módulo 5, item 5.2).

#### 2.3 Interação entre processos

- As **saídas** de um processo são **entradas** de outros (a EAP, saída de "Criar a EAP", é entrada de "Definir as atividades").
- Os processos **se sobrepõem e interagem**: não são rotinas isoladas nem estritamente sequenciais.
- O planejamento é **iterativo e de elaboração progressiva**: planos são refinados à medida que se aprende mais.
- Os processos são **aplicados em cada fase** do projeto, não somente uma vez.

#### 2.4 Grupos de processos, áreas de conhecimento e ciclo de vida

| Conceito | Definição | Relação |
|---|---|---|
| **Grupo de processos** | Agrupamento **lógico** de processos de gerenciamento de projetos, segundo a natureza do trabalho (iniciar, planejar, executar, monitorar e controlar, encerrar) | **Não** são fases do projeto |
| **Área de conhecimento** | Conjunto de conceitos, termos e atividades de um **campo de especialização** de gerenciamento de projetos (integração, escopo, cronograma, custos, qualidade, recursos, comunicações, riscos, aquisições, partes interessadas) | Cada processo pertence a **uma** área e a **um** grupo |
| **Ciclo de vida do projeto** | Série de **fases** que o projeto percorre do início ao fim (por exemplo, viabilidade, projeto, construção, testes, implantação) | Os grupos de processos são **aplicados dentro de cada fase** |

Cada um dos 49 processos fica na interseção de **uma área** com **um grupo**. Por isso fala-se em matriz grupos × áreas (arquivo `03`).

*Exemplo (didático):* "Estimar custos" pertence à **área de Custos** e ao **grupo de Planejamento**. "Controlar custos" pertence à **área de Custos** e ao **grupo de Monitoramento e Controle**. Um projeto com três fases pode executar o grupo de Planejamento em cada fase (planejamento da fase), sem que "Planejamento" seja uma fase.

#### 2.5 O ciclo PDCA e os grupos de processos

Os grupos de processos refletem o ciclo **PDCA** (*Plan–Do–Check–Act*, de Shewhart/Deming): **Planejar** → **Executar** → **Verificar** (monitorar) → **Agir** (controlar e ajustar). Planejamento corresponde a "Plan"; Execução a "Do"; Monitoramento e Controle a "Check/Act". A Iniciação e o Encerramento delimitam o ciclo do projeto.

#### 2.6 Documentos de referência dos processos

| Tipo | Exemplos |
|---|---|
| **Termo de abertura do projeto** (*project charter*) | Autoriza formalmente o projeto e o gerente; resultado do processo de iniciação |
| **Plano de gerenciamento do projeto** | Integra os planos subsidiários (escopo, cronograma, custos, qualidade, recursos, comunicações, riscos, aquisições, partes interessadas) e as **linhas de base** |
| **Linhas de base** | Escopo, cronograma e custos aprovados, contra os quais se mede o desempenho |
| **Documentos do projeto** | Registro de riscos, registro de partes interessadas, registro de lições aprendidas, requisitos |
| **Solicitações de mudança** | Pedidos formais para alterar escopo, cronograma, custos ou outros elementos |
| **Fatores ambientais da empresa e ativos de processos organizacionais** | Condições e ativos que influenciam e apoiam os processos (Módulo 2, arquivo `01`) |

#### 2.7 Adequação (*tailoring*)

Os processos **não são aplicados de forma rígida**: o gerente de projetos e a equipe **adequam** quais processos usar e com que rigor, conforme tamanho, complexidade, risco, abordagem (preditiva, ágil, híbrida) e cultura. Em projetos ágeis, as atividades dos processos ocorrem em ciclos curtos, mantendo-se os resultados de cada grupo (por exemplo, planejamento por iteração e retrospectivas).

### 3. Comparações conceituais

| Conceito A | Conceito B | Diferença principal |
|---|---|---|
| Processo | Fase | Conjunto de atividades com entradas e saídas × segmento do ciclo de vida do projeto |
| Grupo de processos | Fase do projeto | Agrupamento lógico, repetido em cada fase × etapa cronológica do ciclo de vida |
| Grupo de processos | Área de conhecimento | Agrupa por natureza do trabalho (iniciar, planejar…) × agrupa por especialização (escopo, custos…) |
| Processo de gerenciamento | Processo orientado ao produto | Como gerenciar o projeto × como construir o produto |
| Entrada | Saída | O que o processo recebe × o que produz |
| PMBOK 6 | PMBOK 7 | 5 grupos, 10 áreas, 49 processos × 12 princípios e 8 domínios |

### 4. Aplicações e cenários

**Cenário (didático): onde o "Planejamento" aparece em um projeto de três fases.** Um projeto de implantação de sistema tem as fases *Análise*, *Construção* e *Implantação*. O grupo de **Iniciação** ocorre no início (e ao iniciar cada fase, se necessário); o de **Planejamento** é aplicado no começo e refinado a cada fase; o de **Execução** realiza o trabalho de cada fase; o de **Monitoramento e Controle** acompanha **durante todo o projeto**; o de **Encerramento** encerra cada fase e o projeto. *Conclusão:* os grupos se **repetem** nas fases; não equivalem a elas.

### 5. Atenção para a prova

*Inferência técnica e recomendação pedagógica; sem atribuir frequência à banca.*

- **Grupos de processos não são fases do projeto**: alternativas que os tratam como etapas cronológicas únicas são incorretas.
- Cada processo pertence a **uma área** e a **um grupo**.
- Distinguir **entradas, ferramentas e técnicas e saídas**.
- Conferir **a edição do PMBOK** citada: grupos/áreas = 6ª; princípios/domínios = 7ª.
- *Evidência histórica (amostra de duas provas):* a Prova 6 de 2023 (Q55: sequência dos processos a partir da autorização formal; Q70: grupo responsável por monitorar, rastrear e revisar o progresso) e a Prova 15 de 2018 (Q67: atividade antes de passar às próximas fases, "validar escopo") tocaram este item. Duas provas não permitem inferir frequência.

### 6. Síntese

- Processo: atividades inter-relacionadas que transformam entradas em saídas (ITTO).
- PMBOK 6: 49 processos, 5 grupos, 10 áreas; cada processo em um grupo e uma área.
- Grupos ≠ fases; repetem-se em cada fase.
- Processos de gerenciamento (genéricos) × orientados ao produto.
- Interação: saídas viram entradas; elaboração progressiva; adequação.
- PDCA: Planejar–Executar–Monitorar/Controlar.
- 7ª edição: princípios e domínios em lugar de grupos e áreas.

### 7. Pontos para a futura produção de questões (registro)

Conceitos: processo; ITTO; grupo; área; fase. Distinções: grupo×fase; grupo×área; gerenciamento×produto. Interpretação: classificar um processo por grupo e área; identificar a edição pela terminologia.

### 8. Referências

- PROJECT MANAGEMENT INSTITUTE. *A Guide to the Project Management Body of Knowledge (PMBOK® Guide)*. 6th ed., 2017 — **estrutura (49 processos, 5 grupos, 10 áreas) confirmada em fontes secundárias em 2026-10-31**; o texto do PMI **não foi consultado** (acesso bloqueado).
- ISO 9000:2015 (definição de processo) — formulação ("conjunto de atividades inter-relacionadas ou interativas que usam entradas para entregar um resultado pretendido") atribuída à edição de 2015 por fonte secundária; **numeração da cláusula e edição vigente não verificadas** (um catálogo consultado indica a edição de 2015 como retirada; conferir a edição atual no site da ISO).
- Edital Transpetro nº 04/2026.4, Anexo IV, item 3.


---

## Os Cinco Grupos de Processos de Gerenciamento de Projetos

**Módulo:** M03 — Processos, grupos de processos e áreas de conhecimento
**Texto oficial (Anexo IV):** 3 "Processos, grupos de processos e área de conhecimento." (parte *grupos de processos*).
**Referencial:** PMBOK Guide, **6ª edição** (2017): 49 processos, 5 grupos, 10 áreas. A 7ª edição não organiza o conteúdo por grupos de processos (Módulo 2, arquivo `05`).
**Aviso de verificação (revisão de 2026-10-31):** os totais (49 processos; 5 grupos; 10 áreas) e a lista de processos por área foram conferidos em fonte secundária; os **totais por grupo (2, 24, 10, 12 e 1)** foram confirmados em várias fontes secundárias (guias de estudo), e a presença de *Adquirir recursos*, *Implementar respostas aos riscos*, *Gerenciar o conhecimento do projeto*, *Validar o escopo*, *Controlar o escopo* e *Monitorar as comunicações* nos grupos indicados foi confirmada. **A atribuição individual dos demais processos a seu grupo** vem do conhecimento do autor e é **consistente com esses totais**, mas não foi confrontada com o texto do PMI (acesso bloqueado).
**Status:** `VALIDADO` (aprovado pelo usuário em 2026-10-31, com ressalvas: atribuição individual dos processos aos grupos, fórmulas e técnicas sem confronto com o texto do PMI — ver `docs/qualidade/relatorio-producao-modulo-03.md`).

**Objetivos de aprendizagem.** (1) Descrever finalidade e características de cada grupo; (2) listar os processos de cada grupo; (3) distinguir grupos de fases; (4) reconhecer a sequência lógica entre grupos e o caráter transversal do Monitoramento e Controle; (5) identificar em qual grupo se enquadra um processo ou uma atividade descrita.

---

### 1. Introdução

Os **grupos de processos** organizam os 49 processos de gerenciamento de projetos pela **natureza do trabalho**: **Iniciação**, **Planejamento**, **Execução**, **Monitoramento e Controle** e **Encerramento**. Eles têm dependências lógicas (por exemplo, o planejamento depende do que a iniciação autorizou) mas **se repetem** durante o projeto e **não são fases**. O ciclo de vida do projeto é a sucessão de fases; em cada fase usam-se os grupos de processos (arquivo `01`).

```text
                 ┌─────────────── Monitoramento e Controle (todo o projeto) ───────────────┐
                 │                                                                        │
 Iniciação ──► Planejamento ──► Execução ──────────────────────────────────────────► Encerramento
                 ▲                │
                 └── replanejamento (mudanças aprovadas) ──┘
```

### 2. Visão geral

| Grupo | Finalidade | Nº de processos | Principais saídas |
|---|---|---:|---|
| **Iniciação** | Definir e **autorizar formalmente** um novo projeto ou fase | 2 | Termo de abertura do projeto; registro das partes interessadas |
| **Planejamento** | Estabelecer o escopo, refinar objetivos e definir o curso de ação | 24 | Plano de gerenciamento do projeto; documentos do projeto; linhas de base |
| **Execução** | **Realizar o trabalho** definido no plano para cumprir os requisitos | 10 | Entregas; dados de desempenho do trabalho; solicitações de mudança |
| **Monitoramento e Controle** | **Acompanhar, analisar e regular** o progresso e o desempenho; identificar mudanças necessárias e iniciá-las | 12 | Informações de desempenho; solicitações de mudança; atualizações de planos |
| **Encerramento** | **Finalizar** formalmente atividades de uma fase ou do projeto | 1 | Entregas aceitas; lições aprendidas; transferência do produto |

### 3. Processos por grupo

Nomes conforme a tradução usual da 6ª edição; entre parênteses, o número do processo e a área.

#### 3.1 Grupo de Iniciação (2 processos)

| Processo | Área | Resultado |
|---|---|---|
| Desenvolver o termo de abertura do projeto (4.1) | Integração | **Termo de abertura** (*project charter*): autoriza formalmente o projeto, nomeia o gerente e dá autoridade para aplicar recursos |
| Identificar as partes interessadas (13.1) | Partes interessadas | **Registro das partes interessadas** |

Características: ocorre quando se **reconhece a necessidade** e se **autoriza** o projeto ou a fase; envolve o **patrocinador** (que emite ou aprova o termo); o **caso de negócio**, o plano de benefícios e os acordos são entradas; o termo de abertura **não** é o plano de gerenciamento. Os **objetivos de alto nível, riscos iniciais e resumo do cronograma e do orçamento** aparecem no termo.

#### 3.2 Grupo de Planejamento (24 processos)

| Área | Processos |
|---|---|
| Integração | Desenvolver o plano de gerenciamento do projeto (4.2) |
| Escopo | Planejar o gerenciamento do escopo (5.1); Coletar os requisitos (5.2); Definir o escopo (5.3); Criar a EAP (5.4) |
| Cronograma | Planejar o gerenciamento do cronograma (6.1); Definir as atividades (6.2); Sequenciar as atividades (6.3); Estimar as durações das atividades (6.4); Desenvolver o cronograma (6.5) |
| Custos | Planejar o gerenciamento dos custos (7.1); Estimar os custos (7.2); Determinar o orçamento (7.3) |
| Qualidade | Planejar o gerenciamento da qualidade (8.1) |
| Recursos | Planejar o gerenciamento dos recursos (9.1); Estimar os recursos das atividades (9.2) |
| Comunicações | Planejar o gerenciamento das comunicações (10.1) |
| Riscos | Planejar o gerenciamento dos riscos (11.1); Identificar os riscos (11.2); Realizar a análise qualitativa dos riscos (11.3); Realizar a análise quantitativa dos riscos (11.4); Planejar as respostas aos riscos (11.5) |
| Aquisições | Planejar o gerenciamento das aquisições (12.1) |
| Partes interessadas | Planejar o engajamento das partes interessadas (13.2) |

Características: é o grupo **com mais processos**; **iterativo e progressivo**; produz o **plano de gerenciamento do projeto** (com planos subsidiários e **linhas de base** de escopo, cronograma e custos) e os documentos do projeto; replaneja-se quando mudanças são aprovadas; **estabelece o que será medido** no monitoramento.

#### 3.3 Grupo de Execução (10 processos)

| Processo | Área |
|---|---|
| Orientar e gerenciar o trabalho do projeto (4.3) | Integração |
| Gerenciar o conhecimento do projeto (4.4) | Integração |
| Gerenciar a qualidade (8.2) | Qualidade |
| Adquirir recursos (9.3) | Recursos |
| Desenvolver a equipe (9.4) | Recursos |
| Gerenciar a equipe (9.5) | Recursos |
| Gerenciar as comunicações (10.2) | Comunicações |
| Implementar respostas aos riscos (11.6) | Riscos |
| Conduzir as aquisições (12.2) | Aquisições |
| Gerenciar o engajamento das partes interessadas (13.3) | Partes interessadas |

Características: **coordena pessoas e recursos**, executa as atividades do plano e gera as **entregas**; é onde se consome a maior parte do orçamento e dos recursos; produz **dados de desempenho** e **solicitações de mudança** que alimentam o monitoramento.

#### 3.4 Grupo de Monitoramento e Controle (12 processos)

| Processo | Área |
|---|---|
| Monitorar e controlar o trabalho do projeto (4.5) | Integração |
| Realizar o controle integrado de mudanças (4.6) | Integração |
| Validar o escopo (5.5) | Escopo |
| Controlar o escopo (5.6) | Escopo |
| Controlar o cronograma (6.6) | Cronograma |
| Controlar os custos (7.4) | Custos |
| Controlar a qualidade (8.3) | Qualidade |
| Controlar os recursos (9.6) | Recursos |
| Monitorar as comunicações (10.3) | Comunicações |
| Monitorar os riscos (11.7) | Riscos |
| Controlar as aquisições (12.3) | Aquisições |
| Monitorar o engajamento das partes interessadas (13.4) | Partes interessadas |

Características: **compara o desempenho real com o plano** (linhas de base), analisa variações, **recomenda ações corretivas e preventivas**, avalia solicitações de mudança e **mantém o projeto sob controle**. Ocorre **do início ao fim do projeto**, em paralelo aos demais grupos. É o grupo em que se **monitora, rastreia e revisa o progresso e se implementam medidas corretivas** (por meio de solicitações de mudança aprovadas).

*Pontos críticos:*

- **Monitorar** = coletar, medir, observar e relatar; **controlar** = comparar com o plano, decidir e agir (corrigir). Os dois estão no mesmo grupo.
- **Validar o escopo** é a **aceitação formal das entregas** pelo cliente/patrocinador (foco em **aceitação**); **Controlar a qualidade** verifica se as entregas atendem aos requisitos de **qualidade** (foco em **correção**, geralmente antes da validação). Validar o escopo pertence ao **Monitoramento e Controle**, não ao Encerramento.
- **Realizar o controle integrado de mudanças** analisa e aprova ou rejeita **todas** as solicitações de mudança, mantendo a integridade das linhas de base.

#### 3.5 Grupo de Encerramento (1 processo)

| Processo | Área | Resultado |
|---|---|---|
| Encerrar o projeto ou fase (4.7) | Integração | Entregas e produto transferidos; **lições aprendidas** registradas; documentos arquivados; recursos liberados; encerramento de aquisições |

Características: formaliza o término **de uma fase ou do projeto**, inclusive quando o projeto é **cancelado**; verifica o atendimento aos critérios de encerramento.

### 4. Sequência lógica e fluxo

1. **Iniciação** → o projeto é autorizado.
2. **Planejamento** → define-se o que e como fazer.
3. **Execução** → o trabalho é realizado.
4. **Monitoramento e Controle** → em paralelo, compara-se o real ao planejado e se corrige.
5. **Encerramento** → conclui-se a fase ou o projeto.

*Atenção:* a sequência acima é **lógica**; os grupos se sobrepõem e se repetem. O Monitoramento e Controle **não** vem depois da Execução como etapa isolada; acontece em paralelo com Planejamento e Execução. Uma sequência de grupos válida a partir da autorização do projeto é, por exemplo: **Iniciação → Planejamento → Execução → Monitoramento e Controle → Encerramento**; sequências que omitem a Iniciação (começando em "Planejamento") ou que colocam o Encerramento antes do Planejamento são incorretas.

### 5. Comparações conceituais

| Conceito A | Conceito B | Diferença principal |
|---|---|---|
| Iniciação | Planejamento | Autoriza o projeto (termo de abertura) × define o plano e as linhas de base |
| Termo de abertura | Plano de gerenciamento do projeto | Autoriza e dá autoridade ao gerente × integra os planos e linhas de base |
| Execução | Monitoramento e Controle | Realiza o trabalho × compara o desempenho com o plano e aciona correções |
| Monitorar | Controlar | Coletar e relatar × comparar, decidir e agir |
| Validar o escopo | Controlar a qualidade | Aceitação formal das entregas pelo cliente × verificação da conformidade com requisitos de qualidade |
| Encerramento da fase | Encerramento do projeto | Conclui a fase × conclui todo o projeto |
| Grupos de processos | Fases | Lógicos, repetem-se × cronológicas |

### 6. Aplicações e cenários

**Cenário (didático): em que grupo está a atividade?** (a) "Aprovar formalmente o início do projeto e nomear o gerente": **Iniciação**. (b) "Definir cronograma, orçamento e plano de riscos": **Planejamento**. (c) "Contratar fornecedor e coordenar a equipe": **Execução**. (d) "Medir o avanço e decidir uma ação corretiva": **Monitoramento e Controle**. (e) "Registrar lições aprendidas e liberar recursos": **Encerramento**.

**Cenário (didático): mudança de escopo durante a execução.** Surge um pedido de nova funcionalidade. O processo **Realizar o controle integrado de mudanças** (M&C) avalia impacto em escopo, prazo e custos; se aprovado, o planejamento é **atualizado** (replanejamento) e a execução prossegue com as novas linhas de base. *Limitação:* mudanças aprovadas sem análise de impacto comprometem as linhas de base.

### 7. Atenção para a prova

*Inferência técnica e recomendação pedagógica; sem atribuir frequência à banca.*

- Memorizar os **cinco grupos** e a ordem lógica; quem **monitora, rastreia e revisa o progresso e implementa medidas corretivas** é o grupo de **Monitoramento e Controle**.
- **Iniciação** é o início da lógica de gerenciamento: a **autorização formal** vem do **termo de abertura**.
- **Validar o escopo** é do grupo **Monitoramento e Controle** e trata da **aceitação formal**; antes de avançar para teste/implantação de entregas construídas, a atividade típica de gerenciamento é **validar o escopo** (verificar e obter aceitação).
- Contagem: **Planejamento (24)** é o maior grupo; **Encerramento (1)** e **Iniciação (2)** são os menores.
- Cuidado com sequências que omitem a Iniciação ou invertem grupos.
- *Evidência histórica (amostra de duas provas):* a Prova 6 de 2023 perguntou (Q55) qual **sequência de processos** (Iniciação → Planejamento → Encerramento) é correta a partir da autorização do projeto, e (Q70) qual grupo **monitora, rastreia e revisa o progresso e implementa ações corretivas**. A Prova 15 de 2018 perguntou (Q67) qual a principal atividade do gerente antes de passar às próximas fases (validar o escopo) e (Q62) o que fazer diante de nova demanda de escopo (a alternativa de gabarito foi desenvolver um termo de abertura). Duas provas não permitem inferir frequência.

### 8. Síntese

- 5 grupos: Iniciação (2) → Planejamento (24) → Execução (10) → Monitoramento e Controle (12, transversal) → Encerramento (1).
- Iniciação: termo de abertura e identificação das partes interessadas.
- Planejamento: plano de gerenciamento e linhas de base.
- Execução: realizar o trabalho e gerar entregas.
- Monitoramento e Controle: comparar com o plano, controlar mudanças, validar escopo, controlar qualidade.
- Encerramento: encerrar fase/projeto, lições aprendidas.
- Grupos ≠ fases.

### 9. Pontos para a futura produção de questões (registro)

Conceitos: finalidade de cada grupo; processos por grupo; monitorar×controlar; validar escopo×controlar qualidade. Distinções: grupo×fase; termo de abertura×plano; Execução×Monitoramento. Interpretação: classificar uma atividade; sequenciar grupos; identificar o processo certo para um cenário.

### 10. Referências

- PROJECT MANAGEMENT INSTITUTE. *A Guide to the Project Management Body of Knowledge (PMBOK® Guide)*. 6th ed., 2017 — totais e lista de processos por área **conferidos em fonte secundária (Visual Paradigm)**; totais por grupo conferidos em guias de estudo; atribuição individual de cada processo a seu grupo **parcialmente confirmada**, não confrontada com o PMI.
- Edital Transpetro nº 04/2026.4, Anexo IV, item 3.


---

## As Dez Áreas de Conhecimento do Gerenciamento de Projetos

**Módulo:** M03 — Processos, grupos de processos e áreas de conhecimento
**Texto oficial (Anexo IV):** 3 "Processos, grupos de processos e área de conhecimento." (parte *áreas de conhecimento*; o edital escreve "área" no singular).
**Referencial:** PMBOK Guide, **6ª edição** (2017): 10 áreas. A 7ª edição substitui as áreas por 8 domínios de desempenho (Módulo 2, arquivo `05`).
**Aviso de verificação:** a lista de áreas e de processos por área foi conferida em fonte secundária; as **respostas a riscos** (ameaças: escalar, evitar, transferir, mitigar, aceitar; oportunidades: escalar, explorar, compartilhar, melhorar, aceitar; "escalar" foi acrescentada na 6ª edição) foram confirmadas em fontes secundárias; os **demais conceitos técnicos** (fórmulas, técnicas, tipos de contrato etc.) são padrão da área e vêm do conhecimento do autor do material, **sem confronto com o texto do PMI** (acesso bloqueado).
**Status:** `VALIDADO` (aprovado pelo usuário em 2026-10-31, com ressalvas: atribuição individual dos processos aos grupos, fórmulas e técnicas sem confronto com o texto do PMI — ver `docs/qualidade/relatorio-producao-modulo-03.md`).

**Objetivos de aprendizagem.** (1) Enumerar as dez áreas e seus processos; (2) explicar o propósito e os principais conceitos de cada área; (3) relacionar cada área aos grupos de processos; (4) aplicar as fórmulas e técnicas básicas.

---

### 1. Introdução

**Área de conhecimento** é um conjunto identificado de conceitos, termos e atividades que compõem um **campo profissional**, uma especialização do gerenciamento de projetos. A 6ª edição define **dez áreas**; cada uma tem **processos** que pertencem a um dos cinco grupos (arquivo `02`). Cada área (exceto Integração) tem um processo de **planejamento do gerenciamento** (que produz um plano subsidiário) e processos de execução e controle.

### 2. Matriz grupos × áreas (49 processos)

| Área | Iniciação | Planejamento | Execução | Monitoramento e Controle | Encerramento | Total |
|---|---|---|---|---|---|---:|
| 4. Integração | 4.1 | 4.2 | 4.3, 4.4 | 4.5, 4.6 | 4.7 | 7 |
| 5. Escopo | — | 5.1–5.4 | — | 5.5, 5.6 | — | 6 |
| 6. Cronograma | — | 6.1–6.5 | — | 6.6 | — | 6 |
| 7. Custos | — | 7.1–7.3 | — | 7.4 | — | 4 |
| 8. Qualidade | — | 8.1 | 8.2 | 8.3 | — | 3 |
| 9. Recursos | — | 9.1, 9.2 | 9.3, 9.4, 9.5 | 9.6 | — | 6 |
| 10. Comunicações | — | 10.1 | 10.2 | 10.3 | — | 3 |
| 11. Riscos | — | 11.1–11.5 | 11.6 | 11.7 | — | 7 |
| 12. Aquisições | — | 12.1 | 12.2 | 12.3 | — | 3 |
| 13. Partes interessadas | 13.1 | 13.2 | 13.3 | 13.4 | — | 4 |
| **Total** | **2** | **24** | **10** | **12** | **1** | **49** |

*Observação sobre a numeração:* os capítulos 1 a 3 do guia tratam de introdução, ambiente e papel do gerente; as áreas ocupam os capítulos 4 a 13. A área de **Recursos** substituiu "Recursos Humanos" da 5ª edição, e **Gerenciar o conhecimento do projeto** (4.4) foi acrescentado na 6ª.

### 3. Área por área

#### 3.1 Integração (4)

**Propósito:** identificar, definir, combinar, unificar e coordenar os processos e atividades, garantindo que as demais áreas funcionem como um todo.

| Processo | Grupo |
|---|---|
| 4.1 Desenvolver o termo de abertura do projeto | Iniciação |
| 4.2 Desenvolver o plano de gerenciamento do projeto | Planejamento |
| 4.3 Orientar e gerenciar o trabalho do projeto | Execução |
| 4.4 Gerenciar o conhecimento do projeto | Execução |
| 4.5 Monitorar e controlar o trabalho do projeto | Monitoramento e Controle |
| 4.6 Realizar o controle integrado de mudanças | Monitoramento e Controle |
| 4.7 Encerrar o projeto ou fase | Encerramento |

Conceitos-chave: **termo de abertura** (autorização); **plano de gerenciamento do projeto** (integra planos subsidiários e linhas de base); **solicitação de mudança**; **comitê de controle de mudanças** (CCB), que aprova ou rejeita mudanças; **lições aprendidas**; **plano de gerenciamento de benefícios**. *Atenção:* é a **única** área com processos em **todos os cinco** grupos.

#### 3.2 Escopo (5)

**Propósito:** garantir que o projeto inclua **todo o trabalho necessário, e somente ele**, para ser concluído com sucesso.

| Processo | Grupo |
|---|---|
| 5.1 Planejar o gerenciamento do escopo | Planejamento |
| 5.2 Coletar os requisitos | Planejamento |
| 5.3 Definir o escopo | Planejamento |
| 5.4 Criar a EAP | Planejamento |
| 5.5 Validar o escopo | Monitoramento e Controle |
| 5.6 Controlar o escopo | Monitoramento e Controle |

Conceitos-chave: **escopo do produto** (características e funções) × **escopo do projeto** (trabalho para entregá-lo); **requisitos** (técnicas: entrevistas, grupos focais, questionários, observação, prototipação, *brainstorming*); **matriz de rastreabilidade dos requisitos**; **declaração do escopo**; **EAP** e **dicionário da EAP**; **linha de base do escopo** = declaração do escopo + EAP + dicionário da EAP; **validação** (aceitação formal das entregas) × **controle** (gerenciar mudanças e variações); **gerar escopo desnecessário** (*gold plating*, *scope creep*: crescimento descontrolado).

#### 3.3 Cronograma (6)

**Propósito:** gerenciar o término do projeto no prazo.

| Processo | Grupo |
|---|---|
| 6.1 Planejar o gerenciamento do cronograma | Planejamento |
| 6.2 Definir as atividades | Planejamento |
| 6.3 Sequenciar as atividades | Planejamento |
| 6.4 Estimar as durações das atividades | Planejamento |
| 6.5 Desenvolver o cronograma | Planejamento |
| 6.6 Controlar o cronograma | Monitoramento e Controle |

Conceitos-chave:

- **Dependências:** término-início (TI/FS), início-início, término-término, início-término; **antecipação** (*lead*) e **espera** (*lag*).
- **Estimativas:** análoga, paramétrica, bottom-up, **de três pontos (PERT)**: **E = (O + 4M + P) ÷ 6**, com O otimista, M mais provável, P pessimista; desvio-padrão aproximado **σ = (P − O) ÷ 6**.
- **Caminho crítico** (CPM): sequência de atividades de **maior duração** que determina o prazo mínimo; **folga total** = 0 nas atividades críticas (folga = início tardio − início cedo).
- **Compressão do cronograma:** **crashing** (acrescentar recursos; aumenta custo) e **paralelismo (*fast tracking*)** (sobrepor atividades; aumenta risco e retrabalho).
- **Nivelamento** e **suavização de recursos**; **diagrama de rede**, **gráfico de Gantt**, **linha de base do cronograma**.

#### 3.4 Custos (7)

**Propósito:** planejar, estimar, orçar, financiar e controlar custos para concluir o projeto **dentro do orçamento aprovado**.

| Processo | Grupo |
|---|---|
| 7.1 Planejar o gerenciamento dos custos | Planejamento |
| 7.2 Estimar os custos | Planejamento |
| 7.3 Determinar o orçamento | Planejamento |
| 7.4 Controlar os custos | Monitoramento e Controle |

Conceitos-chave: tipos de estimativa (análoga, paramétrica, bottom-up, três pontos); **reserva de contingência** (para riscos identificados, parte da linha de base de custos) × **reserva gerencial** (para riscos não identificados, fora da linha de base); **linha de base dos custos** (curva S); **gerenciamento do valor agregado** (PV, EV, AC, CPI, SPI; Módulo 2, arquivo `05`); **custo do ciclo de vida**.

#### 3.5 Qualidade (8)

**Propósito:** incorporar a política de qualidade da organização ao planejamento, gerenciamento e controle dos requisitos de qualidade do projeto e do produto, para atender às expectativas das partes interessadas.

| Processo | Grupo |
|---|---|
| 8.1 Planejar o gerenciamento da qualidade | Planejamento |
| 8.2 Gerenciar a qualidade | Execução |
| 8.3 Controlar a qualidade | Monitoramento e Controle |

Conceitos-chave: **qualidade** (grau em que as características atendem aos requisitos) × **grau** (categoria/classe do produto); **prevenção** é preferível à **inspeção**; **custo da qualidade**: **custos de conformidade** (prevenção e avaliação) e **de não conformidade** (falhas internas e externas); **ferramentas básicas** (diagrama de causa e efeito/Ishikawa, fluxogramas, folhas de verificação, diagrama de Pareto, histogramas, gráficos de controle, diagramas de dispersão); **auditorias de qualidade** (em **Gerenciar a qualidade**); **inspeção, testes e amostragem** (em **Controlar a qualidade**). *Distinção:* **gerenciar a qualidade** = assegurar que os processos funcionam e melhorar (garantia da qualidade); **controlar a qualidade** = medir resultados e verificar conformidade das entregas.

#### 3.6 Recursos (9)

**Propósito:** identificar, adquirir e gerenciar os **recursos** (pessoas, equipamentos, materiais, instalações) necessários.

| Processo | Grupo |
|---|---|
| 9.1 Planejar o gerenciamento dos recursos | Planejamento |
| 9.2 Estimar os recursos das atividades | Planejamento |
| 9.3 Adquirir recursos | Execução |
| 9.4 Desenvolver a equipe | Execução |
| 9.5 Gerenciar a equipe | Execução |
| 9.6 Controlar os recursos | Monitoramento e Controle |

Conceitos-chave: **estrutura analítica dos recursos**; **matriz de responsabilidades (RACI)**; **termo de abertura da equipe** (*team charter*); estágios de desenvolvimento de equipes (**formação, tormenta, normatização, desempenho e dispersão**, de Tuckman); **técnicas de resolução de conflitos** (retirar/evitar, acomodar, conciliar/comprometer, forçar/direcionar, colaborar/resolver o problema); estilos de liderança; **histograma de recursos**; **calendário de recursos**.

#### 3.7 Comunicações (10)

**Propósito:** garantir que as informações do projeto sejam **planejadas, coletadas, criadas, distribuídas, armazenadas, recuperadas, gerenciadas, monitoradas e dispostas** de forma adequada e oportuna.

| Processo | Grupo |
|---|---|
| 10.1 Planejar o gerenciamento das comunicações | Planejamento |
| 10.2 Gerenciar as comunicações | Execução |
| 10.3 Monitorar as comunicações | Monitoramento e Controle |

Conceitos-chave: **canais de comunicação** = **n × (n − 1) ÷ 2** (n = número de pessoas; por exemplo, 5 pessoas → 10 canais; 10 pessoas → 45); **modelo emissor–receptor** (codificação, meio, ruído, decodificação, retorno); métodos **interativo**, **ativo (*push*)** e **passivo (*pull*)**; **requisitos de comunicação das partes interessadas**; **plano de gerenciamento das comunicações**; **relatórios de desempenho**.

#### 3.8 Riscos (11)

**Propósito:** conduzir planejamento, identificação, análise, planejamento de respostas, implementação e monitoramento de riscos.

| Processo | Grupo |
|---|---|
| 11.1 Planejar o gerenciamento dos riscos | Planejamento |
| 11.2 Identificar os riscos | Planejamento |
| 11.3 Realizar a análise qualitativa dos riscos | Planejamento |
| 11.4 Realizar a análise quantitativa dos riscos | Planejamento |
| 11.5 Planejar as respostas aos riscos | Planejamento |
| 11.6 Implementar respostas aos riscos | Execução |
| 11.7 Monitorar os riscos | Monitoramento e Controle |

Conceitos-chave: **risco** = evento ou condição incerta que, se ocorrer, afeta os objetivos (**ameaça** ou **oportunidade**); **registro dos riscos**; **análise qualitativa** (matriz de **probabilidade e impacto**); **análise quantitativa** (valor monetário esperado, **VME = probabilidade × impacto**; simulação de Monte Carlo; árvore de decisão); respostas a **ameaças**: **escalar, evitar, transferir, mitigar, aceitar**; a **oportunidades**: **escalar, explorar, compartilhar, melhorar, aceitar**; **risco residual** e **risco secundário**; **reserva de contingência**. *Atenção:* a identificação e a análise de riscos pertencem ao **Planejamento**; a **implementação** das respostas, à **Execução**.

#### 3.9 Aquisições (12)

**Propósito:** comprar ou adquirir produtos, serviços ou resultados **externos** à equipe do projeto.

| Processo | Grupo |
|---|---|
| 12.1 Planejar o gerenciamento das aquisições | Planejamento |
| 12.2 Conduzir as aquisições | Execução |
| 12.3 Controlar as aquisições | Monitoramento e Controle |

Conceitos-chave: **análise de fazer ou comprar**; **plano de gerenciamento das aquisições**; **declaração do trabalho** (*SOW*); **tipos de contrato**: **preço fixo** (preço fixo firme, com incentivos, com ajuste econômico), **custos reembolsáveis** (custo mais honorários fixos, com incentivos, com premiação) e **tempo e material**; documentos de licitação (RFP, RFQ); **critérios de seleção**; **gerenciamento de contratos**; nesta edição, o encerramento de aquisições ocorre em **Encerrar o projeto ou fase** (não há mais "Encerrar as aquisições"). *Em empresas estatais brasileiras, a contratação segue a Lei nº 13.303/2016 (objeto de outro item do edital, não da Ênfase 5).*

#### 3.10 Partes interessadas (13)

**Propósito:** identificar pessoas, grupos ou organizações que possam afetar ou ser afetados pelo projeto, analisar expectativas e impacto e desenvolver estratégias de engajamento.

| Processo | Grupo |
|---|---|
| 13.1 Identificar as partes interessadas | Iniciação |
| 13.2 Planejar o engajamento das partes interessadas | Planejamento |
| 13.3 Gerenciar o engajamento das partes interessadas | Execução |
| 13.4 Monitorar o engajamento das partes interessadas | Monitoramento e Controle |

Conceitos-chave: **registro das partes interessadas**; **análise** (grade **poder × interesse**, poder × influência, saliência); **matriz de avaliação do engajamento**: **desconhecedor, resistente, neutro, apoiador, líder**; **plano de engajamento**; **lista de problemas** (*issue log*). *Atenção:* esta é, com Integração, a única área com processo no grupo de **Iniciação**.

### 4. Comparações conceituais

| Conceito A | Conceito B | Diferença principal |
|---|---|---|
| Escopo do produto | Escopo do projeto | O que o produto é e faz × o trabalho para entregá-lo |
| Validar o escopo | Controlar a qualidade | Aceitação formal das entregas × verificação de qualidade |
| Controlar o escopo | Realizar o controle integrado de mudanças | Gerencia variações e mudanças do escopo × aprova/rejeita mudanças de todas as áreas |
| *Crashing* | *Fast tracking* | Acrescenta recursos (custo ↑) × sobrepõe atividades (risco ↑) |
| Reserva de contingência | Reserva gerencial | Riscos identificados (na linha de base) × riscos não identificados (fora) |
| Gerenciar a qualidade | Controlar a qualidade | Processos e auditoria × medição de resultados |
| Risco (ameaça) | Risco (oportunidade) | Impacto negativo × positivo; respostas diferentes |
| Contrato de preço fixo | Contrato de custos reembolsáveis | Risco de custo no vendedor × no comprador |
| Plano de gerenciamento do projeto | Plano subsidiário | Plano integrado × plano de uma área |

### 5. Aplicações e cenários

**Cenário (didático): conflito entre prazo e custo.** O projeto atrasa e o patrocinador quer antecipar a entrega. Opções: **crashing** (aumentar recursos, custo ↑) ou **fast tracking** (paralelizar, risco de retrabalho ↑). A decisão exige integrar áreas (cronograma, custos, riscos) e passa pelo **controle integrado de mudanças**.

**Cenário (didático): riscos e contratos.** Uma atividade de incerteza alta é contratada por **custos reembolsáveis**; o comprador assume o risco de custo e controla o escopo com mais rigor. Em outra, de escopo bem definido, usa-se **preço fixo**. *Limitação:* preço fixo com escopo mal definido gera disputas por mudanças.

### 6. Atenção para a prova

*Inferência técnica e recomendação pedagógica; sem atribuir frequência à banca.*

- **10 áreas**, 49 processos; **Integração** tem processos em todos os grupos; **Partes interessadas** e **Integração** têm processos de **Iniciação**.
- Padrão de nomes: **Planejar...** (Planejamento); **Gerenciar/Conduzir/Adquirir/Implementar...** (Execução); **Controlar/Monitorar/Validar...** (Monitoramento e Controle).
- Fórmulas: **PERT** (O + 4M + P)/6; **canais** n(n−1)/2; **VME** = P × I; EVM (CPI = EV/AC; SPI = EV/PV).
- **Planejamento de riscos**: identificar e analisar são do Planejamento; implementar respostas é da Execução.
- Evitar confundir **validar escopo** (aceitação) e **controlar qualidade**; **monitorar** e **controlar**.
- *Evidência histórica (amostra de duas provas):* a Prova 15 de 2018 trouxe a **EAP** (escopo, Q63), uma questão de **cronograma e custos** com índices CPI/SPI e mudança de escopo (Q62), uma sobre **restrições** do projeto (Q66) e **validar escopo** (Q67). A Prova 6 de 2023 trouxe a EAP (Q67). Duas provas não permitem inferir frequência.

### 7. Síntese

- 10 áreas: Integração, Escopo, Cronograma, Custos, Qualidade, Recursos, Comunicações, Riscos, Aquisições, Partes interessadas.
- Processos por área: 7, 6, 6, 4, 3, 6, 3, 7, 3, 4 (= 49).
- Por grupo: 2, 24, 10, 12, 1.
- Conceitos-chave por área: termo de abertura/controle de mudanças; EAP e linha de base do escopo; caminho crítico e compressão; reservas e EVM; qualidade e custo da qualidade; RACI e Tuckman; canais de comunicação; VME e respostas a riscos; tipos de contrato; engajamento.

### 8. Pontos para a futura produção de questões (registro)

Conceitos: áreas e processos; técnicas e fórmulas. Distinções: validar×controlar; gerenciar×controlar qualidade; contingência×gerencial; crashing×fast tracking. Interpretação: em que área/grupo está um processo; calcular canais, PERT, VME; escolher a resposta a um risco.

### 9. Referências

- PROJECT MANAGEMENT INSTITUTE. *A Guide to the Project Management Body of Knowledge (PMBOK® Guide)*. 6th ed., 2017 — estrutura (10 áreas; 49 processos; nomes por área) **conferida em fonte secundária** em 2026-10-31; **texto do PMI não consultado**.
- Os conceitos técnicos (fórmulas, técnicas, tipos de contrato) são **conhecimento do autor do material**, não verificados em fonte primária nesta etapa.
- Edital Transpetro nº 04/2026.4, Anexo IV, item 3.


---

## Complemento (escopo C): Gestão de Processos de Negócio (BPM)

**Módulo:** M03
**Classificação:** **C — material complementar opcional.** Não corresponde a item literal do Anexo IV e **não conta** na cobertura oficial. O item 3 do edital foi interpretado (decisão do usuário) como **grupos de processos e áreas de conhecimento de gerenciamento de projetos**; este arquivo existe apenas porque a ênfase se chama "Processos de Negócios" e porque **provas de 2018**, regidas por programa então vigente que incluía BPM, cobraram o tema. **Não estude este arquivo antes de dominar os arquivos `01` a `03`.**
**Atenção:** notações de modelagem (por exemplo, BPMN) constam do edital de **outra ênfase** (Ênfase 6), não da Ênfase 5.
**Status:** `EM_REVISAO` (complementar).

**Objetivos de aprendizagem (opcionais).** (1) Definir processo de negócio e distinguir tipos; (2) descrever o ciclo de BPM; (3) diferenciar eficiência, eficácia e efetividade; (4) reconhecer gargalos e indicadores.

---

### 1. Introdução

**Processo de negócio** é um conjunto de atividades inter-relacionadas, executadas por pessoas, sistemas ou ambos, que transforma **entradas em saídas de valor para um cliente** (interno ou externo). **Gestão de processos de negócio** (*Business Process Management*, BPM) é a disciplina de **identificar, mapear, analisar, melhorar, executar e monitorar** processos para melhorar desempenho e alinhamento à estratégia. Difere do **gerenciamento de projetos** (esforço temporário e único) porque os processos de negócio são **contínuos e repetitivos**.

### 2. Fundamentos

#### 2.1 Tipos de processos

| Tipo | Função | Exemplo |
|---|---|---|
| **Primários/finalísticos** | Entregam valor direto ao cliente | Atendimento de uma demanda de transporte |
| **De suporte** | Sustentam os primários | Compras, manutenção de TI, RH |
| **De gestão/gerenciais** | Planejam, controlam e dão direção | Planejamento estratégico, controle orçamentário |

**Hierarquia:** cadeia de valor → macroprocesso → processo → subprocesso → atividade → tarefa.

#### 2.2 Ciclo de BPM (visão geral)

```text
Planejar/Identificar ─► Modelar o estado atual (AS-IS) ─► Analisar ─► Redesenhar (TO-BE)
        ▲                                                                  │
        └────────── Monitorar e melhorar ◄── Implantar/Executar ◄──────────┘
```

| Etapa | Atividades |
|---|---|
| **Identificar e priorizar** | Selecionar processos de alto valor ou problemáticos |
| **Modelar o AS-IS** | Mapear o processo como ele **é** (fluxo, papéis, sistemas) |
| **Analisar** | Identificar **gargalos**, retrabalho, esperas, desperdícios, pontos de controle |
| **Redesenhar (TO-BE)** | Propor o processo **desejado** |
| **Implantar** | Mudança de pessoas, sistemas e regras; automação (por exemplo, *workflow*) |
| **Monitorar** | Indicadores de desempenho; melhoria contínua |

#### 2.3 Eficiência, eficácia e efetividade

| Conceito | Pergunta | Exemplo |
|---|---|---|
| **Eficiência** | Fazemos **certo** (uso de recursos: tempo, custo)? | Concluir a tarefa com menos horas |
| **Eficácia** | Alcançamos o **resultado pretendido**? | Cumprir o objetivo do processo |
| **Efetividade** | O resultado gera **impacto/valor** duradouro? | Satisfação e benefício ao cliente |

*(Definições de uso comum na literatura brasileira; as fontes divergem quanto à distinção entre eficácia e efetividade.)*

#### 2.4 Indicadores e gargalos

- **Indicadores** (KPI): tempo de ciclo, custo por transação, taxa de erro/retrabalho, nível de serviço, satisfação.
- **Gargalo:** etapa com capacidade menor que a demanda, que limita o fluxo; análises de processo **observam gargalos internos e passagens entre funções** (esperas entre áreas).
- **Workflow:** automação **total ou parcial** de um processo de negócio, em que documentos, informações ou tarefas passam de um participante a outro **de acordo com regras de procedimento**.

#### 2.5 Melhoria

Abordagens de melhoria: *Lean* (eliminar desperdícios), *Six Sigma* (reduzir variação e defeitos), ciclo **PDCA**, **reengenharia** (mudança radical). *(Visão geral; não verificada online nesta etapa.)*

### 3. Comparações conceituais

| Conceito A | Conceito B | Diferença principal |
|---|---|---|
| Processo de negócio | Projeto | Contínuo e repetitivo × temporário e único |
| AS-IS | TO-BE | Como é × como deve ser |
| Eficiência | Eficácia | Fazer certo (recursos) × atingir o resultado |
| Macroprocesso | Subprocesso | Visão ampla × detalhe |
| Processos primários | De suporte | Entregam valor ao cliente × sustentam os primários |
| BPM | Gerenciamento de projetos | Gestão contínua do desempenho do processo × entrega de resultados únicos |

### 4. Aplicações e cenário

**Cenário (didático): atraso em aprovações.** O mapeamento do processo de contratação mostra cinco passagens entre áreas, cada uma com espera de dias. A análise identifica o gargalo na aprovação jurídica; o redesenho paraleliza revisões e adota *workflow*. *Limitação:* automatizar um processo mal desenhado apenas acelera o erro.

### 5. Atenção para a prova (somente se aplicável)

- Não faz parte do conteúdo obrigatório do edital de 2026 (Ênfase 5).
- *Evidência histórica:* a Prova 15 de 2018 (programa então vigente com BPM) trouxe questões sobre análise de processos (Q65), eficiência de mão de obra (Q64), *workflow* (Q57) e a notação BPMN (Q68). A Prova 6 de 2023 **não** trouxe BPM. Duas provas não permitem inferir frequência; o edital de 2026 **não** prevê BPM expressamente.

### 6. Síntese

- Processo de negócio: atividades que transformam entradas em saídas de valor; contínuo.
- Ciclo: identificar → AS-IS → analisar → TO-BE → implantar → monitorar.
- Eficiência (recursos) × eficácia (resultado) × efetividade (impacto).
- Gargalos, indicadores e *workflow*.

### 7. Referências

- Conhecimento geral de BPM (autor do material); **nenhuma fonte foi consultada ou verificada nesta etapa** para este complemento. Se for usado para estudo, complementar com bibliografia especializada (por exemplo, CBOK do ABPMP) — **não verificada**.
- Edital Transpetro nº 04/2026.4, Anexo IV, item 3 (relação indireta; BPM não é citado).

