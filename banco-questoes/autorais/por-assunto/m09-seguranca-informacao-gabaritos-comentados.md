# Banco de questões — Módulo 9: Segurança da Informação (lote piloto, gabaritos comentados)

**Tipo:** questões **autorais** — **Questão autoral — estilo Cesgranrio.** **Status:** validada 10.

## Quadro de gabaritos

| Questão | ID | Gabarito | Item do edital | Dificuldade | Habilidade | Tipo | Status |
|---|---|---|---|---|---|---|---|
| 1 | AUT-000081 | B | 9.4 | Média | Aplicação | Cenário | Validada |
| 2 | AUT-000082 | D | 9.2 | Média | Resolução de problemas | Cálculo | Validada |
| 3 | AUT-000083 | A | 9.3 | Fácil | Aplicação | Cenário | Validada |
| 4 | AUT-000084 | E | 9.9 | Média | Análise | Cenário | Validada |
| 5 | AUT-000085 | C | 9.12 | Média | Compreensão | Cenário | Validada |
| 6 | AUT-000086 | D | 9.11 | Fácil | Aplicação | Cenário | Validada |
| 7 | AUT-000087 | A | 9.14 | Difícil | Análise | Cenário | Validada |
| 8 | AUT-000088 | C | 9.16 | Difícil | Resolução de problemas | Cálculo | Validada |
| 9 | AUT-000089 | E | 9.19 | Média | Análise | Cenário | Validada |
| 10 | AUT-000090 | B | 9.20 | Fácil | Compreensão | Cenário | Validada |

---

## Questão 1 — AUT-000081

**AUT-000081** · Ataques: injeção de SQL e consulta parametrizada · item 9.4 · Média · Aplicação

*Questão autoral — estilo Cesgranrio.*

Um desenvolvedor escreveu o trecho a seguir, em Python, para autenticar um usuário a partir do campo de login do formulário.  
  
```python  
nome = request.args["nome"]  
sql = "SELECT * FROM usuarios WHERE login = '" + nome + "'"  
cursor.execute(sql)  
```  
  
Um teste de segurança envia, no campo, o valor ' OR '1'='1 e recebe todos os registros da tabela.  
  
A medida principal para eliminar essa vulnerabilidade é

(A) remover da entrada apenas a palavra OR antes de montar a consulta SQL.  
(B) usar consulta parametrizada, passando o valor de nome como parâmetro, e não por concatenação de texto.  
(C) limitar o tamanho do campo de login a 20 caracteres, pois a entrada maliciosa é longa.  
(D) trafegar a requisição por HTTPS, pois a criptografia do canal impede a alteração da consulta.  
(E) conceder ao usuário do banco de dados privilégios de administrador, para que a consulta nunca falhe.  

### A. Gabarito

**B**

### B. Resolução comentada

O código **concatena** a entrada do usuário ao texto SQL; com o valor `' OR '1'='1`, a consulta vira `... WHERE login = '' OR '1'='1'`, que é sempre verdadeira e retorna todas as linhas: **SQL Injection**. A prevenção principal (OWASP) são as **consultas parametrizadas** (*prepared statements*), em que o valor é enviado separado do comando e tratado apenas como dado (`cursor.execute("... WHERE login = ?", (nome,))`), complementadas por validação por lista permitida e menor privilégio.

### C. Análise das alternativas

- **(A)** Incorreta. Remover palavras isoladas é uma lista de bloqueio facilmente contornada (por exemplo, com `or` em minúsculas ou outras construções).
- **(B)** Correta. A consulta parametrizada separa comando e dado, eliminando a injeção.
- **(C)** Incorreta. O valor malicioso do exemplo tem apenas 11 caracteres; limitar o tamanho não impede a injeção.
- **(D)** Incorreta. O HTTPS protege o canal contra interceptação, mas o servidor continua montando a consulta com a entrada recebida; a injeção persiste.
- **(E)** Incorreta. Mais privilégios ampliam o dano de uma injeção; a boa prática é o menor privilégio.

### D. Fundamentação teórica

- **Módulo:** M09 — Segurança da informação
- **Assunto:** Ataques: SQL Injection; prevenção
- **Item do edital:** 9.4 (E5-085)
- **Arquivo de teoria:** `conteudo/09-seguranca-informacao/03-ameacas-e-malwares.md`
- **Referência:** Material teórico do projeto; fontes conferidas na revisão do M09 (OWASP, NIST SP 800-61 Rev. 2 e 800-63B, RFCs, STRIDE, CTI, backup e CVSS); demais conteúdos de memória. OWASP, SQL Injection (verificado em 2026-10-31).

### E. Ponto de atenção para a prova

**Concatenar** entrada em SQL = vulnerabilidade. Prevenção principal: **consulta parametrizada**. Listas de bloqueio, HTTPS e limite de tamanho **não** resolvem; escape manual não basta sozinho.

### F. Revisão rápida

SQLi: dado interpretado como comando. Defesa: consultas parametrizadas, validação por lista permitida, menor privilégio.

### G. Tags

`m09` · `sql-injection` · `consulta-parametrizada` · `owasp` · `item-9.4` · `media` · `aplicacao` · `cenario` · `autoral`

**Verificação do gabarito:** Executado em SQLite: com concatenação, a entrada ' OR '1'='1 retorna as 3 linhas; com consulta parametrizada, retorna 0 (e 'ana' retorna 1 linha).  
**Status de validação:** `validada`  
**Validação:** Aprovada pelo usuário em 2026-11-01 (lote piloto do M09); sem revisão por terceiros; ressalvas: item 9.1, NIST SP 800-61 Rev. 2 × Rev. 3, ATT&CK 14 × 15 táticas e fórmulas SLE/ARO/ALE de memória.

---

## Questão 2 — AUT-000082

**AUT-000082** · Operação de segurança: backup completo e diferencial · item 9.2 · Média · Resolução de problemas

*Questão autoral — estilo Cesgranrio.*

A política de backup de um servidor prevê um backup completo aos domingos e backups diferenciais de segunda-feira a sábado, sempre ao fim do dia. Na quinta-feira, antes do backup do dia, ocorre uma falha de disco, e é preciso restaurar o servidor ao estado do fim de quarta-feira.  
  
Para a restauração, são necessários

(A) 1 conjunto de backup, o completo de domingo.  
(B) 3 conjuntos de backup: o completo de domingo e os diferenciais de segunda e de terça-feira.  
(C) 4 conjuntos de backup: o completo de domingo e os diferenciais de segunda, terça e quarta-feira.  
(D) 2 conjuntos de backup: o completo de domingo e o diferencial de quarta-feira.  
(E) 5 conjuntos de backup: o completo e todos os diferenciais da semana, inclusive o de quinta-feira.  

### A. Gabarito

**D**

### B. Resolução comentada

O backup **diferencial** copia tudo o que mudou **desde o último backup completo**; portanto, o diferencial de quarta-feira contém todas as alterações de segunda a quarta. A restauração exige o **completo (domingo)** e **apenas o último diferencial (quarta-feira)**: **2 conjuntos**. (Com backups **incrementais**, seriam necessários o completo e os incrementais de segunda, terça e quarta: 4 conjuntos.)

### C. Análise das alternativas

- **(A)** Incorreta. Só o completo restauraria o estado de domingo, perdendo as alterações de segunda a quarta.
- **(B)** Incorreta. Falta o diferencial de quarta-feira, o mais recente, e o de segunda é desnecessário (o de quarta já o contém).
- **(C)** Incorreta. Descreve a restauração com backups incrementais; com diferenciais, basta o último.
- **(D)** Correta. Completo de domingo + diferencial de quarta-feira.
- **(E)** Incorreta. O diferencial de quinta-feira não existe (a falha ocorreu antes do backup do dia) e os anteriores não são necessários.

### D. Fundamentação teórica

- **Módulo:** M09 — Segurança da informação
- **Assunto:** Operação de segurança: backup (tipos e restauração)
- **Item do edital:** 9.2 (E5-083)
- **Arquivo de teoria:** `conteudo/09-seguranca-informacao/14-operacao-de-seguranca.md`
- **Referência:** Material teórico do projeto; fontes conferidas na revisão do M09 (OWASP, NIST SP 800-61 Rev. 2 e 800-63B, RFCs, STRIDE, CTI, backup e CVSS); demais conteúdos de memória. Wikipedia, "Backup" (completo, incremental e diferencial, verificado em 2026-10-31).

### E. Ponto de atenção para a prova

**Diferencial** = desde o último **completo** → restaura com **completo + último diferencial**. **Incremental** = desde o último backup de **qualquer** tipo → **completo + todos os incrementais** até o ponto.

### F. Revisão rápida

Restauração: diferencial = 2 conjuntos; incremental = completo + todos os incrementais. Regra 3-2-1; testar restaurações.

### G. Tags

`m09` · `backup` · `diferencial` · `incremental` · `item-9.2` · `media` · `resolucao-de-problemas` · `calculo` · `autoral`

**Verificação do gabarito:** Contagem conferida: diferencial = 2 conjuntos; incremental = 4 (script).  
**Status de validação:** `validada`  
**Validação:** Aprovada pelo usuário em 2026-11-01 (lote piloto do M09); sem revisão por terceiros; ressalvas: item 9.1, NIST SP 800-61 Rev. 2 × Rev. 3, ATT&CK 14 × 15 táticas e fórmulas SLE/ARO/ALE de memória.

---

## Questão 3 — AUT-000083

**AUT-000083** · Softwares maliciosos: classificação pelo comportamento · item 9.3 · Fácil · Aplicação

*Questão autoral — estilo Cesgranrio.*

Uma equipe de resposta a incidentes observa três comportamentos em diferentes máquinas:  
  
I – um código criptografa os arquivos do usuário e exibe uma mensagem exigindo pagamento para devolver o acesso;  
II – um código se propaga sozinho pela rede, explorando uma vulnerabilidade, sem depender de um arquivo hospedeiro nem de ação do usuário;  
III – um programa se apresenta como um utilitário legítimo, mas, ao ser executado, instala um acesso remoto oculto.  
  
Os comportamentos I, II e III correspondem, respectivamente, a

(A) ransomware, worm e cavalo de troia (trojan).  
(B) worm, ransomware e cavalo de troia (trojan).  
(C) ransomware, vírus e worm.  
(D) spyware, worm e rootkit.  
(E) cavalo de troia (trojan), ransomware e vírus.  

### A. Gabarito

**A**

### B. Resolução comentada

**Ransomware** sequestra dados (criptografa ou bloqueia) e exige resgate (I). **Worm** propaga-se sozinho pela rede, sem hospedeiro e sem ação do usuário (II). **Cavalo de troia (*trojan*)** disfarça-se de programa legítimo e executa ação maliciosa, como abrir um acesso remoto (*backdoor*) (III).

### C. Análise das alternativas

- **(A)** Correta. I: ransomware; II: worm; III: trojan.
- **(B)** Incorreta. A criptografia com pedido de resgate é ransomware (I), e a propagação autônoma pela rede é worm (II); a alternativa os troca.
- **(C)** Incorreta. Vírus depende de hospedeiro e de execução; o comportamento II é de worm, e o III, de trojan.
- **(D)** Incorreta. Spyware coleta informações; o comportamento I é de ransomware. Rootkit oculta presença do invasor, e não se apresenta como utilitário legítimo.
- **(E)** Incorreta. O comportamento I é de ransomware, e não de trojan; o II é de worm, e não de vírus, que depende de hospedeiro.

### D. Fundamentação teórica

- **Módulo:** M09 — Segurança da informação
- **Assunto:** Softwares maliciosos: ransomware, worm e cavalo de troia
- **Item do edital:** 9.3 (E5-084)
- **Arquivo de teoria:** `conteudo/09-seguranca-informacao/03-ameacas-e-malwares.md`
- **Referência:** Material teórico do projeto; fontes conferidas na revisão do M09 (OWASP, NIST SP 800-61 Rev. 2 e 800-63B, RFCs, STRIDE, CTI, backup e CVSS); demais conteúdos de memória. Definição de ransomware conferida no CERT.br; demais definições de memória.

### E. Ponto de atenção para a prova

**Worm**: se propaga **sozinho**, sem hospedeiro. **Vírus**: precisa de **hospedeiro**/execução. **Trojan**: **disfarçado** de legítimo. **Ransomware**: **sequestra** dados e exige resgate.

### F. Revisão rápida

Vírus: hospedeiro. Worm: autônomo pela rede. Trojan: disfarce. Ransomware: resgate. Spyware: coleta. Rootkit: oculta o invasor.

### G. Tags

`m09` · `malware` · `ransomware` · `worm` · `trojan` · `item-9.3` · `facil` · `aplicacao` · `cenario` · `autoral`

**Verificação do gabarito:** Sem execução (questão conceitual); gabarito conferido contra o arquivo de teoria (validado).  
**Status de validação:** `validada`  
**Validação:** Aprovada pelo usuário em 2026-11-01 (lote piloto do M09); sem revisão por terceiros; ressalvas: item 9.1, NIST SP 800-61 Rev. 2 × Rev. 3, ATT&CK 14 × 15 táticas e fórmulas SLE/ARO/ALE de memória.

---

## Questão 4 — AUT-000084

**AUT-000084** · Autenticação multifator (MFA): fatores de autenticação · item 9.9 · Média · Análise

*Questão autoral — estilo Cesgranrio.*

Uma empresa avalia propostas para ativar a autenticação multifator (MFA) em seu portal. Segundo as categorias de fatores de autenticação (algo que o usuário sabe, algo que possui e algo que é), qual das combinações a seguir constitui, de fato, autenticação multifator?

(A) Senha e PIN, ambos memorizados pelo usuário e digitados em telas diferentes.  
(B) Duas senhas distintas, ambas definidas e conhecidas pelo próprio usuário do portal.  
(C) Impressão digital reconhecida isoladamente, como único mecanismo de verificação.  
(D) Código recebido por e-mail e código recebido por SMS, ambos enviados no mesmo momento.  
(E) Senha memorizada e código gerado por aplicativo autenticador instalado no celular do usuário.  

### A. Gabarito

**E**

### B. Resolução comentada

A **MFA** exige **dois ou mais fatores de categorias diferentes**: **conhecimento** (senha, PIN), **posse** (token, celular com aplicativo, cartão, chave de segurança) e **inerência** (biometria). A combinação **senha + código gerado por aplicativo no celular** reúne **conhecimento** e **posse**. Dois fatores da mesma categoria não são MFA.

### C. Análise das alternativas

- **(A)** Incorreta. Senha e PIN são ambos fatores de conhecimento: mesma categoria.
- **(B)** Incorreta. Duas senhas são dois fatores de conhecimento; não há segundo fator de outra categoria.
- **(C)** Incorreta. É um único fator (inerência); a biometria, segundo o NIST, também não é reconhecida isoladamente como autenticador.
- **(D)** Incorreta. Os dois códigos são fatores de posse (dispositivo/conta que os recebe): mesma categoria. Além disso, e-mail e SMS são canais considerados frágeis.
- **(E)** Correta. Conhecimento (senha) + posse (aplicativo no celular).

### D. Fundamentação teórica

- **Módulo:** M09 — Segurança da informação
- **Assunto:** MFA: fatores de autenticação
- **Item do edital:** 9.9 (E5-090)
- **Arquivo de teoria:** `conteudo/09-seguranca-informacao/05-vpn-mdm-sso-mfa-iam.md`
- **Referência:** Material teórico do projeto; fontes conferidas na revisão do M09 (OWASP, NIST SP 800-61 Rev. 2 e 800-63B, RFCs, STRIDE, CTI, backup e CVSS); demais conteúdos de memória. NIST SP 800-63B rev. 4 (fatores; verificado em 2026-10-31).

### E. Ponto de atenção para a prova

MFA = **categorias diferentes**: conhecimento, posse, inerência. **Duas senhas/PINs não são MFA.** Biometria isolada é um único fator.

### F. Revisão rápida

MFA: ≥ 2 fatores de categorias distintas (sabe, possui, é).

### G. Tags

`m09` · `mfa` · `fatores-de-autenticacao` · `item-9.9` · `media` · `analise` · `cenario` · `autoral`

**Verificação do gabarito:** Sem execução (questão conceitual); gabarito conferido contra o arquivo de teoria (validado).  
**Status de validação:** `validada`  
**Validação:** Aprovada pelo usuário em 2026-11-01 (lote piloto do M09); sem revisão por terceiros; ressalvas: item 9.1, NIST SP 800-61 Rev. 2 × Rev. 3, ATT&CK 14 × 15 táticas e fórmulas SLE/ARO/ALE de memória.

---

## Questão 5 — AUT-000085

**AUT-000085** · Inteligência de ameaças: IoC, TTP e níveis · item 9.12 · Média · Compreensão

*Questão autoral — estilo Cesgranrio.*

Uma equipe de segurança recebe três itens de inteligência de ameaças:  
  
I – o hash SHA-256 de um arquivo malicioso e o endereço IP de um servidor de comando e controle;  
II – a descrição de que um grupo costuma executar cargas por PowerShell e manter persistência por tarefas agendadas;  
III – um relatório para o conselho sobre as motivações e as tendências dos grupos que atacam o setor de energia.  
  
Os itens I, II e III correspondem, respectivamente, a

(A) TTP, indicador de comprometimento (IoC) e inteligência técnica.  
(B) inteligência estratégica, TTP e indicador de comprometimento (IoC).  
(C) indicador de comprometimento (IoC), TTP e inteligência estratégica.  
(D) indicador de comprometimento (IoC), inteligência estratégica e TTP.  
(E) TTP, inteligência estratégica e indicador de comprometimento (IoC).  

### A. Gabarito

**C**

### B. Resolução comentada

**IoC** (*Indicator of Compromise*) são artefatos técnicos de comprometimento (hashes, IPs, domínios), ligados à inteligência **tática**: item I. **TTP** (táticas, técnicas e procedimentos) descrevem o **comportamento** do atacante, mais duradouro que os IoC e ligado à inteligência **operacional**: item II. A **inteligência estratégica** trata de tendências, motivações e riscos para o negócio, voltada à alta direção: item III.

### C. Análise das alternativas

- **(A)** Incorreta. O hash e o IP são IoC, e não TTP; o comportamento (PowerShell e tarefas agendadas) é TTP.
- **(B)** Incorreta. O hash e o IP não são inteligência estratégica; o relatório ao conselho não é um IoC.
- **(C)** Correta. I: IoC; II: TTP; III: inteligência estratégica.
- **(D)** Incorreta. O comportamento do grupo (II) é TTP, e o relatório ao conselho (III) é inteligência estratégica; a alternativa os troca.
- **(E)** Incorreta. O item I é IoC, e não TTP; o item III é inteligência estratégica, e não IoC.

### D. Fundamentação teórica

- **Módulo:** M09 — Segurança da informação
- **Assunto:** Threat intelligence: IoC, TTP e níveis de inteligência
- **Item do edital:** 9.12 (E5-093)
- **Arquivo de teoria:** `conteudo/09-seguranca-informacao/07-inteligencia-de-ameacas.md`
- **Referência:** Material teórico do projeto; fontes conferidas na revisão do M09 (OWASP, NIST SP 800-61 Rev. 2 e 800-63B, RFCs, STRIDE, CTI, backup e CVSS); demais conteúdos de memória. Wikipedia, "Cyber threat intelligence" (IoC e TTP; três níveis) conferida em 2026-10-31.

### E. Ponto de atenção para a prova

**IoC** = artefato técnico (hash, IP, domínio), **efêmero**. **TTP** = **comportamento** do atacante, **durável**. Níveis: **estratégica** (direção), **operacional** (campanhas, TTPs), **tática** (IoC, detecção).

### F. Revisão rápida

IoC: indicador técnico (tática). TTP: comportamento (operacional). Estratégica: tendências para decisão.

### G. Tags

`m09` · `threat-intelligence` · `ioc` · `ttp` · `item-9.12` · `media` · `compreensao` · `cenario` · `autoral`

**Verificação do gabarito:** Sem execução (questão conceitual); gabarito conferido contra o arquivo de teoria (validado).  
**Status de validação:** `validada`  
**Validação:** Aprovada pelo usuário em 2026-11-01 (lote piloto do M09); sem revisão por terceiros; ressalvas: item 9.1, NIST SP 800-61 Rev. 2 × Rev. 3, ATT&CK 14 × 15 táticas e fórmulas SLE/ARO/ALE de memória.

---

## Questão 6 — AUT-000086

**AUT-000086** · Resposta a incidentes: fases do ciclo (NIST SP 800-61 Rev. 2) · item 9.11 · Fácil · Aplicação

*Questão autoral — estilo Cesgranrio.*

Após detectar um servidor infectado por código malicioso, a equipe de resposta a incidentes isola o servidor da rede, remove o código malicioso, redefine as credenciais comprometidas e restaura o serviço a partir de um backup íntegro.  
  
No ciclo de vida da resposta a incidentes do NIST SP 800-61 (Rev. 2), essas atividades pertencem à fase de

(A) preparação.  
(B) detecção e análise.  
(C) atividade pós-incidente.  
(D) contenção, erradicação e recuperação.  
(E) preparação e detecção, em conjunto.  

### A. Gabarito

**D**

### B. Resolução comentada

O ciclo da Rev. 2 tem **quatro fases**: **preparação**; **detecção e análise**; **contenção, erradicação e recuperação**; e **atividade pós-incidente** (lições aprendidas). Isolar o servidor é **contenção**; remover o código malicioso e redefinir credenciais é **erradicação**; restaurar o serviço é **recuperação**. As três fazem parte da mesma fase.

### C. Análise das alternativas

- **(A)** Incorreta. A preparação ocorre antes do incidente (política, equipe, ferramentas, prevenção).
- **(B)** Incorreta. A detecção e análise identifica, valida e prioriza o incidente, o que já ocorreu no enunciado.
- **(C)** Incorreta. A atividade pós-incidente trata de lições aprendidas e melhoria, e vem depois da recuperação.
- **(D)** Correta. Isolamento (contenção), remoção e troca de credenciais (erradicação) e restauração (recuperação).
- **(E)** Incorreta. Essas duas fases antecedem a resposta ao incidente já detectado.

### D. Fundamentação teórica

- **Módulo:** M09 — Segurança da informação
- **Assunto:** Gerenciamento de resposta a incidentes (NIST SP 800-61)
- **Item do edital:** 9.11 (E5-092)
- **Arquivo de teoria:** `conteudo/09-seguranca-informacao/06-gestao-incidentes.md`
- **Referência:** Material teórico do projeto; fontes conferidas na revisão do M09 (OWASP, NIST SP 800-61 Rev. 2 e 800-63B, RFCs, STRIDE, CTI, backup e CVSS); demais conteúdos de memória. NIST SP 800-61 Rev. 2 (PDF lido em 2026-11-01: quatro fases). A Rev. 3 (2025) substitui a Rev. 2; a escolha da revisão a priorizar ficou com o usuário.

### E. Ponto de atenção para a prova

Rev. 2: **preparação → detecção e análise → contenção, erradicação e recuperação → pós-incidente**. **Contenção** limita; **erradicação** remove a causa; **recuperação** restabelece. O enunciado deve indicar a revisão (Rev. 2 × Rev. 3).

### F. Revisão rápida

NIST 800-61 Rev. 2: 4 fases. Contenção, erradicação e recuperação formam uma só fase.

### G. Tags

`m09` · `resposta-a-incidentes` · `nist-800-61` · `item-9.11` · `facil` · `aplicacao` · `cenario` · `autoral`

**Verificação do gabarito:** Sem execução (questão conceitual); gabarito conferido contra o arquivo de teoria (validado).  
**Status de validação:** `validada`  
**Validação:** Aprovada pelo usuário em 2026-11-01 (lote piloto do M09); sem revisão por terceiros; ressalvas: item 9.1, NIST SP 800-61 Rev. 2 × Rev. 3, ATT&CK 14 × 15 táticas e fórmulas SLE/ARO/ALE de memória.

---

## Questão 7 — AUT-000087

**AUT-000087** · Modelagem de ameaças: categorias do STRIDE · item 9.14 · Difícil · Análise

*Questão autoral — estilo Cesgranrio.*

Na modelagem de ameaças de um sistema de transferências, a equipe identifica as situações a seguir:  
  
I – um usuário nega ter aprovado uma operação, e o sistema não possui registros que comprovem a autoria;  
II – um atacante altera o valor de uma transferência enquanto os dados trafegam entre o aplicativo e o servidor;  
III – um atacante usa credenciais roubadas para se passar por outro usuário.  
  
Na classificação STRIDE, as situações I, II e III correspondem, respectivamente, às ameaças de

(A) repúdio, adulteração e falsificação de identidade.  
(B) adulteração, repúdio e divulgação de informações.  
(C) falsificação de identidade, adulteração e repúdio.  
(D) repúdio, divulgação de informações e elevação de privilégio.  
(E) negação de serviço, adulteração e falsificação de identidade.  

### A. Gabarito

**A**

### B. Resolução comentada

**STRIDE**: *Spoofing* (falsificação de identidade, viola a **autenticidade**), *Tampering* (adulteração, viola a **integridade**), *Repudiation* (repúdio, viola o **não repúdio**), *Information disclosure* (divulgação de informações, **confidencialidade**), *Denial of service* (negação de serviço, **disponibilidade**) e *Elevation of privilege* (elevação de privilégio, **autorização**). I: **repúdio**; II: **adulteração**; III: **falsificação de identidade**.

### C. Análise das alternativas

- **(A)** Correta. I: repúdio; II: adulteração; III: falsificação de identidade.
- **(B)** Incorreta. Troca I e II (adulteração × repúdio) e classifica III como divulgação de informações, quando o uso de credenciais alheias é falsificação de identidade.
- **(C)** Incorreta. Inverte I e III: a negação de autoria sem registros é repúdio, e o uso de credenciais roubadas é falsificação de identidade.
- **(D)** Incorreta. II é adulteração (e não divulgação de informações), e III não é elevação de privilégio: o atacante assume a identidade de outro usuário.
- **(E)** Incorreta. I não é negação de serviço (que afeta a disponibilidade); a situação trata de repúdio.

### D. Fundamentação teórica

- **Módulo:** M09 — Segurança da informação
- **Assunto:** Modelagem de ameaças: STRIDE
- **Item do edital:** 9.14 (E5-095)
- **Arquivo de teoria:** `conteudo/09-seguranca-informacao/08-pentest-stride-mitre.md`
- **Referência:** Material teórico do projeto; fontes conferidas na revisão do M09 (OWASP, NIST SP 800-61 Rev. 2 e 800-63B, RFCs, STRIDE, CTI, backup e CVSS); demais conteúdos de memória. STRIDE (seis categorias e propriedades) conferido em Wikipedia (verificado em 2026-10-31).

### E. Ponto de atenção para a prova

STRIDE e a **propriedade violada**: S–autenticidade; T–integridade; R–não repúdio; I–confidencialidade; D–disponibilidade; E–autorização. **Usar credenciais alheias** = **S** (assumir identidade); **E** = ganhar mais **privilégio** com a própria identidade.

### F. Revisão rápida

S: falsificar identidade. T: adulterar. R: negar autoria. I: divulgar. D: negar serviço. E: elevar privilégio.

### G. Tags

`m09` · `modelagem-de-ameacas` · `stride` · `item-9.14` · `dificil` · `analise` · `cenario` · `autoral`

**Verificação do gabarito:** Sem execução (questão conceitual); gabarito conferido contra o arquivo de teoria (validado).  
**Status de validação:** `validada`  
**Validação:** Aprovada pelo usuário em 2026-11-01 (lote piloto do M09); sem revisão por terceiros; ressalvas: item 9.1, NIST SP 800-61 Rev. 2 × Rev. 3, ATT&CK 14 × 15 táticas e fórmulas SLE/ARO/ALE de memória.

---

## Questão 8 — AUT-000088

**AUT-000088** · Gestão de riscos: perda esperada anual (SLE e ALE) · item 9.16 · Difícil · Resolução de problemas

*Questão autoral — estilo Cesgranrio.*

Um ativo de informação vale R$ 800.000. Estima-se que um incidente cause a perda de 25% desse valor (fator de exposição) e que ocorra, em média, 0,5 vez por ano. Um controle que custa R$ 40.000 por ano reduz a frequência esperada do incidente para 0,1 vez por ano, sem alterar o impacto.  
  
Com base na perda esperada anual (ALE = SLE × ARO), o benefício líquido anual do controle, isto é, a redução da perda esperada menos o custo do controle, é de

(A) R$ 80.000.  
(B) R$ 60.000.  
(C) R$ 40.000.  
(D) R$ 100.000.  
(E) R$ 20.000.  

### A. Gabarito

**C**

### B. Resolução comentada

**SLE** (perda por evento) = valor do ativo × fator de exposição = 800.000 × 0,25 = **R$ 200.000**. **ALE antes** = SLE × ARO = 200.000 × 0,5 = **R$ 100.000**. **ALE depois** = 200.000 × 0,1 = **R$ 20.000**. Redução da perda esperada = 100.000 − 20.000 = **R$ 80.000**. Benefício líquido = 80.000 − 40.000 = **R$ 40.000**.

### C. Análise das alternativas

- **(A)** Incorreta. R$ 80.000 é a redução da perda esperada, sem subtrair o custo do controle.
- **(B)** Incorreta. Não decorre dos dados; poderia resultar de erro na aplicação da fórmula (por exemplo, usar ARO de 0,2 em vez de 0,1).
- **(C)** Correta. 80.000 − 40.000 = 40.000.
- **(D)** Incorreta. R$ 100.000 é a perda esperada anual **antes** do controle (ALE inicial).
- **(E)** Incorreta. R$ 20.000 é a perda esperada anual **depois** do controle (ALE residual).

### D. Fundamentação teórica

- **Módulo:** M09 — Segurança da informação
- **Assunto:** Gestão de riscos: análise quantitativa (SLE, ARO e ALE)
- **Item do edital:** 9.16 (E5-097)
- **Arquivo de teoria:** `conteudo/09-seguranca-informacao/09-gestao-riscos-e-continuidade.md`
- **Referência:** Material teórico do projeto; fontes conferidas na revisão do M09 (OWASP, NIST SP 800-61 Rev. 2 e 800-63B, RFCs, STRIDE, CTI, backup e CVSS); demais conteúdos de memória. Fórmulas SLE/ARO/ALE de memória (não verificadas em fonte primária); ISO 31000 não lida (iso.org bloqueado).

### E. Ponto de atenção para a prova

**SLE = valor × fator de exposição**; **ALE = SLE × ARO**. Benefício do controle = **ALE antes − ALE depois − custo**. Atenção ao que a pergunta pede (redução bruta × líquida).

### F. Revisão rápida

SLE: perda por evento. ARO: ocorrências por ano. ALE = SLE × ARO. Vale a pena se (ALE antes − ALE depois) > custo.

### G. Tags

`m09` · `gestao-de-riscos` · `ale` · `sle` · `aro` · `item-9.16` · `dificil` · `resolucao-de-problemas` · `calculo` · `autoral`

**Verificação do gabarito:** Cálculo conferido em Python: SLE = 200.000; ALE antes = 100.000; ALE depois = 20.000; redução = 80.000; ganho líquido = 40.000.  
**Status de validação:** `validada`  
**Validação:** Aprovada pelo usuário em 2026-11-01 (lote piloto do M09); sem revisão por terceiros; ressalvas: item 9.1, NIST SP 800-61 Rev. 2 × Rev. 3, ATT&CK 14 × 15 táticas e fórmulas SLE/ARO/ALE de memória.

---

## Questão 9 — AUT-000089

**AUT-000089** · Assinatura digital: propriedades garantidas · item 9.19 · Média · Análise

*Questão autoral — estilo Cesgranrio.*

Alice gera o resumo (hash) de um contrato, assina esse resumo com sua chave privada e envia o contrato, em texto claro, junto com a assinatura e seu certificado digital a Bob. Bob verifica a assinatura com a chave pública de Alice contida no certificado.  
  
As garantias oferecidas por esse procedimento são

(A) confidencialidade, integridade e autenticidade, mas não o não repúdio.  
(B) apenas confidencialidade, pois o contrato é protegido pela chave privada de Alice.  
(C) disponibilidade e integridade, pois a assinatura garante que o contrato sempre estará acessível.  
(D) confidencialidade e não repúdio, mas não a integridade, pois o contrato segue em texto claro.  
(E) integridade, autenticidade e não repúdio, mas não confidencialidade, pois o contrato segue em texto claro.  

### A. Gabarito

**E**

### B. Resolução comentada

Na **assinatura digital**, o resumo do documento é assinado com a **chave privada** do signatário e verificado com a **chave pública**. Qualquer alteração muda o resumo: **integridade**. Só quem possui a chave privada poderia assinar: **autenticidade**; e o signatário não pode negar a autoria (desde que a chave seja de seu uso exclusivo e haja certificado): **não repúdio**. O documento segue em texto claro, e portanto **não há confidencialidade**; para ela, usa-se criptografia (por exemplo, o envelope digital).

### C. Análise das alternativas

- **(A)** Incorreta. A assinatura não fornece confidencialidade (o contrato está em texto claro) e fornece não repúdio.
- **(B)** Incorreta. A chave privada de Alice não protege o conteúdo do contrato, que é enviado em texto claro.
- **(C)** Incorreta. A assinatura não garante disponibilidade; garante integridade, autenticidade e não repúdio.
- **(D)** Incorreta. A assinatura garante a integridade, e o texto claro implica ausência de confidencialidade.
- **(E)** Correta. Integridade, autenticidade e não repúdio, sem confidencialidade.

### D. Fundamentação teórica

- **Módulo:** M09 — Segurança da informação
- **Assunto:** Criptografia, certificação digital e assinatura digital
- **Item do edital:** 9.19 (E5-100)
- **Arquivo de teoria:** `conteudo/09-seguranca-informacao/12-criptografia-e-certificados.md`
- **Referência:** Material teórico do projeto; fontes conferidas na revisão do M09 (OWASP, NIST SP 800-61 Rev. 2 e 800-63B, RFCs, STRIDE, CTI, backup e CVSS); demais conteúdos de memória. Processo geral da assinatura digital conferido em Wikipedia, "Digital signature"; certificado X.509 (RFC 5280) verificado em 2026-10-31.

### E. Ponto de atenção para a prova

**Assinatura digital** = **integridade + autenticidade + não repúdio**; **não** dá **confidencialidade** (isso é cifrar). Envelope digital: chave simétrica protegida com a chave **pública** do destinatário.

### F. Revisão rápida

Assinatura: hash assinado com a chave privada, verificado com a pública. Sem sigilo do conteúdo.

### G. Tags

`m09` · `assinatura-digital` · `criptografia` · `nao-repudio` · `item-9.19` · `media` · `analise` · `cenario` · `autoral`

**Verificação do gabarito:** Sem execução (questão conceitual); gabarito conferido contra o arquivo de teoria (validado).  
**Status de validação:** `validada`  
**Validação:** Aprovada pelo usuário em 2026-11-01 (lote piloto do M09); sem revisão por terceiros; ressalvas: item 9.1, NIST SP 800-61 Rev. 2 × Rev. 3, ATT&CK 14 × 15 táticas e fórmulas SLE/ARO/ALE de memória.

---

## Questão 10 — AUT-000090

**AUT-000090** · Segurança em nuvem: responsabilidade compartilhada · item 9.20 · Fácil · Compreensão

*Questão autoral — estilo Cesgranrio.*

Uma empresa contrata uma ferramenta de gestão em modelo SaaS (software como serviço). Pelo modelo de responsabilidade compartilhada da computação em nuvem, a responsabilidade que permanece sempre com o cliente, mesmo nesse modelo, é a de proteger

(A) a segurança física dos datacenters em que a ferramenta é executada.  
(B) seus dados, as identidades dos usuários e as configurações de acesso à ferramenta.  
(C) o sistema operacional dos servidores que hospedam a ferramenta contratada.  
(D) a camada de virtualização e os servidores usados pelo provedor para executá-la.  
(E) a rede física e os equipamentos de conectividade do provedor da ferramenta.  

### A. Gabarito

**B**

### B. Resolução comentada

No **modelo de responsabilidade compartilhada**, o provedor é responsável pela segurança **da** nuvem (instalações físicas, hosts, rede e, no SaaS, a maior parte da pilha), e o cliente, pela segurança **na** nuvem. **Dados, identidades e configurações** permanecem **sempre** com o cliente, em IaaS, PaaS e SaaS.

### C. Análise das alternativas

- **(A)** Incorreta. A segurança física dos datacenters é do provedor em todos os modelos.
- **(B)** Correta. Dados, identidades e configurações de acesso são sempre do cliente.
- **(C)** Incorreta. No SaaS, o sistema operacional é gerenciado pelo provedor.
- **(D)** Incorreta. A virtualização e os servidores são responsabilidade do provedor.
- **(E)** Incorreta. A rede física e os equipamentos de conectividade do provedor são do provedor.

### D. Fundamentação teórica

- **Módulo:** M09 — Segurança da informação
- **Assunto:** Segurança em nuvem: responsabilidade compartilhada
- **Item do edital:** 9.20 (E5-101)
- **Arquivo de teoria:** `conteudo/09-seguranca-informacao/13-seguranca-cloud-e-iot.md`
- **Referência:** Material teórico do projeto; fontes conferidas na revisão do M09 (OWASP, NIST SP 800-61 Rev. 2 e 800-63B, RFCs, STRIDE, CTI, backup e CVSS); demais conteúdos de memória. AWS (segurança "da" e "na" nuvem) e Microsoft Learn (matriz IaaS/PaaS/SaaS) conferidas em 2026-11-01.

### E. Ponto de atenção para a prova

Segurança **da** nuvem = provedor; **na** nuvem = cliente. Em **qualquer** modelo (IaaS, PaaS, SaaS), o cliente mantém **dados, identidades e configuração**.

### F. Revisão rápida

Dados, identidades e configuração: sempre do cliente. Instalações físicas, hosts e rede do provedor: do provedor. SO: cliente em IaaS; provedor em PaaS e SaaS.

### G. Tags

`m09` · `nuvem` · `responsabilidade-compartilhada` · `saas` · `item-9.20` · `facil` · `compreensao` · `cenario` · `autoral`

**Verificação do gabarito:** Sem execução (questão conceitual); gabarito conferido contra o arquivo de teoria (validado).  
**Status de validação:** `validada`  
**Validação:** Aprovada pelo usuário em 2026-11-01 (lote piloto do M09); sem revisão por terceiros; ressalvas: item 9.1, NIST SP 800-61 Rev. 2 × Rev. 3, ATT&CK 14 × 15 táticas e fórmulas SLE/ARO/ALE de memória.

---

