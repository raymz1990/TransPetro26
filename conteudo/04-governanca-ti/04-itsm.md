---
modulo: 04-governanca-ti
arquivo: 04-itsm
itens_edital:
  - "4.5 Conceitos, disciplinas, técnicas e ferramentas de gerenciamento de serviços de TI"
ids_matriz: ["E5-039"]
escopo: "A — conteúdo expresso no edital. O edital não cita referencial (ITIL, ISO/IEC 20000, COBIT): ITIL é usado como referência didática principal, com versões distintas identificadas."
tipo_conteudo: "teoria"
status: "VALIDADO"
ultima_atualizacao: "2026-10-31"
---

# Gerenciamento de Serviços de TI (ITSM): Conceitos, Disciplinas, Técnicas e Ferramentas

**Módulo:** M04 — Gestão e governança em TI
**Texto oficial (Anexo IV):** 4.5 "Conceitos, disciplinas, técnicas e ferramentas de gerenciamento de serviços de TI".
**Referencial:** o edital **não indica** biblioteca nem norma. Usa-se o **ITIL** (versão **4**, 2019) como referência principal e o **ITIL v3** (2007/2011, ciclo de vida) por ser a base de provas anteriores; a **ISO/IEC 20000-1** e o **COBIT** são citados como contexto. A edição vigente do ITIL e das normas **não foi verificada online** nesta etapa.
**Status:** `VALIDADO` (aprovado pelo usuário em 2026-10-31, com ressalvas: interpretação dos itens 4.3 e 4.4 a confirmar; EC 115/2022, art. 65 da LGPD e vários referenciais de memória não verificados — ver `docs/qualidade/relatorio-producao-modulo-04.md`).

**Objetivos de aprendizagem.** (1) Definir serviço, valor e gerenciamento de serviços de TI; (2) descrever o sistema de valor de serviço do ITIL 4 e o ciclo de vida do ITIL v3; (3) explicar as principais disciplinas/práticas (incidentes, problemas, mudanças, requisições, nível de serviço, catálogo, configuração, disponibilidade e capacidade, continuidade); (4) aplicar técnicas de priorização, escalonamento e análise de causa; (5) reconhecer ferramentas e indicadores (KPIs, SLAs).

---

## 1. Introdução

As áreas de negócio dependem de **serviços** de TI (correio eletrônico, sistema de manutenção, acesso remoto). O **gerenciamento de serviços de TI** (*IT Service Management*, **ITSM**) é o conjunto de **capacidades organizacionais** para planejar, entregar, operar e melhorar serviços de TI de modo que **gerem valor ao negócio**, e não apenas mantenham tecnologia funcionando. Distingue-se da **governança de TI** (direção e controle, arquivo `01`) e do **gerenciamento de projetos** (Módulo 2): o ITSM cuida da **operação contínua** e da melhoria dos serviços.

## 2. Conceitos fundamentais

| Conceito | Definição |
|---|---|
| **Serviço** (ITIL 4) | Meio de **possibilitar a cocriação de valor**, facilitando os **resultados** que o cliente quer alcançar, **sem que o cliente gerencie custos e riscos específicos** |
| **Valor** | Benefícios, utilidade e importância percebidos |
| **Resultado (*outcome*)** | Efeito desejado pelo cliente (por exemplo, técnicos registram ordens em campo) |
| **Cliente**, **usuário**, **patrocinador** | Quem define requisitos e é responsável pelo resultado; quem usa o serviço; quem autoriza o orçamento |
| **Provedor de serviço** | Organização (interna ou externa) que entrega o serviço |
| **Utilidade e garantia** | Utilidade (*fitness for purpose*): o serviço faz o que é necessário; garantia (*fitness for use*): disponibilidade, capacidade, continuidade e segurança suficientes |
| **Incidente** | Interrupção não planejada ou degradação de um serviço |
| **Problema** | **Causa** (real ou potencial) de um ou mais incidentes |
| **Erro conhecido** | Problema com causa raiz identificada e **solução de contorno** (*workaround*) documentada |
| **Mudança** | Adição, modificação ou remoção de algo que possa afetar serviços |
| **Requisição de serviço** | Pedido formal de algo previsto (acesso, instalação, informação) |

### 2.1 Acordos de nível de serviço

| Acordo | Entre quem | Finalidade |
|---|---|---|
| **SLA** (*Service Level Agreement*) | **Provedor** e **cliente** | Metas de serviço (disponibilidade, tempo de resposta e de resolução) |
| **OLA** (*Operational Level Agreement*) | Equipes **internas** do provedor | Apoia o cumprimento do SLA |
| **UC** (*Underpinning Contract*) | Provedor e **fornecedor externo** | Apoia o cumprimento do SLA com terceiros |

## 3. Referenciais de gerenciamento de serviços

### 3.1 ITIL v3 (2007/2011): ciclo de vida do serviço

| Estágio | Foco | Exemplos de processos |
|---|---|---|
| **Estratégia de Serviço** | Definir o que oferecer e por quê | Gerenciamento da estratégia, do portfólio, financeiro, da demanda |
| **Desenho de Serviço** | Projetar serviços e processos | Catálogo de serviços, níveis de serviço, capacidade, disponibilidade, continuidade, segurança, fornecedores |
| **Transição de Serviço** | Levar mudanças à produção com controle | Mudanças, liberação e implantação, configuração e ativos, validação e testes, conhecimento |
| **Operação de Serviço** | Entregar e suportar no dia a dia | Eventos, incidentes, requisições, problemas, acesso; *service desk* |
| **Melhoria Contínua de Serviço** | Melhorar continuamente | Processo de melhoria em sete etapas, medição e relatórios |

### 3.2 ITIL 4 (2019): sistema de valor de serviço (SVS)

O **SVS** descreve como os componentes da organização trabalham juntos para criar valor. Tem **cinco componentes**:

| Componente | Descrição |
|---|---|
| **Princípios orientadores** | Sete: **foque no valor**; **comece de onde você está**; **progrida iterativamente com feedback**; **colabore e promova visibilidade**; **pense e trabalhe de forma holística**; **mantenha simples e prático**; **otimize e automatize** |
| **Governança** | Direção e controle da organização, alinhados à estratégia |
| **Cadeia de valor de serviço** | Seis atividades: **planejar**, **melhorar**, **engajar**, **desenhar e fazer a transição**, **obter/construir**, **entregar e suportar** |
| **Práticas** | **34 práticas** de gerenciamento (gerais, de serviço e técnicas) |
| **Melhoria contínua** | Atividade em todos os níveis |

As **quatro dimensões** do gerenciamento de serviços: **organizações e pessoas**; **informação e tecnologia**; **parceiros e fornecedores**; **fluxos de valor e processos**.

*Na versão 4, "processos" dão lugar a "práticas", e o ciclo de vida do v3 é substituído pela cadeia de valor; os conceitos de incidente, problema e mudança permanecem.*

### 3.3 Outros referenciais

| Referencial | Observação |
|---|---|
| **ISO/IEC 20000-1** | Norma de **requisitos** para um sistema de gestão de serviços; **certificável**; alinha-se ao ITIL |
| **COBIT** | Governança e gestão de TI; domínios APO, BAI, DSS e MEA (arquivo `01`) |
| **DevOps e SRE** (engenharia de confiabilidade de sites) | Integração entre desenvolvimento e operações; automação; metas de disponibilidade |
| **Lean e Agile** | Melhoria e entrega iterativa de serviços |

## 4. Disciplinas (práticas) principais

### 4.1 Gerenciamento de incidentes

**Objetivo:** **restaurar a operação normal do serviço o mais rápido possível**, minimizando o impacto no negócio. Etapas típicas: **registro**, **classificação e categorização**, **priorização**, **diagnóstico** (suporte de 1º, 2º e 3º níveis), **escalonamento** (funcional e hierárquico), **resolução**, **recuperação** e **encerramento**. Prioridade = **impacto × urgência**.

| Impacto \ Urgência | Alta | Média | Baixa |
|---|---|---|---|
| **Alto** | P1 | P2 | P3 |
| **Médio** | P2 | P3 | P4 |
| **Baixo** | P3 | P4 | P5 |

*(Matriz de exemplo; cada organização define a sua.)* **Solução de contorno** restaura o serviço sem eliminar a causa.

### 4.2 Gerenciamento de problemas

**Objetivo:** **identificar e tratar a causa raiz** de incidentes, reduzir sua recorrência e impacto. Atividades: **identificação**, **análise de causa raiz**, **registro de erro conhecido**, **solução definitiva** (via mudança), **gestão proativa**. Técnicas: **5 porquês**, **diagrama de Ishikawa**, **Pareto**, análise de tendência, árvore de falhas, análise cronológica (linha do tempo).

*Incidente × problema:* o incidente trata o **sintoma** e **restaura o serviço**; o problema investiga a **causa** para **evitar repetição**.

### 4.3 Gerenciamento de mudanças (habilitação de mudanças, no ITIL 4)

**Objetivo:** maximizar mudanças **bem-sucedidas** controlando riscos. Tipos (ITIL 4): **padrão** (pré-aprovada, baixo risco, repetitiva), **normal** (avaliada e autorizada) e **emergencial** (urgente, para restaurar o serviço ou evitar impacto). Elementos: **requisição de mudança (RFC)**, **avaliação de risco e impacto**, **autoridade de mudança** (no v3, **CAB**: comitê consultivo de mudanças), **janelas de mudança**, plano de **retorno (*rollback*)**, revisão pós-implementação.

### 4.4 Gerenciamento de requisições de serviço

Trata pedidos **padronizados e previsíveis** (acesso, instalação, informação), geralmente com **fluxos de aprovação** e **autoatendimento** (portal de serviços), distintos de incidentes (falhas) e mudanças.

### 4.5 *Service desk* (central de serviços)

**Ponto único de contato** entre usuários e a TI: registra, classifica, resolve ou encaminha incidentes e requisições; comunica status. Modelos: **local**, **centralizado**, **virtual** e ***follow-the-sun***. Níveis de suporte: **N1** (primeiro atendimento), **N2** (especialistas), **N3** (especialistas avançados/fornecedores).

### 4.6 Gerenciamento de nível de serviço e catálogo de serviços

- **Catálogo de serviços:** lista dos serviços oferecidos, com descrições, responsáveis, níveis e custos; divide-se em **visão de negócio** (para clientes) e **visão técnica** (componentes que sustentam os serviços).
- **Gerenciamento de nível de serviço:** negociar, acordar (SLA), monitorar e relatar o cumprimento, e revisar com o cliente.

### 4.7 Gerenciamento de configuração e de ativos

- **Item de configuração (IC):** componente que precisa ser controlado (servidor, aplicação, documento, contrato).
- **Banco de dados de gerenciamento da configuração (CMDB):** repositório dos ICs, atributos e **relacionamentos**; apoia análise de impacto de mudanças e incidentes.
- **Gerenciamento de ativos de TI:** ciclo de vida (aquisição, uso, descarte), custo, licenças.

### 4.8 Disponibilidade, capacidade e desempenho, continuidade

| Disciplina | Objetivo | Medidas |
|---|---|---|
| **Disponibilidade** | Garantir que o serviço esteja acessível quando necessário | **Disponibilidade (%) = (tempo acordado − tempo de indisponibilidade) ÷ tempo acordado × 100**; **MTBF** (tempo médio entre falhas) e **MTTR** (tempo médio de reparo): disponibilidade ≈ MTBF ÷ (MTBF + MTTR) |
| **Capacidade e desempenho** | Prover recursos suficientes a custo adequado | Utilização, tempo de resposta, tendências, dimensionamento |
| **Continuidade do serviço de TI** | Recuperar serviços após desastre | **RTO** (tempo máximo de recuperação) e **RPO** (perda máxima de dados aceitável); plano de recuperação (relação com o Módulo 9, item 9.16) |
| **Segurança da informação** | Proteger confidencialidade, integridade e disponibilidade | Políticas e controles (Módulo 9) |

### 4.9 Gerenciamento de eventos e monitoramento; conhecimento; liberação e implantação

- **Evento:** ocorrência significativa na infraestrutura ou nos serviços; **monitoramento** gera alertas, que podem virar incidentes.
- **Gerenciamento do conhecimento:** capturar e reutilizar conhecimento (base de conhecimento, artigos, soluções).
- **Gerenciamento de liberação e implantação:** planejar e controlar a entrada de versões e componentes em produção (integração com **DevOps**, **CI/CD**).

### 4.10 Melhoria contínua

Ciclo **PDCA** e modelos de melhoria (por exemplo, o processo de melhoria em sete etapas do ITIL v3): definir o que medir, coletar e analisar dados, apresentar e usar a informação, implementar melhorias.

## 5. Técnicas e ferramentas

### 5.1 Técnicas

| Técnica | Uso |
|---|---|
| **Matriz de prioridade (impacto × urgência)** | Priorizar incidentes e requisições |
| **Escalonamento funcional e hierárquico** | Acionar especialistas ou gestores |
| **Análise de causa raiz** (5 porquês, Ishikawa, Pareto) | Problemas |
| **Análise de impacto** (CMDB) | Mudanças e incidentes |
| **Gerenciamento por indicadores (KPIs e metas de SLA)** | Controle de desempenho |
| ***Post-mortem* sem culpabilização** | Aprender com falhas graves |
| **Automação e orquestração** | Reduzir trabalho manual e erros |
| **Autoatendimento e *chatbots*** | Reduzir carga do *service desk* |
| **Gestão visual (Kanban)** | Fluxo de tickets (Módulo 2, arquivo `03`) |

### 5.2 Ferramentas (categorias e exemplos)

| Categoria | Função | Exemplos citados apenas como ilustração |
|---|---|---|
| **Suítes de ITSM** | Tickets, catálogo, SLAs, mudanças, CMDB, portal de autoatendimento | Plataformas comerciais e livres de *service desk* (por exemplo, GLPI, Jira Service Management, ServiceNow) |
| **Monitoramento e observabilidade** | Coletar métricas, eventos e alertas | Zabbix, Nagios, Prometheus, Grafana |
| **Descoberta e CMDB** | Identificar e relacionar ICs | Ferramentas de descoberta de rede e de ativos |
| **Automação e integração** | Orquestrar fluxos, CI/CD | Ferramentas de automação de infraestrutura |
| **Gestão do conhecimento** | Base de conhecimento | *Wikis* e bases integradas ao *service desk* |
| **Análise e relatórios (BI)** | Indicadores e painéis | Painéis de SLA e de tendências |

*(Nomes de produtos citados como exemplos; não há recomendação nem verificação de funcionalidades.)*

## 6. Indicadores e medição

**Indicador-chave de desempenho (KPI)** mede o progresso em relação a um **objetivo de negócio**; diferencia-se de **métrica** (qualquer medida) por estar ligado a **metas** e a **fatores críticos de sucesso**. KPIs devem ser **selecionados com base nas necessidades do negócio** e ajudar a **medir o sucesso do serviço**; **não** se limitam a hardware, à disponibilidade, nem a organizações de pequeno porte, e **são influenciados** por ferramentas de monitoramento na definição e no rastreamento.

| Área | Exemplos de KPIs |
|---|---|
| Incidentes | Tempo médio de resolução (MTTR), tempo de resposta, **taxa de resolução no primeiro contato**, incidentes reabertos, volume por prioridade |
| Problemas | Número de erros conhecidos, incidentes recorrentes |
| Mudanças | **Taxa de mudanças bem-sucedidas**, mudanças emergenciais, incidentes causados por mudanças |
| Níveis de serviço | **Cumprimento de SLA (%)**, disponibilidade |
| Satisfação | Pesquisas de satisfação (CSAT), índice de recomendação (NPS) |
| Eficiência | Custo por atendimento, automação, produtividade |

## 7. Comparações conceituais

| Conceito A | Conceito B | Diferença principal |
|---|---|---|
| Incidente | Problema | Interrupção a restaurar × causa a eliminar |
| Incidente | Requisição de serviço | Falha × pedido previsto |
| Solução de contorno | Solução definitiva | Restaura o serviço × elimina a causa (via mudança) |
| Mudança padrão | Normal × emergencial | Pré-aprovada × avaliada × urgente |
| SLA | OLA | Com o cliente × entre equipes internas |
| SLA | UC | Com o cliente × com fornecedor externo |
| ITIL v3 | ITIL 4 | Ciclo de vida e processos × sistema de valor, cadeia de valor e práticas |
| ITIL | ISO/IEC 20000-1 | Boas práticas (não certificável por si) × norma de requisitos (certificável) |
| Governança de TI | Gerenciamento de serviços | Direção e controle × entrega e operação de serviços |
| KPI | Métrica | Ligado a objetivo e meta × qualquer medida |
| RTO | RPO | Tempo de recuperação × perda de dados aceitável |

## 8. Aplicações e cenários

**Cenário (didático): falha do sistema de ordens de serviço.** O *service desk* registra vários chamados idênticos: **incidente** de impacto alto e urgência alta (P1). O N2 aplica **solução de contorno** (reiniciar o serviço) e restaura. Como o incidente se repete, abre-se um **problema**: a análise de causa raiz aponta um limite de memória; a **mudança** de configuração é avaliada pela autoridade de mudança e aplicada em janela; o **erro conhecido** é encerrado. O **KPI** de tempo de resolução e de recorrência é acompanhado. *Limitação:* sem CMDB atualizado, a análise de impacto é incompleta.

## 9. Atenção para a prova

*Inferência técnica e recomendação pedagógica; sem atribuir frequência à banca.*

- **Incidente** restaura o serviço; **problema** busca a causa; **mudança** controla alterações.
- Identificar o **objetivo** de cada disciplina e a **diferença entre versões** do ITIL (ciclo de vida do v3 × SVS do 4).
- **KPIs**: alinhados ao negócio; alternativas que os limitam a hardware, à disponibilidade ou a organizações pequenas são incorretas por restringirem indevidamente.
- Fórmula de **disponibilidade** e conceitos de **MTBF/MTTR**, **RTO/RPO**.
- *Evidência histórica (amostra de duas provas):* a Prova 6 de 2023 (Q66) perguntou sobre **KPIs no gerenciamento de serviços de TI** (alternativa de gabarito: KPIs selecionados com base nas necessidades de negócio, que ajudam a medir o sucesso do serviço). A Prova 15 de 2018 **não** trouxe questão específica; o programa de 2018 citava ITIL v3 e COBIT 5.1, ao passo que o de 2026 não indica referencial. Duas provas não permitem inferir frequência.

## 10. Síntese

- ITSM: capacidades para entregar e melhorar serviços que gerem valor.
- ITIL v3: 5 estágios; ITIL 4: SVS (princípios, governança, cadeia de valor, práticas, melhoria), 7 princípios, 4 dimensões, 34 práticas.
- Disciplinas: incidentes, problemas, mudanças, requisições, *service desk*, nível de serviço, catálogo, configuração/CMDB, disponibilidade, capacidade, continuidade, conhecimento, monitoramento.
- Acordos: SLA, OLA, UC.
- Técnicas: matriz de prioridade, escalonamento, causa raiz, automação.
- Medição: KPIs (MTTR, taxa de sucesso de mudanças, SLA, CSAT); disponibilidade; RTO/RPO.

## 11. Pontos para a futura produção de questões (registro)

Conceitos: serviço, valor, SLA, incidente, problema, mudança, CMDB, KPI. Distinções: incidente×problema×requisição; SLA×OLA×UC; v3×4; ITIL×ISO 20000. Interpretação: classificar uma situação; escolher a disciplina; interpretar um indicador.

## 12. Referências

- ITIL: itens da **versão 4** (cinco componentes do SVS, sete princípios orientadores, 34 práticas, **quatro dimensões**) **confirmados em fontes secundárias** em 2026-10-31; **não confrontados com as publicações oficiais**. As atividades da cadeia de valor, as práticas individuais e o ITIL v3 vêm do conhecimento do autor e **não foram verificados**.
- ISO/IEC 20000-1 e COBIT — citados de memória; **edições e conteúdo não verificados**.
- Edital Transpetro nº 04/2026.4, Anexo IV, item 4.5.
