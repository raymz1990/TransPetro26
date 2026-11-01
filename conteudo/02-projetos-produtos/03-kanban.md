---
modulo: 02-projetos-produtos
arquivo: 03-kanban
itens_edital:
  - "2.1 Scrum e Kanban"
ids_matriz: ["E5-026"]
escopo: "A — conteúdo expresso no edital (parte Kanban; Scrum em `02-scrum.md`). Scrumban, previsão estatística e a origem industrial são complementos B."
tipo_conteudo: "teoria"
status: "VALIDADO"
ultima_atualizacao: "2026-10-31"
---

# Kanban

**Módulo:** M02 — Gerenciamento de Projetos e Produtos
**Texto oficial (Anexo IV):** 2.1 "Scrum e Kanban" (esta parte trata do **Kanban**).
**Escopo:** A. O edital cita o Kanban sem versão. Usam-se aqui o **Kanban Guide** (edição de maio de 2025, v2025.5, a mais recente listada em kanbanguides.org; edições anteriores: dez./2020 e jul./2020) e o **Método Kanban** descrito por David J. Anderson.
**Status:** `VALIDADO` (aprovado pelo usuário em 2026-10-31, com ressalvas: textos do PMI e princípios Lean-Agile do SAFe não verificados em fonte primária; interpretação dos itens 2.5 e 2.7 a confirmar — ver `docs/qualidade/relatorio-producao-modulo-02.md`).

**Objetivos de aprendizagem.** (1) Definir Kanban e explicar o sistema de **puxar** trabalho; (2) descrever o quadro, o limite de trabalho em andamento (WIP) e as métricas de fluxo; (3) diferenciar Kanban e Scrum; (4) reconhecer práticas e erros típicos.

---

## 1. Introdução

**Kanban** (do japonês, "sinal/cartão visual") é uma **estratégia para otimizar o fluxo de valor** por meio de um processo, tornando o trabalho **visível**, **controlando a quantidade em andamento** e **melhorando continuamente** o fluxo. Surgiu na manufatura enxuta (Toyota), como sinal visual para repor materiais ("puxar" conforme a demanda), e foi adaptado ao trabalho do conhecimento (TI, serviços) por Anderson, nos anos 2000. Não prescreve papéis, eventos nem iterações de duração fixa; **acrescenta-se ao processo existente**.

*Relações:* é um dos dois métodos do item 2.1 (com o Scrum, arquivo `02`); é a base do **portfólio Kanban** do SAFe (item 2.3, arquivo `04`); relaciona-se com o fluxo de valor (lean) e com a gestão de serviços de TI (Módulo 4).

## 2. Fundamentos

### 2.1 O Kanban Guide (edição 2025)

O guia define o Kanban como estratégia para otimizar o fluxo de valor e descreve **três práticas**:

| Prática | Conteúdo |
|---|---|
| **Definir e visualizar o fluxo de trabalho** | O **fluxo de trabalho** é o conjunto de estados pelos quais um item passa do início ao fim (por exemplo, *Backlog → Em análise → Em desenvolvimento → Em teste → Concluído*). Cada estado é visível, com **regras explícitas** de entrada e saída. O fluxo é representado em um **quadro Kanban** |
| **Gerenciar ativamente os itens** | Acompanhar o **WIP**, a idade dos itens, **desbloquear** o que está parado e **puxar** novos itens apenas quando há capacidade |
| **Melhorar o fluxo de trabalho** | Usar as métricas de fluxo para aprender e experimentar mudanças |

O guia exige que os membros **controlem explicitamente a quantidade de itens em andamento** (o texto **não** usa a expressão "limite de WIP", mas isso é a prática consagrada: numérica ou por espaços/fichas no quadro). A literatura e as ferramentas de mercado usam amplamente o termo **limite de WIP**.

### 2.2 O Método Kanban (Anderson)

Princípios de gestão da mudança: (1) **começar com o que se faz agora**; (2) concordar em buscar **mudanças incrementais e evolutivas**; (3) **respeitar** processos, papéis e responsabilidades atuais; (4) incentivar **atos de liderança em todos os níveis**. Práticas centrais, na formulação mais difundida: **visualizar o fluxo**, **limitar o WIP**, **gerenciar o fluxo**, **tornar explícitas as políticas**, **implementar ciclos de feedback**, **melhorar de forma colaborativa e evoluir experimentalmente** (modelos e ciência).

### 2.3 O quadro Kanban

```text
 Backlog │ A fazer │ Em desenvolvimento (WIP ≤ 3) │ Em teste (WIP ≤ 2) │ Concluído
 ────────┼─────────┼──────────────────────────────┼────────────────────┼──────────
   [ ]   │   [ ]   │   [A] [B] [C]                │   [D] [E]          │   [F] [G]
   [ ]   │         │                              │                    │
```

Elementos: **colunas** (estados), **cartões** (itens), **limites de WIP** por coluna ou por trecho, **raias** (*swimlanes*: por tipo de item ou classe de serviço), **políticas explícitas** (critério de "pronto" para passar de coluna), sinais de **bloqueio**.

### 2.4 Sistema de puxar e limite de WIP

Em um **sistema de puxar** (*pull system*), um item só entra em um estado quando há **capacidade livre**; no sistema de **empurrar**, o trabalho é lançado independentemente da capacidade, formando filas. Ao **limitar o WIP**:

- Reduz-se o **multitarefa** e a troca de contexto;
- Revelam-se **gargalos** (a coluna cheia sinaliza onde o fluxo trava);
- **Acelera-se** a conclusão dos itens (menos itens simultâneos, menor tempo em cada um);
- Melhora-se o foco em **terminar** antes de **começar**.

### 2.5 Métricas de fluxo

O Kanban Guide (2025) define quatro métricas de fluxo, **obrigatórias**:

| Métrica | Definição | Uso |
|---|---|---|
| **WIP** (*Work in Progress*) | Número de itens **iniciados e ainda não concluídos** | Controla sobrecarga e identifica acúmulo |
| **Throughput (vazão)** | **Número de itens concluídos por unidade de tempo** (contagem exata de itens) | Capacidade do sistema; base de previsões |
| **Idade do item de trabalho (*Work Item Age*)** | **Tempo decorrido entre o início do item e a data atual** | Identifica itens parados; atua sobre itens **em andamento** |
| **Tempo de ciclo (*Cycle Time*)** | **Tempo decorrido entre o início e o término** de um item | Previsibilidade; métrica de itens **concluídos** |

Observações:

- O **lead time** (tempo de espera do pedido do cliente até a entrega) é conceito próximo, muito usado na literatura: inclui o tempo na fila **antes** de o trabalho ser iniciado. O **tempo de ciclo**, no guia, começa quando o trabalho é **iniciado**. Em provas, siga a definição dada no enunciado.
- **Lei de Little** (para sistemas estáveis): **tempo de ciclo médio = WIP médio ÷ throughput médio**. Se o WIP aumenta e o throughput se mantém, o tempo de ciclo cresce. *Exemplo:* 12 itens em andamento e vazão de 3 itens/semana ⇒ tempo de ciclo médio ≈ 4 semanas.
- **Diagrama de fluxo cumulativo** (*cumulative flow diagram*): mostra, ao longo do tempo, quantos itens há em cada estado; bandas que se alargam indicam gargalo.
- **Classes de serviço** (por exemplo, expedito, data fixa, padrão, intangível): políticas diferentes de prioridade para tipos de itens.

### 2.6 Previsão

Com o histórico de **throughput** e de **tempo de ciclo**, estimam-se prazos por **percentis** ("85% dos itens concluem em até 6 dias") ou por **simulação de Monte Carlo** (complemento B), em vez de estimativas de esforço detalhadas.

## 3. Kanban × Scrum

| Critério | **Scrum** | **Kanban** |
|---|---|---|
| Cadência | **Sprints de duração fixa** (≤ 1 mês) | **Fluxo contínuo**; sem iterações obrigatórias |
| Papéis | Scrum Master, Product Owner, Desenvolvedores | **Nenhum papel obrigatório**; mantém os papéis existentes |
| Eventos | Planning, Daily, Review, Retro (obrigatórios) | Sem eventos obrigatórios; reuniões de acompanhamento são opcionais |
| Controle de carga | Meta e escopo da Sprint (capacidade por Sprint) | **Limite de WIP** (quantidade simultânea) |
| Quando entra trabalho | Planejamento da Sprint; mudanças evitadas durante a Sprint | **A qualquer momento**, quando há capacidade (puxar) |
| Entregas | Incremento ao fim de cada Sprint (pode haver mais de um) | Entrega **contínua**, item a item |
| Métricas típicas | *Velocity*, burndown (práticas comuns) | WIP, throughput, tempo de ciclo, idade do item |
| Mudança de prioridade | Preferencialmente no fim da Sprint (por Meta da Sprint) | Imediata, respeitando o WIP |
| Aplicação típica | Desenvolvimento de produto com cadência regular | Fluxo de demandas contínuas (suporte, manutenção, operações) ou combinando com outros métodos |

**O que NÃO é verdade:** que o Scrum organize tarefas em "listas individuais" e o Kanban use burndown; que o Kanban **enfatize reuniões diárias** e o Scrum não; que o Kanban **exija um Product Owner** e o Scrum não. O Scrum tem Daily Scrum e Product Owner; o Kanban não os prescreve; o Scrum usa iterações fixas e o Kanban não tem limite de tempo fixo.

*Combinação:* o **Kanban Guide for Scrum Teams** (Scrum.org, com a Kanban University) mostra como times Scrum aplicam práticas de fluxo (visualização, limite de WIP, métricas). **Scrumban** designa, de modo informal, a combinação de elementos de Scrum e Kanban (complemento B; não é um padrão).

## 4. Comparações conceituais

| Conceito A | Conceito B | Diferença principal |
|---|---|---|
| Sistema de puxar | Sistema de empurrar | Itens entram quando há capacidade × trabalho lançado independentemente da capacidade |
| WIP | Throughput | Itens em andamento × itens concluídos por tempo |
| Tempo de ciclo | Idade do item | Itens concluídos (início→fim) × itens em andamento (início→hoje) |
| Tempo de ciclo | Lead time | Do início do trabalho ao término × do pedido à entrega (inclui espera) |
| Quadro Kanban | Quadro de tarefas do Scrum | Estados do fluxo com limite de WIP × tarefas da Sprint (A fazer/Fazendo/Feito) |
| Kanban | Scrum | Fluxo contínuo e limite de WIP × Sprints, papéis e eventos |
| Limite de WIP | Prazo da Sprint | Restringe itens simultâneos × restringe o tempo do ciclo |

## 5. Aplicações e cenários

**Cenário (didático): equipe de suporte a sistemas.** As demandas chegam de forma contínua e imprevisível. Um quadro com colunas (*Triagem → Em análise → Correção → Validação → Concluído*) e limite de WIP por coluna evita que a equipe comece tudo ao mesmo tempo. O tempo de ciclo médio e o percentil 85 passam a orientar os compromissos com os usuários. *Limitação:* sem políticas explícitas e disciplina, o limite de WIP é ignorado.

**Cenário (didático): gargalo em testes.** A coluna "Em teste" vive cheia e "Em desenvolvimento" produz mais do que o teste absorve. A equipe reduz o WIP de desenvolvimento e redistribui pessoas para testes, em vez de ampliar a coluna.

**Erros típicos:** quadro sem limite de WIP (apenas "painel de tarefas"); colunas sem critério de saída; ignorar itens bloqueados; medir "ocupação" em vez de fluxo.

## 6. Atenção para a prova

*Inferência técnica e recomendação pedagógica; sem atribuir frequência à banca.*

- **Diferença central Scrum × Kanban:** iterações de **tempo fixo** (Sprints) × **fluxo contínuo** sem limite de tempo fixo; Scrum com papéis e eventos definidos; Kanban sem papéis obrigatórios.
- **Limite de WIP** é característica **do Kanban** (e não de "reuniões diárias" ou "Product Owner").
- **Burndown** é prática comum de Scrum, não característica definidora do Kanban.
- Métricas: reconhecer WIP, throughput, tempo de ciclo e idade do item; Lei de Little.
- Cuidado com alternativas que **trocam atribuições** entre Scrum e Kanban.
- *Evidência histórica (amostra de duas provas):* a Prova 6 de 2023 (Q65) pediu **a diferença marcante entre Scrum e Kanban**, com distratores que trocavam elementos dos dois métodos. Duas provas não permitem inferir frequência.

## 7. Síntese

- Kanban: estratégia para otimizar o fluxo de valor; visualizar, controlar WIP, gerenciar itens, melhorar o fluxo.
- Sistema de puxar; limite de WIP revela gargalos e reduz multitarefa.
- Métricas: WIP, throughput, tempo de ciclo, idade do item; Lei de Little (tempo de ciclo = WIP ÷ throughput).
- Sem Sprints, papéis ou eventos obrigatórios; entrega contínua.
- Scrum: Sprints fixas, papéis e eventos; Kanban: fluxo contínuo e limite de WIP.

## 8. Pontos para a futura produção de questões (registro)

Conceitos: quadro, WIP, puxar, throughput, tempo de ciclo, idade do item, Lei de Little. Distinções: Scrum×Kanban; tempo de ciclo×lead time; puxar×empurrar. Interpretação: calcular tempo de ciclo médio pela Lei de Little; identificar gargalo em um quadro; escolher o método para um cenário.

## 9. Referências

- KANBAN GUIDES. *The Kanban Guide*. v2025.5 (maio de 2025); edições anteriores 2020. https://kanbanguides.org/the-kanban-guide/ — **verificado em 2026-10-31** (três práticas, quatro métricas, ausência do termo "limite de WIP" no texto lido).
- SCRUM.ORG; KANBAN UNIVERSITY. *The Kanban Guide for Scrum Teams* — existência confirmada em busca online; conteúdo detalhado **não verificado**.
- ANDERSON, D. J. *Kanban: Successful Evolutionary Change for Your Technology Business*. Sequim (WA): Blue Hole Press, 2010 — **verificado** em catálogo de biblioteca (o conteúdo dos princípios e práticas citados vem do conhecimento do autor deste material e não foi confrontado com o livro).
- LITTLE, J. D. C. "A Proof for the Queuing Formula: L = λW". *Operations Research*, v. 9, n. 3, p. 383–387, 1961 — **verificado** (RePEc); a primeira publicação da fórmula é atribuída a outro autor, mas a prova é de Little.
- Edital Transpetro nº 04/2026.4, Anexo IV, item 2.1.
