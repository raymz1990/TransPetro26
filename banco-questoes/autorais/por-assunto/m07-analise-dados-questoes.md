# Banco de questões — Módulo 7: Análise de Dados e Informações (lote piloto, questões)

**Tipo:** questões **autorais** — **Questão autoral — estilo Cesgranrio.** Não são questões oficiais nem foram aplicadas pela Fundação Cesgranrio.
**Status:** validada 10. Gabaritos e comentários em `m07-analise-dados-gabaritos-comentados.md`; dados estruturados em `m07-analise-dados.json`.
**Data:** 2026-10-31 · **Itens do edital:** 7.1, 7.2, 7.3, 7.4, 7.5, 7.6, 7.7, 7.8, 7.9, 7.10.

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

---

