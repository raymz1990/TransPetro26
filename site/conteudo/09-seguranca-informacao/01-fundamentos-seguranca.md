---
modulo: 09-seguranca-informacao
arquivo: 01-fundamentos-seguranca
itens_edital:
  - "9 Segurança da Informação:"
ids_matriz: ["E5-081", "C5-003"]
escopo: "B — fundamentação complementar (C5-003), fora da contagem oficial; serve ao título do item 9 e aos subitens 9.1 a 9.21."
tipo_conteudo: "teoria"
status: "VALIDADO"
ultima_atualizacao: "2026-10-31"
---

# Fundamentos de Segurança da Informação

**Módulo:** M09 — Segurança da informação
**Classificação de escopo:** **B — fundamentação complementar** (C5-003). O título do item 9 do Anexo IV ("Segurança da Informação:") não tem texto próprio além dos subitens 9.1 a 9.21; este arquivo apresenta o vocabulário comum e **não** corresponde a subitem literal.
**Status:** `VALIDADO` (aprovado pelo usuário em 2026-10-31, com ressalvas: interpretação do item 9.1 e escolha das versões do NIST SP 800-61 e do MITRE ATT&CK a confirmar; fontes de memória listadas em `docs/qualidade/relatorio-producao-modulo-09.md`). A tríade CIA e a ISO/IEC 27001 foram **confirmadas** em fonte secundária; demais definições são de memória.

**Objetivos de aprendizagem.** (1) Definir segurança da informação e suas propriedades; (2) distinguir ameaça, vulnerabilidade, risco, impacto e controle; (3) classificar controles; (4) aplicar princípios de projeto seguro; (5) situar os 21 subitens em um mapa.

---

## 1. Conceitos

**Segurança da informação** é a proteção da informação contra acessos, usos, divulgações, alterações ou destruições não autorizados, preservando suas propriedades ao longo do ciclo de vida (criação, uso, armazenamento, transmissão, descarte), em qualquer meio.

### 1.1 Propriedades

| Propriedade | Significado | Violação (exemplo) |
|---|---|---|
| **Confidencialidade** | Acesso apenas a quem está autorizado | Vazamento de dados |
| **Integridade** | Informação exata, completa e não alterada indevidamente | Alteração de um valor em banco |
| **Disponibilidade** | Acesso quando necessário | Ataque de negação de serviço |
| **Autenticidade** | Origem e identidade comprovadas | Falsificação de remetente |
| **Não repúdio (irretratabilidade)** | Autor não pode negar a autoria | Assinatura digital |
| **Legalidade, privacidade, responsabilização (*accountability*)** | Conformidade e rastreabilidade | Registro de auditoria |

A tríade **CID/CIA** (confidencialidade, integridade, disponibilidade) foi confirmada em fonte secundária (ISO/IEC 27001, Wikipedia); o Decreto 10.222/2020 citava também autenticidade, mas **foi revogado** pelo Decreto 12.573/2025, conforme o Planalto.

### 1.2 Termos

| Termo | Definição |
|---|---|
| **Ativo** | Qualquer coisa de valor para a organização (informação, sistemas, pessoas, instalações) |
| **Ameaça** | Causa potencial de um incidente indesejado |
| **Vulnerabilidade** | Fragilidade explorável por ameaça |
| **Risco** | Efeito da incerteza sobre os objetivos; combinação de probabilidade e impacto |
| **Impacto** | Consequência de um evento |
| **Evento × incidente** | Ocorrência observável × evento que compromete a segurança |
| **Controle (contramedida)** | Medida que trata o risco |
| **Ataque** | Tentativa deliberada de explorar vulnerabilidade |
| **Exploit** | Código ou técnica que explora uma vulnerabilidade |
| **Superfície de ataque** | Conjunto de pontos de entrada possíveis |

Relação: ameaças exploram vulnerabilidades de ativos, gerando riscos que são tratados por controles. Gestão de riscos: arquivo `09`.

### 1.3 Classificação dos controles

| Critério | Tipos |
|---|---|
| **Natureza** | **Administrativos** (políticas, processos), **técnicos/lógicos** (criptografia, firewall), **físicos** (cercas, catracas) |
| **Função** | **Preventivos**, **detectivos**, **corretivos**, **dissuasivos**, **compensatórios**, **de recuperação** |

## 2. Princípios de projeto seguro (de memória)

**Defesa em profundidade** (camadas independentes); **menor privilégio**; **segregação de funções**; **necessidade de conhecer**; **falha segura** (*fail-safe*); **segurança por projeto e por padrão** (*security by design/by default*); **mediação completa**; **economia de mecanismo**; **projeto aberto** (segurança não depende do segredo do projeto); **confiança zero** (*zero trust*: nunca confiar, sempre verificar); **separação de ambientes**.

## 3. Pilares: pessoas, processos e tecnologia

Segurança não é só tecnologia: **pessoas** (conscientização; engenharia social), **processos** (políticas, gestão de mudanças) e **tecnologia** (controles técnicos). Normas: **ISO/IEC 27001** (requisitos de um SGSI — Sistema de Gestão de Segurança da Informação; confirmada: edições 2005, 2013 e 2022) e **ISO/IEC 27002** (controles; arquivo `11`).

## 4. Mapa do item 9

| Subitem | Tema | Arquivo |
|---|---|---|
| 9.1 | Segurança física e lógica | `02` |
| 9.2 | Operação de segurança (firewall, proxy, IDS/IPS, DLP, CASB, SIEM, antivírus, EDR, WAF, vulnerabilidades, monitoração, backup) | `14` |
| 9.3, 9.4 | *Malware*; ataques | `03` |
| 9.5 | Desenvolvimento seguro; SAST/DAST/IAST | `04` |
| 9.6 a 9.10 | VPN, MDM, SSO, MFA, IAM/RBAC/ABAC | `05` |
| 9.11 | Resposta a incidentes (NIST SP 800-61) | `06` |
| 9.12 | *Threat intel*, *threat hunting* | `07` |
| 9.13 a 9.15 | Testes de penetração, STRIDE, MITRE ATT&CK | `08` |
| 9.16 | Riscos (ISO 31000), continuidade (ISO 22301), Sarbanes-Oxley | `09` |
| 9.17, 9.18 | Políticas; classificação | `10` |
| 9.19 | ISO 27002; criptografia; certificação e assinatura digital | `11`, `12` |
| 9.20, 9.21 | Nuvem; IoT | `13` |

## 5. Comparações conceituais

| A | B | Diferença |
|---|---|---|
| Ameaça | Vulnerabilidade | Causa potencial × fragilidade |
| Risco | Incidente | Possibilidade × ocorrência |
| Evento | Incidente | Observável × compromete a segurança |
| Controle preventivo | Detectivo | Evita × identifica |
| Autenticidade | Integridade | Origem comprovada × conteúdo inalterado |
| Segurança da informação | Segurança cibernética | Todos os meios × meio digital/ciberespaço |

## 6. Atenção para a prova

*Inferência técnica e recomendação pedagógica; sem atribuir frequência à banca.*

- Identificar **qual propriedade** é violada em um cenário; distinguir ameaça, vulnerabilidade e risco.
- Itens específicos: ver os demais arquivos do módulo; este arquivo (complemento B) não corresponde a subitem literal.

## 7. Síntese

CID + autenticidade e não repúdio; ativo, ameaça, vulnerabilidade, risco, controle; controles administrativos, técnicos e físicos; preventivos, detectivos e corretivos; defesa em profundidade, menor privilégio, *zero trust*; SGSI (ISO 27001).

## 8. Referências

- Wikipedia, "ISO/IEC 27001" — **verificada em 2026-10-31** (finalidade; edições 2005, 2013 e 2022). Planalto, Decreto 10.222/2020 — **verificado** (revogado pelo Decreto 12.573/2025).
- Definições de ativo, ameaça, vulnerabilidade, risco e princípios de projeto — **de memória, não verificadas**.
- Edital Transpetro nº 04/2026.4, Anexo IV, item 9.
