# Relatório de produção — Módulo 9 (Segurança da informação)

| Campo | Valor |
|---|---|
| Data | 2026-10-31 |
| Itens do edital | 9 e 9.1 a 9.21 (E5-081 a E5-102) |
| Arquivos | 14, em `conteudo/09-seguranca-informacao/` (13 de escopo A; `01-fundamentos-seguranca` é complemento B, C5-003) |
| Status final | `VALIDADO` pelo usuário em 2026-10-31, **com ressalvas** (interpretação do item 9.1; escolha das versões do NIST SP 800-61 e do ATT&CK; fontes de memória acima) |

## Arquivos e itens atendidos

| Arquivo | Itens |
|---|---|
| `01-fundamentos-seguranca.md` (complemento B) | 9 (título); C5-003 |
| `02-seguranca-fisica-e-logica.md` | 9.1 |
| `03-ameacas-e-malwares.md` | 9.3, 9.4 |
| `04-desenvolvimento-seguro.md` | 9.5 |
| `05-vpn-mdm-sso-mfa-iam.md` | 9.6, 9.7, 9.8, 9.9, 9.10 |
| `06-gestao-incidentes.md` | 9.11 |
| `07-inteligencia-de-ameacas.md` | 9.12 |
| `08-pentest-stride-mitre.md` | 9.13, 9.14, 9.15 |
| `09-gestao-riscos-e-continuidade.md` | 9.16 |
| `10-politicas-e-classificacao.md` | 9.17, 9.18 |
| `11-iso-27002.md` | 9.19 (parte ISO 27002) |
| `12-criptografia-e-certificados.md` | 9.19 (criptografia, certificação e assinatura digital) |
| `13-seguranca-cloud-e-iot.md` | 9.20, 9.21 |
| `14-operacao-de-seguranca.md` | 9.2 (os 12 elementos literais cobertos, checagem na seção 14 do arquivo) |

## Verificações

- Os 22 textos literais (item 9 e 9.1–9.21) constam nos arquivos; os 12 elementos de 9.2 foram checados; todos os arquivos têm atenção para a prova, síntese e referências; sem frases proibidas. O subitem 9.2 tem arquivo próprio (decisão D-06 cumprida: arquivo não vazio e com cobertura conferida).
- **Provas (apenas as duas catalogadas; gabaritos de terceiros, não validados):** 2023 — Q38 (SAST/DAST, B), Q39 (ABAC×RBAC, A), Q40 (táticas do ATT&CK, E), Q41 (envelope digital, D), Q42 (ciclo NIST SP 800-61, C), Q43 (SIEM, D), Q44 (ISO 27002, malware, A); 2018 — Q45 (classificação, E), Q46 (ISO 27002, acesso à rede, D), Q47 (firewall e ACL, A), Q48 (VPN, C), Q49 (bot, A), Q50 (SHA256RSA, E), Q51 (SAML, C), Q52 (ICP-Brasil, A). Itens 9.1, 9.12 a 9.14, 9.16, 9.17, 9.20 e 9.21 sem questão identificada; sem inferência de frequência.

## Fontes verificadas online (2026-10-31)

- NIST CSRC: SP 800-61 Rev. 3 (abril de 2025, substitui a Rev. 2, retirada em 3/4/2025; perfil do CSF 2.0 — **corpo não lido**); SP 800-162 (ABAC); SP 800-63B rev. 4 (fatores); SP 800-145 (contagens); SP 800-115 (metadados); IR 8259 (retirada em 20/4/2026, substituída pela Rev. 1).
- MITRE ATT&CK Enterprise: **15 táticas**, página em v20, com *Stealth* (TA0005) e *Defense Impairment* (TA0112).
- OWASP: Top 10 **2025** (lista completa; anterior 2021); SQL Injection, XSS, CSRF, Path Traversal; SAST e DAST.
- IETF: RFC 4301 (IPsec), RFC 5280 (X.509), RFC 6749 (OAuth 2.0). gov.br/ITI: AC-Raiz e raiz única.
- Wikipedia: SAML; STRIDE; DFD; pentest (sete fases; padrões OSSTMM, PTES, NIST SP 800-115, ISSAF, OWASP Testing Guide); CTI (três níveis); Cyber Kill Chain (7 fases); Threat hunting; firewall, IDS/IPS, DLP, CASB, SIEM, EDR, WAF, backup; ISO 27001 e 27002 (edições, 14 capítulos, quatro temas); ISO 31000; ISO 22301; Sarbanes–Oxley (parte por resumo); IEC 62443. FIRST: CVSS 4.0.
- Planalto: Decreto 10.222/2020 revogado pelo Decreto 12.573/2025; LGPD (Lei 13.709/2018).

## Divergências e alertas de versão registrados no conteúdo

- **ATT&CK:** a lista atual tem 15 táticas (inclui *Stealth* e *Defense Impairment*); a lista tradicional, de memória, tinha 14 (com *Defense Evasion*). Provas de 2018 e 2023 são anteriores.
- **NIST SP 800-61:** Rev. 3 (2025) substituiu a Rev. 2; as quatro fases da Rev. 2 estão de memória (não confirmadas na fonte lida).
- **OWASP Top 10:** a edição vigente é 2025; as provas podem usar 2017 ou 2021.
- **CTI:** três níveis padrão (estratégico, operacional, tático); "técnico" aparece como categoria adicional em algumas organizações.
- **Pentest:** fases variam por padrão; as quatro fases do NIST SP 800-115 não foram confirmadas.
- **NIST IR 8259:** retirada; Rev. 1 vigente.
- **Decreto 10.222/2020:** revogado.

## Revisão do usuário (2026-10-31, verificação adicional)

**Confirmados (PDFs lidos):** NIST SP 800-61 **Rev. 2**: ciclo de quatro fases (Preparation; Detection and Analysis; Containment, Eradication, and Recovery; Post-Incident Activity), com sumário e figuras; NIST SP 800-115: metodologia de quatro fases de pentest (planejamento, descoberta, ataque, relatório; a nota do documento a trata como exemplo).
**Confirmados (páginas):** MP 2.200-2/2001 (art. 1º institui a ICP-Brasil; art. 5º AC Raiz não emite certificados ao usuário final; art. 10, §1º, presunção de veracidade para documentos com certificado ICP-Brasil, §2º admite outros meios; art. 13, ITI como AC Raiz); CVSS 4.0 (faixas 0,0; 0,1–3,9; 4,0–6,9; 7,0–8,9; 9,0–10,0); responsabilidade compartilhada (AWS: segurança "da" e "na" nuvem; Microsoft: matriz IaaS/PaaS/SaaS, usada para corrigir a tabela do arquivo 13); BIA, RTO, RPO e MTPD; assinatura digital e criptossistema híbrido; IAST e SCA; RBAC e ABAC; WireGuard; MDM; MQTT e CoAP; DREAD (cinco fatores) e PASTA (sete etapas).
**Divergências corrigidas no texto:** WebAuthn é "resistente a alguns" ataques de *phishing* (não a todos); a Wikipedia descreve a resposta a incidentes em seis etapas, e o NIST em quatro; o artigo 10 da MP não exige, no caput, certificado ICP-Brasil (a presunção está no §1º).
**Continuam não confirmados:** número de controles da ISO 27002 (artigo lido por inteiro, sem os números), princípios e "registro e relato" da ISO 31000, estrutura interna da Rev. 3 do NIST SP 800-61, itens do OWASP IoT Top 10 (PDF 404), Diamond Model e STIX/TAXII (404), definições do CERT.br (exceto ransomware), SHA256withRSA, tamanhos de chave, OpenID Connect (só resumo), termo "SSL VPN", CSA CCM, XDR, CVE, proxy.
Arquivos 03 a 09 e 11 a 14 ajustados.

## Não verificado (de memória) — lista original; os itens confirmados na revisão estão indicados acima

- ISO/IEC 27002: **número de controles (93 em 2022; 114 em 2013)**, controles novos e lista de controles (iso.org bloqueado, HTTP 403). ISO 31000: princípios e "registro e relato". ISO 22301: BIA, RTO, RPO. SOX: aplicabilidade a empresas estrangeiras (ADRs); seções 302/404/906 por resumo.
- Quatro fases da Rev. 2 do NIST SP 800-61 e estrutura da Rev. 3; fases do NIST SP 800-115; PASTA; DREAD (fatores).
- IAST e SCA (definições), NIST RBAC (ANSI INCITS 359), OpenID Connect, TLS VPN, WireGuard, FIDO2 em texto literal, MDM.
- Envelope digital, assinatura digital (processo), SHA256withRSA, tamanhos de chave, MP 2.200-2/2001, Lei 14.063/2020, tipos de certificado ICP-Brasil.
- Modelo de responsabilidade compartilhada, CSA CCM, vulnerabilidades e protocolos de IoT, ISO 27017/27018.
- Proxy, XDR, SOC/SOAR, CVE, faixas numéricas do CVSS.
- Lei 12.527/2011 (LAI), COSO, ISO 27005; classificação de malware (CERT.br), fatores adicionais de segurança.
- Nenhum material de aprendizado de fornecedores específicos foi usado.

## Dúvidas de interpretação (a confirmar)

- **9.1** (segurança física e lógica): redação genérica; interpretada como controles físicos, ambientais e lógicos por camada.
- **9.11:** o edital cita "NIST SP 800-61" sem revisão; o texto apresenta a Rev. 2 (ciclo de quatro fases) e a Rev. 3. Qual revisão priorizar fica para sua decisão.
- **9.15:** o edital pede "Táticas"; o texto lista as 15 táticas atuais e menciona a lista de 14 de versões anteriores. Qual lista priorizar fica para sua decisão.
- **9.16:** o edital grafa "Sarbannes-Oxley"; mantida a grafia literal na referência ao item e corrigida no corpo ("Sarbanes-Oxley"). Sobreposição com o M04 (governança e riscos) tratada por remissão.
- **9.19:** dividido em dois arquivos (`11` e `12`); a matriz lista os dois.
- O item 9 (E5-081) é título sem texto próprio: coberto como introdução no arquivo `01` (complemento B, C5-003).

## Pendências

Confirmação das interpretações e das decisões de versão acima; verificação das fontes listadas; revisão do usuário. Com a produção teórica dos nove módulos concluída (em revisão o M09), restam, **sem autorização para iniciar**: criação da estrutura de Conhecimentos Gerais (proposta aprovada, não criada), questões, flashcards, simulados, material NotebookLM e site.
