# Relatório de produção — Módulo 8 (Lógica matemática)

| Campo | Valor |
|---|---|
| Data | 2026-10-31 |
| Itens do edital | 8 e 8.1 a 8.9 (E5-071 a E5-080) |
| Arquivos | 7, em `conteudo/08-logica-matematica/` (todos escopo A) |
| Status final | `VALIDADO` pelo usuário em 2026-10-31, **com ressalvas** (interpretação dos itens 8.5, 8.6 e 8.9 a confirmar; decisão sobre puzzles pendente; fontes de memória acima) |

## Arquivos e itens atendidos

| Arquivo | Itens |
|---|---|
| `01-proposicoes-e-conectivos.md` | 8 (título), 8.1 |
| `02-tabelas-verdade.md` | 8.8 |
| `03-argumentacao-logica.md` | 8.2 |
| `04-logica-proposicional.md` | 8.3 |
| `05-logica-de-predicados.md` | 8.4 |
| `06-formulas-e-sistemas-dedutivos.md` | 8.5, 8.6 |
| `07-decidibilidade-e-funcoes-avaliacao.md` | 8.7, 8.9 |

## Verificações

- Os 10 textos literais (item 8 e 8.1–8.9) constam nos arquivos; sem complementos (C); todos os arquivos têm atenção para a prova, síntese e referências; sem frases proibidas.
- **Conferido por script (Python, 2026-10-31):** tabelas dos conectivos; De Morgan; contrapositiva, conversa e inversa; negação do condicional e do bicondicional; exportação; distributiva; absorção; tautologias (p∨¬p, Peirce, (p→q)∨(q→p)); validade de modus ponens, modus tollens, silogismos hipotético e disjuntivo, dilema construtivo e resolução; invalidade da afirmação do consequente e da negação do antecedente; não associatividade do condicional; completude de NAND; negação de quantificadores, ordem ∀∃ × ∃∀ e domínio vazio em domínios finitos; contagem de valorações.
- **Provas (apenas as duas catalogadas; gabaritos de terceiros, não validados):** 2023 — Q28 (argumento, D), Q35 (consequência com quantificador, B), Q36 (anulada) e Q37 (sem item 8.x claro); 2018 — Q69 (tradução em predicados, A) e Q70 (contradição, C). Itens 8.5 a 8.7 e 8.9 sem questão primária; sem inferência de frequência.

## Revisão do usuário (2026-10-31, verificação adicional)

Confirmados online (Wikipedia e SEP): completude de Gödel (a página dá **1929** como tese e **1930** como publicação; o texto passou a registrar ambos); indecidibilidade da LPO (Church e Turing, 1936) e semidecidibilidade; Cook–Levin (SAT NP-completo); decidibilidade da proposicional, correção e completude; NAND e NOR completos; A, E, I, O e a questão da categoria vazia; Hilbert, sequentes (Gentzen, 1934/1935), tableaux (Beth, 1955) e resolução (Robinson, 1965). **Divergência corrigida:** a precedência dos conectivos **não é universal** (uma fonte usa ¬, →, ∧, ∨), e a associação à direita do → **não foi confirmada**; arquivos 01 e 06 agora orientam o uso de parênteses. TAUT co-NP-completo só em resumo automático; datas da dedução natural de Gentzen sem confirmação. Arquivos 01, 04, 05 e 06 ajustados.

## Não verificado (de memória)

- Incompletude de Gödel; co-NP e P versus NP (além do resumo citado); Löwenheim–Skolem; compacidade; teorema da dedução; completude da resolução; fragmentos decidíveis.
- Regras de dedução natural em detalhe; falácias informais.
- Livros: Copi, Mortari, Alencar Filho, Enderton, Mendelson.

## Dúvidas de interpretação (a confirmar)

- **8.9 "Funções de avaliação."**: interpretada como valoração/função de avaliação das fórmulas.
- **8.5 e 8.6:** regras de formação e sistemas dedutivos; escolha dos sistemas apresentados é interpretação.
- **8.7:** decidibilidade da lógica sentencial por tabela-verdade, com contraste com a LPO.
- **Questões de puzzle (2023, Q36 e Q37):** "raciocínio lógico" de concurso (ordenações e associações) não tem item 8.x claro; o módulo não desenvolve esse tipo de problema. A decisão de cobri-lo ou não, e em qual módulo ou complemento, fica para você.
- O item 8 (E5-071) é título sem texto próprio: coberto como introdução no arquivo `01`.

## Pendências

Confirmação das interpretações; verificação das fontes listadas; revisão do usuário. Questões, flashcards, simulados, NotebookLM e site não iniciados. Módulo M09 não iniciado.
