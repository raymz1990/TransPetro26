---
modulo: 08-logica-matematica
arquivo: 03-argumentacao-logica
itens_edital:
  - "8.2 Argumentos"
ids_matriz: ["E5-073"]
escopo: "A — conteúdo expresso no edital."
tipo_conteudo: "teoria"
status: "VALIDADO"
ultima_atualizacao: "2026-10-31"
---

# Argumentos

**Módulo:** M08 — Lógica matemática
**Texto oficial (Anexo IV):** 8.2 "Argumentos".
**Escopo:** A. O edital não distingue argumentos dedutivos de indutivos; ambos são situados, com foco na **validade dedutiva**.
**Status:** `VALIDADO` (aprovado pelo usuário em 2026-10-31, com ressalvas: interpretação dos itens 8.5, 8.6 e 8.9 a confirmar; decisão sobre puzzles de raciocínio lógico pendente; fontes de memória listadas em `docs/qualidade/relatorio-producao-modulo-08.md`). Validade das formas conferida por script em 2026-10-31.

**Objetivos de aprendizagem.** (1) Definir argumento, premissa e conclusão; (2) distinguir validade, solidez e verdade; (3) testar validade; (4) reconhecer regras de inferência e falácias formais; (5) analisar argumentos categóricos e silogismos.

---

## 1. Conceito

**Argumento** é uma sequência de proposições, as **premissas** (P₁, …, Pₙ), e uma proposição, a **conclusão** (C), em que se afirma que as premissas **fundamentam** a conclusão. Indicadores: de premissa ("pois", "porque", "dado que"); de conclusão ("logo", "portanto", "então", "assim").

## 2. Validade, solidez e verdade

| Conceito | Definição |
|---|---|
| **Argumento (dedutivo) válido** | **Impossível** as premissas serem todas V e a conclusão F. Equivale a (P₁ ∧ … ∧ Pₙ) → C ser **tautologia** |
| **Inválido** | Existe valoração com premissas V e conclusão F (**contraexemplo**) |
| **Sólido (correto)** | Válido **e** premissas verdadeiras |
| **Verdade** | Propriedade de proposições |
| **Validade** | Propriedade da **forma** do argumento |

Pontos centrais: validade **não** depende da verdade efetiva das proposições; um argumento válido pode ter premissa falsa e conclusão falsa; **premissas verdadeiras e conclusão verdadeira não bastam** para validade. Se as premissas forem **contraditórias**, o argumento é válido (explosão), embora não sólido.

## 3. Como testar a validade

1. **Tabela-verdade:** procurar linha com todas as premissas V e conclusão F. Se existir, é **inválido**; se não, é **válido**.
2. **Tabela abreviada (redução ao absurdo):** atribuir premissas V e conclusão F; se houver contradição, é válido.
3. **Regras de inferência / dedução** (arquivo `06`).
4. **Diagramas de Venn** para argumentos categóricos (seção 6).

## 4. Regras de inferência e formas válidas (conferidas por enumeração)

| Regra | Forma |
|---|---|
| **Modus ponens** (afirmação do antecedente) | p → q ; p ⊢ q |
| **Modus tollens** (negação do consequente) | p → q ; ¬q ⊢ ¬p |
| **Silogismo hipotético** | p → q ; q → r ⊢ p → r |
| **Silogismo disjuntivo** | p ∨ q ; ¬p ⊢ q |
| **Dilema construtivo** | p → q ; r → s ; p ∨ r ⊢ q ∨ s |
| **Simplificação** | p ∧ q ⊢ p |
| **Conjunção** | p ; q ⊢ p ∧ q |
| **Adição** | p ⊢ p ∨ q |
| **Resolução** | p ∨ q ; ¬p ∨ r ⊢ q ∨ r |

## 5. Falácias formais (formas **inválidas**; conferidas)

| Falácia | Forma | Exemplo |
|---|---|---|
| **Afirmação do consequente** | p → q ; q ⊢ p | "Se chove, a rua molha; a rua está molhada; logo choveu." (pode ser mangueira) |
| **Negação do antecedente** | p → q ; ¬p ⊢ ¬q | "Se chove, a rua molha; não choveu; logo a rua não molhou." |

Outras falácias, **informais** (não da forma lógica): *ad hominem*, apelo à autoridade, falso dilema, generalização apressada, petição de princípio, *post hoc* (de memória).

## 6. Argumentos categóricos e silogismos

**Proposições categóricas** (Aristóteles; de memória):

| Tipo | Forma | Exemplo |
|---|---|---|
| **A** (universal afirmativa) | Todo S é P | Todo gato é mamífero |
| **E** (universal negativa) | Nenhum S é P | Nenhum réptil é mamífero |
| **I** (particular afirmativa) | Algum S é P | Algum felino é doméstico |
| **O** (particular negativa) | Algum S não é P | Algum animal não é mamífero |

Negações: ¬(Todo S é P) ≡ **Algum S não é P**; ¬(Nenhum S é P) ≡ **Algum S é P**. **Silogismo categórico:** duas premissas e uma conclusão com três termos (maior, menor, médio). Exemplo válido (*Barbara*): "Todo M é P; todo S é M; logo todo S é P". Verificação por **diagramas de Venn** (conjuntos).

Nota: a leitura clássica aristotélica de "Todo S é P" pressupõe S não vazio; na **lógica moderna** (arquivo `05`), "Todo S é P" é ∀x(S(x) → P(x)) e é **verdadeira se S for vazio**.

## 7. Argumentos não dedutivos

| Tipo | Característica |
|---|---|
| **Dedutivo** | Conclusão **necessária** se as premissas forem V; validade é tudo ou nada |
| **Indutivo** | Conclusão **provável**; generaliza a partir de casos; pode ser forte ou fraco |
| **Por analogia** | Semelhança entre casos |
| **Abdutivo** | Melhor explicação para observações (de memória) |

O edital trata da **lógica matemática**, cujo foco é a dedução.

## 8. Exemplo resolvido (didático)

"Se o relatório está pronto, o gerente aprova. O gerente não aprovou. Logo, o relatório não está pronto." Forma: p → q ; ¬q ⊢ ¬p (**modus tollens**), **válido**. Troque a segunda premissa por "O gerente aprovou" e a conclusão por "o relatório está pronto": afirmação do consequente, **inválido**.

Exemplo de identificação da conclusão que torna válido: dadas "p → q" e "q → r", a conclusão "p → r" torna o argumento válido (silogismo hipotético).

## 9. Comparações conceituais

| A | B | Diferença |
|---|---|---|
| Validade | Verdade | Da forma do argumento × de proposições |
| Argumento válido | Sólido | Forma correta × forma correta e premissas V |
| Modus ponens | Afirmação do consequente | Válido × falácia |
| Modus tollens | Negação do antecedente | Válido × falácia |
| Dedutivo | Indutivo | Necessário × provável |
| Falácia formal | Informal | Forma inválida × erro de conteúdo/contexto |

## 10. Atenção para a prova

*Inferência técnica e recomendação pedagógica; sem atribuir frequência à banca.*

- Testar sempre **procurando contraexemplo**: premissas V e conclusão F.
- Não confundir **conclusão verdadeira** com argumento válido.
- Evidência histórica (amostra de duas provas): a Prova 6 de 2023 trouxe **Q28** (argumento: conclusão que o torna válido; gabarito D) e questões de raciocínio lógico (Q36, anulada; Q37, sem item 8.x claro). Gabaritos de terceiros, não validados. Duas provas não permitem inferir frequência.

## 11. Síntese

Argumento = premissas + conclusão. Válido = nenhuma valoração com premissas V e conclusão F. Regras: modus ponens e tollens, silogismos, dilema, resolução. Falácias formais: afirmar o consequente, negar o antecedente. Categóricas: A, E, I, O.

## 12. Pontos para a futura produção de questões (registro)

Testar validade; completar conclusão; identificar falácia; negar categóricas; silogismo com Venn.

## 13. Referências

- Formas válidas e inválidas: **conferidas por script em 2026-10-31**. Lógica aristotélica e falácias informais — **de memória, não verificadas**.
- Edital Transpetro nº 04/2026.4, Anexo IV, item 8.2. Provas: Transpetro 2023, Prova 6, Q28, Q36 e Q37 (gabaritos de terceiros, não validados).
