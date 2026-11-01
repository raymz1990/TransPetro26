# Banco de questões — Módulo 5: Engenharia de Software (lote piloto, gabaritos comentados)

**Tipo:** questões **autorais** — **Questão autoral — estilo Cesgranrio.** **Status:** validada 10.

## Quadro de gabaritos

| Questão | ID | Gabarito | Item do edital | Dificuldade | Habilidade | Tipo | Status |
|---|---|---|---|---|---|---|---|
| 1 | AUT-000041 | B | 5.1 | Fácil | Compreensão | Cenário | Validada |
| 2 | AUT-000042 | D | 5.1 | Fácil | Aplicação | Cenário | Validada |
| 3 | AUT-000043 | A | 5.2 | Fácil | Memorização | Conceitual | Validada |
| 4 | AUT-000044 | E | 5.2 | Média | Aplicação | Cenário | Validada |
| 5 | AUT-000045 | C | 5.3 | Difícil | Resolução de problemas | Cálculo | Validada |
| 6 | AUT-000046 | D | 5.3 | Média | Aplicação | Cenário | Validada |
| 7 | AUT-000047 | A | 5.4 | Difícil | Resolução de problemas | Cálculo | Validada |
| 8 | AUT-000048 | C | 5.4 | Média | Aplicação | Cenário | Validada |
| 9 | AUT-000049 | E | 5.4 | Média | Análise | Comparativa | Validada |
| 10 | AUT-000050 | B | 5.5 | Média | Compreensão | Cenário | Validada |

---

## Questão 1 — AUT-000041

**AUT-000041** · Requisitos funcionais e não funcionais · item 5.1 · Fácil · Compreensão

*Questão autoral — estilo Cesgranrio.*

Em uma oficina de levantamento de requisitos de um sistema de gestão de manutenção, foram registradas as seguintes necessidades:  
  
I – O sistema deve calcular o tempo de parada de um equipamento a partir das horas de início e de fim.  
II – O sistema deve responder às consultas de ordens de serviço em até 2 segundos em 95% das requisições.  
III – O sistema deve permitir o cadastro de uma ordem de serviço.  
IV – Os dados devem trafegar criptografados entre o aplicativo e o servidor.  
  
São requisitos não funcionais apenas os indicados em

(A) I e III.  
(B) II e IV.  
(C) I e II.  
(D) III e IV.  
(E) I, II e III.  

### A. Gabarito

**B**

### B. Resolução comentada

**Requisitos funcionais** descrevem **o que o sistema faz** (serviços, funções, cálculos): I (calcular o tempo de parada) e III (cadastrar ordem de serviço). **Requisitos não funcionais** descrevem **como o sistema deve ser**: atributos de qualidade e condições de operação, como desempenho (II: tempo de resposta mensurável) e segurança (IV: criptografia do tráfego).

### C. Análise das alternativas

- **(A)** Incorreta. Calcular o tempo de parada (I) e cadastrar a ordem de serviço (III) são funções do sistema: requisitos funcionais.
- **(B)** Correta. II (desempenho) e IV (segurança) são atributos de qualidade: requisitos não funcionais.
- **(C)** Incorreta. Mistura um requisito funcional (I) com um não funcional (II).
- **(D)** Incorreta. Mistura um requisito funcional (III) com um não funcional (IV).
- **(E)** Incorreta. Classifica como não funcionais dois requisitos funcionais (I e III) e um não funcional (II).

### D. Fundamentação teórica

- **Módulo:** M05 — Engenharia de Software
- **Assunto:** Levantamento, análise e gerenciamento de requisitos: tipos de requisitos
- **Item do edital:** 5.1 (E5-042)
- **Arquivo de teoria:** `conteudo/05-engenharia-software/02-requisitos-software.md`
- **Referência:** Material teórico do projeto; normas ISO e princípios ISTQB não verificados em fonte primária (revisão do M05).

### E. Ponto de atenção para a prova

RF = **o que** o sistema faz (função, cálculo). RNF = **como** deve ser (desempenho, segurança, usabilidade...). RNF bem escritos são **mensuráveis** ("até 2 segundos").

### F. Revisão rápida

Funcional: serviço/função. Não funcional: atributo de qualidade (desempenho, segurança, usabilidade). Restrição: limitação imposta (tecnologia, prazo, norma).

### G. Tags

`m05` · `requisitos` · `funcional` · `nao-funcional` · `item-5.1` · `facil` · `compreensao` · `cenario` · `autoral`

**Verificação do gabarito:** Sem execução (questão conceitual); gabarito conferido contra o arquivo de teoria (validado).  
**Status de validação:** `validada`  
**Validação:** Aprovada pelo usuário em 2026-10-31 (lote piloto do M05); sem revisão por terceiros; ressalvas: normas ISO e princípios ISTQB sem fonte primária; interpretação dos itens 5.2 e 5.5 a confirmar.

---

## Questão 2 — AUT-000042

**AUT-000042** · Priorização de requisitos: MoSCoW · item 5.1 · Fácil · Aplicação

*Questão autoral — estilo Cesgranrio.*

Em uma oficina de priorização com a técnica MoSCoW, a equipe discute o requisito "enviar relatório mensal por e-mail". Concluiu-se que ele é importante para os usuários, mas o produto pode ser lançado sem ele, com a geração manual do relatório como alternativa temporária.  
  
Na técnica MoSCoW, esse requisito deve ser classificado como

(A) Must have.  
(B) Could have.  
(C) Won't have.  
(D) Should have.  
(E) Need to have.  

### A. Gabarito

**D**

### B. Resolução comentada

No **MoSCoW**, **Must have** é essencial (sem ele o produto não é viável), **Should have** é **importante**, mas não vital (pode haver alternativa temporária), **Could have** é **desejável**, de menor impacto se omitido, e **Won't have** é o que **não será entregue agora**. O requisito importante com alternativa manual é **Should have**.

### C. Análise das alternativas

- **(A)** Incorreta. Must have é essencial para a viabilidade do produto; o enunciado informa que o produto pode ser lançado sem ele.
- **(B)** Incorreta. Could have é apenas desejável, com pouco impacto se omitido; o requisito foi considerado importante.
- **(C)** Incorreta. Won't have é o que não será entregue neste ciclo; o requisito é importante e deve ser tratado como candidato à entrega.
- **(D)** Correta. Importante, mas não vital, com alternativa temporária: Should have.
- **(E)** Incorreta. "Need to have" não é categoria do MoSCoW.

### D. Fundamentação teórica

- **Módulo:** M05 — Engenharia de Software
- **Assunto:** Análise e priorização de requisitos (MoSCoW)
- **Item do edital:** 5.1 (E5-042) · itens secundários: 6.2
- **Arquivo de teoria:** `conteudo/05-engenharia-software/02-requisitos-software.md`
- **Referência:** Material teórico do projeto; normas ISO e princípios ISTQB não verificados em fonte primária (revisão do M05). Relação secundária com histórias do usuário (item 6.2).

### E. Ponto de atenção para a prova

MoSCoW: **M**ust (essencial), **S**hould (importante, com contorno), **C**ould (desejável), **W**on't (não agora). As vogais "o" são só para a pronúncia.

### F. Revisão rápida

Must: essencial. Should: importante, mas contornável. Could: desejável. Won't: fora deste ciclo.

### G. Tags

`m05` · `requisitos` · `moscow` · `priorizacao` · `item-5.1` · `item-6.2` · `facil` · `aplicacao` · `cenario` · `autoral`

**Verificação do gabarito:** Sem execução (questão conceitual); gabarito conferido contra o arquivo de teoria (validado).  
**Status de validação:** `validada`  
**Validação:** Aprovada pelo usuário em 2026-10-31 (lote piloto do M05); sem revisão por terceiros; ressalvas: normas ISO e princípios ISTQB sem fonte primária; interpretação dos itens 5.2 e 5.5 a confirmar.

---

## Questão 3 — AUT-000043

**AUT-000043** · Ciclo de vida: modelo em V · item 5.2 · Fácil · Memorização

*Questão autoral — estilo Cesgranrio.*

O modelo em V é uma variação sequencial do modelo em cascata que associa cada fase de desenvolvimento a um nível de teste correspondente.  
  
Nesse modelo, o teste de aceitação está associado à fase de

(A) requisitos.  
(B) projeto arquitetural.  
(C) projeto detalhado.  
(D) implementação.  
(E) especificação do sistema.  

### A. Gabarito

**A**

### B. Resolução comentada

No modelo em V, cada fase da descida (desenvolvimento) corresponde a um nível de teste na subida: **requisitos ↔ teste de aceitação**; **especificação do sistema ↔ teste de sistema**; **projeto arquitetural ↔ teste de integração**; **projeto detalhado ↔ teste de unidade**. A vantagem é planejar os testes desde o início; a limitação é a rigidez do cascata.

### C. Análise das alternativas

- **(A)** Correta. Requisitos ↔ teste de aceitação (validação com o usuário).
- **(B)** Incorreta. O projeto arquitetural corresponde ao teste de integração.
- **(C)** Incorreta. O projeto detalhado corresponde ao teste de unidade.
- **(D)** Incorreta. A implementação (codificação) fica no vértice do V; não há nível de teste de aceitação associado a ela.
- **(E)** Incorreta. A especificação do sistema corresponde ao teste de sistema.

### D. Fundamentação teórica

- **Módulo:** M05 — Engenharia de Software
- **Assunto:** Ciclo de vida de sistemas e seus paradigmas: modelo em V
- **Item do edital:** 5.2 (E5-043)
- **Arquivo de teoria:** `conteudo/05-engenharia-software/03-ciclo-de-vida.md`
- **Referência:** Material teórico do projeto; normas ISO e princípios ISTQB não verificados em fonte primária (revisão do M05).

### E. Ponto de atenção para a prova

Pares do V: **requisitos–aceitação**, **especificação–sistema**, **arquitetura–integração**, **projeto detalhado–unidade**.

### F. Revisão rápida

Modelo em V: requisitos↔aceitação; especificação↔sistema; arquitetura↔integração; detalhado↔unidade.

### G. Tags

`m05` · `ciclo-de-vida` · `modelo-em-v` · `testes` · `item-5.2` · `facil` · `memorizacao` · `conceitual` · `autoral`

**Verificação do gabarito:** Sem execução (questão conceitual); gabarito conferido contra o arquivo de teoria (validado).  
**Status de validação:** `validada`  
**Validação:** Aprovada pelo usuário em 2026-10-31 (lote piloto do M05); sem revisão por terceiros; ressalvas: normas ISO e princípios ISTQB sem fonte primária; interpretação dos itens 5.2 e 5.5 a confirmar.

---

## Questão 4 — AUT-000044

**AUT-000044** · Ciclo de vida: modelo em espiral · item 5.2 · Média · Aplicação

*Questão autoral — estilo Cesgranrio.*

Uma empresa vai desenvolver um sistema com tecnologia ainda pouco dominada e com requisitos incertos. A direção quer que, a cada ciclo, sejam definidos objetivos e alternativas, avaliados os riscos (com protótipos e simulações), desenvolvido e verificado um incremento e planejada a volta seguinte. A decisão de prosseguir depende da análise de riscos.  
  
O modelo de ciclo de vida que melhor atende a essa abordagem é o

(A) modelo em cascata, no qual as fases são executadas uma única vez, em sequência, da análise à manutenção.  
(B) modelo de prototipação, no qual o protótipo é refinado, a cada versão, até se transformar no produto final.  
(C) modelo incremental, no qual o produto é entregue em partes sucessivas, sem análise formal de riscos a cada ciclo.  
(D) modelo em V, no qual cada fase de desenvolvimento tem um nível de teste correspondente na etapa de verificação.  
(E) modelo em espiral, orientado a riscos, em que cada volta repete objetivos, riscos, desenvolvimento e planejamento.  

### A. Gabarito

**E**

### B. Resolução comentada

O **modelo em espiral** (Boehm) é **orientado a riscos**: cada volta determina objetivos, alternativas e restrições, avalia alternativas e reduz riscos (protótipos, simulações), desenvolve e verifica o produto da volta e planeja a próxima, com a decisão de seguir baseada na análise de riscos. É adequado a projetos grandes, complexos e incertos.

### C. Análise das alternativas

- **(A)** Incorreta. O cascata percorre as fases uma vez, em sequência, sem voltas e sem análise de riscos a cada ciclo; é pouco indicado para requisitos incertos.
- **(B)** Incorreta. A prototipação foca em validar requisitos com protótipos; não estrutura voltas com análise formal de riscos e decisão de prosseguir.
- **(C)** Incorreta. O modelo incremental entrega o produto em partes, mas não é, por definição, orientado à análise de riscos em cada ciclo.
- **(D)** Incorreta. O modelo em V é sequencial e enfatiza a relação entre fases e testes; compartilha a rigidez do cascata.
- **(E)** Correta. Voltas com objetivos, riscos, desenvolvimento e planejamento; decisão baseada em riscos.

### D. Fundamentação teórica

- **Módulo:** M05 — Engenharia de Software
- **Assunto:** Ciclo de vida de sistemas e seus paradigmas: modelo em espiral
- **Item do edital:** 5.2 (E5-043)
- **Arquivo de teoria:** `conteudo/05-engenharia-software/03-ciclo-de-vida.md`
- **Referência:** Material teórico do projeto; normas ISO e princípios ISTQB não verificados em fonte primária (revisão do M05). Interpretação do item 5.2 (paradigmas) a confirmar.

### E. Ponto de atenção para a prova

**Espiral = orientado a riscos**, com voltas e decisão de prosseguir pela análise de riscos. **Incremental/iterativo** entregam em partes ou refinam, mas não têm o risco como eixo.

### F. Revisão rápida

Espiral (Boehm): voltas com objetivos/alternativas, avaliação de riscos, desenvolvimento/verificação e planejamento da próxima volta.

### G. Tags

`m05` · `ciclo-de-vida` · `espiral` · `riscos` · `item-5.2` · `media` · `aplicacao` · `cenario` · `autoral`

**Verificação do gabarito:** Sem execução (questão conceitual); gabarito conferido contra o arquivo de teoria (validado).  
**Status de validação:** `validada`  
**Validação:** Aprovada pelo usuário em 2026-10-31 (lote piloto do M05); sem revisão por terceiros; ressalvas: normas ISO e princípios ISTQB sem fonte primária; interpretação dos itens 5.2 e 5.5 a confirmar.

---

## Questão 5 — AUT-000045

**AUT-000045** · Paradigma orientado a objetos: herança e ligação dinâmica · item 5.3 · Difícil · Resolução de problemas

*Questão autoral — estilo Cesgranrio.*

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

(A) ALARME: Máquina M1 em operação / ALARME: Máquina P1 em operação / ALARME: Máquina C1 em operação [compressor]  
(B) ALARME: Máquina M1 em operação / ALARME: Bomba P1 pressurizada / ALARME: Máquina C1 em operação [compressor]  
(C) ALARME: Máquina M1 em operação / ALARME: Bomba P1 pressurizada / ALARME: Bomba C1 pressurizada [compressor]  
(D) ALARME: Máquina M1 em operação / ALARME: Bomba P1 pressurizada / ALARME: Bomba C1 pressurizada  
(E) ALARME: Máquina M1 em operação / ALARME: Bomba P1 pressurizada / erro, pois Bomba não define o método alarme()  

### A. Gabarito

**C**

### B. Resolução comentada

A ligação do método é **dinâmica**: a versão de `estado()` executada depende do **tipo real** do objeto, mesmo quando chamada dentro de `alarme()` herdado de `Maquina`. (1) `Maquina("M1")`: `alarme()` de Maquina chama `estado()` de Maquina → "ALARME: Máquina M1 em operação". (2) `Bomba("P1")`: `alarme()` é herdado de Maquina, mas `self.estado()` resolve para a versão sobrescrita em Bomba → "ALARME: Bomba P1 pressurizada". (3) `Compressor("C1")`: `alarme()` de Compressor chama `super().alarme()` (de Maquina, via Bomba, que não o redefine), em que `self.estado()` resolve para o `estado()` de Bomba (herdado por Compressor) e, depois, acrescenta " [compressor]".

### C. Análise das alternativas

- **(A)** Incorreta. Supõe ligação estática: em `alarme()` de Maquina, `self.estado()` seria sempre a versão de Maquina. Em Python (e em OO em geral) a escolha depende do tipo real do objeto.
- **(B)** Incorreta. Acerta a segunda linha, mas, na terceira, ignora que Compressor herda `estado()` de Bomba (sobrescrito) e que `self.estado()` resolve para a versão de Bomba.
- **(C)** Correta. Ligação dinâmica nas três linhas, com `super()` na terceira.
- **(D)** Incorreta. Omite o acréscimo " [compressor]" feito pelo método sobrescrito em Compressor, que chama `super().alarme()` e concatena o texto.
- **(E)** Incorreta. Bomba herda `alarme()` de Maquina; não há erro de execução. O que falta em Bomba é só a redefinição, que é opcional.

### D. Fundamentação teórica

- **Módulo:** M05 — Engenharia de Software
- **Assunto:** Paradigma orientado a objetos: herança, sobrescrita e polimorfismo
- **Item do edital:** 5.3 (E5-044)
- **Arquivo de teoria:** `conteudo/05-engenharia-software/04-paradigmas.md`
- **Referência:** Material teórico do projeto; normas ISO e princípios ISTQB não verificados em fonte primária (revisão do M05). Exemplo análogo ao da seção 3.3 do material teórico.

### E. Ponto de atenção para a prova

**Sobrescrita + ligação dinâmica**: o método executado depende do **tipo real** do objeto, mesmo quando chamado de dentro de método herdado. `super()` chama a versão da superclasse, mas `self` continua sendo o objeto real.

### F. Revisão rápida

Chamada a `self.metodo()` é resolvida pelo tipo real. `super().metodo()` executa a versão da superclasse, com o mesmo objeto.

### G. Tags

`m05` · `orientacao-a-objetos` · `heranca` · `sobrescrita` · `polimorfismo` · `ligacao-dinamica` · `item-5.3` · `dificil` · `resolucao-de-problemas` · `calculo` · `autoral`

**Verificação do gabarito:** Código executado em Python 3 (saída conferida): ALARME: Máquina M1 em operação / ALARME: Bomba P1 pressurizada / ALARME: Bomba C1 pressurizada [compressor].  
**Status de validação:** `validada`  
**Validação:** Aprovada pelo usuário em 2026-10-31 (lote piloto do M05); sem revisão por terceiros; ressalvas: normas ISO e princípios ISTQB sem fonte primária; interpretação dos itens 5.2 e 5.5 a confirmar.

---

## Questão 6 — AUT-000046

**AUT-000046** · UML: diagrama de casos de uso (include e extend) · item 5.3 · Média · Aplicação

*Questão autoral — estilo Cesgranrio.*

Em um sistema de atendimento a chamados, o caso de uso "Registrar chamado" sempre exige que o usuário seja autenticado. Além disso, em algumas situações, o usuário pode anexar um arquivo ao chamado, mas isso não é obrigatório.  
  
No diagrama de casos de uso da UML, a relação de "Registrar chamado" com "Autenticar usuário" e com "Anexar arquivo" deve ser modelada, respectivamente, como

(A) extensão (extend) e inclusão (include).  
(B) generalização e associação.  
(C) inclusão (include) e generalização.  
(D) inclusão (include) e extensão (extend).  
(E) associação e inclusão (include).  

### A. Gabarito

**D**

### B. Resolução comentada

Na **inclusão (*include*)**, um caso de uso **sempre** usa o comportamento de outro (reuso): "Registrar chamado" sempre inclui "Autenticar usuário". Na **extensão (*extend*)**, um caso de uso **opcionalmente** amplia outro, em condições específicas: "Anexar arquivo" estende "Registrar chamado". A **generalização** representa especialização de atores ou de casos de uso, e a **associação** liga atores a casos de uso.

### C. Análise das alternativas

- **(A)** Incorreta. Inverte as relações: o comportamento obrigatório é include; o opcional é extend.
- **(B)** Incorreta. Generalização é especialização, e associação liga ator a caso de uso; nenhuma representa uso obrigatório ou opcional de outro caso de uso.
- **(C)** Incorreta. A primeira relação está correta (include), mas o anexo opcional é extend, e não generalização.
- **(D)** Correta. Autenticação obrigatória: include; anexo opcional: extend.
- **(E)** Incorreta. Entre casos de uso não se usa associação (que liga ator e caso de uso), e o anexo opcional não é uma inclusão.

### D. Fundamentação teórica

- **Módulo:** M05 — Engenharia de Software
- **Assunto:** Análise e projeto orientados a objetos: UML, casos de uso
- **Item do edital:** 5.3 (E5-044) · itens secundários: 5.1
- **Arquivo de teoria:** `conteudo/05-engenharia-software/05-analise-e-projeto.md`
- **Referência:** Material teórico do projeto; normas ISO e princípios ISTQB não verificados em fonte primária (revisão do M05). UML 2.5.1 (página do OMG conferida na revisão do M05, sem leitura da especificação).

### E. Ponto de atenção para a prova

**Include** = **sempre** (obrigatório, reuso). **Extend** = **opcional**, em condição específica. A seta do *extend* aponta para o caso de uso estendido.

### F. Revisão rápida

Include: uso obrigatório de outro caso de uso. Extend: ampliação opcional. Generalização: especialização. Associação: ator–caso de uso.

### G. Tags

`m05` · `uml` · `casos-de-uso` · `include` · `extend` · `item-5.3` · `item-5.1` · `media` · `aplicacao` · `cenario` · `autoral`

**Verificação do gabarito:** Sem execução (questão conceitual); gabarito conferido contra o arquivo de teoria (validado).  
**Status de validação:** `validada`  
**Validação:** Aprovada pelo usuário em 2026-10-31 (lote piloto do M05); sem revisão por terceiros; ressalvas: normas ISO e princípios ISTQB sem fonte primária; interpretação dos itens 5.2 e 5.5 a confirmar.

---

## Questão 7 — AUT-000047

**AUT-000047** · Teste de software: complexidade ciclomática · item 5.4 · Difícil · Resolução de problemas

*Questão autoral — estilo Cesgranrio.*

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

(A) 7.  
(B) 6.  
(C) 5.  
(D) 8.  
(E) 4.  

### A. Gabarito

**A**

### B. Resolução comentada

A complexidade ciclomática é **V(G) = número de decisões + 1** (equivalente a E − N + 2P). As decisões do método são: (1) `for`; (2) `if x > limite`; (3) `if alertas > 3`; (4) `elif x < 0`; (5) `while`; (6) `if alertas == 2`. São **6 decisões**; logo, V(G) = 6 + 1 = **7**. O `break`, o `continue` e o `return` não são decisões.

### C. Análise das alternativas

- **(A)** Correta. 6 decisões + 1 = 7.
- **(B)** Incorreta. É o número de decisões (6); falta somar 1 ao total.
- **(C)** Incorreta. Resulta de contar apenas 4 decisões (por exemplo, omitindo o `elif` e o `while`) e somar 1.
- **(D)** Incorreta. Ocorreria se fossem contados também o `break` ou o `continue` como decisões; esses comandos apenas desviam o fluxo e não criam ramificação de decisão.
- **(E)** Incorreta. Resulta de 3 decisões + 1; ignora os laços `for` e `while` ou algumas das estruturas condicionais.

### D. Fundamentação teórica

- **Módulo:** M05 — Engenharia de Software
- **Assunto:** Verificação, validação e teste: caixa-branca e complexidade ciclomática
- **Item do edital:** 5.4 (E5-045)
- **Arquivo de teoria:** `conteudo/05-engenharia-software/06-verificacao-e-validacao.md`
- **Referência:** Material teórico do projeto; normas ISO e princípios ISTQB não verificados em fonte primária (revisão do M05). McCabe (1976) verificado na revisão do M05.

### E. Ponto de atenção para a prova

**V(G) = decisões + 1.** Conte `if`, `elif`, `for`, `while` (e, em muitas ferramentas, também operadores lógicos e `case`; siga a definição do enunciado). `break`, `continue` e `return` **não** são decisões.

### F. Revisão rápida

Complexidade ciclomática = nº de decisões + 1 = E − N + 2P. Valores altos indicam risco e dificuldade de manutenção.

### G. Tags

`m05` · `testes` · `caixa-branca` · `complexidade-ciclomatica` · `mccabe` · `item-5.4` · `dificil` · `resolucao-de-problemas` · `calculo` · `autoral`

**Verificação do gabarito:** Código executado e analisado em Python (contagem das estruturas for/while/if/elif com a biblioteca ast): 6 decisões; V(G) = 7.  
**Status de validação:** `validada`  
**Validação:** Aprovada pelo usuário em 2026-10-31 (lote piloto do M05); sem revisão por terceiros; ressalvas: normas ISO e princípios ISTQB sem fonte primária; interpretação dos itens 5.2 e 5.5 a confirmar.

---

## Questão 8 — AUT-000048

**AUT-000048** · Teste de software: análise do valor limite · item 5.4 · Média · Aplicação

*Questão autoral — estilo Cesgranrio.*

Um campo de um sistema de estoque, "quantidade de peças", aceita valores inteiros de 1 a 99, inclusive. Ao projetar testes de caixa-preta pela técnica de análise do valor limite, a equipe deseja exercitar as fronteiras, ou seja, os valores nos limites e os valores imediatamente fora deles.  
  
Os valores que cumprem esse objetivo são

(A) 1, 50 e 99.  
(B) 0, 50 e 100.  
(C) 0, 1, 99 e 100.  
(D) 1, 2, 98 e 99.  
(E) 0 e 100, apenas.  

### A. Gabarito

**C**

### B. Resolução comentada

Na **análise do valor limite**, testam-se as **bordas das partições**, onde os defeitos são mais comuns: o limite inferior (1) e o valor imediatamente abaixo (0), o limite superior (99) e o valor imediatamente acima (100). O conjunto é **0, 1, 99 e 100**. (Variações da técnica incluem também 2 e 98.)

### C. Análise das alternativas

- **(A)** Incorreta. Usa os limites válidos (1 e 99) e um representante (50), típico da partição de equivalência; não testa os valores imediatamente fora das fronteiras.
- **(B)** Incorreta. 0 e 100 são valores fora do intervalo nas fronteiras, mas 50 é representante da partição válida, e faltam os limites válidos 1 e 99.
- **(C)** Correta. Limites (1 e 99) e valores adjacentes fora do intervalo (0 e 100).
- **(D)** Incorreta. Testa apenas valores válidos perto das bordas; não exercita os valores inválidos adjacentes às fronteiras.
- **(E)** Incorreta. Testa apenas os valores inválidos adjacentes; faltam os próprios limites válidos 1 e 99.

### D. Fundamentação teórica

- **Módulo:** M05 — Engenharia de Software
- **Assunto:** Verificação, validação e teste: caixa-preta (análise do valor limite)
- **Item do edital:** 5.4 (E5-045)
- **Arquivo de teoria:** `conteudo/05-engenharia-software/06-verificacao-e-validacao.md`
- **Referência:** Material teórico do projeto; normas ISO e princípios ISTQB não verificados em fonte primária (revisão do M05).

### E. Ponto de atenção para a prova

**Partição de equivalência** = um representante por classe. **Valor limite** = **bordas**: limite e adjacente (inclusive os inválidos). Leia o intervalo (inclusive ou exclusivo!).

### F. Revisão rápida

Valor limite para 1–99: 0, 1, 99, 100 (e, em variações, 2 e 98).

### G. Tags

`m05` · `testes` · `caixa-preta` · `valor-limite` · `particao-de-equivalencia` · `item-5.4` · `media` · `aplicacao` · `cenario` · `autoral`

**Verificação do gabarito:** Conjunto de valores calculado por script (limites ± 1): 0, 1, 99, 100.  
**Status de validação:** `validada`  
**Validação:** Aprovada pelo usuário em 2026-10-31 (lote piloto do M05); sem revisão por terceiros; ressalvas: normas ISO e princípios ISTQB sem fonte primária; interpretação dos itens 5.2 e 5.5 a confirmar.

---

## Questão 9 — AUT-000049

**AUT-000049** · Verificação e validação · item 5.4 · Média · Análise

*Questão autoral — estilo Cesgranrio.*

Em um projeto de software, ocorreram duas atividades:  
  
I – Em uma reunião formal, a equipe revisa o documento de projeto e o compara com a especificação de requisitos, sem executar nenhum código.  
II – Em uma demonstração, o usuário opera o sistema e avalia se ele atende à sua necessidade de negócio.  
  
I e II correspondem, respectivamente, a

(A) validação, por técnica dinâmica, e verificação, por técnica estática.  
(B) verificação, por técnica dinâmica, e validação, por técnica estática.  
(C) validação e validação, ambas por técnicas estáticas.  
(D) verificação e verificação, ambas por técnicas dinâmicas.  
(E) verificação, por técnica estática (revisão), e validação.  

### A. Gabarito

**E**

### B. Resolução comentada

A **verificação** pergunta "estamos construindo o produto **corretamente**?" (conformidade com a especificação) e pode ser feita por **técnicas estáticas** (revisões, inspeções, análise estática), sem executar o software: atividade I. A **validação** pergunta "estamos construindo o **produto certo**?" (atendimento à necessidade do usuário): atividade II, em que o usuário opera o sistema (técnica dinâmica, de execução).

### C. Análise das alternativas

- **(A)** Incorreta. Inverte os conceitos: comparar o projeto com a especificação é verificação (estática), e a demonstração ao usuário é validação.
- **(B)** Incorreta. Inverte verificação e validação e também os tipos de técnica (a revisão é estática; a demonstração executa o sistema).
- **(C)** Incorreta. A revisão contra a especificação é verificação, e a demonstração executa o sistema (técnica dinâmica).
- **(D)** Incorreta. A demonstração ao usuário é validação, e a revisão do documento não executa código (técnica estática).
- **(E)** Correta. I: verificação, por revisão (estática); II: validação, com o usuário.

### D. Fundamentação teórica

- **Módulo:** M05 — Engenharia de Software
- **Assunto:** Verificação, validação e teste: conceitos e técnicas estáticas
- **Item do edital:** 5.4 (E5-045)
- **Arquivo de teoria:** `conteudo/05-engenharia-software/06-verificacao-e-validacao.md`
- **Referência:** Material teórico do projeto; normas ISO e princípios ISTQB não verificados em fonte primária (revisão do M05).

### E. Ponto de atenção para a prova

**Verificação** = conforme a **especificação** (produto correto; pode ser estática). **Validação** = atende à **necessidade do usuário** (produto certo). Revisão/inspeção = **estática**; teste = **dinâmico**.

### F. Revisão rápida

Verificação: produto corretamente (especificação). Validação: produto certo (usuário). Estática: sem executar. Dinâmica: executando.

### G. Tags

`m05` · `verificacao-e-validacao` · `tecnicas-estaticas` · `inspecao` · `item-5.4` · `media` · `analise` · `comparativa` · `autoral`

**Verificação do gabarito:** Sem execução (questão conceitual); gabarito conferido contra o arquivo de teoria (validado).  
**Status de validação:** `validada`  
**Validação:** Aprovada pelo usuário em 2026-10-31 (lote piloto do M05); sem revisão por terceiros; ressalvas: normas ISO e princípios ISTQB sem fonte primária; interpretação dos itens 5.2 e 5.5 a confirmar.

---

## Questão 10 — AUT-000050

**AUT-000050** · Ambientes de desenvolvimento: CI/CD · item 5.5 · Média · Compreensão

*Questão autoral — estilo Cesgranrio.*

Em uma equipe de desenvolvimento, o código de cada integrante é integrado várias vezes ao dia ao repositório compartilhado. Cada alteração aciona um pipeline automatizado de compilação, testes e análise estática. Quando todas as verificações são bem-sucedidas, a alteração é implantada automaticamente em produção, sem nenhuma aprovação manual.  
  
A prática que descreve a implantação automática em produção, nessas condições, é a

(A) integração contínua, que se limita a compilar e testar o código integrado ao repositório.  
(B) implantação contínua, em que toda alteração aprovada nos testes vai a produção sem aprovação manual.  
(C) entrega contínua (continuous delivery), em que a implantação em produção depende de uma decisão manual de negócio.  
(D) estratégia canário, que consiste em liberar a alteração apenas a um conjunto de testadores internos.  
(E) gerência de configuração, que se restringe a versionar os arquivos do projeto no repositório.  

### A. Gabarito

**B**

### B. Resolução comentada

A **integração contínua (CI)** integra o código com frequência, com *build* e testes automáticos. A **entrega contínua** mantém o software sempre em condição de ser liberado, com a **implantação em produção como decisão (manual) de negócio**. Na **implantação contínua (*continuous deployment*)**, **toda alteração aprovada nos testes é implantada automaticamente em produção, sem aprovação manual**, que é o caso descrito.

### C. Análise das alternativas

- **(A)** Incorreta. A integração contínua trata da integração e da verificação automática do código; não inclui, por si só, a implantação em produção.
- **(B)** Correta. Implantação automática em produção, sem aprovação manual, após os testes: implantação contínua.
- **(C)** Incorreta. Na entrega contínua, a liberação para produção depende de decisão manual; o enunciado exclui essa aprovação.
- **(D)** Incorreta. A estratégia canário é uma forma de liberação gradual a uma parcela de usuários, e não o nome da prática de implantar automaticamente tudo o que passa nos testes.
- **(E)** Incorreta. Gerência de configuração controla versões e mudanças; não define a implantação automática em produção.

### D. Fundamentação teórica

- **Módulo:** M05 — Engenharia de Software
- **Assunto:** Ambientes de desenvolvimento de software: integração e entrega contínuas
- **Item do edital:** 5.5 (E5-046)
- **Arquivo de teoria:** `conteudo/05-engenharia-software/07-testes-e-ambientes.md`
- **Referência:** Material teórico do projeto; normas ISO e princípios ISTQB não verificados em fonte primária (revisão do M05). Interpretação do item 5.5 (redação genérica) a confirmar.

### E. Ponto de atenção para a prova

**Entrega contínua**: pronta para liberar, **decisão manual**. **Implantação contínua**: liberação **automática**. Ambas usam CI. Não confunda **implantação** (deploy) com **liberação** (release), separáveis por *feature flags*.

### F. Revisão rápida

CI: integra e testa com frequência. Delivery: sempre liberável, deploy manual. Deployment: deploy automático em produção.

### G. Tags

`m05` · `ci-cd` · `implantacao-continua` · `entrega-continua` · `item-5.5` · `media` · `compreensao` · `cenario` · `autoral`

**Verificação do gabarito:** Sem execução (questão conceitual); gabarito conferido contra o arquivo de teoria (validado).  
**Status de validação:** `validada`  
**Validação:** Aprovada pelo usuário em 2026-10-31 (lote piloto do M05); sem revisão por terceiros; ressalvas: normas ISO e princípios ISTQB sem fonte primária; interpretação dos itens 5.2 e 5.5 a confirmar.

---

