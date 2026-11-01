# 06 — PREPARAÇÃO E EXPORTAÇÃO DE MATERIAIS PARA NOTEBOOKLM

## Objetivo

Preparar, organizar e exportar os materiais do projeto Transpetro 2026.4 — Ênfase 5: Análise de Sistemas: Processos de Negócios, para utilização no Google NotebookLM.

O NotebookLM será utilizado como ferramenta complementar de aprendizagem, permitindo:

- Estudar os conteúdos por meio de fontes organizadas.
- Gerar resumos.
- Criar mapas mentais.
- Produzir podcasts e conversas em áudio.
- Elaborar perguntas de revisão.
- Comparar conceitos.
- Revisar assuntos complexos.
- Identificar relações entre diferentes módulos.
- Preparar revisões para a prova.
- Consolidar conhecimentos a partir de materiais confiáveis.

**Princípio central:** o NotebookLM deverá trabalhar prioritariamente com o conteúdo validado do projeto. Não deverá ser utilizado para substituir a auditoria do edital, a validação técnica dos materiais ou a correção das questões.

---

## 1. Preparação obrigatória

Antes de iniciar, leia:

- `CLAUDE.md`
- `PROMPT-MESTRE.md`
- `.claude/skills/notebooklm-export/SKILL.md`
- `.claude/skills/conteudo-didatico/SKILL.md`
- `.claude/skills/questoes-cesgranrio/SKILL.md`
- `.claude/skills/simulados/SKILL.md`
- `docs/edital/anexo-IV-extraido.md`
- `docs/edital/matriz-conteudo.md`
- `docs/edital/controle-cobertura.md`
- `docs/estrategia/estrategia-cesgranrio.md`
- `docs/estrategia/prioridades.md`
- `docs/estrategia/metodologia-estudo.md`
- `docs/qualidade/checklist-conteudo.md`
- `docs/qualidade/checklist-questoes.md`

Consulte também:

- Materiais teóricos em `conteudo/`.
- Questões validadas em `banco-questoes/`.
- Simulados validados, quando disponíveis.
- Materiais de revisão já produzidos.

### Condições para iniciar

Confirme:

1. A auditoria do edital está aprovada.
2. A matriz de conteúdo está validada.
3. Os materiais teóricos estão organizados.
4. As questões estão classificadas por origem.
5. Os gabaritos e comentários foram validados.
6. As fontes possuem referências rastreáveis.

Se houver material incompleto, não o apresente como fonte definitiva.

Utilize o status de validação para separar materiais prontos, pendentes e reprovados.

---

## 2. Estrutura dos materiais

Organize os arquivos dentro de:

`notebooklm/`

Utilize a estrutura existente:

```text
notebooklm/
├── fontes/
│   ├── 01-arquitetura-dados/
│   ├── 02-projetos-produtos/
│   ├── 03-processos-gerenciamento/
│   ├── 04-governanca-ti/
│   ├── 05-engenharia-software/
│   ├── 06-experiencia-usuario/
│   ├── 07-analise-dados/
│   ├── 08-logica-matematica/
│   └── 09-seguranca-informacao/
├── mapas-mentais/
├── roteiros-podcast/
├── resumos/
└── prompts/
```

Cada arquivo deverá ser independente e possuir identificação clara.

Evite documentos excessivamente extensos que dificultem a consulta e a geração de respostas pelo NotebookLM.

---

## 3. Preparação das fontes teóricas

Para cada assunto do edital, prepare uma fonte independente em Markdown.

A fonte deverá conter:

### Identificação

- Módulo.
- Assunto.
- Item do edital.
- Nome do material.
- Versão.
- Status de validação.
- Referências utilizadas.

### Conteúdo

Preserve a estrutura do material teórico original:

1. Introdução.
2. Objetivos de aprendizagem.
3. Conceitos fundamentais.
4. Desenvolvimento teórico.
5. Aprofundamento.
6. Exemplos práticos.
7. Comparações entre conceitos.
8. Aplicações.
9. Pontos de atenção para a Cesgranrio.
10. Síntese.
11. Referências.

### Regras

- Não reduza conceitos importantes apenas para diminuir o tamanho do arquivo.
- Não altere definições técnicas.
- Não introduza conceitos sem referência.
- Preserve fórmulas, tabelas, classificações e exemplos.
- Não misture assuntos sem relação direta.
- Identifique informações pendentes.
- Preserve a terminologia utilizada no material original.

Quando o material teórico possuir lacunas, registre-as. Não complete silenciosamente com conhecimento externo.

---

## 4. Resumos para revisão

Crie resumos independentes por assunto.

Cada resumo deverá priorizar:

- Conceitos essenciais.
- Definições.
- Classificações.
- Etapas e processos.
- Diferenças entre conceitos semelhantes.
- Fórmulas.
- Normas e frameworks.
- Relações importantes.
- Erros conceituais recorrentes.
- Pontos de atenção para a prova.

### Níveis de resumo

Prepare três níveis, quando o volume de conteúdo justificar:

**Nível 1 — Revisão rápida**

Material conciso para consulta antes de resolver questões.

**Nível 2 — Revisão intermediária**

Material com explicações e comparações para consolidar conceitos.

**Nível 3 — Revisão aprofundada**

Material mais completo, adequado para retomar assuntos com baixo desempenho.

Não transforme o resumo em uma lista de palavras-chave sem explicação.

---

## 5. Mapas mentais

Prepare mapas mentais textuais e estruturados, organizados por módulo e assunto.

Utilize hierarquia clara:

- Tema central.
- Conceitos principais.
- Subconceitos.
- Classificações.
- Relações.
- Exemplos.
- Pontos de atenção.

Priorize relações conceituais relevantes.

Exemplos de organização:

- Arquitetura de Dados: modelos, estruturas, integração, armazenamento e governança.
- Gerenciamento de Projetos: princípios, práticas, métodos, papéis e entregas.
- Processos: conceitos, ciclo de vida, etapas e indicadores.
- Governança de TI: estruturas, objetivos, responsabilidades e controles.
- Engenharia de Software: requisitos, arquitetura, desenvolvimento, testes e manutenção.
- UX: pesquisa, interação, usabilidade, acessibilidade e avaliação.
- Análise de Dados: preparação, exploração, análise e interpretação.
- Lógica Matemática: proposições, operadores, equivalências e demonstrações.
- Segurança da Informação: princípios, ameaças, controles, riscos e continuidade.

Os exemplos acima são referências organizacionais. O conteúdo efetivo deverá seguir a matriz validada.

Não inclua assuntos fora do edital apenas para completar mapas.

---

## 6. Roteiros de podcast

Prepare roteiros que possam ser utilizados para gerar conteúdos em áudio no NotebookLM.

Produza formatos diferentes.

### 6.1 Podcast explicativo

Objetivo: ensinar um assunto desde os fundamentos.

Estrutura:

1. Apresentação do tema.
2. Contextualização.
3. Conceitos fundamentais.
4. Explicação aprofundada.
5. Exemplos.
6. Comparações.
7. Pontos de atenção.
8. Síntese final.

### 6.2 Podcast de revisão

Objetivo: recuperar conteúdos estudados.

Estrutura:

1. Introdução rápida.
2. Recuperação dos conceitos.
3. Diferenças importantes.
4. Erros comuns.
5. Perguntas de fixação.
6. Respostas comentadas.
7. Recapitulação.

### 6.3 Podcast de aprofundamento

Objetivo: desenvolver raciocínio sobre assuntos complexos.

Estrutura:

1. Problema ou cenário.
2. Conceitos envolvidos.
3. Análise técnica.
4. Relações entre assuntos.
5. Aplicações práticas.
6. Limitações e exceções.
7. Conclusão.

### 6.4 Podcast de revisão pré-prova

Objetivo: revisão de alta eficiência.

Estrutura:

1. Principais conceitos.
2. Definições importantes.
3. Classificações.
4. Comparações.
5. Fórmulas, quando aplicáveis.
6. Armadilhas conceituais.
7. Perguntas rápidas.

### Regras de produção

- Não invente diálogos apresentados como fontes reais.
- Não crie afirmações que não estejam fundamentadas.
- Não simplifique conceitos a ponto de alterar seu significado.
- Utilize linguagem oral clara, mas tecnicamente correta.
- Evite introduções longas e conteúdo motivacional genérico.
- Identifique o módulo e o assunto no início.
- Mantenha cada roteiro concentrado em um tema.

---

## 7. Materiais baseados em questões

Prepare fontes específicas para trabalhar questões e comentários.

Separe:

1. Questões oficiais.
2. Questões adaptadas.
3. Questões autorais.
4. Gabaritos comentados.
5. Questões com maior complexidade.
6. Questões que envolvem assuntos integrados.

### Regras

- Preserve a identificação original.
- Mantenha a classificação de origem.
- Preserve o gabarito validado.
- Não altere alternativas.
- Não misture questões sem identificação.
- Não apresente questões autorais como oficiais.
- Respeite as regras de reprodução e direitos autorais aplicáveis.

Quando houver restrições de reprodução de questões oficiais, prepare referências, identificadores e análises próprias em vez de copiar indiscriminadamente os enunciados.

### Materiais de aprendizagem

Prepare também fontes com:

- Conceitos cobrados.
- Erros recorrentes.
- Comparações entre alternativas.
- Fundamentação das respostas.
- Relação entre questões e itens do edital.

---

## 8. Prompts para utilizar no NotebookLM

Crie arquivos independentes dentro de:

`notebooklm/prompts/`

Prepare prompts específicos para:

### 8.1 Explicação de conteúdo

Solicitar uma explicação didática, estruturada e aprofundada, utilizando exclusivamente as fontes selecionadas.

### 8.2 Comparação de conceitos

Solicitar comparação entre conceitos semelhantes, destacando diferenças, aplicações, vantagens, limitações e possíveis confusões.

### 8.3 Revisão ativa

Solicitar perguntas progressivas, aguardar a resposta do estudante e fornecer correção comentada.

### 8.4 Simulação de prova

Solicitar questões de múltipla escolha com cinco alternativas, respeitando o conteúdo das fontes.

Deixar claro que as questões geradas pelo NotebookLM são exercícios de treinamento e não questões oficiais da Cesgranrio.

### 8.5 Identificação de lacunas

Solicitar que o NotebookLM identifique conceitos mencionados superficialmente, assuntos sem explicação suficiente e pontos que precisam de novas fontes.

### 8.6 Revisão pré-prova

Solicitar síntese dos conceitos essenciais, diferenças importantes, fórmulas e erros conceituais.

### 8.7 Podcast

Solicitar uma conversa didática entre apresentadores, com explicações técnicas, exemplos e perguntas de fixação, sem acrescentar informações não sustentadas pelas fontes.

### 8.8 Mapa mental

Solicitar uma estrutura hierárquica de conceitos e relações, preservando a terminologia das fontes.

### 8.9 Análise de questões

Solicitar resolução detalhada, justificativa de cada alternativa e identificação dos conceitos avaliados.

### Regra geral dos prompts

Todos deverão incluir orientação para:

- Utilizar prioritariamente as fontes selecionadas.
- Não inventar informações.
- Identificar quando as fontes não oferecem suporte suficiente.
- Diferenciar afirmações das fontes de inferências.
- Citar ou indicar a fonte correspondente quando possível.
- Preservar a terminologia técnica.
- Não afirmar que um exercício gerado é questão oficial.

---

## 9. Organização dos notebooks

Proponha uma organização prática de notebooks no NotebookLM.

A organização deverá evitar excesso de fontes e facilitar a navegação.

Considere:

### Notebook geral

Finalidade: visão integrada do concurso.

Fontes:

- Edital.
- Estrutura da prova.
- Matriz de conteúdo.
- Estratégia Cesgranrio.
- Prioridades.
- Metodologia de estudo.

### Notebooks por módulo

Um notebook para cada um dos nove módulos, contendo:

- Teoria.
- Resumos.
- Mapas mentais.
- Questões.
- Gabaritos comentados.
- Roteiros de revisão.

### Notebook de questões

Finalidade: treinamento e análise de questões.

Organize fontes conforme a origem e o assunto.

### Notebook de revisão

Finalidade: revisão integrada dos assuntos prioritários e dos erros recorrentes.

### Notebook de reta final

Finalidade: consulta rápida e revisão dos conteúdos mais importantes.

A organização é uma recomendação. Verifique as limitações atuais do NotebookLM quanto à quantidade de fontes e recursos disponíveis antes de definir limites numéricos.

Não invente limites de uso ou funcionalidades.

---

## 10. Controle de qualidade e rastreabilidade

Cada fonte deverá conter:

- Nome.
- Módulo.
- Assunto.
- Item do edital.
- Documento de origem.
- Versão.
- Data de atualização.
- Status de validação.

Utilize os seguintes status:

- Rascunho.
- Em revisão.
- Validado.
- Desatualizado.
- Reprovado.

### Checklist

- [ ] Fonte vinculada ao edital.
- [ ] Conteúdo fiel ao material original.
- [ ] Terminologia preservada.
- [ ] Referências registradas.
- [ ] Ausência de afirmações inventadas.
- [ ] Ausência de duplicações desnecessárias.
- [ ] Estrutura adequada para consulta.
- [ ] Material independente e compreensível.
- [ ] Status de validação identificado.
- [ ] Compatibilidade com NotebookLM.

Materiais pendentes não deverão ser apresentados como definitivos.

---

## 11. Atualização e versionamento

Quando um material teórico for atualizado:

1. Identifique quais fontes do NotebookLM dependem dele.
2. Atualize os materiais derivados.
3. Registre a versão.
4. Preserve a rastreabilidade.
5. Evite manter versões conflitantes sem identificação.

Quando houver alteração no edital:

1. Identifique os itens afetados.
2. Verifique as fontes relacionadas.
3. Atualize os materiais.
4. Marque versões antigas como desatualizadas.
5. Registre o impacto.

Não mantenha silenciosamente informações antigas como se fossem atuais.

---

## 12. Relatório de execução

Ao concluir cada módulo, informe:

1. Fontes teóricas preparadas.
2. Resumos produzidos.
3. Mapas mentais produzidos.
4. Roteiros de podcast produzidos.
5. Materiais de questões preparados.
6. Prompts criados.
7. Status de validação.
8. Itens do edital contemplados.
9. Lacunas identificadas.
10. Arquivos criados ou atualizados.

Ao finalizar o projeto, apresente:

- Inventário geral das fontes.
- Estrutura recomendada dos notebooks.
- Materiais prioritários para importação.
- Materiais que ainda dependem de validação.
- Orientações de atualização.

---

## 13. Limites desta etapa

Nesta execução, NÃO:

- Altere o conteúdo do edital.
- Modifique materiais teóricos sem justificativa.
- Invente referências.
- Crie questões oficiais fictícias.
- Reescreva gabaritos.
- Desenvolva funcionalidades do site.
- Automatize operações no NotebookLM sem integração oficialmente disponível.
- Afirme que fontes foram importadas para o NotebookLM sem efetivamente realizar essa operação.
- Avance automaticamente para o próximo prompt.

O trabalho desta etapa é preparar os arquivos e a organização para que o estudante possa importar as fontes e utilizá-las no NotebookLM.

---

## 14. Execução por etapas

### Fase 1 — Estrutura geral

- Auditar os materiais disponíveis.
- Identificar fontes aprovadas.
- Criar a estrutura de diretórios.
- Definir padrão de identificação e versionamento.

### Fase 2 — Fontes por módulo

Preparar os materiais de um módulo por vez.

Começar pelo primeiro módulo da matriz validada.

Após cada módulo, apresentar os arquivos e aguardar aprovação.

### Fase 3 — Materiais complementares

Produzir:

- Resumos.
- Mapas mentais.
- Roteiros de podcast.
- Materiais de questões.
- Prompts de utilização.

### Fase 4 — Consolidação

- Verificar duplicidades.
- Conferir rastreabilidade.
- Conferir versões.
- Atualizar inventário.
- Produzir relatório final.

Não avance de uma fase para outra sem concluir e apresentar a anterior.

**Ao finalizar cada módulo, apresente o relatório e aguarde minha aprovação antes de continuar.**