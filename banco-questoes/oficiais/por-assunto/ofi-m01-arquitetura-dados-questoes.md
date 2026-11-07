# Questões oficiais — m01-arquitetura-dados — questões (T04 — Transpetro 2023 (Prova 6))

Sem gabarito; o comentário está no arquivo `gabaritos-comentados`.

## OFI-000001 — Álgebra relacional: operador unário

*Questão oficial — Fundação Cesgranrio, Transpetro PSP/Terra 002/2023, Prova 6, questão 26.* · item 1.3 · Fácil

A Álgebra Relacional possui vários operadores binários.
Dentre os operadores listados abaixo, o único NÃO binário é a(o)

(A) divisão
(B) projeção
(C) junção natural
(D) junção externa esquerda
(E) produto cartesiano

## OFI-000002 — Desempenho de banco de dados: desnormalização controlada

*Questão oficial — Fundação Cesgranrio, Transpetro PSP/Terra 002/2023, Prova 6, questão 45.* · item 1.17 · Média

Para melhorar o desempenho de um banco de dados, um Administrador de Banco de Dados (DBA) pode realizar uma série de ações.

Uma ação que pode contribuir significativamente para a otimização do desempenho de um sistema de banco de dados relacionais é

(A) executar todas as transações de maneira sequencial ou serial, pois é a única forma de garantir a correção da execução concorrente.
(B) desnormalizar as tabelas envolvidas em operações de junção interna frequentes.
(C) substituir todos os SELECT por SELECT DISTINCT, evitando repetições.
(D) usar sempre a cláusula ORDER BY para ordenar os resultados exibidos.
(E) fragmentar os índices existentes nas colunas mais acessadas.

## OFI-000003 — Bancos de documentos x relacionais x grafos

*Questão oficial — Fundação Cesgranrio, Transpetro PSP/Terra 002/2023, Prova 6, questão 46.* · item 1.23 · Fácil

Cada tipo de sistema de gerenciamento de banco de dados — relacional, orientado a documentos e orientado a grafos — possui características únicas que os tornam mais adequados para certos tipos de aplicações.

A esse respeito, é uma característica típica dos bancos de dados orientados a documentos

(A) utilizar a linguagem SQL para realização de consultas, sendo estruturados em relações matemáticas.
(B) utilizar a estrutura de vértices e arestas para representar as entidades e os relacionamentos entre elas, permitindo uma navegação eficiente entre os nós relacionados.
(C) ser otimizados para consultas que exploram as relações entre entidades, por meio de nós e arestas.
(D) armazenar os dados no formato JSON ou BSON, permitindo que dados semiestruturados sejam armazenados e consultados de forma flexível.
(E) enfatizar, prioritariamente, a normalização de dados, segregando dados relacionados em tabelas distintas interligadas através de chaves estrangeiras.

## OFI-000004 — Banco de grafos: consulta em Cypher

*Questão oficial — Fundação Cesgranrio, Transpetro PSP/Terra 002/2023, Prova 6, questão 48.* · item 1.18 · Média

Considere um banco de dados orientado a grafos que contém nós que representam Pessoas e nós que representam relacionamentos AMIGO_DE, ligando pessoas amigas entre si.

Qual das consultas, em linguagem Cypher, retorna todos os amigos de uma pessoa chamada Alice?

(A) `MATCH (p:Pessoa)-[:AMIGO_DE]->(amigo) WHERE p.nome = 'Alice' RETURN amigo`
(B) `MATCH (p:Pessoa)<-[:AMIGO_DE]-(amigo) WHERE p.nome = 'Alice' RETURN amigo`
(C) `MATCH (p:Pessoa {nome: 'Alice'})-[:INIMIGO_DE]->(inimigo) RETURN inimigo`
(D) `SELECT * FROM Pessoas WHERE nome = 'Alice'`
(E) `FIND (p:Pessoa {nome: 'Alice'})-[:AMIGO_DE]->(amigo) RETURN amigo`

## OFI-000005 — SQL: autojunção em tabela de hierarquia

*Questão oficial — Fundação Cesgranrio, Transpetro PSP/Terra 002/2023, Prova 6, questão 49.* · item 1.10 · Média

Considere a tabela Familia, apresentada abaixo, que possui as colunas Pai e Filho e uma instância exemplo que permite ilustrar as informações contidas nessa tabela.

| Pai | Filho |
|---|---|
| Andre | Carlos |
| Andre | Claudio |
| Bruno | Diego |
| Bruno | Daniel |
| Carlos | Eriko |
| Carlos | Fabio |
| Daniel | Gustavo |
| Diego | Heleno |
| Eriko | Isidoro |
| Fabio | João |

Uma consulta SQL feita para exibir os nomes dos netos de Carlos retorna os nomes Isidoro e João.

A expressão, em linguagem SQL, dessa consulta é

(A) ```sql
SELECT f2.filho
FROM Familia f1 INNER JOIN Familia f2 ON f1.filho = f2.pai
WHERE f1.pai = 'Carlos';
```
(B) ```sql
SELECT f1.pai
FROM Familia f1 INNER JOIN Familia f2 ON f1.pai = f2.filho
WHERE f1.filho = 'Carlos';
```
(C) ```sql
SELECT f1.pai
FROM Familia f1 INNER JOIN Familia f2 ON f1.filho = f2.pai
WHERE f1.pai = 'Carlos';
```
(D) ```sql
SELECT f2.filho
FROM Familia f1 INNER JOIN Familia f2 ON f1.pai = f2.pai
WHERE f1.pai = 'Carlos';
```
(E) ```sql
SELECT f2.filho
FROM Familia f1 INNER JOIN Familia f2 ON f1.filho = f2.filho
WHERE f1.pai = 'Carlos';
```

## OFI-000006 — Metadados em SGBD relacional

*Questão oficial — Fundação Cesgranrio, Transpetro PSP/Terra 002/2023, Prova 6, questão 50.* · item 1.6 · Fácil

Em um Sistema de Gerenciamento de Banco de Dados (SGBD) relacional, um banco de metadados é um repositório especializado que armazena informações sobre os dados que estão armazenados no banco de dados propriamente dito. Em geral, os metadados ajudam os desenvolvedores, os administradores de banco de dados e outras partes interessadas a entender, a gerenciar e a trabalhar eficientemente com o banco de dados.

Dentre as informações típicas que são encontradas nos metadados de um banco de dados relacional, está(ão)

(A) a quantidade total de vendas realizadas, registrada pelas transações.
(B) as senhas de usuários e suas permissões de sistema operacional.
(C) o código-fonte dos aplicativos que acessam o banco de dados.
(D) os backups dos dados armazenados nas tabelas.
(E) os esquemas de tabelas, incluindo os tipos de dados e as restrições de colunas.

## OFI-000007 — SGBD: otimizador de consultas (alternativa NÃO)

*Questão oficial — Fundação Cesgranrio, Transpetro PSP/Terra 002/2023, Prova 6, questão 51.* · item 1.13 · Média

Em um Sistema Gerenciador de Banco de Dados Relacional (SGBD-R), o otimizador de consultas é um componente que possui uma série de tarefas e de atividades cruciais para assegurar que as consultas sejam processadas de maneira eficiente.

NÃO representa uma funcionalidade típica do otimizador de consultas

(A) escolher o plano de execução mais eficiente para uma consulta, a partir de vários planos possíveis.
(B) escolher entre diferentes métodos de acesso a dados (por exemplo, varredura sequencial, uso de índice) para processar uma consulta.
(C) utilizar estatísticas sobre os dados armazenados para avaliar a seletividade de diferentes predicados em uma consulta.
(D) ser responsável por criar novas tabelas no banco de dados, com base nas consultas mais realizadas.
(E) avaliar frequentemente diferentes estratégias de junção para decidir a ordem em que as relações são acessadas e combinadas.

## OFI-000008 — Data lakes e Big Data

*Questão oficial — Fundação Cesgranrio, Transpetro PSP/Terra 002/2023, Prova 6, questão 52.* · item 1.22 · Média

A respeito do uso de Data Lakes como solução para o gerenciamento e análise de Big Data, constata-se que eles

(A) convertem dados não estruturados em estruturados durante o processo de ingestão.
(B) permitem o armazenamento de dados em formatos estruturados, semiestruturados e não estruturados, oferecendo flexibilidade na análise e no processamento de diferentes tipos de dados.
(C) são geralmente implementados usando apenas sistemas de arquivos convencionais devido à sua eficiência em armazenar grandes volumes de dados.
(D) são adequados apenas para armazenar grandes volumes de dados não estruturados.
(E) são inadequados em soluções de Big Data por não suportarem alguns tipos de dados.

## OFI-000009 — Propriedades ACID

*Questão oficial — Fundação Cesgranrio, Transpetro PSP/Terra 002/2023, Prova 6, questão 53.* · item 1.14 · Fácil

As propriedades ACID são cruciais para garantir a confiabilidade das transações em um Sistema Gerenciador de Banco de Dados Relacional (SGBD-R). Cada letra da sigla ACID refere-se a uma propriedade específica.

A descrição das quatro propriedades ACID é a seguinte:

(A) Atomicidade: o banco de dados deve permanecer em um estado consistente após a transação. Consistência: uma transação é dividida em várias subtransações menores. Isolamento: os resultados de uma transação são permanentes. Durabilidade: as transações simultâneas são isoladas umas das outras.
(B) Atomicidade: uma transação é dividida em várias subtransações menores. Consistência: o banco de dados não necessita manter a integridade após cada transação. Isolamento: as transações podem ser misturadas entre si. Durabilidade: os resultados de uma transação podem ser desfeitos quando necessário.
(C) Atomicidade: uma transação deve ser tratada como uma única unidade, que é executada completamente ou não é executada de todo. Consistência: o banco de dados deve permanecer em um estado consistente após a transação. Isolamento: as transações simultâneas são isoladas umas das outras. Durabilidade: os efeitos de uma transação executada com sucesso são permanentes e persistem mesmo em caso de falha do sistema.
(D) Atomicidade: as transações simultâneas são isoladas umas das outras. Consistência: uma transação deve ser tratada como uma única unidade, que é executada completamente ou não é executada de todo. Isolamento: o banco de dados deve permanecer em um estado consistente após a transação. Durabilidade: uma transação é dividida em várias subtransações menores.
(E) Atomicidade: os resultados de uma transação são permanentes. Consistência: as transações simultâneas são isoladas umas das outras. Isolamento: uma transação deve ser tratada como uma única unidade, que é executada completamente ou não é executada de todo. Durabilidade: o banco de dados deve permanecer em um estado consistente após a transação.

## OFI-000010 — Modelagem conceitual

*Questão oficial — Fundação Cesgranrio, Transpetro PSP/Terra 002/2023, Prova 6, questão 63.* · item 1.1 · Fácil

A modelagem de dados é uma etapa importante e essencial em qualquer projeto de desenvolvimento ou de manutenção de software.

Dentre as modelagens utilizadas em projetos de banco de dados, está a modelagem conceitual, que

(A) descreve detalhes técnicos de implementação, como índices e partições de tabelas.
(B) envolve a otimização de consultas e a escolha de índices apropriados para melhorar o desempenho.
(C) prioriza o projeto da estrutura física das tabelas e dos relacionamentos no banco de dados.
(D) é uma representação visual dos detalhes internos de armazenamento de dados em disco.
(E) é independente do Sistema de Gerenciamento de Banco de Dados (SGBD), envolvendo a definição de entidades, de atributos e de relacionamentos.

## OFI-000011 — Normalização: objetivo

*Questão oficial — Fundação Cesgranrio, Transpetro PSP/Terra 002/2023, Prova 6, questão 64.* · item 1.4 · Fácil

A normalização é um processo muito utilizado na organização de bancos de dados.

A esse respeito, o objetivo principal da normalização das estruturas de dados em bancos de dados relacionais é

(A) eliminar as duplicações de dados e garantir que cada informação seja armazenada em uma única tabela.
(B) aumentar a redundância dos dados, garantindo que informações essenciais sejam armazenadas em várias tabelas.
(C) reduzir a quantidade de dados armazenados no banco de dados, resultando em uma economia de espaço de armazenamento.
(D) simplificar as consultas complexas e otimizar a recuperação de informações do banco de dados, resultando em um melhor desempenho.
(E) criar uma representação visual da estrutura física dos dados no disco, facilitando o acesso direto e rápido às informações armazenadas.
