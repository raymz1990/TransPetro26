---
modulo: 01-arquitetura-dados
arquivo: 06-transacoes-e-acid
itens_edital:
  - "1.14 Propriedades de banco de dados: atomicidade, consistência, isolamento e durabilidade"
  - "1.16 Transações de bancos de dados"
ids_matriz: ["E5-015", "E5-017"]
escopo: "A — conteúdo expresso no edital (concorrência, bloqueios e recuperação como aprofundamento necessário para compreender 1.14 e 1.16)"
tipo_conteudo: "teoria"
status: "VALIDADO"
ultima_atualizacao: "2026-10-31"
---

# Transações e Propriedades ACID

**Módulo:** M01 — Arquitetura de Dados
**Textos oficiais (Anexo IV):** 1.14 "Propriedades de banco de dados: atomicidade, consistência, isolamento e durabilidade"; 1.16 "Transações de bancos de dados".
**Escopo:** A. As seções sobre níveis de isolamento, bloqueios, MVCC e recuperação são **aprofundamento B** necessário para entender como as propriedades são implementadas; "gerência de bloqueios" e "gerência de transações" aparecem literalmente em outra ênfase do edital, não na Ênfase 5.
**Status:** `VALIDADO` (aprovado pelo usuário em 2026-10-31; referências não verificadas listadas em `docs/qualidade/relatorio-producao-modulo-01.md`).

**Objetivos de aprendizagem.** (1) Definir transação e seu ciclo de vida; (2) explicar cada propriedade ACID e **o que a garante**; (3) reconhecer anomalias de concorrência e os níveis de isolamento; (4) entender bloqueios, deadlock, MVCC e recuperação em nível conceitual.

---

## 1. Introdução

Muitas operações de negócio só fazem sentido **em conjunto**: transferir valor entre duas contas exige debitar uma e creditar a outra. Se o sistema falhar no meio, ou se outra operação enxergar o estado intermediário, os dados ficam incorretos. A **transação** é a unidade lógica de trabalho que o SGBD executa de forma confiável, e as **propriedades ACID** descrevem as garantias esperadas.

## 2. Fundamentos

### 2.1 Transação

**Transação** é uma sequência de operações de leitura e escrita tratada como **uma unidade lógica indivisível** de trabalho, que leva o banco de um estado consistente a outro estado consistente.

Controle (TCL): `BEGIN`/`START TRANSACTION`, `COMMIT` (confirma e torna permanente), `ROLLBACK` (desfaz tudo desde o início), `SAVEPOINT` (ponto intermediário para desfazer parcialmente). Em muitos SGBDs há **autocommit** (cada comando é uma transação) quando não se abre transação explícita.

```sql
BEGIN;
UPDATE conta SET saldo = saldo - 500 WHERE id = 1;   -- débito
UPDATE conta SET saldo = saldo + 500 WHERE id = 2;   -- crédito
COMMIT;   -- se qualquer passo falhar, ROLLBACK desfaz os dois
```

**Estados de uma transação:** *ativa* → *parcialmente confirmada* (última operação executada) → *confirmada* (commit) ou *falha* → *abortada* (desfeita; pode ser reiniciada).

### 2.2 As propriedades ACID (item 1.14)

| Propriedade | Definição | Exemplo (transferência) | **O que a implementa** |
|---|---|---|---|
| **A — Atomicidade** | A transação é executada **por inteiro ou não é executada** (tudo ou nada) | Ou débito e crédito ocorrem, ou nenhum | Gerenciador de recuperação: **log** e *rollback* |
| **C — Consistência** | A transação leva o banco de um estado **válido** a outro estado válido, respeitando as **regras de integridade** | A soma dos saldos é preservada; FKs e `CHECK` não são violados | Restrições do SGBD + **correção da lógica da aplicação** |
| **I — Isolamento** | Transações **concorrentes** não interferem umas nas outras; o resultado equivale a alguma execução serial | Outra consulta não vê o débito sem o crédito | **Controle de concorrência** (bloqueios, MVCC) |
| **D — Durabilidade** | Efeitos de transação **confirmada** são **permanentes**, mesmo após falha do sistema | Após `COMMIT`, queda de energia não perde a transferência | **Log em disco** (*write-ahead logging*), *checkpoints*, réplicas/backups |

Pontos de atenção:

- A **consistência** depende do projeto do esquema (restrições) e da lógica correta da aplicação; o SGBD garante as restrições declaradas, não a regra de negócio que ele desconhece.
- "ACID" descreve **sistemas transacionais** (OLTP). Alguns bancos NoSQL oferecem garantias diferentes (arquivo `07`: BASE, consistência eventual).
- Não confunda a "consistência" do **ACID** (validade das regras de integridade) com a "consistência" do teorema **CAP** (todos os nós veem o mesmo dado) — significados distintos (arquivo `07`).

## 3. Desenvolvimento: concorrência e isolamento

### 3.1 Problemas de execução concorrente (anomalias)

| Anomalia | Descrição |
|---|---|
| **Atualização perdida** (*lost update*) | Duas transações leem o mesmo valor e ambas escrevem; uma sobrescreve a outra |
| **Leitura suja** (*dirty read*) | Lê dado alterado por transação ainda **não confirmada** (que pode ser desfeita) |
| **Leitura não repetível** (*non-repeatable read*) | Duas leituras do **mesmo registro** na mesma transação retornam valores diferentes (outra transação alterou e confirmou) |
| **Leitura fantasma** (*phantom read*) | Duas execuções da **mesma consulta** retornam conjuntos de linhas diferentes (outra transação inseriu/excluiu linhas que satisfazem o filtro) |
| **Distorção de escrita** (*write skew*) | Duas transações leem dados sobrepostos e escrevem em itens diferentes, violando uma regra conjunta (possível em *snapshot isolation*) |

### 3.2 Níveis de isolamento (padrão SQL)

| Nível | Leitura suja | Não repetível | Fantasma |
|---|---|---|---|
| `READ UNCOMMITTED` | possível | possível | possível |
| `READ COMMITTED` | evitada | possível | possível |
| `REPEATABLE READ` | evitada | evitada | possível (no padrão) |
| `SERIALIZABLE` | evitada | evitada | evitada |

Maior isolamento ⇒ maior correção, **menor concorrência/desempenho** (mais bloqueios ou mais abortos). A implementação real varia: PostgreSQL, por exemplo, usa MVCC e, em `REPEATABLE READ`, também evita fantasmas (*snapshot isolation*), e não oferece `READ UNCOMMITTED` efetivo; Oracle usa *read committed* por padrão. Confirme a documentação do SGBD usado.

### 3.3 Serializabilidade

Um **escalonamento** (intercalação das operações de várias transações) é **serializável** se seu efeito é equivalente ao de alguma execução **serial** das mesmas transações. A **serializabilidade por conflito** é verificada por um **grafo de precedência**: ausência de ciclos ⇒ serializável. Dois acessos **conflitam** se são de transações diferentes, sobre o mesmo item e ao menos um é escrita.

### 3.4 Técnicas de controle de concorrência

**Bloqueios (*locks*):**

| Modo | Compatibilidade |
|---|---|
| **Compartilhado (S, leitura)** | Compatível com outros S; incompatível com X |
| **Exclusivo (X, escrita)** | Incompatível com qualquer outro bloqueio no item |

**Protocolo de bloqueio em duas fases (2PL):** fase de **crescimento** (só adquire bloqueios) e fase de **encolhimento** (só libera); garante serializabilidade. O **2PL estrito** mantém os bloqueios exclusivos até o commit/abort, evitando leituras sujas e abortos em cascata.

**Granularidade:** bloqueios em linha, página, tabela ou banco; granularidade fina aumenta a concorrência e o custo de gerência; a grossa reduz a gerência mas aumenta a espera.

**Deadlock (impasse):** duas ou mais transações esperam, ciclicamente, bloqueios umas das outras. Tratamento: **prevenção** (ordenar aquisição de recursos; técnicas por *timestamp*), **detecção** (grafo de espera; aborta-se uma "vítima") e **timeout**. Boas práticas: transações curtas, acesso aos mesmos recursos na mesma ordem.

**MVCC (*Multi-Version Concurrency Control*):** o SGBD mantém **várias versões** de cada linha; leitores enxergam um **instantâneo** consistente sem bloquear escritores e vice-versa. Reduz bloqueios de leitura; escritas conflitantes ainda exigem tratamento (abortos ou espera).

**Controle otimista:** executa sem bloquear, valida no commit (adequado a baixa contenção).

### 3.5 Recuperação (durabilidade e atomicidade)

- **Log de transações** (registro sequencial de alterações) e **WAL** (*write-ahead logging*): o registro do log é gravado em disco **antes** da página de dados alterada.
- **Desfazer (*undo*)** reverte transações não confirmadas; **refazer (*redo*)** reaplica alterações de transações confirmadas cujos dados não chegaram ao disco.
- **Pontos de verificação (*checkpoints*)** limitam o trabalho de recuperação após queda.
- Falhas: da **transação** (erro lógico, abort), do **sistema** (queda; memória volátil perdida) e de **mídia** (disco), esta última exigindo **backups** e arquivamento de logs.
- **Backup e recuperação até um ponto no tempo (*point-in-time recovery*)** complementam a durabilidade.

### 3.6 Transações distribuídas (visão geral)

Quando uma transação envolve vários bancos, usa-se o **commit em duas fases (2PC)**: fase de *preparação* (todos votam) e fase de *confirmação/aborto*. Garante atomicidade distribuída ao custo de latência e bloqueio. Em arquiteturas de microsserviços, utilizam-se alternativas como o padrão *Saga* (compensações), com consistência eventual.

## 4. Comparações conceituais

| Conceito A | Conceito B | Diferença principal |
|---|---|---|
| Atomicidade | Durabilidade | Tudo-ou-nada × permanência após o commit |
| Consistência (ACID) | Isolamento | Respeito às regras de integridade × não interferência entre transações concorrentes |
| Consistência (ACID) | Consistência (CAP) | Validade das regras × todos os nós veem o mesmo dado |
| `COMMIT` | `ROLLBACK` | Confirma e torna permanente × desfaz |
| Leitura não repetível | Leitura fantasma | Mesmo registro com valor alterado × conjunto de linhas que muda |
| Bloqueio compartilhado | Bloqueio exclusivo | Leitura concorrente permitida × acesso exclusivo para escrita |
| Deadlock | Espera comum por bloqueio | Espera circular sem fim × espera que termina quando o bloqueio é liberado |
| Bloqueios (2PL) | MVCC | Leitores bloqueiam/são bloqueados × leitores usam versões |
| Execução serial | Escalonamento serializável | Uma transação por vez × concorrente com efeito equivalente a serial |

## 5. Aplicações e cenários

**Cenário (didático): reserva de estoque.** Duas ordens de compra tentam reservar o último item. Sem isolamento adequado, ambas leem "1 disponível" e ambas confirmam (*lost update*). Soluções: bloqueio da linha com `SELECT ... FOR UPDATE`, nível `SERIALIZABLE`, ou restrição `CHECK`/atualização condicional (`UPDATE ... WHERE qtd >= 1`). *Limitação:* mais bloqueio ⇒ menos concorrência.

**Cenário (didático): falha no meio de uma carga.** Um processo grava 1.000 registros e cai no 600º. Com tudo em **uma transação**, o *rollback* automático na recuperação deixa o banco como antes (atomicidade). Sem transação, ficam 600 linhas gravadas e inconsistência com o restante.

**Cenário (didático): relatório e escrita simultâneos.** Com MVCC, o relatório lê um instantâneo e não bloqueia as atualizações; com bloqueio de leitura em nível alto, o relatório pode atrasar escritas.

## 6. Atenção para a prova

*Inferência técnica e recomendação pedagógica; sem atribuir frequência à banca.*

- Decorar **a definição correta de cada letra** e **não trocá-las**: atomicidade = tudo ou nada; consistência = estado válido; isolamento = transações concorrentes não interferem; durabilidade = efeitos permanentes após o commit. Alternativas que **embaralham** definições entre as quatro propriedades são incorretas.
- Atomicidade **não** significa dividir a transação em subtransações menores.
- Isolamento **não** permite "misturar" transações livremente.
- Durabilidade **não** significa que resultados possam ser desfeitos depois do commit.
- Identificar a anomalia pelo sintoma: **valor lido de transação não confirmada** = leitura suja; **mesmo registro com outro valor** = não repetível; **conjunto de linhas diferente** = fantasma.
- Execução serial **resolve** a concorrência, mas **sacrifica desempenho**.
- *Evidência histórica (amostra de duas provas):* a Prova 6 de 2023 (Q53) exigiu escolher a descrição correta das quatro propriedades ACID, com distratores que trocavam as definições. Os demais assuntos desta seção (níveis de isolamento, bloqueios, MVCC) não apareceram nas duas provas catalogadas para a Ênfase 5; duas provas não permitem inferir frequência.

## 7. Síntese

- **Transação:** unidade lógica de trabalho; `COMMIT`, `ROLLBACK`, `SAVEPOINT`.
- **ACID:** A (tudo ou nada; log/rollback), C (estado válido; restrições + aplicação), I (sem interferência; concorrência), D (permanente após commit; log/WAL).
- **Anomalias:** atualização perdida, leitura suja, não repetível, fantasma, *write skew*.
- **Isolamento SQL:** READ UNCOMMITTED < READ COMMITTED < REPEATABLE READ < SERIALIZABLE.
- **Concorrência:** locks S/X, 2PL, deadlock (prevenção/detecção), MVCC, controle otimista.
- **Recuperação:** log/WAL, undo/redo, checkpoint, backup.

## 8. Pontos para a futura produção de questões (registro)

Conceitos: ACID; transação; níveis de isolamento; anomalias; locks; deadlock; MVCC; recuperação. Distinções: atomicidade×durabilidade; consistência ACID×CAP; não repetível×fantasma; serial×serializável. Interpretação: identificar qual propriedade foi violada em um cenário; qual anomalia ocorre em uma sequência de operações.

## 9. Referências

Bibliografia de apoio (itens marcados **verificado** foram conferidos em catálogos online em 2026-10-31; os demais, **não verificados** — edição/ano/páginas pendentes):

- ELMASRI, R.; NAVATHE, S. B. *Sistemas de Banco de Dados*. São Paulo: Pearson (edição em português localizada: 6ª ed., 2011; o original em inglês, *Fundamentals of Database Systems*, 7ª ed., consta nos catálogos com ano 2015, 2016 ou 2017) — **verificado** em catálogos online.
- SILBERSCHATZ, A.; KORTH, H. F.; SUDARSHAN, S. *Database System Concepts*. 7th ed. McGraw-Hill, 2019 — **verificado**.
- GRAY, J.; REUTER, A. *Transaction Processing: Concepts and Techniques*. Morgan Kaufmann.
- ISO/IEC 9075 (níveis de isolamento do padrão SQL; edição não especificada nesta etapa).
- Documentação oficial dos SGBDs (PostgreSQL, Oracle, SQL Server) para a implementação real de isolamento — versões não especificadas nesta etapa.
- Edital Transpetro nº 04/2026.4, Anexo IV, itens 1.14 e 1.16.
