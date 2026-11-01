# Relatório de execução — Banco de questões, lote piloto do Módulo 4 (Gestão e Governança em TI)

| Campo | Valor |
|---|---|
| Data | 2026-10-31 |
| Prompt | 04 — banco de questões comentadas, fase 1 (lote piloto), módulo 4 |
| Tipo | Questões **autorais** (`AUT-000031` a `AUT-000040`) — **Questão autoral — estilo Cesgranrio.** |
| Status | `validada` pelo usuário em 2026-10-31 (aprovação do lote; sem revisão por terceiros; ressalvas: ITIL em fontes secundárias, inovação e TRL de memória) |
| Lotes anteriores | M01 a M03 aprovados pelo usuário (30 questões `validada`, sem revisão por terceiros) |

## 1. Módulo e assuntos

M04 — Gestão e Governança em TI. Assuntos: LGPD (agentes de tratamento e encarregado; aplicação e alcance territorial; hipóteses de tratamento; sanções do art. 52), gerenciamento de serviços de TI (incidentes × problemas; SLA, OLA e UC; tipos de mudança no ITIL 4), mercado de TI (modelos de nuvem), economia da inovação (inovação disruptiva) e ciência, pesquisa e desenvolvimento (TRL).

## 2. Quantidades

| Critério | Resultado |
|---|---|
| Questões criadas | 10 |
| Dificuldade | Fácil 4 · Média 4 · Difícil 2 |
| Habilidade | Compreensão 4 · Aplicação 4 · Análise 2 |
| Tipo | Cenário 6 · Normativa 2 · Comparativa 1 · Conceitual 1 |
| Gabaritos | A 2 · B 2 · C 2 · D 2 · E 2 |
| Status | Validadas 10 (aprovação do usuário) · Em revisão 0 · Reprovadas 0 |
| Cobertura do M04 | 5 de 6 itens com questão principal; item 4.3 sem questão |

## 3. Verificações realizadas

- **Estrutura (script):** 5 alternativas; gabarito válido; análise individual das 5 alternativas; rótulo de autoral; `fonte_origem` nula; arquivo de teoria existente; sem IDs duplicados; módulo correto.
- **Conteúdo normativo:** as 4 questões de **LGPD** (arts. 3º, 5º, 7º e 52) apoiam-se em artigos que o material do M04 conferiu no **texto compilado do Planalto** (revisão do M04): agentes e encarregado; aplicação extraterritorial; dez hipóteses do art. 7º; sanções do art. 52 (multa simples de até 2% do faturamento no Brasil, teto de R$ 50 milhões por infração; multa diária; suspensão parcial do banco de dados).
- **ITIL:** apoiado em fontes secundárias na revisão do M04; textos do ITIL/AXELOS **não verificados** em fonte primária.
- **Inovação e TRL:** conteúdo de memória (Christensen, Manual de Oslo, escala TRL), conferido contra o arquivo de teoria.
- **Pistas involuntárias:** a alternativa correta é a mais longa em 2 das 10 questões após o equilíbrio das extensões; gabaritos equilibrados entre A e E.
- **Duplicidade com provas anteriores:** LGPD, governança, custo de oportunidade e KPIs de serviços de TI aparecem em questões catalogadas (2023); este lote usa enunciados e alternativas próprios e não reproduz os textos.

## 4. Itens do edital cobertos

4.1, 4.2, 4.4, 4.5 (3 questões) e 4.6 (4 questões). Detalhe em `banco-questoes/relatorio-cobertura-questoes.md`.

## 5. Lacunas

- **4.3** ("Conceitos e perspectivas da tecnologia"; interpretação a confirmar): sem questão.
- Sem questões sobre: princípios da LGPD, direitos do titular, transferência internacional, ANPD e incidentes; COBIT, ISO 38500 e governança de TI (complemento B); disciplinas de ITIL além de incidente, problema, mudança e SLA; propriedade intelectual e custo de oportunidade; segmentos de mercado.
- Não há questões integradoras entre LGPD e segurança (M09).

## 6. Problemas e limites

- **Ressalvas do M04:** ITIL, COBIT e ISO 38500 só em fontes secundárias; interpretação dos itens 4.3 e 4.4 a confirmar. As questões herdam essas ressalvas.
- **Revisão independente:** não houve revisão por terceiros.
- **Estilo Cesgranrio:** calibrado pelo formato e pelo conteúdo, sem alegar autenticidade ou frequência.

## 7. Avaliação crítica e ajustes recomendados

- O lote tem boa proporção de questões normativas verificáveis (LGPD) e de cenário. Recomenda-se, na expansão: mais questões de **análise de afirmações** em LGPD e ITSM; questões sobre direitos do titular e incidentes; **KPIs e métricas de serviços**; e **integradoras** (LGPD × segurança; ITSM × governança).
- Reavaliar as questões de ITIL se o usuário obtiver a documentação oficial.

## 8. Arquivos

Criados: `banco-questoes/autorais/por-assunto/m04-governanca-ti.json`, `m04-governanca-ti-questoes.md`, `m04-governanca-ti-gabaritos-comentados.md`; este relatório.
Modificados (regenerados): `banco-questoes/catalogo-questoes.md`, `banco-questoes/relatorio-cobertura-questoes.md`; `docs/edital/controle-cobertura.md` (coluna Questões), `docs/CONTEXTO-ATUAL.md`.
