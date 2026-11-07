# Simulado do módulo 8 — Lógica matemática

**Status:** rascunho · **Tempo:** 58 min · **Questões:** 15

**Critério de distribuição:** Até 15 questões por módulo, priorizando itens ainda não usados e mistura de dificuldade 30/50/20% (critério pedagógico).

**Observações:** Mistura de questões oficiais e autorais do módulo; algumas ainda `em_revisao`.

Composição: tipo {'autoral': 9, 'oficial': 6} · status {'validada': 9, 'em_revisao': 6} · dificuldade {'facil': 3, 'media': 9, 'dificil': 3}

## 1. AUT-000071 — Negação de proposição condicional

*Questão autoral — estilo Cesgranrio.* · item 8.1 · Fácil · gabarito **B**

Seja p: "o alarme soa" e q: "o operador interrompe a bomba". A proposição é p → q. Um condicional só é falso quando o antecedente é verdadeiro e o consequente, falso. Portanto, **¬(p → q) ≡ p ∧ ¬q**: "o alarme soa **e** o operador **não** interrompe a bomba". A negação de um condicional **não** é outro condicional.

- **A)** Incorreta. É a **inversa** (¬p → ¬q), que não é equivalente ao condicional original nem à sua negação.
- **B)** Correta. ¬(p → q) ≡ p ∧ ¬q.
- **C)** Incorreta. É a **contrapositiva** (¬q → ¬p), equivalente ao condicional original, e não à sua negação.
- **D)** Incorreta. Corresponde a ¬p ∧ q, que não é equivalente a ¬(p → q); a negação mantém o antecedente verdadeiro.
- **E)** Incorreta. Corresponde a ¬p ∨ ¬q, que é a negação de p ∧ q (De Morgan), e não a de p → q.

**Revisão rápida:** ¬(p → q) ≡ p ∧ ¬q. Contrapositiva ≡ condicional. Conversa e inversa não são equivalentes ao condicional.

## 2. OFI-000115 — Equivalência lógica: contrapositiva

*Questão oficial — Fundação Cesgranrio, Petrobras PSP RH 2017.2, Prova 3, questão 67.* · item 8.1 · Média · gabarito **C**

Sentença: **P → Q**, com P = "os dois são pares" e Q = "a soma é par". Sua equivalente é a **contrapositiva ¬Q → ¬P**: "a soma **não é par** (é ímpar) → **não** são os dois pares". Como todo inteiro é par ou ímpar, "não são os dois pares" equivale a "**algum é ímpar**".

- **A)** Incorreta. Mantém a forma "se...então" com termos trocados por ímpar; não é a contrapositiva (e é falsa: 3 + 5 = 8 é par).
- **B)** Incorreta. A frase é falsa (3 e 4 são ímpar/par e somam 7, mas 3 e 5 somam 8, par).
- **C)** Correta. É a contrapositiva, com ¬P escrito como "algum é ímpar" usando a premissa par/ímpar.
- **D)** Incorreta. Exige que os dois sejam ímpares, o que é mais forte que o negado (¬P é "algum é ímpar").
- **E)** Incorreta. É a recíproca (Q → P), não equivalente à original.

**Revisão rápida:** Equivalente de P→Q: ¬Q→¬P.

## 3. AUT-000075 — Argumentos: validade

*Questão autoral — estilo Cesgranrio.* · item 8.2 · Difícil · gabarito **C**

Um argumento é **válido** quando não existe valoração com **premissas verdadeiras e conclusão falsa**. **C** tem a forma do **modus tollens** (p → q; ¬q ⊢ ¬p), válida. **A** é **afirmação do consequente** (inválida). **B** é **negação do antecedente** (inválida). **D** usa uma disjunção **inclusiva**: "há vazamento" não exclui a falha elétrica (inválido). **E** é a forma (p → r) ∧ (q → r), r ⊢ p ∨ q, que também é uma afirmação do consequente (inválida). Todas as conferências foram feitas por enumeração das valorações.

- **A)** Incorreta. A forma é afirmação do consequente (p → q; q ⊢ p), inválida: o alarme pode soar por outro motivo, sem vazamento.
- **B)** Incorreta. A negação do antecedente (p → q; ¬p ⊢ ¬q) é falácia: o alarme pode soar por outro motivo mesmo sem vazamento.
- **C)** Correta. Modus tollens: p → q; ¬q ⊢ ¬p.
- **D)** Incorreta. O silogismo disjuntivo válido exige a negação de um dos termos (p ∨ q; ¬p ⊢ q); afirmar um termo não permite negar o outro, pois a disjunção é inclusiva.
- **E)** Incorreta. A forma não é o dilema construtivo (que exigiria p ∨ q como premissa e concluiria r); aqui se conclui a causa a partir do efeito, o que é uma afirmação do consequente.

**Revisão rápida:** Válidos: modus ponens, modus tollens, silogismos hipotético e disjuntivo. Inválidos: afirmação do consequente; negação do antecedente.

## 4. OFI-000117 — Argumento válido: conclusão que decorre das premissas

*Questão oficial — Fundação Cesgranrio, Petrobras PSP RH 2017.2, Prova 3, questão 69.* · item 8.2 · Difícil · gabarito **A**

Premissa 3: **r = V e s = V**, logo (~r) ˅ (~s) = F. Pela premissa 1, p → F exige **p = F**. Na premissa 2, com p = F: (p ˅ ~q) = ~q deve ser V, então **q = F**; e (q ˅ ~p) = V ˅ ... = V. Logo p = F e q = F, e a conclusão que decorre é **~(p ˅ q)** (V).

- **A)** Correta. Com p = F e q = F, p ˅ q = F e ~(p ˅ q) = V: decorre das premissas.
- **B)** Incorreta. (~q) ˄ p exige p = V, mas p = F.
- **C)** Incorreta. (~p) ˄ q exige q = V, mas q = F.
- **D)** Incorreta. p ˄ q exige p = V.
- **E)** Incorreta. p ˅ q é F.

**Revisão rápida:** Único modelo: r, s verdadeiros; p, q falsos.

## 5. OFI-000033 — Argumento válido: conclusão a partir das premissas

*Questão oficial — Fundação Cesgranrio, Transpetro PSP/Terra 002/2023, Prova 6, questão 28.* · item 8.2 · Média · gabarito **D**

Para que todas as premissas sejam verdadeiras, a **Premissa 2** exige D verdadeiro e E falso. Na Premissa 1, ¬D ∨ E = F ∨ F = **F**; logo ¬A deve ser falso, isto é, **A é verdadeiro**. Na Premissa 3, ¬A é falso, então **B deve ser verdadeiro**. A conclusão que decorre de todas as premissas é **B**.

- **A)** Incorreta. ¬D contradiz a Premissa 2 (D verdadeiro).
- **B)** Incorreta. E é falso pela Premissa 2.
- **C)** Incorreta. ¬A é falso, pois A é verdadeiro.
- **D)** Correta. B é verdadeiro em toda situação em que as três premissas são verdadeiras: conclusão válida.
- **E)** Incorreta. ¬B é falso.

**Revisão rápida:** Premissas V ⇒ D=V, E=F, A=V, B=V.

## 6. AUT-000078 — Lógica de predicados: ordem dos quantificadores

*Questão autoral — estilo Cesgranrio.* · item 8.4 · Difícil · gabarito **C**

Se existe um supervisor de **todos** (II), então **todo** técnico tem **algum** supervisor (I): II ⇒ I. A recíproca é falsa: cada técnico pode ter o seu próprio supervisor, sem que um único seja supervisor de todos (por exemplo, dois técnicos e dois supervisores, cada um supervisionando um técnico). Quantificadores de **tipos diferentes não comutam**.

- **A)** Incorreta. A ordem de ∀ e ∃ altera o significado: "cada um tem um" é mais fraco que "um para todos".
- **B)** Incorreta. Inverte a implicação: II implica I, e não o contrário.
- **C)** Correta. II ⇒ I, mas I ⇏ II.
- **D)** Incorreta. Há implicação de II para I; a vinculação existe em um sentido.
- **E)** Incorreta. A negação de I seria ∃x ∀y ¬S(y, x); II não é a negação de I (pode haver modelos em que ambas são verdadeiras).

**Revisão rápida:** ∃y∀x R ⇒ ∀x∃y R, mas não o contrário. Contraexemplo: cada técnico com um supervisor distinto.

## 7. AUT-000077 — Lógica de predicados: negação de sentenças quantificadas

*Questão autoral — estilo Cesgranrio.* · item 8.4 · Média · gabarito **A**

A negação de **∀x P(x)** é **∃x ¬P(x)**. Assim, ¬∀x (C(x) → S(x)) ≡ ∃x ¬(C(x) → S(x)) ≡ **∃x (C(x) ∧ ¬S(x))**: "existe equipamento crítico que não possui sensor". A negação de "todos" não é "nenhum".

- **A)** Correta. ∃x (C(x) ∧ ¬S(x)).
- **B)** Incorreta. "Nenhum equipamento crítico possui sensor" é ∀x (C(x) → ¬S(x)), mais forte que a negação; a negação de "todos" é "algum não".
- **C)** Incorreta. "Todo equipamento crítico não possui sensor" tem o mesmo sentido da alternativa B (∀x (C(x) → ¬S(x))) e afirma mais do que a negação exige.
- **D)** Incorreta. Trata de equipamento **não** crítico; o que nega a sentença é a existência de um equipamento crítico sem sensor.
- **E)** Incorreta. Um equipamento crítico com sensor é compatível com a sentença original; não a nega.

**Revisão rápida:** ¬∀x(C→S) ≡ ∃x(C ∧ ¬S). Traduzir: ∀ com →, ∃ com ∧.

## 8. OFI-000034 — Consequência lógica de sentença quantificada

*Questão oficial — Fundação Cesgranrio, Transpetro PSP/Terra 002/2023, Prova 6, questão 35.* · item 8.4 · Média · gabarito **B**

Simbolicamente: ∀x (P(x) → (M(x) ∨ E(x))). A **contrapositiva** é ∀x (¬(M(x) ∨ E(x)) → ¬P(x)), ou seja, quem não é médico nem enfermeiro não é profissional do posto, que é a alternativa B.

- **A)** Incorreta. Confunde "ou" com "e"; não decorre.
- **B)** Correta. É a contrapositiva da sentença original, equivalente a ela.
- **C)** Incorreta. A sentença admite quem seja ambos; nada impede.
- **D)** Incorreta. Contradiz a sentença, que diz que todos são médicos ou enfermeiros.
- **E)** Incorreta. A sentença usa "ou" inclusivo e não proíbe quem seja ambos.

**Revisão rápida:** P→Q ≡ ¬Q→¬P.

## 9. AUT-000079 — Regras de formação de fórmulas

*Questão autoral — estilo Cesgranrio.* · item 8.5 · Fácil · gabarito **E**

Pelas regras de formação: toda letra sentencial é fórmula; se A é fórmula, ¬A é fórmula; se A e B são fórmulas, (A ∧ B), (A ∨ B) e (A → B) são fórmulas; **nada mais** é fórmula. A expressão **((p ∧ q) → ¬r)** é construída por essas regras: (p ∧ q) é fórmula; ¬r é fórmula; o condicional entre elas é fórmula.

- **A)** Incorreta. Tem dois conectivos binários seguidos (∧ ∨), sem que haja fórmula entre eles.
- **B)** Incorreta. Tem parênteses desbalanceados (abre e não fecha).
- **C)** Incorreta. A disjunção está sem o segundo argumento (falta uma fórmula depois de ∨).
- **D)** Incorreta. Faltam o conectivo entre p e q; duas letras justapostas não formam fórmula.
- **E)** Correta. Construída pelas regras: ¬ aplicado a r; ∧ entre p e q; → entre as duas fórmulas.

**Revisão rápida:** Fórmula: átomo; ¬A; (A∧B); (A∨B); (A→B); (A↔B); nada mais. Conectivo principal = último introduzido.

## 10. AUT-000072 — Sistemas dedutivos: correção e completude

*Questão autoral — estilo Cesgranrio.* · item 8.6 · Média · gabarito **D**

**Correção:** tudo o que o sistema **deriva** (⊢) é **consequência semântica** (⊨); no caso das fórmulas deriváveis sem premissas, são tautologias. **Completude:** toda **consequência semântica** é **derivável**; toda tautologia é um teorema. A **consistência** (não derivar uma fórmula e sua negação) e a **decidibilidade** (existência de um algoritmo) são propriedades distintas.

- **A)** Incorreta. Inverte as definições: tudo o que é derivado ser tautologia é correção; derivar toda tautologia é completude.
- **B)** Incorreta. São propriedades distintas (derivar só o válido × derivar todo o válido); evitar contradições é a consistência.
- **C)** Incorreta. Nunca derivar uma fórmula e sua negação é consistência; a completude é sobre derivar toda consequência semântica.
- **D)** Correta. Definições de correção e completude.
- **E)** Incorreta. A existência de um algoritmo de decisão é a decidibilidade, e não a correção.

**Revisão rápida:** Correção: ⊢ ⇒ ⊨. Completude: ⊨ ⇒ ⊢. Sentencial clássica: correta, completa e decidível. LPO: correta, completa e indecidível.

## 11. OFI-000118 — Regras de inferência de um argumento

*Questão oficial — Fundação Cesgranrio, Petrobras PSP RH 2017.2, Prova 3, questão 70.* · item 8.6 · Média · gabarito **D**

Da premissa 1 e da premissa 2 (P verdadeiro, logo ~P falso), por **Modus Tollens** (de X → Y e ~Y conclui-se ~X) obtém-se **~[(~A) ˄ (~G)]**. Pela **Lei de De Morgan**, ~[(~A) ˄ (~G)] ≡ **A ˅ G**.

- **A)** Incorreta. Paradoxo e contingência não são regras de inferência.
- **B)** Incorreta. Contraposição é equivalência, e "absurdo" é redução ao absurdo; a dedução direta é por Modus Tollens.
- **C)** Incorreta. Modus Ponens (de X → Y e X conclui-se Y) não se aplica: P é o consequente negado.
- **D)** Correta. Modus Tollens e De Morgan produzem exatamente a conclusão.
- **E)** Incorreta. Silogismo conjuntivo e hipotético não se aplicam a essa estrutura.

**Revisão rápida:** Tollens + De Morgan.

## 12. AUT-000080 — Decidibilidade da lógica sentencial e funções de avaliação

*Questão autoral — estilo Cesgranrio.* · item 8.7 · Fácil · gabarito **B**

Com **n** letras sentenciais há **2ⁿ** valorações; com 5 letras, **2⁵ = 32** (no máximo 32 avaliações: uma linha falsa já mostra que a fórmula não é tautologia). Como o número de valorações é **finito** e cada avaliação é um cálculo finito, o método **sempre termina**: a lógica sentencial é **decidível**. A **lógica de predicados** de primeira ordem, por sua vez, é **indecidível** (semidecidível).

- **A)** Incorreta. O número de valorações é 2⁵ = 32, e não 5 × 2 = 10 (as escolhas de cada letra se combinam).
- **B)** Correta. 2⁵ = 32 valorações; o procedimento sempre termina; a lógica sentencial é decidível.
- **C)** Incorreta. O total é 2⁵ = 32, e não 5²; além disso, o procedimento sempre termina, pois o número de valorações é finito.
- **D)** Incorreta. Para ser tautologia, a fórmula deve ser verdadeira em todas as valorações, e não em apenas uma.
- **E)** Incorreta. A lógica sentencial é decidível; a indecidibilidade é característica da lógica de predicados de primeira ordem.

**Revisão rápida:** Sentencial: decidível (tabela-verdade, 2ⁿ linhas). LPO: indecidível, semidecidível. Valoração = função de avaliação das letras.

## 13. AUT-000073 — Valores-verdade de proposições compostas

*Questão autoral — estilo Cesgranrio.* · item 8.8 · Média · gabarito **A**

**X:** p → q = V → F = F; F ∨ r = F ∨ V = **V**. **Y:** p ∧ q = V ∧ F = F; ¬(p ∧ q) = V; r ↔ q = V ↔ F = F; V → F = **F**. Logo, X é verdadeira e Y é falsa.

- **A)** Correta. X = V e Y = F.
- **B)** Incorreta. Y é falsa: o antecedente ¬(p ∧ q) é verdadeiro, mas o consequente r ↔ q é falso (V ↔ F).
- **C)** Incorreta. X é verdadeira, pois r é verdadeira e a disjunção basta; Y é falsa, e não verdadeira.
- **D)** Incorreta. X é verdadeira: mesmo com p → q falso, r verdadeira torna a disjunção verdadeira.
- **E)** Incorreta. Com valores lógicos atribuídos a todas as proposições simples, cada composta tem valor determinado.

**Revisão rápida:** Condicional: falso só em V→F. Bicondicional: verdadeiro se os valores coincidem. Disjunção: falsa só em F∨F.

## 14. AUT-000074 — Tautologia, contradição e contingência

*Questão autoral — estilo Cesgranrio.* · item 8.8 · Média · gabarito **E**

**I:** é falsa quando p ou q é verdadeira e a conjunção é falsa (por exemplo, p = V e q = F) e é verdadeira quando p = q = V: **contingência**. **II:** (p → q) exige que não ocorra p ∧ ¬q, mas a segunda parte exige exatamente p ∧ ¬q: nunca é verdadeira, **contradição**. **III:** se p ∧ q é verdadeira, p ∨ q também é: o condicional nunca é falso, **tautologia**.

- **A)** Incorreta. A fórmula I não é tautologia (é falsa para p = V e q = F) e a III não é contingência (nunca é falsa).
- **B)** Incorreta. A fórmula II não é tautologia (nunca é verdadeira) e a III não é contradição.
- **C)** Incorreta. A fórmula I não é contradição (é verdadeira para p = q = V) e a II não é contingência.
- **D)** Incorreta. A fórmula I não é tautologia, e a III não é contradição (é sempre verdadeira).
- **E)** Correta. I: contingência; II: contradição; III: tautologia.

**Revisão rápida:** Tabela com 2ⁿ linhas. Tautologia (todas V), contradição (todas F), contingência (misto).

## 15. OFI-000116 — Valor lógico de proposições compostas

*Questão oficial — Fundação Cesgranrio, Petrobras PSP RH 2017.2, Prova 3, questão 68.* · item 8.8 · Média · gabarito **E**

Uma condicional só é falsa com **antecedente V e consequente F**: ~p = V e ~q = F, logo **p = F** e **q = V**. Então p ˅ ~q = F ˅ F = **F**. Entre as opções, só **p ˄ q = F ˄ V = F** tem o mesmo valor; as demais resultam V.

- **A)** Incorreta. (~q) → p = F → F = V.
- **B)** Incorreta. (~q) → (~p) = F → V = V.
- **C)** Incorreta. (~p) ˅ (~q) = V ˅ F = V.
- **D)** Incorreta. (~p) ˄ q = V ˄ V = V.
- **E)** Correta. p ˄ q = F ˄ V = F: mesmo valor lógico.

**Revisão rápida:** (~p)→(~q) falsa ⇒ p = F, q = V.
