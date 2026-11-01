---
name: notebooklm-export
description: Organiza, prepara, revisa e exporta os materiais do projeto Transpetro 2026.4 — Ênfase 5 para utilização no NotebookLM, preservando a estrutura do edital, a precisão técnica e a rastreabilidade das fontes.
---

# Skill: Exportação para NotebookLM

## 1. Objetivo

Preparar os materiais de estudo do projeto para utilização no NotebookLM, permitindo criar uma base de conhecimento organizada, confiável e adequada à revisão do conteúdo da Ênfase 5 — Análise de Sistemas: Processos de Negócios.

Esta Skill deve garantir que os documentos exportados:

- Tenham conteúdo tecnicamente correto e fundamentado.
- Respeitem a organização oficial do edital.
- Sejam compreensíveis quando utilizados individualmente como fontes.
- Evitem fragmentação excessiva e duplicidade de informações.
- Identifiquem claramente conceitos, exemplos, questões e referências.
- Sejam adequados à geração de resumos, mapas mentais, perguntas, explicações e materiais de revisão.
- Não apresentem inferências como fatos comprovados.

O NotebookLM deve funcionar como ferramenta complementar de aprendizagem, e não como fonte de validação daquilo que foi produzido.

## 2. Quando utilizar esta Skill

Utilize esta Skill quando houver necessidade de:

- Exportar conteúdo teórico para o NotebookLM.
- Criar fontes organizadas por módulo ou assunto.
- Consolidar arquivos Markdown.
- Preparar materiais para geração de podcasts e resumos em áudio.
- Produzir documentos de revisão.
- Criar mapas mentais e roteiros de estudo.
- Preparar fontes para perguntas e respostas baseadas no edital.
- Atualizar documentos já exportados.
- Auditar a qualidade e a consistência dos materiais destinados ao NotebookLM.

## 3. Pré-requisitos

Antes de iniciar:

1. Consultar `CLAUDE.md`.
2. Consultar `docs/edital/matriz-conteudo.md`.
3. Consultar `docs/edital/controle-cobertura.md`.
4. Consultar os materiais existentes em `conteudo/`.
5. Consultar `conteudo-didatico/SKILL.md`.
6. Verificar os arquivos existentes em `notebooklm/`.

Não exportar conteúdo que ainda esteja incompleto ou com problemas técnicos relevantes sem identificar explicitamente suas limitações.

## 4. Princípios de organização

### 4.1. Fidelidade ao conteúdo

O material exportado deve preservar o conteúdo aprovado nos arquivos originais.

Não é permitido:

- Alterar conceitos técnicos sem justificativa.
- Simplificar a ponto de comprometer a precisão.
- Omitir exceções importantes.
- Criar informações para preencher lacunas.
- Acrescentar referências bibliográficas não verificadas.
- Apresentar hipóteses como fatos.
- Modificar gabaritos ou explicações sem validação.

Quando for necessário complementar ou corrigir um conteúdo, atualizar primeiro o arquivo original em `conteudo/` e somente depois gerar sua versão para o NotebookLM.

### 4.2. Hierarquia de fontes

Respeitar a seguinte ordem de autoridade:

1. Edital oficial e eventuais retificações.
2. Documentação oficial dos órgãos e instituições responsáveis pelas normas e tecnologias.
3. Bibliografia técnica confiável.
4. Materiais didáticos produzidos e validados no projeto.
5. Análises e interpretações pedagógicas.

O NotebookLM não deve ser tratado como fonte primária de informação.

### 4.3. Independência documental

Cada documento exportado deve possuir contexto suficiente para ser compreendido isoladamente.

Sempre que necessário, incluir:

- Identificação do concurso.
- Ênfase e banca organizadora.
- Módulo e assunto.
- Objetivo do documento.
- Relação com o edital.
- Referências utilizadas.

Evitar documentos compostos apenas por tópicos sem explicação ou contexto.

## 5. Organização dos materiais

A estrutura principal de exportação deve acompanhar os nove módulos do projeto.

| Código | Módulo |
|---|---|
| 01 | Arquitetura de Dados |
| 02 | Gerenciamento de Projetos e Produtos |
| 03 | Processos, grupos de processos e áreas de conhecimento |
| 04 | Gestão e Governança em TI |
| 05 | Engenharia de Software |
| 06 | Experiência do Usuário (UX) |
| 07 | Análise de Dados e Informações |
| 08 | Lógica Matemática |
| 09 | Segurança da Informação |

A divisão é pedagógica. A matriz oficial do edital continua sendo a referência para determinar o escopo.

### 5.1. Estrutura de diretórios

Utilizar a seguinte organização:

```text
notebooklm/
│
├── README.md
│
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
│
├── resumos/
├── mapas-mentais/
├── roteiros-podcast/
├── revisoes/
├── simulados/
└── prompts/
```

### 5.2. Padrão de nomenclatura

Utilizar nomes descritivos e padronizados.

Exemplos:

```text
M01_Arquitetura_Dados_Completo.md
M01_Modelagem_Dados.md
M01_Normalizacao_Banco_Dados.md
M01_SQL_SGBD.md

M05_Engenharia_Software_Completo.md
M05_Engenharia_Requisitos.md
M05_Testes_Software.md

M09_Seguranca_Informacao_Completo.md
M09_Criptografia.md
M09_Gestao_Riscos.md
```

Evitar nomes genéricos como `resumo-final.md`, `material2.md` ou `novo-documento.md`.

## 6. Tipos de documentos

### 6.1. Material completo por módulo

É o principal documento de referência para cada módulo.

Deve reunir os conteúdos correspondentes, mantendo a sequência pedagógica e identificando os itens do edital relacionados.

Estrutura:

```markdown
# Módulo 01 — Arquitetura de Dados

## Identificação
- Concurso: Transpetro 2026.4
- Ênfase: 5 — Análise de Sistemas: Processos de Negócios
- Banca: Fundação Cesgranrio
- Módulo: 01 — Arquitetura de Dados

## Relação com o edital
[Itens oficiais correspondentes]

## Objetivos de aprendizagem
[Competências e conhecimentos esperados]

## 1. Fundamentos
[Conteúdo teórico]

## 2. Modelagem de dados
[Conteúdo teórico]

## 3. Bancos de dados relacionais
[Conteúdo teórico]

## Síntese do módulo
[Principais conceitos e relações]

## Pontos que exigem atenção
[Distinções conceituais, exceções e possíveis confusões]

## Referências
[Fontes efetivamente consultadas]
```

A estrutura deve ser adaptada ao conteúdo real de cada módulo. Não criar seções artificiais apenas para preencher o modelo.

### 6.2. Materiais específicos por assunto

Criar documentos separados quando:

- O assunto possuir grande volume teórico.
- Existirem conceitos que mereçam aprofundamento independente.
- Houver benefício pedagógico na separação.
- O documento completo do módulo ficar excessivamente extenso.

Os documentos específicos devem indicar a qual módulo pertencem e como se relacionam com os demais assuntos.

### 6.3. Resumos

Os resumos devem priorizar:

- Conceitos fundamentais.
- Definições.
- Classificações.
- Diferenças entre conceitos semelhantes.
- Relações entre assuntos.
- Fórmulas e regras.
- Exceções relevantes.
- Aplicações práticas.

Não transformar o resumo em uma lista de palavras-chave sem explicação.

### 6.4. Mapas mentais

Os mapas mentais devem apresentar:

- Conceito central.
- Categorias principais.
- Subcategorias.
- Relações hierárquicas.
- Dependências e conexões.
- Diferenças entre conceitos próximos.

Priorizar hierarquia lógica e legibilidade.

Quando apropriado, utilizar Mermaid para representar estruturas e relações.

### 6.5. Roteiros de podcast

Os roteiros devem ser preparados para explicação oral, com linguagem natural e precisão técnica.

Estrutura sugerida:

1. Apresentação do tema.
2. Contextualização no edital.
3. Explicação dos conceitos.
4. Comparação entre conceitos semelhantes.
5. Exemplos de aplicação.
6. Armadilhas conceituais.
7. Recapitulação.
8. Perguntas de fixação.

Não utilizar linguagem excessivamente informal ou analogias que distorçam os conceitos.

Sempre que houver uma simplificação didática, deixar claro o limite da analogia.

### 6.6. Materiais de revisão

Os documentos de revisão devem priorizar recuperação ativa da memória.

Podem conter:

- Perguntas conceituais.
- Respostas objetivas.
- Comparações.
- Flashcards.
- Listas de conceitos.
- Questões de verdadeiro ou falso.
- Situações-problema.

As respostas devem estar fundamentadas no material de referência.

## 7. Preparação de questões para o NotebookLM

As questões devem respeitar integralmente `questoes-cesgranrio/SKILL.md`.

Manter a classificação de origem:

- Questão oficial.
- Questão adaptada.
- Questão autoral.

Não permitir que questões autorais sejam apresentadas como questões efetivamente aplicadas pela Cesgranrio.

Cada questão deve conter, quando aplicável:

- Identificador único.
- Módulo.
- Assunto.
- Enunciado.
- Alternativas.
- Gabarito.
- Justificativa.
- Análise das alternativas.
- Origem e referência.
- Nível de dificuldade.

Ao exportar questões para o NotebookLM, separar preferencialmente:

1. Documento de questões sem gabarito.
2. Documento de gabaritos comentados.

Essa separação permite utilizar o NotebookLM para exercícios de recuperação ativa sem expor imediatamente as respostas.

Não modificar a redação de questões oficiais sem identificá-las como adaptadas.

## 8. Prompts para utilização no NotebookLM

Manter uma biblioteca de prompts em `notebooklm/prompts/`.

Os prompts devem orientar o NotebookLM a utilizar prioritariamente as fontes adicionadas ao notebook.

### 8.1. Explicação de conteúdo

```text
Explique o assunto utilizando exclusivamente as fontes disponíveis
neste notebook.

Organize a explicação em:
1. Definição.
2. Fundamentos.
3. Características.
4. Classificações.
5. Aplicações.
6. Diferenças entre conceitos semelhantes.
7. Exemplos.
8. Síntese final.

Não invente informações nem complete lacunas com suposições.
Quando as fontes não forem suficientes, informe explicitamente.
```

### 8.2. Revisão para concurso

```text
Elabore uma revisão do assunto com foco no concurso Transpetro
2026.4 — Ênfase 5, banca Fundação Cesgranrio.

Priorize:
- Conceitos fundamentais.
- Classificações.
- Diferenças conceituais.
- Aplicações práticas.
- Exceções.
- Relações entre os assuntos.

Não afirme que determinado tema possui alta incidência na prova
sem evidência documental.

Utilize somente as fontes disponíveis e identifique eventuais
lacunas de informação.
```

### 8.3. Simulado conceitual

```text
Elabore questões de múltipla escolha com cinco alternativas,
de A até E, utilizando o conteúdo das fontes disponíveis.

As questões devem avaliar compreensão e aplicação dos conceitos.

Apresente primeiro todas as questões, sem gabarito.

Depois, em uma seção separada, apresente:
- Gabarito.
- Justificativa da alternativa correta.
- Explicação dos erros das demais alternativas.

Identifique que as questões foram geradas pelo NotebookLM.
Não as apresente como questões oficiais da Fundação Cesgranrio.
```

### 8.4. Comparação de conceitos

```text
Identifique conceitos que podem ser confundidos dentro do assunto.

Para cada comparação, apresente:
- Definição de cada conceito.
- Semelhanças.
- Diferenças.
- Aplicações.
- Exemplo prático.
- Erro conceitual que deve ser evitado.

Utilize somente as fontes disponíveis.
```

### 8.5. Podcast de revisão

```text
Prepare uma revisão oral do conteúdo para um candidato ao concurso
Transpetro 2026.4 — Ênfase 5.

Explique os conceitos de maneira progressiva, começando pelos
fundamentos e avançando para os pontos mais complexos.

Destaque diferenças conceituais, exemplos e possíveis confusões.

Não invente estatísticas de incidência na prova nem apresente
questões autorais como questões oficiais.
```

## 9. Formatos de exportação

### 9.1. Markdown

Formato principal de produção e consolidação.

Vantagens:

- Fácil atualização.
- Estrutura hierárquica.
- Compatibilidade com Git.
- Boa legibilidade.
- Facilidade de conversão para PDF.

Os arquivos originais em Markdown devem permanecer como referência de manutenção.

### 9.2. PDF

Gerar PDF quando houver necessidade de:

- Distribuição de materiais.
- Arquivamento de versões.
- Consulta offline.
- Importação de documentos consolidados.

Requisitos:

- Texto selecionável.
- Hierarquia de títulos.
- Sumário quando aplicável.
- Tabelas legíveis.
- Fórmulas preservadas.
- Quebras de página adequadas.
- Referências identificáveis.

Evitar PDFs compostos exclusivamente por imagens.

### 9.3. Outros formatos

A utilização de outros formatos dependerá da necessidade e da compatibilidade efetivamente disponível no NotebookLM.

Não presumir que determinado formato é suportado sem verificar sua disponibilidade.

## 10. Consolidação e atualização

A exportação deve ser reproduzível.

Sempre que o conteúdo original for atualizado:

1. Identificar os documentos afetados.
2. Verificar se a alteração modifica outros materiais consolidados.
3. Atualizar os arquivos exportáveis.
4. Validar referências e estrutura.
5. Atualizar o controle de exportação.
6. Identificar a versão e a data da atualização.

Não manter cópias divergentes sem identificação de versão.

### 10.1. Controle de exportação

Manter `notebooklm/README.md` com uma tabela de acompanhamento:

| Módulo | Fonte completa | PDF | Revisado | Última atualização |
|---|---|---|---|---|
| M01 | Pendente | Pendente | Pendente | — |
| M02 | Pendente | Pendente | Pendente | — |
| M03 | Pendente | Pendente | Pendente | — |
| M04 | Pendente | Pendente | Pendente | — |
| M05 | Pendente | Pendente | Pendente | — |
| M06 | Pendente | Pendente | Pendente | — |
| M07 | Pendente | Pendente | Pendente | — |
| M08 | Pendente | Pendente | Pendente | — |
| M09 | Pendente | Pendente | Pendente | — |

Os status devem refletir o estado real dos arquivos, não o planejamento.

## 11. Controle de qualidade

Antes de considerar um documento pronto para o NotebookLM, verificar:

### Conteúdo
- [ ] Conteúdo alinhado ao edital.
- [ ] Conceitos tecnicamente corretos.
- [ ] Explicações suficientes para compreensão independente.
- [ ] Ausência de contradições não resolvidas.
- [ ] Exemplos coerentes com a teoria.
- [ ] Referências identificáveis.

### Organização
- [ ] Título e identificação corretos.
- [ ] Módulo e assunto identificados.
- [ ] Hierarquia de títulos consistente.
- [ ] Sumário quando necessário.
- [ ] Ausência de fragmentação excessiva.
- [ ] Ausência de duplicidade desnecessária.

### Integridade
- [ ] Questões classificadas corretamente.
- [ ] Gabaritos revisados.
- [ ] Fontes oficiais identificadas.
- [ ] Inferências separadas de fatos.
- [ ] Lacunas explicitadas.
- [ ] Nenhuma estatística ou referência inventada.

### Exportação
- [ ] Arquivo Markdown atualizado.
- [ ] PDF validado, quando aplicável.
- [ ] Texto selecionável no PDF.
- [ ] Tabelas e fórmulas legíveis.
- [ ] Nome de arquivo padronizado.
- [ ] Controle de exportação atualizado.

## 12. Integração com o site de estudos

Os materiais do NotebookLM e o site devem compartilhar o mesmo conteúdo de referência.

Entretanto:

- O Markdown é a fonte editorial dos materiais didáticos.
- Os arquivos JSON alimentam o site.
- Os documentos do NotebookLM são exportações organizadas.
- Os PDFs são versões de distribuição.

Não manter versões independentes do mesmo conteúdo sem mecanismo de atualização.

Sempre que um assunto for corrigido, identificar quais documentos, questões, resumos e materiais do site precisam ser atualizados.

## 13. Indicadores de progresso

Acompanhar:

- Módulos com conteúdo consolidado.
- Assuntos exportados.
- Documentos revisados.
- PDFs gerados.
- Materiais de revisão disponíveis.
- Roteiros de podcast disponíveis.
- Pendências de conteúdo.
- Pendências de validação.

Não considerar um módulo concluído apenas porque seu PDF foi gerado.

A conclusão exige conteúdo validado e rastreável ao edital.

## 14. Comportamento obrigatório do Claude

Ao executar esta Skill:

1. Verificar o conteúdo original antes de exportar.
2. Respeitar a matriz oficial do edital.
3. Não alterar silenciosamente materiais validados.
4. Não gerar documentos redundantes sem justificativa.
5. Preservar a origem das questões e referências.
6. Priorizar clareza e consistência documental.
7. Atualizar o controle de exportação.
8. Informar documentos criados, modificados e pendentes.
9. Sinalizar limitações do NotebookLM ou do formato utilizado.
10. Nunca declarar uma exportação concluída sem verificar os arquivos produzidos.

## 15. Princípio central

O NotebookLM deve ampliar a capacidade de compreensão, revisão e recuperação do conhecimento.

A qualidade do resultado depende da qualidade das fontes.

Portanto, a prioridade é produzir materiais completos, confiáveis, organizados e rastreáveis ao edital — e somente depois utilizá-los para gerar recursos complementares de aprendizagem.