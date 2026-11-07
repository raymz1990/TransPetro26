# Relatório T13 — Revisão de qualidade e conferência das fontes

**Data:** 2026-11-07 · **Escopo:** gabaritos oficiais, resolução às cegas por amostragem, conferência de fontes de memória, integridade do banco.

## 1. Gabaritos oficiais (Transpetro 2018 e 2023)
Os PDFs de gabarito da Cesgranrio já estavam em `banco-questoes/oficiais/fontes-brutas/` (2023: "alterado em 9/01/24", Prova 6; 2018: "alterado em 09/05/2018", Prova 15). `tools/conferir_gabaritos.py` lê os PDFs e compara com as 63 questões `OFI-` dessas provas (41 de 2023 e 22 de 2018).

**Resultado: 63 de 63 conferem; 0 divergências.** O campo `situacao_gabarito` dessas 63 questões deixou de dizer "de terceiros, não validado" e passou a "oficial (PDF de gabarito da Cesgranrio …), conferido na T13". A análise de recursos posteriores à data dos PDFs não foi feita.

**Ainda NÃO conferidos** (66 questões): Petrobras 2018 (13), Petrobras 2006 (5), Suape 2012 (6): gabaritos em espelho de terceiros, layout de várias colunas não lido automaticamente; BNDES 2024 (31) e Caixa 2021 (11): já eram gabarito da banca (final / oficial) e não foram recomparados. BB 2021 nenhuma transcrita (ver `registro-t04.md`).

## 2. Resolução às cegas (amostra)
30 questões autorais (3 por módulo M1–M7 e M9, e 3 por disciplina de Gerais; M8 já havia passado por revisão independente) foram resolvidas sem ver o gabarito: **30 de 30 coincidem**. Limitações: o resolvedor é o mesmo modelo que produziu parte do material (não é revisor humano nem de outro modelo); amostra de 30 de 155 autorais; nenhuma questão ambígua foi apontada, mas não houve crítica sistemática dos distratores. As 194 questões `em_revisao` continuam dependendo da validação do usuário.

## 3. Fontes de memória (PMI, ISO, ITIL, ISTQB)
Conferido nesta etapa, **só em fontes secundárias** (busca na web): PMBOK 6 com 49 processos, 5 grupos e 10 áreas; Scrum Guide 2020 (somente o Product Owner cancela a Sprint); sete princípios do ISTQB (versão 4.0). O texto primário do PMI e das normas ISO permanece **não consultado**; as ressalvas de cada módulo (`relatorio-producao-modulo-0X.md`) continuam valendo. Itens sem fonte primária: atribuição individual dos processos do PMBOK aos grupos, normas ISO (27001/27002/27005, 25010, 9241), ITIL 4, COBIT, PMBOK 7. **Recomendação:** confirmar com os documentos oficiais antes da prova, em especial o que aparece em questões.

## 4. Integridade
`tools/validar_banco.py`: 284 questões, 0 erros (5 alternativas, gabarito × análise, tipo × prefixo, teoria existente, fonte das oficiais).

## 5. Pendências
Validação humana das 194 questões; gabaritos das 66 questões acima; fontes primárias PMI/ISO/ITIL; recursos posteriores aos PDFs de gabarito da Transpetro.
