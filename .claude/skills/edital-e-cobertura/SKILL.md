---
name: edital-e-cobertura
description: Audita o edital oficial da Transpetro, extrai o conteúdo programático da Ênfase 5, organiza a matriz de cobertura e verifica se conteúdos, questões e simulados estão integralmente alinhados ao programa. Use antes de produzir conteúdo didático, questões ou simulados e sempre que houver atualização do edital ou da matriz.
---

# Skill: Edital e Cobertura Programática

## 1. Objetivo

Garantir que todo o projeto de estudos da Transpetro — Ênfase 5 — Análise de Sistemas: Processos de Negócios esteja rigorosamente alinhado ao edital oficial do concurso.

Esta Skill é responsável por:

- Identificar e interpretar o conteúdo programático oficial.
- Extrair os itens e subitens do Anexo IV.
- Organizar os assuntos em uma matriz de cobertura.
- Relacionar cada conteúdo didático aos respectivos itens do edital.
- Identificar lacunas, duplicidades e assuntos fora do escopo.
- Monitorar a cobertura de questões, simulados e materiais do NotebookLM.
- Preservar a rastreabilidade entre edital e material produzido.

**Regra central:** o edital oficial é a fonte normativa. A estrutura interna do projeto é uma organização pedagógica e não pode substituir, modificar ou ampliar silenciosamente o conteúdo programático.

## 2. Quando utilizar

Acione esta Skill obrigatoriamente:

1. Na primeira execução do projeto.
2. Antes da elaboração dos materiais de cada módulo.
3. Antes da criação de bancos de questões.
4. Antes da elaboração de simulados.
5. Durante auditorias de cobertura.
6. Quando houver alteração ou publicação de retificação do edital.
7. Quando forem identificados assuntos sem correspondência clara com o programa.

Não comece a produção integral dos materiais sem verificar a existência e a integridade do edital oficial.

## 3. Hierarquia de fontes

Utilize a seguinte ordem de prioridade:

| Prioridade | Fonte | Utilização |
|---|---|---|
| 1 | Edital oficial da Transpetro | Fonte normativa principal |
| 2 | Retificações e comunicados oficiais | Atualização das regras e do programa |
| 3 | Anexos oficiais | Detalhamento do conteúdo e das exigências |
| 4 | Documentação oficial da banca Cesgranrio | Compreensão do formato e das regras das provas |
| 5 | Matriz de cobertura do projeto | Organização operacional do conteúdo |
| 6 | Bibliografia e referências técnicas | Fundamentação didática dos assuntos |

Não trate a matriz de cobertura como fonte independente do edital.

Se houver divergência entre a matriz e o edital, prevalece o edital. Registre a divergência e proponha a correção da matriz.

Não utilize editais de outros cargos, ênfases ou concursos como substitutos do edital atual.

## 4. Identificação do concurso

O projeto deve considerar:

- Concurso: Transpetro.
- Ênfase: 5 — Análise de Sistemas: Processos de Negócios.
- Banca: Fundação Cesgranrio.
- Prova objetiva: 70 questões.
- Conhecimentos específicos: 50 questões.
- Língua Portuguesa: 10 questões.
- Língua Inglesa: 10 questões.
- Alternativas: A, B, C, D e E.

A distribuição das 50 questões específicas entre os assuntos não deve ser presumida. Só poderá ser informada quando houver evidência documental suficiente.

Não confunda a Ênfase 5 com outras ênfases ou cargos do concurso.

## 5. Auditoria inicial do edital

Na primeira execução, siga esta sequência:

### Etapa 1 — Localizar o documento oficial

- Identifique o arquivo do edital disponível no projeto.
- Verifique se o documento está completo e legível.
- Identifique número, data e versão do edital.
- Verifique a existência de retificações.
- Registre os documentos utilizados.

Se o edital não estiver disponível, interrompa a extração e informe que o documento oficial precisa ser fornecido ou localizado.

Não reconstrua o conteúdo programático com base em memória, conhecimento geral ou editais anteriores.

### Etapa 2 — Extrair o conteúdo programático

Extraia integralmente o conteúdo referente à Ênfase 5.

Preserve:

- Numeração original.
- Títulos.
- Subitens.
- Terminologia.
- Ordem de apresentação.
- Relação hierárquica entre os assuntos.

Não resuma ou reescreva os itens na etapa de extração.

Se houver problemas de leitura ou interpretação, marque o trecho como pendente de validação.

### Etapa 3 — Estruturar os assuntos

Organize os itens em três níveis:

- **Nível 1:** módulo ou assunto principal.
- **Nível 2:** tópico do edital.
- **Nível 3:** subtema didático necessário para desenvolver o tópico.

Os níveis 1 e 2 devem preservar a correspondência com o documento oficial.

O nível 3 pode ser desenvolvido pedagogicamente, desde que não seja apresentado como transcrição literal do edital.

### Etapa 4 — Validar a estrutura

Antes de aprovar a matriz:

- Compare a extração com o documento original.
- Verifique se todos os itens foram contemplados.
- Identifique itens duplicados.
- Identifique assuntos sem correspondência.
- Confira se a organização não alterou o sentido do edital.

## 6. Matriz de cobertura

O arquivo principal será:

`docs/edital/matriz-conteudo.md`

A matriz deve conter, no mínimo, as seguintes colunas:

| Campo | Descrição |
|---|---|
| ID | Identificador único do item |
| Item do edital | Numeração original |
| Texto oficial | Transcrição do edital |
| Módulo | Organização pedagógica |
| Tópicos | Conteúdos necessários |
| Arquivo de estudo | Caminho do material correspondente |
| Questões | Quantidade de questões vinculadas |
| Status | Situação de desenvolvimento |
| Observações | Pendências e justificativas |

Utilize identificadores estáveis, por exemplo:

- E5-01
- E5-01.01
- E5-01.02
- E5-02

Os identificadores são internos e não substituem a numeração oficial.

### Status permitidos

- `NAO_INICIADO`
- `EM_MAPEAMENTO`
- `EM_PRODUCAO`
- `EM_REVISAO`
- `VALIDADO`
- `PENDENTE`
- `FORA_DO_ESCOPO`

Não marque um item como validado apenas porque existe um arquivo com seu nome.

A validação exige conteúdo efetivamente desenvolvido, revisado e vinculado ao edital.

## 7. Organização dos nove módulos

A estrutura pedagógica prevista para o projeto contém:

1. Arquitetura de Dados.
2. Gerenciamento de Projetos e Produtos.
3. Processos, grupos de processos e áreas de conhecimento.
4. Gestão e Governança em TI.
5. Engenharia de Software.
6. Experiência do Usuário.
7. Análise de Dados e Informações.
8. Lógica Matemática.
9. Segurança da Informação.

Essa organização é uma proposta de agrupamento didático.

**Obrigatório:** verificar cada módulo e seus subtemas contra o texto oficial do Anexo IV antes de produzir o material.

Não presumir que todos os subtemas sugeridos na estrutura estejam expressamente previstos no edital.

Se um subtema for necessário para explicar um assunto previsto, classifique-o como fundamentação complementar, deixando clara sua relação com o item oficial.

Se não houver relação justificável, classifique-o como fora do escopo.

Não introduzir conteúdos de Java/J2EE ou de outras ênfases sem correspondência expressa com o programa oficial.

## 8. Regras para conteúdos complementares

Utilize três classificações:

### A — Conteúdo expresso no edital

Assunto explicitamente mencionado no programa.

Deve ser tratado como conteúdo obrigatório.

### B — Fundamentação complementar

Conhecimento técnico necessário para compreender ou aprofundar um assunto previsto no edital.

Pode ser incluído, desde que:

- Tenha relação direta com um item oficial.
- Não substitua o conteúdo obrigatório.
- Não seja apresentado como exigência expressa do edital.
- Tenha profundidade proporcional à necessidade didática.

### C — Conteúdo fora do escopo

Assunto sem correspondência justificável com o edital.

Não deve ocupar espaço relevante no material principal, nos simulados ou no planejamento de estudos.

Se houver dúvida sobre a classificação, registre como pendente em vez de assumir que o conteúdo é obrigatório.

## 9. Controle de cobertura dos materiais

Cada arquivo didático deverá apresentar uma identificação de rastreabilidade no início.

Modelo:

```markdown
---
modulo: 01-arquitetura-dados
itens_edital:
  - "Número e identificação do item oficial"
tipo_conteudo: "teoria"
status: "em_revisao"
fontes:
  - "Referências utilizadas"
---
```

A identificação deve permitir descobrir:

- Qual item do edital originou o conteúdo.
- Em qual módulo está o material.
- Quais arquivos desenvolvem o assunto.
- Quais questões avaliam o tópico.
- Quais pendências ainda existem.

Não invente numeração oficial. Utilize os identificadores internos apenas como referência adicional.

## 10. Auditoria de questões

Toda questão deve estar associada a pelo menos um item da matriz.

Verifique:

- Se o assunto está previsto no edital.
- Se a questão exige conhecimento compatível com o programa.
- Se o nível de dificuldade é adequado.
- Se existe correspondência entre enunciado e conteúdo estudado.
- Se o gabarito está fundamentado.
- Se a classificação da questão está correta.

Questões com conteúdo fora do edital devem ser identificadas e não podem integrar a contagem de cobertura oficial.

Mantenha separadas as categorias:

- Questão oficial.
- Questão adaptada.
- Questão autoral — estilo Cesgranrio.

A classificação da questão não altera sua relação com o conteúdo programático.

## 11. Auditoria de simulados

Antes de liberar um simulado:

1. Verifique se todas as questões específicas estão vinculadas à matriz.
2. Confira se Português e Inglês estão separados dos conhecimentos específicos.
3. Confira o total de questões e alternativas.
4. Verifique a existência de gabarito.
5. Verifique os comentários das respostas.
6. Identifique assuntos não contemplados.
7. Registre a cobertura efetivamente alcançada.

O formato completo deve respeitar a estrutura prevista no edital: 50 questões específicas, 10 de Português e 10 de Inglês.

Não invente uma distribuição percentual de questões por assunto. Quando a distribuição não estiver documentada, identifique-a como distribuição pedagógica do simulado, não como reprodução da prova oficial.

## 12. Indicadores de cobertura

O controle deve apresentar:

- Total de itens oficiais identificados.
- Itens mapeados.
- Itens com material produzido.
- Itens validados.
- Itens pendentes.
- Itens sem questões.
- Itens sem revisão.
- Conteúdos complementares.
- Conteúdos fora do escopo.

Utilize os seguintes indicadores:

**Cobertura de mapeamento**

Itens oficiais mapeados / total de itens oficiais.

**Cobertura de produção**

Itens com material produzido / total de itens oficiais.

**Cobertura validada**

Itens com material validado / total de itens oficiais.

Não confunda cobertura de produção com cobertura validada.

Um item parcialmente desenvolvido não deve ser contado como integralmente validado.

## 13. Arquivos de controle

Manter atualizados:

- `docs/edital/matriz-conteudo.md`
- `docs/edital/controle-cobertura.md`
- `docs/edital/estrutura-prova.md`

### matriz-conteudo.md

Contém o mapeamento detalhado dos itens oficiais e seus respectivos materiais.

### controle-cobertura.md

Contém o acompanhamento de produção, revisão, validação e lacunas.

### estrutura-prova.md

Contém a estrutura objetiva da prova, os quantitativos oficialmente previstos e as observações sobre a distribuição dos assuntos.

Sempre que um conteúdo for criado, atualizado ou validado, atualize os arquivos de controle correspondentes.

## 14. Tratamento de divergências

Quando encontrar divergência:

1. Identifique o item afetado.
2. Apresente o texto oficial.
3. Apresente o conteúdo atualmente existente no projeto.
4. Explique a diferença.
5. Indique o impacto na cobertura.
6. Proponha uma correção.
7. Aguarde aprovação quando a correção alterar significativamente a estrutura do projeto.

Não apague conteúdo automaticamente.

Preserve o histórico das decisões relevantes.

## 15. Critérios de conclusão

A auditoria do edital só poderá ser considerada concluída quando:

- O documento oficial tiver sido identificado.
- O conteúdo programático da Ênfase 5 tiver sido extraído integralmente.
- A numeração original tiver sido preservada.
- Todos os itens estiverem na matriz.
- Todos os itens tiverem uma classificação de escopo.
- As relações com os módulos didáticos estiverem documentadas.
- As divergências estiverem registradas.
- A estrutura da prova estiver documentada.
- Os arquivos de controle estiverem atualizados.

A conclusão da auditoria inicial não significa que o material didático esteja pronto. Significa apenas que existe uma base confiável para sua produção.

## 16. Comportamento obrigatório do Claude

Ao executar esta Skill:

- Seja conservador na interpretação do edital.
- Não invente itens, subitens ou exigências.
- Não transforme conhecimento geral em conteúdo oficialmente exigido.
- Não use frequência presumida de cobrança para modificar o programa.
- Não elimine assuntos difíceis ou extensos.
- Não marque conteúdos como validados sem revisão.
- Não altere a estrutura oficial sem justificativa.
- Informe claramente o que foi confirmado, inferido ou permanece pendente.

**Princípio final:** nenhum assunto obrigatório pode ser omitido e nenhum assunto complementar pode ser apresentado como exigência oficial sem evidência documental.