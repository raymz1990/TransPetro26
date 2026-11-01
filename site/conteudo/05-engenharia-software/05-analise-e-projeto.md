---
modulo: 05-engenharia-software
arquivo: 05-analise-e-projeto
itens_edital:
  - "5.3 Uso de modelos, metodologias, técnicas e ferramentas de análise e projeto de sistemas (paradigma estruturado e paradigma orientado a objetos)"
ids_matriz: ["E5-044"]
escopo: "A — conteúdo expresso no edital (modelos, metodologias, técnicas e ferramentas de análise e projeto). Os conceitos dos paradigmas estão em `04-paradigmas.md`. GRASP, estilos arquiteturais e MDA são complemento B."
tipo_conteudo: "teoria"
status: "VALIDADO"
ultima_atualizacao: "2026-10-31"
---

# Análise e Projeto de Sistemas: Modelos, Metodologias, Técnicas e Ferramentas

**Módulo:** M05 — Engenharia de software
**Texto oficial (Anexo IV):** 5.3 "Uso de modelos, metodologias, técnicas e ferramentas de análise e projeto de sistemas (paradigma estruturado e paradigma orientado a objetos)".
**Referencial de modelagem OO:** **UML (*Unified Modeling Language*) 2.5.1**, da OMG (dezembro de 2017), com **14 tipos de diagramas** — contagem e agrupamento **confirmados em fontes secundárias** (o texto da OMG não foi consultado).
**Status:** `VALIDADO` (aprovado pelo usuário em 2026-10-31, com ressalvas: interpretação dos itens 5.2 e 5.5 a confirmar; normas ISO, princípios ISTQB e vários referenciais de memória não verificados em fonte primária — ver `docs/qualidade/relatorio-producao-modulo-05.md`).

**Objetivos de aprendizagem.** (1) Distinguir análise e projeto; (2) construir e interpretar modelos da análise estruturada (DFD, dicionário de dados, especificações de processo, estados, estrutura); (3) construir e interpretar os principais diagramas UML; (4) conhecer metodologias e ferramentas (CASE); (5) relacionar modelos à fase do ciclo de vida.

---

## 1. Introdução

**Análise** responde **"o quê?"**: compreender o problema e os requisitos e representá-los em modelos **independentes de implementação**. **Projeto** responde **"como?"**: definir a **arquitetura** e os detalhes da solução (módulos, classes, dados, interfaces) levando em conta a tecnologia. **Modelo** é uma **abstração** da realidade ou do sistema para compreender, discutir, validar e documentar. **Metodologia** reúne **modelos, notações, processo e orientações**; **técnica** é o procedimento para construir um modelo; **ferramenta** é o software que apoia a modelagem (ferramentas **CASE**).

*Relações:* os modelos derivam dos requisitos (arquivo `02`), seguem o paradigma escolhido (arquivo `04`), alimentam a implementação e os testes (arquivo `06`) e se distribuem conforme o modelo de ciclo de vida (arquivo `03`); o modelo de dados (Módulo 1, arquivo `02`) complementa a análise.

## 2. Paradigma estruturado: modelos e técnicas

### 2.1 Diagrama de fluxo de dados (DFD)

O **DFD** representa o sistema como **processos** que **transformam dados** e como os dados **fluem** entre processos, depósitos e entidades externas, sem indicar a ordem de execução.

| Elemento | Representação (varia por notação) | Significado |
|---|---|---|
| **Processo** | Círculo (Yourdon/DeMarco) ou retângulo de cantos arredondados (Gane–Sarson) | Transforma entradas em saídas |
| **Fluxo de dados** | Seta rotulada | Dados em movimento |
| **Depósito de dados** | Duas linhas paralelas ou retângulo aberto | Dados em repouso (arquivo, tabela) |
| **Entidade externa (terminador)** | Retângulo | Origem ou destino de dados fora do sistema |

**Níveis:** **diagrama de contexto** (o sistema como um único processo e suas entidades externas), **diagrama de nível 0** (principais processos) e **decomposição** em níveis inferiores (processos "primitivos" detalhados em especificações).

**Regras de consistência:** **balanceamento** (as entradas e saídas de um processo no nível superior coincidem com as de seu detalhamento); **conservação de dados** (todo dado que sai de um processo vem de suas entradas); todo fluxo tem **nome**; **depósitos** não trocam dados diretamente entre si (passam por processos); processos não "só consomem" nem "só geram" dados.

*Exemplo (didático):* diagrama de contexto do sistema de ordens de serviço — entidades externas *Técnico* e *Gestor*; fluxos *solicitação de ordem*, *ordem concluída*, *relatório de ordens*.

### 2.2 Dicionário de dados

Registra a **definição de todos os dados** (fluxos, depósitos, elementos). Notação clássica (DeMarco): `=` "é composto de"; `+` "e"; `[ | ]` "ou" (alternativa); `{ }` repetição; `( )` opcional.

```text
Ordem-de-Serviço = Número + Data-Abertura + Equipamento + {Item-de-Serviço} + (Observação)
Equipamento      = Tag + Descrição + [Bomba | Válvula | Compressor]
```

### 2.3 Especificação de processos (mini-especificações)

Descrevem a **lógica dos processos primitivos**: **português estruturado** (pseudocódigo), **tabelas de decisão** (condições × ações), **árvores de decisão** e **fluxogramas**.

### 2.4 Diagrama de transição de estados (DTE)

Representa o **comportamento dinâmico** de entidades ou do sistema: **estados**, **transições**, **eventos** e **ações** (por exemplo, a ordem de serviço: *Aberta → Em execução → Concluída → Encerrada*).

### 2.5 Modelo de dados (DER)

O **diagrama entidade-relacionamento** (Módulo 1, arquivo `02`) é o modelo de **dados** da análise estruturada.

### 2.6 Projeto estruturado: diagrama de estrutura

O **diagrama de estrutura** (ou **de módulos**) mostra a **hierarquia de módulos**, as **chamadas** entre eles e os **dados** trocados (parâmetros). Conceitos: **fan-in** (quantos módulos chamam um módulo) e **fan-out** (quantos módulos um módulo chama); busca-se **alta coesão e baixo acoplamento** (arquivo `04`). A transformação do DFD em estrutura de módulos usa técnicas de **análise de transformação** e **análise de transação**.

### 2.7 Metodologias estruturadas

Metodologias clássicas combinam esses modelos: **Análise Estruturada** (DeMarco; Gane e Sarson), **Projeto Estruturado** (Yourdon e Constantine) e a **Análise Essencial** (que parte de **eventos** do ambiente e separa requisitos essenciais da tecnologia). *(Referências de memória; não verificadas.)*

## 3. Paradigma orientado a objetos: UML

### 3.1 A UML

A **UML** é uma **linguagem gráfica de modelagem** padronizada pela **OMG** para **especificar, visualizar, construir e documentar** sistemas, sobretudo de software. É uma **notação**, **não** uma metodologia: define diagramas, não o processo (o Processo Unificado, arquivo `03`, é um processo que a usa). A UML 2.5.1 reúne **14 diagramas**, em dois grupos:

| Grupo | Diagramas |
|---|---|
| **Estruturais (7)** | **Classes**, **objetos**, **pacotes**, **estrutura composta**, **componentes**, **implantação** (*deployment*), **perfis** |
| **Comportamentais (7)** | **Casos de uso**, **atividades**, **máquina de estados**, e os de **interação**: **sequência**, **comunicação**, **visão geral de interação**, **temporização** |

*Nem todo projeto precisa usar todos os diagramas:* escolhem-se os adequados ao objetivo (princípio de "modelar o suficiente").

### 3.2 Diagrama de casos de uso

Mostra **o que o sistema oferece aos atores**, do ponto de vista externo.

| Elemento | Significado |
|---|---|
| **Ator** | Papel que interage com o sistema (pessoa, sistema, dispositivo) |
| **Caso de uso** | Funcionalidade completa que dá **valor** ao ator |
| **Associação** | Participação do ator no caso de uso |
| **Inclusão (*include*)** | Um caso de uso **sempre** usa o comportamento de outro (reuso) |
| **Extensão (*extend*)** | Um caso de uso **opcionalmente** amplia outro em condições específicas |
| **Generalização** | Atores ou casos de uso especializados |
| **Fronteira do sistema** | Retângulo que delimita o sistema |

Os casos de uso são **descritos textualmente** (nome, atores, pré-condições, fluxos principal e alternativos, pós-condições; arquivo `02`): o diagrama é um **índice visual**, e a descrição textual é a especificação.

### 3.3 Diagrama de classes

Principal diagrama estrutural: mostra **classes**, seus **atributos e operações** e os **relacionamentos**.

| Notação | Significado |
|---|---|
| Retângulo com três compartimentos | **Nome**, **atributos**, **operações** |
| `+`, `-`, `#`, `~` | Visibilidade **pública**, **privada**, **protegida** e de **pacote** |
| **Multiplicidade** (`1`, `0..1`, `*`, `1..*`) | Quantas instâncias participam do relacionamento |
| Linha simples | **Associação** |
| Losango vazio | **Agregação** |
| Losango cheio | **Composição** |
| Seta com triângulo vazado | **Generalização (herança)** |
| Seta tracejada com triângulo vazado | **Realização** (implementação de interface) |
| Seta tracejada | **Dependência** |
| *Itálico* ou `<<abstract>>` | Classe/operação **abstrata** |

*Exemplo (didático):* `OrdemServico (1) ◆── (1..*) ItemServico` (composição); `Tecnico (1) ── (0..*) OrdemServico` (associação); `Bomba ▷ Equipamento` (generalização).

*Modelo conceitual (de domínio) × diagrama de classes de projeto:* o primeiro representa **conceitos do negócio**, sem operações; o segundo acrescenta **responsabilidades, visibilidade, tipos** e detalhes de implementação.

### 3.4 Diagrama de objetos

Mostra **instâncias** e seus valores em um **instante** (instantâneo do diagrama de classes).

### 3.5 Diagrama de sequência

**Interação entre objetos ao longo do tempo**: **linhas de vida** (verticais), **mensagens** (horizontais): síncronas, assíncronas, de retorno, de criação e de destruição; **barras de ativação**; **fragmentos combinados** (`alt` alternativa, `opt` opcional, `loop` repetição, `par` paralelo). Mostra **como** um cenário de caso de uso é realizado.

### 3.6 Diagrama de comunicação (colaboração)

Mesma informação do de sequência, com foco nas **ligações** entre objetos e **mensagens numeradas** (em vez do eixo do tempo).

### 3.7 Diagrama de atividades

Modela **fluxos de trabalho e algoritmos**: **nó inicial**, **final**, **ações**, **decisões e junções (*merge*)**, **bifurcação e sincronização (*fork/join*)** para paralelismo, **partições (raias)** que indicam responsáveis, fluxos de objetos. Usado para **processos de negócio**, casos de uso complexos e lógica.

### 3.8 Diagrama de máquina de estados

**Estados de um objeto** durante sua vida e **transições** disparadas por **eventos**, com **condições de guarda** e **ações** (evolução do DTE do estruturado).

### 3.9 Diagramas de componentes e de implantação

- **Componentes:** **componentes** de software, **interfaces fornecidas e requeridas** e dependências (arquitetura lógica).
- **Implantação:** **nós físicos ou virtuais** (servidores, dispositivos), **artefatos** instalados neles e **conexões** (arquitetura física).

### 3.10 Outros diagramas

**Pacotes** (agrupamento e dependências), **estrutura composta** (estrutura interna de uma classe), **visão geral de interação**, **temporização** e **perfis** (extensão da UML).

## 4. Análise e projeto OO: processo de modelagem

Sequência típica (por exemplo, no Processo Unificado, arquivo `03`):

1. **Requisitos** → **modelo de casos de uso** (atores e casos de uso).
2. **Análise** → **modelo conceitual (de domínio)** e **diagramas de atividades/estados** para regras e comportamento; **realização** dos casos de uso por diagramas de **sequência**.
3. **Projeto** → **diagrama de classes de projeto**, **arquitetura** (camadas, componentes), **projeto de interface**, **persistência** (mapeamento objeto-relacional, Módulo 1), **padrões de projeto**.
4. **Implementação e testes** (arquivo `06`) com **rastreabilidade** aos modelos.

*(Complemento B)* **Padrões GRASP** (atribuição de responsabilidades): especialista na informação, criador, controlador, baixo acoplamento, alta coesão, polimorfismo, fabricação pura, indireção e variações protegidas.

### 4.1 Arquitetura de software (complemento B)

**Arquitetura** define a **estrutura de alto nível** do sistema (componentes, relações, princípios). Estilos comuns: **camadas** (apresentação, aplicação/negócio, dados), **cliente-servidor**, **MVC** (modelo–visão–controlador), **orientada a serviços/microsserviços**, **orientada a eventos**, **pipes e filtros**. Decisões arquiteturais afetam **qualidade** (desempenho, segurança, manutenibilidade — arquivo `01`) e custo de mudança.

## 5. Metodologias e processos de análise e projeto

| Metodologia/processo | Paradigma | Característica |
|---|---|---|
| **Análise e projeto estruturados** (DeMarco, Gane–Sarson, Yourdon–Constantine) | Estruturado | Decomposição funcional, DFD, dicionário de dados, diagrama de estrutura |
| **Métodos OO de primeira geração** (Booch, OMT de Rumbaugh, OOSE de Jacobson) | OO | Unificados na **UML** e no **Processo Unificado** |
| **Processo Unificado / RUP** | OO | Iterativo, orientado a casos de uso, centrado na arquitetura (arquivo `03`) |
| **Modelagem ágil e métodos ágeis** | OO/outros | Modelar o **suficiente**; modelos como meio de comunicação; *backlog* e histórias (Módulos 2 e 6) |
| **Desenvolvimento orientado a modelos (MDD/MDA)** | OO | Gerar código a partir de modelos (complemento B) |

## 6. Ferramentas

| Categoria | Função | Observações |
|---|---|---|
| **Ferramentas CASE** (*Computer-Aided Software Engineering*) | Apoiar atividades do ciclo de vida | *Upper CASE* (análise e projeto), *lower CASE* (codificação, testes), integradas (*I-CASE*) |
| **Modelagem UML e de processos** | Criar e validar diagramas; validar consistência; gerar documentação | Exemplos de categorias: ferramentas de modelagem UML, de diagramação e de modelagem de dados |
| **Geração de código e engenharia reversa** | Gerar código a partir de modelos; extrair modelos do código/banco | Engenharia reversa de dados: Módulo 1, arquivo `02` |
| **Gerência de requisitos e rastreabilidade** | Ligar requisitos, modelos, código e testes | Arquivo `02` |
| **Repositório de modelos** | Controle de versão e colaboração | Arquivo `07` |

*(Nomes de produtos não são citados; não há recomendação.)*

## 7. Comparações conceituais

| Conceito A | Conceito B | Diferença principal |
|---|---|---|
| Análise | Projeto | O quê (problema, independente de tecnologia) × como (solução) |
| Modelo | Metodologia | Abstração do sistema × conjunto de modelos, notações e processo |
| UML | Processo Unificado | Linguagem de modelagem × processo de desenvolvimento |
| DFD | Fluxograma | Fluxo de **dados** entre processos, sem ordem × fluxo de **controle** (sequência de passos) |
| DFD | Diagrama de atividades | Dados transformados × fluxo de atividades e controle, com paralelismo e raias |
| Caso de uso (diagrama) | Caso de uso (descrição) | Visão geral × especificação textual |
| *Include* | *Extend* | Sempre inclui × amplia opcionalmente |
| Diagrama de classes | Diagrama de objetos | Estrutura (tipos) × instâncias e valores |
| Sequência | Comunicação | Ênfase no tempo × ênfase nas ligações |
| Componentes | Implantação | Estrutura lógica × distribuição física |
| Modelo conceitual | Diagrama de classes de projeto | Conceitos do negócio × classes com responsabilidades e detalhes |

## 8. Aplicações e cenários

**Cenário (didático): do requisito ao modelo.** O requisito "o técnico registra uma ordem de serviço" gera: um **caso de uso** *Registrar Ordem*; um **modelo conceitual** (`Ordem`, `Equipamento`, `Tecnico`); um **diagrama de sequência** que mostra a interação entre a interface, o controlador e as classes de domínio; um **diagrama de classes de projeto** com responsabilidades e visibilidade; e **casos de teste** derivados do fluxo principal e dos alternativos. *Limitação:* modelos desatualizados em relação ao código perdem valor; manter a rastreabilidade.

**Cenário (didático): DFD no paradigma estruturado.** Para um sistema de faturamento legado, o diagrama de contexto mostra *Cliente*, *Contabilidade* e os fluxos; o nível 0 decompõe em *Registrar consumo*, *Calcular fatura* e *Emitir cobrança*, com depósitos *Consumos* e *Faturas*. O dicionário de dados define `Fatura`. *Limitação:* o DFD não mostra o controle nem a ordem das operações.

## 9. Atenção para a prova

*Inferência técnica e recomendação pedagógica; sem atribuir frequência à banca.*

- **Casos de uso**: interação **ator–sistema**; são "representações textuais em forma de narrativa" quando descritos; um caso de uso é **uma funcionalidade** que dá valor ao ator.
- **UML** é **linguagem de modelagem**, **não metodologia**; tem 14 diagramas, estruturais e comportamentais.
- **Agregação** × **composição**; **classe** × **objeto**; **include** × **extend**.
- **DFD**: elementos (processo, fluxo, depósito, entidade externa) e regras de **balanceamento**.
- Em questões de **representação**, associe o diagrama ao seu propósito (casos de uso = visão externa; classes = estrutura; sequência = interação no tempo; atividades = fluxo; estados = ciclo de vida de um objeto).
- *Evidência histórica (amostra de duas provas):* a Prova 15 de 2018 (Q27) perguntou o que os **casos de uso** demonstram (uma interação entre um ator e o sistema) e a Prova 6 de 2023 trouxe questões sobre diagramas E-R (Módulo 1). As provas catalogadas **não** trouxeram questões sobre DFD ou sobre os demais diagramas UML; duas provas não permitem inferir frequência, e o edital de 2026 prevê o item 5.3 de modo amplo.

## 10. Síntese

- Análise (o quê) × projeto (como); modelo × metodologia × técnica × ferramenta.
- Estruturado: DFD (contexto, nível 0, decomposição), dicionário de dados, especificação de processos, DTE, diagrama de estrutura; coesão/acoplamento.
- OO/UML 2.5.1: 14 diagramas (7 estruturais + 7 comportamentais); casos de uso, classes, sequência, atividades, estados, componentes, implantação.
- Processo OO: casos de uso → modelo de domínio → interação → classes de projeto → arquitetura.
- Metodologias: estruturadas, Processo Unificado, ágeis, MDD.
- Ferramentas CASE: modelagem, geração de código, engenharia reversa, rastreabilidade.

## 11. Pontos para a futura produção de questões (registro)

Conceitos: DFD, dicionário de dados, UML, casos de uso, classes, sequência, atividades, estados. Distinções: análise×projeto; DFD×fluxograma; include×extend; agregação×composição; UML×PU. Interpretação: escolher o diagrama para um propósito; ler um diagrama de classes ou de sequência; identificar erros de balanceamento em DFD.

## 12. Referências

- OBJECT MANAGEMENT GROUP. *Unified Modeling Language (UML)* 2.5.1, dez. 2017 (documento formal/17-12-05). **Página oficial da OMG** (https://www.omg.org/spec/UML/2.5.1) conferida em 2026-10-31: versão 2.5.1, status formal, data de dezembro de 2017. **A lista e a contagem dos 14 diagramas** (7 estruturais e 7 comportamentais) vêm de **fontes secundárias**: a página da OMG não os lista e o PDF da especificação não foi lido.
- DeMARCO; GANE e SARSON; YOURDON e CONSTANTINE; JACOBSON, BOOCH e RUMBAUGH; LARMAN (GRASP); SOMMERVILLE; PRESSMAN — citados de memória, **não verificados online** nesta etapa.
- Edital Transpetro nº 04/2026.4, Anexo IV, item 5.3.
