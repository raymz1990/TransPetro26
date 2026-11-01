# Banco de questões — Módulo 1: Arquitetura de Dados (lote piloto, questões)

**Tipo:** questões **autorais** — **Questão autoral — estilo Cesgranrio.** Não são questões oficiais nem foram aplicadas pela Fundação Cesgranrio.
**Status:** validada 10. Gabaritos e comentários em `m01-arquitetura-dados-gabaritos-comentados.md`; dados estruturados em `m01-arquitetura-dados.json`.
**Data:** 2026-10-31 · **Itens do edital:** 1.1, 1.4, 1.5, 1.7, 1.10, 1.14, 1.17, 1.18, 1.19, 1.21.

---

## Questão 1 — AUT-000001

**AUT-000001** · Modelagem de dados: níveis conceitual, lógico e físico · item 1.1 · Fácil · Compreensão

*Questão autoral — estilo Cesgranrio.*

Uma equipe de TI documenta um novo sistema de gestão de manutenção. Em uma oficina com a área de negócio, definiu-se que "Equipamento" e "Ordem de Serviço" são entidades, que um equipamento pode ter várias ordens de serviço e que cada ordem de serviço se refere a um único equipamento. Nada foi decidido sobre o SGBD, os tipos de dados ou os índices a serem usados.  
  
O produto dessa oficina corresponde, quanto ao nível de abstração, ao modelo

(A) físico, porque descreve os relacionamentos entre as tabelas que serão criadas no banco de dados do sistema.  
(B) lógico, porque traduz as entidades em tabelas, com chaves primárias e estrangeiras já definidas para o banco relacional.  
(C) conceitual, porque representa entidades e relacionamentos do negócio, independentemente da tecnologia de banco de dados.  
(D) dimensional, porque separa as entidades em fatos e dimensões para fins de análise.  
(E) de implementação, porque especifica os tipos de dados e os índices do SGBD escolhido.  

---

## Questão 2 — AUT-000002

**AUT-000002** · Normalização: dependência parcial e 2FN · item 1.4 · Média · Análise

*Questão autoral — estilo Cesgranrio.*

Considere a relação ITEM_PEDIDO(id_pedido, id_produto, nome_produto, quantidade, preco_negociado), cuja chave primária é composta por (id_pedido, id_produto). Sabe-se que:  
  
• (id_pedido, id_produto) determina quantidade e preco_negociado;  
• id_produto determina nome_produto;  
• todos os atributos são atômicos.  
  
É correto afirmar que a relação

(A) está em 2FN, mas não em 3FN, pois quantidade e preco_negociado dependem transitivamente da chave primária, exigindo nova decomposição.  
(B) está em 3FN, pois todos os atributos são atômicos e dependem da chave primária.  
(C) não está em 1FN, pois a chave primária é composta por mais de um atributo.  
(D) está em 1FN, mas não em 2FN, pois preco_negociado depende apenas de id_pedido; a solução é criar uma relação PEDIDO.  
(E) está em 1FN, mas não em 2FN, pois nome_produto depende de parte da chave; deve-se criar PRODUTO(id_produto, nome_produto).  

---

## Questão 3 — AUT-000003

**AUT-000003** · Integridade referencial: ações ON DELETE e ON UPDATE · item 1.5 · Média · Aplicação

*Questão autoral — estilo Cesgranrio.*

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

(A) O comando (1) é rejeitado, pois há empregados que referenciam o departamento 1; o comando (2) exclui o departamento e seus empregados; o comando (3) é rejeitado.  
(B) O comando (1) é aceito e altera para 5 o id_depto de Ana e de Bruno; os comandos (2) e (3) são rejeitados, e o departamento 5 permanece.  
(C) O comando (1) é aceito, mas Ana e Bruno permanecem com id_depto = 1, que o SGBD mantém como valor órfão; os comandos (2) e (3) são rejeitados.  
(D) O comando (1) é aceito e propagado; o comando (2) é aceito e exclui Ana e Bruno em cascata; o comando (3) é rejeitado.  
(E) O comando (1) é aceito e propagado; o comando (2) é aceito e deixa nulo o id_depto de Ana e de Bruno; o comando (3) é aceito, com aviso de valor órfão.  

---

## Questão 4 — AUT-000004

**AUT-000004** · SQL: junção externa, agregação e HAVING · item 1.10 · Difícil · Resolução de problemas

*Questão autoral — estilo Cesgranrio.*

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

(A) (Oeste, 0, 0) e (Sul, 1, 200)  
(B) (Sul, 1, 200)  
(C) (Oeste, 1, 0) e (Sul, 1, 200)  
(D) (Norte, 2, 400) e (Sul, 1, 200)  
(E) (Leste, 3, 300) e (Norte, 3, 400)  

---

## Questão 5 — AUT-000005

**AUT-000005** · Propriedades ACID e transações · item 1.14 · Fácil · Compreensão

*Questão autoral — estilo Cesgranrio.*

Em uma transferência bancária, o sistema debita R$ 500 da conta A e, antes de creditar a conta B, o servidor de banco de dados falha. Após a reinicialização, o SGBD desfaz o débito, e o saldo da conta A volta ao valor original. Em outra transferência, concluída com COMMIT, ocorre uma queda de energia logo em seguida e, após a recuperação, a transferência continua registrada.  
  
As garantias demonstradas nessas duas situações são, respectivamente,

(A) consistência e isolamento.  
(B) isolamento e durabilidade.  
(C) durabilidade e atomicidade.  
(D) atomicidade e durabilidade.  
(E) atomicidade e consistência.  

---

## Questão 6 — AUT-000006

**AUT-000006** · Bancos NoSQL e diferenciação entre tipos de bancos: grafos · item 1.18 · Média · Aplicação

*Questão autoral — estilo Cesgranrio.*

Uma empresa pretende identificar, a partir de milhões de registros, quais colaboradores estão a até três conexões de distância de um especialista em segurança, percorrendo relações como "trabalhou com", "é gerente de" e "participou do projeto". As consultas precisam percorrer relacionamentos em profundidade variável com bom desempenho.  
  
O tipo de banco de dados mais adequado a esse requisito é o

(A) colunar de famílias de colunas, pois armazena grandes volumes de dados esparsos em famílias de colunas.  
(B) orientado a grafos, pois representa entidades como nós e relacionamentos como arestas.  
(C) orientado a documentos, pois armazena os dados de cada colaborador em documentos aninhados, lidos em bloco com baixa latência.  
(D) de chave-valor, pois oferece acesso por chave com latência muito baixa.  
(E) multidimensional, pois organiza os dados em cubos com dimensões e hierarquias para análise.  

---

## Questão 7 — AUT-000007

**AUT-000007** · Integração de dados: ETL e ELT · item 1.19 · Média · Compreensão

*Questão autoral — estilo Cesgranrio.*

Em uma carga noturna, os dados de três sistemas de origem são extraídos e gravados, sem alterações, em uma área de preparação dentro do próprio data warehouse. Somente depois, scripts SQL executados no servidor do data warehouse padronizam formatos, eliminam duplicidades e consolidam os dados nas tabelas finais.  
  
Essa estratégia de integração é denominada

(A) ETL clássico, pois a transformação ocorre em um servidor de integração dedicado, antes da carga no destino final.  
(B) replicação síncrona, pois mantém uma cópia idêntica dos sistemas de origem.  
(C) ELT, pois os dados são carregados primeiro no destino e transformados depois, usando seu poder de processamento.  
(D) transferência de arquivos, pois o intercâmbio entre os sistemas não envolve nenhuma transformação.  
(E) virtualização de dados, pois as consultas são executadas diretamente nas fontes, sem cópia dos dados.  

---

## Questão 8 — AUT-000008

**AUT-000008** · Modelagem dimensional: tipos de medida e grão da tabela fato · item 1.7 · Difícil · Análise

*Questão autoral — estilo Cesgranrio.*

Um data warehouse possui a tabela fato FATO_ESTOQUE_DIARIO, com uma linha por produto, por depósito e por dia (um retrato do estoque ao final de cada dia). As dimensões são Data, Depósito e Produto, e a medida é saldo_quantidade.  
  
Sobre essa medida e a tabela fato, é correto afirmar que

(A) saldo_quantidade é aditiva e pode ser somada em todas as dimensões, inclusive ao longo do tempo.  
(B) saldo_quantidade é não aditiva, pois não pode ser somada em nenhuma dimensão.  
(C) somar saldo_quantidade de todos os dias de um mês fornece o estoque mensal, desde que a soma seja feita separadamente por depósito.  
(D) o saldo deveria ser armazenado na dimensão Produto, pois varia por produto, e não na tabela fato.  
(E) saldo_quantidade é semiaditiva: pode ser somada entre depósitos e produtos em uma mesma data, mas não ao longo do tempo.  

---

## Questão 9 — AUT-000009

**AUT-000009** · Qualidade de dados, dados mestres e dados de referência · item 1.21 · Fácil · Compreensão

*Questão autoral — estilo Cesgranrio.*

Em um programa de gestão de dados mestres e de referência, a distinção entre as categorias de dados orienta as responsabilidades e as ferramentas. Qual das opções a seguir exemplifica um dado de referência?

(A) A lista de status permitidos de uma ordem de serviço (aberta, em execução, concluída), com códigos padronizados.  
(B) O cadastro do equipamento P-101, com fabricante, localização, data de instalação e responsável técnico.  
(C) O registro da ordem de serviço nº 20260315, com data de execução, horas trabalhadas e peças utilizadas.  
(D) A informação de que a coluna "status" é do tipo CHAR(1), não aceita nulos e admite apenas os valores A, E e C.  
(E) O arquivo de registro (log) com os acessos dos usuários ao sistema de manutenção no último mês.  

---

## Questão 10 — AUT-000010

**AUT-000010** · Melhoria de performance: índices e predicados sargáveis · item 1.17 · Média · Avaliação

*Questão autoral — estilo Cesgranrio.*

A tabela equipamento possui milhões de linhas e um índice B-tree sobre a coluna tag. A consulta abaixo, executada com muita frequência, está lenta, e o plano de execução mostra varredura completa da tabela:  
  
SELECT * FROM equipamento WHERE UPPER(tag) = 'P-101';  
  
Considere um SGBD que permite índices sobre expressões. A ação mais adequada para melhorar o desempenho, sem alterar o resultado da consulta, é

(A) criar um segundo índice idêntico sobre a coluna tag, para que o otimizador possa balancear as leituras entre os dois índices.  
(B) particionar a tabela pelo tipo de equipamento, mantendo a consulta e o índice atuais.  
(C) aumentar a memória do servidor, pois o índice existente é utilizado em qualquer predicado que envolva a coluna tag, mesmo com funções.  
(D) criar um índice sobre a expressão UPPER(tag) ou, se os dados já forem padronizados, comparar tag diretamente no predicado.  
(E) substituir o índice B-tree por um índice bitmap sobre tag, adequado a colunas de alta cardinalidade.  

---

