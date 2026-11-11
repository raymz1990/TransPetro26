# Gabarito comentado — Módulo M07: Análise de Dados e Informações

## Identificação
- Concurso: Processo Seletivo Público TRANSPETRO 2026.4 (Edital nº 04/2026)
- Ênfase: 5 — Análise de Sistemas: Processos de Negócios
- Banca: Fundação Cesgranrio
- Módulo: M07 — Análise de Dados e Informações
- Total: 17 questões; status `validada` ou `em_revisao` (indicado em cada questão)
- Gerado em 2026-11-11 por `tools/build_notebooklm.py` a partir de `banco-questoes/`


### AUT-000061 — Gabarito: B
*Questão autoral — estilo Cesgranrio (criada pelo projeto; não é questão aplicada pela banca) · status: validada*

**Dado** é o registro bruto, sem contexto (II: "38,2"). **Informação** é o dado contextualizado e com significado (III: equipamento, valor, unidade e hora). **Conhecimento** é a informação interpretada e integrada à experiência, que permite compreender e agir (I: regra de que acima de 35 °C a bomba tende a falhar). **Inteligência** é o conhecimento aplicado para antecipar e decidir (IV: decisão estratégica orientada por padrões). Assim, I = conhecimento, II = dado, III = informação, IV = inteligência.

- A) Incorreta. Está na ordem hierárquica usual, mas as declarações foram apresentadas fora dessa ordem: I é conhecimento (regra interpretada), e não dado.
- B) Correta. I: conhecimento; II: dado; III: informação; IV: inteligência.
- C) Incorreta. I não é informação (é uma regra interpretada) e III não é dado (tem contexto).
- D) Incorreta. II é o dado bruto, e III é a informação; a alternativa os troca.
- E) Incorreta. I é conhecimento (e não dado), e III é informação (e não conhecimento).

### AUT-000062 — Gabarito: D
*Questão autoral — estilo Cesgranrio (criada pelo projeto; não é questão aplicada pela banca) · status: validada*

Os tipos de análise usualmente citados são **descritiva** (o que aconteceu?), **diagnóstica** (por que aconteceu?), **preditiva** (o que pode acontecer?) e **prescritiva** (o que fazer?). Comparar por dimensões e detalhar (*drill-down*) até localizar a causa da queda é **análise diagnóstica**.

- A) Incorreta. A descritiva resume o ocorrido (a queda de 15%); o gerente busca explicá-la.
- B) Incorreta. A preditiva projeta o futuro com modelos; o enunciado trata de explicar um fato passado.
- C) Incorreta. A prescritiva recomenda ações a partir de otimização ou simulação; a decisão sobre o que fazer ainda não foi tomada.
- D) Correta. Entender por que a queda ocorreu, por comparação e detalhamento: análise diagnóstica.
- E) Incorreta. O enunciado trata de dados de vendas organizados por dimensões, e não de mineração de textos e imagens.

### AUT-000063 — Gabarito: A
*Questão autoral — estilo Cesgranrio (criada pelo projeto; não é questão aplicada pela banca) · status: validada*

No **mapeamento de fontes**, definem-se a **fonte de verdade** (sistema de registro) para cada dado, resolvem-se **duplicidades** com **tabelas de correspondência** (*de-para*) e **regras de transformação** documentadas, registrando metadados e linhagem. Isso garante uma única versão consistente do dado no ambiente analítico.

- A) Correta. Fonte de verdade, correspondência de códigos e documentação das regras.
- B) Incorreta. Carregar sem tratamento perpetua a inconsistência e deixa cada analista decidir; os números dos relatórios divergirão.
- C) Incorreta. Descartar um sistema e seu histórico perde informação; o mapeamento deve integrar, e não eliminar dados.
- D) Incorreta. Uma planilha paralela cria nova fonte desvinculada, o oposto de uma fonte de verdade governada.
- E) Incorreta. O mapeamento e o tratamento de divergências fazem parte do projeto de BI; aguardar a unificação indefinidamente paralisa a entrega.

### AUT-000064 — Gabarito: E
*Questão autoral — estilo Cesgranrio (criada pelo projeto; não é questão aplicada pela banca) · status: validada*

Dados **estruturados** têm formato padronizado ou **esquema predefinido** (tabela relacional: I). Dados **semiestruturados** não seguem um modelo relacional ou tabular rígido, mas têm marcadores ou etiquetas que organizam os elementos (JSON com campos variáveis: II). Dados **não estruturados** não têm modelo de dados predefinido (fotos e documentos em PDF: III).

- A) Incorreta. Inverte tudo: a tabela relacional é estruturada; o JSON é semiestruturado; as fotos e os PDFs são não estruturados.
- B) Incorreta. A tabela relacional não é semiestruturada, e os arquivos JSON não são não estruturados.
- C) Incorreta. Os eventos em JSON são semiestruturados (e não não estruturados), e as fotos e PDFs são não estruturados.
- D) Incorreta. A tabela relacional é estruturada (esquema predefinido), e o JSON é semiestruturado.
- E) Correta. I: estruturado; II: semiestruturado; III: não estruturado.

### AUT-000065 — Gabarito: C
*Questão autoral — estilo Cesgranrio (criada pelo projeto; não é questão aplicada pela banca) · status: validada*

O **slice** fixa **uma** dimensão em um valor (ano = 2026), reduzindo a dimensionalidade; o **dice** restringe **mais de uma** dimensão a subconjuntos (produtos A e B; regiões Norte e Sul), gerando um subcubo. As células de 2026 que atendem às duas restrições são: (Norte, A, 120), (Norte, B, 60), (Sul, A, 90) e (Sul, B, 70). Total: 120 + 60 + 90 + 70 = **340**.

- A) Incorreta. 415 é o total de 2026 sem o dice (todas as células do ano).
- B) Incorreta. 370 é o total de 2026 apenas com a restrição de produtos A e B, incluindo a região Leste.
- C) Correta. Slice (2026) e dice (A e B; Norte e Sul): 340.
- D) Incorreta. 365 é o total de 2026 apenas com a restrição de regiões (Norte e Sul), incluindo o produto C.
- E) Incorreta. 570 seria o total com o dice, mas sem o slice, somando os dois anos.

### AUT-000066 — Gabarito: D
*Questão autoral — estilo Cesgranrio (criada pelo projeto; não é questão aplicada pela banca) · status: validada*

As quatro características clássicas do data warehouse são: **integrado** (padroniza nomes, formatos e codificações de várias fontes: I), **orientado a assunto** (organizado por temas do negócio: II), **variante no tempo** (mantém histórico associado a períodos: III) e **não volátil** (dados carregados não são alterados pelo uso rotineiro: IV).

- A) Incorreta. Troca I e II (padronização é integração) e III e IV (histórico é variação no tempo; imutabilidade é não volatilidade).
- B) Incorreta. A descrição II é de dados orientados a assunto, e a III, de dados variantes no tempo; a alternativa as troca.
- C) Incorreta. A descrição I é de dados integrados, e não de não voláteis; a descrição IV é de não volatilidade.
- D) Correta. I: integrados; II: orientados a assunto; III: variantes no tempo; IV: não voláteis.
- E) Incorreta. A descrição I é de integração (e não de variação no tempo), e a III é de variação no tempo.

### AUT-000067 — Gabarito: A
*Questão autoral — estilo Cesgranrio (criada pelo projeto; não é questão aplicada pela banca) · status: validada*

Na tabela fato de **snapshot acumulativo**, há **uma linha por ciclo de processo** (aqui, uma ordem de serviço), **atualizada** conforme ele avança pelas etapas, registrando datas e intervalos entre os marcos. A **transacional** tem uma linha por evento; o **snapshot periódico**, uma linha por entidade por período; a **sem fatos** registra ocorrências sem medida numérica.

- A) Correta. Uma linha por ciclo, atualizada nas etapas: snapshot acumulativo.
- B) Incorreta. A transacional tem uma linha por evento, sem atualização conforme o processo avança.
- C) Incorreta. O snapshot periódico tem uma linha por entidade e por período (por exemplo, saldo diário), e não por ciclo de processo.
- D) Incorreta. A tabela sem fatos registra ocorrências ou cobertura, sem medidas; aqui há datas e intervalos como medidas.
- E) Incorreta. Dimensão degenerada é um identificador mantido na tabela fato sem tabela de dimensão, e não um tipo de tabela fato.

### AUT-000068 — Gabarito: C
*Questão autoral — estilo Cesgranrio (criada pelo projeto; não é questão aplicada pela banca) · status: validada*

A função `SOMASES` soma os valores de C que atendem a **todos** os critérios simultaneamente (operação E): região = "Norte" **e** mês diferente de "Mar" (`"<>Mar"`). As linhas que atendem são 2 (Norte, Jan, 100) e 4 (Norte, Fev, 120). Soma: 100 + 120 = **220**.

- A) Incorreta. 280 é a soma de todas as linhas da região Norte (100 + 120 + 60), desconsiderando o critério do mês.
- B) Incorreta. 390 é a soma de todas as linhas com mês diferente de março (100 + 80 + 120 + 90), desconsiderando o critério da região.
- C) Correta. Região Norte e mês diferente de março: 100 + 120 = 220.
- D) Incorreta. 450 é a soma de toda a coluna C, sem nenhum critério.
- E) Incorreta. 170 é a soma da região Sul (80 + 90), que o critério não seleciona.

### AUT-000069 — Gabarito: E
*Questão autoral — estilo Cesgranrio (criada pelo projeto; não é questão aplicada pela banca) · status: validada*

Uma **medida** é um cálculo **dinâmico**, avaliado no **contexto dos filtros** e das seleções do usuário (por exemplo, uma margem percentual agregada). Uma **coluna calculada** é calculada **linha a linha** durante a carga ou o modelo (por exemplo, a faixa de preço de cada produto). Assim: margem = medida; faixa de preço = coluna calculada.

- A) Incorreta. Inverte os conceitos: a margem que reage a filtros é uma medida, e a faixa por linha é coluna calculada.
- B) Incorreta. A coluna calculada não se ajusta dinamicamente aos filtros do usuário; para a margem agregada, é necessária uma medida.
- C) Incorreta. A medida avalia agregações no contexto de filtros, mas classificar cada linha na carga é papel de uma coluna calculada.
- D) Incorreta. Parâmetro é um valor ajustável pelo usuário (por exemplo, uma meta), e filtro de página restringe dados; nenhum dos dois define os cálculos pedidos.
- E) Correta. Margem sensível aos filtros: medida; classificação por linha na carga: coluna calculada.

### AUT-000070 — Gabarito: B
*Questão autoral — estilo Cesgranrio (criada pelo projeto; não é questão aplicada pela banca) · status: validada*

Duas séries que variam juntas têm **correlação**, o que **não implica causalidade**: pode haver um **fator comum** (sazonalidade, chuvas e maior volume de pedidos). Um bom **insight** é uma descoberta **relevante e acionável**, obtida com a verificação de hipóteses e a validação da qualidade e do contexto; o BI **apoia** a decisão, mas não a substitui, e exige cuidado com vieses (como correlação × causalidade).

- A) Incorreta. A coincidência temporal não comprova causa e efeito; aceitar a conclusão seria cair na falácia da correlação como causalidade.
- B) Correta. Reconhece o limite da correlação e propõe investigar fatores comuns antes da decisão.
- C) Incorreta. Dashboards e *drill-down* servem justamente à investigação; rejeitar sem análise ignora o papel do BI na geração de insights.
- D) Incorreta. O BI sustenta decisões baseadas em dados, com os devidos cuidados; trocar a análise por uma pesquisa não resolve a dúvida causal.
- E) Incorreta. Esperar sem analisar fatores externos adia a decisão sem testar hipóteses; um bom analista investiga os fatores plausíveis agora.

### AUT-000110 — Gabarito: A
*Questão autoral — estilo Cesgranrio (criada pelo projeto; não é questão aplicada pela banca) · status: em_revisao*

O BI **transforma dados em informação para apoiar decisões** nos níveis estratégico, tático e operacional, entregando visão integrada, histórica e tempestiva. Ele **apoia**, e não **substitui** o decisor, e depende da **qualidade dos dados** e do alinhamento aos indicadores do negócio.

- A) Correta. Descreve o papel do BI: apoiar a decisão com informação integrada e confiável.
- B) Incorreta. Nenhuma ferramenta garante decisão ótima; o decisor continua responsável.
- C) Incorreta. BI depende de qualidade de dados; "lixo entra, lixo sai".
- D) Incorreta. BI atende aos três níveis decisórios.
- E) Incorreta. O DW é a base integrada que costuma alimentar os painéis; não é dispensável.

### AUT-000111 — Gabarito: B
*Questão autoral — estilo Cesgranrio (criada pelo projeto; não é questão aplicada pela banca) · status: em_revisao*

**Roll-up** agrega, subindo na hierarquia (mês → ano). **Slice** fixa **um** valor de uma dimensão, resultando em uma fatia do cubo (Região = Sul). **Pivot (rotação)** muda a orientação das dimensões na visualização. **Drill-down** faz o caminho contrário do roll-up; **dice** seleciona subcubo com valores em **várias** dimensões; **drill-through** acessa os dados de detalhe da fonte.

- A) Incorreta. Drill-down detalha (ano → mês), o inverso do descrito em I; dice usa mais de uma dimensão.
- B) Correta. I é roll-up, II é slice e III é pivot.
- C) Incorreta. Dice exige restrição em duas ou mais dimensões; drill-through acessa a fonte, não troca eixos.
- D) Incorreta. Drill-down detalha, e I descreve uma agregação.
- E) Incorreta. Inverte II e III: fixar a região é slice, e girar eixos é pivot.

### OFI-000032 — Gabarito: B
*Oficial — Fundação Cesgranrio, Transpetro PSP/Terra 002/2023 (Edital nº 2), Análise de Sistemas — Processos de Negócios, 2023, Prova 6, questão 56 (gabarito: oficial (PDF de gabarito da Cesgranrio, alterado em 9/01/2024), conferido na T13) · status: em_revisao*

O **data warehouse** é **orientado a assunto, integrado, histórico e não volátil**, consolidando dados de várias fontes para análise (OLAP), inclusive multidimensional.

- A) Incorreta. Dados brutos sem processamento descrevem um data lake; o DW guarda dados tratados e permite análises.
- B) Correta. Consolida dados de várias fontes e suporta análises multidimensionais.
- C) Incorreta. O DW é histórico por definição.
- D) Incorreta. Alta velocidade transacional é característica de OLTP; o DW é otimizado para consultas analíticas.
- E) Incorreta. A afirmação é absoluta ("apenas"); a alternativa B é a que descreve a característica definidora.

### OFI-000055 — Gabarito: D
*Oficial — Fundação Cesgranrio, Transpetro PSP RH 2018.1 (Edital nº 1), Analista de Sistemas Júnior — Processos de Negócio, 2018, Prova 15, questão 54 (gabarito: oficial (PDF de gabarito da Cesgranrio, alterado em 09/05/2018), conferido na T13) · status: em_revisao*

O **Sistema de Suporte à Decisão (SSD/DSS)** usa **modelos e dados** para apoiar decisões semiestruturadas, com análise e **otimização** ("quais caminhões alocar para maximizar o lucro?").

- A) Incorreta. CRM gerencia o relacionamento com clientes.
- B) Incorreta. SIG produz relatórios gerenciais de rotina, resumindo dados, sem modelagem de otimização.
- C) Incorreta. Sistemas especialistas reproduzem o raciocínio de especialistas com base de regras.
- D) Correta. Modelagem e otimização para apoiar decisões: SSD.
- E) Incorreta. Processamento de transações registra eventos operacionais (vendas, pagamentos).

### OFI-000106 — Gabarito: A
*Oficial — Fundação Cesgranrio, Petrobras PSP RH 2017.2 (prova de 18/03/2018), Analista de Sistemas Júnior — Processos de Negócio, 2018, Prova 3, questão 44 (gabarito: de espelho (PCI), fornecido pelo usuário; preliminar/definitivo não indicado; anulações não verificadas; não validado contra a banca) · status: em_revisao*

A **tabela fato** registra o **evento de negócio mensurável** (a venda, com suas medidas: valor, quantidade); as **dimensões** descrevem o contexto (**quem** comprou, **quem** vendeu, quando, onde). Venda = fato; cliente e vendedor = dimensões.

- A) Correta. Venda é o evento medido (fato); cliente e vendedor descrevem o contexto (dimensões).
- B) Incorreta. Inverte: cliente e vendedor são contexto, e não eventos medidos.
- C) Incorreta. Cliente não é evento; a venda também não é dimensão.
- D) Incorreta. Vendedor não é evento mensurável.
- E) Incorreta. Vendedor não é fato, e a venda é o evento central.

### OFI-000119 — Gabarito: C
*Oficial — Fundação Cesgranrio, Petrobras PSP-RH-1/2006 (aplicação em 07/05/2006), Analista de Sistemas Pleno — Processos, 2006, Caderno de Analista de Sistemas Pleno (questões 21 a 60), questão 45 (gabarito: de espelho (Estude Grátis); recursos não verificados; não validado contra a banca) · status: em_revisao*

No **esquema estrela**, uma **tabela fato** central (medidas e chaves) liga-se a **tabelas dimensão** periféricas, em geral **desnormalizadas** (atributos hierárquicos na mesma tabela), o que reduz o número de junções. No **floco de neve**, as dimensões são normalizadas.

- A) Incorreta. O esquema é lógico (modelo dimensional) e multidimensional.
- B) Incorreta. Inverte: a tabela central é o fato, e as periféricas são dimensões.
- C) Correta. As dimensões desnormalizadas são característica do estrela.
- D) Incorreta. O estrela é simples de evoluir (novas dimensões e medidas são acrescentadas com facilidade).
- E) Incorreta. O estrela exige **menos** junções que um modelo normalizado, em geral.

### OFI-000120 — Gabarito: A
*Oficial — Fundação Cesgranrio, Petrobras PSP-RH-1/2006 (aplicação em 07/05/2006), Analista de Sistemas Pleno — Processos, 2006, Caderno de Analista de Sistemas Pleno (questões 21 a 60), questão 46 (gabarito: de espelho (Estude Grátis); recursos não verificados; não validado contra a banca) · status: em_revisao*

O modelo multidimensional serve a **consultas analíticas** (leitura, agregação), e não a **grandes volumes de atualizações** de usuários, que é característica de sistemas **transacionais (OLTP)**. Os demais itens descrevem corretamente a modelagem.

- A) Correta. Incorreta, pois descreve OLTP; o DW é carregado em lote e consultado.
- B) Incorreta. Fatos respondem "o que está sendo medido?".
- C) Incorreta. Pré-agregações aceleram consultas frequentes.
- D) Incorreta. Dimensões respondem a quando, o quê, onde e quem.
- E) Incorreta. O DW (e o modelo multidimensional) é orientado a assunto.
