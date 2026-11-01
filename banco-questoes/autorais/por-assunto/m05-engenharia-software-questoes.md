# Banco de questões — Módulo 5: Engenharia de Software (lote piloto, questões)

**Tipo:** questões **autorais** — **Questão autoral — estilo Cesgranrio.** Não são questões oficiais nem foram aplicadas pela Fundação Cesgranrio.
**Status:** validada 10. Gabaritos e comentários em `m05-engenharia-software-gabaritos-comentados.md`; dados estruturados em `m05-engenharia-software.json`.
**Data:** 2026-10-31 · **Itens do edital:** 5.1, 5.2, 5.3, 5.4, 5.5.

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

---

