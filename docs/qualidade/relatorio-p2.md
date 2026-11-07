# Relatório da P2 — Estudo ativo (T09 a T12)

Data: 2026-11-06. Autorização do usuário em bloco. Persistência: tudo no `localStorage` do navegador, exportável em **Meus dados**.

## T09 — Flashcards
- **O que existe:** `tools/build_flashcards.py` gera `site/assets/data/flashcards.json` (executado por `python tools/build_site_data.py`). 2.879 cartões: 2.322 de tabelas de conceitos da teoria, 273 comparações ("Conceito A × Conceito B") e 284 pontos-chave das questões (revisão rápida + ponto de atenção).
- **Rastreabilidade:** cada cartão traz grupo, assunto, seção (ou questão) de origem e abre a teoria ou a questão.
- **Limitação principal:** os cartões foram **extraídos automaticamente** e **não revisados um a um**. Alguns podem ficar longos ou pouco naturais como pergunta. Cobrem só o que está em tabelas e nos comentários das questões; conteúdo apenas em prosa não gera cartão. Não há contagem por item do edital (as teorias citam faixas, como "1.1 a 1.5").
- **Uso:** painel por módulo, filtro por tipo, limite de novos por dia (padrão 20), sessões de até 50 cartões, 4 níveis (Errei, Difícil, Médio, Fácil) com atalhos 1 a 4, repetição dos errados na mesma sessão, treino livre e treino dos difíceis (não alteram o agendamento).

## T10 — Revisão espaçada
- Escada de intervalos: R1 24 h, R2 7 d, R3 15 d, R4 30 d (metodologia, 8.1) e **60 d como degrau final, ajuste do projeto**. Errei volta ao R1; difícil recua um degrau; médio avança um; fácil avança dois (metodologia, 8.3).
- Fila em `#/revisoes`: atrasadas, hoje, próximos 7 dias e lista futura, para teoria marcada como estudada e erros em aberto; os flashcards entram pela tela própria. Erro repetido reinicia no R1. Resolver o erro no caderno remove a revisão.
- Assuntos marcados como estudados antes desta versão entram na fila com a data original (podem aparecer atrasados); há "Redistribuir" para espalhar as atrasadas.
- Assuntos marcados como estudados passam a guardar a data local (antes era UTC).

## T11 — Plano de estudos
- Visões: hoje (blocos 10/35/30/10/5 min em 90 min e 15/55/10/50/25/15/10 em 180 min, proporcionais ao tempo configurado), semana, mês, metas e ajustes; cronômetro de sessão; registro de sessões com os campos da metodologia (15.2).
- O plano é **derivado do que você registrou**: o assunto previsto é o próximo ainda não estudado; sessão não realizada não é apagada nem marcada como concluída. Quarta-feira reserva a teoria para Conhecimentos Gerais; o domingo alterna simulado e consolidação por semana ISO.
- **Premissas do projeto, ajustáveis:** 90/180 min (metodologia), 4 semanas finais sem teoria nova, alternância do domingo. **A data da prova não consta do material do projeto: informe-a em Metas e ajustes.** O ritmo necessário é uma estimativa simples (assuntos restantes ÷ semanas úteis), não uma promessa.

## T12 — Desempenho avançado
- Evolução semanal, simulados (com linha de 50% por área), por módulo, por item de referência, por dificuldade e origem, tempo por questão, caderno de erros, horas e retenção dos flashcards, cobertura por módulo; gráficos em SVG sem dependências, com tabela de dados em cada gráfico.
- **Honestidade estatística:** amostras com menos de 10 respostas são marcadas com `*` ou ponto vazado; aviso global abaixo de 30 respostas; a **1ª tentativa** de cada questão aparece à parte porque refazer após ver o gabarito infla o acerto; **não há nota única de domínio**.
- **Tempo por questão:** medido na tela de Questões só a partir desta versão (respostas antigas não têm tempo); nos simulados vem do tempo já gravado por questão.
- Os "itens" são os rótulos `item_edital` do banco (109 valores, inclusive os de Gerais); não equivalem aos 94 itens do Anexo IV.

## Outras mudanças
- `site/assets/data/simulados.json` foi ressincronizado com `banco-questoes/simulados/` (o arquivo do site estava defasado em 6 simulados).

## Verificação feita
Navegador (servidor local): painel e sessão de flashcards (agendamento conferido), fila de revisões (avaliação, redistribuição, backfill), plano (hoje, semana, mês, metas, registro de sessão), desempenho com dados sintéticos (sem erros de console), tema claro e escuro, 375 px sem rolagem horizontal, exportar/importar (inclusive backup antigo sem os campos novos), `tools/validar_banco.py` (284 questões, 0 erro).

## Não verificado / pendente
Uso real ao longo de semanas; auditoria de acessibilidade por teclado e contraste (T15); outros navegadores; revisão individual dos cartões; teste automatizado das telas.
