# Módulo M08 — Lógica Matemática

## Identificação
- Concurso: Processo Seletivo Público TRANSPETRO 2026.4 (Edital nº 04/2026)
- Ênfase: 5 — Análise de Sistemas: Processos de Negócios
- Banca: Fundação Cesgranrio
- Módulo: M08 — Lógica Matemática
- Gerado em: 2026-11-07, por `tools/build_notebooklm.py`, a partir de `conteudo/08-logica-matematica/` (fonte de verdade; não editar este arquivo)
- Situação do conteúdo nos arquivos de origem: VALIDADO (com ressalvas nos relatórios de produção em `docs/qualidade/`)

## Como usar este documento
É material de estudo do projeto, **não** é texto oficial do edital nem da banca. O escopo oficial é o Anexo IV do edital. Trechos marcados como complemento, aprofundamento ou estratégia **não** são exigência literal do edital. Referências indicadas como "não verificadas" ou "de memória" devem ser conferidas na fonte primária. Não afirme incidência de tema em prova sem evidência documental.

## Conteúdo

---

## Proposições e Conectivos Lógicos

**Módulo:** M08 — Lógica matemática
**Textos oficiais (Anexo IV):** 8 "Lógica Matemática:" (título); 8.1 "Sentido lógico-matemático convencional dos conectivos".
**Escopo:** A.
**Status:** `VALIDADO` (aprovado pelo usuário em 2026-10-31, com ressalvas: interpretação dos itens 8.5, 8.6 e 8.9 a confirmar; decisão sobre puzzles de raciocínio lógico pendente; fontes de memória listadas em `docs/qualidade/relatorio-producao-modulo-08.md`). As equivalências e tabelas deste módulo foram **conferidas por script** (enumeração de todas as valorações) em 2026-10-31; as referências bibliográficas são de memória.

**Objetivos de aprendizagem.** (1) Reconhecer proposições; (2) simbolizar frases com conectivos; (3) aplicar o sentido **convencional** de cada conectivo (distinto do uso na linguagem comum); (4) usar a precedência dos conectivos; (5) negar proposições compostas.

---

### 1. Introdução ao módulo

A lógica matemática estuda **raciocínio válido** com linguagem formal. O módulo 8 segue o edital: conectivos (8.1), argumentos (8.2), lógica sentencial (8.3), lógica de predicados (8.4), regras de formação (8.5), sistemas dedutivos (8.6), decidibilidade (8.7), valores-verdade (8.8) e funções de avaliação (8.9). Arquivos: `01` (8.1), `02` (8.8), `03` (8.2), `04` (8.3), `05` (8.4), `06` (8.5 e 8.6), `07` (8.7 e 8.9).

### 2. Proposição

**Proposição** é uma **sentença declarativa** que pode ser classificada como **verdadeira (V)** ou **falsa (F)**, mas não ambas (princípios clássicos: **identidade**, **não contradição** e **terceiro excluído**).

| É proposição | Não é proposição |
|---|---|
| "5 é maior que 3." | "Feche a porta." (imperativa) |
| "Todo gato é mamífero." | "Que horas são?" (interrogativa) |
| "2 + 2 = 5." (falsa, mas é proposição) | "Que dia lindo!" (exclamativa) |
| "Brasília é a capital do Brasil." | "x + 3 = 7." (sentença aberta, depende de *x*) |

**Proposição simples (átomo):** não contém outra proposição como parte, indicada por letras (*p*, *q*, *r*). **Composta (molecular):** formada por simples e conectivos. **Sentença aberta** (com variável) não é proposição até ser **quantificada** ou ter a variável substituída (arquivo `05`).

### 3. Conectivos lógicos e seu sentido convencional (item 8.1)

| Conectivo | Símbolo | Leitura | Verdadeira quando |
|---|---|---|---|
| **Negação** | ¬p, ~p | não p | *p* é falsa |
| **Conjunção** | p ∧ q | p **e** q | **ambas** verdadeiras |
| **Disjunção (inclusiva)** | p ∨ q | p **ou** q | **pelo menos uma** verdadeira |
| **Disjunção exclusiva** | p ⊻ q (ou p ⊕ q) | ou p ou q (mas não ambas) | **exatamente uma** verdadeira |
| **Condicional** | p → q | se p, então q | **falsa somente** se *p* V e *q* F |
| **Bicondicional** | p ↔ q | p se e somente se q | *p* e *q* têm **o mesmo valor** |

#### 3.1 Tabela-verdade conjunta (conferida por enumeração)

| p | q | ¬p | p∧q | p∨q | p⊻q | p→q | p↔q |
|---|---|---|---|---|---|---|---|
| V | V | F | V | V | F | V | V |
| V | F | F | F | V | V | F | F |
| F | V | V | F | V | V | V | F |
| F | F | V | F | F | F | V | V |

#### 3.2 Sentido convencional × linguagem comum

| Conectivo | Na linguagem comum | Sentido lógico-matemático convencional |
|---|---|---|
| **"ou"** | Muitas vezes **exclusivo** ("café ou chá") | Por convenção, **inclusivo**: V se uma **ou ambas** forem V; o exclusivo é indicado ("ou … ou …") |
| **"se … então"** | Sugere relação causal ou temporal | Apenas **valor-verdade**: se o antecedente é F, o condicional é **V** ("vacuamente verdadeiro") |
| **"e"** | Pode sugerir ordem ("casou e teve filhos") | Comutativo: *p* ∧ *q* equivale a *q* ∧ *p* |
| **"mas", "porém", "embora"** | Contraste | Simbolizam conjunção (contraste desaparece) |
| **"se e somente se"** | — | Condicional nos dois sentidos |

#### 3.3 Formas de expressar o condicional e o bicondicional

*p → q* pode ser lida: "se *p*, então *q*"; "*p* implica *q*"; "*p* **somente se** *q*"; "*q* se *p*"; "*p* é **condição suficiente** para *q*"; "*q* é **condição necessária** para *p*". *p ↔ q*: "*p* se e somente se *q*"; "*p* é condição necessária e suficiente para *q*"; "*p* equivale a *q*" (no nível dos valores-verdade).

Cuidado: **"p somente se q"** é *p → q* (e **não** *q → p*); **"p se q"** é *q → p*.

#### 3.4 Precedência (convenção usual de livros; verificar o enunciado)

Da mais forte para a mais fraca: **¬**, **∧**, **∨**, **→**, **↔**. Essa ordem é uma convenção comum, mas **não é universal**: na revisão de 2026-10-31, a página "Well-formed formula" (Wikipedia) usou a ordem ¬, →, ∧, ∨ em um exemplo e disse tratar-se apenas de convenção, e a página "Logical connective" registra que as ordens variam. Exemplo: ¬p ∨ q → r lê-se ((¬p) ∨ q) → r. Em provas, o enunciado costuma usar **parênteses**; use-os em caso de dúvida.

### 4. Negação de proposições compostas (conferidas por enumeração)

| Proposição | Negação equivalente |
|---|---|
| ¬(p ∧ q) | ¬p ∨ ¬q (De Morgan) |
| ¬(p ∨ q) | ¬p ∧ ¬q (De Morgan) |
| ¬(p → q) | **p ∧ ¬q** |
| ¬(p ↔ q) | p ⊻ q (ou: (p ∧ ¬q) ∨ (¬p ∧ q)) |
| ¬(¬p) | p (dupla negação) |
| ¬(p ⊻ q) | p ↔ q |

Exemplo: negar "Se chove, a rua molha" → "**Chove e a rua não molha**". Note: negar um condicional **não** produz outro condicional.

### 5. Condicional e suas relacionadas (conferidas por enumeração)

| Forma | Equivalente ao condicional *p → q*? |
|---|---|
| **Contrapositiva** ¬q → ¬p | **Sim** |
| **Conversa** q → p | **Não** |
| **Inversa** ¬p → ¬q | **Não** (é equivalente à conversa) |
| **¬p ∨ q** | **Sim** |

### 6. Exemplos (didáticos)

1. "Se 3 > 5, então 2 é par": antecedente F → condicional **V**.
2. "5 é primo **ou** 6 é primo": *p* V, *q* F → disjunção **V**.
3. "Chove **se e somente se** faz frio": V quando ambas V ou ambas F.
4. Simbolizar "Maria estuda, mas não passa": *p* ∧ ¬*q*.

### 7. Comparações conceituais

| A | B | Diferença |
|---|---|---|
| Proposição | Sentença aberta | Tem valor-verdade × depende de variável |
| "ou" inclusivo | "ou" exclusivo | Aceita ambas × exatamente uma |
| Condicional | Bicondicional | Uma direção × duas direções |
| Condição necessária | Condição suficiente | Sem ela, não ocorre × com ela, ocorre |
| Negação do condicional | Contrapositiva | *p* ∧ ¬*q* × ¬*q* → ¬*p* (equivalente ao original) |

### 8. Atenção para a prova

*Inferência técnica e recomendação pedagógica; sem atribuir frequência à banca.*

- O condicional só é **falso** em *V → F*; antecedente falso torna-o verdadeiro.
- **Negação do condicional** é *p* e não-*q*; não inverter *p somente se q*.
- Evidência histórica (amostra de duas provas): a Prova 15 de 2018 trouxe Q70 (contradição entre proposições, gabarito C) e a Prova 6 de 2023, questões de raciocínio lógico (Q36 anulada; Q37 sem item 8.x claro). Gabaritos de terceiros, não validados. Duas provas não permitem inferir frequência.

### 9. Síntese

Proposição = sentença declarativa V/F. Conectivos: ¬, ∧, ∨ (inclusivo), ⊻, →, ↔. Condicional falso só em V→F. Negações: De Morgan; ¬(p→q) ≡ p∧¬q. Contrapositiva ≡ condicional; conversa e inversa não.

### 10. Pontos para a futura produção de questões (registro)

Simbolização; valor-verdade de composta; negação; condição necessária/suficiente; reconhecimento de equivalência.

### 11. Referências

- Equivalências e tabelas deste arquivo: **conferidas por script em 2026-10-31** (enumeração das valorações).
- Livros de lógica (Copi, Mortari, Alencar Filho, Enderton) — citados de memória, **não verificados**.
- Edital Transpetro nº 04/2026.4, Anexo IV, itens 8 e 8.1. Provas: Transpetro 2018, Prova 15, Q70; Transpetro 2023, Prova 6, Q36–Q37 (gabaritos de terceiros, não validados).


---

## Valores-Verdade e Tabelas-Verdade

**Módulo:** M08 — Lógica matemática
**Texto oficial (Anexo IV):** 8.8 "Valores-verdade".
**Escopo:** A. Os conectivos estão em `01`; aqui, a construção e o uso das tabelas e a classificação das fórmulas.
**Status:** `VALIDADO` (aprovado pelo usuário em 2026-10-31, com ressalvas: interpretação dos itens 8.5, 8.6 e 8.9 a confirmar; decisão sobre puzzles de raciocínio lógico pendente; fontes de memória listadas em `docs/qualidade/relatorio-producao-modulo-08.md`). Resultados conferidos por script em 2026-10-31.

**Objetivos de aprendizagem.** (1) Atribuir valores-verdade; (2) construir tabelas-verdade; (3) classificar tautologia, contradição e contingência; (4) verificar equivalência e implicação lógica; (5) usar atalhos de avaliação.

---

### 1. Valores-verdade

Na lógica **clássica bivalente**, toda proposição tem exatamente um valor-verdade: **verdadeiro (V, 1)** ou **falso (F, 0)**. O valor de uma proposição composta depende **apenas** dos valores de suas componentes (**veritativo-funcionalidade**; cada conectivo é uma função dos valores — arquivo `07`, funções de avaliação). Existem lógicas **não clássicas** (trivalentes, difusas); ficam **fora** do edital, que fala em "valores-verdade" no sentido clássico.

### 2. Construção da tabela-verdade

1. Listar as **proposições simples** distintas: *n* delas geram **2ⁿ linhas** (3 → 8; 4 → 16; 5 → 32).
2. Preencher as combinações de V e F (convenção: primeira coluna metade V e metade F, e assim por diante).
3. Calcular as subfórmulas **de dentro para fora**, respeitando parênteses e precedência (arquivo `01`).
4. A **última coluna** dá o valor da fórmula em cada linha.

Exemplo — (p → q) ∧ (q → r) (conferido):

| p | q | r | p→q | q→r | (p→q)∧(q→r) |
|---|---|---|---|---|---|
| V | V | V | V | V | V |
| V | V | F | V | F | F |
| V | F | V | F | V | F |
| V | F | F | F | V | F |
| F | V | V | V | V | V |
| F | V | F | V | F | F |
| F | F | V | V | V | V |
| F | F | F | V | V | V |

### 3. Classificação de fórmulas

| Tipo | Definição | Exemplo (conferido) |
|---|---|---|
| **Tautologia** (validade) | **V em todas** as linhas | p ∨ ¬p; (p → q) ∨ (q → p); ((p → q) → p) → p (lei de Peirce) |
| **Contradição** (insatisfatível) | **F em todas** as linhas | p ∧ ¬p |
| **Contingência** (satisfatível, mas não tautologia) | **V em algumas e F em outras** | p → q; p ∧ q |
| **Satisfatível** | V em **pelo menos uma** linha (tautologias e contingências) | — |

A negação de uma tautologia é uma contradição, e vice-versa.

### 4. Equivalência e implicação lógicas

- **Equivalência** (A ≡ B ou A ⇔ B): A e B têm a **mesma coluna final**; equivale a A ↔ B ser **tautologia**.
- **Implicação lógica** (A ⇒ B): **toda valoração que torna A verdadeira torna B verdadeira**; equivale a A → B ser **tautologia**.

Equivalências notáveis (todas **conferidas** por enumeração):

| Nome | Equivalência |
|---|---|
| Comutativa | p ∧ q ≡ q ∧ p ; p ∨ q ≡ q ∨ p |
| Associativa | (p ∧ q) ∧ r ≡ p ∧ (q ∧ r) ; idem para ∨ e para ↔ (o **condicional não é associativo**) |
| Distributiva | p ∧ (q ∨ r) ≡ (p ∧ q) ∨ (p ∧ r) ; p ∨ (q ∧ r) ≡ (p ∨ q) ∧ (p ∨ r) |
| De Morgan | ¬(p ∧ q) ≡ ¬p ∨ ¬q ; ¬(p ∨ q) ≡ ¬p ∧ ¬q |
| Condicional | p → q ≡ ¬p ∨ q ≡ ¬q → ¬p |
| Bicondicional | p ↔ q ≡ (p → q) ∧ (q → p) |
| Exportação | (p ∧ q) → r ≡ p → (q → r) |
| Absorção | p ∧ (p ∨ q) ≡ p |
| Dupla negação | ¬¬p ≡ p |
| Idempotência | p ∧ p ≡ p ; p ∨ p ≡ p |

### 5. Atalhos de avaliação

- **Valor único:** para saber se *p → q* é falso, procure *p* V e *q* F.
- **Tabela abreviada (por redução ao absurdo):** para testar se A → B é tautologia, tente atribuir **A = V e B = F**; se não for possível, é tautologia.
- Avaliar uma fórmula com **valores dados** (sem tabela completa): substituir e simplificar.
- Validade de argumento pela tabela: ver `03`.

### 6. Exemplos (didáticos)

1. *p* V, *q* F, *r* V: valor de (p ∧ q) → r: antecedente F → **V**.
2. "Se o sistema falha, o alarme soa; o alarme não soa." Tabela do modus tollens mostra que "o sistema não falha" segue (arquivo `03`).
3. A fórmula (p → q) ∨ (q → p) é tautologia, apesar de parecer informativa.

### 7. Comparações conceituais

| A | B | Diferença |
|---|---|---|
| Tautologia | Contingência | V sempre × V ou F conforme a valoração |
| Contradição | Contingência | F sempre × depende |
| Equivalência | Implicação | Mesma coluna × A V implica B V |
| ⇔ (relação entre fórmulas) | ↔ (conectivo) | Metalinguagem × linguagem-objeto |
| Satisfatível | Válida | Alguma valoração torna V × todas |

### 8. Atenção para a prova

*Inferência técnica e recomendação pedagógica; sem atribuir frequência à banca.*

- Contar linhas: 2ⁿ.
- Reconhecer rapidamente tautologias e contradições e usar **tabela abreviada**.
- Evidência histórica (amostra de duas provas): Prova 15 de 2018, Q70 (contradição entre proposições; gabarito C, de terceiros, não validado). Duas provas não permitem inferir frequência.

### 9. Síntese

Valores V/F; 2ⁿ linhas; tautologia, contradição, contingência; equivalência = mesma coluna; implicação = A→B tautologia; atalho por redução ao absurdo.

### 10. Pontos para a futura produção de questões (registro)

Construir e ler tabelas; classificar fórmulas; identificar equivalências; aplicar atalhos.

### 11. Referências

- Tabelas e equivalências: **conferidas por script em 2026-10-31**. Livros de lógica — de memória.
- Edital Transpetro nº 04/2026.4, Anexo IV, item 8.8. Prova Transpetro 2018, Prova 15, Q70.


---

## Argumentos

**Módulo:** M08 — Lógica matemática
**Texto oficial (Anexo IV):** 8.2 "Argumentos".
**Escopo:** A. O edital não distingue argumentos dedutivos de indutivos; ambos são situados, com foco na **validade dedutiva**.
**Status:** `VALIDADO` (aprovado pelo usuário em 2026-10-31, com ressalvas: interpretação dos itens 8.5, 8.6 e 8.9 a confirmar; decisão sobre puzzles de raciocínio lógico pendente; fontes de memória listadas em `docs/qualidade/relatorio-producao-modulo-08.md`). Validade das formas conferida por script em 2026-10-31.

**Objetivos de aprendizagem.** (1) Definir argumento, premissa e conclusão; (2) distinguir validade, solidez e verdade; (3) testar validade; (4) reconhecer regras de inferência e falácias formais; (5) analisar argumentos categóricos e silogismos.

---

### 1. Conceito

**Argumento** é uma sequência de proposições, as **premissas** (P₁, …, Pₙ), e uma proposição, a **conclusão** (C), em que se afirma que as premissas **fundamentam** a conclusão. Indicadores: de premissa ("pois", "porque", "dado que"); de conclusão ("logo", "portanto", "então", "assim").

### 2. Validade, solidez e verdade

| Conceito | Definição |
|---|---|
| **Argumento (dedutivo) válido** | **Impossível** as premissas serem todas V e a conclusão F. Equivale a (P₁ ∧ … ∧ Pₙ) → C ser **tautologia** |
| **Inválido** | Existe valoração com premissas V e conclusão F (**contraexemplo**) |
| **Sólido (correto)** | Válido **e** premissas verdadeiras |
| **Verdade** | Propriedade de proposições |
| **Validade** | Propriedade da **forma** do argumento |

Pontos centrais: validade **não** depende da verdade efetiva das proposições; um argumento válido pode ter premissa falsa e conclusão falsa; **premissas verdadeiras e conclusão verdadeira não bastam** para validade. Se as premissas forem **contraditórias**, o argumento é válido (explosão), embora não sólido.

### 3. Como testar a validade

1. **Tabela-verdade:** procurar linha com todas as premissas V e conclusão F. Se existir, é **inválido**; se não, é **válido**.
2. **Tabela abreviada (redução ao absurdo):** atribuir premissas V e conclusão F; se houver contradição, é válido.
3. **Regras de inferência / dedução** (arquivo `06`).
4. **Diagramas de Venn** para argumentos categóricos (seção 6).

### 4. Regras de inferência e formas válidas (conferidas por enumeração)

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

### 5. Falácias formais (formas **inválidas**; conferidas)

| Falácia | Forma | Exemplo |
|---|---|---|
| **Afirmação do consequente** | p → q ; q ⊢ p | "Se chove, a rua molha; a rua está molhada; logo choveu." (pode ser mangueira) |
| **Negação do antecedente** | p → q ; ¬p ⊢ ¬q | "Se chove, a rua molha; não choveu; logo a rua não molhou." |

Outras falácias, **informais** (não da forma lógica): *ad hominem*, apelo à autoridade, falso dilema, generalização apressada, petição de princípio, *post hoc* (de memória).

### 6. Argumentos categóricos e silogismos

**Proposições categóricas** (Aristóteles; de memória):

| Tipo | Forma | Exemplo |
|---|---|---|
| **A** (universal afirmativa) | Todo S é P | Todo gato é mamífero |
| **E** (universal negativa) | Nenhum S é P | Nenhum réptil é mamífero |
| **I** (particular afirmativa) | Algum S é P | Algum felino é doméstico |
| **O** (particular negativa) | Algum S não é P | Algum animal não é mamífero |

Negações: ¬(Todo S é P) ≡ **Algum S não é P**; ¬(Nenhum S é P) ≡ **Algum S é P**. **Silogismo categórico:** duas premissas e uma conclusão com três termos (maior, menor, médio). Exemplo válido (*Barbara*): "Todo M é P; todo S é M; logo todo S é P". Verificação por **diagramas de Venn** (conjuntos).

Nota: a leitura clássica aristotélica de "Todo S é P" pressupõe S não vazio; na **lógica moderna** (arquivo `05`), "Todo S é P" é ∀x(S(x) → P(x)) e é **verdadeira se S for vazio**.

### 7. Argumentos não dedutivos

| Tipo | Característica |
|---|---|
| **Dedutivo** | Conclusão **necessária** se as premissas forem V; validade é tudo ou nada |
| **Indutivo** | Conclusão **provável**; generaliza a partir de casos; pode ser forte ou fraco |
| **Por analogia** | Semelhança entre casos |
| **Abdutivo** | Melhor explicação para observações (de memória) |

O edital trata da **lógica matemática**, cujo foco é a dedução.

### 8. Exemplo resolvido (didático)

"Se o relatório está pronto, o gerente aprova. O gerente não aprovou. Logo, o relatório não está pronto." Forma: p → q ; ¬q ⊢ ¬p (**modus tollens**), **válido**. Troque a segunda premissa por "O gerente aprovou" e a conclusão por "o relatório está pronto": afirmação do consequente, **inválido**.

Exemplo de identificação da conclusão que torna válido: dadas "p → q" e "q → r", a conclusão "p → r" torna o argumento válido (silogismo hipotético).

### 9. Comparações conceituais

| A | B | Diferença |
|---|---|---|
| Validade | Verdade | Da forma do argumento × de proposições |
| Argumento válido | Sólido | Forma correta × forma correta e premissas V |
| Modus ponens | Afirmação do consequente | Válido × falácia |
| Modus tollens | Negação do antecedente | Válido × falácia |
| Dedutivo | Indutivo | Necessário × provável |
| Falácia formal | Informal | Forma inválida × erro de conteúdo/contexto |

### 10. Atenção para a prova

*Inferência técnica e recomendação pedagógica; sem atribuir frequência à banca.*

- Testar sempre **procurando contraexemplo**: premissas V e conclusão F.
- Não confundir **conclusão verdadeira** com argumento válido.
- Evidência histórica (amostra de duas provas): a Prova 6 de 2023 trouxe **Q28** (argumento: conclusão que o torna válido; gabarito D) e questões de raciocínio lógico (Q36, anulada; Q37, sem item 8.x claro). Gabaritos de terceiros, não validados. Duas provas não permitem inferir frequência.

### 11. Síntese

Argumento = premissas + conclusão. Válido = nenhuma valoração com premissas V e conclusão F. Regras: modus ponens e tollens, silogismos, dilema, resolução. Falácias formais: afirmar o consequente, negar o antecedente. Categóricas: A, E, I, O.

### 12. Pontos para a futura produção de questões (registro)

Testar validade; completar conclusão; identificar falácia; negar categóricas; silogismo com Venn.

### 13. Referências

- Formas válidas e inválidas: **conferidas por script em 2026-10-31**. Lógica aristotélica e falácias informais — **de memória, não verificadas**.
- Edital Transpetro nº 04/2026.4, Anexo IV, item 8.2. Provas: Transpetro 2023, Prova 6, Q28, Q36 e Q37 (gabaritos de terceiros, não validados).


---

## A Lógica Sentencial (Proposicional)

**Módulo:** M08 — Lógica matemática
**Texto oficial (Anexo IV):** 8.3 "A lógica sentencial".
**Escopo:** A. "Lógica sentencial" é a **lógica proposicional**: trata sentenças como unidades indivisíveis e suas combinações por conectivos. Conectivos e tabelas: `01` e `02`; argumentos: `03`; sintaxe e dedução: `06`; decidibilidade: `07`.
**Status:** `VALIDADO` (aprovado pelo usuário em 2026-10-31, com ressalvas: interpretação dos itens 8.5, 8.6 e 8.9 a confirmar; decisão sobre puzzles de raciocínio lógico pendente; fontes de memória listadas em `docs/qualidade/relatorio-producao-modulo-08.md`). Resultados conferidos por script em 2026-10-31.

**Objetivos de aprendizagem.** (1) Descrever a linguagem, a semântica e a dedução da lógica proposicional; (2) usar consequência semântica e equivalência; (3) aplicar formas normais; (4) conhecer a resolução e a completude funcional; (5) distinguir a lógica sentencial da de predicados.

---

### 1. Panorama

| Componente | Conteúdo |
|---|---|
| **Linguagem (sintaxe)** | Letras sentenciais, conectivos, parênteses; fórmulas bem formadas (arquivo `06`) |
| **Semântica** | Valorações, tabelas-verdade, satisfatibilidade, validade, consequência (arquivos `02` e `07`) |
| **Sistema dedutivo (prova)** | Axiomático, dedução natural, tableaux, resolução (arquivo `06`) |
| **Metapropriedades** | **Correção**, **completude**, **decidibilidade**, compacidade (arquivo `07`) |

A lógica sentencial **não** analisa a estrutura interna das proposições simples ("Sócrates é mortal"), nem quantifica: isso é papel da lógica de **predicados** (arquivo `05`).

### 2. Semântica: noções centrais

| Noção | Definição |
|---|---|
| **Valoração** | Atribuição de V/F às letras sentenciais (estendida às fórmulas; arquivo `07`) |
| **Satisfatível** | Existe valoração que a torna V |
| **Válida (tautologia)** | V em toda valoração (símbolo ⊨ A) |
| **Insatisfatível (contradição)** | Nenhuma valoração a torna V |
| **Consequência lógica** (Γ ⊨ A) | Toda valoração que torna **todas** as fórmulas de Γ V torna A V |
| **Equivalência** | A ⊨ B e B ⊨ A |

**Relação-chave:** Γ ⊨ A se e somente se Γ ∪ {¬A} é **insatisfatível** (base da refutação, tableaux e resolução). **Teorema da dedução:** Γ ∪ {A} ⊢ B se e somente se Γ ⊢ A → B (de memória).

### 3. Formas normais

| Forma | Definição | Exemplo |
|---|---|---|
| **Literal** | Letra ou sua negação | p ; ¬q |
| **Forma normal conjuntiva (FNC)** | **Conjunção de disjunções** de literais (cláusulas) | (p ∨ ¬q) ∧ (r ∨ s) |
| **Forma normal disjuntiva (FND)** | **Disjunção de conjunções** de literais | (p ∧ ¬q) ∨ (r ∧ s) |

Toda fórmula é equivalente a uma FNC e a uma FND. Conversão: eliminar → e ↔ (p → q ≡ ¬p ∨ q); aplicar De Morgan; distribuir ∧ e ∨. A FND pode ser lida da tabela-verdade (linhas V). A FNC é a entrada da **resolução** e dos **resolvedores SAT**.

### 4. Resolução (visão geral)

Regra: de **(p ∨ q)** e **(¬p ∨ r)** infere-se **(q ∨ r)** (conferida: consequência válida). Para provar Γ ⊨ A: converter Γ ∪ {¬A} em cláusulas e derivar a **cláusula vazia** (contradição). Resolução é correta e **completa por refutação** para a lógica proposicional (de memória).

### 5. Completude funcional

Um conjunto de conectivos é **funcionalmente completo** se qualquer função de verdade pode ser expressa com ele. Exemplos: {¬, ∧}, {¬, ∨}, {¬, →}; os conectivos **NAND** (não-e) e **NOR** (não-ou) são completos **sozinhos**: ¬p ≡ p NAND p; p ∧ q ≡ (p NAND q) NAND (p NAND q); p ∨ q ≡ (p NAND p) NAND (q NAND q) (conferido). Há **16** funções binárias possíveis e 2^(2ⁿ) funções de *n* variáveis (conferido).

### 6. Satisfatibilidade (SAT)

O problema de decidir se uma fórmula proposicional é satisfatível (**SAT**) é **NP-completo** (teorema de Cook–Levin; de memória). Na prática, resolvedores modernos tratam problemas grandes (verificação de hardware e software, planejamento). Relação com computação: Módulos 1 e 5 (modelos e verificação).

### 7. Exemplo (didático)

Premissas: (1) p → q; (2) q → r; (3) ¬r. Conclusão: ¬p. Dedução: de (2) e (3), modus tollens: ¬q; de (1) e ¬q, modus tollens: ¬p. Verificação semântica: a única valoração com (3) V é r F; (2) força q F; (1) força p F — logo ¬p V (**válido**).

### 8. Comparações conceituais

| A | B | Diferença |
|---|---|---|
| Lógica sentencial | Lógica de predicados | Sentenças atômicas × objetos, predicados e quantificadores |
| ⊨ (consequência semântica) | ⊢ (derivabilidade) | Verdade em todas as valorações × existência de prova |
| FNC | FND | Conjunção de disjunções × disjunção de conjunções |
| Satisfatível | Válida | Alguma valoração × todas |
| Correção | Completude | Tudo que se prova é válido × tudo que é válido se prova |

### 9. Atenção para a prova

*Inferência técnica e recomendação pedagógica; sem atribuir frequência à banca.*

- Item 8.3 é o "núcleo" do módulo; muitas questões de lógica dependem de sentencial: conectivos, equivalências, validade.
- Evidência histórica (amostra de duas provas): Q35 de 2023 (consequência lógica de sentença quantificada) e Q70 de 2018 (contradição) foram associadas, de modo secundário, ao 8.3. Gabaritos de terceiros, não validados. Duas provas não permitem inferir frequência.

### 10. Síntese

Lógica sentencial: linguagem, semântica (valoração, validade, consequência) e dedução; formas normais FNC/FND; resolução; completude funcional (NAND, NOR); SAT NP-completo; correção e completude.

### 11. Pontos para a futura produção de questões (registro)

Consequência lógica; satisfatibilidade; conversão em forma normal; identificação de conjuntos completos; distinção ⊨ × ⊢.

### 12. Referências

- Equivalências de NAND e resolução: **conferidas por script em 2026-10-31**. Cook–Levin (SAT NP-completo), decidibilidade da proposicional, correção e completude, e NAND/NOR completos — **verificados em 2026-10-31** (Wikipedia e SEP; TAUT co-NP-completo apenas em resumo automático). Teorema da dedução e completude da resolução — **de memória**.
- Edital Transpetro nº 04/2026.4, Anexo IV, item 8.3. Provas: Transpetro 2023, Prova 6, Q35; Transpetro 2018, Prova 15, Q70 (gabaritos de terceiros, não validados).


---

## A Lógica de Predicados de Primeira Ordem

**Módulo:** M08 — Lógica matemática
**Texto oficial (Anexo IV):** 8.4 "A lógica de predicados de primeira ordem".
**Escopo:** A.
**Status:** `VALIDADO` (aprovado pelo usuário em 2026-10-31, com ressalvas: interpretação dos itens 8.5, 8.6 e 8.9 a confirmar; decisão sobre puzzles de raciocínio lógico pendente; fontes de memória listadas em `docs/qualidade/relatorio-producao-modulo-08.md`). Negações e exemplos em domínios finitos conferidos por script em 2026-10-31; resultados metateóricos (Gödel, Church, Turing) de memória.

**Objetivos de aprendizagem.** (1) Formalizar sentenças com predicados e quantificadores; (2) negar sentenças quantificadas; (3) interpretar fórmulas em domínios; (4) distinguir variáveis livres e ligadas; (5) conhecer a ordem dos quantificadores e os limites da lógica de primeira ordem.

---

### 1. Por que ir além da lógica sentencial

Em "Todo engenheiro é graduado; Maria é engenheira; logo Maria é graduada", a validade depende da **estrutura interna** das sentenças ("todo", "é"), que a lógica sentencial não captura. A **lógica de predicados (de primeira ordem — LPO)** acrescenta **termos**, **predicados** e **quantificadores**.

### 2. Linguagem

| Elemento | Descrição | Exemplo |
|---|---|---|
| **Constantes** | Nomeiam indivíduos | *a*, *maria* |
| **Variáveis** | Percorrem o domínio | *x*, *y* |
| **Símbolos de função** | Formam termos | *pai(x)*, *x + y* |
| **Predicados** (relações) | Propriedades ou relações; aridade | *Engenheiro(x)*; *Ama(x, y)* |
| **Igualdade** (opcional) | x = y | — |
| **Conectivos** | ¬ ∧ ∨ → ↔ | — |
| **Quantificadores** | ∀ (universal), ∃ (existencial) | ∀x P(x); ∃x P(x) |

**Primeira ordem:** os quantificadores atuam sobre **indivíduos**; na **segunda ordem**, também sobre predicados e conjuntos (mais expressiva, sem sistema dedutivo completo; de memória).

### 3. Quantificadores e tradução

| Sentença | Forma |
|---|---|
| Todo S é P | **∀x (S(x) → P(x))** |
| Algum S é P | **∃x (S(x) ∧ P(x))** |
| Nenhum S é P | ∀x (S(x) → ¬P(x)) ≡ ¬∃x (S(x) ∧ P(x)) |
| Algum S não é P | ∃x (S(x) ∧ ¬P(x)) |
| Existe exatamente um *x* com P | ∃x (P(x) ∧ ∀y (P(y) → y = x)) |

**Erros típicos de tradução:** usar **∧** com ∀ ("∀x (S(x) ∧ P(x))" diz que **todo** objeto é S e P) e **→** com ∃ ("∃x (S(x) → P(x))" é trivialmente verdadeira se existir algo que não seja S). Regra prática: **∀ combina com →; ∃ combina com ∧**.

Exemplo: "Todo petroleiro é navio": ∀x (Petroleiro(x) → Navio(x)). "Algum navio é petroleiro": ∃x (Navio(x) ∧ Petroleiro(x)).

### 4. Negação de quantificadores (conferida em domínio finito)

| Sentença | Negação equivalente |
|---|---|
| ¬∀x P(x) | **∃x ¬P(x)** |
| ¬∃x P(x) | **∀x ¬P(x)** |
| ¬∀x (S(x) → P(x)) | ∃x (S(x) ∧ ¬P(x)) |
| ¬∃x (S(x) ∧ P(x)) | ∀x (S(x) → ¬P(x)) |

Cuidado: a negação de "**todos** passaram" é "**algum** não passou" — não "ninguém passou".

### 5. Ordem dos quantificadores

Quantificadores **do mesmo tipo** comutam (∀x∀y ≡ ∀y∀x; ∃x∃y ≡ ∃y∃x). Os de **tipos diferentes não**: ∀x∃y R(x,y) **não** equivale a ∃y∀x R(x,y). Contraexemplo (conferido): domínio {1,2} e *R* verdadeira apenas em (1,1) e (2,2): ∀x∃y R(x,y) é V (cada um se relaciona consigo), mas ∃y∀x R(x,y) é F (nenhum *y* relaciona-se com todos). Interpretação: "todo aluno tem um professor" ≠ "existe um professor de todos os alunos". Só a segunda implica a primeira.

### 6. Variáveis livres e ligadas; sentenças

- **Ocorrência ligada:** no escopo de um quantificador que a quantifica; **livre:** caso contrário.
- **Sentença (fechada):** fórmula sem variáveis livres — tem valor-verdade numa interpretação. Fórmula com variável livre é uma **sentença aberta** (arquivo `01`).
- Exemplo: em ∀x (P(x) → Q(y)), *x* é ligada e *y* é livre.

### 7. Semântica: interpretações

Uma **interpretação** especifica um **domínio** (conjunto não vazio) e o significado dos símbolos (indivíduos, funções, relações). Uma sentença pode ser V numa interpretação e F noutra. Noções: **satisfatível** (V em alguma interpretação), **válida** (V em todas), **consequência lógica** (Γ ⊨ A: toda interpretação que satisfaz Γ satisfaz A). **Domínio vazio** é excluído na lógica clássica; num domínio vazio, ∀ seria vacuamente V e ∃ F (conferido), o que quebraria leis como ∀x P(x) → ∃x P(x).

Exemplo de consequência: de ∀x (P(x) → Q(x)) e P(a), segue Q(a) (instanciação universal + modus ponens). **Não** segue ∀x P(x) → ∀x Q(x) de forma recíproca: em domínio {1,2,3} com P = {1,2} e Q = {1}, ∀x (P(x) → Q(x)) é F, mas (∀x P(x) → ∀x Q(x)) é V (conferido) — logo as duas sentenças **não são equivalentes**; a primeira implica a segunda, não o contrário.

### 8. Regras de dedução com quantificadores (visão geral)

| Regra | Descrição |
|---|---|
| **Instanciação universal** (∀E) | De ∀x P(x), conclui-se P(t) para qualquer termo *t* |
| **Generalização universal** (∀I) | De P(a) com *a* **arbitrário** (sem premissa sobre *a*), conclui-se ∀x P(x) |
| **Generalização existencial** (∃I) | De P(t), conclui-se ∃x P(x) |
| **Instanciação existencial** (∃E) | De ∃x P(x), toma-se um nome novo *c* com P(c) (para provas) |

Detalhes e sistemas completos: arquivo `06` (de memória).

### 9. Propriedades e limites (de memória)

| Resultado | Enunciado |
|---|---|
| **Completude de Gödel (1929, tese; publicada em 1930)** — **verificada** (Wikipedia) | Toda sentença válida da LPO é demonstrável (nos sistemas usuais) |
| **Indecidibilidade (Church e Turing, 1936)** — **verificada** (Wikipedia) | **Não existe** algoritmo que decida a validade de qualquer sentença da LPO; ela é **semidecidível** (as válidas podem ser enumeradas/provadas) |
| **Incompletude de Gödel (1931)** | Teorias da aritmética suficientemente fortes são incompletas |
| **Compacidade; Löwenheim–Skolem** | Propriedades de modelos |

Contraste com a lógica **sentencial**, que é **decidível** (arquivo `07`).

### 10. Exemplo (didático)

Em um sistema de ordens de serviço, "toda ordem crítica tem responsável": ∀x (Crítica(x) → ∃y Responsável(y, x)). Negação: ∃x (Crítica(x) ∧ ∀y ¬Responsável(y, x)) — "há ordem crítica **sem** responsável". Aplicação em computação: consultas SQL e restrições de integridade têm base na LPO (cálculo relacional; Módulo 1).

### 11. Comparações conceituais

| A | B | Diferença |
|---|---|---|
| Lógica sentencial | Predicados | Sem estrutura interna × com termos e quantificadores |
| ∀x (S → P) | ∀x (S ∧ P) | "Todo S é P" × "tudo é S e P" |
| ∃x (S ∧ P) | ∃x (S → P) | "Algum S é P" × trivialmente V se algo não for S |
| ∀x∃y | ∃y∀x | Depende de *x* × único *y* para todos |
| Variável livre | Ligada | Sem quantificador × quantificada |
| 1ª ordem | 2ª ordem | Quantifica indivíduos × também predicados |

### 12. Atenção para a prova

*Inferência técnica e recomendação pedagógica; sem atribuir frequência à banca.*

- **Traduzir** com ∀→ e ∃∧; **negar** trocando o quantificador e negando o predicado.
- Atenção à ordem ∀∃ × ∃∀.
- Evidência histórica (amostra de duas provas): **Q35 de 2023** (consequência lógica de sentença quantificada; gabarito B) e **Q69 de 2018** (tradução de sentença para lógica de predicados; gabarito A). Gabaritos de terceiros, não validados. Duas provas não permitem inferir frequência.

### 13. Síntese

LPO = termos, predicados, ∀, ∃. Traduzir: ∀→, ∃∧. Negação: ¬∀ ≡ ∃¬; ¬∃ ≡ ∀¬. ∀∃ ≠ ∃∀. Sentenças, interpretações, consequência. Completa (Gödel), indecidível/semidecidível (Church–Turing).

### 14. Pontos para a futura produção de questões (registro)

Tradução; negação; ordem de quantificadores; consequência lógica; variáveis livres/ligadas; decidibilidade da LPO.

### 15. Referências

- Negações, contraexemplos e domínio vazio: **conferidos por script em 2026-10-31** (domínios finitos).
- Wikipedia, "Gödel's completeness theorem" e "Entscheidungsproblem" — **verificadas em 2026-10-31** (completude; indecidibilidade e semidecidibilidade); "Categorical proposition" — **verificada** (A, E, I, O; leitura moderna exige considerar categoria vazia). Incompletude, Löwenheim–Skolem; livros de lógica (Enderton, Mendelson) — **de memória, não verificados**.
- Edital Transpetro nº 04/2026.4, Anexo IV, item 8.4. Provas: Transpetro 2023, Prova 6, Q35; Transpetro 2018, Prova 15, Q69 (gabaritos de terceiros, não validados).


---

## Regras de Formação de Fórmulas e Sistemas Dedutivos

**Módulo:** M08 — Lógica matemática
**Textos oficiais (Anexo IV):** 8.5 "Regras de formação de fórmulas"; 8.6 "Sistemas dedutivos".
**Escopo:** A. Os sistemas dedutivos são apresentados em visão geral, com exemplos simples; sistemas específicos (Hilbert, dedução natural, tableaux, sequentes, resolução) são **interpretação** do item 8.6, **a confirmar**.
**Status:** `VALIDADO` (aprovado pelo usuário em 2026-10-31, com ressalvas: interpretação dos itens 8.5, 8.6 e 8.9 a confirmar; decisão sobre puzzles de raciocínio lógico pendente; fontes de memória listadas em `docs/qualidade/relatorio-producao-modulo-08.md`). Exemplos semânticos conferidos por script; definições dos sistemas são de memória.

**Objetivos de aprendizagem.** (1) Aplicar regras de formação e verificar fórmulas bem formadas; (2) usar precedência e parênteses; (3) construir árvores sintáticas; (4) distinguir sintaxe, semântica e dedução; (5) conhecer sistemas dedutivos e suas propriedades.

---

### 1. Regras de formação de fórmulas (item 8.5)

#### 1.1 Gramática da lógica sentencial (definição indutiva)

1. Toda **letra sentencial** (*p*, *q*, *r*, …) é uma fórmula (**átomo**). *(Opcionalmente ⊤ e ⊥.)*
2. Se *A* é fórmula, **¬A** é fórmula.
3. Se *A* e *B* são fórmulas, **(A ∧ B)**, **(A ∨ B)**, **(A → B)** e **(A ↔ B)** são fórmulas.
4. **Nada mais** é fórmula (cláusula de fechamento).

Em BNF: `F ::= p | ¬F | (F ∧ F) | (F ∨ F) | (F → F) | (F ↔ F)`.

| Expressão | Fórmula bem formada? |
|---|---|
| p ∧ q (como (p ∧ q)) | **Sim** |
| ¬¬p | **Sim** |
| (p → (q ∨ ¬r)) | **Sim** |
| p ∧ ∨ q | **Não** (dois conectivos binários seguidos) |
| (p q) | **Não** (falta conectivo) |
| ∧ p | **Não** (conectivo binário sem primeiro argumento) |
| (p → ) | **Não** |
| ¬(p | **Não** (parênteses desbalanceados) |

#### 1.2 Subfórmulas, conectivo principal e árvore sintática

- **Subfórmulas** de *A*: *A* e todas as fórmulas usadas na sua construção.
- **Conectivo principal:** o último introduzido; define o tipo da fórmula (por exemplo, ¬p ∨ q é uma **disjunção**; ¬(p ∨ q) é uma **negação**).
- **Árvore sintática:** raiz = conectivo principal; folhas = átomos. **Leitura única** (toda fórmula se decompõe de um só modo): parênteses ou precedência evitam ambiguidade.
- **Abreviações:** omitem-se parênteses externos e usam-se as precedências (¬ > ∧ > ∨ > → > ↔; arquivo `01`). Muitos textos adotam a associação **à direita** para → (p → q → r significa p → (q → r)); essa convenção **não foi confirmada** nas fontes consultadas e a precedência também varia entre autores. Como o condicional **não é associativo** (conferido), a ambiguidade importa: **use parênteses** e verifique o enunciado.

#### 1.3 Lógica de predicados (acréscimos)

- **Termos:** variável e constante são termos; se *f* é função *n*-ária e *t₁…tₙ* termos, *f(t₁,…,tₙ)* é termo.
- **Fórmula atômica:** *P(t₁,…,tₙ)* com *P* predicado *n*-ário (e *t₁ = t₂*).
- Se *A* é fórmula e *x* variável, **∀x A** e **∃x A** são fórmulas.
- Conceitos: **escopo** de quantificador, variável **livre/ligada**, **sentença** (arquivo `05`). A **substituição** de variável por termo exige que o termo seja **livre para a variável** (evita captura; de memória).

### 2. Sintaxe, semântica e dedução

| Plano | Pergunta | Notação |
|---|---|---|
| **Sintaxe** | A expressão é uma fórmula? | regras de formação |
| **Semântica** | A fórmula é V? Vale em todo caso? | ⊨ (valoração/interpretação) |
| **Dedução (teoria da prova)** | Existe uma prova? | ⊢ (derivação) |

### 3. Sistemas dedutivos (item 8.6; de memória)

Um **sistema dedutivo** (cálculo, sistema formal) define, por **regras puramente sintáticas**, quais fórmulas são **deriváveis** a partir de premissas. Componentes: **linguagem**, **axiomas** (possivelmente nenhum), **regras de inferência** e a noção de **derivação (prova)**: sequência finita de fórmulas, cada uma axioma, premissa ou obtida por regra.

| Sistema | Característica |
|---|---|
| **Axiomático (Hilbert)** | Muitos axiomas, poucas regras (normalmente *modus ponens*); provas longas, adequado ao estudo teórico |
| **Dedução natural (Gentzen)** | Regras de **introdução** e **eliminação** de cada conectivo; hipóteses temporárias; próxima do raciocínio informal |
| **Cálculo de sequentes (Gentzen)** | Sequentes Γ ⊢ Δ; útil para teoria da prova |
| **Tableaux semânticos** | Prova por **refutação**: decompor a fórmula negada em árvore; ramos fechados indicam insatisfatibilidade |
| **Resolução** | Cláusulas e regra de resolução (arquivo `04`); base de provadores automáticos e da programação em lógica |

#### 3.1 Dedução natural: regras principais (proposicional)

| Conectivo | Introdução | Eliminação |
|---|---|---|
| **∧** | A ; B ⊢ A ∧ B | A ∧ B ⊢ A ; A ∧ B ⊢ B |
| **→** | Supondo A, derivar B ⇒ A → B | A → B ; A ⊢ B (*modus ponens*) |
| **∨** | A ⊢ A ∨ B ; B ⊢ A ∨ B | A ∨ B ; (A ⊢ C) ; (B ⊢ C) ⊢ C (por casos) |
| **¬** | Supondo A, derivar ⊥ ⇒ ¬A | A ; ¬A ⊢ ⊥ |
| **Redução ao absurdo** | Supondo ¬A, derivar ⊥ ⇒ A | — |

Exemplo — provar p → r a partir de p → q e q → r: (1) p → q [premissa]; (2) q → r [premissa]; (3) p [hipótese]; (4) q [→E, 1,3]; (5) r [→E, 2,4]; (6) p → r [→I, 3–5].

#### 3.2 Propriedades de um sistema

| Propriedade | Enunciado |
|---|---|
| **Correção (*soundness*)** | Tudo o que se **deriva** é consequência semântica: Γ ⊢ A ⇒ Γ ⊨ A |
| **Completude** | Toda consequência semântica é derivável: Γ ⊨ A ⇒ Γ ⊢ A |
| **Consistência** | Não deriva uma contradição (A e ¬A) |
| **Decidibilidade** | Existe algoritmo que decide se há derivação (arquivo `07`) |

A lógica **sentencial** (clássica) tem sistemas **corretos, completos e decidíveis**; a **de predicados de primeira ordem** tem sistemas corretos e completos (Gödel, 1930; de memória), porém **indecidível** (arquivo `05`).

#### 3.3 Teoremas e termos relacionados

- **Teorema:** fórmula derivável sem premissas (⊢ A). Na lógica clássica sentencial, **teoremas = tautologias** (correção + completude).
- **Regra derivada/admissível:** regra que pode ser eliminada sem enfraquecer o sistema.
- **Prova direta, por contraposição, por redução ao absurdo (por contradição)** e **por casos**: técnicas matemáticas ligadas às regras acima.
- **Programação em lógica** (Prolog) usa resolução sobre cláusulas de Horn (visão geral; de memória).

### 4. Exemplos (didáticos)

1. Fórmula bem formada? "(p ∧ q) → (r ∨ ¬s)": **sim**, conectivo principal →.
2. Prova semântica de modus tollens: não há valoração com p → q V, ¬q V e ¬p F (conferido).
3. A prova de "p ⊢ q → p" em dedução natural usa hipótese temporária *q* e a regra →I (tautologia p → (q → p), conferível).

### 5. Comparações conceituais

| A | B | Diferença |
|---|---|---|
| Fórmula | Expressão qualquer | Satisfaz as regras de formação × sequência de símbolos |
| ⊨ | ⊢ | Verdade em todo modelo × existência de prova |
| Correção | Completude | Não prova o falso × prova todo o válido |
| Axiomático | Dedução natural | Muitos axiomas, uma regra × regras de introdução/eliminação |
| Prova | Tabela-verdade | Procedimento sintático × semântico |
| Teorema | Axioma | Derivado × assumido |

### 6. Atenção para a prova

*Inferência técnica e recomendação pedagógica; sem atribuir frequência à banca.*

- Verificar se uma expressão é **bem formada** pelos erros típicos: conectivo faltando ou sobrando, parênteses desbalanceados.
- Distinguir **correção** de **completude**.
- Evidência histórica (amostra de duas provas): a Q28 de 2023 (argumento) foi associada, de modo secundário, a 8.6 (sistemas dedutivos). Itens 8.5 e 8.6 não tiveram questão primária. Gabaritos de terceiros, não validados. Duas provas não permitem inferir frequência.

### 7. Síntese

Fórmulas: definição indutiva (átomos, ¬, conectivos binários, fechamento). Sistemas dedutivos: axiomas e regras produzem derivações (⊢); correção, completude, consistência. Hilbert, dedução natural, tableaux, resolução. Sentencial: decidível; predicados: semidecidível.

### 8. Pontos para a futura produção de questões (registro)

Fórmula bem formada; conectivo principal; completar prova simples; correção × completude; escolha de sistema.

### 9. Referências

- Exemplos semânticos: **conferidos por script em 2026-10-31**. Wikipedia, "Hilbert system", "Sequent calculus" (LK e LJ, 1934/1935), "Method of analytic tableaux" (Beth, 1955) e "Resolution (logic)" (Robinson, 1965) — **verificadas em 2026-10-31**; dedução natural (NK/NJ) de Gentzen sem data confirmada. Livros de lógica — **de memória, não verificados**.
- Edital Transpetro nº 04/2026.4, Anexo IV, itens 8.5 e 8.6. Prova Transpetro 2023, Prova 6, Q28 (gabarito de terceiros, não validado).


---

## Decidibilidade da Lógica Sentencial e Funções de Avaliação

**Módulo:** M08 — Lógica matemática
**Textos oficiais (Anexo IV):** 8.7 "Decidibilidade da lógica sentencial"; 8.9 "Funções de avaliação." (com ponto final no edital).
**Escopo:** A. Interpretação adotada para 8.9 (**a confirmar**): **valoração/função de avaliação** que atribui valores-verdade às letras sentenciais e se estende às fórmulas; relação com tabelas-verdade, interpretações e semântica.
**Status:** `VALIDADO` (aprovado pelo usuário em 2026-10-31, com ressalvas: interpretação dos itens 8.5, 8.6 e 8.9 a confirmar; decisão sobre puzzles de raciocínio lógico pendente; fontes de memória listadas em `docs/qualidade/relatorio-producao-modulo-08.md`). Resultados semânticos conferidos por script; resultados de computabilidade (Church, Turing, Cook) são de memória.

**Objetivos de aprendizagem.** (1) Definir função de avaliação e sua extensão composicional; (2) definir decidibilidade; (3) justificar a decidibilidade da lógica sentencial; (4) contrastar com a lógica de predicados; (5) relacionar com complexidade (SAT).

---

### 1. Funções de avaliação (item 8.9)

#### 1.1 Definição

Uma **função de avaliação (valoração)** *v* atribui a cada **letra sentencial** um valor do conjunto {V, F} (ou {1, 0}): *v*: {p, q, r, …} → {V, F}. Essa atribuição se **estende de modo único** a todas as fórmulas, por **recursão sobre a estrutura** da fórmula (**composicionalidade**; regras de formação, arquivo `06`).

| Fórmula | Valor da avaliação (v̄) |
|---|---|
| p (átomo) | *v*(p) |
| ¬A | V se v̄(A) = F; F se v̄(A) = V |
| A ∧ B | V se v̄(A) = V **e** v̄(B) = V |
| A ∨ B | V se v̄(A) = V **ou** v̄(B) = V |
| A → B | F se v̄(A) = V e v̄(B) = F; V nos demais casos |
| A ↔ B | V se v̄(A) = v̄(B) |

Em forma aritmética (com V = 1, F = 0): v̄(¬A) = 1 − v̄(A); v̄(A ∧ B) = mín(v̄(A), v̄(B)); v̄(A ∨ B) = máx(v̄(A), v̄(B)); v̄(A → B) = máx(1 − v̄(A), v̄(B)) (conferível). Cada conectivo corresponde a uma **função de verdade** (tabela-verdade); veritativo-funcionalidade (arquivo `02`).

#### 1.2 Conceitos derivados

- Uma valoração **satisfaz** uma fórmula se lhe atribui V (**modelo**).
- **Tautologia:** satisfeita por **toda** valoração; **contradição:** por nenhuma.
- **Consequência:** Γ ⊨ A se toda valoração que satisfaz Γ satisfaz A (arquivo `04`).
- **Número de valorações:** com *n* letras há **2ⁿ** valorações (as linhas da tabela-verdade).
- A **tabela-verdade** é a lista de todas as valorações com o valor da fórmula em cada uma.
- Na **lógica de predicados**, a avaliação envolve **interpretação** (domínio e significado dos símbolos) e **atribuição às variáveis** (arquivo `05`).

#### 1.3 Exemplo (conferido)

*v*(p) = V, *v*(q) = F, *v*(r) = V. Avaliar (p → q) ∨ r: v̄(p → q) = F; v̄(r) = V; logo v̄ = **V**. Avaliar ¬(p ∧ q) → r: p ∧ q = F, ¬ = V, V → V = **V**.

### 2. Decidibilidade (item 8.7)

#### 2.1 Conceito

Um problema é **decidível** se existe um **algoritmo** que, para **qualquer** entrada, **termina** e responde corretamente "sim" ou "não". Em lógica, interessam os problemas: **validade** (a fórmula é tautologia?), **satisfatibilidade** e **consequência** (Γ ⊨ A?). Um problema é **semidecidível** se existe algoritmo que responde "sim" quando a resposta é sim, mas pode **não terminar** quando é não.

#### 2.2 A lógica sentencial é decidível

**Procedimento de decisão (tabela-verdade):** dada uma fórmula com *n* letras, avaliam-se as **2ⁿ valorações** (finitas); a fórmula é válida se for V em todas, satisfatível se V em alguma. Como o número de valorações é **finito** e cada avaliação é um cálculo finito, o procedimento **sempre termina**. Logo, **validade, satisfatibilidade e consequência** (com premissas finitas) são **decidíveis** na lógica sentencial. Outros procedimentos de decisão: **tabela abreviada**, **tableaux**, **resolução** (arquivos `04` e `06`) e **resolvedores SAT**.

#### 2.3 Custo computacional (de memória)

- O método da tabela-verdade tem custo **exponencial** (2ⁿ).
- O problema **SAT** é **NP-completo** (Cook–Levin); decidir se uma fórmula é **tautologia** é **co-NP-completo**. Não se conhece algoritmo polinomial geral (questão **P versus NP** em aberto).
- Mesmo assim, resolvedores SAT modernos resolvem muitos problemas práticos grandes. Subclasses têm algoritmos eficientes (por exemplo, cláusulas de **Horn**; **2-SAT**; de memória).

#### 2.4 Contraste com a lógica de predicados

| Aspecto | Lógica sentencial | Lógica de predicados de 1ª ordem |
|---|---|---|
| Validade | **Decidível** (tabela-verdade) | **Indecidível** (Church e Turing, 1936) |
| Semidecidibilidade | Trivial | **Semidecidível**: as sentenças válidas podem ser enumeradas e provadas |
| Número de interpretações | Finito (2ⁿ) | Infinito (domínios arbitrários) |
| Completude de sistemas | Sim | Sim (Gödel, 1930) |

Fragmentos decidíveis da LPO (por exemplo, apenas predicados **monádicos**, de memória) existem, mas a LPO em geral não é decidível.

#### 2.5 Metapropriedades relacionadas

**Correção**, **completude**, **consistência** e **decidibilidade** são propriedades do sistema e da lógica (arquivo `06`). Para a sentencial clássica valem todas; a decidibilidade decorre da **finitude** das valorações.

### 3. Exemplos (didáticos)

1. A fórmula (p → q) → (¬q → ¬p) com duas letras: 4 valorações; V em todas (contrapositiva) → **tautologia**, e a decisão termina em 4 passos.
2. Uma fórmula com 30 letras exige até 2³⁰ (≈ 10⁹) valorações pelo método ingênuo: **decidível**, mas **caro**; por isso usam-se resolvedores SAT.
3. Determinar a validade de uma sentença da LPO: não há procedimento geral que sempre termine; um provador pode **nunca parar** numa sentença não válida.

### 4. Comparações conceituais

| A | B | Diferença |
|---|---|---|
| Decidível | Semidecidível | Responde sempre, em tempo finito × só garante resposta no "sim" |
| Decidível | Eficiente | Existe algoritmo que termina × termina em tempo viável |
| Valoração | Interpretação | Atribuição a letras sentenciais × domínio e símbolos na LPO |
| Função de avaliação | Tabela-verdade | Uma valoração (uma linha) × todas as valorações |
| SAT | Validade | Existe valoração V × toda valoração é V (dual: ¬A insatisfatível) |

### 5. Atenção para a prova

*Inferência técnica e recomendação pedagógica; sem atribuir frequência à banca.*

- A lógica sentencial é decidível porque o número de valorações é **finito** (2ⁿ).
- A LPO é **indecidível** (mas semidecidível).
- Itens 8.7 e 8.9 **não tiveram questão** identificada nas duas provas catalogadas; a ausência não permite inferir baixa incidência.

### 6. Síntese

Avaliação *v*: letras → {V, F}, estendida por composicionalidade. 2ⁿ valorações. Lógica sentencial decidível (tabela-verdade, termina); custo exponencial; SAT NP-completo. LPO: indecidível, semidecidível.

### 7. Pontos para a futura produção de questões (registro)

Avaliar fórmula numa valoração; justificar decidibilidade; contrastar com predicados; contar valorações; relacionar a SAT.

### 8. Referências

- Cálculos de avaliação e contagem de valorações: **conferidos por script em 2026-10-31**. Church, Turing, Cook–Levin, P versus NP — **de memória, não verificados**.
- Edital Transpetro nº 04/2026.4, Anexo IV, itens 8.7 e 8.9.

