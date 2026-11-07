# Questões autorais — m09-seguranca-informacao (expansão T05) — gabaritos comentados (T05 — expansão)

## AUT-000113 — Segurança física e lógica: classificação de controles

*Questão autoral — estilo Cesgranrio.*

**Gabarito: D**

**Controles físicos** protegem instalações e equipamentos (cercas, câmeras, catracas, cofres, extintores, energia e climatização). **Controles lógicos** protegem sistemas e dados por software e configuração: autenticação, criptografia, permissões, firewalls, antivírus. Na ISO/IEC 27002:2022, correspondem aos temas **físicos** e **tecnológicos**.

- **A)** Incorreta. Cercas, câmeras e vigilantes são controles físicos.
- **B)** Incorreta. Sala-cofre, umidade e extintores são físicos (ambiente).
- **C)** Incorreta. Catraca, biometria na porta e controle de visitantes são físicos.
- **D)** Correta. MFA, criptografia de disco e ACL são controles lógicos.
- **E)** Incorreta. No-break, geradores e refrigeração são físicos (infraestrutura).

**Ponto de atenção:** Pergunte: o controle protege **o lugar e o equipamento** (físico) ou **o sistema e o dado** (lógico)? Biometria **na porta** é física; biometria **no login** é lógica.

**Revisão rápida:** Físico = lugar/equipamento; lógico = sistema/dado.

## AUT-000114 — VPN: IPsec em modo túnel

*Questão autoral — estilo Cesgranrio.*

**Gabarito: E**

No **IPsec**, o **modo túnel** protege e **encapsula o pacote IP original inteiro** em um novo pacote com novo cabeçalho IP, e é o usual em **VPN site-to-site** (gateway a gateway). No **modo transporte**, protege-se apenas o **payload**, mantendo o cabeçalho original (típico host a host). O **ESP** oferece confidencialidade, autenticação de origem e integridade; o **AH** oferece integridade e autenticação, **sem** confidencialidade.

- **A)** Incorreta. A VPN protege o tráfego no caminho, mas não torna o usuário anônimo.
- **B)** Incorreta. A VPN não substitui firewall; as defesas se complementam.
- **C)** Incorreta. A descrição corresponde ao modo túnel; o transporte preserva o cabeçalho IP original.
- **D)** Incorreta. É o contrário: o ESP oferece confidencialidade, e o AH, não.
- **E)** Correta. Descreve corretamente o modo túnel e seu uso entre gateways.

**Ponto de atenção:** Túnel = **pacote inteiro** encapsulado (gateway–gateway); transporte = **só o payload** (host–host). **ESP** cifra; **AH** não cifra.

**Revisão rápida:** IPsec: túnel encapsula tudo; ESP cifra; AH só autentica.

## AUT-000115 — MDM: gerenciamento de dispositivos móveis

*Questão autoral — estilo Cesgranrio.*

**Gabarito: A**

O **MDM** permite **inventariar** dispositivos, **impor políticas** (senha, criptografia, aplicativos permitidos), **configurar** acessos corporativos e fazer **bloqueio e limpeza remotos** (inclusive limpeza **seletiva**, que remove só os dados corporativos em cenários BYOD).

- **A)** Correta. Descreve recursos típicos do MDM: política remota e wipe (seletivo) em caso de perda.
- **B)** Incorreta. O MDM atua por software e comunicação remota, e não por dispositivo físico de travamento.
- **C)** Incorreta. Firewall de borda e MDM têm funções distintas.
- **D)** Incorreta. O MDM não recupera senhas de aplicativos de terceiros.
- **E)** Incorreta. Nenhum controle garante ausência total de infecção; o MDM reduz riscos.

**Ponto de atenção:** MDM = **gerenciar e proteger o dispositivo e os dados corporativos nele**. BYOD pede **separação** entre dados pessoais e corporativos e limpeza **seletiva**.

**Revisão rápida:** MDM: inventário, políticas, bloqueio e wipe remoto.

## AUT-000116 — SSO: vantagens e riscos

*Questão autoral — estilo Cesgranrio.*

**Gabarito: B**

No **SSO**, um **provedor de identidade (IdP)** autentica o usuário e emite **asserções/tokens** (SAML, OpenID Connect/OAuth 2.0, Kerberos) aceitos pelos sistemas. **Vantagens:** menos senhas, melhor experiência, controle e revogação centralizados, auditoria no IdP. **Risco:** o IdP é **ponto único de falha e de comprometimento**, mitigado com **MFA**, monitoramento e alta disponibilidade.

- **A)** Incorreta. A autenticação ocorre uma vez, no IdP; ela não é eliminada.
- **B)** Correta. Descreve vantagens e riscos do SSO, e a mitigação por MFA.
- **C)** Incorreta. O SSO **reduz** bases de senhas por sistema, e não as replica.
- **D)** Incorreta. SAML e OIDC são justamente protocolos usados em SSO.
- **E)** Incorreta. O IdP centraliza logs e facilita a auditoria.

**Ponto de atenção:** SSO ≠ MFA ≠ cofre de senhas: SSO = **autenticar uma vez**; MFA = **mais de um fator**; ambos se complementam.

**Revisão rápida:** SSO: IdP + tokens (SAML/OIDC); risco do ponto único → MFA.

## AUT-000117 — Teste de penetração: autorização e escopo

*Questão autoral — estilo Cesgranrio.*

**Gabarito: C**

O teste de penetração só é legítimo com **autorização formal por escrito** do dono dos ativos. O **planejamento** define **escopo, objetivos, regras de engajamento** (técnicas permitidas, horários, contatos de emergência) e a **abordagem** (caixa-preta, cinza ou branca). Em seguida vêm descoberta, ataque e relatório (NIST SP 800-115).

- **A)** Incorreta. Varredura sem escopo e sem autorização pode ser crime e causar impacto no ambiente de produção.
- **B)** Incorreta. Avisar depois é arriscado: incidentes simulados podem acionar respostas reais, e o contratante precisa de pontos de contato.
- **C)** Correta. A autorização escrita, o escopo e as regras de engajamento são requisitos prévios.
- **D)** Incorreta. O nível de conhecimento prévio (caixa-preta, cinza, branca) é definido no planejamento; acesso administrativo total não é requisito.
- **E)** Incorreta. Técnicas manuais fazem parte do pentest, desde que autorizadas no escopo.

**Ponto de atenção:** Sem **autorização e escopo escritos**, é ataque, e não teste. Fases (NIST SP 800-115): **planejamento → descoberta → ataque → relatório**.

**Revisão rápida:** Pentest começa por autorização formal, escopo e regras de engajamento.

## AUT-000118 — Política de segurança da informação

*Questão autoral — estilo Cesgranrio.*

**Gabarito: D**

A PSI é um documento de **alto nível**, **aprovado pela alta direção**, **publicado e comunicado** aos funcionários e partes externas relevantes, e **revisada periodicamente**. Ela estabelece diretrizes e responsabilidades; **normas** e **procedimentos** detalham como cumpri-las.

- **A)** Incorreta. Configurações detalhadas pertencem a procedimentos; a PSI é de alto nível e para todos.
- **B)** Incorreta. Sem apoio e aprovação da direção, falta autoridade à política.
- **C)** Incorreta. A política deve ser **revisada** em intervalos planejados e em caso de mudanças significativas.
- **D)** Correta. Política aprovada, comunicada e apoiada por normas e procedimentos é a prática correta.
- **E)** Incorreta. A PSI alcança também terceiros e prestadores que acessem os ativos.

**Ponto de atenção:** Hierarquia documental: **política** (diretrizes) → **normas** (regras) → **procedimentos** (passo a passo). O compromisso da **direção** é pré-requisito.

**Revisão rápida:** PSI: aprovada pela direção, divulgada, revisada, com normas e procedimentos.

## AUT-000119 — Classificação das informações

*Questão autoral — estilo Cesgranrio.*

**Gabarito: E**

O **proprietário (dono) da informação** é responsável por classificá-la, considerando **valor, sensibilidade, criticidade e requisitos legais ou contratuais**. A informação é **rotulada** e **tratada conforme o nível** (acesso, armazenamento, transmissão e descarte), e a classificação é **reavaliada** quando o contexto muda.

- **A)** Incorreta. A TI é **custodiante** dos sistemas; a classificação cabe ao proprietário da informação.
- **B)** Incorreta. Classificar tudo no nível máximo encarece os controles e dilui a proteção do que é crítico.
- **C)** Incorreta. A sensibilidade muda com o tempo; a classificação deve ser revisada.
- **D)** Incorreta. A rotulagem é parte do processo e garante tratamento uniforme.
- **E)** Correta. Descreve corretamente quem classifica, com quais critérios e como o tratamento decorre do nível.

**Ponto de atenção:** **Proprietário** classifica; **custodiante** (TI) protege; **usuário** utiliza conforme as regras. Classificar = **rotular + tratar + reavaliar**.

**Revisão rápida:** Dono classifica por valor e sensibilidade; tratamento segue o nível.

## AUT-000120 — Segurança em IoT: credenciais padrão e atualização

*Questão autoral — estilo Cesgranrio.*

**Gabarito: A**

Os dispositivos IoT são alvos frequentes de botnets (como a Mirai) por **credenciais padrão**, **firmware desatualizado** e **serviços expostos**. As medidas básicas são: **alterar credenciais**, **atualizar firmware**, **desativar serviços desnecessários**, **segmentar a rede** (VLAN/zonas), **monitorar** e usar **autenticação forte**.

- **A)** Correta. Medidas básicas e eficazes: credenciais, atualização e segmentação.
- **B)** Incorreta. Credenciais padrão são conhecidas publicamente, e o firewall de borda não protege contra o tráfego interno.
- **C)** Incorreta. Logs são essenciais para detecção e investigação.
- **D)** Incorreta. Expor a administração à Internet amplia a superfície de ataque.
- **E)** Incorreta. Atualizações corrigem vulnerabilidades; evitá-las mantém o risco.

**Ponto de atenção:** IoT: **senha padrão + firmware velho + exposição** = receita de botnet. Defesa em camadas: **identidade, atualização, segmentação, monitoramento**.

**Revisão rápida:** IoT: trocar senha, atualizar, segmentar, monitorar.
