# Simulado do módulo 5 — Engenharia de software

**Status:** rascunho · **Tempo:** 58 min · **Questões:** 15

**Critério de distribuição:** Até 15 questões por módulo, priorizando itens ainda não usados e mistura de dificuldade 30/50/20% (critério pedagógico).

**Observações:** Mistura de questões oficiais e autorais do módulo; algumas ainda `em_revisao`.

Composição: tipo {'autoral': 4, 'oficial': 11} · status {'validada': 4, 'em_revisao': 11} · dificuldade {'media': 9, 'facil': 3, 'dificil': 3}

## 1. AUT-000044 — Ciclo de vida: modelo em espiral

*Questão autoral — estilo Cesgranrio.* · item 5.2 · Média · gabarito **E**

O **modelo em espiral** (Boehm) é **orientado a riscos**: cada volta determina objetivos, alternativas e restrições, avalia alternativas e reduz riscos (protótipos, simulações), desenvolve e verifica o produto da volta e planeja a próxima, com a decisão de seguir baseada na análise de riscos. É adequado a projetos grandes, complexos e incertos.

- **A)** Incorreta. O cascata percorre as fases uma vez, em sequência, sem voltas e sem análise de riscos a cada ciclo; é pouco indicado para requisitos incertos.
- **B)** Incorreta. A prototipação foca em validar requisitos com protótipos; não estrutura voltas com análise formal de riscos e decisão de prosseguir.
- **C)** Incorreta. O modelo incremental entrega o produto em partes, mas não é, por definição, orientado à análise de riscos em cada ciclo.
- **D)** Incorreta. O modelo em V é sequencial e enfatiza a relação entre fases e testes; compartilha a rigidez do cascata.
- **E)** Correta. Voltas com objetivos, riscos, desenvolvimento e planejamento; decisão baseada em riscos.

**Revisão rápida:** Espiral (Boehm): voltas com objetivos/alternativas, avaliação de riscos, desenvolvimento/verificação e planejamento da próxima volta.

## 2. AUT-000043 — Ciclo de vida: modelo em V

*Questão autoral — estilo Cesgranrio.* · item 5.2 · Fácil · gabarito **A**

No modelo em V, cada fase da descida (desenvolvimento) corresponde a um nível de teste na subida: **requisitos ↔ teste de aceitação**; **especificação do sistema ↔ teste de sistema**; **projeto arquitetural ↔ teste de integração**; **projeto detalhado ↔ teste de unidade**. A vantagem é planejar os testes desde o início; a limitação é a rigidez do cascata.

- **A)** Correta. Requisitos ↔ teste de aceitação (validação com o usuário).
- **B)** Incorreta. O projeto arquitetural corresponde ao teste de integração.
- **C)** Incorreta. O projeto detalhado corresponde ao teste de unidade.
- **D)** Incorreta. A implementação (codificação) fica no vértice do V; não há nível de teste de aceitação associado a ela.
- **E)** Incorreta. A especificação do sistema corresponde ao teste de sistema.

**Revisão rápida:** Modelo em V: requisitos↔aceitação; especificação↔sistema; arquitetura↔integração; detalhado↔unidade.

## 3. OFI-000049 — Processo Unificado: fase de elaboração

*Questão oficial — Fundação Cesgranrio, Transpetro PSP RH 2018.1, Prova 15, questão 23.* · item 5.2 · Média · gabarito **A**

Na **elaboração**, o foco é **reduzir os riscos principais** e **estabelecer a arquitetura executável** (baseline da arquitetura), além de detalhar a maioria dos requisitos. O **escopo** e o *business case* são estabelecidos na **concepção**.

- **A)** Correta. Definir (e validar) a arquitetura é objetivo central da elaboração.
- **B)** Incorreta. A estimativa global de custo e o business case são da concepção (refinados depois).
- **C)** Incorreta. Estabelecer o escopo é objetivo da concepção.
- **D)** Incorreta. Minimizar custos não é objetivo de fase.
- **E)** Incorreta. A conversão de bancos operacionais é atividade de transição.

**Revisão rápida:** Elaboração = arquitetura.

## 4. OFI-000025 — Ciclos de vida sequenciais

*Questão oficial — Fundação Cesgranrio, Transpetro PSP/Terra 002/2023, Prova 6, questão 25.* · item 5.2 · Fácil · gabarito **D**

**Cascata** e **modelo em V** são sequenciais (o V acrescenta a correspondência entre fases de desenvolvimento e de teste). Incremental, iterativo, espiral e ágil repetem ciclos.

- **A)** Incorreta. Incremental entrega partes sucessivas; não é estritamente sequencial.
- **B)** Incorreta. Iterativo e espiral repetem ciclos.
- **C)** Incorreta. Ágil e espiral são iterativos.
- **D)** Correta. Em V e em cascata são sequenciais.
- **E)** Incorreta. Incremental não é sequencial.

**Revisão rápida:** Sequencial = cascata e V.

## 5. OFI-000109 — Escolha do modelo de processo: incremental

*Questão oficial — Fundação Cesgranrio, Petrobras PSP RH 2017.2, Prova 3, questão 51.* · item 5.2 · Média · gabarito **B**

Requisitos ainda incertos, **primeira versão com as funcionalidades mais importantes** e **versões sucessivas mais completas**, com equipe pequena: **modelo incremental**. O **espiral** exige análise de riscos explícita em cada volta, o que o usuário rejeita; o **cascata** exige requisitos fechados.

- **A)** Incorreta. RAD pressupõe ciclos muito curtos, componentes reutilizáveis e equipes maiores, o que não é o caso.
- **B)** Correta. Entregas sucessivas, cada vez mais completas, com equipe pequena: incremental.
- **C)** Incorreta. Cascata exige requisitos definidos antes do desenvolvimento.
- **D)** Incorreta. Espiral depende de análise de riscos em cada iteração, que o usuário recusou.
- **E)** Incorreta. Desenvolvimento baseado em componentes depende de repositório de componentes reutilizáveis.

**Revisão rápida:** Incremental: entrega por partes, cada vez mais completa.

## 6. AUT-000045 — Paradigma orientado a objetos: herança e ligação dinâmica

*Questão autoral — estilo Cesgranrio.* · item 5.3 · Difícil · gabarito **C**

A ligação do método é **dinâmica**: a versão de `estado()` executada depende do **tipo real** do objeto, mesmo quando chamada dentro de `alarme()` herdado de `Maquina`. (1) `Maquina("M1")`: `alarme()` de Maquina chama `estado()` de Maquina → "ALARME: Máquina M1 em operação". (2) `Bomba("P1")`: `alarme()` é herdado de Maquina, mas `self.estado()` resolve para a versão sobrescrita em Bomba → "ALARME: Bomba P1 pressurizada". (3) `Compressor("C1")`: `alarme()` de Compressor chama `super().alarme()` (de Maquina, via Bomba, que não o redefine), em que `self.estado()` resolve para o `estado()` de Bomba (herdado por Compressor) e, depois, acrescenta " [compressor]".

- **A)** Incorreta. Supõe ligação estática: em `alarme()` de Maquina, `self.estado()` seria sempre a versão de Maquina. Em Python (e em OO em geral) a escolha depende do tipo real do objeto.
- **B)** Incorreta. Acerta a segunda linha, mas, na terceira, ignora que Compressor herda `estado()` de Bomba (sobrescrito) e que `self.estado()` resolve para a versão de Bomba.
- **C)** Correta. Ligação dinâmica nas três linhas, com `super()` na terceira.
- **D)** Incorreta. Omite o acréscimo " [compressor]" feito pelo método sobrescrito em Compressor, que chama `super().alarme()` e concatena o texto.
- **E)** Incorreta. Bomba herda `alarme()` de Maquina; não há erro de execução. O que falta em Bomba é só a redefinição, que é opcional.

**Revisão rápida:** Chamada a `self.metodo()` é resolvida pelo tipo real. `super().metodo()` executa a versão da superclasse, com o mesmo objeto.

## 7. AUT-000046 — UML: diagrama de casos de uso (include e extend)

*Questão autoral — estilo Cesgranrio.* · item 5.3 · Média · gabarito **D**

Na **inclusão (*include*)**, um caso de uso **sempre** usa o comportamento de outro (reuso): "Registrar chamado" sempre inclui "Autenticar usuário". Na **extensão (*extend*)**, um caso de uso **opcionalmente** amplia outro, em condições específicas: "Anexar arquivo" estende "Registrar chamado". A **generalização** representa especialização de atores ou de casos de uso, e a **associação** liga atores a casos de uso.

- **A)** Incorreta. Inverte as relações: o comportamento obrigatório é include; o opcional é extend.
- **B)** Incorreta. Generalização é especialização, e associação liga ator a caso de uso; nenhuma representa uso obrigatório ou opcional de outro caso de uso.
- **C)** Incorreta. A primeira relação está correta (include), mas o anexo opcional é extend, e não generalização.
- **D)** Correta. Autenticação obrigatória: include; anexo opcional: extend.
- **E)** Incorreta. Entre casos de uso não se usa associação (que liga ator e caso de uso), e o anexo opcional não é uma inclusão.

**Revisão rápida:** Include: uso obrigatório de outro caso de uso. Extend: ampliação opcional. Generalização: especialização. Associação: ator–caso de uso.

## 8. OFI-000095 — Padrões de projeto: Mediator x Facade

*Questão oficial — Fundação Cesgranrio, BNDES, Edital 1/2024, Prova 3, questão 43.* · item 5.3 · Difícil · gabarito **D**

O **Mediator** centraliza a **comunicação entre objetos colegas**, que deixam de se referenciar explicitamente; a comunicação é **multidirecional** e cooperativa. O **Facade** oferece interface simplificada **unidirecional** para um subsistema, que não conhece o facade.

- **A)** Incorreta. Bridge separa abstração e implementação.
- **B)** Incorreta. Composite compõe objetos em árvores.
- **C)** Incorreta. Decorator acrescenta responsabilidades dinamicamente.
- **D)** Correta. Mediator: coordena a cooperação entre objetos sem referências explícitas, em protocolo multidirecional.
- **E)** Incorreta. Strategy encapsula algoritmos intercambiáveis.

**Revisão rápida:** Mediator: colegas falam com o mediador, não entre si.

## 9. OFI-000027 — Orientação a objetos: sobrecarga

*Questão oficial — Fundação Cesgranrio, Transpetro PSP/Terra 002/2023, Prova 6, questão 32.* · item 5.3 · Fácil · gabarito **D**

**Sobrecarga (*overload*)**: métodos de mesmo nome, mesma classe, assinaturas diferentes. **Sobrescrita (*override*)**: subclasse redefine método herdado com a mesma assinatura.

- **A)** Incorreta. Herança reaproveita atributos e métodos da superclasse.
- **B)** Incorreta. Interface define um contrato de métodos.
- **C)** Incorreta. Instanciação cria objetos a partir de uma classe.
- **D)** Correta. É a técnica descrita: mesmo nome, parâmetros diferentes, mesma classe.
- **E)** Incorreta. Sobrescrita redefine, na subclasse, método da superclasse com a mesma assinatura.

**Revisão rápida:** Overload ≠ override.

## 10. OFI-000053 — Orientação a objetos: polimorfismo

*Questão oficial — Fundação Cesgranrio, Transpetro PSP RH 2018.1, Prova 15, questão 29.* · item 5.3 · Média · gabarito **E**

**Polimorfismo** permite que operações distintas respondam à mesma mensagem (mesmo nome), cada classe com sua implementação; clientes dependem da interface, reduzindo o acoplamento.

- **A)** Incorreta. Encapsulamento oculta o estado interno.
- **B)** Incorreta. Especialização cria subclasses mais específicas.
- **C)** Incorreta. Herança reaproveita características da superclasse.
- **D)** Incorreta. Padrões de projeto não são propriedade da orientação a objetos.
- **E)** Correta. Operações diferentes com o mesmo nome: polimorfismo.

**Revisão rápida:** Polimorfismo: mesma operação, formas diferentes.

## 11. OFI-000066 — Padrão de projeto Proxy

*Questão oficial — Fundação Cesgranrio, Caixa Econômica Federal, Edital 1/2021/NM, Caderno de Tecnologia da Informação, questão 36.* · item 5.3 · Média · gabarito **C**

O **Proxy** oferece um **substituto** do objeto real, com a **mesma interface**, para controlar o acesso (instanciação preguiçosa, proteção, cache, acesso remoto), delegando as requisições ao objeto real.

- **A)** Incorreta. Facade oferece uma interface simplificada para um subsistema.
- **B)** Incorreta. Adapter converte uma interface em outra esperada pelo cliente.
- **C)** Correta. Substituto com mesma interface que controla o acesso: Proxy.
- **D)** Incorreta. Bridge separa abstração e implementação para variarem de forma independente.
- **E)** Incorreta. Composite trata objetos individuais e composições de forma uniforme (árvores).

**Revisão rápida:** Proxy: representante com a mesma interface.

## 12. OFI-000126 — Casos de uso, decomposição funcional e classes conceituais (asserção e razão)

*Questão oficial — Fundação Cesgranrio, Petroquímica Suape PSP nº 1/2012, Prova 6, questão 37.* · item 5.3 · Difícil · gabarito **E**

Segundo o gabarito, as duas são falsas: a **decomposição funcional** é característica do paradigma **estruturado**; casos de uso descrevem **interações ator-sistema** (visão externa), e não uma decomposição funcional. Já o **modelo de classes conceituais** representa conceitos do **domínio** (atributos e relacionamentos), sem **métodos** resultantes de decomposição funcional.

- **A)** Incorreta. A primeira é falsa; logo a segunda não pode justificá-la.
- **B)** Incorreta. A primeira é falsa.
- **C)** Incorreta. A segunda é falsa: classes conceituais não resultam de decomposição funcional.
- **D)** Incorreta. A primeira é falsa (casos de uso não são decomposição funcional).
- **E)** Correta. As duas afirmações são falsas.

**Revisão rápida:** Caso de uso: interação ator–sistema; classe conceitual: conceito do domínio.

## 13. OFI-000097 — Acoplamento de conteúdo

*Questão oficial — Fundação Cesgranrio, BNDES, Edital 1/2024, Prova 3, questão 45.* · item 5.3 · Média · gabarito **B**

No **acoplamento de conteúdo** um módulo **acessa ou modifica diretamente o conteúdo interno** (dados ou código) de outro. É o **tipo mais forte e indesejável** de acoplamento.

- **A)** Incorreta. Acoplamento de comunicação: módulos operam sobre os mesmos dados de entrada ou saída.
- **B)** Correta. Modificar diretamente os dados internos de outro componente: acoplamento de conteúdo.
- **C)** Incorreta. Acoplamento de controle: um módulo passa informação que controla a lógica de outro.
- **D)** Incorreta. Acoplamento externo: módulos compartilham um formato, protocolo ou dispositivo imposto externamente.
- **E)** Incorreta. "Funcional" refere-se à coesão funcional, característica desejável, e não ao tipo de acoplamento.

**Revisão rápida:** Conteúdo: um módulo mexe nos internos de outro.

## 14. OFI-000123 — UML 1.4 x UML 2.0: novos diagramas

*Questão oficial — Fundação Cesgranrio, Petrobras PSP-RH-1/2006, Caderno de Analista de Sistemas Pleno, questão 55.* · item 5.3 · Média · gabarito **A**

A UML 2.0 introduziu, entre os diagramas de **interação**, o de **Visão Geral da Interação** (que mescla atividades com interações) e o de **Tempo** (*timing*, que mostra mudanças de estado ao longo do tempo), além do de **Estrutura de Composição** e do de **Pacotes** como diagrama próprio.

- **A)** Correta. Descreve corretamente os dois novos diagramas de interação.
- **B)** Incorreta. Estereótipos, valores etiquetados e restrições já existiam na UML 1.x; não são novos mecanismos.
- **C)** Incorreta. A afirmação mistura a história de diagramas de estados e não descreve uma substituição de "diagrama de Máquina de Estados de Protocolo" da UML 1.4.
- **D)** Incorreta. O diagrama de Pacotes não foi substituído por uma visão combinada.
- **E)** Incorreta. O diagrama de Componentes continua existindo na UML 2.0; a Estrutura de Composição é um **acréscimo**.

**Revisão rápida:** UML 2.0 acrescentou Visão Geral da Interação e Tempo.

## 15. OFI-000124 — Projeto de software: encapsulamento, coesão e acoplamento

*Questão oficial — Fundação Cesgranrio, Petroquímica Suape PSP nº 1/2012, Prova 6, questão 34.* · item 5.3 · Média · gabarito **B**

Um bom projeto **maximiza a coesão** (partes com responsabilidade única e focada) e o **encapsulamento** (ocultação de detalhes internos) e **minimiza o acoplamento** (dependência entre partes). Entre as opções, só B apresenta o par correto na ordem pedida (maximizar encapsulamento, minimizar acoplamento).

- **A)** Incorreta. Minimizar a coesão é indesejável.
- **B)** Correta. Maximizar encapsulamento e minimizar acoplamento: projeto adequado.
- **C)** Incorreta. Maximizar acoplamento e minimizar coesão é o contrário do desejável.
- **D)** Incorreta. Maximizar acoplamento é indesejável.
- **E)** Incorreta. Minimizar encapsulamento é indesejável.

**Revisão rápida:** Maximizar coesão e encapsulamento; minimizar acoplamento.
