---
modulo: 09-seguranca-informacao
arquivo: 02-seguranca-fisica-e-logica
itens_edital:
  - "9.1 Segurança física e lógica"
ids_matriz: ["E5-082"]
escopo: "A — conteúdo expresso no edital. Item genérico: abrangência é interpretação (a confirmar)."
tipo_conteudo: "teoria"
status: "VALIDADO"
ultima_atualizacao: "2026-10-31"
---

# Segurança Física e Lógica

**Módulo:** M09 — Segurança da informação
**Texto oficial (Anexo IV):** 9.1 "Segurança física e lógica".
**Escopo:** A. O edital não detalha o item; interpretação adotada (**a confirmar**): controles físicos (áreas, equipamentos, ambiente) e lógicos (acesso, rede, sistemas, dados). Ferramentas como firewall, IDS e antivírus são detalhadas em `14`; identidade e acesso em `05`.
**Status:** `VALIDADO` (aprovado pelo usuário em 2026-10-31, com ressalvas: interpretação do item 9.1 e escolha das versões do NIST SP 800-61 e do MITRE ATT&CK a confirmar; fontes de memória listadas em `docs/qualidade/relatorio-producao-modulo-09.md`). Conteúdo de memória; **não verificado online nesta etapa**.

**Objetivos de aprendizagem.** (1) Distinguir segurança física e lógica; (2) conhecer controles físicos e ambientais; (3) conhecer controles lógicos por camada; (4) aplicar defesa em profundidade; (5) relacionar as duas dimensões.

---

## 1. Visão geral

| Dimensão | Protege contra | Exemplos de controles |
|---|---|---|
| **Física** | Acesso físico indevido, furto, dano, desastres ambientais | Perímetro, controle de acesso, CFTV, ambiente de datacenter |
| **Lógica** | Acesso e uso não autorizados por meio de sistemas e redes | Autenticação, autorização, criptografia, firewall, antivírus |

As duas se complementam: de nada vale criptografar um disco se o servidor pode ser levado; uma sala trancada não protege dados expostos na rede. Controles **administrativos** (políticas, treinamento — `10`) sustentam ambos.

## 2. Segurança física

### 2.1 Controles

| Controle | Descrição |
|---|---|
| **Perímetro e zonas** | Cercas, muros, portarias, áreas de acesso restrito; **defesa em camadas** físicas |
| **Controle de acesso físico** | Crachás, biometria, catracas, **mantraps** (eclusas), registro de visitantes, escoltas |
| **Vigilância** | CFTV, alarmes, vigilantes, iluminação |
| **Proteção de equipamentos** | Racks trancados, cabos protegidos, travas, descarte seguro de mídias, política de mesa limpa e tela limpa |
| **Proteção ambiental** | Energia (**no-break/UPS**, gerador, redundância), refrigeração, detecção e supressão de incêndio, controle de umidade, contenção de água |
| **Datacenter** | Classificação por níveis de disponibilidade (referências de mercado: Tier I a IV do Uptime Institute; de memória), redundâncias N+1 |
| **Mídias** | Controle, transporte e **sanitização** (sobrescrita, desmagnetização, destruição física) |
| **Trabalho remoto e móvel** | Proteção de dispositivos fora da organização (`05` — MDM) |

### 2.2 Ameaças físicas

Acesso não autorizado, roubo, vandalismo, incêndio, inundação, falta de energia, terremotos, sabotagem por *insider*, *tailgating* (entrar logo atrás de alguém autorizado), engenharia social presencial.

## 3. Segurança lógica

### 3.1 Controles por camada (visão geral)

| Camada | Controles |
|---|---|
| **Identidade e acesso** | Autenticação, MFA, autorização, menor privilégio, segregação de funções, trilhas de auditoria (`05`) |
| **Rede** | Segmentação (VLAN, DMZ), firewalls, IDS/IPS, VPN, controle de acesso à rede (NAC), proteção de Wi-Fi (`05`, `14`) |
| **Sistemas e aplicações** | Gestão de patches, *hardening* (configuração segura), desenvolvimento seguro (`04`), WAF |
| **Dados** | Criptografia em repouso e em trânsito (`12`), DLP, classificação (`10`), backup |
| **Endpoints** | Antivírus/EDR, criptografia de disco, MDM |
| **Monitoramento** | Registros (*logs*), SIEM, alertas (`14`) |
| **Recuperação** | Backup, plano de continuidade (`09`) |

### 3.2 Controle de acesso lógico

Modelos (visão geral; detalhes em `05`): **DAC** (discricionário: o dono decide), **MAC** (obrigatório: política central com rótulos), **RBAC** (por papéis), **ABAC** (por atributos). Princípios: **menor privilégio**, **necessidade de conhecer**, **segregação de funções**. Etapas do acesso: identificação, **autenticação**, **autorização**, **auditoria** (accounting).

### 3.3 Hardening e gestão de configuração

Remover serviços e contas desnecessários, alterar credenciais padrão, aplicar *baselines* (por exemplo, referências do CIS Benchmarks; de memória), manter inventário e gestão de mudanças, atualizar sistemas (gestão de patches e de vulnerabilidades — `14`).

### 3.4 Mapeamento à ISO/IEC 27002:2022 (item 9.1 ampliado — decisão de 2026-11-04)

O item 9.1 tem redação genérica. A interpretação adotada: controles **físicos, ambientais e lógicos**, mais o **mapeamento aos temas da ISO/IEC 27002:2022**, que organiza 93 controles em quatro temas (organizacionais, de pessoas, **físicos** e **tecnológicos**). *Numeração de memória; conferir na norma (não consultada).*

| Controles deste arquivo | Tema da ISO 27002:2022 | Exemplos de controles do tema (de memória) |
|---|---|---|
| Perímetro, acesso físico, vigilância, áreas seguras, mesa e tela limpas, proteção de equipamentos, mídias, utilidades, cabeamento, manutenção, descarte | **Físicos** (7.1 a 7.14) | Perímetros de segurança física; entrada física; monitoramento de segurança física; proteção contra ameaças físicas e ambientais; trabalho em áreas seguras; mesa limpa e tela limpa; localização e proteção de equipamentos; utilidades de suporte; segurança do cabeamento; manutenção; descarte ou reutilização segura |
| Controle de acesso lógico, autenticação, privilégios, antimalware, backup, registros, criptografia, hardening | **Tecnológicos** (8.1 a 8.34) | Direitos de acesso privilegiado; autenticação segura; proteção contra *malware*; cópias de segurança; registro de eventos (*logging*); uso de criptografia; gestão de configuração |
| Políticas, papéis, classificação, inventário | Organizacionais (5.x) | Ver `11-iso-27002.md` e `10-politicas-e-classificacao.md` |

Uso na prova: a ISO 27002:2022 **separa** controles físicos (tema 7) e tecnológicos (tema 8); a revisão de 2022 reduziu de 114 controles em 14 domínios (2013) para **93 em 4 temas**.

## 4. Defesa em profundidade

Camadas **independentes** (física, perímetro, rede, host, aplicação, dados, pessoas): a falha de uma não compromete as demais. Exemplo: data center com acesso físico restrito (física), segmentação de rede (rede), servidores atualizados e com EDR (host), dados criptografados (dados), MFA e treinamento (pessoas).

## 5. Comparações conceituais

| A | B | Diferença |
|---|---|---|
| Segurança física | Lógica | Proteção do ambiente e dos equipamentos × proteção de acesso e dados por software e configuração |
| Preventivo | Detectivo | Impede (trava) × identifica (CFTV, logs) |
| Autenticação | Autorização | Quem é × o que pode fazer |
| DAC | MAC | Dono decide × política central obrigatória |
| UPS | Gerador | Ponte imediata (curta) × fornecimento prolongado |
| Backup | Redundância | Cópia para recuperação × disponibilidade contínua |

## 6. Atenção para a prova

*Inferência técnica e recomendação pedagógica; sem atribuir frequência à banca.*

- Classificar um controle como físico, lógico ou administrativo.
- Reconhecer o princípio violado (menor privilégio, defesa em profundidade).
- O item 9.1 **não teve questão** identificada como primária nas duas provas catalogadas (2018 e 2023); duas provas não permitem inferir frequência.

## 7. Síntese

Segurança física (perímetro, acesso, ambiente, mídias) e lógica (identidade, rede, sistemas, dados, endpoints, monitoramento); defesa em profundidade; menor privilégio; controles complementam-se.

## 8. Pontos para a futura produção de questões (registro)

Classificação de controles; exemplos de ameaças físicas; princípios; escolha de controle para um cenário.

## 9. Referências

- ISO/IEC 27002 (controles físicos e tecnológicos), CIS Benchmarks, Uptime Institute — **de memória, não verificados**.
- Edital Transpetro nº 04/2026.4, Anexo IV, item 9.1.
