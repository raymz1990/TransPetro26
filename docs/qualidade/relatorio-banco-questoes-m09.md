# Relatório de execução — Banco de questões, lote piloto do Módulo 9 (Segurança da informação)

| Campo | Valor |
|---|---|
| Data | 2026-11-01 |
| Prompt | 04 — banco de questões comentadas, fase 1 (lote piloto), módulo 9 |
| Tipo | Questões **autorais** (`AUT-000081` a `AUT-000090`) — **Questão autoral — estilo Cesgranrio.** |
| Status | `validada` pelo usuário em 2026-11-01 (sem revisão por terceiros) |
| Lotes anteriores | M01 a M08 aprovados pelo usuário (80 questões `validada`, sem revisão por terceiros) |

## 1. Módulo e assuntos

M09 — Segurança da informação. Assuntos: injeção de SQL e consulta parametrizada (9.4); backup completo × diferencial (9.2); ransomware, worm e trojan (9.3); MFA (9.9); IoC, TTP e níveis de CTI (9.12); fases da resposta a incidentes, NIST SP 800-61 Rev. 2 (9.11); STRIDE (9.14); SLE/ARO/ALE (9.16); assinatura digital (9.19); responsabilidade compartilhada em nuvem (9.20).

## 2. Quantidades

| Critério | Resultado |
|---|---|
| Questões criadas | 10 |
| Dificuldade | Fácil 3 · Média 5 · Difícil 2 |
| Habilidade | Aplicação 3 · Análise 3 · Compreensão 2 · Resolução de problemas 2 |
| Tipo | Cenário 8 · Cálculo 2 |
| Gabaritos | A 2 · B 2 · C 2 · D 2 · E 2 |
| Status | Validadas 10 |
| Cobertura do M09 | 10 de 21 itens com questão principal |

## 3. Verificações realizadas

- **Estrutura (script):** 5 alternativas; gabarito válido; análise individual das 5; rótulo de autoral; `fonte_origem` nula; teoria existente; sem IDs duplicados.
- **Execução:** Q81 (SQLite: concatenação retorna 3 linhas; parametrizada, 0; variante `or` em minúsculas ainda injeta; payload com 11 caracteres); Q82 (diferencial = 2 conjuntos; incremental = 4); Q88 (SLE 200.000; ALE 100.000 → 20.000; ganho líquido 40.000).
- **Conceitual:** demais questões conferidas contra a teoria validada e as fontes verificadas na revisão do M09 (OWASP, NIST SP 800-61 Rev. 2, NIST SP 800-63B, STRIDE, CTI, modelos de nuvem).
- **Pistas:** a correta é a mais longa em 5 de 10 questões (equilibrar na revisão, se desejado).
- **Duplicidade:** evitados temas de questões catalogadas de 2018/2023 (ABAC×RBAC, SAST/DAST, táticas ATT&CK, envelope digital, SIEM, controles ISO 27002).

## 4. Itens do edital cobertos

9.2, 9.3, 9.4, 9.9, 9.11, 9.12, 9.14, 9.16, 9.19, 9.20.

## 5. Lacunas

Sem questão principal em 9.1, 9.5 a 9.8, 9.10, 9.13, 9.15, 9.17, 9.18 e 9.21 (cobertura de 10 de 21 itens). Nenhuma questão sobre MITRE ATT&CK (decisão 14 × 15 táticas pendente).

## 6. Problemas e limites

- **Ressalvas do M09:** interpretação do item 9.1; escolha NIST SP 800-61 Rev. 2 × Rev. 3 (Q86 declara a Rev. 2); ATT&CK 14 × 15 táticas; contagens da ISO 27002 não confirmadas; fórmulas SLE/ARO/ALE de memória; ISO 31000 não lida.
- Sem revisão por terceiros. Estilo Cesgranrio calibrado pelo formato, sem alegar autenticidade.

## 7. Avaliação crítica e ajustes recomendados

Q84 (MFA) e Q89 (assinatura) têm a correta como a mais longa; podem ser reequilibradas. Na expansão: criptografia simétrica × assimétrica, firewall/IDS/IPS, controle de acesso, CVSS, LGPD/ISO 27001 e questões integradoras.

## 8. Arquivos

Criados: `banco-questoes/autorais/por-assunto/m09-seguranca-informacao.json`, `m09-seguranca-informacao-questoes.md`, `m09-seguranca-informacao-gabaritos-comentados.md`; este relatório.
Modificados: `banco-questoes/catalogo-questoes.md`, `banco-questoes/relatorio-cobertura-questoes.md`, `docs/edital/controle-cobertura.md`, `docs/CONTEXTO-ATUAL.md`.
