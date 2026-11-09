# Teste de envio ao NotebookLM — procedimento e registro

**Status: NÃO EXECUTADO.** O envio exige a conta Google do usuário e não foi feito pelo Claude. Este arquivo define o teste e guarda o resultado.

## Escopo mínimo do teste (um módulo piloto)
Módulo sugerido: **M03** (menor fonte, 51 KB). Fontes a adicionar a um notebook novo:
1. `fontes/M03_Processos_Gerenciamento_Completo.md`
2. `fontes/questoes/M03_Processos_Gerenciamento_Questoes_sem_gabarito.md`
3. `roteiros-podcast/03-processos-gerenciamento/M03_Processos_Gerenciamento_Roteiro_Podcast.md`

Não adicionar o gabarito comentado até terminar o treino.

## Verificações
| # | Verificação | Resultado | Observações |
|---|---|---|---|
| 1 | O NotebookLM aceita os três `.md` (formato Markdown) sem erro | | Se recusar, converter para PDF/TXT e registrar |
| 2 | Títulos e tabelas aparecem íntegros na visualização da fonte | | |
| 3 | Pergunta de controle: "Quantos processos tem cada grupo do PMBOK 6?" → deve responder 2, 24, 10, 12, 1 | | |
| 4 | Pergunta de lacuna: tema fora das fontes → deve informar que não há base | | |
| 5 | Prompt `prompts/podcast.md` + roteiro: o áudio segue a pauta, sem inventar estatística | | |
| 6 | Prompt `prompts/simulado.md`: questões marcadas como geradas pelo NotebookLM | | |
| 7 | Tamanho: fonte dentro do limite por arquivo do NotebookLM (verificar limite vigente) | | M01 tem 166 KB e M09 148 KB: testar antes de enviar |

## Após o teste
Registrar resultados acima, ajustar `tools/build_notebooklm.py` se houver incompatibilidade (formato, tamanho) e atualizar o `README.md`.
