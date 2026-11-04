# Catálogo de provas — fonte de questões oficiais e adaptadas

**Atualizado:** 2026-11-04 (2 provas novas catalogadas) · **Regra vigente:** ver `CLAUDE.md` (seção 2, "Fonte de questões oficiais") e `.claude/skills/questoes-cesgranrio/SKILL.md` (§4.1).

## Critério de inclusão

Uma prova só entra como **fonte** quando: (1) a banca é a **Fundação Cesgranrio**; (2) a questão tem item no Anexo IV da **Ênfase 5** (edital 2026; Java/J2EE e outras ênfases ficam fora); (3) prova e gabarito são **verificáveis** (concurso, cargo, ano, prova, número, fonte e situação do gabarito).

Provas de outras bancas são **excluídas**. Candidata encontrada em busca **não** é prova obtida: só é catalogada questão a questão depois que o caderno e o gabarito forem lidos.

## Esquema do catálogo

| Campo | Valores |
|---|---|
| `id` | `PRV-nnn` (prova); questões `HIS-nnnnnn` em `docs/estrategia/catalogo-questoes-historicas.md` |
| `banca`, `concurso`, `cargo`, `ano` | Identificação verificável |
| `situacao_obtencao` | `catalogada` · `candidata (não obtida)` · `excluída` |
| `situacao_gabarito` | `definitivo (fonte oficial)` · `de terceiros (não validado)` · `não verificado`; anulações listadas |
| `aderencia_edital` (por questão) | `Aderente` · `Parcialmente aderente` · `Fora do edital` · `Indeterminado` |
| `uso` | `estudo` (Aderente/Parcial) · `somente catálogo` (Fora/Indeterminado) |

## 1. Provas catalogadas (reclassificadas pela regra de 2026-11-04)

| ID | Banca | Concurso | Cargo | Ano | Questões | Gabarito | Aderentes | Parciais | Fora | Indet. | Anuladas |
|---|---|---|---|---|---|---|---|---|---|---|---|
| PRV-005 | Cesgranrio | Transpetro PSP/Terra 002/2023 (Edital nº 2) | Análise de Sistemas — Processos de Negócios (Prova 6; "Ênfase 6" na URL do espelho) | 2023 | 50 (21–70) | de terceiros (QConcursos), alterado em 9/01/2024; **não validado** | 45 | 2 | 0 | 1 | 2 (Q36, Q47) |
| PRV-006 | Cesgranrio | Transpetro PSP RH 2018.1 (Edital nº 1) | Analista de Sistemas Júnior — Processos de Negócio (Prova 15) | 2018 | 50 (21–70) | de terceiros (Ética), alterado em 09/05/2018; **não validado** | 24 | 8 | 17 | 1 | 0 |
| PRV-007 | Cesgranrio | Petrobras PSP-RH-1/2006 (aplicação 07/05/2006) | Analista de Sistemas Pleno — Processos | 2006 | 40 específicas (21–60) | de espelho (Estude Grátis); sem recursos verificados; **2 divergências** (Q50, Q53) | 18 | 9 | 11 | 2 | 0 conhecidas |
| PRV-008 | Cesgranrio | Caixa Econômica Federal, Edital 1/2021/NM (aplicação 31/10/2021) | Técnico Bancário Novo — Tecnologia da Informação (nível médio) | 2021 | 30 específicas (31–60) | **oficial** (portal da Cesgranrio); recursos: sem alteração nem anulação | 9 | 3 | 17 | 1 | 0 |

Contagens por questão em `docs/estrategia/catalogo-questoes-historicas.md` (PRV-005 a PRV-008; HIS-000001 a 000170; 2023: 45/2/0/1 sobre as 48 válidas). Fontes, URLs e SHA-256: `docs/estrategia/base-provas.md`. Totais: 170 questões catalogadas; 96 aderentes, 22 parciais, 45 fora, 5 indeterminadas e 2 anuladas (2023). **Candidatas a estudo (T04): 118 (aderentes + parciais).**

**Efeito da reclassificação:** as 100 questões já catalogadas continuam as mesmas (já eram da Cesgranrio). A regra muda o **destino**: Aderente e Parcial = candidatas a `OFI-`/`ADP-` (T04); Fora do edital e Indeterminado = somente catálogo.

## 2. Provas candidatas (NÃO obtidas — nada foi lido nem catalogado)

Petrobras 2006 e Caixa 2021 saíram desta lista em 2026-11-04 e estão catalogadas (seção 1).

Origem: buscas na web em 2026-11-04. São indícios de listagens de terceiros; **banca, cargo, ano e gabarito de cada uma ainda precisam ser confirmados no próprio caderno antes de qualquer catalogação**.

| Candidata | Indício | Pendência de verificação | Programa |
|---|---|---|---|
| Petrobras 2018 — Analista de Sistemas Júnior, Processos de Negócio (Cesgranrio; 70 questões, aplicação em 18/03/2018 segundo a listagem) | [QConcursos](https://www.qconcursos.com/questoes-de-concursos/provas/cesgranrio-2018-petrobras-analista-de-sistemas-junior-processos-de-negocio) (HTTP 403 em tentativa anterior) | Obter caderno e gabarito; ler o programa do edital | Mesma área; programa de 2018 difere do de 2026 |
| Petrobras 2010 e 2008 — Analista de Sistemas Júnior, Processos de Negócio (listagens da PCI) | [PCI](https://www.pciconcursos.com.br/provas/analista-de-negocio-abrangente) | Confirmar banca, cargo exato e ano; obter caderno e gabarito | Programas antigos; aderência provavelmente baixa |
| Petroquímica Suape 2012 — Analista de Sistemas Jr., Ênfase em Negócio (Cesgranrio) | [Estude Grátis](https://www.estudegratis.com.br/provas/cesgranrio-2012-petroquimica-suape-analista-de-sistemas-junior-enfase-em-negocio) | Obter gabarito; ler programa | Programa de 2012 |
| Banco do Brasil 2021 — Escriturário, Agente de Tecnologia (Cesgranrio) | Notícia do concurso | Localizar caderno e gabarito; aderência a avaliar | Tecnologia geral |
| BNDES 2024 — Analista, área de TI (Cesgranrio contratada, segundo extrato de dispensa de licitação) | Notícia do concurso | Confirmar a prova aplicada, ano e cargo; obter caderno e gabarito | A verificar |

Outras provas de TI da Cesgranrio (por exemplo, outras ênfases da Petrobras e da Transpetro) só servem **para os assuntos que constem do Anexo IV da Ênfase 5**; nenhuma foi localizada ainda.

## 3. Provas excluídas

| Prova | Motivo |
|---|---|
| Petrobras 2007 — Analista de Sistemas, Processos de Negócio | Banca **Cebraspe/CESPE** |
| Petrobras 2022 — Analista de Sistemas, Processos de Negócio | Banca **Cebraspe/CESPE** |

## 4. Próximos passos (T04)

1. Obter caderno e gabarito de cada candidata por fonte acessível (sem contornar CAPTCHA; downloads com autorização do usuário).
2. Registrar hash, URL e situação do gabarito; ler anulações e alterações.
3. Classificar cada questão por item do Anexo IV e por aderência; descartar o que estiver fora.
4. Só então transcrever os candidatos a `OFI-`/`ADP-`.

**Limites:** duas provas catalogadas não formam amostra para tendências; as candidatas não alteram nenhuma conclusão sobre a banca até serem catalogadas.
