# Relatório de Produção — Módulo 1: Arquitetura de Dados
**Data:** 2026-10-31 · **Prompt:** 02 (autorizado pelo usuário para o Módulo 1 apenas)

| Campo | Informação |
|---|---|
| Módulo | M01 — Arquitetura de Dados (item 1 do Anexo IV) |
| Itens oficiais | E5-001 (item 1) e E5-002 a E5-024 (subitens 1.1 a 1.23) |
| Arquivos produzidos | 10, em `conteudo/01-arquitetura-dados/` (≈ 23 mil palavras) |
| Itens cobertos (teoria produzida) | 23 de 23 subitens; item principal 1 incluído |
| Itens pendentes | 0 de cobertura teórica; **revisão e validação pendentes** |
| Fontes consultadas | Edital (Anexo IV), matriz aprovada, catálogo de provas 2018/2023; bibliografia de apoio: 8 referências **verificadas online** em 2026-10-31; as demais citadas por autor/título, **ainda não verificadas** |
| Revisão técnica | **Executada em 2026-10-31 (segunda passagem), com ressalvas:** 15 exemplos de SQL testados em SQLite (15/15 conforme o texto); 8 obras/artigos conferidos em catálogos online; **sem revisão por especialista humano independente** |
| Revisão didática | **Executada pelo autor** (estrutura obrigatória, progressão, comparações, síntese); sem validação pelo usuário |
| Status final | `VALIDADO` pelo usuário em 2026-10-31 (referências não verificadas listadas abaixo) |

## Mapa itens → arquivos

| Arquivo | Subitens do edital | Escopo |
|---|---|---|
| `01-fundamentos.md` | (apoio ao item 1; C5-001) | B, fora da contagem oficial |
| `02-modelagem-dados.md` | 1.1, 1.2, 1.8, 1.9 | A |
| `03-modelo-relacional.md` | 1.3, 1.5 | A |
| `04-normalizacao.md` | 1.4 | A |
| `05-sql-e-sgbd.md` | 1.10, 1.11, 1.12, 1.13, 1.15, 1.17 | A |
| `06-transacoes-e-acid.md` | 1.14, 1.16 | A |
| `07-bancos-nao-relacionais.md` | 1.18, 1.20, 1.23 | A |
| `08-integracao-e-etl.md` | 1.19 | A |
| `09-data-warehouse-e-big-data.md` | 1.7, 1.22 | A |
| `10-qualidade-e-governanca-dados.md` | 1.6, 1.21 | A |

## Validações realizadas

- Os 23 textos oficiais constam, literalmente, no cabeçalho de rastreabilidade de algum arquivo.
- Cada ID de E5-002 a E5-024 aparece em pelo menos um arquivo.
- Nenhuma expressão de dependência de leitura ("conforme explicado anteriormente", etc.) nos arquivos.
- Estrutura obrigatória presente (introdução, fundamentos, comparações, cenários, atenção para a prova, síntese, referências, pontos para questões).

## Decisões e ressalvas

1. **Item 1.7 (modelagem dimensional):** coberto integralmente no M01 (`09`), e não em arquivo do M07 como a matriz indicava; o M07 (7.5–7.7) complementará sem repetir. Matriz atualizada (v1.4).
2. **Material complementar:** `01-fundamentos.md` identificado como B (C5-001). Seções B dentro de arquivos A estão marcadas (mapeamento E-R→relacional; níveis de isolamento e bloqueios; APIs e mensageria; governança de dados).
3. **Álgebra relacional, Cypher, SCD, CAP/BASE, MVCC** são desenvolvimentos técnicos dos itens oficiais; o edital não os cita literalmente. Gatilhos e procedimentos armazenados não foram incluídos (itens de outra ênfase).
4. **Evidência de provas:** menções limitadas a "evidência observada em duas provas" (`catalogo-questoes-historicas.md`), sem afirmar frequência; itens sem questão nas duas provas (1.7, 1.8, 1.9, 1.15, 1.20, 1.21) estão registrados como previstos no edital.
5. **Referências:** as obras verificadas trazem edição/ano/páginas quando confirmados; as demais, só autor e título. As não verificadas precisam de conferência antes do status `VALIDADO`.
6. **Cenários** são hipotéticos e identificados como tais; nenhuma informação sobre sistemas internos da Transpetro foi inventada.
7. Nenhuma questão, simulado, flashcard ou alteração no site foi produzida.

## Resultado da revisão (2026-10-31)

**Testes de SQL (SQLite em memória, 15 verificações, todas conformes):** FK impede filho órfão e `RESTRICT` impede excluir pai; `SET NULL`; autojunção devolve os netos de 'Carlos' (Isidoro, João); `EXISTS` + `BETWEEN` inclusivo nos extremos; `INTERSECT` de duas condições **não** equivale a `BETWEEN`; `NOT IN` com `NULL` retorna nenhuma linha e `NOT EXISTS` corrige; `= NULL` nunca é verdadeiro; agregados ignoram `NULL`; `GROUP BY/HAVING`; `DELETE` revertido por `ROLLBACK`; atomicidade em transferência; divisão relacional por `NOT EXISTS` duplo; decomposição BCNF reconstrói a relação original. *Limite:* SQLite não valida a sintaxe de Oracle/PostgreSQL/SQL Server (por exemplo, `MERGE`, `ALTER ... MODIFY`, `DATE '...'`), que seguem como padrão/dialeto citado.

**Correções feitas na revisão:** (a) `NOT EXISTS` × `NOT IN` com nulos (arquivo 05); (b) nota sobre `MERGE` por SGBD e sobre alias no `WHERE` (arquivo 05); (c) SCD tipo 4 (arquivo 09); (d) referências atualizadas com dados verificados.

**Referências verificadas online (conferência em catálogos/bases):** Codd (CACM 13(6):377–387, 1970); Chen (TODS 1(1):9–36, 1976); Kimball & Ross (3ª ed., Wiley, 2013); Silberschatz et al. (7ª ed., McGraw-Hill, 2019); Elmasri & Navathe (edição em português localizada: 6ª, 2011; original em inglês 7ª com ano divergente nos catálogos); Hohpe & Woolf (Addison-Wesley, 2003); DAMA-DMBOK 2ª ed. (Technics, 2017); Sadalage & Fowler (Addison-Wesley, 2012).

**Referências ainda não verificadas:** Heuser; Gray & Reuter; White (*Hadoop*); Inmon; Loshin; Kimball & Caserta (*ETL Toolkit*); Brewer (2000) e Gilbert & Lynch (2002); normas ISO/IEC 9075, 11179 e 25012 (anos/partes não especificados).

**Pontos de atenção apontados na revisão (sem alteração):** (i) o arquivo 05 é o mais longo (≈ 3,2 mil palavras) e concentra seis subitens; pode ser dividido na etapa de revisão editorial se o usuário preferir; (ii) a convenção de leitura de cardinalidade (arquivo 02) é apresentada como recomendação pedagógica, não como regra da banca; (iii) exemplos de código são didáticos e não foram executados nos SGBDs de produção.

## Pendências

- Revisão por especialista humano (opcional) e validação pelo usuário; só então `VALIDADO`.
- Verificação online das referências restantes (lista acima) e dos anos/partes das normas ISO.
- Aprovação do usuário para continuar ao Módulo 2.
