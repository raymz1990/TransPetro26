# Gabarito comentado — Módulo M05: Engenharia de Software

## Identificação
- Concurso: Processo Seletivo Público TRANSPETRO 2026.4 (Edital nº 04/2026)
- Ênfase: 5 — Análise de Sistemas: Processos de Negócios
- Banca: Fundação Cesgranrio
- Módulo: M05 — Engenharia de Software
- Total: 43 questões; status `validada` ou `em_revisao` (indicado em cada questão)
- Gerado em 2026-11-07 por `tools/build_notebooklm.py` a partir de `banco-questoes/`


### AUT-000041 — Gabarito: B
*Questão autoral — estilo Cesgranrio (criada pelo projeto; não é questão aplicada pela banca) · status: validada*

**Requisitos funcionais** descrevem **o que o sistema faz** (serviços, funções, cálculos): I (calcular o tempo de parada) e III (cadastrar ordem de serviço). **Requisitos não funcionais** descrevem **como o sistema deve ser**: atributos de qualidade e condições de operação, como desempenho (II: tempo de resposta mensurável) e segurança (IV: criptografia do tráfego).

- A) Incorreta. Calcular o tempo de parada (I) e cadastrar a ordem de serviço (III) são funções do sistema: requisitos funcionais.
- B) Correta. II (desempenho) e IV (segurança) são atributos de qualidade: requisitos não funcionais.
- C) Incorreta. Mistura um requisito funcional (I) com um não funcional (II).
- D) Incorreta. Mistura um requisito funcional (III) com um não funcional (IV).
- E) Incorreta. Classifica como não funcionais dois requisitos funcionais (I e III) e um não funcional (II).

### AUT-000042 — Gabarito: D
*Questão autoral — estilo Cesgranrio (criada pelo projeto; não é questão aplicada pela banca) · status: validada*

No **MoSCoW**, **Must have** é essencial (sem ele o produto não é viável), **Should have** é **importante**, mas não vital (pode haver alternativa temporária), **Could have** é **desejável**, de menor impacto se omitido, e **Won't have** é o que **não será entregue agora**. O requisito importante com alternativa manual é **Should have**.

- A) Incorreta. Must have é essencial para a viabilidade do produto; o enunciado informa que o produto pode ser lançado sem ele.
- B) Incorreta. Could have é apenas desejável, com pouco impacto se omitido; o requisito foi considerado importante.
- C) Incorreta. Won't have é o que não será entregue neste ciclo; o requisito é importante e deve ser tratado como candidato à entrega.
- D) Correta. Importante, mas não vital, com alternativa temporária: Should have.
- E) Incorreta. "Need to have" não é categoria do MoSCoW.

### AUT-000043 — Gabarito: A
*Questão autoral — estilo Cesgranrio (criada pelo projeto; não é questão aplicada pela banca) · status: validada*

No modelo em V, cada fase da descida (desenvolvimento) corresponde a um nível de teste na subida: **requisitos ↔ teste de aceitação**; **especificação do sistema ↔ teste de sistema**; **projeto arquitetural ↔ teste de integração**; **projeto detalhado ↔ teste de unidade**. A vantagem é planejar os testes desde o início; a limitação é a rigidez do cascata.

- A) Correta. Requisitos ↔ teste de aceitação (validação com o usuário).
- B) Incorreta. O projeto arquitetural corresponde ao teste de integração.
- C) Incorreta. O projeto detalhado corresponde ao teste de unidade.
- D) Incorreta. A implementação (codificação) fica no vértice do V; não há nível de teste de aceitação associado a ela.
- E) Incorreta. A especificação do sistema corresponde ao teste de sistema.

### AUT-000044 — Gabarito: E
*Questão autoral — estilo Cesgranrio (criada pelo projeto; não é questão aplicada pela banca) · status: validada*

O **modelo em espiral** (Boehm) é **orientado a riscos**: cada volta determina objetivos, alternativas e restrições, avalia alternativas e reduz riscos (protótipos, simulações), desenvolve e verifica o produto da volta e planeja a próxima, com a decisão de seguir baseada na análise de riscos. É adequado a projetos grandes, complexos e incertos.

- A) Incorreta. O cascata percorre as fases uma vez, em sequência, sem voltas e sem análise de riscos a cada ciclo; é pouco indicado para requisitos incertos.
- B) Incorreta. A prototipação foca em validar requisitos com protótipos; não estrutura voltas com análise formal de riscos e decisão de prosseguir.
- C) Incorreta. O modelo incremental entrega o produto em partes, mas não é, por definição, orientado à análise de riscos em cada ciclo.
- D) Incorreta. O modelo em V é sequencial e enfatiza a relação entre fases e testes; compartilha a rigidez do cascata.
- E) Correta. Voltas com objetivos, riscos, desenvolvimento e planejamento; decisão baseada em riscos.

### AUT-000045 — Gabarito: C
*Questão autoral — estilo Cesgranrio (criada pelo projeto; não é questão aplicada pela banca) · status: validada*

A ligação do método é **dinâmica**: a versão de `estado()` executada depende do **tipo real** do objeto, mesmo quando chamada dentro de `alarme()` herdado de `Maquina`. (1) `Maquina("M1")`: `alarme()` de Maquina chama `estado()` de Maquina → "ALARME: Máquina M1 em operação". (2) `Bomba("P1")`: `alarme()` é herdado de Maquina, mas `self.estado()` resolve para a versão sobrescrita em Bomba → "ALARME: Bomba P1 pressurizada". (3) `Compressor("C1")`: `alarme()` de Compressor chama `super().alarme()` (de Maquina, via Bomba, que não o redefine), em que `self.estado()` resolve para o `estado()` de Bomba (herdado por Compressor) e, depois, acrescenta " [compressor]".

- A) Incorreta. Supõe ligação estática: em `alarme()` de Maquina, `self.estado()` seria sempre a versão de Maquina. Em Python (e em OO em geral) a escolha depende do tipo real do objeto.
- B) Incorreta. Acerta a segunda linha, mas, na terceira, ignora que Compressor herda `estado()` de Bomba (sobrescrito) e que `self.estado()` resolve para a versão de Bomba.
- C) Correta. Ligação dinâmica nas três linhas, com `super()` na terceira.
- D) Incorreta. Omite o acréscimo " [compressor]" feito pelo método sobrescrito em Compressor, que chama `super().alarme()` e concatena o texto.
- E) Incorreta. Bomba herda `alarme()` de Maquina; não há erro de execução. O que falta em Bomba é só a redefinição, que é opcional.

### AUT-000046 — Gabarito: D
*Questão autoral — estilo Cesgranrio (criada pelo projeto; não é questão aplicada pela banca) · status: validada*

Na **inclusão (*include*)**, um caso de uso **sempre** usa o comportamento de outro (reuso): "Registrar chamado" sempre inclui "Autenticar usuário". Na **extensão (*extend*)**, um caso de uso **opcionalmente** amplia outro, em condições específicas: "Anexar arquivo" estende "Registrar chamado". A **generalização** representa especialização de atores ou de casos de uso, e a **associação** liga atores a casos de uso.

- A) Incorreta. Inverte as relações: o comportamento obrigatório é include; o opcional é extend.
- B) Incorreta. Generalização é especialização, e associação liga ator a caso de uso; nenhuma representa uso obrigatório ou opcional de outro caso de uso.
- C) Incorreta. A primeira relação está correta (include), mas o anexo opcional é extend, e não generalização.
- D) Correta. Autenticação obrigatória: include; anexo opcional: extend.
- E) Incorreta. Entre casos de uso não se usa associação (que liga ator e caso de uso), e o anexo opcional não é uma inclusão.

### AUT-000047 — Gabarito: A
*Questão autoral — estilo Cesgranrio (criada pelo projeto; não é questão aplicada pela banca) · status: validada*

A complexidade ciclomática é **V(G) = número de decisões + 1** (equivalente a E − N + 2P). As decisões do método são: (1) `for`; (2) `if x > limite`; (3) `if alertas > 3`; (4) `elif x < 0`; (5) `while`; (6) `if alertas == 2`. São **6 decisões**; logo, V(G) = 6 + 1 = **7**. O `break`, o `continue` e o `return` não são decisões.

- A) Correta. 6 decisões + 1 = 7.
- B) Incorreta. É o número de decisões (6); falta somar 1 ao total.
- C) Incorreta. Resulta de contar apenas 4 decisões (por exemplo, omitindo o `elif` e o `while`) e somar 1.
- D) Incorreta. Ocorreria se fossem contados também o `break` ou o `continue` como decisões; esses comandos apenas desviam o fluxo e não criam ramificação de decisão.
- E) Incorreta. Resulta de 3 decisões + 1; ignora os laços `for` e `while` ou algumas das estruturas condicionais.

### AUT-000048 — Gabarito: C
*Questão autoral — estilo Cesgranrio (criada pelo projeto; não é questão aplicada pela banca) · status: validada*

Na **análise do valor limite**, testam-se as **bordas das partições**, onde os defeitos são mais comuns: o limite inferior (1) e o valor imediatamente abaixo (0), o limite superior (99) e o valor imediatamente acima (100). O conjunto é **0, 1, 99 e 100**. (Variações da técnica incluem também 2 e 98.)

- A) Incorreta. Usa os limites válidos (1 e 99) e um representante (50), típico da partição de equivalência; não testa os valores imediatamente fora das fronteiras.
- B) Incorreta. 0 e 100 são valores fora do intervalo nas fronteiras, mas 50 é representante da partição válida, e faltam os limites válidos 1 e 99.
- C) Correta. Limites (1 e 99) e valores adjacentes fora do intervalo (0 e 100).
- D) Incorreta. Testa apenas valores válidos perto das bordas; não exercita os valores inválidos adjacentes às fronteiras.
- E) Incorreta. Testa apenas os valores inválidos adjacentes; faltam os próprios limites válidos 1 e 99.

### AUT-000049 — Gabarito: E
*Questão autoral — estilo Cesgranrio (criada pelo projeto; não é questão aplicada pela banca) · status: validada*

A **verificação** pergunta "estamos construindo o produto **corretamente**?" (conformidade com a especificação) e pode ser feita por **técnicas estáticas** (revisões, inspeções, análise estática), sem executar o software: atividade I. A **validação** pergunta "estamos construindo o **produto certo**?" (atendimento à necessidade do usuário): atividade II, em que o usuário opera o sistema (técnica dinâmica, de execução).

- A) Incorreta. Inverte os conceitos: comparar o projeto com a especificação é verificação (estática), e a demonstração ao usuário é validação.
- B) Incorreta. Inverte verificação e validação e também os tipos de técnica (a revisão é estática; a demonstração executa o sistema).
- C) Incorreta. A revisão contra a especificação é verificação, e a demonstração executa o sistema (técnica dinâmica).
- D) Incorreta. A demonstração ao usuário é validação, e a revisão do documento não executa código (técnica estática).
- E) Correta. I: verificação, por revisão (estática); II: validação, com o usuário.

### AUT-000050 — Gabarito: B
*Questão autoral — estilo Cesgranrio (criada pelo projeto; não é questão aplicada pela banca) · status: validada*

A **integração contínua (CI)** integra o código com frequência, com *build* e testes automáticos. A **entrega contínua** mantém o software sempre em condição de ser liberado, com a **implantação em produção como decisão (manual) de negócio**. Na **implantação contínua (*continuous deployment*)**, **toda alteração aprovada nos testes é implantada automaticamente em produção, sem aprovação manual**, que é o caso descrito.

- A) Incorreta. A integração contínua trata da integração e da verificação automática do código; não inclui, por si só, a implantação em produção.
- B) Correta. Implantação automática em produção, sem aprovação manual, após os testes: implantação contínua.
- C) Incorreta. Na entrega contínua, a liberação para produção depende de decisão manual; o enunciado exclui essa aprovação.
- D) Incorreta. A estratégia canário é uma forma de liberação gradual a uma parcela de usuários, e não o nome da prática de implantar automaticamente tudo o que passa nos testes.
- E) Incorreta. Gerência de configuração controla versões e mudanças; não define a implantação automática em produção.

### AUT-000106 — Gabarito: B
*Questão autoral — estilo Cesgranrio (criada pelo projeto; não é questão aplicada pela banca) · status: em_revisao*

A complexidade ciclomática é **V(G) = número de pontos de decisão + 1**. Aqui há três decisões simples: o `if n < 0`, o laço `for` e o `if n % 2 == 0`. Logo, **V(G) = 3 + 1 = 4**, ou seja, quatro caminhos independentes (e, no mínimo, quatro casos de teste para o teste de caminho básico).

- A) Incorreta. 3 corresponde ao número de decisões, sem somar 1.
- B) Correta. V(G) = 3 decisões + 1 = 4.
- C) Incorreta. 5 contaria uma decisão a mais (por exemplo, o `return`, que não é decisão).
- D) Incorreta. 6 não corresponde ao número de decisões.
- E) Incorreta. 2 consideraria apenas uma decisão.

### AUT-000107 — Gabarito: E
*Questão autoral — estilo Cesgranrio (criada pelo projeto; não é questão aplicada pela banca) · status: em_revisao*

Na **integração contínua**, desenvolvedores integram o código ao repositório compartilhado várias vezes ao dia, e **cada integração dispara compilação e testes automatizados**, revelando cedo os erros de integração. A entrega/implantação contínua (CD) estende o pipeline até a liberação.

- A) Incorreta. Implantação automática sem testes é um uso inadequado de CD; CI exige verificação automatizada.
- B) Incorreta. Ramos longos e integração tardia é o oposto da CI ("inferno da integração").
- C) Incorreta. Lançamentos trimestrais não caracterizam CI.
- D) Incorreta. Revisão manual por um só especialista não é a prática definidora da CI.
- E) Correta. Integração frequente com *build* e testes automatizados define CI.

### OFI-000024 — Gabarito: A
*Oficial — Fundação Cesgranrio, Transpetro PSP/Terra 002/2023 (Edital nº 2), Análise de Sistemas — Processos de Negócios, 2023, Prova 6, questão 24 (gabarito: oficial (PDF de gabarito da Cesgranrio, alterado em 9/01/2024), conferido na T13) · status: em_revisao*

**Requisito funcional** descreve o que o sistema **faz** (cálculos, regras, transformações). **Não funcionais** descrevem qualidades e restrições (desempenho, segurança, interface, operação). Calcular a velocidade com uma equação é uma função do sistema.

- A) Correta. É uma função de cálculo do software; requisito funcional.
- B) Incorreta. Aparenta ser funcional por citar imagens, mas, no gabarito, é tratado como requisito de interface/qualidade (resolução e dispositivos).
- C) Incorreta. Restrição de implantação/operação (política de atualização); não funcional.
- D) Incorreta. Restrição de desempenho (tempo de resposta); não funcional.
- E) Incorreta. Restrição de segurança (criptografia AES-256); não funcional.

### OFI-000025 — Gabarito: D
*Oficial — Fundação Cesgranrio, Transpetro PSP/Terra 002/2023 (Edital nº 2), Análise de Sistemas — Processos de Negócios, 2023, Prova 6, questão 25 (gabarito: oficial (PDF de gabarito da Cesgranrio, alterado em 9/01/2024), conferido na T13) · status: em_revisao*

**Cascata** e **modelo em V** são sequenciais (o V acrescenta a correspondência entre fases de desenvolvimento e de teste). Incremental, iterativo, espiral e ágil repetem ciclos.

- A) Incorreta. Incremental entrega partes sucessivas; não é estritamente sequencial.
- B) Incorreta. Iterativo e espiral repetem ciclos.
- C) Incorreta. Ágil e espiral são iterativos.
- D) Correta. Em V e em cascata são sequenciais.
- E) Incorreta. Incremental não é sequencial.

### OFI-000026 — Gabarito: B
*Oficial — Fundação Cesgranrio, Transpetro PSP/Terra 002/2023 (Edital nº 2), Análise de Sistemas — Processos de Negócios, 2023, Prova 6, questão 31 (gabarito: oficial (PDF de gabarito da Cesgranrio, alterado em 9/01/2024), conferido na T13) · status: em_revisao*

**Teste de aceitação** é realizado pelo usuário ou cliente (por exemplo, alfa/beta ou UAT) para decidir se o produto é aceito e entra em produção.

- A) Incorreta. Testes unitários verificam componentes isolados, feitos por desenvolvedores.
- B) Correta. Usuários finais validando a última versão antes da produção caracterizam testes de aceitação.
- C) Incorreta. Testes de desempenho avaliam tempo de resposta e carga.
- D) Incorreta. Testes de integração verificam a interação entre módulos.
- E) Incorreta. Testes de sistema verificam o sistema completo contra os requisitos, feitos pela equipe de testes.

### OFI-000027 — Gabarito: D
*Oficial — Fundação Cesgranrio, Transpetro PSP/Terra 002/2023 (Edital nº 2), Análise de Sistemas — Processos de Negócios, 2023, Prova 6, questão 32 (gabarito: oficial (PDF de gabarito da Cesgranrio, alterado em 9/01/2024), conferido na T13) · status: em_revisao*

**Sobrecarga (*overload*)**: métodos de mesmo nome, mesma classe, assinaturas diferentes. **Sobrescrita (*override*)**: subclasse redefine método herdado com a mesma assinatura.

- A) Incorreta. Herança reaproveita atributos e métodos da superclasse.
- B) Incorreta. Interface define um contrato de métodos.
- C) Incorreta. Instanciação cria objetos a partir de uma classe.
- D) Correta. É a técnica descrita: mesmo nome, parâmetros diferentes, mesma classe.
- E) Incorreta. Sobrescrita redefine, na subclasse, método da superclasse com a mesma assinatura.

### OFI-000049 — Gabarito: A
*Oficial — Fundação Cesgranrio, Transpetro PSP RH 2018.1 (Edital nº 1), Analista de Sistemas Júnior — Processos de Negócio, 2018, Prova 15, questão 23 (gabarito: oficial (PDF de gabarito da Cesgranrio, alterado em 09/05/2018), conferido na T13) · status: em_revisao*

Na **elaboração**, o foco é **reduzir os riscos principais** e **estabelecer a arquitetura executável** (baseline da arquitetura), além de detalhar a maioria dos requisitos. O **escopo** e o *business case* são estabelecidos na **concepção**.

- A) Correta. Definir (e validar) a arquitetura é objetivo central da elaboração.
- B) Incorreta. A estimativa global de custo e o business case são da concepção (refinados depois).
- C) Incorreta. Estabelecer o escopo é objetivo da concepção.
- D) Incorreta. Minimizar custos não é objetivo de fase.
- E) Incorreta. A conversão de bancos operacionais é atividade de transição.

### OFI-000050 — Gabarito: C
*Oficial — Fundação Cesgranrio, Transpetro PSP RH 2018.1 (Edital nº 1), Analista de Sistemas Júnior — Processos de Negócio, 2018, Prova 15, questão 24 (gabarito: oficial (PDF de gabarito da Cesgranrio, alterado em 09/05/2018), conferido na T13) · status: em_revisao*

No **teste de mutação**, criam-se **mutantes** (cópias do programa com pequenas alterações) e executam-se os testes; se o teste detecta a diferença, o mutante é "morto". Avalia a **qualidade do conjunto de testes**.

- A) Incorreta. Testes aleatórios geram entradas ao acaso.
- B) Incorreta. Exploratórios combinam aprendizado, projeto e execução simultâneos, sem scripts.
- C) Correta. Descreve o teste de mutação.
- D) Incorreta. Perfil operacional seleciona entradas conforme o uso esperado.
- E) Incorreta. Fluxo de controle usa o grafo do programa para cobertura de comandos, ramos e caminhos.

### OFI-000051 — Gabarito: A
*Oficial — Fundação Cesgranrio, Transpetro PSP RH 2018.1 (Edital nº 1), Analista de Sistemas Júnior — Processos de Negócio, 2018, Prova 15, questão 25 (gabarito: oficial (PDF de gabarito da Cesgranrio, alterado em 09/05/2018), conferido na T13) · status: em_revisao*

**V(G) = E − N + 2P**, com E arestas, N nós e P componentes conexos (P = 1 para um programa): V(G) = 12 − 5 + 2 = **9**.

- A) Correta. 12 − 5 + 2 = 9: correta.
- B) Incorreta. 11 não resulta da fórmula (por exemplo, 12 − 5 + 4).
- C) Incorreta. 15 = 12 + 5 − 2 (sinal trocado).
- D) Incorreta. 17 = 12 + 5.
- E) Incorreta. 19 = 12 + 5 + 2.

### OFI-000052 — Gabarito: A
*Oficial — Fundação Cesgranrio, Transpetro PSP RH 2018.1 (Edital nº 1), Analista de Sistemas Júnior — Processos de Negócio, 2018, Prova 15, questão 27 (gabarito: oficial (PDF de gabarito da Cesgranrio, alterado em 09/05/2018), conferido na T13) · status: em_revisao*

O **caso de uso** descreve **uma interação entre um ator e o sistema** para atingir um objetivo, do ponto de vista externo, em geral com um fluxo principal e fluxos alternativos e de exceção.

- A) Correta. Descreve uma interação ator-sistema, visão externa.
- B) Incorreta. Um caso de uso reúne **vários** cenários (fluxo principal e alternativos); um único cenário é uma instância.
- C) Incorreta. O comportamento interno é tratado em outros modelos (sequência, atividades).
- D) Incorreta. Estados dos objetos são modelados em diagramas de estados.
- E) Incorreta. Interações entre objetos são modeladas em diagramas de sequência/comunicação.

### OFI-000053 — Gabarito: E
*Oficial — Fundação Cesgranrio, Transpetro PSP RH 2018.1 (Edital nº 1), Analista de Sistemas Júnior — Processos de Negócio, 2018, Prova 15, questão 29 (gabarito: oficial (PDF de gabarito da Cesgranrio, alterado em 09/05/2018), conferido na T13) · status: em_revisao*

**Polimorfismo** permite que operações distintas respondam à mesma mensagem (mesmo nome), cada classe com sua implementação; clientes dependem da interface, reduzindo o acoplamento.

- A) Incorreta. Encapsulamento oculta o estado interno.
- B) Incorreta. Especialização cria subclasses mais específicas.
- C) Incorreta. Herança reaproveita características da superclasse.
- D) Incorreta. Padrões de projeto não são propriedade da orientação a objetos.
- E) Correta. Operações diferentes com o mesmo nome: polimorfismo.

### OFI-000064 — Gabarito: D
*Oficial — Fundação Cesgranrio, Caixa Econômica Federal, Edital 1/2021/NM, Técnico Bancário Novo — Tecnologia da Informação, 2021, Caderno de Tecnologia da Informação (questões 31 a 60), questão 31 (gabarito: definitivo (fonte oficial: portal da Cesgranrio); recursos sem alteração nem anulação) · status: em_revisao*

*Shift left* é **antecipar** os testes (mover "para a esquerda" na linha do tempo), começando nas fases iniciais (requisitos, projeto), para achar defeitos cedo, quando custam menos.

- A) Incorreta. Testar só na entrada em operação é o oposto (*shift right*/produção).
- B) Incorreta. Restringir ao ambiente de desenvolvimento não é o conceito; o foco é a antecipação, em todo o ciclo.
- C) Incorreta. O conceito não exige automação exclusiva.
- D) Correta. Descreve o *shift left*: testar desde o início.
- E) Incorreta. Testes que dirigem o desenvolvimento são característica do TDD, conceito diferente.

### OFI-000065 — Gabarito: A
*Oficial — Fundação Cesgranrio, Caixa Econômica Federal, Edital 1/2021/NM, Técnico Bancário Novo — Tecnologia da Informação, 2021, Caderno de Tecnologia da Informação (questões 31 a 60), questão 33 (gabarito: definitivo (fonte oficial: portal da Cesgranrio); recursos sem alteração nem anulação) · status: em_revisao*

No UP/RUP, as **disciplinas** (requisitos, análise e projeto, implementação, testes etc.) atravessam as **quatro fases**, com esforço variável: a disciplina de requisitos tem maior peso na concepção e na elaboração, mas continua ativa na construção e na transição (mudanças e ajustes).

- A) Correta. Todas as fases têm alguma atividade de requisitos, em intensidade diferente.
- B) Incorreta. Exclui a transição, em que ainda há ajustes de requisitos.
- C) Incorreta. Exclui a concepção, em que os requisitos principais são levantados.
- D) Incorreta. Restringir à elaboração ignora a concepção, a construção e a transição.
- E) Incorreta. Restringir à concepção ignora o refinamento posterior.

### OFI-000066 — Gabarito: C
*Oficial — Fundação Cesgranrio, Caixa Econômica Federal, Edital 1/2021/NM, Técnico Bancário Novo — Tecnologia da Informação, 2021, Caderno de Tecnologia da Informação (questões 31 a 60), questão 36 (gabarito: definitivo (fonte oficial: portal da Cesgranrio); recursos sem alteração nem anulação) · status: em_revisao*

O **Proxy** oferece um **substituto** do objeto real, com a **mesma interface**, para controlar o acesso (instanciação preguiçosa, proteção, cache, acesso remoto), delegando as requisições ao objeto real.

- A) Incorreta. Facade oferece uma interface simplificada para um subsistema.
- B) Incorreta. Adapter converte uma interface em outra esperada pelo cliente.
- C) Correta. Substituto com mesma interface que controla o acesso: Proxy.
- D) Incorreta. Bridge separa abstração e implementação para variarem de forma independente.
- E) Incorreta. Composite trata objetos individuais e composições de forma uniforme (árvores).

### OFI-000069 — Gabarito: D
*Oficial — Fundação Cesgranrio, Caixa Econômica Federal, Edital 1/2021/NM, Técnico Bancário Novo — Tecnologia da Informação, 2021, Caderno de Tecnologia da Informação (questões 31 a 60), questão 40 (gabarito: definitivo (fonte oficial: portal da Cesgranrio); recursos sem alteração nem anulação) · status: em_revisao*

A **Análise de Pontos de Função (APF)** mede o tamanho funcional do software pela **visão do usuário**: entradas, saídas e consultas externas, arquivos lógicos internos e de interface externa, independentemente da tecnologia.

- A) Incorreta. Linhas de código são outra métrica (LOC), dependente de linguagem.
- B) Incorreta. Erros são medidos por métricas de qualidade (densidade de defeitos).
- C) Incorreta. A APF não adota a visão do desenvolvedor.
- D) Correta. A APF conta as funcionalidades sob a visão do usuário.
- E) Incorreta. A visão do testador não é a base da contagem.

### OFI-000070 — Gabarito: D
*Oficial — Fundação Cesgranrio, Caixa Econômica Federal, Edital 1/2021/NM, Técnico Bancário Novo — Tecnologia da Informação, 2021, Caderno de Tecnologia da Informação (questões 31 a 60), questão 53 (gabarito: definitivo (fonte oficial: portal da Cesgranrio); recursos sem alteração nem anulação) · status: em_revisao*

No **TDD**, o ciclo é **Red–Green–Refactor**: escreve-se um teste que falha, implementa-se o mínimo para passar e refatora-se. Portanto, os **casos de teste são projetados antes do código**.

- A) Incorreta. Código aprovado pode e deve ser refatorado, com os testes protegendo.
- B) Incorreta. Descreve o desenvolvimento tradicional (código antes dos testes).
- C) Incorreta. Histórias como testes aproximam-se do BDD/ATDD, não do TDD.
- D) Correta. Projetar os testes antes do código é a essência do TDD.
- E) Incorreta. Repetir testes a cada modificação é prática de testes de regressão/CI.

### OFI-000071 — Gabarito: B
*Oficial — Fundação Cesgranrio, Caixa Econômica Federal, Edital 1/2021/NM, Técnico Bancário Novo — Tecnologia da Informação, 2021, Caderno de Tecnologia da Informação (questões 31 a 60), questão 54 (gabarito: definitivo (fonte oficial: portal da Cesgranrio); recursos sem alteração nem anulação) · status: em_revisao*

O **commit** registra (confirma) as mudanças da cópia de trabalho no repositório, criando uma nova revisão. *Branch* cria uma linha de desenvolvimento; *update* traz mudanças do repositório para a cópia local.

- A) Incorreta. Branch cria um ramo de desenvolvimento.
- B) Correta. Commit registra as mudanças no repositório.
- C) Incorreta. "Save" não é comando de controle de versão (salva arquivo no editor).
- D) Incorreta. "Store" não é comando padrão.
- E) Incorreta. Update atualiza a cópia local com mudanças do repositório (sentido inverso).

### OFI-000072 — Gabarito: A
*Oficial — Fundação Cesgranrio, Caixa Econômica Federal, Edital 1/2021/NM, Técnico Bancário Novo — Tecnologia da Informação, 2021, Caderno de Tecnologia da Informação (questões 31 a 60), questão 57 (gabarito: definitivo (fonte oficial: portal da Cesgranrio); recursos sem alteração nem anulação) · status: em_revisao*

O **teste de unidade** verifica a menor parte testável (função, método, classe) **isolada** das demais, com dublês (*mocks/stubs*) quando preciso.

- A) Correta. Isolamento é a característica definidora do teste de unidade.
- B) Incorreta. Coesão é atributo de projeto, não finalidade do teste.
- C) Incorreta. Acoplamento é atributo de projeto; o teste de unidade isola a unidade.
- D) Incorreta. Testar unificados na versão final é teste de sistema/aceitação.
- E) Incorreta. "Entradas únicas" não define o teste de unidade.

### OFI-000092 — Gabarito: E
*Oficial — Fundação Cesgranrio, BNDES, Edital 1/2024, Analista — Análise de Sistemas: Desenvolvimento, 2024, Prova 3 (manhã), questão 40 (gabarito: final após recursos (documento da banca, via espelho QConcursos)) · status: em_revisao*

Na APF, **Saída Externa (SE)** é a transação que **envia dados para fora** da fronteira da aplicação com **processamento adicional** (agrupamentos, totais, cálculos). A **Consulta Externa (CE)** apenas recupera dados, sem cálculo. O relatório agrupado e totalizado é saída externa. "Impressão externa" e "relatório externo" não são tipos de função.

- A) Incorreta. A consulta externa recupera dados sem processamento lógico (agrupamento/cálculo).
- B) Incorreta. A entrada externa traz dados para dentro da aplicação para manter arquivos.
- C) Incorreta. Não existe esse tipo de função de transação.
- D) Incorreta. Não existe esse tipo de função de transação.
- E) Correta. O relatório agrupado por categoria, cliente e vendedor é saída externa.

### OFI-000093 — Gabarito: A
*Oficial — Fundação Cesgranrio, BNDES, Edital 1/2024, Analista — Análise de Sistemas: Desenvolvimento, 2024, Prova 3 (manhã), questão 41 (gabarito: final após recursos (documento da banca, via espelho QConcursos)) · status: em_revisao*

**Conteinerização** (Docker, Podman) empacota a aplicação e suas dependências em **contêineres isolados**. **Orquestração** (Kubernetes, Docker Swarm) **gerencia** muitos contêineres em um cluster: distribuição (*scheduling*), escalonamento automático, balanceamento, recuperação de falhas e atualizações.

- A) Correta. Descreve corretamente os dois papéis.
- B) Incorreta. Inverte os papéis: Docker não é orquestrador, e Kubernetes não é ferramenta de conteinerização.
- C) Incorreta. Inverte os papéis: Kubernetes orquestra, e Podman é ferramenta de contêineres.
- D) Incorreta. Inverte os papéis: Podman não orquestra e Docker, no sentido citado, não gerencia a escala do cluster.
- E) Incorreta. Reduz a orquestração a monitoramento, o que a descaracteriza (ela gerencia, escalona e recupera).

### OFI-000095 — Gabarito: D
*Oficial — Fundação Cesgranrio, BNDES, Edital 1/2024, Analista — Análise de Sistemas: Desenvolvimento, 2024, Prova 3 (manhã), questão 43 (gabarito: final após recursos (documento da banca, via espelho QConcursos)) · status: em_revisao*

O **Mediator** centraliza a **comunicação entre objetos colegas**, que deixam de se referenciar explicitamente; a comunicação é **multidirecional** e cooperativa. O **Facade** oferece interface simplificada **unidirecional** para um subsistema, que não conhece o facade.

- A) Incorreta. Bridge separa abstração e implementação.
- B) Incorreta. Composite compõe objetos em árvores.
- C) Incorreta. Decorator acrescenta responsabilidades dinamicamente.
- D) Correta. Mediator: coordena a cooperação entre objetos sem referências explícitas, em protocolo multidirecional.
- E) Incorreta. Strategy encapsula algoritmos intercambiáveis.

### OFI-000096 — Gabarito: E
*Oficial — Fundação Cesgranrio, BNDES, Edital 1/2024, Analista — Análise de Sistemas: Desenvolvimento, 2024, Prova 3 (manhã), questão 44 (gabarito: final após recursos (documento da banca, via espelho QConcursos)) · status: em_revisao*

As falhas já aparecem **dentro** de cada módulo, antes da integração: o foco é a **menor unidade** (funções), logo, **testes de unidade**, que isolam a origem do defeito.

- A) Incorreta. Aceitação valida o sistema com o usuário, em fase posterior.
- B) Incorreta. "Teste de independência" não é tipo de teste padrão.
- C) Incorreta. "Teste de modularidade" não é tipo de teste padrão.
- D) Incorreta. Carga avalia comportamento sob volume de uso.
- E) Correta. Funções individuais com resultados incorretos pedem teste de unidade.

### OFI-000097 — Gabarito: B
*Oficial — Fundação Cesgranrio, BNDES, Edital 1/2024, Analista — Análise de Sistemas: Desenvolvimento, 2024, Prova 3 (manhã), questão 45 (gabarito: final após recursos (documento da banca, via espelho QConcursos)) · status: em_revisao*

No **acoplamento de conteúdo** um módulo **acessa ou modifica diretamente o conteúdo interno** (dados ou código) de outro. É o **tipo mais forte e indesejável** de acoplamento.

- A) Incorreta. Acoplamento de comunicação: módulos operam sobre os mesmos dados de entrada ou saída.
- B) Correta. Modificar diretamente os dados internos de outro componente: acoplamento de conteúdo.
- C) Incorreta. Acoplamento de controle: um módulo passa informação que controla a lógica de outro.
- D) Incorreta. Acoplamento externo: módulos compartilham um formato, protocolo ou dispositivo imposto externamente.
- E) Incorreta. "Funcional" refere-se à coesão funcional, característica desejável, e não ao tipo de acoplamento.

### OFI-000107 — Gabarito: E
*Oficial — Fundação Cesgranrio, Petrobras PSP RH 2017.2 (prova de 18/03/2018), Analista de Sistemas Júnior — Processos de Negócio, 2018, Prova 3, questão 45 (gabarito: de espelho (PCI), fornecido pelo usuário; preliminar/definitivo não indicado; anulações não verificadas; não validado contra a banca) · status: em_revisao*

**Verificação** confirma, com evidência objetiva, que os **requisitos especificados foram cumpridos** ("estamos construindo o produto corretamente?"). **Validação** confirma que o produto atende ao **uso pretendido** e às necessidades do usuário ("estamos construindo o produto certo?").

- A) Incorreta. Auditoria avalia conformidade com processos e padrões, de forma independente.
- B) Incorreta. Garantia de qualidade assegura que processos e padrões sejam seguidos, sem testar os requisitos em si.
- C) Incorreta. Resolução de problemas trata do registro e da solução de problemas detectados.
- D) Incorreta. Validação confere o uso pretendido no ambiente do usuário, e não o cumprimento dos requisitos especificados.
- E) Correta. Confirmar requisitos especificados com evidência objetiva: verificação.

### OFI-000108 — Gabarito: D
*Oficial — Fundação Cesgranrio, Petrobras PSP RH 2017.2 (prova de 18/03/2018), Analista de Sistemas Júnior — Processos de Negócio, 2018, Prova 3, questão 50 (gabarito: de espelho (PCI), fornecido pelo usuário; preliminar/definitivo não indicado; anulações não verificadas; não validado contra a banca) · status: em_revisao*

Requisitos **não funcionais** descrevem **qualidades e restrições**: desempenho, disponibilidade, conformidade legal, portabilidade. "O usuário deve selecionar o cinema" descreve **uma função** (interação do sistema): requisito **funcional**.

- A) Incorreta. Restrição de desempenho (tempo de resposta): não funcional.
- B) Incorreta. Disponibilidade (99,5%): não funcional.
- C) Incorreta. Conformidade com a legislação (formato do bilhete): restrição não funcional.
- D) Correta. Escolha do cinema é funcionalidade do sistema: requisito funcional, ou seja, a sentença que NÃO atende ao pedido.
- E) Incorreta. Compatibilidade com smartphone (portabilidade/plataforma): não funcional.

### OFI-000109 — Gabarito: B
*Oficial — Fundação Cesgranrio, Petrobras PSP RH 2017.2 (prova de 18/03/2018), Analista de Sistemas Júnior — Processos de Negócio, 2018, Prova 3, questão 51 (gabarito: de espelho (PCI), fornecido pelo usuário; preliminar/definitivo não indicado; anulações não verificadas; não validado contra a banca) · status: em_revisao*

Requisitos ainda incertos, **primeira versão com as funcionalidades mais importantes** e **versões sucessivas mais completas**, com equipe pequena: **modelo incremental**. O **espiral** exige análise de riscos explícita em cada volta, o que o usuário rejeita; o **cascata** exige requisitos fechados.

- A) Incorreta. RAD pressupõe ciclos muito curtos, componentes reutilizáveis e equipes maiores, o que não é o caso.
- B) Correta. Entregas sucessivas, cada vez mais completas, com equipe pequena: incremental.
- C) Incorreta. Cascata exige requisitos definidos antes do desenvolvimento.
- D) Incorreta. Espiral depende de análise de riscos em cada iteração, que o usuário recusou.
- E) Incorreta. Desenvolvimento baseado em componentes depende de repositório de componentes reutilizáveis.

### OFI-000110 — Gabarito: B
*Oficial — Fundação Cesgranrio, Petrobras PSP RH 2017.2 (prova de 18/03/2018), Analista de Sistemas Júnior — Processos de Negócio, 2018, Prova 3, questão 55 (gabarito: de espelho (PCI), fornecido pelo usuário; preliminar/definitivo não indicado; anulações não verificadas; não validado contra a banca) · status: em_revisao*

Na **análise**, os requisitos elicitados são **estruturados e modelados**, e os conflitos são resolvidos; **identificar e modelar casos de uso** é prática de análise. Protótipos servem à elicitação e à validação; inspeção de documentos e critérios de aceitação, à validação; registrar regras, à especificação.

- A) Incorreta. Protótipos auxiliam a elicitação e a validação.
- B) Correta. Identificar e modelar casos de uso organiza e analisa os requisitos.
- C) Incorreta. Inspecionar documentos é prática de validação.
- D) Incorreta. Critérios de aceitação ligam-se à especificação e à validação.
- E) Incorreta. Registrar regras de negócio é parte da especificação.

### OFI-000121 — Gabarito: C
*Oficial — Fundação Cesgranrio, Petrobras PSP-RH-1/2006 (aplicação em 07/05/2006), Analista de Sistemas Pleno — Processos, 2006, Caderno de Analista de Sistemas Pleno (questões 21 a 60), questão 49 (gabarito: de espelho (Estude Grátis); recursos não verificados; não validado contra a banca) · status: em_revisao*

As melhores práticas de engenharia de requisitos são aplicadas pelo **analista/engenheiro de requisitos**, e não pelo **cliente**, que descreve suas necessidades. As demais afirmações estão corretas.

- A) Incorreta. Verdadeira: o custo de correção cresce com o tempo.
- B) Incorreta. Verdadeira: elicitação identifica; especificação formaliza.
- C) Correta. Falsa: quem aplica as práticas é a equipe de engenharia de requisitos.
- D) Incorreta. Verdadeira: define o gerenciamento de requisitos (rastreabilidade e controle de mudanças).
- E) Incorreta. Verdadeira: mudanças de requisitos têm impacto em prazo, recursos e tecnologia.

### OFI-000122 — Gabarito: D
*Oficial — Fundação Cesgranrio, Petrobras PSP-RH-1/2006 (aplicação em 07/05/2006), Analista de Sistemas Pleno — Processos, 2006, Caderno de Analista de Sistemas Pleno (questões 21 a 60), questão 54 (gabarito: de espelho (Estude Grátis); recursos não verificados; não validado contra a banca) · status: em_revisao*

O **teste de recuperação** (*recovery testing*) é um **teste de sistema** que força o software a falhar de várias maneiras e verifica se a recuperação ocorre corretamente, de forma automática ou com intervenção humana. As outras alternativas contêm trocas conceituais.

- A) Incorreta. Descreve a **caixa-branca** (estrutura de controle, caminho básico) e atribui a ela técnicas de caixa-preta e vice-versa.
- B) Incorreta. Atribui à caixa-branca técnicas de **caixa-preta** (particionamento de equivalência, matriz ortogonal), e a define como validação funcional.
- C) Incorreta. Descreve o **teste de unidade** como se fosse o de integração.
- D) Correta. Define corretamente o teste de recuperação como teste de sistema.
- E) Incorreta. O **beta** é feito **no ambiente do cliente**, sem controle do desenvolvedor; e "gama" não é fase padrão descrita assim.

### OFI-000123 — Gabarito: A
*Oficial — Fundação Cesgranrio, Petrobras PSP-RH-1/2006 (aplicação em 07/05/2006), Analista de Sistemas Pleno — Processos, 2006, Caderno de Analista de Sistemas Pleno (questões 21 a 60), questão 55 (gabarito: de espelho (Estude Grátis); recursos não verificados; não validado contra a banca) · status: em_revisao*

A UML 2.0 introduziu, entre os diagramas de **interação**, o de **Visão Geral da Interação** (que mescla atividades com interações) e o de **Tempo** (*timing*, que mostra mudanças de estado ao longo do tempo), além do de **Estrutura de Composição** e do de **Pacotes** como diagrama próprio.

- A) Correta. Descreve corretamente os dois novos diagramas de interação.
- B) Incorreta. Estereótipos, valores etiquetados e restrições já existiam na UML 1.x; não são novos mecanismos.
- C) Incorreta. A afirmação mistura a história de diagramas de estados e não descreve uma substituição de "diagrama de Máquina de Estados de Protocolo" da UML 1.4.
- D) Incorreta. O diagrama de Pacotes não foi substituído por uma visão combinada.
- E) Incorreta. O diagrama de Componentes continua existindo na UML 2.0; a Estrutura de Composição é um **acréscimo**.

### OFI-000124 — Gabarito: B
*Oficial — Fundação Cesgranrio, Petroquímica Suape PSP nº 1/2012 (22/04/2012), Analista de Sistemas Júnior — Ênfase em Negócio, 2012, Prova 6, questão 34 (gabarito: de espelho (Estude Grátis), após recursos; não validado contra a banca) · status: em_revisao*

Um bom projeto **maximiza a coesão** (partes com responsabilidade única e focada) e o **encapsulamento** (ocultação de detalhes internos) e **minimiza o acoplamento** (dependência entre partes). Entre as opções, só B apresenta o par correto na ordem pedida (maximizar encapsulamento, minimizar acoplamento).

- A) Incorreta. Minimizar a coesão é indesejável.
- B) Correta. Maximizar encapsulamento e minimizar acoplamento: projeto adequado.
- C) Incorreta. Maximizar acoplamento e minimizar coesão é o contrário do desejável.
- D) Incorreta. Maximizar acoplamento é indesejável.
- E) Incorreta. Minimizar encapsulamento é indesejável.

### OFI-000125 — Gabarito: B
*Oficial — Fundação Cesgranrio, Petroquímica Suape PSP nº 1/2012 (22/04/2012), Analista de Sistemas Júnior — Ênfase em Negócio, 2012, Prova 6, questão 36 (gabarito: de espelho (Estude Grátis), após recursos; não validado contra a banca) · status: em_revisao*

A **validação de requisitos** verifica se os requisitos especificados **correspondem às necessidades reais dos usuários** ("o produto certo"), por revisões, protótipos e testes de aceitação. Rastreabilidade (D) e priorização por risco (A) são outras atividades.

- A) Incorreta. Priorização por risco é atividade de gerenciamento, e não propósito da validação.
- B) Correta. Conformidade com as necessidades dos usuários é o propósito da validação.
- C) Incorreta. Aumentar a abstração na comunicação não é o propósito.
- D) Incorreta. Rastrear requisitos é atividade de gerenciamento de requisitos.
- E) Incorreta. Reúso de requisitos voláteis não é propósito da validação.

### OFI-000126 — Gabarito: E
*Oficial — Fundação Cesgranrio, Petroquímica Suape PSP nº 1/2012 (22/04/2012), Analista de Sistemas Júnior — Ênfase em Negócio, 2012, Prova 6, questão 37 (gabarito: de espelho (Estude Grátis), após recursos; não validado contra a banca) · status: em_revisao*

Segundo o gabarito, as duas são falsas: a **decomposição funcional** é característica do paradigma **estruturado**; casos de uso descrevem **interações ator-sistema** (visão externa), e não uma decomposição funcional. Já o **modelo de classes conceituais** representa conceitos do **domínio** (atributos e relacionamentos), sem **métodos** resultantes de decomposição funcional.

- A) Incorreta. A primeira é falsa; logo a segunda não pode justificá-la.
- B) Incorreta. A primeira é falsa.
- C) Incorreta. A segunda é falsa: classes conceituais não resultam de decomposição funcional.
- D) Incorreta. A primeira é falsa (casos de uso não são decomposição funcional).
- E) Correta. As duas afirmações são falsas.
