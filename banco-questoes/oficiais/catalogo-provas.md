# Catálogo de provas — fonte de questões oficiais e adaptadas

**Atualizado:** 2026-11-04 (9 provas catalogadas; fontes concluídas) · **Regra vigente:** ver `CLAUDE.md` (seção 2, "Fonte de questões oficiais") e `.claude/skills/questoes-cesgranrio/SKILL.md` (§4.1).

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
| PRV-009 | Cesgranrio | Petroquímica Suape PSP nº 1/2012 (22/04/2012) | Analista de Sistemas Júnior — Ênfase em Negócio (Prova 6) | 2012 | 30 específicas (31–60) | de espelho (Estude Grátis), **após recursos**: Q49 anulada, Q36 e Q57 alteradas | 12 | 7 | 9 | 1 | 1 |
| PRV-010 | Cesgranrio | BNDES Edital 1/2024 (13/10/2024) | Analista — Análise de Sistemas: Cibersegurança (Prova 2) | 2024 | 35 específicas (36–70) | **final após recursos** (documento da banca, via espelho QConcursos); sem anulação na Prova 2 | 18 | 17 | 0 | 0 | 0 |
| PRV-011 | Cesgranrio | Petrobras PSP RH 2017.2 (prova de 18/03/2018) | Analista de Sistemas Júnior — Processos de Negócio (Prova 3) | 2018 | 50 (21–70) | de espelho (PCI), fornecido pelo usuário; preliminar/definitivo não indicado; anulações não verificadas | 18 | 7 | 18 | 7 | 0 conhecidas |
| PRV-012 | Cesgranrio | Banco do Brasil Seleção Externa 2021/001 (26/09/2021) | Escriturário — Agente de Tecnologia, Microrregião 16 DF-TI (nível médio) | 2021 | 35 de TI (36–70), caderno "Gabarito 1" | de espelho (PCI), fornecido pelo usuário; preliminar/definitivo não indicado; anulações não verificadas | 11 | 1 | 23 | 0 | 0 conhecidas |
| PRV-013 | Cesgranrio | Petrobras PSP RH 2018.1 (08/04/2018) | Técnico(a) de Administração e Controle Júnior (Prova 16; nível médio) | 2018 | 60 | de espelho (PCI) | — | — | — | — | **não catalogada: cargo administrativo, sem TI** |
| PRV-014 | Cesgranrio | BNDES Edital 1/2024 (13/10/2024) | Analista — Análise de Sistemas: Desenvolvimento (Prova 3) | 2024 | 35 específicas (36–70) | **final após recursos** (documento da banca, via espelho QConcursos); Q36 e Q55 anuladas | 16 | 4 | 13 | 0 | 2 |

Contagens por questão em `docs/estrategia/catalogo-questoes-historicas.md` (2023: 45/2/0/1 sobre as 48 válidas). Fontes, URLs e SHA-256: `docs/estrategia/base-provas.md`. Totais (PRV-005 a PRV-012 e PRV-014; HIS-000001 a 000355): **355 questões catalogadas**; 171 aderentes, 58 parciais, 108 fora, 13 indeterminadas e 5 anuladas (2 em 2023, 1 em 2012, 2 no BNDES 2024). **Candidatas a estudo (T04): 229 (aderentes + parciais).**

**Efeito da reclassificação:** as 100 questões já catalogadas continuam as mesmas (já eram da Cesgranrio). A regra muda o **destino**: Aderente e Parcial = candidatas a `OFI-`/`ADP-` (T04); Fora do edital e Indeterminado = somente catálogo.

## 2. Provas candidatas pendentes (nenhuma)

Petrobras 2006, Caixa 2021, Petroquímica Suape 2012, BNDES 2024 (Cibersegurança e Desenvolvimento), Banco do Brasil 2021 e Petrobras 2018 (Analista de Sistemas Jr.) saíram desta lista em 2026-11-04 e estão catalogadas (seção 1). BB 2021 e Petrobras 2018 foram **fornecidos pelo usuário** (arquivos do PCI Concursos). Petrobras 2008/2010 foram **descartadas por decisão do usuário (2026-11-04)**; nenhuma candidata pendente.

Origem: buscas na web em 2026-11-04. São indícios de listagens de terceiros; **banca, cargo, ano e gabarito de cada uma ainda precisam ser confirmados no próprio caderno antes de qualquer catalogação**.

| Candidata | Indício | Pendência de verificação | Programa |
|---|---|---|---|
| Petrobras 2010 e 2008 — Analista de Sistemas Júnior, Processos de Negócio (listagens da PCI) | [PCI](https://www.pciconcursos.com.br/provas/analista-de-negocio-abrangente) | Confirmar banca, cargo exato e ano; obter caderno e gabarito | Programas antigos; aderência provavelmente baixa |

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
