---
modulo: 09-seguranca-informacao
arquivo: 05-vpn-mdm-sso-mfa-iam
itens_edital:
  - "9.6 VPN"
  - "9.7 MDM"
  - "9.8 SSO"
  - "9.9 MFA"
  - "9.10 Gestão de Identidade e acesso (autenticação, autorização e auditoria), RBAC e ABAC"
ids_matriz: ["E5-087", "E5-088", "E5-089", "E5-090", "E5-091"]
escopo: "A — conteúdo expresso no edital."
tipo_conteudo: "teoria"
status: "VALIDADO"
ultima_atualizacao: "2026-10-31"
---

# VPN, MDM, SSO, MFA e Gestão de Identidade e Acesso (IAM)

**Módulo:** M09 — Segurança da informação
**Textos oficiais (Anexo IV):** 9.6 "VPN"; 9.7 "MDM"; 9.8 "SSO"; 9.9 "MFA"; 9.10 "Gestão de Identidade e acesso (autenticação, autorização e auditoria), RBAC e ABAC".
**Escopo:** A. Criptografia e certificados (base de VPN e SSO): `12`.
**Status:** `VALIDADO` (aprovado pelo usuário em 2026-10-31, com ressalvas: interpretação do item 9.1 e escolha das versões do NIST SP 800-61 e do MITRE ATT&CK a confirmar; fontes de memória listadas em `docs/qualidade/relatorio-producao-modulo-09.md`). **Verificados** (2026-10-31): IPsec/RFC 4301 (AH, ESP, modos); fatores de autenticação (NIST SP 800-63B rev. 4); ABAC (NIST SP 800-162); SAML (Wikipedia: IdP/SP, bindings, *Artifact*); OAuth 2.0 (RFC 6749). **Revisão:** WireGuard, RBAC × ABAC (Wikipedia), MDM (administração de dispositivos móveis; *remote wipe*, imposição de políticas, BYOD) e WebAuthn ("resistente a *alguns* ataques de *phishing*") **confirmados**; OpenID Connect como camada sobre o OAuth 2.0 só por resumo automático; o termo "SSL VPN" **não confirmado**.

**Objetivos de aprendizagem.** (1) Explicar VPN, tunelamento e protocolos; (2) descrever MDM e seus recursos; (3) explicar SSO e federação; (4) listar fatores de MFA; (5) diferenciar autenticação, autorização, auditoria, RBAC e ABAC.

---

## 1. VPN — *Virtual Private Network* (9.6)

**VPN** cria um **canal seguro (túnel)** sobre rede pública ou não confiável, com **confidencialidade, integridade e autenticação** (por criptografia). **Tunelamento:** os pacotes originais são **encapsulados** em outros pacotes para atravessar a rede, no caso criptografados.

| Tipo | Uso |
|---|---|
| **Acesso remoto** (cliente–gateway) | Colaborador remoto acessa a rede interna |
| **Site a site** (*site-to-site*) | Interliga redes de duas unidades |
| **Divisão do tráfego (*split tunneling*)** | Apenas parte do tráfego vai pelo túnel (risco × desempenho) |

### 1.1 IPsec (RFC 4301 — verificado)

Arquitetura de segurança da camada IP. Dois protocolos: **AH** (*Authentication Header*: **integridade e autenticação da origem**, sem confidencialidade) e **ESP** (*Encapsulating Security Payload*: os mesmos serviços **mais confidencialidade**). Dois modos: **transporte** (protege principalmente os protocolos de camada superior; cabeçalho IP original) e **túnel** (protege **pacotes IP inteiros encapsulados**; típico de VPN site a site). Gestão de chaves: IKE (de memória).

### 1.2 Outras tecnologias (WireGuard e a lista geral de protocolos verificados; demais de memória)

**VPN SSL/TLS** (acesso via navegador ou cliente, sobre TLS), **WireGuard** (moderna e simples), **OpenVPN**, **L2TP/IPsec**, **PPTP** (obsoleto e inseguro), **MPLS** (rede privada do provedor; **não é criptografada** por padrão). Camadas: IPsec na rede (L3), TLS na transporte/aplicação.

**Limitações:** VPN protege o **canal**, não o ponto final comprometido; exige MFA e gestão de acesso; concentra risco no *gateway*. Evolução: **ZTNA** (*Zero Trust Network Access*, acesso por aplicação e contexto; de memória).

## 2. MDM — *Mobile Device Management* (9.7)

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

## 3. SSO — *Single Sign-On* (9.8)

**SSO** permite que o usuário **autentique uma vez** e acesse **vários sistemas** sem novo login. Benefícios: menos senhas, melhor experiência, controle central, desativação imediata de acesso. Riscos: **ponto único de falha/comprometimento** (exige MFA e proteção forte do provedor de identidade).

### 3.1 Federação e protocolos

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

## 4. MFA — Autenticação Multifator (9.9)

**MFA** exige **dois ou mais fatores de categorias diferentes** (verificado em NIST SP 800-63B rev. 4):

| Fator | Significado | Exemplos |
|---|---|---|
| **Conhecimento** (*something you know*) | Algo que só o usuário sabe | Senha, PIN |
| **Posse** (*something you have*) | Algo que o usuário possui | Token físico, celular com aplicativo, cartão inteligente, chave de segurança |
| **Inerência** (*something you are*) | Característica biométrica | Digital, face, íris |

Observações: **dois fatores da mesma categoria** (duas senhas) **não** são MFA; a biometria, segundo o NIST, **não é reconhecida isoladamente** como autenticador. Fatores adicionais citados na literatura: localização e comportamento (de memória). **Métodos:** OTP por aplicativo (TOTP), SMS (considerado mais fraco), *push*, chaves de segurança (**FIDO2/WebAuthn**: a Wikipedia diz "resistente a alguns ataques de *phishing*", não a todos). O NIST exige no AAL2 ao menos uma opção **resistente a *phishing*** (verificado). Riscos: fadiga de MFA (*push bombing*), *SIM swap*, *phishing* em tempo real.

## 5. Gestão de identidade e acesso — IAM (9.10)

**IAM** (*Identity and Access Management*) gerencia identidades digitais e seus direitos de acesso ao longo do ciclo de vida.

### 5.1 AAA: autenticação, autorização e auditoria

| Etapa | Pergunta | Exemplo |
|---|---|---|
| **Identificação** | Quem diz ser? | Nome de usuário |
| **Autenticação** | Prove que é você | Senha, MFA |
| **Autorização** | O que você pode fazer? | Perfil de acesso |
| **Auditoria (*accounting*)** | O que você fez? | Registros de acesso e ações, trilha de auditoria |

### 5.2 Ciclo de vida da identidade

Provisionamento (entrada), alteração (mudança de função), **desprovisionamento imediato** (saída), recertificação periódica de acessos, **PAM** (gestão de acessos privilegiados), governança de identidades (IGA), segregação de funções.

### 5.3 Modelos de controle de acesso

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

## 6. Comparações conceituais

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

## 7. Atenção para a prova

*Inferência técnica e recomendação pedagógica; sem atribuir frequência à banca.*

- Memorizar os **três fatores** do MFA (e que dois fatores iguais não são MFA); diferenciar **RBAC (papel) × ABAC (atributos)**; saber que VPN usa **tunelamento**.
- *Evidência histórica (amostra de duas provas):* Prova 6 de 2023 — **Q39** (ABAC × RBAC; gabarito A). Prova 15 de 2018 — **Q48** (VPN: tunelamento; gabarito C) e **Q51** (SAML: protocolos, *artifact resolution*; gabarito C; o catálogo anota que SAML não é citado literalmente, mas o SSO, 9.8, é). Gabaritos de terceiros, não validados. Duas provas não permitem inferir frequência.

## 8. Síntese

VPN: túnel criptografado (IPsec: AH/ESP, transporte/túnel; SSL/TLS). MDM: gestão e segurança de dispositivos móveis (políticas, *wipe*, BYOD). SSO: um login, vários sistemas (IdP/SP, SAML, OAuth/OIDC). MFA: conhecimento, posse, inerência. IAM: AAA; RBAC (papéis) e ABAC (atributos).

## 9. Pontos para a futura produção de questões (registro)

Fatores de MFA; RBAC×ABAC; SAML×OAuth; modos do IPsec; recursos de MDM; AAA.

## 10. Referências

- IETF RFC 4301 (IPsec) e RFC 6749 (OAuth 2.0) — **verificadas em 2026-10-31**. NIST SP 800-63B rev. 4 (fatores) e SP 800-162 (ABAC; resumo) — **verificadas**. Wikipedia, "SAML" — **verificada** (fonte OASIS não lida).
- Wikipedia ("RBAC", "ABAC", "MDM", "WebAuthn", "VPN") e wireguard.com — **verificadas em 2026-10-31**. OpenID Connect (só resumo), "SSL VPN", MAM/UEM, NIST RBAC (ANSI INCITS 359) — **não confirmados; de memória**.
- Edital Transpetro nº 04/2026.4, Anexo IV, itens 9.6 a 9.10. Provas: Transpetro 2023, Prova 6, Q39; Transpetro 2018, Prova 15, Q48 e Q51 (gabaritos de terceiros, não validados).
