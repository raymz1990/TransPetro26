---
modulo: 04-governanca-ti
arquivo: 01-fundamentos-ti
itens_edital:
  - "4 Gestão e governança em TI:"
  - "4.1 Conceitos, segmentos e mercado de tecnologia da informação"
ids_matriz: ["E5-034", "E5-035"]
escopo: "A — conteúdo expresso no edital. O item 4 é um título sem subitem sobre governança; governança corporativa e de TI (COBIT, ISO/IEC 38500) são desenvolvidas como contexto do título (B)."
tipo_conteudo: "teoria"
status: "VALIDADO"
ultima_atualizacao: "2026-10-31"
---

# Fundamentos de TI: Conceitos, Segmentos, Mercado e Governança

**Módulo:** M04 — Gestão e governança em TI
**Textos oficiais (Anexo IV):** 4 "Gestão e governança em TI:" (título); 4.1 "Conceitos, segmentos e mercado de tecnologia da informação".
**Escopo:** A para 4.1. Para o **título do item 4**, o edital não lista subitem de governança; a seção 5 (governança corporativa e de TI, COBIT, ISO/IEC 38500) é **fundamentação complementar (B)** necessária para compreender o título.
**Status:** `VALIDADO` (aprovado pelo usuário em 2026-10-31, com ressalvas: interpretação dos itens 4.3 e 4.4 a confirmar; EC 115/2022, art. 65 da LGPD e vários referenciais de memória não verificados — ver `docs/qualidade/relatorio-producao-modulo-04.md`).

**Objetivos de aprendizagem.** (1) Definir TI, sistemas de informação e TIC; (2) descrever os segmentos do mercado de TI e os principais modelos de negócio; (3) explicar as características econômicas do setor; (4) discutir o papel da TI nas organizações; (5) diferenciar governança corporativa, governança de TI e gestão de TI.

---

## 1. Introdução

A **tecnologia da informação (TI)** está presente em quase toda organização, como suporte às operações e, cada vez mais, como parte do próprio produto e da estratégia. Entender **o que é TI, como o mercado se organiza e como a TI é governada e gerida** é a base do Módulo 4. O item 4.1 trata de conceitos, segmentos e mercado; os itens 4.2 a 4.4 abordam inovação, tecnologia e ciência; o 4.5, a gestão de serviços; o 4.6, a LGPD.

## 2. Conceitos fundamentais (item 4.1)

| Conceito | Definição |
|---|---|
| **Tecnologia da informação (TI)** | Conjunto de recursos (hardware, software, redes, dados) e práticas usados para **coletar, armazenar, processar, transmitir e apresentar informações** |
| **Tecnologias da informação e comunicação (TIC)** | TI acrescida das tecnologias de **comunicação** (telecomunicações, internet, mídias); enfatiza a convergência |
| **Sistema de informação (SI)** | Conjunto **organizado** de pessoas, processos, dados e tecnologia que apoia operações, gestão e decisão. A TI é **componente** do SI |
| **Infraestrutura de TI** | Base compartilhada (servidores, redes, armazenamento, nuvem, sistemas operacionais, segurança) sobre a qual rodam as aplicações |
| **Aplicações** | Software que apoia processos de negócio (ERP, CRM, BI, sistemas de manutenção) |
| **Serviço de TI** | Meio de entregar valor a clientes facilitando resultados, sem que eles assumam custos e riscos específicos (item 4.5, arquivo `04`) |

**Componentes de um sistema de informação:** hardware, software, redes e telecomunicações, **dados**, **pessoas** e **processos**. A TI não se reduz a equipamentos: pessoas e processos são determinantes de sucesso.

**Evolução (visão geral):** computação centralizada (mainframes) → computação pessoal e cliente-servidor → internet e web → mobilidade → **nuvem**, dados e plataformas → inteligência artificial e automação (arquivo `02`). A cada fase muda a relação entre organizações e fornecedores.

## 3. Segmentos do mercado de TI

| Segmento | O que oferece | Exemplos de oferta (genéricos) |
|---|---|---|
| **Hardware** | Equipamentos: computadores, servidores, dispositivos móveis, armazenamento, redes, periféricos, semicondutores | Venda de servidores; dispositivos |
| **Software** | Programas e plataformas | Sistemas operacionais; pacotes de aplicativos; software sob medida; **software como serviço (SaaS)** |
| **Serviços de TI** | Consultoria, desenvolvimento, integração, implantação, **suporte, operação (outsourcing)**, treinamento | Fábricas de software; serviços gerenciados; *service desk* |
| **Telecomunicações/conectividade** | Redes, acesso à internet, dados móveis, data links | Operadoras e provedores |
| **Nuvem e infraestrutura como serviço** | Capacidade computacional sob demanda | **IaaS, PaaS, SaaS** (modelos de serviço) |
| **Dados e analytics** | Armazenamento, processamento e análise | Plataformas de dados e BI |
| **Segurança da informação** | Produtos e serviços de proteção | Antivírus, firewalls, SOC gerenciado |
| **Plataformas e internet** | Serviços digitais intermediados | Comércio eletrônico; redes sociais; *marketplaces* |

**Modelos de serviço em nuvem:**

| Modelo | O provedor gerencia | O cliente gerencia |
|---|---|---|
| **IaaS** (infraestrutura) | Virtualização, servidores, armazenamento, rede | Sistema operacional, *middleware*, aplicações, dados |
| **PaaS** (plataforma) | Infraestrutura + sistema operacional + ambiente de execução | Aplicações e dados |
| **SaaS** (software) | Toda a pilha | Uso, configuração, dados |

*Modelos de implantação:* nuvem **pública**, **privada**, **híbrida** e **comunitária**. A computação em nuvem é detalhada, como tecnologia, no arquivo `02`.

### 3.1 Modelos de negócio de TI

| Modelo | Característica |
|---|---|
| **Licença perpétua** | Pagamento único pelo direito de uso; manutenção à parte |
| **Assinatura (*subscription*)** | Pagamento recorrente por uso/período (típico de SaaS) |
| **Pagamento por uso** | Cobrança por consumo (nuvem) |
| ***Open source* (código aberto)** | Código disponível sob licença; receita em suporte, serviços e versões comerciais |
| ***Freemium*** | Versão gratuita básica e paga avançada |
| **Plataforma/*marketplace*** | Intermediação entre grupos (efeitos de rede) |
| **Serviços sob demanda ou projeto** | Horas, projetos, serviços gerenciados por nível de serviço |

## 4. Mercado de TI: características econômicas

| Característica | Explicação |
|---|---|
| **Custos fixos altos e custo marginal baixo** (software e conteúdo digital) | Desenvolver é caro; copiar/distribuir custa muito pouco; favorece **escala** |
| **Efeitos de rede** | O valor aumenta com o número de usuários; favorece **concentração** (plataformas) |
| **Padrões e compatibilidade** | Adoção de padrões abertos × proprietários; importância de **interoperabilidade** |
| ***Lock-in* (aprisionamento)** | Custo de migrar para outro fornecedor mantém o cliente |
| **Rápida obsolescência e inovação contínua** | Ciclos curtos de produto; investimento permanente em P&D |
| **Intensidade em conhecimento** | Valor concentrado em capital humano |
| **Globalização** | Cadeias globais, terceirização e *offshoring* |
| **Dependência de ecossistemas** | Fabricantes, integradores, provedores, parceiros |

**Agentes:** fabricantes de hardware e semicondutores; desenvolvedoras de software e plataformas; **integradores** e consultorias; provedores de nuvem e *data centers*; operadoras de telecomunicações; revendedores e canais; startups; usuários corporativos; governo (regulador, comprador e fomentador).

**Estratégias de obtenção de TI pelas organizações:**

| Opção | Descrição |
|---|---|
| **Desenvolvimento interno** | Equipe própria constrói; maior controle, maior custo e esforço |
| **Compra de pacote** | Software de prateleira, com customização |
| **Terceirização (*outsourcing*)** | Contratar fornecedor para executar serviços de TI |
| **Nuvem/SaaS** | Alugar capacidade ou aplicações |
| **Parcerias/co-desenvolvimento** | Compartilhar desenvolvimento e riscos |

*Fazer ou comprar* (*make or buy*) considera custo total, competência, risco, estratégia e prazo. **Custo total de propriedade (TCO)** inclui aquisição, implantação, operação, suporte, treinamento e descarte; despesas de **capital (CAPEX)** × **operacionais (OPEX)**: a nuvem tende a deslocar investimento de CAPEX para OPEX.

*(Não se apresentam dados quantitativos do mercado brasileiro de TI: não foram consultadas fontes estatísticas nesta etapa.)*

## 5. A TI nas organizações e sua governança

### 5.1 Papel da TI

A TI pode atuar como **suporte** (reduz custos, automatiza), **habilitadora** (viabiliza novos processos) ou **estratégica** (parte do produto e do modelo de negócio). Uma classificação conhecida (McFarlan) distingue organizações conforme a importância **atual** e **futura** da TI: *suporte*, *fábrica*, *transição* e *estratégica*. O **alinhamento estratégico** busca que a TI atenda às necessidades e aos objetivos do negócio.

### 5.2 Gestão × governança

| Conceito | Pergunta | Foco |
|---|---|---|
| **Governança corporativa** | Como a organização é **dirigida, monitorada e incentivada**? | Propriedade, conselhos, direção, controles, *compliance*, relações com partes interessadas |
| **Governança de TI** | A TI **cria valor** com riscos aceitáveis e em conformidade? | Estruturas, processos e decisões para que o uso da TI sustente a estratégia |
| **Gestão de TI** | Como planejar, construir, operar e monitorar a TI no dia a dia? | Execução dentro da direção definida |

**Governança** define **quem decide, o que se decide e como se presta contas**; a **gestão** executa. A governança de TI é **parte** da governança corporativa. Em síntese: o conjunto de **processos, políticas e estratégias** que garante que a TI atenda aos objetivos e às necessidades da organização, em alinhamento com requisitos regulatórios e éticos, é a **governança** (corporativa/de TI), não a gestão de serviços, o marketing, o gerenciamento de projetos ou o planejamento de recursos humanos.

### 5.3 Referenciais de governança e gestão (complemento B)

| Referencial | O que é | Ideias centrais |
|---|---|---|
| **ISO/IEC 38500** | Norma de **governança corporativa de TI** | Modelo **Avaliar–Dirigir–Monitorar**; seis princípios: responsabilidade, estratégia, aquisição, desempenho, conformidade e comportamento humano |
| **COBIT** (ISACA) | Framework de **governança e gestão** de TI corporativa | **Objetivos de governança** (domínio EDM: Avaliar, Dirigir e Monitorar) e **objetivos de gestão** (domínios APO, BAI, DSS e MEA); a edição de 2019 define 40 objetivos |
| **ITIL** (ver arquivo `04`) | Práticas de **gerenciamento de serviços** | Valor, cadeia de valor, práticas |
| **ISO/IEC 20000-1** | Requisitos de um **sistema de gestão de serviços** | Certificável |
| **PMBOK** (Módulos 2 e 3) | Gerenciamento de projetos | Projetos e portfólio |
| **ISO/IEC 27001/27002** (Módulo 9) | Segurança da informação | Controles |

*Observação:* os referenciais **se complementam**; a escolha depende do objetivo (direção, serviços, projetos, segurança). Os detalhes de ITIL e ISO/IEC 20000 estão no arquivo `04`. **Confirmado em fontes secundárias (revisão de 2026-10-31):** COBIT 2019 com cinco domínios (EDM, APO, BAI, DSS, MEA) e **40 objetivos**, sendo o EDM o domínio de governança; ISO/IEC 38500 com **seis princípios** (responsabilidade, estratégia, aquisição, desempenho, conformidade e comportamento humano). A edição exata da ISO (as fontes divergem entre 2015 e 2016) e os textos oficiais **não foram verificados**.

## 6. Comparações conceituais

| Conceito A | Conceito B | Diferença principal |
|---|---|---|
| TI | SI | Recursos tecnológicos × conjunto de pessoas, processos, dados e tecnologia |
| TI | TIC | TI × TI com comunicações |
| IaaS | PaaS | Infraestrutura virtualizada × plataforma de desenvolvimento e execução |
| PaaS | SaaS | Cliente gerencia aplicações × cliente apenas usa o software |
| CAPEX | OPEX | Investimento de capital × despesa operacional recorrente |
| Licença perpétua | Assinatura | Pagamento único × recorrente |
| Governança | Gestão | Dirige, monitora e define responsabilidades × planeja e executa |
| Governança corporativa | Governança de TI | Organização como um todo × uso da TI dentro dela |
| *Make* | *Buy* | Desenvolver × adquirir ou contratar |

## 7. Aplicações e cenários

**Cenário (didático): decisão de contratação.** Uma empresa precisa de sistema de gestão de manutenção. Opções: **desenvolver** (controle, custo e prazo altos), **comprar pacote** (rapidez, menos aderência), **SaaS** (OPEX, pouca customização, *lock-in*). A decisão pondera TCO, requisitos, risco e estratégia, e passa por governança (quem aprova, critérios, conformidade). *Limitação:* a dependência de um fornecedor pode ser difícil de reverter.

## 8. Atenção para a prova

*Inferência técnica e recomendação pedagógica; sem atribuir frequência à banca.*

- Diferenciar **TI, SI e TIC**; **IaaS, PaaS e SaaS**; **governança e gestão**.
- Em questões sobre "o conjunto de **processos, políticas e estratégias** para garantir que a TI atenda aos objetivos da organização, alinhando-se a requisitos regulatórios e éticos", a resposta é **governança** (corporativa/de TI).
- Evitar absolutos sobre o mercado ("sempre", "somente").
- *Evidência histórica (amostra de duas provas):* a Prova 6 de 2023 (Q59) perguntou o nome do conjunto de processos, políticas e estratégias que garante o alinhamento da TI à organização e a requisitos regulatórios e éticos (resposta: governança corporativa). A Prova 15 de 2018 trouxe a **computação em nuvem** (SaaS, Q56). O item 4.1 (segmentos e mercado) não teve questão específica; duas provas não permitem inferir frequência.

## 9. Síntese

- TI (recursos), SI (pessoas+processos+dados+TI), TIC (com comunicações).
- Segmentos: hardware, software, serviços, telecomunicações, nuvem, dados, segurança, plataformas.
- Nuvem: IaaS, PaaS, SaaS; pública, privada, híbrida.
- Mercado: custos fixos altos/marginais baixos, efeitos de rede, *lock-in*, padrões, obsolescência.
- Obtenção: interno, pacote, terceirização, nuvem; TCO; CAPEX×OPEX.
- Governança (direção) × gestão (execução); referenciais: ISO/IEC 38500, COBIT, ITIL, ISO/IEC 20000.

## 10. Pontos para a futura produção de questões (registro)

Conceitos: TI/SI/TIC; segmentos; IaaS/PaaS/SaaS; modelos de negócio; governança×gestão. Distinções: CAPEX×OPEX; make×buy; governança corporativa×de TI. Interpretação: escolher o modelo de nuvem ou de obtenção para um cenário; identificar o conceito de governança.

## 11. Referências

- Fontes de apoio citadas por nome, **não verificadas online nesta etapa**: ISO/IEC 38500 (governança corporativa de TI); ISACA, *COBIT*; INSTITUTO BRASILEIRO DE GOVERNANÇA CORPORATIVA (IBGC), *Código das Melhores Práticas de Governança Corporativa*; McFARLAN, F. W. (grade estratégica de TI); definições de IaaS/PaaS/SaaS (NIST SP 800-145, *The NIST Definition of Cloud Computing*).
- Edital Transpetro nº 04/2026.4, Anexo IV, itens 4 e 4.1.
