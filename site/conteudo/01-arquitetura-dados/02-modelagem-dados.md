---
modulo: 01-arquitetura-dados
arquivo: 02-modelagem-dados
itens_edital:
  - "1.1 Modelagem de dados (conceitual, lógica e física)"
  - "1.2 Criação e alteração dos modelos lógico e físico de dados"
  - "1.8 Avaliação de modelos de dados"
  - "1.9 Técnicas de engenharia reversa para criação e atualização de modelos de dados"
ids_matriz: ["E5-002", "E5-003", "E5-009", "E5-010"]
escopo: "A — conteúdo expresso no edital"
tipo_conteudo: "teoria"
status: "VALIDADO"
ultima_atualizacao: "2026-10-31"
---

# Modelagem de Dados: Conceitual, Lógica e Física; Avaliação e Engenharia Reversa

**Módulo:** M01 — Arquitetura de Dados
**Textos oficiais (Anexo IV):** 1.1 "Modelagem de dados (conceitual, lógica e física)"; 1.2 "Criação e alteração dos modelos lógico e físico de dados"; 1.8 "Avaliação de modelos de dados"; 1.9 "Técnicas de engenharia reversa para criação e atualização de modelos de dados".
**Escopo:** A (itens expressos). Seções marcadas como *complemento* são fundamentação (B) e não exigência literal.
**Status:** `VALIDADO` (aprovado pelo usuário em 2026-10-31; referências não verificadas listadas em `docs/qualidade/relatorio-producao-modulo-01.md`).

**Objetivos de aprendizagem.** (1) Diferenciar os modelos conceitual, lógico e físico; (2) construir e interpretar diagramas entidade-relacionamento (DER) com cardinalidades mínima e máxima; (3) mapear um DER para o modelo relacional; (4) entender como modelos são criados, alterados e versionados; (5) avaliar a qualidade de um modelo; (6) explicar a engenharia reversa e suas limitações.

---

## 1. Introdução

Modelar dados é **representar, de forma controlada, a parte da realidade que interessa a um sistema**. Um bom modelo é a base do banco: erros de modelagem produzem inconsistência, retrabalho e consultas lentas, e custam muito mais para corrigir depois que o sistema está em produção. A modelagem é feita em três níveis de abstração (item 1.1), cria-se e altera-se o modelo ao longo do ciclo de vida (item 1.2), a qualidade do modelo é julgada por critérios (item 1.8) e modelos podem ser reconstruídos a partir de bancos existentes (item 1.9, engenharia reversa).

Relações com outros itens: o modelo lógico mais comum é o relacional (1.3, arquivo `03`); a qualidade do projeto lógico depende da normalização (1.4, arquivo `04`); o modelo físico é implementado com DDL (1.11, arquivo `05`); o modelo dimensional (1.7, arquivo `09`) é uma modelagem específica para análise.

## 2. Fundamentos: os três níveis de modelagem (item 1.1)

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

### 2.1 O modelo entidade-relacionamento (MER) e o DER

O MER, proposto por Peter Chen em 1976, descreve a realidade por **entidades**, **atributos** e **relacionamentos**. O DER é sua representação gráfica.

- **Entidade:** classe de objetos ou conceitos sobre os quais se guardam dados (Cliente, Equipamento, Ordem de Serviço). Uma **ocorrência** (ou instância) é um elemento da classe.
- **Atributo:** propriedade de uma entidade ou relacionamento. Tipos: *simples* × *composto* (endereço = rua + número…); *monovalorado* × *multivalorado* (telefones); *derivado* (idade, calculável a partir da data de nascimento); **identificador** (chave): atributo ou conjunto de atributos que distingue unicamente as ocorrências.
- **Relacionamento:** associação entre ocorrências de entidades. **Grau**: binário (2 entidades), ternário (3), unário/autorrelacionamento (a mesma entidade, p.ex. Funcionário gerencia Funcionário).
- **Entidade fraca:** entidade que não tem identificador próprio suficiente e depende de outra para se identificar (p.ex. Dependente em relação a Funcionário); a identificação é composta pelo identificador da entidade forte mais um discriminador.

### 2.2 Cardinalidades: máxima, mínima e participação

A **cardinalidade máxima** indica quantas ocorrências de uma entidade podem se associar a uma ocorrência da outra: **1:1**, **1:N**, **N:N** (ou M:N). A **cardinalidade mínima** (0 ou 1) indica se a participação é **opcional** (0) ou **obrigatória** (1). Juntas formam o par **(mín, máx)**: (0,1), (1,1), (0,N), (1,N).

> **Atenção à leitura da notação.** Em notações como a de Elmasri/Navathe e a de Heuser, o par (mín,máx) escrito **junto à entidade E** diz quantas vezes **cada ocorrência de E participa** do relacionamento. Existem autores/ferramentas que posicionam a cardinalidade no outro extremo da linha ("lê-se do outro lado"). **Em questões, siga sempre a convenção fornecida pelo enunciado ou a mais coerente com a figura.** Isso é uma recomendação pedagógica, não uma regra da banca.

Exemplo didático: *Departamento (1,N) — Lotação — (0,1) Funcionário* sob a convenção "junto à entidade": todo departamento tem pelo menos um funcionário e pode ter vários; cada funcionário está lotado em no máximo um departamento (a lotação é opcional).

**Participação total × parcial:** total = obrigatória (mínimo 1); parcial = opcional (mínimo 0).

### 2.3 Generalização e especialização

Uma **especialização** separa subclasses de uma entidade, que herdam atributos e relacionamentos da superclasse (Pessoa → Pessoa Física e Pessoa Jurídica). Duas restrições independentes descrevem a especialização:

| Restrição | Opções | Significado |
|---|---|---|
| Completude | **Total** / **Parcial** | Total: toda ocorrência da superclasse pertence a alguma subclasse. Parcial: pode existir ocorrência só da superclasse |
| Disjunção | **Disjunta** (exclusiva) / **Sobreposta** (compartilhada) | Disjunta: uma ocorrência pertence a no máximo uma subclasse. Sobreposta: pode pertencer a várias |

Combinações: total e exclusiva, total e compartilhada, parcial e exclusiva, parcial e compartilhada. Em conjuntos: subclasses disjuntas = conjuntos sem interseção; sobreposta = com interseção; total = a união das subclasses cobre a superclasse.

*Evidência observada (amostra de duas provas, sem inferência de frequência):* a prova Transpetro 2023 (Prova 6, Q21, Q22, Q27) e a de 2018 (Prova 15, Q40 e Q41) trouxeram questões que exigem interpretar diagramas E-R com cardinalidades, especializações e mapeamento para tabelas.

## 3. Desenvolvimento: criação e alteração dos modelos lógico e físico (item 1.2)

### 3.1 Criação do modelo lógico

Passos típicos a partir do conceitual: (1) mapear entidades e atributos; (2) escolher identificadores (chaves primárias) — preferir atributos estáveis e únicos; considerar **chave substituta** (*surrogate key*) quando o identificador natural é composto, mutável ou extenso; (3) mapear relacionamentos por cardinalidade (seção 4); (4) tratar atributos multivalorados e compostos; (5) tratar especializações; (6) verificar normalização (1FN a 3FN/BCNF); (7) definir restrições de integridade (NOT NULL, UNIQUE, CHECK, chaves estrangeiras).

### 3.2 Criação do modelo físico

Decisões: tipos de dados do SGBD (tamanho, precisão, `DATE` × `TIMESTAMP`), **índices** (chaves primárias e estrangeiras; colunas de filtro e junção), **particionamento** (por intervalo, lista, hash), esquema de nomes, parâmetros de armazenamento, política de **desnormalização** e geração do **script DDL** (CREATE TABLE etc., arquivo `05`). Esse processo de gerar o físico a partir do lógico/conceitual é a **engenharia direta** (*forward engineering*).

### 3.3 Alteração de modelos

Modelos mudam: novos requisitos, regras regulatórias, correção de falhas. Boas práticas:

1. **Avaliar o impacto** nas aplicações, relatórios, integrações (ETL) e consultas existentes antes de alterar.
2. **Versionar** o modelo e os scripts de migração; manter histórico das mudanças e justificativas.
3. Usar scripts de **migração** (DDL e correção de dados): `ALTER TABLE ... ADD COLUMN`, criação de novas tabelas, cópia/transformação de dados, remoção posterior de estruturas obsoletas.
4. Preferir mudanças **compatíveis com versões anteriores** (adicionar coluna opcional) a mudanças destrutivas (remover/renomear coluna), que exigem janela e coordenação.
5. Manter a **consistência entre os três níveis**: uma alteração no físico que muda o significado deve ser refletida no lógico e no conceitual (e vice-versa) — descompasso gera documentação enganosa.
6. Testar em ambiente de homologação e prever **reversão** (*rollback*) da migração.

## 4. Mapeamento do DER para o modelo relacional (*complemento B, necessário para 1.2*)

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

## 5. Avaliação de modelos de dados (item 1.8)

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

## 6. Engenharia reversa de modelos de dados (item 1.9)

**Engenharia reversa** de banco de dados é o processo de **reconstruir o modelo (lógico e, quando possível, conceitual) a partir de um banco de dados existente**, quando a documentação está ausente, desatualizada ou inexistente. O resultado alimenta a criação ou a **atualização** do modelo (mantendo documentação e banco sincronizados).

### 6.1 Técnicas

1. **Extração do esquema físico** pelo catálogo do SGBD (metadados — arquivo `10`): tabelas, colunas, tipos, chaves primárias, chaves estrangeiras, índices, *constraints*, visões, gatilhos.
2. **Dedução de relacionamentos**: onde não há FKs declaradas (comum em sistemas legados), inferem-se vínculos por convenção de nomes, tipos compatíveis, análise de dados (valores de uma coluna contidos em outra) e análise do código das aplicações e consultas.
3. **Descoberta de chaves e dependências** por perfilamento de dados (*data profiling*: unicidade, nulos, valores distintos).
4. **Elevação de nível de abstração**: do físico para o lógico (remover detalhes de implementação, reconhecer tabelas associativas como N:N, agrupar tabelas de uma hierarquia) e, por fim, para o conceitual.
5. **Comparação e sincronização** (*compare/merge*): contrastar o modelo existente com o banco e gerar scripts de diferença, ou reconstruir o modelo desatualizado.
6. **Engenharia de ida e volta** (*round-trip*): ciclo contínuo entre modelo e banco, usando engenharia direta e reversa, por ferramentas de modelagem.

### 6.2 Limitações

- O catálogo **não guarda a semântica de negócio**: cardinalidade mínima, especializações, significado de colunas e regras não implementadas no banco são perdidos ou precisam de interpretação humana.
- FKs ausentes tornam a dedução de relacionamentos **incerta**.
- Dados sujos distorcem a análise de perfil.
- O modelo obtido reflete o *estado atual* (inclusive erros de projeto); é preciso **avaliá-lo** (seção 5) em vez de apenas aceitá-lo.

## 7. Comparações conceituais

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

## 8. Aplicações e cenários

**Cenário (didático): sistema legado sem documentação.** A empresa herdou um banco com 300 tabelas sem FKs declaradas. *Problema:* não se sabe o que depende do quê. *Abordagem:* extrair metadados, executar perfilamento de dados e análise de consultas para inferir relacionamentos, recompor o modelo lógico, validar com usuários e gerar a documentação. *Limitação:* relacionamentos inferidos precisam de validação; a semântica de negócio não vem do catálogo.

**Cenário (didático): mudança de regra.** Passa-se a exigir mais de um responsável por equipamento. O relacionamento (0,1) vira (0,N): a FK no lado "equipamento" deixa de servir e surge a tabela associativa. Avaliar impacto em consultas e relatórios; migrar dados; atualizar o modelo conceitual, lógico e físico.

## 9. Atenção para a prova

*Inferência técnica e recomendação pedagógica (sem atribuir frequência à banca):*

- Saber **ler cardinalidades (mín,máx)** e traduzi-las em chaves estrangeiras e restrições (NOT NULL, UNIQUE).
- Distinguir **total/parcial** de **disjunta/sobreposta** e traduzir em conjuntos.
- Relacionamento N:N **sempre** exige tabela associativa no modelo relacional.
- O modelo conceitual **independe** do SGBD; alternativas que associam índices e partições ao conceitual são incorretas.
- Engenharia reversa **não é** o mesmo que engenharia direta; e **não recupera automaticamente** toda a semântica de negócio.
- *Evidência histórica:* itens 1.1 e 1.2 aparecem em questões de 2018 e 2023 (ver seção 2.3). Os itens 1.8 e 1.9 **não** aparecem nas duas provas catalogadas. Isso não significa que não possam ser cobrados; o edital de 2026 os prevê.

## 10. Síntese

- **Níveis:** conceitual (negócio) → lógico (paradigma) → físico (SGBD).
- **DER:** entidade, atributo (simples/composto/multivalorado/derivado/identificador), relacionamento (grau, cardinalidade mín–máx), entidade fraca, especialização (total/parcial × disjunta/sobreposta).
- **Mapeamento:** 1:N → FK no lado N; N:N → tabela associativa; multivalorado → nova tabela; especialização → 3 estratégias.
- **Criação/alteração:** engenharia direta, versionamento, análise de impacto, migração compatível, consistência entre níveis.
- **Avaliação:** validade, completude, cardinalidades, normalização, integridade, legibilidade, flexibilidade, desempenho.
- **Engenharia reversa:** extrair catálogo, deduzir relacionamentos, elevar abstração, comparar/sincronizar; limite: semântica de negócio.

## 11. Pontos para a futura produção de questões (registro, sem criar questões)

Conceitos: níveis de modelo; cardinalidades; especialização; mapeamento E-R→relacional; engenharia direta × reversa. Distinções: total×parcial; disjunta×sobreposta; forte×fraca. Interpretação: leitura de DER e de diagramas de conjuntos (Venn) com regras de multiplicidade; escolha do esquema relacional que preserva a semântica.

## 12. Referências

Bibliografia de apoio (itens marcados **verificado** foram conferidos em catálogos online em 2026-10-31; os demais, **não verificados** — edição/ano/páginas pendentes):

- CHEN, P. P. S. "The Entity-Relationship Model — Toward a Unified View of Data". *ACM Transactions on Database Systems*, v. 1, n. 1, p. 9–36, 1976 — **verificado**.
- ELMASRI, R.; NAVATHE, S. B. *Sistemas de Banco de Dados*. São Paulo: Pearson (edição em português localizada: 6ª ed., 2011; o original em inglês, *Fundamentals of Database Systems*, 7ª ed., consta nos catálogos com ano 2015, 2016 ou 2017) — **verificado** em catálogos online.
- HEUSER, C. A. *Projeto de Banco de Dados*. Bookman/Sagra Luzzatto.
- SILBERSCHATZ, A.; KORTH, H. F.; SUDARSHAN, S. *Database System Concepts*. 7th ed. McGraw-Hill, 2019 — **verificado**.
- Edital Transpetro nº 04/2026.4, Anexo IV, itens 1.1, 1.2, 1.8, 1.9.
- Provas históricas catalogadas: `docs/estrategia/catalogo-questoes-historicas.md` (fontes secundárias, sem validação oficial).
