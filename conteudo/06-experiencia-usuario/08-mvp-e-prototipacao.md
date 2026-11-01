---
modulo: 06-experiencia-usuario
arquivo: 08-mvp-e-prototipacao
itens_edital:
  - "6.8 Mínimo Produto Viável (MVP)"
  - "6.9 Prototipação"
ids_matriz: ["E5-055", "E5-056"]
escopo: "A — conteúdo expresso no edital."
tipo_conteudo: "teoria"
status: "VALIDADO"
ultima_atualizacao: "2026-10-31"
---

# Mínimo Produto Viável (MVP) e Prototipação

**Módulo:** M06 — Experiência do usuário (UX)
**Textos oficiais (Anexo IV):** 6.8 "Mínimo Produto Viável (MVP)"; 6.9 "Prototipação".
**Escopo:** A.
**Status:** `VALIDADO` (aprovado pelo usuário em 2026-10-31, com ressalvas: interpretação dos itens 6.3, 6.4, 6.7 e 6.11 a confirmar; fontes de memória listadas em `docs/qualidade/relatorio-producao-modulo-06.md`). Autores (Ries, Blank, Cagan) citados de memória: **não verificados online**.

**Objetivos de aprendizagem.** (1) Definir MVP e distingui-lo de protótipo e de produto "pela metade"; (2) aplicar o ciclo construir–medir–aprender; (3) classificar protótipos por fidelidade e finalidade; (4) escolher ferramenta e nível; (5) relacionar com UX, ágil e gestão de riscos.

---

## 1. MVP — Mínimo Produto Viável (item 6.8)

### 1.1 Definição

**MVP** (*Minimum Viable Product*) é a **versão de um produto com o menor conjunto de funcionalidades** que permite **entregar valor real aos primeiros usuários** e **aprender o máximo possível sobre eles com o mínimo esforço** (formulação associada a Eric Ries e ao *Lean Startup*; de memória). O MVP serve para **validar hipóteses** de valor e de mercado **antes** de investir em um produto completo.

Pontos centrais:

- **Mínimo** não é "ruim" nem incompleto: é o **essencial** para testar a hipótese.
- **Viável**: deve ser **utilizável e entregar valor**; não é uma maquete.
- **Produto**: é usado por pessoas reais, e gera dados reais.
- Objetivo: **aprendizagem validada**.

### 1.2 Ciclo construir–medir–aprender (*Build–Measure–Learn*)

1. **Construir** o MVP a partir de uma **hipótese** (por exemplo: "gestores usarão alertas de vencimento").
2. **Medir** o comportamento (uso, conversão, retenção, satisfação) com **métricas acionáveis**, em vez de métricas de vaidade.
3. **Aprender** e decidir: **perseverar** (continuar), **pivotar** (mudar de direção) ou **encerrar**.

### 1.3 Tipos e formas de MVP (de memória)

| Tipo | Descrição |
|---|---|
| **Página de apresentação (*landing page*)** | Mede interesse antes de construir |
| **Vídeo demonstrativo** | Simula o produto para avaliar interesse |
| **"Mágico de Oz"** | Interface real, processo manual por trás |
| **Concierge** | Serviço prestado manualmente a poucos clientes |
| **Protótipo funcional / produto reduzido** | Poucas funcionalidades, usadas de fato |

### 1.4 Como definir o escopo

Listar funcionalidades; priorizar por **valor × esforço × risco**; técnica **MoSCoW**; manter somente o que é **necessário para a hipótese**; planejar a evolução em incrementos. Em Scrum, o MVP corresponde a um ou mais incrementos entregues cedo (Módulo 2).

### 1.5 Vantagens e riscos

| Vantagens | Riscos/limitações |
|---|---|
| Reduz desperdício e risco | Qualidade mínima mal interpretada como produto ruim |
| Feedback real precoce | Escopo cresce ("MVP gordo") |
| Time-to-market menor | Em ambientes regulados/críticos, o mínimo pode envolver exigências de segurança e conformidade que não são negociáveis |
| Decisões baseadas em dados | Métricas de vaidade enganam |

*Nota:* em organizações públicas e industriais, o "mínimo viável" deve respeitar **segurança, conformidade e continuidade** (Módulos 4 e 9).

### 1.6 Exemplo (didático)

Hipótese: inspetores registrarão ocorrências pelo celular se for mais rápido que o papel. MVP: formulário simples de três campos, com envio e consulta, para um grupo de dez inspetores durante um mês. Métricas: porcentagem de registros pelo app, tempo por registro, satisfação. Decisão: ampliar, ajustar (pivotar) ou encerrar.

---

## 2. Prototipação (item 6.9)

### 2.1 Definição e finalidades

**Prototipação** é a criação de **representações preliminares** de um produto, de interface ou de fluxo, para **explorar ideias, comunicar, validar e testar** com usuários e partes interessadas **antes da codificação definitiva**, reduzindo custo de mudanças. Um **protótipo** é um modelo; **não é** necessariamente o produto final.

Finalidades: **explorar** alternativas; **comunicar** a ideia; **validar requisitos**; **testar usabilidade**; **reduzir riscos**; **apoiar decisões**.

### 2.2 Níveis de fidelidade

| Nível | Características | Quando usar | Exemplos |
|---|---|---|---|
| **Baixa fidelidade** | Simples, rápido, sem detalhes visuais; foco na estrutura e no fluxo | Início; explorar muitas ideias; custo baixo | Esboços em papel, *storyboards*, *wireframes* simples |
| **Média fidelidade** | Layout e hierarquia definidos, pouca cor/conteúdo real | Refinar estrutura e navegação | *Wireframes* digitais clicáveis |
| **Alta fidelidade** | Visual e comportamento próximos ao produto final: cores, tipografia, imagens, **conteúdo real**, interações detalhadas | Testes realistas com usuários, validação final com *stakeholders*, entrega ao desenvolvimento | Protótipos interativos em ferramentas de design |

Atenção a "protótipos de alta fidelidade": **dão mais realismo** ao teste e à apresentação, mas **custam mais** e podem desviar o foco para detalhes visuais; os de baixa fidelidade permitem **mudar ideias rapidamente**.

### 2.3 Tipos conforme o destino

| Tipo | Descrição |
|---|---|
| **Descartável (*throwaway*)** | Usado para aprender e depois jogado fora |
| **Evolutivo** | Refinado até virar o produto |
| **Incremental** | Partes construídas separadamente e integradas |
| **Horizontal** | Mostra a interface ampla com pouca funcionalidade real |
| **Vertical** | Implementa em profundidade uma funcionalidade |

*(Classificação de memória; terminologia varia por autor.)*

### 2.4 Técnicas e artefatos

**Esboços** (*sketches*); ***storyboard*** (sequência de quadros de uso); ***wireframe*** (estrutura da página sem estilo); ***mockup*** (representação visual estática de média/alta fidelidade); **protótipo interativo** (navegável, simula comportamento); **protótipo em código** (HTML/CSS/JS); **protótipo em papel** (testado com cartões e telas intercambiáveis); **"Mágico de Oz"** (um humano simula o sistema).

### 2.5 Processo e avaliação

1. Definir **objetivo** do protótipo e a **pergunta** a responder.
2. Escolher o **nível de fidelidade** adequado.
3. Construir **rápido**, com o mínimo necessário.
4. **Testar** com usuários (tarefas, pensar em voz alta — arquivo `01`).
5. **Registrar** problemas, **priorizar** e **iterar**.
6. Documentar decisões e transferir ao desenvolvimento (guia de estilo, componentes).

### 2.6 Ferramentas

O edital não exige ferramenta específica. Exemplos de categorias: ferramentas de *design* e prototipagem de interface, quadros colaborativos, editores de código. **Não é necessário conhecer produtos específicos.**

### 2.7 Relações

- Com **UX/DCU**: avaliação iterativa (arquivo `04`).
- Com **ágil**: protótipos para refinar *backlog* e histórias (arquivo `02`); MVP como protótipo funcional em uso real.
- Com **requisitos** (Módulo 5): protótipos para elicitar e validar.
- Com **design thinking**: etapa "prototipar" (arquivo `09`).
- Com **acessibilidade**: considerar nos protótipos, antes da codificação (arquivo `01`).

---

## 3. MVP × protótipo × produto final

| Aspecto | Protótipo | MVP | Produto completo |
|---|---|---|---|
| Objetivo | Explorar, comunicar, testar ideias | Validar hipótese com **usuários reais** | Atender plenamente o mercado/negócio |
| Uso real | Normalmente simulado | Sim, por primeiros usuários | Sim |
| Funcionalidade | Parcial ou simulada | Mínima, mas funcional | Completa |
| Dados reais | Raros | Sim | Sim |
| Destino | Descartável ou evolutivo | Evolui conforme aprendizado | Sustentação e evolução |

## 4. Atenção para a prova

*Inferência técnica e recomendação pedagógica; sem atribuir frequência à banca.*

- **MVP** = menor versão **utilizável**, para **aprender** com usuários; **não** é produto completo, nem apenas protótipo, nem produto com funcionalidades em excesso.
- **Alta fidelidade** = realismo visual e de interação, mais próximo do produto final; **baixa fidelidade** = rápido e barato.
- *Evidência histórica (amostra de duas provas):* a Prova 6 de 2023 trouxe **Q58 sobre MVP** (gabarito A, conforme espelho de terceiros, não validado) e **Q29 sobre prototipação de alta fidelidade** (gabarito E, idem). Duas provas não permitem inferir frequência. Aplicar a leitura de cada alternativa contra as definições acima.

## 5. Síntese

- MVP: versão mínima utilizável para validar hipóteses; ciclo construir–medir–aprender; perseverar, pivotar ou encerrar.
- Prototipação: baixa, média e alta fidelidade; esboço, *wireframe*, *mockup*, protótipo interativo; testar cedo e iterar.
- MVP é produto em uso real; protótipo é modelo para explorar e testar.

## 6. Pontos para a futura produção de questões (registro)

Definição de MVP; MVP × protótipo; escolha do nível de fidelidade; identificação de artefatos (*wireframe*, *mockup*); vantagens da prototipação.

## 7. Referências

- RIES, Eric. *The Lean Startup* — **de memória, não verificada**; BLANK, Steve (desenvolvimento de clientes) — **de memória**.
- Livros de IHC/UX sobre prototipação (Buxton, Snyder, Rogers) — **de memória, não verificados**.
- Edital Transpetro nº 04/2026.4, Anexo IV, itens 6.8 e 6.9. Provas: Transpetro 2023, Prova 6, Q29 e Q58 (gabaritos de terceiros, não validados).
