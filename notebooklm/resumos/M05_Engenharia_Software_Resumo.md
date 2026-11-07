# Resumo — Módulo M05: Engenharia de Software

## Identificação
- Concurso: Processo Seletivo Público TRANSPETRO 2026.4 (Edital nº 04/2026)
- Ênfase: 5 — Análise de Sistemas: Processos de Negócios
- Banca: Fundação Cesgranrio
- Origem: seções "Síntese" dos arquivos de `conteudo/05-engenharia-software/` (extraídas automaticamente, sem reescrita)

Este resumo complementa o documento completo do módulo; não o substitui.

## Fundamentos de Engenharia de Software

- Engenharia de software: abordagem sistemática ao ciclo de vida do software.
- Processo, método, técnica, ferramenta, artefato.
- Qualidade (ISO/IEC 25010): 8 características (2011) ou 9 (2023, segundo fontes secundárias).
- Manutenção: corretiva, adaptativa, perfectiva, preventiva.
- Mapa: 5.1 requisitos; 5.2 ciclo de vida; 5.3 análise e projeto; 5.4 V&V e teste; 5.5 ambientes.

## Levantamento, Análise e Gerenciamento de Requisitos

- Requisito: condição ou capacidade necessária; níveis: negócio, partes interessadas, solução, domínio, transição.
- RF (o que) × RNF (como; qualidade) × restrições.
- Processo: levantamento → análise/negociação → especificação → validação; gerenciamento contínuo.
- Técnicas: entrevistas, questionários, observação, *workshops*, protótipos, cenários/casos de uso, histórias.
- Priorização: MoSCoW, Kano, valor×esforço.
- Qualidade: necessário, claro, completo, consistente, verificável, viável, rastreável.
- Gerenciamento: linha de base, controle de mudanças, rastreabilidade, versões, volatilidade.

## Ciclo de Vida de Sistemas e seus Paradigmas

- Ciclo de vida: fases e atividades da concepção à desativação; modelo = representação do processo.
- Paradigmas: sequencial, iterativo, incremental, evolutivo, ágil, reuso.
- Cascata e V: sequenciais; V relaciona fases e testes.
- Prototipação (descartável/evolutiva); incremental (partes); iterativo (refinamento); espiral (riscos).
- PU: concepção (escopo/viabilidade), elaboração (arquitetura), construção, transição.
- Ágil/DevOps: ciclos curtos e contínuos.
- Escolha pelo contexto; abordagens híbridas.

## Paradigmas: Estruturado e Orientado a Objetos

- Estruturado: sequência, seleção, repetição; módulos; *top-down*; dados e funções separados.
- OO: objetos e classes; abstração, encapsulamento, herança, polimorfismo.
- Polimorfismo: sobrecarga (mesma classe, parâmetros diferentes) e sobrescrita (subclasse, mesma assinatura); subtipo.
- Relações: associação, agregação, composição, generalização, realização, dependência.
- Coesão alta, acoplamento baixo.
- SOLID e padrões de projeto (complemento).

## Análise e Projeto de Sistemas: Modelos, Metodologias, Técnicas e Ferramentas

- Análise (o quê) × projeto (como); modelo × metodologia × técnica × ferramenta.
- Estruturado: DFD (contexto, nível 0, decomposição), dicionário de dados, especificação de processos, DTE, diagrama de estrutura; coesão/acoplamento.
- OO/UML 2.5.1: 14 diagramas (7 estruturais + 7 comportamentais); casos de uso, classes, sequência, atividades, estados, componentes, implantação.
- Processo OO: casos de uso → modelo de domínio → interação → classes de projeto → arquitetura.
- Metodologias: estruturadas, Processo Unificado, ágeis, MDD.
- Ferramentas CASE: modelagem, geração de código, engenharia reversa, rastreabilidade.

## Verificação, Validação e Teste de Software

- Verificação (produto correto) × validação (produto certo); teste como parte de V&V; erro → defeito → falha.
- Estático (revisão informal, *walkthrough*, revisão técnica, inspeção, análise estática) × dinâmico (níveis: unidade, integração, sistema, aceitação).
- Tipos: funcional, não funcional, estrutural, confirmação, regressão, *smoke*, exploratório.
- Caixa-preta (partição, valor limite, tabela de decisão, estados, casos de uso); caixa-branca (comandos, decisões, condições; V(G) = E − N + 2); mutação.
- Processo: planejar, projetar, implementar, executar, concluir; defeitos (severidade × prioridade).
- Automação: pirâmide, TDD, BDD, integração contínua.

## Ambientes de Desenvolvimento de Software (e Ambientes de Teste)

- Ambiente de desenvolvimento: IDE, compilação/interpretação, depuração, dependências, *build*, qualidade, testes, controle de versão, contêineres.
- Controle de versão (*commit*, *branch*, *merge*, *tag*); SCM e linhas de base.
- CI/CD: integração contínua; entrega contínua (liberável) × implantação contínua (automática); pipeline; *build once, deploy many*.
- Ambientes: desenvolvimento, integração, teste, homologação, produção; paridade; segredos; dados mascarados.
- Contêineres, orquestração, IaC, nuvem; DevOps (CALMS) e DevSecOps.
