---
modulo: 07-analise-dados
arquivo: 05-olap-e-data-warehouse
itens_edital:
  - "7.5 Conceitos de OLAP e suas operações"
  - "7.6 Conceitos de data warehouse"
ids_matriz: ["E5-064", "E5-065"]
escopo: "A — conteúdo expresso no edital. O DW foi desenvolvido no Módulo 1 (`01-arquitetura-dados/09`); este arquivo complementa sem repetir a modelagem dimensional."
tipo_conteudo: "teoria"
status: "VALIDADO"
ultima_atualizacao: "2026-10-31"
---

# OLAP e Data Warehouse

**Módulo:** M07 — Análise de dados e informações
**Textos oficiais (Anexo IV):** 7.5 "Conceitos de OLAP e suas operações"; 7.6 "Conceitos de data warehouse".
**Escopo:** A. Base conceitual de DW, OLTP × OLAP, Inmon × Kimball e modelagem dimensional: ver Módulo 1, `09`. Aqui: características, arquitetura, OLAP e operações.
**Status:** `VALIDADO` (aprovado pelo usuário em 2026-10-31, com ressalvas: interpretação dos itens 7.2, 7.3 e 7.7 a 7.9 a confirmar; fontes de memória listadas em `docs/qualidade/relatorio-producao-modulo-07.md`). **Verificado** em fontes secundárias: roll-up, drill-down e slice/dice; MOLAP, ROLAP e HOLAP. **Revisão (2026-10-31):** as quatro características (orientado a assunto, integrado, variante no tempo, não volátil) aparecem na página "Data warehouse" da Wikipedia, mas a **atribuição a Inmon não foi confirmada**; `GROUP BY ROLLUP` e `CUBE` foram **confirmados** na documentação do PostgreSQL. **De memória:** "pivot" como operação (a fonte lista só três operações básicas), *drill-through*, *drill-across*, ODS, arquiteturas.

**Objetivos de aprendizagem.** (1) Enumerar as características de um DW; (2) descrever sua arquitetura; (3) definir OLAP e o cubo; (4) executar mentalmente as operações OLAP; (5) distinguir ROLAP, MOLAP e HOLAP.

---

## 1. Data warehouse (item 7.6)

### 1.1 Conceito e características

**Data warehouse (DW):** repositório central de dados analíticos, integrados de várias fontes, para consulta e apoio à decisão. A definição clássica de **Inmon** (de memória) destaca quatro características:

| Característica | Significado | Exemplo |
|---|---|---|
| **Orientado a assunto** | Organizado por temas de negócio (vendas, manutenção), não por aplicação | Dados de "cliente" de vários sistemas reunidos |
| **Integrado** | Padroniza nomes, formatos, unidades e codificações | "M/F", "1/2" e "masc/fem" viram um só padrão |
| **Variante no tempo** (histórico) | Mantém série histórica, cada registro ligado a um tempo | Preço mensal durante anos |
| **Não volátil** | Dados carregados **não são alterados** pelo uso rotineiro; novas cargas acrescentam | Consultas apenas leem |

Outras características: **otimizado para leitura e consulta analítica**, volumes grandes, dados frequentemente **agregados**, carregado por **ETL/ELT** em janelas periódicas ou quase em tempo real (Módulo 1, `08`).

> O Módulo 1 (`09`, seção 2) traz a comparação **OLTP × OLAP/DW**, as abordagens **Inmon** e **Kimball** e a modelagem dimensional (estrela, floco de neve, tabelas fato, SCD). Esses pontos **não são repetidos** aqui.

### 1.2 Arquitetura

```
Fontes → Área de preparação (staging) → DW (corporativo ou integrado por data marts)
   → Data marts → Cubos / camada semântica → Ferramentas de BI
```

| Componente | Função |
|---|---|
| **Staging** | Área temporária onde os dados são carregados e tratados antes do DW |
| **ODS** (*Operational Data Store*, de memória) | Repositório integrado de dados operacionais recentes, para consultas operacionais |
| **DW corporativo** | Repositório integrado e histórico |
| **Data mart** | Subconjunto por área ou processo (**dependente**, derivado do DW; **independente**, construído direto das fontes) |
| **Metadados** | Descrevem origem, regras, significados e linhagem |
| **Camada de acesso** | Consultas, OLAP, relatórios, mineração |

**Arquiteturas:** uma camada, duas camadas e três camadas (fontes–DW–apresentação) — classificação usual de livros; **DW em nuvem** (escalabilidade, separação de armazenamento e computação) e ***lakehouse*** (Módulo 1, `09`). *(De memória.)*

### 1.3 Vantagens e limitações

| Vantagens | Limitações |
|---|---|
| Visão integrada e consistente | Custo e complexidade de construção |
| Histórico e desempenho analítico | Dados com latência (carga periódica) |
| Isola cargas analíticas do ambiente operacional | Exige governança e qualidade |
| Base para BI e mineração | Mudanças nas fontes impactam o ETL |

## 2. OLAP (item 7.5)

### 2.1 Conceito

**OLAP** (*Online Analytical Processing*) é a abordagem de **análise interativa e multidimensional** de grandes volumes de dados, com **tempos de resposta rápidos**, a partir de **medidas** vistas por **dimensões** (tempo, produto, região). Os dados são vistos como um **cubo** (ou hipercubo, se houver mais de três dimensões). Termo introduzido por **E. F. Codd** (1993; de memória). O Módulo 1 `07` já situa os bancos multidimensionais frente aos relacionais.

**Elementos:** **medida** (valor numérico a analisar: vendas, custo); **dimensão** (perspectiva: tempo, local); **hierarquia** (níveis de uma dimensão: ano > trimestre > mês > dia); **atributo**; **célula** (interseção de membros das dimensões, com o valor da medida).

### 2.2 Operações OLAP

As operações abaixo **roll-up, drill-down, slice e dice** foram **verificadas** em fonte secundária (Wikipedia, "Online analytical processing", que as chama de consolidação/*roll-up*, *drill-down* e *slicing and dicing*); *drill-up* e *pivot* como operações **não foram confirmadas** nessa fonte e são tradicionais na literatura (de memória).

| Operação | O que faz | Exemplo (vendas por Tempo × Produto × Região) |
|---|---|---|
| **Roll-up** (consolidação; *drill-up*) | **Sobe** na hierarquia, **agregando** (menos detalhe) | De vendas por **mês** para vendas por **trimestre** |
| **Drill-down** | **Desce** na hierarquia (mais detalhe) | De **ano** para **mês**; de região para cidade |
| **Slice** (fatia) | **Fixa um valor** de uma dimensão, reduzindo a dimensionalidade | Apenas o ano de 2025 |
| **Dice** (cubo menor) | Seleciona **intervalos/valores em várias dimensões**, gerando subcubo | 2025–2026, produtos A e B, região Sul |
| **Pivot** (rotação) | **Gira** o cubo, trocando linhas e colunas para novo ângulo | Produto nas linhas e tempo nas colunas, depois o inverso |
| **Drill-across** | Une medidas de **diferentes fatos** pela dimensão comum (de memória) | Vendas e devoluções por mês |
| **Drill-through** | Vai do valor agregado ao **registro detalhado** de origem (de memória) | Do total ao documento fiscal |

**Slice × dice:** o *slice* fixa **uma** dimensão a **um** valor; o *dice* restringe **mais de uma** dimensão a subconjuntos. **Roll-up × drill-down:** direções opostas na hierarquia.

### 2.3 Tipos de OLAP (verificados)

| Tipo | Armazenamento | Característica |
|---|---|---|
| **MOLAP** | Em **matriz multidimensional** otimizada (cubo) | Consultas muito rápidas; pré-computa agregações; limitado em volume e atualização |
| **ROLAP** | Em **bancos relacionais** (esquema estrela/floco), consultas SQL | Trabalha direto com tabelas, sem pré-computação; escala para grandes volumes, desempenho depende do banco |
| **HOLAP** | **Híbrido**: parte em MOLAP (agregados), parte em ROLAP (detalhe) | Equilíbrio entre desempenho e volume |

Ferramentas de consulta: SQL analítico (funções de janela, `GROUP BY ROLLUP/CUBE`, de memória) e **MDX** (linguagem para cubos; Módulo 1, `07`).

### 2.4 Exemplo SQL (ilustrativo, não executado)

```sql
-- Roll-up por ano e mês, com subtotais
SELECT ano, mes, SUM(valor) AS total
FROM fato_vendas f JOIN dim_tempo t ON t.sk_tempo = f.sk_tempo
GROUP BY ROLLUP (ano, mes);
```

### 2.5 OLAP × OLTP

OLTP: transações curtas, dados atuais, normalizado (Módulo 1 `01`). OLAP: consultas complexas e agregadas sobre histórico, em modelo dimensional.

## 3. Comparações conceituais

| A | B | Diferença |
|---|---|---|
| Roll-up | Drill-down | Agregar (subir) × detalhar (descer) |
| Slice | Dice | Fixar uma dimensão × restringir várias |
| Pivot | Slice | Girar a visão × reduzir a dimensionalidade |
| MOLAP | ROLAP | Cubo multidimensional × tabelas relacionais |
| DW | Data mart | Repositório integrado corporativo × subconjunto por área |
| DW | Data lake | Dados tratados e estruturados × dados brutos de qualquer tipo (Módulo 1 `09`) |
| DW | OLAP | Armazenamento × forma de análise |

## 4. Exemplo (didático)

Cubo de manutenção (tempo × unidade × tipo de serviço, medida = custo). *Roll-up* de mês para trimestre; *drill-down* de unidade para equipamento; *slice* no ano 2026; *dice* nas unidades Norte e Sul para serviços corretivos; *pivot* para ver unidades nas colunas.

## 5. Atenção para a prova

*Inferência técnica e recomendação pedagógica; sem atribuir frequência à banca.*

- Memorizar as quatro características do DW (orientado a assunto, integrado, variante no tempo, não volátil) e sua **não volatilidade**.
- Reconhecer cada operação OLAP em um exemplo e a **direção** do roll-up e do drill-down.
- *Evidência histórica (amostra de duas provas):* a Prova 6 de 2023 trouxe **Q56 (característica de DW**, gabarito B) e **Q62 (operações OLAP**: slice, roll-up e drill; gabarito E, com observação do catálogo sobre conferir a alternativa A). Gabaritos de terceiros, não validados. Duas provas não permitem inferir frequência.

## 6. Síntese

- DW: orientado a assunto, integrado, histórico, não volátil; staging, DW, data marts, metadados; apoio ao BI.
- OLAP: análise multidimensional em cubo; roll-up, drill-down, slice, dice, pivot; MOLAP, ROLAP, HOLAP.

## 7. Pontos para a futura produção de questões (registro)

Características do DW; DW × data mart/data lake/OLTP; identificação de operação OLAP; tipos de OLAP.

## 8. Referências

- Wikipedia, "Online analytical processing" — **verificada em 2026-10-31** (roll-up, drill-down, slice/dice, MOLAP/ROLAP/HOLAP); IBM, "Data warehouse" — **verificada** (tipos de OLAP). Atribuição das quatro características a Inmon **não confirmada** (AWS, IBM e Wikipedia não a fazem); mantida de memória. PostgreSQL, "Table Expressions" (`ROLLUP`/`CUBE`) — **verificada**; exemplo SQL não executado.
- CODD et al. (1993), INMON (*Building the Data Warehouse*), KIMBALL — **de memória**.
- Edital Transpetro nº 04/2026.4, Anexo IV, itens 7.5 e 7.6. Provas: Transpetro 2023, Prova 6, Q56 e Q62 (gabaritos de terceiros, não validados).
