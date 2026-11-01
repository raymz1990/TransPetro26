# Checklist de Qualidade — Simulados
## Transpetro 2026.4 — Ênfase 5: Análise de Sistemas: Processos de Negócios

**Arquivo:** `docs/qualidade/checklist-simulados.md`

**Documentos relacionados:**
- `CLAUDE.md`
- `docs/edital/matriz-conteudo.md`
- `docs/edital/estrutura-prova.md`
- `docs/edital/controle-cobertura.md`
- `docs/estrategia/estrategia-cesgranrio.md`
- `docs/estrategia/prioridades.md`
- `docs/estrategia/metodologia-estudo.md`
- `.claude/skills/questoes-cesgranrio/SKILL.md`
- `.claude/skills/simulados/SKILL.md`

---

## 1. Objetivo

Estabelecer critérios obrigatórios para planejamento, montagem, revisão, aplicação, correção e avaliação dos simulados do projeto.

Todo simulado deverá atender a critérios de:

1. Fidelidade à estrutura da prova;
2. Aderência ao edital;
3. Qualidade das questões;
4. Equilíbrio pedagógico;
5. Correção do gabarito;
6. Consistência do tempo de aplicação;
7. Integridade da aplicação;
8. Precisão dos resultados;
9. Utilidade dos relatórios;
10. Integração com o planejamento de estudos.

**Regra fundamental:** um simulado somente poderá ser considerado válido quando sua composição, suas questões, seu gabarito e seus critérios de avaliação tiverem sido verificados.

---

## 2. Identificação do simulado

Todo simulado deverá possuir identificação única e metadados.

| Campo | Descrição |
|---|---|
| `id` | Identificador único |
| `titulo` | Nome do simulado |
| `tipo` | Diagnóstico, módulo, específico, completo ou revisão |
| `data_criacao` | Data de criação |
| `data_aplicacao` | Data da realização |
| `quantidade_questoes` | Total de questões |
| `tempo_limite` | Duração configurada |
| `status` | Situação de validação |
| `versao` | Versão do simulado |
| `questoes` | IDs das questões utilizadas |
| `gabarito` | Referência ao gabarito |
| `resultado` | Resultado da aplicação, quando realizado |

### 2.1. Tipos de simulado

| Tipo | Composição | Objetivo |
|---|---|---|
| Diagnóstico | Configurável | Identificar conhecimento inicial |
| Por assunto | Configurável | Avaliar um tópico específico |
| Por módulo | Configurável | Avaliar um módulo completo |
| Conhecimentos específicos | 50 questões | Treinar a parte específica |
| Completo | 70 questões | Reproduzir a estrutura geral da prova |
| Revisão | Configurável | Reavaliar conteúdos anteriores |

Os simulados de quantidade configurável deverão informar claramente sua composição.

---

## 3. Estrutura oficial da prova

O simulado completo deverá respeitar a estrutura prevista para a seleção:

| Área | Quantidade |
|---|---:|
| Conhecimentos específicos | 50 |
| Língua Portuguesa | 10 |
| Língua Inglesa | 10 |
| **Total** | **70** |

Todas as questões deverão apresentar cinco alternativas, identificadas de A a E.

### 3.1. Checklist da estrutura

```text
[ ] O simulado completo possui 70 questões?
[ ] Existem 50 questões de conhecimentos específicos?
[ ] Existem 10 questões de Língua Portuguesa?
[ ] Existem 10 questões de Língua Inglesa?
[ ] Todas as questões possuem alternativas A-E?
[ ] Não existem questões duplicadas?
[ ] Todas as questões possuem gabarito?
[ ] A composição corresponde à estrutura oficial conferida?
```

### 3.2. Distribuição dos conhecimentos específicos

A distribuição das 50 questões entre os nove módulos não deverá ser apresentada como distribuição oficial sem comprovação documental.

Para simulados pedagógicos:

- A distribuição poderá ser configurada;
- A configuração deverá ser identificada como pedagógica;
- A seleção poderá considerar prioridades e desempenho;
- A cobertura deverá ser monitorada;
- Não excluir assuntos obrigatórios por baixa prioridade.

### 3.3. Informações dependentes de confirmação

Os seguintes parâmetros deverão ser conferidos diretamente no edital antes de serem utilizados:

- Duração oficial da prova;
- Pontuação por questão;
- Pesos das áreas;
- Critérios mínimos de aprovação;
- Critérios eliminatórios;
- Regras de classificação;
- Critérios de desempate;
- Tratamento de questões anuladas.

Não inventar ou presumir esses parâmetros.

---

## 4. Checklist de seleção das questões

<escape>```text
[ ] Todas as questões possuem IDs válidos?
[ ] Todas estão com status VALIDADA?
[ ] As questões estão associadas ao edital?
[ ] As questões possuem gabarito conferido?
[ ] As questões possuem justificativas?
[ ] A origem está identificada?
[ ] A dificuldade está registrada?
[ ] A seleção está adequada ao objetivo do simulado?
[ ] Não existem duplicidades?
[ ] Não existem questões bloqueadas ou desatualizadas?
```</escape>

### Regras

1. Utilizar prioritariamente questões validadas.
2. Não incluir questões com gabarito duvidoso.
3. Não utilizar questões oficialmente anuladas como questões regulares de avaliação.
4. Não misturar questões oficiais e autorais sem identificação de origem.
5. Registrar todos os IDs utilizados.
6. Evitar repetição excessiva de questões entre simulados consecutivos.
7. Permitir reutilização quando houver objetivo pedagógico explícito.

Questões em revisão poderão aparecer apenas em ambientes de teste claramente identificados.

---

## 5. Checklist de cobertura do edital

<escape>```text
[ ] O simulado está associado a itens identificáveis da matriz?
[ ] A cobertura por módulo foi calculada?
[ ] A cobertura por assunto foi calculada?
[ ] Existem assuntos obrigatórios negligenciados?
[ ] A composição está coerente com o objetivo do simulado?
[ ] A seleção não privilegia indevidamente apenas assuntos já dominados?
[ ] As lacunas de cobertura estão identificadas?
```</escape>

### Regras de cobertura

A cobertura deverá ser analisada em três dimensões:

1. **Cobertura da prova:** quais assuntos aparecem no simulado.
2. **Cobertura acumulada:** quais assuntos já foram avaliados em simulados anteriores.
3. **Cobertura do edital:** quais assuntos ainda não possuem questões suficientes para avaliação.

A cobertura de um simulado não representa, isoladamente, a cobertura integral do edital.

---

## 6. Checklist de equilíbrio pedagógico

<escape>```text
[ ] Existe variedade de assuntos?
[ ] Existe variedade de níveis de dificuldade?
[ ] Existem questões de reconhecimento e compreensão?
[ ] Existem questões de aplicação?
[ ] Existem questões de análise e interpretação?
[ ] A complexidade é adequada ao tipo de simulado?
[ ] O conjunto evita concentração injustificada em um único assunto?
[ ] A seleção considera as prioridades de estudo?
```</escape>

### Critérios

O equilíbrio deverá considerar:

- Escopo do edital;
- Objetivo do simulado;
- Desempenho individual;
- Prioridades de estudo;
- Histórico de questões utilizadas;
- Evidências disponíveis sobre provas anteriores.

Não estabelecer uma distribuição fixa de dificuldade ou habilidade como se fosse uma regra oficial.

### Simulados diagnósticos

Deverão privilegiar a identificação de lacunas.

### Simulados de revisão

Deverão incluir conteúdos já estudados, erros anteriores e assuntos com revisão programada.

### Simulados completos

Deverão respeitar a estrutura oficial e buscar variedade compatível com o conjunto de conteúdos.

---

## 7. Checklist de qualidade técnica

<escape>```text
[ ] Todas as questões foram revisadas?
[ ] Os enunciados estão completos?
[ ] As alternativas estão corretas?
[ ] Os gabaritos foram conferidos?
[ ] Não existem questões ambíguas?
[ ] Não existem alternativas duplicadas?
[ ] Os comentários correspondem às questões?
[ ] As referências estão preservadas?
[ ] As questões oficiais mantêm sua identificação original?
[ ] Questões adaptadas e autorais estão identificadas?
```</escape>

A validação deverá seguir integralmente:

`docs/qualidade/checklist-questoes.md`

Não considerar um simulado validado apenas porque suas questões individuais já existem no banco. A montagem também deverá ser revisada para identificar problemas de duplicidade, cobertura e composição.

---

## 8. Checklist de aplicação

<escape>```text
[ ] O simulado apresenta instruções claras?
[ ] A quantidade de questões está correta?
[ ] A numeração está sequencial?
[ ] Todas as alternativas são exibidas?
[ ] A navegação entre questões funciona?
[ ] É possível marcar e alterar respostas?
[ ] As questões não revelam o gabarito antes do encerramento?
[ ] O cronômetro funciona corretamente?
[ ] O tempo restante é exibido?
[ ] O progresso da prova é apresentado?
[ ] As respostas são preservadas durante a aplicação?
[ ] O encerramento funciona corretamente?
[ ] A aplicação pode ser finalizada conforme as regras configuradas?
```</escape>

### Requisitos de experiência

A aplicação deverá permitir:

- Navegar entre questões;
- Marcar alternativas;
- Alterar respostas;
- Identificar questões respondidas;
- Identificar questões pendentes;
- Visualizar o progresso;
- Consultar o tempo restante;
- Finalizar o simulado;
- Confirmar o encerramento quando houver questões pendentes.

A interface deverá funcionar em desktop e dispositivos móveis.

---

## 9. Checklist do cronômetro e controle de tempo

<escape>```text
[ ] A duração foi configurada corretamente?
[ ] O cronômetro inicia no momento adequado?
[ ] O tempo restante é atualizado?
[ ] O cronômetro não reinicia ao navegar entre questões?
[ ] A aplicação preserva o tempo durante mudanças de página internas?
[ ] O encerramento por tempo esgotado funciona?
[ ] O tempo de aplicação é registrado?
[ ] O tempo utilizado pode ser consultado no relatório?
```</escape>

### Regras técnicas

- O tempo deverá ser calculado a partir de registros temporais consistentes, não apenas pela contagem de decrementos em intervalos.
- A navegação não poderá reiniciar o cronômetro.
- A atualização da página não deverá apagar uma aplicação em andamento quando houver suporte técnico para recuperação local.
- O encerramento por tempo esgotado deverá preservar as respostas já registradas.
- O sistema deverá distinguir simulado finalizado pelo usuário e encerrado pelo tempo.

A duração oficial deverá ser configurada após conferência do edital.

---

## 10. Checklist de integridade dos resultados

<escape>```text
[ ] Todas as respostas foram registradas?
[ ] As respostas foram associadas aos IDs corretos?
[ ] O gabarito utilizado corresponde à versão do simulado?
[ ] A correção foi executada corretamente?
[ ] Questões anuladas foram tratadas conforme configuração?
[ ] Questões sem resposta foram identificadas?
[ ] A pontuação foi calculada corretamente?
[ ] O resultado foi salvo?
[ ] O histórico anterior foi preservado?
```</escape>

### Regras

- Preservar as respostas originais do estudante.
- Registrar a versão do gabarito utilizada.
- Não alterar resultados históricos silenciosamente.
- Se uma questão tiver seu gabarito atualizado, registrar o efeito da atualização.
- Diferenciar questão não respondida de questão respondida incorretamente.
- Não aplicar critérios eliminatórios sem confirmação documental.

---

## 11. Checklist de correção e gabarito comentado

<escape>```text
[ ] O gabarito está associado à versão correta?
[ ] A correção foi realizada automaticamente de forma consistente?
[ ] Os acertos foram contabilizados corretamente?
[ ] Os erros foram identificados?
[ ] As questões não respondidas foram contabilizadas separadamente?
[ ] Os comentários estão disponíveis?
[ ] A justificativa da alternativa correta está presente?
[ ] As alternativas incorretas estão explicadas?
[ ] A origem da questão está identificada?
```</escape>

### Apresentação do resultado

Após o encerramento, o estudante deverá poder consultar:

- Alternativa selecionada;
- Gabarito;
- Resultado individual;
- Comentário;
- Origem da questão;
- Módulo;
- Assunto;
- Item do edital.

A correção deverá preservar a distinção entre questões oficiais, adaptadas e autorais.

---

## 12. Checklist dos relatórios de desempenho

<escape>```text
[ ] O percentual de acertos está correto?
[ ] O percentual de erros está correto?
[ ] As questões não respondidas estão separadas?
[ ] O aproveitamento geral está disponível?
[ ] O aproveitamento por área está disponível?
[ ] O aproveitamento por módulo está disponível?
[ ] O aproveitamento por assunto está disponível?
[ ] O tempo total está registrado?
[ ] O tempo médio por questão está disponível?
[ ] A evolução histórica pode ser consultada?
[ ] Os resultados permitem identificar lacunas?
```</escape>

### Indicadores mínimos

| Indicador | Finalidade |
|---|---|
| Total de questões | Dimensão do simulado |
| Acertos | Quantidade correta |
| Erros | Quantidade incorreta |
| Não respondidas | Questões sem resposta |
| Aproveitamento geral | Percentual de acertos |
| Aproveitamento por área | Desempenho por grupo |
| Aproveitamento por módulo | Desempenho nos conhecimentos específicos |
| Aproveitamento por assunto | Identificação de lacunas |
| Tempo total | Controle de duração |
| Tempo médio por questão | Ritmo de resolução |
| Evolução | Comparação histórica |

### Fórmula de aproveitamento

Quando não houver regra oficial de pontuação diferente, utilizar como indicador pedagógico:

\[
\text{Aproveitamento} =
\frac{\text{Acertos}}{\text{Questões válidas respondidas ou aplicáveis}}
\times 100
\]

A fórmula deverá ser configurada de acordo com o tratamento de questões anuladas e regras oficiais confirmadas.

Não confundir percentual de acertos com nota oficial.

---

## 13. Checklist de análise dos erros

<escape>```text
[ ] Os erros foram classificados?
[ ] Os erros conceituais foram identificados?
[ ] Os erros interpretativos foram identificados?
[ ] Os erros de aplicação foram identificados?
[ ] Os erros procedimentais foram identificados?
[ ] Os erros por desatenção foram identificados?
[ ] As questões não respondidas foram analisadas?
[ ] Os assuntos com erros recorrentes foram identificados?
[ ] As ações corretivas foram propostas?
```</escape>

### Classificação

| Tipo | Tratamento recomendado |
|---|---|
| Conceitual | Retomar a teoria |
| Interpretativo | Treinar interpretação de enunciados |
| Aplicação | Resolver questões adicionais |
| Procedimental | Revisar etapas e métodos |
| Desatenção | Treinar leitura e conferência |
| Tempo | Treinar ritmo de resolução |

O sistema deverá permitir enviar questões incorretas para o caderno de erros.

O estudante deverá poder revisar a questão posteriormente, sem perder o resultado original do simulado.

---

## 14. Integração com o planejamento de estudos

<escape>```text
[ ] Os resultados atualizam o histórico?
[ ] Os assuntos com baixo desempenho são identificados?
[ ] As prioridades podem ser recalculadas?
[ ] As revisões podem ser programadas?
[ ] Os erros podem gerar atividades de estudo?
[ ] A cobertura do edital é atualizada?
[ ] O plano semanal pode ser ajustado?
```</escape>

### Regras de replanejamento

Após cada simulado:

1. Identificar os assuntos com maior quantidade de erros;
2. Identificar os erros recorrentes;
3. Comparar desempenho com avaliações anteriores;
4. Verificar assuntos ainda não avaliados;
5. Atualizar prioridades;
6. Programar revisões;
7. Definir ações corretivas;
8. Ajustar o próximo ciclo de estudos.

O sistema deverá utilizar os critérios de `docs/estrategia/prioridades.md`.

As alterações de prioridade deverão ser registradas para permitir comparação histórica.

Não reduzir automaticamente a prioridade de um assunto obrigatório porque o estudante obteve bom resultado em uma única avaliação.

---

## 15. Comparabilidade entre simulados

<escape>```text
[ ] Os simulados comparados possuem objetivos compatíveis?
[ ] A quantidade de questões está registrada?
[ ] A composição por área está disponível?
[ ] A dificuldade estimada está registrada?
[ ] A origem das questões está identificada?
[ ] A repetição de questões está identificada?
[ ] O tempo de aplicação está disponível?
[ ] A comparação considera diferenças de composição?
```</escape>

### Regras

A comparação deverá considerar:

- Quantidade de questões;
- Composição;
- Dificuldade estimada;
- Assuntos avaliados;
- Origem das questões;
- Reutilização de questões;
- Condições de aplicação.

Não concluir que houve evolução ou queda de conhecimento apenas pela comparação de percentuais de simulados com composições muito diferentes.

Quando possível, utilizar conjuntos de questões comparáveis e indicadores por assunto.

---

## 16. Histórico e persistência

<escape>```text
[ ] Cada aplicação gera um registro individual?
[ ] O resultado pode ser consultado posteriormente?
[ ] O histórico não é sobrescrito?
[ ] As respostas originais são preservadas?
[ ] A versão do simulado está registrada?
[ ] A versão do gabarito está registrada?
[ ] Os dados permanecem após atualizar a página?
[ ] Existe opção de exportar os resultados?
[ ] Existe opção de importar backup?
```</escape>

### Requisitos técnicos

A plataforma deverá utilizar armazenamento local, sem depender de backend para funcionalidades essenciais.

Implementar:

- Identificador único por aplicação;
- Data e hora de início;
- Data e hora de encerramento;
- Respostas;
- Tempo utilizado;
- Resultado;
- Versão do simulado;
- Versão do gabarito;
- Histórico de alterações relevantes.

Os dados deverão ser exportáveis e importáveis.

A limpeza dos dados do navegador poderá apagar o histórico local. Essa limitação deverá ser comunicada ao estudante.

---

## 17. Critérios de reprovação

| Código | Problema | Gravidade |
|---|---|---|
| S01 | Estrutura incompatível com a prova oficial | Crítica |
| S02 | Questão com gabarito incorreto | Crítica |
| S03 | Questões duplicadas indevidamente | Alta |
| S04 | Questões fora do escopo sem identificação | Alta |
| S05 | Quantidade de questões incorreta | Alta |
| S06 | Erro no cálculo de resultados | Crítica |
| S07 | Cronômetro inconsistente | Alta |
| S08 | Respostas não preservadas | Crítica |
| S09 | Comentários incorretos | Alta |
| S10 | Composição não identificada | Média |
| S11 | Relatório incompleto | Média |
| S12 | Histórico sobrescrito | Alta |

### Tratamento

- Crítica: bloquear publicação e aplicação.
- Alta: corrigir antes da validação.
- Média: corrigir antes da publicação ou documentar a pendência.
- Baixa: registrar e programar correção.

---

## 18. Status de validação

| Status | Significado |
|---|---|
| `RASCUNHO` | Em elaboração |
| `EM_REVISAO` | Em validação |
| `PENDENTE` | Possui problemas |
| `VALIDADO` | Aprovado para aplicação |
| `PUBLICADO` | Disponível na plataforma |
| `BLOQUEADO` | Não pode ser aplicado |
| `DESATUALIZADO` | Necessita atualização |

Um simulado somente poderá receber status `VALIDADO` quando:

1. Sua composição estiver correta;
2. Todas as questões estiverem validadas;
3. O gabarito estiver conferido;
4. O tempo estiver configurado corretamente;
5. A correção estiver testada;
6. Os relatórios estiverem funcionando;
7. A persistência estiver validada;
8. Não existirem problemas críticos ou altos.

---

## 19. Testes funcionais da plataforma

Antes de disponibilizar um simulado, realizar testes:

```text
[ ] Iniciar simulado.
[ ] Navegar para a próxima questão.
[ ] Retornar à questão anterior.
[ ] Selecionar alternativa.
[ ] Alterar alternativa.
[ ] Deixar questão sem resposta.
[ ] Consultar progresso.
[ ] Atualizar página durante a aplicação.
[ ] Verificar preservação das respostas.
[ ] Verificar continuidade do cronômetro.
[ ] Encerrar manualmente.
[ ] Encerrar por tempo esgotado.
[ ] Confirmar cálculo de acertos.
[ ] Confirmar cálculo de erros.
[ ] Confirmar questões não respondidas.
[ ] Consultar comentários.
[ ] Consultar relatório.
[ ] Verificar histórico.
[ ] Exportar resultado.
[ ] Importar resultado.
```

Os testes deverão utilizar dados controlados e resultados esperados previamente definidos.

Não utilizar resultados reais de estudantes para validar cálculos sem autorização.

---

## 20. Registro de revisão

Cada simulado revisado deverá possuir um registro:

```text
ID do simulado:
Título:
Tipo:
Versão:
Quantidade de questões:

Estrutura conferida:
Questões validadas:
Gabarito conferido:
Tempo conferido:
Correção testada:
Relatórios testados:
Persistência testada:

Problemas encontrados:
Ações corretivas:

Resultado:
Revisor:
Data:
```

---

## 21. Instruções para o Claude Code

Antes de criar, revisar ou publicar um simulado:

1. Ler este checklist.
2. Consultar a Skill `simulados`.
3. Consultar a Skill `questoes-cesgranrio`.
4. Consultar a estrutura oficial da prova.
5. Consultar a matriz de conteúdo.
6. Selecionar somente questões elegíveis.
7. Validar a composição.
8. Conferir a distribuição por área.
9. Verificar duplicidades.
10. Conferir gabaritos.
11. Testar a aplicação.
12. Testar o cronômetro.
13. Validar os cálculos.
14. Validar os relatórios.
15. Validar a persistência.
16. Registrar o resultado da revisão.

### Proibições

- Não inventar a distribuição oficial das questões específicas.
- Não inventar duração ou critérios de aprovação.
- Não utilizar questões bloqueadas.
- Não ignorar questões anuladas.
- Não alterar resultados históricos silenciosamente.
- Não publicar simulados com gabaritos duvidosos.
- Não apresentar percentual de acertos como nota oficial sem base documental.
- Não comparar simulados incompatíveis sem ressalvas.

---

## 22. Princípio final

O simulado deverá funcionar como instrumento de avaliação e aprendizagem.

Sua qualidade não depende apenas da quantidade de questões, mas da fidelidade à prova, da confiabilidade das respostas, da consistência da aplicação e da capacidade de identificar lacunas de conhecimento.

**Um simulado válido não apenas mede o desempenho: ele produz informações confiáveis para orientar a próxima etapa da preparação.**