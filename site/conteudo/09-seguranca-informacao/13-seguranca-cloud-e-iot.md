---
modulo: 09-seguranca-informacao
arquivo: 13-seguranca-cloud-e-iot
itens_edital:
  - "9.20 Conceitos de segurança em nuvem"
  - "9.21 Segurança em IoT."
ids_matriz: ["E5-101", "E5-102"]
escopo: "A — conteúdo expresso no edital. Arquitetura de nuvem e IoT em si: Módulo 1 e demais; aqui, o aspecto de segurança."
tipo_conteudo: "teoria"
status: "VALIDADO"
ultima_atualizacao: "2026-10-31"
---

# Segurança em Nuvem e em IoT

**Módulo:** M09 — Segurança da informação
**Textos oficiais (Anexo IV):** 9.20 "Conceitos de segurança em nuvem"; 9.21 "Segurança em IoT." (com ponto final no edital).
**Escopo:** A. CASB, DLP e EDR: `14`; IAM: `05`; criptografia: `12`; riscos e continuidade: `09`; LGPD: Módulo 4.
**Status:** `VALIDADO` (aprovado pelo usuário em 2026-10-31, com ressalvas: interpretação do item 9.1 e escolha das versões do NIST SP 800-61 e do MITRE ATT&CK a confirmar; fontes de memória listadas em `docs/qualidade/relatorio-producao-modulo-09.md`). **Verificados** (2026-10-31): NIST SP 800-145 (5 características, 3 modelos de serviço, 4 modelos de implantação — contagens); CASB (definição geral, Wikipedia); IEC 62443 (Wikipedia); **NIST IR 8259** (retirada em 20/4/2026, substituída pela Rev. 1); OWASP IoT (existência do projeto). **Revisão:** responsabilidade compartilhada **confirmada** (AWS: segurança "da" nuvem × "na" nuvem; Microsoft: matriz IaaS/PaaS/SaaS); MQTT (TLS na porta 8883; credenciais em texto puro sem TLS) e CoAP (DTLS opcional) confirmados na Wikipedia. **Não confirmados:** CSA CCM, itens do OWASP IoT Top 10 (o PDF retornou 404) e demais vulnerabilidades típicas.

**Objetivos de aprendizagem.** (1) Descrever o modelo de computação em nuvem; (2) aplicar o modelo de responsabilidade compartilhada; (3) conhecer riscos e controles em nuvem; (4) identificar vulnerabilidades e controles em IoT; (5) distinguir TI, IoT e tecnologia operacional (OT/ICS).

---

## 1. Segurança em nuvem (9.20)

### 1.1 Modelo de nuvem (NIST SP 800-145 — contagens verificadas; nomes de memória)

| Dimensão | Itens |
|---|---|
| **5 características essenciais** | Autoatendimento sob demanda; amplo acesso pela rede; agrupamento de recursos (*pooling*, multi-inquilino); elasticidade rápida; serviço medido |
| **3 modelos de serviço** | **IaaS** (infraestrutura), **PaaS** (plataforma), **SaaS** (software) |
| **4 modelos de implantação** | **Pública**, **privada**, **comunitária**, **híbrida** |

Extensões comuns: *multicloud*, FaaS/*serverless*, contêineres e Kubernetes (de memória).

### 1.2 Modelo de responsabilidade compartilhada (matriz conferida na página da Microsoft; AWS confirma "da" e "na" nuvem)

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

### 1.3 Riscos e desafios

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

### 1.4 Controles e boas práticas

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

## 2. Segurança em IoT (9.21)

### 2.1 Conceito e contexto

**IoT** (*Internet of Things*) é a rede de **dispositivos físicos** (sensores, atuadores, câmeras, medidores, veículos) com **conectividade** e capacidade de coleta e troca de dados. Características que dificultam a segurança: **grande quantidade**, **recursos limitados** (CPU, memória, energia), **longa vida útil** sem atualização, **heterogeneidade** de fabricantes e protocolos, **dispositivos em locais físicos expostos**, impacto no **mundo físico**.

**IoT × OT/ICS:** a **tecnologia operacional (OT)**, incluindo **sistemas de controle industrial (ICS)** e **SCADA**, controla processos físicos (dutos, refinarias); prioriza **disponibilidade e segurança operacional** (*safety*). A série **IEC 62443** trata da segurança de OT em automação e controle (**verificada**: níveis de segurança de 0 a 4 e modelo de **zonas e conduítes**). A convergência TI/OT amplia a superfície de ataque.

### 2.2 Vulnerabilidades típicas (de memória; não confirmadas nesta etapa)

Credenciais padrão ou fracas; **firmware desatualizado** ou sem mecanismo de atualização; comunicações **sem criptografia** ou com protocolos inseguros; **interfaces de administração expostas**; ausência de autenticação; serviços desnecessários habilitados; falta de segurança física; cadeia de suprimentos (componentes e bibliotecas); privacidade (coleta excessiva de dados); ausência de **ciclo de vida** definido (fim de suporte). O projeto **OWASP IoT** mantém uma lista "IoT Top 10" (edição de 2018 listada no site; itens não lidos).

### 2.3 Ameaças e ataques

*Botnets* de IoT (por exemplo, usadas em DDoS — `03`); acesso físico e adulteração; interceptação; *spoofing*; ataques ao firmware; comprometimento de plataformas e APIs na nuvem; ataques a redes industriais; *ransomware* em OT.

### 2.4 Controles (visão geral, de memória)

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

## 3. Exemplo (didático)

Uma empresa do setor de energia usa sensores de pressão conectados a uma plataforma em nuvem. Controles: cada sensor tem identidade e certificado próprios; as atualizações de firmware são assinadas; a rede de sensores fica em zona segregada da rede corporativa; a comunicação usa TLS; a plataforma em nuvem aplica IAM com MFA e menor privilégio; os registros alimentam o SIEM. Pelo modelo de responsabilidade compartilhada, a empresa continua responsável por dados, identidades e configuração.

## 4. Comparações conceituais

| A | B | Diferença |
|---|---|---|
| IaaS | SaaS | Cliente gerencia SO e aplicação × provedor gerencia quase tudo |
| Nuvem pública | Privada | Compartilhada, multi-inquilino × dedicada a uma organização |
| Segurança *da* nuvem | Segurança *na* nuvem | Provedor × cliente |
| CASB | Firewall | Controle de uso de serviços em nuvem × filtro de tráfego de rede |
| TI | OT | Prioriza confidencialidade × prioriza disponibilidade e segurança operacional |
| IoT | ICS/SCADA | Dispositivos conectados em geral × controle de processos industriais |
| Atualização assinada | Atualização comum | Autenticidade e integridade do firmware × sem verificação |

## 5. Atenção para a prova

*Inferência técnica e recomendação pedagógica; sem atribuir frequência à banca.*

- **Dados, identidades e configuração são sempre do cliente** na nuvem; a divisão do restante depende de IaaS/PaaS/SaaS.
- Em IoT, destacar: **credenciais padrão**, **atualizações de firmware**, **segmentação**, **criptografia**, **recursos limitados**.
- Os itens 9.20 e 9.21 **não tiveram questão** identificada nas duas provas catalogadas (2018 e 2023); a ausência não permite inferir baixa incidência.

## 6. Síntese

Nuvem: 5 características, 3 serviços, 4 implantações; responsabilidade compartilhada; riscos (configuração, IAM, dados, visibilidade) e controles (IAM, criptografia, segmentação, CSPM, CASB, monitoramento). IoT: recursos limitados e longa vida; vulnerabilidades (credenciais, firmware); controles em dispositivo, comunicação, rede e plataforma; OT/ICS e IEC 62443.

## 7. Pontos para a futura produção de questões (registro)

Responsabilidade por modelo de serviço; riscos de nuvem; função do CASB; vulnerabilidades e controles de IoT; TI×OT.

## 8. Referências

- NIST SP 800-145 (nuvem; contagens) — **verificada em 2026-10-31** (nomes de memória). Wikipedia, "Cloud access security broker" e "IEC 62443" — **verificadas**. NIST IR 8259 — **página verificada** (retirada em 20/4/2026; Rev. 1 não lida). OWASP IoT (projeto) — **verificada em parte**.
- AWS (modelo de responsabilidade compartilhada) e Microsoft Learn (responsabilidade compartilhada na nuvem) — **verificadas**. Wikipedia, "MQTT" e "CoAP" — **verificadas**. CSA CCM, itens do OWASP IoT Top 10, ISO 27017/27018, ETSI, ISO 27400 — **de memória, não verificados**.
- Edital Transpetro nº 04/2026.4, Anexo IV, itens 9.20 e 9.21.
