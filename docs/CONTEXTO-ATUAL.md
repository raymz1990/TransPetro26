# CONTEXTO ATUAL DO PROJETO

## Fase atual
Prompt 02 (produção didática) concluído; **Prompt 04 (banco de questões) em andamento** — Módulos 1 a 9 `VALIDADOS` pelo usuário (2026-10-31; M2 a M9 com ressalvas): teoria da Ênfase 5 produzida e validada (94 de 94 itens). **Conhecimentos Gerais (Português e Inglês)** produzidos e `VALIDADOS` pelo usuário em 2026-10-31, com ressalvas. **Banco de questões, fase 1 (lote piloto): M01 aprovado pelo usuário** (10 autorais, `validada`, sem revisão por terceiros); **M02 aprovado pelo usuário** (10 autorais, `validada`, sem revisão por terceiros; ressalva do PMI); **M03 aprovado pelo usuário** (10 autorais, `validada`, sem revisão por terceiros; ressalva do PMI); **M04 aprovado pelo usuário** (10 autorais, `validada`, sem revisão por terceiros; ressalvas de ITIL, inovação e TRL); **M05 aprovado pelo usuário** (10 autorais, `validada`, sem revisão por terceiros; ressalvas de ISO/ISTQB e dos itens 5.2 e 5.5); **M06 aprovado pelo usuário** (10 autorais, `validada`, sem revisão por terceiros; ressalvas de UX); **M07 aprovado pelo usuário** (10 autorais, `validada`, sem revisão por terceiros; ressalvas de planilha e de BI); **M08 aprovado pelo usuário** (10 autorais, `validada`, após revisão independente por resolução às cegas; ressalvas dos itens 8.5, 8.6 e 8.9); **M09 aprovado pelo usuário** (10 autorais, `validada`, sem revisão por terceiros; ressalvas do item 9.1, NIST Rev. 2×3, ATT&CK e fórmulas SLE/ARO/ALE).

## Última etapa concluída
Banco de questões — lote piloto do M09: 10 questões autorais (`AUT-000081` a `AUT-000090`, aprovado; lote piloto M01 a M09 completo) em `banco-questoes/autorais/por-assunto/` (JSON, questões e gabaritos comentados); M01 (`AUT-000001` a `010`), M02 (`011` a `020`) e M03 (`021` a `030`) e M04 (`031` a `040`) e M05 (`041` a `050`) e M06 (`051` a `060`) e M07 (`061` a `070`) aprovados. Ver `banco-questoes/esquema-questoes.md`, `catalogo-questoes.md` e `relatorio-cobertura-questoes.md`. Relatórios: `docs/qualidade/relatorio-banco-questoes-m01.md`, `...-m02.md`, `...-m03.md`, `...-m04.md`, `...-m05.md`, `...-m06.md`, `...-m07.md`, `...-m08.md` e `...-m09.md`.

## Site (MVP, 2026-11-01)
Site estático em `site/` (hash routing, sem dependências), autorizado pelo usuário como MVP: conteúdo (85 arquivos, módulos 1–9 e Gerais), 90 questões autorais com correção comentada, caderno de erros, desempenho, exportar/importar dados, tema escuro/claro. Dados gerados por `python tools/build_site_data.py` (rodar após alterar conteudo/ ou o banco de questões). **Não implementados:** plano de estudos, simulados, cronômetro, flashcards, revisão espaçada. Publicação: `.github/workflows/deploy-pages.yml` (publica `site/`); ativar Pages (Source: GitHub Actions) no repositório raymz1990/TransPetro26.

## Decisões do usuário (2026-10-31)
1. C5-001 a C5-004 mantidos como material complementar, fora da cobertura oficial.
2. Item 3 do Anexo IV interpretado como grupos de processos de gerenciamento de projetos; BPM é complemento, não exigência expressa.
3. Produção na ordem dos nove itens principais do edital; Prompt 02 autorizado módulo a módulo (M1 a M9 autorizados).

## Aprovações
- CLAUDE.md: aprovado
- Estrutura: aprovada
- Matriz específica (`matriz-conteudo.md`): **aprovada em 2026-10-31**
- Matriz de Conhecimentos Gerais (`matriz-conhecimentos-gerais.md`), com a proposta de organização: **aprovada em 2026-10-31**

## Fatos confirmados
Edital nº 04 (11/08/2026), PDF consolidado até DOU 17/09/2026. Prova: 70 questões (50 específicas + 10 Português + 10 Inglês), 1 ponto cada, 5 alternativas, 4h30; mínimo de 50% em Específicos e em Gerais, zero em matéria de Gerais elimina. Distribuição das 50 por assunto: não consta do edital. Os 9 módulos = 9 itens principais do Anexo IV.

## Revisão do usuário (2026-10-30)
Decisões D-01 a D-11 aplicadas (ver `docs/qualidade/diagnostico-inicial.md`, seção 13). Criados: `docs/edital/matriz-conhecimentos-gerais.md`, `conteudo/09-seguranca-informacao/14-operacao-de-seguranca.md`. Atualizados: matriz (v1.2), controle, estrutura-prova, ESTRUTURA.txt. Usuário autorizou iniciar o prompt 03.

## Prompt 03 (análise da banca) — CONCLUÍDO com ressalvas (aprovado pelo usuário em 2026-10-31)
Catalogadas 100 questões: PRV-005 (Transpetro 2023 Prova 6; 48 válidas, Q36 e Q47 anuladas) e PRV-006 (Transpetro 2018 Prova 15; sem anuladas). Numeração, enunciados e alternativas de 2018 conferidos visualmente (p. 6–21, inclusive a p. 13, ajuste final). Aderência ao edital 2026 classificada por questão (2018: 24 aderentes, 8 parciais, 17 fora, 1 indeterminada; 2023: 45/2/0/1 de 48 válidas). Criado `docs/estrategia/comparativo-2018-2023.md`; atualizados `base-provas.md`, `catalogo-questoes-historicas.md`, `estrategia-cesgranrio.md`. `prioridades.md` não alterado. Fontes: espelhos de terceiros (QConcursos, Ética), **não validados contra a Cesgranrio**. Prompt 02 não iniciado.

## Ressalvas registradas
Gabaritos 2018/2023 são de terceiros, sem validação contra a Cesgranrio; conferência por resolução: 2018 = 47/50 (sem Q34, 55, 62), 2023 = 44/48 válidas (sem Q21, 22, 27, 62). Duas provas **não** formam amostra para tendências. `prioridades.md` não foi alterado. Novas buscas de provas não realizadas nesta etapa.

## Fase de fechamento da auditoria (autorizada em 2026-10-31)
- Anexo IV (págs. 60–61) conferido visualmente: transcrição confere.
- Retificações: obtidos no portal da Transpetro o edital 04/2026 original e as versões consolidadas das retificações 1–6; o Anexo IV da Ênfase 5 é **idêntico** em todas; `edital.pdf` ≡ retificação 6 (SHA-256). Índice e hashes: `docs/edital/fontes-oficiais/indice.md`.
- Editais originais de 2023 e 2018 obtidos. Programa de 2023 = 2026, salvo 2.4 (PMBOK 6ª→7ª) e 4.6; programa de 2018 era outro. Reclassificação de 2018 pelo programa então vigente: 17 questões sem item em 2026.
- Criado `docs/edital/prontidao-producao-didatica.md` (pré-requisitos, decisões do usuário e convenções). Nenhum conteúdo didático produzido.

## Pendências
- M02 `VALIDADO` com ressalvas; revisado em 2026-10-31 (parcial): Manifesto, Scrum, Kanban, SAFe e PMO confirmados; textos do PMI **não verificados** (pmi.org bloqueado); interpretação dos itens 2.5 e 2.7 a confirmar. Detalhes: `docs/qualidade/relatorio-producao-modulo-02.md`.
- M01 `VALIDADO` pelo usuário; referências não verificadas listadas em `docs/qualidade/relatorio-producao-modulo-01.md`.
- Conhecimentos Gerais: `conteudo-gerais/` criada em 2026-10-31 com a teoria (`VALIDADA` com ressalvas); gramática e ortografia em grande parte de memória (revisão confirmou acentuação, parte do hífen, haver, orações subordinadas, crase parcial e, em inglês, tempos, condicionais, passiva e relativas); VOLP/ABL, Priberam e Cambridge/British Council não consultados (ver `docs/qualidade/relatorio-producao-gerais.md`). Questões, simulados, flashcards, NotebookLM e site de Gerais não iniciados.
- Portal da Cesgranrio não consultado; retificações de 2018/2023 não analisadas; gabaritos 2018/2023 sem validação oficial.
- M03 `VALIDADO` com ressalvas; revisado em 2026-10-31 (parcial): totais e estrutura confirmados em fontes secundárias; atribuição individual dos processos aos grupos, fórmulas e técnicas **sem confronto com o PMI**; ver `docs/qualidade/relatorio-producao-modulo-03.md`. M04 `VALIDADO` com ressalvas; revisado em 2026-10-31 (parcial): LGPD conferida no texto compilado do Planalto; ANPD (incidentes) e Lei 10.973/2004 confirmadas; ITIL, COBIT e ISO 38500 só em fontes secundárias; interpretação dos itens 4.3 e 4.4 a confirmar (ver `docs/qualidade/relatorio-producao-modulo-04.md`). M05 `VALIDADO` com ressalvas; revisado em 2026-10-31 (parcial): exemplos de código executados e conferidos; UML (OMG), semver.org, McCabe e Fagan verificados; normas ISO inacessíveis e princípios ISTQB sem fonte primária; interpretação dos itens 5.2 e 5.5 a confirmar. M06 `VALIDADO` com ressalvas; WCAG 2.2, eMAG (versão e datas), LBI, heurísticas de Nielsen e Double Diamond verificados online; seis seções do eMAG, modes do d.school, tempos de resposta de Nielsen, INVEST e contrastes do WCAG conferidos na revisão; texto das recomendações do eMAG, IDEO, ISO 9241 e livros de memória; interpretação dos itens 6.3, 6.4, 6.7 e 6.11 a confirmar (ver `docs/qualidade/relatorio-producao-modulo-06.md`). M07 `VALIDADO` com ressalvas; origem de BI, DIKW, operações roll-up/drill-down/slice/dice, MOLAP/ROLAP/HOLAP, passos de Kimball e definições de dados estruturados conferidos online; CRISP-DM e ROLLUP/CUBE confirmados na revisão; atribuição a Inmon, pivot/drill-through, versões e funções de planilha e técnicas de otimização de memória; interpretação dos itens 7.2, 7.3 e 7.7 a 7.9 a confirmar (ver `docs/qualidade/relatorio-producao-modulo-07.md`). M08 `VALIDADO` com ressalvas; equivalências, formas de argumento, negações e exemplos conferidos por script; Gödel, Church–Turing, Cook–Levin, sistemas dedutivos e A/E/I/O conferidos online na revisão (precedência dos conectivos varia entre autores); incompletude, P×NP e livros de memória; interpretação dos itens 8.5, 8.6 e 8.9 a confirmar; puzzles de raciocínio lógico (2023, Q36 e Q37) sem item 8.x claro, decisão pendente (ver `docs/qualidade/relatorio-producao-modulo-08.md`). M09 `VALIDADO` com ressalvas; várias fontes conferidas online (ATT&CK com 15 táticas na v20, NIST SP 800-61 Rev. 3 substitui a Rev. 2, OWASP Top 10 2025, RFCs, OWASP, CVSS 4.0); fases da Rev. 2 do NIST SP 800-61 e do pentest (NIST 800-115), MP 2.200-2, CVSS, responsabilidade compartilhada e BIA/RTO/RPO conferidos na revisão; número de controles da ISO 27002, princípios da ISO 31000, estrutura da Rev. 3 e outros de memória; decisões de versão (NIST 800-61, ATT&CK) e interpretação do item 9.1 a confirmar (ver `docs/qualidade/relatorio-producao-modulo-09.md`). Questões, flashcards, simulados, NotebookLM e site: não iniciados.
- Observação: o item 1.7 passou a ter arquivo principal no M01 (`09`); o M07 (7.5–7.7) deve complementar sem repetir.

## Próxima ação
Aguardar a autorização explícita da próxima etapa (expansão do banco, Gerais, simulados etc.). Simulados, flashcards, NotebookLM e site não foram iniciados. Não avançar sem autorização.

## Regras
- Não repetir tarefas concluídas.
- Não recriar documentos existentes.
- Não ler arquivos sem necessidade.
- Trabalhar somente no escopo autorizado.
- Relatórios devem ser objetivos.
