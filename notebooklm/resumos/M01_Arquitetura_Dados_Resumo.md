# Resumo — Módulo M01: Arquitetura de Dados

## Identificação
- Concurso: Processo Seletivo Público TRANSPETRO 2026.4 (Edital nº 04/2026)
- Ênfase: 5 — Análise de Sistemas: Processos de Negócios
- Banca: Fundação Cesgranrio
- Origem: seções "Síntese" dos arquivos de `conteudo/01-arquitetura-dados/` (extraídas automaticamente, sem reescrita)

Este resumo complementa o documento completo do módulo; não o substitui.

## Fundamentos de Dados e Bancos de Dados

- Dado → informação → conhecimento: crescente interpretação e contexto.
- Banco de dados resolve redundância, dependência programa–dados, concorrência, falhas e segurança.
- Sistema de BD = dados + SGBD + metadados + aplicações.
- Modelagem em três níveis: conceitual → lógico → físico.
- O item 1 do edital cobre modelagem, modelo relacional, normalização, SQL, ACID, desempenho, NoSQL, integração, dimensional, qualidade e Big Data.

## Modelagem de Dados: Conceitual, Lógica e Física; Avaliação e Engenharia Reversa

- **Níveis:** conceitual (negócio) → lógico (paradigma) → físico (SGBD).
- **DER:** entidade, atributo (simples/composto/multivalorado/derivado/identificador), relacionamento (grau, cardinalidade mín–máx), entidade fraca, especialização (total/parcial × disjunta/sobreposta).
- **Mapeamento:** 1:N → FK no lado N; N:N → tabela associativa; multivalorado → nova tabela; especialização → 3 estratégias.
- **Criação/alteração:** engenharia direta, versionamento, análise de impacto, migração compatível, consistência entre níveis.
- **Avaliação:** validade, completude, cardinalidades, normalização, integridade, legibilidade, flexibilidade, desempenho.
- **Engenharia reversa:** extrair catálogo, deduzir relacionamentos, elevar abstração, comparar/sincronizar; limite: semântica de negócio.

## O Modelo Relacional e a Integridade Referencial

- Relação = conjunto de tuplas; esquema (estrutura) × instância (conteúdo).
- Chaves: super → candidata (mínima) → primária (escolhida, não nula) / alternativa; estrangeira referencia outra relação.
- Restrições: domínio, chave, entidade, referencial, semânticas.
- Integridade referencial: FK = nulo ou chave existente; ações `RESTRICT/NO ACTION`, `CASCADE`, `SET NULL`, `SET DEFAULT`.
- Álgebra: σ π ρ (unários); ∪ ∩ − × ⋈ ÷ (binários); fundamentais: σ, π, ∪, −, ×, ρ.
- NULL: lógica de três valores; `IS NULL`; agregados ignoram nulos.

## Normalização das Estruturas de Dados

- Objetivo: eliminar redundância e anomalias (inserção, atualização, exclusão).
- DF: X → Y; parcial (viola 2FN), transitiva (viola 3FN).
- 1FN atomicidade; 2FN sem dependência parcial; 3FN sem transitiva (ou determinante superchave / dependente primo); BCNF: todo determinante é superchave; 4FN: multivaloradas; 5FN: junção.
- Decomposição: junção sem perda (obrigatória) e preservação de dependências (desejável; BCNF pode violar, 3FN garante).
- Desnormalização: redundância deliberada por desempenho, com custo de consistência.

## SQL (DDL e DML), SGBD, Independência de Dados e Desempenho

- **SGBD:** definição de dados, armazenamento, processamento/otimização de consultas, concorrência, recuperação, segurança, integridade; usa catálogo.
- **Três esquemas:** externo, conceitual, interno → independência **lógica** (conceitual sem afetar externos) e **física** (interno sem afetar conceitual).
- **SQL:** DDL (CREATE/ALTER/DROP), DML (INSERT/UPDATE/DELETE/MERGE; SELECT conforme o autor), DCL, TCL.
- **Consulta:** `FROM → WHERE → GROUP BY → HAVING → SELECT → ORDER BY`; junções; agregação; subconsultas; conjuntos.
- **Desempenho:** medir; índices (custo na escrita); plano e estatísticas; predicados sargáveis; particionamento; materialização; transações curtas; manutenção.

## Transações e Propriedades ACID

- **Transação:** unidade lógica de trabalho; `COMMIT`, `ROLLBACK`, `SAVEPOINT`.
- **ACID:** A (tudo ou nada; log/rollback), C (estado válido; restrições + aplicação), I (sem interferência; concorrência), D (permanente após commit; log/WAL).
- **Anomalias:** atualização perdida, leitura suja, não repetível, fantasma, *write skew*.
- **Isolamento SQL:** READ UNCOMMITTED < READ COMMITTED < REPEATABLE READ < SERIALIZABLE.
- **Concorrência:** locks S/X, 2PL, deadlock (prevenção/detecção), MVCC, controle otimista.
- **Recuperação:** log/WAL, undo/redo, checkpoint, backup.

## Bancos NoSQL, Bancos em Memória e Diferenciação entre Tipos de Bancos

- **NoSQL:** esquema flexível, escala horizontal, modelos específicos; CAP (C, A, P) e BASE.
- **Tipos:** chave-valor, documento (JSON/BSON), famílias de colunas, grafo (nós/arestas).
- **Memória:** RAM como armazenamento primário; durabilidade por snapshot, log e replicação; custo e capacidade como limites.
- **Diferenciação:** relacional (tabelas/SQL/ACID/OLTP), multidimensional (cubos/OLAP), documentos (JSON, flexível), grafos (arestas/relacionamentos).

## Integração de Dados: ETL, Transferência de Arquivos e Integração via Base de Dados

- **Integração:** ETL, transferência de arquivos, integração via base de dados (itens do edital).
- **ETL:** extrair (completa/incremental/CDC) → transformar (limpar, padronizar, integrar, derivar, chaves, histórico) → carregar (completa/incremental/upsert/bulk); *staging* intermediária; idempotência; rejeições.
- **ELT:** transforma no destino.
- **Arquivos:** simples, assíncrono, contrato de layout; latência; validar integridade.
- **Base de dados:** imediato, mas acoplado ao esquema; usar visões/esquemas de integração.

## Modelagem Dimensional, Data Lakes e Soluções para Big Data

- **Dimensional:** fato (medidas) + dimensões (contexto); **granularidade** primeiro; estrela (desnormalizada) × floco de neve (normalizada); constelação com dimensões conformes.
- **Medidas:** aditiva, semiaditiva, não aditiva. **SCD:** 0, 1 (sobrescreve), 2 (nova linha), 3 (coluna), híbridos.
- **Big Data:** volume, velocidade, variedade (+ veracidade, valor); tecnologias distribuídas, NoSQL, *streaming*.
- **Data lake:** dados brutos de qualquer tipo; esquema na leitura; zonas; risco de *data swamp*; exige governança.
- **Lake × DW:** bruto × tratado; leitura × escrita; ELT × ETL.

## Metadados, Qualidade de Dados e Gestão de Dados Mestres e de Referência

- **Metadados:** dados sobre dados (técnicos, de negócio, operacionais, de qualidade, linhagem); no catálogo do SGBD, dicionário/catálogo de dados.
- **Qualidade:** adequação ao uso; dimensões (acurácia, completude, consistência, unicidade, validade, atualidade, integridade, razoabilidade); ciclo: perfilar → medir → limpar → prevenir → monitorar.
- **Mestres:** entidades centrais compartilhadas; MDM: *golden record*, *match & merge*, estilos (registro, consolidação, coexistência, centralizado).
- **Referência:** listas de códigos/valores; RDM: versionamento, vigência, mapeamento.
- **Governança:** políticas, papéis (owner, steward, custodian) integrando as disciplinas.
