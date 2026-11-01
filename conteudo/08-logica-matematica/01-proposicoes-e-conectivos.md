---
modulo: 08-logica-matematica
arquivo: 01-proposicoes-e-conectivos
itens_edital:
  - "8 Lógica Matemática:"
  - "8.1 Sentido lógico-matemático convencional dos conectivos"
ids_matriz: ["E5-071", "E5-072"]
escopo: "A — conteúdo expresso no edital. O título do item 8 é tratado como introdução ao módulo."
tipo_conteudo: "teoria"
status: "VALIDADO"
ultima_atualizacao: "2026-10-31"
---

# Proposições e Conectivos Lógicos

**Módulo:** M08 — Lógica matemática
**Textos oficiais (Anexo IV):** 8 "Lógica Matemática:" (título); 8.1 "Sentido lógico-matemático convencional dos conectivos".
**Escopo:** A.
**Status:** `VALIDADO` (aprovado pelo usuário em 2026-10-31, com ressalvas: interpretação dos itens 8.5, 8.6 e 8.9 a confirmar; decisão sobre puzzles de raciocínio lógico pendente; fontes de memória listadas em `docs/qualidade/relatorio-producao-modulo-08.md`). As equivalências e tabelas deste módulo foram **conferidas por script** (enumeração de todas as valorações) em 2026-10-31; as referências bibliográficas são de memória.

**Objetivos de aprendizagem.** (1) Reconhecer proposições; (2) simbolizar frases com conectivos; (3) aplicar o sentido **convencional** de cada conectivo (distinto do uso na linguagem comum); (4) usar a precedência dos conectivos; (5) negar proposições compostas.

---

## 1. Introdução ao módulo

A lógica matemática estuda **raciocínio válido** com linguagem formal. O módulo 8 segue o edital: conectivos (8.1), argumentos (8.2), lógica sentencial (8.3), lógica de predicados (8.4), regras de formação (8.5), sistemas dedutivos (8.6), decidibilidade (8.7), valores-verdade (8.8) e funções de avaliação (8.9). Arquivos: `01` (8.1), `02` (8.8), `03` (8.2), `04` (8.3), `05` (8.4), `06` (8.5 e 8.6), `07` (8.7 e 8.9).

## 2. Proposição

**Proposição** é uma **sentença declarativa** que pode ser classificada como **verdadeira (V)** ou **falsa (F)**, mas não ambas (princípios clássicos: **identidade**, **não contradição** e **terceiro excluído**).

| É proposição | Não é proposição |
|---|---|
| "5 é maior que 3." | "Feche a porta." (imperativa) |
| "Todo gato é mamífero." | "Que horas são?" (interrogativa) |
| "2 + 2 = 5." (falsa, mas é proposição) | "Que dia lindo!" (exclamativa) |
| "Brasília é a capital do Brasil." | "x + 3 = 7." (sentença aberta, depende de *x*) |

**Proposição simples (átomo):** não contém outra proposição como parte, indicada por letras (*p*, *q*, *r*). **Composta (molecular):** formada por simples e conectivos. **Sentença aberta** (com variável) não é proposição até ser **quantificada** ou ter a variável substituída (arquivo `05`).

## 3. Conectivos lógicos e seu sentido convencional (item 8.1)

| Conectivo | Símbolo | Leitura | Verdadeira quando |
|---|---|---|---|
| **Negação** | ¬p, ~p | não p | *p* é falsa |
| **Conjunção** | p ∧ q | p **e** q | **ambas** verdadeiras |
| **Disjunção (inclusiva)** | p ∨ q | p **ou** q | **pelo menos uma** verdadeira |
| **Disjunção exclusiva** | p ⊻ q (ou p ⊕ q) | ou p ou q (mas não ambas) | **exatamente uma** verdadeira |
| **Condicional** | p → q | se p, então q | **falsa somente** se *p* V e *q* F |
| **Bicondicional** | p ↔ q | p se e somente se q | *p* e *q* têm **o mesmo valor** |

### 3.1 Tabela-verdade conjunta (conferida por enumeração)

| p | q | ¬p | p∧q | p∨q | p⊻q | p→q | p↔q |
|---|---|---|---|---|---|---|---|
| V | V | F | V | V | F | V | V |
| V | F | F | F | V | V | F | F |
| F | V | V | F | V | V | V | F |
| F | F | V | F | F | F | V | V |

### 3.2 Sentido convencional × linguagem comum

| Conectivo | Na linguagem comum | Sentido lógico-matemático convencional |
|---|---|---|
| **"ou"** | Muitas vezes **exclusivo** ("café ou chá") | Por convenção, **inclusivo**: V se uma **ou ambas** forem V; o exclusivo é indicado ("ou … ou …") |
| **"se … então"** | Sugere relação causal ou temporal | Apenas **valor-verdade**: se o antecedente é F, o condicional é **V** ("vacuamente verdadeiro") |
| **"e"** | Pode sugerir ordem ("casou e teve filhos") | Comutativo: *p* ∧ *q* equivale a *q* ∧ *p* |
| **"mas", "porém", "embora"** | Contraste | Simbolizam conjunção (contraste desaparece) |
| **"se e somente se"** | — | Condicional nos dois sentidos |

### 3.3 Formas de expressar o condicional e o bicondicional

*p → q* pode ser lida: "se *p*, então *q*"; "*p* implica *q*"; "*p* **somente se** *q*"; "*q* se *p*"; "*p* é **condição suficiente** para *q*"; "*q* é **condição necessária** para *p*". *p ↔ q*: "*p* se e somente se *q*"; "*p* é condição necessária e suficiente para *q*"; "*p* equivale a *q*" (no nível dos valores-verdade).

Cuidado: **"p somente se q"** é *p → q* (e **não** *q → p*); **"p se q"** é *q → p*.

### 3.4 Precedência (convenção usual de livros; verificar o enunciado)

Da mais forte para a mais fraca: **¬**, **∧**, **∨**, **→**, **↔**. Essa ordem é uma convenção comum, mas **não é universal**: na revisão de 2026-10-31, a página "Well-formed formula" (Wikipedia) usou a ordem ¬, →, ∧, ∨ em um exemplo e disse tratar-se apenas de convenção, e a página "Logical connective" registra que as ordens variam. Exemplo: ¬p ∨ q → r lê-se ((¬p) ∨ q) → r. Em provas, o enunciado costuma usar **parênteses**; use-os em caso de dúvida.

## 4. Negação de proposições compostas (conferidas por enumeração)

| Proposição | Negação equivalente |
|---|---|
| ¬(p ∧ q) | ¬p ∨ ¬q (De Morgan) |
| ¬(p ∨ q) | ¬p ∧ ¬q (De Morgan) |
| ¬(p → q) | **p ∧ ¬q** |
| ¬(p ↔ q) | p ⊻ q (ou: (p ∧ ¬q) ∨ (¬p ∧ q)) |
| ¬(¬p) | p (dupla negação) |
| ¬(p ⊻ q) | p ↔ q |

Exemplo: negar "Se chove, a rua molha" → "**Chove e a rua não molha**". Note: negar um condicional **não** produz outro condicional.

## 5. Condicional e suas relacionadas (conferidas por enumeração)

| Forma | Equivalente ao condicional *p → q*? |
|---|---|
| **Contrapositiva** ¬q → ¬p | **Sim** |
| **Conversa** q → p | **Não** |
| **Inversa** ¬p → ¬q | **Não** (é equivalente à conversa) |
| **¬p ∨ q** | **Sim** |

## 6. Exemplos (didáticos)

1. "Se 3 > 5, então 2 é par": antecedente F → condicional **V**.
2. "5 é primo **ou** 6 é primo": *p* V, *q* F → disjunção **V**.
3. "Chove **se e somente se** faz frio": V quando ambas V ou ambas F.
4. Simbolizar "Maria estuda, mas não passa": *p* ∧ ¬*q*.

## 7. Comparações conceituais

| A | B | Diferença |
|---|---|---|
| Proposição | Sentença aberta | Tem valor-verdade × depende de variável |
| "ou" inclusivo | "ou" exclusivo | Aceita ambas × exatamente uma |
| Condicional | Bicondicional | Uma direção × duas direções |
| Condição necessária | Condição suficiente | Sem ela, não ocorre × com ela, ocorre |
| Negação do condicional | Contrapositiva | *p* ∧ ¬*q* × ¬*q* → ¬*p* (equivalente ao original) |

## 8. Atenção para a prova

*Inferência técnica e recomendação pedagógica; sem atribuir frequência à banca.*

- O condicional só é **falso** em *V → F*; antecedente falso torna-o verdadeiro.
- **Negação do condicional** é *p* e não-*q*; não inverter *p somente se q*.
- Evidência histórica (amostra de duas provas): a Prova 15 de 2018 trouxe Q70 (contradição entre proposições, gabarito C) e a Prova 6 de 2023, questões de raciocínio lógico (Q36 anulada; Q37 sem item 8.x claro). Gabaritos de terceiros, não validados. Duas provas não permitem inferir frequência.

## 9. Síntese

Proposição = sentença declarativa V/F. Conectivos: ¬, ∧, ∨ (inclusivo), ⊻, →, ↔. Condicional falso só em V→F. Negações: De Morgan; ¬(p→q) ≡ p∧¬q. Contrapositiva ≡ condicional; conversa e inversa não.

## 10. Pontos para a futura produção de questões (registro)

Simbolização; valor-verdade de composta; negação; condição necessária/suficiente; reconhecimento de equivalência.

## 11. Referências

- Equivalências e tabelas deste arquivo: **conferidas por script em 2026-10-31** (enumeração das valorações).
- Livros de lógica (Copi, Mortari, Alencar Filho, Enderton) — citados de memória, **não verificados**.
- Edital Transpetro nº 04/2026.4, Anexo IV, itens 8 e 8.1. Provas: Transpetro 2018, Prova 15, Q70; Transpetro 2023, Prova 6, Q36–Q37 (gabaritos de terceiros, não validados).
