# Simulado do módulo 7 — Análise de dados e informações

**Status:** rascunho · **Tempo:** 50 min · **Questões:** 13

**Critério de distribuição:** Até 15 questões por módulo, priorizando itens ainda não usados e mistura de dificuldade 30/50/20% (critério pedagógico).

**Observações:** Mistura de questões oficiais e autorais do módulo; algumas ainda `em_revisao`.

Composição: tipo {'autoral': 12, 'oficial': 1} · status {'validada': 10, 'em_revisao': 3} · dificuldade {'facil': 3, 'media': 8, 'dificil': 2}

## 1. AUT-000061 — Dado, informação, conhecimento e inteligência

*Questão autoral — estilo Cesgranrio.* · item 7.1 · Fácil · gabarito **B**

**Dado** é o registro bruto, sem contexto (II: "38,2"). **Informação** é o dado contextualizado e com significado (III: equipamento, valor, unidade e hora). **Conhecimento** é a informação interpretada e integrada à experiência, que permite compreender e agir (I: regra de que acima de 35 °C a bomba tende a falhar). **Inteligência** é o conhecimento aplicado para antecipar e decidir (IV: decisão estratégica orientada por padrões). Assim, I = conhecimento, II = dado, III = informação, IV = inteligência.

- **A)** Incorreta. Está na ordem hierárquica usual, mas as declarações foram apresentadas fora dessa ordem: I é conhecimento (regra interpretada), e não dado.
- **B)** Correta. I: conhecimento; II: dado; III: informação; IV: inteligência.
- **C)** Incorreta. I não é informação (é uma regra interpretada) e III não é dado (tem contexto).
- **D)** Incorreta. II é o dado bruto, e III é a informação; a alternativa os troca.
- **E)** Incorreta. I é conhecimento (e não dado), e III é informação (e não conhecimento).

**Revisão rápida:** Dado: bruto. Informação: contextualizado. Conhecimento: interpretado e aplicável. Inteligência: aplicado para antecipar e decidir.

## 2. AUT-000062 — Business intelligence: tipos de análise

*Questão autoral — estilo Cesgranrio.* · item 7.2 · Média · gabarito **D**

Os tipos de análise usualmente citados são **descritiva** (o que aconteceu?), **diagnóstica** (por que aconteceu?), **preditiva** (o que pode acontecer?) e **prescritiva** (o que fazer?). Comparar por dimensões e detalhar (*drill-down*) até localizar a causa da queda é **análise diagnóstica**.

- **A)** Incorreta. A descritiva resume o ocorrido (a queda de 15%); o gerente busca explicá-la.
- **B)** Incorreta. A preditiva projeta o futuro com modelos; o enunciado trata de explicar um fato passado.
- **C)** Incorreta. A prescritiva recomenda ações a partir de otimização ou simulação; a decisão sobre o que fazer ainda não foi tomada.
- **D)** Correta. Entender por que a queda ocorreu, por comparação e detalhamento: análise diagnóstica.
- **E)** Incorreta. O enunciado trata de dados de vendas organizados por dimensões, e não de mineração de textos e imagens.

**Revisão rápida:** Descritiva: o quê. Diagnóstica: por quê (drill-down). Preditiva: o que será. Prescritiva: o que fazer.

## 3. AUT-000063 — Mapeamento de fontes de dados

*Questão autoral — estilo Cesgranrio.* · item 7.3 · Fácil · gabarito **A**

No **mapeamento de fontes**, definem-se a **fonte de verdade** (sistema de registro) para cada dado, resolvem-se **duplicidades** com **tabelas de correspondência** (*de-para*) e **regras de transformação** documentadas, registrando metadados e linhagem. Isso garante uma única versão consistente do dado no ambiente analítico.

- **A)** Correta. Fonte de verdade, correspondência de códigos e documentação das regras.
- **B)** Incorreta. Carregar sem tratamento perpetua a inconsistência e deixa cada analista decidir; os números dos relatórios divergirão.
- **C)** Incorreta. Descartar um sistema e seu histórico perde informação; o mapeamento deve integrar, e não eliminar dados.
- **D)** Incorreta. Uma planilha paralela cria nova fonte desvinculada, o oposto de uma fonte de verdade governada.
- **E)** Incorreta. O mapeamento e o tratamento de divergências fazem parte do projeto de BI; aguardar a unificação indefinidamente paralisa a entrega.

**Revisão rápida:** Mapeamento: inventariar, perfilar, definir fonte de verdade, mapear origem→destino, documentar (metadados, linhagem).

## 4. AUT-000064 — Dados estruturados, semiestruturados e não estruturados

*Questão autoral — estilo Cesgranrio.* · item 7.4 · Média · gabarito **E**

Dados **estruturados** têm formato padronizado ou **esquema predefinido** (tabela relacional: I). Dados **semiestruturados** não seguem um modelo relacional ou tabular rígido, mas têm marcadores ou etiquetas que organizam os elementos (JSON com campos variáveis: II). Dados **não estruturados** não têm modelo de dados predefinido (fotos e documentos em PDF: III).

- **A)** Incorreta. Inverte tudo: a tabela relacional é estruturada; o JSON é semiestruturado; as fotos e os PDFs são não estruturados.
- **B)** Incorreta. A tabela relacional não é semiestruturada, e os arquivos JSON não são não estruturados.
- **C)** Incorreta. Os eventos em JSON são semiestruturados (e não não estruturados), e as fotos e PDFs são não estruturados.
- **D)** Incorreta. A tabela relacional é estruturada (esquema predefinido), e o JSON é semiestruturado.
- **E)** Correta. I: estruturado; II: semiestruturado; III: não estruturado.

**Revisão rápida:** Estruturado: esquema predefinido. Semiestruturado: etiquetas flexíveis (JSON, XML). Não estruturado: sem modelo de dados definido.

## 5. AUT-000065 — OLAP: operações de slice e dice

*Questão autoral — estilo Cesgranrio.* · item 7.5 · Difícil · gabarito **C**

O **slice** fixa **uma** dimensão em um valor (ano = 2026), reduzindo a dimensionalidade; o **dice** restringe **mais de uma** dimensão a subconjuntos (produtos A e B; regiões Norte e Sul), gerando um subcubo. As células de 2026 que atendem às duas restrições são: (Norte, A, 120), (Norte, B, 60), (Sul, A, 90) e (Sul, B, 70). Total: 120 + 60 + 90 + 70 = **340**.

- **A)** Incorreta. 415 é o total de 2026 sem o dice (todas as células do ano).
- **B)** Incorreta. 370 é o total de 2026 apenas com a restrição de produtos A e B, incluindo a região Leste.
- **C)** Correta. Slice (2026) e dice (A e B; Norte e Sul): 340.
- **D)** Incorreta. 365 é o total de 2026 apenas com a restrição de regiões (Norte e Sul), incluindo o produto C.
- **E)** Incorreta. 570 seria o total com o dice, mas sem o slice, somando os dois anos.

**Revisão rápida:** Slice: fatia por um valor de uma dimensão. Dice: subcubo por intervalos em várias dimensões. Roll-up: agrega. Drill-down: detalha.

## 6. AUT-000111 — OLAP: roll-up, slice e pivot

*Questão autoral — estilo Cesgranrio.* · item 7.5 · Média · gabarito **B**

**Roll-up** agrega, subindo na hierarquia (mês → ano). **Slice** fixa **um** valor de uma dimensão, resultando em uma fatia do cubo (Região = Sul). **Pivot (rotação)** muda a orientação das dimensões na visualização. **Drill-down** faz o caminho contrário do roll-up; **dice** seleciona subcubo com valores em **várias** dimensões; **drill-through** acessa os dados de detalhe da fonte.

- **A)** Incorreta. Drill-down detalha (ano → mês), o inverso do descrito em I; dice usa mais de uma dimensão.
- **B)** Correta. I é roll-up, II é slice e III é pivot.
- **C)** Incorreta. Dice exige restrição em duas ou mais dimensões; drill-through acessa a fonte, não troca eixos.
- **D)** Incorreta. Drill-down detalha, e I descreve uma agregação.
- **E)** Incorreta. Inverte II e III: fixar a região é slice, e girar eixos é pivot.

**Revisão rápida:** Roll-up agrega, slice fixa, pivot gira.

## 7. AUT-000066 — Data warehouse: características

*Questão autoral — estilo Cesgranrio.* · item 7.6 · Média · gabarito **D**

As quatro características clássicas do data warehouse são: **integrado** (padroniza nomes, formatos e codificações de várias fontes: I), **orientado a assunto** (organizado por temas do negócio: II), **variante no tempo** (mantém histórico associado a períodos: III) e **não volátil** (dados carregados não são alterados pelo uso rotineiro: IV).

- **A)** Incorreta. Troca I e II (padronização é integração) e III e IV (histórico é variação no tempo; imutabilidade é não volatilidade).
- **B)** Incorreta. A descrição II é de dados orientados a assunto, e a III, de dados variantes no tempo; a alternativa as troca.
- **C)** Incorreta. A descrição I é de dados integrados, e não de não voláteis; a descrição IV é de não volatilidade.
- **D)** Correta. I: integrados; II: orientados a assunto; III: variantes no tempo; IV: não voláteis.
- **E)** Incorreta. A descrição I é de integração (e não de variação no tempo), e a III é de variação no tempo.

**Revisão rápida:** DW: orientado a assunto, integrado, variante no tempo, não volátil; destinado ao apoio à decisão.

## 8. OFI-000032 — Data warehouse: característica

*Questão oficial — Fundação Cesgranrio, Transpetro PSP/Terra 002/2023, Prova 6, questão 56.* · item 7.6 · Média · gabarito **B**

O **data warehouse** é **orientado a assunto, integrado, histórico e não volátil**, consolidando dados de várias fontes para análise (OLAP), inclusive multidimensional.

- **A)** Incorreta. Dados brutos sem processamento descrevem um data lake; o DW guarda dados tratados e permite análises.
- **B)** Correta. Consolida dados de várias fontes e suporta análises multidimensionais.
- **C)** Incorreta. O DW é histórico por definição.
- **D)** Incorreta. Alta velocidade transacional é característica de OLTP; o DW é otimizado para consultas analíticas.
- **E)** Incorreta. A afirmação é absoluta ("apenas"); a alternativa B é a que descreve a característica definidora.

**Revisão rápida:** DW = integração + histórico + análise.

## 9. AUT-000067 — Modelagem multidimensional: tipos de tabela fato

*Questão autoral — estilo Cesgranrio.* · item 7.7 · Fácil · gabarito **A**

Na tabela fato de **snapshot acumulativo**, há **uma linha por ciclo de processo** (aqui, uma ordem de serviço), **atualizada** conforme ele avança pelas etapas, registrando datas e intervalos entre os marcos. A **transacional** tem uma linha por evento; o **snapshot periódico**, uma linha por entidade por período; a **sem fatos** registra ocorrências sem medida numérica.

- **A)** Correta. Uma linha por ciclo, atualizada nas etapas: snapshot acumulativo.
- **B)** Incorreta. A transacional tem uma linha por evento, sem atualização conforme o processo avança.
- **C)** Incorreta. O snapshot periódico tem uma linha por entidade e por período (por exemplo, saldo diário), e não por ciclo de processo.
- **D)** Incorreta. A tabela sem fatos registra ocorrências ou cobertura, sem medidas; aqui há datas e intervalos como medidas.
- **E)** Incorreta. Dimensão degenerada é um identificador mantido na tabela fato sem tabela de dimensão, e não um tipo de tabela fato.

**Revisão rápida:** Acumulativo: linha por ciclo, atualizada nas etapas. Periódico: retrato por período. Transacional: um evento.

## 10. AUT-000069 — Ferramentas de BI: medidas, colunas calculadas e interatividade

*Questão autoral — estilo Cesgranrio.* · item 7.8 · Média · gabarito **E**

Uma **medida** é um cálculo **dinâmico**, avaliado no **contexto dos filtros** e das seleções do usuário (por exemplo, uma margem percentual agregada). Uma **coluna calculada** é calculada **linha a linha** durante a carga ou o modelo (por exemplo, a faixa de preço de cada produto). Assim: margem = medida; faixa de preço = coluna calculada.

- **A)** Incorreta. Inverte os conceitos: a margem que reage a filtros é uma medida, e a faixa por linha é coluna calculada.
- **B)** Incorreta. A coluna calculada não se ajusta dinamicamente aos filtros do usuário; para a margem agregada, é necessária uma medida.
- **C)** Incorreta. A medida avalia agregações no contexto de filtros, mas classificar cada linha na carga é papel de uma coluna calculada.
- **D)** Incorreta. Parâmetro é um valor ajustável pelo usuário (por exemplo, uma meta), e filtro de página restringe dados; nenhum dos dois define os cálculos pedidos.
- **E)** Correta. Margem sensível aos filtros: medida; classificação por linha na carga: coluna calculada.

**Revisão rápida:** Medida: cálculo dinâmico no contexto de filtro. Coluna calculada: valor por linha. Parâmetro: valor ajustável. Filtro: restringe os dados.

## 11. AUT-000068 — Manipulação de dados em planilhas: SOMASES

*Questão autoral — estilo Cesgranrio.* · item 7.9 · Média · gabarito **C**

A função `SOMASES` soma os valores de C que atendem a **todos** os critérios simultaneamente (operação E): região = "Norte" **e** mês diferente de "Mar" (`"<>Mar"`). As linhas que atendem são 2 (Norte, Jan, 100) e 4 (Norte, Fev, 120). Soma: 100 + 120 = **220**.

- **A)** Incorreta. 280 é a soma de todas as linhas da região Norte (100 + 120 + 60), desconsiderando o critério do mês.
- **B)** Incorreta. 390 é a soma de todas as linhas com mês diferente de março (100 + 80 + 120 + 90), desconsiderando o critério da região.
- **C)** Correta. Região Norte e mês diferente de março: 100 + 120 = 220.
- **D)** Incorreta. 450 é a soma de toda a coluna C, sem nenhum critério.
- **E)** Incorreta. 170 é a soma da região Sul (80 + 90), que o critério não seleciona.

**Revisão rápida:** SOMASES(soma; critério1_intervalo; critério1; ...): soma as células que atendem a todos os critérios.

## 12. AUT-000070 — Insights e BI na tomada de decisão: correlação e causalidade

*Questão autoral — estilo Cesgranrio.* · item 7.10 · Difícil · gabarito **B**

Duas séries que variam juntas têm **correlação**, o que **não implica causalidade**: pode haver um **fator comum** (sazonalidade, chuvas e maior volume de pedidos). Um bom **insight** é uma descoberta **relevante e acionável**, obtida com a verificação de hipóteses e a validação da qualidade e do contexto; o BI **apoia** a decisão, mas não a substitui, e exige cuidado com vieses (como correlação × causalidade).

- **A)** Incorreta. A coincidência temporal não comprova causa e efeito; aceitar a conclusão seria cair na falácia da correlação como causalidade.
- **B)** Correta. Reconhece o limite da correlação e propõe investigar fatores comuns antes da decisão.
- **C)** Incorreta. Dashboards e *drill-down* servem justamente à investigação; rejeitar sem análise ignora o papel do BI na geração de insights.
- **D)** Incorreta. O BI sustenta decisões baseadas em dados, com os devidos cuidados; trocar a análise por uma pesquisa não resolve a dúvida causal.
- **E)** Incorreta. Esperar sem analisar fatores externos adia a decisão sem testar hipóteses; um bom analista investiga os fatores plausíveis agora.

**Revisão rápida:** Insight: descoberta relevante e acionável. Vieses: correlação×causalidade, confirmação, seleção, cherry-picking.

## 13. AUT-000110 — BI como suporte à tomada de decisão

*Questão autoral — estilo Cesgranrio.* · item 7.11 · Média · gabarito **A**

O BI **transforma dados em informação para apoiar decisões** nos níveis estratégico, tático e operacional, entregando visão integrada, histórica e tempestiva. Ele **apoia**, e não **substitui** o decisor, e depende da **qualidade dos dados** e do alinhamento aos indicadores do negócio.

- **A)** Correta. Descreve o papel do BI: apoiar a decisão com informação integrada e confiável.
- **B)** Incorreta. Nenhuma ferramenta garante decisão ótima; o decisor continua responsável.
- **C)** Incorreta. BI depende de qualidade de dados; "lixo entra, lixo sai".
- **D)** Incorreta. BI atende aos três níveis decisórios.
- **E)** Incorreta. O DW é a base integrada que costuma alimentar os painéis; não é dispensável.

**Revisão rápida:** BI apoia decisões em todos os níveis; não decide sozinho.
