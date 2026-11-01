---
modulo: 01-arquitetura-dados
arquivo: 01-fundamentos
itens_edital:
  - "1 (título do item) — Arquitetura de Dados"
  - "1.1 a 1.5 e 1.13 (apoio conceitual; desenvolvidos nos arquivos 02, 03 e 05)"
ids_matriz: ["E5-001", "C5-001"]
escopo: "B — material complementar (C5-001), fora da contagem oficial"
tipo_conteudo: "teoria"
status: "VALIDADO"
ultima_atualizacao: "2026-10-31"
---

# Fundamentos de Dados e Bancos de Dados

**Módulo:** M01 — Arquitetura de Dados
**Classificação de escopo:** **B — fundamentação complementar** (C5-001). Este arquivo **não** corresponde a um subitem literal do Anexo IV; ele existe para que o estudante compreenda os subitens 1.1 a 1.23, que são os itens oficiais. Não o trate como exigência expressa do edital.
**Item oficial de referência:** item 1 — "Arquitetura de Dados" (título); subitens 1.1–1.5 e 1.13 como apoio.
**Nível:** fundamental, com pontes para o intermediário.
**Status:** `VALIDADO` (aprovado pelo usuário em 2026-10-31; referências não verificadas listadas em `docs/qualidade/relatorio-producao-modulo-01.md`) (gerado em 2026-10-31; revisão técnica e pedagógica ainda por concluir).

**Objetivos de aprendizagem.** Ao final, o estudante deve conseguir: (1) distinguir dado, informação e conhecimento; (2) explicar por que se usa um banco de dados em vez de arquivos soltos; (3) descrever os componentes de um sistema de banco de dados; (4) situar os conceitos do item 1 do edital em um mapa único.

---

## 1. Introdução e contextualização

Toda organização gera registros: pedidos, cadastros de equipamentos, ordens de manutenção, leituras de sensores, contratos. **Arquitetura de dados** é o conjunto de decisões sobre *como esses dados são representados, armazenados, relacionados, protegidos, integrados e disponibilizados* para os sistemas e para as pessoas. O item 1 do Anexo IV reúne, sob esse título, 23 subitens que vão da modelagem (como representar a realidade) até o armazenamento em larga escala (data lakes, Big Data), passando por linguagem (SQL), garantias (ACID), desempenho e qualidade.

Este arquivo apresenta o vocabulário comum. Os demais arquivos do módulo aprofundam cada subitem oficial.

## 2. Fundamentação teórica

### 2.1 Dado, informação e conhecimento (visão introdutória)

- **Dado:** representação de um fato, medida ou observação, sem contexto interpretativo. Exemplo (didático): o número `42,7` armazenado em uma coluna.
- **Informação:** dado interpretado em um contexto que lhe dá significado. Exemplo: "a pressão no ponto P-12 às 10h00 foi de 42,7 bar".
- **Conhecimento:** informação incorporada a experiência, regras e análise, que sustenta decisões. Exemplo: "pressões acima de um limite operacional exigem inspeção".

O item 7.1 do edital ("Dado, informação, conhecimento e inteligência") pertence ao Módulo 7 e será desenvolvido lá; aqui basta a distinção introdutória.

### 2.2 Por que bancos de dados? O problema dos arquivos isolados

Antes dos SGBDs, cada aplicação mantinha seus próprios arquivos. Isso gerava problemas clássicos:

| Problema | Descrição | Como o banco de dados responde |
|---|---|---|
| Redundância e inconsistência | O mesmo dado (ex.: endereço de fornecedor) repetido em vários arquivos, com valores divergentes | Armazenamento centralizado e integridade |
| Dependência programa–dados | Mudar o formato de um arquivo exige reescrever os programas | Independência de dados (item 1.15) |
| Dificuldade de acesso | Cada nova consulta exige novo programa | Linguagem de consulta declarativa (SQL, item 1.10) |
| Acesso concorrente | Dois usuários alterando o mesmo registro corrompem os dados | Controle de concorrência e transações (itens 1.14 e 1.16) |
| Falhas | Queda no meio de uma atualização deixa estado inconsistente | Recuperação e atomicidade |
| Segurança | Difícil restringir acesso por usuário/parte do dado | Controle de acesso do SGBD |

### 2.3 Componentes de um sistema de banco de dados

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

### 2.4 Níveis de modelagem: visão geral

A realidade é representada em etapas de abstração crescente de detalhes técnicos (desenvolvidas no arquivo `02-modelagem-dados.md`, itens 1.1 e 1.2):

| Nível | Pergunta que responde | Independe de SGBD? |
|---|---|---|
| Conceitual | *O que* precisa ser representado? | Sim |
| Lógico | *Como* isso se organiza em um modelo de dados (ex.: relacional)? | Em grande parte |
| Físico | *Como* será implementado em um SGBD específico (tipos, índices, partições)? | Não |

### 2.5 Modelos de dados e paradigmas

Um **modelo de dados** é um conjunto de conceitos para descrever estrutura, restrições e operações sobre os dados. O **modelo relacional** (item 1.3) domina os sistemas transacionais; modelos **NoSQL** (documento, chave-valor, colunar, grafo — item 1.18) atendem a outros requisitos; o modelo **multidimensional** (item 1.7) apoia análise. O item 1.23 pede justamente a diferenciação entre bancos relacionais, multidimensionais, de documentos e de grafos.

### 2.6 OLTP e OLAP em uma linha

- **OLTP** (*Online Transaction Processing*): muitas operações curtas de leitura/escrita (registrar pedido). Prioriza consistência e rapidez por transação.
- **OLAP** (*Online Analytical Processing*): consultas analíticas sobre grandes volumes históricos. Prioriza leitura agregada.

Essa distinção explica por que os dados são modelados de formas diferentes para cada uso (normalização × modelagem dimensional).

## 3. Mapa do item 1 do edital

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

## 4. Exemplo didático (hipotético)

Uma empresa de logística opera um sistema de manutenção. Um técnico registra uma **ordem de serviço** (dado), o sistema relaciona a ordem ao equipamento e ao responsável (informação) e um gestor decide antecipar revisões ao perceber que determinado tipo de equipamento acumula falhas (conhecimento). Para isso funcionar, é preciso (a) modelar equipamento, ordem e responsável; (b) garantir que uma ordem nunca aponte para equipamento inexistente (integridade); (c) permitir que várias pessoas registrem ordens simultaneamente sem corromper os dados (transações). *O cenário é ilustrativo e não descreve nenhum sistema real da Transpetro.*

## 5. Comparações conceituais

| Conceito A | Conceito B | Diferença principal |
|---|---|---|
| Banco de dados | SGBD | O BD é o conjunto de dados; o SGBD é o software que o gerencia |
| Dado | Metadado | O metadado descreve o dado (nome, tipo, origem, restrições) |
| Modelo conceitual | Modelo físico | O conceitual descreve o negócio sem tecnologia; o físico descreve a implementação em um SGBD |
| OLTP | OLAP | Transações curtas e atuais × consultas analíticas sobre histórico |

## 6. Atenção para a prova

*(Conceitual; não decorre de frequência de cobrança.)*

- Distinguir "banco de dados" de "SGBD": alternativas que atribuem ao banco o papel de software gerenciador são incorretas.
- Metadado é dado *sobre* dado, não "dado secundário" ou "dado de menor valor".
- Afirmações absolutas ("apenas", "somente", "exclusivamente") sobre tipos de banco costumam ser incorretas por ignorar exceções; avalie sempre o escopo do enunciado.
- *Evidência histórica:* nas duas provas analisadas (Transpetro 2018 e 2023; ver `docs/estrategia/comparativo-2018-2023.md`) há questões sobre metadados e sobre SGBD. Duas provas não permitem inferir frequência nem tendência da banca.

## 7. Síntese

- Dado → informação → conhecimento: crescente interpretação e contexto.
- Banco de dados resolve redundância, dependência programa–dados, concorrência, falhas e segurança.
- Sistema de BD = dados + SGBD + metadados + aplicações.
- Modelagem em três níveis: conceitual → lógico → físico.
- O item 1 do edital cobre modelagem, modelo relacional, normalização, SQL, ACID, desempenho, NoSQL, integração, dimensional, qualidade e Big Data.

## 8. Referências

Bibliografia de apoio (itens marcados **verificado** foram conferidos em catálogos online em 2026-10-31; os demais, **não verificados** — edição/ano/páginas pendentes):

- ELMASRI, R.; NAVATHE, S. B. *Sistemas de Banco de Dados*. São Paulo: Pearson (edição em português localizada: 6ª ed., 2011; o original em inglês, *Fundamentals of Database Systems*, 7ª ed., consta nos catálogos com ano 2015, 2016 ou 2017) — **verificado** em catálogos online.
- SILBERSCHATZ, A.; KORTH, H. F.; SUDARSHAN, S. *Database System Concepts*. 7th ed. McGraw-Hill, 2019 — **verificado** (há edição em português com outro título/editora, não verificada).
- Edital Transpetro nº 04/2026.4, Anexo IV (`docs/edital/anexo-IV-extraido.md`).
