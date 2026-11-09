# Roteiro de podcast — M01: Arquitetura de Dados

## Identificação
- Concurso: Processo Seletivo Público TRANSPETRO 2026.4 (Edital nº 04/2026)
- Ênfase: 5 — Análise de Sistemas: Processos de Negócios
- Banca: Fundação Cesgranrio
- Módulo: M01 — Arquitetura de Dados
- Formato: revisão oral explicativa (duas vozes ou narração única)
- Fonte de referência: `notebooklm/fontes/M01_Arquitetura_Dados_Completo.md` e `notebooklm/resumos/M01_Arquitetura_Dados_Resumo.md`

## Como usar
Adicione ao NotebookLM a fonte completa do módulo e este roteiro. No recurso de áudio, use este arquivo como pauta. Ele é um guia de revisão e **não substitui** o material completo, que prevalece em caso de dúvida. Não contém estatística de incidência em prova nem questões oficiais; as perguntas de fixação são autorais do projeto, sem vínculo com a Cesgranrio.

## 1. Apresentação
Hoje revisamos o módulo M01, Arquitetura de Dados, da Ênfase 5 da Transpetro 2026.4, banca Fundação Cesgranrio. A ideia é percorrer os conceitos em ordem, comparar o que costuma ser confundido, marcar pontos de atenção e terminar com perguntas de fixação.

## 2. Contextualização no edital
Item 1 do Anexo IV (modelagem, modelo relacional, normalização, SQL, SGBD, ACID, desempenho, NoSQL, integração, modelagem dimensional, Big Data, qualidade e dados mestres).

## 3. Explicação dos conceitos
### 3.1 Do dado ao banco de dados
Dado, informação e conhecimento representam graus crescentes de interpretação e contexto. O banco de dados existe para tratar redundância, dependência entre programa e dados, concorrência, falhas e segurança. Um sistema de banco de dados reúne dados, SGBD, metadados e aplicações. A modelagem segue três níveis: conceitual (negócio), lógico (paradigma, como o relacional) e físico (SGBD).

### 3.2 Modelagem e modelo relacional
No DER há entidades, atributos (simples, composto, multivalorado, derivado, identificador) e relacionamentos com cardinalidade mínima e máxima. No mapeamento, 1:N coloca a chave estrangeira do lado N, N:N vira tabela associativa e atributo multivalorado vira nova tabela. No modelo relacional, relação é conjunto de tuplas; esquema é a estrutura e instância é o conteúdo. A hierarquia de chaves é super, candidata (mínima), primária (escolhida, não nula) e alternativa. Integridade referencial: a chave estrangeira é nula ou existe na tabela referenciada; ações RESTRICT/NO ACTION, CASCADE, SET NULL e SET DEFAULT.

### 3.3 Normalização
O objetivo é reduzir redundância e anomalias de inserção, atualização e exclusão. 1FN exige atomicidade; 2FN elimina dependência parcial; 3FN elimina dependência transitiva; BCNF exige que todo determinante seja superchave; 4FN trata multivaloradas; 5FN trata junção. A decomposição precisa ser sem perda de junção; a preservação de dependências é desejável, e a BCNF pode violá-la, enquanto a 3FN a garante. Desnormalizar é redundância deliberada por desempenho, com custo de consistência.

### 3.4 SQL, SGBD e desempenho
Os três esquemas (externo, conceitual, interno) dão independência lógica e física. SQL se divide em DDL, DML, DCL e TCL, sendo que o enquadramento do SELECT depende do autor. A ordem lógica de uma consulta é FROM, WHERE, GROUP BY, HAVING, SELECT, ORDER BY. Para desempenho: medir primeiro, usar índices (que custam na escrita), plano de execução e estatísticas, predicados sargáveis, particionamento e transações curtas.

### 3.5 Transações e ACID
Transação é unidade lógica de trabalho (COMMIT, ROLLBACK, SAVEPOINT). Atomicidade é tudo ou nada; Consistência leva de um estado válido a outro; Isolamento evita interferência; Durabilidade preserva o que foi confirmado (log/WAL). Anomalias: atualização perdida, leitura suja, leitura não repetível, fantasma e write skew. Níveis de isolamento crescentes: READ UNCOMMITTED, READ COMMITTED, REPEATABLE READ, SERIALIZABLE.

### 3.6 NoSQL, integração e dimensional
NoSQL: esquema flexível, escala horizontal, CAP e BASE; tipos chave-valor, documento, famílias de colunas e grafo. Integração: ETL (extrair, transformar, carregar), ELT (transforma no destino), transferência de arquivos e integração via base de dados. Modelagem dimensional: fato com medidas e dimensões com contexto, definindo a granularidade primeiro; estrela (desnormalizada) × floco de neve (normalizada); SCD tipos 0, 1, 2 e 3. Data lake guarda dado bruto com esquema na leitura; o risco é virar data swamp sem governança.

### 3.7 Qualidade e dados mestres
Metadados são dados sobre dados (técnicos, de negócio, operacionais, de qualidade, linhagem). Qualidade é adequação ao uso, medida por dimensões como acurácia, completude, consistência, unicidade, validade e atualidade. Dados mestres são entidades centrais compartilhadas (MDM, golden record); dados de referência são listas de códigos e valores; a governança define políticas e papéis (owner, steward, custodian).

## 4. Comparações para fixar
- Esquema × instância; chave candidata × primária × alternativa.
- 2FN (dependência parcial) × 3FN (dependência transitiva) × BCNF (todo determinante é superchave).
- Estrela × floco de neve; ETL × ELT; data lake × data warehouse (bruto, esquema na leitura × tratado, esquema na escrita).
- Independência lógica (muda o conceitual sem afetar os externos) × física (muda o interno sem afetar o conceitual).

## 5. Armadilhas conceituais (hipóteses de atenção)
São pontos em que a confusão é plausível, não afirmações sobre frequência na prova.
- Afirmar que BCNF sempre preserva dependências (a 3FN é que garante).
- Tratar NULL como valor comum: a lógica é de três valores e agregados ignoram nulos.
- Confundir os níveis de isolamento ou as anomalias que cada um evita.
- Dizer que SELECT pertence sem ressalva a DML: depende do autor; confira o enunciado.

## 6. Recapitulação
Retome em voz alta, na ordem: Do dado ao banco de dados; Modelagem e modelo relacional; Normalização; SQL, SGBD e desempenho; Transações e ACID; NoSQL, integração e dimensional; Qualidade e dados mestres. Para cada bloco, cite a definição central e uma diferença conceitual.

## 7. Perguntas de fixação (com respostas)
1. **Qual a diferença entre atomicidade e durabilidade?** — Atomicidade: a transação é tudo ou nada. Durabilidade: após o commit, o efeito é permanente, apoiado em log/WAL.
2. **Por que a granularidade é definida primeiro na modelagem dimensional?** — Porque determina o que uma linha da tabela fato representa e, com isso, quais dimensões e medidas são válidas.
3. **O que distingue SCD tipo 1 e tipo 2?** — Tipo 1 sobrescreve o valor (sem histórico); tipo 2 cria nova linha, preservando o histórico.
4. **Quando uma relação está em 3FN mas não em BCNF?** — Quando há um determinante que não é superchave, mas o dependente é atributo primo (exceção que a 3FN admite).

## Limites
- Roteiro construído a partir das sínteses do módulo; detalhes, exceções e referências estão no documento completo.
- Qualquer analogia usada na gravação deve ser apresentada como simplificação didática, com seu limite explícito.
- Itens marcados no material como "não verificados" mantêm essa ressalva no documento completo.
