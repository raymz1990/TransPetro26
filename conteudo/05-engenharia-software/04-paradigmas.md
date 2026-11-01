---
modulo: 05-engenharia-software
arquivo: 04-paradigmas
itens_edital:
  - "5.3 Uso de modelos, metodologias, técnicas e ferramentas de análise e projeto de sistemas (paradigma estruturado e paradigma orientado a objetos)"
ids_matriz: ["E5-044"]
escopo: "A — conteúdo expresso no edital (parte 'paradigma estruturado e paradigma orientado a objetos'). Os modelos, técnicas e ferramentas de análise e projeto estão em `05-analise-e-projeto.md`. Os exemplos de código usam Python apenas como notação ilustrativa; linguagens como Java não são conteúdo da Ênfase 5."
tipo_conteudo: "teoria"
status: "VALIDADO"
ultima_atualizacao: "2026-10-31"
---

# Paradigmas: Estruturado e Orientado a Objetos

**Módulo:** M05 — Engenharia de software
**Texto oficial (Anexo IV):** 5.3 "Uso de modelos, metodologias, técnicas e ferramentas de análise e projeto de sistemas (paradigma estruturado e paradigma orientado a objetos)".
**Escopo:** A. Este arquivo trata dos **conceitos dos dois paradigmas**; o arquivo `05` trata dos **modelos, metodologias, técnicas e ferramentas** de análise e projeto de cada um.
**Status:** `VALIDADO` (aprovado pelo usuário em 2026-10-31, com ressalvas: interpretação dos itens 5.2 e 5.5 a confirmar; normas ISO, princípios ISTQB e vários referenciais de memória não verificados em fonte primária — ver `docs/qualidade/relatorio-producao-modulo-05.md`).

**Objetivos de aprendizagem.** (1) Definir paradigma e caracterizar o estruturado e o orientado a objetos; (2) explicar abstração, encapsulamento, herança e polimorfismo (sobrecarga e sobrescrita); (3) distinguir associação, agregação, composição e generalização; (4) avaliar coesão e acoplamento; (5) comparar os paradigmas.

---

## 1. Introdução

**Paradigma** é um modo de **pensar e organizar** um sistema: quais são os elementos básicos e como eles se relacionam. O **paradigma estruturado** organiza o sistema em torno de **processos (funções) e dados separados**; o **paradigma orientado a objetos (OO)** organiza-o em torno de **objetos** que reúnem dados e comportamento. Os dois influenciam a **análise**, o **projeto** e a **programação**. Os conceitos deste arquivo são independentes de linguagem.

## 2. Paradigma estruturado

### 2.1 Programação estruturada

Surgiu para disciplinar o código (combate ao uso indiscriminado de desvios incondicionais, o *goto*). Princípios:

- **Três estruturas de controle:** **sequência**, **seleção** (decisão: *se–então–senão*) e **repetição** (laços). Qualquer algoritmo pode ser expresso com elas (resultado conhecido como teorema de Böhm–Jacopini).
- **Modularização:** dividir o programa em **sub-rotinas/funções/módulos** com responsabilidade definida.
- **Desenvolvimento descendente (*top-down*)** e **refinamentos sucessivos**: partir do problema geral e detalhá-lo.
- **Abstração procedural:** usar uma função sabendo **o que** ela faz, sem conhecer **como**.
- **Separação entre dados e procedimentos:** os dados são estruturas (registros, vetores) manipuladas por funções.

```python
# Exemplo ilustrativo (estruturado): dados e funções separados
def calcular_tempo_parada(inicio_h, fim_h):
    if fim_h < inicio_h:          # seleção
        raise ValueError("fim anterior ao início")
    return fim_h - inicio_h

paradas = [(8, 10), (13, 17)]     # dados (lista de tuplas)
total = 0
for p in paradas:                  # repetição
    total += calcular_tempo_parada(p[0], p[1])   # sequência
print(total)                       # saída: 6
```

*Leitura:* o programa combina **sequência, seleção e repetição**; os **dados** (`paradas`) estão **fora** da função que os processa.

### 2.2 Análise e projeto estruturados

Baseados na **decomposição funcional** do sistema: identificam-se **processos** (funções), **fluxos de dados**, **depósitos de dados** e **entidades externas**; o projeto produz uma **hierarquia de módulos**. Modelos e técnicas (diagramas de fluxo de dados, dicionário de dados, diagrama de estrutura) estão no arquivo `05`.

### 2.3 Coesão e acoplamento (qualidade do projeto)

Conceitos criados no projeto estruturado e válidos para qualquer paradigma:

| Conceito | Definição | Meta |
|---|---|---|
| **Coesão** | Grau em que os elementos de um módulo **se relacionam entre si**, em torno de **um objetivo** | **Alta coesão** |
| **Acoplamento** | Grau de **dependência entre módulos** | **Baixo acoplamento** |

**Tipos de coesão** (do menos desejável ao mais desejável): **coincidental** (elementos sem relação), **lógica** (agrupa funções por categoria geral), **temporal** (executados no mesmo momento), **procedimental**, **comunicacional** (operam sobre os mesmos dados), **sequencial** (saída de um é entrada do seguinte) e **funcional** (todos contribuem para uma única tarefa bem definida).

**Tipos de acoplamento** (do mais forte ao mais fraco): por **conteúdo** (um módulo altera o interior de outro), **comum** (dados globais compartilhados), **externo**, de **controle** (um módulo controla o fluxo do outro), de **dados** (troca apenas dados necessários) e **por mensagem**.

*Regra de ouro:* **alta coesão e baixo acoplamento** → módulos mais fáceis de entender, testar, reutilizar e manter.

### 2.4 Vantagens e limitações

| Vantagens | Limitações |
|---|---|
| Simples e direto para problemas procedurais | Dados e funções **separados** dificultam a manutenção quando as estruturas de dados mudam (efeito em muitas funções) |
| Fácil de entender e de depurar | Reutilização limitada; baixa **extensibilidade** |
| Boa base de algoritmos | Em sistemas grandes, a hierarquia de funções fica complexa |

## 3. Paradigma orientado a objetos

### 3.1 Conceitos básicos

| Conceito | Definição |
|---|---|
| **Objeto** | Entidade com **identidade**, **estado** (valores dos atributos) e **comportamento** (operações); por exemplo, uma bomba específica |
| **Classe** | **Molde** (tipo) que define atributos e métodos comuns a um conjunto de objetos |
| **Instância / instanciação** | Objeto criado a partir de uma classe; **instanciar** é criar um objeto |
| **Atributo** | Dado que descreve o estado do objeto |
| **Método (operação)** | Comportamento que o objeto executa |
| **Mensagem** | Chamada de um método de um objeto por outro |
| **Construtor** | Operação que inicializa um novo objeto |
| **Interface** | Conjunto de operações que uma classe se compromete a oferecer, **sem implementação** |
| **Classe abstrata** | Classe que **não é instanciada diretamente**, serve de base e pode ter operações abstratas |

### 3.2 Os quatro pilares

| Pilar | Definição | Benefício |
|---|---|---|
| **Abstração** | Representar apenas as **características essenciais** do objeto para o contexto, ignorando detalhes irrelevantes | Reduz a complexidade |
| **Encapsulamento** | **Ocultar o estado interno** e expor operações por uma interface pública (visibilidade pública, protegida, privada) | Protege a consistência; reduz o acoplamento |
| **Herança** | Uma classe (**subclasse**) **herda** atributos e métodos de outra (**superclasse**), podendo acrescentá-los ou redefini-los (relação "é um") | Reuso; hierarquias |
| **Polimorfismo** | Capacidade de **operações com o mesmo nome terem comportamentos distintos**, conforme o objeto ou os parâmetros | Flexibilidade e extensibilidade |

### 3.3 Formas de polimorfismo

| Forma | Descrição | Exemplo |
|---|---|---|
| **Sobrecarga (*overloading*)** | **Vários métodos com o mesmo nome na mesma classe, com parâmetros diferentes** (número ou tipos); resolvida pela assinatura (em geral, em tempo de compilação) | `calcular(horas)` e `calcular(inicio, fim)` na mesma classe |
| **Sobrescrita (*overriding*)** | A **subclasse redefine** um método herdado, **com a mesma assinatura**; a versão executada depende do tipo real do objeto, em **tempo de execução** (ligação dinâmica) | `Bomba` e `Valvula` redefinem `descrever()` de `Equipamento` |
| **Polimorfismo de subtipo (inclusão)** | Um objeto de subclasse pode ser usado onde se espera a superclasse | Lista de `Equipamento` contendo bombas e válvulas |

*Nota terminológica:* o termo **polimorfismo** é usado de modo amplo; em muitas fontes ele designa principalmente a **sobrescrita com ligação dinâmica**, ao passo que **sobrecarga** é o mecanismo de métodos de mesmo nome e parâmetros diferentes. Algumas provas descrevem a sobrecarga como "técnica" do paradigma e outras chamam de **polimorfismo** a propriedade de várias operações terem o mesmo nome; **leia a descrição do enunciado**.

```python
class Equipamento:
    def __init__(self, tag):          # construtor
        self._tag = tag               # atributo encapsulado (convenção de privado)
    def descrever(self):
        return f"Equipamento {self._tag}"

class Bomba(Equipamento):             # herança: Bomba "é um" Equipamento
    def descrever(self):              # sobrescrita
        return f"Bomba {self._tag}"

for e in [Equipamento("E-1"), Bomba("P-101")]:   # polimorfismo de subtipo
    print(e.descrever())              # "Equipamento E-1" e "Bomba P-101"
```

*Leitura:* a mesma chamada `descrever()` produz resultados diferentes conforme o **tipo real** do objeto. *(Python não implementa sobrecarga por assinatura como outras linguagens; o exemplo ilustra sobrescrita e subtipo.)*

### 3.4 Relacionamentos entre classes

| Relacionamento | Significado | Exemplo | Dependência de existência |
|---|---|---|---|
| **Associação** | Ligação entre classes ("conhece/usa") | Técnico *registra* Ordem | Independente |
| **Agregação** | Associação **todo–parte**, em que a parte **pode existir sem** o todo | Equipe *tem* Técnicos | Partes existem sozinhas |
| **Composição** | Todo–parte **forte**; a parte **não existe sem** o todo (ciclo de vida atrelado) | Ordem *compõe-se* de Itens | Parte morre com o todo |
| **Generalização (herança)** | "É um" | Bomba **é um** Equipamento | — |
| **Realização** | Classe implementa uma interface | `Bomba` implementa `Monitoravel` | — |
| **Dependência** | Uso temporário | Classe usa outra como parâmetro | Fraca |

### 3.5 Princípios e padrões de projeto OO (complemento B)

- **Princípios SOLID:** responsabilidade única; aberto/fechado; substituição de Liskov; segregação de interfaces; inversão de dependência.
- **Preferir composição a herança** quando "é um" não for natural.
- **Padrões de projeto** (soluções recorrentes catalogadas; por exemplo, os 23 padrões do livro dos "Gang of Four", em categorias de **criação**, **estruturais** e **comportamentais**). *(Citados de memória; não verificados online.)*

### 3.6 Vantagens e limitações

| Vantagens | Limitações |
|---|---|
| Modelagem próxima do domínio; **reutilização** e **manutenção** | Curva de aprendizado; sobrecarga de projeto |
| **Encapsulamento** reduz impacto de mudanças | Herança mal usada gera acoplamento e hierarquias frágeis |
| Boa base para UML e componentes | Pode ser excessivo para problemas simples ou puramente funcionais |

## 4. Comparação entre os paradigmas

| Critério | **Estruturado** | **Orientado a objetos** |
|---|---|---|
| Unidade básica | **Função/processo** | **Objeto/classe** |
| Dados e comportamento | **Separados** | **Reunidos** (encapsulados) |
| Decomposição | **Funcional** (top-down) | Por **objetos** do domínio |
| Reuso | Bibliotecas de funções | Herança, composição, componentes |
| Mudanças nos dados | Podem afetar muitas funções | Contidas pelo encapsulamento |
| Modelos de análise | DFD, DER, dicionário de dados | Casos de uso, diagramas de classes, de sequência (arquivo `05`) |
| Qualidade do projeto | Coesão e acoplamento | Coesão, acoplamento, encapsulamento |
| Adequação | Problemas procedurais, algoritmos, *scripts* | Sistemas complexos, de domínio rico, evolutivos |

*Os paradigmas não são excludentes:* sistemas OO contêm **código estruturado** dentro dos métodos; linguagens permitem estilos mistos. Existem ainda outros paradigmas (funcional, lógico) citados apenas como contexto.

## 5. Comparações conceituais

| Conceito A | Conceito B | Diferença principal |
|---|---|---|
| Classe | Objeto | Molde × instância |
| Abstração | Encapsulamento | Escolher o essencial × ocultar o interno |
| Herança | Composição | "É um" × "tem um" |
| Agregação | Composição | Partes independentes × partes dependentes do todo |
| Sobrecarga | Sobrescrita | Mesmo nome, parâmetros diferentes (mesma classe) × redefinição na subclasse com a mesma assinatura |
| Interface | Classe abstrata | Só contrato × pode ter implementação parcial |
| Coesão | Acoplamento | Relação interna do módulo × dependência entre módulos |
| Programação estruturada | Programação OO | Funções e dados separados × objetos |

## 6. Aplicações e cenários

**Cenário (didático): evolução de um cadastro.** Um sistema estruturado guarda equipamentos em registros usados por 40 funções. Acrescentar um atributo obriga a alterar várias funções. Em um desenho OO, a classe `Equipamento` encapsula o atributo; apenas seus métodos e subclasses mudam. *Limitação:* a migração exige reprojeto.

**Cenário (didático): escolha de polimorfismo.** Um desenvolvedor precisa criar três métodos com o mesmo nome e parâmetros diferentes na mesma classe: usa **sobrecarga**. Para especializar o comportamento de `descrever()` em subclasses, usa **sobrescrita**.

## 7. Atenção para a prova

*Inferência técnica e recomendação pedagógica; sem atribuir frequência à banca.*

- **Sobrecarga**: mesmo nome, parâmetros diferentes, mesma classe; **sobrescrita**: subclasse redefine método com a mesma assinatura; **herança**: reuso e especialização; **encapsulamento**: oculta o estado; **instanciação**: criar objetos de uma classe.
- Em uma lista com Herança, Interface, Instanciação, Sobrecarga e Sobrescrita, a que descreve "métodos de mesmo nome e parâmetros diferentes na mesma classe" é a **sobrecarga**.
- Em outra formulação, a propriedade que permite várias operações com o mesmo nome, reduzindo o acoplamento entre objetos, é chamada **polimorfismo**.
- **Estruturado**: sequência, decisão, repetição; módulos; **OO**: objetos, classes, mensagens.
- **Alta coesão e baixo acoplamento**.
- *Evidência histórica (amostra de duas provas):* a Prova 6 de 2023 (Q32) pediu o nome da técnica de criar métodos de mesmo nome com parâmetros diferentes (sobrecarga); a Prova 15 de 2018 (Q29) pediu a propriedade típica da orientação a objetos que permite várias operações com o mesmo nome, reduzindo o acoplamento (polimorfismo). Duas provas não permitem inferir frequência.

## 8. Síntese

- Estruturado: sequência, seleção, repetição; módulos; *top-down*; dados e funções separados.
- OO: objetos e classes; abstração, encapsulamento, herança, polimorfismo.
- Polimorfismo: sobrecarga (mesma classe, parâmetros diferentes) e sobrescrita (subclasse, mesma assinatura); subtipo.
- Relações: associação, agregação, composição, generalização, realização, dependência.
- Coesão alta, acoplamento baixo.
- SOLID e padrões de projeto (complemento).

## 9. Pontos para a futura produção de questões (registro)

Conceitos: pilares da OO; polimorfismo; relações entre classes; coesão e acoplamento. Distinções: sobrecarga×sobrescrita; agregação×composição; herança×composição; classe×objeto. Interpretação: nomear o conceito a partir de uma descrição ou de um trecho de código.

## 10. Referências

- Conceitos de programação estruturada (Böhm–Jacopini, Dijkstra), projeto estruturado (YOURDON, CONSTANTINE), orientação a objetos (BOOCH, RUMBAUGH, JACOBSON; MEYER), SOLID (MARTIN) e padrões (GAMMA et al.): conhecimento geral do autor do material — **não verificado online** (edições, anos e páginas pendentes), **exceto**: GAMMA, E.; HELM, R.; JOHNSON, R.; VLISSIDES, J. *Design Patterns: Elements of Reusable Object-Oriented Software*. Addison-Wesley, 1994 — **verificado** em listagens de livrarias (23 padrões). Böhm e Jacopini (1966), Dijkstra (1968), DeMarco, Gane e Sarson, Yourdon: **não verificados**.
- Edital Transpetro nº 04/2026.4, Anexo IV, item 5.3.
