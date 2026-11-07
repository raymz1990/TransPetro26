# Questões oficiais — m09-seguranca-informacao — gabaritos comentados (T04 — Transpetro 2023 (Prova 6))

## OFI-000035 — SDL: testes SAST x DAST

*Questão oficial — Fundação Cesgranrio, Transpetro PSP/Terra 002/2023, Prova 6, questão 38.*

**Gabarito: B**

**DAST** (*Dynamic Application Security Testing*) testa a aplicação **em execução**, de fora (caixa-preta). **SAST** analisa o código-fonte, sem executar. DREAD e STRIDE são modelos de ameaças.

- **A)** Incorreta. SAST analisa o código estático, sem executar a aplicação.
- **B)** Correta. DAST testa o software compilado em execução; é o descrito.
- **C)** Incorreta. VAST é uma metodologia de modelagem de ameaças (*Visual, Agile and Simple Threat modeling*).
- **D)** Incorreta. DREAD é um modelo de classificação de risco.
- **E)** Incorreta. STRIDE é um modelo de categorização de ameaças.

**Ponto de atenção:** **S**tatic = código parado; **D**ynamic = aplicação rodando. DREAD (classificar) e STRIDE (categorizar) não são testes.

**Revisão rápida:** SAST = código; DAST = execução.

**Fonte:** Fundação Cesgranrio, Transpetro PSP/Terra 002/2023 (Edital nº 2), Análise de Sistemas — Processos de Negócios (2023), prova Prova 6, questão 38; gabarito: de terceiros (QConcursos), alterado em 9/01/2024; não validado contra a banca.

## OFI-000036 — Controle de acesso: ABAC x RBAC

*Questão oficial — Fundação Cesgranrio, Transpetro PSP/Terra 002/2023, Prova 6, questão 39.*

**Gabarito: A**

**ABAC** (*Attribute-Based Access Control*) decide com base em **atributos** do usuário, do recurso, da ação e do contexto/ambiente (local, horário etc.). RBAC usa papéis; DAC deixa o dono decidir; MAC usa rótulos de classificação; ACL é uma lista de permissões por recurso.

- **A)** Correta. Combinação de atributos (local, recurso, contexto, ambiente) define ABAC.
- **B)** Incorreta. RBAC concede acesso por papel, sem considerar contexto e atributos dinâmicos.
- **C)** Incorreta. DAC: o proprietário do recurso define as permissões.
- **D)** Incorreta. MAC: o sistema impõe regras por rótulos de sensibilidade e níveis de autorização.
- **E)** Incorreta. ACL é um mecanismo de lista de permissões, não uma abordagem de decisão por atributos.

**Ponto de atenção:** Palavras-chave: **atributos + contexto + políticas** = ABAC; **papéis** = RBAC; **dono** = DAC; **rótulos** = MAC.

**Revisão rápida:** ABAC: decide por atributos e contexto.

**Fonte:** Fundação Cesgranrio, Transpetro PSP/Terra 002/2023 (Edital nº 2), Análise de Sistemas — Processos de Negócios (2023), prova Prova 6, questão 39; gabarito: de terceiros (QConcursos), alterado em 9/01/2024; não validado contra a banca.

## OFI-000037 — MITRE ATT&CK: táticas

*Questão oficial — Fundação Cesgranrio, Transpetro PSP/Terra 002/2023, Prova 6, questão 40.*

**Gabarito: E**

As táticas do ATT&CK Enterprise incluem *Reconnaissance, Resource Development, Initial Access, Execution, Persistence, Privilege Escalation, Defense Evasion, **Credential Access**, Discovery, Lateral Movement, Collection, Command and Control, Exfiltration e Impact* (14 na v14; a v19 tem 15). "Acesso à credencial" é uma tática; as demais opções são técnicas ou termos genéricos.

- **A)** Incorreta. Não é tática do ATT&CK (a técnica de varredura de vulnerabilidades está sob Reconnaissance).
- **B)** Incorreta. "Comunicação entre processos" é técnica (execução por IPC), não tática.
- **C)** Incorreta. "Manipulação de conta" (*Account Manipulation*) é **técnica** (Persistence/Privilege Escalation).
- **D)** Incorreta. "Evasão do depurador" é técnica de Defense Evasion/Discovery.
- **E)** Correta. *Credential Access* é tática do ATT&CK.

**Ponto de atenção:** Distinga **tática** (objetivo: o porquê) de **técnica** (como). A lista das táticas é curta e decorável. Decisão do projeto: referência com 14 táticas + nota sobre a v19 (15).

**Revisão rápida:** Tática = objetivo; técnica = método; subtécnica = detalhe.

**Fonte:** Fundação Cesgranrio, Transpetro PSP/Terra 002/2023 (Edital nº 2), Análise de Sistemas — Processos de Negócios (2023), prova Prova 6, questão 40; gabarito: de terceiros (QConcursos), alterado em 9/01/2024; não validado contra a banca.

## OFI-000038 — Criptografia híbrida: envelope digital

*Questão oficial — Fundação Cesgranrio, Transpetro PSP/Terra 002/2023, Prova 6, questão 41.*

**Gabarito: D**

No **envelope digital**, a mensagem é cifrada com uma **chave de sessão simétrica** (rápida), e essa chave é cifrada com a **chave pública do destinatário**. Somente o destinatário, com sua chave privada, abre o envelope e obtém a chave de sessão.

- **A)** Incorreta. Cifrar com a privada do remetente gera assinatura (autenticidade), e qualquer um com a pública do remetente decifraria; não dá confidencialidade.
- **B)** Incorreta. A chave privada do destinatário é usada para **abrir** o envelope, e não para fechá-lo.
- **C)** Incorreta. A pública do remetente não restringe a leitura ao destinatário.
- **D)** Correta. Cifrar a chave simétrica com a pública do destinatário garante que só ele a recupere.
- **E)** Incorreta. Um terceiro confiável não é parte do esquema, e só ele poderia decifrar.

**Ponto de atenção:** Cifrar para alguém = chave **pública do destinatário**; assinar = chave **privada do remetente**.

**Revisão rápida:** Envelope: dados (simétrica) + chave simétrica (pública do destinatário).

**Fonte:** Fundação Cesgranrio, Transpetro PSP/Terra 002/2023 (Edital nº 2), Análise de Sistemas — Processos de Negócios (2023), prova Prova 6, questão 41; gabarito: de terceiros (QConcursos), alterado em 9/01/2024; não validado contra a banca.

## OFI-000039 — Resposta a incidentes: NIST SP 800-61

*Questão oficial — Fundação Cesgranrio, Transpetro PSP/Terra 002/2023, Prova 6, questão 42.*

**Gabarito: C**

A **NIST SP 800-61** (*Computer Security Incident Handling Guide*) define o ciclo de vida de resposta a incidentes (Rev. 2: preparação; detecção e análise; contenção, erradicação e recuperação; atividade pós-incidente). A Rev. 3 (2025) alinha a resposta ao NIST CSF 2.0.

- **A)** Incorreta. SP 800-30 trata de avaliação de riscos.
- **B)** Incorreta. SP 800-34 trata de planejamento de contingência.
- **C)** Correta. SP 800-61 define o ciclo de vida de resposta a incidentes.
- **D)** Incorreta. ISO 27033-5 trata de segurança de redes (VPN).
- **E)** Incorreta. ISO 27034-1 trata de segurança de aplicações.

**Ponto de atenção:** Decore o **número de cada SP**: 800-30 (riscos), 800-34 (contingência), 800-61 (incidentes), 800-115 (testes de segurança), 800-53 (controles). Decisão do projeto: Rev. 3 como referência, com a Rev. 2 em comparação.

**Revisão rápida:** 800-61 = resposta a incidentes.

**Fonte:** Fundação Cesgranrio, Transpetro PSP/Terra 002/2023 (Edital nº 2), Análise de Sistemas — Processos de Negócios (2023), prova Prova 6, questão 42; gabarito: de terceiros (QConcursos), alterado em 9/01/2024; não validado contra a banca.

## OFI-000040 — SIEM

*Questão oficial — Fundação Cesgranrio, Transpetro PSP/Terra 002/2023, Prova 6, questão 43.*

**Gabarito: D**

O **SIEM** (*Security Information and Event Management*) **coleta, correlaciona e analisa** logs e eventos de várias fontes, gerando alertas e visão consolidada.

- **A)** Incorreta. CASB controla o uso de serviços em nuvem.
- **B)** Incorreta. WAF protege aplicações web contra ataques HTTP.
- **C)** Incorreta. DLP evita vazamento de dados.
- **D)** Correta. SIEM agrega e correlaciona eventos e logs de segurança.
- **E)** Incorreta. Proxy intermedia o tráfego, aplicando filtros e cache.

**Ponto de atenção:** "Agregar e correlacionar logs e eventos" = SIEM.

**Revisão rápida:** SIEM: coleta + correlação + alerta.

**Fonte:** Fundação Cesgranrio, Transpetro PSP/Terra 002/2023 (Edital nº 2), Análise de Sistemas — Processos de Negócios (2023), prova Prova 6, questão 43; gabarito: de terceiros (QConcursos), alterado em 9/01/2024; não validado contra a banca.

## OFI-000041 — ISO/IEC 27002: proteção contra malware

*Questão oficial — Fundação Cesgranrio, Transpetro PSP/Terra 002/2023, Prova 6, questão 44.*

**Gabarito: A**

Na edição de 2013 da ISO/IEC 27002, a proteção contra malware é um objetivo da seção **12 — Segurança nas operações**. **Atenção:** a edição 2022 reorganizou os controles em quatro temas (organizacionais, pessoas, físicos e tecnológicos), e a proteção contra malware passou ao tema **tecnológico** (controle 8.7). A questão segue a organização por seções da edição anterior.

- **A)** Correta. Segurança nas operações (seção 12 da edição 2013) contém a proteção contra malware.
- **B)** Incorreta. Segurança nas comunicações (seção 13) trata de redes e transferência de informações.
- **C)** Incorreta. Segurança em recursos humanos (seção 7) trata de contratação, conscientização e desligamento.
- **D)** Incorreta. Controle de acesso (seção 9) trata de requisitos, gestão de usuários e responsabilidades.
- **E)** Incorreta. Segurança física e do ambiente (seção 11) trata de áreas seguras e equipamentos.

**Ponto de atenção:** **Versão importa**: na 27002:2013, malware = operações (12.2); na 27002:2022, é o controle tecnológico 8.7. Registre a edição ao estudar controles.

**Revisão rápida:** Malware: 27002:2013 → 12.2 (operações); 27002:2022 → 8.7 (tecnológico).

**Fonte:** Fundação Cesgranrio, Transpetro PSP/Terra 002/2023 (Edital nº 2), Análise de Sistemas — Processos de Negócios (2023), prova Prova 6, questão 44; gabarito: de terceiros (QConcursos), alterado em 9/01/2024; não validado contra a banca.
