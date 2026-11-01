# Relatório de execução — Banco de questões, lote piloto do Módulo 8 (Lógica matemática)

| Campo | Valor |
|---|---|
| Data | 2026-11-01 |
| Prompt | 04 — banco de questões comentadas, fase 1 (lote piloto), módulo 8 |
| Tipo | Questões **autorais** (`AUT-000071` a `AUT-000080`) — **Questão autoral — estilo Cesgranrio.** |
| Status | `validada` pelo usuário em 2026-11-01 (aprovação do lote após revisão independente por resolução às cegas; sem revisão por terceiros; ressalvas: itens 8.5, 8.6 e 8.9) |
| Lotes anteriores | M01 a M07 aprovados pelo usuário (70 questões `validada`, sem revisão por terceiros) |

## 1. Módulo e assuntos

M08 — Lógica matemática. Assuntos: negação do condicional; correção e completude de sistemas dedutivos; valores-verdade de proposições compostas; tautologia, contradição e contingência; validade de argumentos; equivalência do condicional (contrapositiva); negação de quantificadores; ordem dos quantificadores; regras de formação de fórmulas; decidibilidade da lógica sentencial e número de valorações. Itens secundários: 8.9 (Q73 e Q80) e 8.1 (Q76).

## 2. Quantidades

| Critério | Resultado |
|---|---|
| Questões criadas | 10 |
| Dificuldade | Fácil 3 · Média 5 · Difícil 2 |
| Habilidade | Aplicação 3 · Análise 3 · Compreensão 2 · Resolução de problemas 1 · Memorização 1 |
| Tipo | Lógica 7 · Conceitual 1 · Cálculo 1 · Cenário 1 |
| Gabaritos | A 2 · B 2 · C 2 · D 2 · E 2 |
| Status | Validadas 10 (aprovação do usuário) · Em revisão 0 · Reprovadas 0 |
| Cobertura do M08 | 8 de 9 itens com questão principal; item 8.9 só como secundário |

## 3. Verificações realizadas

- **Estrutura (script):** 5 alternativas; gabarito válido; análise individual das 5 alternativas; rótulo de autoral; `fonte_origem` nula; arquivo de teoria existente; sem IDs duplicados; módulo correto.
- **Verificação por execução (enumeração de todas as valorações):**
  - **Q71:** apenas `p ∧ ¬q` é equivalente a ¬(p → q) entre as cinco alternativas.
  - **Q73:** A = verdadeiro; B = falso.
  - **Q74:** (p ∨ q) → (p ∧ q) é contingência; (p → q) ∧ (p ∧ ¬q), contradição; (p ∧ q) → (p ∨ q), tautologia.
  - **Q75:** dos cinco argumentos, apenas o C (modus tollens) é válido; os demais têm contraexemplo.
  - **Q76:** apenas a contrapositiva é equivalente ao condicional.
  - **Q77:** em domínios de tamanho 1 a 3, apenas a alternativa A é equivalente a ¬∀x(C → S).
  - **Q78:** em domínios de tamanho 1 a 3, há 176 modelos com ∀∃ verdadeira e ∃∀ falsa e nenhum com ∃∀ verdadeira e ∀∃ falsa.
  - **Q80:** 2⁵ = 32.
- **Conceitual:** Q72 (correção × completude), Q79 (regras de formação) e a decidibilidade (Q80) conferidas contra o arquivo de teoria e, quanto às definições, em Wikipedia e SEP na revisão do M08.
- **Pistas involuntárias:** a alternativa correta é a mais longa em 2 das 10 questões após o equilíbrio das extensões; gabaritos equilibrados entre A e E.
- **Duplicidade com provas anteriores:** argumentos e conclusões válidas, consequência lógica com quantificadores, tradução em predicados e contradição aparecem em questões catalogadas (2018 e 2023); este lote usa enunciados e alternativas próprios (por exemplo, não há questão de tradução de sentença em predicados nem de ordenação por premissas) e não reproduz os textos.

## Revisão do usuário (2026-11-01, revisão independente)

**Resolução independente:** um agente resolveu as 10 questões **sem acesso ao gabarito** nem ao JSON, apenas ao arquivo de questões. As 10 respostas coincidiram com o gabarito (71 B, 72 D, 73 A, 74 E, 75 C, 76 D, 77 A, 78 C, 79 E, 80 B), e nenhuma alternativa foi considerada defensável como segunda correta.
**Ajustes feitos a partir dos apontamentos:**
- **Q73:** as proposições compostas A e B passaram a se chamar **X e Y**, para não se confundirem com as letras das alternativas.
- **Q75:** a disjunção da alternativa D passou a ser explicitada como "ou inclusivo"; os rótulos das alternativas deixaram de afirmar nomes de formas (por exemplo, "silogismo disjuntivo", "dilema construtivo") para argumentos inválidos; agora cada alternativa traz a justificativa que o aluno poderia dar.
- **Q77:** a análise da alternativa C passou a citar explicitamente a alternativa B (mesmo sentido).
- **Q78:** a sentença foi reescrita com o predicado T(x) ("x é técnico"), pois, na versão anterior, a sentença II exigiria que o supervisor supervisionasse a si mesmo; a enumeração foi refeita (4.164 modelos; 464 com I verdadeira e II falsa; nenhum com II verdadeira e I falsa).
- **Q80:** o enunciado passou a falar em "no máximo" 32 valorações (uma linha falsa já refuta a tautologia) e os expoentes passaram a aparecer como 2⁵ e 5².
**Mantido:** o gabarito das 10 questões não mudou.

## 4. Itens do edital cobertos

8.1 a 8.8 (principais); 8.9 (secundário). O item 8 (título) não tem questões próprias.

## 5. Lacunas

- **8.9** (funções de avaliação): só como secundário.
- Sem questões sobre: conectivos em linguagem natural (condições necessária e suficiente; "somente se"); precedência de conectivos; tradução de sentenças para predicados; dedução natural (regras de introdução e eliminação); formas normais; resolução; completude funcional; incompletude/indecidibilidade da LPO; **problemas de raciocínio lógico de concurso** (ordenação e associação de atributos), pendência da sua decisão registrada no M08.
- Não há questões integradoras com outros módulos.

## 6. Problemas e limites

- **Ressalvas do M08:** interpretação dos itens 8.5, 8.6 e 8.9 a confirmar; precedência dos conectivos varia entre autores; resultados metateóricos (incompletude, P×NP) e livros de memória. As questões não dependem de convenção de precedência (as fórmulas usam parênteses).
- **Revisão independente:** não houve revisão por terceiros.
- **Estilo Cesgranrio:** calibrado pelo formato e pelo conteúdo, sem alegar autenticidade ou frequência. Provas reais de raciocínio lógico podem seguir estilo diferente (por exemplo, com quadros de associação), não coberto aqui.

## 7. Avaliação crítica e ajustes recomendados

- Este é o lote com **maior proporção de verificação por execução** (sete questões conferidas por enumeração), o que reduz o risco de erro de gabarito. Recomenda-se, na expansão: questões com **condição necessária e suficiente**, **tradução para predicados**, **dedução natural**, **argumentos categóricos**; mais questões **difíceis** e de **análise de afirmações**; e, se o usuário decidir, **problemas de raciocínio lógico** no estilo de concurso.

## 8. Arquivos

Criados: `banco-questoes/autorais/por-assunto/m08-logica-matematica.json`, `m08-logica-matematica-questoes.md`, `m08-logica-matematica-gabaritos-comentados.md`; este relatório.
Modificados (regenerados): `banco-questoes/catalogo-questoes.md`, `banco-questoes/relatorio-cobertura-questoes.md`; `docs/edital/controle-cobertura.md` (coluna Questões), `docs/CONTEXTO-ATUAL.md`.
