# Estratégia de Preparação — Fundação Cesgranrio
## Transpetro 2026.4 — Ênfase 5: Análise de Sistemas: Processos de Negócios

**Arquivo:** `docs/estrategia/estrategia-cesgranrio.md`  
**Banca:** Fundação Cesgranrio  
**Referência de conteúdo:** Anexo IV do edital  
**Área:** Tecnologia da Informação — Análise de Sistemas: Processos de Negócios

---

## Status da análise (2026-10-31) — etapa concluída com ressalvas

**Amostra: 2 provas — Transpetro 2018 Prova 15 (PRV-006) e Transpetro 2023 Prova 6 (PRV-005), 100 questões.** Fontes: espelhos de terceiros, sem validação contra a Cesgranrio (`base-provas.md`). Catálogo: `catalogo-questoes-historicas.md`. Análise e recomendações completas: **`comparativo-2018-2023.md`**.

Resumo (descrição das duas provas, **não** tendência estatística da banca):
- Aderência ao Anexo IV de 2026: 2018 = 24 de 50 aderentes, 8 parciais, 17 fora e 1 indeterminada; 2023 = 45 de 48 válidas aderentes e nenhuma fora. Os programas oficiais de 2018 e 2023 foram lidos: o de 2023 é praticamente igual ao de 2026 (difere em 2.4 e 4.6); o de 2018 era outro.
- Predomínio de questões conceituais diretas nas duas provas; cálculo e código mais frequentes em 2018.
- Temas presentes nas duas: E-R/modelo relacional, normalização, SQL, Scrum, PMBOK/EAP, segurança (ISO 27002, criptografia), lógica de predicados.
- Assuntos de 2018 fora do edital de 2026 (redes, Java, XML, algoritmos, BPMN) **não** entram no conteúdo obrigatório.
- `prioridades.md` **não foi alterado**: duas provas não bastam.

**Conferência final:** numeração, enunciados e alternativas das 50 questões de 2018 conferidos visualmente (p. 6–21, inclusive a p. 13). Gabarito de 2018 conferido por resolução em 47 de 50 (sem conferência: Q34, 55, 62); 2023 em 44 de 48 válidas (sem: Q21, 22, 27, 62).

**Fora desta etapa / pendente:** validação dos gabaritos na Cesgranrio; Petrobras 2018 e outras provas; comparação Petrobras × Transpetro.

---

## 1. Objetivo

Este documento estabelece a metodologia de análise da banca Fundação Cesgranrio e sua aplicação à preparação para a prova da Transpetro 2026.4, Ênfase 5.

O objetivo é desenvolver uma preparação orientada por evidências, identificando:

- Características de elaboração das questões;
- Formas de cobrança dos conceitos;
- Tipos de raciocínio exigidos;
- Padrões de construção dos distratores;
- Níveis de complexidade;
- Contextualização dos enunciados;
- Assuntos identificados em provas anteriores;
- Possíveis lacunas de preparação.

A análise deverá orientar a produção de conteúdos, questões autorais, simulados e revisões.

**Princípio central:** a estratégia deve ser construída a partir de provas reais e dados verificáveis, não de suposições sobre o comportamento da banca.

---

## 2. Hierarquia das evidências

Nem todas as provas anteriores possuem o mesmo valor para prever características relevantes da avaliação.

Organizar as fontes em três grupos.

### Grupo 1 — Maior proximidade

Priorizar provas da própria Cesgranrio relacionadas a:

- Transpetro;
- Petrobras;
- Cargos de Tecnologia da Informação;
- Ênfases de Análise de Sistemas;
- Processos de Negócios;
- Desenvolvimento e gestão de sistemas.

Essas provas possuem maior proximidade institucional, temática ou técnica com o concurso-alvo.

### Grupo 2 — Proximidade intermediária

Utilizar provas Cesgranrio de outras empresas públicas, instituições e cargos de TI.

Podem contribuir para identificar características gerais de elaboração das questões e formas de cobrança de conhecimentos técnicos.

Não assumir que a frequência de assuntos dessas provas representa a frequência esperada na Transpetro.

### Grupo 3 — Referência complementar

Utilizar provas Cesgranrio de outras áreas somente quando houver utilidade metodológica.

Podem ajudar na análise de:

- Interpretação de enunciados;
- Construção de alternativas;
- Raciocínio lógico;
- Contextualização;
- Características gerais de avaliação.

Não utilizar provas de áreas distantes para inferir a distribuição de assuntos técnicos de TI.

---

## 3. Cadastro das provas analisadas

Toda prova utilizada na análise deverá ser registrada.

| Campo | Descrição |
|---|---|
| ID da prova | Identificador interno |
| Instituição | Empresa ou órgão |
| Concurso | Nome do processo seletivo |
| Ano | Ano de aplicação |
| Cargo / ênfase | Cargo ou área avaliada |
| Banca | Fundação Cesgranrio |
| Área | TI, conhecimentos gerais ou outra |
| Fonte | URL ou documento original |
| Quantidade de questões | Total analisado |
| Situação | Localizada, conferida ou pendente |

### 3.1. Requisitos de confiabilidade

Antes de utilizar uma prova:

- [ ] Confirmar a instituição e o concurso.
- [ ] Confirmar o cargo ou ênfase.
- [ ] Confirmar o ano de aplicação.
- [ ] Identificar a banca.
- [ ] Obter o caderno de questões.
- [ ] Obter o gabarito correspondente.
- [ ] Verificar retificações ou anulações.
- [ ] Registrar a fonte.
- [ ] Conferir a integridade do documento.

Não utilizar questões sem origem identificável como evidência histórica.

Quando houver divergência entre gabaritos preliminares e definitivos, utilizar o resultado oficial definitivo e registrar a alteração.

---

## 4. Dimensões de análise das questões

Cada questão analisada deverá ser classificada considerando as dimensões abaixo.

### 4.1. Forma de cobrança

Identificar o modo como o conhecimento é exigido.

| Classificação | Característica |
|---|---|
| Conceitual | Exige compreensão de definições e fundamentos |
| Interpretativa | Exige interpretação de texto, cenário ou informação |
| Aplicação | Exige aplicar um conceito a uma situação |
| Comparativa | Exige distinguir conceitos, métodos ou alternativas |
| Procedimental | Exige compreender etapas, processos ou procedimentos |
| Analítica | Exige analisar informações e estabelecer relações |
| Cálculo / lógica | Exige operações, relações matemáticas ou raciocínio lógico |

Uma questão poderá apresentar mais de uma característica, mas deverá possuir uma classificação principal.

### 4.2. Habilidade cognitiva

Classificar a exigência cognitiva predominante:

- Reconhecer;
- Compreender;
- Aplicar;
- Analisar;
- Avaliar.

Utilizar essas categorias como instrumento analítico, não como classificação oficial da banca.

### 4.3. Complexidade técnica

Avaliar:

- Quantidade de conceitos envolvidos;
- Necessidade de conhecimento prévio;
- Profundidade técnica;
- Quantidade de etapas de raciocínio;
- Dependência de interpretação;
- Possibilidade de resolução por eliminação.

### 4.4. Construção dos distratores

Examinar como as alternativas incorretas são elaboradas.

Observar:

- Confusão entre conceitos próximos;
- Troca de características;
- Inversão de causa e consequência;
- Generalizações indevidas;
- Aplicação de regra fora de contexto;
- Uso de termos absolutos;
- Mistura de conceitos verdadeiros em uma afirmação incorreta;
- Erros de sequência ou classificação.

Registrar exemplos concretos e suas respectivas fontes.

Não atribuir um padrão à banca com base em uma única questão.

### 4.5. Contextualização

Identificar se a questão apresenta:

- Situação hipotética;
- Cenário organizacional;
- Contexto empresarial;
- Problema técnico;
- Trecho de código ou representação;
- Tabela, gráfico ou diagrama;
- Enunciado direto, sem contextualização.

---

## 5. Classificação temática

Todas as questões de TI deverão ser relacionadas à matriz de conteúdo do edital da Ênfase 5.

Utilizar os nove módulos do projeto:

| Código | Módulo |
|---|---|
| M01 | Arquitetura de Dados |
| M02 | Gerenciamento de Projetos e Produtos |
| M03 | Processos e Gerenciamento |
| M04 | Gestão e Governança em TI |
| M05 | Engenharia de Software |
| M06 | Experiência do Usuário |
| M07 | Análise de Dados e Informações |
| M08 | Lógica Matemática |
| M09 | Segurança da Informação |

### 5.1. Regras de classificação

Cada questão deverá possuir:

- Um assunto principal;
- Um item ou subitem do edital relacionado, quando aplicável;
- Um módulo principal;
- Assuntos secundários, quando necessários.

Se a questão abordar mais de um assunto, registrar as relações secundárias sem contabilizar a questão várias vezes nas estatísticas gerais.

Questões sem correspondência clara com o edital deverão ser identificadas como:

`FORA_DO_ESCOPO` ou `PENDENTE_DE_CLASSIFICACAO`.

Não forçar o enquadramento.

### 5.2. Distinção entre incidência e relevância

A quantidade de questões encontradas sobre um assunto não determina, isoladamente, sua importância para o concurso atual.

Considerar conjuntamente:

1. Presença expressa no edital;
2. Proximidade da prova analisada com o concurso-alvo;
3. Quantidade de provas disponíveis;
4. Consistência das ocorrências;
5. Profundidade de cobrança;
6. Desempenho do estudante.

Nenhum assunto expressamente previsto no edital poderá ser eliminado da preparação por apresentar baixa incidência histórica.

---

## 6. Análise quantitativa

A análise quantitativa deverá ser baseada em um conjunto documentado de provas.

### 6.1. Frequência absoluta

Quantidade de questões classificadas em determinado assunto.

\[
F_a = \text{Número de questões do assunto}
\]

### 6.2. Frequência relativa

Participação do assunto no universo analisado.

\[
F_r = \frac{\text{Questões do assunto}}{\text{Total de questões analisadas}}\times100
\]

O denominador deverá ser informado.

Exemplo: frequência entre todas as questões de TI analisadas ou frequência dentro de uma prova específica.

Não misturar universos diferentes na mesma comparação.

### 6.3. Incidência por prova

Calcular em quantas provas o assunto apareceu.

\[
I_a = \frac{\text{Provas com ocorrência do assunto}}{\text{Total de provas analisadas}}\times100
\]

Esse indicador evita que uma única prova com muitas questões sobre determinado assunto distorça a análise.

### 6.4. Comparação entre grupos

Apresentar resultados separados para:

- Transpetro;
- Petrobras;
- Outras provas de TI da Cesgranrio;
- Provas complementares.

Não combinar automaticamente todos os grupos em uma única estatística.

### 6.5. Limitações estatísticas

Toda análise quantitativa deverá informar:

- Quantidade de provas;
- Período analisado;
- Quantidade de questões;
- Critérios de seleção;
- Critérios de classificação;
- Questões anuladas;
- Limitações da amostra.

Não extrapolar os resultados para o concurso atual como se fossem uma previsão garantida.

---

## 7. Análise qualitativa

Além da frequência, investigar como os assuntos são cobrados.

Para cada assunto relevante, registrar:

1. Conceito exigido;
2. Forma de apresentação;
3. Profundidade técnica;
4. Habilidade cognitiva;
5. Tipo de distrator;
6. Dificuldade estimada;
7. Referência da questão analisada.

### 7.1. Modelo de análise individual

**Identificação da questão**

- Prova:
- Ano:
- Cargo:
- Número:
- Fonte:

**Classificação**

- Módulo:
- Assunto principal:
- Item do edital:
- Forma de cobrança:
- Habilidade cognitiva:
- Dificuldade:

**Análise**

- O que a questão exige?
- Qual conceito é central?
- Qual raciocínio deve ser aplicado?
- Como os distratores foram construídos?
- Qual conhecimento prévio é necessário?
- Qual aprendizado pode ser incorporado ao material didático?

---

## 8. Classificação de dificuldade

Utilizar três níveis:

| Nível | Critério |
|---|---|
| Fácil | Exige conhecimento fundamental ou reconhecimento direto |
| Médio | Exige aplicação, interpretação ou comparação de conceitos |
| Difícil | Exige integração de conceitos, análise aprofundada ou múltiplas etapas de raciocínio |

A classificação é uma avaliação técnica do projeto, não uma classificação oficial da Cesgranrio.

Quando possível, comparar a dificuldade estimada com os resultados obtidos pelos estudantes nos simulados.

Não classificar uma questão como difícil apenas porque o assunto é avançado.

---

## 9. Conversão da análise em estratégia de estudo

Os resultados deverão orientar a preparação, sem substituir o edital.

### 9.1. Prioridade de conteúdo

Utilizar os seguintes critérios:

| Prioridade | Critério | Tratamento |
|---|---|---|
| P1 — Essencial | Conteúdo expressamente exigido e ainda não dominado | Estudo teórico e prática |
| P2 — Reforço | Conteúdo exigido com desempenho irregular | Revisão e questões adicionais |
| P3 — Consolidação | Conteúdo estudado e com bom desempenho | Revisões periódicas e manutenção |

A prioridade deverá ser ajustada conforme o progresso individual.

Não criar prioridade baixa para assuntos oficiais apenas por sua ausência em provas anteriores.

### 9.2. Distribuição do tempo

A distribuição do tempo de estudo deverá considerar:

- Extensão do conteúdo;
- Complexidade dos assuntos;
- Domínio atual;
- Desempenho nos exercícios;
- Tempo disponível até a prova;
- Necessidade de revisão.

A frequência histórica poderá auxiliar na decisão, mas não deverá ser o único critério.

### 9.3. Ciclo de estudo recomendado

Para cada assunto:

1. Estudar a teoria;
2. Registrar conceitos fundamentais;
3. Resolver questões;
4. Analisar erros;
5. Revisar pontos frágeis;
6. Realizar questões adicionais;
7. Atualizar o desempenho.

---

## 10. Orientação para questões autorais

A análise histórica deverá servir como referência para a produção de questões autorais no estilo Cesgranrio.

As questões deverão reproduzir características observadas e documentadas, sem copiar indevidamente questões protegidas.

Considerar:

- Clareza do enunciado;
- Precisão técnica;
- Cinco alternativas A–E;
- Distratores plausíveis;
- Uma única resposta defensável;
- Contextualização quando pertinente;
- Exigência cognitiva coerente;
- Comentário completo do gabarito.

Cada questão deverá ser identificada como:

**Questão autoral — estilo Cesgranrio.**

Não afirmar que uma questão é típica da banca sem apresentar evidências que sustentem essa caracterização.

A produção e validação das questões deverá seguir `questoes-cesgranrio/SKILL.md`.

---

## 11. Relatório de análise da banca

Os resultados consolidados deverão ser registrados em:

`docs/estrategia/estrategia-cesgranrio.md`

O documento deverá ser atualizado conforme novas provas forem analisadas.

A análise consolidada deverá conter:

### 11.1. Resumo executivo

- Provas analisadas;
- Período;
- Quantidade de questões;
- Principais observações;
- Limitações da análise.

### 11.2. Perfil das questões

- Formas de cobrança;
- Habilidades cognitivas;
- Complexidade técnica;
- Tipos de distratores;
- Contextualização.

### 11.3. Análise por módulo

- Quantidade de questões;
- Incidência por prova;
- Assuntos identificados;
- Formas de cobrança;
- Exemplos documentados.

### 11.4. Recomendações de estudo

- Conteúdos que exigem maior atenção;
- Conceitos que precisam ser aprofundados;
- Tipos de questão que merecem treinamento;
- Lacunas identificadas nos materiais;
- Recomendações para simulados.

### 11.5. Limitações

Explicitar o que não pode ser concluído com os dados disponíveis.

---

## 12. Integração com o banco de questões

A análise deverá alimentar o banco de questões do projeto.

Cada questão histórica analisada deverá possuir metadados que permitam:

- Identificar sua prova de origem;
- Consultar sua fonte;
- Classificar seu assunto;
- Identificar sua forma de cobrança;
- Avaliar sua dificuldade;
- Relacioná-la ao edital.

As estatísticas deverão ser recalculáveis a partir dos registros individuais.

Não manter números consolidados sem possibilidade de rastrear sua origem.

---

## 13. Arquivos de apoio

A análise deverá utilizar os seguintes arquivos:

| Arquivo | Finalidade |
|---|---|
| `docs/estrategia/estrategia-cesgranrio.md` | Relatório consolidado |
| `docs/estrategia/prioridades.md` | Priorização dos estudos |
| `docs/edital/matriz-conteudo.md` | Referência oficial dos assuntos |
| `banco-questoes/oficiais/catalogo-provas.md` | Catálogo das provas e questões oficiais |
| `banco-questoes/oficiais/` | Questões oficiais identificadas |
| `banco-questoes/adaptadas/` | Questões adaptadas |
| `banco-questoes/autorais/` | Questões autorais |

Se necessário, criar uma base estruturada de análise para armazenar os registros individuais.

---

## 14. Regras para o Claude Code

Ao executar esta estratégia:

1. Pesquisar e analisar provas reais da Cesgranrio.
2. Priorizar provas de Transpetro e Petrobras relacionadas à área de TI.
3. Registrar a origem de cada prova e questão.
4. Não inventar questões históricas.
5. Não inventar frequências ou estatísticas.
6. Não afirmar tendências com base em amostras insuficientes.
7. Não confundir incidência histórica com previsão.
8. Não retirar assuntos do edital por baixa frequência.
9. Distinguir fatos, inferências e recomendações.
10. Manter os registros individuais que sustentam as estatísticas.
11. Atualizar as recomendações conforme novas evidências.
12. Identificar expressamente as limitações da análise.

### Primeira execução

Na primeira execução:

1. Identificar fontes confiáveis de provas anteriores.
2. Localizar provas da Transpetro e Petrobras da Cesgranrio.
3. Priorizar questões de Tecnologia da Informação.
4. Registrar os documentos encontrados.
5. Conferir gabaritos e eventuais anulações.
6. Criar o catálogo das provas disponíveis.
7. Analisar uma amostra inicial de questões.
8. Identificar os assuntos e formas de cobrança.
9. Produzir um relatório preliminar.
10. Apresentar lacunas e limitações da amostra.

Não produzir estatísticas de frequência antes de construir uma base minimamente documentada.

Não alterar a matriz de conteúdo nem iniciar a produção massiva de questões nesta primeira execução.

---

## 15. Critérios de qualidade

A análise será considerada confiável quando:

- [ ] Todas as provas utilizadas tiverem origem identificada.
- [ ] Os gabaritos tiverem sido conferidos.
- [ ] As questões estiverem classificadas.
- [ ] A relação com o edital estiver documentada.
- [ ] As estatísticas forem reproduzíveis.
- [ ] Os grupos de provas estiverem separados.
- [ ] As limitações estiverem explicitadas.
- [ ] As recomendações estiverem fundamentadas.
- [ ] Não houver afirmações sem evidência.

**Princípio final:** conhecer a Cesgranrio significa compreender como ela avalia os conhecimentos, e não tentar adivinhar quais questões serão cobradas. A preparação deve combinar domínio integral do edital, análise de provas anteriores e prática sistemática.