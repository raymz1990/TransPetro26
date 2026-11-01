---
modulo: 03-processos-gerenciamento
arquivo: 02-grupos-de-processos
itens_edital:
  - "3 Processos, grupos de processos e área de conhecimento."
ids_matriz: ["E5-033"]
escopo: "A — conteúdo expresso no edital (item 3; parte 'grupos de processos'). Interpretação: PMBOK 6ª edição."
tipo_conteudo: "teoria"
status: "VALIDADO"
ultima_atualizacao: "2026-10-31"
---

# Os Cinco Grupos de Processos de Gerenciamento de Projetos

**Módulo:** M03 — Processos, grupos de processos e áreas de conhecimento
**Texto oficial (Anexo IV):** 3 "Processos, grupos de processos e área de conhecimento." (parte *grupos de processos*).
**Referencial:** PMBOK Guide, **6ª edição** (2017): 49 processos, 5 grupos, 10 áreas. A 7ª edição não organiza o conteúdo por grupos de processos (Módulo 2, arquivo `05`).
**Aviso de verificação (revisão de 2026-10-31):** os totais (49 processos; 5 grupos; 10 áreas) e a lista de processos por área foram conferidos em fonte secundária; os **totais por grupo (2, 24, 10, 12 e 1)** foram confirmados em várias fontes secundárias (guias de estudo), e a presença de *Adquirir recursos*, *Implementar respostas aos riscos*, *Gerenciar o conhecimento do projeto*, *Validar o escopo*, *Controlar o escopo* e *Monitorar as comunicações* nos grupos indicados foi confirmada. **A atribuição individual dos demais processos a seu grupo** vem do conhecimento do autor e é **consistente com esses totais**, mas não foi confrontada com o texto do PMI (acesso bloqueado).
**Status:** `VALIDADO` (aprovado pelo usuário em 2026-10-31, com ressalvas: atribuição individual dos processos aos grupos, fórmulas e técnicas sem confronto com o texto do PMI — ver `docs/qualidade/relatorio-producao-modulo-03.md`).

**Objetivos de aprendizagem.** (1) Descrever finalidade e características de cada grupo; (2) listar os processos de cada grupo; (3) distinguir grupos de fases; (4) reconhecer a sequência lógica entre grupos e o caráter transversal do Monitoramento e Controle; (5) identificar em qual grupo se enquadra um processo ou uma atividade descrita.

---

## 1. Introdução

Os **grupos de processos** organizam os 49 processos de gerenciamento de projetos pela **natureza do trabalho**: **Iniciação**, **Planejamento**, **Execução**, **Monitoramento e Controle** e **Encerramento**. Eles têm dependências lógicas (por exemplo, o planejamento depende do que a iniciação autorizou) mas **se repetem** durante o projeto e **não são fases**. O ciclo de vida do projeto é a sucessão de fases; em cada fase usam-se os grupos de processos (arquivo `01`).

```text
                 ┌─────────────── Monitoramento e Controle (todo o projeto) ───────────────┐
                 │                                                                        │
 Iniciação ──► Planejamento ──► Execução ──────────────────────────────────────────► Encerramento
                 ▲                │
                 └── replanejamento (mudanças aprovadas) ──┘
```

## 2. Visão geral

| Grupo | Finalidade | Nº de processos | Principais saídas |
|---|---|---:|---|
| **Iniciação** | Definir e **autorizar formalmente** um novo projeto ou fase | 2 | Termo de abertura do projeto; registro das partes interessadas |
| **Planejamento** | Estabelecer o escopo, refinar objetivos e definir o curso de ação | 24 | Plano de gerenciamento do projeto; documentos do projeto; linhas de base |
| **Execução** | **Realizar o trabalho** definido no plano para cumprir os requisitos | 10 | Entregas; dados de desempenho do trabalho; solicitações de mudança |
| **Monitoramento e Controle** | **Acompanhar, analisar e regular** o progresso e o desempenho; identificar mudanças necessárias e iniciá-las | 12 | Informações de desempenho; solicitações de mudança; atualizações de planos |
| **Encerramento** | **Finalizar** formalmente atividades de uma fase ou do projeto | 1 | Entregas aceitas; lições aprendidas; transferência do produto |

## 3. Processos por grupo

Nomes conforme a tradução usual da 6ª edição; entre parênteses, o número do processo e a área.

### 3.1 Grupo de Iniciação (2 processos)

| Processo | Área | Resultado |
|---|---|---|
| Desenvolver o termo de abertura do projeto (4.1) | Integração | **Termo de abertura** (*project charter*): autoriza formalmente o projeto, nomeia o gerente e dá autoridade para aplicar recursos |
| Identificar as partes interessadas (13.1) | Partes interessadas | **Registro das partes interessadas** |

Características: ocorre quando se **reconhece a necessidade** e se **autoriza** o projeto ou a fase; envolve o **patrocinador** (que emite ou aprova o termo); o **caso de negócio**, o plano de benefícios e os acordos são entradas; o termo de abertura **não** é o plano de gerenciamento. Os **objetivos de alto nível, riscos iniciais e resumo do cronograma e do orçamento** aparecem no termo.

### 3.2 Grupo de Planejamento (24 processos)

| Área | Processos |
|---|---|
| Integração | Desenvolver o plano de gerenciamento do projeto (4.2) |
| Escopo | Planejar o gerenciamento do escopo (5.1); Coletar os requisitos (5.2); Definir o escopo (5.3); Criar a EAP (5.4) |
| Cronograma | Planejar o gerenciamento do cronograma (6.1); Definir as atividades (6.2); Sequenciar as atividades (6.3); Estimar as durações das atividades (6.4); Desenvolver o cronograma (6.5) |
| Custos | Planejar o gerenciamento dos custos (7.1); Estimar os custos (7.2); Determinar o orçamento (7.3) |
| Qualidade | Planejar o gerenciamento da qualidade (8.1) |
| Recursos | Planejar o gerenciamento dos recursos (9.1); Estimar os recursos das atividades (9.2) |
| Comunicações | Planejar o gerenciamento das comunicações (10.1) |
| Riscos | Planejar o gerenciamento dos riscos (11.1); Identificar os riscos (11.2); Realizar a análise qualitativa dos riscos (11.3); Realizar a análise quantitativa dos riscos (11.4); Planejar as respostas aos riscos (11.5) |
| Aquisições | Planejar o gerenciamento das aquisições (12.1) |
| Partes interessadas | Planejar o engajamento das partes interessadas (13.2) |

Características: é o grupo **com mais processos**; **iterativo e progressivo**; produz o **plano de gerenciamento do projeto** (com planos subsidiários e **linhas de base** de escopo, cronograma e custos) e os documentos do projeto; replaneja-se quando mudanças são aprovadas; **estabelece o que será medido** no monitoramento.

### 3.3 Grupo de Execução (10 processos)

| Processo | Área |
|---|---|
| Orientar e gerenciar o trabalho do projeto (4.3) | Integração |
| Gerenciar o conhecimento do projeto (4.4) | Integração |
| Gerenciar a qualidade (8.2) | Qualidade |
| Adquirir recursos (9.3) | Recursos |
| Desenvolver a equipe (9.4) | Recursos |
| Gerenciar a equipe (9.5) | Recursos |
| Gerenciar as comunicações (10.2) | Comunicações |
| Implementar respostas aos riscos (11.6) | Riscos |
| Conduzir as aquisições (12.2) | Aquisições |
| Gerenciar o engajamento das partes interessadas (13.3) | Partes interessadas |

Características: **coordena pessoas e recursos**, executa as atividades do plano e gera as **entregas**; é onde se consome a maior parte do orçamento e dos recursos; produz **dados de desempenho** e **solicitações de mudança** que alimentam o monitoramento.

### 3.4 Grupo de Monitoramento e Controle (12 processos)

| Processo | Área |
|---|---|
| Monitorar e controlar o trabalho do projeto (4.5) | Integração |
| Realizar o controle integrado de mudanças (4.6) | Integração |
| Validar o escopo (5.5) | Escopo |
| Controlar o escopo (5.6) | Escopo |
| Controlar o cronograma (6.6) | Cronograma |
| Controlar os custos (7.4) | Custos |
| Controlar a qualidade (8.3) | Qualidade |
| Controlar os recursos (9.6) | Recursos |
| Monitorar as comunicações (10.3) | Comunicações |
| Monitorar os riscos (11.7) | Riscos |
| Controlar as aquisições (12.3) | Aquisições |
| Monitorar o engajamento das partes interessadas (13.4) | Partes interessadas |

Características: **compara o desempenho real com o plano** (linhas de base), analisa variações, **recomenda ações corretivas e preventivas**, avalia solicitações de mudança e **mantém o projeto sob controle**. Ocorre **do início ao fim do projeto**, em paralelo aos demais grupos. É o grupo em que se **monitora, rastreia e revisa o progresso e se implementam medidas corretivas** (por meio de solicitações de mudança aprovadas).

*Pontos críticos:*

- **Monitorar** = coletar, medir, observar e relatar; **controlar** = comparar com o plano, decidir e agir (corrigir). Os dois estão no mesmo grupo.
- **Validar o escopo** é a **aceitação formal das entregas** pelo cliente/patrocinador (foco em **aceitação**); **Controlar a qualidade** verifica se as entregas atendem aos requisitos de **qualidade** (foco em **correção**, geralmente antes da validação). Validar o escopo pertence ao **Monitoramento e Controle**, não ao Encerramento.
- **Realizar o controle integrado de mudanças** analisa e aprova ou rejeita **todas** as solicitações de mudança, mantendo a integridade das linhas de base.

### 3.5 Grupo de Encerramento (1 processo)

| Processo | Área | Resultado |
|---|---|---|
| Encerrar o projeto ou fase (4.7) | Integração | Entregas e produto transferidos; **lições aprendidas** registradas; documentos arquivados; recursos liberados; encerramento de aquisições |

Características: formaliza o término **de uma fase ou do projeto**, inclusive quando o projeto é **cancelado**; verifica o atendimento aos critérios de encerramento.

## 4. Sequência lógica e fluxo

1. **Iniciação** → o projeto é autorizado.
2. **Planejamento** → define-se o que e como fazer.
3. **Execução** → o trabalho é realizado.
4. **Monitoramento e Controle** → em paralelo, compara-se o real ao planejado e se corrige.
5. **Encerramento** → conclui-se a fase ou o projeto.

*Atenção:* a sequência acima é **lógica**; os grupos se sobrepõem e se repetem. O Monitoramento e Controle **não** vem depois da Execução como etapa isolada; acontece em paralelo com Planejamento e Execução. Uma sequência de grupos válida a partir da autorização do projeto é, por exemplo: **Iniciação → Planejamento → Execução → Monitoramento e Controle → Encerramento**; sequências que omitem a Iniciação (começando em "Planejamento") ou que colocam o Encerramento antes do Planejamento são incorretas.

## 5. Comparações conceituais

| Conceito A | Conceito B | Diferença principal |
|---|---|---|
| Iniciação | Planejamento | Autoriza o projeto (termo de abertura) × define o plano e as linhas de base |
| Termo de abertura | Plano de gerenciamento do projeto | Autoriza e dá autoridade ao gerente × integra os planos e linhas de base |
| Execução | Monitoramento e Controle | Realiza o trabalho × compara o desempenho com o plano e aciona correções |
| Monitorar | Controlar | Coletar e relatar × comparar, decidir e agir |
| Validar o escopo | Controlar a qualidade | Aceitação formal das entregas pelo cliente × verificação da conformidade com requisitos de qualidade |
| Encerramento da fase | Encerramento do projeto | Conclui a fase × conclui todo o projeto |
| Grupos de processos | Fases | Lógicos, repetem-se × cronológicas |

## 6. Aplicações e cenários

**Cenário (didático): em que grupo está a atividade?** (a) "Aprovar formalmente o início do projeto e nomear o gerente": **Iniciação**. (b) "Definir cronograma, orçamento e plano de riscos": **Planejamento**. (c) "Contratar fornecedor e coordenar a equipe": **Execução**. (d) "Medir o avanço e decidir uma ação corretiva": **Monitoramento e Controle**. (e) "Registrar lições aprendidas e liberar recursos": **Encerramento**.

**Cenário (didático): mudança de escopo durante a execução.** Surge um pedido de nova funcionalidade. O processo **Realizar o controle integrado de mudanças** (M&C) avalia impacto em escopo, prazo e custos; se aprovado, o planejamento é **atualizado** (replanejamento) e a execução prossegue com as novas linhas de base. *Limitação:* mudanças aprovadas sem análise de impacto comprometem as linhas de base.

## 7. Atenção para a prova

*Inferência técnica e recomendação pedagógica; sem atribuir frequência à banca.*

- Memorizar os **cinco grupos** e a ordem lógica; quem **monitora, rastreia e revisa o progresso e implementa medidas corretivas** é o grupo de **Monitoramento e Controle**.
- **Iniciação** é o início da lógica de gerenciamento: a **autorização formal** vem do **termo de abertura**.
- **Validar o escopo** é do grupo **Monitoramento e Controle** e trata da **aceitação formal**; antes de avançar para teste/implantação de entregas construídas, a atividade típica de gerenciamento é **validar o escopo** (verificar e obter aceitação).
- Contagem: **Planejamento (24)** é o maior grupo; **Encerramento (1)** e **Iniciação (2)** são os menores.
- Cuidado com sequências que omitem a Iniciação ou invertem grupos.
- *Evidência histórica (amostra de duas provas):* a Prova 6 de 2023 perguntou (Q55) qual **sequência de processos** (Iniciação → Planejamento → Encerramento) é correta a partir da autorização do projeto, e (Q70) qual grupo **monitora, rastreia e revisa o progresso e implementa ações corretivas**. A Prova 15 de 2018 perguntou (Q67) qual a principal atividade do gerente antes de passar às próximas fases (validar o escopo) e (Q62) o que fazer diante de nova demanda de escopo (a alternativa de gabarito foi desenvolver um termo de abertura). Duas provas não permitem inferir frequência.

## 8. Síntese

- 5 grupos: Iniciação (2) → Planejamento (24) → Execução (10) → Monitoramento e Controle (12, transversal) → Encerramento (1).
- Iniciação: termo de abertura e identificação das partes interessadas.
- Planejamento: plano de gerenciamento e linhas de base.
- Execução: realizar o trabalho e gerar entregas.
- Monitoramento e Controle: comparar com o plano, controlar mudanças, validar escopo, controlar qualidade.
- Encerramento: encerrar fase/projeto, lições aprendidas.
- Grupos ≠ fases.

## 9. Pontos para a futura produção de questões (registro)

Conceitos: finalidade de cada grupo; processos por grupo; monitorar×controlar; validar escopo×controlar qualidade. Distinções: grupo×fase; termo de abertura×plano; Execução×Monitoramento. Interpretação: classificar uma atividade; sequenciar grupos; identificar o processo certo para um cenário.

## 10. Referências

- PROJECT MANAGEMENT INSTITUTE. *A Guide to the Project Management Body of Knowledge (PMBOK® Guide)*. 6th ed., 2017 — totais e lista de processos por área **conferidos em fonte secundária (Visual Paradigm)**; totais por grupo conferidos em guias de estudo; atribuição individual de cada processo a seu grupo **parcialmente confirmada**, não confrontada com o PMI.
- Edital Transpetro nº 04/2026.4, Anexo IV, item 3.
