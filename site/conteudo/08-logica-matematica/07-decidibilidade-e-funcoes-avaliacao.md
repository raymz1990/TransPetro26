---
modulo: 08-logica-matematica
arquivo: 07-decidibilidade-e-funcoes-avaliacao
itens_edital:
  - "8.7 Decidibilidade da lógica sentencial"
  - "8.9 Funções de avaliação."
ids_matriz: ["E5-078", "E5-080"]
escopo: "A — conteúdo expresso no edital. 'Funções de avaliação' (8.9) tem redação genérica; interpretada como valorações (a confirmar)."
tipo_conteudo: "teoria"
status: "VALIDADO"
ultima_atualizacao: "2026-10-31"
---

# Decidibilidade da Lógica Sentencial e Funções de Avaliação

**Módulo:** M08 — Lógica matemática
**Textos oficiais (Anexo IV):** 8.7 "Decidibilidade da lógica sentencial"; 8.9 "Funções de avaliação." (com ponto final no edital).
**Escopo:** A. Interpretação adotada para 8.9 (**a confirmar**): **valoração/função de avaliação** que atribui valores-verdade às letras sentenciais e se estende às fórmulas; relação com tabelas-verdade, interpretações e semântica.
**Status:** `VALIDADO` (aprovado pelo usuário em 2026-10-31, com ressalvas: interpretação dos itens 8.5, 8.6 e 8.9 a confirmar; decisão sobre puzzles de raciocínio lógico pendente; fontes de memória listadas em `docs/qualidade/relatorio-producao-modulo-08.md`). Resultados semânticos conferidos por script; resultados de computabilidade (Church, Turing, Cook) são de memória.

**Objetivos de aprendizagem.** (1) Definir função de avaliação e sua extensão composicional; (2) definir decidibilidade; (3) justificar a decidibilidade da lógica sentencial; (4) contrastar com a lógica de predicados; (5) relacionar com complexidade (SAT).

---

## 1. Funções de avaliação (item 8.9)

### 1.1 Definição

Uma **função de avaliação (valoração)** *v* atribui a cada **letra sentencial** um valor do conjunto {V, F} (ou {1, 0}): *v*: {p, q, r, …} → {V, F}. Essa atribuição se **estende de modo único** a todas as fórmulas, por **recursão sobre a estrutura** da fórmula (**composicionalidade**; regras de formação, arquivo `06`).

| Fórmula | Valor da avaliação (v̄) |
|---|---|
| p (átomo) | *v*(p) |
| ¬A | V se v̄(A) = F; F se v̄(A) = V |
| A ∧ B | V se v̄(A) = V **e** v̄(B) = V |
| A ∨ B | V se v̄(A) = V **ou** v̄(B) = V |
| A → B | F se v̄(A) = V e v̄(B) = F; V nos demais casos |
| A ↔ B | V se v̄(A) = v̄(B) |

Em forma aritmética (com V = 1, F = 0): v̄(¬A) = 1 − v̄(A); v̄(A ∧ B) = mín(v̄(A), v̄(B)); v̄(A ∨ B) = máx(v̄(A), v̄(B)); v̄(A → B) = máx(1 − v̄(A), v̄(B)) (conferível). Cada conectivo corresponde a uma **função de verdade** (tabela-verdade); veritativo-funcionalidade (arquivo `02`).

### 1.2 Conceitos derivados

- Uma valoração **satisfaz** uma fórmula se lhe atribui V (**modelo**).
- **Tautologia:** satisfeita por **toda** valoração; **contradição:** por nenhuma.
- **Consequência:** Γ ⊨ A se toda valoração que satisfaz Γ satisfaz A (arquivo `04`).
- **Número de valorações:** com *n* letras há **2ⁿ** valorações (as linhas da tabela-verdade).
- A **tabela-verdade** é a lista de todas as valorações com o valor da fórmula em cada uma.
- Na **lógica de predicados**, a avaliação envolve **interpretação** (domínio e significado dos símbolos) e **atribuição às variáveis** (arquivo `05`).

### 1.3 Exemplo (conferido)

*v*(p) = V, *v*(q) = F, *v*(r) = V. Avaliar (p → q) ∨ r: v̄(p → q) = F; v̄(r) = V; logo v̄ = **V**. Avaliar ¬(p ∧ q) → r: p ∧ q = F, ¬ = V, V → V = **V**.

## 2. Decidibilidade (item 8.7)

### 2.1 Conceito

Um problema é **decidível** se existe um **algoritmo** que, para **qualquer** entrada, **termina** e responde corretamente "sim" ou "não". Em lógica, interessam os problemas: **validade** (a fórmula é tautologia?), **satisfatibilidade** e **consequência** (Γ ⊨ A?). Um problema é **semidecidível** se existe algoritmo que responde "sim" quando a resposta é sim, mas pode **não terminar** quando é não.

### 2.2 A lógica sentencial é decidível

**Procedimento de decisão (tabela-verdade):** dada uma fórmula com *n* letras, avaliam-se as **2ⁿ valorações** (finitas); a fórmula é válida se for V em todas, satisfatível se V em alguma. Como o número de valorações é **finito** e cada avaliação é um cálculo finito, o procedimento **sempre termina**. Logo, **validade, satisfatibilidade e consequência** (com premissas finitas) são **decidíveis** na lógica sentencial. Outros procedimentos de decisão: **tabela abreviada**, **tableaux**, **resolução** (arquivos `04` e `06`) e **resolvedores SAT**.

### 2.3 Custo computacional (de memória)

- O método da tabela-verdade tem custo **exponencial** (2ⁿ).
- O problema **SAT** é **NP-completo** (Cook–Levin); decidir se uma fórmula é **tautologia** é **co-NP-completo**. Não se conhece algoritmo polinomial geral (questão **P versus NP** em aberto).
- Mesmo assim, resolvedores SAT modernos resolvem muitos problemas práticos grandes. Subclasses têm algoritmos eficientes (por exemplo, cláusulas de **Horn**; **2-SAT**; de memória).

### 2.4 Contraste com a lógica de predicados

| Aspecto | Lógica sentencial | Lógica de predicados de 1ª ordem |
|---|---|---|
| Validade | **Decidível** (tabela-verdade) | **Indecidível** (Church e Turing, 1936) |
| Semidecidibilidade | Trivial | **Semidecidível**: as sentenças válidas podem ser enumeradas e provadas |
| Número de interpretações | Finito (2ⁿ) | Infinito (domínios arbitrários) |
| Completude de sistemas | Sim | Sim (Gödel, 1930) |

Fragmentos decidíveis da LPO (por exemplo, apenas predicados **monádicos**, de memória) existem, mas a LPO em geral não é decidível.

### 2.5 Metapropriedades relacionadas

**Correção**, **completude**, **consistência** e **decidibilidade** são propriedades do sistema e da lógica (arquivo `06`). Para a sentencial clássica valem todas; a decidibilidade decorre da **finitude** das valorações.

## 3. Exemplos (didáticos)

1. A fórmula (p → q) → (¬q → ¬p) com duas letras: 4 valorações; V em todas (contrapositiva) → **tautologia**, e a decisão termina em 4 passos.
2. Uma fórmula com 30 letras exige até 2³⁰ (≈ 10⁹) valorações pelo método ingênuo: **decidível**, mas **caro**; por isso usam-se resolvedores SAT.
3. Determinar a validade de uma sentença da LPO: não há procedimento geral que sempre termine; um provador pode **nunca parar** numa sentença não válida.

## 4. Comparações conceituais

| A | B | Diferença |
|---|---|---|
| Decidível | Semidecidível | Responde sempre, em tempo finito × só garante resposta no "sim" |
| Decidível | Eficiente | Existe algoritmo que termina × termina em tempo viável |
| Valoração | Interpretação | Atribuição a letras sentenciais × domínio e símbolos na LPO |
| Função de avaliação | Tabela-verdade | Uma valoração (uma linha) × todas as valorações |
| SAT | Validade | Existe valoração V × toda valoração é V (dual: ¬A insatisfatível) |

## 5. Atenção para a prova

*Inferência técnica e recomendação pedagógica; sem atribuir frequência à banca.*

- A lógica sentencial é decidível porque o número de valorações é **finito** (2ⁿ).
- A LPO é **indecidível** (mas semidecidível).
- Itens 8.7 e 8.9 **não tiveram questão** identificada nas duas provas catalogadas; a ausência não permite inferir baixa incidência.

## 6. Síntese

Avaliação *v*: letras → {V, F}, estendida por composicionalidade. 2ⁿ valorações. Lógica sentencial decidível (tabela-verdade, termina); custo exponencial; SAT NP-completo. LPO: indecidível, semidecidível.

## 7. Pontos para a futura produção de questões (registro)

Avaliar fórmula numa valoração; justificar decidibilidade; contrastar com predicados; contar valorações; relacionar a SAT.

## 8. Referências

- Cálculos de avaliação e contagem de valorações: **conferidos por script em 2026-10-31**. Church, Turing, Cook–Levin, P versus NP — **de memória, não verificados**.
- Edital Transpetro nº 04/2026.4, Anexo IV, itens 8.7 e 8.9.
