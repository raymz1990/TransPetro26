# Esquema dos dados das questões — Banco de questões

**Status:** v1.0 (2026-10-31), vigente para o lote piloto. Compatível com a integração futura do site e do NotebookLM; **nenhuma funcionalidade do site foi desenvolvida**.

## Identificadores

| Prefixo | Categoria | Regra |
|---|---|---|
| `OFI-000001` | Oficial | Somente com origem verificável (banca, concurso, ano, prova, número, fonte). **Nenhuma questão oficial foi reproduzida neste banco até agora.** |
| `ADP-000001` | Adaptada | Exige fonte original identificada e descrição das alterações. Nenhuma criada. |
| `AUT-000001` | Autoral | Rótulo obrigatório: **Questão autoral — estilo Cesgranrio.** Campos de concurso, ano e questão original **nulos**. |

Os identificadores são sequenciais por categoria, **não são reutilizados** e independem do módulo.

## Campos (JSON)

| Campo | Descrição |
|---|---|
| `id`, `tipo`, `rotulo` | Identificação e categoria; `rotulo` repete o aviso de questão autoral |
| `modulo` | Pasta do módulo (por exemplo, `01-arquitetura-dados`) |
| `assunto` | Tópico específico |
| `item_edital`, `id_matriz` | Item literal do Anexo IV (por exemplo, `1.4`) e ID da matriz (por exemplo, `E5-005`) |
| `itens_secundarios` | Itens do edital tocados de forma secundária |
| `dificuldade` | `facil`, `media`, `dificil` (classificação pedagógica, **não** estatística oficial) |
| `habilidade` | `memorizacao`, `compreensao`, `interpretacao`, `aplicacao`, `analise`, `avaliacao`, `resolucao_problemas` |
| `tipo_questao` | `conceitual`, `interpretativa`, `aplicada`, `calculo`, `cenario`, `comparativa`, `normativa`, `logica` |
| `enunciado`, `alternativas` | Texto e alternativas `A` a `E` |
| `gabarito` | Letra correta |
| `resolucao`, `analise_alternativas` | Resolução comentada e justificativa de **cada** alternativa (a correta inicia com "Correta", as demais com "Incorreta") |
| `fundamentacao` | Módulo, assunto, item, arquivo de teoria e referência |
| `ponto_atencao`, `revisao_rapida`, `tags` | Estudo e filtros |
| `fonte_origem` | **Nulo** em autorais |
| `verificacao` | Como o gabarito foi conferido (execução, teoria) |
| `status_validacao` | `rascunho`, `em_revisao`, `validada`, `reprovada` |

Somente questões `validada` poderão compor simulados oficiais do projeto.

## Campos reservados para o caderno de erros (preenchidos pelo estudante, futuramente)

`resposta_selecionada`, `resposta_correta`, `data_resolucao`, `tempo_gasto`, `resultado`, `tipo_erro`, `justificativa_erro`, `necessita_revisao`, `proxima_revisao`.
Tipos de erro: falta de conhecimento, confusão conceitual, interpretação incorreta, desatenção, erro de cálculo, aplicação inadequada, gestão de tempo, chute.

## Organização de arquivos

- `autorais/por-assunto/mNN-<modulo>.json`: fonte estruturada do lote.
- `autorais/por-assunto/mNN-<modulo>-questoes.md`: questões **sem** gabarito (treino).
- `autorais/por-assunto/mNN-<modulo>-gabaritos-comentados.md`: gabaritos e comentários (A a G).
- `catalogo-questoes.md` e `relatorio-cobertura-questoes.md`: índice e cobertura.
