# Roteiro de podcast — M07: Análise de Dados e Informações

## Identificação
- Concurso: Processo Seletivo Público TRANSPETRO 2026.4 (Edital nº 04/2026)
- Ênfase: 5 — Análise de Sistemas: Processos de Negócios
- Banca: Fundação Cesgranrio
- Módulo: M07 — Análise de Dados e Informações
- Formato: revisão oral explicativa (duas vozes ou narração única)
- Fonte de referência: `notebooklm/fontes/M07_Analise_Dados_Completo.md` e `notebooklm/resumos/M07_Analise_Dados_Resumo.md`

## Como usar
Adicione ao NotebookLM a fonte completa do módulo e este roteiro. No recurso de áudio, use este arquivo como pauta. Ele é um guia de revisão e **não substitui** o material completo, que prevalece em caso de dúvida. Não contém estatística de incidência em prova nem questões oficiais; as perguntas de fixação são autorais do projeto, sem vínculo com a Cesgranrio.

## 1. Apresentação
Hoje revisamos o módulo M07, Análise de Dados e Informações, da Ênfase 5 da Transpetro 2026.4, banca Fundação Cesgranrio. A ideia é percorrer os conceitos em ordem, comparar o que costuma ser confundido, marcar pontos de atenção e terminar com perguntas de fixação.

## 2. Contextualização no edital
Dado, informação e conhecimento; BI; fontes de dados; estruturados e não estruturados; OLAP e DW; modelagem multidimensional; dashboards e planilhas; insights e decisão.

## 3. Explicação dos conceitos
### 3.1 Dado, informação, conhecimento e inteligência
Dado é bruto; informação tem contexto; conhecimento é interpretado e aplicável; inteligência apoia decisão e antecipação (DIKW, Ackoff). Conhecimento pode ser tácito ou explícito.

### 3.2 Business Intelligence
BI reúne processos e tecnologias que transformam dados em apoio à decisão. Arquitetura: fontes, ETL, DW, OLAP ou mineração, relatórios e dashboards. Tipos de análise: descritiva, diagnóstica, preditiva e prescritiva. Autosserviço exige governança.

### 3.3 Fontes e tipos de dados
Mapear fontes: identificar, inventariar, perfilar, definir fonte de verdade, mapear origem-destino e documentar metadados e linhagem. Estruturado tem esquema fixo; semiestruturado usa etiquetas (JSON, XML); não estruturado não tem modelo (texto, mídia).

### 3.4 OLAP e Data Warehouse
DW é orientado a assunto, integrado, histórico e não volátil; tem staging, DW, data marts e metadados. OLAP: análise multidimensional em cubo com roll-up, drill-down, slice e dice (pivot é citado no material, mas não foi confirmado em fonte secundária); MOLAP, ROLAP e HOLAP. Modelagem multidimensional: fatos, dimensões e hierarquias; otimização por agregação, índices, particionamento, colunar e paralelismo, sempre com compromissos.

### 3.5 Relatórios, planilhas e insights
Em BI: conectar, preparar, modelar medidas, visualizar, publicar e atualizar, com segurança por linha. Planilhas: limpeza, fórmulas, tabela dinâmica, formatação condicional e validação, com riscos de governança. Insight é descoberta relevante e acionável; cuidado com vieses; BI apoia decisões operacionais, táticas e estratégicas.

## 4. Comparações para fixar
- Dado × informação × conhecimento × inteligência.
- Estruturado × semiestruturado × não estruturado.
- MOLAP × ROLAP × HOLAP.
- Roll-up × drill-down; slice × dice.
- Análise descritiva × diagnóstica × preditiva × prescritiva.

## 5. Armadilhas conceituais (hipóteses de atenção)
São pontos em que a confusão é plausível, não afirmações sobre frequência na prova.
- Confundir slice (fixa um valor de uma dimensão) com dice (seleciona valores em várias dimensões, gerando subcubo). Pivot e drill-up não foram confirmados em fonte como operações; veja a ressalva no documento completo.
- Dizer que DW é volátil.
- Tratar JSON como não estruturado em vez de semiestruturado.
- Esquecer que BI não substitui o julgamento humano.

## 6. Recapitulação
Retome em voz alta, na ordem: Dado, informação, conhecimento e inteligência; Business Intelligence; Fontes e tipos de dados; OLAP e Data Warehouse; Relatórios, planilhas e insights. Para cada bloco, cite a definição central e uma diferença conceitual.

## 7. Perguntas de fixação (com respostas)
1. **Quais as quatro características clássicas do DW?** — Orientado a assunto, integrado, histórico e não volátil.
2. **O que faz o drill-down?** — Aumenta o nível de detalhe ao descer na hierarquia da dimensão.
3. **O que é análise prescritiva?** — A que recomenda ações.
4. **Qual a diferença entre conhecimento tácito e explícito?** — Tácito está na experiência das pessoas; explícito está documentado.

## Limites
- Roteiro construído a partir das sínteses do módulo; detalhes, exceções e referências estão no documento completo.
- Qualquer analogia usada na gravação deve ser apresentada como simplificação didática, com seu limite explícito.
- Itens marcados no material como "não verificados" mantêm essa ressalva no documento completo.
