# Resumo — Módulo M09: Segurança da Informação

## Identificação
- Concurso: Processo Seletivo Público TRANSPETRO 2026.4 (Edital nº 04/2026)
- Ênfase: 5 — Análise de Sistemas: Processos de Negócios
- Banca: Fundação Cesgranrio
- Origem: seções "Síntese" dos arquivos de `conteudo/09-seguranca-informacao/` (extraídas automaticamente, sem reescrita)

Este resumo complementa o documento completo do módulo; não o substitui.

## Fundamentos de Segurança da Informação

CID + autenticidade e não repúdio; ativo, ameaça, vulnerabilidade, risco, controle; controles administrativos, técnicos e físicos; preventivos, detectivos e corretivos; defesa em profundidade, menor privilégio, *zero trust*; SGSI (ISO 27001).

## Segurança Física e Lógica

Segurança física (perímetro, acesso, ambiente, mídias) e lógica (identidade, rede, sistemas, dados, endpoints, monitoramento); defesa em profundidade; menor privilégio; controles complementam-se.

## Softwares Maliciosos e Ataques

*Malware*: vírus, worm, trojan, ransomware, spyware, rootkit, backdoor, bot/botnet, fileless. Ataques web: SQLi, XSS, CSRF, path traversal (OWASP). DDoS; ataques de rede e criptográficos; engenharia social; defesas em camadas e backup.

## Técnicas de Desenvolvimento Seguro; SAST, DAST e IAST

Segurança em todas as fases (*shift left*); codificação segura (validação, parametrização, controle de acesso, segredos); SAST (estático), DAST (dinâmico), IAST (instrumentado), SCA (componentes); DevSecOps.

## VPN, MDM, SSO, MFA e Gestão de Identidade e Acesso (IAM)

VPN: túnel criptografado (IPsec: AH/ESP, transporte/túnel; SSL/TLS). MDM: gestão e segurança de dispositivos móveis (políticas, *wipe*, BYOD). SSO: um login, vários sistemas (IdP/SP, SAML, OAuth/OIDC). MFA: conhecimento, posse, inerência. IAM: AAA; RBAC (papéis) e ABAC (atributos).

## Gerenciamento de Resposta a Incidentes (NIST SP 800-61)

IR = preparar, detectar e analisar, conter/erradicar/recuperar, aprender. NIST SP 800-61 Rev. 2 (2012, retirada) → Rev. 3 (2025, perfil do CSF 2.0). Evidências e cadeia de custódia; comunicação e notificação legal; métricas.

## Inteligência de Ameaças (*Threat Intelligence*) e Caça a Ameaças (*Threat Hunting*)

CTI = inteligência acionável sobre ameaças (estratégica, operacional, tática); IoC × TTP; Kill Chain (7 fases), ATT&CK, STIX/TAXII; ciclo de inteligência; *threat hunting* = busca proativa por hipótese, que realimenta a detecção.

## Testes de Penetração, Modelagem de Ameaças (STRIDE) e Táticas do MITRE ATT&CK

Pentest = ataque simulado autorizado (caixa-preta, cinza, branca; fases do reconhecimento ao relatório). STRIDE = Spoofing, Tampering, Repudiation, Information disclosure, DoS, Elevation of privilege, ligados a propriedades; aplicado a DFD. ATT&CK Enterprise: 15 táticas na página atual (14 na lista anterior), de Reconnaissance a Impact.

## Gestão de Riscos (ISO 31000), Continuidade de Negócios (ISO 22301) e Lei Sarbanes-Oxley

ISO 31000: princípios, estrutura e processo (comunicação; contexto; avaliação [identificação, análise, ponderação]; tratamento; monitoramento; registro). Tratamento: mitigar, evitar, transferir, aceitar. ISO 22301: SGCN, BIA, RTO, RPO, planos e testes. SOX (2002): controles internos e responsabilidade dos executivos, PCAOB, ITGC.

## Políticas de Segurança da Informação e Classificação de Informações

PSI: declaração da direção; hierarquia política–norma–procedimento–diretriz; papéis; ciclo (elaborar, aprovar, divulgar, implementar, monitorar, revisar). Classificação: níveis (pública, interna, confidencial, restrita), dono × custodiante, rotulagem, tratamento e descarte proporcionais.

## Norma ISO/IEC 27002

Família 27000: 27001 (requisitos, certificável) e 27002 (controles). 2013: 14 capítulos. 2022: quatro temas (organizacionais, pessoas, físicos, tecnológicos), controles com atributos. Seleção de controles por riscos; SoA.

## Criptografia, Certificação Digital e Assinatura Digital

Simétrica (AES), assimétrica (RSA, ECC), *hash* (SHA-2), HMAC, híbrida e envelope digital. Assinatura digital: *hash* + chave privada; verificação com a pública. Certificado X.509 liga chave pública a sujeito, assinado por AC. ICP: AC, AR, raiz, LCR/OCSP. ICP-Brasil: raiz única (ITI).

## Segurança em Nuvem e em IoT

Nuvem: 5 características, 3 serviços, 4 implantações; responsabilidade compartilhada; riscos (configuração, IAM, dados, visibilidade) e controles (IAM, criptografia, segmentação, CSPM, CASB, monitoramento). IoT: recursos limitados e longa vida; vulnerabilidades (credenciais, firmware); controles em dispositivo, comunicação, rede e plataforma; OT/ICS e IEC 62443.

## Operação de Segurança

Firewall (ACL, *stateful*, NGFW); proxy; IDS (detecta) × IPS (bloqueia); DLP; CASB; SIEM (correlação); antivírus; EDR (telemetria e resposta); WAF (HTTP); gestão de vulnerabilidades (CVE, CVSS 4.0, priorização por risco); monitoração; backup (completo, incremental, diferencial; 3-2-1; testes de restauração).
