# Questões oficiais — m01-arquitetura-dados — questões (T04 — Transpetro 2023 (Prova 6) e 2018 (Prova 15))

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

## OFI-000042 — Data warehouse: Data Staging Area (ETL)

*Questão oficial — Fundação Cesgranrio, Transpetro PSP RH 2018.1, Prova 15, questão 22.* · item 1.19 · Média

Os sistemas de data warehouse diferem de várias formas dos sistemas transacionais das empresas, como, por exemplo, em seu modelo de dados. Para transferir e transformar os dados dos sistemas transacionais para os sistemas de data warehousing, é comum utilizar, como estratégia, a existência de uma camada especial da arquitetura conhecida como

(A) Data Marts
(B) Data Staging Area
(C) Dimensional Model Area
(D) Presentation Area
(E) Living Sample Area

## OFI-000043 — SQL: fornecedores com venda em intervalo de datas

*Questão oficial — Fundação Cesgranrio, Transpetro PSP RH 2018.1, Prova 15, questão 38.* · item 1.10 · Difícil

O banco de dados de uma empresa contém as tabelas a seguir, que são usadas para controlar as compras de materiais de escritório.

```sql
CREATE TABLE FORNECEDOR (
  ID_FORN NUMBER(5) NOT NULL, NOME VARCHAR2(100) NOT NULL,
  TEL1 CHAR(15) NOT NULL, TEL2 CHAR(15), TEL3 CHAR(15),
  CONSTRAINT FORNECEDOR_PK PRIMARY KEY (ID_FORN));
CREATE TABLE MATERIAL (
  ID_MATER NUMBER(5) NOT NULL, DESCR VARCHAR2(100) NOT NULL,
  CONSTRAINT MATERIAL_PK PRIMARY KEY (ID_MATER));
CREATE TABLE VENDA (
  ID_F NUMBER(5) NOT NULL, ID_M NUMBER(5) NOT NULL,
  DATA DATE NOT NULL, PRECO NUMBER(9,2) NOT NULL, QTD NUMBER(5) NOT NULL,
  CONSTRAINT VENDA_PK PRIMARY KEY (ID_F, ID_M, DATA),
  CONSTRAINT VENDA_FK1 FOREIGN KEY (ID_F) REFERENCES FORNECEDOR (ID_FORN),
  CONSTRAINT VENDA_FK2 FOREIGN KEY (ID_M) REFERENCES MATERIAL (ID_MATER));
```

Sabe-se que um fornecedor pode vender muitos materiais, e um material pode ser vendido por vários fornecedores.

Considerando as tabelas e as informações dadas, qual consulta exibe o número de identificação e o nome dos fornecedores que realizaram pelo menos uma venda entre os dias 05/01/2018 (inclusive) e 10/01/2018 (inclusive)?

(A) ```sql
SELECT ID_FORN, NOME
FROM FORNECEDOR F, VENDA V
WHERE F.ID_FORN=ID_F AND DATA >= '05/01/2018'
INTERSECT
SELECT ID_FORN, NOME
FROM FORNECEDOR F, VENDA V
WHERE F.ID_FORN=ID_F AND DATA <= '10/01/2018'
```
(B) ```sql
SELECT ID_FORN, NOME
FROM FORNECEDOR F
WHERE (SELECT COUNT(*) FROM VENDA
       WHERE F.ID_FORN=ID_F AND
       DATA BETWEEN '05/01/2018' AND '10/01/2018') > 0
```
(C) ```sql
SELECT UNIQUE ID_FORN, NOME
FROM FORNECEDOR F LEFT JOIN VENDA V ON F.ID_FORN = V.ID_F
WHERE DATA >= '05/01/2018' OR DATA <= '10/01/2018'
```
(D) ```sql
SELECT ID_FORN, NOME
FROM FORNECEDOR F, VENDA V
WHERE F.ID_FORN=ID_F AND DATA >= '05/01/2018'
UNION
SELECT ID_FORN, NOME
FROM FORNECEDOR F, VENDA V
WHERE F.ID_FORN=ID_F AND DATA <= '10/01/2018'
```
(E) ```sql
SELECT ID_FORN, NOME
FROM FORNECEDOR F
WHERE ID_FORN NOT IN (SELECT ID_F FROM VENDA
                       WHERE DATA < '05/01/2018' OR DATA > '10/01/2018')
```

## OFI-000067 — Modelo relacional: chaves primária e estrangeira

*Questão oficial — Fundação Cesgranrio, Caixa Econômica Federal, Edital 1/2021/NM, Caderno de Tecnologia da Informação, questão 38.* · item 1.3 · Média

Leve em conta o conjunto de tabelas a seguir.

CLIENTE (agencia, conta, CPF, nome, endereco, telefone, titular), onde titular = {1º, 2º, 3º, 4º, 5º}
CONTA_CORRENTE (agencia, conta, data-de-abertura, saldo)
MOVIMENTACAO (agencia, conta, data, hora, minuto, valor), onde data, hora e minuto são de uma movimentação (crédito ou débito) realizada

Considerando-se o modelo relacional de dados, composto apenas pelas tabelas CLIENTE, CONTA_CORRENTE e MOVIMENTACAO, verifica-se que

(A) não é necessário ter os atributos "hora" e "minuto" como parte da chave primária da tabela MOVIMENTACAO.
(B) o atributo "CPF" é uma chave estrangeira na tabela CLIENTE.
(C) o atributo "data-de-abertura" deveria fazer parte da chave primária da tabela CONTA_CORRENTE.
(D) o atributo "titular" deveria fazer parte da chave primária da tabela CLIENTE.
(E) os atributos "agencia" e "conta" na tabela CLIENTE formam uma chave estrangeira.

## OFI-000068 — Metadados em SGBD: uso pelo próprio sistema

*Questão oficial — Fundação Cesgranrio, Caixa Econômica Federal, Edital 1/2021/NM, Caderno de Tecnologia da Informação, questão 39.* · item 1.6 · Média

Um sistema gerenciador de banco de dados utiliza metadados, persistidos em bancos de dados, para

(A) avaliar o seu próprio desempenho, considerando metas pré-estabelecidas pelo administrador do banco de dados.
(B) decidir que páginas de dados sujas na sua cache precisam ser persistidas em disco.
(C) implementar o isolamento entre transações concorrentes.
(D) permitir a restauração de um estado íntegro do banco de dados, em caso de falha.
(E) validar comandos SQL informados por um usuário.

## OFI-000073 — SGBD distribuído federado

*Questão oficial — Fundação Cesgranrio, Caixa Econômica Federal, Edital 1/2021/NM, Caderno de Tecnologia da Informação, questão 58.* · item 1.13 · Média

Os Sistemas de Gerenciamento de Banco de Dados (SGBD) foram afetados pelas demandas trazidas pelo Big Data. Uma das formas de tratar essas demandas são os Sistemas de Gerenciamento de Banco de Dados Distribuídos (SGBDD), nos quais os dados podem estar armazenados em vários servidores, conectados por uma rede de computadores.
Um SGBDD que usa softwares middleware, de forma que os SGBDs que o compõem estejam fracamente acoplados, é conhecido como

(A) Baseado em Grafos
(B) Hierárquico
(C) Federado
(D) Orientado a objetos
(E) NoSQL

## OFI-000100 — Modelo dimensional: medidas aditivas

*Questão oficial — Fundação Cesgranrio, BNDES, Edital 1/2024, Prova 3, questão 65.* · item 1.7 · Difícil

Um dos indicadores mais utilizados para avaliação de políticas públicas em municípios brasileiros na área da saúde é a taxa de mortalidade infantil. Para essas políticas, também é importante acompanhar a quantidade de leitos hospitalares disponíveis. Considere três tabelas que representam um modelo dimensional:

MUNICÍPIO (ID-município, @UF, @mês, taxa-mortalidade-infantil, qtd-leitos)
TEMPO (ID-mês, mês-calendário, ano-calendário)
ESTADO (sigla, nome, região)

Esse modelo dimensional permite apresentar de um estado da federação, em um dos meses cadastrados, a

(A) divisão da quantidade de leitos pela taxa de mortalidade infantil.
(B) divisão da taxa de mortalidade infantil pela quantidade de leitos.
(C) média da taxa de mortalidade infantil.
(D) soma da taxa de mortalidade infantil.
(E) soma da quantidade de leitos.

## OFI-000101 — Data lake: metadados

*Questão oficial — Fundação Cesgranrio, BNDES, Edital 1/2024, Prova 3, questão 66.* · item 1.22 · Média

Um data lake é um repositório que pode armazenar grandes volumes de dados e de conjuntos de dados, sejam eles estruturados, semiestruturados ou não estruturados.
Um dos aspectos-chave de um data lake são os seus metadados, que

(A) devem seguir o padrão American National Standards Institute (ANSI) já consagrado para metadados de data lakes.
(B) descrevem completa e corretamente todos os dados persistidos.
(C) precisam ser definidos antes da ingestão de dados.
(D) podem ser consultados por meio do "information schema".
(E) podem ser parcialmente descobertos de forma automática.

## OFI-000102 — Governança de dados: monitoramento da qualidade

*Questão oficial — Fundação Cesgranrio, BNDES, Edital 1/2024, Prova 3, questão 67.* · item 1.21 · Média

Um dos aspectos que estão no escopo da governança de dados é a governança sobre a qualidade de dados.
Uma das características do monitoramento da qualidade dos dados utilizados por uma organização é que esse monitoramento

(A) ajuda na interoperabilidade de dados.
(B) deve ser realizado apenas quando houver evidências de que alguma tomada de decisão com base em dados foi tomada incorretamente.
(C) permite melhorar o controle do acesso aos dados.
(D) pode ser realizado apenas a cada dez anos.
(E) requer a produção de indicadores, de modo a orientar a definição e a implementação de ações corretivas.

## OFI-000103 — DER: especialização total e sobreposta

*Questão oficial — Fundação Cesgranrio, BNDES, Edital 1/2024, Prova 3, questão 68.* · item 1.1 · Média

Considere um modelo conceitual representado por meio de um Diagrama de Entidades e Relacionamentos (DER) em que há uma entidade denominada PRÉDIO. Nesse contexto, um prédio pode ser de uso exclusivamente residencial, exclusivamente comercial, de uso misto (residencial e comercial), e apenas isso. No DER, a entidade PRÉDIO foi corretamente especializada em duas outras: RESIDENCIAL e COMERCIAL.
Sendo assim, nesse DER, as duas especializações são

(A) totais e sobrepostas
(B) totais e parciais
(C) totais e disjuntas
(D) parciais e sobrepostas
(E) parciais e disjuntas

## OFI-000104 — Nível de isolamento SERIALIZABLE

*Questão oficial — Fundação Cesgranrio, BNDES, Edital 1/2024, Prova 3, questão 69.* · item 1.14 · Média

No contexto de um Sistema Gerenciador de Banco de Dados (SGBD), é possível definir o nível de isolamento de uma transação por meio do comando SET TRANSACTION ISOLATION LEVEL. Há vários níveis de isolamento possíveis.
Entre tais níveis encontra-se o SERIALIZABLE, que

(A) configura o SGBD para modo de leitura de todas as suas tabelas.
(B) define que apenas uma transação será executada por vez pelo SGBD.
(C) garante o mais alto nível possível de isolamento de uma transação.
(D) permite a serialização de objetos JSON em uma transação.
(E) prepara uma transação W para enviar dados a outra transação Y.

## OFI-000105 — DDL: cláusula CHECK

*Questão oficial — Fundação Cesgranrio, BNDES, Edital 1/2024, Prova 3, questão 70.* · item 1.11 · Média

No momento da criação de uma tabela em um Sistema Gerenciador de Banco de Dados (SGBD), por meio do comando CREATE TABLE, definem-se regras para o controle de integridade e para a garantia de qualidade dos dados dessa tabela. Considere que W e Y são duas tabelas. A é um atributo de W, e B é um atributo de Y. Foi criada corretamente uma cláusula CHECK no atributo A.
Essa cláusula permite verificar se o atributo A

(A) tem valor único em todas as linhas da tabela W.
(B) tem valor maior ou igual a zero.
(C) tem valor existente em uma ou mais linhas da tabela Y na coluna B.
(D) inviabiliza o acesso a alguma linha da tabela Y.
(E) está preenchido com algum valor ou não.
