# Relatório de execução — Banco de questões, lote piloto do Módulo 6 (Experiência do usuário)

| Campo | Valor |
|---|---|
| Data | 2026-10-31 |
| Prompt | 04 — banco de questões comentadas, fase 1 (lote piloto), módulo 6 |
| Tipo | Questões **autorais** (`AUT-000051` a `AUT-000060`) — **Questão autoral — estilo Cesgranrio.** |
| Status | `validada` pelo usuário em 2026-10-31 (aprovação do lote; sem revisão por terceiros; ressalvas: referenciais de UX de memória; itens 6.3, 6.4, 6.7 e 6.11) |
| Lotes anteriores | M01 a M05 aprovados pelo usuário (50 questões `validada`, sem revisão por terceiros) |

## 1. Módulo e assuntos

M06 — Experiência do usuário (UX). Assuntos: princípios do WCAG 2.2 (POUR); critério INVEST de histórias do usuário; classificação de cartões e arquitetura da informação; avaliação heurística × teste de usabilidade; escolha de gráficos e boas práticas de visualização; tipos de dashboard; detecção de recursos e melhoria progressiva; MVP × protótipo (fidelidade); etapas do design thinking; persona × perfil × papel. Itens secundários: 6.1 (Q54) e 6.9 (Q58).

## 2. Quantidades

| Critério | Resultado |
|---|---|
| Questões criadas | 10 |
| Dificuldade | Fácil 4 · Média 4 · Difícil 2 |
| Habilidade | Análise 4 · Aplicação 3 · Compreensão 2 · Memorização 1 |
| Tipo | Cenário 7 · Comparativa 2 · Conceitual 1 |
| Gabaritos | A 2 · B 2 · C 2 · D 2 · E 2 |
| Status | Validadas 10 (aprovação do usuário) · Em revisão 0 · Reprovadas 0 |
| Cobertura do M06 | 10 de 11 itens com questão principal; item 6.9 só como secundário |

## 3. Verificações realizadas

- **Estrutura (script):** 5 alternativas; gabarito válido; análise individual das 5 alternativas; rótulo de autoral; `fonte_origem` nula; arquivo de teoria existente; sem IDs duplicados; módulo correto.
- **Conteúdo:** gabaritos conferidos contra os arquivos de teoria do M06 (validados). Fatos conferidos em fonte oficial na revisão do M06 e usados nas questões: princípios e níveis do WCAG 2.2; heurísticas de Nielsen; INVEST e 3 Cs; cinco *modes* do d.school.
- **De memória (sem fonte primária):** card sorting e tree testing, boas práticas de visualização (Knaflic, Tufte, Few), tipos de dashboard, detecção de recursos e melhoria progressiva, MVP e fidelidade de protótipos (Ries), personas (Cooper), ISO 9241.
- **Pistas involuntárias:** a alternativa correta é a mais longa em 2 das 10 questões após o equilíbrio das extensões; gabaritos equilibrados entre A e E.
- **Duplicidade com provas anteriores:** acessibilidade e usabilidade, prototipação de alta fidelidade, brainwriting, mapa de empatia, MVP e eMAG aparecem em questões catalogadas (2018 e 2023); este lote usa enunciados e alternativas próprios (por exemplo, não há questão sobre mapa de empatia, brainwriting ou eMAG) e não reproduz os textos.

## 4. Itens do edital cobertos

6.1, 6.2, 6.3, 6.4, 6.5, 6.6, 6.7, 6.8, 6.10 e 6.11 (principais); 6.9 (secundário). O item 6 (título) não tem questões próprias.

## 5. Lacunas

- **6.9** (prototipação): só como item secundário na Q58.
- Sem questões sobre: heurísticas de Nielsen em casos específicos; eMAG, contraste e níveis de conformidade; leis de Fitts e Hick; mapa de empatia, brainwriting e Double Diamond; jornada do usuário; relatórios (organização e KPIs); acessibilidade em dashboards; testes entre navegadores e WebDriver; user stories com critérios de aceitação (Dado–Quando–Então).
- Não há questões integradoras entre UX e outros módulos (por exemplo, UX × acessibilidade × LGPD; histórias do usuário × requisitos).

## 6. Problemas e limites

- **Ressalvas do M06:** interpretação dos itens 6.3, 6.4, 6.7 e 6.11 a confirmar; vários referenciais (ISO 9241, Cooper, Few, Ries) de memória. As questões herdam essas ressalvas.
- **Revisão independente:** não houve revisão por terceiros.
- **Estilo Cesgranrio:** calibrado pelo formato e pelo conteúdo, sem alegar autenticidade ou frequência.

## 7. Avaliação crítica e ajustes recomendados

- O lote tem 7 questões de cenário e 2 de análise de afirmações/comparação. Recomenda-se, na expansão: questões sobre **acessibilidade aplicada** (contraste, teclado, texto alternativo, níveis A/AA/AAA), **heurísticas de Nielsen** em cenários, **mapa de empatia, ideação e jornada do usuário**, **prototipação** (fidelidade) e **integradoras** (UX × segurança × dados).

## 8. Arquivos

Criados: `banco-questoes/autorais/por-assunto/m06-experiencia-usuario.json`, `m06-experiencia-usuario-questoes.md`, `m06-experiencia-usuario-gabaritos-comentados.md`; este relatório.
Modificados (regenerados): `banco-questoes/catalogo-questoes.md`, `banco-questoes/relatorio-cobertura-questoes.md`; `docs/edital/controle-cobertura.md` (coluna Questões), `docs/CONTEXTO-ATUAL.md`.
