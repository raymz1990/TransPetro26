# Relatório de execução — Banco de questões, lote piloto do Módulo 7 (Análise de dados e informações)

| Campo | Valor |
|---|---|
| Data | 2026-11-01 |
| Prompt | 04 — banco de questões comentadas, fase 1 (lote piloto), módulo 7 |
| Tipo | Questões **autorais** (`AUT-000061` a `AUT-000070`) — **Questão autoral — estilo Cesgranrio.** |
| Status | `validada` pelo usuário em 2026-11-01 (aprovação do lote; sem revisão por terceiros; ressalvas: fórmula de planilha não testada em aplicativo; referenciais de BI de memória) |
| Lotes anteriores | M01 a M06 aprovados pelo usuário (60 questões `validada`, sem revisão por terceiros) |

## 1. Módulo e assuntos

M07 — Análise de dados e informações. Assuntos: DIKW (dado, informação, conhecimento e inteligência); tipos de análise em BI; mapeamento de fontes e fonte de verdade; dados estruturados, semiestruturados e não estruturados; OLAP (slice e dice, com cálculo); características do data warehouse; tipos de tabela fato; SOMASES em planilha (com cálculo); medida × coluna calculada em ferramentas de BI; correlação × causalidade na geração de insights. Itens secundários: 7.8 (Q68) e 7.11 (Q70).

## 2. Quantidades

| Critério | Resultado |
|---|---|
| Questões criadas | 10 |
| Dificuldade | Fácil 3 · Média 5 · Difícil 2 |
| Habilidade | Aplicação 4 · Compreensão 2 · Resolução de problemas 2 · Análise 1 · Avaliação 1 |
| Tipo | Cenário 7 · Cálculo 2 · Comparativa 1 |
| Gabaritos | A 2 · B 2 · C 2 · D 2 · E 2 |
| Status | Validadas 10 (aprovação do usuário) · Em revisão 0 · Reprovadas 0 |
| Cobertura do M07 | 10 de 11 itens com questão principal; item 7.11 só como secundário |

## 3. Verificações realizadas

- **Estrutura (script):** 5 alternativas; gabarito válido; análise individual das 5 alternativas; rótulo de autoral; `fonte_origem` nula; arquivo de teoria existente; sem IDs duplicados; módulo correto.
- **Cálculos por execução:**
  - **Q65 (OLAP, slice e dice):** cubo carregado em SQLite; total do subcubo = 340; distratores 415 (só slice), 370 (slice e produtos), 365 (slice e regiões) e 570 (dice sem slice) conferidos.
  - **Q68 (SOMASES):** soma calculada em Python = 220; distratores 280, 390, 450 e 170 conferidos. O resultado da fórmula **não foi testado em um aplicativo de planilha**; a lógica de `SOMASES` (critérios combinados por E) e do critério `"<>Mar"` é a do aplicativo, descrita de memória.
- **Conteúdo conceitual:** conferido contra os arquivos de teoria do M07 (validados). Fatos conferidos em fonte secundária na revisão do M07: DIKW, slice e dice, tipos de dados (AWS), títulos dos tipos de tabela fato (Kimball), quatro características do DW (Wikipedia; atribuição a Inmon não confirmada).
- **Pistas involuntárias:** a alternativa correta não é a mais longa em nenhuma das 10 questões após o equilíbrio das extensões; gabaritos equilibrados entre A e E.
- **Duplicidade com provas anteriores:** características do data warehouse e operações OLAP aparecem em questões catalogadas (2023); este lote usa enunciados, dados e alternativas próprios e não reproduz os textos.

## 4. Itens do edital cobertos

7.1 a 7.10 (principais); 7.11 (secundário, Q70). O item 7 (título) não tem questões próprias.

## 5. Lacunas

- **7.11** ("BI como suporte a processos de tomada decisão"): só como secundário.
- Sem questões sobre: mineração de dados (classificação, agrupamento, regras de associação); ETL no contexto do BI; MOLAP, ROLAP e HOLAP; roll-up, drill-down e pivot; modelagem estrela × floco de neve e dimensões; relatórios paginados × interativos; funções de planilha de pesquisa (PROCV/PROCX) e tabelas dinâmicas; níveis de decisão (operacional, tático e estratégico); KPIs.

## 6. Problemas e limites

- **Ressalvas do M07:** interpretação dos itens 7.2, 7.3 e 7.7 a 7.9 a confirmar; a atribuição das quatro características de DW a Inmon, pivot e drill-through como operações OLAP, versões e funções de planilha e técnicas de otimização estão de memória. As questões herdam essas ressalvas.
- **Planilha:** o nome da função (`SOMASES`) varia por idioma e aplicativo; a questão fixa o contexto, mas a equivalência em outros aplicativos não foi verificada.
- **Revisão independente:** não houve revisão por terceiros.
- **Estilo Cesgranrio:** calibrado pelo formato e pelo conteúdo, sem alegar autenticidade ou frequência.

## 7. Avaliação crítica e ajustes recomendados

- O lote tem duas questões de cálculo verificáveis por execução e várias de classificação por cenário. Recomenda-se, na expansão: mais questões sobre **OLAP** (roll-up e drill-down com hierarquias; MOLAP × ROLAP), **modelagem dimensional** (grão, estrela × floco de neve), **BI e decisão** (7.11), **mineração de dados** e análise de afirmações; e **integradoras** com o Módulo 1 (ETL, DW) e o Módulo 6 (dashboards).

## 8. Arquivos

Criados: `banco-questoes/autorais/por-assunto/m07-analise-dados.json`, `m07-analise-dados-questoes.md`, `m07-analise-dados-gabaritos-comentados.md`; este relatório.
Modificados (regenerados): `banco-questoes/catalogo-questoes.md`, `banco-questoes/relatorio-cobertura-questoes.md`; `docs/edital/controle-cobertura.md` (coluna Questões), `docs/CONTEXTO-ATUAL.md`.
