# Síntese do projeto e fila de tasks

Data: 2026-11-01. Repositório: `raymz1990/TransPetro26` (branch `main`).
Regra de trabalho: uma task por vez → commit → próxima. Cada task só começa com autorização explícita.

## 1. O que já está feito

| Frente | Estado |
|---|---|
| Auditoria do edital e matriz de cobertura | Concluída. `docs/edital/matriz-conteudo.md` (v1.21) e `controle-cobertura.md`. |
| Catálogo de provas anteriores | 100 questões catalogadas de duas provas (Transpetro 2023 e 2018), com ressalva: gabaritos de terceiros, sem validação oficial. Duas provas não formam amostra para tendências. |
| Teoria da Ênfase 5 | 9 módulos, 94 de 94 itens `VALIDADO` pelo usuário, com ressalvas. |
| Conhecimentos Gerais (Português e Inglês) | 14 itens teóricos `VALIDADO`, com ressalvas. |
| Banco de questões, fase 1 | 90 questões **autorais** validadas (10 por módulo, M1 a M9; AUT-000001 a 090), com cinco alternativas, análise de cada alternativa e verificação por execução quando cabível. 65 de 94 itens com questão principal. |
| Site (MVP) | `site/`: conteúdo (85 arquivos), questões com correção comentada, caderno de erros, desempenho, exportar/importar dados, tema escuro/claro, responsivo. Publicado no repositório; **GitHub Pages ainda não ativado**. |
| Documentação | `docs/CONTEXTO-ATUAL.md`, relatórios por módulo e por lote, `tools/build_site_data.py`. |

## 2. Ressalvas vigentes (valem para todas as tasks)

- Textos de PMI, ISO, ITIL e ISTQB não foram confrontados com a fonte primária.
- Gabaritos de 2018 e 2023 não têm validação oficial da Cesgranrio.
- Decisões suas pendentes: NIST SP 800-61 Rev. 2 × Rev. 3; MITRE ATT&CK 14 × 15 táticas; interpretação do item 9.1; quebra-cabeças de raciocínio lógico no M8.
- Não há revisão por terceiros das questões; "validada" = aprovada pelo usuário.
- Questões autorais **não** são da Cesgranrio e não devem ser apresentadas como tal.

## 3. Pendências em tasks, por prioridade

Cada task lista objetivo, entregáveis e critério de pronto.

### P0 — Colocar no ar e fechar a base *(ENCERRADA em 2026-11-04: T01, T02 e T03 concluídas)*

**T01 — Publicar e validar o site no GitHub Pages** *(FEITO, 2026-11-04)*
Ativar Pages (Settings → Pages → Source: GitHub Actions); conferir o endereço publicado (caminhos, JSON, navegação, persistência, tema); revisar o menu mobile e as telas em desktop; registrar o resultado no `checklist-site.md`.
Pronto quando: o site abre no endereço do Pages sem erro de console e o progresso persiste após recarregar.

**T02 — Ampliar a fonte de questões reais: provas da Cesgranrio compatíveis com o edital** *(FEITO, 2026-11-04: regra, esquema e 9 provas catalogadas, 355 questões, 229 candidatas a estudo; Petrobras 2008/2010 descartadas pelo usuário — ver `banco-questoes/oficiais/catalogo-provas.md`)*
Hoje o catálogo só usa Transpetro/Petrobras (2023 e 2018). Expandir para **provas da Fundação Cesgranrio de outros concursos** (por exemplo, TI/Análise de Sistemas de outras empresas e órgãos) **desde que o assunto da questão esteja no Anexo IV da Ênfase 5**.
Escopo da task:
1. Atualizar a regra de fontes (`CLAUDE.md`, skill `questoes-cesgranrio`, `docs/estrategia/base-provas.md`): critério de inclusão = banca Cesgranrio + item do edital 2026 + prova e gabarito verificáveis.
2. Levantar provas candidatas e registrar em `banco-questoes/oficiais/catalogo-provas.md` (banca, concurso, ano, cargo, link, situação do gabarito e de eventuais anulações).
3. Classificar cada questão por item do edital (descartar o que estiver fora do programa; Java/J2EE continua fora).
4. Reclassificar o catálogo existente com a nova regra e atualizar `catalogo-questoes-historicas.md`.
5. Ajustar o esquema (`origem`, `concurso`, `cargo`, `ano`, `aderencia_edital`) sem quebrar as 90 autorais.
Regras: nunca inventar questão, gabarito ou ano; questão **Oficial** exige identificação verificável; sem amostra suficiente, não afirmar tendência.
Pronto quando: regra de fontes atualizada, catálogo ampliado e cada questão com item do edital e situação do gabarito.

**T03 — Decisões pendentes que mudam conteúdo** *(FEITO, 2026-11-04: Rev. 3 + Rev. 2; ATT&CK 14 + nota 15; 9.1 com ISO 27002; raciocínio lógico como complemento)*
Resolver com o usuário: NIST Rev. 2 × Rev. 3, ATT&CK 14 × 15, item 9.1, escopo do raciocínio lógico. Depois, ajustar teoria e questões afetadas (Q86 declara Rev. 2).
Pronto quando: cada decisão registrada em `CONTEXTO-ATUAL.md` e os arquivos afetados atualizados.

### P1 — Núcleo de estudo que ainda falta

**T04 — Questões oficiais e adaptadas (usa o resultado da T02)** *(PARCIAL, 2026-11-06: 105 `OFI-` (Transpetro 2023/2018, Caixa 2021, BNDES 2024), comentadas e `em_revisao`; 124 candidatas pendentes; nenhuma `ADP-` — ver `banco-questoes/oficiais/registro-t04.md`)*
Transcrever as questões catalogadas com texto, alternativas e gabarito conferidos, nos esquemas `OFI-` e `ADP-`; comentar cada alternativa; marcar status. Adaptadas indicam a origem e as alterações.
Pronto quando: lote `OFI-` por assunto, cada uma com identificação verificável e comentário completo.

**T05 — Expansão do banco autoral por módulo (cobrir os 29 itens sem questão)** *(FEITO, 2026-11-06: AUT-000091 a 120; 94 de 94 itens com questão principal; todos os módulos com mais de 10; questões `em_revisao`)*
Itens sem questão principal: 9.1, 9.5 a 9.8, 9.10, 9.13, 9.15, 9.17, 9.18, 9.21 (M9) e os equivalentes nos demais módulos (ver `relatorio-cobertura-questoes.md`). Mais questões difíceis, de análise de afirmações e integradoras. Equilibrar a alternativa correta por extensão (em M9, a correta é a mais longa em 5 de 10).
Pronto quando: todo item do edital tem ao menos uma questão e cada módulo tem mais de 10.

**T06 — Questões de Conhecimentos Gerais** *(FEITO, 2026-11-06: 35 autorais, AUT-000121 a 155 — 24 de Português e 11 de Inglês, 14 de 14 itens; `em_revisao`)*
Português e Inglês, estilo Cesgranrio, a partir da teoria validada; textos de interpretação autorais ou de fonte verificável.
Pronto quando: banco de Gerais com cobertura dos 14 itens.

**T07 — Simulados (dados)** *(FEITO, 2026-11-06: 14 simulados em `banco-questoes/simulados/` — ESP-01 e ESP-02 (50), COM-01 (70), GER-01 (20), 9 por módulo, DIAG-01 (20); validados por `tools/validar_banco.py`)*
Montar simulado específico de 50 questões e simulado completo de 70 (estrutura conforme `docs/edital/estrutura-prova.md`), simulados por módulo e diagnóstico; sem inventar pesos por assunto. Depende de T04 a T06 para ter volume.
Pronto quando: `banco-questoes/simulados/` com JSON validado (IDs existentes, tamanho correto) e gabarito comentado.

**T08 — Simulados no site (cronômetro, entrega, correção, histórico)** *(FEITO, 2026-11-06: `timer.js`, `simulations.js`; testado no navegador, inclusive entrega automática por tempo e celular)*
`simulations.js`, `timer.js`; navegação entre questões, marcação, confirmação de entrega, resultado detalhado, tentativas independentes salvas em localStorage.
Pronto quando: simulado completo executável, com histórico e sem revelar gabarito durante a prova.

### P2 — Estudo ativo e acompanhamento

**T09 — Flashcards (conteúdo e site)**
Produzir cartões vinculados aos itens do edital a partir da teoria e das revisões rápidas das questões; tela com revelar, classificar dificuldade, filtros.

**T10 — Revisão espaçada**
Fila de revisões (hoje, atrasadas, futuras) segundo `docs/estrategia/metodologia-estudo.md`, ligada a conteúdo estudado, erros e flashcards.

**T11 — Plano de estudos**
Visão diária, semanal e mensal, sessões e tempo estudado, conforme a metodologia; depende de você informar a capacidade real de estudo (horas por dia e data da prova).

**T12 — Desempenho avançado**
Evolução temporal, tempo por questão, por assunto, histórico de simulados, gráficos leves sem dependências; mostrar limitações quando a amostra for pequena.

### P3 — Qualidade e distribuição

**T13 — Revisão de qualidade**
Revisão independente por amostragem (resolução às cegas nos módulos que ainda não tiveram), verificação das fontes de memória (PMI, ISO, ITIL, ISTQB) e conferência dos gabaritos 2018/2023 contra fonte oficial quando disponível.

**T14 — NotebookLM**
Gerar fontes Markdown/PDF por módulo, resumos, mapas mentais e roteiros em `notebooklm/`, respeitando a rastreabilidade ao edital. Depende da estabilização de T03 e T04.

**T15 — Auditoria final do site**
Acessibilidade (teclado, contraste, foco), testes de persistência completos, responsividade (desktop, tablet, celular), `checklist-site.md`, README atualizado.

## 4. Aditivos que podem ser implementados

| Ideia | Valor | Observação |
|---|---|---|
| Busca textual no conteúdo e nas questões | Alto | Índice gerado pelo script de build; sem dependência externa. |
| Modo "estudar por item do edital" | Alto | Navegação da matriz para teoria, questões e flashcards do mesmo item. |
| Glossário de termos e siglas | Médio | Reaproveita a teoria; útil para as comparações entre conceitos. |
| Quadros comparativos / "pegadinhas" consolidados | Médio | Já existem nos módulos; reunir em uma página de revisão rápida. |
| Alerta de revisão de conteúdo ligado a normas (Rev. NIST, PMBOK, ISO) | Médio | Marcar itens com versão a confirmar. |
| Treino cronometrado por tema (mini-simulados de 10 questões) | Médio | Aproveita a lógica do simulado. |
| Impressão/PDF por módulo | Médio | Folha de estilo de impressão; PDFs para NotebookLM (T14). |
| Teste automatizado de integridade do site | Médio | Script que valida JSON, IDs, caminhos e cinco alternativas; rodar a cada commit. |
| Indicador de cobertura do edital no site | Médio | Por item: teoria validada, nº de questões, estudado. |
| Anotações pessoais por assunto | Médio | localStorage, exportáveis no backup. |
| Instalável como PWA (uso offline) | Baixo | Não exige servidor; avaliar após o site estável. |

## 5. Ordem sugerida

T01 → T02 → T03 → T04 → T05 → T06 → T07 → T08 → T09 → T10 → T11 → T12 → T13 → T14 → T15.
T02 vem cedo porque amplia a base de questões reais que alimenta T04, T05, T07 e a análise de banca. T03 pode ser feita em paralelo a qualquer outra, pois depende só de decisão sua.
