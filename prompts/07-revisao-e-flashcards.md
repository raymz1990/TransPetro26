# 07 — SISTEMA DE REVISÃO ESPAÇADA E FLASHCARDS

## Objetivo

Construir um sistema estruturado de revisão e flashcards para o concurso Transpetro 2026.4 — Ênfase 5: Análise de Sistemas: Processos de Negócios.

O sistema deverá transformar os conteúdos teóricos, questões comentadas e resultados dos simulados em materiais de recuperação ativa, permitindo:

- Memorizar conceitos fundamentais.
- Compreender relações entre conceitos.
- Diferenciar conceitos semelhantes.
- Revisar classificações, etapas e frameworks.
- Memorizar fórmulas e regras.
- Identificar confusões recorrentes.
- Recuperar conhecimentos em intervalos programados.
- Acompanhar a retenção ao longo do tempo.
- Priorizar assuntos com maior dificuldade.
- Integrar revisões ao planejamento de estudos.

**Princípio central:** a revisão deverá ser orientada pela recuperação ativa e pelo desempenho real do estudante, não apenas pela releitura de materiais.

---

## 1. Preparação obrigatória

Antes de iniciar, leia:

- `CLAUDE.md`
- `.claude/skills/conteudo-didatico/SKILL.md`
- `.claude/skills/questoes-cesgranrio/SKILL.md`
- `docs/edital/anexo-IV-extraido.md`
- `docs/edital/matriz-conteudo.md`
- `docs/edital/controle-cobertura.md`

Consulte também:

- Materiais teóricos validados.
- Banco de questões.
- Gabaritos comentados.
- Histórico de simulados, quando disponível.
- Materiais preparados para NotebookLM.

### Condições para iniciar

Confirme que:

1. O edital foi auditado.
2. A matriz de conteúdo está validada.
3. Os materiais teóricos possuem status de validação.
4. O banco de questões está organizado.
5. Os identificadores dos assuntos e módulos são consistentes.

Se houver conteúdo pendente, não o transforme em flashcards definitivos.

---

## 2. Estrutura temática

Organize os flashcards de acordo com os nove módulos pedagógicos:

1. Arquitetura de Dados.
2. Gerenciamento de Projetos e Produtos.
3. Processos, grupos de processos e áreas de conhecimento.
4. Gestão e Governança em TI.
5. Engenharia de Software.
6. Experiência do Usuário.
7. Análise de Dados e Informações.
8. Lógica Matemática.
9. Segurança da Informação.

Cada cartão deverá estar associado a:

- Módulo.
- Assunto.
- Item específico do edital.
- Material de origem.
- Dificuldade.
- Tipo de conhecimento.
- Status de validação.

Não crie cartões sobre conteúdos fora do edital sem autorização.

---

## 3. Tipos de flashcards

O sistema deverá contemplar diferentes formatos de recuperação ativa.

### 3.1 Definição

Objetivo: memorizar conceitos fundamentais.

Exemplo:

**Frente:** O que é normalização de dados?

**Verso:** Processo de organização de tabelas para reduzir redundâncias e anomalias.

### 3.2 Comparação

Objetivo: diferenciar conceitos semelhantes.

Exemplo:

**Frente:** Qual a diferença entre OLTP e OLAP?

**Verso:** OLTP prioriza transações operacionais; OLAP prioriza análise de dados.

### 3.3 Classificação

Objetivo: memorizar categorias e estruturas.

Exemplo:

**Frente:** Quais são os três pilares clássicos da segurança da informação?

**Verso:** Confidencialidade, integridade e disponibilidade.

### 3.4 Sequência e etapas

Objetivo: recuperar processos ordenados.

Exemplo:

**Frente:** Quais etapas compõem o ciclo PDCA?

**Verso:** Plan, Do, Check e Act.

Utilize sequências somente quando a ordem for relevante para o conceito estudado.

### 3.5 Aplicação

Objetivo: reconhecer a aplicação de um conceito em um cenário.

Exemplo:

**Frente:** Qual propriedade ACID garante a execução integral de uma transação?

**Verso:** Atomicidade: todas as operações são concluídas ou nenhuma é aplicada.

### 3.6 Fórmulas e cálculos

Objetivo: memorizar fórmulas, componentes e aplicações.

A frente deverá solicitar a fórmula ou o procedimento.

O verso deverá apresentar:

- Fórmula.
- Significado das variáveis.
- Condições de aplicação.
- Unidade, quando aplicável.
- Erro comum.

### 3.7 Identificação de erro

Objetivo: reconhecer afirmações incorretas.

Exemplo:

**Frente:** Em Scrum, o Product Owner é responsável por comandar diariamente os desenvolvedores?

**Verso:** Não. O Product Owner maximiza o valor do produto e gerencia o Product Backlog.

### 3.8 Exceções e pontos de atenção

Objetivo: memorizar condições que alteram a aplicação de uma regra.

Exemplo:

**Frente:** Toda chave estrangeira precisa ser única?

**Verso:** Não. Uma chave estrangeira pode apresentar valores repetidos.

Os exemplos são ilustrativos. O conteúdo definitivo deverá ser verificado nas fontes teóricas aprovadas.

---

## 4. Regras de elaboração

Cada cartão deverá trabalhar preferencialmente uma única informação ou relação conceitual.

### Frente

- Pergunta direta.
- Contexto suficiente para compreensão.
- Linguagem objetiva.
- Sem pistas involuntárias.
- Sem perguntas excessivamente amplas.

### Verso

- Resposta tecnicamente correta.
- Explicação curta.
- Informação essencial preservada.
- Exemplo breve, quando necessário.
- Exceção ou ressalva, quando importante.

### Extensão

Como referência:

- Frente: preferencialmente até 120 caracteres.
- Verso: preferencialmente até 250 caracteres.
- Cartões mais extensos somente quando a explicação exigir.

Evite cartões que tentem condensar um capítulo inteiro.

Não utilize respostas vagas como "depende", sem explicar as condições.

### Qualidade pedagógica

Evite:

- Perguntas com múltiplas respostas possíveis.
- Respostas excessivamente longas.
- Repetição do mesmo conceito com redações diferentes.
- Informações sem relevância para o edital.
- Memorização de detalhes sem utilidade.
- Simplificações que alterem o conceito técnico.

---

## 5. Tipos de conhecimento e classificação

Cada flashcard deverá possuir uma categoria principal:

- Conceito.
- Definição.
- Comparação.
- Classificação.
- Processo.
- Sequência.
- Fórmula.
- Norma ou framework.
- Aplicação.
- Exceção.
- Erro recorrente.

Também deverá possuir uma classificação de dificuldade:

- Fácil.
- Média.
- Difícil.

A dificuldade deverá considerar a complexidade de recuperação da informação e não apenas a extensão do cartão.

---

## 6. Identificação e rastreabilidade

Utilize identificadores únicos:

`FLA-000001`

Cada cartão deverá conter:

- ID.
- Frente.
- Verso.
- Módulo.
- Assunto.
- Item do edital.
- Categoria.
- Dificuldade.
- Fonte teórica.
- Questão relacionada, quando aplicável.
- Data de criação.
- Versão.
- Status de validação.

Status permitidos:

- Rascunho.
- Em revisão.
- Validado.
- Desatualizado.
- Reprovado.

Somente cartões validados deverão entrar no sistema principal de revisão.

Quando um cartão for baseado em questão, registre o ID da questão correspondente.

---

## 7. Algoritmo de revisão espaçada

Implemente um sistema de revisão baseado no desempenho do estudante.

A primeira versão poderá utilizar intervalos progressivos configuráveis:

| Resultado da revisão | Próximo intervalo sugerido |
|---|---|
| Erro ou esquecimento | 1 dia |
| Acerto com dificuldade | 3 dias |
| Acerto com segurança | 7 dias |
| Acerto consistente | 15 dias |
| Retenção consolidada | 30 dias |

Esses intervalos são parâmetros pedagógicos iniciais, não uma regra científica universal.

Permita ajustes posteriores.

### 7.1 Classificação da resposta

Após visualizar o verso, o estudante deverá classificar sua recuperação:

- Não lembrei.
- Lembrei com dificuldade.
- Lembrei com segurança.

### 7.2 Comportamento do sistema

- Resposta incorreta: retornar ao intervalo curto.
- Resposta com dificuldade: manter progressão conservadora.
- Resposta segura: ampliar o intervalo.
- Erros repetidos: destacar o cartão.
- Cartões atrasados: priorizar na fila de revisão.

A resposta deve ser registrada com data e histórico.

### 7.3 Parâmetros adicionais

Registre:

- Última revisão.
- Próxima revisão.
- Número de revisões.
- Número de erros.
- Número de acertos.
- Sequência de acertos.
- Última avaliação.
- Intervalo atual.

Não utilize somente o número de acertos para determinar domínio. Considere também a dificuldade declarada pelo estudante e o histórico de erros.

---

## 8. Sessões de revisão

O sistema deverá oferecer sessões diferentes.

### 8.1 Revisão diária

Exibir cartões vencidos ou previstos para o dia.

Prioridade:

1. Cartões atrasados.
2. Cartões com erros recorrentes.
3. Cartões de assuntos prioritários.
4. Cartões novos, quando houver capacidade.

### 8.2 Revisão por módulo

Permitir selecionar qualquer um dos nove módulos.

### 8.3 Revisão por assunto

Permitir estudar um assunto específico.

### 8.4 Revisão dos erros

Exibir cartões que foram respondidos incorretamente ou com dificuldade.

### 8.5 Revisão geral

Misturar assuntos diferentes para treinar recuperação em contexto variado.

### 8.6 Revisão pré-prova

Priorizar:

- Conceitos fundamentais.
- Classificações.
- Fórmulas.
- Diferenças entre conceitos.
- Exceções.
- Assuntos prioritários.
- Cartões com baixo desempenho.

---

## 9. Geração de flashcards a partir do conteúdo

Utilize os materiais teóricos aprovados como fonte primária.

Para cada assunto:

1. Identifique conceitos essenciais.
2. Identifique classificações.
3. Identifique etapas e sequências.
4. Identifique fórmulas.
5. Identifique comparações importantes.
6. Identifique exceções.
7. Identifique erros conceituais recorrentes.
8. Identifique conceitos cobrados nas questões.
9. Elabore cartões de recuperação ativa.
10. Revise a precisão técnica.

### Critério de seleção

Não transforme todos os parágrafos em cartões.

Priorize informações que:

- Precisam ser recuperadas sem consulta.
- São fundamentais para resolver questões.
- Apresentam confusão frequente.
- Possuem classificações ou sequências.
- Exigem memorização de fórmulas ou regras.
- Conectam diferentes assuntos.

### Quantidade

A quantidade deverá variar conforme a densidade do assunto.

Não estabeleça um número fixo de cartões por capítulo.

A qualidade e a cobertura são mais importantes do que a quantidade.

---

## 10. Geração a partir de questões e simulados

Utilize erros reais do estudante para gerar cartões complementares.

Exemplos:

- Erro por confusão conceitual: cartão comparativo.
- Erro por desconhecimento: cartão de definição.
- Erro de interpretação: cartão com cenário.
- Erro de cálculo: cartão de fórmula e aplicação.
- Erro por exceção: cartão específico sobre a condição.
- Erro recorrente: cartão de reforço.

Não gere cartões automaticamente a partir de toda questão errada sem avaliar a natureza do erro.

Evite duplicar cartões existentes.

Cada cartão derivado de uma questão deverá preservar a referência ao ID original.

---

## 11. Integração com o planejamento de estudos

As revisões deverão aparecer no planejamento diário.

O sistema deverá considerar:

- Cartões vencidos.
- Quantidade prevista para revisão.
- Assuntos prioritários.
- Tempo disponível.
- Histórico de desempenho.
- Proximidade da prova.

Permita configurar uma meta diária de cartões.

A meta deverá ser flexível e não poderá impedir a revisão de cartões atrasados.

Se o volume acumulado for elevado, o sistema deverá sinalizar sobrecarga e sugerir priorização, sem descartar automaticamente cartões.

---

## 12. Indicadores de desempenho

Apresente indicadores úteis:

### Indicadores gerais

- Total de cartões.
- Cartões validados.
- Cartões revisados.
- Cartões pendentes.
- Cartões atrasados.
- Taxa de recuperação.
- Quantidade de erros.
- Sequência de acertos.

### Indicadores por módulo

- Total de cartões.
- Taxa de recuperação.
- Cartões com dificuldade.
- Cartões com erros recorrentes.
- Assuntos com maior dificuldade.

### Indicadores temporais

- Cartões revisados por dia.
- Evolução da taxa de recuperação.
- Volume de revisões pendentes.
- Evolução por semana e mês.

Não confunda taxa de recuperação dos cartões com domínio completo do assunto ou probabilidade de aprovação.

---

## 13. Organização dos arquivos

Respeite a estrutura existente:

`site/assets/data/flashcards.json`

`notebooklm/fontes/`

`notebooklm/resumos/`

`notebooklm/mapas-mentais/`

Organize os dados de maneira que possam ser utilizados tanto pela plataforma quanto pelo NotebookLM.

### Modelo conceitual

```json
{
  "id": "FLA-000001",
  "frente": "O que é normalização de dados?",
  "verso": "Organização de tabelas para reduzir redundâncias e anomalias.",
  "modulo": "01-arquitetura-dados",
  "assunto": "Modelagem de dados",
  "item_edital": "REFERENCIA_VALIDADA",
  "categoria": "conceito",
  "dificuldade": "facil",
  "fonte": "conteudo/01-arquitetura-dados/modelagem.md",
  "questao_relacionada": null,
  "status_validacao": "validado"
}
```

O exemplo é ilustrativo. Utilize o esquema definitivo já adotado no projeto.

Os dados estáticos dos cartões deverão ficar separados do histórico de revisão individual.

---

## 14. Integração com localStorage

O histórico de revisão deverá utilizar localStorage, respeitando as regras do Skill do site.

Armazene:

- ID do cartão.
- Data da primeira revisão.
- Data da última revisão.
- Próxima revisão.
- Intervalo.
- Resultado das revisões.
- Quantidade de erros.
- Quantidade de acertos.
- Histórico de avaliações.

Implemente:

- Versionamento do esquema.
- Migração de dados.
- Exportação.
- Importação.
- Validação dos dados.
- Recuperação de backup.

Não apague o histórico de revisão ao atualizar os arquivos estáticos.

Quando um cartão for atualizado, preserve o histórico sempre que o identificador e o conceito continuarem equivalentes.

---

## 15. Interface de revisão

A implementação futura no site deverá contemplar:

### Tela principal

- Revisões previstas para hoje.
- Cartões atrasados.
- Cartões novos.
- Progresso diário.
- Desempenho recente.

### Tela do cartão

- Frente.
- Ação para revelar o verso.
- Verso.
- Classificação da resposta.
- Navegação para o próximo cartão.

### Tela de filtros

- Módulo.
- Assunto.
- Dificuldade.
- Categoria.
- Status.
- Situação da revisão.

### Tela de desempenho

- Evolução.
- Acertos e erros.
- Revisões atrasadas.
- Desempenho por assunto.
- Cartões com maior dificuldade.

A interface deverá respeitar a identidade visual já definida no `CLAUDE.md`.

Não utilize componentes decorativos sem função.

---

## 16. Integração com NotebookLM

Prepare os flashcards para exportação em fontes independentes.

Organize por:

- Módulo.
- Assunto.
- Categoria.
- Dificuldade.

Crie materiais que permitam ao NotebookLM:

- Fazer perguntas de recuperação.
- Comparar conceitos.
- Solicitar definições.
- Apresentar cenários de aplicação.
- Identificar erros conceituais.
- Elaborar revisões.

Não trate os flashcards como substitutos da teoria.

As fontes deverão preservar a referência ao material teórico original.

---

## 17. Validação e qualidade

Antes de liberar os cartões, verifique:

- [ ] O cartão corresponde ao edital.
- [ ] A fonte está identificada.
- [ ] O conceito está correto.
- [ ] A pergunta avalia uma informação específica.
- [ ] A resposta é objetiva.
- [ ] Não existe ambiguidade.
- [ ] Não há duplicidade desnecessária.
- [ ] A dificuldade é coerente.
- [ ] O cartão está associado ao módulo e assunto corretos.
- [ ] O identificador é único.
- [ ] O status de validação está preenchido.
- [ ] O formato é compatível com a plataforma.
- [ ] O histórico de revisão está separado do conteúdo estático.

---

## 18. Execução por fases

Não implemente todo o sistema de uma só vez.

### Fase 1 — Auditoria e estrutura

- Verificar os materiais existentes.
- Identificar assuntos aptos a gerar cartões.
- Definir o esquema JSON.
- Definir os critérios de validação.
- Definir os parâmetros iniciais de revisão.

Apresentar o diagnóstico e aguardar aprovação.

### Fase 2 — Lote piloto

Criar flashcards para o primeiro módulo da matriz validada.

O lote deverá contemplar os diferentes tipos de cartões.

Não estabeleça quantidade fixa se isso prejudicar a qualidade.

Apresentar:

- Cartões criados.
- Fontes.
- Classificações.
- Cobertura.
- Problemas encontrados.

Aguardar aprovação.

### Fase 3 — Expansão

Após aprovação:

- Produzir cartões para os demais módulos.
- Priorizar assuntos P0 e P1.
- Identificar lacunas.
- Criar cartões a partir de erros reais, quando disponíveis.

Trabalhar um módulo por vez.

### Fase 4 — Revisão espaçada

Implementar o algoritmo de revisão e o armazenamento do histórico.

Validar:

- Cálculo dos intervalos.
- Priorização dos atrasados.
- Registro de desempenho.
- Persistência.
- Exportação e importação.

### Fase 5 — Integração com a plataforma

Integrar os cartões à interface e ao planejamento diário.

Executar testes funcionais e de persistência.

### Fase 6 — Consolidação

- Validar todos os cartões.
- Conferir duplicidades.
- Conferir cobertura.
- Conferir histórico.
- Atualizar documentação.
- Produzir relatório final.

Após cada fase, apresentar o resultado e aguardar aprovação.

---

## 19. Relatório de execução

Ao concluir cada fase, informe:

1. Módulos trabalhados.
2. Assuntos contemplados.
3. Quantidade de cartões criados.
4. Quantidade por categoria.
5. Quantidade por dificuldade.
6. Quantidade validada, pendente e reprovada.
7. Itens do edital cobertos.
8. Fontes utilizadas.
9. Lacunas identificadas.
10. Arquivos criados ou atualizados.
11. Testes realizados.
12. Pendências.

---

## 20. Limites desta etapa

Nesta execução, NÃO:

- Altere o edital.
- Crie cartões baseados em conteúdo não validado como se fossem definitivos.
- Inventе conceitos ou referências.
- Confunda revisão de cartões com domínio do conteúdo.
- Desenvolva funcionalidades fora do escopo desta etapa.
- Apague histórico existente.
- Crie duplicidades para aumentar artificialmente o volume.
- Avance automaticamente para o próximo prompt.

**O objetivo é construir um sistema sustentável de recuperação ativa e revisão espaçada, integrado ao conteúdo, às questões e ao desempenho do estudante.**

Execute somente a fase autorizada, apresente o relatório e aguarde minha aprovação antes de avançar.