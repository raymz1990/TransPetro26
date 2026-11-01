---
modulo: 06-experiencia-usuario
arquivo: 06-dashboards-e-relatorios
itens_edital:
  - "6.6 Organização e apresentação de dados em relatórios e dashboards"
ids_matriz: ["E5-053"]
escopo: "A — conteúdo expresso no edital."
tipo_conteudo: "teoria"
status: "VALIDADO"
ultima_atualizacao: "2026-10-31"
---

# Organização e Apresentação de Dados em Relatórios e Dashboards

**Módulo:** M06 — Experiência do usuário (UX)
**Texto oficial (Anexo IV):** 6.6 "Organização e apresentação de dados em relatórios e dashboards".
**Escopo:** A. Complementa `05-data-storytelling` (princípios visuais) e se relaciona ao Módulo 7 (análise de dados) e ao Módulo 1 (BI, indicadores).
**Status:** `VALIDADO` (aprovado pelo usuário em 2026-10-31, com ressalvas: interpretação dos itens 6.3, 6.4, 6.7 e 6.11 a confirmar; fontes de memória listadas em `docs/qualidade/relatorio-producao-modulo-06.md`). Definições e autores de memória: **não verificados online**.

**Objetivos de aprendizagem.** (1) Distinguir relatório, dashboard e painel; (2) escolher e organizar indicadores (KPIs); (3) projetar o *layout* de um dashboard; (4) aplicar interatividade e filtros; (5) garantir clareza, acessibilidade e governança.

---

## 1. Introdução

**Relatório** e ***dashboard*** apresentam dados para apoiar decisões, mas diferem em objetivo e formato. A boa apresentação depende do **público**, da **decisão** e da **frequência** de uso.

## 2. Relatório × dashboard

| Aspecto | Relatório | *Dashboard* (painel) |
|---|---|---|
| Objetivo | Documentar e detalhar | Monitorar de relance |
| Formato | Tabelas, texto, gráficos; muitas vezes paginado | Tela única, visual, compacta |
| Detalhe | Alto | Resumo, com navegação (*drill-down*) |
| Frequência | Periódico ou sob demanda | Contínuo / quase tempo real |
| Interação | Limitada (filtros e parâmetros) | Filtros, seleção, detalhamento |
| Uso típico | Prestação de contas, auditoria | Acompanhamento operacional/gerencial |

Definição de *dashboard* de Stephen Few (de memória): exibição **visual das informações mais importantes** necessárias para atingir um ou mais objetivos, consolidadas em **uma única tela**, de modo que possam ser **monitoradas rapidamente**.

**Tipos de dashboard:** **operacional** (tempo real, ações imediatas), **tático/analítico** (análise de tendências, exploração) e **estratégico** (indicadores de alto nível, metas).

## 3. Indicadores (KPIs)

**KPI** (*Key Performance Indicator*) mede o desempenho em relação a um objetivo. Boas práticas: **poucos** e **relevantes**; **definição clara** (fórmula, fonte, periodicidade, responsável); **meta** e **comparação** (período anterior, orçamento); **tendência**; **alertas** (semáforos com critérios definidos e acessíveis).

Critério **SMART** para metas: específica, mensurável, alcançável, relevante, com prazo (de memória). **Indicadores de resultado** (o que aconteceu) × **de tendência/direcionadores** (o que levará ao resultado).

## 4. Organização da informação

- **Hierarquia visual:** o mais importante em destaque, geralmente **no alto e à esquerda** (leitura ocidental, em F ou Z).
- **Agrupar** métricas relacionadas; separar por seções.
- **Do geral ao particular:** visão resumida → detalhe sob demanda.
- **Consistência:** mesmas cores, escalas, formatos e unidades em todo o painel.
- **Contexto:** títulos claros, unidades, período, data/hora da atualização, fonte, definição das métricas.
- **Espaço em branco** e alinhamento; evitar sobrecarga.

## 5. Escolha de visualizações para dashboards

Reutilizar a tabela de escolha do arquivo `05`. Complementos: **cartões de KPI** (valor, variação, meta), ***sparklines*** (minigráficos de tendência), **medidores** (*gauges*; usar com parcimônia por ocuparem muito espaço), **tabelas** (quando o usuário precisa de valores exatos), **mapas de calor**, **gráficos de bala (*bullet*)** para comparação com meta. **Tabelas** e **gráficos** têm funções diferentes: tabelas para consulta de valores exatos; gráficos para padrões e comparações.

## 6. Interatividade

Filtros (período, unidade, produto), segmentação, ***drill-down*** (detalhar), ***drill-through*** (ir a relatório detalhado), *tooltips*, ordenação, exportação, atualização de dados. Alertas e inscrições. Interatividade **não** substitui um *design* claro: o estado inicial deve responder às perguntas principais.

## 7. Relatórios: organização

- **Estrutura:** capa/identificação, resumo executivo, introdução e método, resultados, conclusões e recomendações, anexos.
- **Para quem:** executivo (resumo), gerente (análise), operacional (detalhe).
- **Tabelas:** alinhar números à direita, usar mesmo número de casas decimais, totais e subtotais, ordenar por critério claro, evitar linhas e grades excessivas.
- **Relatórios paginados** (impressão/PDF) e **relatórios interativos**.

## 8. Qualidade, governança e acessibilidade

- **Qualidade dos dados:** origem confiável, atualização, consistência de definições (relação com Módulos 1 e 7).
- **Camada semântica / glossário** para evitar números divergentes entre áreas.
- **Segurança e privacidade:** controle de acesso por perfil e linha, mascaramento de dados pessoais (LGPD — Módulo 4; Módulo 9).
- **Acessibilidade:** contraste, texto alternativo, não depender só de cor, navegação por teclado, alternativa tabular aos gráficos (arquivo `01`).
- **Desempenho:** tempo de carregamento aceitável; extratos pré-agregados.
- **Ferramentas:** o edital não exige ferramenta específica (por exemplo, Power BI, Tableau, Superset); concentre-se nos princípios.

## 9. Erros comuns

Excesso de indicadores; gráficos 3D; cores sem critério; falta de contexto e de meta; métricas ambíguas; painel sem público definido; detalhe demais na tela inicial; escalas inconsistentes.

## 10. Exemplo (didático)

Painel de manutenção: topo com quatro cartões de KPI (disponibilidade, MTBF, backlog, custo vs. orçamento) com variação e semáforo; abaixo, tendência mensal e barras por unidade; filtros por período e unidade; clique na barra abre detalhe das ordens de serviço; rodapé com fonte e hora de atualização.

## 11. Comparações conceituais

| A | B | Diferença |
|---|---|---|
| Relatório | *Dashboard* | Documentar/detalhar × monitorar de relance |
| Dashboard operacional | Estratégico | Tempo real × metas de alto nível |
| *Drill-down* | *Drill-through* | Detalhar na mesma visão × ir a outro relatório |
| Indicador | Métrica | Medida ligada a objetivo × medida qualquer |
| Tabela | Gráfico | Valores exatos × padrões e comparações |

## 12. Atenção para a prova

*Inferência técnica e recomendação pedagógica; sem atribuir frequência à banca.*

- Distinguir **relatório** de **dashboard** e **tipos de dashboard**.
- Boas práticas: poucos indicadores relevantes, contexto, hierarquia, consistência.
- Item 6.6 **não teve questão** nas duas provas catalogadas.

## 13. Síntese

Dashboard = visão consolidada e rápida em uma tela; relatório = detalhe e registro. KPIs com definição, meta e contexto; hierarquia visual; interatividade (filtros, *drill-down*); governança, segurança e acessibilidade.

## 14. Pontos para a futura produção de questões (registro)

Escolher formato (relatório×dashboard); selecionar visualização; identificar falha de projeto; relacionar KPI e meta.

## 15. Referências

- FEW, S. *Information Dashboard Design* — **de memória, não verificada**.
- Conceitos de KPI e BI — **de memória**; ver também Módulos 1 e 7.
- Edital Transpetro nº 04/2026.4, Anexo IV, item 6.6.
