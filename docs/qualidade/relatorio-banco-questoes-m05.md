# Relatório de execução — Banco de questões, lote piloto do Módulo 5 (Engenharia de Software)

| Campo | Valor |
|---|---|
| Data | 2026-10-31 |
| Prompt | 04 — banco de questões comentadas, fase 1 (lote piloto), módulo 5 |
| Tipo | Questões **autorais** (`AUT-000041` a `AUT-000050`) — **Questão autoral — estilo Cesgranrio.** |
| Status | `validada` pelo usuário em 2026-10-31 (aprovação do lote; sem revisão por terceiros; ressalvas: ISO/ISTQB sem fonte primária; itens 5.2 e 5.5) |
| Lotes anteriores | M01 a M04 aprovados pelo usuário (40 questões `validada`, sem revisão por terceiros) |

## 1. Módulo e assuntos

M05 — Engenharia de Software. Assuntos: requisitos funcionais e não funcionais; priorização MoSCoW; modelo em V; modelo em espiral; orientação a objetos (herança, sobrescrita e ligação dinâmica, com código); casos de uso da UML (include e extend); complexidade ciclomática (com código); análise do valor limite; verificação × validação; integração, entrega e implantação contínuas. Itens secundários: 5.1 (Q46) e 6.2 (Q42).

## 2. Quantidades

| Critério | Resultado |
|---|---|
| Questões criadas | 10 |
| Dificuldade | Fácil 3 · Média 5 · Difícil 2 |
| Habilidade | Aplicação 4 · Compreensão 2 · Resolução de problemas 2 · Memorização 1 · Análise 1 |
| Tipo | Cenário 6 · Cálculo 2 · Conceitual 1 · Comparativa 1 |
| Gabaritos | A 2 · B 2 · C 2 · D 2 · E 2 |
| Status | Validadas 10 (aprovação do usuário) · Em revisão 0 · Reprovadas 0 |
| Cobertura do M05 | 5 de 5 itens com questão principal (5.1: 2; 5.2: 2; 5.3: 2; 5.4: 3; 5.5: 1) |

## 3. Verificações realizadas

- **Estrutura (script):** 5 alternativas; gabarito válido; análise individual das 5 alternativas; rótulo de autoral; `fonte_origem` nula; arquivo de teoria existente; sem IDs duplicados; módulo correto.
- **Execução:**
  - **Q45 (herança e ligação dinâmica):** o código foi executado em Python e a saída conferida com a alternativa correta (três linhas).
  - **Q47 (complexidade ciclomática):** o método foi analisado com a biblioteca `ast` (6 decisões: `for`, `while`, três `if` e um `elif`, conforme o enunciado; V(G) = 7) e executado sem erro.
  - **Q48 (valor limite):** o conjunto (limites ± 1) foi calculado por script: 0, 1, 99 e 100.
- **Conteúdo conceitual:** conferido contra os arquivos de teoria do M05 (validados). **Normas ISO e princípios ISTQB** do material não foram verificados em fonte primária (revisão do M05); as questões evitam depender desses textos.
- **Pistas involuntárias:** a alternativa correta é a mais longa em 2 das 10 questões após o equilíbrio das extensões; gabaritos equilibrados entre A e E.
- **Duplicidade com provas anteriores:** requisitos funcionais × não funcionais, modelo em V, testes de aceitação, polimorfismo e complexidade ciclomática aparecem em questões catalogadas (2018 e 2023); este lote usa enunciados, códigos e alternativas próprios e não reproduz os textos.

## 4. Itens do edital cobertos

5.1, 5.2, 5.3, 5.4 e 5.5 (todos com questão principal). O item 5 (título) não tem questões próprias.

## 5. Lacunas

- Sem questões sobre: engenharia de requisitos além de tipos e MoSCoW (elicitação, rastreabilidade, validação de requisitos); outros modelos de ciclo de vida (cascata, incremental, Processo Unificado, ágeis, DevOps); paradigma estruturado (DFD, coesão e acoplamento); demais diagramas UML (classes, sequência, atividades); testes de caixa-preta além do valor limite (tabela de decisão, transição de estados), níveis e tipos de teste, TDD e BDD; controle de versão, ambientes de execução e contêineres.
- O arquivo de fundamentos (`01-fundamentos`, complemento B) não foi usado.

## 6. Problemas e limites

- **Ressalvas do M05:** normas ISO e princípios ISTQB sem fonte primária; interpretação dos itens 5.2 ("paradigmas") e 5.5 a confirmar (as questões herdam essa ressalva).
- **Estilo Cesgranrio:** calibrado pelo formato e pelo conteúdo, sem alegar autenticidade ou frequência.
- **Revisão independente:** não houve revisão por terceiros.
- **Linguagem do código:** os exemplos usam Python para fins didáticos; provas reais podem usar outras linguagens, e a ligação dinâmica descrita vale para as linguagens OO em geral, com variações de sintaxe.

## 7. Avaliação crítica e ajustes recomendados

- O lote inclui duas questões de **resolução de problemas com código verificável por execução**, o que fortalece os gabaritos. Recomenda-se, na expansão: mais questões de análise de afirmações (I, II, III), de diagramas UML (classes e sequência) e de testes (cobertura de decisões, níveis de teste); e **integradoras** com os Módulos 2 e 6 (requisitos × histórias do usuário; DevOps × segurança).

## 8. Arquivos

Criados: `banco-questoes/autorais/por-assunto/m05-engenharia-software.json`, `m05-engenharia-software-questoes.md`, `m05-engenharia-software-gabaritos-comentados.md`; este relatório.
Modificados (regenerados): `banco-questoes/catalogo-questoes.md`, `banco-questoes/relatorio-cobertura-questoes.md`; `banco-questoes/esquema-questoes.md` não alterado; `docs/edital/controle-cobertura.md` (coluna Questões), `docs/CONTEXTO-ATUAL.md`.
