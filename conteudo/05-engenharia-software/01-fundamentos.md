---
modulo: 05-engenharia-software
arquivo: 01-fundamentos
itens_edital:
  - "5 Engenharia de software:"
ids_matriz: ["E5-041", "C5-002"]
escopo: "B — fundamentação complementar (C5-002), fora da contagem oficial; serve ao título do item 5 e aos subitens 5.1 a 5.5."
tipo_conteudo: "teoria"
status: "VALIDADO"
ultima_atualizacao: "2026-10-31"
---

# Fundamentos de Engenharia de Software

**Módulo:** M05 — Engenharia de software
**Classificação de escopo:** **B — fundamentação complementar** (C5-002). O título do item 5 do Anexo IV ("Engenharia de software:") não tem texto próprio além dos subitens 5.1 a 5.5; este arquivo apresenta o vocabulário comum e **não** corresponde a subitem literal. Não o trate como exigência expressa.
**Status:** `VALIDADO` (aprovado pelo usuário em 2026-10-31, com ressalvas: interpretação dos itens 5.2 e 5.5 a confirmar; normas ISO, princípios ISTQB e vários referenciais de memória não verificados em fonte primária — ver `docs/qualidade/relatorio-producao-modulo-05.md`).

**Objetivos de aprendizagem.** (1) Definir software e engenharia de software; (2) distinguir processo, método, técnica e ferramenta; (3) descrever qualidade de software e seus atributos; (4) reconhecer os tipos de manutenção; (5) situar os cinco subitens do item 5 em um mapa.

---

## 1. Introdução

**Software** não é apenas o programa: é o conjunto de **programas, dados, documentação e configurações** que fazem um sistema computacional funcionar. A **engenharia de software** aplica **abordagens sistemáticas, disciplinadas e quantificáveis** (princípios de engenharia) ao desenvolvimento, à operação e à manutenção do software, buscando **qualidade, prazos e custos previsíveis**. Existe porque software é complexo, mutável e dependente das pessoas, e porque projetos informais falham com frequência.

## 2. Conceitos

| Conceito | Definição |
|---|---|
| **Processo de software** | Conjunto estruturado de **atividades** para desenvolver ou evoluir software (especificação, projeto, implementação, validação, evolução) |
| **Ciclo de vida** | Ordenação e relação das atividades e fases ao longo da vida do software (arquivo `03`) |
| **Método/metodologia** | Conjunto de **diretrizes e notações** para executar atividades (por exemplo, análise estruturada, Processo Unificado, Scrum) |
| **Técnica** | Procedimento específico para obter um resultado (entrevista, análise de pontos de função, partição de equivalência) |
| **Ferramenta** | Software que apoia técnicas e métodos (IDE, gerenciador de requisitos, ferramenta de testes) |
| **Artefato** | Produto de trabalho (requisitos, modelos, código, plano de testes) |
| **Produto** × **projeto** | O software que se entrega × o esforço temporário para criá-lo (Módulo 2) |
| **Stakeholders (partes interessadas)** | Pessoas ou grupos afetados pelo software |

**Atividades fundamentais (visão comum a vários modelos):** levantamento e análise de requisitos; projeto (arquitetura e detalhado); construção (codificação); verificação, validação e testes; implantação; manutenção e evolução; **atividades de apoio**: gerência de projeto, gerência de configuração, gerência de requisitos, garantia da qualidade, documentação.

*Mapa do item 5 do edital:*

| Subitem | Tema | Arquivo |
|---|---|---|
| 5.1 | Levantamento, análise e gerenciamento de requisitos | `02-requisitos-software.md` |
| 5.2 | Ciclo de vida de sistemas e seus paradigmas | `03-ciclo-de-vida.md` |
| 5.3 | Modelos, metodologias, técnicas e ferramentas de análise e projeto (estruturado e orientado a objetos) | `04-paradigmas.md` e `05-analise-e-projeto.md` |
| 5.4 | Verificação, validação e teste | `06-verificacao-e-validacao.md` |
| 5.5 | Ambientes de desenvolvimento de software | `07-testes-e-ambientes.md` |

## 3. Qualidade de software

**Qualidade** é o grau em que o produto atende aos **requisitos explícitos e implícitos** das partes interessadas. A norma **ISO/IEC 25010** (série SQuaRE) define um **modelo de qualidade do produto** com **características** subdivididas em subcaracterísticas.

| Edição | Características do modelo de qualidade do produto |
|---|---|
| **ISO/IEC 25010:2011** (fontes secundárias: 8 características, 31 subcaracterísticas) | **Adequação funcional**, **eficiência de desempenho**, **compatibilidade**, **usabilidade**, **confiabilidade**, **segurança**, **manutenibilidade** e **portabilidade** |
| **ISO/IEC 25010:2023** (fontes secundárias: 9 características) | Adequação funcional, eficiência de desempenho, compatibilidade, **capacidade de interação** (antes usabilidade), confiabilidade, segurança, manutenibilidade, **flexibilidade** (antes portabilidade) e **proteção/segurança física (*safety*)** |

*(A edição de 2023 foi confirmada, por fontes secundárias, como publicada em novembro de 2023; os nomes das características em português variam e devem ser conferidos no texto da norma.)*

As características de qualidade são a base dos **requisitos não funcionais** (arquivo `02`) e dos **tipos de teste não funcionais** (arquivo `06`).

**Qualidade do processo × qualidade do produto:** processos maduros tendem a produzir produtos melhores, mas não garantem. **Garantia da qualidade (QA)** concentra-se em **prevenir** defeitos nos processos; **controle de qualidade (QC)**, em **detectar** defeitos nos produtos (relação com o Módulo 3, área de Qualidade).

## 4. Manutenção e evolução

Software muda durante toda a vida. A **manutenção** é a modificação do software após a entrega. Classificação usual:

| Tipo | Objetivo | Exemplo (didático) |
|---|---|---|
| **Corretiva** | Corrigir defeitos | Corrigir cálculo incorreto |
| **Adaptativa** | Adaptar a mudanças no ambiente (sistema operacional, legislação, plataforma) | Atualizar para nova versão de banco de dados |
| **Perfectiva (evolutiva)** | Melhorar ou acrescentar funcionalidades e desempenho | Novo relatório |
| **Preventiva** | Reduzir riscos futuros e melhorar a manutenibilidade | Refatorar módulo complexo |

**Lei da evolução do software (Lehman, visão geral):** sistemas em uso precisam mudar continuamente e, sem esforço de manutenção, sua complexidade cresce e sua qualidade percebida cai. **Dívida técnica** é o custo futuro acumulado por atalhos de projeto ou código.

## 5. Métricas de software (complemento B)

Medidas de **tamanho, complexidade, qualidade e produtividade**: linhas de código, **pontos de função** (tamanho funcional a partir de entradas, saídas, consultas, arquivos lógicos internos e de interface externa), **complexidade ciclomática** (arquivo `06`), densidade de defeitos, cobertura de testes, acoplamento e coesão (arquivo `04`). *Esses tópicos não são subitens literais do edital; aparecem como apoio.*

## 6. Comparações conceituais

| Conceito A | Conceito B | Diferença principal |
|---|---|---|
| Processo | Método | Atividades gerais para criar software × diretrizes e notações específicas |
| Método | Técnica | Conjunto de práticas e notações × procedimento pontual |
| Técnica | Ferramenta | Como fazer × software que apoia |
| Garantia da qualidade | Controle da qualidade | Prevenção nos processos × detecção nos produtos |
| Manutenção corretiva | Perfectiva | Corrige defeitos × melhora ou amplia |
| Produto | Projeto | O software × o esforço de criá-lo |

## 7. Atenção para a prova

*Inferência técnica e recomendação pedagógica; sem atribuir frequência à banca.*

- Distinguir **processo, ciclo de vida, método, técnica e ferramenta**.
- Reconhecer as **características de qualidade** e relacioná-las a requisitos não funcionais.
- Identificar o **tipo de manutenção** a partir da descrição.
- *Evidência histórica (amostra de duas provas):* a Prova 15 de 2018 trouxe questões sobre qualidade e métricas (custo da qualidade, Q26; complexidade ciclomática, Q25; pontos de função, Q30), classificadas como sem item correspondente no edital de 2026. A Prova 6 de 2023 não trouxe questão específica deste arquivo. Duas provas não permitem inferir frequência.

## 8. Síntese

- Engenharia de software: abordagem sistemática ao ciclo de vida do software.
- Processo, método, técnica, ferramenta, artefato.
- Qualidade (ISO/IEC 25010): 8 características (2011) ou 9 (2023, segundo fontes secundárias).
- Manutenção: corretiva, adaptativa, perfectiva, preventiva.
- Mapa: 5.1 requisitos; 5.2 ciclo de vida; 5.3 análise e projeto; 5.4 V&V e teste; 5.5 ambientes.

## 9. Referências

- ISO/IEC 25010 (modelo de qualidade do produto), edições de 2011 e 2023 — existência e número de características **confirmados em fontes secundárias** em 2026-10-31; **texto da norma não consultado** (o site da ISO bloqueou a consulta, HTTP 403, e nenhuma das normas ISO citadas neste módulo pôde ser lida).
- Definições gerais (SWEBOK, SOMMERVILLE, PRESSMAN, Lehman) — citadas de memória, **não verificadas online nesta etapa** (edições e anos pendentes).
- Edital Transpetro nº 04/2026.4, Anexo IV, item 5.
