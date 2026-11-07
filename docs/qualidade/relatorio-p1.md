# Relatório da P1 — T04 a T08 (2026-11-06)

## Resultado

| Task | Estado | Entrega |
|---|---|---|
| T04 — Oficiais e adaptadas | **Parcial** | 41 `OFI-` (Transpetro 2023, Prova 6), 9 módulos; 188 das 229 candidatas pendentes; 0 `ADP-` |
| T05 — Autorais para cobrir os itens sem questão | Feita | 30 `AUT-` (091 a 120); **94 de 94 itens** com questão principal; todos os módulos com mais de 10 autorais |
| T06 — Conhecimentos Gerais | Feita | 35 `AUT-` (121 a 155): 24 de Português (12 de 12 itens), 11 de Inglês (2 de 2 itens) |
| T07 — Simulados (dados) | Feita | 14 simulados: ESP-01, ESP-02, COM-01 (70), GER-01, M01 a M09, DIAG-01 |
| T08 — Simulados no site | Feita | `timer.js`, `simulations.js`, CSS, rotas `#/simulados`, histórico, integração com caderno de erros e desempenho |

Banco total: **196 questões** (41 oficiais, 155 autorais); 90 `validada` (lote piloto, aprovadas pelo usuário) e **106 `em_revisao`** (T04 a T06, aguardam o usuário).

## Verificações realizadas

- `python tools/validar_banco.py`: 196 questões, 0 erros (IDs únicos, 5 alternativas, gabarito e análise coerentes, `fonte_origem` completa em oficiais, rótulo de autoral, arquivo de teoria existente).
- `python tools/cobertura.py`: 0 itens sem questão principal.
- Conferência por execução: SQL (T05: UPDATE/DELETE/INSERT = 283; SAVEPOINT = 120) em SQLite; valoração lógica por enumeração; argumento da OFI Q28 por tabela-verdade; complexidade ciclomática contada à mão.
- Simulados: IDs existentes, sem repetição dentro do simulado, tamanhos 50/70/20, ESP-01 e ESP-02 disjuntos; `build_site_data.py` aborta se algum simulado citar ID inexistente.
- Site, no navegador (servidor local, desktop e 375 px): lista, apresentação, início, resposta, marcação, navegação, confirmação, entrega manual, entrega automática por tempo esgotado (tempo adiantado em `localStorage`), resultado, histórico, ausência de gabarito durante a prova, sem erro de console, sem rolagem horizontal.
- Equilíbrio de alternativas (autorais T05): correta é a mais longa em 4 de 30 (antes do ajuste, 18 de 30); T06: 12 de 35. Letras A a E distribuídas de forma regular.

## Limites e riscos (não omitir)

1. **Nenhuma questão nova foi revisada por terceiros** nem validada pelo usuário. O gabarito das autorais decorre da teoria do projeto; o das oficiais, de espelho de terceiros.
2. **Oficiais:** texto transcrito do PDF (extração de texto, conferida contra o caderno); gabarito da Prova 6 (2023) **não validado contra a banca**. Pontos frágeis registrados nas próprias questões: Q55 (alternativa B incompleta, por exclusão), Q70 (nome do grupo abreviado), Q44 (ISO 27002:2013 × 2022), Q24 (B discutível), Q60 (enunciado vago). Ficaram de fora Q21, Q22, Q27 (diagramas), Q23 (enunciado incompleto na extração), Q30 e Q62 (ver `banco-questoes/oficiais/registro-t04.md`).
3. **Gerais:** regras de gramática conferidas pela teoria do projeto e pela norma-padrão, sem VOLP/ABL e sem gramática de referência; textos e alternativas em inglês criados pelo projeto. Alguns itens (crase, colocação pronominal, regência) têm aplicação polêmica em gramáticas diferentes; usei só casos consensuais.
4. **Simulados:** a distribuição por módulo é **pedagógica** (proporcional ao número de itens do Anexo IV), não oficial. O completo tem 20 questões de Gerais em revisão e o banco de Inglês tem apenas 11 questões, então não há um segundo completo com Inglês inédito. O diagnóstico tem 8 de 20 respostas B (viés de seleção; não corrigido).
5. **Site:** testado em servidor local; **não** testado após publicação no GitHub Pages. O cronômetro usa o relógio real: não pausa se o usuário sair da tela (decisão deliberada, igual à prova). Em inglês e português, o texto-base é repetido em cada questão do simulado (cada questão é exibida isoladamente).
6. Os JSON de `site/assets/data/` precisam ser regerados com `python tools/build_site_data.py` após qualquer mudança nas questões ou simulados.

## Pendências

- Usuário validar as 106 questões `em_revisao` (ou apontar reprovadas).
- T04: 188 candidatas (prioridade: Transpetro 2018 e Petrobras 2018) e `ADP-`.
- Conferência dos gabaritos 2018/2023 contra a fonte oficial (T13).
- P2 e P3 inalteradas.
