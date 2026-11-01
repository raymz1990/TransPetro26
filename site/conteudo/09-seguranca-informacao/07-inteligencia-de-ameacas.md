---
modulo: 09-seguranca-informacao
arquivo: 07-inteligencia-de-ameacas
itens_edital:
  - "9.12 Threat intel, threat hunting"
ids_matriz: ["E5-093"]
escopo: "A — conteúdo expresso no edital."
tipo_conteudo: "teoria"
status: "VALIDADO"
ultima_atualizacao: "2026-10-31"
---

# Inteligência de Ameaças (*Threat Intelligence*) e Caça a Ameaças (*Threat Hunting*)

**Módulo:** M09 — Segurança da informação
**Texto oficial (Anexo IV):** 9.12 "Threat intel, threat hunting".
**Escopo:** A. ATT&CK e kill chain como modelos de comportamento: `08`; resposta: `06`; operação: `14`.
**Status:** `VALIDADO` (aprovado pelo usuário em 2026-10-31, com ressalvas: interpretação do item 9.1 e escolha das versões do NIST SP 800-61 e do MITRE ATT&CK a confirmar; fontes de memória listadas em `docs/qualidade/relatorio-producao-modulo-09.md`). **Verificados** (Wikipedia, 2026-10-31): níveis de CTI, IoC e TTP, Cyber Kill Chain (7 fases, Lockheed Martin, 2011), *threat hunting* (proativo, iterativo, baseado em hipótese). **De memória:** Diamond Model e STIX/TAXII (as páginas consultadas na revisão retornaram 404; permanecem **não confirmados**), ciclo de inteligência, ISACs.

**Objetivos de aprendizagem.** (1) Definir CTI e seus níveis; (2) distinguir dado, informação e inteligência de ameaças; (3) reconhecer IoC e TTP; (4) descrever o ciclo de inteligência; (5) distinguir *threat hunting* de detecção reativa.

---

## 1. Inteligência de ameaças (*Cyber Threat Intelligence* — CTI)

**CTI** é a **inteligência** (informação analisada, contextualizada e acionável) sobre **ameaças, atores, motivações, capacidades e táticas**, voltada a apoiar decisões de defesa. Diferencia-se de **dados brutos** (lista de IPs) e de **informação** (relatório sem análise): o que a torna *inteligência* é a **análise e a relevância para a organização** (relação com `01`, módulo 7: dado → informação → conhecimento → inteligência).

### 1.1 Níveis (verificado: três níveis padrão)

| Nível | Foco | Público | Exemplos |
|---|---|---|---|
| **Estratégica** | Tendências, motivações de atores, riscos para o negócio, geopolítica | Alta direção, gestão de riscos | Relatório de ameaças ao setor de energia |
| **Operacional** | Campanhas, intenção e capacidade dos atacantes; **TTPs** | Gestores de segurança, resposta a incidentes | Perfil de um grupo e suas campanhas |
| **Tática** | **IoC** e padrões técnicos para detecção e bloqueio | SOC, analistas | Hashes, IPs e domínios maliciosos, regras de detecção |

A **inteligência técnica** (artefatos e *feeds* de IoC para o SOC) aparece em algumas organizações como uma **categoria adicional**, não como nível padrão (segundo a fonte consultada). Fontes variam na nomenclatura.

### 1.2 Fontes

**OSINT** (fontes abertas), **fontes comerciais**, **compartilhamento comunitário** (ISACs/ISAOs, CSIRTs; de memória), **fontes internas** (logs, incidentes passados), **HUMINT/redes fechadas**, **Dark/Deep Web**, **honeypots** e **sandboxes**.

## 2. Conceitos centrais

| Termo | Definição |
|---|---|
| **IoC** (*Indicator of Compromise*) | Artefato que indica comprometimento: *hashes*, IPs, domínios, URLs, chaves de registro, nomes de arquivos (verificado; ligado ao nível **tático**) |
| **TTP** (táticas, técnicas e procedimentos) | **Comportamento** do atacante (verificado; ligado ao nível **operacional**); mais duradouro que IoC |
| **IoA** (*Indicator of Attack*) | Indicador de **comportamento em curso** (de memória) |
| **Ator de ameaça** | Estado-nação, cibercriminosos, hacktivistas, *insiders*, grupos APT |
| **Campanha** | Conjunto de atividades coordenadas de um ator |
| **Pirâmide da dor** (*Pyramid of Pain*, de memória) | IoC como *hashes* são triviais de alterar pelo atacante; TTPs são difíceis — detectar TTPs causa mais "dor" ao atacante |

### 2.1 Modelos e padrões

| Modelo | Descrição |
|---|---|
| **Cyber Kill Chain** (Lockheed Martin, 2011; **verificado**) | Sete fases: **reconhecimento, armamento (*weaponization*), entrega, exploração, instalação, comando e controle, ações sobre os objetivos** |
| **MITRE ATT&CK** | Base de conhecimento de táticas e técnicas de adversários (`08`) |
| **Diamond Model** (de memória, não confirmado) | Eventos de intrusão descritos por adversário, infraestrutura, capacidade e vítima |
| **STIX/TAXII** (de memória, não confirmado) | Padrões para **descrever** (STIX) e **transportar** (TAXII) inteligência de ameaças |
| **TLP** (*Traffic Light Protocol*; de memória) | Rótulos de compartilhamento (branco, verde, âmbar, vermelho) |

## 3. Ciclo de vida da inteligência (de memória)

1. **Planejamento e direção** (requisitos de inteligência: o que a organização precisa saber).
2. **Coleta**.
3. **Processamento** (normalização, tradução, deduplicação).
4. **Análise** (contexto, correlação, atribuição, avaliação de confiança).
5. **Disseminação** (para o público certo, no formato certo).
6. **Feedback** (ajustar requisitos).

## 4. Uso da CTI

Enriquecer alertas do SIEM (`14`); bloquear IoC em firewall/EDR; priorizar gestão de vulnerabilidades (explorações ativas); apoiar a resposta (`06`) e os testes de penetração (`08`); informar a gestão de riscos (`09`); orientar investimentos. **Limites:** excesso de IoC com baixa qualidade, **vida curta** dos indicadores, falsos positivos, atribuição incerta, custo.

## 5. Caça a ameaças (*Threat Hunting*)

**Threat hunting** é a **busca proativa e iterativa** por ameaças que **escaparam das defesas automatizadas**, em contraste com medidas **reativas** (verificado em fonte secundária). Tipicamente **parte de uma hipótese**; usa IoC e TTPs como indicadores; a fonte registra que **não há consenso** sobre a definição.

| Aspecto | Detecção reativa (SOC) | *Threat hunting* |
|---|---|---|
| Gatilho | Alerta | Hipótese, inteligência ou anomalia |
| Postura | Reativa | **Proativa** |
| Premissa | Controles detectam o que conhecem | "Assume-se que o invasor já está dentro" (*assume breach*; de memória) |
| Resultado | Incidentes tratados | Novas detecções, achados, lacunas de visibilidade |

### 5.1 Processo (de memória)

1. **Hipótese** (por exemplo: "um atacante pode estar usando tarefas agendadas para persistência").
2. **Coleta e investigação** (telemetria de EDR, logs, rede; consultas no SIEM).
3. **Análise** e confirmação ou refutação.
4. **Resposta** (se confirmada) e **documentação**.
5. **Automatização**: transformar o achado em **detecção contínua** (regras), melhorando o SOC.

**Tipos de caça (de memória):** guiada por hipótese (ATT&CK/TTP), guiada por inteligência (IoC), baseada em anomalia/analítica. **Pré-requisitos:** visibilidade (logs e EDR), dados centralizados, analistas qualificados, linha de base do ambiente.

## 6. Exemplo (didático)

A CTI informa que um grupo que ataca o setor de energia usa técnica de *credential dumping* (operacional). A equipe formula a hipótese de que isso ocorre no seu ambiente, consulta a telemetria dos servidores, encontra um acesso suspeito ao processo de autenticação, aciona a resposta e cria uma regra no SIEM para detectar o padrão.

## 7. Comparações conceituais

| A | B | Diferença |
|---|---|---|
| Dado | Inteligência | Fato bruto × informação analisada e acionável |
| IoC | TTP | Artefato efêmero × comportamento durável |
| CTI estratégica | Tática | Decisão de negócio × detecção técnica |
| *Threat hunting* | Monitoramento | Busca proativa por hipótese × reação a alertas |
| Kill chain | ATT&CK | Modelo linear de 7 fases × matriz detalhada de táticas e técnicas |
| IoC | IoA | Evidência de comprometimento × evidência de ataque em curso |

## 8. Atenção para a prova

*Inferência técnica e recomendação pedagógica; sem atribuir frequência à banca.*

- *Threat hunting* é **proativo**; a CTI deve ser **acionável**; IoC são indicadores técnicos e TTP descrevem comportamento.
- O item 9.12 **não teve questão** identificada nas duas provas catalogadas; a ausência não permite inferir baixa incidência.

## 9. Síntese

CTI = inteligência acionável sobre ameaças (estratégica, operacional, tática); IoC × TTP; Kill Chain (7 fases), ATT&CK, STIX/TAXII; ciclo de inteligência; *threat hunting* = busca proativa por hipótese, que realimenta a detecção.

## 10. Pontos para a futura produção de questões (registro)

Níveis de CTI; IoC×TTP; fases da kill chain; hunting×monitoramento; uso da inteligência.

## 11. Referências

- Wikipedia, "Cyber threat intelligence", "Cyber kill chain" e "Threat hunting" — **verificadas em 2026-10-31** (parte da primeira por resumo automático).
- Diamond Model, STIX/TAXII, TLP, ciclo de inteligência, pirâmide da dor — **de memória, não verificados**.
- Edital Transpetro nº 04/2026.4, Anexo IV, item 9.12.
