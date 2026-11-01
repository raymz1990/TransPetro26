# Banco de questões — Módulo 8: Lógica Matemática (lote piloto, gabaritos comentados)

**Tipo:** questões **autorais** — **Questão autoral — estilo Cesgranrio.** **Status:** validada 10.

## Quadro de gabaritos

| Questão | ID | Gabarito | Item do edital | Dificuldade | Habilidade | Tipo | Status |
|---|---|---|---|---|---|---|---|
| 1 | AUT-000071 | B | 8.1 | Fácil | Aplicação | Lógica | Validada |
| 2 | AUT-000072 | D | 8.6 | Média | Compreensão | Conceitual | Validada |
| 3 | AUT-000073 | A | 8.8 | Média | Resolução de problemas | Cálculo | Validada |
| 4 | AUT-000074 | E | 8.8 | Média | Análise | Lógica | Validada |
| 5 | AUT-000075 | C | 8.2 | Difícil | Análise | Lógica | Validada |
| 6 | AUT-000076 | D | 8.3 | Média | Aplicação | Lógica | Validada |
| 7 | AUT-000077 | A | 8.4 | Média | Aplicação | Lógica | Validada |
| 8 | AUT-000078 | C | 8.4 | Difícil | Análise | Lógica | Validada |
| 9 | AUT-000079 | E | 8.5 | Fácil | Memorização | Lógica | Validada |
| 10 | AUT-000080 | B | 8.7 | Fácil | Compreensão | Cenário | Validada |

---

## Questão 1 — AUT-000071

**AUT-000071** · Negação de proposição condicional · item 8.1 · Fácil · Aplicação

*Questão autoral — estilo Cesgranrio.*

Considere a proposição: "Se o alarme soa, então o operador interrompe a bomba."  
  
A negação lógica dessa proposição é

(A) Se o alarme não soa, então o operador não interrompe a bomba.  
(B) O alarme soa e o operador não interrompe a bomba.  
(C) Se o operador não interrompe a bomba, então o alarme não soa.  
(D) O alarme não soa e o operador interrompe a bomba.  
(E) O alarme não soa ou o operador não interrompe a bomba.  

### A. Gabarito

**B**

### B. Resolução comentada

Seja p: "o alarme soa" e q: "o operador interrompe a bomba". A proposição é p → q. Um condicional só é falso quando o antecedente é verdadeiro e o consequente, falso. Portanto, **¬(p → q) ≡ p ∧ ¬q**: "o alarme soa **e** o operador **não** interrompe a bomba". A negação de um condicional **não** é outro condicional.

### C. Análise das alternativas

- **(A)** Incorreta. É a **inversa** (¬p → ¬q), que não é equivalente ao condicional original nem à sua negação.
- **(B)** Correta. ¬(p → q) ≡ p ∧ ¬q.
- **(C)** Incorreta. É a **contrapositiva** (¬q → ¬p), equivalente ao condicional original, e não à sua negação.
- **(D)** Incorreta. Corresponde a ¬p ∧ q, que não é equivalente a ¬(p → q); a negação mantém o antecedente verdadeiro.
- **(E)** Incorreta. Corresponde a ¬p ∨ ¬q, que é a negação de p ∧ q (De Morgan), e não a de p → q.

### D. Fundamentação teórica

- **Módulo:** M08 — Lógica matemática
- **Assunto:** Sentido lógico-matemático dos conectivos: negação do condicional
- **Item do edital:** 8.1 (E5-072)
- **Arquivo de teoria:** `conteudo/08-logica-matematica/01-proposicoes-e-conectivos.md`
- **Referência:** Material teórico do projeto; equivalências, tabelas e formas de argumento conferidas por script na produção do M08; resultados metateóricos e livros de memória (parte confirmada em Wikipedia/SEP na revisão).

### E. Ponto de atenção para a prova

**Negar o condicional**: **mantém o antecedente e nega o consequente** (p ∧ ¬q). Não troque por inversa, conversa ou contrapositiva.

### F. Revisão rápida

¬(p → q) ≡ p ∧ ¬q. Contrapositiva ≡ condicional. Conversa e inversa não são equivalentes ao condicional.

### G. Tags

`m08` · `conectivos` · `negacao` · `condicional` · `item-8.1` · `facil` · `aplicacao` · `logica` · `autoral`

**Verificação do gabarito:** Conferido por enumeração de todas as valorações (script em Python).  
**Status de validação:** `validada`  
**Validação:** Aprovada pelo usuário em 2026-11-01 (lote piloto do M08, após revisão independente por resolução às cegas); sem revisão por terceiros; ressalvas: interpretação dos itens 8.5, 8.6 e 8.9 a confirmar; item 8.9 sem questão principal.

---

## Questão 2 — AUT-000072

**AUT-000072** · Sistemas dedutivos: correção e completude · item 8.6 · Média · Compreensão

*Questão autoral — estilo Cesgranrio.*

Ao estudar sistemas dedutivos para a lógica sentencial clássica, um estudante registra afirmações sobre as propriedades de correção (soundness) e de completude (completeness).  
  
A afirmação correta é:

(A) Um sistema é completo se toda fórmula que ele deriva é tautologia, e correto se ele deriva toda tautologia existente.  
(B) Correção e completude são sinônimos: ambas significam que o sistema não deriva contradições em nenhuma hipótese.  
(C) A completude garante que o sistema nunca derive uma fórmula e a sua negação, isto é, que ele seja consistente.  
(D) Um sistema é correto se tudo o que deriva é consequência semântica, e completo se toda consequência semântica é derivável.  
(E) A correção significa que existe um algoritmo que decide, em tempo finito, se uma fórmula qualquer é derivável.  

### A. Gabarito

**D**

### B. Resolução comentada

**Correção:** tudo o que o sistema **deriva** (⊢) é **consequência semântica** (⊨); no caso das fórmulas deriváveis sem premissas, são tautologias. **Completude:** toda **consequência semântica** é **derivável**; toda tautologia é um teorema. A **consistência** (não derivar uma fórmula e sua negação) e a **decidibilidade** (existência de um algoritmo) são propriedades distintas.

### C. Análise das alternativas

- **(A)** Incorreta. Inverte as definições: tudo o que é derivado ser tautologia é correção; derivar toda tautologia é completude.
- **(B)** Incorreta. São propriedades distintas (derivar só o válido × derivar todo o válido); evitar contradições é a consistência.
- **(C)** Incorreta. Nunca derivar uma fórmula e sua negação é consistência; a completude é sobre derivar toda consequência semântica.
- **(D)** Correta. Definições de correção e completude.
- **(E)** Incorreta. A existência de um algoritmo de decisão é a decidibilidade, e não a correção.

### D. Fundamentação teórica

- **Módulo:** M08 — Lógica matemática
- **Assunto:** Sistemas dedutivos: correção, completude e propriedades
- **Item do edital:** 8.6 (E5-077)
- **Arquivo de teoria:** `conteudo/08-logica-matematica/06-formulas-e-sistemas-dedutivos.md`
- **Referência:** Material teórico do projeto; equivalências, tabelas e formas de argumento conferidas por script na produção do M08; resultados metateóricos e livros de memória (parte confirmada em Wikipedia/SEP na revisão). Correção e completude conferidas em Wikipedia, "Tautology (logic)", na revisão do M08. Interpretação do item 8.6 a confirmar.

### E. Ponto de atenção para a prova

**Correção** = só deriva o válido (⊢ ⇒ ⊨). **Completude** = deriva todo o válido (⊨ ⇒ ⊢). **Consistência** = não deriva contradição. **Decidibilidade** = existe algoritmo.

### F. Revisão rápida

Correção: ⊢ ⇒ ⊨. Completude: ⊨ ⇒ ⊢. Sentencial clássica: correta, completa e decidível. LPO: correta, completa e indecidível.

### G. Tags

`m08` · `sistemas-dedutivos` · `correcao` · `completude` · `item-8.6` · `media` · `compreensao` · `conceitual` · `autoral`

**Verificação do gabarito:** Sem execução (questão conceitual); definições conferidas no arquivo de teoria e em fonte secundária (revisão do M08).  
**Status de validação:** `validada`  
**Validação:** Aprovada pelo usuário em 2026-11-01 (lote piloto do M08, após revisão independente por resolução às cegas); sem revisão por terceiros; ressalvas: interpretação dos itens 8.5, 8.6 e 8.9 a confirmar; item 8.9 sem questão principal.

---

## Questão 3 — AUT-000073

**AUT-000073** · Valores-verdade de proposições compostas · item 8.8 · Média · Resolução de problemas

*Questão autoral — estilo Cesgranrio.*

Sejam as proposições simples p, q e r, com valores lógicos p = verdadeiro, q = falso e r = verdadeiro. Considere as proposições compostas:  
  
X: (p → q) ∨ r  
Y: ¬(p ∧ q) → (r ↔ q)  
  
Os valores lógicos de X e de Y são, respectivamente,

(A) verdadeiro e falso.  
(B) verdadeiro e verdadeiro.  
(C) falso e verdadeiro.  
(D) falso e falso.  
(E) indeterminado e falso.  

### A. Gabarito

**A**

### B. Resolução comentada

**X:** p → q = V → F = F; F ∨ r = F ∨ V = **V**. **Y:** p ∧ q = V ∧ F = F; ¬(p ∧ q) = V; r ↔ q = V ↔ F = F; V → F = **F**. Logo, X é verdadeira e Y é falsa.

### C. Análise das alternativas

- **(A)** Correta. X = V e Y = F.
- **(B)** Incorreta. Y é falsa: o antecedente ¬(p ∧ q) é verdadeiro, mas o consequente r ↔ q é falso (V ↔ F).
- **(C)** Incorreta. X é verdadeira, pois r é verdadeira e a disjunção basta; Y é falsa, e não verdadeira.
- **(D)** Incorreta. X é verdadeira: mesmo com p → q falso, r verdadeira torna a disjunção verdadeira.
- **(E)** Incorreta. Com valores lógicos atribuídos a todas as proposições simples, cada composta tem valor determinado.

### D. Fundamentação teórica

- **Módulo:** M08 — Lógica matemática
- **Assunto:** Valores-verdade: avaliação de proposições compostas
- **Item do edital:** 8.8 (E5-079) · itens secundários: 8.9
- **Arquivo de teoria:** `conteudo/08-logica-matematica/02-tabelas-verdade.md`
- **Referência:** Material teórico do projeto; equivalências, tabelas e formas de argumento conferidas por script na produção do M08; resultados metateóricos e livros de memória (parte confirmada em Wikipedia/SEP na revisão). Relação secundária com o item 8.9 (função de avaliação).

### E. Ponto de atenção para a prova

Avalie **de dentro para fora**. **p → q** só é falso em **V → F**. **p ↔ q** é V quando os valores são **iguais**.

### F. Revisão rápida

Condicional: falso só em V→F. Bicondicional: verdadeiro se os valores coincidem. Disjunção: falsa só em F∨F.

### G. Tags

`m08` · `valores-verdade` · `avaliacao` · `item-8.8` · `item-8.9` · `media` · `resolucao-de-problemas` · `calculo` · `autoral`

**Verificação do gabarito:** Valores calculados em Python: X = verdadeiro; Y = falso.  
**Status de validação:** `validada`  
**Validação:** Aprovada pelo usuário em 2026-11-01 (lote piloto do M08, após revisão independente por resolução às cegas); sem revisão por terceiros; ressalvas: interpretação dos itens 8.5, 8.6 e 8.9 a confirmar; item 8.9 sem questão principal.

---

## Questão 4 — AUT-000074

**AUT-000074** · Tautologia, contradição e contingência · item 8.8 · Média · Análise

*Questão autoral — estilo Cesgranrio.*

Considere as fórmulas a seguir, em que p e q são proposições simples.  
  
I – (p ∨ q) → (p ∧ q)  
II – (p → q) ∧ (p ∧ ¬q)  
III – (p ∧ q) → (p ∨ q)  
  
As fórmulas I, II e III são classificadas, respectivamente, como

(A) tautologia, contradição e contingência.  
(B) contingência, tautologia e contradição.  
(C) contradição, contingência e tautologia.  
(D) tautologia, contingência e contradição.  
(E) contingência, contradição e tautologia.  

### A. Gabarito

**E**

### B. Resolução comentada

**I:** é falsa quando p ou q é verdadeira e a conjunção é falsa (por exemplo, p = V e q = F) e é verdadeira quando p = q = V: **contingência**. **II:** (p → q) exige que não ocorra p ∧ ¬q, mas a segunda parte exige exatamente p ∧ ¬q: nunca é verdadeira, **contradição**. **III:** se p ∧ q é verdadeira, p ∨ q também é: o condicional nunca é falso, **tautologia**.

### C. Análise das alternativas

- **(A)** Incorreta. A fórmula I não é tautologia (é falsa para p = V e q = F) e a III não é contingência (nunca é falsa).
- **(B)** Incorreta. A fórmula II não é tautologia (nunca é verdadeira) e a III não é contradição.
- **(C)** Incorreta. A fórmula I não é contradição (é verdadeira para p = q = V) e a II não é contingência.
- **(D)** Incorreta. A fórmula I não é tautologia, e a III não é contradição (é sempre verdadeira).
- **(E)** Correta. I: contingência; II: contradição; III: tautologia.

### D. Fundamentação teórica

- **Módulo:** M08 — Lógica matemática
- **Assunto:** Valores-verdade: classificação de fórmulas
- **Item do edital:** 8.8 (E5-079)
- **Arquivo de teoria:** `conteudo/08-logica-matematica/02-tabelas-verdade.md`
- **Referência:** Material teórico do projeto; equivalências, tabelas e formas de argumento conferidas por script na produção do M08; resultados metateóricos e livros de memória (parte confirmada em Wikipedia/SEP na revisão).

### E. Ponto de atenção para a prova

**Tautologia** = V sempre. **Contradição** = F sempre. **Contingência** = V e F. Use **redução ao absurdo**: tente tornar o condicional falso (antecedente V, consequente F).

### F. Revisão rápida

Tabela com 2ⁿ linhas. Tautologia (todas V), contradição (todas F), contingência (misto).

### G. Tags

`m08` · `tabela-verdade` · `tautologia` · `contradicao` · `contingencia` · `item-8.8` · `media` · `analise` · `logica` · `autoral`

**Verificação do gabarito:** Conferido por enumeração de todas as valorações (script em Python).  
**Status de validação:** `validada`  
**Validação:** Aprovada pelo usuário em 2026-11-01 (lote piloto do M08, após revisão independente por resolução às cegas); sem revisão por terceiros; ressalvas: interpretação dos itens 8.5, 8.6 e 8.9 a confirmar; item 8.9 sem questão principal.

---

## Questão 5 — AUT-000075

**AUT-000075** · Argumentos: validade · item 8.2 · Difícil · Análise

*Questão autoral — estilo Cesgranrio.*

Considere os cinco argumentos a seguir, nos quais as duas primeiras linhas são as premissas, e a terceira, a conclusão.  
  
A – Se há vazamento, o alarme soa. / O alarme soa. / Logo, há vazamento.  
B – Se há vazamento, o alarme soa. / Não há vazamento. / Logo, o alarme não soa.  
C – Se há vazamento, o alarme soa. / O alarme não soa. / Logo, não há vazamento.  
D – Há vazamento ou há falha elétrica (ou inclusivo). / Há vazamento. / Logo, não há falha elétrica.  
E – Se há vazamento, o alarme soa; se há falha elétrica, o alarme soa. / O alarme soa. / Logo, há vazamento ou há falha elétrica.  
  
O único argumento válido é o

(A) A, pois, soando o alarme, conclui-se a causa que o provoca.  
(B) B, pois, não havendo vazamento, conclui-se que o alarme não soa.  
(C) C, pois, não soando o alarme, conclui-se que não há vazamento.  
(D) D, pois, havendo vazamento, a premissa disjuntiva exclui a falha elétrica.  
(E) E, pois, soando o alarme, ao menos uma das duas causas deve ter ocorrido.  

### A. Gabarito

**C**

### B. Resolução comentada

Um argumento é **válido** quando não existe valoração com **premissas verdadeiras e conclusão falsa**. **C** tem a forma do **modus tollens** (p → q; ¬q ⊢ ¬p), válida. **A** é **afirmação do consequente** (inválida). **B** é **negação do antecedente** (inválida). **D** usa uma disjunção **inclusiva**: "há vazamento" não exclui a falha elétrica (inválido). **E** é a forma (p → r) ∧ (q → r), r ⊢ p ∨ q, que também é uma afirmação do consequente (inválida). Todas as conferências foram feitas por enumeração das valorações.

### C. Análise das alternativas

- **(A)** Incorreta. A forma é afirmação do consequente (p → q; q ⊢ p), inválida: o alarme pode soar por outro motivo, sem vazamento.
- **(B)** Incorreta. A negação do antecedente (p → q; ¬p ⊢ ¬q) é falácia: o alarme pode soar por outro motivo mesmo sem vazamento.
- **(C)** Correta. Modus tollens: p → q; ¬q ⊢ ¬p.
- **(D)** Incorreta. O silogismo disjuntivo válido exige a negação de um dos termos (p ∨ q; ¬p ⊢ q); afirmar um termo não permite negar o outro, pois a disjunção é inclusiva.
- **(E)** Incorreta. A forma não é o dilema construtivo (que exigiria p ∨ q como premissa e concluiria r); aqui se conclui a causa a partir do efeito, o que é uma afirmação do consequente.

### D. Fundamentação teórica

- **Módulo:** M08 — Lógica matemática
- **Assunto:** Argumentos: validade e formas de inferência
- **Item do edital:** 8.2 (E5-073)
- **Arquivo de teoria:** `conteudo/08-logica-matematica/03-argumentacao-logica.md`
- **Referência:** Material teórico do projeto; equivalências, tabelas e formas de argumento conferidas por script na produção do M08; resultados metateóricos e livros de memória (parte confirmada em Wikipedia/SEP na revisão).

### E. Ponto de atenção para a prova

Para **testar validade**, procure **contraexemplo** (premissas V e conclusão F). **Modus tollens** e **modus ponens** são válidos; **afirmar o consequente** e **negar o antecedente** são falácias.

### F. Revisão rápida

Válidos: modus ponens, modus tollens, silogismos hipotético e disjuntivo. Inválidos: afirmação do consequente; negação do antecedente.

### G. Tags

`m08` · `argumentos` · `validade` · `modus-tollens` · `falacias` · `item-8.2` · `dificil` · `analise` · `logica` · `autoral`

**Verificação do gabarito:** Conferido por enumeração de todas as valorações (script em Python). Apenas o argumento C é válido.  
**Status de validação:** `validada`  
**Validação:** Aprovada pelo usuário em 2026-11-01 (lote piloto do M08, após revisão independente por resolução às cegas); sem revisão por terceiros; ressalvas: interpretação dos itens 8.5, 8.6 e 8.9 a confirmar; item 8.9 sem questão principal.

---

## Questão 6 — AUT-000076

**AUT-000076** · Lógica sentencial: equivalência lógica do condicional · item 8.3 · Média · Aplicação

*Questão autoral — estilo Cesgranrio.*

Considere a proposição: "Se a carga é perigosa, então ela é inspecionada."  
  
Uma proposição logicamente equivalente a ela é

(A) Se a carga é inspecionada, então ela é perigosa.  
(B) Se a carga não é perigosa, então ela também não é inspecionada.  
(C) A carga é perigosa e não é inspecionada.  
(D) Se a carga não é inspecionada, então ela não é perigosa.  
(E) A carga não é perigosa ou não é inspecionada.  

### A. Gabarito

**D**

### B. Resolução comentada

Seja p: "a carga é perigosa" e q: "a carga é inspecionada". A proposição é p → q, equivalente à sua **contrapositiva**, ¬q → ¬p: "se a carga não é inspecionada, então ela não é perigosa". Também é equivalente a ¬p ∨ q. A conversa (q → p) e a inversa (¬p → ¬q) **não** são equivalentes ao condicional.

### C. Análise das alternativas

- **(A)** Incorreta. É a **conversa** (q → p), que não é equivalente a p → q.
- **(B)** Incorreta. É a **inversa** (¬p → ¬q), equivalente à conversa, e não ao condicional.
- **(C)** Incorreta. É p ∧ ¬q, a **negação** do condicional, e não uma proposição equivalente a ele.
- **(D)** Correta. Contrapositiva: ¬q → ¬p.
- **(E)** Incorreta. É ¬p ∨ ¬q, equivalente a ¬(p ∧ q), e não a p → q (que equivale a ¬p ∨ q).

### D. Fundamentação teórica

- **Módulo:** M08 — Lógica matemática
- **Assunto:** A lógica sentencial: equivalências
- **Item do edital:** 8.3 (E5-074) · itens secundários: 8.1
- **Arquivo de teoria:** `conteudo/08-logica-matematica/04-logica-proposicional.md`
- **Referência:** Material teórico do projeto; equivalências, tabelas e formas de argumento conferidas por script na produção do M08; resultados metateóricos e livros de memória (parte confirmada em Wikipedia/SEP na revisão). Relação secundária com o item 8.1.

### E. Ponto de atenção para a prova

Do condicional **p → q** são equivalentes: **¬q → ¬p** (contrapositiva) e **¬p ∨ q**. **Não** são: conversa (q → p), inversa (¬p → ¬q) e a negação (p ∧ ¬q).

### F. Revisão rápida

p → q ≡ ¬q → ¬p ≡ ¬p ∨ q. Conversa ≡ inversa, mas ≢ condicional.

### G. Tags

`m08` · `logica-sentencial` · `equivalencia` · `contrapositiva` · `item-8.3` · `item-8.1` · `media` · `aplicacao` · `logica` · `autoral`

**Verificação do gabarito:** Conferido por enumeração de todas as valorações (script em Python).  
**Status de validação:** `validada`  
**Validação:** Aprovada pelo usuário em 2026-11-01 (lote piloto do M08, após revisão independente por resolução às cegas); sem revisão por terceiros; ressalvas: interpretação dos itens 8.5, 8.6 e 8.9 a confirmar; item 8.9 sem questão principal.

---

## Questão 7 — AUT-000077

**AUT-000077** · Lógica de predicados: negação de sentenças quantificadas · item 8.4 · Média · Aplicação

*Questão autoral — estilo Cesgranrio.*

Considere a sentença: "Todo equipamento crítico possui sensor de monitoramento." Seja C(x): "x é equipamento crítico" e S(x): "x possui sensor de monitoramento", de modo que a sentença é ∀x (C(x) → S(x)).  
  
A negação dessa sentença é

(A) Existe equipamento crítico sem sensor de monitoramento.  
(B) Nenhum equipamento crítico possui sensor de monitoramento.  
(C) Todo equipamento crítico não possui sensor de monitoramento.  
(D) Existe equipamento não crítico que possui sensor de monitoramento.  
(E) Existe equipamento crítico que possui sensor de monitoramento.  

### A. Gabarito

**A**

### B. Resolução comentada

A negação de **∀x P(x)** é **∃x ¬P(x)**. Assim, ¬∀x (C(x) → S(x)) ≡ ∃x ¬(C(x) → S(x)) ≡ **∃x (C(x) ∧ ¬S(x))**: "existe equipamento crítico que não possui sensor". A negação de "todos" não é "nenhum".

### C. Análise das alternativas

- **(A)** Correta. ∃x (C(x) ∧ ¬S(x)).
- **(B)** Incorreta. "Nenhum equipamento crítico possui sensor" é ∀x (C(x) → ¬S(x)), mais forte que a negação; a negação de "todos" é "algum não".
- **(C)** Incorreta. "Todo equipamento crítico não possui sensor" tem o mesmo sentido da alternativa B (∀x (C(x) → ¬S(x))) e afirma mais do que a negação exige.
- **(D)** Incorreta. Trata de equipamento **não** crítico; o que nega a sentença é a existência de um equipamento crítico sem sensor.
- **(E)** Incorreta. Um equipamento crítico com sensor é compatível com a sentença original; não a nega.

### D. Fundamentação teórica

- **Módulo:** M08 — Lógica matemática
- **Assunto:** Lógica de predicados: negação de quantificadores
- **Item do edital:** 8.4 (E5-075)
- **Arquivo de teoria:** `conteudo/08-logica-matematica/05-logica-de-predicados.md`
- **Referência:** Material teórico do projeto; equivalências, tabelas e formas de argumento conferidas por script na produção do M08; resultados metateóricos e livros de memória (parte confirmada em Wikipedia/SEP na revisão). Negação conferida em domínios finitos.

### E. Ponto de atenção para a prova

**¬∀x ≡ ∃x¬**; **¬∃x ≡ ∀x¬**. Com **→** dentro do ∀: ¬(C → S) ≡ **C ∧ ¬S**. Cuidado: negar "todos" **não** dá "nenhum".

### F. Revisão rápida

¬∀x(C→S) ≡ ∃x(C ∧ ¬S). Traduzir: ∀ com →, ∃ com ∧.

### G. Tags

`m08` · `logica-de-predicados` · `quantificadores` · `negacao` · `item-8.4` · `media` · `aplicacao` · `logica` · `autoral`

**Verificação do gabarito:** Conferido por enumeração de interpretações em domínios finitos (tamanhos 1 a 3): apenas a alternativa A equivale à negação.  
**Status de validação:** `validada`  
**Validação:** Aprovada pelo usuário em 2026-11-01 (lote piloto do M08, após revisão independente por resolução às cegas); sem revisão por terceiros; ressalvas: interpretação dos itens 8.5, 8.6 e 8.9 a confirmar; item 8.9 sem questão principal.

---

## Questão 8 — AUT-000078

**AUT-000078** · Lógica de predicados: ordem dos quantificadores · item 8.4 · Difícil · Análise

*Questão autoral — estilo Cesgranrio.*

Em um domínio de pessoas, seja T(x): "x é técnico" e S(y, x): "y supervisiona x". Considere as sentenças:  
  
I – ∀x (T(x) → ∃y S(y, x)) ("todo técnico tem um supervisor")  
II – ∃y ∀x (T(x) → S(y, x)) ("existe um supervisor de todos os técnicos")  
  
A relação lógica entre I e II é:

(A) I e II são equivalentes, pois a ordem dos quantificadores não altera o significado.  
(B) I implica II, mas II não implica I.  
(C) II implica I, mas I não implica II.  
(D) Nenhuma das duas implica a outra.  
(E) II é a negação lógica de I.  

### A. Gabarito

**C**

### B. Resolução comentada

Se existe um supervisor de **todos** (II), então **todo** técnico tem **algum** supervisor (I): II ⇒ I. A recíproca é falsa: cada técnico pode ter o seu próprio supervisor, sem que um único seja supervisor de todos (por exemplo, dois técnicos e dois supervisores, cada um supervisionando um técnico). Quantificadores de **tipos diferentes não comutam**.

### C. Análise das alternativas

- **(A)** Incorreta. A ordem de ∀ e ∃ altera o significado: "cada um tem um" é mais fraco que "um para todos".
- **(B)** Incorreta. Inverte a implicação: II implica I, e não o contrário.
- **(C)** Correta. II ⇒ I, mas I ⇏ II.
- **(D)** Incorreta. Há implicação de II para I; a vinculação existe em um sentido.
- **(E)** Incorreta. A negação de I seria ∃x ∀y ¬S(y, x); II não é a negação de I (pode haver modelos em que ambas são verdadeiras).

### D. Fundamentação teórica

- **Módulo:** M08 — Lógica matemática
- **Assunto:** Lógica de predicados: ordem dos quantificadores
- **Item do edital:** 8.4 (E5-075)
- **Arquivo de teoria:** `conteudo/08-logica-matematica/05-logica-de-predicados.md`
- **Referência:** Material teórico do projeto; equivalências, tabelas e formas de argumento conferidas por script na produção do M08; resultados metateóricos e livros de memória (parte confirmada em Wikipedia/SEP na revisão).

### E. Ponto de atenção para a prova

**∀∃ ≠ ∃∀**: "cada um tem um" (∀∃) é **mais fraco** que "um para todos" (∃∀). Só **∃∀ ⇒ ∀∃**. Quantificadores do mesmo tipo comutam.

### F. Revisão rápida

∃y∀x R ⇒ ∀x∃y R, mas não o contrário. Contraexemplo: cada técnico com um supervisor distinto.

### G. Tags

`m08` · `logica-de-predicados` · `ordem-dos-quantificadores` · `item-8.4` · `dificil` · `analise` · `logica` · `autoral`

**Verificação do gabarito:** Conferido por enumeração de interpretações (T e S arbitrários) em domínios de tamanho 1 a 3: 4.164 modelos; 464 com I verdadeira e II falsa e nenhum com II verdadeira e I falsa.  
**Status de validação:** `validada`  
**Validação:** Aprovada pelo usuário em 2026-11-01 (lote piloto do M08, após revisão independente por resolução às cegas); sem revisão por terceiros; ressalvas: interpretação dos itens 8.5, 8.6 e 8.9 a confirmar; item 8.9 sem questão principal.

---

## Questão 9 — AUT-000079

**AUT-000079** · Regras de formação de fórmulas · item 8.5 · Fácil · Memorização

*Questão autoral — estilo Cesgranrio.*

Considerando as regras usuais de formação de fórmulas da lógica sentencial, com os conectivos ¬, ∧, ∨ e →, e os parênteses necessários, qual das expressões a seguir é uma fórmula bem formada?

(A) p ∧ ∨ q  
(B) (p → q  
(C) ¬(p ∨)  
(D) (p q)  
(E) ((p ∧ q) → ¬r)  

### A. Gabarito

**E**

### B. Resolução comentada

Pelas regras de formação: toda letra sentencial é fórmula; se A é fórmula, ¬A é fórmula; se A e B são fórmulas, (A ∧ B), (A ∨ B) e (A → B) são fórmulas; **nada mais** é fórmula. A expressão **((p ∧ q) → ¬r)** é construída por essas regras: (p ∧ q) é fórmula; ¬r é fórmula; o condicional entre elas é fórmula.

### C. Análise das alternativas

- **(A)** Incorreta. Tem dois conectivos binários seguidos (∧ ∨), sem que haja fórmula entre eles.
- **(B)** Incorreta. Tem parênteses desbalanceados (abre e não fecha).
- **(C)** Incorreta. A disjunção está sem o segundo argumento (falta uma fórmula depois de ∨).
- **(D)** Incorreta. Faltam o conectivo entre p e q; duas letras justapostas não formam fórmula.
- **(E)** Correta. Construída pelas regras: ¬ aplicado a r; ∧ entre p e q; → entre as duas fórmulas.

### D. Fundamentação teórica

- **Módulo:** M08 — Lógica matemática
- **Assunto:** Regras de formação de fórmulas
- **Item do edital:** 8.5 (E5-076)
- **Arquivo de teoria:** `conteudo/08-logica-matematica/06-formulas-e-sistemas-dedutivos.md`
- **Referência:** Material teórico do projeto; equivalências, tabelas e formas de argumento conferidas por script na produção do M08; resultados metateóricos e livros de memória (parte confirmada em Wikipedia/SEP na revisão). Interpretação do item 8.5 (redação genérica) a confirmar.

### E. Ponto de atenção para a prova

Erros típicos: **dois conectivos binários seguidos**, **parênteses desbalanceados**, **conectivo sem argumento**, **letras justapostas**. Verifique se dá para **construir** a fórmula passo a passo.

### F. Revisão rápida

Fórmula: átomo; ¬A; (A∧B); (A∨B); (A→B); (A↔B); nada mais. Conectivo principal = último introduzido.

### G. Tags

`m08` · `formulas` · `regras-de-formacao` · `item-8.5` · `facil` · `memorizacao` · `logica` · `autoral`

**Verificação do gabarito:** Sem execução (questão de sintaxe); verificada manualmente pelas regras de formação.  
**Status de validação:** `validada`  
**Validação:** Aprovada pelo usuário em 2026-11-01 (lote piloto do M08, após revisão independente por resolução às cegas); sem revisão por terceiros; ressalvas: interpretação dos itens 8.5, 8.6 e 8.9 a confirmar; item 8.9 sem questão principal.

---

## Questão 10 — AUT-000080

**AUT-000080** · Decidibilidade da lógica sentencial e funções de avaliação · item 8.7 · Fácil · Compreensão

*Questão autoral — estilo Cesgranrio.*

Um analista precisa decidir se uma fórmula da lógica sentencial é uma tautologia. A fórmula contém 5 letras sentenciais distintas, e ele pretende usar o método da tabela-verdade, avaliando a fórmula em cada função de avaliação (valoração) possível das letras.  
  
Sobre esse procedimento, é correto afirmar que ele considera, no máximo,

(A) 10 valorações, pois cada uma das 5 letras admite 2 valores, e o total é a soma desses valores, sem combinações entre as letras.  
(B) 2⁵ = 32 valorações, e sempre termina, pois o número de valorações é finito, o que torna a lógica sentencial decidível.  
(C) 5² = 25 valorações, e pode não terminar quando a fórmula tem muitas letras sentenciais, como na lógica de predicados.  
(D) 5 valorações, uma para cada letra, bastando que uma delas torne a fórmula verdadeira para que ela seja tautologia.  
(E) infinitas valorações, pois a lógica sentencial é indecidível, tal como a lógica de predicados de primeira ordem.  

### A. Gabarito

**B**

### B. Resolução comentada

Com **n** letras sentenciais há **2ⁿ** valorações; com 5 letras, **2⁵ = 32** (no máximo 32 avaliações: uma linha falsa já mostra que a fórmula não é tautologia). Como o número de valorações é **finito** e cada avaliação é um cálculo finito, o método **sempre termina**: a lógica sentencial é **decidível**. A **lógica de predicados** de primeira ordem, por sua vez, é **indecidível** (semidecidível).

### C. Análise das alternativas

- **(A)** Incorreta. O número de valorações é 2⁵ = 32, e não 5 × 2 = 10 (as escolhas de cada letra se combinam).
- **(B)** Correta. 2⁵ = 32 valorações; o procedimento sempre termina; a lógica sentencial é decidível.
- **(C)** Incorreta. O total é 2⁵ = 32, e não 5²; além disso, o procedimento sempre termina, pois o número de valorações é finito.
- **(D)** Incorreta. Para ser tautologia, a fórmula deve ser verdadeira em todas as valorações, e não em apenas uma.
- **(E)** Incorreta. A lógica sentencial é decidível; a indecidibilidade é característica da lógica de predicados de primeira ordem.

### D. Fundamentação teórica

- **Módulo:** M08 — Lógica matemática
- **Assunto:** Decidibilidade da lógica sentencial; funções de avaliação
- **Item do edital:** 8.7 (E5-078) · itens secundários: 8.9
- **Arquivo de teoria:** `conteudo/08-logica-matematica/07-decidibilidade-e-funcoes-avaliacao.md`
- **Referência:** Material teórico do projeto; equivalências, tabelas e formas de argumento conferidas por script na produção do M08; resultados metateóricos e livros de memória (parte confirmada em Wikipedia/SEP na revisão). Decidibilidade conferida em Wikipedia e SEP (revisão do M08). Interpretação do item 8.9 (secundário) a confirmar.

### E. Ponto de atenção para a prova

**n** letras → **2ⁿ** valorações. Número **finito** → procedimento **termina** → **decidível**. A LPO é **indecidível** (semidecidível).

### F. Revisão rápida

Sentencial: decidível (tabela-verdade, 2ⁿ linhas). LPO: indecidível, semidecidível. Valoração = função de avaliação das letras.

### G. Tags

`m08` · `decidibilidade` · `tabela-verdade` · `funcao-de-avaliacao` · `item-8.7` · `item-8.9` · `facil` · `compreensao` · `cenario` · `autoral`

**Verificação do gabarito:** Contagem: 2 elevado a 5 = 32 (script); decidibilidade conferida em fonte secundária na revisão do M08.  
**Status de validação:** `validada`  
**Validação:** Aprovada pelo usuário em 2026-11-01 (lote piloto do M08, após revisão independente por resolução às cegas); sem revisão por terceiros; ressalvas: interpretação dos itens 8.5, 8.6 e 8.9 a confirmar; item 8.9 sem questão principal.

---

