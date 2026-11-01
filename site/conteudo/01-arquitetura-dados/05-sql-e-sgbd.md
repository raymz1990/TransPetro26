---
modulo: 01-arquitetura-dados
arquivo: 05-sql-e-sgbd
itens_edital:
  - "1.10 Linguagem de consulta estruturada (SQL)"
  - "1.11 Linguagem de definição de dados (DDL)"
  - "1.12 Linguagem de manipulação de dados (DML)"
  - "1.13 Sistema Gerenciador de Banco de Dados (SGBD)"
  - "1.15 Independência de dados"
  - "1.17 Melhoria de performance de banco de dados"
ids_matriz: ["E5-011", "E5-012", "E5-013", "E5-014", "E5-016", "E5-018"]
escopo: "A — conteúdo expresso no edital"
tipo_conteudo: "teoria"
status: "VALIDADO"
ultima_atualizacao: "2026-10-31"
---

# SQL (DDL e DML), SGBD, Independência de Dados e Desempenho

**Módulo:** M01 — Arquitetura de Dados
**Textos oficiais (Anexo IV):** 1.10 "Linguagem de consulta estruturada (SQL)"; 1.11 "Linguagem de definição de dados (DDL)"; 1.12 "Linguagem de manipulação de dados (DML)"; 1.13 "Sistema Gerenciador de Banco de Dados (SGBD)"; 1.15 "Independência de dados"; 1.17 "Melhoria de performance de banco de dados".
**Escopo:** A. *Nota:* gatilhos (*triggers*) e procedimentos armazenados **não** são itens da Ênfase 5 (constam de outra ênfase do edital); aparecem aqui apenas de passagem, se necessário.
**Status:** `VALIDADO` (aprovado pelo usuário em 2026-10-31; referências não verificadas listadas em `docs/qualidade/relatorio-producao-modulo-01.md`).

**Objetivos de aprendizagem.** (1) Descrever as funções e a arquitetura de um SGBD; (2) explicar a independência lógica e física de dados; (3) escrever e interpretar comandos DDL e DML e consultas SQL com junções, agregação e subconsultas; (4) identificar causas de lentidão e medidas de melhoria de desempenho.

---

## 1. Introdução

O **SGBD** é o software que torna o banco de dados utilizável por muitos usuários e aplicações, com segurança, consistência e eficiência. O **SQL** (*Structured Query Language*) é a linguagem padrão para definir, manipular e consultar dados em SGBDs relacionais. A **independência de dados** é a propriedade arquitetural que permite alterar a organização do banco sem reescrever as aplicações. E a **melhoria de desempenho** reúne as técnicas para que consultas e transações respondam no tempo exigido.

Relações: o SQL implementa o modelo relacional e a álgebra (arquivo `03`); o DDL materializa o modelo físico (arquivo `02`); a integridade e as transações são tratadas nos arquivos `03` e `06`.

---

## 2. SGBD (item 1.13)

### 2.1 Funções de um SGBD

| Função | Descrição |
|---|---|
| Definição de dados | Criar e alterar estruturas (DDL) e manter o **catálogo** (metadados, arquivo `10`) |
| Armazenamento e recuperação | Gerenciar arquivos, páginas, *buffers* e **índices** |
| Processamento de consultas | Analisar, **otimizar** e executar comandos |
| Controle de concorrência | Isolar transações simultâneas (arquivo `06`) |
| Recuperação | Restaurar o estado consistente após falhas (logs) |
| Segurança e autorização | Autenticar usuários e controlar privilégios (`GRANT`/`REVOKE`) |
| Integridade | Impor restrições (chaves, FKs, `CHECK`) |
| Administração | Backup, monitoração, estatísticas |

### 2.2 Arquitetura em componentes (visão simplificada)

```text
 Aplicação / Cliente SQL
          │
 ┌────────▼──────────────────────────────────────────┐
 │ Processador de consultas                          │
 │   analisador (parser) → otimizador → executor     │
 ├────────────────────────────────────────────────────┤
 │ Gerenciador de transações (concorrência, logs)     │
 ├────────────────────────────────────────────────────┤
 │ Gerenciador de armazenamento (buffer, arquivos,    │
 │ índices)                                           │
 ├────────────────────────────────────────────────────┤
 │ Catálogo (metadados)                               │
 └────────▲──────────────────────────────────────────┘
          │
   Disco / armazenamento
```

### 2.3 Tipos de usuários e classificações

Usuários: **DBA** (Administrador de Banco de Dados), projetistas, desenvolvedores/analistas, usuários finais. Classificações de SGBD: pelo modelo de dados (relacional, documento, grafo…), por número de usuários, por distribuição (centralizado/distribuído), por finalidade (transacional/analítico). Os modelos não relacionais e o banco em memória são tratados no arquivo `07`.

---

## 3. Independência de dados (item 1.15)

A **arquitetura em três esquemas** (modelo ANSI/SPARC) separa a visão que cada público tem dos dados:

| Nível | Também chamado | Descreve |
|---|---|---|
| **Externo** | Visões (*views*) | O que cada usuário/aplicação enxerga |
| **Conceitual (lógico)** | Esquema lógico | Estrutura global: tabelas, relações, restrições |
| **Interno (físico)** | Esquema físico | Armazenamento: arquivos, índices, organização |

Com isso:

- **Independência lógica de dados:** capacidade de alterar o **esquema conceitual** (adicionar coluna/tabela) **sem alterar os esquemas externos/aplicações**, por exemplo mantendo uma *view* que preserva a visão antiga. É a mais difícil de obter totalmente.
- **Independência física de dados:** capacidade de alterar o **esquema interno** (criar índice, reorganizar arquivos, particionar, trocar o armazenamento) **sem alterar o esquema conceitual nem as aplicações**. É a mais comum nos SGBDs relacionais.

*Exemplo didático:* criar um índice sobre `ordem(data_abertura)` melhora uma consulta sem que nenhum programa precise mudar (independência física). Dividir `cliente` em `cliente` e `cliente_endereco` e criar uma *view* `cliente_v` com as colunas originais permite que relatórios antigos continuem funcionando (independência lógica).

| Conceito A | Conceito B | Diferença |
|---|---|---|
| Independência lógica | Independência física | Lógica: muda o esquema conceitual; física: muda o esquema interno |

---

## 4. SQL: sublinguagens (item 1.10)

O SQL é **declarativo** (descreve o resultado, não o algoritmo). Padronizado como **ISO/IEC 9075**; cada SGBD adiciona extensões (*dialetos*), por exemplo `VARCHAR2` e `MINUS` em Oracle, `LIMIT` em PostgreSQL/MySQL, `TOP` em SQL Server.

| Sublinguagem | Finalidade | Comandos típicos |
|---|---|---|
| **DDL** (*Data Definition Language*) — item 1.11 | Definir estruturas | `CREATE`, `ALTER`, `DROP` (e, em muitos SGBDs, `TRUNCATE`) |
| **DML** (*Data Manipulation Language*) — item 1.12 | Manipular dados | `INSERT`, `UPDATE`, `DELETE`, `MERGE` (e, para muitos autores, `SELECT`) |
| **DQL** (*Data Query Language*) | Consultar dados | `SELECT` |
| **DCL** (*Data Control Language*) | Controlar acesso | `GRANT`, `REVOKE` |
| **TCL** (*Transaction Control Language*) | Controlar transações | `COMMIT`, `ROLLBACK`, `SAVEPOINT` |

*Divergência de classificação:* a literatura e os fabricantes divergem quanto ao `SELECT`: alguns o incluem na **DML**; outros o separam como **DQL**. O mesmo ocorre com `TRUNCATE` (DDL em Oracle/PostgreSQL pela semântica, embora remova dados). Em prova, interprete conforme o enunciado e a definição dada.

---

## 5. DDL — Linguagem de definição de dados (item 1.11)

### 5.1 Comandos principais

```sql
-- Criação de tabela com chaves e restrições (modelo físico)
CREATE TABLE equipamento (
  id_equipamento  INT           PRIMARY KEY,
  tag             VARCHAR(30)   NOT NULL UNIQUE,
  descricao       VARCHAR(200),
  id_area         INT           NOT NULL,
  data_instalacao DATE,
  CONSTRAINT fk_equip_area FOREIGN KEY (id_area) REFERENCES area (id_area),
  CONSTRAINT ck_tag CHECK (tag <> '')
);

-- Alteração: adicionar coluna, alterar tipo, adicionar restrição
ALTER TABLE equipamento ADD COLUMN fabricante VARCHAR(80);
ALTER TABLE equipamento ADD CONSTRAINT ck_data CHECK (data_instalacao >= DATE '1990-01-01');

-- Índice e visão
CREATE INDEX ix_equip_area ON equipamento (id_area);
CREATE VIEW v_equip_ativo AS
  SELECT id_equipamento, tag FROM equipamento WHERE data_instalacao IS NOT NULL;

-- Remoção
DROP INDEX ix_equip_area;
DROP TABLE equipamento;   -- falha se houver FKs referenciando (a menos de CASCADE, conforme o SGBD)
```

*Observação:* a sintaxe exata de `ALTER TABLE` varia (`MODIFY` em Oracle/MySQL; `ALTER COLUMN ... TYPE` em PostgreSQL).

### 5.2 Pontos importantes

- DDL define **esquema** e metadados; em muitos SGBDs, comandos DDL fazem *commit* implícito (Oracle, MySQL) e em outros são transacionais (PostgreSQL). Confirmar na documentação do produto.
- **Restrições** declaradas: `PRIMARY KEY`, `UNIQUE`, `NOT NULL`, `CHECK`, `FOREIGN KEY` (arquivo `03`).
- **`DROP` × `DELETE` × `TRUNCATE`:** `DROP TABLE` remove a **estrutura e os dados**; `DELETE` remove **linhas** (com `WHERE`, registra por linha, pode ser revertido em transação); `TRUNCATE TABLE` remove **todas as linhas** rapidamente, mantendo a estrutura.
- **Visão (*view*):** consulta nomeada; pode ocultar complexidade e dar independência lógica (seção 3). **Visão materializada** armazena o resultado e precisa ser atualizada.
- A **ordem de criação** deve respeitar dependências (tabela pai antes da filha) ou usar `ALTER TABLE ADD CONSTRAINT` depois.

---

## 6. DML — Linguagem de manipulação de dados (item 1.12)

### 6.1 Comandos

```sql
-- INSERT: cada coluna recebe um valor; colunas omitidas assumem DEFAULT ou NULL
INSERT INTO fornecedor (id_forn, nome, tel1)
VALUES (5555, 'Fornecedor 5', '(21) 3456-9088');

-- UPDATE: altera linhas que satisfazem o WHERE (sem WHERE, TODAS as linhas)
UPDATE equipamento SET descricao = 'Bomba centrífuga' WHERE id_equipamento = 10;

-- DELETE: remove linhas
DELETE FROM fornecedor
WHERE id_forn NOT IN (SELECT id_forn FROM venda);  -- cuidado com NULL em NOT IN

-- MERGE (upsert): insere ou atualiza conforme exista correspondência
-- (SQL padrão/Oracle/SQL Server; no PostgreSQL só a partir da versão 15; MySQL usa INSERT ... ON DUPLICATE KEY UPDATE)
MERGE INTO estoque e USING entrada n ON (e.id_item = n.id_item)
WHEN MATCHED THEN UPDATE SET e.qtd = e.qtd + n.qtd
WHEN NOT MATCHED THEN INSERT (id_item, qtd) VALUES (n.id_item, n.qtd);
```

### 6.2 Efeitos sobre a integridade

Um comando DML só é executado com sucesso se **todas as restrições** forem satisfeitas. Exemplos: `INSERT` em `venda` com `id_f` inexistente falha por violar a FK; omitir coluna `NOT NULL` sem *default* falha; `DELETE` de um pai com filhos falha com `RESTRICT/NO ACTION` ou propaga com `CASCADE` (arquivo `03`).

---

## 7. Consultas SQL (item 1.10)

### 7.1 Estrutura e ordem lógica de avaliação

```sql
SELECT  [DISTINCT] colunas / expressões / agregados
FROM    tabelas e junções
WHERE   filtro sobre linhas
GROUP BY agrupamento
HAVING  filtro sobre grupos
ORDER BY ordenação
```

**Ordem lógica de processamento:** `FROM` → `WHERE` → `GROUP BY` → `HAVING` → `SELECT` → `ORDER BY` (e depois `LIMIT`). Por isso o alias definido no `SELECT` não pode ser usado no `WHERE` na maioria dos SGBDs (o SQLite é uma exceção, por extensão própria). Diferença: **`WHERE` filtra linhas antes do agrupamento; `HAVING` filtra grupos após agregação.**

### 7.2 Junções

| Tipo | Resultado |
|---|---|
| `INNER JOIN` | Apenas linhas com correspondência em ambas |
| `LEFT [OUTER] JOIN` | Todas da esquerda + correspondentes da direita (nulos se não houver) |
| `RIGHT [OUTER] JOIN` | Todas da direita + correspondentes da esquerda |
| `FULL [OUTER] JOIN` | Todas de ambas, com nulos onde não houver correspondência |
| `CROSS JOIN` | Produto cartesiano |
| **Autojunção** (*self join*) | Junção da tabela com ela mesma, usando **aliases** |

*Exemplo de autojunção (didático):* tabela `familia(pai, filho)`; netos de 'Carlos':

```sql
SELECT f2.filho
FROM   familia f1
INNER JOIN familia f2 ON f1.filho = f2.pai   -- o filho de f1 é o pai em f2
WHERE  f1.pai = 'Carlos';
```

Leitura: `f1` representa a geração dos filhos de Carlos; `f2`, a dos filhos desses filhos. Ligar `f1.filho` a `f2.pai` encadeia as gerações.

**Cuidado com junção externa e `WHERE`:** um filtro no `WHERE` sobre a tabela do lado preenchido com nulos pode **transformar** a junção externa em interna na prática; coloque a condição no `ON` quando quiser preservar linhas sem correspondência.

### 7.3 Agregação

Funções: `COUNT`, `SUM`, `AVG`, `MIN`, `MAX`. Regra: toda coluna no `SELECT` que não esteja em função de agregação deve constar no `GROUP BY`. Agregados ignoram `NULL` (exceto `COUNT(*)`).

```sql
SELECT a.nome, COUNT(*) AS qtd_equip, AVG(e.valor) AS valor_medio
FROM   equipamento e JOIN area a ON a.id_area = e.id_area
GROUP BY a.nome
HAVING COUNT(*) > 10;
```

### 7.4 Subconsultas e operações de conjunto

- **Subconsulta escalar/ de lista / de tabela**, **correlacionada** (referencia a consulta externa e é reavaliada por linha, conceitualmente).
- `IN`, `NOT IN`, `EXISTS`, `NOT EXISTS`, `ANY/ALL`.
- **Operações de conjunto:** `UNION` (remove duplicatas), `UNION ALL` (mantém), `INTERSECT`, `EXCEPT` (`MINUS` em Oracle); exigem mesmo número de colunas e tipos compatíveis.

*Exemplo didático — fornecedores com ao menos uma venda em um intervalo de datas:*

```sql
SELECT f.id_forn, f.nome
FROM   fornecedor f
WHERE  EXISTS (SELECT 1 FROM venda v
               WHERE v.id_f = f.id_forn
                 AND v.data BETWEEN DATE '2018-01-05' AND DATE '2018-01-10');
```

`BETWEEN` é **inclusivo** nos dois extremos. Combinar `>= início` em uma consulta e `<= fim` em outra com `UNION`/`INTERSECT` altera o significado: `INTERSECT` das duas daria fornecedores com venda em *alguma* data após o início **e** em *alguma* data antes do fim, que não é o mesmo que uma venda **dentro** do intervalo.

### 7.5 Recursos adicionais

**CTE** (`WITH`), **funções de janela** (`ROW_NUMBER() OVER (PARTITION BY ... ORDER BY ...)`), expressões `CASE`, junção com `USING`. São extensões úteis; o edital cita o SQL de modo geral, sem listar esses recursos.

---

## 8. Melhoria de performance de banco de dados (item 1.17)

### 8.1 Visão geral

Desempenho é o tempo de resposta e a vazão (transações/s) sob carga. A melhoria é **iterativa**: medir → identificar gargalo → ajustar → medir de novo. Nunca otimize sem medir.

### 8.2 Índices

Estruturas auxiliares que aceleram a busca.

| Tipo | Característica | Uso |
|---|---|---|
| **B-tree/B+tree** | Ordenado; suporta igualdade, faixa e ordenação | Padrão na maioria dos SGBDs |
| **Hash** | Apenas igualdade | Busca exata |
| **Bitmap** | Eficiente para baixa cardinalidade e consultas analíticas | Comum em DW (Oracle) |
| **Composto** | Várias colunas; a **ordem** das colunas importa (prefixo à esquerda) | Filtros múltiplos |
| **Cobertura** (*covering*) | Contém todas as colunas da consulta, dispensando leitura da tabela | Consultas frequentes |
| **Único** | Impõe unicidade | Chaves |

Custo dos índices: **ocupam espaço** e **tornam inserções/atualizações/exclusões mais lentas** (precisam ser mantidos). Muitos índices prejudicam escrita; poucos prejudicam leitura. Colunas de alta seletividade em filtros, junções e ordenações são boas candidatas. Índices **fragmentados** podem ser reorganizados/reconstruídos; **fragmentar** índices não é uma medida de melhoria.

### 8.3 Otimizador, plano de execução e estatísticas

O **otimizador de consultas** (geralmente *baseado em custo*) gera planos alternativos equivalentes e escolhe o de menor custo estimado. Funcionalidades típicas: escolher o plano mais eficiente, escolher entre **varredura sequencial (*full scan*)** e **uso de índice**, decidir a **ordem e o algoritmo das junções** (*nested loop*, *hash join*, *merge join*), usar **estatísticas** (número de linhas, distribuição de valores, seletividade) para estimar custos. O otimizador **não cria tabelas nem altera o esquema** com base nas consultas: isso é tarefa de projeto/administração. O plano é inspecionado com `EXPLAIN` (PostgreSQL/MySQL) ou `EXPLAIN PLAN`/*autotrace* (Oracle) ou *Execution Plan* (SQL Server). **Estatísticas desatualizadas** levam a planos ruins (atualizar com `ANALYZE`/`UPDATE STATISTICS`/`DBMS_STATS`).

### 8.4 Escrita de consultas

- Selecionar **apenas as colunas necessárias** (evitar `SELECT *`).
- Escrever predicados **sargáveis** (que permitem uso de índice): evitar funções sobre a coluna filtrada (`WHERE TRUNC(data) = ...`, `WHERE UPPER(nome) = ...` sem índice funcional), evitar `LIKE '%texto'` (prefixo coringa).
- Filtrar cedo; evitar junções desnecessárias; preferir `NOT EXISTS` a `NOT IN` quando a subconsulta puder retornar nulos (o `NOT IN` pode retornar nenhum resultado).
- Evitar `SELECT DISTINCT` e `ORDER BY` desnecessários: ambos podem exigir ordenação ou eliminação de duplicatas custosa. Substituir **todo** `SELECT` por `SELECT DISTINCT`, ou usar **sempre** `ORDER BY`, **não** é melhoria: pode piorar o desempenho e alterar o resultado.
- Paginação eficiente; evitar consultas repetitivas em laço (problema *N+1*); usar operações em lote.

### 8.5 Outras medidas

| Medida | Observação |
|---|---|
| **Desnormalização controlada** | Reduz junções em consultas frequentes de leitura (arquivo `04`); custo: redundância |
| **Particionamento** | Divide tabelas grandes por intervalo/lista/hash; permite poda de partições |
| **Visões materializadas / tabelas de resumo** | Pré-calculam agregações |
| **Cache e memória** (*buffer pool*) | Ajuste de memória; uso de banco em memória (arquivo `07`) |
| **Controle de concorrência** | Transações curtas, ordem consistente de acesso, nível de isolamento adequado reduzem bloqueios (arquivo `06`) |
| **Manutenção** | Atualizar estatísticas; reorganizar/reconstruir índices; limpeza (`VACUUM` no PostgreSQL) |
| **Armazenamento e hardware** | SSD, rede, CPU, memória |
| **Arquitetura** | Réplicas de leitura, *sharding*, separação OLTP/OLAP |

**Executar todas as transações de modo serial** é a forma mais segura de evitar problemas de concorrência, mas **não melhora o desempenho**: elimina o paralelismo. O objetivo do controle de concorrência é preservar a correção **permitindo** execução simultânea (arquivo `06`).

---

## 9. Comparações conceituais

| Conceito A | Conceito B | Diferença principal |
|---|---|---|
| DDL | DML | DDL define/altera estruturas; DML manipula os dados |
| `DELETE` | `TRUNCATE` / `DROP` | Linhas filtráveis e reversível em transação × todas as linhas × remoção da estrutura |
| `WHERE` | `HAVING` | Filtra linhas × filtra grupos |
| `UNION` | `UNION ALL` | Remove duplicatas × mantém |
| `INNER JOIN` | `LEFT JOIN` | Só correspondências × preserva a esquerda |
| `IN` | `EXISTS` | Compara com lista de valores × testa existência de linha; comportamento distinto com `NULL` |
| Independência lógica | Independência física | Altera conceitual sem afetar aplicações × altera interno sem afetar o conceitual |
| SGBD | Banco de dados | Software × dados |
| Índice | Visão materializada | Estrutura de acesso × resultado armazenado de consulta |

## 10. Aplicações e cenários

**Cenário (didático): relatório lento.** Um relatório de ordens de serviço por área leva minutos. *Diagnóstico:* `EXPLAIN` mostra varredura completa em `ordem` (milhões de linhas) por um filtro sobre `data_abertura`, e uma função aplicada à coluna impede o uso do índice. *Ações:* reescrever o predicado como faixa (`data_abertura >= :ini AND data_abertura < :fim`), criar índice em `(id_area, data_abertura)`, atualizar estatísticas, medir. *Limitação:* o novo índice torna as inserções ligeiramente mais lentas.

**Cenário (didático): alteração de esquema sem quebrar relatórios.** Uma coluna é movida para uma nova tabela; uma *view* com o nome e as colunas antigas mantém os relatórios funcionando (independência lógica).

## 11. Atenção para a prova

*Inferência técnica e recomendação pedagógica; sem atribuir frequência à banca.*

- Em **DDL × DML**, o critério é "estrutura × dados". Cuidado com a classificação do `SELECT` e do `TRUNCATE` (diverge entre fontes).
- Ler comandos SQL **com cuidado**: `BETWEEN` inclusivo, `NOT IN` com `NULL`, `UPDATE`/`DELETE` sem `WHERE`, junção externa com filtro no `WHERE`.
- Prever se um `INSERT`/`DELETE` **executa sem erro** exige confrontar o comando com colunas `NOT NULL`, PK, FK e **os dados atuais**.
- Medidas de desempenho: desconfie de afirmações absolutas ("sempre use ORDER BY", "substitua todos os SELECT por SELECT DISTINCT", "execute tudo de forma serial", "fragmente os índices").
- Funcionalidades do **otimizador**: plano, método de acesso, estatísticas, ordem de junção; **não** criar tabelas.
- Independência de dados: reconhecer o nível alterado (interno × conceitual).
- *Evidência histórica (amostra de duas provas):* a Prova 15 de 2018 (Q38, Q39) e a Prova 6 de 2023 (Q47, Q49, Q51, Q45) trouxeram SQL/DDL/DML, otimizador e desempenho. Os itens 1.15 e 1.13 (como descrição de arquitetura) pouco aparecem; não há base para inferir frequência.

## 12. Síntese

- **SGBD:** definição de dados, armazenamento, processamento/otimização de consultas, concorrência, recuperação, segurança, integridade; usa catálogo.
- **Três esquemas:** externo, conceitual, interno → independência **lógica** (conceitual sem afetar externos) e **física** (interno sem afetar conceitual).
- **SQL:** DDL (CREATE/ALTER/DROP), DML (INSERT/UPDATE/DELETE/MERGE; SELECT conforme o autor), DCL, TCL.
- **Consulta:** `FROM → WHERE → GROUP BY → HAVING → SELECT → ORDER BY`; junções; agregação; subconsultas; conjuntos.
- **Desempenho:** medir; índices (custo na escrita); plano e estatísticas; predicados sargáveis; particionamento; materialização; transações curtas; manutenção.

## 13. Pontos para a futura produção de questões (registro)

Conceitos: sublinguagens SQL; junções; agregação; independência de dados; otimizador; índices. Distinções: DDL×DML; WHERE×HAVING; DELETE×TRUNCATE×DROP; lógica×física. Interpretação: escolher a consulta correta para um enunciado; prever se um comando executa sem erro com base em DDL e dados.

## 14. Referências

Bibliografia e documentação de apoio (itens marcados **verificado** foram conferidos em catálogos online em 2026-10-31; os demais, **não verificados** — edição/ano/páginas pendentes):

- ISO/IEC 9075 — Linguagem SQL (edição não especificada nesta etapa).
- ELMASRI, R.; NAVATHE, S. B. *Sistemas de Banco de Dados*. São Paulo: Pearson (edição em português localizada: 6ª ed., 2011; o original em inglês, *Fundamentals of Database Systems*, 7ª ed., consta nos catálogos com ano 2015, 2016 ou 2017) — **verificado** em catálogos online.
- SILBERSCHATZ, A.; KORTH, H. F.; SUDARSHAN, S. *Database System Concepts*. 7th ed. McGraw-Hill, 2019 — **verificado**.
- Documentação oficial dos SGBDs (PostgreSQL, Oracle Database, Microsoft SQL Server, MySQL) para sintaxe e planos de execução — versões não especificadas nesta etapa.
- Edital Transpetro nº 04/2026.4, Anexo IV, itens 1.10–1.13, 1.15 e 1.17.
