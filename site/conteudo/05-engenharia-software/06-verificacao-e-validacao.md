---
modulo: 05-engenharia-software
arquivo: 06-verificacao-e-validacao
itens_edital:
  - "5.4 Verificação, validação e teste"
ids_matriz: ["E5-045"]
escopo: "A — conteúdo expresso no edital. SAST/DAST/IAST são desenvolvidos no Módulo 9 (item 9.5) e aqui apenas relacionados. Os ambientes de teste estão em `07-testes-e-ambientes.md`."
tipo_conteudo: "teoria"
status: "VALIDADO"
ultima_atualizacao: "2026-10-31"
---

# Verificação, Validação e Teste de Software

**Módulo:** M05 — Engenharia de software
**Texto oficial (Anexo IV):** 5.4 "Verificação, validação e teste".
**Escopo:** A. Princípios de teste (ISTQB) conferidos apenas em fontes secundárias; o texto do programa de certificação não foi consultado.
**Status:** `VALIDADO` (aprovado pelo usuário em 2026-10-31, com ressalvas: interpretação dos itens 5.2 e 5.5 a confirmar; normas ISO, princípios ISTQB e vários referenciais de memória não verificados em fonte primária — ver `docs/qualidade/relatorio-producao-modulo-05.md`).

**Objetivos de aprendizagem.** (1) Distinguir verificação, validação e teste; (2) diferenciar técnicas estáticas e dinâmicas; (3) descrever níveis e tipos de teste; (4) aplicar técnicas de caixa-preta e de caixa-branca (partição de equivalência, valor limite, cobertura, complexidade ciclomática); (5) compreender o processo de teste, defeitos, automação e ambientes.

---

## 1. Introdução

Produzir software correto exige **verificar** se ele foi construído conforme a especificação, **validar** se atende às necessidades reais e **testar** — a atividade que executa o software (ou examina artefatos) para **revelar defeitos** e **avaliar qualidade**. Nenhuma técnica elimina todos os defeitos: o objetivo é **reduzir o risco** a um nível aceitável, ao menor custo.

## 2. Conceitos fundamentais

### 2.1 Verificação × validação

| Conceito | Pergunta clássica | Foco |
|---|---|---|
| **Verificação** | "Estamos construindo **o produto corretamente**?" | Conformidade com **especificações** (requisitos, projeto) |
| **Validação** | "Estamos construindo **o produto certo**?" | Atendimento às **necessidades do usuário** e ao uso pretendido |

**Verificação e validação (V&V)** é o conjunto de atividades que cobre ambas, ao longo de **todo o ciclo de vida**. O **teste** é **uma** das atividades de V&V (técnica **dinâmica**), junto com **revisões**, **inspeções** e **análise estática**.

### 2.2 Erro, defeito e falha

| Termo | Significado |
|---|---|
| **Erro (*error/mistake*)** | Ação humana que produz resultado incorreto |
| **Defeito (*defect/fault/bug*)** | Imperfeição no artefato (código, requisito, projeto) causada por um erro |
| **Falha (*failure*)** | Desvio observado do comportamento esperado quando o defeito é **ativado** na execução |

Cadeia: **erro → defeito → falha**. Um defeito pode **nunca** causar falha se o trecho não for executado.

### 2.3 Objetivos do teste

Encontrar defeitos; **ganhar confiança** na qualidade; **prevenir** defeitos (testar requisitos e projeto cedo); fornecer **informação** para decisões; verificar **conformidade** com requisitos, contratos e normas. O teste **mostra a presença** de defeitos, **não** prova sua ausência.

### 2.4 Princípios de teste (literatura ISTQB)

1. O teste **mostra a presença** de defeitos, não sua ausência.
2. **Teste exaustivo é impossível**: use análise de riscos e priorização.
3. **Teste antecipado** (*shift-left*) economiza tempo e dinheiro.
4. **Defeitos se agrupam** em poucos módulos (princípio de Pareto).
5. **Paradoxo do pesticida**: os mesmos testes, repetidos, deixam de encontrar novos defeitos — é preciso revisá-los.
6. O teste **depende do contexto** (um sistema crítico é testado de modo diferente de um aplicativo simples).
7. **Falácia da ausência de erros**: um sistema sem defeitos encontrados, mas que não atende às necessidades, **não** é útil.

*(Lista conforme fontes secundárias; ordem e redação variam por edição.)*

## 3. Técnicas estáticas (sem executar o software)

Examinam **artefatos** (requisitos, projeto, código, planos de teste, documentação) **sem executar o código**. Principais objetivos: **encontrar defeitos cedo** e **reduzir defeitos na documentação** a partir da qual o software é desenvolvido.

| Técnica | Descrição | Formalidade |
|---|---|---|
| **Revisão informal** | Colegas leem e comentam | Baixa |
| ***Walkthrough*** (percurso) | O **autor conduz** os participantes pelo artefato para explicar, obter opiniões e identificar problemas | Baixa a média |
| **Revisão técnica** | Pares com competência técnica avaliam conformidade e alternativas | Média |
| **Inspeção** (Fagan) | **Processo formal**, com papéis (moderador, autor, leitor, escriba, inspetores), critérios de entrada e saída e medição; maior eficácia na detecção | Alta |
| **Análise estática automatizada** | Ferramentas analisam código sem executá-lo: padrões, vulnerabilidades, complexidade, violações de normas (por exemplo, *linters*; SAST, Módulo 9, item 9.5) | — |

**Vantagens:** detectam defeitos **antes** da codificação e dos testes dinâmicos; custo de correção muito menor; podem ser aplicadas a **qualquer artefato**. **Limitações:** dependem de pessoas e de tempo; não avaliam comportamento em execução (desempenho, concorrência).

## 4. Teste dinâmico: níveis

| Nível | Foco | Quem/onde | Exemplo |
|---|---|---|---|
| **Unidade (componente)** | Menores partes testáveis (funções, métodos, classes), isoladas | Desenvolvedor; automatizado | Testar uma função de cálculo com valores diversos |
| **Integração** | **Interfaces** e interação entre componentes/sistemas | Desenvolvedores/testadores | Integração entre serviço de ordens e banco de dados |
| **Sistema** | O sistema **completo** em ambiente representativo, frente aos requisitos | Equipe de teste independente | Fluxos ponta a ponta |
| **Aceitação** | O sistema frente às **necessidades do usuário/negócio**; decide se pode ser **liberado** | Usuários e patrocinadores | Teste de aceitação do usuário (UAT) |

**Teste de aceitação** (também **homologação**): realizado por **representantes dos usuários finais** (ou clientes) para decidir se o sistema pode entrar em produção. Formas: **UAT** (usuário), **operacional** (backup, recuperação, manutenção), **contratual/regulatória**, **alfa** (usuários em ambiente do desenvolvedor) e **beta** (usuários reais em ambiente real).

*Relação com o modelo em V* (arquivo `03`): requisitos ↔ aceitação; especificação do sistema ↔ sistema; projeto arquitetural ↔ integração; projeto detalhado ↔ unidade.

### 4.1 Estratégias de integração

**Big bang**; **incremental** (de cima para baixo, de baixo para cima, sanduíche, contínua). Dependências ausentes são substituídas por **dublês de teste**: **stub** (retorna respostas fixas), **mock** (verifica interações), **fake** (implementação simplificada), **spy**, **dummy**.

## 5. Tipos de teste

| Tipo | O que avalia |
|---|---|
| **Funcional** | O que o sistema faz (conforme requisitos funcionais) |
| **Não funcional** | Como o sistema se comporta: **desempenho** (carga, estresse, resistência/*soak*, pico, escalabilidade), **segurança**, **usabilidade**, **acessibilidade**, **compatibilidade**, **confiabilidade**, **recuperação**, **portabilidade** (características de qualidade, arquivo `01`) |
| **Estrutural (caixa-branca)** | Estrutura interna: cobertura do código |
| **Relacionado a mudanças: confirmação** | Verificar se um defeito foi corrigido (**reteste**) |
| **Regressão** | Garantir que mudanças **não causaram defeitos em funções já existentes** |
| ***Smoke*/sanidade** | Verificação rápida das funções críticas após nova versão |
| **Exploratório** | Aprendizado, projeto e execução simultâneos, guiados pela experiência |
| **Baseado em risco** | Prioriza áreas de maior risco |
| **De segurança dinâmico (DAST)** | Analisa o software **em execução** (aplicação totalmente compilada e integrada), sem acesso ao código, buscando vulnerabilidades (Módulo 9, item 9.5); o **SAST** analisa o **código-fonte** sem executá-lo |

## 6. Técnicas de projeto de testes

### 6.1 Caixa-preta (baseadas em especificação)

Derivam casos de teste da **especificação**, **sem** considerar a estrutura interna.

| Técnica | Ideia | Exemplo (didático) |
|---|---|---|
| **Partição de equivalência** | Dividir as entradas em **classes** que o sistema trata de modo equivalente; testar **um representante** por classe | Campo "idade" aceita 18 a 65: classes **< 18** (inválida), **18–65** (válida), **> 65** (inválida) → testar 10, 40, 80 |
| **Análise do valor limite** | Testar **nas bordas** das partições (onde os defeitos são mais comuns): limites e valores adjacentes | Para 18–65: 17, 18, 19, 64, 65, 66 |
| **Tabela de decisão** | Combinações de **condições** e as **ações** correspondentes | Regras de desconto |
| **Transição de estados** | Percorrer estados e transições de um diagrama | Ciclo de uma ordem de serviço |
| **Casos de uso/cenários** | Testar fluxos principal e alternativos | Arquivo `02` |
| **Grafo causa-efeito, pares combinatórios** | Reduzir combinações | — |

### 6.2 Caixa-branca (estruturais)

Derivam casos de teste da **estrutura do código**; medem a **cobertura**.

| Critério de cobertura | Significado | Força |
|---|---|---|
| **Comandos (instruções)** | Cada instrução executada ao menos uma vez | Mais fraco |
| **Decisões (ramos)** | Cada decisão assume **verdadeiro** e **falso** | Mais forte que comandos |
| **Condições** | Cada condição atômica assume V e F | — |
| **Condição/decisão, MC/DC, caminhos** | Combinações mais rigorosas (usadas em sistemas críticos) | Mais fortes |

```python
def desconto(valor, cliente_vip):
    if valor > 1000 and cliente_vip:   # decisão com duas condições
        return valor * 0.9
    return valor
```

*Leitura:* um único teste (`valor=2000, vip=True`) cobre 100% dos **comandos** que levam ao desconto, mas não os dois resultados da decisão; para **cobertura de decisões**, testa-se também um caso falso (por exemplo, `valor=500`).

**Complexidade ciclomática (McCabe):** mede o número de **caminhos linearmente independentes** do grafo de fluxo de controle.

- **V(G) = E − N + 2P**, com **E** arestas (arcos), **N** nós e **P** componentes conexos (em geral, P = 1).
- Equivale a **(número de decisões) + 1**.
- *Exemplo:* grafo com 5 nós e 12 arcos → V(G) = 12 − 5 + 2 = **9**. Serve de **limite superior** para o número de testes necessários para cobrir todos os ramos e indica **risco e dificuldade de manutenção** (valores altos pedem refatoração).

### 6.3 Baseadas em experiência e em mutação

- **Baseadas na experiência:** suposição de erros, teste exploratório, listas de verificação.
- **Teste de mutação:** introduz-se no programa **pequenas alterações sintáticas** (mutantes — por exemplo, trocar `>` por `>=`) e executa-se o conjunto de testes sobre o **original e os mutantes**; se um teste **distingue** o mutante (resultado diferente), o mutante é **"morto"**. A proporção de mutantes mortos mede a **qualidade do conjunto de testes**. Gera versões levemente modificadas de um programa e compara o comportamento com o original.

## 7. Processo de teste

| Atividade | Descrição |
|---|---|
| **Planejamento** | Objetivos, escopo, abordagem, riscos, recursos, cronograma, **critérios de entrada e de saída** (plano de teste) |
| **Monitoramento e controle** | Acompanhar o progresso e ajustar |
| **Análise e projeto** | Derivar condições e **casos de teste** a partir da base de testes (requisitos, projeto) |
| **Implementação** | Criar **suítes**, **dados de teste**, **ambiente** (arquivo `07`) e *scripts* |
| **Execução** | Executar, comparar resultados com o **oráculo** (resultado esperado) e registrar |
| **Conclusão** | Avaliar critérios de saída, relatórios, lições aprendidas |

**Caso de teste:** identificador, **pré-condições**, **entradas/passos**, **resultado esperado**, **pós-condições**. **Matriz de rastreabilidade** liga requisitos a casos de teste (arquivo `02`).

### 7.1 Gestão de defeitos

Ciclo típico: **novo → atribuído → corrigido → reteste → fechado** (ou **reaberto**). Atributos: **severidade** (impacto técnico) × **prioridade** (urgência de correção); descrição, passos para reproduzir, ambiente, evidências. **Métricas:** densidade de defeitos, taxa de detecção de defeitos, defeitos escapados para produção, cobertura de requisitos e de código.

## 8. Automação, TDD e BDD

- **Pirâmide de testes:** muitos **testes de unidade** (rápidos e baratos), menos de **integração/serviços** e poucos de **interface** (lentos e frágeis).
- **Automação** compensa em testes **repetitivos** (regressão), de **desempenho** e em **integração contínua** (arquivo `07`); exige manutenção e não elimina o teste exploratório.
- **TDD** (*Test-Driven Development*): escrever o teste **antes** do código (vermelho → verde → refatorar).
- **BDD** (*Behavior-Driven Development*): especificar comportamento em linguagem comum, no formato **Dado–Quando–Então** (*Given–When–Then*), que serve como critério de aceitação e teste automatizado.

```text
Cenário: Registrar ordem com equipamento válido
  Dado que o técnico está autenticado
  Quando ele registra uma ordem para o equipamento "P-101"
  Então a ordem é criada com situação "Aberta"
```

## 9. Comparações conceituais

| Conceito A | Conceito B | Diferença principal |
|---|---|---|
| Verificação | Validação | Conforme a especificação (produto correto) × atende ao usuário (produto certo) |
| Teste | V&V | Atividade de execução × conjunto de atividades (inclui revisões e análise estática) |
| Erro | Defeito × falha | Ação humana × imperfeição × manifestação em execução |
| Técnica estática | Técnica dinâmica | Examina artefatos sem executar × executa o software |
| *Walkthrough* | Inspeção | Conduzido pelo autor, informal × formal, com papéis e métricas |
| Teste de unidade | Teste de integração | Componente isolado × interfaces entre componentes |
| Teste de sistema | Teste de aceitação | Equipe de teste, contra requisitos × usuário/cliente, contra necessidades |
| Caixa-preta | Caixa-branca | Especificação × estrutura interna |
| Partição de equivalência | Valor limite | Classes de entradas × bordas das classes |
| Reteste (confirmação) | Regressão | Verifica a correção × verifica efeitos colaterais |
| Severidade | Prioridade | Impacto do defeito × ordem de correção |
| SAST | DAST | Código sem executar × aplicação em execução |
| Stub | Mock | Resposta fixa × verificação de interações |

## 10. Aplicações e cenários

**Cenário (didático): defeito encontrado em produção.** Um erro de cálculo aparece apenas para ordens de mais de 24 horas. Análise: **valor limite** (24 h) não foi testado (**caixa-preta**); a **revisão** do requisito não identificou a regra; não havia teste de **regressão** automatizado. Ações: corrigir, criar casos de teste para **limites**, adicionar o cenário à suíte automatizada e revisar o processo de **inspeção**. *Limitação:* custo de manter a suíte; **paradoxo do pesticida** exige revisá-la.

**Cenário (didático): liberar uma versão.** O **teste de aceitação** por usuários-chave decide a liberação, depois que o **teste de sistema** satisfez os critérios de saída e a **regressão** passou.

## 11. Atenção para a prova

*Inferência técnica e recomendação pedagógica; sem atribuir frequência à banca.*

- Objetivo principal dos **testes estáticos**: **reduzir defeitos** (inclusive na **documentação** a partir da qual o software é desenvolvido); técnicas importantes: **revisões** (walkthrough, inspeção); **regressão**, **valor limite** e **partição de equivalência** são **dinâmicos**; **análise de casos de uso** é técnica de requisitos.
- **Teste de aceitação**: usuários finais testam a última versão antes de colocá-la em produção.
- **DAST**: análise em execução; **SAST**: no código.
- Fórmula de **complexidade ciclomática**: E − N + 2.
- **Teste de mutação** gera versões levemente modificadas do programa e compara.
- *Evidência histórica (amostra de duas provas):* a Prova 6 de 2023 pediu a técnica importante de **testes estáticos** (Q23: *walk-through*), o tipo de teste feito por **representantes dos usuários finais** antes da liberação (Q31: aceitação) e o teste de segurança em **tempo de execução** (Q38: DAST, Módulo 9). A Prova 15 de 2018 trouxe **teste de mutação** (Q24) e **complexidade ciclomática** (Q25). Duas provas não permitem inferir frequência.

## 12. Síntese

- Verificação (produto correto) × validação (produto certo); teste como parte de V&V; erro → defeito → falha.
- Estático (revisão informal, *walkthrough*, revisão técnica, inspeção, análise estática) × dinâmico (níveis: unidade, integração, sistema, aceitação).
- Tipos: funcional, não funcional, estrutural, confirmação, regressão, *smoke*, exploratório.
- Caixa-preta (partição, valor limite, tabela de decisão, estados, casos de uso); caixa-branca (comandos, decisões, condições; V(G) = E − N + 2); mutação.
- Processo: planejar, projetar, implementar, executar, concluir; defeitos (severidade × prioridade).
- Automação: pirâmide, TDD, BDD, integração contínua.

## 13. Pontos para a futura produção de questões (registro)

Conceitos: V&V; técnicas estáticas; níveis e tipos de teste; técnicas de projeto de testes; cobertura; complexidade ciclomática; mutação. Distinções: verificação×validação; *walkthrough*×inspeção; sistema×aceitação; reteste×regressão; caixa-preta×branca. Interpretação: identificar o teste pela descrição; derivar casos por partição e valor limite; calcular V(G).

## 14. Referências

- Princípios de teste e terminologia (ISTQB, IEEE, ISO/IEC/IEEE 29119): **princípios conferidos apenas em fontes secundárias** em 2026-10-31; textos oficiais **não consultados**.
- McCabe, T. J. "A Complexity Measure", *IEEE Transactions on Software Engineering*, SE-2, n. 4, p. 308–320, 1976 — **verificado** (fontes secundárias). Fagan, M. E. "Design and code inspections to reduce errors in program development", *IBM Systems Journal*, v. 15, n. 3, p. 182–211, 1976 — **verificado**. Myers, Beizer, Sommerville, Pressman — citados de memória, **não verificados**.
- ISTQB: o portal oficial (istqb.org) confirma o programa *Certified Tester Foundation Level v4.0* (sílabo v4.0.1), mas **a página pública não lista os sete princípios**; a lista deste arquivo permanece apoiada em fontes secundárias. Normas ISO/IEC/IEEE 29119 **não verificadas**.
- Edital Transpetro nº 04/2026.4, Anexo IV, item 5.4.
