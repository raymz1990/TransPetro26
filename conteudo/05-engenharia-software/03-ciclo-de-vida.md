---
modulo: 05-engenharia-software
arquivo: 03-ciclo-de-vida
itens_edital:
  - "5.2 Ciclo de vida de sistemas e seus paradigmas"
ids_matriz: ["E5-043"]
escopo: "A — conteúdo expresso no edital. 'Paradigmas' é lido como paradigmas (modelos) de ciclo de vida e de desenvolvimento (sequencial, iterativo, incremental, evolutivo, ágil); os paradigmas de análise e programação (estruturado e orientado a objetos) estão em `04-paradigmas.md` (item 5.3)."
tipo_conteudo: "teoria"
status: "VALIDADO"
ultima_atualizacao: "2026-10-31"
---

# Ciclo de Vida de Sistemas e seus Paradigmas

**Módulo:** M05 — Engenharia de software
**Texto oficial (Anexo IV):** 5.2 "Ciclo de vida de sistemas e seus paradigmas".
**Nota de interpretação:** a expressão "seus paradigmas" não é detalhada; adotou-se a leitura de **paradigmas (modelos) de ciclo de vida**. A abrangência deve ser confirmada pelo usuário; o texto cobre também o Processo Unificado e as abordagens ágeis, por serem modelos de ciclo de vida citados em provas anteriores.
**Status:** `VALIDADO` (aprovado pelo usuário em 2026-10-31, com ressalvas: interpretação dos itens 5.2 e 5.5 a confirmar; normas ISO, princípios ISTQB e vários referenciais de memória não verificados em fonte primária — ver `docs/qualidade/relatorio-producao-modulo-05.md`).

**Objetivos de aprendizagem.** (1) Definir ciclo de vida e processo; (2) descrever os principais modelos (cascata, V, prototipação, incremental, iterativo, espiral, Processo Unificado, ágil); (3) diferenciar modelos sequenciais de iterativos e incrementais; (4) escolher o modelo conforme o contexto.

---

## 1. Introdução

**Ciclo de vida** é o conjunto de **fases e atividades** pelas quais um sistema passa da concepção à desativação. **Modelo de ciclo de vida** (ou **modelo de processo**) é uma **representação abstrata** de como essas atividades se organizam, se ordenam e se repetem. Cada modelo é um **paradigma** de desenvolvimento, com premissas sobre estabilidade dos requisitos, risco e participação do cliente. Não existe um modelo universalmente melhor; escolhe-se conforme o **contexto**.

*Relações:* o ciclo de vida de **projeto** (Módulo 2, arquivo `05`) e o de **desenvolvimento** de software convivem; os requisitos (arquivo `02`), o projeto (arquivo `05`), os testes (arquivo `06`) e os ambientes de integração e entrega (arquivo `07`) distribuem-se de forma diferente em cada modelo.

## 2. Atividades fundamentais

| Atividade | Resultado típico |
|---|---|
| **Levantamento e análise de requisitos** | Especificação de requisitos |
| **Projeto (arquitetura e detalhado)** | Modelos e especificação de projeto |
| **Implementação (codificação)** | Código-fonte |
| **Verificação, validação e testes** | Relatórios de teste, defeitos corrigidos |
| **Implantação (entrega)** | Sistema em produção |
| **Manutenção e evolução** | Novas versões |
| **Atividades de apoio** | Gestão de projeto, de configuração, da qualidade, documentação |

## 3. Classificação dos paradigmas de ciclo de vida

| Paradigma | Característica central |
|---|---|
| **Sequencial (linear)** | Fases executadas **uma após a outra**; a próxima só começa quando a anterior termina |
| **Iterativo** | O desenvolvimento **repete ciclos** refinando requisitos, projeto e código |
| **Incremental** | O sistema é entregue **em partes funcionais** sucessivas (incrementos) |
| **Evolutivo** | O sistema **evolui** a partir de versões iniciais (por exemplo, protótipos evolutivos) |
| **Ágil** | Iterativo e incremental com **ciclos curtos**, feedback contínuo e mudança bem-vinda (Módulo 2) |
| **Baseado em reuso (componentes)** | Montagem de sistemas a partir de componentes existentes |

*Observação:* **iterativo** e **incremental** são ideias distintas, frequentemente combinadas (iterativo-incremental). **Iterar** é revisitar e refinar; **incrementar** é acrescentar partes.

## 4. Principais modelos

### 4.1 Codificar e corrigir (*code and fix*)

Programa-se e corrige-se sem planejamento formal. Útil apenas em sistemas muito pequenos ou descartáveis; sem requisitos nem projeto claros, a manutenção torna-se cara. É um **antimodelo** de referência.

### 4.2 Modelo em cascata (*waterfall*)

**Fases sequenciais e lineares**: requisitos → projeto → implementação → testes (integração e sistema) → implantação → manutenção. **Cada fase depende da conclusão da anterior** e produz documentos que a seguinte usa; uma variante com **retroalimentação** permite voltar a fase anterior.

| Vantagens | Limitações |
|---|---|
| Simples e fácil de gerenciar; marcos e documentação claros | Pressupõe **requisitos estáveis** e bem conhecidos |
| Adequado a sistemas bem definidos e a contratos rígidos | **Mudanças tardias** são custosas; o cliente só vê o produto no fim |
| Disciplina de especificação | Riscos descobertos tarde; entrega de valor tardia |

### 4.3 Modelo em V

Variação **sequencial** do cascata que enfatiza a **relação entre cada fase de desenvolvimento e um nível de teste** correspondente (verificação e validação): requisitos ↔ teste de aceitação; especificação do sistema ↔ teste de sistema; projeto arquitetural ↔ teste de integração; projeto detalhado ↔ teste de unidade; a implementação fica no vértice.

```text
 Requisitos ───────────────────────────────► Teste de aceitação
   Especificação do sistema ─────────────► Teste de sistema
      Projeto arquitetural ───────────► Teste de integração
         Projeto detalhado ───────► Teste de unidade
                    \                 /
                     Implementação
```

*Vantagem:* planejar os testes **desde o início**. *Limitação:* mesma rigidez do cascata.

### 4.4 Prototipação

Constrói-se um **protótipo** para esclarecer requisitos e obter retorno do usuário. **Descartável (*throwaway*)**: usado para aprender e depois jogado fora; **evolutiva**: o protótipo é refinado até virar o sistema. *Vantagem:* reduz mal-entendidos de requisitos. *Riscos:* tratar protótipo como produto final; qualidade e arquitetura fracas (Módulo 6: prototipação e MVP).

### 4.5 Modelo incremental

Os requisitos são divididos em **incrementos**; cada incremento percorre as atividades e entrega **parte do sistema utilizável**. Os primeiros incrementos costumam conter as funções mais importantes. *Vantagem:* valor entregue cedo; menor risco. *Limitações:* exige arquitetura capaz de crescer; integração contínua dos incrementos.

### 4.6 Modelo iterativo

O desenvolvimento ocorre em **iterações**; cada uma produz uma versão mais completa e refinada, com revisão de requisitos e projeto. Foco em **gerenciar o risco e aprender**. Combinado com o incremental, é a base do Processo Unificado e dos métodos ágeis.

### 4.7 Modelo em espiral (Boehm)

**Orientado a riscos**: o desenvolvimento percorre **voltas (espiras)**; a cada volta executam-se quatro tipos de atividade: **determinar objetivos, alternativas e restrições**; **avaliar alternativas e reduzir riscos** (prototipação, simulação); **desenvolver e verificar** o produto da volta; **planejar a próxima volta**. A decisão de seguir depende da análise de riscos. *Vantagem:* adequado a sistemas grandes e de alto risco. *Limitação:* exige competência em análise de riscos; complexo e custoso para projetos pequenos.

### 4.8 Desenvolvimento baseado em componentes e reuso

Monta o sistema a partir de **componentes reutilizáveis** (internos, de terceiros, serviços). Reduz esforço, mas depende da disponibilidade de componentes e de sua integração.

### 4.9 Processo Unificado (PU/RUP)

**Processo iterativo e incremental, dirigido por casos de uso, centrado na arquitetura e orientado a riscos**, associado à UML (arquivo `05`). Organiza-se em **quatro fases** e **disciplinas**:

| Fase | Objetivo principal | Foco |
|---|---|---|
| **Concepção (*Inception*)** | Estabelecer o **escopo** e a **viabilidade** (*business case*), identificar riscos principais | Visão do projeto, casos de uso críticos, estimativas iniciais |
| **Elaboração (*Elaboration*)** | **Definir e estabilizar a arquitetura** (base arquitetural executável), detalhar a maioria dos requisitos e **mitigar os principais riscos** | Arquitetura, planejamento detalhado |
| **Construção (*Construction*)** | Desenvolver o restante do sistema (incrementos) | Código, testes |
| **Transição (*Transition*)** | Entregar o produto ao usuário: implantação, treinamento, correções | Versões beta, aceitação |

*Marcos de fase (nomenclatura do RUP):* objetivos do ciclo de vida (fim da concepção), **arquitetura do ciclo de vida** (fim da elaboração), capacidade operacional inicial (fim da construção) e liberação do produto (fim da transição). *(Nomenclatura de memória; não verificada online.)*

**Disciplinas** (atividades que se repetem em cada iteração, com ênfase variável por fase): modelagem de negócio, requisitos, análise e projeto, implementação, teste, implantação, gerência de configuração e mudanças, gerência de projeto e ambiente.

*Atenção:* as fases do PU são **de gerenciamento** (concepção, elaboração, construção, transição); **não** são as atividades técnicas (requisitos, projeto, código, teste), que ocorrem em todas as fases.

### 4.10 Métodos ágeis

Abordagens **iterativas e incrementais** baseadas no Manifesto Ágil (Módulo 2, arquivo `02`): **Scrum** (Sprints), **Extreme Programming (XP)**, **Kanban**, entre outras. Características: entregas frequentes, adaptação, colaboração com o cliente e equipes autogerenciadas. Práticas de engenharia comuns no XP: **desenvolvimento orientado a testes (TDD)**, **programação em pares**, **refatoração**, **integração contínua**, entregas pequenas e frequentes, propriedade coletiva do código, padrões de codificação.

### 4.11 DevOps, entrega contínua e ciclos contínuos

Ciclos em que **desenvolvimento e operação** colaboram e **automatizam** compilação, testes, integração e implantação, permitindo entregas muito frequentes (arquivo `07`). Complementam métodos ágeis e transformam o final do ciclo de vida (implantação, operação, monitoramento) em **fluxo contínuo**.

### 4.12 Referencial de processos: ISO/IEC/IEEE 12207

Norma de **processos de ciclo de vida de software** (agrupados, por exemplo, em processos de acordo, organizacionais, de gerenciamento técnico e técnicos). Não prescreve um modelo único; é **referencial** para definir processos. *(Descrição geral; norma e edição não verificadas online.)*

## 5. Comparação entre os modelos

| Critério | Cascata | V | Prototipação | Incremental | Iterativo | Espiral | PU/RUP | Ágil |
|---|---|---|---|---|---|---|---|---|
| **Natureza** | Sequencial | Sequencial | Evolutivo | Incremental | Iterativo | Iterativo, orientado a risco | Iterativo e incremental | Iterativo e incremental |
| **Requisitos estáveis?** | Sim | Sim | Não | Parcialmente | Não | Não | Parcialmente | Não |
| **Entrega de valor** | No fim | No fim | Protótipo | A cada incremento | A cada versão | A cada volta | A cada iteração | Frequente |
| **Mudanças** | Custosas | Custosas | Fáceis | Moderadas | Fáceis | Fáceis | Moderadas | Bem-vindas |
| **Foco em riscos** | Baixo | Baixo | Médio | Médio | Médio | **Alto** | **Alto** | Alto (feedback) |
| **Documentação** | Extensa | Extensa | Variável | Média | Média | Média | Média/alta | Suficiente |
| **Adequado a** | Escopo estável, contratos fechados | Sistemas críticos com testes planejados | Requisitos incertos | Sistemas que crescem por partes | Requisitos que evoluem | Grandes sistemas de alto risco | Sistemas grandes com arquitetura | Produtos com mudança frequente |

### 5.1 Como escolher

Considere: **estabilidade dos requisitos**, **tamanho e criticidade**, **risco**, **disponibilidade do cliente**, **cultura da organização**, **experiência da equipe**, **exigências contratuais e regulatórias** e **possibilidade de entregas parciais**. Muitas organizações adotam **abordagens híbridas** (por exemplo, marcos e conformidade preditivos com execução ágil).

## 6. Comparações conceituais

| Conceito A | Conceito B | Diferença principal |
|---|---|---|
| Modelo sequencial | Modelo iterativo | Uma passagem por fase, sem retorno planejado × ciclos repetidos de refinamento |
| Iterativo | Incremental | Refinar repetindo × entregar partes sucessivas |
| Cascata | Modelo em V | Fases lineares × fases lineares com testes correspondentes explícitos |
| Prototipação descartável | Evolutiva | Protótipo jogado fora × protótipo que vira o sistema |
| Espiral | Cascata | Orientado a riscos e iterativo × sequencial e orientado a documentos |
| Fases do PU | Disciplinas do PU | Etapas de gerenciamento ao longo do tempo × atividades técnicas repetidas |
| Elaboração | Construção | Define a arquitetura e mitiga riscos × desenvolve o restante |
| Ciclo de vida do projeto | Ciclo de vida do produto/software | Fases do projeto (Módulo 2) × fases do desenvolvimento/vida do software |

## 7. Aplicações e cenários

**Cenário (didático): sistema com requisitos regulatórios fixos e módulos de interface incertos.** A parte regulatória, bem definida e com contrato de escopo fechado, usa **modelo em V** (testes planejados desde os requisitos). Os módulos de interface, com requisitos incertos, usam **iterações curtas e prototipação**. O conjunto adota abordagem **híbrida** (Módulo 2, item 2.7). *Limitação:* exige governança para integrar relatórios e marcos de ambas as abordagens.

**Cenário (didático): no Processo Unificado.** Ao fim da **elaboração**, a equipe tem a **arquitetura** executável e validada e os riscos principais reduzidos; pode então estimar com mais segurança o restante do projeto, que ocorre na **construção**.

## 8. Atenção para a prova

*Inferência técnica e recomendação pedagógica; sem atribuir frequência à banca.*

- **Modelos sequenciais** (cada fase só começa quando a anterior termina): **cascata** e **em V**. **Incremental, iterativo, espiral e ágil** não são puramente sequenciais.
- O **cascata** caracteriza-se por **fases sequenciais e lineares, cada uma dependendo da conclusão da anterior**; não por Sprints, nem por revisão constante de requisitos.
- No **Processo Unificado**, o **objetivo da fase de elaboração** é **definir a arquitetura** (além de mitigar riscos e detalhar requisitos); o **escopo e a viabilidade** são da **concepção**.
- **Espiral**: risco; **prototipação**: requisitos incertos.
- *Evidência histórica (amostra de duas provas):* a Prova 6 de 2023 perguntou (Q25) quais modelos de ciclo de vida são sequenciais (resposta: em V e cascata) e (Q54) a característica do **modelo em cascata**; a Prova 15 de 2018 perguntou (Q23) o objetivo da **fase de elaboração do Processo Unificado**. Duas provas não permitem inferir frequência.

## 9. Síntese

- Ciclo de vida: fases e atividades da concepção à desativação; modelo = representação do processo.
- Paradigmas: sequencial, iterativo, incremental, evolutivo, ágil, reuso.
- Cascata e V: sequenciais; V relaciona fases e testes.
- Prototipação (descartável/evolutiva); incremental (partes); iterativo (refinamento); espiral (riscos).
- PU: concepção (escopo/viabilidade), elaboração (arquitetura), construção, transição.
- Ágil/DevOps: ciclos curtos e contínuos.
- Escolha pelo contexto; abordagens híbridas.

## 10. Pontos para a futura produção de questões (registro)

Conceitos: modelos de ciclo de vida; fases do PU. Distinções: sequencial×iterativo×incremental; cascata×V; descartável×evolutiva; fases×disciplinas. Interpretação: identificar o modelo a partir da descrição; escolher o modelo para um cenário.

## 11. Referências

- Descrições dos modelos (cascata, V, prototipação, incremental, iterativo, espiral de Boehm, Processo Unificado/RUP, XP) e da ISO/IEC/IEEE 12207: conhecimento geral do autor do material (SOMMERVILLE, PRESSMAN, SWEBOK, JACOBSON/BOOCH/RUMBAUGH) — **não verificado online** (edições, anos e nomenclatura em português pendentes). Sobre o modelo em espiral, uma fonte secundária indica que Boehm o descreveu em 1986 e o divulgou em 1988 (revista *Computer*); a referência bibliográfica exata **não foi confirmada**.
- Edital Transpetro nº 04/2026.4, Anexo IV, item 5.2.
