---
modulo: 08-logica-matematica
arquivo: 08-raciocinio-logico-complementar
itens_edital: []
ids_matriz: []
escopo: "C — COMPLEMENTO. Não é exigência literal do Anexo IV (itens 8.1 a 8.9). Incluído por decisão do usuário em 2026-11-04, porque a Prova 6 de 2023 da Cesgranrio trouxe problemas desse tipo (Q36, anulada, e Q37)."
tipo_conteudo: "teoria complementar"
status: "RASCUNHO"
ultima_atualizacao: "2026-11-04"
---

# Raciocínio Lógico: Ordenações, Associações e Verdade/Mentira (complemento)

**Módulo:** M08 — Lógica matemática · **Natureza: complemento, fora da cobertura oficial do edital.**

> **Aviso.** Este arquivo **não** corresponde a item literal do Anexo IV. Ele existe porque a Prova 6 de 2023 (Transpetro, Cesgranrio) catalogou duas questões desse estilo (Q36, anulada, e Q37; gabaritos de terceiros, não validados). Duas provas não indicam frequência. Estude primeiro os itens 8.1 a 8.9. Status `RASCUNHO`: ainda não validado pelo usuário.

## 1. O que são esses problemas

Enunciados com uma **história** (pessoas, ordem, atributos, declarações) e **regras** em linguagem natural. Pede-se o que **necessariamente** decorre delas. Não há fórmula: o método é traduzir as regras em **restrições** e eliminar possibilidades até sobrar um caso, ou verificar qual alternativa é consequência de todas.

Relação com o edital: cada regra é uma **proposição** (8.1), as regras juntas formam uma **conjunção**, e "decorre necessariamente" é a ideia de **consequência lógica** (8.2, 8.6).

## 2. Método geral

1. **Listar** as entidades e os atributos (quem, onde, qual).
2. **Montar** um quadro (tabela ou posições numeradas).
3. **Traduzir** cada regra em uma restrição simples; comece pelas afirmações diretas (posição fixa) e pelas negações (eliminam possibilidades).
4. **Propagar**: o que uma restrição elimina reduz as demais.
5. **Testar** cada alternativa contra o quadro final; escolha a que vale em **todos** os casos compatíveis.
6. Se sobrar mais de um quadro possível, a resposta correta é a que vale em todos eles.

## 3. Ordenação (sequências)

**Palavras-chave:** "antes de", "imediatamente depois", "não é o primeiro nem o último", "entre".

**Exemplo 1.** Quatro pessoas (Ana, Bia, Caio e Davi) formam uma fila. Ana está antes de Bia; Caio não é o primeiro nem o último; Davi está imediatamente depois de Ana. Qual é a ordem?

- Davi vem logo após Ana: forma-se o bloco **Ana–Davi**.
- Caio ocupa a posição 2 ou 3 (nem 1ª nem 4ª).
- Se Caio fosse o 2º, o bloco Ana–Davi teria de ocupar as posições 3 e 4, deixando Bia na 1ª, antes de Ana: contradiz "Ana antes de Bia". Logo Caio é o **3º**.
- Sobram as posições 1, 2 e 4: o bloco Ana–Davi fica em 1–2 e Bia na 4ª.

**Resposta:** Ana, Davi, Caio, Bia (solução única, conferida por enumeração das 24 permutações).

## 4. Associação (quadro de atributos)

**Exemplo 2.** Rui, Sara e Tito usam, cada um, uma ferramenta diferente entre SQL, Python e R. Rui não usa SQL; Sara não usa Python nem SQL. Quem usa o quê?

| | SQL | Python | R |
|---|---|---|---|
| Rui | ✗ | | |
| Sara | ✗ | ✗ | **✓** |
| Tito | | | |

- Sara só pode usar **R**.
- Rui, sem SQL e sem R (de Sara), usa **Python**.
- Sobra **SQL** para Tito.

**Resposta:** Rui — Python; Sara — R; Tito — SQL (solução única, conferida por enumeração).

## 5. Verdade e mentira

**Técnica:** suponha uma hipótese (por exemplo, "B diz a verdade"), siga as consequências e procure **contradição**. A fala de quem diz a verdade é V; a de quem mente é F. É a ideia da **tabela-verdade** (8.2): cada pessoa é uma variável cuja valoração deve tornar suas falas coerentes.

**Exemplo 3.** A diz: "B mente." B diz: "C mente." C diz: "A e B mentem." Quem diz a verdade?

- Suponha que B diz a verdade. Então C mente (fala de B). A fala de A ("B mente") é falsa, logo A mente. A fala de C ("A e B mentem") é falsa porque B diz a verdade, o que é coerente com C mentindo. **Sem contradição.**
- Suponha que B mente. Então C diz a verdade, e "A e B mentem" é verdadeira: A mente. Mas A, mentindo, ao dizer "B mente" teria dito algo falso, isto é, B diria a verdade: **contradição**.

**Resposta:** só **B** diz a verdade (conferido pelas 8 valorações possíveis).

## 6. Pontos de atenção (hipóteses, sem frequência afirmada)

- "**Pelo menos**", "**exatamente**", "**no máximo**": mudam o número de casos válidos.
- "**Não é o primeiro**" não significa "é o último".
- Duas condições podem ser compatíveis com **mais de um** quadro: só vale o que é verdadeiro em todos.
- Regras contraditórias ou ambíguas podem levar à **anulação** (a Q36 de 2023 consta como anulada no gabarito de terceiros consultado; o motivo oficial não foi verificado).

## 7. Síntese

Traduzir regras em restrições, montar quadro, eliminar, testar alternativas contra todos os casos. Verdade e mentira = valorações coerentes. Conteúdo complementar, fora do Anexo IV.

## 8. Referências

- Provas catalogadas: `docs/estrategia/catalogo-questoes-historicas.md` (Prova 6 de 2023, Q36 e Q37).
- Exemplos 1 a 3 criados pelo projeto e **verificados por enumeração** (script); sem fonte externa.
