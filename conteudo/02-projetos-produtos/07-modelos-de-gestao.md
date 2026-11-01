---
modulo: 02-projetos-produtos
arquivo: 07-modelos-de-gestao
itens_edital:
  - "2.7 Modelos e características."
ids_matriz: ["E5-032"]
escopo: "A — conteúdo expresso no edital, com REDAÇÃO GENÉRICA: a abrangência exata de 'Modelos e características' não é esclarecida pelo edital (ver interpretação adotada abaixo)."
tipo_conteudo: "teoria"
status: "VALIDADO"
ultima_atualizacao: "2026-10-31"
---

# Modelos e Características: Modelos de PMO e Modelos de Gestão de Projetos e Produtos

**Módulo:** M02 — Gerenciamento de Projetos e Produtos
**Texto oficial (Anexo IV):** 2.7 "Modelos e características".
**Escopo:** A. **Dúvida registrada (instrução do prompt 02, regra 17):** o item 2.7 aparece logo após **2.6 "Escritório de projetos"** e **não indica o objeto** dos "modelos". Interpretações possíveis: (a) **modelos de escritório de projetos** e suas características (a leitura mais direta, pela vizinhança com 2.6); (b) **modelos (abordagens) de gestão de projetos e produtos** e suas características (preditivo, ágil, híbrido). **Para não omitir nenhuma leitura, este arquivo cobre ambas:** (a) como núcleo e (b) com profundidade proporcional, evitando repetir o que está nos demais arquivos. A interpretação (b) deve ser confirmada pelo usuário.
**Status:** `VALIDADO` (aprovado pelo usuário em 2026-10-31, com ressalvas: textos do PMI e princípios Lean-Agile do SAFe não verificados em fonte primária; interpretação dos itens 2.5 e 2.7 a confirmar — ver `docs/qualidade/relatorio-producao-modulo-02.md`).

**Objetivos de aprendizagem.** (1) Distinguir os modelos de PMO (apoio, controle, diretivo; corporativo, de portfólio, de programa, ágil) e suas características; (2) comparar modelos de gestão (preditivo, iterativo, incremental, ágil, híbrido) e seus critérios de escolha; (3) escolher o modelo adequado a um contexto.

---

## 1. Introdução

Não existe um único modelo ideal de escritório de projetos nem de gestão de projetos. A **escolha depende do contexto**: maturidade, cultura, tipo de projeto, grau de incerteza, estrutura da organização. Este arquivo organiza os modelos mais citados e suas **características**, para permitir comparação e escolha. Os detalhes de cada método estão nos arquivos `02` (Scrum), `03` (Kanban), `04` (SAFe), `05` (PMBOK 7) e `06` (PMO).

## 2. Modelos de escritório de projetos (PMO)

### 2.1 Tipologia clássica (por grau de controle)

| Modelo | Grau de controle | Característica | Atividades típicas | Quando é adequado |
|---|---|---|---|---|
| **De suporte (*supportive*)** | **Baixo** | Papel **consultivo**: fornece modelos, boas práticas, treinamento, acesso a informações e lições aprendidas | Repositório, capacitação, *templates*, apoio a gerentes | Organização com baixa maturidade ou projetos autônomos; adoção voluntária |
| **De controle (*controlling*)** | **Moderado** | Além do suporte, **exige conformidade**: adoção de métodos, modelos, ferramentas e governança | Auditorias, verificação de aderência, relatórios padronizados | Quando se deseja padronização e qualidade sem assumir a gestão dos projetos |
| **Diretivo (*directive*)** | **Alto** | **Assume o controle** dos projetos: os gerentes de projetos pertencem ao PMO e respondem a ele | Gestão direta de projetos, alocação de gerentes, resultados | Projetos críticos e organizações que precisam de forte unificação |

*(Classificação consagrada na literatura do PMI; fontes secundárias a atribuem à 5ª ou à 6ª edição do PMBOK — a edição de origem diverge; verifique a edição em uso. Os três graus de controle (baixo, moderado, alto) foram **confirmados** por fontes secundárias. A 7ª edição trata a estrutura de apoio no contexto da governança, sem repetir essa classificação como estrutura central.)*

Característica comum: quanto mais alto o **grau de controle**, maior a **padronização** e a **autoridade** do PMO, e menor a autonomia dos gerentes e equipes.

### 2.2 Outras classificações (por escopo)

| Modelo | Escopo | Foco |
|---|---|---|
| **PMO de projeto (temporário)** | Um projeto/programa grande | Apoiar o projeto; encerra com ele |
| **PMO departamental/de unidade** | Uma área (por exemplo, TI) | Padronizar e apoiar projetos da unidade |
| **PMO corporativo/estratégico (EPMO)** | Toda a organização | **Alinhar portfólio à estratégia**, governança global |
| **PMO de programa** | Um programa | Coordenar projetos relacionados e benefícios |
| **PMO de portfólio** | Portfólio | Priorização, balanceamento e visão consolidada |
| **PMO ágil / escritório de valor** | Times e fluxos de valor ágeis | Facilitação, transparência, remoção de impedimentos (arquivo `06`) |
| **Centro de excelência** | Prática (por exemplo, ágil) | Desenvolver capacidades e metodologia, sem gerir projetos |

### 2.3 Comparação resumida

| Critério | Suporte | Controle | Diretivo |
|---|---|---|---|
| Autoridade sobre os projetos | Nenhuma ou mínima | Média (exige conformidade) | Alta (controle direto) |
| Papel dos gerentes de projetos | Independentes | Seguem padrões do PMO | Subordinados ao PMO |
| Padronização | Opcional | **Obrigatória** | Obrigatória e integrada |
| Risco principal | Pouca efetividade | Burocracia | Rigidez; concentração de poder |
| Esforço/custo de manutenção | Baixo | Médio | Alto |

## 3. Modelos de gestão de projetos e produtos

### 3.1 Panorama

| Modelo (abordagem) | Ideia central | Planejamento | Entrega | Mudança |
|---|---|---|---|---|
| **Preditivo / em cascata** | Planejar tudo antes; fases **sequenciais e lineares** | Detalhado no início | Ao final (ou por marcos) | Controlada por processo formal; custosa |
| **Em V** (variação preditiva) | Cada fase de desenvolvimento tem uma fase de teste correspondente | Detalhado | Ao final | Controlada |
| **Iterativo** | Repete ciclos refinando a solução | Por ciclo | Versões cada vez mais completas | Incorporada a cada iteração |
| **Incremental** | Entrega **partes funcionais** sucessivas | Por incremento | Incrementos | Parcial |
| **Ágil (adaptativo)** | Iterativo + incremental; feedback frequente | Contínuo, em ondas | **Frequente** (Sprints, fluxo contínuo) | **Esperada** e bem-vinda |
| **Híbrido** | Combina elementos (por exemplo, marcos e orçamento preditivos com execução ágil) | Misto | Misto | Depende da parte |
| **Orientado a fluxo (Kanban)** | Fluxo contínuo e limite de WIP | Contínuo | Contínua | Contínua |
| **Escalado (SAFe)** | Ágil com cadência sincronizada em muitos times | PI Planning | Incrementos por iteração e PI | Em cadência |

*Observação:* modelos de **ciclo de vida de desenvolvimento de software** (cascata, V, espiral, prototipação, incremental, RUP, ágeis) são aprofundados no **Módulo 5, item 5.2**; aqui interessa o **efeito sobre a gestão**.

### 3.2 O modelo em cascata (características)

- **Fases sequenciais e lineares**: requisitos → projeto → construção → teste → implantação → manutenção; **cada fase depende da conclusão da anterior**.
- **Vantagens:** simplicidade, documentação, controle de marcos, adequado a requisitos estáveis.
- **Limitações:** pouco espaço para mudanças tardias; feedback do cliente tardio; entrega de valor só no fim; riscos descobertos tarde.
- **Não** se caracteriza por mudanças de requisitos constantes, pela divisão em Sprints nem por entrega iterativa.

### 3.3 Escolha do modelo: critérios

| Fator | Tende ao **preditivo** | Tende ao **ágil** |
|---|---|---|
| Requisitos | Estáveis e conhecidos | Incertos ou mutáveis |
| Risco de mudança | Baixo | Alto |
| Possibilidade de entregas parciais | Baixa | Alta |
| Regulamentação e contrato rígido | Forte | Fraca ou negociável |
| Envolvimento do cliente | Pontual | Contínuo |
| Cultura | Hierárquica, orientada a plano | Colaborativa, autonomia |
| Tamanho/escala | Obras, infraestrutura física | Produto de software, serviços digitais |

Quando há **partes distintas** no mesmo empreendimento (por exemplo, infraestrutura física e software), o modelo **híbrido** costuma ser indicado; o PMBOK 7ª edição valoriza a **adequação** (arquivo `05`).

### 3.4 Gestão de projeto × gestão de produto nos modelos

| Modelo | Projeto | Produto |
|---|---|---|
| Preditivo | Plano e entrega do projeto | O produto é entregue ao fim do projeto |
| Ágil/Scrum | A Sprint entrega Incrementos | O Product Owner gere o produto continuamente (arquivo `02`) |
| SAFe | ART e PI | Fluxos de valor e portfólio |
| Kanban | Fluxo contínuo | Gestão do fluxo de demandas |

## 4. Comparações conceituais

| Conceito A | Conceito B | Diferença principal |
|---|---|---|
| PMO de suporte | PMO de controle | Aconselha × exige conformidade |
| PMO de controle | PMO diretivo | Padroniza e audita × assume a gestão dos projetos |
| PMO corporativo | PMO de projeto | Permanente, estratégico × temporário e específico |
| PMO | Centro de excelência | Atua na governança e nos projetos × desenvolve capacidade e prática |
| Preditivo | Ágil | Plano antecipado e fases sequenciais × ciclos curtos e mudança bem-vinda |
| Iterativo | Incremental | Refinar por repetição × entregar partes funcionais |
| Híbrido | Ágil puro | Mistura preditivo e ágil × adota princípios ágeis integralmente |

## 5. Aplicações e cenários

**Cenário (didático): escolha do PMO.** Uma empresa com baixa maturidade e equipes autônomas cria primeiro um PMO de **suporte** (modelos e treinamento). Após dois anos, com projetos críticos sem padrão, evolui para PMO de **controle** (revisões de fase e relatórios padronizados). *Limitação:* migrar para o modelo **diretivo** exige mudança de estrutura e de poder.

**Cenário (didático): modelo de gestão.** Um projeto de implantação de infraestrutura física tem escopo estável e fornecedor contratado por preço fixo: **preditivo**. O sistema de monitoramento que a acompanha tem requisitos incertos: **ágil**. O programa que os une adota **híbrido**.

## 6. Atenção para a prova

*Inferência técnica e recomendação pedagógica; sem atribuir frequência à banca.*

- **Dúvida de escopo do item 2.7:** o edital não esclarece. Preparar-se para **tipos de PMO** e para **modelos de gestão (preditivo, ágil, híbrido)**.
- PMO: **suporte (baixo controle) < controle (moderado) < diretivo (alto)**; só o diretivo **gerencia** os projetos.
- Cascata: **fases sequenciais e lineares**; alternativas que atribuem a ela "iterações curtas", "sprints" ou "revisão constante de requisitos" estão trocadas.
- Absolutos ("o PMO **sempre**...", "o ágil **nunca** usa planejamento") costumam ser incorretos.
- *Evidência histórica (amostra de duas provas):* a Prova 6 de 2023 (Q54) pediu a característica do **modelo em cascata** (modelos de ciclo de vida); as duas provas catalogadas **não** trouxeram questão sobre tipos de PMO. Duas provas não permitem inferir frequência.

## 7. Síntese

- PMO: suporte (baixo controle), controle (moderado), diretivo (alto); por escopo: projeto, departamental, corporativo (EPMO), programa, portfólio; ágil e centro de excelência.
- Modelos de gestão: preditivo (cascata, V), iterativo, incremental, ágil, híbrido, fluxo (Kanban), escalado (SAFe).
- Escolha por contexto: incerteza, risco de mudança, entregas parciais, regulamentação, cultura, escala.
- Cascata: fases sequenciais e lineares; ágil: iterações e mudança bem-vinda.

## 8. Pontos para a futura produção de questões (registro)

Conceitos: tipos de PMO; modelos de gestão; critérios de escolha. Distinções: suporte×controle×diretivo; preditivo×ágil×híbrido; iterativo×incremental. Interpretação: indicar o PMO ou o modelo adequado a um cenário; identificar características da cascata.

## 9. Referências

- PROJECT MANAGEMENT INSTITUTE. *PMBOK® Guide*, 6ª ed. (tipologia de PMO) e 7ª ed. (2021; edição **verificada online**). A tipologia e as descrições acima **não foram confrontadas com o texto do PMI** nesta etapa.
- SCRUM, KANBAN e SAFe: fontes citadas nos arquivos `02`, `03` e `04`.
- Edital Transpetro nº 04/2026.4, Anexo IV, item 2.7 (redação genérica; interpretação registrada acima).
