# Questões autorais — m01-arquitetura-dados (expansão T05) — questões (T05 — expansão)

Sem gabarito; o comentário está no arquivo `gabaritos-comentados`.

## AUT-000091 — Mapeamento do DER para o modelo relacional: relacionamento N:N com atributo

*Questão autoral — estilo Cesgranrio.* · item 1.2 · Média

Em um diagrama entidade-relacionamento, as entidades ALUNO (matricula, nome) e DISCIPLINA (codigo, nome) se relacionam por meio do relacionamento MATRICULA_EM, de cardinalidade N:N, que possui o atributo nota.

No mapeamento para o modelo relacional, a solução que preserva as regras do diagrama é

(A) incluir em ALUNO as colunas codigo (chave estrangeira para DISCIPLINA) e nota, pois cada aluno cursa uma disciplina por vez.
(B) incluir em DISCIPLINA as colunas matricula (chave estrangeira para ALUNO) e nota, de modo que cada disciplina registre o seu aluno.
(C) criar a tabela MATRICULA_EM (matricula, codigo, nota), com chave primária composta (matricula, codigo) e chaves estrangeiras para ALUNO e DISCIPLINA.
(D) unir ALUNO e DISCIPLINA em uma só tabela, com as colunas disciplina1, disciplina2 e disciplina3, cada uma acompanhada de sua nota.
(E) criar a tabela MATRICULA_EM (matricula, codigo, nota) com chave primária apenas em matricula, para impedir registros duplicados.

## AUT-000092 — Avaliação de modelos: redundância e atributos derivados

*Questão autoral — estilo Cesgranrio.* · item 1.8 · Média

Ao avaliar o modelo lógico de um sistema de vendas, um analista observa que a tabela ITEM_PEDIDO (id_pedido, id_produto, quantidade, preco_unitario, valor_total_pedido) repete, em cada linha do mesmo pedido, o valor total do pedido, que é a soma de quantidade × preco_unitario de todos os itens.

Sob os critérios usuais de avaliação de modelos de dados, o principal problema dessa estrutura é

(A) a presença de um atributo derivado e redundante, que gera risco de inconsistência quando um item muda e o total não é atualizado.
(B) a ausência de integridade referencial entre ITEM_PEDIDO e PRODUTO, pois nenhuma chave estrangeira foi declarada no modelo avaliado.
(C) a cardinalidade incorreta entre pedido e item, pois um pedido deveria ter exatamente um item.
(D) o uso de nomes longos para as colunas, que prejudica a legibilidade e a aderência ao padrão de nomenclatura.
(E) a falta de índices sobre id_produto, que compromete o desempenho físico das consultas de vendas.

## AUT-000093 — Engenharia reversa de banco de dados legado

*Questão autoral — estilo Cesgranrio.* · item 1.9 · Média

Uma empresa possui um banco de dados legado sem documentação e sem chaves estrangeiras declaradas. O analista decide aplicar engenharia reversa para elaborar o modelo do banco.

Considere as afirmativas a seguir.

I – O catálogo do SGBD permite extrair tabelas, colunas, tipos de dados, chaves primárias e índices existentes.
II – Na ausência de chaves estrangeiras, os relacionamentos podem ser deduzidos, com incerteza, pela convenção de nomes, pela compatibilidade de tipos, pela análise dos dados e pelo código das aplicações.
III – A engenharia reversa recupera integralmente as regras de negócio, como as cardinalidades mínimas e as especializações, pois elas estão registradas no catálogo.

Está correto o que se afirma em

(A) I, somente.
(B) III, somente.
(C) II e III, somente.
(D) I, II e III.
(E) I e II, somente.

## AUT-000094 — DDL: classificação dos comandos SQL

*Questão autoral — estilo Cesgranrio.* · item 1.11 · Fácil

Um DBA preparou um script para criar a estrutura de um novo banco de dados, alterar uma tabela existente e remover uma tabela obsoleta.

Os comandos SQL que devem constar do script, todos pertencentes à linguagem de definição de dados (DDL), são

(A) INSERT, UPDATE e DELETE.
(B) CREATE, ALTER e DROP.
(C) ALTER, UPDATE e DROP.
(D) SELECT, INSERT e CREATE.
(E) COMMIT, ROLLBACK e SAVEPOINT.

## AUT-000095 — DML: UPDATE, DELETE e INSERT em sequência

*Questão autoral — estilo Cesgranrio.* · item 1.12 · Média

A tabela PRODUTO (id, nome, preco), com a coluna preco do tipo numérico exato, contém as linhas (1, 'A', 50), (2, 'B', 100), (3, 'C', 80) e (4, 'D', 120). Em seguida, são executados, nesta ordem, os comandos abaixo, cada um confirmado.

```sql
UPDATE produto SET preco = preco * 1.10 WHERE preco < 100;
DELETE FROM produto WHERE preco > 110;
INSERT INTO produto VALUES (5, 'E', 40);
SELECT SUM(preco) FROM produto;
```

O resultado da consulta final é

(A) 243
(B) 270
(C) 293
(D) 283
(E) 403

## AUT-000096 — Independência de dados: lógica x física

*Questão autoral — estilo Cesgranrio.* · item 1.15 · Média

Para acelerar as consultas de um sistema, a equipe de banco de dados criou novos índices e reorganizou os arquivos de armazenamento da tabela de pedidos. Nenhum programa aplicativo precisou ser alterado, e o esquema conceitual permaneceu o mesmo.

O fato de os programas não terem sido afetados exemplifica a

(A) independência lógica de dados, que protege os programas de mudanças no esquema conceitual, como a inclusão de uma nova tabela ou coluna.
(B) independência física de dados, que permite alterar a estrutura de armazenamento sem mudar o esquema conceitual nem os programas.
(C) integridade referencial, que impede a existência de linhas órfãs ao reorganizar os arquivos da tabela.
(D) atomicidade, que assegura que a criação dos índices seja concluída por completo ou desfeita.
(E) normalização, que elimina redundâncias ao reorganizar a estrutura física das tabelas.

## AUT-000097 — Transações: COMMIT, ROLLBACK e SAVEPOINT

*Questão autoral — estilo Cesgranrio.* · item 1.16 · Difícil

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

(A) 100
(B) 150
(C) 90
(D) 270
(E) 120

## AUT-000098 — Banco de dados em memória

*Questão autoral — estilo Cesgranrio.* · item 1.20 · Média

Uma plataforma de jogos on-line precisa atualizar e consultar um ranking de milhões de jogadores em tempo real, com latência de submilissegundos. A equipe avalia usar um banco de dados em memória, como o Redis.

Sobre esse tipo de banco, constata-se que

(A) dispensa qualquer mecanismo de persistência, pois a RAM é não volátil e mantém os dados mesmo após falta de energia no servidor.
(B) não permite estruturas de dados além de tabelas relacionais, o que o torna inadequado a rankings.
(C) mantém os dados na memória principal, reduzindo a latência, e pode ter durabilidade por snapshots, log ou réplica.
(D) é sempre mais lento que os bancos em disco, pois a memória principal tem capacidade bem menor que a dos discos e custa mais caro.
(E) só pode ser usado como cache de um banco relacional e jamais como repositório principal de dados em qualquer cenário de negócio.

## AUT-000099 — Transações concorrentes: leitura fantasma

*Questão autoral — estilo Cesgranrio.* · item 1.16 · Difícil

Uma transação T1, em um sistema de pedidos, executa duas vezes a consulta `SELECT COUNT(*) FROM pedido WHERE status = 'ABERTO'`. Entre as duas execuções, outra transação, T2, insere um novo pedido com status 'ABERTO' e confirma a operação. A segunda execução da consulta em T1 devolve um valor maior que a primeira, sem que T1 tenha alterado nada.

O fenômeno descrito é conhecido como

(A) leitura suja (dirty read).
(B) leitura não repetível (non-repeatable read).
(C) perda de atualização (lost update).
(D) leitura fantasma (phantom read).
(E) impasse (deadlock).
