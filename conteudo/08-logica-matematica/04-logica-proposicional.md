---
modulo: 08-logica-matematica
arquivo: 04-logica-proposicional
itens_edital:
  - "8.3 A lógica sentencial"
ids_matriz: ["E5-074"]
escopo: "A — conteúdo expresso no edital. Lógica sentencial = lógica proposicional."
tipo_conteudo: "teoria"
status: "VALIDADO"
ultima_atualizacao: "2026-10-31"
---

# A Lógica Sentencial (Proposicional)

**Módulo:** M08 — Lógica matemática
**Texto oficial (Anexo IV):** 8.3 "A lógica sentencial".
**Escopo:** A. "Lógica sentencial" é a **lógica proposicional**: trata sentenças como unidades indivisíveis e suas combinações por conectivos. Conectivos e tabelas: `01` e `02`; argumentos: `03`; sintaxe e dedução: `06`; decidibilidade: `07`.
**Status:** `VALIDADO` (aprovado pelo usuário em 2026-10-31, com ressalvas: interpretação dos itens 8.5, 8.6 e 8.9 a confirmar; decisão sobre puzzles de raciocínio lógico pendente; fontes de memória listadas em `docs/qualidade/relatorio-producao-modulo-08.md`). Resultados conferidos por script em 2026-10-31.

**Objetivos de aprendizagem.** (1) Descrever a linguagem, a semântica e a dedução da lógica proposicional; (2) usar consequência semântica e equivalência; (3) aplicar formas normais; (4) conhecer a resolução e a completude funcional; (5) distinguir a lógica sentencial da de predicados.

---

## 1. Panorama

| Componente | Conteúdo |
|---|---|
| **Linguagem (sintaxe)** | Letras sentenciais, conectivos, parênteses; fórmulas bem formadas (arquivo `06`) |
| **Semântica** | Valorações, tabelas-verdade, satisfatibilidade, validade, consequência (arquivos `02` e `07`) |
| **Sistema dedutivo (prova)** | Axiomático, dedução natural, tableaux, resolução (arquivo `06`) |
| **Metapropriedades** | **Correção**, **completude**, **decidibilidade**, compacidade (arquivo `07`) |

A lógica sentencial **não** analisa a estrutura interna das proposições simples ("Sócrates é mortal"), nem quantifica: isso é papel da lógica de **predicados** (arquivo `05`).

## 2. Semântica: noções centrais

| Noção | Definição |
|---|---|
| **Valoração** | Atribuição de V/F às letras sentenciais (estendida às fórmulas; arquivo `07`) |
| **Satisfatível** | Existe valoração que a torna V |
| **Válida (tautologia)** | V em toda valoração (símbolo ⊨ A) |
| **Insatisfatível (contradição)** | Nenhuma valoração a torna V |
| **Consequência lógica** (Γ ⊨ A) | Toda valoração que torna **todas** as fórmulas de Γ V torna A V |
| **Equivalência** | A ⊨ B e B ⊨ A |

**Relação-chave:** Γ ⊨ A se e somente se Γ ∪ {¬A} é **insatisfatível** (base da refutação, tableaux e resolução). **Teorema da dedução:** Γ ∪ {A} ⊢ B se e somente se Γ ⊢ A → B (de memória).

## 3. Formas normais

| Forma | Definição | Exemplo |
|---|---|---|
| **Literal** | Letra ou sua negação | p ; ¬q |
| **Forma normal conjuntiva (FNC)** | **Conjunção de disjunções** de literais (cláusulas) | (p ∨ ¬q) ∧ (r ∨ s) |
| **Forma normal disjuntiva (FND)** | **Disjunção de conjunções** de literais | (p ∧ ¬q) ∨ (r ∧ s) |

Toda fórmula é equivalente a uma FNC e a uma FND. Conversão: eliminar → e ↔ (p → q ≡ ¬p ∨ q); aplicar De Morgan; distribuir ∧ e ∨. A FND pode ser lida da tabela-verdade (linhas V). A FNC é a entrada da **resolução** e dos **resolvedores SAT**.

## 4. Resolução (visão geral)

Regra: de **(p ∨ q)** e **(¬p ∨ r)** infere-se **(q ∨ r)** (conferida: consequência válida). Para provar Γ ⊨ A: converter Γ ∪ {¬A} em cláusulas e derivar a **cláusula vazia** (contradição). Resolução é correta e **completa por refutação** para a lógica proposicional (de memória).

## 5. Completude funcional

Um conjunto de conectivos é **funcionalmente completo** se qualquer função de verdade pode ser expressa com ele. Exemplos: {¬, ∧}, {¬, ∨}, {¬, →}; os conectivos **NAND** (não-e) e **NOR** (não-ou) são completos **sozinhos**: ¬p ≡ p NAND p; p ∧ q ≡ (p NAND q) NAND (p NAND q); p ∨ q ≡ (p NAND p) NAND (q NAND q) (conferido). Há **16** funções binárias possíveis e 2^(2ⁿ) funções de *n* variáveis (conferido).

## 6. Satisfatibilidade (SAT)

O problema de decidir se uma fórmula proposicional é satisfatível (**SAT**) é **NP-completo** (teorema de Cook–Levin; de memória). Na prática, resolvedores modernos tratam problemas grandes (verificação de hardware e software, planejamento). Relação com computação: Módulos 1 e 5 (modelos e verificação).

## 7. Exemplo (didático)

Premissas: (1) p → q; (2) q → r; (3) ¬r. Conclusão: ¬p. Dedução: de (2) e (3), modus tollens: ¬q; de (1) e ¬q, modus tollens: ¬p. Verificação semântica: a única valoração com (3) V é r F; (2) força q F; (1) força p F — logo ¬p V (**válido**).

## 8. Comparações conceituais

| A | B | Diferença |
|---|---|---|
| Lógica sentencial | Lógica de predicados | Sentenças atômicas × objetos, predicados e quantificadores |
| ⊨ (consequência semântica) | ⊢ (derivabilidade) | Verdade em todas as valorações × existência de prova |
| FNC | FND | Conjunção de disjunções × disjunção de conjunções |
| Satisfatível | Válida | Alguma valoração × todas |
| Correção | Completude | Tudo que se prova é válido × tudo que é válido se prova |

## 9. Atenção para a prova

*Inferência técnica e recomendação pedagógica; sem atribuir frequência à banca.*

- Item 8.3 é o "núcleo" do módulo; muitas questões de lógica dependem de sentencial: conectivos, equivalências, validade.
- Evidência histórica (amostra de duas provas): Q35 de 2023 (consequência lógica de sentença quantificada) e Q70 de 2018 (contradição) foram associadas, de modo secundário, ao 8.3. Gabaritos de terceiros, não validados. Duas provas não permitem inferir frequência.

## 10. Síntese

Lógica sentencial: linguagem, semântica (valoração, validade, consequência) e dedução; formas normais FNC/FND; resolução; completude funcional (NAND, NOR); SAT NP-completo; correção e completude.

## 11. Pontos para a futura produção de questões (registro)

Consequência lógica; satisfatibilidade; conversão em forma normal; identificação de conjuntos completos; distinção ⊨ × ⊢.

## 12. Referências

- Equivalências de NAND e resolução: **conferidas por script em 2026-10-31**. Cook–Levin (SAT NP-completo), decidibilidade da proposicional, correção e completude, e NAND/NOR completos — **verificados em 2026-10-31** (Wikipedia e SEP; TAUT co-NP-completo apenas em resumo automático). Teorema da dedução e completude da resolução — **de memória**.
- Edital Transpetro nº 04/2026.4, Anexo IV, item 8.3. Provas: Transpetro 2023, Prova 6, Q35; Transpetro 2018, Prova 15, Q70 (gabaritos de terceiros, não validados).
