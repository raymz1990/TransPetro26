# 03 — ANÁLISE HISTÓRICA DA FUNDAÇÃO CESGRANRIO

## Objetivo

Realizar uma análise histórica e técnica das provas elaboradas pela Fundação Cesgranrio, priorizando concursos da Transpetro e Petrobras para cargos de Tecnologia da Informação, Análise de Sistemas e áreas correlatas.

O objetivo é identificar características recorrentes da banca, padrões de cobrança, nível de profundidade, formatos de questões, habilidades exigidas e oportunidades de preparação para o concurso Transpetro 2026.4 — Ênfase 5: Análise de Sistemas: Processos de Negócios.

A análise deverá produzir evidências que orientem a estratégia de estudos, a elaboração posterior de questões autorais e a construção de simulados.

**Atenção:** frequência histórica não representa garantia de cobrança futura. Toda conclusão deverá distinguir evidência observada, inferência e recomendação pedagógica.

---

## 1. Preparação e leitura obrigatória

Antes de iniciar:

1. Leia integralmente:
   - `CLAUDE.md`
   - `.claude/skills/analise-banca/SKILL.md`
   - `.claude/skills/edital-e-cobertura/SKILL.md`
   - `docs/edital/anexo-IV-extraido.md`
   - `docs/edital/matriz-conteudo.md`
   - `docs/edital/estrutura-prova.md`

2. Verifique se a auditoria do edital foi concluída e aprovada.

3. Verifique se a matriz de conteúdo está validada e se os assuntos estão corretamente associados aos nove módulos pedagógicos.

4. Confira se existem provas, gabaritos, questões ou levantamentos históricos no projeto.

5. Não presuma que os nove módulos pedagógicos correspondem à divisão oficial da prova. Utilize a matriz validada para classificar os assuntos.

Se a auditoria do edital não estiver aprovada, interrompa a execução e informe a pendência.

---

## 2. Pesquisa e seleção das provas

Pesquise provas anteriores da Fundação Cesgranrio, priorizando a seguinte ordem:

### Prioridade 1 — Alta similaridade

- Transpetro — cargos de Tecnologia da Informação.
- Petrobras — cargos de Tecnologia da Informação.
- Petrobras — cargos de Análise de Sistemas.
- Processos seletivos da área de TI com conteúdo programático semelhante ao edital atual.

### Prioridade 2 — Similaridade intermediária

- Concursos da Cesgranrio para Analista de Sistemas.
- Concursos para profissionais de tecnologia, dados, processos e governança de TI.
- Provas de empresas públicas e sociedades de economia mista com perfil semelhante.

### Prioridade 3 — Referência complementar

- Outras provas da Cesgranrio que contenham assuntos presentes no edital.
- Questões de outras áreas que permitam identificar características gerais de elaboração da banca.

Não misture indiscriminadamente provas de diferentes áreas. A análise de questões específicas de TI deverá ter maior peso estratégico do que características observadas em provas de conhecimentos gerais.

### Fontes

Priorize:

1. Páginas oficiais da Cesgranrio.
2. Páginas oficiais da Petrobras e Transpetro.
3. Cadernos de provas e gabaritos publicados pelas organizadoras.
4. Documentos oficiais de concursos anteriores.
5. Repositórios secundários apenas quando não houver fonte primária disponível.

Para cada prova, registre a origem e o nível de confiabilidade da fonte.

Não considere uma questão como oficial apenas porque ela aparece em um banco de questões ou site de terceiros.

Se não conseguir localizar o caderno original, registre essa limitação.

---

## 3. Catálogo histórico de provas

Crie o arquivo:

`docs/estrategia/base-provas.md`

O catálogo deverá registrar, sempre que a informação estiver disponível:

| Campo | Descrição |
|---|---|
| ID | Identificador único da prova |
| Concurso | Nome do concurso |
| Ano | Ano de realização |
| Instituição | Petrobras, Transpetro ou outra |
| Cargo | Cargo ou ênfase |
| Banca | Fundação Cesgranrio |
| Área | TI, Análise de Sistemas ou outra |
| Prova | Link para o caderno original |
| Gabarito | Link para o gabarito |
| Tipo de gabarito | Preliminar, definitivo ou não localizado |
| Questões analisadas | Quantidade efetivamente examinada |
| Similaridade | Alta, média ou baixa |
| Confiabilidade | Alta, média ou baixa |
| Observações | Ressalvas relevantes |

Não invente links, cargos, anos, provas ou informações bibliográficas.

Quando um dado não estiver disponível, utilize a indicação "Não localizado" ou "Não confirmado".

---

## 4. Construção da base de questões históricas

Crie o arquivo:

`docs/estrategia/catalogo-questoes-historicas.md`

Cada questão examinada deverá ser registrada individualmente, quando houver acesso ao enunciado e às alternativas.

Campos mínimos:

- ID interno.
- Concurso.
- Ano.
- Instituição.
- Cargo.
- Número da questão na prova.
- Módulo pedagógico correspondente.
- Item exato do edital atual relacionado.
- Assunto específico.
- Formato da questão.
- Habilidade cognitiva predominante.
- Nível de dificuldade estimado.
- Existência de contexto prático.
- Tipo de raciocínio exigido.
- Gabarito oficial, quando localizado.
- Situação: válida, anulada, alterada ou não confirmada.
- Fonte do caderno.
- Fonte do gabarito.
- Observações.

Utilize identificadores próprios, por exemplo:

`HIS-000001`

### Classificação temática

Classifique as questões utilizando a matriz oficial validada do projeto.

Uma questão poderá estar relacionada a mais de um assunto, mas deverá possuir:

- Um assunto principal.
- Assuntos secundários, quando aplicável.
- Referência ao item específico do edital.

Não force uma classificação quando não houver correspondência clara. Utilize "Classificação pendente" e justifique.

### Integridade

- Não transcreva questões que não estejam disponíveis na fonte consultada.
- Não reconstrua enunciados incompletos.
- Não atribua gabarito sem comprovação.
- Não apresente questões autorais como questões históricas.
- Não misture questões adaptadas com questões oficiais.
- Registre questões anuladas ou alteradas.
- Não considere questões repetidas em diferentes bancos como questões independentes.

---

## 5. Análise quantitativa

Realize uma análise quantitativa apenas quando houver dados suficientes e verificáveis.

Investigue:

### 5.1 Frequência temática

- Quantidade de questões por assunto.
- Quantidade por módulo pedagógico.
- Frequência relativa dos assuntos.
- Distribuição por concurso.
- Distribuição por ano.
- Recorrência dos assuntos em provas distintas.

Apresente o denominador utilizado em cada percentual.

Exemplo: se determinado assunto representa 12% das questões classificadas, informe a quantidade de questões classificadas e o total da amostra.

Não utilize o número de questões encontradas em um site como denominador sem verificar duplicidades e integridade dos dados.

### 5.2 Evolução histórica

Investigue:

- Assuntos recorrentes ao longo dos anos.
- Assuntos que aparecem em provas mais recentes.
- Mudanças na abordagem dos temas.
- Eventuais alterações de profundidade técnica.
- Diferenças entre provas de TI da Petrobras e da Transpetro.

Não confunda ausência de questões localizadas com ausência de cobrança pela banca.

### 5.3 Limitações estatísticas

Informe:

- Tamanho da amostra.
- Quantidade de provas examinadas.
- Período histórico.
- Percentual de questões com classificação confirmada.
- Lacunas documentais.
- Possíveis vieses de seleção.
- Limitações de comparabilidade entre cargos e editais.

Não apresente correlações ou tendências como relações causais.

Não utilize amostras pequenas para produzir rankings definitivos.

---

## 6. Análise qualitativa do estilo Cesgranrio

A análise qualitativa deverá ser tão importante quanto a frequência temática.

Investigue os seguintes aspectos:

### 6.1 Construção dos enunciados

- Enunciados curtos ou extensos.
- Contextualização empresarial.
- Uso de situações hipotéticas.
- Necessidade de interpretar cenários.
- Presença de informações irrelevantes.
- Exigência de leitura cuidadosa.
- Uso de termos técnicos.

### 6.2 Estrutura das alternativas

- Alternativas conceitualmente próximas.
- Distratores baseados em confusão entre conceitos.
- Troca de terminologia.
- Generalizações indevidas.
- Afirmações parcialmente corretas.
- Inversão de causa e consequência.
- Alternativas com condições ou exceções.

### 6.3 Habilidades cognitivas

Classifique as questões conforme a habilidade predominante:

- Memorização.
- Compreensão conceitual.
- Interpretação.
- Aplicação prática.
- Análise de cenários.
- Comparação de alternativas.
- Identificação de erros.
- Raciocínio lógico.
- Resolução de problemas.

### 6.4 Profundidade técnica

Avalie:

- Conhecimento conceitual básico.
- Conhecimento intermediário.
- Conhecimento técnico aprofundado.
- Aplicação de normas e frameworks.
- Interpretação de modelos.
- Conhecimento de ferramentas e tecnologias.
- Capacidade de relacionar diferentes assuntos.

### 6.5 Dificuldade

Classifique como:

- Fácil.
- Média.
- Difícil.

A classificação deve considerar a complexidade do raciocínio, o conhecimento necessário, a proximidade entre alternativas e a quantidade de etapas exigidas.

Não utilize apenas o percentual de acertos de plataformas de questões como medida de dificuldade.

---

## 7. Análise específica dos nove módulos

Produza uma análise individual para cada módulo:

1. Arquitetura de Dados.
2. Gerenciamento de Projetos e Produtos.
3. Processos, grupos de processos e áreas de conhecimento.
4. Gestão e Governança em TI.
5. Engenharia de Software.
6. Experiência do Usuário.
7. Análise de Dados e Informações.
8. Lógica Matemática.
9. Segurança da Informação.

Para cada módulo, apresente:

- Quantidade de questões históricas localizadas.
- Provas e concursos de origem.
- Assuntos efetivamente cobrados.
- Recorrência observada.
- Profundidade técnica.
- Formatos de enunciado.
- Habilidades cognitivas exigidas.
- Padrões de alternativas e distratores.
- Exemplos de questões históricas com identificação e fonte.
- Limitações da amostra.
- Recomendações de preparação.

Se determinado módulo não possuir amostra suficiente, informe isso explicitamente.

Não crie uma distribuição artificial de questões para preencher lacunas.

---

## 8. Comparação entre Transpetro e Petrobras

Quando houver provas comparáveis, investigue:

- Diferenças de abordagem.
- Diferenças de profundidade.
- Temas recorrentes em ambas.
- Temas identificados em apenas uma instituição.
- Formato dos enunciados.
- Exigência de interpretação e aplicação.
- Nível de contextualização.
- Possíveis diferenças de perfil dos cargos.

Não conclua que uma prova representa automaticamente o padrão da outra.

Considere a compatibilidade entre os editais e as atribuições dos cargos antes de comparar resultados.

---

## 9. Conversão da análise em estratégia de estudos

Atualize:

`docs/estrategia/estrategia-cesgranrio.md`

O documento deverá consolidar:

### 9.1 Perfil observado da banca

Apresente características sustentadas por questões efetivamente examinadas.

Diferencie:

- Evidência documental.
- Padrão observado na amostra.
- Inferência.
- Recomendação pedagógica.

### 9.2 Prioridades de preparação

Para cada assunto da matriz, classifique a prioridade considerando:

- Presença no edital atual.
- Recorrência histórica comprovada.
- Similaridade das provas de referência.
- Profundidade técnica exigida.
- Complexidade do assunto.
- Importância para compreensão de outros tópicos.
- Desempenho do estudante, quando houver dados.

Utilize as categorias:

- P0 — Prioridade máxima.
- P1 — Prioridade alta.
- P2 — Prioridade intermediária.
- P3 — Prioridade complementar.

A prioridade histórica não poderá se sobrepor à presença expressa no edital.

Um assunto previsto no edital não poderá ser excluído da preparação apenas por não ter sido localizado em provas anteriores.

### 9.3 Recomendações de estudo

Indique, por assunto:

- O que estudar em profundidade.
- O que precisa ser dominado conceitualmente.
- O que exige resolução de exercícios.
- Quais conceitos devem ser comparados.
- Quais erros conceituais merecem atenção.
- Que tipo de questão deve ser utilizado no treinamento.

### 9.4 Recomendações para questões autorais

Estabeleça orientações para a futura produção de questões:

- Construção de enunciados.
- Nível de contextualização.
- Profundidade técnica.
- Distribuição de habilidades cognitivas.
- Construção de distratores.
- Alternativas próximas e plausíveis.
- Uso de cenários empresariais.
- Integração de assuntos.

As questões autorais deverão ser identificadas como:

"Questão autoral — estilo Cesgranrio".

Não reproduza questões históricas com alterações superficiais e apresente-as como novas questões originais.

### 9.5 Recomendações para simulados

Apresente recomendações sobre:

- Equilíbrio entre assuntos.
- Variação de dificuldade.
- Proporção entre questões conceituais e contextualizadas.
- Necessidade de interpretação.
- Tempo de resolução.
- Cobertura do edital.

Não defina uma distribuição definitiva das 50 questões específicas entre os nove módulos sem fundamento no edital ou em decisão pedagógica explicitamente identificada como tal.

---

## 10. Integração com o projeto

Após concluir a análise:

1. Atualize `docs/estrategia/estrategia-cesgranrio.md`.
2. Crie `docs/estrategia/base-provas.md`.
3. Crie `docs/estrategia/catalogo-questoes-historicas.md`.
4. Atualize `docs/estrategia/prioridades.md`, somente quando houver evidências suficientes.
5. Atualize `docs/edital/controle-cobertura.md` apenas se houver informações relevantes para o acompanhamento da preparação.
6. Registre as fontes e limitações de cada levantamento.
7. Preserve os arquivos existentes e suas informações válidas.
8. Não altere regras permanentes de `CLAUDE.md` sem necessidade justificada.

Se for útil, crie arquivos auxiliares para tabelas de dados, desde que a estrutura seja documentada e não gere duplicação desnecessária.

---

## 11. Critérios de qualidade

Antes de concluir, confira:

- [ ] Todas as provas utilizadas possuem identificação.
- [ ] As fontes estão registradas.
- [ ] Os gabaritos estão identificados por situação.
- [ ] Questões oficiais não foram confundidas com autorais.
- [ ] Duplicidades foram tratadas.
- [ ] A classificação temática utiliza a matriz validada.
- [ ] Percentuais possuem denominadores explícitos.
- [ ] Limitações da amostra foram documentadas.
- [ ] Evidências e inferências estão separadas.
- [ ] Não foram inventadas estatísticas.
- [ ] Não foram feitas previsões categóricas sobre a prova futura.
- [ ] As recomendações respeitam o edital vigente.
- [ ] Os nove módulos foram examinados, mesmo quando não houver dados suficientes.
- [ ] Os documentos estão organizados e prontos para consulta nos próximos prompts.

Utilize o checklist de análise de banca definido em `.claude/skills/analise-banca/SKILL.md`.

---

## 12. Relatório de execução

Ao terminar, apresente um relatório objetivo contendo:

1. Provas localizadas.
2. Provas efetivamente analisadas.
3. Total de questões históricas catalogadas.
4. Quantidade de questões com gabarito oficial confirmado.
5. Distribuição das questões por módulo.
6. Principais padrões observados.
7. Assuntos com maior evidência histórica.
8. Assuntos com pouca ou nenhuma evidência localizada.
9. Limitações da pesquisa.
10. Arquivos criados e atualizados.
11. Recomendações estratégicas.
12. Pendências que exigem decisão ou validação do usuário.

Não declare a análise concluída se houver lacunas relevantes que comprometam suas conclusões.

---

## 13. Limites desta etapa

Nesta execução, NÃO:

- Produza novos materiais teóricos.
- Crie questões autorais.
- Crie simulados.
- Altere o conteúdo do edital.
- Desenvolva funcionalidades do site.
- Reorganize os nove módulos sem justificativa e aprovação.
- Avance automaticamente para o próximo prompt.

O objetivo é concluir a análise histórica e estratégica da Cesgranrio.

**Ao finalizar, apresente o relatório e aguarde minha aprovação antes de iniciar a próxima etapa.**