# Questões — Módulo M07: Análise de Dados e Informações (sem gabarito)

## Identificação
- Concurso: Processo Seletivo Público TRANSPETRO 2026.4 (Edital nº 04/2026)
- Ênfase: 5 — Análise de Sistemas: Processos de Negócios
- Banca: Fundação Cesgranrio
- Módulo: M07 — Análise de Dados e Informações
- Total: 17 questões; status `validada` ou `em_revisao` (indicado em cada questão)
- Gerado em 2026-11-07 por `tools/build_notebooklm.py` a partir de `banco-questoes/`


### AUT-000061 — item 7.1 — dificuldade facil
*Questão autoral — estilo Cesgranrio (criada pelo projeto; não é questão aplicada pela banca) · status: validada*

Em uma empresa de óleo e gás, quatro declarações sobre a bomba P-101 foram registradas:

I – "Se a temperatura ultrapassar 35 °C, a bomba tende a falhar em duas semanas."
II – "38,2".
III – "A bomba P-101 registrou 38,2 °C às 12 h."
IV – "A diretoria decide antecipar paradas e priorizar investimentos por risco, com base nesses padrões."

As declarações I, II, III e IV correspondem, respectivamente, a

A) dado, informação, conhecimento e inteligência.
B) conhecimento, dado, informação e inteligência.
C) informação, dado, conhecimento e inteligência.
D) conhecimento, informação, dado e inteligência.
E) dado, conhecimento, informação e inteligência.

### AUT-000062 — item 7.2 — dificuldade media
*Questão autoral — estilo Cesgranrio (criada pelo projeto; não é questão aplicada pela banca) · status: validada*

Após uma queda de 15% nas vendas, o gerente comercial decide investigar onde e por que ela ocorreu: compara os resultados por região, canal e produto, detalha os números até localizar em quais clientes e períodos a queda se concentra.

O tipo de análise predominante nessa investigação é a

A) análise descritiva, que resume o que aconteceu por meio de relatórios e painéis de indicadores.
B) análise preditiva, que estima o que pode acontecer com o uso de modelos estatísticos e de dados históricos.
C) análise prescritiva, que recomenda a ação a tomar por meio de otimização e simulação de cenários.
D) análise diagnóstica, que busca entender por que algo aconteceu, por detalhamento e comparação.
E) análise exploratória de dados não estruturados, restrita à mineração de textos e imagens.

### AUT-000063 — item 7.3 — dificuldade facil
*Questão autoral — estilo Cesgranrio (criada pelo projeto; não é questão aplicada pela banca) · status: validada*

Ao mapear as fontes de dados para um data warehouse de manutenção, a equipe descobre que o cadastro de equipamentos existe em dois sistemas, com códigos diferentes para o mesmo equipamento e algumas divergências de dados.

A ação mais adequada no mapeamento é

A) definir a fonte de verdade do cadastro e criar uma tabela de correspondência entre os códigos, documentando as regras.
B) carregar os dois cadastros no data warehouse sem tratamento, deixando que os analistas escolham a versão a cada relatório gerado.
C) descartar um dos sistemas, eliminando seu histórico, para evitar a necessidade de correspondência entre os códigos usados.
D) criar uma planilha paralela com a lista de equipamentos para os usuários, sem vínculo com os sistemas de origem dos dados.
E) aguardar que o cadastro seja unificado nos sistemas de origem antes de iniciar qualquer mapeamento ou carga de dados no ambiente.

### AUT-000064 — item 7.4 — dificuldade media
*Questão autoral — estilo Cesgranrio (criada pelo projeto; não é questão aplicada pela banca) · status: validada*

Uma empresa mantém: (I) a tabela de ordens de serviço em um banco de dados relacional; (II) eventos de equipamentos gravados em arquivos JSON, cujos campos variam de um evento para outro; (III) fotos de inspeção e laudos em PDF.

Os conjuntos de dados (I), (II) e (III) são classificados, respectivamente, como

A) não estruturados, estruturados e semiestruturados.
B) semiestruturados, não estruturados e estruturados.
C) estruturados, não estruturados e semiestruturados.
D) semiestruturados, estruturados e não estruturados.
E) estruturados, semiestruturados e não estruturados.

### AUT-000065 — item 7.5 — dificuldade dificil
*Questão autoral — estilo Cesgranrio (criada pelo projeto; não é questão aplicada pela banca) · status: validada*

Um cubo OLAP é alimentado pela tabela de fatos abaixo (valores de venda por ano, região e produto).

2025: (Norte, A, 100), (Norte, B, 50), (Sul, A, 80), (Sul, C, 40)
2026: (Norte, A, 120), (Norte, B, 60), (Sul, A, 90), (Sul, B, 70), (Sul, C, 25), (Leste, A, 30), (Leste, C, 20)

Um analista aplica um slice na dimensão Tempo, fixando o ano de 2026, e um dice que restringe os produtos a A e B e as regiões a Norte e Sul.

O total de vendas no subcubo resultante é

A) 415.
B) 370.
C) 340.
D) 365.
E) 570.

### AUT-000066 — item 7.6 — dificuldade media
*Questão autoral — estilo Cesgranrio (criada pelo projeto; não é questão aplicada pela banca) · status: validada*

Uma equipe descreve quatro características do data warehouse de sua empresa:

I – Os dados vindos de vários sistemas são padronizados em um mesmo formato e codificação.
II – Os dados são organizados por temas do negócio, como vendas e manutenção, e não por aplicação.
III – O repositório mantém série histórica, e cada registro está associado a um período.
IV – Após a carga, os dados não são alterados pelo uso rotineiro; novas cargas apenas acrescentam registros.

As características I, II, III e IV correspondem, respectivamente, a dados

A) orientados a assunto, integrados, não voláteis e variantes no tempo.
B) integrados, variantes no tempo, orientados a assunto e não voláteis.
C) não voláteis, integrados, variantes no tempo e orientados a assunto.
D) integrados, orientados a assunto, variantes no tempo e não voláteis.
E) variantes no tempo, orientados a assunto, integrados e não voláteis.

### AUT-000067 — item 7.7 — dificuldade facil
*Questão autoral — estilo Cesgranrio (criada pelo projeto; não é questão aplicada pela banca) · status: validada*

Em um data warehouse de manutenção, existe uma tabela fato com uma linha por ordem de serviço. A linha é inserida quando a ordem é aberta e, depois, atualizada à medida que a ordem avança, com as datas de programação, execução e encerramento, além dos intervalos entre essas etapas.

Segundo a classificação das tabelas fato, trata-se de uma tabela fato do tipo

A) snapshot acumulativo.
B) transacional.
C) snapshot periódico.
D) sem fatos (factless).
E) de dimensão degenerada.

### AUT-000068 — item 7.9 — dificuldade media
*Questão autoral — estilo Cesgranrio (criada pelo projeto; não é questão aplicada pela banca) · status: validada*

Uma planilha contém os dados a seguir, nas colunas A (Região), B (Mês) e C (Valor), nas linhas 2 a 6:

Linha 2: Norte, Jan, 100
Linha 3: Sul, Jan, 80
Linha 4: Norte, Fev, 120
Linha 5: Sul, Fev, 90
Linha 6: Norte, Mar, 60

A fórmula a seguir é digitada em uma célula:

=SOMASES(C2:C6; A2:A6; "Norte"; B2:B6; "<>Mar")

O valor exibido na célula é

A) 280.
B) 390.
C) 220.
D) 450.
E) 170.

### AUT-000069 — item 7.8 — dificuldade media
*Questão autoral — estilo Cesgranrio (criada pelo projeto; não é questão aplicada pela banca) · status: validada*

Ao construir um relatório interativo em uma ferramenta de BI, uma analista precisa calcular a margem percentual, que deve se ajustar aos filtros que o usuário selecionar (por exemplo, por região e período), e, em outro cálculo, classificar cada linha de produto em uma faixa de preço durante a carga do modelo.

O tipo de cálculo adequado a cada situação é, respectivamente,

A) coluna calculada para a margem e medida para a faixa de preço.
B) coluna calculada para ambos, pois só ela é avaliada linha a linha.
C) medida para ambos, pois só ela admite o uso de filtros interativos.
D) parâmetro para a margem e filtro de página para a faixa de preço.
E) medida para a margem e coluna calculada para a faixa de preço.

### AUT-000070 — item 7.10 — dificuldade dificil
*Questão autoral — estilo Cesgranrio (criada pelo projeto; não é questão aplicada pela banca) · status: validada*

Em um dashboard de logística, uma analista observa que, em dezembro, as vendas de capas de chuva e o número de entregas atrasadas aumentaram ao mesmo tempo. Um diretor propõe suspender as vendas de capas de chuva, com o argumento de que elas "causam" os atrasos.

Para que o BI apoie a decisão de forma adequada, a conclusão mais apropriada da analista é:

A) Aceitar a proposta, pois a coincidência temporal entre as duas séries comprova a relação de causa e efeito entre elas.
B) Informar que a correlação não prova causalidade e investigar fatores como a sazonalidade e as chuvas antes de decidir.
C) Rejeitar a proposta sem análise, pois dashboards não podem ser usados para investigar causas de fenômenos observados.
D) Substituir a análise por uma pesquisa de opinião com os clientes, pois dados de BI não sustentam decisões de negócio.
E) Aguardar os resultados de janeiro para confirmar a tendência, evitando qualquer análise adicional de fatores externos.

### AUT-000110 — item 7.11 — dificuldade media
*Questão autoral — estilo Cesgranrio (criada pelo projeto; não é questão aplicada pela banca) · status: em_revisao*

A diretoria de uma distribuidora passou a receber painéis de BI com vendas, margens e estoques integrados de vários sistemas.

Sobre o papel do BI nesse contexto, constata-se que ele

A) oferece informação integrada, confiável e oportuna que apoia a decisão, sem substituir o julgamento do decisor.
B) garante a decisão ótima, dispensando a análise crítica e o conhecimento do negócio por parte dos gestores.
C) elimina a necessidade de qualidade de dados, pois corrige automaticamente todas as inconsistências das fontes de origem.
D) atende apenas à decisão operacional, pois os painéis não servem à decisão tática ou estratégica.
E) substitui o data warehouse, que se torna dispensável quando os painéis são bem construídos.

### AUT-000111 — item 7.5 — dificuldade media
*Questão autoral — estilo Cesgranrio (criada pelo projeto; não é questão aplicada pela banca) · status: em_revisao*

Um analista trabalha com um cubo OLAP de vendas, com as dimensões Produto, Região e Tempo. Ele realiza as seguintes ações:

I – passa a visualizar as vendas por ano, e não mais por mês;
II – fixa a região em "Sul" e passa a ver apenas as dimensões Produto e Tempo dessa região;
III – troca as linhas por colunas na tabela exibida, sem alterar os dados.

As operações OLAP correspondentes às ações I, II e III são, respectivamente,

A) drill-down, dice e pivot.
B) roll-up, slice e pivot.
C) roll-up, dice e drill-through.
D) drill-down, slice e pivot.
E) roll-up, pivot e slice.

### OFI-000032 — item 7.6 — dificuldade media
*Oficial — Fundação Cesgranrio, Transpetro PSP/Terra 002/2023 (Edital nº 2), Análise de Sistemas — Processos de Negócios, 2023, Prova 6, questão 56 (gabarito: oficial (PDF de gabarito da Cesgranrio, alterado em 9/01/2024), conferido na T13) · status: em_revisao*

Nos tempos atuais, o uso massivo de sistemas de informação em praticamente todas as áreas tem como consequência a geração de muitos dados.

Nesse contexto de tecnologia da informação, um Data Warehouse é uma estrutura de armazenamento de dados fundamental que possui a característica de

A) armazenar somente dados brutos não processados, sem permitir a criação de relatórios ou análises.
B) consolidar dados de diversas fontes em apenas um local, permitindo análises multidimensionais.
C) focar exclusivamente dados operacionais de curto prazo, excluindo dados históricos.
D) ser otimizado apenas para transações de alta velocidade, sem suportar consultas complexas.
E) trabalhar apenas com dados estruturados, não sendo capaz de lidar com dados semi-estruturados ou não estruturados.

### OFI-000055 — item 7.11 — dificuldade media
*Oficial — Fundação Cesgranrio, Transpetro PSP RH 2018.1 (Edital nº 1), Analista de Sistemas Júnior — Processos de Negócio, 2018, Prova 15, questão 54 (gabarito: oficial (PDF de gabarito da Cesgranrio, alterado em 09/05/2018), conferido na T13) · status: em_revisao*

Determinada empresa de transporte possui uma frota de caminhões que movimenta diversos tipos de carga, tais como eletrônicos, brinquedos e eletrodomésticos. Um Sistema de Informações proprietário calcula detalhes financeiros e técnicos das viagens dessa frota. Os cálculos financeiros incluem, entre outros, custos de combustível, mão de obra e valor de frete. Os detalhes técnicos são inúmeros, como tipo e volume da carga, capacidade, consumo e velocidade dos caminhões, restrições dos trajetos, distâncias aos destinos e outros.
O sistema responde a perguntas, tais como:
i) dada uma especificação de carga, uma escala de entrega e preços de frete, quais caminhões e motoristas devem ser alocados para maximizar o lucro?
ii) qual conjunto (velocidade, trajeto) deve ser utilizado por determinado caminhão para otimizar o lucro e garantir as datas de entrega?

Com base na descrição acima, o tipo de Sistema de Informação utilizado por essa empresa é o

A) CRM
B) SIG
C) Sistema Especialista
D) Sistema de Suporte à Decisão
E) Sistema de Processamento de Transações

### OFI-000106 — item 7.7 — dificuldade facil
*Oficial — Fundação Cesgranrio, Petrobras PSP RH 2017.2 (prova de 18/03/2018), Analista de Sistemas Júnior — Processos de Negócio, 2018, Prova 3, questão 44 (gabarito: de espelho (PCI), fornecido pelo usuário; preliminar/definitivo não indicado; anulações não verificadas; não validado contra a banca) · status: em_revisao*

Ao construir um modelo de dados para um data warehouse de sua empresa, um desenvolvedor viu-se às voltas com três tabelas relacionais: venda, cliente e vendedor.
Ao fazer uma transformação para o modelo estrela, ele deve organizar:

A) venda, como tabela fato; cliente e vendedor, como tabelas dimensão
B) cliente e vendedor, como tabelas fato; venda, como tabela dimensão
C) cliente, como tabela fato; venda e vendedor, como tabelas dimensão
D) vendedor e venda, como tabelas fato; cliente, como tabela dimensão
E) vendedor, como tabela fato; cliente e venda, como tabelas dimensão

### OFI-000119 — item 7.7 — dificuldade media
*Oficial — Fundação Cesgranrio, Petrobras PSP-RH-1/2006 (aplicação em 07/05/2006), Analista de Sistemas Pleno — Processos, 2006, Caderno de Analista de Sistemas Pleno (questões 21 a 60), questão 45 (gabarito: de espelho (Estude Grátis); recursos não verificados; não validado contra a banca) · status: em_revisao*

Bases de dados de sistemas de informações gerenciais são projetadas, muitas vezes, em um esquema denominado estrela que:

A) é uma arquitetura física que permite definir somente estruturas unidimensionais de dados.
B) é composta por uma tabela central, denominada de dimensão, e várias tabelas periféricas a ela relacionadas, denominadas fatos.
C) apresenta tabelas periféricas que se encontram desnormalizadas.
D) faz com que a expansão e a evolução da base de dados necessite de grande atividade de manutenção.
E) é um esquema onde o número de junções realizadas é relativamente maior que o realizado em bases de dados relacionais convencionais.

### OFI-000120 — item 7.7 — dificuldade media
*Oficial — Fundação Cesgranrio, Petrobras PSP-RH-1/2006 (aplicação em 07/05/2006), Analista de Sistemas Pleno — Processos, 2006, Caderno de Analista de Sistemas Pleno (questões 21 a 60), questão 46 (gabarito: de espelho (Estude Grátis); recursos não verificados; não validado contra a banca) · status: em_revisao*

Sobre o processo de modelagem multidimensional, assinale a afirmação INCORRETA.

A) Busca-se obter um modelo que possibilite a realização, pelos usuários, de grandes quantidades de operações de atualização dos dados.
B) A definição dos fatos em um modelo pode ser obtida através da identificação da resposta à pergunta "o que está sendo medido?".
C) A identificação de padrões de acesso pode levar a realização de pré-sumarizações (pré-agregação) dos dados, de forma a acelerar à realização de consultas.
D) As dimensões, usualmente, estão relacionadas com as respostas a perguntas como: "quando?", "o que?", "onde?" e "quem?".
E) O modelo multidimensional é orientado a assuntos.
