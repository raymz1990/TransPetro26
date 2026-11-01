---
modulo: 06-experiencia-usuario
arquivo: 04-design-centrado-no-usuario
itens_edital:
  - "6.4 Projeto centrado no usuário de software"
ids_matriz: ["E5-051"]
escopo: "A — conteúdo expresso no edital. Item genérico: abrangência é interpretação (a confirmar)."
tipo_conteudo: "teoria"
status: "VALIDADO"
ultima_atualizacao: "2026-10-31"
---

# Projeto Centrado no Usuário de Software

**Módulo:** M06 — Experiência do usuário (UX)
**Texto oficial (Anexo IV):** 6.4 "Projeto centrado no usuário de software".
**Escopo:** A. Interpretação adotada (a confirmar): *design centrado no usuário* (DCU/UCD) e *design centrado no ser humano* (ISO 9241-210), com seus princípios, atividades, métodos e relação com o ciclo de vida de software.
**Status:** `VALIDADO` (aprovado pelo usuário em 2026-10-31, com ressalvas: interpretação dos itens 6.3, 6.4, 6.7 e 6.11 a confirmar; fontes de memória listadas em `docs/qualidade/relatorio-producao-modulo-06.md`). A norma ISO 9241-210 **não foi consultada** (iso.org bloqueado, HTTP 403); o conteúdo vem de memória.

**Objetivos de aprendizagem.** (1) Definir projeto centrado no usuário; (2) enumerar seus princípios e atividades; (3) escolher métodos de pesquisa e avaliação; (4) integrá-lo a métodos ágeis; (5) distinguir DCU, design participativo e design centrado na atividade.

---

## 1. Introdução

**Projeto (design) centrado no usuário** é uma abordagem em que as **necessidades, características, tarefas e contextos** dos usuários **orientam todas as decisões** de projeto, com **envolvimento dos usuários** e **avaliação iterativa**. Opõe-se a projetar a partir apenas da tecnologia, da opinião da equipe ou de requisitos sem contato com quem usará o sistema. Reduz retrabalho, melhora a adoção e a satisfação, e está ligado à usabilidade (arquivo `01`).

## 2. Princípios (ISO 9241-210, de memória)

A norma sobre processos de projeto centrado no ser humano apresenta seis princípios:

1. O projeto é baseado em **entendimento explícito** de usuários, tarefas e ambientes.
2. **Usuários são envolvidos** em todo o projeto e desenvolvimento.
3. O projeto é conduzido e refinado por **avaliação centrada no usuário**.
4. O processo é **iterativo**.
5. O projeto considera **toda a experiência do usuário**.
6. A equipe inclui **competências e perspectivas multidisciplinares**.

## 3. Atividades do processo (ISO 9241-210, de memória)

| Atividade | Conteúdo |
|---|---|
| **Planejar** o processo centrado no usuário | Definir como e quando envolver usuários |
| **Compreender e especificar o contexto de uso** | Quem usa, tarefas, ambiente técnico e físico |
| **Especificar requisitos do usuário** | Necessidades e objetivos a atender |
| **Produzir soluções de projeto** | Protótipos e alternativas |
| **Avaliar o projeto** | Testar com usuários contra os requisitos; iterar |

O ciclo repete até que os requisitos sejam atendidos.

## 4. Métodos

| Fase | Métodos |
|---|---|
| **Entender usuários** | Entrevistas, questionários, observação, **investigação contextual**, diários, grupos focais, análise de dados de uso |
| **Estruturar** | **Personas**, cenários, jornada do usuário, mapa de empatia (arquivo `09`), **classificação de cartões** |
| **Projetar** | Esboços, *wireframes*, protótipos (arquivo `08`), padrões de interface |
| **Avaliar** | **Avaliação heurística**, **percurso cognitivo**, **teste de usabilidade**, SUS, testes A/B (arquivo `01`) |
| **Acompanhar** | Pesquisa pós-implantação, métricas, suporte |

Um estudo qualitativo com poucos usuários revela a maior parte dos problemas de usabilidade (ideia popularizada por Nielsen; **valores específicos não verificados**).

## 5. Abordagens relacionadas

| Abordagem | Característica |
|---|---|
| **Design centrado no usuário** | Usuários são fonte de informação e testam o projeto; a equipe projeta |
| **Design participativo (cooperativo)** | Usuários **participam como co-projetistas** das decisões |
| **Design centrado na atividade** | Foco nas atividades e tarefas, mais que nas preferências individuais |
| **Design centrado no ser humano** (ISO 9241-210) | Generaliza o DCU para todos os afetados pelo sistema |
| **Design universal** | Projeto para o maior número possível de pessoas (arquivo `01`) |

## 6. Integração com o desenvolvimento de software

- Em **ciclos em cascata**, a pesquisa de usuários concentra-se no início e a avaliação no final, com risco de descobrir problemas tarde.
- Em **métodos ágeis**, a prática é **UX contínuo**: pesquisa e prototipação à frente do desenvolvimento, **histórias** com critérios de aceitação (arquivo `02`), validação em *sprint reviews* e **entregas incrementais** (MVP — arquivo `08`).
- **Equipe multidisciplinar:** UX, desenvolvimento, negócio, dados, acessibilidade.
- Papéis: **pesquisador de UX**, ***designer* de interação/UI**, **arquiteto de informação**, **redator de UX**.

## 7. Exemplo (didático)

Sistema de apontamento de inspeções: entrevistas e observação em campo revelam uso com luvas e sob luz solar; derivam-se requisitos (botões grandes, contraste alto, modo offline); protótipo testado com inspetores; ajuste de fluxo; nova rodada de teste; entrega em incrementos.

## 8. Comparações conceituais

| A | B | Diferença |
|---|---|---|
| Centrado no usuário | Centrado na tecnologia | Necessidades das pessoas × viabilidade técnica como ponto de partida |
| Centrado no usuário | Participativo | Usuário informa e testa × usuário co-projeta |
| Pesquisa generativa | Pesquisa avaliativa | Descobrir necessidades × testar soluções |
| Pesquisa qualitativa | Quantitativa | Por quê? × quanto/quantos? |
| Usuário | *Stakeholder* | Quem usa × quem é afetado ou tem interesse |

## 9. Atenção para a prova

*Inferência técnica e recomendação pedagógica; sem atribuir frequência à banca.*

- Reconhecer que o projeto centrado no usuário é **iterativo**, envolve **usuários** e **avaliação** em todo o processo.
- Não confundir **avaliação com especialistas** (heurística) e **teste com usuários**.
- Item 6.4 **não teve questão** nas duas provas catalogadas.

## 10. Síntese

DCU: entendimento do contexto, envolvimento dos usuários, avaliação, iteração, experiência completa, equipe multidisciplinar. Atividades: planejar, contexto, requisitos, soluções, avaliar. Métodos de pesquisa, estruturação, projeto e avaliação. Em ágil: UX contínuo.

## 11. Pontos para a futura produção de questões (registro)

Princípios e atividades do DCU; escolha de método para o objetivo; diferença DCU×participativo; integração com ágil.

## 12. Referências

- ISO 9241-210 (processos de projeto centrado no ser humano) — **de memória; não consultada (HTTP 403)**.
- NORMAN, D.; DRAPER, S. *User Centered System Design* (1986); ABRAS et al. — **de memória, não verificados**.
- Edital Transpetro nº 04/2026.4, Anexo IV, item 6.4.
