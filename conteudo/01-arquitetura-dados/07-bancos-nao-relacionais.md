---
modulo: 01-arquitetura-dados
arquivo: 07-bancos-nao-relacionais
itens_edital:
  - "1.18 Bancos de dados NoSQL"
  - "1.20 Banco de dados em memória"
  - "1.23 Diferenciação entre bancos relacionais, multidimensionais, documentos e grafos."
ids_matriz: ["E5-019", "E5-021", "E5-024"]
escopo: "A — conteúdo expresso no edital"
tipo_conteudo: "teoria"
status: "VALIDADO"
ultima_atualizacao: "2026-10-31"
---

# Bancos NoSQL, Bancos em Memória e Diferenciação entre Tipos de Bancos

**Módulo:** M01 — Arquitetura de Dados
**Textos oficiais (Anexo IV):** 1.18 "Bancos de dados NoSQL"; 1.20 "Banco de dados em memória"; 1.23 "Diferenciação entre bancos relacionais, multidimensionais, documentos e grafos."
**Escopo:** A. Nomes de produtos são **exemplos** e não fazem parte do edital.
**Status:** `VALIDADO` (aprovado pelo usuário em 2026-10-31; referências não verificadas listadas em `docs/qualidade/relatorio-producao-modulo-01.md`).

**Objetivos de aprendizagem.** (1) Explicar por que surgiram os bancos NoSQL e o que significam CAP e BASE; (2) caracterizar os quatro tipos principais (chave-valor, documento, colunar de famílias de colunas, grafo); (3) explicar o que é um banco em memória e suas implicações para durabilidade; (4) diferenciar bancos relacionais, multidimensionais, de documentos e de grafos, escolhendo o adequado a um cenário.

---

## 1. Introdução

Os SGBDs relacionais dominam sistemas transacionais, mas certas cargas exigem **escala horizontal massiva**, **esquemas flexíveis**, **altíssimas taxas de escrita**, **baixa latência** ou **navegação em redes de relacionamentos**. Os bancos **NoSQL** (usualmente lido como *Not Only SQL*) são uma família heterogênea de tecnologias criada para esses cenários. Os **bancos em memória** atacam o gargalo do disco. O item 1.23 pede o discernimento de quando usar cada tipo.

*Relações:* o modelo relacional (arquivo `03`) e o ACID (arquivo `06`) são o ponto de comparação; o modelo multidimensional é detalhado no arquivo `09` (modelagem dimensional) e no Módulo 7 (OLAP); a integração entre esses repositórios aparece no arquivo `08`.

## 2. Bancos de dados NoSQL (item 1.18)

### 2.1 Características gerais

- **Esquema flexível** ou ausente (*schema-on-read*): registros da mesma coleção podem ter estruturas diferentes.
- **Escalabilidade horizontal:** distribuir dados entre muitos nós de hardware comum, por **particionamento (*sharding*)** e **replicação**.
- **Modelos de dados específicos** (não apenas tabelas) e linguagens/APIs próprias; muitos também oferecem consulta tipo SQL.
- **Consistência frequentemente relaxada** em favor de disponibilidade e latência (consistência eventual), embora vários ofereçam transações ACID em escopo limitado.
- **Modelagem orientada às consultas:** projeta-se a estrutura conforme os padrões de acesso, aceitando **redundância** e **desnormalização**.

### 2.2 Teorema CAP e modelo BASE

O **teorema CAP** (Brewer; formalizado por Gilbert e Lynch) afirma que, em um sistema distribuído sujeito a **partições de rede**, é preciso escolher entre **Consistência** (todos os nós veem o mesmo dado atual) e **Disponibilidade** (toda requisição recebe resposta). **Partição (P)** é inevitável em redes reais; portanto a escolha prática é **CP** ou **AP** durante a partição.

| Letra | Significado |
|---|---|
| C — Consistency | Leituras refletem a escrita mais recente (consistência linear) |
| A — Availability | Todo nó que funciona responde |
| P — Partition tolerance | O sistema continua operando apesar de falhas de comunicação entre nós |

**BASE** (contraponto didático ao ACID): *Basically Available* (basicamente disponível), *Soft state* (estado pode mudar sem entrada, por propagação), *Eventual consistency* (consistência eventual: na ausência de novas escritas, as réplicas convergem). Não confunda com o "C" do ACID (arquivo `06`).

### 2.3 Tipos de bancos NoSQL

| Tipo | Modelo | Estrutura | Pontos fortes | Limitações | Exemplos de produtos* |
|---|---|---|---|---|---|
| **Chave-valor** | Pares chave → valor opaco | Dicionário distribuído | Latência mínima, simplicidade, cache, sessões | Consulta só por chave; sem relacionamentos | Redis, Amazon DynamoDB (também documento), Riak |
| **Documento** | Documentos autocontidos em **JSON/BSON/XML**, agrupados em *coleções* | Documentos aninhados, campos variáveis | Flexibilidade, dados semiestruturados, mapeamento natural a objetos, índices secundários e consultas por campos | Junções limitadas; duplicação de dados; consistência entre documentos | MongoDB, CouchDB |
| **Colunar de famílias de colunas** (*wide-column*) | Linhas identificadas por chave, com famílias de colunas dinâmicas | Tabela esparsa, particionada por chave | Altíssimas taxas de escrita, séries temporais, escala massiva | Modelagem rígida por consulta; consultas ad hoc limitadas | Apache Cassandra, Apache HBase |
| **Grafo** | **Vértices (nós)** e **arestas (relacionamentos)**, ambos com propriedades | Rede de entidades | Navegação por relacionamentos profundos, caminhos, recomendações, detecção de fraude | Menos indicado para agregações em grandes conjuntos; escala horizontal mais difícil | Neo4j, Amazon Neptune |

*Produtos citados apenas como exemplos; classificações podem ser multimodelo.

**Atenção à terminologia:** o **colunar de famílias de colunas** (Cassandra/HBase) **não** é o mesmo que o armazenamento **orientado a colunas** de bancos analíticos (formato físico que guarda cada coluna em separado, usado em *data warehouses*). Ambos usam a palavra "coluna", mas são conceitos distintos.

### 2.4 Exemplos

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

### 2.5 Modelagem e consultas em NoSQL

- Em documentos: decidir **incorporar** (leituras rápidas, dados que se leem juntos, relação 1:poucos) ou **referenciar** (dados grandes, compartilhados, relação N:N).
- Em chave-valor e colunar: projetar a **chave** para os acessos principais (chave de partição + chave de ordenação).
- Em grafo: modelar entidades como nós e vínculos como arestas, com propriedades em ambos.
- Em geral, **consultas arbitrárias (ad hoc) e junções** são mais caras ou limitadas que no relacional.

## 3. Bancos de dados em memória (item 1.20)

### 3.1 Conceito

**Banco de dados em memória (*in-memory database*, IMDB)** mantém o conjunto de dados de trabalho **na memória principal (RAM)** em vez de depender de armazenamento em disco como meio primário. Isso elimina grande parte da latência de E/S de disco e permite estruturas de dados e algoritmos otimizados para memória.

### 3.2 Como tratam durabilidade

A memória é **volátil**. Para preservar a durabilidade (D de ACID) ou reduzir perdas, usam-se, isoladamente ou combinados:

| Mecanismo | Descrição |
|---|---|
| **Instantâneos (*snapshots*/checkpoints)** | Cópias periódicas do estado para disco |
| **Log de transações / *append-only* em disco** | Registro das operações para reaplicar após falha |
| **Replicação** | Cópias em outros nós (síncrona ou assíncrona) |
| **Memória não volátil** | Hardware que preserva dados |

A garantia efetiva depende da configuração (por exemplo, sincronia do log): configurações assíncronas aceitam **perder as últimas operações** em caso de falha.

### 3.3 Vantagens, limitações e usos

| Vantagens | Limitações |
|---|---|
| Latência de microssegundos a poucos milissegundos | Custo por GB de RAM maior que disco |
| Alta vazão em leitura e escrita | Capacidade limitada pela memória (ou necessidade de *cluster*) |
| Ideal para cache, sessões, filas, rankings, painéis em tempo real, análises em tempo real | Risco de perda de dados sem log/replicação adequados |
| Estruturas de dados especializadas | Complexidade de operação e de recuperação |

**Observações:** o termo abrange **tanto** NoSQL em memória (por exemplo, Redis, Memcached — este último apenas como cache) **quanto** SGBDs relacionais/analíticos em memória (por exemplo, SAP HANA, Oracle TimesTen, VoltDB). *Banco em memória* **não** é sinônimo de NoSQL, nem de cache apenas: é uma característica de **armazenamento primário**. Também é diferente de usar o *buffer pool* de um SGBD tradicional, em que o disco continua sendo a base e a memória é um cache das páginas.

## 4. Diferenciação entre bancos relacionais, multidimensionais, de documentos e de grafos (item 1.23)

### 4.1 Quadro comparativo

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

### 4.2 Escolha pelo cenário (didático)

| Cenário | Tipo mais adequado | Justificativa |
|---|---|---|
| Sistema de ordens de serviço com regras estritas e transações | Relacional | Integridade e ACID |
| Painel analítico de produção por região, período e produto | Multidimensional (DW/OLAP) | Agregação por dimensões sobre histórico |
| Catálogo de equipamentos com atributos que variam por tipo | Documentos | Estrutura heterogênea |
| Mapeamento de dependências entre ativos, rotas e fornecedores; detecção de fraude em redes | Grafos | Navegação por relacionamentos |
| Cache de sessões | Chave-valor (em memória) | Latência mínima |

*(Cenários hipotéticos; não descrevem sistemas reais da Transpetro.)* O princípio de **persistência poliglota** reconhece que uma organização pode usar vários tipos, cada um para o que faz melhor.

### 4.3 Armadilhas na diferenciação

- Banco de **documentos** **não** é o mesmo que "banco de documentos de texto/arquivos": armazena documentos estruturados (JSON/BSON).
- Banco de **grafos** **não** é banco de "gráficos" (charts): trata de **grafos** (nós e arestas).
- Os bancos de documentos **não** utilizam, em geral, SQL como linguagem nativa nem se estruturam em relações matemáticas normalizadas — características do relacional. Muitos já oferecem interfaces SQL-like, mas isso não define o tipo.
- Bancos **multidimensionais** não são apenas "bancos grandes": sua organização é por **dimensões e fatos**.

## 5. Comparações conceituais

| Conceito A | Conceito B | Diferença principal |
|---|---|---|
| ACID | BASE | Consistência forte e transações × disponibilidade e consistência eventual |
| Consistência (ACID) | Consistência (CAP) | Regras válidas × todos os nós veem o mesmo dado |
| SQL | NoSQL | Modelo e linguagem relacionais × modelos variados, esquema flexível |
| Documento | Grafo | Dados autocontidos aninhados × entidades ligadas por arestas |
| Colunar (famílias) | Orientado a colunas (analítico) | Modelo de dados NoSQL × formato físico de armazenamento |
| Banco em memória | *Buffer pool* de SGBD | RAM como armazenamento primário × RAM como cache do disco |
| Escala vertical | Escala horizontal | Aumentar a máquina × adicionar nós |

## 6. Aplicações e cenários

**Cenário (didático): gestão de ativos com muitos atributos distintos.** Equipamentos de tipos diferentes têm campos diferentes (bombas têm vazão; válvulas têm diâmetro). Um **banco de documentos** permite registrar cada tipo com seus campos. *Limitação:* relatórios cruzando muitos tipos podem exigir tratamento adicional; integridade referencial não é imposta automaticamente.

**Cenário (didático): análise de impacto de falhas.** Para saber quais processos são afetados se um componente falhar, um **grafo** de dependências permite percorrer relações transitivamente de modo natural; no relacional, exigiria junções recursivas.

## 7. Atenção para a prova

*Inferência técnica e recomendação pedagógica; sem atribuir frequência à banca.*

- Associar cada tipo à **sua característica típica**: documento → JSON/BSON, dados semiestruturados e flexibilidade; grafo → vértices e arestas e navegação eficiente entre nós relacionados; chave-valor → acesso por chave; colunar → escala de escrita e famílias de colunas; relacional → SQL, relações, normalização, chaves estrangeiras.
- Atenção a alternativas que **atribuem a um tipo a característica de outro** (por exemplo, dizer que documentos "enfatizam normalização e chaves estrangeiras" ou que usam vértices/arestas).
- Em consultas de grafo, observar o **sentido da aresta** e o **tipo de relacionamento** pedido.
- Banco em memória: lembrar o ponto **durabilidade** (depende de log/snapshot/replicação).
- Cuidado com absolutos: "NoSQL não suporta transações" é incorreto; muitos suportam em escopo limitado.
- *Evidência histórica (amostra de duas provas):* a Prova 6 de 2023 (Q46, Q48) cobrou a característica típica de bancos de documentos e uma consulta em Cypher; o item 1.20 não apareceu nas duas provas catalogadas; o NoSQL aparece nos programas de 2018 e 2023, sem que isso permita inferir frequência.

## 8. Síntese

- **NoSQL:** esquema flexível, escala horizontal, modelos específicos; CAP (C, A, P) e BASE.
- **Tipos:** chave-valor, documento (JSON/BSON), famílias de colunas, grafo (nós/arestas).
- **Memória:** RAM como armazenamento primário; durabilidade por snapshot, log e replicação; custo e capacidade como limites.
- **Diferenciação:** relacional (tabelas/SQL/ACID/OLTP), multidimensional (cubos/OLAP), documentos (JSON, flexível), grafos (arestas/relacionamentos).

## 9. Pontos para a futura produção de questões (registro)

Conceitos: CAP/BASE; tipos NoSQL; banco em memória; critérios de diferenciação. Distinções: ACID×BASE; documento×grafo; colunar×orientado a colunas; memória×cache. Interpretação: escolher o banco adequado a um cenário; interpretar consulta Cypher/JSON.

## 10. Referências

Bibliografia e documentação de apoio (itens marcados **verificado** foram conferidos em catálogos online em 2026-10-31; os demais, **não verificados** — edição/ano/páginas pendentes):

- BREWER, E. "Towards Robust Distributed Systems" (conferência PODC, 2000) — origem da conjectura CAP; GILBERT, S.; LYNCH, N. "Brewer's conjecture and the feasibility of consistent, available, partition-tolerant web services" (2002).
- SADALAGE, P. J.; FOWLER, M. *NoSQL Distilled*. Addison-Wesley, 2012 — **verificado**.
- ELMASRI, R.; NAVATHE, S. B. *Sistemas de Banco de Dados*. São Paulo: Pearson (edição em português localizada: 6ª ed., 2011; o original em inglês, *Fundamentals of Database Systems*, 7ª ed., consta nos catálogos com ano 2015, 2016 ou 2017) — **verificado** em catálogos online.
- Documentação oficial dos produtos citados (MongoDB, Neo4j/Cypher, Redis, Apache Cassandra) — versões não especificadas nesta etapa.
- Edital Transpetro nº 04/2026.4, Anexo IV, itens 1.18, 1.20 e 1.23.
