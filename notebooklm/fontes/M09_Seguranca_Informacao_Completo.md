# Módulo M09 — Segurança da Informação

## Identificação
- Concurso: Processo Seletivo Público TRANSPETRO 2026.4 (Edital nº 04/2026)
- Ênfase: 5 — Análise de Sistemas: Processos de Negócios
- Banca: Fundação Cesgranrio
- Módulo: M09 — Segurança da Informação
- Gerado em: 2026-11-07, por `tools/build_notebooklm.py`, a partir de `conteudo/09-seguranca-informacao/` (fonte de verdade; não editar este arquivo)
- Situação do conteúdo nos arquivos de origem: VALIDADO (com ressalvas nos relatórios de produção em `docs/qualidade/`)

## Como usar este documento
É material de estudo do projeto, **não** é texto oficial do edital nem da banca. O escopo oficial é o Anexo IV do edital. Trechos marcados como complemento, aprofundamento ou estratégia **não** são exigência literal do edital. Referências indicadas como "não verificadas" ou "de memória" devem ser conferidas na fonte primária. Não afirme incidência de tema em prova sem evidência documental.

## Conteúdo

---

## Fundamentos de Segurança da Informação

**Módulo:** M09 — Segurança da informação
**Classificação de escopo:** **B — fundamentação complementar** (C5-003). O título do item 9 do Anexo IV ("Segurança da Informação:") não tem texto próprio além dos subitens 9.1 a 9.21; este arquivo apresenta o vocabulário comum e **não** corresponde a subitem literal.
**Status:** `VALIDADO` (aprovado pelo usuário em 2026-10-31, com ressalvas: interpretação do item 9.1 e escolha das versões do NIST SP 800-61 e do MITRE ATT&CK a confirmar; fontes de memória listadas em `docs/qualidade/relatorio-producao-modulo-09.md`). A tríade CIA e a ISO/IEC 27001 foram **confirmadas** em fonte secundária; demais definições são de memória.

**Objetivos de aprendizagem.** (1) Definir segurança da informação e suas propriedades; (2) distinguir ameaça, vulnerabilidade, risco, impacto e controle; (3) classificar controles; (4) aplicar princípios de projeto seguro; (5) situar os 21 subitens em um mapa.

---

### 1. Conceitos

**Segurança da informação** é a proteção da informação contra acessos, usos, divulgações, alterações ou destruições não autorizados, preservando suas propriedades ao longo do ciclo de vida (criação, uso, armazenamento, transmissão, descarte), em qualquer meio.

#### 1.1 Propriedades

| Propriedade | Significado | Violação (exemplo) |
|---|---|---|
| **Confidencialidade** | Acesso apenas a quem está autorizado | Vazamento de dados |
| **Integridade** | Informação exata, completa e não alterada indevidamente | Alteração de um valor em banco |
| **Disponibilidade** | Acesso quando necessário | Ataque de negação de serviço |
| **Autenticidade** | Origem e identidade comprovadas | Falsificação de remetente |
| **Não repúdio (irretratabilidade)** | Autor não pode negar a autoria | Assinatura digital |
| **Legalidade, privacidade, responsabilização (*accountability*)** | Conformidade e rastreabilidade | Registro de auditoria |

A tríade **CID/CIA** (confidencialidade, integridade, disponibilidade) foi confirmada em fonte secundária (ISO/IEC 27001, Wikipedia); o Decreto 10.222/2020 citava também autenticidade, mas **foi revogado** pelo Decreto 12.573/2025, conforme o Planalto.

#### 1.2 Termos

| Termo | Definição |
|---|---|
| **Ativo** | Qualquer coisa de valor para a organização (informação, sistemas, pessoas, instalações) |
| **Ameaça** | Causa potencial de um incidente indesejado |
| **Vulnerabilidade** | Fragilidade explorável por ameaça |
| **Risco** | Efeito da incerteza sobre os objetivos; combinação de probabilidade e impacto |
| **Impacto** | Consequência de um evento |
| **Evento × incidente** | Ocorrência observável × evento que compromete a segurança |
| **Controle (contramedida)** | Medida que trata o risco |
| **Ataque** | Tentativa deliberada de explorar vulnerabilidade |
| **Exploit** | Código ou técnica que explora uma vulnerabilidade |
| **Superfície de ataque** | Conjunto de pontos de entrada possíveis |

Relação: ameaças exploram vulnerabilidades de ativos, gerando riscos que são tratados por controles. Gestão de riscos: arquivo `09`.

#### 1.3 Classificação dos controles

| Critério | Tipos |
|---|---|
| **Natureza** | **Administrativos** (políticas, processos), **técnicos/lógicos** (criptografia, firewall), **físicos** (cercas, catracas) |
| **Função** | **Preventivos**, **detectivos**, **corretivos**, **dissuasivos**, **compensatórios**, **de recuperação** |

### 2. Princípios de projeto seguro (de memória)

**Defesa em profundidade** (camadas independentes); **menor privilégio**; **segregação de funções**; **necessidade de conhecer**; **falha segura** (*fail-safe*); **segurança por projeto e por padrão** (*security by design/by default*); **mediação completa**; **economia de mecanismo**; **projeto aberto** (segurança não depende do segredo do projeto); **confiança zero** (*zero trust*: nunca confiar, sempre verificar); **separação de ambientes**.

### 3. Pilares: pessoas, processos e tecnologia

Segurança não é só tecnologia: **pessoas** (conscientização; engenharia social), **processos** (políticas, gestão de mudanças) e **tecnologia** (controles técnicos). Normas: **ISO/IEC 27001** (requisitos de um SGSI — Sistema de Gestão de Segurança da Informação; confirmada: edições 2005, 2013 e 2022) e **ISO/IEC 27002** (controles; arquivo `11`).

### 4. Mapa do item 9

| Subitem | Tema | Arquivo |
|---|---|---|
| 9.1 | Segurança física e lógica | `02` |
| 9.2 | Operação de segurança (firewall, proxy, IDS/IPS, DLP, CASB, SIEM, antivírus, EDR, WAF, vulnerabilidades, monitoração, backup) | `14` |
| 9.3, 9.4 | *Malware*; ataques | `03` |
| 9.5 | Desenvolvimento seguro; SAST/DAST/IAST | `04` |
| 9.6 a 9.10 | VPN, MDM, SSO, MFA, IAM/RBAC/ABAC | `05` |
| 9.11 | Resposta a incidentes (NIST SP 800-61) | `06` |
| 9.12 | *Threat intel*, *threat hunting* | `07` |
| 9.13 a 9.15 | Testes de penetração, STRIDE, MITRE ATT&CK | `08` |
| 9.16 | Riscos (ISO 31000), continuidade (ISO 22301), Sarbanes-Oxley | `09` |
| 9.17, 9.18 | Políticas; classificação | `10` |
| 9.19 | ISO 27002; criptografia; certificação e assinatura digital | `11`, `12` |
| 9.20, 9.21 | Nuvem; IoT | `13` |

### 5. Comparações conceituais

| A | B | Diferença |
|---|---|---|
| Ameaça | Vulnerabilidade | Causa potencial × fragilidade |
| Risco | Incidente | Possibilidade × ocorrência |
| Evento | Incidente | Observável × compromete a segurança |
| Controle preventivo | Detectivo | Evita × identifica |
| Autenticidade | Integridade | Origem comprovada × conteúdo inalterado |
| Segurança da informação | Segurança cibernética | Todos os meios × meio digital/ciberespaço |

### 6. Atenção para a prova

*Inferência técnica e recomendação pedagógica; sem atribuir frequência à banca.*

- Identificar **qual propriedade** é violada em um cenário; distinguir ameaça, vulnerabilidade e risco.
- Itens específicos: ver os demais arquivos do módulo; este arquivo (complemento B) não corresponde a subitem literal.

### 7. Síntese

CID + autenticidade e não repúdio; ativo, ameaça, vulnerabilidade, risco, controle; controles administrativos, técnicos e físicos; preventivos, detectivos e corretivos; defesa em profundidade, menor privilégio, *zero trust*; SGSI (ISO 27001).

### 8. Referências

- Wikipedia, "ISO/IEC 27001" — **verificada em 2026-10-31** (finalidade; edições 2005, 2013 e 2022). Planalto, Decreto 10.222/2020 — **verificado** (revogado pelo Decreto 12.573/2025).
- Definições de ativo, ameaça, vulnerabilidade, risco e princípios de projeto — **de memória, não verificadas**.
- Edital Transpetro nº 04/2026.4, Anexo IV, item 9.


---

## Segurança Física e Lógica

**Módulo:** M09 — Segurança da informação
**Texto oficial (Anexo IV):** 9.1 "Segurança física e lógica".
**Escopo:** A. O edital não detalha o item; interpretação adotada (**a confirmar**): controles físicos (áreas, equipamentos, ambiente) e lógicos (acesso, rede, sistemas, dados). Ferramentas como firewall, IDS e antivírus são detalhadas em `14`; identidade e acesso em `05`.
**Status:** `VALIDADO` (aprovado pelo usuário em 2026-10-31, com ressalvas: interpretação do item 9.1 e escolha das versões do NIST SP 800-61 e do MITRE ATT&CK a confirmar; fontes de memória listadas em `docs/qualidade/relatorio-producao-modulo-09.md`). Conteúdo de memória; **não verificado online nesta etapa**.

**Objetivos de aprendizagem.** (1) Distinguir segurança física e lógica; (2) conhecer controles físicos e ambientais; (3) conhecer controles lógicos por camada; (4) aplicar defesa em profundidade; (5) relacionar as duas dimensões.

---

### 1. Visão geral

| Dimensão | Protege contra | Exemplos de controles |
|---|---|---|
| **Física** | Acesso físico indevido, furto, dano, desastres ambientais | Perímetro, controle de acesso, CFTV, ambiente de datacenter |
| **Lógica** | Acesso e uso não autorizados por meio de sistemas e redes | Autenticação, autorização, criptografia, firewall, antivírus |

As duas se complementam: de nada vale criptografar um disco se o servidor pode ser levado; uma sala trancada não protege dados expostos na rede. Controles **administrativos** (políticas, treinamento — `10`) sustentam ambos.

### 2. Segurança física

#### 2.1 Controles

| Controle | Descrição |
|---|---|
| **Perímetro e zonas** | Cercas, muros, portarias, áreas de acesso restrito; **defesa em camadas** físicas |
| **Controle de acesso físico** | Crachás, biometria, catracas, **mantraps** (eclusas), registro de visitantes, escoltas |
| **Vigilância** | CFTV, alarmes, vigilantes, iluminação |
| **Proteção de equipamentos** | Racks trancados, cabos protegidos, travas, descarte seguro de mídias, política de mesa limpa e tela limpa |
| **Proteção ambiental** | Energia (**no-break/UPS**, gerador, redundância), refrigeração, detecção e supressão de incêndio, controle de umidade, contenção de água |
| **Datacenter** | Classificação por níveis de disponibilidade (referências de mercado: Tier I a IV do Uptime Institute; de memória), redundâncias N+1 |
| **Mídias** | Controle, transporte e **sanitização** (sobrescrita, desmagnetização, destruição física) |
| **Trabalho remoto e móvel** | Proteção de dispositivos fora da organização (`05` — MDM) |

#### 2.2 Ameaças físicas

Acesso não autorizado, roubo, vandalismo, incêndio, inundação, falta de energia, terremotos, sabotagem por *insider*, *tailgating* (entrar logo atrás de alguém autorizado), engenharia social presencial.

### 3. Segurança lógica

#### 3.1 Controles por camada (visão geral)

| Camada | Controles |
|---|---|
| **Identidade e acesso** | Autenticação, MFA, autorização, menor privilégio, segregação de funções, trilhas de auditoria (`05`) |
| **Rede** | Segmentação (VLAN, DMZ), firewalls, IDS/IPS, VPN, controle de acesso à rede (NAC), proteção de Wi-Fi (`05`, `14`) |
| **Sistemas e aplicações** | Gestão de patches, *hardening* (configuração segura), desenvolvimento seguro (`04`), WAF |
| **Dados** | Criptografia em repouso e em trânsito (`12`), DLP, classificação (`10`), backup |
| **Endpoints** | Antivírus/EDR, criptografia de disco, MDM |
| **Monitoramento** | Registros (*logs*), SIEM, alertas (`14`) |
| **Recuperação** | Backup, plano de continuidade (`09`) |

#### 3.2 Controle de acesso lógico

Modelos (visão geral; detalhes em `05`): **DAC** (discricionário: o dono decide), **MAC** (obrigatório: política central com rótulos), **RBAC** (por papéis), **ABAC** (por atributos). Princípios: **menor privilégio**, **necessidade de conhecer**, **segregação de funções**. Etapas do acesso: identificação, **autenticação**, **autorização**, **auditoria** (accounting).

#### 3.3 Hardening e gestão de configuração

Remover serviços e contas desnecessários, alterar credenciais padrão, aplicar *baselines* (por exemplo, referências do CIS Benchmarks; de memória), manter inventário e gestão de mudanças, atualizar sistemas (gestão de patches e de vulnerabilidades — `14`).

#### 3.4 Mapeamento à ISO/IEC 27002:2022 (item 9.1 ampliado — decisão de 2026-11-04)

O item 9.1 tem redação genérica. A interpretação adotada: controles **físicos, ambientais e lógicos**, mais o **mapeamento aos temas da ISO/IEC 27002:2022**, que organiza 93 controles em quatro temas (organizacionais, de pessoas, **físicos** e **tecnológicos**). *Numeração de memória; conferir na norma (não consultada).*

| Controles deste arquivo | Tema da ISO 27002:2022 | Exemplos de controles do tema (de memória) |
|---|---|---|
| Perímetro, acesso físico, vigilância, áreas seguras, mesa e tela limpas, proteção de equipamentos, mídias, utilidades, cabeamento, manutenção, descarte | **Físicos** (7.1 a 7.14) | Perímetros de segurança física; entrada física; monitoramento de segurança física; proteção contra ameaças físicas e ambientais; trabalho em áreas seguras; mesa limpa e tela limpa; localização e proteção de equipamentos; utilidades de suporte; segurança do cabeamento; manutenção; descarte ou reutilização segura |
| Controle de acesso lógico, autenticação, privilégios, antimalware, backup, registros, criptografia, hardening | **Tecnológicos** (8.1 a 8.34) | Direitos de acesso privilegiado; autenticação segura; proteção contra *malware*; cópias de segurança; registro de eventos (*logging*); uso de criptografia; gestão de configuração |
| Políticas, papéis, classificação, inventário | Organizacionais (5.x) | Ver `11-iso-27002.md` e `10-politicas-e-classificacao.md` |

Uso na prova: a ISO 27002:2022 **separa** controles físicos (tema 7) e tecnológicos (tema 8); a revisão de 2022 reduziu de 114 controles em 14 domínios (2013) para **93 em 4 temas**.

### 4. Defesa em profundidade

Camadas **independentes** (física, perímetro, rede, host, aplicação, dados, pessoas): a falha de uma não compromete as demais. Exemplo: data center com acesso físico restrito (física), segmentação de rede (rede), servidores atualizados e com EDR (host), dados criptografados (dados), MFA e treinamento (pessoas).

### 5. Comparações conceituais

| A | B | Diferença |
|---|---|---|
| Segurança física | Lógica | Proteção do ambiente e dos equipamentos × proteção de acesso e dados por software e configuração |
| Preventivo | Detectivo | Impede (trava) × identifica (CFTV, logs) |
| Autenticação | Autorização | Quem é × o que pode fazer |
| DAC | MAC | Dono decide × política central obrigatória |
| UPS | Gerador | Ponte imediata (curta) × fornecimento prolongado |
| Backup | Redundância | Cópia para recuperação × disponibilidade contínua |

### 6. Atenção para a prova

*Inferência técnica e recomendação pedagógica; sem atribuir frequência à banca.*

- Classificar um controle como físico, lógico ou administrativo.
- Reconhecer o princípio violado (menor privilégio, defesa em profundidade).
- O item 9.1 **não teve questão** identificada como primária nas duas provas catalogadas (2018 e 2023); duas provas não permitem inferir frequência.

### 7. Síntese

Segurança física (perímetro, acesso, ambiente, mídias) e lógica (identidade, rede, sistemas, dados, endpoints, monitoramento); defesa em profundidade; menor privilégio; controles complementam-se.

### 8. Pontos para a futura produção de questões (registro)

Classificação de controles; exemplos de ameaças físicas; princípios; escolha de controle para um cenário.

### 9. Referências

- ISO/IEC 27002 (controles físicos e tecnológicos), CIS Benchmarks, Uptime Institute — **de memória, não verificados**.
- Edital Transpetro nº 04/2026.4, Anexo IV, item 9.1.


---

## Softwares Maliciosos e Ataques

**Módulo:** M09 — Segurança da informação
**Textos oficiais (Anexo IV):** 9.3 "Softwares maliciosos (ransomware, vírus, worms, spywares, rootkit etc.)"; 9.4 "Ataques (DDoS, SQL Injection, XSS, CSRF, Path Traversal etc.)".
**Escopo:** A. Prevenção em aplicações: `04`; detecção e resposta: `14` e `06`.
**Status:** `VALIDADO` (aprovado pelo usuário em 2026-10-31, com ressalvas: interpretação do item 9.1 e escolha das versões do NIST SP 800-61 e do MITRE ATT&CK a confirmar; fontes de memória listadas em `docs/qualidade/relatorio-producao-modulo-09.md`). **Verificados** (OWASP, 2026-10-31): SQL Injection, XSS, CSRF e Path Traversal (definições e prevenções); OWASP Top 10 2025. **De memória:** classificação de *malware*, DDoS e demais ataques.

**Objetivos de aprendizagem.** (1) Distinguir tipos de *malware* por mecanismo e objetivo; (2) reconhecer ataques de rede, web e engenharia social; (3) conhecer as principais defesas; (4) relacionar ataques a vulnerabilidades (OWASP); (5) identificar o tipo a partir da descrição.

---

### 1. Softwares maliciosos (*malware*) — item 9.3

#### 1.1 Classificação

| Tipo | Característica | Observação |
|---|---|---|
| **Vírus** | Anexa-se a arquivos/programas e **depende de execução** do hospedeiro para se propagar | Replica-se infectando outros arquivos |
| **Worm (verme)** | **Propaga-se sozinho** pela rede, **sem** hospedeiro nem ação do usuário | Explora vulnerabilidades; consome recursos |
| **Cavalo de Troia (*trojan*)** | Aparenta função legítima, mas executa ação maliciosa; **não se replica** sozinho | Abre portas (*backdoor*), instala outros *malwares* |
| **Ransomware** | **Sequestra** dados (criptografa ou bloqueia) e exige resgate | Variante de **dupla extorsão**: também ameaça vazar dados |
| **Spyware** | Coleta informações do usuário sem consentimento | *Keylogger* (teclas), *screenlogger* (telas), *adware* (anúncios) |
| **Rootkit** | Esconde a presença do invasor e de outros códigos, mantendo acesso privilegiado | Atua em nível de usuário, núcleo (*kernel*) ou *firmware* |
| **Backdoor** | Acesso remoto oculto ao sistema | Instalado por invasor ou *trojan* |
| **Bot / Botnet** | Máquina infectada controlada remotamente; rede de bots (*botnet*) comandada por *C2* | Usada para DDoS, spam, mineração |
| **Cryptojacking** | Mineração não autorizada de criptomoedas | Consome processamento |
| **Fileless (sem arquivo)** | Executa em memória, usando ferramentas legítimas do sistema | Dificulta detecção por assinatura |
| **Scareware, wiper, dropper/loader** | Alarme falso; destruição de dados; instalador de outras cargas | — |

*Classificações em português seguem a literatura usual (por exemplo, cartilhas de segurança do CERT.br; de memória). Rótulos podem variar.*

#### 1.2 Vetores de infecção

*Phishing* e anexos; *downloads* e *sites* comprometidos; mídias removíveis; vulnerabilidades não corrigidas; credenciais fracas ou vazadas (RDP exposto); cadeia de suprimentos (*supply chain*); *malvertising*.

#### 1.3 Defesas

Antivírus/EDR (assinaturas, heurística, comportamento); gestão de *patches*; filtros de e-mail e web; menor privilégio; segmentação de rede; **backup offline e testado** (essencial contra ransomware); conscientização; listas de aplicativos permitidos; macros desabilitadas por padrão; resposta a incidentes (`06`).

### 2. Ataques — item 9.4

#### 2.1 Ataques a aplicações web (confirmados em OWASP)

| Ataque | Descrição | Prevenção principal |
|---|---|---|
| **SQL Injection** | Inserção de comandos SQL por meio de entradas, alterando a consulta | **Consultas parametrizadas** (*prepared statements*); validação por lista permitida; menor privilégio no banco. Escape manual e *stored procedures* sozinhos **não bastam** |
| **XSS** (*Cross-Site Scripting*) | Script malicioso injetado em página e executado no navegador da vítima | Validação de entrada e **codificação/escape da saída**. Tipos: **refletido** (a entrada volta na resposta), **armazenado** (persistido no servidor), **baseado em DOM** |
| **CSRF** (*Cross-Site Request Forgery*) | Força usuário **autenticado** a executar ação indesejada em operação que altera estado | **Token anti-CSRF** (valor imprevisível por requisição/sessão); *cookies* SameSite (de memória). Cookies secretos, aceitar só POST ou só HTTPS **não** impedem |
| **Path Traversal** | Acesso a arquivos fora do diretório permitido com sequências como `../` | Aceitar apenas entradas **conhecidas e válidas** (lista permitida), normalizar caminhos, isolar o diretório |
| **Inclusão de arquivo (LFI/RFI)**, **injeção de comandos**, **XXE**, **SSRF**, **desserialização insegura** (de memória) | Variantes de injeção e abuso de funcionalidades | Validação, bibliotecas seguras, bloqueio de saídas |

**XSS × CSRF:** XSS explora a **confiança do usuário no site** (executa script na vítima); CSRF explora a **confiança do site no navegador do usuário** (envia requisição legítima forjada).

**OWASP Top 10 2025** (lista lida em top10.owasp.org): A01 Broken Access Control; A02 Security Misconfiguration; A03 Software Supply Chain Failures; A04 Cryptographic Failures; A05 Injection; A06 Insecure Design; A07 Authentication Failures; A08 Software or Data Integrity Failures; A09 Security Logging and Alerting Failures; A10 Mishandling of Exceptional Conditions. A edição **anterior** citada pelo OWASP é a de **2021**, com SQL Injection e XSS dentro da categoria *Injection*. Provas anteriores podem ter usado edições antigas: confira a edição do enunciado.

#### 2.2 Ataques de negação de serviço

| Ataque | Descrição |
|---|---|
| **DoS** | Torna serviço indisponível, esgotando recursos |
| **DDoS** (*distributed*) | Ataque DoS **distribuído**, vindo de muitas fontes (frequentemente uma *botnet*) |
| Categorias (de memória) | **Volumétricos** (inundam a banda: *UDP flood*, amplificação por DNS/NTP); **de protocolo** (*SYN flood*); **de camada de aplicação** (HTTP *flood*) |
| **Mitigação** | Provedores de mitigação/CDN, filtragem, limitação de taxa, balanceamento e redundância, *anycast*, WAF |

#### 2.3 Ataques de rede e criptográficos (de memória)

*Man-in-the-Middle* (interceptação ativa); ***sniffing*** (captura de tráfego); ***spoofing*** (falsificação de IP, ARP, DNS, e-mail); ***DNS poisoning***; ***replay***; **força bruta** e **dicionário**; ***password spraying***; ***credential stuffing*** (reuso de credenciais vazadas); ***rainbow tables*** (contra hashes sem sal); **ataques ao Wi-Fi**; **escalada de privilégio**; **movimentação lateral**.

#### 2.4 Engenharia social

***Phishing*** (e-mail em massa), ***spear phishing*** (direcionado), ***whaling*** (alvo executivo), ***smishing*** e ***vishing*** (SMS e voz), ***pretexting***, ***baiting***, ***tailgating***, ***business email compromise*** (BEC), **fraudes com *deepfake***. Defesa: conscientização, MFA resistente a *phishing*, verificação fora de banda, filtros.

#### 2.5 Outros

**Ataques à cadeia de suprimentos** (comprometimento de fornecedor ou biblioteca), **ameaças internas** (*insiders*), **APT** (*Advanced Persistent Threat*: ator sofisticado, persistente e direcionado), **zero-day** (vulnerabilidade sem correção conhecida), **ataques a firmware e IoT** (`13`).

### 3. Exemplo (didático)

Funcionário abre anexo (*trojan*); instala-se um *backdoor*; o invasor eleva privilégios, move-se lateralmente e implanta *ransomware*. Controles: filtro de e-mail, EDR, menor privilégio, segmentação e backup offline; plano de resposta (`06`). Mapear essa sequência às táticas do ATT&CK: `08`.

### 4. Comparações conceituais

| A | B | Diferença |
|---|---|---|
| Vírus | Worm | Precisa de hospedeiro e ação × propaga-se sozinho pela rede |
| Vírus | Trojan | Replica-se × disfarça-se e não replica |
| Bot | Botnet | Máquina controlada × rede de máquinas controladas |
| DoS | DDoS | Uma fonte × muitas fontes |
| XSS | CSRF | Script no navegador da vítima × requisição forjada autenticada |
| Phishing | Spear phishing | Em massa × direcionado |
| Ameaça | Ataque | Possibilidade × tentativa concretizada |

### 5. Atenção para a prova

*Inferência técnica e recomendação pedagógica; sem atribuir frequência à banca.*

- Identificar o *malware* pelo **mecanismo** descrito (propagação sem hospedeiro = worm; sequestro de dados = ransomware; máquina controlada = bot).
- Associar cada ataque web à **prevenção** correta (SQLi: consulta parametrizada; XSS: codificação de saída; CSRF: token).
- *Evidência histórica (amostra de duas provas):* a Prova 15 de 2018 trouxe **Q49** sobre *malware* do tipo **bot** (gabarito A, de terceiros, não validado). A Prova 6 de 2023 não trouxe questão específica de ataques. Duas provas não permitem inferir frequência.

### 6. Síntese

*Malware*: vírus, worm, trojan, ransomware, spyware, rootkit, backdoor, bot/botnet, fileless. Ataques web: SQLi, XSS, CSRF, path traversal (OWASP). DDoS; ataques de rede e criptográficos; engenharia social; defesas em camadas e backup.

### 7. Pontos para a futura produção de questões (registro)

Identificação por descrição; associação ataque–prevenção; XSS×CSRF; vírus×worm×trojan; DoS×DDoS.

### 8. Referências

- OWASP: SQL Injection, XSS, CSRF e Path Traversal (community.owasp.org/attacks/...) e OWASP Top 10 2025 (top10.owasp.org/2025) — **verificados em 2026-10-31**.
- Cartilha de Segurança (CERT.br): existência do fascículo "Códigos Maliciosos" e a definição de ransomware **verificadas**; definições de vírus, worm, bot, trojan, spyware, backdoor e rootkit **não lidas**; MITRE ATT&CK e literatura de *malware* — de memória.
- Edital Transpetro nº 04/2026.4, Anexo IV, itens 9.3 e 9.4. Prova Transpetro 2018, Prova 15, Q49 (gabarito de terceiros, não validado).


---

## Técnicas de Desenvolvimento Seguro; SAST, DAST e IAST

**Módulo:** M09 — Segurança da informação
**Texto oficial (Anexo IV):** 9.5 "Técnicas de desenvolvimento seguro, SAST/DAST/IAST".
**Escopo:** A. Ciclo de vida e testes de software: Módulo 5 (`03`, `06`, `07`). Ataques web: `03`.
**Status:** `VALIDADO` (aprovado pelo usuário em 2026-10-31, com ressalvas: interpretação do item 9.1 e escolha das versões do NIST SP 800-61 e do MITRE ATT&CK a confirmar; fontes de memória listadas em `docs/qualidade/relatorio-producao-modulo-09.md`). **Verificados** (OWASP, 2026-10-31): SAST e DAST. **Revisão:** IAST (interação com o programa com observação e sensores; mistura de SAST e DAST) e SCA (detectar componentes de código aberto embutidos) **confirmados** na Wikipedia (páginas curtas; OWASP não lido); práticas de SDL, DevSecOps e outros são de memória.

**Objetivos de aprendizagem.** (1) Integrar segurança ao ciclo de vida; (2) aplicar práticas de codificação segura; (3) distinguir SAST, DAST, IAST e SCA; (4) conhecer DevSecOps; (5) escolher a técnica de teste adequada.

---

### 1. Desenvolvimento seguro

**Desenvolvimento seguro** integra segurança a **todas as fases** do ciclo de vida do software, em vez de testá-la apenas no fim (*shift left*: antecipar). Custo de corrigir uma falha cresce quanto mais tarde ela é detectada.

#### 1.1 Práticas por fase (visão geral, de memória)

| Fase | Práticas |
|---|---|
| **Requisitos** | Requisitos de segurança e privacidade; classificação dos dados; requisitos legais (LGPD) |
| **Projeto** | **Modelagem de ameaças** (`08`), princípios de projeto seguro (menor privilégio, defesa em profundidade, falha segura), padrões de arquitetura segura |
| **Codificação** | Padrões de codificação segura; revisão de código; bibliotecas confiáveis; sem segredos no código |
| **Testes** | SAST, DAST, IAST, SCA, testes de penetração (`08`), fuzzing |
| **Implantação** | Configuração segura; gestão de segredos; assinatura de artefatos; mínimo privilégio de execução |
| **Operação** | Monitoramento, gestão de vulnerabilidades e *patches*, resposta a incidentes (`06`, `14`) |

Modelos de referência (de memória): **Microsoft SDL** (*Security Development Lifecycle*), **OWASP SAMM** (maturidade), **BSIMM** (observação de práticas), **NIST SSDF** (SP 800-218).

#### 1.2 Codificação segura

| Prática | Objetivo |
|---|---|
| **Validar entradas** (lista permitida) e **codificar saídas** | Evitar injeções e XSS (`03`) |
| **Consultas parametrizadas** | Evitar SQL Injection |
| **Autenticação e gestão de sessão robustas** | Senhas com *hash* forte e *salt* (`12`), MFA, expiração de sessão, *cookies* com `Secure`, `HttpOnly` e `SameSite` |
| **Controle de acesso no servidor**; negar por padrão | Evitar *broken access control* (A01 do OWASP Top 10 2025) |
| **Criptografia correta** | Algoritmos e protocolos atuais; gestão de chaves; não inventar algoritmos |
| **Tratamento de erros e *logs*** | Mensagens que não vazem detalhes; registro de eventos relevantes sem dados sensíveis |
| **Gestão de dependências** | Bibliotecas atualizadas e verificadas (cadeia de suprimentos) |
| **Gestão de segredos** | Sem senhas ou chaves em código-fonte; cofres de segredos |
| **Privacidade por projeto** | Minimização de dados (LGPD, Módulo 4) |
| **Revisão e testes** | Revisão por pares, análise automatizada |

**OWASP Top 10** (versão 2025 lida em top10.owasp.org; 2021 é a anterior): referência de riscos de aplicações web; a lista completa está em `03`. Outras referências OWASP: ASVS (verificação), Cheat Sheets, Proactive Controls (de memória).

### 2. Técnicas de teste de segurança de aplicações

#### 2.1 SAST — *Static Application Security Testing* (confirmado em OWASP)

Ferramentas que **analisam o código-fonte ou versões compiladas** em busca de falhas, **sem executar** a aplicação em operação (a página do OWASP fala em código-fonte ou compilado). Detecta cedo, aponta **linha de código**, cobre caminhos que o teste dinâmico não alcança. Limites: **falsos positivos**, dependência da linguagem, não vê configuração e comportamento em execução.

#### 2.2 DAST — *Dynamic Application Security Testing* (confirmado em OWASP)

Scanners que testam a aplicação **em execução, "de fora"** (caixa-preta), enviando requisições e analisando respostas: detecta problemas de configuração, injeções e XSS em tempo de execução, independente da linguagem. Limites: aparece **tarde** no ciclo, não aponta a linha de código, cobertura limitada aos caminhos percorridos.

#### 2.3 IAST — *Interactive Application Security Testing* (ideia central verificada na Wikipedia; detalhes de memória)

Combina elementos dos anteriores: um **agente/instrumentação dentro da aplicação em execução** observa o código e o fluxo de dados durante testes (manuais, automatizados ou DAST), com menos falsos positivos e indicação do local da falha. Exige instrumentação e ambiente de teste ativo.

#### 2.4 Outras

| Técnica | Descrição |
|---|---|
| **SCA** (*Software Composition Analysis*) | Identifica **componentes de terceiros** e suas vulnerabilidades e licenças (CVE); gera **SBOM** (lista de materiais de software) |
| **RASP** (*Runtime Application Self-Protection*) | Proteção embutida em tempo de execução |
| **Fuzzing** | Envio de entradas inválidas/aleatórias para provocar falhas |
| **Revisão de código** e **testes de penetração** (`08`) | Manuais, complementares |
| **Análise de segredos, de infraestrutura como código (IaC) e de contêineres** | Verificação de configurações e imagens |

#### 2.5 Comparação

| Aspecto | SAST | DAST | IAST |
|---|---|---|---|
| Acesso ao código | Sim (código ou binário) | Não (caixa-preta) | Sim (instrumentação) |
| Executa a aplicação? | Não | Sim | Sim |
| Quando | Cedo (codificação/CI) | Aplicação rodando (teste/homologação) | Durante testes |
| Localiza a linha? | Sim | Não | Sim |
| Falsos positivos | Mais | Menos | Menos |
| Dependente da linguagem | Sim | Não | Sim |

### 3. DevSecOps

Integração de segurança ao fluxo de **CI/CD**: SAST e SCA no *commit*/*build*, DAST em ambientes de teste, análise de IaC e de imagens, gestão de segredos, *gates* (portões) de qualidade, políticas como código, monitoramento contínuo; responsabilidade **compartilhada** entre desenvolvimento, segurança e operações (de memória).

### 4. Exemplo (didático)

Pipeline de uma aplicação: no *commit*, SAST e verificação de segredos; no *build*, SCA e geração de SBOM; em homologação, DAST e testes de penetração; em produção, monitoramento e WAF. Falha crítica bloqueia a promoção.

### 5. Comparações conceituais

| A | B | Diferença |
|---|---|---|
| SAST | DAST | Analisa código sem executar × testa a aplicação em execução |
| DAST | IAST | Caixa-preta externa × com instrumentação interna |
| SAST | SCA | Código próprio × componentes de terceiros |
| Verificação | Validação | Está certo conforme especificação × atende à necessidade (Módulo 5) |
| *Shift left* | Teste só no fim | Antecipar a segurança × corrigir tarde |

### 6. Atenção para a prova

*Inferência técnica e recomendação pedagógica; sem atribuir frequência à banca.*

- Associar **SAST = estático/código**, **DAST = dinâmico/em execução**, **IAST = interativo/instrumentado**.
- *Evidência histórica (amostra de duas provas):* a Prova 6 de 2023 trouxe **Q38** (SAST/DAST — teste em tempo de execução; gabarito B, de terceiros, não validado). Duas provas não permitem inferir frequência.

### 7. Síntese

Segurança em todas as fases (*shift left*); codificação segura (validação, parametrização, controle de acesso, segredos); SAST (estático), DAST (dinâmico), IAST (instrumentado), SCA (componentes); DevSecOps.

### 8. Pontos para a futura produção de questões (registro)

Definição de SAST/DAST/IAST; escolha da técnica por cenário; práticas de codificação segura; DevSecOps.

### 9. Referências

- OWASP, *Source Code Analysis Tools* (SAST) e *Vulnerability Scanning Tools* (DAST) — **verificadas em 2026-10-31**; IAST e SCA — Wikipedia, **verificadas em 2026-10-31**.
- Microsoft SDL, OWASP SAMM/ASVS, BSIMM, NIST SSDF — **de memória, não verificados**.
- Edital Transpetro nº 04/2026.4, Anexo IV, item 9.5. Prova Transpetro 2023, Prova 6, Q38 (gabarito de terceiros, não validado).


---

## VPN, MDM, SSO, MFA e Gestão de Identidade e Acesso (IAM)

**Módulo:** M09 — Segurança da informação
**Textos oficiais (Anexo IV):** 9.6 "VPN"; 9.7 "MDM"; 9.8 "SSO"; 9.9 "MFA"; 9.10 "Gestão de Identidade e acesso (autenticação, autorização e auditoria), RBAC e ABAC".
**Escopo:** A. Criptografia e certificados (base de VPN e SSO): `12`.
**Status:** `VALIDADO` (aprovado pelo usuário em 2026-10-31, com ressalvas: interpretação do item 9.1 e escolha das versões do NIST SP 800-61 e do MITRE ATT&CK a confirmar; fontes de memória listadas em `docs/qualidade/relatorio-producao-modulo-09.md`). **Verificados** (2026-10-31): IPsec/RFC 4301 (AH, ESP, modos); fatores de autenticação (NIST SP 800-63B rev. 4); ABAC (NIST SP 800-162); SAML (Wikipedia: IdP/SP, bindings, *Artifact*); OAuth 2.0 (RFC 6749). **Revisão:** WireGuard, RBAC × ABAC (Wikipedia), MDM (administração de dispositivos móveis; *remote wipe*, imposição de políticas, BYOD) e WebAuthn ("resistente a *alguns* ataques de *phishing*") **confirmados**; OpenID Connect como camada sobre o OAuth 2.0 só por resumo automático; o termo "SSL VPN" **não confirmado**.

**Objetivos de aprendizagem.** (1) Explicar VPN, tunelamento e protocolos; (2) descrever MDM e seus recursos; (3) explicar SSO e federação; (4) listar fatores de MFA; (5) diferenciar autenticação, autorização, auditoria, RBAC e ABAC.

---

### 1. VPN — *Virtual Private Network* (9.6)

**VPN** cria um **canal seguro (túnel)** sobre rede pública ou não confiável, com **confidencialidade, integridade e autenticação** (por criptografia). **Tunelamento:** os pacotes originais são **encapsulados** em outros pacotes para atravessar a rede, no caso criptografados.

| Tipo | Uso |
|---|---|
| **Acesso remoto** (cliente–gateway) | Colaborador remoto acessa a rede interna |
| **Site a site** (*site-to-site*) | Interliga redes de duas unidades |
| **Divisão do tráfego (*split tunneling*)** | Apenas parte do tráfego vai pelo túnel (risco × desempenho) |

#### 1.1 IPsec (RFC 4301 — verificado)

Arquitetura de segurança da camada IP. Dois protocolos: **AH** (*Authentication Header*: **integridade e autenticação da origem**, sem confidencialidade) e **ESP** (*Encapsulating Security Payload*: os mesmos serviços **mais confidencialidade**). Dois modos: **transporte** (protege principalmente os protocolos de camada superior; cabeçalho IP original) e **túnel** (protege **pacotes IP inteiros encapsulados**; típico de VPN site a site). Gestão de chaves: IKE (de memória).

#### 1.2 Outras tecnologias (WireGuard e a lista geral de protocolos verificados; demais de memória)

**VPN SSL/TLS** (acesso via navegador ou cliente, sobre TLS), **WireGuard** (moderna e simples), **OpenVPN**, **L2TP/IPsec**, **PPTP** (obsoleto e inseguro), **MPLS** (rede privada do provedor; **não é criptografada** por padrão). Camadas: IPsec na rede (L3), TLS na transporte/aplicação.

**Limitações:** VPN protege o **canal**, não o ponto final comprometido; exige MFA e gestão de acesso; concentra risco no *gateway*. Evolução: **ZTNA** (*Zero Trust Network Access*, acesso por aplicação e contexto; de memória).

### 2. MDM — *Mobile Device Management* (9.7)

**MDM** é a gestão centralizada de **dispositivos móveis** (celulares, tablets, às vezes notebooks) para aplicar políticas de segurança (definição e recursos básicos verificados em fonte secundária).

| Recurso | Descrição |
|---|---|
| **Inventário e inscrição** | Cadastro, conformidade do dispositivo |
| **Políticas de configuração** | Senha/biometria obrigatória, criptografia, bloqueio de tela, restrições |
| **Gestão de aplicativos** | Distribuição, lista permitida/bloqueada, aplicativos corporativos (MAM) |
| **Segurança** | **Bloqueio e limpeza remotos (*wipe*)**, detecção de *root/jailbreak*, VPN por aplicativo |
| **Separação de dados** | Contêiner/perfil corporativo × pessoal |
| **Conformidade e acesso condicional** | Acesso a recursos só de dispositivos em conformidade |

**Modelos:** **BYOD** (dispositivo pessoal), **COBO/COPE** (corporativo, uso pessoal permitido ou não). **Termos relacionados:** MAM (gestão de aplicativos), **EMM/UEM** (gestão unificada de endpoints). **Privacidade:** BYOD exige equilíbrio com a LGPD (Módulo 4).

### 3. SSO — *Single Sign-On* (9.8)

**SSO** permite que o usuário **autentique uma vez** e acesse **vários sistemas** sem novo login. Benefícios: menos senhas, melhor experiência, controle central, desativação imediata de acesso. Riscos: **ponto único de falha/comprometimento** (exige MFA e proteção forte do provedor de identidade).

#### 3.1 Federação e protocolos

| Termo | Descrição |
|---|---|
| **IdP** (*Identity Provider*) | Autentica o usuário e emite asserções/tokens |
| **SP** (*Service Provider*) / aplicação (RP) | Confia no IdP e concede acesso |
| **Federação** | Confiança entre domínios/organizações para compartilhar identidade |
| **SAML 2.0** | Padrão (OASIS) baseado em XML: troca de **asserções** entre IdP e SP; usado em SSO corporativo web. Os *bindings* incluem **HTTP Redirect**, **HTTP POST** e **HTTP Artifact**; no *Artifact*, o SP recebe uma referência e obtém a asserção por **canal direto (back channel)** — **Artifact Resolution Protocol** (verificado em fonte secundária) |
| **OAuth 2.0** (RFC 6749) | **Framework de autorização**: delega acesso limitado a recursos por *tokens* emitidos pelo servidor de autorização, sem compartilhar a senha; papéis: *resource owner*, cliente, servidor de autorização, servidor de recursos (verificado) |
| **OpenID Connect (OIDC)** | Camada de **autenticação** sobre o OAuth 2.0, com *ID token* (de memória, não confirmado) |
| **Kerberos** | Autenticação por *tickets* (Active Directory; de memória) |
| **LDAP / Active Directory** | Diretórios de identidades (de memória) |

**OAuth ≠ autenticação:** OAuth trata de **autorização delegada**; autenticação federada usa SAML ou OIDC.

### 4. MFA — Autenticação Multifator (9.9)

**MFA** exige **dois ou mais fatores de categorias diferentes** (verificado em NIST SP 800-63B rev. 4):

| Fator | Significado | Exemplos |
|---|---|---|
| **Conhecimento** (*something you know*) | Algo que só o usuário sabe | Senha, PIN |
| **Posse** (*something you have*) | Algo que o usuário possui | Token físico, celular com aplicativo, cartão inteligente, chave de segurança |
| **Inerência** (*something you are*) | Característica biométrica | Digital, face, íris |

Observações: **dois fatores da mesma categoria** (duas senhas) **não** são MFA; a biometria, segundo o NIST, **não é reconhecida isoladamente** como autenticador. Fatores adicionais citados na literatura: localização e comportamento (de memória). **Métodos:** OTP por aplicativo (TOTP), SMS (considerado mais fraco), *push*, chaves de segurança (**FIDO2/WebAuthn**: a Wikipedia diz "resistente a alguns ataques de *phishing*", não a todos). O NIST exige no AAL2 ao menos uma opção **resistente a *phishing*** (verificado). Riscos: fadiga de MFA (*push bombing*), *SIM swap*, *phishing* em tempo real.

### 5. Gestão de identidade e acesso — IAM (9.10)

**IAM** (*Identity and Access Management*) gerencia identidades digitais e seus direitos de acesso ao longo do ciclo de vida.

#### 5.1 AAA: autenticação, autorização e auditoria

| Etapa | Pergunta | Exemplo |
|---|---|---|
| **Identificação** | Quem diz ser? | Nome de usuário |
| **Autenticação** | Prove que é você | Senha, MFA |
| **Autorização** | O que você pode fazer? | Perfil de acesso |
| **Auditoria (*accounting*)** | O que você fez? | Registros de acesso e ações, trilha de auditoria |

#### 5.2 Ciclo de vida da identidade

Provisionamento (entrada), alteração (mudança de função), **desprovisionamento imediato** (saída), recertificação periódica de acessos, **PAM** (gestão de acessos privilegiados), governança de identidades (IGA), segregação de funções.

#### 5.3 Modelos de controle de acesso

| Modelo | Decisão baseada em | Característica |
|---|---|---|
| **DAC** | Dono do recurso | Flexível, menos controlado |
| **MAC** | Rótulos/classificação definidos pelo sistema | Rígido, ambientes de alta segurança |
| **RBAC** (*Role-Based*) | **Papéis (funções)** atribuídos aos usuários; permissões ligadas ao papel | Simples de administrar; pode gerar **explosão de papéis** |
| **ABAC** (*Attribute-Based*) | **Atributos** do sujeito, do objeto, da operação e do ambiente, avaliados por **políticas** | Granular e dinâmico (por exemplo, horário, local, sensibilidade) |

ABAC foi definido pelo **NIST SP 800-162** como metodologia de controle de acesso lógico em que a autorização é determinada pela **avaliação de atributos** do sujeito, do objeto, das operações e, em alguns casos, do ambiente (verificado). Exemplo (didático): RBAC — "Analista de manutenção pode editar ordens de serviço"; ABAC — "Analista pode editar ordens **da sua unidade**, **em horário comercial**, **a partir da rede corporativa**".

| Aspecto | RBAC | ABAC |
|---|---|---|
| Base | Papel | Atributos e política |
| Granularidade | Média | Alta |
| Administração | Mais simples | Mais complexa (políticas) |
| Contexto dinâmico | Limitado | Nativo |

### 6. Comparações conceituais

| A | B | Diferença |
|---|---|---|
| Autenticação | Autorização | Quem é × o que pode |
| Autorização | Auditoria | Permite × registra |
| SSO | MFA | Um login para vários sistemas × mais de um fator no login |
| SAML | OAuth | Federação de autenticação (asserções) × autorização delegada (tokens) |
| VPN | Firewall | Canal seguro × filtro de tráfego |
| IPsec AH | ESP | Integridade e autenticação × também confidencialidade |
| IPsec transporte | Túnel | Protege o payload × encapsula o pacote IP inteiro |
| MDM | MAM | Dispositivo × aplicativo |

### 7. Atenção para a prova

*Inferência técnica e recomendação pedagógica; sem atribuir frequência à banca.*

- Memorizar os **três fatores** do MFA (e que dois fatores iguais não são MFA); diferenciar **RBAC (papel) × ABAC (atributos)**; saber que VPN usa **tunelamento**.
- *Evidência histórica (amostra de duas provas):* Prova 6 de 2023 — **Q39** (ABAC × RBAC; gabarito A). Prova 15 de 2018 — **Q48** (VPN: tunelamento; gabarito C) e **Q51** (SAML: protocolos, *artifact resolution*; gabarito C; o catálogo anota que SAML não é citado literalmente, mas o SSO, 9.8, é). Gabaritos de terceiros, não validados. Duas provas não permitem inferir frequência.

### 8. Síntese

VPN: túnel criptografado (IPsec: AH/ESP, transporte/túnel; SSL/TLS). MDM: gestão e segurança de dispositivos móveis (políticas, *wipe*, BYOD). SSO: um login, vários sistemas (IdP/SP, SAML, OAuth/OIDC). MFA: conhecimento, posse, inerência. IAM: AAA; RBAC (papéis) e ABAC (atributos).

### 9. Pontos para a futura produção de questões (registro)

Fatores de MFA; RBAC×ABAC; SAML×OAuth; modos do IPsec; recursos de MDM; AAA.

### 10. Referências

- IETF RFC 4301 (IPsec) e RFC 6749 (OAuth 2.0) — **verificadas em 2026-10-31**. NIST SP 800-63B rev. 4 (fatores) e SP 800-162 (ABAC; resumo) — **verificadas**. Wikipedia, "SAML" — **verificada** (fonte OASIS não lida).
- Wikipedia ("RBAC", "ABAC", "MDM", "WebAuthn", "VPN") e wireguard.com — **verificadas em 2026-10-31**. OpenID Connect (só resumo), "SSL VPN", MAM/UEM, NIST RBAC (ANSI INCITS 359) — **não confirmados; de memória**.
- Edital Transpetro nº 04/2026.4, Anexo IV, itens 9.6 a 9.10. Provas: Transpetro 2023, Prova 6, Q39; Transpetro 2018, Prova 15, Q48 e Q51 (gabaritos de terceiros, não validados).


---

## Gerenciamento de Resposta a Incidentes (NIST SP 800-61)

**Módulo:** M09 — Segurança da informação
**Texto oficial (Anexo IV):** 9.11 "Conceitos gerais: Gerenciamento de resposta a incidente (NIST SP 800-61)".
**Escopo:** A. Detecção e monitoração: `14`; inteligência: `07`; continuidade: `09`; aspectos legais de incidentes com dados pessoais: Módulo 4 (LGPD e ANPD).
**Status:** `VALIDADO` (aprovado pelo usuário em 2026-10-31, com ressalvas: interpretação do item 9.1 e escolha das versões do NIST SP 800-61 e do MITRE ATT&CK a confirmar; fontes de memória listadas em `docs/qualidade/relatorio-producao-modulo-09.md`). **Verificado** (NIST CSRC, 2026-10-31): a **Rev. 3** (abril de 2025) **substitui a Rev. 2** (agosto de 2012, retirada em 3/4/2025); a Rev. 3 é um *Community Profile* alinhado ao **CSF 2.0**. **Revisão (2026-10-31):** o PDF da **Rev. 2** foi lido (sumário e figuras do ciclo): as **quatro fases** (Preparation; Detection and Analysis; Containment, Eradication, and Recovery; Post-Incident Activity) estão **confirmadas**; a estrutura interna da **Rev. 3** continua **não lida**.

**Objetivos de aprendizagem.** (1) Definir evento e incidente; (2) descrever o ciclo de resposta da Rev. 2 e a mudança da Rev. 3; (3) estruturar equipe e plano; (4) executar contenção, erradicação e recuperação; (5) aprender com o incidente.

---

### 1. Conceitos

- **Evento:** ocorrência observável em sistema ou rede. **Incidente de segurança:** evento (ou série de eventos) que **viola ou ameaça violar** políticas ou práticas de segurança, ou compromete a confidencialidade, integridade ou disponibilidade (definição geral, de memória).
- **Resposta a incidentes (IR):** capacidade organizada de **preparar-se, detectar, analisar, conter, erradicar, recuperar** e **aprender** com incidentes.
- **CSIRT/CERT/CSIRT interno, SOC:** equipe de resposta; SOC monitora continuamente (`14`).
- **Indicadores de comprometimento (IoC)** e **táticas e técnicas** (`07`, `08`) apoiam a detecção.

### 2. NIST SP 800-61: duas revisões

| Revisão | Situação (verificada) | Modelo (de memória) |
|---|---|---|
| **Rev. 2** (agosto de 2012) | **Retirada em 3/4/2025**, substituída pela Rev. 3 | Ciclo de vida em **quatro fases** (seção 3) |
| **Rev. 3** (abril de 2025) | Vigente; subtítulo "A CSF 2.0 Community Profile" | Integra a resposta a incidentes ao **gerenciamento de risco de cibersegurança**, com as funções do CSF 2.0 (Govern, Identify, Protect, Detect, Respond, Recover); estrutura detalhada **não lida** |

**Decisão do usuário (2026-11-04):** a **Rev. 3 (vigente) é a referência principal**; a **Rev. 2** é mantida como **comparação**, porque as provas catalogadas (2018 e 2023) são anteriores à Rev. 3 e usam o ciclo de quatro fases. O edital cita "NIST SP 800-61" sem a revisão: use a revisão indicada no enunciado.

**O que muda na Rev. 3** (fonte: página do NIST e resumos de terceiros; **corpo não lido**): o documento passa a ser organizado pelas subcategorias do **CSF 2.0**; o ciclo de vida de resposta a incidentes é descrito com as **seis funções do CSF 2.0** (Govern, Identify, Protect, Detect, Respond, Recover), integrando a resposta a incidentes ao gerenciamento de riscos, e deixa de ser tratado como sequência linear e reativa. A classificação de prioridade (alta, média, baixa) das atividades, citada em resumos de terceiros, **não foi confirmada**.

**Estratégia de estudo:** (1) entenda o **modelo da Rev. 3** (resposta e recuperação dependem de governar, identificar e proteger); (2) domine as **quatro fases da Rev. 2** (seção 3), porque a prova pode usá-las; (3) leia o enunciado para ver qual revisão ele cita.

### 3. Ciclo de vida da resposta a incidentes — Rev. 2 (fases e atividades **verificadas** no PDF do NIST)

| Fase | Conteúdo |
|---|---|
| **1. Preparação** | Política e plano de IR; equipe e papéis; ferramentas (SIEM, forense, comunicações); treinamento e exercícios; **prevenção** (gestão de riscos, patches, configuração segura, conscientização) |
| **2. Detecção e análise** | Fontes (alertas de IDS/EDR/SIEM, logs, usuários, inteligência); **vetores de ataque** típicos; **sinais** (*precursors* e *indicators*); validação, **priorização** (impacto funcional, informacional, esforço de recuperação), documentação, notificação |
| **3. Contenção, erradicação e recuperação** | **Contenção** (isolar sistemas, bloquear contas e IPs; decisão conforme impacto e evidências); **erradicação** (remover *malware*, corrigir vulnerabilidades, redefinir credenciais); **recuperação** (restaurar sistemas, validar, monitorar reincidência) |
| **4. Atividade pós-incidente** | **Lições aprendidas**, relatório, métricas, melhoria do plano e dos controles; retenção de evidências |

O ciclo é **iterativo**: a análise do pós-incidente realimenta a preparação; contenção e análise podem se alternar. Outros modelos (por exemplo, o de seis etapas citado na Wikipedia: preparação, identificação, contenção, erradicação, recuperação e lições aprendidas) detalham as mesmas atividades; **o NIST agrupa em quatro fases**.

### 4. Atividades-chave

| Atividade | Pontos de atenção |
|---|---|
| **Plano de resposta** | Objetivos, escopo, papéis (gerente de incidente, técnico, comunicação, jurídico, RH), níveis de severidade, escalonamento |
| **Classificação e priorização** | Criticidade do ativo, tipo de dado, impacto no negócio, urgência |
| **Evidências e forense** | **Cadeia de custódia**, cópias forenses, ordem de volatilidade (memória antes de disco), tempo sincronizado, registro das ações |
| **Comunicação** | Interna (gestão, TI, jurídico), externa (clientes, autoridades, imprensa), conforme política e lei |
| **Notificação legal** | Incidentes com dados pessoais: LGPD art. 48 e regras da ANPD (Módulo 4); setores regulados e órgãos (por exemplo, CTIR Gov para órgãos federais; de memória) |
| **Cooperação** | Provedores, fornecedores, CSIRTs, compartilhamento de inteligência (`07`) |
| **Métricas** | Tempo de detecção (MTTD), de resposta e de recuperação (MTTR), número e severidade de incidentes |

#### 4.1 Contenção, erradicação e recuperação: o que decidir

Antes de desligar um sistema, considerar **evidências** (memória volátil), **impacto no negócio**, **risco de propagação** e **necessidade de manter acesso do invasor sob observação** (decisão formal). Ao erradicar, tratar a **causa raiz** (vulnerabilidade explorada, credencial comprometida); ao recuperar, **restaurar de backup íntegro** e monitorar.

### 5. Tipos de incidentes (exemplos)

Código malicioso (*ransomware*), acesso não autorizado, negação de serviço, vazamento de dados, uso inadequado por *insiders*, comprometimento de contas, fraude, incidentes em nuvem e IoT (`13`).

### 6. Exemplo (didático)

O SIEM alerta uma sequência de falhas de login seguida de um acesso bem-sucedido de país incomum (detecção). A equipe valida e prioriza (alta severidade), isola o *endpoint* e bloqueia a conta (contenção), remove o acesso persistente e redefine credenciais (erradicação), restaura os serviços e monitora (recuperação) e registra lições aprendidas (pós-incidente).

### 7. Comparações conceituais

| A | B | Diferença |
|---|---|---|
| Evento | Incidente | Ocorrência observável × evento que compromete a segurança |
| Contenção | Erradicação | Limitar a propagação × remover a causa |
| Erradicação | Recuperação | Eliminar a ameaça × restabelecer a operação |
| Resposta a incidentes | Continuidade de negócios | Tratar o incidente de segurança × manter processos críticos (ISO 22301; `09`) |
| Rev. 2 | Rev. 3 | Ciclo de quatro fases × integração ao CSF 2.0 |
| CSIRT | SOC | Equipe de resposta × monitoramento contínuo |

### 8. Atenção para a prova

*Inferência técnica e recomendação pedagógica; sem atribuir frequência à banca.*

- **Referência principal: Rev. 3** (decisão de 2026-11-04). Mesmo assim, memorizar as **quatro fases da Rev. 2** (comparativo) e a **ordem**: preparação; detecção e análise; contenção, erradicação e recuperação; atividade pós-incidente.
- Saber que a **Rev. 3 (2025)** substituiu a Rev. 2; a prova pode seguir qualquer das duas — observar o enunciado.
- *Evidência histórica (amostra de duas provas):* a Prova 6 de 2023 trouxe **Q42** (ciclo de resposta a incidentes NIST SP 800-61; gabarito C, de terceiros, não validado). Duas provas não permitem inferir frequência.

### 9. Síntese

IR = preparar, detectar e analisar, conter/erradicar/recuperar, aprender. NIST SP 800-61 Rev. 2 (2012, retirada) → Rev. 3 (2025, perfil do CSF 2.0). Evidências e cadeia de custódia; comunicação e notificação legal; métricas.

### 10. Pontos para a futura produção de questões (registro)

Fases do ciclo; ordem das atividades; diferença entre contenção, erradicação e recuperação; Rev. 2 × Rev. 3; evidências.

### 11. Referências

- NIST CSRC, SP 800-61 Rev. 3 (abr./2025) e Rev. 2 (ago./2012, retirada em 3/4/2025) — **página de metadados verificada em 2026-10-31**; **corpo da Rev. 3 não lido; Rev. 2 lida (PDF)**.
- NIST SP 800-61 Rev. 2 (PDF; sumário e figuras) — **lido em 2026-10-31**. Estrutura da Rev. 3, CTIR Gov, MTTD/MTTR — **de memória, não verificados**. LGPD art. 48: Módulo 4.
- Edital Transpetro nº 04/2026.4, Anexo IV, item 9.11. Prova Transpetro 2023, Prova 6, Q42 (gabarito de terceiros, não validado).


---

## Inteligência de Ameaças (*Threat Intelligence*) e Caça a Ameaças (*Threat Hunting*)

**Módulo:** M09 — Segurança da informação
**Texto oficial (Anexo IV):** 9.12 "Threat intel, threat hunting".
**Escopo:** A. ATT&CK e kill chain como modelos de comportamento: `08`; resposta: `06`; operação: `14`.
**Status:** `VALIDADO` (aprovado pelo usuário em 2026-10-31, com ressalvas: interpretação do item 9.1 e escolha das versões do NIST SP 800-61 e do MITRE ATT&CK a confirmar; fontes de memória listadas em `docs/qualidade/relatorio-producao-modulo-09.md`). **Verificados** (Wikipedia, 2026-10-31): níveis de CTI, IoC e TTP, Cyber Kill Chain (7 fases, Lockheed Martin, 2011), *threat hunting* (proativo, iterativo, baseado em hipótese). **De memória:** Diamond Model e STIX/TAXII (as páginas consultadas na revisão retornaram 404; permanecem **não confirmados**), ciclo de inteligência, ISACs.

**Objetivos de aprendizagem.** (1) Definir CTI e seus níveis; (2) distinguir dado, informação e inteligência de ameaças; (3) reconhecer IoC e TTP; (4) descrever o ciclo de inteligência; (5) distinguir *threat hunting* de detecção reativa.

---

### 1. Inteligência de ameaças (*Cyber Threat Intelligence* — CTI)

**CTI** é a **inteligência** (informação analisada, contextualizada e acionável) sobre **ameaças, atores, motivações, capacidades e táticas**, voltada a apoiar decisões de defesa. Diferencia-se de **dados brutos** (lista de IPs) e de **informação** (relatório sem análise): o que a torna *inteligência* é a **análise e a relevância para a organização** (relação com `01`, módulo 7: dado → informação → conhecimento → inteligência).

#### 1.1 Níveis (verificado: três níveis padrão)

| Nível | Foco | Público | Exemplos |
|---|---|---|---|
| **Estratégica** | Tendências, motivações de atores, riscos para o negócio, geopolítica | Alta direção, gestão de riscos | Relatório de ameaças ao setor de energia |
| **Operacional** | Campanhas, intenção e capacidade dos atacantes; **TTPs** | Gestores de segurança, resposta a incidentes | Perfil de um grupo e suas campanhas |
| **Tática** | **IoC** e padrões técnicos para detecção e bloqueio | SOC, analistas | Hashes, IPs e domínios maliciosos, regras de detecção |

A **inteligência técnica** (artefatos e *feeds* de IoC para o SOC) aparece em algumas organizações como uma **categoria adicional**, não como nível padrão (segundo a fonte consultada). Fontes variam na nomenclatura.

#### 1.2 Fontes

**OSINT** (fontes abertas), **fontes comerciais**, **compartilhamento comunitário** (ISACs/ISAOs, CSIRTs; de memória), **fontes internas** (logs, incidentes passados), **HUMINT/redes fechadas**, **Dark/Deep Web**, **honeypots** e **sandboxes**.

### 2. Conceitos centrais

| Termo | Definição |
|---|---|
| **IoC** (*Indicator of Compromise*) | Artefato que indica comprometimento: *hashes*, IPs, domínios, URLs, chaves de registro, nomes de arquivos (verificado; ligado ao nível **tático**) |
| **TTP** (táticas, técnicas e procedimentos) | **Comportamento** do atacante (verificado; ligado ao nível **operacional**); mais duradouro que IoC |
| **IoA** (*Indicator of Attack*) | Indicador de **comportamento em curso** (de memória) |
| **Ator de ameaça** | Estado-nação, cibercriminosos, hacktivistas, *insiders*, grupos APT |
| **Campanha** | Conjunto de atividades coordenadas de um ator |
| **Pirâmide da dor** (*Pyramid of Pain*, de memória) | IoC como *hashes* são triviais de alterar pelo atacante; TTPs são difíceis — detectar TTPs causa mais "dor" ao atacante |

#### 2.1 Modelos e padrões

| Modelo | Descrição |
|---|---|
| **Cyber Kill Chain** (Lockheed Martin, 2011; **verificado**) | Sete fases: **reconhecimento, armamento (*weaponization*), entrega, exploração, instalação, comando e controle, ações sobre os objetivos** |
| **MITRE ATT&CK** | Base de conhecimento de táticas e técnicas de adversários (`08`) |
| **Diamond Model** (de memória, não confirmado) | Eventos de intrusão descritos por adversário, infraestrutura, capacidade e vítima |
| **STIX/TAXII** (de memória, não confirmado) | Padrões para **descrever** (STIX) e **transportar** (TAXII) inteligência de ameaças |
| **TLP** (*Traffic Light Protocol*; de memória) | Rótulos de compartilhamento (branco, verde, âmbar, vermelho) |

### 3. Ciclo de vida da inteligência (de memória)

1. **Planejamento e direção** (requisitos de inteligência: o que a organização precisa saber).
2. **Coleta**.
3. **Processamento** (normalização, tradução, deduplicação).
4. **Análise** (contexto, correlação, atribuição, avaliação de confiança).
5. **Disseminação** (para o público certo, no formato certo).
6. **Feedback** (ajustar requisitos).

### 4. Uso da CTI

Enriquecer alertas do SIEM (`14`); bloquear IoC em firewall/EDR; priorizar gestão de vulnerabilidades (explorações ativas); apoiar a resposta (`06`) e os testes de penetração (`08`); informar a gestão de riscos (`09`); orientar investimentos. **Limites:** excesso de IoC com baixa qualidade, **vida curta** dos indicadores, falsos positivos, atribuição incerta, custo.

### 5. Caça a ameaças (*Threat Hunting*)

**Threat hunting** é a **busca proativa e iterativa** por ameaças que **escaparam das defesas automatizadas**, em contraste com medidas **reativas** (verificado em fonte secundária). Tipicamente **parte de uma hipótese**; usa IoC e TTPs como indicadores; a fonte registra que **não há consenso** sobre a definição.

| Aspecto | Detecção reativa (SOC) | *Threat hunting* |
|---|---|---|
| Gatilho | Alerta | Hipótese, inteligência ou anomalia |
| Postura | Reativa | **Proativa** |
| Premissa | Controles detectam o que conhecem | "Assume-se que o invasor já está dentro" (*assume breach*; de memória) |
| Resultado | Incidentes tratados | Novas detecções, achados, lacunas de visibilidade |

#### 5.1 Processo (de memória)

1. **Hipótese** (por exemplo: "um atacante pode estar usando tarefas agendadas para persistência").
2. **Coleta e investigação** (telemetria de EDR, logs, rede; consultas no SIEM).
3. **Análise** e confirmação ou refutação.
4. **Resposta** (se confirmada) e **documentação**.
5. **Automatização**: transformar o achado em **detecção contínua** (regras), melhorando o SOC.

**Tipos de caça (de memória):** guiada por hipótese (ATT&CK/TTP), guiada por inteligência (IoC), baseada em anomalia/analítica. **Pré-requisitos:** visibilidade (logs e EDR), dados centralizados, analistas qualificados, linha de base do ambiente.

### 6. Exemplo (didático)

A CTI informa que um grupo que ataca o setor de energia usa técnica de *credential dumping* (operacional). A equipe formula a hipótese de que isso ocorre no seu ambiente, consulta a telemetria dos servidores, encontra um acesso suspeito ao processo de autenticação, aciona a resposta e cria uma regra no SIEM para detectar o padrão.

### 7. Comparações conceituais

| A | B | Diferença |
|---|---|---|
| Dado | Inteligência | Fato bruto × informação analisada e acionável |
| IoC | TTP | Artefato efêmero × comportamento durável |
| CTI estratégica | Tática | Decisão de negócio × detecção técnica |
| *Threat hunting* | Monitoramento | Busca proativa por hipótese × reação a alertas |
| Kill chain | ATT&CK | Modelo linear de 7 fases × matriz detalhada de táticas e técnicas |
| IoC | IoA | Evidência de comprometimento × evidência de ataque em curso |

### 8. Atenção para a prova

*Inferência técnica e recomendação pedagógica; sem atribuir frequência à banca.*

- *Threat hunting* é **proativo**; a CTI deve ser **acionável**; IoC são indicadores técnicos e TTP descrevem comportamento.
- O item 9.12 **não teve questão** identificada nas duas provas catalogadas; a ausência não permite inferir baixa incidência.

### 9. Síntese

CTI = inteligência acionável sobre ameaças (estratégica, operacional, tática); IoC × TTP; Kill Chain (7 fases), ATT&CK, STIX/TAXII; ciclo de inteligência; *threat hunting* = busca proativa por hipótese, que realimenta a detecção.

### 10. Pontos para a futura produção de questões (registro)

Níveis de CTI; IoC×TTP; fases da kill chain; hunting×monitoramento; uso da inteligência.

### 11. Referências

- Wikipedia, "Cyber threat intelligence", "Cyber kill chain" e "Threat hunting" — **verificadas em 2026-10-31** (parte da primeira por resumo automático).
- Diamond Model, STIX/TAXII, TLP, ciclo de inteligência, pirâmide da dor — **de memória, não verificados**.
- Edital Transpetro nº 04/2026.4, Anexo IV, item 9.12.


---

## Testes de Penetração, Modelagem de Ameaças (STRIDE) e Táticas do MITRE ATT&CK

**Módulo:** M09 — Segurança da informação
**Textos oficiais (Anexo IV):** 9.13 "Testes de penetração"; 9.14 "Modelagem de ameaças (STRIDE etc.)"; 9.15 "conhecimento das Táticas do framework Mitre ATT&CK" (grafia do edital).
**Escopo:** A.
**Status:** `VALIDADO` (aprovado pelo usuário em 2026-10-31, com ressalvas: interpretação do item 9.1 e escolha das versões do NIST SP 800-61 e do MITRE ATT&CK a confirmar; fontes de memória listadas em `docs/qualidade/relatorio-producao-modulo-09.md`). **Verificados** (2026-10-31): lista atual de **15 táticas** do ATT&CK Enterprise (attack.mitre.org); STRIDE (seis categorias e propriedades); DFD; padrões de pentest e tipos caixa-preta/cinza/branca (Wikipedia). **Divergência a observar:** a página do ATT&CK registra **v20**, com as táticas **Stealth** (TA0005) e **Defense Impairment** (TA0112), que **não** aparecem em listas mais antigas. **Revisão:** as quatro fases do NIST SP 800-115 (planejamento, descoberta, ataque, relatório) foram **confirmadas** no PDF; DREAD (cinco fatores) e PASTA (sete etapas, centrada em risco) foram confirmados na Wikipedia.

**Objetivos de aprendizagem.** (1) Distinguir pentest, varredura de vulnerabilidades e *red team*; (2) conhecer fases e tipos de teste; (3) aplicar STRIDE sobre um diagrama de fluxo de dados; (4) listar e entender as táticas do ATT&CK; (5) usar o ATT&CK para mapear ataques e detecções.

---

### 1. Testes de penetração (9.13)

#### 1.1 Conceito

**Teste de penetração (*pentest*)** é a simulação **autorizada e controlada** de ataque para identificar e **explorar** vulnerabilidades, demonstrando o **impacto real**. Exige **escopo, regras de engajamento e autorização formal** por escrito (sem autorização, é crime). Normalmente produz um **relatório** com evidências, riscos e recomendações.

#### 1.2 Pentest × varredura × outros

| Atividade | Descrição |
|---|---|
| **Varredura/avaliação de vulnerabilidades** | Ferramenta automática identifica falhas conhecidas (`14`); **não** necessariamente as explora |
| **Teste de penetração** | Explora falhas, encadeia-as, valida impacto; combina ferramentas e análise manual |
| **Red team** | Simula adversário real, com objetivos amplos (inclusive engenharia social e física), testando a **detecção e resposta**; **blue team** defende; ***purple team*** integra ambos (de memória) |
| **Auditoria** | Verificação de conformidade com critérios |
| **Bug bounty** | Pesquisadores externos recebem recompensa por falhas reportadas |

#### 1.3 Tipos (verificado em fonte secundária)

| Tipo | Conhecimento prévio do testador |
|---|---|
| **Caixa-preta (*black-box*)** | Nenhum; simula atacante externo |
| **Caixa-cinza (*gray-box*)** | Parcial (por exemplo, contas de usuário comuns) |
| **Caixa-branca (*white-box*)** | Total (código, arquitetura, credenciais) |

Alvos: rede externa e interna, aplicações web e móveis, APIs, nuvem, Wi-Fi, IoT/OT, engenharia social, físico.

#### 1.4 Fases

A **Wikipedia** descreve sete etapas e **não** inclui planejamento explícito: reconhecimento; varredura; obtenção de acesso; manutenção de acesso; cobertura de rastros; relatório; remediação e novo teste (verificado). O **NIST SP 800-115** (2008) é referência de testes e avaliações de segurança; a seção 5.2.1 apresenta uma metodologia de **quatro fases** — **planejamento, descoberta, ataque e relatório** (a descoberta pode se repetir após o ataque) — **verificada no PDF**; uma nota do documento diz que é apenas um exemplo de agrupamento. Padrões e guias citados na fonte: **OSSTMM, PTES, NIST SP 800-115, ISSAF e OWASP Testing Guide** (verificado). Os modelos variam; o fluxo comum é: **planejamento e escopo → coleta de informações (reconhecimento) → varredura e enumeração → exploração → pós-exploração (persistência, movimentação lateral, elevação) → relatório → remediação e reteste**.

#### 1.5 Boas práticas e riscos

Escopo e janela definidos; contatos de emergência; backup antes dos testes; testes em produção com cuidado (risco de indisponibilidade); tratamento seguro de dados e evidências; relatório com severidade (CVSS, `14`) e priorização.

### 2. Modelagem de ameaças (9.14)

#### 2.1 Conceito

**Modelagem de ameaças (*threat modeling*)** é a análise **estruturada, feita no projeto**, para identificar ameaças, avaliar riscos e definir mitigações **antes** de implementar (*shift left*; `04`). Perguntas-guia (de memória): O que estamos construindo? O que pode dar errado? O que faremos a respeito? Fizemos um bom trabalho?

#### 2.2 Passos típicos

1. Definir escopo e **objetivos de segurança**.
2. **Decompor** o sistema (diagrama de fluxo de dados — DFD: processos, fluxos, depósitos de dados e entidades externas; **fronteiras de confiança**; verificado).
3. **Identificar ameaças** (STRIDE).
4. **Avaliar e priorizar** (risco, DREAD: *Damage, Reproducibility, Exploitability, Affected users, Discoverability*, notas de 1 a 10 — verificado em fonte secundária; ou CVSS).
5. **Mitigar** (controles) e **validar**; documentar e revisar.

#### 2.3 STRIDE (verificado)

Mnemônico de seis categorias, criado na Microsoft, cada uma associada à **propriedade violada**:

| Letra | Ameaça | Propriedade violada | Exemplo |
|---|---|---|---|
| **S** | *Spoofing* (falsificação de identidade) | Autenticidade | Usar credenciais roubadas |
| **T** | *Tampering* (adulteração) | Integridade | Alterar dados em trânsito ou em banco |
| **R** | *Repudiation* (repúdio) | Não repúdio | Negar ter feito uma operação sem log |
| **I** | *Information disclosure* (divulgação de informação) | Confidencialidade | Vazamento de dados |
| **D** | *Denial of service* (negação de serviço) | Disponibilidade | Esgotar recursos |
| **E** | *Elevation of privilege* (elevação de privilégio) | Autorização | Usuário comum virando administrador |

STRIDE é aplicado a **cada elemento do DFD** (processos, fluxos, depósitos, entidades), com mitigações típicas: autenticação (S), assinatura/*hash*/controle de acesso (T), *logs* e assinaturas (R), criptografia e controle de acesso (I), limitação de taxa e redundância (D), autorização e menor privilégio (E).

#### 2.4 Outras abordagens (de memória)

**DREAD** (priorização), **PASTA** (metodologia de **sete etapas centrada em risco**, verificada em fonte secundária), **LINDDUN** (privacidade), **árvores de ataque**, **Attack/Defense trees**, ATT&CK para mapear técnicas reais.

### 3. MITRE ATT&CK — Táticas (9.15)

#### 3.1 O que é

**MITRE ATT&CK** (*Adversarial Tactics, Techniques, and Common Knowledge*) é uma **base de conhecimento** pública de **comportamentos de adversários** observados no mundo real, organizada em **táticas** (o **objetivo** tático: o "porquê"), **técnicas** (o "como") e **subtécnicas**, além de grupos, *software* e mitigações. Há matrizes **Enterprise**, **Mobile** e **ICS** (de memória). **Táticas = colunas da matriz** (fases do objetivo do atacante); **técnicas = células**.

#### 3.2 Táticas do ATT&CK Enterprise — 14 táticas (referência principal) e a mudança para 15

**Decisão do usuário (2026-11-04):** ensinar as **14 táticas clássicas** (as de uso corrente em materiais de concurso) e registrar que a lista **passou a 15**. Na versão atual do ATT&CK (v19, de 28/04/2026, segundo a página de atualizações da MITRE e resumos de terceiros; a página consultada em 31/10/2026 exibia o banner "v20"), a tática **Defense Evasion** foi dividida em **Stealth** (TA0005) e **Defense Impairment** (TA0112).

Lista clássica, nesta ordem:

| # | Tática | Objetivo do atacante (resumo de memória) |
|---|---|---|
| 1 | **Reconnaissance** (Reconhecimento) | Coletar informações sobre o alvo |
| 2 | **Resource Development** (Desenvolvimento de recursos) | Preparar infraestrutura, contas, ferramentas |
| 3 | **Initial Access** (Acesso inicial) | Entrar na rede (*phishing*, exploração de serviço exposto) |
| 4 | **Execution** (Execução) | Executar código malicioso |
| 5 | **Persistence** (Persistência) | Manter acesso após reinício, troca de senha |
| 6 | **Privilege Escalation** (Escalada de privilégios) | Obter permissões mais altas |
| 7 | **Defense Evasion** (Evasão de defesas) | Evitar detecção e desativar defesas |
| 8 | **Credential Access** (Acesso a credenciais) | Roubar senhas, *tokens*, chaves |
| 9 | **Discovery** (Descoberta) | Mapear o ambiente interno |
| 10 | **Lateral Movement** (Movimentação lateral) | Mover-se entre sistemas |
| 11 | **Collection** (Coleta) | Reunir dados de interesse |
| 12 | **Command and Control** (Comando e controle) | Comunicar-se com sistemas comprometidos |
| 13 | **Exfiltration** (Exfiltração) | Retirar dados da rede |
| 14 | **Impact** (Impacto) | Interromper, destruir ou manipular (ransomware, *wiper*, DoS) |

**Nota — 15 táticas (v19 em diante):** *Defense Evasion* é substituída por **Stealth** (furtividade: esconder-se em atividade aparentemente legítima) e **Defense Impairment** (comprometimento de defesas: desativar ou degradar controles); os demais nomes permanecem. As **provas catalogadas (2018 e 2023) são anteriores à mudança**; uma prova futura pode seguir a lista antiga (14) ou a nova (15). Priorize o **significado** de cada tática e leia as alternativas com atenção. Mapeamentos antigos que citam TA0005 como "Defense Evasion" precisam ser reavaliados.

#### 3.3 Ordem e uso

As táticas seguem, aproximadamente, a **progressão de uma intrusão**, mas **não são lineares**: o atacante pode repetir, pular ou combinar táticas. Usos do ATT&CK: **mapear** incidentes e inteligência (`07`); **planejar** testes (red team, `§1`); **avaliar cobertura** de detecção (SIEM/EDR, `14`); **comunicar** com vocabulário comum; **exercícios** de simulação de adversário.

#### 3.4 Exemplo (didático) de mapeamento

*Phishing* com anexo (Initial Access) → macro executa script (Execution) → tarefa agendada (Persistence) → coleta de credenciais (Credential Access) → varredura interna (Discovery) → acesso remoto a outro servidor (Lateral Movement) → compactação de dados (Collection) → envio ao servidor externo (Exfiltration) → criptografia dos arquivos (Impact).

### 4. Comparações conceituais

| A | B | Diferença |
|---|---|---|
| Pentest | Varredura | Explora e valida impacto × identifica falhas conhecidas |
| Pentest | Red team | Foco em vulnerabilidades do escopo × simulação de adversário e teste de detecção |
| Black-box | White-box | Sem conhecimento × conhecimento total |
| Modelagem de ameaças | Pentest | Preventiva, no projeto × valida o sistema construído |
| STRIDE | DREAD | Categorizar ameaças × priorizá-las |
| Tática | Técnica (ATT&CK) | Objetivo ("por quê") × meio ("como") |
| Kill chain | ATT&CK | 7 fases lineares × matriz de táticas e técnicas |

### 5. Atenção para a prova

*Inferência técnica e recomendação pedagógica; sem atribuir frequência à banca.*

- Memorizar **STRIDE com a propriedade violada** de cada letra; saber o **significado** das táticas do ATT&CK e distinguir **tática × técnica**.
- Pentest exige **autorização**; difere de varredura automática.
- *Evidência histórica (amostra de duas provas):* a Prova 6 de 2023 trouxe **Q40** (táticas do MITRE ATT&CK; gabarito E, de terceiros, não validado). Pentest (9.13) e STRIDE (9.14) não tiveram questão identificada nas duas provas. Duas provas não permitem inferir frequência.

### 6. Síntese

Pentest = ataque simulado autorizado (caixa-preta, cinza, branca; fases do reconhecimento ao relatório). STRIDE = Spoofing, Tampering, Repudiation, Information disclosure, DoS, Elevation of privilege, ligados a propriedades; aplicado a DFD. ATT&CK Enterprise: 15 táticas na página atual (14 na lista anterior), de Reconnaissance a Impact.

### 7. Pontos para a futura produção de questões (registro)

Identificar a categoria STRIDE de um cenário; associar comportamento à tática; tática×técnica; tipos de pentest; pentest×varredura; diferenças de versão do ATT&CK.

### 8. Referências

- MITRE ATT&CK, *Enterprise Tactics* (attack.mitre.org/tactics/enterprise/) — **verificada em 2026-10-31** (15 táticas; v20). Wikipedia, "STRIDE", "Data-flow diagram" e "Penetration test" — **verificadas**. NIST SP 800-115 (PDF) — **lido em 2026-10-31** (sumário e seção 5.2.1).
- Wikipedia, "DREAD" e "Threat model" (PASTA) — **verificadas**. Descrições das táticas, LINDDUN, red/blue/purple team — **de memória**.
- Edital Transpetro nº 04/2026.4, Anexo IV, itens 9.13 a 9.15. Prova Transpetro 2023, Prova 6, Q40 (gabarito de terceiros, não validado).


---

## Gestão de Riscos (ISO 31000), Continuidade de Negócios (ISO 22301) e Lei Sarbanes-Oxley

**Módulo:** M09 — Segurança da informação
**Texto oficial (Anexo IV):** 9.16 "Gestão de riscos (ISO 31000), Gestão de Continuidade de Negócios (ISO 22301) e Lei Sarbannes-Oxley".
**Escopo:** A. Governança de TI e riscos corporativos (COBIT, ISO 38500, gestão de riscos): Módulo 4. Riscos de projetos: Módulo 2 (`PMBOK`). Resposta a incidentes: `06`. Controles: `11`.
**Status:** `VALIDADO` (aprovado pelo usuário em 2026-10-31, com ressalvas: interpretação do item 9.1 e escolha das versões do NIST SP 800-61 e do MITRE ATT&CK a confirmar; fontes de memória listadas em `docs/qualidade/relatorio-producao-modulo-09.md`). **Verificados** (Wikipedia, 2026-10-31): ISO 31000:2018 (processo e estrutura), ISO 22301 (SGCN; 2ª edição, 2019), Lei Sarbanes-Oxley (2002; seção 302 e 404 por resumo; PCAOB). **Revisão:** BIA, RTO, RPO e MTPD **confirmados** (Wikipedia, "Business continuity planning"); a lista de **princípios** e a etapa "**registro e relato**" da ISO 31000 **não constam** do artigo lido; aplicabilidade a empresas estrangeiras (ADRs) não confirmada; conteúdo detalhado das seções (iso.org bloqueado, HTTP 403).

**Objetivos de aprendizagem.** (1) Descrever o processo de gestão de riscos da ISO 31000; (2) aplicar análise qualitativa e quantitativa; (3) tratar riscos; (4) explicar a gestão de continuidade (BIA, RTO, RPO, planos); (5) relacionar a Lei Sarbanes-Oxley a controles internos e TI.

---

### 1. Gestão de riscos — ISO 31000:2018

#### 1.1 Conceito e estrutura

**Risco** (ISO 31000): **efeito da incerteza sobre os objetivos** (definição geral, de memória). A **ISO 31000:2018** (revisada e confirmada em 2023, segundo a fonte secundária) é uma norma de **diretrizes**, **não certificável**, aplicável a qualquer organização e a qualquer tipo de risco. Tem três componentes: **princípios**, **estrutura (*framework*)** e **processo**.

| Componente | Conteúdo |
|---|---|
| **Princípios** | Criar e proteger valor; integrada, estruturada, personalizada, inclusiva, dinâmica; baseada na melhor informação disponível; considera fatores humanos e culturais; melhoria contínua (de memória, **não confirmados**) |
| **Estrutura** | Liderança e comprometimento; integração; concepção; implementação; avaliação; melhoria — ciclo tipo **PDCA** (confirmado) |
| **Processo** | Seção 1.2 |

#### 1.2 Processo de gestão de riscos (confirmado)

| Etapa | Conteúdo |
|---|---|
| **Comunicação e consulta** | Diálogo contínuo com as partes interessadas |
| **Escopo, contexto e critérios** | Definir objetivos, contexto interno e externo, **critérios de risco** (apetite, escalas de probabilidade e impacto) |
| **Avaliação de riscos** | Engloba **identificação**, **análise** e **ponderação (avaliação)** |
| **Tratamento de riscos** | Selecionar e implementar opções |
| **Monitoramento e análise crítica** | Acompanhar riscos, controles e o processo |
| **Registro e relato** | Documentar e comunicar (de memória; **não confirmado** na fonte) |

#### 1.3 Técnicas

| Etapa | Técnicas |
|---|---|
| **Identificação** | *Brainstorming*, entrevistas, listas de verificação, análise de cenários, SWOT, Delphi, histórico de incidentes, modelagem de ameaças (`08`) |
| **Análise qualitativa** | Matriz de **probabilidade × impacto** (escalas: baixa/média/alta) |
| **Análise quantitativa** | **Expectativa de perda**: **SLE** (perda por evento = valor do ativo × fator de exposição), **ARO** (taxa anual de ocorrência), **ALE = SLE × ARO**; simulação de Monte Carlo (de memória) |
| **Avaliação** | Comparação com critérios para priorizar |

Exemplo (didático e numérico): ativo de R$ 500.000, fator de exposição 40% → SLE = R$ 200.000; ocorrência estimada de 0,5 por ano → ALE = R$ 100.000/ano. Um controle que custa R$ 30.000/ano e reduz o ALE em R$ 70.000 é vantajoso.

#### 1.4 Tratamento de riscos (opções usuais)

| Opção | Descrição | Exemplo |
|---|---|---|
| **Mitigar (reduzir)** | Reduzir probabilidade ou impacto | MFA, backup |
| **Evitar** | Eliminar a atividade ou o fator de risco | Descontinuar um serviço |
| **Transferir (compartilhar)** | Repassar parte do risco | Seguro, terceirização contratual |
| **Aceitar (reter)** | Aceitar conscientemente, dentro do apetite | Risco baixo, custo do controle maior que a perda |
| **Explorar (oportunidade)** | Para riscos positivos (de memória) | — |

Após o tratamento, resta o **risco residual**; **risco inerente** é o risco antes dos controles. **Apetite** (quanto risco a organização busca), **tolerância** (variação aceitável) e **capacidade** são conceitos relacionados. Gestão de riscos corporativos: COSO ERM (de memória; Módulo 4). Segurança da informação: ISO/IEC 27005 (gestão de riscos de SI; de memória) e `11`.

### 2. Gestão de continuidade de negócios — ISO 22301

#### 2.1 Conceito

**GCN/BCM** é a capacidade de **continuar entregando produtos e serviços críticos** em níveis aceitáveis durante e após **incidentes disruptivos**. A **ISO 22301** especifica requisitos de um **Sistema de Gestão de Continuidade de Negócios (SGCN)** — norma **certificável**; a **2ª edição é de 2019** (confirmado). Diferenças: **continuidade** foca processos críticos; **resposta a incidentes** (`06`) trata o incidente de segurança; **recuperação de desastres (DR)** foca a recuperação de TI.

#### 2.2 Conceitos centrais (BIA, RTO, RPO e MTPD verificados na Wikipedia; demais de memória)

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

#### 2.3 Estratégias de recuperação (de memória)

| Estratégia | Descrição |
|---|---|
| **Site frio (*cold site*)** | Local com infraestrutura básica; recuperação lenta e barata |
| **Site morno (*warm site*)** | Equipamentos instalados, dados parcialmente atualizados |
| **Site quente (*hot site*)** | Réplica pronta, dados quase em tempo real; mais cara |
| **Redundância ativa-ativa / nuvem / DRaaS** | Alta disponibilidade, recuperação como serviço |
| **Backup e réplica** | RPO depende da frequência (`14`) |
| **Trabalho remoto, fornecedores alternativos** | Continuidade de processos e pessoas |

#### 2.4 Ciclo e testes

Política e escopo → BIA e avaliação de riscos → estratégias → planos → **exercícios e testes** (mesa, simulação, falha real controlada) → manutenção e melhoria contínua (PDCA). Planos não testados tendem a falhar.

### 3. Lei Sarbanes-Oxley (SOX)

#### 3.1 Contexto e conteúdo

Lei federal dos EUA de **30 de julho de 2002** (Pub. L. 107-204), editada após fraudes contábeis de grandes empresas (confirmado: ano e identificação). Objetivo: **proteger investidores**, aumentando a **precisão e a confiabilidade** das informações financeiras divulgadas por empresas de capital aberto, com **responsabilização dos executivos** e criação do **PCAOB** (órgão que supervisiona as auditorias de empresas abertas; confirmado).

| Seção | Conteúdo (títulos e resumo; seções 302, 404 e 906 confirmadas apenas por título e resumo) |
|---|---|
| **302** | **CEO e CFO certificam** os relatórios periódicos e sua responsabilidade pelos **controles internos** |
| **404** | A administração avalia a **eficácia dos controles internos sobre relatórios financeiros**, e o **auditor** atesta |
| **906** | **Responsabilidade criminal** de executivos por certificação falsa |
| **PCAOB** | Supervisão e padrões de auditoria |

#### 3.2 Relação com TI e segurança

Os **controles internos sobre relatórios financeiros** dependem de **sistemas de TI**: por isso a SOX exige **controles gerais de TI (ITGC)**: **gestão de acesso**, **segregação de funções**, **gestão de mudanças**, **operações e backup**, **integridade dos dados e trilhas de auditoria**. Referenciais de apoio: **COSO** (controle interno) e **COBIT** (governança de TI; Módulo 4) — de memória.

#### 3.3 Aplicabilidade

Aplica-se a empresas abertas dos EUA (confirmado). A aplicação a **empresas estrangeiras com valores mobiliários registrados nos EUA** (por exemplo, ADRs) é comumente citada na literatura, mas **não foi confirmada** na fonte lida; pode ser relevante a organizações brasileiras com ações listadas nos EUA. **Não** é lei brasileira; no Brasil, a LGPD (Módulo 4) e normas da CVM tratam de temas correlatos (de memória).

### 4. Comparações conceituais

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

### 5. Atenção para a prova

*Inferência técnica e recomendação pedagógica; sem atribuir frequência à banca.*

- Memorizar as **etapas do processo da ISO 31000** e as **opções de tratamento**; distinguir **RTO e RPO**; associar **SOX** a **controles internos financeiros** e responsabilização dos executivos.
- O item 9.16 **não teve questão** identificada nas duas provas catalogadas; ISO 31000, ISO 22301 e SOX não aparecem nas questões analisadas. Duas provas não permitem inferir frequência.

### 6. Síntese

ISO 31000: princípios, estrutura e processo (comunicação; contexto; avaliação [identificação, análise, ponderação]; tratamento; monitoramento; registro). Tratamento: mitigar, evitar, transferir, aceitar. ISO 22301: SGCN, BIA, RTO, RPO, planos e testes. SOX (2002): controles internos e responsabilidade dos executivos, PCAOB, ITGC.

### 7. Pontos para a futura produção de questões (registro)

Etapas do processo; opção de tratamento por cenário; ALE; RTO×RPO; sites de recuperação; objetivo e seções da SOX.

### 8. Referências

- Wikipedia, "ISO 31000" e "ISO 22301" — **verificadas em 2026-10-31** (processo e estrutura; SGCN e edição 2019). Wikipedia, "Sarbanes–Oxley Act" — **verificada em parte** (identificação, PCAOB; seções por resumo). iso.org — HTTP 403, normas não lidas.
- Wikipedia, "Business continuity planning" — **verificada** (BIA, RTO, RPO, MTPD). Princípios da ISO 31000, SLE/ALE, COSO, ISO 27005, aplicabilidade da SOX — **de memória, não verificados**.
- Edital Transpetro nº 04/2026.4, Anexo IV, item 9.16.


---

## Políticas de Segurança da Informação e Classificação de Informações

**Módulo:** M09 — Segurança da informação
**Textos oficiais (Anexo IV):** 9.17 "Políticas de Segurança de Informação"; 9.18 "Classificação de informações".
**Escopo:** A. Controles da ISO 27002 que tratam de políticas e classificação: `11`. Governança de TI: Módulo 4.
**Status:** `VALIDADO` (aprovado pelo usuário em 2026-10-31, com ressalvas: interpretação do item 9.1 e escolha das versões do NIST SP 800-61 e do MITRE ATT&CK a confirmar; fontes de memória listadas em `docs/qualidade/relatorio-producao-modulo-09.md`). Conteúdo de memória (ISO/IEC 27001/27002, Lei de Acesso à Informação, práticas usuais); **não verificado online nesta etapa**.

**Objetivos de aprendizagem.** (1) Estruturar documentos de segurança (política, norma, procedimento, diretriz); (2) definir conteúdo e ciclo de vida da política; (3) classificar informações por criticidade; (4) aplicar rotulagem, tratamento e descarte; (5) distinguir classificação e criticidade de ativos.

---

### 1. Políticas de segurança da informação (9.17)

#### 1.1 Conceito

**Política de segurança da informação (PSI)** é o documento, aprovado pela **alta direção**, que declara o **compromisso**, os **objetivos**, os **princípios** e as **responsabilidades** da organização com a segurança da informação, em linhas gerais, alinhado aos objetivos de negócio e aos requisitos legais. Segundo a ISO/IEC 27001/27002, a política é a base do SGSI e deve ser **comunicada**, **revisada em intervalos planejados** e **mantida atualizada** (de memória).

#### 1.2 Hierarquia documental

| Nível | Conteúdo | Exemplo |
|---|---|---|
| **Política** (estratégico) | **O quê e por quê**; diretrizes gerais; aprovada pela direção | "A informação deve ser protegida de acordo com sua classificação" |
| **Normas / padrões** (tático) | **Requisitos obrigatórios** específicos | Norma de senhas; norma de uso de nuvem |
| **Procedimentos** (operacional) | **Como fazer**, passo a passo | Procedimento de concessão de acesso |
| **Diretrizes / guias** | **Recomendações** não obrigatórias | Boas práticas de trabalho remoto |
| **Registros / evidências** | Formulários e *logs* que comprovam a execução | Termo de ciência assinado |

#### 1.3 Conteúdo típico da PSI

Objetivos e escopo; definições; princípios (CID); **papéis e responsabilidades** (direção, gestor de segurança/CISO, comitê, donos da informação, usuários, TI); **diretrizes** (controle de acesso, uso aceitável, classificação, mídias, nuvem, trabalho remoto, dispositivos móveis, criptografia, backup, gestão de incidentes, continuidade, conformidade); **sanções**; tratamento de **exceções**; periodicidade de revisão; referências legais e normativas.

#### 1.4 Políticas específicas (temáticas)

Uso aceitável; controle de acesso; senhas; e-mail e internet; mesa e tela limpas; BYOD e dispositivos móveis (`05`); trabalho remoto; criptografia (`12`); backup (`14`); gestão de incidentes (`06`); desenvolvimento seguro (`04`); relacionamento com fornecedores; privacidade e proteção de dados (LGPD — Módulo 4).

#### 1.5 Ciclo de vida e boas práticas

1. **Elaborar** com base em riscos, legislação e negócio.
2. **Aprovar** pela alta direção.
3. **Divulgar** e **treinar**; coletar **ciência** formal.
4. **Implementar** com controles e procedimentos.
5. **Monitorar** a conformidade (auditorias, indicadores).
6. **Revisar** periodicamente ou após mudanças relevantes (incidentes, tecnologia, legislação).

Fatores críticos: **apoio da direção**, linguagem clara, aplicabilidade, **consequências** definidas, **comunicação** contínua, exceções controladas. **Responsabilidade:** o usuário responde pelo uso; a direção responde pela política.

### 2. Classificação de informações (9.18)

#### 2.1 Conceito e finalidade

**Classificar a informação** é atribuir-lhe um **nível** conforme sua **criticidade/sensibilidade** (impacto da perda de confidencialidade, integridade ou disponibilidade), para aplicar **controles proporcionais**. Evita proteção excessiva (custo) ou insuficiente (risco). Orienta rotulagem, acesso, armazenamento, transmissão, retenção e descarte.

#### 2.2 Níveis (exemplos usuais; variam por organização)

| Nível (exemplo) | Descrição | Exemplos |
|---|---|---|
| **Pública** | Divulgação não causa dano | Material institucional, vagas |
| **Interna (uso interno)** | Para o público interno; divulgação externa causa dano limitado | Comunicados, procedimentos |
| **Confidencial** | Acesso restrito a grupos autorizados; dano relevante se divulgada | Contratos, dados de clientes, planos |
| **Restrita / secreta** | Acesso a pessoas nominais; dano grave | Estratégia corporativa, segredos comerciais, credenciais |

*Os nomes e o número de níveis variam; outros critérios consideram integridade e disponibilidade (por exemplo, "crítica").* Na **administração pública federal**, a **Lei de Acesso à Informação (Lei 12.527/2011)** prevê classificação em **reservada, secreta e ultrassecreta**, com prazos de restrição (de memória; **não verificado**), e a LGPD define **dados pessoais** e **sensíveis** (Módulo 4).

#### 2.3 Responsabilidades e ciclo

| Papel | Atribuição |
|---|---|
| **Proprietário (dono) da informação** | **Classifica**, define quem acessa, revisa |
| **Custodiante (guardião)** | Aplica os controles (TI) |
| **Usuário** | Trata conforme a classificação |
| **Gestor de segurança** | Define o processo e apoia |

Etapas: **inventariar** ativos de informação → **identificar o dono** → **classificar** → **rotular** (marcação em documentos, metadados, cabeçalhos, nomes de arquivos) → **tratar** (acesso, armazenamento, transmissão, impressão, criptografia, compartilhamento) → **reclassificar** quando o valor mudar → **descartar** com segurança (destruição de mídia, `02`).

#### 2.4 Tratamento por nível (exemplo)

| Controle | Pública | Interna | Confidencial | Restrita |
|---|---|---|---|---|
| Rotulagem | Opcional | Sim | Obrigatória | Obrigatória |
| Criptografia em trânsito | Não exigida | Recomendada | Obrigatória | Obrigatória + em repouso |
| Compartilhamento externo | Livre | Com autorização | Acordo de confidencialidade (NDA) | Em regra, proibido |
| Descarte | Comum | Triturar | Destruição segura | Destruição certificada |

#### 2.5 Classificação × outros conceitos

| Conceito | Descrição |
|---|---|
| **Classificação da informação** | Nível de proteção da **informação** |
| **Criticidade do ativo** | Importância do **ativo** (sistema) para o negócio; define prioridades de continuidade e riscos (`09`) |
| **Categorização de dados pessoais** | Critério legal (pessoais, sensíveis) — Módulo 4 |
| **Prevenção de perda de dados (DLP)** | Ferramenta que usa a classificação para impedir vazamentos (`14`) |
| **Rotulagem automática** | Aplicação de rótulos por ferramentas (de memória) |

### 3. Exemplo (didático)

A empresa publica uma PSI aprovada pela diretoria, com normas de acesso e de uso de nuvem. Os dados de manutenção são classificados como "interna"; o plano de investimentos como "restrita". O arquivo "Plano 2027" recebe o rótulo "Restrita"; o DLP bloqueia seu envio para e-mail externo; ao final do ciclo, o dono revisa a classificação e o custodiante realiza o descarte seguro da mídia.

### 4. Comparações conceituais

| A | B | Diferença |
|---|---|---|
| Política | Norma | Diretriz geral da direção × requisito específico obrigatório |
| Norma | Procedimento | O que é exigido × como executar |
| Procedimento | Diretriz | Obrigatório e detalhado × recomendação |
| Dono da informação | Custodiante | Classifica e decide acesso × implementa controles |
| Classificação | Criticidade | Sensibilidade da informação × importância do ativo |
| Rotulagem | Classificação | Marcação visível × decisão de nível |

### 5. Atenção para a prova

*Inferência técnica e recomendação pedagógica; sem atribuir frequência à banca.*

- A classificação é feita pelo **dono da informação** e orienta controles **proporcionais**; níveis e nomes variam: atenção ao critério do enunciado.
- A PSI é aprovada pela **alta direção**, comunicada e revisada periodicamente.
- *Evidência histórica (amostra de duas provas):* a Prova 15 de 2018 trouxe **Q45** (classificação da informação; gabarito E, de terceiros, não validado). Políticas (9.17) não tiveram questão identificada nas duas provas. Duas provas não permitem inferir frequência.

### 6. Síntese

PSI: declaração da direção; hierarquia política–norma–procedimento–diretriz; papéis; ciclo (elaborar, aprovar, divulgar, implementar, monitorar, revisar). Classificação: níveis (pública, interna, confidencial, restrita), dono × custodiante, rotulagem, tratamento e descarte proporcionais.

### 7. Pontos para a futura produção de questões (registro)

Hierarquia documental; responsabilidade pela classificação; critérios de classificação; tratamento por nível; relação com DLP e LGPD.

### 8. Referências

- ISO/IEC 27001 (política) e 27002 (políticas, classificação e rotulagem) — **de memória**; Lei 12.527/2011 (LAI) — **de memória, não verificada**.
- Edital Transpetro nº 04/2026.4, Anexo IV, itens 9.17 e 9.18. Prova Transpetro 2018, Prova 15, Q45 (gabarito de terceiros, não validado).


---

## Norma ISO/IEC 27002

**Módulo:** M09 — Segurança da informação
**Texto oficial (Anexo IV):** 9.19 "Norma ISO 27002, Criptografia, certificação digital e assinatura digital" (este arquivo trata a **ISO 27002**; o restante do item está em `12`).
**Escopo:** A. O edital não indica a edição (2013 ou 2022). Relaciona-se ao M04 (item 4.6) e a `01`, `09` e `10`.
**Status:** `VALIDADO` (aprovado pelo usuário em 2026-10-31, com ressalvas: interpretação do item 9.1 e escolha das versões do NIST SP 800-61 e do MITRE ATT&CK a confirmar; fontes de memória listadas em `docs/qualidade/relatorio-producao-modulo-09.md`). **Confirmado** (Wikipedia, 2026-10-31): a edição de **2022 é a 3ª** (março de 2022), a de **2013 é a 2ª**; **quatro temas** em 2022; a edição de 2013 tem **14 capítulos**. **Não confirmados** (o artigo da Wikipedia, lido por inteiro, não traz esses números): número de controles (93 em 2022; 114 em 2013), os 11 controles novos e a lista dos controles (iso.org bloqueado, HTTP 403); a lista de controles abaixo é de memória.

**Objetivos de aprendizagem.** (1) Situar a ISO 27002 entre as normas da família 27000; (2) conhecer a estrutura das edições 2013 e 2022; (3) identificar controles típicos; (4) distinguir 27001 e 27002; (5) relacionar controles a cenários.

---

### 1. Posição na família ISO/IEC 27000

| Norma | Papel (de memória, exceto onde indicado) |
|---|---|
| **ISO/IEC 27000** | Visão geral e vocabulário |
| **ISO/IEC 27001** | **Requisitos** de um **SGSI**; **certificável**; o Anexo A lista controles de referência (confirmada: edições 2005, 2013 e 2022) |
| **ISO/IEC 27002** | **Código de prática**: **controles** de segurança da informação e **orientações de implementação**; **não certificável** |
| **ISO/IEC 27005** | Gestão de riscos de segurança da informação |
| **ISO/IEC 27701** | Extensão de privacidade (SGPI) |
| Outras (27017 nuvem, 27018 PII em nuvem, 27035 incidentes, 27799 saúde) | Aplicações específicas |

**27001 × 27002:** a 27001 define **o sistema de gestão** (o que o SGSI deve ter, passível de auditoria e certificação); a 27002 detalha **como implementar os controles** (diretrizes). Uma organização é **certificada na 27001**, **não na 27002**.

### 2. Edições e estrutura

#### 2.1 ISO/IEC 27002:2013 (2ª edição)

**14 capítulos de controles** (confirmado: 14 capítulos; a lista a seguir é de memória): políticas de segurança; organização da segurança; segurança em recursos humanos; gestão de ativos; controle de acesso; criptografia; segurança física e do ambiente; segurança nas operações; segurança nas comunicações; aquisição, desenvolvimento e manutenção de sistemas; relacionamento na cadeia de suprimento; gestão de incidentes; aspectos de segurança na gestão da continuidade do negócio; conformidade. Total de **114 controles** (memória; não confirmado). No Brasil, a tradução é a **ABNT NBR ISO/IEC 27002** (de memória).

#### 2.2 ISO/IEC 27002:2022 (3ª edição)

**Quatro temas** (confirmado): **organizacionais**, **pessoas**, **físicos** e **tecnológicos**. A edição de 2022 reorganizou os controles em **93** (memória; não confirmado), com **atributos** para filtragem (tipo de controle, propriedades de segurança, conceitos de cibersegurança, capacidades operacionais, domínios) e **11 controles novos** (memória; não confirmado), entre eles **inteligência de ameaças**, **segurança da informação para uso de serviços em nuvem**, **prontidão de TIC para a continuidade**, **monitoramento de atividades**, **filtragem da web**, **codificação segura**, **prevenção de vazamento de dados**, **mascaramento de dados**, **gestão de configuração**, **exclusão de informações** e **monitoramento da segurança física** (lista de memória, sujeita a conferência).

| Tema (2022) | Conteúdo (exemplos, de memória) |
|---|---|
| **Organizacionais** | Políticas, papéis, segregação de funções, gestão de ativos, classificação, controle de acesso, fornecedores, nuvem, incidentes, continuidade, conformidade, inteligência de ameaças |
| **Pessoas** | Seleção, termos e condições, conscientização e treinamento, processo disciplinar, desligamento, trabalho remoto, relato de eventos |
| **Físicos** | Perímetros, entrada física, escritórios, monitoramento físico, equipamentos, cabeamento, descarte seguro |
| **Tecnológicos** | Endpoints, acesso privilegiado, autenticação segura, gestão de capacidade, **proteção contra *malware***, vulnerabilidades técnicas, configuração, backup, redundância, registro (*logging*), monitoramento, segurança de redes, criptografia, desenvolvimento seguro, testes, DLP, filtragem web |

### 3. Controles de interesse para a prova (de memória)

| Tema | Controle | Ideia |
|---|---|---|
| **Proteção contra *malware*** (tecnológico em 2022; "controles contra códigos maliciosos" em 2013) | Detecção, prevenção e recuperação, combinadas com conscientização do usuário | Antivírus/EDR, filtros, atualização, conscientização |
| **Controle de acesso** | Política de controle de acesso, acesso às redes e serviços, gestão de identidades, autenticação, direitos de acesso, **acesso privilegiado** restrito | Princípio do **menor privilégio** e da **necessidade de conhecer** |
| **Segurança de redes** | Segregação, controles de rede, serviços de rede, filtragem | Redes segmentadas; acesso à rede apenas a autorizados |
| **Backup** | Cópias de informações, software e sistemas, com testes | Regra 3-2-1 (`14`) |
| **Registro e monitoramento** | Logs, relógios sincronizados, análise | SIEM (`14`) |
| **Gestão de vulnerabilidades técnicas** | Identificar e tratar | `14` |
| **Criptografia** | Política de uso e gestão de chaves | `12` |
| **Gestão de incidentes** | Planejar, responder, aprender | `06` |
| **Continuidade** | Continuidade e prontidão de TIC | `09` |
| **Classificação e rotulagem** | `10` |
| **Segurança em RH** | Antes, durante e no encerramento do vínculo | Termos de confidencialidade, treinamento |
| **Fornecedores** | Acordos, monitoramento de serviços | Cadeia de suprimentos |

### 4. Como usar a norma

1. **Avaliar riscos** (ISO 27005/31000; `09`) e **selecionar controles** necessários.
2. Justificar inclusões e exclusões na **Declaração de Aplicabilidade (SoA)** (documento da ISO 27001; de memória).
3. Implementar conforme as **orientações** da 27002, adaptando ao contexto.
4. Medir eficácia, auditar e melhorar (PDCA).

A norma é **genérica e independente de tecnologia**; os controles são **de referência**, não exaustivos.

### 5. Comparações conceituais

| A | B | Diferença |
|---|---|---|
| 27001 | 27002 | Requisitos do SGSI, certificável × controles e orientações, não certificável |
| 27002:2013 | 27002:2022 | 14 capítulos × 4 temas e atributos |
| Controle | Requisito | Medida de tratamento do risco × exigência do sistema de gestão |
| ISO 27002 | ISO 31000 | Controles de SI × gestão de riscos geral |
| ISO 27002 | NIST CSF | Norma internacional de controles × estrutura de referência de funções (de memória) |

### 6. Atenção para a prova

*Inferência técnica e recomendação pedagógica; sem atribuir frequência à banca.*

- **27001 certifica; 27002 orienta controles.** Identifique o **controle** descrito (malware, acesso à rede) e **não se prenda ao número do controle**, que muda entre edições.
- *Evidência histórica (amostra de duas provas):* Prova 6 de 2023 — **Q44** (ISO 27002: controle contra *malware*; gabarito A). Prova 15 de 2018 — **Q46** (ISO 27002: controle de acesso à rede; gabarito D). Gabaritos de terceiros, não validados. Duas provas não permitem inferir frequência.

### 7. Síntese

Família 27000: 27001 (requisitos, certificável) e 27002 (controles). 2013: 14 capítulos. 2022: quatro temas (organizacionais, pessoas, físicos, tecnológicos), controles com atributos. Seleção de controles por riscos; SoA.

### 8. Pontos para a futura produção de questões (registro)

27001×27002; temas de 2022; associar descrição a controle; edição considerada; seleção por risco.

### 9. Referências

- Wikipedia, "ISO/IEC 27002" — **verificada em 2026-10-31** (edições 2013 e 2022; 14 capítulos; quatro temas). Wikipedia, "ISO/IEC 27001" — **verificada**. iso.org — HTTP 403; textos das normas **não lidos**.
- 114 e 93 controles, 11 novos, lista de controles — **de memória, não confirmados**.
- Edital Transpetro nº 04/2026.4, Anexo IV, item 9.19. Provas: Transpetro 2023, Prova 6, Q44; Transpetro 2018, Prova 15, Q46 (gabaritos de terceiros, não validados).


---

## Criptografia, Certificação Digital e Assinatura Digital

**Módulo:** M09 — Segurança da informação
**Texto oficial (Anexo IV):** 9.19 "Norma ISO 27002, Criptografia, certificação digital e assinatura digital" (este arquivo trata **criptografia, certificação digital e assinatura digital**).
**Escopo:** A. Relaciona-se a `05` (VPN, SSO), `11` e ao M04 (item 4.6).
**Status:** `VALIDADO` (aprovado pelo usuário em 2026-10-31, com ressalvas: interpretação do item 9.1 e escolha das versões do NIST SP 800-61 e do MITRE ATT&CK a confirmar; fontes de memória listadas em `docs/qualidade/relatorio-producao-modulo-09.md`). **Verificados** (2026-10-31): X.509 (RFC 5280: certificado vincula chave pública a sujeito, assinado por AC confiável); ICP-Brasil (gov.br/ITI: o ITI exerce o papel de **AC-Raiz**; modelo de **raiz única**). **Revisão:** MP 2.200-2/2001 (arts. 1º, 5º, 10 e 13) lida no Planalto; assinatura digital (*hash* assinado e verificação com a chave pública) e criptossistema híbrido/envelope (chave simétrica cifrada com a chave pública do destinatário) confirmados na Wikipedia. **Não confirmados:** SHA256withRSA, tamanhos de chave, algoritmos (AES, RSA, ECC, SHA-2) — de memória.

**Objetivos de aprendizagem.** (1) Distinguir criptografia simétrica, assimétrica, *hash* e criptografia híbrida; (2) explicar assinatura digital e envelope digital; (3) descrever certificado digital e ICP; (4) conhecer a ICP-Brasil; (5) reconhecer algoritmos e boas práticas.

---

### 1. Conceitos

**Criptografia** transforma dados legíveis (**texto claro**) em ilegíveis (**texto cifrado**) por meio de um **algoritmo** e uma **chave**; objetivos: **confidencialidade**, **integridade**, **autenticidade** e **não repúdio** (conforme o mecanismo). Princípio de Kerckhoffs (de memória): a segurança deve depender da **chave**, não do segredo do algoritmo. **Criptoanálise** estuda a quebra de cifras.

### 2. Tipos de criptografia

#### 2.1 Simétrica (chave secreta)

**Mesma chave** para cifrar e decifrar. **Vantagens:** rápida; adequada a grandes volumes. **Desvantagens:** **distribuição segura da chave**; número de chaves cresce com o número de pares (n(n−1)/2). Algoritmos (de memória): **AES** (padrão atual; blocos de 128 bits; chaves de 128, 192 e 256), 3DES (legado), ChaCha20. Modos de operação de cifra de bloco: ECB (inseguro por revelar padrões), CBC, CTR, **GCM** (autenticado).

#### 2.2 Assimétrica (chave pública)

**Par de chaves**: **pública** (divulgada) e **privada** (secreta); o que uma cifra, a outra decifra. **Vantagens:** resolve a distribuição de chaves; permite **assinatura digital**. **Desvantagens:** **lenta**, usada para pequenos dados e para trocar chaves. Algoritmos (de memória): **RSA**, **ECC** (curvas elípticas, ECDSA, ECDH), Diffie-Hellman (acordo de chaves), DSA.

| Uso do par | Cifra com | Decifra com | Garante |
|---|---|---|---|
| **Confidencialidade** | Chave **pública do destinatário** | Chave **privada do destinatário** | Só o destinatário lê |
| **Assinatura (autenticidade e não repúdio)** | Chave **privada do signatário** (sobre o *hash*) | Chave **pública do signatário** | Origem e integridade |

#### 2.3 Função de *hash* (resumo criptográfico)

Função **unidirecional** que gera um **resumo de tamanho fixo**; pequena mudança na entrada altera muito o resultado (efeito avalanche). Propriedades: **resistência a pré-imagem**, **a segunda pré-imagem** e **a colisões** (de memória). Algoritmos: **SHA-2** (SHA-256, SHA-512) e **SHA-3**; **MD5 e SHA-1 estão obsoletos** para segurança. Usos: **integridade**, assinatura digital, armazenamento de senhas (com **sal** e funções lentas: bcrypt, scrypt, Argon2, PBKDF2). **HMAC:** *hash* com chave, garante integridade e autenticidade da mensagem. *Hash* **não é criptografia reversível**.

#### 2.4 Criptografia híbrida e envelope digital

Combina as duas: usa **chave simétrica de sessão** (rápida) para cifrar os dados e **criptografia assimétrica** para proteger essa chave.

**Envelope digital** (a Wikipedia usa *envelope encryption* para a cifragem com criptossistema híbrido e redireciona "digital envelope" a *key encapsulation mechanism*; passos básicos verificados):
1. Gera-se uma **chave simétrica aleatória** (de sessão).
2. A **mensagem é cifrada** com essa chave simétrica.
3. A **chave simétrica é cifrada com a chave pública do destinatário** (formando o "envelope").
4. Envia-se a mensagem cifrada e o envelope.
5. O destinatário usa sua **chave privada** para abrir o envelope, obter a chave simétrica e decifrar a mensagem.

Vantagens: desempenho da simétrica e distribuição segura de chaves da assimétrica. TLS e e-mail seguro (S/MIME, PGP) usam esquemas híbridos.

### 3. Assinatura digital (processo geral verificado na Wikipedia; detalhes de memória)

Nota: a literatura atual diz que o *hash* é **assinado** com a chave privada; a descrição "cifrar o *hash* com a chave privada" é a forma didática comum. **Processo de assinatura:** (1) calcula-se o ***hash*** do documento; (2) o *hash* é **cifrado com a chave privada** do signatário (formando a assinatura); (3) a assinatura é anexada ao documento (com o certificado). **Verificação:** o destinatário (1) calcula o *hash* do documento recebido; (2) **decifra a assinatura com a chave pública** do signatário, obtendo o *hash* original; (3) compara os dois — se iguais, o documento está **íntegro** e a assinatura é **autêntica**.

| Propriedade | Como a assinatura digital a fornece |
|---|---|
| **Integridade** | Qualquer alteração muda o *hash* |
| **Autenticidade** | Só quem tem a chave privada pode assinar |
| **Não repúdio** | O signatário não pode negar (a chave privada é sua), desde que haja certificado e custódia adequada da chave |
| **Confidencialidade** | **Não** é fornecida (o documento pode ser lido) — usa-se criptografia à parte |

**Assinatura digital ≠ assinatura digitalizada ≠ assinatura eletrônica genérica:** a digital usa criptografia de chave pública e certificado. No Brasil, a **MP 2.200-2/2001** (verificada no Planalto) institui a ICP-Brasil (art. 1º) para garantir autenticidade, integridade e validade jurídica de documentos eletrônicos; as declarações em documentos produzidos com certificação da ICP-Brasil **presumem-se verdadeiras em relação aos signatários** (art. 10, §1º), e o §2º admite outros meios de comprovação aceitos pelas partes; a **Lei 14.063/2020** (de memória) trata de assinaturas eletrônicas simples, avançada e qualificada.

**SHA256withRSA** (SHA-256 com RSA; nomenclatura de bibliotecas, **de memória**): o ***hash*** do conteúdo é calculado com **SHA-256** e o resultado é **assinado (cifrado) com a chave privada RSA**. Atenção: não é "cifrar o documento com RSA".

### 4. Certificado digital e infraestrutura de chaves públicas

#### 4.1 Certificado digital (X.509 — verificado)

Estrutura de dados que **vincula uma chave pública a um sujeito**, **assinada digitalmente por uma autoridade certificadora (AC) confiável** (RFC 5280). Conteúdo típico (de memória): versão, **número de série**, algoritmo de assinatura, **emissor**, **validade** (início e fim), **sujeito**, **chave pública**, extensões (uso da chave, pontos de revogação) e **assinatura da AC**. Tipos: certificados de pessoa física/jurídica, de servidor (SSL/TLS), de código, de e-mail.

#### 4.2 ICP/PKI — Infraestrutura de Chaves Públicas

| Componente | Função |
|---|---|
| **AC** (Autoridade Certificadora) | **Emite**, renova e **revoga** certificados |
| **AR** (Autoridade de Registro) | **Identifica e valida** os requerentes e encaminha à AC |
| **AC Raiz** | Topo da cadeia; **autoassinada** |
| **Repositório / LCR (CRL), OCSP** | Publicação e consulta de **revogação** (CRL: lista; OCSP: consulta online) |
| **Titular** | Dono do certificado e da chave privada |
| **Terceira parte confiável (parte confiante)** | Quem confia no certificado |

**Cadeia de certificação (hierarquia):** AC raiz → ACs intermediárias → certificado do usuário/servidor. A confiança vem da **raiz** presente no repositório do sistema. A validação verifica **assinatura, validade, revogação e cadeia**.

#### 4.3 ICP-Brasil (parcialmente verificada)

Infraestrutura oficial brasileira de chaves públicas, de **raiz única**: o **ITI** (Instituto Nacional de Tecnologia da Informação) exerce o papel de **AC-Raiz** (**verificado** em gov.br/iti). Instituída pela **MP 2.200-2/2001** (art. 1º, verificado); a **AC Raiz** é a primeira autoridade da cadeia e **não emite certificados para o usuário final** (art. 5º), e o ITI é a AC Raiz (art. 13). Estrutura (memória): **AC-Raiz (ITI)** → **ACs de 1º nível** → **ACs subsequentes** → **ARs**; o **Comitê Gestor** estabelece as políticas. Tipos de certificado: A1, A3 (assinatura), S, T (carimbo do tempo) e sua validade, mídia e tamanho de chave variam (de memória; não verificados).

**Carimbo do tempo:** prova **quando** o documento existia/foi assinado (Autoridade de Carimbo do Tempo); **assinaturas de longa duração** (de memória).

### 5. Protocolos que usam criptografia (resumo)

| Protocolo | Uso |
|---|---|
| **TLS** (sucessor do SSL) | Canal seguro (HTTPS): negocia chaves por criptografia assimétrica, cifra o tráfego com simétrica; certificado do servidor (de memória) |
| **IPsec** | Camada IP; VPN (`05`, RFC 4301 verificada) |
| **SSH** | Acesso remoto seguro |
| **S/MIME, PGP** | E-mail assinado/cifrado |
| **DNSSEC** | Assinatura de registros DNS |
| **Kerberos** | Autenticação por tickets (simétrica) |

### 6. Gestão de chaves e boas práticas

Geração segura (aleatoriedade adequada); **armazenamento protegido** (HSM, cartão/token, cofre); **rotação e expiração**; **separação de funções**; **backup e recuperação** de chaves; **revogação** em caso de comprometimento; uso de **algoritmos e tamanhos atuais** (AES-256/128, RSA ≥ 2048 bits, SHA-256 ou superior; recomendação de memória, a conferir em fonte); **evitar** algoritmos obsoletos (DES, RC4, MD5, SHA-1); **criptografia em trânsito, em repouso e em uso**; **política de criptografia** (ISO 27002; `11`). **Riscos:** perda ou roubo da chave privada, implementação incorreta, ataques de canal lateral, computação quântica ameaçando RSA e ECC (**criptografia pós-quântica**; de memória).

### 7. Comparações conceituais

| A | B | Diferença |
|---|---|---|
| Simétrica | Assimétrica | Uma chave, rápida × par de chaves, lenta, sem troca prévia de segredo |
| Criptografia | *Hash* | Reversível com chave × unidirecional |
| Assinatura digital | Envelope digital | Autenticidade, integridade, não repúdio × confidencialidade da chave de sessão |
| Chave pública | Privada | Divulgada × secreta |
| AC | AR | Emite e revoga × identifica e valida |
| CRL | OCSP | Lista de revogados × consulta online do estado |
| Assinatura digital | Assinatura digitalizada | Criptográfica, verificável × imagem de assinatura |
| Certificado | Chave | Documento que vincula identidade à chave pública × material criptográfico |

### 8. Atenção para a prova

*Inferência técnica e recomendação pedagógica; sem atribuir frequência à banca.*

- **Quem usa qual chave:** confidencialidade = pública do destinatário; assinatura = privada do signatário.
- Assinatura digital = *hash* do documento cifrado com a chave privada; **não** garante sigilo.
- Envelope digital = chave simétrica de sessão protegida com a chave pública do destinatário.
- *Evidência histórica (amostra de duas provas):* Prova 6 de 2023 — **Q41** (envelope digital; gabarito D). Prova 15 de 2018 — **Q50** (certificado digital: SHA256RSA; gabarito E) e **Q52** (hierarquia de certificação da ICP-Brasil; gabarito A). Gabaritos de terceiros, não validados. Duas provas não permitem inferir frequência.

### 9. Síntese

Simétrica (AES), assimétrica (RSA, ECC), *hash* (SHA-2), HMAC, híbrida e envelope digital. Assinatura digital: *hash* + chave privada; verificação com a pública. Certificado X.509 liga chave pública a sujeito, assinado por AC. ICP: AC, AR, raiz, LCR/OCSP. ICP-Brasil: raiz única (ITI).

### 10. Pontos para a futura produção de questões (registro)

Escolha de chave por finalidade; passos do envelope e da assinatura; componentes da ICP; hierarquia da ICP-Brasil; leitura de "SHA256withRSA"; algoritmos obsoletos.

### 11. Referências

- IETF RFC 5280 (X.509) — **verificada em 2026-10-31**. gov.br/ITI, ICP-Brasil — **verificada** (AC-Raiz, raiz única).
- Planalto, MP 2.200-2/2001 (arts. 1º, 5º, 10, 13) — **verificada em 2026-10-31**. Wikipedia, "Digital signature", "Hybrid cryptosystem" e "Key encapsulation mechanism" — **verificadas**. SHA256withRSA, algoritmos e tamanhos de chave, Lei 14.063/2020, tipos de certificado — **de memória, não confirmados**.
- Edital Transpetro nº 04/2026.4, Anexo IV, item 9.19. Provas: Transpetro 2023, Prova 6, Q41; Transpetro 2018, Prova 15, Q50 e Q52 (gabaritos de terceiros, não validados).


---

## Segurança em Nuvem e em IoT

**Módulo:** M09 — Segurança da informação
**Textos oficiais (Anexo IV):** 9.20 "Conceitos de segurança em nuvem"; 9.21 "Segurança em IoT." (com ponto final no edital).
**Escopo:** A. CASB, DLP e EDR: `14`; IAM: `05`; criptografia: `12`; riscos e continuidade: `09`; LGPD: Módulo 4.
**Status:** `VALIDADO` (aprovado pelo usuário em 2026-10-31, com ressalvas: interpretação do item 9.1 e escolha das versões do NIST SP 800-61 e do MITRE ATT&CK a confirmar; fontes de memória listadas em `docs/qualidade/relatorio-producao-modulo-09.md`). **Verificados** (2026-10-31): NIST SP 800-145 (5 características, 3 modelos de serviço, 4 modelos de implantação — contagens); CASB (definição geral, Wikipedia); IEC 62443 (Wikipedia); **NIST IR 8259** (retirada em 20/4/2026, substituída pela Rev. 1); OWASP IoT (existência do projeto). **Revisão:** responsabilidade compartilhada **confirmada** (AWS: segurança "da" nuvem × "na" nuvem; Microsoft: matriz IaaS/PaaS/SaaS); MQTT (TLS na porta 8883; credenciais em texto puro sem TLS) e CoAP (DTLS opcional) confirmados na Wikipedia. **Não confirmados:** CSA CCM, itens do OWASP IoT Top 10 (o PDF retornou 404) e demais vulnerabilidades típicas.

**Objetivos de aprendizagem.** (1) Descrever o modelo de computação em nuvem; (2) aplicar o modelo de responsabilidade compartilhada; (3) conhecer riscos e controles em nuvem; (4) identificar vulnerabilidades e controles em IoT; (5) distinguir TI, IoT e tecnologia operacional (OT/ICS).

---

### 1. Segurança em nuvem (9.20)

#### 1.1 Modelo de nuvem (NIST SP 800-145 — contagens verificadas; nomes de memória)

| Dimensão | Itens |
|---|---|
| **5 características essenciais** | Autoatendimento sob demanda; amplo acesso pela rede; agrupamento de recursos (*pooling*, multi-inquilino); elasticidade rápida; serviço medido |
| **3 modelos de serviço** | **IaaS** (infraestrutura), **PaaS** (plataforma), **SaaS** (software) |
| **4 modelos de implantação** | **Pública**, **privada**, **comunitária**, **híbrida** |

Extensões comuns: *multicloud*, FaaS/*serverless*, contêineres e Kubernetes (de memória).

#### 1.2 Modelo de responsabilidade compartilhada (matriz conferida na página da Microsoft; AWS confirma "da" e "na" nuvem)

O provedor e o cliente **dividem** as responsabilidades de segurança; a divisão **depende do modelo de serviço**:

| Camada | IaaS | PaaS | SaaS |
|---|---|---|---|
| Dados, configurações, identidades e acesso, classificação | **Cliente** | **Cliente** | **Cliente** |
| Dispositivos dos usuários | Cliente | Cliente | Compartilhada |
| Aplicações | Cliente | Compartilhada | Compartilhada |
| Sistema operacional | Cliente | Provedor | Provedor |
| Controles de rede | Cliente | Compartilhada | Provedor |
| Virtualização, servidores, armazenamento | **Provedor** | **Provedor** | **Provedor** |
| Instalações físicas | **Provedor** | **Provedor** | **Provedor** |

Regra prática: **"o provedor é responsável pela segurança *da* nuvem; o cliente, pela segurança *na* nuvem"** (formulação popular, de memória). **Dados, identidades e configuração** são **sempre** do cliente; falhas de configuração são causa frequente de incidentes.

#### 1.3 Riscos e desafios

| Risco | Descrição |
|---|---|
| **Configuração incorreta** | Armazenamento público, permissões amplas |
| **Gestão de identidade e acesso fraca** | Credenciais e chaves expostas, ausência de MFA, privilégios excessivos |
| **Interfaces e APIs inseguras** | Exposição de gestão e serviços |
| **Vazamento de dados** | Falhas de segregação, criptografia ausente |
| **Falta de visibilidade** | Sombra de TI (*shadow IT*), contas não gerenciadas |
| **Multi-inquilino** | Isolamento entre clientes (virtualização) |
| **Dependência do provedor** (*lock-in*), disponibilidade | Continuidade, portabilidade |
| **Conformidade e soberania de dados** | Local de armazenamento, LGPD (Módulo 4), contratos |
| **Ameaças internas e do provedor** | Acesso privilegiado |
| **Cadeia de suprimentos** | Imagens, bibliotecas e serviços de terceiros |

#### 1.4 Controles e boas práticas

| Controle | Descrição |
|---|---|
| **IAM forte** | MFA, menor privilégio, funções temporárias, rotação de chaves, federação (`05`) |
| **Criptografia** | Em repouso e em trânsito; **gestão de chaves** (KMS/HSM; cliente pode gerenciar as suas, "BYOK") (`12`) |
| **Segmentação de rede** | Redes virtuais, grupos de segurança, *firewall* de nuvem, acesso privado |
| **Gestão de postura (CSPM)** e de configuração | Verificação contínua de configurações |
| **Monitoramento e registro** | Logs de atividade, SIEM, detecção de ameaças (`14`) |
| **CASB** | Intermediário entre usuários e aplicações em nuvem: **monitora atividades e aplica políticas de segurança**, alerta administradores, impõe conformidade (Wikipedia; introduzido pelo Gartner em 2012; as quatro funções "visibilidade, conformidade, proteção de dados, proteção contra ameaças" são de memória) (`14`) |
| **Proteção de cargas de trabalho (CWPP)**, contêineres, *serverless* | Imagens seguras, escaneamento, tempo de execução |
| **DLP, classificação** | Controle de dados em nuvem (`10`, `14`) |
| **Backup e resiliência** | Multi-zona/região, cópias fora do provedor (`14`, `09`) |
| **Contratos e SLA** | Responsabilidades, auditoria, localização de dados, incidentes |
| **Zero trust** | Verificação contínua |
| **DevSecOps** | Infraestrutura como código verificada (`04`) |

Referências de apoio (de memória): **CSA** (*Cloud Security Alliance*; Cloud Controls Matrix), **ISO/IEC 27017** (controles para nuvem), **27018** (PII em nuvem).

### 2. Segurança em IoT (9.21)

#### 2.1 Conceito e contexto

**IoT** (*Internet of Things*) é a rede de **dispositivos físicos** (sensores, atuadores, câmeras, medidores, veículos) com **conectividade** e capacidade de coleta e troca de dados. Características que dificultam a segurança: **grande quantidade**, **recursos limitados** (CPU, memória, energia), **longa vida útil** sem atualização, **heterogeneidade** de fabricantes e protocolos, **dispositivos em locais físicos expostos**, impacto no **mundo físico**.

**IoT × OT/ICS:** a **tecnologia operacional (OT)**, incluindo **sistemas de controle industrial (ICS)** e **SCADA**, controla processos físicos (dutos, refinarias); prioriza **disponibilidade e segurança operacional** (*safety*). A série **IEC 62443** trata da segurança de OT em automação e controle (**verificada**: níveis de segurança de 0 a 4 e modelo de **zonas e conduítes**). A convergência TI/OT amplia a superfície de ataque.

#### 2.2 Vulnerabilidades típicas (de memória; não confirmadas nesta etapa)

Credenciais padrão ou fracas; **firmware desatualizado** ou sem mecanismo de atualização; comunicações **sem criptografia** ou com protocolos inseguros; **interfaces de administração expostas**; ausência de autenticação; serviços desnecessários habilitados; falta de segurança física; cadeia de suprimentos (componentes e bibliotecas); privacidade (coleta excessiva de dados); ausência de **ciclo de vida** definido (fim de suporte). O projeto **OWASP IoT** mantém uma lista "IoT Top 10" (edição de 2018 listada no site; itens não lidos).

#### 2.3 Ameaças e ataques

*Botnets* de IoT (por exemplo, usadas em DDoS — `03`); acesso físico e adulteração; interceptação; *spoofing*; ataques ao firmware; comprometimento de plataformas e APIs na nuvem; ataques a redes industriais; *ransomware* em OT.

#### 2.4 Controles (visão geral, de memória)

| Camada | Controles |
|---|---|
| **Dispositivo** | **Segurança desde o projeto**; identidade única por dispositivo; *boot* seguro e **atualizações assinadas**; armazenamento seguro de chaves (elemento seguro, TPM); desativar portas e serviços; remover credenciais padrão |
| **Comunicação** | Criptografia (TLS/DTLS), autenticação mútua, protocolos seguros (por exemplo, MQTT com TLS e autenticação) |
| **Rede** | **Segmentação** (VLAN, zonas), isolamento de IoT/OT da TI, *firewalls* industriais, listas de permissão, monitoramento do tráfego |
| **Plataforma e nuvem** | IAM, APIs seguras, gestão de dispositivos (inventário, atualização remota, revogação) |
| **Dados** | Minimização, criptografia, privacidade (LGPD) |
| **Operação** | Inventário, gestão de vulnerabilidades e de *patches*, monitoramento, resposta a incidentes (`06`), fim de vida |
| **Governança** | Políticas, requisitos para fornecedores, certificações e normas |

**Normas e guias:** **IEC 62443** (OT/ICS; verificada), **NIST IR 8259** (atividades de cibersegurança para fabricantes de dispositivos IoT — **retirada em 20/4/2026 e substituída pela Rev. 1**, conforme o NIST; a Rev. 1 não foi lida), ETSI EN 303 645 (de memória), ISO/IEC 27400 (de memória).

### 3. Exemplo (didático)

Uma empresa do setor de energia usa sensores de pressão conectados a uma plataforma em nuvem. Controles: cada sensor tem identidade e certificado próprios; as atualizações de firmware são assinadas; a rede de sensores fica em zona segregada da rede corporativa; a comunicação usa TLS; a plataforma em nuvem aplica IAM com MFA e menor privilégio; os registros alimentam o SIEM. Pelo modelo de responsabilidade compartilhada, a empresa continua responsável por dados, identidades e configuração.

### 4. Comparações conceituais

| A | B | Diferença |
|---|---|---|
| IaaS | SaaS | Cliente gerencia SO e aplicação × provedor gerencia quase tudo |
| Nuvem pública | Privada | Compartilhada, multi-inquilino × dedicada a uma organização |
| Segurança *da* nuvem | Segurança *na* nuvem | Provedor × cliente |
| CASB | Firewall | Controle de uso de serviços em nuvem × filtro de tráfego de rede |
| TI | OT | Prioriza confidencialidade × prioriza disponibilidade e segurança operacional |
| IoT | ICS/SCADA | Dispositivos conectados em geral × controle de processos industriais |
| Atualização assinada | Atualização comum | Autenticidade e integridade do firmware × sem verificação |

### 5. Atenção para a prova

*Inferência técnica e recomendação pedagógica; sem atribuir frequência à banca.*

- **Dados, identidades e configuração são sempre do cliente** na nuvem; a divisão do restante depende de IaaS/PaaS/SaaS.
- Em IoT, destacar: **credenciais padrão**, **atualizações de firmware**, **segmentação**, **criptografia**, **recursos limitados**.
- Os itens 9.20 e 9.21 **não tiveram questão** identificada nas duas provas catalogadas (2018 e 2023); a ausência não permite inferir baixa incidência.

### 6. Síntese

Nuvem: 5 características, 3 serviços, 4 implantações; responsabilidade compartilhada; riscos (configuração, IAM, dados, visibilidade) e controles (IAM, criptografia, segmentação, CSPM, CASB, monitoramento). IoT: recursos limitados e longa vida; vulnerabilidades (credenciais, firmware); controles em dispositivo, comunicação, rede e plataforma; OT/ICS e IEC 62443.

### 7. Pontos para a futura produção de questões (registro)

Responsabilidade por modelo de serviço; riscos de nuvem; função do CASB; vulnerabilidades e controles de IoT; TI×OT.

### 8. Referências

- NIST SP 800-145 (nuvem; contagens) — **verificada em 2026-10-31** (nomes de memória). Wikipedia, "Cloud access security broker" e "IEC 62443" — **verificadas**. NIST IR 8259 — **página verificada** (retirada em 20/4/2026; Rev. 1 não lida). OWASP IoT (projeto) — **verificada em parte**.
- AWS (modelo de responsabilidade compartilhada) e Microsoft Learn (responsabilidade compartilhada na nuvem) — **verificadas**. Wikipedia, "MQTT" e "CoAP" — **verificadas**. CSA CCM, itens do OWASP IoT Top 10, ISO 27017/27018, ETSI, ISO 27400 — **de memória, não verificados**.
- Edital Transpetro nº 04/2026.4, Anexo IV, itens 9.20 e 9.21.


---

## Operação de Segurança

**Módulo:** M09 — Segurança da informação
**Texto oficial (Anexo IV):** 9.2 "Operação de segurança (Firewall, Proxy, IPS/IDS, DLP, CASB, SIEM, Antivírus, EDR, WAF, Gestão de vulnerabilidades, Monitoração, Backup)".
**Escopo:** A. Os 12 elementos entre parênteses estão cobertos nas seções 1 a 12 deste arquivo (checagem na seção 14).
**Status:** `VALIDADO` (aprovado pelo usuário em 2026-10-31, com ressalvas: interpretação do item 9.1 e escolha das versões do NIST SP 800-61 e do MITRE ATT&CK a confirmar; fontes de memória listadas em `docs/qualidade/relatorio-producao-modulo-09.md`). **Verificados** (Wikipedia/FIRST, 2026-10-31): firewall (filtro de pacotes com ACL, *stateful*, camada de aplicação, NGFW); IDS × IPS; DLP; SIEM; EDR; WAF; CVSS (versão 4.0, nov./2023); backup (3-2-1; completo, incremental, diferencial); CASB. **Revisão:** as faixas do CVSS 4.0 foram **confirmadas** na especificação (nenhuma 0,0; baixa 0,1–3,9; média 4,0–6,9; alta 7,0–8,9; crítica 9,0–10,0). **Não confirmados:** proxy (definições de memória), XDR, CVE, SOC/SOAR, detalhes de produtos.

**Objetivos de aprendizagem.** (1) Descrever função, posição e limites de cada controle; (2) distinguir tecnologias parecidas (IDS×IPS, WAF×firewall, EDR×antivírus); (3) aplicar a gestão de vulnerabilidades; (4) planejar monitoração e backup; (5) integrar as ferramentas na operação (SOC).

---

### 1. Firewall

**Firewall** controla o tráfego entre redes (ou hosts) com base em **regras**. Gerações (verificado em fonte secundária):

| Tipo | Funcionamento |
|---|---|
| **Filtro de pacotes** (sem estado) | Decide por pacote com **listas de controle de acesso (ACL)**: IP de origem/destino, protocolo, **portas** |
| **Com estado (*stateful*)** | **Rastreia conexões**: permite o retorno de tráfego legítimo e bloqueia pacotes fora de contexto |
| **Camada de aplicação / *proxy firewall*** | Inspeciona o conteúdo e protocolos de aplicação |
| **NGFW** (*Next-Generation Firewall*) | Inspeção ampliada na camada de aplicação, identificação de aplicações e usuários, IPS integrado, inspeção TLS (de memória) |

Boas práticas: **negar por padrão** (*default deny*), menor privilégio nas regras, revisão periódica, segmentação (DMZ, zonas), registro. Pode ser **de rede** (perímetro), **de host** (*personal firewall*) ou em **nuvem** (grupos de segurança). **Limites:** não detecta ataques dentro de tráfego permitido (por exemplo, SQL Injection na porta 443 liberada), não protege contra ameaças internas por si só.

### 2. Proxy

**Proxy** é um **intermediário** entre cliente e servidor (conceito de memória; não confirmado em página lida):

| Tipo | Descrição |
|---|---|
| **Proxy direto (*forward*)** | Atende **clientes internos** acessando a internet: **filtragem de conteúdo e de URL**, controle de acesso, *cache*, registro, anonimização da origem |
| **Proxy reverso** | Fica à frente de **servidores**: balanceamento de carga, terminação TLS, *cache*, **proteção do servidor de origem**, pode hospedar WAF (verificado em fonte secundária: WAF pode ser implantado como proxy reverso) |
| **Transparente × explícito** | Sem configuração no cliente × configurado |
| **Inspeção TLS (*SSL inspection*)** | Decifra, inspeciona e recifra o tráfego; exige tratamento de privacidade |

### 3. IDS e IPS

| Sistema | Função (verificada) |
|---|---|
| **IDS** (*Intrusion Detection System*) | **Monitora e alerta** sobre atividade suspeita; **passivo** (fora da linha do tráfego) |
| **IPS** (*Intrusion Prevention System*) | Fica **em linha** e pode **bloquear ou prevenir** intrusões |

Classificação por local: **NIDS/NIPS** (rede) e **HIDS/HIPS** (*host*). Métodos de detecção (de memória): **por assinaturas**, **por anomalias/comportamento** e **por política**. Problemas: **falsos positivos** (alerta indevido), **falsos negativos** (ataque não detectado), ajuste (*tuning*), tráfego criptografado, desempenho (um IPS em linha pode ser ponto de falha).

### 4. DLP — Prevenção de Perda de Dados

**DLP** (*Data Loss Prevention*) impede a **transmissão ou divulgação não autorizada de dados sensíveis**, **em trânsito, em repouso ou em uso** (verificado). Aplicação típica: identificar dados (por padrões, palavras-chave, impressão digital de documentos, **classificação** — `10`), monitorar e **bloquear/alertar/criptografar** em e-mail, web, USB, impressão, nuvem e *endpoints*. Relação com a LGPD (dados pessoais). Limites: falsos positivos, tráfego criptografado, usuários privilegiados, custos de ajuste.

### 5. CASB

**CASB** (*Cloud Access Security Broker*) é *software* local ou em nuvem entre **usuários e aplicações em nuvem**, que **monitora atividades e aplica políticas de segurança**, alerta administradores, impõe conformidade e bloqueia *malware* (verificado; termo introduzido pelo Gartner em 2012). Funções usuais (de memória): **visibilidade** (inclusive *shadow IT*), **conformidade**, **proteção de dados** (DLP em nuvem), **proteção contra ameaças**. Modos: *proxy* (direto/reverso) e **API**. Veja `13`.

### 6. SIEM

**SIEM** (*Security Information and Event Management*) combina **gestão de informações** (SIM: coleta e armazenamento de registros) e **gestão de eventos** (SEM: análise em tempo real) de segurança — **agregação, correlação, alertas e relatórios** (verificado). Funções: coleta de *logs* de várias fontes; **normalização**; **correlação** por regras/analítica; **alertas**; painéis; retenção para auditoria e conformidade; investigação forense; integração com inteligência de ameaças (`07`) e ATT&CK (`08`).

**Relacionados (de memória):** **SOC** (*Security Operations Center*: equipe e processos que operam a monitoração), **SOAR** (orquestração e automação de resposta), **UEBA** (análise de comportamento), **XDR** (detecção estendida a *endpoints*, rede, nuvem e e-mail; **não confirmado em página lida**).

### 7. Antivírus

Detecta, bloqueia e remove *malware* (`03`). Métodos: **assinaturas** (padrões conhecidos), **heurística** (características suspeitas), **comportamento** (ações em execução), ***sandboxing***, **reputação** e aprendizado de máquina. Limites: *malware* novo ou *fileless* e ofuscado pode escapar; exige **atualização**; falsos positivos. O antivírus tradicional é **preventivo** e baseado em arquivo; é **componente** de uma proteção em camadas.

### 8. EDR

**EDR** (*Endpoint Detection and Response*) **monitora continuamente os endpoints** (estações, servidores) e registra **telemetria** (processos, arquivos, rede, registro) para **detecção, investigação e resposta** — segundo a fonte consultada, é **principalmente uma ferramenta de alerta**, não uma camada de proteção por si só (verificado). Capacidades usuais: detecção comportamental, **isolamento do host**, encerramento de processos, *rollback*, caça a ameaças (`07`). **EDR × antivírus:** o EDR acrescenta **visibilidade contínua e resposta**; o antivírus tradicional foca a **prevenção** baseada em assinaturas. Muitos produtos modernos combinam as duas funções (EPP + EDR).

### 9. WAF

**WAF** (*Web Application Firewall*) **filtra, monitora e bloqueia tráfego HTTP/HTTPS** de e para aplicações web, protegendo contra ataques da camada de aplicação, como **SQL Injection, XSS** e inclusão de arquivos (verificado; ver `03`). Implantação: **reverso**, em borda/CDN, em nuvem ou no *host*. Modelos: lista de bloqueio (assinaturas/OWASP), lista de permissão (positivo), comportamental. **WAF × firewall de rede:** o WAF entende **HTTP** (camada 7); o firewall de rede decide por IP e porta. **Limites:** não substitui o **desenvolvimento seguro** (`04`); pode ter falsos positivos; "patching virtual" é paliativo.

### 10. Gestão de vulnerabilidades

Processo contínuo de **identificar, classificar, priorizar, tratar e verificar** vulnerabilidades:

1. **Inventário** de ativos.
2. **Descoberta e varredura** (scanners autenticados ou não, em rede, *hosts*, aplicações, contêineres, nuvem).
3. **Análise e classificação**: **CVE** (identificador público de vulnerabilidade; de memória) e **CVSS** (*Common Vulnerability Scoring System*; **versão 4.0 vigente**, lançada em novembro de 2023, segundo o FIRST — verificado; faixas qualitativas: nenhuma 0,0; baixa 0,1–3,9; média 4,0–6,9; alta 7,0–8,9; crítica 9,0–10,0, de uso opcional — **tabela verificada**).
4. **Priorização** por **risco**: criticidade do ativo, exposição, **exploração ativa** (inteligência — `07`), existência de exploit, impacto no negócio, controles compensatórios (a pontuação CVSS isolada não basta).
5. **Tratamento**: **correção (*patch*)**, mitigação (configuração, WAF/IPS), aceitação formal ou transferência.
6. **Verificação** (nova varredura) e **relato**; métricas (tempo de correção, ativos vulneráveis).

**Gestão de patches** é parte do processo: teste, homologação, janelas de mudança, reversão (Módulo 5 e ITIL, Módulo 4). **Varredura de vulnerabilidades ≠ teste de penetração** (`08`). **Gestão de configuração** e *hardening* (`02`).

### 11. Monitoração

Observação contínua de **registros, métricas e eventos** para detectar desvios, falhas e ataques: *logs* (sistemas, aplicações, rede, autenticação, nuvem), **monitoramento de rede** (fluxos, tráfego), de **disponibilidade e desempenho**, de **integridade de arquivos** (FIM), de **acesso e contas privilegiadas**, **monitoramento físico** (`02`). Requisitos: **sincronização de relógios**, **centralização e proteção dos logs** (integridade), **retenção** conforme requisitos legais, **alertas** com limiares ajustados, processo de triagem (SOC), integração com resposta (`06`). Em conformidade com a ISO 27002 (`11`) e LGPD (Módulo 4).

### 12. Backup

**Backup** é a cópia de dados para **recuperação** após perda, corrupção, erro ou ataque (essencial contra *ransomware* — `03`). Conceitos (verificados em fonte secundária):

| Tipo | Descrição |
|---|---|
| **Completo (*full*)** | Copia **todos** os dados selecionados |
| **Incremental** | Copia o que **mudou desde o último backup** (de qualquer tipo) — rápido, restauração em múltiplas etapas |
| **Diferencial** | Copia o que **mudou desde o último completo** — restauração mais simples (completo + último diferencial) |

**Regra 3-2-1** (verificada): **3 cópias** dos dados, em **2 tipos de mídia** diferentes, com **1 cópia fora do local**. Extensões populares: 3-2-1-1-0 (uma cópia **imutável/offline** e zero erros nos testes; de memória). Outros: **RTO e RPO** definem a frequência e a técnica (`09`), **criptografia** dos backups (`12`), **testes de restauração periódicos** (backup não testado não é backup), **retenção**, **imutabilidade** (*WORM*) contra ransomware, **segregação** de credenciais, backup de nuvem e de SaaS, replicação × backup (a réplica copia também a corrupção).

### 13. Integração: como as peças se encaixam

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

### 14. Checagem de cobertura do item 9.2

Firewall (seção 1); Proxy (2); IPS/IDS (3); DLP (4); CASB (5); SIEM (6); Antivírus (7); EDR (8); WAF (9); Gestão de vulnerabilidades (10); Monitoração (11); Backup (12). Os 12 elementos literais do edital estão cobertos.

### 15. Comparações conceituais

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

### 16. Atenção para a prova

*Inferência técnica e recomendação pedagógica; sem atribuir frequência à banca.*

- Identificar o controle pela **descrição da função** (fila de eventos correlacionados = SIEM; lista de regras de portas e IPs = firewall; bloqueio em linha = IPS).
- Diferenciar **incremental × diferencial** e conhecer a **regra 3-2-1**.
- *Evidência histórica (amostra de duas provas):* Prova 6 de 2023 — **Q43** (SIEM; gabarito D). Prova 15 de 2018 — **Q47** (firewall e listas de controle de acesso; gabarito A). Gabaritos de terceiros, não validados. Duas provas não permitem inferir frequência.

### 17. Síntese

Firewall (ACL, *stateful*, NGFW); proxy; IDS (detecta) × IPS (bloqueia); DLP; CASB; SIEM (correlação); antivírus; EDR (telemetria e resposta); WAF (HTTP); gestão de vulnerabilidades (CVE, CVSS 4.0, priorização por risco); monitoração; backup (completo, incremental, diferencial; 3-2-1; testes de restauração).

### 18. Pontos para a futura produção de questões (registro)

Associação função–controle; diferenças IDS/IPS, WAF/firewall, EDR/antivírus; tipos de backup; regra 3-2-1; priorização de vulnerabilidades; papel do SIEM.

### 19. Referências

- Wikipedia: "Firewall (computing)", "Intrusion detection system", "Data loss prevention software", "Cloud access security broker", "Security information and event management", "Endpoint detection and response", "Web application firewall" e "Backup" — **verificadas em 2026-10-31** (algumas por resumo automático). FIRST, CVSS — **verificada** (versão 4.0, nov./2023).
- FIRST, especificação do CVSS 4.0 (tabela de severidade) — **verificada**. Proxy, XDR, SOC/SOAR, CVE, 3-2-1-1-0 — **de memória, não confirmados**.
- Edital Transpetro nº 04/2026.4, Anexo IV, item 9.2. Provas: Transpetro 2023, Prova 6, Q43; Transpetro 2018, Prova 15, Q47 (gabaritos de terceiros, não validados).

