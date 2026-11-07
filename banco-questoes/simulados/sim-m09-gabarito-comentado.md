# Simulado do módulo 9 — Segurança da informação

**Status:** rascunho · **Tempo:** 58 min · **Questões:** 15

**Critério de distribuição:** Até 15 questões por módulo, priorizando itens ainda não usados e mistura de dificuldade 30/50/20% (critério pedagógico).

**Observações:** Mistura de questões oficiais e autorais do módulo; algumas ainda `em_revisao`.

Composição: tipo {'autoral': 6, 'oficial': 9} · status {'validada': 6, 'em_revisao': 9} · dificuldade {'facil': 5, 'media': 7, 'dificil': 3}

## 1. AUT-000083 — Softwares maliciosos: classificação pelo comportamento

*Questão autoral — estilo Cesgranrio.* · item 9.3 · Fácil · gabarito **A**

**Ransomware** sequestra dados (criptografa ou bloqueia) e exige resgate (I). **Worm** propaga-se sozinho pela rede, sem hospedeiro e sem ação do usuário (II). **Cavalo de troia (*trojan*)** disfarça-se de programa legítimo e executa ação maliciosa, como abrir um acesso remoto (*backdoor*) (III).

- **A)** Correta. I: ransomware; II: worm; III: trojan.
- **B)** Incorreta. A criptografia com pedido de resgate é ransomware (I), e a propagação autônoma pela rede é worm (II); a alternativa os troca.
- **C)** Incorreta. Vírus depende de hospedeiro e de execução; o comportamento II é de worm, e o III, de trojan.
- **D)** Incorreta. Spyware coleta informações; o comportamento I é de ransomware. Rootkit oculta presença do invasor, e não se apresenta como utilitário legítimo.
- **E)** Incorreta. O comportamento I é de ransomware, e não de trojan; o II é de worm, e não de vírus, que depende de hospedeiro.

**Revisão rápida:** Vírus: hospedeiro. Worm: autônomo pela rede. Trojan: disfarce. Ransomware: resgate. Spyware: coleta. Rootkit: oculta o invasor.

## 2. OFI-000060 — Malware: bot e botnet

*Questão oficial — Fundação Cesgranrio, Transpetro PSP RH 2018.1, Prova 15, questão 49.* · item 9.3 · Fácil · gabarito **A**

O **bot** transforma o computador em "zumbi" de uma **botnet** controlada remotamente pelo atacante, usada em DDoS, spam e outras ações automatizadas, sem conhecimento do dono.

- **A)** Correta. Bot: integra o equipamento a uma botnet.
- **B)** Incorreta. Worm se autorreplica pela rede, sem depender de hospedeiro.
- **C)** Incorreta. Trojan se disfarça de programa legítimo.
- **D)** Incorreta. "Rabbit" é programa que se replica até esgotar recursos, termo menos usual.
- **E)** Incorreta. Ransomware cifra dados e exige resgate.

**Revisão rápida:** Bot = computador zumbi em botnet.

## 3. OFI-000075 — Malware: tipo indicado para implantar spyware

*Questão oficial — Fundação Cesgranrio, BNDES, Edital 1/2024, Prova 2, questão 36.* · item 9.3 · Média · gabarito **A**

O **trojan (cavalo de Troia)** se disfarça de programa útil, e o usuário o instala voluntariamente; ele age em silêncio, o que o torna adequado para **implantar um spyware** (código de espionagem).

- **A)** Correta. Trojan: induz a instalação por parecer útil e age em silêncio.
- **B)** Incorreta. Vírus precisa de um hospedeiro e da execução do arquivo infectado; a replicação autônoma entre computadores descreve melhor o worm; a justificativa é incorreta.
- **C)** Incorreta. O worm se propaga pela rede; a descrição "em áreas da memória de um único dispositivo" não corresponde a ele.
- **D)** Incorreta. Spear phishing é técnica de engenharia social, e não tipo de malware.
- **E)** Incorreta. Botnet é uma rede de máquinas controladas; o *botmaster* é o controlador, e a descrição está trocada.

**Revisão rápida:** Trojan: disfarce e instalação voluntária; entrega outros códigos.

## 4. OFI-000080 — Código malicioso: formjacking

*Questão oficial — Fundação Cesgranrio, BNDES, Edital 1/2024, Prova 2, questão 51.* · item 9.3 · Média · gabarito **B**

O **formjacking** injeta JavaScript malicioso em formulários de sites (especialmente de pagamento) para **capturar os dados digitados**, como números de cartão (ataques do tipo *Magecart*).

- **A)** Incorreta. Worm se autorreplica pela rede.
- **B)** Correta. Formjacking: JavaScript que rouba dados de formulários.
- **C)** Incorreta. Downloader baixa e instala outros códigos.
- **D)** Incorreta. Ransomware cifra dados e exige resgate.
- **E)** Incorreta. Cryptojacking usa recursos da vítima para minerar criptomoedas.

**Revisão rápida:** Formjacking: JS que captura dados de formulários de pagamento.

## 5. AUT-000081 — Ataques: injeção de SQL e consulta parametrizada

*Questão autoral — estilo Cesgranrio.* · item 9.4 · Média · gabarito **B**

O código **concatena** a entrada do usuário ao texto SQL; com o valor `' OR '1'='1`, a consulta vira `... WHERE login = '' OR '1'='1'`, que é sempre verdadeira e retorna todas as linhas: **SQL Injection**. A prevenção principal (OWASP) são as **consultas parametrizadas** (*prepared statements*), em que o valor é enviado separado do comando e tratado apenas como dado (`cursor.execute("... WHERE login = ?", (nome,))`), complementadas por validação por lista permitida e menor privilégio.

- **A)** Incorreta. Remover palavras isoladas é uma lista de bloqueio facilmente contornada (por exemplo, com `or` em minúsculas ou outras construções).
- **B)** Correta. A consulta parametrizada separa comando e dado, eliminando a injeção.
- **C)** Incorreta. O valor malicioso do exemplo tem apenas 11 caracteres; limitar o tamanho não impede a injeção.
- **D)** Incorreta. O HTTPS protege o canal contra interceptação, mas o servidor continua montando a consulta com a entrada recebida; a injeção persiste.
- **E)** Incorreta. Mais privilégios ampliam o dano de uma injeção; a boa prática é o menor privilégio.

**Revisão rápida:** SQLi: dado interpretado como comando. Defesa: consultas parametrizadas, validação por lista permitida, menor privilégio.

## 6. OFI-000078 — Ataques ativos e passivos: disfarce (masquerade)

*Questão oficial — Fundação Cesgranrio, BNDES, Edital 1/2024, Prova 2, questão 47.* · item 9.4 · Média · gabarito **E**

No **ataque de disfarce (*masquerade*)**, o atacante **se faz passar** por uma entidade legítima para obter acesso ou praticar ações maliciosas; é um ataque **ativo** (Stallings).

- **A)** Incorreta. Escuta do fluxo é ataque passivo (*eavesdropping*, liberação de conteúdo).
- **B)** Incorreta. Inferência pela análise do tráfego é ataque passivo (análise de tráfego).
- **C)** Incorreta. Sobrecarga da rede é negação de serviço (DoS).
- **D)** Incorreta. Esgotar recursos da vítima também é negação de serviço.
- **E)** Correta. Passar-se por entidade autorizada é o disfarce.

**Revisão rápida:** Masquerade = personificar entidade autorizada.

## 7. OFI-000083 — OWASP Top 10 (2021): falhas criptográficas

*Questão oficial — Fundação Cesgranrio, BNDES, Edital 1/2024, Prova 2, questão 55.* · item 9.4 · Média · gabarito **B**

No OWASP Top 10 **2021**, **A02 — Cryptographic Failures** (antes "Exposição de dados sensíveis") inclui a **ausência de TLS** ou criptografia fraca, que permite interceptar dados e cookies de sessão em trânsito.

- **A)** Incorreta. Injection (A03) é o envio de dados não confiáveis a um interpretador.
- **B)** Correta. Falta de TLS e dados expostos em trânsito: Cryptographic Failures (A02).
- **C)** Incorreta. Broken Access Control (A01) é falha na imposição de permissões.
- **D)** Incorreta. SSRF (A10) faz o servidor requisitar recursos indevidos.
- **E)** Incorreta. Componentes vulneráveis e desatualizados (A06) tratam de bibliotecas com falhas conhecidas.

**Revisão rápida:** A02:2021 Cryptographic Failures: sem TLS, algoritmos fracos, chaves mal geridas.

## 8. OFI-000089 — CWE Top 25: SSRF

*Questão oficial — Fundação Cesgranrio, BNDES, Edital 1/2024, Prova 2, questão 67.* · item 9.4 · Média · gabarito **A**

**SSRF** (*Server-Side Request Forgery*): o servidor é induzido a fazer requisições a destinos escolhidos pelo atacante (inclusive redes internas), servindo de *proxy* para varreduras e acessos indevidos.

- **A)** Correta. SSRF: o servidor requisita a URL controlada pelo atacante.
- **B)** Incorreta. CSRF induz o navegador de uma vítima autenticada a enviar requisições indesejadas ao site.
- **C)** Incorreta. Out-of-bounds read é leitura fora dos limites de memória.
- **D)** Incorreta. Missing Authorization é ausência de verificação de permissão.
- **E)** Incorreta. Deserialization of Untrusted Data é desserializar dados não confiáveis, com possibilidade de execução de código.

**Revisão rápida:** SSRF: servidor usado como proxy para alcançar a rede interna.

## 9. AUT-000086 — Resposta a incidentes: fases do ciclo (NIST SP 800-61 Rev. 2)

*Questão autoral — estilo Cesgranrio.* · item 9.11 · Fácil · gabarito **D**

O ciclo da Rev. 2 tem **quatro fases**: **preparação**; **detecção e análise**; **contenção, erradicação e recuperação**; e **atividade pós-incidente** (lições aprendidas). Isolar o servidor é **contenção**; remover o código malicioso e redefinir credenciais é **erradicação**; restaurar o serviço é **recuperação**. As três fazem parte da mesma fase.

- **A)** Incorreta. A preparação ocorre antes do incidente (política, equipe, ferramentas, prevenção).
- **B)** Incorreta. A detecção e análise identifica, valida e prioriza o incidente, o que já ocorreu no enunciado.
- **C)** Incorreta. A atividade pós-incidente trata de lições aprendidas e melhoria, e vem depois da recuperação.
- **D)** Correta. Isolamento (contenção), remoção e troca de credenciais (erradicação) e restauração (recuperação).
- **E)** Incorreta. Essas duas fases antecedem a resposta ao incidente já detectado.

**Revisão rápida:** NIST 800-61 Rev. 2: 4 fases. Contenção, erradicação e recuperação formam uma só fase.

## 10. OFI-000087 — FIRST CSIRT Services Framework

*Questão oficial — Fundação Cesgranrio, BNDES, Edital 1/2024, Prova 2, questão 65.* · item 9.11 · Difícil · gabarito **E**

O **FIRST CSIRT Services Framework** organiza os serviços em áreas: gestão de **eventos** de segurança (monitoramento, detecção e análise), gestão de **incidentes** (aceitação, análise, **mitigação e recuperação**, coordenação, comunicação), gestão de **vulnerabilidades**, **consciência situacional** e **transferência de conhecimento**.

- **A)** Incorreta. Consciência situacional trata de inteligência, análise de ameaças e comunicação de contexto.
- **B)** Incorreta. Transferência de conhecimento trata de treinamento e conscientização.
- **C)** Incorreta. Gestão de vulnerabilidades trata de descoberta, análise e correção de vulnerabilidades.
- **D)** Incorreta. Gestão de eventos trata de monitoramento, detecção e análise de eventos.
- **E)** Correta. Mitigação e recuperação do incidente pertencem à gestão de incidentes.

**Revisão rápida:** Mitigação e recuperação: área de gestão de incidentes.

## 11. OFI-000039 — Resposta a incidentes: NIST SP 800-61

*Questão oficial — Fundação Cesgranrio, Transpetro PSP/Terra 002/2023, Prova 6, questão 42.* · item 9.11 · Fácil · gabarito **C**

A **NIST SP 800-61** (*Computer Security Incident Handling Guide*) define o ciclo de vida de resposta a incidentes (Rev. 2: preparação; detecção e análise; contenção, erradicação e recuperação; atividade pós-incidente). A Rev. 3 (2025) alinha a resposta ao NIST CSF 2.0.

- **A)** Incorreta. SP 800-30 trata de avaliação de riscos.
- **B)** Incorreta. SP 800-34 trata de planejamento de contingência.
- **C)** Correta. SP 800-61 define o ciclo de vida de resposta a incidentes.
- **D)** Incorreta. ISO 27033-5 trata de segurança de redes (VPN).
- **E)** Incorreta. ISO 27034-1 trata de segurança de aplicações.

**Revisão rápida:** 800-61 = resposta a incidentes.

## 12. OFI-000077 — ISO/IEC 27035-1: fase de resposta a incidentes

*Questão oficial — Fundação Cesgranrio, BNDES, Edital 1/2024, Prova 2, questão 45.* · item 9.11 · Média · gabarito **E**

As cinco fases da ISO/IEC 27035-1:2023 são **planejar e preparar; detectar e reportar; avaliar e decidir; responder; lições aprendidas**. Na fase **responder** ocorrem contenção, erradicação e recuperação e, se o incidente excede os limites das equipes, o acionamento de **continuidade de negócios e recuperação de desastres**.

- **A)** Incorreta. Avaliar e decidir classifica o evento como incidente e decide como tratá-lo.
- **B)** Incorreta. Detectar e reportar identifica e comunica eventos.
- **C)** Incorreta. Lições aprendidas revisa e melhora o processo após o incidente.
- **D)** Incorreta. Planejar e preparar estabelece políticas, equipe e planos antes dos incidentes.
- **E)** Correta. Na resposta é que se executam as ações, inclusive o acionamento de continuidade e recuperação.

**Revisão rápida:** 27035-1: preparar, detectar, avaliar, responder, aprender.

## 13. AUT-000087 — Modelagem de ameaças: categorias do STRIDE

*Questão autoral — estilo Cesgranrio.* · item 9.14 · Difícil · gabarito **A**

**STRIDE**: *Spoofing* (falsificação de identidade, viola a **autenticidade**), *Tampering* (adulteração, viola a **integridade**), *Repudiation* (repúdio, viola o **não repúdio**), *Information disclosure* (divulgação de informações, **confidencialidade**), *Denial of service* (negação de serviço, **disponibilidade**) e *Elevation of privilege* (elevação de privilégio, **autorização**). I: **repúdio**; II: **adulteração**; III: **falsificação de identidade**.

- **A)** Correta. I: repúdio; II: adulteração; III: falsificação de identidade.
- **B)** Incorreta. Troca I e II (adulteração × repúdio) e classifica III como divulgação de informações, quando o uso de credenciais alheias é falsificação de identidade.
- **C)** Incorreta. Inverte I e III: a negação de autoria sem registros é repúdio, e o uso de credenciais roubadas é falsificação de identidade.
- **D)** Incorreta. II é adulteração (e não divulgação de informações), e III não é elevação de privilégio: o atacante assume a identidade de outro usuário.
- **E)** Incorreta. I não é negação de serviço (que afeta a disponibilidade); a situação trata de repúdio.

**Revisão rápida:** S: falsificar identidade. T: adulterar. R: negar autoria. I: divulgar. D: negar serviço. E: elevar privilégio.

## 14. AUT-000088 — Gestão de riscos: perda esperada anual (SLE e ALE)

*Questão autoral — estilo Cesgranrio.* · item 9.16 · Difícil · gabarito **C**

**SLE** (perda por evento) = valor do ativo × fator de exposição = 800.000 × 0,25 = **R$ 200.000**. **ALE antes** = SLE × ARO = 200.000 × 0,5 = **R$ 100.000**. **ALE depois** = 200.000 × 0,1 = **R$ 20.000**. Redução da perda esperada = 100.000 − 20.000 = **R$ 80.000**. Benefício líquido = 80.000 − 40.000 = **R$ 40.000**.

- **A)** Incorreta. R$ 80.000 é a redução da perda esperada, sem subtrair o custo do controle.
- **B)** Incorreta. Não decorre dos dados; poderia resultar de erro na aplicação da fórmula (por exemplo, usar ARO de 0,2 em vez de 0,1).
- **C)** Correta. 80.000 − 40.000 = 40.000.
- **D)** Incorreta. R$ 100.000 é a perda esperada anual **antes** do controle (ALE inicial).
- **E)** Incorreta. R$ 20.000 é a perda esperada anual **depois** do controle (ALE residual).

**Revisão rápida:** SLE: perda por evento. ARO: ocorrências por ano. ALE = SLE × ARO. Vale a pena se (ALE antes − ALE depois) > custo.

## 15. AUT-000090 — Segurança em nuvem: responsabilidade compartilhada

*Questão autoral — estilo Cesgranrio.* · item 9.20 · Fácil · gabarito **B**

No **modelo de responsabilidade compartilhada**, o provedor é responsável pela segurança **da** nuvem (instalações físicas, hosts, rede e, no SaaS, a maior parte da pilha), e o cliente, pela segurança **na** nuvem. **Dados, identidades e configurações** permanecem **sempre** com o cliente, em IaaS, PaaS e SaaS.

- **A)** Incorreta. A segurança física dos datacenters é do provedor em todos os modelos.
- **B)** Correta. Dados, identidades e configurações de acesso são sempre do cliente.
- **C)** Incorreta. No SaaS, o sistema operacional é gerenciado pelo provedor.
- **D)** Incorreta. A virtualização e os servidores são responsabilidade do provedor.
- **E)** Incorreta. A rede física e os equipamentos de conectividade do provedor são do provedor.

**Revisão rápida:** Dados, identidades e configuração: sempre do cliente. Instalações físicas, hosts e rede do provedor: do provedor. SO: cliente em IaaS; provedor em PaaS e SaaS.
