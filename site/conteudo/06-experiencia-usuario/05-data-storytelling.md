---
modulo: 06-experiencia-usuario
arquivo: 05-data-storytelling
itens_edital:
  - "6.5 Storytelling com dados"
ids_matriz: ["E5-052"]
escopo: "A — conteúdo expresso no edital."
tipo_conteudo: "teoria"
status: "VALIDADO"
ultima_atualizacao: "2026-10-31"
---

# Storytelling com Dados (*Data Storytelling*)

**Módulo:** M06 — Experiência do usuário (UX)
**Texto oficial (Anexo IV):** 6.5 "Storytelling com dados".
**Escopo:** A.
**Status:** `VALIDADO` (aprovado pelo usuário em 2026-10-31, com ressalvas: interpretação dos itens 6.3, 6.4, 6.7 e 6.11 a confirmar; fontes de memória listadas em `docs/qualidade/relatorio-producao-modulo-06.md`). Autores (Knaflic, Tufte, Few, Cleveland, Gestalt) citados de memória: **não verificados online**.

**Objetivos de aprendizagem.** (1) Definir *data storytelling*; (2) estruturar uma narrativa com dados; (3) escolher gráficos adequados; (4) aplicar atributos pré-atentivos e princípios de Gestalt; (5) evitar distorções e erros comuns.

---

## 1. Introdução

***Data storytelling*** é comunicar **análises e dados** por meio de uma **narrativa** que combina **dados, visualização e contexto** para **levar o público a compreender e agir**. Não é "enfeitar" gráficos: é decidir **qual mensagem** os dados sustentam, **para quem** e **qual ação** se espera.

Componentes frequentemente citados: **dados** (base), **visuais** (gráficos) e **narrativa** (contexto, sequência, mensagem).

## 2. Processo (inspirado em Cole Nussbaumer Knaflic, de memória)

1. **Compreender o contexto:** quem é o público, o que precisa decidir, qual a mensagem central ("grande ideia") e qual o meio (apresentação, relatório, painel).
2. **Escolher a visualização adequada.**
3. **Eliminar a desordem (*clutter*).**
4. **Direcionar a atenção** para o que importa.
5. **Pensar como um designer:** hierarquia, alinhamento, espaço em branco.
6. **Contar a história:** começo (contexto/problema), meio (análise/evidência), fim (conclusão/ação).

## 3. Estrutura narrativa

| Elemento | Função |
|---|---|
| **Contexto** | Por que o assunto importa agora |
| **Conflito/problema** | O que os dados revelam de diferente do esperado |
| **Evidência** | Gráficos e números que sustentam |
| **Resolução/ação** | Recomendação e próximos passos |

**Título que informa a conclusão** ("Atrasos cresceram 20% no terceiro trimestre") ajuda mais que título descritivo ("Atrasos por trimestre"). *(Exemplo didático, valores fictícios.)*

## 4. Escolha do gráfico

| Objetivo | Gráficos usuais |
|---|---|
| **Comparar categorias** | Barras horizontais/verticais |
| **Evolução no tempo** | Linhas (séries), colunas para poucos períodos |
| **Composição / partes de um todo** | Barras empilhadas; pizza apenas com **poucas** fatias; *treemap* |
| **Distribuição** | Histograma, *boxplot* |
| **Relação entre variáveis** | Dispersão (*scatter*), bolhas |
| **Ranking** | Barras ordenadas |
| **Geográfico** | Mapas (coropléticos), com cuidado |
| **Fluxos / etapas** | Funil, Sankey |
| **Valor único (KPI)** | Número grande com contexto (meta, variação) |

Evitar: gráficos 3D, pizzas com muitas fatias, eixos duplos confusos, cores sem significado, **eixo vertical de barras que não começa em zero** (distorce a comparação).

## 5. Atributos pré-atentivos e Gestalt

**Atributos pré-atentivos** são percebidos rapidamente, sem esforço consciente: **cor (matiz e intensidade)**, **posição**, **tamanho**, **forma**, **orientação**, **movimento**. Usar **um** destaque (por exemplo, cor forte em uma barra, cinza nas demais) direciona o olhar.

**Princípios de Gestalt:** **proximidade**, **similaridade**, **continuidade**, **fechamento**, **conexão**, **figura–fundo**. Ajudam a agrupar e organizar elementos sem linhas e bordas em excesso.

## 6. Cor, rótulos e simplicidade

- Usar cor com **propósito** (destaque, categoria, alerta) e paleta **limitada**.
- **Acessibilidade:** não depender só da cor (daltonismo); contraste suficiente (arquivo `01`).
- **Rotular diretamente** (rótulos nos dados) em vez de legendas distantes; remover grades e bordas desnecessárias.
- **Razão dados–tinta** (Tufte): maximizar a parcela da tinta que representa dados; eliminar "lixo gráfico" (*chartjunk*).

## 7. Ética e armadilhas

- **Distorções:** eixo truncado, escalas inconsistentes, área desproporcional, recorte seletivo de períodos.
- **Correlação ≠ causalidade.**
- **Viés de confirmação** na escolha do que mostrar.
- Informar **fonte, período, definição das métricas** e limitações.
- **Excesso de narrativa** que sobrepõe a evidência.

## 8. Exemplo (didático)

Relatório à diretoria: o título afirma "Tempo médio de atendimento caiu 15% após a automação"; um gráfico de linhas destaca em âmbar a série pós-automação, as demais em cinza; anotação marca a data da mudança; o último *slide* recomenda estender a automação a duas áreas.

## 9. Comparações conceituais

| A | B | Diferença |
|---|---|---|
| *Data storytelling* | Visualização de dados | Narrativa para ação × representação gráfica |
| Visualização explanatória | Exploratória | Comunica conclusão a um público × permite ao analista descobrir |
| Gráfico de barras | Gráfico de linhas | Comparar categorias × mostrar tendência temporal |
| Destaque pré-atentivo | Decoração | Guia a atenção × distrai |
| Dashboard | Narrativa | Monitoramento contínuo × mensagem específica (arquivo `06`) |

## 10. Atenção para a prova

*Inferência técnica e recomendação pedagógica; sem atribuir frequência à banca.*

- Associar *data storytelling* a **dados + visual + narrativa** voltados à **ação**.
- Saber **escolher o gráfico** pelo objetivo e reconhecer **distorções**.
- Item 6.5 **não teve questão** nas duas provas catalogadas.

## 11. Síntese

Contexto e público; mensagem central; gráfico adequado ao objetivo; reduzir ruído; destacar com atributos pré-atentivos; narrativa começo-meio-fim; ética e transparência.

## 12. Pontos para a futura produção de questões (registro)

Escolha de gráfico por objetivo; identificação de distorção; componentes de *data storytelling*; uso de destaque e cor.

## 13. Referências

- KNAFLIC, C. N. *Storytelling com Dados* — **de memória, não verificada**.
- TUFTE, E. *The Visual Display of Quantitative Information*; FEW, S. *Show Me the Numbers*; CLEVELAND (percepção gráfica) — **de memória, não verificados**.
- Edital Transpetro nº 04/2026.4, Anexo IV, item 6.5.
