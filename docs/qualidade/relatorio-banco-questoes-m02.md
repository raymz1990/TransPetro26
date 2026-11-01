# Relatório de execução — Banco de questões, lote piloto do Módulo 2 (Gerenciamento de Projetos e Produtos)

| Campo | Valor |
|---|---|
| Data | 2026-10-31 |
| Prompt | 04 — banco de questões comentadas, fase 1 (lote piloto), módulo 2 |
| Tipo | Questões **autorais** (`AUT-000011` a `AUT-000020`) — **Questão autoral — estilo Cesgranrio.** |
| Status | `validada` pelo usuário em 2026-10-31 (aprovação do lote; sem revisão por terceiros; ressalva: textos do PMI não verificados) |
| Lote anterior | M01 (`AUT-000001` a `AUT-000010`) aprovado pelo usuário em 2026-10-31; marcado `validada` (sem revisão por terceiros) |

## 1. Módulo e assuntos

M02 — Gerenciamento de Projetos e Produtos. Assuntos: Scrum (cancelamento da Sprint; artefatos e compromissos; Sprint Review), Kanban (limite de WIP e Lei de Little), projeto × produto, SAFe (PI Planning), PMBOK 7 (EAP; domínios de desempenho), estruturas organizacionais e PMO por grau de controle. Item secundário: 2.7.

## 2. Quantidades

| Critério | Resultado |
|---|---|
| Questões criadas | 10 |
| Dificuldade | Fácil 3 · Média 5 · Difícil 2 |
| Habilidade | Compreensão 4 · Análise 3 · Aplicação 2 · Resolução de problemas 1 |
| Tipo | Conceitual 3 · Cenário 4 · Comparativa 2 · Cálculo 1 |
| Gabaritos | A 2 · B 2 · C 2 · D 2 · E 2 |
| Status | Validadas 10 (aprovação do usuário) · Em revisão 0 · Reprovadas 0 |
| Cobertura do M02 | 6 de 7 itens com questão principal; item 2.7 só como secundário (2.6 + 2.7) |

## 3. Verificações realizadas

- **Estrutura (script):** 5 alternativas; gabarito válido; análise individual das 5 alternativas (a correta inicia com "Correta"); rótulo de autoral; `fonte_origem` nula; arquivo de teoria existente; sem IDs duplicados; módulo correto.
- **Cálculo:** Q4 (Lei de Little): 12 ÷ 4 = 3 semanas; WIP-alvo = 2 × 4 = 8.
- **Conteúdo:** gabaritos conferidos contra os arquivos de teoria do M02 (validados). As questões de **Scrum, Kanban e SAFe** apoiam-se em conteúdo conferido em fonte oficial na revisão do M02 (Scrum Guide, Kanban Guide, site do SAFe). As de **PMBOK 7 (EAP, domínios), estruturas organizacionais e PMO por grau de controle** apoiam-se em conteúdo do PMI que **não pôde ser verificado em fonte primária** (pmi.org bloqueado, HTTP 403): o gabarito está coerente com o material do projeto, mas o texto original do PMI não foi consultado.
- **Pistas involuntárias:** a alternativa correta é a mais longa em 2 das 10 questões; as extensões foram equilibradas; os gabaritos ficaram equilibrados entre A e E.
- **Duplicidade com provas anteriores:** o tema "EAP" e "estruturas organizacionais" aparece em questões das provas catalogadas (2023); as questões deste lote foram elaboradas com enunciados e alternativas próprios, sem reproduzir o texto das provas.

## 4. Itens do edital cobertos

2.1 (4 questões), 2.2, 2.3, 2.4 (2 questões), 2.5 e 2.6 (principais); 2.7 (secundário). Detalhe em `banco-questoes/relatorio-cobertura-questoes.md`.

## 5. Lacunas

- Sem questão principal: **2.7** ("Modelos e características."; interpretação a confirmar).
- Cobertura por item ainda **insuficiente** (uma ou duas questões por item); não há questões sobre os 12 princípios do PMBOK 7, métricas de PMO, Manifesto Ágil, métricas de Kanban além da Lei de Little, nem questões integradoras entre Scrum, Kanban e SAFe.
- Não há questões de análise de afirmações (I, II, III) neste lote, a não ser a Q15 (itens I a IV).

## 6. Problemas e limites

- **Ressalvas do M02:** interpretação dos itens 2.5 e 2.7 a confirmar; textos do PMI não verificados em fonte primária (as questões de PMBOK/estruturas/PMO herdam essa ressalva).
- **Revisão independente:** não houve revisão por terceiros.
- **Estilo Cesgranrio:** calibrado pelo formato e pelo conteúdo, sem alegar autenticidade ou frequência (duas provas não formam amostra).

## 7. Avaliação crítica e ajustes recomendados

- O padrão do M01 foi mantido (comentário A a G; análise de cada alternativa; verificação registrada).
- Recomenda-se, na expansão: mais questões de **análise de afirmações**, **integradoras** (Scrum × Kanban × SAFe; projeto × produto × PMO) e sobre **princípios do PMBOK 7**; revisar as questões de PMBOK/PMO se o usuário obtiver o texto oficial do PMI.

## 8. Arquivos

Criados: `banco-questoes/autorais/por-assunto/m02-projetos-produtos.json`, `m02-projetos-produtos-questoes.md`, `m02-projetos-produtos-gabaritos-comentados.md`; este relatório.
Modificados (regenerados): `banco-questoes/catalogo-questoes.md`, `banco-questoes/relatorio-cobertura-questoes.md`; arquivos do M01 (status `validada`), `docs/qualidade/relatorio-banco-questoes-m01.md`, `docs/edital/controle-cobertura.md` (coluna Questões), `docs/CONTEXTO-ATUAL.md`.
