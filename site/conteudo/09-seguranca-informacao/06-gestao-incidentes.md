---
modulo: 09-seguranca-informacao
arquivo: 06-gestao-incidentes
itens_edital:
  - "9.11 Conceitos gerais: Gerenciamento de resposta a incidente (NIST SP 800-61)"
ids_matriz: ["E5-092"]
escopo: "A — conteúdo expresso no edital. O edital cita NIST SP 800-61 sem indicar a revisão."
tipo_conteudo: "teoria"
status: "VALIDADO"
ultima_atualizacao: "2026-10-31"
---

# Gerenciamento de Resposta a Incidentes (NIST SP 800-61)

**Módulo:** M09 — Segurança da informação
**Texto oficial (Anexo IV):** 9.11 "Conceitos gerais: Gerenciamento de resposta a incidente (NIST SP 800-61)".
**Escopo:** A. Detecção e monitoração: `14`; inteligência: `07`; continuidade: `09`; aspectos legais de incidentes com dados pessoais: Módulo 4 (LGPD e ANPD).
**Status:** `VALIDADO` (aprovado pelo usuário em 2026-10-31, com ressalvas: interpretação do item 9.1 e escolha das versões do NIST SP 800-61 e do MITRE ATT&CK a confirmar; fontes de memória listadas em `docs/qualidade/relatorio-producao-modulo-09.md`). **Verificado** (NIST CSRC, 2026-10-31): a **Rev. 3** (abril de 2025) **substitui a Rev. 2** (agosto de 2012, retirada em 3/4/2025); a Rev. 3 é um *Community Profile* alinhado ao **CSF 2.0**. **Revisão (2026-10-31):** o PDF da **Rev. 2** foi lido (sumário e figuras do ciclo): as **quatro fases** (Preparation; Detection and Analysis; Containment, Eradication, and Recovery; Post-Incident Activity) estão **confirmadas**; a estrutura interna da **Rev. 3** continua **não lida**.

**Objetivos de aprendizagem.** (1) Definir evento e incidente; (2) descrever o ciclo de resposta da Rev. 2 e a mudança da Rev. 3; (3) estruturar equipe e plano; (4) executar contenção, erradicação e recuperação; (5) aprender com o incidente.

---

## 1. Conceitos

- **Evento:** ocorrência observável em sistema ou rede. **Incidente de segurança:** evento (ou série de eventos) que **viola ou ameaça violar** políticas ou práticas de segurança, ou compromete a confidencialidade, integridade ou disponibilidade (definição geral, de memória).
- **Resposta a incidentes (IR):** capacidade organizada de **preparar-se, detectar, analisar, conter, erradicar, recuperar** e **aprender** com incidentes.
- **CSIRT/CERT/CSIRT interno, SOC:** equipe de resposta; SOC monitora continuamente (`14`).
- **Indicadores de comprometimento (IoC)** e **táticas e técnicas** (`07`, `08`) apoiam a detecção.

## 2. NIST SP 800-61: duas revisões

| Revisão | Situação (verificada) | Modelo (de memória) |
|---|---|---|
| **Rev. 2** (agosto de 2012) | **Retirada em 3/4/2025**, substituída pela Rev. 3 | Ciclo de vida em **quatro fases** (seção 3) |
| **Rev. 3** (abril de 2025) | Vigente; subtítulo "A CSF 2.0 Community Profile" | Integra a resposta a incidentes ao **gerenciamento de risco de cibersegurança**, com as funções do CSF 2.0 (Govern, Identify, Protect, Detect, Respond, Recover); estrutura detalhada **não lida** |

O edital cita "NIST SP 800-61" sem a revisão. As questões catalogadas (2023) são anteriores à Rev. 3; **o ciclo de quatro fases da Rev. 2 permanece a referência clássica** nas provas, mas o candidato deve conhecer também a mudança de enfoque da Rev. 3. Use a revisão indicada no enunciado.

## 3. Ciclo de vida da resposta a incidentes — Rev. 2 (fases e atividades **verificadas** no PDF do NIST)

| Fase | Conteúdo |
|---|---|
| **1. Preparação** | Política e plano de IR; equipe e papéis; ferramentas (SIEM, forense, comunicações); treinamento e exercícios; **prevenção** (gestão de riscos, patches, configuração segura, conscientização) |
| **2. Detecção e análise** | Fontes (alertas de IDS/EDR/SIEM, logs, usuários, inteligência); **vetores de ataque** típicos; **sinais** (*precursors* e *indicators*); validação, **priorização** (impacto funcional, informacional, esforço de recuperação), documentação, notificação |
| **3. Contenção, erradicação e recuperação** | **Contenção** (isolar sistemas, bloquear contas e IPs; decisão conforme impacto e evidências); **erradicação** (remover *malware*, corrigir vulnerabilidades, redefinir credenciais); **recuperação** (restaurar sistemas, validar, monitorar reincidência) |
| **4. Atividade pós-incidente** | **Lições aprendidas**, relatório, métricas, melhoria do plano e dos controles; retenção de evidências |

O ciclo é **iterativo**: a análise do pós-incidente realimenta a preparação; contenção e análise podem se alternar. Outros modelos (por exemplo, o de seis etapas citado na Wikipedia: preparação, identificação, contenção, erradicação, recuperação e lições aprendidas) detalham as mesmas atividades; **o NIST agrupa em quatro fases**.

## 4. Atividades-chave

| Atividade | Pontos de atenção |
|---|---|
| **Plano de resposta** | Objetivos, escopo, papéis (gerente de incidente, técnico, comunicação, jurídico, RH), níveis de severidade, escalonamento |
| **Classificação e priorização** | Criticidade do ativo, tipo de dado, impacto no negócio, urgência |
| **Evidências e forense** | **Cadeia de custódia**, cópias forenses, ordem de volatilidade (memória antes de disco), tempo sincronizado, registro das ações |
| **Comunicação** | Interna (gestão, TI, jurídico), externa (clientes, autoridades, imprensa), conforme política e lei |
| **Notificação legal** | Incidentes com dados pessoais: LGPD art. 48 e regras da ANPD (Módulo 4); setores regulados e órgãos (por exemplo, CTIR Gov para órgãos federais; de memória) |
| **Cooperação** | Provedores, fornecedores, CSIRTs, compartilhamento de inteligência (`07`) |
| **Métricas** | Tempo de detecção (MTTD), de resposta e de recuperação (MTTR), número e severidade de incidentes |

### 4.1 Contenção, erradicação e recuperação: o que decidir

Antes de desligar um sistema, considerar **evidências** (memória volátil), **impacto no negócio**, **risco de propagação** e **necessidade de manter acesso do invasor sob observação** (decisão formal). Ao erradicar, tratar a **causa raiz** (vulnerabilidade explorada, credencial comprometida); ao recuperar, **restaurar de backup íntegro** e monitorar.

## 5. Tipos de incidentes (exemplos)

Código malicioso (*ransomware*), acesso não autorizado, negação de serviço, vazamento de dados, uso inadequado por *insiders*, comprometimento de contas, fraude, incidentes em nuvem e IoT (`13`).

## 6. Exemplo (didático)

O SIEM alerta uma sequência de falhas de login seguida de um acesso bem-sucedido de país incomum (detecção). A equipe valida e prioriza (alta severidade), isola o *endpoint* e bloqueia a conta (contenção), remove o acesso persistente e redefine credenciais (erradicação), restaura os serviços e monitora (recuperação) e registra lições aprendidas (pós-incidente).

## 7. Comparações conceituais

| A | B | Diferença |
|---|---|---|
| Evento | Incidente | Ocorrência observável × evento que compromete a segurança |
| Contenção | Erradicação | Limitar a propagação × remover a causa |
| Erradicação | Recuperação | Eliminar a ameaça × restabelecer a operação |
| Resposta a incidentes | Continuidade de negócios | Tratar o incidente de segurança × manter processos críticos (ISO 22301; `09`) |
| Rev. 2 | Rev. 3 | Ciclo de quatro fases × integração ao CSF 2.0 |
| CSIRT | SOC | Equipe de resposta × monitoramento contínuo |

## 8. Atenção para a prova

*Inferência técnica e recomendação pedagógica; sem atribuir frequência à banca.*

- Memorizar as **quatro fases da Rev. 2** e a **ordem**: preparação; detecção e análise; contenção, erradicação e recuperação; atividade pós-incidente.
- Saber que a **Rev. 3 (2025)** substituiu a Rev. 2; a prova pode seguir qualquer das duas — observar o enunciado.
- *Evidência histórica (amostra de duas provas):* a Prova 6 de 2023 trouxe **Q42** (ciclo de resposta a incidentes NIST SP 800-61; gabarito C, de terceiros, não validado). Duas provas não permitem inferir frequência.

## 9. Síntese

IR = preparar, detectar e analisar, conter/erradicar/recuperar, aprender. NIST SP 800-61 Rev. 2 (2012, retirada) → Rev. 3 (2025, perfil do CSF 2.0). Evidências e cadeia de custódia; comunicação e notificação legal; métricas.

## 10. Pontos para a futura produção de questões (registro)

Fases do ciclo; ordem das atividades; diferença entre contenção, erradicação e recuperação; Rev. 2 × Rev. 3; evidências.

## 11. Referências

- NIST CSRC, SP 800-61 Rev. 3 (abr./2025) e Rev. 2 (ago./2012, retirada em 3/4/2025) — **página de metadados verificada em 2026-10-31**; **corpo da Rev. 3 não lido; Rev. 2 lida (PDF)**.
- NIST SP 800-61 Rev. 2 (PDF; sumário e figuras) — **lido em 2026-10-31**. Estrutura da Rev. 3, CTIR Gov, MTTD/MTTR — **de memória, não verificados**. LGPD art. 48: Módulo 4.
- Edital Transpetro nº 04/2026.4, Anexo IV, item 9.11. Prova Transpetro 2023, Prova 6, Q42 (gabarito de terceiros, não validado).
