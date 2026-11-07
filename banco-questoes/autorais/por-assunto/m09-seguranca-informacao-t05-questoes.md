# Questões autorais — m09-seguranca-informacao (expansão T05) — questões (T05 — expansão)

Sem gabarito; o comentário está no arquivo `gabaritos-comentados`.

## AUT-000113 — Segurança física e lógica: classificação de controles

*Questão autoral — estilo Cesgranrio.* · item 9.1 · Fácil

Um relatório de auditoria lista controles de segurança implantados em um data center. O auditor precisa separar os controles lógicos dos controles físicos.

A alternativa que apresenta apenas controles de segurança lógica é

(A) cerca perimetral, circuito fechado de TV, vigilantes e controle de acesso à portaria do prédio.
(B) sala-cofre, controle de umidade e temperatura, extintores de incêndio e piso elevado da sala de servidores.
(C) catraca com crachá, biometria na porta da sala, registro de visitantes e acompanhamento por segurança.
(D) autenticação multifator, criptografia de disco e listas de controle de acesso em arquivos.
(E) no-break, geradores e sistemas redundantes de refrigeração e de alimentação elétrica do data center.

## AUT-000114 — VPN: IPsec em modo túnel

*Questão autoral — estilo Cesgranrio.* · item 9.6 · Média

Duas filiais de uma empresa serão conectadas pela Internet por meio de uma VPN IPsec entre os gateways de cada filial.

Sobre essa solução, tem-se que

(A) a VPN garante o anonimato total do usuário perante os sites de destino, ocultando por completo a sua identidade e localização.
(B) a VPN dispensa o uso de firewall, pois o túnel torna seguro todo o tráfego da rede.
(C) no modo transporte do IPsec, o pacote IP original é inteiramente encapsulado em um novo pacote, com novo cabeçalho IP.
(D) o ESP não oferece confidencialidade, que é fornecida somente pelo AH.
(E) no modo túnel, o pacote IP original é protegido e encapsulado em um novo pacote, típico da ligação entre gateways.

## AUT-000115 — MDM: gerenciamento de dispositivos móveis

*Questão autoral — estilo Cesgranrio.* · item 9.7 · Média

Um funcionário que utiliza o smartphone pessoal para acessar o e-mail corporativo (política BYOD) perdeu o aparelho. A empresa adota uma solução de MDM (*Mobile Device Management*).

Um recurso típico dessa solução, aplicável ao caso, é

(A) aplicar remotamente políticas de segurança (senha, criptografia) e apagar os dados corporativos do aparelho perdido.
(B) bloquear fisicamente o aparelho por meio de um dispositivo de travamento instalado na rede cabeada da empresa.
(C) substituir o firewall de borda da empresa, inspecionando todo o tráfego que circula pela rede interna corporativa.
(D) recuperar as senhas esquecidas dos usuários de qualquer aplicativo instalado no aparelho, inclusive os de terceiros.
(E) garantir que o aparelho nunca seja infectado por malware, independentemente do comportamento do usuário ao instalar aplicativos.

## AUT-000116 — SSO: vantagens e riscos

*Questão autoral — estilo Cesgranrio.* · item 9.8 · Média

Uma organização implantou autenticação única (SSO), de modo que o usuário se autentica uma vez e acessa diversos sistemas corporativos sem informar novamente suas credenciais.

Sobre essa solução, tem-se que

(A) o SSO elimina a necessidade de autenticar o usuário, pois a identidade passa a ser presumida em todos os sistemas.
(B) o SSO reduz o número de senhas e centraliza o controle de acesso, mas cria um ponto único de comprometimento, reforçado com MFA.
(C) o SSO exige que cada sistema mantenha a sua própria base de senhas, replicada manualmente entre as aplicações.
(D) o SSO é incompatível com o uso de protocolos padronizados de federação, como SAML e OpenID Connect, usados em ambientes corporativos.
(E) o SSO impede o registro de auditoria, porque os acessos deixam de passar por cada sistema.

## AUT-000117 — Teste de penetração: autorização e escopo

*Questão autoral — estilo Cesgranrio.* · item 9.13 · Média

Uma empresa contratou uma consultoria para realizar um teste de penetração em seus sistemas de produção.

Antes de iniciar qualquer atividade técnica, o requisito essencial é

(A) executar uma varredura de portas e vulnerabilidades em toda a rede para, só então, definir o escopo do teste.
(B) comunicar o teste à equipe de TI somente após a conclusão, para que o ataque seja realista.
(C) obter autorização formal por escrito, com escopo, regras de engajamento, janelas de execução e responsáveis.
(D) obter as credenciais de administrador de todos os sistemas, pois o teste só é válido com acesso total.
(E) aplicar apenas técnicas automatizadas, pois as manuais podem ser interpretadas como ataque real.

## AUT-000118 — Política de segurança da informação

*Questão autoral — estilo Cesgranrio.* · item 9.17 · Média

Uma organização está elaborando sua Política de Segurança da Informação (PSI).

Sobre a PSI, tem-se que ela deve

(A) ser um documento técnico, restrito à equipe de TI, que detalha as configurações dos equipamentos e dos sistemas.
(B) ser elaborada pelo departamento de TI e implantada sem aprovação da alta direção, para agilizar o processo de implantação.
(C) ser definida uma única vez e mantida sem alterações ao longo dos anos, para evitar insegurança jurídica.
(D) ser aprovada pela direção, comunicada a todos os envolvidos e apoiada por normas e procedimentos que detalham seu cumprimento.
(E) tratar apenas dos usuários internos, uma vez que os terceiros e prestadores de serviço não têm acesso aos ativos.

## AUT-000119 — Classificação das informações

*Questão autoral — estilo Cesgranrio.* · item 9.18 · Média

Uma empresa adotou um esquema de classificação das informações com os níveis público, interno, confidencial e restrito.

Sobre o processo de classificação, constata-se que

(A) a equipe de TI deve classificar todas as informações da empresa, pois é quem detém e administra os sistemas.
(B) toda informação deve receber o nível mais alto, por precaução, a fim de simplificar o tratamento.
(C) a classificação é definitiva e não precisa ser reavaliada, ainda que a informação perca a sensibilidade com o passar do tempo.
(D) a classificação dispensa rótulos, pois o conhecimento informal dos usuários é suficiente para garantir o tratamento correto em toda a empresa.
(E) o proprietário da informação a classifica com base em valor, sensibilidade e requisitos legais, e o tratamento segue o nível atribuído.

## AUT-000120 — Segurança em IoT: credenciais padrão e atualização

*Questão autoral — estilo Cesgranrio.* · item 9.21 · Média

Uma empresa instalou centenas de câmeras IP conectadas à rede corporativa, mantendo as senhas de fábrica. Pouco tempo depois, parte dos dispositivos passou a integrar uma botnet que gerou ataques de negação de serviço.

Para reduzir esse risco em dispositivos IoT, as medidas mais adequadas são

(A) trocar as credenciais padrão, manter o firmware atualizado e segmentar a rede, isolando os dispositivos IoT.
(B) manter as credenciais padrão para facilitar o suporte, e confiar no firewall de borda para bloquear qualquer ataque externo.
(C) desativar todos os registros (logs) dos dispositivos, para reduzir o consumo de armazenamento.
(D) expor as interfaces de administração diretamente à Internet, para permitir o acesso remoto do fabricante.
(E) evitar qualquer atualização de firmware, pois novas versões podem alterar o comportamento esperado.
