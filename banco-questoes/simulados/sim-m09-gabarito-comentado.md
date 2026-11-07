# Simulado do módulo 9 — Segurança da informação

**Status:** rascunho · **Tempo:** 58 min · **Questões:** 15

**Critério de distribuição:** Até 15 questões por módulo, priorizando itens ainda não usados e mistura de dificuldade 30/50/20% (critério pedagógico).

**Observações:** Mistura de questões oficiais e autorais do módulo; algumas ainda `em_revisao`.

Composição: tipo {'autoral': 7, 'oficial': 8} · status {'validada': 7, 'em_revisao': 8} · dificuldade {'media': 10, 'facil': 4, 'dificil': 1}

## 1. AUT-000082 — Operação de segurança: backup completo e diferencial

*Questão autoral — estilo Cesgranrio.* · item 9.2 · Média · gabarito **D**

O backup **diferencial** copia tudo o que mudou **desde o último backup completo**; portanto, o diferencial de quarta-feira contém todas as alterações de segunda a quarta. A restauração exige o **completo (domingo)** e **apenas o último diferencial (quarta-feira)**: **2 conjuntos**. (Com backups **incrementais**, seriam necessários o completo e os incrementais de segunda, terça e quarta: 4 conjuntos.)

- **A)** Incorreta. Só o completo restauraria o estado de domingo, perdendo as alterações de segunda a quarta.
- **B)** Incorreta. Falta o diferencial de quarta-feira, o mais recente, e o de segunda é desnecessário (o de quarta já o contém).
- **C)** Incorreta. Descreve a restauração com backups incrementais; com diferenciais, basta o último.
- **D)** Correta. Completo de domingo + diferencial de quarta-feira.
- **E)** Incorreta. O diferencial de quinta-feira não existe (a falha ocorreu antes do backup do dia) e os anteriores não são necessários.

**Revisão rápida:** Restauração: diferencial = 2 conjuntos; incremental = completo + todos os incrementais. Regra 3-2-1; testar restaurações.

## 2. OFI-000040 — SIEM

*Questão oficial — Fundação Cesgranrio, Transpetro PSP/Terra 002/2023, Prova 6, questão 43.* · item 9.2 · Fácil · gabarito **D**

O **SIEM** (*Security Information and Event Management*) **coleta, correlaciona e analisa** logs e eventos de várias fontes, gerando alertas e visão consolidada.

- **A)** Incorreta. CASB controla o uso de serviços em nuvem.
- **B)** Incorreta. WAF protege aplicações web contra ataques HTTP.
- **C)** Incorreta. DLP evita vazamento de dados.
- **D)** Correta. SIEM agrega e correlaciona eventos e logs de segurança.
- **E)** Incorreta. Proxy intermedia o tráfego, aplicando filtros e cache.

**Revisão rápida:** SIEM: coleta + correlação + alerta.

## 3. OFI-000058 — Firewall: listas de controle de acesso

*Questão oficial — Fundação Cesgranrio, Transpetro PSP RH 2018.1, Prova 15, questão 47.* · item 9.2 · Fácil · gabarito **A**

O **firewall** filtra o tráfego conforme **regras** (listas de controle de acesso) com base em endereços, portas e protocolos, permitindo ou bloqueando a passagem.

- **A)** Correta. Firewall: filtragem por regras/ACL.
- **B)** Incorreta. Proxy intermedia requisições de clientes e pode filtrar conteúdo e armazenar em cache.
- **C)** Incorreta. DMZ é uma zona de rede intermediária, não um componente de filtragem.
- **D)** Incorreta. IDS detecta e alerta, sem bloquear.
- **E)** Incorreta. IPS detecta e bloqueia ataques por assinaturas/comportamento.

**Revisão rápida:** Firewall: regras que permitem ou negam pacotes.

## 4. AUT-000083 — Softwares maliciosos: classificação pelo comportamento

*Questão autoral — estilo Cesgranrio.* · item 9.3 · Fácil · gabarito **A**

**Ransomware** sequestra dados (criptografa ou bloqueia) e exige resgate (I). **Worm** propaga-se sozinho pela rede, sem hospedeiro e sem ação do usuário (II). **Cavalo de troia (*trojan*)** disfarça-se de programa legítimo e executa ação maliciosa, como abrir um acesso remoto (*backdoor*) (III).

- **A)** Correta. I: ransomware; II: worm; III: trojan.
- **B)** Incorreta. A criptografia com pedido de resgate é ransomware (I), e a propagação autônoma pela rede é worm (II); a alternativa os troca.
- **C)** Incorreta. Vírus depende de hospedeiro e de execução; o comportamento II é de worm, e o III, de trojan.
- **D)** Incorreta. Spyware coleta informações; o comportamento I é de ransomware. Rootkit oculta presença do invasor, e não se apresenta como utilitário legítimo.
- **E)** Incorreta. O comportamento I é de ransomware, e não de trojan; o II é de worm, e não de vírus, que depende de hospedeiro.

**Revisão rápida:** Vírus: hospedeiro. Worm: autônomo pela rede. Trojan: disfarce. Ransomware: resgate. Spyware: coleta. Rootkit: oculta o invasor.

## 5. OFI-000060 — Malware: bot e botnet

*Questão oficial — Fundação Cesgranrio, Transpetro PSP RH 2018.1, Prova 15, questão 49.* · item 9.3 · Fácil · gabarito **A**

O **bot** transforma o computador em "zumbi" de uma **botnet** controlada remotamente pelo atacante, usada em DDoS, spam e outras ações automatizadas, sem conhecimento do dono.

- **A)** Correta. Bot: integra o equipamento a uma botnet.
- **B)** Incorreta. Worm se autorreplica pela rede, sem depender de hospedeiro.
- **C)** Incorreta. Trojan se disfarça de programa legítimo.
- **D)** Incorreta. "Rabbit" é programa que se replica até esgotar recursos, termo menos usual.
- **E)** Incorreta. Ransomware cifra dados e exige resgate.

**Revisão rápida:** Bot = computador zumbi em botnet.

## 6. AUT-000081 — Ataques: injeção de SQL e consulta parametrizada

*Questão autoral — estilo Cesgranrio.* · item 9.4 · Média · gabarito **B**

O código **concatena** a entrada do usuário ao texto SQL; com o valor `' OR '1'='1`, a consulta vira `... WHERE login = '' OR '1'='1'`, que é sempre verdadeira e retorna todas as linhas: **SQL Injection**. A prevenção principal (OWASP) são as **consultas parametrizadas** (*prepared statements*), em que o valor é enviado separado do comando e tratado apenas como dado (`cursor.execute("... WHERE login = ?", (nome,))`), complementadas por validação por lista permitida e menor privilégio.

- **A)** Incorreta. Remover palavras isoladas é uma lista de bloqueio facilmente contornada (por exemplo, com `or` em minúsculas ou outras construções).
- **B)** Correta. A consulta parametrizada separa comando e dado, eliminando a injeção.
- **C)** Incorreta. O valor malicioso do exemplo tem apenas 11 caracteres; limitar o tamanho não impede a injeção.
- **D)** Incorreta. O HTTPS protege o canal contra interceptação, mas o servidor continua montando a consulta com a entrada recebida; a injeção persiste.
- **E)** Incorreta. Mais privilégios ampliam o dano de uma injeção; a boa prática é o menor privilégio.

**Revisão rápida:** SQLi: dado interpretado como comando. Defesa: consultas parametrizadas, validação por lista permitida, menor privilégio.

## 7. AUT-000084 — Autenticação multifator (MFA): fatores de autenticação

*Questão autoral — estilo Cesgranrio.* · item 9.9 · Média · gabarito **E**

A **MFA** exige **dois ou mais fatores de categorias diferentes**: **conhecimento** (senha, PIN), **posse** (token, celular com aplicativo, cartão, chave de segurança) e **inerência** (biometria). A combinação **senha + código gerado por aplicativo no celular** reúne **conhecimento** e **posse**. Dois fatores da mesma categoria não são MFA.

- **A)** Incorreta. Senha e PIN são ambos fatores de conhecimento: mesma categoria.
- **B)** Incorreta. Duas senhas são dois fatores de conhecimento; não há segundo fator de outra categoria.
- **C)** Incorreta. É um único fator (inerência); a biometria, segundo o NIST, também não é reconhecida isoladamente como autenticador.
- **D)** Incorreta. Os dois códigos são fatores de posse (dispositivo/conta que os recebe): mesma categoria. Além disso, e-mail e SMS são canais considerados frágeis.
- **E)** Correta. Conhecimento (senha) + posse (aplicativo no celular).

**Revisão rápida:** MFA: ≥ 2 fatores de categorias distintas (sabe, possui, é).

## 8. AUT-000085 — Inteligência de ameaças: IoC, TTP e níveis

*Questão autoral — estilo Cesgranrio.* · item 9.12 · Média · gabarito **C**

**IoC** (*Indicator of Compromise*) são artefatos técnicos de comprometimento (hashes, IPs, domínios), ligados à inteligência **tática**: item I. **TTP** (táticas, técnicas e procedimentos) descrevem o **comportamento** do atacante, mais duradouro que os IoC e ligado à inteligência **operacional**: item II. A **inteligência estratégica** trata de tendências, motivações e riscos para o negócio, voltada à alta direção: item III.

- **A)** Incorreta. O hash e o IP são IoC, e não TTP; o comportamento (PowerShell e tarefas agendadas) é TTP.
- **B)** Incorreta. O hash e o IP não são inteligência estratégica; o relatório ao conselho não é um IoC.
- **C)** Correta. I: IoC; II: TTP; III: inteligência estratégica.
- **D)** Incorreta. O comportamento do grupo (II) é TTP, e o relatório ao conselho (III) é inteligência estratégica; a alternativa os troca.
- **E)** Incorreta. O item I é IoC, e não TTP; o item III é inteligência estratégica, e não IoC.

**Revisão rápida:** IoC: indicador técnico (tática). TTP: comportamento (operacional). Estratégica: tendências para decisão.

## 9. AUT-000087 — Modelagem de ameaças: categorias do STRIDE

*Questão autoral — estilo Cesgranrio.* · item 9.14 · Difícil · gabarito **A**

**STRIDE**: *Spoofing* (falsificação de identidade, viola a **autenticidade**), *Tampering* (adulteração, viola a **integridade**), *Repudiation* (repúdio, viola o **não repúdio**), *Information disclosure* (divulgação de informações, **confidencialidade**), *Denial of service* (negação de serviço, **disponibilidade**) e *Elevation of privilege* (elevação de privilégio, **autorização**). I: **repúdio**; II: **adulteração**; III: **falsificação de identidade**.

- **A)** Correta. I: repúdio; II: adulteração; III: falsificação de identidade.
- **B)** Incorreta. Troca I e II (adulteração × repúdio) e classifica III como divulgação de informações, quando o uso de credenciais alheias é falsificação de identidade.
- **C)** Incorreta. Inverte I e III: a negação de autoria sem registros é repúdio, e o uso de credenciais roubadas é falsificação de identidade.
- **D)** Incorreta. II é adulteração (e não divulgação de informações), e III não é elevação de privilégio: o atacante assume a identidade de outro usuário.
- **E)** Incorreta. I não é negação de serviço (que afeta a disponibilidade); a situação trata de repúdio.

**Revisão rápida:** S: falsificar identidade. T: adulterar. R: negar autoria. I: divulgar. D: negar serviço. E: elevar privilégio.

## 10. AUT-000089 — Assinatura digital: propriedades garantidas

*Questão autoral — estilo Cesgranrio.* · item 9.19 · Média · gabarito **E**

Na **assinatura digital**, o resumo do documento é assinado com a **chave privada** do signatário e verificado com a **chave pública**. Qualquer alteração muda o resumo: **integridade**. Só quem possui a chave privada poderia assinar: **autenticidade**; e o signatário não pode negar a autoria (desde que a chave seja de seu uso exclusivo e haja certificado): **não repúdio**. O documento segue em texto claro, e portanto **não há confidencialidade**; para ela, usa-se criptografia (por exemplo, o envelope digital).

- **A)** Incorreta. A assinatura não fornece confidencialidade (o contrato está em texto claro) e fornece não repúdio.
- **B)** Incorreta. A chave privada de Alice não protege o conteúdo do contrato, que é enviado em texto claro.
- **C)** Incorreta. A assinatura não garante disponibilidade; garante integridade, autenticidade e não repúdio.
- **D)** Incorreta. A assinatura garante a integridade, e o texto claro implica ausência de confidencialidade.
- **E)** Correta. Integridade, autenticidade e não repúdio, sem confidencialidade.

**Revisão rápida:** Assinatura: hash assinado com a chave privada, verificado com a pública. Sem sigilo do conteúdo.

## 11. OFI-000038 — Criptografia híbrida: envelope digital

*Questão oficial — Fundação Cesgranrio, Transpetro PSP/Terra 002/2023, Prova 6, questão 41.* · item 9.19 · Média · gabarito **D**

No **envelope digital**, a mensagem é cifrada com uma **chave de sessão simétrica** (rápida), e essa chave é cifrada com a **chave pública do destinatário**. Somente o destinatário, com sua chave privada, abre o envelope e obtém a chave de sessão.

- **A)** Incorreta. Cifrar com a privada do remetente gera assinatura (autenticidade), e qualquer um com a pública do remetente decifraria; não dá confidencialidade.
- **B)** Incorreta. A chave privada do destinatário é usada para **abrir** o envelope, e não para fechá-lo.
- **C)** Incorreta. A pública do remetente não restringe a leitura ao destinatário.
- **D)** Correta. Cifrar a chave simétrica com a pública do destinatário garante que só ele a recupere.
- **E)** Incorreta. Um terceiro confiável não é parte do esquema, e só ele poderia decifrar.

**Revisão rápida:** Envelope: dados (simétrica) + chave simétrica (pública do destinatário).

## 12. OFI-000041 — ISO/IEC 27002: proteção contra malware

*Questão oficial — Fundação Cesgranrio, Transpetro PSP/Terra 002/2023, Prova 6, questão 44.* · item 9.19 · Média · gabarito **A**

Na edição de 2013 da ISO/IEC 27002, a proteção contra malware é um objetivo da seção **12 — Segurança nas operações**. **Atenção:** a edição 2022 reorganizou os controles em quatro temas (organizacionais, pessoas, físicos e tecnológicos), e a proteção contra malware passou ao tema **tecnológico** (controle 8.7). A questão segue a organização por seções da edição anterior.

- **A)** Correta. Segurança nas operações (seção 12 da edição 2013) contém a proteção contra malware.
- **B)** Incorreta. Segurança nas comunicações (seção 13) trata de redes e transferência de informações.
- **C)** Incorreta. Segurança em recursos humanos (seção 7) trata de contratação, conscientização e desligamento.
- **D)** Incorreta. Controle de acesso (seção 9) trata de requisitos, gestão de usuários e responsabilidades.
- **E)** Incorreta. Segurança física e do ambiente (seção 11) trata de áreas seguras e equipamentos.

**Revisão rápida:** Malware: 27002:2013 → 12.2 (operações); 27002:2022 → 8.7 (tecnológico).

## 13. OFI-000057 — ISO 27002: controle de acesso à rede

*Questão oficial — Fundação Cesgranrio, Transpetro PSP RH 2018.1, Prova 15, questão 46.* · item 9.19 · Média · gabarito **D**

Na ISO/IEC 27002:2005, a seção **11.4 (Controle de acesso à rede)** inclui a **autenticação para conexão externa do usuário** (11.4.2). As demais opções pertencem a outros controles: privilégios (11.2.2, gerenciamento de acesso do usuário), isolamento de sistemas sensíveis (11.6.2), encerramento por inatividade (11.5.5, acesso ao sistema operacional) e relato de eventos (13.1).

- **A)** Incorreta. Gerenciamento de privilégios: controle de acesso de usuário.
- **B)** Incorreta. Isolamento de sistemas sensíveis: controle de acesso à aplicação e à informação.
- **C)** Incorreta. Time-out de sessão: controle de acesso ao sistema operacional.
- **D)** Correta. Autenticação de usuários remotos: controle de acesso à rede.
- **E)** Incorreta. Relato de eventos: gestão de incidentes.

**Revisão rápida:** Rede: autenticação de acesso remoto, segregação, roteamento.

## 14. OFI-000061 — Certificado digital: SHA256RSA

*Questão oficial — Fundação Cesgranrio, Transpetro PSP RH 2018.1, Prova 15, questão 50.* · item 9.19 · Média · gabarito **E**

**SHA256** é a função de **hash** que gera um resumo (*digest*) de **256 bits**; **RSA** é algoritmo de criptografia **assimétrica**, usado para cifrar esse resumo com a **chave privada** da AC (a assinatura).

- **A)** Incorreta. "SHA" isolado e "RSA simétrico" estão errados; os 256 bits são do digest, não da chave.
- **B)** Incorreta. Os 256 bits referem-se ao digest do SHA256, e não à chave privada.
- **C)** Incorreta. A chave não é simétrica, e RSA não é simétrico.
- **D)** Incorreta. RSA é assimétrico.
- **E)** Correta. SHA256 gera digest de 256 bits e RSA é assimétrico: correta.

**Revisão rápida:** SHA256RSA = hash SHA-256 + assinatura RSA.

## 15. OFI-000063 — ICP-Brasil: certificado da AC subordinada à raiz

*Questão oficial — Fundação Cesgranrio, Transpetro PSP RH 2018.1, Prova 15, questão 52.* · item 9.19 · Média · gabarito **A**

Na hierarquia da ICP-Brasil, a **AC Raiz** (do ITI) emite e **assina** os certificados das ACs de primeiro nível; estas assinam os das ACs seguintes e os de usuários finais. A **AR** apenas valida e encaminha pedidos, **não assina** certificados.

- **A)** Correta. A AC imediatamente subordinada tem seu certificado assinado somente pela AC Raiz.
- **B)** Incorreta. A AR não emite nem assina certificados.
- **C)** Incorreta. O certificado autoassinado é o da própria AC Raiz, e não o das subordinadas.
- **D)** Incorreta. A AR não assina certificados.
- **E)** Incorreta. Só a AC Raiz assina; a própria AC não assina o seu certificado de AC subordinada.

**Revisão rápida:** AC de 1º nível: assinada apenas pela AC Raiz.
