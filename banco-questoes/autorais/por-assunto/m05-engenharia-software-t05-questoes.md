# Questões autorais — m05-engenharia-software (expansão T05) — questões (T05 — expansão)

Sem gabarito; o comentário está no arquivo `gabaritos-comentados`.

## AUT-000106 — Complexidade ciclomática e testes de caminho básico

*Questão autoral — estilo Cesgranrio.* · item 5.4 · Média

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

(A) 3
(B) 4
(C) 5
(D) 6
(E) 2

## AUT-000107 — Ambientes de desenvolvimento: integração contínua

*Questão autoral — estilo Cesgranrio.* · item 5.5 · Fácil

Uma equipe adotou, em seu ambiente de desenvolvimento, a prática de integração contínua (CI).

Essa prática consiste em

(A) implantar automaticamente em produção toda alteração enviada pelos desenvolvedores, sem a necessidade de testes automatizados.
(B) manter ramos de desenvolvimento longos e integrá-los somente no fim do projeto.
(C) lançar uma nova versão completa do sistema a cada trimestre.
(D) submeter o código à revisão manual de um único especialista antes de qualquer commit, sem nenhuma verificação automatizada posterior.
(E) integrar com frequência as alterações em um repositório compartilhado, com *build* e testes automáticos a cada integração.
