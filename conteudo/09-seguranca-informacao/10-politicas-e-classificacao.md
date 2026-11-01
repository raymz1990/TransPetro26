---
modulo: 09-seguranca-informacao
arquivo: 10-politicas-e-classificacao
itens_edital:
  - "9.17 Políticas de Segurança de Informação"
  - "9.18 Classificação de informações"
ids_matriz: ["E5-098", "E5-099"]
escopo: "A — conteúdo expresso no edital."
tipo_conteudo: "teoria"
status: "VALIDADO"
ultima_atualizacao: "2026-10-31"
---

# Políticas de Segurança da Informação e Classificação de Informações

**Módulo:** M09 — Segurança da informação
**Textos oficiais (Anexo IV):** 9.17 "Políticas de Segurança de Informação"; 9.18 "Classificação de informações".
**Escopo:** A. Controles da ISO 27002 que tratam de políticas e classificação: `11`. Governança de TI: Módulo 4.
**Status:** `VALIDADO` (aprovado pelo usuário em 2026-10-31, com ressalvas: interpretação do item 9.1 e escolha das versões do NIST SP 800-61 e do MITRE ATT&CK a confirmar; fontes de memória listadas em `docs/qualidade/relatorio-producao-modulo-09.md`). Conteúdo de memória (ISO/IEC 27001/27002, Lei de Acesso à Informação, práticas usuais); **não verificado online nesta etapa**.

**Objetivos de aprendizagem.** (1) Estruturar documentos de segurança (política, norma, procedimento, diretriz); (2) definir conteúdo e ciclo de vida da política; (3) classificar informações por criticidade; (4) aplicar rotulagem, tratamento e descarte; (5) distinguir classificação e criticidade de ativos.

---

## 1. Políticas de segurança da informação (9.17)

### 1.1 Conceito

**Política de segurança da informação (PSI)** é o documento, aprovado pela **alta direção**, que declara o **compromisso**, os **objetivos**, os **princípios** e as **responsabilidades** da organização com a segurança da informação, em linhas gerais, alinhado aos objetivos de negócio e aos requisitos legais. Segundo a ISO/IEC 27001/27002, a política é a base do SGSI e deve ser **comunicada**, **revisada em intervalos planejados** e **mantida atualizada** (de memória).

### 1.2 Hierarquia documental

| Nível | Conteúdo | Exemplo |
|---|---|---|
| **Política** (estratégico) | **O quê e por quê**; diretrizes gerais; aprovada pela direção | "A informação deve ser protegida de acordo com sua classificação" |
| **Normas / padrões** (tático) | **Requisitos obrigatórios** específicos | Norma de senhas; norma de uso de nuvem |
| **Procedimentos** (operacional) | **Como fazer**, passo a passo | Procedimento de concessão de acesso |
| **Diretrizes / guias** | **Recomendações** não obrigatórias | Boas práticas de trabalho remoto |
| **Registros / evidências** | Formulários e *logs* que comprovam a execução | Termo de ciência assinado |

### 1.3 Conteúdo típico da PSI

Objetivos e escopo; definições; princípios (CID); **papéis e responsabilidades** (direção, gestor de segurança/CISO, comitê, donos da informação, usuários, TI); **diretrizes** (controle de acesso, uso aceitável, classificação, mídias, nuvem, trabalho remoto, dispositivos móveis, criptografia, backup, gestão de incidentes, continuidade, conformidade); **sanções**; tratamento de **exceções**; periodicidade de revisão; referências legais e normativas.

### 1.4 Políticas específicas (temáticas)

Uso aceitável; controle de acesso; senhas; e-mail e internet; mesa e tela limpas; BYOD e dispositivos móveis (`05`); trabalho remoto; criptografia (`12`); backup (`14`); gestão de incidentes (`06`); desenvolvimento seguro (`04`); relacionamento com fornecedores; privacidade e proteção de dados (LGPD — Módulo 4).

### 1.5 Ciclo de vida e boas práticas

1. **Elaborar** com base em riscos, legislação e negócio.
2. **Aprovar** pela alta direção.
3. **Divulgar** e **treinar**; coletar **ciência** formal.
4. **Implementar** com controles e procedimentos.
5. **Monitorar** a conformidade (auditorias, indicadores).
6. **Revisar** periodicamente ou após mudanças relevantes (incidentes, tecnologia, legislação).

Fatores críticos: **apoio da direção**, linguagem clara, aplicabilidade, **consequências** definidas, **comunicação** contínua, exceções controladas. **Responsabilidade:** o usuário responde pelo uso; a direção responde pela política.

## 2. Classificação de informações (9.18)

### 2.1 Conceito e finalidade

**Classificar a informação** é atribuir-lhe um **nível** conforme sua **criticidade/sensibilidade** (impacto da perda de confidencialidade, integridade ou disponibilidade), para aplicar **controles proporcionais**. Evita proteção excessiva (custo) ou insuficiente (risco). Orienta rotulagem, acesso, armazenamento, transmissão, retenção e descarte.

### 2.2 Níveis (exemplos usuais; variam por organização)

| Nível (exemplo) | Descrição | Exemplos |
|---|---|---|
| **Pública** | Divulgação não causa dano | Material institucional, vagas |
| **Interna (uso interno)** | Para o público interno; divulgação externa causa dano limitado | Comunicados, procedimentos |
| **Confidencial** | Acesso restrito a grupos autorizados; dano relevante se divulgada | Contratos, dados de clientes, planos |
| **Restrita / secreta** | Acesso a pessoas nominais; dano grave | Estratégia corporativa, segredos comerciais, credenciais |

*Os nomes e o número de níveis variam; outros critérios consideram integridade e disponibilidade (por exemplo, "crítica").* Na **administração pública federal**, a **Lei de Acesso à Informação (Lei 12.527/2011)** prevê classificação em **reservada, secreta e ultrassecreta**, com prazos de restrição (de memória; **não verificado**), e a LGPD define **dados pessoais** e **sensíveis** (Módulo 4).

### 2.3 Responsabilidades e ciclo

| Papel | Atribuição |
|---|---|
| **Proprietário (dono) da informação** | **Classifica**, define quem acessa, revisa |
| **Custodiante (guardião)** | Aplica os controles (TI) |
| **Usuário** | Trata conforme a classificação |
| **Gestor de segurança** | Define o processo e apoia |

Etapas: **inventariar** ativos de informação → **identificar o dono** → **classificar** → **rotular** (marcação em documentos, metadados, cabeçalhos, nomes de arquivos) → **tratar** (acesso, armazenamento, transmissão, impressão, criptografia, compartilhamento) → **reclassificar** quando o valor mudar → **descartar** com segurança (destruição de mídia, `02`).

### 2.4 Tratamento por nível (exemplo)

| Controle | Pública | Interna | Confidencial | Restrita |
|---|---|---|---|---|
| Rotulagem | Opcional | Sim | Obrigatória | Obrigatória |
| Criptografia em trânsito | Não exigida | Recomendada | Obrigatória | Obrigatória + em repouso |
| Compartilhamento externo | Livre | Com autorização | Acordo de confidencialidade (NDA) | Em regra, proibido |
| Descarte | Comum | Triturar | Destruição segura | Destruição certificada |

### 2.5 Classificação × outros conceitos

| Conceito | Descrição |
|---|---|
| **Classificação da informação** | Nível de proteção da **informação** |
| **Criticidade do ativo** | Importância do **ativo** (sistema) para o negócio; define prioridades de continuidade e riscos (`09`) |
| **Categorização de dados pessoais** | Critério legal (pessoais, sensíveis) — Módulo 4 |
| **Prevenção de perda de dados (DLP)** | Ferramenta que usa a classificação para impedir vazamentos (`14`) |
| **Rotulagem automática** | Aplicação de rótulos por ferramentas (de memória) |

## 3. Exemplo (didático)

A empresa publica uma PSI aprovada pela diretoria, com normas de acesso e de uso de nuvem. Os dados de manutenção são classificados como "interna"; o plano de investimentos como "restrita". O arquivo "Plano 2027" recebe o rótulo "Restrita"; o DLP bloqueia seu envio para e-mail externo; ao final do ciclo, o dono revisa a classificação e o custodiante realiza o descarte seguro da mídia.

## 4. Comparações conceituais

| A | B | Diferença |
|---|---|---|
| Política | Norma | Diretriz geral da direção × requisito específico obrigatório |
| Norma | Procedimento | O que é exigido × como executar |
| Procedimento | Diretriz | Obrigatório e detalhado × recomendação |
| Dono da informação | Custodiante | Classifica e decide acesso × implementa controles |
| Classificação | Criticidade | Sensibilidade da informação × importância do ativo |
| Rotulagem | Classificação | Marcação visível × decisão de nível |

## 5. Atenção para a prova

*Inferência técnica e recomendação pedagógica; sem atribuir frequência à banca.*

- A classificação é feita pelo **dono da informação** e orienta controles **proporcionais**; níveis e nomes variam: atenção ao critério do enunciado.
- A PSI é aprovada pela **alta direção**, comunicada e revisada periodicamente.
- *Evidência histórica (amostra de duas provas):* a Prova 15 de 2018 trouxe **Q45** (classificação da informação; gabarito E, de terceiros, não validado). Políticas (9.17) não tiveram questão identificada nas duas provas. Duas provas não permitem inferir frequência.

## 6. Síntese

PSI: declaração da direção; hierarquia política–norma–procedimento–diretriz; papéis; ciclo (elaborar, aprovar, divulgar, implementar, monitorar, revisar). Classificação: níveis (pública, interna, confidencial, restrita), dono × custodiante, rotulagem, tratamento e descarte proporcionais.

## 7. Pontos para a futura produção de questões (registro)

Hierarquia documental; responsabilidade pela classificação; critérios de classificação; tratamento por nível; relação com DLP e LGPD.

## 8. Referências

- ISO/IEC 27001 (política) e 27002 (políticas, classificação e rotulagem) — **de memória**; Lei 12.527/2011 (LAI) — **de memória, não verificada**.
- Edital Transpetro nº 04/2026.4, Anexo IV, itens 9.17 e 9.18. Prova Transpetro 2018, Prova 15, Q45 (gabarito de terceiros, não validado).
