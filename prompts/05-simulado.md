# 05 — CRIAÇÃO E GESTÃO DE SIMULADOS

## Objetivo

Construir um sistema de simulados para o concurso Transpetro 2026.4 — Ênfase 5: Análise de Sistemas: Processos de Negócios, organizado pela Fundação Cesgranrio.

Os simulados deverão reproduzir, na medida permitida pelas informações oficiais disponíveis, a estrutura da prova, o nível de exigência, o formato das questões e as condições de realização.

O objetivo é permitir que o estudante:

- Avalie seu domínio do edital.
- Treine a resolução de questões sob limite de tempo.
- Desenvolva resistência e concentração.
- Identifique lacunas de conhecimento.
- Avalie sua evolução por módulo e assunto.
- Treine a gestão do tempo.
- Desenvolva estratégias de prova.
- Alimente automaticamente o caderno de erros.
- Direcione revisões e novos ciclos de estudo.

**Princípio central:** um simulado deve avaliar conhecimento e desempenho. Não deve apenas reunir aleatoriamente questões do banco.

---

## 1. Preparação obrigatória

Antes de iniciar, leia:

- `CLAUDE.md`
- `.claude/skills/simulados/SKILL.md`
- `.claude/skills/questoes-cesgranrio/SKILL.md`
- `.claude/skills/analise-banca/SKILL.md`
- `.claude/skills/edital-e-cobertura/SKILL.md`
- `docs/edital/matriz-conteudo.md`
- `docs/qualidade/checklist-simulados.md`
- `docs/qualidade/checklist-questoes.md`
- `docs/qualidade/checklist-conteudo.md`
- `banco-questoes/relatorio-cobertura-questoes.md`

Examine também os arquivos do banco de questões e seus respectivos status de validação.

### Condições para iniciar

Confirme que:

1. O edital foi auditado e aprovado.
2. A estrutura da prova está confirmada ou possui pendências documentadas.
3. A matriz de conteúdo está validada.
4. A análise histórica da Cesgranrio está concluída ou possui limitações documentadas.
5. O banco de questões está organizado.
6. As questões utilizadas nos simulados estão validadas.

Se as condições não estiverem atendidas, apresente as pendências e não gere simulados completos.

---

## 2. Estrutura oficial da prova

Utilize `docs/edital/estrutura-prova.md` como referência principal.

A estrutura de trabalho prevista é:

| Área | Quantidade prevista |
|---|---:|
| Conhecimentos específicos | 50 |
| Língua Portuguesa | 10 |
| Língua Inglesa | 10 |
| **Total** | **70** |

A estrutura acima deverá ser conferida no edital oficial antes de ser tratada como definitiva.

Cada questão deverá possuir cinco alternativas:

A, B, C, D e E.

### Informações que devem ser confirmadas

- Quantidade oficial de questões.
- Distribuição por disciplina.
- Pontuação por questão.
- Pesos por área.
- Nota mínima.
- Critérios eliminatórios.
- Duração da prova.
- Regras de aprovação.
- Critérios de desempate.
- Regras para questões anuladas.
- Eventuais diferenças entre áreas de conhecimento.

Não invente regras para preencher informações ausentes.

Quando uma informação não estiver confirmada, identifique-a como pendente.

### Distribuição das questões específicas

Não presuma que os nove módulos pedagógicos possuem uma distribuição oficial de questões.

A distribuição entre os módulos deverá considerar:

1. A estrutura oficial do edital, quando disponível.
2. A quantidade e a relevância dos itens previstos.
3. A cobertura do banco de questões.
4. A estratégia pedagógica.
5. A análise histórica, quando houver amostra suficiente.

Se for necessário estabelecer uma distribuição própria, identifique-a como:

"Distribuição pedagógica proposta — não representa distribuição oficial da banca."

---

## 3. Tipos de simulados

O projeto deverá oferecer diferentes modalidades.

### 3.1 Simulado diagnóstico

Objetivo: identificar o nível inicial de conhecimento.

Características:

- Questões de diferentes módulos.
- Cobertura ampla dos assuntos.
- Dificuldade predominantemente fácil e média.
- Identificação dos principais pontos fracos.
- Relatório diagnóstico por assunto.

Não deverá ser interpretado como estimativa definitiva da nota na prova oficial.

### 3.2 Simulado por módulo

Objetivo: avaliar domínio de um módulo específico.

Características:

- Questões do mesmo módulo.
- Cobertura dos diferentes assuntos.
- Variação de dificuldade.
- Comentários após a finalização.
- Relatório de desempenho.

### 3.3 Simulado por assunto

Objetivo: testar um assunto específico do edital.

Características:

- Questões concentradas em um item ou conjunto de itens relacionados.
- Ênfase em conceitos e aplicação.
- Identificação de erros recorrentes.
- Recomendação de revisão.

### 3.4 Simulado de revisão

Objetivo: recuperar conhecimentos estudados anteriormente.

Características:

- Questões de assuntos já estudados.
- Priorização de questões erradas anteriormente, quando apropriado.
- Reforço de conceitos com baixa retenção.
- Recuperação espaçada.

Evite apresentar repetidamente a mesma questão em curto intervalo sem finalidade pedagógica.

### 3.5 Simulado específico

Objetivo: simular a parte de conhecimentos específicos.

Estrutura prevista: 50 questões, condicionada à confirmação do edital.

Características:

- Abrangência dos nove módulos.
- Distribuição identificada.
- Variação de dificuldade.
- Questões oficiais, adaptadas e autorais claramente identificadas.
- Tempo de realização definido conforme a estrutura oficial ou configuração pedagógica explicitada.

### 3.6 Simulado completo

Objetivo: reproduzir a prova integral.

Estrutura prevista: 70 questões, condicionada à confirmação do edital:

- 50 específicas.
- 10 de Português.
- 10 de Inglês.

O simulado completo deverá reproduzir a estrutura oficial confirmada, inclusive os pesos e critérios de pontuação.

Não crie questões de Português ou Inglês sem que exista conteúdo e banco de questões adequado para essas disciplinas.

Se o banco ainda não contemplar essas áreas, informe a limitação e não apresente um simulado incompleto como simulado completo.

### 3.7 Simulado de reta final

Objetivo: avaliar preparação próxima à prova.

Características:

- Maior proporção de questões médias e difíceis.
- Abrangência ampla do edital.
- Questões integradoras.
- Tempo rigorosamente controlado.
- Correção completa após finalização.
- Relatório de pontos críticos.

---

## 4. Seleção das questões

Os simulados deverão utilizar preferencialmente questões validadas.

### 4.1 Fontes permitidas

- Questões oficiais com origem verificável.
- Questões adaptadas com fonte registrada.
- Questões autorais validadas.

Cada questão deverá manter sua classificação de origem.

### 4.2 Restrições

Não utilizar:

- Questões com gabarito não confirmado como se fossem definitivas.
- Questões reprovadas.
- Questões com ambiguidade conhecida.
- Questões duplicadas.
- Questões fora do edital sem justificativa.
- Questões ainda em elaboração.
- Questões sem identificação de origem.

Questões pendentes poderão ser utilizadas apenas em simulados experimentais claramente identificados como não validados.

### 4.3 Controle de repetição

O sistema deverá:

- Evitar repetição excessiva em simulados consecutivos.
- Registrar quais questões já foram utilizadas.
- Permitir simulados inéditos.
- Permitir simulados de recuperação.
- Priorizar questões ainda não resolvidas.
- Permitir reutilização deliberada de questões erradas.

O controle deverá considerar o histórico de realização do estudante.

---

## 5. Montagem dos simulados

A montagem deverá considerar:

### 5.1 Cobertura temática

- Presença dos itens do edital.
- Cobertura dos assuntos prioritários.
- Equilíbrio entre os módulos.
- Assuntos ainda pouco avaliados.
- Assuntos com maior índice de erro.

### 5.2 Dificuldade

Utilize três níveis:

- Fácil.
- Média.
- Difícil.

A proporção deverá variar conforme a modalidade do simulado.

Quando não houver dados suficientes para definir uma proporção fundamentada, utilize uma configuração pedagógica provisória e identifique-a claramente.

### 5.3 Habilidade cognitiva

Varie entre:

- Memorização.
- Compreensão.
- Interpretação.
- Aplicação.
- Análise.
- Avaliação.
- Resolução de problemas.

### 5.4 Origem das questões

Informe a composição do simulado:

- Questões oficiais.
- Questões adaptadas.
- Questões autorais.

Não estabeleça uma proporção artificial de questões oficiais quando o banco histórico não permitir.

### 5.5 Distribuição do gabarito

Evite padrões previsíveis de alternativas corretas.

Não altere o gabarito de uma questão apenas para equilibrar as letras.

A posição das alternativas poderá ser embaralhada somente se isso não modificar o sentido da questão e se o gabarito for atualizado corretamente.

Não utilize algoritmos de embaralhamento que comprometam questões com alternativas dependentes de ordem.

---

## 6. Experiência de realização

Cada simulado deverá apresentar uma interface funcional e objetiva.

### Antes de começar

Exibir:

- Nome do simulado.
- Tipo.
- Quantidade de questões.
- Módulos abrangidos.
- Dificuldade predominante.
- Tempo disponível.
- Regras de pontuação.
- Informação sobre consulta ou ausência de consulta.
- Aviso sobre possibilidade de pausar, quando aplicável.

### Durante a prova

A interface deverá oferecer:

- Enunciado.
- Cinco alternativas.
- Seleção de resposta.
- Navegação entre questões.
- Numeração e progresso.
- Marcação de questões para revisão.
- Cronômetro.
- Indicação de questões respondidas e não respondidas.
- Possibilidade de retornar a questões anteriores.
- Confirmação antes de finalizar.

O sistema deverá preservar as respostas durante a execução, inclusive em caso de atualização acidental da página, sempre que tecnicamente possível.

### Encerramento

Antes de finalizar, apresentar:

- Questões respondidas.
- Questões não respondidas.
- Questões marcadas para revisão.
- Tempo utilizado.

Solicitar confirmação para entrega definitiva.

Após a entrega, bloquear alterações nas respostas daquele resultado.

---

## 7. Correção e gabarito comentado

A correção deverá ocorrer após a finalização do simulado.

Para cada questão, apresentar:

1. Enunciado.
2. Resposta selecionada.
3. Gabarito.
4. Resultado individual.
5. Comentário completo.
6. Análise das cinco alternativas.
7. Fundamentação teórica.
8. Módulo e assunto.
9. Item do edital.
10. Dificuldade.
11. Habilidade cognitiva.
12. Fonte e classificação da questão.

### Regras

- Não exibir o gabarito antes da finalização, salvo modalidade de treinamento explicitamente configurada.
- Não alterar gabaritos de questões oficiais sem registrar a situação.
- Questões anuladas devem seguir o tratamento previsto no edital ou uma regra pedagógica explicitamente identificada.
- Questões sem gabarito confirmado não devem gerar pontuação definitiva.
- Questões autorais devem utilizar o gabarito validado no banco.

---

## 8. Métricas de desempenho

O relatório deverá contemplar:

### 8.1 Resultado geral

- Total de questões.
- Acertos.
- Erros.
- Não respondidas.
- Percentual de acertos.
- Pontuação, quando houver regra confirmada.
- Tempo total.
- Tempo médio por questão.

Não confunda percentual de acertos com nota oficial quando os pesos e critérios de pontuação não forem conhecidos.

### 8.2 Resultado por módulo

Para cada módulo:

- Quantidade de questões.
- Acertos.
- Erros.
- Percentual de acertos.
- Dificuldade predominante.
- Assuntos com maior incidência de erros.

### 8.3 Resultado por assunto

Apresente:

- Desempenho.
- Quantidade de questões realizadas.
- Histórico de acertos.
- Evolução.
- Assuntos que precisam de revisão.

Evite classificar um assunto como dominado com base em uma amostra muito pequena.

### 8.4 Resultado por dificuldade

Compare o desempenho em questões:

- Fáceis.
- Médias.
- Difíceis.

### 8.5 Resultado por habilidade

Avalie o desempenho em:

- Memorização.
- Compreensão.
- Interpretação.
- Aplicação.
- Análise.
- Avaliação.
- Resolução de problemas.

### 8.6 Resultado por origem

Permita comparar o desempenho em:

- Oficiais.
- Adaptadas.
- Autorais.

Não trate diferenças de desempenho entre essas categorias como diretamente equivalentes, pois elas podem possuir amostras e níveis de dificuldade distintos.

---

## 9. Caderno de erros e revisões

A conclusão do simulado deverá alimentar o caderno de erros.

Para cada questão errada ou não respondida, registre:

- ID da questão.
- Simulado de origem.
- Resposta selecionada.
- Gabarito.
- Assunto.
- Tipo de erro.
- Data.
- Tempo de resolução.
- Necessidade de revisão.

Classifique os erros como:

- Falta de conhecimento.
- Confusão conceitual.
- Interpretação incorreta.
- Desatenção.
- Erro de cálculo.
- Aplicação inadequada.
- Gestão de tempo.
- Chute.

Sugira ações conforme o tipo de erro:

| Tipo de erro | Ação recomendada |
|---|---|
| Falta de conhecimento | Retomar a teoria |
| Confusão conceitual | Comparar conceitos |
| Interpretação incorreta | Resolver questões interpretativas |
| Desatenção | Treinar leitura e conferência |
| Erro de cálculo | Refazer exercícios |
| Aplicação inadequada | Estudar cenários práticos |
| Gestão de tempo | Treinar resolução cronometrada |
| Chute | Revisar o assunto e registrar a incerteza |

As revisões deverão alimentar o sistema de repetição espaçada já previsto no projeto.

---

## 10. Organização dos arquivos

Respeite a estrutura existente.

Utilize:

`banco-questoes/simulados/por-assunto/`

`banco-questoes/simulados/especificos-50-questoes/`

`banco-questoes/simulados/completos-70-questoes/`

`banco-questoes/gabaritos-comentados/`

Crie, se necessário:

- Catálogo geral de simulados.
- Configurações de montagem.
- Histórico de simulados.
- Relatórios de desempenho.
- Dados estruturados para o site.

### Identificação

Utilize identificadores consistentes, por exemplo:

- `SIM-DIAG-001`
- `SIM-MOD01-001`
- `SIM-ESP-001`
- `SIM-COMP-001`
- `SIM-REV-001`

Não reutilize identificadores.

### Dados estruturados

Mantenha um formato compatível com a estrutura existente do banco de questões.

Cada simulado deverá registrar:

- ID.
- Nome.
- Tipo.
- Data de criação.
- Versão.
- Quantidade de questões.
- IDs das questões utilizadas.
- Distribuição por módulo.
- Distribuição por assunto.
- Distribuição por dificuldade.
- Distribuição por origem.
- Tempo previsto.
- Regra de pontuação.
- Status de validação.

Os resultados individuais deverão ser armazenados separadamente do conteúdo estático do simulado.

---

## 11. Compatibilidade com o site

Prepare os dados para futura integração com a plataforma estática.

A arquitetura deverá respeitar:

- HTML, CSS e JavaScript.
- JSON para conteúdo.
- localStorage para histórico e progresso.
- Ausência de dependência essencial de backend.
- Compatibilidade com GitHub Pages.
- Persistência local dos resultados.
- Exportação e importação de dados, conforme a arquitetura definida no Skill do site.

Não desenvolva a plataforma nesta etapa.

Garanta apenas que os simulados e seus dados sejam compatíveis com a implementação futura.

---

## 12. Execução por fases

Não crie todos os simulados de uma só vez.

### Fase 1 — Simulado diagnóstico

Crie um primeiro simulado diagnóstico com quantidade de questões compatível com a cobertura validada.

O objetivo é testar:

- Seleção das questões.
- Cobertura temática.
- Qualidade das questões.
- Gabarito.
- Comentários.
- Métricas de desempenho.

Apresente o simulado e aguarde aprovação.

### Fase 2 — Simulados por módulo

Crie simulados individuais para os nove módulos.

Cada simulado deverá cobrir os assuntos disponíveis e validados.

Não force a mesma quantidade de questões em todos os módulos.

### Fase 3 — Simulados específicos

Prepare simulados de conhecimentos específicos com 50 questões, respeitando a estrutura confirmada do edital.

Se a distribuição entre módulos for pedagógica, identifique-a como tal.

### Fase 4 — Simulados completos

Somente quando o banco contemplar todas as áreas da prova, crie simulados completos de 70 questões, respeitando a estrutura oficial confirmada.

### Fase 5 — Simulados de reta final

Crie simulados com maior exigência de interpretação, aplicação e análise, desde que o banco possua questões suficientes e validadas.

Após cada fase, apresente o resultado e aguarde aprovação antes de avançar.

---

## 13. Checklist de qualidade

Antes de liberar um simulado, confira:

- [ ] Estrutura compatível com a modalidade.
- [ ] Questões dentro do edital.
- [ ] Questões validadas.
- [ ] Origem das questões identificada.
- [ ] Ausência de duplicidades indevidas.
- [ ] Cobertura temática documentada.
- [ ] Distribuição de dificuldade coerente.
- [ ] Alternativas preservadas.
- [ ] Gabaritos conferidos.
- [ ] Questões anuladas tratadas corretamente.
- [ ] Comentários completos.
- [ ] Cronômetro funcional.
- [ ] Navegação funcional.
- [ ] Respostas preservadas durante a execução.
- [ ] Confirmação de entrega.
- [ ] Correção após finalização.
- [ ] Métricas calculadas corretamente.
- [ ] Integração prevista com caderno de erros.
- [ ] Compatibilidade com os dados do site.

Utilize o checklist de `docs/qualidade/checklist-simulados.md`.

---

## 14. Relatório de execução

Ao concluir cada fase, informe:

1. Simulados criados.
2. Quantidade de questões por simulado.
3. Distribuição por módulo.
4. Distribuição por assunto.
5. Distribuição por dificuldade.
6. Distribuição por origem.
7. Quantidade de questões validadas.
8. Lacunas de cobertura.
9. Regras de pontuação utilizadas.
10. Tempo previsto.
11. Arquivos criados e atualizados.
12. Problemas identificados.
13. Pendências para a próxima fase.

Ao finalizar a primeira fase, apresente também uma avaliação crítica sobre a qualidade do simulado diagnóstico.

---

## 15. Limites desta etapa

Nesta execução, NÃO:

- Desenvolva o site completo.
- Altere o edital.
- Invente critérios de aprovação.
- Invente pesos ou pontuações oficiais.
- Crie questões sem validação.
- Misture questões oficiais, adaptadas e autorais sem identificação.
- Considere uma distribuição pedagógica como distribuição oficial.
- Gere simulados completos com áreas ainda sem banco de questões.
- Avance automaticamente para o próximo prompt.

**O objetivo é construir simulados confiáveis, rastreáveis e úteis para medir a preparação real do estudante.**

Execute somente a fase autorizada, apresente o relatório e aguarde minha aprovação antes de avançar.