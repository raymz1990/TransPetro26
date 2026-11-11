# Teste de envio ao NotebookLM — procedimento e registro

**Status: EXECUTADO PARCIALMENTE em 2026-11-11** (Gemini Notebook, antigo NotebookLM, em `notebook.google.com`; upload feito pelo usuário, perguntas feitas pelo Claude). Itens 1 a 4 verificados; itens 5 a 7 pendentes.

## Escopo mínimo do teste (um módulo piloto)
Módulo sugerido: **M03** (menor fonte, 51 KB). Fontes a adicionar a um notebook novo:
1. `fontes/M03_Processos_Gerenciamento_Completo.md`
2. `fontes/questoes/M03_Processos_Gerenciamento_Questoes_sem_gabarito.md`
3. `roteiros-podcast/03-processos-gerenciamento/M03_Processos_Gerenciamento_Roteiro_Podcast.md`

Não adicionar o gabarito comentado até terminar o treino.

## Verificações
| # | Verificação | Resultado | Observações |
|---|---|---|---|
| 1 | O NotebookLM aceita os três `.md` (formato Markdown) sem erro | OK | Três fontes listadas, sem erro, com ícone de Markdown |
| 2 | Títulos e tabelas aparecem íntegros na visualização da fonte | Não verificado | Só se viu a lista de fontes |
| 3 | Pergunta de controle: "Quantos processos tem cada grupo do PMBOK 6?" → deve responder 2, 24, 10, 12, 1 | OK | Respondeu 49 processos em 5 grupos: 2, 24, 10, 12 e 1, com citações |
| 4 | Pergunta de lacuna: tema fora das fontes → deve informar que não há base | OK | Perguntada a incidência percentual de Riscos: informou que as fontes não trazem esse dado e citou a regra de não inferir incidência; descreveu corretamente os 7 processos de Riscos (5+1+1) |
| 5 | Prompt `prompts/podcast.md` + roteiro: o áudio segue a pauta, sem inventar estatística | Pendente | Exige gerar o resumo em áudio no Studio e ouvi-lo |
| 6 | Prompt `prompts/simulado.md`: questões marcadas como geradas pelo NotebookLM | Pendente | |
| 7 | Tamanho: fonte dentro do limite por arquivo do NotebookLM (verificar limite vigente) | Pendente | M03 (51 KB) passou; M01 tem 166 KB e M09 148 KB: testar antes de enviar |

## Após o teste
Registrar resultados acima, ajustar `tools/build_notebooklm.py` se houver incompatibilidade (formato, tamanho) e atualizar o `README.md`.
