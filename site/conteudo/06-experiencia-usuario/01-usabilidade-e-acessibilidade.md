---
modulo: 06-experiencia-usuario
arquivo: 01-usabilidade-e-acessibilidade
itens_edital:
  - "6 User experience (UX):"
  - "6.1 Conceitos de acessibilidade e usabilidade"
ids_matriz: ["E5-047", "E5-048"]
escopo: "A — conteúdo expresso no edital. O título do item 6 ('User experience (UX):') é tratado na seção 2 como introdução ao módulo."
tipo_conteudo: "teoria"
status: "VALIDADO"
ultima_atualizacao: "2026-10-31"
---

# Experiência do Usuário (UX), Usabilidade e Acessibilidade

**Módulo:** M06 — Experiência do usuário (UX)
**Textos oficiais (Anexo IV):** 6 "User experience (UX):" (título); 6.1 "Conceitos de acessibilidade e usabilidade".
**Escopo:** A.
**Versões de referência:** **WCAG 2.2** (W3C) e **eMAG 3.1** (governo federal brasileiro); ver seção 5 para o estado da verificação.
**Status:** `VALIDADO` (aprovado pelo usuário em 2026-10-31, com ressalvas: interpretação dos itens 6.3, 6.4, 6.7 e 6.11 a confirmar; fontes de memória listadas em `docs/qualidade/relatorio-producao-modulo-06.md`).

**Objetivos de aprendizagem.** (1) Definir UX, UI, usabilidade e acessibilidade e distingui-las; (2) aplicar os atributos de usabilidade e as heurísticas de Nielsen; (3) explicar acessibilidade, desenho universal e os princípios do WCAG; (4) relacionar WCAG, eMAG e a legislação brasileira; (5) avaliar usabilidade e acessibilidade.

---

## 1. Introdução

Um sistema pode ter todas as funções corretas e, mesmo assim, fracassar porque as pessoas **não conseguem** ou **não querem** usá-lo. O módulo 6 do edital trata de **como projetar software e informação centrados nas pessoas**: UX, usabilidade e acessibilidade (6.1), histórias do usuário (6.2), interação web (6.3), projeto centrado no usuário (6.4), storytelling e dashboards (6.5 e 6.6), interoperabilidade entre navegadores (6.7), MVP e prototipação (6.8 e 6.9), design thinking e personas (6.10 e 6.11).

## 2. Experiência do usuário (título do item 6)

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

## 3. Usabilidade (item 6.1)

### 3.1 Definição

A **norma ISO 9241-11** define usabilidade como a medida em que um sistema, produto ou serviço pode ser usado por **usuários específicos** para atingir **objetivos específicos** com **eficácia**, **eficiência** e **satisfação**, em um **contexto de uso específico** (a ideia de "eficácia, eficiência e satisfação" foi confirmada pela página do W3C que cita a ISO 9241-11; o texto da norma não foi consultado).

| Componente | Pergunta |
|---|---|
| **Eficácia** | O usuário consegue **concluir** a tarefa e atingir o objetivo? |
| **Eficiência** | **Quanto esforço e tempo** são necessários? |
| **Satisfação** | A experiência é **agradável e confortável**? |
| **Contexto de uso** | Quem usa, para quê, onde, com que dispositivo? |

**Atributos de usabilidade (Nielsen):** **capacidade de aprendizado** (*learnability*), **eficiência**, **memorização** (*memorability*: retomar o uso depois de um tempo), **erros** (poucos e fáceis de corrigir) e **satisfação**.

### 3.2 As dez heurísticas de usabilidade (Nielsen)

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

### 3.3 Princípios de design de interação (Norman)

**Affordance**/**signifiers** (sinais que indicam o que é possível fazer), **feedback**, **mapeamento natural**, **restrições (*constraints*)**, **modelo conceitual** claro e **visibilidade**. *(Citados de memória; não verificados online.)*

### 3.4 Como avaliar usabilidade

| Método | Descrição |
|---|---|
| **Avaliação heurística** | Especialistas inspecionam a interface segundo as heurísticas |
| **Percurso cognitivo** | Simula os passos de um usuário novo para realizar tarefas |
| **Teste de usabilidade** | Usuários reais executam tarefas, observadas; técnica de **pensar em voz alta** |
| **Questionários padronizados** | Por exemplo, *System Usability Scale* (SUS), com 10 itens e pontuação de 0 a 100 |
| **Métricas** | Taxa de sucesso, tempo na tarefa, número de erros, satisfação |
| **Análise de uso e testes A/B** | Dados de comportamento real e comparação de variantes |

## 4. Acessibilidade (item 6.1)

### 4.1 Conceitos

- **Acessibilidade** (Lei Brasileira de Inclusão, Lei nº 13.146/2015, art. 3º, I — **verificado**): possibilidade e condição de alcance para utilização, com **segurança e autonomia**, de espaços, mobiliários, equipamentos urbanos, edificações, transportes, **informação e comunicação**, inclusive seus sistemas e tecnologias, e outros serviços abertos ao público, **por pessoa com deficiência ou com mobilidade reduzida**.
- **Desenho universal** (art. 3º, II — **verificado**): concepção de produtos, ambientes, programas e serviços **a serem usados por todas as pessoas**, sem necessidade de adaptação ou de projeto específico, incluindo os recursos de **tecnologia assistiva**.
- **Tecnologia assistiva:** recursos que ampliam as capacidades de pessoas com deficiência (leitores de tela, ampliadores, teclados alternativos, comando por voz, legendas, Libras, entre outros).

**Tipos de limitações:** **visual** (cegueira, baixa visão, daltonismo), **auditiva**, **motora**, **cognitiva** (dislexia, déficit de atenção, memória), **fala**, além de **limitações temporárias** (braço quebrado) e **situacionais** (sol forte na tela, ambiente barulhento). Projetar para a diferença melhora a experiência de **todos**.

### 4.2 Acessibilidade × usabilidade × inclusão

| Conceito | Foco (segundo o W3C/WAI, página verificada) |
|---|---|
| **Acessibilidade** | Principalmente pessoas com deficiência; garantir **experiência equivalente** e requisitos técnicos (por exemplo, compatibilidade com tecnologia assistiva) |
| **Usabilidade** | Uso **eficaz, eficiente e satisfatório**; a prática de usabilidade muitas vezes não considera pessoas com deficiência |
| **Inclusão** | Diversidade e participação de todos (idioma, idade, condição econômica, geografia); também chamada de desenho universal/design para todos |

As três **se sobrepõem**: muitos requisitos de acessibilidade melhoram a usabilidade para todos. Acessibilidade **não** é um recurso a acrescentar no fim; deve estar **no projeto desde o início** (protótipos e testes antes da codificação).

## 5. Padrões e normas de acessibilidade

### 5.1 WCAG (*Web Content Accessibility Guidelines*), do W3C

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

### 5.2 eMAG (Modelo de Acessibilidade em Governo Eletrônico)

Conjunto de **recomendações de acessibilidade** para *sites* e portais do governo brasileiro. A página oficial do governo federal informa que a **versão atual é a 3.1** (lançada em **abril de 2014**; a 3.0, em setembro de 2013), que o modelo **considerou o WCAG 2.0** do W3C e é **"em conformidade com os padrões internacionais"**, e que a **Portaria nº 3, de 7 de maio de 2007** tornou-o obrigatório para os *sites* do governo federal integrantes do SISP — **verificado**. O eMAG é uma **versão especializada** das diretrizes do W3C para o contexto brasileiro. A página de acessibilidade do governo digital também remete às normas **ABNT NBR 17225** (conteúdo web) e **ABNT NBR 17060** (dispositivos móveis); **a existência dos links foi verificada, o conteúdo das normas não**.

*Estrutura das recomendações do eMAG 3.1* (**marcação, comportamento, conteúdo/informação, apresentação/design, multimídia e formulários**): **as seis seções foram confirmadas no site oficial do eMAG (emag.governoeletronico.gov.br, "Versão 3.1 - Abril 2014") em 2026-10-31**; o texto das recomendações individuais não foi lido (quantidade e exemplos abaixo são de memória).

**Recomendação típica:** **garantir contraste mínimo entre o plano de fundo e o primeiro plano**; evitar **impedir o redimensionamento** da página, **utilizar apenas cores** para diferenciar elementos, **provocar mudanças de contexto automaticamente** ou **exigir CAPTCHAs** sem alternativa.

### 5.3 Legislação brasileira

A **Lei nº 13.146/2015 (LBI)**, art. 63 (**verificado**), torna **obrigatória** a acessibilidade nos *sites* mantidos por **empresas com sede ou representação comercial no Brasil** ou por **órgãos de governo**, de forma que pessoas com deficiência possam acessar as informações, seguindo **boas práticas e diretrizes de acessibilidade adotadas internacionalmente**; o §1º manda exibir **símbolo de acessibilidade**; o art. 64 vincula a exigência à elegibilidade para financiamentos.

## 6. Comparações conceituais

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

## 7. Aplicações e cenários

**Cenário (didático): portal de serviços internos.** A equipe projeta formulários com **rótulos visíveis**, **contraste adequado**, **navegação por teclado**, **mensagens de erro claras** (heurística 9) e **texto alternativo** nas imagens; testa com **leitor de tela** e com **usuários reais**, inclusive pessoas com deficiência, ainda no **protótipo**. *Limitação:* validar acessibilidade só ao final encarece as correções.

**Cenário (didático): decisão de projeto.** Um botão de "Excluir" sem confirmação viola a **prevenção de erros**; só **cor vermelha** para indicar erro viola a acessibilidade (não depender só da cor); ambos se resolvem com **confirmação** e **ícone/texto** além da cor.

## 8. Atenção para a prova

*Inferência técnica e recomendação pedagógica; sem atribuir frequência à banca.*

- **Acessibilidade e usabilidade são características distintas e complementares**: **nem** "usabilidade define desempenho e manutenibilidade", **nem** "acessibilidade só depois da codificação", **nem** "conflitantes". Ambas devem ser consideradas **desde o início**, nos **protótipos**, e **testadas antes** da codificação.
- Memorizar **POUR** e os **três níveis** do WCAG; o **eMAG** é a versão especializada brasileira.
- Recomendações de acessibilidade típicas: **contraste mínimo**; **não** impedir redimensionamento; **não** usar apenas cor; **não** provocar mudança de contexto automática; **não** impor CAPTCHA sem alternativa.
- Diferenciar usabilidade (eficácia, eficiência, satisfação) de utilidade e de desempenho técnico.
- *Evidência histórica (amostra de duas provas):* a Prova 6 de 2023 (Q33) pediu a afirmação correta sobre **acessibilidade e usabilidade** (ambas devem ser consideradas na construção de protótipos, antes da codificação). A Prova 15 de 2018 (Q35) perguntou a recomendação do **eMAG** (garantir contraste mínimo entre fundo e primeiro plano). Duas provas não permitem inferir frequência.

## 9. Síntese

- UX (experiência total) ⊃ usabilidade, acessibilidade, desejabilidade etc.; UI = interface.
- Usabilidade (ISO 9241-11): eficácia, eficiência e satisfação em um contexto; atributos de Nielsen; dez heurísticas.
- Acessibilidade (LBI, art. 3º): uso com segurança e autonomia por pessoas com deficiência; desenho universal; tecnologia assistiva.
- WCAG 2.2: POUR; níveis A, AA, AAA; nove novos critérios; eMAG 3.1 (governo federal); LBI art. 63.
- Avaliar: heurística, percurso cognitivo, teste com usuários, SUS, métricas.

## 10. Pontos para a futura produção de questões (registro)

Conceitos: UX, usabilidade, acessibilidade, POUR, níveis WCAG, eMAG, heurísticas. Distinções: UX×UI; usabilidade×acessibilidade; WCAG×eMAG; heurística×teste com usuários. Interpretação: identificar a heurística violada; reconhecer uma recomendação de acessibilidade; avaliar afirmações sobre quando considerar acessibilidade.

## 11. Referências

- W3C. *Web Content Accessibility Guidelines (WCAG) 2.2*. https://www.w3.org/TR/WCAG22/ e https://www.w3.org/WAI/standards-guidelines/wcag/new-in-22/ — **verificado em 2026-10-31** (versão, princípios, níveis, novos critérios, remoção do 4.1.1). Texto integral não lido.
- W3C WAI. *Accessibility, Usability, and Inclusion*. https://www.w3.org/WAI/fundamentals/accessibility-usability-inclusion/ — **verificado**.
- GOVERNO FEDERAL. *eMAG — Modelo de Acessibilidade em Governo Eletrônico*, v. 3.1. Página oficial do governo digital — **verificada** (versão, datas, relação com o WCAG 2.0); site emag.governoeletronico.gov.br **verificado** (versão 3.1 de abril de 2014 e seis seções); texto das recomendações individuais **não lido**.
- BRASIL. Lei nº 13.146/2015 (Lei Brasileira de Inclusão), arts. 3º, 63 e 64 — **verificada** em planalto.gov.br.
- NIELSEN NORMAN GROUP. *10 Usability Heuristics for User Interface Design*. https://www.nngroup.com/articles/ten-usability-heuristics/ — **verificado** (dez heurísticas; publicação de 1994, revisão de 2024).
- ISO 9241-11 e ISO 9241-210; NORMAN (princípios de design); SUS (BROOKE) — citados de memória, **não verificados online**.
- Edital Transpetro nº 04/2026.4, Anexo IV, itens 6 e 6.1.
