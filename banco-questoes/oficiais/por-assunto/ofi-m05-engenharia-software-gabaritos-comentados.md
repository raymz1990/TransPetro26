# Questões oficiais — m05-engenharia-software — gabaritos comentados (T04 — Transpetro 2023 (Prova 6) e 2018 (Prova 15))

## OFI-000024 — Requisitos funcionais x não funcionais

*Questão oficial — Fundação Cesgranrio, Transpetro PSP/Terra 002/2023, Prova 6, questão 24.*

**Gabarito: A**

**Requisito funcional** descreve o que o sistema **faz** (cálculos, regras, transformações). **Não funcionais** descrevem qualidades e restrições (desempenho, segurança, interface, operação). Calcular a velocidade com uma equação é uma função do sistema.

- **A)** Correta. É uma função de cálculo do software; requisito funcional.
- **B)** Incorreta. Aparenta ser funcional por citar imagens, mas, no gabarito, é tratado como requisito de interface/qualidade (resolução e dispositivos).
- **C)** Incorreta. Restrição de implantação/operação (política de atualização); não funcional.
- **D)** Incorreta. Restrição de desempenho (tempo de resposta); não funcional.
- **E)** Incorreta. Restrição de segurança (criptografia AES-256); não funcional.

**Ponto de atenção:** Teste prático: o requisito descreve uma **função/cálculo/regra** (funcional) ou uma **restrição de qualidade** (desempenho, segurança, usabilidade)? A alternativa B é a mais discutível; o gabarito privilegia o cálculo explícito.

**Revisão rápida:** Funcional = o que faz; não funcional = quão bem / sob que restrições.

**Fonte:** Fundação Cesgranrio, Transpetro PSP/Terra 002/2023 (Edital nº 2), Análise de Sistemas — Processos de Negócios (2023), prova Prova 6, questão 24; gabarito: oficial (PDF de gabarito da Cesgranrio, alterado em 9/01/2024), conferido na T13.

## OFI-000025 — Ciclos de vida sequenciais

*Questão oficial — Fundação Cesgranrio, Transpetro PSP/Terra 002/2023, Prova 6, questão 25.*

**Gabarito: D**

**Cascata** e **modelo em V** são sequenciais (o V acrescenta a correspondência entre fases de desenvolvimento e de teste). Incremental, iterativo, espiral e ágil repetem ciclos.

- **A)** Incorreta. Incremental entrega partes sucessivas; não é estritamente sequencial.
- **B)** Incorreta. Iterativo e espiral repetem ciclos.
- **C)** Incorreta. Ágil e espiral são iterativos.
- **D)** Correta. Em V e em cascata são sequenciais.
- **E)** Incorreta. Incremental não é sequencial.

**Ponto de atenção:** Sequenciais: cascata e V. Iterativos/incrementais: espiral, protótipo, RUP e ágeis.

**Revisão rápida:** Sequencial = cascata e V.

**Fonte:** Fundação Cesgranrio, Transpetro PSP/Terra 002/2023 (Edital nº 2), Análise de Sistemas — Processos de Negócios (2023), prova Prova 6, questão 25; gabarito: oficial (PDF de gabarito da Cesgranrio, alterado em 9/01/2024), conferido na T13.

## OFI-000026 — Testes de aceitação

*Questão oficial — Fundação Cesgranrio, Transpetro PSP/Terra 002/2023, Prova 6, questão 31.*

**Gabarito: B**

**Teste de aceitação** é realizado pelo usuário ou cliente (por exemplo, alfa/beta ou UAT) para decidir se o produto é aceito e entra em produção.

- **A)** Incorreta. Testes unitários verificam componentes isolados, feitos por desenvolvedores.
- **B)** Correta. Usuários finais validando a última versão antes da produção caracterizam testes de aceitação.
- **C)** Incorreta. Testes de desempenho avaliam tempo de resposta e carga.
- **D)** Incorreta. Testes de integração verificam a interação entre módulos.
- **E)** Incorreta. Testes de sistema verificam o sistema completo contra os requisitos, feitos pela equipe de testes.

**Ponto de atenção:** Palavras-chave: **usuários/cliente**, **aprovar**, **colocar em produção** = aceitação (UAT).

**Revisão rápida:** Aceitação: decide se o produto é aceito.

**Fonte:** Fundação Cesgranrio, Transpetro PSP/Terra 002/2023 (Edital nº 2), Análise de Sistemas — Processos de Negócios (2023), prova Prova 6, questão 31; gabarito: oficial (PDF de gabarito da Cesgranrio, alterado em 9/01/2024), conferido na T13.

## OFI-000027 — Orientação a objetos: sobrecarga

*Questão oficial — Fundação Cesgranrio, Transpetro PSP/Terra 002/2023, Prova 6, questão 32.*

**Gabarito: D**

**Sobrecarga (*overload*)**: métodos de mesmo nome, mesma classe, assinaturas diferentes. **Sobrescrita (*override*)**: subclasse redefine método herdado com a mesma assinatura.

- **A)** Incorreta. Herança reaproveita atributos e métodos da superclasse.
- **B)** Incorreta. Interface define um contrato de métodos.
- **C)** Incorreta. Instanciação cria objetos a partir de uma classe.
- **D)** Correta. É a técnica descrita: mesmo nome, parâmetros diferentes, mesma classe.
- **E)** Incorreta. Sobrescrita redefine, na subclasse, método da superclasse com a mesma assinatura.

**Ponto de atenção:** Sobrecarga = mesma classe, mesma nome, parâmetros diferentes. Sobrescrita = subclasse, mesma assinatura.

**Revisão rápida:** Overload ≠ override.

**Fonte:** Fundação Cesgranrio, Transpetro PSP/Terra 002/2023 (Edital nº 2), Análise de Sistemas — Processos de Negócios (2023), prova Prova 6, questão 32; gabarito: oficial (PDF de gabarito da Cesgranrio, alterado em 9/01/2024), conferido na T13.

## OFI-000049 — Processo Unificado: fase de elaboração

*Questão oficial — Fundação Cesgranrio, Transpetro PSP RH 2018.1, Prova 15, questão 23.*

**Gabarito: A**

Na **elaboração**, o foco é **reduzir os riscos principais** e **estabelecer a arquitetura executável** (baseline da arquitetura), além de detalhar a maioria dos requisitos. O **escopo** e o *business case* são estabelecidos na **concepção**.

- **A)** Correta. Definir (e validar) a arquitetura é objetivo central da elaboração.
- **B)** Incorreta. A estimativa global de custo e o business case são da concepção (refinados depois).
- **C)** Incorreta. Estabelecer o escopo é objetivo da concepção.
- **D)** Incorreta. Minimizar custos não é objetivo de fase.
- **E)** Incorreta. A conversão de bancos operacionais é atividade de transição.

**Ponto de atenção:** UP: **Concepção** (escopo, viabilidade), **Elaboração** (arquitetura, riscos), **Construção** (implementação), **Transição** (implantação). Aderência parcial: o RUP/UP não é citado literalmente no item 5.2.

**Revisão rápida:** Elaboração = arquitetura.

**Fonte:** Fundação Cesgranrio, Transpetro PSP RH 2018.1 (Edital nº 1), Analista de Sistemas Júnior — Processos de Negócio (2018), prova Prova 15, questão 23; gabarito: oficial (PDF de gabarito da Cesgranrio, alterado em 09/05/2018), conferido na T13.

## OFI-000050 — Teste de mutação

*Questão oficial — Fundação Cesgranrio, Transpetro PSP RH 2018.1, Prova 15, questão 24.*

**Gabarito: C**

No **teste de mutação**, criam-se **mutantes** (cópias do programa com pequenas alterações) e executam-se os testes; se o teste detecta a diferença, o mutante é "morto". Avalia a **qualidade do conjunto de testes**.

- **A)** Incorreta. Testes aleatórios geram entradas ao acaso.
- **B)** Incorreta. Exploratórios combinam aprendizado, projeto e execução simultâneos, sem scripts.
- **C)** Correta. Descreve o teste de mutação.
- **D)** Incorreta. Perfil operacional seleciona entradas conforme o uso esperado.
- **E)** Incorreta. Fluxo de controle usa o grafo do programa para cobertura de comandos, ramos e caminhos.

**Ponto de atenção:** Palavras-chave: **versões levemente modificadas** = mutantes.

**Revisão rápida:** Mutação: alterar o programa para avaliar os testes.

**Fonte:** Fundação Cesgranrio, Transpetro PSP RH 2018.1 (Edital nº 1), Analista de Sistemas Júnior — Processos de Negócio (2018), prova Prova 15, questão 24; gabarito: oficial (PDF de gabarito da Cesgranrio, alterado em 09/05/2018), conferido na T13.

## OFI-000051 — Complexidade ciclomática a partir do grafo de fluxo

*Questão oficial — Fundação Cesgranrio, Transpetro PSP RH 2018.1, Prova 15, questão 25.*

**Gabarito: A**

**V(G) = E − N + 2P**, com E arestas, N nós e P componentes conexos (P = 1 para um programa): V(G) = 12 − 5 + 2 = **9**.

- **A)** Correta. 12 − 5 + 2 = 9: correta.
- **B)** Incorreta. 11 não resulta da fórmula (por exemplo, 12 − 5 + 4).
- **C)** Incorreta. 15 = 12 + 5 − 2 (sinal trocado).
- **D)** Incorreta. 17 = 12 + 5.
- **E)** Incorreta. 19 = 12 + 5 + 2.

**Ponto de atenção:** Fórmulas equivalentes: **E − N + 2**, **decisões + 1**, **regiões do grafo planar**. Cuidado para não somar nós e arcos.

**Revisão rápida:** V(G) = E − N + 2.

**Fonte:** Fundação Cesgranrio, Transpetro PSP RH 2018.1 (Edital nº 1), Analista de Sistemas Júnior — Processos de Negócio (2018), prova Prova 15, questão 25; gabarito: oficial (PDF de gabarito da Cesgranrio, alterado em 09/05/2018), conferido na T13.

## OFI-000052 — Casos de uso

*Questão oficial — Fundação Cesgranrio, Transpetro PSP RH 2018.1, Prova 15, questão 27.*

**Gabarito: A**

O **caso de uso** descreve **uma interação entre um ator e o sistema** para atingir um objetivo, do ponto de vista externo, em geral com um fluxo principal e fluxos alternativos e de exceção.

- **A)** Correta. Descreve uma interação ator-sistema, visão externa.
- **B)** Incorreta. Um caso de uso reúne **vários** cenários (fluxo principal e alternativos); um único cenário é uma instância.
- **C)** Incorreta. O comportamento interno é tratado em outros modelos (sequência, atividades).
- **D)** Incorreta. Estados dos objetos são modelados em diagramas de estados.
- **E)** Incorreta. Interações entre objetos são modeladas em diagramas de sequência/comunicação.

**Ponto de atenção:** Caso de uso: **visão externa**, objetivo do ator. B é a pegadinha: o caso de uso agrupa **vários cenários**.

**Revisão rápida:** Caso de uso = interação ator × sistema.

**Fonte:** Fundação Cesgranrio, Transpetro PSP RH 2018.1 (Edital nº 1), Analista de Sistemas Júnior — Processos de Negócio (2018), prova Prova 15, questão 27; gabarito: oficial (PDF de gabarito da Cesgranrio, alterado em 09/05/2018), conferido na T13.

## OFI-000053 — Orientação a objetos: polimorfismo

*Questão oficial — Fundação Cesgranrio, Transpetro PSP RH 2018.1, Prova 15, questão 29.*

**Gabarito: E**

**Polimorfismo** permite que operações distintas respondam à mesma mensagem (mesmo nome), cada classe com sua implementação; clientes dependem da interface, reduzindo o acoplamento.

- **A)** Incorreta. Encapsulamento oculta o estado interno.
- **B)** Incorreta. Especialização cria subclasses mais específicas.
- **C)** Incorreta. Herança reaproveita características da superclasse.
- **D)** Incorreta. Padrões de projeto não são propriedade da orientação a objetos.
- **E)** Correta. Operações diferentes com o mesmo nome: polimorfismo.

**Ponto de atenção:** Polimorfismo (mesmo nome, comportamentos diferentes) ≠ herança (reuso) ≠ encapsulamento (ocultação).

**Revisão rápida:** Polimorfismo: mesma operação, formas diferentes.

**Fonte:** Fundação Cesgranrio, Transpetro PSP RH 2018.1 (Edital nº 1), Analista de Sistemas Júnior — Processos de Negócio (2018), prova Prova 15, questão 29; gabarito: oficial (PDF de gabarito da Cesgranrio, alterado em 09/05/2018), conferido na T13.

## OFI-000064 — DevOps: shift left testing

*Questão oficial — Fundação Cesgranrio, Caixa Econômica Federal, Edital 1/2021/NM, Caderno de Tecnologia da Informação, questão 31.*

**Gabarito: D**

*Shift left* é **antecipar** os testes (mover "para a esquerda" na linha do tempo), começando nas fases iniciais (requisitos, projeto), para achar defeitos cedo, quando custam menos.

- **A)** Incorreta. Testar só na entrada em operação é o oposto (*shift right*/produção).
- **B)** Incorreta. Restringir ao ambiente de desenvolvimento não é o conceito; o foco é a antecipação, em todo o ciclo.
- **C)** Incorreta. O conceito não exige automação exclusiva.
- **D)** Correta. Descreve o *shift left*: testar desde o início.
- **E)** Incorreta. Testes que dirigem o desenvolvimento são característica do TDD, conceito diferente.

**Ponto de atenção:** Cuidado para não confundir *shift left* (**quando** testar) com TDD (**testes dirigem o código**).

**Revisão rápida:** Shift left = testar cedo.

**Fonte:** Fundação Cesgranrio, Caixa Econômica Federal, Edital 1/2021/NM, Técnico Bancário Novo — Tecnologia da Informação (2021), prova Caderno de Tecnologia da Informação (questões 31 a 60), questão 31; gabarito: definitivo (fonte oficial: portal da Cesgranrio); recursos sem alteração nem anulação.

## OFI-000065 — Processo Unificado: disciplina de requisitos nas fases

*Questão oficial — Fundação Cesgranrio, Caixa Econômica Federal, Edital 1/2021/NM, Caderno de Tecnologia da Informação, questão 33.*

**Gabarito: A**

No UP/RUP, as **disciplinas** (requisitos, análise e projeto, implementação, testes etc.) atravessam as **quatro fases**, com esforço variável: a disciplina de requisitos tem maior peso na concepção e na elaboração, mas continua ativa na construção e na transição (mudanças e ajustes).

- **A)** Correta. Todas as fases têm alguma atividade de requisitos, em intensidade diferente.
- **B)** Incorreta. Exclui a transição, em que ainda há ajustes de requisitos.
- **C)** Incorreta. Exclui a concepção, em que os requisitos principais são levantados.
- **D)** Incorreta. Restringir à elaboração ignora a concepção, a construção e a transição.
- **E)** Incorreta. Restringir à concepção ignora o refinamento posterior.

**Ponto de atenção:** Gráfico clássico do RUP: **fases** nas colunas, **disciplinas** nas linhas; todas as disciplinas aparecem em todas as fases, com "ondas" de esforço.

**Revisão rápida:** UP: disciplinas atravessam as 4 fases.

**Fonte:** Fundação Cesgranrio, Caixa Econômica Federal, Edital 1/2021/NM, Técnico Bancário Novo — Tecnologia da Informação (2021), prova Caderno de Tecnologia da Informação (questões 31 a 60), questão 33; gabarito: definitivo (fonte oficial: portal da Cesgranrio); recursos sem alteração nem anulação.

## OFI-000066 — Padrão de projeto Proxy

*Questão oficial — Fundação Cesgranrio, Caixa Econômica Federal, Edital 1/2021/NM, Caderno de Tecnologia da Informação, questão 36.*

**Gabarito: C**

O **Proxy** oferece um **substituto** do objeto real, com a **mesma interface**, para controlar o acesso (instanciação preguiçosa, proteção, cache, acesso remoto), delegando as requisições ao objeto real.

- **A)** Incorreta. Facade oferece uma interface simplificada para um subsistema.
- **B)** Incorreta. Adapter converte uma interface em outra esperada pelo cliente.
- **C)** Correta. Substituto com mesma interface que controla o acesso: Proxy.
- **D)** Incorreta. Bridge separa abstração e implementação para variarem de forma independente.
- **E)** Incorreta. Composite trata objetos individuais e composições de forma uniforme (árvores).

**Ponto de atenção:** Padrões de projeto não são citados literalmente no item 5.3 (aderência parcial). Palavras-chave de Proxy: **substituto, mesma interface, controla o acesso**.

**Revisão rápida:** Proxy: representante com a mesma interface.

**Fonte:** Fundação Cesgranrio, Caixa Econômica Federal, Edital 1/2021/NM, Técnico Bancário Novo — Tecnologia da Informação (2021), prova Caderno de Tecnologia da Informação (questões 31 a 60), questão 36; gabarito: definitivo (fonte oficial: portal da Cesgranrio); recursos sem alteração nem anulação.

## OFI-000069 — Análise de pontos de função: ponto de vista do usuário

*Questão oficial — Fundação Cesgranrio, Caixa Econômica Federal, Edital 1/2021/NM, Caderno de Tecnologia da Informação, questão 40.*

**Gabarito: D**

A **Análise de Pontos de Função (APF)** mede o tamanho funcional do software pela **visão do usuário**: entradas, saídas e consultas externas, arquivos lógicos internos e de interface externa, independentemente da tecnologia.

- **A)** Incorreta. Linhas de código são outra métrica (LOC), dependente de linguagem.
- **B)** Incorreta. Erros são medidos por métricas de qualidade (densidade de defeitos).
- **C)** Incorreta. A APF não adota a visão do desenvolvedor.
- **D)** Correta. A APF conta as funcionalidades sob a visão do usuário.
- **E)** Incorreta. A visão do testador não é a base da contagem.

**Ponto de atenção:** Aderência parcial (métrica de estimativa não citada no edital). **APF = função percebida pelo usuário, independente de tecnologia.**

**Revisão rápida:** APF: funções do ponto de vista do usuário.

**Fonte:** Fundação Cesgranrio, Caixa Econômica Federal, Edital 1/2021/NM, Técnico Bancário Novo — Tecnologia da Informação (2021), prova Caderno de Tecnologia da Informação (questões 31 a 60), questão 40; gabarito: definitivo (fonte oficial: portal da Cesgranrio); recursos sem alteração nem anulação.

## OFI-000070 — Desenvolvimento Dirigido por Testes (TDD)

*Questão oficial — Fundação Cesgranrio, Caixa Econômica Federal, Edital 1/2021/NM, Caderno de Tecnologia da Informação, questão 53.*

**Gabarito: D**

No **TDD**, o ciclo é **Red–Green–Refactor**: escreve-se um teste que falha, implementa-se o mínimo para passar e refatora-se. Portanto, os **casos de teste são projetados antes do código**.

- **A)** Incorreta. Código aprovado pode e deve ser refatorado, com os testes protegendo.
- **B)** Incorreta. Descreve o desenvolvimento tradicional (código antes dos testes).
- **C)** Incorreta. Histórias como testes aproximam-se do BDD/ATDD, não do TDD.
- **D)** Correta. Projetar os testes antes do código é a essência do TDD.
- **E)** Incorreta. Repetir testes a cada modificação é prática de testes de regressão/CI.

**Ponto de atenção:** TDD ≠ testar cedo (*shift left*) ≠ BDD. Ordem: **teste → código → refatoração**.

**Revisão rápida:** TDD: teste primeiro, vermelho-verde-refatora.

**Fonte:** Fundação Cesgranrio, Caixa Econômica Federal, Edital 1/2021/NM, Técnico Bancário Novo — Tecnologia da Informação (2021), prova Caderno de Tecnologia da Informação (questões 31 a 60), questão 53; gabarito: definitivo (fonte oficial: portal da Cesgranrio); recursos sem alteração nem anulação.

## OFI-000071 — Controle de versão: commit

*Questão oficial — Fundação Cesgranrio, Caixa Econômica Federal, Edital 1/2021/NM, Caderno de Tecnologia da Informação, questão 54.*

**Gabarito: B**

O **commit** registra (confirma) as mudanças da cópia de trabalho no repositório, criando uma nova revisão. *Branch* cria uma linha de desenvolvimento; *update* traz mudanças do repositório para a cópia local.

- **A)** Incorreta. Branch cria um ramo de desenvolvimento.
- **B)** Correta. Commit registra as mudanças no repositório.
- **C)** Incorreta. "Save" não é comando de controle de versão (salva arquivo no editor).
- **D)** Incorreta. "Store" não é comando padrão.
- **E)** Incorreta. Update atualiza a cópia local com mudanças do repositório (sentido inverso).

**Ponto de atenção:** Fluxo básico: **update/pull** (trazer) e **commit/push** (enviar). Em Git há ainda a separação entre *commit* local e *push*.

**Revisão rápida:** Commit = registrar mudanças no repositório.

**Fonte:** Fundação Cesgranrio, Caixa Econômica Federal, Edital 1/2021/NM, Técnico Bancário Novo — Tecnologia da Informação (2021), prova Caderno de Tecnologia da Informação (questões 31 a 60), questão 54; gabarito: definitivo (fonte oficial: portal da Cesgranrio); recursos sem alteração nem anulação.

## OFI-000072 — Teste de unidade

*Questão oficial — Fundação Cesgranrio, Caixa Econômica Federal, Edital 1/2021/NM, Caderno de Tecnologia da Informação, questão 57.*

**Gabarito: A**

O **teste de unidade** verifica a menor parte testável (função, método, classe) **isolada** das demais, com dublês (*mocks/stubs*) quando preciso.

- **A)** Correta. Isolamento é a característica definidora do teste de unidade.
- **B)** Incorreta. Coesão é atributo de projeto, não finalidade do teste.
- **C)** Incorreta. Acoplamento é atributo de projeto; o teste de unidade isola a unidade.
- **D)** Incorreta. Testar unificados na versão final é teste de sistema/aceitação.
- **E)** Incorreta. "Entradas únicas" não define o teste de unidade.

**Ponto de atenção:** Pirâmide: **unidade** (isolada) → **integração** (interação entre módulos) → **sistema** → **aceitação**.

**Revisão rápida:** Unidade: isolada, menor parte testável.

**Fonte:** Fundação Cesgranrio, Caixa Econômica Federal, Edital 1/2021/NM, Técnico Bancário Novo — Tecnologia da Informação (2021), prova Caderno de Tecnologia da Informação (questões 31 a 60), questão 57; gabarito: definitivo (fonte oficial: portal da Cesgranrio); recursos sem alteração nem anulação.

## OFI-000092 — Pontos de função: tipo de transação (saída externa)

*Questão oficial — Fundação Cesgranrio, BNDES, Edital 1/2024, Prova 3, questão 40.*

**Gabarito: E**

Na APF, **Saída Externa (SE)** é a transação que **envia dados para fora** da fronteira da aplicação com **processamento adicional** (agrupamentos, totais, cálculos). A **Consulta Externa (CE)** apenas recupera dados, sem cálculo. O relatório agrupado e totalizado é saída externa. "Impressão externa" e "relatório externo" não são tipos de função.

- **A)** Incorreta. A consulta externa recupera dados sem processamento lógico (agrupamento/cálculo).
- **B)** Incorreta. A entrada externa traz dados para dentro da aplicação para manter arquivos.
- **C)** Incorreta. Não existe esse tipo de função de transação.
- **D)** Incorreta. Não existe esse tipo de função de transação.
- **E)** Correta. O relatório agrupado por categoria, cliente e vendedor é saída externa.

**Ponto de atenção:** Tipos da APF: **EE** (entrada), **SE** (saída), **CE** (consulta), **ALI** (arquivo lógico interno) e **AIE** (arquivo de interface externa). SE tem **lógica de processamento** além de recuperar dados.

**Revisão rápida:** SE = envia dados processados (agrupados/calculados) para fora.

**Fonte:** Fundação Cesgranrio, BNDES, Edital 1/2024, Analista — Análise de Sistemas: Desenvolvimento (2024), prova Prova 3 (manhã), questão 40; gabarito: final após recursos (documento da banca, via espelho QConcursos).

## OFI-000093 — Contêineres e orquestração (Docker e Kubernetes)

*Questão oficial — Fundação Cesgranrio, BNDES, Edital 1/2024, Prova 3, questão 41.*

**Gabarito: A**

**Conteinerização** (Docker, Podman) empacota a aplicação e suas dependências em **contêineres isolados**. **Orquestração** (Kubernetes, Docker Swarm) **gerencia** muitos contêineres em um cluster: distribuição (*scheduling*), escalonamento automático, balanceamento, recuperação de falhas e atualizações.

- **A)** Correta. Descreve corretamente os dois papéis.
- **B)** Incorreta. Inverte os papéis: Docker não é orquestrador, e Kubernetes não é ferramenta de conteinerização.
- **C)** Incorreta. Inverte os papéis: Kubernetes orquestra, e Podman é ferramenta de contêineres.
- **D)** Incorreta. Inverte os papéis: Podman não orquestra e Docker, no sentido citado, não gerencia a escala do cluster.
- **E)** Incorreta. Reduz a orquestração a monitoramento, o que a descaracteriza (ela gerencia, escalona e recupera).

**Ponto de atenção:** Aderência parcial (o edital não cita contêineres). Distrator comum: **trocar** quem faz o quê. Conteinerização = **empacotar**; orquestração = **gerenciar em escala**.

**Revisão rápida:** Docker empacota; Kubernetes orquestra.

**Fonte:** Fundação Cesgranrio, BNDES, Edital 1/2024, Analista — Análise de Sistemas: Desenvolvimento (2024), prova Prova 3 (manhã), questão 41; gabarito: final após recursos (documento da banca, via espelho QConcursos).

## OFI-000095 — Padrões de projeto: Mediator x Facade

*Questão oficial — Fundação Cesgranrio, BNDES, Edital 1/2024, Prova 3, questão 43.*

**Gabarito: D**

O **Mediator** centraliza a **comunicação entre objetos colegas**, que deixam de se referenciar explicitamente; a comunicação é **multidirecional** e cooperativa. O **Facade** oferece interface simplificada **unidirecional** para um subsistema, que não conhece o facade.

- **A)** Incorreta. Bridge separa abstração e implementação.
- **B)** Incorreta. Composite compõe objetos em árvores.
- **C)** Incorreta. Decorator acrescenta responsabilidades dinamicamente.
- **D)** Correta. Mediator: coordena a cooperação entre objetos sem referências explícitas, em protocolo multidirecional.
- **E)** Incorreta. Strategy encapsula algoritmos intercambiáveis.

**Ponto de atenção:** Aderência parcial. Diferença-chave: **Facade = unidirecional** (cliente → subsistema); **Mediator = multidirecional** (colegas ↔ mediador).

**Revisão rápida:** Mediator: colegas falam com o mediador, não entre si.

**Fonte:** Fundação Cesgranrio, BNDES, Edital 1/2024, Analista — Análise de Sistemas: Desenvolvimento (2024), prova Prova 3 (manhã), questão 43; gabarito: final após recursos (documento da banca, via espelho QConcursos).

## OFI-000096 — Teste de unidade para isolar a origem das falhas

*Questão oficial — Fundação Cesgranrio, BNDES, Edital 1/2024, Prova 3, questão 44.*

**Gabarito: E**

As falhas já aparecem **dentro** de cada módulo, antes da integração: o foco é a **menor unidade** (funções), logo, **testes de unidade**, que isolam a origem do defeito.

- **A)** Incorreta. Aceitação valida o sistema com o usuário, em fase posterior.
- **B)** Incorreta. "Teste de independência" não é tipo de teste padrão.
- **C)** Incorreta. "Teste de modularidade" não é tipo de teste padrão.
- **D)** Incorreta. Carga avalia comportamento sob volume de uso.
- **E)** Correta. Funções individuais com resultados incorretos pedem teste de unidade.

**Ponto de atenção:** Escolha o nível de teste pelo **escopo da falha**: função (unidade) → interação entre módulos (integração) → sistema → aceitação.

**Revisão rápida:** Defeito dentro da função: teste de unidade.

**Fonte:** Fundação Cesgranrio, BNDES, Edital 1/2024, Analista — Análise de Sistemas: Desenvolvimento (2024), prova Prova 3 (manhã), questão 44; gabarito: final após recursos (documento da banca, via espelho QConcursos).

## OFI-000097 — Acoplamento de conteúdo

*Questão oficial — Fundação Cesgranrio, BNDES, Edital 1/2024, Prova 3, questão 45.*

**Gabarito: B**

No **acoplamento de conteúdo** um módulo **acessa ou modifica diretamente o conteúdo interno** (dados ou código) de outro. É o **tipo mais forte e indesejável** de acoplamento.

- **A)** Incorreta. Acoplamento de comunicação: módulos operam sobre os mesmos dados de entrada ou saída.
- **B)** Correta. Modificar diretamente os dados internos de outro componente: acoplamento de conteúdo.
- **C)** Incorreta. Acoplamento de controle: um módulo passa informação que controla a lógica de outro.
- **D)** Incorreta. Acoplamento externo: módulos compartilham um formato, protocolo ou dispositivo imposto externamente.
- **E)** Incorreta. "Funcional" refere-se à coesão funcional, característica desejável, e não ao tipo de acoplamento.

**Ponto de atenção:** Do pior para o melhor: **conteúdo → comum → externo → controle → estampa → dados**. Coesão (dentro do módulo) ≠ acoplamento (entre módulos).

**Revisão rápida:** Conteúdo: um módulo mexe nos internos de outro.

**Fonte:** Fundação Cesgranrio, BNDES, Edital 1/2024, Analista — Análise de Sistemas: Desenvolvimento (2024), prova Prova 3 (manhã), questão 45; gabarito: final após recursos (documento da banca, via espelho QConcursos).

## OFI-000107 — Verificação x validação

*Questão oficial — Fundação Cesgranrio, Petrobras PSP RH 2017.2, Prova 3, questão 45.*

**Gabarito: E**

**Verificação** confirma, com evidência objetiva, que os **requisitos especificados foram cumpridos** ("estamos construindo o produto corretamente?"). **Validação** confirma que o produto atende ao **uso pretendido** e às necessidades do usuário ("estamos construindo o produto certo?").

- **A)** Incorreta. Auditoria avalia conformidade com processos e padrões, de forma independente.
- **B)** Incorreta. Garantia de qualidade assegura que processos e padrões sejam seguidos, sem testar os requisitos em si.
- **C)** Incorreta. Resolução de problemas trata do registro e da solução de problemas detectados.
- **D)** Incorreta. Validação confere o uso pretendido no ambiente do usuário, e não o cumprimento dos requisitos especificados.
- **E)** Correta. Confirmar requisitos especificados com evidência objetiva: verificação.

**Ponto de atenção:** Texto de **ISO/IEC 12207**: verificação = requisitos **especificados** cumpridos; validação = requisitos para o **uso pretendido** cumpridos.

**Revisão rápida:** Verificação: produto conforme a especificação.

**Fonte:** Fundação Cesgranrio, Petrobras PSP RH 2017.2 (prova de 18/03/2018), Analista de Sistemas Júnior — Processos de Negócio (2018), prova Prova 3, questão 45; gabarito: de espelho (PCI), fornecido pelo usuário; preliminar/definitivo não indicado; anulações não verificadas; não validado contra a banca.

## OFI-000108 — Requisitos não funcionais (alternativa NÃO)

*Questão oficial — Fundação Cesgranrio, Petrobras PSP RH 2017.2, Prova 3, questão 50.*

**Gabarito: D**

Requisitos **não funcionais** descrevem **qualidades e restrições**: desempenho, disponibilidade, conformidade legal, portabilidade. "O usuário deve selecionar o cinema" descreve **uma função** (interação do sistema): requisito **funcional**.

- **A)** Incorreta. Restrição de desempenho (tempo de resposta): não funcional.
- **B)** Incorreta. Disponibilidade (99,5%): não funcional.
- **C)** Incorreta. Conformidade com a legislação (formato do bilhete): restrição não funcional.
- **D)** Correta. Escolha do cinema é funcionalidade do sistema: requisito funcional, ou seja, a sentença que NÃO atende ao pedido.
- **E)** Incorreta. Compatibilidade com smartphone (portabilidade/plataforma): não funcional.

**Ponto de atenção:** Em questões "NÃO", o alvo é o **requisito funcional**. Teste: a frase descreve **o que o sistema faz** (funcional) ou **quão bem/sob que restrição** (não funcional)?

**Revisão rápida:** Funcional = função; não funcional = qualidade ou restrição.

**Fonte:** Fundação Cesgranrio, Petrobras PSP RH 2017.2 (prova de 18/03/2018), Analista de Sistemas Júnior — Processos de Negócio (2018), prova Prova 3, questão 50; gabarito: de espelho (PCI), fornecido pelo usuário; preliminar/definitivo não indicado; anulações não verificadas; não validado contra a banca.

## OFI-000109 — Escolha do modelo de processo: incremental

*Questão oficial — Fundação Cesgranrio, Petrobras PSP RH 2017.2, Prova 3, questão 51.*

**Gabarito: B**

Requisitos ainda incertos, **primeira versão com as funcionalidades mais importantes** e **versões sucessivas mais completas**, com equipe pequena: **modelo incremental**. O **espiral** exige análise de riscos explícita em cada volta, o que o usuário rejeita; o **cascata** exige requisitos fechados.

- **A)** Incorreta. RAD pressupõe ciclos muito curtos, componentes reutilizáveis e equipes maiores, o que não é o caso.
- **B)** Correta. Entregas sucessivas, cada vez mais completas, com equipe pequena: incremental.
- **C)** Incorreta. Cascata exige requisitos definidos antes do desenvolvimento.
- **D)** Incorreta. Espiral depende de análise de riscos em cada iteração, que o usuário recusou.
- **E)** Incorreta. Desenvolvimento baseado em componentes depende de repositório de componentes reutilizáveis.

**Ponto de atenção:** Palavras-chave: **"versões sucessivas e cada vez mais completas"** = incremental. Procure também o que **elimina** os outros modelos (risco recusado elimina o espiral).

**Revisão rápida:** Incremental: entrega por partes, cada vez mais completa.

**Fonte:** Fundação Cesgranrio, Petrobras PSP RH 2017.2 (prova de 18/03/2018), Analista de Sistemas Júnior — Processos de Negócio (2018), prova Prova 3, questão 51; gabarito: de espelho (PCI), fornecido pelo usuário; preliminar/definitivo não indicado; anulações não verificadas; não validado contra a banca.

## OFI-000110 — Engenharia de requisitos: prática da etapa de análise

*Questão oficial — Fundação Cesgranrio, Petrobras PSP RH 2017.2, Prova 3, questão 55.*

**Gabarito: B**

Na **análise**, os requisitos elicitados são **estruturados e modelados**, e os conflitos são resolvidos; **identificar e modelar casos de uso** é prática de análise. Protótipos servem à elicitação e à validação; inspeção de documentos e critérios de aceitação, à validação; registrar regras, à especificação.

- **A)** Incorreta. Protótipos auxiliam a elicitação e a validação.
- **B)** Correta. Identificar e modelar casos de uso organiza e analisa os requisitos.
- **C)** Incorreta. Inspecionar documentos é prática de validação.
- **D)** Incorreta. Critérios de aceitação ligam-se à especificação e à validação.
- **E)** Incorreta. Registrar regras de negócio é parte da especificação.

**Ponto de atenção:** Etapas: **elicitação** (obter), **análise** (modelar, priorizar, negociar), **especificação** (documentar), **validação** (confirmar com o cliente). A fronteira entre análise e especificação pode variar entre autores; o gabarito privilegia a modelagem.

**Revisão rápida:** Análise: modelar e negociar requisitos (casos de uso).

**Fonte:** Fundação Cesgranrio, Petrobras PSP RH 2017.2 (prova de 18/03/2018), Analista de Sistemas Júnior — Processos de Negócio (2018), prova Prova 3, questão 55; gabarito: de espelho (PCI), fornecido pelo usuário; preliminar/definitivo não indicado; anulações não verificadas; não validado contra a banca.

## OFI-000121 — Análise e gerenciamento de requisitos (afirmação FALSA)

*Questão oficial — Fundação Cesgranrio, Petrobras PSP-RH-1/2006, Caderno de Analista de Sistemas Pleno, questão 49.*

**Gabarito: C**

As melhores práticas de engenharia de requisitos são aplicadas pelo **analista/engenheiro de requisitos**, e não pelo **cliente**, que descreve suas necessidades. As demais afirmações estão corretas.

- **A)** Incorreta. Verdadeira: o custo de correção cresce com o tempo.
- **B)** Incorreta. Verdadeira: elicitação identifica; especificação formaliza.
- **C)** Correta. Falsa: quem aplica as práticas é a equipe de engenharia de requisitos.
- **D)** Incorreta. Verdadeira: define o gerenciamento de requisitos (rastreabilidade e controle de mudanças).
- **E)** Incorreta. Verdadeira: mudanças de requisitos têm impacto em prazo, recursos e tecnologia.

**Ponto de atenção:** Em questões "FALSO", procure o **sujeito trocado** (quem faz o quê). A afirmação A é a base do argumento de **shift left**.

**Revisão rápida:** Práticas de requisitos: aplicadas pela equipe técnica.

**Fonte:** Fundação Cesgranrio, Petrobras PSP-RH-1/2006 (aplicação em 07/05/2006), Analista de Sistemas Pleno — Processos (2006), prova Caderno de Analista de Sistemas Pleno (questões 21 a 60), questão 49; gabarito: de espelho (Estude Grátis); recursos não verificados; não validado contra a banca.

## OFI-000122 — Estratégias de teste: caixa-preta, caixa-branca, integração, recuperação, alfa e beta

*Questão oficial — Fundação Cesgranrio, Petrobras PSP-RH-1/2006, Caderno de Analista de Sistemas Pleno, questão 54.*

**Gabarito: D**

O **teste de recuperação** (*recovery testing*) é um **teste de sistema** que força o software a falhar de várias maneiras e verifica se a recuperação ocorre corretamente, de forma automática ou com intervenção humana. As outras alternativas contêm trocas conceituais.

- **A)** Incorreta. Descreve a **caixa-branca** (estrutura de controle, caminho básico) e atribui a ela técnicas de caixa-preta e vice-versa.
- **B)** Incorreta. Atribui à caixa-branca técnicas de **caixa-preta** (particionamento de equivalência, matriz ortogonal), e a define como validação funcional.
- **C)** Incorreta. Descreve o **teste de unidade** como se fosse o de integração.
- **D)** Correta. Define corretamente o teste de recuperação como teste de sistema.
- **E)** Incorreta. O **beta** é feito **no ambiente do cliente**, sem controle do desenvolvedor; e "gama" não é fase padrão descrita assim.

**Ponto de atenção:** Caixa-preta: **funcional** (equivalência, valor-limite, matriz ortogonal). Caixa-branca: **estrutural** (caminho básico, cobertura). Alfa: no desenvolvedor; beta: no cliente, sem controle do desenvolvedor.

**Revisão rápida:** Recuperação: força falhas e verifica o restabelecimento.

**Fonte:** Fundação Cesgranrio, Petrobras PSP-RH-1/2006 (aplicação em 07/05/2006), Analista de Sistemas Pleno — Processos (2006), prova Caderno de Analista de Sistemas Pleno (questões 21 a 60), questão 54; gabarito: de espelho (Estude Grátis); recursos não verificados; não validado contra a banca.

## OFI-000123 — UML 1.4 x UML 2.0: novos diagramas

*Questão oficial — Fundação Cesgranrio, Petrobras PSP-RH-1/2006, Caderno de Analista de Sistemas Pleno, questão 55.*

**Gabarito: A**

A UML 2.0 introduziu, entre os diagramas de **interação**, o de **Visão Geral da Interação** (que mescla atividades com interações) e o de **Tempo** (*timing*, que mostra mudanças de estado ao longo do tempo), além do de **Estrutura de Composição** e do de **Pacotes** como diagrama próprio.

- **A)** Correta. Descreve corretamente os dois novos diagramas de interação.
- **B)** Incorreta. Estereótipos, valores etiquetados e restrições já existiam na UML 1.x; não são novos mecanismos.
- **C)** Incorreta. A afirmação mistura a história de diagramas de estados e não descreve uma substituição de "diagrama de Máquina de Estados de Protocolo" da UML 1.4.
- **D)** Incorreta. O diagrama de Pacotes não foi substituído por uma visão combinada.
- **E)** Incorreta. O diagrama de Componentes continua existindo na UML 2.0; a Estrutura de Composição é um **acréscimo**.

**Ponto de atenção:** UML 2.x: **14 diagramas** (7 estruturais e 7 comportamentais). Novos na 2.0: **Visão Geral da Interação, Tempo, Estrutura de Composição** (e Comunicação, renomeado de Colaboração).

**Revisão rápida:** UML 2.0 acrescentou Visão Geral da Interação e Tempo.

**Fonte:** Fundação Cesgranrio, Petrobras PSP-RH-1/2006 (aplicação em 07/05/2006), Analista de Sistemas Pleno — Processos (2006), prova Caderno de Analista de Sistemas Pleno (questões 21 a 60), questão 55; gabarito: de espelho (Estude Grátis); recursos não verificados; não validado contra a banca.

## OFI-000124 — Projeto de software: encapsulamento, coesão e acoplamento

*Questão oficial — Fundação Cesgranrio, Petroquímica Suape PSP nº 1/2012, Prova 6, questão 34.*

**Gabarito: B**

Um bom projeto **maximiza a coesão** (partes com responsabilidade única e focada) e o **encapsulamento** (ocultação de detalhes internos) e **minimiza o acoplamento** (dependência entre partes). Entre as opções, só B apresenta o par correto na ordem pedida (maximizar encapsulamento, minimizar acoplamento).

- **A)** Incorreta. Minimizar a coesão é indesejável.
- **B)** Correta. Maximizar encapsulamento e minimizar acoplamento: projeto adequado.
- **C)** Incorreta. Maximizar acoplamento e minimizar coesão é o contrário do desejável.
- **D)** Incorreta. Maximizar acoplamento é indesejável.
- **E)** Incorreta. Minimizar encapsulamento é indesejável.

**Ponto de atenção:** **Alta coesão, baixo acoplamento.** A questão não oferece "coesão e acoplamento": a opção B é a única sem erro.

**Revisão rápida:** Maximizar coesão e encapsulamento; minimizar acoplamento.

**Fonte:** Fundação Cesgranrio, Petroquímica Suape PSP nº 1/2012 (22/04/2012), Analista de Sistemas Júnior — Ênfase em Negócio (2012), prova Prova 6, questão 34; gabarito: de espelho (Estude Grátis), após recursos; não validado contra a banca.

## OFI-000125 — Engenharia de requisitos: propósito da validação

*Questão oficial — Fundação Cesgranrio, Petroquímica Suape PSP nº 1/2012, Prova 6, questão 36.*

**Gabarito: B**

A **validação de requisitos** verifica se os requisitos especificados **correspondem às necessidades reais dos usuários** ("o produto certo"), por revisões, protótipos e testes de aceitação. Rastreabilidade (D) e priorização por risco (A) são outras atividades.

- **A)** Incorreta. Priorização por risco é atividade de gerenciamento, e não propósito da validação.
- **B)** Correta. Conformidade com as necessidades dos usuários é o propósito da validação.
- **C)** Incorreta. Aumentar a abstração na comunicação não é o propósito.
- **D)** Incorreta. Rastrear requisitos é atividade de gerenciamento de requisitos.
- **E)** Incorreta. Reúso de requisitos voláteis não é propósito da validação.

**Ponto de atenção:** Gabarito alterado após recursos (a alternativa indicada é B). **Validação** = necessidades do usuário; **verificação** = conformidade com a especificação.

**Revisão rápida:** Validação de requisitos: atendem ao que o usuário precisa?

**Fonte:** Fundação Cesgranrio, Petroquímica Suape PSP nº 1/2012 (22/04/2012), Analista de Sistemas Júnior — Ênfase em Negócio (2012), prova Prova 6, questão 36; gabarito: de espelho (Estude Grátis), após recursos; não validado contra a banca.

## OFI-000126 — Casos de uso, decomposição funcional e classes conceituais (asserção e razão)

*Questão oficial — Fundação Cesgranrio, Petroquímica Suape PSP nº 1/2012, Prova 6, questão 37.*

**Gabarito: E**

Segundo o gabarito, as duas são falsas: a **decomposição funcional** é característica do paradigma **estruturado**; casos de uso descrevem **interações ator-sistema** (visão externa), e não uma decomposição funcional. Já o **modelo de classes conceituais** representa conceitos do **domínio** (atributos e relacionamentos), sem **métodos** resultantes de decomposição funcional.

- **A)** Incorreta. A primeira é falsa; logo a segunda não pode justificá-la.
- **B)** Incorreta. A primeira é falsa.
- **C)** Incorreta. A segunda é falsa: classes conceituais não resultam de decomposição funcional.
- **D)** Incorreta. A primeira é falsa (casos de uso não são decomposição funcional).
- **E)** Correta. As duas afirmações são falsas.

**Ponto de atenção:** Em asserção e razão, avalie **cada afirmação sozinha** antes de julgar a relação. Casos de uso ≠ decomposição funcional (estruturado); classes conceituais ≠ classes de projeto com métodos.

**Revisão rápida:** Caso de uso: interação ator–sistema; classe conceitual: conceito do domínio.

**Fonte:** Fundação Cesgranrio, Petroquímica Suape PSP nº 1/2012 (22/04/2012), Analista de Sistemas Júnior — Ênfase em Negócio (2012), prova Prova 6, questão 37; gabarito: de espelho (Estude Grátis), após recursos; não validado contra a banca.
