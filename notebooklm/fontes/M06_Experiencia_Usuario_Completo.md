# Módulo M06 — Experiência do Usuário (UX)

## Identificação
- Concurso: Processo Seletivo Público TRANSPETRO 2026.4 (Edital nº 04/2026)
- Ênfase: 5 — Análise de Sistemas: Processos de Negócios
- Banca: Fundação Cesgranrio
- Módulo: M06 — Experiência do Usuário (UX)
- Gerado em: 2026-11-09, por `tools/build_notebooklm.py`, a partir de `conteudo/06-experiencia-usuario/` (fonte de verdade; não editar este arquivo)
- Situação do conteúdo nos arquivos de origem: VALIDADO (com ressalvas nos relatórios de produção em `docs/qualidade/`)

## Como usar este documento
É material de estudo do projeto, **não** é texto oficial do edital nem da banca. O escopo oficial é o Anexo IV do edital. Trechos marcados como complemento, aprofundamento ou estratégia **não** são exigência literal do edital. Referências indicadas como "não verificadas" ou "de memória" devem ser conferidas na fonte primária. Não afirme incidência de tema em prova sem evidência documental.

## Conteúdo

---

## Experiência do Usuário (UX), Usabilidade e Acessibilidade

**Módulo:** M06 — Experiência do usuário (UX)
**Textos oficiais (Anexo IV):** 6 "User experience (UX):" (título); 6.1 "Conceitos de acessibilidade e usabilidade".
**Escopo:** A.
**Versões de referência:** **WCAG 2.2** (W3C) e **eMAG 3.1** (governo federal brasileiro); ver seção 5 para o estado da verificação.
**Status:** `VALIDADO` (aprovado pelo usuário em 2026-10-31, com ressalvas: interpretação dos itens 6.3, 6.4, 6.7 e 6.11 a confirmar; fontes de memória listadas em `docs/qualidade/relatorio-producao-modulo-06.md`).

**Objetivos de aprendizagem.** (1) Definir UX, UI, usabilidade e acessibilidade e distingui-las; (2) aplicar os atributos de usabilidade e as heurísticas de Nielsen; (3) explicar acessibilidade, desenho universal e os princípios do WCAG; (4) relacionar WCAG, eMAG e a legislação brasileira; (5) avaliar usabilidade e acessibilidade.

---

### 1. Introdução

Um sistema pode ter todas as funções corretas e, mesmo assim, fracassar porque as pessoas **não conseguem** ou **não querem** usá-lo. O módulo 6 do edital trata de **como projetar software e informação centrados nas pessoas**: UX, usabilidade e acessibilidade (6.1), histórias do usuário (6.2), interação web (6.3), projeto centrado no usuário (6.4), storytelling e dashboards (6.5 e 6.6), interoperabilidade entre navegadores (6.7), MVP e prototipação (6.8 e 6.9), design thinking e personas (6.10 e 6.11).

### 2. Experiência do usuário (título do item 6)

**UX** (*user experience*) abrange as **percepções e respostas de uma pessoa** resultantes do **uso ou da antecipação de uso** de um produto, sistema ou serviço, incluindo emoções, crenças, preferências, percepções, respostas físicas e psicológicas, comportamentos e realizações, antes, durante e depois do uso (definição associada à norma ISO 9241-210; **norma não consultada nesta etapa**).

| Conceito | O que é | Observação |
|---|---|---|
| **UX** (experiência do usuário) | Experiência **total** com o produto/serviço, ao longo do tempo | Inclui utilidade, usabilidade, acessibilidade, desempenho, emoção, marca |
| **UI** (interface do usuário) | Os **elementos pelos quais** a pessoa interage (telas, controles, textos, cores, tipografia) | Parte visível da UX |
| **Usabilidade** | Facilidade, eficiência e satisfação de uso | Componente da UX |
| **Acessibilidade** | Possibilidade de **todas as pessoas**, inclusive com deficiência, perceberem, compreenderem, navegarem e interagirem | Componente da UX |
| **CX** (experiência do cliente) | Experiência com a **organização** em todos os pontos de contato | Mais ampla que a UX de um produto |
| **Design de interação** | Definição do comportamento do sistema frente às ações do usuário | Item 6.3 (arquivo `03`) |

**Dimensões da UX:** **utilidade** (faz o que a pessoa precisa?), **usabilidade** (é fácil de usar?), **desejabilidade** (agrada?), **acessibilidade** (todos podem usar?), **credibilidade** (é confiável?), **encontrabilidade** (as informações são fáceis de achar?) e **valor**. *(Modelo didático de síntese, não um padrão.)*

### 3. Usabilidade (item 6.1)

#### 3.1 Definição

A **norma ISO 9241-11** define usabilidade como a medida em que um sistema, produto ou serviço pode ser usado por **usuários específicos** para atingir **objetivos específicos** com **eficácia**, **eficiência** e **satisfação**, em um **contexto de uso específico** (a ideia de "eficácia, eficiência e satisfação" foi confirmada pela página do W3C que cita a ISO 9241-11; o texto da norma não foi consultado).

| Componente | Pergunta |
|---|---|
| **Eficácia** | O usuário consegue **concluir** a tarefa e atingir o objetivo? |
| **Eficiência** | **Quanto esforço e tempo** são necessários? |
| **Satisfação** | A experiência é **agradável e confortável**? |
| **Contexto de uso** | Quem usa, para quê, onde, com que dispositivo? |

**Atributos de usabilidade (Nielsen):** **capacidade de aprendizado** (*learnability*), **eficiência**, **memorização** (*memorability*: retomar o uso depois de um tempo), **erros** (poucos e fáceis de corrigir) e **satisfação**.

#### 3.2 As dez heurísticas de usabilidade (Nielsen)

Regras gerais ("heurísticas") para avaliar interfaces. As **dez** a seguir foram **confirmadas** na página do Nielsen Norman Group (publicadas em 1994 e revisadas desde então):

| # | Heurística | Significado (resumo) |
|---|---|---|
| 1 | **Visibilidade do estado do sistema** | Informar o que está acontecendo, com *feedback* adequado e a tempo |
| 2 | **Correspondência entre o sistema e o mundo real** | Linguagem e conceitos familiares ao usuário |
| 3 | **Controle e liberdade do usuário** | "Saídas de emergência": desfazer, refazer, cancelar |
| 4 | **Consistência e padrões** | Mesmos elementos significam o mesmo; seguir convenções |
| 5 | **Prevenção de erros** | Evitar situações propensas a erro (confirmações, restrições) |
| 6 | **Reconhecimento em vez de memorização** | Tornar opções e informações visíveis ou recuperáveis |
| 7 | **Flexibilidade e eficiência de uso** | Atalhos para experientes; personalização |
| 8 | **Estética e design minimalista** | Informação relevante; sem excesso |
| 9 | **Ajudar a reconhecer, diagnosticar e corrigir erros** | Mensagens claras, em linguagem simples, com solução |
| 10 | **Ajuda e documentação** | Ajuda fácil de achar, focada na tarefa |

#### 3.3 Princípios de design de interação (Norman)

**Affordance**/**signifiers** (sinais que indicam o que é possível fazer), **feedback**, **mapeamento natural**, **restrições (*constraints*)**, **modelo conceitual** claro e **visibilidade**. *(Citados de memória; não verificados online.)*

#### 3.4 Como avaliar usabilidade

| Método | Descrição |
|---|---|
| **Avaliação heurística** | Especialistas inspecionam a interface segundo as heurísticas |
| **Percurso cognitivo** | Simula os passos de um usuário novo para realizar tarefas |
| **Teste de usabilidade** | Usuários reais executam tarefas, observadas; técnica de **pensar em voz alta** |
| **Questionários padronizados** | Por exemplo, *System Usability Scale* (SUS), com 10 itens e pontuação de 0 a 100 |
| **Métricas** | Taxa de sucesso, tempo na tarefa, número de erros, satisfação |
| **Análise de uso e testes A/B** | Dados de comportamento real e comparação de variantes |

### 4. Acessibilidade (item 6.1)

#### 4.1 Conceitos

- **Acessibilidade** (Lei Brasileira de Inclusão, Lei nº 13.146/2015, art. 3º, I — **verificado**): possibilidade e condição de alcance para utilização, com **segurança e autonomia**, de espaços, mobiliários, equipamentos urbanos, edificações, transportes, **informação e comunicação**, inclusive seus sistemas e tecnologias, e outros serviços abertos ao público, **por pessoa com deficiência ou com mobilidade reduzida**.
- **Desenho universal** (art. 3º, II — **verificado**): concepção de produtos, ambientes, programas e serviços **a serem usados por todas as pessoas**, sem necessidade de adaptação ou de projeto específico, incluindo os recursos de **tecnologia assistiva**.
- **Tecnologia assistiva:** recursos que ampliam as capacidades de pessoas com deficiência (leitores de tela, ampliadores, teclados alternativos, comando por voz, legendas, Libras, entre outros).

**Tipos de limitações:** **visual** (cegueira, baixa visão, daltonismo), **auditiva**, **motora**, **cognitiva** (dislexia, déficit de atenção, memória), **fala**, além de **limitações temporárias** (braço quebrado) e **situacionais** (sol forte na tela, ambiente barulhento). Projetar para a diferença melhora a experiência de **todos**.

#### 4.2 Acessibilidade × usabilidade × inclusão

| Conceito | Foco (segundo o W3C/WAI, página verificada) |
|---|---|
| **Acessibilidade** | Principalmente pessoas com deficiência; garantir **experiência equivalente** e requisitos técnicos (por exemplo, compatibilidade com tecnologia assistiva) |
| **Usabilidade** | Uso **eficaz, eficiente e satisfatório**; a prática de usabilidade muitas vezes não considera pessoas com deficiência |
| **Inclusão** | Diversidade e participação de todos (idioma, idade, condição econômica, geografia); também chamada de desenho universal/design para todos |

As três **se sobrepõem**: muitos requisitos de acessibilidade melhoram a usabilidade para todos. Acessibilidade **não** é um recurso a acrescentar no fim; deve estar **no projeto desde o início** (protótipos e testes antes da codificação).

### 5. Padrões e normas de acessibilidade

#### 5.1 WCAG (*Web Content Accessibility Guidelines*), do W3C

A versão **WCAG 2.2** é **Recomendação do W3C** (a página registra a versão de **12 de dezembro de 2024**; a página "O que há de novo" registra a publicação original em **5 de outubro de 2023**; o WCAG 2.1 é de junho de 2018) — **verificado**.

**Quatro princípios (POUR)** — **verificado**:

| Princípio | Significado | Exemplos |
|---|---|---|
| **Perceptível** (*Perceivable*) | Informação e componentes devem ser **apresentados de modo que o usuário possa percebê-los** | Texto alternativo para imagens; legendas; contraste; texto redimensionável |
| **Operável** (*Operable*) | Componentes e navegação devem ser **operáveis** | Uso por **teclado**; tempo suficiente; evitar conteúdo que cause convulsões; foco visível |
| **Compreensível** (*Understandable*) | Informação e operação devem ser **compreensíveis** | Linguagem clara; comportamento previsível; ajuda na entrada de dados |
| **Robusto** (*Robust*) | Conteúdo interpretável por **diversos agentes de usuário**, inclusive tecnologias assistivas | Marcação semântica; nomes, funções e valores (ARIA) |

**Três níveis de conformidade** (**A**, **AA**, **AAA**) — **verificado**: o **AA** é o nível usualmente exigido ou recomendado em políticas e contratos.

**Novidades do WCAG 2.2 em relação ao 2.1** (nove novos critérios de sucesso, **verificado** na página do W3C): 2.4.11 Foco não obscurecido (mínimo, AA); 2.4.12 Foco não obscurecido (aprimorado, AAA); 2.4.13 Aparência do foco (AAA); 2.5.7 Movimentos de arrastar (AA); 2.5.8 Tamanho do alvo (mínimo, AA); 3.2.6 Ajuda consistente (A); 3.3.7 Entrada redundante (A); 3.3.8 Autenticação acessível (mínimo, AA); 3.3.9 Autenticação acessível (aprimorada, AAA). O critério 4.1.1 (*Parsing*) foi **removido** como obsoleto.

**Exemplos de requisitos** (contraste 4,5:1 e 3:1 — texto grande: 18 pt ou 14 pt em negrito —, redimensionamento a 200% e não depender só da cor **conferidos em 2026-10-31** na página do WCAG 2.2, por resumo da ferramenta; demais critérios de memória): **texto alternativo** para conteúdo não textual (1.1.1); **contraste mínimo de 4,5:1** para texto normal e 3:1 para texto grande (1.4.3, nível AA); **redimensionar texto até 200%** sem perda (1.4.4); **não depender só da cor** (1.4.1); **operação por teclado** (2.1.1); **rótulos e instruções** em formulários (3.3.2); **identificar o idioma** da página (3.1.1).

*(Os valores numéricos citados nesta seção que não estão marcados como verificados vêm do conhecimento do autor do material.)*

#### 5.2 eMAG (Modelo de Acessibilidade em Governo Eletrônico)

Conjunto de **recomendações de acessibilidade** para *sites* e portais do governo brasileiro. A página oficial do governo federal informa que a **versão atual é a 3.1** (lançada em **abril de 2014**; a 3.0, em setembro de 2013), que o modelo **considerou o WCAG 2.0** do W3C e é **"em conformidade com os padrões internacionais"**, e que a **Portaria nº 3, de 7 de maio de 2007** tornou-o obrigatório para os *sites* do governo federal integrantes do SISP — **verificado**. O eMAG é uma **versão especializada** das diretrizes do W3C para o contexto brasileiro. A página de acessibilidade do governo digital também remete às normas **ABNT NBR 17225** (conteúdo web) e **ABNT NBR 17060** (dispositivos móveis); **a existência dos links foi verificada, o conteúdo das normas não**.

*Estrutura das recomendações do eMAG 3.1* (**marcação, comportamento, conteúdo/informação, apresentação/design, multimídia e formulários**): **as seis seções foram confirmadas no site oficial do eMAG (emag.governoeletronico.gov.br, "Versão 3.1 - Abril 2014") em 2026-10-31**; o texto das recomendações individuais não foi lido (quantidade e exemplos abaixo são de memória).

**Recomendação típica:** **garantir contraste mínimo entre o plano de fundo e o primeiro plano**; evitar **impedir o redimensionamento** da página, **utilizar apenas cores** para diferenciar elementos, **provocar mudanças de contexto automaticamente** ou **exigir CAPTCHAs** sem alternativa.

#### 5.3 Legislação brasileira

A **Lei nº 13.146/2015 (LBI)**, art. 63 (**verificado**), torna **obrigatória** a acessibilidade nos *sites* mantidos por **empresas com sede ou representação comercial no Brasil** ou por **órgãos de governo**, de forma que pessoas com deficiência possam acessar as informações, seguindo **boas práticas e diretrizes de acessibilidade adotadas internacionalmente**; o §1º manda exibir **símbolo de acessibilidade**; o art. 64 vincula a exigência à elegibilidade para financiamentos.

### 6. Comparações conceituais

| Conceito A | Conceito B | Diferença principal |
|---|---|---|
| UX | UI | Experiência total × interface pela qual se interage |
| Usabilidade | Acessibilidade | Eficácia, eficiência e satisfação de uso × possibilidade de uso por todos, inclusive pessoas com deficiência |
| Acessibilidade | Desenho universal | Condição de acesso × concepção para todos sem adaptação |
| WCAG | eMAG | Diretrizes internacionais do W3C × modelo brasileiro para o governo federal |
| Nível A | Nível AA | Requisitos mínimos × requisitos intermediários (usuais em políticas) |
| Avaliação heurística | Teste de usabilidade | Especialistas × usuários reais |
| Tecnologia assistiva | Recurso de usabilidade | Apoio específico a pessoas com deficiência × melhoria geral |
| Eficácia | Eficiência | Concluir a tarefa × esforço e tempo gastos |

### 7. Aplicações e cenários

**Cenário (didático): portal de serviços internos.** A equipe projeta formulários com **rótulos visíveis**, **contraste adequado**, **navegação por teclado**, **mensagens de erro claras** (heurística 9) e **texto alternativo** nas imagens; testa com **leitor de tela** e com **usuários reais**, inclusive pessoas com deficiência, ainda no **protótipo**. *Limitação:* validar acessibilidade só ao final encarece as correções.

**Cenário (didático): decisão de projeto.** Um botão de "Excluir" sem confirmação viola a **prevenção de erros**; só **cor vermelha** para indicar erro viola a acessibilidade (não depender só da cor); ambos se resolvem com **confirmação** e **ícone/texto** além da cor.

### 8. Atenção para a prova

*Inferência técnica e recomendação pedagógica; sem atribuir frequência à banca.*

- **Acessibilidade e usabilidade são características distintas e complementares**: **nem** "usabilidade define desempenho e manutenibilidade", **nem** "acessibilidade só depois da codificação", **nem** "conflitantes". Ambas devem ser consideradas **desde o início**, nos **protótipos**, e **testadas antes** da codificação.
- Memorizar **POUR** e os **três níveis** do WCAG; o **eMAG** é a versão especializada brasileira.
- Recomendações de acessibilidade típicas: **contraste mínimo**; **não** impedir redimensionamento; **não** usar apenas cor; **não** provocar mudança de contexto automática; **não** impor CAPTCHA sem alternativa.
- Diferenciar usabilidade (eficácia, eficiência, satisfação) de utilidade e de desempenho técnico.
- *Evidência histórica (amostra de duas provas):* a Prova 6 de 2023 (Q33) pediu a afirmação correta sobre **acessibilidade e usabilidade** (ambas devem ser consideradas na construção de protótipos, antes da codificação). A Prova 15 de 2018 (Q35) perguntou a recomendação do **eMAG** (garantir contraste mínimo entre fundo e primeiro plano). Duas provas não permitem inferir frequência.

### 9. Síntese

- UX (experiência total) ⊃ usabilidade, acessibilidade, desejabilidade etc.; UI = interface.
- Usabilidade (ISO 9241-11): eficácia, eficiência e satisfação em um contexto; atributos de Nielsen; dez heurísticas.
- Acessibilidade (LBI, art. 3º): uso com segurança e autonomia por pessoas com deficiência; desenho universal; tecnologia assistiva.
- WCAG 2.2: POUR; níveis A, AA, AAA; nove novos critérios; eMAG 3.1 (governo federal); LBI art. 63.
- Avaliar: heurística, percurso cognitivo, teste com usuários, SUS, métricas.

### 10. Pontos para a futura produção de questões (registro)

Conceitos: UX, usabilidade, acessibilidade, POUR, níveis WCAG, eMAG, heurísticas. Distinções: UX×UI; usabilidade×acessibilidade; WCAG×eMAG; heurística×teste com usuários. Interpretação: identificar a heurística violada; reconhecer uma recomendação de acessibilidade; avaliar afirmações sobre quando considerar acessibilidade.

### 11. Referências

- W3C. *Web Content Accessibility Guidelines (WCAG) 2.2*. https://www.w3.org/TR/WCAG22/ e https://www.w3.org/WAI/standards-guidelines/wcag/new-in-22/ — **verificado em 2026-10-31** (versão, princípios, níveis, novos critérios, remoção do 4.1.1). Texto integral não lido.
- W3C WAI. *Accessibility, Usability, and Inclusion*. https://www.w3.org/WAI/fundamentals/accessibility-usability-inclusion/ — **verificado**.
- GOVERNO FEDERAL. *eMAG — Modelo de Acessibilidade em Governo Eletrônico*, v. 3.1. Página oficial do governo digital — **verificada** (versão, datas, relação com o WCAG 2.0); site emag.governoeletronico.gov.br **verificado** (versão 3.1 de abril de 2014 e seis seções); texto das recomendações individuais **não lido**.
- BRASIL. Lei nº 13.146/2015 (Lei Brasileira de Inclusão), arts. 3º, 63 e 64 — **verificada** em planalto.gov.br.
- NIELSEN NORMAN GROUP. *10 Usability Heuristics for User Interface Design*. https://www.nngroup.com/articles/ten-usability-heuristics/ — **verificado** (dez heurísticas; publicação de 1994, revisão de 2024).
- ISO 9241-11 e ISO 9241-210; NORMAN (princípios de design); SUS (BROOKE) — citados de memória, **não verificados online**.
- Edital Transpetro nº 04/2026.4, Anexo IV, itens 6 e 6.1.


---

## Histórias do Usuário (*User Stories*)

**Módulo:** M06 — Experiência do usuário (UX)
**Texto oficial (Anexo IV):** 6.2 "Histórias do usuário".
**Escopo:** A.
**Status:** `VALIDADO` (aprovado pelo usuário em 2026-10-31, com ressalvas: interpretação dos itens 6.3, 6.4, 6.7 e 6.11 a confirmar; fontes de memória listadas em `docs/qualidade/relatorio-producao-modulo-06.md`). **Verificados em 2026-10-31** (artigo de Bill Wake, xp123.com): as seis letras do INVEST e os três Cs (atribuídos por Wake a Ron Jeffries). O restante (Cohn, Patton, estimativa, MoSCoW) é de memória e **não verificado**.

**Objetivos de aprendizagem.** (1) Definir história do usuário e seu formato; (2) aplicar os "3 Cs" e o critério INVEST; (3) escrever critérios de aceitação; (4) distinguir história, épico, tema, caso de uso e requisito tradicional; (5) relacionar histórias ao *backlog* e à estimativa.

---

### 1. Introdução

A **história do usuário** é uma descrição **curta, em linguagem do usuário**, de uma funcionalidade que **agrega valor** a ele ou ao negócio. Surgiu nas práticas ágeis (*Extreme Programming*) e é muito usada em Scrum e Kanban para compor o *backlog* do produto. Não substitui a conversa: é um **lembrete para conversar** sobre a necessidade.

### 2. Formato

Modelo clássico:

> **Como** \<papel/persona\>, **eu quero** \<objetivo/funcionalidade\> **para que** \<benefício/valor\>.

Exemplo (didático): *Como analista de manutenção, eu quero filtrar ordens de serviço por situação para que eu identifique rapidamente as pendentes.*

O trecho **"para que"** expressa o **valor** e evita histórias que descrevem apenas a solução técnica.

### 3. Os três Cs (Ron Jeffries)

| C | Significado |
|---|---|
| **Card (cartão)** | Registro curto da história (antes, em ficha de papel) |
| **Conversation (conversa)** | Diálogo entre equipe e negócio para detalhar a necessidade |
| **Confirmation (confirmação)** | Critérios de aceitação que confirmam que a história foi atendida |

### 4. Critério INVEST (Bill Wake)

| Letra | Qualidade | Significado |
|---|---|---|
| **I** | *Independent* (independente) | Pode ser implementada sem depender de ordem rígida |
| **N** | *Negotiable* (negociável) | Detalhes definidos na conversa, não um contrato |
| **V** | *Valuable* (valiosa) | Entrega valor ao usuário/negócio |
| **E** | *Estimable* (estimável) | A equipe consegue estimá-la |
| **S** | *Small* (pequena) | Cabe em uma iteração |
| **T** | *Testable* (testável) | Há como verificar se foi atendida |

### 5. Critérios de aceitação

Condições que a história deve satisfazer para ser considerada pronta do ponto de vista do negócio. Formatos comuns: **lista de verificação** ou **Dado–Quando–Então** (*Given–When–Then*, associado ao BDD):

> **Dado** que existem ordens de serviço pendentes e concluídas, **quando** o analista filtra por "pendente", **então** apenas as pendentes são listadas.

Critérios de aceitação **não** são a *Definição de Pronto* (*Definition of Done*), que é **comum a todos os itens** do time (arquivo `02-projetos-produtos`, Scrum); os critérios são **específicos da história**.

### 6. Épicos, temas e decomposição

| Termo | Descrição |
|---|---|
| **Épico** | História grande, demais para uma iteração; deve ser **decomposta** |
| **Tema** | Agrupamento de histórias relacionadas |
| **História** | Unidade entregável em uma iteração |
| **Tarefa** | Atividade técnica da equipe para implementar a história |

Técnicas de divisão: por **passo do fluxo**, por **regra de negócio**, por **perfil de dados**, por **operação (CRUD)**, por **caso simples × complexo**. Dividir **verticalmente** (fatias que atravessam todas as camadas e entregam valor) é preferível a dividir por camada técnica.

### 7. Estimativa e priorização

Histórias são estimadas **em pontos** (tamanho relativo, por exemplo sequência de Fibonacci), muitas vezes com *planning poker*; a **velocidade** do time é a soma de pontos concluídos por iteração. Priorização: valor de negócio, risco, dependência, esforço; técnicas como **MoSCoW** (*must, should, could, won't*) e mapeamento de histórias (*user story mapping*, Jeff Patton). *(Itens de memória; não verificados online.)*

### 8. História × caso de uso × requisito

| Aspecto | História do usuário | Caso de uso | Requisito tradicional ("O sistema deve...") |
|---|---|---|---|
| Tamanho/formalidade | Curta, informal | Detalhado, com fluxos | Declaração formal |
| Foco | Valor para o usuário | Interação ator–sistema | Capacidade/restrição do sistema |
| Detalhamento | Na conversa e nos critérios | No documento | No texto |
| Adequação | Métodos ágeis | Processos mais formais | Contratos e especificações |

Relações: histórias alimentam o *backlog* (Módulo 2, Scrum); requisitos e casos de uso são tratados no Módulo 5 (`02-requisitos-software`).

### 9. Exemplos de uso e de erros comuns

**Boa:** "Como gerente de contrato, eu quero receber alerta de vencimento para que eu renove a tempo." **Fraca:** "Criar tabela de contratos" (tarefa técnica, sem valor claro) e "Como usuário, eu quero um sistema completo" (épico vago, não estimável). Outros erros: história sem critérios, dependências em cascata, histórias grandes demais.

### 10. Comparações conceituais

| A | B | Diferença |
|---|---|---|
| História | Tarefa | Valor para o usuário × atividade técnica |
| Épico | História | Grande, a decompor × entregável na iteração |
| Critério de aceitação | Definição de Pronto | Específico da história × comum ao time |
| História | Caso de uso | Lembrete para conversa × especificação detalhada |

### 11. Atenção para a prova

*Inferência técnica e recomendação pedagógica; sem atribuir frequência à banca.*

- Reconhecer o formato **Como/Quero/Para que** e o papel do "para que".
- Memorizar **INVEST** e os **3 Cs**.
- Não confundir critério de aceitação com Definição de Pronto.
- Item 6.2 **não teve questão** nas duas provas catalogadas (2018 e 2023); a ausência não permite inferir baixa incidência.

### 12. Síntese

História = descrição curta de valor na voz do usuário; 3 Cs; INVEST; critérios de aceitação (Dado–Quando–Então); épico decomposto em histórias; estimativa em pontos; fonte do *backlog*.

### 13. Pontos para a futura produção de questões (registro)

Reconhecer história bem formada; identificar a letra do INVEST violada; distinguir épico e história; diferenciar critério de aceitação e Definição de Pronto.

### 14. Referências

- COHN, Mike. *User Stories Applied* (2004) e *Succeeding with Agile* — **de memória, não verificadas**.
- WAKE, Bill. INVEST in Good Stories — **de memória, não verificada**.
- PATTON, Jeff. *User Story Mapping* — **de memória, não verificada**.
- Edital Transpetro nº 04/2026.4, Anexo IV, item 6.2.


---

## Desenho e Planejamento de Interação em Aplicações Web

**Módulo:** M06 — Experiência do usuário (UX)
**Texto oficial (Anexo IV):** 6.3 "Desenho e planejamento de interação em aplicações web".
**Escopo:** A. O edital não detalha o conteúdo do item; este arquivo adota uma interpretação (arquitetura da informação, navegação, fluxos, padrões de interação, formulários, *feedback*, responsividade, desempenho percebido) **a confirmar**.
**Status:** `VALIDADO` (aprovado pelo usuário em 2026-10-31, com ressalvas: interpretação dos itens 6.3, 6.4, 6.7 e 6.11 a confirmar; fontes de memória listadas em `docs/qualidade/relatorio-producao-modulo-06.md`). Autores e leis citados de memória: **não verificados online**.

**Objetivos de aprendizagem.** (1) Explicar design de interação e seu processo; (2) projetar arquitetura da informação e navegação; (3) aplicar padrões de interação, formulários e *feedback*; (4) planejar fluxos e estados; (5) considerar responsividade e desempenho.

---

### 1. Introdução

**Design de interação** define como o sistema **responde às ações** do usuário e como a pessoa **conduz** suas tarefas. Em aplicações web, envolve decidir **estrutura, navegação, fluxos, componentes, mensagens e comportamentos**, antes e durante a implementação.

### 2. Processo de planejamento

1. **Entender** usuários, tarefas e contexto (personas, histórias, jornadas — arquivos `02`, `04`, `09`).
2. **Definir** objetivos e **requisitos de interação**.
3. **Estruturar** a informação e a navegação.
4. **Desenhar** fluxos, *wireframes* e protótipos (arquivo `08`).
5. **Avaliar** com usuários (usabilidade, acessibilidade) e **iterar**.

### 3. Arquitetura da informação (AI)

Organização, rotulagem, busca e navegação do conteúdo. Componentes clássicos (Rosenfeld e Morville): **sistemas de organização** (por assunto, tarefa, público, cronologia, alfabética), **de rotulagem**, **de navegação** e **de busca**.

| Técnica | Uso |
|---|---|
| **Inventário de conteúdo** | Levantar o que existe |
| **Classificação de cartões (*card sorting*)** | Descobrir como usuários agrupam e nomeiam conteúdo (aberta × fechada) |
| **Teste de árvore (*tree testing*)** | Validar se usuários encontram itens na estrutura |
| **Mapa do site** | Representar a hierarquia de páginas |

### 4. Navegação

| Padrão | Descrição |
|---|---|
| **Menu global** | Acesso às seções principais, consistente em todas as páginas |
| **Navegação local** | Itens da seção atual |
| **Trilha de navegação (*breadcrumb*)** | Mostra a localização na hierarquia |
| **Busca** | Complementa a navegação em sites com muito conteúdo |
| **Paginação / rolagem infinita** | Divisão de longas listas |
| **Menu "hambúrguer"** | Compacta navegação em telas pequenas |

Princípios: **orientar** (onde estou?), **informar** (para onde posso ir?), **consistência** e **poucos cliques** relevantes, sem sacrificar a clareza.

### 5. Fluxos, estados e *feedback*

- **Fluxo de tarefa** (*user flow*): caminho de telas e decisões até concluir um objetivo, incluindo erros e exceções.
- **Estados da interface:** vazio, carregando, sucesso, erro, desativado, parcial.
- ***Feedback*:** indicar progresso (barras, *spinners*), confirmar ações, tornar visível o estado (heurística 1 de Nielsen — arquivo `01`).
- **Tempo de resposta** (Nielsen, *Response Times: The 3 Important Limits*, nngroup.com — **verificado em 2026-10-31**): cerca de **0,1 s** parece instantâneo; **1 s** preserva o fluxo de pensamento; **10 s** é o limite de atenção, exigindo indicação de progresso.
- **Prevenção e recuperação de erros:** validar cedo, confirmar ações destrutivas, permitir **desfazer**.

### 6. Componentes e padrões de interação

Botões, links, campos, listas de seleção, caixas de seleção, botões de opção, abas, acordeões, modais, tabelas, cartões, *tooltips*, notificações. Escolher o componente pelo **tipo de dado** e pela **quantidade de opções** (poucas opções: botões de opção; muitas: lista com busca).

**Formulários:** rótulos visíveis e associados aos campos, agrupamento lógico, campos obrigatórios identificados, máscaras e validação **em linha**, mensagens específicas, preservação dos dados após erro, uso de campos adequados (data, e-mail), autopreenchimento, reduzir campos desnecessários.

### 7. Leis e princípios de interação (de memória)

| Princípio | Ideia |
|---|---|
| **Lei de Fitts** | Tempo para atingir um alvo cresce com a distância e diminui com o tamanho do alvo; botões importantes devem ser grandes e próximos |
| **Lei de Hick** | Tempo de decisão cresce com o número de opções; reduzir e agrupar escolhas |
| **Lei de Jakob** | Usuários passam a maior parte do tempo em outros sites; esperam convenções |
| **Proximidade/Gestalt** | Elementos próximos são percebidos como relacionados |
| **Divulgação progressiva** | Mostrar detalhes apenas quando necessários |

### 8. Aplicações web: responsividade e desempenho

- **Design responsivo:** layout se adapta ao tamanho da tela (grades fluidas, imagens flexíveis, *media queries*); *mobile first* como estratégia.
- **Alvos de toque** adequados; navegação por teclado e leitores de tela (arquivo `01`).
- **Desempenho percebido:** carregamento progressivo, *skeleton screens*, redução de requisições.
- **Aplicações de página única (SPA)**, rotas, histórico do navegador e URLs significativas.
- **Padrões de segurança de UX:** sessão expirada, confirmações, mensagens que não revelam dados sensíveis (relação com o Módulo 9).

### 9. Exemplo (didático)

Portal de solicitação de serviços: menu global com quatro áreas; busca no topo; formulário em três etapas com indicador de progresso; validação em linha; confirmação final com resumo e opção de editar; estado "vazio" com orientação quando não há solicitações; página responsiva testada em celular.

### 10. Comparações conceituais

| A | B | Diferença |
|---|---|---|
| Arquitetura da informação | Design de interação | Organização do conteúdo × comportamento às ações |
| *Wireframe* | Protótipo | Esboço estrutural × simulação interativa (arquivo `08`) |
| *Card sorting* | *Tree testing* | Descobrir agrupamentos × validar a estrutura |
| Navegação global | Navegação local | Seções principais × itens da seção atual |
| Design responsivo | Design adaptativo | Layout fluido × layouts fixos por faixa de tela (de memória) |

### 11. Atenção para a prova

*Inferência técnica e recomendação pedagógica; sem atribuir frequência à banca.*

- Item genérico: esperar enunciados sobre **boas práticas de interface**, **heurísticas** e **acessibilidade**, aplicadas a casos.
- Relacionar *feedback*, prevenção de erros e consistência às heurísticas.
- Distinguir AI, navegação e interação; *wireframe* e protótipo.
- Item 6.3 **não teve questão** nas duas provas catalogadas; a questão de prototipação de alta fidelidade (2023, Q29) pertence ao item 6.9.

### 12. Síntese

Design de interação: entender → estruturar → desenhar → avaliar. AI (organização, rotulagem, navegação, busca); navegação consistente; fluxos e estados; *feedback*; formulários; responsividade e desempenho; leis de Fitts e Hick.

### 13. Pontos para a futura produção de questões (registro)

Identificar a heurística aplicada a um caso; escolher componente/padrão adequado; diferenciar AI e interação; reconhecer boas práticas de formulário e navegação.

### 14. Referências

- ROSENFELD; MORVILLE; ARANGO. *Information Architecture* — **de memória, não verificada**.
- COOPER et al. *About Face*; NORMAN. *The Design of Everyday Things* — **de memória, não verificadas**.
- NIELSEN. Limites de tempo de resposta; heurísticas (heurísticas confirmadas no arquivo `01`).
- Edital Transpetro nº 04/2026.4, Anexo IV, item 6.3.


---

## Projeto Centrado no Usuário de Software

**Módulo:** M06 — Experiência do usuário (UX)
**Texto oficial (Anexo IV):** 6.4 "Projeto centrado no usuário de software".
**Escopo:** A. Interpretação adotada (a confirmar): *design centrado no usuário* (DCU/UCD) e *design centrado no ser humano* (ISO 9241-210), com seus princípios, atividades, métodos e relação com o ciclo de vida de software.
**Status:** `VALIDADO` (aprovado pelo usuário em 2026-10-31, com ressalvas: interpretação dos itens 6.3, 6.4, 6.7 e 6.11 a confirmar; fontes de memória listadas em `docs/qualidade/relatorio-producao-modulo-06.md`). A norma ISO 9241-210 **não foi consultada** (iso.org bloqueado, HTTP 403); o conteúdo vem de memória.

**Objetivos de aprendizagem.** (1) Definir projeto centrado no usuário; (2) enumerar seus princípios e atividades; (3) escolher métodos de pesquisa e avaliação; (4) integrá-lo a métodos ágeis; (5) distinguir DCU, design participativo e design centrado na atividade.

---

### 1. Introdução

**Projeto (design) centrado no usuário** é uma abordagem em que as **necessidades, características, tarefas e contextos** dos usuários **orientam todas as decisões** de projeto, com **envolvimento dos usuários** e **avaliação iterativa**. Opõe-se a projetar a partir apenas da tecnologia, da opinião da equipe ou de requisitos sem contato com quem usará o sistema. Reduz retrabalho, melhora a adoção e a satisfação, e está ligado à usabilidade (arquivo `01`).

### 2. Princípios (ISO 9241-210, de memória)

A norma sobre processos de projeto centrado no ser humano apresenta seis princípios:

1. O projeto é baseado em **entendimento explícito** de usuários, tarefas e ambientes.
2. **Usuários são envolvidos** em todo o projeto e desenvolvimento.
3. O projeto é conduzido e refinado por **avaliação centrada no usuário**.
4. O processo é **iterativo**.
5. O projeto considera **toda a experiência do usuário**.
6. A equipe inclui **competências e perspectivas multidisciplinares**.

### 3. Atividades do processo (ISO 9241-210, de memória)

| Atividade | Conteúdo |
|---|---|
| **Planejar** o processo centrado no usuário | Definir como e quando envolver usuários |
| **Compreender e especificar o contexto de uso** | Quem usa, tarefas, ambiente técnico e físico |
| **Especificar requisitos do usuário** | Necessidades e objetivos a atender |
| **Produzir soluções de projeto** | Protótipos e alternativas |
| **Avaliar o projeto** | Testar com usuários contra os requisitos; iterar |

O ciclo repete até que os requisitos sejam atendidos.

### 4. Métodos

| Fase | Métodos |
|---|---|
| **Entender usuários** | Entrevistas, questionários, observação, **investigação contextual**, diários, grupos focais, análise de dados de uso |
| **Estruturar** | **Personas**, cenários, jornada do usuário, mapa de empatia (arquivo `09`), **classificação de cartões** |
| **Projetar** | Esboços, *wireframes*, protótipos (arquivo `08`), padrões de interface |
| **Avaliar** | **Avaliação heurística**, **percurso cognitivo**, **teste de usabilidade**, SUS, testes A/B (arquivo `01`) |
| **Acompanhar** | Pesquisa pós-implantação, métricas, suporte |

Um estudo qualitativo com poucos usuários revela a maior parte dos problemas de usabilidade (ideia popularizada por Nielsen; **valores específicos não verificados**).

### 5. Abordagens relacionadas

| Abordagem | Característica |
|---|---|
| **Design centrado no usuário** | Usuários são fonte de informação e testam o projeto; a equipe projeta |
| **Design participativo (cooperativo)** | Usuários **participam como co-projetistas** das decisões |
| **Design centrado na atividade** | Foco nas atividades e tarefas, mais que nas preferências individuais |
| **Design centrado no ser humano** (ISO 9241-210) | Generaliza o DCU para todos os afetados pelo sistema |
| **Design universal** | Projeto para o maior número possível de pessoas (arquivo `01`) |

### 6. Integração com o desenvolvimento de software

- Em **ciclos em cascata**, a pesquisa de usuários concentra-se no início e a avaliação no final, com risco de descobrir problemas tarde.
- Em **métodos ágeis**, a prática é **UX contínuo**: pesquisa e prototipação à frente do desenvolvimento, **histórias** com critérios de aceitação (arquivo `02`), validação em *sprint reviews* e **entregas incrementais** (MVP — arquivo `08`).
- **Equipe multidisciplinar:** UX, desenvolvimento, negócio, dados, acessibilidade.
- Papéis: **pesquisador de UX**, ***designer* de interação/UI**, **arquiteto de informação**, **redator de UX**.

### 7. Exemplo (didático)

Sistema de apontamento de inspeções: entrevistas e observação em campo revelam uso com luvas e sob luz solar; derivam-se requisitos (botões grandes, contraste alto, modo offline); protótipo testado com inspetores; ajuste de fluxo; nova rodada de teste; entrega em incrementos.

### 8. Comparações conceituais

| A | B | Diferença |
|---|---|---|
| Centrado no usuário | Centrado na tecnologia | Necessidades das pessoas × viabilidade técnica como ponto de partida |
| Centrado no usuário | Participativo | Usuário informa e testa × usuário co-projeta |
| Pesquisa generativa | Pesquisa avaliativa | Descobrir necessidades × testar soluções |
| Pesquisa qualitativa | Quantitativa | Por quê? × quanto/quantos? |
| Usuário | *Stakeholder* | Quem usa × quem é afetado ou tem interesse |

### 9. Atenção para a prova

*Inferência técnica e recomendação pedagógica; sem atribuir frequência à banca.*

- Reconhecer que o projeto centrado no usuário é **iterativo**, envolve **usuários** e **avaliação** em todo o processo.
- Não confundir **avaliação com especialistas** (heurística) e **teste com usuários**.
- Item 6.4 **não teve questão** nas duas provas catalogadas.

### 10. Síntese

DCU: entendimento do contexto, envolvimento dos usuários, avaliação, iteração, experiência completa, equipe multidisciplinar. Atividades: planejar, contexto, requisitos, soluções, avaliar. Métodos de pesquisa, estruturação, projeto e avaliação. Em ágil: UX contínuo.

### 11. Pontos para a futura produção de questões (registro)

Princípios e atividades do DCU; escolha de método para o objetivo; diferença DCU×participativo; integração com ágil.

### 12. Referências

- ISO 9241-210 (processos de projeto centrado no ser humano) — **de memória; não consultada (HTTP 403)**.
- NORMAN, D.; DRAPER, S. *User Centered System Design* (1986); ABRAS et al. — **de memória, não verificados**.
- Edital Transpetro nº 04/2026.4, Anexo IV, item 6.4.


---

## Storytelling com Dados (*Data Storytelling*)

**Módulo:** M06 — Experiência do usuário (UX)
**Texto oficial (Anexo IV):** 6.5 "Storytelling com dados".
**Escopo:** A.
**Status:** `VALIDADO` (aprovado pelo usuário em 2026-10-31, com ressalvas: interpretação dos itens 6.3, 6.4, 6.7 e 6.11 a confirmar; fontes de memória listadas em `docs/qualidade/relatorio-producao-modulo-06.md`). Autores (Knaflic, Tufte, Few, Cleveland, Gestalt) citados de memória: **não verificados online**.

**Objetivos de aprendizagem.** (1) Definir *data storytelling*; (2) estruturar uma narrativa com dados; (3) escolher gráficos adequados; (4) aplicar atributos pré-atentivos e princípios de Gestalt; (5) evitar distorções e erros comuns.

---

### 1. Introdução

***Data storytelling*** é comunicar **análises e dados** por meio de uma **narrativa** que combina **dados, visualização e contexto** para **levar o público a compreender e agir**. Não é "enfeitar" gráficos: é decidir **qual mensagem** os dados sustentam, **para quem** e **qual ação** se espera.

Componentes frequentemente citados: **dados** (base), **visuais** (gráficos) e **narrativa** (contexto, sequência, mensagem).

### 2. Processo (inspirado em Cole Nussbaumer Knaflic, de memória)

1. **Compreender o contexto:** quem é o público, o que precisa decidir, qual a mensagem central ("grande ideia") e qual o meio (apresentação, relatório, painel).
2. **Escolher a visualização adequada.**
3. **Eliminar a desordem (*clutter*).**
4. **Direcionar a atenção** para o que importa.
5. **Pensar como um designer:** hierarquia, alinhamento, espaço em branco.
6. **Contar a história:** começo (contexto/problema), meio (análise/evidência), fim (conclusão/ação).

### 3. Estrutura narrativa

| Elemento | Função |
|---|---|
| **Contexto** | Por que o assunto importa agora |
| **Conflito/problema** | O que os dados revelam de diferente do esperado |
| **Evidência** | Gráficos e números que sustentam |
| **Resolução/ação** | Recomendação e próximos passos |

**Título que informa a conclusão** ("Atrasos cresceram 20% no terceiro trimestre") ajuda mais que título descritivo ("Atrasos por trimestre"). *(Exemplo didático, valores fictícios.)*

### 4. Escolha do gráfico

| Objetivo | Gráficos usuais |
|---|---|
| **Comparar categorias** | Barras horizontais/verticais |
| **Evolução no tempo** | Linhas (séries), colunas para poucos períodos |
| **Composição / partes de um todo** | Barras empilhadas; pizza apenas com **poucas** fatias; *treemap* |
| **Distribuição** | Histograma, *boxplot* |
| **Relação entre variáveis** | Dispersão (*scatter*), bolhas |
| **Ranking** | Barras ordenadas |
| **Geográfico** | Mapas (coropléticos), com cuidado |
| **Fluxos / etapas** | Funil, Sankey |
| **Valor único (KPI)** | Número grande com contexto (meta, variação) |

Evitar: gráficos 3D, pizzas com muitas fatias, eixos duplos confusos, cores sem significado, **eixo vertical de barras que não começa em zero** (distorce a comparação).

### 5. Atributos pré-atentivos e Gestalt

**Atributos pré-atentivos** são percebidos rapidamente, sem esforço consciente: **cor (matiz e intensidade)**, **posição**, **tamanho**, **forma**, **orientação**, **movimento**. Usar **um** destaque (por exemplo, cor forte em uma barra, cinza nas demais) direciona o olhar.

**Princípios de Gestalt:** **proximidade**, **similaridade**, **continuidade**, **fechamento**, **conexão**, **figura–fundo**. Ajudam a agrupar e organizar elementos sem linhas e bordas em excesso.

### 6. Cor, rótulos e simplicidade

- Usar cor com **propósito** (destaque, categoria, alerta) e paleta **limitada**.
- **Acessibilidade:** não depender só da cor (daltonismo); contraste suficiente (arquivo `01`).
- **Rotular diretamente** (rótulos nos dados) em vez de legendas distantes; remover grades e bordas desnecessárias.
- **Razão dados–tinta** (Tufte): maximizar a parcela da tinta que representa dados; eliminar "lixo gráfico" (*chartjunk*).

### 7. Ética e armadilhas

- **Distorções:** eixo truncado, escalas inconsistentes, área desproporcional, recorte seletivo de períodos.
- **Correlação ≠ causalidade.**
- **Viés de confirmação** na escolha do que mostrar.
- Informar **fonte, período, definição das métricas** e limitações.
- **Excesso de narrativa** que sobrepõe a evidência.

### 8. Exemplo (didático)

Relatório à diretoria: o título afirma "Tempo médio de atendimento caiu 15% após a automação"; um gráfico de linhas destaca em âmbar a série pós-automação, as demais em cinza; anotação marca a data da mudança; o último *slide* recomenda estender a automação a duas áreas.

### 9. Comparações conceituais

| A | B | Diferença |
|---|---|---|
| *Data storytelling* | Visualização de dados | Narrativa para ação × representação gráfica |
| Visualização explanatória | Exploratória | Comunica conclusão a um público × permite ao analista descobrir |
| Gráfico de barras | Gráfico de linhas | Comparar categorias × mostrar tendência temporal |
| Destaque pré-atentivo | Decoração | Guia a atenção × distrai |
| Dashboard | Narrativa | Monitoramento contínuo × mensagem específica (arquivo `06`) |

### 10. Atenção para a prova

*Inferência técnica e recomendação pedagógica; sem atribuir frequência à banca.*

- Associar *data storytelling* a **dados + visual + narrativa** voltados à **ação**.
- Saber **escolher o gráfico** pelo objetivo e reconhecer **distorções**.
- Item 6.5 **não teve questão** nas duas provas catalogadas.

### 11. Síntese

Contexto e público; mensagem central; gráfico adequado ao objetivo; reduzir ruído; destacar com atributos pré-atentivos; narrativa começo-meio-fim; ética e transparência.

### 12. Pontos para a futura produção de questões (registro)

Escolha de gráfico por objetivo; identificação de distorção; componentes de *data storytelling*; uso de destaque e cor.

### 13. Referências

- KNAFLIC, C. N. *Storytelling com Dados* — **de memória, não verificada**.
- TUFTE, E. *The Visual Display of Quantitative Information*; FEW, S. *Show Me the Numbers*; CLEVELAND (percepção gráfica) — **de memória, não verificados**.
- Edital Transpetro nº 04/2026.4, Anexo IV, item 6.5.


---

## Organização e Apresentação de Dados em Relatórios e Dashboards

**Módulo:** M06 — Experiência do usuário (UX)
**Texto oficial (Anexo IV):** 6.6 "Organização e apresentação de dados em relatórios e dashboards".
**Escopo:** A. Complementa `05-data-storytelling` (princípios visuais) e se relaciona ao Módulo 7 (análise de dados) e ao Módulo 1 (BI, indicadores).
**Status:** `VALIDADO` (aprovado pelo usuário em 2026-10-31, com ressalvas: interpretação dos itens 6.3, 6.4, 6.7 e 6.11 a confirmar; fontes de memória listadas em `docs/qualidade/relatorio-producao-modulo-06.md`). Definições e autores de memória: **não verificados online**.

**Objetivos de aprendizagem.** (1) Distinguir relatório, dashboard e painel; (2) escolher e organizar indicadores (KPIs); (3) projetar o *layout* de um dashboard; (4) aplicar interatividade e filtros; (5) garantir clareza, acessibilidade e governança.

---

### 1. Introdução

**Relatório** e ***dashboard*** apresentam dados para apoiar decisões, mas diferem em objetivo e formato. A boa apresentação depende do **público**, da **decisão** e da **frequência** de uso.

### 2. Relatório × dashboard

| Aspecto | Relatório | *Dashboard* (painel) |
|---|---|---|
| Objetivo | Documentar e detalhar | Monitorar de relance |
| Formato | Tabelas, texto, gráficos; muitas vezes paginado | Tela única, visual, compacta |
| Detalhe | Alto | Resumo, com navegação (*drill-down*) |
| Frequência | Periódico ou sob demanda | Contínuo / quase tempo real |
| Interação | Limitada (filtros e parâmetros) | Filtros, seleção, detalhamento |
| Uso típico | Prestação de contas, auditoria | Acompanhamento operacional/gerencial |

Definição de *dashboard* de Stephen Few (de memória): exibição **visual das informações mais importantes** necessárias para atingir um ou mais objetivos, consolidadas em **uma única tela**, de modo que possam ser **monitoradas rapidamente**.

**Tipos de dashboard:** **operacional** (tempo real, ações imediatas), **tático/analítico** (análise de tendências, exploração) e **estratégico** (indicadores de alto nível, metas).

### 3. Indicadores (KPIs)

**KPI** (*Key Performance Indicator*) mede o desempenho em relação a um objetivo. Boas práticas: **poucos** e **relevantes**; **definição clara** (fórmula, fonte, periodicidade, responsável); **meta** e **comparação** (período anterior, orçamento); **tendência**; **alertas** (semáforos com critérios definidos e acessíveis).

Critério **SMART** para metas: específica, mensurável, alcançável, relevante, com prazo (de memória). **Indicadores de resultado** (o que aconteceu) × **de tendência/direcionadores** (o que levará ao resultado).

### 4. Organização da informação

- **Hierarquia visual:** o mais importante em destaque, geralmente **no alto e à esquerda** (leitura ocidental, em F ou Z).
- **Agrupar** métricas relacionadas; separar por seções.
- **Do geral ao particular:** visão resumida → detalhe sob demanda.
- **Consistência:** mesmas cores, escalas, formatos e unidades em todo o painel.
- **Contexto:** títulos claros, unidades, período, data/hora da atualização, fonte, definição das métricas.
- **Espaço em branco** e alinhamento; evitar sobrecarga.

### 5. Escolha de visualizações para dashboards

Reutilizar a tabela de escolha do arquivo `05`. Complementos: **cartões de KPI** (valor, variação, meta), ***sparklines*** (minigráficos de tendência), **medidores** (*gauges*; usar com parcimônia por ocuparem muito espaço), **tabelas** (quando o usuário precisa de valores exatos), **mapas de calor**, **gráficos de bala (*bullet*)** para comparação com meta. **Tabelas** e **gráficos** têm funções diferentes: tabelas para consulta de valores exatos; gráficos para padrões e comparações.

### 6. Interatividade

Filtros (período, unidade, produto), segmentação, ***drill-down*** (detalhar), ***drill-through*** (ir a relatório detalhado), *tooltips*, ordenação, exportação, atualização de dados. Alertas e inscrições. Interatividade **não** substitui um *design* claro: o estado inicial deve responder às perguntas principais.

### 7. Relatórios: organização

- **Estrutura:** capa/identificação, resumo executivo, introdução e método, resultados, conclusões e recomendações, anexos.
- **Para quem:** executivo (resumo), gerente (análise), operacional (detalhe).
- **Tabelas:** alinhar números à direita, usar mesmo número de casas decimais, totais e subtotais, ordenar por critério claro, evitar linhas e grades excessivas.
- **Relatórios paginados** (impressão/PDF) e **relatórios interativos**.

### 8. Qualidade, governança e acessibilidade

- **Qualidade dos dados:** origem confiável, atualização, consistência de definições (relação com Módulos 1 e 7).
- **Camada semântica / glossário** para evitar números divergentes entre áreas.
- **Segurança e privacidade:** controle de acesso por perfil e linha, mascaramento de dados pessoais (LGPD — Módulo 4; Módulo 9).
- **Acessibilidade:** contraste, texto alternativo, não depender só de cor, navegação por teclado, alternativa tabular aos gráficos (arquivo `01`).
- **Desempenho:** tempo de carregamento aceitável; extratos pré-agregados.
- **Ferramentas:** o edital não exige ferramenta específica (por exemplo, Power BI, Tableau, Superset); concentre-se nos princípios.

### 9. Erros comuns

Excesso de indicadores; gráficos 3D; cores sem critério; falta de contexto e de meta; métricas ambíguas; painel sem público definido; detalhe demais na tela inicial; escalas inconsistentes.

### 10. Exemplo (didático)

Painel de manutenção: topo com quatro cartões de KPI (disponibilidade, MTBF, backlog, custo vs. orçamento) com variação e semáforo; abaixo, tendência mensal e barras por unidade; filtros por período e unidade; clique na barra abre detalhe das ordens de serviço; rodapé com fonte e hora de atualização.

### 11. Comparações conceituais

| A | B | Diferença |
|---|---|---|
| Relatório | *Dashboard* | Documentar/detalhar × monitorar de relance |
| Dashboard operacional | Estratégico | Tempo real × metas de alto nível |
| *Drill-down* | *Drill-through* | Detalhar na mesma visão × ir a outro relatório |
| Indicador | Métrica | Medida ligada a objetivo × medida qualquer |
| Tabela | Gráfico | Valores exatos × padrões e comparações |

### 12. Atenção para a prova

*Inferência técnica e recomendação pedagógica; sem atribuir frequência à banca.*

- Distinguir **relatório** de **dashboard** e **tipos de dashboard**.
- Boas práticas: poucos indicadores relevantes, contexto, hierarquia, consistência.
- Item 6.6 **não teve questão** nas duas provas catalogadas.

### 13. Síntese

Dashboard = visão consolidada e rápida em uma tela; relatório = detalhe e registro. KPIs com definição, meta e contexto; hierarquia visual; interatividade (filtros, *drill-down*); governança, segurança e acessibilidade.

### 14. Pontos para a futura produção de questões (registro)

Escolher formato (relatório×dashboard); selecionar visualização; identificar falha de projeto; relacionar KPI e meta.

### 15. Referências

- FEW, S. *Information Dashboard Design* — **de memória, não verificada**.
- Conceitos de KPI e BI — **de memória**; ver também Módulos 1 e 7.
- Edital Transpetro nº 04/2026.4, Anexo IV, item 6.6.


---

## Interoperabilidade de Interfaces Web entre Diversos Navegadores

**Módulo:** M06 — Experiência do usuário (UX)
**Texto oficial (Anexo IV):** 6.7 "Interoperabilidade de interfaces web entre diversos navegadores".
**Escopo:** A. Aqui o foco é a **compatibilidade entre navegadores** (*cross-browser*); interoperabilidade de sistemas (integração, APIs) é outro tema. Não é o tema de Java/J2EE.
**Status:** `VALIDADO` (aprovado pelo usuário em 2026-10-31, com ressalvas: interpretação dos itens 6.3, 6.4, 6.7 e 6.11 a confirmar; fontes de memória listadas em `docs/qualidade/relatorio-producao-modulo-06.md`). Conteúdo técnico de memória (padrões W3C/WHATWG, motores de renderização): **não verificado online nesta etapa**.

**Objetivos de aprendizagem.** (1) Explicar por que interfaces se comportam de forma diferente entre navegadores; (2) aplicar padrões e boas práticas (padrões web, detecção de recursos, melhoria progressiva); (3) usar *polyfills*, prefixos e *fallbacks*; (4) planejar testes entre navegadores; (5) relacionar com responsividade e acessibilidade.

---

### 1. Introdução

Uma interface web deve funcionar de modo **equivalente** em navegadores diferentes (Chrome, Edge, Firefox, Safari etc.), versões e dispositivos. As diferenças surgem de **motores de renderização**, **implementações parciais de padrões**, **recursos experimentais** e **configurações do usuário**. O objetivo não é aparência idêntica *pixel a pixel*, mas **funcionalidade e experiência equivalentes**, com **degradação elegante**.

### 2. Por que há diferenças

| Causa | Exemplo |
|---|---|
| **Motores de renderização diferentes** | Blink (Chrome/Edge), Gecko (Firefox), WebKit (Safari) — de memória |
| **Padrões implementados em ritmos distintos** | Uma API disponível em um navegador e ausente em outro |
| **Interpretação divergente/*bugs*** | Diferenças de *layout*, formulários, rolagem |
| **Prefixos de fabricante e recursos experimentais** | `-webkit-`, `-moz-` |
| **Versões antigas** | Navegadores sem suporte a recursos modernos |
| **Dispositivo e sistema** | Teclado virtual, toque, resolução, fontes |
| **Configurações do usuário** | Tamanho de fonte, bloqueadores, modo escuro |

**Modos de renderização:** documentos sem declaração de tipo (`<!DOCTYPE html>`) podem ser renderizados em **modo de compatibilidade (*quirks mode*)**, com comportamentos antigos e divergentes; declarar o *doctype* ativa o **modo padrão**.

### 3. Padrões web

Os padrões definem a base comum: **HTML, CSS, JavaScript (ECMAScript), DOM** e APIs web, especificados pelo **W3C** e pelo **WHATWG** (HTML Living Standard) e pela **Ecma International** (ECMAScript) *(de memória)*. **Interoperabilidade** é alcançada quando os navegadores implementam os padrões do mesmo modo. Boas práticas:

- Escrever **HTML semântico** e válido; separar **estrutura (HTML), apresentação (CSS) e comportamento (JavaScript)**.
- Preferir **padrões** a recursos proprietários.
- Consultar tabelas de **compatibilidade** (por exemplo, MDN, *Can I Use*) antes de usar um recurso — *(ferramentas citadas de memória)*.
- Usar *CSS reset* ou *normalize* para reduzir diferenças de estilo padrão.

### 4. Técnicas

| Técnica | Descrição |
|---|---|
| **Melhoria progressiva (*progressive enhancement*)** | Começar com HTML funcional para todos; acrescentar CSS e JavaScript para navegadores capazes |
| **Degradação elegante (*graceful degradation*)** | Projetar para navegadores modernos; garantir alternativa aceitável nos antigos |
| **Detecção de recursos (*feature detection*)** | Testar se o recurso existe (por exemplo, `if ('fetch' in window)`; `@supports` em CSS), em vez de detectar o navegador |
| **Detecção de navegador (*user-agent sniffing*)** | Frágil e desaconselhada; evitar |
| ***Polyfill*** | Código que implementa um recurso moderno em navegadores que não o possuem |
| **Transpilação** | Converter JavaScript moderno para versões antigas (por exemplo, Babel) |
| **Prefixos de fabricante / *autoprefixer*** | Adicionar prefixos automaticamente quando necessário |
| ***Fallbacks*** | Alternativas (fontes, estilos, imagens) quando o recurso falha |
| **Design responsivo** | Adaptação a telas variadas (arquivo `03`) |
| **Consultas de mídia e unidades relativas** | Layouts flexíveis (`em`, `rem`, `%`, `flex`, `grid`) |

*Exemplos de código (ilustrativos, não executados):*

```js
// Detecção de recurso (em vez de detectar navegador)
if ('IntersectionObserver' in window) {
  // usa o recurso moderno
} else {
  // alternativa simples (fallback)
}
```

```css
/* Consulta de suporte em CSS */
@supports (display: grid) {
  .layout { display: grid; }
}
```

### 5. Testes entre navegadores

- Definir **matriz de compatibilidade**: navegadores, versões e dispositivos suportados, com base no **perfil real dos usuários** (dados de acesso) e na política da organização.
- **Testes manuais** nos navegadores prioritários; **testes automatizados** (ferramentas que controlam navegadores por protocolo padronizado, como **WebDriver**, usado pelo Selenium — de memória); **serviços em nuvem** com muitos dispositivos.
- Testar **funcionalidade**, ***layout***, **desempenho**, **acessibilidade**, **formulários** e **JavaScript**.
- **Regressão visual:** comparar capturas de tela.
- Validar HTML/CSS e acessibilidade com ferramentas (arquivo `01`).
- Registrar **política de suporte** (por exemplo, "duas últimas versões") e **plano para navegadores legados**.

### 6. Interoperabilidade e acessibilidade

HTML semântico e ARIA melhoram o funcionamento com **tecnologias assistivas** em diferentes navegadores e leitores de tela (princípio **Robusto** do WCAG — arquivo `01`). Testar com ao menos uma combinação de leitor de tela e navegador.

### 7. Exemplo (didático)

Um portal usa um componente de calendário baseado em recurso recente: (1) pesquisa-se a compatibilidade; (2) o formulário funciona com campo de texto simples em navegadores antigos (melhoria progressiva); (3) um *polyfill* é carregado somente quando necessário; (4) a matriz de testes cobre dois navegadores desktop e dois móveis; (5) a política de suporte é documentada.

### 8. Comparações conceituais

| A | B | Diferença |
|---|---|---|
| Melhoria progressiva | Degradação elegante | Base simples e acréscimos × projeto avançado com alternativa |
| Detecção de recursos | Detecção de navegador | Verifica o que existe × adivinha pelo identificador (frágil) |
| *Polyfill* | Transpilação | Implementa API ausente × converte a sintaxe |
| Padrão | Recurso proprietário | Suportado por vários × específico de um fornecedor |
| Interoperabilidade entre navegadores | Interoperabilidade de sistemas | Mesma interface funciona em vários navegadores × sistemas trocam dados |

### 9. Atenção para a prova

*Inferência técnica e recomendação pedagógica; sem atribuir frequência à banca.*

- **Padrões web** e **detecção de recursos** são a resposta típica para compatibilidade, não detecção do navegador.
- Distinguir *progressive enhancement* e *graceful degradation*.
- Item 6.7 **não teve questão** nas duas provas catalogadas.

### 10. Síntese

Diferenças vêm de motores e implementações; solução = padrões, HTML semântico, detecção de recursos, melhoria progressiva, *polyfills*, testes em matriz de navegadores e política de suporte; sem exigir aparência idêntica.

### 11. Pontos para a futura produção de questões (registro)

Escolher técnica para um cenário; diferenciar melhoria progressiva e degradação elegante; identificar falha de compatibilidade; definir estratégia de testes.

### 12. Referências

- W3C, WHATWG, Ecma International; MDN Web Docs; *Can I Use* — **citados de memória, não verificados online nesta etapa**.
- Edital Transpetro nº 04/2026.4, Anexo IV, item 6.7.


---

## Mínimo Produto Viável (MVP) e Prototipação

**Módulo:** M06 — Experiência do usuário (UX)
**Textos oficiais (Anexo IV):** 6.8 "Mínimo Produto Viável (MVP)"; 6.9 "Prototipação".
**Escopo:** A.
**Status:** `VALIDADO` (aprovado pelo usuário em 2026-10-31, com ressalvas: interpretação dos itens 6.3, 6.4, 6.7 e 6.11 a confirmar; fontes de memória listadas em `docs/qualidade/relatorio-producao-modulo-06.md`). Autores (Ries, Blank, Cagan) citados de memória: **não verificados online**.

**Objetivos de aprendizagem.** (1) Definir MVP e distingui-lo de protótipo e de produto "pela metade"; (2) aplicar o ciclo construir–medir–aprender; (3) classificar protótipos por fidelidade e finalidade; (4) escolher ferramenta e nível; (5) relacionar com UX, ágil e gestão de riscos.

---

### 1. MVP — Mínimo Produto Viável (item 6.8)

#### 1.1 Definição

**MVP** (*Minimum Viable Product*) é a **versão de um produto com o menor conjunto de funcionalidades** que permite **entregar valor real aos primeiros usuários** e **aprender o máximo possível sobre eles com o mínimo esforço** (formulação associada a Eric Ries e ao *Lean Startup*; de memória). O MVP serve para **validar hipóteses** de valor e de mercado **antes** de investir em um produto completo.

Pontos centrais:

- **Mínimo** não é "ruim" nem incompleto: é o **essencial** para testar a hipótese.
- **Viável**: deve ser **utilizável e entregar valor**; não é uma maquete.
- **Produto**: é usado por pessoas reais, e gera dados reais.
- Objetivo: **aprendizagem validada**.

#### 1.2 Ciclo construir–medir–aprender (*Build–Measure–Learn*)

1. **Construir** o MVP a partir de uma **hipótese** (por exemplo: "gestores usarão alertas de vencimento").
2. **Medir** o comportamento (uso, conversão, retenção, satisfação) com **métricas acionáveis**, em vez de métricas de vaidade.
3. **Aprender** e decidir: **perseverar** (continuar), **pivotar** (mudar de direção) ou **encerrar**.

#### 1.3 Tipos e formas de MVP (de memória)

| Tipo | Descrição |
|---|---|
| **Página de apresentação (*landing page*)** | Mede interesse antes de construir |
| **Vídeo demonstrativo** | Simula o produto para avaliar interesse |
| **"Mágico de Oz"** | Interface real, processo manual por trás |
| **Concierge** | Serviço prestado manualmente a poucos clientes |
| **Protótipo funcional / produto reduzido** | Poucas funcionalidades, usadas de fato |

#### 1.4 Como definir o escopo

Listar funcionalidades; priorizar por **valor × esforço × risco**; técnica **MoSCoW**; manter somente o que é **necessário para a hipótese**; planejar a evolução em incrementos. Em Scrum, o MVP corresponde a um ou mais incrementos entregues cedo (Módulo 2).

#### 1.5 Vantagens e riscos

| Vantagens | Riscos/limitações |
|---|---|
| Reduz desperdício e risco | Qualidade mínima mal interpretada como produto ruim |
| Feedback real precoce | Escopo cresce ("MVP gordo") |
| Time-to-market menor | Em ambientes regulados/críticos, o mínimo pode envolver exigências de segurança e conformidade que não são negociáveis |
| Decisões baseadas em dados | Métricas de vaidade enganam |

*Nota:* em organizações públicas e industriais, o "mínimo viável" deve respeitar **segurança, conformidade e continuidade** (Módulos 4 e 9).

#### 1.6 Exemplo (didático)

Hipótese: inspetores registrarão ocorrências pelo celular se for mais rápido que o papel. MVP: formulário simples de três campos, com envio e consulta, para um grupo de dez inspetores durante um mês. Métricas: porcentagem de registros pelo app, tempo por registro, satisfação. Decisão: ampliar, ajustar (pivotar) ou encerrar.

---

### 2. Prototipação (item 6.9)

#### 2.1 Definição e finalidades

**Prototipação** é a criação de **representações preliminares** de um produto, de interface ou de fluxo, para **explorar ideias, comunicar, validar e testar** com usuários e partes interessadas **antes da codificação definitiva**, reduzindo custo de mudanças. Um **protótipo** é um modelo; **não é** necessariamente o produto final.

Finalidades: **explorar** alternativas; **comunicar** a ideia; **validar requisitos**; **testar usabilidade**; **reduzir riscos**; **apoiar decisões**.

#### 2.2 Níveis de fidelidade

| Nível | Características | Quando usar | Exemplos |
|---|---|---|---|
| **Baixa fidelidade** | Simples, rápido, sem detalhes visuais; foco na estrutura e no fluxo | Início; explorar muitas ideias; custo baixo | Esboços em papel, *storyboards*, *wireframes* simples |
| **Média fidelidade** | Layout e hierarquia definidos, pouca cor/conteúdo real | Refinar estrutura e navegação | *Wireframes* digitais clicáveis |
| **Alta fidelidade** | Visual e comportamento próximos ao produto final: cores, tipografia, imagens, **conteúdo real**, interações detalhadas | Testes realistas com usuários, validação final com *stakeholders*, entrega ao desenvolvimento | Protótipos interativos em ferramentas de design |

Atenção a "protótipos de alta fidelidade": **dão mais realismo** ao teste e à apresentação, mas **custam mais** e podem desviar o foco para detalhes visuais; os de baixa fidelidade permitem **mudar ideias rapidamente**.

#### 2.3 Tipos conforme o destino

| Tipo | Descrição |
|---|---|
| **Descartável (*throwaway*)** | Usado para aprender e depois jogado fora |
| **Evolutivo** | Refinado até virar o produto |
| **Incremental** | Partes construídas separadamente e integradas |
| **Horizontal** | Mostra a interface ampla com pouca funcionalidade real |
| **Vertical** | Implementa em profundidade uma funcionalidade |

*(Classificação de memória; terminologia varia por autor.)*

#### 2.4 Técnicas e artefatos

**Esboços** (*sketches*); ***storyboard*** (sequência de quadros de uso); ***wireframe*** (estrutura da página sem estilo); ***mockup*** (representação visual estática de média/alta fidelidade); **protótipo interativo** (navegável, simula comportamento); **protótipo em código** (HTML/CSS/JS); **protótipo em papel** (testado com cartões e telas intercambiáveis); **"Mágico de Oz"** (um humano simula o sistema).

#### 2.5 Processo e avaliação

1. Definir **objetivo** do protótipo e a **pergunta** a responder.
2. Escolher o **nível de fidelidade** adequado.
3. Construir **rápido**, com o mínimo necessário.
4. **Testar** com usuários (tarefas, pensar em voz alta — arquivo `01`).
5. **Registrar** problemas, **priorizar** e **iterar**.
6. Documentar decisões e transferir ao desenvolvimento (guia de estilo, componentes).

#### 2.6 Ferramentas

O edital não exige ferramenta específica. Exemplos de categorias: ferramentas de *design* e prototipagem de interface, quadros colaborativos, editores de código. **Não é necessário conhecer produtos específicos.**

#### 2.7 Relações

- Com **UX/DCU**: avaliação iterativa (arquivo `04`).
- Com **ágil**: protótipos para refinar *backlog* e histórias (arquivo `02`); MVP como protótipo funcional em uso real.
- Com **requisitos** (Módulo 5): protótipos para elicitar e validar.
- Com **design thinking**: etapa "prototipar" (arquivo `09`).
- Com **acessibilidade**: considerar nos protótipos, antes da codificação (arquivo `01`).

---

### 3. MVP × protótipo × produto final

| Aspecto | Protótipo | MVP | Produto completo |
|---|---|---|---|
| Objetivo | Explorar, comunicar, testar ideias | Validar hipótese com **usuários reais** | Atender plenamente o mercado/negócio |
| Uso real | Normalmente simulado | Sim, por primeiros usuários | Sim |
| Funcionalidade | Parcial ou simulada | Mínima, mas funcional | Completa |
| Dados reais | Raros | Sim | Sim |
| Destino | Descartável ou evolutivo | Evolui conforme aprendizado | Sustentação e evolução |

### 4. Atenção para a prova

*Inferência técnica e recomendação pedagógica; sem atribuir frequência à banca.*

- **MVP** = menor versão **utilizável**, para **aprender** com usuários; **não** é produto completo, nem apenas protótipo, nem produto com funcionalidades em excesso.
- **Alta fidelidade** = realismo visual e de interação, mais próximo do produto final; **baixa fidelidade** = rápido e barato.
- *Evidência histórica (amostra de duas provas):* a Prova 6 de 2023 trouxe **Q58 sobre MVP** (gabarito A, conforme espelho de terceiros, não validado) e **Q29 sobre prototipação de alta fidelidade** (gabarito E, idem). Duas provas não permitem inferir frequência. Aplicar a leitura de cada alternativa contra as definições acima.

### 5. Síntese

- MVP: versão mínima utilizável para validar hipóteses; ciclo construir–medir–aprender; perseverar, pivotar ou encerrar.
- Prototipação: baixa, média e alta fidelidade; esboço, *wireframe*, *mockup*, protótipo interativo; testar cedo e iterar.
- MVP é produto em uso real; protótipo é modelo para explorar e testar.

### 6. Pontos para a futura produção de questões (registro)

Definição de MVP; MVP × protótipo; escolha do nível de fidelidade; identificação de artefatos (*wireframe*, *mockup*); vantagens da prototipação.

### 7. Referências

- RIES, Eric. *The Lean Startup* — **de memória, não verificada**; BLANK, Steve (desenvolvimento de clientes) — **de memória**.
- Livros de IHC/UX sobre prototipação (Buxton, Snyder, Rogers) — **de memória, não verificados**.
- Edital Transpetro nº 04/2026.4, Anexo IV, itens 6.8 e 6.9. Provas: Transpetro 2023, Prova 6, Q29 e Q58 (gabaritos de terceiros, não validados).


---

## Design Thinking e Análise de Personas

**Módulo:** M06 — Experiência do usuário (UX)
**Textos oficiais (Anexo IV):** 6.10 "Design thinking"; 6.11 "Análise de personas (papéis, perfis etc.) de usuários de software."
**Escopo:** A.
**Status:** `VALIDADO` (aprovado pelo usuário em 2026-10-31, com ressalvas: interpretação dos itens 6.3, 6.4, 6.7 e 6.11 a confirmar; fontes de memória listadas em `docs/qualidade/relatorio-producao-modulo-06.md`). As cinco etapas do d.school (Stanford, que as chama de *modes*) foram **confirmadas** no *Design Thinking Bootleg* do site; as da IDEO e o equilíbrio desejável/viável/factível **não foram confirmados**; o *Double Diamond* do UK Design Council foi **verificado**. Demais autores (Brown, Gray, Cooper, Kelley) citados de memória.

**Objetivos de aprendizagem.** (1) Definir design thinking e suas etapas; (2) aplicar técnicas de ideação (*brainstorming*, *brainwriting*); (3) construir mapa de empatia e jornada do usuário; (4) elaborar e usar personas; (5) distinguir persona, perfil, papel e *stakeholder*.

---

### 1. Design thinking (item 6.10)

#### 1.1 Definição

**Design thinking** é uma abordagem **centrada nas pessoas** para resolver problemas complexos e inovar, combinando **empatia** com os usuários, **colaboração multidisciplinar**, **experimentação** (prototipar e testar) e **iteração**. Busca soluções que sejam **desejáveis** (para as pessoas), **viáveis** (para o negócio) e **factíveis** (tecnicamente) — o chamado equilíbrio entre desejabilidade, viabilidade e exequibilidade (associado à IDEO; de memória). Parte do **problema** (entendido do ponto de vista do usuário), não da solução.

#### 1.2 Modelo das cinco etapas (d.school/Stanford — nomes **verificados**; descrições de memória)

| Etapa | Objetivo | Atividades/técnicas |
|---|---|---|
| **Empatizar** | Compreender profundamente as pessoas | Entrevistas, observação, imersão, **mapa de empatia**, jornada |
| **Definir** | Sintetizar o **problema** a resolver | Declaração do problema (*point of view*), "Como poderíamos..." (*How might we*), personas |
| **Idear** | Gerar muitas ideias | ***Brainstorming***, ***brainwriting***, *crazy 8s*, mapas mentais, SCAMPER |
| **Prototipar** | Tornar ideias tangíveis | Esboços, *storyboards*, protótipos (arquivo `08`) |
| **Testar** | Validar com usuários | Testes de usabilidade, entrevistas, coleta de *feedback*; **voltar** a etapas anteriores |

As etapas **não são lineares**: o processo é **iterativo** e pode voltar atrás.

#### 1.3 Double Diamond (UK Design Council — **verificado**)

Modelo em **dois diamantes**, cada um de **divergência** (explorar amplamente) e **convergência** (focar):

| Diamante | Fase | Natureza |
|---|---|---|
| **1º — problema certo** | **Descobrir** (*Discover*) | Divergir: explorar o problema |
| | **Definir** (*Define*) | Convergir: delimitar o problema |
| **2º — solução certa** | **Desenvolver** (*Develop*) | Divergir: gerar e testar soluções |
| | **Entregar** (*Deliver*) | Convergir: finalizar e lançar |

#### 1.4 Pensamento divergente e convergente

**Divergir:** ampliar opções, adiar o julgamento. **Convergir:** selecionar e refinar, com critérios. Ambos se alternam.

#### 1.5 Ideação

| Técnica | Descrição |
|---|---|
| ***Brainstorming*** | Sessão **oral** em grupo para gerar muitas ideias; regras: adiar o julgamento, quantidade, ideias livres, construir sobre as dos outros (Osborn; de memória) |
| ***Brainwriting*** | Ideias **escritas individualmente** (em papel ou em ferramenta) e depois compartilhadas/combinadas; reduz inibição e dominância de vozes fortes |
| ***Crazy 8s*** | Oito esboços em oito minutos |
| **SCAMPER** | Questões sobre substituir, combinar, adaptar, modificar, propor outros usos, eliminar, reorganizar |
| **Votação por pontos / matriz impacto×esforço** | Seleção |

**Brainstorming × brainwriting:** no primeiro, as ideias são **faladas**; no segundo, **escritas** — o que dá voz a todos e evita a influência do grupo. *Q30 da Prova 6 (2023)* tratou de ideação com brainwriting.

#### 1.6 Mapa de empatia

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

#### 1.7 Jornada do usuário

Representa **etapas, ações, pensamentos, emoções, pontos de contato e oportunidades** de um usuário ao atingir um objetivo (por exemplo, "solicitar acesso a um sistema"). Evidencia **momentos críticos** ("dores") e orienta melhorias. Difere do **fluxo de tarefas** (que descreve o caminho no sistema) por incluir **a perspectiva emocional e o contexto**.

#### 1.8 Uso em software

Design thinking é usado **antes e durante** o desenvolvimento para descobrir o problema certo, gerar alternativas e validar rapidamente (arquivos `04`, `08`). Complementa métodos ágeis (ex.: pesquisa e prototipação à frente do *sprint*; *lean UX*). Limitações: pode produzir ideias sem viabilidade; exige tempo e participação real dos usuários; não substitui engenharia de requisitos formal quando o contexto exige.

---

### 2. Análise de personas (item 6.11)

#### 2.1 Definição

**Persona** é um **arquétipo fictício, baseado em pesquisa**, que **representa um grupo de usuários** com objetivos, comportamentos, necessidades e contexto semelhantes (conceito difundido por Alan Cooper; de memória). Personas **humanizam** os dados e ajudam a **decidir** o que projetar e para quem. Não são pessoas reais nem "o usuário médio".

#### 2.2 Conteúdo típico de uma persona

Nome e foto (ilustrativos), **papel/cargo**, **contexto** (ambiente, dispositivos, habilidades), **objetivos**, **tarefas**, **necessidades**, **dores/frustrações**, **motivações**, **comportamentos**, **citação** representativa e, quando relevante, **limitações e necessidades de acessibilidade**.

#### 2.3 Como criar

1. **Pesquisar** usuários (entrevistas, observação, dados de uso, questionários).
2. **Identificar padrões** e agrupar (por objetivos e comportamentos, não só por dados demográficos).
3. **Descrever** as personas e **priorizar** (persona primária, secundária; **persona negativa**, aquela para quem **não** se projeta).
4. **Validar** com usuários e partes interessadas.
5. **Usar** em histórias do usuário, cenários, jornadas e decisões de projeto (arquivos `02` e `03`); **revisar** periodicamente.

#### 2.4 Persona × perfil × papel × stakeholder

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

#### 2.5 Boas práticas e riscos

- Basear em **dados**, evitando **estereótipos**; poucas personas (em geral, **3 a 5**; ordem de grandeza de memória, sem fonte).
- Incluir **diversidade** e acessibilidade (arquivo `01`).
- Manter **vivas**: usar nas decisões e atualizar.
- Riscos: persona inventada sem pesquisa; excesso de personas; foco em dados demográficos; uso apenas decorativo.

#### 2.6 Exemplo (didático)

**Persona:** "Marta, inspetora de campo, 42 anos" — usa celular com luvas, sob sol forte e sinal instável; objetivo: registrar ocorrência em menos de um minuto; dor: perde dados quando a conexão cai. **Decisões:** modo *offline*, botões grandes, alto contraste (histórias e protótipos derivados).

### 3. Comparações conceituais

| A | B | Diferença |
|---|---|---|
| *Brainstorming* | *Brainwriting* | Ideias faladas × escritas individualmente |
| Divergir | Convergir | Ampliar opções × selecionar |
| Persona | Perfil | Arquétipo narrativo × descrição agregada |
| Persona | Papel | Representação do usuário × função desempenhada |
| Mapa de empatia | Persona | Síntese do que se sabe sobre um usuário × arquétipo de um grupo |
| Mapa de empatia | Jornada | Estado mental/ambiente de um usuário × sequência de etapas ao longo do tempo |
| Design thinking | Double Diamond | Abordagem em cinco etapas × modelo em quatro fases (dois diamantes) |

### 4. Atenção para a prova

*Inferência técnica e recomendação pedagógica; sem atribuir frequência à banca.*

- Memorizar as **cinco etapas** e a ordem: empatizar, definir, idear, prototipar, testar; reconhecer que são **iterativas**.
- Associar **brainwriting** a ideias escritas, **mapa de empatia** aos quadrantes e **persona** a arquétipo baseado em pesquisa.
- *Evidência histórica (amostra de duas provas):* a Prova 6 de 2023 trouxe questões sobre **brainwriting/ideação (Q30)** e **mapa de empatia (Q34, gabarito D conforme espelho de terceiros, não validado)**. O item 6.11 (personas) não teve questão. Duas provas não permitem inferir frequência.

### 5. Síntese

- Design thinking: abordagem centrada nas pessoas; empatizar–definir–idear–prototipar–testar; iterativo; Double Diamond (descobrir, definir, desenvolver, entregar).
- Ideação: *brainstorming* (oral) × *brainwriting* (escrito); mapa de empatia; jornada.
- Personas: arquétipos baseados em pesquisa; diferem de perfis e papéis; persona primária e negativa; uso em histórias e projeto.

### 6. Pontos para a futura produção de questões (registro)

Etapas do design thinking; escolha de técnica de ideação; quadrantes do mapa de empatia; distinção persona/perfil/papel; uso de personas em UX e histórias.

### 7. Referências

- UK DESIGN COUNCIL. *Framework for Innovation* (Double Diamond): Descobrir, Definir, Desenvolver, Entregar — **verificado** em 2026-10-31.
- d.school (Stanford). *Design Thinking Bootleg* (2018), dschool.stanford.edu/tools/design-thinking-bootleg — cinco *modes*: Empathize, Define, Ideate, Prototype, Test — **verificado em 2026-10-31**. IDEO e "desejável, viável, factível" — **não confirmados**; **de memória**.
- COOPER, Alan. *The Inmates Are Running the Asylum* (personas); GRAY, Dave et al. *Gamestorming* (mapa de empatia); BROWN, Tim. *Change by Design* — **de memória, não verificados**.
- Edital Transpetro nº 04/2026.4, Anexo IV, itens 6.10 e 6.11. Provas: Transpetro 2023, Prova 6, Q30 e Q34 (gabaritos de terceiros, não validados).

