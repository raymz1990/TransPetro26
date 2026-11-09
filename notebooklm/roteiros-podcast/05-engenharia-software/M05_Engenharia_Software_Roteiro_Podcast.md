# Roteiro de podcast — M05: Engenharia de Software

## Identificação
- Concurso: Processo Seletivo Público TRANSPETRO 2026.4 (Edital nº 04/2026)
- Ênfase: 5 — Análise de Sistemas: Processos de Negócios
- Banca: Fundação Cesgranrio
- Módulo: M05 — Engenharia de Software
- Formato: revisão oral explicativa (duas vozes ou narração única)
- Fonte de referência: `notebooklm/fontes/M05_Engenharia_Software_Completo.md` e `notebooklm/resumos/M05_Engenharia_Software_Resumo.md`

## Como usar
Adicione ao NotebookLM a fonte completa do módulo e este roteiro. No recurso de áudio, use este arquivo como pauta. Ele é um guia de revisão e **não substitui** o material completo, que prevalece em caso de dúvida. Não contém estatística de incidência em prova nem questões oficiais; as perguntas de fixação são autorais do projeto, sem vínculo com a Cesgranrio.

## 1. Apresentação
Hoje revisamos o módulo M05, Engenharia de Software, da Ênfase 5 da Transpetro 2026.4, banca Fundação Cesgranrio. A ideia é percorrer os conceitos em ordem, comparar o que costuma ser confundido, marcar pontos de atenção e terminar com perguntas de fixação.

## 2. Contextualização no edital
Requisitos, ciclo de vida e paradigmas, análise e projeto (estruturado e OO), verificação, validação e testes, ambientes de desenvolvimento.

## 3. Explicação dos conceitos
### 3.1 Fundamentos
Engenharia de software é a abordagem sistemática ao ciclo de vida do software. A ISO/IEC 25010 descreve 8 características de qualidade (2011); a revisão de 2023 teria 9, segundo fontes secundárias. Manutenção: corretiva, adaptativa, perfectiva e preventiva.

### 3.2 Requisitos
Requisito funcional diz o que o sistema faz; não funcional diz como (qualidade); restrições limitam a solução. Processo: levantamento, análise e negociação, especificação e validação, com gerenciamento contínuo. Técnicas: entrevistas, questionários, observação, workshops, protótipos, cenários e histórias. Priorização: MoSCoW, Kano, valor × esforço. Qualidade do requisito: necessário, claro, completo, consistente, verificável, viável e rastreável.

### 3.3 Ciclo de vida e paradigmas de processo
Cascata e V são sequenciais; o V relaciona fases e testes. Prototipação, incremental, iterativo e espiral (guiado por riscos). Processo Unificado: concepção, elaboração, construção e transição. Ágil/DevOps: ciclos curtos e contínuos. A escolha depende do contexto, e abordagens híbridas são comuns.

### 3.4 Estruturado e orientado a objetos
Estruturado: sequência, seleção e repetição; modularização top-down; dados e funções separados. OO: objetos e classes; abstração, encapsulamento, herança e polimorfismo. Sobrecarga ocorre na mesma classe com parâmetros diferentes; sobrescrita ocorre na subclasse com a mesma assinatura. Relações: associação, agregação, composição, generalização, realização e dependência. Meta: coesão alta e acoplamento baixo.

### 3.5 Análise e projeto
Análise trata do quê; projeto trata do como. Estruturado: DFD (contexto, nível 0, decomposição), dicionário de dados, especificação de processos, DTE. UML 2.5.1: 14 diagramas, 7 estruturais e 7 comportamentais. CASE: modelagem, geração de código e engenharia reversa.

### 3.6 Verificação, validação e testes
Verificação: construímos o produto corretamente? Validação: construímos o produto certo? Erro leva a defeito, que leva a falha. Teste estático (revisões, inspeção, análise estática) × dinâmico (unidade, integração, sistema, aceitação). Caixa-preta: partição de equivalência, valor limite, tabela de decisão. Caixa-branca: cobertura de comandos, decisões e condições; complexidade V(G) = E − N + 2. Regressão, smoke e exploratório. Automação: pirâmide, TDD, BDD e integração contínua.

### 3.7 Ambientes
Controle de versão: commit, branch, merge e tag. CI/CD: entrega contínua (liberável) × implantação contínua (automática). Ambientes: desenvolvimento, integração, teste, homologação e produção, com paridade e dados mascarados. Contêineres, IaC, DevOps e DevSecOps.

## 4. Comparações para fixar
- RF × RNF × restrição.
- Verificação × validação.
- Sobrecarga × sobrescrita.
- Agregação × composição.
- Caixa-preta × caixa-branca.
- Entrega contínua × implantação contínua.

## 5. Armadilhas conceituais (hipóteses de atenção)
São pontos em que a confusão é plausível, não afirmações sobre frequência na prova.
- Trocar as definições de verificação e validação.
- Confundir sobrecarga e sobrescrita.
- Esquecer que V(G) = E − N + 2.
- Afirmar categoricamente que a ISO 25010:2023 tem 9 características sem a ressalva de fonte secundária.

## 6. Recapitulação
Retome em voz alta, na ordem: Fundamentos; Requisitos; Ciclo de vida e paradigmas de processo; Estruturado e orientado a objetos; Análise e projeto; Verificação, validação e testes; Ambientes. Para cada bloco, cite a definição central e uma diferença conceitual.

## 7. Perguntas de fixação (com respostas)
1. **Quantos diagramas tem a UML 2.5.1?** — 14: 7 estruturais e 7 comportamentais.
2. **Qual a diferença entre entrega e implantação contínua?** — Na entrega, o software fica liberável; na implantação, a liberação para produção é automática.
3. **O que o modelo espiral enfatiza?** — A análise de riscos em cada ciclo.
4. **O que é teste de regressão?** — Reexecutar testes para confirmar que mudanças não quebraram o que funcionava.

## Limites
- Roteiro construído a partir das sínteses do módulo; detalhes, exceções e referências estão no documento completo.
- Qualquer analogia usada na gravação deve ser apresentada como simplificação didática, com seu limite explícito.
- Itens marcados no material como "não verificados" mantêm essa ressalva no documento completo.
