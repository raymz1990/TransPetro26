---
modulo: 06-experiencia-usuario
arquivo: 09-design-thinking-e-personas
itens_edital:
  - "6.10 Design thinking"
  - "6.11 Análise de personas (papéis, perfis etc.) de usuários de software."
ids_matriz: ["E5-057", "E5-058"]
escopo: "A — conteúdo expresso no edital. Item 6.11 é genérico; abrangência é interpretação (a confirmar)."
tipo_conteudo: "teoria"
status: "VALIDADO"
ultima_atualizacao: "2026-10-31"
---

# Design Thinking e Análise de Personas

**Módulo:** M06 — Experiência do usuário (UX)
**Textos oficiais (Anexo IV):** 6.10 "Design thinking"; 6.11 "Análise de personas (papéis, perfis etc.) de usuários de software."
**Escopo:** A.
**Status:** `VALIDADO` (aprovado pelo usuário em 2026-10-31, com ressalvas: interpretação dos itens 6.3, 6.4, 6.7 e 6.11 a confirmar; fontes de memória listadas em `docs/qualidade/relatorio-producao-modulo-06.md`). As cinco etapas do d.school (Stanford, que as chama de *modes*) foram **confirmadas** no *Design Thinking Bootleg* do site; as da IDEO e o equilíbrio desejável/viável/factível **não foram confirmados**; o *Double Diamond* do UK Design Council foi **verificado**. Demais autores (Brown, Gray, Cooper, Kelley) citados de memória.

**Objetivos de aprendizagem.** (1) Definir design thinking e suas etapas; (2) aplicar técnicas de ideação (*brainstorming*, *brainwriting*); (3) construir mapa de empatia e jornada do usuário; (4) elaborar e usar personas; (5) distinguir persona, perfil, papel e *stakeholder*.

---

## 1. Design thinking (item 6.10)

### 1.1 Definição

**Design thinking** é uma abordagem **centrada nas pessoas** para resolver problemas complexos e inovar, combinando **empatia** com os usuários, **colaboração multidisciplinar**, **experimentação** (prototipar e testar) e **iteração**. Busca soluções que sejam **desejáveis** (para as pessoas), **viáveis** (para o negócio) e **factíveis** (tecnicamente) — o chamado equilíbrio entre desejabilidade, viabilidade e exequibilidade (associado à IDEO; de memória). Parte do **problema** (entendido do ponto de vista do usuário), não da solução.

### 1.2 Modelo das cinco etapas (d.school/Stanford — nomes **verificados**; descrições de memória)

| Etapa | Objetivo | Atividades/técnicas |
|---|---|---|
| **Empatizar** | Compreender profundamente as pessoas | Entrevistas, observação, imersão, **mapa de empatia**, jornada |
| **Definir** | Sintetizar o **problema** a resolver | Declaração do problema (*point of view*), "Como poderíamos..." (*How might we*), personas |
| **Idear** | Gerar muitas ideias | ***Brainstorming***, ***brainwriting***, *crazy 8s*, mapas mentais, SCAMPER |
| **Prototipar** | Tornar ideias tangíveis | Esboços, *storyboards*, protótipos (arquivo `08`) |
| **Testar** | Validar com usuários | Testes de usabilidade, entrevistas, coleta de *feedback*; **voltar** a etapas anteriores |

As etapas **não são lineares**: o processo é **iterativo** e pode voltar atrás.

### 1.3 Double Diamond (UK Design Council — **verificado**)

Modelo em **dois diamantes**, cada um de **divergência** (explorar amplamente) e **convergência** (focar):

| Diamante | Fase | Natureza |
|---|---|---|
| **1º — problema certo** | **Descobrir** (*Discover*) | Divergir: explorar o problema |
| | **Definir** (*Define*) | Convergir: delimitar o problema |
| **2º — solução certa** | **Desenvolver** (*Develop*) | Divergir: gerar e testar soluções |
| | **Entregar** (*Deliver*) | Convergir: finalizar e lançar |

### 1.4 Pensamento divergente e convergente

**Divergir:** ampliar opções, adiar o julgamento. **Convergir:** selecionar e refinar, com critérios. Ambos se alternam.

### 1.5 Ideação

| Técnica | Descrição |
|---|---|
| ***Brainstorming*** | Sessão **oral** em grupo para gerar muitas ideias; regras: adiar o julgamento, quantidade, ideias livres, construir sobre as dos outros (Osborn; de memória) |
| ***Brainwriting*** | Ideias **escritas individualmente** (em papel ou em ferramenta) e depois compartilhadas/combinadas; reduz inibição e dominância de vozes fortes |
| ***Crazy 8s*** | Oito esboços em oito minutos |
| **SCAMPER** | Questões sobre substituir, combinar, adaptar, modificar, propor outros usos, eliminar, reorganizar |
| **Votação por pontos / matriz impacto×esforço** | Seleção |

**Brainstorming × brainwriting:** no primeiro, as ideias são **faladas**; no segundo, **escritas** — o que dá voz a todos e evita a influência do grupo. *Q30 da Prova 6 (2023)* tratou de ideação com brainwriting.

### 1.6 Mapa de empatia

Ferramenta visual para **sintetizar o que se sabe sobre um usuário** (associada a Dave Gray, XPLANE; de memória). Quadrantes clássicos:

| Quadrante | Pergunta |
|---|---|
| **Pensa e sente** (*Thinks and feels*) | O que realmente importa? Preocupações, aspirações |
| **Ouve** (*Hears*) | O que dizem amigos, colegas, chefia, mídia? |
| **Vê** (*Sees*) | O que há no ambiente, o que a concorrência faz? |
| **Diz e faz** (*Says and does*) | Comportamento e falas em público |
| **Dores** (*Pains*) | Medos, frustrações, obstáculos |
| **Ganhos** (*Gains*) | Desejos, necessidades, medidas de sucesso |

Versões variam (alguns modelos têm só os quatro quadrantes, outros acrescentam dores e ganhos). *A Q34 da Prova 6 (2023) tratou do mapa de empatia (gabarito D, conforme espelho de terceiros, não validado).* Verificar sempre quais quadrantes o enunciado considera.

### 1.7 Jornada do usuário

Representa **etapas, ações, pensamentos, emoções, pontos de contato e oportunidades** de um usuário ao atingir um objetivo (por exemplo, "solicitar acesso a um sistema"). Evidencia **momentos críticos** ("dores") e orienta melhorias. Difere do **fluxo de tarefas** (que descreve o caminho no sistema) por incluir **a perspectiva emocional e o contexto**.

### 1.8 Uso em software

Design thinking é usado **antes e durante** o desenvolvimento para descobrir o problema certo, gerar alternativas e validar rapidamente (arquivos `04`, `08`). Complementa métodos ágeis (ex.: pesquisa e prototipação à frente do *sprint*; *lean UX*). Limitações: pode produzir ideias sem viabilidade; exige tempo e participação real dos usuários; não substitui engenharia de requisitos formal quando o contexto exige.

---

## 2. Análise de personas (item 6.11)

### 2.1 Definição

**Persona** é um **arquétipo fictício, baseado em pesquisa**, que **representa um grupo de usuários** com objetivos, comportamentos, necessidades e contexto semelhantes (conceito difundido por Alan Cooper; de memória). Personas **humanizam** os dados e ajudam a **decidir** o que projetar e para quem. Não são pessoas reais nem "o usuário médio".

### 2.2 Conteúdo típico de uma persona

Nome e foto (ilustrativos), **papel/cargo**, **contexto** (ambiente, dispositivos, habilidades), **objetivos**, **tarefas**, **necessidades**, **dores/frustrações**, **motivações**, **comportamentos**, **citação** representativa e, quando relevante, **limitações e necessidades de acessibilidade**.

### 2.3 Como criar

1. **Pesquisar** usuários (entrevistas, observação, dados de uso, questionários).
2. **Identificar padrões** e agrupar (por objetivos e comportamentos, não só por dados demográficos).
3. **Descrever** as personas e **priorizar** (persona primária, secundária; **persona negativa**, aquela para quem **não** se projeta).
4. **Validar** com usuários e partes interessadas.
5. **Usar** em histórias do usuário, cenários, jornadas e decisões de projeto (arquivos `02` e `03`); **revisar** periodicamente.

### 2.4 Persona × perfil × papel × stakeholder

| Conceito | Descrição |
|---|---|
| **Persona** | Arquétipo **individualizado** (com nome, história, objetivos) que representa um grupo |
| **Perfil de usuário** | Descrição **agregada** das características de um grupo (idade, escolaridade, habilidades, frequência de uso), sem a narrativa de um indivíduo |
| **Papel (*role*)** | Função desempenhada em relação ao sistema (por exemplo, solicitante, aprovador, administrador); relacionado a **perfis de acesso** |
| ***Stakeholder*** | Qualquer pessoa/grupo afetado ou com interesse no sistema (inclui não usuários: patrocinadores, órgãos reguladores) |
| **Ator** (UML) | Papel que interage com o sistema em casos de uso (Módulo 5) |
| **Proto-persona** | Persona baseada em **hipóteses** da equipe, sem pesquisa, a validar |
| **Persona negativa** | Quem **não** é público-alvo |

O edital menciona "papéis, perfis etc.": **papel** e **perfil** são categorizações de usuários, e a **persona** é a forma mais rica de representá-los.

### 2.5 Boas práticas e riscos

- Basear em **dados**, evitando **estereótipos**; poucas personas (em geral, **3 a 5**; ordem de grandeza de memória, sem fonte).
- Incluir **diversidade** e acessibilidade (arquivo `01`).
- Manter **vivas**: usar nas decisões e atualizar.
- Riscos: persona inventada sem pesquisa; excesso de personas; foco em dados demográficos; uso apenas decorativo.

### 2.6 Exemplo (didático)

**Persona:** "Marta, inspetora de campo, 42 anos" — usa celular com luvas, sob sol forte e sinal instável; objetivo: registrar ocorrência em menos de um minuto; dor: perde dados quando a conexão cai. **Decisões:** modo *offline*, botões grandes, alto contraste (histórias e protótipos derivados).

## 3. Comparações conceituais

| A | B | Diferença |
|---|---|---|
| *Brainstorming* | *Brainwriting* | Ideias faladas × escritas individualmente |
| Divergir | Convergir | Ampliar opções × selecionar |
| Persona | Perfil | Arquétipo narrativo × descrição agregada |
| Persona | Papel | Representação do usuário × função desempenhada |
| Mapa de empatia | Persona | Síntese do que se sabe sobre um usuário × arquétipo de um grupo |
| Mapa de empatia | Jornada | Estado mental/ambiente de um usuário × sequência de etapas ao longo do tempo |
| Design thinking | Double Diamond | Abordagem em cinco etapas × modelo em quatro fases (dois diamantes) |

## 4. Atenção para a prova

*Inferência técnica e recomendação pedagógica; sem atribuir frequência à banca.*

- Memorizar as **cinco etapas** e a ordem: empatizar, definir, idear, prototipar, testar; reconhecer que são **iterativas**.
- Associar **brainwriting** a ideias escritas, **mapa de empatia** aos quadrantes e **persona** a arquétipo baseado em pesquisa.
- *Evidência histórica (amostra de duas provas):* a Prova 6 de 2023 trouxe questões sobre **brainwriting/ideação (Q30)** e **mapa de empatia (Q34, gabarito D conforme espelho de terceiros, não validado)**. O item 6.11 (personas) não teve questão. Duas provas não permitem inferir frequência.

## 5. Síntese

- Design thinking: abordagem centrada nas pessoas; empatizar–definir–idear–prototipar–testar; iterativo; Double Diamond (descobrir, definir, desenvolver, entregar).
- Ideação: *brainstorming* (oral) × *brainwriting* (escrito); mapa de empatia; jornada.
- Personas: arquétipos baseados em pesquisa; diferem de perfis e papéis; persona primária e negativa; uso em histórias e projeto.

## 6. Pontos para a futura produção de questões (registro)

Etapas do design thinking; escolha de técnica de ideação; quadrantes do mapa de empatia; distinção persona/perfil/papel; uso de personas em UX e histórias.

## 7. Referências

- UK DESIGN COUNCIL. *Framework for Innovation* (Double Diamond): Descobrir, Definir, Desenvolver, Entregar — **verificado** em 2026-10-31.
- d.school (Stanford). *Design Thinking Bootleg* (2018), dschool.stanford.edu/tools/design-thinking-bootleg — cinco *modes*: Empathize, Define, Ideate, Prototype, Test — **verificado em 2026-10-31**. IDEO e "desejável, viável, factível" — **não confirmados**; **de memória**.
- COOPER, Alan. *The Inmates Are Running the Asylum* (personas); GRAY, Dave et al. *Gamestorming* (mapa de empatia); BROWN, Tim. *Change by Design* — **de memória, não verificados**.
- Edital Transpetro nº 04/2026.4, Anexo IV, itens 6.10 e 6.11. Provas: Transpetro 2023, Prova 6, Q30 e Q34 (gabaritos de terceiros, não validados).
