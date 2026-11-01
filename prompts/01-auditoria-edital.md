# 01 — Auditoria do Edital e Mapeamento do Conteúdo Programático

**Arquivo:** `prompts/01-auditoria-edital.md`

**Projeto:** Transpetro 2026.4 — Ênfase 5: Análise de Sistemas: Processos de Negócios

**Banca:** Fundação Cesgranrio

---

## 1. Objetivo

Realizar uma auditoria completa do edital do concurso Transpetro 2026.4, com foco na Ênfase 5 — Análise de Sistemas: Processos de Negócios.

O objetivo desta etapa é estabelecer uma base documental confiável para todo o projeto.

Você deverá:

1. Localizar e identificar o edital oficial.
2. Verificar eventuais retificações e documentos complementares.
3. Extrair integralmente o conteúdo programático do Anexo IV.
4. Preservar a numeração, a redação e a ordem oficial dos assuntos.
5. Comparar o conteúdo oficial com a estrutura de nove módulos planejada.
6. Identificar lacunas, redundâncias e conteúdos fora do escopo.
7. Atualizar a matriz de conteúdo programático.
8. Atualizar o controle de cobertura.
9. Registrar divergências e pendências.
10. Apresentar um diagnóstico completo do projeto.

**Nesta etapa, NÃO produzir apostilas, questões, flashcards, simulados ou funcionalidades do site.**

O trabalho deverá terminar com um relatório de auditoria e aguardar aprovação antes de avançar.

---

## 2. Documentos que devem ser consultados

Antes de iniciar, leia os seguintes arquivos:

### Regras do projeto

- `CLAUDE.md`
- `PROMPT-MESTRE.md`

### Skills

- `.claude/skills/edital-e-cobertura/SKILL.md`
- `.claude/skills/conteudo-didatico/SKILL.md`

### Documentação do edital

- `docs/edital/matriz-conteudo.md`
- `docs/edital/controle-cobertura.md`

### Documentação estratégica

- `docs/estrategia/estrategia-cesgranrio.md`
- `docs/estrategia/prioridades.md`
- `docs/estrategia/metodologia-estudo.md`

### Documentação de qualidade

- `docs/qualidade/checklist-conteudo.md`
- `docs/qualidade/checklist-questoes.md`
- `docs/qualidade/checklist-simulados.md`
- `docs/qualidade/checklist-site.md`

Verifique a existência dos arquivos antes de tentar lê-los.

Se algum arquivo estiver ausente, registre a pendência. Não interrompa toda a auditoria por causa de arquivos auxiliares inexistentes.

---

## 3. Localização e validação do edital oficial

Localize o edital referente ao concurso Transpetro 2026.4.

Priorize:

1. Site oficial da Transpetro;
2. Página oficial da Fundação Cesgranrio;
3. Documentos oficiais publicados pela organização do concurso;
4. Retificações e comunicados oficiais.

Não considere páginas de cursinhos, blogs, fóruns ou materiais de terceiros como fonte primária do edital.

Esses materiais poderão ser identificados posteriormente como fontes complementares, mas não substituirão o documento oficial.

### 3.1. Informações a identificar

Registrar:

- Nome oficial do concurso;
- Número e ano do edital;
- Data de publicação;
- Organizadora;
- Cargo ou ênfase;
- Requisitos de formação;
- Etapas do processo seletivo;
- Estrutura das provas;
- Conteúdo programático;
- Regras de avaliação;
- Critérios de eliminação;
- Eventuais retificações;
- Documentos complementares.

### 3.2. Verificação de autenticidade

Registrar:

- URL oficial;
- Nome do arquivo;
- Formato;
- Data de acesso;
- Identificação da versão;
- Existência de retificações;
- Documentos relacionados.

Se houver divergência entre documentos, identificar qual documento prevalece conforme sua natureza, data e publicação oficial.

Não presumir que a primeira versão localizada continua válida.

### 3.3. Ausência do edital

Se não localizar o documento oficial:

1. Registrar as tentativas realizadas;
2. Informar quais fontes foram consultadas;
3. Identificar exatamente o documento que falta;
4. Não substituir o edital por material de terceiros;
5. Não inventar o conteúdo programático;
6. Solicitar o documento ao usuário.

Nesse cenário, interrompa a extração e não avance para a produção de conteúdo.

---

## 4. Extração integral do Anexo IV

Localize o Anexo IV correspondente à Ênfase 5 — Análise de Sistemas: Processos de Negócios.

Extraia o conteúdo programático integralmente.

### Regras obrigatórias

- Preservar a redação oficial;
- Preservar a numeração original;
- Preservar a ordem dos assuntos;
- Preservar subdivisões;
- Não resumir;
- Não reinterpretar;
- Não acrescentar assuntos;
- Não remover assuntos;
- Não agrupar itens diferentes sem registrar a relação;
- Não transformar exemplos ou termos complementares em exigências oficiais sem verificar o texto.

Se o documento possuir problemas de leitura, tabelas, páginas digitalizadas ou trechos ilegíveis, registrar a ocorrência e verificar visualmente o documento.

### 4.1. Organização da extração

A extração deverá conter:

| Campo | Descrição |
|---|---|
| ID oficial | Numeração original do edital |
| Texto oficial | Redação literal |
| Nível | Item principal ou subitem |
| Item superior | Identificação do item ao qual pertence |
| Página | Página do documento |
| Observação | Problemas de leitura ou interpretação |

Não inventar numeração quando o edital não apresentar numeração explícita.

Caso seja necessário criar um identificador interno, diferenciá-lo claramente da numeração oficial.

### 4.2. Arquivo de referência

Criar:

`docs/edital/anexo-IV-extraido.md`

O documento deverá apresentar:

1. Identificação do edital;
2. Identificação da Ênfase 5;
3. Referência à fonte oficial;
4. Data de extração;
5. Conteúdo integral;
6. Numeração original;
7. Observações sobre eventuais problemas de leitura.

Esse arquivo será a referência textual principal para o desenvolvimento dos materiais.

---

## 5. Auditoria dos nove módulos planejados

O projeto possui uma organização pedagógica preliminar em nove módulos:

1. Arquitetura de Dados;
2. Gerenciamento de Projetos e Produtos;
3. Processos, Grupos de Processos e Áreas de Conhecimento;
4. Gestão e Governança em TI;
5. Engenharia de Software;
6. Experiência do Usuário (UX);
7. Análise de Dados e Informações;
8. Lógica Matemática;
9. Segurança da Informação.

Essa organização é uma proposta de estruturação dos estudos.

**Ela não deve ser considerada equivalente ao conteúdo oficial do edital sem validação.**

### 5.1. Comparação obrigatória

Para cada item oficial, identificar:

- Qual módulo pedagógico corresponde ao assunto;
- Qual arquivo de conteúdo deverá abordar o assunto;
- Se o item está integralmente contemplado;
- Se existe assunto sem correspondência;
- Se existe assunto incluído no planejamento sem respaldo no edital;
- Se existe sobreposição entre módulos.

### 5.2. Classificação de escopo

Utilizar três classificações:

| Código | Classificação | Significado |
|---|---|---|
| A | Escopo expresso | Assunto explicitamente previsto no edital |
| B | Complementação necessária | Conhecimento de apoio necessário para compreender um assunto oficial |
| C | Fora do escopo | Assunto sem correspondência demonstrável com o edital |

A classificação B deverá ser justificada.

A classificação C não significa necessariamente que o assunto seja tecnicamente irrelevante. Significa que não deverá integrar a produção obrigatória sem justificativa adicional.

Não ampliar artificialmente o conteúdo programático.

### 5.3. Assuntos não previstos

Verificar especialmente se a estrutura planejada contém:

- Tecnologias específicas não mencionadas;
- Linguagens de programação não previstas;
- Frameworks não previstos;
- Metodologias não mencionadas;
- Ferramentas específicas;
- Modelos técnicos excessivamente aprofundados;
- Assuntos provenientes de outros concursos ou ênfases.

Não incluir Java/J2EE por influência de projetos ou editais anteriores, salvo se houver correspondência expressa no edital vigente.

---

## 6. Atualização da matriz de conteúdo

Atualize:

`docs/edital/matriz-conteudo.md`

A matriz deverá conter, no mínimo:

| Campo | Descrição |
|---|---|
| ID | Identificador interno |
| ID oficial | Numeração do edital |
| Texto oficial | Redação literal |
| Módulo | Módulo pedagógico |
| Escopo | A, B ou C |
| Tópicos | Desdobramentos didáticos |
| Arquivo de conteúdo | Destino planejado |
| Status | Situação da produção |
| Observações | Divergências e pendências |

### 6.1. Regras de preenchimento

- Cada item oficial deverá possuir uma linha ou registro identificável.
- Subitens deverão ser preservados.
- Não consolidar assuntos distintos apenas para reduzir a quantidade de registros.
- Os tópicos didáticos deverão ser claramente diferenciados do texto oficial.
- Todo assunto classificado como B deverá apresentar justificativa.
- Todo assunto classificado como C deverá apresentar a razão da exclusão.
- Nenhum item oficial poderá desaparecer da matriz.

### 6.2. Status inicial

Como a produção de materiais ainda não começou, utilizar os seguintes estados conforme aplicável:

- `NAO_INICIADO`
- `EM_MAPEAMENTO`
- `PENDENTE`
- `FORA_DO_ESCOPO`

Não utilizar `VALIDADO` para conteúdos ainda não produzidos e revisados.

---

## 7. Atualização do controle de cobertura

Atualize:

`docs/edital/controle-cobertura.md`

A cobertura deverá refletir a situação real do projeto.

Para cada item oficial, verificar separadamente:

| Dimensão | Situação inicial |
|---|---|
| Conteúdo teórico | Não iniciado |
| Questões | Não iniciado |
| Flashcards | Não iniciado |
| Revisão | Não iniciado |
| Material NotebookLM | Não iniciado |
| Integração ao site | Não iniciado |

Não marcar uma dimensão como concluída apenas porque seu arquivo ou diretório existe.

A cobertura deverá considerar material efetivamente produzido e validado.

---

## 8. Auditoria da estrutura da prova

Verificar o edital e atualizar:

`docs/edital/estrutura-prova.md`

A estrutura planejada para o concurso considera:

| Disciplina | Questões |
|---|---:|
| Conhecimentos específicos | 50 |
| Língua Portuguesa | 10 |
| Língua Inglesa | 10 |
| **Total** | **70** |

Alternativas: A, B, C, D e E.

Essas informações deverão ser conferidas no documento oficial antes de serem consideradas definitivas.

Verificar também:

- Pontuação por questão;
- Peso das disciplinas;
- Nota mínima;
- Critérios de eliminação;
- Duração da prova;
- Critérios de desempate;
- Tratamento de questões anuladas;
- Eventuais diferenças entre cargos ou ênfases.

**Não inventar a distribuição das 50 questões específicas entre os nove módulos.**

Quando uma informação não estiver disponível ou não puder ser confirmada, utilizar:

`A CONFIRMAR NO EDITAL`

Não preencher lacunas com padrões de concursos anteriores.

---

## 9. Auditoria de coerência documental

Verificar se os documentos existentes estão coerentes entre si.

Conferir especialmente:

### Regras permanentes

- `CLAUDE.md`
- `PROMPT-MESTRE.md`

### Estrutura

- `ESTRUTURA.txt`
- `README.md`

### Edital

- `matriz-conteudo.md`
- `controle-cobertura.md`
- `estrutura-prova.md`

### Estratégia

- `estrategia-cesgranrio.md`
- `prioridades.md`
- `metodologia-estudo.md`

### Qualidade

- `checklist-conteudo.md`
- `checklist-questoes.md`
- `checklist-simulados.md`
- `checklist-site.md`

Identificar:

- Regras conflitantes;
- Informações desatualizadas;
- Nomenclaturas divergentes;
- Referências a arquivos inexistentes;
- Assuntos sem correspondência com o edital;
- Requisitos técnicos contraditórios;
- Duplicidade de instruções;
- Dependências não documentadas.

Não modificar regras permanentes ou documentos estratégicos sem necessidade.

Quando identificar uma divergência, registrar:

1. Arquivo;
2. Trecho ou regra conflitante;
3. Problema identificado;
4. Impacto;
5. Correção recomendada.

---

## 10. Análise das lacunas e riscos

Classificar os problemas identificados:

| Prioridade | Significado |
|---|---|
| P0 | Impede o início confiável da produção |
| P1 | Impacta significativamente a cobertura ou qualidade |
| P2 | Necessita ajuste, mas não impede a continuidade |
| P3 | Melhoria recomendada |

Exemplos:

- Edital oficial não localizado: P0;
- Retificação não conferida: P0;
- Item oficial ausente da matriz: P0;
- Assunto sem correspondência no edital: P1;
- Arquivo de conteúdo com nome divergente: P2;
- Melhoria de organização visual: P3.

Registrar todas as pendências em um relatório.

---

## 11. Arquivos que deverão ser produzidos

Ao concluir a auditoria, produzir ou atualizar somente os seguintes arquivos:

| Arquivo | Ação |
|---|---|
| `docs/edital/anexo-IV-extraido.md` | Criar |
| `docs/edital/matriz-conteudo.md` | Atualizar |
| `docs/edital/controle-cobertura.md` | Atualizar |
| `docs/edital/estrutura-prova.md` | Conferir e atualizar |
| `docs/qualidade/diagnostico-inicial.md` | Criar |
| `docs/qualidade/registro-divergencias.md` | Criar, se houver divergências |

Não criar apostilas, questões ou materiais didáticos nesta etapa.

Não alterar funcionalidades do site.

Não reorganizar a estrutura de diretórios sem autorização.

---

## 12. Estrutura do diagnóstico inicial

O arquivo:

`docs/qualidade/diagnostico-inicial.md`

deverá conter:

### 12.1. Identificação documental

- Edital localizado;
- Fonte oficial;
- Versão;
- Retificações;
- Documentos complementares;
- Data da auditoria.

### 12.2. Resultado da extração

- Quantidade de itens principais;
- Quantidade de subitens;
- Quantidade de registros na matriz;
- Itens com problemas de leitura;
- Itens pendentes de interpretação.

Não utilizar contagens estimadas como se fossem definitivas.

### 12.3. Resultado do mapeamento

- Correspondência dos itens com os nove módulos;
- Assuntos expressos;
- Complementações necessárias;
- Assuntos fora do escopo;
- Assuntos sem correspondência;
- Sobreposições entre módulos.

### 12.4. Resultado da auditoria da prova

- Estrutura confirmada;
- Pontuação;
- Pesos;
- Critérios de aprovação;
- Duração;
- Regras de desempate;
- Informações ainda não confirmadas.

### 12.5. Situação da documentação

Apresentar uma tabela:

| Documento | Situação | Problema | Ação necessária |
|---|---|---|---|

### 12.6. Pendências prioritárias

Apresentar uma lista ordenada por P0, P1, P2 e P3.

### 12.7. Recomendação de continuidade

Indicar quais condições precisam ser resolvidas antes de iniciar a produção de conteúdo.

---

## 13. Controle de integridade

Antes de encerrar, executar uma conferência final:

- Todos os itens do Anexo IV estão na matriz?
- A redação oficial foi preservada?
- A numeração está correta?
- Os subitens foram mantidos?
- Todos os itens possuem classificação de escopo?
- Os nove módulos foram confrontados com o edital?
- Existem assuntos sem respaldo documental?
- A estrutura da prova foi conferida?
- Os critérios não confirmados estão identificados?
- O controle de cobertura reflete a situação real?
- As divergências estão registradas?
- As fontes oficiais estão identificadas?
- Nenhuma questão ou conteúdo didático foi produzido antecipadamente?

Se qualquer resposta for negativa, registrar a pendência.

---

## 14. Formato da resposta final

Ao terminar, apresentar um resumo executivo contendo:

1. Resultado da localização do edital;
2. Resultado da verificação das retificações;
3. Resultado da extração do Anexo IV;
4. Quantidade de itens e subitens identificados;
5. Situação da matriz;
6. Situação dos nove módulos;
7. Divergências encontradas;
8. Pendências P0 e P1;
9. Arquivos criados ou atualizados;
10. Recomendação para a próxima etapa.

Não declarar a auditoria concluída se houver pendências críticas.

---

## 15. Condição de encerramento

**Após produzir o diagnóstico, interrompa a execução.**

Não inicie automaticamente o prompt 02.

Não comece a produzir conteúdo teórico.

Não gere questões.

Não desenvolva o site.

Apresente os resultados e aguarde aprovação expressa do usuário.

A próxima etapa somente deverá começar depois que a matriz de conteúdo programático estiver conferida e aprovada.

---

## 16. Princípio fundamental

O edital é a fonte primária do escopo do projeto.

A matriz é a representação estruturada desse escopo.

Os módulos são uma organização pedagógica.

Os materiais didáticos são desenvolvidos a partir da matriz validada.

**Nenhum conteúdo deverá ser tratado como exigência oficial sem correspondência demonstrável no edital vigente.**