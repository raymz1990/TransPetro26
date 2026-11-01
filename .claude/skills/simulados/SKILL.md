---
name: simulados
description: Planeja, constrói, valida e corrige simulados para o concurso Transpetro 2026.4 — Ênfase 5, com foco no padrão de questões da Fundação Cesgranrio, integridade das fontes e acompanhamento de desempenho.
---

# Skill: Simulados

## 1. Objetivo

Estabelecer um padrão consistente para criação, organização, aplicação e correção de simulados destinados ao concurso Transpetro 2026.4 — Ênfase 5: Análise de Sistemas: Processos de Negócios.

Os simulados devem:

- Respeitar o formato de prova estabelecido no edital.
- Cobrir os conteúdos previstos no Anexo IV.
- Priorizar questões com qualidade técnica e pedagógica.
- Desenvolver interpretação, raciocínio e aplicação de conceitos.
- Utilizar questões oficiais verificáveis quando disponíveis.
- Identificar claramente questões adaptadas e autorais.
- Fornecer gabaritos comentados.
- Permitir análise de desempenho por módulo e assunto.
- Alimentar o caderno de erros e o sistema de revisão espaçada.

O simulado deve avaliar o conhecimento do candidato, e não apenas sua capacidade de memorizar definições.

## 2. Quando utilizar esta Skill

Utilizar esta Skill para:

- Criar simulados completos.
- Criar simulados de conhecimentos específicos.
- Criar simulados por módulo ou assunto.
- Criar blocos de questões para revisões.
- Selecionar questões existentes no banco.
- Elaborar questões autorais.
- Montar provas com tempo controlado.
- Gerar gabaritos comentados.
- Analisar resultados.
- Identificar lacunas de aprendizagem.
- Atualizar estatísticas de desempenho.

## 3. Pré-requisitos

Antes de produzir qualquer simulado:

1. Consultar `CLAUDE.md`.
2. Consultar o edital oficial e suas eventuais retificações.
3. Consultar `docs/edital/estrutura-prova.md`.
4. Consultar `docs/edital/matriz-conteudo.md`.
5. Consultar `docs/edital/controle-cobertura.md`.
6. Consultar `questoes-cesgranrio/SKILL.md`.
7. Consultar `analise-banca/SKILL.md`.
8. Verificar o banco de questões existente.
9. Verificar os simulados já produzidos.

Não iniciar a montagem de uma prova sem conhecer as regras oficiais de estrutura e o conteúdo efetivamente disponível.

## 4. Estrutura oficial da prova

Conforme a estrutura definida para o projeto, a prova possui 70 questões:

| Área | Quantidade |
|---|---:|
| Conhecimentos específicos | 50 |
| Língua Portuguesa | 10 |
| Língua Inglesa | 10 |
| **Total** | **70** |

Cada questão deve apresentar cinco alternativas, identificadas de A a E.

### 4.1. Conhecimentos específicos

As 50 questões específicas devem respeitar o conteúdo previsto no Anexo IV do edital.

O projeto possui nove módulos pedagógicos:

1. Arquitetura de Dados.
2. Gerenciamento de Projetos e Produtos.
3. Processos, grupos de processos e áreas de conhecimento.
4. Gestão e Governança em TI.
5. Engenharia de Software.
6. Experiência do Usuário.
7. Análise de Dados e Informações.
8. Lógica Matemática.
9. Segurança da Informação.

**Regra obrigatória:** não presumir nem inventar a quantidade de questões de cada módulo na prova oficial.

Na ausência de distribuição oficial, a composição temática de um simulado deve ser identificada como distribuição pedagógica definida para aquele simulado.

Não apresentar essa distribuição como previsão da prova real.

### 4.2. Português e Inglês

As disciplinas de Língua Portuguesa e Língua Inglesa devem ser incluídas nos simulados completos, respeitando a quantidade estabelecida no edital.

As questões dessas disciplinas devem ter identificação própria e não devem ser contabilizadas como conhecimentos específicos.

Caso o conteúdo programático completo dessas disciplinas ainda não esteja mapeado, identificar a pendência antes de produzir questões.

## 5. Tipos de simulados

### 5.1. Simulado completo — 70 questões

Reproduz a estrutura geral da prova:

- 50 questões específicas.
- 10 questões de Português.
- 10 questões de Inglês.
- Cinco alternativas por questão.

Deve ser utilizado para avaliar a preparação geral e a capacidade de administrar o tempo.

### 5.2. Simulado de conhecimentos específicos — 50 questões

Contém exclusivamente questões relacionadas aos conteúdos específicos do edital.

Deve contemplar os nove módulos conforme uma distribuição pedagógica documentada.

A distribuição pode variar entre simulados para ampliar a exposição aos conteúdos, mas deve respeitar:

- A cobertura do edital.
- A disponibilidade de questões validadas.
- O nível de profundidade dos assuntos.
- O histórico de desempenho do candidato.
- A necessidade de revisar conteúdos pouco praticados.

### 5.3. Simulado por módulo

Contém questões de apenas um dos nove módulos.

Objetivo:

- Avaliar domínio conceitual.
- Identificar assuntos com maior dificuldade.
- Verificar retenção do conteúdo.
- Preparar o candidato para simulados maiores.

### 5.4. Simulado por assunto

Contém questões de um assunto específico.

Deve ser utilizado após o estudo ou durante revisões.

### 5.5. Simulado de revisão

Seleciona questões com base em:

- Erros anteriores.
- Assuntos com baixo desempenho.
- Conteúdos ainda não revisados.
- Questões com alto índice de dificuldade individual.
- Revisões programadas.

### 5.6. Simulado diagnóstico

Deve ser utilizado para identificar o nível inicial de conhecimento.

Características:

- Cobertura ampla.
- Preferência por questões de dificuldade variada.
- Identificação de lacunas conceituais.
- Registro do desempenho inicial.
- Não deve ser utilizado isoladamente para determinar prioridades definitivas.

## 6. Classificação das questões

Toda questão utilizada deve manter sua classificação de origem, conforme `questoes-cesgranrio/SKILL.md`.

| Tipo | Identificação | Regra |
|---|---|---|
| Oficial | OFI | Questão efetivamente aplicada e verificável |
| Adaptada | ADP | Questão original identificada, com alterações documentadas |
| Autoral | AUT | Questão produzida pelo projeto |

Não misturar as categorias sem identificação.

### 6.1. Questões oficiais

Utilizar somente questões cuja origem possa ser verificada.

Registrar:

- Instituição organizadora.
- Concurso.
- Cargo ou ênfase.
- Ano.
- Número da questão.
- Fonte.
- Gabarito oficial, quando disponível.

Não reconstruir questões oficiais de memória nem atribuir questões autorais à Cesgranrio.

### 6.2. Questões adaptadas

Registrar a questão de origem e as alterações realizadas.

Identificar claramente que a questão não reproduz integralmente a original.

Quando a alteração modificar o sentido ou a resposta, revisar e validar o novo gabarito.

### 6.3. Questões autorais

Utilizar a identificação:

**Questão autoral — estilo Cesgranrio.**

As questões devem seguir os padrões de qualidade definidos na Skill de questões.

Não afirmar que uma questão autoral representa uma tendência comprovada da banca.

## 7. Composição dos simulados

### 7.1. Seleção das questões

Antes da montagem:

1. Consultar o banco disponível.
2. Filtrar questões por módulo e assunto.
3. Verificar classificação e origem.
4. Verificar se o gabarito foi validado.
5. Identificar questões já utilizadas recentemente.
6. Verificar duplicidades.
7. Selecionar questões compatíveis com o objetivo do simulado.

Priorizar questões inéditas para o candidato, sem comprometer a qualidade.

### 7.2. Distribuição de dificuldade

Quando houver classificação disponível, buscar equilíbrio entre:

- Fácil.
- Média.
- Difícil.

A distribuição deve ser registrada como critério pedagógico, não como reprodução de uma distribuição oficial não documentada.

Não classificar questões apenas pela extensão do enunciado ou pelo número de cálculos.

A dificuldade deve considerar:

- Complexidade conceitual.
- Necessidade de interpretação.
- Quantidade de etapas de raciocínio.
- Integração entre assuntos.
- Grau de aplicação prática.
- Plausibilidade dos distratores.

### 7.3. Variedade cognitiva

Os simulados devem avaliar diferentes habilidades:

- Reconhecimento de conceitos.
- Compreensão.
- Interpretação.
- Comparação.
- Aplicação.
- Análise de cenários.
- Resolução de problemas.
- Raciocínio lógico.

Evitar provas compostas exclusivamente por questões de memorização.

### 7.4. Reutilização de questões

Registrar o histórico de utilização das questões.

Evitar repetição excessiva em simulados consecutivos.

A reutilização é permitida quando houver objetivo pedagógico, como revisão de erros ou reavaliação de conteúdo.

Nesse caso, identificar a questão como já utilizada.

## 8. Qualidade e validação das questões

Antes de incluir uma questão, verificar:

- Enunciado claro e completo.
- Compatibilidade com o edital.
- Cinco alternativas A-E.
- Apenas uma alternativa correta, salvo disposição expressa diferente no formato oficial.
- Distratores plausíveis.
- Ausência de ambiguidade.
- Correção técnica.
- Gabarito validado.
- Explicação fundamentada.
- Classificação de origem.
- Identificação do módulo e assunto.

### 8.1. Questões com problemas

Não incluir questões com:

- Mais de uma alternativa defensável.
- Nenhuma alternativa correta.
- Enunciado incompleto.
- Referência inexistente.
- Gabarito contraditório.
- Conteúdo fora do edital sem justificativa.
- Erros conceituais.
- Alternativas que entregam a resposta por diferença evidente de construção.

Questões com dúvidas devem ser colocadas em revisão, não utilizadas em simulados avaliativos.

### 8.2. Validação independente

Sempre que possível, validar o gabarito por um caminho diferente daquele utilizado para criar a questão.

Para questões técnicas:

1. Resolver a questão independentemente.
2. Consultar a referência técnica.
3. Conferir todas as alternativas.
4. Verificar se existe interpretação alternativa defensável.
5. Registrar eventuais limitações.

Não considerar uma questão validada apenas porque o próprio processo de geração produziu uma resposta.

## 9. Gabarito comentado

Todo simulado deve possuir gabarito comentado em documento ou seção separada.

Para cada questão, apresentar:

1. Número da questão.
2. Alternativa correta.
3. Fundamentação da resposta.
4. Explicação das alternativas incorretas.
5. Conceito central avaliado.
6. Módulo e assunto.
7. Referência utilizada, quando aplicável.

A explicação deve ensinar o conteúdo, não apenas justificar a letra correta.

Para questões com cálculos ou raciocínio lógico, apresentar o desenvolvimento necessário para permitir a reprodução da solução.

Para questões oficiais, distinguir o gabarito publicado pela banca da análise técnica produzida pelo projeto.

Se houver divergência entre o gabarito oficial e a análise técnica, registrar a divergência e não alterar silenciosamente a resposta oficial.

## 10. Aplicação dos simulados

Os simulados devem permitir:

- Início da prova.
- Cronômetro.
- Navegação entre questões.
- Seleção de alternativas.
- Alteração de respostas.
- Marcação de questões para revisão.
- Identificação de questões respondidas e não respondidas.
- Finalização e entrega.
- Correção automática.
- Visualização do resultado.

A experiência deve ser compatível com desktop e dispositivos móveis.

### 10.1. Cronômetro

O cronômetro deve:

- Exibir tempo decorrido.
- Permitir configurar o tempo disponível, quando aplicável.
- Exibir o tempo restante.
- Alertar sobre o encerramento.
- Registrar o tempo total utilizado.

Não presumir duração oficial se ela não estiver documentada no edital.

Quando o tempo for definido pelo projeto, identificá-lo como configuração pedagógica.

### 10.2. Navegação

O candidato deve conseguir:

- Avançar e retornar.
- Consultar o número da questão.
- Identificar questões respondidas.
- Identificar questões sem resposta.
- Identificar questões marcadas para revisão.

### 10.3. Finalização

Antes da entrega, apresentar uma confirmação contendo:

- Total de questões.
- Questões respondidas.
- Questões não respondidas.
- Questões marcadas para revisão.

Após a finalização, bloquear alterações naquela tentativa e registrar o resultado.

Não exibir o gabarito durante a aplicação de um simulado avaliativo.

## 11. Correção e indicadores de desempenho

Após a finalização, apresentar:

### 11.1. Resultado geral

- Total de questões.
- Total de acertos.
- Total de erros.
- Total de questões em branco.
- Percentual de aproveitamento.
- Tempo utilizado.
- Tempo médio por questão.

Fórmula:

\[
\text{Aproveitamento} =
\frac{\text{Acertos}}{\text{Questões válidas respondidas ou totais da prova}}
\times 100
\]

Para evitar ambiguidade, apresentar o percentual sobre o total da prova, incluindo questões em branco, e informar separadamente os acertos entre as questões respondidas.

### 11.2. Resultado por disciplina

Nos simulados completos, separar:

- Conhecimentos específicos.
- Língua Portuguesa.
- Língua Inglesa.

### 11.3. Resultado por módulo e assunto

Nos conhecimentos específicos, apresentar:

- Questões realizadas.
- Acertos.
- Erros.
- Aproveitamento.
- Assuntos com maior dificuldade.

Não calcular conclusões estatísticas relevantes com amostras muito pequenas sem indicar a limitação.

### 11.4. Evolução histórica

Permitir comparar tentativas anteriores:

- Evolução do aproveitamento.
- Desempenho por módulo.
- Desempenho por assunto.
- Tempo médio.
- Taxa de questões em branco.
- Evolução da dificuldade.

Comparações devem considerar se os simulados possuem composição e dificuldade semelhantes.

Não interpretar aumento de percentual como melhora inequívoca quando os simulados forem significativamente diferentes.

## 12. Integração com o caderno de erros

Após a correção, permitir registrar questões incorretas ou não respondidas no caderno de erros.

Registrar:

- ID da questão.
- Data da tentativa.
- Simulado de origem.
- Módulo.
- Assunto.
- Resposta escolhida.
- Resposta correta.
- Tipo de erro.
- Observação do candidato.
- Próxima revisão.

Classificações sugeridas:

- Falta de conhecimento.
- Erro de interpretação.
- Confusão entre conceitos.
- Erro de cálculo.
- Desatenção.
- Gestão inadequada do tempo.
- Chute.
- Dúvida entre alternativas.

A classificação deve poder ser alterada pelo candidato.

Não classificar automaticamente todos os erros como falta de conhecimento.

## 13. Integração com revisão espaçada

As questões incorretas devem poder alimentar a fila de revisão.

Utilizar o mecanismo de revisão definido no projeto.

O sistema deve permitir:

- Revisar questões erradas.
- Revisar questões acertadas com dificuldade.
- Repetir questões após intervalos.
- Acompanhar a evolução.
- Marcar um assunto como revisado.

A periodicidade deve ser configurável ou seguir a metodologia estabelecida em `docs/estrategia/metodologia-estudo.md`.

Não considerar uma questão dominada apenas porque foi respondida corretamente uma única vez.

## 14. Organização dos arquivos

Utilizar a seguinte estrutura:

```text
banco-questoes/
│
├── simulados/
│   ├── por-assunto/
│   ├── por-modulo/
│   ├── revisao/
│   └── diagnostico/
│
├── especificos-50-questoes/
│
├── completos-70-questoes/
│
└── gabaritos-comentados/
```

Padrão de nomenclatura:

```text
SIM-DIAG-001.md
SIM-M01-001.md
SIM-REV-001.md
SIM-ESP-001.md
SIM-COMP-001.md

GAB-SIM-DIAG-001.md
GAB-SIM-M01-001.md
GAB-SIM-ESP-001.md
GAB-SIM-COMP-001.md
```

Cada simulado deve ter identificador único.

## 15. Estrutura documental do simulado

Utilizar o modelo:

```markdown
# Simulado — [Nome]

## Identificação
- ID:
- Concurso: Transpetro 2026.4
- Ênfase: 5 — Análise de Sistemas: Processos de Negócios
- Banca: Fundação Cesgranrio
- Tipo:
- Quantidade de questões:
- Data de criação:
- Versão:

## Objetivo
[Objetivo pedagógico]

## Composição
[Distribuição por disciplina, módulo e assunto]

## Critérios
- Nível de dificuldade:
- Tempo sugerido:
- Critério de seleção:
- Observações sobre a distribuição:

## Questões

[Questões numeradas de forma sequencial]

## Referências
[Fontes utilizadas]
```

O gabarito comentado deve permanecer separado quando o simulado for destinado à aplicação.

## 16. Integração com o site

O site deve consumir os simulados a partir de arquivos estruturados, preferencialmente JSON.

Cada questão deve possuir:

- ID.
- Tipo de origem.
- Módulo.
- Assunto.
- Enunciado.
- Alternativas.
- Resposta correta.
- Comentário.
- Dificuldade.
- Referência.
- Identificação do simulado.

Exemplo de estrutura:

```json
{
  "id": "AUT-000001",
  "tipo": "autoral",
  "modulo": "01",
  "assunto": "Modelagem de Dados",
  "dificuldade": "media",
  "enunciado": "Enunciado da questão.",
  "alternativas": {
    "A": "Alternativa A",
    "B": "Alternativa B",
    "C": "Alternativa C",
    "D": "Alternativa D",
    "E": "Alternativa E"
  },
  "gabarito": "C",
  "comentario": "Justificativa técnica.",
  "referencia": "Fonte consultada."
}
```

O exemplo é ilustrativo. A estrutura definitiva deve ser compatível com o modelo de dados adotado no projeto.

### 16.1. Persistência

O sistema deve utilizar `localStorage` para armazenar:

- Tentativas.
- Respostas.
- Resultados.
- Tempo utilizado.
- Questões marcadas.
- Histórico de desempenho.

Os dados devem permanecer disponíveis após o fechamento e reabertura do navegador, respeitadas as limitações do armazenamento local.

Implementar exportação e importação de dados para permitir backup e migração.

Não transmitir dados do candidato para serviços externos.

### 16.2. Separação entre conteúdo e aplicação

Manter:

- Questões em arquivos de dados.
- Configuração dos simulados separada.
- Gabaritos e comentários estruturados.
- Lógica de aplicação no JavaScript.
- Indicadores calculados a partir das tentativas.

Não duplicar questões em diferentes arquivos sem necessidade.

## 17. Critérios de conclusão

Um simulado somente pode ser considerado concluído quando:

- [ ] Estrutura compatível com o tipo de simulado.
- [ ] Conteúdo dentro do escopo do edital.
- [ ] Questões identificadas por origem.
- [ ] Distribuição temática documentada.
- [ ] Cinco alternativas por questão.
- [ ] Gabaritos validados.
- [ ] Comentários completos.
- [ ] Ausência de duplicidades indevidas.
- [ ] Referências verificadas.
- [ ] Arquivos salvos nos diretórios corretos.
- [ ] Integração com o site validada, quando aplicável.
- [ ] Correção e indicadores testados.
- [ ] Caderno de erros integrado.
- [ ] Controle de qualidade atualizado.

## 18. Comportamento obrigatório do Claude

Ao criar ou atualizar simulados:

1. Consultar o edital e a matriz de conteúdo.
2. Verificar a disponibilidade de questões no banco.
3. Priorizar questões oficiais verificáveis quando adequadas.
4. Identificar corretamente questões adaptadas e autorais.
5. Não inventar questões oficiais, referências ou gabaritos.
6. Não inventar a distribuição temática oficial das 50 questões específicas.
7. Registrar distribuições pedagógicas como decisões do projeto.
8. Validar todas as alternativas.
9. Produzir gabaritos comentados.
10. Evitar reutilização excessiva de questões.
11. Atualizar os indicadores e controles.
12. Informar limitações e pendências.
13. Não declarar um simulado validado sem concluir a revisão.

## 19. Princípio central

Um simulado deve reproduzir as condições e a estrutura documentadas da avaliação, testar o domínio real do conteúdo e produzir informações úteis para orientar o estudo.

A quantidade de questões não determina sua qualidade.

A prioridade é a validade técnica, a aderência ao edital, a qualidade dos itens e a capacidade de identificar lacunas de aprendizagem.