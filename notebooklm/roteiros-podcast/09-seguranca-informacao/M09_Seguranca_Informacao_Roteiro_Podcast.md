# Roteiro de podcast — M09: Segurança da Informação

## Identificação
- Concurso: Processo Seletivo Público TRANSPETRO 2026.4 (Edital nº 04/2026)
- Ênfase: 5 — Análise de Sistemas: Processos de Negócios
- Banca: Fundação Cesgranrio
- Módulo: M09 — Segurança da Informação
- Formato: revisão oral explicativa (duas vozes ou narração única)
- Fonte de referência: `notebooklm/fontes/M09_Seguranca_Informacao_Completo.md` e `notebooklm/resumos/M09_Seguranca_Informacao_Resumo.md`

## Como usar
Adicione ao NotebookLM a fonte completa do módulo e este roteiro. No recurso de áudio, use este arquivo como pauta. Ele é um guia de revisão e **não substitui** o material completo, que prevalece em caso de dúvida. Não contém estatística de incidência em prova nem questões oficiais; as perguntas de fixação são autorais do projeto, sem vínculo com a Cesgranrio.

## 1. Apresentação
Hoje revisamos o módulo M09, Segurança da Informação, da Ênfase 5 da Transpetro 2026.4, banca Fundação Cesgranrio. A ideia é percorrer os conceitos em ordem, comparar o que costuma ser confundido, marcar pontos de atenção e terminar com perguntas de fixação.

## 2. Contextualização no edital
Fundamentos, segurança física e lógica, malwares e ataques, desenvolvimento seguro, VPN/MDM/SSO/MFA/IAM, resposta a incidentes, inteligência de ameaças, pentest/STRIDE/ATT&CK, riscos e continuidade, políticas, ISO 27002, criptografia, nuvem/IoT e operação de segurança.

## 3. Explicação dos conceitos
### 3.1 Fundamentos
Tríade CID (confidencialidade, integridade, disponibilidade), mais autenticidade e não repúdio. Ativo, ameaça, vulnerabilidade, risco e controle. Controles administrativos, técnicos e físicos; preventivos, detectivos e corretivos. Defesa em profundidade, menor privilégio e zero trust. SGSI: ISO 27001.

### 3.2 Malwares, ataques e desenvolvimento seguro
Malware: vírus, worm, trojan, ransomware, spyware, rootkit, backdoor, botnet, fileless. Ataques web (OWASP): SQLi, XSS, CSRF, path traversal; DDoS; engenharia social. Desenvolvimento seguro: shift left, validação, parametrização, controle de acesso. SAST (estático), DAST (dinâmico), IAST (instrumentado), SCA (componentes).

### 3.3 Identidade e acesso
VPN: túnel criptografado (IPsec com AH/ESP, modos transporte e túnel; SSL/TLS). MDM: gestão de dispositivos móveis, wipe, BYOD. SSO: um login para vários sistemas (IdP/SP, SAML, OAuth/OIDC). MFA: conhecimento, posse e inerência. IAM: AAA; RBAC (papéis) e ABAC (atributos).

### 3.4 Incidentes, inteligência e pentest
Resposta a incidentes (NIST SP 800-61): preparação, detecção e análise, contenção/erradicação/recuperação e aprendizado; a Rev. 2 (2012) foi retirada e a Rev. 3 (2025) é perfil do CSF 2.0. CTI: estratégica, operacional e tática; IoC × TTP; Kill Chain (7 fases), ATT&CK, STIX/TAXII; threat hunting é busca proativa por hipótese. Pentest: ataque simulado autorizado (caixa-preta, cinza, branca). STRIDE: Spoofing, Tampering, Repudiation, Information disclosure, DoS e Elevation of privilege.

### 3.5 Riscos, continuidade, políticas e ISO 27002
ISO 31000: princípios, estrutura e processo; tratamento: mitigar, evitar, transferir ou aceitar. ISO 22301: SGCN, BIA, RTO, RPO. SOX (2002): controles internos e responsabilidade dos executivos. PSI: política, norma, procedimento e diretriz; classificação (pública, interna, confidencial, restrita); dono × custodiante. ISO 27001 traz requisitos (certificável); ISO 27002 traz controles; a edição de 2022 tem quatro temas: organizacionais, pessoas, físicos e tecnológicos.

### 3.6 Criptografia, nuvem, IoT e operação
Simétrica (AES), assimétrica (RSA, ECC), hash (SHA-2), HMAC, envelope digital. Assinatura digital: hash assinado com a chave privada; verificação com a pública. Certificado X.509 liga chave pública a sujeito, assinado por uma AC; ICP-Brasil com raiz única. Nuvem: responsabilidade compartilhada. IoT: recursos limitados, credenciais e firmware; IEC 62443. Operação: firewall, proxy, IDS (detecta) × IPS (bloqueia), DLP, CASB, SIEM, EDR, WAF; gestão de vulnerabilidades (CVE, CVSS); backup (completo, incremental, diferencial; 3-2-1).

## 4. Comparações para fixar
- IDS × IPS.
- Simétrica × assimétrica.
- SAST × DAST × IAST.
- RBAC × ABAC.
- Mitigar × evitar × transferir × aceitar.
- IoC × TTP.
- Backup completo × incremental × diferencial.

## 5. Armadilhas conceituais (hipóteses de atenção)
São pontos em que a confusão é plausível, não afirmações sobre frequência na prova.
- Dizer que a assinatura digital usa a chave pública para assinar: assina-se com a privada.
- Trocar IDS e IPS.
- Esquecer que a contagem de táticas do ATT&CK varia por versão (15 na página atual, 14 na lista anterior).
- Atribuir à ISO 27002:2022 a estrutura de 14 capítulos: é a de 2013.

## 6. Recapitulação
Retome em voz alta, na ordem: Fundamentos; Malwares, ataques e desenvolvimento seguro; Identidade e acesso; Incidentes, inteligência e pentest; Riscos, continuidade, políticas e ISO 27002; Criptografia, nuvem, IoT e operação. Para cada bloco, cite a definição central e uma diferença conceitual.

## 7. Perguntas de fixação (com respostas)
1. **O que o STRIDE significa?** — Spoofing, Tampering, Repudiation, Information disclosure, Denial of service, Elevation of privilege.
2. **Qual a diferença entre RTO e RPO?** — RTO: tempo-alvo para restabelecer o serviço. RPO: perda máxima de dados aceitável, medida em tempo.
3. **Quais os fatores do MFA?** — Conhecimento, posse e inerência.
4. **Quais as fases do ciclo de resposta a incidentes?** — Preparação; detecção e análise; contenção, erradicação e recuperação; atividade pós-incidente.

## Limites
- Roteiro construído a partir das sínteses do módulo; detalhes, exceções e referências estão no documento completo.
- Qualquer analogia usada na gravação deve ser apresentada como simplificação didática, com seu limite explícito.
- Itens marcados no material como "não verificados" mantêm essa ressalva no documento completo.
