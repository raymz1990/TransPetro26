---
modulo: 08-logica-matematica
arquivo: 05-logica-de-predicados
itens_edital:
  - "8.4 A lógica de predicados de primeira ordem"
ids_matriz: ["E5-075"]
escopo: "A — conteúdo expresso no edital."
tipo_conteudo: "teoria"
status: "VALIDADO"
ultima_atualizacao: "2026-10-31"
---

# A Lógica de Predicados de Primeira Ordem

**Módulo:** M08 — Lógica matemática
**Texto oficial (Anexo IV):** 8.4 "A lógica de predicados de primeira ordem".
**Escopo:** A.
**Status:** `VALIDADO` (aprovado pelo usuário em 2026-10-31, com ressalvas: interpretação dos itens 8.5, 8.6 e 8.9 a confirmar; decisão sobre puzzles de raciocínio lógico pendente; fontes de memória listadas em `docs/qualidade/relatorio-producao-modulo-08.md`). Negações e exemplos em domínios finitos conferidos por script em 2026-10-31; resultados metateóricos (Gödel, Church, Turing) de memória.

**Objetivos de aprendizagem.** (1) Formalizar sentenças com predicados e quantificadores; (2) negar sentenças quantificadas; (3) interpretar fórmulas em domínios; (4) distinguir variáveis livres e ligadas; (5) conhecer a ordem dos quantificadores e os limites da lógica de primeira ordem.

---

## 1. Por que ir além da lógica sentencial

Em "Todo engenheiro é graduado; Maria é engenheira; logo Maria é graduada", a validade depende da **estrutura interna** das sentenças ("todo", "é"), que a lógica sentencial não captura. A **lógica de predicados (de primeira ordem — LPO)** acrescenta **termos**, **predicados** e **quantificadores**.

## 2. Linguagem

| Elemento | Descrição | Exemplo |
|---|---|---|
| **Constantes** | Nomeiam indivíduos | *a*, *maria* |
| **Variáveis** | Percorrem o domínio | *x*, *y* |
| **Símbolos de função** | Formam termos | *pai(x)*, *x + y* |
| **Predicados** (relações) | Propriedades ou relações; aridade | *Engenheiro(x)*; *Ama(x, y)* |
| **Igualdade** (opcional) | x = y | — |
| **Conectivos** | ¬ ∧ ∨ → ↔ | — |
| **Quantificadores** | ∀ (universal), ∃ (existencial) | ∀x P(x); ∃x P(x) |

**Primeira ordem:** os quantificadores atuam sobre **indivíduos**; na **segunda ordem**, também sobre predicados e conjuntos (mais expressiva, sem sistema dedutivo completo; de memória).

## 3. Quantificadores e tradução

| Sentença | Forma |
|---|---|
| Todo S é P | **∀x (S(x) → P(x))** |
| Algum S é P | **∃x (S(x) ∧ P(x))** |
| Nenhum S é P | ∀x (S(x) → ¬P(x)) ≡ ¬∃x (S(x) ∧ P(x)) |
| Algum S não é P | ∃x (S(x) ∧ ¬P(x)) |
| Existe exatamente um *x* com P | ∃x (P(x) ∧ ∀y (P(y) → y = x)) |

**Erros típicos de tradução:** usar **∧** com ∀ ("∀x (S(x) ∧ P(x))" diz que **todo** objeto é S e P) e **→** com ∃ ("∃x (S(x) → P(x))" é trivialmente verdadeira se existir algo que não seja S). Regra prática: **∀ combina com →; ∃ combina com ∧**.

Exemplo: "Todo petroleiro é navio": ∀x (Petroleiro(x) → Navio(x)). "Algum navio é petroleiro": ∃x (Navio(x) ∧ Petroleiro(x)).

## 4. Negação de quantificadores (conferida em domínio finito)

| Sentença | Negação equivalente |
|---|---|
| ¬∀x P(x) | **∃x ¬P(x)** |
| ¬∃x P(x) | **∀x ¬P(x)** |
| ¬∀x (S(x) → P(x)) | ∃x (S(x) ∧ ¬P(x)) |
| ¬∃x (S(x) ∧ P(x)) | ∀x (S(x) → ¬P(x)) |

Cuidado: a negação de "**todos** passaram" é "**algum** não passou" — não "ninguém passou".

## 5. Ordem dos quantificadores

Quantificadores **do mesmo tipo** comutam (∀x∀y ≡ ∀y∀x; ∃x∃y ≡ ∃y∃x). Os de **tipos diferentes não**: ∀x∃y R(x,y) **não** equivale a ∃y∀x R(x,y). Contraexemplo (conferido): domínio {1,2} e *R* verdadeira apenas em (1,1) e (2,2): ∀x∃y R(x,y) é V (cada um se relaciona consigo), mas ∃y∀x R(x,y) é F (nenhum *y* relaciona-se com todos). Interpretação: "todo aluno tem um professor" ≠ "existe um professor de todos os alunos". Só a segunda implica a primeira.

## 6. Variáveis livres e ligadas; sentenças

- **Ocorrência ligada:** no escopo de um quantificador que a quantifica; **livre:** caso contrário.
- **Sentença (fechada):** fórmula sem variáveis livres — tem valor-verdade numa interpretação. Fórmula com variável livre é uma **sentença aberta** (arquivo `01`).
- Exemplo: em ∀x (P(x) → Q(y)), *x* é ligada e *y* é livre.

## 7. Semântica: interpretações

Uma **interpretação** especifica um **domínio** (conjunto não vazio) e o significado dos símbolos (indivíduos, funções, relações). Uma sentença pode ser V numa interpretação e F noutra. Noções: **satisfatível** (V em alguma interpretação), **válida** (V em todas), **consequência lógica** (Γ ⊨ A: toda interpretação que satisfaz Γ satisfaz A). **Domínio vazio** é excluído na lógica clássica; num domínio vazio, ∀ seria vacuamente V e ∃ F (conferido), o que quebraria leis como ∀x P(x) → ∃x P(x).

Exemplo de consequência: de ∀x (P(x) → Q(x)) e P(a), segue Q(a) (instanciação universal + modus ponens). **Não** segue ∀x P(x) → ∀x Q(x) de forma recíproca: em domínio {1,2,3} com P = {1,2} e Q = {1}, ∀x (P(x) → Q(x)) é F, mas (∀x P(x) → ∀x Q(x)) é V (conferido) — logo as duas sentenças **não são equivalentes**; a primeira implica a segunda, não o contrário.

## 8. Regras de dedução com quantificadores (visão geral)

| Regra | Descrição |
|---|---|
| **Instanciação universal** (∀E) | De ∀x P(x), conclui-se P(t) para qualquer termo *t* |
| **Generalização universal** (∀I) | De P(a) com *a* **arbitrário** (sem premissa sobre *a*), conclui-se ∀x P(x) |
| **Generalização existencial** (∃I) | De P(t), conclui-se ∃x P(x) |
| **Instanciação existencial** (∃E) | De ∃x P(x), toma-se um nome novo *c* com P(c) (para provas) |

Detalhes e sistemas completos: arquivo `06` (de memória).

## 9. Propriedades e limites (de memória)

| Resultado | Enunciado |
|---|---|
| **Completude de Gödel (1929, tese; publicada em 1930)** — **verificada** (Wikipedia) | Toda sentença válida da LPO é demonstrável (nos sistemas usuais) |
| **Indecidibilidade (Church e Turing, 1936)** — **verificada** (Wikipedia) | **Não existe** algoritmo que decida a validade de qualquer sentença da LPO; ela é **semidecidível** (as válidas podem ser enumeradas/provadas) |
| **Incompletude de Gödel (1931)** | Teorias da aritmética suficientemente fortes são incompletas |
| **Compacidade; Löwenheim–Skolem** | Propriedades de modelos |

Contraste com a lógica **sentencial**, que é **decidível** (arquivo `07`).

## 10. Exemplo (didático)

Em um sistema de ordens de serviço, "toda ordem crítica tem responsável": ∀x (Crítica(x) → ∃y Responsável(y, x)). Negação: ∃x (Crítica(x) ∧ ∀y ¬Responsável(y, x)) — "há ordem crítica **sem** responsável". Aplicação em computação: consultas SQL e restrições de integridade têm base na LPO (cálculo relacional; Módulo 1).

## 11. Comparações conceituais

| A | B | Diferença |
|---|---|---|
| Lógica sentencial | Predicados | Sem estrutura interna × com termos e quantificadores |
| ∀x (S → P) | ∀x (S ∧ P) | "Todo S é P" × "tudo é S e P" |
| ∃x (S ∧ P) | ∃x (S → P) | "Algum S é P" × trivialmente V se algo não for S |
| ∀x∃y | ∃y∀x | Depende de *x* × único *y* para todos |
| Variável livre | Ligada | Sem quantificador × quantificada |
| 1ª ordem | 2ª ordem | Quantifica indivíduos × também predicados |

## 12. Atenção para a prova

*Inferência técnica e recomendação pedagógica; sem atribuir frequência à banca.*

- **Traduzir** com ∀→ e ∃∧; **negar** trocando o quantificador e negando o predicado.
- Atenção à ordem ∀∃ × ∃∀.
- Evidência histórica (amostra de duas provas): **Q35 de 2023** (consequência lógica de sentença quantificada; gabarito B) e **Q69 de 2018** (tradução de sentença para lógica de predicados; gabarito A). Gabaritos de terceiros, não validados. Duas provas não permitem inferir frequência.

## 13. Síntese

LPO = termos, predicados, ∀, ∃. Traduzir: ∀→, ∃∧. Negação: ¬∀ ≡ ∃¬; ¬∃ ≡ ∀¬. ∀∃ ≠ ∃∀. Sentenças, interpretações, consequência. Completa (Gödel), indecidível/semidecidível (Church–Turing).

## 14. Pontos para a futura produção de questões (registro)

Tradução; negação; ordem de quantificadores; consequência lógica; variáveis livres/ligadas; decidibilidade da LPO.

## 15. Referências

- Negações, contraexemplos e domínio vazio: **conferidos por script em 2026-10-31** (domínios finitos).
- Wikipedia, "Gödel's completeness theorem" e "Entscheidungsproblem" — **verificadas em 2026-10-31** (completude; indecidibilidade e semidecidibilidade); "Categorical proposition" — **verificada** (A, E, I, O; leitura moderna exige considerar categoria vazia). Incompletude, Löwenheim–Skolem; livros de lógica (Enderton, Mendelson) — **de memória, não verificados**.
- Edital Transpetro nº 04/2026.4, Anexo IV, item 8.4. Provas: Transpetro 2023, Prova 6, Q35; Transpetro 2018, Prova 15, Q69 (gabaritos de terceiros, não validados).
