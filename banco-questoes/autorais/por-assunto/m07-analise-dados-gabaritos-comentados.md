# Banco de questões — Módulo 7: Análise de Dados e Informações (lote piloto, gabaritos comentados)

**Tipo:** questões **autorais** — **Questão autoral — estilo Cesgranrio.** **Status:** validada 10.

## Quadro de gabaritos

| Questão | ID | Gabarito | Item do edital | Dificuldade | Habilidade | Tipo | Status |
|---|---|---|---|---|---|---|---|
| 1 | AUT-000061 | B | 7.1 | Fácil | Aplicação | Cenário | Validada |
| 2 | AUT-000062 | D | 7.2 | Média | Aplicação | Cenário | Validada |
| 3 | AUT-000063 | A | 7.3 | Fácil | Aplicação | Cenário | Validada |
| 4 | AUT-000064 | E | 7.4 | Média | Compreensão | Cenário | Validada |
| 5 | AUT-000065 | C | 7.5 | Difícil | Resolução de problemas | Cálculo | Validada |
| 6 | AUT-000066 | D | 7.6 | Média | Análise | Cenário | Validada |
| 7 | AUT-000067 | A | 7.7 | Fácil | Aplicação | Cenário | Validada |
| 8 | AUT-000068 | C | 7.9 | Média | Resolução de problemas | Cálculo | Validada |
| 9 | AUT-000069 | E | 7.8 | Média | Compreensão | Comparativa | Validada |
| 10 | AUT-000070 | B | 7.10 | Difícil | Avaliação | Cenário | Validada |

---

## Questão 1 — AUT-000061

**AUT-000061** · Dado, informação, conhecimento e inteligência · item 7.1 · Fácil · Aplicação

*Questão autoral — estilo Cesgranrio.*

Em uma empresa de óleo e gás, quatro declarações sobre a bomba P-101 foram registradas:  
  
I – "Se a temperatura ultrapassar 35 °C, a bomba tende a falhar em duas semanas."  
II – "38,2".  
III – "A bomba P-101 registrou 38,2 °C às 12 h."  
IV – "A diretoria decide antecipar paradas e priorizar investimentos por risco, com base nesses padrões."  
  
As declarações I, II, III e IV correspondem, respectivamente, a

(A) dado, informação, conhecimento e inteligência.  
(B) conhecimento, dado, informação e inteligência.  
(C) informação, dado, conhecimento e inteligência.  
(D) conhecimento, informação, dado e inteligência.  
(E) dado, conhecimento, informação e inteligência.  

### A. Gabarito

**B**

### B. Resolução comentada

**Dado** é o registro bruto, sem contexto (II: "38,2"). **Informação** é o dado contextualizado e com significado (III: equipamento, valor, unidade e hora). **Conhecimento** é a informação interpretada e integrada à experiência, que permite compreender e agir (I: regra de que acima de 35 °C a bomba tende a falhar). **Inteligência** é o conhecimento aplicado para antecipar e decidir (IV: decisão estratégica orientada por padrões). Assim, I = conhecimento, II = dado, III = informação, IV = inteligência.

### C. Análise das alternativas

- **(A)** Incorreta. Está na ordem hierárquica usual, mas as declarações foram apresentadas fora dessa ordem: I é conhecimento (regra interpretada), e não dado.
- **(B)** Correta. I: conhecimento; II: dado; III: informação; IV: inteligência.
- **(C)** Incorreta. I não é informação (é uma regra interpretada) e III não é dado (tem contexto).
- **(D)** Incorreta. II é o dado bruto, e III é a informação; a alternativa os troca.
- **(E)** Incorreta. I é conhecimento (e não dado), e III é informação (e não conhecimento).

### D. Fundamentação teórica

- **Módulo:** M07 — Análise de dados e informações
- **Assunto:** Dado, informação, conhecimento e inteligência
- **Item do edital:** 7.1 (E5-060)
- **Arquivo de teoria:** `conteudo/07-analise-dados/01-dados-informacao-conhecimento.md`
- **Referência:** Material teórico do projeto; fontes conferidas na revisão do M07 (DIKW, origem do BI, MOLAP/ROLAP/HOLAP, tipos de dados, passos de Kimball); demais conteúdos de memória. Hierarquia DIKW (Ackoff, 1988/1989) conferida em fonte secundária.

### E. Ponto de atenção para a prova

Avalie o **contexto** e a **ação**: dado (valor solto) → informação (com contexto) → conhecimento (regra interpretada, permite agir) → inteligência (decisão estratégica). Cuidado com declarações fora da ordem.

### F. Revisão rápida

Dado: bruto. Informação: contextualizado. Conhecimento: interpretado e aplicável. Inteligência: aplicado para antecipar e decidir.

### G. Tags

`m07` · `dikw` · `dado-informacao-conhecimento` · `item-7.1` · `facil` · `aplicacao` · `cenario` · `autoral`

**Verificação do gabarito:** Sem execução (questão conceitual); gabarito conferido contra o arquivo de teoria (validado).  
**Status de validação:** `validada`  
**Validação:** Aprovada pelo usuário em 2026-11-01 (lote piloto do M07); sem revisão por terceiros; ressalvas: fórmula de planilha não testada em aplicativo; vários referenciais de BI de memória; interpretação dos itens 7.2, 7.3 e 7.7 a 7.9 a confirmar.

---

## Questão 2 — AUT-000062

**AUT-000062** · Business intelligence: tipos de análise · item 7.2 · Média · Aplicação

*Questão autoral — estilo Cesgranrio.*

Após uma queda de 15% nas vendas, o gerente comercial decide investigar onde e por que ela ocorreu: compara os resultados por região, canal e produto, detalha os números até localizar em quais clientes e períodos a queda se concentra.  
  
O tipo de análise predominante nessa investigação é a

(A) análise descritiva, que resume o que aconteceu por meio de relatórios e painéis de indicadores.  
(B) análise preditiva, que estima o que pode acontecer com o uso de modelos estatísticos e de dados históricos.  
(C) análise prescritiva, que recomenda a ação a tomar por meio de otimização e simulação de cenários.  
(D) análise diagnóstica, que busca entender por que algo aconteceu, por detalhamento e comparação.  
(E) análise exploratória de dados não estruturados, restrita à mineração de textos e imagens.  

### A. Gabarito

**D**

### B. Resolução comentada

Os tipos de análise usualmente citados são **descritiva** (o que aconteceu?), **diagnóstica** (por que aconteceu?), **preditiva** (o que pode acontecer?) e **prescritiva** (o que fazer?). Comparar por dimensões e detalhar (*drill-down*) até localizar a causa da queda é **análise diagnóstica**.

### C. Análise das alternativas

- **(A)** Incorreta. A descritiva resume o ocorrido (a queda de 15%); o gerente busca explicá-la.
- **(B)** Incorreta. A preditiva projeta o futuro com modelos; o enunciado trata de explicar um fato passado.
- **(C)** Incorreta. A prescritiva recomenda ações a partir de otimização ou simulação; a decisão sobre o que fazer ainda não foi tomada.
- **(D)** Correta. Entender por que a queda ocorreu, por comparação e detalhamento: análise diagnóstica.
- **(E)** Incorreta. O enunciado trata de dados de vendas organizados por dimensões, e não de mineração de textos e imagens.

### D. Fundamentação teórica

- **Módulo:** M07 — Análise de dados e informações
- **Assunto:** Business intelligence: tipos de análise
- **Item do edital:** 7.2 (E5-061)
- **Arquivo de teoria:** `conteudo/07-analise-dados/02-business-intelligence.md`
- **Referência:** Material teórico do projeto; fontes conferidas na revisão do M07 (DIKW, origem do BI, MOLAP/ROLAP/HOLAP, tipos de dados, passos de Kimball); demais conteúdos de memória. Classificação de *analytics* de mercado, de memória (Gartner e outros). Interpretação do item 7.2 a confirmar.

### E. Ponto de atenção para a prova

Pergunta-guia: **o que aconteceu?** (descritiva) · **por que?** (diagnóstica) · **o que pode acontecer?** (preditiva) · **o que fazer?** (prescritiva).

### F. Revisão rápida

Descritiva: o quê. Diagnóstica: por quê (drill-down). Preditiva: o que será. Prescritiva: o que fazer.

### G. Tags

`m07` · `bi` · `analytics` · `analise-diagnostica` · `item-7.2` · `media` · `aplicacao` · `cenario` · `autoral`

**Verificação do gabarito:** Sem execução (questão conceitual); gabarito conferido contra o arquivo de teoria (validado).  
**Status de validação:** `validada`  
**Validação:** Aprovada pelo usuário em 2026-11-01 (lote piloto do M07); sem revisão por terceiros; ressalvas: fórmula de planilha não testada em aplicativo; vários referenciais de BI de memória; interpretação dos itens 7.2, 7.3 e 7.7 a 7.9 a confirmar.

---

## Questão 3 — AUT-000063

**AUT-000063** · Mapeamento de fontes de dados · item 7.3 · Fácil · Aplicação

*Questão autoral — estilo Cesgranrio.*

Ao mapear as fontes de dados para um data warehouse de manutenção, a equipe descobre que o cadastro de equipamentos existe em dois sistemas, com códigos diferentes para o mesmo equipamento e algumas divergências de dados.  
  
A ação mais adequada no mapeamento é

(A) definir a fonte de verdade do cadastro e criar uma tabela de correspondência entre os códigos, documentando as regras.  
(B) carregar os dois cadastros no data warehouse sem tratamento, deixando que os analistas escolham a versão a cada relatório gerado.  
(C) descartar um dos sistemas, eliminando seu histórico, para evitar a necessidade de correspondência entre os códigos usados.  
(D) criar uma planilha paralela com a lista de equipamentos para os usuários, sem vínculo com os sistemas de origem dos dados.  
(E) aguardar que o cadastro seja unificado nos sistemas de origem antes de iniciar qualquer mapeamento ou carga de dados no ambiente.  

### A. Gabarito

**A**

### B. Resolução comentada

No **mapeamento de fontes**, definem-se a **fonte de verdade** (sistema de registro) para cada dado, resolvem-se **duplicidades** com **tabelas de correspondência** (*de-para*) e **regras de transformação** documentadas, registrando metadados e linhagem. Isso garante uma única versão consistente do dado no ambiente analítico.

### C. Análise das alternativas

- **(A)** Correta. Fonte de verdade, correspondência de códigos e documentação das regras.
- **(B)** Incorreta. Carregar sem tratamento perpetua a inconsistência e deixa cada analista decidir; os números dos relatórios divergirão.
- **(C)** Incorreta. Descartar um sistema e seu histórico perde informação; o mapeamento deve integrar, e não eliminar dados.
- **(D)** Incorreta. Uma planilha paralela cria nova fonte desvinculada, o oposto de uma fonte de verdade governada.
- **(E)** Incorreta. O mapeamento e o tratamento de divergências fazem parte do projeto de BI; aguardar a unificação indefinidamente paralisa a entrega.

### D. Fundamentação teórica

- **Módulo:** M07 — Análise de dados e informações
- **Assunto:** Mapeamento de fontes de dados
- **Item do edital:** 7.3 (E5-062)
- **Arquivo de teoria:** `conteudo/07-analise-dados/03-fontes-e-mapeamento-dados.md`
- **Referência:** Material teórico do projeto; fontes conferidas na revisão do M07 (DIKW, origem do BI, MOLAP/ROLAP/HOLAP, tipos de dados, passos de Kimball); demais conteúdos de memória. Interpretação do item 7.3 (redação genérica) a confirmar.

### E. Ponto de atenção para a prova

**Fonte de verdade** + **tabela de correspondência (de-para)** + **regras documentadas** (metadados e linhagem). Evite soluções paralelas ou "deixar para o analista".

### F. Revisão rápida

Mapeamento: inventariar, perfilar, definir fonte de verdade, mapear origem→destino, documentar (metadados, linhagem).

### G. Tags

`m07` · `fontes-de-dados` · `mapeamento` · `fonte-de-verdade` · `item-7.3` · `facil` · `aplicacao` · `cenario` · `autoral`

**Verificação do gabarito:** Sem execução (questão conceitual); gabarito conferido contra o arquivo de teoria (validado).  
**Status de validação:** `validada`  
**Validação:** Aprovada pelo usuário em 2026-11-01 (lote piloto do M07); sem revisão por terceiros; ressalvas: fórmula de planilha não testada em aplicativo; vários referenciais de BI de memória; interpretação dos itens 7.2, 7.3 e 7.7 a 7.9 a confirmar.

---

## Questão 4 — AUT-000064

**AUT-000064** · Dados estruturados, semiestruturados e não estruturados · item 7.4 · Média · Compreensão

*Questão autoral — estilo Cesgranrio.*

Uma empresa mantém: (I) a tabela de ordens de serviço em um banco de dados relacional; (II) eventos de equipamentos gravados em arquivos JSON, cujos campos variam de um evento para outro; (III) fotos de inspeção e laudos em PDF.  
  
Os conjuntos de dados (I), (II) e (III) são classificados, respectivamente, como

(A) não estruturados, estruturados e semiestruturados.  
(B) semiestruturados, não estruturados e estruturados.  
(C) estruturados, não estruturados e semiestruturados.  
(D) semiestruturados, estruturados e não estruturados.  
(E) estruturados, semiestruturados e não estruturados.  

### A. Gabarito

**E**

### B. Resolução comentada

Dados **estruturados** têm formato padronizado ou **esquema predefinido** (tabela relacional: I). Dados **semiestruturados** não seguem um modelo relacional ou tabular rígido, mas têm marcadores ou etiquetas que organizam os elementos (JSON com campos variáveis: II). Dados **não estruturados** não têm modelo de dados predefinido (fotos e documentos em PDF: III).

### C. Análise das alternativas

- **(A)** Incorreta. Inverte tudo: a tabela relacional é estruturada; o JSON é semiestruturado; as fotos e os PDFs são não estruturados.
- **(B)** Incorreta. A tabela relacional não é semiestruturada, e os arquivos JSON não são não estruturados.
- **(C)** Incorreta. Os eventos em JSON são semiestruturados (e não não estruturados), e as fotos e PDFs são não estruturados.
- **(D)** Incorreta. A tabela relacional é estruturada (esquema predefinido), e o JSON é semiestruturado.
- **(E)** Correta. I: estruturado; II: semiestruturado; III: não estruturado.

### D. Fundamentação teórica

- **Módulo:** M07 — Análise de dados e informações
- **Assunto:** Dados estruturados e dados não estruturados
- **Item do edital:** 7.4 (E5-063)
- **Arquivo de teoria:** `conteudo/07-analise-dados/04-dados-estruturados-e-nao-estruturados.md`
- **Referência:** Material teórico do projeto; fontes conferidas na revisão do M07 (DIKW, origem do BI, MOLAP/ROLAP/HOLAP, tipos de dados, passos de Kimball); demais conteúdos de memória. AWS, "What is structured data?" (verificada em 2026-10-31).

### E. Ponto de atenção para a prova

**Esquema fixo** = estruturado; **marcadores/campos flexíveis** (JSON, XML) = semiestruturado; **sem modelo** (texto livre, imagem, áudio, PDF escaneado) = não estruturado.

### F. Revisão rápida

Estruturado: esquema predefinido. Semiestruturado: etiquetas flexíveis (JSON, XML). Não estruturado: sem modelo de dados definido.

### G. Tags

`m07` · `dados-estruturados` · `semiestruturados` · `nao-estruturados` · `item-7.4` · `media` · `compreensao` · `cenario` · `autoral`

**Verificação do gabarito:** Sem execução (questão conceitual); gabarito conferido contra o arquivo de teoria (validado).  
**Status de validação:** `validada`  
**Validação:** Aprovada pelo usuário em 2026-11-01 (lote piloto do M07); sem revisão por terceiros; ressalvas: fórmula de planilha não testada em aplicativo; vários referenciais de BI de memória; interpretação dos itens 7.2, 7.3 e 7.7 a 7.9 a confirmar.

---

## Questão 5 — AUT-000065

**AUT-000065** · OLAP: operações de slice e dice · item 7.5 · Difícil · Resolução de problemas

*Questão autoral — estilo Cesgranrio.*

Um cubo OLAP é alimentado pela tabela de fatos abaixo (valores de venda por ano, região e produto).  
  
2025: (Norte, A, 100), (Norte, B, 50), (Sul, A, 80), (Sul, C, 40)  
2026: (Norte, A, 120), (Norte, B, 60), (Sul, A, 90), (Sul, B, 70), (Sul, C, 25), (Leste, A, 30), (Leste, C, 20)  
  
Um analista aplica um slice na dimensão Tempo, fixando o ano de 2026, e um dice que restringe os produtos a A e B e as regiões a Norte e Sul.  
  
O total de vendas no subcubo resultante é

(A) 415.  
(B) 370.  
(C) 340.  
(D) 365.  
(E) 570.  

### A. Gabarito

**C**

### B. Resolução comentada

O **slice** fixa **uma** dimensão em um valor (ano = 2026), reduzindo a dimensionalidade; o **dice** restringe **mais de uma** dimensão a subconjuntos (produtos A e B; regiões Norte e Sul), gerando um subcubo. As células de 2026 que atendem às duas restrições são: (Norte, A, 120), (Norte, B, 60), (Sul, A, 90) e (Sul, B, 70). Total: 120 + 60 + 90 + 70 = **340**.

### C. Análise das alternativas

- **(A)** Incorreta. 415 é o total de 2026 sem o dice (todas as células do ano).
- **(B)** Incorreta. 370 é o total de 2026 apenas com a restrição de produtos A e B, incluindo a região Leste.
- **(C)** Correta. Slice (2026) e dice (A e B; Norte e Sul): 340.
- **(D)** Incorreta. 365 é o total de 2026 apenas com a restrição de regiões (Norte e Sul), incluindo o produto C.
- **(E)** Incorreta. 570 seria o total com o dice, mas sem o slice, somando os dois anos.

### D. Fundamentação teórica

- **Módulo:** M07 — Análise de dados e informações
- **Assunto:** Conceitos de OLAP e suas operações
- **Item do edital:** 7.5 (E5-064)
- **Arquivo de teoria:** `conteudo/07-analise-dados/05-olap-e-data-warehouse.md`
- **Referência:** Material teórico do projeto; fontes conferidas na revisão do M07 (DIKW, origem do BI, MOLAP/ROLAP/HOLAP, tipos de dados, passos de Kimball); demais conteúdos de memória. Operações slice e dice conferidas em fonte secundária (Wikipedia, "Online analytical processing").

### E. Ponto de atenção para a prova

**Slice** fixa **uma** dimensão; **dice** restringe **várias**. Em cálculo, aplique **todas** as restrições antes de somar. Roll-up e drill-down mudam o **nível da hierarquia**.

### F. Revisão rápida

Slice: fatia por um valor de uma dimensão. Dice: subcubo por intervalos em várias dimensões. Roll-up: agrega. Drill-down: detalha.

### G. Tags

`m07` · `olap` · `slice` · `dice` · `cubo` · `item-7.5` · `dificil` · `resolucao-de-problemas` · `calculo` · `autoral`

**Verificação do gabarito:** Cálculo executado em SQLite sobre a tabela de fatos: 340 (distratores: 415, 370, 365 e 570 conferidos).  
**Status de validação:** `validada`  
**Validação:** Aprovada pelo usuário em 2026-11-01 (lote piloto do M07); sem revisão por terceiros; ressalvas: fórmula de planilha não testada em aplicativo; vários referenciais de BI de memória; interpretação dos itens 7.2, 7.3 e 7.7 a 7.9 a confirmar.

---

## Questão 6 — AUT-000066

**AUT-000066** · Data warehouse: características · item 7.6 · Média · Análise

*Questão autoral — estilo Cesgranrio.*

Uma equipe descreve quatro características do data warehouse de sua empresa:  
  
I – Os dados vindos de vários sistemas são padronizados em um mesmo formato e codificação.  
II – Os dados são organizados por temas do negócio, como vendas e manutenção, e não por aplicação.  
III – O repositório mantém série histórica, e cada registro está associado a um período.  
IV – Após a carga, os dados não são alterados pelo uso rotineiro; novas cargas apenas acrescentam registros.  
  
As características I, II, III e IV correspondem, respectivamente, a dados

(A) orientados a assunto, integrados, não voláteis e variantes no tempo.  
(B) integrados, variantes no tempo, orientados a assunto e não voláteis.  
(C) não voláteis, integrados, variantes no tempo e orientados a assunto.  
(D) integrados, orientados a assunto, variantes no tempo e não voláteis.  
(E) variantes no tempo, orientados a assunto, integrados e não voláteis.  

### A. Gabarito

**D**

### B. Resolução comentada

As quatro características clássicas do data warehouse são: **integrado** (padroniza nomes, formatos e codificações de várias fontes: I), **orientado a assunto** (organizado por temas do negócio: II), **variante no tempo** (mantém histórico associado a períodos: III) e **não volátil** (dados carregados não são alterados pelo uso rotineiro: IV).

### C. Análise das alternativas

- **(A)** Incorreta. Troca I e II (padronização é integração) e III e IV (histórico é variação no tempo; imutabilidade é não volatilidade).
- **(B)** Incorreta. A descrição II é de dados orientados a assunto, e a III, de dados variantes no tempo; a alternativa as troca.
- **(C)** Incorreta. A descrição I é de dados integrados, e não de não voláteis; a descrição IV é de não volatilidade.
- **(D)** Correta. I: integrados; II: orientados a assunto; III: variantes no tempo; IV: não voláteis.
- **(E)** Incorreta. A descrição I é de integração (e não de variação no tempo), e a III é de variação no tempo.

### D. Fundamentação teórica

- **Módulo:** M07 — Análise de dados e informações
- **Assunto:** Conceitos de data warehouse: características
- **Item do edital:** 7.6 (E5-065)
- **Arquivo de teoria:** `conteudo/07-analise-dados/05-olap-e-data-warehouse.md`
- **Referência:** Material teórico do projeto; fontes conferidas na revisão do M07 (DIKW, origem do BI, MOLAP/ROLAP/HOLAP, tipos de dados, passos de Kimball); demais conteúdos de memória. As quatro características constam da Wikipedia ("Data warehouse"); a atribuição a Inmon não foi confirmada.

### E. Ponto de atenção para a prova

**Integrado** = padroniza. **Orientado a assunto** = temas. **Variante no tempo** = histórico. **Não volátil** = carga acrescenta, uso não altera.

### F. Revisão rápida

DW: orientado a assunto, integrado, variante no tempo, não volátil; destinado ao apoio à decisão.

### G. Tags

`m07` · `data-warehouse` · `caracteristicas` · `item-7.6` · `media` · `analise` · `cenario` · `autoral`

**Verificação do gabarito:** Sem execução (questão conceitual); gabarito conferido contra o arquivo de teoria (validado).  
**Status de validação:** `validada`  
**Validação:** Aprovada pelo usuário em 2026-11-01 (lote piloto do M07); sem revisão por terceiros; ressalvas: fórmula de planilha não testada em aplicativo; vários referenciais de BI de memória; interpretação dos itens 7.2, 7.3 e 7.7 a 7.9 a confirmar.

---

## Questão 7 — AUT-000067

**AUT-000067** · Modelagem multidimensional: tipos de tabela fato · item 7.7 · Fácil · Aplicação

*Questão autoral — estilo Cesgranrio.*

Em um data warehouse de manutenção, existe uma tabela fato com uma linha por ordem de serviço. A linha é inserida quando a ordem é aberta e, depois, atualizada à medida que a ordem avança, com as datas de programação, execução e encerramento, além dos intervalos entre essas etapas.  
  
Segundo a classificação das tabelas fato, trata-se de uma tabela fato do tipo

(A) snapshot acumulativo.  
(B) transacional.  
(C) snapshot periódico.  
(D) sem fatos (factless).  
(E) de dimensão degenerada.  

### A. Gabarito

**A**

### B. Resolução comentada

Na tabela fato de **snapshot acumulativo**, há **uma linha por ciclo de processo** (aqui, uma ordem de serviço), **atualizada** conforme ele avança pelas etapas, registrando datas e intervalos entre os marcos. A **transacional** tem uma linha por evento; o **snapshot periódico**, uma linha por entidade por período; a **sem fatos** registra ocorrências sem medida numérica.

### C. Análise das alternativas

- **(A)** Correta. Uma linha por ciclo, atualizada nas etapas: snapshot acumulativo.
- **(B)** Incorreta. A transacional tem uma linha por evento, sem atualização conforme o processo avança.
- **(C)** Incorreta. O snapshot periódico tem uma linha por entidade e por período (por exemplo, saldo diário), e não por ciclo de processo.
- **(D)** Incorreta. A tabela sem fatos registra ocorrências ou cobertura, sem medidas; aqui há datas e intervalos como medidas.
- **(E)** Incorreta. Dimensão degenerada é um identificador mantido na tabela fato sem tabela de dimensão, e não um tipo de tabela fato.

### D. Fundamentação teórica

- **Módulo:** M07 — Análise de dados e informações
- **Assunto:** Técnicas de modelagem de bases multidimensionais: tipos de tabela fato
- **Item do edital:** 7.7 (E5-066)
- **Arquivo de teoria:** `conteudo/07-analise-dados/06-modelagem-multidimensional.md`
- **Referência:** Material teórico do projeto; fontes conferidas na revisão do M07 (DIKW, origem do BI, MOLAP/ROLAP/HOLAP, tipos de dados, passos de Kimball); demais conteúdos de memória. Kimball Group, tipos de tabela fato (títulos verificados em 2026-10-31; descrições de memória).

### E. Ponto de atenção para a prova

Tipos de fato: **transacional** (um evento), **snapshot periódico** (um retrato por período), **snapshot acumulativo** (um ciclo de processo, **atualizado**), **sem fatos**.

### F. Revisão rápida

Acumulativo: linha por ciclo, atualizada nas etapas. Periódico: retrato por período. Transacional: um evento.

### G. Tags

`m07` · `modelagem-multidimensional` · `tabela-fato` · `snapshot-acumulativo` · `item-7.7` · `facil` · `aplicacao` · `cenario` · `autoral`

**Verificação do gabarito:** Sem execução (questão conceitual); gabarito conferido contra o arquivo de teoria (validado).  
**Status de validação:** `validada`  
**Validação:** Aprovada pelo usuário em 2026-11-01 (lote piloto do M07); sem revisão por terceiros; ressalvas: fórmula de planilha não testada em aplicativo; vários referenciais de BI de memória; interpretação dos itens 7.2, 7.3 e 7.7 a 7.9 a confirmar.

---

## Questão 8 — AUT-000068

**AUT-000068** · Manipulação de dados em planilhas: SOMASES · item 7.9 · Média · Resolução de problemas

*Questão autoral — estilo Cesgranrio.*

Uma planilha contém os dados a seguir, nas colunas A (Região), B (Mês) e C (Valor), nas linhas 2 a 6:  
  
Linha 2: Norte, Jan, 100  
Linha 3: Sul, Jan, 80  
Linha 4: Norte, Fev, 120  
Linha 5: Sul, Fev, 90  
Linha 6: Norte, Mar, 60  
  
A fórmula a seguir é digitada em uma célula:  
  
=SOMASES(C2:C6; A2:A6; "Norte"; B2:B6; "<>Mar")  
  
O valor exibido na célula é

(A) 280.  
(B) 390.  
(C) 220.  
(D) 450.  
(E) 170.  

### A. Gabarito

**C**

### B. Resolução comentada

A função `SOMASES` soma os valores de C que atendem a **todos** os critérios simultaneamente (operação E): região = "Norte" **e** mês diferente de "Mar" (`"<>Mar"`). As linhas que atendem são 2 (Norte, Jan, 100) e 4 (Norte, Fev, 120). Soma: 100 + 120 = **220**.

### C. Análise das alternativas

- **(A)** Incorreta. 280 é a soma de todas as linhas da região Norte (100 + 120 + 60), desconsiderando o critério do mês.
- **(B)** Incorreta. 390 é a soma de todas as linhas com mês diferente de março (100 + 80 + 120 + 90), desconsiderando o critério da região.
- **(C)** Correta. Região Norte e mês diferente de março: 100 + 120 = 220.
- **(D)** Incorreta. 450 é a soma de toda a coluna C, sem nenhum critério.
- **(E)** Incorreta. 170 é a soma da região Sul (80 + 90), que o critério não seleciona.

### D. Fundamentação teórica

- **Módulo:** M07 — Análise de dados e informações
- **Assunto:** Manipulação de dados em planilhas: funções condicionais
- **Item do edital:** 7.9 (E5-068) · itens secundários: 7.8
- **Arquivo de teoria:** `conteudo/07-analise-dados/07-dashboards-e-planilhas.md`
- **Referência:** Material teórico do projeto; fontes conferidas na revisão do M07 (DIKW, origem do BI, MOLAP/ROLAP/HOLAP, tipos de dados, passos de Kimball); demais conteúdos de memória. Nomes de funções conforme aplicativos mais comuns, de memória (páginas de suporte da Microsoft não lidas); relação secundária com o item 7.8.

### E. Ponto de atenção para a prova

**SOMASES** aplica **todos** os critérios (E). **SOMASE** tem **um** critério. O critério `"<>valor"` significa "diferente de". Calcule linha a linha.

### F. Revisão rápida

SOMASES(soma; critério1_intervalo; critério1; ...): soma as células que atendem a todos os critérios.

### G. Tags

`m07` · `planilhas` · `somases` · `funcoes-condicionais` · `item-7.9` · `item-7.8` · `media` · `resolucao-de-problemas` · `calculo` · `autoral`

**Verificação do gabarito:** Cálculo executado em Python (soma das linhas que atendem aos dois critérios): 220; distratores 280, 390, 450 e 170 conferidos.  
**Status de validação:** `validada`  
**Validação:** Aprovada pelo usuário em 2026-11-01 (lote piloto do M07); sem revisão por terceiros; ressalvas: fórmula de planilha não testada em aplicativo; vários referenciais de BI de memória; interpretação dos itens 7.2, 7.3 e 7.7 a 7.9 a confirmar.

---

## Questão 9 — AUT-000069

**AUT-000069** · Ferramentas de BI: medidas, colunas calculadas e interatividade · item 7.8 · Média · Compreensão

*Questão autoral — estilo Cesgranrio.*

Ao construir um relatório interativo em uma ferramenta de BI, uma analista precisa calcular a margem percentual, que deve se ajustar aos filtros que o usuário selecionar (por exemplo, por região e período), e, em outro cálculo, classificar cada linha de produto em uma faixa de preço durante a carga do modelo.  
  
O tipo de cálculo adequado a cada situação é, respectivamente,

(A) coluna calculada para a margem e medida para a faixa de preço.  
(B) coluna calculada para ambos, pois só ela é avaliada linha a linha.  
(C) medida para ambos, pois só ela admite o uso de filtros interativos.  
(D) parâmetro para a margem e filtro de página para a faixa de preço.  
(E) medida para a margem e coluna calculada para a faixa de preço.  

### A. Gabarito

**E**

### B. Resolução comentada

Uma **medida** é um cálculo **dinâmico**, avaliado no **contexto dos filtros** e das seleções do usuário (por exemplo, uma margem percentual agregada). Uma **coluna calculada** é calculada **linha a linha** durante a carga ou o modelo (por exemplo, a faixa de preço de cada produto). Assim: margem = medida; faixa de preço = coluna calculada.

### C. Análise das alternativas

- **(A)** Incorreta. Inverte os conceitos: a margem que reage a filtros é uma medida, e a faixa por linha é coluna calculada.
- **(B)** Incorreta. A coluna calculada não se ajusta dinamicamente aos filtros do usuário; para a margem agregada, é necessária uma medida.
- **(C)** Incorreta. A medida avalia agregações no contexto de filtros, mas classificar cada linha na carga é papel de uma coluna calculada.
- **(D)** Incorreta. Parâmetro é um valor ajustável pelo usuário (por exemplo, uma meta), e filtro de página restringe dados; nenhum dos dois define os cálculos pedidos.
- **(E)** Correta. Margem sensível aos filtros: medida; classificação por linha na carga: coluna calculada.

### D. Fundamentação teórica

- **Módulo:** M07 — Análise de dados e informações
- **Assunto:** Construção de relatórios e dashboards interativos em ferramentas de BI
- **Item do edital:** 7.8 (E5-067)
- **Arquivo de teoria:** `conteudo/07-analise-dados/07-dashboards-e-planilhas.md`
- **Referência:** Material teórico do projeto; fontes conferidas na revisão do M07 (DIKW, origem do BI, MOLAP/ROLAP/HOLAP, tipos de dados, passos de Kimball); demais conteúdos de memória. Conceitos independentes de produto, de memória; interpretação do item 7.8 (sem ferramenta definida) a confirmar.

### E. Ponto de atenção para a prova

**Medida** = avaliada **no contexto dos filtros** (dinâmica, agregada). **Coluna calculada** = **por linha**, no carregamento/modelo.

### F. Revisão rápida

Medida: cálculo dinâmico no contexto de filtro. Coluna calculada: valor por linha. Parâmetro: valor ajustável. Filtro: restringe os dados.

### G. Tags

`m07` · `bi` · `medida` · `coluna-calculada` · `interatividade` · `item-7.8` · `media` · `compreensao` · `comparativa` · `autoral`

**Verificação do gabarito:** Sem execução (questão conceitual); gabarito conferido contra o arquivo de teoria (validado).  
**Status de validação:** `validada`  
**Validação:** Aprovada pelo usuário em 2026-11-01 (lote piloto do M07); sem revisão por terceiros; ressalvas: fórmula de planilha não testada em aplicativo; vários referenciais de BI de memória; interpretação dos itens 7.2, 7.3 e 7.7 a 7.9 a confirmar.

---

## Questão 10 — AUT-000070

**AUT-000070** · Insights e BI na tomada de decisão: correlação e causalidade · item 7.10 · Difícil · Avaliação

*Questão autoral — estilo Cesgranrio.*

Em um dashboard de logística, uma analista observa que, em dezembro, as vendas de capas de chuva e o número de entregas atrasadas aumentaram ao mesmo tempo. Um diretor propõe suspender as vendas de capas de chuva, com o argumento de que elas "causam" os atrasos.  
  
Para que o BI apoie a decisão de forma adequada, a conclusão mais apropriada da analista é:

(A) Aceitar a proposta, pois a coincidência temporal entre as duas séries comprova a relação de causa e efeito entre elas.  
(B) Informar que a correlação não prova causalidade e investigar fatores como a sazonalidade e as chuvas antes de decidir.  
(C) Rejeitar a proposta sem análise, pois dashboards não podem ser usados para investigar causas de fenômenos observados.  
(D) Substituir a análise por uma pesquisa de opinião com os clientes, pois dados de BI não sustentam decisões de negócio.  
(E) Aguardar os resultados de janeiro para confirmar a tendência, evitando qualquer análise adicional de fatores externos.  

### A. Gabarito

**B**

### B. Resolução comentada

Duas séries que variam juntas têm **correlação**, o que **não implica causalidade**: pode haver um **fator comum** (sazonalidade, chuvas e maior volume de pedidos). Um bom **insight** é uma descoberta **relevante e acionável**, obtida com a verificação de hipóteses e a validação da qualidade e do contexto; o BI **apoia** a decisão, mas não a substitui, e exige cuidado com vieses (como correlação × causalidade).

### C. Análise das alternativas

- **(A)** Incorreta. A coincidência temporal não comprova causa e efeito; aceitar a conclusão seria cair na falácia da correlação como causalidade.
- **(B)** Correta. Reconhece o limite da correlação e propõe investigar fatores comuns antes da decisão.
- **(C)** Incorreta. Dashboards e *drill-down* servem justamente à investigação; rejeitar sem análise ignora o papel do BI na geração de insights.
- **(D)** Incorreta. O BI sustenta decisões baseadas em dados, com os devidos cuidados; trocar a análise por uma pesquisa não resolve a dúvida causal.
- **(E)** Incorreta. Esperar sem analisar fatores externos adia a decisão sem testar hipóteses; um bom analista investiga os fatores plausíveis agora.

### D. Fundamentação teórica

- **Módulo:** M07 — Análise de dados e informações
- **Assunto:** Geração de insights a partir de relatórios e dashboards; BI como suporte à decisão
- **Item do edital:** 7.10 (E5-069) · itens secundários: 7.11
- **Arquivo de teoria:** `conteudo/07-analise-dados/08-insights-e-tomada-de-decisao.md`
- **Referência:** Material teórico do projeto; fontes conferidas na revisão do M07 (DIKW, origem do BI, MOLAP/ROLAP/HOLAP, tipos de dados, passos de Kimball); demais conteúdos de memória. Simon e Anthony de memória (não confirmados); relação secundária com o item 7.11.

### E. Ponto de atenção para a prova

**Correlação ≠ causalidade.** Busque **fatores comuns** e valide hipóteses. O BI **apoia** a decisão, mas não decide sozinho; atenção a **vieses** (confirmação, seleção, períodos escolhidos).

### F. Revisão rápida

Insight: descoberta relevante e acionável. Vieses: correlação×causalidade, confirmação, seleção, cherry-picking.

### G. Tags

`m07` · `insights` · `correlacao-causalidade` · `vieses` · `tomada-de-decisao` · `item-7.10` · `item-7.11` · `dificil` · `avaliacao` · `cenario` · `autoral`

**Verificação do gabarito:** Sem execução (questão conceitual); gabarito conferido contra o arquivo de teoria (validado).  
**Status de validação:** `validada`  
**Validação:** Aprovada pelo usuário em 2026-11-01 (lote piloto do M07); sem revisão por terceiros; ressalvas: fórmula de planilha não testada em aplicativo; vários referenciais de BI de memória; interpretação dos itens 7.2, 7.3 e 7.7 a 7.9 a confirmar.

---

