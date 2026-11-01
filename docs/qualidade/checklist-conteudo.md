# Checklist de Qualidade — Conteúdo Teórico
## Transpetro 2026.4 — Ênfase 5: Análise de Sistemas: Processos de Negócios

**Arquivo:** `docs/qualidade/checklist-conteudo.md`

**Documentos relacionados:**
- `CLAUDE.md`
- `docs/edital/matriz-conteudo.md`
- `docs/edital/controle-cobertura.md`
- `docs/estrategia/estrategia-cesgranrio.md`
- `docs/estrategia/prioridades.md`
- `docs/estrategia/metodologia-estudo.md`
- `.claude/skills/edital-e-cobertura/SKILL.md`
- `.claude/skills/conteudo-didatico/SKILL.md`

---

## 1. Objetivo

Estabelecer critérios obrigatórios para criação, revisão e validação dos materiais teóricos do projeto.

Todo conteúdo produzido deverá atender a critérios de:

1. Aderência ao edital;
2. Correção técnica;
3. Completude;
4. Clareza didática;
5. Profundidade adequada;
6. Organização;
7. Rastreabilidade das fontes;
8. Aplicabilidade à resolução de questões;
9. Integração com os demais materiais;
10. Atualização e manutenção.

O checklist deverá ser utilizado antes de considerar qualquer arquivo teórico como validado.

**Regra fundamental:** um arquivo existente não significa que o assunto esteja concluído.

---

## 2. Identificação do conteúdo

Antes da revisão, registrar:

| Campo | Informação |
|---|---|
| ID do conteúdo | Identificador único |
| Módulo | Um dos nove módulos do projeto |
| Assunto | Nome do conteúdo |
| Item do edital | Identificação literal na matriz |
| Arquivo | Caminho do Markdown |
| Versão | Versão do material |
| Data de criação | Data |
| Data da revisão | Data |
| Responsável pela revisão | Identificação |
| Status | Situação atual |

### 2.1. Status permitidos

- `RASCUNHO`
- `EM_REVISAO`
- `PENDENTE`
- `VALIDADO`
- `DESATUALIZADO`

O status `VALIDADO` somente poderá ser atribuído após aprovação dos critérios obrigatórios.

---

## 3. Checklist de aderência ao edital

<escape>```text
[ ] O conteúdo está associado a um item da matriz oficial?
[ ] O texto do item do edital foi preservado corretamente?
[ ] O assunto está dentro do escopo da Ênfase 5?
[ ] Todos os subitens aplicáveis foram identificados?
[ ] A profundidade está adequada ao conteúdo exigido?
[ ] O material não inclui assuntos de outra ênfase sem justificativa?
[ ] Os tópicos complementares estão identificados como complementares?
[ ] Não existem lacunas relevantes em relação ao item do edital?
[ ] O conteúdo está organizado na pasta correspondente?
```</escape>

### Regras

- O edital é a referência principal de escopo.
- A matriz de conteúdo deve permitir rastrear cada assunto.
- Assuntos complementares devem ser identificados.
- Conteúdos fora do escopo não devem ser apresentados como obrigatórios.
- A organização pedagógica em nove módulos não substitui a estrutura oficial do edital.

---

## 4. Checklist de correção técnica

<escape>```text
[ ] As definições estão tecnicamente corretas?
[ ] A terminologia está adequada à área?
[ ] As siglas estão explicadas na primeira ocorrência?
[ ] Os conceitos relacionados estão corretamente diferenciados?
[ ] As classificações estão completas e corretas?
[ ] As etapas e os processos estão apresentados na sequência adequada?
[ ] As fórmulas, quando existentes, foram verificadas?
[ ] Os exemplos são tecnicamente válidos?
[ ] Os trechos de código, quando existentes, são coerentes?
[ ] Não existem contradições internas?
[ ] Não existem afirmações sem sustentação?
[ ] As referências técnicas foram verificadas?
```</escape>

### Regras

1. Não apresentar hipóteses como fatos.
2. Não criar normas, padrões ou definições inexistentes.
3. Não atribuir conceitos a autores sem referência verificável.
4. Não utilizar versões antigas de normas como se fossem atuais.
5. Indicar a versão de frameworks, padrões e normas quando isso for relevante.
6. Diferenciar conceitos normativos, recomendações e práticas de mercado.
7. Sinalizar divergências entre referências técnicas quando existirem.

---

## 5. Checklist de fontes e referências

<escape>```text
[ ] O material possui referências?
[ ] As fontes são identificáveis?
[ ] Os links, documentos ou publicações foram verificados?
[ ] As fontes são adequadas ao assunto?
[ ] As referências estão atualizadas quando necessário?
[ ] As citações correspondem ao conteúdo apresentado?
[ ] O material diferencia fonte oficial de material complementar?
[ ] Não foram inventados autores, documentos ou URLs?
[ ] O conteúdo permite rastrear afirmações técnicas relevantes?
```</escape>

### Hierarquia recomendada

Priorizar, conforme o assunto:

1. Edital e documentos oficiais da seleção;
2. Legislação e normas aplicáveis;
3. Documentação oficial de tecnologias e frameworks;
4. Publicações de organismos reconhecidos;
5. Livros técnicos e acadêmicos;
6. Artigos técnicos especializados;
7. Materiais didáticos complementares.

A hierarquia não significa que toda fonte de nível superior seja suficiente para qualquer assunto. A fonte deve ser adequada à afirmação que sustenta.

### Referências

Cada material deverá apresentar uma seção final de referências, preferencialmente contendo:

- Autor ou instituição;
- Título;
- Edição ou versão, quando aplicável;
- Ano de publicação;
- URL ou identificação bibliográfica;
- Data de acesso para fontes online, quando pertinente.

Não incluir referências apenas para aumentar a quantidade de fontes.

---

## 6. Checklist de estrutura didática

O material deverá apresentar uma estrutura compatível com a complexidade do assunto.

<escape>```text
[ ] Título objetivo e específico.
[ ] Identificação do módulo.
[ ] Item do edital relacionado.
[ ] Objetivos de aprendizagem.
[ ] Introdução e contextualização.
[ ] Desenvolvimento teórico.
[ ] Definições e conceitos fundamentais.
[ ] Classificações e características.
[ ] Exemplos explicativos.
[ ] Comparações entre conceitos relacionados.
[ ] Aplicações práticas, quando pertinentes.
[ ] Pontos de atenção para a prova.
[ ] Síntese do conteúdo.
[ ] Referências.
```</escape>

### 6.1. Objetivos de aprendizagem

Os objetivos devem indicar o que o estudante deverá conseguir fazer ao terminar o estudo.

Exemplos:

- Definir determinado conceito;
- Diferenciar duas abordagens;
- Identificar componentes de uma arquitetura;
- Explicar etapas de um processo;
- Interpretar uma situação-problema;
- Aplicar determinado método.

Evitar objetivos genéricos como "conhecer o assunto".

### 6.2. Desenvolvimento teórico

O texto deverá:

- Explicar os conceitos antes de utilizá-los;
- Desenvolver os assuntos em sequência lógica;
- Apresentar relações entre conceitos;
- Explicar termos técnicos;
- Evitar saltos de raciocínio;
- Utilizar exemplos para esclarecer pontos complexos;
- Evitar repetições desnecessárias.

### 6.3. Comparações conceituais

Quando existirem conceitos frequentemente confundidos, incluir tabelas comparativas.

Exemplos de relações que podem exigir comparação, conforme o conteúdo:

- OLTP × OLAP;
- Data Warehouse × Data Lake;
- Scrum × Kanban;
- Processo × projeto;
- Verificação × validação;
- Autenticação × autorização;
- Criptografia simétrica × assimétrica;
- Dado × informação × conhecimento.

A lista é ilustrativa. Não incluir comparações que não tenham relação com o assunto.

---

## 7. Checklist de profundidade

A profundidade deverá ser adequada ao escopo e à complexidade do item.

| Nível | Critério de aprovação |
|---|---|
| Fundamental | O estudante compreende definições, fundamentos e terminologia |
| Intermediário | O estudante consegue comparar, interpretar e aplicar conceitos |
| Avançado | O estudante consegue analisar cenários e integrar conhecimentos |

### Verificação

<escape>```text
[ ] Os fundamentos foram explicados?
[ ] Os conceitos essenciais foram desenvolvidos?
[ ] As classificações relevantes foram apresentadas?
[ ] As relações com outros conceitos foram explicadas?
[ ] Os exemplos permitem compreender a aplicação?
[ ] A profundidade é compatível com o edital?
[ ] O material evita aprofundamento desnecessário?
[ ] O material não se limita a uma lista de definições?
```</escape>

Não exigir que todos os assuntos tenham a mesma extensão.

Um conteúdo introdutório pode ser mais curto que um assunto com múltiplas classificações, etapas, técnicas ou aplicações.

---

## 8. Checklist de preparação para a Cesgranrio

O material deverá ajudar o estudante a compreender e aplicar os conceitos em questões.

<escape>```text
[ ] Os conceitos importantes estão destacados de maneira discreta?
[ ] Existem comparações úteis para evitar confusões?
[ ] Os termos técnicos estão apresentados corretamente?
[ ] Existem exemplos de aplicação?
[ ] Os pontos conceitualmente sensíveis estão identificados?
[ ] O material permite formular perguntas objetivas?
[ ] As observações sobre a banca possuem evidências?
[ ] Não existem afirmações especulativas sobre incidência?
```</escape>

### Regras específicas

- Não afirmar que determinado assunto é frequente sem evidência.
- Não inventar estatísticas de cobrança.
- Não apresentar tendências como garantias de cobrança futura.
- Não reduzir o conteúdo obrigatório a uma lista de assuntos supostamente mais cobrados.
- Separar observações sobre provas anteriores de recomendações pedagógicas.

Quando houver análise de questões anteriores, referenciar as provas e questões utilizadas.

---

## 9. Checklist de exemplos, tabelas e diagramas

<escape>```text
[ ] Os exemplos são coerentes com a teoria?
[ ] Os exemplos realmente ajudam a compreender?
[ ] As tabelas facilitam comparações?
[ ] Os diagramas representam corretamente os conceitos?
[ ] Os fluxogramas respeitam a sequência lógica?
[ ] As fórmulas possuem explicação das variáveis?
[ ] Os exemplos de código são válidos e contextualizados?
[ ] Os elementos visuais não substituem explicações necessárias?
```</escape>

### Padrões

- Utilizar tabelas para comparações e classificações.
- Utilizar diagramas para representar arquiteturas e relações.
- Utilizar fluxogramas para processos e sequências.
- Utilizar fórmulas apenas quando pertinentes.
- Explicar siglas e símbolos utilizados.
- Evitar elementos decorativos sem função didática.

---

## 10. Checklist de integração com questões

O conteúdo deverá estar preparado para integração ao banco de questões.

<escape>```text
[ ] Os conceitos apresentados permitem elaborar questões?
[ ] Os assuntos estão associados aos respectivos itens do edital?
[ ] Os pontos que exigem aplicação foram identificados?
[ ] Os conceitos semelhantes foram diferenciados?
[ ] As classificações e etapas estão suficientemente explicadas?
[ ] Existem lacunas que podem gerar questões ambíguas?
[ ] O conteúdo não apresenta respostas incompatíveis com o gabarito de questões existentes?
```</escape>

A produção de questões deverá seguir as regras de:

`.claude/skills/questoes-cesgranrio/SKILL.md`

Não inserir questões oficiais no material teórico sem comprovação de origem.

Questões autorais de fixação deverão estar identificadas como tais.

---

## 11. Checklist de integração com NotebookLM

<escape>```text
[ ] O documento é compreensível de forma independente?
[ ] O título identifica claramente o assunto?
[ ] Os subtítulos estão organizados hierarquicamente?
[ ] As siglas estão contextualizadas?
[ ] As tabelas possuem cabeçalhos claros?
[ ] Os exemplos possuem explicações?
[ ] As referências estão presentes?
[ ] Não existem dependências de informações presentes apenas em outro arquivo?
[ ] O Markdown está bem formatado?
```</escape>

O conteúdo deverá ser adequado para utilização como fonte no NotebookLM.

A integração deverá seguir:

`.claude/skills/notebooklm-export/SKILL.md`

---

## 12. Checklist de integração com a plataforma

<escape>```text
[ ] O conteúdo possui identificador único?
[ ] O módulo está identificado?
[ ] O item do edital está associado?
[ ] O arquivo está no diretório correto?
[ ] O conteúdo possui metadados suficientes?
[ ] O arquivo pode ser convertido ou carregado pela plataforma?
[ ] Os títulos e subtítulos permitem navegação?
[ ] Os links internos funcionam?
[ ] Não existem caminhos quebrados?
[ ] O conteúdo está preparado para futuras atualizações?
```</escape>

A integração deverá respeitar:

- `docs/edital/matriz-conteudo.md`;
- `docs/edital/controle-cobertura.md`;
- `.claude/skills/site-estatico/SKILL.md`.

---

## 13. Checklist de linguagem e apresentação

<escape>```text
[ ] A linguagem é clara e tecnicamente adequada?
[ ] Os parágrafos possuem extensão razoável?
[ ] Os termos técnicos são utilizados de forma consistente?
[ ] As abreviações estão explicadas?
[ ] Não existem erros ortográficos?
[ ] Não existem erros gramaticais?
[ ] Não há repetições excessivas?
[ ] Não há explicações vagas?
[ ] Não há excesso de listas sem desenvolvimento?
[ ] A formatação é consistente?
```</escape>

### Padrão editorial

- Português brasileiro;
- Linguagem técnica e objetiva;
- Explicações completas, sem excesso de informalidade;
- Tabelas quando agregarem clareza;
- Títulos e subtítulos descritivos;
- Negrito apenas para conceitos importantes;
- Evitar emojis;
- Evitar frases promocionais;
- Evitar conclusões genéricas.

O material deve funcionar como uma apostila técnica, não como uma publicação de blog.

---

## 14. Critérios de reprovação

Um conteúdo não poderá receber status `VALIDADO` se apresentar qualquer uma das seguintes condições:

| Código | Problema | Gravidade |
|---|---|---|
| Q01 | Conteúdo fora do escopo apresentado como obrigatório | Crítica |
| Q02 | Erro técnico relevante | Crítica |
| Q03 | Fonte inventada ou atribuição falsa | Crítica |
| Q04 | Item do edital não identificado | Alta |
| Q05 | Lacuna importante no conteúdo exigido | Alta |
| Q06 | Conceitos contraditórios | Alta |
| Q07 | Explicação insuficiente para compreensão | Alta |
| Q08 | Referências incompletas ou não verificáveis | Média/Alta |
| Q09 | Erros de formatação que prejudicam a leitura | Média |
| Q10 | Falta de integração com matriz e plataforma | Média |

### Tratamento

- Crítica: bloquear validação imediatamente.
- Alta: corrigir antes da validação.
- Média: corrigir antes da publicação, salvo exceção documentada.
- Baixa: registrar e programar correção.

Problemas críticos e altos não poderão ser ignorados para aumentar artificialmente o percentual de cobertura.

---

## 15. Resultado da revisão

Cada conteúdo deverá receber um resultado:

| Resultado | Significado |
|---|---|
| APROVADO | Atende aos critérios obrigatórios |
| APROVADO COM RESSALVAS | Possui pendências menores documentadas |
| REPROVADO | Possui problemas que impedem validação |

### Registro da revisão

```text
ID do conteúdo:
Módulo:
Assunto:
Item do edital:
Arquivo:

Resultado:
Data da revisão:

Critérios aprovados:
Pendências identificadas:
Problemas críticos:
Problemas altos:
Ações corretivas:

Revisor:
Próxima revisão:
```

### Regra de aprovação

Para receber status `VALIDADO`, o material deverá:

1. Atender aos critérios obrigatórios de aderência ao edital;
2. Não possuir erros técnicos críticos;
3. Não possuir fontes inventadas;
4. Atender aos requisitos essenciais de estrutura didática;
5. Apresentar referências verificáveis;
6. Não possuir lacunas relevantes;
7. Estar integrado à matriz de conteúdo;
8. Ter sido revisado e aprovado.

Aprovação com ressalvas não equivale a validação definitiva.

---

## 16. Atualização da matriz e controle de cobertura

Após a validação:

1. Atualizar o status do conteúdo na matriz.
2. Atualizar o controle de cobertura.
3. Registrar a data da validação.
4. Confirmar os itens do edital efetivamente atendidos.
5. Identificar pendências.
6. Atualizar a integração com questões, flashcards e NotebookLM.

Não marcar um item do edital como integralmente coberto quando apenas parte do conteúdo tiver sido validada.

---

## 17. Instruções para o Claude Code

Antes de produzir ou revisar qualquer material teórico:

1. Ler este checklist.
2. Consultar a matriz oficial.
3. Consultar a Skill `conteudo-didatico`.
4. Verificar os arquivos existentes.
5. Identificar o escopo exato do assunto.
6. Produzir ou revisar o conteúdo.
7. Executar os critérios aplicáveis.
8. Registrar pendências.
9. Atualizar a matriz somente após validação.
10. Informar o resultado da revisão.

### Proibições

- Não marcar conteúdo como validado apenas por estar escrito.
- Não inventar referências.
- Não inventar itens do edital.
- Não substituir fontes oficiais por inferências.
- Não omitir limitações de fontes.
- Não criar estatísticas de incidência sem dados.
- Não considerar material superficial como completo.
- Não aprovar conteúdo com erro técnico relevante.

---

## 18. Princípio final

A qualidade do material deverá ser avaliada pela sua capacidade de ensinar corretamente o conteúdo exigido, permitir sua compreensão e preparar o estudante para aplicá-lo em questões.

**Conteúdo produzido não é necessariamente conteúdo aprendido. Conteúdo escrito não é necessariamente conteúdo completo. Conteúdo completo não é necessariamente conteúdo validado.**

A validação deverá ser rastreável, criteriosa e vinculada ao edital.