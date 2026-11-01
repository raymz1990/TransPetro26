---
modulo: 01-arquitetura-dados
arquivo: 09-data-warehouse-e-big-data
itens_edital:
  - "1.7 Modelagem dimensional"
  - "1.22 Data Lakes e Soluções para Big Data"
ids_matriz: ["E5-008", "E5-023"]
escopo: "A — conteúdo expresso no edital (DW como base conceitual; OLAP e otimização multidimensional são aprofundados no Módulo 7, itens 7.5 a 7.7)"
tipo_conteudo: "teoria"
status: "VALIDADO"
ultima_atualizacao: "2026-10-31"
---

# Modelagem Dimensional, Data Lakes e Soluções para Big Data

**Módulo:** M01 — Arquitetura de Dados
**Textos oficiais (Anexo IV):** 1.7 "Modelagem dimensional"; 1.22 "Data Lakes e Soluções para Big Data".
**Escopo:** A. O item 1.7 tem **associação secundária** com o Módulo 7 (7.7 "Técnicas de modelagem e otimização de bases de dados multidimensionais"; 7.5 OLAP; 7.6 data warehouse). Aqui estão os **fundamentos da modelagem dimensional**; operações OLAP, cubos e otimização serão complementados no Módulo 7, sem repetir este conteúdo. *Decisão de organização:* embora a matriz aprovada tenha indicado inicialmente um arquivo do Módulo 7 para o item 1.7, o item é **principal do Módulo 1**, e por isso é coberto integralmente aqui.
**Status:** `VALIDADO` (aprovado pelo usuário em 2026-10-31; referências não verificadas listadas em `docs/qualidade/relatorio-producao-modulo-01.md`).

**Objetivos de aprendizagem.** (1) Distinguir modelagem relacional normalizada e dimensional; (2) projetar um esquema estrela com fato, dimensões e granularidade; (3) tratar histórico com dimensões lentamente mutáveis; (4) explicar o que são Big Data e Data Lakes, suas camadas e riscos; (5) comparar data lake e data warehouse.

---

## 1. Introdução

Os sistemas transacionais (OLTP) são modelados para **gravar com integridade** (normalização). Os sistemas analíticos (OLAP) precisam **ler e agregar grandes volumes** por assunto (vendas por região e mês). A **modelagem dimensional** organiza os dados para essa finalidade: simples de entender e rápida para consultas. O **Big Data** e os **Data Lakes** ampliam o panorama para volumes, velocidades e variedades que excedem as arquiteturas tradicionais.

*Relações:* a normalização (arquivo `04`) é o contraponto do modelo dimensional; o ETL (arquivo `08`) alimenta o DW e o lake; os bancos multidimensionais foram diferenciados no arquivo `07`; metadados e qualidade (arquivo `10`) sustentam a confiança nos dados.

## 2. Data Warehouse: base conceitual

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

## 3. Modelagem dimensional (item 1.7)

### 3.1 Elementos

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

### 3.2 Tipos de medidas

| Tipo | Pode ser somada em… | Exemplo |
|---|---|---|
| **Aditiva** | Todas as dimensões | Quantidade vendida |
| **Semiaditiva** | Algumas dimensões (não no tempo) | Saldo de estoque (somar entre depósitos, mas não entre dias) |
| **Não aditiva** | Nenhuma (calcular a partir de componentes) | Razões, percentuais, preços unitários |

### 3.3 Esquemas

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

### 3.4 Tipos de tabelas fato

| Tipo | Registra | Exemplo |
|---|---|---|
| **Transacional** | Um evento por linha | Cada ordem de serviço |
| **Snapshot periódico** | Estado em intervalos regulares | Saldo diário de estoque |
| **Snapshot acumulativo** | Ciclo de vida de um processo (várias datas por linha, atualizadas) | Ordem de compra: criação, aprovação, entrega |
| **Sem fatos (*factless*)** | Ocorrência/cobertura sem medida | Presença em treinamento |

### 3.5 Dimensões: técnicas importantes

- **Dimensão conforme:** compartilhada e com mesmo significado entre fatos/*data marts*; viabiliza análise integrada.
- **Dimensão degenerada:** identificador (número do documento) guardado na tabela fato, sem tabela de dimensão própria.
- **Dimensão *junk* (lixo):** agrupa indicadores/flags de baixa cardinalidade em uma só dimensão.
- **Dimensão multipapéis (*role-playing*):** a mesma dimensão (Tempo) usada várias vezes com papéis distintos (data de abertura, de fechamento).
- **Dimensão Tempo/Calendário:** tabela construída previamente, com atributos (mês, semestre, feriado).

### 3.6 Dimensões lentamente mutáveis (SCD — *Slowly Changing Dimensions*)

Como tratar a mudança de um atributo de dimensão (ex.: um equipamento muda de área):

| Tipo | Tratamento | Histórico? |
|---|---|---|
| **Tipo 0** | Nunca altera | Mantém o original |
| **Tipo 1** | **Sobrescreve** o valor | Não preserva histórico |
| **Tipo 2** | Cria **nova linha** (nova chave substituta) com datas de vigência/versão | **Preserva** histórico completo |
| **Tipo 3** | Guarda valor anterior em **coluna adicional** | Histórico limitado (um nível) |
| Tipo 4/6 | Tipo 4: tabela separada (mini-dimensão ou tabela de histórico, conforme o autor); tipo 6: combinação dos tipos 1+2+3 | Variável |

### 3.7 Processo de projeto (resumo)

1. Escolher o **processo de negócio** a modelar.
2. Declarar a **granularidade**.
3. Identificar as **dimensões**.
4. Identificar as **medidas (fatos)**.

*Exemplo didático.* Processo: ordens de manutenção. Granularidade: uma linha por ordem de serviço encerrada. Dimensões: Tempo (abertura/fechamento — papel duplo), Equipamento, Local, Tipo de manutenção, Técnico. Medidas: horas, custo, tempo de parada. Pergunta atendida: "qual o custo médio de manutenção corretiva por tipo de equipamento e trimestre?"

### 3.8 Exemplo em SQL (esquema estrela)

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

## 4. Big Data e Data Lakes (item 1.22)

### 4.1 Big Data

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

### 4.2 Data Lake

**Data Lake** é um repositório centralizado que armazena **grandes volumes de dados em seu formato original (brutos)** — **estruturados, semiestruturados e não estruturados** — normalmente sobre armazenamento escalável e de baixo custo, para uso posterior por análises, aprendizado de máquina e relatórios.

Características essenciais:

- Armazena **todos os tipos** de dados (tabelas, JSON, logs, imagens, áudio, texto).
- Aplica **esquema na leitura** (*schema-on-read*): a estrutura é interpretada no momento da consulta; no DW, o esquema é definido na escrita (*schema-on-write*).
- **Não converte** automaticamente dados não estruturados em estruturados na ingestão: a transformação ocorre sob demanda ou em etapas posteriores.
- Baseado, em geral, em **armazenamento distribuído/objetos**, **não** apenas em sistemas de arquivos convencionais de servidor único.
- Atende desde engenheiros e cientistas de dados até analistas, com ferramentas diferentes.
- Apropriado a **dados brutos e históricos** de baixo custo por TB.

### 4.3 Arquitetura em camadas (exemplo didático)

```text
Fontes ─► Ingestão (batch/streaming) ─► Zona BRUTA (dados originais)
                                           ─► Zona REFINADA (limpos/padronizados)
                                                ─► Zona CURADA/de consumo (modelada para uso)
                                                      ─► BI, relatórios, ciência de dados, ML
Transversais: catálogo de metadados, governança, segurança, qualidade, linhagem
```

A organização em zonas (também chamada, em alguns produtos, de camadas bronze/prata/ouro) é uma **prática de arquitetura**, não uma norma; os nomes variam.

### 4.4 Riscos: o "pântano de dados" (*data swamp*)

Um lake sem **governança** — sem catálogo, metadados, qualidade, controle de acesso e responsabilidades — torna-se um depósito desorganizado do qual ninguém consegue extrair valor com confiança. Mitigações: catálogo de dados, políticas de ingestão, classificação de dados sensíveis (LGPD), controle de acesso, monitoração de qualidade e linhagem (arquivo `10`).

### 4.5 Data Lake × Data Warehouse (e *lakehouse*)

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

### 4.6 Análise de Big Data: processamento

- **Lote:** processa grandes volumes históricos periodicamente.
- **Tempo real/*streaming*:** processa eventos à medida que chegam.
- **Arquiteturas mistas** (lote + fluxo) combinam os dois; há padrões conhecidos como Lambda e Kappa (apenas nomes de referência).

## 5. Comparações conceituais

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

## 6. Aplicações e cenários

**Cenário (didático): histórico de áreas.** Equipamentos mudam de área ao longo do tempo. Para analisar custos **por área vigente na época**, usa-se SCD **tipo 2** (nova linha na dimensão a cada mudança); com SCD tipo 1, todo o histórico passaria a mostrar a área atual. *Limitação:* a dimensão cresce; consultas precisam usar as chaves substitutas corretas.

**Cenário (didático): dados de sensores e documentos.** Uma organização quer guardar leituras de sensores, imagens de inspeção e relatórios em PDF para análises futuras ainda não definidas. Um **data lake** permite armazená-los brutos a custo baixo; as análises estruturadas posteriores alimentam dimensões no DW. *Risco:* sem catálogo e governança, o lake vira *data swamp*.

## 7. Atenção para a prova

*Inferência técnica e recomendação pedagógica; sem atribuir frequência à banca.*

- **Granularidade** define o que cada linha da fato representa; sem ela, medidas e dimensões ficam ambíguas.
- Estrela × floco de neve: lembrar qual **normaliza** dimensões.
- SCD: tipo 1 **não** guarda histórico; tipo 2 **guarda**.
- Data lake: aceita dados **estruturados, semiestruturados e não estruturados**; alternativas dizendo que é "adequado **apenas** para dados não estruturados", "inadequado para Big Data" ou que "converte dados não estruturados em estruturados na ingestão" são incorretas por absolutizar ou por atribuir processamento que não é próprio do conceito.
- Data warehouse: **consolida** dados de **diversas fontes** para **análises multidimensionais** e inclui dados **históricos**; alternativas como "apenas dados brutos sem relatórios" ou "só dados operacionais de curto prazo" são incorretas.
- *Evidência histórica (amostra de duas provas):* a Prova 6 de 2023 trouxe questão sobre data lakes (Q52) e sobre data warehouse (Q56, item do Módulo 7); a de 2018 sobre a *staging area* (Q22). Modelagem dimensional (item 1.7) **não** teve questão específica nas duas provas catalogadas. Duas provas não permitem inferir frequência; o edital de 2026 prevê o item.

## 8. Síntese

- **Dimensional:** fato (medidas) + dimensões (contexto); **granularidade** primeiro; estrela (desnormalizada) × floco de neve (normalizada); constelação com dimensões conformes.
- **Medidas:** aditiva, semiaditiva, não aditiva. **SCD:** 0, 1 (sobrescreve), 2 (nova linha), 3 (coluna), híbridos.
- **Big Data:** volume, velocidade, variedade (+ veracidade, valor); tecnologias distribuídas, NoSQL, *streaming*.
- **Data lake:** dados brutos de qualquer tipo; esquema na leitura; zonas; risco de *data swamp*; exige governança.
- **Lake × DW:** bruto × tratado; leitura × escrita; ELT × ETL.

## 9. Pontos para a futura produção de questões (registro)

Conceitos: DW, fato, dimensão, granularidade, estrela/floco de neve, SCD, Big Data, data lake, *schema-on-read*. Distinções: estrela×floco de neve; lake×DW; SCD 1×2; aditiva×não aditiva. Interpretação: desenhar um esquema estrela para um cenário; escolher entre lake e DW.

## 10. Referências

Bibliografia de apoio (itens marcados **verificado** foram conferidos em catálogos online em 2026-10-31; os demais, **não verificados** — edição/ano/páginas pendentes):

- KIMBALL, R.; ROSS, M. *The Data Warehouse Toolkit: The Definitive Guide to Dimensional Modeling*. 3rd ed. Wiley, 2013 (modelagem dimensional, SCD, tipos de fato) — **verificado**.
- INMON, W. H. *Building the Data Warehouse*. Wiley (definição de DW).
- WHITE, T. *Hadoop: The Definitive Guide*. O'Reilly.
- ELMASRI, R.; NAVATHE, S. B. *Sistemas de Banco de Dados*. São Paulo: Pearson (edição em português localizada: 6ª ed., 2011; o original em inglês, *Fundamentals of Database Systems*, 7ª ed., consta nos catálogos com ano 2015, 2016 ou 2017) — **verificado** em catálogos online.
- Edital Transpetro nº 04/2026.4, Anexo IV, itens 1.7 e 1.22.
