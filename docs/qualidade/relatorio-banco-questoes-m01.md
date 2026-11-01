# Relatório de execução — Banco de questões, lote piloto do Módulo 1 (Arquitetura de Dados)

| Campo | Valor |
|---|---|
| Data | 2026-10-31 |
| Prompt | 04 — banco de questões comentadas, fase 1 (lote piloto), módulo 1 |
| Tipo | Questões **autorais** (`AUT-000001` a `AUT-000010`) — **Questão autoral — estilo Cesgranrio.** |
| Status | `validada` pelo usuário em 2026-10-31 (aprovação do lote; **sem** revisão por terceiros) |

## 1. Módulo e assuntos

M01 — Arquitetura de Dados. Assuntos: níveis de modelagem (1.1), normalização (1.4), integridade referencial (1.5), modelagem dimensional (1.7), SQL (1.10), ACID e transações (1.14), desempenho e índices (1.17), NoSQL e tipos de banco (1.18), ETL e ELT (1.19), qualidade e dados mestres e de referência (1.21). Itens secundários: 1.6, 1.12, 1.16, 1.23.

## 2. Quantidades

| Critério | Resultado |
|---|---|
| Questões criadas | 10 |
| Dificuldade | Fácil 3 · Média 5 · Difícil 2 |
| Habilidade | Compreensão 4 · Análise 2 · Aplicação 2 · Avaliação 1 · Resolução de problemas 1 |
| Tipo | Cenário 5 · Aplicada 2 · Cálculo 1 · Comparativa 1 · Conceitual 1 |
| Gabaritos | A 2 · B 2 · C 2 · D 2 · E 2 |
| Status | Validadas 10 (aprovação do usuário) · Em revisão 0 · Reprovadas 0 |
| Cobertura do M01 | 10 de 23 itens com questão principal; 13 sem questão principal |

## 3. Verificações realizadas

- **Estrutura (script):** 5 alternativas por questão; gabarito válido; análise individual das 5 alternativas (a correta inicia com "Correta", as demais com "Incorreta"); rótulo de questão autoral; `fonte_origem` nula; arquivo de teoria existente; sem IDs duplicados.
- **Gabaritos por execução (SQLite):** Q3 (integridade referencial: UPDATE propagado, DELETE e INSERT rejeitados), Q4 (resultado da consulta e das variantes usadas como distratores: INNER JOIN, COUNT(*), WHERE custo IS NOT NULL) e Q10 (plano de execução: SCAN com UPPER(tag); SEARCH com índice sobre a expressão). As demais são conceituais, conferidas contra os arquivos de teoria do M01 (validados).
- **Pistas involuntárias:** a alternativa correta foi a mais longa em apenas 1 das 10 questões após o equilíbrio das extensões; as posições dos gabaritos ficaram equilibradas.
- **Duplicidade:** nenhuma questão repete outra do lote. Não foram reproduzidos enunciados ou alternativas de provas anteriores.

## 4. Itens do edital cobertos

1.1, 1.4, 1.5, 1.7, 1.10, 1.14, 1.17, 1.18, 1.19 e 1.21 (principais). Detalhe por item em `banco-questoes/relatorio-cobertura-questoes.md`.

## 5. Lacunas

Sem questão principal: 1.2, 1.3, 1.6, 1.8, 1.9, 1.11, 1.12, 1.13, 1.15, 1.16, 1.20, 1.22 e 1.23. Não há questões do tipo normativo nem de memorização neste lote. Módulos M02 a M09 e Conhecimentos Gerais: nenhuma questão.

## 6. Problemas e limites

- **Estilo Cesgranrio:** a avaliação do estilo se baseia nas duas provas catalogadas, que **não** formam amostra para tendências (`docs/estrategia/`); o lote foi calibrado pelo conteúdo e pelo formato, **sem** alegar autenticidade ou frequência.
- **Dependência de SGBD:** Q3 e Q10 dependem de comportamentos que variam por produto (RESTRICT/NO ACTION; índices sobre expressões); os enunciados fixam as premissas ("assuma", "considere um SGBD que permite índices sobre expressões"). As conferências foram feitas em SQLite, não em outros SGBDs.
- **Revisão independente:** não houve revisão por terceiros; o status permanece `em_revisao`.

## 7. Avaliação crítica e ajustes recomendados antes da expansão

- **Pontos fortes:** comentários completos (A a G), análise individual de cada alternativa, distratores baseados em erros reais (inversão de ações referenciais, COUNT(*) × COUNT(coluna), soma de saldo no tempo, ETL × ELT), gabaritos verificáveis por execução quando aplicável.
- **Pontos a ajustar:** (a) incluir mais questões de **análise de afirmações** (itens "I, II, III"), formato comum em provas, e questões de **interpretação** de texto técnico; (b) elevar a proporção de **difíceis** e de questões **integradoras** (por exemplo, SQL + normalização); (c) cobrir os itens sem questão principal; (d) definir se o banco incluirá **adaptadas/oficiais** (hoje: nenhuma) e como tratar direitos autorais das provas; (e) revisar a **extensão** dos enunciados.
- **Recomendação:** aprovar (ou ajustar) o padrão do M01 antes de iniciar o M02.

## 8. Arquivos

Criados: `banco-questoes/autorais/por-assunto/m01-arquitetura-dados.json`, `m01-arquitetura-dados-questoes.md`, `m01-arquitetura-dados-gabaritos-comentados.md`; `banco-questoes/esquema-questoes.md`, `catalogo-questoes.md`, `relatorio-cobertura-questoes.md`; este relatório.
Modificados: `docs/edital/controle-cobertura.md` (coluna Questões dos 10 itens do M01 em `EM_REVISAO`), `docs/CONTEXTO-ATUAL.md`.
