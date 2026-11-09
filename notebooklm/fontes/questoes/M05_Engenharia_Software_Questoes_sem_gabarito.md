# Questões — Módulo M05: Engenharia de Software (sem gabarito)

## Identificação
- Concurso: Processo Seletivo Público TRANSPETRO 2026.4 (Edital nº 04/2026)
- Ênfase: 5 — Análise de Sistemas: Processos de Negócios
- Banca: Fundação Cesgranrio
- Módulo: M05 — Engenharia de Software
- Total: 43 questões; status `validada` ou `em_revisao` (indicado em cada questão)
- Gerado em 2026-11-09 por `tools/build_notebooklm.py` a partir de `banco-questoes/`


### AUT-000041 — item 5.1 — dificuldade facil
*Questão autoral — estilo Cesgranrio (criada pelo projeto; não é questão aplicada pela banca) · status: validada*

Em uma oficina de levantamento de requisitos de um sistema de gestão de manutenção, foram registradas as seguintes necessidades:

I – O sistema deve calcular o tempo de parada de um equipamento a partir das horas de início e de fim.
II – O sistema deve responder às consultas de ordens de serviço em até 2 segundos em 95% das requisições.
III – O sistema deve permitir o cadastro de uma ordem de serviço.
IV – Os dados devem trafegar criptografados entre o aplicativo e o servidor.

São requisitos não funcionais apenas os indicados em

A) I e III.
B) II e IV.
C) I e II.
D) III e IV.
E) I, II e III.

### AUT-000042 — item 5.1 — dificuldade facil
*Questão autoral — estilo Cesgranrio (criada pelo projeto; não é questão aplicada pela banca) · status: validada*

Em uma oficina de priorização com a técnica MoSCoW, a equipe discute o requisito "enviar relatório mensal por e-mail". Concluiu-se que ele é importante para os usuários, mas o produto pode ser lançado sem ele, com a geração manual do relatório como alternativa temporária.

Na técnica MoSCoW, esse requisito deve ser classificado como

A) Must have.
B) Could have.
C) Won't have.
D) Should have.
E) Need to have.

### AUT-000043 — item 5.2 — dificuldade facil
*Questão autoral — estilo Cesgranrio (criada pelo projeto; não é questão aplicada pela banca) · status: validada*

O modelo em V é uma variação sequencial do modelo em cascata que associa cada fase de desenvolvimento a um nível de teste correspondente.

Nesse modelo, o teste de aceitação está associado à fase de

A) requisitos.
B) projeto arquitetural.
C) projeto detalhado.
D) implementação.
E) especificação do sistema.

### AUT-000044 — item 5.2 — dificuldade media
*Questão autoral — estilo Cesgranrio (criada pelo projeto; não é questão aplicada pela banca) · status: validada*

Uma empresa vai desenvolver um sistema com tecnologia ainda pouco dominada e com requisitos incertos. A direção quer que, a cada ciclo, sejam definidos objetivos e alternativas, avaliados os riscos (com protótipos e simulações), desenvolvido e verificado um incremento e planejada a volta seguinte. A decisão de prosseguir depende da análise de riscos.

O modelo de ciclo de vida que melhor atende a essa abordagem é o

A) modelo em cascata, no qual as fases são executadas uma única vez, em sequência, da análise à manutenção.
B) modelo de prototipação, no qual o protótipo é refinado, a cada versão, até se transformar no produto final.
C) modelo incremental, no qual o produto é entregue em partes sucessivas, sem análise formal de riscos a cada ciclo.
D) modelo em V, no qual cada fase de desenvolvimento tem um nível de teste correspondente na etapa de verificação.
E) modelo em espiral, orientado a riscos, em que cada volta repete objetivos, riscos, desenvolvimento e planejamento.

### AUT-000045 — item 5.3 — dificuldade dificil
*Questão autoral — estilo Cesgranrio (criada pelo projeto; não é questão aplicada pela banca) · status: validada*

Considere o código em Python a seguir.

```python
class Maquina:
    def __init__(self, tag): self.tag = tag
    def estado(self): return "Máquina " + self.tag + " em operação"
    def alarme(self): return "ALARME: " + self.estado()

class Bomba(Maquina):
    def estado(self): return "Bomba " + self.tag + " pressurizada"

class Compressor(Bomba):
    def alarme(self): return super().alarme() + " [compressor]"

for m in [Maquina("M1"), Bomba("P1"), Compressor("C1")]:
    print(m.alarme())
```

A saída produzida pelas três linhas impressas é

A) ALARME: Máquina M1 em operação / ALARME: Máquina P1 em operação / ALARME: Máquina C1 em operação [compressor]
B) ALARME: Máquina M1 em operação / ALARME: Bomba P1 pressurizada / ALARME: Máquina C1 em operação [compressor]
C) ALARME: Máquina M1 em operação / ALARME: Bomba P1 pressurizada / ALARME: Bomba C1 pressurizada [compressor]
D) ALARME: Máquina M1 em operação / ALARME: Bomba P1 pressurizada / ALARME: Bomba C1 pressurizada
E) ALARME: Máquina M1 em operação / ALARME: Bomba P1 pressurizada / erro, pois Bomba não define o método alarme()

### AUT-000046 — item 5.3 — dificuldade media
*Questão autoral — estilo Cesgranrio (criada pelo projeto; não é questão aplicada pela banca) · status: validada*

Em um sistema de atendimento a chamados, o caso de uso "Registrar chamado" sempre exige que o usuário seja autenticado. Além disso, em algumas situações, o usuário pode anexar um arquivo ao chamado, mas isso não é obrigatório.

No diagrama de casos de uso da UML, a relação de "Registrar chamado" com "Autenticar usuário" e com "Anexar arquivo" deve ser modelada, respectivamente, como

A) extensão (extend) e inclusão (include).
B) generalização e associação.
C) inclusão (include) e generalização.
D) inclusão (include) e extensão (extend).
E) associação e inclusão (include).

### AUT-000047 — item 5.4 — dificuldade dificil
*Questão autoral — estilo Cesgranrio (criada pelo projeto; não é questão aplicada pela banca) · status: validada*

A complexidade ciclomática de McCabe de um método pode ser calculada como o número de decisões mais um. Considere o método a seguir, em Python.

```python
def classificar(leituras, limite):
    alertas = 0
    for x in leituras:
        if x > limite:
            alertas += 1
            if alertas > 3:
                break
        elif x < 0:
            continue
    while alertas > 0:
        alertas -= 1
        if alertas == 2:
            return "parcial"
    return "ok"
```

Considerando como decisões as estruturas `for`, `while`, `if` e `elif`, a complexidade ciclomática desse método é

A) 7.
B) 6.
C) 5.
D) 8.
E) 4.

### AUT-000048 — item 5.4 — dificuldade media
*Questão autoral — estilo Cesgranrio (criada pelo projeto; não é questão aplicada pela banca) · status: validada*

Um campo de um sistema de estoque, "quantidade de peças", aceita valores inteiros de 1 a 99, inclusive. Ao projetar testes de caixa-preta pela técnica de análise do valor limite, a equipe deseja exercitar as fronteiras, ou seja, os valores nos limites e os valores imediatamente fora deles.

Os valores que cumprem esse objetivo são

A) 1, 50 e 99.
B) 0, 50 e 100.
C) 0, 1, 99 e 100.
D) 1, 2, 98 e 99.
E) 0 e 100, apenas.

### AUT-000049 — item 5.4 — dificuldade media
*Questão autoral — estilo Cesgranrio (criada pelo projeto; não é questão aplicada pela banca) · status: validada*

Em um projeto de software, ocorreram duas atividades:

I – Em uma reunião formal, a equipe revisa o documento de projeto e o compara com a especificação de requisitos, sem executar nenhum código.
II – Em uma demonstração, o usuário opera o sistema e avalia se ele atende à sua necessidade de negócio.

I e II correspondem, respectivamente, a

A) validação, por técnica dinâmica, e verificação, por técnica estática.
B) verificação, por técnica dinâmica, e validação, por técnica estática.
C) validação e validação, ambas por técnicas estáticas.
D) verificação e verificação, ambas por técnicas dinâmicas.
E) verificação, por técnica estática (revisão), e validação.

### AUT-000050 — item 5.5 — dificuldade media
*Questão autoral — estilo Cesgranrio (criada pelo projeto; não é questão aplicada pela banca) · status: validada*

Em uma equipe de desenvolvimento, o código de cada integrante é integrado várias vezes ao dia ao repositório compartilhado. Cada alteração aciona um pipeline automatizado de compilação, testes e análise estática. Quando todas as verificações são bem-sucedidas, a alteração é implantada automaticamente em produção, sem nenhuma aprovação manual.

A prática que descreve a implantação automática em produção, nessas condições, é a

A) integração contínua, que se limita a compilar e testar o código integrado ao repositório.
B) implantação contínua, em que toda alteração aprovada nos testes vai a produção sem aprovação manual.
C) entrega contínua (continuous delivery), em que a implantação em produção depende de uma decisão manual de negócio.
D) estratégia canário, que consiste em liberar a alteração apenas a um conjunto de testadores internos.
E) gerência de configuração, que se restringe a versionar os arquivos do projeto no repositório.

### AUT-000106 — item 5.4 — dificuldade media
*Questão autoral — estilo Cesgranrio (criada pelo projeto; não é questão aplicada pela banca) · status: em_revisao*

Considere o código a seguir, em Python.

```python
def classifica(n):
    if n < 0:
        return "negativo"
    for i in range(3):
        if n % 2 == 0:
            n += i
    return "processado"
```

A complexidade ciclomática de McCabe dessa função, que indica o número de caminhos linearmente independentes a serem exercitados em um teste de caminho básico, é

A) 3
B) 4
C) 5
D) 6
E) 2

### AUT-000107 — item 5.5 — dificuldade facil
*Questão autoral — estilo Cesgranrio (criada pelo projeto; não é questão aplicada pela banca) · status: em_revisao*

Uma equipe adotou, em seu ambiente de desenvolvimento, a prática de integração contínua (CI).

Essa prática consiste em

A) implantar automaticamente em produção toda alteração enviada pelos desenvolvedores, sem a necessidade de testes automatizados.
B) manter ramos de desenvolvimento longos e integrá-los somente no fim do projeto.
C) lançar uma nova versão completa do sistema a cada trimestre.
D) submeter o código à revisão manual de um único especialista antes de qualquer commit, sem nenhuma verificação automatizada posterior.
E) integrar com frequência as alterações em um repositório compartilhado, com *build* e testes automáticos a cada integração.

### OFI-000024 — item 5.1 — dificuldade media
*Oficial — Fundação Cesgranrio, Transpetro PSP/Terra 002/2023 (Edital nº 2), Análise de Sistemas — Processos de Negócios, 2023, Prova 6, questão 24 (gabarito: oficial (PDF de gabarito da Cesgranrio, alterado em 9/01/2024), conferido na T13) · status: em_revisao*

Uma empresa está desenvolvendo um software para lançar mísseis de plataformas móveis e rastreá-los até os alvos. A equipe que irá desenvolver esse software criou uma lista contendo vários requisitos que foram obtidos durante um encontro com técnicos da área militar.

Dentre os requisitos funcionais dessa lista, está o de que

A) a velocidade planejada de um míssil deve ser calculada segundo a equação v(t) = vo + at.
B) a interface com os operadores do centro de controle deve fornecer imagens por meio de câmeras de alta resolução e de infravermelho.
C) as novas versões do software não poderão ser carregadas nas plataformas de lançamento enquanto houver mísseis no ar.
D) o atraso máximo no envio de um comando tem de ser de um milésimo de segundo.
E) os dados devem trafegar de forma criptografada no padrão AES com 256 bits.

### OFI-000025 — item 5.2 — dificuldade facil
*Oficial — Fundação Cesgranrio, Transpetro PSP/Terra 002/2023 (Edital nº 2), Análise de Sistemas — Processos de Negócios, 2023, Prova 6, questão 25 (gabarito: oficial (PDF de gabarito da Cesgranrio, alterado em 9/01/2024), conferido na T13) · status: em_revisao*

Alguns modelos de ciclo de vida de software se caracterizam por serem processos de desenvolvimento sequenciais, isto é, cada fase do processo deve ser concluída antes do início da próxima.

Nessa categoria de processos, estão os modelos

A) incremental e em cascata
B) iterativo e em espiral
C) ágil e em espiral
D) em V e em cascata
E) em V e incremental

### OFI-000026 — item 5.4 — dificuldade facil
*Oficial — Fundação Cesgranrio, Transpetro PSP/Terra 002/2023 (Edital nº 2), Análise de Sistemas — Processos de Negócios, 2023, Prova 6, questão 31 (gabarito: oficial (PDF de gabarito da Cesgranrio, alterado em 9/01/2024), conferido na T13) · status: em_revisao*

Uma equipe de desenvolvimento pretende convidar um conjunto de representantes dos usuários finais de uma solução, que aparentemente está completamente desenvolvida, para testar sua última versão antes de disponibilizá-la no mercado. Caso essa versão seja aprovada, será colocada em produção.

A situação descrita faz referência aos testes

A) unitários
B) de aceitação
C) de desempenho
D) de integração
E) de sistema

### OFI-000027 — item 5.3 — dificuldade facil
*Oficial — Fundação Cesgranrio, Transpetro PSP/Terra 002/2023 (Edital nº 2), Análise de Sistemas — Processos de Negócios, 2023, Prova 6, questão 32 (gabarito: oficial (PDF de gabarito da Cesgranrio, alterado em 9/01/2024), conferido na T13) · status: em_revisao*

Um desenvolvedor pretende criar três métodos com o mesmo nome em uma mesma classe, mas com parâmetros diferentes. Para essa tarefa, utilizará uma técnica que faz parte do paradigma de orientação a objetos.
Qual o nome da técnica a ser usada pelo desenvolvedor?

A) Herança
B) Interface
C) Instanciação
D) Sobrecarga
E) Sobrescrita

### OFI-000049 — item 5.2 — dificuldade media
*Oficial — Fundação Cesgranrio, Transpetro PSP RH 2018.1 (Edital nº 1), Analista de Sistemas Júnior — Processos de Negócio, 2018, Prova 15, questão 23 (gabarito: oficial (PDF de gabarito da Cesgranrio, alterado em 09/05/2018), conferido na T13) · status: em_revisao*

O Processo Unificado de desenvolvimento de software é dividido em quatro fases: concepção (inception), elaboração, construção e transição.
Um dos objetivos da fase de elaboração é

A) definir a arquitetura
B) estimar o custo total
C) estabelecer o escopo do projeto
D) minimizar custos de desenvolvimento
E) converter bancos de dados operacionais

### OFI-000050 — item 5.4 — dificuldade media
*Oficial — Fundação Cesgranrio, Transpetro PSP RH 2018.1 (Edital nº 1), Analista de Sistemas Júnior — Processos de Negócio, 2018, Prova 15, questão 24 (gabarito: oficial (PDF de gabarito da Cesgranrio, alterado em 09/05/2018), conferido na T13) · status: em_revisao*

Entre as técnicas de teste de software, aquela que gera versões levemente modificadas de um programa sob teste e exercita tanto o programa original quanto os programas modificados, procurando diferenças entre essas formas, é conhecida como testes

A) aleatórios
B) exploratórios
C) de mutação
D) de perfil operacional
E) baseados em fluxo de controle

### OFI-000051 — item 5.4 — dificuldade media
*Oficial — Fundação Cesgranrio, Transpetro PSP RH 2018.1 (Edital nº 1), Analista de Sistemas Júnior — Processos de Negócio, 2018, Prova 15, questão 25 (gabarito: oficial (PDF de gabarito da Cesgranrio, alterado em 09/05/2018), conferido na T13) · status: em_revisao*

Uma das medidas de qualidade do código de um software é a Complexidade, que pode ser medida por meio da complexidade ciclomática.
Considere um grafo de fluxo que possui 5 nós e 12 arcos.
Qual a complexidade ciclomática desse grafo?

A) 9
B) 11
C) 15
D) 17
E) 19

### OFI-000052 — item 5.1 — dificuldade media
*Oficial — Fundação Cesgranrio, Transpetro PSP RH 2018.1 (Edital nº 1), Analista de Sistemas Júnior — Processos de Negócio, 2018, Prova 15, questão 27 (gabarito: oficial (PDF de gabarito da Cesgranrio, alterado em 09/05/2018), conferido na T13) · status: em_revisao*

Casos de uso são das mais importantes ferramentas de especificação de sistemas em uso atualmente, constituindo representações textuais em forma de narrativa.
Tais representações demonstram

A) uma interação entre um ator e o sistema
B) um único cenário de uso do sistema por um ator
C) um comportamento interno do sistema quando o ator o utiliza
D) os estados dos objetos do sistema quando são usados
E) a interação entre os objetos do sistema por meio de mensagens

### OFI-000053 — item 5.3 — dificuldade media
*Oficial — Fundação Cesgranrio, Transpetro PSP RH 2018.1 (Edital nº 1), Analista de Sistemas Júnior — Processos de Negócio, 2018, Prova 15, questão 29 (gabarito: oficial (PDF de gabarito da Cesgranrio, alterado em 09/05/2018), conferido na T13) · status: em_revisao*

Qual a propriedade, típica da orientação a objeto, que habilita uma quantidade de operações diferentes a ter o mesmo nome, diminuindo o acoplamento entre objetos?

A) Encapsulamento
B) Especialização
C) Herança
D) Padrões de projeto
E) Polimorfismo

### OFI-000064 — item 5.4 — dificuldade facil
*Oficial — Fundação Cesgranrio, Caixa Econômica Federal, Edital 1/2021/NM, Técnico Bancário Novo — Tecnologia da Informação, 2021, Caderno de Tecnologia da Informação (questões 31 a 60), questão 31 (gabarito: definitivo (fonte oficial: portal da Cesgranrio); recursos sem alteração nem anulação) · status: em_revisao*

No âmbito de DevOps, o termo "shift left testing" significa que os testes devem

A) ser feitos junto com a entrada em operação do produto.
B) ser feitos apenas no ambiente de desenvolvimento.
C) ser feitos apenas por meio de ferramentas de automação de testes.
D) ser feitos desde as fases iniciais do ciclo de vida do produto.
E) dirigir o desenvolvimento do produto.

### OFI-000065 — item 5.1 — dificuldade media
*Oficial — Fundação Cesgranrio, Caixa Econômica Federal, Edital 1/2021/NM, Técnico Bancário Novo — Tecnologia da Informação, 2021, Caderno de Tecnologia da Informação (questões 31 a 60), questão 33 (gabarito: definitivo (fonte oficial: portal da Cesgranrio); recursos sem alteração nem anulação) · status: em_revisao*

Em quais fases do Processo Unificado (UP) o workflow (disciplina) de requisitos é executado?

A) Inception, Elaboration, Construction e Transition
B) Inception, Elaboration e Construction, somente
C) Elaboration e Construction, somente
D) Elaboration, somente
E) Inception, somente

### OFI-000066 — item 5.3 — dificuldade media
*Oficial — Fundação Cesgranrio, Caixa Econômica Federal, Edital 1/2021/NM, Técnico Bancário Novo — Tecnologia da Informação, 2021, Caderno de Tecnologia da Informação (questões 31 a 60), questão 36 (gabarito: definitivo (fonte oficial: portal da Cesgranrio); recursos sem alteração nem anulação) · status: em_revisao*

Uma aplicação Java deve oferecer suporte para que os serviços disponibilizados por objetos que consomem muitos recursos possam ser requisitados, indiretamente, pelas demais classes (clientes) dessa aplicação. As soluções para esse problema de design devem impedir que esses objetos sejam diretamente referenciados pelos clientes, pois eles só devem ser instanciados quando seus serviços forem realmente solicitados.
A solução que a equipe de desenvolvimento propôs irá fornecer substitutos para esses objetos reais, de modo a controlar o acesso a eles. As classes dos objetos reais e dos objetos substitutos devem implementar uma mesma interface. Dessa forma, os substitutos servirão de representantes dos objetos reais. Eles receberão requisições dos clientes e as delegarão aos objetos reais.
A solução proposta pela equipe de desenvolvimento foi baseada no padrão de projeto

A) Facade
B) Adapter
C) Proxy
D) Bridge
E) Composite

### OFI-000069 — item 5.1 — dificuldade facil
*Oficial — Fundação Cesgranrio, Caixa Econômica Federal, Edital 1/2021/NM, Técnico Bancário Novo — Tecnologia da Informação, 2021, Caderno de Tecnologia da Informação (questões 31 a 60), questão 40 (gabarito: definitivo (fonte oficial: portal da Cesgranrio); recursos sem alteração nem anulação) · status: em_revisao*

Uma equipe de desenvolvimento precisa informar a quantidade de pontos de função do software que será mantido por uma empresa.
Na contagem por ponto de função, um dos itens a ser considerado é o de

A) contagem das linhas do código
B) contagem de erros do software
C) funcionalidades implementadas, sob o ponto de vista do desenvolvedor
D) funcionalidades implementadas, sob o ponto de vista do usuário
E) funcionalidades implementadas, sob o ponto de vista do testador

### OFI-000070 — item 5.4 — dificuldade media
*Oficial — Fundação Cesgranrio, Caixa Econômica Federal, Edital 1/2021/NM, Técnico Bancário Novo — Tecnologia da Informação, 2021, Caderno de Tecnologia da Informação (questões 31 a 60), questão 53 (gabarito: definitivo (fonte oficial: portal da Cesgranrio); recursos sem alteração nem anulação) · status: em_revisao*

O Desenvolvimento Dirigido por Testes se caracteriza por

A) manter sem modificação um arquivo de código fonte que já tenha sido aprovado em um teste.
B) escrever o código fonte e, baseado na análise do código, escrever os testes.
C) escrever as histórias do usuário na forma de testes.
D) projetar os casos de teste antes de criar o código fonte.
E) repetir todos os testes a cada modificação do código fonte.

### OFI-000071 — item 5.5 — dificuldade facil
*Oficial — Fundação Cesgranrio, Caixa Econômica Federal, Edital 1/2021/NM, Técnico Bancário Novo — Tecnologia da Informação, 2021, Caderno de Tecnologia da Informação (questões 31 a 60), questão 54 (gabarito: definitivo (fonte oficial: portal da Cesgranrio); recursos sem alteração nem anulação) · status: em_revisao*

Entre as principais ferramentas de gestão de configuração de software, estão os sistemas de controle de versão, como o svn ou cvs.
Nesses sistemas, o comando de registrar as mudanças locais em um repositório é denominado

A) branch
B) commit
C) save
D) store
E) update

### OFI-000072 — item 5.4 — dificuldade facil
*Oficial — Fundação Cesgranrio, Caixa Econômica Federal, Edital 1/2021/NM, Técnico Bancário Novo — Tecnologia da Informação, 2021, Caderno de Tecnologia da Informação (questões 31 a 60), questão 57 (gabarito: definitivo (fonte oficial: portal da Cesgranrio); recursos sem alteração nem anulação) · status: em_revisao*

O teste de unidade tem como finalidade testar os componentes mais simples do software

A) de forma isolada.
B) quanto à sua coesão.
C) quanto ao seu acoplamento.
D) quando unificados na versão a ser lançada.
E) quanto à sua capacidade de responder a entradas únicas.

### OFI-000092 — item 5.1 — dificuldade media
*Oficial — Fundação Cesgranrio, BNDES, Edital 1/2024, Analista — Análise de Sistemas: Desenvolvimento, 2024, Prova 3 (manhã), questão 40 (gabarito: final após recursos (documento da banca, via espelho QConcursos)) · status: em_revisao*

Uma equipe de desenvolvimento está trabalhando em um sistema de gestão de pedidos, no qual é necessário implementar uma transação que gera um relatório detalhado de vendas. Esse relatório contém informações sobre as vendas do dia, agrupadas por categoria de produto, cliente e vendedor. O usuário pode selecionar a data específica como entrada para gerar o relatório. O relatório gerado não permite navegação ou consulta adicional e é produzido para ser impresso.

Dada a descrição da transação, qual tipo de ponto de função deve ser contado?

A) Consulta Externa
B) Entrada Externa
C) Impressão Externa
D) Relatório Externo
E) Saída Externa

### OFI-000093 — item 5.5 — dificuldade media
*Oficial — Fundação Cesgranrio, BNDES, Edital 1/2024, Analista — Análise de Sistemas: Desenvolvimento, 2024, Prova 3 (manhã), questão 41 (gabarito: final após recursos (documento da banca, via espelho QConcursos)) · status: em_revisao*

Uma empresa de tecnologia está desenvolvendo uma nova aplicação que será baseada em microsserviços e distribuída em vários servidores na nuvem. Os líderes do projeto decidiram usar uma solução com orquestração de contêineres e precisam explicar como essa solução funciona para a equipe e para os clientes.

Considerando-se esse contexto, como descrever as funcionalidades que caracterizam as ferramentas de conteinerização e de orquestração?

A) Ferramentas de conteinerização, como Docker, são responsáveis por criar e empacotar aplicações e suas dependências em contêineres isolados, enquanto ferramentas de orquestração, como Kubernetes, gerenciam a distribuição, o escalonamento automático e a resiliência desses contêineres em um cluster de servidores.
B) Ferramentas de orquestração, como Docker, permitem criar e empacotar aplicações em contêineres isolados, enquanto ferramentas de conteinerização, como Kubernetes, gerenciam a distribuição e escalonamento desses contêineres em um ambiente de produção.
C) Ferramentas de conteinerização, como Kubernetes, são responsáveis por gerenciar a distribuição e escalonamento dos contêineres em um cluster, enquanto ferramentas de orquestração, como Podman, criam e empacotam as aplicações em contêineres isolados.
D) Ferramentas de orquestração, como Podman, criam e empacotam contêineres isolados, enquanto ferramentas de conteinerização, como Docker, gerenciam a escalabilidade e a resiliência dos contêineres em um ambiente distribuído.
E) Ferramentas de conteinerização, como Docker, são usadas para criar uma rede de contêineres interligados, enquanto ferramentas de orquestração, como Kubernetes, servem apenas para monitorar o desempenho dos contêineres em um cluster.

### OFI-000095 — item 5.3 — dificuldade dificil
*Oficial — Fundação Cesgranrio, BNDES, Edital 1/2024, Analista — Análise de Sistemas: Desenvolvimento, 2024, Prova 3 (manhã), questão 43 (gabarito: final após recursos (documento da banca, via espelho QConcursos)) · status: em_revisao*

Um desenvolvedor está trabalhando em um sistema onde o padrão Façade está sendo usado para encapsular como um conjunto de objetos interage de forma fracamente acoplada. Verificando as especificações, ele percebeu que esse padrão não atendia os requisitos do projeto, já que era necessário um comportamento cooperativo e um protocolo multidirecional, além de evitar que os objetos interagissem de forma explícita uns com os outros.

Considerando-se esse contexto, o desenvolvedor deve corrigir o sistema implementando o padrão

A) Bridge
B) Composite
C) Decorator
D) Mediator
E) Strategy

### OFI-000096 — item 5.4 — dificuldade facil
*Oficial — Fundação Cesgranrio, BNDES, Edital 1/2024, Analista — Análise de Sistemas: Desenvolvimento, 2024, Prova 3 (manhã), questão 44 (gabarito: final após recursos (documento da banca, via espelho QConcursos)) · status: em_revisao*

Em um projeto de desenvolvimento de software, os desenvolvedores perceberam que, ao integrar diferentes módulos do sistema, o comportamento esperado não estava sendo alcançado. Os desenvolvedores notaram que as funções individuais dentro de cada módulo não estavam retornando os resultados esperados, mesmo antes da integração.

Para identificar a origem dos problemas e corrigi-los, devem ser priorizados os testes de

A) aceitação
B) independência
C) modularidade
D) carga
E) unidade

### OFI-000097 — item 5.3 — dificuldade media
*Oficial — Fundação Cesgranrio, BNDES, Edital 1/2024, Analista — Análise de Sistemas: Desenvolvimento, 2024, Prova 3 (manhã), questão 45 (gabarito: final após recursos (documento da banca, via espelho QConcursos)) · status: em_revisao*

Analisando o projeto de um componente de software, uma equipe de qualidade determinou que ele modificava diretamente os dados internos de outro componente.

Essa forma de acoplamento é conhecida como acoplamento

A) de comunicação
B) de conteúdo
C) de controle
D) externo
E) funcional

### OFI-000107 — item 5.4 — dificuldade media
*Oficial — Fundação Cesgranrio, Petrobras PSP RH 2017.2 (prova de 18/03/2018), Analista de Sistemas Júnior — Processos de Negócio, 2018, Prova 3, questão 45 (gabarito: de espelho (PCI), fornecido pelo usuário; preliminar/definitivo não indicado; anulações não verificadas; não validado contra a banca) · status: em_revisao*

Ao longo do desenvolvimento de um software, um gerente de projeto percebeu que havia dificuldades para garantir que os produtos gerados refletissem adequadamente os requisitos especificados. Investigando mais, concluiu que seu processo de desenvolvimento precisaria ser melhorado. Decidiu, então, implantar em sua equipe um processo de suporte de software que realizasse atividades específicas para confirmar, com evidência objetiva, que os requisitos especificados fossem cumpridos.
O processo implantado por esse gerente é o de

A) auditoria
B) garantia de qualidade
C) resolução de problemas
D) validação
E) verificação

### OFI-000108 — item 5.1 — dificuldade media
*Oficial — Fundação Cesgranrio, Petrobras PSP RH 2017.2 (prova de 18/03/2018), Analista de Sistemas Júnior — Processos de Negócio, 2018, Prova 3, questão 50 (gabarito: de espelho (PCI), fornecido pelo usuário; preliminar/definitivo não indicado; anulações não verificadas; não validado contra a banca) · status: em_revisao*

Um analista em treinamento apresenta a seguinte descrição para alguns requisitos de um sistema on-line para venda de bilhetes de uma rede de cinemas em que cada cinema apresenta mais de um filme, e cada filme é apresentado em mais de um cinema com lugares marcados.

Quando o usuário entrar no site da rede, um menu é apresentado com os filmes e cinemas disponíveis. O usuário seleciona o filme a que deseja assistir e entra com o número de cartão de crédito. A validade do cartão é verificada e o bilhete é emitido. O sistema encerra a operação com a mensagem: obrigado, divirta-se.

Embora haja falhas nessa descrição ainda incipiente, o instrutor solicitou que o analista a estendesse com exemplos de possíveis requisitos não funcionais para o sistema.
Qual é a sentença que NÃO atende à solicitação do instrutor?

A) O tempo máximo de espera do sistema para a inserção do número do cartão de crédito deve ser maior do que oito segundos e menor do que 15 segundos.
B) O sistema deve estar disponível por 99,5% do tempo durante as 24 horas do dia, sete dias por semana.
C) O formato do bilhete deve seguir o padrão definido na legislação municipal pertinente.
D) O usuário deve selecionar o cinema em que deseja assistir ao filme.
E) O sistema deve ser compatível com operação em smartphone.

### OFI-000109 — item 5.2 — dificuldade media
*Oficial — Fundação Cesgranrio, Petrobras PSP RH 2017.2 (prova de 18/03/2018), Analista de Sistemas Júnior — Processos de Negócio, 2018, Prova 3, questão 51 (gabarito: de espelho (PCI), fornecido pelo usuário; preliminar/definitivo não indicado; anulações não verificadas; não validado contra a banca) · status: em_revisao*

O chefe dos desenvolvedores de sistemas de uma empresa acompanhou o seguinte diálogo entre um de seus subordinados, um usuário e o diretor de operações.

Diretor – Acho que já poderíamos começar o desenvolvimento daquele sistema que o departamento de esportes pediu.
Usuário – Não é cedo demais? Ainda não temos todas as funcionalidades bem definidas.
Desenvolvedor – É verdade, mas acho que já é possível especificar e implementar algumas funcionalidades mais importantes e construir uma primeira versão até o final do mês. Depois acrescentaríamos outras funcionalidades à medida que as fôssemos construindo, gerando, a partir da experiência do uso, versões sucessivas e cada vez mais completas.
Diretor – Acho isso ótimo, assim já teremos uma noção do impacto que o sistema poderá causar no desempenho dos atletas. Comecemos logo, não temos um efetivo tão grande em TI.
Usuário – OK, vamos em frente, mas não contem nada para aquele especialista em risco. Já temos muito trabalho pela frente. Nossa estrutura ainda não suporta esse tipo de cuidado; se entrarmos nessa, o projeto vai atrasar. E mantenham o contato e o foco no objetivo: um produto simples, mas de qualidade.

A partir desse episódio e refletindo sobre o que ouvira, o chefe dos desenvolvedores deverá optar pelo modelo de processo de software

A) RAD
B) incremental
C) cascata
D) espiral
E) baseado em componentes

### OFI-000110 — item 5.1 — dificuldade media
*Oficial — Fundação Cesgranrio, Petrobras PSP RH 2017.2 (prova de 18/03/2018), Analista de Sistemas Júnior — Processos de Negócio, 2018, Prova 3, questão 55 (gabarito: de espelho (PCI), fornecido pelo usuário; preliminar/definitivo não indicado; anulações não verificadas; não validado contra a banca) · status: em_revisao*

O processo de desenvolvimento de requisitos pode ser dividido em 4 etapas: elicitação, análise, especificação e validação.
Qual prática da Engenharia de Requisitos está associada à etapa de análise?

A) Criar protótipos.
B) Identificar casos de uso.
C) Inspecionar documentos de requisitos.
D) Definir critérios de aceitação.
E) Registrar regras de negócio.

### OFI-000121 — item 5.1 — dificuldade media
*Oficial — Fundação Cesgranrio, Petrobras PSP-RH-1/2006 (aplicação em 07/05/2006), Analista de Sistemas Pleno — Processos, 2006, Caderno de Analista de Sistemas Pleno (questões 21 a 60), questão 49 (gabarito: de espelho (Estude Grátis); recursos não verificados; não validado contra a banca) · status: em_revisao*

Sobre a Análise e o Gerenciamento de Requisitos, é FALSO afirmar que:

A) quanto mais tarde for identificado um problema na análise de requisitos, maior será o custo com o retrabalho.
B) a elicitação é o processo de identificação e entendimento das necessidades e restrições dos usuários, enquanto que a especificação é o processo de formalização das necessidades e restrições dos usuários em requisitos funcionais de software.
C) na análise de requisitos o cliente utiliza as melhores práticas de engenharia de requisitos na tarefa de descrever suas necessidades.
D) o gerenciamento de requisitos corresponde ao conjunto de atividades que auxilia a equipe do projeto a identificar, controlar e rastrear os requisitos, bem como a fazer as alterações nos requisitos durante o projeto.
E) o gerenciamento de requisitos implica a alteração, inclusão e/ou exclusão de requisitos ao produto de software, o que pode levar a alterações de prazos, de recursos humanos, de equipamentos e de tecnologia.

### OFI-000122 — item 5.4 — dificuldade dificil
*Oficial — Fundação Cesgranrio, Petrobras PSP-RH-1/2006 (aplicação em 07/05/2006), Analista de Sistemas Pleno — Processos, 2006, Caderno de Analista de Sistemas Pleno (questões 21 a 60), questão 54 (gabarito: de espelho (Estude Grátis); recursos não verificados; não validado contra a banca) · status: em_revisao*

Uma estratégia de teste de software integra métodos de projeto de casos de teste em uma série bem planejada de passos, que resultam na construção bem sucedida de um software. O objetivo principal do projeto de casos de teste é originar um conjunto de testes que tenha a maior probabilidade de detectar erros no software. Sobre as estratégias e técnicas de teste de software, assinale a afirmativa correta.

A) O teste de caixa-preta enfoca a estrutura de controle do programa, tendo como exemplos o teste de caminho básico, que faz uso de grafos de para originar um conjunto de testes linearmente independentes que vão garantir a cobertura e a análise de valor-limite, que investiga a habilidade do programa de manipular dados no limite de aceitabilidade.
B) O teste de caixa-branca são projetados para validar os requisitos funcionais de funcionamento interno de um programa, tendo como exemplos o particionamento de equivalência, que divide o domínio de entrada em classes de dados que provavelmente exercitam função específica do software e o teste de matriz ortogonal, que fornece um método eficiente e sistemático para testar sistemas com pequeno número de parâmetros de entrada.
C) O teste de integração focaliza o esforço de verificação na menor unidade de projeto do software e, usando a descrição de projeto no nível de componente como guia, caminhos de controle importantes são testados para descobrir erros dentro dos limites do módulo. O teste fumaça é um exemplo de abordagem de teste de integração.
D) O teste de recuperação é um teste de sistema que força o software a falhar de diversos modos e verifica se a recuperação é adequadamente realizada, seja ela feita de forma automática (realizada pelo próprio sistema) ou requerendo intervenção humana.
E) A fase alpha de testes é realizada ainda no processo de desenvolvimento, nas instalações do desenvolvedor com os usuários finais e utilizando um ambiente controlado, enquanto a beta é realizada entre o término do desenvolvimento e a entrega do produto, nas instalações do desenvolvedor com um ambiente controlado pelo usuário final. Na fase gama são gerados pela equipe de desenvolvimento casos de teste que são realizados por grupos restritos de usuários finais.

### OFI-000123 — item 5.3 — dificuldade media
*Oficial — Fundação Cesgranrio, Petrobras PSP-RH-1/2006 (aplicação em 07/05/2006), Analista de Sistemas Pleno — Processos, 2006, Caderno de Analista de Sistemas Pleno (questões 21 a 60), questão 55 (gabarito: de espelho (Estude Grátis); recursos não verificados; não validado contra a banca) · status: em_revisao*

Fazendo uma comparação entre os recursos disponíveis na UML 1.4 e UML 2.0, conclui-se que a UML 2.0:

A) acrescentou dois novos diagramas de Interação: o diagrama Visão Geral da Interação e o diagrama de Tempo, sendo que o primeiro combina o fluxo de controle de um diagrama de Atividades com interações e ocorrências de interação e o segundo modela as mudanças de estado por uma linha de tempo para cada objeto em uma interação.
B) acrescentou três novos mecanismos de extensibilidade: estereótipos, que identificam um conjunto de qualidades que podem aparecer em diversos elementos dos diagramas; tagged values, que permitem acrescentar novos recursos a um elemento do diagrama; restrições, que definem regras para proteger a integridade de um elemento do diagrama.
C) substituiu o diagrama de Máquina de Estados de Protocolo e o diagrama Statechart, ambos da UML 1.4, pelo diagrama Máquina de Estados, que contém uma série de estados, as transições conectando os estados, o trigger para as transições, as atividades realizadas na execução das transições e as atividades realizadas no decorrer da duração de cada estado.
D) substituiu o diagrama de Pacotes da UML 1.4 por uma visão combinada dos diagramas de Componentes e de Implantação, em que os componentes são representados por artefatos e os nós e as conexões oferecem os locais de implantação e execução para os artefatos.
E) substituiu o diagrama de Componentes da UML 1.4 pelo diagrama Estrutura de Composição que modela as partes de uma classe, componente ou colaboração, incluindo os pontos de interação (portas) usados para acessar recursos da estrutura.

### OFI-000124 — item 5.3 — dificuldade media
*Oficial — Fundação Cesgranrio, Petroquímica Suape PSP nº 1/2012 (22/04/2012), Analista de Sistemas Júnior — Ênfase em Negócio, 2012, Prova 6, questão 34 (gabarito: de espelho (Estude Grátis), após recursos; não validado contra a banca) · status: em_revisao*

Um dos objetos da fase de projeto de sistemas de software é definir e organizar as partes desse sistema da maneira mais adequada possível. Relativamente a essas partes, devem ser maximizada e minimizada, respectivamente, as medidas

A) encapsulamento e coesão
B) encapsulamento e acoplamento
C) acoplamento e coesão
D) acoplamento e encapsulamento
E) coesão e encapsulamento

### OFI-000125 — item 5.1 — dificuldade media
*Oficial — Fundação Cesgranrio, Petroquímica Suape PSP nº 1/2012 (22/04/2012), Analista de Sistemas Júnior — Ênfase em Negócio, 2012, Prova 6, questão 36 (gabarito: de espelho (Estude Grátis), após recursos; não validado contra a banca) · status: em_revisao*

Na modelagem de sistemas, há um conjunto de atividades denominado Engenharia de Requisitos.
Nesse contexto, o propósito da validação de requisitos é

A) assegurar que os requisitos menos arriscados sejam considerados inicialmente no desenvolvimento.
B) assegurar que o produto de software sendo especificado está em conformidade com as necessidades dos usuários.
C) aumentar o nível de abstração na comunicação entre especialistas do domínio e engenheiros de requisitos.
D) definir formas de rastrear os requisitos a partir dos correspondentes artefatos de modelagem e de código eventualmente existentes.
E) maximizar o reúso de requisitos voláteis identificados em outros sistemas.

### OFI-000126 — item 5.3 — dificuldade dificil
*Oficial — Fundação Cesgranrio, Petroquímica Suape PSP nº 1/2012 (22/04/2012), Analista de Sistemas Júnior — Ênfase em Negócio, 2012, Prova 6, questão 37 (gabarito: de espelho (Estude Grátis), após recursos; não validado contra a banca) · status: em_revisao*

A modelagem de casos de uso é uma técnica adequada para detalhar requisitos funcionais de um sistema de software orientado a objetos através da decomposição funcional do comportamento desse sistema.
PORQUE
Na modelagem orientada a objetos, um modelo de classes conceituais apresenta classes que correspondem a conceitos do domínio do problema e que são compostas de atributos e métodos resultantes do processo de decomposição funcional.

Analisando-se as afirmações acima, conclui-se que

A) as duas afirmações são verdadeiras, e a segunda justifica a primeira.
B) as duas afirmações são verdadeiras, e a segunda não justifica a primeira.
C) a primeira afirmação é verdadeira, e a segunda é falsa.
D) a primeira afirmação é falsa, e a segunda é verdadeira.
E) as duas afirmações são falsas.
