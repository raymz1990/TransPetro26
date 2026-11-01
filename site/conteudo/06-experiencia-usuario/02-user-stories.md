---
modulo: 06-experiencia-usuario
arquivo: 02-user-stories
itens_edital:
  - "6.2 Histórias do usuário"
ids_matriz: ["E5-049"]
escopo: "A — conteúdo expresso no edital."
tipo_conteudo: "teoria"
status: "VALIDADO"
ultima_atualizacao: "2026-10-31"
---

# Histórias do Usuário (*User Stories*)

**Módulo:** M06 — Experiência do usuário (UX)
**Texto oficial (Anexo IV):** 6.2 "Histórias do usuário".
**Escopo:** A.
**Status:** `VALIDADO` (aprovado pelo usuário em 2026-10-31, com ressalvas: interpretação dos itens 6.3, 6.4, 6.7 e 6.11 a confirmar; fontes de memória listadas em `docs/qualidade/relatorio-producao-modulo-06.md`). **Verificados em 2026-10-31** (artigo de Bill Wake, xp123.com): as seis letras do INVEST e os três Cs (atribuídos por Wake a Ron Jeffries). O restante (Cohn, Patton, estimativa, MoSCoW) é de memória e **não verificado**.

**Objetivos de aprendizagem.** (1) Definir história do usuário e seu formato; (2) aplicar os "3 Cs" e o critério INVEST; (3) escrever critérios de aceitação; (4) distinguir história, épico, tema, caso de uso e requisito tradicional; (5) relacionar histórias ao *backlog* e à estimativa.

---

## 1. Introdução

A **história do usuário** é uma descrição **curta, em linguagem do usuário**, de uma funcionalidade que **agrega valor** a ele ou ao negócio. Surgiu nas práticas ágeis (*Extreme Programming*) e é muito usada em Scrum e Kanban para compor o *backlog* do produto. Não substitui a conversa: é um **lembrete para conversar** sobre a necessidade.

## 2. Formato

Modelo clássico:

> **Como** \<papel/persona\>, **eu quero** \<objetivo/funcionalidade\> **para que** \<benefício/valor\>.

Exemplo (didático): *Como analista de manutenção, eu quero filtrar ordens de serviço por situação para que eu identifique rapidamente as pendentes.*

O trecho **"para que"** expressa o **valor** e evita histórias que descrevem apenas a solução técnica.

## 3. Os três Cs (Ron Jeffries)

| C | Significado |
|---|---|
| **Card (cartão)** | Registro curto da história (antes, em ficha de papel) |
| **Conversation (conversa)** | Diálogo entre equipe e negócio para detalhar a necessidade |
| **Confirmation (confirmação)** | Critérios de aceitação que confirmam que a história foi atendida |

## 4. Critério INVEST (Bill Wake)

| Letra | Qualidade | Significado |
|---|---|---|
| **I** | *Independent* (independente) | Pode ser implementada sem depender de ordem rígida |
| **N** | *Negotiable* (negociável) | Detalhes definidos na conversa, não um contrato |
| **V** | *Valuable* (valiosa) | Entrega valor ao usuário/negócio |
| **E** | *Estimable* (estimável) | A equipe consegue estimá-la |
| **S** | *Small* (pequena) | Cabe em uma iteração |
| **T** | *Testable* (testável) | Há como verificar se foi atendida |

## 5. Critérios de aceitação

Condições que a história deve satisfazer para ser considerada pronta do ponto de vista do negócio. Formatos comuns: **lista de verificação** ou **Dado–Quando–Então** (*Given–When–Then*, associado ao BDD):

> **Dado** que existem ordens de serviço pendentes e concluídas, **quando** o analista filtra por "pendente", **então** apenas as pendentes são listadas.

Critérios de aceitação **não** são a *Definição de Pronto* (*Definition of Done*), que é **comum a todos os itens** do time (arquivo `02-projetos-produtos`, Scrum); os critérios são **específicos da história**.

## 6. Épicos, temas e decomposição

| Termo | Descrição |
|---|---|
| **Épico** | História grande, demais para uma iteração; deve ser **decomposta** |
| **Tema** | Agrupamento de histórias relacionadas |
| **História** | Unidade entregável em uma iteração |
| **Tarefa** | Atividade técnica da equipe para implementar a história |

Técnicas de divisão: por **passo do fluxo**, por **regra de negócio**, por **perfil de dados**, por **operação (CRUD)**, por **caso simples × complexo**. Dividir **verticalmente** (fatias que atravessam todas as camadas e entregam valor) é preferível a dividir por camada técnica.

## 7. Estimativa e priorização

Histórias são estimadas **em pontos** (tamanho relativo, por exemplo sequência de Fibonacci), muitas vezes com *planning poker*; a **velocidade** do time é a soma de pontos concluídos por iteração. Priorização: valor de negócio, risco, dependência, esforço; técnicas como **MoSCoW** (*must, should, could, won't*) e mapeamento de histórias (*user story mapping*, Jeff Patton). *(Itens de memória; não verificados online.)*

## 8. História × caso de uso × requisito

| Aspecto | História do usuário | Caso de uso | Requisito tradicional ("O sistema deve...") |
|---|---|---|---|
| Tamanho/formalidade | Curta, informal | Detalhado, com fluxos | Declaração formal |
| Foco | Valor para o usuário | Interação ator–sistema | Capacidade/restrição do sistema |
| Detalhamento | Na conversa e nos critérios | No documento | No texto |
| Adequação | Métodos ágeis | Processos mais formais | Contratos e especificações |

Relações: histórias alimentam o *backlog* (Módulo 2, Scrum); requisitos e casos de uso são tratados no Módulo 5 (`02-requisitos-software`).

## 9. Exemplos de uso e de erros comuns

**Boa:** "Como gerente de contrato, eu quero receber alerta de vencimento para que eu renove a tempo." **Fraca:** "Criar tabela de contratos" (tarefa técnica, sem valor claro) e "Como usuário, eu quero um sistema completo" (épico vago, não estimável). Outros erros: história sem critérios, dependências em cascata, histórias grandes demais.

## 10. Comparações conceituais

| A | B | Diferença |
|---|---|---|
| História | Tarefa | Valor para o usuário × atividade técnica |
| Épico | História | Grande, a decompor × entregável na iteração |
| Critério de aceitação | Definição de Pronto | Específico da história × comum ao time |
| História | Caso de uso | Lembrete para conversa × especificação detalhada |

## 11. Atenção para a prova

*Inferência técnica e recomendação pedagógica; sem atribuir frequência à banca.*

- Reconhecer o formato **Como/Quero/Para que** e o papel do "para que".
- Memorizar **INVEST** e os **3 Cs**.
- Não confundir critério de aceitação com Definição de Pronto.
- Item 6.2 **não teve questão** nas duas provas catalogadas (2018 e 2023); a ausência não permite inferir baixa incidência.

## 12. Síntese

História = descrição curta de valor na voz do usuário; 3 Cs; INVEST; critérios de aceitação (Dado–Quando–Então); épico decomposto em histórias; estimativa em pontos; fonte do *backlog*.

## 13. Pontos para a futura produção de questões (registro)

Reconhecer história bem formada; identificar a letra do INVEST violada; distinguir épico e história; diferenciar critério de aceitação e Definição de Pronto.

## 14. Referências

- COHN, Mike. *User Stories Applied* (2004) e *Succeeding with Agile* — **de memória, não verificadas**.
- WAKE, Bill. INVEST in Good Stories — **de memória, não verificada**.
- PATTON, Jeff. *User Story Mapping* — **de memória, não verificada**.
- Edital Transpetro nº 04/2026.4, Anexo IV, item 6.2.
