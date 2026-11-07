# Simulado específico 02 — 50 questões (oficiais e autorais)

**Status:** rascunho · **Tempo:** 193 min · **Questões:** 50

**Critério de distribuição:** Mesma distribuição pedagógica do SIM-ESP-01, com M1 = 11 (há mais questões disponíveis). Até metade das questões de cada módulo é oficial, quando há. Não é distribuição oficial da prova.

**Observações:** Disjunto do SIM-ESP-01. Contém questões oficiais (Transpetro 2023) e autorais da expansão T05, ainda `em_revisao` (aguardam validação do usuário).

Composição: tipo {'oficial': 26, 'autoral': 24} · status {'em_revisao': 39, 'validada': 11} · dificuldade {'media': 29, 'facil': 14, 'dificil': 7}

## 1. OFI-000002 — Desempenho de banco de dados: desnormalização controlada

*Questão oficial — Fundação Cesgranrio, Transpetro PSP/Terra 002/2023, Prova 6, questão 45.* · item 1.17 · Média · gabarito **B**

A **desnormalização controlada** reduz o número de junções em consultas frequentes (trocando redundância por leitura mais rápida), e é uma técnica reconhecida de ajuste de desempenho. Todas as outras ações pioram o desempenho ou não garantem o que afirmam.

- **A)** Incorreta. Execução estritamente serial elimina a concorrência e derruba o desempenho; a correção é garantida por controle de concorrência (isolamento, bloqueios, MVCC), não por serialização total.
- **B)** Correta. Reduz junções custosas em consultas muito frequentes; tem custo em redundância e manutenção, mas melhora o desempenho de leitura.
- **C)** Incorreta. DISTINCT acrescenta ordenação ou *hash* para eliminar duplicatas e pode alterar o resultado; trocar todos os SELECT por ele é prejudicial.
- **D)** Incorreta. ORDER BY adiciona custo de ordenação; deve ser usado só quando a ordem for necessária.
- **E)** Incorreta. Fragmentação de índice **degrada** o desempenho; o ajuste correto é reorganizar ou reconstruir índices.

**Revisão rápida:** Ajuste: índices adequados, consultas sargáveis, desnormalização controlada, estatísticas atualizadas.

## 2. OFI-000001 — Álgebra relacional: operador unário

*Questão oficial — Fundação Cesgranrio, Transpetro PSP/Terra 002/2023, Prova 6, questão 26.* · item 1.3 · Fácil · gabarito **B**

Operadores **binários** recebem duas relações; os **unários** recebem uma. Projeção (π) e seleção (σ) são unários; divisão, junções, produto cartesiano, união, interseção e diferença são binários.

- **A)** Incorreta. Divisão relaciona duas relações (dividendo e divisor); é binária.
- **B)** Correta. Projeção escolhe colunas de **uma** relação; é unária (assim como a seleção e o renomear).
- **C)** Incorreta. A junção natural combina duas relações por atributos comuns; é binária.
- **D)** Incorreta. A junção externa esquerda combina duas relações preservando as linhas da esquerda; é binária.
- **E)** Incorreta. O produto cartesiano combina todas as linhas de duas relações; é binário.

**Revisão rápida:** Unários: σ, π, ρ. Binários: ∪, ∩, −, ×, ⋈ e ÷.

## 3. OFI-000043 — SQL: fornecedores com venda em intervalo de datas

*Questão oficial — Fundação Cesgranrio, Transpetro PSP RH 2018.1, Prova 15, questão 38.* · item 1.10 · Difícil · gabarito **B**

Procura-se o fornecedor para o qual **exista ao menos uma linha de VENDA com a data dentro do intervalo**. A alternativa B conta, por fornecedor, as vendas com `DATA BETWEEN` (inclusivo nas duas pontas) e exige contagem maior que zero. (Os literais de data seguem a formatação do caderno.)

- **A)** Incorreta. O INTERSECT combina duas condições **avaliadas em linhas diferentes**: um fornecedor com uma venda antes de 05/01 e outra depois de 10/01 satisfaz as duas, mesmo sem nenhuma venda dentro do intervalo.
- **B)** Correta. Filtra as vendas no intervalo e exige que haja ao menos uma: resposta correta.
- **C)** Incorreta. O `OR` entre as duas condições é verdadeiro para **qualquer** data não nula, e não restringe ao intervalo (a sintaxe `UNIQUE` também é específica de dialeto).
- **D)** Incorreta. O UNION de duas condições separadas equivale ao OR: qualquer fornecedor com venda em qualquer data satisfaz uma delas.
- **E)** Incorreta. Retorna os fornecedores que **não** têm venda fora do intervalo, incluindo os que **nunca** venderam.

**Revisão rápida:** Intervalo inclusivo: BETWEEN, ou >= AND <=, na mesma linha.

## 4. OFI-000005 — SQL: autojunção em tabela de hierarquia

*Questão oficial — Fundação Cesgranrio, Transpetro PSP/Terra 002/2023, Prova 6, questão 49.* · item 1.10 · Média · gabarito **A**

Neto de Carlos = filho de um filho de Carlos. Na **autojunção**, `f1` representa a geração dos filhos (`f1.pai = 'Carlos'`) e `f2` a dos netos, ligando o filho de `f1` ao pai de `f2` (`f1.filho = f2.pai`). Filhos de Carlos: Eriko e Fabio; seus filhos: Isidoro e João (`f2.filho`).

- **A)** Correta. Junção filho→pai com filtro em Carlos; projeta `f2.filho`, retornando Isidoro e João.
- **B)** Incorreta. Procura o **pai do pai** de Carlos (avô), com a junção invertida; retornaria Andre.
- **C)** Incorreta. Faz a junção correta, mas projeta `f1.pai`, que é sempre Carlos; retorna 'Carlos' (duas vezes).
- **D)** Incorreta. Junta linhas com o mesmo pai (irmãos); retornaria Eriko e Fabio (filhos), incluindo o próprio.
- **E)** Incorreta. Junta linhas com o mesmo filho; devolve apenas os próprios filhos de Carlos.

**Revisão rápida:** Neto = `f1.filho = f2.pai`; projeta-se `f2.filho`.

## 5. OFI-000003 — Bancos de documentos x relacionais x grafos

*Questão oficial — Fundação Cesgranrio, Transpetro PSP/Terra 002/2023, Prova 6, questão 46.* · item 1.23 · Fácil · gabarito **D**

Bancos de documentos (MongoDB, CouchDB) guardam documentos **JSON/BSON**, de esquema flexível, adequados a dados semiestruturados. SQL e relações são do modelo relacional; vértices e arestas são dos grafos.

- **A)** Incorreta. SQL e relações matemáticas caracterizam o modelo relacional.
- **B)** Incorreta. Vértices e arestas caracterizam o modelo de grafos.
- **C)** Incorreta. A otimização para consultas por relacionamentos (travessias) é típica de grafos.
- **D)** Correta. Documentos em JSON/BSON com esquema flexível são a característica central dos bancos de documentos.
- **E)** Incorreta. Normalização com chaves estrangeiras é característica do modelo relacional; documentos favorecem agregados embutidos.

**Revisão rápida:** Documentos = JSON/BSON, esquema flexível; grafos = nós/arestas; relacional = tabelas/SQL.

## 6. OFI-000004 — Banco de grafos: consulta em Cypher

*Questão oficial — Fundação Cesgranrio, Transpetro PSP/Terra 002/2023, Prova 6, questão 48.* · item 1.18 · Média · gabarito **A**

Em Cypher, `MATCH` descreve um padrão; `(p)-[:TIPO]->(x)` segue a relação de `p` para `x`, e `WHERE` filtra. A consulta A localiza a pessoa de nome Alice e retorna os nós ligados por `AMIGO_DE` a partir dela.

- **A)** Correta. Padrão válido: Alice como origem, relação `AMIGO_DE` saindo dela e retorno dos amigos.
- **B)** Incorreta. Inverte a direção da seta, retornando quem aponta para Alice; com a relação modelada de Alice para o amigo, não retorna os amigos dela.
- **C)** Incorreta. Usa a relação `INIMIGO_DE`; retorna inimigos, não amigos.
- **D)** Incorreta. É SQL relacional e não se aplica a um banco de grafos.
- **E)** Incorreta. `FIND` não é cláusula do Cypher; a sintaxe é inválida.

**Revisão rápida:** Cypher: `MATCH (a)-[:REL]->(b) WHERE ... RETURN b`.

## 7. AUT-000091 — Mapeamento do DER para o modelo relacional: relacionamento N:N com atributo

*Questão autoral — estilo Cesgranrio.* · item 1.2 · Média · gabarito **C**

Relacionamento **N:N** vira **tabela associativa**, cuja chave primária é composta pelas chaves das duas entidades e que carrega os atributos do relacionamento (aqui, `nota`). Cada coluna de chave é também chave estrangeira.

- **A)** Incorreta. Impõe que cada aluno tenha uma só disciplina (relação 1:N no sentido contrário) e coloca `nota` em ALUNO, perdendo a associação com a disciplina.
- **B)** Incorreta. Impõe que cada disciplina tenha um só aluno e coloca `nota` fora de contexto.
- **C)** Correta. Tabela associativa com PK composta e duas FKs, com `nota` na tabela de associação, é o mapeamento correto.
- **D)** Incorreta. Colunas repetidas (disciplina1, disciplina2...) violam a 1FN e limitam o número de disciplinas.
- **E)** Incorreta. PK apenas em `matricula` permitiria uma única matrícula por aluno, o que contradiz a cardinalidade N:N.

**Revisão rápida:** N:N → tabela associativa (PK composta + 2 FKs).

## 8. AUT-000094 — DDL: classificação dos comandos SQL

*Questão autoral — estilo Cesgranrio.* · item 1.11 · Fácil · gabarito **B**

A **DDL** define e altera a **estrutura** (esquema): `CREATE`, `ALTER`, `DROP`. A **DML** manipula os dados (`INSERT`, `UPDATE`, `DELETE`, `SELECT` em muitas classificações). Os comandos de controle de transação (`COMMIT`, `ROLLBACK`, `SAVEPOINT`) formam a TCL.

- **A)** Incorreta. São comandos de manipulação de dados (DML).
- **B)** Correta. CREATE, ALTER e DROP são comandos DDL.
- **C)** Incorreta. UPDATE é DML; a mistura torna a alternativa incorreta.
- **D)** Incorreta. SELECT e INSERT não são DDL.
- **E)** Incorreta. São comandos de controle de transações (TCL).

**Revisão rápida:** DDL: CREATE, ALTER, DROP.

## 9. AUT-000097 — Transações: COMMIT, ROLLBACK e SAVEPOINT

*Questão autoral — estilo Cesgranrio.* · item 1.16 · Difícil · gabarito **E**

Início: 100. Após o primeiro UPDATE: 150. `SAVEPOINT s1` marca esse estado. O segundo UPDATE leva a 300, mas `ROLLBACK TO s1` **desfaz apenas o que veio depois do savepoint**, retornando a 150 (a transação continua aberta). O terceiro UPDATE leva a 120, e o COMMIT confirma **120**.

- **A)** Incorreta. 100 corresponderia a um ROLLBACK total, o que não ocorre: o rollback é parcial.
- **B)** Incorreta. 150 ignora o último UPDATE (−30).
- **C)** Incorreta. 90 seria 100 − 30, desfazendo também o primeiro UPDATE (+50).
- **D)** Incorreta. 270 = 300 − 30, como se o ROLLBACK TO não tivesse efeito.
- **E)** Correta. 120 = 150 − 30: resultado correto.

**Revisão rápida:** Saldo: 100 → 150 → (300 desfeito) → 150 → 120.

## 10. AUT-000099 — Transações concorrentes: leitura fantasma

*Questão autoral — estilo Cesgranrio.* · item 1.16 · Difícil · gabarito **D**

A **leitura fantasma** ocorre quando uma transação repete uma consulta com um **predicado** e encontra **novas linhas** inseridas (ou removidas) por outra transação confirmada. Na **leitura não repetível**, a mesma linha lida duas vezes apresenta valores diferentes. Na **leitura suja**, lê-se dado ainda não confirmado.

- **A)** Incorreta. Na leitura suja, o dado lido não estava confirmado; aqui T2 confirmou.
- **B)** Incorreta. Na leitura não repetível, uma linha já lida muda de valor; aqui apareceu uma linha nova.
- **C)** Incorreta. Perda de atualização é a sobreposição de duas escritas concorrentes.
- **D)** Correta. Novas linhas que satisfazem o predicado entre duas leituras caracterizam a leitura fantasma.
- **E)** Incorreta. Deadlock é a espera circular por bloqueios, que não ocorreu.

**Revisão rápida:** Fantasma = linhas novas no resultado repetido.

## 11. AUT-000092 — Avaliação de modelos: redundância e atributos derivados

*Questão autoral — estilo Cesgranrio.* · item 1.8 · Média · gabarito **A**

`valor_total_pedido` é **derivado** (calculável a partir dos itens) e está **repetido** em várias linhas. Isso viola o critério de **ausência de redundância** e provoca **anomalias de atualização**: alterar um item sem atualizar todas as repetições deixa o banco inconsistente. Alternativas: calcular o total em consulta/visão, ou, se for armazenado por desempenho, guardá-lo no cabeçalho do pedido, com mecanismo de atualização.

- **A)** Correta. É o problema apresentado no enunciado: redundância de dado derivado e risco de inconsistência.
- **B)** Incorreta. O enunciado não informa a ausência de chaves estrangeiras; a descrição trata da repetição do total.
- **C)** Incorreta. Um pedido tem vários itens; a cardinalidade 1:N é correta e não é o problema.
- **D)** Incorreta. Nomes de colunas não são problema no trecho apresentado.
- **E)** Incorreta. Índices são questão de desempenho físico e não são mencionados; o defeito é do modelo lógico.

**Revisão rápida:** Atributo derivado repetido = redundância = anomalia de atualização.

## 12. OFI-000013 — Scrum x Kanban

*Questão oficial — Fundação Cesgranrio, Transpetro PSP/Terra 002/2023, Prova 6, questão 65.* · item 2.1 · Média · gabarito **A**

O Scrum trabalha em **Sprints** de duração fixa; o Kanban é um fluxo **contínuo**, sem iterações obrigatórias, controlado por **limites de trabalho em andamento (WIP)**.

- **A)** Correta. Diferença marcante correta: Sprints fixas no Scrum; fluxo contínuo no Kanban.
- **B)** Incorreta. Inverte os instrumentos: burndown é típico do Scrum, e o Kanban usa quadro, WIP e gráficos de fluxo.
- **C)** Incorreta. Troca os métodos: Scrum não se baseia em escopo contratual fechado e é o Scrum que tem iterações definidas.
- **D)** Incorreta. A Daily Scrum é evento do Scrum; o Kanban não a exige.
- **E)** Incorreta. O Product Owner é papel do Scrum; o Kanban não prescreve papéis.

**Revisão rápida:** Scrum: Sprint fixa. Kanban: fluxo contínuo e WIP.

## 13. OFI-000044 — Scrum: momento da Retrospectiva da Sprint

*Questão oficial — Fundação Cesgranrio, Transpetro PSP RH 2018.1, Prova 15, questão 28.* · item 2.1 · Fácil · gabarito **B**

A **Sprint Retrospective** ocorre **depois da Sprint Review** e **antes do próximo Sprint Planning**; é o último evento da Sprint. Inspeciona pessoas, relacionamentos, processos e ferramentas.

- **A)** Incorreta. A Retrospectiva ocorre depois da Revisão, e não antes.
- **B)** Correta. Posição correta: após a Revisão e antes do planejamento da próxima Sprint.
- **C)** Incorreta. No início da Sprint ocorre o Planejamento.
- **D)** Incorreta. No fim de cada dia não há retrospectiva; a reunião diária é a Daily Scrum.
- **E)** Incorreta. No início do dia ocorre a Daily Scrum.

**Revisão rápida:** Revisão (produto) antes da Retrospectiva (processo).

## 14. AUT-000015 — Gestão de projeto versus gestão de produto

*Questão autoral — estilo Cesgranrio.* · item 2.2 · Média · gabarito **C**

A **gestão de projeto** mede a execução do que foi combinado (escopo, prazo, custo, aderência ao plano: **I e IV**). A **gestão de produto** foca **valor e resultados** (*outcomes*) para usuários e negócio: adoção e retenção, redução de tempo de atendimento, receita ou economia (**II e III**). O produto continua após o lançamento, com equipe estável e investimento contínuo.

- **A)** Incorreta. I (prazo e orçamento) e IV (aderência ao escopo) são indicadores de execução do projeto, a medida típica da gestão de projeto.
- **B)** Incorreta. Mistura um indicador de projeto (I) com um de produto (II).
- **C)** Correta. Adoção pelos usuários e redução do tempo de atendimento medem valor e resultado (produto).
- **D)** Incorreta. Mistura um indicador de produto (III) com um de projeto (IV).
- **E)** Incorreta. Inclui o indicador I, de prazo e orçamento, típico da gestão de projeto.

**Revisão rápida:** Projeto = aderência ao plano. Produto = valor e resultado ao longo do ciclo de vida.

## 15. AUT-000017 — PMBOK 7ª edição: Estrutura Analítica do Projeto (EAP)

*Questão autoral — estilo Cesgranrio.* · item 2.4 · Fácil · gabarito **A**

A **EAP (WBS)** é a decomposição hierárquica do **escopo total** do trabalho em partes menores e gerenciáveis, até os **pacotes de trabalho**. Segue a **regra dos 100%** (inclui todo o trabalho do escopo, e somente ele) e é orientada a **entregas**, não a atividades ou tempo. Serve de base para estimativas de custo e prazo, alocação de recursos e riscos.

- **A)** Correta. Decomposição do escopo em pacotes de trabalho, com a regra dos 100%.
- **B)** Incorreta. O cronograma sequencia atividades e dependências e define prazos; a EAP define o que será entregue.
- **C)** Incorreta. A EAP é orientada a entregas e escopo; a organização por atividades e datas é característica do cronograma.
- **D)** Incorreta. Estimativa de custos é outro processo; a EAP é um dos insumos dessa estimativa, mas não é a técnica.
- **E)** Incorreta. A classificação de riscos por probabilidade e impacto é a análise (matriz) de riscos, que não se confunde com a EAP.

**Revisão rápida:** EAP: decomposição hierárquica do escopo em pacotes; regra dos 100%; orientada a entregas; não é cronograma, estimativa de custo nem análise de risco.

## 16. OFI-000047 — Workflow: automação de processos de negócio

*Questão oficial — Fundação Cesgranrio, Transpetro PSP RH 2018.1, Prova 15, questão 57.* · item 3 · Média · gabarito **B**

A definição clássica (WfMC) descreve **workflow** como a **automação de um processo de negócio, total ou parcial**, em que documentos, informações ou tarefas são **passados entre participantes**, segundo **regras de procedimento**.

- **A)** Incorreta. Descreve o contexto humano do processo, sem automação.
- **B)** Correta. Corresponde à definição de workflow da WfMC.
- **C)** Incorreta. Descreve captura e indexação de documentos.
- **D)** Incorreta. Descreve melhoria/racionalização de processos por qualidade, não workflow.
- **E)** Incorreta. Parece a definição, mas exige "pelo menos um agente" e "todas as atividades de troca", o que é mais restritivo e impreciso.

**Revisão rápida:** Workflow = automação de processo (todo ou parte), tarefas passando entre participantes por regras.

## 17. OFI-000017 — Sequência dos grupos de processos

*Questão oficial — Fundação Cesgranrio, Transpetro PSP/Terra 002/2023, Prova 6, questão 55.* · item 3 · Fácil · gabarito **B**

A ordem dos grupos de processos (PMBOK 6ª ed.) é **Iniciação → Planejamento → Execução → Monitoramento e Controle → Encerramento**, sendo M&C simultâneo às demais. Entre as alternativas, só a B apresenta grupos em ordem coerente e sem alterar seu nome; as outras trocam a ordem ou misturam nomes de processos do escopo.

- **A)** Incorreta. Começa corretamente, mas "Monitoramento" e "Controle" são um só grupo e vêm depois da Execução.
- **B)** Correta. Iniciação, Planejamento e Encerramento aparecem em ordem correta (a Execução e o M&C foram omitidos, mas nada está fora de sequência); é a melhor alternativa.
- **C)** Incorreta. "Planejamento do Escopo", "Definição do Escopo" e "Encerramento do Escopo" não são grupos de processos; "encerramento do escopo" não existe na estrutura do PMBOK.
- **D)** Incorreta. Omite a Iniciação e coloca o Planejamento como primeiro, quando o projeto começa pela autorização formal (Iniciação).
- **E)** Incorreta. Começa por Monitoramento e termina na Iniciação, invertendo a sequência.

**Revisão rápida:** Ordem: Iniciação, Planejamento, Execução, M&C (contínuo), Encerramento.

## 18. AUT-000025 — Área de Custos: processos por grupo

*Questão autoral — estilo Cesgranrio.* · item 3 · Média · gabarito **C**

Na área de **Custos**, três processos estão no **Planejamento** (Planejar o gerenciamento dos custos, **Estimar os custos** e **Determinar o orçamento**) e **um** no **Monitoramento e Controle** (**Controlar os custos**). Não há processo de Custos nos grupos de Iniciação, Execução ou Encerramento.

- **A)** Incorreta. Determinar o orçamento é do Planejamento; não há processo de Custos na Execução.
- **B)** Incorreta. Controlar os custos é do Monitoramento e Controle, e não da Execução.
- **C)** Correta. Estimar e Determinar o orçamento no Planejamento; Controlar os custos no Monitoramento e Controle.
- **D)** Incorreta. Estimar os custos é do Planejamento, não da Execução; a área de Custos não tem processos de Execução.
- **E)** Incorreta. Estimar os custos não pertence à Iniciação; a área de Custos não tem processos nesse grupo.

**Revisão rápida:** Custos: Planejar (7.1), Estimar (7.2), Orçamento (7.3) = Planejamento; Controlar (7.4) = M&C.

## 19. OFI-000019 — LGPD: âmbito de aplicação e consentimento

*Questão oficial — Fundação Cesgranrio, Transpetro PSP/Terra 002/2023, Prova 6, questão 57.* · item 4.6 · Média · gabarito **B**

A LGPD (Lei 13.709/2018) aplica-se a **qualquer operação de tratamento** feita por **pessoa natural ou jurídica**, de direito público ou privado, desde que o tratamento ocorra no território nacional, os dados sejam coletados no Brasil, ou a atividade vise ofertar bens ou serviços a pessoas no Brasil (art. 3º).

- **A)** Incorreta. A lei tem **extraterritorialidade** (art. 3º, II e III).
- **B)** Correta. Aplica-se a pessoas físicas e jurídicas, com a ressalva dos arts. 3º e 4º; é a melhor formulação entre as opções.
- **C)** Incorreta. Tratamento por pessoa natural para fins **exclusivamente particulares e não econômicos** está **fora** da lei (art. 4º, I).
- **D)** Incorreta. O consentimento é **uma** das bases legais (art. 7º) e há outras; ele é exigido, em regra, também para dados comuns quando for a base utilizada, e não só para sensíveis.
- **E)** Incorreta. Dados **anonimizados** podem ser conservados, inclusive para estudo por órgão de pesquisa (art. 16, II e IV).

**Revisão rápida:** LGPD: pessoa natural ou jurídica; extraterritorial; consentimento é uma entre várias bases legais.

## 20. OFI-000020 — Governança corporativa e de TI

*Questão oficial — Fundação Cesgranrio, Transpetro PSP/Terra 002/2023, Prova 6, questão 59.* · item 4 · Fácil · gabarito **C**

A **governança** (corporativa, e a de TI como parte dela) é o conjunto de processos, políticas e estruturas para assegurar que a organização, e sua TI, sirvam aos objetivos, com conformidade regulatória e ética. A gestão executa; a governança dirige e monitora.

- **A)** Incorreta. Marketing trata de mercado e posicionamento.
- **B)** Incorreta. Gestão de serviços de TI cuida da entrega e do suporte de serviços (ITIL), e não do alinhamento estratégico e regulatório global.
- **C)** Correta. Governança é o conceito descrito.
- **D)** Incorreta. Gerenciamento de projetos organiza entregas temporárias.
- **E)** Incorreta. Planejamento de RH trata de pessoas.

**Revisão rápida:** Governança: direcionar, avaliar, monitorar (ISO 38500).

## 21. AUT-000104 — LGPD: controlador, operador e encarregado

*Questão autoral — estilo Cesgranrio.* · item 4.6 · Média · gabarito **D**

Pela LGPD (art. 5º): **controlador** é quem **decide** sobre o tratamento; **operador** trata dados **em nome do controlador**; **encarregado** é a pessoa indicada para ser o **canal de comunicação** entre controlador, titulares e ANPD. **Titular** é a pessoa natural a quem os dados se referem.

- **A)** Incorreta. Inverte os papéis de A e B e confunde o encarregado com o titular.
- **B)** Incorreta. B atua sob instruções de A; não decide sobre as finalidades, não sendo controladora conjunta.
- **C)** Incorreta. A decide sobre o tratamento; é controladora, e não operadora.
- **D)** Correta. A é controladora, B é operadora e a pessoa indicada é o encarregado.
- **E)** Incorreta. Os empregados são os titulares, e a ANPD é a autoridade; a pessoa indicada é o encarregado.

**Revisão rápida:** Controlador decide; operador executa; encarregado é o canal; titular é o dono.

## 22. OFI-000024 — Requisitos funcionais x não funcionais

*Questão oficial — Fundação Cesgranrio, Transpetro PSP/Terra 002/2023, Prova 6, questão 24.* · item 5.1 · Média · gabarito **A**

**Requisito funcional** descreve o que o sistema **faz** (cálculos, regras, transformações). **Não funcionais** descrevem qualidades e restrições (desempenho, segurança, interface, operação). Calcular a velocidade com uma equação é uma função do sistema.

- **A)** Correta. É uma função de cálculo do software; requisito funcional.
- **B)** Incorreta. Aparenta ser funcional por citar imagens, mas, no gabarito, é tratado como requisito de interface/qualidade (resolução e dispositivos).
- **C)** Incorreta. Restrição de implantação/operação (política de atualização); não funcional.
- **D)** Incorreta. Restrição de desempenho (tempo de resposta); não funcional.
- **E)** Incorreta. Restrição de segurança (criptografia AES-256); não funcional.

**Revisão rápida:** Funcional = o que faz; não funcional = quão bem / sob que restrições.

## 23. OFI-000052 — Casos de uso

*Questão oficial — Fundação Cesgranrio, Transpetro PSP RH 2018.1, Prova 15, questão 27.* · item 5.1 · Média · gabarito **A**

O **caso de uso** descreve **uma interação entre um ator e o sistema** para atingir um objetivo, do ponto de vista externo, em geral com um fluxo principal e fluxos alternativos e de exceção.

- **A)** Correta. Descreve uma interação ator-sistema, visão externa.
- **B)** Incorreta. Um caso de uso reúne **vários** cenários (fluxo principal e alternativos); um único cenário é uma instância.
- **C)** Incorreta. O comportamento interno é tratado em outros modelos (sequência, atividades).
- **D)** Incorreta. Estados dos objetos são modelados em diagramas de estados.
- **E)** Incorreta. Interações entre objetos são modeladas em diagramas de sequência/comunicação.

**Revisão rápida:** Caso de uso = interação ator × sistema.

## 24. AUT-000041 — Requisitos funcionais e não funcionais

*Questão autoral — estilo Cesgranrio.* · item 5.1 · Fácil · gabarito **B**

**Requisitos funcionais** descrevem **o que o sistema faz** (serviços, funções, cálculos): I (calcular o tempo de parada) e III (cadastrar ordem de serviço). **Requisitos não funcionais** descrevem **como o sistema deve ser**: atributos de qualidade e condições de operação, como desempenho (II: tempo de resposta mensurável) e segurança (IV: criptografia do tráfego).

- **A)** Incorreta. Calcular o tempo de parada (I) e cadastrar a ordem de serviço (III) são funções do sistema: requisitos funcionais.
- **B)** Correta. II (desempenho) e IV (segurança) são atributos de qualidade: requisitos não funcionais.
- **C)** Incorreta. Mistura um requisito funcional (I) com um não funcional (II).
- **D)** Incorreta. Mistura um requisito funcional (III) com um não funcional (IV).
- **E)** Incorreta. Classifica como não funcionais dois requisitos funcionais (I e III) e um não funcional (II).

**Revisão rápida:** Funcional: serviço/função. Não funcional: atributo de qualidade (desempenho, segurança, usabilidade). Restrição: limitação imposta (tecnologia, prazo, norma).

## 25. OFI-000028 — Prototipação de alta fidelidade

*Questão oficial — Fundação Cesgranrio, Transpetro PSP/Terra 002/2023, Prova 6, questão 29.* · item 6.9 · Média · gabarito **E**

Protótipos de **alta fidelidade** reproduzem com fidelidade visual e de interação o produto esperado, servindo de referência para a codificação. Papel, wireframes sem cor e layouts básicos são de **baixa fidelidade**.

- **A)** Incorreta. Paper prototyping é baixa fidelidade.
- **B)** Incorreta. A primeira validação com usuário pode ocorrer já em baixa fidelidade; não é característica exclusiva da alta.
- **C)** Incorreta. Wireframe sem cores é de baixa fidelidade.
- **D)** Incorreta. Layout básico para validações iniciais descreve baixa/média fidelidade.
- **E)** Correta. Telas fiéis ao esperado, prontas para guiar a codificação, caracterizam a alta fidelidade.

**Revisão rápida:** Alta fidelidade = parece o produto final.

## 26. OFI-000030 — Design Thinking: mapa de empatia

*Questão oficial — Fundação Cesgranrio, Transpetro PSP/Terra 002/2023, Prova 6, questão 34.* · item 6.10 · Fácil · gabarito **D**

O **mapa de empatia** organiza o que o usuário **pensa e sente, ouve, vê, fala e faz**, além de **dores e ganhos**. Dados demográficos (idade, nome, formação) são da **persona**.

- **A)** Incorreta. Mistura dados demográficos e itens sem relação com o mapa.
- **B)** Incorreta. Tecnologias preferidas e formação não são quadrantes do mapa.
- **C)** Incorreta. Dados demográficos e hobbies são de persona.
- **D)** Correta. Reúne os quadrantes do mapa de empatia.
- **E)** Incorreta. Dados demográficos e biográficos não compõem o mapa.

**Revisão rápida:** Mapa: pensa e sente, ouve, vê, fala e faz.

## 27. OFI-000029 — Acessibilidade e usabilidade no processo de desenvolvimento

*Questão oficial — Fundação Cesgranrio, Transpetro PSP/Terra 002/2023, Prova 6, questão 33.* · item 6.1 · Média · gabarito **E**

Acessibilidade e usabilidade são **requisitos de qualidade** a considerar desde as fases iniciais (pesquisa, prototipação), e **testar antes da codificação** reduz o custo de correção.

- **A)** Incorreta. Usabilidade trata de eficácia, eficiência e satisfação do uso, e não de desempenho técnico ou manutenibilidade.
- **B)** Incorreta. Pensar em acessibilidade só com o software pronto encarece e limita as correções.
- **C)** Incorreta. Começar na codificação é tarde; ambas nascem no projeto e nos protótipos.
- **D)** Incorreta. As características são complementares, não conflitantes.
- **E)** Correta. Devem entrar nos protótipos e ser testadas antes da codificação.

**Revisão rápida:** A11y e usabilidade: complementares e desde o protótipo.

## 28. AUT-000059 — Design thinking: etapas do processo

*Questão autoral — estilo Cesgranrio.* · item 6.10 · Fácil · gabarito **E**

As cinco etapas do d.school são **empatizar, definir, idear, prototipar e testar**. A formulação do problema é a etapa **definir**; a seguinte é **idear**, em que se geram muitas ideias (*brainstorming*, *brainwriting*). As etapas **não são lineares**: o processo é iterativo e pode voltar a etapas anteriores.

- **A)** Incorreta. Empatizar é a primeira etapa, anterior à definição do problema; a equipe só volta a ela se precisar entender melhor o usuário.
- **B)** Incorreta. Prototipar ocorre depois da ideação; antes de prototipar é preciso gerar e escolher ideias.
- **C)** Incorreta. Testar é a última etapa e exige um protótipo ou uma solução a validar.
- **D)** Incorreta. Definir é a etapa que acabou de ser concluída (a formulação do problema).
- **E)** Correta. Após definir o problema, a etapa seguinte é idear.

**Revisão rápida:** Design thinking (d.school): empatizar, definir, idear, prototipar, testar. Iterativo e centrado nas pessoas.

## 29. AUT-000108 — Histórias de usuário: critérios INVEST

*Questão autoral — estilo Cesgranrio.* · item 6.2 · Média · gabarito **C**

INVEST: **I**ndependente, **N**egociável, **V**alioso, **E**stimável, **P**equena (*Small*), **T**estável. A história descreve um **épico**: cadastro, aprovação, renovação, relatórios e integração são várias funcionalidades, impossíveis de concluir em uma iteração; deve ser **dividida** em histórias menores.

- **A)** Incorreta. Nada no enunciado mostra dependência entre histórias.
- **B)** Incorreta. Os detalhes continuam negociáveis; o problema é o tamanho.
- **C)** Correta. É um épico, grande demais para uma iteração: viola o critério Pequena.
- **D)** Incorreta. A história declara valor (controlar os contratos), embora ele seja amplo.
- **E)** Incorreta. Pode-se escrever critérios de aceite por funcionalidade; o problema é o tamanho.

**Revisão rápida:** INVEST: história boa é Pequena; épico deve ser quebrado.

## 30. AUT-000058 — MVP e prototipação: distinção entre MVP e protótipo

*Questão autoral — estilo Cesgranrio.* · item 6.8 · Difícil · gabarito **C**

O **MVP** é a **versão mínima utilizável**, usada por **usuários reais**, para **aprender** com métricas reais (construir–medir–aprender: perseverar, pivotar ou encerrar). O **protótipo** é um modelo para **explorar e testar** ideias antes da construção, **sem** funcionamento real do sistema; o **protótipo interativo de alta fidelidade** tem aparência e comportamento próximos aos do produto final (telas navegáveis). Equipe 1: MVP; equipe 2: protótipo interativo de alta fidelidade.

- **A)** Incorreta. Inverte os conceitos: a versão mínima funcional usada por clientes reais é um MVP; as telas navegáveis sem sistema real são um protótipo.
- **B)** Incorreta. A equipe 1 usa um produto funcional com clientes reais (MVP), e não um wireframe; e as telas da equipe 2 têm aparência próxima à final (alta fidelidade), não baixa.
- **C)** Correta. Equipe 1: MVP. Equipe 2: protótipo interativo de alta fidelidade.
- **D)** Incorreta. As telas da equipe 2 são navegáveis (interativas) e próximas ao produto final; um *mockup* estático de baixa fidelidade não se enquadra.
- **E)** Incorreta. A equipe 1 não entrega o produto final, mas a versão mínima para aprender; e a equipe 2 não faz um MVP, pois o sistema não funciona de fato.

**Revisão rápida:** MVP: versão mínima funcional para validar hipóteses com usuários reais. Protótipo: modelo (papel, wireframe, mockup, interativo) para explorar e testar; alta fidelidade = realista.

## 31. OFI-000032 — Data warehouse: característica

*Questão oficial — Fundação Cesgranrio, Transpetro PSP/Terra 002/2023, Prova 6, questão 56.* · item 7.6 · Média · gabarito **B**

O **data warehouse** é **orientado a assunto, integrado, histórico e não volátil**, consolidando dados de várias fontes para análise (OLAP), inclusive multidimensional.

- **A)** Incorreta. Dados brutos sem processamento descrevem um data lake; o DW guarda dados tratados e permite análises.
- **B)** Correta. Consolida dados de várias fontes e suporta análises multidimensionais.
- **C)** Incorreta. O DW é histórico por definição.
- **D)** Incorreta. Alta velocidade transacional é característica de OLTP; o DW é otimizado para consultas analíticas.
- **E)** Incorreta. A afirmação é absoluta ("apenas"); a alternativa B é a que descreve a característica definidora.

**Revisão rápida:** DW = integração + histórico + análise.

## 32. OFI-000055 — Sistema de Suporte à Decisão (tipo de sistema de informação)

*Questão oficial — Fundação Cesgranrio, Transpetro PSP RH 2018.1, Prova 15, questão 54.* · item 7.11 · Média · gabarito **D**

O **Sistema de Suporte à Decisão (SSD/DSS)** usa **modelos e dados** para apoiar decisões semiestruturadas, com análise e **otimização** ("quais caminhões alocar para maximizar o lucro?").

- **A)** Incorreta. CRM gerencia o relacionamento com clientes.
- **B)** Incorreta. SIG produz relatórios gerenciais de rotina, resumindo dados, sem modelagem de otimização.
- **C)** Incorreta. Sistemas especialistas reproduzem o raciocínio de especialistas com base de regras.
- **D)** Correta. Modelagem e otimização para apoiar decisões: SSD.
- **E)** Incorreta. Processamento de transações registra eventos operacionais (vendas, pagamentos).

**Revisão rápida:** SSD = modelos e otimização para decisões semiestruturadas.

## 33. AUT-000110 — BI como suporte à tomada de decisão

*Questão autoral — estilo Cesgranrio.* · item 7.11 · Média · gabarito **A**

O BI **transforma dados em informação para apoiar decisões** nos níveis estratégico, tático e operacional, entregando visão integrada, histórica e tempestiva. Ele **apoia**, e não **substitui** o decisor, e depende da **qualidade dos dados** e do alinhamento aos indicadores do negócio.

- **A)** Correta. Descreve o papel do BI: apoiar a decisão com informação integrada e confiável.
- **B)** Incorreta. Nenhuma ferramenta garante decisão ótima; o decisor continua responsável.
- **C)** Incorreta. BI depende de qualidade de dados; "lixo entra, lixo sai".
- **D)** Incorreta. BI atende aos três níveis decisórios.
- **E)** Incorreta. O DW é a base integrada que costuma alimentar os painéis; não é dispensável.

**Revisão rápida:** BI apoia decisões em todos os níveis; não decide sozinho.

## 34. AUT-000067 — Modelagem multidimensional: tipos de tabela fato

*Questão autoral — estilo Cesgranrio.* · item 7.7 · Fácil · gabarito **A**

Na tabela fato de **snapshot acumulativo**, há **uma linha por ciclo de processo** (aqui, uma ordem de serviço), **atualizada** conforme ele avança pelas etapas, registrando datas e intervalos entre os marcos. A **transacional** tem uma linha por evento; o **snapshot periódico**, uma linha por entidade por período; a **sem fatos** registra ocorrências sem medida numérica.

- **A)** Correta. Uma linha por ciclo, atualizada nas etapas: snapshot acumulativo.
- **B)** Incorreta. A transacional tem uma linha por evento, sem atualização conforme o processo avança.
- **C)** Incorreta. O snapshot periódico tem uma linha por entidade e por período (por exemplo, saldo diário), e não por ciclo de processo.
- **D)** Incorreta. A tabela sem fatos registra ocorrências ou cobertura, sem medidas; aqui há datas e intervalos como medidas.
- **E)** Incorreta. Dimensão degenerada é um identificador mantido na tabela fato sem tabela de dimensão, e não um tipo de tabela fato.

**Revisão rápida:** Acumulativo: linha por ciclo, atualizada nas etapas. Periódico: retrato por período. Transacional: um evento.

## 35. AUT-000070 — Insights e BI na tomada de decisão: correlação e causalidade

*Questão autoral — estilo Cesgranrio.* · item 7.10 · Difícil · gabarito **B**

Duas séries que variam juntas têm **correlação**, o que **não implica causalidade**: pode haver um **fator comum** (sazonalidade, chuvas e maior volume de pedidos). Um bom **insight** é uma descoberta **relevante e acionável**, obtida com a verificação de hipóteses e a validação da qualidade e do contexto; o BI **apoia** a decisão, mas não a substitui, e exige cuidado com vieses (como correlação × causalidade).

- **A)** Incorreta. A coincidência temporal não comprova causa e efeito; aceitar a conclusão seria cair na falácia da correlação como causalidade.
- **B)** Correta. Reconhece o limite da correlação e propõe investigar fatores comuns antes da decisão.
- **C)** Incorreta. Dashboards e *drill-down* servem justamente à investigação; rejeitar sem análise ignora o papel do BI na geração de insights.
- **D)** Incorreta. O BI sustenta decisões baseadas em dados, com os devidos cuidados; trocar a análise por uma pesquisa não resolve a dúvida causal.
- **E)** Incorreta. Esperar sem analisar fatores externos adia a decisão sem testar hipóteses; um bom analista investiga os fatores plausíveis agora.

**Revisão rápida:** Insight: descoberta relevante e acionável. Vieses: correlação×causalidade, confirmação, seleção, cherry-picking.

## 36. AUT-000068 — Manipulação de dados em planilhas: SOMASES

*Questão autoral — estilo Cesgranrio.* · item 7.9 · Média · gabarito **C**

A função `SOMASES` soma os valores de C que atendem a **todos** os critérios simultaneamente (operação E): região = "Norte" **e** mês diferente de "Mar" (`"<>Mar"`). As linhas que atendem são 2 (Norte, Jan, 100) e 4 (Norte, Fev, 120). Soma: 100 + 120 = **220**.

- **A)** Incorreta. 280 é a soma de todas as linhas da região Norte (100 + 120 + 60), desconsiderando o critério do mês.
- **B)** Incorreta. 390 é a soma de todas as linhas com mês diferente de março (100 + 80 + 120 + 90), desconsiderando o critério da região.
- **C)** Correta. Região Norte e mês diferente de março: 100 + 120 = 220.
- **D)** Incorreta. 450 é a soma de toda a coluna C, sem nenhum critério.
- **E)** Incorreta. 170 é a soma da região Sul (80 + 90), que o critério não seleciona.

**Revisão rápida:** SOMASES(soma; critério1_intervalo; critério1; ...): soma as células que atendem a todos os critérios.

## 37. OFI-000033 — Argumento válido: conclusão a partir das premissas

*Questão oficial — Fundação Cesgranrio, Transpetro PSP/Terra 002/2023, Prova 6, questão 28.* · item 8.2 · Média · gabarito **D**

Para que todas as premissas sejam verdadeiras, a **Premissa 2** exige D verdadeiro e E falso. Na Premissa 1, ¬D ∨ E = F ∨ F = **F**; logo ¬A deve ser falso, isto é, **A é verdadeiro**. Na Premissa 3, ¬A é falso, então **B deve ser verdadeiro**. A conclusão que decorre de todas as premissas é **B**.

- **A)** Incorreta. ¬D contradiz a Premissa 2 (D verdadeiro).
- **B)** Incorreta. E é falso pela Premissa 2.
- **C)** Incorreta. ¬A é falso, pois A é verdadeiro.
- **D)** Correta. B é verdadeiro em toda situação em que as três premissas são verdadeiras: conclusão válida.
- **E)** Incorreta. ¬B é falso.

**Revisão rápida:** Premissas V ⇒ D=V, E=F, A=V, B=V.

## 38. OFI-000034 — Consequência lógica de sentença quantificada

*Questão oficial — Fundação Cesgranrio, Transpetro PSP/Terra 002/2023, Prova 6, questão 35.* · item 8.4 · Média · gabarito **B**

Simbolicamente: ∀x (P(x) → (M(x) ∨ E(x))). A **contrapositiva** é ∀x (¬(M(x) ∨ E(x)) → ¬P(x)), ou seja, quem não é médico nem enfermeiro não é profissional do posto, que é a alternativa B.

- **A)** Incorreta. Confunde "ou" com "e"; não decorre.
- **B)** Correta. É a contrapositiva da sentença original, equivalente a ela.
- **C)** Incorreta. A sentença admite quem seja ambos; nada impede.
- **D)** Incorreta. Contradiz a sentença, que diz que todos são médicos ou enfermeiros.
- **E)** Incorreta. A sentença usa "ou" inclusivo e não proíbe quem seja ambos.

**Revisão rápida:** P→Q ≡ ¬Q→¬P.

## 39. AUT-000077 — Lógica de predicados: negação de sentenças quantificadas

*Questão autoral — estilo Cesgranrio.* · item 8.4 · Média · gabarito **A**

A negação de **∀x P(x)** é **∃x ¬P(x)**. Assim, ¬∀x (C(x) → S(x)) ≡ ∃x ¬(C(x) → S(x)) ≡ **∃x (C(x) ∧ ¬S(x))**: "existe equipamento crítico que não possui sensor". A negação de "todos" não é "nenhum".

- **A)** Correta. ∃x (C(x) ∧ ¬S(x)).
- **B)** Incorreta. "Nenhum equipamento crítico possui sensor" é ∀x (C(x) → ¬S(x)), mais forte que a negação; a negação de "todos" é "algum não".
- **C)** Incorreta. "Todo equipamento crítico não possui sensor" tem o mesmo sentido da alternativa B (∀x (C(x) → ¬S(x))) e afirma mais do que a negação exige.
- **D)** Incorreta. Trata de equipamento **não** crítico; o que nega a sentença é a existência de um equipamento crítico sem sensor.
- **E)** Incorreta. Um equipamento crítico com sensor é compatível com a sentença original; não a nega.

**Revisão rápida:** ¬∀x(C→S) ≡ ∃x(C ∧ ¬S). Traduzir: ∀ com →, ∃ com ∧.

## 40. AUT-000078 — Lógica de predicados: ordem dos quantificadores

*Questão autoral — estilo Cesgranrio.* · item 8.4 · Difícil · gabarito **C**

Se existe um supervisor de **todos** (II), então **todo** técnico tem **algum** supervisor (I): II ⇒ I. A recíproca é falsa: cada técnico pode ter o seu próprio supervisor, sem que um único seja supervisor de todos (por exemplo, dois técnicos e dois supervisores, cada um supervisionando um técnico). Quantificadores de **tipos diferentes não comutam**.

- **A)** Incorreta. A ordem de ∀ e ∃ altera o significado: "cada um tem um" é mais fraco que "um para todos".
- **B)** Incorreta. Inverte a implicação: II implica I, e não o contrário.
- **C)** Correta. II ⇒ I, mas I ⇏ II.
- **D)** Incorreta. Há implicação de II para I; a vinculação existe em um sentido.
- **E)** Incorreta. A negação de I seria ∃x ∀y ¬S(y, x); II não é a negação de I (pode haver modelos em que ambas são verdadeiras).

**Revisão rápida:** ∃y∀x R ⇒ ∀x∃y R, mas não o contrário. Contraexemplo: cada técnico com um supervisor distinto.

## 41. OFI-000035 — SDL: testes SAST x DAST

*Questão oficial — Fundação Cesgranrio, Transpetro PSP/Terra 002/2023, Prova 6, questão 38.* · item 9.5 · Média · gabarito **B**

**DAST** (*Dynamic Application Security Testing*) testa a aplicação **em execução**, de fora (caixa-preta). **SAST** analisa o código-fonte, sem executar. DREAD e STRIDE são modelos de ameaças.

- **A)** Incorreta. SAST analisa o código estático, sem executar a aplicação.
- **B)** Correta. DAST testa o software compilado em execução; é o descrito.
- **C)** Incorreta. VAST é uma metodologia de modelagem de ameaças (*Visual, Agile and Simple Threat modeling*).
- **D)** Incorreta. DREAD é um modelo de classificação de risco.
- **E)** Incorreta. STRIDE é um modelo de categorização de ameaças.

**Revisão rápida:** SAST = código; DAST = execução.

## 42. OFI-000039 — Resposta a incidentes: NIST SP 800-61

*Questão oficial — Fundação Cesgranrio, Transpetro PSP/Terra 002/2023, Prova 6, questão 42.* · item 9.11 · Fácil · gabarito **C**

A **NIST SP 800-61** (*Computer Security Incident Handling Guide*) define o ciclo de vida de resposta a incidentes (Rev. 2: preparação; detecção e análise; contenção, erradicação e recuperação; atividade pós-incidente). A Rev. 3 (2025) alinha a resposta ao NIST CSF 2.0.

- **A)** Incorreta. SP 800-30 trata de avaliação de riscos.
- **B)** Incorreta. SP 800-34 trata de planejamento de contingência.
- **C)** Correta. SP 800-61 define o ciclo de vida de resposta a incidentes.
- **D)** Incorreta. ISO 27033-5 trata de segurança de redes (VPN).
- **E)** Incorreta. ISO 27034-1 trata de segurança de aplicações.

**Revisão rápida:** 800-61 = resposta a incidentes.

## 43. OFI-000062 — SAML: Artifact Resolution Protocol

*Questão oficial — Fundação Cesgranrio, Transpetro PSP RH 2018.1, Prova 15, questão 51.* · item 9.8 · Difícil · gabarito **C**

No **Artifact Resolution Protocol**, uma mensagem SAML é substituída por um **artefato** (valor pequeno e de tamanho fixo) que **referencia** a mensagem; o receptor o "resolve" para obter a mensagem completa, por canal seguro.

- **A)** Incorreta. Authentication Request Protocol solicita uma asserção de autenticação.
- **B)** Incorreta. Assertion Query and Request Protocol consulta ou requisita asserções existentes.
- **C)** Correta. Passagem por referência com valor fixo e pequeno: Artifact Resolution.
- **D)** Incorreta. Name Identifier Management trata do gerenciamento de identificadores de nome.
- **E)** Incorreta. Name Identifier Mapping mapeia identificadores entre provedores.

**Revisão rápida:** Artifact = referência pequena e fixa para uma mensagem SAML.

## 44. OFI-000036 — Controle de acesso: ABAC x RBAC

*Questão oficial — Fundação Cesgranrio, Transpetro PSP/Terra 002/2023, Prova 6, questão 39.* · item 9.10 · Média · gabarito **A**

**ABAC** (*Attribute-Based Access Control*) decide com base em **atributos** do usuário, do recurso, da ação e do contexto/ambiente (local, horário etc.). RBAC usa papéis; DAC deixa o dono decidir; MAC usa rótulos de classificação; ACL é uma lista de permissões por recurso.

- **A)** Correta. Combinação de atributos (local, recurso, contexto, ambiente) define ABAC.
- **B)** Incorreta. RBAC concede acesso por papel, sem considerar contexto e atributos dinâmicos.
- **C)** Incorreta. DAC: o proprietário do recurso define as permissões.
- **D)** Incorreta. MAC: o sistema impõe regras por rótulos de sensibilidade e níveis de autorização.
- **E)** Incorreta. ACL é um mecanismo de lista de permissões, não uma abordagem de decisão por atributos.

**Revisão rápida:** ABAC: decide por atributos e contexto.

## 45. OFI-000040 — SIEM

*Questão oficial — Fundação Cesgranrio, Transpetro PSP/Terra 002/2023, Prova 6, questão 43.* · item 9.2 · Fácil · gabarito **D**

O **SIEM** (*Security Information and Event Management*) **coleta, correlaciona e analisa** logs e eventos de várias fontes, gerando alertas e visão consolidada.

- **A)** Incorreta. CASB controla o uso de serviços em nuvem.
- **B)** Incorreta. WAF protege aplicações web contra ataques HTTP.
- **C)** Incorreta. DLP evita vazamento de dados.
- **D)** Correta. SIEM agrega e correlaciona eventos e logs de segurança.
- **E)** Incorreta. Proxy intermedia o tráfego, aplicando filtros e cache.

**Revisão rápida:** SIEM: coleta + correlação + alerta.

## 46. AUT-000116 — SSO: vantagens e riscos

*Questão autoral — estilo Cesgranrio.* · item 9.8 · Média · gabarito **B**

No **SSO**, um **provedor de identidade (IdP)** autentica o usuário e emite **asserções/tokens** (SAML, OpenID Connect/OAuth 2.0, Kerberos) aceitos pelos sistemas. **Vantagens:** menos senhas, melhor experiência, controle e revogação centralizados, auditoria no IdP. **Risco:** o IdP é **ponto único de falha e de comprometimento**, mitigado com **MFA**, monitoramento e alta disponibilidade.

- **A)** Incorreta. A autenticação ocorre uma vez, no IdP; ela não é eliminada.
- **B)** Correta. Descreve vantagens e riscos do SSO, e a mitigação por MFA.
- **C)** Incorreta. O SSO **reduz** bases de senhas por sistema, e não as replica.
- **D)** Incorreta. SAML e OIDC são justamente protocolos usados em SSO.
- **E)** Incorreta. O IdP centraliza logs e facilita a auditoria.

**Revisão rápida:** SSO: IdP + tokens (SAML/OIDC); risco do ponto único → MFA.

## 47. AUT-000113 — Segurança física e lógica: classificação de controles

*Questão autoral — estilo Cesgranrio.* · item 9.1 · Fácil · gabarito **D**

**Controles físicos** protegem instalações e equipamentos (cercas, câmeras, catracas, cofres, extintores, energia e climatização). **Controles lógicos** protegem sistemas e dados por software e configuração: autenticação, criptografia, permissões, firewalls, antivírus. Na ISO/IEC 27002:2022, correspondem aos temas **físicos** e **tecnológicos**.

- **A)** Incorreta. Cercas, câmeras e vigilantes são controles físicos.
- **B)** Incorreta. Sala-cofre, umidade e extintores são físicos (ambiente).
- **C)** Incorreta. Catraca, biometria na porta e controle de visitantes são físicos.
- **D)** Correta. MFA, criptografia de disco e ACL são controles lógicos.
- **E)** Incorreta. No-break, geradores e refrigeração são físicos (infraestrutura).

**Revisão rápida:** Físico = lugar/equipamento; lógico = sistema/dado.

## 48. AUT-000114 — VPN: IPsec em modo túnel

*Questão autoral — estilo Cesgranrio.* · item 9.6 · Média · gabarito **E**

No **IPsec**, o **modo túnel** protege e **encapsula o pacote IP original inteiro** em um novo pacote com novo cabeçalho IP, e é o usual em **VPN site-to-site** (gateway a gateway). No **modo transporte**, protege-se apenas o **payload**, mantendo o cabeçalho original (típico host a host). O **ESP** oferece confidencialidade, autenticação de origem e integridade; o **AH** oferece integridade e autenticação, **sem** confidencialidade.

- **A)** Incorreta. A VPN protege o tráfego no caminho, mas não torna o usuário anônimo.
- **B)** Incorreta. A VPN não substitui firewall; as defesas se complementam.
- **C)** Incorreta. A descrição corresponde ao modo túnel; o transporte preserva o cabeçalho IP original.
- **D)** Incorreta. É o contrário: o ESP oferece confidencialidade, e o AH, não.
- **E)** Correta. Descreve corretamente o modo túnel e seu uso entre gateways.

**Revisão rápida:** IPsec: túnel encapsula tudo; ESP cifra; AH só autentica.

## 49. AUT-000115 — MDM: gerenciamento de dispositivos móveis

*Questão autoral — estilo Cesgranrio.* · item 9.7 · Média · gabarito **A**

O **MDM** permite **inventariar** dispositivos, **impor políticas** (senha, criptografia, aplicativos permitidos), **configurar** acessos corporativos e fazer **bloqueio e limpeza remotos** (inclusive limpeza **seletiva**, que remove só os dados corporativos em cenários BYOD).

- **A)** Correta. Descreve recursos típicos do MDM: política remota e wipe (seletivo) em caso de perda.
- **B)** Incorreta. O MDM atua por software e comunicação remota, e não por dispositivo físico de travamento.
- **C)** Incorreta. Firewall de borda e MDM têm funções distintas.
- **D)** Incorreta. O MDM não recupera senhas de aplicativos de terceiros.
- **E)** Incorreta. Nenhum controle garante ausência total de infecção; o MDM reduz riscos.

**Revisão rápida:** MDM: inventário, políticas, bloqueio e wipe remoto.

## 50. AUT-000117 — Teste de penetração: autorização e escopo

*Questão autoral — estilo Cesgranrio.* · item 9.13 · Média · gabarito **C**

O teste de penetração só é legítimo com **autorização formal por escrito** do dono dos ativos. O **planejamento** define **escopo, objetivos, regras de engajamento** (técnicas permitidas, horários, contatos de emergência) e a **abordagem** (caixa-preta, cinza ou branca). Em seguida vêm descoberta, ataque e relatório (NIST SP 800-115).

- **A)** Incorreta. Varredura sem escopo e sem autorização pode ser crime e causar impacto no ambiente de produção.
- **B)** Incorreta. Avisar depois é arriscado: incidentes simulados podem acionar respostas reais, e o contratante precisa de pontos de contato.
- **C)** Correta. A autorização escrita, o escopo e as regras de engajamento são requisitos prévios.
- **D)** Incorreta. O nível de conhecimento prévio (caixa-preta, cinza, branca) é definido no planejamento; acesso administrativo total não é requisito.
- **E)** Incorreta. Técnicas manuais fazem parte do pentest, desde que autorizadas no escopo.

**Revisão rápida:** Pentest começa por autorização formal, escopo e regras de engajamento.
