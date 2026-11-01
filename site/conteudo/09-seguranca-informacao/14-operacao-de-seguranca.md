---
modulo: 09-seguranca-informacao
arquivo: 14-operacao-de-seguranca
itens_edital:
  - "9.2 Operação de segurança (Firewall, Proxy, IPS/IDS, DLP, CASB, SIEM, Antivírus, EDR, WAF, Gestão de vulnerabilidades, Monitoração, Backup)"
ids_matriz: ["E5-083"]
escopo: "A — conteúdo expresso no edital. Arquivo atribuído por reorganização (decisão D-06); a cobertura dos 12 elementos citados é verificada neste arquivo."
tipo_conteudo: "teoria"
status: "VALIDADO"
ultima_atualizacao: "2026-10-31"
---

# Operação de Segurança

**Módulo:** M09 — Segurança da informação
**Texto oficial (Anexo IV):** 9.2 "Operação de segurança (Firewall, Proxy, IPS/IDS, DLP, CASB, SIEM, Antivírus, EDR, WAF, Gestão de vulnerabilidades, Monitoração, Backup)".
**Escopo:** A. Os 12 elementos entre parênteses estão cobertos nas seções 1 a 12 deste arquivo (checagem na seção 14).
**Status:** `VALIDADO` (aprovado pelo usuário em 2026-10-31, com ressalvas: interpretação do item 9.1 e escolha das versões do NIST SP 800-61 e do MITRE ATT&CK a confirmar; fontes de memória listadas em `docs/qualidade/relatorio-producao-modulo-09.md`). **Verificados** (Wikipedia/FIRST, 2026-10-31): firewall (filtro de pacotes com ACL, *stateful*, camada de aplicação, NGFW); IDS × IPS; DLP; SIEM; EDR; WAF; CVSS (versão 4.0, nov./2023); backup (3-2-1; completo, incremental, diferencial); CASB. **Revisão:** as faixas do CVSS 4.0 foram **confirmadas** na especificação (nenhuma 0,0; baixa 0,1–3,9; média 4,0–6,9; alta 7,0–8,9; crítica 9,0–10,0). **Não confirmados:** proxy (definições de memória), XDR, CVE, SOC/SOAR, detalhes de produtos.

**Objetivos de aprendizagem.** (1) Descrever função, posição e limites de cada controle; (2) distinguir tecnologias parecidas (IDS×IPS, WAF×firewall, EDR×antivírus); (3) aplicar a gestão de vulnerabilidades; (4) planejar monitoração e backup; (5) integrar as ferramentas na operação (SOC).

---

## 1. Firewall

**Firewall** controla o tráfego entre redes (ou hosts) com base em **regras**. Gerações (verificado em fonte secundária):

| Tipo | Funcionamento |
|---|---|
| **Filtro de pacotes** (sem estado) | Decide por pacote com **listas de controle de acesso (ACL)**: IP de origem/destino, protocolo, **portas** |
| **Com estado (*stateful*)** | **Rastreia conexões**: permite o retorno de tráfego legítimo e bloqueia pacotes fora de contexto |
| **Camada de aplicação / *proxy firewall*** | Inspeciona o conteúdo e protocolos de aplicação |
| **NGFW** (*Next-Generation Firewall*) | Inspeção ampliada na camada de aplicação, identificação de aplicações e usuários, IPS integrado, inspeção TLS (de memória) |

Boas práticas: **negar por padrão** (*default deny*), menor privilégio nas regras, revisão periódica, segmentação (DMZ, zonas), registro. Pode ser **de rede** (perímetro), **de host** (*personal firewall*) ou em **nuvem** (grupos de segurança). **Limites:** não detecta ataques dentro de tráfego permitido (por exemplo, SQL Injection na porta 443 liberada), não protege contra ameaças internas por si só.

## 2. Proxy

**Proxy** é um **intermediário** entre cliente e servidor (conceito de memória; não confirmado em página lida):

| Tipo | Descrição |
|---|---|
| **Proxy direto (*forward*)** | Atende **clientes internos** acessando a internet: **filtragem de conteúdo e de URL**, controle de acesso, *cache*, registro, anonimização da origem |
| **Proxy reverso** | Fica à frente de **servidores**: balanceamento de carga, terminação TLS, *cache*, **proteção do servidor de origem**, pode hospedar WAF (verificado em fonte secundária: WAF pode ser implantado como proxy reverso) |
| **Transparente × explícito** | Sem configuração no cliente × configurado |
| **Inspeção TLS (*SSL inspection*)** | Decifra, inspeciona e recifra o tráfego; exige tratamento de privacidade |

## 3. IDS e IPS

| Sistema | Função (verificada) |
|---|---|
| **IDS** (*Intrusion Detection System*) | **Monitora e alerta** sobre atividade suspeita; **passivo** (fora da linha do tráfego) |
| **IPS** (*Intrusion Prevention System*) | Fica **em linha** e pode **bloquear ou prevenir** intrusões |

Classificação por local: **NIDS/NIPS** (rede) e **HIDS/HIPS** (*host*). Métodos de detecção (de memória): **por assinaturas**, **por anomalias/comportamento** e **por política**. Problemas: **falsos positivos** (alerta indevido), **falsos negativos** (ataque não detectado), ajuste (*tuning*), tráfego criptografado, desempenho (um IPS em linha pode ser ponto de falha).

## 4. DLP — Prevenção de Perda de Dados

**DLP** (*Data Loss Prevention*) impede a **transmissão ou divulgação não autorizada de dados sensíveis**, **em trânsito, em repouso ou em uso** (verificado). Aplicação típica: identificar dados (por padrões, palavras-chave, impressão digital de documentos, **classificação** — `10`), monitorar e **bloquear/alertar/criptografar** em e-mail, web, USB, impressão, nuvem e *endpoints*. Relação com a LGPD (dados pessoais). Limites: falsos positivos, tráfego criptografado, usuários privilegiados, custos de ajuste.

## 5. CASB

**CASB** (*Cloud Access Security Broker*) é *software* local ou em nuvem entre **usuários e aplicações em nuvem**, que **monitora atividades e aplica políticas de segurança**, alerta administradores, impõe conformidade e bloqueia *malware* (verificado; termo introduzido pelo Gartner em 2012). Funções usuais (de memória): **visibilidade** (inclusive *shadow IT*), **conformidade**, **proteção de dados** (DLP em nuvem), **proteção contra ameaças**. Modos: *proxy* (direto/reverso) e **API**. Veja `13`.

## 6. SIEM

**SIEM** (*Security Information and Event Management*) combina **gestão de informações** (SIM: coleta e armazenamento de registros) e **gestão de eventos** (SEM: análise em tempo real) de segurança — **agregação, correlação, alertas e relatórios** (verificado). Funções: coleta de *logs* de várias fontes; **normalização**; **correlação** por regras/analítica; **alertas**; painéis; retenção para auditoria e conformidade; investigação forense; integração com inteligência de ameaças (`07`) e ATT&CK (`08`).

**Relacionados (de memória):** **SOC** (*Security Operations Center*: equipe e processos que operam a monitoração), **SOAR** (orquestração e automação de resposta), **UEBA** (análise de comportamento), **XDR** (detecção estendida a *endpoints*, rede, nuvem e e-mail; **não confirmado em página lida**).

## 7. Antivírus

Detecta, bloqueia e remove *malware* (`03`). Métodos: **assinaturas** (padrões conhecidos), **heurística** (características suspeitas), **comportamento** (ações em execução), ***sandboxing***, **reputação** e aprendizado de máquina. Limites: *malware* novo ou *fileless* e ofuscado pode escapar; exige **atualização**; falsos positivos. O antivírus tradicional é **preventivo** e baseado em arquivo; é **componente** de uma proteção em camadas.

## 8. EDR

**EDR** (*Endpoint Detection and Response*) **monitora continuamente os endpoints** (estações, servidores) e registra **telemetria** (processos, arquivos, rede, registro) para **detecção, investigação e resposta** — segundo a fonte consultada, é **principalmente uma ferramenta de alerta**, não uma camada de proteção por si só (verificado). Capacidades usuais: detecção comportamental, **isolamento do host**, encerramento de processos, *rollback*, caça a ameaças (`07`). **EDR × antivírus:** o EDR acrescenta **visibilidade contínua e resposta**; o antivírus tradicional foca a **prevenção** baseada em assinaturas. Muitos produtos modernos combinam as duas funções (EPP + EDR).

## 9. WAF

**WAF** (*Web Application Firewall*) **filtra, monitora e bloqueia tráfego HTTP/HTTPS** de e para aplicações web, protegendo contra ataques da camada de aplicação, como **SQL Injection, XSS** e inclusão de arquivos (verificado; ver `03`). Implantação: **reverso**, em borda/CDN, em nuvem ou no *host*. Modelos: lista de bloqueio (assinaturas/OWASP), lista de permissão (positivo), comportamental. **WAF × firewall de rede:** o WAF entende **HTTP** (camada 7); o firewall de rede decide por IP e porta. **Limites:** não substitui o **desenvolvimento seguro** (`04`); pode ter falsos positivos; "patching virtual" é paliativo.

## 10. Gestão de vulnerabilidades

Processo contínuo de **identificar, classificar, priorizar, tratar e verificar** vulnerabilidades:

1. **Inventário** de ativos.
2. **Descoberta e varredura** (scanners autenticados ou não, em rede, *hosts*, aplicações, contêineres, nuvem).
3. **Análise e classificação**: **CVE** (identificador público de vulnerabilidade; de memória) e **CVSS** (*Common Vulnerability Scoring System*; **versão 4.0 vigente**, lançada em novembro de 2023, segundo o FIRST — verificado; faixas qualitativas: nenhuma 0,0; baixa 0,1–3,9; média 4,0–6,9; alta 7,0–8,9; crítica 9,0–10,0, de uso opcional — **tabela verificada**).
4. **Priorização** por **risco**: criticidade do ativo, exposição, **exploração ativa** (inteligência — `07`), existência de exploit, impacto no negócio, controles compensatórios (a pontuação CVSS isolada não basta).
5. **Tratamento**: **correção (*patch*)**, mitigação (configuração, WAF/IPS), aceitação formal ou transferência.
6. **Verificação** (nova varredura) e **relato**; métricas (tempo de correção, ativos vulneráveis).

**Gestão de patches** é parte do processo: teste, homologação, janelas de mudança, reversão (Módulo 5 e ITIL, Módulo 4). **Varredura de vulnerabilidades ≠ teste de penetração** (`08`). **Gestão de configuração** e *hardening* (`02`).

## 11. Monitoração

Observação contínua de **registros, métricas e eventos** para detectar desvios, falhas e ataques: *logs* (sistemas, aplicações, rede, autenticação, nuvem), **monitoramento de rede** (fluxos, tráfego), de **disponibilidade e desempenho**, de **integridade de arquivos** (FIM), de **acesso e contas privilegiadas**, **monitoramento físico** (`02`). Requisitos: **sincronização de relógios**, **centralização e proteção dos logs** (integridade), **retenção** conforme requisitos legais, **alertas** com limiares ajustados, processo de triagem (SOC), integração com resposta (`06`). Em conformidade com a ISO 27002 (`11`) e LGPD (Módulo 4).

## 12. Backup

**Backup** é a cópia de dados para **recuperação** após perda, corrupção, erro ou ataque (essencial contra *ransomware* — `03`). Conceitos (verificados em fonte secundária):

| Tipo | Descrição |
|---|---|
| **Completo (*full*)** | Copia **todos** os dados selecionados |
| **Incremental** | Copia o que **mudou desde o último backup** (de qualquer tipo) — rápido, restauração em múltiplas etapas |
| **Diferencial** | Copia o que **mudou desde o último completo** — restauração mais simples (completo + último diferencial) |

**Regra 3-2-1** (verificada): **3 cópias** dos dados, em **2 tipos de mídia** diferentes, com **1 cópia fora do local**. Extensões populares: 3-2-1-1-0 (uma cópia **imutável/offline** e zero erros nos testes; de memória). Outros: **RTO e RPO** definem a frequência e a técnica (`09`), **criptografia** dos backups (`12`), **testes de restauração periódicos** (backup não testado não é backup), **retenção**, **imutabilidade** (*WORM*) contra ransomware, **segregação** de credenciais, backup de nuvem e de SaaS, replicação × backup (a réplica copia também a corrupção).

## 13. Integração: como as peças se encaixam

| Pergunta | Controle principal |
|---|---|
| Quem pode falar com quem na rede? | Firewall, segmentação |
| Como controlar a navegação dos usuários? | Proxy |
| Há tráfego malicioso na rede? | IDS/IPS |
| Dados sensíveis estão saindo? | DLP, CASB |
| Aplicações web estão sob ataque? | WAF |
| Os endpoints foram comprometidos? | Antivírus/EDR |
| Onde correlacionar tudo? | SIEM/SOC |
| Quais falhas existem? | Gestão de vulnerabilidades |
| O que fazer se tudo falhar? | Backup, continuidade, resposta |

Defesa em profundidade (`01`): nenhum controle isolado é suficiente.

## 14. Checagem de cobertura do item 9.2

Firewall (seção 1); Proxy (2); IPS/IDS (3); DLP (4); CASB (5); SIEM (6); Antivírus (7); EDR (8); WAF (9); Gestão de vulnerabilidades (10); Monitoração (11); Backup (12). Os 12 elementos literais do edital estão cobertos.

## 15. Comparações conceituais

| A | B | Diferença |
|---|---|---|
| IDS | IPS | Detecta e alerta (passivo) × também bloqueia (em linha) |
| Firewall | WAF | IP/porta (camadas 3/4) × tráfego HTTP (camada 7) |
| Antivírus | EDR | Prevenção por assinatura/heurística × telemetria contínua e resposta |
| Proxy direto | Proxy reverso | Clientes → internet × internet → servidores |
| SIEM | SOC | Plataforma × equipe/processo |
| DLP | CASB | Previne perda de dados em geral × controla uso de aplicações em nuvem |
| Backup completo | Incremental | Tudo × alterações desde o último backup |
| Incremental | Diferencial | Desde o último backup × desde o último completo |
| Varredura | Pentest | Identifica falhas × explora e valida impacto |
| Backup | Réplica | Cópia de recuperação × cópia contínua que reproduz erros |

## 16. Atenção para a prova

*Inferência técnica e recomendação pedagógica; sem atribuir frequência à banca.*

- Identificar o controle pela **descrição da função** (fila de eventos correlacionados = SIEM; lista de regras de portas e IPs = firewall; bloqueio em linha = IPS).
- Diferenciar **incremental × diferencial** e conhecer a **regra 3-2-1**.
- *Evidência histórica (amostra de duas provas):* Prova 6 de 2023 — **Q43** (SIEM; gabarito D). Prova 15 de 2018 — **Q47** (firewall e listas de controle de acesso; gabarito A). Gabaritos de terceiros, não validados. Duas provas não permitem inferir frequência.

## 17. Síntese

Firewall (ACL, *stateful*, NGFW); proxy; IDS (detecta) × IPS (bloqueia); DLP; CASB; SIEM (correlação); antivírus; EDR (telemetria e resposta); WAF (HTTP); gestão de vulnerabilidades (CVE, CVSS 4.0, priorização por risco); monitoração; backup (completo, incremental, diferencial; 3-2-1; testes de restauração).

## 18. Pontos para a futura produção de questões (registro)

Associação função–controle; diferenças IDS/IPS, WAF/firewall, EDR/antivírus; tipos de backup; regra 3-2-1; priorização de vulnerabilidades; papel do SIEM.

## 19. Referências

- Wikipedia: "Firewall (computing)", "Intrusion detection system", "Data loss prevention software", "Cloud access security broker", "Security information and event management", "Endpoint detection and response", "Web application firewall" e "Backup" — **verificadas em 2026-10-31** (algumas por resumo automático). FIRST, CVSS — **verificada** (versão 4.0, nov./2023).
- FIRST, especificação do CVSS 4.0 (tabela de severidade) — **verificada**. Proxy, XDR, SOC/SOAR, CVE, 3-2-1-1-0 — **de memória, não confirmados**.
- Edital Transpetro nº 04/2026.4, Anexo IV, item 9.2. Provas: Transpetro 2023, Prova 6, Q43; Transpetro 2018, Prova 15, Q47 (gabaritos de terceiros, não validados).
