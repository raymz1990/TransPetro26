---
modulo: 05-engenharia-software
arquivo: 07-testes-e-ambientes
itens_edital:
  - "5.5 Ambientes de desenvolvimento de software."
ids_matriz: ["E5-046"]
escopo: "A — conteúdo expresso no edital (5.5). Os ambientes de teste complementam o item 5.4 (arquivo `06`). Nomes de ferramentas são exemplos de categorias, sem recomendação e sem verificação."
tipo_conteudo: "teoria"
status: "VALIDADO"
ultima_atualizacao: "2026-10-31"
---

# Ambientes de Desenvolvimento de Software (e Ambientes de Teste)

**Módulo:** M05 — Engenharia de software
**Texto oficial (Anexo IV):** 5.5 "Ambientes de desenvolvimento de software."
**Nota de interpretação:** o edital não detalha o item. Adotou-se a leitura de **ambiente de desenvolvimento** em sentido amplo: **ferramentas** do desenvolvedor (editor/IDE, compilação, depuração, controle de versão), **ambientes de execução** (desenvolvimento, teste, homologação, produção) e **automação** (integração e entrega contínuas, DevOps). A abrangência deve ser confirmada pelo usuário.
**Status:** `VALIDADO` (aprovado pelo usuário em 2026-10-31, com ressalvas: interpretação dos itens 5.2 e 5.5 a confirmar; normas ISO, princípios ISTQB e vários referenciais de memória não verificados em fonte primária — ver `docs/qualidade/relatorio-producao-modulo-05.md`).

**Objetivos de aprendizagem.** (1) Descrever os componentes de um ambiente de desenvolvimento; (2) explicar controle de versão, *build* e integração contínua; (3) distinguir entrega contínua e implantação contínua; (4) descrever os ambientes (desenvolvimento, teste, homologação, produção) e suas práticas; (5) relacionar DevOps, contêineres e infraestrutura como código.

---

## 1. Introdução

O **ambiente de desenvolvimento de software** é o conjunto de **ferramentas, serviços, configurações e infraestrutura** que apoia a equipe em **escrever, construir, testar, integrar, entregar e operar** o software. Um bom ambiente aumenta a **produtividade**, a **qualidade** e a **previsibilidade** das entregas; um ambiente mal configurado causa defeitos do tipo "funciona na minha máquina". O termo abrange tanto o **ambiente local do desenvolvedor** quanto os **ambientes compartilhados** pelos quais o software é promovido até a produção.

*Relações:* a escolha das ferramentas depende do ciclo de vida (arquivo `03`); os testes automatizados rodam no ambiente (arquivo `06`); a entrega e a operação relacionam-se com ITSM (Módulo 4, arquivo `04`); a segurança do pipeline relaciona-se com o desenvolvimento seguro (Módulo 9, item 9.5).

## 2. O ambiente local do desenvolvedor

| Componente | Função | Exemplos de categoria |
|---|---|---|
| **Editor/IDE** (*Integrated Development Environment*) | Edição com **realce de sintaxe**, **autocompletar**, navegação, **refatoração**, integração com compilador, depurador, testes e controle de versão | Editores de código e IDEs |
| **Compilador/interpretador/ambiente de execução** | Traduz ou executa o código | Compiladores, interpretadores, máquinas virtuais |
| **Depurador (*debugger*)** | Inspeciona a execução: **pontos de parada**, passo a passo, observação de variáveis, pilha de chamadas | Depuradores integrados |
| **Gerenciador de dependências** | Declara e obtém bibliotecas de terceiros em versões controladas | Gerenciadores de pacotes |
| **Ferramenta de *build*** | **Automatiza** a compilação, o empacotamento e a execução de testes | Ferramentas de automação de *build* |
| **Ferramentas de qualidade** | **Linters**, formatadores, análise estática (SAST, Módulo 9), cobertura de testes | Analisadores de código |
| **Testes** | *Frameworks* de testes de unidade/integração | Frameworks de teste (arquivo `06`) |
| **Controle de versão** | Histórico, colaboração, ramificações | Sistemas de controle de versão |
| **Contêineres/máquinas virtuais** | Reproduzir o ambiente de execução | Contêineres e virtualização |
| **Terminal e *scripts*** | Automação local | Linha de comando |

**Depuração:** localizar a causa de uma **falha** (reproduzir, isolar, corrigir, testar); técnicas: **pontos de parada**, **registros (*logs*)**, **traços de pilha (*stack traces*)**, **perfilamento (*profiling*)** para desempenho.

## 3. Controle de versão e gerência de configuração

### 3.1 Controle de versão (VCS)

Sistema que **registra o histórico** de alterações em arquivos, permite **voltar a versões anteriores** e **colaborar** com segurança.

| Conceito | Significado |
|---|---|
| **Repositório** | Armazém do código e de seu histórico |
| ***Commit*** | Conjunto de alterações registrado com mensagem |
| ***Branch* (ramificação)** | Linha independente de desenvolvimento |
| ***Merge* (mesclagem)** | Integração de alterações de uma ramificação em outra; pode gerar **conflitos** |
| ***Tag*** | Marca uma versão (por exemplo, uma *release*) |
| ***Pull/merge request*** | Pedido de integração com **revisão de código** |
| ***Clone*, *push*, *pull*** | Copiar o repositório; enviar e obter alterações |

**Centralizado × distribuído:** no modelo **centralizado**, há um servidor único de referência; no **distribuído** (como o **Git**), cada desenvolvedor tem **cópia completa** do histórico, o que permite trabalho offline e ramificações baratas.

**Estratégias de ramificação:** ***trunk-based development*** (ramos curtos, integração frequente no tronco, favorece CI), ***GitFlow*** (ramos de *feature*, *develop*, *release*, *hotfix*) e fluxos com *pull requests*. **Versionamento semântico** (MAJOR.MINOR.PATCH): MAJOR muda quando há incompatibilidade; MINOR, quando se acrescentam funções compatíveis; PATCH, para correções.

### 3.2 Gerência de configuração de software (SCM)

Controla **itens de configuração** (código, documentos, scripts, parâmetros), **linhas de base** e **mudanças**, garantindo **integridade e rastreabilidade** (relaciona-se com o CMDB, Módulo 4, arquivo `04`, e com o controle de mudanças, Módulo 3). Inclui **gerência de versões**, de *builds* e de *releases*.

## 4. Integração e entrega contínuas (CI/CD)

```text
Código ─► Commit ─► [ Build ─► Testes unitários ─► Análise estática ─► Empacotamento ]
                         ─► Implantação em homologação ─► Testes de aceitação/integração
                         ─► (aprovação) ─► Implantação em produção ─► Monitoramento
```

| Prática | Definição |
|---|---|
| **Integração contínua (CI)** | Integrar o código **com frequência** (várias vezes ao dia) em um repositório compartilhado, com **build e testes automáticos** a cada alteração, para detectar problemas cedo |
| **Entrega contínua (*Continuous Delivery*)** | Manter o software **sempre em condição de ser liberado**; a implantação em produção é **decisão (manual) de negócio** |
| **Implantação contínua (*Continuous Deployment*)** | **Cada alteração aprovada nos testes é implantada automaticamente em produção**, sem aprovação manual |
| **Pipeline** | Sequência automatizada de etapas (*build*, testes, análise, empacotamento, implantação) |
| **Artefato versionado** | Pacote construído **uma única vez** e **promovido** entre ambientes (*build once, deploy many*) |

**Estratégias de implantação:** **azul/verde** (dois ambientes idênticos; troca de tráfego), **canário** (liberação gradual a uma parcela de usuários), **gradual (*rolling*)**; **sinalizadores de funcionalidade (*feature flags*)** separam **implantação** de **liberação**. **Reversão (*rollback*)** deve ser possível.

## 5. Ambientes de execução

| Ambiente | Finalidade | Quem usa |
|---|---|---|
| **Desenvolvimento (local/compartilhado)** | Codificar e testar unidades | Desenvolvedores |
| **Integração (CI)** | Construir e executar testes automatizados a cada alteração | Pipeline |
| **Teste/QA** | **Testes de sistema** e não funcionais | Equipe de testes |
| **Homologação (*staging*/UAT)** | Validação por usuários; **o mais parecido com produção** | Usuários e negócio |
| **Produção** | Operação real, com dados reais | Usuários finais |

*Boas práticas:* **paridade** entre ambientes (mesma versão de sistema operacional, bibliotecas e configuração), **configuração separada do código** (variáveis de ambiente), **segredos** (senhas, chaves) em **cofre de segredos**, acesso **restrito** à produção, **mudanças apenas por pipeline**, **isolamento** entre ambientes.

### 5.1 Dados nos ambientes de teste

Dados de produção contêm **dados pessoais** e **confidenciais**; usá-los fora da produção exige **cuidado legal** (LGPD, Módulo 4, arquivo `05`) e de segurança. Alternativas: **dados sintéticos**, **mascaramento (*masking*)**, **anonimização** e **subconjunto** de dados, com controle de acesso. A **gestão de dados de teste** é parte do planejamento de testes (arquivo `06`).

### 5.2 Ambientes de teste (arquivo `06`, item 5.4)

Requisitos: **representatividade** da produção, **isolamento**, **controle de configuração**, **dados controlados**, **disponibilidade**. Recursos comuns: **virtualização de serviços** e **dublês** (*stubs*, *mocks*) para dependências indisponíveis, ambientes **sob demanda e descartáveis** (provisionados automaticamente), ferramentas de **automação**, de **desempenho** e de **gestão de defeitos**.

## 6. Contêineres, virtualização e infraestrutura como código

| Tecnologia | Descrição | Benefício |
|---|---|---|
| **Máquina virtual (VM)** | Computador virtual completo (com sistema operacional) sobre um *hypervisor* | Isolamento forte |
| **Contêiner** | Empacota a aplicação e suas dependências, **compartilhando o núcleo do sistema operacional do hospedeiro**; mais leve que VM | Reprodutibilidade ("funciona igual em qualquer lugar"), implantação rápida |
| **Orquestração de contêineres** | Automatiza implantação, escala e recuperação de muitos contêineres | Operação em escala |
| **Infraestrutura como código (IaC)** | Descrever e provisionar infraestrutura (servidores, redes, permissões) por **arquivos versionados e executáveis** | Ambientes reproduzíveis, auditáveis e versionados |
| **Nuvem** | Ambientes sob demanda (IaaS, PaaS, SaaS; Módulo 4, arquivo `01`) | Elasticidade; custo por uso |

## 7. DevOps e DevSecOps

**DevOps** é uma **cultura e conjunto de práticas** que integram **desenvolvimento** e **operações** para entregar valor de forma **rápida, frequente e confiável**, por meio de **colaboração**, **automação** (CI/CD, IaC), **medição** e **compartilhamento** de responsabilidade. Resume-se em **CALMS**: **C**ultura, **A**utomação, ***L**ean*, **M**edição e **S**haring (compartilhamento). **DevSecOps** incorpora **segurança** ao longo do pipeline (análise estática **SAST**, análise de composição de dependências, **DAST**, varredura de contêineres e de IaC, gestão de segredos; Módulo 9, item 9.5), em lugar de tratá-la só no final.

**Métricas de entrega** (usadas por equipes de alto desempenho, por exemplo, nos estudos "DORA"): frequência de implantação, **tempo de espera** para mudanças, taxa de falhas de mudança e **tempo de recuperação**. *(Citação de memória; não verificada online.)*

## 8. Qualidade e produtividade no ambiente

- **Revisão de código** (*code review*) por pares, como técnica estática (arquivo `06`).
- **Padronização**: guias de estilo, *linters*, formatação automática.
- **Observabilidade** (logs, métricas e rastros distribuídos) para depurar e operar.
- **Documentação como código**, **gestão de tarefas e *issues***, **gestão de conhecimento**.
- **Ambientes padronizados** (por exemplo, contêineres de desenvolvimento) para reduzir o tempo de preparação de novos membros.
- **Plataformas de baixo código (*low-code*)** e ambientes de **desenvolvimento em nuvem** como alternativas, com governança (Módulo 4, arquivo `02`).

## 9. Comparações conceituais

| Conceito A | Conceito B | Diferença principal |
|---|---|---|
| Entrega contínua | Implantação contínua | Sempre pronto, liberação por decisão manual × toda alteração aprovada vai à produção automaticamente |
| Integração contínua | Entrega contínua | Integrar e testar com frequência × manter o produto liberável |
| VCS centralizado | VCS distribuído | Servidor único de referência × cópia completa do histórico em cada máquina |
| *Branch* | *Tag* | Linha de desenvolvimento × marca de versão |
| *Build* | *Deploy* | Construir o artefato × instalá-lo em um ambiente |
| Implantação | Liberação | Colocar a versão no ambiente × disponibilizar a funcionalidade aos usuários |
| VM | Contêiner | Sistema operacional completo × compartilha o núcleo do hospedeiro |
| Homologação | Produção | Validação com usuários em ambiente semelhante × operação real |
| DevOps | DevSecOps | Integração de desenvolvimento e operações × inclusão da segurança em todo o pipeline |
| IDE | Editor de texto | Ambiente integrado (compilação, depuração, refatoração) × edição simples |

## 10. Aplicações e cenários

**Cenário (didático): "funciona na minha máquina".** Uma função falha em homologação porque a versão da biblioteca difere da do desenvolvedor. Solução: **dependências versionadas**, **contêiner** padronizado, **pipeline** que constrói o artefato uma vez e o promove entre ambientes, e **IaC** para criar homologação igual à produção. *Limitação:* manter a paridade tem custo.

**Cenário (didático): liberação com risco.** A equipe usa **implantação canário**: libera a nova versão a 5% dos usuários, monitora erros e, se estáveis, amplia; um **sinalizador de funcionalidade** permite desligar a novidade sem nova implantação.

## 11. Atenção para a prova

*Inferência técnica e recomendação pedagógica; sem atribuir frequência à banca.*

- **CI** = integrar com frequência com *build* e testes automáticos; **entrega contínua** ≠ **implantação contínua**.
- **Controle de versão**: *commit*, *branch*, *merge*; distribuído (Git) × centralizado.
- Ambientes: **desenvolvimento → teste → homologação → produção**; paridade e isolamento.
- **Dados pessoais em ambientes de teste**: mascarar/anonimizar (LGPD).
- **Contêiner** compartilha o núcleo do SO; **VM** não.
- Evitar absolutos ("o ambiente de produção pode ser usado para testes").
- *Evidência histórica:* o item 5.5 **não** teve questão específica nas duas provas catalogadas (2018 e 2023); duas provas não permitem inferir frequência, e o edital de 2026 prevê o item. A questão sobre DAST (2023, Q38) pertence ao Módulo 9.

## 12. Síntese

- Ambiente de desenvolvimento: IDE, compilação/interpretação, depuração, dependências, *build*, qualidade, testes, controle de versão, contêineres.
- Controle de versão (*commit*, *branch*, *merge*, *tag*); SCM e linhas de base.
- CI/CD: integração contínua; entrega contínua (liberável) × implantação contínua (automática); pipeline; *build once, deploy many*.
- Ambientes: desenvolvimento, integração, teste, homologação, produção; paridade; segredos; dados mascarados.
- Contêineres, orquestração, IaC, nuvem; DevOps (CALMS) e DevSecOps.

## 13. Pontos para a futura produção de questões (registro)

Conceitos: IDE; VCS; CI/CD; ambientes; contêineres; IaC; DevOps. Distinções: entrega×implantação contínua; CI×CD; VM×contêiner; homologação×produção. Interpretação: escolher a prática ou o ambiente para um cenário; identificar o risco de uma configuração.

## 14. Referências

- Conceitos de controle de versão, CI/CD, DevOps (CALMS), contêineres, IaC, estratégias de implantação e versionamento semântico: conhecimento geral do autor do material (documentação das ferramentas, HUMBLE e FARLEY, *Continuous Delivery*; KIM et al., *The DevOps Handbook*; semver.org) — **não verificado online** (edições, anos e páginas pendentes). **Versionamento semântico: verificado** em https://semver.org em 2026-10-31 (MAJOR para mudanças incompatíveis na API pública; MINOR para funcionalidades compatíveis; PATCH para correções compatíveis; MINOR reinicia o PATCH e MAJOR reinicia MINOR e PATCH).
- Edital Transpetro nº 04/2026.4, Anexo IV, item 5.5.
