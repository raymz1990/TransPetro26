# Banco de questões — Módulo 6: Experiência do Usuário (UX) (lote piloto, gabaritos comentados)

**Tipo:** questões **autorais** — **Questão autoral — estilo Cesgranrio.** **Status:** validada 10.

## Quadro de gabaritos

| Questão | ID | Gabarito | Item do edital | Dificuldade | Habilidade | Tipo | Status |
|---|---|---|---|---|---|---|---|
| 1 | AUT-000051 | B | 6.1 | Média | Análise | Cenário | Validada |
| 2 | AUT-000052 | D | 6.2 | Fácil | Aplicação | Cenário | Validada |
| 3 | AUT-000053 | A | 6.3 | Fácil | Compreensão | Cenário | Validada |
| 4 | AUT-000054 | E | 6.4 | Média | Análise | Comparativa | Validada |
| 5 | AUT-000055 | C | 6.5 | Difícil | Análise | Conceitual | Validada |
| 6 | AUT-000056 | D | 6.6 | Fácil | Aplicação | Cenário | Validada |
| 7 | AUT-000057 | A | 6.7 | Média | Aplicação | Cenário | Validada |
| 8 | AUT-000058 | C | 6.8 | Difícil | Análise | Comparativa | Validada |
| 9 | AUT-000059 | E | 6.10 | Fácil | Memorização | Cenário | Validada |
| 10 | AUT-000060 | B | 6.11 | Média | Compreensão | Cenário | Validada |

---

## Questão 1 — AUT-000051

**AUT-000051** · Acessibilidade: princípios do WCAG (POUR) · item 6.1 · Média · Análise

*Questão autoral — estilo Cesgranrio.*

Uma auditoria de acessibilidade em um portal corporativo identificou os problemas a seguir.  
  
I – Imagens informativas sem texto alternativo.  
II – Menus que só podem ser acionados com o mouse, sem navegação por teclado.  
III – Mensagens de erro de formulário vagas, que não indicam como corrigir o campo.  
  
Segundo os princípios das Diretrizes de Acessibilidade para Conteúdo Web (WCAG 2.2), os problemas I, II e III violam, respectivamente, os princípios

(A) Compreensível, Perceptível e Operável.  
(B) Perceptível, Operável e Compreensível.  
(C) Operável, Robusto e Perceptível.  
(D) Perceptível, Robusto e Operável.  
(E) Robusto, Operável e Compreensível.  

### A. Gabarito

**B**

### B. Resolução comentada

O WCAG 2.2 se organiza em quatro princípios (**POUR**): **Perceptível** (a informação deve poder ser percebida: texto alternativo, legendas, contraste), **Operável** (componentes e navegação devem ser operáveis: uso por teclado, tempo suficiente, foco visível), **Compreensível** (informação e operação devem ser compreensíveis: linguagem clara, comportamento previsível, ajuda na entrada de dados e mensagens de erro) e **Robusto** (conteúdo interpretável por diversos agentes de usuário e tecnologias assistivas). I viola o Perceptível; II, o Operável; III, o Compreensível.

### C. Análise das alternativas

- **(A)** Incorreta. Troca os princípios: a ausência de texto alternativo afeta a percepção (Perceptível), e não a compreensão.
- **(B)** Correta. I: Perceptível; II: Operável; III: Compreensível.
- **(C)** Incorreta. A falta de texto alternativo é um problema de percepção, e não de operação; e as mensagens de erro vagas não são um problema de robustez.
- **(D)** Incorreta. O acesso apenas por mouse é um problema de operação (Operável), não de robustez técnica.
- **(E)** Incorreta. A falta de texto alternativo é problema de percepção, e não de robustez; o acionamento apenas por mouse é de operabilidade.

### D. Fundamentação teórica

- **Módulo:** M06 — Experiência do usuário (UX)
- **Assunto:** Conceitos de acessibilidade e usabilidade: WCAG
- **Item do edital:** 6.1 (E5-048)
- **Arquivo de teoria:** `conteudo/06-experiencia-usuario/01-usabilidade-e-acessibilidade.md`
- **Referência:** Material teórico do projeto; fontes conferidas na revisão do M06 (WCAG 2.2, heurísticas de Nielsen, INVEST, d.school); demais conteúdos de memória. W3C, WCAG 2.2 (verificado em 2026-10-31).

### E. Ponto de atenção para a prova

**POUR**: Perceptível, Operável, Compreensível, Robusto. Texto alternativo/contraste = **P**; teclado/foco = **O**; linguagem/erros = **C**; compatibilidade com tecnologias assistivas = **R**. Níveis de conformidade: A, AA, AAA.

### F. Revisão rápida

WCAG: POUR; níveis A, AA, AAA. Mapeie cada problema ao princípio: percepção, operação, compreensão, robustez.

### G. Tags

`m06` · `acessibilidade` · `wcag` · `pour` · `item-6.1` · `media` · `analise` · `cenario` · `autoral`

**Verificação do gabarito:** Sem execução (questão conceitual); gabarito conferido contra o arquivo de teoria (validado).  
**Status de validação:** `validada`  
**Validação:** Aprovada pelo usuário em 2026-10-31 (lote piloto do M06); sem revisão por terceiros; ressalvas: vários referenciais de UX de memória; interpretação dos itens 6.3, 6.4, 6.7 e 6.11 a confirmar.

---

## Questão 2 — AUT-000052

**AUT-000052** · Histórias do usuário: critério INVEST · item 6.2 · Fácil · Aplicação

*Questão autoral — estilo Cesgranrio.*

Em um refinamento do backlog, a equipe percebe que as histórias "Aprovar pedido" e "Emitir nota fiscal" só podem ser implementadas em uma ordem rígida e que a Product Owner não consegue priorizar uma sem a outra, pois ambas dependem de um mesmo trabalho prévio.  
  
No critério INVEST de boas histórias de usuário, a característica mais claramente violada é a de ser

(A) Negociável (Negotiable), com os detalhes discutidos na conversa.  
(B) Valiosa (Valuable), por entregar valor ao usuário ou ao negócio.  
(C) Estimável (Estimable), por permitir que a equipe estime o esforço.  
(D) Independente (Independent).  
(E) Pequena (Small), de modo a caber em uma iteração.  

### A. Gabarito

**D**

### B. Resolução comentada

O **INVEST** descreve boas histórias: **I**ndependentes, **N**egociáveis, **V**aliosas, **E**stimáveis, **S**mall (pequenas) e **T**estáveis. Histórias que só podem ser implementadas em ordem rígida e que impedem a priorização isolada **não são independentes**.

### C. Análise das alternativas

- **(A)** Incorreta. Ser negociável significa que os detalhes são definidos na conversa, e não um contrato fechado; o problema descrito é a dependência.
- **(B)** Incorreta. Ser valiosa significa entregar valor ao usuário ou ao negócio; o enunciado não questiona o valor das histórias.
- **(C)** Incorreta. Ser estimável é a capacidade de a equipe estimar o esforço; o problema relatado é de dependência entre histórias.
- **(D)** Correta. A dependência rígida e a impossibilidade de priorizar isoladamente violam a independência.
- **(E)** Incorreta. Ser pequena é caber em uma iteração; o enunciado não trata do tamanho das histórias.

### D. Fundamentação teórica

- **Módulo:** M06 — Experiência do usuário (UX)
- **Assunto:** Histórias do usuário: INVEST
- **Item do edital:** 6.2 (E5-049)
- **Arquivo de teoria:** `conteudo/06-experiencia-usuario/02-user-stories.md`
- **Referência:** Material teórico do projeto; fontes conferidas na revisão do M06 (WCAG 2.2, heurísticas de Nielsen, INVEST, d.school); demais conteúdos de memória. Bill Wake, INVEST (verificado em 2026-10-31).

### E. Ponto de atenção para a prova

**INVEST**: Independent, Negotiable, Valuable, Estimable, Small, Testable. **Dependência** entre histórias = **I**; história vaga/não mensurável = **T**; épico = **S**.

### F. Revisão rápida

INVEST: independente, negociável, valiosa, estimável, pequena, testável.

### G. Tags

`m06` · `user-stories` · `invest` · `item-6.2` · `facil` · `aplicacao` · `cenario` · `autoral`

**Verificação do gabarito:** Sem execução (questão conceitual); gabarito conferido contra o arquivo de teoria (validado).  
**Status de validação:** `validada`  
**Validação:** Aprovada pelo usuário em 2026-10-31 (lote piloto do M06); sem revisão por terceiros; ressalvas: vários referenciais de UX de memória; interpretação dos itens 6.3, 6.4, 6.7 e 6.11 a confirmar.

---

## Questão 3 — AUT-000053

**AUT-000053** · Interação web: arquitetura da informação e classificação de cartões · item 6.3 · Fácil · Compreensão

*Questão autoral — estilo Cesgranrio.*

Antes de redesenhar o menu de um portal, a equipe de UX entrega a usuários cartões com os nomes das páginas existentes e pede que os agrupem e deem nome aos grupos. O objetivo é descobrir como os usuários organizam e nomeiam o conteúdo.  
  
Essa técnica é denominada

(A) classificação de cartões (card sorting), usada para embasar a arquitetura da informação.  
(B) teste de árvore (tree testing), usado para validar se os usuários encontram itens em uma estrutura pronta.  
(C) avaliação heurística, na qual especialistas inspecionam a interface conforme regras gerais de usabilidade.  
(D) percurso cognitivo, que simula os passos de um usuário novo para realizar uma tarefa.  
(E) teste A/B, que compara duas versões de uma página em uso real para medir o desempenho.  

### A. Gabarito

**A**

### B. Resolução comentada

Na **classificação de cartões (*card sorting*)**, usuários agrupam e nomeiam itens de conteúdo, o que revela seu modelo mental e embasa a **arquitetura da informação** (organização, rotulagem e navegação). O **teste de árvore** valida uma estrutura **já definida**. Os demais são métodos de avaliação.

### C. Análise das alternativas

- **(A)** Correta. Agrupamento e nomeação de cartões pelos usuários: card sorting.
- **(B)** Incorreta. O teste de árvore avalia se os usuários encontram itens em uma hierarquia já proposta; não pede que agrupem e nomeiem.
- **(C)** Incorreta. A avaliação heurística é feita por especialistas, e não por usuários agrupando cartões.
- **(D)** Incorreta. O percurso cognitivo simula os passos do usuário em uma tarefa, e não pede o agrupamento de conteúdo.
- **(E)** Incorreta. O teste A/B compara variantes em uso real; não serve para descobrir como os usuários organizam o conteúdo.

### D. Fundamentação teórica

- **Módulo:** M06 — Experiência do usuário (UX)
- **Assunto:** Desenho e planejamento de interação em aplicações web: arquitetura da informação
- **Item do edital:** 6.3 (E5-050)
- **Arquivo de teoria:** `conteudo/06-experiencia-usuario/03-interacao-web.md`
- **Referência:** Material teórico do projeto; fontes conferidas na revisão do M06 (WCAG 2.2, heurísticas de Nielsen, INVEST, d.school); demais conteúdos de memória. Interpretação do item 6.3 (redação genérica) a confirmar.

### E. Ponto de atenção para a prova

**Card sorting** = **descobrir** como os usuários agrupam e nomeiam; **tree testing** = **validar** a estrutura já existente.

### F. Revisão rápida

Card sorting: gera a estrutura a partir do modelo mental dos usuários. Tree testing: valida a estrutura. Heurística: especialistas. Teste de usabilidade: usuários em tarefas.

### G. Tags

`m06` · `interacao-web` · `arquitetura-da-informacao` · `card-sorting` · `item-6.3` · `facil` · `compreensao` · `cenario` · `autoral`

**Verificação do gabarito:** Sem execução (questão conceitual); gabarito conferido contra o arquivo de teoria (validado).  
**Status de validação:** `validada`  
**Validação:** Aprovada pelo usuário em 2026-10-31 (lote piloto do M06); sem revisão por terceiros; ressalvas: vários referenciais de UX de memória; interpretação dos itens 6.3, 6.4, 6.7 e 6.11 a confirmar.

---

## Questão 4 — AUT-000054

**AUT-000054** · Projeto centrado no usuário: avaliação heurística e teste de usabilidade · item 6.4 · Média · Análise

*Questão autoral — estilo Cesgranrio.*

Uma equipe aplica duas atividades de avaliação à interface de um sistema: em uma, três especialistas inspecionam as telas segundo as dez heurísticas de Nielsen, sem a participação de usuários finais; na outra, usuários reais executam tarefas típicas, enquanto a equipe observa e registra dificuldades e erros.  
  
A distinção correta entre as duas atividades é:

(A) A primeira é um teste de usabilidade, e a segunda é uma avaliação heurística; ambas dependem da participação de usuários.  
(B) A primeira é um percurso cognitivo, e a segunda é uma avaliação heurística, e ambas ocorrem apenas após o lançamento do sistema em produção.  
(C) A primeira é um teste A/B, e a segunda é uma classificação de cartões, ambas feitas apenas com dados estatísticos de uso.  
(D) A primeira é um teste de usabilidade, e a segunda é um percurso cognitivo; ambas substituem a necessidade de heurísticas.  
(E) A primeira é uma avaliação heurística, feita por especialistas, e a segunda é um teste de usabilidade, feito com usuários reais.  

### A. Gabarito

**E**

### B. Resolução comentada

Na **avaliação heurística**, **especialistas inspecionam** a interface com base em princípios gerais de usabilidade (as dez heurísticas de Nielsen). No **teste de usabilidade**, **usuários reais executam tarefas** e são **observados**, o que revela problemas reais de uso. As duas são complementares e podem ocorrer antes do lançamento, inclusive sobre protótipos.

### C. Análise das alternativas

- **(A)** Incorreta. Inverte os conceitos: a inspeção por especialistas é a avaliação heurística, e a execução de tarefas por usuários é o teste de usabilidade.
- **(B)** Incorreta. A inspeção segundo as heurísticas é avaliação heurística (e não percurso cognitivo), e ambas podem ocorrer antes do lançamento, inclusive em protótipos.
- **(C)** Incorreta. Nenhuma delas é teste A/B nem classificação de cartões; e ambas envolvem observação ou inspeção, e não apenas estatísticas de uso.
- **(D)** Incorreta. A primeira é avaliação heurística, e a segunda é um teste de usabilidade; as heurísticas são justamente a base da primeira.
- **(E)** Correta. Especialistas e heurísticas: avaliação heurística; usuários reais em tarefas: teste de usabilidade.

### D. Fundamentação teórica

- **Módulo:** M06 — Experiência do usuário (UX)
- **Assunto:** Projeto centrado no usuário de software: métodos de avaliação
- **Item do edital:** 6.4 (E5-051) · itens secundários: 6.1
- **Arquivo de teoria:** `conteudo/06-experiencia-usuario/04-design-centrado-no-usuario.md`
- **Referência:** Material teórico do projeto; fontes conferidas na revisão do M06 (WCAG 2.2, heurísticas de Nielsen, INVEST, d.school); demais conteúdos de memória. ISO 9241-210 não consultada; interpretação do item 6.4 a confirmar.

### E. Ponto de atenção para a prova

**Heurística** = **especialistas** inspecionam (baseada em regras gerais). **Teste de usabilidade** = **usuários** executam tarefas (observação). Podem ser feitos em **protótipos**.

### F. Revisão rápida

Avaliação heurística: especialistas. Teste de usabilidade: usuários reais. Percurso cognitivo: simula passos do usuário novo.

### G. Tags

`m06` · `dcu` · `avaliacao-heuristica` · `teste-de-usabilidade` · `nielsen` · `item-6.4` · `item-6.1` · `media` · `analise` · `comparativa` · `autoral`

**Verificação do gabarito:** Sem execução (questão conceitual); gabarito conferido contra o arquivo de teoria (validado).  
**Status de validação:** `validada`  
**Validação:** Aprovada pelo usuário em 2026-10-31 (lote piloto do M06); sem revisão por terceiros; ressalvas: vários referenciais de UX de memória; interpretação dos itens 6.3, 6.4, 6.7 e 6.11 a confirmar.

---

## Questão 5 — AUT-000055

**AUT-000055** · Storytelling com dados: escolha de gráficos e boas práticas · item 6.5 · Difícil · Análise

*Questão autoral — estilo Cesgranrio.*

Ao preparar uma apresentação com dados para a diretoria, uma analista avalia as afirmações a seguir sobre boas práticas de visualização.  
  
I – Em gráficos de barras, o eixo dos valores deve começar em zero, para não distorcer a comparação entre as categorias.  
II – Para mostrar a evolução de um indicador ao longo de vários períodos, o gráfico de linhas é uma escolha adequada.  
III – Gráficos em três dimensões melhoram a leitura exata dos valores e devem ser preferidos nos painéis.  
IV – A cor deve ter propósito, e a informação não deve depender apenas da cor para ser transmitida.  
  
Estão corretas apenas as afirmações

(A) I e III.  
(B) II e III.  
(C) I, II e IV.  
(D) II, III e IV.  
(E) I e II, apenas.  

### A. Gabarito

**C**

### B. Resolução comentada

**I (correta):** barras comparam comprimentos; um eixo que não começa em zero **distorce** a comparação. **II (correta):** a **evolução no tempo** é mostrada com gráficos de linhas. **III (incorreta):** gráficos 3D dificultam a leitura exata e distorcem proporções; são desaconselhados. **IV (correta):** a cor deve ter propósito (destaque, categoria) e não ser o único meio de transmitir informação, por razões de acessibilidade (daltonismo).

### C. Análise das alternativas

- **(A)** Incorreta. Inclui a III (falsa) e omite II e IV, que são verdadeiras.
- **(B)** Incorreta. Inclui a III (falsa) e omite I e IV.
- **(C)** Correta. I, II e IV são verdadeiras; a III é falsa.
- **(D)** Incorreta. Inclui a III (falsa) e omite a I (verdadeira).
- **(E)** Incorreta. As afirmações I e II são verdadeiras, mas a IV também é, e foi omitida.

### D. Fundamentação teórica

- **Módulo:** M06 — Experiência do usuário (UX)
- **Assunto:** Storytelling com dados: escolha do gráfico, distorções e cor
- **Item do edital:** 6.5 (E5-052)
- **Arquivo de teoria:** `conteudo/06-experiencia-usuario/05-data-storytelling.md`
- **Referência:** Material teórico do projeto; fontes conferidas na revisão do M06 (WCAG 2.2, heurísticas de Nielsen, INVEST, d.school); demais conteúdos de memória. Knaflic, Tufte e Few citados de memória (não verificados).

### E. Ponto de atenção para a prova

**Barras**: eixo em **zero**. **Linhas**: **tempo**. **3D**: evitar. **Cor**: com propósito e **nunca como única** pista (acessibilidade).

### F. Revisão rápida

Gráfico por objetivo: comparar categorias (barras), evolução (linhas), composição (empilhadas/poucas fatias), relação (dispersão). Evitar distorções, 3D e excesso de cor.

### G. Tags

`m06` · `data-storytelling` · `graficos` · `visualizacao` · `analise-de-afirmacoes` · `item-6.5` · `dificil` · `analise` · `conceitual` · `autoral`

**Verificação do gabarito:** Sem execução (questão conceitual); gabarito conferido contra o arquivo de teoria (validado).  
**Status de validação:** `validada`  
**Validação:** Aprovada pelo usuário em 2026-10-31 (lote piloto do M06); sem revisão por terceiros; ressalvas: vários referenciais de UX de memória; interpretação dos itens 6.3, 6.4, 6.7 e 6.11 a confirmar.

---

## Questão 6 — AUT-000056

**AUT-000056** · Relatórios e dashboards: tipos de dashboard · item 6.6 · Fácil · Aplicação

*Questão autoral — estilo Cesgranrio.*

O centro de operações de uma empresa acompanha, em uma única tela, a fila de chamados em andamento, o tempo médio de espera e os alertas de indisponibilidade de serviços, atualizados em tempo quase real, para que a equipe aja imediatamente.  
  
Esse tipo de painel é classificado como

(A) relatório paginado, voltado à prestação de contas e à auditoria.  
(B) dashboard estratégico, voltado às metas de longo prazo da alta direção.  
(C) dashboard analítico, voltado à exploração de tendências históricas.  
(D) dashboard operacional, voltado ao monitoramento em tempo quase real.  
(E) relatório de conformidade, voltado ao registro formal de evidências.  

### A. Gabarito

**D**

### B. Resolução comentada

O **dashboard operacional** é voltado ao **monitoramento em tempo (quase) real** e à ação imediata, com visão de filas, alertas e indicadores de desempenho corrente. O **estratégico** resume indicadores de alto nível e metas; o **analítico (tático)** explora tendências e causas; o **relatório** é voltado a documentar e detalhar, em geral de forma periódica.

### C. Análise das alternativas

- **(A)** Incorreta. Relatório paginado é voltado a documentar e detalhar (prestação de contas, auditoria), e não ao monitoramento em tempo quase real.
- **(B)** Incorreta. O estratégico apresenta indicadores de alto nível e metas, em geral com menor frequência de atualização.
- **(C)** Incorreta. O analítico explora tendências e causas, com dados históricos e recursos de detalhamento, e não o acompanhamento imediato.
- **(D)** Correta. Tela única, tempo quase real e ação imediata: dashboard operacional.
- **(E)** Incorreta. Relatório de conformidade registra evidências formais; não é um painel de monitoramento.

### D. Fundamentação teórica

- **Módulo:** M06 — Experiência do usuário (UX)
- **Assunto:** Organização e apresentação de dados em relatórios e dashboards: tipos de dashboard
- **Item do edital:** 6.6 (E5-053)
- **Arquivo de teoria:** `conteudo/06-experiencia-usuario/06-dashboards-e-relatorios.md`
- **Referência:** Material teórico do projeto; fontes conferidas na revisão do M06 (WCAG 2.2, heurísticas de Nielsen, INVEST, d.school); demais conteúdos de memória. Stephen Few citado de memória (não verificado).

### E. Ponto de atenção para a prova

**Operacional** = tempo quase real, ação imediata. **Tático/analítico** = tendências e causas. **Estratégico** = metas e KPIs de alto nível. **Relatório** = detalhe e registro.

### F. Revisão rápida

Dashboard: monitoramento rápido em uma tela. Operacional (tempo real), analítico (exploração), estratégico (metas).

### G. Tags

`m06` · `dashboards` · `tipos-de-dashboard` · `item-6.6` · `facil` · `aplicacao` · `cenario` · `autoral`

**Verificação do gabarito:** Sem execução (questão conceitual); gabarito conferido contra o arquivo de teoria (validado).  
**Status de validação:** `validada`  
**Validação:** Aprovada pelo usuário em 2026-10-31 (lote piloto do M06); sem revisão por terceiros; ressalvas: vários referenciais de UX de memória; interpretação dos itens 6.3, 6.4, 6.7 e 6.11 a confirmar.

---

## Questão 7 — AUT-000057

**AUT-000057** · Interoperabilidade entre navegadores: detecção de recursos e melhoria progressiva · item 6.7 · Média · Aplicação

*Questão autoral — estilo Cesgranrio.*

Uma equipe desenvolve um portal que deve funcionar em diversos navegadores e versões. Um recurso moderno de JavaScript usado em uma funcionalidade não é suportado por navegadores mais antigos usados por parte dos clientes. A funcionalidade é importante, e a empresa deseja que todos consigam utilizá-la, ainda que com experiência simplificada.  
  
A estratégia mais adequada, segundo as boas práticas de compatibilidade entre navegadores, é

(A) detectar o recurso em tempo de execução e, se ele não existir, oferecer uma alternativa funcional (melhoria progressiva).  
(B) identificar o navegador pelo user-agent e bloquear o acesso às versões que não suportam o recurso, informando que elas são incompatíveis.  
(C) exigir que todos os clientes utilizem o mesmo navegador e a mesma versão, o que elimina as diferenças de comportamento entre eles.  
(D) reescrever a funcionalidade com um recurso proprietário do navegador mais utilizado, abandonando os padrões web nos demais navegadores.  
(E) manter o código como está, pois os navegadores seguem os padrões e produzem sempre aparência e comportamento idênticos.  

### A. Gabarito

**A**

### B. Resolução comentada

A recomendação é usar **detecção de recursos** (*feature detection*), que verifica se o recurso existe, e oferecer uma **alternativa** quando ele não existe (**melhoria progressiva**: uma base funcional para todos, com acréscimos em navegadores capazes). A detecção do navegador pelo *user-agent* é frágil e desaconselhada. O objetivo é **experiência e funcionalidade equivalentes**, não aparência idêntica.

### C. Análise das alternativas

- **(A)** Correta. Detecção do recurso e alternativa funcional, com melhoria progressiva.
- **(B)** Incorreta. A detecção do navegador pelo user-agent é frágil e contraria a meta de a funcionalidade ser acessível a todos; bloquear usuários vai contra o objetivo declarado.
- **(C)** Incorreta. Impor um único navegador e versão aos clientes é impraticável e não é uma boa prática de interoperabilidade.
- **(D)** Incorreta. Recursos proprietários reduzem a interoperabilidade; a boa prática é seguir os padrões web.
- **(E)** Incorreta. Há diferenças entre navegadores (motores de renderização, suporte parcial a padrões); o esforço é garantir equivalência de funcionalidade, e não aparência idêntica.

### D. Fundamentação teórica

- **Módulo:** M06 — Experiência do usuário (UX)
- **Assunto:** Interoperabilidade de interfaces web entre diversos navegadores
- **Item do edital:** 6.7 (E5-054)
- **Arquivo de teoria:** `conteudo/06-experiencia-usuario/07-interoperabilidade.md`
- **Referência:** Material teórico do projeto; fontes conferidas na revisão do M06 (WCAG 2.2, heurísticas de Nielsen, INVEST, d.school); demais conteúdos de memória. Padrões W3C/WHATWG e técnicas citados de memória (não verificados online).

### E. Ponto de atenção para a prova

**Feature detection** (testar o recurso) > **user-agent sniffing**. **Melhoria progressiva**: base para todos + acréscimos. **Polyfill**: implementa o recurso ausente.

### F. Revisão rápida

Compatibilidade: padrões web, HTML semântico, detecção de recursos, melhoria progressiva, polyfills, matriz de testes.

### G. Tags

`m06` · `interoperabilidade` · `feature-detection` · `melhoria-progressiva` · `item-6.7` · `media` · `aplicacao` · `cenario` · `autoral`

**Verificação do gabarito:** Sem execução (questão conceitual); gabarito conferido contra o arquivo de teoria (validado).  
**Status de validação:** `validada`  
**Validação:** Aprovada pelo usuário em 2026-10-31 (lote piloto do M06); sem revisão por terceiros; ressalvas: vários referenciais de UX de memória; interpretação dos itens 6.3, 6.4, 6.7 e 6.11 a confirmar.

---

## Questão 8 — AUT-000058

**AUT-000058** · MVP e prototipação: distinção entre MVP e protótipo · item 6.8 · Difícil · Análise

*Questão autoral — estilo Cesgranrio.*

Duas equipes validam ideias de produtos digitais. A equipe 1 lança uma versão mínima, funcional, que é usada por dez clientes reais durante um mês, e mede adoção e retenção para decidir entre perseverar, pivotar ou encerrar. A equipe 2 constrói telas navegáveis, com aparência próxima à do produto final e sem funcionamento real do sistema, para observar se usuários compreendem o fluxo.  
  
As abordagens das equipes 1 e 2 correspondem, respectivamente, a

(A) um protótipo de alta fidelidade e um MVP funcional.  
(B) um wireframe e um protótipo de baixa fidelidade.  
(C) um MVP e um protótipo interativo de alta fidelidade.  
(D) um MVP e um mockup estático de baixa fidelidade.  
(E) um produto final completo e um MVP descartável.  

### A. Gabarito

**C**

### B. Resolução comentada

O **MVP** é a **versão mínima utilizável**, usada por **usuários reais**, para **aprender** com métricas reais (construir–medir–aprender: perseverar, pivotar ou encerrar). O **protótipo** é um modelo para **explorar e testar** ideias antes da construção, **sem** funcionamento real do sistema; o **protótipo interativo de alta fidelidade** tem aparência e comportamento próximos aos do produto final (telas navegáveis). Equipe 1: MVP; equipe 2: protótipo interativo de alta fidelidade.

### C. Análise das alternativas

- **(A)** Incorreta. Inverte os conceitos: a versão mínima funcional usada por clientes reais é um MVP; as telas navegáveis sem sistema real são um protótipo.
- **(B)** Incorreta. A equipe 1 usa um produto funcional com clientes reais (MVP), e não um wireframe; e as telas da equipe 2 têm aparência próxima à final (alta fidelidade), não baixa.
- **(C)** Correta. Equipe 1: MVP. Equipe 2: protótipo interativo de alta fidelidade.
- **(D)** Incorreta. As telas da equipe 2 são navegáveis (interativas) e próximas ao produto final; um *mockup* estático de baixa fidelidade não se enquadra.
- **(E)** Incorreta. A equipe 1 não entrega o produto final, mas a versão mínima para aprender; e a equipe 2 não faz um MVP, pois o sistema não funciona de fato.

### D. Fundamentação teórica

- **Módulo:** M06 — Experiência do usuário (UX)
- **Assunto:** Mínimo Produto Viável (MVP); prototipação
- **Item do edital:** 6.8 (E5-055) · itens secundários: 6.9
- **Arquivo de teoria:** `conteudo/06-experiencia-usuario/08-mvp-e-prototipacao.md`
- **Referência:** Material teórico do projeto; fontes conferidas na revisão do M06 (WCAG 2.2, heurísticas de Nielsen, INVEST, d.school); demais conteúdos de memória. Ries (Lean Startup) de memória (não verificado).

### E. Ponto de atenção para a prova

**MVP** = versão **utilizável**, usuários **reais**, aprendizado com **métricas**. **Protótipo** = modelo para explorar/testar **antes** de construir. Fidelidade (baixa/média/alta) descreve **o quanto se parece** com o produto final.

### F. Revisão rápida

MVP: versão mínima funcional para validar hipóteses com usuários reais. Protótipo: modelo (papel, wireframe, mockup, interativo) para explorar e testar; alta fidelidade = realista.

### G. Tags

`m06` · `mvp` · `prototipacao` · `fidelidade` · `item-6.8` · `item-6.9` · `dificil` · `analise` · `comparativa` · `autoral`

**Verificação do gabarito:** Sem execução (questão conceitual); gabarito conferido contra o arquivo de teoria (validado).  
**Status de validação:** `validada`  
**Validação:** Aprovada pelo usuário em 2026-10-31 (lote piloto do M06); sem revisão por terceiros; ressalvas: vários referenciais de UX de memória; interpretação dos itens 6.3, 6.4, 6.7 e 6.11 a confirmar.

---

## Questão 9 — AUT-000059

**AUT-000059** · Design thinking: etapas do processo · item 6.10 · Fácil · Memorização

*Questão autoral — estilo Cesgranrio.*

Em um projeto de design thinking, a equipe acabou de sintetizar o problema a partir de entrevistas e observações, formulando-o na forma "Como poderíamos ajudar o inspetor de campo a registrar ocorrências sem conexão?".  
  
Segundo as cinco etapas do d.school (empatizar, definir, idear, prototipar e testar), a etapa que normalmente vem a seguir é

(A) empatizar, para conhecer melhor o usuário.  
(B) prototipar, para tornar tangível uma solução já escolhida.  
(C) testar, para validar a solução com usuários.  
(D) definir, para sintetizar o problema, que acabou de ser formulado.  
(E) idear, para gerar um grande número de ideias de solução.  

### A. Gabarito

**E**

### B. Resolução comentada

As cinco etapas do d.school são **empatizar, definir, idear, prototipar e testar**. A formulação do problema é a etapa **definir**; a seguinte é **idear**, em que se geram muitas ideias (*brainstorming*, *brainwriting*). As etapas **não são lineares**: o processo é iterativo e pode voltar a etapas anteriores.

### C. Análise das alternativas

- **(A)** Incorreta. Empatizar é a primeira etapa, anterior à definição do problema; a equipe só volta a ela se precisar entender melhor o usuário.
- **(B)** Incorreta. Prototipar ocorre depois da ideação; antes de prototipar é preciso gerar e escolher ideias.
- **(C)** Incorreta. Testar é a última etapa e exige um protótipo ou uma solução a validar.
- **(D)** Incorreta. Definir é a etapa que acabou de ser concluída (a formulação do problema).
- **(E)** Correta. Após definir o problema, a etapa seguinte é idear.

### D. Fundamentação teórica

- **Módulo:** M06 — Experiência do usuário (UX)
- **Assunto:** Design thinking: etapas
- **Item do edital:** 6.10 (E5-057)
- **Arquivo de teoria:** `conteudo/06-experiencia-usuario/09-design-thinking-e-personas.md`
- **Referência:** Material teórico do projeto; fontes conferidas na revisão do M06 (WCAG 2.2, heurísticas de Nielsen, INVEST, d.school); demais conteúdos de memória. d.school (Stanford), Design Thinking Bootleg (cinco modes; verificado em 2026-10-31).

### E. Ponto de atenção para a prova

Ordem: **empatizar → definir → idear → prototipar → testar**, mas **iterativa**. *Brainwriting* e *brainstorming* são técnicas de **ideação**.

### F. Revisão rápida

Design thinking (d.school): empatizar, definir, idear, prototipar, testar. Iterativo e centrado nas pessoas.

### G. Tags

`m06` · `design-thinking` · `etapas` · `dschool` · `item-6.10` · `facil` · `memorizacao` · `cenario` · `autoral`

**Verificação do gabarito:** Sem execução (questão conceitual); gabarito conferido contra o arquivo de teoria (validado).  
**Status de validação:** `validada`  
**Validação:** Aprovada pelo usuário em 2026-10-31 (lote piloto do M06); sem revisão por terceiros; ressalvas: vários referenciais de UX de memória; interpretação dos itens 6.3, 6.4, 6.7 e 6.11 a confirmar.

---

## Questão 10 — AUT-000060

**AUT-000060** · Análise de personas: persona, perfil e papel · item 6.11 · Média · Compreensão

*Questão autoral — estilo Cesgranrio.*

A partir de entrevistas, observações em campo e dados de uso, uma equipe de UX cria um arquétipo chamado "Marta, inspetora de campo, 42 anos", com objetivos, dores, contexto de uso (luvas, sol forte e sinal instável) e uma frase representativa. O arquétipo representa um grupo de usuários com comportamentos semelhantes.  
  
O artefato descrito é denominado

(A) perfil de usuário, que descreve de forma agregada características de um grupo, sem a narrativa de um indivíduo.  
(B) persona, arquétipo baseado em pesquisa que representa um grupo de usuários com objetivos e comportamentos semelhantes.  
(C) papel de acesso (role), que define as permissões que um grupo de usuários possui no sistema e seus recursos.  
(D) parte interessada (stakeholder), que é qualquer pessoa ou grupo afetado pelo sistema ou com interesse nele.  
(E) proto-persona, que é elaborada a partir de hipóteses da equipe, sem pesquisa prévia com os usuários finais.  

### A. Gabarito

**B**

### B. Resolução comentada

**Persona** é um **arquétipo individualizado, baseado em pesquisa**, que representa um grupo de usuários, com nome, contexto, objetivos e dores. O **perfil de usuário** é uma descrição **agregada** das características do grupo, sem narrativa individual; o **papel** é a função desempenhada em relação ao sistema (ligada a perfis de acesso); a **parte interessada** é qualquer pessoa ou grupo afetado; a **proto-persona** nasce de **hipóteses**, sem pesquisa.

### C. Análise das alternativas

- **(A)** Incorreta. O perfil de usuário é agregado e não narrativo; o artefato do enunciado tem nome, história, objetivos e dores de um indivíduo-arquétipo.
- **(B)** Correta. Arquétipo individualizado, baseado em entrevistas, observação e dados, representando um grupo: persona.
- **(C)** Incorreta. Papel de acesso trata de permissões; o artefato descrito trata de objetivos, dores e contexto de uso.
- **(D)** Incorreta. Parte interessada é um conceito mais amplo (inclui quem não usa o sistema); não descreve um arquétipo de usuário.
- **(E)** Incorreta. A proto-persona parte de hipóteses, sem pesquisa; aqui, o arquétipo foi construído a partir de entrevistas, observação e dados de uso.

### D. Fundamentação teórica

- **Módulo:** M06 — Experiência do usuário (UX)
- **Assunto:** Análise de personas (papéis, perfis etc.) de usuários de software
- **Item do edital:** 6.11 (E5-058)
- **Arquivo de teoria:** `conteudo/06-experiencia-usuario/09-design-thinking-e-personas.md`
- **Referência:** Material teórico do projeto; fontes conferidas na revisão do M06 (WCAG 2.2, heurísticas de Nielsen, INVEST, d.school); demais conteúdos de memória. Cooper (personas) de memória (não verificado); interpretação do item 6.11 a confirmar.

### E. Ponto de atenção para a prova

**Persona** = arquétipo **com narrativa**, **baseado em pesquisa**. **Perfil** = descrição **agregada**. **Papel** = função/permissão. **Proto-persona** = **hipótese**, sem pesquisa.

### F. Revisão rápida

Persona: arquétipo baseado em pesquisa. Perfil: agregado. Papel: função ligada a acesso. Stakeholder: afetado ou interessado.

### G. Tags

`m06` · `personas` · `perfil-de-usuario` · `papel` · `item-6.11` · `media` · `compreensao` · `cenario` · `autoral`

**Verificação do gabarito:** Sem execução (questão conceitual); gabarito conferido contra o arquivo de teoria (validado).  
**Status de validação:** `validada`  
**Validação:** Aprovada pelo usuário em 2026-10-31 (lote piloto do M06); sem revisão por terceiros; ressalvas: vários referenciais de UX de memória; interpretação dos itens 6.3, 6.4, 6.7 e 6.11 a confirmar.

---

