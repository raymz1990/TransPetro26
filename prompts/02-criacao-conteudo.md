# 02 — Criação de Conteúdo Teórico

**Arquivo:** `prompts/02-criacao-conteudo.md`

**Projeto:** Transpetro 2026.4 — Ênfase 5: Análise de Sistemas: Processos de Negócios

**Banca:** Fundação Cesgranrio

---

## 1. Objetivo

Produzir o material teórico completo para preparação da prova de conhecimentos específicos da Ênfase 5 — Análise de Sistemas: Processos de Negócios.

O conteúdo deverá ser:

- Tecnicamente correto;
- Didático e aprofundado;
- Organizado conforme o edital;
- Direcionado à preparação para a Cesgranrio;
- Adequado para estudo autônomo;
- Integrado ao banco de questões;
- Compatível com os materiais do NotebookLM;
- Preparado para futura integração à plataforma de estudos.

O objetivo não é criar resumos superficiais, mas um material de estudo que permita compreender, relacionar, aplicar e diferenciar os conceitos exigidos.

**A matriz de conteúdo validada será a referência obrigatória para determinar o que deve ser produzido.**

---

## 2. Pré-requisitos

Antes de iniciar, leia:

### Regras gerais

- `CLAUDE.md`
- `PROMPT-MESTRE.md`
- `ESTRUTURA.txt`

### Skills

- `.claude/skills/edital-e-cobertura/SKILL.md`
- `.claude/skills/conteudo-didatico/SKILL.md`

### Documentação

- `docs/edital/anexo-IV-extraido.md`
- `docs/edital/matriz-conteudo.md`
- `docs/edital/controle-cobertura.md`
- `docs/estrategia/estrategia-cesgranrio.md`
- `docs/estrategia/prioridades.md`
- `docs/estrategia/metodologia-estudo.md`
- `docs/qualidade/checklist-conteudo.md`

Se a auditoria do edital ainda não estiver concluída ou aprovada, interrompa a execução e informe essa condição.

Não produza conteúdo com base em uma matriz não validada.

---

## 3. Regra de aderência ao edital

A produção deverá respeitar integralmente o escopo oficial.

### Classificação dos assuntos

| Classificação | Tratamento |
|---|---|
| A — Escopo expresso | Produção obrigatória |
| B — Complementação necessária | Produção proporcional à necessidade didática |
| C — Fora do escopo | Não produzir como conteúdo obrigatório |

### Regras

1. Cada conteúdo deverá estar associado a um ou mais IDs oficiais da matriz.
2. A redação oficial do edital não deverá ser modificada.
3. Os títulos didáticos poderão ser diferentes, desde que preservem o significado.
4. Complementações deverão ser justificadas.
5. Não incluir assuntos de outros concursos por associação.
6. Não ampliar artificialmente o conteúdo.
7. Não omitir subitens oficiais.
8. Não tratar conhecimento complementar como exigência explícita da banca.

Quando houver dúvida sobre a abrangência de determinado assunto, registrar a dúvida antes de ampliar o conteúdo.

---

## 4. Organização dos materiais

Utilizar a estrutura definida em `ESTRUTURA.txt`.

Cada módulo deverá possuir arquivos próprios para seus assuntos.

Exemplo:

```text
conteudo/
├── 01-arquitetura-dados/
├── 02-projetos-produtos/
├── 03-processos-gerenciamento/
├── 04-governanca-ti/
├── 05-engenharia-software/
├── 06-experiencia-usuario/
├── 07-analise-dados/
├── 08-logica-matematica/
└── 09-seguranca-informacao/
```

Não criar um único arquivo gigante para todo o conteúdo.

### Organização por assunto

Cada arquivo deverá abordar um assunto ou conjunto pequeno de assuntos relacionados.

A divisão deverá considerar:

- Unidade conceitual;
- Relação entre tópicos;
- Extensão necessária;
- Facilidade de revisão;
- Reutilização no NotebookLM;
- Integração com a plataforma.

Evitar fragmentação excessiva que prejudique a compreensão.

---

## 5. Estrutura obrigatória de cada material

Cada material deverá seguir, sempre que aplicável, a estrutura abaixo.

### 5.1. Identificação

```text
# Título do assunto

Módulo:
Item do edital:
IDs oficiais relacionados:
Classificação de escopo:
Nível de profundidade:
Status:
Última atualização:
```

### 5.2. Introdução

Apresentar:

- Definição do assunto;
- Objetivo;
- Contexto de utilização;
- Importância dentro do conteúdo programático;
- Relação com outros assuntos.

A introdução deverá situar o estudante antes de apresentar os conceitos técnicos.

### 5.3. Fundamentos teóricos

Explicar os conceitos fundamentais.

Não presumir conhecimento prévio de termos técnicos que sejam necessários à compreensão.

Apresentar:

- Definições;
- Características;
- Objetivos;
- Componentes;
- Funcionamento;
- Aplicações;
- Classificações;
- Limitações;
- Relações entre conceitos.

A profundidade deverá ser compatível com a exigência técnica do assunto.

### 5.4. Desenvolvimento aprofundado

Explorar os conceitos relevantes para o edital.

Quando aplicável, abordar:

- Arquiteturas;
- Modelos;
- Métodos;
- Processos;
- Técnicas;
- Ferramentas;
- Normas;
- Padrões;
- Fórmulas;
- Indicadores;
- Exemplos de aplicação.

Não transformar todos os assuntos em listas de definições.

O objetivo é construir entendimento conceitual.

### 5.5. Exemplos práticos

Utilizar exemplos que facilitem a compreensão.

Priorizar situações relacionadas a:

- Sistemas de informação;
- Tecnologia da informação;
- Gestão de processos;
- Dados e informações;
- Projetos e produtos;
- Governança;
- Segurança;
- Contextos empresariais.

Quando pertinente, utilizar situações de empresas de grande porte e operações industriais, incluindo cenários compatíveis com o contexto da Transpetro.

Não inventar políticas, sistemas, processos internos ou características operacionais da Transpetro.

Quando o exemplo for hipotético, identificá-lo como tal.

### 5.6. Comparações conceituais

Identificar conceitos semelhantes que possam gerar confusão.

Exemplos de formatos:

| Conceito A | Conceito B | Diferença principal |
|---|---|---|
| Conceito 1 | Conceito 2 | Distinção objetiva |
| Conceito 3 | Conceito 4 | Aplicação e finalidade |

Explicar não apenas o que diferencia os conceitos, mas também em quais situações cada um é utilizado.

### 5.7. Aplicações e cenários

Apresentar situações práticas nas quais o conceito precisa ser interpretado ou aplicado.

Sempre que pertinente, incluir:

- Problemas que o conceito resolve;
- Decisões envolvidas;
- Consequências de sua aplicação;
- Limitações;
- Riscos;
- Relação com outros conhecimentos do edital.

### 5.8. Atenção para a prova

Criar uma seção específica para preparação.

Apresentar:

- Conceitos que precisam ser dominados;
- Distinções importantes;
- Termos técnicos;
- Relações entre conceitos;
- Possíveis confusões conceituais;
- Aplicações que exigem interpretação;
- Pontos que merecem atenção em questões objetivas.

Não afirmar que determinado assunto é frequentemente cobrado sem evidência documental.

Diferenciar claramente:

- Evidência histórica de provas;
- Inferência técnica;
- Recomendação pedagógica.

### 5.9. Síntese

Finalizar com uma síntese organizada dos principais conceitos.

Utilizar tabelas, listas ou mapas textuais quando forem úteis.

A síntese deverá facilitar a revisão, sem substituir o desenvolvimento teórico.

### 5.10. Referências

Apresentar as fontes utilizadas.

Priorizar:

1. Normas e documentos oficiais;
2. Documentação técnica dos responsáveis pelos padrões;
3. Livros e bibliografia reconhecida;
4. Documentação de fabricantes e organizações técnicas;
5. Artigos técnicos e publicações especializadas.

Não inventar referências bibliográficas, autores, edições, datas ou páginas.

Quando não for possível verificar um dado bibliográfico, não o apresentar como confirmado.

---

## 6. Profundidade didática

O conteúdo deverá trabalhar três níveis de profundidade.

| Nível | Objetivo |
|---|---|
| Fundamental | Compreender definições, conceitos e princípios |
| Intermediário | Relacionar conceitos, comparar modelos e compreender aplicações |
| Avançado | Interpretar cenários, analisar consequências e resolver situações complexas |

### Nível fundamental

O estudante deverá conseguir:

- Definir conceitos;
- Identificar características;
- Reconhecer componentes;
- Compreender finalidades.

### Nível intermediário

O estudante deverá conseguir:

- Comparar conceitos;
- Diferenciar modelos;
- Relacionar elementos;
- Interpretar processos;
- Identificar aplicações.

### Nível avançado

O estudante deverá conseguir:

- Analisar cenários;
- Interpretar situações-problema;
- Avaliar alternativas;
- Identificar consequências;
- Aplicar conceitos em situações novas.

Não significa que todos os assuntos precisem de três capítulos separados.

Os níveis deverão orientar a profundidade da explicação.

---

## 7. Direcionamento para a Cesgranrio

A preparação deverá considerar a natureza objetiva da prova e a necessidade de domínio conceitual.

O material deverá favorecer:

- Interpretação;
- Compreensão de conceitos;
- Comparação entre alternativas;
- Identificação de características;
- Aplicação de conhecimentos;
- Análise de situações;
- Reconhecimento de relações entre conceitos.

### Regras

- Não transformar a teoria em uma coleção de possíveis respostas.
- Não reduzir conceitos complexos a frases decorativas.
- Não criar macetes sem fundamento.
- Não afirmar padrões estatísticos sem análise de provas.
- Não apresentar especulações como características comprovadas da Cesgranrio.

Quando existir análise histórica da banca, utilizar `docs/estrategia/estrategia-cesgranrio.md` como referência.

---

## 8. Recursos didáticos

Utilizar recursos visuais e estruturais conforme a natureza do assunto.

### Tabelas

Utilizar para:

- Comparar conceitos;
- Diferenciar modelos;
- Apresentar classificações;
- Organizar características;
- Demonstrar vantagens e limitações.

### Fluxogramas

Utilizar para:

- Processos;
- Ciclos;
- Sequências;
- Tomadas de decisão;
- Funcionamento de sistemas.

### Diagramas

Utilizar para:

- Arquiteturas;
- Relacionamentos;
- Estruturas;
- Componentes;
- Integrações.

### Fórmulas

Quando aplicável:

- Apresentar a fórmula;
- Definir cada variável;
- Explicar as unidades;
- Demonstrar a aplicação;
- Apontar limitações.

### Código

Quando o assunto exigir:

- Utilizar exemplos funcionais;
- Comentar os trechos relevantes;
- Explicar entradas e saídas;
- Não inserir código sem relação com o edital.

Não utilizar recursos visuais apenas para preencher espaço.

---

## 9. Tratamento das fontes

Toda afirmação técnica relevante deverá possuir fundamento.

### Regras de pesquisa

- Priorizar fontes primárias.
- Verificar a versão de normas e padrões.
- Diferenciar conceitos históricos de conceitos atuais.
- Identificar eventuais alterações de terminologia.
- Não copiar materiais protegidos extensivamente.
- Não inventar referências.
- Não utilizar resumos de terceiros como única base para conceitos técnicos importantes.

### Referências desatualizadas

Quando uma norma, framework ou padrão tiver diferentes versões:

1. Identificar a versão aplicável;
2. Verificar a versão vigente;
3. Registrar diferenças relevantes;
4. Evitar misturar versões;
5. Considerar o contexto temporal do edital.

Quando o edital mencionar expressamente uma versão específica, respeitar essa referência.

Se não houver versão indicada, registrar a versão adotada como referência didática.

---

## 10. Relação com o banco de questões

O material teórico deverá facilitar a criação posterior de questões.

Ao final de cada assunto, registrar:

- Conceitos fundamentais;
- Distinções importantes;
- Classificações;
- Processos;
- Relações entre elementos;
- Aplicações;
- Pontos que exigem interpretação.

Esses registros servirão como referência para o prompt:

`prompts/04-questoes-comentadas.md`

Não criar um banco de questões nesta etapa.

Se houver perguntas de fixação dentro do material, elas deverão ser claramente identificadas como exercícios didáticos, não como questões oficiais.

---

## 11. Integração com NotebookLM

Os materiais deverão ser preparados para utilização como fontes do NotebookLM.

### Requisitos

- Markdown organizado;
- Títulos hierárquicos;
- Texto autossuficiente;
- Definições claras;
- Tabelas legíveis;
- Referências identificáveis;
- Ausência de dependência de links para compreender conceitos essenciais.

Evitar expressões como:

- "Conforme explicado anteriormente";
- "Veja o arquivo anterior";
- "Como já mencionado em outro capítulo".

Cada material deverá ser compreensível isoladamente, ainda que mantenha referências cruzadas.

A preparação específica de fontes, resumos e roteiros será realizada posteriormente pelo prompt:

`prompts/06-material-notebooklm.md`

---

## 12. Integração com a plataforma

Os materiais deverão seguir estrutura compatível com a futura integração ao site.

Requisitos:

- Arquivos Markdown organizados por assunto;
- Metadados consistentes;
- Identificadores dos itens do edital;
- Títulos claros;
- Estrutura hierárquica;
- Referências preservadas;
- Status de produção.

Não criar ou modificar funcionalidades do site durante esta etapa.

Não converter automaticamente o conteúdo para JSON sem necessidade.

A integração será tratada posteriormente pelo prompt:

`prompts/09-atualizacao-site.md`

---

## 13. Controle de qualidade

Antes de considerar um material concluído, consultar:

`docs/qualidade/checklist-conteudo.md`

### Critérios obrigatórios

1. Correspondência com o edital;
2. Correção técnica;
3. Profundidade adequada;
4. Clareza didática;
5. Exemplos pertinentes;
6. Comparações conceituais;
7. Referências verificáveis;
8. Ausência de informações inventadas;
9. Organização adequada;
10. Preparação para revisão;
11. Compatibilidade com NotebookLM;
12. Identificação dos IDs oficiais.

### Status de produção

Utilizar:

- `NAO_INICIADO`
- `EM_PRODUCAO`
- `EM_REVISAO`
- `PENDENTE`
- `VALIDADO`

Não utilizar `VALIDADO` sem revisão efetiva.

---

## 14. Atualização da cobertura

Após produzir cada material:

1. Identificar os IDs oficiais contemplados;
2. Atualizar a matriz;
3. Atualizar o controle de cobertura;
4. Registrar o arquivo produzido;
5. Atualizar o status;
6. Identificar assuntos ainda não contemplados.

Não marcar um item como integralmente coberto quando apenas parte de seu conteúdo tiver sido abordada.

A cobertura deverá refletir a correspondência real entre o material e o edital.

---

## 15. Estratégia de execução

A produção deverá ocorrer em etapas controladas.

### Etapa 1 — Planejamento

- Conferir a matriz aprovada;
- Identificar os assuntos;
- Conferir a estrutura de diretórios;
- Definir a ordem de produção;
- Identificar dependências conceituais.

### Etapa 2 — Produção por módulo

Produzir os materiais de um módulo por vez.

Dentro de cada módulo:

1. Selecionar um assunto;
2. Verificar os IDs oficiais;
3. Pesquisar fontes;
4. Produzir o material;
5. Conferir a cobertura;
6. Revisar tecnicamente;
7. Atualizar o controle.

### Etapa 3 — Revisão

Ao concluir cada módulo:

- Verificar todos os itens oficiais;
- Identificar lacunas;
- Verificar redundâncias;
- Conferir referências;
- Conferir profundidade;
- Atualizar o status.

### Etapa 4 — Consolidação

Ao concluir os nove módulos:

- Verificar cobertura global;
- Identificar conteúdos complementares;
- Corrigir inconsistências;
- Verificar sobreposições;
- Preparar relatório de conclusão.

### Regra de execução

Não produzir os nove módulos simultaneamente sem controle de qualidade.

Priorizar lotes pequenos, revisáveis e rastreáveis.

Se o usuário solicitar a produção de um módulo específico, executar apenas esse módulo.

Se solicitar todos os módulos, dividir a produção em lotes e registrar claramente o progresso, sem declarar concluídos materiais que ainda não foram produzidos.

---

## 16. Relatório de produção

Ao finalizar cada módulo, criar ou atualizar um relatório com:

| Campo | Informação |
|---|---|
| Módulo | Identificação |
| Itens oficiais | IDs contemplados |
| Arquivos produzidos | Lista de arquivos |
| Itens cobertos | Quantidade |
| Itens pendentes | Quantidade |
| Fontes consultadas | Referências |
| Revisão técnica | Situação |
| Revisão didática | Situação |
| Status | Situação final |

Registrar pendências e limitações.

Não utilizar quantidade de páginas ou palavras como único indicador de qualidade.

---

## 17. Condições de bloqueio

Interromper a produção do assunto quando:

- O item não estiver na matriz aprovada;
- A redação do edital estiver divergente;
- A fonte técnica não puder ser verificada;
- Houver conflito relevante entre referências;
- A abrangência do assunto estiver indefinida;
- Existir risco de inclusão de conteúdo fora do escopo.

Nesses casos:

1. Registrar a dúvida;
2. Identificar o impacto;
3. Apresentar a evidência disponível;
4. Recomendar uma solução;
5. Aguardar orientação quando a decisão alterar o escopo.

---

## 18. Formato da resposta final

Ao concluir a execução, apresentar:

1. Módulos trabalhados;
2. Assuntos produzidos;
3. Arquivos criados;
4. IDs oficiais contemplados;
5. Fontes consultadas;
6. Pendências;
7. Resultados da revisão;
8. Atualizações na matriz;
9. Atualizações no controle de cobertura;
10. Próxima etapa recomendada.

---

## 19. Princípio fundamental

O material deverá ensinar o conteúdo, não apenas apresentar definições para memorização.

Cada assunto deve permitir que o estudante compreenda o conceito, reconheça suas características, diferencie conceitos próximos e aplique o conhecimento em situações-problema.

**A cobertura integral do edital, a precisão técnica e a qualidade didática têm prioridade sobre a velocidade de produção.**