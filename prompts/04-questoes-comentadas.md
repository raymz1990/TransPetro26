# 04 — CRIAÇÃO DO BANCO DE QUESTÕES COMENTADAS

## Objetivo

Construir um banco de questões comentadas para o concurso Transpetro 2026.4 — Ênfase 5: Análise de Sistemas: Processos de Negócios, organizado conforme o edital oficial e orientado pelo perfil histórico da Fundação Cesgranrio.

O banco deverá servir para:

- Fixação do conteúdo teórico.
- Desenvolvimento de raciocínio e interpretação.
- Identificação de lacunas de conhecimento.
- Treinamento no estilo da Fundação Cesgranrio.
- Revisão ativa.
- Alimentação do caderno de erros.
- Geração futura de simulados.
- Integração com a plataforma de estudos e o NotebookLM.

**Regra central:** nenhuma questão poderá ser apresentada como oficial sem comprovação de sua origem. Questões autorais devem ser identificadas explicitamente.

---

## 1. Preparação obrigatória

Antes de criar qualquer questão, leia:

- `CLAUDE.md`
- `.claude/skills/questoes-cesgranrio/SKILL.md`
- `.claude/skills/edital-e-cobertura/SKILL.md`
- `.claude/skills/conteudo-didatico/SKILL.md`
- `docs/edital/matriz-conteudo.md`
- `docs/edital/controle-cobertura.md`
- `docs/estrategia/estrategia-cesgranrio.md`
- `docs/estrategia/prioridades.md`
- `docs/estrategia/catalogo-questoes-historicas.md`
- `docs/qualidade/checklist-questoes.md`

Consulte também os materiais teóricos já produzidos em `conteudo/`.

### Condições para iniciar

Confirme que:

1. A auditoria do edital foi aprovada.
2. A matriz de conteúdo está validada.
3. Os materiais teóricos utilizados como referência estão suficientemente desenvolvidos.
4. A análise histórica da Cesgranrio foi concluída ou possui limitações documentadas.
5. Os itens do edital estão associados aos módulos e assuntos correspondentes.

Se alguma condição não estiver atendida, não produza questões em escala. Apresente as pendências e aguarde orientação.

---

## 2. Classificação obrigatória das questões

O banco deverá manter três categorias independentes.

### 2.1 Questões oficiais

Identificação:

`OFI-000001`

São questões efetivamente aplicadas em provas anteriores, cuja origem possa ser verificada.

Campos obrigatórios:

- ID.
- Instituição.
- Concurso.
- Ano.
- Cargo ou ênfase.
- Banca.
- Número original da questão.
- Prova de origem.
- Link ou referência da fonte.
- Gabarito oficial.
- Situação do gabarito.
- Item do edital atual relacionado.
- Módulo.
- Assunto principal.
- Assuntos secundários, quando aplicável.

Não invente questões, enunciados, alternativas, identificadores de prova ou gabaritos.

Quando houver questão oficial sem gabarito definitivo localizado, registre a situação como não confirmada.

Questões anuladas ou com gabarito alterado devem manter essa informação.

### 2.2 Questões adaptadas

Identificação:

`ADP-000001`

São questões baseadas em questões ou materiais preexistentes, mas cujo enunciado, alternativas ou estrutura foram modificados.

Registre:

- Fonte original.
- Identificação original, quando disponível.
- Alterações realizadas.
- Justificativa da adaptação.
- Conteúdo avaliado.
- Gabarito da versão adaptada.
- Referência da fonte.

Não apresente uma questão adaptada como reprodução literal de uma questão oficial.

### 2.3 Questões autorais

Identificação:

`AUT-000001`

São questões elaboradas originalmente para o projeto.

Todas deverão apresentar a identificação:

**Questão autoral — estilo Cesgranrio.**

Devem ser fundamentadas:

- No edital atual.
- Nos materiais teóricos aprovados.
- Na análise histórica da banca.
- Nas habilidades cognitivas que precisam ser desenvolvidas.

Não basta trocar nomes, números ou palavras de questões existentes para considerar uma questão original.

Evite reproduzir enunciados ou alternativas de questões protegidas por direitos autorais.

---

## 3. Estrutura temática do banco

Organize as questões de acordo com os nove módulos pedagógicos:

1. Arquitetura de Dados.
2. Gerenciamento de Projetos e Produtos.
3. Processos, grupos de processos e áreas de conhecimento.
4. Gestão e Governança em TI.
5. Engenharia de Software.
6. Experiência do Usuário.
7. Análise de Dados e Informações.
8. Lógica Matemática.
9. Segurança da Informação.

A classificação deverá respeitar a matriz de conteúdo validada.

Cada questão deverá estar associada a:

- Um módulo principal.
- Um assunto específico.
- Um item do edital.
- Um nível de dificuldade.
- Uma habilidade cognitiva.

Quando houver integração entre assuntos, registre os assuntos secundários.

Não crie questões sobre assuntos que não estejam previstos no edital sem autorização explícita.

---

## 4. Padrão de elaboração das questões autorais

Todas as questões autorais deverão seguir o formato de múltipla escolha com cinco alternativas:

A, B, C, D e E.

Cada questão deverá possuir:

- Apenas uma alternativa correta.
- Enunciado claro e tecnicamente preciso.
- Alternativas plausíveis.
- Distratores fundamentados em erros conceituais reais.
- Dificuldade compatível com o objetivo de aprendizagem.
- Correspondência com o conteúdo do edital.
- Comentário completo do gabarito.

### 4.1 Construção do enunciado

Utilize diferentes formatos:

- Questões conceituais.
- Situações hipotéticas.
- Cenários empresariais.
- Problemas técnicos.
- Interpretação de informações.
- Comparação entre conceitos.
- Identificação de procedimentos corretos.
- Análise de afirmações.
- Resolução de problemas.

Dê preferência a contextos relacionados a organizações, tecnologia, processos de negócio, dados, governança e operações.

Não force contextualização empresarial em assuntos que possam ser avaliados de maneira mais objetiva.

### 4.2 Alternativas

As alternativas devem:

- Ser tecnicamente plausíveis.
- Possuir estrutura gramatical coerente com o enunciado.
- Evitar pistas involuntárias.
- Evitar diferenças excessivas de extensão.
- Não conter ambiguidades.
- Não utilizar termos absolutos sem justificativa.
- Evitar alternativas absurdas ou facilmente descartáveis.

Os distratores deverão explorar erros como:

- Confusão entre conceitos semelhantes.
- Inversão de etapas.
- Troca de responsabilidades.
- Aplicação de uma regra em contexto inadequado.
- Interpretação incompleta de uma norma ou framework.
- Generalização indevida.
- Confusão entre causa e consequência.
- Desconhecimento de exceções e condições.

Não utilize pegadinhas artificiais. A dificuldade deve decorrer do conhecimento e do raciocínio exigidos.

---

## 5. Comentário obrigatório de cada questão

O comentário deverá ensinar o conteúdo, não apenas informar a alternativa correta.

Estrutura obrigatória:

### A. Gabarito

Indique a alternativa correta.

### B. Resolução comentada

Explique o raciocínio necessário para chegar à resposta.

Apresente os conceitos relevantes e as relações entre eles.

Quando aplicável, mostre a sequência lógica de resolução.

### C. Análise das alternativas

Explique individualmente:

- Por que a alternativa correta está certa.
- Por que cada alternativa incorreta está errada.
- Qual conceito ou interpretação equivocada está presente em cada distrator.

Não utilize comentários genéricos como "alternativa incorreta porque não corresponde ao conceito".

### D. Fundamentação teórica

Relacione a questão ao material teórico correspondente.

Informe:

- Módulo.
- Assunto.
- Item do edital.
- Arquivo de teoria utilizado.
- Referência bibliográfica ou normativa, quando aplicável.

### E. Ponto de atenção para a prova

Destaque:

- Conceito que merece memorização.
- Confusão comum.
- Exceção importante.
- Diferença entre conceitos semelhantes.
- Tipo de raciocínio que deve ser treinado.

### F. Revisão rápida

Inclua uma síntese curta que permita revisar o conhecimento sem precisar reler toda a resolução.

### G. Tags

Utilize tags para facilitar buscas e filtros:

- Módulo.
- Assunto.
- Item do edital.
- Dificuldade.
- Habilidade cognitiva.
- Tipo de questão.
- Fonte.

---

## 6. Classificação pedagógica

### 6.1 Dificuldade

Classifique cada questão como:

- Fácil.
- Média.
- Difícil.

Considere:

| Critério | Fácil | Média | Difícil |
|---|---|---|---|
| Conhecimento | Conceito direto | Relação entre conceitos | Domínio aprofundado |
| Raciocínio | Uma etapa | Algumas etapas | Múltiplas etapas |
| Interpretação | Baixa | Moderada | Elevada |
| Alternativas | Distinção clara | Distratores próximos | Distratores tecnicamente próximos |
| Aplicação | Direta | Contextualizada | Cenário complexo |

A classificação é pedagógica e não representa estatística oficial da Cesgranrio.

### 6.2 Habilidade cognitiva

Classifique a habilidade predominante:

- Memorização.
- Compreensão.
- Interpretação.
- Aplicação.
- Análise.
- Avaliação.
- Resolução de problemas.

### 6.3 Tipo de questão

Classifique como:

- Conceitual.
- Interpretativa.
- Aplicada.
- Cálculo.
- Cenário.
- Comparativa.
- Normativa.
- Lógica.

---

## 7. Distribuição e volume de questões

O banco deverá crescer de forma progressiva e controlada.

Não produza milhares de questões em uma única execução.

### Etapa inicial

Para cada módulo:

- Produza um lote piloto de 10 questões autorais.
- Utilize diferentes assuntos previstos na matriz.
- Varie dificuldade e habilidade cognitiva.
- Inclua comentários completos.
- Evite concentrar todas as questões no mesmo assunto.

O lote piloto deverá permitir validar:

- Qualidade dos enunciados.
- Qualidade dos distratores.
- Profundidade dos comentários.
- Compatibilidade com o edital.
- Adequação ao estilo da Cesgranrio.

Total inicial esperado: até 90 questões autorais, condicionado à quantidade de assuntos e à cobertura efetiva da matriz.

Não crie questões artificiais apenas para atingir essa quantidade.

### Expansão posterior

Após a aprovação do lote piloto:

1. Identifique lacunas de cobertura.
2. Priorize assuntos ainda não contemplados.
3. Amplie questões de dificuldade média e difícil.
4. Inclua questões integradoras.
5. Utilize os resultados do estudante para direcionar novos lotes.
6. Preserve equilíbrio entre os assuntos.

A quantidade definitiva deverá ser determinada pela cobertura do edital e pela qualidade das questões, não por uma meta arbitrária.

---

## 8. Análise de cobertura

Crie ou atualize:

`banco-questoes/relatorio-cobertura-questoes.md`

Apresente, por módulo e assunto:

- Itens do edital previstos.
- Itens com questões oficiais.
- Itens com questões adaptadas.
- Itens com questões autorais.
- Quantidade por dificuldade.
- Quantidade por habilidade cognitiva.
- Assuntos sem questões.
- Assuntos com cobertura insuficiente.

Diferencie claramente:

- Cobertura teórica.
- Cobertura por questões.
- Cobertura por questões comentadas.
- Cobertura por questões oficiais.

Não considere um item plenamente coberto apenas porque possui uma única questão.

---

## 9. Organização dos arquivos

Respeite a estrutura existente.

Organize as questões nos diretórios:

`banco-questoes/oficiais/por-assunto/`

`banco-questoes/adaptadas/por-assunto/`

`banco-questoes/autorais/por-assunto/`

Utilize arquivos separados por módulo ou assunto, conforme a estrutura atual do projeto.

Crie também, se necessário:

- Catálogo geral de questões.
- Relatório de cobertura.
- Índice por assunto.
- Arquivos JSON para integração com o site.
- Arquivos Markdown independentes para NotebookLM.

### Dados estruturados

Para integração futura com a plataforma, mantenha campos consistentes.

Modelo conceitual:

```json
{
  "id": "AUT-000001",
  "tipo": "autoral",
  "modulo": "01-arquitetura-dados",
  "assunto": "Modelagem de dados",
  "item_edital": "REFERENCIA_VALIDADA",
  "dificuldade": "media",
  "habilidade": "aplicacao",
  "tipo_questao": "cenario",
  "enunciado": "Enunciado da questão...",
  "alternativas": {
    "A": "Alternativa A",
    "B": "Alternativa B",
    "C": "Alternativa C",
    "D": "Alternativa D",
    "E": "Alternativa E"
  },
  "gabarito": "C",
  "resolucao": "Comentário completo...",
  "analise_alternativas": {
    "A": "Justificativa...",
    "B": "Justificativa...",
    "C": "Justificativa...",
    "D": "Justificativa...",
    "E": "Justificativa..."
  },
  "fundamentacao": "Referência teórica...",
  "ponto_atencao": "Ponto importante...",
  "revisao_rapida": "Síntese...",
  "tags": [],
  "status_validacao": "pendente"
}
```

O modelo é ilustrativo. Adapte-o ao esquema já adotado no projeto.

Não utilize valores genéricos como `REFERENCIA_VALIDADA` em questões finais. Preencha os campos com informações verificadas.

---

## 10. Validação de qualidade

Cada questão deverá passar por revisão antes de ser considerada pronta.

Verifique:

1. O assunto está no edital?
2. A questão possui referência ao item correspondente?
3. O enunciado está tecnicamente correto?
4. Existe apenas uma alternativa correta?
5. Todas as alternativas são plausíveis?
6. Os distratores representam erros identificáveis?
7. O gabarito está correto?
8. A resolução explica o raciocínio?
9. Todas as alternativas foram comentadas?
10. A fundamentação está correta?
11. A dificuldade está coerente?
12. A questão possui classificação pedagógica?
13. Não existe duplicidade com outra questão?
14. A questão está corretamente identificada como oficial, adaptada ou autoral?
15. O conteúdo pode ser integrado ao site e ao NotebookLM?

### Status de validação

Utilize:

- Rascunho.
- Em revisão.
- Validada.
- Reprovada.

Somente questões validadas poderão integrar simulados oficiais do projeto.

Questões pendentes poderão ser utilizadas em ambiente de desenvolvimento, desde que identificadas como pendentes.

---

## 11. Integração com o caderno de erros

Prepare os dados necessários para que cada questão permita registrar:

- Resposta selecionada.
- Resposta correta.
- Data da resolução.
- Tempo gasto.
- Resultado.
- Tipo de erro.
- Justificativa do erro.
- Necessidade de revisão.
- Próxima data de revisão.

Classifique os erros como:

- Falta de conhecimento.
- Confusão conceitual.
- Interpretação incorreta.
- Desatenção.
- Erro de cálculo.
- Aplicação inadequada.
- Gestão de tempo.
- Chute.

Não desenvolva funcionalidades do site nesta etapa. Apenas garanta que os dados das questões sejam compatíveis com a integração futura.

---

## 12. Integração com NotebookLM

Prepare questões e comentários de forma que possam ser exportados como fontes independentes.

Organização recomendada:

- Questões oficiais.
- Questões adaptadas.
- Questões autorais.
- Gabaritos comentados.
- Revisões por módulo.
- Questões difíceis.
- Questões com maior índice de erro, quando houver dados reais.

Não misture questões oficiais e autorais sem identificação.

Não inclua respostas no mesmo arquivo de questões quando isso comprometer a utilização do material para treinamento. Utilize arquivos separados de questões e gabaritos comentados quando necessário.

---

## 13. Execução por etapas

Não produza todo o banco de uma vez.

### Fase 1 — Lote piloto

Produza até 10 questões autorais por módulo, conforme a cobertura disponível.

Apresente o resultado de cada módulo e aguarde aprovação.

### Fase 2 — Revisão

Após o retorno do usuário:

- Corrija problemas identificados.
- Ajuste o padrão de comentários.
- Ajuste dificuldade e profundidade.
- Revise a estrutura dos arquivos.
- Atualize o checklist.

### Fase 3 — Expansão

Somente após aprovação do padrão:

- Amplie a quantidade de questões.
- Priorize lacunas da matriz.
- Aumente a proporção de questões médias e difíceis.
- Inclua questões integradoras.

### Fase 4 — Consolidação

- Atualize catálogo.
- Atualize cobertura.
- Valide identificadores.
- Verifique duplicidades.
- Prepare dados para o site e NotebookLM.
- Gere relatório final.

Após cada fase, apresente o resultado e aguarde autorização para avançar.

---

## 14. Relatório de execução

Ao finalizar cada lote, informe:

1. Módulo trabalhado.
2. Assuntos contemplados.
3. Quantidade de questões criadas.
4. Quantidade por dificuldade.
5. Quantidade por habilidade cognitiva.
6. Quantidade validada, pendente e reprovada.
7. Itens do edital cobertos.
8. Lacunas identificadas.
9. Problemas encontrados.
10. Arquivos criados ou atualizados.

Ao finalizar o lote piloto, apresente também uma avaliação crítica da qualidade do banco e recomende ajustes antes da expansão.

---

## 15. Limites desta etapa

Nesta execução, NÃO:

- Desenvolva o site.
- Crie simulados completos.
- Altere o edital.
- Modifique a estrutura dos módulos sem autorização.
- Apresente questões autorais como oficiais.
- Invente provas, fontes ou gabaritos.
- Crie questões fora do escopo validado.
- Avance automaticamente para o próximo prompt.

**O objetivo é estabelecer um banco de questões confiável, didático, rastreável e compatível com o estilo da Fundação Cesgranrio.**

Ao terminar cada lote, apresente o relatório e aguarde minha aprovação antes de continuar.