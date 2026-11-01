---
modulo: 02-projetos-produtos
arquivo: 04-metodos-ageis-escalados
itens_edital:
  - "2.3 Impulso de práticas ágeis em escala, gestão de portfólio alinhada à estratégia de negócios e realização de entregas incrementais utilizando a metodologia safe"
ids_matriz: ["E5-028"]
escopo: "A — conteúdo expresso no edital (SAFe). Outros frameworks de escala e OKR/WSJF detalhado são complemento B."
tipo_conteudo: "teoria"
status: "VALIDADO"
ultima_atualizacao: "2026-10-31"
---

# Práticas Ágeis em Escala e SAFe: Portfólio Alinhado à Estratégia e Entregas Incrementais

**Módulo:** M02 — Gerenciamento de Projetos e Produtos
**Texto oficial (Anexo IV):** 2.3 "Impulso de práticas ágeis em escala, gestão de portfólio alinhada à estratégia de negócios e realização de entregas incrementais utilizando a metodologia safe".
**Escopo:** A para o **SAFe** (*Scaled Agile Framework*), citado no edital (que escreve "safe" em minúsculas, grafia preservada). Frameworks alternativos (LeSS, Nexus etc.) são complemento B, apenas para contraste.
**Nota de versão:** o SAFe **evolui**. A SAFe 6.0 (março de 2023, segundo o site oficial) organiza-se em **sete competências essenciais**; o site oficial consultado em 2026-10-31 apresenta uma organização mais recente, em **cinco "disciplinas"** (Lean Portfolio Management, Team and Technical Agility, Product Development Flow, Large Solution Integration and Delivery, Leadership and Culture). O edital **não indica versão**. Este material prioriza os **conceitos estáveis** do SAFe (ART, PI, PI Planning, portfólio enxuto, entregas incrementais), que aparecem em ambas as organizações; **nomes de competências/disciplinas devem ser conferidos na versão adotada**.
**Status:** `VALIDADO` (aprovado pelo usuário em 2026-10-31, com ressalvas: textos do PMI e princípios Lean-Agile do SAFe não verificados em fonte primária; interpretação dos itens 2.5 e 2.7 a confirmar — ver `docs/qualidade/relatorio-producao-modulo-02.md`).

**Objetivos de aprendizagem.** (1) Explicar por que e como se escalam práticas ágeis; (2) descrever a estrutura do SAFe (equipes, ART, soluções, portfólio) e seus eventos (PI Planning, demonstração do sistema, Inspect & Adapt); (3) explicar a gestão de **portfólio enxuto** alinhada à estratégia; (4) descrever como o SAFe viabiliza **entregas incrementais**; (5) diferenciar PI, PI Planning e portfólio.

---

## 1. Introdução

O Scrum e o Kanban (arquivos `02` e `03`) funcionam bem para **uma equipe**. Em grandes organizações, o mesmo produto exige **dezenas de equipes** que precisam **se coordenar** (dependências, arquitetura, integração), **alinhar-se à estratégia** (o que financiar e priorizar) e **entregar valor com frequência** (incrementos integrados, não apenas por equipe). **Práticas ágeis em escala** são os arcabouços que tratam desses desafios. O SAFe é um dos mais difundidos e é o citado pelo edital.

*Relações:* o SAFe usa Scrum e Kanban no nível das equipes (arquivos `02`/`03`); a gestão de portfólio relaciona-se com a gestão por valor do PMBOK 7ª edição (arquivo `05`) e com o escritório de projetos (arquivo `06`); a governança de TI e o planejamento estratégico aparecem no Módulo 4.

## 2. Fundamentos: escalar o ágil

### 2.1 Desafios de escala

| Desafio | Pergunta |
|---|---|
| **Coordenação** | Como várias equipes planejam e integram em conjunto? |
| **Alinhamento** | Como trabalho e orçamento ligam-se à estratégia? |
| **Arquitetura** | Como evoluir uma arquitetura comum sem bloquear equipes? |
| **Cadência** | Como sincronizar ciclos de planejamento e de entrega? |
| **Governança** | Como acompanhar o progresso sem burocratizar? |
| **Cultura** | Como mudar liderança, financiamento e métricas? |

### 2.2 Panorama de frameworks (complemento B)

| Framework | Ideia central | Observação |
|---|---|---|
| **SAFe** (Scaled Agile Framework) | Estrutura em camadas (equipe, trem de entrega, solução, portfólio) com cadência sincronizada | Cobre desde equipes até o portfólio; item do edital |
| **LeSS** (Large-Scale Scrum) | Scrum aplicado a muitas equipes com **um** backlog de produto e **um** PO | Busca simplicidade; poucos papéis adicionais |
| **Nexus** | Extensão do Scrum para 3 a 9 times, com uma **equipe de integração** | Mantém o Scrum como base |
| **Scrum@Scale** | Escala o Scrum por "Scrum de Scrums" e *MetaScrum* | Estrutura de times de times |
| **Disciplined Agile (DA)** | Conjunto de opções e processos contextuais | Orientado a "escolher o seu modo de trabalhar" |

*Observação:* a descrição acima é de visão geral; não foi verificada online nesta etapa. O modelo "Spotify" (squads, tribos, guildas) é um **exemplo de organização**, não um framework formal.

## 3. SAFe: visão geral

O **SAFe** é uma **base de conhecimento** de princípios, práticas e competências para aplicar **Lean, ágil e *DevOps*** em escala e atingir **agilidade de negócio**. Combina práticas das equipes (Scrum, Kanban, *Extreme Programming*) com pensamento sistêmico (*lean*), cadência e sincronização, e gestão enxuta de portfólio.

### 3.1 Princípios Lean-Agile (visão)

Entre os princípios do SAFe: **adotar uma visão econômica** das decisões; **aplicar pensamento sistêmico**; **assumir variabilidade e preservar opções**; **construir de forma incremental** com ciclos de aprendizado rápidos; basear marcos em **avaliação objetiva de sistemas funcionando**; **visualizar e limitar o WIP**, reduzir lotes e gerir filas; **aplicar cadência e sincronizar** com planejamento entre domínios; **liberar a motivação intrínseca** dos trabalhadores do conhecimento; **descentralizar a tomada de decisão**; **organizar em torno de valor**. *(Lista conforme a literatura do SAFe 6.0; não confirmada literalmente online nesta etapa.)*

### 3.2 Estrutura em níveis

| Nível | Quem | O que faz |
|---|---|---|
| **Equipe ágil** | Times multifuncionais (Scrum/Kanban/XP) | Entregam histórias em **iterações** (tipicamente de 2 semanas) |
| **Trem de entrega ágil (*Agile Release Train*, ART)** | Conjunto de equipes de **50 a 125 pessoas** (segundo o site oficial) | Desenvolve, entrega e, muitas vezes, opera uma ou mais soluções em um **fluxo de valor**; sincronizado por cadência |
| **Solução (grande porte)** | Vários ARTs e fornecedores | Coordena soluções complexas (*Solution Train*) |
| **Portfólio** | Liderança estratégica, gestores de portfólio, escritórios de projetos | **Gestão enxuta de portfólio** (financiamento, priorização, governança) |

*(Em versões diferentes, os nomes e a divisão em "configurações" — Essencial, Solução de grande porte, Portfólio, Completa — variam; confirmar na versão adotada.)*

## 4. O trem de entrega ágil (ART) e o Incremento de Programa (PI)

### 4.1 ART

O **ART** é uma **equipe de equipes ágeis de longa duração** (*long-lived*), alinhada a um **fluxo de valor**, que planeja, entrega e inspeciona em conjunto, com **cadência fixa**. Principais papéis (nomenclatura SAFe 6.0): **Release Train Engineer (RTE)** — facilita o trem, líder-servidor; **Gerência de Produto** — define a visão e o backlog do programa; **Arquiteto/Engenheiro de Sistema**; **Business Owners** (partes interessadas de negócio); e, nas equipes, **Product Owners**, **Scrum Masters** e membros do time.

### 4.2 Program Increment (PI)

**PI (Program Increment, Incremento de Programa)** é o **período fixo de tempo** (*timebox*) em que o ART planeja, desenvolve e entrega um **incremento integrado e utilizável**. Segundo o site oficial, o PI é um *timebox* de **8 a 12 semanas**, e a estrutura mais comum tem **quatro ou cinco iterações de desenvolvimento** mais uma **iteração de inovação e planejamento** (*Innovation and Planning*, IP), sem número fixo de iterações. O planejamento do PI ocorre a cada **8 a 12 semanas** (cadência do **PI Planning**, segundo o site oficial). O PI está para o ART como a **Sprint** está para o time Scrum, em escala maior. *Importante:* o PI é um **período de tempo**, não uma reunião nem um plano.

### 4.3 PI Planning

**PI Planning** é um **evento baseado em cadência, presencial ou virtual, de todo o ART** (tipicamente **dois dias**, a cada 8–12 semanas, facilitado pelo RTE), em que as equipes **alinham-se a uma missão e visão comuns**, planejam o próximo PI e identificam **dependências e riscos**. Resultados comuns: **objetivos do PI** de cada equipe (com valor de negócio), **quadro de programa** (*program board*) com funcionalidades e dependências, **riscos** tratados em um quadro **ROAM** (Resolvidos, Atribuídos, Aceitos, Mitigados) e um **voto de confiança** das equipes no plano.

### 4.4 Outros eventos de cadência

| Evento | Finalidade |
|---|---|
| **Planejamento da iteração** | Cada equipe planeja a iteração (como no Scrum) |
| **Demonstração do sistema** (*System Demo*) | A cada iteração: demonstra o **incremento integrado** do ART às partes interessadas |
| **Inspect & Adapt (I&A)** | Ao fim de cada PI, em três partes (**verificado** no site oficial): **demonstração do sistema do PI**, **revisão de medições quantitativas e qualitativas** e **retrospectiva com oficina de resolução de problemas** |
| **Scrum de Scrums / sincronização de PO** | Coordenação de dependências entre as equipes |

## 5. Entregas incrementais

O SAFe busca **valor entregue com frequência**, com qualidade, por meio de:

- **Iterações curtas** em que cada equipe entrega histórias testadas e integradas.
- **Demonstração do sistema** a cada iteração: um **incremento integrado do todo**, não só de cada equipe.
- **PI**: marco maior em que o ART entrega um **incremento de valor de negócio** que pode ser liberado.
- **Pipeline de entrega contínua** (*Continuous Delivery Pipeline*): exploração contínua, integração contínua, implantação contínua e **liberação sob demanda** (*release on demand*), que **separa a implantação técnica da liberação ao cliente**.
- **Base arquitetural evolutiva** (*architectural runway*) e **facilitadores** (*enablers*) que permitem entregas futuras.
- **Medição objetiva** do progresso por sistemas funcionando (e não por documentos).

| Conceito | Descrição |
|---|---|
| **Incremento** | Resultado utilizável e integrado produzido em uma iteração ou PI |
| **Liberação sob demanda** | O negócio escolhe o momento de liberar o que já está implantado |
| **Entrega incremental** × **entrega única** | Valor liberado em partes ao longo do tempo × tudo ao final do projeto |

## 6. Gestão de portfólio alinhada à estratégia (*Lean Portfolio Management*)

### 6.1 Conceito

A **gestão enxuta de portfólio** (*Lean Portfolio Management*, LPM) **alinha estratégia e execução** aplicando pensamento *lean* e sistêmico a três eixos (segundo o site oficial): **estratégia e financiamento de investimentos**, **operações ágeis de portfólio** e **governança enxuta**. Em vez de aprovar **projetos** e acompanhá-los por plano, **financia fluxos de valor** (*value streams*) e prioriza trabalho pelo **valor econômico**.

### 6.2 Elementos

| Elemento | Descrição |
|---|---|
| **Temas estratégicos** (*strategic themes*) | Diferenciais estratégicos que conectam o portfólio à estratégia da empresa |
| **Fluxos de valor** | Sequência de atividades que entrega valor; unidade de financiamento |
| **Orçamentos enxutos e guardrails** | Financiamento **contínuo** por fluxo de valor com **balizas** (limites e regras de governança) em vez de aprovação projeto a projeto |
| **Épicos** | Iniciativas grandes que exigem análise e aprovação (de negócio ou habilitadores); entram em um **Kanban de portfólio** |
| **Kanban de portfólio** | Fluxo visual de épicos (funil, análise, portfólio, implementação, concluído) com limite de WIP |
| **Revisões estratégicas do portfólio** (trimestrais) e **sincronizações** (mensais) | Acompanhamento e rebalanceamento (cadências conforme o site oficial) |
| **Priorização econômica (WSJF)** | *Weighted Shortest Job First*: prioriza o que gera **mais valor por unidade de tempo**: **WSJF = custo do atraso relativo ÷ duração (tamanho) relativa do trabalho** (definição **verificada** no site oficial); as entradas são **valor para o negócio e o usuário**, **criticidade no tempo**, **redução de risco e/ou habilitação de oportunidade** e **tamanho do trabalho**; o **custo do atraso** é a soma das três primeiras |
| **Métricas** | Valor entregue, fluxo, qualidade, tempo de ciclo etc.; OKRs são usados por muitas organizações (complemento B) |

*Exemplo de WSJF (didático):* uma iniciativa com custo do atraso 21 e tamanho 3 tem WSJF = 7; outra, com custo do atraso 40 e tamanho 8, tem WSJF = 5; a primeira é priorizada, pois entrega valor mais rápido por esforço.

### 6.3 Do portfólio à equipe: a cadeia de alinhamento

```text
Estratégia ─► Temas estratégicos ─► Visão do portfólio ─► Épicos
           ─► Funcionalidades (features, no ART) ─► Histórias (nas equipes)
```

Cada nível refina o anterior; a **transparência** da cadeia permite verificar se o trabalho serve à estratégia.

### 6.4 LPM × gestão tradicional de projetos

| Critério | Portfólio tradicional | Portfólio enxuto (SAFe) |
|---|---|---|
| Unidade de financiamento | **Projeto** | **Fluxo de valor** |
| Aprovação | Caso de negócio detalhado, por projeto | Financiamento contínuo com *guardrails*; épicos pelo Kanban de portfólio |
| Planejamento | Plano anual, detalhado | Visão do portfólio, planejamento por ondas e cadência |
| Medição | Aderência a prazo, custo e escopo | **Valor entregue** e fluxo |
| Ajustes | Mudanças formais | Rebalanceamento em cadência |

## 7. Comparações conceituais

| Conceito A | Conceito B | Diferença principal |
|---|---|---|
| **PI** | **PI Planning** | Período fixo de tempo × evento de planejamento no início do período |
| **PI** | Sprint | Período do ART (várias iterações; 8–12 semanas) × período de uma equipe Scrum (≤ 1 mês) |
| **PI** | Rituais diários | O PI é um período, não um conjunto de reuniões diárias |
| **PI** | Gestão de portfólio | Período de entrega do ART × alinhamento estratégico de investimentos |
| **ART** | Equipe Scrum | Equipe de equipes alinhada a um fluxo de valor (50–125 pessoas) × time único (≤ 10) |
| **RTE** | Scrum Master | Facilita o trem (várias equipes) × facilita uma equipe |
| Funcionalidade (*feature*) | História | Entrega do ART em um PI × entrega de uma equipe em uma iteração |
| Épico | História | Iniciativa de portfólio × item pequeno da equipe |
| WSJF | Priorização por ordem de chegada | Valor/tempo × ordem de solicitação |
| Financiamento por projeto | Financiamento por fluxo de valor | Aprova-se um escopo × financia-se uma capacidade contínua |

## 8. Aplicações e cenários

**Cenário (didático): modernização de um conjunto de sistemas corporativos.** Doze equipes alteram módulos interdependentes. Formam um ART, realizam o **PI Planning** de dois dias para alinhar objetivos e dependências, e a cada iteração fazem uma **demonstração do sistema integrado**. Ao fim do PI, o **Inspect & Adapt** gera melhorias. *Limitação:* exige patrocínio, cadência disciplinada e investimento em integração/automação.

**Cenário (didático): alinhamento com a estratégia.** A liderança define temas estratégicos (por exemplo, "segurança operacional digital") e financia fluxos de valor correspondentes; novos épicos passam pelo Kanban de portfólio e são priorizados por WSJF. *Limitação:* indicadores simplistas de valor podem distorcer a priorização.

**Riscos e críticas:** implantação como "cerimonial" sem mudança de cultura e de liderança; excesso de papéis e processos; foco em certificações; dependência de uma versão específica do framework.

## 9. Atenção para a prova

*Inferência técnica e recomendação pedagógica; sem atribuir frequência à banca.*

- **PI = período fixo de tempo** durante o qual um conjunto de equipes (o ART) entrega valor; **PI Planning = evento** de planejamento; **LPM = alinhamento do portfólio à estratégia**. Não confundir.
- **Equipes ágeis sincronizadas por cadência** e **demonstração integrada** diferenciam o SAFe da simples soma de times Scrum.
- **Portfólio enxuto** financia **fluxos de valor** e usa **WSJF** e **Kanban de portfólio**.
- Termos de versão: "competências" (SAFe 6.0) × "disciplinas" (apresentação mais recente); use a nomenclatura do enunciado.
- O Scrum Master **não** é o RTE; o RTE é facilitador do **ART**.
- *Evidência histórica (amostra de duas provas):* a Prova 6 de 2023 (Q68) perguntou o que é o **Program Increment (PI)** no SAFe, com distratores que o confundiam com rituais diários, evento de revisão do backlog, plano de entregas e prática de planejamento estratégico de portfólio. Duas provas não permitem inferir frequência.

## 10. Síntese

- Escalar o ágil: coordenação, alinhamento estratégico, arquitetura, cadência, governança.
- SAFe: equipe → ART (50–125 pessoas) → solução → portfólio; Lean-Agile; cadência e sincronização.
- PI: período fixo (8–12 semanas); iterações + IP; PI Planning de dois dias; demonstração do sistema; Inspect & Adapt.
- Entregas incrementais: iterações, demo integrada, PI, pipeline de entrega contínua, liberação sob demanda.
- LPM: temas estratégicos, fluxos de valor, orçamentos enxutos, épicos e Kanban de portfólio, WSJF = custo do atraso ÷ tamanho.

## 11. Pontos para a futura produção de questões (registro)

Conceitos: ART, PI, PI Planning, Inspect & Adapt, LPM, WSJF, épico/feature/história. Distinções: PI×PI Planning×LPM; ART×equipe; RTE×SM; projeto×fluxo de valor. Interpretação: o que é cada elemento em um cenário; calcular WSJF; escolher o artefato correto na cadeia estratégia→equipe.

## 12. Referências

- SCALED AGILE, INC. *Scaled Agile Framework (SAFe)*. https://framework.scaledagile.com — **verificado em 2026-10-31**: definição e tamanho do ART (50–125 pessoas), PI Planning (dois dias, a cada 8–12 semanas, conduzido pelo RTE), eixos do LPM (estratégia e financiamento, operações ágeis de portfólio, governança), Kanban de portfólio, orçamentos enxutos e *guardrails*, revisões trimestrais e sincronizações mensais; SAFe 6.0 de março de 2023. Itens marcados "não confirmados" acima vêm da literatura do SAFe e **não foram verificados online**.
- WSJF, PI (8–12 semanas; quatro ou cinco iterações + IP) e Inspect & Adapt (três partes): **verificados** em páginas do site oficial (partes das páginas exigem *login*). Os **princípios Lean-Agile**: **não verificados** (página não localizada).
- Edital Transpetro nº 04/2026.4, Anexo IV, item 2.3.
