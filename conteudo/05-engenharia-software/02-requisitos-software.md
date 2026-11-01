---
modulo: 05-engenharia-software
arquivo: 02-requisitos-software
itens_edital:
  - "5.1 Levantamento, análise e gerenciamento de requisitos"
ids_matriz: ["E5-042"]
escopo: "A — conteúdo expresso no edital. Casos de uso e histórias do usuário são desenvolvidos aqui no que concerne a requisitos; a modelagem UML está em `05-analise-e-projeto.md` e as histórias do usuário no Módulo 6 (item 6.2)."
tipo_conteudo: "teoria"
status: "VALIDADO"
ultima_atualizacao: "2026-10-31"
---

# Levantamento, Análise e Gerenciamento de Requisitos

**Módulo:** M05 — Engenharia de software
**Texto oficial (Anexo IV):** 5.1 "Levantamento, análise e gerenciamento de requisitos".
**Escopo:** A. Referenciais de apoio: ISO/IEC/IEEE 29148:2018 (engenharia de requisitos; existência confirmada em catálogo, conteúdo não consultado) e guias de análise de negócio.
**Status:** `VALIDADO` (aprovado pelo usuário em 2026-10-31, com ressalvas: interpretação dos itens 5.2 e 5.5 a confirmar; normas ISO, princípios ISTQB e vários referenciais de memória não verificados em fonte primária — ver `docs/qualidade/relatorio-producao-modulo-05.md`).

**Objetivos de aprendizagem.** (1) Definir requisito e classificar seus tipos (funcional, não funcional, restrição; negócio, usuário, sistema); (2) aplicar técnicas de levantamento; (3) analisar, negociar e priorizar requisitos; (4) especificar e validar requisitos com qualidade; (5) gerenciar mudanças e rastreabilidade.

---

## 1. Introdução

**Requisito** é uma condição ou capacidade que o sistema deve satisfazer para resolver um problema ou alcançar um objetivo das partes interessadas. Erros de requisitos são **os mais caros de corrigir** quanto mais tarde forem descobertos, pois afetam projeto, código, testes e documentação. A **engenharia de requisitos** é o conjunto de atividades para **descobrir, analisar, documentar, validar e gerenciar** requisitos ao longo de todo o ciclo de vida. O item 5.1 destaca três grupos: **levantamento** (elicitação), **análise** e **gerenciamento**.

*Relações:* os requisitos orientam o projeto (arquivo `05`) e os testes de aceitação (arquivo `06`); as histórias do usuário (Módulo 6) e o *backlog* do Scrum (Módulo 2) são formas ágeis de registrar requisitos; os requisitos de segurança e privacidade relacionam-se com o Módulo 9 e a LGPD (Módulo 4).

## 2. Tipos de requisitos

### 2.1 Por nível e origem

| Tipo | Descrição | Exemplo (didático) |
|---|---|---|
| **De negócio** | Objetivos e necessidades da organização | Reduzir em 30% o tempo de abertura de ordens de serviço |
| **De partes interessadas/usuário** | O que cada grupo precisa do sistema | O técnico precisa registrar ordens em campo |
| **De solução** (sistema) | Como o sistema atende às necessidades | O sistema deve permitir registro por dispositivo móvel |
| **De domínio** | Regras do domínio de aplicação ou da legislação | O cálculo deve seguir norma regulatória aplicável |
| **De transição** | Necessários para migrar ou implantar | Migrar o cadastro de equipamentos existente |

### 2.2 Funcionais, não funcionais e restrições

| Tipo | Define | Exemplos (didáticos) |
|---|---|---|
| **Funcional (RF)** | **O que o sistema deve fazer**: serviços, funções, comportamento, cálculos, tratamento de entradas e saídas | "O sistema deve calcular o tempo de parada de um equipamento a partir das horas de início e fim"; "o sistema deve permitir cadastrar uma ordem de serviço" |
| **Não funcional (RNF)** | **Como o sistema deve ser**: **qualidade** e restrições sobre os serviços (desempenho, segurança, usabilidade, confiabilidade, disponibilidade, manutenibilidade, portabilidade, conformidade) | "O sistema deve responder consultas em até 2 segundos"; "os dados devem trafegar criptografados"; "disponibilidade de 99,5%"; "interface acessível" |
| **Restrição** | Limitações impostas ao projeto ou à solução (tecnologia, norma, orçamento, prazo, plataforma, padrão obrigatório) | "O sistema deve ser implantado na nuvem do contrato corporativo" |

*Regras práticas de distinção:*

- Se o requisito descreve **uma função ou cálculo que o sistema executa**, é **funcional**.
- Se descreve **um atributo de qualidade** (desempenho, segurança, usabilidade) ou **uma condição de operação**, é **não funcional**.
- Requisitos não funcionais costumam **afetar o sistema como um todo**, e não uma única função; são **mensuráveis** quando bem escritos ("até 2 segundos", e não "rápido").
- Uma mesma necessidade pode gerar RF e RNF (por exemplo, "autenticar usuário" é funcional; "bloquear após cinco tentativas e criptografar senhas" são restrições de segurança, em geral não funcionais).

**Classificação dos RNF** segue os atributos de qualidade (por exemplo, a norma ISO/IEC 25010, arquivo `01`): desempenho, compatibilidade, usabilidade, confiabilidade, segurança, manutenibilidade, portabilidade.

## 3. O processo de engenharia de requisitos

```text
Levantamento ──► Análise e negociação ──► Especificação ──► Validação
      ▲                                                          │
      └───────────── Gerenciamento (mudanças, rastreabilidade) ◄─┘
```

As atividades são **iterativas** e se sobrepõem; em ambientes ágeis ocorrem de forma contínua.

## 4. Levantamento (elicitação) de requisitos

**Objetivo:** descobrir as necessidades das partes interessadas, o domínio e as restrições. Principais **fontes**: usuários e clientes, especialistas do domínio, documentos (normas, contratos, manuais), processos de negócio atuais, sistemas existentes, observação do trabalho.

| Técnica | Descrição | Pontos fortes | Limitações |
|---|---|---|---|
| **Entrevistas** | Conversa estruturada ou aberta com partes interessadas | Profundidade, esclarecimento | Depende do entrevistado; demorada |
| **Questionários** | Perguntas padronizadas a muitos respondentes | Escala, baixo custo | Pouca profundidade |
| **Observação (etnografia)** | Observar o trabalho real | Revela práticas implícitas | Consome tempo; pode alterar o comportamento |
| **Oficinas (*workshops*, JAD)** | Sessões facilitadas com várias partes interessadas | Consenso rápido | Exige facilitação e agenda |
| ***Brainstorming*** | Geração livre de ideias | Criatividade | Precisa de triagem posterior |
| **Análise de documentos e sistemas legados** | Estudar documentação e funcionalidades existentes | Rápida | Documentos desatualizados |
| **Prototipação** | Protótipos para obter retorno concreto | Reduz mal-entendidos | Risco de confundir protótipo com produto |
| **Cenários e casos de uso** | Descrição de interações em situações concretas | Foco no uso | Exigem validação |
| **Histórias do usuário e personas** | Necessidades em linguagem do usuário (Módulo 6) | Simples; ágeis | Precisam de detalhamento |
| **Análise de dados e de uso** | Métricas e registros de uso | Evidência objetiva | Exige dados |

*Dificuldades típicas:* usuários que **não sabem** articular o que precisam; requisitos **implícitos** (conhecimento tácito); **conflitos** entre partes interessadas; **mudança** durante o projeto; linguagem técnica distinta; **escopo ampliado** sem controle (*scope creep*).

## 5. Análise e negociação

**Objetivos:** entender, refinar, modelar e resolver problemas dos requisitos levantados.

- **Classificação e organização:** agrupar por tipo, componente e prioridade.
- **Modelagem:** casos de uso, diagramas (arquivo `05`), modelos de processo e de dados.
- **Detecção de conflitos, ambiguidades, lacunas e duplicidades.**
- **Negociação:** resolver conflitos entre partes interessadas e entre necessidades e restrições (custo, prazo, viabilidade técnica).
- **Análise de viabilidade:** técnica, econômica, operacional, legal e de cronograma.
- **Priorização:** decidir o que é feito primeiro.

| Técnica de priorização | Descrição |
|---|---|
| **MoSCoW** | **M**ust have (essencial), **S**hould have (importante), **C**ould have (desejável), **W**on't have (não agora) |
| **Modelo de Kano** | Classifica atributos em básicos (esperados), de desempenho (quanto mais, melhor) e de encantamento |
| **Votação/pontuação** | Partes interessadas atribuem pontos |
| **Valor × esforço (matriz)** | Prioriza alto valor e baixo esforço |
| **Análise de custo-benefício e risco** | Ordena por retorno e risco |

## 6. Especificação

**Especificar** é registrar os requisitos de modo **claro, completo e verificável**. Formas:

| Forma | Observação |
|---|---|
| **Documento de especificação de requisitos de software (ERS/SRS)** | Estrutura tradicional; a norma **ISO/IEC/IEEE 29148:2018** trata da engenharia de requisitos (substitui normas anteriores, como a IEEE 830) |
| **Casos de uso** | Descrição de interações entre atores e sistema (arquivo `05`) |
| **Histórias do usuário** + **critérios de aceitação** | "Como [papel], quero [funcionalidade], para [benefício]"; critérios podem seguir o formato *Dado–Quando–Então* (Módulo 6 e arquivo `06`) |
| **Modelos** | Diagramas UML, fluxos, protótipos |
| ***Product backlog*** | Lista priorizada de itens (Scrum, Módulo 2) |

**Caso de uso (visão geral):** descreve uma **interação entre um ator e o sistema** que produz um **resultado de valor** para o ator; um **cenário** é uma sequência específica de passos (principal e alternativos). Elementos: **nome**, **ator**, **pré-condições**, **fluxo principal**, **fluxos alternativos e de exceção**, **pós-condições**.

**Qualidade de um requisito (atributos desejados):** **necessário**, **claro/não ambíguo**, **completo**, **consistente**, **verificável (testável)**, **viável**, **rastreável**, **singular** (uma única exigência) e **independente de implementação** quando possível.

| Exemplo de requisito deficiente | Problema | Versão melhorada |
|---|---|---|
| "O sistema deve ser rápido" | Ambíguo, não mensurável | "O sistema deve exibir os resultados da consulta de ordens em até 2 segundos para até 10.000 registros" |
| "O sistema deve ser fácil de usar e seguro" | Dois requisitos em um; vago | Separar em RNF de usabilidade e de segurança, cada um mensurável |
| "O sistema deve usar tecnologia X" (sem justificativa) | Impõe solução sem necessidade | Manter só se for **restrição** real |

## 7. Validação

**Objetivo:** garantir que os requisitos **representam o que as partes interessadas realmente querem** (validação) e são **corretos e consistentes** (verificação dos requisitos). Técnicas: **revisões e inspeções** (com usuários e especialistas), **prototipação**, **elaboração de casos de teste** a partir dos requisitos (se um requisito não é testável, é deficiente), **leitura por perspectiva**, **simulação de cenários**, **aceite formal** pelos patrocinadores. Relaciona-se à **verificação, validação e teste** do item 5.4 (arquivo `06`).

## 8. Gerenciamento de requisitos

**Gerenciar requisitos** é controlar o conjunto de requisitos ao longo do projeto: manter a **linha de base**, **rastrear**, **controlar mudanças** e **comunicar**.

| Atividade | Descrição |
|---|---|
| **Linha de base de requisitos** | Conjunto aprovado de requisitos, ponto de referência para mudanças |
| **Controle de mudanças** | Solicitar, avaliar impacto (escopo, prazo, custo, risco), aprovar e registrar; participação de um **comitê de controle de mudanças** quando necessário (Módulo 3, controle integrado de mudanças) |
| **Rastreabilidade** | Ligar cada requisito à sua **origem** (necessidade) e aos **elementos derivados** (projeto, código, testes) |
| **Gestão de versões e estado** | Proposto, aprovado, implementado, verificado, rejeitado |
| **Gestão de volatilidade e de riscos** | Medir a taxa de mudança de requisitos |
| **Comunicação** | Manter as partes interessadas informadas |
| **Ferramentas** | Repositórios de requisitos, gestão de *backlog*, gestão de configuração |

**Matriz de rastreabilidade (exemplo didático):**

| Necessidade | Requisito | Elemento de projeto | Caso de teste |
|---|---|---|---|
| N-01 Registrar ordens em campo | RF-05 Cadastrar ordem pelo móvel | Componente `OrdemServico` | CT-12, CT-13 |
| N-02 Reduzir tempo de resposta | RNF-02 Resposta ≤ 2 s | Índice sobre `ordem(data_abertura)` | CT-40 (carga) |

*Rastreabilidade ajuda a **análise de impacto** (o que muda se um requisito mudar), a **cobertura de testes** e a **conformidade**.*

### 8.1 Requisitos em abordagens ágeis

Nas abordagens ágeis (Módulo 2), requisitos são tratados **continuamente**: **histórias** no *backlog*, refinadas e priorizadas pelo *Product Owner*; **critérios de aceitação** e **Definição de Pronto** em cada item; mudança **bem-vinda**; documentação **suficiente**, não exaustiva. Os mesmos princípios (clareza, testabilidade, rastreabilidade) permanecem.

## 9. Comparações conceituais

| Conceito A | Conceito B | Diferença principal |
|---|---|---|
| Requisito funcional | Requisito não funcional | O que o sistema faz × como/qualidade com que faz |
| Requisito não funcional | Restrição | Atributo de qualidade × limitação imposta à solução |
| Requisito de negócio | Requisito de sistema | Objetivo da organização × capacidade da solução |
| Levantamento | Análise | Descobrir necessidades × refinar, modelar, negociar, priorizar |
| Verificação de requisitos | Validação de requisitos | Corretos e consistentes × representam o que o cliente quer |
| Caso de uso | História do usuário | Interação estruturada com fluxos × necessidade breve em linguagem do usuário |
| Rastreabilidade | Controle de mudanças | Ligação entre itens × processo de aprovação de alterações |
| Linha de base | Backlog | Conjunto aprovado e controlado × lista priorizada e dinâmica |

## 10. Aplicações e cenários

**Cenário (didático): sistema de gestão de manutenção.** Entrevistas com técnicos, observação em campo e análise dos formulários atuais revelam a necessidade de **registrar ordens sem conectividade**. Gera-se um **RF** ("registrar ordem offline e sincronizar depois") e **RNF** (segurança dos dados no dispositivo, desempenho de sincronização). Na análise, conflito: a área jurídica exige **registro de auditoria**; o time negocia o escopo. Prioriza-se por **MoSCoW**, valida-se com **protótipo** e escreve-se o **critério de aceitação**. Uma mudança posterior (novo campo regulatório) passa pelo **controle de mudanças**, com análise de impacto pela **rastreabilidade**. *Limitação:* sem acesso aos usuários reais, requisitos ficam enviesados.

## 11. Atenção para a prova

*Inferência técnica e recomendação pedagógica; sem atribuir frequência à banca.*

- **Funcional** = função/serviço/cálculo/comportamento; **não funcional** = qualidade ou restrição (desempenho, segurança, usabilidade, interface com dispositivos, criptografia, tempo de resposta, disponibilidade, portabilidade).
- Um enunciado que dá uma lista com **uma única alternativa que descreve cálculo ou função** costuma indicar o **requisito funcional**; as demais, atributos de qualidade e restrições.
- **Caso de uso** descreve a **interação entre um ator e o sistema**; um cenário é **uma** sequência de uso.
- Atributos de bom requisito: **verificável, não ambíguo, completo, consistente, rastreável**.
- Mudanças devem ser controladas e ter **impacto avaliado**.
- *Evidência histórica (amostra de duas provas):* a Prova 6 de 2023 (Q24) pediu o requisito **funcional** em uma lista que mesclava funcionais, de interface, de operação, de desempenho e de segurança; a Prova 15 de 2018 (Q27) perguntou o que as **representações textuais de casos de uso** demonstram (uma interação entre um ator e o sistema). Duas provas não permitem inferir frequência.

## 12. Síntese

- Requisito: condição ou capacidade necessária; níveis: negócio, partes interessadas, solução, domínio, transição.
- RF (o que) × RNF (como; qualidade) × restrições.
- Processo: levantamento → análise/negociação → especificação → validação; gerenciamento contínuo.
- Técnicas: entrevistas, questionários, observação, *workshops*, protótipos, cenários/casos de uso, histórias.
- Priorização: MoSCoW, Kano, valor×esforço.
- Qualidade: necessário, claro, completo, consistente, verificável, viável, rastreável.
- Gerenciamento: linha de base, controle de mudanças, rastreabilidade, versões, volatilidade.

## 13. Pontos para a futura produção de questões (registro)

Conceitos: RF, RNF, restrições; técnicas de levantamento; priorização; caso de uso; rastreabilidade. Distinções: RF×RNF; verificação×validação de requisitos; caso de uso×história. Interpretação: classificar requisitos em um cenário; escolher a técnica de levantamento; identificar o defeito de um requisito.

## 14. Referências

- ISO/IEC/IEEE 29148:2018 — *Systems and software engineering — Life cycle processes — Requirements engineering*: **existência e data (30/11/2018) confirmadas em catálogo (BSI)**; conteúdo **não consultado**.
- Técnicas de levantamento, MoSCoW, Kano, caso de uso e atributos de qualidade de requisitos: conhecimento geral do autor do material (SWEBOK, SOMMERVILLE, PRESSMAN, BABOK) — **não verificado online nesta etapa**.
- Edital Transpetro nº 04/2026.4, Anexo IV, item 5.1.
