---
modulo: 06-experiencia-usuario
arquivo: 03-interacao-web
itens_edital:
  - "6.3 Desenho e planejamento de interação em aplicações web"
ids_matriz: ["E5-050"]
escopo: "A — conteúdo expresso no edital. Item genérico: a abrangência é interpretação (a confirmar)."
tipo_conteudo: "teoria"
status: "VALIDADO"
ultima_atualizacao: "2026-10-31"
---

# Desenho e Planejamento de Interação em Aplicações Web

**Módulo:** M06 — Experiência do usuário (UX)
**Texto oficial (Anexo IV):** 6.3 "Desenho e planejamento de interação em aplicações web".
**Escopo:** A. O edital não detalha o conteúdo do item; este arquivo adota uma interpretação (arquitetura da informação, navegação, fluxos, padrões de interação, formulários, *feedback*, responsividade, desempenho percebido) **a confirmar**.
**Status:** `VALIDADO` (aprovado pelo usuário em 2026-10-31, com ressalvas: interpretação dos itens 6.3, 6.4, 6.7 e 6.11 a confirmar; fontes de memória listadas em `docs/qualidade/relatorio-producao-modulo-06.md`). Autores e leis citados de memória: **não verificados online**.

**Objetivos de aprendizagem.** (1) Explicar design de interação e seu processo; (2) projetar arquitetura da informação e navegação; (3) aplicar padrões de interação, formulários e *feedback*; (4) planejar fluxos e estados; (5) considerar responsividade e desempenho.

---

## 1. Introdução

**Design de interação** define como o sistema **responde às ações** do usuário e como a pessoa **conduz** suas tarefas. Em aplicações web, envolve decidir **estrutura, navegação, fluxos, componentes, mensagens e comportamentos**, antes e durante a implementação.

## 2. Processo de planejamento

1. **Entender** usuários, tarefas e contexto (personas, histórias, jornadas — arquivos `02`, `04`, `09`).
2. **Definir** objetivos e **requisitos de interação**.
3. **Estruturar** a informação e a navegação.
4. **Desenhar** fluxos, *wireframes* e protótipos (arquivo `08`).
5. **Avaliar** com usuários (usabilidade, acessibilidade) e **iterar**.

## 3. Arquitetura da informação (AI)

Organização, rotulagem, busca e navegação do conteúdo. Componentes clássicos (Rosenfeld e Morville): **sistemas de organização** (por assunto, tarefa, público, cronologia, alfabética), **de rotulagem**, **de navegação** e **de busca**.

| Técnica | Uso |
|---|---|
| **Inventário de conteúdo** | Levantar o que existe |
| **Classificação de cartões (*card sorting*)** | Descobrir como usuários agrupam e nomeiam conteúdo (aberta × fechada) |
| **Teste de árvore (*tree testing*)** | Validar se usuários encontram itens na estrutura |
| **Mapa do site** | Representar a hierarquia de páginas |

## 4. Navegação

| Padrão | Descrição |
|---|---|
| **Menu global** | Acesso às seções principais, consistente em todas as páginas |
| **Navegação local** | Itens da seção atual |
| **Trilha de navegação (*breadcrumb*)** | Mostra a localização na hierarquia |
| **Busca** | Complementa a navegação em sites com muito conteúdo |
| **Paginação / rolagem infinita** | Divisão de longas listas |
| **Menu "hambúrguer"** | Compacta navegação em telas pequenas |

Princípios: **orientar** (onde estou?), **informar** (para onde posso ir?), **consistência** e **poucos cliques** relevantes, sem sacrificar a clareza.

## 5. Fluxos, estados e *feedback*

- **Fluxo de tarefa** (*user flow*): caminho de telas e decisões até concluir um objetivo, incluindo erros e exceções.
- **Estados da interface:** vazio, carregando, sucesso, erro, desativado, parcial.
- ***Feedback*:** indicar progresso (barras, *spinners*), confirmar ações, tornar visível o estado (heurística 1 de Nielsen — arquivo `01`).
- **Tempo de resposta** (Nielsen, *Response Times: The 3 Important Limits*, nngroup.com — **verificado em 2026-10-31**): cerca de **0,1 s** parece instantâneo; **1 s** preserva o fluxo de pensamento; **10 s** é o limite de atenção, exigindo indicação de progresso.
- **Prevenção e recuperação de erros:** validar cedo, confirmar ações destrutivas, permitir **desfazer**.

## 6. Componentes e padrões de interação

Botões, links, campos, listas de seleção, caixas de seleção, botões de opção, abas, acordeões, modais, tabelas, cartões, *tooltips*, notificações. Escolher o componente pelo **tipo de dado** e pela **quantidade de opções** (poucas opções: botões de opção; muitas: lista com busca).

**Formulários:** rótulos visíveis e associados aos campos, agrupamento lógico, campos obrigatórios identificados, máscaras e validação **em linha**, mensagens específicas, preservação dos dados após erro, uso de campos adequados (data, e-mail), autopreenchimento, reduzir campos desnecessários.

## 7. Leis e princípios de interação (de memória)

| Princípio | Ideia |
|---|---|
| **Lei de Fitts** | Tempo para atingir um alvo cresce com a distância e diminui com o tamanho do alvo; botões importantes devem ser grandes e próximos |
| **Lei de Hick** | Tempo de decisão cresce com o número de opções; reduzir e agrupar escolhas |
| **Lei de Jakob** | Usuários passam a maior parte do tempo em outros sites; esperam convenções |
| **Proximidade/Gestalt** | Elementos próximos são percebidos como relacionados |
| **Divulgação progressiva** | Mostrar detalhes apenas quando necessários |

## 8. Aplicações web: responsividade e desempenho

- **Design responsivo:** layout se adapta ao tamanho da tela (grades fluidas, imagens flexíveis, *media queries*); *mobile first* como estratégia.
- **Alvos de toque** adequados; navegação por teclado e leitores de tela (arquivo `01`).
- **Desempenho percebido:** carregamento progressivo, *skeleton screens*, redução de requisições.
- **Aplicações de página única (SPA)**, rotas, histórico do navegador e URLs significativas.
- **Padrões de segurança de UX:** sessão expirada, confirmações, mensagens que não revelam dados sensíveis (relação com o Módulo 9).

## 9. Exemplo (didático)

Portal de solicitação de serviços: menu global com quatro áreas; busca no topo; formulário em três etapas com indicador de progresso; validação em linha; confirmação final com resumo e opção de editar; estado "vazio" com orientação quando não há solicitações; página responsiva testada em celular.

## 10. Comparações conceituais

| A | B | Diferença |
|---|---|---|
| Arquitetura da informação | Design de interação | Organização do conteúdo × comportamento às ações |
| *Wireframe* | Protótipo | Esboço estrutural × simulação interativa (arquivo `08`) |
| *Card sorting* | *Tree testing* | Descobrir agrupamentos × validar a estrutura |
| Navegação global | Navegação local | Seções principais × itens da seção atual |
| Design responsivo | Design adaptativo | Layout fluido × layouts fixos por faixa de tela (de memória) |

## 11. Atenção para a prova

*Inferência técnica e recomendação pedagógica; sem atribuir frequência à banca.*

- Item genérico: esperar enunciados sobre **boas práticas de interface**, **heurísticas** e **acessibilidade**, aplicadas a casos.
- Relacionar *feedback*, prevenção de erros e consistência às heurísticas.
- Distinguir AI, navegação e interação; *wireframe* e protótipo.
- Item 6.3 **não teve questão** nas duas provas catalogadas; a questão de prototipação de alta fidelidade (2023, Q29) pertence ao item 6.9.

## 12. Síntese

Design de interação: entender → estruturar → desenhar → avaliar. AI (organização, rotulagem, navegação, busca); navegação consistente; fluxos e estados; *feedback*; formulários; responsividade e desempenho; leis de Fitts e Hick.

## 13. Pontos para a futura produção de questões (registro)

Identificar a heurística aplicada a um caso; escolher componente/padrão adequado; diferenciar AI e interação; reconhecer boas práticas de formulário e navegação.

## 14. Referências

- ROSENFELD; MORVILLE; ARANGO. *Information Architecture* — **de memória, não verificada**.
- COOPER et al. *About Face*; NORMAN. *The Design of Everyday Things* — **de memória, não verificadas**.
- NIELSEN. Limites de tempo de resposta; heurísticas (heurísticas confirmadas no arquivo `01`).
- Edital Transpetro nº 04/2026.4, Anexo IV, item 6.3.
