---
modulo: 09-seguranca-informacao
arquivo: 09-gestao-riscos-e-continuidade
itens_edital:
  - "9.16 Gestão de riscos (ISO 31000), Gestão de Continuidade de Negócios (ISO 22301) e Lei Sarbannes-Oxley"
ids_matriz: ["E5-097"]
escopo: "A — conteúdo expresso no edital. O edital grafa 'Sarbannes-Oxley'; a lei é Sarbanes-Oxley. Relaciona-se ao M04 (governança, riscos e conformidade)."
tipo_conteudo: "teoria"
status: "VALIDADO"
ultima_atualizacao: "2026-10-31"
---

# Gestão de Riscos (ISO 31000), Continuidade de Negócios (ISO 22301) e Lei Sarbanes-Oxley

**Módulo:** M09 — Segurança da informação
**Texto oficial (Anexo IV):** 9.16 "Gestão de riscos (ISO 31000), Gestão de Continuidade de Negócios (ISO 22301) e Lei Sarbannes-Oxley".
**Escopo:** A. Governança de TI e riscos corporativos (COBIT, ISO 38500, gestão de riscos): Módulo 4. Riscos de projetos: Módulo 2 (`PMBOK`). Resposta a incidentes: `06`. Controles: `11`.
**Status:** `VALIDADO` (aprovado pelo usuário em 2026-10-31, com ressalvas: interpretação do item 9.1 e escolha das versões do NIST SP 800-61 e do MITRE ATT&CK a confirmar; fontes de memória listadas em `docs/qualidade/relatorio-producao-modulo-09.md`). **Verificados** (Wikipedia, 2026-10-31): ISO 31000:2018 (processo e estrutura), ISO 22301 (SGCN; 2ª edição, 2019), Lei Sarbanes-Oxley (2002; seção 302 e 404 por resumo; PCAOB). **Revisão:** BIA, RTO, RPO e MTPD **confirmados** (Wikipedia, "Business continuity planning"); a lista de **princípios** e a etapa "**registro e relato**" da ISO 31000 **não constam** do artigo lido; aplicabilidade a empresas estrangeiras (ADRs) não confirmada; conteúdo detalhado das seções (iso.org bloqueado, HTTP 403).

**Objetivos de aprendizagem.** (1) Descrever o processo de gestão de riscos da ISO 31000; (2) aplicar análise qualitativa e quantitativa; (3) tratar riscos; (4) explicar a gestão de continuidade (BIA, RTO, RPO, planos); (5) relacionar a Lei Sarbanes-Oxley a controles internos e TI.

---

## 1. Gestão de riscos — ISO 31000:2018

### 1.1 Conceito e estrutura

**Risco** (ISO 31000): **efeito da incerteza sobre os objetivos** (definição geral, de memória). A **ISO 31000:2018** (revisada e confirmada em 2023, segundo a fonte secundária) é uma norma de **diretrizes**, **não certificável**, aplicável a qualquer organização e a qualquer tipo de risco. Tem três componentes: **princípios**, **estrutura (*framework*)** e **processo**.

| Componente | Conteúdo |
|---|---|
| **Princípios** | Criar e proteger valor; integrada, estruturada, personalizada, inclusiva, dinâmica; baseada na melhor informação disponível; considera fatores humanos e culturais; melhoria contínua (de memória, **não confirmados**) |
| **Estrutura** | Liderança e comprometimento; integração; concepção; implementação; avaliação; melhoria — ciclo tipo **PDCA** (confirmado) |
| **Processo** | Seção 1.2 |

### 1.2 Processo de gestão de riscos (confirmado)

| Etapa | Conteúdo |
|---|---|
| **Comunicação e consulta** | Diálogo contínuo com as partes interessadas |
| **Escopo, contexto e critérios** | Definir objetivos, contexto interno e externo, **critérios de risco** (apetite, escalas de probabilidade e impacto) |
| **Avaliação de riscos** | Engloba **identificação**, **análise** e **ponderação (avaliação)** |
| **Tratamento de riscos** | Selecionar e implementar opções |
| **Monitoramento e análise crítica** | Acompanhar riscos, controles e o processo |
| **Registro e relato** | Documentar e comunicar (de memória; **não confirmado** na fonte) |

### 1.3 Técnicas

| Etapa | Técnicas |
|---|---|
| **Identificação** | *Brainstorming*, entrevistas, listas de verificação, análise de cenários, SWOT, Delphi, histórico de incidentes, modelagem de ameaças (`08`) |
| **Análise qualitativa** | Matriz de **probabilidade × impacto** (escalas: baixa/média/alta) |
| **Análise quantitativa** | **Expectativa de perda**: **SLE** (perda por evento = valor do ativo × fator de exposição), **ARO** (taxa anual de ocorrência), **ALE = SLE × ARO**; simulação de Monte Carlo (de memória) |
| **Avaliação** | Comparação com critérios para priorizar |

Exemplo (didático e numérico): ativo de R$ 500.000, fator de exposição 40% → SLE = R$ 200.000; ocorrência estimada de 0,5 por ano → ALE = R$ 100.000/ano. Um controle que custa R$ 30.000/ano e reduz o ALE em R$ 70.000 é vantajoso.

### 1.4 Tratamento de riscos (opções usuais)

| Opção | Descrição | Exemplo |
|---|---|---|
| **Mitigar (reduzir)** | Reduzir probabilidade ou impacto | MFA, backup |
| **Evitar** | Eliminar a atividade ou o fator de risco | Descontinuar um serviço |
| **Transferir (compartilhar)** | Repassar parte do risco | Seguro, terceirização contratual |
| **Aceitar (reter)** | Aceitar conscientemente, dentro do apetite | Risco baixo, custo do controle maior que a perda |
| **Explorar (oportunidade)** | Para riscos positivos (de memória) | — |

Após o tratamento, resta o **risco residual**; **risco inerente** é o risco antes dos controles. **Apetite** (quanto risco a organização busca), **tolerância** (variação aceitável) e **capacidade** são conceitos relacionados. Gestão de riscos corporativos: COSO ERM (de memória; Módulo 4). Segurança da informação: ISO/IEC 27005 (gestão de riscos de SI; de memória) e `11`.

## 2. Gestão de continuidade de negócios — ISO 22301

### 2.1 Conceito

**GCN/BCM** é a capacidade de **continuar entregando produtos e serviços críticos** em níveis aceitáveis durante e após **incidentes disruptivos**. A **ISO 22301** especifica requisitos de um **Sistema de Gestão de Continuidade de Negócios (SGCN)** — norma **certificável**; a **2ª edição é de 2019** (confirmado). Diferenças: **continuidade** foca processos críticos; **resposta a incidentes** (`06`) trata o incidente de segurança; **recuperação de desastres (DR)** foca a recuperação de TI.

### 2.2 Conceitos centrais (BIA, RTO, RPO e MTPD verificados na Wikipedia; demais de memória)

| Conceito | Definição |
|---|---|
| **BIA** (*Business Impact Analysis*) | Analisa o **impacto da interrupção** de atividades ao longo do tempo e define prioridades |
| **MTPD/MAO** | Tempo máximo tolerável de interrupção |
| **RTO** (*Recovery Time Objective*) | Tempo-alvo para **restabelecer** o serviço |
| **RPO** (*Recovery Point Objective*) | **Perda máxima de dados** aceitável, medida em tempo (idade do último backup) |
| **MBCO** | Nível mínimo de serviço aceitável |
| **PCN** (plano de continuidade de negócios) | Procedimentos para manter operações críticas |
| **PRD/DRP** (plano de recuperação de desastres) | Recuperar TI e infraestrutura |
| **Plano de gerenciamento de crises** | Decisões, comunicação e liderança durante a crise |
| **Plano de contingência** | Respostas a falhas específicas |

Relações típicas: **RTO < MTPD**; quanto **menores RTO e RPO**, **maior o custo** (replicação síncrona, sites ativos).

### 2.3 Estratégias de recuperação (de memória)

| Estratégia | Descrição |
|---|---|
| **Site frio (*cold site*)** | Local com infraestrutura básica; recuperação lenta e barata |
| **Site morno (*warm site*)** | Equipamentos instalados, dados parcialmente atualizados |
| **Site quente (*hot site*)** | Réplica pronta, dados quase em tempo real; mais cara |
| **Redundância ativa-ativa / nuvem / DRaaS** | Alta disponibilidade, recuperação como serviço |
| **Backup e réplica** | RPO depende da frequência (`14`) |
| **Trabalho remoto, fornecedores alternativos** | Continuidade de processos e pessoas |

### 2.4 Ciclo e testes

Política e escopo → BIA e avaliação de riscos → estratégias → planos → **exercícios e testes** (mesa, simulação, falha real controlada) → manutenção e melhoria contínua (PDCA). Planos não testados tendem a falhar.

## 3. Lei Sarbanes-Oxley (SOX)

### 3.1 Contexto e conteúdo

Lei federal dos EUA de **30 de julho de 2002** (Pub. L. 107-204), editada após fraudes contábeis de grandes empresas (confirmado: ano e identificação). Objetivo: **proteger investidores**, aumentando a **precisão e a confiabilidade** das informações financeiras divulgadas por empresas de capital aberto, com **responsabilização dos executivos** e criação do **PCAOB** (órgão que supervisiona as auditorias de empresas abertas; confirmado).

| Seção | Conteúdo (títulos e resumo; seções 302, 404 e 906 confirmadas apenas por título e resumo) |
|---|---|
| **302** | **CEO e CFO certificam** os relatórios periódicos e sua responsabilidade pelos **controles internos** |
| **404** | A administração avalia a **eficácia dos controles internos sobre relatórios financeiros**, e o **auditor** atesta |
| **906** | **Responsabilidade criminal** de executivos por certificação falsa |
| **PCAOB** | Supervisão e padrões de auditoria |

### 3.2 Relação com TI e segurança

Os **controles internos sobre relatórios financeiros** dependem de **sistemas de TI**: por isso a SOX exige **controles gerais de TI (ITGC)**: **gestão de acesso**, **segregação de funções**, **gestão de mudanças**, **operações e backup**, **integridade dos dados e trilhas de auditoria**. Referenciais de apoio: **COSO** (controle interno) e **COBIT** (governança de TI; Módulo 4) — de memória.

### 3.3 Aplicabilidade

Aplica-se a empresas abertas dos EUA (confirmado). A aplicação a **empresas estrangeiras com valores mobiliários registrados nos EUA** (por exemplo, ADRs) é comumente citada na literatura, mas **não foi confirmada** na fonte lida; pode ser relevante a organizações brasileiras com ações listadas nos EUA. **Não** é lei brasileira; no Brasil, a LGPD (Módulo 4) e normas da CVM tratam de temas correlatos (de memória).

## 4. Comparações conceituais

| A | B | Diferença |
|---|---|---|
| ISO 31000 | ISO 27001 | Gestão de riscos geral, não certificável × SGSI, certificável |
| Risco inerente | Residual | Antes dos controles × após tratamento |
| Mitigar | Transferir | Reduzir × repassar (seguro) |
| ISO 22301 | ISO 27001 | Continuidade × segurança da informação |
| RTO | RPO | Tempo para restaurar × perda máxima de dados |
| PCN | PRD | Operações do negócio × recuperação de TI |
| *Hot site* | *Cold site* | Pronto e caro × básico e lento |
| SOX | LGPD | Controles internos financeiros × proteção de dados pessoais |

## 5. Atenção para a prova

*Inferência técnica e recomendação pedagógica; sem atribuir frequência à banca.*

- Memorizar as **etapas do processo da ISO 31000** e as **opções de tratamento**; distinguir **RTO e RPO**; associar **SOX** a **controles internos financeiros** e responsabilização dos executivos.
- O item 9.16 **não teve questão** identificada nas duas provas catalogadas; ISO 31000, ISO 22301 e SOX não aparecem nas questões analisadas. Duas provas não permitem inferir frequência.

## 6. Síntese

ISO 31000: princípios, estrutura e processo (comunicação; contexto; avaliação [identificação, análise, ponderação]; tratamento; monitoramento; registro). Tratamento: mitigar, evitar, transferir, aceitar. ISO 22301: SGCN, BIA, RTO, RPO, planos e testes. SOX (2002): controles internos e responsabilidade dos executivos, PCAOB, ITGC.

## 7. Pontos para a futura produção de questões (registro)

Etapas do processo; opção de tratamento por cenário; ALE; RTO×RPO; sites de recuperação; objetivo e seções da SOX.

## 8. Referências

- Wikipedia, "ISO 31000" e "ISO 22301" — **verificadas em 2026-10-31** (processo e estrutura; SGCN e edição 2019). Wikipedia, "Sarbanes–Oxley Act" — **verificada em parte** (identificação, PCAOB; seções por resumo). iso.org — HTTP 403, normas não lidas.
- Wikipedia, "Business continuity planning" — **verificada** (BIA, RTO, RPO, MTPD). Princípios da ISO 31000, SLE/ALE, COSO, ISO 27005, aplicabilidade da SOX — **de memória, não verificados**.
- Edital Transpetro nº 04/2026.4, Anexo IV, item 9.16.
