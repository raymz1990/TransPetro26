# Gabarito comentado — Módulo M09: Segurança da Informação

## Identificação
- Concurso: Processo Seletivo Público TRANSPETRO 2026.4 (Edital nº 04/2026)
- Ênfase: 5 — Análise de Sistemas: Processos de Negócios
- Banca: Fundação Cesgranrio
- Módulo: M09 — Segurança da Informação
- Total: 58 questões; status `validada` ou `em_revisao` (indicado em cada questão)
- Gerado em 2026-11-09 por `tools/build_notebooklm.py` a partir de `banco-questoes/`


### AUT-000081 — Gabarito: B
*Questão autoral — estilo Cesgranrio (criada pelo projeto; não é questão aplicada pela banca) · status: validada*

O código **concatena** a entrada do usuário ao texto SQL; com o valor `' OR '1'='1`, a consulta vira `... WHERE login = '' OR '1'='1'`, que é sempre verdadeira e retorna todas as linhas: **SQL Injection**. A prevenção principal (OWASP) são as **consultas parametrizadas** (*prepared statements*), em que o valor é enviado separado do comando e tratado apenas como dado (`cursor.execute("... WHERE login = ?", (nome,))`), complementadas por validação por lista permitida e menor privilégio.

- A) Incorreta. Remover palavras isoladas é uma lista de bloqueio facilmente contornada (por exemplo, com `or` em minúsculas ou outras construções).
- B) Correta. A consulta parametrizada separa comando e dado, eliminando a injeção.
- C) Incorreta. O valor malicioso do exemplo tem apenas 11 caracteres; limitar o tamanho não impede a injeção.
- D) Incorreta. O HTTPS protege o canal contra interceptação, mas o servidor continua montando a consulta com a entrada recebida; a injeção persiste.
- E) Incorreta. Mais privilégios ampliam o dano de uma injeção; a boa prática é o menor privilégio.

### AUT-000082 — Gabarito: D
*Questão autoral — estilo Cesgranrio (criada pelo projeto; não é questão aplicada pela banca) · status: validada*

O backup **diferencial** copia tudo o que mudou **desde o último backup completo**; portanto, o diferencial de quarta-feira contém todas as alterações de segunda a quarta. A restauração exige o **completo (domingo)** e **apenas o último diferencial (quarta-feira)**: **2 conjuntos**. (Com backups **incrementais**, seriam necessários o completo e os incrementais de segunda, terça e quarta: 4 conjuntos.)

- A) Incorreta. Só o completo restauraria o estado de domingo, perdendo as alterações de segunda a quarta.
- B) Incorreta. Falta o diferencial de quarta-feira, o mais recente, e o de segunda é desnecessário (o de quarta já o contém).
- C) Incorreta. Descreve a restauração com backups incrementais; com diferenciais, basta o último.
- D) Correta. Completo de domingo + diferencial de quarta-feira.
- E) Incorreta. O diferencial de quinta-feira não existe (a falha ocorreu antes do backup do dia) e os anteriores não são necessários.

### AUT-000083 — Gabarito: A
*Questão autoral — estilo Cesgranrio (criada pelo projeto; não é questão aplicada pela banca) · status: validada*

**Ransomware** sequestra dados (criptografa ou bloqueia) e exige resgate (I). **Worm** propaga-se sozinho pela rede, sem hospedeiro e sem ação do usuário (II). **Cavalo de troia (*trojan*)** disfarça-se de programa legítimo e executa ação maliciosa, como abrir um acesso remoto (*backdoor*) (III).

- A) Correta. I: ransomware; II: worm; III: trojan.
- B) Incorreta. A criptografia com pedido de resgate é ransomware (I), e a propagação autônoma pela rede é worm (II); a alternativa os troca.
- C) Incorreta. Vírus depende de hospedeiro e de execução; o comportamento II é de worm, e o III, de trojan.
- D) Incorreta. Spyware coleta informações; o comportamento I é de ransomware. Rootkit oculta presença do invasor, e não se apresenta como utilitário legítimo.
- E) Incorreta. O comportamento I é de ransomware, e não de trojan; o II é de worm, e não de vírus, que depende de hospedeiro.

### AUT-000084 — Gabarito: E
*Questão autoral — estilo Cesgranrio (criada pelo projeto; não é questão aplicada pela banca) · status: validada*

A **MFA** exige **dois ou mais fatores de categorias diferentes**: **conhecimento** (senha, PIN), **posse** (token, celular com aplicativo, cartão, chave de segurança) e **inerência** (biometria). A combinação **senha + código gerado por aplicativo no celular** reúne **conhecimento** e **posse**. Dois fatores da mesma categoria não são MFA.

- A) Incorreta. Senha e PIN são ambos fatores de conhecimento: mesma categoria.
- B) Incorreta. Duas senhas são dois fatores de conhecimento; não há segundo fator de outra categoria.
- C) Incorreta. É um único fator (inerência); a biometria, segundo o NIST, também não é reconhecida isoladamente como autenticador.
- D) Incorreta. Os dois códigos são fatores de posse (dispositivo/conta que os recebe): mesma categoria. Além disso, e-mail e SMS são canais considerados frágeis.
- E) Correta. Conhecimento (senha) + posse (aplicativo no celular).

### AUT-000085 — Gabarito: C
*Questão autoral — estilo Cesgranrio (criada pelo projeto; não é questão aplicada pela banca) · status: validada*

**IoC** (*Indicator of Compromise*) são artefatos técnicos de comprometimento (hashes, IPs, domínios), ligados à inteligência **tática**: item I. **TTP** (táticas, técnicas e procedimentos) descrevem o **comportamento** do atacante, mais duradouro que os IoC e ligado à inteligência **operacional**: item II. A **inteligência estratégica** trata de tendências, motivações e riscos para o negócio, voltada à alta direção: item III.

- A) Incorreta. O hash e o IP são IoC, e não TTP; o comportamento (PowerShell e tarefas agendadas) é TTP.
- B) Incorreta. O hash e o IP não são inteligência estratégica; o relatório ao conselho não é um IoC.
- C) Correta. I: IoC; II: TTP; III: inteligência estratégica.
- D) Incorreta. O comportamento do grupo (II) é TTP, e o relatório ao conselho (III) é inteligência estratégica; a alternativa os troca.
- E) Incorreta. O item I é IoC, e não TTP; o item III é inteligência estratégica, e não IoC.

### AUT-000086 — Gabarito: D
*Questão autoral — estilo Cesgranrio (criada pelo projeto; não é questão aplicada pela banca) · status: validada*

O ciclo da Rev. 2 tem **quatro fases**: **preparação**; **detecção e análise**; **contenção, erradicação e recuperação**; e **atividade pós-incidente** (lições aprendidas). Isolar o servidor é **contenção**; remover o código malicioso e redefinir credenciais é **erradicação**; restaurar o serviço é **recuperação**. As três fazem parte da mesma fase.

- A) Incorreta. A preparação ocorre antes do incidente (política, equipe, ferramentas, prevenção).
- B) Incorreta. A detecção e análise identifica, valida e prioriza o incidente, o que já ocorreu no enunciado.
- C) Incorreta. A atividade pós-incidente trata de lições aprendidas e melhoria, e vem depois da recuperação.
- D) Correta. Isolamento (contenção), remoção e troca de credenciais (erradicação) e restauração (recuperação).
- E) Incorreta. Essas duas fases antecedem a resposta ao incidente já detectado.

### AUT-000087 — Gabarito: A
*Questão autoral — estilo Cesgranrio (criada pelo projeto; não é questão aplicada pela banca) · status: validada*

**STRIDE**: *Spoofing* (falsificação de identidade, viola a **autenticidade**), *Tampering* (adulteração, viola a **integridade**), *Repudiation* (repúdio, viola o **não repúdio**), *Information disclosure* (divulgação de informações, **confidencialidade**), *Denial of service* (negação de serviço, **disponibilidade**) e *Elevation of privilege* (elevação de privilégio, **autorização**). I: **repúdio**; II: **adulteração**; III: **falsificação de identidade**.

- A) Correta. I: repúdio; II: adulteração; III: falsificação de identidade.
- B) Incorreta. Troca I e II (adulteração × repúdio) e classifica III como divulgação de informações, quando o uso de credenciais alheias é falsificação de identidade.
- C) Incorreta. Inverte I e III: a negação de autoria sem registros é repúdio, e o uso de credenciais roubadas é falsificação de identidade.
- D) Incorreta. II é adulteração (e não divulgação de informações), e III não é elevação de privilégio: o atacante assume a identidade de outro usuário.
- E) Incorreta. I não é negação de serviço (que afeta a disponibilidade); a situação trata de repúdio.

### AUT-000088 — Gabarito: C
*Questão autoral — estilo Cesgranrio (criada pelo projeto; não é questão aplicada pela banca) · status: validada*

**SLE** (perda por evento) = valor do ativo × fator de exposição = 800.000 × 0,25 = **R$ 200.000**. **ALE antes** = SLE × ARO = 200.000 × 0,5 = **R$ 100.000**. **ALE depois** = 200.000 × 0,1 = **R$ 20.000**. Redução da perda esperada = 100.000 − 20.000 = **R$ 80.000**. Benefício líquido = 80.000 − 40.000 = **R$ 40.000**.

- A) Incorreta. R$ 80.000 é a redução da perda esperada, sem subtrair o custo do controle.
- B) Incorreta. Não decorre dos dados; poderia resultar de erro na aplicação da fórmula (por exemplo, usar ARO de 0,2 em vez de 0,1).
- C) Correta. 80.000 − 40.000 = 40.000.
- D) Incorreta. R$ 100.000 é a perda esperada anual **antes** do controle (ALE inicial).
- E) Incorreta. R$ 20.000 é a perda esperada anual **depois** do controle (ALE residual).

### AUT-000089 — Gabarito: E
*Questão autoral — estilo Cesgranrio (criada pelo projeto; não é questão aplicada pela banca) · status: validada*

Na **assinatura digital**, o resumo do documento é assinado com a **chave privada** do signatário e verificado com a **chave pública**. Qualquer alteração muda o resumo: **integridade**. Só quem possui a chave privada poderia assinar: **autenticidade**; e o signatário não pode negar a autoria (desde que a chave seja de seu uso exclusivo e haja certificado): **não repúdio**. O documento segue em texto claro, e portanto **não há confidencialidade**; para ela, usa-se criptografia (por exemplo, o envelope digital).

- A) Incorreta. A assinatura não fornece confidencialidade (o contrato está em texto claro) e fornece não repúdio.
- B) Incorreta. A chave privada de Alice não protege o conteúdo do contrato, que é enviado em texto claro.
- C) Incorreta. A assinatura não garante disponibilidade; garante integridade, autenticidade e não repúdio.
- D) Incorreta. A assinatura garante a integridade, e o texto claro implica ausência de confidencialidade.
- E) Correta. Integridade, autenticidade e não repúdio, sem confidencialidade.

### AUT-000090 — Gabarito: B
*Questão autoral — estilo Cesgranrio (criada pelo projeto; não é questão aplicada pela banca) · status: validada*

No **modelo de responsabilidade compartilhada**, o provedor é responsável pela segurança **da** nuvem (instalações físicas, hosts, rede e, no SaaS, a maior parte da pilha), e o cliente, pela segurança **na** nuvem. **Dados, identidades e configurações** permanecem **sempre** com o cliente, em IaaS, PaaS e SaaS.

- A) Incorreta. A segurança física dos datacenters é do provedor em todos os modelos.
- B) Correta. Dados, identidades e configurações de acesso são sempre do cliente.
- C) Incorreta. No SaaS, o sistema operacional é gerenciado pelo provedor.
- D) Incorreta. A virtualização e os servidores são responsabilidade do provedor.
- E) Incorreta. A rede física e os equipamentos de conectividade do provedor são do provedor.

### AUT-000113 — Gabarito: D
*Questão autoral — estilo Cesgranrio (criada pelo projeto; não é questão aplicada pela banca) · status: em_revisao*

**Controles físicos** protegem instalações e equipamentos (cercas, câmeras, catracas, cofres, extintores, energia e climatização). **Controles lógicos** protegem sistemas e dados por software e configuração: autenticação, criptografia, permissões, firewalls, antivírus. Na ISO/IEC 27002:2022, correspondem aos temas **físicos** e **tecnológicos**.

- A) Incorreta. Cercas, câmeras e vigilantes são controles físicos.
- B) Incorreta. Sala-cofre, umidade e extintores são físicos (ambiente).
- C) Incorreta. Catraca, biometria na porta e controle de visitantes são físicos.
- D) Correta. MFA, criptografia de disco e ACL são controles lógicos.
- E) Incorreta. No-break, geradores e refrigeração são físicos (infraestrutura).

### AUT-000114 — Gabarito: E
*Questão autoral — estilo Cesgranrio (criada pelo projeto; não é questão aplicada pela banca) · status: em_revisao*

No **IPsec**, o **modo túnel** protege e **encapsula o pacote IP original inteiro** em um novo pacote com novo cabeçalho IP, e é o usual em **VPN site-to-site** (gateway a gateway). No **modo transporte**, protege-se apenas o **payload**, mantendo o cabeçalho original (típico host a host). O **ESP** oferece confidencialidade, autenticação de origem e integridade; o **AH** oferece integridade e autenticação, **sem** confidencialidade.

- A) Incorreta. A VPN protege o tráfego no caminho, mas não torna o usuário anônimo.
- B) Incorreta. A VPN não substitui firewall; as defesas se complementam.
- C) Incorreta. A descrição corresponde ao modo túnel; o transporte preserva o cabeçalho IP original.
- D) Incorreta. É o contrário: o ESP oferece confidencialidade, e o AH, não.
- E) Correta. Descreve corretamente o modo túnel e seu uso entre gateways.

### AUT-000115 — Gabarito: A
*Questão autoral — estilo Cesgranrio (criada pelo projeto; não é questão aplicada pela banca) · status: em_revisao*

O **MDM** permite **inventariar** dispositivos, **impor políticas** (senha, criptografia, aplicativos permitidos), **configurar** acessos corporativos e fazer **bloqueio e limpeza remotos** (inclusive limpeza **seletiva**, que remove só os dados corporativos em cenários BYOD).

- A) Correta. Descreve recursos típicos do MDM: política remota e wipe (seletivo) em caso de perda.
- B) Incorreta. O MDM atua por software e comunicação remota, e não por dispositivo físico de travamento.
- C) Incorreta. Firewall de borda e MDM têm funções distintas.
- D) Incorreta. O MDM não recupera senhas de aplicativos de terceiros.
- E) Incorreta. Nenhum controle garante ausência total de infecção; o MDM reduz riscos.

### AUT-000116 — Gabarito: B
*Questão autoral — estilo Cesgranrio (criada pelo projeto; não é questão aplicada pela banca) · status: em_revisao*

No **SSO**, um **provedor de identidade (IdP)** autentica o usuário e emite **asserções/tokens** (SAML, OpenID Connect/OAuth 2.0, Kerberos) aceitos pelos sistemas. **Vantagens:** menos senhas, melhor experiência, controle e revogação centralizados, auditoria no IdP. **Risco:** o IdP é **ponto único de falha e de comprometimento**, mitigado com **MFA**, monitoramento e alta disponibilidade.

- A) Incorreta. A autenticação ocorre uma vez, no IdP; ela não é eliminada.
- B) Correta. Descreve vantagens e riscos do SSO, e a mitigação por MFA.
- C) Incorreta. O SSO **reduz** bases de senhas por sistema, e não as replica.
- D) Incorreta. SAML e OIDC são justamente protocolos usados em SSO.
- E) Incorreta. O IdP centraliza logs e facilita a auditoria.

### AUT-000117 — Gabarito: C
*Questão autoral — estilo Cesgranrio (criada pelo projeto; não é questão aplicada pela banca) · status: em_revisao*

O teste de penetração só é legítimo com **autorização formal por escrito** do dono dos ativos. O **planejamento** define **escopo, objetivos, regras de engajamento** (técnicas permitidas, horários, contatos de emergência) e a **abordagem** (caixa-preta, cinza ou branca). Em seguida vêm descoberta, ataque e relatório (NIST SP 800-115).

- A) Incorreta. Varredura sem escopo e sem autorização pode ser crime e causar impacto no ambiente de produção.
- B) Incorreta. Avisar depois é arriscado: incidentes simulados podem acionar respostas reais, e o contratante precisa de pontos de contato.
- C) Correta. A autorização escrita, o escopo e as regras de engajamento são requisitos prévios.
- D) Incorreta. O nível de conhecimento prévio (caixa-preta, cinza, branca) é definido no planejamento; acesso administrativo total não é requisito.
- E) Incorreta. Técnicas manuais fazem parte do pentest, desde que autorizadas no escopo.

### AUT-000118 — Gabarito: D
*Questão autoral — estilo Cesgranrio (criada pelo projeto; não é questão aplicada pela banca) · status: em_revisao*

A PSI é um documento de **alto nível**, **aprovado pela alta direção**, **publicado e comunicado** aos funcionários e partes externas relevantes, e **revisada periodicamente**. Ela estabelece diretrizes e responsabilidades; **normas** e **procedimentos** detalham como cumpri-las.

- A) Incorreta. Configurações detalhadas pertencem a procedimentos; a PSI é de alto nível e para todos.
- B) Incorreta. Sem apoio e aprovação da direção, falta autoridade à política.
- C) Incorreta. A política deve ser **revisada** em intervalos planejados e em caso de mudanças significativas.
- D) Correta. Política aprovada, comunicada e apoiada por normas e procedimentos é a prática correta.
- E) Incorreta. A PSI alcança também terceiros e prestadores que acessem os ativos.

### AUT-000119 — Gabarito: E
*Questão autoral — estilo Cesgranrio (criada pelo projeto; não é questão aplicada pela banca) · status: em_revisao*

O **proprietário (dono) da informação** é responsável por classificá-la, considerando **valor, sensibilidade, criticidade e requisitos legais ou contratuais**. A informação é **rotulada** e **tratada conforme o nível** (acesso, armazenamento, transmissão e descarte), e a classificação é **reavaliada** quando o contexto muda.

- A) Incorreta. A TI é **custodiante** dos sistemas; a classificação cabe ao proprietário da informação.
- B) Incorreta. Classificar tudo no nível máximo encarece os controles e dilui a proteção do que é crítico.
- C) Incorreta. A sensibilidade muda com o tempo; a classificação deve ser revisada.
- D) Incorreta. A rotulagem é parte do processo e garante tratamento uniforme.
- E) Correta. Descreve corretamente quem classifica, com quais critérios e como o tratamento decorre do nível.

### AUT-000120 — Gabarito: A
*Questão autoral — estilo Cesgranrio (criada pelo projeto; não é questão aplicada pela banca) · status: em_revisao*

Os dispositivos IoT são alvos frequentes de botnets (como a Mirai) por **credenciais padrão**, **firmware desatualizado** e **serviços expostos**. As medidas básicas são: **alterar credenciais**, **atualizar firmware**, **desativar serviços desnecessários**, **segmentar a rede** (VLAN/zonas), **monitorar** e usar **autenticação forte**.

- A) Correta. Medidas básicas e eficazes: credenciais, atualização e segmentação.
- B) Incorreta. Credenciais padrão são conhecidas publicamente, e o firewall de borda não protege contra o tráfego interno.
- C) Incorreta. Logs são essenciais para detecção e investigação.
- D) Incorreta. Expor a administração à Internet amplia a superfície de ataque.
- E) Incorreta. Atualizações corrigem vulnerabilidades; evitá-las mantém o risco.

### OFI-000035 — Gabarito: B
*Oficial — Fundação Cesgranrio, Transpetro PSP/Terra 002/2023 (Edital nº 2), Análise de Sistemas — Processos de Negócios, 2023, Prova 6, questão 38 (gabarito: oficial (PDF de gabarito da Cesgranrio, alterado em 9/01/2024), conferido na T13) · status: em_revisao*

**DAST** (*Dynamic Application Security Testing*) testa a aplicação **em execução**, de fora (caixa-preta). **SAST** analisa o código-fonte, sem executar. DREAD e STRIDE são modelos de ameaças.

- A) Incorreta. SAST analisa o código estático, sem executar a aplicação.
- B) Correta. DAST testa o software compilado em execução; é o descrito.
- C) Incorreta. VAST é uma metodologia de modelagem de ameaças (*Visual, Agile and Simple Threat modeling*).
- D) Incorreta. DREAD é um modelo de classificação de risco.
- E) Incorreta. STRIDE é um modelo de categorização de ameaças.

### OFI-000036 — Gabarito: A
*Oficial — Fundação Cesgranrio, Transpetro PSP/Terra 002/2023 (Edital nº 2), Análise de Sistemas — Processos de Negócios, 2023, Prova 6, questão 39 (gabarito: oficial (PDF de gabarito da Cesgranrio, alterado em 9/01/2024), conferido na T13) · status: em_revisao*

**ABAC** (*Attribute-Based Access Control*) decide com base em **atributos** do usuário, do recurso, da ação e do contexto/ambiente (local, horário etc.). RBAC usa papéis; DAC deixa o dono decidir; MAC usa rótulos de classificação; ACL é uma lista de permissões por recurso.

- A) Correta. Combinação de atributos (local, recurso, contexto, ambiente) define ABAC.
- B) Incorreta. RBAC concede acesso por papel, sem considerar contexto e atributos dinâmicos.
- C) Incorreta. DAC: o proprietário do recurso define as permissões.
- D) Incorreta. MAC: o sistema impõe regras por rótulos de sensibilidade e níveis de autorização.
- E) Incorreta. ACL é um mecanismo de lista de permissões, não uma abordagem de decisão por atributos.

### OFI-000037 — Gabarito: E
*Oficial — Fundação Cesgranrio, Transpetro PSP/Terra 002/2023 (Edital nº 2), Análise de Sistemas — Processos de Negócios, 2023, Prova 6, questão 40 (gabarito: oficial (PDF de gabarito da Cesgranrio, alterado em 9/01/2024), conferido na T13) · status: em_revisao*

As táticas do ATT&CK Enterprise incluem *Reconnaissance, Resource Development, Initial Access, Execution, Persistence, Privilege Escalation, Defense Evasion, **Credential Access**, Discovery, Lateral Movement, Collection, Command and Control, Exfiltration e Impact* (14 na v14; a v19 tem 15). "Acesso à credencial" é uma tática; as demais opções são técnicas ou termos genéricos.

- A) Incorreta. Não é tática do ATT&CK (a técnica de varredura de vulnerabilidades está sob Reconnaissance).
- B) Incorreta. "Comunicação entre processos" é técnica (execução por IPC), não tática.
- C) Incorreta. "Manipulação de conta" (*Account Manipulation*) é **técnica** (Persistence/Privilege Escalation).
- D) Incorreta. "Evasão do depurador" é técnica de Defense Evasion/Discovery.
- E) Correta. *Credential Access* é tática do ATT&CK.

### OFI-000038 — Gabarito: D
*Oficial — Fundação Cesgranrio, Transpetro PSP/Terra 002/2023 (Edital nº 2), Análise de Sistemas — Processos de Negócios, 2023, Prova 6, questão 41 (gabarito: oficial (PDF de gabarito da Cesgranrio, alterado em 9/01/2024), conferido na T13) · status: em_revisao*

No **envelope digital**, a mensagem é cifrada com uma **chave de sessão simétrica** (rápida), e essa chave é cifrada com a **chave pública do destinatário**. Somente o destinatário, com sua chave privada, abre o envelope e obtém a chave de sessão.

- A) Incorreta. Cifrar com a privada do remetente gera assinatura (autenticidade), e qualquer um com a pública do remetente decifraria; não dá confidencialidade.
- B) Incorreta. A chave privada do destinatário é usada para **abrir** o envelope, e não para fechá-lo.
- C) Incorreta. A pública do remetente não restringe a leitura ao destinatário.
- D) Correta. Cifrar a chave simétrica com a pública do destinatário garante que só ele a recupere.
- E) Incorreta. Um terceiro confiável não é parte do esquema, e só ele poderia decifrar.

### OFI-000039 — Gabarito: C
*Oficial — Fundação Cesgranrio, Transpetro PSP/Terra 002/2023 (Edital nº 2), Análise de Sistemas — Processos de Negócios, 2023, Prova 6, questão 42 (gabarito: oficial (PDF de gabarito da Cesgranrio, alterado em 9/01/2024), conferido na T13) · status: em_revisao*

A **NIST SP 800-61** (*Computer Security Incident Handling Guide*) define o ciclo de vida de resposta a incidentes (Rev. 2: preparação; detecção e análise; contenção, erradicação e recuperação; atividade pós-incidente). A Rev. 3 (2025) alinha a resposta ao NIST CSF 2.0.

- A) Incorreta. SP 800-30 trata de avaliação de riscos.
- B) Incorreta. SP 800-34 trata de planejamento de contingência.
- C) Correta. SP 800-61 define o ciclo de vida de resposta a incidentes.
- D) Incorreta. ISO 27033-5 trata de segurança de redes (VPN).
- E) Incorreta. ISO 27034-1 trata de segurança de aplicações.

### OFI-000040 — Gabarito: D
*Oficial — Fundação Cesgranrio, Transpetro PSP/Terra 002/2023 (Edital nº 2), Análise de Sistemas — Processos de Negócios, 2023, Prova 6, questão 43 (gabarito: oficial (PDF de gabarito da Cesgranrio, alterado em 9/01/2024), conferido na T13) · status: em_revisao*

O **SIEM** (*Security Information and Event Management*) **coleta, correlaciona e analisa** logs e eventos de várias fontes, gerando alertas e visão consolidada.

- A) Incorreta. CASB controla o uso de serviços em nuvem.
- B) Incorreta. WAF protege aplicações web contra ataques HTTP.
- C) Incorreta. DLP evita vazamento de dados.
- D) Correta. SIEM agrega e correlaciona eventos e logs de segurança.
- E) Incorreta. Proxy intermedia o tráfego, aplicando filtros e cache.

### OFI-000041 — Gabarito: A
*Oficial — Fundação Cesgranrio, Transpetro PSP/Terra 002/2023 (Edital nº 2), Análise de Sistemas — Processos de Negócios, 2023, Prova 6, questão 44 (gabarito: oficial (PDF de gabarito da Cesgranrio, alterado em 9/01/2024), conferido na T13) · status: em_revisao*

Na edição de 2013 da ISO/IEC 27002, a proteção contra malware é um objetivo da seção **12 — Segurança nas operações**. **Atenção:** a edição 2022 reorganizou os controles em quatro temas (organizacionais, pessoas, físicos e tecnológicos), e a proteção contra malware passou ao tema **tecnológico** (controle 8.7). A questão segue a organização por seções da edição anterior.

- A) Correta. Segurança nas operações (seção 12 da edição 2013) contém a proteção contra malware.
- B) Incorreta. Segurança nas comunicações (seção 13) trata de redes e transferência de informações.
- C) Incorreta. Segurança em recursos humanos (seção 7) trata de contratação, conscientização e desligamento.
- D) Incorreta. Controle de acesso (seção 9) trata de requisitos, gestão de usuários e responsabilidades.
- E) Incorreta. Segurança física e do ambiente (seção 11) trata de áreas seguras e equipamentos.

### OFI-000056 — Gabarito: E
*Oficial — Fundação Cesgranrio, Transpetro PSP RH 2018.1 (Edital nº 1), Analista de Sistemas Júnior — Processos de Negócio, 2018, Prova 15, questão 45 (gabarito: oficial (PDF de gabarito da Cesgranrio, alterado em 09/05/2018), conferido na T13) · status: em_revisao*

A classificação é **decisão de negócio**: quem **conhece o valor e a sensibilidade** da informação (proprietário, gestores da área) a classifica; a TI e a segurança implementam os controles correspondentes ao nível.

- A) Incorreta. A TI é custodiante; não decide o valor da informação.
- B) Incorreta. Terceirizar a decisão não é adequado: o conhecimento do negócio está na empresa.
- C) Incorreta. Segurança física controla acessos físicos, não classifica informações.
- D) Incorreta. O profissional de segurança orienta e aplica controles, mas a decisão de classificação é do negócio.
- E) Correta. Decisão de negócio, com papel ativo do setor gerencial (proprietários da informação).

### OFI-000057 — Gabarito: D
*Oficial — Fundação Cesgranrio, Transpetro PSP RH 2018.1 (Edital nº 1), Analista de Sistemas Júnior — Processos de Negócio, 2018, Prova 15, questão 46 (gabarito: oficial (PDF de gabarito da Cesgranrio, alterado em 09/05/2018), conferido na T13) · status: em_revisao*

Na ISO/IEC 27002:2005, a seção **11.4 (Controle de acesso à rede)** inclui a **autenticação para conexão externa do usuário** (11.4.2). As demais opções pertencem a outros controles: privilégios (11.2.2, gerenciamento de acesso do usuário), isolamento de sistemas sensíveis (11.6.2), encerramento por inatividade (11.5.5, acesso ao sistema operacional) e relato de eventos (13.1).

- A) Incorreta. Gerenciamento de privilégios: controle de acesso de usuário.
- B) Incorreta. Isolamento de sistemas sensíveis: controle de acesso à aplicação e à informação.
- C) Incorreta. Time-out de sessão: controle de acesso ao sistema operacional.
- D) Correta. Autenticação de usuários remotos: controle de acesso à rede.
- E) Incorreta. Relato de eventos: gestão de incidentes.

### OFI-000058 — Gabarito: A
*Oficial — Fundação Cesgranrio, Transpetro PSP RH 2018.1 (Edital nº 1), Analista de Sistemas Júnior — Processos de Negócio, 2018, Prova 15, questão 47 (gabarito: oficial (PDF de gabarito da Cesgranrio, alterado em 09/05/2018), conferido na T13) · status: em_revisao*

O **firewall** filtra o tráfego conforme **regras** (listas de controle de acesso) com base em endereços, portas e protocolos, permitindo ou bloqueando a passagem.

- A) Correta. Firewall: filtragem por regras/ACL.
- B) Incorreta. Proxy intermedia requisições de clientes e pode filtrar conteúdo e armazenar em cache.
- C) Incorreta. DMZ é uma zona de rede intermediária, não um componente de filtragem.
- D) Incorreta. IDS detecta e alerta, sem bloquear.
- E) Incorreta. IPS detecta e bloqueia ataques por assinaturas/comportamento.

### OFI-000059 — Gabarito: C
*Oficial — Fundação Cesgranrio, Transpetro PSP RH 2018.1 (Edital nº 1), Analista de Sistemas Júnior — Processos de Negócio, 2018, Prova 15, questão 48 (gabarito: oficial (PDF de gabarito da Cesgranrio, alterado em 09/05/2018), conferido na T13) · status: em_revisao*

O **tunelamento** encapsula um pacote inteiro dentro de outro (com cifragem, na VPN), criando o "túnel" entre os extremos.

- A) Incorreta. "Empacotamento" não é a técnica nomeada em VPN.
- B) Incorreta. Encaminhamento é a função de roteamento.
- C) Correta. Tunelamento = encapsulamento de pacote em outro.
- D) Incorreta. "Reflexão segura" não é técnica de VPN.
- E) Incorreta. "Inundação segura" não é técnica de VPN.

### OFI-000060 — Gabarito: A
*Oficial — Fundação Cesgranrio, Transpetro PSP RH 2018.1 (Edital nº 1), Analista de Sistemas Júnior — Processos de Negócio, 2018, Prova 15, questão 49 (gabarito: oficial (PDF de gabarito da Cesgranrio, alterado em 09/05/2018), conferido na T13) · status: em_revisao*

O **bot** transforma o computador em "zumbi" de uma **botnet** controlada remotamente pelo atacante, usada em DDoS, spam e outras ações automatizadas, sem conhecimento do dono.

- A) Correta. Bot: integra o equipamento a uma botnet.
- B) Incorreta. Worm se autorreplica pela rede, sem depender de hospedeiro.
- C) Incorreta. Trojan se disfarça de programa legítimo.
- D) Incorreta. "Rabbit" é programa que se replica até esgotar recursos, termo menos usual.
- E) Incorreta. Ransomware cifra dados e exige resgate.

### OFI-000061 — Gabarito: E
*Oficial — Fundação Cesgranrio, Transpetro PSP RH 2018.1 (Edital nº 1), Analista de Sistemas Júnior — Processos de Negócio, 2018, Prova 15, questão 50 (gabarito: oficial (PDF de gabarito da Cesgranrio, alterado em 09/05/2018), conferido na T13) · status: em_revisao*

**SHA256** é a função de **hash** que gera um resumo (*digest*) de **256 bits**; **RSA** é algoritmo de criptografia **assimétrica**, usado para cifrar esse resumo com a **chave privada** da AC (a assinatura).

- A) Incorreta. "SHA" isolado e "RSA simétrico" estão errados; os 256 bits são do digest, não da chave.
- B) Incorreta. Os 256 bits referem-se ao digest do SHA256, e não à chave privada.
- C) Incorreta. A chave não é simétrica, e RSA não é simétrico.
- D) Incorreta. RSA é assimétrico.
- E) Correta. SHA256 gera digest de 256 bits e RSA é assimétrico: correta.

### OFI-000062 — Gabarito: C
*Oficial — Fundação Cesgranrio, Transpetro PSP RH 2018.1 (Edital nº 1), Analista de Sistemas Júnior — Processos de Negócio, 2018, Prova 15, questão 51 (gabarito: oficial (PDF de gabarito da Cesgranrio, alterado em 09/05/2018), conferido na T13) · status: em_revisao*

No **Artifact Resolution Protocol**, uma mensagem SAML é substituída por um **artefato** (valor pequeno e de tamanho fixo) que **referencia** a mensagem; o receptor o "resolve" para obter a mensagem completa, por canal seguro.

- A) Incorreta. Authentication Request Protocol solicita uma asserção de autenticação.
- B) Incorreta. Assertion Query and Request Protocol consulta ou requisita asserções existentes.
- C) Correta. Passagem por referência com valor fixo e pequeno: Artifact Resolution.
- D) Incorreta. Name Identifier Management trata do gerenciamento de identificadores de nome.
- E) Incorreta. Name Identifier Mapping mapeia identificadores entre provedores.

### OFI-000063 — Gabarito: A
*Oficial — Fundação Cesgranrio, Transpetro PSP RH 2018.1 (Edital nº 1), Analista de Sistemas Júnior — Processos de Negócio, 2018, Prova 15, questão 52 (gabarito: oficial (PDF de gabarito da Cesgranrio, alterado em 09/05/2018), conferido na T13) · status: em_revisao*

Na hierarquia da ICP-Brasil, a **AC Raiz** (do ITI) emite e **assina** os certificados das ACs de primeiro nível; estas assinam os das ACs seguintes e os de usuários finais. A **AR** apenas valida e encaminha pedidos, **não assina** certificados.

- A) Correta. A AC imediatamente subordinada tem seu certificado assinado somente pela AC Raiz.
- B) Incorreta. A AR não emite nem assina certificados.
- C) Incorreta. O certificado autoassinado é o da própria AC Raiz, e não o das subordinadas.
- D) Incorreta. A AR não assina certificados.
- E) Incorreta. Só a AC Raiz assina; a própria AC não assina o seu certificado de AC subordinada.

### OFI-000074 — Gabarito: C
*Oficial — Fundação Cesgranrio, Caixa Econômica Federal, Edital 1/2021/NM, Técnico Bancário Novo — Tecnologia da Informação, 2021, Caderno de Tecnologia da Informação (questões 31 a 60), questão 60 (gabarito: definitivo (fonte oficial: portal da Cesgranrio); recursos sem alteração nem anulação) · status: em_revisao*

A Resolução determina que a política de segurança cibernética e o plano de ação e de resposta a incidentes sejam **documentados e revisados, no mínimo, anualmente**. Revisão periódica das políticas é também princípio geral da gestão de segurança (ISO 27001/27002).

- A) Incorreta. Trimestral é mais frequente que o mínimo.
- B) Incorreta. Semestral é mais frequente que o mínimo.
- C) Correta. O mínimo é anual, segundo o gabarito oficial.
- D) Incorreta. Bienal é menos frequente que o mínimo.
- E) Incorreta. Trienal é menos frequente que o mínimo.

### OFI-000075 — Gabarito: A
*Oficial — Fundação Cesgranrio, BNDES, Edital 1/2024, Analista — Análise de Sistemas: Cibersegurança, 2024, Prova 2 (manhã), questão 36 (gabarito: final após recursos (documento da banca, via espelho QConcursos)) · status: em_revisao*

O **trojan (cavalo de Troia)** se disfarça de programa útil, e o usuário o instala voluntariamente; ele age em silêncio, o que o torna adequado para **implantar um spyware** (código de espionagem).

- A) Correta. Trojan: induz a instalação por parecer útil e age em silêncio.
- B) Incorreta. Vírus precisa de um hospedeiro e da execução do arquivo infectado; a replicação autônoma entre computadores descreve melhor o worm; a justificativa é incorreta.
- C) Incorreta. O worm se propaga pela rede; a descrição "em áreas da memória de um único dispositivo" não corresponde a ele.
- D) Incorreta. Spear phishing é técnica de engenharia social, e não tipo de malware.
- E) Incorreta. Botnet é uma rede de máquinas controladas; o *botmaster* é o controlador, e a descrição está trocada.

### OFI-000076 — Gabarito: D
*Oficial — Fundação Cesgranrio, BNDES, Edital 1/2024, Analista — Análise de Sistemas: Cibersegurança, 2024, Prova 2 (manhã), questão 38 (gabarito: final após recursos (documento da banca, via espelho QConcursos)) · status: em_revisao*

Cifrar com a **chave secreta (privada) de R** produz uma **assinatura** (autenticidade); cifrar o resultado com a **chave pública de J** garante **confidencialidade** (só J abre); o **hash H(M)** permite a J conferir a **integridade**. A combinação cobre os três objetivos.

- A) Incorreta. Transmite a chave simétrica junto com a cifra (anula a confidencialidade) e a mensagem em claro.
- B) Incorreta. Usa a chave secreta de J, que R não possui: o esquema é inviável.
- C) Incorreta. Transmite M em claro (sem confidencialidade) e cifra com a chave pública de R, que não prova a autoria.
- D) Correta. Assina com Sr (autenticidade), cifra com Pj (confidencialidade) e envia o hash para conferir a integridade.
- E) Incorreta. A chave simétrica k não foi entregue com segurança a J e não há autenticação da origem.

### OFI-000077 — Gabarito: E
*Oficial — Fundação Cesgranrio, BNDES, Edital 1/2024, Analista — Análise de Sistemas: Cibersegurança, 2024, Prova 2 (manhã), questão 45 (gabarito: final após recursos (documento da banca, via espelho QConcursos)) · status: em_revisao*

As cinco fases da ISO/IEC 27035-1:2023 são **planejar e preparar; detectar e reportar; avaliar e decidir; responder; lições aprendidas**. Na fase **responder** ocorrem contenção, erradicação e recuperação e, se o incidente excede os limites das equipes, o acionamento de **continuidade de negócios e recuperação de desastres**.

- A) Incorreta. Avaliar e decidir classifica o evento como incidente e decide como tratá-lo.
- B) Incorreta. Detectar e reportar identifica e comunica eventos.
- C) Incorreta. Lições aprendidas revisa e melhora o processo após o incidente.
- D) Incorreta. Planejar e preparar estabelece políticas, equipe e planos antes dos incidentes.
- E) Correta. Na resposta é que se executam as ações, inclusive o acionamento de continuidade e recuperação.

### OFI-000078 — Gabarito: E
*Oficial — Fundação Cesgranrio, BNDES, Edital 1/2024, Analista — Análise de Sistemas: Cibersegurança, 2024, Prova 2 (manhã), questão 47 (gabarito: final após recursos (documento da banca, via espelho QConcursos)) · status: em_revisao*

No **ataque de disfarce (*masquerade*)**, o atacante **se faz passar** por uma entidade legítima para obter acesso ou praticar ações maliciosas; é um ataque **ativo** (Stallings).

- A) Incorreta. Escuta do fluxo é ataque passivo (*eavesdropping*, liberação de conteúdo).
- B) Incorreta. Inferência pela análise do tráfego é ataque passivo (análise de tráfego).
- C) Incorreta. Sobrecarga da rede é negação de serviço (DoS).
- D) Incorreta. Esgotar recursos da vítima também é negação de serviço.
- E) Correta. Passar-se por entidade autorizada é o disfarce.

### OFI-000079 — Gabarito: C
*Oficial — Fundação Cesgranrio, BNDES, Edital 1/2024, Analista — Análise de Sistemas: Cibersegurança, 2024, Prova 2 (manhã), questão 48 (gabarito: final após recursos (documento da banca, via espelho QConcursos)) · status: em_revisao*

No **idle scan** (varredura TCP ociosa), o atacante usa um **host zumbi** ocioso, observando a sequência de identificação IP dele, para inferir o estado das portas da vítima **sem que o IP do atacante apareça** para o alvo.

- A) Incorreta. FIN envia pacotes com o flag FIN, direto da origem do atacante.
- B) Incorreta. ACK sonda regras de filtragem de firewall, direto da origem.
- C) Correta. IDLE usa um zumbi, ocultando o IP do atacante.
- D) Incorreta. NULL envia pacotes sem flags, direto da origem.
- E) Incorreta. XMAS envia FIN, PSH e URG, direto da origem.

### OFI-000080 — Gabarito: B
*Oficial — Fundação Cesgranrio, BNDES, Edital 1/2024, Analista — Análise de Sistemas: Cibersegurança, 2024, Prova 2 (manhã), questão 51 (gabarito: final após recursos (documento da banca, via espelho QConcursos)) · status: em_revisao*

O **formjacking** injeta JavaScript malicioso em formulários de sites (especialmente de pagamento) para **capturar os dados digitados**, como números de cartão (ataques do tipo *Magecart*).

- A) Incorreta. Worm se autorreplica pela rede.
- B) Correta. Formjacking: JavaScript que rouba dados de formulários.
- C) Incorreta. Downloader baixa e instala outros códigos.
- D) Incorreta. Ransomware cifra dados e exige resgate.
- E) Incorreta. Cryptojacking usa recursos da vítima para minerar criptomoedas.

### OFI-000081 — Gabarito: D
*Oficial — Fundação Cesgranrio, BNDES, Edital 1/2024, Analista — Análise de Sistemas: Cibersegurança, 2024, Prova 2 (manhã), questão 52 (gabarito: final após recursos (documento da banca, via espelho QConcursos)) · status: em_revisao*

**Tailgating** (ou *piggybacking*) é entrar em área restrita **seguindo** uma pessoa autorizada, aproveitando a cortesia. Mitigação: catracas, antipassback, conscientização e segurança presencial.

- A) Incorreta. Baiting oferece uma isca (por exemplo, um pendrive deixado de propósito).
- B) Incorreta. Phishing usa mensagens fraudulentas por e-mail.
- C) Incorreta. Smishing é phishing por SMS.
- D) Correta. Seguir o autorizado e se aproveitar da cortesia: tailgating.
- E) Incorreta. Honeytrap usa sedução ou relacionamento para obter informação.

### OFI-000082 — Gabarito: A
*Oficial — Fundação Cesgranrio, BNDES, Edital 1/2024, Analista — Análise de Sistemas: Cibersegurança, 2024, Prova 2 (manhã), questão 54 (gabarito: final após recursos (documento da banca, via espelho QConcursos)) · status: em_revisao*

O **firewall proxy** (de aplicação) atua na **camada de aplicação** como **intermediário**: os clientes internos conectam-se a ele, que se conecta aos servidores externos em seu nome, ocultando os clientes e aplicando políticas (por exemplo, filtragem de URLs).

- A) Correta. Intermediário de camada de aplicação com políticas de acesso: firewall proxy.
- B) Incorreta. Firewall com estado acompanha conexões nas camadas de rede e transporte, sem agir como intermediário de aplicação.
- C) Incorreta. Gateway VPN estabelece túneis cifrados entre redes ou usuários.
- D) Incorreta. Filtro de pacotes decide por cabeçalhos (IP, porta), sem entender a aplicação.
- E) Incorreta. IDS apenas detecta e alerta.

### OFI-000083 — Gabarito: B
*Oficial — Fundação Cesgranrio, BNDES, Edital 1/2024, Analista — Análise de Sistemas: Cibersegurança, 2024, Prova 2 (manhã), questão 55 (gabarito: final após recursos (documento da banca, via espelho QConcursos)) · status: em_revisao*

No OWASP Top 10 **2021**, **A02 — Cryptographic Failures** (antes "Exposição de dados sensíveis") inclui a **ausência de TLS** ou criptografia fraca, que permite interceptar dados e cookies de sessão em trânsito.

- A) Incorreta. Injection (A03) é o envio de dados não confiáveis a um interpretador.
- B) Correta. Falta de TLS e dados expostos em trânsito: Cryptographic Failures (A02).
- C) Incorreta. Broken Access Control (A01) é falha na imposição de permissões.
- D) Incorreta. SSRF (A10) faz o servidor requisitar recursos indevidos.
- E) Incorreta. Componentes vulneráveis e desatualizados (A06) tratam de bibliotecas com falhas conhecidas.

### OFI-000084 — Gabarito: D
*Oficial — Fundação Cesgranrio, BNDES, Edital 1/2024, Analista — Análise de Sistemas: Cibersegurança, 2024, Prova 2 (manhã), questão 56 (gabarito: final após recursos (documento da banca, via espelho QConcursos)) · status: em_revisao*

**Irretratabilidade (não repúdio)** impede que uma parte **negue** ter enviado ou recebido uma comunicação, fornecendo **provas** (por exemplo, assinatura digital e carimbo de tempo) utilizáveis perante terceiros.

- A) Incorreta. Integridade garante que o dado não foi alterado.
- B) Incorreta. Autenticidade garante a origem verdadeira, mas não produz prova contra a negação perante terceiros.
- C) Incorreta. "Irretroatividade" é conceito jurídico sobre aplicação de leis, e não de segurança da informação.
- D) Correta. Evidências para resolver disputas sobre negação: irretratabilidade.
- E) Incorreta. Confidencialidade restringe o acesso à informação.

### OFI-000085 — Gabarito: E
*Oficial — Fundação Cesgranrio, BNDES, Edital 1/2024, Analista — Análise de Sistemas: Cibersegurança, 2024, Prova 2 (manhã), questão 59 (gabarito: final após recursos (documento da banca, via espelho QConcursos)) · status: em_revisao*

**SOAR** (*Security Orchestration, Automation and Response*) integra ferramentas, **automatiza respostas** por *playbooks*, gerencia casos e fluxos e incorpora inteligência de ameaças.

- A) Incorreta. IPS detecta e bloqueia ataques em linha.
- B) Incorreta. DLP evita vazamento de dados.
- C) Incorreta. WAF protege aplicações web.
- D) Incorreta. CASB controla o uso de serviços em nuvem.
- E) Correta. Casos e fluxos, automação e inteligência de ameaças: SOAR.

### OFI-000086 — Gabarito: C
*Oficial — Fundação Cesgranrio, BNDES, Edital 1/2024, Analista — Análise de Sistemas: Cibersegurança, 2024, Prova 2 (manhã), questão 62 (gabarito: final após recursos (documento da banca, via espelho QConcursos)) · status: em_revisao*

Os **Controles CIS v8** têm **três** grupos de implementação: **IG1** (higiene cibernética básica, 56 salvaguardas), **IG2** (empresas com equipe de TI e dados sensíveis moderados) e **IG3** (empresas com especialistas de segurança, dados sujeitos a regulação e maior exposição). O IG3 inclui todas as salvaguardas dos anteriores.

- A) Incorreta. IG1 é para organizações pequenas com recursos limitados.
- B) Incorreta. IG2 é para organizações com equipe de TI e múltiplos departamentos.
- C) Correta. Especialistas, dados regulados e alta criticidade: IG3.
- D) Incorreta. Não há IG4 no CIS v8.
- E) Incorreta. Não há IG5 no CIS v8.

### OFI-000087 — Gabarito: E
*Oficial — Fundação Cesgranrio, BNDES, Edital 1/2024, Analista — Análise de Sistemas: Cibersegurança, 2024, Prova 2 (manhã), questão 65 (gabarito: final após recursos (documento da banca, via espelho QConcursos)) · status: em_revisao*

O **FIRST CSIRT Services Framework** organiza os serviços em áreas: gestão de **eventos** de segurança (monitoramento, detecção e análise), gestão de **incidentes** (aceitação, análise, **mitigação e recuperação**, coordenação, comunicação), gestão de **vulnerabilidades**, **consciência situacional** e **transferência de conhecimento**.

- A) Incorreta. Consciência situacional trata de inteligência, análise de ameaças e comunicação de contexto.
- B) Incorreta. Transferência de conhecimento trata de treinamento e conscientização.
- C) Incorreta. Gestão de vulnerabilidades trata de descoberta, análise e correção de vulnerabilidades.
- D) Incorreta. Gestão de eventos trata de monitoramento, detecção e análise de eventos.
- E) Correta. Mitigação e recuperação do incidente pertencem à gestão de incidentes.

### OFI-000088 — Gabarito: C
*Oficial — Fundação Cesgranrio, BNDES, Edital 1/2024, Analista — Análise de Sistemas: Cibersegurança, 2024, Prova 2 (manhã), questão 66 (gabarito: final após recursos (documento da banca, via espelho QConcursos)) · status: em_revisao*

**Hide Artifacts (ocultar artefatos)** é técnica da tática **Defense Evasion**. As demais pertencem a outras táticas: *Create Account* (persistência), *Brute Force* (acesso a credenciais), *Gather Victim Host Information* (reconhecimento) e *Create or Modify System Process* (persistência e escalada de privilégios).

- A) Incorreta. Criar conta: persistência.
- B) Incorreta. Força bruta: acesso a credenciais.
- C) Correta. Ocultar artefatos: evasão de defesa.
- D) Incorreta. Coletar informações do host da vítima: reconhecimento.
- E) Incorreta. Criar e modificar processos do sistema: persistência/escalada de privilégios.

### OFI-000089 — Gabarito: A
*Oficial — Fundação Cesgranrio, BNDES, Edital 1/2024, Analista — Análise de Sistemas: Cibersegurança, 2024, Prova 2 (manhã), questão 67 (gabarito: final após recursos (documento da banca, via espelho QConcursos)) · status: em_revisao*

**SSRF** (*Server-Side Request Forgery*): o servidor é induzido a fazer requisições a destinos escolhidos pelo atacante (inclusive redes internas), servindo de *proxy* para varreduras e acessos indevidos.

- A) Correta. SSRF: o servidor requisita a URL controlada pelo atacante.
- B) Incorreta. CSRF induz o navegador de uma vítima autenticada a enviar requisições indesejadas ao site.
- C) Incorreta. Out-of-bounds read é leitura fora dos limites de memória.
- D) Incorreta. Missing Authorization é ausência de verificação de permissão.
- E) Incorreta. Deserialization of Untrusted Data é desserializar dados não confiáveis, com possibilidade de execução de código.

### OFI-000090 — Gabarito: C
*Oficial — Fundação Cesgranrio, BNDES, Edital 1/2024, Analista — Análise de Sistemas: Cibersegurança, 2024, Prova 2 (manhã), questão 68 (gabarito: final após recursos (documento da banca, via espelho QConcursos)) · status: em_revisao*

No **CVSS 4.0**, os grupos são **Base**, **Threat** (substitui o antigo *Temporal*), **Environmental** e **Supplemental** (novo). O CVSS 3.x tinha Base, Temporal e Environmental.

- A) Incorreta. "Temporal" não existe no 4.0, e falta Environmental.
- B) Incorreta. "Temporal" não existe no 4.0, e falta Supplemental.
- C) Correta. Base, Threat, Environmental e Supplemental: os quatro grupos do 4.0.
- D) Incorreta. "Temporal" foi renomeado para Threat, e falta Threat.
- E) Incorreta. Falta o grupo Base, obrigatório.

### OFI-000091 — Gabarito: D
*Oficial — Fundação Cesgranrio, BNDES, Edital 1/2024, Analista — Análise de Sistemas: Cibersegurança, 2024, Prova 2 (manhã), questão 69 (gabarito: final após recursos (documento da banca, via espelho QConcursos)) · status: em_revisao*

Na ISO/IEC 27002:2022, os atributos são: **tipo de controle**, **propriedades de segurança da informação**, **conceitos de cibersegurança**, **capacidades operacionais** e **domínios de segurança**. Os valores deste último são **Governança e Ecossistema, Proteção, Defesa e Resiliência**.

- A) Incorreta. Confidencialidade, integridade e disponibilidade são valores do atributo *propriedades de segurança da informação*.
- B) Incorreta. A combinação mistura termos que não são os valores do atributo.
- C) Incorreta. Mistura governança com propriedades da tríade CIA.
- D) Correta. São os quatro valores do atributo *domínios de segurança*.
- E) Incorreta. "Segurança física" é um dos **temas** (categorias), não um valor deste atributo.

### OFI-000094 — Gabarito: C
*Oficial — Fundação Cesgranrio, BNDES, Edital 1/2024, Analista — Análise de Sistemas: Desenvolvimento, 2024, Prova 3 (manhã), questão 42 (gabarito: final após recursos (documento da banca, via espelho QConcursos)) · status: em_revisao*

**Autenticação** responde "**quem é você?**" (MFA reforça); **autorização** responde "**o que você pode fazer?**". O RBAC é modelo de **autorização**: as permissões associam-se a **papéis**, e os usuários recebem papéis. Os dois são complementares.

- A) Incorreta. A autenticação não atribui permissões; e o RBAC considera o papel do usuário identificado.
- B) Incorreta. O RBAC trata de autorização, e não de autenticação.
- C) Correta. RBAC define permissões por papel; a autenticação confirma a identidade antes.
- D) Incorreta. Ambos se relacionam: o papel só vale para um usuário autenticado.
- E) Incorreta. Papéis não substituem a autenticação: sem identificar o usuário, não há como aplicar o papel.

### OFI-000099 — Gabarito: C
*Oficial — Fundação Cesgranrio, BNDES, Edital 1/2024, Analista — Análise de Sistemas: Desenvolvimento, 2024, Prova 3 (manhã), questão 53 (gabarito: final após recursos (documento da banca, via espelho QConcursos)) · status: em_revisao*

No **DRaaS** (*Disaster Recovery as a Service*), um **provedor de nuvem** replica dados e infraestrutura e **executa a recuperação** em caso de desastre, para manter a continuidade com o mínimo de interrupção.

- A) Incorreta. IaaS entrega infraestrutura (máquinas, rede, armazenamento) sem orquestrar o plano de recuperação.
- B) Incorreta. BaaS (*Backup as a Service*) cobre apenas o backup dos dados, e não a orquestração da recuperação de toda a infraestrutura.
- C) Correta. O provedor implementa e orquestra a recuperação: DRaaS.
- D) Incorreta. "DRVMaaS" não é modelo de serviço padrão.
- E) Incorreta. PaaS entrega plataforma de desenvolvimento e execução.

### OFI-000111 — Gabarito: B
*Oficial — Fundação Cesgranrio, Petrobras PSP RH 2017.2 (prova de 18/03/2018), Analista de Sistemas Júnior — Processos de Negócio, 2018, Prova 3, questão 63 (gabarito: de espelho (PCI), fornecido pelo usuário; preliminar/definitivo não indicado; anulações não verificadas; não validado contra a banca) · status: em_revisao*

O **hash** é um **resumo de tamanho fixo** do documento. Na assinatura digital, o signatário cifra o hash com sua **chave privada**; o verificador recalcula o hash e compara com o decifrado (com a **chave pública**): se coincidem, o conteúdo **não foi alterado** (integridade). O hash **não permite recuperar** o documento (função unidirecional).

- A) Incorreta. O hash não facilita a criptografia do documento.
- B) Correta. O hash comprova a integridade desde a assinatura.
- C) Incorreta. A decifragem usa a chave **pública** do signatário (a secreta nunca consta do certificado).
- D) Incorreta. O hash não permite recuperar o documento original, nem com chave secreta.
- E) Incorreta. O hash não permite recuperar o documento, nem com a chave pública.

### OFI-000112 — Gabarito: A
*Oficial — Fundação Cesgranrio, Petrobras PSP RH 2017.2 (prova de 18/03/2018), Analista de Sistemas Júnior — Processos de Negócio, 2018, Prova 3, questão 64 (gabarito: de espelho (PCI), fornecido pelo usuário; preliminar/definitivo não indicado; anulações não verificadas; não validado contra a banca) · status: em_revisao*

Ataques **passivos** (escuta e análise de tráfego) **observam** sem alterar os dados e ameaçam a **confidencialidade**. Ataques **ativos** (disfarce, modificação, repetição, negação de serviço) ameaçam integridade, autenticidade e disponibilidade.

- A) Correta. Observar ou analisar o tráfego compromete o sigilo: confidencialidade.
- B) Incorreta. A irretratabilidade é ameaçada por negação de autoria, em ataques ativos.
- C) Incorreta. A autenticidade é ameaçada por disfarce (ataque ativo).
- D) Incorreta. A disponibilidade é ameaçada por negação de serviço (ataque ativo).
- E) Incorreta. A integridade é ameaçada por modificação de dados (ataque ativo).

### OFI-000113 — Gabarito: E
*Oficial — Fundação Cesgranrio, Petrobras PSP RH 2017.2 (prova de 18/03/2018), Analista de Sistemas Júnior — Processos de Negócio, 2018, Prova 3, questão 65 (gabarito: de espelho (PCI), fornecido pelo usuário; preliminar/definitivo não indicado; anulações não verificadas; não validado contra a banca) · status: em_revisao*

A ISO/IEC 27002 (seção de **classificação e rotulagem**) recomenda que as informações e as **saídas dos sistemas que tratam dados sensíveis** sejam **rotuladas** conforme **valor, requisitos legais, sensibilidade e criticidade**; o **proprietário** do ativo classifica e a classificação é **revisada periodicamente**.

- A) Incorreta. A revisão fica com o proprietário da informação, e não necessariamente com a alta gerência.
- B) Incorreta. A atribuição cabe ao **proprietário** da informação, e a TI é custodiante.
- C) Incorreta. Informação oriunda de outra organização pode ter esquema de classificação diferente e exige **mapeamento**, e não manutenção cega dos rótulos.
- D) Incorreta. A norma não prescreve "princípio de equidade" para a classificação.
- E) Correta. A rotulagem de informações e saídas dos sistemas, conforme valor e sensibilidade, é diretriz da norma.

### OFI-000114 — Gabarito: B
*Oficial — Fundação Cesgranrio, Petrobras PSP RH 2017.2 (prova de 18/03/2018), Analista de Sistemas Júnior — Processos de Negócio, 2018, Prova 3, questão 66 (gabarito: de espelho (PCI), fornecido pelo usuário; preliminar/definitivo não indicado; anulações não verificadas; não validado contra a banca) · status: em_revisao*

No **SSO**, o usuário se autentica **uma vez** e acessa várias aplicações sem novas autenticações. OTP e OTT são senhas e tokens de uso único (segundo fator), e ULC e UAD não são mecanismos conhecidos.

- A) Incorreta. "Unique Login Control" não é padrão conhecido.
- B) Correta. Autenticar uma vez e acessar várias aplicações: SSO.
- C) Incorreta. OTP é senha descartável, usada como fator de autenticação.
- D) Incorreta. OTT é token de uso único.
- E) Incorreta. "Unique-Auth Database" não é padrão conhecido.

### OFI-000128 — Gabarito: E
*Oficial — Fundação Cesgranrio, Petroquímica Suape PSP nº 1/2012 (22/04/2012), Analista de Sistemas Júnior — Ênfase em Negócio, 2012, Prova 6, questão 51 (gabarito: de espelho (Estude Grátis), após recursos; não validado contra a banca) · status: em_revisao*

O **risco** cresce com o **aumento** das **ameaças** e das **vulnerabilidades** (e do impacto). Reduzir ameaças **diminui** o risco, e aumentar vulnerabilidades **o aumenta**. As duas afirmações estão invertidas, portanto, **ambas falsas**.

- A) Incorreta. Ambas são falsas.
- B) Incorreta. Ambas são falsas.
- C) Incorreta. A segunda também é falsa.
- D) Incorreta. A primeira é falsa, mas a segunda também.
- E) Correta. Risco ∝ ameaça × vulnerabilidade × impacto: as duas afirmações contrariam a relação.
