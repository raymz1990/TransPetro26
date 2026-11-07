# Questões oficiais — m07-analise-dados — gabaritos comentados (T04 — Transpetro 2023 (Prova 6) e 2018 (Prova 15))

## OFI-000032 — Data warehouse: característica

*Questão oficial — Fundação Cesgranrio, Transpetro PSP/Terra 002/2023, Prova 6, questão 56.*

**Gabarito: B**

O **data warehouse** é **orientado a assunto, integrado, histórico e não volátil**, consolidando dados de várias fontes para análise (OLAP), inclusive multidimensional.

- **A)** Incorreta. Dados brutos sem processamento descrevem um data lake; o DW guarda dados tratados e permite análises.
- **B)** Correta. Consolida dados de várias fontes e suporta análises multidimensionais.
- **C)** Incorreta. O DW é histórico por definição.
- **D)** Incorreta. Alta velocidade transacional é característica de OLTP; o DW é otimizado para consultas analíticas.
- **E)** Incorreta. A afirmação é absoluta ("apenas"); a alternativa B é a que descreve a característica definidora.

**Ponto de atenção:** DW: orientado a assunto, integrado, histórico, não volátil (Inmon). Compare com OLTP e data lake.

**Revisão rápida:** DW = integração + histórico + análise.

**Fonte:** Fundação Cesgranrio, Transpetro PSP/Terra 002/2023 (Edital nº 2), Análise de Sistemas — Processos de Negócios (2023), prova Prova 6, questão 56; gabarito: de terceiros (QConcursos), alterado em 9/01/2024; não validado contra a banca.

## OFI-000055 — Sistema de Suporte à Decisão (tipo de sistema de informação)

*Questão oficial — Fundação Cesgranrio, Transpetro PSP RH 2018.1, Prova 15, questão 54.*

**Gabarito: D**

O **Sistema de Suporte à Decisão (SSD/DSS)** usa **modelos e dados** para apoiar decisões semiestruturadas, com análise e **otimização** ("quais caminhões alocar para maximizar o lucro?").

- **A)** Incorreta. CRM gerencia o relacionamento com clientes.
- **B)** Incorreta. SIG produz relatórios gerenciais de rotina, resumindo dados, sem modelagem de otimização.
- **C)** Incorreta. Sistemas especialistas reproduzem o raciocínio de especialistas com base de regras.
- **D)** Correta. Modelagem e otimização para apoiar decisões: SSD.
- **E)** Incorreta. Processamento de transações registra eventos operacionais (vendas, pagamentos).

**Ponto de atenção:** Aderência parcial (a classificação de SIs não é item literal do edital; relaciona-se a 7.11, BI como suporte à decisão). Palavras-chave: **maximizar/otimizar**, **modelos**, **decisões não rotineiras**.

**Revisão rápida:** SSD = modelos e otimização para decisões semiestruturadas.

**Fonte:** Fundação Cesgranrio, Transpetro PSP RH 2018.1 (Edital nº 1), Analista de Sistemas Júnior — Processos de Negócio (2018), prova Prova 15, questão 54; gabarito: de terceiros (Ética), alterado em 09/05/2018; não validado contra a banca.

## OFI-000106 — Modelo estrela: tabela fato e dimensões

*Questão oficial — Fundação Cesgranrio, Petrobras PSP RH 2017.2, Prova 3, questão 44.*

**Gabarito: A**

A **tabela fato** registra o **evento de negócio mensurável** (a venda, com suas medidas: valor, quantidade); as **dimensões** descrevem o contexto (**quem** comprou, **quem** vendeu, quando, onde). Venda = fato; cliente e vendedor = dimensões.

- **A)** Correta. Venda é o evento medido (fato); cliente e vendedor descrevem o contexto (dimensões).
- **B)** Incorreta. Inverte: cliente e vendedor são contexto, e não eventos medidos.
- **C)** Incorreta. Cliente não é evento; a venda também não é dimensão.
- **D)** Incorreta. Vendedor não é evento mensurável.
- **E)** Incorreta. Vendedor não é fato, e a venda é o evento central.

**Ponto de atenção:** Pergunta-guia: **"o que está sendo medido?"** (fato). As dimensões respondem a **quem, o quê, onde, quando**.

**Revisão rápida:** Fato = evento medido; dimensão = contexto.

**Fonte:** Fundação Cesgranrio, Petrobras PSP RH 2017.2 (prova de 18/03/2018), Analista de Sistemas Júnior — Processos de Negócio (2018), prova Prova 3, questão 44; gabarito: de espelho (PCI), fornecido pelo usuário; preliminar/definitivo não indicado; anulações não verificadas; não validado contra a banca.

## OFI-000119 — Esquema estrela: tabelas periféricas desnormalizadas

*Questão oficial — Fundação Cesgranrio, Petrobras PSP-RH-1/2006, Caderno de Analista de Sistemas Pleno, questão 45.*

**Gabarito: C**

No **esquema estrela**, uma **tabela fato** central (medidas e chaves) liga-se a **tabelas dimensão** periféricas, em geral **desnormalizadas** (atributos hierárquicos na mesma tabela), o que reduz o número de junções. No **floco de neve**, as dimensões são normalizadas.

- **A)** Incorreta. O esquema é lógico (modelo dimensional) e multidimensional.
- **B)** Incorreta. Inverte: a tabela central é o fato, e as periféricas são dimensões.
- **C)** Correta. As dimensões desnormalizadas são característica do estrela.
- **D)** Incorreta. O estrela é simples de evoluir (novas dimensões e medidas são acrescentadas com facilidade).
- **E)** Incorreta. O estrela exige **menos** junções que um modelo normalizado, em geral.

**Ponto de atenção:** Estrela: dimensões **desnormalizadas**, poucas junções. Floco de neve: dimensões **normalizadas**, mais junções, menos redundância.

**Revisão rápida:** Estrela: fato central + dimensões desnormalizadas.

**Fonte:** Fundação Cesgranrio, Petrobras PSP-RH-1/2006 (aplicação em 07/05/2006), Analista de Sistemas Pleno — Processos (2006), prova Caderno de Analista de Sistemas Pleno (questões 21 a 60), questão 45; gabarito: de espelho (Estude Grátis); recursos não verificados; não validado contra a banca.

## OFI-000120 — Modelagem multidimensional (afirmação INCORRETA)

*Questão oficial — Fundação Cesgranrio, Petrobras PSP-RH-1/2006, Caderno de Analista de Sistemas Pleno, questão 46.*

**Gabarito: A**

O modelo multidimensional serve a **consultas analíticas** (leitura, agregação), e não a **grandes volumes de atualizações** de usuários, que é característica de sistemas **transacionais (OLTP)**. Os demais itens descrevem corretamente a modelagem.

- **A)** Correta. Incorreta, pois descreve OLTP; o DW é carregado em lote e consultado.
- **B)** Incorreta. Fatos respondem "o que está sendo medido?".
- **C)** Incorreta. Pré-agregações aceleram consultas frequentes.
- **D)** Incorreta. Dimensões respondem a quando, o quê, onde e quem.
- **E)** Incorreta. O DW (e o modelo multidimensional) é orientado a assunto.

**Ponto de atenção:** OLTP: muitas **escritas** curtas; OLAP/DW: **leituras** analíticas, cargas em lote.

**Revisão rápida:** Multidimensional: consulta analítica, não atualização transacional.

**Fonte:** Fundação Cesgranrio, Petrobras PSP-RH-1/2006 (aplicação em 07/05/2006), Analista de Sistemas Pleno — Processos (2006), prova Caderno de Analista de Sistemas Pleno (questões 21 a 60), questão 46; gabarito: de espelho (Estude Grátis); recursos não verificados; não validado contra a banca.
