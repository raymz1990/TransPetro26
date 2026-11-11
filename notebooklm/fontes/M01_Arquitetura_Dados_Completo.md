# Módulo M01 — Arquitetura de Dados

## Identificação
- Concurso: Processo Seletivo Público TRANSPETRO 2026.4 (Edital nº 04/2026)
- Ênfase: 5 — Análise de Sistemas: Processos de Negócios
- Banca: Fundação Cesgranrio
- Módulo: M01 — Arquitetura de Dados
- Gerado em: 2026-11-11, por `tools/build_notebooklm.py`, a partir de `conteudo/01-arquitetura-dados/` (fonte de verdade; não editar este arquivo)
- Situação do conteúdo nos arquivos de origem: VALIDADO (com ressalvas nos relatórios de produção em `docs/qualidade/`)

## Como usar este documento
É material de estudo do projeto, **não** é texto oficial do edital nem da banca. O escopo oficial é o Anexo IV do edital. Trechos marcados como complemento, aprofundamento ou estratégia **não** são exigência literal do edital. Referências indicadas como "não verificadas" ou "de memória" devem ser conferidas na fonte primária. Não afirme incidência de tema em prova sem evidência documental.

## Conteúdo

---

## Fundamentos de Dados e Bancos de Dados

**Módulo:** M01 — Arquitetura de Dados
**Classificação de escopo:** **B — fundamentação complementar** (C5-001). Este arquivo **não** corresponde a um subitem literal do Anexo IV; ele existe para que o estudante compreenda os subitens 1.1 a 1.23, que são os itens oficiais. Não o trate como exigência expressa do edital.
**Item oficial de referência:** item 1 — "Arquitetura de Dados" (título); subitens 1.1–1.5 e 1.13 como apoio.
**Nível:** fundamental, com pontes para o intermediário.
**Status:** `VALIDADO` (aprovado pelo usuário em 2026-10-31; referências não verificadas listadas em `docs/qualidade/relatorio-producao-modulo-01.md`) (gerado em 2026-10-31; revisão técnica e pedagógica ainda por concluir).

**Objetivos de aprendizagem.** Ao final, o estudante deve conseguir: (1) distinguir dado, informação e conhecimento; (2) explicar por que se usa um banco de dados em vez de arquivos soltos; (3) descrever os componentes de um sistema de banco de dados; (4) situar os conceitos do item 1 do edital em um mapa único.

---

### 1. Introdução e contextualização

Toda organização gera registros: pedidos, cadastros de equipamentos, ordens de manutenção, leituras de sensores, contratos. **Arquitetura de dados** é o conjunto de decisões sobre *como esses dados são representados, armazenados, relacionados, protegidos, integrados e disponibilizados* para os sistemas e para as pessoas. O item 1 do Anexo IV reúne, sob esse título, 23 subitens que vão da modelagem (como representar a realidade) até o armazenamento em larga escala (data lakes, Big Data), passando por linguagem (SQL), garantias (ACID), desempenho e qualidade.

Este arquivo apresenta o vocabulário comum. Os demais arquivos do módulo aprofundam cada subitem oficial.

### 2. Fundamentação teórica

#### 2.1 Dado, informação e conhecimento (visão introdutória)

- **Dado:** representação de um fato, medida ou observação, sem contexto interpretativo. Exemplo (didático): o número `42,7` armazenado em uma coluna.
- **Informação:** dado interpretado em um contexto que lhe dá significado. Exemplo: "a pressão no ponto P-12 às 10h00 foi de 42,7 bar".
- **Conhecimento:** informação incorporada a experiência, regras e análise, que sustenta decisões. Exemplo: "pressões acima de um limite operacional exigem inspeção".

O item 7.1 do edital ("Dado, informação, conhecimento e inteligência") pertence ao Módulo 7 e será desenvolvido lá; aqui basta a distinção introdutória.

#### 2.2 Por que bancos de dados? O problema dos arquivos isolados

Antes dos SGBDs, cada aplicação mantinha seus próprios arquivos. Isso gerava problemas clássicos:

| Problema | Descrição | Como o banco de dados responde |
|---|---|---|
| Redundância e inconsistência | O mesmo dado (ex.: endereço de fornecedor) repetido em vários arquivos, com valores divergentes | Armazenamento centralizado e integridade |
| Dependência programa–dados | Mudar o formato de um arquivo exige reescrever os programas | Independência de dados (item 1.15) |
| Dificuldade de acesso | Cada nova consulta exige novo programa | Linguagem de consulta declarativa (SQL, item 1.10) |
| Acesso concorrente | Dois usuários alterando o mesmo registro corrompem os dados | Controle de concorrência e transações (itens 1.14 e 1.16) |
| Falhas | Queda no meio de uma atualização deixa estado inconsistente | Recuperação e atomicidade |
| Segurança | Difícil restringir acesso por usuário/parte do dado | Controle de acesso do SGBD |

#### 2.3 Componentes de um sistema de banco de dados

Um **sistema de banco de dados** reúne:

1. **Banco de dados (BD):** coleção organizada de dados relacionados.
2. **Sistema Gerenciador de Banco de Dados (SGBD):** software que define, cria, mantém e controla o acesso ao BD (item 1.13).
3. **Aplicações/usuários:** programas e pessoas que consultam e atualizam os dados.
4. **Metadados:** dados sobre os dados (item 1.6), mantidos no catálogo do SGBD.

```text
 Usuários / Aplicações
        │  (SQL, APIs)
        ▼
 ┌───────────────────────────┐
 │          SGBD             │  ← processa consultas, controla transações,
 │  (catálogo de metadados)  │    concorrência, segurança, recuperação
 └───────────────────────────┘
        │
        ▼
   Armazenamento (arquivos, índices, logs)
```

#### 2.4 Níveis de modelagem: visão geral

A realidade é representada em etapas de abstração crescente de detalhes técnicos (desenvolvidas no arquivo `02-modelagem-dados.md`, itens 1.1 e 1.2):

| Nível | Pergunta que responde | Independe de SGBD? |
|---|---|---|
| Conceitual | *O que* precisa ser representado? | Sim |
| Lógico | *Como* isso se organiza em um modelo de dados (ex.: relacional)? | Em grande parte |
| Físico | *Como* será implementado em um SGBD específico (tipos, índices, partições)? | Não |

#### 2.5 Modelos de dados e paradigmas

Um **modelo de dados** é um conjunto de conceitos para descrever estrutura, restrições e operações sobre os dados. O **modelo relacional** (item 1.3) domina os sistemas transacionais; modelos **NoSQL** (documento, chave-valor, colunar, grafo — item 1.18) atendem a outros requisitos; o modelo **multidimensional** (item 1.7) apoia análise. O item 1.23 pede justamente a diferenciação entre bancos relacionais, multidimensionais, de documentos e de grafos.

#### 2.6 OLTP e OLAP em uma linha

- **OLTP** (*Online Transaction Processing*): muitas operações curtas de leitura/escrita (registrar pedido). Prioriza consistência e rapidez por transação.
- **OLAP** (*Online Analytical Processing*): consultas analíticas sobre grandes volumes históricos. Prioriza leitura agregada.

Essa distinção explica por que os dados são modelados de formas diferentes para cada uso (normalização × modelagem dimensional).

### 3. Mapa do item 1 do edital

| Assunto | Subitens oficiais | Arquivo de estudo |
|---|---|---|
| Modelagem conceitual, lógica e física; avaliação; engenharia reversa | 1.1, 1.2, 1.8, 1.9 | `02-modelagem-dados.md` |
| Modelo relacional e integridade referencial | 1.3, 1.5 | `03-modelo-relacional.md` |
| Normalização | 1.4 | `04-normalizacao.md` |
| SQL, DDL, DML, SGBD, independência de dados, performance | 1.10–1.13, 1.15, 1.17 | `05-sql-e-sgbd.md` |
| ACID e transações | 1.14, 1.16 | `06-transacoes-e-acid.md` |
| NoSQL, banco em memória, diferenciação entre tipos de bancos | 1.18, 1.20, 1.23 | `07-bancos-nao-relacionais.md` |
| Integração (ETL, arquivos, base de dados) | 1.19 | `08-integracao-e-etl.md` |
| Modelagem dimensional; Data Lakes e Big Data | 1.7, 1.22 | `09-data-warehouse-e-big-data.md` |
| Metadados; qualidade de dados; dados mestres e de referência | 1.6, 1.21 | `10-qualidade-e-governanca-dados.md` |

### 4. Exemplo didático (hipotético)

Uma empresa de logística opera um sistema de manutenção. Um técnico registra uma **ordem de serviço** (dado), o sistema relaciona a ordem ao equipamento e ao responsável (informação) e um gestor decide antecipar revisões ao perceber que determinado tipo de equipamento acumula falhas (conhecimento). Para isso funcionar, é preciso (a) modelar equipamento, ordem e responsável; (b) garantir que uma ordem nunca aponte para equipamento inexistente (integridade); (c) permitir que várias pessoas registrem ordens simultaneamente sem corromper os dados (transações). *O cenário é ilustrativo e não descreve nenhum sistema real da Transpetro.*

### 5. Comparações conceituais

| Conceito A | Conceito B | Diferença principal |
|---|---|---|
| Banco de dados | SGBD | O BD é o conjunto de dados; o SGBD é o software que o gerencia |
| Dado | Metadado | O metadado descreve o dado (nome, tipo, origem, restrições) |
| Modelo conceitual | Modelo físico | O conceitual descreve o negócio sem tecnologia; o físico descreve a implementação em um SGBD |
| OLTP | OLAP | Transações curtas e atuais × consultas analíticas sobre histórico |

### 6. Atenção para a prova

*(Conceitual; não decorre de frequência de cobrança.)*

- Distinguir "banco de dados" de "SGBD": alternativas que atribuem ao banco o papel de software gerenciador são incorretas.
- Metadado é dado *sobre* dado, não "dado secundário" ou "dado de menor valor".
- Afirmações absolutas ("apenas", "somente", "exclusivamente") sobre tipos de banco costumam ser incorretas por ignorar exceções; avalie sempre o escopo do enunciado.
- *Evidência histórica:* nas duas provas analisadas (Transpetro 2018 e 2023; ver `docs/estrategia/comparativo-2018-2023.md`) há questões sobre metadados e sobre SGBD. Duas provas não permitem inferir frequência nem tendência da banca.

### 7. Síntese

- Dado → informação → conhecimento: crescente interpretação e contexto.
- Banco de dados resolve redundância, dependência programa–dados, concorrência, falhas e segurança.
- Sistema de BD = dados + SGBD + metadados + aplicações.
- Modelagem em três níveis: conceitual → lógico → físico.
- O item 1 do edital cobre modelagem, modelo relacional, normalização, SQL, ACID, desempenho, NoSQL, integração, dimensional, qualidade e Big Data.

### 8. Referências

Bibliografia de apoio (itens marcados **verificado** foram conferidos em catálogos online em 2026-10-31; os demais, **não verificados** — edição/ano/páginas pendentes):

- ELMASRI, R.; NAVATHE, S. B. *Sistemas de Banco de Dados*. São Paulo: Pearson (edição em português localizada: 6ª ed., 2011; o original em inglês, *Fundamentals of Database Systems*, 7ª ed., consta nos catálogos com ano 2015, 2016 ou 2017) — **verificado** em catálogos online.
- SILBERSCHATZ, A.; KORTH, H. F.; SUDARSHAN, S. *Database System Concepts*. 7th ed. McGraw-Hill, 2019 — **verificado** (há edição em português com outro título/editora, não verificada).
- Edital Transpetro nº 04/2026.4, Anexo IV (`docs/edital/anexo-IV-extraido.md`).


---

## Modelagem de Dados: Conceitual, Lógica e Física; Avaliação e Engenharia Reversa

**Módulo:** M01 — Arquitetura de Dados
**Textos oficiais (Anexo IV):** 1.1 "Modelagem de dados (conceitual, lógica e física)"; 1.2 "Criação e alteração dos modelos lógico e físico de dados"; 1.8 "Avaliação de modelos de dados"; 1.9 "Técnicas de engenharia reversa para criação e atualização de modelos de dados".
**Escopo:** A (itens expressos). Seções marcadas como *complemento* são fundamentação (B) e não exigência literal.
**Status:** `VALIDADO` (aprovado pelo usuário em 2026-10-31; referências não verificadas listadas em `docs/qualidade/relatorio-producao-modulo-01.md`).

**Objetivos de aprendizagem.** (1) Diferenciar os modelos conceitual, lógico e físico; (2) construir e interpretar diagramas entidade-relacionamento (DER) com cardinalidades mínima e máxima; (3) mapear um DER para o modelo relacional; (4) entender como modelos são criados, alterados e versionados; (5) avaliar a qualidade de um modelo; (6) explicar a engenharia reversa e suas limitações.

---

### 1. Introdução

Modelar dados é **representar, de forma controlada, a parte da realidade que interessa a um sistema**. Um bom modelo é a base do banco: erros de modelagem produzem inconsistência, retrabalho e consultas lentas, e custam muito mais para corrigir depois que o sistema está em produção. A modelagem é feita em três níveis de abstração (item 1.1), cria-se e altera-se o modelo ao longo do ciclo de vida (item 1.2), a qualidade do modelo é julgada por critérios (item 1.8) e modelos podem ser reconstruídos a partir de bancos existentes (item 1.9, engenharia reversa).

Relações com outros itens: o modelo lógico mais comum é o relacional (1.3, arquivo `03`); a qualidade do projeto lógico depende da normalização (1.4, arquivo `04`); o modelo físico é implementado com DDL (1.11, arquivo `05`); o modelo dimensional (1.7, arquivo `09`) é uma modelagem específica para análise.

### 2. Fundamentos: os três níveis de modelagem (item 1.1)

| Aspecto | Modelo conceitual | Modelo lógico | Modelo físico |
|---|---|---|---|
| Foco | Significado do negócio | Estrutura em um modelo de dados (ex.: relacional) | Implementação em um SGBD específico |
| Elementos típicos | Entidades, atributos, relacionamentos, cardinalidades, especializações | Tabelas, colunas, chaves primárias/estrangeiras, restrições | Tipos de dados do SGBD, índices, partições, tablespaces, nomes finais |
| Depende de SGBD? | Não | Em geral, não (depende do *modelo*, p.ex. relacional) | **Sim** |
| Público | Negócio e analistas | Analistas e projetistas de BD | DBAs e desenvolvedores |
| Notação usual | DER (Chen, pé-de-galinha, UML) | DER lógico/diagrama relacional | DDL / diagrama físico |
| Decisões típicas | O que é uma entidade? Qual a cardinalidade? | Qual a chave primária? Normalizar? | Qual tipo? Qual índice? Particionar? |

Pontos sobre a divisão:

- A *independência do modelo conceitual* em relação à tecnologia é o que permite reaproveitá-lo se o SGBD mudar.
- O modelo lógico **traduz** o conceitual para o paradigma escolhido (relacional, documento, grafo…). No relacional, aplica-se o mapeamento da seção 4.
- No físico entram preocupações de desempenho e operação: índices, particionamento, compressão, armazenamento. Pode haver **desnormalização controlada** (arquivo `04`), sempre como decisão consciente.

#### 2.1 O modelo entidade-relacionamento (MER) e o DER

O MER, proposto por Peter Chen em 1976, descreve a realidade por **entidades**, **atributos** e **relacionamentos**. O DER é sua representação gráfica.

- **Entidade:** classe de objetos ou conceitos sobre os quais se guardam dados (Cliente, Equipamento, Ordem de Serviço). Uma **ocorrência** (ou instância) é um elemento da classe.
- **Atributo:** propriedade de uma entidade ou relacionamento. Tipos: *simples* × *composto* (endereço = rua + número…); *monovalorado* × *multivalorado* (telefones); *derivado* (idade, calculável a partir da data de nascimento); **identificador** (chave): atributo ou conjunto de atributos que distingue unicamente as ocorrências.
- **Relacionamento:** associação entre ocorrências de entidades. **Grau**: binário (2 entidades), ternário (3), unário/autorrelacionamento (a mesma entidade, p.ex. Funcionário gerencia Funcionário).
- **Entidade fraca:** entidade que não tem identificador próprio suficiente e depende de outra para se identificar (p.ex. Dependente em relação a Funcionário); a identificação é composta pelo identificador da entidade forte mais um discriminador.

#### 2.2 Cardinalidades: máxima, mínima e participação

A **cardinalidade máxima** indica quantas ocorrências de uma entidade podem se associar a uma ocorrência da outra: **1:1**, **1:N**, **N:N** (ou M:N). A **cardinalidade mínima** (0 ou 1) indica se a participação é **opcional** (0) ou **obrigatória** (1). Juntas formam o par **(mín, máx)**: (0,1), (1,1), (0,N), (1,N).

> **Atenção à leitura da notação.** Em notações como a de Elmasri/Navathe e a de Heuser, o par (mín,máx) escrito **junto à entidade E** diz quantas vezes **cada ocorrência de E participa** do relacionamento. Existem autores/ferramentas que posicionam a cardinalidade no outro extremo da linha ("lê-se do outro lado"). **Em questões, siga sempre a convenção fornecida pelo enunciado ou a mais coerente com a figura.** Isso é uma recomendação pedagógica, não uma regra da banca.

Exemplo didático: *Departamento (1,N) — Lotação — (0,1) Funcionário* sob a convenção "junto à entidade": todo departamento tem pelo menos um funcionário e pode ter vários; cada funcionário está lotado em no máximo um departamento (a lotação é opcional).

**Participação total × parcial:** total = obrigatória (mínimo 1); parcial = opcional (mínimo 0).

#### 2.3 Generalização e especialização

Uma **especialização** separa subclasses de uma entidade, que herdam atributos e relacionamentos da superclasse (Pessoa → Pessoa Física e Pessoa Jurídica). Duas restrições independentes descrevem a especialização:

| Restrição | Opções | Significado |
|---|---|---|
| Completude | **Total** / **Parcial** | Total: toda ocorrência da superclasse pertence a alguma subclasse. Parcial: pode existir ocorrência só da superclasse |
| Disjunção | **Disjunta** (exclusiva) / **Sobreposta** (compartilhada) | Disjunta: uma ocorrência pertence a no máximo uma subclasse. Sobreposta: pode pertencer a várias |

Combinações: total e exclusiva, total e compartilhada, parcial e exclusiva, parcial e compartilhada. Em conjuntos: subclasses disjuntas = conjuntos sem interseção; sobreposta = com interseção; total = a união das subclasses cobre a superclasse.

*Evidência observada (amostra de duas provas, sem inferência de frequência):* a prova Transpetro 2023 (Prova 6, Q21, Q22, Q27) e a de 2018 (Prova 15, Q40 e Q41) trouxeram questões que exigem interpretar diagramas E-R com cardinalidades, especializações e mapeamento para tabelas.

### 3. Desenvolvimento: criação e alteração dos modelos lógico e físico (item 1.2)

#### 3.1 Criação do modelo lógico

Passos típicos a partir do conceitual: (1) mapear entidades e atributos; (2) escolher identificadores (chaves primárias) — preferir atributos estáveis e únicos; considerar **chave substituta** (*surrogate key*) quando o identificador natural é composto, mutável ou extenso; (3) mapear relacionamentos por cardinalidade (seção 4); (4) tratar atributos multivalorados e compostos; (5) tratar especializações; (6) verificar normalização (1FN a 3FN/BCNF); (7) definir restrições de integridade (NOT NULL, UNIQUE, CHECK, chaves estrangeiras).

#### 3.2 Criação do modelo físico

Decisões: tipos de dados do SGBD (tamanho, precisão, `DATE` × `TIMESTAMP`), **índices** (chaves primárias e estrangeiras; colunas de filtro e junção), **particionamento** (por intervalo, lista, hash), esquema de nomes, parâmetros de armazenamento, política de **desnormalização** e geração do **script DDL** (CREATE TABLE etc., arquivo `05`). Esse processo de gerar o físico a partir do lógico/conceitual é a **engenharia direta** (*forward engineering*).

#### 3.3 Alteração de modelos

Modelos mudam: novos requisitos, regras regulatórias, correção de falhas. Boas práticas:

1. **Avaliar o impacto** nas aplicações, relatórios, integrações (ETL) e consultas existentes antes de alterar.
2. **Versionar** o modelo e os scripts de migração; manter histórico das mudanças e justificativas.
3. Usar scripts de **migração** (DDL e correção de dados): `ALTER TABLE ... ADD COLUMN`, criação de novas tabelas, cópia/transformação de dados, remoção posterior de estruturas obsoletas.
4. Preferir mudanças **compatíveis com versões anteriores** (adicionar coluna opcional) a mudanças destrutivas (remover/renomear coluna), que exigem janela e coordenação.
5. Manter a **consistência entre os três níveis**: uma alteração no físico que muda o significado deve ser refletida no lógico e no conceitual (e vice-versa) — descompasso gera documentação enganosa.
6. Testar em ambiente de homologação e prever **reversão** (*rollback*) da migração.

### 4. Mapeamento do DER para o modelo relacional (*complemento B, necessário para 1.2*)

| Elemento do DER | Regra de mapeamento relacional |
|---|---|
| Entidade | Uma tabela; atributos viram colunas; identificador vira chave primária |
| Atributo composto | Colunas separadas (um por componente) ou coluna única, conforme necessidade de consulta |
| Atributo multivalorado | Nova tabela com chave estrangeira para a entidade e o valor (chave composta) |
| Relacionamento 1:N | Chave estrangeira **no lado N**, referenciando o lado 1 |
| Relacionamento 1:1 | Chave estrangeira em uma das tabelas (preferir o lado de participação **total**) com restrição **UNIQUE**; ou tabela única, ou tabela de relacionamento se ambos os lados forem opcionais |
| Relacionamento N:N | **Tabela associativa** com chaves estrangeiras das duas entidades (juntas formam a chave primária, salvo se houver atributos que exijam outra chave); atributos do relacionamento vão para essa tabela |
| Relacionamento ternário | Tabela associativa com as três chaves estrangeiras |
| Autorrelacionamento 1:N | Chave estrangeira na própria tabela (ex.: `id_gerente` referencia `id_funcionario`) |
| Entidade fraca | Tabela cuja chave primária inclui a chave da entidade forte (FK + discriminador) |
| Especialização | Três estratégias: (a) **uma tabela por hierarquia** (coluna "tipo", atributos específicos anuláveis); (b) **tabela por subclasse** (cada subclasse com chave igual à da superclasse, FK para ela); (c) **tabela por classe concreta** (sem tabela da superclasse; atributos comuns repetidos). Cada uma tem trade-offs de nulos, junções e integridade |

Observação sobre 1:1 opcional-opcional e (0,1)–(0,1): costuma-se criar uma **tabela de relacionamento** cuja chave primária é a de uma das entidades e cuja outra chave é `UNIQUE`, para evitar colunas quase sempre nulas e preservar as duas cardinalidades.

*Exemplo didático.* Cliente (1,1) — Faz — (0,N) Pedido. Pedido recebe `id_cliente NOT NULL` (FK). Pedido (0,N) — Contém — (1,N) Produto: cria-se `item_pedido(id_pedido, id_produto, quantidade, preco_unitario)`, com PK composta e duas FKs.

### 5. Avaliação de modelos de dados (item 1.8)

O edital pede **avaliação** de modelos. Não há, no edital, uma norma única indicada; os critérios abaixo são uma **síntese didática** de boas práticas da literatura de projeto de banco de dados, não um padrão normativo.

| Critério | Pergunta de avaliação |
|---|---|
| Aderência ao negócio (validade) | O modelo representa corretamente os requisitos e as regras de negócio? |
| Completude | Todas as entidades, atributos e relacionamentos necessários estão presentes? |
| Corretude de cardinalidades | As cardinalidades mínima/máxima refletem as regras reais? |
| Minimalismo/ausência de redundância | Há elementos duplicados ou derivados sem necessidade? |
| Normalização | As tabelas atendem às formas normais adequadas (ou há desnormalização justificada)? |
| Integridade | Chaves primárias e estrangeiras e restrições estão definidas? |
| Legibilidade e nomenclatura | Padrões de nomes, diagramas claros, documentação? |
| Flexibilidade/extensibilidade | O modelo comporta mudanças previsíveis sem grandes reestruturações? |
| Desempenho e escalabilidade | O físico suporta o volume e os padrões de acesso (índices, partições)? |
| Aderência a padrões e à governança | Segue padrões da organização, classificação de dados e requisitos de segurança/LGPD? |

Procedimento prático: validar com especialistas do negócio, testar o modelo com **consultas de exemplo** e dados de amostra, verificar anomalias de atualização, revisar por pares e comparar com a realidade operacional. A avaliação é **contínua**: reaplica-se quando o modelo é alterado.

### 6. Engenharia reversa de modelos de dados (item 1.9)

**Engenharia reversa** de banco de dados é o processo de **reconstruir o modelo (lógico e, quando possível, conceitual) a partir de um banco de dados existente**, quando a documentação está ausente, desatualizada ou inexistente. O resultado alimenta a criação ou a **atualização** do modelo (mantendo documentação e banco sincronizados).

#### 6.1 Técnicas

1. **Extração do esquema físico** pelo catálogo do SGBD (metadados — arquivo `10`): tabelas, colunas, tipos, chaves primárias, chaves estrangeiras, índices, *constraints*, visões, gatilhos.
2. **Dedução de relacionamentos**: onde não há FKs declaradas (comum em sistemas legados), inferem-se vínculos por convenção de nomes, tipos compatíveis, análise de dados (valores de uma coluna contidos em outra) e análise do código das aplicações e consultas.
3. **Descoberta de chaves e dependências** por perfilamento de dados (*data profiling*: unicidade, nulos, valores distintos).
4. **Elevação de nível de abstração**: do físico para o lógico (remover detalhes de implementação, reconhecer tabelas associativas como N:N, agrupar tabelas de uma hierarquia) e, por fim, para o conceitual.
5. **Comparação e sincronização** (*compare/merge*): contrastar o modelo existente com o banco e gerar scripts de diferença, ou reconstruir o modelo desatualizado.
6. **Engenharia de ida e volta** (*round-trip*): ciclo contínuo entre modelo e banco, usando engenharia direta e reversa, por ferramentas de modelagem.

#### 6.2 Limitações

- O catálogo **não guarda a semântica de negócio**: cardinalidade mínima, especializações, significado de colunas e regras não implementadas no banco são perdidos ou precisam de interpretação humana.
- FKs ausentes tornam a dedução de relacionamentos **incerta**.
- Dados sujos distorcem a análise de perfil.
- O modelo obtido reflete o *estado atual* (inclusive erros de projeto); é preciso **avaliá-lo** (seção 5) em vez de apenas aceitá-lo.

### 7. Comparações conceituais

| Conceito A | Conceito B | Diferença principal |
|---|---|---|
| Modelo conceitual | Modelo lógico | Conceitual: significado do negócio; lógico: estrutura em um paradigma (tabelas, chaves) |
| Modelo lógico | Modelo físico | Lógico: independente de SGBD específico; físico: tipos, índices e parâmetros do SGBD |
| Engenharia direta | Engenharia reversa | Direta: do modelo para o banco; reversa: do banco existente para o modelo |
| Cardinalidade máxima | Cardinalidade mínima | Máxima: "quantos"; mínima: "obrigatória ou opcional" |
| Especialização total | Especialização parcial | Total: toda ocorrência está em alguma subclasse |
| Disjunta | Sobreposta (compartilhada) | Disjunta: no máximo uma subclasse por ocorrência |
| Entidade forte | Entidade fraca | A fraca não se identifica sozinha |
| Chave natural | Chave substituta | Natural vem do negócio (CPF); substituta é gerada (sequência) |

### 8. Aplicações e cenários

**Cenário (didático): sistema legado sem documentação.** A empresa herdou um banco com 300 tabelas sem FKs declaradas. *Problema:* não se sabe o que depende do quê. *Abordagem:* extrair metadados, executar perfilamento de dados e análise de consultas para inferir relacionamentos, recompor o modelo lógico, validar com usuários e gerar a documentação. *Limitação:* relacionamentos inferidos precisam de validação; a semântica de negócio não vem do catálogo.

**Cenário (didático): mudança de regra.** Passa-se a exigir mais de um responsável por equipamento. O relacionamento (0,1) vira (0,N): a FK no lado "equipamento" deixa de servir e surge a tabela associativa. Avaliar impacto em consultas e relatórios; migrar dados; atualizar o modelo conceitual, lógico e físico.

### 9. Atenção para a prova

*Inferência técnica e recomendação pedagógica (sem atribuir frequência à banca):*

- Saber **ler cardinalidades (mín,máx)** e traduzi-las em chaves estrangeiras e restrições (NOT NULL, UNIQUE).
- Distinguir **total/parcial** de **disjunta/sobreposta** e traduzir em conjuntos.
- Relacionamento N:N **sempre** exige tabela associativa no modelo relacional.
- O modelo conceitual **independe** do SGBD; alternativas que associam índices e partições ao conceitual são incorretas.
- Engenharia reversa **não é** o mesmo que engenharia direta; e **não recupera automaticamente** toda a semântica de negócio.
- *Evidência histórica:* itens 1.1 e 1.2 aparecem em questões de 2018 e 2023 (ver seção 2.3). Os itens 1.8 e 1.9 **não** aparecem nas duas provas catalogadas. Isso não significa que não possam ser cobrados; o edital de 2026 os prevê.

### 10. Síntese

- **Níveis:** conceitual (negócio) → lógico (paradigma) → físico (SGBD).
- **DER:** entidade, atributo (simples/composto/multivalorado/derivado/identificador), relacionamento (grau, cardinalidade mín–máx), entidade fraca, especialização (total/parcial × disjunta/sobreposta).
- **Mapeamento:** 1:N → FK no lado N; N:N → tabela associativa; multivalorado → nova tabela; especialização → 3 estratégias.
- **Criação/alteração:** engenharia direta, versionamento, análise de impacto, migração compatível, consistência entre níveis.
- **Avaliação:** validade, completude, cardinalidades, normalização, integridade, legibilidade, flexibilidade, desempenho.
- **Engenharia reversa:** extrair catálogo, deduzir relacionamentos, elevar abstração, comparar/sincronizar; limite: semântica de negócio.

### 11. Pontos para a futura produção de questões (registro, sem criar questões)

Conceitos: níveis de modelo; cardinalidades; especialização; mapeamento E-R→relacional; engenharia direta × reversa. Distinções: total×parcial; disjunta×sobreposta; forte×fraca. Interpretação: leitura de DER e de diagramas de conjuntos (Venn) com regras de multiplicidade; escolha do esquema relacional que preserva a semântica.

### 12. Referências

Bibliografia de apoio (itens marcados **verificado** foram conferidos em catálogos online em 2026-10-31; os demais, **não verificados** — edição/ano/páginas pendentes):

- CHEN, P. P. S. "The Entity-Relationship Model — Toward a Unified View of Data". *ACM Transactions on Database Systems*, v. 1, n. 1, p. 9–36, 1976 — **verificado**.
- ELMASRI, R.; NAVATHE, S. B. *Sistemas de Banco de Dados*. São Paulo: Pearson (edição em português localizada: 6ª ed., 2011; o original em inglês, *Fundamentals of Database Systems*, 7ª ed., consta nos catálogos com ano 2015, 2016 ou 2017) — **verificado** em catálogos online.
- HEUSER, C. A. *Projeto de Banco de Dados*. Bookman/Sagra Luzzatto.
- SILBERSCHATZ, A.; KORTH, H. F.; SUDARSHAN, S. *Database System Concepts*. 7th ed. McGraw-Hill, 2019 — **verificado**.
- Edital Transpetro nº 04/2026.4, Anexo IV, itens 1.1, 1.2, 1.8, 1.9.
- Provas históricas catalogadas: `docs/estrategia/catalogo-questoes-historicas.md` (fontes secundárias, sem validação oficial).


---

## O Modelo Relacional e a Integridade Referencial

**Módulo:** M01 — Arquitetura de Dados
**Textos oficiais (Anexo IV):** 1.3 "O modelo Relacional"; 1.5 "Integridade referencial".
**Escopo:** A. A álgebra relacional (seção 4) é desenvolvimento do modelo relacional; o edital não cita a álgebra literalmente (relação por pertinência ao item 1.3).
**Status:** `VALIDADO` (aprovado pelo usuário em 2026-10-31; referências não verificadas listadas em `docs/qualidade/relatorio-producao-modulo-01.md`).

**Objetivos de aprendizagem.** (1) Definir relação, tupla, atributo, domínio, esquema e instância; (2) distinguir os tipos de chave; (3) explicar as regras de integridade e as ações referenciais; (4) aplicar os operadores da álgebra relacional; (5) interpretar o comportamento de valores nulos.

---

### 1. Introdução

O **modelo relacional** foi proposto por E. F. Codd (1970) e fundamenta os SGBDs relacionais (Oracle, PostgreSQL, SQL Server, MySQL, entre outros). Sua ideia central é representar **todos os dados como relações** (visualizadas como tabelas) e manipulá-los por operações de natureza matemática (teoria dos conjuntos e lógica), o que separa o *que* se quer do *como* é armazenado. A **integridade referencial** (item 1.5) é a regra que mantém os vínculos entre tabelas consistentes. Os dois itens são inseparáveis: o modelo relacional só funciona com segurança se as regras de integridade forem declaradas e garantidas pelo SGBD.

Relações com outros itens: o modelo lógico relacional é produzido a partir do DER (1.1/1.2, arquivo `02`); sua qualidade depende da normalização (1.4, arquivo `04`); é manipulado por SQL (1.10–1.12, arquivo `05`) e protegido por transações (1.14/1.16, arquivo `06`).

### 2. Fundamentos do modelo relacional (item 1.3)

#### 2.1 Conceitos básicos

| Termo formal | Termo usual | Definição |
|---|---|---|
| Relação | Tabela | Conjunto de tuplas com os mesmos atributos |
| Tupla | Linha (registro) | Um elemento da relação; conjunto de valores, um por atributo |
| Atributo | Coluna | Nome associado a um domínio |
| Domínio | Tipo/conjunto de valores | Conjunto de valores atômicos permitidos |
| Grau | Número de colunas | Quantidade de atributos |
| Cardinalidade (da relação) | Número de linhas | Quantidade de tuplas |
| **Esquema** da relação | Definição da tabela | Nome + atributos + domínios + restrições (estável) |
| **Instância** (estado) | Conteúdo atual | Conjunto de tuplas em um momento (variável) |

Propriedades teóricas: os valores são **atômicos** (primeira forma normal, arquivo `04`); em uma relação, **não há tuplas duplicadas** e **a ordem das tuplas e dos atributos é irrelevante**. Atenção: o SQL, na prática, permite linhas duplicadas em tabelas sem chave e em resultados de consulta (modelo de *multiconjunto*), salvo uso de `DISTINCT`; isso é uma diferença entre o modelo teórico e a linguagem.

#### 2.2 Chaves

| Tipo de chave | Definição |
|---|---|
| **Superchave** | Conjunto de atributos que identifica unicamente cada tupla (pode conter atributos supérfluos) |
| **Chave candidata** | Superchave **mínima** (nenhum atributo pode ser removido sem perder a unicidade) |
| **Chave primária (PK)** | A chave candidata escolhida como identificador principal; **não aceita nulos** |
| **Chave alternativa** | Chave candidata não escolhida como primária (implementada com `UNIQUE`) |
| **Chave estrangeira (FK)** | Atributo(s) que referencia(m) a chave primária (ou candidata) de outra relação (ou da mesma) |
| **Chave composta** | Chave formada por mais de um atributo |
| **Chave substituta** | Identificador artificial (sequência/UUID) sem significado de negócio |

Exemplo: em `Equipamento(id, tag, descricao)`, `id` e `tag` podem ser chaves candidatas; `id` é a primária e `tag` é alternativa (`UNIQUE`).

#### 2.3 Restrições de integridade

| Restrição | O que garante |
|---|---|
| **Domínio** | Cada valor pertence ao domínio do atributo (tipo, `CHECK`, `NOT NULL`) |
| **Chave / unicidade** | Duas tuplas não podem ter a mesma chave |
| **Integridade de entidade** | Nenhum atributo da chave primária pode ser nulo |
| **Integridade referencial** (item 1.5) | Toda FK não nula deve corresponder a uma chave existente na tabela referenciada |
| **Restrições semânticas** | Regras de negócio (`CHECK`, gatilhos, asserções) |

### 3. Integridade referencial (item 1.5)

**Definição.** Uma restrição de integridade referencial exige que, para toda tupla da tabela *referenciadora* (filha), o valor da chave estrangeira seja **nulo** (se a coluna permitir) ou **igual ao valor de uma chave da tabela *referenciada* (pai)**. Assim não existem "registros órfãos": uma ordem não aponta para cliente inexistente.

#### 3.1 Quando a restrição pode ser violada e como o SGBD reage

| Operação | Pode violar? | Descrição |
|---|---|---|
| Inserir/atualizar na tabela **filha** | Sim | FK sem correspondente no pai |
| Excluir/atualizar a chave na tabela **pai** | Sim | Deixa filhos órfãos |
| Inserir no pai | Não | Não afeta filhos existentes |

Ações referenciais definidas na declaração da FK (`ON DELETE` / `ON UPDATE`):

| Ação | Efeito ao excluir/atualizar o pai |
|---|---|
| `NO ACTION` / `RESTRICT` | Rejeita a operação se houver filhos (`RESTRICT` verifica imediatamente; `NO ACTION` verifica ao final do comando, conforme o SGBD) |
| `CASCADE` | Propaga a exclusão/atualização aos filhos |
| `SET NULL` | Define a FK dos filhos como nula (exige coluna anulável) |
| `SET DEFAULT` | Define a FK como o valor padrão |

O suporte exato (por exemplo, `RESTRICT` × `NO ACTION`, restrições adiáveis) varia entre SGBDs; confirme na documentação do produto. O que é independente de produto é o conceito.

#### 3.2 Exemplo em SQL (PostgreSQL/padrão SQL)

```sql
-- Tabela pai
CREATE TABLE departamento (
  id_departamento INT PRIMARY KEY,
  nome            VARCHAR(100) NOT NULL
);

-- Tabela filha: todo professor pertence a um departamento (NOT NULL + FK)
CREATE TABLE professor (
  id_professor    INT PRIMARY KEY,
  nome            VARCHAR(100) NOT NULL,
  id_departamento INT NOT NULL,
  CONSTRAINT fk_prof_depto FOREIGN KEY (id_departamento)
    REFERENCES departamento (id_departamento)
    ON DELETE RESTRICT
);

-- Aluno pode ter orientador opcional (FK anulável)
CREATE TABLE aluno (
  id_aluno                INT PRIMARY KEY,
  nome                    VARCHAR(100) NOT NULL,
  id_professor_orientador INT,                         -- anulável: orientação opcional
  CONSTRAINT fk_aluno_orient FOREIGN KEY (id_professor_orientador)
    REFERENCES professor (id_professor)
    ON DELETE SET NULL
);
```

*Leitura:* `NOT NULL` em `id_departamento` + FK garante "todo professor pertence a um departamento" (participação obrigatória); a ausência de `NOT NULL` em `id_professor_orientador` permite alunos sem orientador. **Declarar FK é diferente de apenas ter uma coluna com o mesmo nome:** sem a cláusula `FOREIGN KEY ... REFERENCES`, o SGBD não garante a integridade.

#### 3.3 Casos especiais

- **Autorreferência:** `funcionario(id, id_gerente)` com FK para `funcionario(id)`; o gerente de topo tem `id_gerente` nulo.
- **FK composta:** a FK deve ter o mesmo número de colunas e tipos compatíveis com a chave referenciada.
- **Ciclos de FKs:** podem exigir inserção em etapas ou restrições adiadas (`DEFERRABLE`).
- **Integridade referencial entre bancos/sistemas distintos** não é garantida pelo SGBD (exige integração e controles de aplicação — arquivo `08`).

### 4. Álgebra relacional (desenvolvimento do item 1.3)

Conjunto de operadores que recebem relações e produzem relações (**fechamento**), base conceitual do SQL.

#### 4.1 Operadores

| Operador | Símbolo | Aridade | Descrição |
|---|---|---|---|
| Seleção | σ | **Unário** | Filtra tuplas por predicado: σ<sub>pressão&gt;40</sub>(Leitura) |
| Projeção | π | **Unário** | Escolhe colunas (elimina duplicatas no modelo formal) |
| Renomeação | ρ | **Unário** | Renomeia relação/atributos |
| União | ∪ | Binário | Tuplas de R ou S (esquemas compatíveis) |
| Interseção | ∩ | Binário | Tuplas em R e em S (compatíveis) |
| Diferença | − | Binário | Tuplas em R que não estão em S (compatíveis) |
| Produto cartesiano | × | Binário | Todas as combinações de tuplas de R e S |
| Junção (θ-join) | ⋈<sub>θ</sub> | Binário | Produto cartesiano seguido de seleção por θ |
| Junção natural | ⋈ | Binário | Junção por igualdade dos atributos de mesmo nome, com remoção da coluna repetida |
| Junção externa (esquerda, direita, completa) | ⟕ ⟖ ⟗ | Binário | Preserva tuplas sem correspondência, preenchendo com nulos |
| Divisão | ÷ | Binário | Tuplas de R associadas a **todas** as tuplas de S ("para todo") |
| Agregação | γ | Unário | Agrupa e calcula agregados (extensão) |

**Operadores fundamentais** (suficientes para expressar os demais): seleção, projeção, união, diferença, produto cartesiano, renomeação. Interseção, junções e divisão são **derivados**.

**Compatibilidade para união/interseção/diferença:** mesmo número de atributos e domínios correspondentes.

#### 4.2 Exemplos

Considere `Equipamento(id, tag, id_area)` e `Area(id_area, nome)`.

- Equipamentos da área "Bombeio": π<sub>tag</sub>(σ<sub>nome='Bombeio'</sub>(Equipamento ⋈ Area)).
- Em SQL: `SELECT e.tag FROM equipamento e JOIN area a ON a.id_area = e.id_area WHERE a.nome = 'Bombeio';`
- **Divisão:** "Fornecedores que vendem *todos* os materiais do catálogo" é uma divisão, não uma junção simples.

#### 4.3 Relação com o SQL

| Álgebra | SQL (aproximação) |
|---|---|
| σ | `WHERE` |
| π | `SELECT coluna` |
| ⋈ | `JOIN ... ON` / `NATURAL JOIN` |
| ∪, ∩, − | `UNION`, `INTERSECT`, `EXCEPT` (`MINUS` em Oracle) |
| γ | `GROUP BY` + agregados |
| × | `CROSS JOIN` |

O SQL é **declarativo** (descreve o resultado), e o otimizador escolhe a ordem de operações equivalentes algebricamente (arquivo `05`).

### 5. Valores nulos e lógica de três valores

`NULL` significa **valor ausente ou desconhecido**, não zero nem texto vazio. Comparações com `NULL` produzem **desconhecido** (*unknown*) e não verdadeiro/falso; o SQL usa **lógica de três valores**. Consequências:

- `coluna = NULL` nunca é verdadeiro; use `IS NULL` / `IS NOT NULL`.
- `WHERE` retém apenas linhas cujo predicado é **verdadeiro** (descarta falso e desconhecido).
- `x NOT IN (subconsulta)` retorna desconhecido/nenhuma linha se a subconsulta contiver `NULL`; prefira `NOT EXISTS` quando houver nulos possíveis.
- Agregados (`SUM`, `AVG`, `COUNT(coluna)`) **ignoram** nulos; `COUNT(*)` conta linhas.
- Chaves primárias não aceitam nulos; FKs podem ser nulas (indicam ausência de vínculo).
- Em Oracle, string vazia é tratada como `NULL` — particularidade de produto.

### 6. Comparações conceituais

| Conceito A | Conceito B | Diferença principal |
|---|---|---|
| Esquema | Instância | Estrutura (estável) × conteúdo em um instante |
| Chave candidata | Chave primária | A primária é a candidata escolhida; as demais são alternativas |
| Chave primária | Chave estrangeira | PK identifica a própria tupla; FK referencia outra tabela |
| Superchave | Chave candidata | A candidata é mínima |
| Integridade de entidade | Integridade referencial | Entidade: PK não nula e única; referencial: FK aponta para chave existente |
| `RESTRICT`/`NO ACTION` | `CASCADE` | Rejeitar × propagar |
| Relação (teoria) | Tabela (SQL) | A relação não admite duplicatas; a tabela SQL pode admitir |
| Operador unário | Operador binário | Unário: σ, π, ρ; binário: ∪, ∩, −, ×, junções, ÷ |
| Junção interna | Junção externa | A externa preserva tuplas sem correspondência |

### 7. Aplicações e cenários

**Cenário (didático).** Exclui-se um departamento com professores cadastrados.
- Com `ON DELETE RESTRICT`: a exclusão é rejeitada; é preciso transferir ou excluir os professores antes.
- Com `ON DELETE CASCADE`: os professores são excluídos junto (risco: perda em cascata; avaliar em dados críticos).
- Com `ON DELETE SET NULL`: só é possível se `id_departamento` for anulável, o que contradiria "todo professor pertence a um departamento".

*Conclusão:* a ação referencial escolhida deve respeitar a regra de negócio (a cardinalidade mínima do modelo).

### 8. Atenção para a prova

*Inferência técnica e recomendação pedagógica; sem atribuir frequência à banca.*

- Identificar **qual tabela é pai e qual é filha** e onde fica a FK em 1:N, N:N (tabela associativa) e 1:1.
- Reconhecer que **sem `FOREIGN KEY` declarada não há integridade referencial** garantida pelo SGBD.
- Operador **não binário** entre os da álgebra: **projeção** (assim como seleção e renomeação, unários).
- `NULL` ≠ 0 ≠ ''; comparações com `=` não detectam nulos.
- Cuidado com alternativas absolutas ("toda tabela precisa de chave estrangeira", "a chave primária pode ser nula").
- *Evidência histórica (amostra de duas provas):* a Prova 6 de 2023 (Q26) tratou de operadores da álgebra relacional; a de 2023 (Q47) e a de 2018 (Q39) exigiram interpretar integridade referencial em código/dados SQL. Duas provas não permitem inferir frequência.

### 9. Síntese

- Relação = conjunto de tuplas; esquema (estrutura) × instância (conteúdo).
- Chaves: super → candidata (mínima) → primária (escolhida, não nula) / alternativa; estrangeira referencia outra relação.
- Restrições: domínio, chave, entidade, referencial, semânticas.
- Integridade referencial: FK = nulo ou chave existente; ações `RESTRICT/NO ACTION`, `CASCADE`, `SET NULL`, `SET DEFAULT`.
- Álgebra: σ π ρ (unários); ∪ ∩ − × ⋈ ÷ (binários); fundamentais: σ, π, ∪, −, ×, ρ.
- NULL: lógica de três valores; `IS NULL`; agregados ignoram nulos.

### 10. Pontos para a futura produção de questões (registro)

Conceitos: tipos de chave; integridade referencial; operadores da álgebra; nulos. Distinções: candidata×primária; entidade×referencial; unário×binário; interna×externa. Interpretação: escolher o DDL que preserva restrições citadas; prever resultado de consulta com nulos.

### 11. Referências

Bibliografia de apoio (itens marcados **verificado** foram conferidos em catálogos online em 2026-10-31; os demais, **não verificados** — edição/ano/páginas pendentes):

- CODD, E. F. "A Relational Model of Data for Large Shared Data Banks". *Communications of the ACM*, v. 13, n. 6, p. 377–387, 1970 — **verificado**.
- ELMASRI, R.; NAVATHE, S. B. *Sistemas de Banco de Dados*. São Paulo: Pearson (edição em português localizada: 6ª ed., 2011; o original em inglês, *Fundamentals of Database Systems*, 7ª ed., consta nos catálogos com ano 2015, 2016 ou 2017) — **verificado** em catálogos online.
- SILBERSCHATZ, A.; KORTH, H. F.; SUDARSHAN, S. *Database System Concepts*. 7th ed. McGraw-Hill, 2019 — **verificado**.
- ISO/IEC 9075 (Linguagem SQL) — norma do padrão SQL (edição não especificada nesta etapa).
- Edital Transpetro nº 04/2026.4, Anexo IV, itens 1.3 e 1.5.


---

## Normalização das Estruturas de Dados

**Módulo:** M01 — Arquitetura de Dados
**Texto oficial (Anexo IV):** 1.4 "Normalização das estruturas de dados".
**Escopo:** A. As formas normais além da BCNF (4FN e 5FN) e o algoritmo de síntese são aprofundamentos dentro do mesmo item.
**Status:** `VALIDADO` (aprovado pelo usuário em 2026-10-31; referências não verificadas listadas em `docs/qualidade/relatorio-producao-modulo-01.md`).

**Objetivos de aprendizagem.** (1) Explicar o objetivo da normalização e as anomalias que ela evita; (2) identificar dependências funcionais; (3) classificar uma relação em 1FN, 2FN, 3FN e BCNF; (4) decompor uma relação sem perda; (5) justificar quando desnormalizar.

---

### 1. Introdução

**Normalização** é o processo de organizar as tabelas de um banco relacional para **reduzir redundância e evitar anomalias de atualização**, aplicando regras chamadas **formas normais** a partir das **dependências entre atributos**. Seu objetivo principal é que cada fato seja armazenado **em um único lugar**. A normalização é usada no projeto lógico (arquivo `02`) de sistemas transacionais (OLTP). Já a modelagem dimensional para análise (item 1.7, arquivo `09`) frequentemente **desnormaliza** de propósito.

### 2. Fundamentos

#### 2.1 Por que normalizar: as anomalias

Considere a tabela *didática* `OS(num_os, id_equip, nome_equip, area_equip, data_os)`, em que `nome_equip` e `area_equip` repetem-se em toda ordem do mesmo equipamento.

| Anomalia | Descrição | Exemplo |
|---|---|---|
| **Inserção** | Não é possível registrar um fato sem outro | Cadastrar um equipamento ainda sem ordens de serviço |
| **Atualização** | Mudar um dado exige alterar várias linhas; esquecer uma gera inconsistência | Mudar a área do equipamento em todas as ordens |
| **Exclusão** | Apagar um fato apaga outro | Excluir a última ordem do equipamento apaga os dados do equipamento |

#### 2.2 Dependência funcional

Um atributo (ou conjunto) **Y depende funcionalmente de X** (X → Y) quando cada valor de X determina **no máximo um** valor de Y. X é o **determinante**. Exemplos: `id_equip → nome_equip, area_equip`; `num_os → id_equip, data_os`.

Tipos:

- **Trivial:** Y ⊆ X (ex.: {A,B} → A).
- **Total** (completa): Y depende de X inteiro, e de nenhum subconjunto próprio de X.
- **Parcial:** Y depende de **parte** de uma chave composta.
- **Transitiva:** X → Y e Y → Z (com Y não determinando X e Y não sendo chave), logo X → Z por intermédio de Y.

**Axiomas de Armstrong** (regras de inferência): *reflexividade* (se Y ⊆ X, então X → Y), *aumentação* (se X → Y, então XZ → YZ), *transitividade* (se X → Y e Y → Z, então X → Z). **Fecho** de um conjunto de atributos X⁺ é o conjunto de todos os atributos determinados por X; X é superchave se X⁺ contém todos os atributos da relação, e é chave candidata se for mínimo.

#### 2.3 Formas normais

| Forma normal | Condição | Elimina |
|---|---|---|
| **1FN** | Todos os atributos são **atômicos** (sem grupos repetidos, sem valores multivalorados ou compostos em uma só coluna) e há chave definida | Colunas multivaloradas/repetidas |
| **2FN** | Está em 1FN e **todo atributo não primo depende da chave inteira** (nenhuma dependência parcial) | Dependências parciais (relevante só com chaves compostas) |
| **3FN** | Está em 2FN e **nenhum atributo não primo depende transitivamente da chave** | Dependências transitivas |
| **BCNF** (Boyce-Codd) | Para **toda** DF não trivial X → Y, **X é superchave** | Resíduos da 3FN com chaves candidatas sobrepostas |
| **4FN** | Está em BCNF e sem **dependências multivaloradas** não triviais que não sejam de superchave | Redundância por fatos multivalorados independentes |
| **5FN** (PJNF) | Sem **dependências de junção** não implicadas pelas chaves candidatas | Redundância só removível por decomposição em 3+ partes |

**Atributo primo:** aquele que participa de alguma chave candidata.

**Definição prática da 3FN (equivalente à clássica):** para toda DF não trivial X → A, **X é superchave ou A é atributo primo**. A BCNF é mais restritiva: exige que X seja superchave **sempre**. Toda relação em BCNF está em 3FN; a recíproca não vale.

**Mnemônico didático** (apenas auxílio de memória, não definição formal): na 3FN, "cada atributo não chave depende *da chave, de toda a chave e nada mais que a chave*".

#### 2.4 Exemplo passo a passo

Tabela inicial (didática): `PEDIDO(num_pedido, id_cliente, nome_cliente, cidade_cliente, {produtos})`.

1. **1FN:** os produtos formam grupo repetido. Separa-se `ITEM_PEDIDO(num_pedido, id_produto, descricao_produto, quantidade)`; `PEDIDO(num_pedido, id_cliente, nome_cliente, cidade_cliente)`. Chave de `ITEM_PEDIDO`: `(num_pedido, id_produto)`.
2. **2FN:** em `ITEM_PEDIDO`, `descricao_produto` depende só de `id_produto` (dependência **parcial**). Decompõe-se: `PRODUTO(id_produto, descricao_produto)` e `ITEM_PEDIDO(num_pedido, id_produto, quantidade)`.
3. **3FN:** em `PEDIDO`, `nome_cliente` e `cidade_cliente` dependem de `id_cliente`, que depende de `num_pedido` (dependência **transitiva**). Decompõe-se: `CLIENTE(id_cliente, nome_cliente, cidade_cliente)` e `PEDIDO(num_pedido, id_cliente)`.

Resultado (em 3FN): `CLIENTE`, `PEDIDO`, `PRODUTO`, `ITEM_PEDIDO`, com FKs entre elas.

#### 2.5 Quando a 3FN não basta: BCNF

Relação `MATRICULA(aluno, disciplina, professor)` com regras: cada professor leciona uma disciplina (`professor → disciplina`) e um aluno tem um professor por disciplina (`(aluno, disciplina) → professor`). Chaves candidatas: `(aluno, disciplina)` e `(aluno, professor)`. Todos os atributos são primos, logo está em **3FN**, mas `professor → disciplina` tem determinante que **não é superchave**: **não está em BCNF**. Decomposição: `LECIONA(professor, disciplina)` e `MATRICULA(aluno, professor)`.

*Observação:* a decomposição em BCNF é sempre **sem perda de junção**, mas **pode não preservar todas as dependências** (nesse exemplo, `(aluno, disciplina) → professor` deixa de ser verificável diretamente em uma só tabela). A **3FN** sempre admite decomposição **sem perda e com preservação de dependências**.

### 3. Desenvolvimento aprofundado

#### 3.1 Propriedades de uma boa decomposição

| Propriedade | Significado | Consequência se violada |
|---|---|---|
| **Junção sem perda** (*lossless join*) | Juntar as partes reconstrói **exatamente** a relação original | Surgem tuplas espúrias ou se perdem informações |
| **Preservação de dependências** | Todas as DFs podem ser verificadas nas relações decompostas sem junção | Restrições passam a exigir junções para serem validadas |

Critério para junção sem perda ao decompor R em R1 e R2: o conjunto de atributos comuns R1 ∩ R2 deve ser **chave** de R1 ou de R2 (ou, formalmente, R1∩R2 → R1 ou R1∩R2 → R2).

#### 3.2 4FN e 5FN (visão geral)

- **Dependência multivalorada (X ↠ Y):** a um valor de X associa-se um **conjunto** de valores de Y, independentemente dos demais atributos. Exemplo didático: `ENGENHEIRO(nome, habilidade, projeto)`, em que habilidades e projetos são independentes entre si; guardar tudo em uma tabela cria combinações redundantes. 4FN: separar em `(nome, habilidade)` e `(nome, projeto)`.
- **5FN:** trata de dependências de junção; é pouco comum em projetos práticos.

#### 3.3 Desnormalização

**Desnormalizar** é introduzir redundância **deliberada** para ganhar desempenho de leitura (evitar junções) ou simplificar consultas. Técnicas: colunas derivadas/redundantes, tabelas de resumo, pré-agregação, duplicar atributos lidos com frequência. Custos: risco de inconsistência, necessidade de manter a redundância (gatilhos/rotinas), maior armazenamento e escrita mais custosa. Deve ser decisão **consciente, documentada e posterior à normalização**. Em *data warehouses*, o modelo dimensional (arquivo `09`) é desnormalizado por projeto.

#### 3.4 Como normalizar na prática

1. Listar atributos e identificar as dependências funcionais (regras do negócio, não dados de exemplo: um conjunto de linhas pode "parecer" ter uma DF sem que ela seja regra).
2. Determinar chaves candidatas (fecho de atributos).
3. Verificar 1FN → 2FN → 3FN → BCNF, decompondo quando violado.
4. Conferir junção sem perda e preservação de dependências.
5. Revisar desempenho; desnormalizar apenas se justificado.

### 4. Comparações conceituais

| Conceito A | Conceito B | Diferença principal |
|---|---|---|
| Dependência parcial | Dependência transitiva | Parcial: depende de parte de chave composta (viola 2FN); transitiva: depende de atributo não chave (viola 3FN) |
| 3FN | BCNF | BCNF exige que todo determinante seja superchave; a 3FN admite determinante não superchave se o dependente for primo |
| 1FN | 2FN | 1FN: atomicidade; 2FN: dependência total da chave |
| Normalização | Desnormalização | Reduz redundância (consistência) × introduz redundância (desempenho de leitura) |
| Normalização (OLTP) | Modelagem dimensional (OLAP) | A primeira prioriza integridade em atualizações; a segunda, leitura analítica |
| Junção sem perda | Preservação de dependências | A primeira trata da reconstrução dos dados; a segunda, da verificação das restrições |

### 5. Aplicações e cenários

**Cenário (didático).** Um cadastro de contratos repete razão social e endereço do fornecedor em toda linha de contrato. Um erro de digitação gera duas versões do mesmo fornecedor (anomalia de atualização). Solução: tabela `FORNECEDOR` e FK em `CONTRATO`. *Limitação:* consultas de contrato passam a exigir junção; índices na FK atenuam o custo.

**Cenário (didático).** Para um painel que lista milhões de ordens com o nome da área, uma coluna `nome_area` copiada em `ORDEM` acelera a leitura, mas exige manter a cópia sincronizada com `AREA`. Decisão de desnormalização documentada.

### 6. Atenção para a prova

*Inferência técnica e recomendação pedagógica.*

- Saber **identificar a forma normal mais alta** de um esquema dado com suas DFs: liste chaves candidatas, atributos primos e verifique 2FN (parciais), 3FN (transitivas), BCNF (determinante não superchave).
- O **objetivo principal** da normalização é **eliminar redundância e anomalias**, não "reduzir o espaço de armazenamento" (pode reduzir, mas não é o objetivo central) nem "acelerar todas as consultas" (frequentemente exige mais junções).
- 2FN só tem sentido se a chave for **composta**; com chave simples, 1FN já implica 2FN.
- Alternativas que dizem que normalização "aumenta a redundância" ou que "garante melhor desempenho de consultas complexas" são incorretas por generalizar.
- Distinguir **dependência funcional** de **chave estrangeira**: DF é uma regra semântica; FK é um mecanismo de integridade.
- *Evidência histórica (amostra de duas provas):* a Prova 6 de 2023 (Q64: objetivo da normalização) e a Prova 15 de 2018 (Q42: identificar esquema em 3FN a partir de dependências) tocaram o item 1.4. Duas provas não permitem inferir frequência.

### 7. Síntese

- Objetivo: eliminar redundância e anomalias (inserção, atualização, exclusão).
- DF: X → Y; parcial (viola 2FN), transitiva (viola 3FN).
- 1FN atomicidade; 2FN sem dependência parcial; 3FN sem transitiva (ou determinante superchave / dependente primo); BCNF: todo determinante é superchave; 4FN: multivaloradas; 5FN: junção.
- Decomposição: junção sem perda (obrigatória) e preservação de dependências (desejável; BCNF pode violar, 3FN garante).
- Desnormalização: redundância deliberada por desempenho, com custo de consistência.

### 8. Pontos para a futura produção de questões (registro)

Conceitos: anomalias, DF, formas normais, decomposição, desnormalização. Distinções: parcial×transitiva; 3FN×BCNF; normalização×dimensional. Interpretação: dado um conjunto de DFs, qual esquema está em 3FN; qual decomposição é sem perda.

### 9. Referências

Bibliografia de apoio (itens marcados **verificado** foram conferidos em catálogos online em 2026-10-31; os demais, **não verificados** — edição/ano/páginas pendentes):

- ELMASRI, R.; NAVATHE, S. B. *Sistemas de Banco de Dados*. São Paulo: Pearson (edição em português localizada: 6ª ed., 2011; o original em inglês, *Fundamentals of Database Systems*, 7ª ed., consta nos catálogos com ano 2015, 2016 ou 2017) — **verificado** em catálogos online.
- SILBERSCHATZ, A.; KORTH, H. F.; SUDARSHAN, S. *Database System Concepts*. 7th ed. McGraw-Hill, 2019 — **verificado**.
- HEUSER, C. A. *Projeto de Banco de Dados*. Bookman/Sagra Luzzatto.
- Edital Transpetro nº 04/2026.4, Anexo IV, item 1.4.


---

## SQL (DDL e DML), SGBD, Independência de Dados e Desempenho

**Módulo:** M01 — Arquitetura de Dados
**Textos oficiais (Anexo IV):** 1.10 "Linguagem de consulta estruturada (SQL)"; 1.11 "Linguagem de definição de dados (DDL)"; 1.12 "Linguagem de manipulação de dados (DML)"; 1.13 "Sistema Gerenciador de Banco de Dados (SGBD)"; 1.15 "Independência de dados"; 1.17 "Melhoria de performance de banco de dados".
**Escopo:** A. *Nota:* gatilhos (*triggers*) e procedimentos armazenados **não** são itens da Ênfase 5 (constam de outra ênfase do edital); aparecem aqui apenas de passagem, se necessário.
**Status:** `VALIDADO` (aprovado pelo usuário em 2026-10-31; referências não verificadas listadas em `docs/qualidade/relatorio-producao-modulo-01.md`).

**Objetivos de aprendizagem.** (1) Descrever as funções e a arquitetura de um SGBD; (2) explicar a independência lógica e física de dados; (3) escrever e interpretar comandos DDL e DML e consultas SQL com junções, agregação e subconsultas; (4) identificar causas de lentidão e medidas de melhoria de desempenho.

---

### 1. Introdução

O **SGBD** é o software que torna o banco de dados utilizável por muitos usuários e aplicações, com segurança, consistência e eficiência. O **SQL** (*Structured Query Language*) é a linguagem padrão para definir, manipular e consultar dados em SGBDs relacionais. A **independência de dados** é a propriedade arquitetural que permite alterar a organização do banco sem reescrever as aplicações. E a **melhoria de desempenho** reúne as técnicas para que consultas e transações respondam no tempo exigido.

Relações: o SQL implementa o modelo relacional e a álgebra (arquivo `03`); o DDL materializa o modelo físico (arquivo `02`); a integridade e as transações são tratadas nos arquivos `03` e `06`.

---

### 2. SGBD (item 1.13)

#### 2.1 Funções de um SGBD

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

#### 2.2 Arquitetura em componentes (visão simplificada)

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

#### 2.3 Tipos de usuários e classificações

Usuários: **DBA** (Administrador de Banco de Dados), projetistas, desenvolvedores/analistas, usuários finais. Classificações de SGBD: pelo modelo de dados (relacional, documento, grafo…), por número de usuários, por distribuição (centralizado/distribuído), por finalidade (transacional/analítico). Os modelos não relacionais e o banco em memória são tratados no arquivo `07`.

---

### 3. Independência de dados (item 1.15)

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

### 4. SQL: sublinguagens (item 1.10)

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

### 5. DDL — Linguagem de definição de dados (item 1.11)

#### 5.1 Comandos principais

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

#### 5.2 Pontos importantes

- DDL define **esquema** e metadados; em muitos SGBDs, comandos DDL fazem *commit* implícito (Oracle, MySQL) e em outros são transacionais (PostgreSQL). Confirmar na documentação do produto.
- **Restrições** declaradas: `PRIMARY KEY`, `UNIQUE`, `NOT NULL`, `CHECK`, `FOREIGN KEY` (arquivo `03`).
- **`DROP` × `DELETE` × `TRUNCATE`:** `DROP TABLE` remove a **estrutura e os dados**; `DELETE` remove **linhas** (com `WHERE`, registra por linha, pode ser revertido em transação); `TRUNCATE TABLE` remove **todas as linhas** rapidamente, mantendo a estrutura.
- **Visão (*view*):** consulta nomeada; pode ocultar complexidade e dar independência lógica (seção 3). **Visão materializada** armazena o resultado e precisa ser atualizada.
- A **ordem de criação** deve respeitar dependências (tabela pai antes da filha) ou usar `ALTER TABLE ADD CONSTRAINT` depois.

---

### 6. DML — Linguagem de manipulação de dados (item 1.12)

#### 6.1 Comandos

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

#### 6.2 Efeitos sobre a integridade

Um comando DML só é executado com sucesso se **todas as restrições** forem satisfeitas. Exemplos: `INSERT` em `venda` com `id_f` inexistente falha por violar a FK; omitir coluna `NOT NULL` sem *default* falha; `DELETE` de um pai com filhos falha com `RESTRICT/NO ACTION` ou propaga com `CASCADE` (arquivo `03`).

---

### 7. Consultas SQL (item 1.10)

#### 7.1 Estrutura e ordem lógica de avaliação

```sql
SELECT  [DISTINCT] colunas / expressões / agregados
FROM    tabelas e junções
WHERE   filtro sobre linhas
GROUP BY agrupamento
HAVING  filtro sobre grupos
ORDER BY ordenação
```

**Ordem lógica de processamento:** `FROM` → `WHERE` → `GROUP BY` → `HAVING` → `SELECT` → `ORDER BY` (e depois `LIMIT`). Por isso o alias definido no `SELECT` não pode ser usado no `WHERE` na maioria dos SGBDs (o SQLite é uma exceção, por extensão própria). Diferença: **`WHERE` filtra linhas antes do agrupamento; `HAVING` filtra grupos após agregação.**

#### 7.2 Junções

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

#### 7.3 Agregação

Funções: `COUNT`, `SUM`, `AVG`, `MIN`, `MAX`. Regra: toda coluna no `SELECT` que não esteja em função de agregação deve constar no `GROUP BY`. Agregados ignoram `NULL` (exceto `COUNT(*)`).

```sql
SELECT a.nome, COUNT(*) AS qtd_equip, AVG(e.valor) AS valor_medio
FROM   equipamento e JOIN area a ON a.id_area = e.id_area
GROUP BY a.nome
HAVING COUNT(*) > 10;
```

#### 7.4 Subconsultas e operações de conjunto

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

#### 7.5 Recursos adicionais

**CTE** (`WITH`), **funções de janela** (`ROW_NUMBER() OVER (PARTITION BY ... ORDER BY ...)`), expressões `CASE`, junção com `USING`. São extensões úteis; o edital cita o SQL de modo geral, sem listar esses recursos.

---

### 8. Melhoria de performance de banco de dados (item 1.17)

#### 8.1 Visão geral

Desempenho é o tempo de resposta e a vazão (transações/s) sob carga. A melhoria é **iterativa**: medir → identificar gargalo → ajustar → medir de novo. Nunca otimize sem medir.

#### 8.2 Índices

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

#### 8.3 Otimizador, plano de execução e estatísticas

O **otimizador de consultas** (geralmente *baseado em custo*) gera planos alternativos equivalentes e escolhe o de menor custo estimado. Funcionalidades típicas: escolher o plano mais eficiente, escolher entre **varredura sequencial (*full scan*)** e **uso de índice**, decidir a **ordem e o algoritmo das junções** (*nested loop*, *hash join*, *merge join*), usar **estatísticas** (número de linhas, distribuição de valores, seletividade) para estimar custos. O otimizador **não cria tabelas nem altera o esquema** com base nas consultas: isso é tarefa de projeto/administração. O plano é inspecionado com `EXPLAIN` (PostgreSQL/MySQL) ou `EXPLAIN PLAN`/*autotrace* (Oracle) ou *Execution Plan* (SQL Server). **Estatísticas desatualizadas** levam a planos ruins (atualizar com `ANALYZE`/`UPDATE STATISTICS`/`DBMS_STATS`).

#### 8.4 Escrita de consultas

- Selecionar **apenas as colunas necessárias** (evitar `SELECT *`).
- Escrever predicados **sargáveis** (que permitem uso de índice): evitar funções sobre a coluna filtrada (`WHERE TRUNC(data) = ...`, `WHERE UPPER(nome) = ...` sem índice funcional), evitar `LIKE '%texto'` (prefixo coringa).
- Filtrar cedo; evitar junções desnecessárias; preferir `NOT EXISTS` a `NOT IN` quando a subconsulta puder retornar nulos (o `NOT IN` pode retornar nenhum resultado).
- Evitar `SELECT DISTINCT` e `ORDER BY` desnecessários: ambos podem exigir ordenação ou eliminação de duplicatas custosa. Substituir **todo** `SELECT` por `SELECT DISTINCT`, ou usar **sempre** `ORDER BY`, **não** é melhoria: pode piorar o desempenho e alterar o resultado.
- Paginação eficiente; evitar consultas repetitivas em laço (problema *N+1*); usar operações em lote.

#### 8.5 Outras medidas

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

### 9. Comparações conceituais

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

### 10. Aplicações e cenários

**Cenário (didático): relatório lento.** Um relatório de ordens de serviço por área leva minutos. *Diagnóstico:* `EXPLAIN` mostra varredura completa em `ordem` (milhões de linhas) por um filtro sobre `data_abertura`, e uma função aplicada à coluna impede o uso do índice. *Ações:* reescrever o predicado como faixa (`data_abertura >= :ini AND data_abertura < :fim`), criar índice em `(id_area, data_abertura)`, atualizar estatísticas, medir. *Limitação:* o novo índice torna as inserções ligeiramente mais lentas.

**Cenário (didático): alteração de esquema sem quebrar relatórios.** Uma coluna é movida para uma nova tabela; uma *view* com o nome e as colunas antigas mantém os relatórios funcionando (independência lógica).

### 11. Atenção para a prova

*Inferência técnica e recomendação pedagógica; sem atribuir frequência à banca.*

- Em **DDL × DML**, o critério é "estrutura × dados". Cuidado com a classificação do `SELECT` e do `TRUNCATE` (diverge entre fontes).
- Ler comandos SQL **com cuidado**: `BETWEEN` inclusivo, `NOT IN` com `NULL`, `UPDATE`/`DELETE` sem `WHERE`, junção externa com filtro no `WHERE`.
- Prever se um `INSERT`/`DELETE` **executa sem erro** exige confrontar o comando com colunas `NOT NULL`, PK, FK e **os dados atuais**.
- Medidas de desempenho: desconfie de afirmações absolutas ("sempre use ORDER BY", "substitua todos os SELECT por SELECT DISTINCT", "execute tudo de forma serial", "fragmente os índices").
- Funcionalidades do **otimizador**: plano, método de acesso, estatísticas, ordem de junção; **não** criar tabelas.
- Independência de dados: reconhecer o nível alterado (interno × conceitual).
- *Evidência histórica (amostra de duas provas):* a Prova 15 de 2018 (Q38, Q39) e a Prova 6 de 2023 (Q47, Q49, Q51, Q45) trouxeram SQL/DDL/DML, otimizador e desempenho. Os itens 1.15 e 1.13 (como descrição de arquitetura) pouco aparecem; não há base para inferir frequência.

### 12. Síntese

- **SGBD:** definição de dados, armazenamento, processamento/otimização de consultas, concorrência, recuperação, segurança, integridade; usa catálogo.
- **Três esquemas:** externo, conceitual, interno → independência **lógica** (conceitual sem afetar externos) e **física** (interno sem afetar conceitual).
- **SQL:** DDL (CREATE/ALTER/DROP), DML (INSERT/UPDATE/DELETE/MERGE; SELECT conforme o autor), DCL, TCL.
- **Consulta:** `FROM → WHERE → GROUP BY → HAVING → SELECT → ORDER BY`; junções; agregação; subconsultas; conjuntos.
- **Desempenho:** medir; índices (custo na escrita); plano e estatísticas; predicados sargáveis; particionamento; materialização; transações curtas; manutenção.

### 13. Pontos para a futura produção de questões (registro)

Conceitos: sublinguagens SQL; junções; agregação; independência de dados; otimizador; índices. Distinções: DDL×DML; WHERE×HAVING; DELETE×TRUNCATE×DROP; lógica×física. Interpretação: escolher a consulta correta para um enunciado; prever se um comando executa sem erro com base em DDL e dados.

### 14. Referências

Bibliografia e documentação de apoio (itens marcados **verificado** foram conferidos em catálogos online em 2026-10-31; os demais, **não verificados** — edição/ano/páginas pendentes):

- ISO/IEC 9075 — Linguagem SQL (edição não especificada nesta etapa).
- ELMASRI, R.; NAVATHE, S. B. *Sistemas de Banco de Dados*. São Paulo: Pearson (edição em português localizada: 6ª ed., 2011; o original em inglês, *Fundamentals of Database Systems*, 7ª ed., consta nos catálogos com ano 2015, 2016 ou 2017) — **verificado** em catálogos online.
- SILBERSCHATZ, A.; KORTH, H. F.; SUDARSHAN, S. *Database System Concepts*. 7th ed. McGraw-Hill, 2019 — **verificado**.
- Documentação oficial dos SGBDs (PostgreSQL, Oracle Database, Microsoft SQL Server, MySQL) para sintaxe e planos de execução — versões não especificadas nesta etapa.
- Edital Transpetro nº 04/2026.4, Anexo IV, itens 1.10–1.13, 1.15 e 1.17.


---

## Transações e Propriedades ACID

**Módulo:** M01 — Arquitetura de Dados
**Textos oficiais (Anexo IV):** 1.14 "Propriedades de banco de dados: atomicidade, consistência, isolamento e durabilidade"; 1.16 "Transações de bancos de dados".
**Escopo:** A. As seções sobre níveis de isolamento, bloqueios, MVCC e recuperação são **aprofundamento B** necessário para entender como as propriedades são implementadas; "gerência de bloqueios" e "gerência de transações" aparecem literalmente em outra ênfase do edital, não na Ênfase 5.
**Status:** `VALIDADO` (aprovado pelo usuário em 2026-10-31; referências não verificadas listadas em `docs/qualidade/relatorio-producao-modulo-01.md`).

**Objetivos de aprendizagem.** (1) Definir transação e seu ciclo de vida; (2) explicar cada propriedade ACID e **o que a garante**; (3) reconhecer anomalias de concorrência e os níveis de isolamento; (4) entender bloqueios, deadlock, MVCC e recuperação em nível conceitual.

---

### 1. Introdução

Muitas operações de negócio só fazem sentido **em conjunto**: transferir valor entre duas contas exige debitar uma e creditar a outra. Se o sistema falhar no meio, ou se outra operação enxergar o estado intermediário, os dados ficam incorretos. A **transação** é a unidade lógica de trabalho que o SGBD executa de forma confiável, e as **propriedades ACID** descrevem as garantias esperadas.

### 2. Fundamentos

#### 2.1 Transação

**Transação** é uma sequência de operações de leitura e escrita tratada como **uma unidade lógica indivisível** de trabalho, que leva o banco de um estado consistente a outro estado consistente.

Controle (TCL): `BEGIN`/`START TRANSACTION`, `COMMIT` (confirma e torna permanente), `ROLLBACK` (desfaz tudo desde o início), `SAVEPOINT` (ponto intermediário para desfazer parcialmente). Em muitos SGBDs há **autocommit** (cada comando é uma transação) quando não se abre transação explícita.

```sql
BEGIN;
UPDATE conta SET saldo = saldo - 500 WHERE id = 1;   -- débito
UPDATE conta SET saldo = saldo + 500 WHERE id = 2;   -- crédito
COMMIT;   -- se qualquer passo falhar, ROLLBACK desfaz os dois
```

**Estados de uma transação:** *ativa* → *parcialmente confirmada* (última operação executada) → *confirmada* (commit) ou *falha* → *abortada* (desfeita; pode ser reiniciada).

#### 2.2 As propriedades ACID (item 1.14)

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

### 3. Desenvolvimento: concorrência e isolamento

#### 3.1 Problemas de execução concorrente (anomalias)

| Anomalia | Descrição |
|---|---|
| **Atualização perdida** (*lost update*) | Duas transações leem o mesmo valor e ambas escrevem; uma sobrescreve a outra |
| **Leitura suja** (*dirty read*) | Lê dado alterado por transação ainda **não confirmada** (que pode ser desfeita) |
| **Leitura não repetível** (*non-repeatable read*) | Duas leituras do **mesmo registro** na mesma transação retornam valores diferentes (outra transação alterou e confirmou) |
| **Leitura fantasma** (*phantom read*) | Duas execuções da **mesma consulta** retornam conjuntos de linhas diferentes (outra transação inseriu/excluiu linhas que satisfazem o filtro) |
| **Distorção de escrita** (*write skew*) | Duas transações leem dados sobrepostos e escrevem em itens diferentes, violando uma regra conjunta (possível em *snapshot isolation*) |

#### 3.2 Níveis de isolamento (padrão SQL)

| Nível | Leitura suja | Não repetível | Fantasma |
|---|---|---|---|
| `READ UNCOMMITTED` | possível | possível | possível |
| `READ COMMITTED` | evitada | possível | possível |
| `REPEATABLE READ` | evitada | evitada | possível (no padrão) |
| `SERIALIZABLE` | evitada | evitada | evitada |

Maior isolamento ⇒ maior correção, **menor concorrência/desempenho** (mais bloqueios ou mais abortos). A implementação real varia: PostgreSQL, por exemplo, usa MVCC e, em `REPEATABLE READ`, também evita fantasmas (*snapshot isolation*), e não oferece `READ UNCOMMITTED` efetivo; Oracle usa *read committed* por padrão. Confirme a documentação do SGBD usado.

#### 3.3 Serializabilidade

Um **escalonamento** (intercalação das operações de várias transações) é **serializável** se seu efeito é equivalente ao de alguma execução **serial** das mesmas transações. A **serializabilidade por conflito** é verificada por um **grafo de precedência**: ausência de ciclos ⇒ serializável. Dois acessos **conflitam** se são de transações diferentes, sobre o mesmo item e ao menos um é escrita.

#### 3.4 Técnicas de controle de concorrência

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

#### 3.5 Recuperação (durabilidade e atomicidade)

- **Log de transações** (registro sequencial de alterações) e **WAL** (*write-ahead logging*): o registro do log é gravado em disco **antes** da página de dados alterada.
- **Desfazer (*undo*)** reverte transações não confirmadas; **refazer (*redo*)** reaplica alterações de transações confirmadas cujos dados não chegaram ao disco.
- **Pontos de verificação (*checkpoints*)** limitam o trabalho de recuperação após queda.
- Falhas: da **transação** (erro lógico, abort), do **sistema** (queda; memória volátil perdida) e de **mídia** (disco), esta última exigindo **backups** e arquivamento de logs.
- **Backup e recuperação até um ponto no tempo (*point-in-time recovery*)** complementam a durabilidade.

#### 3.6 Transações distribuídas (visão geral)

Quando uma transação envolve vários bancos, usa-se o **commit em duas fases (2PC)**: fase de *preparação* (todos votam) e fase de *confirmação/aborto*. Garante atomicidade distribuída ao custo de latência e bloqueio. Em arquiteturas de microsserviços, utilizam-se alternativas como o padrão *Saga* (compensações), com consistência eventual.

### 4. Comparações conceituais

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

### 5. Aplicações e cenários

**Cenário (didático): reserva de estoque.** Duas ordens de compra tentam reservar o último item. Sem isolamento adequado, ambas leem "1 disponível" e ambas confirmam (*lost update*). Soluções: bloqueio da linha com `SELECT ... FOR UPDATE`, nível `SERIALIZABLE`, ou restrição `CHECK`/atualização condicional (`UPDATE ... WHERE qtd >= 1`). *Limitação:* mais bloqueio ⇒ menos concorrência.

**Cenário (didático): falha no meio de uma carga.** Um processo grava 1.000 registros e cai no 600º. Com tudo em **uma transação**, o *rollback* automático na recuperação deixa o banco como antes (atomicidade). Sem transação, ficam 600 linhas gravadas e inconsistência com o restante.

**Cenário (didático): relatório e escrita simultâneos.** Com MVCC, o relatório lê um instantâneo e não bloqueia as atualizações; com bloqueio de leitura em nível alto, o relatório pode atrasar escritas.

### 6. Atenção para a prova

*Inferência técnica e recomendação pedagógica; sem atribuir frequência à banca.*

- Decorar **a definição correta de cada letra** e **não trocá-las**: atomicidade = tudo ou nada; consistência = estado válido; isolamento = transações concorrentes não interferem; durabilidade = efeitos permanentes após o commit. Alternativas que **embaralham** definições entre as quatro propriedades são incorretas.
- Atomicidade **não** significa dividir a transação em subtransações menores.
- Isolamento **não** permite "misturar" transações livremente.
- Durabilidade **não** significa que resultados possam ser desfeitos depois do commit.
- Identificar a anomalia pelo sintoma: **valor lido de transação não confirmada** = leitura suja; **mesmo registro com outro valor** = não repetível; **conjunto de linhas diferente** = fantasma.
- Execução serial **resolve** a concorrência, mas **sacrifica desempenho**.
- *Evidência histórica (amostra de duas provas):* a Prova 6 de 2023 (Q53) exigiu escolher a descrição correta das quatro propriedades ACID, com distratores que trocavam as definições. Os demais assuntos desta seção (níveis de isolamento, bloqueios, MVCC) não apareceram nas duas provas catalogadas para a Ênfase 5; duas provas não permitem inferir frequência.

### 7. Síntese

- **Transação:** unidade lógica de trabalho; `COMMIT`, `ROLLBACK`, `SAVEPOINT`.
- **ACID:** A (tudo ou nada; log/rollback), C (estado válido; restrições + aplicação), I (sem interferência; concorrência), D (permanente após commit; log/WAL).
- **Anomalias:** atualização perdida, leitura suja, não repetível, fantasma, *write skew*.
- **Isolamento SQL:** READ UNCOMMITTED < READ COMMITTED < REPEATABLE READ < SERIALIZABLE.
- **Concorrência:** locks S/X, 2PL, deadlock (prevenção/detecção), MVCC, controle otimista.
- **Recuperação:** log/WAL, undo/redo, checkpoint, backup.

### 8. Pontos para a futura produção de questões (registro)

Conceitos: ACID; transação; níveis de isolamento; anomalias; locks; deadlock; MVCC; recuperação. Distinções: atomicidade×durabilidade; consistência ACID×CAP; não repetível×fantasma; serial×serializável. Interpretação: identificar qual propriedade foi violada em um cenário; qual anomalia ocorre em uma sequência de operações.

### 9. Referências

Bibliografia de apoio (itens marcados **verificado** foram conferidos em catálogos online em 2026-10-31; os demais, **não verificados** — edição/ano/páginas pendentes):

- ELMASRI, R.; NAVATHE, S. B. *Sistemas de Banco de Dados*. São Paulo: Pearson (edição em português localizada: 6ª ed., 2011; o original em inglês, *Fundamentals of Database Systems*, 7ª ed., consta nos catálogos com ano 2015, 2016 ou 2017) — **verificado** em catálogos online.
- SILBERSCHATZ, A.; KORTH, H. F.; SUDARSHAN, S. *Database System Concepts*. 7th ed. McGraw-Hill, 2019 — **verificado**.
- GRAY, J.; REUTER, A. *Transaction Processing: Concepts and Techniques*. Morgan Kaufmann.
- ISO/IEC 9075 (níveis de isolamento do padrão SQL; edição não especificada nesta etapa).
- Documentação oficial dos SGBDs (PostgreSQL, Oracle, SQL Server) para a implementação real de isolamento — versões não especificadas nesta etapa.
- Edital Transpetro nº 04/2026.4, Anexo IV, itens 1.14 e 1.16.


---

## Bancos NoSQL, Bancos em Memória e Diferenciação entre Tipos de Bancos

**Módulo:** M01 — Arquitetura de Dados
**Textos oficiais (Anexo IV):** 1.18 "Bancos de dados NoSQL"; 1.20 "Banco de dados em memória"; 1.23 "Diferenciação entre bancos relacionais, multidimensionais, documentos e grafos."
**Escopo:** A. Nomes de produtos são **exemplos** e não fazem parte do edital.
**Status:** `VALIDADO` (aprovado pelo usuário em 2026-10-31; referências não verificadas listadas em `docs/qualidade/relatorio-producao-modulo-01.md`).

**Objetivos de aprendizagem.** (1) Explicar por que surgiram os bancos NoSQL e o que significam CAP e BASE; (2) caracterizar os quatro tipos principais (chave-valor, documento, colunar de famílias de colunas, grafo); (3) explicar o que é um banco em memória e suas implicações para durabilidade; (4) diferenciar bancos relacionais, multidimensionais, de documentos e de grafos, escolhendo o adequado a um cenário.

---

### 1. Introdução

Os SGBDs relacionais dominam sistemas transacionais, mas certas cargas exigem **escala horizontal massiva**, **esquemas flexíveis**, **altíssimas taxas de escrita**, **baixa latência** ou **navegação em redes de relacionamentos**. Os bancos **NoSQL** (usualmente lido como *Not Only SQL*) são uma família heterogênea de tecnologias criada para esses cenários. Os **bancos em memória** atacam o gargalo do disco. O item 1.23 pede o discernimento de quando usar cada tipo.

*Relações:* o modelo relacional (arquivo `03`) e o ACID (arquivo `06`) são o ponto de comparação; o modelo multidimensional é detalhado no arquivo `09` (modelagem dimensional) e no Módulo 7 (OLAP); a integração entre esses repositórios aparece no arquivo `08`.

### 2. Bancos de dados NoSQL (item 1.18)

#### 2.1 Características gerais

- **Esquema flexível** ou ausente (*schema-on-read*): registros da mesma coleção podem ter estruturas diferentes.
- **Escalabilidade horizontal:** distribuir dados entre muitos nós de hardware comum, por **particionamento (*sharding*)** e **replicação**.
- **Modelos de dados específicos** (não apenas tabelas) e linguagens/APIs próprias; muitos também oferecem consulta tipo SQL.
- **Consistência frequentemente relaxada** em favor de disponibilidade e latência (consistência eventual), embora vários ofereçam transações ACID em escopo limitado.
- **Modelagem orientada às consultas:** projeta-se a estrutura conforme os padrões de acesso, aceitando **redundância** e **desnormalização**.

#### 2.2 Teorema CAP e modelo BASE

O **teorema CAP** (Brewer; formalizado por Gilbert e Lynch) afirma que, em um sistema distribuído sujeito a **partições de rede**, é preciso escolher entre **Consistência** (todos os nós veem o mesmo dado atual) e **Disponibilidade** (toda requisição recebe resposta). **Partição (P)** é inevitável em redes reais; portanto a escolha prática é **CP** ou **AP** durante a partição.

| Letra | Significado |
|---|---|
| C — Consistency | Leituras refletem a escrita mais recente (consistência linear) |
| A — Availability | Todo nó que funciona responde |
| P — Partition tolerance | O sistema continua operando apesar de falhas de comunicação entre nós |

**BASE** (contraponto didático ao ACID): *Basically Available* (basicamente disponível), *Soft state* (estado pode mudar sem entrada, por propagação), *Eventual consistency* (consistência eventual: na ausência de novas escritas, as réplicas convergem). Não confunda com o "C" do ACID (arquivo `06`).

#### 2.3 Tipos de bancos NoSQL

| Tipo | Modelo | Estrutura | Pontos fortes | Limitações | Exemplos de produtos* |
|---|---|---|---|---|---|
| **Chave-valor** | Pares chave → valor opaco | Dicionário distribuído | Latência mínima, simplicidade, cache, sessões | Consulta só por chave; sem relacionamentos | Redis, Amazon DynamoDB (também documento), Riak |
| **Documento** | Documentos autocontidos em **JSON/BSON/XML**, agrupados em *coleções* | Documentos aninhados, campos variáveis | Flexibilidade, dados semiestruturados, mapeamento natural a objetos, índices secundários e consultas por campos | Junções limitadas; duplicação de dados; consistência entre documentos | MongoDB, CouchDB |
| **Colunar de famílias de colunas** (*wide-column*) | Linhas identificadas por chave, com famílias de colunas dinâmicas | Tabela esparsa, particionada por chave | Altíssimas taxas de escrita, séries temporais, escala massiva | Modelagem rígida por consulta; consultas ad hoc limitadas | Apache Cassandra, Apache HBase |
| **Grafo** | **Vértices (nós)** e **arestas (relacionamentos)**, ambos com propriedades | Rede de entidades | Navegação por relacionamentos profundos, caminhos, recomendações, detecção de fraude | Menos indicado para agregações em grandes conjuntos; escala horizontal mais difícil | Neo4j, Amazon Neptune |

*Produtos citados apenas como exemplos; classificações podem ser multimodelo.

**Atenção à terminologia:** o **colunar de famílias de colunas** (Cassandra/HBase) **não** é o mesmo que o armazenamento **orientado a colunas** de bancos analíticos (formato físico que guarda cada coluna em separado, usado em *data warehouses*). Ambos usam a palavra "coluna", mas são conceitos distintos.

#### 2.4 Exemplos

**Documento (JSON, estilo MongoDB):**

```json
{
  "_id": 1001,
  "tag": "P-101",
  "tipo": "bomba",
  "area": { "id": 7, "nome": "Bombeio" },
  "manutencoes": [
    { "data": "2026-03-04", "tecnico": "A. Souza", "horas": 3.5 },
    { "data": "2026-07-19", "tecnico": "B. Lima",  "horas": 1.0 }
  ]
}
```

*Leitura:* os dados relacionados (área e manutenções) estão **incorporados (*embedding*)** no mesmo documento, evitando junções; o outro caminho é **referenciar** por identificador (similar a uma FK, mas sem integridade referencial imposta pelo banco). Consulta (sintaxe de exemplo): `db.equipamentos.find({ "area.nome": "Bombeio", "tipo": "bomba" })`.

**Grafo (Cypher, linguagem do Neo4j):**

```cypher
// Todos os amigos de uma pessoa chamada Alice
MATCH (p:Pessoa {nome: 'Alice'})-[:AMIGO_DE]->(amigo:Pessoa)
RETURN amigo.nome;
```

*Leitura:* `(p:Pessoa)` é um nó com rótulo; `-[:AMIGO_DE]->` é uma aresta **direcionada**; o `MATCH` descreve o padrão a localizar; o `RETURN` projeta o resultado. Observe o **sentido da seta**: invertê-la procura quem tem Alice como amiga. Cypher **não** usa `SELECT ... FROM`, e `FIND` não é palavra-chave do Cypher. *(Sintaxe de referência didática; consulte a documentação do produto.)*

#### 2.5 Modelagem e consultas em NoSQL

- Em documentos: decidir **incorporar** (leituras rápidas, dados que se leem juntos, relação 1:poucos) ou **referenciar** (dados grandes, compartilhados, relação N:N).
- Em chave-valor e colunar: projetar a **chave** para os acessos principais (chave de partição + chave de ordenação).
- Em grafo: modelar entidades como nós e vínculos como arestas, com propriedades em ambos.
- Em geral, **consultas arbitrárias (ad hoc) e junções** são mais caras ou limitadas que no relacional.

### 3. Bancos de dados em memória (item 1.20)

#### 3.1 Conceito

**Banco de dados em memória (*in-memory database*, IMDB)** mantém o conjunto de dados de trabalho **na memória principal (RAM)** em vez de depender de armazenamento em disco como meio primário. Isso elimina grande parte da latência de E/S de disco e permite estruturas de dados e algoritmos otimizados para memória.

#### 3.2 Como tratam durabilidade

A memória é **volátil**. Para preservar a durabilidade (D de ACID) ou reduzir perdas, usam-se, isoladamente ou combinados:

| Mecanismo | Descrição |
|---|---|
| **Instantâneos (*snapshots*/checkpoints)** | Cópias periódicas do estado para disco |
| **Log de transações / *append-only* em disco** | Registro das operações para reaplicar após falha |
| **Replicação** | Cópias em outros nós (síncrona ou assíncrona) |
| **Memória não volátil** | Hardware que preserva dados |

A garantia efetiva depende da configuração (por exemplo, sincronia do log): configurações assíncronas aceitam **perder as últimas operações** em caso de falha.

#### 3.3 Vantagens, limitações e usos

| Vantagens | Limitações |
|---|---|
| Latência de microssegundos a poucos milissegundos | Custo por GB de RAM maior que disco |
| Alta vazão em leitura e escrita | Capacidade limitada pela memória (ou necessidade de *cluster*) |
| Ideal para cache, sessões, filas, rankings, painéis em tempo real, análises em tempo real | Risco de perda de dados sem log/replicação adequados |
| Estruturas de dados especializadas | Complexidade de operação e de recuperação |

**Observações:** o termo abrange **tanto** NoSQL em memória (por exemplo, Redis, Memcached — este último apenas como cache) **quanto** SGBDs relacionais/analíticos em memória (por exemplo, SAP HANA, Oracle TimesTen, VoltDB). *Banco em memória* **não** é sinônimo de NoSQL, nem de cache apenas: é uma característica de **armazenamento primário**. Também é diferente de usar o *buffer pool* de um SGBD tradicional, em que o disco continua sendo a base e a memória é um cache das páginas.

### 4. Diferenciação entre bancos relacionais, multidimensionais, de documentos e de grafos (item 1.23)

#### 4.1 Quadro comparativo

| Critério | **Relacional** | **Multidimensional** | **Documentos** | **Grafos** |
|---|---|---|---|---|
| Unidade de dados | Linha em tabela | **Fato** (medida) em um **cubo** com **dimensões** | Documento (JSON/BSON) | Nó e aresta com propriedades |
| Esquema | Rígido, definido antes (*schema-on-write*) | Estrela/floco de neve ou cubo | Flexível | Flexível (rótulos e propriedades) |
| Relacionamentos | Chaves estrangeiras e junções | Dimensões e hierarquias | Incorporação ou referência | **Arestas** como cidadãs de primeira classe |
| Linguagem | SQL | SQL analítico, **MDX**, operações OLAP | API/consulta própria (ex.: JSON de consulta) | Cypher, Gremlin, SPARQL (RDF) |
| Consistência típica | ACID forte | Atualização em lote (cargas ETL) | Variável; ACID por documento | ACID em vários; variável |
| Foco | Transações (OLTP) | **Análise** (OLAP), agregações sobre histórico | Dados semiestruturados, catálogos, conteúdo | Redes, caminhos, recomendações |
| Escala | Vertical; horizontal com esforço | Colunar/cubos, paralelismo | Horizontal (*sharding*) | Variável |
| Pontos fortes | Integridade, consultas ad hoc, maturidade | Agregação rápida por dimensões, *drill down/roll up* | Flexibilidade, desenvolvimento ágil | Consultas por relacionamentos profundos |
| Limitações | Junções custosas em escala e em relações profundas | Pouco adequado a escritas transacionais | Junções fracas, duplicação | Agregações globais, escala |

#### 4.2 Escolha pelo cenário (didático)

| Cenário | Tipo mais adequado | Justificativa |
|---|---|---|
| Sistema de ordens de serviço com regras estritas e transações | Relacional | Integridade e ACID |
| Painel analítico de produção por região, período e produto | Multidimensional (DW/OLAP) | Agregação por dimensões sobre histórico |
| Catálogo de equipamentos com atributos que variam por tipo | Documentos | Estrutura heterogênea |
| Mapeamento de dependências entre ativos, rotas e fornecedores; detecção de fraude em redes | Grafos | Navegação por relacionamentos |
| Cache de sessões | Chave-valor (em memória) | Latência mínima |

*(Cenários hipotéticos; não descrevem sistemas reais da Transpetro.)* O princípio de **persistência poliglota** reconhece que uma organização pode usar vários tipos, cada um para o que faz melhor.

#### 4.3 Armadilhas na diferenciação

- Banco de **documentos** **não** é o mesmo que "banco de documentos de texto/arquivos": armazena documentos estruturados (JSON/BSON).
- Banco de **grafos** **não** é banco de "gráficos" (charts): trata de **grafos** (nós e arestas).
- Os bancos de documentos **não** utilizam, em geral, SQL como linguagem nativa nem se estruturam em relações matemáticas normalizadas — características do relacional. Muitos já oferecem interfaces SQL-like, mas isso não define o tipo.
- Bancos **multidimensionais** não são apenas "bancos grandes": sua organização é por **dimensões e fatos**.

### 5. Comparações conceituais

| Conceito A | Conceito B | Diferença principal |
|---|---|---|
| ACID | BASE | Consistência forte e transações × disponibilidade e consistência eventual |
| Consistência (ACID) | Consistência (CAP) | Regras válidas × todos os nós veem o mesmo dado |
| SQL | NoSQL | Modelo e linguagem relacionais × modelos variados, esquema flexível |
| Documento | Grafo | Dados autocontidos aninhados × entidades ligadas por arestas |
| Colunar (famílias) | Orientado a colunas (analítico) | Modelo de dados NoSQL × formato físico de armazenamento |
| Banco em memória | *Buffer pool* de SGBD | RAM como armazenamento primário × RAM como cache do disco |
| Escala vertical | Escala horizontal | Aumentar a máquina × adicionar nós |

### 6. Aplicações e cenários

**Cenário (didático): gestão de ativos com muitos atributos distintos.** Equipamentos de tipos diferentes têm campos diferentes (bombas têm vazão; válvulas têm diâmetro). Um **banco de documentos** permite registrar cada tipo com seus campos. *Limitação:* relatórios cruzando muitos tipos podem exigir tratamento adicional; integridade referencial não é imposta automaticamente.

**Cenário (didático): análise de impacto de falhas.** Para saber quais processos são afetados se um componente falhar, um **grafo** de dependências permite percorrer relações transitivamente de modo natural; no relacional, exigiria junções recursivas.

### 7. Atenção para a prova

*Inferência técnica e recomendação pedagógica; sem atribuir frequência à banca.*

- Associar cada tipo à **sua característica típica**: documento → JSON/BSON, dados semiestruturados e flexibilidade; grafo → vértices e arestas e navegação eficiente entre nós relacionados; chave-valor → acesso por chave; colunar → escala de escrita e famílias de colunas; relacional → SQL, relações, normalização, chaves estrangeiras.
- Atenção a alternativas que **atribuem a um tipo a característica de outro** (por exemplo, dizer que documentos "enfatizam normalização e chaves estrangeiras" ou que usam vértices/arestas).
- Em consultas de grafo, observar o **sentido da aresta** e o **tipo de relacionamento** pedido.
- Banco em memória: lembrar o ponto **durabilidade** (depende de log/snapshot/replicação).
- Cuidado com absolutos: "NoSQL não suporta transações" é incorreto; muitos suportam em escopo limitado.
- *Evidência histórica (amostra de duas provas):* a Prova 6 de 2023 (Q46, Q48) cobrou a característica típica de bancos de documentos e uma consulta em Cypher; o item 1.20 não apareceu nas duas provas catalogadas; o NoSQL aparece nos programas de 2018 e 2023, sem que isso permita inferir frequência.

### 8. Síntese

- **NoSQL:** esquema flexível, escala horizontal, modelos específicos; CAP (C, A, P) e BASE.
- **Tipos:** chave-valor, documento (JSON/BSON), famílias de colunas, grafo (nós/arestas).
- **Memória:** RAM como armazenamento primário; durabilidade por snapshot, log e replicação; custo e capacidade como limites.
- **Diferenciação:** relacional (tabelas/SQL/ACID/OLTP), multidimensional (cubos/OLAP), documentos (JSON, flexível), grafos (arestas/relacionamentos).

### 9. Pontos para a futura produção de questões (registro)

Conceitos: CAP/BASE; tipos NoSQL; banco em memória; critérios de diferenciação. Distinções: ACID×BASE; documento×grafo; colunar×orientado a colunas; memória×cache. Interpretação: escolher o banco adequado a um cenário; interpretar consulta Cypher/JSON.

### 10. Referências

Bibliografia e documentação de apoio (itens marcados **verificado** foram conferidos em catálogos online em 2026-10-31; os demais, **não verificados** — edição/ano/páginas pendentes):

- BREWER, E. "Towards Robust Distributed Systems" (conferência PODC, 2000) — origem da conjectura CAP; GILBERT, S.; LYNCH, N. "Brewer's conjecture and the feasibility of consistent, available, partition-tolerant web services" (2002).
- SADALAGE, P. J.; FOWLER, M. *NoSQL Distilled*. Addison-Wesley, 2012 — **verificado**.
- ELMASRI, R.; NAVATHE, S. B. *Sistemas de Banco de Dados*. São Paulo: Pearson (edição em português localizada: 6ª ed., 2011; o original em inglês, *Fundamentals of Database Systems*, 7ª ed., consta nos catálogos com ano 2015, 2016 ou 2017) — **verificado** em catálogos online.
- Documentação oficial dos produtos citados (MongoDB, Neo4j/Cypher, Redis, Apache Cassandra) — versões não especificadas nesta etapa.
- Edital Transpetro nº 04/2026.4, Anexo IV, itens 1.18, 1.20 e 1.23.


---

## Integração de Dados: ETL, Transferência de Arquivos e Integração via Base de Dados

**Módulo:** M01 — Arquitetura de Dados
**Texto oficial (Anexo IV):** 1.19 "Integração dos dados (ETL, Transferência de Arquivos e Integração via Base de Dados)".
**Escopo:** A para os três estilos citados (ETL, transferência de arquivos, integração via base de dados). A seção 7 (APIs e mensageria) é **complemento B**, incluído para permitir comparação; não é exigência literal do edital.
**Status:** `VALIDADO` (aprovado pelo usuário em 2026-10-31; referências não verificadas listadas em `docs/qualidade/relatorio-producao-modulo-01.md`).

**Objetivos de aprendizagem.** (1) Explicar por que e como integrar dados de sistemas diferentes; (2) descrever as fases do ETL e as estratégias de extração e carga; (3) diferenciar ETL de ELT; (4) caracterizar a transferência de arquivos e a integração via base de dados, com vantagens e riscos; (5) escolher o estilo adequado a um cenário.

---

### 1. Introdução

Organizações possuem **muitos sistemas** (ERP, manutenção, financeiro, sensores, planilhas), cada um com seus dados, formatos e regras. **Integrar dados** é fazer informações de fontes distintas circularem e serem combinadas de forma consistente. As razões: consolidar visão única (relatórios, *data warehouse*), sincronizar sistemas operacionais, migrar dados, alimentar análises. O item 1.19 cita três estilos clássicos: **ETL**, **transferência de arquivos** e **integração via base de dados**.

*Relações:* o destino típico do ETL é um *data warehouse*/*data lake* (arquivo `09`; OLAP e DW no Módulo 7); a qualidade de dados e os metadados (arquivo `10`) são centrais; a integridade entre bancos distintos não é garantida pelo SGBD (arquivo `03`).

### 2. ETL (*Extract, Transform, Load*)

#### 2.1 Visão geral

**ETL** é o processo de **extrair** dados de fontes, **transformá-los** (limpar, padronizar, combinar) e **carregá-los** em um destino analítico ou operacional.

```text
 Fontes                     Área de preparação (staging)              Destino
 ┌────────┐   Extração      ┌───────────────────────────┐  Carga   ┌───────────┐
 │ ERP    │────────────────►│  dados brutos             │          │ Data      │
 │ Sensores│                │  ↓ limpeza / padronização │─────────►│ Warehouse │
 │ Arquivos│                │  ↓ integração / regras    │          │ / Marts   │
 └────────┘                 │  ↓ chaves, histórico      │          └───────────┘
                            └───────────────────────────┘
```

#### 2.2 Extração

Objetivo: obter dados das fontes **sem prejudicar** os sistemas operacionais.

| Estratégia | Descrição | Observações |
|---|---|---|
| **Completa** (*full*) | Lê toda a fonte a cada execução | Simples; custosa em grandes volumes |
| **Incremental por marca** | Usa coluna de data/versão (`data_alteracao`) | Exige que a fonte mantenha a marca; não detecta exclusões físicas |
| **Captura de dados de mudança (CDC)** | Identifica inserções/alterações/exclusões por **log do banco**, gatilhos ou comparação | Baixo impacto na fonte (log-based); mais complexo |
| **Por mensagem/evento** | A fonte publica eventos | Aproxima-se de integração em tempo real |

Também é preciso tratar **janelas** de extração (horários de baixa carga), **conectividade** com diferentes tipos de fonte (bancos, arquivos, APIs) e **consistência** (extrair de um instante consistente).

#### 2.3 Transformação

Principais atividades:

| Atividade | Exemplos |
|---|---|
| **Limpeza** | Remover/corrigir nulos, duplicatas, valores inválidos |
| **Padronização** | Unificar formatos (datas, unidades, códigos, caixa alta/baixa) |
| **Conversão de tipos** | Texto → data/número |
| **Integração/conciliação** | Casar o mesmo cliente de sistemas diferentes (chave de negócio, *match*) |
| **Enriquecimento/derivação** | Cálculo de campos, lookup em tabelas de referência |
| **Agregação** | Resumos por período/dimensão |
| **Atribuição de chaves substitutas** | Substitui chaves de negócio por chaves internas do DW |
| **Tratamento de histórico** | Preservar versões de dimensões (dimensões lentamente mutáveis — arquivo `09`) |
| **Aplicação de regras de negócio** | Validações e classificações |

Dados que falham nas validações são desviados para **tabelas/arquivos de rejeição** com motivo, para análise e reprocessamento, em vez de serem perdidos ou carregados incorretos.

#### 2.4 Carga

| Estratégia | Descrição |
|---|---|
| **Carga completa (*full load*)** | Substitui o conteúdo do destino |
| **Carga incremental** | Insere/atualiza somente o que mudou |
| **`INSERT`/`UPDATE`/`MERGE` (upsert)** | Atualiza o existente e insere o novo |
| **Carga em massa (*bulk load*)** | Gravação rápida, desativando temporariamente índices/restrições conforme o caso |
| **Idempotência** | Reexecutar a carga não duplica dados — propriedade desejável para recuperação |

#### 2.5 Área de preparação (*staging area*)

Área intermediária (tabelas ou arquivos) onde os dados extraídos são mantidos **temporariamente**, longe das fontes e do destino, para transformação, auditoria e reprocessamento. Em arquiteturas de DW é a camada que recebe os dados dos sistemas transacionais antes de transformá-los e carregá-los. Não é voltada ao usuário final.

#### 2.6 ETL × ELT

| Aspecto | **ETL** | **ELT** |
|---|---|---|
| Onde a transformação ocorre | Em servidor/ferramenta de ETL **antes** da carga | **No destino** (motor do DW/lake), após carga dos dados brutos |
| Dados brutos no destino | Normalmente não | Sim |
| Ajusta-se a | DW tradicional, volume moderado, regras complexas | Nuvem, grande volume, *data lakes*, poder de processamento do destino |
| Vantagem | Dados carregados já limpos | Flexibilidade, reprocessamento, aproveita paralelismo do destino |
| Risco | Gargalo no servidor de ETL | Dados brutos sensíveis armazenados; necessidade de governança |

#### 2.7 Execução, orquestração e operação

- **Lote (*batch*)** × **tempo real/micro-lote (*streaming*)**: o lote roda em janelas (diário, horário); o *streaming* processa eventos continuamente.
- **Orquestração:** agendamento e dependências entre tarefas; reinício de falhas; alertas.
- **Auditoria e rastreabilidade (*lineage*):** registro de origem, volumes, horários e erros — apoio aos metadados (arquivo `10`).
- **Desempenho:** paralelismo, particionamento, cargas incrementais, índices, conexão em massa.
- **Segurança:** dados sensíveis (LGPD) em trânsito e em repouso; acesso restrito.
- **Ferramentas:** existem ferramentas de ETL/ELT comerciais e livres; o edital não indica nenhuma.

### 3. Transferência de arquivos

#### 3.1 Conceito

Um sistema **gera um arquivo** (CSV, texto de largura fixa, XML, JSON, Parquet) com os dados, que é **transferido** e **lido/importado** por outro. É o estilo **mais simples e antigo**, muito comum entre organizações e legados.

#### 3.2 Características

| Aspecto | Observação |
|---|---|
| Acoplamento | Baixo em tecnologia (basta combinar o **formato**), mas há acoplamento ao *layout* do arquivo |
| Modo | Geralmente **assíncrono em lote** (arquivo diário, por exemplo) |
| Transporte | SFTP/FTPS, compartilhamento de rede, armazenamento de objetos, *managed file transfer* |
| Contrato | Layout, delimitadores, codificação (UTF-8, ISO-8859-1), formato de datas e decimais, nomenclatura |
| Vantagens | Simplicidade, independência de plataformas, bom para grandes volumes e migrações, fácil de auditar |
| Limitações | **Latência** (dados defasados); detecção de arquivos incompletos/duplicados; erros de layout; ausência de transação entre sistemas; manutenção do contrato |

#### 3.3 Boas práticas

- Definir **contrato de dados** (layout, versão, obrigatoriedade).
- Incluir **arquivo de controle** ou rodapé com contagem de registros e *checksum*, para validar integridade.
- Nomear por data/sequência, garantir **idempotência** (não processar duas vezes) e tratar **arquivos parciais** (gravar com nome temporário e renomear ao final).
- Validar na entrada, registrar rejeições, arquivar os originais.
- Proteger dados sensíveis (criptografia, controle de acesso).

### 4. Integração via base de dados

#### 4.1 Conceito

Os sistemas **compartilham o mesmo banco** ou acessam diretamente o banco uns dos outros. Variações: **banco compartilhado** (várias aplicações leem/escrevem nas mesmas tabelas); **acesso direto** do consumidor ao banco do produtor (*database link*, visões expostas); **replicação** ou **federação** de dados; **tabelas de intercâmbio** (uma aplicação grava, outra lê).

#### 4.2 Características

| Aspecto | Observação |
|---|---|
| Latência | Baixa; dados atuais disponíveis imediatamente |
| Consistência | Pode se apoiar em **transações e integridade do SGBD** quando o banco é o mesmo |
| Vantagens | Simplicidade técnica, sem formatos intermediários, consultas diretas, relatórios |
| **Limitações** | **Acoplamento forte ao esquema** (mudar uma tabela quebra os consumidores); contenção/concorrência; **desempenho** das aplicações operacionais afetado por consultas dos integradores; **segurança** (exposição de dados e de regras); dificuldade de evolução; viola o encapsulamento do sistema dono do dado |
| Mitigações | Expor **visões** ou um **esquema de integração** dedicado; permissões mínimas; réplicas de leitura; tabelas de intercâmbio versionadas |

*Exemplo didático:* o sistema de manutenção lê diretamente a tabela de equipamentos do ERP. Se o ERP alterar o tipo de uma coluna, a integração falha sem aviso. Alternativa: o ERP publica uma **visão** estável `v_equipamento_integracao`, que isola o consumidor de mudanças internas.

### 5. Comparação entre os estilos

| Critério | ETL | Transferência de arquivos | Integração via base de dados |
|---|---|---|---|
| Finalidade típica | Consolidar e transformar para análise | Troca simples entre sistemas, lotes, migração | Acesso imediato a dados de outro sistema |
| Latência | Lote ou micro-lote | Lote (horas/dias) | Tempo real/baixa |
| Acoplamento | Médio (conectores às fontes) | Baixo em tecnologia; contrato de layout | **Alto** (esquema) |
| Transformação | Central ao processo | Mínima ou no consumidor | Feita pelo consumidor ao ler |
| Qualidade de dados | Limpeza/validação integrada | Validação na importação | Depende do consumidor |
| Riscos | Complexidade, janelas, falhas de carga | Latência, arquivos incompletos/duplicados | Quebra por mudança de esquema, carga sobre o operacional |
| Escopo | Dados de vários sistemas para DW/lake | Dois sistemas ou lote | Mesmo banco ou bancos acessíveis |

### 6. Comparações conceituais

| Conceito A | Conceito B | Diferença principal |
|---|---|---|
| ETL | ELT | Transforma antes de carregar × carrega e transforma no destino |
| Extração completa | Extração incremental | Lê tudo × lê apenas mudanças |
| *Staging area* | Data warehouse | Área temporária de preparação × repositório analítico para o usuário |
| Lote | *Streaming* | Janelas periódicas × fluxo contínuo |
| Transferência de arquivos | Integração via BD | Assíncrona e desacoplada por contrato × direta e acoplada ao esquema |
| Replicação | ETL | Cópia (idealmente fiel) para disponibilidade/leitura × transformação para novo propósito |

### 7. Complemento (B): APIs e mensageria

*Esta seção não corresponde a item literal do edital.* Dois outros estilos de integração ajudam a contrastar os três acima: **chamada remota/API** (um sistema chama o serviço de outro de forma síncrona, por exemplo REST) e **mensageria** (sistemas trocam mensagens por filas/tópicos, de modo assíncrono e desacoplado no tempo). A classificação clássica de estilos de integração (transferência de arquivos, banco de dados compartilhado, chamada de procedimento remoto e mensageria) vem da literatura de padrões de integração corporativa.

### 8. Aplicações e cenários

**Cenário (didático): consolidação para um painel gerencial.** Dados de manutenção (sistema A), custos (ERP) e leituras de sensores (sistema C) precisam alimentar um painel. *Abordagem:* ETL noturno com extração incremental por data de alteração; *staging* para conciliar equipamentos pelo código; validação e tabela de rejeição; carga em dimensões e fatos do DW. *Limitação:* o painel reflete o estado até a última carga; para tempo real, considerar CDC/*streaming*.

**Cenário (didático): fornecedor externo envia dados diariamente.** Opta-se por **transferência de arquivos** com contrato de layout, arquivo de controle e SFTP. *Risco:* arquivo incompleto; mitigação com nome temporário/rename e verificação da contagem.

**Cenário (didático): dois módulos do mesmo sistema.** Módulos que já compartilham o mesmo banco usam **integração via base de dados**, com transações e integridade. *Cuidado:* mudanças de esquema exigem coordenação.

### 9. Atenção para a prova

*Inferência técnica e recomendação pedagógica; sem atribuir frequência à banca.*

- Memorizar a **ordem e o papel** das fases: **E**xtração, **T**ransformação, **C**arga; a transformação é **entre** extrair e carregar (no ELT é **depois** da carga).
- **Staging area:** camada de preparação entre o sistema transacional e o DW; não é o modelo dimensional nem a área de apresentação.
- Integração via banco de dados: **acoplamento forte ao esquema** é o principal ponto fraco; transferência de arquivos: **latência/lote** e contrato de layout.
- Cuidado com afirmações como "ETL é sempre em tempo real" ou "integração via arquivo garante consistência transacional entre sistemas" — incorretas por serem absolutas.
- *Evidência histórica (amostra de duas provas):* a Prova 15 de 2018 (Q22) tratou da camada de preparação (*data staging area*) usada para transferir e transformar dados dos sistemas transacionais para o DW. As provas catalogadas não trouxeram questão específica sobre transferência de arquivos ou integração via banco; duas provas não permitem inferir frequência.

### 10. Síntese

- **Integração:** ETL, transferência de arquivos, integração via base de dados (itens do edital).
- **ETL:** extrair (completa/incremental/CDC) → transformar (limpar, padronizar, integrar, derivar, chaves, histórico) → carregar (completa/incremental/upsert/bulk); *staging* intermediária; idempotência; rejeições.
- **ELT:** transforma no destino.
- **Arquivos:** simples, assíncrono, contrato de layout; latência; validar integridade.
- **Base de dados:** imediato, mas acoplado ao esquema; usar visões/esquemas de integração.

### 11. Pontos para a futura produção de questões (registro)

Conceitos: fases do ETL; *staging*; extração incremental/CDC; ELT; transferência de arquivos; integração via base. Distinções: ETL×ELT; arquivo×banco; completa×incremental. Interpretação: escolher o estilo para um cenário; identificar o risco principal de cada estilo.

### 12. Referências

Bibliografia de apoio (itens marcados **verificado** foram conferidos em catálogos online em 2026-10-31; os demais, **não verificados** — edição/ano/páginas pendentes):

- KIMBALL, R.; CASERTA, J. *The Data Warehouse ETL Toolkit*. Wiley.
- HOHPE, G.; WOOLF, B. *Enterprise Integration Patterns*. Addison-Wesley, 2003 (estilos de integração: transferência de arquivos, banco compartilhado, chamada remota, mensageria) — **verificado** (título, ano e os quatro estilos, por fontes secundárias).
- ELMASRI, R.; NAVATHE, S. B. *Sistemas de Banco de Dados*. São Paulo: Pearson (edição em português localizada: 6ª ed., 2011; o original em inglês, *Fundamentals of Database Systems*, 7ª ed., consta nos catálogos com ano 2015, 2016 ou 2017) — **verificado** em catálogos online.
- Edital Transpetro nº 04/2026.4, Anexo IV, item 1.19.


---

## Modelagem Dimensional, Data Lakes e Soluções para Big Data

**Módulo:** M01 — Arquitetura de Dados
**Textos oficiais (Anexo IV):** 1.7 "Modelagem dimensional"; 1.22 "Data Lakes e Soluções para Big Data".
**Escopo:** A. O item 1.7 tem **associação secundária** com o Módulo 7 (7.7 "Técnicas de modelagem e otimização de bases de dados multidimensionais"; 7.5 OLAP; 7.6 data warehouse). Aqui estão os **fundamentos da modelagem dimensional**; operações OLAP, cubos e otimização serão complementados no Módulo 7, sem repetir este conteúdo. *Decisão de organização:* embora a matriz aprovada tenha indicado inicialmente um arquivo do Módulo 7 para o item 1.7, o item é **principal do Módulo 1**, e por isso é coberto integralmente aqui.
**Status:** `VALIDADO` (aprovado pelo usuário em 2026-10-31; referências não verificadas listadas em `docs/qualidade/relatorio-producao-modulo-01.md`).

**Objetivos de aprendizagem.** (1) Distinguir modelagem relacional normalizada e dimensional; (2) projetar um esquema estrela com fato, dimensões e granularidade; (3) tratar histórico com dimensões lentamente mutáveis; (4) explicar o que são Big Data e Data Lakes, suas camadas e riscos; (5) comparar data lake e data warehouse.

---

### 1. Introdução

Os sistemas transacionais (OLTP) são modelados para **gravar com integridade** (normalização). Os sistemas analíticos (OLAP) precisam **ler e agregar grandes volumes** por assunto (vendas por região e mês). A **modelagem dimensional** organiza os dados para essa finalidade: simples de entender e rápida para consultas. O **Big Data** e os **Data Lakes** ampliam o panorama para volumes, velocidades e variedades que excedem as arquiteturas tradicionais.

*Relações:* a normalização (arquivo `04`) é o contraponto do modelo dimensional; o ETL (arquivo `08`) alimenta o DW e o lake; os bancos multidimensionais foram diferenciados no arquivo `07`; metadados e qualidade (arquivo `10`) sustentam a confiança nos dados.

### 2. Data Warehouse: base conceitual

Um **data warehouse (DW)** é um repositório **integrado, orientado a assuntos, histórico e não volátil** de dados, voltado ao apoio à decisão (definição clássica de Inmon). Um **data mart** é um subconjunto voltado a uma área ou processo (vendas, manutenção).

| Aspecto | OLTP (sistema operacional) | OLAP/DW |
|---|---|---|
| Objetivo | Registrar operações | Analisar e apoiar decisões |
| Dados | Atuais, detalhados | Históricos, integrados, frequentemente agregados |
| Modelo | Normalizado (3FN) | **Dimensional** (estrela/floco de neve) ou normalizado (abordagem corporativa) |
| Consultas | Simples, por chave, curtas | Complexas, agregadas, longas |
| Atualização | Contínua, por transação | Em lote por ETL (ou quase em tempo real) |
| Usuários | Operadores, aplicações | Analistas, gestores |

**Abordagens de construção (resumo):** a de **Inmon** (DW corporativo normalizado, depois *data marts*) e a de **Kimball** (conjunto de *data marts* dimensionais integrados por dimensões conformes — "arquitetura de barramento"). Ambas usam ETL e *staging* (arquivo `08`).

### 3. Modelagem dimensional (item 1.7)

#### 3.1 Elementos

| Elemento | Definição | Exemplo |
|---|---|---|
| **Fato** (tabela fato) | Registra **eventos/medições** de um processo de negócio, com medidas numéricas e chaves para as dimensões | Venda, ordem de serviço, leitura |
| **Medida** | Valor numérico do fato | Quantidade, valor, horas de parada |
| **Dimensão** | Contexto descritivo pelo qual se analisam os fatos ("por quê/quem/onde/quando/o quê") | Tempo, Equipamento, Local, Cliente |
| **Atributo de dimensão** | Característica descritiva usada para filtrar/agrupar | Mês, categoria, região |
| **Hierarquia** | Níveis de detalhe de uma dimensão | Dia → Mês → Trimestre → Ano; País → Estado → Cidade |
| **Granularidade (*grain*)** | **Nível de detalhe de uma linha da tabela fato** | "Uma linha por item de ordem de serviço por dia" |
| **Chave substituta** | Chave artificial e estável da dimensão | `sk_equipamento` |

**Regra fundamental:** declarar a **granularidade antes** de escolher dimensões e medidas; todas as medidas e dimensões da tabela fato devem ser consistentes com ela.

#### 3.2 Tipos de medidas

| Tipo | Pode ser somada em… | Exemplo |
|---|---|---|
| **Aditiva** | Todas as dimensões | Quantidade vendida |
| **Semiaditiva** | Algumas dimensões (não no tempo) | Saldo de estoque (somar entre depósitos, mas não entre dias) |
| **Não aditiva** | Nenhuma (calcular a partir de componentes) | Razões, percentuais, preços unitários |

#### 3.3 Esquemas

**Esquema estrela (*star schema*):** uma tabela fato central ligada diretamente a dimensões **desnormalizadas** (uma tabela por dimensão). Simples e rápido: poucas junções.

```text
            ┌────────────┐
            │  DIM_TEMPO │
            └─────▲──────┘
 ┌────────────┐   │    ┌─────────────────┐
 │DIM_EQUIP.  │◄──┼────┤  FATO_ORDEM     ├────►┌────────────┐
 └────────────┘        │ (sk_tempo,      │     │ DIM_LOCAL  │
                       │  sk_equip,      │     └────────────┘
 ┌────────────┐        │  sk_local,      │
 │DIM_TIPO_OS ├───────►│  tipo_os,       │
 └────────────┘        │  horas, custo)  │
                       └─────────────────┘
```

**Esquema floco de neve (*snowflake*):** dimensões **normalizadas** em subtabelas (Produto → Categoria → Departamento). Reduz redundância e espaço; exige mais junções e é mais complexo.

**Constelação de fatos (*fact constellation*) / galáxia:** várias tabelas fato que **compartilham dimensões conformes** (por exemplo, a dimensão Tempo comum a Vendas e Estoque).

| Critério | Estrela | Floco de neve |
|---|---|---|
| Dimensões | Desnormalizadas | Normalizadas |
| Junções | Menos | Mais |
| Redundância | Maior | Menor |
| Complexidade de consulta | Menor | Maior |
| Desempenho típico de leitura | Em geral melhor | Em geral pior |

#### 3.4 Tipos de tabelas fato

| Tipo | Registra | Exemplo |
|---|---|---|
| **Transacional** | Um evento por linha | Cada ordem de serviço |
| **Snapshot periódico** | Estado em intervalos regulares | Saldo diário de estoque |
| **Snapshot acumulativo** | Ciclo de vida de um processo (várias datas por linha, atualizadas) | Ordem de compra: criação, aprovação, entrega |
| **Sem fatos (*factless*)** | Ocorrência/cobertura sem medida | Presença em treinamento |

#### 3.5 Dimensões: técnicas importantes

- **Dimensão conforme:** compartilhada e com mesmo significado entre fatos/*data marts*; viabiliza análise integrada.
- **Dimensão degenerada:** identificador (número do documento) guardado na tabela fato, sem tabela de dimensão própria.
- **Dimensão *junk* (lixo):** agrupa indicadores/flags de baixa cardinalidade em uma só dimensão.
- **Dimensão multipapéis (*role-playing*):** a mesma dimensão (Tempo) usada várias vezes com papéis distintos (data de abertura, de fechamento).
- **Dimensão Tempo/Calendário:** tabela construída previamente, com atributos (mês, semestre, feriado).

#### 3.6 Dimensões lentamente mutáveis (SCD — *Slowly Changing Dimensions*)

Como tratar a mudança de um atributo de dimensão (ex.: um equipamento muda de área):

| Tipo | Tratamento | Histórico? |
|---|---|---|
| **Tipo 0** | Nunca altera | Mantém o original |
| **Tipo 1** | **Sobrescreve** o valor | Não preserva histórico |
| **Tipo 2** | Cria **nova linha** (nova chave substituta) com datas de vigência/versão | **Preserva** histórico completo |
| **Tipo 3** | Guarda valor anterior em **coluna adicional** | Histórico limitado (um nível) |
| Tipo 4/6 | Tipo 4: tabela separada (mini-dimensão ou tabela de histórico, conforme o autor); tipo 6: combinação dos tipos 1+2+3 | Variável |

#### 3.7 Processo de projeto (resumo)

1. Escolher o **processo de negócio** a modelar.
2. Declarar a **granularidade**.
3. Identificar as **dimensões**.
4. Identificar as **medidas (fatos)**.

*Exemplo didático.* Processo: ordens de manutenção. Granularidade: uma linha por ordem de serviço encerrada. Dimensões: Tempo (abertura/fechamento — papel duplo), Equipamento, Local, Tipo de manutenção, Técnico. Medidas: horas, custo, tempo de parada. Pergunta atendida: "qual o custo médio de manutenção corretiva por tipo de equipamento e trimestre?"

#### 3.8 Exemplo em SQL (esquema estrela)

```sql
SELECT t.trimestre, e.tipo_equipamento,
       SUM(f.custo) AS custo_total, AVG(f.horas) AS horas_medias
FROM   fato_ordem f
JOIN   dim_tempo t       ON t.sk_tempo = f.sk_tempo_fechamento
JOIN   dim_equipamento e ON e.sk_equipamento = f.sk_equipamento
WHERE  t.ano = 2026
GROUP BY t.trimestre, e.tipo_equipamento;
```

*Leitura:* a consulta filtra por atributo da dimensão (ano), agrupa por atributos de duas dimensões e agrega medidas da fato — o padrão típico do modelo dimensional.

### 4. Big Data e Data Lakes (item 1.22)

#### 4.1 Big Data

**Big Data** designa conjuntos de dados cujo **volume, velocidade e variedade** exigem tecnologias e arquiteturas além das tradicionais. Caracterização comum (os "Vs"):

| V | Significado |
|---|---|
| **Volume** | Grande quantidade de dados |
| **Velocidade** | Taxa de geração e necessidade de processamento rápido (tempo real) |
| **Variedade** | Dados estruturados, semiestruturados e não estruturados |
| **Veracidade** | Qualidade/confiabilidade dos dados |
| **Valor** | Utilidade para o negócio |

(Os três primeiros são os mais difundidos; veracidade e valor são extensões frequentes na literatura, e há variações no número de "Vs".)

**Soluções e tecnologias típicas:** armazenamento distribuído e em **objetos** (sistemas de arquivos distribuídos, nuvem); processamento paralelo (ecossistema **Hadoop**: HDFS, MapReduce, YARN; **Apache Spark**); **bancos NoSQL** (arquivo `07`); plataformas de **streaming** (por exemplo, Apache Kafka) para ingestão contínua; formatos colunares e compactados (**Parquet, ORC**) e de serialização (**Avro**, JSON, CSV); mecanismos de consulta SQL sobre dados em arquivos; serviços gerenciados em nuvem. *Produtos citados apenas como exemplos.*

#### 4.2 Data Lake

**Data Lake** é um repositório centralizado que armazena **grandes volumes de dados em seu formato original (brutos)** — **estruturados, semiestruturados e não estruturados** — normalmente sobre armazenamento escalável e de baixo custo, para uso posterior por análises, aprendizado de máquina e relatórios.

Características essenciais:

- Armazena **todos os tipos** de dados (tabelas, JSON, logs, imagens, áudio, texto).
- Aplica **esquema na leitura** (*schema-on-read*): a estrutura é interpretada no momento da consulta; no DW, o esquema é definido na escrita (*schema-on-write*).
- **Não converte** automaticamente dados não estruturados em estruturados na ingestão: a transformação ocorre sob demanda ou em etapas posteriores.
- Baseado, em geral, em **armazenamento distribuído/objetos**, **não** apenas em sistemas de arquivos convencionais de servidor único.
- Atende desde engenheiros e cientistas de dados até analistas, com ferramentas diferentes.
- Apropriado a **dados brutos e históricos** de baixo custo por TB.

#### 4.3 Arquitetura em camadas (exemplo didático)

```text
Fontes ─► Ingestão (batch/streaming) ─► Zona BRUTA (dados originais)
                                           ─► Zona REFINADA (limpos/padronizados)
                                                ─► Zona CURADA/de consumo (modelada para uso)
                                                      ─► BI, relatórios, ciência de dados, ML
Transversais: catálogo de metadados, governança, segurança, qualidade, linhagem
```

A organização em zonas (também chamada, em alguns produtos, de camadas bronze/prata/ouro) é uma **prática de arquitetura**, não uma norma; os nomes variam.

#### 4.4 Riscos: o "pântano de dados" (*data swamp*)

Um lake sem **governança** — sem catálogo, metadados, qualidade, controle de acesso e responsabilidades — torna-se um depósito desorganizado do qual ninguém consegue extrair valor com confiança. Mitigações: catálogo de dados, políticas de ingestão, classificação de dados sensíveis (LGPD), controle de acesso, monitoração de qualidade e linhagem (arquivo `10`).

#### 4.5 Data Lake × Data Warehouse (e *lakehouse*)

| Critério | Data Lake | Data Warehouse |
|---|---|---|
| Dados | Brutos, de qualquer tipo | Estruturados, tratados e modelados |
| Esquema | Na leitura | Na escrita |
| Usuários típicos | Cientistas/engenheiros de dados, analistas avançados | Analistas de negócio, gestores |
| Custo de armazenamento | Menor por TB | Maior |
| Agilidade para novos dados | Alta | Menor (exige modelagem/ETL) |
| Confiabilidade/qualidade | Variável (exige governança) | Alta e curada |
| Processo | ELT (carrega primeiro, transforma depois) | ETL (transforma antes de carregar) |
| Consultas | Exploratórias e de grande volume | Consistentes, de alto desempenho |

O **lakehouse** combina armazenamento de baixo custo do lake com recursos de gestão e transações de DW (por meio de formatos de tabela transacionais); trata-se de abordagem de mercado, citada aqui apenas como contexto.

#### 4.6 Análise de Big Data: processamento

- **Lote:** processa grandes volumes históricos periodicamente.
- **Tempo real/*streaming*:** processa eventos à medida que chegam.
- **Arquiteturas mistas** (lote + fluxo) combinam os dois; há padrões conhecidos como Lambda e Kappa (apenas nomes de referência).

### 5. Comparações conceituais

| Conceito A | Conceito B | Diferença principal |
|---|---|---|
| Modelo normalizado (3FN) | Modelo dimensional | Reduz redundância para transações × organiza para leitura analítica |
| Fato | Dimensão | Evento medido (números) × contexto descritivo |
| Estrela | Floco de neve | Dimensões desnormalizadas × normalizadas |
| Medida aditiva | Não aditiva | Pode ser somada em todas as dimensões × não |
| SCD tipo 1 | SCD tipo 2 | Sobrescreve × preserva histórico por nova linha |
| Data warehouse | Data mart | Corporativo, integrado × focado em uma área |
| Data lake | Data warehouse | Dados brutos e esquema na leitura × dados tratados e esquema na escrita |
| Big Data | Dados "grandes" | Volume + velocidade + variedade, não só tamanho |
| Schema-on-read | Schema-on-write | Estrutura aplicada ao consultar × ao gravar |

### 6. Aplicações e cenários

**Cenário (didático): histórico de áreas.** Equipamentos mudam de área ao longo do tempo. Para analisar custos **por área vigente na época**, usa-se SCD **tipo 2** (nova linha na dimensão a cada mudança); com SCD tipo 1, todo o histórico passaria a mostrar a área atual. *Limitação:* a dimensão cresce; consultas precisam usar as chaves substitutas corretas.

**Cenário (didático): dados de sensores e documentos.** Uma organização quer guardar leituras de sensores, imagens de inspeção e relatórios em PDF para análises futuras ainda não definidas. Um **data lake** permite armazená-los brutos a custo baixo; as análises estruturadas posteriores alimentam dimensões no DW. *Risco:* sem catálogo e governança, o lake vira *data swamp*.

### 7. Atenção para a prova

*Inferência técnica e recomendação pedagógica; sem atribuir frequência à banca.*

- **Granularidade** define o que cada linha da fato representa; sem ela, medidas e dimensões ficam ambíguas.
- Estrela × floco de neve: lembrar qual **normaliza** dimensões.
- SCD: tipo 1 **não** guarda histórico; tipo 2 **guarda**.
- Data lake: aceita dados **estruturados, semiestruturados e não estruturados**; alternativas dizendo que é "adequado **apenas** para dados não estruturados", "inadequado para Big Data" ou que "converte dados não estruturados em estruturados na ingestão" são incorretas por absolutizar ou por atribuir processamento que não é próprio do conceito.
- Data warehouse: **consolida** dados de **diversas fontes** para **análises multidimensionais** e inclui dados **históricos**; alternativas como "apenas dados brutos sem relatórios" ou "só dados operacionais de curto prazo" são incorretas.
- *Evidência histórica (amostra de duas provas):* a Prova 6 de 2023 trouxe questão sobre data lakes (Q52) e sobre data warehouse (Q56, item do Módulo 7); a de 2018 sobre a *staging area* (Q22). Modelagem dimensional (item 1.7) **não** teve questão específica nas duas provas catalogadas. Duas provas não permitem inferir frequência; o edital de 2026 prevê o item.

### 8. Síntese

- **Dimensional:** fato (medidas) + dimensões (contexto); **granularidade** primeiro; estrela (desnormalizada) × floco de neve (normalizada); constelação com dimensões conformes.
- **Medidas:** aditiva, semiaditiva, não aditiva. **SCD:** 0, 1 (sobrescreve), 2 (nova linha), 3 (coluna), híbridos.
- **Big Data:** volume, velocidade, variedade (+ veracidade, valor); tecnologias distribuídas, NoSQL, *streaming*.
- **Data lake:** dados brutos de qualquer tipo; esquema na leitura; zonas; risco de *data swamp*; exige governança.
- **Lake × DW:** bruto × tratado; leitura × escrita; ELT × ETL.

### 9. Pontos para a futura produção de questões (registro)

Conceitos: DW, fato, dimensão, granularidade, estrela/floco de neve, SCD, Big Data, data lake, *schema-on-read*. Distinções: estrela×floco de neve; lake×DW; SCD 1×2; aditiva×não aditiva. Interpretação: desenhar um esquema estrela para um cenário; escolher entre lake e DW.

### 10. Referências

Bibliografia de apoio (itens marcados **verificado** foram conferidos em catálogos online em 2026-10-31; os demais, **não verificados** — edição/ano/páginas pendentes):

- KIMBALL, R.; ROSS, M. *The Data Warehouse Toolkit: The Definitive Guide to Dimensional Modeling*. 3rd ed. Wiley, 2013 (modelagem dimensional, SCD, tipos de fato) — **verificado**.
- INMON, W. H. *Building the Data Warehouse*. Wiley (definição de DW).
- WHITE, T. *Hadoop: The Definitive Guide*. O'Reilly.
- ELMASRI, R.; NAVATHE, S. B. *Sistemas de Banco de Dados*. São Paulo: Pearson (edição em português localizada: 6ª ed., 2011; o original em inglês, *Fundamentals of Database Systems*, 7ª ed., consta nos catálogos com ano 2015, 2016 ou 2017) — **verificado** em catálogos online.
- Edital Transpetro nº 04/2026.4, Anexo IV, itens 1.7 e 1.22.


---

## Metadados, Qualidade de Dados e Gestão de Dados Mestres e de Referência

**Módulo:** M01 — Arquitetura de Dados
**Textos oficiais (Anexo IV):** 1.6 "Metadados"; 1.21 "Qualidade de dados e gestão de dados mestres e de referência".
**Escopo:** A. O conceito de **governança de dados** (seção 5) é contexto **B** para integrar os itens; não é item literal do edital.
**Status:** `VALIDADO` (aprovado pelo usuário em 2026-10-31; referências não verificadas listadas em `docs/qualidade/relatorio-producao-modulo-01.md`).

**Objetivos de aprendizagem.** (1) Definir metadados, classificar seus tipos e citar onde são mantidos; (2) explicar as dimensões da qualidade de dados e o ciclo de melhoria; (3) diferenciar dados mestres, de referência, transacionais e metadados; (4) descrever a gestão de dados mestres (MDM) e de referência (RDM) e seus resultados.

---

### 1. Introdução

Dados só têm valor quando as pessoas **sabem o que significam**, **podem confiar neles** e **encontram uma única versão correta** das entidades essenciais do negócio. Três temas respondem a essas necessidades: **metadados** (o que os dados significam e de onde vêm), **qualidade de dados** (se estão corretos, completos e atualizados) e **gestão de dados mestres e de referência** (uma versão única e consistente das entidades e dos códigos compartilhados). Em conjunto, constituem a base da **governança de dados**.

*Relações:* o catálogo do SGBD (arquivo `05`) é a fonte de metadados técnicos; a engenharia reversa (arquivo `02`) os usa; o ETL (arquivo `08`) aplica regras de qualidade; data lakes sem metadados viram *data swamps* (arquivo `09`).

### 2. Metadados (item 1.6)

#### 2.1 Definição

**Metadados** são **dados que descrevem outros dados**: sua estrutura, significado, origem, formato, regras, qualidade e uso. Exemplo (didático): para a coluna `pressao_bar` da tabela `leitura`, os metadados incluem nome, tipo `NUMERIC(8,2)`, unidade (bar), descrição, permite nulo?, origem (sensor X), responsável e política de retenção.

#### 2.2 Tipos

| Tipo | Descreve | Exemplos |
|---|---|---|
| **Técnicos** | Estrutura e implementação | Tabelas, colunas, tipos, chaves, índices, tamanhos, esquemas, mapeamentos ETL |
| **De negócio** | Significado e regras | Definição de termos, glossário, regras de negócio, classificação de sensibilidade, responsável (*data owner*) |
| **Operacionais** | Execução e uso | Datas/volumes de carga, erros de ETL, logs de acesso, estatísticas de uso |
| **De qualidade** | Medições de qualidade | Percentual de nulos, taxas de erro, regras violadas |
| **De proveniência/linhagem** | Origem e transformações | De qual sistema veio, que transformações sofreu |

Também se fala em metadados **descritivos** (para busca), **estruturais** (relações entre partes) e **administrativos** (direitos, preservação).

#### 2.3 Onde ficam

- **Catálogo/dicionário de dados do SGBD** (*system catalog*): tabelas internas que descrevem o próprio banco. Em bancos que seguem o padrão SQL, há o **`INFORMATION_SCHEMA`**; outros SGBDs têm visões próprias (por exemplo, `ALL_TABLES` em Oracle, `pg_catalog` no PostgreSQL).
- **Ferramentas de modelagem** e repositórios de modelos.
- **Dicionários e glossários** de dados e **catálogos de dados** (*data catalogs*), que reúnem metadados técnicos, de negócio e de linhagem de muitas fontes.
- **Repositórios de metadados** de ETL/BI.

```sql
-- Metadados técnicos via catálogo padrão (INFORMATION_SCHEMA)
SELECT table_name, column_name, data_type, is_nullable
FROM   information_schema.columns
WHERE  table_schema = 'public'
ORDER BY table_name, ordinal_position;
```

*Leitura:* a consulta **não lê os dados** das tabelas de negócio, e sim **informações sobre** elas. Metadados incluem estruturas, tipos e restrições; **não** incluem a quantidade total de vendas, senhas de usuários do sistema operacional, código-fonte de aplicativos ou *backups* — esses são dados, artefatos de aplicação ou cópias, não metadados do banco.

#### 2.4 Importância e usos

- **Compreensão e descoberta:** achar e entender dados (catálogo, glossário).
- **Engenharia reversa e documentação** (arquivo `02`).
- **Análise de impacto e linhagem:** antes de alterar uma coluna, saber o que depende dela.
- **Governança e conformidade:** classificar dados pessoais (LGPD), definir responsáveis.
- **Qualidade e integração:** registrar regras e mapeamentos.
- **Automação:** geradores de código, otimizador (estatísticas), ferramentas de BI.

*Padrões de referência (contexto):* a ISO/IEC 11179 trata de registros de metadados; o Dublin Core, de metadados descritivos de recursos; o *Common Warehouse Metamodel* (CWM, do OMG), de metadados de DW. Não são exigidos literalmente pelo edital.

### 3. Qualidade de dados (item 1.21)

#### 3.1 Definição

**Qualidade de dados** é o grau em que os dados são **adequados ao uso pretendido** ("*fitness for use*") e atendem aos requisitos do negócio. Dado "bom" para uma finalidade pode ser insuficiente para outra.

#### 3.2 Dimensões da qualidade

| Dimensão | Pergunta | Exemplo de problema |
|---|---|---|
| **Acurácia (exatidão)** | Representa corretamente a realidade? | Quantidade digitada errada |
| **Completude** | Todos os dados necessários estão presentes? | CPF em branco |
| **Consistência** | Os dados são coerentes entre si e entre sistemas? | Status "encerrada" com data de encerramento nula; áreas diferentes em dois sistemas |
| **Unicidade** | Há duplicatas da mesma entidade? | Mesmo fornecedor cadastrado duas vezes |
| **Validade (conformidade)** | Respeita formato, domínio e regras? | Data inexistente; UF inválida |
| **Atualidade (pontualidade)** | Está atualizado quando necessário? | Endereço antigo |
| **Integridade** | Relacionamentos e vínculos estão válidos? | Ordem referenciando equipamento inexistente (arquivo `03`) |
| **Razoabilidade/plausibilidade** | Os valores fazem sentido? | Pressão negativa impossível |

As listas de dimensões variam entre autores (DAMA, Wang e Strong, ISO/IEC 25012 para qualidade de dados em produtos); **use as definições dadas no enunciado**.

#### 3.3 Causas e consequências

Causas: entrada manual sem validação, ausência de padrões, múltiplos sistemas com cadastros duplicados, integrações mal projetadas, mudanças de processo não refletidas, falta de responsáveis. Consequências: decisões erradas, retrabalho, falhas operacionais, riscos regulatórios, perda de confiança em relatórios.

#### 3.4 Ciclo de gestão da qualidade (visão geral)

```text
Definir requisitos e regras ─► Perfilar (profiling) ─► Medir/avaliar
        ▲                                                  │
        │                                                  ▼
Prevenir e monitorar ◄──────── Corrigir/limpar (cleansing) ◄─ Analisar causas
```

- **Perfilamento (*data profiling*):** análise estatística dos dados (nulos, valores distintos, padrões, domínios, duplicatas, dependências).
- **Regras de qualidade:** validações formais (por exemplo, formato de CNPJ, domínio de valores, obrigatoriedade).
- **Limpeza (*data cleansing*):** correção, padronização, remoção de duplicatas (*deduplication*), enriquecimento.
- **Prevenção na origem:** validação na entrada de dados, listas controladas, restrições do banco (arquivo `03`), interfaces que impedem erros — **mais barata** que corrigir depois.
- **Monitoração contínua:** indicadores, painéis, alertas (**metadados de qualidade**).
- **Responsabilidades:** *data owner* (dono do dado, decide regras e acesso), *data steward* (curador, zela pela qualidade no dia a dia) e *data custodian* (responsável técnico).

### 4. Gestão de dados mestres e de referência (item 1.21)

#### 4.1 Tipos de dados: não confundir

| Tipo | Definição | Exemplos | Variação | Compartilhamento |
|---|---|---|---|---|
| **Dados mestres** (*master data*) | Dados sobre as **entidades centrais do negócio**, compartilhados por vários sistemas e processos | Cliente, fornecedor, produto/material, **equipamento**, local, funcionário | Mudam com pouca frequência | Muito alto |
| **Dados de referência** (*reference data*) | **Conjuntos de valores/códigos** usados para classificar e restringir outros dados | Países, UF, unidades de medida, moedas, status de ordem, tipos de equipamento | Muito pouca; mudanças geridas e versionadas | Muito alto |
| **Dados transacionais** | Registram eventos/operações | Ordem de serviço, pedido, leitura, pagamento | Constantes (alto volume) | Gerados por processos |
| **Metadados** | Descrevem os dados | Esquemas, glossário | — | — |

*Exemplo didático:* "Equipamento P-101" é dado **mestre**; "Status: em manutenção" vem de uma lista de **referência**; "Ordem de serviço 20260315, equipamento P-101, 3,5 h" é dado **transacional**; "a coluna `status` aceita os valores X, Y, Z" é **metadado**.

#### 4.2 Gestão de dados mestres (MDM — *Master Data Management*)

**MDM** é o conjunto de processos, políticas, governança e tecnologias para criar e manter uma **versão única, consistente e confiável (a "fonte única da verdade" ou *golden record*)** dos dados mestres da organização, usada por todos os sistemas.

Problemas que resolve: o mesmo cliente com cadastros divergentes em sistemas distintos; relatórios que não batem; processos que falham por cadastro incorreto.

Componentes e atividades:

| Atividade | Descrição |
|---|---|
| Identificação e modelagem | Quais entidades são mestras e quais atributos |
| **Correspondência e fusão (*match & merge*)** | Identificar registros que representam a mesma entidade (regras determinísticas ou probabilísticas) e consolidar o *golden record* |
| Qualidade e padronização | Limpeza, validação, enriquecimento |
| Hierarquias e relacionamentos | Estruturas organizacionais, famílias de produtos |
| Governança e *stewardship* | Papéis, fluxos de aprovação, auditoria |
| Distribuição/sincronização | Publicar o dado mestre para os sistemas consumidores |
| Ciclo de vida | Criação, alteração, inativação, arquivamento |

**Estilos de implementação (arquiteturas de MDM):**

| Estilo | Característica |
|---|---|
| **Registro (*registry*)** | Índice central que **aponta** para os dados que permanecem nas fontes; cria uma visão unificada sem copiar os dados |
| **Consolidação** | Copia e consolida dados em um hub para análise (leitura); a fonte continua sendo os sistemas de origem |
| **Coexistência** | Hub com o *golden record* sincronizado bidirecionalmente com os sistemas |
| **Centralizado/transacional** | O hub é a **fonte única** de criação e alteração; sistemas consomem |

#### 4.3 Gestão de dados de referência (RDM)

Gerir os **valores de domínio** compartilhados: cadastro único, **versionamento** e **vigência** das listas, **mapeamentos entre codificações** (código interno ↔ padrão externo), **fluxo de aprovação** de mudanças, **distribuição** aos sistemas. Padrões externos usuais: ISO 3166 (países) e ISO 4217 (moedas), entre outros.

Boas práticas: **um proprietário** para cada lista, histórico de mudanças, não "repetir" listas hard-coded em cada aplicação.

#### 4.4 Relação com ETL e DW

No DW, dados mestres tornam-se **dimensões conformes** (arquivo `09`); dados de referência alimentam atributos de dimensões e domínios. Sem MDM, a mesma entidade pode aparecer com chaves distintas em fatos diferentes.

### 5. Contexto: governança de dados (complemento B)

**Governança de dados** é o exercício de autoridade e controle (planejamento, monitoração e execução) sobre a gestão dos ativos de dados: políticas, padrões, papéis e responsabilidades (proprietário, curador), decisões e processos de qualidade, segurança e conformidade. Metadados, qualidade e MDM são **disciplinas** dentro de um programa de governança. O corpo de conhecimento de referência mais difundido é o **DAMA-DMBOK**. A **LGPD** (item 4.6 do edital, Módulo 4) impõe requisitos que dependem de metadados e de qualidade de dados (identificar dados pessoais, manter exatidão e atualização).

### 6. Comparações conceituais

| Conceito A | Conceito B | Diferença principal |
|---|---|---|
| Dado | Metadado | O fato registrado × a descrição do dado |
| Metadado técnico | Metadado de negócio | Estrutura/implementação × significado, regras e responsáveis |
| Dado mestre | Dado transacional | Entidade central, relativamente estável × evento, alto volume |
| Dado mestre | Dado de referência | Entidades do negócio × listas de valores/códigos que classificam |
| Acurácia | Validade | Corresponde à realidade × obedece formato/regra (um dado pode ser válido e inexato) |
| Completude | Unicidade | Nenhum dado faltando × nenhuma duplicata |
| Limpeza | Prevenção | Corrigir o existente × impedir o erro na origem |
| MDM | RDM | Entidades centrais × valores de domínio/códigos |
| MDM registro | MDM centralizado | Aponta para as fontes × passa a ser a fonte de criação |
| Governança de dados | Gestão de dados | Define políticas, papéis e decisões × executa as atividades operacionais |

### 7. Aplicações e cenários

**Cenário (didático): fornecedor duplicado.** Um fornecedor aparece com três cadastros (grafias diferentes) em ERP, compras e contratos. Efeitos: pagamentos duplicados, gasto consolidado incorreto. *Abordagem:* perfilamento para identificar duplicatas; regras de *match & merge* (CNPJ normalizado + nome); definição de um *golden record*; *steward* aprova fusões; prevenção com validação de CNPJ no cadastro. *Limitação:* alinhar processos e responsáveis é tão importante quanto a ferramenta.

**Cenário (didático): lista de tipos de equipamento.** Cada sistema mantém sua lista com códigos diferentes. Cria-se uma lista de **referência única**, com mapeamento entre códigos e versionamento; relatórios consolidados passam a agrupar corretamente.

**Cenário (didático): impacto de alteração.** Antes de renomear uma coluna, consulta-se o catálogo de metadados e a **linhagem** para localizar relatórios e cargas ETL dependentes.

### 8. Atenção para a prova

*Inferência técnica e recomendação pedagógica; sem atribuir frequência à banca.*

- Metadados = **dados sobre dados**: esquemas, tipos, restrições, descrições. Não são o conteúdo do negócio (vendas, senhas, código-fonte, backups).
- Distinguir **mestre × referência × transacional**: o enunciado costuma descrever uma situação e pedir a categoria.
- MDM busca **versão única e consistente** das entidades centrais; não é apenas um *backup* ou um DW.
- Dimensões de qualidade: ler a definição dada; **acurácia ≠ validade ≠ consistência**.
- Prevenir é mais eficaz que corrigir; limpeza isolada, sem tratar a causa, é paliativa.
- *Evidência histórica (amostra de duas provas):* a Prova 6 de 2023 (Q50) tratou de metadados em SGBD relacional. O item 1.21 (qualidade, dados mestres e de referência) **não** apareceu nas duas provas catalogadas; duas provas não permitem inferir frequência, e o edital de 2026 prevê o item.

### 9. Síntese

- **Metadados:** dados sobre dados (técnicos, de negócio, operacionais, de qualidade, linhagem); no catálogo do SGBD, dicionário/catálogo de dados.
- **Qualidade:** adequação ao uso; dimensões (acurácia, completude, consistência, unicidade, validade, atualidade, integridade, razoabilidade); ciclo: perfilar → medir → limpar → prevenir → monitorar.
- **Mestres:** entidades centrais compartilhadas; MDM: *golden record*, *match & merge*, estilos (registro, consolidação, coexistência, centralizado).
- **Referência:** listas de códigos/valores; RDM: versionamento, vigência, mapeamento.
- **Governança:** políticas, papéis (owner, steward, custodian) integrando as disciplinas.

### 10. Pontos para a futura produção de questões (registro)

Conceitos: metadados; dimensões de qualidade; dado mestre/referência/transacional; MDM/RDM. Distinções: mestre×referência; acurácia×validade; limpeza×prevenção; metadado×dado. Interpretação: classificar um dado em um cenário; identificar a dimensão de qualidade violada; escolher o estilo de MDM.

### 11. Referências

Bibliografia de apoio (itens marcados **verificado** foram conferidos em catálogos online em 2026-10-31; os demais, **não verificados** — edição/ano/páginas pendentes):

- DAMA International. *DAMA-DMBOK: Data Management Body of Knowledge*. 2nd ed. Technics Publications, 2017 — **verificado**.
- ISO/IEC 11179 (registros de metadados) e ISO/IEC 25012 (modelo de qualidade de dados) — partes e anos não especificados nesta etapa.
- LOSHIN, D. *Master Data Management*. Morgan Kaufmann.
- ELMASRI, R.; NAVATHE, S. B. *Sistemas de Banco de Dados*. São Paulo: Pearson (edição em português localizada: 6ª ed., 2011; o original em inglês, *Fundamentals of Database Systems*, 7ª ed., consta nos catálogos com ano 2015, 2016 ou 2017) — **verificado** em catálogos online.
- Edital Transpetro nº 04/2026.4, Anexo IV, itens 1.6 e 1.21.

