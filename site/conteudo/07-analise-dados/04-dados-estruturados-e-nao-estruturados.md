---
modulo: 07-analise-dados
arquivo: 04-dados-estruturados-e-nao-estruturados
itens_edital:
  - "7.4 Dados estruturados e dados não estruturados"
ids_matriz: ["E5-063"]
escopo: "A — conteúdo expresso no edital."
tipo_conteudo: "teoria"
status: "VALIDADO"
ultima_atualizacao: "2026-10-31"
---

# Dados Estruturados e Dados Não Estruturados

**Módulo:** M07 — Análise de dados e informações
**Texto oficial (Anexo IV):** 7.4 "Dados estruturados e dados não estruturados".
**Escopo:** A. Os dados **semiestruturados** não constam literalmente, mas são necessários para entender a distinção.
**Status:** `VALIDADO` (aprovado pelo usuário em 2026-10-31, com ressalvas: interpretação dos itens 7.2, 7.3 e 7.7 a 7.9 a confirmar; fontes de memória listadas em `docs/qualidade/relatorio-producao-modulo-07.md`). As três definições foram **verificadas** em página da AWS; o restante é de memória.

**Objetivos de aprendizagem.** (1) Definir os três tipos de dados; (2) reconhecer exemplos; (3) relacionar cada tipo ao armazenamento e à análise; (4) explicar desafios dos não estruturados; (5) distinguir formato de modelo.

---

## 1. Introdução

A forma como os dados estão **organizados** determina como são armazenados, consultados e analisados. Os dados costumam ser classificados em **estruturados**, **semiestruturados** e **não estruturados**. Estima-se que grande parte dos dados das organizações seja não estruturada (afirmação comum na literatura; **sem fonte verificada aqui**).

## 2. Definições

| Tipo | Definição | Fonte |
|---|---|---|
| **Estruturados** | Possuem **formato padronizado ou esquema predefinido** (linhas e colunas, tipos definidos) | Definição verificada (AWS) |
| **Semiestruturados** | **Não** seguem modelo relacional/tabular rígido, mas têm **marcadores ou etiquetas** que organizam elementos (JSON, XML, HTML, e-mail) | Verificada (AWS) |
| **Não estruturados** | **Sem modelo de dados definido** ou esquema predefinido (texto livre, imagens, áudio, vídeo, documentos) | Verificada (AWS) |

## 3. Comparação

| Aspecto | Estruturados | Semiestruturados | Não estruturados |
|---|---|---|---|
| **Esquema** | Fixo, definido antes (*schema-on-write*) | Flexível, autodescritivo | Inexistente / implícito (*schema-on-read*) |
| **Exemplos** | Tabelas de banco relacional, planilhas organizadas, CSV regular | JSON, XML, logs com campos, e-mails, YAML | Texto livre, PDFs, imagens, áudio, vídeo, posts em redes sociais |
| **Armazenamento** | SGBD relacional, DW | Bancos de documentos (NoSQL), arquivos | Sistemas de arquivos, *data lakes*, armazenamento de objetos |
| **Consulta** | SQL | Linguagens do formato (JSONPath, XPath), SQL estendido | Busca textual, indexação, processamento de linguagem natural, visão computacional |
| **Análise** | Direta (BI, OLAP) | Requer extração/achatamento | Requer **pré-processamento** para extrair estrutura |
| **Qualidade/validação** | Restrições do esquema | Validação por esquema (XSD, JSON Schema) | Difícil; depende de interpretação |

*Esquema na escrita × na leitura:* nos estruturados, o esquema é aplicado ao **gravar**; em *data lakes*, aplica-se ao **ler** (Módulo 1, `07` e `09`). Os tipos de bancos NoSQL estão no Módulo 1 (`07`).

## 4. Formato × modelo

Uma planilha em PDF contém números, mas **não está estruturada para análise** automática: o **conteúdo** é tabular, o **formato** não. Um arquivo CSV com colunas regulares é estruturado; um JSON com campos variáveis é semiestruturado. A classificação refere-se à **organização utilizável pela máquina**, não ao suporte (arquivo, banco).

## 5. Como analisar dados não estruturados

| Tipo de dado | Técnicas (visão geral, de memória) |
|---|---|
| **Texto** | Mineração de texto, tokenização, extração de entidades, análise de sentimento, classificação, modelos de linguagem |
| **Imagens/vídeo** | Visão computacional, classificação, detecção de objetos |
| **Áudio** | Transcrição automática, análise de fala |
| **Logs e sensores** | Análise de séries temporais, correlação de eventos |

Estratégia comum: **extrair atributos** e **metadados** do conteúdo para um formato estruturado (por exemplo, categoria, entidades, sentimento) e incorporá-los ao DW ou ao BI, mantendo o conteúdo original no *data lake*. Relações: Módulo 1 `09` (*data lakes*, Big Data); `02` (mineração).

## 6. Desafios e riscos

Volume e variedade; ausência de esquema; qualidade e ambiguidade (linguagem natural); custo de armazenamento e processamento; **privacidade** (documentos e e-mails podem conter dados pessoais — LGPD, Módulo 4); **segurança**; **governança** (catalogação, retenção); dificuldade de integração com dados estruturados.

## 7. Exemplo (didático)

Uma operadora tem: tabela de ordens de serviço (estruturado); eventos de equipamento em JSON (semiestruturado); fotos de inspeção e laudos em PDF (não estruturados). Para o BI, as ordens vão ao DW; os JSON são carregados com campos extraídos; dos laudos extraem-se tipo de falha e criticidade por processamento de texto, ligados à ordem de serviço por um identificador.

## 8. Comparações conceituais

| A | B | Diferença |
|---|---|---|
| Estruturado | Não estruturado | Esquema predefinido × sem modelo de dados definido |
| Semiestruturado | Estruturado | Etiquetas flexíveis × esquema rígido tabular |
| *Schema-on-write* | *Schema-on-read* | Esquema aplicado ao gravar × ao ler |
| Dado | Metadado | Conteúdo × descrição do conteúdo |
| Texto livre | Texto com campos | Sem estrutura × com campos reconhecíveis |

## 9. Atenção para a prova

*Inferência técnica e recomendação pedagógica; sem atribuir frequência à banca.*

- Classificar exemplos: tabela relacional = estruturado; JSON/XML = semiestruturado; imagens, áudio, texto livre = não estruturado.
- Não confundir **"não estruturado" com "sem valor"**: exige técnicas específicas.
- Item 7.4 **não teve questão** identificada nas duas provas catalogadas.

## 10. Síntese

Estruturado (esquema fixo, SQL), semiestruturado (etiquetas, JSON/XML), não estruturado (sem modelo; texto, mídia). Armazenamento e análise diferem; extrair estrutura para o BI; atenção a privacidade e governança.

## 11. Pontos para a futura produção de questões (registro)

Classificação de exemplos; relação entre tipo de dado e armazenamento; esquema na escrita × na leitura; técnicas de análise por tipo.

## 12. Referências

- AWS. *What is structured data?* — **verificada em 2026-10-31** (definições dos três tipos).
- Literatura de Big Data e mineração de texto — **de memória, não verificada**.
- Edital Transpetro nº 04/2026.4, Anexo IV, item 7.4.
