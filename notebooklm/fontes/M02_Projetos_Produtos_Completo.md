# Módulo M02 — Gerenciamento de Projetos e Produtos

## Identificação
- Concurso: Processo Seletivo Público TRANSPETRO 2026.4 (Edital nº 04/2026)
- Ênfase: 5 — Análise de Sistemas: Processos de Negócios
- Banca: Fundação Cesgranrio
- Módulo: M02 — Gerenciamento de Projetos e Produtos
- Gerado em: 2026-11-11, por `tools/build_notebooklm.py`, a partir de `conteudo/02-projetos-produtos/` (fonte de verdade; não editar este arquivo)
- Situação do conteúdo nos arquivos de origem: VALIDADO (com ressalvas nos relatórios de produção em `docs/qualidade/`)

## Como usar este documento
É material de estudo do projeto, **não** é texto oficial do edital nem da banca. O escopo oficial é o Anexo IV do edital. Trechos marcados como complemento, aprofundamento ou estratégia **não** são exigência literal do edital. Referências indicadas como "não verificadas" ou "de memória" devem ser conferidas na fonte primária. Não afirme incidência de tema em prova sem evidência documental.

## Conteúdo

---

## Fundamentos: Projeto, Produto e Organização

**Módulo:** M02 — Gerenciamento de Projetos e Produtos
**Textos oficiais (Anexo IV):** 2.2 "Gestão de projeto versus gestão de produto"; 2.5 "Projetos e a organização".
**Escopo:** A. *Nota de interpretação:* o item 2.5 não detalha o que cobrir. Adota-se a leitura usual: **relação entre os projetos e a organização** — estratégia, governança, estruturas organizacionais e sua influência sobre o gerente de projetos. A estrutura organizacional e os termos "matriz fraca/forte" derivam do PMBOK em edições anteriores (6ª); permanecem relevantes para o item.
**Status:** `VALIDADO` (aprovado pelo usuário em 2026-10-31, com ressalvas: textos do PMI e princípios Lean-Agile do SAFe não verificados em fonte primária; interpretação dos itens 2.5 e 2.7 a confirmar — ver `docs/qualidade/relatorio-producao-modulo-02.md`).

**Objetivos de aprendizagem.** (1) Definir projeto, operação, produto, programa e portfólio; (2) diferenciar gestão de projetos de gestão de produtos (objetivo, horizonte, métricas, papéis); (3) explicar como projetos se ligam à estratégia e à governança; (4) comparar as estruturas organizacionais e seu efeito sobre a autoridade do gerente de projetos.

---

### 1. Introdução

Organizações executam **operações** (trabalho contínuo e repetitivo) e **projetos** (esforços temporários que geram resultados novos). Nas empresas de tecnologia e nos ambientes ágeis, fala-se ainda em **produtos**, que evoluem ao longo do tempo e continuam a ser mantidos depois que os projetos acabam. Entender as diferenças entre esses conceitos e como a organização se estrutura é a base para os demais itens do módulo: Scrum e Kanban (2.1), práticas ágeis em escala (2.3), PMBOK 7ª edição (2.4), escritório de projetos (2.6) e modelos (2.7).

### 2. Fundamentos teóricos

#### 2.1 Conceitos centrais

| Conceito | Definição | Característica distintiva |
|---|---|---|
| **Projeto** | Esforço **temporário** empreendido para criar um **produto, serviço ou resultado único** | Início e fim definidos; resultado único; elaboração progressiva |
| **Operação** | Trabalho **contínuo e repetitivo** que sustenta o negócio | Sem data de término; produz resultados padronizados |
| **Produto** | Algo oferecido para gerar valor a clientes/usuários e à organização, que **evolui e é mantido** ao longo de um ciclo de vida | Vida útil longa; ciclo de concepção a descontinuação |
| **Programa** | Conjunto de projetos e atividades relacionados, geridos de modo coordenado para benefícios que não seriam obtidos isoladamente | Foco em benefícios e interdependências |
| **Portfólio** | Projetos, programas e operações geridos em conjunto para atingir **objetivos estratégicos** | Seleção, priorização e balanceamento de investimentos |
| **Entrega (*deliverable*)** | Resultado verificável produzido por um projeto | Saída do trabalho |
| **Benefício/valor** | Ganho obtido pela organização ou por seus clientes | Razão de ser do investimento |

*Exemplo didático.* Implantar um novo sistema de manutenção é um **projeto** (temporário, resultado único). Manter o sistema operando, atendendo usuários e evoluindo funcionalidades por anos é parte do **produto** e da **operação**. Vários projetos de modernização de sistemas compõem um **programa**; o conjunto de todos os programas e projetos de TI da empresa forma um **portfólio**.

**Projeto × operação.** Projetos têm fim e resultado único; operações são contínuas e repetitivas. Ambos consomem recursos e exigem planejamento, execução e controle. Muitos projetos terminam entregando algo que passa à operação.

#### 2.2 Projeto, programa e portfólio: relação hierárquica e foco

| Dimensão | Projeto | Programa | Portfólio |
|---|---|---|---|
| Foco | Entregar um resultado dentro de escopo, prazo e custo (e valor) | Gerir interdependências e obter benefícios | Escolher e balancear investimentos para a estratégia |
| Escopo | Definido e progressivamente detalhado | Abrange escopos dos componentes | Muda conforme objetivos estratégicos |
| Sucesso | Entrega e valor do resultado | Realização de benefícios | Desempenho agregado e alinhamento à estratégia |
| Gestão | Gerente de projetos | Gerente de programa | Gestores de portfólio/comitê |

### 3. Gestão de projeto versus gestão de produto (item 2.2)

#### 3.1 O que é gestão de projetos

**Gestão (gerenciamento) de projetos** é a aplicação de conhecimentos, habilidades, ferramentas e técnicas às atividades do projeto para cumprir seus requisitos. Orienta-se por um **resultado temporário** com restrições (escopo, prazo, custo, qualidade, recursos, riscos). O gerente de projetos é responsável por entregar dentro dessas restrições e do valor esperado.

#### 3.2 O que é gestão de produto

**Gestão de produto** é a responsabilidade contínua pelo **valor de um produto ao longo de todo o seu ciclo de vida** — da descoberta da oportunidade e da estratégia ao lançamento, evolução e descontinuação. Atividades típicas: entender usuários e mercado, definir **visão** e **estratégia** do produto, manter o **roadmap** e o **backlog**, priorizar pelo valor, medir resultados (adoção, retenção, receita, satisfação) e decidir o que construir (e o que não construir). No Scrum, a responsabilidade correspondente é do **Product Owner** (arquivo `02`). O papel de gerente de produto é mais amplo que o de PO e pode incluir aspectos de mercado, preço e estratégia.

#### 3.3 Comparação

| Critério | **Gestão de projeto** | **Gestão de produto** |
|---|---|---|
| Horizonte | Temporário (início e fim) | **Contínuo**, ao longo do ciclo de vida do produto |
| Pergunta central | "Estamos entregando **o que foi combinado**, no prazo e no custo?" | "Estamos entregando **valor** e o **produto certo**?" |
| Foco | Execução e entrega (*output*) | Valor e resultados para o usuário e o negócio (*outcome*) |
| Medidas de sucesso | Escopo, prazo, custo, qualidade; aderência ao plano | Valor entregue, adoção, retenção, receita/economia, satisfação, métricas de uso |
| Responsável típico | Gerente de projetos | Gerente de produto / Product Owner |
| Escopo | Definido e controlado por mudanças | Evolutivo, priorizado em backlog |
| Financiamento | Orçamento do projeto (investimento por projeto) | Investimento contínuo em equipes e produto |
| Equipe | Montada para o projeto e dissolvida | Equipe estável e multifuncional |
| Relação com o fim | O projeto termina na entrega | O produto continua após o lançamento (manutenção, evolução) |

#### 3.4 De projetos para produtos (*mindset*)

Muitas organizações migram do **modelo de projeto** (equipes temporárias, escopo fixo, sucesso medido por entrega no prazo) para o **modelo de produto** (equipes estáveis responsáveis por um produto ou fluxo de valor, financiamento contínuo, sucesso medido por resultados). Motivos: o valor só é confirmado quando o usuário usa o produto; mudanças são constantes; a transferência entre projeto e manutenção gera perda de conhecimento. Limitações: nem tudo é produto (obras, migrações pontuais e projetos regulatórios com prazo fixo continuam sendo projetos); a transição exige mudança de governança e de orçamento.

*Relação com o Scrum e o SAFe:* o Scrum organiza o trabalho em torno de um **produto** com um **Product Goal** e um backlog contínuo; o SAFe agrupa equipes em **fluxos de valor** e financia o trabalho por **valor** (arquivo `04`). O PMBOK 7ª edição centra-se em **entrega de valor**, abordando projetos, programas, portfólios e produtos (arquivo `05`).

#### 3.5 Projeto × produto: os dois coexistem

O produto pode ser desenvolvido **por meio de projetos** (por exemplo, um projeto para lançar a versão 2.0) ou por fluxo contínuo de melhorias. Em cada caso é preciso saber **qual horizonte** está sendo gerido. Um erro comum é medir um produto apenas pela entrega do projeto: o projeto pode terminar "com sucesso" (prazo e custo cumpridos) e o produto ser rejeitado pelos usuários.

### 4. Projetos e a organização (item 2.5)

#### 4.1 Projetos e estratégia

Projetos são **meios de executar a estratégia**. A organização define objetivos estratégicos; o **portfólio** seleciona os investimentos; os **programas e projetos** entregam resultados que realizam **benefícios**. Elementos de ligação:

| Elemento | Função |
|---|---|
| **Caso de negócio (*business case*)** | Justifica o investimento: necessidade, alternativas, custo-benefício, riscos |
| **Plano de gerenciamento de benefícios** | Descreve como e quando os benefícios serão obtidos e medidos |
| **Alinhamento estratégico** | Cada projeto relaciona-se com um objetivo estratégico |
| **Governança** | Estrutura de decisão, papéis, políticas e critérios para aprovar, priorizar, acompanhar e encerrar projetos |
| **Patrocinador (*sponsor*)** | Apoia, financia e remove impedimentos; responde pela justificativa do projeto |
| **Partes interessadas (*stakeholders*)** | Pessoas ou grupos afetados pelo projeto ou que o afetam |

#### 4.2 Ambiente organizacional: fatores e ativos

Duas categorias influenciam projetos (terminologia consolidada no PMBOK em edições anteriores e ainda usada na prática):

- **Fatores ambientais da empresa (EEF):** condições **externas e internas** que não estão sob controle direto da equipe (cultura, estrutura, regulamentação, condições de mercado, sistemas de informação, políticas).
- **Ativos de processos organizacionais (OPA):** planos, políticas, procedimentos, **modelos (templates)**, lições aprendidas e bases de conhecimento da organização, que a equipe **pode utilizar e atualizar**.

Diferença: EEF **restringem ou influenciam** o projeto; OPA **apoiam** o projeto e são ativos que a equipe consulta e alimenta.

#### 4.3 Estruturas organizacionais e autoridade do gerente de projetos

A estrutura da organização define **quem tem autoridade sobre os recursos e o orçamento** e quanto poder o gerente de projetos possui.

| Estrutura | Descrição | Autoridade do gerente de projetos | Disponibilidade de recursos para o projeto | Quem administra o orçamento do projeto |
|---|---|---|---|---|
| **Funcional** | Organização por departamentos especializados; o trabalho do projeto ocorre dentro dos departamentos | Pouca ou nenhuma (papel de coordenação) | Baixa | Gerente funcional |
| **Matricial fraca** | Mantém características da funcional; o gerente de projetos tem papel de coordenador/facilitador | Baixa | Baixa a moderada | Gerente funcional |
| **Matricial balanceada** | Reconhece a necessidade de um gerente de projetos, sem autoridade total | Baixa a moderada | Moderada | Misto |
| **Matricial forte** | Gerentes de projetos com papel e autoridade significativos, às vezes com área dedicada | **Moderada a alta** | Moderada a alta | Gerente de projetos |
| **Projetizada** | A organização é estruturada por projetos; a equipe fica alocada ao gerente | **Alta a quase total** | Alta a quase total | Gerente de projetos |
| **Composta (híbrida)** | Combina estruturas; é comum nas organizações reais | Varia por projeto | Varia | Varia |

*Observação:* a classificação em graus (baixa, moderada, alta) é qualitativa e segue a literatura; use as palavras exatas do enunciado. A **matriz forte** caracteriza-se por **alto grau de influência do gerente de projetos** sobre o projeto; a **fraca**, por maior poder do gerente funcional. O gerente de projetos tende a ter mais autoridade à medida que se caminha da estrutura funcional para a projetizada.

*Vantagens e desvantagens:*

| Estrutura | Vantagens | Limitações |
|---|---|---|
| Funcional | Especialização, clareza de carreira | Projeto fica em segundo plano; coordenação entre áreas difícil |
| Matricial | Compartilhamento de especialistas, foco no projeto | **Dupla subordinação** e conflitos entre gerentes |
| Projetizada | Foco total, comunicação rápida | Duplicidade de recursos, risco de dispersão após o término do projeto |

#### 4.4 Outros elementos da relação projeto–organização

- **Cultura organizacional** (valores, normas, tolerância a risco) condiciona abordagem, comunicação e decisões.
- **Maturidade em gerenciamento de projetos:** o quanto a organização possui processos, métricas e práticas consolidadas.
- **Escritório de projetos (PMO):** estrutura que apoia ou controla a gestão de projetos (item 2.6, arquivo `06`).
- **Ciclo de vida do projeto** e **fases**: o projeto passa por etapas (arquivo `07` e `05`).
- **Governança de projetos e de TI:** relações com o Módulo 4.

### 5. Comparações conceituais

| Conceito A | Conceito B | Diferença principal |
|---|---|---|
| Projeto | Operação | Temporário e único × contínuo e repetitivo |
| Projeto | Produto | Termina na entrega × evolui ao longo do ciclo de vida |
| Programa | Portfólio | Benefícios de projetos relacionados × investimentos alinhados à estratégia |
| Gestão de projeto | Gestão de produto | Entrega no prazo/custo (*output*) × valor e resultados (*outcome*) |
| Gerente de projetos | Product Owner / gerente de produto | Entrega do projeto × valor do produto e priorização do backlog |
| EEF | OPA | Condições que influenciam × ativos que apoiam |
| Matriz fraca | Matriz forte | Poder do gerente funcional × autoridade relevante do gerente de projetos |
| Estrutura funcional | Estrutura projetizada | Autoridade mínima do GP × alta/quase total |

### 6. Aplicações e cenários

**Cenário (didático): organização funcional implantando um sistema.** A área de TI (funcional) precisa de especialistas de operações, jurídico e finanças. Sem autoridade formal sobre esses profissionais, o gerente de projetos depende de **negociação** e de patrocínio executivo. Medidas: patrocinador com poder de decisão, acordos formais de alocação, governança de priorização. *Limitação:* a disponibilidade dos especialistas continua dependendo dos gerentes funcionais.

**Cenário (didático): produto digital interno.** Uma plataforma de dados é tratada como projeto de 12 meses; ao término, a equipe é dispersa e o sistema cai em manutenção sem responsável. Alternativa: **equipe de produto** estável, com **Product Owner**, roadmap e indicadores de uso. *Limitação:* exige orçamento contínuo e métricas de resultado.

### 7. Atenção para a prova

*Inferência técnica e recomendação pedagógica; sem atribuir frequência à banca.*

- **Projeto é temporário e produz resultado único**; operação é contínua. Alternativas que invertem isso são incorretas.
- Em **projeto × produto**, o produto tem **ciclo de vida** que ultrapassa o projeto; a gestão de produto olha **valor e resultados**.
- Em estruturas, associar: funcional → autoridade mínima do GP; matricial → dupla subordinação; matriz forte → alto grau de influência do GP; projetizada → autoridade alta/quase total.
- Cuidado com termos: **fatores ambientais (EEF)** ≠ **ativos de processos (OPA)**.
- *Evidência histórica (amostra de duas provas):* a Prova 6 de 2023 (Q69) perguntou qual matriz organizacional se caracteriza por alto grau de influência do gerente de projetos. O item 2.2 (projeto × produto) **não** teve questão nas duas provas catalogadas; duas provas não permitem inferir frequência, e o edital de 2026 prevê o item.

### 8. Síntese

- Projeto: temporário, único; operação: contínua; produto: ciclo de vida longo; programa/portfólio: benefícios/estratégia.
- Projeto × produto: *output* × *outcome*; temporário × contínuo; escopo/prazo/custo × valor/resultado.
- Projetos executam a estratégia: caso de negócio, benefícios, governança, patrocinador, partes interessadas.
- EEF (influenciam) × OPA (apoiam).
- Estruturas: funcional → matricial (fraca, balanceada, forte) → projetizada; autoridade do GP cresce nesse sentido.

### 9. Pontos para a futura produção de questões (registro)

Conceitos: projeto, operação, produto, programa, portfólio; EEF/OPA; estruturas. Distinções: projeto×produto; matriz fraca×forte; EEF×OPA. Interpretação: classificar um trabalho como projeto ou operação; identificar a estrutura a partir da autoridade descrita; escolher a medida de sucesso adequada ao produto.

### 10. Referências

Fontes de apoio (autor/título; edição e páginas **não verificadas online nesta etapa**, salvo onde indicado):

- PROJECT MANAGEMENT INSTITUTE. *A Guide to the Project Management Body of Knowledge (PMBOK® Guide)* e *The Standard for Project Management*. 7th ed., 2021 — **edição verificada online em 2026-10-31** (existe a 8ª edição, publicada a partir de nov./2025; o edital cita a 7ª). Termos EEF/OPA e a tabela de estruturas organizacionais vêm de edições anteriores (6ª); conferir.
- CAGAN, M. *Inspired: How to Create Tech Products Customers Love*. Wiley — **não verificado online** (edição/ano pendentes).
- KERSTEN, M. *Project to Product*. IT Revolution Press — **não verificado online** (ano pendente).
- Edital Transpetro nº 04/2026.4, Anexo IV, itens 2.2 e 2.5.


---

## Scrum (e Fundamentos do Pensamento Ágil)

**Módulo:** M02 — Gerenciamento de Projetos e Produtos
**Texto oficial (Anexo IV):** 2.1 "Scrum e Kanban" (esta parte trata do **Scrum**; o Kanban está em `03-kanban.md`).
**Escopo:** A para o Scrum; B para o Manifesto Ágil (contexto) e para práticas não prescritas pelo guia (story points, velocity, planning poker, gráficos de burndown).
**Versão de referência:** *Scrum Guide* de **2020** (Schwaber e Sutherland), verificado em scrumguides.org em 2026-10-31 (a página indica a versão de 2020; não verifiquei o histórico de revisões).
**Status:** `VALIDADO` (aprovado pelo usuário em 2026-10-31, com ressalvas: textos do PMI e princípios Lean-Agile do SAFe não verificados em fonte primária; interpretação dos itens 2.5 e 2.7 a confirmar — ver `docs/qualidade/relatorio-producao-modulo-02.md`).

**Objetivos de aprendizagem.** (1) Explicar o contexto e os valores do pensamento ágil; (2) descrever a teoria, os valores, o time, os eventos e os artefatos do Scrum com suas **responsabilidades** e **prazos máximos**; (3) distinguir Scrum de abordagens preditivas e de Kanban; (4) reconhecer erros conceituais frequentes.

---

### 1. Introdução

**Scrum** é um *framework* (arcabouço) leve para que pessoas, times e organizações gerem valor por meio de **soluções adaptativas para problemas complexos**. Baseia-se no **empirismo** (decidir com base na experiência e no que se observa) e no **pensamento *lean*** (reduzir desperdício, focar no essencial), e funciona em **ciclos curtos (Sprints)** que produzem incrementos utilizáveis. É um *framework*, **não** uma metodologia completa nem um processo detalhado: o Scrum Guide define o mínimo e deixa livre a escolha de técnicas e ferramentas.

*Relações:* o Scrum é um dos pilares do item 2.1; é a base sobre a qual o SAFe escala (item 2.3, arquivo `04`); a **história do usuário** (item 6.2, Módulo 6) e o **ciclo de vida** (item 5.2, Módulo 5) o complementam; o PMBOK 7ª edição reconhece abordagens adaptativas (arquivo `05`).

### 2. Contexto: o pensamento ágil

#### 2.1 Manifesto Ágil (2001)

O **Manifesto para o Desenvolvimento Ágil de Software** declara quatro valores — "valorizamos mais" os itens da esquerda, sem desprezar os da direita:

| Valorizamos mais | do que |
|---|---|
| **Indivíduos e interações** | Processos e ferramentas |
| **Software em funcionamento** | Documentação abrangente |
| **Colaboração com o cliente** | Negociação de contratos |
| **Responder a mudanças** | Seguir um plano |

Os **doze princípios** reforçam, entre outros: entrega **contínua e antecipada** de valor; acolher mudanças de requisitos; entregas frequentes (semanas a poucos meses); colaboração diária entre negócio e desenvolvedores; equipes motivadas e autoorganizadas; conversa face a face; software funcionando como medida de progresso; ritmo sustentável; atenção à excelência técnica; **simplicidade** (maximizar o trabalho não realizado); reflexão periódica para ajustar o comportamento.

#### 2.2 Abordagem preditiva × ágil

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

### 3. Teoria e valores do Scrum

#### 3.1 Os três pilares do empirismo

| Pilar | Significado |
|---|---|
| **Transparência** | O trabalho e o progresso são visíveis a quem os realiza e a quem os recebe, com padrão comum de entendimento |
| **Inspeção** | Inspeciona-se com frequência os artefatos e o progresso, para detectar variações indesejáveis |
| **Adaptação** | Ajusta-se o processo ou o que está sendo feito quando se detecta desvio |

#### 3.2 Valores

**Compromisso (*Commitment*)**, **Foco**, **Abertura**, **Respeito** e **Coragem**.

### 4. O Scrum Team e suas responsabilidades

O **Scrum Team** é a unidade fundamental: **um Scrum Master, um Product Owner e Desenvolvedores**. Não há subtimes nem hierarquias dentro dele. É **multifuncional** (reúne as habilidades necessárias para criar valor a cada Sprint) e **autogerenciado** (decide internamente quem faz o quê, quando e como). Em geral tem **dez pessoas ou menos**. É responsável por todas as atividades relacionadas ao produto: colaboração com partes interessadas, verificação, manutenção, operação, experimentação, pesquisa e desenvolvimento.

| Responsabilidade (*accountability*) | Papel |
|---|---|
| **Desenvolvedores (*Developers*)** | Pessoas do time comprometidas em criar **qualquer aspecto de um Incremento utilizável** a cada Sprint. Criam o **plano da Sprint** (Sprint Backlog), garantem qualidade aderindo à **Definição de Pronto**, adaptam o plano a cada dia rumo à **Meta da Sprint** e responsabilizam-se mutuamente |
| **Product Owner (PO)** | Responsável por **maximizar o valor do produto** resultante do trabalho do time. Desenvolve e comunica a **Meta do Produto**; cria e comunica itens do Product Backlog; **ordena** (prioriza) os itens; garante que o backlog seja transparente. É **uma pessoa**, não um comitê; as decisões são respeitadas |
| **Scrum Master** | Responsável por **estabelecer o Scrum** conforme o guia, ajudando todos a entender a teoria e a prática. **Líder-servidor**: serve ao time (coaching, remoção de impedimentos, facilitação), ao PO (técnicas de definição de meta e gestão do backlog, apoio ao planejamento do produto) e à organização (adoção do Scrum, treinamento, remoção de barreiras) |

*Terminologia histórica:* até o Scrum Guide de 2017 falava-se em "Papéis" e em **Time de Desenvolvimento** (*Development Team*); a edição de 2020 usa "responsabilidades" e **Desenvolvedores**, e enfatiza **um único** Scrum Team com foco no produto. Questões antigas podem usar a terminologia anterior e "reunião" no lugar de "evento".

### 5. Eventos do Scrum

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

### 6. Artefatos e seus compromissos

O Scrum define três artefatos, cada um com um **compromisso** que reforça a transparência e o foco:

| Artefato | O que é | Compromisso associado |
|---|---|---|
| **Product Backlog** | Lista **ordenada e emergente** do que é necessário para melhorar o produto; única fonte de trabalho do Scrum Team | **Meta do Produto** (*Product Goal*): estado futuro do produto, objetivo de longo prazo do time |
| **Sprint Backlog** | Meta da Sprint (**por quê**) + itens selecionados do Product Backlog (**o quê**) + plano para entregá-los (**como**); plano **dos Desenvolvedores**, visível em tempo real | **Meta da Sprint** (*Sprint Goal*): objetivo único da Sprint |
| **Incremento** | Passo concreto rumo à Meta do Produto; soma de todos os itens concluídos, **utilizável** e verificado | **Definição de Pronto** (*Definition of Done*): descreve o estado do Incremento quando atende às medidas de qualidade |

- Um item só integra o Incremento se **atender à Definição de Pronto**; se não atender, não pode ser liberado nem apresentado na Revisão e **volta ao Product Backlog**.
- Se a Definição de Pronto de um Incremento fizer parte dos padrões da organização, todos os times devem segui-la no mínimo; caso contrário, o Scrum Team a cria.
- **Definição de Pronto** (qualidade do Incremento, comum a todos os itens) ≠ **critérios de aceitação** (condições específicas de cada item/história).

### 7. Práticas comuns não prescritas pelo Scrum Guide (complemento B)

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

### 8. Comparações conceituais

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

### 9. Aplicações e cenários

**Cenário (didático): portal interno de ordens de serviço.** O PO mantém o backlog ordenado por valor (por exemplo, abertura de ordem pelo celular antes de relatórios). Na Planning, o time define a Meta da Sprint ("técnicos conseguem abrir e consultar ordens pelo celular"), seleciona itens e planeja tarefas. Diariamente, na Daily Scrum, inspeciona o progresso. Na Review, usuários testam o Incremento e sugerem ajustes; na Retrospectiva, o time decide melhorar a revisão de código. *Limitação:* depende de acesso a usuários e de um PO com autoridade.

**Cenário (didático): problemas típicos (anti-padrões).** (a) A Daily vira relatório de status ao gerente; (b) o PO é um comitê; (c) o Scrum Master atua como chefe do time; (d) a Retrospectiva é descartada por falta de tempo; (e) itens "quase prontos" são contados como entrega. Todos contrariam o guia.

### 10. Atenção para a prova

*Inferência técnica e recomendação pedagógica; sem atribuir frequência à banca.*

- Memorizar **eventos, responsáveis e *timeboxes*** (Sprint ≤ 1 mês; Planning 8 h; Daily 15 min; Review 4 h; Retro 3 h, para Sprint de um mês).
- **Retrospectiva** = após a Revisão; **Revisão** = inspeciona o Incremento; **Retrospectiva** = inspeciona o processo.
- A **Daily** é dos Desenvolvedores e serve ao **plano da Sprint**; não é relatório de status.
- O Scrum **não define** *story points*, *velocity* nem *burndown*; são práticas complementares.
- Nada de "Scrum prevê um gerente de projetos" ou "o Scrum prescreve fases sequenciais".
- Distinguir terminologia de 2017 e 2020 (Time de Desenvolvimento × Desenvolvedores; papéis × responsabilidades).
- *Evidência histórica (amostra de duas provas):* a Prova 15 de 2018 perguntou **quando ocorre a Reunião de Retrospectiva** (Q28) e **a escala de cartas de pontos de história** (Q31), com terminologia da época; a Prova 6 de 2023 (Q65) comparou Scrum e Kanban. Duas provas não permitem inferir frequência.

### 11. Síntese

- Scrum: *framework* empírico (transparência, inspeção, adaptação); valores (compromisso, foco, abertura, respeito, coragem).
- Scrum Team: Scrum Master + Product Owner + Desenvolvedores; ≤ 10 pessoas; multifuncional e autogerenciado.
- Eventos: Sprint (≤ 1 mês), Planning (8 h), Daily (15 min), Review (4 h), Retro (3 h).
- Artefatos e compromissos: Product Backlog (Meta do Produto); Sprint Backlog (Meta da Sprint); Incremento (Definição de Pronto).
- PO: valor e backlog; SM: Scrum e remoção de impedimentos; Desenvolvedores: Incremento e plano.
- Práticas complementares: história, story points, planning poker, velocity, burndown.

### 12. Pontos para a futura produção de questões (registro)

Conceitos: pilares e valores; time; eventos e prazos; artefatos e compromissos. Distinções: PO×SM; Review×Retro; Product×Sprint Backlog; Definição de Pronto×critérios de aceitação; Scrum×cascata×Kanban. Interpretação: em que evento determinada atividade ocorre; quem é responsável por quê; se uma prática é parte do Scrum.

### 13. Referências

- SCHWABER, K.; SUTHERLAND, J. *The Scrum Guide*. Nov. 2020. https://scrumguides.org — **verificado em 2026-10-31** (versão de 2020, responsabilidades, eventos, prazos, artefatos, compromissos e valores).
- *Manifesto for Agile Software Development* (2001), https://agilemanifesto.org e /principles.html — **verificado em 2026-10-31** (quatro pares de valores e doze princípios).
- Edital Transpetro nº 04/2026.4, Anexo IV, item 2.1.


---

## Kanban

**Módulo:** M02 — Gerenciamento de Projetos e Produtos
**Texto oficial (Anexo IV):** 2.1 "Scrum e Kanban" (esta parte trata do **Kanban**).
**Escopo:** A. O edital cita o Kanban sem versão. Usam-se aqui o **Kanban Guide** (edição de maio de 2025, v2025.5, a mais recente listada em kanbanguides.org; edições anteriores: dez./2020 e jul./2020) e o **Método Kanban** descrito por David J. Anderson.
**Status:** `VALIDADO` (aprovado pelo usuário em 2026-10-31, com ressalvas: textos do PMI e princípios Lean-Agile do SAFe não verificados em fonte primária; interpretação dos itens 2.5 e 2.7 a confirmar — ver `docs/qualidade/relatorio-producao-modulo-02.md`).

**Objetivos de aprendizagem.** (1) Definir Kanban e explicar o sistema de **puxar** trabalho; (2) descrever o quadro, o limite de trabalho em andamento (WIP) e as métricas de fluxo; (3) diferenciar Kanban e Scrum; (4) reconhecer práticas e erros típicos.

---

### 1. Introdução

**Kanban** (do japonês, "sinal/cartão visual") é uma **estratégia para otimizar o fluxo de valor** por meio de um processo, tornando o trabalho **visível**, **controlando a quantidade em andamento** e **melhorando continuamente** o fluxo. Surgiu na manufatura enxuta (Toyota), como sinal visual para repor materiais ("puxar" conforme a demanda), e foi adaptado ao trabalho do conhecimento (TI, serviços) por Anderson, nos anos 2000. Não prescreve papéis, eventos nem iterações de duração fixa; **acrescenta-se ao processo existente**.

*Relações:* é um dos dois métodos do item 2.1 (com o Scrum, arquivo `02`); é a base do **portfólio Kanban** do SAFe (item 2.3, arquivo `04`); relaciona-se com o fluxo de valor (lean) e com a gestão de serviços de TI (Módulo 4).

### 2. Fundamentos

#### 2.1 O Kanban Guide (edição 2025)

O guia define o Kanban como estratégia para otimizar o fluxo de valor e descreve **três práticas**:

| Prática | Conteúdo |
|---|---|
| **Definir e visualizar o fluxo de trabalho** | O **fluxo de trabalho** é o conjunto de estados pelos quais um item passa do início ao fim (por exemplo, *Backlog → Em análise → Em desenvolvimento → Em teste → Concluído*). Cada estado é visível, com **regras explícitas** de entrada e saída. O fluxo é representado em um **quadro Kanban** |
| **Gerenciar ativamente os itens** | Acompanhar o **WIP**, a idade dos itens, **desbloquear** o que está parado e **puxar** novos itens apenas quando há capacidade |
| **Melhorar o fluxo de trabalho** | Usar as métricas de fluxo para aprender e experimentar mudanças |

O guia exige que os membros **controlem explicitamente a quantidade de itens em andamento** (o texto **não** usa a expressão "limite de WIP", mas isso é a prática consagrada: numérica ou por espaços/fichas no quadro). A literatura e as ferramentas de mercado usam amplamente o termo **limite de WIP**.

#### 2.2 O Método Kanban (Anderson)

Princípios de gestão da mudança: (1) **começar com o que se faz agora**; (2) concordar em buscar **mudanças incrementais e evolutivas**; (3) **respeitar** processos, papéis e responsabilidades atuais; (4) incentivar **atos de liderança em todos os níveis**. Práticas centrais, na formulação mais difundida: **visualizar o fluxo**, **limitar o WIP**, **gerenciar o fluxo**, **tornar explícitas as políticas**, **implementar ciclos de feedback**, **melhorar de forma colaborativa e evoluir experimentalmente** (modelos e ciência).

#### 2.3 O quadro Kanban

```text
 Backlog │ A fazer │ Em desenvolvimento (WIP ≤ 3) │ Em teste (WIP ≤ 2) │ Concluído
 ────────┼─────────┼──────────────────────────────┼────────────────────┼──────────
   [ ]   │   [ ]   │   [A] [B] [C]                │   [D] [E]          │   [F] [G]
   [ ]   │         │                              │                    │
```

Elementos: **colunas** (estados), **cartões** (itens), **limites de WIP** por coluna ou por trecho, **raias** (*swimlanes*: por tipo de item ou classe de serviço), **políticas explícitas** (critério de "pronto" para passar de coluna), sinais de **bloqueio**.

#### 2.4 Sistema de puxar e limite de WIP

Em um **sistema de puxar** (*pull system*), um item só entra em um estado quando há **capacidade livre**; no sistema de **empurrar**, o trabalho é lançado independentemente da capacidade, formando filas. Ao **limitar o WIP**:

- Reduz-se o **multitarefa** e a troca de contexto;
- Revelam-se **gargalos** (a coluna cheia sinaliza onde o fluxo trava);
- **Acelera-se** a conclusão dos itens (menos itens simultâneos, menor tempo em cada um);
- Melhora-se o foco em **terminar** antes de **começar**.

#### 2.5 Métricas de fluxo

O Kanban Guide (2025) define quatro métricas de fluxo, **obrigatórias**:

| Métrica | Definição | Uso |
|---|---|---|
| **WIP** (*Work in Progress*) | Número de itens **iniciados e ainda não concluídos** | Controla sobrecarga e identifica acúmulo |
| **Throughput (vazão)** | **Número de itens concluídos por unidade de tempo** (contagem exata de itens) | Capacidade do sistema; base de previsões |
| **Idade do item de trabalho (*Work Item Age*)** | **Tempo decorrido entre o início do item e a data atual** | Identifica itens parados; atua sobre itens **em andamento** |
| **Tempo de ciclo (*Cycle Time*)** | **Tempo decorrido entre o início e o término** de um item | Previsibilidade; métrica de itens **concluídos** |

Observações:

- O **lead time** (tempo de espera do pedido do cliente até a entrega) é conceito próximo, muito usado na literatura: inclui o tempo na fila **antes** de o trabalho ser iniciado. O **tempo de ciclo**, no guia, começa quando o trabalho é **iniciado**. Em provas, siga a definição dada no enunciado.
- **Lei de Little** (para sistemas estáveis): **tempo de ciclo médio = WIP médio ÷ throughput médio**. Se o WIP aumenta e o throughput se mantém, o tempo de ciclo cresce. *Exemplo:* 12 itens em andamento e vazão de 3 itens/semana ⇒ tempo de ciclo médio ≈ 4 semanas.
- **Diagrama de fluxo cumulativo** (*cumulative flow diagram*): mostra, ao longo do tempo, quantos itens há em cada estado; bandas que se alargam indicam gargalo.
- **Classes de serviço** (por exemplo, expedito, data fixa, padrão, intangível): políticas diferentes de prioridade para tipos de itens.

#### 2.6 Previsão

Com o histórico de **throughput** e de **tempo de ciclo**, estimam-se prazos por **percentis** ("85% dos itens concluem em até 6 dias") ou por **simulação de Monte Carlo** (complemento B), em vez de estimativas de esforço detalhadas.

### 3. Kanban × Scrum

| Critério | **Scrum** | **Kanban** |
|---|---|---|
| Cadência | **Sprints de duração fixa** (≤ 1 mês) | **Fluxo contínuo**; sem iterações obrigatórias |
| Papéis | Scrum Master, Product Owner, Desenvolvedores | **Nenhum papel obrigatório**; mantém os papéis existentes |
| Eventos | Planning, Daily, Review, Retro (obrigatórios) | Sem eventos obrigatórios; reuniões de acompanhamento são opcionais |
| Controle de carga | Meta e escopo da Sprint (capacidade por Sprint) | **Limite de WIP** (quantidade simultânea) |
| Quando entra trabalho | Planejamento da Sprint; mudanças evitadas durante a Sprint | **A qualquer momento**, quando há capacidade (puxar) |
| Entregas | Incremento ao fim de cada Sprint (pode haver mais de um) | Entrega **contínua**, item a item |
| Métricas típicas | *Velocity*, burndown (práticas comuns) | WIP, throughput, tempo de ciclo, idade do item |
| Mudança de prioridade | Preferencialmente no fim da Sprint (por Meta da Sprint) | Imediata, respeitando o WIP |
| Aplicação típica | Desenvolvimento de produto com cadência regular | Fluxo de demandas contínuas (suporte, manutenção, operações) ou combinando com outros métodos |

**O que NÃO é verdade:** que o Scrum organize tarefas em "listas individuais" e o Kanban use burndown; que o Kanban **enfatize reuniões diárias** e o Scrum não; que o Kanban **exija um Product Owner** e o Scrum não. O Scrum tem Daily Scrum e Product Owner; o Kanban não os prescreve; o Scrum usa iterações fixas e o Kanban não tem limite de tempo fixo.

*Combinação:* o **Kanban Guide for Scrum Teams** (Scrum.org, com a Kanban University) mostra como times Scrum aplicam práticas de fluxo (visualização, limite de WIP, métricas). **Scrumban** designa, de modo informal, a combinação de elementos de Scrum e Kanban (complemento B; não é um padrão).

### 4. Comparações conceituais

| Conceito A | Conceito B | Diferença principal |
|---|---|---|
| Sistema de puxar | Sistema de empurrar | Itens entram quando há capacidade × trabalho lançado independentemente da capacidade |
| WIP | Throughput | Itens em andamento × itens concluídos por tempo |
| Tempo de ciclo | Idade do item | Itens concluídos (início→fim) × itens em andamento (início→hoje) |
| Tempo de ciclo | Lead time | Do início do trabalho ao término × do pedido à entrega (inclui espera) |
| Quadro Kanban | Quadro de tarefas do Scrum | Estados do fluxo com limite de WIP × tarefas da Sprint (A fazer/Fazendo/Feito) |
| Kanban | Scrum | Fluxo contínuo e limite de WIP × Sprints, papéis e eventos |
| Limite de WIP | Prazo da Sprint | Restringe itens simultâneos × restringe o tempo do ciclo |

### 5. Aplicações e cenários

**Cenário (didático): equipe de suporte a sistemas.** As demandas chegam de forma contínua e imprevisível. Um quadro com colunas (*Triagem → Em análise → Correção → Validação → Concluído*) e limite de WIP por coluna evita que a equipe comece tudo ao mesmo tempo. O tempo de ciclo médio e o percentil 85 passam a orientar os compromissos com os usuários. *Limitação:* sem políticas explícitas e disciplina, o limite de WIP é ignorado.

**Cenário (didático): gargalo em testes.** A coluna "Em teste" vive cheia e "Em desenvolvimento" produz mais do que o teste absorve. A equipe reduz o WIP de desenvolvimento e redistribui pessoas para testes, em vez de ampliar a coluna.

**Erros típicos:** quadro sem limite de WIP (apenas "painel de tarefas"); colunas sem critério de saída; ignorar itens bloqueados; medir "ocupação" em vez de fluxo.

### 6. Atenção para a prova

*Inferência técnica e recomendação pedagógica; sem atribuir frequência à banca.*

- **Diferença central Scrum × Kanban:** iterações de **tempo fixo** (Sprints) × **fluxo contínuo** sem limite de tempo fixo; Scrum com papéis e eventos definidos; Kanban sem papéis obrigatórios.
- **Limite de WIP** é característica **do Kanban** (e não de "reuniões diárias" ou "Product Owner").
- **Burndown** é prática comum de Scrum, não característica definidora do Kanban.
- Métricas: reconhecer WIP, throughput, tempo de ciclo e idade do item; Lei de Little.
- Cuidado com alternativas que **trocam atribuições** entre Scrum e Kanban.
- *Evidência histórica (amostra de duas provas):* a Prova 6 de 2023 (Q65) pediu **a diferença marcante entre Scrum e Kanban**, com distratores que trocavam elementos dos dois métodos. Duas provas não permitem inferir frequência.

### 7. Síntese

- Kanban: estratégia para otimizar o fluxo de valor; visualizar, controlar WIP, gerenciar itens, melhorar o fluxo.
- Sistema de puxar; limite de WIP revela gargalos e reduz multitarefa.
- Métricas: WIP, throughput, tempo de ciclo, idade do item; Lei de Little (tempo de ciclo = WIP ÷ throughput).
- Sem Sprints, papéis ou eventos obrigatórios; entrega contínua.
- Scrum: Sprints fixas, papéis e eventos; Kanban: fluxo contínuo e limite de WIP.

### 8. Pontos para a futura produção de questões (registro)

Conceitos: quadro, WIP, puxar, throughput, tempo de ciclo, idade do item, Lei de Little. Distinções: Scrum×Kanban; tempo de ciclo×lead time; puxar×empurrar. Interpretação: calcular tempo de ciclo médio pela Lei de Little; identificar gargalo em um quadro; escolher o método para um cenário.

### 9. Referências

- KANBAN GUIDES. *The Kanban Guide*. v2025.5 (maio de 2025); edições anteriores 2020. https://kanbanguides.org/the-kanban-guide/ — **verificado em 2026-10-31** (três práticas, quatro métricas, ausência do termo "limite de WIP" no texto lido).
- SCRUM.ORG; KANBAN UNIVERSITY. *The Kanban Guide for Scrum Teams* — existência confirmada em busca online; conteúdo detalhado **não verificado**.
- ANDERSON, D. J. *Kanban: Successful Evolutionary Change for Your Technology Business*. Sequim (WA): Blue Hole Press, 2010 — **verificado** em catálogo de biblioteca (o conteúdo dos princípios e práticas citados vem do conhecimento do autor deste material e não foi confrontado com o livro).
- LITTLE, J. D. C. "A Proof for the Queuing Formula: L = λW". *Operations Research*, v. 9, n. 3, p. 383–387, 1961 — **verificado** (RePEc); a primeira publicação da fórmula é atribuída a outro autor, mas a prova é de Little.
- Edital Transpetro nº 04/2026.4, Anexo IV, item 2.1.


---

## Práticas Ágeis em Escala e SAFe: Portfólio Alinhado à Estratégia e Entregas Incrementais

**Módulo:** M02 — Gerenciamento de Projetos e Produtos
**Texto oficial (Anexo IV):** 2.3 "Impulso de práticas ágeis em escala, gestão de portfólio alinhada à estratégia de negócios e realização de entregas incrementais utilizando a metodologia safe".
**Escopo:** A para o **SAFe** (*Scaled Agile Framework*), citado no edital (que escreve "safe" em minúsculas, grafia preservada). Frameworks alternativos (LeSS, Nexus etc.) são complemento B, apenas para contraste.
**Nota de versão:** o SAFe **evolui**. A SAFe 6.0 (março de 2023, segundo o site oficial) organiza-se em **sete competências essenciais**; o site oficial consultado em 2026-10-31 apresenta uma organização mais recente, em **cinco "disciplinas"** (Lean Portfolio Management, Team and Technical Agility, Product Development Flow, Large Solution Integration and Delivery, Leadership and Culture). O edital **não indica versão**. Este material prioriza os **conceitos estáveis** do SAFe (ART, PI, PI Planning, portfólio enxuto, entregas incrementais), que aparecem em ambas as organizações; **nomes de competências/disciplinas devem ser conferidos na versão adotada**.
**Status:** `VALIDADO` (aprovado pelo usuário em 2026-10-31, com ressalvas: textos do PMI e princípios Lean-Agile do SAFe não verificados em fonte primária; interpretação dos itens 2.5 e 2.7 a confirmar — ver `docs/qualidade/relatorio-producao-modulo-02.md`).

**Objetivos de aprendizagem.** (1) Explicar por que e como se escalam práticas ágeis; (2) descrever a estrutura do SAFe (equipes, ART, soluções, portfólio) e seus eventos (PI Planning, demonstração do sistema, Inspect & Adapt); (3) explicar a gestão de **portfólio enxuto** alinhada à estratégia; (4) descrever como o SAFe viabiliza **entregas incrementais**; (5) diferenciar PI, PI Planning e portfólio.

---

### 1. Introdução

O Scrum e o Kanban (arquivos `02` e `03`) funcionam bem para **uma equipe**. Em grandes organizações, o mesmo produto exige **dezenas de equipes** que precisam **se coordenar** (dependências, arquitetura, integração), **alinhar-se à estratégia** (o que financiar e priorizar) e **entregar valor com frequência** (incrementos integrados, não apenas por equipe). **Práticas ágeis em escala** são os arcabouços que tratam desses desafios. O SAFe é um dos mais difundidos e é o citado pelo edital.

*Relações:* o SAFe usa Scrum e Kanban no nível das equipes (arquivos `02`/`03`); a gestão de portfólio relaciona-se com a gestão por valor do PMBOK 7ª edição (arquivo `05`) e com o escritório de projetos (arquivo `06`); a governança de TI e o planejamento estratégico aparecem no Módulo 4.

### 2. Fundamentos: escalar o ágil

#### 2.1 Desafios de escala

| Desafio | Pergunta |
|---|---|
| **Coordenação** | Como várias equipes planejam e integram em conjunto? |
| **Alinhamento** | Como trabalho e orçamento ligam-se à estratégia? |
| **Arquitetura** | Como evoluir uma arquitetura comum sem bloquear equipes? |
| **Cadência** | Como sincronizar ciclos de planejamento e de entrega? |
| **Governança** | Como acompanhar o progresso sem burocratizar? |
| **Cultura** | Como mudar liderança, financiamento e métricas? |

#### 2.2 Panorama de frameworks (complemento B)

| Framework | Ideia central | Observação |
|---|---|---|
| **SAFe** (Scaled Agile Framework) | Estrutura em camadas (equipe, trem de entrega, solução, portfólio) com cadência sincronizada | Cobre desde equipes até o portfólio; item do edital |
| **LeSS** (Large-Scale Scrum) | Scrum aplicado a muitas equipes com **um** backlog de produto e **um** PO | Busca simplicidade; poucos papéis adicionais |
| **Nexus** | Extensão do Scrum para 3 a 9 times, com uma **equipe de integração** | Mantém o Scrum como base |
| **Scrum@Scale** | Escala o Scrum por "Scrum de Scrums" e *MetaScrum* | Estrutura de times de times |
| **Disciplined Agile (DA)** | Conjunto de opções e processos contextuais | Orientado a "escolher o seu modo de trabalhar" |

*Observação:* a descrição acima é de visão geral; não foi verificada online nesta etapa. O modelo "Spotify" (squads, tribos, guildas) é um **exemplo de organização**, não um framework formal.

### 3. SAFe: visão geral

O **SAFe** é uma **base de conhecimento** de princípios, práticas e competências para aplicar **Lean, ágil e *DevOps*** em escala e atingir **agilidade de negócio**. Combina práticas das equipes (Scrum, Kanban, *Extreme Programming*) com pensamento sistêmico (*lean*), cadência e sincronização, e gestão enxuta de portfólio.

#### 3.1 Princípios Lean-Agile (visão)

Entre os princípios do SAFe: **adotar uma visão econômica** das decisões; **aplicar pensamento sistêmico**; **assumir variabilidade e preservar opções**; **construir de forma incremental** com ciclos de aprendizado rápidos; basear marcos em **avaliação objetiva de sistemas funcionando**; **visualizar e limitar o WIP**, reduzir lotes e gerir filas; **aplicar cadência e sincronizar** com planejamento entre domínios; **liberar a motivação intrínseca** dos trabalhadores do conhecimento; **descentralizar a tomada de decisão**; **organizar em torno de valor**. *(Lista conforme a literatura do SAFe 6.0; não confirmada literalmente online nesta etapa.)*

#### 3.2 Estrutura em níveis

| Nível | Quem | O que faz |
|---|---|---|
| **Equipe ágil** | Times multifuncionais (Scrum/Kanban/XP) | Entregam histórias em **iterações** (tipicamente de 2 semanas) |
| **Trem de entrega ágil (*Agile Release Train*, ART)** | Conjunto de equipes de **50 a 125 pessoas** (segundo o site oficial) | Desenvolve, entrega e, muitas vezes, opera uma ou mais soluções em um **fluxo de valor**; sincronizado por cadência |
| **Solução (grande porte)** | Vários ARTs e fornecedores | Coordena soluções complexas (*Solution Train*) |
| **Portfólio** | Liderança estratégica, gestores de portfólio, escritórios de projetos | **Gestão enxuta de portfólio** (financiamento, priorização, governança) |

*(Em versões diferentes, os nomes e a divisão em "configurações" — Essencial, Solução de grande porte, Portfólio, Completa — variam; confirmar na versão adotada.)*

### 4. O trem de entrega ágil (ART) e o Incremento de Programa (PI)

#### 4.1 ART

O **ART** é uma **equipe de equipes ágeis de longa duração** (*long-lived*), alinhada a um **fluxo de valor**, que planeja, entrega e inspeciona em conjunto, com **cadência fixa**. Principais papéis (nomenclatura SAFe 6.0): **Release Train Engineer (RTE)** — facilita o trem, líder-servidor; **Gerência de Produto** — define a visão e o backlog do programa; **Arquiteto/Engenheiro de Sistema**; **Business Owners** (partes interessadas de negócio); e, nas equipes, **Product Owners**, **Scrum Masters** e membros do time.

#### 4.2 Program Increment (PI)

**PI (Program Increment, Incremento de Programa)** é o **período fixo de tempo** (*timebox*) em que o ART planeja, desenvolve e entrega um **incremento integrado e utilizável**. Segundo o site oficial, o PI é um *timebox* de **8 a 12 semanas**, e a estrutura mais comum tem **quatro ou cinco iterações de desenvolvimento** mais uma **iteração de inovação e planejamento** (*Innovation and Planning*, IP), sem número fixo de iterações. O planejamento do PI ocorre a cada **8 a 12 semanas** (cadência do **PI Planning**, segundo o site oficial). O PI está para o ART como a **Sprint** está para o time Scrum, em escala maior. *Importante:* o PI é um **período de tempo**, não uma reunião nem um plano.

#### 4.3 PI Planning

**PI Planning** é um **evento baseado em cadência, presencial ou virtual, de todo o ART** (tipicamente **dois dias**, a cada 8–12 semanas, facilitado pelo RTE), em que as equipes **alinham-se a uma missão e visão comuns**, planejam o próximo PI e identificam **dependências e riscos**. Resultados comuns: **objetivos do PI** de cada equipe (com valor de negócio), **quadro de programa** (*program board*) com funcionalidades e dependências, **riscos** tratados em um quadro **ROAM** (Resolvidos, Atribuídos, Aceitos, Mitigados) e um **voto de confiança** das equipes no plano.

#### 4.4 Outros eventos de cadência

| Evento | Finalidade |
|---|---|
| **Planejamento da iteração** | Cada equipe planeja a iteração (como no Scrum) |
| **Demonstração do sistema** (*System Demo*) | A cada iteração: demonstra o **incremento integrado** do ART às partes interessadas |
| **Inspect & Adapt (I&A)** | Ao fim de cada PI, em três partes (**verificado** no site oficial): **demonstração do sistema do PI**, **revisão de medições quantitativas e qualitativas** e **retrospectiva com oficina de resolução de problemas** |
| **Scrum de Scrums / sincronização de PO** | Coordenação de dependências entre as equipes |

### 5. Entregas incrementais

O SAFe busca **valor entregue com frequência**, com qualidade, por meio de:

- **Iterações curtas** em que cada equipe entrega histórias testadas e integradas.
- **Demonstração do sistema** a cada iteração: um **incremento integrado do todo**, não só de cada equipe.
- **PI**: marco maior em que o ART entrega um **incremento de valor de negócio** que pode ser liberado.
- **Pipeline de entrega contínua** (*Continuous Delivery Pipeline*): exploração contínua, integração contínua, implantação contínua e **liberação sob demanda** (*release on demand*), que **separa a implantação técnica da liberação ao cliente**.
- **Base arquitetural evolutiva** (*architectural runway*) e **facilitadores** (*enablers*) que permitem entregas futuras.
- **Medição objetiva** do progresso por sistemas funcionando (e não por documentos).

| Conceito | Descrição |
|---|---|
| **Incremento** | Resultado utilizável e integrado produzido em uma iteração ou PI |
| **Liberação sob demanda** | O negócio escolhe o momento de liberar o que já está implantado |
| **Entrega incremental** × **entrega única** | Valor liberado em partes ao longo do tempo × tudo ao final do projeto |

### 6. Gestão de portfólio alinhada à estratégia (*Lean Portfolio Management*)

#### 6.1 Conceito

A **gestão enxuta de portfólio** (*Lean Portfolio Management*, LPM) **alinha estratégia e execução** aplicando pensamento *lean* e sistêmico a três eixos (segundo o site oficial): **estratégia e financiamento de investimentos**, **operações ágeis de portfólio** e **governança enxuta**. Em vez de aprovar **projetos** e acompanhá-los por plano, **financia fluxos de valor** (*value streams*) e prioriza trabalho pelo **valor econômico**.

#### 6.2 Elementos

| Elemento | Descrição |
|---|---|
| **Temas estratégicos** (*strategic themes*) | Diferenciais estratégicos que conectam o portfólio à estratégia da empresa |
| **Fluxos de valor** | Sequência de atividades que entrega valor; unidade de financiamento |
| **Orçamentos enxutos e guardrails** | Financiamento **contínuo** por fluxo de valor com **balizas** (limites e regras de governança) em vez de aprovação projeto a projeto |
| **Épicos** | Iniciativas grandes que exigem análise e aprovação (de negócio ou habilitadores); entram em um **Kanban de portfólio** |
| **Kanban de portfólio** | Fluxo visual de épicos (funil, análise, portfólio, implementação, concluído) com limite de WIP |
| **Revisões estratégicas do portfólio** (trimestrais) e **sincronizações** (mensais) | Acompanhamento e rebalanceamento (cadências conforme o site oficial) |
| **Priorização econômica (WSJF)** | *Weighted Shortest Job First*: prioriza o que gera **mais valor por unidade de tempo**: **WSJF = custo do atraso relativo ÷ duração (tamanho) relativa do trabalho** (definição **verificada** no site oficial); as entradas são **valor para o negócio e o usuário**, **criticidade no tempo**, **redução de risco e/ou habilitação de oportunidade** e **tamanho do trabalho**; o **custo do atraso** é a soma das três primeiras |
| **Métricas** | Valor entregue, fluxo, qualidade, tempo de ciclo etc.; OKRs são usados por muitas organizações (complemento B) |

*Exemplo de WSJF (didático):* uma iniciativa com custo do atraso 21 e tamanho 3 tem WSJF = 7; outra, com custo do atraso 40 e tamanho 8, tem WSJF = 5; a primeira é priorizada, pois entrega valor mais rápido por esforço.

#### 6.3 Do portfólio à equipe: a cadeia de alinhamento

```text
Estratégia ─► Temas estratégicos ─► Visão do portfólio ─► Épicos
           ─► Funcionalidades (features, no ART) ─► Histórias (nas equipes)
```

Cada nível refina o anterior; a **transparência** da cadeia permite verificar se o trabalho serve à estratégia.

#### 6.4 LPM × gestão tradicional de projetos

| Critério | Portfólio tradicional | Portfólio enxuto (SAFe) |
|---|---|---|
| Unidade de financiamento | **Projeto** | **Fluxo de valor** |
| Aprovação | Caso de negócio detalhado, por projeto | Financiamento contínuo com *guardrails*; épicos pelo Kanban de portfólio |
| Planejamento | Plano anual, detalhado | Visão do portfólio, planejamento por ondas e cadência |
| Medição | Aderência a prazo, custo e escopo | **Valor entregue** e fluxo |
| Ajustes | Mudanças formais | Rebalanceamento em cadência |

### 7. Comparações conceituais

| Conceito A | Conceito B | Diferença principal |
|---|---|---|
| **PI** | **PI Planning** | Período fixo de tempo × evento de planejamento no início do período |
| **PI** | Sprint | Período do ART (várias iterações; 8–12 semanas) × período de uma equipe Scrum (≤ 1 mês) |
| **PI** | Rituais diários | O PI é um período, não um conjunto de reuniões diárias |
| **PI** | Gestão de portfólio | Período de entrega do ART × alinhamento estratégico de investimentos |
| **ART** | Equipe Scrum | Equipe de equipes alinhada a um fluxo de valor (50–125 pessoas) × time único (≤ 10) |
| **RTE** | Scrum Master | Facilita o trem (várias equipes) × facilita uma equipe |
| Funcionalidade (*feature*) | História | Entrega do ART em um PI × entrega de uma equipe em uma iteração |
| Épico | História | Iniciativa de portfólio × item pequeno da equipe |
| WSJF | Priorização por ordem de chegada | Valor/tempo × ordem de solicitação |
| Financiamento por projeto | Financiamento por fluxo de valor | Aprova-se um escopo × financia-se uma capacidade contínua |

### 8. Aplicações e cenários

**Cenário (didático): modernização de um conjunto de sistemas corporativos.** Doze equipes alteram módulos interdependentes. Formam um ART, realizam o **PI Planning** de dois dias para alinhar objetivos e dependências, e a cada iteração fazem uma **demonstração do sistema integrado**. Ao fim do PI, o **Inspect & Adapt** gera melhorias. *Limitação:* exige patrocínio, cadência disciplinada e investimento em integração/automação.

**Cenário (didático): alinhamento com a estratégia.** A liderança define temas estratégicos (por exemplo, "segurança operacional digital") e financia fluxos de valor correspondentes; novos épicos passam pelo Kanban de portfólio e são priorizados por WSJF. *Limitação:* indicadores simplistas de valor podem distorcer a priorização.

**Riscos e críticas:** implantação como "cerimonial" sem mudança de cultura e de liderança; excesso de papéis e processos; foco em certificações; dependência de uma versão específica do framework.

### 9. Atenção para a prova

*Inferência técnica e recomendação pedagógica; sem atribuir frequência à banca.*

- **PI = período fixo de tempo** durante o qual um conjunto de equipes (o ART) entrega valor; **PI Planning = evento** de planejamento; **LPM = alinhamento do portfólio à estratégia**. Não confundir.
- **Equipes ágeis sincronizadas por cadência** e **demonstração integrada** diferenciam o SAFe da simples soma de times Scrum.
- **Portfólio enxuto** financia **fluxos de valor** e usa **WSJF** e **Kanban de portfólio**.
- Termos de versão: "competências" (SAFe 6.0) × "disciplinas" (apresentação mais recente); use a nomenclatura do enunciado.
- O Scrum Master **não** é o RTE; o RTE é facilitador do **ART**.
- *Evidência histórica (amostra de duas provas):* a Prova 6 de 2023 (Q68) perguntou o que é o **Program Increment (PI)** no SAFe, com distratores que o confundiam com rituais diários, evento de revisão do backlog, plano de entregas e prática de planejamento estratégico de portfólio. Duas provas não permitem inferir frequência.

### 10. Síntese

- Escalar o ágil: coordenação, alinhamento estratégico, arquitetura, cadência, governança.
- SAFe: equipe → ART (50–125 pessoas) → solução → portfólio; Lean-Agile; cadência e sincronização.
- PI: período fixo (8–12 semanas); iterações + IP; PI Planning de dois dias; demonstração do sistema; Inspect & Adapt.
- Entregas incrementais: iterações, demo integrada, PI, pipeline de entrega contínua, liberação sob demanda.
- LPM: temas estratégicos, fluxos de valor, orçamentos enxutos, épicos e Kanban de portfólio, WSJF = custo do atraso ÷ tamanho.

### 11. Pontos para a futura produção de questões (registro)

Conceitos: ART, PI, PI Planning, Inspect & Adapt, LPM, WSJF, épico/feature/história. Distinções: PI×PI Planning×LPM; ART×equipe; RTE×SM; projeto×fluxo de valor. Interpretação: o que é cada elemento em um cenário; calcular WSJF; escolher o artefato correto na cadeia estratégia→equipe.

### 12. Referências

- SCALED AGILE, INC. *Scaled Agile Framework (SAFe)*. https://framework.scaledagile.com — **verificado em 2026-10-31**: definição e tamanho do ART (50–125 pessoas), PI Planning (dois dias, a cada 8–12 semanas, conduzido pelo RTE), eixos do LPM (estratégia e financiamento, operações ágeis de portfólio, governança), Kanban de portfólio, orçamentos enxutos e *guardrails*, revisões trimestrais e sincronizações mensais; SAFe 6.0 de março de 2023. Itens marcados "não confirmados" acima vêm da literatura do SAFe e **não foram verificados online**.
- WSJF, PI (8–12 semanas; quatro ou cinco iterações + IP) e Inspect & Adapt (três partes): **verificados** em páginas do site oficial (partes das páginas exigem *login*). Os **princípios Lean-Agile**: **não verificados** (página não localizada).
- Edital Transpetro nº 04/2026.4, Anexo IV, item 2.3.


---

## PMBOK Guide — 7ª Edição

**Módulo:** M02 — Gerenciamento de Projetos e Produtos
**Texto oficial (Anexo IV):** 2.4 "PMBOK 7ª edição".
**Escopo:** A. O edital de **2026** cita a **7ª edição**; o edital de **2023** citava a **6ª edição**. Os **grupos de processos e áreas de conhecimento** (item 3 do Anexo IV, interpretado como gerenciamento de projetos conforme decisão do usuário) são desenvolvidos no **Módulo 3** e aqui aparecem apenas na comparação entre edições.
**Versão considerada:** *The Standard for Project Management and A Guide to the Project Management Body of Knowledge (PMBOK® Guide)*, **7ª edição, PMI, 2021**. Em 2026-10-31 verificou-se online que a **8ª edição** foi publicada pelo PMI a partir de novembro de 2025 (fontes secundárias indicam menos princípios e domínios, com reintrodução de "áreas de foco"); **o edital cita a 7ª**, que é o referencial deste arquivo.
**Status:** `VALIDADO` (aprovado pelo usuário em 2026-10-31, com ressalvas: textos do PMI e princípios Lean-Agile do SAFe não verificados em fonte primária; interpretação dos itens 2.5 e 2.7 a confirmar — ver `docs/qualidade/relatorio-producao-modulo-02.md`).

**Objetivos de aprendizagem.** (1) Explicar a mudança da 6ª para a 7ª edição (de processos para princípios e valor); (2) enumerar e interpretar os **12 princípios**; (3) descrever os **8 domínios de desempenho**; (4) explicar o **sistema de entrega de valor**, a **adequação (*tailoring*)** e a relação com abordagens preditivas e ágeis; (5) compreender a EAP e as medidas de valor agregado como artefatos/métricas.

---

### 1. Introdução

O **PMBOK** é o corpo de conhecimento do **Project Management Institute (PMI)**. Até a 6ª edição, era organizado por **processos** (49 processos em **5 grupos** e **10 áreas de conhecimento**, com entradas, ferramentas e saídas). A **7ª edição (2021)** muda a abordagem: o foco passa a ser **entrega de valor**, com **princípios** (o que orienta a conduta e as decisões) e **domínios de desempenho** (grupos de atividades críticas), mais flexíveis, que acomodam abordagens **preditivas, ágeis e híbridas**. A edição é dividida em duas partes: o ***Standard*** (norma, com os princípios e o sistema de entrega de valor) e o ***Guide*** (guia, com os domínios de desempenho, adequação e modelos, métodos e artefatos).

*Relações:* o PMBOK 7 reconhece Scrum, Kanban e demais abordagens ágeis (arquivos `02` a `04`); a gestão de produto relaciona-se com o item 2.2 (arquivo `01`); o PMO aparece no item 2.6 (arquivo `06`); os **grupos de processos e áreas de conhecimento**, da 6ª edição, são o item 3 (Módulo 3).

### 2. Da 6ª para a 7ª edição

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

### 3. O sistema de entrega de valor (*Standard*)

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

### 4. Os 12 princípios de gerenciamento de projetos

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

### 5. Os 8 domínios de desempenho

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

#### 5.1 Abordagem de desenvolvimento e ciclo de vida

| Abordagem | Característica |
|---|---|
| **Preditiva (cascata)** | Escopo, prazo e custo definidos cedo; fases **sequenciais** (cada fase depende da anterior); entregas em marcos |
| **Iterativa** | Refinamento por repetição; busca de feedback; escopo evolui |
| **Incremental** | Entrega de **partes funcionais** sucessivas |
| **Adaptativa (ágil)** | Iterativa + incremental; mudança bem-vinda; entregas frequentes |
| **Híbrida** | Combina elementos (por exemplo, requisitos preditivos e desenvolvimento ágil) |

**Cadência de entrega:** única, múltiplas, periódica ou contínua. **Ciclo de vida do projeto:** série de **fases** (por exemplo, viabilidade, projeto, construção, teste, implantação, encerramento) que o projeto percorre; as fases podem ser sequenciais, sobrepostas ou iterativas. **Ciclo de vida do desenvolvimento** é o conjunto de fases do desenvolvimento do produto (aprofundado no Módulo 5, item 5.2).

### 6. Adequação (*tailoring*)

**Adequar** é **ajustar** a abordagem, a governança e os processos ao **contexto** (tamanho, complexidade, cultura, risco, abordagem escolhida). Sequência típica: selecionar abordagem inicial; adaptar à organização; adaptar ao projeto; implementar melhoria contínua. A adequação é um princípio (#7) e uma competência do gerente de projetos.

### 7. Modelos, métodos e artefatos

O *Guide* organiza ferramentas comuns em três categorias (classificação do guia; confira a lista na fonte):

| Categoria | Exemplos |
|---|---|
| **Modelos** | De liderança, comunicação, motivação, mudança, complexidade (por exemplo, Cynefin), desenvolvimento de equipe (por exemplo, Tuckman) |
| **Métodos** | Coleta e análise de dados, estimativa, reuniões e eventos |
| **Artefatos** | Estratégia (caso de negócio, termo de abertura/*charter*, *roadmap*), registros e diários, planos, **gráficos hierárquicos (EAP)**, linhas de base, dados visuais, relatórios, acordos e contratos |

#### 7.1 Estrutura Analítica do Projeto (EAP/WBS)

A **EAP** (*Work Breakdown Structure*, WBS) é a **decomposição hierárquica do escopo total do trabalho** do projeto em partes menores e mais gerenciáveis, até o nível de **pacotes de trabalho** (menor nível, ao qual se pode estimar custo e prazo e designar responsável).

| Característica | Descrição |
|---|---|
| Orientada a **entregas/escopo**, não a atividades ou tempo | Define *o que* será entregue |
| **Regra dos 100%** | Inclui **todo** o trabalho do escopo, e somente ele |
| **Dicionário da EAP** | Descreve cada elemento (escopo, critérios de aceitação, responsável, estimativas) |
| Base para outros planos | Estimativas de custo e prazo, alocação de recursos, riscos, comunicação |
| Na 6ª edição, a **linha de base do escopo** = declaração de escopo + EAP + dicionário da EAP | Referência para controle de mudanças |

*A EAP **não** é:* o cronograma (sequência e dependências das atividades), a análise de riscos, uma técnica de estimativa de custos nem o plano estratégico do projeto.

#### 7.2 Valor agregado (EVM — complemento B, domínio de Mensuração)

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

### 8. Comparações conceituais

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

### 9. Aplicações e cenários

**Cenário (didático): escolha da abordagem.** Um projeto de modernização de sistemas combina requisitos regulatórios estáveis (preditivos) com módulos de interface em constante refino (adaptativos). O gerente escolhe abordagem **híbrida** (domínio de abordagem de desenvolvimento), planeja marcos regulatórios com escopo fixo e utiliza Sprints para as interfaces; mede por **tempo de ciclo** e por **valor agregado** (domínio de mensuração). *Limitação:* a governança precisa aceitar relatos distintos para cada abordagem.

**Cenário (didático): decomposição do escopo.** A EAP de um sistema de monitoramento é organizada por **entregas** (módulo de coleta, módulo de alertas, painel, treinamento) e não por fases. *Limitação:* uma EAP orientada a fases pode omitir entregas e dificultar a regra dos 100%.

### 10. Atenção para a prova

*Inferência técnica e recomendação pedagógica; sem atribuir frequência à banca.*

- **7ª edição: 12 princípios e 8 domínios de desempenho**; **6ª: 5 grupos de processos e 10 áreas de conhecimento**. Não misturar.
- A 7ª edição é **orientada a valor e princípios** e **neutra** quanto à abordagem; adequação é central.
- **EAP** é a **representação hierárquica do escopo**, decomposta até pacotes de trabalho — não é cronograma, nem análise de risco, nem técnica de estimativa de custos, nem plano estratégico.
- Valor agregado: memorizar CPI = EV/AC e SPI = EV/PV e a interpretação de valores maiores ou menores que 1.
- A cascata/preditiva tem **fases sequenciais e lineares**; os domínios de desempenho **não** são sequenciais.
- *Evidência histórica (amostra de duas provas):* a Prova 6 de 2023 (Q67) perguntou o que é a EAP "de acordo com o PMBOK"; a Prova 15 de 2018 também trouxe a EAP (Q63), uma questão com CPI e SPI em cenário de mudança de escopo (Q62) e uma sobre restrições do projeto (Q66), todas segundo a edição então vigente (6ª). As provas catalogadas **não** trouxeram questões sobre os princípios ou domínios da 7ª edição; duas provas não permitem inferir frequência, e o edital de 2026 cita expressamente a 7ª edição.

### 11. Síntese

- PMBOK 7 (2021): *Standard* (12 princípios + sistema de entrega de valor) e *Guide* (8 domínios, adequação, modelos/métodos/artefatos).
- Mudança: de **processos** para **princípios e valor**; abordagem neutra; adequação central.
- Domínios: partes interessadas, equipe, abordagem de desenvolvimento e ciclo de vida, planejamento, trabalho do projeto, entrega, mensuração, incerteza.
- Abordagens: preditiva, iterativa, incremental, adaptativa, híbrida.
- EAP: decomposição do escopo em pacotes de trabalho; regra dos 100%; dicionário da EAP.
- EVM: CV, SV, CPI, SPI, EAC.
- A 8ª edição (nov./2025) existe; o edital cita a 7ª.

### 12. Pontos para a futura produção de questões (registro)

Conceitos: princípios; domínios; sistema de entrega de valor; adequação; abordagens; EAP; EVM. Distinções: 6ª×7ª; princípio×processo; EAP×cronograma; iterativa×incremental. Interpretação: qual domínio cobre uma atividade; qual abordagem convém a um cenário; calcular e interpretar CPI/SPI.

### 13. Referências

- PROJECT MANAGEMENT INSTITUTE. *The Standard for Project Management and A Guide to the Project Management Body of Knowledge (PMBOK® Guide)*. 7th ed. PMI, 2021 — **edição, ano e a estrutura 12 princípios/8 domínios verificados online em 2026-10-31** (por fontes secundárias; o texto integral do PMI não foi consultado).
- PROJECT MANAGEMENT INSTITUTE. *PMBOK® Guide*. 8th ed. (publicação em nov./2025) — existência verificada por fontes secundárias; **conteúdo não utilizado**.
- PROJECT MANAGEMENT INSTITUTE. *A Guide to the PMBOK® Guide*. 6th ed., 2017 — para a comparação; **não verificado online nesta etapa**.
- Os enunciados dos 12 princípios, a classificação de modelos/métodos/artefatos e a descrição dos domínios são **resumos didáticos** baseados em conhecimento do autor do material; **não foram confrontados com o texto do PMI** nesta etapa.
- Edital Transpetro nº 04/2026.4, Anexo IV, item 2.4.


---

## Escritório de Projetos (PMO) e Governança de Projetos

**Módulo:** M02 — Gerenciamento de Projetos e Produtos
**Texto oficial (Anexo IV):** 2.6 "Escritório de projetos".
**Escopo:** A. A **tipologia detalhada** de PMO (modelos e características) está em `07-modelos-de-gestao.md` (item 2.7, ver nota de interpretação); aqui tratam-se **conceito, objetivos, funções, valor, governança, PMO em ambientes ágeis e indicadores**.
**Status:** `VALIDADO` (aprovado pelo usuário em 2026-10-31, com ressalvas: textos do PMI e princípios Lean-Agile do SAFe não verificados em fonte primária; interpretação dos itens 2.5 e 2.7 a confirmar — ver `docs/qualidade/relatorio-producao-modulo-02.md`).

**Objetivos de aprendizagem.** (1) Definir escritório de projetos e distingui-lo do gerente de projetos; (2) descrever objetivos, funções e entregas típicas; (3) relacionar o PMO à governança, ao portfólio e à estratégia; (4) reconhecer o papel do PMO em ambientes ágeis; (5) identificar benefícios, riscos e indicadores.

---

### 1. Introdução

À medida que a organização acumula projetos, surgem problemas: métodos diferentes por equipe, falta de visibilidade, disputa por recursos, projetos desalinhados da estratégia. O **Escritório de Projetos** (*Project Management Office*, **PMO**; também chamado EGP, EP ou "escritório de gerenciamento de projetos") é a estrutura organizacional criada para **padronizar processos de governança relacionados a projetos** e facilitar o **compartilhamento de recursos, metodologias, ferramentas e técnicas**. Sua forma e seu poder variam muito de uma organização para outra.

*Relações:* o PMO integra a visão de **projetos e organização** (item 2.5, arquivo `01`); apoia o **portfólio** e a estratégia (arquivo `04`, gestão de portfólio); no PMBOK 7ª edição, está ligado à **governança** e ao sistema de entrega de valor (arquivo `05`); relaciona-se à governança de TI (Módulo 4).

### 2. Fundamentos

#### 2.1 Definição e posicionamento

O PMO é uma **unidade organizacional** (departamento, equipe, comitê) responsável por **centralizar e coordenar** aspectos da gestão de projetos, programas e/ou portfólio, conforme o mandato recebido. Não é necessariamente o responsável por **executar** os projetos: isso depende do modelo (arquivo `07`).

#### 2.2 PMO × gerente de projetos

| Critério | **Gerente de projetos** | **PMO** |
|---|---|---|
| Foco | **Objetivos do projeto** (escopo, prazo, custo, qualidade, valor) | **Objetivos da organização**: padronização, visibilidade, alinhamento, uso eficiente de recursos |
| Escopo de atuação | Um projeto (ou programa) | **Vários** projetos, programas ou o portfólio |
| Controle | Controla recursos atribuídos ao projeto | **Otimiza** o uso de recursos **compartilhados** entre projetos |
| Responsabilidade | Entregar o resultado do projeto | Fornecer governança, métodos, ferramentas e informação |
| Perspectiva | Operacional/tático | Tático/estratégico |

### 3. Objetivos e funções

#### 3.1 Objetivos

- **Padronizar** processos, modelos (*templates*) e indicadores;
- Dar **visibilidade** do desempenho do portfólio;
- **Alinhar projetos à estratégia**;
- **Aumentar a taxa de sucesso** e reduzir riscos;
- **Otimizar o uso de recursos** e consolidar o aprendizado.

#### 3.2 Funções típicas

| Função | Exemplos |
|---|---|
| **Governança** | Definir políticas, papéis e critérios de aprovação; realizar **revisões de fase** (*gates*) |
| **Metodologia e padrões** | Manter o método, ciclo de vida, modelos e *checklists*; adequação (*tailoring*) por tipo de projeto |
| **Planejamento e controle** | Apoiar cronogramas, orçamentos e riscos; **consolidar relatórios** e painéis |
| **Gestão do portfólio** | Apoiar seleção, priorização e balanceamento de projetos; acompanhar benefícios |
| **Gestão de recursos** | Visão de capacidade e alocação; dimensionamento de equipes |
| **Capacitação** | Treinamento, mentoria e comunidades de prática |
| **Gestão do conhecimento** | Repositório de lições aprendidas e de *artefatos* |
| **Qualidade e auditoria** | Auditorias de projetos e verificação de conformidade |
| **Suporte** | Ferramentas (por exemplo, sistema de gestão de projetos), consultoria a gerentes |
| **Gestão direta de projetos** (em alguns modelos) | Gerentes de projetos pertencem ao PMO e conduzem projetos |

### 4. Governança de projetos

**Governança** é o conjunto de estruturas, papéis, políticas e processos que garante que os projetos **sejam escolhidos, executados e encerrados de acordo com os objetivos e riscos aceitáveis da organização**. Elementos comuns:

| Elemento | Descrição |
|---|---|
| **Comitê/comissão diretiva (*steering committee*)** | Decide sobre aprovação, priorização, mudanças relevantes e encerramento |
| **Patrocinador** | Responsável pela justificativa e pelo apoio executivo (arquivo `01`) |
| **Portões de decisão (*stage gates*)** | Revisões formais ao fim de fases para autorizar a continuidade |
| **Critérios de seleção e priorização** | Alinhamento estratégico, benefício, risco, capacidade |
| **Indicadores e relatórios** | Painéis de status, saúde do projeto, riscos, benefícios |
| **Gestão de mudanças** | Fluxo para aprovar alterações de escopo, prazo e custo |
| **Gestão de riscos e conformidade** | Políticas, auditorias, *compliance* |
| **Papéis e responsabilidades** | RACI/matriz de responsabilidades |

O PMO é, em geral, o **braço operacional da governança**: mantém os instrumentos e fornece informações para a tomada de decisão dos comitês. A governança de projetos relaciona-se com a **governança corporativa** e a **governança de TI** (Módulo 4).

### 5. Valor, benefícios e riscos

| Benefícios | Riscos e críticas |
|---|---|
| Padronização e **previsibilidade** | **Burocratização** (excesso de relatórios e aprovações) |
| **Visibilidade** do portfólio e decisões melhores | PMO visto como "polícia" ou "cartório" |
| Redução de falhas e retrabalho | Metodologia rígida que ignora o contexto |
| Reuso de conhecimento e **aprendizado** | Falta de patrocínio e de mandato claro |
| **Alinhamento à estratégia** | Foco em **processo** em vez de **valor** |
| Melhor uso de recursos | Custo do próprio PMO sem demonstrar retorno |

Fatores de sucesso: **patrocínio executivo**, mandato claro, escopo adequado à maturidade da organização, **demonstração de valor**, flexibilidade (*tailoring*), medição do próprio desempenho.

**Maturidade:** organizações menos maduras começam com um PMO de **apoio** (modelos e treinamento) e evoluem para controle e direção conforme a necessidade e a cultura (arquivo `07`).

### 6. PMO em ambientes ágeis e híbridos

O PMO não desaparece nas organizações ágeis, mas **muda de papel**:

| Tradicional | Ágil/híbrido |
|---|---|
| Controle de aderência ao plano | **Facilitação** e remoção de impedimentos |
| Relatórios de status detalhados | **Transparência** por quadros, métricas de fluxo e painéis automáticos |
| Aprovação por projeto | **Financiamento por fluxo de valor** e priorização contínua (arquivo `04`) |
| Padronização rígida | **Padrões mínimos** e autonomia das equipes |
| Gate por fases | **Revisões em cadência** (por exemplo, a cada PI no SAFe) |

Em organizações com SAFe, funções semelhantes às do PMO aparecem na **gestão enxuta de portfólio** (operações ágeis de portfólio, governança) e em estruturas de apoio à transformação, como um **centro de excelência Lean-Agile** (nomenclatura conforme a versão do SAFe; conferir). Denominações como "**escritório de valor**" ou "**PMO ágil**" também circulam na literatura.

### 7. Indicadores do PMO e do portfólio

| Indicador | O que mede |
|---|---|
| **% de projetos entregues no prazo e dentro do custo** | Previsibilidade |
| **Benefícios realizados × planejados** | Valor |
| **Taxa de utilização de recursos** | Eficiência de alocação |
| **Saúde do portfólio** (verde/amarelo/vermelho) | Visão consolidada |
| **Aderência ao método** (auditorias) | Conformidade |
| **Satisfação das partes interessadas** | Percepção |
| **Métricas de fluxo** (ambientes ágeis) | Tempo de ciclo, vazão, WIP (arquivo `03`) |

*Observação:* indicadores devem ser **definidos pelo propósito** do PMO; medir apenas aderência ao processo estimula conformidade sem valor.

### 8. Comparações conceituais

| Conceito A | Conceito B | Diferença principal |
|---|---|---|
| PMO | Gerente de projetos | Atua sobre vários projetos e padroniza × responde pelos objetivos de um projeto |
| PMO | Comitê diretivo | Estrutura de suporte e execução da governança × instância de decisão |
| PMO de apoio | PMO diretivo | Consultivo × assume a gestão dos projetos (arquivo `07`) |
| Governança de projetos | Gestão de projetos | Define regras e decisões × executa o trabalho |
| PMO | Gestão de portfólio | PMO apoia a seleção e o acompanhamento; a decisão de portfólio é da governança |
| PMO tradicional | PMO ágil | Controla e padroniza × facilita e dá transparência |

### 9. Aplicações e cenários

**Cenário (didático): padronização.** Uma empresa de grande porte tem 40 projetos de TI com métodos e relatórios distintos. O PMO define um **ciclo de vida mínimo**, modelos de relatórios, um painel mensal e *gates* para projetos acima de certo orçamento. *Limitação:* a imposição de rigidez a projetos pequenos gera resistência; é preciso adequar (*tailoring*).

**Cenário (didático): PMO com mandato fraco.** O PMO produz relatórios que ninguém usa e não tem patrocínio. Ações: redefinir o mandato com a alta direção, focar em **poucos indicadores de decisão**, demonstrar valor com um projeto crítico. *Limitação:* mandato é uma decisão da organização, não apenas do PMO.

### 10. Atenção para a prova

*Inferência técnica e recomendação pedagógica; sem atribuir frequência à banca.*

- O PMO atua sobre **vários projetos** (padronização, governança, compartilhamento de recursos); o gerente de projetos responde por **um projeto**.
- Distinguir PMO de **comitê diretivo** e de **patrocinador**.
- Alternativas que dizem que "o PMO **sempre** gerencia diretamente os projetos" generalizam: isso ocorre só no modelo **diretivo**.
- No ambiente ágil, o PMO **continua existindo**, com papel de **facilitação e transparência**.
- Riscos clássicos: **burocracia** e falta de patrocínio.
- *Evidência histórica:* o item 2.6 **não** foi cobrado de forma específica nas duas provas catalogadas (Transpetro 2018 e 2023); duas provas não permitem inferir frequência, e o edital de 2026 prevê o item.

### 11. Síntese

- PMO: estrutura que **padroniza a governança de projetos** e compartilha recursos, métodos e ferramentas.
- Funções: governança, metodologia, planejamento e controle, portfólio, recursos, capacitação, conhecimento, auditoria, suporte; em alguns casos, gestão direta.
- Governança: comitê, patrocinador, *gates*, critérios, indicadores, mudanças, riscos, papéis.
- Benefícios: padronização, visibilidade, alinhamento; riscos: burocracia, "polícia", falta de mandato.
- Ágil: facilita, dá transparência, financia por valor, revisa em cadência.
- Indicadores: prazo/custo, benefícios, recursos, saúde, aderência, fluxo.

### 12. Pontos para a futura produção de questões (registro)

Conceitos: PMO; funções; governança; indicadores; PMO ágil. Distinções: PMO×gerente de projetos; PMO×comitê; tradicional×ágil. Interpretação: qual função do PMO resolve um problema; quando o PMO é mais adequado a cada contexto.

### 13. Referências

- PROJECT MANAGEMENT INSTITUTE. *PMBOK® Guide* (definição de PMO e tipologia conforme edições anteriores, 6ª ed.) e 7ª ed. (2021) — edição 7ª **verificada online**; **a definição de PMO e as demais descrições deste arquivo vêm do conhecimento do autor do material e não foram confrontadas com o texto do PMI (acesso bloqueado); a tipologia de suporte/controle/diretivo foi confirmada por fontes secundárias**.
- PROJECT MANAGEMENT INSTITUTE. *The Standard for Portfolio Management*; *The Standard for Program Management* — **não verificados** nesta etapa.
- Edital Transpetro nº 04/2026.4, Anexo IV, item 2.6.


---

## Modelos e Características: Modelos de PMO e Modelos de Gestão de Projetos e Produtos

**Módulo:** M02 — Gerenciamento de Projetos e Produtos
**Texto oficial (Anexo IV):** 2.7 "Modelos e características".
**Escopo:** A. **Dúvida registrada (instrução do prompt 02, regra 17):** o item 2.7 aparece logo após **2.6 "Escritório de projetos"** e **não indica o objeto** dos "modelos". Interpretações possíveis: (a) **modelos de escritório de projetos** e suas características (a leitura mais direta, pela vizinhança com 2.6); (b) **modelos (abordagens) de gestão de projetos e produtos** e suas características (preditivo, ágil, híbrido). **Para não omitir nenhuma leitura, este arquivo cobre ambas:** (a) como núcleo e (b) com profundidade proporcional, evitando repetir o que está nos demais arquivos. A interpretação (b) deve ser confirmada pelo usuário.
**Status:** `VALIDADO` (aprovado pelo usuário em 2026-10-31, com ressalvas: textos do PMI e princípios Lean-Agile do SAFe não verificados em fonte primária; interpretação dos itens 2.5 e 2.7 a confirmar — ver `docs/qualidade/relatorio-producao-modulo-02.md`).

**Objetivos de aprendizagem.** (1) Distinguir os modelos de PMO (apoio, controle, diretivo; corporativo, de portfólio, de programa, ágil) e suas características; (2) comparar modelos de gestão (preditivo, iterativo, incremental, ágil, híbrido) e seus critérios de escolha; (3) escolher o modelo adequado a um contexto.

---

### 1. Introdução

Não existe um único modelo ideal de escritório de projetos nem de gestão de projetos. A **escolha depende do contexto**: maturidade, cultura, tipo de projeto, grau de incerteza, estrutura da organização. Este arquivo organiza os modelos mais citados e suas **características**, para permitir comparação e escolha. Os detalhes de cada método estão nos arquivos `02` (Scrum), `03` (Kanban), `04` (SAFe), `05` (PMBOK 7) e `06` (PMO).

### 2. Modelos de escritório de projetos (PMO)

#### 2.1 Tipologia clássica (por grau de controle)

| Modelo | Grau de controle | Característica | Atividades típicas | Quando é adequado |
|---|---|---|---|---|
| **De suporte (*supportive*)** | **Baixo** | Papel **consultivo**: fornece modelos, boas práticas, treinamento, acesso a informações e lições aprendidas | Repositório, capacitação, *templates*, apoio a gerentes | Organização com baixa maturidade ou projetos autônomos; adoção voluntária |
| **De controle (*controlling*)** | **Moderado** | Além do suporte, **exige conformidade**: adoção de métodos, modelos, ferramentas e governança | Auditorias, verificação de aderência, relatórios padronizados | Quando se deseja padronização e qualidade sem assumir a gestão dos projetos |
| **Diretivo (*directive*)** | **Alto** | **Assume o controle** dos projetos: os gerentes de projetos pertencem ao PMO e respondem a ele | Gestão direta de projetos, alocação de gerentes, resultados | Projetos críticos e organizações que precisam de forte unificação |

*(Classificação consagrada na literatura do PMI; fontes secundárias a atribuem à 5ª ou à 6ª edição do PMBOK — a edição de origem diverge; verifique a edição em uso. Os três graus de controle (baixo, moderado, alto) foram **confirmados** por fontes secundárias. A 7ª edição trata a estrutura de apoio no contexto da governança, sem repetir essa classificação como estrutura central.)*

Característica comum: quanto mais alto o **grau de controle**, maior a **padronização** e a **autoridade** do PMO, e menor a autonomia dos gerentes e equipes.

#### 2.2 Outras classificações (por escopo)

| Modelo | Escopo | Foco |
|---|---|---|
| **PMO de projeto (temporário)** | Um projeto/programa grande | Apoiar o projeto; encerra com ele |
| **PMO departamental/de unidade** | Uma área (por exemplo, TI) | Padronizar e apoiar projetos da unidade |
| **PMO corporativo/estratégico (EPMO)** | Toda a organização | **Alinhar portfólio à estratégia**, governança global |
| **PMO de programa** | Um programa | Coordenar projetos relacionados e benefícios |
| **PMO de portfólio** | Portfólio | Priorização, balanceamento e visão consolidada |
| **PMO ágil / escritório de valor** | Times e fluxos de valor ágeis | Facilitação, transparência, remoção de impedimentos (arquivo `06`) |
| **Centro de excelência** | Prática (por exemplo, ágil) | Desenvolver capacidades e metodologia, sem gerir projetos |

#### 2.3 Comparação resumida

| Critério | Suporte | Controle | Diretivo |
|---|---|---|---|
| Autoridade sobre os projetos | Nenhuma ou mínima | Média (exige conformidade) | Alta (controle direto) |
| Papel dos gerentes de projetos | Independentes | Seguem padrões do PMO | Subordinados ao PMO |
| Padronização | Opcional | **Obrigatória** | Obrigatória e integrada |
| Risco principal | Pouca efetividade | Burocracia | Rigidez; concentração de poder |
| Esforço/custo de manutenção | Baixo | Médio | Alto |

### 3. Modelos de gestão de projetos e produtos

#### 3.1 Panorama

| Modelo (abordagem) | Ideia central | Planejamento | Entrega | Mudança |
|---|---|---|---|---|
| **Preditivo / em cascata** | Planejar tudo antes; fases **sequenciais e lineares** | Detalhado no início | Ao final (ou por marcos) | Controlada por processo formal; custosa |
| **Em V** (variação preditiva) | Cada fase de desenvolvimento tem uma fase de teste correspondente | Detalhado | Ao final | Controlada |
| **Iterativo** | Repete ciclos refinando a solução | Por ciclo | Versões cada vez mais completas | Incorporada a cada iteração |
| **Incremental** | Entrega **partes funcionais** sucessivas | Por incremento | Incrementos | Parcial |
| **Ágil (adaptativo)** | Iterativo + incremental; feedback frequente | Contínuo, em ondas | **Frequente** (Sprints, fluxo contínuo) | **Esperada** e bem-vinda |
| **Híbrido** | Combina elementos (por exemplo, marcos e orçamento preditivos com execução ágil) | Misto | Misto | Depende da parte |
| **Orientado a fluxo (Kanban)** | Fluxo contínuo e limite de WIP | Contínuo | Contínua | Contínua |
| **Escalado (SAFe)** | Ágil com cadência sincronizada em muitos times | PI Planning | Incrementos por iteração e PI | Em cadência |

*Observação:* modelos de **ciclo de vida de desenvolvimento de software** (cascata, V, espiral, prototipação, incremental, RUP, ágeis) são aprofundados no **Módulo 5, item 5.2**; aqui interessa o **efeito sobre a gestão**.

#### 3.2 O modelo em cascata (características)

- **Fases sequenciais e lineares**: requisitos → projeto → construção → teste → implantação → manutenção; **cada fase depende da conclusão da anterior**.
- **Vantagens:** simplicidade, documentação, controle de marcos, adequado a requisitos estáveis.
- **Limitações:** pouco espaço para mudanças tardias; feedback do cliente tardio; entrega de valor só no fim; riscos descobertos tarde.
- **Não** se caracteriza por mudanças de requisitos constantes, pela divisão em Sprints nem por entrega iterativa.

#### 3.3 Escolha do modelo: critérios

| Fator | Tende ao **preditivo** | Tende ao **ágil** |
|---|---|---|
| Requisitos | Estáveis e conhecidos | Incertos ou mutáveis |
| Risco de mudança | Baixo | Alto |
| Possibilidade de entregas parciais | Baixa | Alta |
| Regulamentação e contrato rígido | Forte | Fraca ou negociável |
| Envolvimento do cliente | Pontual | Contínuo |
| Cultura | Hierárquica, orientada a plano | Colaborativa, autonomia |
| Tamanho/escala | Obras, infraestrutura física | Produto de software, serviços digitais |

Quando há **partes distintas** no mesmo empreendimento (por exemplo, infraestrutura física e software), o modelo **híbrido** costuma ser indicado; o PMBOK 7ª edição valoriza a **adequação** (arquivo `05`).

#### 3.4 Gestão de projeto × gestão de produto nos modelos

| Modelo | Projeto | Produto |
|---|---|---|
| Preditivo | Plano e entrega do projeto | O produto é entregue ao fim do projeto |
| Ágil/Scrum | A Sprint entrega Incrementos | O Product Owner gere o produto continuamente (arquivo `02`) |
| SAFe | ART e PI | Fluxos de valor e portfólio |
| Kanban | Fluxo contínuo | Gestão do fluxo de demandas |

### 4. Comparações conceituais

| Conceito A | Conceito B | Diferença principal |
|---|---|---|
| PMO de suporte | PMO de controle | Aconselha × exige conformidade |
| PMO de controle | PMO diretivo | Padroniza e audita × assume a gestão dos projetos |
| PMO corporativo | PMO de projeto | Permanente, estratégico × temporário e específico |
| PMO | Centro de excelência | Atua na governança e nos projetos × desenvolve capacidade e prática |
| Preditivo | Ágil | Plano antecipado e fases sequenciais × ciclos curtos e mudança bem-vinda |
| Iterativo | Incremental | Refinar por repetição × entregar partes funcionais |
| Híbrido | Ágil puro | Mistura preditivo e ágil × adota princípios ágeis integralmente |

### 5. Aplicações e cenários

**Cenário (didático): escolha do PMO.** Uma empresa com baixa maturidade e equipes autônomas cria primeiro um PMO de **suporte** (modelos e treinamento). Após dois anos, com projetos críticos sem padrão, evolui para PMO de **controle** (revisões de fase e relatórios padronizados). *Limitação:* migrar para o modelo **diretivo** exige mudança de estrutura e de poder.

**Cenário (didático): modelo de gestão.** Um projeto de implantação de infraestrutura física tem escopo estável e fornecedor contratado por preço fixo: **preditivo**. O sistema de monitoramento que a acompanha tem requisitos incertos: **ágil**. O programa que os une adota **híbrido**.

### 6. Atenção para a prova

*Inferência técnica e recomendação pedagógica; sem atribuir frequência à banca.*

- **Dúvida de escopo do item 2.7:** o edital não esclarece. Preparar-se para **tipos de PMO** e para **modelos de gestão (preditivo, ágil, híbrido)**.
- PMO: **suporte (baixo controle) < controle (moderado) < diretivo (alto)**; só o diretivo **gerencia** os projetos.
- Cascata: **fases sequenciais e lineares**; alternativas que atribuem a ela "iterações curtas", "sprints" ou "revisão constante de requisitos" estão trocadas.
- Absolutos ("o PMO **sempre**...", "o ágil **nunca** usa planejamento") costumam ser incorretos.
- *Evidência histórica (amostra de duas provas):* a Prova 6 de 2023 (Q54) pediu a característica do **modelo em cascata** (modelos de ciclo de vida); as duas provas catalogadas **não** trouxeram questão sobre tipos de PMO. Duas provas não permitem inferir frequência.

### 7. Síntese

- PMO: suporte (baixo controle), controle (moderado), diretivo (alto); por escopo: projeto, departamental, corporativo (EPMO), programa, portfólio; ágil e centro de excelência.
- Modelos de gestão: preditivo (cascata, V), iterativo, incremental, ágil, híbrido, fluxo (Kanban), escalado (SAFe).
- Escolha por contexto: incerteza, risco de mudança, entregas parciais, regulamentação, cultura, escala.
- Cascata: fases sequenciais e lineares; ágil: iterações e mudança bem-vinda.

### 8. Pontos para a futura produção de questões (registro)

Conceitos: tipos de PMO; modelos de gestão; critérios de escolha. Distinções: suporte×controle×diretivo; preditivo×ágil×híbrido; iterativo×incremental. Interpretação: indicar o PMO ou o modelo adequado a um cenário; identificar características da cascata.

### 9. Referências

- PROJECT MANAGEMENT INSTITUTE. *PMBOK® Guide*, 6ª ed. (tipologia de PMO) e 7ª ed. (2021; edição **verificada online**). A tipologia e as descrições acima **não foram confrontadas com o texto do PMI** nesta etapa.
- SCRUM, KANBAN e SAFe: fontes citadas nos arquivos `02`, `03` e `04`.
- Edital Transpetro nº 04/2026.4, Anexo IV, item 2.7 (redação genérica; interpretação registrada acima).

