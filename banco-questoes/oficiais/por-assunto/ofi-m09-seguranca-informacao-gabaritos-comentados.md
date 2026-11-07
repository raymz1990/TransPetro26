# Questões oficiais — m09-seguranca-informacao — gabaritos comentados (T04 — Transpetro 2023 (Prova 6) e 2018 (Prova 15))

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

**Fonte:** Fundação Cesgranrio, Transpetro PSP/Terra 002/2023 (Edital nº 2), Análise de Sistemas — Processos de Negócios (2023), prova Prova 6, questão 38; gabarito: oficial (PDF de gabarito da Cesgranrio, alterado em 9/01/2024), conferido na T13.

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

**Fonte:** Fundação Cesgranrio, Transpetro PSP/Terra 002/2023 (Edital nº 2), Análise de Sistemas — Processos de Negócios (2023), prova Prova 6, questão 39; gabarito: oficial (PDF de gabarito da Cesgranrio, alterado em 9/01/2024), conferido na T13.

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

**Fonte:** Fundação Cesgranrio, Transpetro PSP/Terra 002/2023 (Edital nº 2), Análise de Sistemas — Processos de Negócios (2023), prova Prova 6, questão 40; gabarito: oficial (PDF de gabarito da Cesgranrio, alterado em 9/01/2024), conferido na T13.

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

**Fonte:** Fundação Cesgranrio, Transpetro PSP/Terra 002/2023 (Edital nº 2), Análise de Sistemas — Processos de Negócios (2023), prova Prova 6, questão 41; gabarito: oficial (PDF de gabarito da Cesgranrio, alterado em 9/01/2024), conferido na T13.

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

**Fonte:** Fundação Cesgranrio, Transpetro PSP/Terra 002/2023 (Edital nº 2), Análise de Sistemas — Processos de Negócios (2023), prova Prova 6, questão 42; gabarito: oficial (PDF de gabarito da Cesgranrio, alterado em 9/01/2024), conferido na T13.

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

**Fonte:** Fundação Cesgranrio, Transpetro PSP/Terra 002/2023 (Edital nº 2), Análise de Sistemas — Processos de Negócios (2023), prova Prova 6, questão 43; gabarito: oficial (PDF de gabarito da Cesgranrio, alterado em 9/01/2024), conferido na T13.

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

**Fonte:** Fundação Cesgranrio, Transpetro PSP/Terra 002/2023 (Edital nº 2), Análise de Sistemas — Processos de Negócios (2023), prova Prova 6, questão 44; gabarito: oficial (PDF de gabarito da Cesgranrio, alterado em 9/01/2024), conferido na T13.

## OFI-000056 — Classificação da informação: quem decide

*Questão oficial — Fundação Cesgranrio, Transpetro PSP RH 2018.1, Prova 15, questão 45.*

**Gabarito: E**

A classificação é **decisão de negócio**: quem **conhece o valor e a sensibilidade** da informação (proprietário, gestores da área) a classifica; a TI e a segurança implementam os controles correspondentes ao nível.

- **A)** Incorreta. A TI é custodiante; não decide o valor da informação.
- **B)** Incorreta. Terceirizar a decisão não é adequado: o conhecimento do negócio está na empresa.
- **C)** Incorreta. Segurança física controla acessos físicos, não classifica informações.
- **D)** Incorreta. O profissional de segurança orienta e aplica controles, mas a decisão de classificação é do negócio.
- **E)** Correta. Decisão de negócio, com papel ativo do setor gerencial (proprietários da informação).

**Ponto de atenção:** Proprietário (negócio) **classifica**; segurança e TI **protegem** conforme o nível. Distratores atribuem a decisão à TI ou à segurança.

**Revisão rápida:** Classificar é decisão de negócio.

**Fonte:** Fundação Cesgranrio, Transpetro PSP RH 2018.1 (Edital nº 1), Analista de Sistemas Júnior — Processos de Negócio (2018), prova Prova 15, questão 45; gabarito: oficial (PDF de gabarito da Cesgranrio, alterado em 09/05/2018), conferido na T13.

## OFI-000057 — ISO 27002: controle de acesso à rede

*Questão oficial — Fundação Cesgranrio, Transpetro PSP RH 2018.1, Prova 15, questão 46.*

**Gabarito: D**

Na ISO/IEC 27002:2005, a seção **11.4 (Controle de acesso à rede)** inclui a **autenticação para conexão externa do usuário** (11.4.2). As demais opções pertencem a outros controles: privilégios (11.2.2, gerenciamento de acesso do usuário), isolamento de sistemas sensíveis (11.6.2), encerramento por inatividade (11.5.5, acesso ao sistema operacional) e relato de eventos (13.1).

- **A)** Incorreta. Gerenciamento de privilégios: controle de acesso de usuário.
- **B)** Incorreta. Isolamento de sistemas sensíveis: controle de acesso à aplicação e à informação.
- **C)** Incorreta. Time-out de sessão: controle de acesso ao sistema operacional.
- **D)** Correta. Autenticação de usuários remotos: controle de acesso à rede.
- **E)** Incorreta. Relato de eventos: gestão de incidentes.

**Ponto de atenção:** **Versão importa**: a numeração citada é a da edição 2005; a de 2013 reorganizou (A.9) e a de 2022 usa temas. Memorize o **tipo de controle** (rede, aplicação, sistema operacional, usuário).

**Revisão rápida:** Rede: autenticação de acesso remoto, segregação, roteamento.

**Fonte:** Fundação Cesgranrio, Transpetro PSP RH 2018.1 (Edital nº 1), Analista de Sistemas Júnior — Processos de Negócio (2018), prova Prova 15, questão 46; gabarito: oficial (PDF de gabarito da Cesgranrio, alterado em 09/05/2018), conferido na T13.

## OFI-000058 — Firewall: listas de controle de acesso

*Questão oficial — Fundação Cesgranrio, Transpetro PSP RH 2018.1, Prova 15, questão 47.*

**Gabarito: A**

O **firewall** filtra o tráfego conforme **regras** (listas de controle de acesso) com base em endereços, portas e protocolos, permitindo ou bloqueando a passagem.

- **A)** Correta. Firewall: filtragem por regras/ACL.
- **B)** Incorreta. Proxy intermedia requisições de clientes e pode filtrar conteúdo e armazenar em cache.
- **C)** Incorreta. DMZ é uma zona de rede intermediária, não um componente de filtragem.
- **D)** Incorreta. IDS detecta e alerta, sem bloquear.
- **E)** Incorreta. IPS detecta e bloqueia ataques por assinaturas/comportamento.

**Ponto de atenção:** Firewall = **regras**; IDS = **detecta**; IPS = **detecta e bloqueia**; DMZ = **zona**; proxy = **intermediário**.

**Revisão rápida:** Firewall: regras que permitem ou negam pacotes.

**Fonte:** Fundação Cesgranrio, Transpetro PSP RH 2018.1 (Edital nº 1), Analista de Sistemas Júnior — Processos de Negócio (2018), prova Prova 15, questão 47; gabarito: oficial (PDF de gabarito da Cesgranrio, alterado em 09/05/2018), conferido na T13.

## OFI-000059 — VPN: tunelamento

*Questão oficial — Fundação Cesgranrio, Transpetro PSP RH 2018.1, Prova 15, questão 48.*

**Gabarito: C**

O **tunelamento** encapsula um pacote inteiro dentro de outro (com cifragem, na VPN), criando o "túnel" entre os extremos.

- **A)** Incorreta. "Empacotamento" não é a técnica nomeada em VPN.
- **B)** Incorreta. Encaminhamento é a função de roteamento.
- **C)** Correta. Tunelamento = encapsulamento de pacote em outro.
- **D)** Incorreta. "Reflexão segura" não é técnica de VPN.
- **E)** Incorreta. "Inundação segura" não é técnica de VPN.

**Ponto de atenção:** VPN: **túnel + criptografia + autenticação**. IPsec modo túnel encapsula o pacote IP inteiro.

**Revisão rápida:** Tunelamento = pacote dentro de pacote.

**Fonte:** Fundação Cesgranrio, Transpetro PSP RH 2018.1 (Edital nº 1), Analista de Sistemas Júnior — Processos de Negócio (2018), prova Prova 15, questão 48; gabarito: oficial (PDF de gabarito da Cesgranrio, alterado em 09/05/2018), conferido na T13.

## OFI-000060 — Malware: bot e botnet

*Questão oficial — Fundação Cesgranrio, Transpetro PSP RH 2018.1, Prova 15, questão 49.*

**Gabarito: A**

O **bot** transforma o computador em "zumbi" de uma **botnet** controlada remotamente pelo atacante, usada em DDoS, spam e outras ações automatizadas, sem conhecimento do dono.

- **A)** Correta. Bot: integra o equipamento a uma botnet.
- **B)** Incorreta. Worm se autorreplica pela rede, sem depender de hospedeiro.
- **C)** Incorreta. Trojan se disfarça de programa legítimo.
- **D)** Incorreta. "Rabbit" é programa que se replica até esgotar recursos, termo menos usual.
- **E)** Incorreta. Ransomware cifra dados e exige resgate.

**Ponto de atenção:** "Armada" = botnet; "sem conhecimento do dono" = zumbi.

**Revisão rápida:** Bot = computador zumbi em botnet.

**Fonte:** Fundação Cesgranrio, Transpetro PSP RH 2018.1 (Edital nº 1), Analista de Sistemas Júnior — Processos de Negócio (2018), prova Prova 15, questão 49; gabarito: oficial (PDF de gabarito da Cesgranrio, alterado em 09/05/2018), conferido na T13.

## OFI-000061 — Certificado digital: SHA256RSA

*Questão oficial — Fundação Cesgranrio, Transpetro PSP RH 2018.1, Prova 15, questão 50.*

**Gabarito: E**

**SHA256** é a função de **hash** que gera um resumo (*digest*) de **256 bits**; **RSA** é algoritmo de criptografia **assimétrica**, usado para cifrar esse resumo com a **chave privada** da AC (a assinatura).

- **A)** Incorreta. "SHA" isolado e "RSA simétrico" estão errados; os 256 bits são do digest, não da chave.
- **B)** Incorreta. Os 256 bits referem-se ao digest do SHA256, e não à chave privada.
- **C)** Incorreta. A chave não é simétrica, e RSA não é simétrico.
- **D)** Incorreta. RSA é assimétrico.
- **E)** Correta. SHA256 gera digest de 256 bits e RSA é assimétrico: correta.

**Ponto de atenção:** **Hash** (SHA256: resumo de 256 bits) + **assimétrico** (RSA: assinatura com a privada). A chave RSA costuma ter 2048 bits ou mais.

**Revisão rápida:** SHA256RSA = hash SHA-256 + assinatura RSA.

**Fonte:** Fundação Cesgranrio, Transpetro PSP RH 2018.1 (Edital nº 1), Analista de Sistemas Júnior — Processos de Negócio (2018), prova Prova 15, questão 50; gabarito: oficial (PDF de gabarito da Cesgranrio, alterado em 09/05/2018), conferido na T13.

## OFI-000062 — SAML: Artifact Resolution Protocol

*Questão oficial — Fundação Cesgranrio, Transpetro PSP RH 2018.1, Prova 15, questão 51.*

**Gabarito: C**

No **Artifact Resolution Protocol**, uma mensagem SAML é substituída por um **artefato** (valor pequeno e de tamanho fixo) que **referencia** a mensagem; o receptor o "resolve" para obter a mensagem completa, por canal seguro.

- **A)** Incorreta. Authentication Request Protocol solicita uma asserção de autenticação.
- **B)** Incorreta. Assertion Query and Request Protocol consulta ou requisita asserções existentes.
- **C)** Correta. Passagem por referência com valor fixo e pequeno: Artifact Resolution.
- **D)** Incorreta. Name Identifier Management trata do gerenciamento de identificadores de nome.
- **E)** Incorreta. Name Identifier Mapping mapeia identificadores entre provedores.

**Ponto de atenção:** O SAML não é citado literalmente no edital; entra pelo SSO (9.8). Palavra-chave: **referência / artefato**.

**Revisão rápida:** Artifact = referência pequena e fixa para uma mensagem SAML.

**Fonte:** Fundação Cesgranrio, Transpetro PSP RH 2018.1 (Edital nº 1), Analista de Sistemas Júnior — Processos de Negócio (2018), prova Prova 15, questão 51; gabarito: oficial (PDF de gabarito da Cesgranrio, alterado em 09/05/2018), conferido na T13.

## OFI-000063 — ICP-Brasil: certificado da AC subordinada à raiz

*Questão oficial — Fundação Cesgranrio, Transpetro PSP RH 2018.1, Prova 15, questão 52.*

**Gabarito: A**

Na hierarquia da ICP-Brasil, a **AC Raiz** (do ITI) emite e **assina** os certificados das ACs de primeiro nível; estas assinam os das ACs seguintes e os de usuários finais. A **AR** apenas valida e encaminha pedidos, **não assina** certificados.

- **A)** Correta. A AC imediatamente subordinada tem seu certificado assinado somente pela AC Raiz.
- **B)** Incorreta. A AR não emite nem assina certificados.
- **C)** Incorreta. O certificado autoassinado é o da própria AC Raiz, e não o das subordinadas.
- **D)** Incorreta. A AR não assina certificados.
- **E)** Incorreta. Só a AC Raiz assina; a própria AC não assina o seu certificado de AC subordinada.

**Ponto de atenção:** Cadeia de confiança: **AC Raiz (autoassinado) → ACs → usuários**. AR = identificação e registro, sem assinar.

**Revisão rápida:** AC de 1º nível: assinada apenas pela AC Raiz.

**Fonte:** Fundação Cesgranrio, Transpetro PSP RH 2018.1 (Edital nº 1), Analista de Sistemas Júnior — Processos de Negócio (2018), prova Prova 15, questão 52; gabarito: oficial (PDF de gabarito da Cesgranrio, alterado em 09/05/2018), conferido na T13.

## OFI-000074 — Resolução CMN 4.893: revisão da política de segurança cibernética

*Questão oficial — Fundação Cesgranrio, Caixa Econômica Federal, Edital 1/2021/NM, Caderno de Tecnologia da Informação, questão 60.*

**Gabarito: C**

A Resolução determina que a política de segurança cibernética e o plano de ação e de resposta a incidentes sejam **documentados e revisados, no mínimo, anualmente**. Revisão periódica das políticas é também princípio geral da gestão de segurança (ISO 27001/27002).

- **A)** Incorreta. Trimestral é mais frequente que o mínimo.
- **B)** Incorreta. Semestral é mais frequente que o mínimo.
- **C)** Correta. O mínimo é anual, segundo o gabarito oficial.
- **D)** Incorreta. Bienal é menos frequente que o mínimo.
- **E)** Incorreta. Trienal é menos frequente que o mínimo.

**Ponto de atenção:** Aderência parcial: norma setorial bancária; a ideia de **revisão periódica** da política decorre do item 9.17. Memorize a periodicidade **mínima anual**.

**Revisão rápida:** Política e plano de resposta: revisão no mínimo anual.

**Fonte:** Fundação Cesgranrio, Caixa Econômica Federal, Edital 1/2021/NM, Técnico Bancário Novo — Tecnologia da Informação (2021), prova Caderno de Tecnologia da Informação (questões 31 a 60), questão 60; gabarito: definitivo (fonte oficial: portal da Cesgranrio); recursos sem alteração nem anulação.

## OFI-000075 — Malware: tipo indicado para implantar spyware

*Questão oficial — Fundação Cesgranrio, BNDES, Edital 1/2024, Prova 2, questão 36.*

**Gabarito: A**

O **trojan (cavalo de Troia)** se disfarça de programa útil, e o usuário o instala voluntariamente; ele age em silêncio, o que o torna adequado para **implantar um spyware** (código de espionagem).

- **A)** Correta. Trojan: induz a instalação por parecer útil e age em silêncio.
- **B)** Incorreta. Vírus precisa de um hospedeiro e da execução do arquivo infectado; a replicação autônoma entre computadores descreve melhor o worm; a justificativa é incorreta.
- **C)** Incorreta. O worm se propaga pela rede; a descrição "em áreas da memória de um único dispositivo" não corresponde a ele.
- **D)** Incorreta. Spear phishing é técnica de engenharia social, e não tipo de malware.
- **E)** Incorreta. Botnet é uma rede de máquinas controladas; o *botmaster* é o controlador, e a descrição está trocada.

**Ponto de atenção:** Leia a **justificativa** de cada alternativa: a classificação pode estar certa e a explicação errada. Spyware é **o que** faz; trojan é **como** chega.

**Revisão rápida:** Trojan: disfarce e instalação voluntária; entrega outros códigos.

**Fonte:** Fundação Cesgranrio, BNDES, Edital 1/2024, Analista — Análise de Sistemas: Cibersegurança (2024), prova Prova 2 (manhã), questão 36; gabarito: final após recursos (documento da banca, via espelho QConcursos).

## OFI-000076 — Criptografia: confidencialidade, integridade e autenticidade

*Questão oficial — Fundação Cesgranrio, BNDES, Edital 1/2024, Prova 2, questão 38.*

**Gabarito: D**

Cifrar com a **chave secreta (privada) de R** produz uma **assinatura** (autenticidade); cifrar o resultado com a **chave pública de J** garante **confidencialidade** (só J abre); o **hash H(M)** permite a J conferir a **integridade**. A combinação cobre os três objetivos.

- **A)** Incorreta. Transmite a chave simétrica junto com a cifra (anula a confidencialidade) e a mensagem em claro.
- **B)** Incorreta. Usa a chave secreta de J, que R não possui: o esquema é inviável.
- **C)** Incorreta. Transmite M em claro (sem confidencialidade) e cifra com a chave pública de R, que não prova a autoria.
- **D)** Correta. Assina com Sr (autenticidade), cifra com Pj (confidencialidade) e envia o hash para conferir a integridade.
- **E)** Incorreta. A chave simétrica k não foi entregue com segurança a J e não há autenticação da origem.

**Ponto de atenção:** Cifrar com a **privada do remetente** = autenticidade/não repúdio; com a **pública do destinatário** = confidencialidade; **hash** = integridade.

**Revisão rápida:** Assinar (Sr) + cifrar (Pj) + hash = C, I e A.

**Fonte:** Fundação Cesgranrio, BNDES, Edital 1/2024, Analista — Análise de Sistemas: Cibersegurança (2024), prova Prova 2 (manhã), questão 38; gabarito: final após recursos (documento da banca, via espelho QConcursos).

## OFI-000077 — ISO/IEC 27035-1: fase de resposta a incidentes

*Questão oficial — Fundação Cesgranrio, BNDES, Edital 1/2024, Prova 2, questão 45.*

**Gabarito: E**

As cinco fases da ISO/IEC 27035-1:2023 são **planejar e preparar; detectar e reportar; avaliar e decidir; responder; lições aprendidas**. Na fase **responder** ocorrem contenção, erradicação e recuperação e, se o incidente excede os limites das equipes, o acionamento de **continuidade de negócios e recuperação de desastres**.

- **A)** Incorreta. Avaliar e decidir classifica o evento como incidente e decide como tratá-lo.
- **B)** Incorreta. Detectar e reportar identifica e comunica eventos.
- **C)** Incorreta. Lições aprendidas revisa e melhora o processo após o incidente.
- **D)** Incorreta. Planejar e preparar estabelece políticas, equipe e planos antes dos incidentes.
- **E)** Correta. Na resposta é que se executam as ações, inclusive o acionamento de continuidade e recuperação.

**Ponto de atenção:** Aderência parcial (a ISO 27035 não é citada; o item 9.11 cita NIST SP 800-61). Compare com o ciclo da **NIST SP 800-61 Rev. 2**: preparação; detecção e análise; contenção, erradicação e recuperação; pós-incidente.

**Revisão rápida:** 27035-1: preparar, detectar, avaliar, responder, aprender.

**Fonte:** Fundação Cesgranrio, BNDES, Edital 1/2024, Analista — Análise de Sistemas: Cibersegurança (2024), prova Prova 2 (manhã), questão 45; gabarito: final após recursos (documento da banca, via espelho QConcursos).

## OFI-000078 — Ataques ativos e passivos: disfarce (masquerade)

*Questão oficial — Fundação Cesgranrio, BNDES, Edital 1/2024, Prova 2, questão 47.*

**Gabarito: E**

No **ataque de disfarce (*masquerade*)**, o atacante **se faz passar** por uma entidade legítima para obter acesso ou praticar ações maliciosas; é um ataque **ativo** (Stallings).

- **A)** Incorreta. Escuta do fluxo é ataque passivo (*eavesdropping*, liberação de conteúdo).
- **B)** Incorreta. Inferência pela análise do tráfego é ataque passivo (análise de tráfego).
- **C)** Incorreta. Sobrecarga da rede é negação de serviço (DoS).
- **D)** Incorreta. Esgotar recursos da vítima também é negação de serviço.
- **E)** Correta. Passar-se por entidade autorizada é o disfarce.

**Ponto de atenção:** Classificação clássica: **passivos** (escuta, análise de tráfego) × **ativos** (disfarce, repetição, modificação de mensagens, negação de serviço).

**Revisão rápida:** Masquerade = personificar entidade autorizada.

**Fonte:** Fundação Cesgranrio, BNDES, Edital 1/2024, Analista — Análise de Sistemas: Cibersegurança (2024), prova Prova 2 (manhã), questão 47; gabarito: final após recursos (documento da banca, via espelho QConcursos).

## OFI-000079 — Varredura TCP furtiva: idle scan

*Questão oficial — Fundação Cesgranrio, BNDES, Edital 1/2024, Prova 2, questão 48.*

**Gabarito: C**

No **idle scan** (varredura TCP ociosa), o atacante usa um **host zumbi** ocioso, observando a sequência de identificação IP dele, para inferir o estado das portas da vítima **sem que o IP do atacante apareça** para o alvo.

- **A)** Incorreta. FIN envia pacotes com o flag FIN, direto da origem do atacante.
- **B)** Incorreta. ACK sonda regras de filtragem de firewall, direto da origem.
- **C)** Correta. IDLE usa um zumbi, ocultando o IP do atacante.
- **D)** Incorreta. NULL envia pacotes sem flags, direto da origem.
- **E)** Incorreta. XMAS envia FIN, PSH e URG, direto da origem.

**Ponto de atenção:** Aderência parcial (técnicas de reconhecimento fazem parte do pentest, 9.13). Palavra-chave: **zumbi** = idle.

**Revisão rápida:** Idle scan: IP do atacante oculto por zumbi.

**Fonte:** Fundação Cesgranrio, BNDES, Edital 1/2024, Analista — Análise de Sistemas: Cibersegurança (2024), prova Prova 2 (manhã), questão 48; gabarito: final após recursos (documento da banca, via espelho QConcursos).

## OFI-000080 — Código malicioso: formjacking

*Questão oficial — Fundação Cesgranrio, BNDES, Edital 1/2024, Prova 2, questão 51.*

**Gabarito: B**

O **formjacking** injeta JavaScript malicioso em formulários de sites (especialmente de pagamento) para **capturar os dados digitados**, como números de cartão (ataques do tipo *Magecart*).

- **A)** Incorreta. Worm se autorreplica pela rede.
- **B)** Correta. Formjacking: JavaScript que rouba dados de formulários.
- **C)** Incorreta. Downloader baixa e instala outros códigos.
- **D)** Incorreta. Ransomware cifra dados e exige resgate.
- **E)** Incorreta. Cryptojacking usa recursos da vítima para minerar criptomoedas.

**Ponto de atenção:** Sufixo **-jacking**: sequestro de algo (form, crypto, click). Formjacking = **formulário**.

**Revisão rápida:** Formjacking: JS que captura dados de formulários de pagamento.

**Fonte:** Fundação Cesgranrio, BNDES, Edital 1/2024, Analista — Análise de Sistemas: Cibersegurança (2024), prova Prova 2 (manhã), questão 51; gabarito: final após recursos (documento da banca, via espelho QConcursos).

## OFI-000081 — Engenharia social presencial: tailgating

*Questão oficial — Fundação Cesgranrio, BNDES, Edital 1/2024, Prova 2, questão 52.*

**Gabarito: D**

**Tailgating** (ou *piggybacking*) é entrar em área restrita **seguindo** uma pessoa autorizada, aproveitando a cortesia. Mitigação: catracas, antipassback, conscientização e segurança presencial.

- **A)** Incorreta. Baiting oferece uma isca (por exemplo, um pendrive deixado de propósito).
- **B)** Incorreta. Phishing usa mensagens fraudulentas por e-mail.
- **C)** Incorreta. Smishing é phishing por SMS.
- **D)** Correta. Seguir o autorizado e se aproveitar da cortesia: tailgating.
- **E)** Incorreta. Honeytrap usa sedução ou relacionamento para obter informação.

**Ponto de atenção:** Associe: **tailgating = porta**; phishing = e-mail; smishing = SMS; vishing = voz; baiting = isca.

**Revisão rápida:** Tailgating: entrar atrás de quem tem acesso.

**Fonte:** Fundação Cesgranrio, BNDES, Edital 1/2024, Analista — Análise de Sistemas: Cibersegurança (2024), prova Prova 2 (manhã), questão 52; gabarito: final após recursos (documento da banca, via espelho QConcursos).

## OFI-000082 — Defesa em profundidade: firewall proxy

*Questão oficial — Fundação Cesgranrio, BNDES, Edital 1/2024, Prova 2, questão 54.*

**Gabarito: A**

O **firewall proxy** (de aplicação) atua na **camada de aplicação** como **intermediário**: os clientes internos conectam-se a ele, que se conecta aos servidores externos em seu nome, ocultando os clientes e aplicando políticas (por exemplo, filtragem de URLs).

- **A)** Correta. Intermediário de camada de aplicação com políticas de acesso: firewall proxy.
- **B)** Incorreta. Firewall com estado acompanha conexões nas camadas de rede e transporte, sem agir como intermediário de aplicação.
- **C)** Incorreta. Gateway VPN estabelece túneis cifrados entre redes ou usuários.
- **D)** Incorreta. Filtro de pacotes decide por cabeçalhos (IP, porta), sem entender a aplicação.
- **E)** Incorreta. IDS apenas detecta e alerta.

**Ponto de atenção:** Ordem de "profundidade" de inspeção: **filtro de pacotes** (L3/L4) → **com estado** (conexão) → **proxy/aplicação** (L7).

**Revisão rápida:** Proxy: intermediário em L7, esconde clientes, aplica política.

**Fonte:** Fundação Cesgranrio, BNDES, Edital 1/2024, Analista — Análise de Sistemas: Cibersegurança (2024), prova Prova 2 (manhã), questão 54; gabarito: final após recursos (documento da banca, via espelho QConcursos).

## OFI-000083 — OWASP Top 10 (2021): falhas criptográficas

*Questão oficial — Fundação Cesgranrio, BNDES, Edital 1/2024, Prova 2, questão 55.*

**Gabarito: B**

No OWASP Top 10 **2021**, **A02 — Cryptographic Failures** (antes "Exposição de dados sensíveis") inclui a **ausência de TLS** ou criptografia fraca, que permite interceptar dados e cookies de sessão em trânsito.

- **A)** Incorreta. Injection (A03) é o envio de dados não confiáveis a um interpretador.
- **B)** Correta. Falta de TLS e dados expostos em trânsito: Cryptographic Failures (A02).
- **C)** Incorreta. Broken Access Control (A01) é falha na imposição de permissões.
- **D)** Incorreta. SSRF (A10) faz o servidor requisitar recursos indevidos.
- **E)** Incorreta. Componentes vulneráveis e desatualizados (A06) tratam de bibliotecas com falhas conhecidas.

**Ponto de atenção:** **Edição importa**: o Top 10 foi atualizado em 2025; o cenário é da edição 2021. Associe: **sem TLS / dado em trânsito = criptografia**.

**Revisão rápida:** A02:2021 Cryptographic Failures: sem TLS, algoritmos fracos, chaves mal geridas.

**Fonte:** Fundação Cesgranrio, BNDES, Edital 1/2024, Analista — Análise de Sistemas: Cibersegurança (2024), prova Prova 2 (manhã), questão 55; gabarito: final após recursos (documento da banca, via espelho QConcursos).

## OFI-000084 — Irretratabilidade (não repúdio)

*Questão oficial — Fundação Cesgranrio, BNDES, Edital 1/2024, Prova 2, questão 56.*

**Gabarito: D**

**Irretratabilidade (não repúdio)** impede que uma parte **negue** ter enviado ou recebido uma comunicação, fornecendo **provas** (por exemplo, assinatura digital e carimbo de tempo) utilizáveis perante terceiros.

- **A)** Incorreta. Integridade garante que o dado não foi alterado.
- **B)** Incorreta. Autenticidade garante a origem verdadeira, mas não produz prova contra a negação perante terceiros.
- **C)** Incorreta. "Irretroatividade" é conceito jurídico sobre aplicação de leis, e não de segurança da informação.
- **D)** Correta. Evidências para resolver disputas sobre negação: irretratabilidade.
- **E)** Incorreta. Confidencialidade restringe o acesso à informação.

**Ponto de atenção:** Atenção às **paronímias**: irretratabilidade (segurança) × irretroatividade (direito). Assinatura digital oferece integridade, autenticidade e não repúdio.

**Revisão rápida:** Não repúdio: evidência contra a negação.

**Fonte:** Fundação Cesgranrio, BNDES, Edital 1/2024, Analista — Análise de Sistemas: Cibersegurança (2024), prova Prova 2 (manhã), questão 56; gabarito: final após recursos (documento da banca, via espelho QConcursos).

## OFI-000085 — SOAR: automação e orquestração da resposta

*Questão oficial — Fundação Cesgranrio, BNDES, Edital 1/2024, Prova 2, questão 59.*

**Gabarito: E**

**SOAR** (*Security Orchestration, Automation and Response*) integra ferramentas, **automatiza respostas** por *playbooks*, gerencia casos e fluxos e incorpora inteligência de ameaças.

- **A)** Incorreta. IPS detecta e bloqueia ataques em linha.
- **B)** Incorreta. DLP evita vazamento de dados.
- **C)** Incorreta. WAF protege aplicações web.
- **D)** Incorreta. CASB controla o uso de serviços em nuvem.
- **E)** Correta. Casos e fluxos, automação e inteligência de ameaças: SOAR.

**Ponto de atenção:** Aderência parcial: SOAR não consta da lista literal do item 9.2 (que cita SIEM, EDR, WAF etc.). Siglas: **SIEM correlaciona**; **SOAR automatiza a resposta**.

**Revisão rápida:** SOAR: orquestração + automação + resposta.

**Fonte:** Fundação Cesgranrio, BNDES, Edital 1/2024, Analista — Análise de Sistemas: Cibersegurança (2024), prova Prova 2 (manhã), questão 59; gabarito: final após recursos (documento da banca, via espelho QConcursos).

## OFI-000086 — Controles CIS v8: Grupos de Implementação

*Questão oficial — Fundação Cesgranrio, BNDES, Edital 1/2024, Prova 2, questão 62.*

**Gabarito: C**

Os **Controles CIS v8** têm **três** grupos de implementação: **IG1** (higiene cibernética básica, 56 salvaguardas), **IG2** (empresas com equipe de TI e dados sensíveis moderados) e **IG3** (empresas com especialistas de segurança, dados sujeitos a regulação e maior exposição). O IG3 inclui todas as salvaguardas dos anteriores.

- **A)** Incorreta. IG1 é para organizações pequenas com recursos limitados.
- **B)** Incorreta. IG2 é para organizações com equipe de TI e múltiplos departamentos.
- **C)** Correta. Especialistas, dados regulados e alta criticidade: IG3.
- **D)** Incorreta. Não há IG4 no CIS v8.
- **E)** Incorreta. Não há IG5 no CIS v8.

**Ponto de atenção:** Aderência parcial: os Controles CIS não são citados no edital. Existem **apenas IG1, IG2 e IG3** (IG4 e IG5 são distratores fáceis).

**Revisão rápida:** CIS v8: IG1 (básico) ⊂ IG2 ⊂ IG3 (mais maduro).

**Fonte:** Fundação Cesgranrio, BNDES, Edital 1/2024, Analista — Análise de Sistemas: Cibersegurança (2024), prova Prova 2 (manhã), questão 62; gabarito: final após recursos (documento da banca, via espelho QConcursos).

## OFI-000087 — FIRST CSIRT Services Framework

*Questão oficial — Fundação Cesgranrio, BNDES, Edital 1/2024, Prova 2, questão 65.*

**Gabarito: E**

O **FIRST CSIRT Services Framework** organiza os serviços em áreas: gestão de **eventos** de segurança (monitoramento, detecção e análise), gestão de **incidentes** (aceitação, análise, **mitigação e recuperação**, coordenação, comunicação), gestão de **vulnerabilidades**, **consciência situacional** e **transferência de conhecimento**.

- **A)** Incorreta. Consciência situacional trata de inteligência, análise de ameaças e comunicação de contexto.
- **B)** Incorreta. Transferência de conhecimento trata de treinamento e conscientização.
- **C)** Incorreta. Gestão de vulnerabilidades trata de descoberta, análise e correção de vulnerabilidades.
- **D)** Incorreta. Gestão de eventos trata de monitoramento, detecção e análise de eventos.
- **E)** Correta. Mitigação e recuperação do incidente pertencem à gestão de incidentes.

**Ponto de atenção:** Aderência parcial (o framework não consta do edital; o item 9.11 trata de resposta a incidentes). **Evento** é o que se detecta; **incidente** é o que se trata.

**Revisão rápida:** Mitigação e recuperação: área de gestão de incidentes.

**Fonte:** Fundação Cesgranrio, BNDES, Edital 1/2024, Analista — Análise de Sistemas: Cibersegurança (2024), prova Prova 2 (manhã), questão 65; gabarito: final após recursos (documento da banca, via espelho QConcursos).

## OFI-000088 — MITRE ATT&CK: técnica da tática Defense Evasion

*Questão oficial — Fundação Cesgranrio, BNDES, Edital 1/2024, Prova 2, questão 66.*

**Gabarito: C**

**Hide Artifacts (ocultar artefatos)** é técnica da tática **Defense Evasion**. As demais pertencem a outras táticas: *Create Account* (persistência), *Brute Force* (acesso a credenciais), *Gather Victim Host Information* (reconhecimento) e *Create or Modify System Process* (persistência e escalada de privilégios).

- **A)** Incorreta. Criar conta: persistência.
- **B)** Incorreta. Força bruta: acesso a credenciais.
- **C)** Correta. Ocultar artefatos: evasão de defesa.
- **D)** Incorreta. Coletar informações do host da vítima: reconhecimento.
- **E)** Incorreta. Criar e modificar processos do sistema: persistência/escalada de privilégios.

**Ponto de atenção:** A prova de 2024 trata a lista de 14 táticas; a v19 do ATT&CK tem 15 (decisão do projeto: 14 + nota). **Tática** = objetivo; **técnica** = método.

**Revisão rápida:** Defense Evasion: ocultar artefatos, desativar defesas, mascarar.

**Fonte:** Fundação Cesgranrio, BNDES, Edital 1/2024, Analista — Análise de Sistemas: Cibersegurança (2024), prova Prova 2 (manhã), questão 66; gabarito: final após recursos (documento da banca, via espelho QConcursos).

## OFI-000089 — CWE Top 25: SSRF

*Questão oficial — Fundação Cesgranrio, BNDES, Edital 1/2024, Prova 2, questão 67.*

**Gabarito: A**

**SSRF** (*Server-Side Request Forgery*): o servidor é induzido a fazer requisições a destinos escolhidos pelo atacante (inclusive redes internas), servindo de *proxy* para varreduras e acessos indevidos.

- **A)** Correta. SSRF: o servidor requisita a URL controlada pelo atacante.
- **B)** Incorreta. CSRF induz o navegador de uma vítima autenticada a enviar requisições indesejadas ao site.
- **C)** Incorreta. Out-of-bounds read é leitura fora dos limites de memória.
- **D)** Incorreta. Missing Authorization é ausência de verificação de permissão.
- **E)** Incorreta. Deserialization of Untrusted Data é desserializar dados não confiáveis, com possibilidade de execução de código.

**Ponto de atenção:** **SSRF**: o **servidor** faz a requisição. **CSRF**: o **navegador da vítima** faz a requisição.

**Revisão rápida:** SSRF: servidor usado como proxy para alcançar a rede interna.

**Fonte:** Fundação Cesgranrio, BNDES, Edital 1/2024, Analista — Análise de Sistemas: Cibersegurança (2024), prova Prova 2 (manhã), questão 67; gabarito: final após recursos (documento da banca, via espelho QConcursos).

## OFI-000090 — CVSS 4.0: grupos de métricas

*Questão oficial — Fundação Cesgranrio, BNDES, Edital 1/2024, Prova 2, questão 68.*

**Gabarito: C**

No **CVSS 4.0**, os grupos são **Base**, **Threat** (substitui o antigo *Temporal*), **Environmental** e **Supplemental** (novo). O CVSS 3.x tinha Base, Temporal e Environmental.

- **A)** Incorreta. "Temporal" não existe no 4.0, e falta Environmental.
- **B)** Incorreta. "Temporal" não existe no 4.0, e falta Supplemental.
- **C)** Correta. Base, Threat, Environmental e Supplemental: os quatro grupos do 4.0.
- **D)** Incorreta. "Temporal" foi renomeado para Threat, e falta Threat.
- **E)** Incorreta. Falta o grupo Base, obrigatório.

**Ponto de atenção:** Evolução: **3.1** = Base, Temporal, Environmental; **4.0** = Base, **Threat**, Environmental, **Supplemental**.

**Revisão rápida:** CVSS 4.0: Base, Threat, Environmental, Supplemental.

**Fonte:** Fundação Cesgranrio, BNDES, Edital 1/2024, Analista — Análise de Sistemas: Cibersegurança (2024), prova Prova 2 (manhã), questão 68; gabarito: final após recursos (documento da banca, via espelho QConcursos).

## OFI-000091 — ISO/IEC 27002:2022: atributo de domínios de segurança

*Questão oficial — Fundação Cesgranrio, BNDES, Edital 1/2024, Prova 2, questão 69.*

**Gabarito: D**

Na ISO/IEC 27002:2022, os atributos são: **tipo de controle**, **propriedades de segurança da informação**, **conceitos de cibersegurança**, **capacidades operacionais** e **domínios de segurança**. Os valores deste último são **Governança e Ecossistema, Proteção, Defesa e Resiliência**.

- **A)** Incorreta. Confidencialidade, integridade e disponibilidade são valores do atributo *propriedades de segurança da informação*.
- **B)** Incorreta. A combinação mistura termos que não são os valores do atributo.
- **C)** Incorreta. Mistura governança com propriedades da tríade CIA.
- **D)** Correta. São os quatro valores do atributo *domínios de segurança*.
- **E)** Incorreta. "Segurança física" é um dos **temas** (categorias), não um valor deste atributo.

**Ponto de atenção:** Não confunda **temas** (organizacionais, pessoas, físicos, tecnológicos) com os **atributos** e seus valores. Os quatro domínios: **Governança e Ecossistema, Proteção, Defesa, Resiliência**.

**Revisão rápida:** 27002:2022: 4 temas, 93 controles, 5 atributos.

**Fonte:** Fundação Cesgranrio, BNDES, Edital 1/2024, Analista — Análise de Sistemas: Cibersegurança (2024), prova Prova 2 (manhã), questão 69; gabarito: final após recursos (documento da banca, via espelho QConcursos).

## OFI-000094 — RBAC e autenticação multifator

*Questão oficial — Fundação Cesgranrio, BNDES, Edital 1/2024, Prova 3, questão 42.*

**Gabarito: C**

**Autenticação** responde "**quem é você?**" (MFA reforça); **autorização** responde "**o que você pode fazer?**". O RBAC é modelo de **autorização**: as permissões associam-se a **papéis**, e os usuários recebem papéis. Os dois são complementares.

- **A)** Incorreta. A autenticação não atribui permissões; e o RBAC considera o papel do usuário identificado.
- **B)** Incorreta. O RBAC trata de autorização, e não de autenticação.
- **C)** Correta. RBAC define permissões por papel; a autenticação confirma a identidade antes.
- **D)** Incorreta. Ambos se relacionam: o papel só vale para um usuário autenticado.
- **E)** Incorreta. Papéis não substituem a autenticação: sem identificar o usuário, não há como aplicar o papel.

**Ponto de atenção:** **AAA**: autenticação (identidade), autorização (permissões), auditoria (registro). RBAC e ABAC são modelos de **autorização**.

**Revisão rápida:** Autenticação identifica; RBAC autoriza por papéis.

**Fonte:** Fundação Cesgranrio, BNDES, Edital 1/2024, Analista — Análise de Sistemas: Desenvolvimento (2024), prova Prova 3 (manhã), questão 42; gabarito: final após recursos (documento da banca, via espelho QConcursos).

## OFI-000099 — Recuperação de desastres como serviço (DRaaS)

*Questão oficial — Fundação Cesgranrio, BNDES, Edital 1/2024, Prova 3, questão 53.*

**Gabarito: C**

No **DRaaS** (*Disaster Recovery as a Service*), um **provedor de nuvem** replica dados e infraestrutura e **executa a recuperação** em caso de desastre, para manter a continuidade com o mínimo de interrupção.

- **A)** Incorreta. IaaS entrega infraestrutura (máquinas, rede, armazenamento) sem orquestrar o plano de recuperação.
- **B)** Incorreta. BaaS (*Backup as a Service*) cobre apenas o backup dos dados, e não a orquestração da recuperação de toda a infraestrutura.
- **C)** Correta. O provedor implementa e orquestra a recuperação: DRaaS.
- **D)** Incorreta. "DRVMaaS" não é modelo de serviço padrão.
- **E)** Incorreta. PaaS entrega plataforma de desenvolvimento e execução.

**Ponto de atenção:** BaaS = **guardar** cópias; DRaaS = **recuperar** serviços (replicação, failover, orquestração). Relaciona-se a RTO e RPO (9.16).

**Revisão rápida:** DRaaS: provedor orquestra o plano de recuperação.

**Fonte:** Fundação Cesgranrio, BNDES, Edital 1/2024, Analista — Análise de Sistemas: Desenvolvimento (2024), prova Prova 3 (manhã), questão 53; gabarito: final após recursos (documento da banca, via espelho QConcursos).

## OFI-000111 — Assinatura digital: finalidade do hash

*Questão oficial — Fundação Cesgranrio, Petrobras PSP RH 2017.2, Prova 3, questão 63.*

**Gabarito: B**

O **hash** é um **resumo de tamanho fixo** do documento. Na assinatura digital, o signatário cifra o hash com sua **chave privada**; o verificador recalcula o hash e compara com o decifrado (com a **chave pública**): se coincidem, o conteúdo **não foi alterado** (integridade). O hash **não permite recuperar** o documento (função unidirecional).

- **A)** Incorreta. O hash não facilita a criptografia do documento.
- **B)** Correta. O hash comprova a integridade desde a assinatura.
- **C)** Incorreta. A decifragem usa a chave **pública** do signatário (a secreta nunca consta do certificado).
- **D)** Incorreta. O hash não permite recuperar o documento original, nem com chave secreta.
- **E)** Incorreta. O hash não permite recuperar o documento, nem com a chave pública.

**Ponto de atenção:** Hash: **unidirecional**, serve para **integridade**. A autoria decorre da **chave privada** do signatário usada para cifrar o hash.

**Revisão rápida:** Hash = integridade; não reversível.

**Fonte:** Fundação Cesgranrio, Petrobras PSP RH 2017.2 (prova de 18/03/2018), Analista de Sistemas Júnior — Processos de Negócio (2018), prova Prova 3, questão 63; gabarito: de espelho (PCI), fornecido pelo usuário; preliminar/definitivo não indicado; anulações não verificadas; não validado contra a banca.

## OFI-000112 — Ataques passivos e requisito ameaçado

*Questão oficial — Fundação Cesgranrio, Petrobras PSP RH 2017.2, Prova 3, questão 64.*

**Gabarito: A**

Ataques **passivos** (escuta e análise de tráfego) **observam** sem alterar os dados e ameaçam a **confidencialidade**. Ataques **ativos** (disfarce, modificação, repetição, negação de serviço) ameaçam integridade, autenticidade e disponibilidade.

- **A)** Correta. Observar ou analisar o tráfego compromete o sigilo: confidencialidade.
- **B)** Incorreta. A irretratabilidade é ameaçada por negação de autoria, em ataques ativos.
- **C)** Incorreta. A autenticidade é ameaçada por disfarce (ataque ativo).
- **D)** Incorreta. A disponibilidade é ameaçada por negação de serviço (ataque ativo).
- **E)** Incorreta. A integridade é ameaçada por modificação de dados (ataque ativo).

**Ponto de atenção:** Passivo = **escuta** → confidencialidade. Ativo = **altera ou interrompe** → integridade, autenticidade, disponibilidade.

**Revisão rápida:** Passivo ameaça confidencialidade.

**Fonte:** Fundação Cesgranrio, Petrobras PSP RH 2017.2 (prova de 18/03/2018), Analista de Sistemas Júnior — Processos de Negócio (2018), prova Prova 3, questão 64; gabarito: de espelho (PCI), fornecido pelo usuário; preliminar/definitivo não indicado; anulações não verificadas; não validado contra a banca.

## OFI-000113 — ISO 27002: diretrizes de classificação da informação

*Questão oficial — Fundação Cesgranrio, Petrobras PSP RH 2017.2, Prova 3, questão 65.*

**Gabarito: E**

A ISO/IEC 27002 (seção de **classificação e rotulagem**) recomenda que as informações e as **saídas dos sistemas que tratam dados sensíveis** sejam **rotuladas** conforme **valor, requisitos legais, sensibilidade e criticidade**; o **proprietário** do ativo classifica e a classificação é **revisada periodicamente**.

- **A)** Incorreta. A revisão fica com o proprietário da informação, e não necessariamente com a alta gerência.
- **B)** Incorreta. A atribuição cabe ao **proprietário** da informação, e a TI é custodiante.
- **C)** Incorreta. Informação oriunda de outra organização pode ter esquema de classificação diferente e exige **mapeamento**, e não manutenção cega dos rótulos.
- **D)** Incorreta. A norma não prescreve "princípio de equidade" para a classificação.
- **E)** Correta. A rotulagem de informações e saídas dos sistemas, conforme valor e sensibilidade, é diretriz da norma.

**Ponto de atenção:** Palavras-chave: **rotular + valor + sensibilidade**. Quem classifica: **proprietário**; TI: custodiante.

**Revisão rápida:** 27002: classificar e rotular conforme valor e sensibilidade.

**Fonte:** Fundação Cesgranrio, Petrobras PSP RH 2017.2 (prova de 18/03/2018), Analista de Sistemas Júnior — Processos de Negócio (2018), prova Prova 3, questão 65; gabarito: de espelho (PCI), fornecido pelo usuário; preliminar/definitivo não indicado; anulações não verificadas; não validado contra a banca.

## OFI-000114 — Single Sign-On

*Questão oficial — Fundação Cesgranrio, Petrobras PSP RH 2017.2, Prova 3, questão 66.*

**Gabarito: B**

No **SSO**, o usuário se autentica **uma vez** e acessa várias aplicações sem novas autenticações. OTP e OTT são senhas e tokens de uso único (segundo fator), e ULC e UAD não são mecanismos conhecidos.

- **A)** Incorreta. "Unique Login Control" não é padrão conhecido.
- **B)** Correta. Autenticar uma vez e acessar várias aplicações: SSO.
- **C)** Incorreta. OTP é senha descartável, usada como fator de autenticação.
- **D)** Incorreta. OTT é token de uso único.
- **E)** Incorreta. "Unique-Auth Database" não é padrão conhecido.

**Ponto de atenção:** SSO ≠ MFA ≠ OTP: SSO reduz **autenticações repetidas**; OTP/MFA reforçam **a autenticação**.

**Revisão rápida:** SSO: uma autenticação, vários sistemas.

**Fonte:** Fundação Cesgranrio, Petrobras PSP RH 2017.2 (prova de 18/03/2018), Analista de Sistemas Júnior — Processos de Negócio (2018), prova Prova 3, questão 66; gabarito: de espelho (PCI), fornecido pelo usuário; preliminar/definitivo não indicado; anulações não verificadas; não validado contra a banca.

## OFI-000128 — Risco, ameaça e vulnerabilidade (asserção e razão)

*Questão oficial — Fundação Cesgranrio, Petroquímica Suape PSP nº 1/2012, Prova 6, questão 51.*

**Gabarito: E**

O **risco** cresce com o **aumento** das **ameaças** e das **vulnerabilidades** (e do impacto). Reduzir ameaças **diminui** o risco, e aumentar vulnerabilidades **o aumenta**. As duas afirmações estão invertidas, portanto, **ambas falsas**.

- **A)** Incorreta. Ambas são falsas.
- **B)** Incorreta. Ambas são falsas.
- **C)** Incorreta. A segunda também é falsa.
- **D)** Incorreta. A primeira é falsa, mas a segunda também.
- **E)** Correta. Risco ∝ ameaça × vulnerabilidade × impacto: as duas afirmações contrariam a relação.

**Ponto de atenção:** **Risco = probabilidade (ameaça × vulnerabilidade) × impacto.** Mais ameaça ou mais vulnerabilidade, mais risco.

**Revisão rápida:** Risco cresce com ameaças e vulnerabilidades.

**Fonte:** Fundação Cesgranrio, Petroquímica Suape PSP nº 1/2012 (22/04/2012), Analista de Sistemas Júnior — Ênfase em Negócio (2012), prova Prova 6, questão 51; gabarito: de espelho (Estude Grátis), após recursos; não validado contra a banca.
