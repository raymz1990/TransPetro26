# Diagnóstico Inicial — Auditoria do Edital
**Transpetro 2026.4 — Ênfase 5 — Análise de Sistemas: Processos de Negócios**
Data: 2026-10-30 · Prompt 01 · Status: **aguardando aprovação do usuário**

## 1. Edital localizado

| Campo | Informação |
|---|---|
| Documento | Edital nº 04 — TRANSPETRO/PSP/TERRA/NÍVEL SUPERIOR — 2026.4, de 11/08/2026 |
| Instituição | Petrobras Transporte S.A. (Transpetro); execução: Fundação Cesgranrio |
| Arquivo | `docs/edital/edital.pdf` (84 p.), edital consolidado "com as alterações incluídas" |
| URL oficial | **Não verificada** (arquivo fornecido no projeto; sem consulta online nesta execução) |
| Consulta | 2026-10-30 |

## 2. Fontes oficiais utilizadas
Somente o PDF acima (itens 1, 7, 8, 9, Anexos I, IV e V). Nenhuma fonte de terceiros.

## 3. Retificações
O cabeçalho do PDF lista seis publicações no DOU já incorporadas: 13/08 (p.163), 19/08 (p.96), 28/08 (p.115), 10/09 (p.95), 11/09 (p.119) e 17/09/2026 (p.114). **Não consultadas individualmente**; não se sabe se alguma alterou o Anexo IV. Retificações posteriores a 17/09/2026 não foram verificadas.

## 4. Situação do Anexo IV
Extraído integralmente, com numeração e redação originais, em `docs/edital/anexo-IV-extraido.md`. Extração automática (`pdftotext`) com segmentação por regex; contagem de subitens conferida por asserção contra a numeração esperada (23/7/0/6/5/11/11/9/21). **Falta conferência visual contra as páginas 60–61 do PDF** (recomendado ao usuário ou na revisão).

## 5. Itens extraídos
9 principais + 93 subitens = 102 linhas; 94 itens-folha (o item 3 não tem subitens). IDs `E5-001` a `E5-102`.

## 6. Distribuição por módulo (itens-folha)
M01: 23 · M02: 7 · M03: 1 · M04: 6 · M05: 5 · M06: 11 · M07: 11 · M08: 9 · M09: 21 (total 94). Os nove módulos do projeto coincidem com os nove itens principais do edital. Contagem de itens ≠ peso na prova.

## 7. Estrutura oficial da prova (confirmada)
70 questões objetivas de 1 ponto, 5 alternativas: 50 Específicos + 20 Gerais (10 Português + 10 Inglês); 4h30; eliminação com <50% em Específicos (25/50), <50% em Gerais (10/20) ou zero em qualquer matéria de Gerais; classificação pela soma Fase 1 + Fase 2 apenas para ranqueados na Fase 1 até 2x (vagas + cadastro de reserva); desempate: idade ≥60, jurado, mais idoso. Ênfase 5 (RJ): Quadro 1 (vagas) AC 0, PcD 1, PN 0, PI 0, PQ 0 = 1; Quadro 2 (vagas + cadastro de reserva) AC 5, PcD 3, PN 3, PI 0, PQ 0 = 11 — não são 11 vagas imediatas. Detalhes e itens em `docs/edital/estrutura-prova.md`. **A hipótese 70/50/10/10 está confirmada.**

## 8. Divergências e achados

| ID | Achado | Impacto | Proposta |
|---|---|---|---|
| D-01 | Edital sem verificação online de URL/retificações | Risco de Anexo IV desatualizado | Usuário confirmar no site da Cesgranrio/Transpetro, ou autorizar pesquisa |
| D-02 | Os 70 arquivos de `conteudo/` têm 0 bytes | Nenhuma cobertura de produção | Esperado nesta fase; manter NAO_INICIADO |
| D-03 | `03-processos-gerenciamento/04-gerenciamento-processos.md` (gestão de processos/BPM) sem item correspondente no edital. O item 3 é genérico ("Processos, grupos de processos e área de conhecimento") | Risco de inserir conteúdo que o edital não prevê | Decidir: classificar como B (justificado) ou excluir |
| D-04 | Arquivos sem item direto: `01-arquitetura-dados/01-fundamentos`, `05-engenharia-software/01-fundamentos`, `09-seguranca-informacao/01-fundamentos-seguranca` | Possíveis B | Classificar como B vinculados a itens específicos, se aprovado |
| D-05 | Item 3 sem subitens: a interpretação (conceitos de grupos de processos e áreas de conhecimento, tipicamente do PMBOK ≤ 6ª ed.) é inferência, enquanto o item 2.4 cita PMBOK 7ª ed. | Ambiguidade de escopo entre M02 e M03 | Tratar como pendência de interpretação; não expandir sem aprovação |
| D-06 | 9 itens sem arquivo-esqueleto: 1.6, 1.7, 1.8, 1.9, 1.15, 1.17, 1.20, 2.5, 9.2 (parte coberta por arquivos de outros módulos/arquivos agregados) | Lacuna estrutural | Propor novos arquivos ou ampliar o escopo de arquivos existentes na etapa de conteúdo |
| D-07 | Português (12 itens) e Inglês (2 itens) constam do Anexo IV (Conhecimentos Básicos) e não estão na matriz, que cobre apenas a Ênfase 5 | Simulados completos exigem 20 questões de Gerais | Propor matriz complementar para Gerais (14 itens) |
| D-08 | Textos oficiais com grafias duvidosas ("safe", "Sarbannes", "Mínimo Produto Viável") | Nenhum; preservados | Manter; citar como estão |
| D-09 | `README.md`, `ESTRUTURA.txt`, `PROMPT-MESTRE.md`, `CLAUDE.md` coerentes com 70/50/10/10, 5 alternativas e vedação a Java/J2EE (verificação por busca de termos, não leitura integral). Não mencionam notas de corte | Simulados devem aplicar mínimos de 50% | Incorporar regra na skill `simulados`/relatório de desempenho |
| D-10 | `site/assets/data/edital.json` está vazio | Site sem dados do edital | Tratar na etapa do site |
| D-11 | Quadro 2 do Anexo I e datas do Anexo V extraídos com colunas desalinhadas (data da prova provável: 06/12/2026) | Dado de cronograma incerto | Conferir no PDF |

Itens duplicados, itens oficiais sem módulo e itens sem classificação de escopo: nenhum.

## 9. Informações não confirmadas
URL/versão online; conteúdo das seis retificações; data exata da prova; cadastro de reserva (leitura do Quadro 2); nota mínima total (não identificada); eliminações do item 8.21 (não analisadas).

## 10. Alterações realizadas
- Criado `docs/edital/anexo-IV-extraido.md`.
- Reescrita `docs/edital/matriz-conteudo.md` (era modelo vazio; regras essenciais preservadas, 102 linhas).
- Atualizados `docs/edital/controle-cobertura.md` (resumo, seção 5, seção 8) e `docs/edital/estrutura-prova.md` (seção 1.1, 4 e 10).
- Criado este diagnóstico e atualizado `docs/CONTEXTO-ATUAL.md`.
- Não alterados: CLAUDE.md, PROMPT-MESTRE.md, ESTRUTURA.txt, README.md, conteúdo, site.

## 11. Pendências
Aprovação da matriz; conferência visual do Anexo IV; resolução de D-01, D-03 a D-07, D-11.

## 12. Recomendações para a próxima etapa
1. Usuário revisar `anexo-IV-extraido.md` e a matriz e decidir D-03/D-04/D-05/D-07.
2. Confirmar edital/retificações no site oficial.
3. Só depois, seguir ao prompt 02 (conteúdo) ou prompt 03 (análise da banca), conforme escolha do usuário.

---

## 13. Resolução das divergências (revisão do usuário, 2026-10-30)

| ID | Decisão / Ação | Situação |
|---|---|---|
| D-01 | Conferido na página oficial da Transpetro ([Quadro de Terra](https://transpetro.com.br/transpetro-institucional/quem-somos/carreiras/concursos/quadro-de-terra.htm)): retificações 1 a 6 (DOU 13/08, 19/08, 28/08, 10/09, 11/09 e 17/09/2026), nenhuma posterior. O PDF do projeto já as incorpora (mesmas seis datas no cabeçalho). Cronograma foi alterado (inscrições até 21/09; provas 06/12/2026 — [Cesgranrio](https://www.cesgranrio.org.br/concurso/transpetro-2026/)). **Não comparei o texto de cada retificação com o Anexo IV original**; portal da Cesgranrio não consultado | Resolvido com ressalva |
| D-02, D-10 | Mantidos como NAO_INICIADO | Aceito |
| D-03 a D-05 | Arquivos sem item oficial passam a material complementar (B: 3 arquivos; C: 1) fora da contagem oficial — matriz, seção 6 | Aplicado |
| D-06 | Nove itens atribuídos a arquivos existentes; criado `conteudo/09-seguranca-informacao/14-operacao-de-seguranca.md` (vazio) para 9.2; `ESTRUTURA.txt` atualizado | Aplicado |
| D-07 | Criada `docs/edital/matriz-conhecimentos-gerais.md` (14 itens), separada dos módulos | Aplicado |
| D-11 | Quadro 2 (p. 42) e cronograma (p. 80) conferidos visualmente; dados corrigidos | Resolvido |

**Atualização 2026-10-31 (D-01):** obtidos do portal da Transpetro o edital 04/2026 original e as versões consolidadas das retificações 1–6. O texto da Ênfase 5 é idêntico em todas; `edital.pdf` é idêntico (SHA-256) ao consolidado da retificação 6. D-01 **resolvido** (pendente apenas o portal da Cesgranrio, não consultado). Anexo IV conferido visualmente (págs. 60–61). Detalhes: `docs/edital/fontes-oficiais/indice.md`.
