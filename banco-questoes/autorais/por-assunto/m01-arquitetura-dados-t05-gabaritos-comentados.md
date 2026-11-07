# Questões autorais — m01-arquitetura-dados (expansão T05) — gabaritos comentados (T05 — expansão)

## AUT-000091 — Mapeamento do DER para o modelo relacional: relacionamento N:N com atributo

*Questão autoral — estilo Cesgranrio.*

**Gabarito: C**

Relacionamento **N:N** vira **tabela associativa**, cuja chave primária é composta pelas chaves das duas entidades e que carrega os atributos do relacionamento (aqui, `nota`). Cada coluna de chave é também chave estrangeira.

- **A)** Incorreta. Impõe que cada aluno tenha uma só disciplina (relação 1:N no sentido contrário) e coloca `nota` em ALUNO, perdendo a associação com a disciplina.
- **B)** Incorreta. Impõe que cada disciplina tenha um só aluno e coloca `nota` fora de contexto.
- **C)** Correta. Tabela associativa com PK composta e duas FKs, com `nota` na tabela de associação, é o mapeamento correto.
- **D)** Incorreta. Colunas repetidas (disciplina1, disciplina2...) violam a 1FN e limitam o número de disciplinas.
- **E)** Incorreta. PK apenas em `matricula` permitiria uma única matrícula por aluno, o que contradiz a cardinalidade N:N.

**Ponto de atenção:** Regra de ouro do mapeamento: **N:N ⇒ nova tabela**; atributos do relacionamento ficam na nova tabela; PK composta = (PK de A, PK de B).

**Revisão rápida:** N:N → tabela associativa (PK composta + 2 FKs).

## AUT-000092 — Avaliação de modelos: redundância e atributos derivados

*Questão autoral — estilo Cesgranrio.*

**Gabarito: A**

`valor_total_pedido` é **derivado** (calculável a partir dos itens) e está **repetido** em várias linhas. Isso viola o critério de **ausência de redundância** e provoca **anomalias de atualização**: alterar um item sem atualizar todas as repetições deixa o banco inconsistente. Alternativas: calcular o total em consulta/visão, ou, se for armazenado por desempenho, guardá-lo no cabeçalho do pedido, com mecanismo de atualização.

- **A)** Correta. É o problema apresentado no enunciado: redundância de dado derivado e risco de inconsistência.
- **B)** Incorreta. O enunciado não informa a ausência de chaves estrangeiras; a descrição trata da repetição do total.
- **C)** Incorreta. Um pedido tem vários itens; a cardinalidade 1:N é correta e não é o problema.
- **D)** Incorreta. Nomes de colunas não são problema no trecho apresentado.
- **E)** Incorreta. Índices são questão de desempenho físico e não são mencionados; o defeito é do modelo lógico.

**Ponto de atenção:** Aplique a lista de critérios (negócio, completude, cardinalidades, **redundância**, normalização, integridade, legibilidade, desempenho) ao que o enunciado **mostra**, e não ao que você poderia imaginar.

**Revisão rápida:** Atributo derivado repetido = redundância = anomalia de atualização.

## AUT-000093 — Engenharia reversa de banco de dados legado

*Questão autoral — estilo Cesgranrio.*

**Gabarito: E**

A engenharia reversa **reconstrói o modelo a partir do banco existente**. As afirmativas I e II descrevem técnicas válidas (extração do esquema pelo catálogo e dedução de relacionamentos). A III é falsa: o catálogo **não guarda a semântica do negócio** (cardinalidade mínima, especializações, significado das colunas), que precisa ser reconstruída com análise humana.

- **A)** Incorreta. Omite a II, que também é verdadeira.
- **B)** Incorreta. A III é falsa; o catálogo não registra regras de negócio não implementadas no banco.
- **C)** Incorreta. Inclui a III, falsa.
- **D)** Incorreta. Inclui a III, falsa.
- **E)** Correta. I e II são verdadeiras e III é falsa: alternativa correta.

**Ponto de atenção:** Limite da engenharia reversa: recupera a **estrutura física**; a **semântica** do negócio exige validação com especialistas.

**Revisão rápida:** Reversa: catálogo + inferência; não recupera regras de negócio.

## AUT-000094 — DDL: classificação dos comandos SQL

*Questão autoral — estilo Cesgranrio.*

**Gabarito: B**

A **DDL** define e altera a **estrutura** (esquema): `CREATE`, `ALTER`, `DROP`. A **DML** manipula os dados (`INSERT`, `UPDATE`, `DELETE`, `SELECT` em muitas classificações). Os comandos de controle de transação (`COMMIT`, `ROLLBACK`, `SAVEPOINT`) formam a TCL.

- **A)** Incorreta. São comandos de manipulação de dados (DML).
- **B)** Correta. CREATE, ALTER e DROP são comandos DDL.
- **C)** Incorreta. UPDATE é DML; a mistura torna a alternativa incorreta.
- **D)** Incorreta. SELECT e INSERT não são DDL.
- **E)** Incorreta. São comandos de controle de transações (TCL).

**Ponto de atenção:** DDL altera a **estrutura**; DML altera os **dados**; TCL controla **transações**; DCL controla **permissões**.

**Revisão rápida:** DDL: CREATE, ALTER, DROP.

## AUT-000095 — DML: UPDATE, DELETE e INSERT em sequência

*Questão autoral — estilo Cesgranrio.*

**Gabarito: D**

**1) UPDATE** (preco < 100): A passa de 50 para 55 e C de 80 para 88; B (100) e D (120) não mudam. **2) DELETE** (preco > 110): remove D (120). **3) INSERT**: entra E (40). Linhas finais: A=55, B=100, C=88, E=40. **SUM = 55 + 100 + 88 + 40 = 283.**

- **A)** Incorreta. 243 = 55 + 100 + 88: esquece o INSERT.
- **B)** Incorreta. 270 = 50 + 100 + 80 + 40: ignora o UPDATE.
- **C)** Incorreta. 293: trata o UPDATE como `preco <= 100` (B iria a 110) ou erra a conta do reajuste.
- **D)** Correta. 283: resultado correto.
- **E)** Incorreta. 403 = 55 + 100 + 88 + 120 + 40: esquece o DELETE.

**Ponto de atenção:** Em sequências de DML, **refaça o estado da tabela após cada comando**. A ordem importa: o UPDATE precede o DELETE, e o filtro do DELETE usa o preço já reajustado.

**Revisão rápida:** Estado final: A=55, B=100, C=88, E=40 → 283.

## AUT-000096 — Independência de dados: lógica x física

*Questão autoral — estilo Cesgranrio.*

**Gabarito: B**

A **independência física** é a capacidade de mudar o **nível interno** (arquivos, índices, organização) sem alterar o esquema conceitual nem as aplicações. A **independência lógica** é a capacidade de mudar o **esquema conceitual** (por exemplo, acrescentar uma coluna) sem alterar os **esquemas externos (visões)** e programas; é mais difícil de obter.

- **A)** Incorreta. Descreve a independência lógica, que trata de mudanças no esquema conceitual; o caso do enunciado envolve apenas a estrutura de armazenamento.
- **B)** Correta. A mudança de índices e arquivos sem afetar o esquema conceitual e as aplicações é independência física.
- **C)** Incorreta. Integridade referencial trata de consistência entre chaves, não de isolamento entre programas e armazenamento.
- **D)** Incorreta. Atomicidade é propriedade de transações, e não explica a ausência de impacto nos programas.
- **E)** Incorreta. Normalização atua no projeto lógico e não se refere à organização física.

**Ponto de atenção:** Pergunte: **o que mudou?** Armazenamento (índices, arquivos) = física; esquema conceitual (tabelas, colunas) = lógica. Arquitetura de três níveis: externo, conceitual, interno.

**Revisão rápida:** Física: nível interno muda; lógica: nível conceitual muda.

## AUT-000097 — Transações: COMMIT, ROLLBACK e SAVEPOINT

*Questão autoral — estilo Cesgranrio.*

**Gabarito: E**

Início: 100. Após o primeiro UPDATE: 150. `SAVEPOINT s1` marca esse estado. O segundo UPDATE leva a 300, mas `ROLLBACK TO s1` **desfaz apenas o que veio depois do savepoint**, retornando a 150 (a transação continua aberta). O terceiro UPDATE leva a 120, e o COMMIT confirma **120**.

- **A)** Incorreta. 100 corresponderia a um ROLLBACK total, o que não ocorre: o rollback é parcial.
- **B)** Incorreta. 150 ignora o último UPDATE (−30).
- **C)** Incorreta. 90 seria 100 − 30, desfazendo também o primeiro UPDATE (+50).
- **D)** Incorreta. 270 = 300 − 30, como se o ROLLBACK TO não tivesse efeito.
- **E)** Correta. 120 = 150 − 30: resultado correto.

**Ponto de atenção:** `ROLLBACK TO savepoint` é **parcial** e mantém a transação aberta; `ROLLBACK` sem savepoint desfaz tudo. O que foi desfeito não volta com o COMMIT.

**Revisão rápida:** Saldo: 100 → 150 → (300 desfeito) → 150 → 120.

## AUT-000098 — Banco de dados em memória

*Questão autoral — estilo Cesgranrio.*

**Gabarito: C**

Bancos em memória evitam o gargalo do disco, mantendo os dados na **RAM**. Como a RAM é **volátil**, a durabilidade exige mecanismos adicionais: **snapshots**, **log de operações** (como o AOF do Redis) ou **replicação**. Há estruturas específicas (conjuntos ordenados para rankings, listas, hashes).

- **A)** Incorreta. A RAM é volátil; sem persistência, os dados se perdem com a queda do servidor.
- **B)** Incorreta. O Redis, por exemplo, oferece várias estruturas (hashes, listas, conjuntos ordenados) e é adequado a rankings.
- **C)** Correta. Resume as características do banco em memória: baixa latência e durabilidade opcional por snapshot, log ou réplica.
- **D)** Incorreta. É tipicamente **mais rápido** que o acesso a disco.
- **E)** Incorreta. Pode ser usado como cache, mas também como repositório principal em cenários adequados.

**Ponto de atenção:** Banco em memória = **velocidade com custo e risco de volatilidade** (RAM mais cara e volátil). Persistência é opcional e configurável.

**Revisão rápida:** In-memory: RAM, baixa latência, durabilidade por snapshot/log/réplica.

## AUT-000099 — Transações concorrentes: leitura fantasma

*Questão autoral — estilo Cesgranrio.*

**Gabarito: D**

A **leitura fantasma** ocorre quando uma transação repete uma consulta com um **predicado** e encontra **novas linhas** inseridas (ou removidas) por outra transação confirmada. Na **leitura não repetível**, a mesma linha lida duas vezes apresenta valores diferentes. Na **leitura suja**, lê-se dado ainda não confirmado.

- **A)** Incorreta. Na leitura suja, o dado lido não estava confirmado; aqui T2 confirmou.
- **B)** Incorreta. Na leitura não repetível, uma linha já lida muda de valor; aqui apareceu uma linha nova.
- **C)** Incorreta. Perda de atualização é a sobreposição de duas escritas concorrentes.
- **D)** Correta. Novas linhas que satisfazem o predicado entre duas leituras caracterizam a leitura fantasma.
- **E)** Incorreta. Deadlock é a espera circular por bloqueios, que não ocorreu.

**Ponto de atenção:** Distinga: **suja** (dado não confirmado), **não repetível** (linha existente muda), **fantasma** (conjunto de linhas muda).

**Revisão rápida:** Fantasma = linhas novas no resultado repetido.
