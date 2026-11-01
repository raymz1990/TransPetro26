# Relatório de produção — Módulo 7 (Análise de dados e informações)

| Campo | Valor |
|---|---|
| Data | 2026-10-31 |
| Itens do edital | 7 e 7.1 a 7.11 (E5-059 a E5-070) |
| Arquivos | 8, em `conteudo/07-analise-dados/` (todos escopo A) |
| Status final | `VALIDADO` pelo usuário em 2026-10-31, **com ressalvas** (interpretação dos itens 7.2, 7.3 e 7.7 a 7.9 a confirmar; fontes de memória acima) |

## Arquivos e itens atendidos

| Arquivo | Itens |
|---|---|
| `01-dados-informacao-conhecimento.md` | 7 (título), 7.1 |
| `02-business-intelligence.md` | 7.2 |
| `03-fontes-e-mapeamento-dados.md` | 7.3 |
| `04-dados-estruturados-e-nao-estruturados.md` | 7.4 |
| `05-olap-e-data-warehouse.md` | 7.5, 7.6 |
| `06-modelagem-multidimensional.md` | 7.7 |
| `07-dashboards-e-planilhas.md` | 7.8, 7.9 |
| `08-insights-e-tomada-de-decisao.md` | 7.10, 7.11 |

## Verificações

- Os 12 textos literais (item 7 e 7.1–7.11) constam nos arquivos; sem complementos (C); todos os arquivos têm atenção para a prova, síntese e referências; sem frases proibidas.
- **Sem repetição:** DW, Inmon × Kimball, OLTP × OLAP, estrela/floco de neve, fatos, SCD e NoSQL ficam no Módulo 1 (`09`, `07`), com remissão; princípios visuais, KPIs e tipos de dashboard ficam no Módulo 6 (`05`, `06`).
- **Provas (apenas as duas catalogadas; gabaritos de terceiros, não validados):** 2023 — Q56 (DW, B) e Q62 (operações OLAP, E); 2018 — Q21 (agrupamento, fora do edital) e Q54 (tipo de SI para decisão, parcialmente aderente). Itens 7.1, 7.3, 7.4, 7.7 a 7.11 sem questão aderente; sem inferência de frequência.

## Fontes verificadas online (2026-10-31)

- Kimball Group: processo de quatro passos; títulos dos quatro tipos de tabela fato e dos SCD tipos 0 a 7 (descrições **não** lidas).
- Operações roll-up, drill-down e slice/dice; tipos MOLAP, ROLAP e HOLAP (Wikipedia e IBM).
- Origem do termo BI (Wikipedia: Devens 1865, Luhn 1958, Dresner 1989 como termo guarda-chuva).
- Hierarquia DIKW (Wikipedia: Ackoff, apresentada em 1988 e publicada em 1989; sua versão inclui a camada de compreensão; definições debatidas).
- Dados estruturados, semiestruturados e não estruturados (AWS).

## Revisão do usuário (2026-10-31, verificação adicional)

Confirmados online: seis fases do CRISP-DM (Wikipedia); `GROUP BY ROLLUP`/`CUBE` (documentação do PostgreSQL); quatro características de DW como seções da página "Data warehouse" da Wikipedia (atribuição a Inmon **não** confirmada); existência de `XLOOKUP`, `VLOOKUP` e tabela dinâmica (índice de ajuda da Microsoft). **Não confirmados:** pivot, drill-through e drill-across como operações OLAP (a Wikipedia lista três operações básicas; texto mantido como "de memória"); versões do Excel com `XLOOKUP`; `SUMIFS`; validação de dados; fases de Simon e níveis de Anthony. Arquivos 02, 05 e 07 ajustados.

## Não verificado (de memória)

- **Definição de Inmon** (quatro características): AWS e IBM não a citam; mantida de memória, como no M1.
- **Pivot e drill-up** como operações OLAP (não confirmadas na fonte consultada); *drill-through* e *drill-across*; ODS; arquiteturas em camadas.
- **Funções de planilha** (`PROCV`, `PROCX`, `SOMASES` etc.), tabela dinâmica e recursos de ferramentas de BI: nenhuma página lida (tentativa de página da Microsoft: HTTP 404, não repetida).
- Técnicas de otimização; descrições dos tipos de fato e dos SCD; CRISP-DM/KDD; Simon, Anthony, Nonaka e Takeuchi, Codd, Gartner (glossário não lido); classificação de *analytics*.
- Exemplos de SQL dos arquivos 05 e 06 são ilustrativos e **não foram executados**.

## Dúvidas de interpretação (a confirmar)

- **7.2** (técnicas e métodos de BI): inclui mineração de dados e *analytics* como aprofundamento; a Q21/2018 sobre agrupamento é considerada fora do edital pelo catálogo.
- **7.3** (mapeamento de fontes): interpretado como inventário de fontes, mapeamento origem–destino, qualidade e linhagem.
- **7.7 a 7.9:** textos amplos e sem ferramenta definida; tratados de forma conceitual e independente de produto.
- **7.10 e 7.11:** o texto do 7.11 omite "de" ("tomada decisão"); mantido literal.
- O item 7 (E5-059) é título sem texto próprio: coberto como introdução no arquivo `01`.

## Pendências

Confirmação das interpretações; verificação das fontes listadas; revisão do usuário. Questões, flashcards, simulados, NotebookLM e site não iniciados. Módulos M08 e M09 não iniciados.
