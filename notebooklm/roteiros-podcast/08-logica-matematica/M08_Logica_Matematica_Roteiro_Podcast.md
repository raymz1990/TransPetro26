# Roteiro de podcast — M08: Lógica Matemática

## Identificação
- Concurso: Processo Seletivo Público TRANSPETRO 2026.4 (Edital nº 04/2026)
- Ênfase: 5 — Análise de Sistemas: Processos de Negócios
- Banca: Fundação Cesgranrio
- Módulo: M08 — Lógica Matemática
- Formato: revisão oral explicativa (duas vozes ou narração única)
- Fonte de referência: `notebooklm/fontes/M08_Logica_Matematica_Completo.md` e `notebooklm/resumos/M08_Logica_Matematica_Resumo.md`

## Como usar
Adicione ao NotebookLM a fonte completa do módulo e este roteiro. No recurso de áudio, use este arquivo como pauta. Ele é um guia de revisão e **não substitui** o material completo, que prevalece em caso de dúvida. Não contém estatística de incidência em prova nem questões oficiais; as perguntas de fixação são autorais do projeto, sem vínculo com a Cesgranrio.

## 1. Apresentação
Hoje revisamos o módulo M08, Lógica Matemática, da Ênfase 5 da Transpetro 2026.4, banca Fundação Cesgranrio. A ideia é percorrer os conceitos em ordem, comparar o que costuma ser confundido, marcar pontos de atenção e terminar com perguntas de fixação.

## 2. Contextualização no edital
Proposições e conectivos, tabelas-verdade, argumentos, lógica sentencial, lógica de predicados, fórmulas e sistemas dedutivos, decidibilidade e funções de avaliação. O arquivo de raciocínio lógico complementar é RASCUNHO e não foi usado.

## 3. Explicação dos conceitos
### 3.1 Proposições e conectivos
Proposição é sentença declarativa com valor V ou F. Conectivos: negação, conjunção, disjunção inclusiva, disjunção exclusiva, condicional e bicondicional. O condicional só é falso em V→F. Negações: De Morgan; a negação de p→q equivale a p e não q. A contrapositiva equivale ao condicional; a conversa e a inversa não.

### 3.2 Tabelas-verdade
Com n letras, há 2ⁿ linhas. Tautologia (sempre V), contradição (sempre F), contingência. Equivalência: mesma coluna final. Implicação: A→B é tautologia. O atalho é a redução ao absurdo.

### 3.3 Argumentos
Argumento é um conjunto de premissas e uma conclusão. É válido quando nenhuma valoração torna as premissas verdadeiras e a conclusão falsa. Regras: modus ponens, modus tollens, silogismos, dilema e resolução. Falácias formais: afirmar o consequente e negar o antecedente. Proposições categóricas: A, E, I, O.

### 3.4 Lógica sentencial e fórmulas
Linguagem, semântica (valoração, validade, consequência) e dedução. Formas normais FNC e FND; completude funcional (NAND, NOR); SAT é NP-completo. Fórmulas bem formadas têm definição indutiva. Sistemas dedutivos (Hilbert, dedução natural, tableaux, resolução) devem ser corretos, completos e consistentes.

### 3.5 Lógica de predicados e decidibilidade
LPO: termos, predicados e quantificadores. Tradução: universal com condicional, existencial com conjunção. Negação: ¬∀ equivale a ∃¬ e ¬∃ equivale a ∀¬. ∀∃ não equivale a ∃∀. A lógica sentencial é decidível (tabela-verdade termina, custo exponencial); a LPO é completa (Gödel), mas indecidível e semidecidível (Church–Turing).

## 4. Comparações para fixar
- Condicional × contrapositiva × conversa × inversa.
- Disjunção inclusiva × exclusiva.
- Tautologia × contradição × contingência.
- Decidível (sentencial) × semidecidível (predicados).
- Correção × completude.

## 5. Armadilhas conceituais (hipóteses de atenção)
São pontos em que a confusão é plausível, não afirmações sobre frequência na prova.
- Afirmar que a conversa do condicional é equivalente a ele.
- Traduzir 'todo A é B' com conjunção em vez de condicional.
- Trocar a ordem de quantificadores achando que não muda nada.
- Confundir argumento válido com conclusão verdadeira: validade é forma, não verdade das premissas.

## 6. Recapitulação
Retome em voz alta, na ordem: Proposições e conectivos; Tabelas-verdade; Argumentos; Lógica sentencial e fórmulas; Lógica de predicados e decidibilidade. Para cada bloco, cite a definição central e uma diferença conceitual.

## 7. Perguntas de fixação (com respostas)
1. **Quando p→q é falso?** — Somente quando p é verdadeiro e q é falso.
2. **Qual a negação de p→q?** — p ∧ ¬q.
3. **Quantas linhas tem a tabela-verdade de 4 proposições?** — 16 (2⁴).
4. **A lógica de predicados é decidível?** — Não; é semidecidível.

## Limites
- Roteiro construído a partir das sínteses do módulo; detalhes, exceções e referências estão no documento completo.
- Qualquer analogia usada na gravação deve ser apresentada como simplificação didática, com seu limite explícito.
- Itens marcados no material como "não verificados" mantêm essa ressalva no documento completo.
