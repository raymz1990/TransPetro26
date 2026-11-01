---
modulo: 07-analise-dados
arquivo: 06-modelagem-multidimensional
itens_edital:
  - "7.7 Técnicas de modelagem e otimização de bases de dados multidimensionais"
ids_matriz: ["E5-066"]
escopo: "A — conteúdo expresso no edital. A modelagem dimensional básica está no Módulo 1 (`09`); aqui, técnicas complementares e otimização."
tipo_conteudo: "teoria"
status: "VALIDADO"
ultima_atualizacao: "2026-10-31"
---

# Técnicas de Modelagem e Otimização de Bases Multidimensionais

**Módulo:** M07 — Análise de dados e informações
**Texto oficial (Anexo IV):** 7.7 "Técnicas de modelagem e otimização de bases de dados multidimensionais".
**Escopo:** A. Fundamentos (estrela, floco de neve, fato, dimensão, granularidade, SCD) em `01-arquitetura-dados/09`. Este arquivo trata do que o M1 não desenvolve: processo de projeto, modelagem para o cubo e **otimização**.
**Status:** `VALIDADO` (aprovado pelo usuário em 2026-10-31, com ressalvas: interpretação dos itens 7.2, 7.3 e 7.7 a 7.9 a confirmar; fontes de memória listadas em `docs/qualidade/relatorio-producao-modulo-07.md`). **Verificados** (títulos nas páginas do Kimball Group): processo de quatro passos, tipos de tabela fato e SCD tipos 0 a 7. Técnicas de otimização são de memória.

**Objetivos de aprendizagem.** (1) Aplicar o processo de projeto dimensional; (2) escolher o tipo de tabela fato; (3) modelar hierarquias e dimensões; (4) aplicar técnicas de otimização; (5) avaliar compromissos entre desempenho, custo e atualização.

---

## 1. Revisão mínima (referência ao Módulo 1)

Esquema **estrela** (fato central e dimensões desnormalizadas), **floco de neve** (dimensões normalizadas), **granularidade** (nível de detalhe de uma linha de fato), **chaves substitutas**, **dimensões conformes** e **SCD** (dimensões lentamente mutáveis) estão em `01-arquitetura-dados/09`. Aqui, apenas se aprofunda o que serve à modelagem e à otimização.

## 2. Processo de projeto dimensional (Kimball — **verificado**)

O Kimball Group descreve um processo em **quatro passos**:

| Passo | Pergunta | Exemplo |
|---|---|---|
| 1. **Selecionar o processo de negócio** | O que será medido? | Ordens de manutenção |
| 2. **Declarar a granularidade** | O que representa **uma linha** da tabela fato? | Uma ordem de serviço por equipamento |
| 3. **Identificar as dimensões** | Quem, o quê, onde, quando, como? | Tempo, equipamento, unidade, tipo de serviço |
| 4. **Identificar os fatos** | Quais medidas numéricas? | Custo, horas, quantidade de peças |

A **granularidade** é decisão central: deve ser a **mais atômica possível** (de memória, recomendação de Kimball), pois permite agregar, mas não desagregar.

## 3. Tipos de tabela fato (títulos **verificados**; descrições de memória)

| Tipo | Descrição | Exemplo |
|---|---|---|
| **Transacional** | Uma linha por evento/transação | Cada venda |
| **Snapshot periódico** | Uma linha por entidade por período | Saldo diário do estoque |
| **Snapshot acumulativo** | Uma linha por ciclo de processo, atualizada nas etapas | Ordem de serviço: aberta, programada, executada, encerrada |
| **Factless** (sem fato) | Registra ocorrências ou cobertura, sem medida numérica | Presença em treinamento; itens em promoção |

**Aditividade das medidas:** **aditivas** (somam em todas as dimensões: quantidade), **semiaditivas** (somam em algumas, não no tempo: saldo) e **não aditivas** (razões, percentuais: devem ser calculadas a partir de componentes). Módulo 1, `09`.

## 4. Técnicas de modelagem de dimensões

- **Hierarquias:** níveis (dia–mês–trimestre–ano) em uma dimensão; **hierarquias alternativas** (calendário civil e fiscal); **hierarquias irregulares** (ex.: estrutura organizacional com profundidade variável) exigem tabelas de ponte ou chave de caminho (de memória).
- **Dimensão tempo:** pré-carregada, com atributos (dia da semana, feriado, trimestre fiscal).
- **Dimensões degeneradas:** identificadores (nº do documento) mantidos na fato, sem tabela de dimensão.
- **Dimensões *junk* (lixo):** agrupam indicadores e *flags* de baixa cardinalidade em uma só dimensão.
- **Dimensões *role-playing*:** a mesma dimensão (tempo) usada em papéis diferentes (data de abertura, data de encerramento).
- **Tabelas de ponte** para relações muitos-para-muitos.
- **SCD:** o Kimball lista os tipos **0 a 7** (títulos verificados); os mais cobrados na literatura são **tipo 1** (sobrescrever), **tipo 2** (nova linha, preserva histórico) e **tipo 3** (coluna com valor anterior) — descrições no Módulo 1, `09`.
- **Dimensões conformes** e **matriz de barramento** (processos × dimensões) para integrar *data marts* (de memória).

## 5. Modelagem para cubos (MOLAP) e camada semântica

- **Cubo:** dimensões, hierarquias, medidas e **medidas calculadas**.
- **Esparsidade:** muitas combinações de dimensões sem dado; cubos MOLAP podem desperdiçar espaço, com técnicas de compressão e agregação seletiva (de memória).
- **Camada semântica:** modelo lógico (nomes de negócio, relacionamentos, métricas) entre o DW e as ferramentas de BI.

## 6. Otimização de bases multidimensionais (técnicas de memória)

| Técnica | Efeito | Custo / cuidado |
|---|---|---|
| **Tabelas agregadas** (sumarização pré-calculada) | Consultas rápidas em níveis altos da hierarquia | Armazenamento e manutenção na carga; escolher agregações por uso |
| **Visões materializadas** | Agregações físicas mantidas pelo banco | Atualização |
| **Índices** (B-tree; **bitmap** para colunas de baixa cardinalidade) | Filtragem rápida de dimensões | Custo de carga; bitmap é adequado a DW |
| **Particionamento** (por tempo) | Lê apenas partições relevantes; facilita arquivamento | Planejar chave de partição |
| **Colunar / compressão** | Leitura de poucas colunas, alta compressão | Menos eficiente em atualizações pontuais |
| **Paralelismo e processamento massivamente paralelo (MPP)** | Escala de consultas | Custo de infraestrutura |
| **Desnormalização** (estrela em vez de floco) | Menos junções | Redundância |
| **Chaves substitutas inteiras** | Junções mais rápidas | Gestão de chaves no ETL |
| **Cache e pré-cálculo** | Respostas imediatas | Atualização dos dados em cache |
| **Controle de granularidade e volume** | Reduz linhas | Perda de detalhe |
| **Cargas incrementais** (CDC) | Reduz a janela de carga | Complexidade |

**Compromissos:** mais agregações aceleram consultas, mas **aumentam armazenamento e tempo de carga**; desnormalizar acelera a leitura, mas **duplica dados**; mais índices ajudam a consulta, mas **pioram a carga**.

**Boas práticas de projeto:** modelar a partir das **perguntas de negócio**; validar granularidade com os usuários; padronizar nomes; documentar; testar desempenho com volumes reais; monitorar uso e **ajustar agregações** conforme as consultas mais frequentes.

## 7. Exemplo SQL (ilustrativo, não executado)

```sql
-- Tabela agregada por mês e unidade (sumarização pré-calculada)
CREATE TABLE agg_manutencao_mes AS
SELECT t.ano, t.mes, f.sk_unidade, SUM(f.custo) AS custo_total, COUNT(*) AS qtd_os
FROM fato_manutencao f
JOIN dim_tempo t ON t.sk_tempo = f.sk_tempo_abertura
GROUP BY t.ano, t.mes, f.sk_unidade;
```

## 8. Comparações conceituais

| A | B | Diferença |
|---|---|---|
| Fato transacional | Snapshot periódico | Um evento × estado em intervalos |
| Snapshot periódico | Acumulativo | Linha por período × linha por ciclo, atualizada |
| Estrela | Floco de neve | Dimensões desnormalizadas × normalizadas |
| Agregação | Granularidade atômica | Resumo pré-calculado × menor nível de detalhe |
| Índice *bitmap* | Índice B-tree | Baixa cardinalidade, DW × uso geral, alta cardinalidade |
| Particionamento | Indexação | Dividir fisicamente os dados × estrutura de acesso |

## 9. Atenção para a prova

*Inferência técnica e recomendação pedagógica; sem atribuir frequência à banca.*

- Item amplo: esperar perguntas sobre **estrela/floco de neve**, **fato e dimensão**, **granularidade**, **SCD** e **desnormalização para desempenho**.
- Reconhecer os compromissos de otimização (desempenho × armazenamento × carga).
- Item 7.7 **não teve questão** identificada nas duas provas catalogadas.

## 10. Síntese

Processo de quatro passos; tipos de fato; dimensões e hierarquias; cubo e camada semântica; otimização por agregação, índices, particionamento, colunar e paralelismo, com compromissos.

## 11. Pontos para a futura produção de questões (registro)

Passos do projeto dimensional; escolha do tipo de fato; técnica de otimização adequada ao cenário; compromisso entre desnormalização e redundância.

## 12. Referências

- Kimball Group, *Dimensional Modeling Techniques* e *Four-Step Design Process* — **verificados em 2026-10-31** (quatro passos, títulos dos quatro tipos de fato e SCD 0–7); descrições das técnicas **não lidas**.
- KIMBALL; ROSS. *The Data Warehouse Toolkit* — **de memória, não verificada**. Técnicas de otimização — **de memória**.
- Edital Transpetro nº 04/2026.4, Anexo IV, item 7.7.
