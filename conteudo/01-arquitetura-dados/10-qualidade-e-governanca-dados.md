---
modulo: 01-arquitetura-dados
arquivo: 10-qualidade-e-governanca-dados
itens_edital:
  - "1.6 Metadados"
  - "1.21 Qualidade de dados e gestão de dados mestres e de referência"
ids_matriz: ["E5-007", "E5-022"]
escopo: "A — conteúdo expresso no edital (governança de dados como contexto B)"
tipo_conteudo: "teoria"
status: "VALIDADO"
ultima_atualizacao: "2026-10-31"
---

# Metadados, Qualidade de Dados e Gestão de Dados Mestres e de Referência

**Módulo:** M01 — Arquitetura de Dados
**Textos oficiais (Anexo IV):** 1.6 "Metadados"; 1.21 "Qualidade de dados e gestão de dados mestres e de referência".
**Escopo:** A. O conceito de **governança de dados** (seção 5) é contexto **B** para integrar os itens; não é item literal do edital.
**Status:** `VALIDADO` (aprovado pelo usuário em 2026-10-31; referências não verificadas listadas em `docs/qualidade/relatorio-producao-modulo-01.md`).

**Objetivos de aprendizagem.** (1) Definir metadados, classificar seus tipos e citar onde são mantidos; (2) explicar as dimensões da qualidade de dados e o ciclo de melhoria; (3) diferenciar dados mestres, de referência, transacionais e metadados; (4) descrever a gestão de dados mestres (MDM) e de referência (RDM) e seus resultados.

---

## 1. Introdução

Dados só têm valor quando as pessoas **sabem o que significam**, **podem confiar neles** e **encontram uma única versão correta** das entidades essenciais do negócio. Três temas respondem a essas necessidades: **metadados** (o que os dados significam e de onde vêm), **qualidade de dados** (se estão corretos, completos e atualizados) e **gestão de dados mestres e de referência** (uma versão única e consistente das entidades e dos códigos compartilhados). Em conjunto, constituem a base da **governança de dados**.

*Relações:* o catálogo do SGBD (arquivo `05`) é a fonte de metadados técnicos; a engenharia reversa (arquivo `02`) os usa; o ETL (arquivo `08`) aplica regras de qualidade; data lakes sem metadados viram *data swamps* (arquivo `09`).

## 2. Metadados (item 1.6)

### 2.1 Definição

**Metadados** são **dados que descrevem outros dados**: sua estrutura, significado, origem, formato, regras, qualidade e uso. Exemplo (didático): para a coluna `pressao_bar` da tabela `leitura`, os metadados incluem nome, tipo `NUMERIC(8,2)`, unidade (bar), descrição, permite nulo?, origem (sensor X), responsável e política de retenção.

### 2.2 Tipos

| Tipo | Descreve | Exemplos |
|---|---|---|
| **Técnicos** | Estrutura e implementação | Tabelas, colunas, tipos, chaves, índices, tamanhos, esquemas, mapeamentos ETL |
| **De negócio** | Significado e regras | Definição de termos, glossário, regras de negócio, classificação de sensibilidade, responsável (*data owner*) |
| **Operacionais** | Execução e uso | Datas/volumes de carga, erros de ETL, logs de acesso, estatísticas de uso |
| **De qualidade** | Medições de qualidade | Percentual de nulos, taxas de erro, regras violadas |
| **De proveniência/linhagem** | Origem e transformações | De qual sistema veio, que transformações sofreu |

Também se fala em metadados **descritivos** (para busca), **estruturais** (relações entre partes) e **administrativos** (direitos, preservação).

### 2.3 Onde ficam

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

### 2.4 Importância e usos

- **Compreensão e descoberta:** achar e entender dados (catálogo, glossário).
- **Engenharia reversa e documentação** (arquivo `02`).
- **Análise de impacto e linhagem:** antes de alterar uma coluna, saber o que depende dela.
- **Governança e conformidade:** classificar dados pessoais (LGPD), definir responsáveis.
- **Qualidade e integração:** registrar regras e mapeamentos.
- **Automação:** geradores de código, otimizador (estatísticas), ferramentas de BI.

*Padrões de referência (contexto):* a ISO/IEC 11179 trata de registros de metadados; o Dublin Core, de metadados descritivos de recursos; o *Common Warehouse Metamodel* (CWM, do OMG), de metadados de DW. Não são exigidos literalmente pelo edital.

## 3. Qualidade de dados (item 1.21)

### 3.1 Definição

**Qualidade de dados** é o grau em que os dados são **adequados ao uso pretendido** ("*fitness for use*") e atendem aos requisitos do negócio. Dado "bom" para uma finalidade pode ser insuficiente para outra.

### 3.2 Dimensões da qualidade

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

### 3.3 Causas e consequências

Causas: entrada manual sem validação, ausência de padrões, múltiplos sistemas com cadastros duplicados, integrações mal projetadas, mudanças de processo não refletidas, falta de responsáveis. Consequências: decisões erradas, retrabalho, falhas operacionais, riscos regulatórios, perda de confiança em relatórios.

### 3.4 Ciclo de gestão da qualidade (visão geral)

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

## 4. Gestão de dados mestres e de referência (item 1.21)

### 4.1 Tipos de dados: não confundir

| Tipo | Definição | Exemplos | Variação | Compartilhamento |
|---|---|---|---|---|
| **Dados mestres** (*master data*) | Dados sobre as **entidades centrais do negócio**, compartilhados por vários sistemas e processos | Cliente, fornecedor, produto/material, **equipamento**, local, funcionário | Mudam com pouca frequência | Muito alto |
| **Dados de referência** (*reference data*) | **Conjuntos de valores/códigos** usados para classificar e restringir outros dados | Países, UF, unidades de medida, moedas, status de ordem, tipos de equipamento | Muito pouca; mudanças geridas e versionadas | Muito alto |
| **Dados transacionais** | Registram eventos/operações | Ordem de serviço, pedido, leitura, pagamento | Constantes (alto volume) | Gerados por processos |
| **Metadados** | Descrevem os dados | Esquemas, glossário | — | — |

*Exemplo didático:* "Equipamento P-101" é dado **mestre**; "Status: em manutenção" vem de uma lista de **referência**; "Ordem de serviço 20260315, equipamento P-101, 3,5 h" é dado **transacional**; "a coluna `status` aceita os valores X, Y, Z" é **metadado**.

### 4.2 Gestão de dados mestres (MDM — *Master Data Management*)

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

### 4.3 Gestão de dados de referência (RDM)

Gerir os **valores de domínio** compartilhados: cadastro único, **versionamento** e **vigência** das listas, **mapeamentos entre codificações** (código interno ↔ padrão externo), **fluxo de aprovação** de mudanças, **distribuição** aos sistemas. Padrões externos usuais: ISO 3166 (países) e ISO 4217 (moedas), entre outros.

Boas práticas: **um proprietário** para cada lista, histórico de mudanças, não "repetir" listas hard-coded em cada aplicação.

### 4.4 Relação com ETL e DW

No DW, dados mestres tornam-se **dimensões conformes** (arquivo `09`); dados de referência alimentam atributos de dimensões e domínios. Sem MDM, a mesma entidade pode aparecer com chaves distintas em fatos diferentes.

## 5. Contexto: governança de dados (complemento B)

**Governança de dados** é o exercício de autoridade e controle (planejamento, monitoração e execução) sobre a gestão dos ativos de dados: políticas, padrões, papéis e responsabilidades (proprietário, curador), decisões e processos de qualidade, segurança e conformidade. Metadados, qualidade e MDM são **disciplinas** dentro de um programa de governança. O corpo de conhecimento de referência mais difundido é o **DAMA-DMBOK**. A **LGPD** (item 4.6 do edital, Módulo 4) impõe requisitos que dependem de metadados e de qualidade de dados (identificar dados pessoais, manter exatidão e atualização).

## 6. Comparações conceituais

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

## 7. Aplicações e cenários

**Cenário (didático): fornecedor duplicado.** Um fornecedor aparece com três cadastros (grafias diferentes) em ERP, compras e contratos. Efeitos: pagamentos duplicados, gasto consolidado incorreto. *Abordagem:* perfilamento para identificar duplicatas; regras de *match & merge* (CNPJ normalizado + nome); definição de um *golden record*; *steward* aprova fusões; prevenção com validação de CNPJ no cadastro. *Limitação:* alinhar processos e responsáveis é tão importante quanto a ferramenta.

**Cenário (didático): lista de tipos de equipamento.** Cada sistema mantém sua lista com códigos diferentes. Cria-se uma lista de **referência única**, com mapeamento entre códigos e versionamento; relatórios consolidados passam a agrupar corretamente.

**Cenário (didático): impacto de alteração.** Antes de renomear uma coluna, consulta-se o catálogo de metadados e a **linhagem** para localizar relatórios e cargas ETL dependentes.

## 8. Atenção para a prova

*Inferência técnica e recomendação pedagógica; sem atribuir frequência à banca.*

- Metadados = **dados sobre dados**: esquemas, tipos, restrições, descrições. Não são o conteúdo do negócio (vendas, senhas, código-fonte, backups).
- Distinguir **mestre × referência × transacional**: o enunciado costuma descrever uma situação e pedir a categoria.
- MDM busca **versão única e consistente** das entidades centrais; não é apenas um *backup* ou um DW.
- Dimensões de qualidade: ler a definição dada; **acurácia ≠ validade ≠ consistência**.
- Prevenir é mais eficaz que corrigir; limpeza isolada, sem tratar a causa, é paliativa.
- *Evidência histórica (amostra de duas provas):* a Prova 6 de 2023 (Q50) tratou de metadados em SGBD relacional. O item 1.21 (qualidade, dados mestres e de referência) **não** apareceu nas duas provas catalogadas; duas provas não permitem inferir frequência, e o edital de 2026 prevê o item.

## 9. Síntese

- **Metadados:** dados sobre dados (técnicos, de negócio, operacionais, de qualidade, linhagem); no catálogo do SGBD, dicionário/catálogo de dados.
- **Qualidade:** adequação ao uso; dimensões (acurácia, completude, consistência, unicidade, validade, atualidade, integridade, razoabilidade); ciclo: perfilar → medir → limpar → prevenir → monitorar.
- **Mestres:** entidades centrais compartilhadas; MDM: *golden record*, *match & merge*, estilos (registro, consolidação, coexistência, centralizado).
- **Referência:** listas de códigos/valores; RDM: versionamento, vigência, mapeamento.
- **Governança:** políticas, papéis (owner, steward, custodian) integrando as disciplinas.

## 10. Pontos para a futura produção de questões (registro)

Conceitos: metadados; dimensões de qualidade; dado mestre/referência/transacional; MDM/RDM. Distinções: mestre×referência; acurácia×validade; limpeza×prevenção; metadado×dado. Interpretação: classificar um dado em um cenário; identificar a dimensão de qualidade violada; escolher o estilo de MDM.

## 11. Referências

Bibliografia de apoio (itens marcados **verificado** foram conferidos em catálogos online em 2026-10-31; os demais, **não verificados** — edição/ano/páginas pendentes):

- DAMA International. *DAMA-DMBOK: Data Management Body of Knowledge*. 2nd ed. Technics Publications, 2017 — **verificado**.
- ISO/IEC 11179 (registros de metadados) e ISO/IEC 25012 (modelo de qualidade de dados) — partes e anos não especificados nesta etapa.
- LOSHIN, D. *Master Data Management*. Morgan Kaufmann.
- ELMASRI, R.; NAVATHE, S. B. *Sistemas de Banco de Dados*. São Paulo: Pearson (edição em português localizada: 6ª ed., 2011; o original em inglês, *Fundamentals of Database Systems*, 7ª ed., consta nos catálogos com ano 2015, 2016 ou 2017) — **verificado** em catálogos online.
- Edital Transpetro nº 04/2026.4, Anexo IV, itens 1.6 e 1.21.
