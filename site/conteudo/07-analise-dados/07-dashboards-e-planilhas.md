---
modulo: 07-analise-dados
arquivo: 07-dashboards-e-planilhas
itens_edital:
  - "7.8 Construção de relatórios e dashboards interativos em ferramentas de BI"
  - "7.9 Manipulação de dados em planilhas"
ids_matriz: ["E5-067", "E5-068"]
escopo: "A — conteúdo expresso no edital. Princípios de apresentação: Módulo 6 (`05`, `06`); aqui, construção em ferramentas de BI e planilhas."
tipo_conteudo: "teoria"
status: "VALIDADO"
ultima_atualizacao: "2026-10-31"
---

# Construção de Relatórios e Dashboards em Ferramentas de BI; Manipulação de Dados em Planilhas

**Módulo:** M07 — Análise de dados e informações
**Textos oficiais (Anexo IV):** 7.8 "Construção de relatórios e dashboards interativos em ferramentas de BI"; 7.9 "Manipulação de dados em planilhas".
**Escopo:** A. O edital **não cita produto**; o conteúdo é conceitual e independente de ferramenta. As funções de planilha são apresentadas por nome genérico, com as grafias de uso comum.
**Status:** `VALIDADO` (aprovado pelo usuário em 2026-10-31, com ressalvas: interpretação dos itens 7.2, 7.3 e 7.7 a 7.9 a confirmar; fontes de memória listadas em `docs/qualidade/relatorio-producao-modulo-07.md`). Conteúdo de memória; **não verificado online** (as páginas de suporte da Microsoft não foram lidas), salvo, na revisão de 2026-10-31, a existência das funções `XLOOKUP` (`PROCX`) e `VLOOKUP` (`PROCV`) e do recurso de tabela dinâmica (índice de ajuda da Microsoft); as **versões** em que `XLOOKUP` existe, `SUMIFS` e validação de dados **não foram confirmados**.

**Objetivos de aprendizagem.** (1) Descrever o fluxo de construção em uma ferramenta de BI; (2) aplicar recursos de interatividade; (3) manipular, limpar e resumir dados em planilhas; (4) escolher entre planilha e BI; (5) reconhecer riscos de planilhas.

---

## 1. Construção de relatórios e dashboards (item 7.8)

> **Princípios de projeto visual, KPIs, organização e tipos de dashboard:** Módulo 6, `06-dashboards-e-relatorios` e `05-data-storytelling`. Não são repetidos.

### 1.1 Fluxo geral em ferramentas de BI (independente de produto)

1. **Conectar** às fontes (banco, DW, arquivo, API); modo **importação** (cópia dos dados) ou **consulta direta** (*DirectQuery*/*live*), com compromissos entre desempenho e atualidade.
2. **Preparar** os dados (transformações, tipos, junções, filtros, remoção de duplicidades).
3. **Modelar:** relacionamentos entre tabelas (de preferência esquema estrela, arquivo `06`), **hierarquias**, **medidas** e **colunas calculadas**; camada semântica.
4. **Visualizar:** criar gráficos, tabelas, cartões (Módulo 6 `05`).
5. **Compor** o painel: layout, filtros, navegação.
6. **Publicar e compartilhar:** serviço/servidor, permissões por perfil.
7. **Atualizar e monitorar:** agendamento de atualização, alertas, uso.

### 1.2 Conceitos importantes

| Conceito | Descrição |
|---|---|
| **Medida** | Cálculo dinâmico, avaliado no contexto dos filtros (ex.: total de vendas; margem %) |
| **Coluna calculada** | Valor calculado linha a linha na carga/modelo |
| **Dimensão/atributo** | Campo de agrupamento ou filtro |
| **Contexto de filtro** | Seleções, filtros e linhas/colunas que determinam o valor da medida |
| **Hierarquia** | Níveis para *drill-down* (ano > mês > dia) |
| **Relacionamento** | Ligação entre tabelas; cardinalidade (um-para-muitos) e direção do filtro |
| **Parâmetro** | Valor ajustável pelo usuário (meta, período) |
| **Atualização incremental** | Carrega apenas dados novos ou alterados |

### 1.3 Interatividade

**Filtros** (de página, de relatório, de visual), **segmentadores** (*slicers*), **seleção cruzada** entre visuais, ***drill-down/up***, ***drill-through*** (ir a página de detalhes), *tooltips* ricos, marcadores e navegação por botões, ordenação, exportação, **alertas** e assinaturas, parâmetros. Interatividade deve preservar **clareza do estado inicial** (Módulo 6 `06`).

### 1.4 Relatórios paginados e relatórios interativos

| Tipo | Uso |
|---|---|
| **Paginado** (impressão/PDF) | Documentos formais, notas, listas extensas com paginação exata |
| **Interativo (dashboard)** | Exploração, monitoramento, filtros |

### 1.5 Segurança, governança e desempenho

- **Segurança em nível de linha** (*row-level security*): cada usuário vê apenas seus dados (relacionado à LGPD, Módulo 4, e ao Módulo 9).
- **Conjuntos de dados compartilhados e certificados** para uma só versão da verdade (arquivo `02`).
- **Desempenho:** reduzir colunas e linhas importadas, usar agregações, evitar cálculos pesados, modelo estrela.
- **Ciclo de vida:** versionamento, ambientes de desenvolvimento e produção, documentação.
- **Acessibilidade e responsividade** (Módulo 6 `01`).

## 2. Manipulação de dados em planilhas (item 7.9)

### 2.1 Conceitos

Uma **planilha** organiza dados em **linhas e colunas** (células), com **fórmulas** e **funções**, **formatação**, **gráficos** e **tabelas dinâmicas**. É a ferramenta de análise mais difundida e de uso pessoal e flexível.

### 2.2 Operações fundamentais

| Grupo | Recursos |
|---|---|
| **Entrada e organização** | Tabelas estruturadas (cabeçalhos, tipos consistentes), ordenar, filtrar, congelar painéis, formatos de número/data |
| **Limpeza** | Remover duplicatas, texto para colunas, aparar espaços, padronizar maiúsculas/minúsculas, tratar erros e valores vazios, converter tipos, localizar e substituir |
| **Validação** | Validação de dados (listas, intervalos), formatação condicional, proteção de células/planilhas |
| **Fórmulas e referências** | Referências **relativas** (`A1`), **absolutas** (`$A$1`) e **mistas**; nomes de intervalos; referências a outras planilhas |
| **Resumo** | **Tabelas dinâmicas** (resumo, agrupamento, filtro, campos calculados), subtotais, gráficos dinâmicos |
| **Visualização** | Gráficos, minigráficos, formatação condicional, painéis em planilha |
| **Automação** | Macros, scripts; consultas de dados e transformação (importar, combinar e transformar dados) |

### 2.3 Funções usuais (nomes conforme aplicativos mais comuns; **de memória**)

| Categoria | Exemplos |
|---|---|
| **Matemáticas e estatísticas** | `SOMA`, `MÉDIA`, `MÁXIMO`, `MÍNIMO`, `CONT.NÚM`, `CONT.VALORES` |
| **Condicionais** | `SE`, `SOMASE`, `SOMASES`, `CONT.SE`, `CONT.SES`, `MÉDIASE`, `E`, `OU` |
| **Pesquisa e referência** | `PROCV`, `PROCH`, `ÍNDICE` + `CORRESP`, `PROCX` (versões mais recentes de alguns aplicativos) |
| **Texto** | `CONCATENAR`/`CONCAT`, `ESQUERDA`, `DIREITA`, `EXT.TEXTO`, `LOCALIZAR`, `ARRUMAR`, `MAIÚSCULA` |
| **Data e hora** | `HOJE`, `DATA`, `DIA`, `MÊS`, `ANO`, `DIAS`, `DIATRABALHOTOTAL` |
| **Lógicas e de erro** | `SEERRO`, `ÉERRO`, `ÉNÚM` |

*Os nomes e a disponibilidade variam por aplicativo, idioma e versão; confirmar no aplicativo usado.*

**Exemplo:** `=SOMASES(C:C; A:A; "Norte"; B:B; "2026")` soma os valores da coluna C em que A é "Norte" e B é "2026".

### 2.4 Tabela dinâmica

Resume dados por **linhas**, **colunas**, **valores** e **filtros**, com agregações (soma, contagem, média) e agrupamentos (datas em meses e anos). Boas práticas: dados de origem em formato **tabular** (um registro por linha, cabeçalho único, sem células mescladas e sem linhas de total); atualizar após alterar os dados.

### 2.5 Planilha × BI

| Aspecto | Planilha | Ferramenta de BI |
|---|---|---|
| Volume | Limitado | Grandes volumes |
| Fontes | Manuais, arquivos | Múltiplas, automatizadas |
| Governança | Fraca (versões paralelas) | Centralizada (modelo, permissões) |
| Atualização | Manual | Agendada |
| Colaboração | Limitada | Compartilhamento e perfis |
| Flexibilidade | Muito alta, individual | Estruturada |
| Rastreabilidade | Baixa | Linhagem e histórico |

Planilhas são também **fonte de dados** para BI; devem ter estrutura tabular consistente.

### 2.6 Riscos das planilhas

Erros de fórmula; referências quebradas; **cópias divergentes**; falta de validação; dados sensíveis expostos (compartilhamento por e-mail); dependência de macros; baixa auditoria. Mitigação: padronização de modelos, validação, proteção, controle de versão, migração para BI quando o uso se tornar crítico.

## 3. Exemplo (didático)

O analista importa as ordens de serviço (CSV) para uma planilha, remove duplicatas, padroniza datas, cria uma tabela dinâmica por unidade e mês e uma formatação condicional para atrasos. Como a análise passa a ser recorrente, o dado é conectado a uma ferramenta de BI: um modelo estrela, medidas de custo e prazo, filtros de unidade e período, atualização diária e segurança por linha por gerência.

## 4. Comparações conceituais

| A | B | Diferença |
|---|---|---|
| Medida | Coluna calculada | Avaliada no contexto de filtro × calculada por linha |
| Importação | Consulta direta | Cópia dos dados (rápida) × consulta no momento (atual) |
| Filtro | Segmentador | Restringe dados × controle visual do filtro |
| Referência relativa | Absoluta | Ajusta ao copiar × fixa a célula |
| `PROCV` | `ÍNDICE` + `CORRESP` | Busca à direita da coluna-chave × busca em qualquer direção |
| Tabela dinâmica | Fórmula `SOMASES` | Resumo interativo × cálculo pontual |

## 5. Atenção para a prova

*Inferência técnica e recomendação pedagógica; sem atribuir frequência à banca.*

- Os itens 7.8 e 7.9 estão no edital sem produto específico; trate conceitos (modelo, medida, interatividade, tabela dinâmica, funções de pesquisa e condicionais).
- Saber o que cada função faz e como funcionam as referências.
- Itens 7.8 e 7.9 **não tiveram questão** identificada nas duas provas catalogadas.

## 6. Síntese

BI: conectar, preparar, modelar (medidas), visualizar, compor, publicar, atualizar, com interatividade e segurança por linha. Planilhas: dados tabulares, limpeza, fórmulas, tabela dinâmica, formatação condicional, validação; riscos de governança.

## 7. Pontos para a futura produção de questões (registro)

Função adequada a um cenário; diferença entre referências; leitura de resultado de fórmula; uso de tabela dinâmica; escolha planilha × BI; recursos de interatividade.

## 8. Referências

- Documentação de aplicativos de planilha e de ferramentas de BI — **não lida; de memória** (tentativa de leitura de página da Microsoft falhou, HTTP 404, e não foi repetida).
- Princípios de apresentação: Módulo 6, `05` e `06`.
- Edital Transpetro nº 04/2026.4, Anexo IV, itens 7.8 e 7.9.
