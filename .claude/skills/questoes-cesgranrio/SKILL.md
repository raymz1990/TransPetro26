---
name: questoes-cesgranrio
description: Pesquisa, identifica, classifica, elabora, comenta e valida questões para o concurso Transpetro Ênfase 5, priorizando a Fundação Cesgranrio. Garante rastreabilidade ao edital, autenticidade das questões oficiais, qualidade dos distratores e gabaritos fundamentados.
---

# Skill: Questões Cesgranrio

## 1. Objetivo

Construir e manter um banco de questões de alta qualidade para preparação ao concurso Transpetro — Ênfase 5 — Análise de Sistemas: Processos de Negócios.

O banco deve desenvolver:

- Domínio dos conceitos do edital.
- Interpretação de enunciados.
- Aplicação de conhecimentos técnicos.
- Capacidade de comparação entre alternativas.
- Identificação de erros conceituais.
- Reconhecimento de exceções e condições.
- Raciocínio lógico.
- Gestão do tempo de prova.

O objetivo não é apenas acumular questões, mas construir um instrumento de aprendizagem, avaliação e revisão.

## 2. Pré-requisitos

Antes de trabalhar com questões:

1. Consulte `CLAUDE.md`.
2. Consulte `docs/edital/matriz-conteudo.md`.
3. Consulte `docs/edital/estrutura-prova.md`.
4. Consulte a Skill `edital-e-cobertura`.
5. Consulte a Skill `conteudo-didatico`.
6. Identifique os tópicos efetivamente previstos no edital.
7. Verifique o conteúdo teórico disponível.

Toda questão deve estar vinculada a pelo menos um item da matriz de cobertura.

Não crie questões de assuntos sem correspondência com o edital, salvo quando explicitamente solicitadas como conteúdo complementar.

## 3. Classificação obrigatória das questões

Cada questão deve pertencer a uma das seguintes categorias.

### 3.1 Questão oficial

Questão efetivamente aplicada em concurso ou processo seletivo, cuja origem foi confirmada.

Para ser classificada como oficial, deve ser possível identificar:

- Instituição organizadora.
- Concurso ou processo seletivo.
- Cargo ou ênfase.
- Ano.
- Número ou identificação da questão, quando disponível.
- Fonte de consulta.
- Enunciado e alternativas correspondentes à fonte.

Atribuir à Cesgranrio somente quando a questão tiver sido efetivamente elaborada ou aplicada pela banca.

Não classifique como oficial uma questão encontrada em apostila sem identificação verificável da prova original.

### 3.2 Questão adaptada

Questão baseada em uma questão real, mas cujo enunciado, contexto ou alternativas foram modificados.

Registrar:

- Identificação da questão original.
- Banca.
- Concurso.
- Ano.
- Alterações realizadas.
- Motivo da adaptação.

Não apresentar uma questão adaptada como reprodução literal da original.

Se a origem não puder ser verificada, não utilizar a classificação de questão adaptada.

### 3.3 Questão autoral — estilo Cesgranrio

Questão elaborada pelo Claude para treinamento.

Deve ser identificada explicitamente como:

**Questão autoral — estilo Cesgranrio.**

Não atribuir ano, prova, cargo ou número de questão oficial.

Não utilizar expressões como "questão da Cesgranrio" para questões autorais.

O objetivo é reproduzir características pedagógicas compatíveis com provas objetivas da banca, sem alegar autenticidade.

## 4. Pesquisa de questões oficiais

Ao pesquisar questões anteriores:

- Priorize provas e gabaritos oficiais.
- Utilize fontes confiáveis de concursos.
- Confira o documento original sempre que disponível.
- Registre a identificação completa.
- Verifique se o gabarito corresponde à versão definitiva.
- Identifique eventuais anulações e alterações de gabarito.

### 4.1 Fontes admitidas (regra vigente desde 2026-11-04)

Além das provas da Transpetro e da Petrobras, são admitidas provas da **Fundação Cesgranrio de outros concursos** (por exemplo, TI em bancos, autarquias e estatais), desde que:

1. a banca seja a Cesgranrio;
2. o assunto da questão tenha item no Anexo IV da Ênfase 5 do edital 2026 (Java/J2EE e outras ênfases continuam fora);
3. prova e gabarito sejam verificáveis (concurso, cargo, ano, prova, número, fonte, situação do gabarito e anulações).

Registrar `concurso`, `cargo`, `ano` e `aderencia_edital` (Aderente, Parcialmente aderente, Fora do edital, Indeterminado). Questões "Fora do edital" são catalogadas, mas não entram no banco de estudo. Provas candidatas ficam em `banco-questoes/oficiais/catalogo-provas.md` com situação (obtida, não obtida, excluída). Sem amostra suficiente, não afirmar tendência; nunca inventar questão, gabarito ou ano.

Não invente:

- Questões.
- Enunciados.
- Alternativas.
- Gabaritos.
- Número de questão.
- Ano de aplicação.
- Referências bibliográficas.
- Estatísticas de incidência.

Se não encontrar questões oficiais para determinado assunto, informe a ausência de evidência e produza questões autorais, se necessário.

Não preencha artificialmente o banco com questões atribuídas incorretamente à banca.

## 5. Registro e rastreabilidade

Cada questão deverá possuir um identificador único.

Padrão sugerido:

- `OFI-000001`: questão oficial.
- `ADP-000001`: questão adaptada.
- `AUT-000001`: questão autoral.

Os identificadores não devem ser reutilizados.

### Metadados obrigatórios

Cada registro deverá conter:

| Campo | Descrição |
|---|---|
| ID | Identificador único |
| Tipo | Oficial, adaptada ou autoral |
| Banca | Organizadora, quando aplicável |
| Concurso | Concurso de origem |
| Ano | Ano da aplicação |
| Cargo/Ênfase | Identificação da prova |
| Questão original | Referência da questão-base, se aplicável |
| Item do edital | Item relacionado |
| Módulo | Módulo de estudo |
| Assunto | Tópico específico |
| Dificuldade | Fácil, média ou difícil |
| Enunciado | Texto da questão |
| Alternativas | A, B, C, D e E |
| Gabarito | Alternativa correta |
| Justificativa | Fundamentação da resposta |
| Fonte | Referência verificável |
| Status | Situação da validação |

Para questões autorais, os campos de concurso, ano e questão original devem ser nulos ou omitidos, nunca preenchidos com dados fictícios.

## 6. Padrão de elaboração de questões autorais

As questões autorais devem seguir critérios rigorosos de construção.

### 6.1 Enunciado

O enunciado deve:

- Ser claro e objetivo.
- Apresentar contexto quando necessário.
- Cobrar conhecimento compatível com o edital.
- Exigir interpretação ou aplicação quando pertinente.
- Evitar ambiguidades.
- Conter todas as informações necessárias para resolução.

Não utilizar textos longos sem função avaliativa.

### 6.2 Alternativas

Cada questão deverá conter cinco alternativas:

A, B, C, D e E.

As alternativas devem:

- Ser plausíveis.
- Pertencer à mesma categoria conceitual.
- Ter extensão razoavelmente equilibrada.
- Apresentar apenas uma resposta correta.
- Evitar pistas gramaticais.
- Evitar diferenças excessivas de detalhamento.
- Não depender de interpretação subjetiva.

### 6.3 Distratores

Os distratores devem representar erros plausíveis de interpretação ou conhecimento.

Podem explorar:

- Confusão entre conceitos semelhantes.
- Inversão de etapas.
- Troca de responsabilidades.
- Aplicação de uma regra fora de seu contexto.
- Generalização indevida.
- Exceção ignorada.
- Confusão entre objetivo e resultado.
- Confusão entre método, processo, ferramenta e framework.

Não crie alternativas absurdas apenas para facilitar a resolução.

### 6.4 Resposta correta

A resposta correta deve ser tecnicamente fundamentada.

Antes de aprovar a questão:

1. Resolva a questão independentemente.
2. Verifique a alternativa correta.
3. Confirme que as demais estão incorretas.
4. Verifique se não há outra alternativa defensável.
5. Confira a correspondência com o edital.
6. Registre a referência teórica.

## 7. Direcionamento para a Fundação Cesgranrio

A elaboração de questões deve considerar características observáveis em provas reais da banca.

Analise questões anteriores verificadas para identificar:

- Construção dos enunciados.
- Nível de contextualização.
- Profundidade conceitual.
- Uso de situações práticas.
- Estrutura dos distratores.
- Exigência de interpretação.
- Grau de complexidade.
- Forma de apresentação das alternativas.

Não generalize características a partir de uma ou duas questões.

Quando houver amostra suficiente, registre:

- Quantidade de provas analisadas.
- Concursos considerados.
- Período analisado.
- Quantidade de questões por assunto.
- Critérios de classificação.
- Limitações da amostra.

Diferencie:

**Evidência:** característica observada nas questões analisadas.

**Interpretação:** conclusão possível a partir da amostra.

**Recomendação:** estratégia pedagógica sugerida para o estudo.

Não apresente recomendações como estatísticas oficiais da banca.

## 8. Níveis de dificuldade

Utilize três níveis.

### Fácil

- Conceitos fundamentais.
- Definições.
- Identificação de características.
- Classificações básicas.
- Reconhecimento de terminologia.

### Médio

- Comparação entre conceitos.
- Interpretação de cenários.
- Aplicação de regras.
- Identificação de consequências.
- Relação entre diferentes tópicos.

### Difícil

- Integração de conceitos.
- Cenários com múltiplas condições.
- Exceções.
- Interpretação técnica aprofundada.
- Análise de alternativas conceitualmente próximas.

A dificuldade deve refletir a complexidade efetiva da questão, não o tamanho do enunciado.

## 9. Comentários e gabaritos

Toda questão disponibilizada para estudo deve possuir comentário.

### Estrutura obrigatória

**Gabarito:** alternativa correta.

**Fundamentação:** explicação do conceito e da razão pela qual a alternativa está correta.

**Análise das alternativas:**

- A: justificativa.
- B: justificativa.
- C: justificativa.
- D: justificativa.
- E: justificativa.

A análise das alternativas deve explicar o erro de cada distrator, não apenas afirmar que está incorreto.

Quando necessário, apresentar:

- Conceito relacionado.
- Regra aplicável.
- Exceção.
- Referência teórica.
- Relação com o material didático.

Em questões oficiais, não altere silenciosamente o gabarito divulgado pela banca.

Se houver divergência entre gabarito preliminar e definitivo, registre o resultado definitivo e a ocorrência.

Se a questão tiver sido anulada, identifique-a como anulada e explique o motivo quando houver documentação disponível.

## 10. Banco de questões por assunto

Organize as questões conforme a estrutura do projeto.

Diretórios:

- `banco-questoes/oficiais/`
- `banco-questoes/adaptadas/`
- `banco-questoes/autorais/`

Dentro de cada categoria, organize por módulo e assunto.

Não misture questões oficiais, adaptadas e autorais sem identificação visual e textual.

Mantenha um catálogo centralizado para permitir pesquisa por:

- ID.
- Módulo.
- Assunto.
- Item do edital.
- Tipo.
- Banca.
- Ano.
- Dificuldade.
- Resultado do estudante.

## 11. Quantidade e distribuição

A quantidade de questões deve ser definida conforme a cobertura do edital e a necessidade de treinamento.

Não invente a distribuição oficial de questões por tópico.

Quando não houver distribuição oficial documentada:

- Apresente a quantidade como decisão pedagógica.
- Justifique a distribuição.
- Evite concentração excessiva em poucos assuntos.
- Garanta cobertura de todos os itens relevantes.
- Identifique assuntos ainda sem questões.

A existência de muitas questões em um módulo não significa que ele tenha maior peso na prova.

## 12. Revisão e validação

Toda questão deve passar por uma revisão antes de entrar no banco validado.

### Revisão de conteúdo

- O assunto está no edital?
- O conceito está correto?
- A fonte é confiável?
- A questão está vinculada à matriz?
- O nível de dificuldade é coerente?

### Revisão de construção

- O enunciado é claro?
- Existem cinco alternativas?
- Há somente uma resposta correta?
- Os distratores são plausíveis?
- Há pistas involuntárias?
- Existe ambiguidade?

### Revisão do gabarito

- A resposta está correta?
- A fundamentação é suficiente?
- Todas as alternativas foram analisadas?
- As referências sustentam a justificativa?

### Revisão de autenticidade

- A questão é realmente oficial?
- A origem foi confirmada?
- O texto corresponde à fonte?
- O gabarito é o definitivo?
- A classificação está correta?

Status possíveis:

- `RASCUNHO`
- `EM_REVISAO`
- `VALIDADA`
- `ANULADA`
- `PENDENTE_DE_FONTE`
- `DESCARTADA`

Questões sem fonte verificável não podem ser marcadas como oficiais validadas.

## 13. Integração com o site

O banco deverá alimentar o site estático.

Cada questão deve permitir:

- Exibição do enunciado.
- Exibição das cinco alternativas.
- Seleção de resposta.
- Correção.
- Exibição do gabarito.
- Comentário completo.
- Identificação da origem.
- Identificação do módulo e assunto.
- Registro de desempenho.
- Inclusão no caderno de erros.

As questões devem ser armazenadas em formato estruturado, preferencialmente JSON, mantendo os metadados.

Não misture conteúdo de apresentação visual com os dados das questões.

### Comportamento do sistema

- Não mostrar a resposta antes da tentativa, quando o modo de resolução exigir isso.
- Permitir revisão posterior.
- Registrar respostas e erros.
- Permitir filtrar por assunto e dificuldade.
- Diferenciar questão inédita de questão já respondida.
- Evitar repetição desnecessária em sessões de treinamento.

Os registros devem respeitar a política de armazenamento local do projeto.

## 14. Indicadores de desempenho

O sistema deve permitir acompanhar:

- Questões respondidas.
- Questões corretas.
- Questões incorretas.
- Percentual de acerto.
- Desempenho por módulo.
- Desempenho por assunto.
- Desempenho por dificuldade.
- Evolução ao longo do tempo.
- Assuntos com maior índice de erro.
- Questões ainda não respondidas.

Fórmula:

`Percentual de acerto = (questões corretas / questões respondidas) × 100`

Não misture questões anuladas com questões válidas no cálculo de desempenho.

Quando uma questão tiver sido anulada posteriormente, ajuste os indicadores conforme a regra adotada e documente o tratamento.

## 15. Integração com o caderno de erros

Questões erradas ou marcadas para revisão devem poder ser encaminhadas ao caderno de erros.

O registro deve conter:

- ID da questão.
- Data da tentativa.
- Assunto.
- Resposta escolhida.
- Gabarito.
- Motivo do erro.
- Conceito que precisa ser revisado.
- Status de revisão.

A classificação do erro deve ajudar a identificar a causa:

- Desconhecimento teórico.
- Confusão conceitual.
- Interpretação incorreta.
- Desatenção.
- Erro de cálculo ou procedimento.
- Gestão inadequada do tempo.
- Chute.

Não presumir automaticamente o motivo do erro. Quando necessário, permitir que o estudante o informe.

## 16. Integração com simulados

Questões validadas poderão ser utilizadas em simulados.

Antes de incluir uma questão:

- Verifique se está ativa.
- Verifique se não está anulada.
- Confirme o item do edital.
- Confira a dificuldade.
- Evite repetição excessiva.
- Verifique se já foi utilizada em outros simulados.

A montagem dos simulados deve seguir também a Skill `simulados`.

## 17. Formato dos arquivos

Utilize Markdown para questões individuais ou coleções legíveis e JSON para integração com o site.

Modelo de estrutura JSON:

```json
{
  "id": "AUT-000001",
  "tipo": "autoral",
  "banca": null,
  "concurso": null,
  "ano": null,
  "item_edital": ["E5-01"],
  "modulo": "01-arquitetura-dados",
  "assunto": "Modelagem de dados",
  "dificuldade": "media",
  "enunciado": "Enunciado da questão.",
  "alternativas": {
    "A": "Alternativa A.",
    "B": "Alternativa B.",
    "C": "Alternativa C.",
    "D": "Alternativa D.",
    "E": "Alternativa E."
  },
  "gabarito": "C",
  "comentario": {
    "fundamentacao": "Explicação da resposta correta.",
    "alternativas": {
      "A": "Justificativa.",
      "B": "Justificativa.",
      "C": "Justificativa.",
      "D": "Justificativa.",
      "E": "Justificativa."
    }
  },
  "fonte": [],
  "status": "validada"
}
```

O identificador `E5-01` é apenas ilustrativo. Utilize os identificadores efetivamente existentes na matriz.

Adapte o modelo conforme necessário, sem perder os campos essenciais de rastreabilidade.

## 18. Checklist de qualidade

Antes de liberar uma questão:

- [ ] ID único.
- [ ] Classificação correta.
- [ ] Origem verificável, quando oficial ou adaptada.
- [ ] Item do edital identificado.
- [ ] Enunciado claro.
- [ ] Cinco alternativas.
- [ ] Apenas uma alternativa correta.
- [ ] Distratores plausíveis.
- [ ] Gabarito conferido.
- [ ] Comentário completo.
- [ ] Alternativas incorretas justificadas.
- [ ] Fonte registrada.
- [ ] Dificuldade classificada.
- [ ] Estrutura compatível com o site.
- [ ] Revisão concluída.

## 19. Comportamento obrigatório do Claude

- Priorize qualidade, não quantidade.
- Nunca invente questões oficiais.
- Nunca invente provas, anos, números ou gabaritos.
- Nunca apresente questões autorais como oficiais.
- Não atribua tendências à Cesgranrio sem evidência.
- Não crie questões ambíguas.
- Não aceite duas respostas defensáveis.
- Não omita justificativas.
- Não confunda dificuldade com complexidade textual.
- Preserve a rastreabilidade com o edital.

**Princípio final:** cada questão deve avaliar um conhecimento identificável, ter uma resposta tecnicamente defensável e ensinar algo ao estudante, inclusive quando ele errar.