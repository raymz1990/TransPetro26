# Simulado do módulo 5 — Engenharia de software

**Status:** rascunho · **Tempo:** 58 min · **Questões:** 15

**Critério de distribuição:** Até 15 questões por módulo, priorizando itens ainda não usados e mistura de dificuldade 30/50/20% (critério pedagógico).

**Observações:** Mistura de questões oficiais e autorais do módulo; algumas ainda `em_revisao`.

Composição: tipo {'autoral': 8, 'oficial': 7} · status {'validada': 7, 'em_revisao': 8} · dificuldade {'media': 9, 'facil': 4, 'dificil': 2}

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

## 5. AUT-000045 — Paradigma orientado a objetos: herança e ligação dinâmica

*Questão autoral — estilo Cesgranrio.* · item 5.3 · Difícil · gabarito **C**

A ligação do método é **dinâmica**: a versão de `estado()` executada depende do **tipo real** do objeto, mesmo quando chamada dentro de `alarme()` herdado de `Maquina`. (1) `Maquina("M1")`: `alarme()` de Maquina chama `estado()` de Maquina → "ALARME: Máquina M1 em operação". (2) `Bomba("P1")`: `alarme()` é herdado de Maquina, mas `self.estado()` resolve para a versão sobrescrita em Bomba → "ALARME: Bomba P1 pressurizada". (3) `Compressor("C1")`: `alarme()` de Compressor chama `super().alarme()` (de Maquina, via Bomba, que não o redefine), em que `self.estado()` resolve para o `estado()` de Bomba (herdado por Compressor) e, depois, acrescenta " [compressor]".

- **A)** Incorreta. Supõe ligação estática: em `alarme()` de Maquina, `self.estado()` seria sempre a versão de Maquina. Em Python (e em OO em geral) a escolha depende do tipo real do objeto.
- **B)** Incorreta. Acerta a segunda linha, mas, na terceira, ignora que Compressor herda `estado()` de Bomba (sobrescrito) e que `self.estado()` resolve para a versão de Bomba.
- **C)** Correta. Ligação dinâmica nas três linhas, com `super()` na terceira.
- **D)** Incorreta. Omite o acréscimo " [compressor]" feito pelo método sobrescrito em Compressor, que chama `super().alarme()` e concatena o texto.
- **E)** Incorreta. Bomba herda `alarme()` de Maquina; não há erro de execução. O que falta em Bomba é só a redefinição, que é opcional.

**Revisão rápida:** Chamada a `self.metodo()` é resolvida pelo tipo real. `super().metodo()` executa a versão da superclasse, com o mesmo objeto.

## 6. AUT-000046 — UML: diagrama de casos de uso (include e extend)

*Questão autoral — estilo Cesgranrio.* · item 5.3 · Média · gabarito **D**

Na **inclusão (*include*)**, um caso de uso **sempre** usa o comportamento de outro (reuso): "Registrar chamado" sempre inclui "Autenticar usuário". Na **extensão (*extend*)**, um caso de uso **opcionalmente** amplia outro, em condições específicas: "Anexar arquivo" estende "Registrar chamado". A **generalização** representa especialização de atores ou de casos de uso, e a **associação** liga atores a casos de uso.

- **A)** Incorreta. Inverte as relações: o comportamento obrigatório é include; o opcional é extend.
- **B)** Incorreta. Generalização é especialização, e associação liga ator a caso de uso; nenhuma representa uso obrigatório ou opcional de outro caso de uso.
- **C)** Incorreta. A primeira relação está correta (include), mas o anexo opcional é extend, e não generalização.
- **D)** Correta. Autenticação obrigatória: include; anexo opcional: extend.
- **E)** Incorreta. Entre casos de uso não se usa associação (que liga ator e caso de uso), e o anexo opcional não é uma inclusão.

**Revisão rápida:** Include: uso obrigatório de outro caso de uso. Extend: ampliação opcional. Generalização: especialização. Associação: ator–caso de uso.

## 7. OFI-000053 — Orientação a objetos: polimorfismo

*Questão oficial — Fundação Cesgranrio, Transpetro PSP RH 2018.1, Prova 15, questão 29.* · item 5.3 · Média · gabarito **E**

**Polimorfismo** permite que operações distintas respondam à mesma mensagem (mesmo nome), cada classe com sua implementação; clientes dependem da interface, reduzindo o acoplamento.

- **A)** Incorreta. Encapsulamento oculta o estado interno.
- **B)** Incorreta. Especialização cria subclasses mais específicas.
- **C)** Incorreta. Herança reaproveita características da superclasse.
- **D)** Incorreta. Padrões de projeto não são propriedade da orientação a objetos.
- **E)** Correta. Operações diferentes com o mesmo nome: polimorfismo.

**Revisão rápida:** Polimorfismo: mesma operação, formas diferentes.

## 8. OFI-000027 — Orientação a objetos: sobrecarga

*Questão oficial — Fundação Cesgranrio, Transpetro PSP/Terra 002/2023, Prova 6, questão 32.* · item 5.3 · Fácil · gabarito **D**

**Sobrecarga (*overload*)**: métodos de mesmo nome, mesma classe, assinaturas diferentes. **Sobrescrita (*override*)**: subclasse redefine método herdado com a mesma assinatura.

- **A)** Incorreta. Herança reaproveita atributos e métodos da superclasse.
- **B)** Incorreta. Interface define um contrato de métodos.
- **C)** Incorreta. Instanciação cria objetos a partir de uma classe.
- **D)** Correta. É a técnica descrita: mesmo nome, parâmetros diferentes, mesma classe.
- **E)** Incorreta. Sobrescrita redefine, na subclasse, método da superclasse com a mesma assinatura.

**Revisão rápida:** Overload ≠ override.

## 9. AUT-000047 — Teste de software: complexidade ciclomática

*Questão autoral — estilo Cesgranrio.* · item 5.4 · Difícil · gabarito **A**

A complexidade ciclomática é **V(G) = número de decisões + 1** (equivalente a E − N + 2P). As decisões do método são: (1) `for`; (2) `if x > limite`; (3) `if alertas > 3`; (4) `elif x < 0`; (5) `while`; (6) `if alertas == 2`. São **6 decisões**; logo, V(G) = 6 + 1 = **7**. O `break`, o `continue` e o `return` não são decisões.

- **A)** Correta. 6 decisões + 1 = 7.
- **B)** Incorreta. É o número de decisões (6); falta somar 1 ao total.
- **C)** Incorreta. Resulta de contar apenas 4 decisões (por exemplo, omitindo o `elif` e o `while`) e somar 1.
- **D)** Incorreta. Ocorreria se fossem contados também o `break` ou o `continue` como decisões; esses comandos apenas desviam o fluxo e não criam ramificação de decisão.
- **E)** Incorreta. Resulta de 3 decisões + 1; ignora os laços `for` e `while` ou algumas das estruturas condicionais.

**Revisão rápida:** Complexidade ciclomática = nº de decisões + 1 = E − N + 2P. Valores altos indicam risco e dificuldade de manutenção.

## 10. AUT-000048 — Teste de software: análise do valor limite

*Questão autoral — estilo Cesgranrio.* · item 5.4 · Média · gabarito **C**

Na **análise do valor limite**, testam-se as **bordas das partições**, onde os defeitos são mais comuns: o limite inferior (1) e o valor imediatamente abaixo (0), o limite superior (99) e o valor imediatamente acima (100). O conjunto é **0, 1, 99 e 100**. (Variações da técnica incluem também 2 e 98.)

- **A)** Incorreta. Usa os limites válidos (1 e 99) e um representante (50), típico da partição de equivalência; não testa os valores imediatamente fora das fronteiras.
- **B)** Incorreta. 0 e 100 são valores fora do intervalo nas fronteiras, mas 50 é representante da partição válida, e faltam os limites válidos 1 e 99.
- **C)** Correta. Limites (1 e 99) e valores adjacentes fora do intervalo (0 e 100).
- **D)** Incorreta. Testa apenas valores válidos perto das bordas; não exercita os valores inválidos adjacentes às fronteiras.
- **E)** Incorreta. Testa apenas os valores inválidos adjacentes; faltam os próprios limites válidos 1 e 99.

**Revisão rápida:** Valor limite para 1–99: 0, 1, 99, 100 (e, em variações, 2 e 98).

## 11. AUT-000049 — Verificação e validação

*Questão autoral — estilo Cesgranrio.* · item 5.4 · Média · gabarito **E**

A **verificação** pergunta "estamos construindo o produto **corretamente**?" (conformidade com a especificação) e pode ser feita por **técnicas estáticas** (revisões, inspeções, análise estática), sem executar o software: atividade I. A **validação** pergunta "estamos construindo o **produto certo**?" (atendimento à necessidade do usuário): atividade II, em que o usuário opera o sistema (técnica dinâmica, de execução).

- **A)** Incorreta. Inverte os conceitos: comparar o projeto com a especificação é verificação (estática), e a demonstração ao usuário é validação.
- **B)** Incorreta. Inverte verificação e validação e também os tipos de técnica (a revisão é estática; a demonstração executa o sistema).
- **C)** Incorreta. A revisão contra a especificação é verificação, e a demonstração executa o sistema (técnica dinâmica).
- **D)** Incorreta. A demonstração ao usuário é validação, e a revisão do documento não executa código (técnica estática).
- **E)** Correta. I: verificação, por revisão (estática); II: validação, com o usuário.

**Revisão rápida:** Verificação: produto corretamente (especificação). Validação: produto certo (usuário). Estática: sem executar. Dinâmica: executando.

## 12. OFI-000026 — Testes de aceitação

*Questão oficial — Fundação Cesgranrio, Transpetro PSP/Terra 002/2023, Prova 6, questão 31.* · item 5.4 · Fácil · gabarito **B**

**Teste de aceitação** é realizado pelo usuário ou cliente (por exemplo, alfa/beta ou UAT) para decidir se o produto é aceito e entra em produção.

- **A)** Incorreta. Testes unitários verificam componentes isolados, feitos por desenvolvedores.
- **B)** Correta. Usuários finais validando a última versão antes da produção caracterizam testes de aceitação.
- **C)** Incorreta. Testes de desempenho avaliam tempo de resposta e carga.
- **D)** Incorreta. Testes de integração verificam a interação entre módulos.
- **E)** Incorreta. Testes de sistema verificam o sistema completo contra os requisitos, feitos pela equipe de testes.

**Revisão rápida:** Aceitação: decide se o produto é aceito.

## 13. AUT-000106 — Complexidade ciclomática e testes de caminho básico

*Questão autoral — estilo Cesgranrio.* · item 5.4 · Média · gabarito **B**

A complexidade ciclomática é **V(G) = número de pontos de decisão + 1**. Aqui há três decisões simples: o `if n < 0`, o laço `for` e o `if n % 2 == 0`. Logo, **V(G) = 3 + 1 = 4**, ou seja, quatro caminhos independentes (e, no mínimo, quatro casos de teste para o teste de caminho básico).

- **A)** Incorreta. 3 corresponde ao número de decisões, sem somar 1.
- **B)** Correta. V(G) = 3 decisões + 1 = 4.
- **C)** Incorreta. 5 contaria uma decisão a mais (por exemplo, o `return`, que não é decisão).
- **D)** Incorreta. 6 não corresponde ao número de decisões.
- **E)** Incorreta. 2 consideraria apenas uma decisão.

**Revisão rápida:** V(G) = decisões + 1.

## 14. OFI-000050 — Teste de mutação

*Questão oficial — Fundação Cesgranrio, Transpetro PSP RH 2018.1, Prova 15, questão 24.* · item 5.4 · Média · gabarito **C**

No **teste de mutação**, criam-se **mutantes** (cópias do programa com pequenas alterações) e executam-se os testes; se o teste detecta a diferença, o mutante é "morto". Avalia a **qualidade do conjunto de testes**.

- **A)** Incorreta. Testes aleatórios geram entradas ao acaso.
- **B)** Incorreta. Exploratórios combinam aprendizado, projeto e execução simultâneos, sem scripts.
- **C)** Correta. Descreve o teste de mutação.
- **D)** Incorreta. Perfil operacional seleciona entradas conforme o uso esperado.
- **E)** Incorreta. Fluxo de controle usa o grafo do programa para cobertura de comandos, ramos e caminhos.

**Revisão rápida:** Mutação: alterar o programa para avaliar os testes.

## 15. OFI-000051 — Complexidade ciclomática a partir do grafo de fluxo

*Questão oficial — Fundação Cesgranrio, Transpetro PSP RH 2018.1, Prova 15, questão 25.* · item 5.4 · Média · gabarito **A**

**V(G) = E − N + 2P**, com E arestas, N nós e P componentes conexos (P = 1 para um programa): V(G) = 12 − 5 + 2 = **9**.

- **A)** Correta. 12 − 5 + 2 = 9: correta.
- **B)** Incorreta. 11 não resulta da fórmula (por exemplo, 12 − 5 + 4).
- **C)** Incorreta. 15 = 12 + 5 − 2 (sinal trocado).
- **D)** Incorreta. 17 = 12 + 5.
- **E)** Incorreta. 19 = 12 + 5 + 2.

**Revisão rápida:** V(G) = E − N + 2.
