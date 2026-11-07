# Simulado do módulo 1 — Arquitetura de dados

**Status:** rascunho · **Tempo:** 58 min · **Questões:** 15

**Critério de distribuição:** Até 15 questões por módulo, priorizando itens ainda não usados e mistura de dificuldade 30/50/20% (critério pedagógico).

**Observações:** Mistura de questões oficiais e autorais do módulo; algumas ainda `em_revisao`.

Composição: tipo {'autoral': 9, 'oficial': 6} · status {'validada': 9, 'em_revisao': 6} · dificuldade {'facil': 5, 'media': 8, 'dificil': 2}

## 1. AUT-000001 — Modelagem de dados: níveis conceitual, lógico e físico

*Questão autoral — estilo Cesgranrio.* · item 1.1 · Fácil · gabarito **C**

O enunciado descreve entidades, a cardinalidade dos relacionamentos (1 equipamento : N ordens) e a ausência de qualquer decisão tecnológica. Isso é o que caracteriza o **modelo conceitual**: visão do negócio, independente de SGBD e de paradigma de armazenamento. Quando o modelo passa a ter tabelas, chaves e normalização (relacional), tem-se o **lógico**; quando incorpora tipos, índices, particionamento e demais características do SGBD, tem-se o **físico**.

- **A)** Incorreta. Falar em "tabelas que serão criadas" é característica do modelo lógico/físico; no conceitual há entidades, não tabelas. O físico depende do SGBD, que aqui não foi definido.
- **B)** Incorreta. O modelo lógico já adota um paradigma (por exemplo, o relacional), com tabelas, atributos, chaves primárias e estrangeiras. O enunciado só descreve entidades e relacionamentos do negócio.
- **C)** Correta. Entidades e relacionamentos com cardinalidade, sem decisões de tecnologia: modelo conceitual.
- **D)** Incorreta. O modelo dimensional (fatos e dimensões) é uma abordagem para análise em data warehouse, não é o nível de abstração em questão; nada no enunciado trata de medidas ou de análise.
- **E)** Incorreta. Tipos de dados e índices do SGBD pertencem ao modelo físico; o enunciado informa justamente que nada foi decidido a esse respeito.

**Revisão rápida:** Conceitual = negócio (entidades e relacionamentos), sem tecnologia. Lógico = estrutura de um paradigma (tabelas, chaves). Físico = implementação no SGBD (tipos, índices, partições).

## 2. OFI-000010 — Modelagem conceitual

*Questão oficial — Fundação Cesgranrio, Transpetro PSP/Terra 002/2023, Prova 6, questão 63.* · item 1.1 · Fácil · gabarito **E**

O modelo **conceitual** (ex.: MER/DER) é o mais abstrato: define entidades, atributos e relacionamentos do negócio, sem depender de SGBD. Índices, partições e armazenamento pertencem ao modelo **físico**; tabelas e chaves, ao **lógico**.

- **A)** Incorreta. Índices e partições são do nível físico.
- **B)** Incorreta. Otimização e índices são do nível físico.
- **C)** Incorreta. A estrutura física das tabelas é do nível físico (ou lógico, no caso das tabelas).
- **D)** Incorreta. Detalhes de armazenamento em disco são do nível físico.
- **E)** Correta. Independência do SGBD e definição de entidades, atributos e relacionamentos caracterizam o nível conceitual.

**Revisão rápida:** Conceitual → lógico → físico, do mais abstrato ao mais próximo do SGBD.

## 3. AUT-000002 — Normalização: dependência parcial e 2FN

*Questão autoral — estilo Cesgranrio.* · item 1.4 · Média · gabarito **E**

1) **1FN:** os atributos são atômicos e há chave definida → a relação está em 1FN. 2) **2FN:** exige que todo atributo não primo dependa da **chave inteira**. Aqui, nome_produto depende só de id_produto (parte da chave): há **dependência parcial**, logo a relação **não está em 2FN**. 3) **Correção:** extrair o atributo e seu determinante para uma nova relação, PRODUTO(id_produto, nome_produto), mantendo id_produto em ITEM_PEDIDO como chave estrangeira. Quantidade e preco_negociado dependem da chave completa e permanecem.

- **A)** Incorreta. A relação não está em 2FN (há dependência parcial), de modo que nem se chega à análise da 3FN. Além disso, quantidade depende diretamente da chave composta, não de forma transitiva.
- **B)** Incorreta. Atomicidade garante apenas a 1FN. Para estar em 3FN a relação precisaria estar em 2FN, o que não ocorre por causa de nome_produto.
- **C)** Incorreta. Chave composta não impede a 1FN; o que a violaria seriam atributos multivalorados ou grupos repetidos, que o enunciado exclui (atributos atômicos).
- **D)** Incorreta no fundamento. Embora a relação não esteja em 2FN, o motivo é nome_produto; preco_negociado depende da chave composta completa (o preço é negociado por produto em cada pedido). A relação PEDIDO proposta não resolve a dependência parcial.
- **E)** Correta. Identifica a 1FN, a violação da 2FN pela dependência parcial id_produto → nome_produto e a decomposição adequada.

**Revisão rápida:** 1FN = atômico. 2FN = sem dependência parcial (atributo depende da chave inteira). 3FN = sem dependência transitiva. Corrige-se decompondo e mantendo a chave estrangeira.

## 4. OFI-000011 — Normalização: objetivo

*Questão oficial — Fundação Cesgranrio, Transpetro PSP/Terra 002/2023, Prova 6, questão 64.* · item 1.4 · Fácil · gabarito **A**

A normalização busca **reduzir a redundância** e evitar anomalias de inserção, atualização e exclusão, de modo que cada fato seja registrado em um único lugar.

- **A)** Correta. Elimina duplicações e concentra cada informação em um só lugar; é o objetivo central.
- **B)** Incorreta. Inverte o objetivo: a normalização reduz a redundância.
- **C)** Incorreta. A economia de espaço é efeito colateral, não o objetivo principal.
- **D)** Incorreta. Normalizar costuma aumentar o número de junções; ganho de desempenho de leitura é objetivo da desnormalização.
- **E)** Incorreta. Descrição visual da estrutura física não tem relação com normalização.

**Revisão rápida:** Normalizar = menos redundância e menos anomalias.

## 5. AUT-000003 — Integridade referencial: ações ON DELETE e ON UPDATE

*Questão autoral — estilo Cesgranrio.* · item 1.5 · Média · gabarito **B**

**Comando (1):** a regra ON UPDATE CASCADE propaga a alteração da chave primária do departamento aos empregados que o referenciam: Ana e Bruno passam a ter id_depto = 5. **Comando (2):** a regra ON DELETE RESTRICT rejeita a exclusão de um registro pai que ainda tem filhos (Ana e Bruno referenciam o departamento 5). **Comando (3):** inserir um empregado que referencia um departamento inexistente (7) viola a chave estrangeira e é rejeitado. Estado final: empregados (10, Ana, 5), (11, Bruno, 5), (12, Carla, 2); departamentos (2, Logística) e (5, Manutenção).

- **A)** Incorreta. O comando (1) não é rejeitado, porque a ação ON UPDATE é CASCADE (e não RESTRICT). A exclusão do comando (2) também não ocorre, porque ON DELETE é RESTRICT, e não CASCADE.
- **B)** Correta. UPDATE propagado, DELETE barrado pelo RESTRICT e INSERT barrado por referenciar pai inexistente.
- **C)** Incorreta. A integridade referencial impede registros órfãos: com ON UPDATE CASCADE, os filhos acompanham a nova chave do pai; o SGBD não "mantém" valores órfãos.
- **D)** Incorreta. Há a troca das ações: exclusão em cascata seria ON DELETE CASCADE. Com RESTRICT, a exclusão do pai que tem filhos é recusada.
- **E)** Incorreta. Deixar nulo o id_depto dos filhos seria ON DELETE SET NULL (não é o caso), e o SGBD recusa o INSERT de um valor que não existe na tabela referenciada; a integridade referencial não admite "aviso" nesse caso.

**Revisão rápida:** FK impede órfãos. ON UPDATE CASCADE propaga a nova chave; ON DELETE RESTRICT barra a exclusão de pai com filhos; INSERT com FK inexistente é rejeitado.

## 6. AUT-000008 — Modelagem dimensional: tipos de medida e grão da tabela fato

*Questão autoral — estilo Cesgranrio.* · item 1.7 · Difícil · gabarito **E**

A tabela é um **retrato periódico** (*snapshot*): o saldo em cada dia já representa o estoque acumulado até aquele dia. Somar o saldo de **dias diferentes** conta o mesmo estoque várias vezes, o que não faz sentido. Já somar entre **depósitos** ou **produtos**, em um mesmo dia, é válido. Isso caracteriza uma medida **semiaditiva**. Ao longo do tempo, usam-se agregações como média, último valor do período ou valores mínimos e máximos.

- **A)** Incorreta. Medidas aditivas podem ser somadas em todas as dimensões (por exemplo, a quantidade vendida). Somar saldos de dias diferentes duplica a contagem do mesmo estoque.
- **B)** Incorreta. Medidas não aditivas são razões, percentuais e preços unitários. O saldo pode ser somado entre depósitos e produtos em uma data fixa.
- **C)** Incorreta. Somar os saldos diários dentro de um mês continua somando ao longo do tempo (mesmo por depósito) e não produz um estoque mensal; para isso usa-se a média ou o saldo do último dia.
- **D)** Incorreta. Medidas numéricas e variáveis no tempo ficam na tabela fato; a dimensão Produto guarda atributos descritivos (nome, categoria), e o saldo muda a cada dia, o que não é característica de dimensão.
- **E)** Correta. Definição de medida semiaditiva aplicada ao saldo de estoque em um fato do tipo retrato periódico.

**Revisão rápida:** Saldo = semiaditiva (soma entre depósitos, não no tempo). Quantidade vendida = aditiva. Percentual e preço unitário = não aditivos.

## 7. AUT-000004 — SQL: junção externa, agregação e HAVING

*Questão autoral — estilo Cesgranrio.* · item 1.10 · Difícil · gabarito **A**

1) A **junção externa à esquerda** preserva todas as unidades, mesmo sem ordens: Oeste aparece com o.id nulo. 2) Após o agrupamento por unidade: Norte tem 3 ordens (ids 1, 2 e 7; a ordem 7 tem custo nulo, mas **o.id não é nulo**, então conta), com soma de custos 400 (a soma ignora NULL); Sul: 1 ordem, 200; Leste: 3 ordens, 300; Oeste: **0 ordens** (COUNT(o.id) ignora o NULL da junção externa), total 0 pelo COALESCE. 3) HAVING COUNT(o.id) < 3 mantém apenas Sul (1) e Oeste (0). 4) Ordenando por nome: Oeste, Sul.

- **A)** Correta: (Oeste, 0, 0) e (Sul, 1, 200). Norte e Leste têm 3 ordens cada e são eliminados pelo HAVING.
- **B)** Incorreta. Seria o resultado de uma junção interna (INNER JOIN), que descarta unidades sem ordens; com LEFT JOIN, Oeste é preservado.
- **C)** Incorreta. Seria o resultado com COUNT(*): em Oeste, a linha da junção externa existe (com colunas nulas de ordem_servico) e seria contada como 1. COUNT(o.id) ignora os nulos e retorna 0.
- **D)** Incorreta. Seria obtido se a ordem 7 (custo nulo) fosse desconsiderada, por exemplo com WHERE o.custo IS NOT NULL antes do agrupamento. Mas o filtro não existe e COUNT(o.id) conta a ordem 7, dando 3 em Norte, que então sai pelo HAVING.
- **E)** Incorreta. Representa o inverso: as unidades que o HAVING elimina (3 ordens cada). O HAVING mantém grupos com contagem menor que 3.

**Revisão rápida:** LEFT JOIN preserva a esquerda. COUNT(col) ignora NULL; COUNT(*) não. HAVING filtra grupos; WHERE filtra linhas. SUM e AVG ignoram NULL.

## 8. OFI-000005 — SQL: autojunção em tabela de hierarquia

*Questão oficial — Fundação Cesgranrio, Transpetro PSP/Terra 002/2023, Prova 6, questão 49.* · item 1.10 · Média · gabarito **A**

Neto de Carlos = filho de um filho de Carlos. Na **autojunção**, `f1` representa a geração dos filhos (`f1.pai = 'Carlos'`) e `f2` a dos netos, ligando o filho de `f1` ao pai de `f2` (`f1.filho = f2.pai`). Filhos de Carlos: Eriko e Fabio; seus filhos: Isidoro e João (`f2.filho`).

- **A)** Correta. Junção filho→pai com filtro em Carlos; projeta `f2.filho`, retornando Isidoro e João.
- **B)** Incorreta. Procura o **pai do pai** de Carlos (avô), com a junção invertida; retornaria Andre.
- **C)** Incorreta. Faz a junção correta, mas projeta `f1.pai`, que é sempre Carlos; retorna 'Carlos' (duas vezes).
- **D)** Incorreta. Junta linhas com o mesmo pai (irmãos); retornaria Eriko e Fabio (filhos), incluindo o próprio.
- **E)** Incorreta. Junta linhas com o mesmo filho; devolve apenas os próprios filhos de Carlos.

**Revisão rápida:** Neto = `f1.filho = f2.pai`; projeta-se `f2.filho`.

## 9. AUT-000005 — Propriedades ACID e transações

*Questão autoral — estilo Cesgranrio.* · item 1.14 · Fácil · gabarito **D**

Na primeira situação, a transação (débito + crédito) foi interrompida e o SGBD desfez a parte executada: ou a transação inteira ocorre ou nada ocorre, o que é a **atomicidade**. Na segunda, os efeitos de uma transação confirmada (COMMIT) sobrevivem a falhas posteriores, como a queda de energia: é a **durabilidade** (geralmente garantida por registros de log gravados em armazenamento estável antes da confirmação).

- **A)** Incorreta. A consistência leva o banco de um estado válido a outro válido, respeitando as regras e restrições; o desfazer do débito decorre da atomicidade. Isolamento trata da interferência entre transações concorrentes, que não existe no cenário.
- **B)** Incorreta. O isolamento não está em jogo (não há transações concorrentes). A primeira garantia é atomicidade.
- **C)** Incorreta pela ordem. As garantias foram invertidas: o desfazer do débito é atomicidade (primeira situação), e a manutenção da transferência após o COMMIT é durabilidade (segunda).
- **D)** Correta. Primeira situação: atomicidade. Segunda: durabilidade.
- **E)** Incorreta. A segunda garantia não é consistência: o fato de a transferência continuar registrada após a falha é durabilidade. A consistência diz respeito à validade das regras do banco.

**Revisão rápida:** A: tudo ou nada. C: estado válido para outro válido. I: sem interferência entre concorrentes. D: confirmado não se perde.

## 10. OFI-000009 — Propriedades ACID

*Questão oficial — Fundação Cesgranrio, Transpetro PSP/Terra 002/2023, Prova 6, questão 53.* · item 1.14 · Fácil · gabarito **C**

**A**tomicidade = tudo ou nada; **C**onsistência = o banco sai de um estado válido para outro válido; **I**solamento = transações concorrentes não se interferem; **D**urabilidade = o que foi confirmado persiste, mesmo com falha.

- **A)** Incorreta. Todas as definições estão trocadas entre as propriedades (a definição dada para atomicidade é a de consistência, e assim por diante).
- **B)** Incorreta. Contradiz as quatro propriedades: subdivide a atomicidade, dispensa a integridade, mistura transações e admite desfazer o que foi confirmado.
- **C)** Correta. Todas as quatro definições estão corretas.
- **D)** Incorreta. Define atomicidade como isolamento, consistência como atomicidade, isolamento como consistência e durabilidade como subtransações; todas trocadas.
- **E)** Incorreta. Define atomicidade como durabilidade, consistência como isolamento, isolamento como atomicidade e durabilidade como consistência; todas trocadas.

**Revisão rápida:** ACID: tudo-ou-nada, válido→válido, sem interferência, confirmado persiste.

## 11. AUT-000010 — Melhoria de performance: índices e predicados sargáveis

*Questão autoral — estilo Cesgranrio.* · item 1.17 · Média · gabarito **D**

Aplicar uma função à coluna (UPPER(tag)) torna o predicado **não sargável** em relação ao índice sobre tag: o otimizador não consegue usar o índice e faz a varredura completa. Há duas soluções: (a) criar um **índice sobre a expressão** UPPER(tag), de modo que a comparação use esse índice; ou (b) se os dados já estiverem padronizados em maiúsculas, **reescrever** o predicado como tag = 'P-101'. Em ambos os casos, o resultado da consulta é preservado.

- **A)** Incorreta. Um segundo índice idêntico não altera o problema (o predicado continua inviável para ele) e ainda aumenta o custo de escrita e de armazenamento.
- **B)** Incorreta. O particionamento por tipo de equipamento não ajuda uma consulta que filtra por tag sem informar o tipo; a varredura continuaria percorrendo as partições.
- **C)** Incorreta. A premissa é falsa: o índice sobre tag não é usado quando a coluna é envolvida em função no predicado. Mais memória não resolve a varredura completa.
- **D)** Correta. Índice funcional ou predicado reescrito de forma sargável.
- **E)** Incorreta. Índices bitmap são, em geral, indicados para colunas de **baixa** cardinalidade (e cargas analíticas); tag tem alta cardinalidade. Além disso, o problema continuaria, pois o predicado usa a função UPPER.

**Revisão rápida:** Predicado sargável usa a coluna "limpa". Função na coluna → varredura, salvo índice sobre a expressão. Mais índices não resolvem predicado não sargável.

## 12. OFI-000002 — Desempenho de banco de dados: desnormalização controlada

*Questão oficial — Fundação Cesgranrio, Transpetro PSP/Terra 002/2023, Prova 6, questão 45.* · item 1.17 · Média · gabarito **B**

A **desnormalização controlada** reduz o número de junções em consultas frequentes (trocando redundância por leitura mais rápida), e é uma técnica reconhecida de ajuste de desempenho. Todas as outras ações pioram o desempenho ou não garantem o que afirmam.

- **A)** Incorreta. Execução estritamente serial elimina a concorrência e derruba o desempenho; a correção é garantida por controle de concorrência (isolamento, bloqueios, MVCC), não por serialização total.
- **B)** Correta. Reduz junções custosas em consultas muito frequentes; tem custo em redundância e manutenção, mas melhora o desempenho de leitura.
- **C)** Incorreta. DISTINCT acrescenta ordenação ou *hash* para eliminar duplicatas e pode alterar o resultado; trocar todos os SELECT por ele é prejudicial.
- **D)** Incorreta. ORDER BY adiciona custo de ordenação; deve ser usado só quando a ordem for necessária.
- **E)** Incorreta. Fragmentação de índice **degrada** o desempenho; o ajuste correto é reorganizar ou reconstruir índices.

**Revisão rápida:** Ajuste: índices adequados, consultas sargáveis, desnormalização controlada, estatísticas atualizadas.

## 13. AUT-000006 — Bancos NoSQL e diferenciação entre tipos de bancos: grafos

*Questão autoral — estilo Cesgranrio.* · item 1.18 · Média · gabarito **B**

O requisito central é **navegar relacionamentos em profundidade variável** (conexões de até três saltos). Bancos de **grafos** modelam entidades como nós e relacionamentos como arestas (com propriedades) e são projetados para consultas de caminhos, vizinhança e recomendação, evitando junções recursivas custosas. Os demais tipos atendem a outros padrões de acesso.

- **A)** Incorreta. O modelo colunar de famílias é indicado para grandes volumes de escrita e leitura por chave de linha, sem foco em travessia de relacionamentos.
- **B)** Correta. Nós e arestas; travessias de profundidade variável.
- **C)** Incorreta. Documentos aninhados são adequados a dados semiestruturados e agregados lidos em bloco; relacionamentos entre documentos exigiriam referências e navegação manual.
- **D)** Incorreta. Chave-valor é muito eficiente para acesso por chave, mas não oferece consulta por relacionamentos.
- **E)** Incorreta. O modelo multidimensional (cubos) serve a análises agregadas por dimensões (OLAP), não à travessia de redes de relacionamentos.

**Revisão rápida:** Relacionamentos em profundidade → grafos. Agregado flexível → documentos. Acesso por chave → chave-valor. Análise por dimensões → multidimensional.

## 14. OFI-000004 — Banco de grafos: consulta em Cypher

*Questão oficial — Fundação Cesgranrio, Transpetro PSP/Terra 002/2023, Prova 6, questão 48.* · item 1.18 · Média · gabarito **A**

Em Cypher, `MATCH` descreve um padrão; `(p)-[:TIPO]->(x)` segue a relação de `p` para `x`, e `WHERE` filtra. A consulta A localiza a pessoa de nome Alice e retorna os nós ligados por `AMIGO_DE` a partir dela.

- **A)** Correta. Padrão válido: Alice como origem, relação `AMIGO_DE` saindo dela e retorno dos amigos.
- **B)** Incorreta. Inverte a direção da seta, retornando quem aponta para Alice; com a relação modelada de Alice para o amigo, não retorna os amigos dela.
- **C)** Incorreta. Usa a relação `INIMIGO_DE`; retorna inimigos, não amigos.
- **D)** Incorreta. É SQL relacional e não se aplica a um banco de grafos.
- **E)** Incorreta. `FIND` não é cláusula do Cypher; a sintaxe é inválida.

**Revisão rápida:** Cypher: `MATCH (a)-[:REL]->(b) WHERE ... RETURN b`.

## 15. AUT-000007 — Integração de dados: ETL e ELT

*Questão autoral — estilo Cesgranrio.* · item 1.19 · Média · gabarito **C**

A ordem das fases revela a estratégia: **extração → carga (dados brutos no destino) → transformação no próprio destino**. É o **ELT** (*Extract, Load, Transform*), que aproveita o poder de processamento do data warehouse ou do *data lake*. No ETL clássico, a transformação ocorre **antes** da carga, em uma área ou servidor intermediário.

- **A)** Incorreta. No ETL a transformação precede a carga; aqui os dados brutos são carregados antes de serem transformados.
- **B)** Incorreta. Replicação mantém cópias sincronizadas, sem padronizar, deduplicar e consolidar dados de múltiplas fontes.
- **C)** Correta. Carga dos dados brutos no destino e transformação posterior com SQL no data warehouse: ELT.
- **D)** Incorreta. Transferência de arquivos é uma forma de integração por intercâmbio de arquivos; o enunciado descreve uma etapa de transformação de dados.
- **E)** Incorreta. Virtualização de dados consulta as fontes sem copiá-las; o enunciado fala em extrair, gravar e consolidar em tabelas finais.

**Revisão rápida:** ETL: extrai → transforma → carrega. ELT: extrai → carrega → transforma no destino.
