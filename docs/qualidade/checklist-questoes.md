# Checklist de Qualidade — Banco de Questões
## Transpetro 2026.4 — Ênfase 5: Análise de Sistemas: Processos de Negócios

**Arquivo:** `docs/qualidade/checklist-questoes.md`

**Documentos relacionados:**
- `CLAUDE.md`
- `docs/edital/matriz-conteudo.md`
- `docs/edital/estrutura-prova.md`
- `docs/edital/controle-cobertura.md`
- `docs/estrategia/estrategia-cesgranrio.md`
- `docs/estrategia/prioridades.md`
- `.claude/skills/questoes-cesgranrio/SKILL.md`
- `.claude/skills/simulados/SKILL.md`

---

## 1. Objetivo

Estabelecer critérios obrigatórios para criação, identificação, revisão, validação e publicação de questões no banco de questões do projeto.

Toda questão deverá atender a critérios de:

1. Autenticidade e identificação da origem;
2. Aderência ao edital;
3. Correção técnica;
4. Clareza do enunciado;
5. Qualidade das alternativas;
6. Unicidade e defensabilidade do gabarito;
7. Qualidade da justificativa;
8. Adequação ao padrão de prova;
9. Rastreabilidade;
10. Integração com simulados e plataforma.

**Regra fundamental:** nenhuma questão poderá ser apresentada como oficial sem comprovação documental de sua origem.

---

## 2. Classificação das questões

Toda questão deverá pertencer a uma das três categorias.

### 2.1. Questão oficial — OFI

Questão efetivamente aplicada em concurso ou processo seletivo, com origem verificável.

Identificador:

`OFI-000001`

Critérios obrigatórios:

- Banca organizadora identificada;
- Concurso ou seleção identificado;
- Cargo ou ênfase identificado;
- Ano da aplicação;
- Identificação da prova;
- Número da questão;
- Fonte verificável;
- Gabarito oficial localizado, quando disponível.

Não classificar como oficial uma questão apenas porque apresenta características semelhantes às da Cesgranrio.

### 2.2. Questão adaptada — ADP

Questão baseada em uma questão original identificável, mas cujo enunciado, alternativas ou contexto foram modificados.

Identificador:

`ADP-000001`

Critérios obrigatórios:

- Identificação da questão original;
- Registro da fonte;
- Descrição das alterações;
- Preservação da rastreabilidade;
- Revisão do novo gabarito.

Uma questão adaptada não deverá ser apresentada como reprodução integral da questão original.

### 2.3. Questão autoral — AUT

Questão criada pelo projeto, sem origem em uma questão específica.

Identificador:

`AUT-000001`

Identificação obrigatória:

**Questão autoral — estilo Cesgranrio.**

A classificação indica uma referência de estilo, não uma questão produzida ou aprovada pela banca.

---

## 3. Identificação e metadados

Toda questão deverá possuir os metadados necessários para consulta, filtragem, análise e auditoria.

### 3.1. Campos obrigatórios

| Campo | Descrição |
|---|---|
| `id` | Identificador único |
| `tipo` | OFI, ADP ou AUT |
| `modulo` | Um dos nove módulos |
| `assunto` | Assunto principal |
| `item_edital` | Item correspondente na matriz |
| `enunciado` | Texto integral da questão |
| `alternativas` | Cinco alternativas A-E |
| `gabarito` | Alternativa correta |
| `justificativa` | Explicação do gabarito |
| `dificuldade` | Fácil, média ou difícil |
| `status` | Situação da validação |
| `data_revisao` | Data da última revisão |

### 3.2. Campos adicionais para questões oficiais

- Banca;
- Concurso;
- Cargo ou ênfase;
- Ano;
- Identificação da prova;
- Número original da questão;
- Link ou referência documental;
- Gabarito preliminar, quando disponível;
- Gabarito definitivo;
- Situação de recurso ou anulação, quando aplicável.

### 3.3. Campos adicionais para questões adaptadas

- ID da questão original;
- Identificação da prova original;
- Fonte original;
- Alterações realizadas;
- Justificativa da adaptação;
- Novo gabarito validado.

### 3.4. Campos adicionais para questões autorais

- Autor ou responsável pela produção;
- Data de criação;
- Objetivo pedagógico;
- Conceito avaliado;
- Justificativa da elaboração;
- Referências técnicas utilizadas.

---

## 4. Checklist de autenticidade e procedência

<escape>```text
[ ] A questão está corretamente classificada?
[ ] A origem foi identificada?
[ ] A fonte pode ser consultada?
[ ] Os dados da prova foram verificados?
[ ] O número original da questão foi confirmado?
[ ] O enunciado corresponde à fonte?
[ ] As alternativas correspondem à fonte?
[ ] O gabarito foi conferido?
[ ] Eventuais alterações foram documentadas?
[ ] A situação de anulação ou alteração de gabarito foi verificada?
```</escape>

### Regras de autenticidade

- Não inventar questões oficiais.
- Não atribuir questões autorais à Cesgranrio.
- Não atribuir questões de outras bancas à Cesgranrio.
- Não inventar números de provas ou questões.
- Não inventar links ou referências.
- Não utilizar gabarito de sites secundários como se fosse necessariamente definitivo.
- Diferenciar gabarito preliminar de definitivo.
- Registrar quando a fonte original não estiver disponível.

Se não for possível comprovar a origem, a questão não poderá receber classificação `OFI`.

---

## 5. Checklist de aderência ao edital

<escape>```text
[ ] A questão está relacionada a um item da matriz?
[ ] O item do edital foi identificado corretamente?
[ ] O assunto pertence à Ênfase 5?
[ ] O conceito avaliado está dentro do escopo?
[ ] A questão exige conhecimento compatível com o edital?
[ ] Não depende de conteúdo externo não justificado?
[ ] Não utiliza conteúdo de outra ênfase indevidamente?
[ ] O nível de profundidade é adequado?
[ ] A questão está associada ao módulo correto?
```</escape>

### Regras

1. Toda questão deverá estar associada a pelo menos um item do edital.
2. Questões que envolvam mais de um assunto poderão ter um assunto principal e assuntos secundários.
3. O assunto principal deverá representar o conhecimento central necessário para resolver a questão.
4. Assuntos complementares deverão ser identificados.
5. Questões fora do escopo poderão ser armazenadas separadamente, mas não deverão integrar indicadores de cobertura obrigatória.

A distribuição das questões específicas deverá ser baseada em evidências ou em uma configuração pedagógica explicitamente identificada. Não inventar distribuição oficial por módulo.

---

## 6. Checklist de qualidade do enunciado

<escape>```text
[ ] O enunciado está completo?
[ ] A pergunta está claramente formulada?
[ ] O comando está explícito?
[ ] O contexto é necessário e pertinente?
[ ] Os dados apresentados são suficientes?
[ ] A terminologia é tecnicamente correta?
[ ] Não existem ambiguidades relevantes?
[ ] Não existem informações contraditórias?
[ ] Não existem erros gramaticais?
[ ] A questão pode ser compreendida sem consultar outro material?
```</escape>

### Critérios adicionais

O enunciado deverá:

- Apresentar contexto somente quando necessário;
- Evitar informações irrelevantes;
- Utilizar termos técnicos com precisão;
- Indicar claramente o que está sendo solicitado;
- Evitar dupla interpretação;
- Não depender de pressupostos não informados;
- Preservar o texto original nas questões oficiais, respeitando a identificação da fonte.

Nas questões autorais, evitar enunciados excessivamente longos quando uma formulação mais objetiva for suficiente.

---

## 7. Checklist de qualidade das alternativas

As questões deverão possuir cinco alternativas identificadas de A a E, conforme o formato previsto para a prova.

<escape>```text
[ ] Existem exatamente cinco alternativas?
[ ] Todas as alternativas estão identificadas de A a E?
[ ] Todas são coerentes com o enunciado?
[ ] Existe apenas uma resposta defensável?
[ ] Os distratores são plausíveis?
[ ] As alternativas possuem estrutura comparável?
[ ] Não existem pistas involuntárias?
[ ] Não há alternativas duplicadas?
[ ] Não há alternativas parcialmente corretas que tornem a questão ambígua?
[ ] A alternativa correta não se destaca apenas pelo tamanho ou detalhamento?
```</escape>

### Qualidade dos distratores

Os distratores deverão representar erros conceituais plausíveis, como:

- Confusão entre conceitos semelhantes;
- Troca de etapas;
- Aplicação incorreta de uma regra;
- Generalização indevida;
- Interpretação incompleta;
- Confusão entre características de tecnologias;
- Uso inadequado de terminologia.

Evitar alternativas absurdas ou facilmente descartáveis sem conhecimento do assunto.

Não criar distratores com erros técnicos que possam induzir a uma compreensão incorreta do conteúdo.

### Alternativas negativas

Quando forem utilizadas expressões como "INCORRETA", "EXCETO" ou "NÃO", o comando deverá estar visualmente claro.

Evitar múltiplas negativas que dificultem a interpretação sem acrescentar valor à avaliação.

---

## 8. Checklist de correção técnica e gabarito

<escape>```text
[ ] O gabarito foi verificado independentemente?
[ ] A alternativa indicada está tecnicamente correta?
[ ] As demais alternativas foram analisadas?
[ ] Existe apenas uma alternativa defensável?
[ ] A resposta está de acordo com referências verificáveis?
[ ] Não existem divergências técnicas relevantes?
[ ] O gabarito está atualizado quando aplicável?
[ ] A justificativa corresponde à questão apresentada?
```</escape>

### Regra de validação independente

Para questões autorais e adaptadas:

1. Resolver a questão sem consultar o gabarito proposto;
2. Identificar a alternativa correta;
3. Verificar todas as alternativas;
4. Consultar fontes técnicas;
5. Comparar o resultado com o gabarito registrado;
6. Corrigir ou rejeitar a questão quando necessário.

Sempre que possível, utilizar uma segunda revisão independente para questões complexas ou com risco de ambiguidade.

### Questões oficiais

O gabarito deverá respeitar a situação documental da prova:

- Preliminar;
- Definitivo;
- Alterado após recurso;
- Anulado.

Não substituir silenciosamente o gabarito original. Preservar o histórico e identificar qual gabarito está sendo utilizado para fins de estudo.

---

## 9. Checklist dos comentários e justificativas

Toda questão disponibilizada para estudo deverá possuir explicação suficiente para ensinar o conceito avaliado.

<escape>```text
[ ] O comentário explica por que o gabarito está correto?
[ ] A justificativa apresenta o conceito central?
[ ] As alternativas incorretas são analisadas?
[ ] Os erros conceituais dos distratores são explicados?
[ ] A terminologia está correta?
[ ] A explicação é coerente com o material teórico?
[ ] As referências técnicas estão identificadas quando necessárias?
[ ] O comentário evita explicações vagas?
[ ] O comentário não apresenta informações contraditórias?
```</escape>

### Estrutura recomendada

**1. Gabarito**

Identificar a alternativa correta.

**2. Fundamentação**

Explicar o conceito necessário para resolver a questão.

**3. Análise das alternativas**

Explicar individualmente por que cada alternativa está correta ou incorreta.

**4. Ponto de atenção**

Destacar uma confusão conceitual, regra ou interpretação importante.

**5. Referência**

Indicar a fonte técnica quando necessária.

Não utilizar apenas expressões como "alternativa correta conforme a teoria" ou "as demais estão incorretas".

O comentário deverá permitir que o estudante compreenda o erro mesmo sem consultar imediatamente a apostila.

---

## 10. Checklist de adequação à Cesgranrio

A adequação ao estilo da banca deverá ser avaliada com base em provas e questões verificáveis.

<escape>```text
[ ] A questão possui características compatíveis com as evidências analisadas?
[ ] O tipo de raciocínio exigido está identificado?
[ ] O nível de contextualização é adequado?
[ ] Os distratores possuem plausibilidade?
[ ] A questão avalia conhecimento efetivo?
[ ] A dificuldade foi atribuída de maneira justificada?
[ ] A classificação de estilo não está sendo confundida com autoria oficial?
```</escape>

### Análise de características

Quando houver evidência suficiente, registrar:

- Tipo de enunciado;
- Habilidade cognitiva;
- Nível de contextualização;
- Complexidade técnica;
- Tipo de distrator;
- Necessidade de interpretação;
- Integração entre assuntos.

### Limitações

- Não afirmar que uma característica é recorrente sem análise de provas.
- Não atribuir frequência sem denominador e fonte.
- Não afirmar que uma questão autoral reproduz exatamente o padrão da banca.
- Não utilizar questões de outras áreas para inferir automaticamente tendências de TI.
- Não prever a cobrança futura com base em amostras insuficientes.

---

## 11. Classificação de dificuldade

Cada questão deverá receber uma classificação:

| Nível | Critério |
|---|---|
| Fácil | Exige reconhecimento ou compreensão direta |
| Média | Exige interpretação, comparação ou aplicação |
| Difícil | Exige análise, integração de conceitos ou raciocínio mais complexo |

A dificuldade deverá considerar o conhecimento necessário para resolver a questão, e não apenas o tamanho do enunciado.

A classificação deverá ser revista quando o desempenho dos estudantes indicar discrepância relevante.

Registrar separadamente:

- Dificuldade estimada na elaboração;
- Dificuldade observada no desempenho dos usuários.

Não tratar essas duas medidas como equivalentes.

---

## 12. Checklist de qualidade pedagógica

<escape>```text
[ ] A questão avalia um objetivo de aprendizagem identificável?
[ ] O assunto está bem delimitado?
[ ] A questão contribui para a preparação?
[ ] O nível de dificuldade é apropriado?
[ ] O comentário ensina o conceito?
[ ] A questão não é redundante sem justificativa?
[ ] A questão complementa o banco existente?
[ ] A questão permite identificar lacunas de conhecimento?
```</escape>

### Distribuição pedagógica

O banco deverá buscar variedade entre:

- Reconhecimento de conceitos;
- Compreensão;
- Comparação;
- Interpretação;
- Aplicação;
- Análise;
- Integração de assuntos.

A variedade deverá ser planejada sem inventar uma distribuição oficial de habilidades ou módulos.

---

## 13. Duplicidade e controle de versões

<escape>```text
[ ] O ID é único?
[ ] A questão já existe no banco?
[ ] Existe outra questão com enunciado semelhante?
[ ] Existe outra questão que avalia exatamente o mesmo conceito?
[ ] A duplicidade é intencional?
[ ] As alterações foram registradas?
[ ] O histórico de revisão foi preservado?
```</escape>

### Regras

- Não duplicar questões apenas para aumentar o tamanho do banco.
- Questões semelhantes poderão coexistir quando avaliarem habilidades diferentes.
- Questões oficiais e suas adaptações deverão manter relacionamento explícito.
- Alterações no enunciado ou gabarito deverão gerar histórico.
- Questões anuladas deverão permanecer identificadas, não desaparecer silenciosamente.

---

## 14. Checklist de integração com simulados

<escape>```text
[ ] A questão possui metadados suficientes para seleção?
[ ] O módulo está corretamente identificado?
[ ] O item do edital está associado?
[ ] A dificuldade está registrada?
[ ] A origem está identificada?
[ ] A questão possui gabarito validado?
[ ] A questão possui comentário?
[ ] A questão pode ser exibida corretamente na plataforma?
[ ] A questão não está anulada ou bloqueada para uso?
```</escape>

Questões com problemas de validação não deverão integrar simulados oficiais do projeto.

Questões em revisão poderão ser utilizadas somente em ambientes de teste, claramente identificados.

A montagem de simulados deverá seguir:

`.claude/skills/simulados/SKILL.md`

---

## 15. Checklist de integração com a plataforma

<escape>```text
[ ] O identificador é único?
[ ] Os metadados estão estruturados?
[ ] As alternativas estão organizadas corretamente?
[ ] O gabarito está associado à questão?
[ ] O comentário está disponível?
[ ] A origem é exibida ao estudante?
[ ] Os filtros por módulo e assunto funcionam?
[ ] A filtragem por dificuldade funciona?
[ ] A classificação por origem funciona?
[ ] O registro de respostas funciona?
[ ] O histórico de desempenho é preservado?
[ ] A questão funciona em dispositivos móveis?
```</escape>

A estrutura dos dados deverá ser compatível com o modelo JSON definido na Skill de questões e na Skill do site estático.

---

## 16. Modelo de registro de revisão

Cada questão revisada deverá possuir registro de validação.

```text
ID:
Tipo:
Módulo:
Assunto:
Item do edital:

Origem verificada:
Enunciado aprovado:
Alternativas aprovadas:
Gabarito aprovado:
Justificativa aprovada:
Dificuldade aprovada:

Problemas identificados:
Ações corretivas:

Resultado:
Revisor:
Data:
Próxima revisão:
```

---

## 17. Status de validação

Utilizar os seguintes status:

| Status | Significado |
|---|---|
| `RASCUNHO` | Questão em elaboração |
| `AGUARDANDO_REVISAO` | Aguardando validação |
| `EM_REVISAO` | Em processo de revisão |
| `PENDENTE` | Possui problema que impede aprovação |
| `VALIDADA` | Atende aos critérios obrigatórios |
| `BLOQUEADA` | Não pode ser utilizada |
| `ANULADA` | Questão oficialmente anulada, quando aplicável |
| `DESATUALIZADA` | Necessita revisão técnica ou documental |

### Regras

- Apenas questões `VALIDADA` poderão integrar o banco de questões regular.
- Questões oficiais anuladas deverão preservar sua identificação e situação.
- Questões com origem não comprovada não poderão receber status de oficial validada.
- Questões com gabarito duvidoso deverão permanecer bloqueadas.
- Questões desatualizadas deverão ser revisadas antes de novo uso.

---

## 18. Critérios de reprovação

| Código | Problema | Gravidade |
|---|---|---|
| Q01 | Origem oficial inventada | Crítica |
| Q02 | Gabarito tecnicamente incorreto | Crítica |
| Q03 | Mais de uma alternativa defensável | Crítica |
| Q04 | Questão sem relação com o edital | Alta |
| Q05 | Enunciado ambíguo | Alta |
| Q06 | Alternativas incompletas ou inconsistentes | Alta |
| Q07 | Justificativa incorreta | Alta |
| Q08 | Fonte não verificável | Alta |
| Q09 | Dificuldade inadequadamente classificada | Média |
| Q10 | Metadados incompletos | Média |
| Q11 | Duplicidade sem justificativa | Média |
| Q12 | Problema de formatação | Baixa/Média |

### Tratamento

- Crítica: bloquear imediatamente.
- Alta: corrigir antes da validação.
- Média: corrigir antes da publicação ou documentar a pendência.
- Baixa: registrar e programar correção.

Questões com problemas críticos ou altos não poderão ser utilizadas em simulados.

---

## 19. Critérios de aprovação

Uma questão será considerada `VALIDADA` quando:

1. Sua origem estiver corretamente identificada;
2. Estiver associada ao escopo do edital;
3. O enunciado estiver claro;
4. As alternativas estiverem completas;
5. Existir apenas uma resposta defensável;
6. O gabarito tiver sido verificado;
7. A justificativa estiver correta;
8. Os metadados obrigatórios estiverem preenchidos;
9. Não existirem problemas críticos ou altos;
10. Estiver pronta para integração com o banco e a plataforma.

Para questões oficiais, a validação deverá incluir a conferência documental da prova e do gabarito disponível.

Para questões adaptadas e autorais, deverá incluir resolução independente e revisão técnica.

---

## 20. Instruções para o Claude Code

Antes de criar ou revisar questões:

1. Ler este checklist.
2. Consultar `CLAUDE.md`.
3. Consultar a Skill `questoes-cesgranrio`.
4. Consultar a matriz de conteúdo.
5. Identificar o item do edital.
6. Verificar questões semelhantes existentes.
7. Produzir ou revisar a questão.
8. Validar o gabarito independentemente.
9. Revisar todas as alternativas.
10. Conferir as referências.
11. Registrar os metadados.
12. Atualizar o status.
13. Atualizar os indicadores do banco.
14. Informar as pendências.

### Proibições

- Não inventar questões oficiais.
- Não inventar fontes ou gabaritos.
- Não apresentar questões autorais como oficiais.
- Não criar alternativas ambíguas.
- Não validar questões sem conferir o gabarito.
- Não utilizar questões sem identificação de origem.
- Não considerar quantidade de questões como indicador isolado de qualidade.
- Não incluir questões bloqueadas em simulados.
- Não inventar estatísticas de incidência da banca.

---

## 21. Indicadores de qualidade do banco

A plataforma deverá permitir acompanhar:

| Indicador | Finalidade |
|---|---|
| Total de questões | Volume do banco |
| Questões oficiais | Quantidade com origem comprovada |
| Questões adaptadas | Quantidade derivada de originais |
| Questões autorais | Quantidade produzida pelo projeto |
| Questões validadas | Questões aprovadas |
| Questões pendentes | Questões em revisão ou correção |
| Questões bloqueadas | Questões indisponíveis |
| Questões anuladas | Questões oficialmente anuladas |
| Cobertura por módulo | Distribuição dos assuntos |
| Cobertura por item do edital | Identificação de lacunas |
| Distribuição por dificuldade | Equilíbrio pedagógico |

Os indicadores deverão distinguir volume, qualidade, procedência e cobertura.

Uma grande quantidade de questões não significa necessariamente um banco de boa qualidade.

---

## 22. Princípio final

O banco de questões deverá ser confiável, rastreável e pedagogicamente útil.

A autenticidade da origem, a correção do gabarito e a clareza da justificativa são requisitos essenciais.

**Uma questão só está pronta quando sua origem é conhecida, seu conteúdo é correto, seu gabarito é defensável e sua explicação permite aprender com ela.**