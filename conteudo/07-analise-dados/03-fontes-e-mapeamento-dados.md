---
modulo: 07-analise-dados
arquivo: 03-fontes-e-mapeamento-dados
itens_edital:
  - "7.3 Mapeamento de fontes de dados"
ids_matriz: ["E5-062"]
escopo: "A — conteúdo expresso no edital. Item genérico: abrangência é interpretação (a confirmar)."
tipo_conteudo: "teoria"
status: "VALIDADO"
ultima_atualizacao: "2026-10-31"
---

# Mapeamento de Fontes de Dados

**Módulo:** M07 — Análise de dados e informações
**Texto oficial (Anexo IV):** 7.3 "Mapeamento de fontes de dados".
**Escopo:** A. O edital não detalha o item; interpretação adotada (**a confirmar**): identificar, catalogar, avaliar e documentar as fontes que alimentarão a análise, incluindo mapeamento origem–destino, qualidade, linhagem e governança.
**Status:** `VALIDADO` (aprovado pelo usuário em 2026-10-31, com ressalvas: interpretação dos itens 7.2, 7.3 e 7.7 a 7.9 a confirmar; fontes de memória listadas em `docs/qualidade/relatorio-producao-modulo-07.md`). Conteúdo de memória; **não verificado online nesta etapa**.

**Objetivos de aprendizagem.** (1) Classificar fontes de dados; (2) executar um levantamento e inventário de fontes; (3) construir um mapeamento origem–destino; (4) avaliar qualidade e adequação; (5) documentar linhagem e metadados.

---

## 1. Introdução

Antes de analisar, é preciso saber **onde estão os dados**, **quem é o dono**, **em que formato**, **com que qualidade** e **como chegam** ao ambiente analítico. O **mapeamento de fontes de dados** é o levantamento e o registro estruturado dessas informações e das **regras de correspondência** entre origem e destino.

## 2. Tipos de fontes

| Categoria | Exemplos |
|---|---|
| **Sistemas transacionais internos** | ERP, CRM, sistemas de manutenção e de operação |
| **Bancos de dados** | Relacionais, NoSQL (Módulo 1) |
| **Arquivos** | Planilhas, CSV, XML, JSON, relatórios em PDF, logs |
| **Sistemas legados** | *Mainframes*, aplicações sem API |
| **Dados de dispositivos** | Sensores, IoT, SCADA, telemetria |
| **Dados externos** | Fornecedores, órgãos reguladores, dados abertos, mercado |
| **Web e redes sociais** | Páginas, APIs públicas, comentários |
| **Documentos e mídia** | Contratos, e-mails, imagens, áudio (arquivo `04`) |
| **APIs e serviços** | REST, mensageria, *streaming* |

Classificações adicionais: **primária** (gerada pela organização) × **secundária** (obtida de terceiros); **interna** × **externa**; **em lote** × **tempo real**.

## 3. Processo de mapeamento

1. **Levantar as necessidades de informação:** perguntas de negócio, indicadores e relatórios exigidos.
2. **Identificar fontes candidatas** e seus **responsáveis (donos/*data stewards*)**.
3. **Inventariar:** sistema, tabela/arquivo, campos, formato, volume, periodicidade de atualização, método de acesso, sensibilidade (dados pessoais), custo.
4. **Perfilar** os dados (*data profiling*): completude, unicidade, valores inválidos, formatos, distribuição (Módulo 1, `10`).
5. **Avaliar** adequação: qualidade, confiabilidade, atualidade, disponibilidade e aspectos legais.
6. **Definir a "fonte de verdade"** (sistema de registro) para cada dado, resolvendo duplicidades entre sistemas.
7. **Mapear origem → destino** (campo a campo) e as **regras de transformação**.
8. **Documentar** no catálogo e **monitorar** mudanças nas fontes.

## 4. Matriz de mapeamento origem–destino

| Campo de destino (DW) | Fonte | Campo/tabela de origem | Regra de transformação | Qualidade/observação |
|---|---|---|---|---|
| `dim_equipamento.codigo` | Sistema de manutenção | `EQUIP.COD` | Remover espaços; maiúsculas | Duplicidades a tratar |
| `fato_manutencao.custo` | ERP | `OS.VLR_TOTAL` | Converter moeda; somar itens | Valores nulos = 0? Confirmar |
| `dim_data.ano_mes` | Sistema de manutenção | `OS.DT_ABERT` | Derivar ano e mês | — |

*(Exemplo didático e fictício.)* O mapeamento orienta o ETL (Módulo 1, `08`).

## 5. Metadados, catálogo e linhagem

- **Metadados técnicos** (esquema, tipos, tamanhos), **de negócio** (definição, regra, responsável) e **operacionais** (carga, tempo, erros).
- **Catálogo de dados:** inventário pesquisável com glossário e responsáveis.
- **Linhagem (*lineage*):** rastreia a **origem** e as **transformações** de cada dado até o relatório, permitindo explicar números e avaliar impactos de mudanças.
- **Governança:** papéis (dono, *steward*), políticas de qualidade e acesso (Módulo 1 `10`; Módulo 4).

## 6. Desafios comuns

Dados duplicados e inconsistentes entre sistemas; **silos**; falta de documentação; definições conflitantes (ex.: "cliente ativo"); formatos heterogêneos; dados desatualizados; acesso restrito; planilhas paralelas; mudanças não comunicadas; **dados pessoais** que exigem base legal e proteção (LGPD — Módulo 4).

## 7. Acesso e integração

Padrões: carga **em lote** (extração agendada), **CDC** (captura de alterações), **APIs**, **mensageria** e **virtualização de dados** (consulta sem copiar) — de memória; ver Módulo 1, `08`. Critérios de escolha: volume, latência exigida, impacto no sistema de origem, segurança.

## 8. Exemplo (didático)

O gestor pede "custo de manutenção por unidade e mês". O mapeamento revela que o custo está no ERP, os equipamentos em outro sistema com códigos diferentes, e parte das ordens de serviço em planilhas. Decide-se: ERP como fonte de verdade para custos; criar tabela de correspondência de códigos; migrar as planilhas para o sistema; registrar regras e responsáveis.

## 9. Comparações conceituais

| A | B | Diferença |
|---|---|---|
| Fonte | Destino | Onde o dado nasce × onde será analisado |
| Perfilamento | Mapeamento | Conhecer o estado dos dados × definir correspondência e regras |
| Catálogo | Dicionário de dados | Inventário amplo e pesquisável × descrição dos campos de um sistema |
| Linhagem | Metadado | Trajetória e transformações × descrição |
| Fonte de verdade | Cópia | Sistema de registro × réplica analítica |

## 10. Atenção para a prova

*Inferência técnica e recomendação pedagógica; sem atribuir frequência à banca.*

- Item genérico: esperar enunciados sobre **tipos de fontes**, **qualidade**, **integração** e **papel do ETL**.
- Mapeamento ≠ extração: é o **planejamento** e a **documentação** (o ETL executa).
- Item 7.3 **não teve questão** identificada nas duas provas catalogadas.

## 11. Síntese

Identificar, inventariar, perfilar, avaliar, definir fonte de verdade, mapear origem–destino, documentar (metadados, catálogo, linhagem) e governar. Fontes internas/externas, estruturadas/não estruturadas.

## 12. Pontos para a futura produção de questões (registro)

Classificação de fontes; etapas do mapeamento; objetivo da linhagem; problemas de qualidade; diferença entre mapeamento e ETL.

## 13. Referências

- DAMA-DMBOK (gestão de dados), Kimball (ETL) — **de memória, não verificados**.
- Edital Transpetro nº 04/2026.4, Anexo IV, item 7.3.
