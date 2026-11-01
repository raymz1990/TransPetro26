# Banco de questões — Módulo 1: Arquitetura de Dados (lote piloto, gabaritos comentados)

**Tipo:** questões **autorais** — **Questão autoral — estilo Cesgranrio.** **Status:** validada 10.

## Quadro de gabaritos

| Questão | ID | Gabarito | Item do edital | Dificuldade | Habilidade | Tipo | Status |
|---|---|---|---|---|---|---|---|
| 1 | AUT-000001 | C | 1.1 | Fácil | Compreensão | Cenário | Validada |
| 2 | AUT-000002 | E | 1.4 | Média | Análise | Cenário | Validada |
| 3 | AUT-000003 | B | 1.5 | Média | Aplicação | Cenário | Validada |
| 4 | AUT-000004 | A | 1.10 | Difícil | Resolução de problemas | Cálculo | Validada |
| 5 | AUT-000005 | D | 1.14 | Fácil | Compreensão | Cenário | Validada |
| 6 | AUT-000006 | B | 1.18 | Média | Aplicação | Cenário | Validada |
| 7 | AUT-000007 | C | 1.19 | Média | Compreensão | Comparativa | Validada |
| 8 | AUT-000008 | E | 1.7 | Difícil | Análise | Aplicada | Validada |
| 9 | AUT-000009 | A | 1.21 | Fácil | Compreensão | Conceitual | Validada |
| 10 | AUT-000010 | D | 1.17 | Média | Avaliação | Aplicada | Validada |

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

### A. Gabarito

**C**

### B. Resolução comentada

O enunciado descreve entidades, a cardinalidade dos relacionamentos (1 equipamento : N ordens) e a ausência de qualquer decisão tecnológica. Isso é o que caracteriza o **modelo conceitual**: visão do negócio, independente de SGBD e de paradigma de armazenamento. Quando o modelo passa a ter tabelas, chaves e normalização (relacional), tem-se o **lógico**; quando incorpora tipos, índices, particionamento e demais características do SGBD, tem-se o **físico**.

### C. Análise das alternativas

- **(A)** Incorreta. Falar em "tabelas que serão criadas" é característica do modelo lógico/físico; no conceitual há entidades, não tabelas. O físico depende do SGBD, que aqui não foi definido.
- **(B)** Incorreta. O modelo lógico já adota um paradigma (por exemplo, o relacional), com tabelas, atributos, chaves primárias e estrangeiras. O enunciado só descreve entidades e relacionamentos do negócio.
- **(C)** Correta. Entidades e relacionamentos com cardinalidade, sem decisões de tecnologia: modelo conceitual.
- **(D)** Incorreta. O modelo dimensional (fatos e dimensões) é uma abordagem para análise em data warehouse, não é o nível de abstração em questão; nada no enunciado trata de medidas ou de análise.
- **(E)** Incorreta. Tipos de dados e índices do SGBD pertencem ao modelo físico; o enunciado informa justamente que nada foi decidido a esse respeito.

### D. Fundamentação teórica

- **Módulo:** M01 — Arquitetura de dados
- **Assunto:** Modelagem de dados (conceitual, lógica e física)
- **Item do edital:** 1.1 (E5-002)
- **Arquivo de teoria:** `conteudo/01-arquitetura-dados/02-modelagem-dados.md`
- **Referência:** Material teórico do projeto, seção sobre os níveis de modelagem.

### E. Ponto de atenção para a prova

Confunda-se o nível de abstração com o produto: o conceitual **não** tem tabelas nem tipos de dados. Em prova, a palavra-chave é "independente de SGBD".

### F. Revisão rápida

Conceitual = negócio (entidades e relacionamentos), sem tecnologia. Lógico = estrutura de um paradigma (tabelas, chaves). Físico = implementação no SGBD (tipos, índices, partições).

### G. Tags

`m01` · `modelagem` · `conceitual-logico-fisico` · `item-1.1` · `facil` · `compreensao` · `cenario` · `autoral`

**Verificação do gabarito:** Sem execução (questão conceitual); gabarito conferido contra o arquivo de teoria.  
**Status de validação:** `validada`  
**Validação:** Aprovada pelo usuário em 2026-10-31 (lote piloto do M01); sem revisão por terceiros.

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

### A. Gabarito

**E**

### B. Resolução comentada

1) **1FN:** os atributos são atômicos e há chave definida → a relação está em 1FN. 2) **2FN:** exige que todo atributo não primo dependa da **chave inteira**. Aqui, nome_produto depende só de id_produto (parte da chave): há **dependência parcial**, logo a relação **não está em 2FN**. 3) **Correção:** extrair o atributo e seu determinante para uma nova relação, PRODUTO(id_produto, nome_produto), mantendo id_produto em ITEM_PEDIDO como chave estrangeira. Quantidade e preco_negociado dependem da chave completa e permanecem.

### C. Análise das alternativas

- **(A)** Incorreta. A relação não está em 2FN (há dependência parcial), de modo que nem se chega à análise da 3FN. Além disso, quantidade depende diretamente da chave composta, não de forma transitiva.
- **(B)** Incorreta. Atomicidade garante apenas a 1FN. Para estar em 3FN a relação precisaria estar em 2FN, o que não ocorre por causa de nome_produto.
- **(C)** Incorreta. Chave composta não impede a 1FN; o que a violaria seriam atributos multivalorados ou grupos repetidos, que o enunciado exclui (atributos atômicos).
- **(D)** Incorreta no fundamento. Embora a relação não esteja em 2FN, o motivo é nome_produto; preco_negociado depende da chave composta completa (o preço é negociado por produto em cada pedido). A relação PEDIDO proposta não resolve a dependência parcial.
- **(E)** Correta. Identifica a 1FN, a violação da 2FN pela dependência parcial id_produto → nome_produto e a decomposição adequada.

### D. Fundamentação teórica

- **Módulo:** M01 — Arquitetura de dados
- **Assunto:** Normalização das estruturas de dados
- **Item do edital:** 1.4 (E5-005)
- **Arquivo de teoria:** `conteudo/01-arquitetura-dados/04-normalizacao.md`
- **Referência:** Material teórico do projeto, seções sobre formas normais e dependência funcional.

### E. Ponto de atenção para a prova

Dependência parcial só existe com **chave composta**: se a chave é simples, a relação em 1FN já está em 2FN. Em questões de normalização, escreva as dependências funcionais antes de classificar.

### F. Revisão rápida

1FN = atômico. 2FN = sem dependência parcial (atributo depende da chave inteira). 3FN = sem dependência transitiva. Corrige-se decompondo e mantendo a chave estrangeira.

### G. Tags

`m01` · `normalizacao` · `2fn` · `dependencia-funcional` · `item-1.4` · `media` · `analise` · `cenario` · `autoral`

**Verificação do gabarito:** Sem execução (análise de dependências funcionais); gabarito conferido contra o arquivo de teoria.  
**Status de validação:** `validada`  
**Validação:** Aprovada pelo usuário em 2026-10-31 (lote piloto do M01); sem revisão por terceiros.

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

### A. Gabarito

**B**

### B. Resolução comentada

**Comando (1):** a regra ON UPDATE CASCADE propaga a alteração da chave primária do departamento aos empregados que o referenciam: Ana e Bruno passam a ter id_depto = 5. **Comando (2):** a regra ON DELETE RESTRICT rejeita a exclusão de um registro pai que ainda tem filhos (Ana e Bruno referenciam o departamento 5). **Comando (3):** inserir um empregado que referencia um departamento inexistente (7) viola a chave estrangeira e é rejeitado. Estado final: empregados (10, Ana, 5), (11, Bruno, 5), (12, Carla, 2); departamentos (2, Logística) e (5, Manutenção).

### C. Análise das alternativas

- **(A)** Incorreta. O comando (1) não é rejeitado, porque a ação ON UPDATE é CASCADE (e não RESTRICT). A exclusão do comando (2) também não ocorre, porque ON DELETE é RESTRICT, e não CASCADE.
- **(B)** Correta. UPDATE propagado, DELETE barrado pelo RESTRICT e INSERT barrado por referenciar pai inexistente.
- **(C)** Incorreta. A integridade referencial impede registros órfãos: com ON UPDATE CASCADE, os filhos acompanham a nova chave do pai; o SGBD não "mantém" valores órfãos.
- **(D)** Incorreta. Há a troca das ações: exclusão em cascata seria ON DELETE CASCADE. Com RESTRICT, a exclusão do pai que tem filhos é recusada.
- **(E)** Incorreta. Deixar nulo o id_depto dos filhos seria ON DELETE SET NULL (não é o caso), e o SGBD recusa o INSERT de um valor que não existe na tabela referenciada; a integridade referencial não admite "aviso" nesse caso.

### D. Fundamentação teórica

- **Módulo:** M01 — Arquitetura de dados
- **Assunto:** Integridade referencial; DML
- **Item do edital:** 1.5 (E5-006) · itens secundários: 1.12
- **Arquivo de teoria:** `conteudo/01-arquitetura-dados/03-modelo-relacional.md`
- **Referência:** Material teórico do projeto, seção sobre integridade referencial e ações referenciais.

### E. Ponto de atenção para a prova

Distinga as ações: **RESTRICT/NO ACTION** (rejeita), **CASCADE** (propaga), **SET NULL** (anula). A regra de UPDATE e a de DELETE são **independentes**. O suporte exato varia por SGBD, mas o conceito é o mesmo.

### F. Revisão rápida

FK impede órfãos. ON UPDATE CASCADE propaga a nova chave; ON DELETE RESTRICT barra a exclusão de pai com filhos; INSERT com FK inexistente é rejeitado.

### G. Tags

`m01` · `integridade-referencial` · `chave-estrangeira` · `on-delete` · `on-update` · `item-1.5` · `media` · `aplicacao` · `cenario` · `autoral`

**Verificação do gabarito:** Cenário executado em SQLite com PRAGMA foreign_keys=ON: (1) aceito e propagado; (2) e (3) rejeitados; estado final conforme a resolução.  
**Status de validação:** `validada`  
**Validação:** Aprovada pelo usuário em 2026-10-31 (lote piloto do M01); sem revisão por terceiros.

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

### A. Gabarito

**A**

### B. Resolução comentada

1) A **junção externa à esquerda** preserva todas as unidades, mesmo sem ordens: Oeste aparece com o.id nulo. 2) Após o agrupamento por unidade: Norte tem 3 ordens (ids 1, 2 e 7; a ordem 7 tem custo nulo, mas **o.id não é nulo**, então conta), com soma de custos 400 (a soma ignora NULL); Sul: 1 ordem, 200; Leste: 3 ordens, 300; Oeste: **0 ordens** (COUNT(o.id) ignora o NULL da junção externa), total 0 pelo COALESCE. 3) HAVING COUNT(o.id) < 3 mantém apenas Sul (1) e Oeste (0). 4) Ordenando por nome: Oeste, Sul.

### C. Análise das alternativas

- **(A)** Correta: (Oeste, 0, 0) e (Sul, 1, 200). Norte e Leste têm 3 ordens cada e são eliminados pelo HAVING.
- **(B)** Incorreta. Seria o resultado de uma junção interna (INNER JOIN), que descarta unidades sem ordens; com LEFT JOIN, Oeste é preservado.
- **(C)** Incorreta. Seria o resultado com COUNT(*): em Oeste, a linha da junção externa existe (com colunas nulas de ordem_servico) e seria contada como 1. COUNT(o.id) ignora os nulos e retorna 0.
- **(D)** Incorreta. Seria obtido se a ordem 7 (custo nulo) fosse desconsiderada, por exemplo com WHERE o.custo IS NOT NULL antes do agrupamento. Mas o filtro não existe e COUNT(o.id) conta a ordem 7, dando 3 em Norte, que então sai pelo HAVING.
- **(E)** Incorreta. Representa o inverso: as unidades que o HAVING elimina (3 ordens cada). O HAVING mantém grupos com contagem menor que 3.

### D. Fundamentação teórica

- **Módulo:** M01 — Arquitetura de dados
- **Assunto:** Linguagem de consulta estruturada (SQL)
- **Item do edital:** 1.10 (E5-011) · itens secundários: 1.12
- **Arquivo de teoria:** `conteudo/01-arquitetura-dados/05-sql-e-sgbd.md`
- **Referência:** Material teórico do projeto, seções sobre junções, agregação e filtros (WHERE × HAVING).

### E. Ponto de atenção para a prova

**COUNT(coluna)** ignora nulos; **COUNT(*)** conta linhas. Em LEFT JOIN, a coluna da tabela da direita fica nula nas unidades sem correspondência. **WHERE** filtra linhas antes do agrupamento; **HAVING** filtra grupos depois. **SUM** ignora NULL.

### F. Revisão rápida

LEFT JOIN preserva a esquerda. COUNT(col) ignora NULL; COUNT(*) não. HAVING filtra grupos; WHERE filtra linhas. SUM e AVG ignoram NULL.

### G. Tags

`m01` · `sql` · `left-join` · `group-by` · `having` · `count` · `null` · `item-1.10` · `dificil` · `resolucao-de-problemas` · `calculo` · `autoral`

**Verificação do gabarito:** Consulta executada em SQLite: resultado (Oeste,0,0.0), (Sul,1,200.0); variantes dos distratores (INNER JOIN, COUNT(*), WHERE custo IS NOT NULL, HAVING >= 3) executadas e conferidas.  
**Status de validação:** `validada`  
**Validação:** Aprovada pelo usuário em 2026-10-31 (lote piloto do M01); sem revisão por terceiros.

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

### A. Gabarito

**D**

### B. Resolução comentada

Na primeira situação, a transação (débito + crédito) foi interrompida e o SGBD desfez a parte executada: ou a transação inteira ocorre ou nada ocorre, o que é a **atomicidade**. Na segunda, os efeitos de uma transação confirmada (COMMIT) sobrevivem a falhas posteriores, como a queda de energia: é a **durabilidade** (geralmente garantida por registros de log gravados em armazenamento estável antes da confirmação).

### C. Análise das alternativas

- **(A)** Incorreta. A consistência leva o banco de um estado válido a outro válido, respeitando as regras e restrições; o desfazer do débito decorre da atomicidade. Isolamento trata da interferência entre transações concorrentes, que não existe no cenário.
- **(B)** Incorreta. O isolamento não está em jogo (não há transações concorrentes). A primeira garantia é atomicidade.
- **(C)** Incorreta pela ordem. As garantias foram invertidas: o desfazer do débito é atomicidade (primeira situação), e a manutenção da transferência após o COMMIT é durabilidade (segunda).
- **(D)** Correta. Primeira situação: atomicidade. Segunda: durabilidade.
- **(E)** Incorreta. A segunda garantia não é consistência: o fato de a transferência continuar registrada após a falha é durabilidade. A consistência diz respeito à validade das regras do banco.

### D. Fundamentação teórica

- **Módulo:** M01 — Arquitetura de dados
- **Assunto:** Propriedades de banco de dados: ACID; transações
- **Item do edital:** 1.14 (E5-015) · itens secundários: 1.16
- **Arquivo de teoria:** `conteudo/01-arquitetura-dados/06-transacoes-e-acid.md`
- **Referência:** Material teórico do projeto, seção sobre as propriedades ACID.

### E. Ponto de atenção para a prova

Associe cada letra a um **sintoma**: A = "tudo ou nada" (rollback); C = regras e restrições preservadas; I = transações concorrentes sem interferência indevida; D = COMMIT sobrevive a falhas (log).

### F. Revisão rápida

A: tudo ou nada. C: estado válido para outro válido. I: sem interferência entre concorrentes. D: confirmado não se perde.

### G. Tags

`m01` · `acid` · `atomicidade` · `durabilidade` · `transacao` · `item-1.14` · `facil` · `compreensao` · `cenario` · `autoral`

**Verificação do gabarito:** Sem execução (questão conceitual); gabarito conferido contra o arquivo de teoria.  
**Status de validação:** `validada`  
**Validação:** Aprovada pelo usuário em 2026-10-31 (lote piloto do M01); sem revisão por terceiros.

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

### A. Gabarito

**B**

### B. Resolução comentada

O requisito central é **navegar relacionamentos em profundidade variável** (conexões de até três saltos). Bancos de **grafos** modelam entidades como nós e relacionamentos como arestas (com propriedades) e são projetados para consultas de caminhos, vizinhança e recomendação, evitando junções recursivas custosas. Os demais tipos atendem a outros padrões de acesso.

### C. Análise das alternativas

- **(A)** Incorreta. O modelo colunar de famílias é indicado para grandes volumes de escrita e leitura por chave de linha, sem foco em travessia de relacionamentos.
- **(B)** Correta. Nós e arestas; travessias de profundidade variável.
- **(C)** Incorreta. Documentos aninhados são adequados a dados semiestruturados e agregados lidos em bloco; relacionamentos entre documentos exigiriam referências e navegação manual.
- **(D)** Incorreta. Chave-valor é muito eficiente para acesso por chave, mas não oferece consulta por relacionamentos.
- **(E)** Incorreta. O modelo multidimensional (cubos) serve a análises agregadas por dimensões (OLAP), não à travessia de redes de relacionamentos.

### D. Fundamentação teórica

- **Módulo:** M01 — Arquitetura de dados
- **Assunto:** Bancos de dados NoSQL; diferenciação entre bancos relacionais, multidimensionais, de documentos e de grafos
- **Item do edital:** 1.18 (E5-019) · itens secundários: 1.23
- **Arquivo de teoria:** `conteudo/01-arquitetura-dados/07-bancos-nao-relacionais.md`
- **Referência:** Material teórico do projeto, seções sobre tipos de NoSQL e sobre a diferenciação entre bancos (item 1.23).

### E. Ponto de atenção para a prova

Escolha o tipo de banco pelo **padrão de acesso** descrito: por chave (chave-valor), por agregado/documento (documentos), por relacionamentos (grafos), por agregação analítica (multidimensional), por escrita massiva (colunar).

### F. Revisão rápida

Relacionamentos em profundidade → grafos. Agregado flexível → documentos. Acesso por chave → chave-valor. Análise por dimensões → multidimensional.

### G. Tags

`m01` · `nosql` · `grafos` · `tipos-de-banco` · `item-1.18` · `item-1.23` · `media` · `aplicacao` · `cenario` · `autoral`

**Verificação do gabarito:** Sem execução (questão conceitual); gabarito conferido contra o arquivo de teoria.  
**Status de validação:** `validada`  
**Validação:** Aprovada pelo usuário em 2026-10-31 (lote piloto do M01); sem revisão por terceiros.

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

### A. Gabarito

**C**

### B. Resolução comentada

A ordem das fases revela a estratégia: **extração → carga (dados brutos no destino) → transformação no próprio destino**. É o **ELT** (*Extract, Load, Transform*), que aproveita o poder de processamento do data warehouse ou do *data lake*. No ETL clássico, a transformação ocorre **antes** da carga, em uma área ou servidor intermediário.

### C. Análise das alternativas

- **(A)** Incorreta. No ETL a transformação precede a carga; aqui os dados brutos são carregados antes de serem transformados.
- **(B)** Incorreta. Replicação mantém cópias sincronizadas, sem padronizar, deduplicar e consolidar dados de múltiplas fontes.
- **(C)** Correta. Carga dos dados brutos no destino e transformação posterior com SQL no data warehouse: ELT.
- **(D)** Incorreta. Transferência de arquivos é uma forma de integração por intercâmbio de arquivos; o enunciado descreve uma etapa de transformação de dados.
- **(E)** Incorreta. Virtualização de dados consulta as fontes sem copiá-las; o enunciado fala em extrair, gravar e consolidar em tabelas finais.

### D. Fundamentação teórica

- **Módulo:** M01 — Arquitetura de dados
- **Assunto:** Integração dos dados (ETL, transferência de arquivos e integração via base de dados)
- **Item do edital:** 1.19 (E5-020)
- **Arquivo de teoria:** `conteudo/01-arquitetura-dados/08-integracao-e-etl.md`
- **Referência:** Material teórico do projeto, seção sobre ETL × ELT.

### E. Ponto de atenção para a prova

A diferença entre ETL e ELT está **onde e quando** ocorre a transformação: antes da carga (ETL) ou no destino, depois da carga (ELT). Em ambos há *staging*.

### F. Revisão rápida

ETL: extrai → transforma → carrega. ELT: extrai → carrega → transforma no destino.

### G. Tags

`m01` · `etl` · `elt` · `integracao` · `staging` · `item-1.19` · `media` · `compreensao` · `comparativa` · `autoral`

**Verificação do gabarito:** Sem execução (questão conceitual); gabarito conferido contra o arquivo de teoria.  
**Status de validação:** `validada`  
**Validação:** Aprovada pelo usuário em 2026-10-31 (lote piloto do M01); sem revisão por terceiros.

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

### A. Gabarito

**E**

### B. Resolução comentada

A tabela é um **retrato periódico** (*snapshot*): o saldo em cada dia já representa o estoque acumulado até aquele dia. Somar o saldo de **dias diferentes** conta o mesmo estoque várias vezes, o que não faz sentido. Já somar entre **depósitos** ou **produtos**, em um mesmo dia, é válido. Isso caracteriza uma medida **semiaditiva**. Ao longo do tempo, usam-se agregações como média, último valor do período ou valores mínimos e máximos.

### C. Análise das alternativas

- **(A)** Incorreta. Medidas aditivas podem ser somadas em todas as dimensões (por exemplo, a quantidade vendida). Somar saldos de dias diferentes duplica a contagem do mesmo estoque.
- **(B)** Incorreta. Medidas não aditivas são razões, percentuais e preços unitários. O saldo pode ser somado entre depósitos e produtos em uma data fixa.
- **(C)** Incorreta. Somar os saldos diários dentro de um mês continua somando ao longo do tempo (mesmo por depósito) e não produz um estoque mensal; para isso usa-se a média ou o saldo do último dia.
- **(D)** Incorreta. Medidas numéricas e variáveis no tempo ficam na tabela fato; a dimensão Produto guarda atributos descritivos (nome, categoria), e o saldo muda a cada dia, o que não é característica de dimensão.
- **(E)** Correta. Definição de medida semiaditiva aplicada ao saldo de estoque em um fato do tipo retrato periódico.

### D. Fundamentação teórica

- **Módulo:** M01 — Arquitetura de dados
- **Assunto:** Modelagem dimensional
- **Item do edital:** 1.7 (E5-008)
- **Arquivo de teoria:** `conteudo/01-arquitetura-dados/09-data-warehouse-e-big-data.md`
- **Referência:** Material teórico do projeto, seções sobre tipos de medidas e tipos de tabela fato; Kimball Group, "Dimensional Modeling Techniques" (títulos dos tipos de tabela fato).

### E. Ponto de atenção para a prova

Classifique a medida: **aditiva** (soma em tudo), **semiaditiva** (não soma no tempo: saldos), **não aditiva** (razões e preços unitários: recalcule a partir dos componentes). A resposta correta quase sempre cita o **tempo**.

### F. Revisão rápida

Saldo = semiaditiva (soma entre depósitos, não no tempo). Quantidade vendida = aditiva. Percentual e preço unitário = não aditivos.

### G. Tags

`m01` · `modelagem-dimensional` · `tabela-fato` · `medida-semiaditiva` · `snapshot` · `item-1.7` · `dificil` · `analise` · `aplicada` · `autoral`

**Verificação do gabarito:** Sem execução (questão conceitual); gabarito conferido contra o arquivo de teoria.  
**Status de validação:** `validada`  
**Validação:** Aprovada pelo usuário em 2026-10-31 (lote piloto do M01); sem revisão por terceiros.

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

### A. Gabarito

**A**

### B. Resolução comentada

**Dados de referência** são conjuntos de valores ou códigos usados para classificar e restringir outros dados (países, UF, unidades de medida, status). A lista de status padronizados, usada por vários sistemas, é o exemplo típico. O cadastro do equipamento é **dado mestre** (entidade central do negócio); o registro da ordem de serviço é **dado transacional** (evento); a descrição do tipo e dos valores aceitos de uma coluna é **metadado**; o *log* de acessos é um registro operacional de eventos.

### C. Análise das alternativas

- **(A)** Correta. Lista de valores padronizados que classificam outros dados e é compartilhada: dado de referência.
- **(B)** Incorreta. O equipamento é uma entidade central do negócio, compartilhada entre sistemas: dado mestre.
- **(C)** Incorreta. A ordem de serviço é um evento com data, horas e peças: dado transacional.
- **(D)** Incorreta. Descreve a estrutura e o domínio da coluna, ou seja, dados sobre os dados: metadado.
- **(E)** Incorreta. Trata-se de registro de eventos de uso, sem função de classificar outros dados; não é dado de referência.

### D. Fundamentação teórica

- **Módulo:** M01 — Arquitetura de dados
- **Assunto:** Qualidade de dados e gestão de dados mestres e de referência; metadados
- **Item do edital:** 1.21 (E5-022) · itens secundários: 1.6
- **Arquivo de teoria:** `conteudo/01-arquitetura-dados/10-qualidade-e-governanca-dados.md`
- **Referência:** Material teórico do projeto, seção sobre mestre × referência × transacional × metadado.

### E. Ponto de atenção para a prova

Teste mental: **mestre** = "quem/o quê" do negócio (cliente, equipamento); **referência** = lista de valores permitidos; **transacional** = evento; **metadado** = dado sobre o dado.

### F. Revisão rápida

Mestre: entidades centrais (equipamento). Referência: listas e códigos (status, UF). Transacional: eventos (ordem de serviço). Metadado: descreve os dados.

### G. Tags

`m01` · `dados-mestres` · `dados-de-referencia` · `metadados` · `item-1.21` · `facil` · `compreensao` · `conceitual` · `autoral`

**Verificação do gabarito:** Sem execução (questão conceitual); gabarito conferido contra o arquivo de teoria.  
**Status de validação:** `validada`  
**Validação:** Aprovada pelo usuário em 2026-10-31 (lote piloto do M01); sem revisão por terceiros.

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

### A. Gabarito

**D**

### B. Resolução comentada

Aplicar uma função à coluna (UPPER(tag)) torna o predicado **não sargável** em relação ao índice sobre tag: o otimizador não consegue usar o índice e faz a varredura completa. Há duas soluções: (a) criar um **índice sobre a expressão** UPPER(tag), de modo que a comparação use esse índice; ou (b) se os dados já estiverem padronizados em maiúsculas, **reescrever** o predicado como tag = 'P-101'. Em ambos os casos, o resultado da consulta é preservado.

### C. Análise das alternativas

- **(A)** Incorreta. Um segundo índice idêntico não altera o problema (o predicado continua inviável para ele) e ainda aumenta o custo de escrita e de armazenamento.
- **(B)** Incorreta. O particionamento por tipo de equipamento não ajuda uma consulta que filtra por tag sem informar o tipo; a varredura continuaria percorrendo as partições.
- **(C)** Incorreta. A premissa é falsa: o índice sobre tag não é usado quando a coluna é envolvida em função no predicado. Mais memória não resolve a varredura completa.
- **(D)** Correta. Índice funcional ou predicado reescrito de forma sargável.
- **(E)** Incorreta. Índices bitmap são, em geral, indicados para colunas de **baixa** cardinalidade (e cargas analíticas); tag tem alta cardinalidade. Além disso, o problema continuaria, pois o predicado usa a função UPPER.

### D. Fundamentação teórica

- **Módulo:** M01 — Arquitetura de dados
- **Assunto:** Melhoria de performance de banco de dados
- **Item do edital:** 1.17 (E5-018) · itens secundários: 1.10
- **Arquivo de teoria:** `conteudo/01-arquitetura-dados/05-sql-e-sgbd.md`
- **Referência:** Material teórico do projeto, seção sobre desempenho e predicados sargáveis.

### E. Ponto de atenção para a prova

Função aplicada à coluna filtrada (UPPER, TRUNC, CAST) pode **impedir o uso do índice**. Soluções: índice funcional, reescrita do predicado ou normalização do dado. Cuide também de "LIKE '%texto'" (coringa inicial).

### F. Revisão rápida

Predicado sargável usa a coluna "limpa". Função na coluna → varredura, salvo índice sobre a expressão. Mais índices não resolvem predicado não sargável.

### G. Tags

`m01` · `performance` · `indices` · `sargavel` · `plano-de-execucao` · `item-1.17` · `media` · `avaliacao` · `aplicada` · `autoral`

**Verificação do gabarito:** Plano de execução conferido em SQLite: com índice em tag, o predicado UPPER(tag) gera varredura (SCAN); com índice sobre UPPER(tag), passa a SEARCH por índice. O recurso depende do SGBD.  
**Status de validação:** `validada`  
**Validação:** Aprovada pelo usuário em 2026-10-31 (lote piloto do M01); sem revisão por terceiros.

---

