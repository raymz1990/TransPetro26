# Simulado do módulo 6 — Experiência do usuário (UX)

**Status:** rascunho · **Tempo:** 58 min · **Questões:** 15

**Critério de distribuição:** Até 15 questões por módulo, priorizando itens ainda não usados e mistura de dificuldade 30/50/20% (critério pedagógico).

**Observações:** Mistura de questões oficiais e autorais do módulo; algumas ainda `em_revisao`.

Composição: tipo {'autoral': 12, 'oficial': 3} · status {'validada': 10, 'em_revisao': 5} · dificuldade {'media': 8, 'facil': 5, 'dificil': 2}

## 1. AUT-000051 — Acessibilidade: princípios do WCAG (POUR)

*Questão autoral — estilo Cesgranrio.* · item 6.1 · Média · gabarito **B**

O WCAG 2.2 se organiza em quatro princípios (**POUR**): **Perceptível** (a informação deve poder ser percebida: texto alternativo, legendas, contraste), **Operável** (componentes e navegação devem ser operáveis: uso por teclado, tempo suficiente, foco visível), **Compreensível** (informação e operação devem ser compreensíveis: linguagem clara, comportamento previsível, ajuda na entrada de dados e mensagens de erro) e **Robusto** (conteúdo interpretável por diversos agentes de usuário e tecnologias assistivas). I viola o Perceptível; II, o Operável; III, o Compreensível.

- **A)** Incorreta. Troca os princípios: a ausência de texto alternativo afeta a percepção (Perceptível), e não a compreensão.
- **B)** Correta. I: Perceptível; II: Operável; III: Compreensível.
- **C)** Incorreta. A falta de texto alternativo é um problema de percepção, e não de operação; e as mensagens de erro vagas não são um problema de robustez.
- **D)** Incorreta. O acesso apenas por mouse é um problema de operação (Operável), não de robustez técnica.
- **E)** Incorreta. A falta de texto alternativo é problema de percepção, e não de robustez; o acionamento apenas por mouse é de operabilidade.

**Revisão rápida:** WCAG: POUR; níveis A, AA, AAA. Mapeie cada problema ao princípio: percepção, operação, compreensão, robustez.

## 2. OFI-000029 — Acessibilidade e usabilidade no processo de desenvolvimento

*Questão oficial — Fundação Cesgranrio, Transpetro PSP/Terra 002/2023, Prova 6, questão 33.* · item 6.1 · Média · gabarito **E**

Acessibilidade e usabilidade são **requisitos de qualidade** a considerar desde as fases iniciais (pesquisa, prototipação), e **testar antes da codificação** reduz o custo de correção.

- **A)** Incorreta. Usabilidade trata de eficácia, eficiência e satisfação do uso, e não de desempenho técnico ou manutenibilidade.
- **B)** Incorreta. Pensar em acessibilidade só com o software pronto encarece e limita as correções.
- **C)** Incorreta. Começar na codificação é tarde; ambas nascem no projeto e nos protótipos.
- **D)** Incorreta. As características são complementares, não conflitantes.
- **E)** Correta. Devem entrar nos protótipos e ser testadas antes da codificação.

**Revisão rápida:** A11y e usabilidade: complementares e desde o protótipo.

## 3. AUT-000052 — Histórias do usuário: critério INVEST

*Questão autoral — estilo Cesgranrio.* · item 6.2 · Fácil · gabarito **D**

O **INVEST** descreve boas histórias: **I**ndependentes, **N**egociáveis, **V**aliosas, **E**stimáveis, **S**mall (pequenas) e **T**estáveis. Histórias que só podem ser implementadas em ordem rígida e que impedem a priorização isolada **não são independentes**.

- **A)** Incorreta. Ser negociável significa que os detalhes são definidos na conversa, e não um contrato fechado; o problema descrito é a dependência.
- **B)** Incorreta. Ser valiosa significa entregar valor ao usuário ou ao negócio; o enunciado não questiona o valor das histórias.
- **C)** Incorreta. Ser estimável é a capacidade de a equipe estimar o esforço; o problema relatado é de dependência entre histórias.
- **D)** Correta. A dependência rígida e a impossibilidade de priorizar isoladamente violam a independência.
- **E)** Incorreta. Ser pequena é caber em uma iteração; o enunciado não trata do tamanho das histórias.

**Revisão rápida:** INVEST: independente, negociável, valiosa, estimável, pequena, testável.

## 4. AUT-000108 — Histórias de usuário: critérios INVEST

*Questão autoral — estilo Cesgranrio.* · item 6.2 · Média · gabarito **C**

INVEST: **I**ndependente, **N**egociável, **V**alioso, **E**stimável, **P**equena (*Small*), **T**estável. A história descreve um **épico**: cadastro, aprovação, renovação, relatórios e integração são várias funcionalidades, impossíveis de concluir em uma iteração; deve ser **dividida** em histórias menores.

- **A)** Incorreta. Nada no enunciado mostra dependência entre histórias.
- **B)** Incorreta. Os detalhes continuam negociáveis; o problema é o tamanho.
- **C)** Correta. É um épico, grande demais para uma iteração: viola o critério Pequena.
- **D)** Incorreta. A história declara valor (controlar os contratos), embora ele seja amplo.
- **E)** Incorreta. Pode-se escrever critérios de aceite por funcionalidade; o problema é o tamanho.

**Revisão rápida:** INVEST: história boa é Pequena; épico deve ser quebrado.

## 5. AUT-000053 — Interação web: arquitetura da informação e classificação de cartões

*Questão autoral — estilo Cesgranrio.* · item 6.3 · Fácil · gabarito **A**

Na **classificação de cartões (*card sorting*)**, usuários agrupam e nomeiam itens de conteúdo, o que revela seu modelo mental e embasa a **arquitetura da informação** (organização, rotulagem e navegação). O **teste de árvore** valida uma estrutura **já definida**. Os demais são métodos de avaliação.

- **A)** Correta. Agrupamento e nomeação de cartões pelos usuários: card sorting.
- **B)** Incorreta. O teste de árvore avalia se os usuários encontram itens em uma hierarquia já proposta; não pede que agrupem e nomeiem.
- **C)** Incorreta. A avaliação heurística é feita por especialistas, e não por usuários agrupando cartões.
- **D)** Incorreta. O percurso cognitivo simula os passos do usuário em uma tarefa, e não pede o agrupamento de conteúdo.
- **E)** Incorreta. O teste A/B compara variantes em uso real; não serve para descobrir como os usuários organizam o conteúdo.

**Revisão rápida:** Card sorting: gera a estrutura a partir do modelo mental dos usuários. Tree testing: valida a estrutura. Heurística: especialistas. Teste de usabilidade: usuários em tarefas.

## 6. AUT-000054 — Projeto centrado no usuário: avaliação heurística e teste de usabilidade

*Questão autoral — estilo Cesgranrio.* · item 6.4 · Média · gabarito **E**

Na **avaliação heurística**, **especialistas inspecionam** a interface com base em princípios gerais de usabilidade (as dez heurísticas de Nielsen). No **teste de usabilidade**, **usuários reais executam tarefas** e são **observados**, o que revela problemas reais de uso. As duas são complementares e podem ocorrer antes do lançamento, inclusive sobre protótipos.

- **A)** Incorreta. Inverte os conceitos: a inspeção por especialistas é a avaliação heurística, e a execução de tarefas por usuários é o teste de usabilidade.
- **B)** Incorreta. A inspeção segundo as heurísticas é avaliação heurística (e não percurso cognitivo), e ambas podem ocorrer antes do lançamento, inclusive em protótipos.
- **C)** Incorreta. Nenhuma delas é teste A/B nem classificação de cartões; e ambas envolvem observação ou inspeção, e não apenas estatísticas de uso.
- **D)** Incorreta. A primeira é avaliação heurística, e a segunda é um teste de usabilidade; as heurísticas são justamente a base da primeira.
- **E)** Correta. Especialistas e heurísticas: avaliação heurística; usuários reais em tarefas: teste de usabilidade.

**Revisão rápida:** Avaliação heurística: especialistas. Teste de usabilidade: usuários reais. Percurso cognitivo: simula passos do usuário novo.

## 7. AUT-000055 — Storytelling com dados: escolha de gráficos e boas práticas

*Questão autoral — estilo Cesgranrio.* · item 6.5 · Difícil · gabarito **C**

**I (correta):** barras comparam comprimentos; um eixo que não começa em zero **distorce** a comparação. **II (correta):** a **evolução no tempo** é mostrada com gráficos de linhas. **III (incorreta):** gráficos 3D dificultam a leitura exata e distorcem proporções; são desaconselhados. **IV (correta):** a cor deve ter propósito (destaque, categoria) e não ser o único meio de transmitir informação, por razões de acessibilidade (daltonismo).

- **A)** Incorreta. Inclui a III (falsa) e omite II e IV, que são verdadeiras.
- **B)** Incorreta. Inclui a III (falsa) e omite I e IV.
- **C)** Correta. I, II e IV são verdadeiras; a III é falsa.
- **D)** Incorreta. Inclui a III (falsa) e omite a I (verdadeira).
- **E)** Incorreta. As afirmações I e II são verdadeiras, mas a IV também é, e foi omitida.

**Revisão rápida:** Gráfico por objetivo: comparar categorias (barras), evolução (linhas), composição (empilhadas/poucas fatias), relação (dispersão). Evitar distorções, 3D e excesso de cor.

## 8. AUT-000056 — Relatórios e dashboards: tipos de dashboard

*Questão autoral — estilo Cesgranrio.* · item 6.6 · Fácil · gabarito **D**

O **dashboard operacional** é voltado ao **monitoramento em tempo (quase) real** e à ação imediata, com visão de filas, alertas e indicadores de desempenho corrente. O **estratégico** resume indicadores de alto nível e metas; o **analítico (tático)** explora tendências e causas; o **relatório** é voltado a documentar e detalhar, em geral de forma periódica.

- **A)** Incorreta. Relatório paginado é voltado a documentar e detalhar (prestação de contas, auditoria), e não ao monitoramento em tempo quase real.
- **B)** Incorreta. O estratégico apresenta indicadores de alto nível e metas, em geral com menor frequência de atualização.
- **C)** Incorreta. O analítico explora tendências e causas, com dados históricos e recursos de detalhamento, e não o acompanhamento imediato.
- **D)** Correta. Tela única, tempo quase real e ação imediata: dashboard operacional.
- **E)** Incorreta. Relatório de conformidade registra evidências formais; não é um painel de monitoramento.

**Revisão rápida:** Dashboard: monitoramento rápido em uma tela. Operacional (tempo real), analítico (exploração), estratégico (metas).

## 9. AUT-000057 — Interoperabilidade entre navegadores: detecção de recursos e melhoria progressiva

*Questão autoral — estilo Cesgranrio.* · item 6.7 · Média · gabarito **A**

A recomendação é usar **detecção de recursos** (*feature detection*), que verifica se o recurso existe, e oferecer uma **alternativa** quando ele não existe (**melhoria progressiva**: uma base funcional para todos, com acréscimos em navegadores capazes). A detecção do navegador pelo *user-agent* é frágil e desaconselhada. O objetivo é **experiência e funcionalidade equivalentes**, não aparência idêntica.

- **A)** Correta. Detecção do recurso e alternativa funcional, com melhoria progressiva.
- **B)** Incorreta. A detecção do navegador pelo user-agent é frágil e contraria a meta de a funcionalidade ser acessível a todos; bloquear usuários vai contra o objetivo declarado.
- **C)** Incorreta. Impor um único navegador e versão aos clientes é impraticável e não é uma boa prática de interoperabilidade.
- **D)** Incorreta. Recursos proprietários reduzem a interoperabilidade; a boa prática é seguir os padrões web.
- **E)** Incorreta. Há diferenças entre navegadores (motores de renderização, suporte parcial a padrões); o esforço é garantir equivalência de funcionalidade, e não aparência idêntica.

**Revisão rápida:** Compatibilidade: padrões web, HTML semântico, detecção de recursos, melhoria progressiva, polyfills, matriz de testes.

## 10. AUT-000058 — MVP e prototipação: distinção entre MVP e protótipo

*Questão autoral — estilo Cesgranrio.* · item 6.8 · Difícil · gabarito **C**

O **MVP** é a **versão mínima utilizável**, usada por **usuários reais**, para **aprender** com métricas reais (construir–medir–aprender: perseverar, pivotar ou encerrar). O **protótipo** é um modelo para **explorar e testar** ideias antes da construção, **sem** funcionamento real do sistema; o **protótipo interativo de alta fidelidade** tem aparência e comportamento próximos aos do produto final (telas navegáveis). Equipe 1: MVP; equipe 2: protótipo interativo de alta fidelidade.

- **A)** Incorreta. Inverte os conceitos: a versão mínima funcional usada por clientes reais é um MVP; as telas navegáveis sem sistema real são um protótipo.
- **B)** Incorreta. A equipe 1 usa um produto funcional com clientes reais (MVP), e não um wireframe; e as telas da equipe 2 têm aparência próxima à final (alta fidelidade), não baixa.
- **C)** Correta. Equipe 1: MVP. Equipe 2: protótipo interativo de alta fidelidade.
- **D)** Incorreta. As telas da equipe 2 são navegáveis (interativas) e próximas ao produto final; um *mockup* estático de baixa fidelidade não se enquadra.
- **E)** Incorreta. A equipe 1 não entrega o produto final, mas a versão mínima para aprender; e a equipe 2 não faz um MVP, pois o sistema não funciona de fato.

**Revisão rápida:** MVP: versão mínima funcional para validar hipóteses com usuários reais. Protótipo: modelo (papel, wireframe, mockup, interativo) para explorar e testar; alta fidelidade = realista.

## 11. OFI-000031 — MVP: Mínimo Produto Viável

*Questão oficial — Fundação Cesgranrio, Transpetro PSP/Terra 002/2023, Prova 6, questão 58.* · item 6.8 · Média · gabarito **A**

O **MVP** é a versão mais enxuta que permite **aprender com usuários reais** (ciclo construir–medir–aprender), validando hipóteses e orientando o negócio com o mínimo de esforço.

- **A)** Correta. Define o MVP corretamente: versão simples para validar ideia e coletar dados.
- **B)** Incorreta. O MVP também é adequado a empresas estabelecidas, que testam novas ideias.
- **C)** Incorreta. MVP não é a V1.0 nem prioriza manutenibilidade; é instrumento de aprendizagem.
- **D)** Incorreta. Não precisa usar as mesmas tecnologias do produto final (pode ser até manual ou simulado).
- **E)** Incorreta. O MVP é o meio de validar hipóteses, e não resultado de uma validação anterior.

**Revisão rápida:** MVP: mínimo para validar hipóteses com usuários reais.

## 12. AUT-000059 — Design thinking: etapas do processo

*Questão autoral — estilo Cesgranrio.* · item 6.10 · Fácil · gabarito **E**

As cinco etapas do d.school são **empatizar, definir, idear, prototipar e testar**. A formulação do problema é a etapa **definir**; a seguinte é **idear**, em que se geram muitas ideias (*brainstorming*, *brainwriting*). As etapas **não são lineares**: o processo é iterativo e pode voltar a etapas anteriores.

- **A)** Incorreta. Empatizar é a primeira etapa, anterior à definição do problema; a equipe só volta a ela se precisar entender melhor o usuário.
- **B)** Incorreta. Prototipar ocorre depois da ideação; antes de prototipar é preciso gerar e escolher ideias.
- **C)** Incorreta. Testar é a última etapa e exige um protótipo ou uma solução a validar.
- **D)** Incorreta. Definir é a etapa que acabou de ser concluída (a formulação do problema).
- **E)** Correta. Após definir o problema, a etapa seguinte é idear.

**Revisão rápida:** Design thinking (d.school): empatizar, definir, idear, prototipar, testar. Iterativo e centrado nas pessoas.

## 13. OFI-000030 — Design Thinking: mapa de empatia

*Questão oficial — Fundação Cesgranrio, Transpetro PSP/Terra 002/2023, Prova 6, questão 34.* · item 6.10 · Fácil · gabarito **D**

O **mapa de empatia** organiza o que o usuário **pensa e sente, ouve, vê, fala e faz**, além de **dores e ganhos**. Dados demográficos (idade, nome, formação) são da **persona**.

- **A)** Incorreta. Mistura dados demográficos e itens sem relação com o mapa.
- **B)** Incorreta. Tecnologias preferidas e formação não são quadrantes do mapa.
- **C)** Incorreta. Dados demográficos e hobbies são de persona.
- **D)** Correta. Reúne os quadrantes do mapa de empatia.
- **E)** Incorreta. Dados demográficos e biográficos não compõem o mapa.

**Revisão rápida:** Mapa: pensa e sente, ouve, vê, fala e faz.

## 14. AUT-000060 — Análise de personas: persona, perfil e papel

*Questão autoral — estilo Cesgranrio.* · item 6.11 · Média · gabarito **B**

**Persona** é um **arquétipo individualizado, baseado em pesquisa**, que representa um grupo de usuários, com nome, contexto, objetivos e dores. O **perfil de usuário** é uma descrição **agregada** das características do grupo, sem narrativa individual; o **papel** é a função desempenhada em relação ao sistema (ligada a perfis de acesso); a **parte interessada** é qualquer pessoa ou grupo afetado; a **proto-persona** nasce de **hipóteses**, sem pesquisa.

- **A)** Incorreta. O perfil de usuário é agregado e não narrativo; o artefato do enunciado tem nome, história, objetivos e dores de um indivíduo-arquétipo.
- **B)** Correta. Arquétipo individualizado, baseado em entrevistas, observação e dados, representando um grupo: persona.
- **C)** Incorreta. Papel de acesso trata de permissões; o artefato descrito trata de objetivos, dores e contexto de uso.
- **D)** Incorreta. Parte interessada é um conceito mais amplo (inclui quem não usa o sistema); não descreve um arquétipo de usuário.
- **E)** Incorreta. A proto-persona parte de hipóteses, sem pesquisa; aqui, o arquétipo foi construído a partir de entrevistas, observação e dados de uso.

**Revisão rápida:** Persona: arquétipo baseado em pesquisa. Perfil: agregado. Papel: função ligada a acesso. Stakeholder: afetado ou interessado.

## 15. AUT-000109 — Personas em projeto centrado no usuário

*Questão autoral — estilo Cesgranrio.* · item 6.11 · Média · gabarito **D**

**Persona** é um **arquétipo fictício** construído a partir de **dados de pesquisa** (entrevistas, observação, analytics), que representa um grupo de usuários com objetivos, comportamentos, necessidades, dores e contexto semelhantes. Ela **ajuda a empatizar e a decidir**, mas não substitui a pesquisa.

- **A)** Incorreta. Persona é fictícia; usar dados de pessoas reais identificadas fere a privacidade e a própria técnica.
- **B)** Incorreta. Persona é produto da pesquisa; não a dispensa.
- **C)** Incorreta. Não é média estatística: representa um arquétipo com narrativa e objetivos.
- **D)** Correta. Define corretamente a persona.
- **E)** Incorreta. Requisitos funcionais são outro artefato; a persona alimenta, mas não é a lista de requisitos.

**Revisão rápida:** Persona: arquétipo fictício baseado em pesquisa.
