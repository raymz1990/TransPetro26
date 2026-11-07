# Gabarito comentado — Módulo M08: Lógica Matemática

## Identificação
- Concurso: Processo Seletivo Público TRANSPETRO 2026.4 (Edital nº 04/2026)
- Ênfase: 5 — Análise de Sistemas: Processos de Negócios
- Banca: Fundação Cesgranrio
- Módulo: M08 — Lógica Matemática
- Total: 17 questões; status `validada` ou `em_revisao` (indicado em cada questão)
- Gerado em 2026-11-07 por `tools/build_notebooklm.py` a partir de `banco-questoes/`


### AUT-000071 — Gabarito: B
*Questão autoral — estilo Cesgranrio (criada pelo projeto; não é questão aplicada pela banca) · status: validada*

Seja p: "o alarme soa" e q: "o operador interrompe a bomba". A proposição é p → q. Um condicional só é falso quando o antecedente é verdadeiro e o consequente, falso. Portanto, **¬(p → q) ≡ p ∧ ¬q**: "o alarme soa **e** o operador **não** interrompe a bomba". A negação de um condicional **não** é outro condicional.

- A) Incorreta. É a **inversa** (¬p → ¬q), que não é equivalente ao condicional original nem à sua negação.
- B) Correta. ¬(p → q) ≡ p ∧ ¬q.
- C) Incorreta. É a **contrapositiva** (¬q → ¬p), equivalente ao condicional original, e não à sua negação.
- D) Incorreta. Corresponde a ¬p ∧ q, que não é equivalente a ¬(p → q); a negação mantém o antecedente verdadeiro.
- E) Incorreta. Corresponde a ¬p ∨ ¬q, que é a negação de p ∧ q (De Morgan), e não a de p → q.

### AUT-000072 — Gabarito: D
*Questão autoral — estilo Cesgranrio (criada pelo projeto; não é questão aplicada pela banca) · status: validada*

**Correção:** tudo o que o sistema **deriva** (⊢) é **consequência semântica** (⊨); no caso das fórmulas deriváveis sem premissas, são tautologias. **Completude:** toda **consequência semântica** é **derivável**; toda tautologia é um teorema. A **consistência** (não derivar uma fórmula e sua negação) e a **decidibilidade** (existência de um algoritmo) são propriedades distintas.

- A) Incorreta. Inverte as definições: tudo o que é derivado ser tautologia é correção; derivar toda tautologia é completude.
- B) Incorreta. São propriedades distintas (derivar só o válido × derivar todo o válido); evitar contradições é a consistência.
- C) Incorreta. Nunca derivar uma fórmula e sua negação é consistência; a completude é sobre derivar toda consequência semântica.
- D) Correta. Definições de correção e completude.
- E) Incorreta. A existência de um algoritmo de decisão é a decidibilidade, e não a correção.

### AUT-000073 — Gabarito: A
*Questão autoral — estilo Cesgranrio (criada pelo projeto; não é questão aplicada pela banca) · status: validada*

**X:** p → q = V → F = F; F ∨ r = F ∨ V = **V**. **Y:** p ∧ q = V ∧ F = F; ¬(p ∧ q) = V; r ↔ q = V ↔ F = F; V → F = **F**. Logo, X é verdadeira e Y é falsa.

- A) Correta. X = V e Y = F.
- B) Incorreta. Y é falsa: o antecedente ¬(p ∧ q) é verdadeiro, mas o consequente r ↔ q é falso (V ↔ F).
- C) Incorreta. X é verdadeira, pois r é verdadeira e a disjunção basta; Y é falsa, e não verdadeira.
- D) Incorreta. X é verdadeira: mesmo com p → q falso, r verdadeira torna a disjunção verdadeira.
- E) Incorreta. Com valores lógicos atribuídos a todas as proposições simples, cada composta tem valor determinado.

### AUT-000074 — Gabarito: E
*Questão autoral — estilo Cesgranrio (criada pelo projeto; não é questão aplicada pela banca) · status: validada*

**I:** é falsa quando p ou q é verdadeira e a conjunção é falsa (por exemplo, p = V e q = F) e é verdadeira quando p = q = V: **contingência**. **II:** (p → q) exige que não ocorra p ∧ ¬q, mas a segunda parte exige exatamente p ∧ ¬q: nunca é verdadeira, **contradição**. **III:** se p ∧ q é verdadeira, p ∨ q também é: o condicional nunca é falso, **tautologia**.

- A) Incorreta. A fórmula I não é tautologia (é falsa para p = V e q = F) e a III não é contingência (nunca é falsa).
- B) Incorreta. A fórmula II não é tautologia (nunca é verdadeira) e a III não é contradição.
- C) Incorreta. A fórmula I não é contradição (é verdadeira para p = q = V) e a II não é contingência.
- D) Incorreta. A fórmula I não é tautologia, e a III não é contradição (é sempre verdadeira).
- E) Correta. I: contingência; II: contradição; III: tautologia.

### AUT-000075 — Gabarito: C
*Questão autoral — estilo Cesgranrio (criada pelo projeto; não é questão aplicada pela banca) · status: validada*

Um argumento é **válido** quando não existe valoração com **premissas verdadeiras e conclusão falsa**. **C** tem a forma do **modus tollens** (p → q; ¬q ⊢ ¬p), válida. **A** é **afirmação do consequente** (inválida). **B** é **negação do antecedente** (inválida). **D** usa uma disjunção **inclusiva**: "há vazamento" não exclui a falha elétrica (inválido). **E** é a forma (p → r) ∧ (q → r), r ⊢ p ∨ q, que também é uma afirmação do consequente (inválida). Todas as conferências foram feitas por enumeração das valorações.

- A) Incorreta. A forma é afirmação do consequente (p → q; q ⊢ p), inválida: o alarme pode soar por outro motivo, sem vazamento.
- B) Incorreta. A negação do antecedente (p → q; ¬p ⊢ ¬q) é falácia: o alarme pode soar por outro motivo mesmo sem vazamento.
- C) Correta. Modus tollens: p → q; ¬q ⊢ ¬p.
- D) Incorreta. O silogismo disjuntivo válido exige a negação de um dos termos (p ∨ q; ¬p ⊢ q); afirmar um termo não permite negar o outro, pois a disjunção é inclusiva.
- E) Incorreta. A forma não é o dilema construtivo (que exigiria p ∨ q como premissa e concluiria r); aqui se conclui a causa a partir do efeito, o que é uma afirmação do consequente.

### AUT-000076 — Gabarito: D
*Questão autoral — estilo Cesgranrio (criada pelo projeto; não é questão aplicada pela banca) · status: validada*

Seja p: "a carga é perigosa" e q: "a carga é inspecionada". A proposição é p → q, equivalente à sua **contrapositiva**, ¬q → ¬p: "se a carga não é inspecionada, então ela não é perigosa". Também é equivalente a ¬p ∨ q. A conversa (q → p) e a inversa (¬p → ¬q) **não** são equivalentes ao condicional.

- A) Incorreta. É a **conversa** (q → p), que não é equivalente a p → q.
- B) Incorreta. É a **inversa** (¬p → ¬q), equivalente à conversa, e não ao condicional.
- C) Incorreta. É p ∧ ¬q, a **negação** do condicional, e não uma proposição equivalente a ele.
- D) Correta. Contrapositiva: ¬q → ¬p.
- E) Incorreta. É ¬p ∨ ¬q, equivalente a ¬(p ∧ q), e não a p → q (que equivale a ¬p ∨ q).

### AUT-000077 — Gabarito: A
*Questão autoral — estilo Cesgranrio (criada pelo projeto; não é questão aplicada pela banca) · status: validada*

A negação de **∀x P(x)** é **∃x ¬P(x)**. Assim, ¬∀x (C(x) → S(x)) ≡ ∃x ¬(C(x) → S(x)) ≡ **∃x (C(x) ∧ ¬S(x))**: "existe equipamento crítico que não possui sensor". A negação de "todos" não é "nenhum".

- A) Correta. ∃x (C(x) ∧ ¬S(x)).
- B) Incorreta. "Nenhum equipamento crítico possui sensor" é ∀x (C(x) → ¬S(x)), mais forte que a negação; a negação de "todos" é "algum não".
- C) Incorreta. "Todo equipamento crítico não possui sensor" tem o mesmo sentido da alternativa B (∀x (C(x) → ¬S(x))) e afirma mais do que a negação exige.
- D) Incorreta. Trata de equipamento **não** crítico; o que nega a sentença é a existência de um equipamento crítico sem sensor.
- E) Incorreta. Um equipamento crítico com sensor é compatível com a sentença original; não a nega.

### AUT-000078 — Gabarito: C
*Questão autoral — estilo Cesgranrio (criada pelo projeto; não é questão aplicada pela banca) · status: validada*

Se existe um supervisor de **todos** (II), então **todo** técnico tem **algum** supervisor (I): II ⇒ I. A recíproca é falsa: cada técnico pode ter o seu próprio supervisor, sem que um único seja supervisor de todos (por exemplo, dois técnicos e dois supervisores, cada um supervisionando um técnico). Quantificadores de **tipos diferentes não comutam**.

- A) Incorreta. A ordem de ∀ e ∃ altera o significado: "cada um tem um" é mais fraco que "um para todos".
- B) Incorreta. Inverte a implicação: II implica I, e não o contrário.
- C) Correta. II ⇒ I, mas I ⇏ II.
- D) Incorreta. Há implicação de II para I; a vinculação existe em um sentido.
- E) Incorreta. A negação de I seria ∃x ∀y ¬S(y, x); II não é a negação de I (pode haver modelos em que ambas são verdadeiras).

### AUT-000079 — Gabarito: E
*Questão autoral — estilo Cesgranrio (criada pelo projeto; não é questão aplicada pela banca) · status: validada*

Pelas regras de formação: toda letra sentencial é fórmula; se A é fórmula, ¬A é fórmula; se A e B são fórmulas, (A ∧ B), (A ∨ B) e (A → B) são fórmulas; **nada mais** é fórmula. A expressão **((p ∧ q) → ¬r)** é construída por essas regras: (p ∧ q) é fórmula; ¬r é fórmula; o condicional entre elas é fórmula.

- A) Incorreta. Tem dois conectivos binários seguidos (∧ ∨), sem que haja fórmula entre eles.
- B) Incorreta. Tem parênteses desbalanceados (abre e não fecha).
- C) Incorreta. A disjunção está sem o segundo argumento (falta uma fórmula depois de ∨).
- D) Incorreta. Faltam o conectivo entre p e q; duas letras justapostas não formam fórmula.
- E) Correta. Construída pelas regras: ¬ aplicado a r; ∧ entre p e q; → entre as duas fórmulas.

### AUT-000080 — Gabarito: B
*Questão autoral — estilo Cesgranrio (criada pelo projeto; não é questão aplicada pela banca) · status: validada*

Com **n** letras sentenciais há **2ⁿ** valorações; com 5 letras, **2⁵ = 32** (no máximo 32 avaliações: uma linha falsa já mostra que a fórmula não é tautologia). Como o número de valorações é **finito** e cada avaliação é um cálculo finito, o método **sempre termina**: a lógica sentencial é **decidível**. A **lógica de predicados** de primeira ordem, por sua vez, é **indecidível** (semidecidível).

- A) Incorreta. O número de valorações é 2⁵ = 32, e não 5 × 2 = 10 (as escolhas de cada letra se combinam).
- B) Correta. 2⁵ = 32 valorações; o procedimento sempre termina; a lógica sentencial é decidível.
- C) Incorreta. O total é 2⁵ = 32, e não 5²; além disso, o procedimento sempre termina, pois o número de valorações é finito.
- D) Incorreta. Para ser tautologia, a fórmula deve ser verdadeira em todas as valorações, e não em apenas uma.
- E) Incorreta. A lógica sentencial é decidível; a indecidibilidade é característica da lógica de predicados de primeira ordem.

### AUT-000112 — Gabarito: C
*Questão autoral — estilo Cesgranrio (criada pelo projeto; não é questão aplicada pela banca) · status: em_revisao*

Uma conjunção só é falsa se **ao menos um** conjunto é falso. Em **p = V, q = V, r = F**: p → q = V, mas q → r = (V → F) = **F**; logo a conjunção é F. Nas demais: A (V∧V = V); B (V∧V = V); D (V∧V = V); E (V∧V = V).

- A) Incorreta. p→q = V e q→r = V; fórmula V.
- B) Incorreta. Antecedentes falsos tornam as duas condicionais verdadeiras; fórmula V.
- C) Correta. q → r = V → F = F; fórmula F.
- D) Incorreta. p→q = V (antecedente falso) e q→r = V; fórmula V.
- E) Incorreta. p→q = V e q→r = V (antecedente falso); fórmula V.

### OFI-000033 — Gabarito: D
*Oficial — Fundação Cesgranrio, Transpetro PSP/Terra 002/2023 (Edital nº 2), Análise de Sistemas — Processos de Negócios, 2023, Prova 6, questão 28 (gabarito: oficial (PDF de gabarito da Cesgranrio, alterado em 9/01/2024), conferido na T13) · status: em_revisao*

Para que todas as premissas sejam verdadeiras, a **Premissa 2** exige D verdadeiro e E falso. Na Premissa 1, ¬D ∨ E = F ∨ F = **F**; logo ¬A deve ser falso, isto é, **A é verdadeiro**. Na Premissa 3, ¬A é falso, então **B deve ser verdadeiro**. A conclusão que decorre de todas as premissas é **B**.

- A) Incorreta. ¬D contradiz a Premissa 2 (D verdadeiro).
- B) Incorreta. E é falso pela Premissa 2.
- C) Incorreta. ¬A é falso, pois A é verdadeiro.
- D) Correta. B é verdadeiro em toda situação em que as três premissas são verdadeiras: conclusão válida.
- E) Incorreta. ¬B é falso.

### OFI-000034 — Gabarito: B
*Oficial — Fundação Cesgranrio, Transpetro PSP/Terra 002/2023 (Edital nº 2), Análise de Sistemas — Processos de Negócios, 2023, Prova 6, questão 35 (gabarito: oficial (PDF de gabarito da Cesgranrio, alterado em 9/01/2024), conferido na T13) · status: em_revisao*

Simbolicamente: ∀x (P(x) → (M(x) ∨ E(x))). A **contrapositiva** é ∀x (¬(M(x) ∨ E(x)) → ¬P(x)), ou seja, quem não é médico nem enfermeiro não é profissional do posto, que é a alternativa B.

- A) Incorreta. Confunde "ou" com "e"; não decorre.
- B) Correta. É a contrapositiva da sentença original, equivalente a ela.
- C) Incorreta. A sentença admite quem seja ambos; nada impede.
- D) Incorreta. Contradiz a sentença, que diz que todos são médicos ou enfermeiros.
- E) Incorreta. A sentença usa "ou" inclusivo e não proíbe quem seja ambos.

### OFI-000115 — Gabarito: C
*Oficial — Fundação Cesgranrio, Petrobras PSP RH 2017.2 (prova de 18/03/2018), Analista de Sistemas Júnior — Processos de Negócio, 2018, Prova 3, questão 67 (gabarito: de espelho (PCI), fornecido pelo usuário; preliminar/definitivo não indicado; anulações não verificadas; não validado contra a banca) · status: em_revisao*

Sentença: **P → Q**, com P = "os dois são pares" e Q = "a soma é par". Sua equivalente é a **contrapositiva ¬Q → ¬P**: "a soma **não é par** (é ímpar) → **não** são os dois pares". Como todo inteiro é par ou ímpar, "não são os dois pares" equivale a "**algum é ímpar**".

- A) Incorreta. Mantém a forma "se...então" com termos trocados por ímpar; não é a contrapositiva (e é falsa: 3 + 5 = 8 é par).
- B) Incorreta. A frase é falsa (3 e 4 são ímpar/par e somam 7, mas 3 e 5 somam 8, par).
- C) Correta. É a contrapositiva, com ¬P escrito como "algum é ímpar" usando a premissa par/ímpar.
- D) Incorreta. Exige que os dois sejam ímpares, o que é mais forte que o negado (¬P é "algum é ímpar").
- E) Incorreta. É a recíproca (Q → P), não equivalente à original.

### OFI-000116 — Gabarito: E
*Oficial — Fundação Cesgranrio, Petrobras PSP RH 2017.2 (prova de 18/03/2018), Analista de Sistemas Júnior — Processos de Negócio, 2018, Prova 3, questão 68 (gabarito: de espelho (PCI), fornecido pelo usuário; preliminar/definitivo não indicado; anulações não verificadas; não validado contra a banca) · status: em_revisao*

Uma condicional só é falsa com **antecedente V e consequente F**: ~p = V e ~q = F, logo **p = F** e **q = V**. Então p ˅ ~q = F ˅ F = **F**. Entre as opções, só **p ˄ q = F ˄ V = F** tem o mesmo valor; as demais resultam V.

- A) Incorreta. (~q) → p = F → F = V.
- B) Incorreta. (~q) → (~p) = F → V = V.
- C) Incorreta. (~p) ˅ (~q) = V ˅ F = V.
- D) Incorreta. (~p) ˄ q = V ˄ V = V.
- E) Correta. p ˄ q = F ˄ V = F: mesmo valor lógico.

### OFI-000117 — Gabarito: A
*Oficial — Fundação Cesgranrio, Petrobras PSP RH 2017.2 (prova de 18/03/2018), Analista de Sistemas Júnior — Processos de Negócio, 2018, Prova 3, questão 69 (gabarito: de espelho (PCI), fornecido pelo usuário; preliminar/definitivo não indicado; anulações não verificadas; não validado contra a banca) · status: em_revisao*

Premissa 3: **r = V e s = V**, logo (~r) ˅ (~s) = F. Pela premissa 1, p → F exige **p = F**. Na premissa 2, com p = F: (p ˅ ~q) = ~q deve ser V, então **q = F**; e (q ˅ ~p) = V ˅ ... = V. Logo p = F e q = F, e a conclusão que decorre é **~(p ˅ q)** (V).

- A) Correta. Com p = F e q = F, p ˅ q = F e ~(p ˅ q) = V: decorre das premissas.
- B) Incorreta. (~q) ˄ p exige p = V, mas p = F.
- C) Incorreta. (~p) ˄ q exige q = V, mas q = F.
- D) Incorreta. p ˄ q exige p = V.
- E) Incorreta. p ˅ q é F.

### OFI-000118 — Gabarito: D
*Oficial — Fundação Cesgranrio, Petrobras PSP RH 2017.2 (prova de 18/03/2018), Analista de Sistemas Júnior — Processos de Negócio, 2018, Prova 3, questão 70 (gabarito: de espelho (PCI), fornecido pelo usuário; preliminar/definitivo não indicado; anulações não verificadas; não validado contra a banca) · status: em_revisao*

Da premissa 1 e da premissa 2 (P verdadeiro, logo ~P falso), por **Modus Tollens** (de X → Y e ~Y conclui-se ~X) obtém-se **~[(~A) ˄ (~G)]**. Pela **Lei de De Morgan**, ~[(~A) ˄ (~G)] ≡ **A ˅ G**.

- A) Incorreta. Paradoxo e contingência não são regras de inferência.
- B) Incorreta. Contraposição é equivalência, e "absurdo" é redução ao absurdo; a dedução direta é por Modus Tollens.
- C) Incorreta. Modus Ponens (de X → Y e X conclui-se Y) não se aplica: P é o consequente negado.
- D) Correta. Modus Tollens e De Morgan produzem exatamente a conclusão.
- E) Incorreta. Silogismo conjuntivo e hipotético não se aplicam a essa estrutura.
