---
modulo: 01-arquitetura-dados
arquivo: 03-modelo-relacional
itens_edital:
  - "1.3 O modelo Relacional"
  - "1.5 Integridade referencial"
ids_matriz: ["E5-004", "E5-006"]
escopo: "A — conteúdo expresso no edital"
tipo_conteudo: "teoria"
status: "VALIDADO"
ultima_atualizacao: "2026-10-31"
---

# O Modelo Relacional e a Integridade Referencial

**Módulo:** M01 — Arquitetura de Dados
**Textos oficiais (Anexo IV):** 1.3 "O modelo Relacional"; 1.5 "Integridade referencial".
**Escopo:** A. A álgebra relacional (seção 4) é desenvolvimento do modelo relacional; o edital não cita a álgebra literalmente (relação por pertinência ao item 1.3).
**Status:** `VALIDADO` (aprovado pelo usuário em 2026-10-31; referências não verificadas listadas em `docs/qualidade/relatorio-producao-modulo-01.md`).

**Objetivos de aprendizagem.** (1) Definir relação, tupla, atributo, domínio, esquema e instância; (2) distinguir os tipos de chave; (3) explicar as regras de integridade e as ações referenciais; (4) aplicar os operadores da álgebra relacional; (5) interpretar o comportamento de valores nulos.

---

## 1. Introdução

O **modelo relacional** foi proposto por E. F. Codd (1970) e fundamenta os SGBDs relacionais (Oracle, PostgreSQL, SQL Server, MySQL, entre outros). Sua ideia central é representar **todos os dados como relações** (visualizadas como tabelas) e manipulá-los por operações de natureza matemática (teoria dos conjuntos e lógica), o que separa o *que* se quer do *como* é armazenado. A **integridade referencial** (item 1.5) é a regra que mantém os vínculos entre tabelas consistentes. Os dois itens são inseparáveis: o modelo relacional só funciona com segurança se as regras de integridade forem declaradas e garantidas pelo SGBD.

Relações com outros itens: o modelo lógico relacional é produzido a partir do DER (1.1/1.2, arquivo `02`); sua qualidade depende da normalização (1.4, arquivo `04`); é manipulado por SQL (1.10–1.12, arquivo `05`) e protegido por transações (1.14/1.16, arquivo `06`).

## 2. Fundamentos do modelo relacional (item 1.3)

### 2.1 Conceitos básicos

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

### 2.2 Chaves

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

### 2.3 Restrições de integridade

| Restrição | O que garante |
|---|---|
| **Domínio** | Cada valor pertence ao domínio do atributo (tipo, `CHECK`, `NOT NULL`) |
| **Chave / unicidade** | Duas tuplas não podem ter a mesma chave |
| **Integridade de entidade** | Nenhum atributo da chave primária pode ser nulo |
| **Integridade referencial** (item 1.5) | Toda FK não nula deve corresponder a uma chave existente na tabela referenciada |
| **Restrições semânticas** | Regras de negócio (`CHECK`, gatilhos, asserções) |

## 3. Integridade referencial (item 1.5)

**Definição.** Uma restrição de integridade referencial exige que, para toda tupla da tabela *referenciadora* (filha), o valor da chave estrangeira seja **nulo** (se a coluna permitir) ou **igual ao valor de uma chave da tabela *referenciada* (pai)**. Assim não existem "registros órfãos": uma ordem não aponta para cliente inexistente.

### 3.1 Quando a restrição pode ser violada e como o SGBD reage

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

### 3.2 Exemplo em SQL (PostgreSQL/padrão SQL)

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

### 3.3 Casos especiais

- **Autorreferência:** `funcionario(id, id_gerente)` com FK para `funcionario(id)`; o gerente de topo tem `id_gerente` nulo.
- **FK composta:** a FK deve ter o mesmo número de colunas e tipos compatíveis com a chave referenciada.
- **Ciclos de FKs:** podem exigir inserção em etapas ou restrições adiadas (`DEFERRABLE`).
- **Integridade referencial entre bancos/sistemas distintos** não é garantida pelo SGBD (exige integração e controles de aplicação — arquivo `08`).

## 4. Álgebra relacional (desenvolvimento do item 1.3)

Conjunto de operadores que recebem relações e produzem relações (**fechamento**), base conceitual do SQL.

### 4.1 Operadores

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

### 4.2 Exemplos

Considere `Equipamento(id, tag, id_area)` e `Area(id_area, nome)`.

- Equipamentos da área "Bombeio": π<sub>tag</sub>(σ<sub>nome='Bombeio'</sub>(Equipamento ⋈ Area)).
- Em SQL: `SELECT e.tag FROM equipamento e JOIN area a ON a.id_area = e.id_area WHERE a.nome = 'Bombeio';`
- **Divisão:** "Fornecedores que vendem *todos* os materiais do catálogo" é uma divisão, não uma junção simples.

### 4.3 Relação com o SQL

| Álgebra | SQL (aproximação) |
|---|---|
| σ | `WHERE` |
| π | `SELECT coluna` |
| ⋈ | `JOIN ... ON` / `NATURAL JOIN` |
| ∪, ∩, − | `UNION`, `INTERSECT`, `EXCEPT` (`MINUS` em Oracle) |
| γ | `GROUP BY` + agregados |
| × | `CROSS JOIN` |

O SQL é **declarativo** (descreve o resultado), e o otimizador escolhe a ordem de operações equivalentes algebricamente (arquivo `05`).

## 5. Valores nulos e lógica de três valores

`NULL` significa **valor ausente ou desconhecido**, não zero nem texto vazio. Comparações com `NULL` produzem **desconhecido** (*unknown*) e não verdadeiro/falso; o SQL usa **lógica de três valores**. Consequências:

- `coluna = NULL` nunca é verdadeiro; use `IS NULL` / `IS NOT NULL`.
- `WHERE` retém apenas linhas cujo predicado é **verdadeiro** (descarta falso e desconhecido).
- `x NOT IN (subconsulta)` retorna desconhecido/nenhuma linha se a subconsulta contiver `NULL`; prefira `NOT EXISTS` quando houver nulos possíveis.
- Agregados (`SUM`, `AVG`, `COUNT(coluna)`) **ignoram** nulos; `COUNT(*)` conta linhas.
- Chaves primárias não aceitam nulos; FKs podem ser nulas (indicam ausência de vínculo).
- Em Oracle, string vazia é tratada como `NULL` — particularidade de produto.

## 6. Comparações conceituais

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

## 7. Aplicações e cenários

**Cenário (didático).** Exclui-se um departamento com professores cadastrados.
- Com `ON DELETE RESTRICT`: a exclusão é rejeitada; é preciso transferir ou excluir os professores antes.
- Com `ON DELETE CASCADE`: os professores são excluídos junto (risco: perda em cascata; avaliar em dados críticos).
- Com `ON DELETE SET NULL`: só é possível se `id_departamento` for anulável, o que contradiria "todo professor pertence a um departamento".

*Conclusão:* a ação referencial escolhida deve respeitar a regra de negócio (a cardinalidade mínima do modelo).

## 8. Atenção para a prova

*Inferência técnica e recomendação pedagógica; sem atribuir frequência à banca.*

- Identificar **qual tabela é pai e qual é filha** e onde fica a FK em 1:N, N:N (tabela associativa) e 1:1.
- Reconhecer que **sem `FOREIGN KEY` declarada não há integridade referencial** garantida pelo SGBD.
- Operador **não binário** entre os da álgebra: **projeção** (assim como seleção e renomeação, unários).
- `NULL` ≠ 0 ≠ ''; comparações com `=` não detectam nulos.
- Cuidado com alternativas absolutas ("toda tabela precisa de chave estrangeira", "a chave primária pode ser nula").
- *Evidência histórica (amostra de duas provas):* a Prova 6 de 2023 (Q26) tratou de operadores da álgebra relacional; a de 2023 (Q47) e a de 2018 (Q39) exigiram interpretar integridade referencial em código/dados SQL. Duas provas não permitem inferir frequência.

## 9. Síntese

- Relação = conjunto de tuplas; esquema (estrutura) × instância (conteúdo).
- Chaves: super → candidata (mínima) → primária (escolhida, não nula) / alternativa; estrangeira referencia outra relação.
- Restrições: domínio, chave, entidade, referencial, semânticas.
- Integridade referencial: FK = nulo ou chave existente; ações `RESTRICT/NO ACTION`, `CASCADE`, `SET NULL`, `SET DEFAULT`.
- Álgebra: σ π ρ (unários); ∪ ∩ − × ⋈ ÷ (binários); fundamentais: σ, π, ∪, −, ×, ρ.
- NULL: lógica de três valores; `IS NULL`; agregados ignoram nulos.

## 10. Pontos para a futura produção de questões (registro)

Conceitos: tipos de chave; integridade referencial; operadores da álgebra; nulos. Distinções: candidata×primária; entidade×referencial; unário×binário; interna×externa. Interpretação: escolher o DDL que preserva restrições citadas; prever resultado de consulta com nulos.

## 11. Referências

Bibliografia de apoio (itens marcados **verificado** foram conferidos em catálogos online em 2026-10-31; os demais, **não verificados** — edição/ano/páginas pendentes):

- CODD, E. F. "A Relational Model of Data for Large Shared Data Banks". *Communications of the ACM*, v. 13, n. 6, p. 377–387, 1970 — **verificado**.
- ELMASRI, R.; NAVATHE, S. B. *Sistemas de Banco de Dados*. São Paulo: Pearson (edição em português localizada: 6ª ed., 2011; o original em inglês, *Fundamentals of Database Systems*, 7ª ed., consta nos catálogos com ano 2015, 2016 ou 2017) — **verificado** em catálogos online.
- SILBERSCHATZ, A.; KORTH, H. F.; SUDARSHAN, S. *Database System Concepts*. 7th ed. McGraw-Hill, 2019 — **verificado**.
- ISO/IEC 9075 (Linguagem SQL) — norma do padrão SQL (edição não especificada nesta etapa).
- Edital Transpetro nº 04/2026.4, Anexo IV, itens 1.3 e 1.5.
