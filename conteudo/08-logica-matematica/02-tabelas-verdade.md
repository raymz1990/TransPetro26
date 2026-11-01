---
modulo: 08-logica-matematica
arquivo: 02-tabelas-verdade
itens_edital:
  - "8.8 Valores-verdade"
ids_matriz: ["E5-079"]
escopo: "A — conteúdo expresso no edital."
tipo_conteudo: "teoria"
status: "VALIDADO"
ultima_atualizacao: "2026-10-31"
---

# Valores-Verdade e Tabelas-Verdade

**Módulo:** M08 — Lógica matemática
**Texto oficial (Anexo IV):** 8.8 "Valores-verdade".
**Escopo:** A. Os conectivos estão em `01`; aqui, a construção e o uso das tabelas e a classificação das fórmulas.
**Status:** `VALIDADO` (aprovado pelo usuário em 2026-10-31, com ressalvas: interpretação dos itens 8.5, 8.6 e 8.9 a confirmar; decisão sobre puzzles de raciocínio lógico pendente; fontes de memória listadas em `docs/qualidade/relatorio-producao-modulo-08.md`). Resultados conferidos por script em 2026-10-31.

**Objetivos de aprendizagem.** (1) Atribuir valores-verdade; (2) construir tabelas-verdade; (3) classificar tautologia, contradição e contingência; (4) verificar equivalência e implicação lógica; (5) usar atalhos de avaliação.

---

## 1. Valores-verdade

Na lógica **clássica bivalente**, toda proposição tem exatamente um valor-verdade: **verdadeiro (V, 1)** ou **falso (F, 0)**. O valor de uma proposição composta depende **apenas** dos valores de suas componentes (**veritativo-funcionalidade**; cada conectivo é uma função dos valores — arquivo `07`, funções de avaliação). Existem lógicas **não clássicas** (trivalentes, difusas); ficam **fora** do edital, que fala em "valores-verdade" no sentido clássico.

## 2. Construção da tabela-verdade

1. Listar as **proposições simples** distintas: *n* delas geram **2ⁿ linhas** (3 → 8; 4 → 16; 5 → 32).
2. Preencher as combinações de V e F (convenção: primeira coluna metade V e metade F, e assim por diante).
3. Calcular as subfórmulas **de dentro para fora**, respeitando parênteses e precedência (arquivo `01`).
4. A **última coluna** dá o valor da fórmula em cada linha.

Exemplo — (p → q) ∧ (q → r) (conferido):

| p | q | r | p→q | q→r | (p→q)∧(q→r) |
|---|---|---|---|---|---|
| V | V | V | V | V | V |
| V | V | F | V | F | F |
| V | F | V | F | V | F |
| V | F | F | F | V | F |
| F | V | V | V | V | V |
| F | V | F | V | F | F |
| F | F | V | V | V | V |
| F | F | F | V | V | V |

## 3. Classificação de fórmulas

| Tipo | Definição | Exemplo (conferido) |
|---|---|---|
| **Tautologia** (validade) | **V em todas** as linhas | p ∨ ¬p; (p → q) ∨ (q → p); ((p → q) → p) → p (lei de Peirce) |
| **Contradição** (insatisfatível) | **F em todas** as linhas | p ∧ ¬p |
| **Contingência** (satisfatível, mas não tautologia) | **V em algumas e F em outras** | p → q; p ∧ q |
| **Satisfatível** | V em **pelo menos uma** linha (tautologias e contingências) | — |

A negação de uma tautologia é uma contradição, e vice-versa.

## 4. Equivalência e implicação lógicas

- **Equivalência** (A ≡ B ou A ⇔ B): A e B têm a **mesma coluna final**; equivale a A ↔ B ser **tautologia**.
- **Implicação lógica** (A ⇒ B): **toda valoração que torna A verdadeira torna B verdadeira**; equivale a A → B ser **tautologia**.

Equivalências notáveis (todas **conferidas** por enumeração):

| Nome | Equivalência |
|---|---|
| Comutativa | p ∧ q ≡ q ∧ p ; p ∨ q ≡ q ∨ p |
| Associativa | (p ∧ q) ∧ r ≡ p ∧ (q ∧ r) ; idem para ∨ e para ↔ (o **condicional não é associativo**) |
| Distributiva | p ∧ (q ∨ r) ≡ (p ∧ q) ∨ (p ∧ r) ; p ∨ (q ∧ r) ≡ (p ∨ q) ∧ (p ∨ r) |
| De Morgan | ¬(p ∧ q) ≡ ¬p ∨ ¬q ; ¬(p ∨ q) ≡ ¬p ∧ ¬q |
| Condicional | p → q ≡ ¬p ∨ q ≡ ¬q → ¬p |
| Bicondicional | p ↔ q ≡ (p → q) ∧ (q → p) |
| Exportação | (p ∧ q) → r ≡ p → (q → r) |
| Absorção | p ∧ (p ∨ q) ≡ p |
| Dupla negação | ¬¬p ≡ p |
| Idempotência | p ∧ p ≡ p ; p ∨ p ≡ p |

## 5. Atalhos de avaliação

- **Valor único:** para saber se *p → q* é falso, procure *p* V e *q* F.
- **Tabela abreviada (por redução ao absurdo):** para testar se A → B é tautologia, tente atribuir **A = V e B = F**; se não for possível, é tautologia.
- Avaliar uma fórmula com **valores dados** (sem tabela completa): substituir e simplificar.
- Validade de argumento pela tabela: ver `03`.

## 6. Exemplos (didáticos)

1. *p* V, *q* F, *r* V: valor de (p ∧ q) → r: antecedente F → **V**.
2. "Se o sistema falha, o alarme soa; o alarme não soa." Tabela do modus tollens mostra que "o sistema não falha" segue (arquivo `03`).
3. A fórmula (p → q) ∨ (q → p) é tautologia, apesar de parecer informativa.

## 7. Comparações conceituais

| A | B | Diferença |
|---|---|---|
| Tautologia | Contingência | V sempre × V ou F conforme a valoração |
| Contradição | Contingência | F sempre × depende |
| Equivalência | Implicação | Mesma coluna × A V implica B V |
| ⇔ (relação entre fórmulas) | ↔ (conectivo) | Metalinguagem × linguagem-objeto |
| Satisfatível | Válida | Alguma valoração torna V × todas |

## 8. Atenção para a prova

*Inferência técnica e recomendação pedagógica; sem atribuir frequência à banca.*

- Contar linhas: 2ⁿ.
- Reconhecer rapidamente tautologias e contradições e usar **tabela abreviada**.
- Evidência histórica (amostra de duas provas): Prova 15 de 2018, Q70 (contradição entre proposições; gabarito C, de terceiros, não validado). Duas provas não permitem inferir frequência.

## 9. Síntese

Valores V/F; 2ⁿ linhas; tautologia, contradição, contingência; equivalência = mesma coluna; implicação = A→B tautologia; atalho por redução ao absurdo.

## 10. Pontos para a futura produção de questões (registro)

Construir e ler tabelas; classificar fórmulas; identificar equivalências; aplicar atalhos.

## 11. Referências

- Tabelas e equivalências: **conferidas por script em 2026-10-31**. Livros de lógica — de memória.
- Edital Transpetro nº 04/2026.4, Anexo IV, item 8.8. Prova Transpetro 2018, Prova 15, Q70.
