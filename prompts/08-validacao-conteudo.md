# 08 — VALIDAÇÃO TÉCNICA, DIDÁTICA E EDITORIAL DO CONTEÚDO

## Objetivo

Realizar uma auditoria abrangente dos materiais produzidos para o projeto Transpetro 2026.4 — Ênfase 5: Análise de Sistemas: Processos de Negócios.

O objetivo é verificar se os materiais estão:

- Corretos tecnicamente.
- Alinhados ao edital oficial.
- Fundamentados em fontes confiáveis.
- Didaticamente adequados.
- Consistentes entre si.
- Compatíveis com o padrão de exigência da Fundação Cesgranrio.
- Adequados para utilização em questões, simulados, flashcards e NotebookLM.

A validação deverá abranger teoria, questões, gabaritos, simulados, resumos, mapas mentais, podcasts e flashcards.

**Princípio central:** nenhum material deverá ser considerado validado apenas porque foi produzido. A validação precisa ser independente, documentada e rastreável.

---

## 1. Preparação obrigatória

Antes de iniciar, leia:

- `CLAUDE.md`
- `PROMPT-MESTRE.md`
- Todas as Skills em `.claude/skills/`
- `docs/edital/anexo-IV-extraido.md`
- `docs/edital/matriz-conteudo.md`
- `docs/edital/estrutura-prova.md`
- `docs/edital/controle-cobertura.md`
- `docs/estrategia/estrategia-cesgranrio.md`
- `docs/estrategia/prioridades.md`
- `docs/estrategia/metodologia-estudo.md`
- Todos os checklists em `docs/qualidade/`

Consulte também os materiais produzidos nas etapas anteriores:

- `conteudo/`
- `banco-questoes/`
- `notebooklm/`
- `site/assets/data/`
- Documentação e relatórios de execução.

### Condições para iniciar

Confirme:

1. A auditoria do edital foi concluída.
2. A matriz de conteúdo foi aprovada.
3. Os materiais teóricos foram produzidos.
4. O banco de questões está organizado.
5. Os gabaritos possuem status de validação.
6. Os simulados estão identificados e rastreáveis.
7. Os materiais derivados possuem referência às fontes originais.

Se alguma etapa não estiver concluída, registre a pendência e delimite o escopo da auditoria.

Não considere arquivos inexistentes como aprovados.

---

## 2. Princípios de validação

A auditoria deverá obedecer aos seguintes princípios:

### 2.1 Fidelidade ao edital

O edital oficial é a referência para determinar o escopo da preparação.

Verifique se:

- Todos os itens aplicáveis estão contemplados.
- Não existem lacunas relevantes.
- Os assuntos estão associados aos itens corretos.
- Os materiais não extrapolam o conteúdo sem justificativa.
- Alterações e retificações foram consideradas.

Diferencie:

- Conteúdo expressamente previsto.
- Conteúdo necessário para compreender um tópico previsto.
- Aprofundamento complementar.
- Conteúdo fora do escopo.

### 2.2 Precisão técnica

Verifique:

- Definições.
- Terminologia.
- Classificações.
- Fórmulas.
- Processos.
- Normas.
- Frameworks.
- Exemplos.
- Exceções.
- Relações entre conceitos.

Não aprove afirmações técnicas sem fundamentação suficiente.

### 2.3 Rastreabilidade

Toda informação relevante deverá possuir uma fonte identificável.

Quando possível, registre:

- Nome da fonte.
- Autor ou instituição.
- Versão.
- Data de publicação ou atualização.
- Página, seção ou item.
- URL ou referência bibliográfica.
- Material do projeto que utiliza a informação.

### 2.4 Independência da validação

Não aceite automaticamente as referências ou conclusões apresentadas pelo próprio material.

Verifique as afirmações relevantes em fontes independentes e confiáveis.

A validação deverá avaliar o conteúdo, não apenas conferir se o texto está coerente com outro arquivo produzido pelo projeto.

---

## 3. Hierarquia das fontes

Utilize a seguinte prioridade:

1. Edital oficial e retificações.
2. Normas, legislação e documentos oficiais aplicáveis.
3. Documentação oficial de organizações responsáveis por padrões e frameworks.
4. Livros técnicos e referências acadêmicas reconhecidas.
5. Artigos científicos e publicações técnicas especializadas.
6. Materiais didáticos de instituições reconhecidas.
7. Outras fontes técnicas, desde que sua confiabilidade seja avaliada.

### Regras de utilização

- Não trate blogs ou materiais comerciais como autoridade normativa.
- Não utilize conteúdo de terceiros sem verificar sua origem.
- Não confunda documentação de fornecedores com padrões universais.
- Registre a versão de normas e frameworks quando isso for relevante.
- Verifique se a versão estudada corresponde ao escopo do edital.
- Não substitua uma fonte oficial por uma explicação simplificada encontrada na internet.

Quando fontes confiáveis apresentarem interpretações diferentes, documente a divergência.

Não escolha arbitrariamente uma interpretação sem justificativa.

---

## 4. Classificação das ocorrências

Cada problema identificado deverá receber uma classificação de severidade.

| Severidade | Definição | Tratamento |
|---|---|---|
| Crítica | Erro que compromete a correção técnica ou pode induzir a resposta errada | Correção obrigatória |
| Alta | Erro relevante, lacuna importante ou desalinhamento com o edital | Correção obrigatória |
| Média | Imprecisão, explicação incompleta ou problema didático relevante | Correção recomendada |
| Baixa | Problema editorial ou melhoria de clareza | Ajuste quando conveniente |
| Observação | Sugestão sem erro identificado | Registrar sem reprovar automaticamente |

### Exemplos de ocorrências críticas

- Definição tecnicamente incorreta.
- Fórmula errada.
- Gabarito incorreto.
- Questão com mais de uma resposta correta sem justificativa.
- Conteúdo incompatível com o edital apresentado como obrigatório.
- Referência inexistente ou atribuída incorretamente.
- Informação desatualizada que altera o significado técnico.

### Exemplos de ocorrências altas

- Item do edital sem cobertura.
- Assunto importante explicado superficialmente.
- Questão sem correspondência com o conteúdo previsto.
- Confusão entre conceitos fundamentais.
- Ausência de ressalva técnica relevante.
- Material derivado que modifica o significado da fonte original.

---

## 5. Validação dos materiais teóricos

Audite todos os arquivos de `conteudo/`.

Para cada material, verifique os seguintes aspectos:

### 5.1 Alinhamento curricular

- Correspondência com a matriz.
- Identificação correta do módulo.
- Identificação do item do edital.
- Abrangência dos subassuntos.
- Profundidade adequada.
- Ausência de conteúdo indevido.

### 5.2 Correção técnica

- Definições corretas.
- Terminologia adequada.
- Classificações completas.
- Fórmulas corretas.
- Exemplos coerentes.
- Relações conceituais corretas.
- Exceções importantes.
- Referências confiáveis.

### 5.3 Qualidade didática

- Explicação progressiva.
- Clareza dos conceitos fundamentais.
- Adequação do aprofundamento.
- Exemplos úteis.
- Comparações relevantes.
- Ausência de contradições.
- Síntese coerente.
- Destaque dos pontos de atenção.

### 5.4 Qualidade editorial

- Ortografia.
- Gramática.
- Padronização de termos.
- Títulos e hierarquia.
- Tabelas legíveis.
- Fórmulas corretamente representadas.
- Referências completas.

### 5.5 Avaliação por material

Registre:

- Arquivo.
- Módulo.
- Assunto.
- Itens do edital.
- Resultado técnico.
- Resultado didático.
- Ocorrências.
- Severidade.
- Fontes consultadas.
- Correção necessária.
- Status final.

---

## 6. Validação das questões

Audite os arquivos de `banco-questoes/`.

A validação deverá contemplar questões oficiais, adaptadas e autorais, respeitando suas diferenças de origem.

### 6.1 Questões oficiais

Verifique:

- Existência da prova.
- Banca.
- Concurso.
- Ano.
- Cargo ou ênfase.
- Identificação da questão.
- Fonte original.
- Gabarito definitivo.
- Retificações ou anulações.

Não classifique uma questão como oficial sem comprovação.

### 6.2 Questões adaptadas

Verifique:

- Fonte original.
- Alterações realizadas.
- Preservação do conceito avaliado.
- Coerência do novo enunciado.
- Validade das alternativas.
- Gabarito.
- Justificativa da adaptação.

Não apresente uma adaptação como reprodução literal da questão original.

### 6.3 Questões autorais

Verifique:

- Alinhamento ao edital.
- Clareza do enunciado.
- Precisão técnica.
- Existência de uma única resposta correta, quando essa for a proposta.
- Plausibilidade dos distratores.
- Ausência de ambiguidades.
- Adequação ao estilo de cobrança pretendido.
- Qualidade do comentário.

Identifique explicitamente todas as questões autorais.

### 6.4 Análise das alternativas

Para cada questão, confira:

- Se o gabarito está correto.
- Se as demais alternativas são efetivamente incorretas.
- Se existem alternativas parcialmente corretas.
- Se há sobreposição de significados.
- Se o enunciado permite interpretação diferente da pretendida.
- Se alguma alternativa contém informação tecnicamente imprecisa.

### 6.5 Comentários

Verifique se:

- A alternativa correta está fundamentada.
- Cada distrator possui justificativa.
- A explicação corresponde ao enunciado.
- A referência sustenta a resposta.
- Não existe contradição entre teoria e comentário.
- O comentário ensina o conceito, em vez de apenas repetir o gabarito.

### 6.6 Duplicidades

Identifique:

- Questões idênticas.
- Questões com enunciados diferentes e mesmo objetivo.
- Questões que avaliam exatamente a mesma informação.
- Questões com alternativas apenas reorganizadas.

Diferencie duplicidade literal de repetição pedagógica intencional.

Não exclua questões automaticamente.

---

## 7. Validação dos simulados

Audite os simulados existentes.

Verifique:

- Quantidade de questões.
- Estrutura prevista.
- Distribuição por módulo.
- Distribuição por assunto.
- Distribuição por dificuldade.
- Distribuição por origem.
- Correspondência entre IDs e banco.
- Ausência de questões duplicadas indevidas.
- Gabaritos.
- Comentários.
- Tempo previsto.
- Pontuação.
- Regras de correção.

### Regras específicas

- A estrutura oficial deverá ser confirmada no edital.
- Distribuições pedagógicas não poderão ser apresentadas como oficiais.
- Questões anuladas deverão ter tratamento documentado.
- Questões pendentes não poderão gerar pontuação definitiva.
- A nota simulada não poderá ser confundida com a nota oficial quando os critérios forem diferentes.

Verifique também se os relatórios de desempenho utilizam os dados corretos.

---

## 8. Validação dos flashcards

Audite os cartões em `site/assets/data/flashcards.json` e demais fontes relacionadas.

Verifique:

- Correspondência com o edital.
- Precisão da frente.
- Correção do verso.
- Ausência de ambiguidade.
- Foco em uma informação principal.
- Associação correta ao módulo.
- Referência ao material original.
- Ausência de duplicidade desnecessária.
- Classificação adequada.
- Status de validação.

### Verificações adicionais

Identifique cartões:

- Com resposta incompleta.
- Com resposta excessivamente longa.
- Com pergunta vaga.
- Que exigem contexto não fornecido.
- Que simplificam incorretamente um conceito.
- Que reproduzem uma questão sem transformar o conteúdo em recuperação ativa.

Não aprove um cartão apenas porque a resposta é curta.

---

## 9. Validação dos materiais do NotebookLM

Audite:

- Fontes teóricas.
- Resumos.
- Mapas mentais.
- Roteiros de podcast.
- Prompts.
- Materiais derivados de questões.

Verifique:

1. Fidelidade ao conteúdo original.
2. Preservação da terminologia.
3. Referências.
4. Ausência de informações inventadas.
5. Ausência de contradições.
6. Adequação ao objetivo do material.
7. Separação entre questões oficiais e autorais.
8. Clareza das instruções dos prompts.

### Regras

- Um resumo não pode alterar a conclusão do material original.
- Um mapa mental não pode estabelecer relações inexistentes.
- Um podcast não pode apresentar inferências como fatos.
- Um prompt não pode instruir o NotebookLM a inventar referências.
- Materiais incompletos devem ser identificados como pendentes.

---

## 10. Consistência cruzada entre os materiais

Esta etapa é obrigatória.

Verifique se os diferentes componentes do projeto apresentam informações compatíveis.

### 10.1 Teoria × edital

O conteúdo está alinhado aos itens oficiais?

### 10.2 Teoria × questões

As questões avaliam conceitos efetivamente ensinados?

Existem questões que exigem conhecimento ausente da teoria?

### 10.3 Teoria × gabaritos

As explicações das questões correspondem às definições dos materiais teóricos?

### 10.4 Teoria × flashcards

Os cartões preservam o significado dos conceitos?

### 10.5 Teoria × NotebookLM

Os resumos, mapas e roteiros mantêm a fidelidade às fontes?

### 10.6 Questões × simulados

Os simulados utilizam as versões corretas das questões?

Os IDs, gabaritos e classificações estão preservados?

### 10.7 Matriz × controle de cobertura

Os indicadores representam a situação real dos materiais?

Não marque um item como concluído apenas porque existe um arquivo com seu nome.

A cobertura deve considerar o conteúdo efetivamente produzido e validado.

---

## 11. Verificação de atualidade

Para conteúdos sujeitos a atualização, verifique se a versão utilizada continua adequada.

Atenção especial a:

- Normas técnicas.
- Legislação.
- Frameworks.
- Padrões.
- Documentações de tecnologia.
- Práticas de segurança.
- Ferramentas e especificações técnicas.

Registre:

- Versão utilizada.
- Fonte oficial.
- Data de consulta.
- Situação da versão.
- Impacto de eventual atualização.

Não atualize automaticamente todos os materiais para a versão mais recente.

A versão correta para estudo deverá considerar o edital, a referência exigida e o contexto do assunto.

---

## 12. Pesquisa e confirmação externa

Quando uma afirmação não puder ser validada pelas fontes existentes:

1. Identifique a afirmação.
2. Pesquise a fonte primária.
3. Consulte documentação oficial.
4. Compare com referências técnicas reconhecidas.
5. Registre a conclusão.
6. Atualize a referência do material, se necessário.

Se não for possível confirmar:

- Mantenha a ocorrência pendente.
- Explique o motivo.
- Não invente uma resposta.
- Não aprove o trecho como definitivo.

Diferencie claramente:

- Fato confirmado.
- Interpretação técnica.
- Recomendação didática.
- Inferência.
- Informação não confirmada.

---

## 13. Relatórios e arquivos de auditoria

Crie a seguinte estrutura:

```text
docs/
└── qualidade/
    ├── auditoria-geral.md
    ├── auditoria-conteudo.md
    ├── auditoria-questoes.md
    ├── auditoria-simulados.md
    ├── auditoria-flashcards.md
    ├── auditoria-notebooklm.md
    ├── auditoria-consistencia.md
    ├── plano-correcoes.md
    └── historico-validacoes.md
```

### 13.1 Auditoria geral

Deverá conter:

- Escopo.
- Data.
- Versão do edital.
- Arquivos auditados.
- Metodologia.
- Resultados gerais.
- Problemas críticos.
- Pendências.
- Conclusão.

### 13.2 Auditorias específicas

Cada relatório deverá apresentar:

- Arquivo.
- Item do edital.
- Problema.
- Evidência.
- Fonte de verificação.
- Severidade.
- Correção recomendada.
- Status.

### 13.3 Plano de correções

Organize as ocorrências por prioridade:

- P0 — Corrigir antes de qualquer utilização.
- P1 — Corrigir antes de liberar o material.
- P2 — Corrigir na próxima revisão.
- P3 — Melhoria editorial ou didática.

Registre responsável lógico pela correção, arquivo afetado e situação.

---

## 14. Status de validação

Utilize os seguintes status:

| Status | Significado |
|---|---|
| Não auditado | Ainda não passou por validação |
| Em auditoria | Está sendo analisado |
| Pendente | Depende de informação ou fonte |
| Reprovado | Possui problema que impede sua utilização |
| Aprovado com ressalvas | Pode ser utilizado com limitações documentadas |
| Validado | Atende aos critérios de qualidade |

### Regras

- Um arquivo não poderá ser validado se possuir ocorrência crítica não resolvida.
- Ocorrências altas deverão ser corrigidas antes da aprovação definitiva.
- Ressalvas devem ser explícitas.
- A aprovação deverá identificar a versão auditada.
- Alterações posteriores relevantes exigem nova validação.

---

## 15. Correção dos problemas

Não altere silenciosamente os materiais durante a auditoria.

Para cada ocorrência:

1. Identifique o problema.
2. Apresente a evidência.
3. Indique a fonte de verificação.
4. Explique o impacto.
5. Proponha a correção.
6. Identifique os arquivos relacionados.
7. Aguarde aprovação quando a alteração modificar conteúdo técnico relevante.

### Correções permitidas sem autorização específica

Podem ser aplicados diretamente, desde que não alterem o significado:

- Erros ortográficos evidentes.
- Problemas de formatação.
- Padronização de títulos.
- Ajustes de espaçamento.
- Correções de links internos quebrados, quando o destino for inequívoco.

### Correções que exigem registro e aprovação

- Mudanças conceituais.
- Alteração de definições.
- Mudança de gabarito.
- Exclusão de questões.
- Alteração de escopo.
- Substituição de referências.
- Mudanças em fórmulas.
- Alterações em regras de pontuação.

Não apague a versão anterior sem preservar o histórico de alterações.

---

## 16. Indicadores de qualidade

Apresente indicadores quantitativos sempre acompanhados de denominador e critério de cálculo.

### Indicadores gerais

- Arquivos auditados.
- Arquivos aprovados.
- Arquivos reprovados.
- Arquivos pendentes.
- Ocorrências críticas.
- Ocorrências altas.
- Ocorrências médias.
- Ocorrências baixas.
- Ocorrências corrigidas.

### Indicadores por módulo

- Itens do edital.
- Itens com teoria validada.
- Itens com questões validadas.
- Itens com flashcards validados.
- Itens com materiais NotebookLM validados.
- Pendências.

### Cobertura validada

Considere um item do edital coberto somente quando os critérios definidos para aquele tipo de material forem efetivamente atendidos.

Não use quantidade de arquivos como substituto de qualidade.

Não crie uma nota geral de qualidade sem metodologia explícita.

---

## 17. Execução por fases

A auditoria deverá ser executada em etapas.

### Fase 1 — Diagnóstico geral

- Conferir a estrutura do projeto.
- Verificar os documentos de referência.
- Identificar materiais existentes.
- Identificar materiais ausentes.
- Conferir status de validação.
- Apresentar o diagnóstico.

Não alterar conteúdo nesta fase.

Aguardar aprovação.

### Fase 2 — Validação teórica

- Auditar os materiais de teoria.
- Conferir alinhamento ao edital.
- Verificar precisão técnica.
- Verificar fontes.
- Identificar lacunas.
- Produzir relatório por módulo.

Trabalhar um módulo por vez.

Aguardar aprovação ao concluir cada módulo.

### Fase 3 — Validação das questões

- Conferir origem.
- Conferir gabaritos.
- Avaliar alternativas.
- Verificar comentários.
- Identificar duplicidades.
- Verificar alinhamento ao edital.

Apresentar ocorrências e aguardar aprovação das correções.

### Fase 4 — Validação dos simulados

- Conferir estrutura.
- Conferir composição.
- Conferir questões.
- Conferir gabaritos.
- Conferir pontuação.
- Conferir relatórios.

Aguardar aprovação.

### Fase 5 — Validação de flashcards e NotebookLM

- Conferir precisão.
- Conferir rastreabilidade.
- Conferir consistência com teoria.
- Conferir materiais derivados.

Aguardar aprovação.

### Fase 6 — Consistência cruzada

Verificar a integração entre todos os componentes.

Produzir relatório de divergências.

Aguardar aprovação.

### Fase 7 — Consolidação

- Atualizar status.
- Atualizar matriz de cobertura.
- Atualizar histórico de validações.
- Criar plano de correções.
- Emitir relatório geral.
- Identificar materiais liberados para estudo.

Não avançar automaticamente entre as fases.

---

## 18. Relatório final

Ao concluir a auditoria, apresente:

1. Escopo efetivamente auditado.
2. Quantidade de arquivos examinados.
3. Quantidade de arquivos validados.
4. Quantidade de arquivos reprovados.
5. Quantidade de arquivos pendentes.
6. Ocorrências por severidade.
7. Erros conceituais identificados.
8. Problemas de alinhamento ao edital.
9. Problemas de gabarito.
10. Problemas de rastreabilidade.
11. Lacunas por módulo.
12. Inconsistências entre materiais.
13. Correções realizadas.
14. Correções pendentes.
15. Percentual de cobertura validada.
16. Materiais liberados para estudo.
17. Materiais que não devem ser utilizados ainda.

Conclua com uma classificação geral:

- **Aprovado:** materiais atendem aos critérios.
- **Aprovado com ressalvas:** materiais utilizáveis com limitações identificadas.
- **Reprovado:** problemas impedem utilização segura.
- **Inconclusivo:** faltam fontes ou informações para uma avaliação confiável.

---

## 19. Limites desta etapa

Nesta execução, NÃO:

- Confunda revisão editorial com validação técnica.
- Considere materiais produzidos pelo próprio projeto como fontes independentes de confirmação.
- Invente referências.
- Aprove questões com gabarito duvidoso.
- Altere o edital.
- Altere silenciosamente o conteúdo.
- Exclua materiais sem preservar histórico.
- Apresente inferências como fatos.
- Considere a ausência de erros encontrados como prova absoluta de correção.
- Atualize normas sem avaliar sua pertinência ao edital.
- Avance automaticamente para a próxima fase.

**O objetivo é garantir que o estudante utilize materiais confiáveis, tecnicamente corretos, rastreáveis e alinhados ao edital.**

Execute somente a fase autorizada, apresente o relatório e aguarde minha aprovação antes de avançar.