# Questões oficiais — m08-logica-matematica — gabaritos comentados (T04 — Transpetro 2023 (Prova 6) e 2018 (Prova 15))

## OFI-000033 — Argumento válido: conclusão a partir das premissas

*Questão oficial — Fundação Cesgranrio, Transpetro PSP/Terra 002/2023, Prova 6, questão 28.*

**Gabarito: D**

Para que todas as premissas sejam verdadeiras, a **Premissa 2** exige D verdadeiro e E falso. Na Premissa 1, ¬D ∨ E = F ∨ F = **F**; logo ¬A deve ser falso, isto é, **A é verdadeiro**. Na Premissa 3, ¬A é falso, então **B deve ser verdadeiro**. A conclusão que decorre de todas as premissas é **B**.

- **A)** Incorreta. ¬D contradiz a Premissa 2 (D verdadeiro).
- **B)** Incorreta. E é falso pela Premissa 2.
- **C)** Incorreta. ¬A é falso, pois A é verdadeiro.
- **D)** Correta. B é verdadeiro em toda situação em que as três premissas são verdadeiras: conclusão válida.
- **E)** Incorreta. ¬B é falso.

**Ponto de atenção:** Método: assuma as premissas verdadeiras, comece pela **conjunção** (premissa mais forte) e propague. Argumento válido = não há linha com premissas V e conclusão F.

**Revisão rápida:** Premissas V ⇒ D=V, E=F, A=V, B=V.

**Fonte:** Fundação Cesgranrio, Transpetro PSP/Terra 002/2023 (Edital nº 2), Análise de Sistemas — Processos de Negócios (2023), prova Prova 6, questão 28; gabarito: oficial (PDF de gabarito da Cesgranrio, alterado em 9/01/2024), conferido na T13.

## OFI-000034 — Consequência lógica de sentença quantificada

*Questão oficial — Fundação Cesgranrio, Transpetro PSP/Terra 002/2023, Prova 6, questão 35.*

**Gabarito: B**

Simbolicamente: ∀x (P(x) → (M(x) ∨ E(x))). A **contrapositiva** é ∀x (¬(M(x) ∨ E(x)) → ¬P(x)), ou seja, quem não é médico nem enfermeiro não é profissional do posto, que é a alternativa B.

- **A)** Incorreta. Confunde "ou" com "e"; não decorre.
- **B)** Correta. É a contrapositiva da sentença original, equivalente a ela.
- **C)** Incorreta. A sentença admite quem seja ambos; nada impede.
- **D)** Incorreta. Contradiz a sentença, que diz que todos são médicos ou enfermeiros.
- **E)** Incorreta. A sentença usa "ou" inclusivo e não proíbe quem seja ambos.

**Ponto de atenção:** Consequência lógica de ∀x(P→Q) ⇒ **contrapositiva** ∀x(¬Q→¬P). "Ou" é inclusivo, salvo indicação em contrário.

**Revisão rápida:** P→Q ≡ ¬Q→¬P.

**Fonte:** Fundação Cesgranrio, Transpetro PSP/Terra 002/2023 (Edital nº 2), Análise de Sistemas — Processos de Negócios (2023), prova Prova 6, questão 35; gabarito: oficial (PDF de gabarito da Cesgranrio, alterado em 9/01/2024), conferido na T13.

## OFI-000115 — Equivalência lógica: contrapositiva

*Questão oficial — Fundação Cesgranrio, Petrobras PSP RH 2017.2, Prova 3, questão 67.*

**Gabarito: C**

Sentença: **P → Q**, com P = "os dois são pares" e Q = "a soma é par". Sua equivalente é a **contrapositiva ¬Q → ¬P**: "a soma **não é par** (é ímpar) → **não** são os dois pares". Como todo inteiro é par ou ímpar, "não são os dois pares" equivale a "**algum é ímpar**".

- **A)** Incorreta. Mantém a forma "se...então" com termos trocados por ímpar; não é a contrapositiva (e é falsa: 3 + 5 = 8 é par).
- **B)** Incorreta. A frase é falsa (3 e 4 são ímpar/par e somam 7, mas 3 e 5 somam 8, par).
- **C)** Correta. É a contrapositiva, com ¬P escrito como "algum é ímpar" usando a premissa par/ímpar.
- **D)** Incorreta. Exige que os dois sejam ímpares, o que é mais forte que o negado (¬P é "algum é ímpar").
- **E)** Incorreta. É a recíproca (Q → P), não equivalente à original.

**Ponto de atenção:** **P→Q ≡ ¬Q→¬P**. A recíproca (Q→P) e a inversa (¬P→¬Q) **não** são equivalentes. A premissa "par ou ímpar" permite trocar "não par" por "ímpar".

**Revisão rápida:** Equivalente de P→Q: ¬Q→¬P.

**Fonte:** Fundação Cesgranrio, Petrobras PSP RH 2017.2 (prova de 18/03/2018), Analista de Sistemas Júnior — Processos de Negócio (2018), prova Prova 3, questão 67; gabarito: de espelho (PCI), fornecido pelo usuário; preliminar/definitivo não indicado; anulações não verificadas; não validado contra a banca.

## OFI-000116 — Valor lógico de proposições compostas

*Questão oficial — Fundação Cesgranrio, Petrobras PSP RH 2017.2, Prova 3, questão 68.*

**Gabarito: E**

Uma condicional só é falsa com **antecedente V e consequente F**: ~p = V e ~q = F, logo **p = F** e **q = V**. Então p ˅ ~q = F ˅ F = **F**. Entre as opções, só **p ˄ q = F ˄ V = F** tem o mesmo valor; as demais resultam V.

- **A)** Incorreta. (~q) → p = F → F = V.
- **B)** Incorreta. (~q) → (~p) = F → V = V.
- **C)** Incorreta. (~p) ˅ (~q) = V ˅ F = V.
- **D)** Incorreta. (~p) ˄ q = V ˄ V = V.
- **E)** Correta. p ˄ q = F ˄ V = F: mesmo valor lógico.

**Ponto de atenção:** Primeiro **descubra os valores de p e q** (condicional falsa fixa tudo), depois avalie cada opção.

**Revisão rápida:** (~p)→(~q) falsa ⇒ p = F, q = V.

**Fonte:** Fundação Cesgranrio, Petrobras PSP RH 2017.2 (prova de 18/03/2018), Analista de Sistemas Júnior — Processos de Negócio (2018), prova Prova 3, questão 68; gabarito: de espelho (PCI), fornecido pelo usuário; preliminar/definitivo não indicado; anulações não verificadas; não validado contra a banca.

## OFI-000117 — Argumento válido: conclusão que decorre das premissas

*Questão oficial — Fundação Cesgranrio, Petrobras PSP RH 2017.2, Prova 3, questão 69.*

**Gabarito: A**

Premissa 3: **r = V e s = V**, logo (~r) ˅ (~s) = F. Pela premissa 1, p → F exige **p = F**. Na premissa 2, com p = F: (p ˅ ~q) = ~q deve ser V, então **q = F**; e (q ˅ ~p) = V ˅ ... = V. Logo p = F e q = F, e a conclusão que decorre é **~(p ˅ q)** (V).

- **A)** Correta. Com p = F e q = F, p ˅ q = F e ~(p ˅ q) = V: decorre das premissas.
- **B)** Incorreta. (~q) ˄ p exige p = V, mas p = F.
- **C)** Incorreta. (~p) ˄ q exige q = V, mas q = F.
- **D)** Incorreta. p ˄ q exige p = V.
- **E)** Incorreta. p ˅ q é F.

**Ponto de atenção:** Método: **premissa mais simples (conjunção)** → propague valores → verifique qual conclusão é verdadeira **no único modelo**.

**Revisão rápida:** Único modelo: r, s verdadeiros; p, q falsos.

**Fonte:** Fundação Cesgranrio, Petrobras PSP RH 2017.2 (prova de 18/03/2018), Analista de Sistemas Júnior — Processos de Negócio (2018), prova Prova 3, questão 69; gabarito: de espelho (PCI), fornecido pelo usuário; preliminar/definitivo não indicado; anulações não verificadas; não validado contra a banca.

## OFI-000118 — Regras de inferência de um argumento

*Questão oficial — Fundação Cesgranrio, Petrobras PSP RH 2017.2, Prova 3, questão 70.*

**Gabarito: D**

Da premissa 1 e da premissa 2 (P verdadeiro, logo ~P falso), por **Modus Tollens** (de X → Y e ~Y conclui-se ~X) obtém-se **~[(~A) ˄ (~G)]**. Pela **Lei de De Morgan**, ~[(~A) ˄ (~G)] ≡ **A ˅ G**.

- **A)** Incorreta. Paradoxo e contingência não são regras de inferência.
- **B)** Incorreta. Contraposição é equivalência, e "absurdo" é redução ao absurdo; a dedução direta é por Modus Tollens.
- **C)** Incorreta. Modus Ponens (de X → Y e X conclui-se Y) não se aplica: P é o consequente negado.
- **D)** Correta. Modus Tollens e De Morgan produzem exatamente a conclusão.
- **E)** Incorreta. Silogismo conjuntivo e hipotético não se aplicam a essa estrutura.

**Ponto de atenção:** Modus Ponens: X→Y, X ⊢ Y. **Modus Tollens: X→Y, ~Y ⊢ ~X.** De Morgan: ~(A∧B) ≡ ~A ∨ ~B.

**Revisão rápida:** Tollens + De Morgan.

**Fonte:** Fundação Cesgranrio, Petrobras PSP RH 2017.2 (prova de 18/03/2018), Analista de Sistemas Júnior — Processos de Negócio (2018), prova Prova 3, questão 70; gabarito: de espelho (PCI), fornecido pelo usuário; preliminar/definitivo não indicado; anulações não verificadas; não validado contra a banca.
