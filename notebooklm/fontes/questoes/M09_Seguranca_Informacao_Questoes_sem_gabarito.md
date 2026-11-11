# Questões — Módulo M09: Segurança da Informação (sem gabarito)

## Identificação
- Concurso: Processo Seletivo Público TRANSPETRO 2026.4 (Edital nº 04/2026)
- Ênfase: 5 — Análise de Sistemas: Processos de Negócios
- Banca: Fundação Cesgranrio
- Módulo: M09 — Segurança da Informação
- Total: 58 questões; status `validada` ou `em_revisao` (indicado em cada questão)
- Gerado em 2026-11-11 por `tools/build_notebooklm.py` a partir de `banco-questoes/`


### AUT-000081 — item 9.4 — dificuldade media
*Questão autoral — estilo Cesgranrio (criada pelo projeto; não é questão aplicada pela banca) · status: validada*

Um desenvolvedor escreveu o trecho a seguir, em Python, para autenticar um usuário a partir do campo de login do formulário.

```python
nome = request.args["nome"]
sql = "SELECT * FROM usuarios WHERE login = '" + nome + "'"
cursor.execute(sql)
```

Um teste de segurança envia, no campo, o valor ' OR '1'='1 e recebe todos os registros da tabela.

A medida principal para eliminar essa vulnerabilidade é

A) remover da entrada apenas a palavra OR antes de montar a consulta SQL.
B) usar consulta parametrizada, passando o valor de nome como parâmetro, e não por concatenação de texto.
C) limitar o tamanho do campo de login a 20 caracteres, pois a entrada maliciosa é longa.
D) trafegar a requisição por HTTPS, pois a criptografia do canal impede a alteração da consulta.
E) conceder ao usuário do banco de dados privilégios de administrador, para que a consulta nunca falhe.

### AUT-000082 — item 9.2 — dificuldade media
*Questão autoral — estilo Cesgranrio (criada pelo projeto; não é questão aplicada pela banca) · status: validada*

A política de backup de um servidor prevê um backup completo aos domingos e backups diferenciais de segunda-feira a sábado, sempre ao fim do dia. Na quinta-feira, antes do backup do dia, ocorre uma falha de disco, e é preciso restaurar o servidor ao estado do fim de quarta-feira.

Para a restauração, são necessários

A) 1 conjunto de backup, o completo de domingo.
B) 3 conjuntos de backup: o completo de domingo e os diferenciais de segunda e de terça-feira.
C) 4 conjuntos de backup: o completo de domingo e os diferenciais de segunda, terça e quarta-feira.
D) 2 conjuntos de backup: o completo de domingo e o diferencial de quarta-feira.
E) 5 conjuntos de backup: o completo e todos os diferenciais da semana, inclusive o de quinta-feira.

### AUT-000083 — item 9.3 — dificuldade facil
*Questão autoral — estilo Cesgranrio (criada pelo projeto; não é questão aplicada pela banca) · status: validada*

Uma equipe de resposta a incidentes observa três comportamentos em diferentes máquinas:

I – um código criptografa os arquivos do usuário e exibe uma mensagem exigindo pagamento para devolver o acesso;
II – um código se propaga sozinho pela rede, explorando uma vulnerabilidade, sem depender de um arquivo hospedeiro nem de ação do usuário;
III – um programa se apresenta como um utilitário legítimo, mas, ao ser executado, instala um acesso remoto oculto.

Os comportamentos I, II e III correspondem, respectivamente, a

A) ransomware, worm e cavalo de troia (trojan).
B) worm, ransomware e cavalo de troia (trojan).
C) ransomware, vírus e worm.
D) spyware, worm e rootkit.
E) cavalo de troia (trojan), ransomware e vírus.

### AUT-000084 — item 9.9 — dificuldade media
*Questão autoral — estilo Cesgranrio (criada pelo projeto; não é questão aplicada pela banca) · status: validada*

Uma empresa avalia propostas para ativar a autenticação multifator (MFA) em seu portal. Segundo as categorias de fatores de autenticação (algo que o usuário sabe, algo que possui e algo que é), qual das combinações a seguir constitui, de fato, autenticação multifator?

A) Senha e PIN, ambos memorizados pelo usuário e digitados em telas diferentes.
B) Duas senhas distintas, ambas definidas e conhecidas pelo próprio usuário do portal.
C) Impressão digital reconhecida isoladamente, como único mecanismo de verificação.
D) Código recebido por e-mail e código recebido por SMS, ambos enviados no mesmo momento.
E) Senha memorizada e código gerado por aplicativo autenticador instalado no celular do usuário.

### AUT-000085 — item 9.12 — dificuldade media
*Questão autoral — estilo Cesgranrio (criada pelo projeto; não é questão aplicada pela banca) · status: validada*

Uma equipe de segurança recebe três itens de inteligência de ameaças:

I – o hash SHA-256 de um arquivo malicioso e o endereço IP de um servidor de comando e controle;
II – a descrição de que um grupo costuma executar cargas por PowerShell e manter persistência por tarefas agendadas;
III – um relatório para o conselho sobre as motivações e as tendências dos grupos que atacam o setor de energia.

Os itens I, II e III correspondem, respectivamente, a

A) TTP, indicador de comprometimento (IoC) e inteligência técnica.
B) inteligência estratégica, TTP e indicador de comprometimento (IoC).
C) indicador de comprometimento (IoC), TTP e inteligência estratégica.
D) indicador de comprometimento (IoC), inteligência estratégica e TTP.
E) TTP, inteligência estratégica e indicador de comprometimento (IoC).

### AUT-000086 — item 9.11 — dificuldade facil
*Questão autoral — estilo Cesgranrio (criada pelo projeto; não é questão aplicada pela banca) · status: validada*

Após detectar um servidor infectado por código malicioso, a equipe de resposta a incidentes isola o servidor da rede, remove o código malicioso, redefine as credenciais comprometidas e restaura o serviço a partir de um backup íntegro.

No ciclo de vida da resposta a incidentes do NIST SP 800-61 (Rev. 2), essas atividades pertencem à fase de

A) preparação.
B) detecção e análise.
C) atividade pós-incidente.
D) contenção, erradicação e recuperação.
E) preparação e detecção, em conjunto.

### AUT-000087 — item 9.14 — dificuldade dificil
*Questão autoral — estilo Cesgranrio (criada pelo projeto; não é questão aplicada pela banca) · status: validada*

Na modelagem de ameaças de um sistema de transferências, a equipe identifica as situações a seguir:

I – um usuário nega ter aprovado uma operação, e o sistema não possui registros que comprovem a autoria;
II – um atacante altera o valor de uma transferência enquanto os dados trafegam entre o aplicativo e o servidor;
III – um atacante usa credenciais roubadas para se passar por outro usuário.

Na classificação STRIDE, as situações I, II e III correspondem, respectivamente, às ameaças de

A) repúdio, adulteração e falsificação de identidade.
B) adulteração, repúdio e divulgação de informações.
C) falsificação de identidade, adulteração e repúdio.
D) repúdio, divulgação de informações e elevação de privilégio.
E) negação de serviço, adulteração e falsificação de identidade.

### AUT-000088 — item 9.16 — dificuldade dificil
*Questão autoral — estilo Cesgranrio (criada pelo projeto; não é questão aplicada pela banca) · status: validada*

Um ativo de informação vale R$ 800.000. Estima-se que um incidente cause a perda de 25% desse valor (fator de exposição) e que ocorra, em média, 0,5 vez por ano. Um controle que custa R$ 40.000 por ano reduz a frequência esperada do incidente para 0,1 vez por ano, sem alterar o impacto.

Com base na perda esperada anual (ALE = SLE × ARO), o benefício líquido anual do controle, isto é, a redução da perda esperada menos o custo do controle, é de

A) R$ 80.000.
B) R$ 60.000.
C) R$ 40.000.
D) R$ 100.000.
E) R$ 20.000.

### AUT-000089 — item 9.19 — dificuldade media
*Questão autoral — estilo Cesgranrio (criada pelo projeto; não é questão aplicada pela banca) · status: validada*

Alice gera o resumo (hash) de um contrato, assina esse resumo com sua chave privada e envia o contrato, em texto claro, junto com a assinatura e seu certificado digital a Bob. Bob verifica a assinatura com a chave pública de Alice contida no certificado.

As garantias oferecidas por esse procedimento são

A) confidencialidade, integridade e autenticidade, mas não o não repúdio.
B) apenas confidencialidade, pois o contrato é protegido pela chave privada de Alice.
C) disponibilidade e integridade, pois a assinatura garante que o contrato sempre estará acessível.
D) confidencialidade e não repúdio, mas não a integridade, pois o contrato segue em texto claro.
E) integridade, autenticidade e não repúdio, mas não confidencialidade, pois o contrato segue em texto claro.

### AUT-000090 — item 9.20 — dificuldade facil
*Questão autoral — estilo Cesgranrio (criada pelo projeto; não é questão aplicada pela banca) · status: validada*

Uma empresa contrata uma ferramenta de gestão em modelo SaaS (software como serviço). Pelo modelo de responsabilidade compartilhada da computação em nuvem, a responsabilidade que permanece sempre com o cliente, mesmo nesse modelo, é a de proteger

A) a segurança física dos datacenters em que a ferramenta é executada.
B) seus dados, as identidades dos usuários e as configurações de acesso à ferramenta.
C) o sistema operacional dos servidores que hospedam a ferramenta contratada.
D) a camada de virtualização e os servidores usados pelo provedor para executá-la.
E) a rede física e os equipamentos de conectividade do provedor da ferramenta.

### AUT-000113 — item 9.1 — dificuldade facil
*Questão autoral — estilo Cesgranrio (criada pelo projeto; não é questão aplicada pela banca) · status: em_revisao*

Um relatório de auditoria lista controles de segurança implantados em um data center. O auditor precisa separar os controles lógicos dos controles físicos.

A alternativa que apresenta apenas controles de segurança lógica é

A) cerca perimetral, circuito fechado de TV, vigilantes e controle de acesso à portaria do prédio.
B) sala-cofre, controle de umidade e temperatura, extintores de incêndio e piso elevado da sala de servidores.
C) catraca com crachá, biometria na porta da sala, registro de visitantes e acompanhamento por segurança.
D) autenticação multifator, criptografia de disco e listas de controle de acesso em arquivos.
E) no-break, geradores e sistemas redundantes de refrigeração e de alimentação elétrica do data center.

### AUT-000114 — item 9.6 — dificuldade media
*Questão autoral — estilo Cesgranrio (criada pelo projeto; não é questão aplicada pela banca) · status: em_revisao*

Duas filiais de uma empresa serão conectadas pela Internet por meio de uma VPN IPsec entre os gateways de cada filial.

Sobre essa solução, tem-se que

A) a VPN garante o anonimato total do usuário perante os sites de destino, ocultando por completo a sua identidade e localização.
B) a VPN dispensa o uso de firewall, pois o túnel torna seguro todo o tráfego da rede.
C) no modo transporte do IPsec, o pacote IP original é inteiramente encapsulado em um novo pacote, com novo cabeçalho IP.
D) o ESP não oferece confidencialidade, que é fornecida somente pelo AH.
E) no modo túnel, o pacote IP original é protegido e encapsulado em um novo pacote, típico da ligação entre gateways.

### AUT-000115 — item 9.7 — dificuldade media
*Questão autoral — estilo Cesgranrio (criada pelo projeto; não é questão aplicada pela banca) · status: em_revisao*

Um funcionário que utiliza o smartphone pessoal para acessar o e-mail corporativo (política BYOD) perdeu o aparelho. A empresa adota uma solução de MDM (*Mobile Device Management*).

Um recurso típico dessa solução, aplicável ao caso, é

A) aplicar remotamente políticas de segurança (senha, criptografia) e apagar os dados corporativos do aparelho perdido.
B) bloquear fisicamente o aparelho por meio de um dispositivo de travamento instalado na rede cabeada da empresa.
C) substituir o firewall de borda da empresa, inspecionando todo o tráfego que circula pela rede interna corporativa.
D) recuperar as senhas esquecidas dos usuários de qualquer aplicativo instalado no aparelho, inclusive os de terceiros.
E) garantir que o aparelho nunca seja infectado por malware, independentemente do comportamento do usuário ao instalar aplicativos.

### AUT-000116 — item 9.8 — dificuldade media
*Questão autoral — estilo Cesgranrio (criada pelo projeto; não é questão aplicada pela banca) · status: em_revisao*

Uma organização implantou autenticação única (SSO), de modo que o usuário se autentica uma vez e acessa diversos sistemas corporativos sem informar novamente suas credenciais.

Sobre essa solução, tem-se que

A) o SSO elimina a necessidade de autenticar o usuário, pois a identidade passa a ser presumida em todos os sistemas.
B) o SSO reduz o número de senhas e centraliza o controle de acesso, mas cria um ponto único de comprometimento, reforçado com MFA.
C) o SSO exige que cada sistema mantenha a sua própria base de senhas, replicada manualmente entre as aplicações.
D) o SSO é incompatível com o uso de protocolos padronizados de federação, como SAML e OpenID Connect, usados em ambientes corporativos.
E) o SSO impede o registro de auditoria, porque os acessos deixam de passar por cada sistema.

### AUT-000117 — item 9.13 — dificuldade media
*Questão autoral — estilo Cesgranrio (criada pelo projeto; não é questão aplicada pela banca) · status: em_revisao*

Uma empresa contratou uma consultoria para realizar um teste de penetração em seus sistemas de produção.

Antes de iniciar qualquer atividade técnica, o requisito essencial é

A) executar uma varredura de portas e vulnerabilidades em toda a rede para, só então, definir o escopo do teste.
B) comunicar o teste à equipe de TI somente após a conclusão, para que o ataque seja realista.
C) obter autorização formal por escrito, com escopo, regras de engajamento, janelas de execução e responsáveis.
D) obter as credenciais de administrador de todos os sistemas, pois o teste só é válido com acesso total.
E) aplicar apenas técnicas automatizadas, pois as manuais podem ser interpretadas como ataque real.

### AUT-000118 — item 9.17 — dificuldade media
*Questão autoral — estilo Cesgranrio (criada pelo projeto; não é questão aplicada pela banca) · status: em_revisao*

Uma organização está elaborando sua Política de Segurança da Informação (PSI).

Sobre a PSI, tem-se que ela deve

A) ser um documento técnico, restrito à equipe de TI, que detalha as configurações dos equipamentos e dos sistemas.
B) ser elaborada pelo departamento de TI e implantada sem aprovação da alta direção, para agilizar o processo de implantação.
C) ser definida uma única vez e mantida sem alterações ao longo dos anos, para evitar insegurança jurídica.
D) ser aprovada pela direção, comunicada a todos os envolvidos e apoiada por normas e procedimentos que detalham seu cumprimento.
E) tratar apenas dos usuários internos, uma vez que os terceiros e prestadores de serviço não têm acesso aos ativos.

### AUT-000119 — item 9.18 — dificuldade media
*Questão autoral — estilo Cesgranrio (criada pelo projeto; não é questão aplicada pela banca) · status: em_revisao*

Uma empresa adotou um esquema de classificação das informações com os níveis público, interno, confidencial e restrito.

Sobre o processo de classificação, constata-se que

A) a equipe de TI deve classificar todas as informações da empresa, pois é quem detém e administra os sistemas.
B) toda informação deve receber o nível mais alto, por precaução, a fim de simplificar o tratamento.
C) a classificação é definitiva e não precisa ser reavaliada, ainda que a informação perca a sensibilidade com o passar do tempo.
D) a classificação dispensa rótulos, pois o conhecimento informal dos usuários é suficiente para garantir o tratamento correto em toda a empresa.
E) o proprietário da informação a classifica com base em valor, sensibilidade e requisitos legais, e o tratamento segue o nível atribuído.

### AUT-000120 — item 9.21 — dificuldade media
*Questão autoral — estilo Cesgranrio (criada pelo projeto; não é questão aplicada pela banca) · status: em_revisao*

Uma empresa instalou centenas de câmeras IP conectadas à rede corporativa, mantendo as senhas de fábrica. Pouco tempo depois, parte dos dispositivos passou a integrar uma botnet que gerou ataques de negação de serviço.

Para reduzir esse risco em dispositivos IoT, as medidas mais adequadas são

A) trocar as credenciais padrão, manter o firmware atualizado e segmentar a rede, isolando os dispositivos IoT.
B) manter as credenciais padrão para facilitar o suporte, e confiar no firewall de borda para bloquear qualquer ataque externo.
C) desativar todos os registros (logs) dos dispositivos, para reduzir o consumo de armazenamento.
D) expor as interfaces de administração diretamente à Internet, para permitir o acesso remoto do fabricante.
E) evitar qualquer atualização de firmware, pois novas versões podem alterar o comportamento esperado.

### OFI-000035 — item 9.5 — dificuldade media
*Oficial — Fundação Cesgranrio, Transpetro PSP/Terra 002/2023 (Edital nº 2), Análise de Sistemas — Processos de Negócios, 2023, Prova 6, questão 38 (gabarito: oficial (PDF de gabarito da Cesgranrio, alterado em 9/01/2024), conferido na T13) · status: em_revisao*

As práticas de SDL (Security Development Lifecycle) recomendam ações importantes que devem ser adotadas por projetistas, arquitetos e programadores durante o processo de desenvolvimento de um software. Um teste muito utilizado é a análise em tempo de execução do software totalmente compilado, permitindo a verificação das funcionalidades que podem apenas ser testadas quando todos os componentes estão integrados e em execução.

Esse tipo de teste é conhecido como

A) SAST
B) DAST
C) VAST
D) DREAD
E) STRIDE

### OFI-000036 — item 9.10 — dificuldade media
*Oficial — Fundação Cesgranrio, Transpetro PSP/Terra 002/2023 (Edital nº 2), Análise de Sistemas — Processos de Negócios, 2023, Prova 6, questão 39 (gabarito: oficial (PDF de gabarito da Cesgranrio, alterado em 9/01/2024), conferido na T13) · status: em_revisao*

O controle de acesso é um componente crítico de um IAM (Identity and Access Management), que é projetado para controlar recursos que um usuário está autorizado a acessar. Considere uma organização na qual os administradores devem definir permissões com base em uma combinação de atributos, de modo que um usuário possa ter diferentes níveis de acesso com base em sua localização, no recurso que está sendo acessado, no contexto da requisição de acesso e, em alguns casos, nas condições ambientes em relação a políticas, a regras ou a relacionamentos que descrevem as operações permitidas.
Nesse caso, a organização deve optar por um IAM que use a abordagem

A) ABAC
B) RBAC
C) DAC
D) MAC
E) ACL

### OFI-000037 — item 9.15 — dificuldade media
*Oficial — Fundação Cesgranrio, Transpetro PSP/Terra 002/2023 (Edital nº 2), Análise de Sistemas — Processos de Negócios, 2023, Prova 6, questão 40 (gabarito: oficial (PDF de gabarito da Cesgranrio, alterado em 9/01/2024), conferido na T13) · status: em_revisao*

A MITRE ATT&CK® é uma referência a respeito de táticas e de técnicas adversárias. Profissionais da área de segurança precisam conhecer essa referência para implantar controles de segurança que assegurem a proteção dos sistemas de informação da organização.

Dentre as táticas adversárias listadas na MITRE ATT&CK®, está a(o)

A) verificação de vulnerabilidade
B) comunicação entre processos
C) manipulação de conta
D) evasão do depurador
E) acesso à credencial

### OFI-000038 — item 9.19 — dificuldade media
*Oficial — Fundação Cesgranrio, Transpetro PSP/Terra 002/2023 (Edital nº 2), Análise de Sistemas — Processos de Negócios, 2023, Prova 6, questão 41 (gabarito: oficial (PDF de gabarito da Cesgranrio, alterado em 9/01/2024), conferido na T13) · status: em_revisao*

O envelope digital é um esquema de criptografia padrão para implementar a confidencialidade de dados durante o envio de uma mensagem para um destinatário. Nesse esquema, criptografam-se os dados utilizando-se um algoritmo de criptografia simétrica.
Já a chave secreta usada nesse esquema é criptografada utilizando-se um algoritmo de criptografia assimétrica com a chave

A) privada do remetente
B) privada do destinatário
C) pública do remetente
D) pública do destinatário
E) pública de um terceiro confiável

### OFI-000039 — item 9.11 — dificuldade facil
*Oficial — Fundação Cesgranrio, Transpetro PSP/Terra 002/2023 (Edital nº 2), Análise de Sistemas — Processos de Negócios, 2023, Prova 6, questão 42 (gabarito: oficial (PDF de gabarito da Cesgranrio, alterado em 9/01/2024), conferido na T13) · status: em_revisao*

O processo de resposta a incidentes não é uma atividade linear que se inicia quando um incidente é detectado e que termina com sua erradicação e recuperação. Há uma reação a uma ocorrência identificada e, por meio dessa reação, são feitas a classificação, a investigação e a contenção do incidente.

Um Ciclo de Vida de Resposta a Incidentes está definido na publicação do

A) NIST SP 800-30
B) NIST SP 800-34
C) NIST SP 800-61
D) ISO 27033-5
E) ISO 27034-1

### OFI-000040 — item 9.2 — dificuldade facil
*Oficial — Fundação Cesgranrio, Transpetro PSP/Terra 002/2023 (Edital nº 2), Análise de Sistemas — Processos de Negócios, 2023, Prova 6, questão 43 (gabarito: oficial (PDF de gabarito da Cesgranrio, alterado em 9/01/2024), conferido na T13) · status: em_revisao*

Organizações constantemente enfrentam ameaças cibernéticas que podem causar danos e prejuízos graves. Há uma solução de software muita utilizada, que fornece uma visão holística da segurança da informação de uma organização, agregando e analisando eventos e logs de segurança de várias fontes em toda a infraestrutura de TI.

A solução de software descrita é o

A) CASB
B) WAF
C) DLP
D) SIEM
E) Proxy

### OFI-000041 — item 9.19 — dificuldade media
*Oficial — Fundação Cesgranrio, Transpetro PSP/Terra 002/2023 (Edital nº 2), Análise de Sistemas — Processos de Negócios, 2023, Prova 6, questão 44 (gabarito: oficial (PDF de gabarito da Cesgranrio, alterado em 9/01/2024), conferido na T13) · status: em_revisao*

As organizações podem usar a Norma ABNT ISO 27002 como uma referência para a seleção de controles dentro do processo de um SGSI (Sistema de Gestão de Segurança da Informação).

Conforme definido nessa norma, assegurar que as informações e os recursos de processamento da informação estejam protegidos contra malware é um dos objetivos listados para o contexto da segurança

A) nas operações
B) nas comunicações
C) em recursos humanos
D) no controle de acesso
E) física e do ambiente

### OFI-000056 — item 9.18 — dificuldade media
*Oficial — Fundação Cesgranrio, Transpetro PSP RH 2018.1 (Edital nº 1), Analista de Sistemas Júnior — Processos de Negócio, 2018, Prova 15, questão 45 (gabarito: oficial (PDF de gabarito da Cesgranrio, alterado em 09/05/2018), conferido na T13) · status: em_revisao*

A classificação da informação visa a assegurar que a informação receba um nível adequado de proteção.

O processo de classificação da informação é um processo

A) executado pelo coordenador de TI para determinar a melhor forma de armazenamento e quem pode e quem não pode acessar uma informação.
B) executado por uma empresa externa especializada em segurança da informação para determinar quem pode e quem não pode acessar uma informação.
C) de decisão estratégica, e requer que o agente de segurança física determine o que pode e o que não pode entrar e sair do ambiente da empresa.
D) de decisão estratégica, e requer que o profissional de segurança determine o que deve ser classificado como confidencial, de uso interno ou público.
E) de decisão de negócios, e requer o papel ativo do setor gerencial da empresa para determinar o que deve ser classificado como confidencial, de uso interno ou público.

### OFI-000057 — item 9.19 — dificuldade media
*Oficial — Fundação Cesgranrio, Transpetro PSP RH 2018.1 (Edital nº 1), Analista de Sistemas Júnior — Processos de Negócio, 2018, Prova 15, questão 46 (gabarito: oficial (PDF de gabarito da Cesgranrio, alterado em 09/05/2018), conferido na T13) · status: em_revisao*

A Norma ISO 27002 define o código de prática para a gestão da segurança da informação.

Dentre as recomendações de segurança, o controle de acesso à rede recomenda implantar ações de controle para que

A) concessão e uso de privilégios sejam restritos e controlados.
B) sistemas sensíveis tenham um ambiente computacional dedicado (isolado).
C) sessões inativas sejam encerradas após um período definido de inatividade.
D) métodos apropriados de autenticações sejam usados para controlar acesso de usuários remotos.
E) eventos de segurança da informação sejam relatados através dos canais apropriados da direção.

### OFI-000058 — item 9.2 — dificuldade facil
*Oficial — Fundação Cesgranrio, Transpetro PSP RH 2018.1 (Edital nº 1), Analista de Sistemas Júnior — Processos de Negócio, 2018, Prova 15, questão 47 (gabarito: oficial (PDF de gabarito da Cesgranrio, alterado em 09/05/2018), conferido na T13) · status: em_revisao*

Para proteger as redes de dados, as empresas criam perímetros de segurança formados por componentes que avaliam o tráfego de ingresso e egresso.
O componente que utiliza listas de controle de acesso formadas por regras que determinam se um pacote pode ou não atravessar a barreira é a(o)

A) Firewall
B) Proxy
C) DMZ
D) IDS
E) IPS

### OFI-000059 — item 9.6 — dificuldade facil
*Oficial — Fundação Cesgranrio, Transpetro PSP RH 2018.1 (Edital nº 1), Analista de Sistemas Júnior — Processos de Negócio, 2018, Prova 15, questão 48 (gabarito: oficial (PDF de gabarito da Cesgranrio, alterado em 09/05/2018), conferido na T13) · status: em_revisao*

A Virtual Private Network (VPN) permite o estabelecimento de um enlace seguro do tipo host-to-host, host-to-gateway ou gateway-to-gateway. Existe uma técnica que permite o encapsulamento de um pacote inteiro em outro pacote na VPN do tipo host-to-gateway, de forma segura, usando criptografia.

Essa técnica é o(a)

A) empacotamento
B) encaminhamento
C) tunelamento
D) reflexão segura
E) inundação segura

### OFI-000060 — item 9.3 — dificuldade facil
*Oficial — Fundação Cesgranrio, Transpetro PSP RH 2018.1 (Edital nº 1), Analista de Sistemas Júnior — Processos de Negócio, 2018, Prova 15, questão 49 (gabarito: oficial (PDF de gabarito da Cesgranrio, alterado em 09/05/2018), conferido na T13) · status: em_revisao*

O malware (malicious software) é um código malicioso que tem o potencial de danificar sua vítima, mas nem sempre age dessa forma. Dentre eles, há um que engaja um computador em uma armada que permite a realização de tarefas de forma automatizada para atacar alvos determinados por criminosos cibernéticos, sem o conhecimento do dono do computador.

Esse malware é o

A) Bot
B) Worm
C) Trojan
D) Rabbit
E) Ransomware

### OFI-000061 — item 9.19 — dificuldade media
*Oficial — Fundação Cesgranrio, Transpetro PSP RH 2018.1 (Edital nº 1), Analista de Sistemas Júnior — Processos de Negócio, 2018, Prova 15, questão 50 (gabarito: oficial (PDF de gabarito da Cesgranrio, alterado em 09/05/2018), conferido na T13) · status: em_revisao*

Um certificado digital possui o valor SHA256RSA no campo algoritmo de assinatura.
Essa informação indica que a assinatura digital do certificado digital foi criada com o algoritmo de hash

A) SHA, uma chave privada de 256 bits e o algoritmo de criptografia simétrica RSA.
B) SHA, uma chave privada de 256 bits e o algoritmo de criptografia assimétrica RSA.
C) SHA, uma chave simétrica de 256 bits e o algoritmo de criptografia simétrica RSA.
D) SHA256, que produz um digest de 256 bits, e o algoritmo de criptografia simétrica RSA.
E) SHA256, que produz um digest de 256 bits, e o algoritmo de criptografia assimétrica RSA.

### OFI-000062 — item 9.8 — dificuldade dificil
*Oficial — Fundação Cesgranrio, Transpetro PSP RH 2018.1 (Edital nº 1), Analista de Sistemas Júnior — Processos de Negócio, 2018, Prova 15, questão 51 (gabarito: oficial (PDF de gabarito da Cesgranrio, alterado em 09/05/2018), conferido na T13) · status: em_revisao*

O SAML (Security Assertion Markup Language) é constituído por componentes modulares que permitem a transferência de identidade, autenticação e informações de autorização entre organizações. Dentre esses componentes, os protocolos são utilizados para realizar as requisições definidas pelo SAML e retornar as respostas apropriadas.
O protocolo que fornece um mecanismo pelo qual as mensagens do protocolo SAML podem ser passadas por referência, utilizando, para isso, um valor pequeno e de tamanho fixo, é o

A) Authentication Request Protocol
B) Assertion Query and Request Protocol
C) Artifact Resolution Protocol
D) Name Identifier Management Protocol
E) Name Identifier Mapping Protocol

### OFI-000063 — item 9.19 — dificuldade media
*Oficial — Fundação Cesgranrio, Transpetro PSP RH 2018.1 (Edital nº 1), Analista de Sistemas Júnior — Processos de Negócio, 2018, Prova 15, questão 52 (gabarito: oficial (PDF de gabarito da Cesgranrio, alterado em 09/05/2018), conferido na T13) · status: em_revisao*

A ICP (Infraestrutura de Chaves Públicas) define um conjunto de técnicas, práticas e procedimentos a serem adotados pelas entidades a fim de estabelecer um sistema de certificação digital baseado em chave pública.
Na ICP-Brasil, o certificado de uma Autoridade Certificadora, imediatamente subsequente à Autoridade Certificadora Raiz, é assinado

A) apenas pela Autoridade Certificadora Raiz
B) apenas pela Autoridade de Registro
C) apenas pela própria Autoridade Certificadora
D) pela Autoridade Certificadora Raiz e pela Autoridade de Registro
E) pela Autoridade Certificadora Raiz e pela própria Autoridade Certificadora

### OFI-000074 — item 9.17 — dificuldade media
*Oficial — Fundação Cesgranrio, Caixa Econômica Federal, Edital 1/2021/NM, Técnico Bancário Novo — Tecnologia da Informação, 2021, Caderno de Tecnologia da Informação (questões 31 a 60), questão 60 (gabarito: definitivo (fonte oficial: portal da Cesgranrio); recursos sem alteração nem anulação) · status: em_revisao*

A Resolução CMN nº 4.893, de 26 de fevereiro de 2021, dispõe sobre a política de segurança cibernética e sobre os requisitos para a contratação de serviços de processamento e armazenamento de dados e de computação em nuvem, a serem observados pelas instituições autorizadas a funcionar pelo Banco Central do Brasil.
Essa Resolução determina que a política de segurança cibernética e o plano de ação e de resposta a incidentes devem ser, no mínimo, documentados e revisados

A) trimestralmente
B) semestralmente
C) anualmente
D) bienalmente
E) trienalmente

### OFI-000075 — item 9.3 — dificuldade media
*Oficial — Fundação Cesgranrio, BNDES, Edital 1/2024, Analista — Análise de Sistemas: Cibersegurança, 2024, Prova 2 (manhã), questão 36 (gabarito: final após recursos (documento da banca, via espelho QConcursos)) · status: em_revisao*

As divisões categóricas dos códigos maliciosos, também conhecidos como malware, servem para homogeneizar os tipos de tratamento e resposta a essas ameaças.

Para implementar um spyware em uma máquina-alvo, o tipo de malware mais indicado para ser usado na infecção é um(a)

A) trojan, pois o usuário do sistema terá interesse em usá-lo e é silencioso.
B) vírus, pois são notórios pela capacidade de se replicar autonomamente em diversos computadores de uma rede.
C) worm, pois é capaz de se replicar em diversas áreas da memória (seja principal ou secundária) de um único dispositivo-alvo.
D) spear phishing, pois usa diversos computadores controlados para infectar um alvo específico.
E) botnet, pois engana o usuário e o leva a fornecer as suas credenciais a um programa conhecido como botmaster.

### OFI-000076 — item 9.19 — dificuldade dificil
*Oficial — Fundação Cesgranrio, BNDES, Edital 1/2024, Analista — Análise de Sistemas: Cibersegurança, 2024, Prova 2 (manhã), questão 38 (gabarito: final após recursos (documento da banca, via espelho QConcursos)) · status: em_revisao*

Durante muitos séculos, a criptografia era utilizada apenas para proteger a confidencialidade das mensagens. Entretanto, ao final do século XX uma nova forma de criptografia foi criada. Esta, em conjunto com outras técnicas, permite proteger a integridade, a confidencialidade e a autenticidade das informações que são transmitidas. Considere a transmissão de uma mensagem (M) de R para J.

Uma solução de segurança que protege a integridade, a confidencialidade e a autenticidade das informações, durante essa transmissão, é a solução realizada com os seguintes procedimentos de R:

A) cifrar M com chave simétrica k, gerando a cifra C; transmitir k e C para J; e depois transmitir M em claro para ser conferido por J.
B) cifrar M com a chave secreta (Sr) de R, gerando a cifra C1; cifrar C1 com a chave secreta de J (Sj), gerando a cifra C2; e transmitir C2 para J.
C) cifrar M com a chave pública de R (Pr), gerando a cifra C1; cifrar C1 com a chave secreta de R (Sr), gerando a cifra C2; transmitir C2 e M em claro para ser conferido por J.
D) cifrar M com a chave secreta de R (Sr), gerando a cifra C1; cifrar C1 com a chave pública de J (Pj), gerando a cifra C2; transmitir C2 e um hash H(M) para ser conferido por J.
E) cifrar M com a chave simétrica k, gerando a cifra C; transmitir C e um hash H(M) para ser conferido por J.

### OFI-000077 — item 9.11 — dificuldade media
*Oficial — Fundação Cesgranrio, BNDES, Edital 1/2024, Analista — Análise de Sistemas: Cibersegurança, 2024, Prova 2 (manhã), questão 45 (gabarito: final após recursos (documento da banca, via espelho QConcursos)) · status: em_revisao*

A ABNT NBR ISO/IEC 27035-1:2023 destina-se a complementar outras normas e documentos que fornecem orientação sobre a investigação e preparação para investigar incidentes de segurança da informação. Conforme definido nessa norma, o processo de gestão de incidentes de segurança da informação consiste em cinco fases distintas. Há uma fase na qual pode ocorrer a necessidade de invocar medidas do plano de continuidade de negócios ou do plano de recuperação de desastre para os incidentes que excedem determinados limites organizacionais para as equipes de resposta a incidentes.

Essa fase é a de

A) avaliar e decidir
B) detectar e comunicar
C) lições aprendidas
D) planejar e preparar
E) responder

### OFI-000078 — item 9.4 — dificuldade media
*Oficial — Fundação Cesgranrio, BNDES, Edital 1/2024, Analista — Análise de Sistemas: Cibersegurança, 2024, Prova 2 (manhã), questão 47 (gabarito: final após recursos (documento da banca, via espelho QConcursos)) · status: em_revisao*

Os ataques passivos são muito difíceis de detectar, pois não envolvem alteração dos dados trafegados na rede. Por outro lado, os ataques ativos envolvem alguma modificação do fluxo de dados ou a criação de um fluxo falso.

Dentre os exemplos de ataques, há o ataque de disfarce, cujo objetivo é o de

A) coletar informações, com base na escuta do fluxo de dados transmitido na linha de comunicação.
B) ganhar conhecimento por inferência, com base nas características observáveis do fluxo de dados.
C) provocar a sobrecarga da rede como um tipo de obstrução, com a finalidade de causar uma interrupção.
D) consumir e esgotar os recursos do sistema da vítima, como ciclos de CPU, memória e espaço em disco.
E) ganhar acesso a um sistema ou desempenhar uma ação maliciosa, por posar ilegitimamente como uma entidade autorizada.

### OFI-000079 — item 9.13 — dificuldade media
*Oficial — Fundação Cesgranrio, BNDES, Edital 1/2024, Analista — Análise de Sistemas: Cibersegurança, 2024, Prova 2 (manhã), questão 48 (gabarito: final após recursos (documento da banca, via espelho QConcursos)) · status: em_revisao*

A varredura de porta de comunicação visa fazer uma avaliação em massa do alvo e a identificação de serviços buscando os corredores de entrada mais poderosos. A técnica de varredura de porta TCP explora o 3-way handshake do TCP para determinar se uma porta de comunicação da vítima está aberta ou fechada. Dentre os exemplos de uso dessa técnica, há um que protege o endereço IP do atacante, pois faz uso de um zumbi para fazer a varredura de porta TCP da vítima.

Essa técnica de varredura furtiva de porta TCP é conhecida como varredura TCP

A) FIN
B) ACK
C) IDLE
D) NULL
E) XMAS

### OFI-000080 — item 9.3 — dificuldade media
*Oficial — Fundação Cesgranrio, BNDES, Edital 1/2024, Analista — Análise de Sistemas: Cibersegurança, 2024, Prova 2 (manhã), questão 51 (gabarito: final após recursos (documento da banca, via espelho QConcursos)) · status: em_revisao*

O código malicioso é aquele programa de computador que tem o potencial de danificar sua vítima, mas nem sempre age dessa forma. Alguns códigos maliciosos optam por furtar dados pessoais, enquanto outros usam recursos de computação da vítima em benefício próprio, sem o conhecimento ou a autorização da vítima. Dentre esses códigos maliciosos, existe uma certa categoria que visa utilizar código Javascript malicioso para furtar dados de cartão de crédito e outras informações preenchidas em páginas de pagamento de web sites de e-Commerce.
Essa categoria de códigos maliciosos é conhecida como

A) worm
B) formjacking
C) downloader
D) ransomware
E) cryptojacking

### OFI-000081 — item 9.1 — dificuldade facil
*Oficial — Fundação Cesgranrio, BNDES, Edital 1/2024, Analista — Análise de Sistemas: Cibersegurança, 2024, Prova 2 (manhã), questão 52 (gabarito: final após recursos (documento da banca, via espelho QConcursos)) · status: em_revisao*

A engenharia social é uma técnica de manipulação que visa persuadir pessoas a cometerem erros ou burlar políticas de segurança, de forma que o adversário tenha êxito em ações maliciosas que não seriam viáveis sem a participação da vítima. Dentre os métodos mais comuns de engenharia social, existe um que tem como objetivo seguir um membro autorizado da equipe em uma área de acesso restrito e se aproveitar da cortesia social para fazer com que a pessoa segure a porta para o atacante ou para convencer a pessoa de que o atacante também está autorizado a ficar na área de acesso restrito.
Esse método de engenharia social é conhecido como

A) baiting
B) phishing
C) smishing
D) tailgating
E) honeytrap

### OFI-000082 — item 9.2 — dificuldade media
*Oficial — Fundação Cesgranrio, BNDES, Edital 1/2024, Analista — Análise de Sistemas: Cibersegurança, 2024, Prova 2 (manhã), questão 54 (gabarito: final após recursos (documento da banca, via espelho QConcursos)) · status: em_revisao*

A estratégia de defesa em profundidade implica a implantação de camadas de segurança independentes. Essa estratégia é amplamente adotada na segurança do perímetro da rede de comunicação de dados, por meio da implantação de componentes de segurança. Um desses componentes opera no nível de aplicação como um intermediário na comunicação entre as aplicações das estações internas e os servidores externos, para proteger a privacidade e aplicar políticas corporativas de restrição de acesso a sítios externos.

Esse componente de segurança é o

A) firewall proxy
B) firewall com estado
C) gateway VPN
D) filtro de pacotes
E) intrusion detection system

### OFI-000083 — item 9.4 — dificuldade media
*Oficial — Fundação Cesgranrio, BNDES, Edital 1/2024, Analista — Análise de Sistemas: Cibersegurança, 2024, Prova 2 (manhã), questão 55 (gabarito: final após recursos (documento da banca, via espelho QConcursos)) · status: em_revisao*

O OWASP Top 10 apresenta as categorias de riscos de segurança mais críticos de aplicações Web, verificadas durante um certo período de avaliação e serve como um guia para profissionais de segurança e desenvolvedores de sistemas. Num dos cenários de ataque apresentados na publicação de 2021, um invasor monitora uma aplicação Web que não usa nem força o uso do TLS (Transport Layer Security), o que possibilita que um invasor monitore o tráfego de rede (por exemplo, em uma rede sem fio insegura), intercepte solicitações e roube o cookie de sessão do usuário.

Esse cenário de ataque é apontado na categoria de risco de segurança

A) Injection
B) Cryptographic Failures
C) Broken Access Control
D) Server Side Request Forgery
E) Vulnerable and Outdated Components

### OFI-000084 — item 9.19 — dificuldade media
*Oficial — Fundação Cesgranrio, BNDES, Edital 1/2024, Analista — Análise de Sistemas: Cibersegurança, 2024, Prova 2 (manhã), questão 56 (gabarito: final após recursos (documento da banca, via espelho QConcursos)) · status: em_revisao*

A fim de garantir a segurança da informação, é preciso adotar um conjunto de medidas de proteção para tornar sistemas de informação e sistemas de comunicação resistentes a ataques. Dentre essas medidas de proteção, existe uma que visa fornecer evidências que podem ser armazenadas e, posteriormente, apresentadas a terceiros, para resolver disputas que surgem se e quando uma comunicação é negada por uma das entidades envolvidas.

Essa medida de proteção é conhecida como

A) integridade
B) autenticidade
C) irretroatividade
D) irretratabilidade
E) confidencialidade

### OFI-000085 — item 9.2 — dificuldade media
*Oficial — Fundação Cesgranrio, BNDES, Edital 1/2024, Analista — Análise de Sistemas: Cibersegurança, 2024, Prova 2 (manhã), questão 59 (gabarito: final após recursos (documento da banca, via espelho QConcursos)) · status: em_revisao*

As equipes do Security Operation Center (SOC) da organização, muitas vezes, são inundadas com tarefas repetitivas e demoradas que prejudicam e reduzem a eficiência na resposta aos incidentes. Para minimizar esse problema, um conjunto de tecnologias de segurança cibernética permite que as organizações respondam a alguns incidentes automaticamente, possibilitando que os administradores lidem com alertas de segurança, sem a necessidade de intervenção manual. Para isso, englobam três importantes recursos de software usados pelas equipes de cibersegurança: gerenciamento de casos e de fluxos de trabalho; automação de tarefas e acesso a meios centralizados de consulta; e compartilhamento de informações sobre ameaças.

Esse conjunto de tecnologias de segurança cibernética é conhecido como

A) IPS
B) DLP
C) WAF
D) CASB
E) SOAR

### OFI-000086 — item 9.2 — dificuldade dificil
*Oficial — Fundação Cesgranrio, BNDES, Edital 1/2024, Analista — Análise de Sistemas: Cibersegurança, 2024, Prova 2 (manhã), questão 62 (gabarito: final após recursos (documento da banca, via espelho QConcursos)) · status: em_revisao*

Os Controles CIS (Center for Internet Security) refletem o conhecimento combinado de inúmeros especialistas de várias áreas de segurança e de vários setores, que compartilham percepções sobre ataques e invasores, identificam as causas básicas e as traduzem em classes de ação defensivas. A versão 8 dos Controles CIS apresenta Grupos de Implementação (IG, sigla em inglês) de Controles CIS, e cada IG identifica um subconjunto dos Controles CIS que a comunidade avaliou amplamente para serem aplicáveis a uma empresa com um perfil de risco e recursos semelhantes para implementação. Dentre esses IG, um deles é recomendado para uma empresa que emprega especialistas em segurança especializados nas diferentes facetas da segurança cibernética (por exemplo, gestão de riscos, teste de invasão, segurança de aplicações) e na qual os ativos e os dados contêm informações ou funções confidenciais que estão sujeitas à supervisão regulatória e de conformidade, o que obriga a empresa a abordar a disponibilidade dos serviços e a confidencialidade e integridade dos dados sensíveis.

Esse Grupo de Implementação de Controle CIS é o

A) IG1
B) IG2
C) IG3
D) IG4
E) IG5

### OFI-000087 — item 9.11 — dificuldade dificil
*Oficial — Fundação Cesgranrio, BNDES, Edital 1/2024, Analista — Análise de Sistemas: Cibersegurança, 2024, Prova 2 (manhã), questão 65 (gabarito: final após recursos (documento da banca, via espelho QConcursos)) · status: em_revisao*

Um CSIRT (Computer Security Incident Response Team) é capaz não apenas de coletar e avaliar relatórios de incidentes de segurança da informação, mas também de analisar dados relevantes e executar análises técnicas detalhadas do incidente em si e de quaisquer artefatos usados. A partir dessa análise, a mitigação e as etapas para se recuperar do incidente podem ser recomendadas.

De acordo com o FIRST CSIRT Services Framework, o serviço de mitigação e recuperação está definido para a área de serviço de

A) Consciência Situacional
B) Transferência de Conhecimento
C) Gestão de Vulnerabilidade
D) Gestão de Eventos de Segurança da Informação
E) Gestão de Incidentes de Segurança da Informação

### OFI-000088 — item 9.15 — dificuldade media
*Oficial — Fundação Cesgranrio, BNDES, Edital 1/2024, Analista — Análise de Sistemas: Cibersegurança, 2024, Prova 2 (manhã), questão 66 (gabarito: final após recursos (documento da banca, via espelho QConcursos)) · status: em_revisao*

A taxonomia das táticas, técnicas e subtécnicas adversárias proposta pela MITRE ATT&CK® estabelece uma linguagem comum para compartilhar informações sobre ameaças cibernéticas e para colaborar na prevenção de ameaças.
Um exemplo de técnica da tática de evasão de defesa da matriz para empresas da MITRE ATT&CK® é

A) criar conta.
B) usar força bruta.
C) ocultar artefatos.
D) coletar informações do host da vítima.
E) criar e modificar processos do sistema.

### OFI-000089 — item 9.4 — dificuldade media
*Oficial — Fundação Cesgranrio, BNDES, Edital 1/2024, Analista — Análise de Sistemas: Cibersegurança, 2024, Prova 2 (manhã), questão 67 (gabarito: final após recursos (documento da banca, via espelho QConcursos)) · status: em_revisao*

O Common Weakness Enumeration (CWE) é uma base de conhecimento sobre fraquezas comuns em hardware e software que, sob certas circunstâncias, podem contribuir para a introdução de vulnerabilidades. O CWE Top 25 de 2023 demonstra as fraquezas de software mais comuns e impactantes atualmente. Dentre essas 25 fraquezas, destaca-se uma na qual o servidor web recebe uma URL e recupera o conteúdo dessa URL, mas não garante suficientemente que a solicitação seja enviada ao destino esperado, permitindo que o servidor seja usado como um proxy para realizar a varredura de portas de hosts em redes internas.
Essa fraqueza é listada no CWE como

A) SSRF
B) CSRF
C) Out-of-bounds read
D) Missing Authorization
E) Deserialization of Untrusted Data

### OFI-000090 — item 9.2 — dificuldade media
*Oficial — Fundação Cesgranrio, BNDES, Edital 1/2024, Analista — Análise de Sistemas: Cibersegurança, 2024, Prova 2 (manhã), questão 68 (gabarito: final após recursos (documento da banca, via espelho QConcursos)) · status: em_revisao*

O Common Vulnerability Scoring System (CVSS) é um framework aberto para comunicar as características e a gravidade das vulnerabilidades de sistemas que propõe uma maneira de capturar as principais características de uma vulnerabilidade e de produzir uma pontuação numérica que reflete sua gravidade e pode ser traduzida em uma representação qualitativa.
Os quatro grupos de métricas definidos no CVSS versão 4.0 são:

A) Base, Threat, Temporal e Supplemental
B) Base, Threat, Environmental e Temporal
C) Base, Threat, Environmental e Supplemental
D) Base, Temporal, Environmental e Supplemental
E) Threat, Temporal, Environmental e Supplemental

### OFI-000091 — item 9.19 — dificuldade dificil
*Oficial — Fundação Cesgranrio, BNDES, Edital 1/2024, Analista — Análise de Sistemas: Cibersegurança, 2024, Prova 2 (manhã), questão 69 (gabarito: final após recursos (documento da banca, via espelho QConcursos)) · status: em_revisao*

A norma ABNT NBR ISO/IEC 27002:2022 organiza os controles de segurança em diferentes categorias (ou temas), e cada controle está associado a cinco atributos com valores de atributo correspondentes. Dentre esses atributos, o de domínios de segurança é usado para visualizar controles na perspectiva de quatro domínios de segurança da informação.
Os valores desse atributo consistem em:

A) Confidencialidade, Integridade, Disponibilidade e Resiliência
B) Governança, Defesa, Continuidade e Segurança_física
C) Governança, Confidencialidade, Integridade e Disponibilidade
D) Governança_e_Ecossistema, Proteção, Defesa e Resiliência
E) Governança_e_Ecossistema, Proteção, Defesa e Segurança_física

### OFI-000094 — item 9.10 — dificuldade media
*Oficial — Fundação Cesgranrio, BNDES, Edital 1/2024, Analista — Análise de Sistemas: Desenvolvimento, 2024, Prova 3 (manhã), questão 42 (gabarito: final após recursos (documento da banca, via espelho QConcursos)) · status: em_revisao*

Em uma aplicação financeira, um banco está implementando a autenticação multifatorial dos usuários junto com um sistema de Controle de Acesso Baseado em Papéis (RBAC, sigla em inglês) para gerenciar as permissões desses mesmos usuários.

Considerando-se esse contexto, quando implementado, o RBAC

A) atribuirá permissões baseadas em funções sem considerar a identidade do usuário, enquanto a autenticação atribuirá permissões diretamente aos usuários.
B) lidará exclusivamente com a autenticação dos usuários, garantindo que apenas usuários autenticados possam acessar a aplicação.
C) será responsável por determinar as permissões dos usuários com base em seus papéis, enquanto a autenticação verificará a identidade dos usuários antes de atribuir esses papéis.
D) será independente da autenticação, e ambos não se relacionarão na gestão de acesso.
E) substituirá a necessidade de autenticação multifatorial, uma vez que os papéis já definem quem pode acessar a aplicação.

### OFI-000099 — item 9.20 — dificuldade media
*Oficial — Fundação Cesgranrio, BNDES, Edital 1/2024, Analista — Análise de Sistemas: Desenvolvimento, 2024, Prova 3 (manhã), questão 53 (gabarito: final após recursos (documento da banca, via espelho QConcursos)) · status: em_revisao*

Uma empresa financeira está elaborando um projeto para dar continuidade aos negócios de TI nas situações de recuperação de desastres, focando na parte de backup dos dados e na infraestrutura de TI. Para isso, a empresa permitirá que tais ações sejam sempre hospedadas em uma infraestrutura de nuvem, associada a um provedor de terceiros. Nesse modelo proposto, ocorrendo uma crise, esse provedor implementará e orquestrará o plano de recuperação de desastres, de modo a dar continuidade ao acesso e à funcionalidade dos sistemas, com o mínimo de interrupções nas operações.
Esse tipo de recuperação de desastres utilizará o modelo de serviços

A) IaaS
B) BaaS
C) DRaaS
D) DRVMaaS
E) PaaS

### OFI-000111 — item 9.19 — dificuldade media
*Oficial — Fundação Cesgranrio, Petrobras PSP RH 2017.2 (prova de 18/03/2018), Analista de Sistemas Júnior — Processos de Negócio, 2018, Prova 3, questão 63 (gabarito: de espelho (PCI), fornecido pelo usuário; preliminar/definitivo não indicado; anulações não verificadas; não validado contra a banca) · status: em_revisao*

A Infraestrutura de Chaves Públicas Brasileira regula a validação de uma assinatura digital ICP-Brasil, realizada sobre um documento eletrônico, com o estabelecimento de alguns critérios.
Um desses critérios utiliza resultados hash do documento, que têm como uma de suas finalidades

A) facilitar a criptografia do documento original.
B) assegurar a integridade do conteúdo digital, mostrando que não houve alteração desse conteúdo desde a criação da assinatura digital pelo signatário.
C) assegurar a autoria, decifrando a assinatura digital com a chave criptográfica secreta, contida no certificado digital do signatário.
D) proporcionar a recuperação do documento original com a aplicação da chave secreta do destinatário sobre o hash.
E) proporcionar a recuperação do documento original com a aplicação da chave pública do remetente sobre o hash.

### OFI-000112 — item 9.4 — dificuldade facil
*Oficial — Fundação Cesgranrio, Petrobras PSP RH 2017.2 (prova de 18/03/2018), Analista de Sistemas Júnior — Processos de Negócio, 2018, Prova 3, questão 64 (gabarito: de espelho (PCI), fornecido pelo usuário; preliminar/definitivo não indicado; anulações não verificadas; não validado contra a banca) · status: em_revisao*

Os sistemas computacionais estão sujeitos a ataques tanto passivos quanto ativos.
Ataques passivos, tais como o monitoramento ou a análise de tráfego, ameaçam principalmente os requisitos de

A) confidencialidade
B) irretratabilidade
C) autenticidade
D) disponibilidade
E) integridade

### OFI-000113 — item 9.18 — dificuldade media
*Oficial — Fundação Cesgranrio, Petrobras PSP RH 2017.2 (prova de 18/03/2018), Analista de Sistemas Júnior — Processos de Negócio, 2018, Prova 3, questão 65 (gabarito: de espelho (PCI), fornecido pelo usuário; preliminar/definitivo não indicado; anulações não verificadas; não validado contra a banca) · status: em_revisao*

A norma ISO 27002 estabelece que o objetivo da classificação das informações (atribuição de grau de confidencialidade) é a garantia de que os ativos de informação receberão um nível de proteção adequado. Ainda segundo a norma, as informações devem ser classificadas para indicar a necessidade, as prioridades e o grau de proteção.
Com base nesse objetivo, a norma estabelece diretrizes para essa classificação, entre as quais se inclui a de

A) atribuir o processo de revisão do nível de confidencialidade de um documento à alta gerência.
B) manter a responsabilidade pela atribuição do nível de confidencialidade de um documento com o setor de TI.
C) manter os rótulos de classificação originais nos documentos oriundos de outras organizações.
D) manter o princípio de equidade que garante aos funcionários com funções similares o mesmo direito de acesso às informações classificadas.
E) rotular as informações e as saídas geradas pelos sistemas que tratam dados confidenciais, segundo seu valor e sensibilidade para a organização.

### OFI-000114 — item 9.8 — dificuldade facil
*Oficial — Fundação Cesgranrio, Petrobras PSP RH 2017.2 (prova de 18/03/2018), Analista de Sistemas Júnior — Processos de Negócio, 2018, Prova 3, questão 66 (gabarito: de espelho (PCI), fornecido pelo usuário; preliminar/definitivo não indicado; anulações não verificadas; não validado contra a banca) · status: em_revisao*

Em ambientes computacionais, muitas aplicações que oferecem funcionalidades distintas são usadas simultaneamente pelos usuários.
Para possibilitar esse uso simultâneo, sem que o usuário tenha de fazer autenticações distintas em cada uma das aplicações, os administradores podem implantar uma infraestrutura de autenticação com suporte a

A) Unique Login Control (ULC)
B) Single Sign-On (SSO)
C) One-Time Password (OTP)
D) One-Time Token (OTT)
E) Unique-Auth Database (UAD)

### OFI-000128 — item 9.16 — dificuldade media
*Oficial — Fundação Cesgranrio, Petroquímica Suape PSP nº 1/2012 (22/04/2012), Analista de Sistemas Júnior — Ênfase em Negócio, 2012, Prova 6, questão 51 (gabarito: de espelho (Estude Grátis), após recursos; não validado contra a banca) · status: em_revisao*

Os riscos de segurança da informação crescem com a redução das ameaças.
PORQUE
Os riscos de segurança da informação diminuem com o aumento das vulnerabilidades.

Analisando-se as afirmações acima, conclui-se que

A) as duas afirmações são verdadeiras, e a segunda justifica a primeira.
B) as duas afirmações são verdadeiras, e a segunda não justifica a primeira.
C) a primeira afirmação é verdadeira, e a segunda é falsa.
D) a primeira afirmação é falsa, e a segunda é verdadeira.
E) as duas afirmações são falsas.
