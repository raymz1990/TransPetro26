# Questões oficiais — m01-arquitetura-dados — gabaritos comentados (T04 — Transpetro 2023 (Prova 6) e 2018 (Prova 15))

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

## OFI-000042 — Data warehouse: Data Staging Area (ETL)

*Questão oficial — Fundação Cesgranrio, Transpetro PSP RH 2018.1, Prova 15, questão 22.*

**Gabarito: B**

A **Data Staging Area** é a área intermediária onde os dados extraídos das fontes transacionais são **limpos, transformados e preparados** (o "T" do ETL) antes de serem carregados na área de apresentação do DW (Kimball).

- **A)** Incorreta. Data marts são subconjuntos do DW voltados a uma área de negócio; ficam na camada de apresentação.
- **B)** Correta. É a área de trânsito e transformação entre as fontes e o DW.
- **C)** Incorreta. "Dimensional Model Area" não é camada padrão da arquitetura.
- **D)** Incorreta. A Presentation Area é onde os dados já organizados ficam disponíveis para consulta.
- **E)** Incorreta. "Living Sample Area" não é camada de arquitetura de DW.

**Ponto de atenção:** Arquitetura de Kimball: fontes → **staging** (ETL) → **presentation** (data marts dimensionais) → ferramentas de acesso (BI).

**Revisão rápida:** Staging area = onde se extrai, limpa e transforma antes de carregar.

**Fonte:** Fundação Cesgranrio, Transpetro PSP RH 2018.1 (Edital nº 1), Analista de Sistemas Júnior — Processos de Negócio (2018), prova Prova 15, questão 22; gabarito: de terceiros (Ética), alterado em 09/05/2018; não validado contra a banca.

## OFI-000043 — SQL: fornecedores com venda em intervalo de datas

*Questão oficial — Fundação Cesgranrio, Transpetro PSP RH 2018.1, Prova 15, questão 38.*

**Gabarito: B**

Procura-se o fornecedor para o qual **exista ao menos uma linha de VENDA com a data dentro do intervalo**. A alternativa B conta, por fornecedor, as vendas com `DATA BETWEEN` (inclusivo nas duas pontas) e exige contagem maior que zero. (Os literais de data seguem a formatação do caderno.)

- **A)** Incorreta. O INTERSECT combina duas condições **avaliadas em linhas diferentes**: um fornecedor com uma venda antes de 05/01 e outra depois de 10/01 satisfaz as duas, mesmo sem nenhuma venda dentro do intervalo.
- **B)** Correta. Filtra as vendas no intervalo e exige que haja ao menos uma: resposta correta.
- **C)** Incorreta. O `OR` entre as duas condições é verdadeiro para **qualquer** data não nula, e não restringe ao intervalo (a sintaxe `UNIQUE` também é específica de dialeto).
- **D)** Incorreta. O UNION de duas condições separadas equivale ao OR: qualquer fornecedor com venda em qualquer data satisfaz uma delas.
- **E)** Incorreta. Retorna os fornecedores que **não** têm venda fora do intervalo, incluindo os que **nunca** venderam.

**Ponto de atenção:** Em consultas com intervalo, verifique se as condições são avaliadas **na mesma linha** (AND/BETWEEN) ou **em linhas diferentes** (INTERSECT, UNION), e o efeito de `NOT IN` e de `OR`.

**Revisão rápida:** Intervalo inclusivo: BETWEEN, ou >= AND <=, na mesma linha.

**Fonte:** Fundação Cesgranrio, Transpetro PSP RH 2018.1 (Edital nº 1), Analista de Sistemas Júnior — Processos de Negócio (2018), prova Prova 15, questão 38; gabarito: de terceiros (Ética), alterado em 09/05/2018; não validado contra a banca.

## OFI-000067 — Modelo relacional: chaves primária e estrangeira

*Questão oficial — Fundação Cesgranrio, Caixa Econômica Federal, Edital 1/2021/NM, Caderno de Tecnologia da Informação, questão 38.*

**Gabarito: E**

A conta é identificada por (agencia, conta), chave de CONTA_CORRENTE. Em CLIENTE, o par (agencia, conta) referencia a conta a que o cliente pertence: é **chave estrangeira** para CONTA_CORRENTE. Como a mesma conta tem até 5 titulares, a PK de CLIENTE deve incluir um atributo que distinga os titulares (como CPF).

- **A)** Incorreta. Uma conta pode ter várias movimentações no mesmo dia; sem hora e minuto, a chave (agencia, conta, data) repetiria.
- **B)** Incorreta. O CPF identifica o cliente (parte da chave candidata) e não referencia outra tabela do modelo apresentado.
- **C)** Incorreta. A data de abertura é atributo descritivo; (agencia, conta) já identifica a conta.
- **D)** Incorreta. "Titular" (1º a 5º) isoladamente não identifica o cliente; a chave deveria combinar conta e CPF (ou o titular), mas o argumento da alternativa não decorre do modelo.
- **E)** Correta. (agencia, conta) em CLIENTE referencia CONTA_CORRENTE: chave estrangeira.

**Ponto de atenção:** Pergunte: **o conjunto de colunas identifica a linha (PK) ou aponta para outra tabela (FK)?** Cuidado com chaves compostas.

**Revisão rápida:** FK: colunas que referenciam a PK de outra tabela.

**Fonte:** Fundação Cesgranrio, Caixa Econômica Federal, Edital 1/2021/NM, Técnico Bancário Novo — Tecnologia da Informação (2021), prova Caderno de Tecnologia da Informação (questões 31 a 60), questão 38; gabarito: definitivo (fonte oficial: portal da Cesgranrio); recursos sem alteração nem anulação.

## OFI-000068 — Metadados em SGBD: uso pelo próprio sistema

*Questão oficial — Fundação Cesgranrio, Caixa Econômica Federal, Edital 1/2021/NM, Caderno de Tecnologia da Informação, questão 39.*

**Gabarito: E**

O **catálogo (metadados)** descreve tabelas, colunas, tipos, chaves e privilégios. Ao receber um comando SQL, o SGBD consulta o catálogo para verificar se os objetos existem, se os tipos são compatíveis e se o usuário tem permissão: **validação** do comando.

- **A)** Incorreta. Metas de desempenho definidas pelo DBA não são o uso típico do catálogo.
- **B)** Incorreta. A escolha de páginas sujas para gravação é tarefa do gerenciador de buffer, não do catálogo.
- **C)** Incorreta. O isolamento é implementado por controle de concorrência (bloqueios, MVCC).
- **D)** Incorreta. A recuperação usa log de transações e backups.
- **E)** Correta. O catálogo é consultado para validar tabelas, colunas e permissões na análise do comando.

**Ponto de atenção:** Quem usa o dicionário de dados no dia a dia do SGBD: **análise e otimização de consultas**, verificação de privilégios, restrições.

**Revisão rápida:** Metadados: usados para validar e otimizar comandos.

**Fonte:** Fundação Cesgranrio, Caixa Econômica Federal, Edital 1/2021/NM, Técnico Bancário Novo — Tecnologia da Informação (2021), prova Caderno de Tecnologia da Informação (questões 31 a 60), questão 39; gabarito: definitivo (fonte oficial: portal da Cesgranrio); recursos sem alteração nem anulação.

## OFI-000073 — SGBD distribuído federado

*Questão oficial — Fundação Cesgranrio, Caixa Econômica Federal, Edital 1/2021/NM, Caderno de Tecnologia da Informação, questão 58.*

**Gabarito: C**

No **SGBD federado** (ou multibanco), SGBDs autônomos e frequentemente heterogêneos são **fracamente acoplados** por um **middleware** que oferece visão integrada. Em oposição, o SGBD distribuído homogêneo é fortemente acoplado.

- **A)** Incorreta. Grafos classificam o modelo de dados, e não o acoplamento.
- **B)** Incorreta. Hierárquico é um modelo de dados antigo.
- **C)** Correta. Federado: componentes autônomos, acoplamento fraco e middleware.
- **D)** Incorreta. Orientado a objetos classifica o modelo de dados.
- **E)** Incorreta. NoSQL é uma família de modelos, sem relação com o acoplamento descrito.

**Ponto de atenção:** Distinga **classificação por modelo de dados** (relacional, grafo, documento...) de **classificação por distribuição** (centralizado, distribuído homogêneo, federado).

**Revisão rápida:** Federado = autônomos, fracamente acoplados, middleware.

**Fonte:** Fundação Cesgranrio, Caixa Econômica Federal, Edital 1/2021/NM, Técnico Bancário Novo — Tecnologia da Informação (2021), prova Caderno de Tecnologia da Informação (questões 31 a 60), questão 58; gabarito: definitivo (fonte oficial: portal da Cesgranrio); recursos sem alteração nem anulação.

## OFI-000100 — Modelo dimensional: medidas aditivas

*Questão oficial — Fundação Cesgranrio, BNDES, Edital 1/2024, Prova 3, questão 65.*

**Gabarito: E**

A **quantidade de leitos** é uma medida **aditiva**: pode ser somada por qualquer dimensão (município → estado). A **taxa de mortalidade** é medida **não aditiva** (razão): somar taxas ou tirar média simples não dá a taxa do estado, que exigiria os numeradores e denominadores (óbitos e nascidos vivos), não disponíveis no modelo.

- **A)** Incorreta. Dividir leitos por taxa não tem sentido de negócio.
- **B)** Incorreta. Idem: dividir taxa por leitos não tem sentido de negócio.
- **C)** Incorreta. A média simples das taxas dos municípios ignora o tamanho de cada população; não dá a taxa do estado (sem os pesos, que o modelo não traz).
- **D)** Incorreta. Somar taxas (razões) é incorreto: medida não aditiva.
- **E)** Correta. A soma dos leitos dos municípios é válida: medida aditiva.

**Ponto de atenção:** Medidas: **aditivas** (somam em todas as dimensões), **semiaditivas** (somam em algumas, como saldos) e **não aditivas** (razões, taxas, preços unitários: recalcular a partir dos componentes).

**Revisão rápida:** Quantidade soma; taxa não soma.

**Fonte:** Fundação Cesgranrio, BNDES, Edital 1/2024, Analista — Análise de Sistemas: Desenvolvimento (2024), prova Prova 3 (manhã), questão 65; gabarito: final após recursos (documento da banca, via espelho QConcursos).

## OFI-000101 — Data lake: metadados

*Questão oficial — Fundação Cesgranrio, BNDES, Edital 1/2024, Prova 3, questão 66.*

**Gabarito: E**

O data lake aplica o esquema **na leitura** (*schema-on-read*); por isso, os metadados **não precisam ser definidos antes** da ingestão e podem ser **descobertos automaticamente em parte** (por *crawlers*/catálogos de dados que inferem esquemas e tipos). A catalogação é essencial para evitar o **"pântano de dados"**.

- **A)** Incorreta. Não há padrão ANSI consagrado de metadados de data lakes.
- **B)** Incorreta. Os metadados nem sempre descrevem completa e corretamente todos os dados (o risco do data swamp).
- **C)** Incorreta. A definição prévia é característica do DW (esquema na escrita).
- **D)** Incorreta. O *information schema* é recurso de bancos relacionais.
- **E)** Correta. Ferramentas de catálogo inferem parte dos metadados automaticamente.

**Ponto de atenção:** Lake: **schema-on-read**, metadados descobertos e curados; DW: **schema-on-write**, modelo definido antes da carga.

**Revisão rápida:** Lake: metadados em parte descobertos automaticamente.

**Fonte:** Fundação Cesgranrio, BNDES, Edital 1/2024, Analista — Análise de Sistemas: Desenvolvimento (2024), prova Prova 3 (manhã), questão 66; gabarito: final após recursos (documento da banca, via espelho QConcursos).

## OFI-000102 — Governança de dados: monitoramento da qualidade

*Questão oficial — Fundação Cesgranrio, BNDES, Edital 1/2024, Prova 3, questão 67.*

**Gabarito: E**

O monitoramento da qualidade é **contínuo** e baseado em **indicadores** (completude, unicidade, validade, consistência, atualidade), que orientam **ações corretivas** e a melhoria dos processos.

- **A)** Incorreta. A interoperabilidade depende de padrões e integração, e não é característica do monitoramento.
- **B)** Incorreta. Monitorar apenas após decisões erradas é reativo; a governança é preventiva.
- **C)** Incorreta. O controle de acesso é função da segurança e da governança de acesso.
- **D)** Incorreta. Um intervalo de dez anos é incompatível com o monitoramento.
- **E)** Correta. Indicadores orientam as ações corretivas: característica do monitoramento.

**Ponto de atenção:** Qualidade de dados: **dimensões** (completude, acurácia, consistência, unicidade, atualidade, validade) → **indicadores** → **ações corretivas**.

**Revisão rápida:** Qualidade: medir com indicadores e corrigir.

**Fonte:** Fundação Cesgranrio, BNDES, Edital 1/2024, Analista — Análise de Sistemas: Desenvolvimento (2024), prova Prova 3 (manhã), questão 67; gabarito: final após recursos (documento da banca, via espelho QConcursos).

## OFI-000103 — DER: especialização total e sobreposta

*Questão oficial — Fundação Cesgranrio, BNDES, Edital 1/2024, Prova 3, questão 68.*

**Gabarito: A**

**Total**: todo prédio pertence a pelo menos uma especialização ("apenas isso"). **Sobreposta** (*overlapping*): um prédio pode pertencer às duas (uso misto). Logo, **total e sobreposta**. "Parcial" e "total" descrevem a participação; "disjunta" e "sobreposta", a exclusão mútua.

- **A)** Correta. Todo prédio está em pelo menos uma e pode estar nas duas: total e sobreposta.
- **B)** Incorreta. "Total e parcial" são conceitos do mesmo eixo; não se combinam.
- **C)** Incorreta. Disjunta exigiria que nenhum prédio fosse misto.
- **D)** Incorreta. Parcial admitiria prédios em nenhuma das duas, o que o texto exclui.
- **E)** Incorreta. Parcial e disjunta contradizem o enunciado nos dois eixos.

**Ponto de atenção:** Dois eixos independentes: **cobertura** (total × parcial) e **sobreposição** (disjunta × sobreposta). Duas respostas do mesmo eixo nunca combinam.

**Revisão rápida:** Total: sem prédio fora; sobreposta: pode ser misto.

**Fonte:** Fundação Cesgranrio, BNDES, Edital 1/2024, Analista — Análise de Sistemas: Desenvolvimento (2024), prova Prova 3 (manhã), questão 68; gabarito: final após recursos (documento da banca, via espelho QConcursos).

## OFI-000104 — Nível de isolamento SERIALIZABLE

*Questão oficial — Fundação Cesgranrio, BNDES, Edital 1/2024, Prova 3, questão 69.*

**Gabarito: C**

No padrão SQL, os níveis são **READ UNCOMMITTED, READ COMMITTED, REPEATABLE READ e SERIALIZABLE**. O **SERIALIZABLE** é o **mais alto**: o resultado equivale à execução **em série** das transações, evitando leituras sujas, não repetíveis e fantasmas. Isso **não** significa que só uma execute por vez, e sim que o efeito é **equivalente** a alguma ordem serial.

- **A)** Incorreta. Não é modo somente leitura.
- **B)** Incorreta. Garante o efeito serial, mas as transações podem executar concorrentemente (controle por bloqueios ou MVCC).
- **C)** Correta. É o nível mais alto de isolamento.
- **D)** Incorreta. "Serializable" não se refere a objetos JSON.
- **E)** Incorreta. Não trata de envio de dados entre transações.

**Ponto de atenção:** "Serializável" ≠ "executar uma por vez": é **equivalência a uma execução serial**. Mais isolamento = menos concorrência e mais custo.

**Revisão rápida:** SERIALIZABLE: mais alto isolamento, efeito equivalente ao serial.

**Fonte:** Fundação Cesgranrio, BNDES, Edital 1/2024, Analista — Análise de Sistemas: Desenvolvimento (2024), prova Prova 3 (manhã), questão 69; gabarito: final após recursos (documento da banca, via espelho QConcursos).

## OFI-000105 — DDL: cláusula CHECK

*Questão oficial — Fundação Cesgranrio, BNDES, Edital 1/2024, Prova 3, questão 70.*

**Gabarito: B**

A restrição **CHECK** valida uma **condição lógica** sobre os valores da linha (por exemplo, `A >= 0`). A unicidade usa **UNIQUE**; a existência em outra tabela usa **FOREIGN KEY**; a obrigatoriedade de preenchimento usa **NOT NULL**.

- **A)** Incorreta. Unicidade é UNIQUE (ou PRIMARY KEY).
- **B)** Correta. CHECK verifica condições como `A >= 0`.
- **C)** Incorreta. Existência em outra tabela é chave estrangeira.
- **D)** Incorreta. CHECK não restringe o acesso de leitura a linhas de outra tabela.
- **E)** Incorreta. Preenchimento obrigatório é NOT NULL.

**Ponto de atenção:** Restrições: **PRIMARY KEY / UNIQUE** (unicidade), **FOREIGN KEY** (integridade referencial), **NOT NULL** (obrigatoriedade), **CHECK** (condição), **DEFAULT** (valor padrão).

**Revisão rápida:** CHECK = condição lógica sobre o valor.

**Fonte:** Fundação Cesgranrio, BNDES, Edital 1/2024, Analista — Análise de Sistemas: Desenvolvimento (2024), prova Prova 3 (manhã), questão 70; gabarito: final após recursos (documento da banca, via espelho QConcursos).
