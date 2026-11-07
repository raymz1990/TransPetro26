# Questões autorais — m05-engenharia-software (expansão T05) — gabaritos comentados (T05 — expansão)

## AUT-000106 — Complexidade ciclomática e testes de caminho básico

*Questão autoral — estilo Cesgranrio.*

**Gabarito: B**

A complexidade ciclomática é **V(G) = número de pontos de decisão + 1**. Aqui há três decisões simples: o `if n < 0`, o laço `for` e o `if n % 2 == 0`. Logo, **V(G) = 3 + 1 = 4**, ou seja, quatro caminhos independentes (e, no mínimo, quatro casos de teste para o teste de caminho básico).

- **A)** Incorreta. 3 corresponde ao número de decisões, sem somar 1.
- **B)** Correta. V(G) = 3 decisões + 1 = 4.
- **C)** Incorreta. 5 contaria uma decisão a mais (por exemplo, o `return`, que não é decisão).
- **D)** Incorreta. 6 não corresponde ao número de decisões.
- **E)** Incorreta. 2 consideraria apenas uma decisão.

**Ponto de atenção:** McCabe: **V(G) = decisões + 1** (ou arestas − nós + 2). Conte `if`, `for`, `while`, `case`; o `return` não conta.

**Revisão rápida:** V(G) = decisões + 1.

## AUT-000107 — Ambientes de desenvolvimento: integração contínua

*Questão autoral — estilo Cesgranrio.*

**Gabarito: E**

Na **integração contínua**, desenvolvedores integram o código ao repositório compartilhado várias vezes ao dia, e **cada integração dispara compilação e testes automatizados**, revelando cedo os erros de integração. A entrega/implantação contínua (CD) estende o pipeline até a liberação.

- **A)** Incorreta. Implantação automática sem testes é um uso inadequado de CD; CI exige verificação automatizada.
- **B)** Incorreta. Ramos longos e integração tardia é o oposto da CI ("inferno da integração").
- **C)** Incorreta. Lançamentos trimestrais não caracterizam CI.
- **D)** Incorreta. Revisão manual por um só especialista não é a prática definidora da CI.
- **E)** Correta. Integração frequente com *build* e testes automatizados define CI.

**Ponto de atenção:** CI = integrar **frequentemente** + verificar **automaticamente**. CD = liberar com **pipeline automatizado**.

**Revisão rápida:** CI: commits frequentes, build e testes automáticos.
