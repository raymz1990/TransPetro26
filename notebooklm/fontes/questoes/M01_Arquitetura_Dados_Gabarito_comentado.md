# Gabarito comentado — Módulo M01: Arquitetura de Dados

## Identificação
- Concurso: Processo Seletivo Público TRANSPETRO 2026.4 (Edital nº 04/2026)
- Ênfase: 5 — Análise de Sistemas: Processos de Negócios
- Banca: Fundação Cesgranrio
- Módulo: M01 — Arquitetura de Dados
- Total: 41 questões; status `validada` ou `em_revisao` (indicado em cada questão)
- Gerado em 2026-11-11 por `tools/build_notebooklm.py` a partir de `banco-questoes/`


### AUT-000001 — Gabarito: C
*Questão autoral — estilo Cesgranrio (criada pelo projeto; não é questão aplicada pela banca) · status: validada*

O enunciado descreve entidades, a cardinalidade dos relacionamentos (1 equipamento : N ordens) e a ausência de qualquer decisão tecnológica. Isso é o que caracteriza o **modelo conceitual**: visão do negócio, independente de SGBD e de paradigma de armazenamento. Quando o modelo passa a ter tabelas, chaves e normalização (relacional), tem-se o **lógico**; quando incorpora tipos, índices, particionamento e demais características do SGBD, tem-se o **físico**.

- A) Incorreta. Falar em "tabelas que serão criadas" é característica do modelo lógico/físico; no conceitual há entidades, não tabelas. O físico depende do SGBD, que aqui não foi definido.
- B) Incorreta. O modelo lógico já adota um paradigma (por exemplo, o relacional), com tabelas, atributos, chaves primárias e estrangeiras. O enunciado só descreve entidades e relacionamentos do negócio.
- C) Correta. Entidades e relacionamentos com cardinalidade, sem decisões de tecnologia: modelo conceitual.
- D) Incorreta. O modelo dimensional (fatos e dimensões) é uma abordagem para análise em data warehouse, não é o nível de abstração em questão; nada no enunciado trata de medidas ou de análise.
- E) Incorreta. Tipos de dados e índices do SGBD pertencem ao modelo físico; o enunciado informa justamente que nada foi decidido a esse respeito.

### AUT-000002 — Gabarito: E
*Questão autoral — estilo Cesgranrio (criada pelo projeto; não é questão aplicada pela banca) · status: validada*

1) **1FN:** os atributos são atômicos e há chave definida → a relação está em 1FN. 2) **2FN:** exige que todo atributo não primo dependa da **chave inteira**. Aqui, nome_produto depende só de id_produto (parte da chave): há **dependência parcial**, logo a relação **não está em 2FN**. 3) **Correção:** extrair o atributo e seu determinante para uma nova relação, PRODUTO(id_produto, nome_produto), mantendo id_produto em ITEM_PEDIDO como chave estrangeira. Quantidade e preco_negociado dependem da chave completa e permanecem.

- A) Incorreta. A relação não está em 2FN (há dependência parcial), de modo que nem se chega à análise da 3FN. Além disso, quantidade depende diretamente da chave composta, não de forma transitiva.
- B) Incorreta. Atomicidade garante apenas a 1FN. Para estar em 3FN a relação precisaria estar em 2FN, o que não ocorre por causa de nome_produto.
- C) Incorreta. Chave composta não impede a 1FN; o que a violaria seriam atributos multivalorados ou grupos repetidos, que o enunciado exclui (atributos atômicos).
- D) Incorreta no fundamento. Embora a relação não esteja em 2FN, o motivo é nome_produto; preco_negociado depende da chave composta completa (o preço é negociado por produto em cada pedido). A relação PEDIDO proposta não resolve a dependência parcial.
- E) Correta. Identifica a 1FN, a violação da 2FN pela dependência parcial id_produto → nome_produto e a decomposição adequada.

### AUT-000003 — Gabarito: B
*Questão autoral — estilo Cesgranrio (criada pelo projeto; não é questão aplicada pela banca) · status: validada*

**Comando (1):** a regra ON UPDATE CASCADE propaga a alteração da chave primária do departamento aos empregados que o referenciam: Ana e Bruno passam a ter id_depto = 5. **Comando (2):** a regra ON DELETE RESTRICT rejeita a exclusão de um registro pai que ainda tem filhos (Ana e Bruno referenciam o departamento 5). **Comando (3):** inserir um empregado que referencia um departamento inexistente (7) viola a chave estrangeira e é rejeitado. Estado final: empregados (10, Ana, 5), (11, Bruno, 5), (12, Carla, 2); departamentos (2, Logística) e (5, Manutenção).

- A) Incorreta. O comando (1) não é rejeitado, porque a ação ON UPDATE é CASCADE (e não RESTRICT). A exclusão do comando (2) também não ocorre, porque ON DELETE é RESTRICT, e não CASCADE.
- B) Correta. UPDATE propagado, DELETE barrado pelo RESTRICT e INSERT barrado por referenciar pai inexistente.
- C) Incorreta. A integridade referencial impede registros órfãos: com ON UPDATE CASCADE, os filhos acompanham a nova chave do pai; o SGBD não "mantém" valores órfãos.
- D) Incorreta. Há a troca das ações: exclusão em cascata seria ON DELETE CASCADE. Com RESTRICT, a exclusão do pai que tem filhos é recusada.
- E) Incorreta. Deixar nulo o id_depto dos filhos seria ON DELETE SET NULL (não é o caso), e o SGBD recusa o INSERT de um valor que não existe na tabela referenciada; a integridade referencial não admite "aviso" nesse caso.

### AUT-000004 — Gabarito: A
*Questão autoral — estilo Cesgranrio (criada pelo projeto; não é questão aplicada pela banca) · status: validada*

1) A **junção externa à esquerda** preserva todas as unidades, mesmo sem ordens: Oeste aparece com o.id nulo. 2) Após o agrupamento por unidade: Norte tem 3 ordens (ids 1, 2 e 7; a ordem 7 tem custo nulo, mas **o.id não é nulo**, então conta), com soma de custos 400 (a soma ignora NULL); Sul: 1 ordem, 200; Leste: 3 ordens, 300; Oeste: **0 ordens** (COUNT(o.id) ignora o NULL da junção externa), total 0 pelo COALESCE. 3) HAVING COUNT(o.id) < 3 mantém apenas Sul (1) e Oeste (0). 4) Ordenando por nome: Oeste, Sul.

- A) Correta: (Oeste, 0, 0) e (Sul, 1, 200). Norte e Leste têm 3 ordens cada e são eliminados pelo HAVING.
- B) Incorreta. Seria o resultado de uma junção interna (INNER JOIN), que descarta unidades sem ordens; com LEFT JOIN, Oeste é preservado.
- C) Incorreta. Seria o resultado com COUNT(*): em Oeste, a linha da junção externa existe (com colunas nulas de ordem_servico) e seria contada como 1. COUNT(o.id) ignora os nulos e retorna 0.
- D) Incorreta. Seria obtido se a ordem 7 (custo nulo) fosse desconsiderada, por exemplo com WHERE o.custo IS NOT NULL antes do agrupamento. Mas o filtro não existe e COUNT(o.id) conta a ordem 7, dando 3 em Norte, que então sai pelo HAVING.
- E) Incorreta. Representa o inverso: as unidades que o HAVING elimina (3 ordens cada). O HAVING mantém grupos com contagem menor que 3.

### AUT-000005 — Gabarito: D
*Questão autoral — estilo Cesgranrio (criada pelo projeto; não é questão aplicada pela banca) · status: validada*

Na primeira situação, a transação (débito + crédito) foi interrompida e o SGBD desfez a parte executada: ou a transação inteira ocorre ou nada ocorre, o que é a **atomicidade**. Na segunda, os efeitos de uma transação confirmada (COMMIT) sobrevivem a falhas posteriores, como a queda de energia: é a **durabilidade** (geralmente garantida por registros de log gravados em armazenamento estável antes da confirmação).

- A) Incorreta. A consistência leva o banco de um estado válido a outro válido, respeitando as regras e restrições; o desfazer do débito decorre da atomicidade. Isolamento trata da interferência entre transações concorrentes, que não existe no cenário.
- B) Incorreta. O isolamento não está em jogo (não há transações concorrentes). A primeira garantia é atomicidade.
- C) Incorreta pela ordem. As garantias foram invertidas: o desfazer do débito é atomicidade (primeira situação), e a manutenção da transferência após o COMMIT é durabilidade (segunda).
- D) Correta. Primeira situação: atomicidade. Segunda: durabilidade.
- E) Incorreta. A segunda garantia não é consistência: o fato de a transferência continuar registrada após a falha é durabilidade. A consistência diz respeito à validade das regras do banco.

### AUT-000006 — Gabarito: B
*Questão autoral — estilo Cesgranrio (criada pelo projeto; não é questão aplicada pela banca) · status: validada*

O requisito central é **navegar relacionamentos em profundidade variável** (conexões de até três saltos). Bancos de **grafos** modelam entidades como nós e relacionamentos como arestas (com propriedades) e são projetados para consultas de caminhos, vizinhança e recomendação, evitando junções recursivas custosas. Os demais tipos atendem a outros padrões de acesso.

- A) Incorreta. O modelo colunar de famílias é indicado para grandes volumes de escrita e leitura por chave de linha, sem foco em travessia de relacionamentos.
- B) Correta. Nós e arestas; travessias de profundidade variável.
- C) Incorreta. Documentos aninhados são adequados a dados semiestruturados e agregados lidos em bloco; relacionamentos entre documentos exigiriam referências e navegação manual.
- D) Incorreta. Chave-valor é muito eficiente para acesso por chave, mas não oferece consulta por relacionamentos.
- E) Incorreta. O modelo multidimensional (cubos) serve a análises agregadas por dimensões (OLAP), não à travessia de redes de relacionamentos.

### AUT-000007 — Gabarito: C
*Questão autoral — estilo Cesgranrio (criada pelo projeto; não é questão aplicada pela banca) · status: validada*

A ordem das fases revela a estratégia: **extração → carga (dados brutos no destino) → transformação no próprio destino**. É o **ELT** (*Extract, Load, Transform*), que aproveita o poder de processamento do data warehouse ou do *data lake*. No ETL clássico, a transformação ocorre **antes** da carga, em uma área ou servidor intermediário.

- A) Incorreta. No ETL a transformação precede a carga; aqui os dados brutos são carregados antes de serem transformados.
- B) Incorreta. Replicação mantém cópias sincronizadas, sem padronizar, deduplicar e consolidar dados de múltiplas fontes.
- C) Correta. Carga dos dados brutos no destino e transformação posterior com SQL no data warehouse: ELT.
- D) Incorreta. Transferência de arquivos é uma forma de integração por intercâmbio de arquivos; o enunciado descreve uma etapa de transformação de dados.
- E) Incorreta. Virtualização de dados consulta as fontes sem copiá-las; o enunciado fala em extrair, gravar e consolidar em tabelas finais.

### AUT-000008 — Gabarito: E
*Questão autoral — estilo Cesgranrio (criada pelo projeto; não é questão aplicada pela banca) · status: validada*

A tabela é um **retrato periódico** (*snapshot*): o saldo em cada dia já representa o estoque acumulado até aquele dia. Somar o saldo de **dias diferentes** conta o mesmo estoque várias vezes, o que não faz sentido. Já somar entre **depósitos** ou **produtos**, em um mesmo dia, é válido. Isso caracteriza uma medida **semiaditiva**. Ao longo do tempo, usam-se agregações como média, último valor do período ou valores mínimos e máximos.

- A) Incorreta. Medidas aditivas podem ser somadas em todas as dimensões (por exemplo, a quantidade vendida). Somar saldos de dias diferentes duplica a contagem do mesmo estoque.
- B) Incorreta. Medidas não aditivas são razões, percentuais e preços unitários. O saldo pode ser somado entre depósitos e produtos em uma data fixa.
- C) Incorreta. Somar os saldos diários dentro de um mês continua somando ao longo do tempo (mesmo por depósito) e não produz um estoque mensal; para isso usa-se a média ou o saldo do último dia.
- D) Incorreta. Medidas numéricas e variáveis no tempo ficam na tabela fato; a dimensão Produto guarda atributos descritivos (nome, categoria), e o saldo muda a cada dia, o que não é característica de dimensão.
- E) Correta. Definição de medida semiaditiva aplicada ao saldo de estoque em um fato do tipo retrato periódico.

### AUT-000009 — Gabarito: A
*Questão autoral — estilo Cesgranrio (criada pelo projeto; não é questão aplicada pela banca) · status: validada*

**Dados de referência** são conjuntos de valores ou códigos usados para classificar e restringir outros dados (países, UF, unidades de medida, status). A lista de status padronizados, usada por vários sistemas, é o exemplo típico. O cadastro do equipamento é **dado mestre** (entidade central do negócio); o registro da ordem de serviço é **dado transacional** (evento); a descrição do tipo e dos valores aceitos de uma coluna é **metadado**; o *log* de acessos é um registro operacional de eventos.

- A) Correta. Lista de valores padronizados que classificam outros dados e é compartilhada: dado de referência.
- B) Incorreta. O equipamento é uma entidade central do negócio, compartilhada entre sistemas: dado mestre.
- C) Incorreta. A ordem de serviço é um evento com data, horas e peças: dado transacional.
- D) Incorreta. Descreve a estrutura e o domínio da coluna, ou seja, dados sobre os dados: metadado.
- E) Incorreta. Trata-se de registro de eventos de uso, sem função de classificar outros dados; não é dado de referência.

### AUT-000010 — Gabarito: D
*Questão autoral — estilo Cesgranrio (criada pelo projeto; não é questão aplicada pela banca) · status: validada*

Aplicar uma função à coluna (UPPER(tag)) torna o predicado **não sargável** em relação ao índice sobre tag: o otimizador não consegue usar o índice e faz a varredura completa. Há duas soluções: (a) criar um **índice sobre a expressão** UPPER(tag), de modo que a comparação use esse índice; ou (b) se os dados já estiverem padronizados em maiúsculas, **reescrever** o predicado como tag = 'P-101'. Em ambos os casos, o resultado da consulta é preservado.

- A) Incorreta. Um segundo índice idêntico não altera o problema (o predicado continua inviável para ele) e ainda aumenta o custo de escrita e de armazenamento.
- B) Incorreta. O particionamento por tipo de equipamento não ajuda uma consulta que filtra por tag sem informar o tipo; a varredura continuaria percorrendo as partições.
- C) Incorreta. A premissa é falsa: o índice sobre tag não é usado quando a coluna é envolvida em função no predicado. Mais memória não resolve a varredura completa.
- D) Correta. Índice funcional ou predicado reescrito de forma sargável.
- E) Incorreta. Índices bitmap são, em geral, indicados para colunas de **baixa** cardinalidade (e cargas analíticas); tag tem alta cardinalidade. Além disso, o problema continuaria, pois o predicado usa a função UPPER.

### AUT-000091 — Gabarito: C
*Questão autoral — estilo Cesgranrio (criada pelo projeto; não é questão aplicada pela banca) · status: em_revisao*

Relacionamento **N:N** vira **tabela associativa**, cuja chave primária é composta pelas chaves das duas entidades e que carrega os atributos do relacionamento (aqui, `nota`). Cada coluna de chave é também chave estrangeira.

- A) Incorreta. Impõe que cada aluno tenha uma só disciplina (relação 1:N no sentido contrário) e coloca `nota` em ALUNO, perdendo a associação com a disciplina.
- B) Incorreta. Impõe que cada disciplina tenha um só aluno e coloca `nota` fora de contexto.
- C) Correta. Tabela associativa com PK composta e duas FKs, com `nota` na tabela de associação, é o mapeamento correto.
- D) Incorreta. Colunas repetidas (disciplina1, disciplina2...) violam a 1FN e limitam o número de disciplinas.
- E) Incorreta. PK apenas em `matricula` permitiria uma única matrícula por aluno, o que contradiz a cardinalidade N:N.

### AUT-000092 — Gabarito: A
*Questão autoral — estilo Cesgranrio (criada pelo projeto; não é questão aplicada pela banca) · status: em_revisao*

`valor_total_pedido` é **derivado** (calculável a partir dos itens) e está **repetido** em várias linhas. Isso viola o critério de **ausência de redundância** e provoca **anomalias de atualização**: alterar um item sem atualizar todas as repetições deixa o banco inconsistente. Alternativas: calcular o total em consulta/visão, ou, se for armazenado por desempenho, guardá-lo no cabeçalho do pedido, com mecanismo de atualização.

- A) Correta. É o problema apresentado no enunciado: redundância de dado derivado e risco de inconsistência.
- B) Incorreta. O enunciado não informa a ausência de chaves estrangeiras; a descrição trata da repetição do total.
- C) Incorreta. Um pedido tem vários itens; a cardinalidade 1:N é correta e não é o problema.
- D) Incorreta. Nomes de colunas não são problema no trecho apresentado.
- E) Incorreta. Índices são questão de desempenho físico e não são mencionados; o defeito é do modelo lógico.

### AUT-000093 — Gabarito: E
*Questão autoral — estilo Cesgranrio (criada pelo projeto; não é questão aplicada pela banca) · status: em_revisao*

A engenharia reversa **reconstrói o modelo a partir do banco existente**. As afirmativas I e II descrevem técnicas válidas (extração do esquema pelo catálogo e dedução de relacionamentos). A III é falsa: o catálogo **não guarda a semântica do negócio** (cardinalidade mínima, especializações, significado das colunas), que precisa ser reconstruída com análise humana.

- A) Incorreta. Omite a II, que também é verdadeira.
- B) Incorreta. A III é falsa; o catálogo não registra regras de negócio não implementadas no banco.
- C) Incorreta. Inclui a III, falsa.
- D) Incorreta. Inclui a III, falsa.
- E) Correta. I e II são verdadeiras e III é falsa: alternativa correta.

### AUT-000094 — Gabarito: B
*Questão autoral — estilo Cesgranrio (criada pelo projeto; não é questão aplicada pela banca) · status: em_revisao*

A **DDL** define e altera a **estrutura** (esquema): `CREATE`, `ALTER`, `DROP`. A **DML** manipula os dados (`INSERT`, `UPDATE`, `DELETE`, `SELECT` em muitas classificações). Os comandos de controle de transação (`COMMIT`, `ROLLBACK`, `SAVEPOINT`) formam a TCL.

- A) Incorreta. São comandos de manipulação de dados (DML).
- B) Correta. CREATE, ALTER e DROP são comandos DDL.
- C) Incorreta. UPDATE é DML; a mistura torna a alternativa incorreta.
- D) Incorreta. SELECT e INSERT não são DDL.
- E) Incorreta. São comandos de controle de transações (TCL).

### AUT-000095 — Gabarito: D
*Questão autoral — estilo Cesgranrio (criada pelo projeto; não é questão aplicada pela banca) · status: em_revisao*

**1) UPDATE** (preco < 100): A passa de 50 para 55 e C de 80 para 88; B (100) e D (120) não mudam. **2) DELETE** (preco > 110): remove D (120). **3) INSERT**: entra E (40). Linhas finais: A=55, B=100, C=88, E=40. **SUM = 55 + 100 + 88 + 40 = 283.**

- A) Incorreta. 243 = 55 + 100 + 88: esquece o INSERT.
- B) Incorreta. 270 = 50 + 100 + 80 + 40: ignora o UPDATE.
- C) Incorreta. 293: trata o UPDATE como `preco <= 100` (B iria a 110) ou erra a conta do reajuste.
- D) Correta. 283: resultado correto.
- E) Incorreta. 403 = 55 + 100 + 88 + 120 + 40: esquece o DELETE.

### AUT-000096 — Gabarito: B
*Questão autoral — estilo Cesgranrio (criada pelo projeto; não é questão aplicada pela banca) · status: em_revisao*

A **independência física** é a capacidade de mudar o **nível interno** (arquivos, índices, organização) sem alterar o esquema conceitual nem as aplicações. A **independência lógica** é a capacidade de mudar o **esquema conceitual** (por exemplo, acrescentar uma coluna) sem alterar os **esquemas externos (visões)** e programas; é mais difícil de obter.

- A) Incorreta. Descreve a independência lógica, que trata de mudanças no esquema conceitual; o caso do enunciado envolve apenas a estrutura de armazenamento.
- B) Correta. A mudança de índices e arquivos sem afetar o esquema conceitual e as aplicações é independência física.
- C) Incorreta. Integridade referencial trata de consistência entre chaves, não de isolamento entre programas e armazenamento.
- D) Incorreta. Atomicidade é propriedade de transações, e não explica a ausência de impacto nos programas.
- E) Incorreta. Normalização atua no projeto lógico e não se refere à organização física.

### AUT-000097 — Gabarito: E
*Questão autoral — estilo Cesgranrio (criada pelo projeto; não é questão aplicada pela banca) · status: em_revisao*

Início: 100. Após o primeiro UPDATE: 150. `SAVEPOINT s1` marca esse estado. O segundo UPDATE leva a 300, mas `ROLLBACK TO s1` **desfaz apenas o que veio depois do savepoint**, retornando a 150 (a transação continua aberta). O terceiro UPDATE leva a 120, e o COMMIT confirma **120**.

- A) Incorreta. 100 corresponderia a um ROLLBACK total, o que não ocorre: o rollback é parcial.
- B) Incorreta. 150 ignora o último UPDATE (−30).
- C) Incorreta. 90 seria 100 − 30, desfazendo também o primeiro UPDATE (+50).
- D) Incorreta. 270 = 300 − 30, como se o ROLLBACK TO não tivesse efeito.
- E) Correta. 120 = 150 − 30: resultado correto.

### AUT-000098 — Gabarito: C
*Questão autoral — estilo Cesgranrio (criada pelo projeto; não é questão aplicada pela banca) · status: em_revisao*

Bancos em memória evitam o gargalo do disco, mantendo os dados na **RAM**. Como a RAM é **volátil**, a durabilidade exige mecanismos adicionais: **snapshots**, **log de operações** (como o AOF do Redis) ou **replicação**. Há estruturas específicas (conjuntos ordenados para rankings, listas, hashes).

- A) Incorreta. A RAM é volátil; sem persistência, os dados se perdem com a queda do servidor.
- B) Incorreta. O Redis, por exemplo, oferece várias estruturas (hashes, listas, conjuntos ordenados) e é adequado a rankings.
- C) Correta. Resume as características do banco em memória: baixa latência e durabilidade opcional por snapshot, log ou réplica.
- D) Incorreta. É tipicamente **mais rápido** que o acesso a disco.
- E) Incorreta. Pode ser usado como cache, mas também como repositório principal em cenários adequados.

### AUT-000099 — Gabarito: D
*Questão autoral — estilo Cesgranrio (criada pelo projeto; não é questão aplicada pela banca) · status: em_revisao*

A **leitura fantasma** ocorre quando uma transação repete uma consulta com um **predicado** e encontra **novas linhas** inseridas (ou removidas) por outra transação confirmada. Na **leitura não repetível**, a mesma linha lida duas vezes apresenta valores diferentes. Na **leitura suja**, lê-se dado ainda não confirmado.

- A) Incorreta. Na leitura suja, o dado lido não estava confirmado; aqui T2 confirmou.
- B) Incorreta. Na leitura não repetível, uma linha já lida muda de valor; aqui apareceu uma linha nova.
- C) Incorreta. Perda de atualização é a sobreposição de duas escritas concorrentes.
- D) Correta. Novas linhas que satisfazem o predicado entre duas leituras caracterizam a leitura fantasma.
- E) Incorreta. Deadlock é a espera circular por bloqueios, que não ocorreu.

### OFI-000001 — Gabarito: B
*Oficial — Fundação Cesgranrio, Transpetro PSP/Terra 002/2023 (Edital nº 2), Análise de Sistemas — Processos de Negócios, 2023, Prova 6, questão 26 (gabarito: oficial (PDF de gabarito da Cesgranrio, alterado em 9/01/2024), conferido na T13) · status: em_revisao*

Operadores **binários** recebem duas relações; os **unários** recebem uma. Projeção (π) e seleção (σ) são unários; divisão, junções, produto cartesiano, união, interseção e diferença são binários.

- A) Incorreta. Divisão relaciona duas relações (dividendo e divisor); é binária.
- B) Correta. Projeção escolhe colunas de **uma** relação; é unária (assim como a seleção e o renomear).
- C) Incorreta. A junção natural combina duas relações por atributos comuns; é binária.
- D) Incorreta. A junção externa esquerda combina duas relações preservando as linhas da esquerda; é binária.
- E) Incorreta. O produto cartesiano combina todas as linhas de duas relações; é binário.

### OFI-000002 — Gabarito: B
*Oficial — Fundação Cesgranrio, Transpetro PSP/Terra 002/2023 (Edital nº 2), Análise de Sistemas — Processos de Negócios, 2023, Prova 6, questão 45 (gabarito: oficial (PDF de gabarito da Cesgranrio, alterado em 9/01/2024), conferido na T13) · status: em_revisao*

A **desnormalização controlada** reduz o número de junções em consultas frequentes (trocando redundância por leitura mais rápida), e é uma técnica reconhecida de ajuste de desempenho. Todas as outras ações pioram o desempenho ou não garantem o que afirmam.

- A) Incorreta. Execução estritamente serial elimina a concorrência e derruba o desempenho; a correção é garantida por controle de concorrência (isolamento, bloqueios, MVCC), não por serialização total.
- B) Correta. Reduz junções custosas em consultas muito frequentes; tem custo em redundância e manutenção, mas melhora o desempenho de leitura.
- C) Incorreta. DISTINCT acrescenta ordenação ou *hash* para eliminar duplicatas e pode alterar o resultado; trocar todos os SELECT por ele é prejudicial.
- D) Incorreta. ORDER BY adiciona custo de ordenação; deve ser usado só quando a ordem for necessária.
- E) Incorreta. Fragmentação de índice **degrada** o desempenho; o ajuste correto é reorganizar ou reconstruir índices.

### OFI-000003 — Gabarito: D
*Oficial — Fundação Cesgranrio, Transpetro PSP/Terra 002/2023 (Edital nº 2), Análise de Sistemas — Processos de Negócios, 2023, Prova 6, questão 46 (gabarito: oficial (PDF de gabarito da Cesgranrio, alterado em 9/01/2024), conferido na T13) · status: em_revisao*

Bancos de documentos (MongoDB, CouchDB) guardam documentos **JSON/BSON**, de esquema flexível, adequados a dados semiestruturados. SQL e relações são do modelo relacional; vértices e arestas são dos grafos.

- A) Incorreta. SQL e relações matemáticas caracterizam o modelo relacional.
- B) Incorreta. Vértices e arestas caracterizam o modelo de grafos.
- C) Incorreta. A otimização para consultas por relacionamentos (travessias) é típica de grafos.
- D) Correta. Documentos em JSON/BSON com esquema flexível são a característica central dos bancos de documentos.
- E) Incorreta. Normalização com chaves estrangeiras é característica do modelo relacional; documentos favorecem agregados embutidos.

### OFI-000004 — Gabarito: A
*Oficial — Fundação Cesgranrio, Transpetro PSP/Terra 002/2023 (Edital nº 2), Análise de Sistemas — Processos de Negócios, 2023, Prova 6, questão 48 (gabarito: oficial (PDF de gabarito da Cesgranrio, alterado em 9/01/2024), conferido na T13) · status: em_revisao*

Em Cypher, `MATCH` descreve um padrão; `(p)-[:TIPO]->(x)` segue a relação de `p` para `x`, e `WHERE` filtra. A consulta A localiza a pessoa de nome Alice e retorna os nós ligados por `AMIGO_DE` a partir dela.

- A) Correta. Padrão válido: Alice como origem, relação `AMIGO_DE` saindo dela e retorno dos amigos.
- B) Incorreta. Inverte a direção da seta, retornando quem aponta para Alice; com a relação modelada de Alice para o amigo, não retorna os amigos dela.
- C) Incorreta. Usa a relação `INIMIGO_DE`; retorna inimigos, não amigos.
- D) Incorreta. É SQL relacional e não se aplica a um banco de grafos.
- E) Incorreta. `FIND` não é cláusula do Cypher; a sintaxe é inválida.

### OFI-000005 — Gabarito: A
*Oficial — Fundação Cesgranrio, Transpetro PSP/Terra 002/2023 (Edital nº 2), Análise de Sistemas — Processos de Negócios, 2023, Prova 6, questão 49 (gabarito: oficial (PDF de gabarito da Cesgranrio, alterado em 9/01/2024), conferido na T13) · status: em_revisao*

Neto de Carlos = filho de um filho de Carlos. Na **autojunção**, `f1` representa a geração dos filhos (`f1.pai = 'Carlos'`) e `f2` a dos netos, ligando o filho de `f1` ao pai de `f2` (`f1.filho = f2.pai`). Filhos de Carlos: Eriko e Fabio; seus filhos: Isidoro e João (`f2.filho`).

- A) Correta. Junção filho→pai com filtro em Carlos; projeta `f2.filho`, retornando Isidoro e João.
- B) Incorreta. Procura o **pai do pai** de Carlos (avô), com a junção invertida; retornaria Andre.
- C) Incorreta. Faz a junção correta, mas projeta `f1.pai`, que é sempre Carlos; retorna 'Carlos' (duas vezes).
- D) Incorreta. Junta linhas com o mesmo pai (irmãos); retornaria Eriko e Fabio (filhos), incluindo o próprio.
- E) Incorreta. Junta linhas com o mesmo filho; devolve apenas os próprios filhos de Carlos.

### OFI-000006 — Gabarito: E
*Oficial — Fundação Cesgranrio, Transpetro PSP/Terra 002/2023 (Edital nº 2), Análise de Sistemas — Processos de Negócios, 2023, Prova 6, questão 50 (gabarito: oficial (PDF de gabarito da Cesgranrio, alterado em 9/01/2024), conferido na T13) · status: em_revisao*

Metadados são **dados sobre dados**: o catálogo (dicionário de dados) guarda definições de tabelas, colunas, tipos, chaves, restrições, índices e permissões do banco.

- A) Incorreta. Total de vendas é **dado** de negócio, não metadado.
- B) Incorreta. Senhas e permissões de sistema operacional estão fora do catálogo do SGBD (o catálogo guarda usuários e privilégios do banco, e não senhas em claro).
- C) Incorreta. Código-fonte de aplicativos não é armazenado no catálogo.
- D) Incorreta. Backups são cópias dos dados, não metadados.
- E) Correta. Esquemas, tipos de dados e restrições são o conteúdo típico do dicionário de dados.

### OFI-000007 — Gabarito: D
*Oficial — Fundação Cesgranrio, Transpetro PSP/Terra 002/2023 (Edital nº 2), Análise de Sistemas — Processos de Negócios, 2023, Prova 6, questão 51 (gabarito: oficial (PDF de gabarito da Cesgranrio, alterado em 9/01/2024), conferido na T13) · status: em_revisao*

O otimizador **não altera o esquema**: ele escolhe o melhor plano de execução (métodos de acesso, ordem e algoritmo de junção) com base em estatísticas e custo. Criar tabelas é papel do DBA ou da aplicação.

- A) Incorreta. Escolher o plano de menor custo é a função central do otimizador.
- B) Incorreta. Decidir entre varredura sequencial e uso de índice é escolha de método de acesso, tarefa do otimizador.
- C) Incorreta. Estatísticas (cardinalidade, seletividade) alimentam o modelo de custo.
- D) Correta. Criação de tabelas não é função do otimizador; é a alternativa que **não** representa sua funcionalidade.
- E) Incorreta. Escolher ordem e algoritmo de junção é típico do otimizador.

### OFI-000008 — Gabarito: B
*Oficial — Fundação Cesgranrio, Transpetro PSP/Terra 002/2023 (Edital nº 2), Análise de Sistemas — Processos de Negócios, 2023, Prova 6, questão 52 (gabarito: oficial (PDF de gabarito da Cesgranrio, alterado em 9/01/2024), conferido na T13) · status: em_revisao*

Um data lake guarda dados **brutos em qualquer formato**, aplicando o esquema na leitura (*schema-on-read*), o que dá flexibilidade a análises diversas.

- A) Incorreta. O data lake mantém o dado bruto; a estruturação ocorre na leitura ou em etapas posteriores, não na ingestão.
- B) Correta. Aceita estruturados, semiestruturados e não estruturados, com flexibilidade de processamento.
- C) Incorreta. Costumam usar armazenamento distribuído/de objetos (HDFS, S3 etc.) e não "apenas sistemas de arquivos convencionais".
- D) Incorreta. Aceitam também dados estruturados e semiestruturados.
- E) Incorreta. São justamente indicados para Big Data pela variedade de tipos suportados.

### OFI-000009 — Gabarito: C
*Oficial — Fundação Cesgranrio, Transpetro PSP/Terra 002/2023 (Edital nº 2), Análise de Sistemas — Processos de Negócios, 2023, Prova 6, questão 53 (gabarito: oficial (PDF de gabarito da Cesgranrio, alterado em 9/01/2024), conferido na T13) · status: em_revisao*

**A**tomicidade = tudo ou nada; **C**onsistência = o banco sai de um estado válido para outro válido; **I**solamento = transações concorrentes não se interferem; **D**urabilidade = o que foi confirmado persiste, mesmo com falha.

- A) Incorreta. Todas as definições estão trocadas entre as propriedades (a definição dada para atomicidade é a de consistência, e assim por diante).
- B) Incorreta. Contradiz as quatro propriedades: subdivide a atomicidade, dispensa a integridade, mistura transações e admite desfazer o que foi confirmado.
- C) Correta. Todas as quatro definições estão corretas.
- D) Incorreta. Define atomicidade como isolamento, consistência como atomicidade, isolamento como consistência e durabilidade como subtransações; todas trocadas.
- E) Incorreta. Define atomicidade como durabilidade, consistência como isolamento, isolamento como atomicidade e durabilidade como consistência; todas trocadas.

### OFI-000010 — Gabarito: E
*Oficial — Fundação Cesgranrio, Transpetro PSP/Terra 002/2023 (Edital nº 2), Análise de Sistemas — Processos de Negócios, 2023, Prova 6, questão 63 (gabarito: oficial (PDF de gabarito da Cesgranrio, alterado em 9/01/2024), conferido na T13) · status: em_revisao*

O modelo **conceitual** (ex.: MER/DER) é o mais abstrato: define entidades, atributos e relacionamentos do negócio, sem depender de SGBD. Índices, partições e armazenamento pertencem ao modelo **físico**; tabelas e chaves, ao **lógico**.

- A) Incorreta. Índices e partições são do nível físico.
- B) Incorreta. Otimização e índices são do nível físico.
- C) Incorreta. A estrutura física das tabelas é do nível físico (ou lógico, no caso das tabelas).
- D) Incorreta. Detalhes de armazenamento em disco são do nível físico.
- E) Correta. Independência do SGBD e definição de entidades, atributos e relacionamentos caracterizam o nível conceitual.

### OFI-000011 — Gabarito: A
*Oficial — Fundação Cesgranrio, Transpetro PSP/Terra 002/2023 (Edital nº 2), Análise de Sistemas — Processos de Negócios, 2023, Prova 6, questão 64 (gabarito: oficial (PDF de gabarito da Cesgranrio, alterado em 9/01/2024), conferido na T13) · status: em_revisao*

A normalização busca **reduzir a redundância** e evitar anomalias de inserção, atualização e exclusão, de modo que cada fato seja registrado em um único lugar.

- A) Correta. Elimina duplicações e concentra cada informação em um só lugar; é o objetivo central.
- B) Incorreta. Inverte o objetivo: a normalização reduz a redundância.
- C) Incorreta. A economia de espaço é efeito colateral, não o objetivo principal.
- D) Incorreta. Normalizar costuma aumentar o número de junções; ganho de desempenho de leitura é objetivo da desnormalização.
- E) Incorreta. Descrição visual da estrutura física não tem relação com normalização.

### OFI-000042 — Gabarito: B
*Oficial — Fundação Cesgranrio, Transpetro PSP RH 2018.1 (Edital nº 1), Analista de Sistemas Júnior — Processos de Negócio, 2018, Prova 15, questão 22 (gabarito: oficial (PDF de gabarito da Cesgranrio, alterado em 09/05/2018), conferido na T13) · status: em_revisao*

A **Data Staging Area** é a área intermediária onde os dados extraídos das fontes transacionais são **limpos, transformados e preparados** (o "T" do ETL) antes de serem carregados na área de apresentação do DW (Kimball).

- A) Incorreta. Data marts são subconjuntos do DW voltados a uma área de negócio; ficam na camada de apresentação.
- B) Correta. É a área de trânsito e transformação entre as fontes e o DW.
- C) Incorreta. "Dimensional Model Area" não é camada padrão da arquitetura.
- D) Incorreta. A Presentation Area é onde os dados já organizados ficam disponíveis para consulta.
- E) Incorreta. "Living Sample Area" não é camada de arquitetura de DW.

### OFI-000043 — Gabarito: B
*Oficial — Fundação Cesgranrio, Transpetro PSP RH 2018.1 (Edital nº 1), Analista de Sistemas Júnior — Processos de Negócio, 2018, Prova 15, questão 38 (gabarito: oficial (PDF de gabarito da Cesgranrio, alterado em 09/05/2018), conferido na T13) · status: em_revisao*

Procura-se o fornecedor para o qual **exista ao menos uma linha de VENDA com a data dentro do intervalo**. A alternativa B conta, por fornecedor, as vendas com `DATA BETWEEN` (inclusivo nas duas pontas) e exige contagem maior que zero. (Os literais de data seguem a formatação do caderno.)

- A) Incorreta. O INTERSECT combina duas condições **avaliadas em linhas diferentes**: um fornecedor com uma venda antes de 05/01 e outra depois de 10/01 satisfaz as duas, mesmo sem nenhuma venda dentro do intervalo.
- B) Correta. Filtra as vendas no intervalo e exige que haja ao menos uma: resposta correta.
- C) Incorreta. O `OR` entre as duas condições é verdadeiro para **qualquer** data não nula, e não restringe ao intervalo (a sintaxe `UNIQUE` também é específica de dialeto).
- D) Incorreta. O UNION de duas condições separadas equivale ao OR: qualquer fornecedor com venda em qualquer data satisfaz uma delas.
- E) Incorreta. Retorna os fornecedores que **não** têm venda fora do intervalo, incluindo os que **nunca** venderam.

### OFI-000067 — Gabarito: E
*Oficial — Fundação Cesgranrio, Caixa Econômica Federal, Edital 1/2021/NM, Técnico Bancário Novo — Tecnologia da Informação, 2021, Caderno de Tecnologia da Informação (questões 31 a 60), questão 38 (gabarito: definitivo (fonte oficial: portal da Cesgranrio); recursos sem alteração nem anulação) · status: em_revisao*

A conta é identificada por (agencia, conta), chave de CONTA_CORRENTE. Em CLIENTE, o par (agencia, conta) referencia a conta a que o cliente pertence: é **chave estrangeira** para CONTA_CORRENTE. Como a mesma conta tem até 5 titulares, a PK de CLIENTE deve incluir um atributo que distinga os titulares (como CPF).

- A) Incorreta. Uma conta pode ter várias movimentações no mesmo dia; sem hora e minuto, a chave (agencia, conta, data) repetiria.
- B) Incorreta. O CPF identifica o cliente (parte da chave candidata) e não referencia outra tabela do modelo apresentado.
- C) Incorreta. A data de abertura é atributo descritivo; (agencia, conta) já identifica a conta.
- D) Incorreta. "Titular" (1º a 5º) isoladamente não identifica o cliente; a chave deveria combinar conta e CPF (ou o titular), mas o argumento da alternativa não decorre do modelo.
- E) Correta. (agencia, conta) em CLIENTE referencia CONTA_CORRENTE: chave estrangeira.

### OFI-000068 — Gabarito: E
*Oficial — Fundação Cesgranrio, Caixa Econômica Federal, Edital 1/2021/NM, Técnico Bancário Novo — Tecnologia da Informação, 2021, Caderno de Tecnologia da Informação (questões 31 a 60), questão 39 (gabarito: definitivo (fonte oficial: portal da Cesgranrio); recursos sem alteração nem anulação) · status: em_revisao*

O **catálogo (metadados)** descreve tabelas, colunas, tipos, chaves e privilégios. Ao receber um comando SQL, o SGBD consulta o catálogo para verificar se os objetos existem, se os tipos são compatíveis e se o usuário tem permissão: **validação** do comando.

- A) Incorreta. Metas de desempenho definidas pelo DBA não são o uso típico do catálogo.
- B) Incorreta. A escolha de páginas sujas para gravação é tarefa do gerenciador de buffer, não do catálogo.
- C) Incorreta. O isolamento é implementado por controle de concorrência (bloqueios, MVCC).
- D) Incorreta. A recuperação usa log de transações e backups.
- E) Correta. O catálogo é consultado para validar tabelas, colunas e permissões na análise do comando.

### OFI-000073 — Gabarito: C
*Oficial — Fundação Cesgranrio, Caixa Econômica Federal, Edital 1/2021/NM, Técnico Bancário Novo — Tecnologia da Informação, 2021, Caderno de Tecnologia da Informação (questões 31 a 60), questão 58 (gabarito: definitivo (fonte oficial: portal da Cesgranrio); recursos sem alteração nem anulação) · status: em_revisao*

No **SGBD federado** (ou multibanco), SGBDs autônomos e frequentemente heterogêneos são **fracamente acoplados** por um **middleware** que oferece visão integrada. Em oposição, o SGBD distribuído homogêneo é fortemente acoplado.

- A) Incorreta. Grafos classificam o modelo de dados, e não o acoplamento.
- B) Incorreta. Hierárquico é um modelo de dados antigo.
- C) Correta. Federado: componentes autônomos, acoplamento fraco e middleware.
- D) Incorreta. Orientado a objetos classifica o modelo de dados.
- E) Incorreta. NoSQL é uma família de modelos, sem relação com o acoplamento descrito.

### OFI-000100 — Gabarito: E
*Oficial — Fundação Cesgranrio, BNDES, Edital 1/2024, Analista — Análise de Sistemas: Desenvolvimento, 2024, Prova 3 (manhã), questão 65 (gabarito: final após recursos (documento da banca, via espelho QConcursos)) · status: em_revisao*

A **quantidade de leitos** é uma medida **aditiva**: pode ser somada por qualquer dimensão (município → estado). A **taxa de mortalidade** é medida **não aditiva** (razão): somar taxas ou tirar média simples não dá a taxa do estado, que exigiria os numeradores e denominadores (óbitos e nascidos vivos), não disponíveis no modelo.

- A) Incorreta. Dividir leitos por taxa não tem sentido de negócio.
- B) Incorreta. Idem: dividir taxa por leitos não tem sentido de negócio.
- C) Incorreta. A média simples das taxas dos municípios ignora o tamanho de cada população; não dá a taxa do estado (sem os pesos, que o modelo não traz).
- D) Incorreta. Somar taxas (razões) é incorreto: medida não aditiva.
- E) Correta. A soma dos leitos dos municípios é válida: medida aditiva.

### OFI-000101 — Gabarito: E
*Oficial — Fundação Cesgranrio, BNDES, Edital 1/2024, Analista — Análise de Sistemas: Desenvolvimento, 2024, Prova 3 (manhã), questão 66 (gabarito: final após recursos (documento da banca, via espelho QConcursos)) · status: em_revisao*

O data lake aplica o esquema **na leitura** (*schema-on-read*); por isso, os metadados **não precisam ser definidos antes** da ingestão e podem ser **descobertos automaticamente em parte** (por *crawlers*/catálogos de dados que inferem esquemas e tipos). A catalogação é essencial para evitar o **"pântano de dados"**.

- A) Incorreta. Não há padrão ANSI consagrado de metadados de data lakes.
- B) Incorreta. Os metadados nem sempre descrevem completa e corretamente todos os dados (o risco do data swamp).
- C) Incorreta. A definição prévia é característica do DW (esquema na escrita).
- D) Incorreta. O *information schema* é recurso de bancos relacionais.
- E) Correta. Ferramentas de catálogo inferem parte dos metadados automaticamente.

### OFI-000102 — Gabarito: E
*Oficial — Fundação Cesgranrio, BNDES, Edital 1/2024, Analista — Análise de Sistemas: Desenvolvimento, 2024, Prova 3 (manhã), questão 67 (gabarito: final após recursos (documento da banca, via espelho QConcursos)) · status: em_revisao*

O monitoramento da qualidade é **contínuo** e baseado em **indicadores** (completude, unicidade, validade, consistência, atualidade), que orientam **ações corretivas** e a melhoria dos processos.

- A) Incorreta. A interoperabilidade depende de padrões e integração, e não é característica do monitoramento.
- B) Incorreta. Monitorar apenas após decisões erradas é reativo; a governança é preventiva.
- C) Incorreta. O controle de acesso é função da segurança e da governança de acesso.
- D) Incorreta. Um intervalo de dez anos é incompatível com o monitoramento.
- E) Correta. Indicadores orientam as ações corretivas: característica do monitoramento.

### OFI-000103 — Gabarito: A
*Oficial — Fundação Cesgranrio, BNDES, Edital 1/2024, Analista — Análise de Sistemas: Desenvolvimento, 2024, Prova 3 (manhã), questão 68 (gabarito: final após recursos (documento da banca, via espelho QConcursos)) · status: em_revisao*

**Total**: todo prédio pertence a pelo menos uma especialização ("apenas isso"). **Sobreposta** (*overlapping*): um prédio pode pertencer às duas (uso misto). Logo, **total e sobreposta**. "Parcial" e "total" descrevem a participação; "disjunta" e "sobreposta", a exclusão mútua.

- A) Correta. Todo prédio está em pelo menos uma e pode estar nas duas: total e sobreposta.
- B) Incorreta. "Total e parcial" são conceitos do mesmo eixo; não se combinam.
- C) Incorreta. Disjunta exigiria que nenhum prédio fosse misto.
- D) Incorreta. Parcial admitiria prédios em nenhuma das duas, o que o texto exclui.
- E) Incorreta. Parcial e disjunta contradizem o enunciado nos dois eixos.

### OFI-000104 — Gabarito: C
*Oficial — Fundação Cesgranrio, BNDES, Edital 1/2024, Analista — Análise de Sistemas: Desenvolvimento, 2024, Prova 3 (manhã), questão 69 (gabarito: final após recursos (documento da banca, via espelho QConcursos)) · status: em_revisao*

No padrão SQL, os níveis são **READ UNCOMMITTED, READ COMMITTED, REPEATABLE READ e SERIALIZABLE**. O **SERIALIZABLE** é o **mais alto**: o resultado equivale à execução **em série** das transações, evitando leituras sujas, não repetíveis e fantasmas. Isso **não** significa que só uma execute por vez, e sim que o efeito é **equivalente** a alguma ordem serial.

- A) Incorreta. Não é modo somente leitura.
- B) Incorreta. Garante o efeito serial, mas as transações podem executar concorrentemente (controle por bloqueios ou MVCC).
- C) Correta. É o nível mais alto de isolamento.
- D) Incorreta. "Serializable" não se refere a objetos JSON.
- E) Incorreta. Não trata de envio de dados entre transações.

### OFI-000105 — Gabarito: B
*Oficial — Fundação Cesgranrio, BNDES, Edital 1/2024, Analista — Análise de Sistemas: Desenvolvimento, 2024, Prova 3 (manhã), questão 70 (gabarito: final após recursos (documento da banca, via espelho QConcursos)) · status: em_revisao*

A restrição **CHECK** valida uma **condição lógica** sobre os valores da linha (por exemplo, `A >= 0`). A unicidade usa **UNIQUE**; a existência em outra tabela usa **FOREIGN KEY**; a obrigatoriedade de preenchimento usa **NOT NULL**.

- A) Incorreta. Unicidade é UNIQUE (ou PRIMARY KEY).
- B) Correta. CHECK verifica condições como `A >= 0`.
- C) Incorreta. Existência em outra tabela é chave estrangeira.
- D) Incorreta. CHECK não restringe o acesso de leitura a linhas de outra tabela.
- E) Incorreta. Preenchimento obrigatório é NOT NULL.
