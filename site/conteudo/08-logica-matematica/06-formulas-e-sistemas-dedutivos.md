---
modulo: 08-logica-matematica
arquivo: 06-formulas-e-sistemas-dedutivos
itens_edital:
  - "8.5 Regras de formação de fórmulas"
  - "8.6 Sistemas dedutivos"
ids_matriz: ["E5-076", "E5-077"]
escopo: "A — conteúdo expresso no edital. Itens genéricos: abrangência é interpretação (a confirmar)."
tipo_conteudo: "teoria"
status: "VALIDADO"
ultima_atualizacao: "2026-10-31"
---

# Regras de Formação de Fórmulas e Sistemas Dedutivos

**Módulo:** M08 — Lógica matemática
**Textos oficiais (Anexo IV):** 8.5 "Regras de formação de fórmulas"; 8.6 "Sistemas dedutivos".
**Escopo:** A. Os sistemas dedutivos são apresentados em visão geral, com exemplos simples; sistemas específicos (Hilbert, dedução natural, tableaux, sequentes, resolução) são **interpretação** do item 8.6, **a confirmar**.
**Status:** `VALIDADO` (aprovado pelo usuário em 2026-10-31, com ressalvas: interpretação dos itens 8.5, 8.6 e 8.9 a confirmar; decisão sobre puzzles de raciocínio lógico pendente; fontes de memória listadas em `docs/qualidade/relatorio-producao-modulo-08.md`). Exemplos semânticos conferidos por script; definições dos sistemas são de memória.

**Objetivos de aprendizagem.** (1) Aplicar regras de formação e verificar fórmulas bem formadas; (2) usar precedência e parênteses; (3) construir árvores sintáticas; (4) distinguir sintaxe, semântica e dedução; (5) conhecer sistemas dedutivos e suas propriedades.

---

## 1. Regras de formação de fórmulas (item 8.5)

### 1.1 Gramática da lógica sentencial (definição indutiva)

1. Toda **letra sentencial** (*p*, *q*, *r*, …) é uma fórmula (**átomo**). *(Opcionalmente ⊤ e ⊥.)*
2. Se *A* é fórmula, **¬A** é fórmula.
3. Se *A* e *B* são fórmulas, **(A ∧ B)**, **(A ∨ B)**, **(A → B)** e **(A ↔ B)** são fórmulas.
4. **Nada mais** é fórmula (cláusula de fechamento).

Em BNF: `F ::= p | ¬F | (F ∧ F) | (F ∨ F) | (F → F) | (F ↔ F)`.

| Expressão | Fórmula bem formada? |
|---|---|
| p ∧ q (como (p ∧ q)) | **Sim** |
| ¬¬p | **Sim** |
| (p → (q ∨ ¬r)) | **Sim** |
| p ∧ ∨ q | **Não** (dois conectivos binários seguidos) |
| (p q) | **Não** (falta conectivo) |
| ∧ p | **Não** (conectivo binário sem primeiro argumento) |
| (p → ) | **Não** |
| ¬(p | **Não** (parênteses desbalanceados) |

### 1.2 Subfórmulas, conectivo principal e árvore sintática

- **Subfórmulas** de *A*: *A* e todas as fórmulas usadas na sua construção.
- **Conectivo principal:** o último introduzido; define o tipo da fórmula (por exemplo, ¬p ∨ q é uma **disjunção**; ¬(p ∨ q) é uma **negação**).
- **Árvore sintática:** raiz = conectivo principal; folhas = átomos. **Leitura única** (toda fórmula se decompõe de um só modo): parênteses ou precedência evitam ambiguidade.
- **Abreviações:** omitem-se parênteses externos e usam-se as precedências (¬ > ∧ > ∨ > → > ↔; arquivo `01`). Muitos textos adotam a associação **à direita** para → (p → q → r significa p → (q → r)); essa convenção **não foi confirmada** nas fontes consultadas e a precedência também varia entre autores. Como o condicional **não é associativo** (conferido), a ambiguidade importa: **use parênteses** e verifique o enunciado.

### 1.3 Lógica de predicados (acréscimos)

- **Termos:** variável e constante são termos; se *f* é função *n*-ária e *t₁…tₙ* termos, *f(t₁,…,tₙ)* é termo.
- **Fórmula atômica:** *P(t₁,…,tₙ)* com *P* predicado *n*-ário (e *t₁ = t₂*).
- Se *A* é fórmula e *x* variável, **∀x A** e **∃x A** são fórmulas.
- Conceitos: **escopo** de quantificador, variável **livre/ligada**, **sentença** (arquivo `05`). A **substituição** de variável por termo exige que o termo seja **livre para a variável** (evita captura; de memória).

## 2. Sintaxe, semântica e dedução

| Plano | Pergunta | Notação |
|---|---|---|
| **Sintaxe** | A expressão é uma fórmula? | regras de formação |
| **Semântica** | A fórmula é V? Vale em todo caso? | ⊨ (valoração/interpretação) |
| **Dedução (teoria da prova)** | Existe uma prova? | ⊢ (derivação) |

## 3. Sistemas dedutivos (item 8.6; de memória)

Um **sistema dedutivo** (cálculo, sistema formal) define, por **regras puramente sintáticas**, quais fórmulas são **deriváveis** a partir de premissas. Componentes: **linguagem**, **axiomas** (possivelmente nenhum), **regras de inferência** e a noção de **derivação (prova)**: sequência finita de fórmulas, cada uma axioma, premissa ou obtida por regra.

| Sistema | Característica |
|---|---|
| **Axiomático (Hilbert)** | Muitos axiomas, poucas regras (normalmente *modus ponens*); provas longas, adequado ao estudo teórico |
| **Dedução natural (Gentzen)** | Regras de **introdução** e **eliminação** de cada conectivo; hipóteses temporárias; próxima do raciocínio informal |
| **Cálculo de sequentes (Gentzen)** | Sequentes Γ ⊢ Δ; útil para teoria da prova |
| **Tableaux semânticos** | Prova por **refutação**: decompor a fórmula negada em árvore; ramos fechados indicam insatisfatibilidade |
| **Resolução** | Cláusulas e regra de resolução (arquivo `04`); base de provadores automáticos e da programação em lógica |

### 3.1 Dedução natural: regras principais (proposicional)

| Conectivo | Introdução | Eliminação |
|---|---|---|
| **∧** | A ; B ⊢ A ∧ B | A ∧ B ⊢ A ; A ∧ B ⊢ B |
| **→** | Supondo A, derivar B ⇒ A → B | A → B ; A ⊢ B (*modus ponens*) |
| **∨** | A ⊢ A ∨ B ; B ⊢ A ∨ B | A ∨ B ; (A ⊢ C) ; (B ⊢ C) ⊢ C (por casos) |
| **¬** | Supondo A, derivar ⊥ ⇒ ¬A | A ; ¬A ⊢ ⊥ |
| **Redução ao absurdo** | Supondo ¬A, derivar ⊥ ⇒ A | — |

Exemplo — provar p → r a partir de p → q e q → r: (1) p → q [premissa]; (2) q → r [premissa]; (3) p [hipótese]; (4) q [→E, 1,3]; (5) r [→E, 2,4]; (6) p → r [→I, 3–5].

### 3.2 Propriedades de um sistema

| Propriedade | Enunciado |
|---|---|
| **Correção (*soundness*)** | Tudo o que se **deriva** é consequência semântica: Γ ⊢ A ⇒ Γ ⊨ A |
| **Completude** | Toda consequência semântica é derivável: Γ ⊨ A ⇒ Γ ⊢ A |
| **Consistência** | Não deriva uma contradição (A e ¬A) |
| **Decidibilidade** | Existe algoritmo que decide se há derivação (arquivo `07`) |

A lógica **sentencial** (clássica) tem sistemas **corretos, completos e decidíveis**; a **de predicados de primeira ordem** tem sistemas corretos e completos (Gödel, 1930; de memória), porém **indecidível** (arquivo `05`).

### 3.3 Teoremas e termos relacionados

- **Teorema:** fórmula derivável sem premissas (⊢ A). Na lógica clássica sentencial, **teoremas = tautologias** (correção + completude).
- **Regra derivada/admissível:** regra que pode ser eliminada sem enfraquecer o sistema.
- **Prova direta, por contraposição, por redução ao absurdo (por contradição)** e **por casos**: técnicas matemáticas ligadas às regras acima.
- **Programação em lógica** (Prolog) usa resolução sobre cláusulas de Horn (visão geral; de memória).

## 4. Exemplos (didáticos)

1. Fórmula bem formada? "(p ∧ q) → (r ∨ ¬s)": **sim**, conectivo principal →.
2. Prova semântica de modus tollens: não há valoração com p → q V, ¬q V e ¬p F (conferido).
3. A prova de "p ⊢ q → p" em dedução natural usa hipótese temporária *q* e a regra →I (tautologia p → (q → p), conferível).

## 5. Comparações conceituais

| A | B | Diferença |
|---|---|---|
| Fórmula | Expressão qualquer | Satisfaz as regras de formação × sequência de símbolos |
| ⊨ | ⊢ | Verdade em todo modelo × existência de prova |
| Correção | Completude | Não prova o falso × prova todo o válido |
| Axiomático | Dedução natural | Muitos axiomas, uma regra × regras de introdução/eliminação |
| Prova | Tabela-verdade | Procedimento sintático × semântico |
| Teorema | Axioma | Derivado × assumido |

## 6. Atenção para a prova

*Inferência técnica e recomendação pedagógica; sem atribuir frequência à banca.*

- Verificar se uma expressão é **bem formada** pelos erros típicos: conectivo faltando ou sobrando, parênteses desbalanceados.
- Distinguir **correção** de **completude**.
- Evidência histórica (amostra de duas provas): a Q28 de 2023 (argumento) foi associada, de modo secundário, a 8.6 (sistemas dedutivos). Itens 8.5 e 8.6 não tiveram questão primária. Gabaritos de terceiros, não validados. Duas provas não permitem inferir frequência.

## 7. Síntese

Fórmulas: definição indutiva (átomos, ¬, conectivos binários, fechamento). Sistemas dedutivos: axiomas e regras produzem derivações (⊢); correção, completude, consistência. Hilbert, dedução natural, tableaux, resolução. Sentencial: decidível; predicados: semidecidível.

## 8. Pontos para a futura produção de questões (registro)

Fórmula bem formada; conectivo principal; completar prova simples; correção × completude; escolha de sistema.

## 9. Referências

- Exemplos semânticos: **conferidos por script em 2026-10-31**. Wikipedia, "Hilbert system", "Sequent calculus" (LK e LJ, 1934/1935), "Method of analytic tableaux" (Beth, 1955) e "Resolution (logic)" (Robinson, 1965) — **verificadas em 2026-10-31**; dedução natural (NK/NJ) de Gentzen sem data confirmada. Livros de lógica — **de memória, não verificados**.
- Edital Transpetro nº 04/2026.4, Anexo IV, itens 8.5 e 8.6. Prova Transpetro 2023, Prova 6, Q28 (gabarito de terceiros, não validado).
