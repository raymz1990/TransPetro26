# Relatório de execução — Banco de questões, lote piloto do Módulo 3 (Processos, grupos de processos e áreas de conhecimento)

| Campo | Valor |
|---|---|
| Data | 2026-10-31 |
| Prompt | 04 — banco de questões comentadas, fase 1 (lote piloto), módulo 3 |
| Tipo | Questões **autorais** (`AUT-000021` a `AUT-000030`) — **Questão autoral — estilo Cesgranrio.** |
| Status | `validada` pelo usuário em 2026-10-31 (aprovação do lote; sem revisão por terceiros; ressalva: PMI não confrontado) |
| Lotes anteriores | M01 e M02 aprovados pelo usuário (20 questões `validada`, sem revisão por terceiros) |

## 1. Módulo e assuntos

M03 — o edital tem **um único item** (3, "Processos, grupos de processos e área de conhecimento."), interpretado como grupos de processos e áreas de conhecimento do PMBOK Guide 6ª edição (decisão do usuário). O lote cobre: grupos de Iniciação, Planejamento, Execução e Monitoramento e Controle; quantidade de processos por grupo; grupos × ciclo de vida; matriz grupos × áreas; áreas de Custos, Partes interessadas, Escopo, Riscos e Integração.

## 2. Quantidades

| Critério | Resultado |
|---|---|
| Questões criadas | 10 |
| Dificuldade | Fácil 3 · Média 5 · Difícil 2 |
| Habilidade | Análise 3 · Aplicação 3 · Compreensão 2 · Memorização 2 |
| Tipo | Conceitual 6 · Cenário 3 · Comparativa 1 |
| Gabaritos | A 2 · B 2 · C 2 · D 2 · E 2 |
| Status | Validadas 10 (aprovação do usuário) · Em revisão 0 · Reprovadas 0 |
| Cobertura do M03 | 1 de 1 item (o item é amplo; 10 questões **não** esgotam o conteúdo) |

## 3. Verificações realizadas

- **Estrutura (script):** 5 alternativas; gabarito válido; análise individual das 5 alternativas; rótulo de autoral; `fonte_origem` nula; arquivo de teoria existente; sem IDs duplicados; módulo correto.
- **Conferência por script:** a matriz grupos × áreas do material teórico (49 processos) foi transcrita e consultada: totais por grupo 2, 24, 10, 12 e 1; Integração é a única área com processos nos cinco grupos; Partes interessadas tem quatro grupos; distribuição dos processos de Riscos (5, 1 e 1), Custos (3 e 1) e Escopo (ordem 5.1 a 5.4).
- **Pistas involuntárias:** a alternativa correta é a mais longa em 3 das 10 questões; as posições dos gabaritos estão equilibradas.
- **Duplicidade com provas anteriores:** o tema "validar o escopo" e "grupo de monitoramento e controle" aparece em questões catalogadas (2018 e 2023); este lote usa enunciados e alternativas próprios, sem reproduzir os textos.

## 4. Itens do edital cobertos

Item 3 (E5-033). Itens secundários: nenhum.

## 5. Lacunas

- Faltam: processos de Qualidade, Recursos, Comunicações e Aquisições; entradas, saídas, ferramentas e técnicas; documentos do projeto; relações com o ciclo de vida e a adequação; questões integradoras com o Módulo 2 (PMBOK 7 × PMBOK 6).
- **BPM** (arquivo `04-gerenciamento-processos`, complemento C5-004): **sem questões**, por ser material complementar fora do edital; só seria produzido com autorização explícita.

## 6. Problemas e limites

- **Ressalvas do M03:** a atribuição individual dos processos aos grupos, as fórmulas e as técnicas **não foram confrontadas com o texto do PMI** (pmi.org bloqueado, HTTP 403); totais e estrutura foram confirmados em fontes secundárias. As questões herdam essa ressalva.
- **Versão do PMBOK:** as questões seguem a 6ª edição (processos); a 7ª edição (item 2.4) não tem processos. O edital de 2026 cita a 7ª edição no item 2.4; a 6ª edição é usada no item 3 por decisão do usuário.
- **Estilo Cesgranrio:** calibrado pelo formato e pelo conteúdo, sem alegar autenticidade ou frequência.
- **Revisão independente:** não houve revisão por terceiros.

## 7. Avaliação crítica e ajustes recomendados

- O lote é mais **memorístico** que o dos M01 e M02, o que reflete a natureza do item (distribuição de processos); recomenda-se acrescentar na expansão questões de **cenário** e de **interpretação** (por exemplo, identificar o processo a partir de uma situação, ou de entradas e saídas).
- Ampliar a cobertura de áreas ainda sem questão e incluir questões de **análise de afirmações** e **integradoras**.

## 8. Arquivos

Criados: `banco-questoes/autorais/por-assunto/m03-processos-gerenciamento.json`, `m03-processos-gerenciamento-questoes.md`, `m03-processos-gerenciamento-gabaritos-comentados.md`; este relatório.
Modificados (regenerados): `banco-questoes/catalogo-questoes.md`, `banco-questoes/relatorio-cobertura-questoes.md`; `docs/edital/controle-cobertura.md` (coluna Questões do item 3), `docs/CONTEXTO-ATUAL.md`.
