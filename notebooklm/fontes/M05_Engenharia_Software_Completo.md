# Módulo M05 — Engenharia de Software

## Identificação
- Concurso: Processo Seletivo Público TRANSPETRO 2026.4 (Edital nº 04/2026)
- Ênfase: 5 — Análise de Sistemas: Processos de Negócios
- Banca: Fundação Cesgranrio
- Módulo: M05 — Engenharia de Software
- Gerado em: 2026-11-09, por `tools/build_notebooklm.py`, a partir de `conteudo/05-engenharia-software/` (fonte de verdade; não editar este arquivo)
- Situação do conteúdo nos arquivos de origem: VALIDADO (com ressalvas nos relatórios de produção em `docs/qualidade/`)

## Como usar este documento
É material de estudo do projeto, **não** é texto oficial do edital nem da banca. O escopo oficial é o Anexo IV do edital. Trechos marcados como complemento, aprofundamento ou estratégia **não** são exigência literal do edital. Referências indicadas como "não verificadas" ou "de memória" devem ser conferidas na fonte primária. Não afirme incidência de tema em prova sem evidência documental.

## Conteúdo

---

## Fundamentos de Engenharia de Software

**Módulo:** M05 — Engenharia de software
**Classificação de escopo:** **B — fundamentação complementar** (C5-002). O título do item 5 do Anexo IV ("Engenharia de software:") não tem texto próprio além dos subitens 5.1 a 5.5; este arquivo apresenta o vocabulário comum e **não** corresponde a subitem literal. Não o trate como exigência expressa.
**Status:** `VALIDADO` (aprovado pelo usuário em 2026-10-31, com ressalvas: interpretação dos itens 5.2 e 5.5 a confirmar; normas ISO, princípios ISTQB e vários referenciais de memória não verificados em fonte primária — ver `docs/qualidade/relatorio-producao-modulo-05.md`).

**Objetivos de aprendizagem.** (1) Definir software e engenharia de software; (2) distinguir processo, método, técnica e ferramenta; (3) descrever qualidade de software e seus atributos; (4) reconhecer os tipos de manutenção; (5) situar os cinco subitens do item 5 em um mapa.

---

### 1. Introdução

**Software** não é apenas o programa: é o conjunto de **programas, dados, documentação e configurações** que fazem um sistema computacional funcionar. A **engenharia de software** aplica **abordagens sistemáticas, disciplinadas e quantificáveis** (princípios de engenharia) ao desenvolvimento, à operação e à manutenção do software, buscando **qualidade, prazos e custos previsíveis**. Existe porque software é complexo, mutável e dependente das pessoas, e porque projetos informais falham com frequência.

### 2. Conceitos

| Conceito | Definição |
|---|---|
| **Processo de software** | Conjunto estruturado de **atividades** para desenvolver ou evoluir software (especificação, projeto, implementação, validação, evolução) |
| **Ciclo de vida** | Ordenação e relação das atividades e fases ao longo da vida do software (arquivo `03`) |
| **Método/metodologia** | Conjunto de **diretrizes e notações** para executar atividades (por exemplo, análise estruturada, Processo Unificado, Scrum) |
| **Técnica** | Procedimento específico para obter um resultado (entrevista, análise de pontos de função, partição de equivalência) |
| **Ferramenta** | Software que apoia técnicas e métodos (IDE, gerenciador de requisitos, ferramenta de testes) |
| **Artefato** | Produto de trabalho (requisitos, modelos, código, plano de testes) |
| **Produto** × **projeto** | O software que se entrega × o esforço temporário para criá-lo (Módulo 2) |
| **Stakeholders (partes interessadas)** | Pessoas ou grupos afetados pelo software |

**Atividades fundamentais (visão comum a vários modelos):** levantamento e análise de requisitos; projeto (arquitetura e detalhado); construção (codificação); verificação, validação e testes; implantação; manutenção e evolução; **atividades de apoio**: gerência de projeto, gerência de configuração, gerência de requisitos, garantia da qualidade, documentação.

*Mapa do item 5 do edital:*

| Subitem | Tema | Arquivo |
|---|---|---|
| 5.1 | Levantamento, análise e gerenciamento de requisitos | `02-requisitos-software.md` |
| 5.2 | Ciclo de vida de sistemas e seus paradigmas | `03-ciclo-de-vida.md` |
| 5.3 | Modelos, metodologias, técnicas e ferramentas de análise e projeto (estruturado e orientado a objetos) | `04-paradigmas.md` e `05-analise-e-projeto.md` |
| 5.4 | Verificação, validação e teste | `06-verificacao-e-validacao.md` |
| 5.5 | Ambientes de desenvolvimento de software | `07-testes-e-ambientes.md` |

### 3. Qualidade de software

**Qualidade** é o grau em que o produto atende aos **requisitos explícitos e implícitos** das partes interessadas. A norma **ISO/IEC 25010** (série SQuaRE) define um **modelo de qualidade do produto** com **características** subdivididas em subcaracterísticas.

| Edição | Características do modelo de qualidade do produto |
|---|---|
| **ISO/IEC 25010:2011** (fontes secundárias: 8 características, 31 subcaracterísticas) | **Adequação funcional**, **eficiência de desempenho**, **compatibilidade**, **usabilidade**, **confiabilidade**, **segurança**, **manutenibilidade** e **portabilidade** |
| **ISO/IEC 25010:2023** (fontes secundárias: 9 características) | Adequação funcional, eficiência de desempenho, compatibilidade, **capacidade de interação** (antes usabilidade), confiabilidade, segurança, manutenibilidade, **flexibilidade** (antes portabilidade) e **proteção/segurança física (*safety*)** |

*(A edição de 2023 foi confirmada, por fontes secundárias, como publicada em novembro de 2023; os nomes das características em português variam e devem ser conferidos no texto da norma.)*

As características de qualidade são a base dos **requisitos não funcionais** (arquivo `02`) e dos **tipos de teste não funcionais** (arquivo `06`).

**Qualidade do processo × qualidade do produto:** processos maduros tendem a produzir produtos melhores, mas não garantem. **Garantia da qualidade (QA)** concentra-se em **prevenir** defeitos nos processos; **controle de qualidade (QC)**, em **detectar** defeitos nos produtos (relação com o Módulo 3, área de Qualidade).

### 4. Manutenção e evolução

Software muda durante toda a vida. A **manutenção** é a modificação do software após a entrega. Classificação usual:

| Tipo | Objetivo | Exemplo (didático) |
|---|---|---|
| **Corretiva** | Corrigir defeitos | Corrigir cálculo incorreto |
| **Adaptativa** | Adaptar a mudanças no ambiente (sistema operacional, legislação, plataforma) | Atualizar para nova versão de banco de dados |
| **Perfectiva (evolutiva)** | Melhorar ou acrescentar funcionalidades e desempenho | Novo relatório |
| **Preventiva** | Reduzir riscos futuros e melhorar a manutenibilidade | Refatorar módulo complexo |

**Lei da evolução do software (Lehman, visão geral):** sistemas em uso precisam mudar continuamente e, sem esforço de manutenção, sua complexidade cresce e sua qualidade percebida cai. **Dívida técnica** é o custo futuro acumulado por atalhos de projeto ou código.

### 5. Métricas de software (complemento B)

Medidas de **tamanho, complexidade, qualidade e produtividade**: linhas de código, **pontos de função** (tamanho funcional a partir de entradas, saídas, consultas, arquivos lógicos internos e de interface externa), **complexidade ciclomática** (arquivo `06`), densidade de defeitos, cobertura de testes, acoplamento e coesão (arquivo `04`). *Esses tópicos não são subitens literais do edital; aparecem como apoio.*

### 6. Comparações conceituais

| Conceito A | Conceito B | Diferença principal |
|---|---|---|
| Processo | Método | Atividades gerais para criar software × diretrizes e notações específicas |
| Método | Técnica | Conjunto de práticas e notações × procedimento pontual |
| Técnica | Ferramenta | Como fazer × software que apoia |
| Garantia da qualidade | Controle da qualidade | Prevenção nos processos × detecção nos produtos |
| Manutenção corretiva | Perfectiva | Corrige defeitos × melhora ou amplia |
| Produto | Projeto | O software × o esforço de criá-lo |

### 7. Atenção para a prova

*Inferência técnica e recomendação pedagógica; sem atribuir frequência à banca.*

- Distinguir **processo, ciclo de vida, método, técnica e ferramenta**.
- Reconhecer as **características de qualidade** e relacioná-las a requisitos não funcionais.
- Identificar o **tipo de manutenção** a partir da descrição.
- *Evidência histórica (amostra de duas provas):* a Prova 15 de 2018 trouxe questões sobre qualidade e métricas (custo da qualidade, Q26; complexidade ciclomática, Q25; pontos de função, Q30), classificadas como sem item correspondente no edital de 2026. A Prova 6 de 2023 não trouxe questão específica deste arquivo. Duas provas não permitem inferir frequência.

### 8. Síntese

- Engenharia de software: abordagem sistemática ao ciclo de vida do software.
- Processo, método, técnica, ferramenta, artefato.
- Qualidade (ISO/IEC 25010): 8 características (2011) ou 9 (2023, segundo fontes secundárias).
- Manutenção: corretiva, adaptativa, perfectiva, preventiva.
- Mapa: 5.1 requisitos; 5.2 ciclo de vida; 5.3 análise e projeto; 5.4 V&V e teste; 5.5 ambientes.

### 9. Referências

- ISO/IEC 25010 (modelo de qualidade do produto), edições de 2011 e 2023 — existência e número de características **confirmados em fontes secundárias** em 2026-10-31; **texto da norma não consultado** (o site da ISO bloqueou a consulta, HTTP 403, e nenhuma das normas ISO citadas neste módulo pôde ser lida).
- Definições gerais (SWEBOK, SOMMERVILLE, PRESSMAN, Lehman) — citadas de memória, **não verificadas online nesta etapa** (edições e anos pendentes).
- Edital Transpetro nº 04/2026.4, Anexo IV, item 5.


---

## Levantamento, Análise e Gerenciamento de Requisitos

**Módulo:** M05 — Engenharia de software
**Texto oficial (Anexo IV):** 5.1 "Levantamento, análise e gerenciamento de requisitos".
**Escopo:** A. Referenciais de apoio: ISO/IEC/IEEE 29148:2018 (engenharia de requisitos; existência confirmada em catálogo, conteúdo não consultado) e guias de análise de negócio.
**Status:** `VALIDADO` (aprovado pelo usuário em 2026-10-31, com ressalvas: interpretação dos itens 5.2 e 5.5 a confirmar; normas ISO, princípios ISTQB e vários referenciais de memória não verificados em fonte primária — ver `docs/qualidade/relatorio-producao-modulo-05.md`).

**Objetivos de aprendizagem.** (1) Definir requisito e classificar seus tipos (funcional, não funcional, restrição; negócio, usuário, sistema); (2) aplicar técnicas de levantamento; (3) analisar, negociar e priorizar requisitos; (4) especificar e validar requisitos com qualidade; (5) gerenciar mudanças e rastreabilidade.

---

### 1. Introdução

**Requisito** é uma condição ou capacidade que o sistema deve satisfazer para resolver um problema ou alcançar um objetivo das partes interessadas. Erros de requisitos são **os mais caros de corrigir** quanto mais tarde forem descobertos, pois afetam projeto, código, testes e documentação. A **engenharia de requisitos** é o conjunto de atividades para **descobrir, analisar, documentar, validar e gerenciar** requisitos ao longo de todo o ciclo de vida. O item 5.1 destaca três grupos: **levantamento** (elicitação), **análise** e **gerenciamento**.

*Relações:* os requisitos orientam o projeto (arquivo `05`) e os testes de aceitação (arquivo `06`); as histórias do usuário (Módulo 6) e o *backlog* do Scrum (Módulo 2) são formas ágeis de registrar requisitos; os requisitos de segurança e privacidade relacionam-se com o Módulo 9 e a LGPD (Módulo 4).

### 2. Tipos de requisitos

#### 2.1 Por nível e origem

| Tipo | Descrição | Exemplo (didático) |
|---|---|---|
| **De negócio** | Objetivos e necessidades da organização | Reduzir em 30% o tempo de abertura de ordens de serviço |
| **De partes interessadas/usuário** | O que cada grupo precisa do sistema | O técnico precisa registrar ordens em campo |
| **De solução** (sistema) | Como o sistema atende às necessidades | O sistema deve permitir registro por dispositivo móvel |
| **De domínio** | Regras do domínio de aplicação ou da legislação | O cálculo deve seguir norma regulatória aplicável |
| **De transição** | Necessários para migrar ou implantar | Migrar o cadastro de equipamentos existente |

#### 2.2 Funcionais, não funcionais e restrições

| Tipo | Define | Exemplos (didáticos) |
|---|---|---|
| **Funcional (RF)** | **O que o sistema deve fazer**: serviços, funções, comportamento, cálculos, tratamento de entradas e saídas | "O sistema deve calcular o tempo de parada de um equipamento a partir das horas de início e fim"; "o sistema deve permitir cadastrar uma ordem de serviço" |
| **Não funcional (RNF)** | **Como o sistema deve ser**: **qualidade** e restrições sobre os serviços (desempenho, segurança, usabilidade, confiabilidade, disponibilidade, manutenibilidade, portabilidade, conformidade) | "O sistema deve responder consultas em até 2 segundos"; "os dados devem trafegar criptografados"; "disponibilidade de 99,5%"; "interface acessível" |
| **Restrição** | Limitações impostas ao projeto ou à solução (tecnologia, norma, orçamento, prazo, plataforma, padrão obrigatório) | "O sistema deve ser implantado na nuvem do contrato corporativo" |

*Regras práticas de distinção:*

- Se o requisito descreve **uma função ou cálculo que o sistema executa**, é **funcional**.
- Se descreve **um atributo de qualidade** (desempenho, segurança, usabilidade) ou **uma condição de operação**, é **não funcional**.
- Requisitos não funcionais costumam **afetar o sistema como um todo**, e não uma única função; são **mensuráveis** quando bem escritos ("até 2 segundos", e não "rápido").
- Uma mesma necessidade pode gerar RF e RNF (por exemplo, "autenticar usuário" é funcional; "bloquear após cinco tentativas e criptografar senhas" são restrições de segurança, em geral não funcionais).

**Classificação dos RNF** segue os atributos de qualidade (por exemplo, a norma ISO/IEC 25010, arquivo `01`): desempenho, compatibilidade, usabilidade, confiabilidade, segurança, manutenibilidade, portabilidade.

### 3. O processo de engenharia de requisitos

```text
Levantamento ──► Análise e negociação ──► Especificação ──► Validação
      ▲                                                          │
      └───────────── Gerenciamento (mudanças, rastreabilidade) ◄─┘
```

As atividades são **iterativas** e se sobrepõem; em ambientes ágeis ocorrem de forma contínua.

### 4. Levantamento (elicitação) de requisitos

**Objetivo:** descobrir as necessidades das partes interessadas, o domínio e as restrições. Principais **fontes**: usuários e clientes, especialistas do domínio, documentos (normas, contratos, manuais), processos de negócio atuais, sistemas existentes, observação do trabalho.

| Técnica | Descrição | Pontos fortes | Limitações |
|---|---|---|---|
| **Entrevistas** | Conversa estruturada ou aberta com partes interessadas | Profundidade, esclarecimento | Depende do entrevistado; demorada |
| **Questionários** | Perguntas padronizadas a muitos respondentes | Escala, baixo custo | Pouca profundidade |
| **Observação (etnografia)** | Observar o trabalho real | Revela práticas implícitas | Consome tempo; pode alterar o comportamento |
| **Oficinas (*workshops*, JAD)** | Sessões facilitadas com várias partes interessadas | Consenso rápido | Exige facilitação e agenda |
| ***Brainstorming*** | Geração livre de ideias | Criatividade | Precisa de triagem posterior |
| **Análise de documentos e sistemas legados** | Estudar documentação e funcionalidades existentes | Rápida | Documentos desatualizados |
| **Prototipação** | Protótipos para obter retorno concreto | Reduz mal-entendidos | Risco de confundir protótipo com produto |
| **Cenários e casos de uso** | Descrição de interações em situações concretas | Foco no uso | Exigem validação |
| **Histórias do usuário e personas** | Necessidades em linguagem do usuário (Módulo 6) | Simples; ágeis | Precisam de detalhamento |
| **Análise de dados e de uso** | Métricas e registros de uso | Evidência objetiva | Exige dados |

*Dificuldades típicas:* usuários que **não sabem** articular o que precisam; requisitos **implícitos** (conhecimento tácito); **conflitos** entre partes interessadas; **mudança** durante o projeto; linguagem técnica distinta; **escopo ampliado** sem controle (*scope creep*).

### 5. Análise e negociação

**Objetivos:** entender, refinar, modelar e resolver problemas dos requisitos levantados.

- **Classificação e organização:** agrupar por tipo, componente e prioridade.
- **Modelagem:** casos de uso, diagramas (arquivo `05`), modelos de processo e de dados.
- **Detecção de conflitos, ambiguidades, lacunas e duplicidades.**
- **Negociação:** resolver conflitos entre partes interessadas e entre necessidades e restrições (custo, prazo, viabilidade técnica).
- **Análise de viabilidade:** técnica, econômica, operacional, legal e de cronograma.
- **Priorização:** decidir o que é feito primeiro.

| Técnica de priorização | Descrição |
|---|---|
| **MoSCoW** | **M**ust have (essencial), **S**hould have (importante), **C**ould have (desejável), **W**on't have (não agora) |
| **Modelo de Kano** | Classifica atributos em básicos (esperados), de desempenho (quanto mais, melhor) e de encantamento |
| **Votação/pontuação** | Partes interessadas atribuem pontos |
| **Valor × esforço (matriz)** | Prioriza alto valor e baixo esforço |
| **Análise de custo-benefício e risco** | Ordena por retorno e risco |

### 6. Especificação

**Especificar** é registrar os requisitos de modo **claro, completo e verificável**. Formas:

| Forma | Observação |
|---|---|
| **Documento de especificação de requisitos de software (ERS/SRS)** | Estrutura tradicional; a norma **ISO/IEC/IEEE 29148:2018** trata da engenharia de requisitos (substitui normas anteriores, como a IEEE 830) |
| **Casos de uso** | Descrição de interações entre atores e sistema (arquivo `05`) |
| **Histórias do usuário** + **critérios de aceitação** | "Como [papel], quero [funcionalidade], para [benefício]"; critérios podem seguir o formato *Dado–Quando–Então* (Módulo 6 e arquivo `06`) |
| **Modelos** | Diagramas UML, fluxos, protótipos |
| ***Product backlog*** | Lista priorizada de itens (Scrum, Módulo 2) |

**Caso de uso (visão geral):** descreve uma **interação entre um ator e o sistema** que produz um **resultado de valor** para o ator; um **cenário** é uma sequência específica de passos (principal e alternativos). Elementos: **nome**, **ator**, **pré-condições**, **fluxo principal**, **fluxos alternativos e de exceção**, **pós-condições**.

**Qualidade de um requisito (atributos desejados):** **necessário**, **claro/não ambíguo**, **completo**, **consistente**, **verificável (testável)**, **viável**, **rastreável**, **singular** (uma única exigência) e **independente de implementação** quando possível.

| Exemplo de requisito deficiente | Problema | Versão melhorada |
|---|---|---|
| "O sistema deve ser rápido" | Ambíguo, não mensurável | "O sistema deve exibir os resultados da consulta de ordens em até 2 segundos para até 10.000 registros" |
| "O sistema deve ser fácil de usar e seguro" | Dois requisitos em um; vago | Separar em RNF de usabilidade e de segurança, cada um mensurável |
| "O sistema deve usar tecnologia X" (sem justificativa) | Impõe solução sem necessidade | Manter só se for **restrição** real |

### 7. Validação

**Objetivo:** garantir que os requisitos **representam o que as partes interessadas realmente querem** (validação) e são **corretos e consistentes** (verificação dos requisitos). Técnicas: **revisões e inspeções** (com usuários e especialistas), **prototipação**, **elaboração de casos de teste** a partir dos requisitos (se um requisito não é testável, é deficiente), **leitura por perspectiva**, **simulação de cenários**, **aceite formal** pelos patrocinadores. Relaciona-se à **verificação, validação e teste** do item 5.4 (arquivo `06`).

### 8. Gerenciamento de requisitos

**Gerenciar requisitos** é controlar o conjunto de requisitos ao longo do projeto: manter a **linha de base**, **rastrear**, **controlar mudanças** e **comunicar**.

| Atividade | Descrição |
|---|---|
| **Linha de base de requisitos** | Conjunto aprovado de requisitos, ponto de referência para mudanças |
| **Controle de mudanças** | Solicitar, avaliar impacto (escopo, prazo, custo, risco), aprovar e registrar; participação de um **comitê de controle de mudanças** quando necessário (Módulo 3, controle integrado de mudanças) |
| **Rastreabilidade** | Ligar cada requisito à sua **origem** (necessidade) e aos **elementos derivados** (projeto, código, testes) |
| **Gestão de versões e estado** | Proposto, aprovado, implementado, verificado, rejeitado |
| **Gestão de volatilidade e de riscos** | Medir a taxa de mudança de requisitos |
| **Comunicação** | Manter as partes interessadas informadas |
| **Ferramentas** | Repositórios de requisitos, gestão de *backlog*, gestão de configuração |

**Matriz de rastreabilidade (exemplo didático):**

| Necessidade | Requisito | Elemento de projeto | Caso de teste |
|---|---|---|---|
| N-01 Registrar ordens em campo | RF-05 Cadastrar ordem pelo móvel | Componente `OrdemServico` | CT-12, CT-13 |
| N-02 Reduzir tempo de resposta | RNF-02 Resposta ≤ 2 s | Índice sobre `ordem(data_abertura)` | CT-40 (carga) |

*Rastreabilidade ajuda a **análise de impacto** (o que muda se um requisito mudar), a **cobertura de testes** e a **conformidade**.*

#### 8.1 Requisitos em abordagens ágeis

Nas abordagens ágeis (Módulo 2), requisitos são tratados **continuamente**: **histórias** no *backlog*, refinadas e priorizadas pelo *Product Owner*; **critérios de aceitação** e **Definição de Pronto** em cada item; mudança **bem-vinda**; documentação **suficiente**, não exaustiva. Os mesmos princípios (clareza, testabilidade, rastreabilidade) permanecem.

### 9. Comparações conceituais

| Conceito A | Conceito B | Diferença principal |
|---|---|---|
| Requisito funcional | Requisito não funcional | O que o sistema faz × como/qualidade com que faz |
| Requisito não funcional | Restrição | Atributo de qualidade × limitação imposta à solução |
| Requisito de negócio | Requisito de sistema | Objetivo da organização × capacidade da solução |
| Levantamento | Análise | Descobrir necessidades × refinar, modelar, negociar, priorizar |
| Verificação de requisitos | Validação de requisitos | Corretos e consistentes × representam o que o cliente quer |
| Caso de uso | História do usuário | Interação estruturada com fluxos × necessidade breve em linguagem do usuário |
| Rastreabilidade | Controle de mudanças | Ligação entre itens × processo de aprovação de alterações |
| Linha de base | Backlog | Conjunto aprovado e controlado × lista priorizada e dinâmica |

### 10. Aplicações e cenários

**Cenário (didático): sistema de gestão de manutenção.** Entrevistas com técnicos, observação em campo e análise dos formulários atuais revelam a necessidade de **registrar ordens sem conectividade**. Gera-se um **RF** ("registrar ordem offline e sincronizar depois") e **RNF** (segurança dos dados no dispositivo, desempenho de sincronização). Na análise, conflito: a área jurídica exige **registro de auditoria**; o time negocia o escopo. Prioriza-se por **MoSCoW**, valida-se com **protótipo** e escreve-se o **critério de aceitação**. Uma mudança posterior (novo campo regulatório) passa pelo **controle de mudanças**, com análise de impacto pela **rastreabilidade**. *Limitação:* sem acesso aos usuários reais, requisitos ficam enviesados.

### 11. Atenção para a prova

*Inferência técnica e recomendação pedagógica; sem atribuir frequência à banca.*

- **Funcional** = função/serviço/cálculo/comportamento; **não funcional** = qualidade ou restrição (desempenho, segurança, usabilidade, interface com dispositivos, criptografia, tempo de resposta, disponibilidade, portabilidade).
- Um enunciado que dá uma lista com **uma única alternativa que descreve cálculo ou função** costuma indicar o **requisito funcional**; as demais, atributos de qualidade e restrições.
- **Caso de uso** descreve a **interação entre um ator e o sistema**; um cenário é **uma** sequência de uso.
- Atributos de bom requisito: **verificável, não ambíguo, completo, consistente, rastreável**.
- Mudanças devem ser controladas e ter **impacto avaliado**.
- *Evidência histórica (amostra de duas provas):* a Prova 6 de 2023 (Q24) pediu o requisito **funcional** em uma lista que mesclava funcionais, de interface, de operação, de desempenho e de segurança; a Prova 15 de 2018 (Q27) perguntou o que as **representações textuais de casos de uso** demonstram (uma interação entre um ator e o sistema). Duas provas não permitem inferir frequência.

### 12. Síntese

- Requisito: condição ou capacidade necessária; níveis: negócio, partes interessadas, solução, domínio, transição.
- RF (o que) × RNF (como; qualidade) × restrições.
- Processo: levantamento → análise/negociação → especificação → validação; gerenciamento contínuo.
- Técnicas: entrevistas, questionários, observação, *workshops*, protótipos, cenários/casos de uso, histórias.
- Priorização: MoSCoW, Kano, valor×esforço.
- Qualidade: necessário, claro, completo, consistente, verificável, viável, rastreável.
- Gerenciamento: linha de base, controle de mudanças, rastreabilidade, versões, volatilidade.

### 13. Pontos para a futura produção de questões (registro)

Conceitos: RF, RNF, restrições; técnicas de levantamento; priorização; caso de uso; rastreabilidade. Distinções: RF×RNF; verificação×validação de requisitos; caso de uso×história. Interpretação: classificar requisitos em um cenário; escolher a técnica de levantamento; identificar o defeito de um requisito.

### 14. Referências

- ISO/IEC/IEEE 29148:2018 — *Systems and software engineering — Life cycle processes — Requirements engineering*: **existência e data (30/11/2018) confirmadas em catálogo (BSI)**; conteúdo **não consultado**.
- Técnicas de levantamento, MoSCoW, Kano, caso de uso e atributos de qualidade de requisitos: conhecimento geral do autor do material (SWEBOK, SOMMERVILLE, PRESSMAN, BABOK) — **não verificado online nesta etapa**.
- Edital Transpetro nº 04/2026.4, Anexo IV, item 5.1.


---

## Ciclo de Vida de Sistemas e seus Paradigmas

**Módulo:** M05 — Engenharia de software
**Texto oficial (Anexo IV):** 5.2 "Ciclo de vida de sistemas e seus paradigmas".
**Nota de interpretação:** a expressão "seus paradigmas" não é detalhada; adotou-se a leitura de **paradigmas (modelos) de ciclo de vida**. A abrangência deve ser confirmada pelo usuário; o texto cobre também o Processo Unificado e as abordagens ágeis, por serem modelos de ciclo de vida citados em provas anteriores.
**Status:** `VALIDADO` (aprovado pelo usuário em 2026-10-31, com ressalvas: interpretação dos itens 5.2 e 5.5 a confirmar; normas ISO, princípios ISTQB e vários referenciais de memória não verificados em fonte primária — ver `docs/qualidade/relatorio-producao-modulo-05.md`).

**Objetivos de aprendizagem.** (1) Definir ciclo de vida e processo; (2) descrever os principais modelos (cascata, V, prototipação, incremental, iterativo, espiral, Processo Unificado, ágil); (3) diferenciar modelos sequenciais de iterativos e incrementais; (4) escolher o modelo conforme o contexto.

---

### 1. Introdução

**Ciclo de vida** é o conjunto de **fases e atividades** pelas quais um sistema passa da concepção à desativação. **Modelo de ciclo de vida** (ou **modelo de processo**) é uma **representação abstrata** de como essas atividades se organizam, se ordenam e se repetem. Cada modelo é um **paradigma** de desenvolvimento, com premissas sobre estabilidade dos requisitos, risco e participação do cliente. Não existe um modelo universalmente melhor; escolhe-se conforme o **contexto**.

*Relações:* o ciclo de vida de **projeto** (Módulo 2, arquivo `05`) e o de **desenvolvimento** de software convivem; os requisitos (arquivo `02`), o projeto (arquivo `05`), os testes (arquivo `06`) e os ambientes de integração e entrega (arquivo `07`) distribuem-se de forma diferente em cada modelo.

### 2. Atividades fundamentais

| Atividade | Resultado típico |
|---|---|
| **Levantamento e análise de requisitos** | Especificação de requisitos |
| **Projeto (arquitetura e detalhado)** | Modelos e especificação de projeto |
| **Implementação (codificação)** | Código-fonte |
| **Verificação, validação e testes** | Relatórios de teste, defeitos corrigidos |
| **Implantação (entrega)** | Sistema em produção |
| **Manutenção e evolução** | Novas versões |
| **Atividades de apoio** | Gestão de projeto, de configuração, da qualidade, documentação |

### 3. Classificação dos paradigmas de ciclo de vida

| Paradigma | Característica central |
|---|---|
| **Sequencial (linear)** | Fases executadas **uma após a outra**; a próxima só começa quando a anterior termina |
| **Iterativo** | O desenvolvimento **repete ciclos** refinando requisitos, projeto e código |
| **Incremental** | O sistema é entregue **em partes funcionais** sucessivas (incrementos) |
| **Evolutivo** | O sistema **evolui** a partir de versões iniciais (por exemplo, protótipos evolutivos) |
| **Ágil** | Iterativo e incremental com **ciclos curtos**, feedback contínuo e mudança bem-vinda (Módulo 2) |
| **Baseado em reuso (componentes)** | Montagem de sistemas a partir de componentes existentes |

*Observação:* **iterativo** e **incremental** são ideias distintas, frequentemente combinadas (iterativo-incremental). **Iterar** é revisitar e refinar; **incrementar** é acrescentar partes.

### 4. Principais modelos

#### 4.1 Codificar e corrigir (*code and fix*)

Programa-se e corrige-se sem planejamento formal. Útil apenas em sistemas muito pequenos ou descartáveis; sem requisitos nem projeto claros, a manutenção torna-se cara. É um **antimodelo** de referência.

#### 4.2 Modelo em cascata (*waterfall*)

**Fases sequenciais e lineares**: requisitos → projeto → implementação → testes (integração e sistema) → implantação → manutenção. **Cada fase depende da conclusão da anterior** e produz documentos que a seguinte usa; uma variante com **retroalimentação** permite voltar a fase anterior.

| Vantagens | Limitações |
|---|---|
| Simples e fácil de gerenciar; marcos e documentação claros | Pressupõe **requisitos estáveis** e bem conhecidos |
| Adequado a sistemas bem definidos e a contratos rígidos | **Mudanças tardias** são custosas; o cliente só vê o produto no fim |
| Disciplina de especificação | Riscos descobertos tarde; entrega de valor tardia |

#### 4.3 Modelo em V

Variação **sequencial** do cascata que enfatiza a **relação entre cada fase de desenvolvimento e um nível de teste** correspondente (verificação e validação): requisitos ↔ teste de aceitação; especificação do sistema ↔ teste de sistema; projeto arquitetural ↔ teste de integração; projeto detalhado ↔ teste de unidade; a implementação fica no vértice.

```text
 Requisitos ───────────────────────────────► Teste de aceitação
   Especificação do sistema ─────────────► Teste de sistema
      Projeto arquitetural ───────────► Teste de integração
         Projeto detalhado ───────► Teste de unidade
                    \                 /
                     Implementação
```

*Vantagem:* planejar os testes **desde o início**. *Limitação:* mesma rigidez do cascata.

#### 4.4 Prototipação

Constrói-se um **protótipo** para esclarecer requisitos e obter retorno do usuário. **Descartável (*throwaway*)**: usado para aprender e depois jogado fora; **evolutiva**: o protótipo é refinado até virar o sistema. *Vantagem:* reduz mal-entendidos de requisitos. *Riscos:* tratar protótipo como produto final; qualidade e arquitetura fracas (Módulo 6: prototipação e MVP).

#### 4.5 Modelo incremental

Os requisitos são divididos em **incrementos**; cada incremento percorre as atividades e entrega **parte do sistema utilizável**. Os primeiros incrementos costumam conter as funções mais importantes. *Vantagem:* valor entregue cedo; menor risco. *Limitações:* exige arquitetura capaz de crescer; integração contínua dos incrementos.

#### 4.6 Modelo iterativo

O desenvolvimento ocorre em **iterações**; cada uma produz uma versão mais completa e refinada, com revisão de requisitos e projeto. Foco em **gerenciar o risco e aprender**. Combinado com o incremental, é a base do Processo Unificado e dos métodos ágeis.

#### 4.7 Modelo em espiral (Boehm)

**Orientado a riscos**: o desenvolvimento percorre **voltas (espiras)**; a cada volta executam-se quatro tipos de atividade: **determinar objetivos, alternativas e restrições**; **avaliar alternativas e reduzir riscos** (prototipação, simulação); **desenvolver e verificar** o produto da volta; **planejar a próxima volta**. A decisão de seguir depende da análise de riscos. *Vantagem:* adequado a sistemas grandes e de alto risco. *Limitação:* exige competência em análise de riscos; complexo e custoso para projetos pequenos.

#### 4.8 Desenvolvimento baseado em componentes e reuso

Monta o sistema a partir de **componentes reutilizáveis** (internos, de terceiros, serviços). Reduz esforço, mas depende da disponibilidade de componentes e de sua integração.

#### 4.9 Processo Unificado (PU/RUP)

**Processo iterativo e incremental, dirigido por casos de uso, centrado na arquitetura e orientado a riscos**, associado à UML (arquivo `05`). Organiza-se em **quatro fases** e **disciplinas**:

| Fase | Objetivo principal | Foco |
|---|---|---|
| **Concepção (*Inception*)** | Estabelecer o **escopo** e a **viabilidade** (*business case*), identificar riscos principais | Visão do projeto, casos de uso críticos, estimativas iniciais |
| **Elaboração (*Elaboration*)** | **Definir e estabilizar a arquitetura** (base arquitetural executável), detalhar a maioria dos requisitos e **mitigar os principais riscos** | Arquitetura, planejamento detalhado |
| **Construção (*Construction*)** | Desenvolver o restante do sistema (incrementos) | Código, testes |
| **Transição (*Transition*)** | Entregar o produto ao usuário: implantação, treinamento, correções | Versões beta, aceitação |

*Marcos de fase (nomenclatura do RUP):* objetivos do ciclo de vida (fim da concepção), **arquitetura do ciclo de vida** (fim da elaboração), capacidade operacional inicial (fim da construção) e liberação do produto (fim da transição). *(Nomenclatura de memória; não verificada online.)*

**Disciplinas** (atividades que se repetem em cada iteração, com ênfase variável por fase): modelagem de negócio, requisitos, análise e projeto, implementação, teste, implantação, gerência de configuração e mudanças, gerência de projeto e ambiente.

*Atenção:* as fases do PU são **de gerenciamento** (concepção, elaboração, construção, transição); **não** são as atividades técnicas (requisitos, projeto, código, teste), que ocorrem em todas as fases.

#### 4.10 Métodos ágeis

Abordagens **iterativas e incrementais** baseadas no Manifesto Ágil (Módulo 2, arquivo `02`): **Scrum** (Sprints), **Extreme Programming (XP)**, **Kanban**, entre outras. Características: entregas frequentes, adaptação, colaboração com o cliente e equipes autogerenciadas. Práticas de engenharia comuns no XP: **desenvolvimento orientado a testes (TDD)**, **programação em pares**, **refatoração**, **integração contínua**, entregas pequenas e frequentes, propriedade coletiva do código, padrões de codificação.

#### 4.11 DevOps, entrega contínua e ciclos contínuos

Ciclos em que **desenvolvimento e operação** colaboram e **automatizam** compilação, testes, integração e implantação, permitindo entregas muito frequentes (arquivo `07`). Complementam métodos ágeis e transformam o final do ciclo de vida (implantação, operação, monitoramento) em **fluxo contínuo**.

#### 4.12 Referencial de processos: ISO/IEC/IEEE 12207

Norma de **processos de ciclo de vida de software** (agrupados, por exemplo, em processos de acordo, organizacionais, de gerenciamento técnico e técnicos). Não prescreve um modelo único; é **referencial** para definir processos. *(Descrição geral; norma e edição não verificadas online.)*

### 5. Comparação entre os modelos

| Critério | Cascata | V | Prototipação | Incremental | Iterativo | Espiral | PU/RUP | Ágil |
|---|---|---|---|---|---|---|---|---|
| **Natureza** | Sequencial | Sequencial | Evolutivo | Incremental | Iterativo | Iterativo, orientado a risco | Iterativo e incremental | Iterativo e incremental |
| **Requisitos estáveis?** | Sim | Sim | Não | Parcialmente | Não | Não | Parcialmente | Não |
| **Entrega de valor** | No fim | No fim | Protótipo | A cada incremento | A cada versão | A cada volta | A cada iteração | Frequente |
| **Mudanças** | Custosas | Custosas | Fáceis | Moderadas | Fáceis | Fáceis | Moderadas | Bem-vindas |
| **Foco em riscos** | Baixo | Baixo | Médio | Médio | Médio | **Alto** | **Alto** | Alto (feedback) |
| **Documentação** | Extensa | Extensa | Variável | Média | Média | Média | Média/alta | Suficiente |
| **Adequado a** | Escopo estável, contratos fechados | Sistemas críticos com testes planejados | Requisitos incertos | Sistemas que crescem por partes | Requisitos que evoluem | Grandes sistemas de alto risco | Sistemas grandes com arquitetura | Produtos com mudança frequente |

#### 5.1 Como escolher

Considere: **estabilidade dos requisitos**, **tamanho e criticidade**, **risco**, **disponibilidade do cliente**, **cultura da organização**, **experiência da equipe**, **exigências contratuais e regulatórias** e **possibilidade de entregas parciais**. Muitas organizações adotam **abordagens híbridas** (por exemplo, marcos e conformidade preditivos com execução ágil).

### 6. Comparações conceituais

| Conceito A | Conceito B | Diferença principal |
|---|---|---|
| Modelo sequencial | Modelo iterativo | Uma passagem por fase, sem retorno planejado × ciclos repetidos de refinamento |
| Iterativo | Incremental | Refinar repetindo × entregar partes sucessivas |
| Cascata | Modelo em V | Fases lineares × fases lineares com testes correspondentes explícitos |
| Prototipação descartável | Evolutiva | Protótipo jogado fora × protótipo que vira o sistema |
| Espiral | Cascata | Orientado a riscos e iterativo × sequencial e orientado a documentos |
| Fases do PU | Disciplinas do PU | Etapas de gerenciamento ao longo do tempo × atividades técnicas repetidas |
| Elaboração | Construção | Define a arquitetura e mitiga riscos × desenvolve o restante |
| Ciclo de vida do projeto | Ciclo de vida do produto/software | Fases do projeto (Módulo 2) × fases do desenvolvimento/vida do software |

### 7. Aplicações e cenários

**Cenário (didático): sistema com requisitos regulatórios fixos e módulos de interface incertos.** A parte regulatória, bem definida e com contrato de escopo fechado, usa **modelo em V** (testes planejados desde os requisitos). Os módulos de interface, com requisitos incertos, usam **iterações curtas e prototipação**. O conjunto adota abordagem **híbrida** (Módulo 2, item 2.7). *Limitação:* exige governança para integrar relatórios e marcos de ambas as abordagens.

**Cenário (didático): no Processo Unificado.** Ao fim da **elaboração**, a equipe tem a **arquitetura** executável e validada e os riscos principais reduzidos; pode então estimar com mais segurança o restante do projeto, que ocorre na **construção**.

### 8. Atenção para a prova

*Inferência técnica e recomendação pedagógica; sem atribuir frequência à banca.*

- **Modelos sequenciais** (cada fase só começa quando a anterior termina): **cascata** e **em V**. **Incremental, iterativo, espiral e ágil** não são puramente sequenciais.
- O **cascata** caracteriza-se por **fases sequenciais e lineares, cada uma dependendo da conclusão da anterior**; não por Sprints, nem por revisão constante de requisitos.
- No **Processo Unificado**, o **objetivo da fase de elaboração** é **definir a arquitetura** (além de mitigar riscos e detalhar requisitos); o **escopo e a viabilidade** são da **concepção**.
- **Espiral**: risco; **prototipação**: requisitos incertos.
- *Evidência histórica (amostra de duas provas):* a Prova 6 de 2023 perguntou (Q25) quais modelos de ciclo de vida são sequenciais (resposta: em V e cascata) e (Q54) a característica do **modelo em cascata**; a Prova 15 de 2018 perguntou (Q23) o objetivo da **fase de elaboração do Processo Unificado**. Duas provas não permitem inferir frequência.

### 9. Síntese

- Ciclo de vida: fases e atividades da concepção à desativação; modelo = representação do processo.
- Paradigmas: sequencial, iterativo, incremental, evolutivo, ágil, reuso.
- Cascata e V: sequenciais; V relaciona fases e testes.
- Prototipação (descartável/evolutiva); incremental (partes); iterativo (refinamento); espiral (riscos).
- PU: concepção (escopo/viabilidade), elaboração (arquitetura), construção, transição.
- Ágil/DevOps: ciclos curtos e contínuos.
- Escolha pelo contexto; abordagens híbridas.

### 10. Pontos para a futura produção de questões (registro)

Conceitos: modelos de ciclo de vida; fases do PU. Distinções: sequencial×iterativo×incremental; cascata×V; descartável×evolutiva; fases×disciplinas. Interpretação: identificar o modelo a partir da descrição; escolher o modelo para um cenário.

### 11. Referências

- Descrições dos modelos (cascata, V, prototipação, incremental, iterativo, espiral de Boehm, Processo Unificado/RUP, XP) e da ISO/IEC/IEEE 12207: conhecimento geral do autor do material (SOMMERVILLE, PRESSMAN, SWEBOK, JACOBSON/BOOCH/RUMBAUGH) — **não verificado online** (edições, anos e nomenclatura em português pendentes). Sobre o modelo em espiral, uma fonte secundária indica que Boehm o descreveu em 1986 e o divulgou em 1988 (revista *Computer*); a referência bibliográfica exata **não foi confirmada**.
- Edital Transpetro nº 04/2026.4, Anexo IV, item 5.2.


---

## Paradigmas: Estruturado e Orientado a Objetos

**Módulo:** M05 — Engenharia de software
**Texto oficial (Anexo IV):** 5.3 "Uso de modelos, metodologias, técnicas e ferramentas de análise e projeto de sistemas (paradigma estruturado e paradigma orientado a objetos)".
**Escopo:** A. Este arquivo trata dos **conceitos dos dois paradigmas**; o arquivo `05` trata dos **modelos, metodologias, técnicas e ferramentas** de análise e projeto de cada um.
**Status:** `VALIDADO` (aprovado pelo usuário em 2026-10-31, com ressalvas: interpretação dos itens 5.2 e 5.5 a confirmar; normas ISO, princípios ISTQB e vários referenciais de memória não verificados em fonte primária — ver `docs/qualidade/relatorio-producao-modulo-05.md`).

**Objetivos de aprendizagem.** (1) Definir paradigma e caracterizar o estruturado e o orientado a objetos; (2) explicar abstração, encapsulamento, herança e polimorfismo (sobrecarga e sobrescrita); (3) distinguir associação, agregação, composição e generalização; (4) avaliar coesão e acoplamento; (5) comparar os paradigmas.

---

### 1. Introdução

**Paradigma** é um modo de **pensar e organizar** um sistema: quais são os elementos básicos e como eles se relacionam. O **paradigma estruturado** organiza o sistema em torno de **processos (funções) e dados separados**; o **paradigma orientado a objetos (OO)** organiza-o em torno de **objetos** que reúnem dados e comportamento. Os dois influenciam a **análise**, o **projeto** e a **programação**. Os conceitos deste arquivo são independentes de linguagem.

### 2. Paradigma estruturado

#### 2.1 Programação estruturada

Surgiu para disciplinar o código (combate ao uso indiscriminado de desvios incondicionais, o *goto*). Princípios:

- **Três estruturas de controle:** **sequência**, **seleção** (decisão: *se–então–senão*) e **repetição** (laços). Qualquer algoritmo pode ser expresso com elas (resultado conhecido como teorema de Böhm–Jacopini).
- **Modularização:** dividir o programa em **sub-rotinas/funções/módulos** com responsabilidade definida.
- **Desenvolvimento descendente (*top-down*)** e **refinamentos sucessivos**: partir do problema geral e detalhá-lo.
- **Abstração procedural:** usar uma função sabendo **o que** ela faz, sem conhecer **como**.
- **Separação entre dados e procedimentos:** os dados são estruturas (registros, vetores) manipuladas por funções.

```python
# Exemplo ilustrativo (estruturado): dados e funções separados
def calcular_tempo_parada(inicio_h, fim_h):
    if fim_h < inicio_h:          # seleção
        raise ValueError("fim anterior ao início")
    return fim_h - inicio_h

paradas = [(8, 10), (13, 17)]     # dados (lista de tuplas)
total = 0
for p in paradas:                  # repetição
    total += calcular_tempo_parada(p[0], p[1])   # sequência
print(total)                       # saída: 6
```

*Leitura:* o programa combina **sequência, seleção e repetição**; os **dados** (`paradas`) estão **fora** da função que os processa.

#### 2.2 Análise e projeto estruturados

Baseados na **decomposição funcional** do sistema: identificam-se **processos** (funções), **fluxos de dados**, **depósitos de dados** e **entidades externas**; o projeto produz uma **hierarquia de módulos**. Modelos e técnicas (diagramas de fluxo de dados, dicionário de dados, diagrama de estrutura) estão no arquivo `05`.

#### 2.3 Coesão e acoplamento (qualidade do projeto)

Conceitos criados no projeto estruturado e válidos para qualquer paradigma:

| Conceito | Definição | Meta |
|---|---|---|
| **Coesão** | Grau em que os elementos de um módulo **se relacionam entre si**, em torno de **um objetivo** | **Alta coesão** |
| **Acoplamento** | Grau de **dependência entre módulos** | **Baixo acoplamento** |

**Tipos de coesão** (do menos desejável ao mais desejável): **coincidental** (elementos sem relação), **lógica** (agrupa funções por categoria geral), **temporal** (executados no mesmo momento), **procedimental**, **comunicacional** (operam sobre os mesmos dados), **sequencial** (saída de um é entrada do seguinte) e **funcional** (todos contribuem para uma única tarefa bem definida).

**Tipos de acoplamento** (do mais forte ao mais fraco): por **conteúdo** (um módulo altera o interior de outro), **comum** (dados globais compartilhados), **externo**, de **controle** (um módulo controla o fluxo do outro), de **dados** (troca apenas dados necessários) e **por mensagem**.

*Regra de ouro:* **alta coesão e baixo acoplamento** → módulos mais fáceis de entender, testar, reutilizar e manter.

#### 2.4 Vantagens e limitações

| Vantagens | Limitações |
|---|---|
| Simples e direto para problemas procedurais | Dados e funções **separados** dificultam a manutenção quando as estruturas de dados mudam (efeito em muitas funções) |
| Fácil de entender e de depurar | Reutilização limitada; baixa **extensibilidade** |
| Boa base de algoritmos | Em sistemas grandes, a hierarquia de funções fica complexa |

### 3. Paradigma orientado a objetos

#### 3.1 Conceitos básicos

| Conceito | Definição |
|---|---|
| **Objeto** | Entidade com **identidade**, **estado** (valores dos atributos) e **comportamento** (operações); por exemplo, uma bomba específica |
| **Classe** | **Molde** (tipo) que define atributos e métodos comuns a um conjunto de objetos |
| **Instância / instanciação** | Objeto criado a partir de uma classe; **instanciar** é criar um objeto |
| **Atributo** | Dado que descreve o estado do objeto |
| **Método (operação)** | Comportamento que o objeto executa |
| **Mensagem** | Chamada de um método de um objeto por outro |
| **Construtor** | Operação que inicializa um novo objeto |
| **Interface** | Conjunto de operações que uma classe se compromete a oferecer, **sem implementação** |
| **Classe abstrata** | Classe que **não é instanciada diretamente**, serve de base e pode ter operações abstratas |

#### 3.2 Os quatro pilares

| Pilar | Definição | Benefício |
|---|---|---|
| **Abstração** | Representar apenas as **características essenciais** do objeto para o contexto, ignorando detalhes irrelevantes | Reduz a complexidade |
| **Encapsulamento** | **Ocultar o estado interno** e expor operações por uma interface pública (visibilidade pública, protegida, privada) | Protege a consistência; reduz o acoplamento |
| **Herança** | Uma classe (**subclasse**) **herda** atributos e métodos de outra (**superclasse**), podendo acrescentá-los ou redefini-los (relação "é um") | Reuso; hierarquias |
| **Polimorfismo** | Capacidade de **operações com o mesmo nome terem comportamentos distintos**, conforme o objeto ou os parâmetros | Flexibilidade e extensibilidade |

#### 3.3 Formas de polimorfismo

| Forma | Descrição | Exemplo |
|---|---|---|
| **Sobrecarga (*overloading*)** | **Vários métodos com o mesmo nome na mesma classe, com parâmetros diferentes** (número ou tipos); resolvida pela assinatura (em geral, em tempo de compilação) | `calcular(horas)` e `calcular(inicio, fim)` na mesma classe |
| **Sobrescrita (*overriding*)** | A **subclasse redefine** um método herdado, **com a mesma assinatura**; a versão executada depende do tipo real do objeto, em **tempo de execução** (ligação dinâmica) | `Bomba` e `Valvula` redefinem `descrever()` de `Equipamento` |
| **Polimorfismo de subtipo (inclusão)** | Um objeto de subclasse pode ser usado onde se espera a superclasse | Lista de `Equipamento` contendo bombas e válvulas |

*Nota terminológica:* o termo **polimorfismo** é usado de modo amplo; em muitas fontes ele designa principalmente a **sobrescrita com ligação dinâmica**, ao passo que **sobrecarga** é o mecanismo de métodos de mesmo nome e parâmetros diferentes. Algumas provas descrevem a sobrecarga como "técnica" do paradigma e outras chamam de **polimorfismo** a propriedade de várias operações terem o mesmo nome; **leia a descrição do enunciado**.

```python
class Equipamento:
    def __init__(self, tag):          # construtor
        self._tag = tag               # atributo encapsulado (convenção de privado)
    def descrever(self):
        return f"Equipamento {self._tag}"

class Bomba(Equipamento):             # herança: Bomba "é um" Equipamento
    def descrever(self):              # sobrescrita
        return f"Bomba {self._tag}"

for e in [Equipamento("E-1"), Bomba("P-101")]:   # polimorfismo de subtipo
    print(e.descrever())              # "Equipamento E-1" e "Bomba P-101"
```

*Leitura:* a mesma chamada `descrever()` produz resultados diferentes conforme o **tipo real** do objeto. *(Python não implementa sobrecarga por assinatura como outras linguagens; o exemplo ilustra sobrescrita e subtipo.)*

#### 3.4 Relacionamentos entre classes

| Relacionamento | Significado | Exemplo | Dependência de existência |
|---|---|---|---|
| **Associação** | Ligação entre classes ("conhece/usa") | Técnico *registra* Ordem | Independente |
| **Agregação** | Associação **todo–parte**, em que a parte **pode existir sem** o todo | Equipe *tem* Técnicos | Partes existem sozinhas |
| **Composição** | Todo–parte **forte**; a parte **não existe sem** o todo (ciclo de vida atrelado) | Ordem *compõe-se* de Itens | Parte morre com o todo |
| **Generalização (herança)** | "É um" | Bomba **é um** Equipamento | — |
| **Realização** | Classe implementa uma interface | `Bomba` implementa `Monitoravel` | — |
| **Dependência** | Uso temporário | Classe usa outra como parâmetro | Fraca |

#### 3.5 Princípios e padrões de projeto OO (complemento B)

- **Princípios SOLID:** responsabilidade única; aberto/fechado; substituição de Liskov; segregação de interfaces; inversão de dependência.
- **Preferir composição a herança** quando "é um" não for natural.
- **Padrões de projeto** (soluções recorrentes catalogadas; por exemplo, os 23 padrões do livro dos "Gang of Four", em categorias de **criação**, **estruturais** e **comportamentais**). *(Citados de memória; não verificados online.)*

#### 3.6 Vantagens e limitações

| Vantagens | Limitações |
|---|---|
| Modelagem próxima do domínio; **reutilização** e **manutenção** | Curva de aprendizado; sobrecarga de projeto |
| **Encapsulamento** reduz impacto de mudanças | Herança mal usada gera acoplamento e hierarquias frágeis |
| Boa base para UML e componentes | Pode ser excessivo para problemas simples ou puramente funcionais |

### 4. Comparação entre os paradigmas

| Critério | **Estruturado** | **Orientado a objetos** |
|---|---|---|
| Unidade básica | **Função/processo** | **Objeto/classe** |
| Dados e comportamento | **Separados** | **Reunidos** (encapsulados) |
| Decomposição | **Funcional** (top-down) | Por **objetos** do domínio |
| Reuso | Bibliotecas de funções | Herança, composição, componentes |
| Mudanças nos dados | Podem afetar muitas funções | Contidas pelo encapsulamento |
| Modelos de análise | DFD, DER, dicionário de dados | Casos de uso, diagramas de classes, de sequência (arquivo `05`) |
| Qualidade do projeto | Coesão e acoplamento | Coesão, acoplamento, encapsulamento |
| Adequação | Problemas procedurais, algoritmos, *scripts* | Sistemas complexos, de domínio rico, evolutivos |

*Os paradigmas não são excludentes:* sistemas OO contêm **código estruturado** dentro dos métodos; linguagens permitem estilos mistos. Existem ainda outros paradigmas (funcional, lógico) citados apenas como contexto.

### 5. Comparações conceituais

| Conceito A | Conceito B | Diferença principal |
|---|---|---|
| Classe | Objeto | Molde × instância |
| Abstração | Encapsulamento | Escolher o essencial × ocultar o interno |
| Herança | Composição | "É um" × "tem um" |
| Agregação | Composição | Partes independentes × partes dependentes do todo |
| Sobrecarga | Sobrescrita | Mesmo nome, parâmetros diferentes (mesma classe) × redefinição na subclasse com a mesma assinatura |
| Interface | Classe abstrata | Só contrato × pode ter implementação parcial |
| Coesão | Acoplamento | Relação interna do módulo × dependência entre módulos |
| Programação estruturada | Programação OO | Funções e dados separados × objetos |

### 6. Aplicações e cenários

**Cenário (didático): evolução de um cadastro.** Um sistema estruturado guarda equipamentos em registros usados por 40 funções. Acrescentar um atributo obriga a alterar várias funções. Em um desenho OO, a classe `Equipamento` encapsula o atributo; apenas seus métodos e subclasses mudam. *Limitação:* a migração exige reprojeto.

**Cenário (didático): escolha de polimorfismo.** Um desenvolvedor precisa criar três métodos com o mesmo nome e parâmetros diferentes na mesma classe: usa **sobrecarga**. Para especializar o comportamento de `descrever()` em subclasses, usa **sobrescrita**.

### 7. Atenção para a prova

*Inferência técnica e recomendação pedagógica; sem atribuir frequência à banca.*

- **Sobrecarga**: mesmo nome, parâmetros diferentes, mesma classe; **sobrescrita**: subclasse redefine método com a mesma assinatura; **herança**: reuso e especialização; **encapsulamento**: oculta o estado; **instanciação**: criar objetos de uma classe.
- Em uma lista com Herança, Interface, Instanciação, Sobrecarga e Sobrescrita, a que descreve "métodos de mesmo nome e parâmetros diferentes na mesma classe" é a **sobrecarga**.
- Em outra formulação, a propriedade que permite várias operações com o mesmo nome, reduzindo o acoplamento entre objetos, é chamada **polimorfismo**.
- **Estruturado**: sequência, decisão, repetição; módulos; **OO**: objetos, classes, mensagens.
- **Alta coesão e baixo acoplamento**.
- *Evidência histórica (amostra de duas provas):* a Prova 6 de 2023 (Q32) pediu o nome da técnica de criar métodos de mesmo nome com parâmetros diferentes (sobrecarga); a Prova 15 de 2018 (Q29) pediu a propriedade típica da orientação a objetos que permite várias operações com o mesmo nome, reduzindo o acoplamento (polimorfismo). Duas provas não permitem inferir frequência.

### 8. Síntese

- Estruturado: sequência, seleção, repetição; módulos; *top-down*; dados e funções separados.
- OO: objetos e classes; abstração, encapsulamento, herança, polimorfismo.
- Polimorfismo: sobrecarga (mesma classe, parâmetros diferentes) e sobrescrita (subclasse, mesma assinatura); subtipo.
- Relações: associação, agregação, composição, generalização, realização, dependência.
- Coesão alta, acoplamento baixo.
- SOLID e padrões de projeto (complemento).

### 9. Pontos para a futura produção de questões (registro)

Conceitos: pilares da OO; polimorfismo; relações entre classes; coesão e acoplamento. Distinções: sobrecarga×sobrescrita; agregação×composição; herança×composição; classe×objeto. Interpretação: nomear o conceito a partir de uma descrição ou de um trecho de código.

### 10. Referências

- Conceitos de programação estruturada (Böhm–Jacopini, Dijkstra), projeto estruturado (YOURDON, CONSTANTINE), orientação a objetos (BOOCH, RUMBAUGH, JACOBSON; MEYER), SOLID (MARTIN) e padrões (GAMMA et al.): conhecimento geral do autor do material — **não verificado online** (edições, anos e páginas pendentes), **exceto**: GAMMA, E.; HELM, R.; JOHNSON, R.; VLISSIDES, J. *Design Patterns: Elements of Reusable Object-Oriented Software*. Addison-Wesley, 1994 — **verificado** em listagens de livrarias (23 padrões). Böhm e Jacopini (1966), Dijkstra (1968), DeMarco, Gane e Sarson, Yourdon: **não verificados**.
- Edital Transpetro nº 04/2026.4, Anexo IV, item 5.3.


---

## Análise e Projeto de Sistemas: Modelos, Metodologias, Técnicas e Ferramentas

**Módulo:** M05 — Engenharia de software
**Texto oficial (Anexo IV):** 5.3 "Uso de modelos, metodologias, técnicas e ferramentas de análise e projeto de sistemas (paradigma estruturado e paradigma orientado a objetos)".
**Referencial de modelagem OO:** **UML (*Unified Modeling Language*) 2.5.1**, da OMG (dezembro de 2017), com **14 tipos de diagramas** — contagem e agrupamento **confirmados em fontes secundárias** (o texto da OMG não foi consultado).
**Status:** `VALIDADO` (aprovado pelo usuário em 2026-10-31, com ressalvas: interpretação dos itens 5.2 e 5.5 a confirmar; normas ISO, princípios ISTQB e vários referenciais de memória não verificados em fonte primária — ver `docs/qualidade/relatorio-producao-modulo-05.md`).

**Objetivos de aprendizagem.** (1) Distinguir análise e projeto; (2) construir e interpretar modelos da análise estruturada (DFD, dicionário de dados, especificações de processo, estados, estrutura); (3) construir e interpretar os principais diagramas UML; (4) conhecer metodologias e ferramentas (CASE); (5) relacionar modelos à fase do ciclo de vida.

---

### 1. Introdução

**Análise** responde **"o quê?"**: compreender o problema e os requisitos e representá-los em modelos **independentes de implementação**. **Projeto** responde **"como?"**: definir a **arquitetura** e os detalhes da solução (módulos, classes, dados, interfaces) levando em conta a tecnologia. **Modelo** é uma **abstração** da realidade ou do sistema para compreender, discutir, validar e documentar. **Metodologia** reúne **modelos, notações, processo e orientações**; **técnica** é o procedimento para construir um modelo; **ferramenta** é o software que apoia a modelagem (ferramentas **CASE**).

*Relações:* os modelos derivam dos requisitos (arquivo `02`), seguem o paradigma escolhido (arquivo `04`), alimentam a implementação e os testes (arquivo `06`) e se distribuem conforme o modelo de ciclo de vida (arquivo `03`); o modelo de dados (Módulo 1, arquivo `02`) complementa a análise.

### 2. Paradigma estruturado: modelos e técnicas

#### 2.1 Diagrama de fluxo de dados (DFD)

O **DFD** representa o sistema como **processos** que **transformam dados** e como os dados **fluem** entre processos, depósitos e entidades externas, sem indicar a ordem de execução.

| Elemento | Representação (varia por notação) | Significado |
|---|---|---|
| **Processo** | Círculo (Yourdon/DeMarco) ou retângulo de cantos arredondados (Gane–Sarson) | Transforma entradas em saídas |
| **Fluxo de dados** | Seta rotulada | Dados em movimento |
| **Depósito de dados** | Duas linhas paralelas ou retângulo aberto | Dados em repouso (arquivo, tabela) |
| **Entidade externa (terminador)** | Retângulo | Origem ou destino de dados fora do sistema |

**Níveis:** **diagrama de contexto** (o sistema como um único processo e suas entidades externas), **diagrama de nível 0** (principais processos) e **decomposição** em níveis inferiores (processos "primitivos" detalhados em especificações).

**Regras de consistência:** **balanceamento** (as entradas e saídas de um processo no nível superior coincidem com as de seu detalhamento); **conservação de dados** (todo dado que sai de um processo vem de suas entradas); todo fluxo tem **nome**; **depósitos** não trocam dados diretamente entre si (passam por processos); processos não "só consomem" nem "só geram" dados.

*Exemplo (didático):* diagrama de contexto do sistema de ordens de serviço — entidades externas *Técnico* e *Gestor*; fluxos *solicitação de ordem*, *ordem concluída*, *relatório de ordens*.

#### 2.2 Dicionário de dados

Registra a **definição de todos os dados** (fluxos, depósitos, elementos). Notação clássica (DeMarco): `=` "é composto de"; `+` "e"; `[ | ]` "ou" (alternativa); `{ }` repetição; `( )` opcional.

```text
Ordem-de-Serviço = Número + Data-Abertura + Equipamento + {Item-de-Serviço} + (Observação)
Equipamento      = Tag + Descrição + [Bomba | Válvula | Compressor]
```

#### 2.3 Especificação de processos (mini-especificações)

Descrevem a **lógica dos processos primitivos**: **português estruturado** (pseudocódigo), **tabelas de decisão** (condições × ações), **árvores de decisão** e **fluxogramas**.

#### 2.4 Diagrama de transição de estados (DTE)

Representa o **comportamento dinâmico** de entidades ou do sistema: **estados**, **transições**, **eventos** e **ações** (por exemplo, a ordem de serviço: *Aberta → Em execução → Concluída → Encerrada*).

#### 2.5 Modelo de dados (DER)

O **diagrama entidade-relacionamento** (Módulo 1, arquivo `02`) é o modelo de **dados** da análise estruturada.

#### 2.6 Projeto estruturado: diagrama de estrutura

O **diagrama de estrutura** (ou **de módulos**) mostra a **hierarquia de módulos**, as **chamadas** entre eles e os **dados** trocados (parâmetros). Conceitos: **fan-in** (quantos módulos chamam um módulo) e **fan-out** (quantos módulos um módulo chama); busca-se **alta coesão e baixo acoplamento** (arquivo `04`). A transformação do DFD em estrutura de módulos usa técnicas de **análise de transformação** e **análise de transação**.

#### 2.7 Metodologias estruturadas

Metodologias clássicas combinam esses modelos: **Análise Estruturada** (DeMarco; Gane e Sarson), **Projeto Estruturado** (Yourdon e Constantine) e a **Análise Essencial** (que parte de **eventos** do ambiente e separa requisitos essenciais da tecnologia). *(Referências de memória; não verificadas.)*

### 3. Paradigma orientado a objetos: UML

#### 3.1 A UML

A **UML** é uma **linguagem gráfica de modelagem** padronizada pela **OMG** para **especificar, visualizar, construir e documentar** sistemas, sobretudo de software. É uma **notação**, **não** uma metodologia: define diagramas, não o processo (o Processo Unificado, arquivo `03`, é um processo que a usa). A UML 2.5.1 reúne **14 diagramas**, em dois grupos:

| Grupo | Diagramas |
|---|---|
| **Estruturais (7)** | **Classes**, **objetos**, **pacotes**, **estrutura composta**, **componentes**, **implantação** (*deployment*), **perfis** |
| **Comportamentais (7)** | **Casos de uso**, **atividades**, **máquina de estados**, e os de **interação**: **sequência**, **comunicação**, **visão geral de interação**, **temporização** |

*Nem todo projeto precisa usar todos os diagramas:* escolhem-se os adequados ao objetivo (princípio de "modelar o suficiente").

#### 3.2 Diagrama de casos de uso

Mostra **o que o sistema oferece aos atores**, do ponto de vista externo.

| Elemento | Significado |
|---|---|
| **Ator** | Papel que interage com o sistema (pessoa, sistema, dispositivo) |
| **Caso de uso** | Funcionalidade completa que dá **valor** ao ator |
| **Associação** | Participação do ator no caso de uso |
| **Inclusão (*include*)** | Um caso de uso **sempre** usa o comportamento de outro (reuso) |
| **Extensão (*extend*)** | Um caso de uso **opcionalmente** amplia outro em condições específicas |
| **Generalização** | Atores ou casos de uso especializados |
| **Fronteira do sistema** | Retângulo que delimita o sistema |

Os casos de uso são **descritos textualmente** (nome, atores, pré-condições, fluxos principal e alternativos, pós-condições; arquivo `02`): o diagrama é um **índice visual**, e a descrição textual é a especificação.

#### 3.3 Diagrama de classes

Principal diagrama estrutural: mostra **classes**, seus **atributos e operações** e os **relacionamentos**.

| Notação | Significado |
|---|---|
| Retângulo com três compartimentos | **Nome**, **atributos**, **operações** |
| `+`, `-`, `#`, `~` | Visibilidade **pública**, **privada**, **protegida** e de **pacote** |
| **Multiplicidade** (`1`, `0..1`, `*`, `1..*`) | Quantas instâncias participam do relacionamento |
| Linha simples | **Associação** |
| Losango vazio | **Agregação** |
| Losango cheio | **Composição** |
| Seta com triângulo vazado | **Generalização (herança)** |
| Seta tracejada com triângulo vazado | **Realização** (implementação de interface) |
| Seta tracejada | **Dependência** |
| *Itálico* ou `<<abstract>>` | Classe/operação **abstrata** |

*Exemplo (didático):* `OrdemServico (1) ◆── (1..*) ItemServico` (composição); `Tecnico (1) ── (0..*) OrdemServico` (associação); `Bomba ▷ Equipamento` (generalização).

*Modelo conceitual (de domínio) × diagrama de classes de projeto:* o primeiro representa **conceitos do negócio**, sem operações; o segundo acrescenta **responsabilidades, visibilidade, tipos** e detalhes de implementação.

#### 3.4 Diagrama de objetos

Mostra **instâncias** e seus valores em um **instante** (instantâneo do diagrama de classes).

#### 3.5 Diagrama de sequência

**Interação entre objetos ao longo do tempo**: **linhas de vida** (verticais), **mensagens** (horizontais): síncronas, assíncronas, de retorno, de criação e de destruição; **barras de ativação**; **fragmentos combinados** (`alt` alternativa, `opt` opcional, `loop` repetição, `par` paralelo). Mostra **como** um cenário de caso de uso é realizado.

#### 3.6 Diagrama de comunicação (colaboração)

Mesma informação do de sequência, com foco nas **ligações** entre objetos e **mensagens numeradas** (em vez do eixo do tempo).

#### 3.7 Diagrama de atividades

Modela **fluxos de trabalho e algoritmos**: **nó inicial**, **final**, **ações**, **decisões e junções (*merge*)**, **bifurcação e sincronização (*fork/join*)** para paralelismo, **partições (raias)** que indicam responsáveis, fluxos de objetos. Usado para **processos de negócio**, casos de uso complexos e lógica.

#### 3.8 Diagrama de máquina de estados

**Estados de um objeto** durante sua vida e **transições** disparadas por **eventos**, com **condições de guarda** e **ações** (evolução do DTE do estruturado).

#### 3.9 Diagramas de componentes e de implantação

- **Componentes:** **componentes** de software, **interfaces fornecidas e requeridas** e dependências (arquitetura lógica).
- **Implantação:** **nós físicos ou virtuais** (servidores, dispositivos), **artefatos** instalados neles e **conexões** (arquitetura física).

#### 3.10 Outros diagramas

**Pacotes** (agrupamento e dependências), **estrutura composta** (estrutura interna de uma classe), **visão geral de interação**, **temporização** e **perfis** (extensão da UML).

### 4. Análise e projeto OO: processo de modelagem

Sequência típica (por exemplo, no Processo Unificado, arquivo `03`):

1. **Requisitos** → **modelo de casos de uso** (atores e casos de uso).
2. **Análise** → **modelo conceitual (de domínio)** e **diagramas de atividades/estados** para regras e comportamento; **realização** dos casos de uso por diagramas de **sequência**.
3. **Projeto** → **diagrama de classes de projeto**, **arquitetura** (camadas, componentes), **projeto de interface**, **persistência** (mapeamento objeto-relacional, Módulo 1), **padrões de projeto**.
4. **Implementação e testes** (arquivo `06`) com **rastreabilidade** aos modelos.

*(Complemento B)* **Padrões GRASP** (atribuição de responsabilidades): especialista na informação, criador, controlador, baixo acoplamento, alta coesão, polimorfismo, fabricação pura, indireção e variações protegidas.

#### 4.1 Arquitetura de software (complemento B)

**Arquitetura** define a **estrutura de alto nível** do sistema (componentes, relações, princípios). Estilos comuns: **camadas** (apresentação, aplicação/negócio, dados), **cliente-servidor**, **MVC** (modelo–visão–controlador), **orientada a serviços/microsserviços**, **orientada a eventos**, **pipes e filtros**. Decisões arquiteturais afetam **qualidade** (desempenho, segurança, manutenibilidade — arquivo `01`) e custo de mudança.

### 5. Metodologias e processos de análise e projeto

| Metodologia/processo | Paradigma | Característica |
|---|---|---|
| **Análise e projeto estruturados** (DeMarco, Gane–Sarson, Yourdon–Constantine) | Estruturado | Decomposição funcional, DFD, dicionário de dados, diagrama de estrutura |
| **Métodos OO de primeira geração** (Booch, OMT de Rumbaugh, OOSE de Jacobson) | OO | Unificados na **UML** e no **Processo Unificado** |
| **Processo Unificado / RUP** | OO | Iterativo, orientado a casos de uso, centrado na arquitetura (arquivo `03`) |
| **Modelagem ágil e métodos ágeis** | OO/outros | Modelar o **suficiente**; modelos como meio de comunicação; *backlog* e histórias (Módulos 2 e 6) |
| **Desenvolvimento orientado a modelos (MDD/MDA)** | OO | Gerar código a partir de modelos (complemento B) |

### 6. Ferramentas

| Categoria | Função | Observações |
|---|---|---|
| **Ferramentas CASE** (*Computer-Aided Software Engineering*) | Apoiar atividades do ciclo de vida | *Upper CASE* (análise e projeto), *lower CASE* (codificação, testes), integradas (*I-CASE*) |
| **Modelagem UML e de processos** | Criar e validar diagramas; validar consistência; gerar documentação | Exemplos de categorias: ferramentas de modelagem UML, de diagramação e de modelagem de dados |
| **Geração de código e engenharia reversa** | Gerar código a partir de modelos; extrair modelos do código/banco | Engenharia reversa de dados: Módulo 1, arquivo `02` |
| **Gerência de requisitos e rastreabilidade** | Ligar requisitos, modelos, código e testes | Arquivo `02` |
| **Repositório de modelos** | Controle de versão e colaboração | Arquivo `07` |

*(Nomes de produtos não são citados; não há recomendação.)*

### 7. Comparações conceituais

| Conceito A | Conceito B | Diferença principal |
|---|---|---|
| Análise | Projeto | O quê (problema, independente de tecnologia) × como (solução) |
| Modelo | Metodologia | Abstração do sistema × conjunto de modelos, notações e processo |
| UML | Processo Unificado | Linguagem de modelagem × processo de desenvolvimento |
| DFD | Fluxograma | Fluxo de **dados** entre processos, sem ordem × fluxo de **controle** (sequência de passos) |
| DFD | Diagrama de atividades | Dados transformados × fluxo de atividades e controle, com paralelismo e raias |
| Caso de uso (diagrama) | Caso de uso (descrição) | Visão geral × especificação textual |
| *Include* | *Extend* | Sempre inclui × amplia opcionalmente |
| Diagrama de classes | Diagrama de objetos | Estrutura (tipos) × instâncias e valores |
| Sequência | Comunicação | Ênfase no tempo × ênfase nas ligações |
| Componentes | Implantação | Estrutura lógica × distribuição física |
| Modelo conceitual | Diagrama de classes de projeto | Conceitos do negócio × classes com responsabilidades e detalhes |

### 8. Aplicações e cenários

**Cenário (didático): do requisito ao modelo.** O requisito "o técnico registra uma ordem de serviço" gera: um **caso de uso** *Registrar Ordem*; um **modelo conceitual** (`Ordem`, `Equipamento`, `Tecnico`); um **diagrama de sequência** que mostra a interação entre a interface, o controlador e as classes de domínio; um **diagrama de classes de projeto** com responsabilidades e visibilidade; e **casos de teste** derivados do fluxo principal e dos alternativos. *Limitação:* modelos desatualizados em relação ao código perdem valor; manter a rastreabilidade.

**Cenário (didático): DFD no paradigma estruturado.** Para um sistema de faturamento legado, o diagrama de contexto mostra *Cliente*, *Contabilidade* e os fluxos; o nível 0 decompõe em *Registrar consumo*, *Calcular fatura* e *Emitir cobrança*, com depósitos *Consumos* e *Faturas*. O dicionário de dados define `Fatura`. *Limitação:* o DFD não mostra o controle nem a ordem das operações.

### 9. Atenção para a prova

*Inferência técnica e recomendação pedagógica; sem atribuir frequência à banca.*

- **Casos de uso**: interação **ator–sistema**; são "representações textuais em forma de narrativa" quando descritos; um caso de uso é **uma funcionalidade** que dá valor ao ator.
- **UML** é **linguagem de modelagem**, **não metodologia**; tem 14 diagramas, estruturais e comportamentais.
- **Agregação** × **composição**; **classe** × **objeto**; **include** × **extend**.
- **DFD**: elementos (processo, fluxo, depósito, entidade externa) e regras de **balanceamento**.
- Em questões de **representação**, associe o diagrama ao seu propósito (casos de uso = visão externa; classes = estrutura; sequência = interação no tempo; atividades = fluxo; estados = ciclo de vida de um objeto).
- *Evidência histórica (amostra de duas provas):* a Prova 15 de 2018 (Q27) perguntou o que os **casos de uso** demonstram (uma interação entre um ator e o sistema) e a Prova 6 de 2023 trouxe questões sobre diagramas E-R (Módulo 1). As provas catalogadas **não** trouxeram questões sobre DFD ou sobre os demais diagramas UML; duas provas não permitem inferir frequência, e o edital de 2026 prevê o item 5.3 de modo amplo.

### 10. Síntese

- Análise (o quê) × projeto (como); modelo × metodologia × técnica × ferramenta.
- Estruturado: DFD (contexto, nível 0, decomposição), dicionário de dados, especificação de processos, DTE, diagrama de estrutura; coesão/acoplamento.
- OO/UML 2.5.1: 14 diagramas (7 estruturais + 7 comportamentais); casos de uso, classes, sequência, atividades, estados, componentes, implantação.
- Processo OO: casos de uso → modelo de domínio → interação → classes de projeto → arquitetura.
- Metodologias: estruturadas, Processo Unificado, ágeis, MDD.
- Ferramentas CASE: modelagem, geração de código, engenharia reversa, rastreabilidade.

### 11. Pontos para a futura produção de questões (registro)

Conceitos: DFD, dicionário de dados, UML, casos de uso, classes, sequência, atividades, estados. Distinções: análise×projeto; DFD×fluxograma; include×extend; agregação×composição; UML×PU. Interpretação: escolher o diagrama para um propósito; ler um diagrama de classes ou de sequência; identificar erros de balanceamento em DFD.

### 12. Referências

- OBJECT MANAGEMENT GROUP. *Unified Modeling Language (UML)* 2.5.1, dez. 2017 (documento formal/17-12-05). **Página oficial da OMG** (https://www.omg.org/spec/UML/2.5.1) conferida em 2026-10-31: versão 2.5.1, status formal, data de dezembro de 2017. **A lista e a contagem dos 14 diagramas** (7 estruturais e 7 comportamentais) vêm de **fontes secundárias**: a página da OMG não os lista e o PDF da especificação não foi lido.
- DeMARCO; GANE e SARSON; YOURDON e CONSTANTINE; JACOBSON, BOOCH e RUMBAUGH; LARMAN (GRASP); SOMMERVILLE; PRESSMAN — citados de memória, **não verificados online** nesta etapa.
- Edital Transpetro nº 04/2026.4, Anexo IV, item 5.3.


---

## Verificação, Validação e Teste de Software

**Módulo:** M05 — Engenharia de software
**Texto oficial (Anexo IV):** 5.4 "Verificação, validação e teste".
**Escopo:** A. Princípios de teste (ISTQB) conferidos apenas em fontes secundárias; o texto do programa de certificação não foi consultado.
**Status:** `VALIDADO` (aprovado pelo usuário em 2026-10-31, com ressalvas: interpretação dos itens 5.2 e 5.5 a confirmar; normas ISO, princípios ISTQB e vários referenciais de memória não verificados em fonte primária — ver `docs/qualidade/relatorio-producao-modulo-05.md`).

**Objetivos de aprendizagem.** (1) Distinguir verificação, validação e teste; (2) diferenciar técnicas estáticas e dinâmicas; (3) descrever níveis e tipos de teste; (4) aplicar técnicas de caixa-preta e de caixa-branca (partição de equivalência, valor limite, cobertura, complexidade ciclomática); (5) compreender o processo de teste, defeitos, automação e ambientes.

---

### 1. Introdução

Produzir software correto exige **verificar** se ele foi construído conforme a especificação, **validar** se atende às necessidades reais e **testar** — a atividade que executa o software (ou examina artefatos) para **revelar defeitos** e **avaliar qualidade**. Nenhuma técnica elimina todos os defeitos: o objetivo é **reduzir o risco** a um nível aceitável, ao menor custo.

### 2. Conceitos fundamentais

#### 2.1 Verificação × validação

| Conceito | Pergunta clássica | Foco |
|---|---|---|
| **Verificação** | "Estamos construindo **o produto corretamente**?" | Conformidade com **especificações** (requisitos, projeto) |
| **Validação** | "Estamos construindo **o produto certo**?" | Atendimento às **necessidades do usuário** e ao uso pretendido |

**Verificação e validação (V&V)** é o conjunto de atividades que cobre ambas, ao longo de **todo o ciclo de vida**. O **teste** é **uma** das atividades de V&V (técnica **dinâmica**), junto com **revisões**, **inspeções** e **análise estática**.

#### 2.2 Erro, defeito e falha

| Termo | Significado |
|---|---|
| **Erro (*error/mistake*)** | Ação humana que produz resultado incorreto |
| **Defeito (*defect/fault/bug*)** | Imperfeição no artefato (código, requisito, projeto) causada por um erro |
| **Falha (*failure*)** | Desvio observado do comportamento esperado quando o defeito é **ativado** na execução |

Cadeia: **erro → defeito → falha**. Um defeito pode **nunca** causar falha se o trecho não for executado.

#### 2.3 Objetivos do teste

Encontrar defeitos; **ganhar confiança** na qualidade; **prevenir** defeitos (testar requisitos e projeto cedo); fornecer **informação** para decisões; verificar **conformidade** com requisitos, contratos e normas. O teste **mostra a presença** de defeitos, **não** prova sua ausência.

#### 2.4 Princípios de teste (literatura ISTQB)

1. O teste **mostra a presença** de defeitos, não sua ausência.
2. **Teste exaustivo é impossível**: use análise de riscos e priorização.
3. **Teste antecipado** (*shift-left*) economiza tempo e dinheiro.
4. **Defeitos se agrupam** em poucos módulos (princípio de Pareto).
5. **Paradoxo do pesticida**: os mesmos testes, repetidos, deixam de encontrar novos defeitos — é preciso revisá-los.
6. O teste **depende do contexto** (um sistema crítico é testado de modo diferente de um aplicativo simples).
7. **Falácia da ausência de erros**: um sistema sem defeitos encontrados, mas que não atende às necessidades, **não** é útil.

*(Lista conforme fontes secundárias; ordem e redação variam por edição.)*

### 3. Técnicas estáticas (sem executar o software)

Examinam **artefatos** (requisitos, projeto, código, planos de teste, documentação) **sem executar o código**. Principais objetivos: **encontrar defeitos cedo** e **reduzir defeitos na documentação** a partir da qual o software é desenvolvido.

| Técnica | Descrição | Formalidade |
|---|---|---|
| **Revisão informal** | Colegas leem e comentam | Baixa |
| ***Walkthrough*** (percurso) | O **autor conduz** os participantes pelo artefato para explicar, obter opiniões e identificar problemas | Baixa a média |
| **Revisão técnica** | Pares com competência técnica avaliam conformidade e alternativas | Média |
| **Inspeção** (Fagan) | **Processo formal**, com papéis (moderador, autor, leitor, escriba, inspetores), critérios de entrada e saída e medição; maior eficácia na detecção | Alta |
| **Análise estática automatizada** | Ferramentas analisam código sem executá-lo: padrões, vulnerabilidades, complexidade, violações de normas (por exemplo, *linters*; SAST, Módulo 9, item 9.5) | — |

**Vantagens:** detectam defeitos **antes** da codificação e dos testes dinâmicos; custo de correção muito menor; podem ser aplicadas a **qualquer artefato**. **Limitações:** dependem de pessoas e de tempo; não avaliam comportamento em execução (desempenho, concorrência).

### 4. Teste dinâmico: níveis

| Nível | Foco | Quem/onde | Exemplo |
|---|---|---|---|
| **Unidade (componente)** | Menores partes testáveis (funções, métodos, classes), isoladas | Desenvolvedor; automatizado | Testar uma função de cálculo com valores diversos |
| **Integração** | **Interfaces** e interação entre componentes/sistemas | Desenvolvedores/testadores | Integração entre serviço de ordens e banco de dados |
| **Sistema** | O sistema **completo** em ambiente representativo, frente aos requisitos | Equipe de teste independente | Fluxos ponta a ponta |
| **Aceitação** | O sistema frente às **necessidades do usuário/negócio**; decide se pode ser **liberado** | Usuários e patrocinadores | Teste de aceitação do usuário (UAT) |

**Teste de aceitação** (também **homologação**): realizado por **representantes dos usuários finais** (ou clientes) para decidir se o sistema pode entrar em produção. Formas: **UAT** (usuário), **operacional** (backup, recuperação, manutenção), **contratual/regulatória**, **alfa** (usuários em ambiente do desenvolvedor) e **beta** (usuários reais em ambiente real).

*Relação com o modelo em V* (arquivo `03`): requisitos ↔ aceitação; especificação do sistema ↔ sistema; projeto arquitetural ↔ integração; projeto detalhado ↔ unidade.

#### 4.1 Estratégias de integração

**Big bang**; **incremental** (de cima para baixo, de baixo para cima, sanduíche, contínua). Dependências ausentes são substituídas por **dublês de teste**: **stub** (retorna respostas fixas), **mock** (verifica interações), **fake** (implementação simplificada), **spy**, **dummy**.

### 5. Tipos de teste

| Tipo | O que avalia |
|---|---|
| **Funcional** | O que o sistema faz (conforme requisitos funcionais) |
| **Não funcional** | Como o sistema se comporta: **desempenho** (carga, estresse, resistência/*soak*, pico, escalabilidade), **segurança**, **usabilidade**, **acessibilidade**, **compatibilidade**, **confiabilidade**, **recuperação**, **portabilidade** (características de qualidade, arquivo `01`) |
| **Estrutural (caixa-branca)** | Estrutura interna: cobertura do código |
| **Relacionado a mudanças: confirmação** | Verificar se um defeito foi corrigido (**reteste**) |
| **Regressão** | Garantir que mudanças **não causaram defeitos em funções já existentes** |
| ***Smoke*/sanidade** | Verificação rápida das funções críticas após nova versão |
| **Exploratório** | Aprendizado, projeto e execução simultâneos, guiados pela experiência |
| **Baseado em risco** | Prioriza áreas de maior risco |
| **De segurança dinâmico (DAST)** | Analisa o software **em execução** (aplicação totalmente compilada e integrada), sem acesso ao código, buscando vulnerabilidades (Módulo 9, item 9.5); o **SAST** analisa o **código-fonte** sem executá-lo |

### 6. Técnicas de projeto de testes

#### 6.1 Caixa-preta (baseadas em especificação)

Derivam casos de teste da **especificação**, **sem** considerar a estrutura interna.

| Técnica | Ideia | Exemplo (didático) |
|---|---|---|
| **Partição de equivalência** | Dividir as entradas em **classes** que o sistema trata de modo equivalente; testar **um representante** por classe | Campo "idade" aceita 18 a 65: classes **< 18** (inválida), **18–65** (válida), **> 65** (inválida) → testar 10, 40, 80 |
| **Análise do valor limite** | Testar **nas bordas** das partições (onde os defeitos são mais comuns): limites e valores adjacentes | Para 18–65: 17, 18, 19, 64, 65, 66 |
| **Tabela de decisão** | Combinações de **condições** e as **ações** correspondentes | Regras de desconto |
| **Transição de estados** | Percorrer estados e transições de um diagrama | Ciclo de uma ordem de serviço |
| **Casos de uso/cenários** | Testar fluxos principal e alternativos | Arquivo `02` |
| **Grafo causa-efeito, pares combinatórios** | Reduzir combinações | — |

#### 6.2 Caixa-branca (estruturais)

Derivam casos de teste da **estrutura do código**; medem a **cobertura**.

| Critério de cobertura | Significado | Força |
|---|---|---|
| **Comandos (instruções)** | Cada instrução executada ao menos uma vez | Mais fraco |
| **Decisões (ramos)** | Cada decisão assume **verdadeiro** e **falso** | Mais forte que comandos |
| **Condições** | Cada condição atômica assume V e F | — |
| **Condição/decisão, MC/DC, caminhos** | Combinações mais rigorosas (usadas em sistemas críticos) | Mais fortes |

```python
def desconto(valor, cliente_vip):
    if valor > 1000 and cliente_vip:   # decisão com duas condições
        return valor * 0.9
    return valor
```

*Leitura:* um único teste (`valor=2000, vip=True`) cobre 100% dos **comandos** que levam ao desconto, mas não os dois resultados da decisão; para **cobertura de decisões**, testa-se também um caso falso (por exemplo, `valor=500`).

**Complexidade ciclomática (McCabe):** mede o número de **caminhos linearmente independentes** do grafo de fluxo de controle.

- **V(G) = E − N + 2P**, com **E** arestas (arcos), **N** nós e **P** componentes conexos (em geral, P = 1).
- Equivale a **(número de decisões) + 1**.
- *Exemplo:* grafo com 5 nós e 12 arcos → V(G) = 12 − 5 + 2 = **9**. Serve de **limite superior** para o número de testes necessários para cobrir todos os ramos e indica **risco e dificuldade de manutenção** (valores altos pedem refatoração).

#### 6.3 Baseadas em experiência e em mutação

- **Baseadas na experiência:** suposição de erros, teste exploratório, listas de verificação.
- **Teste de mutação:** introduz-se no programa **pequenas alterações sintáticas** (mutantes — por exemplo, trocar `>` por `>=`) e executa-se o conjunto de testes sobre o **original e os mutantes**; se um teste **distingue** o mutante (resultado diferente), o mutante é **"morto"**. A proporção de mutantes mortos mede a **qualidade do conjunto de testes**. Gera versões levemente modificadas de um programa e compara o comportamento com o original.

### 7. Processo de teste

| Atividade | Descrição |
|---|---|
| **Planejamento** | Objetivos, escopo, abordagem, riscos, recursos, cronograma, **critérios de entrada e de saída** (plano de teste) |
| **Monitoramento e controle** | Acompanhar o progresso e ajustar |
| **Análise e projeto** | Derivar condições e **casos de teste** a partir da base de testes (requisitos, projeto) |
| **Implementação** | Criar **suítes**, **dados de teste**, **ambiente** (arquivo `07`) e *scripts* |
| **Execução** | Executar, comparar resultados com o **oráculo** (resultado esperado) e registrar |
| **Conclusão** | Avaliar critérios de saída, relatórios, lições aprendidas |

**Caso de teste:** identificador, **pré-condições**, **entradas/passos**, **resultado esperado**, **pós-condições**. **Matriz de rastreabilidade** liga requisitos a casos de teste (arquivo `02`).

#### 7.1 Gestão de defeitos

Ciclo típico: **novo → atribuído → corrigido → reteste → fechado** (ou **reaberto**). Atributos: **severidade** (impacto técnico) × **prioridade** (urgência de correção); descrição, passos para reproduzir, ambiente, evidências. **Métricas:** densidade de defeitos, taxa de detecção de defeitos, defeitos escapados para produção, cobertura de requisitos e de código.

### 8. Automação, TDD e BDD

- **Pirâmide de testes:** muitos **testes de unidade** (rápidos e baratos), menos de **integração/serviços** e poucos de **interface** (lentos e frágeis).
- **Automação** compensa em testes **repetitivos** (regressão), de **desempenho** e em **integração contínua** (arquivo `07`); exige manutenção e não elimina o teste exploratório.
- **TDD** (*Test-Driven Development*): escrever o teste **antes** do código (vermelho → verde → refatorar).
- **BDD** (*Behavior-Driven Development*): especificar comportamento em linguagem comum, no formato **Dado–Quando–Então** (*Given–When–Then*), que serve como critério de aceitação e teste automatizado.

```text
Cenário: Registrar ordem com equipamento válido
  Dado que o técnico está autenticado
  Quando ele registra uma ordem para o equipamento "P-101"
  Então a ordem é criada com situação "Aberta"
```

### 9. Comparações conceituais

| Conceito A | Conceito B | Diferença principal |
|---|---|---|
| Verificação | Validação | Conforme a especificação (produto correto) × atende ao usuário (produto certo) |
| Teste | V&V | Atividade de execução × conjunto de atividades (inclui revisões e análise estática) |
| Erro | Defeito × falha | Ação humana × imperfeição × manifestação em execução |
| Técnica estática | Técnica dinâmica | Examina artefatos sem executar × executa o software |
| *Walkthrough* | Inspeção | Conduzido pelo autor, informal × formal, com papéis e métricas |
| Teste de unidade | Teste de integração | Componente isolado × interfaces entre componentes |
| Teste de sistema | Teste de aceitação | Equipe de teste, contra requisitos × usuário/cliente, contra necessidades |
| Caixa-preta | Caixa-branca | Especificação × estrutura interna |
| Partição de equivalência | Valor limite | Classes de entradas × bordas das classes |
| Reteste (confirmação) | Regressão | Verifica a correção × verifica efeitos colaterais |
| Severidade | Prioridade | Impacto do defeito × ordem de correção |
| SAST | DAST | Código sem executar × aplicação em execução |
| Stub | Mock | Resposta fixa × verificação de interações |

### 10. Aplicações e cenários

**Cenário (didático): defeito encontrado em produção.** Um erro de cálculo aparece apenas para ordens de mais de 24 horas. Análise: **valor limite** (24 h) não foi testado (**caixa-preta**); a **revisão** do requisito não identificou a regra; não havia teste de **regressão** automatizado. Ações: corrigir, criar casos de teste para **limites**, adicionar o cenário à suíte automatizada e revisar o processo de **inspeção**. *Limitação:* custo de manter a suíte; **paradoxo do pesticida** exige revisá-la.

**Cenário (didático): liberar uma versão.** O **teste de aceitação** por usuários-chave decide a liberação, depois que o **teste de sistema** satisfez os critérios de saída e a **regressão** passou.

### 11. Atenção para a prova

*Inferência técnica e recomendação pedagógica; sem atribuir frequência à banca.*

- Objetivo principal dos **testes estáticos**: **reduzir defeitos** (inclusive na **documentação** a partir da qual o software é desenvolvido); técnicas importantes: **revisões** (walkthrough, inspeção); **regressão**, **valor limite** e **partição de equivalência** são **dinâmicos**; **análise de casos de uso** é técnica de requisitos.
- **Teste de aceitação**: usuários finais testam a última versão antes de colocá-la em produção.
- **DAST**: análise em execução; **SAST**: no código.
- Fórmula de **complexidade ciclomática**: E − N + 2.
- **Teste de mutação** gera versões levemente modificadas do programa e compara.
- *Evidência histórica (amostra de duas provas):* a Prova 6 de 2023 pediu a técnica importante de **testes estáticos** (Q23: *walk-through*), o tipo de teste feito por **representantes dos usuários finais** antes da liberação (Q31: aceitação) e o teste de segurança em **tempo de execução** (Q38: DAST, Módulo 9). A Prova 15 de 2018 trouxe **teste de mutação** (Q24) e **complexidade ciclomática** (Q25). Duas provas não permitem inferir frequência.

### 12. Síntese

- Verificação (produto correto) × validação (produto certo); teste como parte de V&V; erro → defeito → falha.
- Estático (revisão informal, *walkthrough*, revisão técnica, inspeção, análise estática) × dinâmico (níveis: unidade, integração, sistema, aceitação).
- Tipos: funcional, não funcional, estrutural, confirmação, regressão, *smoke*, exploratório.
- Caixa-preta (partição, valor limite, tabela de decisão, estados, casos de uso); caixa-branca (comandos, decisões, condições; V(G) = E − N + 2); mutação.
- Processo: planejar, projetar, implementar, executar, concluir; defeitos (severidade × prioridade).
- Automação: pirâmide, TDD, BDD, integração contínua.

### 13. Pontos para a futura produção de questões (registro)

Conceitos: V&V; técnicas estáticas; níveis e tipos de teste; técnicas de projeto de testes; cobertura; complexidade ciclomática; mutação. Distinções: verificação×validação; *walkthrough*×inspeção; sistema×aceitação; reteste×regressão; caixa-preta×branca. Interpretação: identificar o teste pela descrição; derivar casos por partição e valor limite; calcular V(G).

### 14. Referências

- Princípios de teste e terminologia (ISTQB, IEEE, ISO/IEC/IEEE 29119): **princípios conferidos apenas em fontes secundárias** em 2026-10-31; textos oficiais **não consultados**.
- McCabe, T. J. "A Complexity Measure", *IEEE Transactions on Software Engineering*, SE-2, n. 4, p. 308–320, 1976 — **verificado** (fontes secundárias). Fagan, M. E. "Design and code inspections to reduce errors in program development", *IBM Systems Journal*, v. 15, n. 3, p. 182–211, 1976 — **verificado**. Myers, Beizer, Sommerville, Pressman — citados de memória, **não verificados**.
- ISTQB: o portal oficial (istqb.org) confirma o programa *Certified Tester Foundation Level v4.0* (sílabo v4.0.1), mas **a página pública não lista os sete princípios**; a lista deste arquivo permanece apoiada em fontes secundárias. Normas ISO/IEC/IEEE 29119 **não verificadas**.
- Edital Transpetro nº 04/2026.4, Anexo IV, item 5.4.


---

## Ambientes de Desenvolvimento de Software (e Ambientes de Teste)

**Módulo:** M05 — Engenharia de software
**Texto oficial (Anexo IV):** 5.5 "Ambientes de desenvolvimento de software."
**Nota de interpretação:** o edital não detalha o item. Adotou-se a leitura de **ambiente de desenvolvimento** em sentido amplo: **ferramentas** do desenvolvedor (editor/IDE, compilação, depuração, controle de versão), **ambientes de execução** (desenvolvimento, teste, homologação, produção) e **automação** (integração e entrega contínuas, DevOps). A abrangência deve ser confirmada pelo usuário.
**Status:** `VALIDADO` (aprovado pelo usuário em 2026-10-31, com ressalvas: interpretação dos itens 5.2 e 5.5 a confirmar; normas ISO, princípios ISTQB e vários referenciais de memória não verificados em fonte primária — ver `docs/qualidade/relatorio-producao-modulo-05.md`).

**Objetivos de aprendizagem.** (1) Descrever os componentes de um ambiente de desenvolvimento; (2) explicar controle de versão, *build* e integração contínua; (3) distinguir entrega contínua e implantação contínua; (4) descrever os ambientes (desenvolvimento, teste, homologação, produção) e suas práticas; (5) relacionar DevOps, contêineres e infraestrutura como código.

---

### 1. Introdução

O **ambiente de desenvolvimento de software** é o conjunto de **ferramentas, serviços, configurações e infraestrutura** que apoia a equipe em **escrever, construir, testar, integrar, entregar e operar** o software. Um bom ambiente aumenta a **produtividade**, a **qualidade** e a **previsibilidade** das entregas; um ambiente mal configurado causa defeitos do tipo "funciona na minha máquina". O termo abrange tanto o **ambiente local do desenvolvedor** quanto os **ambientes compartilhados** pelos quais o software é promovido até a produção.

*Relações:* a escolha das ferramentas depende do ciclo de vida (arquivo `03`); os testes automatizados rodam no ambiente (arquivo `06`); a entrega e a operação relacionam-se com ITSM (Módulo 4, arquivo `04`); a segurança do pipeline relaciona-se com o desenvolvimento seguro (Módulo 9, item 9.5).

### 2. O ambiente local do desenvolvedor

| Componente | Função | Exemplos de categoria |
|---|---|---|
| **Editor/IDE** (*Integrated Development Environment*) | Edição com **realce de sintaxe**, **autocompletar**, navegação, **refatoração**, integração com compilador, depurador, testes e controle de versão | Editores de código e IDEs |
| **Compilador/interpretador/ambiente de execução** | Traduz ou executa o código | Compiladores, interpretadores, máquinas virtuais |
| **Depurador (*debugger*)** | Inspeciona a execução: **pontos de parada**, passo a passo, observação de variáveis, pilha de chamadas | Depuradores integrados |
| **Gerenciador de dependências** | Declara e obtém bibliotecas de terceiros em versões controladas | Gerenciadores de pacotes |
| **Ferramenta de *build*** | **Automatiza** a compilação, o empacotamento e a execução de testes | Ferramentas de automação de *build* |
| **Ferramentas de qualidade** | **Linters**, formatadores, análise estática (SAST, Módulo 9), cobertura de testes | Analisadores de código |
| **Testes** | *Frameworks* de testes de unidade/integração | Frameworks de teste (arquivo `06`) |
| **Controle de versão** | Histórico, colaboração, ramificações | Sistemas de controle de versão |
| **Contêineres/máquinas virtuais** | Reproduzir o ambiente de execução | Contêineres e virtualização |
| **Terminal e *scripts*** | Automação local | Linha de comando |

**Depuração:** localizar a causa de uma **falha** (reproduzir, isolar, corrigir, testar); técnicas: **pontos de parada**, **registros (*logs*)**, **traços de pilha (*stack traces*)**, **perfilamento (*profiling*)** para desempenho.

### 3. Controle de versão e gerência de configuração

#### 3.1 Controle de versão (VCS)

Sistema que **registra o histórico** de alterações em arquivos, permite **voltar a versões anteriores** e **colaborar** com segurança.

| Conceito | Significado |
|---|---|
| **Repositório** | Armazém do código e de seu histórico |
| ***Commit*** | Conjunto de alterações registrado com mensagem |
| ***Branch* (ramificação)** | Linha independente de desenvolvimento |
| ***Merge* (mesclagem)** | Integração de alterações de uma ramificação em outra; pode gerar **conflitos** |
| ***Tag*** | Marca uma versão (por exemplo, uma *release*) |
| ***Pull/merge request*** | Pedido de integração com **revisão de código** |
| ***Clone*, *push*, *pull*** | Copiar o repositório; enviar e obter alterações |

**Centralizado × distribuído:** no modelo **centralizado**, há um servidor único de referência; no **distribuído** (como o **Git**), cada desenvolvedor tem **cópia completa** do histórico, o que permite trabalho offline e ramificações baratas.

**Estratégias de ramificação:** ***trunk-based development*** (ramos curtos, integração frequente no tronco, favorece CI), ***GitFlow*** (ramos de *feature*, *develop*, *release*, *hotfix*) e fluxos com *pull requests*. **Versionamento semântico** (MAJOR.MINOR.PATCH): MAJOR muda quando há incompatibilidade; MINOR, quando se acrescentam funções compatíveis; PATCH, para correções.

#### 3.2 Gerência de configuração de software (SCM)

Controla **itens de configuração** (código, documentos, scripts, parâmetros), **linhas de base** e **mudanças**, garantindo **integridade e rastreabilidade** (relaciona-se com o CMDB, Módulo 4, arquivo `04`, e com o controle de mudanças, Módulo 3). Inclui **gerência de versões**, de *builds* e de *releases*.

### 4. Integração e entrega contínuas (CI/CD)

```text
Código ─► Commit ─► [ Build ─► Testes unitários ─► Análise estática ─► Empacotamento ]
                         ─► Implantação em homologação ─► Testes de aceitação/integração
                         ─► (aprovação) ─► Implantação em produção ─► Monitoramento
```

| Prática | Definição |
|---|---|
| **Integração contínua (CI)** | Integrar o código **com frequência** (várias vezes ao dia) em um repositório compartilhado, com **build e testes automáticos** a cada alteração, para detectar problemas cedo |
| **Entrega contínua (*Continuous Delivery*)** | Manter o software **sempre em condição de ser liberado**; a implantação em produção é **decisão (manual) de negócio** |
| **Implantação contínua (*Continuous Deployment*)** | **Cada alteração aprovada nos testes é implantada automaticamente em produção**, sem aprovação manual |
| **Pipeline** | Sequência automatizada de etapas (*build*, testes, análise, empacotamento, implantação) |
| **Artefato versionado** | Pacote construído **uma única vez** e **promovido** entre ambientes (*build once, deploy many*) |

**Estratégias de implantação:** **azul/verde** (dois ambientes idênticos; troca de tráfego), **canário** (liberação gradual a uma parcela de usuários), **gradual (*rolling*)**; **sinalizadores de funcionalidade (*feature flags*)** separam **implantação** de **liberação**. **Reversão (*rollback*)** deve ser possível.

### 5. Ambientes de execução

| Ambiente | Finalidade | Quem usa |
|---|---|---|
| **Desenvolvimento (local/compartilhado)** | Codificar e testar unidades | Desenvolvedores |
| **Integração (CI)** | Construir e executar testes automatizados a cada alteração | Pipeline |
| **Teste/QA** | **Testes de sistema** e não funcionais | Equipe de testes |
| **Homologação (*staging*/UAT)** | Validação por usuários; **o mais parecido com produção** | Usuários e negócio |
| **Produção** | Operação real, com dados reais | Usuários finais |

*Boas práticas:* **paridade** entre ambientes (mesma versão de sistema operacional, bibliotecas e configuração), **configuração separada do código** (variáveis de ambiente), **segredos** (senhas, chaves) em **cofre de segredos**, acesso **restrito** à produção, **mudanças apenas por pipeline**, **isolamento** entre ambientes.

#### 5.1 Dados nos ambientes de teste

Dados de produção contêm **dados pessoais** e **confidenciais**; usá-los fora da produção exige **cuidado legal** (LGPD, Módulo 4, arquivo `05`) e de segurança. Alternativas: **dados sintéticos**, **mascaramento (*masking*)**, **anonimização** e **subconjunto** de dados, com controle de acesso. A **gestão de dados de teste** é parte do planejamento de testes (arquivo `06`).

#### 5.2 Ambientes de teste (arquivo `06`, item 5.4)

Requisitos: **representatividade** da produção, **isolamento**, **controle de configuração**, **dados controlados**, **disponibilidade**. Recursos comuns: **virtualização de serviços** e **dublês** (*stubs*, *mocks*) para dependências indisponíveis, ambientes **sob demanda e descartáveis** (provisionados automaticamente), ferramentas de **automação**, de **desempenho** e de **gestão de defeitos**.

### 6. Contêineres, virtualização e infraestrutura como código

| Tecnologia | Descrição | Benefício |
|---|---|---|
| **Máquina virtual (VM)** | Computador virtual completo (com sistema operacional) sobre um *hypervisor* | Isolamento forte |
| **Contêiner** | Empacota a aplicação e suas dependências, **compartilhando o núcleo do sistema operacional do hospedeiro**; mais leve que VM | Reprodutibilidade ("funciona igual em qualquer lugar"), implantação rápida |
| **Orquestração de contêineres** | Automatiza implantação, escala e recuperação de muitos contêineres | Operação em escala |
| **Infraestrutura como código (IaC)** | Descrever e provisionar infraestrutura (servidores, redes, permissões) por **arquivos versionados e executáveis** | Ambientes reproduzíveis, auditáveis e versionados |
| **Nuvem** | Ambientes sob demanda (IaaS, PaaS, SaaS; Módulo 4, arquivo `01`) | Elasticidade; custo por uso |

### 7. DevOps e DevSecOps

**DevOps** é uma **cultura e conjunto de práticas** que integram **desenvolvimento** e **operações** para entregar valor de forma **rápida, frequente e confiável**, por meio de **colaboração**, **automação** (CI/CD, IaC), **medição** e **compartilhamento** de responsabilidade. Resume-se em **CALMS**: **C**ultura, **A**utomação, ***L**ean*, **M**edição e **S**haring (compartilhamento). **DevSecOps** incorpora **segurança** ao longo do pipeline (análise estática **SAST**, análise de composição de dependências, **DAST**, varredura de contêineres e de IaC, gestão de segredos; Módulo 9, item 9.5), em lugar de tratá-la só no final.

**Métricas de entrega** (usadas por equipes de alto desempenho, por exemplo, nos estudos "DORA"): frequência de implantação, **tempo de espera** para mudanças, taxa de falhas de mudança e **tempo de recuperação**. *(Citação de memória; não verificada online.)*

### 8. Qualidade e produtividade no ambiente

- **Revisão de código** (*code review*) por pares, como técnica estática (arquivo `06`).
- **Padronização**: guias de estilo, *linters*, formatação automática.
- **Observabilidade** (logs, métricas e rastros distribuídos) para depurar e operar.
- **Documentação como código**, **gestão de tarefas e *issues***, **gestão de conhecimento**.
- **Ambientes padronizados** (por exemplo, contêineres de desenvolvimento) para reduzir o tempo de preparação de novos membros.
- **Plataformas de baixo código (*low-code*)** e ambientes de **desenvolvimento em nuvem** como alternativas, com governança (Módulo 4, arquivo `02`).

### 9. Comparações conceituais

| Conceito A | Conceito B | Diferença principal |
|---|---|---|
| Entrega contínua | Implantação contínua | Sempre pronto, liberação por decisão manual × toda alteração aprovada vai à produção automaticamente |
| Integração contínua | Entrega contínua | Integrar e testar com frequência × manter o produto liberável |
| VCS centralizado | VCS distribuído | Servidor único de referência × cópia completa do histórico em cada máquina |
| *Branch* | *Tag* | Linha de desenvolvimento × marca de versão |
| *Build* | *Deploy* | Construir o artefato × instalá-lo em um ambiente |
| Implantação | Liberação | Colocar a versão no ambiente × disponibilizar a funcionalidade aos usuários |
| VM | Contêiner | Sistema operacional completo × compartilha o núcleo do hospedeiro |
| Homologação | Produção | Validação com usuários em ambiente semelhante × operação real |
| DevOps | DevSecOps | Integração de desenvolvimento e operações × inclusão da segurança em todo o pipeline |
| IDE | Editor de texto | Ambiente integrado (compilação, depuração, refatoração) × edição simples |

### 10. Aplicações e cenários

**Cenário (didático): "funciona na minha máquina".** Uma função falha em homologação porque a versão da biblioteca difere da do desenvolvedor. Solução: **dependências versionadas**, **contêiner** padronizado, **pipeline** que constrói o artefato uma vez e o promove entre ambientes, e **IaC** para criar homologação igual à produção. *Limitação:* manter a paridade tem custo.

**Cenário (didático): liberação com risco.** A equipe usa **implantação canário**: libera a nova versão a 5% dos usuários, monitora erros e, se estáveis, amplia; um **sinalizador de funcionalidade** permite desligar a novidade sem nova implantação.

### 11. Atenção para a prova

*Inferência técnica e recomendação pedagógica; sem atribuir frequência à banca.*

- **CI** = integrar com frequência com *build* e testes automáticos; **entrega contínua** ≠ **implantação contínua**.
- **Controle de versão**: *commit*, *branch*, *merge*; distribuído (Git) × centralizado.
- Ambientes: **desenvolvimento → teste → homologação → produção**; paridade e isolamento.
- **Dados pessoais em ambientes de teste**: mascarar/anonimizar (LGPD).
- **Contêiner** compartilha o núcleo do SO; **VM** não.
- Evitar absolutos ("o ambiente de produção pode ser usado para testes").
- *Evidência histórica:* o item 5.5 **não** teve questão específica nas duas provas catalogadas (2018 e 2023); duas provas não permitem inferir frequência, e o edital de 2026 prevê o item. A questão sobre DAST (2023, Q38) pertence ao Módulo 9.

### 12. Síntese

- Ambiente de desenvolvimento: IDE, compilação/interpretação, depuração, dependências, *build*, qualidade, testes, controle de versão, contêineres.
- Controle de versão (*commit*, *branch*, *merge*, *tag*); SCM e linhas de base.
- CI/CD: integração contínua; entrega contínua (liberável) × implantação contínua (automática); pipeline; *build once, deploy many*.
- Ambientes: desenvolvimento, integração, teste, homologação, produção; paridade; segredos; dados mascarados.
- Contêineres, orquestração, IaC, nuvem; DevOps (CALMS) e DevSecOps.

### 13. Pontos para a futura produção de questões (registro)

Conceitos: IDE; VCS; CI/CD; ambientes; contêineres; IaC; DevOps. Distinções: entrega×implantação contínua; CI×CD; VM×contêiner; homologação×produção. Interpretação: escolher a prática ou o ambiente para um cenário; identificar o risco de uma configuração.

### 14. Referências

- Conceitos de controle de versão, CI/CD, DevOps (CALMS), contêineres, IaC, estratégias de implantação e versionamento semântico: conhecimento geral do autor do material (documentação das ferramentas, HUMBLE e FARLEY, *Continuous Delivery*; KIM et al., *The DevOps Handbook*; semver.org) — **não verificado online** (edições, anos e páginas pendentes). **Versionamento semântico: verificado** em https://semver.org em 2026-10-31 (MAJOR para mudanças incompatíveis na API pública; MINOR para funcionalidades compatíveis; PATCH para correções compatíveis; MINOR reinicia o PATCH e MAJOR reinicia MINOR e PATCH).
- Edital Transpetro nº 04/2026.4, Anexo IV, item 5.5.

