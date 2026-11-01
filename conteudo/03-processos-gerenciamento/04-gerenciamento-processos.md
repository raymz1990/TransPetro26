---
modulo: 03-processos-gerenciamento
arquivo: 04-gerenciamento-processos
itens_edital:
  - "Sem item literal. Relação indireta: 3 Processos, grupos de processos e área de conhecimento. (BPM como complemento)"
ids_matriz: ["C5-004"]
escopo: "C — aprofundamento opcional, FORA da cobertura oficial (decisão do usuário, 2026-10-31): BPM não é exigência expressa do edital"
tipo_conteudo: "teoria complementar"
status: "EM_REVISAO"
ultima_atualizacao: "2026-10-31"
---

# Complemento (escopo C): Gestão de Processos de Negócio (BPM)

**Módulo:** M03
**Classificação:** **C — material complementar opcional.** Não corresponde a item literal do Anexo IV e **não conta** na cobertura oficial. O item 3 do edital foi interpretado (decisão do usuário) como **grupos de processos e áreas de conhecimento de gerenciamento de projetos**; este arquivo existe apenas porque a ênfase se chama "Processos de Negócios" e porque **provas de 2018**, regidas por programa então vigente que incluía BPM, cobraram o tema. **Não estude este arquivo antes de dominar os arquivos `01` a `03`.**
**Atenção:** notações de modelagem (por exemplo, BPMN) constam do edital de **outra ênfase** (Ênfase 6), não da Ênfase 5.
**Status:** `EM_REVISAO` (complementar).

**Objetivos de aprendizagem (opcionais).** (1) Definir processo de negócio e distinguir tipos; (2) descrever o ciclo de BPM; (3) diferenciar eficiência, eficácia e efetividade; (4) reconhecer gargalos e indicadores.

---

## 1. Introdução

**Processo de negócio** é um conjunto de atividades inter-relacionadas, executadas por pessoas, sistemas ou ambos, que transforma **entradas em saídas de valor para um cliente** (interno ou externo). **Gestão de processos de negócio** (*Business Process Management*, BPM) é a disciplina de **identificar, mapear, analisar, melhorar, executar e monitorar** processos para melhorar desempenho e alinhamento à estratégia. Difere do **gerenciamento de projetos** (esforço temporário e único) porque os processos de negócio são **contínuos e repetitivos**.

## 2. Fundamentos

### 2.1 Tipos de processos

| Tipo | Função | Exemplo |
|---|---|---|
| **Primários/finalísticos** | Entregam valor direto ao cliente | Atendimento de uma demanda de transporte |
| **De suporte** | Sustentam os primários | Compras, manutenção de TI, RH |
| **De gestão/gerenciais** | Planejam, controlam e dão direção | Planejamento estratégico, controle orçamentário |

**Hierarquia:** cadeia de valor → macroprocesso → processo → subprocesso → atividade → tarefa.

### 2.2 Ciclo de BPM (visão geral)

```text
Planejar/Identificar ─► Modelar o estado atual (AS-IS) ─► Analisar ─► Redesenhar (TO-BE)
        ▲                                                                  │
        └────────── Monitorar e melhorar ◄── Implantar/Executar ◄──────────┘
```

| Etapa | Atividades |
|---|---|
| **Identificar e priorizar** | Selecionar processos de alto valor ou problemáticos |
| **Modelar o AS-IS** | Mapear o processo como ele **é** (fluxo, papéis, sistemas) |
| **Analisar** | Identificar **gargalos**, retrabalho, esperas, desperdícios, pontos de controle |
| **Redesenhar (TO-BE)** | Propor o processo **desejado** |
| **Implantar** | Mudança de pessoas, sistemas e regras; automação (por exemplo, *workflow*) |
| **Monitorar** | Indicadores de desempenho; melhoria contínua |

### 2.3 Eficiência, eficácia e efetividade

| Conceito | Pergunta | Exemplo |
|---|---|---|
| **Eficiência** | Fazemos **certo** (uso de recursos: tempo, custo)? | Concluir a tarefa com menos horas |
| **Eficácia** | Alcançamos o **resultado pretendido**? | Cumprir o objetivo do processo |
| **Efetividade** | O resultado gera **impacto/valor** duradouro? | Satisfação e benefício ao cliente |

*(Definições de uso comum na literatura brasileira; as fontes divergem quanto à distinção entre eficácia e efetividade.)*

### 2.4 Indicadores e gargalos

- **Indicadores** (KPI): tempo de ciclo, custo por transação, taxa de erro/retrabalho, nível de serviço, satisfação.
- **Gargalo:** etapa com capacidade menor que a demanda, que limita o fluxo; análises de processo **observam gargalos internos e passagens entre funções** (esperas entre áreas).
- **Workflow:** automação **total ou parcial** de um processo de negócio, em que documentos, informações ou tarefas passam de um participante a outro **de acordo com regras de procedimento**.

### 2.5 Melhoria

Abordagens de melhoria: *Lean* (eliminar desperdícios), *Six Sigma* (reduzir variação e defeitos), ciclo **PDCA**, **reengenharia** (mudança radical). *(Visão geral; não verificada online nesta etapa.)*

## 3. Comparações conceituais

| Conceito A | Conceito B | Diferença principal |
|---|---|---|
| Processo de negócio | Projeto | Contínuo e repetitivo × temporário e único |
| AS-IS | TO-BE | Como é × como deve ser |
| Eficiência | Eficácia | Fazer certo (recursos) × atingir o resultado |
| Macroprocesso | Subprocesso | Visão ampla × detalhe |
| Processos primários | De suporte | Entregam valor ao cliente × sustentam os primários |
| BPM | Gerenciamento de projetos | Gestão contínua do desempenho do processo × entrega de resultados únicos |

## 4. Aplicações e cenário

**Cenário (didático): atraso em aprovações.** O mapeamento do processo de contratação mostra cinco passagens entre áreas, cada uma com espera de dias. A análise identifica o gargalo na aprovação jurídica; o redesenho paraleliza revisões e adota *workflow*. *Limitação:* automatizar um processo mal desenhado apenas acelera o erro.

## 5. Atenção para a prova (somente se aplicável)

- Não faz parte do conteúdo obrigatório do edital de 2026 (Ênfase 5).
- *Evidência histórica:* a Prova 15 de 2018 (programa então vigente com BPM) trouxe questões sobre análise de processos (Q65), eficiência de mão de obra (Q64), *workflow* (Q57) e a notação BPMN (Q68). A Prova 6 de 2023 **não** trouxe BPM. Duas provas não permitem inferir frequência; o edital de 2026 **não** prevê BPM expressamente.

## 6. Síntese

- Processo de negócio: atividades que transformam entradas em saídas de valor; contínuo.
- Ciclo: identificar → AS-IS → analisar → TO-BE → implantar → monitorar.
- Eficiência (recursos) × eficácia (resultado) × efetividade (impacto).
- Gargalos, indicadores e *workflow*.

## 7. Referências

- Conhecimento geral de BPM (autor do material); **nenhuma fonte foi consultada ou verificada nesta etapa** para este complemento. Se for usado para estudo, complementar com bibliografia especializada (por exemplo, CBOK do ABPMP) — **não verificada**.
- Edital Transpetro nº 04/2026.4, Anexo IV, item 3 (relação indireta; BPM não é citado).
