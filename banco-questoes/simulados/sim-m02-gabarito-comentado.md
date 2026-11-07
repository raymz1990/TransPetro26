# Simulado do módulo 2 — Gerenciamento de projetos e produtos

**Status:** rascunho · **Tempo:** 58 min · **Questões:** 15

**Critério de distribuição:** Até 15 questões por módulo, priorizando itens ainda não usados e mistura de dificuldade 30/50/20% (critério pedagógico).

**Observações:** Mistura de questões oficiais e autorais do módulo; algumas ainda `em_revisao`.

Composição: tipo {'autoral': 10, 'oficial': 5} · status {'validada': 10, 'em_revisao': 5} · dificuldade {'media': 7, 'facil': 6, 'dificil': 2}

## 1. AUT-000014 — Kanban: limite de WIP e Lei de Little

*Questão autoral — estilo Cesgranrio.* · item 2.1 · Média · gabarito **E**

Pela Lei de Little, **tempo de ciclo = WIP ÷ vazão**. Com 12 itens e vazão de 4 itens/semana, o tempo de ciclo atual é 12 ÷ 4 = 3 semanas. Para chegar a 2 semanas com a mesma vazão: WIP = tempo de ciclo × vazão = 2 × 4 = **8 itens**.

- **A)** Incorreta. 4 itens corresponderiam a um tempo de ciclo de 1 semana (4 ÷ 4); é o valor da vazão, confundido com o WIP.
- **B)** Incorreta. 6 itens resultariam em 1,5 semana (6 ÷ 4); o valor pode vir de dividir o WIP atual por 2.
- **C)** Incorreta. É o WIP atual, que resulta em 3 semanas de tempo de ciclo, e não em 2.
- **D)** Incorreta. 2 itens resultariam em 0,5 semana; é o valor do tempo de ciclo-alvo, confundido com o WIP.
- **E)** Correta. WIP = 2 semanas × 4 itens/semana = 8 itens.

**Revisão rápida:** Lei de Little: CT = WIP ÷ TP. WIP-alvo = CT-alvo × TP.

## 2. AUT-000011 — Scrum: responsabilidades e cancelamento da Sprint

*Questão autoral — estilo Cesgranrio.* · item 2.1 · Fácil · gabarito **B**

O Scrum Guide atribui **somente ao Product Owner** a autoridade para cancelar uma Sprint, tipicamente quando a Meta da Sprint se torna obsoleta. O PO é o responsável por maximizar o valor do produto e responde pelas decisões sobre o Product Backlog e a Meta do Produto. Quando a Sprint é cancelada, os itens concluídos e utilizáveis são revisados, e os demais retornam ao Product Backlog.

- **A)** Incorreta. O Scrum Master estabelece o Scrum, orienta e remove impedimentos, mas não decide cancelar a Sprint; esse poder não lhe pertence.
- **B)** Correta. Apenas o Product Owner pode cancelar a Sprint, por exemplo, quando a Meta da Sprint se torna obsoleta.
- **C)** Incorreta. Os Desenvolvedores criam o plano da Sprint e adaptam o trabalho, mas não têm autoridade para cancelá-la.
- **D)** Incorreta. As partes interessadas podem influenciar o PO, mas a decisão de cancelar a Sprint cabe ao Product Owner, não a elas.
- **E)** Incorreta. O Scrum não prevê votação do time para cancelar a Sprint; a autoridade é do Product Owner, e não coletiva.

**Revisão rápida:** Somente o PO cancela a Sprint (ex.: Meta obsoleta). SM: estabelece o Scrum. Desenvolvedores: plano e Incremento.

## 3. AUT-000012 — Scrum: artefatos e compromissos; Definição de Pronto

*Questão autoral — estilo Cesgranrio.* · item 2.1 · Difícil · gabarito **D**

No Scrum, cada artefato tem um **compromisso**: Product Backlog → **Meta do Produto**; Sprint Backlog → **Meta da Sprint**; Incremento → **Definição de Pronto**. A Definição de Pronto descreve o estado do Incremento quando atende às medidas de qualidade e vale para **todos** os itens: o que não atende a ela não integra o Incremento e volta ao Product Backlog. Já os **critérios de aceitação** são condições **específicas de cada item** (história), que o Scrum Guide não prescreve, mas que são práticas comuns.

- **A)** Incorreta. Troca os conceitos: a Definição de Pronto é o compromisso do Incremento, e o do Sprint Backlog é a Meta da Sprint. Critérios de aceitação não são compromisso de artefato algum.
- **B)** Incorreta. A Definição de Pronto não é definida item a item pelo PO. É um padrão de qualidade do Incremento (da organização ou do Scrum Team), comum a todos os itens.
- **C)** Incorreta. O compromisso do Product Backlog é a Meta do Produto, e o do Incremento é a Definição de Pronto; a alternativa troca os dois.
- **D)** Correta. Define o compromisso do Incremento e distingue o padrão geral (Definição de Pronto) das condições específicas de cada item (critérios de aceitação).
- **E)** Incorreta. A Definição de Pronto se aplica a todo o Incremento, não apenas a itens de maior risco; nem os critérios de aceitação se limitam aos itens simples.

**Revisão rápida:** PB → Meta do Produto. SB → Meta da Sprint. Incremento → Definição de Pronto (vale para todos os itens). Critérios de aceitação: específicos do item.

## 4. OFI-000013 — Scrum x Kanban

*Questão oficial — Fundação Cesgranrio, Transpetro PSP/Terra 002/2023, Prova 6, questão 65.* · item 2.1 · Média · gabarito **A**

O Scrum trabalha em **Sprints** de duração fixa; o Kanban é um fluxo **contínuo**, sem iterações obrigatórias, controlado por **limites de trabalho em andamento (WIP)**.

- **A)** Correta. Diferença marcante correta: Sprints fixas no Scrum; fluxo contínuo no Kanban.
- **B)** Incorreta. Inverte os instrumentos: burndown é típico do Scrum, e o Kanban usa quadro, WIP e gráficos de fluxo.
- **C)** Incorreta. Troca os métodos: Scrum não se baseia em escopo contratual fechado e é o Scrum que tem iterações definidas.
- **D)** Incorreta. A Daily Scrum é evento do Scrum; o Kanban não a exige.
- **E)** Incorreta. O Product Owner é papel do Scrum; o Kanban não prescreve papéis.

**Revisão rápida:** Scrum: Sprint fixa. Kanban: fluxo contínuo e WIP.

## 5. AUT-000013 — Scrum: Sprint Review

*Questão autoral — estilo Cesgranrio.* · item 2.1 · Fácil · gabarito **A**

A Sprint Review é uma **sessão de trabalho** em que o Scrum Team e as partes interessadas **inspecionam o resultado da Sprint** e **determinam adaptações futuras**; o Product Backlog pode ser ajustado para atender a novas oportunidades. **Não** é uma apresentação para aprovação. Ocorre antes da Retrospectiva.

- **A)** Correta. Descreve a finalidade da Revisão da Sprint: inspecionar o resultado e adaptar, com possível ajuste do Product Backlog.
- **B)** Incorreta. A Revisão não é uma apresentação formal de aprovação; é colaborativa, e o Product Backlog pode ser alterado como resultado.
- **C)** Incorreta. Descreve a Retrospectiva da Sprint, que trata de qualidade e eficácia do time e ocorre depois da Revisão.
- **D)** Incorreta. Descreve a Daily Scrum (Reunião Diária), de 15 minutos, voltada à Meta da Sprint.
- **E)** Incorreta. O Scrum não prevê avaliação individual de desempenho em seus eventos; a Revisão examina o Incremento, e não pessoas.

**Revisão rápida:** Review: inspeciona o resultado com stakeholders e adapta o backlog. Retrospective: melhora o processo do time. Daily: 15 min, Meta da Sprint.

## 6. AUT-000015 — Gestão de projeto versus gestão de produto

*Questão autoral — estilo Cesgranrio.* · item 2.2 · Média · gabarito **C**

A **gestão de projeto** mede a execução do que foi combinado (escopo, prazo, custo, aderência ao plano: **I e IV**). A **gestão de produto** foca **valor e resultados** (*outcomes*) para usuários e negócio: adoção e retenção, redução de tempo de atendimento, receita ou economia (**II e III**). O produto continua após o lançamento, com equipe estável e investimento contínuo.

- **A)** Incorreta. I (prazo e orçamento) e IV (aderência ao escopo) são indicadores de execução do projeto, a medida típica da gestão de projeto.
- **B)** Incorreta. Mistura um indicador de projeto (I) com um de produto (II).
- **C)** Correta. Adoção pelos usuários e redução do tempo de atendimento medem valor e resultado (produto).
- **D)** Incorreta. Mistura um indicador de produto (III) com um de projeto (IV).
- **E)** Incorreta. Inclui o indicador I, de prazo e orçamento, típico da gestão de projeto.

**Revisão rápida:** Projeto = aderência ao plano. Produto = valor e resultado ao longo do ciclo de vida.

## 7. AUT-000016 — SAFe: ART, PI e PI Planning

*Questão autoral — estilo Cesgranrio.* · item 2.3 · Média · gabarito **D**

O **PI Planning** é o evento baseado em cadência, de **todo o ART**, tipicamente de **dois dias**, a cada **8 a 12 semanas**, facilitado pelo RTE, em que as equipes alinham-se à missão e à visão, planejam o próximo PI e identificam dependências e riscos. O resultado inclui objetivos do PI de cada equipe.

- **A)** Incorreta. O Inspect & Adapt ocorre ao **fim** do PI (demonstração do sistema do PI, revisão de medições e retrospectiva com resolução de problemas); não é o evento de planejamento do próximo PI.
- **B)** Incorreta. A System Demo ocorre a **cada iteração** e demonstra o incremento integrado; não planeja o próximo PI.
- **C)** Incorreta. O Planejamento da Iteração é feito por **cada equipe** para uma iteração (em geral, duas semanas), e não por todo o trem.
- **D)** Correta. Evento de planejamento de todo o ART, a cada PI, de cerca de dois dias.
- **E)** Incorreta. O Scrum de Scrums é uma sincronização recorrente entre equipes, sem a função de planejar o PI e sem a duração de dois dias.

**Revisão rápida:** PI = 8–12 semanas. PI Planning: todo o ART, ~2 dias, facilitado pelo RTE. Inspect & Adapt: fim do PI.

## 8. OFI-000015 — SAFe: Program Increment (PI)

*Questão oficial — Fundação Cesgranrio, Transpetro PSP/Terra 002/2023, Prova 6, questão 68.* · item 2.3 · Média · gabarito **C**

O **PI** é a *timebox* do SAFe (tipicamente 8 a 12 semanas) em que as equipes de um **Agile Release Train (ART)** planejam e entregam valor incremental; começa com o **PI Planning**.

- **A)** Incorreta. Rituais diários são do nível da equipe (daily).
- **B)** Incorreta. O PI Planning é o evento de planejamento; o PI em si é o período, não o evento.
- **C)** Correta. Descreve o PI: período fixo em que equipes do ART entregam valor.
- **D)** Incorreta. O PI não é um plano que documenta todas as etapas, e o SAFe evita planejamento detalhado de longo prazo.
- **E)** Incorreta. Alinhamento de portfólio com a estratégia é função da gestão de portfólio (Lean Portfolio Management).

**Revisão rápida:** PI: 8–12 semanas, ART entrega valor incremental.

## 9. AUT-000020 — PMBOK 7ª edição: domínios de desempenho

*Questão autoral — estilo Cesgranrio.* · item 2.4 · Difícil · gabarito **B**

Na 7ª edição, os **oito domínios de desempenho** (partes interessadas, equipe, abordagem de desenvolvimento e ciclo de vida, planejamento, trabalho do projeto, entrega, mensuração e incerteza) são **grupos de atividades correlatas** críticas para a entrega efetiva dos resultados; eles **interagem, sobrepõem-se e ocorrem simultaneamente**, e não em sequência. Os **princípios** orientam o comportamento; os grupos de processos e as áreas de conhecimento pertencem à 6ª edição.

- **A)** Incorreta. Domínios não são fases sequenciais. A ideia de sequência da iniciação ao encerramento remete aos grupos de processos da 6ª edição.
- **B)** Correta. Definição de domínios de desempenho na 7ª edição.
- **C)** Incorreta. As dez áreas de conhecimento fazem parte da 6ª edição; a 7ª edição não as adota como estrutura.
- **D)** Incorreta. Os cinco grupos de processos (iniciação, planejamento, execução, monitoramento e controle e encerramento) são da 6ª edição.
- **E)** Incorreta. Os 12 princípios são outro elemento da 7ª edição, que orienta comportamentos e decisões; não são os domínios.

**Revisão rápida:** PMBOK 7: 12 princípios (orientam comportamento) + 8 domínios (atividades correlatas e simultâneas). PMBOK 6: 5 grupos de processos e 10 áreas.

## 10. AUT-000017 — PMBOK 7ª edição: Estrutura Analítica do Projeto (EAP)

*Questão autoral — estilo Cesgranrio.* · item 2.4 · Fácil · gabarito **A**

A **EAP (WBS)** é a decomposição hierárquica do **escopo total** do trabalho em partes menores e gerenciáveis, até os **pacotes de trabalho**. Segue a **regra dos 100%** (inclui todo o trabalho do escopo, e somente ele) e é orientada a **entregas**, não a atividades ou tempo. Serve de base para estimativas de custo e prazo, alocação de recursos e riscos.

- **A)** Correta. Decomposição do escopo em pacotes de trabalho, com a regra dos 100%.
- **B)** Incorreta. O cronograma sequencia atividades e dependências e define prazos; a EAP define o que será entregue.
- **C)** Incorreta. A EAP é orientada a entregas e escopo; a organização por atividades e datas é característica do cronograma.
- **D)** Incorreta. Estimativa de custos é outro processo; a EAP é um dos insumos dessa estimativa, mas não é a técnica.
- **E)** Incorreta. A classificação de riscos por probabilidade e impacto é a análise (matriz) de riscos, que não se confunde com a EAP.

**Revisão rápida:** EAP: decomposição hierárquica do escopo em pacotes; regra dos 100%; orientada a entregas; não é cronograma, estimativa de custo nem análise de risco.

## 11. OFI-000012 — Ciclos de vida: modelo em cascata

*Questão oficial — Fundação Cesgranrio, Transpetro PSP/Terra 002/2023, Prova 6, questão 54.* · item 2.4 · Fácil · gabarito **E**

No **cascata (waterfall)**, as fases (requisitos, projeto, implementação, testes, manutenção) são **sequenciais e lineares**, cada uma dependendo da conclusão da anterior; é um ciclo de vida preditivo.

- **A)** Incorreta. Aceitar mudanças como inevitáveis é postura dos métodos ágeis.
- **B)** Incorreta. Mistura iteração com sequência; o cascata não é iterativo.
- **C)** Incorreta. Sprints são do Scrum.
- **D)** Incorreta. Requisitos revisitados o tempo todo são característica ágil/iterativa.
- **E)** Correta. Descreve corretamente o cascata: fases sequenciais e lineares.

**Revisão rápida:** Cascata: fases em sequência, sem retorno planejado.

## 12. OFI-000014 — EAP (Estrutura Analítica do Projeto)

*Questão oficial — Fundação Cesgranrio, Transpetro PSP/Terra 002/2023, Prova 6, questão 67.* · item 2.4 · Fácil · gabarito **D**

A **EAP (WBS)** é a decomposição **hierárquica** do escopo total do trabalho em entregas e pacotes de trabalho menores e mais gerenciáveis.

- **A)** Incorreta. Sequência e dependências entre atividades são o **diagrama de rede/cronograma**.
- **B)** Incorreta. Objetivos e estratégia compõem o plano de projeto ou o termo de abertura.
- **C)** Incorreta. Probabilidade e impacto de riscos fazem parte da análise de riscos.
- **D)** Correta. É a definição correta de EAP.
- **E)** Incorreta. Estimativa de custos é outra técnica (analógica, paramétrica, *bottom-up*), embora a EAP a apoie.

**Revisão rápida:** EAP = decomposição hierárquica do escopo em pacotes de trabalho.

## 13. AUT-000018 — Projetos e a organização: estruturas organizacionais

*Questão autoral — estilo Cesgranrio.* · item 2.5 · Média · gabarito **C**

Na **estrutura matricial**, especialistas são compartilhados entre projetos, o que traz flexibilidade, mas surge a **dupla subordinação** (ao gerente funcional e ao gerente de projetos) e possíveis conflitos. A estrutura **funcional** privilegia especialização e carreira, com pouca ou nenhuma autoridade do gerente de projetos; na **projetizada**, a equipe é alocada ao gerente de projetos (alta autoridade, foco total).

- **A)** Incorreta. Foco total e comunicação rápida, com equipe alocada ao gerente de projetos, são vantagens da estrutura projetizada, não da funcional.
- **B)** Incorreta. Especialização e clareza de carreira, com o trabalho nos departamentos, são vantagens da estrutura funcional; na projetizada, as equipes são organizadas por projeto.
- **C)** Correta. Vantagem (compartilhamento de especialistas) e limitação (dupla subordinação) da estrutura matricial.
- **D)** Incorreta. Descreve a estrutura funcional ou a matricial fraca. Na projetizada, o gerente de projetos tem autoridade alta a quase total e administra o orçamento.
- **E)** Incorreta. Na matricial forte, o gerente de projetos tem autoridade moderada a alta e maior disponibilidade de recursos; pouca ou nenhuma autoridade caracteriza a estrutura funcional.

**Revisão rápida:** Funcional: especialização. Matricial: compartilha especialistas, dupla subordinação. Projetizada: foco total, equipe alocada ao gerente.

## 14. OFI-000016 — Estruturas organizacionais: matriz forte

*Questão oficial — Fundação Cesgranrio, Transpetro PSP/Terra 002/2023, Prova 6, questão 69.* · item 2.5 · Fácil · gabarito **C**

Nas estruturas matriciais: na **matriz fraca**, predomina o gerente funcional; na **balanceada**, há equilíbrio; na **forte**, o gerente de projeto tem **alta autoridade e influência**, com mais recursos dedicados.

- **A)** Incorreta. "Composta" refere-se à combinação de estruturas, não a um grau de influência.
- **B)** Incorreta. Na matriz fraca, a autoridade do gerente de projeto é baixa.
- **C)** Correta. Na matriz forte, o gerente de projeto tem alto grau de autoridade e influência.
- **D)** Incorreta. Na balanceada, a autoridade é compartilhada entre o gerente de projeto e o funcional.
- **E)** Incorreta. "Invertida" não é tipo padrão de matriz.

**Revisão rápida:** Matriz forte = gerente de projeto com alta autoridade.

## 15. AUT-000019 — Escritório de projetos (PMO): modelos

*Questão autoral — estilo Cesgranrio.* · item 2.6 · Média · gabarito **E**

Na classificação por grau de controle, o PMO **de suporte** tem baixo controle (consultivo, adoção voluntária), o **de controle** tem grau moderado (**exige conformidade** com métodos, modelos, ferramentas e governança, com auditorias, sem assumir a gestão dos projetos) e o **diretivo** tem alto controle (**assume** a gestão e os gerentes de projetos pertencem ao PMO). O cenário descreve exigência de conformidade e auditoria, sem assumir projetos: PMO de controle.

- **A)** Incorreta. O PMO de suporte é consultivo, com adoção voluntária; no cenário, a adoção é exigida e auditada.
- **B)** Incorreta. O PMO diretivo assume o controle dos projetos e tem os gerentes de projetos a ele subordinados; o enunciado exclui as duas coisas.
- **C)** Incorreta. A classificação por escopo (corporativo/estratégico) é outra; o enunciado se refere ao grau de controle, e o corporativo tem foco em portfólio e estratégia, não em auditoria de conformidade de projetos.
- **D)** Incorreta. O PMO ágil (escritório de valor) atua pela facilitação e transparência, e não pela exigência de conformidade e auditorias.
- **E)** Correta. Grau moderado de controle: exige conformidade e verifica a aderência, sem assumir os projetos.

**Revisão rápida:** Suporte: consultivo. Controle: exige conformidade e audita. Diretivo: assume projetos e gerentes.
