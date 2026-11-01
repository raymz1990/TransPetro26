---
modulo: 01-arquitetura-dados
arquivo: 04-normalizacao
itens_edital:
  - "1.4 Normalização das estruturas de dados"
ids_matriz: ["E5-005"]
escopo: "A — conteúdo expresso no edital"
tipo_conteudo: "teoria"
status: "VALIDADO"
ultima_atualizacao: "2026-10-31"
---

# Normalização das Estruturas de Dados

**Módulo:** M01 — Arquitetura de Dados
**Texto oficial (Anexo IV):** 1.4 "Normalização das estruturas de dados".
**Escopo:** A. As formas normais além da BCNF (4FN e 5FN) e o algoritmo de síntese são aprofundamentos dentro do mesmo item.
**Status:** `VALIDADO` (aprovado pelo usuário em 2026-10-31; referências não verificadas listadas em `docs/qualidade/relatorio-producao-modulo-01.md`).

**Objetivos de aprendizagem.** (1) Explicar o objetivo da normalização e as anomalias que ela evita; (2) identificar dependências funcionais; (3) classificar uma relação em 1FN, 2FN, 3FN e BCNF; (4) decompor uma relação sem perda; (5) justificar quando desnormalizar.

---

## 1. Introdução

**Normalização** é o processo de organizar as tabelas de um banco relacional para **reduzir redundância e evitar anomalias de atualização**, aplicando regras chamadas **formas normais** a partir das **dependências entre atributos**. Seu objetivo principal é que cada fato seja armazenado **em um único lugar**. A normalização é usada no projeto lógico (arquivo `02`) de sistemas transacionais (OLTP). Já a modelagem dimensional para análise (item 1.7, arquivo `09`) frequentemente **desnormaliza** de propósito.

## 2. Fundamentos

### 2.1 Por que normalizar: as anomalias

Considere a tabela *didática* `OS(num_os, id_equip, nome_equip, area_equip, data_os)`, em que `nome_equip` e `area_equip` repetem-se em toda ordem do mesmo equipamento.

| Anomalia | Descrição | Exemplo |
|---|---|---|
| **Inserção** | Não é possível registrar um fato sem outro | Cadastrar um equipamento ainda sem ordens de serviço |
| **Atualização** | Mudar um dado exige alterar várias linhas; esquecer uma gera inconsistência | Mudar a área do equipamento em todas as ordens |
| **Exclusão** | Apagar um fato apaga outro | Excluir a última ordem do equipamento apaga os dados do equipamento |

### 2.2 Dependência funcional

Um atributo (ou conjunto) **Y depende funcionalmente de X** (X → Y) quando cada valor de X determina **no máximo um** valor de Y. X é o **determinante**. Exemplos: `id_equip → nome_equip, area_equip`; `num_os → id_equip, data_os`.

Tipos:

- **Trivial:** Y ⊆ X (ex.: {A,B} → A).
- **Total** (completa): Y depende de X inteiro, e de nenhum subconjunto próprio de X.
- **Parcial:** Y depende de **parte** de uma chave composta.
- **Transitiva:** X → Y e Y → Z (com Y não determinando X e Y não sendo chave), logo X → Z por intermédio de Y.

**Axiomas de Armstrong** (regras de inferência): *reflexividade* (se Y ⊆ X, então X → Y), *aumentação* (se X → Y, então XZ → YZ), *transitividade* (se X → Y e Y → Z, então X → Z). **Fecho** de um conjunto de atributos X⁺ é o conjunto de todos os atributos determinados por X; X é superchave se X⁺ contém todos os atributos da relação, e é chave candidata se for mínimo.

### 2.3 Formas normais

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

### 2.4 Exemplo passo a passo

Tabela inicial (didática): `PEDIDO(num_pedido, id_cliente, nome_cliente, cidade_cliente, {produtos})`.

1. **1FN:** os produtos formam grupo repetido. Separa-se `ITEM_PEDIDO(num_pedido, id_produto, descricao_produto, quantidade)`; `PEDIDO(num_pedido, id_cliente, nome_cliente, cidade_cliente)`. Chave de `ITEM_PEDIDO`: `(num_pedido, id_produto)`.
2. **2FN:** em `ITEM_PEDIDO`, `descricao_produto` depende só de `id_produto` (dependência **parcial**). Decompõe-se: `PRODUTO(id_produto, descricao_produto)` e `ITEM_PEDIDO(num_pedido, id_produto, quantidade)`.
3. **3FN:** em `PEDIDO`, `nome_cliente` e `cidade_cliente` dependem de `id_cliente`, que depende de `num_pedido` (dependência **transitiva**). Decompõe-se: `CLIENTE(id_cliente, nome_cliente, cidade_cliente)` e `PEDIDO(num_pedido, id_cliente)`.

Resultado (em 3FN): `CLIENTE`, `PEDIDO`, `PRODUTO`, `ITEM_PEDIDO`, com FKs entre elas.

### 2.5 Quando a 3FN não basta: BCNF

Relação `MATRICULA(aluno, disciplina, professor)` com regras: cada professor leciona uma disciplina (`professor → disciplina`) e um aluno tem um professor por disciplina (`(aluno, disciplina) → professor`). Chaves candidatas: `(aluno, disciplina)` e `(aluno, professor)`. Todos os atributos são primos, logo está em **3FN**, mas `professor → disciplina` tem determinante que **não é superchave**: **não está em BCNF**. Decomposição: `LECIONA(professor, disciplina)` e `MATRICULA(aluno, professor)`.

*Observação:* a decomposição em BCNF é sempre **sem perda de junção**, mas **pode não preservar todas as dependências** (nesse exemplo, `(aluno, disciplina) → professor` deixa de ser verificável diretamente em uma só tabela). A **3FN** sempre admite decomposição **sem perda e com preservação de dependências**.

## 3. Desenvolvimento aprofundado

### 3.1 Propriedades de uma boa decomposição

| Propriedade | Significado | Consequência se violada |
|---|---|---|
| **Junção sem perda** (*lossless join*) | Juntar as partes reconstrói **exatamente** a relação original | Surgem tuplas espúrias ou se perdem informações |
| **Preservação de dependências** | Todas as DFs podem ser verificadas nas relações decompostas sem junção | Restrições passam a exigir junções para serem validadas |

Critério para junção sem perda ao decompor R em R1 e R2: o conjunto de atributos comuns R1 ∩ R2 deve ser **chave** de R1 ou de R2 (ou, formalmente, R1∩R2 → R1 ou R1∩R2 → R2).

### 3.2 4FN e 5FN (visão geral)

- **Dependência multivalorada (X ↠ Y):** a um valor de X associa-se um **conjunto** de valores de Y, independentemente dos demais atributos. Exemplo didático: `ENGENHEIRO(nome, habilidade, projeto)`, em que habilidades e projetos são independentes entre si; guardar tudo em uma tabela cria combinações redundantes. 4FN: separar em `(nome, habilidade)` e `(nome, projeto)`.
- **5FN:** trata de dependências de junção; é pouco comum em projetos práticos.

### 3.3 Desnormalização

**Desnormalizar** é introduzir redundância **deliberada** para ganhar desempenho de leitura (evitar junções) ou simplificar consultas. Técnicas: colunas derivadas/redundantes, tabelas de resumo, pré-agregação, duplicar atributos lidos com frequência. Custos: risco de inconsistência, necessidade de manter a redundância (gatilhos/rotinas), maior armazenamento e escrita mais custosa. Deve ser decisão **consciente, documentada e posterior à normalização**. Em *data warehouses*, o modelo dimensional (arquivo `09`) é desnormalizado por projeto.

### 3.4 Como normalizar na prática

1. Listar atributos e identificar as dependências funcionais (regras do negócio, não dados de exemplo: um conjunto de linhas pode "parecer" ter uma DF sem que ela seja regra).
2. Determinar chaves candidatas (fecho de atributos).
3. Verificar 1FN → 2FN → 3FN → BCNF, decompondo quando violado.
4. Conferir junção sem perda e preservação de dependências.
5. Revisar desempenho; desnormalizar apenas se justificado.

## 4. Comparações conceituais

| Conceito A | Conceito B | Diferença principal |
|---|---|---|
| Dependência parcial | Dependência transitiva | Parcial: depende de parte de chave composta (viola 2FN); transitiva: depende de atributo não chave (viola 3FN) |
| 3FN | BCNF | BCNF exige que todo determinante seja superchave; a 3FN admite determinante não superchave se o dependente for primo |
| 1FN | 2FN | 1FN: atomicidade; 2FN: dependência total da chave |
| Normalização | Desnormalização | Reduz redundância (consistência) × introduz redundância (desempenho de leitura) |
| Normalização (OLTP) | Modelagem dimensional (OLAP) | A primeira prioriza integridade em atualizações; a segunda, leitura analítica |
| Junção sem perda | Preservação de dependências | A primeira trata da reconstrução dos dados; a segunda, da verificação das restrições |

## 5. Aplicações e cenários

**Cenário (didático).** Um cadastro de contratos repete razão social e endereço do fornecedor em toda linha de contrato. Um erro de digitação gera duas versões do mesmo fornecedor (anomalia de atualização). Solução: tabela `FORNECEDOR` e FK em `CONTRATO`. *Limitação:* consultas de contrato passam a exigir junção; índices na FK atenuam o custo.

**Cenário (didático).** Para um painel que lista milhões de ordens com o nome da área, uma coluna `nome_area` copiada em `ORDEM` acelera a leitura, mas exige manter a cópia sincronizada com `AREA`. Decisão de desnormalização documentada.

## 6. Atenção para a prova

*Inferência técnica e recomendação pedagógica.*

- Saber **identificar a forma normal mais alta** de um esquema dado com suas DFs: liste chaves candidatas, atributos primos e verifique 2FN (parciais), 3FN (transitivas), BCNF (determinante não superchave).
- O **objetivo principal** da normalização é **eliminar redundância e anomalias**, não "reduzir o espaço de armazenamento" (pode reduzir, mas não é o objetivo central) nem "acelerar todas as consultas" (frequentemente exige mais junções).
- 2FN só tem sentido se a chave for **composta**; com chave simples, 1FN já implica 2FN.
- Alternativas que dizem que normalização "aumenta a redundância" ou que "garante melhor desempenho de consultas complexas" são incorretas por generalizar.
- Distinguir **dependência funcional** de **chave estrangeira**: DF é uma regra semântica; FK é um mecanismo de integridade.
- *Evidência histórica (amostra de duas provas):* a Prova 6 de 2023 (Q64: objetivo da normalização) e a Prova 15 de 2018 (Q42: identificar esquema em 3FN a partir de dependências) tocaram o item 1.4. Duas provas não permitem inferir frequência.

## 7. Síntese

- Objetivo: eliminar redundância e anomalias (inserção, atualização, exclusão).
- DF: X → Y; parcial (viola 2FN), transitiva (viola 3FN).
- 1FN atomicidade; 2FN sem dependência parcial; 3FN sem transitiva (ou determinante superchave / dependente primo); BCNF: todo determinante é superchave; 4FN: multivaloradas; 5FN: junção.
- Decomposição: junção sem perda (obrigatória) e preservação de dependências (desejável; BCNF pode violar, 3FN garante).
- Desnormalização: redundância deliberada por desempenho, com custo de consistência.

## 8. Pontos para a futura produção de questões (registro)

Conceitos: anomalias, DF, formas normais, decomposição, desnormalização. Distinções: parcial×transitiva; 3FN×BCNF; normalização×dimensional. Interpretação: dado um conjunto de DFs, qual esquema está em 3FN; qual decomposição é sem perda.

## 9. Referências

Bibliografia de apoio (itens marcados **verificado** foram conferidos em catálogos online em 2026-10-31; os demais, **não verificados** — edição/ano/páginas pendentes):

- ELMASRI, R.; NAVATHE, S. B. *Sistemas de Banco de Dados*. São Paulo: Pearson (edição em português localizada: 6ª ed., 2011; o original em inglês, *Fundamentals of Database Systems*, 7ª ed., consta nos catálogos com ano 2015, 2016 ou 2017) — **verificado** em catálogos online.
- SILBERSCHATZ, A.; KORTH, H. F.; SUDARSHAN, S. *Database System Concepts*. 7th ed. McGraw-Hill, 2019 — **verificado**.
- HEUSER, C. A. *Projeto de Banco de Dados*. Bookman/Sagra Luzzatto.
- Edital Transpetro nº 04/2026.4, Anexo IV, item 1.4.
