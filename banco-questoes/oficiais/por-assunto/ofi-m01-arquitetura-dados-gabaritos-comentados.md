# Questões oficiais — m01-arquitetura-dados — gabaritos comentados (T04 — Transpetro 2023 (Prova 6))

## OFI-000001 — Álgebra relacional: operador unário

*Questão oficial — Fundação Cesgranrio, Transpetro PSP/Terra 002/2023, Prova 6, questão 26.*

**Gabarito: B**

Operadores **binários** recebem duas relações; os **unários** recebem uma. Projeção (π) e seleção (σ) são unários; divisão, junções, produto cartesiano, união, interseção e diferença são binários.

- **A)** Incorreta. Divisão relaciona duas relações (dividendo e divisor); é binária.
- **B)** Correta. Projeção escolhe colunas de **uma** relação; é unária (assim como a seleção e o renomear).
- **C)** Incorreta. A junção natural combina duas relações por atributos comuns; é binária.
- **D)** Incorreta. A junção externa esquerda combina duas relações preservando as linhas da esquerda; é binária.
- **E)** Incorreta. O produto cartesiano combina todas as linhas de duas relações; é binário.

**Ponto de atenção:** Fixe os unários: **seleção, projeção e renomeação**. Todo o restante da álgebra relacional básica é binário.

**Revisão rápida:** Unários: σ, π, ρ. Binários: ∪, ∩, −, ×, ⋈ e ÷.

**Fonte:** Fundação Cesgranrio, Transpetro PSP/Terra 002/2023 (Edital nº 2), Análise de Sistemas — Processos de Negócios (2023), prova Prova 6, questão 26; gabarito: de terceiros (QConcursos), alterado em 9/01/2024; não validado contra a banca.

## OFI-000002 — Desempenho de banco de dados: desnormalização controlada

*Questão oficial — Fundação Cesgranrio, Transpetro PSP/Terra 002/2023, Prova 6, questão 45.*

**Gabarito: B**

A **desnormalização controlada** reduz o número de junções em consultas frequentes (trocando redundância por leitura mais rápida), e é uma técnica reconhecida de ajuste de desempenho. Todas as outras ações pioram o desempenho ou não garantem o que afirmam.

- **A)** Incorreta. Execução estritamente serial elimina a concorrência e derruba o desempenho; a correção é garantida por controle de concorrência (isolamento, bloqueios, MVCC), não por serialização total.
- **B)** Correta. Reduz junções custosas em consultas muito frequentes; tem custo em redundância e manutenção, mas melhora o desempenho de leitura.
- **C)** Incorreta. DISTINCT acrescenta ordenação ou *hash* para eliminar duplicatas e pode alterar o resultado; trocar todos os SELECT por ele é prejudicial.
- **D)** Incorreta. ORDER BY adiciona custo de ordenação; deve ser usado só quando a ordem for necessária.
- **E)** Incorreta. Fragmentação de índice **degrada** o desempenho; o ajuste correto é reorganizar ou reconstruir índices.

**Ponto de atenção:** Desempenho tem *trade-offs*: desnormalizar melhora leitura e piora escrita/consistência. Cuidado com alternativas que usam "todos", "sempre" e "única forma".

**Revisão rápida:** Ajuste: índices adequados, consultas sargáveis, desnormalização controlada, estatísticas atualizadas.

**Fonte:** Fundação Cesgranrio, Transpetro PSP/Terra 002/2023 (Edital nº 2), Análise de Sistemas — Processos de Negócios (2023), prova Prova 6, questão 45; gabarito: de terceiros (QConcursos), alterado em 9/01/2024; não validado contra a banca.

## OFI-000003 — Bancos de documentos x relacionais x grafos

*Questão oficial — Fundação Cesgranrio, Transpetro PSP/Terra 002/2023, Prova 6, questão 46.*

**Gabarito: D**

Bancos de documentos (MongoDB, CouchDB) guardam documentos **JSON/BSON**, de esquema flexível, adequados a dados semiestruturados. SQL e relações são do modelo relacional; vértices e arestas são dos grafos.

- **A)** Incorreta. SQL e relações matemáticas caracterizam o modelo relacional.
- **B)** Incorreta. Vértices e arestas caracterizam o modelo de grafos.
- **C)** Incorreta. A otimização para consultas por relacionamentos (travessias) é típica de grafos.
- **D)** Correta. Documentos em JSON/BSON com esquema flexível são a característica central dos bancos de documentos.
- **E)** Incorreta. Normalização com chaves estrangeiras é característica do modelo relacional; documentos favorecem agregados embutidos.

**Ponto de atenção:** Associe cada família à sua estrutura: **tabelas/SQL** (relacional), **JSON/BSON** (documentos), **nós e arestas** (grafos), **chave-valor** e **colunar**.

**Revisão rápida:** Documentos = JSON/BSON, esquema flexível; grafos = nós/arestas; relacional = tabelas/SQL.

**Fonte:** Fundação Cesgranrio, Transpetro PSP/Terra 002/2023 (Edital nº 2), Análise de Sistemas — Processos de Negócios (2023), prova Prova 6, questão 46; gabarito: de terceiros (QConcursos), alterado em 9/01/2024; não validado contra a banca.

## OFI-000004 — Banco de grafos: consulta em Cypher

*Questão oficial — Fundação Cesgranrio, Transpetro PSP/Terra 002/2023, Prova 6, questão 48.*

**Gabarito: A**

Em Cypher, `MATCH` descreve um padrão; `(p)-[:TIPO]->(x)` segue a relação de `p` para `x`, e `WHERE` filtra. A consulta A localiza a pessoa de nome Alice e retorna os nós ligados por `AMIGO_DE` a partir dela.

- **A)** Correta. Padrão válido: Alice como origem, relação `AMIGO_DE` saindo dela e retorno dos amigos.
- **B)** Incorreta. Inverte a direção da seta, retornando quem aponta para Alice; com a relação modelada de Alice para o amigo, não retorna os amigos dela.
- **C)** Incorreta. Usa a relação `INIMIGO_DE`; retorna inimigos, não amigos.
- **D)** Incorreta. É SQL relacional e não se aplica a um banco de grafos.
- **E)** Incorreta. `FIND` não é cláusula do Cypher; a sintaxe é inválida.

**Ponto de atenção:** O edital não cita Cypher: a questão exige apenas **ler um padrão de grafo** (nó, seta, tipo de relação). Direção da seta e tipo de relação são os distratores. Aderência: o item 1.18 trata de NoSQL, e o Cypher foi cobrado como exemplo.

**Revisão rápida:** Cypher: `MATCH (a)-[:REL]->(b) WHERE ... RETURN b`.

**Fonte:** Fundação Cesgranrio, Transpetro PSP/Terra 002/2023 (Edital nº 2), Análise de Sistemas — Processos de Negócios (2023), prova Prova 6, questão 48; gabarito: de terceiros (QConcursos), alterado em 9/01/2024; não validado contra a banca.

## OFI-000005 — SQL: autojunção em tabela de hierarquia

*Questão oficial — Fundação Cesgranrio, Transpetro PSP/Terra 002/2023, Prova 6, questão 49.*

**Gabarito: A**

Neto de Carlos = filho de um filho de Carlos. Na **autojunção**, `f1` representa a geração dos filhos (`f1.pai = 'Carlos'`) e `f2` a dos netos, ligando o filho de `f1` ao pai de `f2` (`f1.filho = f2.pai`). Filhos de Carlos: Eriko e Fabio; seus filhos: Isidoro e João (`f2.filho`).

- **A)** Correta. Junção filho→pai com filtro em Carlos; projeta `f2.filho`, retornando Isidoro e João.
- **B)** Incorreta. Procura o **pai do pai** de Carlos (avô), com a junção invertida; retornaria Andre.
- **C)** Incorreta. Faz a junção correta, mas projeta `f1.pai`, que é sempre Carlos; retorna 'Carlos' (duas vezes).
- **D)** Incorreta. Junta linhas com o mesmo pai (irmãos); retornaria Eriko e Fabio (filhos), incluindo o próprio.
- **E)** Incorreta. Junta linhas com o mesmo filho; devolve apenas os próprios filhos de Carlos.

**Ponto de atenção:** Em autojunção, defina o **papel de cada alias** (f1 = pai, f2 = filho) antes de montar o `ON`. Conferir a saída com a tabela de exemplo elimina os distratores.

**Revisão rápida:** Neto = `f1.filho = f2.pai`; projeta-se `f2.filho`.

**Fonte:** Fundação Cesgranrio, Transpetro PSP/Terra 002/2023 (Edital nº 2), Análise de Sistemas — Processos de Negócios (2023), prova Prova 6, questão 49; gabarito: de terceiros (QConcursos), alterado em 9/01/2024; não validado contra a banca.

## OFI-000006 — Metadados em SGBD relacional

*Questão oficial — Fundação Cesgranrio, Transpetro PSP/Terra 002/2023, Prova 6, questão 50.*

**Gabarito: E**

Metadados são **dados sobre dados**: o catálogo (dicionário de dados) guarda definições de tabelas, colunas, tipos, chaves, restrições, índices e permissões do banco.

- **A)** Incorreta. Total de vendas é **dado** de negócio, não metadado.
- **B)** Incorreta. Senhas e permissões de sistema operacional estão fora do catálogo do SGBD (o catálogo guarda usuários e privilégios do banco, e não senhas em claro).
- **C)** Incorreta. Código-fonte de aplicativos não é armazenado no catálogo.
- **D)** Incorreta. Backups são cópias dos dados, não metadados.
- **E)** Correta. Esquemas, tipos de dados e restrições são o conteúdo típico do dicionário de dados.

**Ponto de atenção:** Pergunte: a informação descreve a **estrutura** (metadado) ou é o **conteúdo** (dado)?

**Revisão rápida:** Metadado = dado sobre os dados (catálogo/dicionário).

**Fonte:** Fundação Cesgranrio, Transpetro PSP/Terra 002/2023 (Edital nº 2), Análise de Sistemas — Processos de Negócios (2023), prova Prova 6, questão 50; gabarito: de terceiros (QConcursos), alterado em 9/01/2024; não validado contra a banca.

## OFI-000007 — SGBD: otimizador de consultas (alternativa NÃO)

*Questão oficial — Fundação Cesgranrio, Transpetro PSP/Terra 002/2023, Prova 6, questão 51.*

**Gabarito: D**

O otimizador **não altera o esquema**: ele escolhe o melhor plano de execução (métodos de acesso, ordem e algoritmo de junção) com base em estatísticas e custo. Criar tabelas é papel do DBA ou da aplicação.

- **A)** Incorreta. Escolher o plano de menor custo é a função central do otimizador.
- **B)** Incorreta. Decidir entre varredura sequencial e uso de índice é escolha de método de acesso, tarefa do otimizador.
- **C)** Incorreta. Estatísticas (cardinalidade, seletividade) alimentam o modelo de custo.
- **D)** Correta. Criação de tabelas não é função do otimizador; é a alternativa que **não** representa sua funcionalidade.
- **E)** Incorreta. Escolher ordem e algoritmo de junção é típico do otimizador.

**Ponto de atenção:** Em questões "NÃO", localize a única afirmativa **fora do papel** do componente. O otimizador atua sobre o **plano**, nunca sobre o esquema.

**Revisão rápida:** Otimizador: gera planos, estima custo com estatísticas, escolhe o menor.

**Fonte:** Fundação Cesgranrio, Transpetro PSP/Terra 002/2023 (Edital nº 2), Análise de Sistemas — Processos de Negócios (2023), prova Prova 6, questão 51; gabarito: de terceiros (QConcursos), alterado em 9/01/2024; não validado contra a banca.

## OFI-000008 — Data lakes e Big Data

*Questão oficial — Fundação Cesgranrio, Transpetro PSP/Terra 002/2023, Prova 6, questão 52.*

**Gabarito: B**

Um data lake guarda dados **brutos em qualquer formato**, aplicando o esquema na leitura (*schema-on-read*), o que dá flexibilidade a análises diversas.

- **A)** Incorreta. O data lake mantém o dado bruto; a estruturação ocorre na leitura ou em etapas posteriores, não na ingestão.
- **B)** Correta. Aceita estruturados, semiestruturados e não estruturados, com flexibilidade de processamento.
- **C)** Incorreta. Costumam usar armazenamento distribuído/de objetos (HDFS, S3 etc.) e não "apenas sistemas de arquivos convencionais".
- **D)** Incorreta. Aceitam também dados estruturados e semiestruturados.
- **E)** Incorreta. São justamente indicados para Big Data pela variedade de tipos suportados.

**Ponto de atenção:** "Apenas" e "somente" são sinais de alternativa errada. Compare com o DW: **esquema na escrita** (DW) × **esquema na leitura** (lake).

**Revisão rápida:** Lake = dado bruto, todos os formatos, schema-on-read.

**Fonte:** Fundação Cesgranrio, Transpetro PSP/Terra 002/2023 (Edital nº 2), Análise de Sistemas — Processos de Negócios (2023), prova Prova 6, questão 52; gabarito: de terceiros (QConcursos), alterado em 9/01/2024; não validado contra a banca.

## OFI-000009 — Propriedades ACID

*Questão oficial — Fundação Cesgranrio, Transpetro PSP/Terra 002/2023, Prova 6, questão 53.*

**Gabarito: C**

**A**tomicidade = tudo ou nada; **C**onsistência = o banco sai de um estado válido para outro válido; **I**solamento = transações concorrentes não se interferem; **D**urabilidade = o que foi confirmado persiste, mesmo com falha.

- **A)** Incorreta. Todas as definições estão trocadas entre as propriedades (a definição dada para atomicidade é a de consistência, e assim por diante).
- **B)** Incorreta. Contradiz as quatro propriedades: subdivide a atomicidade, dispensa a integridade, mistura transações e admite desfazer o que foi confirmado.
- **C)** Correta. Todas as quatro definições estão corretas.
- **D)** Incorreta. Define atomicidade como isolamento, consistência como atomicidade, isolamento como consistência e durabilidade como subtransações; todas trocadas.
- **E)** Incorreta. Define atomicidade como durabilidade, consistência como isolamento, isolamento como atomicidade e durabilidade como consistência; todas trocadas.

**Ponto de atenção:** O banco troca as definições entre as letras: **memorize a definição de cada letra**, e não a lista de frases. Basta uma definição trocada para eliminar a alternativa.

**Revisão rápida:** ACID: tudo-ou-nada, válido→válido, sem interferência, confirmado persiste.

**Fonte:** Fundação Cesgranrio, Transpetro PSP/Terra 002/2023 (Edital nº 2), Análise de Sistemas — Processos de Negócios (2023), prova Prova 6, questão 53; gabarito: de terceiros (QConcursos), alterado em 9/01/2024; não validado contra a banca.

## OFI-000010 — Modelagem conceitual

*Questão oficial — Fundação Cesgranrio, Transpetro PSP/Terra 002/2023, Prova 6, questão 63.*

**Gabarito: E**

O modelo **conceitual** (ex.: MER/DER) é o mais abstrato: define entidades, atributos e relacionamentos do negócio, sem depender de SGBD. Índices, partições e armazenamento pertencem ao modelo **físico**; tabelas e chaves, ao **lógico**.

- **A)** Incorreta. Índices e partições são do nível físico.
- **B)** Incorreta. Otimização e índices são do nível físico.
- **C)** Incorreta. A estrutura física das tabelas é do nível físico (ou lógico, no caso das tabelas).
- **D)** Incorreta. Detalhes de armazenamento em disco são do nível físico.
- **E)** Correta. Independência do SGBD e definição de entidades, atributos e relacionamentos caracterizam o nível conceitual.

**Ponto de atenção:** Conceitual = negócio e independência de tecnologia; lógico = modelo de dados (relacional); físico = SGBD, armazenamento e desempenho.

**Revisão rápida:** Conceitual → lógico → físico, do mais abstrato ao mais próximo do SGBD.

**Fonte:** Fundação Cesgranrio, Transpetro PSP/Terra 002/2023 (Edital nº 2), Análise de Sistemas — Processos de Negócios (2023), prova Prova 6, questão 63; gabarito: de terceiros (QConcursos), alterado em 9/01/2024; não validado contra a banca.

## OFI-000011 — Normalização: objetivo

*Questão oficial — Fundação Cesgranrio, Transpetro PSP/Terra 002/2023, Prova 6, questão 64.*

**Gabarito: A**

A normalização busca **reduzir a redundância** e evitar anomalias de inserção, atualização e exclusão, de modo que cada fato seja registrado em um único lugar.

- **A)** Correta. Elimina duplicações e concentra cada informação em um só lugar; é o objetivo central.
- **B)** Incorreta. Inverte o objetivo: a normalização reduz a redundância.
- **C)** Incorreta. A economia de espaço é efeito colateral, não o objetivo principal.
- **D)** Incorreta. Normalizar costuma aumentar o número de junções; ganho de desempenho de leitura é objetivo da desnormalização.
- **E)** Incorreta. Descrição visual da estrutura física não tem relação com normalização.

**Ponto de atenção:** Cuidado com a confusão entre normalização (consistência, menos redundância) e desnormalização (desempenho de leitura).

**Revisão rápida:** Normalizar = menos redundância e menos anomalias.

**Fonte:** Fundação Cesgranrio, Transpetro PSP/Terra 002/2023 (Edital nº 2), Análise de Sistemas — Processos de Negócios (2023), prova Prova 6, questão 64; gabarito: de terceiros (QConcursos), alterado em 9/01/2024; não validado contra a banca.
