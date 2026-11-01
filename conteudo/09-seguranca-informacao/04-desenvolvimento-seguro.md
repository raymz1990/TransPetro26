---
modulo: 09-seguranca-informacao
arquivo: 04-desenvolvimento-seguro
itens_edital:
  - "9.5 Técnicas de desenvolvimento seguro, SAST/DAST/IAST"
ids_matriz: ["E5-086"]
escopo: "A — conteúdo expresso no edital."
tipo_conteudo: "teoria"
status: "VALIDADO"
ultima_atualizacao: "2026-10-31"
---

# Técnicas de Desenvolvimento Seguro; SAST, DAST e IAST

**Módulo:** M09 — Segurança da informação
**Texto oficial (Anexo IV):** 9.5 "Técnicas de desenvolvimento seguro, SAST/DAST/IAST".
**Escopo:** A. Ciclo de vida e testes de software: Módulo 5 (`03`, `06`, `07`). Ataques web: `03`.
**Status:** `VALIDADO` (aprovado pelo usuário em 2026-10-31, com ressalvas: interpretação do item 9.1 e escolha das versões do NIST SP 800-61 e do MITRE ATT&CK a confirmar; fontes de memória listadas em `docs/qualidade/relatorio-producao-modulo-09.md`). **Verificados** (OWASP, 2026-10-31): SAST e DAST. **Revisão:** IAST (interação com o programa com observação e sensores; mistura de SAST e DAST) e SCA (detectar componentes de código aberto embutidos) **confirmados** na Wikipedia (páginas curtas; OWASP não lido); práticas de SDL, DevSecOps e outros são de memória.

**Objetivos de aprendizagem.** (1) Integrar segurança ao ciclo de vida; (2) aplicar práticas de codificação segura; (3) distinguir SAST, DAST, IAST e SCA; (4) conhecer DevSecOps; (5) escolher a técnica de teste adequada.

---

## 1. Desenvolvimento seguro

**Desenvolvimento seguro** integra segurança a **todas as fases** do ciclo de vida do software, em vez de testá-la apenas no fim (*shift left*: antecipar). Custo de corrigir uma falha cresce quanto mais tarde ela é detectada.

### 1.1 Práticas por fase (visão geral, de memória)

| Fase | Práticas |
|---|---|
| **Requisitos** | Requisitos de segurança e privacidade; classificação dos dados; requisitos legais (LGPD) |
| **Projeto** | **Modelagem de ameaças** (`08`), princípios de projeto seguro (menor privilégio, defesa em profundidade, falha segura), padrões de arquitetura segura |
| **Codificação** | Padrões de codificação segura; revisão de código; bibliotecas confiáveis; sem segredos no código |
| **Testes** | SAST, DAST, IAST, SCA, testes de penetração (`08`), fuzzing |
| **Implantação** | Configuração segura; gestão de segredos; assinatura de artefatos; mínimo privilégio de execução |
| **Operação** | Monitoramento, gestão de vulnerabilidades e *patches*, resposta a incidentes (`06`, `14`) |

Modelos de referência (de memória): **Microsoft SDL** (*Security Development Lifecycle*), **OWASP SAMM** (maturidade), **BSIMM** (observação de práticas), **NIST SSDF** (SP 800-218).

### 1.2 Codificação segura

| Prática | Objetivo |
|---|---|
| **Validar entradas** (lista permitida) e **codificar saídas** | Evitar injeções e XSS (`03`) |
| **Consultas parametrizadas** | Evitar SQL Injection |
| **Autenticação e gestão de sessão robustas** | Senhas com *hash* forte e *salt* (`12`), MFA, expiração de sessão, *cookies* com `Secure`, `HttpOnly` e `SameSite` |
| **Controle de acesso no servidor**; negar por padrão | Evitar *broken access control* (A01 do OWASP Top 10 2025) |
| **Criptografia correta** | Algoritmos e protocolos atuais; gestão de chaves; não inventar algoritmos |
| **Tratamento de erros e *logs*** | Mensagens que não vazem detalhes; registro de eventos relevantes sem dados sensíveis |
| **Gestão de dependências** | Bibliotecas atualizadas e verificadas (cadeia de suprimentos) |
| **Gestão de segredos** | Sem senhas ou chaves em código-fonte; cofres de segredos |
| **Privacidade por projeto** | Minimização de dados (LGPD, Módulo 4) |
| **Revisão e testes** | Revisão por pares, análise automatizada |

**OWASP Top 10** (versão 2025 lida em top10.owasp.org; 2021 é a anterior): referência de riscos de aplicações web; a lista completa está em `03`. Outras referências OWASP: ASVS (verificação), Cheat Sheets, Proactive Controls (de memória).

## 2. Técnicas de teste de segurança de aplicações

### 2.1 SAST — *Static Application Security Testing* (confirmado em OWASP)

Ferramentas que **analisam o código-fonte ou versões compiladas** em busca de falhas, **sem executar** a aplicação em operação (a página do OWASP fala em código-fonte ou compilado). Detecta cedo, aponta **linha de código**, cobre caminhos que o teste dinâmico não alcança. Limites: **falsos positivos**, dependência da linguagem, não vê configuração e comportamento em execução.

### 2.2 DAST — *Dynamic Application Security Testing* (confirmado em OWASP)

Scanners que testam a aplicação **em execução, "de fora"** (caixa-preta), enviando requisições e analisando respostas: detecta problemas de configuração, injeções e XSS em tempo de execução, independente da linguagem. Limites: aparece **tarde** no ciclo, não aponta a linha de código, cobertura limitada aos caminhos percorridos.

### 2.3 IAST — *Interactive Application Security Testing* (ideia central verificada na Wikipedia; detalhes de memória)

Combina elementos dos anteriores: um **agente/instrumentação dentro da aplicação em execução** observa o código e o fluxo de dados durante testes (manuais, automatizados ou DAST), com menos falsos positivos e indicação do local da falha. Exige instrumentação e ambiente de teste ativo.

### 2.4 Outras

| Técnica | Descrição |
|---|---|
| **SCA** (*Software Composition Analysis*) | Identifica **componentes de terceiros** e suas vulnerabilidades e licenças (CVE); gera **SBOM** (lista de materiais de software) |
| **RASP** (*Runtime Application Self-Protection*) | Proteção embutida em tempo de execução |
| **Fuzzing** | Envio de entradas inválidas/aleatórias para provocar falhas |
| **Revisão de código** e **testes de penetração** (`08`) | Manuais, complementares |
| **Análise de segredos, de infraestrutura como código (IaC) e de contêineres** | Verificação de configurações e imagens |

### 2.5 Comparação

| Aspecto | SAST | DAST | IAST |
|---|---|---|---|
| Acesso ao código | Sim (código ou binário) | Não (caixa-preta) | Sim (instrumentação) |
| Executa a aplicação? | Não | Sim | Sim |
| Quando | Cedo (codificação/CI) | Aplicação rodando (teste/homologação) | Durante testes |
| Localiza a linha? | Sim | Não | Sim |
| Falsos positivos | Mais | Menos | Menos |
| Dependente da linguagem | Sim | Não | Sim |

## 3. DevSecOps

Integração de segurança ao fluxo de **CI/CD**: SAST e SCA no *commit*/*build*, DAST em ambientes de teste, análise de IaC e de imagens, gestão de segredos, *gates* (portões) de qualidade, políticas como código, monitoramento contínuo; responsabilidade **compartilhada** entre desenvolvimento, segurança e operações (de memória).

## 4. Exemplo (didático)

Pipeline de uma aplicação: no *commit*, SAST e verificação de segredos; no *build*, SCA e geração de SBOM; em homologação, DAST e testes de penetração; em produção, monitoramento e WAF. Falha crítica bloqueia a promoção.

## 5. Comparações conceituais

| A | B | Diferença |
|---|---|---|
| SAST | DAST | Analisa código sem executar × testa a aplicação em execução |
| DAST | IAST | Caixa-preta externa × com instrumentação interna |
| SAST | SCA | Código próprio × componentes de terceiros |
| Verificação | Validação | Está certo conforme especificação × atende à necessidade (Módulo 5) |
| *Shift left* | Teste só no fim | Antecipar a segurança × corrigir tarde |

## 6. Atenção para a prova

*Inferência técnica e recomendação pedagógica; sem atribuir frequência à banca.*

- Associar **SAST = estático/código**, **DAST = dinâmico/em execução**, **IAST = interativo/instrumentado**.
- *Evidência histórica (amostra de duas provas):* a Prova 6 de 2023 trouxe **Q38** (SAST/DAST — teste em tempo de execução; gabarito B, de terceiros, não validado). Duas provas não permitem inferir frequência.

## 7. Síntese

Segurança em todas as fases (*shift left*); codificação segura (validação, parametrização, controle de acesso, segredos); SAST (estático), DAST (dinâmico), IAST (instrumentado), SCA (componentes); DevSecOps.

## 8. Pontos para a futura produção de questões (registro)

Definição de SAST/DAST/IAST; escolha da técnica por cenário; práticas de codificação segura; DevSecOps.

## 9. Referências

- OWASP, *Source Code Analysis Tools* (SAST) e *Vulnerability Scanning Tools* (DAST) — **verificadas em 2026-10-31**; IAST e SCA — Wikipedia, **verificadas em 2026-10-31**.
- Microsoft SDL, OWASP SAMM/ASVS, BSIMM, NIST SSDF — **de memória, não verificados**.
- Edital Transpetro nº 04/2026.4, Anexo IV, item 9.5. Prova Transpetro 2023, Prova 6, Q38 (gabarito de terceiros, não validado).
