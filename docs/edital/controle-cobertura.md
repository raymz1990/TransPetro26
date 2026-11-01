# Controle de Cobertura do Edital
## Transpetro 2026.4 — Ênfase 5: Análise de Sistemas: Processos de Negócios

**Arquivo:** `docs/edital/controle-cobertura.md`  
**Documento de referência:** `docs/edital/matriz-conteudo.md`  
**Estrutura da prova:** `docs/edital/estrutura-prova.md`

---

## 0. Resumo da auditoria (2026-10-30) e da produção (2026-10-31)

| Indicador | Valor |
|---|---:|
| Itens principais do Anexo IV (Ênfase 5) | 9 |
| Subitens numerados | 93 |
| Itens-folha (subitens + item 3) | 94 |
| Linhas da matriz | 102 |
| Escopo A / B / C | 102 / 0 / 0 |
| Itens sem classificação de módulo | 0 |
| Itens com associação ressalvada (coluna Amb. da matriz) | 11 |
| Itens com relação secundária entre módulos | 19 |
| Itens sem arquivo-esqueleto definido | 0 (9 atribuídos por reorganização, D-06) |
| Arquivos de conteúdo existentes / com conteúdo | 71 / 71 (10 do M01 + 7 do M02 + 4 do M03, sendo 1 complementar C, + 5 do M04 + 7 do M05, sendo 1 complementar B + 9 do M06 + 8 do M07 + 7 do M08 + 14 do M09, sendo 1 complementar B) |
| Material complementar fora da contagem oficial (B/C) | 4 (3 B + 1 C) — ver matriz, seção 6 |
| Conhecimentos Gerais (Português 12 + Inglês 2) | 14 itens em matriz própria: `matriz-conhecimentos-gerais.md` |
| Cobertura de mapeamento | 100% (102/102) — pendente de aprovação |
| Cobertura de produção (teoria produzida) | **M01: 23/23; M02: 7/7; M03: 1/1; M04: 6/6; M05: 5/5; M06: 11/11; M07: 11/11; M08: 9/9; M09: 21/21; global: 94 de 94 (100%)** |
| Cobertura validada (teoria; validação do usuário) | **M01: 23/23; M02: 7/7; M03: 1/1; M04: 6/6; M05: 5/5; M06: 11/11; M07: 11/11; M08: 9/9; M09: 21/21; global: 94 de 94 (100%)** |

Situação das etapas: **teoria do M01 a M09 `VALIDADO`**; questões (lotes pilotos: M01, 10 autorais validadas pelo usuário, cobertura ainda insuficiente — `EM_PRODUCAO`; M02, 10 autorais validadas pelo usuário, idem; M03, 10 autorais validadas pelo usuário, idem; M04, 10 autorais validadas pelo usuário, idem; M05, 10 autorais validadas pelo usuário, idem; M06, 10 autorais validadas pelo usuário, idem; M07, 10 autorais validadas pelo usuário, idem; M08, 10 autorais validadas pelo usuário, idem; M09, 10 autorais validadas pelo usuário, idem), flashcards, revisões, NotebookLM, site e validação — **NAO_INICIADO**. "Mapeado" não significa "produzido".

---

## 1. Objetivo

Este documento controla a cobertura do conteúdo programático previsto no Anexo IV do edital da Transpetro 2026.4, Ênfase 5.

Sua finalidade é acompanhar a evolução de cada item do edital nas diferentes frentes do projeto:

- Mapeamento do edital;
- Produção teórica;
- Referências bibliográficas;
- Questões;
- Resolução comentada;
- Flashcards;
- Revisões;
- Simulados;
- Materiais do NotebookLM;
- Implementação na plataforma de estudos.

O controle deve permitir identificar:

1. Quais assuntos já foram mapeados;
2. Quais assuntos ainda não possuem material;
3. Quais conteúdos estão incompletos;
4. Quais materiais aguardam revisão;
5. Quais itens já foram validados;
6. Quais assuntos possuem poucas questões;
7. Quais módulos apresentam lacunas de cobertura.

**Princípio:** a cobertura deve ser medida pela correspondência entre o conteúdo produzido e os itens oficiais do edital, e não pela quantidade de arquivos criados.

---

## 2. Relação com os demais documentos

Este arquivo não substitui a matriz de conteúdo.

| Documento | Responsabilidade |
|---|---|
| `matriz-conteudo.md` | Define os itens oficiais e sua organização |
| `estrutura-prova.md` | Registra a estrutura e as regras da avaliação |
| `controle-cobertura.md` | Acompanha a produção e a validação dos materiais |

A matriz de conteúdo é a fonte de referência para os identificadores dos itens oficiais.

Todo registro neste documento deverá utilizar os IDs existentes na matriz.

Não criar novos itens oficiais diretamente no controle de cobertura.

---

## 3. Módulos acompanhados

O acompanhamento será organizado nos nove módulos pedagógicos do projeto.

| Código | Módulo |
|---|---|
| M01 | Arquitetura de Dados |
| M02 | Gerenciamento de Projetos e Produtos |
| M03 | Processos e Gerenciamento |
| M04 | Gestão e Governança em TI |
| M05 | Engenharia de Software |
| M06 | Experiência do Usuário |
| M07 | Análise de Dados e Informações |
| M08 | Lógica Matemática |
| M09 | Segurança da Informação |

A classificação dos itens deve respeitar a matriz de conteúdo.

Itens ainda não classificados deverão aparecer separadamente, sem serem distribuídos artificialmente entre os módulos.

---

## 4. Status de desenvolvimento

Utilizar os seguintes estados para acompanhar a evolução dos materiais.

| Status | Significado |
|---|---|
| `NAO_INICIADO` | Nenhum trabalho iniciado |
| `EM_MAPEAMENTO` | Item identificado, aguardando organização |
| `EM_PRODUCAO` | Material em desenvolvimento |
| `EM_REVISAO` | Material produzido, aguardando validação |
| `VALIDADO` | Material revisado e aprovado |
| `PENDENTE` | Existe impedimento ou informação faltante |
| `NAO_APLICAVEL` | Etapa não aplicável ao item, com justificativa |

### 4.1. Regras de transição

Fluxo normal:

`NAO_INICIADO → EM_MAPEAMENTO → EM_PRODUCAO → EM_REVISAO → VALIDADO`

O status `PENDENTE` poderá ser utilizado em qualquer etapa quando existir impedimento.

O status `NAO_APLICAVEL` exige justificativa documentada.

Não avançar um item para `VALIDADO` sem cumprir os critérios específicos da etapa.

---

## 5. Matriz de acompanhamento por item

Um registro por ID da matriz (itens principais incluídos).

| ID | Item | Módulo | Teoria | Questões | Flashcards | Revisão | NotebookLM | Site | Status geral |
|---|---|---|---|---|---|---|---|---|---|
| E5-001 | 1 | M01 | VALIDADO | NI | NI | NI | NI | NI | EM_PRODUCAO |
| E5-002 | 1.1 | M01 | VALIDADO | EM_PRODUCAO | NI | NI | NI | NI | EM_PRODUCAO |
| E5-003 | 1.2 | M01 | VALIDADO | NI | NI | NI | NI | NI | EM_PRODUCAO |
| E5-004 | 1.3 | M01 | VALIDADO | NI | NI | NI | NI | NI | EM_PRODUCAO |
| E5-005 | 1.4 | M01 | VALIDADO | EM_PRODUCAO | NI | NI | NI | NI | EM_PRODUCAO |
| E5-006 | 1.5 | M01 | VALIDADO | EM_PRODUCAO | NI | NI | NI | NI | EM_PRODUCAO |
| E5-007 | 1.6 | M01 | VALIDADO | NI | NI | NI | NI | NI | EM_PRODUCAO |
| E5-008 | 1.7 | M01 | VALIDADO | EM_PRODUCAO | NI | NI | NI | NI | EM_PRODUCAO |
| E5-009 | 1.8 | M01 | VALIDADO | NI | NI | NI | NI | NI | EM_PRODUCAO |
| E5-010 | 1.9 | M01 | VALIDADO | NI | NI | NI | NI | NI | EM_PRODUCAO |
| E5-011 | 1.10 | M01 | VALIDADO | EM_PRODUCAO | NI | NI | NI | NI | EM_PRODUCAO |
| E5-012 | 1.11 | M01 | VALIDADO | NI | NI | NI | NI | NI | EM_PRODUCAO |
| E5-013 | 1.12 | M01 | VALIDADO | NI | NI | NI | NI | NI | EM_PRODUCAO |
| E5-014 | 1.13 | M01 | VALIDADO | NI | NI | NI | NI | NI | EM_PRODUCAO |
| E5-015 | 1.14 | M01 | VALIDADO | EM_PRODUCAO | NI | NI | NI | NI | EM_PRODUCAO |
| E5-016 | 1.15 | M01 | VALIDADO | NI | NI | NI | NI | NI | EM_PRODUCAO |
| E5-017 | 1.16 | M01 | VALIDADO | NI | NI | NI | NI | NI | EM_PRODUCAO |
| E5-018 | 1.17 | M01 | VALIDADO | EM_PRODUCAO | NI | NI | NI | NI | EM_PRODUCAO |
| E5-019 | 1.18 | M01 | VALIDADO | EM_PRODUCAO | NI | NI | NI | NI | EM_PRODUCAO |
| E5-020 | 1.19 | M01 | VALIDADO | EM_PRODUCAO | NI | NI | NI | NI | EM_PRODUCAO |
| E5-021 | 1.20 | M01 | VALIDADO | NI | NI | NI | NI | NI | EM_PRODUCAO |
| E5-022 | 1.21 | M01 | VALIDADO | EM_PRODUCAO | NI | NI | NI | NI | EM_PRODUCAO |
| E5-023 | 1.22 | M01 | VALIDADO | NI | NI | NI | NI | NI | EM_PRODUCAO |
| E5-024 | 1.23 | M01 | VALIDADO | NI | NI | NI | NI | NI | EM_PRODUCAO |
| E5-025 | 2 | M02 | VALIDADO | NI | NI | NI | NI | NI | EM_PRODUCAO |
| E5-026 | 2.1 | M02 | VALIDADO | EM_PRODUCAO | NI | NI | NI | NI | EM_PRODUCAO |
| E5-027 | 2.2 | M02 | VALIDADO | EM_PRODUCAO | NI | NI | NI | NI | EM_PRODUCAO |
| E5-028 | 2.3 | M02 | VALIDADO | EM_PRODUCAO | NI | NI | NI | NI | EM_PRODUCAO |
| E5-029 | 2.4 | M02 | VALIDADO | EM_PRODUCAO | NI | NI | NI | NI | EM_PRODUCAO |
| E5-030 | 2.5 | M02 | VALIDADO | EM_PRODUCAO | NI | NI | NI | NI | EM_PRODUCAO |
| E5-031 | 2.6 | M02 | VALIDADO | EM_PRODUCAO | NI | NI | NI | NI | EM_PRODUCAO |
| E5-032 | 2.7 | M02 | VALIDADO | NI | NI | NI | NI | NI | EM_PRODUCAO |
| E5-033 | 3 | M03 | VALIDADO | EM_PRODUCAO | NI | NI | NI | NI | EM_PRODUCAO |
| E5-034 | 4 | M04 | VALIDADO | NI | NI | NI | NI | NI | EM_PRODUCAO |
| E5-035 | 4.1 | M04 | VALIDADO | EM_PRODUCAO | NI | NI | NI | NI | EM_PRODUCAO |
| E5-036 | 4.2 | M04 | VALIDADO | EM_PRODUCAO | NI | NI | NI | NI | EM_PRODUCAO |
| E5-037 | 4.3 | M04 | VALIDADO | NI | NI | NI | NI | NI | EM_PRODUCAO |
| E5-038 | 4.4 | M04 | VALIDADO | EM_PRODUCAO | NI | NI | NI | NI | EM_PRODUCAO |
| E5-039 | 4.5 | M04 | VALIDADO | EM_PRODUCAO | NI | NI | NI | NI | EM_PRODUCAO |
| E5-040 | 4.6 | M04 | VALIDADO | EM_PRODUCAO | NI | NI | NI | NI | EM_PRODUCAO |
| E5-041 | 5 | M05 | VALIDADO | NI | NI | NI | NI | NI | EM_PRODUCAO |
| E5-042 | 5.1 | M05 | VALIDADO | EM_PRODUCAO | NI | NI | NI | NI | EM_PRODUCAO |
| E5-043 | 5.2 | M05 | VALIDADO | EM_PRODUCAO | NI | NI | NI | NI | EM_PRODUCAO |
| E5-044 | 5.3 | M05 | VALIDADO | EM_PRODUCAO | NI | NI | NI | NI | EM_PRODUCAO |
| E5-045 | 5.4 | M05 | VALIDADO | EM_PRODUCAO | NI | NI | NI | NI | EM_PRODUCAO |
| E5-046 | 5.5 | M05 | VALIDADO | EM_PRODUCAO | NI | NI | NI | NI | EM_PRODUCAO |
| E5-047 | 6 | M06 | VALIDADO | NI | NI | NI | NI | NI | EM_PRODUCAO |
| E5-048 | 6.1 | M06 | VALIDADO | EM_PRODUCAO | NI | NI | NI | NI | EM_PRODUCAO |
| E5-049 | 6.2 | M06 | VALIDADO | EM_PRODUCAO | NI | NI | NI | NI | EM_PRODUCAO |
| E5-050 | 6.3 | M06 | VALIDADO | EM_PRODUCAO | NI | NI | NI | NI | EM_PRODUCAO |
| E5-051 | 6.4 | M06 | VALIDADO | EM_PRODUCAO | NI | NI | NI | NI | EM_PRODUCAO |
| E5-052 | 6.5 | M06 | VALIDADO | EM_PRODUCAO | NI | NI | NI | NI | EM_PRODUCAO |
| E5-053 | 6.6 | M06 | VALIDADO | EM_PRODUCAO | NI | NI | NI | NI | EM_PRODUCAO |
| E5-054 | 6.7 | M06 | VALIDADO | EM_PRODUCAO | NI | NI | NI | NI | EM_PRODUCAO |
| E5-055 | 6.8 | M06 | VALIDADO | EM_PRODUCAO | NI | NI | NI | NI | EM_PRODUCAO |
| E5-056 | 6.9 | M06 | VALIDADO | NI | NI | NI | NI | NI | EM_PRODUCAO |
| E5-057 | 6.10 | M06 | VALIDADO | EM_PRODUCAO | NI | NI | NI | NI | EM_PRODUCAO |
| E5-058 | 6.11 | M06 | VALIDADO | EM_PRODUCAO | NI | NI | NI | NI | EM_PRODUCAO |
| E5-059 | 7 | M07 | VALIDADO | NI | NI | NI | NI | NI | EM_PRODUCAO |
| E5-060 | 7.1 | M07 | VALIDADO | EM_PRODUCAO | NI | NI | NI | NI | EM_PRODUCAO |
| E5-061 | 7.2 | M07 | VALIDADO | EM_PRODUCAO | NI | NI | NI | NI | EM_PRODUCAO |
| E5-062 | 7.3 | M07 | VALIDADO | EM_PRODUCAO | NI | NI | NI | NI | EM_PRODUCAO |
| E5-063 | 7.4 | M07 | VALIDADO | EM_PRODUCAO | NI | NI | NI | NI | EM_PRODUCAO |
| E5-064 | 7.5 | M07 | VALIDADO | EM_PRODUCAO | NI | NI | NI | NI | EM_PRODUCAO |
| E5-065 | 7.6 | M07 | VALIDADO | EM_PRODUCAO | NI | NI | NI | NI | EM_PRODUCAO |
| E5-066 | 7.7 | M07 | VALIDADO | EM_PRODUCAO | NI | NI | NI | NI | EM_PRODUCAO |
| E5-067 | 7.8 | M07 | VALIDADO | EM_PRODUCAO | NI | NI | NI | NI | EM_PRODUCAO |
| E5-068 | 7.9 | M07 | VALIDADO | EM_PRODUCAO | NI | NI | NI | NI | EM_PRODUCAO |
| E5-069 | 7.10 | M07 | VALIDADO | EM_PRODUCAO | NI | NI | NI | NI | EM_PRODUCAO |
| E5-070 | 7.11 | M07 | VALIDADO | NI | NI | NI | NI | NI | EM_PRODUCAO |
| E5-071 | 8 | M08 | VALIDADO | NI | NI | NI | NI | NI | EM_PRODUCAO |
| E5-072 | 8.1 | M08 | VALIDADO | EM_PRODUCAO | NI | NI | NI | NI | EM_PRODUCAO |
| E5-073 | 8.2 | M08 | VALIDADO | EM_PRODUCAO | NI | NI | NI | NI | EM_PRODUCAO |
| E5-074 | 8.3 | M08 | VALIDADO | EM_PRODUCAO | NI | NI | NI | NI | EM_PRODUCAO |
| E5-075 | 8.4 | M08 | VALIDADO | EM_PRODUCAO | NI | NI | NI | NI | EM_PRODUCAO |
| E5-076 | 8.5 | M08 | VALIDADO | EM_PRODUCAO | NI | NI | NI | NI | EM_PRODUCAO |
| E5-077 | 8.6 | M08 | VALIDADO | EM_PRODUCAO | NI | NI | NI | NI | EM_PRODUCAO |
| E5-078 | 8.7 | M08 | VALIDADO | EM_PRODUCAO | NI | NI | NI | NI | EM_PRODUCAO |
| E5-079 | 8.8 | M08 | VALIDADO | EM_PRODUCAO | NI | NI | NI | NI | EM_PRODUCAO |
| E5-080 | 8.9 | M08 | VALIDADO | NI | NI | NI | NI | NI | EM_PRODUCAO |
| E5-081 | 9 | M09 | VALIDADO | NI | NI | NI | NI | NI | EM_PRODUCAO |
| E5-082 | 9.1 | M09 | VALIDADO | NI | NI | NI | NI | NI | EM_PRODUCAO |
| E5-083 | 9.2 | M09 | VALIDADO | NI | NI | NI | NI | NI | EM_PRODUCAO |
| E5-084 | 9.3 | M09 | VALIDADO | NI | NI | NI | NI | NI | EM_PRODUCAO |
| E5-085 | 9.4 | M09 | VALIDADO | NI | NI | NI | NI | NI | EM_PRODUCAO |
| E5-086 | 9.5 | M09 | VALIDADO | NI | NI | NI | NI | NI | EM_PRODUCAO |
| E5-087 | 9.6 | M09 | VALIDADO | NI | NI | NI | NI | NI | EM_PRODUCAO |
| E5-088 | 9.7 | M09 | VALIDADO | NI | NI | NI | NI | NI | EM_PRODUCAO |
| E5-089 | 9.8 | M09 | VALIDADO | NI | NI | NI | NI | NI | EM_PRODUCAO |
| E5-090 | 9.9 | M09 | VALIDADO | NI | NI | NI | NI | NI | EM_PRODUCAO |
| E5-091 | 9.10 | M09 | VALIDADO | NI | NI | NI | NI | NI | EM_PRODUCAO |
| E5-092 | 9.11 | M09 | VALIDADO | NI | NI | NI | NI | NI | EM_PRODUCAO |
| E5-093 | 9.12 | M09 | VALIDADO | NI | NI | NI | NI | NI | EM_PRODUCAO |
| E5-094 | 9.13 | M09 | VALIDADO | NI | NI | NI | NI | NI | EM_PRODUCAO |
| E5-095 | 9.14 | M09 | VALIDADO | NI | NI | NI | NI | NI | EM_PRODUCAO |
| E5-096 | 9.15 | M09 | VALIDADO | NI | NI | NI | NI | NI | EM_PRODUCAO |
| E5-097 | 9.16 | M09 | VALIDADO | NI | NI | NI | NI | NI | EM_PRODUCAO |
| E5-098 | 9.17 | M09 | VALIDADO | NI | NI | NI | NI | NI | EM_PRODUCAO |
| E5-099 | 9.18 | M09 | VALIDADO | NI | NI | NI | NI | NI | EM_PRODUCAO |
| E5-100 | 9.19 | M09 | VALIDADO | NI | NI | NI | NI | NI | EM_PRODUCAO |
| E5-101 | 9.20 | M09 | VALIDADO | NI | NI | NI | NI | NI | EM_PRODUCAO |
| E5-102 | 9.21 | M09 | VALIDADO | NI | NI | NI | NI | NI | EM_PRODUCAO |

NI = Não iniciado.

### 5.1. Definição das etapas

**Teoria**

Verifica se o item possui material didático completo, fundamentado e revisado.

**Questões**

Verifica a existência de questões relacionadas ao item, com origem identificada, gabarito e comentário validados.

**Flashcards**

Verifica se existem cartões de revisão úteis para os principais conceitos do assunto.

**Revisão**

Verifica se o conteúdo possui mecanismos de revisão, como resumos, questões de revisão ou atividades programadas.

**NotebookLM**

Verifica se o conteúdo foi preparado e exportado em formato adequado para utilização no NotebookLM.

**Site**

Verifica se o conteúdo está integrado corretamente à plataforma de estudos.

### 5.2. Regra para o status geral

O status geral deverá refletir a etapa mais avançada efetivamente concluída, considerando todas as etapas aplicáveis.

Um item não poderá ser considerado completamente coberto enquanto houver etapa obrigatória pendente.

A existência de material teórico, isoladamente, não significa cobertura integral.

---

## 6. Critérios mínimos de cobertura

### 6.1. Cobertura teórica

Um item será considerado coberto teoricamente quando:

- [ ] O conteúdo corresponder ao item oficial;
- [ ] Os conceitos fundamentais estiverem explicados;
- [ ] Os conceitos complementares necessários estiverem contextualizados;
- [ ] Existirem exemplos didáticos quando úteis;
- [ ] As diferenças entre conceitos próximos estiverem esclarecidas;
- [ ] As referências estiverem identificadas;
- [ ] O material tiver passado por revisão técnica;
- [ ] O conteúdo estiver livre de afirmações sem sustentação.

Não utilizar quantidade de páginas ou palavras como único critério de qualidade.

### 6.2. Cobertura por questões

Um item terá cobertura por questões quando possuir:

- Questões oficiais verificáveis, quando disponíveis;
- Questões adaptadas com origem identificada;
- Questões autorais identificadas como tais;
- Gabarito validado;
- Comentário da alternativa correta;
- Explicação dos distratores;
- Classificação de dificuldade.

A quantidade de questões deverá ser acompanhada, mas não tratada isoladamente como medida de qualidade.

Não inventar questões oficiais para preencher lacunas.

Quando não existirem questões oficiais disponíveis, produzir questões autorais e identificar claramente sua origem.

### 6.3. Cobertura por flashcards

Os flashcards deverão contemplar:

- Conceitos fundamentais;
- Definições;
- Diferenças entre conceitos;
- Regras e classificações;
- Fórmulas e relações;
- Exceções relevantes;
- Pontos que apresentaram erros recorrentes.

Evitar cartões excessivamente longos ou que exijam respostas vagas.

### 6.4. Cobertura por revisão

Cada item deverá possuir uma estratégia de revisão compatível com seu conteúdo.

A revisão poderá incluir:

- Resumo estruturado;
- Questões de fixação;
- Flashcards;
- Revisão de erros;
- Revisão espaçada.

Não considerar a simples leitura de um arquivo como comprovação de aprendizagem.

### 6.5. Cobertura no NotebookLM

Verificar se os materiais:

- Estão em formato adequado;
- Possuem títulos e organização claros;
- Apresentam referências;
- Não misturam conteúdo oficial com inferências sem identificação;
- Estão atualizados em relação à versão validada do conteúdo.

### 6.6. Cobertura na plataforma

Verificar se:

- O conteúdo está disponível na página correta;
- A navegação está funcional;
- Os metadados estão corretos;
- O progresso pode ser registrado;
- As questões estão vinculadas aos assuntos;
- Os recursos de revisão funcionam;
- Não existem links quebrados.

---

## 7. Indicadores gerais

O projeto deverá apresentar indicadores de cobertura global e por módulo.

### 7.1. Indicadores de conteúdo

| Indicador | Cálculo |
|---|---|
| Total de itens oficiais | Quantidade de IDs da matriz |
| Itens com teoria | Itens com teoria validada |
| Itens sem teoria | Itens sem teoria validada |
| Itens em produção | Itens com teoria em desenvolvimento |
| Itens em revisão | Itens aguardando validação |
| Itens validados | Itens com teoria aprovada |

**Cobertura teórica:**

\[
\text{Cobertura} =
\frac{\text{Itens com teoria validada}}
{\text{Total de itens oficiais aplicáveis}}
\times 100
\]

### 7.2. Indicadores de questões

| Indicador | Descrição |
|---|---|
| Total de questões | Quantidade total cadastrada |
| Questões oficiais | Questões oficiais verificadas |
| Questões adaptadas | Questões com origem identificada |
| Questões autorais | Questões produzidas para o projeto |
| Questões validadas | Questões com gabarito e comentário revisados |
| Itens sem questões | Itens sem questões associadas |

Apresentar a quantidade de questões por módulo, assunto e origem.

Não utilizar o total de questões como substituto da cobertura teórica.

### 7.3. Indicadores de revisão

- Itens com flashcards;
- Itens com revisão estruturada;
- Flashcards disponíveis;
- Revisões pendentes;
- Questões de revisão disponíveis;
- Itens com erros recorrentes.

### 7.4. Indicadores de qualidade

- Conteúdos aguardando revisão técnica;
- Conteúdos com referências pendentes;
- Questões com gabarito não validado;
- Questões sem fonte;
- Materiais desatualizados;
- Itens com classificação pendente.

---

## 8. Painel de cobertura por módulo

| Módulo | Itens-folha | Teoria validada | Questões validadas | Flashcards | Cobertura teórica |
|---|---:|---:|---:|---:|---:|
| M01 — Arquitetura de Dados | 23 | 0 | 0 | 0 | 100% validada (teoria) |
| M02 — Gerenciamento de Projetos e Produtos | 7 | 0 | 0 | 0 | 100% validada (teoria, com ressalvas) |
| M03 — Processos, Grupos de Processos e Áreas de Conhecimento | 1 | 0 | 0 | 0 | 100% validada (teoria, com ressalvas) |
| M04 — Gestão e Governança em TI | 6 | 0 | 0 | 0 | 100% validada (teoria, com ressalvas) |
| M05 — Engenharia de Software | 5 | 0 | 0 | 0 | 100% validada (teoria, com ressalvas) |
| M06 — Experiência do Usuário (UX) | 11 | 0 | 0 | 0 | 100% validada (teoria, com ressalvas) |
| M07 — Análise de Dados e Informações | 11 | 0 | 0 | 0 | 100% validada (teoria, com ressalvas) |
| M08 — Lógica Matemática | 9 | 0 | 0 | 0 | 100% validada (teoria, com ressalvas) |
| M09 — Segurança da Informação | 21 | 0 | 0 | 0 | 100% validada (teoria, com ressalvas) |
| **Total** | **94** | 0 | 0 | 0 | 0% |

Os valores devem ser calculados a partir dos registros individuais.

Não preencher os campos com estimativas manuais.

---

## 9. Controle de qualidade e pendências

Manter uma lista de problemas identificados durante a produção.

| ID | Item do edital | Tipo de problema | Descrição | Ação corretiva | Status |
|---|---|---|---|---|---|
| Q-001 | A definir | A definir | A definir | A definir | Pendente |

Tipos de problema:

- `LACUNA_TEORICA`
- `LACUNA_QUESTOES`
- `GABARITO_NAO_VALIDADO`
- `REFERENCIA_PENDENTE`
- `CLASSIFICACAO_INCORRETA`
- `DUPLICIDADE`
- `MATERIAL_DESATUALIZADO`
- `ERRO_TECNICO`
- `ERRO_PEDAGOGICO`
- `INTEGRACAO_SITE`

Toda pendência deverá possuir uma ação corretiva e um status.

---

## 10. Priorização das lacunas

As lacunas deverão ser priorizadas considerando:

1. Ausência de conteúdo em item expressamente exigido;
2. Erros técnicos ou conceituais;
3. Ausência de referências;
4. Ausência de questões para prática;
5. Baixo desempenho do estudante;
6. Falhas de integração na plataforma;
7. Melhorias de apresentação e organização.

Utilizar os seguintes níveis:

| Prioridade | Critério |
|---|---|
| P0 — Crítica | Erro conceitual, informação incorreta ou divergência com o edital |
| P1 — Alta | Item oficial sem cobertura teórica ou com lacuna relevante |
| P2 — Média | Falta de questões, flashcards ou revisão |
| P3 — Baixa | Melhorias de organização, apresentação ou usabilidade |

A prioridade deverá considerar a importância da correção para a integridade do projeto.

Não classificar um assunto como menos importante apenas porque possui menos itens ou menor quantidade de questões.

---

## 11. Atualização do controle

O controle deverá ser atualizado sempre que:

- Um conteúdo for criado;
- Um conteúdo for revisado;
- Uma questão for incluída;
- Um gabarito for validado;
- Um flashcard for produzido;
- Um material for exportado para NotebookLM;
- Uma funcionalidade for integrada ao site;
- Uma lacuna for identificada ou resolvida.

Toda atualização deve manter coerência com a matriz de conteúdo.

Não atualizar manualmente indicadores derivados quando eles puderem ser calculados automaticamente.

---

## 12. Integração com a plataforma

A plataforma deverá utilizar os dados do controle para apresentar:

### Visão geral

- Percentual de cobertura teórica;
- Percentual de itens validados;
- Total de questões disponíveis;
- Total de flashcards;
- Pendências críticas;
- Progresso por módulo.

### Visão por módulo

- Lista dos itens oficiais;
- Status de cada item;
- Materiais disponíveis;
- Questões relacionadas;
- Revisões pendentes;
- Desempenho do estudante.

### Visão por assunto

- Item oficial relacionado;
- Conteúdo teórico;
- Questões;
- Flashcards;
- Histórico de revisão;
- Desempenho individual.

**Importante:** cobertura de conteúdo e desempenho do estudante são indicadores diferentes.

Um item pode estar integralmente coberto pelo projeto e ainda apresentar baixo desempenho do estudante.

Da mesma forma, um estudante pode acertar questões de um assunto cujo material ainda não foi integralmente desenvolvido.

A plataforma deverá apresentar essas informações separadamente.

---

## 13. Estrutura de dados recomendada

Para facilitar a integração com o site, o controle deverá possuir uma representação estruturada em JSON.

Arquivo recomendado:

`site/assets/data/cobertura.json`

Exemplo de estrutura:

```json
{
  "version": 1,
  "exam": "Transpetro 2026.4",
  "emphasis": "Ênfase 5",
  "lastUpdated": null,
  "items": [
    {
      "id": "E5-001",
      "module": "M01",
      "theory": "NAO_INICIADO",
      "questions": "NAO_INICIADO",
      "flashcards": "NAO_INICIADO",
      "review": "NAO_INICIADO",
      "notebooklm": "NAO_INICIADO",
      "site": "NAO_INICIADO",
      "pendingIssues": [],
      "notes": ""
    }
  ]
}
```

O registro acima é apenas um exemplo estrutural.

O JSON deverá ser gerado ou atualizado a partir dos dados reais da matriz e do controle de cobertura.

Não utilizar os IDs ilustrativos como se fossem itens oficiais.

### 13.1. Regras de consistência

- Todo ID deve existir na matriz de conteúdo.
- Não permitir IDs duplicados.
- Não permitir módulos inexistentes.
- Não permitir status fora da lista definida.
- Não considerar itens fora do escopo no cálculo de cobertura obrigatória.
- Não contabilizar itens pendentes como validados.
- Manter os dados do edital separados dos dados de desempenho individual.

---

## 14. Regras para o Claude Code

Ao trabalhar com este documento:

1. Consultar a matriz de conteúdo antes de alterar qualquer registro.
2. Utilizar exclusivamente IDs oficiais já cadastrados na matriz.
3. Atualizar o controle após concluir cada etapa relevante.
4. Não marcar materiais como validados sem revisão.
5. Não considerar a existência de arquivos como evidência de cobertura.
6. Não inventar quantidade de questões necessárias por assunto.
7. Não misturar cobertura do edital com desempenho do estudante.
8. Registrar problemas e pendências.
9. Atualizar os indicadores com base nos dados existentes.
10. Preservar a consistência entre Markdown e JSON.
11. Não alterar a redação oficial do edital.
12. Informar quais itens foram efetivamente concluídos e quais permanecem pendentes.

### Primeira execução

Após a aprovação da matriz de conteúdo:

1. Importar todos os IDs oficiais.
2. Associar os módulos pedagógicos.
3. Criar os registros de acompanhamento.
4. Inicializar todas as etapas como `NAO_INICIADO`.
5. Criar o JSON correspondente.
6. Validar a consistência entre os documentos.
7. Gerar um relatório inicial de cobertura.

Não iniciar a produção de conteúdo nesta etapa.

---

## 15. Critérios de conclusão

O controle inicial estará implementado quando:

- [ ] Todos os IDs da matriz estiverem representados.
- [ ] Não existirem IDs duplicados.
- [ ] Todos os módulos estiverem corretamente identificados.
- [ ] Os status estiverem inicializados.
- [ ] As etapas de acompanhamento estiverem definidas.
- [ ] Os indicadores estiverem documentados.
- [ ] As regras de priorização estiverem implementadas.
- [ ] O JSON estiver consistente com a matriz.
- [ ] As pendências estiverem registradas.

**Princípio final:** o objetivo do controle de cobertura não é demonstrar que muitos materiais foram produzidos, mas garantir que todos os assuntos exigidos no edital tenham sido adequadamente estudados, praticados, revisados e validados.