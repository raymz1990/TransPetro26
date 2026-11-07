# Diagnóstico inicial — 20 questões

**Status:** questoes_validadas · **Tempo:** 77 min · **Questões:** 20

**Critério de distribuição:** 2 questões por módulo e uma a mais em M1 e M9 (módulos com mais itens). Não gera nota oficial; serve para direcionar a revisão.

**Observações:** Somente questões validadas, fáceis ou médias, para mapear lacunas por módulo antes de iniciar a rotina de estudos.

Composição: tipo {'autoral': 20} · status {'validada': 20} · dificuldade {'facil': 9, 'media': 11}

## 1. AUT-000001 — Modelagem de dados: níveis conceitual, lógico e físico

*Questão autoral — estilo Cesgranrio.* · item 1.1 · Fácil · gabarito **C**

O enunciado descreve entidades, a cardinalidade dos relacionamentos (1 equipamento : N ordens) e a ausência de qualquer decisão tecnológica. Isso é o que caracteriza o **modelo conceitual**: visão do negócio, independente de SGBD e de paradigma de armazenamento. Quando o modelo passa a ter tabelas, chaves e normalização (relacional), tem-se o **lógico**; quando incorpora tipos, índices, particionamento e demais características do SGBD, tem-se o **físico**.

- **A)** Incorreta. Falar em "tabelas que serão criadas" é característica do modelo lógico/físico; no conceitual há entidades, não tabelas. O físico depende do SGBD, que aqui não foi definido.
- **B)** Incorreta. O modelo lógico já adota um paradigma (por exemplo, o relacional), com tabelas, atributos, chaves primárias e estrangeiras. O enunciado só descreve entidades e relacionamentos do negócio.
- **C)** Correta. Entidades e relacionamentos com cardinalidade, sem decisões de tecnologia: modelo conceitual.
- **D)** Incorreta. O modelo dimensional (fatos e dimensões) é uma abordagem para análise em data warehouse, não é o nível de abstração em questão; nada no enunciado trata de medidas ou de análise.
- **E)** Incorreta. Tipos de dados e índices do SGBD pertencem ao modelo físico; o enunciado informa justamente que nada foi decidido a esse respeito.

**Revisão rápida:** Conceitual = negócio (entidades e relacionamentos), sem tecnologia. Lógico = estrutura de um paradigma (tabelas, chaves). Físico = implementação no SGBD (tipos, índices, partições).

## 2. AUT-000002 — Normalização: dependência parcial e 2FN

*Questão autoral — estilo Cesgranrio.* · item 1.4 · Média · gabarito **E**

1) **1FN:** os atributos são atômicos e há chave definida → a relação está em 1FN. 2) **2FN:** exige que todo atributo não primo dependa da **chave inteira**. Aqui, nome_produto depende só de id_produto (parte da chave): há **dependência parcial**, logo a relação **não está em 2FN**. 3) **Correção:** extrair o atributo e seu determinante para uma nova relação, PRODUTO(id_produto, nome_produto), mantendo id_produto em ITEM_PEDIDO como chave estrangeira. Quantidade e preco_negociado dependem da chave completa e permanecem.

- **A)** Incorreta. A relação não está em 2FN (há dependência parcial), de modo que nem se chega à análise da 3FN. Além disso, quantidade depende diretamente da chave composta, não de forma transitiva.
- **B)** Incorreta. Atomicidade garante apenas a 1FN. Para estar em 3FN a relação precisaria estar em 2FN, o que não ocorre por causa de nome_produto.
- **C)** Incorreta. Chave composta não impede a 1FN; o que a violaria seriam atributos multivalorados ou grupos repetidos, que o enunciado exclui (atributos atômicos).
- **D)** Incorreta no fundamento. Embora a relação não esteja em 2FN, o motivo é nome_produto; preco_negociado depende da chave composta completa (o preço é negociado por produto em cada pedido). A relação PEDIDO proposta não resolve a dependência parcial.
- **E)** Correta. Identifica a 1FN, a violação da 2FN pela dependência parcial id_produto → nome_produto e a decomposição adequada.

**Revisão rápida:** 1FN = atômico. 2FN = sem dependência parcial (atributo depende da chave inteira). 3FN = sem dependência transitiva. Corrige-se decompondo e mantendo a chave estrangeira.

## 3. AUT-000003 — Integridade referencial: ações ON DELETE e ON UPDATE

*Questão autoral — estilo Cesgranrio.* · item 1.5 · Média · gabarito **B**

**Comando (1):** a regra ON UPDATE CASCADE propaga a alteração da chave primária do departamento aos empregados que o referenciam: Ana e Bruno passam a ter id_depto = 5. **Comando (2):** a regra ON DELETE RESTRICT rejeita a exclusão de um registro pai que ainda tem filhos (Ana e Bruno referenciam o departamento 5). **Comando (3):** inserir um empregado que referencia um departamento inexistente (7) viola a chave estrangeira e é rejeitado. Estado final: empregados (10, Ana, 5), (11, Bruno, 5), (12, Carla, 2); departamentos (2, Logística) e (5, Manutenção).

- **A)** Incorreta. O comando (1) não é rejeitado, porque a ação ON UPDATE é CASCADE (e não RESTRICT). A exclusão do comando (2) também não ocorre, porque ON DELETE é RESTRICT, e não CASCADE.
- **B)** Correta. UPDATE propagado, DELETE barrado pelo RESTRICT e INSERT barrado por referenciar pai inexistente.
- **C)** Incorreta. A integridade referencial impede registros órfãos: com ON UPDATE CASCADE, os filhos acompanham a nova chave do pai; o SGBD não "mantém" valores órfãos.
- **D)** Incorreta. Há a troca das ações: exclusão em cascata seria ON DELETE CASCADE. Com RESTRICT, a exclusão do pai que tem filhos é recusada.
- **E)** Incorreta. Deixar nulo o id_depto dos filhos seria ON DELETE SET NULL (não é o caso), e o SGBD recusa o INSERT de um valor que não existe na tabela referenciada; a integridade referencial não admite "aviso" nesse caso.

**Revisão rápida:** FK impede órfãos. ON UPDATE CASCADE propaga a nova chave; ON DELETE RESTRICT barra a exclusão de pai com filhos; INSERT com FK inexistente é rejeitado.

## 4. AUT-000011 — Scrum: responsabilidades e cancelamento da Sprint

*Questão autoral — estilo Cesgranrio.* · item 2.1 · Fácil · gabarito **B**

O Scrum Guide atribui **somente ao Product Owner** a autoridade para cancelar uma Sprint, tipicamente quando a Meta da Sprint se torna obsoleta. O PO é o responsável por maximizar o valor do produto e responde pelas decisões sobre o Product Backlog e a Meta do Produto. Quando a Sprint é cancelada, os itens concluídos e utilizáveis são revisados, e os demais retornam ao Product Backlog.

- **A)** Incorreta. O Scrum Master estabelece o Scrum, orienta e remove impedimentos, mas não decide cancelar a Sprint; esse poder não lhe pertence.
- **B)** Correta. Apenas o Product Owner pode cancelar a Sprint, por exemplo, quando a Meta da Sprint se torna obsoleta.
- **C)** Incorreta. Os Desenvolvedores criam o plano da Sprint e adaptam o trabalho, mas não têm autoridade para cancelá-la.
- **D)** Incorreta. As partes interessadas podem influenciar o PO, mas a decisão de cancelar a Sprint cabe ao Product Owner, não a elas.
- **E)** Incorreta. O Scrum não prevê votação do time para cancelar a Sprint; a autoridade é do Product Owner, e não coletiva.

**Revisão rápida:** Somente o PO cancela a Sprint (ex.: Meta obsoleta). SM: estabelece o Scrum. Desenvolvedores: plano e Incremento.

## 5. AUT-000014 — Kanban: limite de WIP e Lei de Little

*Questão autoral — estilo Cesgranrio.* · item 2.1 · Média · gabarito **E**

Pela Lei de Little, **tempo de ciclo = WIP ÷ vazão**. Com 12 itens e vazão de 4 itens/semana, o tempo de ciclo atual é 12 ÷ 4 = 3 semanas. Para chegar a 2 semanas com a mesma vazão: WIP = tempo de ciclo × vazão = 2 × 4 = **8 itens**.

- **A)** Incorreta. 4 itens corresponderiam a um tempo de ciclo de 1 semana (4 ÷ 4); é o valor da vazão, confundido com o WIP.
- **B)** Incorreta. 6 itens resultariam em 1,5 semana (6 ÷ 4); o valor pode vir de dividir o WIP atual por 2.
- **C)** Incorreta. É o WIP atual, que resulta em 3 semanas de tempo de ciclo, e não em 2.
- **D)** Incorreta. 2 itens resultariam em 0,5 semana; é o valor do tempo de ciclo-alvo, confundido com o WIP.
- **E)** Correta. WIP = 2 semanas × 4 itens/semana = 8 itens.

**Revisão rápida:** Lei de Little: CT = WIP ÷ TP. WIP-alvo = CT-alvo × TP.

## 6. AUT-000021 — Grupo de Iniciação

*Questão autoral — estilo Cesgranrio.* · item 3 · Fácil · gabarito **B**

O grupo de **Iniciação** reúne **dois** processos: **Desenvolver o termo de abertura do projeto** (Integração), que autoriza formalmente o projeto, e **Identificar as partes interessadas** (Partes interessadas), cuja saída é o registro das partes interessadas. Os demais processos citados pertencem ao Planejamento ou à Execução.

- **A)** Incorreta. Planejar o engajamento das partes interessadas e Coletar os requisitos são processos do grupo de Planejamento.
- **B)** Correta. Os dois processos do grupo de Iniciação.
- **C)** Incorreta. Desenvolver o plano de gerenciamento do projeto é do Planejamento; apenas Identificar as partes interessadas pertence à Iniciação.
- **D)** Incorreta. Planejar o gerenciamento do escopo é do Planejamento; apenas o termo de abertura pertence à Iniciação.
- **E)** Incorreta. Os dois processos citados pertencem ao grupo de Execução.

**Revisão rápida:** Iniciação: Desenvolver o termo de abertura (4.1) e Identificar as partes interessadas (13.1).

## 7. AUT-000022 — Validar o escopo e grupo de Monitoramento e Controle

*Questão autoral — estilo Cesgranrio.* · item 3 · Média · gabarito **D**

**Validar o escopo** é o processo de **formalizar a aceitação das entregas** concluídas, e pertence ao grupo de **Monitoramento e Controle** (área de Escopo). **Controlar a qualidade** verifica se as entregas atendem aos requisitos de qualidade (correção) e geralmente antecede a validação; também é do Monitoramento e Controle. O grupo de Execução realiza o trabalho e gera as entregas.

- **A)** Incorreta. Controlar a qualidade é a verificação de que as entregas atendem aos requisitos de qualidade, e não a aceitação do cliente; além disso, não pertence ao grupo de Execução (o de Execução é Gerenciar a qualidade).
- **B)** Incorreta quanto ao grupo. O processo está correto (Validar o escopo), mas ele pertence ao Monitoramento e Controle, e não à Execução.
- **C)** Incorreta. Controlar o escopo monitora o escopo e gerencia mudanças em relação à linha de base; pertence ao Monitoramento e Controle, e não ao Planejamento.
- **D)** Correta. Aceitação formal das entregas: Validar o escopo, no grupo de Monitoramento e Controle.
- **E)** Incorreta. Controlar a qualidade não é a aceitação formal e não pertence ao grupo de Encerramento.

**Revisão rápida:** Validar o escopo: aceitação formal das entregas (M&C, área Escopo). Controlar a qualidade: verifica a conformidade com requisitos de qualidade (M&C).

## 8. AUT-000031 — LGPD: agentes de tratamento e encarregado

*Questão autoral — estilo Cesgranrio.* · item 4.6 · Fácil · gabarito **B**

Pela LGPD (art. 5º), o **controlador** é quem toma as **decisões** sobre o tratamento (finalidades e meios); o **operador** realiza o tratamento **em nome do controlador**; o **encarregado** é a pessoa indicada para atuar como **canal de comunicação** entre o controlador, os titulares e a ANPD. O **titular** é a pessoa natural a quem os dados se referem. Controlador e operador são os agentes de tratamento.

- **A)** Incorreta. Inverte os papéis: quem decide finalidades e meios é o controlador (a empresa de energia); quem trata segundo as instruções é o operador (a empresa de nuvem).
- **B)** Correta. Empresa de energia = controlador; empresa de nuvem = operador; pessoa designada como canal de comunicação = encarregado.
- **C)** Incorreta. A empresa de nuvem, que trata os dados em nome do controlador, é operadora, e não encarregada; o encarregado é a pessoa designada como canal de comunicação.
- **D)** Incorreta. A empresa que decide sobre o tratamento é a controladora; o encarregado é a pessoa de contato, e não a empresa de energia.
- **E)** Incorreta. A pessoa designada como canal de comunicação é o encarregado; o titular é o cliente, a quem os dados se referem.

**Revisão rápida:** Controlador: decide finalidade e meios. Operador: trata por conta do controlador. Encarregado: canal com titulares e ANPD. Titular: a pessoa a quem os dados se referem.

## 9. AUT-000033 — LGPD: hipóteses de tratamento (bases legais)

*Questão autoral — estilo Cesgranrio.* · item 4.6 · Média · gabarito **A**

O art. 7º lista **dez hipóteses** para o tratamento de dados pessoais; o **consentimento é apenas uma delas**. O **cumprimento de obrigação legal ou regulatória pelo controlador** (inciso II) autoriza o tratamento sem consentimento: é o caso da conservação de dados por prazo imposto por norma setorial.

- **A)** Correta. Hipótese do art. 7º, II: cumprimento de obrigação legal ou regulatória pelo controlador.
- **B)** Incorreta. O consentimento é uma das hipóteses, e não a única. Há tratamento lícito sem consentimento, como o cumprimento de obrigação legal.
- **C)** Incorreta. O legítimo interesse é do controlador ou de terceiro (art. 7º, IX), e não do titular, e não prevalece sobre direitos e liberdades fundamentais do titular.
- **D)** Incorreta. A proteção da vida ou da incolumidade física (art. 7º, VII) é outra hipótese, para tutelar a vida do titular ou de terceiro, e não é exclusiva de instituições financeiras.
- **E)** Incorreta. A tutela da saúde (art. 7º, VIII) é hipótese restrita a profissionais, serviços de saúde ou autoridade sanitária, e não se aplica à conservação regulatória de dados bancários.

**Revisão rápida:** Art. 7º: 10 hipóteses (consentimento; obrigação legal; políticas públicas; pesquisa; contrato; direitos em processo; vida; saúde; legítimo interesse; crédito).

## 10. AUT-000043 — Ciclo de vida: modelo em V

*Questão autoral — estilo Cesgranrio.* · item 5.2 · Fácil · gabarito **A**

No modelo em V, cada fase da descida (desenvolvimento) corresponde a um nível de teste na subida: **requisitos ↔ teste de aceitação**; **especificação do sistema ↔ teste de sistema**; **projeto arquitetural ↔ teste de integração**; **projeto detalhado ↔ teste de unidade**. A vantagem é planejar os testes desde o início; a limitação é a rigidez do cascata.

- **A)** Correta. Requisitos ↔ teste de aceitação (validação com o usuário).
- **B)** Incorreta. O projeto arquitetural corresponde ao teste de integração.
- **C)** Incorreta. O projeto detalhado corresponde ao teste de unidade.
- **D)** Incorreta. A implementação (codificação) fica no vértice do V; não há nível de teste de aceitação associado a ela.
- **E)** Incorreta. A especificação do sistema corresponde ao teste de sistema.

**Revisão rápida:** Modelo em V: requisitos↔aceitação; especificação↔sistema; arquitetura↔integração; detalhado↔unidade.

## 11. AUT-000044 — Ciclo de vida: modelo em espiral

*Questão autoral — estilo Cesgranrio.* · item 5.2 · Média · gabarito **E**

O **modelo em espiral** (Boehm) é **orientado a riscos**: cada volta determina objetivos, alternativas e restrições, avalia alternativas e reduz riscos (protótipos, simulações), desenvolve e verifica o produto da volta e planeja a próxima, com a decisão de seguir baseada na análise de riscos. É adequado a projetos grandes, complexos e incertos.

- **A)** Incorreta. O cascata percorre as fases uma vez, em sequência, sem voltas e sem análise de riscos a cada ciclo; é pouco indicado para requisitos incertos.
- **B)** Incorreta. A prototipação foca em validar requisitos com protótipos; não estrutura voltas com análise formal de riscos e decisão de prosseguir.
- **C)** Incorreta. O modelo incremental entrega o produto em partes, mas não é, por definição, orientado à análise de riscos em cada ciclo.
- **D)** Incorreta. O modelo em V é sequencial e enfatiza a relação entre fases e testes; compartilha a rigidez do cascata.
- **E)** Correta. Voltas com objetivos, riscos, desenvolvimento e planejamento; decisão baseada em riscos.

**Revisão rápida:** Espiral (Boehm): voltas com objetivos/alternativas, avaliação de riscos, desenvolvimento/verificação e planejamento da próxima volta.

## 12. AUT-000051 — Acessibilidade: princípios do WCAG (POUR)

*Questão autoral — estilo Cesgranrio.* · item 6.1 · Média · gabarito **B**

O WCAG 2.2 se organiza em quatro princípios (**POUR**): **Perceptível** (a informação deve poder ser percebida: texto alternativo, legendas, contraste), **Operável** (componentes e navegação devem ser operáveis: uso por teclado, tempo suficiente, foco visível), **Compreensível** (informação e operação devem ser compreensíveis: linguagem clara, comportamento previsível, ajuda na entrada de dados e mensagens de erro) e **Robusto** (conteúdo interpretável por diversos agentes de usuário e tecnologias assistivas). I viola o Perceptível; II, o Operável; III, o Compreensível.

- **A)** Incorreta. Troca os princípios: a ausência de texto alternativo afeta a percepção (Perceptível), e não a compreensão.
- **B)** Correta. I: Perceptível; II: Operável; III: Compreensível.
- **C)** Incorreta. A falta de texto alternativo é um problema de percepção, e não de operação; e as mensagens de erro vagas não são um problema de robustez.
- **D)** Incorreta. O acesso apenas por mouse é um problema de operação (Operável), não de robustez técnica.
- **E)** Incorreta. A falta de texto alternativo é problema de percepção, e não de robustez; o acionamento apenas por mouse é de operabilidade.

**Revisão rápida:** WCAG: POUR; níveis A, AA, AAA. Mapeie cada problema ao princípio: percepção, operação, compreensão, robustez.

## 13. AUT-000052 — Histórias do usuário: critério INVEST

*Questão autoral — estilo Cesgranrio.* · item 6.2 · Fácil · gabarito **D**

O **INVEST** descreve boas histórias: **I**ndependentes, **N**egociáveis, **V**aliosas, **E**stimáveis, **S**mall (pequenas) e **T**estáveis. Histórias que só podem ser implementadas em ordem rígida e que impedem a priorização isolada **não são independentes**.

- **A)** Incorreta. Ser negociável significa que os detalhes são definidos na conversa, e não um contrato fechado; o problema descrito é a dependência.
- **B)** Incorreta. Ser valiosa significa entregar valor ao usuário ou ao negócio; o enunciado não questiona o valor das histórias.
- **C)** Incorreta. Ser estimável é a capacidade de a equipe estimar o esforço; o problema relatado é de dependência entre histórias.
- **D)** Correta. A dependência rígida e a impossibilidade de priorizar isoladamente violam a independência.
- **E)** Incorreta. Ser pequena é caber em uma iteração; o enunciado não trata do tamanho das histórias.

**Revisão rápida:** INVEST: independente, negociável, valiosa, estimável, pequena, testável.

## 14. AUT-000061 — Dado, informação, conhecimento e inteligência

*Questão autoral — estilo Cesgranrio.* · item 7.1 · Fácil · gabarito **B**

**Dado** é o registro bruto, sem contexto (II: "38,2"). **Informação** é o dado contextualizado e com significado (III: equipamento, valor, unidade e hora). **Conhecimento** é a informação interpretada e integrada à experiência, que permite compreender e agir (I: regra de que acima de 35 °C a bomba tende a falhar). **Inteligência** é o conhecimento aplicado para antecipar e decidir (IV: decisão estratégica orientada por padrões). Assim, I = conhecimento, II = dado, III = informação, IV = inteligência.

- **A)** Incorreta. Está na ordem hierárquica usual, mas as declarações foram apresentadas fora dessa ordem: I é conhecimento (regra interpretada), e não dado.
- **B)** Correta. I: conhecimento; II: dado; III: informação; IV: inteligência.
- **C)** Incorreta. I não é informação (é uma regra interpretada) e III não é dado (tem contexto).
- **D)** Incorreta. II é o dado bruto, e III é a informação; a alternativa os troca.
- **E)** Incorreta. I é conhecimento (e não dado), e III é informação (e não conhecimento).

**Revisão rápida:** Dado: bruto. Informação: contextualizado. Conhecimento: interpretado e aplicável. Inteligência: aplicado para antecipar e decidir.

## 15. AUT-000062 — Business intelligence: tipos de análise

*Questão autoral — estilo Cesgranrio.* · item 7.2 · Média · gabarito **D**

Os tipos de análise usualmente citados são **descritiva** (o que aconteceu?), **diagnóstica** (por que aconteceu?), **preditiva** (o que pode acontecer?) e **prescritiva** (o que fazer?). Comparar por dimensões e detalhar (*drill-down*) até localizar a causa da queda é **análise diagnóstica**.

- **A)** Incorreta. A descritiva resume o ocorrido (a queda de 15%); o gerente busca explicá-la.
- **B)** Incorreta. A preditiva projeta o futuro com modelos; o enunciado trata de explicar um fato passado.
- **C)** Incorreta. A prescritiva recomenda ações a partir de otimização ou simulação; a decisão sobre o que fazer ainda não foi tomada.
- **D)** Correta. Entender por que a queda ocorreu, por comparação e detalhamento: análise diagnóstica.
- **E)** Incorreta. O enunciado trata de dados de vendas organizados por dimensões, e não de mineração de textos e imagens.

**Revisão rápida:** Descritiva: o quê. Diagnóstica: por quê (drill-down). Preditiva: o que será. Prescritiva: o que fazer.

## 16. AUT-000071 — Negação de proposição condicional

*Questão autoral — estilo Cesgranrio.* · item 8.1 · Fácil · gabarito **B**

Seja p: "o alarme soa" e q: "o operador interrompe a bomba". A proposição é p → q. Um condicional só é falso quando o antecedente é verdadeiro e o consequente, falso. Portanto, **¬(p → q) ≡ p ∧ ¬q**: "o alarme soa **e** o operador **não** interrompe a bomba". A negação de um condicional **não** é outro condicional.

- **A)** Incorreta. É a **inversa** (¬p → ¬q), que não é equivalente ao condicional original nem à sua negação.
- **B)** Correta. ¬(p → q) ≡ p ∧ ¬q.
- **C)** Incorreta. É a **contrapositiva** (¬q → ¬p), equivalente ao condicional original, e não à sua negação.
- **D)** Incorreta. Corresponde a ¬p ∧ q, que não é equivalente a ¬(p → q); a negação mantém o antecedente verdadeiro.
- **E)** Incorreta. Corresponde a ¬p ∨ ¬q, que é a negação de p ∧ q (De Morgan), e não a de p → q.

**Revisão rápida:** ¬(p → q) ≡ p ∧ ¬q. Contrapositiva ≡ condicional. Conversa e inversa não são equivalentes ao condicional.

## 17. AUT-000072 — Sistemas dedutivos: correção e completude

*Questão autoral — estilo Cesgranrio.* · item 8.6 · Média · gabarito **D**

**Correção:** tudo o que o sistema **deriva** (⊢) é **consequência semântica** (⊨); no caso das fórmulas deriváveis sem premissas, são tautologias. **Completude:** toda **consequência semântica** é **derivável**; toda tautologia é um teorema. A **consistência** (não derivar uma fórmula e sua negação) e a **decidibilidade** (existência de um algoritmo) são propriedades distintas.

- **A)** Incorreta. Inverte as definições: tudo o que é derivado ser tautologia é correção; derivar toda tautologia é completude.
- **B)** Incorreta. São propriedades distintas (derivar só o válido × derivar todo o válido); evitar contradições é a consistência.
- **C)** Incorreta. Nunca derivar uma fórmula e sua negação é consistência; a completude é sobre derivar toda consequência semântica.
- **D)** Correta. Definições de correção e completude.
- **E)** Incorreta. A existência de um algoritmo de decisão é a decidibilidade, e não a correção.

**Revisão rápida:** Correção: ⊢ ⇒ ⊨. Completude: ⊨ ⇒ ⊢. Sentencial clássica: correta, completa e decidível. LPO: correta, completa e indecidível.

## 18. AUT-000081 — Ataques: injeção de SQL e consulta parametrizada

*Questão autoral — estilo Cesgranrio.* · item 9.4 · Média · gabarito **B**

O código **concatena** a entrada do usuário ao texto SQL; com o valor `' OR '1'='1`, a consulta vira `... WHERE login = '' OR '1'='1'`, que é sempre verdadeira e retorna todas as linhas: **SQL Injection**. A prevenção principal (OWASP) são as **consultas parametrizadas** (*prepared statements*), em que o valor é enviado separado do comando e tratado apenas como dado (`cursor.execute("... WHERE login = ?", (nome,))`), complementadas por validação por lista permitida e menor privilégio.

- **A)** Incorreta. Remover palavras isoladas é uma lista de bloqueio facilmente contornada (por exemplo, com `or` em minúsculas ou outras construções).
- **B)** Correta. A consulta parametrizada separa comando e dado, eliminando a injeção.
- **C)** Incorreta. O valor malicioso do exemplo tem apenas 11 caracteres; limitar o tamanho não impede a injeção.
- **D)** Incorreta. O HTTPS protege o canal contra interceptação, mas o servidor continua montando a consulta com a entrada recebida; a injeção persiste.
- **E)** Incorreta. Mais privilégios ampliam o dano de uma injeção; a boa prática é o menor privilégio.

**Revisão rápida:** SQLi: dado interpretado como comando. Defesa: consultas parametrizadas, validação por lista permitida, menor privilégio.

## 19. AUT-000082 — Operação de segurança: backup completo e diferencial

*Questão autoral — estilo Cesgranrio.* · item 9.2 · Média · gabarito **D**

O backup **diferencial** copia tudo o que mudou **desde o último backup completo**; portanto, o diferencial de quarta-feira contém todas as alterações de segunda a quarta. A restauração exige o **completo (domingo)** e **apenas o último diferencial (quarta-feira)**: **2 conjuntos**. (Com backups **incrementais**, seriam necessários o completo e os incrementais de segunda, terça e quarta: 4 conjuntos.)

- **A)** Incorreta. Só o completo restauraria o estado de domingo, perdendo as alterações de segunda a quarta.
- **B)** Incorreta. Falta o diferencial de quarta-feira, o mais recente, e o de segunda é desnecessário (o de quarta já o contém).
- **C)** Incorreta. Descreve a restauração com backups incrementais; com diferenciais, basta o último.
- **D)** Correta. Completo de domingo + diferencial de quarta-feira.
- **E)** Incorreta. O diferencial de quinta-feira não existe (a falha ocorreu antes do backup do dia) e os anteriores não são necessários.

**Revisão rápida:** Restauração: diferencial = 2 conjuntos; incremental = completo + todos os incrementais. Regra 3-2-1; testar restaurações.

## 20. AUT-000083 — Softwares maliciosos: classificação pelo comportamento

*Questão autoral — estilo Cesgranrio.* · item 9.3 · Fácil · gabarito **A**

**Ransomware** sequestra dados (criptografa ou bloqueia) e exige resgate (I). **Worm** propaga-se sozinho pela rede, sem hospedeiro e sem ação do usuário (II). **Cavalo de troia (*trojan*)** disfarça-se de programa legítimo e executa ação maliciosa, como abrir um acesso remoto (*backdoor*) (III).

- **A)** Correta. I: ransomware; II: worm; III: trojan.
- **B)** Incorreta. A criptografia com pedido de resgate é ransomware (I), e a propagação autônoma pela rede é worm (II); a alternativa os troca.
- **C)** Incorreta. Vírus depende de hospedeiro e de execução; o comportamento II é de worm, e o III, de trojan.
- **D)** Incorreta. Spyware coleta informações; o comportamento I é de ransomware. Rootkit oculta presença do invasor, e não se apresenta como utilitário legítimo.
- **E)** Incorreta. O comportamento I é de ransomware, e não de trojan; o II é de worm, e não de vírus, que depende de hospedeiro.

**Revisão rápida:** Vírus: hospedeiro. Worm: autônomo pela rede. Trojan: disfarce. Ransomware: resgate. Spyware: coleta. Rootkit: oculta o invasor.
