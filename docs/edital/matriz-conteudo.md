# Matriz de Conteúdo — Transpetro 2026.4
## Ênfase 5 — Análise de Sistemas: Processos de Negócios

**Arquivo:** `docs/edital/matriz-conteudo.md`
**Status:** v1.21 — **aprovada pelo usuário em 2026-10-31** (referência oficial de escopo para o projeto)
**Fonte:** `docs/edital/anexo-IV-extraido.md` (transcrição literal do Anexo IV do edital consolidado)

---

## 1. Identificação do edital

| Campo | Informação |
|---|---|
| Concurso | Processo Seletivo Público TRANSPETRO/PSP/TERRA/NÍVEL SUPERIOR — 2026.4 |
| Edital | Nº 04, de 11 de agosto de 2026 (Petrobras Transporte S.A. — Transpetro) |
| Banca | Fundação Cesgranrio |
| Cargo / Ênfase | Profissional Transpetro de Nível Superior — Júnior / Ênfase 5 — Análise de Sistemas — Processos de Negócios |
| Documento consultado | `docs/edital/edital.pdf` (consolidado, 84 p.), com as alterações do DOU de 13/08, 19/08, 28/08, 10/09, 11/09 e 17/09/2026 |
| Referência do conteúdo | Anexo IV (páginas impressas 60–61) |
| URL oficial | https://transpetro.com.br/transpetro-institucional/quem-somos/carreiras/concursos/quadro-de-terra.htm (lista edital e retificações); Cesgranrio: https://www.cesgranrio.org.br/concurso/transpetro-2026/ |
| Retificações | Seis (DOU 13/08 a 17/09/2026): Anexo IV da Ênfase 5 idêntico no original e em todas as versões (verificado em 2026-10-31); nenhuma posterior a 17/09/2026 listada na página oficial |
| Última conferência | 2026-10-30 |

## 2. Regras desta matriz

- **Atribuição de arquivo não é cobertura.** Cada arquivo de `conteudo/` deve registrar, no seu cabeçalho de rastreabilidade, os subitens que atende. O arquivo `14-operacao-de-seguranca.md` (item 9.2) é um esqueleto vazio e não representa cobertura.

- O texto oficial está em `anexo-IV-extraido.md`; esta matriz o reproduz sem alteração (incluindo grafias originais, como "safe" e "Sarbannes-Oxley").
- IDs `E5-NNN` são internos e estáveis; não substituem a numeração oficial.
- Os **nove módulos pedagógicos coincidem, na ordem, com os nove itens principais do Anexo IV** (módulo = item principal). A classificação principal é, portanto, determinada pelo próprio edital; relações secundárias indicam sobreposição temática.
- **Escopo A** = expressamente previsto (102 linhas). Material B/C está na seção 6, fora da contagem oficial.
- A coluna "Arquivo" aponta o arquivo-esqueleto existente em `conteudo/`. **Todos os 71 arquivos (70 existentes + 1 criado em D-06) têm 0 bytes**; apontar o arquivo não implica conteúdo produzido. Itens antes sem arquivo foram atribuídos por reorganização (D-06).
- Status de todos os itens: `NAO_INICIADO` (não há conteúdo, questão, flashcard, revisão, fonte NotebookLM nem integração no site; `site/assets/data/edital.json` está vazio).

## 3. Módulos

| Código | Módulo | Item principal do edital |
|---|---|---|
| M01 | Arquitetura de Dados | 1 |
| M02 | Gerenciamento de Projetos e Produtos | 2 |
| M03 | Processos, Grupos de Processos e Áreas de Conhecimento | 3 |
| M04 | Gestão e Governança em TI | 4 |
| M05 | Engenharia de Software | 5 |
| M06 | Experiência do Usuário (UX) | 6 |
| M07 | Análise de Dados e Informações | 7 |
| M08 | Lógica Matemática | 8 |
| M09 | Segurança da Informação | 9 |

## 4. Matriz principal

Legenda — Mód. 2º: módulo(s) com sobreposição temática (item entre parênteses). Amb.: `S` = associação com ressalva (detalhe na seção 7).

| ID | Item | Texto oficial | Mód. | Mód. 2º | Escopo | Arquivo (esqueleto) | Amb. | Status |
|---|---|---|---|---|---|---|---|---|
| E5-001 | **1** | Arquitetura de Dados: | M01 | — | A | — | — | VALIDADO |
| E5-002 | 1.1 | Modelagem de dados (conceitual, lógica e física) | M01 | — | A | conteudo/01-arquitetura-dados/02-modelagem-dados.md | — | VALIDADO |
| E5-003 | 1.2 | Criação e alteração dos modelos lógico e físico de dados | M01 | — | A | conteudo/01-arquitetura-dados/02-modelagem-dados.md | — | VALIDADO |
| E5-004 | 1.3 | O modelo Relacional | M01 | — | A | conteudo/01-arquitetura-dados/03-modelo-relacional.md | — | VALIDADO |
| E5-005 | 1.4 | Normalização das estruturas de dados | M01 | — | A | conteudo/01-arquitetura-dados/04-normalizacao.md | — | VALIDADO |
| E5-006 | 1.5 | Integridade referencial | M01 | — | A | conteudo/01-arquitetura-dados/03-modelo-relacional.md | — | VALIDADO |
| E5-007 | 1.6 | Metadados | M01 | — | A | conteudo/01-arquitetura-dados/10-qualidade-e-governanca-dados.md | S | VALIDADO |
| E5-008 | 1.7 | Modelagem dimensional | M01 | M07 (7.7) | A | conteudo/01-arquitetura-dados/09-data-warehouse-e-big-data.md<br>(sec.: conteudo/07-analise-dados/06-modelagem-multidimensional.md, item 7.7) | S | VALIDADO |
| E5-009 | 1.8 | Avaliação de modelos de dados | M01 | M07 (7.7) | A | conteudo/01-arquitetura-dados/02-modelagem-dados.md | S | VALIDADO |
| E5-010 | 1.9 | Técnicas de engenharia reversa para criação e atualização de modelos de dados | M01 | — | A | conteudo/01-arquitetura-dados/02-modelagem-dados.md | S | VALIDADO |
| E5-011 | 1.10 | Linguagem de consulta estruturada (SQL) | M01 | — | A | conteudo/01-arquitetura-dados/05-sql-e-sgbd.md | — | VALIDADO |
| E5-012 | 1.11 | Linguagem de definição de dados (DDL) | M01 | — | A | conteudo/01-arquitetura-dados/05-sql-e-sgbd.md | — | VALIDADO |
| E5-013 | 1.12 | Linguagem de manipulação de dados (DML) | M01 | — | A | conteudo/01-arquitetura-dados/05-sql-e-sgbd.md | — | VALIDADO |
| E5-014 | 1.13 | Sistema Gerenciador de Banco de Dados (SGBD) | M01 | — | A | conteudo/01-arquitetura-dados/05-sql-e-sgbd.md | — | VALIDADO |
| E5-015 | 1.14 | Propriedades de banco de dados: atomicidade, consistência, isolamento e durabilidade | M01 | M01 (1.16) | A | conteudo/01-arquitetura-dados/06-transacoes-e-acid.md | — | VALIDADO |
| E5-016 | 1.15 | Independência de dados | M01 | — | A | conteudo/01-arquitetura-dados/05-sql-e-sgbd.md | S | VALIDADO |
| E5-017 | 1.16 | Transações de bancos de dados | M01 | M01 (1.14) | A | conteudo/01-arquitetura-dados/06-transacoes-e-acid.md | — | VALIDADO |
| E5-018 | 1.17 | Melhoria de performance de banco de dados | M01 | — | A | conteudo/01-arquitetura-dados/05-sql-e-sgbd.md | S | VALIDADO |
| E5-019 | 1.18 | Bancos de dados NoSQL | M01 | — | A | conteudo/01-arquitetura-dados/07-bancos-nao-relacionais.md | — | VALIDADO |
| E5-020 | 1.19 | Integração dos dados (ETL, Transferência de Arquivos e Integração via Base de Dados) | M01 | M07 (7.3) | A | conteudo/01-arquitetura-dados/08-integracao-e-etl.md | — | VALIDADO |
| E5-021 | 1.20 | Banco de dados em memória | M01 | — | A | conteudo/01-arquitetura-dados/07-bancos-nao-relacionais.md | S | VALIDADO |
| E5-022 | 1.21 | Qualidade de dados e gestão de dados mestres e de referência | M01 | M04 (4.6) | A | conteudo/01-arquitetura-dados/10-qualidade-e-governanca-dados.md | — | VALIDADO |
| E5-023 | 1.22 | Data Lakes e Soluções para Big Data | M01 | M07 (7.6) | A | conteudo/01-arquitetura-dados/09-data-warehouse-e-big-data.md | — | VALIDADO |
| E5-024 | 1.23 | Diferenciação entre bancos relacionais, multidimensionais, documentos e grafos. | M01 | — | A | conteudo/01-arquitetura-dados/07-bancos-nao-relacionais.md | — | VALIDADO |
| E5-025 | **2** | Gerenciamento de Projetos e Produtos: | M02 | — | A | — | — | VALIDADO |
| E5-026 | 2.1 | Scrum e Kanban | M02 | — | A | conteudo/02-projetos-produtos/02-scrum.md<br>conteudo/02-projetos-produtos/03-kanban.md | — | VALIDADO |
| E5-027 | 2.2 | Gestão de projeto versus gestão de produto | M02 | — | A | conteudo/02-projetos-produtos/01-fundamentos.md | — | VALIDADO |
| E5-028 | 2.3 | Impulso de práticas ágeis em escala, gestão de portfólio alinhada à estratégia de negócios e realização de entregas incrementais utilizando a metodologia safe | M02 | M05 (5.2) | A | conteudo/02-projetos-produtos/04-metodos-ageis-escalados.md | — | VALIDADO |
| E5-029 | 2.4 | PMBOK 7ª edição | M02 | — | A | conteudo/02-projetos-produtos/05-pmbok-7.md | — | VALIDADO |
| E5-030 | 2.5 | Projetos e a organização | M02 | — | A | conteudo/02-projetos-produtos/01-fundamentos.md | S | VALIDADO |
| E5-031 | 2.6 | Escritório de projetos | M02 | — | A | conteudo/02-projetos-produtos/06-pmo-e-governanca-projetos.md | — | VALIDADO |
| E5-032 | 2.7 | Modelos e características. | M02 | — | A | conteudo/02-projetos-produtos/07-modelos-de-gestao.md | S | VALIDADO |
| E5-033 | **3** | Processos, grupos de processos e área de conhecimento. | M03 | M02 (2.4) | A | conteudo/03-processos-gerenciamento/01-fundamentos-processos.md<br>conteudo/03-processos-gerenciamento/02-grupos-de-processos.md<br>conteudo/03-processos-gerenciamento/03-areas-de-conhecimento.md | S | VALIDADO |
| E5-034 | **4** | Gestão e governança em TI: | M04 | — | A | — | — | VALIDADO |
| E5-035 | 4.1 | Conceitos, segmentos e mercado de tecnologia da informação | M04 | — | A | conteudo/04-governanca-ti/01-fundamentos-ti.md | — | VALIDADO |
| E5-036 | 4.2 | Princípios de economia da inovação | M04 | — | A | conteudo/04-governanca-ti/02-inovacao-e-tecnologia.md | — | VALIDADO |
| E5-037 | 4.3 | Conceitos e perspectivas da tecnologia | M04 | — | A | conteudo/04-governanca-ti/02-inovacao-e-tecnologia.md | — | VALIDADO |
| E5-038 | 4.4 | Ciência, pesquisa, desenvolvimento e indústria | M04 | — | A | conteudo/04-governanca-ti/03-ciencia-pesquisa-e-desenvolvimento.md | — | VALIDADO |
| E5-039 | 4.5 | Conceitos, disciplinas, técnicas e ferramentas de gerenciamento de serviços de TI | M04 | — | A | conteudo/04-governanca-ti/04-itsm.md | — | VALIDADO |
| E5-040 | 4.6 | Lei Geral de Proteção de Dados Pessoais - LGPD (Lei nº 13.709, de 14 de agosto de 2018, e suas alterações). | M04 | M09 (9.18) | A | conteudo/04-governanca-ti/05-lgpd.md | — | VALIDADO |
| E5-041 | **5** | Engenharia de software: | M05 | — | A | — | — | VALIDADO |
| E5-042 | 5.1 | Levantamento, análise e gerenciamento de requisitos | M05 | M06 (6.2) | A | conteudo/05-engenharia-software/02-requisitos-software.md | — | VALIDADO |
| E5-043 | 5.2 | Ciclo de vida de sistemas e seus paradigmas | M05 | — | A | conteudo/05-engenharia-software/03-ciclo-de-vida.md | — | VALIDADO |
| E5-044 | 5.3 | Uso de modelos, metodologias, técnicas e ferramentas de análise e projeto de sistemas (paradigma estruturado e paradigma orientado a objetos) | M05 | — | A | conteudo/05-engenharia-software/05-analise-e-projeto.md<br>conteudo/05-engenharia-software/04-paradigmas.md | — | VALIDADO |
| E5-045 | 5.4 | Verificação, validação e teste | M05 | — | A | conteudo/05-engenharia-software/06-verificacao-e-validacao.md | — | VALIDADO |
| E5-046 | 5.5 | Ambientes de desenvolvimento de software. | M05 | — | A | conteudo/05-engenharia-software/07-testes-e-ambientes.md | — | VALIDADO |
| E5-047 | **6** | User experience (UX): | M06 | — | A | conteudo/06-experiencia-usuario/01-usabilidade-e-acessibilidade.md | — | VALIDADO |
| E5-048 | 6.1 | Conceitos de acessibilidade e usabilidade | M06 | — | A | conteudo/06-experiencia-usuario/01-usabilidade-e-acessibilidade.md | — | VALIDADO |
| E5-049 | 6.2 | Histórias do usuário | M06 | M05 (5.1) | A | conteudo/06-experiencia-usuario/02-user-stories.md | — | VALIDADO |
| E5-050 | 6.3 | Desenho e planejamento de interação em aplicações web | M06 | — | A | conteudo/06-experiencia-usuario/03-interacao-web.md | — | VALIDADO |
| E5-051 | 6.4 | Projeto centrado no usuário de software | M06 | — | A | conteudo/06-experiencia-usuario/04-design-centrado-no-usuario.md | — | VALIDADO |
| E5-052 | 6.5 | Storytelling com dados | M06 | M07 (7.10) | A | conteudo/06-experiencia-usuario/05-data-storytelling.md | — | VALIDADO |
| E5-053 | 6.6 | Organização e apresentação de dados em relatórios e dashboards | M06 | M07 (7.8) | A | conteudo/06-experiencia-usuario/06-dashboards-e-relatorios.md | — | VALIDADO |
| E5-054 | 6.7 | Interoperabilidade de interfaces web entre diversos navegadores | M06 | — | A | conteudo/06-experiencia-usuario/07-interoperabilidade.md | — | VALIDADO |
| E5-055 | 6.8 | Mínimo Produto Viável (MVP) | M06 | — | A | conteudo/06-experiencia-usuario/08-mvp-e-prototipacao.md | — | VALIDADO |
| E5-056 | 6.9 | Prototipação | M06 | — | A | conteudo/06-experiencia-usuario/08-mvp-e-prototipacao.md | — | VALIDADO |
| E5-057 | 6.10 | Design thinking | M06 | — | A | conteudo/06-experiencia-usuario/09-design-thinking-e-personas.md | — | VALIDADO |
| E5-058 | 6.11 | Análise de personas (papéis, perfis etc.) de usuários de software. | M06 | — | A | conteudo/06-experiencia-usuario/09-design-thinking-e-personas.md | — | VALIDADO |
| E5-059 | **7** | Análise de dados e informações: | M07 | — | A | conteudo/07-analise-dados/01-dados-informacao-conhecimento.md | — | VALIDADO |
| E5-060 | 7.1 | Dado, informação, conhecimento e inteligência | M07 | — | A | conteudo/07-analise-dados/01-dados-informacao-conhecimento.md | — | VALIDADO |
| E5-061 | 7.2 | Conceitos, fundamentos, características, técnicas e métodos de business intelligence (BI) | M07 | — | A | conteudo/07-analise-dados/02-business-intelligence.md | — | VALIDADO |
| E5-062 | 7.3 | Mapeamento de fontes de dados | M07 | — | A | conteudo/07-analise-dados/03-fontes-e-mapeamento-dados.md | — | VALIDADO |
| E5-063 | 7.4 | Dados estruturados e dados não estruturados | M07 | — | A | conteudo/07-analise-dados/04-dados-estruturados-e-nao-estruturados.md | — | VALIDADO |
| E5-064 | 7.5 | Conceitos de OLAP e suas operações | M07 | M01 (1.23) | A | conteudo/07-analise-dados/05-olap-e-data-warehouse.md | — | VALIDADO |
| E5-065 | 7.6 | Conceitos de data warehouse | M07 | M01 (1.7) | A | conteudo/07-analise-dados/05-olap-e-data-warehouse.md | — | VALIDADO |
| E5-066 | 7.7 | Técnicas de modelagem e otimização de bases de dados multidimensionais | M07 | M01 (1.7) | A | conteudo/07-analise-dados/06-modelagem-multidimensional.md | — | VALIDADO |
| E5-067 | 7.8 | Construção de relatórios e dashboards interativos em ferramentas de BI | M07 | — | A | conteudo/07-analise-dados/07-dashboards-e-planilhas.md | — | VALIDADO |
| E5-068 | 7.9 | Manipulação de dados em planilhas | M07 | — | A | conteudo/07-analise-dados/07-dashboards-e-planilhas.md | — | VALIDADO |
| E5-069 | 7.10 | Geração de insights a partir de relatórios e dashboards | M07 | — | A | conteudo/07-analise-dados/08-insights-e-tomada-de-decisao.md | — | VALIDADO |
| E5-070 | 7.11 | BI como suporte a processos de tomada decisão. | M07 | — | A | conteudo/07-analise-dados/08-insights-e-tomada-de-decisao.md | — | VALIDADO |
| E5-071 | **8** | Lógica Matemática: | M08 | — | A | conteudo/08-logica-matematica/01-proposicoes-e-conectivos.md | — | VALIDADO |
| E5-072 | 8.1 | Sentido lógico-matemático convencional dos conectivos | M08 | — | A | conteudo/08-logica-matematica/01-proposicoes-e-conectivos.md | — | VALIDADO |
| E5-073 | 8.2 | Argumentos | M08 | — | A | conteudo/08-logica-matematica/03-argumentacao-logica.md | — | VALIDADO |
| E5-074 | 8.3 | A lógica sentencial | M08 | — | A | conteudo/08-logica-matematica/04-logica-proposicional.md | — | VALIDADO |
| E5-075 | 8.4 | A lógica de predicados de primeira ordem | M08 | — | A | conteudo/08-logica-matematica/05-logica-de-predicados.md | — | VALIDADO |
| E5-076 | 8.5 | Regras de formação de fórmulas | M08 | — | A | conteudo/08-logica-matematica/06-formulas-e-sistemas-dedutivos.md | — | VALIDADO |
| E5-077 | 8.6 | Sistemas dedutivos | M08 | — | A | conteudo/08-logica-matematica/06-formulas-e-sistemas-dedutivos.md | — | VALIDADO |
| E5-078 | 8.7 | Decidibilidade da lógica sentencial | M08 | — | A | conteudo/08-logica-matematica/07-decidibilidade-e-funcoes-avaliacao.md | — | VALIDADO |
| E5-079 | 8.8 | Valores-verdade | M08 | — | A | conteudo/08-logica-matematica/02-tabelas-verdade.md | — | VALIDADO |
| E5-080 | 8.9 | Funções de avaliação. | M08 | — | A | conteudo/08-logica-matematica/07-decidibilidade-e-funcoes-avaliacao.md | — | VALIDADO |
| E5-081 | **9** | Segurança da Informação: | M09 | — | A | conteudo/09-seguranca-informacao/01-fundamentos-seguranca.md | — | VALIDADO |
| E5-082 | 9.1 | Segurança física e lógica | M09 | — | A | conteudo/09-seguranca-informacao/02-seguranca-fisica-e-logica.md | — | VALIDADO |
| E5-083 | 9.2 | Operação de segurança (Firewall, Proxy, IPS/IDS, DLP, CASB, SIEM, Antivírus, EDR, WAF, Gestão de vulnerabilidades, Monitoração, Backup) | M09 | — | A | conteudo/09-seguranca-informacao/14-operacao-de-seguranca.md | S | VALIDADO |
| E5-084 | 9.3 | Softwares maliciosos (ransomware, vírus, worms, spywares, rootkit etc.) | M09 | — | A | conteudo/09-seguranca-informacao/03-ameacas-e-malwares.md | — | VALIDADO |
| E5-085 | 9.4 | Ataques (DDoS, SQL Injection, XSS, CSRF, Path Traversal etc.) | M09 | — | A | conteudo/09-seguranca-informacao/03-ameacas-e-malwares.md | — | VALIDADO |
| E5-086 | 9.5 | Técnicas de desenvolvimento seguro, SAST/DAST/IAST | M09 | — | A | conteudo/09-seguranca-informacao/04-desenvolvimento-seguro.md | — | VALIDADO |
| E5-087 | 9.6 | VPN | M09 | — | A | conteudo/09-seguranca-informacao/05-vpn-mdm-sso-mfa-iam.md | — | VALIDADO |
| E5-088 | 9.7 | MDM | M09 | — | A | conteudo/09-seguranca-informacao/05-vpn-mdm-sso-mfa-iam.md | — | VALIDADO |
| E5-089 | 9.8 | SSO | M09 | — | A | conteudo/09-seguranca-informacao/05-vpn-mdm-sso-mfa-iam.md | — | VALIDADO |
| E5-090 | 9.9 | MFA | M09 | — | A | conteudo/09-seguranca-informacao/05-vpn-mdm-sso-mfa-iam.md | — | VALIDADO |
| E5-091 | 9.10 | Gestão de Identidade e acesso (autenticação, autorização e auditoria), RBAC e ABAC | M09 | — | A | conteudo/09-seguranca-informacao/05-vpn-mdm-sso-mfa-iam.md | — | VALIDADO |
| E5-092 | 9.11 | Conceitos gerais: Gerenciamento de resposta a incidente (NIST SP 800-61) | M09 | — | A | conteudo/09-seguranca-informacao/06-gestao-incidentes.md | — | VALIDADO |
| E5-093 | 9.12 | Threat intel, threat hunting | M09 | — | A | conteudo/09-seguranca-informacao/07-inteligencia-de-ameacas.md | — | VALIDADO |
| E5-094 | 9.13 | Testes de penetração | M09 | — | A | conteudo/09-seguranca-informacao/08-pentest-stride-mitre.md | — | VALIDADO |
| E5-095 | 9.14 | Modelagem de ameaças (STRIDE etc.) | M09 | — | A | conteudo/09-seguranca-informacao/08-pentest-stride-mitre.md | — | VALIDADO |
| E5-096 | 9.15 | conhecimento das Táticas do framework Mitre ATT&CK | M09 | — | A | conteudo/09-seguranca-informacao/08-pentest-stride-mitre.md | — | VALIDADO |
| E5-097 | 9.16 | Gestão de riscos (ISO 31000), Gestão de Continuidade de Negócios (ISO 22301) e Lei Sarbannes-Oxley | M09 | M04 | A | conteudo/09-seguranca-informacao/09-gestao-riscos-e-continuidade.md | — | VALIDADO |
| E5-098 | 9.17 | Políticas de Segurança de Informação | M09 | — | A | conteudo/09-seguranca-informacao/10-politicas-e-classificacao.md | — | VALIDADO |
| E5-099 | 9.18 | Classificação de informações | M09 | — | A | conteudo/09-seguranca-informacao/10-politicas-e-classificacao.md | — | VALIDADO |
| E5-100 | 9.19 | Norma ISO 27002, Criptografia, certificação digital e assinatura digital | M09 | M04 (4.6) | A | conteudo/09-seguranca-informacao/11-iso-27002.md<br>conteudo/09-seguranca-informacao/12-criptografia-e-certificados.md | — | VALIDADO |
| E5-101 | 9.20 | Conceitos de segurança em nuvem | M09 | — | A | conteudo/09-seguranca-informacao/13-seguranca-cloud-e-iot.md | — | VALIDADO |
| E5-102 | 9.21 | Segurança em IoT. | M09 | — | A | conteudo/09-seguranca-informacao/13-seguranca-cloud-e-iot.md | — | VALIDADO |

## 5. Controle por etapa

Os itens do **M09 (E5-081 a E5-102)** estão com Conteúdo teórico `VALIDADO` pelo usuário em 2026-10-31, com ressalvas (interpretação do item 9.1, de redação genérica, e escolha da revisão do NIST SP 800-61 (Rev. 2 × Rev. 3) e da versão do MITRE ATT&CK (14 × 15 táticas) a confirmar; número de controles da ISO 27002, princípios da ISO 31000, BIA/RTO/RPO e vários referenciais de memória; ver `docs/qualidade/relatorio-producao-modulo-09.md`). Os itens do **M08 (E5-071 a E5-080)** estão com Conteúdo teórico `VALIDADO` pelo usuário em 2026-10-31, com ressalvas (interpretação dos itens 8.5, 8.6 e 8.9, de redação genérica, a confirmar; equivalências e formas de argumento conferidas por script; resultados metateóricos e livros de memória; ver `docs/qualidade/relatorio-producao-modulo-08.md`). Os itens do **M07 (E5-059 a E5-070)** estão com Conteúdo teórico `VALIDADO` pelo usuário em 2026-10-31, com ressalvas (interpretação dos itens 7.2, 7.3 e 7.7 a 7.9, de redação ampla ou sem ferramenta definida, a confirmar; definição de Inmon, operações pivot/drill-through e funções de planilha não verificadas em fonte primária; ver `docs/qualidade/relatorio-producao-modulo-07.md`). Os itens do **M06 (E5-047 a E5-058)** estão com Conteúdo teórico `VALIDADO` pelo usuário em 2026-10-31, com ressalvas (interpretação dos itens 6.3, 6.4, 6.7 e 6.11, de redação genérica, a confirmar; estrutura do eMAG e etapas do d.school/IDEO não verificadas em fonte primária; ver `docs/qualidade/relatorio-producao-modulo-06.md`). Os itens do **M05 (E5-041 a E5-046)** estão com Conteúdo teórico `VALIDADO` pelo usuário em 2026-10-31, com ressalvas ( interpretação do item 5.2, 'paradigmas', e do 5.5, de redação genérica, a confirmar; C5-002 produzido como complemento B). Os itens do **M04 (E5-034 a E5-040)** estão com Conteúdo teórico `VALIDADO` pelo usuário em 2026-10-31, com ressalvas (interpretação dos itens 4.3 e 4.4, de redação genérica, a confirmar). O item do **M03 (E5-033)** está com Conteúdo teórico `VALIDADO` pelo usuário em 2026-10-31, com ressalvas (produzido em 2026-10-31; interpretação aprovada pelo usuário: grupos de processos e áreas de conhecimento do PMBOK 6ª ed.; BPM como complemento C5-004, também produzido, fora da cobertura oficial). Os itens do **M02 (E5-025 a E5-032)** estão com Conteúdo teórico `VALIDADO` pelo usuário em 2026-10-31, com ressalvas (textos do PMI não verificados em fonte primária; itens 2.5 e 2.7 com interpretação a confirmar). Os itens do **M01 (E5-001 a E5-024)** estão com Conteúdo teórico `VALIDADO` pelo usuário em 2026-10-31 (referências bibliográficas ainda não verificadas listadas no relatório do módulo). Todos os demais itens, e todas as demais etapas do M01, estão em `NAO_INICIADO`, a saber: Questões, Flashcards, Revisões, Material NotebookLM, Integração com o site e Validação. O acompanhamento por item está em `docs/edital/controle-cobertura.md` (seção 5).

## 6. Material complementar (fora da contagem oficial)

Decisão do usuário (D-03 a D-05): arquivos sem correspondência oficial ficam fora da cobertura oficial e são tratados como material complementar identificado. Não contam nos indicadores de cobertura do edital.

| ID | Arquivo | Escopo | Item oficial relacionado | Justificativa |
|---|---|---|---|---|
| C5-001 | conteudo/01-arquitetura-dados/01-fundamentos.md | B | 1.1–1.5 | Conceitos de base (dado, banco, SGBD) para compreender a modelagem |
| C5-002 | conteudo/05-engenharia-software/01-fundamentos.md | B | 5.1–5.3 | Conceitos de base de engenharia de software |
| C5-003 | conteudo/09-seguranca-informacao/01-fundamentos-seguranca.md | B | 9.1 | Fundamentos (CID, ameaças, controles) para os itens 9.x |
| C5-004 | conteudo/03-processos-gerenciamento/04-gerenciamento-processos.md | C | 3 (genérico) | Gestão de processos/BPM; o edital não indica esse referencial. Aprofundamento opcional, sem indicação de cobrança direta |

Regra: material B/C deve ser marcado como complementar no próprio arquivo e não entra em simulados como cobertura oficial.

## 7. Itens com associação ressalvada

| ID | Item | Observação |
|---|---|---|
| E5-007 | 1.6 | Arquivo atribuído por reorganização (decisão D-06); confirmar cobertura na produção. |
| E5-008 | 1.7 | Arquivo atribuído por reorganização (decisão D-06); confirmar cobertura na produção. |
| E5-009 | 1.8 | Arquivo atribuído por reorganização (decisão D-06); confirmar cobertura na produção. |
| E5-010 | 1.9 | Arquivo atribuído por reorganização (decisão D-06); confirmar cobertura na produção. |
| E5-016 | 1.15 | Arquivo atribuído por reorganização (decisão D-06); confirmar cobertura na produção. |
| E5-018 | 1.17 | Arquivo atribuído por reorganização (decisão D-06); confirmar cobertura na produção. |
| E5-021 | 1.20 | Arquivo atribuído por reorganização (decisão D-06); confirmar cobertura na produção. |
| E5-030 | 2.5 | Arquivo atribuído por reorganização (decisão D-06); confirmar cobertura na produção. |
| E5-032 | 2.7 | Redação genérica; o objeto dos 'modelos' não é esclarecido no edital. |
| E5-033 | 3 | Item sem subitens e redação genérica; referencial não indicado. Associação ao M03 decorre do título. Evidência: Transpetro 2023 (Q55, Q70) cobrou grupos de processos de projeto. |
| E5-083 | 9.2 | Arquivo atribuído por reorganização (decisão D-06); confirmar cobertura na produção. |

## 8. Distribuição por módulo (contagem de itens, não de questões)

| Módulo | Subitens numerados | Itens-folha |
|---|---:|---:|
| M01 — Arquitetura de Dados | 23 | 23 |
| M02 — Gerenciamento de Projetos e Produtos | 7 | 7 |
| M03 — Processos, Grupos de Processos e Áreas de Conhecimento | 0 | 1 |
| M04 — Gestão e Governança em TI | 6 | 6 |
| M05 — Engenharia de Software | 5 | 5 |
| M06 — Experiência do Usuário (UX) | 11 | 11 |
| M07 — Análise de Dados e Informações | 11 | 11 |
| M08 — Lógica Matemática | 9 | 9 |
| M09 — Segurança da Informação | 21 | 21 |
| **Total** | **93** | **94** |

Itens-folha = subitens + item 3 (que não tem subitens). A quantidade de itens **não** indica quantidade de questões: o edital não informa distribuição das 50 questões específicas por assunto.

## 9. Histórico

| Versão | Data | Alteração |
|---|---|---|
| 1.0 | 2026-10-30 | Estrutura inicial |
| 1.1 | 2026-10-30 | Preenchimento a partir do Anexo IV (102 linhas); aguarda aprovação |
| 1.21 | 2026-10-31 | M09 validado pelo usuário, com ressalvas; teoria dos nove módulos validada |
| 1.20 | 2026-10-31 | M09: itens E5-081 a E5-102 em EM_REVISAO |
| 1.19 | 2026-10-31 | M08 validado pelo usuário, com ressalvas |
| 1.18 | 2026-10-31 | M08: itens E5-071 a E5-080 em EM_REVISAO |
| 1.17 | 2026-10-31 | M07 validado pelo usuário, com ressalvas |
| 1.16 | 2026-10-31 | M07: itens E5-059 a E5-070 em EM_REVISAO |
| 1.15 | 2026-10-31 | M06 validado pelo usuário, com ressalvas |
| 1.14 | 2026-10-31 | M06: itens E5-047 a E5-058 em EM_REVISAO |
| 1.13 | 2026-10-31 | M05 validado pelo usuário, com ressalvas |
| 1.12 | 2026-10-31 | M05: itens E5-041 a E5-046 em EM_REVISAO |
| 1.11 | 2026-10-31 | M04 validado pelo usuário, com ressalvas |
| 1.10 | 2026-10-31 | M04: itens E5-034 a E5-040 em EM_REVISAO |
| 1.9 | 2026-10-31 | M03 validado pelo usuário, com ressalvas |
| 1.8 | 2026-10-31 | M03: item 3 (E5-033) em EM_REVISAO; C5-004 produzido como complemento |
| 1.7 | 2026-10-31 | M02 validado pelo usuário, com ressalvas |
| 1.6 | 2026-10-31 | M02: itens E5-025 a E5-032 em EM_REVISAO; interpretação do item 2.7 registrada |
| 1.5 | 2026-10-31 | M01 validado pelo usuário |
| 1.4 | 2026-10-31 | Módulo 1: itens E5-001 a E5-024 em EM_REVISAO; arquivo principal do item 1.7 passa a ser o M01/09 |
| 1.3 | 2026-10-31 | Aprovação formal pelo usuário; sem alteração de conteúdo |
| 1.2 | 2026-10-30 | Decisões D-03 a D-07: material complementar (seção 6), 9 itens com arquivo atribuído, matriz de Conhecimentos Gerais separada |
