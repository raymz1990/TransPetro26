# Resumo — Módulo M07: Análise de Dados e Informações

## Identificação
- Concurso: Processo Seletivo Público TRANSPETRO 2026.4 (Edital nº 04/2026)
- Ênfase: 5 — Análise de Sistemas: Processos de Negócios
- Banca: Fundação Cesgranrio
- Origem: seções "Síntese" dos arquivos de `conteudo/07-analise-dados/` (extraídas automaticamente, sem reescrita)

Este resumo complementa o documento completo do módulo; não o substitui.

## Dado, Informação, Conhecimento e Inteligência

Dado (bruto) → informação (com contexto) → conhecimento (interpretado, aplicável) → inteligência (decisão e antecipação). DIKW (Ackoff). Conhecimento tácito × explícito. Qualidade e metadados.

## Business Intelligence (BI): Conceitos, Fundamentos, Características, Técnicas e Métodos

BI = processos e tecnologias que transformam dados em apoio à decisão; arquitetura fontes → ETL → DW → OLAP/mineração → relatórios/dashboards; análise descritiva, diagnóstica, preditiva, prescritiva; autosserviço com governança.

## Mapeamento de Fontes de Dados

Identificar, inventariar, perfilar, avaliar, definir fonte de verdade, mapear origem–destino, documentar (metadados, catálogo, linhagem) e governar. Fontes internas/externas, estruturadas/não estruturadas.

## Dados Estruturados e Dados Não Estruturados

Estruturado (esquema fixo, SQL), semiestruturado (etiquetas, JSON/XML), não estruturado (sem modelo; texto, mídia). Armazenamento e análise diferem; extrair estrutura para o BI; atenção a privacidade e governança.

## OLAP e Data Warehouse

- DW: orientado a assunto, integrado, histórico, não volátil; staging, DW, data marts, metadados; apoio ao BI.
- OLAP: análise multidimensional em cubo; roll-up, drill-down, slice, dice, pivot; MOLAP, ROLAP, HOLAP.

## Técnicas de Modelagem e Otimização de Bases Multidimensionais

Processo de quatro passos; tipos de fato; dimensões e hierarquias; cubo e camada semântica; otimização por agregação, índices, particionamento, colunar e paralelismo, com compromissos.

## Construção de Relatórios e Dashboards em Ferramentas de BI; Manipulação de Dados em Planilhas

BI: conectar, preparar, modelar (medidas), visualizar, compor, publicar, atualizar, com interatividade e segurança por linha. Planilhas: dados tabulares, limpeza, fórmulas, tabela dinâmica, formatação condicional, validação; riscos de governança.

## Geração de Insights e BI como Suporte à Tomada de Decisão

Insight = descoberta relevante e acionável. Processo: pergunta → exploração → causas → validação → priorização → comunicação → ação → acompanhamento. Cuidado com vieses. BI apoia decisões operacionais, táticas e estratégicas, com governança e julgamento humano.
