# Questões — Módulo M01: Arquitetura de Dados (sem gabarito)

## Identificação
- Concurso: Processo Seletivo Público TRANSPETRO 2026.4 (Edital nº 04/2026)
- Ênfase: 5 — Análise de Sistemas: Processos de Negócios
- Banca: Fundação Cesgranrio
- Módulo: M01 — Arquitetura de Dados
- Total: 41 questões; status `validada` ou `em_revisao` (indicado em cada questão)
- Gerado em 2026-11-09 por `tools/build_notebooklm.py` a partir de `banco-questoes/`


### AUT-000001 — item 1.1 — dificuldade facil
*Questão autoral — estilo Cesgranrio (criada pelo projeto; não é questão aplicada pela banca) · status: validada*

Uma equipe de TI documenta um novo sistema de gestão de manutenção. Em uma oficina com a área de negócio, definiu-se que "Equipamento" e "Ordem de Serviço" são entidades, que um equipamento pode ter várias ordens de serviço e que cada ordem de serviço se refere a um único equipamento. Nada foi decidido sobre o SGBD, os tipos de dados ou os índices a serem usados.

O produto dessa oficina corresponde, quanto ao nível de abstração, ao modelo

A) físico, porque descreve os relacionamentos entre as tabelas que serão criadas no banco de dados do sistema.
B) lógico, porque traduz as entidades em tabelas, com chaves primárias e estrangeiras já definidas para o banco relacional.
C) conceitual, porque representa entidades e relacionamentos do negócio, independentemente da tecnologia de banco de dados.
D) dimensional, porque separa as entidades em fatos e dimensões para fins de análise.
E) de implementação, porque especifica os tipos de dados e os índices do SGBD escolhido.

### AUT-000002 — item 1.4 — dificuldade media
*Questão autoral — estilo Cesgranrio (criada pelo projeto; não é questão aplicada pela banca) · status: validada*

Considere a relação ITEM_PEDIDO(id_pedido, id_produto, nome_produto, quantidade, preco_negociado), cuja chave primária é composta por (id_pedido, id_produto). Sabe-se que:

• (id_pedido, id_produto) determina quantidade e preco_negociado;
• id_produto determina nome_produto;
• todos os atributos são atômicos.

É correto afirmar que a relação

A) está em 2FN, mas não em 3FN, pois quantidade e preco_negociado dependem transitivamente da chave primária, exigindo nova decomposição.
B) está em 3FN, pois todos os atributos são atômicos e dependem da chave primária.
C) não está em 1FN, pois a chave primária é composta por mais de um atributo.
D) está em 1FN, mas não em 2FN, pois preco_negociado depende apenas de id_pedido; a solução é criar uma relação PEDIDO.
E) está em 1FN, mas não em 2FN, pois nome_produto depende de parte da chave; deve-se criar PRODUTO(id_produto, nome_produto).

### AUT-000003 — item 1.5 — dificuldade media
*Questão autoral — estilo Cesgranrio (criada pelo projeto; não é questão aplicada pela banca) · status: validada*

Em um banco relacional, as tabelas abaixo foram criadas, e os dados foram inseridos:

CREATE TABLE departamento (id INTEGER PRIMARY KEY, nome VARCHAR(30));
CREATE TABLE empregado (
  id INTEGER PRIMARY KEY, nome VARCHAR(30),
  id_depto INTEGER REFERENCES departamento(id)
    ON DELETE RESTRICT ON UPDATE CASCADE);

departamento: (1, 'Manutenção'), (2, 'Logística')
empregado: (10, 'Ana', 1), (11, 'Bruno', 1), (12, 'Carla', 2)

Assuma que a verificação de integridade referencial está ativa e que cada comando abaixo é executado, na sequência, em uma transação própria:

(1) UPDATE departamento SET id = 5 WHERE id = 1;
(2) DELETE FROM departamento WHERE id = 5;
(3) INSERT INTO empregado VALUES (13, 'Davi', 7);

Após a execução, o resultado correto é:

A) O comando (1) é rejeitado, pois há empregados que referenciam o departamento 1; o comando (2) exclui o departamento e seus empregados; o comando (3) é rejeitado.
B) O comando (1) é aceito e altera para 5 o id_depto de Ana e de Bruno; os comandos (2) e (3) são rejeitados, e o departamento 5 permanece.
C) O comando (1) é aceito, mas Ana e Bruno permanecem com id_depto = 1, que o SGBD mantém como valor órfão; os comandos (2) e (3) são rejeitados.
D) O comando (1) é aceito e propagado; o comando (2) é aceito e exclui Ana e Bruno em cascata; o comando (3) é rejeitado.
E) O comando (1) é aceito e propagado; o comando (2) é aceito e deixa nulo o id_depto de Ana e de Bruno; o comando (3) é aceito, com aviso de valor órfão.

### AUT-000004 — item 1.10 — dificuldade dificil
*Questão autoral — estilo Cesgranrio (criada pelo projeto; não é questão aplicada pela banca) · status: validada*

As tabelas a seguir pertencem a um sistema de manutenção.

unidade (id, nome): (1, Norte), (2, Sul), (3, Leste), (4, Oeste)

ordem_servico (id, id_unidade, custo):
(1, 1, 100), (2, 1, 300), (3, 2, 200), (4, 3, 50), (5, 3, 150), (6, 3, 100), (7, 1, NULL)

A consulta abaixo é executada:

SELECT u.nome, COUNT(o.id) AS qtd, COALESCE(SUM(o.custo), 0) AS total
FROM unidade u
LEFT JOIN ordem_servico o ON o.id_unidade = u.id
GROUP BY u.nome
HAVING COUNT(o.id) < 3
ORDER BY u.nome;

O resultado produzido, na forma (nome, qtd, total), é

A) (Oeste, 0, 0) e (Sul, 1, 200)
B) (Sul, 1, 200)
C) (Oeste, 1, 0) e (Sul, 1, 200)
D) (Norte, 2, 400) e (Sul, 1, 200)
E) (Leste, 3, 300) e (Norte, 3, 400)

### AUT-000005 — item 1.14 — dificuldade facil
*Questão autoral — estilo Cesgranrio (criada pelo projeto; não é questão aplicada pela banca) · status: validada*

Em uma transferência bancária, o sistema debita R$ 500 da conta A e, antes de creditar a conta B, o servidor de banco de dados falha. Após a reinicialização, o SGBD desfaz o débito, e o saldo da conta A volta ao valor original. Em outra transferência, concluída com COMMIT, ocorre uma queda de energia logo em seguida e, após a recuperação, a transferência continua registrada.

As garantias demonstradas nessas duas situações são, respectivamente,

A) consistência e isolamento.
B) isolamento e durabilidade.
C) durabilidade e atomicidade.
D) atomicidade e durabilidade.
E) atomicidade e consistência.

### AUT-000006 — item 1.18 — dificuldade media
*Questão autoral — estilo Cesgranrio (criada pelo projeto; não é questão aplicada pela banca) · status: validada*

Uma empresa pretende identificar, a partir de milhões de registros, quais colaboradores estão a até três conexões de distância de um especialista em segurança, percorrendo relações como "trabalhou com", "é gerente de" e "participou do projeto". As consultas precisam percorrer relacionamentos em profundidade variável com bom desempenho.

O tipo de banco de dados mais adequado a esse requisito é o

A) colunar de famílias de colunas, pois armazena grandes volumes de dados esparsos em famílias de colunas.
B) orientado a grafos, pois representa entidades como nós e relacionamentos como arestas.
C) orientado a documentos, pois armazena os dados de cada colaborador em documentos aninhados, lidos em bloco com baixa latência.
D) de chave-valor, pois oferece acesso por chave com latência muito baixa.
E) multidimensional, pois organiza os dados em cubos com dimensões e hierarquias para análise.

### AUT-000007 — item 1.19 — dificuldade media
*Questão autoral — estilo Cesgranrio (criada pelo projeto; não é questão aplicada pela banca) · status: validada*

Em uma carga noturna, os dados de três sistemas de origem são extraídos e gravados, sem alterações, em uma área de preparação dentro do próprio data warehouse. Somente depois, scripts SQL executados no servidor do data warehouse padronizam formatos, eliminam duplicidades e consolidam os dados nas tabelas finais.

Essa estratégia de integração é denominada

A) ETL clássico, pois a transformação ocorre em um servidor de integração dedicado, antes da carga no destino final.
B) replicação síncrona, pois mantém uma cópia idêntica dos sistemas de origem.
C) ELT, pois os dados são carregados primeiro no destino e transformados depois, usando seu poder de processamento.
D) transferência de arquivos, pois o intercâmbio entre os sistemas não envolve nenhuma transformação.
E) virtualização de dados, pois as consultas são executadas diretamente nas fontes, sem cópia dos dados.

### AUT-000008 — item 1.7 — dificuldade dificil
*Questão autoral — estilo Cesgranrio (criada pelo projeto; não é questão aplicada pela banca) · status: validada*

Um data warehouse possui a tabela fato FATO_ESTOQUE_DIARIO, com uma linha por produto, por depósito e por dia (um retrato do estoque ao final de cada dia). As dimensões são Data, Depósito e Produto, e a medida é saldo_quantidade.

Sobre essa medida e a tabela fato, é correto afirmar que

A) saldo_quantidade é aditiva e pode ser somada em todas as dimensões, inclusive ao longo do tempo.
B) saldo_quantidade é não aditiva, pois não pode ser somada em nenhuma dimensão.
C) somar saldo_quantidade de todos os dias de um mês fornece o estoque mensal, desde que a soma seja feita separadamente por depósito.
D) o saldo deveria ser armazenado na dimensão Produto, pois varia por produto, e não na tabela fato.
E) saldo_quantidade é semiaditiva: pode ser somada entre depósitos e produtos em uma mesma data, mas não ao longo do tempo.

### AUT-000009 — item 1.21 — dificuldade facil
*Questão autoral — estilo Cesgranrio (criada pelo projeto; não é questão aplicada pela banca) · status: validada*

Em um programa de gestão de dados mestres e de referência, a distinção entre as categorias de dados orienta as responsabilidades e as ferramentas. Qual das opções a seguir exemplifica um dado de referência?

A) A lista de status permitidos de uma ordem de serviço (aberta, em execução, concluída), com códigos padronizados.
B) O cadastro do equipamento P-101, com fabricante, localização, data de instalação e responsável técnico.
C) O registro da ordem de serviço nº 20260315, com data de execução, horas trabalhadas e peças utilizadas.
D) A informação de que a coluna "status" é do tipo CHAR(1), não aceita nulos e admite apenas os valores A, E e C.
E) O arquivo de registro (log) com os acessos dos usuários ao sistema de manutenção no último mês.

### AUT-000010 — item 1.17 — dificuldade media
*Questão autoral — estilo Cesgranrio (criada pelo projeto; não é questão aplicada pela banca) · status: validada*

A tabela equipamento possui milhões de linhas e um índice B-tree sobre a coluna tag. A consulta abaixo, executada com muita frequência, está lenta, e o plano de execução mostra varredura completa da tabela:

SELECT * FROM equipamento WHERE UPPER(tag) = 'P-101';

Considere um SGBD que permite índices sobre expressões. A ação mais adequada para melhorar o desempenho, sem alterar o resultado da consulta, é

A) criar um segundo índice idêntico sobre a coluna tag, para que o otimizador possa balancear as leituras entre os dois índices.
B) particionar a tabela pelo tipo de equipamento, mantendo a consulta e o índice atuais.
C) aumentar a memória do servidor, pois o índice existente é utilizado em qualquer predicado que envolva a coluna tag, mesmo com funções.
D) criar um índice sobre a expressão UPPER(tag) ou, se os dados já forem padronizados, comparar tag diretamente no predicado.
E) substituir o índice B-tree por um índice bitmap sobre tag, adequado a colunas de alta cardinalidade.

### AUT-000091 — item 1.2 — dificuldade media
*Questão autoral — estilo Cesgranrio (criada pelo projeto; não é questão aplicada pela banca) · status: em_revisao*

Em um diagrama entidade-relacionamento, as entidades ALUNO (matricula, nome) e DISCIPLINA (codigo, nome) se relacionam por meio do relacionamento MATRICULA_EM, de cardinalidade N:N, que possui o atributo nota.

No mapeamento para o modelo relacional, a solução que preserva as regras do diagrama é

A) incluir em ALUNO as colunas codigo (chave estrangeira para DISCIPLINA) e nota, pois cada aluno cursa uma disciplina por vez.
B) incluir em DISCIPLINA as colunas matricula (chave estrangeira para ALUNO) e nota, de modo que cada disciplina registre o seu aluno.
C) criar a tabela MATRICULA_EM (matricula, codigo, nota), com chave primária composta (matricula, codigo) e chaves estrangeiras para ALUNO e DISCIPLINA.
D) unir ALUNO e DISCIPLINA em uma só tabela, com as colunas disciplina1, disciplina2 e disciplina3, cada uma acompanhada de sua nota.
E) criar a tabela MATRICULA_EM (matricula, codigo, nota) com chave primária apenas em matricula, para impedir registros duplicados.

### AUT-000092 — item 1.8 — dificuldade media
*Questão autoral — estilo Cesgranrio (criada pelo projeto; não é questão aplicada pela banca) · status: em_revisao*

Ao avaliar o modelo lógico de um sistema de vendas, um analista observa que a tabela ITEM_PEDIDO (id_pedido, id_produto, quantidade, preco_unitario, valor_total_pedido) repete, em cada linha do mesmo pedido, o valor total do pedido, que é a soma de quantidade × preco_unitario de todos os itens.

Sob os critérios usuais de avaliação de modelos de dados, o principal problema dessa estrutura é

A) a presença de um atributo derivado e redundante, que gera risco de inconsistência quando um item muda e o total não é atualizado.
B) a ausência de integridade referencial entre ITEM_PEDIDO e PRODUTO, pois nenhuma chave estrangeira foi declarada no modelo avaliado.
C) a cardinalidade incorreta entre pedido e item, pois um pedido deveria ter exatamente um item.
D) o uso de nomes longos para as colunas, que prejudica a legibilidade e a aderência ao padrão de nomenclatura.
E) a falta de índices sobre id_produto, que compromete o desempenho físico das consultas de vendas.

### AUT-000093 — item 1.9 — dificuldade media
*Questão autoral — estilo Cesgranrio (criada pelo projeto; não é questão aplicada pela banca) · status: em_revisao*

Uma empresa possui um banco de dados legado sem documentação e sem chaves estrangeiras declaradas. O analista decide aplicar engenharia reversa para elaborar o modelo do banco.

Considere as afirmativas a seguir.

I – O catálogo do SGBD permite extrair tabelas, colunas, tipos de dados, chaves primárias e índices existentes.
II – Na ausência de chaves estrangeiras, os relacionamentos podem ser deduzidos, com incerteza, pela convenção de nomes, pela compatibilidade de tipos, pela análise dos dados e pelo código das aplicações.
III – A engenharia reversa recupera integralmente as regras de negócio, como as cardinalidades mínimas e as especializações, pois elas estão registradas no catálogo.

Está correto o que se afirma em

A) I, somente.
B) III, somente.
C) II e III, somente.
D) I, II e III.
E) I e II, somente.

### AUT-000094 — item 1.11 — dificuldade facil
*Questão autoral — estilo Cesgranrio (criada pelo projeto; não é questão aplicada pela banca) · status: em_revisao*

Um DBA preparou um script para criar a estrutura de um novo banco de dados, alterar uma tabela existente e remover uma tabela obsoleta.

Os comandos SQL que devem constar do script, todos pertencentes à linguagem de definição de dados (DDL), são

A) INSERT, UPDATE e DELETE.
B) CREATE, ALTER e DROP.
C) ALTER, UPDATE e DROP.
D) SELECT, INSERT e CREATE.
E) COMMIT, ROLLBACK e SAVEPOINT.

### AUT-000095 — item 1.12 — dificuldade media
*Questão autoral — estilo Cesgranrio (criada pelo projeto; não é questão aplicada pela banca) · status: em_revisao*

A tabela PRODUTO (id, nome, preco), com a coluna preco do tipo numérico exato, contém as linhas (1, 'A', 50), (2, 'B', 100), (3, 'C', 80) e (4, 'D', 120). Em seguida, são executados, nesta ordem, os comandos abaixo, cada um confirmado.

```sql
UPDATE produto SET preco = preco * 1.10 WHERE preco < 100;
DELETE FROM produto WHERE preco > 110;
INSERT INTO produto VALUES (5, 'E', 40);
SELECT SUM(preco) FROM produto;
```

O resultado da consulta final é

A) 243
B) 270
C) 293
D) 283
E) 403

### AUT-000096 — item 1.15 — dificuldade media
*Questão autoral — estilo Cesgranrio (criada pelo projeto; não é questão aplicada pela banca) · status: em_revisao*

Para acelerar as consultas de um sistema, a equipe de banco de dados criou novos índices e reorganizou os arquivos de armazenamento da tabela de pedidos. Nenhum programa aplicativo precisou ser alterado, e o esquema conceitual permaneceu o mesmo.

O fato de os programas não terem sido afetados exemplifica a

A) independência lógica de dados, que protege os programas de mudanças no esquema conceitual, como a inclusão de uma nova tabela ou coluna.
B) independência física de dados, que permite alterar a estrutura de armazenamento sem mudar o esquema conceitual nem os programas.
C) integridade referencial, que impede a existência de linhas órfãs ao reorganizar os arquivos da tabela.
D) atomicidade, que assegura que a criação dos índices seja concluída por completo ou desfeita.
E) normalização, que elimina redundâncias ao reorganizar a estrutura física das tabelas.

### AUT-000097 — item 1.16 — dificuldade dificil
*Questão autoral — estilo Cesgranrio (criada pelo projeto; não é questão aplicada pela banca) · status: em_revisao*

A tabela CONTA (id, saldo) contém a linha (1, 100). Em uma única transação, são executados os comandos a seguir.

```sql
BEGIN;
UPDATE conta SET saldo = saldo + 50 WHERE id = 1;
SAVEPOINT s1;
UPDATE conta SET saldo = saldo * 2 WHERE id = 1;
ROLLBACK TO s1;
UPDATE conta SET saldo = saldo - 30 WHERE id = 1;
COMMIT;
```

Após o COMMIT, o saldo da conta é

A) 100
B) 150
C) 90
D) 270
E) 120

### AUT-000098 — item 1.20 — dificuldade media
*Questão autoral — estilo Cesgranrio (criada pelo projeto; não é questão aplicada pela banca) · status: em_revisao*

Uma plataforma de jogos on-line precisa atualizar e consultar um ranking de milhões de jogadores em tempo real, com latência de submilissegundos. A equipe avalia usar um banco de dados em memória, como o Redis.

Sobre esse tipo de banco, constata-se que

A) dispensa qualquer mecanismo de persistência, pois a RAM é não volátil e mantém os dados mesmo após falta de energia no servidor.
B) não permite estruturas de dados além de tabelas relacionais, o que o torna inadequado a rankings.
C) mantém os dados na memória principal, reduzindo a latência, e pode ter durabilidade por snapshots, log ou réplica.
D) é sempre mais lento que os bancos em disco, pois a memória principal tem capacidade bem menor que a dos discos e custa mais caro.
E) só pode ser usado como cache de um banco relacional e jamais como repositório principal de dados em qualquer cenário de negócio.

### AUT-000099 — item 1.16 — dificuldade dificil
*Questão autoral — estilo Cesgranrio (criada pelo projeto; não é questão aplicada pela banca) · status: em_revisao*

Uma transação T1, em um sistema de pedidos, executa duas vezes a consulta `SELECT COUNT(*) FROM pedido WHERE status = 'ABERTO'`. Entre as duas execuções, outra transação, T2, insere um novo pedido com status 'ABERTO' e confirma a operação. A segunda execução da consulta em T1 devolve um valor maior que a primeira, sem que T1 tenha alterado nada.

O fenômeno descrito é conhecido como

A) leitura suja (dirty read).
B) leitura não repetível (non-repeatable read).
C) perda de atualização (lost update).
D) leitura fantasma (phantom read).
E) impasse (deadlock).

### OFI-000001 — item 1.3 — dificuldade facil
*Oficial — Fundação Cesgranrio, Transpetro PSP/Terra 002/2023 (Edital nº 2), Análise de Sistemas — Processos de Negócios, 2023, Prova 6, questão 26 (gabarito: oficial (PDF de gabarito da Cesgranrio, alterado em 9/01/2024), conferido na T13) · status: em_revisao*

A Álgebra Relacional possui vários operadores binários.
Dentre os operadores listados abaixo, o único NÃO binário é a(o)

A) divisão
B) projeção
C) junção natural
D) junção externa esquerda
E) produto cartesiano

### OFI-000002 — item 1.17 — dificuldade media
*Oficial — Fundação Cesgranrio, Transpetro PSP/Terra 002/2023 (Edital nº 2), Análise de Sistemas — Processos de Negócios, 2023, Prova 6, questão 45 (gabarito: oficial (PDF de gabarito da Cesgranrio, alterado em 9/01/2024), conferido na T13) · status: em_revisao*

Para melhorar o desempenho de um banco de dados, um Administrador de Banco de Dados (DBA) pode realizar uma série de ações.

Uma ação que pode contribuir significativamente para a otimização do desempenho de um sistema de banco de dados relacionais é

A) executar todas as transações de maneira sequencial ou serial, pois é a única forma de garantir a correção da execução concorrente.
B) desnormalizar as tabelas envolvidas em operações de junção interna frequentes.
C) substituir todos os SELECT por SELECT DISTINCT, evitando repetições.
D) usar sempre a cláusula ORDER BY para ordenar os resultados exibidos.
E) fragmentar os índices existentes nas colunas mais acessadas.

### OFI-000003 — item 1.23 — dificuldade facil
*Oficial — Fundação Cesgranrio, Transpetro PSP/Terra 002/2023 (Edital nº 2), Análise de Sistemas — Processos de Negócios, 2023, Prova 6, questão 46 (gabarito: oficial (PDF de gabarito da Cesgranrio, alterado em 9/01/2024), conferido na T13) · status: em_revisao*

Cada tipo de sistema de gerenciamento de banco de dados — relacional, orientado a documentos e orientado a grafos — possui características únicas que os tornam mais adequados para certos tipos de aplicações.

A esse respeito, é uma característica típica dos bancos de dados orientados a documentos

A) utilizar a linguagem SQL para realização de consultas, sendo estruturados em relações matemáticas.
B) utilizar a estrutura de vértices e arestas para representar as entidades e os relacionamentos entre elas, permitindo uma navegação eficiente entre os nós relacionados.
C) ser otimizados para consultas que exploram as relações entre entidades, por meio de nós e arestas.
D) armazenar os dados no formato JSON ou BSON, permitindo que dados semiestruturados sejam armazenados e consultados de forma flexível.
E) enfatizar, prioritariamente, a normalização de dados, segregando dados relacionados em tabelas distintas interligadas através de chaves estrangeiras.

### OFI-000004 — item 1.18 — dificuldade media
*Oficial — Fundação Cesgranrio, Transpetro PSP/Terra 002/2023 (Edital nº 2), Análise de Sistemas — Processos de Negócios, 2023, Prova 6, questão 48 (gabarito: oficial (PDF de gabarito da Cesgranrio, alterado em 9/01/2024), conferido na T13) · status: em_revisao*

Considere um banco de dados orientado a grafos que contém nós que representam Pessoas e nós que representam relacionamentos AMIGO_DE, ligando pessoas amigas entre si.

Qual das consultas, em linguagem Cypher, retorna todos os amigos de uma pessoa chamada Alice?

A) `MATCH (p:Pessoa)-[:AMIGO_DE]->(amigo) WHERE p.nome = 'Alice' RETURN amigo`
B) `MATCH (p:Pessoa)<-[:AMIGO_DE]-(amigo) WHERE p.nome = 'Alice' RETURN amigo`
C) `MATCH (p:Pessoa {nome: 'Alice'})-[:INIMIGO_DE]->(inimigo) RETURN inimigo`
D) `SELECT * FROM Pessoas WHERE nome = 'Alice'`
E) `FIND (p:Pessoa {nome: 'Alice'})-[:AMIGO_DE]->(amigo) RETURN amigo`

### OFI-000005 — item 1.10 — dificuldade media
*Oficial — Fundação Cesgranrio, Transpetro PSP/Terra 002/2023 (Edital nº 2), Análise de Sistemas — Processos de Negócios, 2023, Prova 6, questão 49 (gabarito: oficial (PDF de gabarito da Cesgranrio, alterado em 9/01/2024), conferido na T13) · status: em_revisao*

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

A) ```sql
SELECT f2.filho
FROM Familia f1 INNER JOIN Familia f2 ON f1.filho = f2.pai
WHERE f1.pai = 'Carlos';
```
B) ```sql
SELECT f1.pai
FROM Familia f1 INNER JOIN Familia f2 ON f1.pai = f2.filho
WHERE f1.filho = 'Carlos';
```
C) ```sql
SELECT f1.pai
FROM Familia f1 INNER JOIN Familia f2 ON f1.filho = f2.pai
WHERE f1.pai = 'Carlos';
```
D) ```sql
SELECT f2.filho
FROM Familia f1 INNER JOIN Familia f2 ON f1.pai = f2.pai
WHERE f1.pai = 'Carlos';
```
E) ```sql
SELECT f2.filho
FROM Familia f1 INNER JOIN Familia f2 ON f1.filho = f2.filho
WHERE f1.pai = 'Carlos';
```

### OFI-000006 — item 1.6 — dificuldade facil
*Oficial — Fundação Cesgranrio, Transpetro PSP/Terra 002/2023 (Edital nº 2), Análise de Sistemas — Processos de Negócios, 2023, Prova 6, questão 50 (gabarito: oficial (PDF de gabarito da Cesgranrio, alterado em 9/01/2024), conferido na T13) · status: em_revisao*

Em um Sistema de Gerenciamento de Banco de Dados (SGBD) relacional, um banco de metadados é um repositório especializado que armazena informações sobre os dados que estão armazenados no banco de dados propriamente dito. Em geral, os metadados ajudam os desenvolvedores, os administradores de banco de dados e outras partes interessadas a entender, a gerenciar e a trabalhar eficientemente com o banco de dados.

Dentre as informações típicas que são encontradas nos metadados de um banco de dados relacional, está(ão)

A) a quantidade total de vendas realizadas, registrada pelas transações.
B) as senhas de usuários e suas permissões de sistema operacional.
C) o código-fonte dos aplicativos que acessam o banco de dados.
D) os backups dos dados armazenados nas tabelas.
E) os esquemas de tabelas, incluindo os tipos de dados e as restrições de colunas.

### OFI-000007 — item 1.13 — dificuldade media
*Oficial — Fundação Cesgranrio, Transpetro PSP/Terra 002/2023 (Edital nº 2), Análise de Sistemas — Processos de Negócios, 2023, Prova 6, questão 51 (gabarito: oficial (PDF de gabarito da Cesgranrio, alterado em 9/01/2024), conferido na T13) · status: em_revisao*

Em um Sistema Gerenciador de Banco de Dados Relacional (SGBD-R), o otimizador de consultas é um componente que possui uma série de tarefas e de atividades cruciais para assegurar que as consultas sejam processadas de maneira eficiente.

NÃO representa uma funcionalidade típica do otimizador de consultas

A) escolher o plano de execução mais eficiente para uma consulta, a partir de vários planos possíveis.
B) escolher entre diferentes métodos de acesso a dados (por exemplo, varredura sequencial, uso de índice) para processar uma consulta.
C) utilizar estatísticas sobre os dados armazenados para avaliar a seletividade de diferentes predicados em uma consulta.
D) ser responsável por criar novas tabelas no banco de dados, com base nas consultas mais realizadas.
E) avaliar frequentemente diferentes estratégias de junção para decidir a ordem em que as relações são acessadas e combinadas.

### OFI-000008 — item 1.22 — dificuldade media
*Oficial — Fundação Cesgranrio, Transpetro PSP/Terra 002/2023 (Edital nº 2), Análise de Sistemas — Processos de Negócios, 2023, Prova 6, questão 52 (gabarito: oficial (PDF de gabarito da Cesgranrio, alterado em 9/01/2024), conferido na T13) · status: em_revisao*

A respeito do uso de Data Lakes como solução para o gerenciamento e análise de Big Data, constata-se que eles

A) convertem dados não estruturados em estruturados durante o processo de ingestão.
B) permitem o armazenamento de dados em formatos estruturados, semiestruturados e não estruturados, oferecendo flexibilidade na análise e no processamento de diferentes tipos de dados.
C) são geralmente implementados usando apenas sistemas de arquivos convencionais devido à sua eficiência em armazenar grandes volumes de dados.
D) são adequados apenas para armazenar grandes volumes de dados não estruturados.
E) são inadequados em soluções de Big Data por não suportarem alguns tipos de dados.

### OFI-000009 — item 1.14 — dificuldade facil
*Oficial — Fundação Cesgranrio, Transpetro PSP/Terra 002/2023 (Edital nº 2), Análise de Sistemas — Processos de Negócios, 2023, Prova 6, questão 53 (gabarito: oficial (PDF de gabarito da Cesgranrio, alterado em 9/01/2024), conferido na T13) · status: em_revisao*

As propriedades ACID são cruciais para garantir a confiabilidade das transações em um Sistema Gerenciador de Banco de Dados Relacional (SGBD-R). Cada letra da sigla ACID refere-se a uma propriedade específica.

A descrição das quatro propriedades ACID é a seguinte:

A) Atomicidade: o banco de dados deve permanecer em um estado consistente após a transação. Consistência: uma transação é dividida em várias subtransações menores. Isolamento: os resultados de uma transação são permanentes. Durabilidade: as transações simultâneas são isoladas umas das outras.
B) Atomicidade: uma transação é dividida em várias subtransações menores. Consistência: o banco de dados não necessita manter a integridade após cada transação. Isolamento: as transações podem ser misturadas entre si. Durabilidade: os resultados de uma transação podem ser desfeitos quando necessário.
C) Atomicidade: uma transação deve ser tratada como uma única unidade, que é executada completamente ou não é executada de todo. Consistência: o banco de dados deve permanecer em um estado consistente após a transação. Isolamento: as transações simultâneas são isoladas umas das outras. Durabilidade: os efeitos de uma transação executada com sucesso são permanentes e persistem mesmo em caso de falha do sistema.
D) Atomicidade: as transações simultâneas são isoladas umas das outras. Consistência: uma transação deve ser tratada como uma única unidade, que é executada completamente ou não é executada de todo. Isolamento: o banco de dados deve permanecer em um estado consistente após a transação. Durabilidade: uma transação é dividida em várias subtransações menores.
E) Atomicidade: os resultados de uma transação são permanentes. Consistência: as transações simultâneas são isoladas umas das outras. Isolamento: uma transação deve ser tratada como uma única unidade, que é executada completamente ou não é executada de todo. Durabilidade: o banco de dados deve permanecer em um estado consistente após a transação.

### OFI-000010 — item 1.1 — dificuldade facil
*Oficial — Fundação Cesgranrio, Transpetro PSP/Terra 002/2023 (Edital nº 2), Análise de Sistemas — Processos de Negócios, 2023, Prova 6, questão 63 (gabarito: oficial (PDF de gabarito da Cesgranrio, alterado em 9/01/2024), conferido na T13) · status: em_revisao*

A modelagem de dados é uma etapa importante e essencial em qualquer projeto de desenvolvimento ou de manutenção de software.

Dentre as modelagens utilizadas em projetos de banco de dados, está a modelagem conceitual, que

A) descreve detalhes técnicos de implementação, como índices e partições de tabelas.
B) envolve a otimização de consultas e a escolha de índices apropriados para melhorar o desempenho.
C) prioriza o projeto da estrutura física das tabelas e dos relacionamentos no banco de dados.
D) é uma representação visual dos detalhes internos de armazenamento de dados em disco.
E) é independente do Sistema de Gerenciamento de Banco de Dados (SGBD), envolvendo a definição de entidades, de atributos e de relacionamentos.

### OFI-000011 — item 1.4 — dificuldade facil
*Oficial — Fundação Cesgranrio, Transpetro PSP/Terra 002/2023 (Edital nº 2), Análise de Sistemas — Processos de Negócios, 2023, Prova 6, questão 64 (gabarito: oficial (PDF de gabarito da Cesgranrio, alterado em 9/01/2024), conferido na T13) · status: em_revisao*

A normalização é um processo muito utilizado na organização de bancos de dados.

A esse respeito, o objetivo principal da normalização das estruturas de dados em bancos de dados relacionais é

A) eliminar as duplicações de dados e garantir que cada informação seja armazenada em uma única tabela.
B) aumentar a redundância dos dados, garantindo que informações essenciais sejam armazenadas em várias tabelas.
C) reduzir a quantidade de dados armazenados no banco de dados, resultando em uma economia de espaço de armazenamento.
D) simplificar as consultas complexas e otimizar a recuperação de informações do banco de dados, resultando em um melhor desempenho.
E) criar uma representação visual da estrutura física dos dados no disco, facilitando o acesso direto e rápido às informações armazenadas.

### OFI-000042 — item 1.19 — dificuldade media
*Oficial — Fundação Cesgranrio, Transpetro PSP RH 2018.1 (Edital nº 1), Analista de Sistemas Júnior — Processos de Negócio, 2018, Prova 15, questão 22 (gabarito: oficial (PDF de gabarito da Cesgranrio, alterado em 09/05/2018), conferido na T13) · status: em_revisao*

Os sistemas de data warehouse diferem de várias formas dos sistemas transacionais das empresas, como, por exemplo, em seu modelo de dados. Para transferir e transformar os dados dos sistemas transacionais para os sistemas de data warehousing, é comum utilizar, como estratégia, a existência de uma camada especial da arquitetura conhecida como

A) Data Marts
B) Data Staging Area
C) Dimensional Model Area
D) Presentation Area
E) Living Sample Area

### OFI-000043 — item 1.10 — dificuldade dificil
*Oficial — Fundação Cesgranrio, Transpetro PSP RH 2018.1 (Edital nº 1), Analista de Sistemas Júnior — Processos de Negócio, 2018, Prova 15, questão 38 (gabarito: oficial (PDF de gabarito da Cesgranrio, alterado em 09/05/2018), conferido na T13) · status: em_revisao*

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

A) ```sql
SELECT ID_FORN, NOME
FROM FORNECEDOR F, VENDA V
WHERE F.ID_FORN=ID_F AND DATA >= '05/01/2018'
INTERSECT
SELECT ID_FORN, NOME
FROM FORNECEDOR F, VENDA V
WHERE F.ID_FORN=ID_F AND DATA <= '10/01/2018'
```
B) ```sql
SELECT ID_FORN, NOME
FROM FORNECEDOR F
WHERE (SELECT COUNT(*) FROM VENDA
       WHERE F.ID_FORN=ID_F AND
       DATA BETWEEN '05/01/2018' AND '10/01/2018') > 0
```
C) ```sql
SELECT UNIQUE ID_FORN, NOME
FROM FORNECEDOR F LEFT JOIN VENDA V ON F.ID_FORN = V.ID_F
WHERE DATA >= '05/01/2018' OR DATA <= '10/01/2018'
```
D) ```sql
SELECT ID_FORN, NOME
FROM FORNECEDOR F, VENDA V
WHERE F.ID_FORN=ID_F AND DATA >= '05/01/2018'
UNION
SELECT ID_FORN, NOME
FROM FORNECEDOR F, VENDA V
WHERE F.ID_FORN=ID_F AND DATA <= '10/01/2018'
```
E) ```sql
SELECT ID_FORN, NOME
FROM FORNECEDOR F
WHERE ID_FORN NOT IN (SELECT ID_F FROM VENDA
                       WHERE DATA < '05/01/2018' OR DATA > '10/01/2018')
```

### OFI-000067 — item 1.3 — dificuldade media
*Oficial — Fundação Cesgranrio, Caixa Econômica Federal, Edital 1/2021/NM, Técnico Bancário Novo — Tecnologia da Informação, 2021, Caderno de Tecnologia da Informação (questões 31 a 60), questão 38 (gabarito: definitivo (fonte oficial: portal da Cesgranrio); recursos sem alteração nem anulação) · status: em_revisao*

Leve em conta o conjunto de tabelas a seguir.

CLIENTE (agencia, conta, CPF, nome, endereco, telefone, titular), onde titular = {1º, 2º, 3º, 4º, 5º}
CONTA_CORRENTE (agencia, conta, data-de-abertura, saldo)
MOVIMENTACAO (agencia, conta, data, hora, minuto, valor), onde data, hora e minuto são de uma movimentação (crédito ou débito) realizada

Considerando-se o modelo relacional de dados, composto apenas pelas tabelas CLIENTE, CONTA_CORRENTE e MOVIMENTACAO, verifica-se que

A) não é necessário ter os atributos "hora" e "minuto" como parte da chave primária da tabela MOVIMENTACAO.
B) o atributo "CPF" é uma chave estrangeira na tabela CLIENTE.
C) o atributo "data-de-abertura" deveria fazer parte da chave primária da tabela CONTA_CORRENTE.
D) o atributo "titular" deveria fazer parte da chave primária da tabela CLIENTE.
E) os atributos "agencia" e "conta" na tabela CLIENTE formam uma chave estrangeira.

### OFI-000068 — item 1.6 — dificuldade media
*Oficial — Fundação Cesgranrio, Caixa Econômica Federal, Edital 1/2021/NM, Técnico Bancário Novo — Tecnologia da Informação, 2021, Caderno de Tecnologia da Informação (questões 31 a 60), questão 39 (gabarito: definitivo (fonte oficial: portal da Cesgranrio); recursos sem alteração nem anulação) · status: em_revisao*

Um sistema gerenciador de banco de dados utiliza metadados, persistidos em bancos de dados, para

A) avaliar o seu próprio desempenho, considerando metas pré-estabelecidas pelo administrador do banco de dados.
B) decidir que páginas de dados sujas na sua cache precisam ser persistidas em disco.
C) implementar o isolamento entre transações concorrentes.
D) permitir a restauração de um estado íntegro do banco de dados, em caso de falha.
E) validar comandos SQL informados por um usuário.

### OFI-000073 — item 1.13 — dificuldade media
*Oficial — Fundação Cesgranrio, Caixa Econômica Federal, Edital 1/2021/NM, Técnico Bancário Novo — Tecnologia da Informação, 2021, Caderno de Tecnologia da Informação (questões 31 a 60), questão 58 (gabarito: definitivo (fonte oficial: portal da Cesgranrio); recursos sem alteração nem anulação) · status: em_revisao*

Os Sistemas de Gerenciamento de Banco de Dados (SGBD) foram afetados pelas demandas trazidas pelo Big Data. Uma das formas de tratar essas demandas são os Sistemas de Gerenciamento de Banco de Dados Distribuídos (SGBDD), nos quais os dados podem estar armazenados em vários servidores, conectados por uma rede de computadores.
Um SGBDD que usa softwares middleware, de forma que os SGBDs que o compõem estejam fracamente acoplados, é conhecido como

A) Baseado em Grafos
B) Hierárquico
C) Federado
D) Orientado a objetos
E) NoSQL

### OFI-000100 — item 1.7 — dificuldade dificil
*Oficial — Fundação Cesgranrio, BNDES, Edital 1/2024, Analista — Análise de Sistemas: Desenvolvimento, 2024, Prova 3 (manhã), questão 65 (gabarito: final após recursos (documento da banca, via espelho QConcursos)) · status: em_revisao*

Um dos indicadores mais utilizados para avaliação de políticas públicas em municípios brasileiros na área da saúde é a taxa de mortalidade infantil. Para essas políticas, também é importante acompanhar a quantidade de leitos hospitalares disponíveis. Considere três tabelas que representam um modelo dimensional:

MUNICÍPIO (ID-município, @UF, @mês, taxa-mortalidade-infantil, qtd-leitos)
TEMPO (ID-mês, mês-calendário, ano-calendário)
ESTADO (sigla, nome, região)

Esse modelo dimensional permite apresentar de um estado da federação, em um dos meses cadastrados, a

A) divisão da quantidade de leitos pela taxa de mortalidade infantil.
B) divisão da taxa de mortalidade infantil pela quantidade de leitos.
C) média da taxa de mortalidade infantil.
D) soma da taxa de mortalidade infantil.
E) soma da quantidade de leitos.

### OFI-000101 — item 1.22 — dificuldade media
*Oficial — Fundação Cesgranrio, BNDES, Edital 1/2024, Analista — Análise de Sistemas: Desenvolvimento, 2024, Prova 3 (manhã), questão 66 (gabarito: final após recursos (documento da banca, via espelho QConcursos)) · status: em_revisao*

Um data lake é um repositório que pode armazenar grandes volumes de dados e de conjuntos de dados, sejam eles estruturados, semiestruturados ou não estruturados.
Um dos aspectos-chave de um data lake são os seus metadados, que

A) devem seguir o padrão American National Standards Institute (ANSI) já consagrado para metadados de data lakes.
B) descrevem completa e corretamente todos os dados persistidos.
C) precisam ser definidos antes da ingestão de dados.
D) podem ser consultados por meio do "information schema".
E) podem ser parcialmente descobertos de forma automática.

### OFI-000102 — item 1.21 — dificuldade media
*Oficial — Fundação Cesgranrio, BNDES, Edital 1/2024, Analista — Análise de Sistemas: Desenvolvimento, 2024, Prova 3 (manhã), questão 67 (gabarito: final após recursos (documento da banca, via espelho QConcursos)) · status: em_revisao*

Um dos aspectos que estão no escopo da governança de dados é a governança sobre a qualidade de dados.
Uma das características do monitoramento da qualidade dos dados utilizados por uma organização é que esse monitoramento

A) ajuda na interoperabilidade de dados.
B) deve ser realizado apenas quando houver evidências de que alguma tomada de decisão com base em dados foi tomada incorretamente.
C) permite melhorar o controle do acesso aos dados.
D) pode ser realizado apenas a cada dez anos.
E) requer a produção de indicadores, de modo a orientar a definição e a implementação de ações corretivas.

### OFI-000103 — item 1.1 — dificuldade media
*Oficial — Fundação Cesgranrio, BNDES, Edital 1/2024, Analista — Análise de Sistemas: Desenvolvimento, 2024, Prova 3 (manhã), questão 68 (gabarito: final após recursos (documento da banca, via espelho QConcursos)) · status: em_revisao*

Considere um modelo conceitual representado por meio de um Diagrama de Entidades e Relacionamentos (DER) em que há uma entidade denominada PRÉDIO. Nesse contexto, um prédio pode ser de uso exclusivamente residencial, exclusivamente comercial, de uso misto (residencial e comercial), e apenas isso. No DER, a entidade PRÉDIO foi corretamente especializada em duas outras: RESIDENCIAL e COMERCIAL.
Sendo assim, nesse DER, as duas especializações são

A) totais e sobrepostas
B) totais e parciais
C) totais e disjuntas
D) parciais e sobrepostas
E) parciais e disjuntas

### OFI-000104 — item 1.14 — dificuldade media
*Oficial — Fundação Cesgranrio, BNDES, Edital 1/2024, Analista — Análise de Sistemas: Desenvolvimento, 2024, Prova 3 (manhã), questão 69 (gabarito: final após recursos (documento da banca, via espelho QConcursos)) · status: em_revisao*

No contexto de um Sistema Gerenciador de Banco de Dados (SGBD), é possível definir o nível de isolamento de uma transação por meio do comando SET TRANSACTION ISOLATION LEVEL. Há vários níveis de isolamento possíveis.
Entre tais níveis encontra-se o SERIALIZABLE, que

A) configura o SGBD para modo de leitura de todas as suas tabelas.
B) define que apenas uma transação será executada por vez pelo SGBD.
C) garante o mais alto nível possível de isolamento de uma transação.
D) permite a serialização de objetos JSON em uma transação.
E) prepara uma transação W para enviar dados a outra transação Y.

### OFI-000105 — item 1.11 — dificuldade media
*Oficial — Fundação Cesgranrio, BNDES, Edital 1/2024, Analista — Análise de Sistemas: Desenvolvimento, 2024, Prova 3 (manhã), questão 70 (gabarito: final após recursos (documento da banca, via espelho QConcursos)) · status: em_revisao*

No momento da criação de uma tabela em um Sistema Gerenciador de Banco de Dados (SGBD), por meio do comando CREATE TABLE, definem-se regras para o controle de integridade e para a garantia de qualidade dos dados dessa tabela. Considere que W e Y são duas tabelas. A é um atributo de W, e B é um atributo de Y. Foi criada corretamente uma cláusula CHECK no atributo A.
Essa cláusula permite verificar se o atributo A

A) tem valor único em todas as linhas da tabela W.
B) tem valor maior ou igual a zero.
C) tem valor existente em uma ou mais linhas da tabela Y na coluna B.
D) inviabiliza o acesso a alguma linha da tabela Y.
E) está preenchido com algum valor ou não.
