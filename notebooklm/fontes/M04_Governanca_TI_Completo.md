# Módulo M04 — Gestão e Governança em TI

## Identificação
- Concurso: Processo Seletivo Público TRANSPETRO 2026.4 (Edital nº 04/2026)
- Ênfase: 5 — Análise de Sistemas: Processos de Negócios
- Banca: Fundação Cesgranrio
- Módulo: M04 — Gestão e Governança em TI
- Gerado em: 2026-11-09, por `tools/build_notebooklm.py`, a partir de `conteudo/04-governanca-ti/` (fonte de verdade; não editar este arquivo)
- Situação do conteúdo nos arquivos de origem: VALIDADO (com ressalvas nos relatórios de produção em `docs/qualidade/`)

## Como usar este documento
É material de estudo do projeto, **não** é texto oficial do edital nem da banca. O escopo oficial é o Anexo IV do edital. Trechos marcados como complemento, aprofundamento ou estratégia **não** são exigência literal do edital. Referências indicadas como "não verificadas" ou "de memória" devem ser conferidas na fonte primária. Não afirme incidência de tema em prova sem evidência documental.

## Conteúdo

---

## Fundamentos de TI: Conceitos, Segmentos, Mercado e Governança

**Módulo:** M04 — Gestão e governança em TI
**Textos oficiais (Anexo IV):** 4 "Gestão e governança em TI:" (título); 4.1 "Conceitos, segmentos e mercado de tecnologia da informação".
**Escopo:** A para 4.1. Para o **título do item 4**, o edital não lista subitem de governança; a seção 5 (governança corporativa e de TI, COBIT, ISO/IEC 38500) é **fundamentação complementar (B)** necessária para compreender o título.
**Status:** `VALIDADO` (aprovado pelo usuário em 2026-10-31, com ressalvas: interpretação dos itens 4.3 e 4.4 a confirmar; EC 115/2022, art. 65 da LGPD e vários referenciais de memória não verificados — ver `docs/qualidade/relatorio-producao-modulo-04.md`).

**Objetivos de aprendizagem.** (1) Definir TI, sistemas de informação e TIC; (2) descrever os segmentos do mercado de TI e os principais modelos de negócio; (3) explicar as características econômicas do setor; (4) discutir o papel da TI nas organizações; (5) diferenciar governança corporativa, governança de TI e gestão de TI.

---

### 1. Introdução

A **tecnologia da informação (TI)** está presente em quase toda organização, como suporte às operações e, cada vez mais, como parte do próprio produto e da estratégia. Entender **o que é TI, como o mercado se organiza e como a TI é governada e gerida** é a base do Módulo 4. O item 4.1 trata de conceitos, segmentos e mercado; os itens 4.2 a 4.4 abordam inovação, tecnologia e ciência; o 4.5, a gestão de serviços; o 4.6, a LGPD.

### 2. Conceitos fundamentais (item 4.1)

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

### 3. Segmentos do mercado de TI

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

#### 3.1 Modelos de negócio de TI

| Modelo | Característica |
|---|---|
| **Licença perpétua** | Pagamento único pelo direito de uso; manutenção à parte |
| **Assinatura (*subscription*)** | Pagamento recorrente por uso/período (típico de SaaS) |
| **Pagamento por uso** | Cobrança por consumo (nuvem) |
| ***Open source* (código aberto)** | Código disponível sob licença; receita em suporte, serviços e versões comerciais |
| ***Freemium*** | Versão gratuita básica e paga avançada |
| **Plataforma/*marketplace*** | Intermediação entre grupos (efeitos de rede) |
| **Serviços sob demanda ou projeto** | Horas, projetos, serviços gerenciados por nível de serviço |

### 4. Mercado de TI: características econômicas

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

### 5. A TI nas organizações e sua governança

#### 5.1 Papel da TI

A TI pode atuar como **suporte** (reduz custos, automatiza), **habilitadora** (viabiliza novos processos) ou **estratégica** (parte do produto e do modelo de negócio). Uma classificação conhecida (McFarlan) distingue organizações conforme a importância **atual** e **futura** da TI: *suporte*, *fábrica*, *transição* e *estratégica*. O **alinhamento estratégico** busca que a TI atenda às necessidades e aos objetivos do negócio.

#### 5.2 Gestão × governança

| Conceito | Pergunta | Foco |
|---|---|---|
| **Governança corporativa** | Como a organização é **dirigida, monitorada e incentivada**? | Propriedade, conselhos, direção, controles, *compliance*, relações com partes interessadas |
| **Governança de TI** | A TI **cria valor** com riscos aceitáveis e em conformidade? | Estruturas, processos e decisões para que o uso da TI sustente a estratégia |
| **Gestão de TI** | Como planejar, construir, operar e monitorar a TI no dia a dia? | Execução dentro da direção definida |

**Governança** define **quem decide, o que se decide e como se presta contas**; a **gestão** executa. A governança de TI é **parte** da governança corporativa. Em síntese: o conjunto de **processos, políticas e estratégias** que garante que a TI atenda aos objetivos e às necessidades da organização, em alinhamento com requisitos regulatórios e éticos, é a **governança** (corporativa/de TI), não a gestão de serviços, o marketing, o gerenciamento de projetos ou o planejamento de recursos humanos.

#### 5.3 Referenciais de governança e gestão (complemento B)

| Referencial | O que é | Ideias centrais |
|---|---|---|
| **ISO/IEC 38500** | Norma de **governança corporativa de TI** | Modelo **Avaliar–Dirigir–Monitorar**; seis princípios: responsabilidade, estratégia, aquisição, desempenho, conformidade e comportamento humano |
| **COBIT** (ISACA) | Framework de **governança e gestão** de TI corporativa | **Objetivos de governança** (domínio EDM: Avaliar, Dirigir e Monitorar) e **objetivos de gestão** (domínios APO, BAI, DSS e MEA); a edição de 2019 define 40 objetivos |
| **ITIL** (ver arquivo `04`) | Práticas de **gerenciamento de serviços** | Valor, cadeia de valor, práticas |
| **ISO/IEC 20000-1** | Requisitos de um **sistema de gestão de serviços** | Certificável |
| **PMBOK** (Módulos 2 e 3) | Gerenciamento de projetos | Projetos e portfólio |
| **ISO/IEC 27001/27002** (Módulo 9) | Segurança da informação | Controles |

*Observação:* os referenciais **se complementam**; a escolha depende do objetivo (direção, serviços, projetos, segurança). Os detalhes de ITIL e ISO/IEC 20000 estão no arquivo `04`. **Confirmado em fontes secundárias (revisão de 2026-10-31):** COBIT 2019 com cinco domínios (EDM, APO, BAI, DSS, MEA) e **40 objetivos**, sendo o EDM o domínio de governança; ISO/IEC 38500 com **seis princípios** (responsabilidade, estratégia, aquisição, desempenho, conformidade e comportamento humano). A edição exata da ISO (as fontes divergem entre 2015 e 2016) e os textos oficiais **não foram verificados**.

### 6. Comparações conceituais

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

### 7. Aplicações e cenários

**Cenário (didático): decisão de contratação.** Uma empresa precisa de sistema de gestão de manutenção. Opções: **desenvolver** (controle, custo e prazo altos), **comprar pacote** (rapidez, menos aderência), **SaaS** (OPEX, pouca customização, *lock-in*). A decisão pondera TCO, requisitos, risco e estratégia, e passa por governança (quem aprova, critérios, conformidade). *Limitação:* a dependência de um fornecedor pode ser difícil de reverter.

### 8. Atenção para a prova

*Inferência técnica e recomendação pedagógica; sem atribuir frequência à banca.*

- Diferenciar **TI, SI e TIC**; **IaaS, PaaS e SaaS**; **governança e gestão**.
- Em questões sobre "o conjunto de **processos, políticas e estratégias** para garantir que a TI atenda aos objetivos da organização, alinhando-se a requisitos regulatórios e éticos", a resposta é **governança** (corporativa/de TI).
- Evitar absolutos sobre o mercado ("sempre", "somente").
- *Evidência histórica (amostra de duas provas):* a Prova 6 de 2023 (Q59) perguntou o nome do conjunto de processos, políticas e estratégias que garante o alinhamento da TI à organização e a requisitos regulatórios e éticos (resposta: governança corporativa). A Prova 15 de 2018 trouxe a **computação em nuvem** (SaaS, Q56). O item 4.1 (segmentos e mercado) não teve questão específica; duas provas não permitem inferir frequência.

### 9. Síntese

- TI (recursos), SI (pessoas+processos+dados+TI), TIC (com comunicações).
- Segmentos: hardware, software, serviços, telecomunicações, nuvem, dados, segurança, plataformas.
- Nuvem: IaaS, PaaS, SaaS; pública, privada, híbrida.
- Mercado: custos fixos altos/marginais baixos, efeitos de rede, *lock-in*, padrões, obsolescência.
- Obtenção: interno, pacote, terceirização, nuvem; TCO; CAPEX×OPEX.
- Governança (direção) × gestão (execução); referenciais: ISO/IEC 38500, COBIT, ITIL, ISO/IEC 20000.

### 10. Pontos para a futura produção de questões (registro)

Conceitos: TI/SI/TIC; segmentos; IaaS/PaaS/SaaS; modelos de negócio; governança×gestão. Distinções: CAPEX×OPEX; make×buy; governança corporativa×de TI. Interpretação: escolher o modelo de nuvem ou de obtenção para um cenário; identificar o conceito de governança.

### 11. Referências

- Fontes de apoio citadas por nome, **não verificadas online nesta etapa**: ISO/IEC 38500 (governança corporativa de TI); ISACA, *COBIT*; INSTITUTO BRASILEIRO DE GOVERNANÇA CORPORATIVA (IBGC), *Código das Melhores Práticas de Governança Corporativa*; McFARLAN, F. W. (grade estratégica de TI); definições de IaaS/PaaS/SaaS (NIST SP 800-145, *The NIST Definition of Cloud Computing*).
- Edital Transpetro nº 04/2026.4, Anexo IV, itens 4 e 4.1.


---

## Princípios de Economia da Inovação e Conceitos e Perspectivas da Tecnologia

**Módulo:** M04 — Gestão e governança em TI
**Textos oficiais (Anexo IV):** 4.2 "Princípios de economia da inovação"; 4.3 "Conceitos e perspectivas da tecnologia".
**Nota de interpretação:** o item 4.3 não indica quais tecnologias nem que "perspectivas". Cobrem-se (a) **conceitos** de tecnologia (técnica, ciência, tecnologia, difusão, ciclos) e (b) **tecnologias emergentes de TI e suas perspectivas** (econômicas, sociais, éticas, regulatórias, ambientais). A lista de tecnologias é **exemplificativa**: o edital não a restringe, e novas tecnologias podem surgir. A abrangência deve ser confirmada pelo usuário.
**Status:** `VALIDADO` (aprovado pelo usuário em 2026-10-31, com ressalvas: interpretação dos itens 4.3 e 4.4 a confirmar; EC 115/2022, art. 65 da LGPD e vários referenciais de memória não verificados — ver `docs/qualidade/relatorio-producao-modulo-04.md`).

**Objetivos de aprendizagem.** (1) Distinguir invenção, inovação e difusão; (2) explicar os princípios econômicos da inovação (apropriabilidade, externalidades, incerteza, *lock-in*, efeitos de rede); (3) classificar inovações; (4) definir custo de oportunidade e aplicá-lo a decisões de inovação; (5) descrever conceitos de tecnologia e as principais tecnologias emergentes de TI e suas implicações.

---

### 1. Introdução

A **economia da inovação** estuda por que e como surgem novos produtos, processos e organizações, como se difundem e que efeitos econômicos produzem. Para quem atua com TI, os princípios explicam por que o setor é dinâmico, concentrado e dependente de P&D e de propriedade intelectual. O item 4.3 complementa com **conceitos de tecnologia** e **perspectivas** (tendências e implicações). Os itens 4.1 (mercado, arquivo `01`) e 4.4 (ciência, P&D e indústria, arquivo `03`) são complementares.

### 2. Princípios de economia da inovação (item 4.2)

#### 2.1 Invenção, inovação e difusão

| Conceito | Definição | Exemplo (didático) |
|---|---|---|
| **Invenção** | Ideia, descoberta ou criação nova (protótipo, patente) | Um algoritmo novo |
| **Inovação** | **Introdução de novidade ou aperfeiçoamento no ambiente produtivo e social** que gera novos produtos, serviços ou processos, com ganhos reais de qualidade ou desempenho (definição da Lei de Inovação, conforme a Lei nº 13.243/2016, verificada em fonte oficial) | O algoritmo incorporado a um serviço usado por clientes |
| **Difusão** | Adoção progressiva da inovação pelo mercado | Ampliação do uso do serviço |

A trilogia **invenção–inovação–difusão** é associada a Schumpeter. **Uma invenção só vira inovação quando chega ao mercado ou ao uso e gera valor.**

#### 2.2 Schumpeter e a destruição criadora

Para Schumpeter, o **desenvolvimento econômico** é impulsionado por **inovações** introduzidas por empreendedores, que **destroem** estruturas antigas e **criam** novas (**destruição criadora**). Tipos clássicos de inovação segundo Schumpeter: novo **produto**, novo **método de produção**, novo **mercado**, nova **fonte de insumos** e nova **organização** do setor. A concorrência relevante é a por **inovação**, não só por preço.

#### 2.3 Classificações de inovação

| Critério | Tipos |
|---|---|
| **Objeto** (Manual de Oslo, 3ª ed.) | Inovação de **produto** (bens e serviços), de **processo**, de **marketing** e **organizacional**. A 4ª edição (2018) reagrupa em inovação de **produto** e de **processos de negócio** |
| **Grau de novidade** | **Incremental** (melhoria de algo existente), **radical** (ruptura tecnológica), nova para a **empresa**, para o **mercado** ou para o **mundo** |
| **Efeito sobre o mercado** | **Sustentadora** (melhora desempenho de produtos existentes) e **disruptiva** (Christensen: produto inicialmente inferior em desempenho, mais simples/barato, que conquista segmentos negligenciados e depois desloca líderes) |
| **Origem** | **Fechada** (interna) e **aberta** (Chesbrough: uso de ideias e caminhos internos e externos) |
| **Dirigida pelo** | **Tecnologia (*technology push*)** ou **demanda (*demand pull*)** |

*Modelos do processo de inovação:* **linear** (pesquisa básica → aplicada → desenvolvimento → produção → mercado) e **interativo** (*chain-linked*, de Kline e Rosenberg), com retroalimentação entre mercado, projeto, produção e pesquisa; o interativo é o mais aceito atualmente.

#### 2.4 Características econômicas do conhecimento e da inovação

| Princípio | Explicação | Consequência |
|---|---|---|
| **Natureza de bem público do conhecimento** | O conhecimento é, em grande parte, **não rival** (uso por um não impede o de outros) e de **exclusão difícil** | Risco de **imitação** sem custo; menor incentivo a inovar |
| **Apropriabilidade** | Capacidade de o inovador **capturar os retornos** da inovação | Propriedade intelectual, segredo, liderança de mercado |
| **Externalidades e *spillovers*** | Benefícios que **transbordam** para terceiros | **Subinvestimento privado**: justifica fomento público |
| **Incerteza e risco** | Retorno incerto; muitas tentativas falham | Capital de risco, portfólios, aprendizado |
| **Custos afundados e irreversibilidade** | P&D não recuperável | Barreiras à entrada |
| **Retornos crescentes de adoção** | Quanto mais usada, mais barata e melhor | Dominância de padrões |
| **Efeitos de rede** | O valor depende do número de usuários | Concentração em plataformas (arquivo `01`) |
| **Dependência da trajetória (*path dependence*) e *lock-in*** | Escolhas passadas condicionam o futuro; custo de troca | Padrões que persistem mesmo quando há alternativa melhor |
| **Cumulatividade e aprendizado** | A capacidade tecnológica se acumula (aprendizado, experiência) | Vantagem de quem já inovou; importância das **capacidades** internas |
| **Papel de instituições e política** | Leis, financiamento, universidades, regulação | **Sistemas de inovação** (arquivo `03`) |

#### 2.5 Propriedade intelectual (visão geral)

| Instrumento | Protege | Observação |
|---|---|---|
| **Patente** (invenção; modelo de utilidade) | Soluções técnicas **novas**, com **atividade inventiva** e **aplicação industrial** | Regulada, no Brasil, pela **Lei nº 9.279/1996** (ementa verificada: "regula direitos e obrigações relativos à propriedade industrial") |
| **Direito autoral** | Obras criativas (inclusive **programas de computador**, tratados como obras literárias) | Software é protegido pela **Lei nº 9.609/1998** (programa de computador, verificada em fonte oficial), com registro facultativo |
| **Marca e desenho industrial** | Sinais distintivos; forma ornamental | Lei nº 9.279/1996 |
| **Segredo industrial** | Informação confidencial com valor | Proteção por sigilo e contratos |
| **Licenciamento** | Autoriza uso por terceiros | Cobrança de royalties; licenças abertas |

*(Descrição geral; requisitos de patenteabilidade citados de modo resumido.)*

#### 2.6 Difusão e adoção de tecnologias

A difusão costuma seguir uma **curva em S**: adoção lenta no início, aceleração e saturação. A classificação de Rogers para **adotantes** distingue: **inovadores**, **adotantes iniciais**, **maioria inicial**, **maioria tardia** e **retardatários**. Moore chama de **abismo** a dificuldade de passar dos entusiastas para a maioria. Fatores de adoção: **vantagem relativa**, **compatibilidade**, **complexidade**, **experimentabilidade** e **observabilidade**, além de preço, padrões e efeitos de rede. *(Percentuais da distribuição de Rogers variam entre fontes e não são necessários para os conceitos.)*

#### 2.7 Custo de oportunidade e valoração da inovação

**Custo de oportunidade** é o **valor da melhor alternativa à qual se renuncia** ao tomar uma decisão. Em inovação: investir tempo, esforço, conhecimento e capital em um projeto de P&D significa **abrir mão** de aplicar esses recursos em outros usos; a avaliação de projetos de inovação deve **considerar esse custo** e o **risco**. Não se confunde com **custo contábil** (desembolso efetivo), **externalidade negativa** (custo imposto a terceiros), **elasticidade da demanda** (sensibilidade da quantidade ao preço) ou **lei da oferta e da demanda**.

Instrumentos de avaliação (visão geral): **valor presente líquido** (VPL), **taxa interna de retorno** (TIR), **retorno sobre o investimento**, **opções reais** (valor da flexibilidade), **portfólio de projetos** (equilíbrio entre risco e retorno). A **taxa mínima de atratividade** incorpora o custo de oportunidade do capital.

#### 2.8 Financiamento da inovação (visão geral)

Recursos próprios; **capital de risco** (*venture capital*) e **investidores-anjo**; **financiamento público** (agências de fomento, bancos de desenvolvimento, subvenção econômica, crédito, **incentivos fiscais**); **encomendas tecnológicas**; parcerias universidade–empresa; **inovação aberta** e compras públicas (detalhes no arquivo `03`).

### 3. Conceitos e perspectivas da tecnologia (item 4.3)

#### 3.1 Ciência, técnica e tecnologia

| Conceito | Definição |
|---|---|
| **Ciência** | Produção sistemática de **conhecimento** sobre a natureza e a sociedade |
| **Técnica** | **Saber fazer** prático, procedimento (pode existir sem base científica) |
| **Tecnologia** | **Aplicação sistemática de conhecimento** (científico e empírico) para resolver problemas e criar produtos, processos e serviços |
| **Engenharia** | Aplicação da ciência e da tecnologia ao projeto e construção de soluções |

**Tecnologias de propósito geral** (por exemplo, eletricidade, tecnologias de informação e comunicação, inteligência artificial) são aplicáveis a muitos setores e geram **inovações complementares** e ondas de transformação.

#### 3.2 Ciclo e maturidade das tecnologias

- **Ciclo de vida:** emergência, crescimento, maturidade, declínio e substituição.
- **Curva de maturidade (*Hype Cycle*, do Gartner):** gatilho de inovação → **pico de expectativas infladas** → **vale da desilusão** → **rampa de consolidação** → **platô de produtividade** (modelo conceitual de mercado, não científico).
- **Níveis de prontidão tecnológica (TRL)**, de 1 a 9: da observação de princípios básicos (TRL 1) à tecnologia comprovada em operação (TRL 9) — detalhados no arquivo `03`.
- **Dívida tecnológica e obsolescência:** atualizar, substituir ou modernizar.

#### 3.3 Tecnologias emergentes de TI

| Tecnologia | Ideia central | Aplicações (exemplos) | Perspectivas e cuidados |
|---|---|---|---|
| **Internet das coisas (IoT)** | **Rede de objetos físicos** com sensores, software e conectividade que **coletam e trocam dados**, permitindo análise e decisões baseadas em dados | Monitoramento de equipamentos, logística, cidades inteligentes; **IoT industrial (IIoT)** | **Segurança** de dispositivos (Módulo 9, item 9.21), interoperabilidade, volume de dados |
| **Inteligência artificial (IA)** | Sistemas que realizam tarefas associadas à inteligência humana: **aprendizado de máquina**, *deep learning*, processamento de linguagem natural, **IA generativa**, **sistemas especialistas** (regras de especialistas) | Manutenção preditiva, atendimento, análise de documentos, apoio à decisão | **Viés**, explicabilidade, privacidade, qualidade de dados, responsabilização; regulação em discussão |
| **Computação em nuvem** | Recursos computacionais sob demanda (IaaS, PaaS, SaaS; arquivo `01`) | Aplicações, *backup*, análise | Dependência de fornecedor, segurança e conformidade (Módulo 9, item 9.20), custos |
| **Big data e analytics** | Grandes volumes, velocidade e variedade de dados (Módulo 1, arquivo `09`) | BI, previsão | Qualidade e governança de dados (arquivo `10` do Módulo 1) |
| ***Edge computing*** | Processamento **próximo à fonte** dos dados | Baixa latência, IoT | Gestão distribuída |
| **Blockchain** | **Registro distribuído** e imutável por consenso | Rastreabilidade, contratos inteligentes | Escalabilidade, consumo de energia, governança |
| **5G e redes avançadas** | Maior velocidade, menor latência, maior densidade de dispositivos | IoT, automação | Infraestrutura e segurança |
| **Realidade virtual e aumentada; gêmeo digital** | Imersão; **réplica digital** de ativos e processos | Treinamento, simulação, operação | Custo, integração de dados |
| **Automação robótica de processos (RPA) e *low-code*** | Automatizar tarefas repetitivas; desenvolver com poucas linhas de código | Back-office | Governança de TI sombra, manutenção |
| **Computação quântica** | Computação com **qubits** (superposição e emaranhamento) | Otimização, simulação, criptoanálise | Impacto na **criptografia** (Módulo 9) |
| **Indústria 4.0 / transformação digital** | Integração de sistemas ciberfísicos, IoT, nuvem e dados | Operações digitalizadas | Mudança cultural e de competências |

*(Descrições de caráter geral e didático; as tecnologias citadas são exemplos. Não se afirma adoção ou uso em nenhuma organização específica.)*

#### 3.4 Perspectivas

| Dimensão | Questões |
|---|---|
| **Econômica** | Produtividade, novos modelos de negócio, concentração em plataformas, empregos e competências |
| **Social** | Inclusão e exclusão digital, educação, saúde, acesso |
| **Ética e jurídica** | Privacidade (**LGPD**, arquivo `05`), vieses algorítmicos, transparência, propriedade intelectual, responsabilidade |
| **Segurança** | Superfície de ataque ampliada (IoT, nuvem), resiliência |
| **Ambiental** | Consumo de energia de *data centers*, descarte de equipamentos (**TI verde**), contribuição para metas de sustentabilidade |
| **Organizacional** | Cultura, governança de TI e do dado, gestão da mudança |

A decisão de adotar uma tecnologia deve considerar **valor ao negócio, maturidade, riscos, custo total, competências e conformidade**, e não apenas novidade.

### 4. Comparações conceituais

| Conceito A | Conceito B | Diferença principal |
|---|---|---|
| Invenção | Inovação | Criação de algo novo × introdução com valor no mercado/uso |
| Inovação incremental | Radical | Melhoria × ruptura |
| Inovação sustentadora | Disruptiva | Melhora o desempenho para clientes atuais × atende segmentos negligenciados e desloca líderes |
| *Technology push* | *Demand pull* | Impulso da tecnologia × impulso da demanda |
| Modelo linear | Interativo | Etapas sequenciais × retroalimentação entre etapas |
| Custo de oportunidade | Custo contábil | Valor da alternativa renunciada × desembolso efetivo |
| Externalidade positiva | Externalidade negativa | Benefício a terceiros × custo imposto a terceiros |
| Ciência | Tecnologia | Conhecimento × aplicação do conhecimento |
| IoT | Big data | Objetos conectados que geram dados × análise de grandes volumes |
| Nuvem | *Edge* | Processamento centralizado × próximo da origem dos dados |

### 5. Aplicações e cenários

**Cenário (didático): decisão de investir em P&D.** Uma empresa avalia um projeto de manutenção preditiva por IoT e IA. Considera o **custo de oportunidade** (outros projetos de TI que deixaria de fazer), o **risco**, a **maturidade** da tecnologia e **externalidades** (aprendizado que beneficia outras áreas). Decide por um **piloto** (opção real) antes de ampliar. *Limitação:* benefícios intangíveis são difíceis de mensurar.

**Cenário (didático): adoção de tecnologia emergente.** A empresa observa o *Hype Cycle* e evita adotar uma tecnologia no pico de expectativas sem caso de negócio claro; planeja um piloto com critérios de sucesso e avalia riscos de segurança e de privacidade.

### 6. Atenção para a prova

*Inferência técnica e recomendação pedagógica; sem atribuir frequência à banca.*

- **Invenção ≠ inovação ≠ difusão.**
- **Custo de oportunidade** = valor da melhor alternativa abandonada; não confundir com economia circular, externalidade negativa, elasticidade da demanda ou oferta e demanda.
- **IoT** = integração de dispositivos físicos, sensores, software e conectividade que trocam dados e permitem análise e decisões baseadas em dados; não confundir com *blockchain*, IA, processamento paralelo ou realidade aumentada.
- Cuidado com absolutos sobre tecnologias emergentes ("a IA substitui todos os profissionais").
- *Evidência histórica (amostra de duas provas):* a Prova 6 de 2023 trouxe (Q60) a prática de atribuir valor monetário aos recursos usados na produção de inovações (tempo, esforço, conhecimento e riscos), cuja alternativa de gabarito foi **custo de oportunidade**, e (Q61) a integração de dispositivos, sensores e software em rede (**internet das coisas**). A Prova 15 de 2018 trouxe a **computação em nuvem** (Q56) e **sistemas especialistas** (Q58). Duas provas não permitem inferir frequência.

### 7. Síntese

- Invenção → inovação → difusão (curva em S); destruição criadora.
- Tipos: produto, processo, marketing, organizacional; incremental, radical; sustentadora, disruptiva; fechada, aberta.
- Economia: bem público, apropriabilidade, *spillovers*, incerteza, retornos crescentes, efeitos de rede, *lock-in*.
- Propriedade intelectual: patentes (Lei 9.279/1996), software (Lei 9.609/1998), marcas, segredo.
- Custo de oportunidade: melhor alternativa renunciada.
- Tecnologia: aplicação sistemática de conhecimento; *Hype Cycle*; TRL.
- Emergentes: IoT, IA, nuvem, big data, *edge*, blockchain, 5G, RV/RA, gêmeo digital, RPA, quântica; perspectivas: econômica, social, ética, segurança, ambiental.

### 8. Pontos para a futura produção de questões (registro)

Conceitos: inovação e seus tipos; princípios econômicos; custo de oportunidade; tecnologias emergentes. Distinções: invenção×inovação; incremental×radical; sustentadora×disruptiva; IoT×big data. Interpretação: identificar o conceito a partir da descrição; avaliar vantagens e riscos de uma tecnologia.

### 9. Referências

- BRASIL. Lei nº 13.243, de 11 de janeiro de 2016 (Marco Legal de Ciência, Tecnologia e Inovação), que altera a Lei nº 10.973/2004 (Lei de Inovação) — **verificada em planalto.gov.br em 2026-10-31** (definição de inovação). BRASIL. Lei nº 10.973, de 2 de dezembro de 2004 (texto compilado) — **verificada** em 2026-10-31: ementa ("dispõe sobre incentivos à inovação e à pesquisa científica e tecnológica no ambiente produtivo") e art. 2º, IV (inovação), V (ICT) e VI (NIT).
- BRASIL. Lei nº 9.279, de 14 de maio de 1996 (propriedade industrial) e Lei nº 9.609, de 19 de fevereiro de 1998 (programa de computador) — **ementas verificadas** em planalto.gov.br em 2026-10-31.
- SCHUMPETER, J. A.; CHRISTENSEN, C. M. (*The Innovator's Dilemma*); ROGERS, E. M. (*Diffusion of Innovations*); OCDE/EUROSTAT, *Manual de Oslo* (3ª e 4ª edições); KLINE, S. J.; ROSENBERG, N. (1986); CHESBROUGH, H. (*Open Innovation*); Gartner (*Hype Cycle*) — citados de memória, **não verificados online nesta etapa** (edições, anos e páginas pendentes).
- Edital Transpetro nº 04/2026.4, Anexo IV, itens 4.2 e 4.3.


---

## Ciência, Pesquisa, Desenvolvimento e Indústria

**Módulo:** M04 — Gestão e governança em TI
**Texto oficial (Anexo IV):** 4.4 "Ciência, pesquisa, desenvolvimento e indústria".
**Nota de interpretação:** o edital não detalha o item. Adotou-se a leitura de **conceitos e relações** entre ciência, pesquisa, desenvolvimento tecnológico e indústria (incluindo a de TI), com a **base institucional e legal brasileira** em visão geral. A abrangência (por exemplo, quanto detalhar leis e instituições) deve ser confirmada pelo usuário.
**Status:** `VALIDADO` (aprovado pelo usuário em 2026-10-31, com ressalvas: interpretação dos itens 4.3 e 4.4 a confirmar; EC 115/2022, art. 65 da LGPD e vários referenciais de memória não verificados — ver `docs/qualidade/relatorio-producao-modulo-04.md`).

**Objetivos de aprendizagem.** (1) Diferenciar ciência, pesquisa básica, pesquisa aplicada, desenvolvimento experimental e inovação; (2) explicar a escala de prontidão tecnológica (TRL); (3) descrever a hélice tríplice e os sistemas de inovação; (4) reconhecer instrumentos de cooperação e de fomento no Brasil; (5) relacionar P&D e indústria.

---

### 1. Introdução

A **ciência** gera conhecimento; a **pesquisa** é a atividade sistemática que o produz; o **desenvolvimento** transforma conhecimento em tecnologias, produtos e processos; a **indústria** os incorpora e os leva ao mercado. Entender essa cadeia e as **instituições que a viabilizam** (universidades, institutos, empresas, governo) explica a origem da tecnologia de que as organizações dependem (item 4.3, arquivo `02`) e a dinâmica da inovação (item 4.2).

### 2. Fundamentos

#### 2.1 Ciência e método científico

**Ciência** é a produção sistemática e verificável de conhecimento. O **método científico** envolve formular **problema e hipóteses**, coletar e analisar evidências, testar, concluir e submeter ao **escrutínio** de outros pesquisadores (**revisão por pares**, reprodutibilidade). Tipos de pesquisa quanto aos objetivos: **exploratória**, **descritiva** e **explicativa**; quanto à abordagem: **quantitativa** e **qualitativa**.

#### 2.2 Tipos de pesquisa e desenvolvimento (P&D)

O **Manual de Frascati** (OCDE) define **pesquisa e desenvolvimento experimental (P&D)** como trabalho **criativo e sistemático** para **aumentar o estoque de conhecimento** e **conceber novas aplicações**, em três tipos:

| Tipo | Finalidade | Exemplo (didático) |
|---|---|---|
| **Pesquisa básica (fundamental)** | Gerar conhecimento novo **sem aplicação prática imediata** | Estudo teórico de novos algoritmos |
| **Pesquisa aplicada** | Gerar conhecimento com **objetivo prático específico** | Pesquisar um método para detectar falhas em equipamentos |
| **Desenvolvimento experimental** | Usar conhecimento existente para **produzir protótipos, materiais, produtos ou processos novos ou melhorados** | Construir e testar um protótipo de sistema de monitoramento |

**P&D ≠ inovação:** a inovação exige **introdução no mercado ou no uso**; P&D é uma das atividades que podem levá-la. Fala-se em **P,D&I** (pesquisa, desenvolvimento e inovação) para abranger também as atividades de inovação.

#### 2.3 Prontidão tecnológica (TRL — *Technology Readiness Level*)

Escala de **1 a 9** para avaliar a maturidade de uma tecnologia, originada na NASA e muito usada em projetos de P&D:

| TRL | Estágio (resumo) |
|---|---|
| 1 | Princípios básicos observados |
| 2 | Conceito tecnológico formulado |
| 3 | Prova de conceito experimental |
| 4 | Validação em laboratório |
| 5 | Validação em ambiente relevante |
| 6 | Demonstração em ambiente relevante |
| 7 | Demonstração de protótipo em ambiente operacional |
| 8 | Sistema completo e qualificado |
| 9 | Sistema comprovado em operação real |

*(Descrição resumida; definições exatas variam entre organizações.)* Os níveis iniciais (1–3) aproximam-se da **pesquisa**; os intermediários (4–7), do **desenvolvimento**; os finais (8–9), da **implantação e produção**. O **“vale da morte”** é a lacuna entre a pesquisa e o mercado, em que faltam recursos e parceiros para levar a tecnologia à maturidade.

#### 2.4 Relações entre ciência, tecnologia e indústria

| Modelo | Ideia |
|---|---|
| **Linear** | Ciência básica → ciência aplicada → desenvolvimento → produção → mercado |
| **Interativo** | Retroalimentação entre mercado, projeto, produção e pesquisa (arquivo `02`) |
| **Hélice tríplice** (Etzkowitz e Leydesdorff) | Interação entre **universidade, indústria e governo**, com papéis que se sobrepõem na produção de inovação |
| **Quádrupla e quíntupla hélices** | Acrescentam a **sociedade civil** e o **ambiente** |
| **Sistema nacional/regional/setorial de inovação** | Rede de **instituições, empresas, políticas e relações** que determina a capacidade de inovar de um país, região ou setor |

#### 2.5 A indústria e a P&D

- **P&D industrial:** laboratórios e equipes internos, projetos em parceria com universidades e institutos, aquisição e licenciamento de tecnologia.
- **Intensidade tecnológica** (classificação da OCDE por esforço em P&D): setores de **alta**, **média-alta**, **média-baixa** e **baixa** intensidade; software, serviços de TI e equipamentos eletrônicos costumam figurar entre os de maior intensidade.
- **Transferência de tecnologia:** licenciamento, cooperação, **encomenda tecnológica**, *spin-offs* e *spin-outs*, contratação de pesquisadores.
- **Ambientes de inovação:** **incubadoras** (apoio a empresas nascentes), **aceleradoras**, **parques científicos e tecnológicos**, polos e **aglomerados (*clusters*)**.
- **Papel da indústria de TI:** produz equipamentos e plataformas; é também **usuária** de P&D (digitalização da indústria, Indústria 4.0; arquivo `02`).

#### 2.6 Indicadores de ciência, tecnologia e inovação (visão geral)

Gastos em P&D (absoluto e como proporção do PIB); número de pesquisadores; **publicações** e citações (bibliometria); **patentes**; resultados de pesquisas de inovação nas empresas. Indicadores medem **esforço** e **resultados**, mas não capturam todos os tipos de inovação.

### 3. Base institucional e legal no Brasil (visão geral)

*Esta seção descreve o panorama; não é lista exaustiva e as informações institucionais não foram verificadas em fontes oficiais nesta etapa, exceto onde indicado.*

| Tema | Descrição |
|---|---|
| **Marco legal** | A **Lei de Inovação** (Lei nº 10.973/2004) e o **Marco Legal de Ciência, Tecnologia e Inovação** (Lei nº 13.243/2016, que **altera** a anterior para estimular o desenvolvimento científico, a pesquisa, a capacitação científica e tecnológica e a inovação) — ambas as leis foram **verificadas** no *site* do Planalto (a Lei nº 10.973/2004, no texto compilado: ementa e art. 2º; a Lei nº 13.243/2016, na íntegra do trecho lido) |
| **ICT** | **Instituição Científica, Tecnológica e de Inovação**: órgão ou entidade da administração pública, ou entidade privada **sem fins lucrativos**, constituída no Brasil, cuja **missão institucional ou estatuto** inclui pesquisa básica ou aplicada ou o desenvolvimento de novos produtos, serviços ou processos (definição conforme a Lei nº 10.973/2004, com a redação dada pela Lei nº 13.243/2016, **verificada**) |
| **Núcleos de inovação tecnológica (NIT)** | **Estrutura constituída por uma ou mais ICTs, com ou sem personalidade jurídica própria, destinada a gerir a política institucional de inovação** (art. 2º, VI da Lei nº 10.973/2004, **verificado**); entre suas competências estão as relacionadas à propriedade intelectual e à transferência de tecnologia *(competências detalhadas não verificadas)* |
| **Instrumentos de apoio** (visão geral) | Subvenção econômica, financiamento e participação societária, encomenda tecnológica, compartilhamento de laboratórios, incentivos fiscais à P&D *(não verificados nesta etapa)* |
| **Agências de fomento e instituições** (exemplos) | Ministério da Ciência, Tecnologia e Inovação; CNPq; CAPES; Finep; BNDES; fundações estaduais de amparo à pesquisa; Embrapii *(existência e papéis conhecidos, não verificados nesta etapa)* |
| **Propriedade intelectual** | Patentes e marcas: Lei nº 9.279/1996; software: Lei nº 9.609/1998 (ementas **verificadas**) |
| **Investimento obrigatório em P&D em setores regulados** | Alguns setores regulados têm obrigações de aplicação de recursos em P&D (por exemplo, energia elétrica e petróleo e gás) *(informação geral; normas e percentuais não verificados e não exigidos para a compreensão do item)* |

### 4. Comparações conceituais

| Conceito A | Conceito B | Diferença principal |
|---|---|---|
| Pesquisa básica | Pesquisa aplicada | Sem aplicação imediata × com objetivo prático |
| Pesquisa aplicada | Desenvolvimento experimental | Gera conhecimento com objetivo prático × usa conhecimento para criar protótipos e processos |
| P&D | Inovação | Atividade de geração de conhecimento e tecnologia × introdução no mercado/uso com valor |
| Ciência | Tecnologia | Produção de conhecimento × aplicação do conhecimento |
| TRL baixo | TRL alto | Conceito e laboratório × operação real |
| Incubadora | Aceleradora | Apoio prolongado a empresas nascentes × programa intensivo e de curta duração |
| Hélice tríplice | Sistema de inovação | Interação universidade–empresa–governo × rede institucional mais ampla |
| Spin-off | Licenciamento | Nova empresa criada a partir de tecnologia × autorização de uso a terceiros |

### 5. Aplicações e cenários

**Cenário (didático): da pesquisa à operação.** Uma universidade desenvolve um algoritmo de detecção de anomalias (TRL 3–4). Uma empresa e um instituto de pesquisa firmam parceria para testá-lo em ambiente relevante (TRL 5–6) e um protótipo em operação (TRL 7). O projeto pode receber **fomento público** e a **propriedade intelectual** é negociada. *Limitação:* o “vale da morte” se manifesta quando faltam recursos entre o TRL 4 e o 7.

### 6. Atenção para a prova

*Inferência técnica e recomendação pedagógica; sem atribuir frequência à banca.*

- Pesquisa **básica × aplicada × desenvolvimento experimental**: associar à finalidade.
- **P&D não é sinônimo de inovação.**
- **Hélice tríplice** = universidade, indústria, governo.
- TRL: 1 (princípios) a 9 (operação comprovada).
- Cuidado com afirmações absolutas sobre o papel exclusivo de um agente (“somente o governo financia a inovação”).
- *Evidência histórica:* o item 4.4 **não** teve questão específica nas duas provas catalogadas (2018 e 2023); duas provas não permitem inferir frequência, e o edital de 2026 prevê o item.

### 7. Síntese

- Ciência (conhecimento) → pesquisa (básica, aplicada) → desenvolvimento experimental → inovação (mercado).
- TRL 1–9; vale da morte.
- Hélice tríplice (universidade, indústria, governo); sistemas de inovação.
- Indústria: P&D industrial, intensidade tecnológica, transferência de tecnologia, ambientes de inovação.
- Brasil: Lei de Inovação e Marco Legal; ICT; NIT; fomento; propriedade intelectual.

### 8. Pontos para a futura produção de questões (registro)

Conceitos: P&D; TRL; hélice tríplice; ICT. Distinções: básica×aplicada×desenvolvimento; P&D×inovação; incubadora×aceleradora. Interpretação: classificar uma atividade como pesquisa básica, aplicada ou desenvolvimento; situar uma tecnologia em um TRL.

### 9. Referências

- BRASIL. Lei nº 13.243, de 11 de janeiro de 2016 — **verificada** em planalto.gov.br em 2026-10-31 (ementa e definição de ICT). Lei nº 10.973/2004 (texto compilado) — **verificada**: ementa e art. 2º, IV (inovação), V (ICT) e VI (NIT); o art. 2º define também incubadora, parque tecnológico, polo tecnológico, bônus tecnológico e outros termos.
- BRASIL. Lei nº 9.279/1996 e Lei nº 9.609/1998 — ementas **verificadas** em planalto.gov.br.
- OCDE. *Manual de Frascati*; ETZKOWITZ, H.; LEYDESDORFF, L. (hélice tríplice); NASA (escala TRL) — citados de memória, **não verificados online** (edições e anos pendentes).
- Edital Transpetro nº 04/2026.4, Anexo IV, item 4.4.


---

## Gerenciamento de Serviços de TI (ITSM): Conceitos, Disciplinas, Técnicas e Ferramentas

**Módulo:** M04 — Gestão e governança em TI
**Texto oficial (Anexo IV):** 4.5 "Conceitos, disciplinas, técnicas e ferramentas de gerenciamento de serviços de TI".
**Referencial:** o edital **não indica** biblioteca nem norma. Usa-se o **ITIL** (versão **4**, 2019) como referência principal e o **ITIL v3** (2007/2011, ciclo de vida) por ser a base de provas anteriores; a **ISO/IEC 20000-1** e o **COBIT** são citados como contexto. A edição vigente do ITIL e das normas **não foi verificada online** nesta etapa.
**Status:** `VALIDADO` (aprovado pelo usuário em 2026-10-31, com ressalvas: interpretação dos itens 4.3 e 4.4 a confirmar; EC 115/2022, art. 65 da LGPD e vários referenciais de memória não verificados — ver `docs/qualidade/relatorio-producao-modulo-04.md`).

**Objetivos de aprendizagem.** (1) Definir serviço, valor e gerenciamento de serviços de TI; (2) descrever o sistema de valor de serviço do ITIL 4 e o ciclo de vida do ITIL v3; (3) explicar as principais disciplinas/práticas (incidentes, problemas, mudanças, requisições, nível de serviço, catálogo, configuração, disponibilidade e capacidade, continuidade); (4) aplicar técnicas de priorização, escalonamento e análise de causa; (5) reconhecer ferramentas e indicadores (KPIs, SLAs).

---

### 1. Introdução

As áreas de negócio dependem de **serviços** de TI (correio eletrônico, sistema de manutenção, acesso remoto). O **gerenciamento de serviços de TI** (*IT Service Management*, **ITSM**) é o conjunto de **capacidades organizacionais** para planejar, entregar, operar e melhorar serviços de TI de modo que **gerem valor ao negócio**, e não apenas mantenham tecnologia funcionando. Distingue-se da **governança de TI** (direção e controle, arquivo `01`) e do **gerenciamento de projetos** (Módulo 2): o ITSM cuida da **operação contínua** e da melhoria dos serviços.

### 2. Conceitos fundamentais

| Conceito | Definição |
|---|---|
| **Serviço** (ITIL 4) | Meio de **possibilitar a cocriação de valor**, facilitando os **resultados** que o cliente quer alcançar, **sem que o cliente gerencie custos e riscos específicos** |
| **Valor** | Benefícios, utilidade e importância percebidos |
| **Resultado (*outcome*)** | Efeito desejado pelo cliente (por exemplo, técnicos registram ordens em campo) |
| **Cliente**, **usuário**, **patrocinador** | Quem define requisitos e é responsável pelo resultado; quem usa o serviço; quem autoriza o orçamento |
| **Provedor de serviço** | Organização (interna ou externa) que entrega o serviço |
| **Utilidade e garantia** | Utilidade (*fitness for purpose*): o serviço faz o que é necessário; garantia (*fitness for use*): disponibilidade, capacidade, continuidade e segurança suficientes |
| **Incidente** | Interrupção não planejada ou degradação de um serviço |
| **Problema** | **Causa** (real ou potencial) de um ou mais incidentes |
| **Erro conhecido** | Problema com causa raiz identificada e **solução de contorno** (*workaround*) documentada |
| **Mudança** | Adição, modificação ou remoção de algo que possa afetar serviços |
| **Requisição de serviço** | Pedido formal de algo previsto (acesso, instalação, informação) |

#### 2.1 Acordos de nível de serviço

| Acordo | Entre quem | Finalidade |
|---|---|---|
| **SLA** (*Service Level Agreement*) | **Provedor** e **cliente** | Metas de serviço (disponibilidade, tempo de resposta e de resolução) |
| **OLA** (*Operational Level Agreement*) | Equipes **internas** do provedor | Apoia o cumprimento do SLA |
| **UC** (*Underpinning Contract*) | Provedor e **fornecedor externo** | Apoia o cumprimento do SLA com terceiros |

### 3. Referenciais de gerenciamento de serviços

#### 3.1 ITIL v3 (2007/2011): ciclo de vida do serviço

| Estágio | Foco | Exemplos de processos |
|---|---|---|
| **Estratégia de Serviço** | Definir o que oferecer e por quê | Gerenciamento da estratégia, do portfólio, financeiro, da demanda |
| **Desenho de Serviço** | Projetar serviços e processos | Catálogo de serviços, níveis de serviço, capacidade, disponibilidade, continuidade, segurança, fornecedores |
| **Transição de Serviço** | Levar mudanças à produção com controle | Mudanças, liberação e implantação, configuração e ativos, validação e testes, conhecimento |
| **Operação de Serviço** | Entregar e suportar no dia a dia | Eventos, incidentes, requisições, problemas, acesso; *service desk* |
| **Melhoria Contínua de Serviço** | Melhorar continuamente | Processo de melhoria em sete etapas, medição e relatórios |

#### 3.2 ITIL 4 (2019): sistema de valor de serviço (SVS)

O **SVS** descreve como os componentes da organização trabalham juntos para criar valor. Tem **cinco componentes**:

| Componente | Descrição |
|---|---|
| **Princípios orientadores** | Sete: **foque no valor**; **comece de onde você está**; **progrida iterativamente com feedback**; **colabore e promova visibilidade**; **pense e trabalhe de forma holística**; **mantenha simples e prático**; **otimize e automatize** |
| **Governança** | Direção e controle da organização, alinhados à estratégia |
| **Cadeia de valor de serviço** | Seis atividades: **planejar**, **melhorar**, **engajar**, **desenhar e fazer a transição**, **obter/construir**, **entregar e suportar** |
| **Práticas** | **34 práticas** de gerenciamento (gerais, de serviço e técnicas) |
| **Melhoria contínua** | Atividade em todos os níveis |

As **quatro dimensões** do gerenciamento de serviços: **organizações e pessoas**; **informação e tecnologia**; **parceiros e fornecedores**; **fluxos de valor e processos**.

*Na versão 4, "processos" dão lugar a "práticas", e o ciclo de vida do v3 é substituído pela cadeia de valor; os conceitos de incidente, problema e mudança permanecem.*

#### 3.3 Outros referenciais

| Referencial | Observação |
|---|---|
| **ISO/IEC 20000-1** | Norma de **requisitos** para um sistema de gestão de serviços; **certificável**; alinha-se ao ITIL |
| **COBIT** | Governança e gestão de TI; domínios APO, BAI, DSS e MEA (arquivo `01`) |
| **DevOps e SRE** (engenharia de confiabilidade de sites) | Integração entre desenvolvimento e operações; automação; metas de disponibilidade |
| **Lean e Agile** | Melhoria e entrega iterativa de serviços |

### 4. Disciplinas (práticas) principais

#### 4.1 Gerenciamento de incidentes

**Objetivo:** **restaurar a operação normal do serviço o mais rápido possível**, minimizando o impacto no negócio. Etapas típicas: **registro**, **classificação e categorização**, **priorização**, **diagnóstico** (suporte de 1º, 2º e 3º níveis), **escalonamento** (funcional e hierárquico), **resolução**, **recuperação** e **encerramento**. Prioridade = **impacto × urgência**.

| Impacto \ Urgência | Alta | Média | Baixa |
|---|---|---|---|
| **Alto** | P1 | P2 | P3 |
| **Médio** | P2 | P3 | P4 |
| **Baixo** | P3 | P4 | P5 |

*(Matriz de exemplo; cada organização define a sua.)* **Solução de contorno** restaura o serviço sem eliminar a causa.

#### 4.2 Gerenciamento de problemas

**Objetivo:** **identificar e tratar a causa raiz** de incidentes, reduzir sua recorrência e impacto. Atividades: **identificação**, **análise de causa raiz**, **registro de erro conhecido**, **solução definitiva** (via mudança), **gestão proativa**. Técnicas: **5 porquês**, **diagrama de Ishikawa**, **Pareto**, análise de tendência, árvore de falhas, análise cronológica (linha do tempo).

*Incidente × problema:* o incidente trata o **sintoma** e **restaura o serviço**; o problema investiga a **causa** para **evitar repetição**.

#### 4.3 Gerenciamento de mudanças (habilitação de mudanças, no ITIL 4)

**Objetivo:** maximizar mudanças **bem-sucedidas** controlando riscos. Tipos (ITIL 4): **padrão** (pré-aprovada, baixo risco, repetitiva), **normal** (avaliada e autorizada) e **emergencial** (urgente, para restaurar o serviço ou evitar impacto). Elementos: **requisição de mudança (RFC)**, **avaliação de risco e impacto**, **autoridade de mudança** (no v3, **CAB**: comitê consultivo de mudanças), **janelas de mudança**, plano de **retorno (*rollback*)**, revisão pós-implementação.

#### 4.4 Gerenciamento de requisições de serviço

Trata pedidos **padronizados e previsíveis** (acesso, instalação, informação), geralmente com **fluxos de aprovação** e **autoatendimento** (portal de serviços), distintos de incidentes (falhas) e mudanças.

#### 4.5 *Service desk* (central de serviços)

**Ponto único de contato** entre usuários e a TI: registra, classifica, resolve ou encaminha incidentes e requisições; comunica status. Modelos: **local**, **centralizado**, **virtual** e ***follow-the-sun***. Níveis de suporte: **N1** (primeiro atendimento), **N2** (especialistas), **N3** (especialistas avançados/fornecedores).

#### 4.6 Gerenciamento de nível de serviço e catálogo de serviços

- **Catálogo de serviços:** lista dos serviços oferecidos, com descrições, responsáveis, níveis e custos; divide-se em **visão de negócio** (para clientes) e **visão técnica** (componentes que sustentam os serviços).
- **Gerenciamento de nível de serviço:** negociar, acordar (SLA), monitorar e relatar o cumprimento, e revisar com o cliente.

#### 4.7 Gerenciamento de configuração e de ativos

- **Item de configuração (IC):** componente que precisa ser controlado (servidor, aplicação, documento, contrato).
- **Banco de dados de gerenciamento da configuração (CMDB):** repositório dos ICs, atributos e **relacionamentos**; apoia análise de impacto de mudanças e incidentes.
- **Gerenciamento de ativos de TI:** ciclo de vida (aquisição, uso, descarte), custo, licenças.

#### 4.8 Disponibilidade, capacidade e desempenho, continuidade

| Disciplina | Objetivo | Medidas |
|---|---|---|
| **Disponibilidade** | Garantir que o serviço esteja acessível quando necessário | **Disponibilidade (%) = (tempo acordado − tempo de indisponibilidade) ÷ tempo acordado × 100**; **MTBF** (tempo médio entre falhas) e **MTTR** (tempo médio de reparo): disponibilidade ≈ MTBF ÷ (MTBF + MTTR) |
| **Capacidade e desempenho** | Prover recursos suficientes a custo adequado | Utilização, tempo de resposta, tendências, dimensionamento |
| **Continuidade do serviço de TI** | Recuperar serviços após desastre | **RTO** (tempo máximo de recuperação) e **RPO** (perda máxima de dados aceitável); plano de recuperação (relação com o Módulo 9, item 9.16) |
| **Segurança da informação** | Proteger confidencialidade, integridade e disponibilidade | Políticas e controles (Módulo 9) |

#### 4.9 Gerenciamento de eventos e monitoramento; conhecimento; liberação e implantação

- **Evento:** ocorrência significativa na infraestrutura ou nos serviços; **monitoramento** gera alertas, que podem virar incidentes.
- **Gerenciamento do conhecimento:** capturar e reutilizar conhecimento (base de conhecimento, artigos, soluções).
- **Gerenciamento de liberação e implantação:** planejar e controlar a entrada de versões e componentes em produção (integração com **DevOps**, **CI/CD**).

#### 4.10 Melhoria contínua

Ciclo **PDCA** e modelos de melhoria (por exemplo, o processo de melhoria em sete etapas do ITIL v3): definir o que medir, coletar e analisar dados, apresentar e usar a informação, implementar melhorias.

### 5. Técnicas e ferramentas

#### 5.1 Técnicas

| Técnica | Uso |
|---|---|
| **Matriz de prioridade (impacto × urgência)** | Priorizar incidentes e requisições |
| **Escalonamento funcional e hierárquico** | Acionar especialistas ou gestores |
| **Análise de causa raiz** (5 porquês, Ishikawa, Pareto) | Problemas |
| **Análise de impacto** (CMDB) | Mudanças e incidentes |
| **Gerenciamento por indicadores (KPIs e metas de SLA)** | Controle de desempenho |
| ***Post-mortem* sem culpabilização** | Aprender com falhas graves |
| **Automação e orquestração** | Reduzir trabalho manual e erros |
| **Autoatendimento e *chatbots*** | Reduzir carga do *service desk* |
| **Gestão visual (Kanban)** | Fluxo de tickets (Módulo 2, arquivo `03`) |

#### 5.2 Ferramentas (categorias e exemplos)

| Categoria | Função | Exemplos citados apenas como ilustração |
|---|---|---|
| **Suítes de ITSM** | Tickets, catálogo, SLAs, mudanças, CMDB, portal de autoatendimento | Plataformas comerciais e livres de *service desk* (por exemplo, GLPI, Jira Service Management, ServiceNow) |
| **Monitoramento e observabilidade** | Coletar métricas, eventos e alertas | Zabbix, Nagios, Prometheus, Grafana |
| **Descoberta e CMDB** | Identificar e relacionar ICs | Ferramentas de descoberta de rede e de ativos |
| **Automação e integração** | Orquestrar fluxos, CI/CD | Ferramentas de automação de infraestrutura |
| **Gestão do conhecimento** | Base de conhecimento | *Wikis* e bases integradas ao *service desk* |
| **Análise e relatórios (BI)** | Indicadores e painéis | Painéis de SLA e de tendências |

*(Nomes de produtos citados como exemplos; não há recomendação nem verificação de funcionalidades.)*

### 6. Indicadores e medição

**Indicador-chave de desempenho (KPI)** mede o progresso em relação a um **objetivo de negócio**; diferencia-se de **métrica** (qualquer medida) por estar ligado a **metas** e a **fatores críticos de sucesso**. KPIs devem ser **selecionados com base nas necessidades do negócio** e ajudar a **medir o sucesso do serviço**; **não** se limitam a hardware, à disponibilidade, nem a organizações de pequeno porte, e **são influenciados** por ferramentas de monitoramento na definição e no rastreamento.

| Área | Exemplos de KPIs |
|---|---|
| Incidentes | Tempo médio de resolução (MTTR), tempo de resposta, **taxa de resolução no primeiro contato**, incidentes reabertos, volume por prioridade |
| Problemas | Número de erros conhecidos, incidentes recorrentes |
| Mudanças | **Taxa de mudanças bem-sucedidas**, mudanças emergenciais, incidentes causados por mudanças |
| Níveis de serviço | **Cumprimento de SLA (%)**, disponibilidade |
| Satisfação | Pesquisas de satisfação (CSAT), índice de recomendação (NPS) |
| Eficiência | Custo por atendimento, automação, produtividade |

### 7. Comparações conceituais

| Conceito A | Conceito B | Diferença principal |
|---|---|---|
| Incidente | Problema | Interrupção a restaurar × causa a eliminar |
| Incidente | Requisição de serviço | Falha × pedido previsto |
| Solução de contorno | Solução definitiva | Restaura o serviço × elimina a causa (via mudança) |
| Mudança padrão | Normal × emergencial | Pré-aprovada × avaliada × urgente |
| SLA | OLA | Com o cliente × entre equipes internas |
| SLA | UC | Com o cliente × com fornecedor externo |
| ITIL v3 | ITIL 4 | Ciclo de vida e processos × sistema de valor, cadeia de valor e práticas |
| ITIL | ISO/IEC 20000-1 | Boas práticas (não certificável por si) × norma de requisitos (certificável) |
| Governança de TI | Gerenciamento de serviços | Direção e controle × entrega e operação de serviços |
| KPI | Métrica | Ligado a objetivo e meta × qualquer medida |
| RTO | RPO | Tempo de recuperação × perda de dados aceitável |

### 8. Aplicações e cenários

**Cenário (didático): falha do sistema de ordens de serviço.** O *service desk* registra vários chamados idênticos: **incidente** de impacto alto e urgência alta (P1). O N2 aplica **solução de contorno** (reiniciar o serviço) e restaura. Como o incidente se repete, abre-se um **problema**: a análise de causa raiz aponta um limite de memória; a **mudança** de configuração é avaliada pela autoridade de mudança e aplicada em janela; o **erro conhecido** é encerrado. O **KPI** de tempo de resolução e de recorrência é acompanhado. *Limitação:* sem CMDB atualizado, a análise de impacto é incompleta.

### 9. Atenção para a prova

*Inferência técnica e recomendação pedagógica; sem atribuir frequência à banca.*

- **Incidente** restaura o serviço; **problema** busca a causa; **mudança** controla alterações.
- Identificar o **objetivo** de cada disciplina e a **diferença entre versões** do ITIL (ciclo de vida do v3 × SVS do 4).
- **KPIs**: alinhados ao negócio; alternativas que os limitam a hardware, à disponibilidade ou a organizações pequenas são incorretas por restringirem indevidamente.
- Fórmula de **disponibilidade** e conceitos de **MTBF/MTTR**, **RTO/RPO**.
- *Evidência histórica (amostra de duas provas):* a Prova 6 de 2023 (Q66) perguntou sobre **KPIs no gerenciamento de serviços de TI** (alternativa de gabarito: KPIs selecionados com base nas necessidades de negócio, que ajudam a medir o sucesso do serviço). A Prova 15 de 2018 **não** trouxe questão específica; o programa de 2018 citava ITIL v3 e COBIT 5.1, ao passo que o de 2026 não indica referencial. Duas provas não permitem inferir frequência.

### 10. Síntese

- ITSM: capacidades para entregar e melhorar serviços que gerem valor.
- ITIL v3: 5 estágios; ITIL 4: SVS (princípios, governança, cadeia de valor, práticas, melhoria), 7 princípios, 4 dimensões, 34 práticas.
- Disciplinas: incidentes, problemas, mudanças, requisições, *service desk*, nível de serviço, catálogo, configuração/CMDB, disponibilidade, capacidade, continuidade, conhecimento, monitoramento.
- Acordos: SLA, OLA, UC.
- Técnicas: matriz de prioridade, escalonamento, causa raiz, automação.
- Medição: KPIs (MTTR, taxa de sucesso de mudanças, SLA, CSAT); disponibilidade; RTO/RPO.

### 11. Pontos para a futura produção de questões (registro)

Conceitos: serviço, valor, SLA, incidente, problema, mudança, CMDB, KPI. Distinções: incidente×problema×requisição; SLA×OLA×UC; v3×4; ITIL×ISO 20000. Interpretação: classificar uma situação; escolher a disciplina; interpretar um indicador.

### 12. Referências

- ITIL: itens da **versão 4** (cinco componentes do SVS, sete princípios orientadores, 34 práticas, **quatro dimensões**) **confirmados em fontes secundárias** em 2026-10-31; **não confrontados com as publicações oficiais**. As atividades da cadeia de valor, as práticas individuais e o ITIL v3 vêm do conhecimento do autor e **não foram verificados**.
- ISO/IEC 20000-1 e COBIT — citados de memória; **edições e conteúdo não verificados**.
- Edital Transpetro nº 04/2026.4, Anexo IV, item 4.5.


---

## Lei Geral de Proteção de Dados Pessoais (LGPD) — Lei nº 13.709/2018

**Módulo:** M04 — Gestão e governança em TI
**Texto oficial (Anexo IV):** 4.6 "Lei Geral de Proteção de Dados Pessoais - LGPD (Lei nº 13.709, de 14 de agosto de 2018, e suas alterações)."
**Fonte principal:** texto **compilado** da Lei nº 13.709/2018 no portal do Planalto (https://www.planalto.gov.br/ccivil_03/_ato2015-2018/2018/lei/l13709compilado.htm), **conferido em 2026-10-31** na revisão do módulo: leitura do texto até, aproximadamente, o art. 55 (com as notas de alteração) e dos arts. 55-A e 55-C; o **art. 65** (vigência) e a parte final foram obtidos por resumo da página. A página informa que não substitui a publicação no Diário Oficial. Como a lei é alterada com frequência, **confira o texto compilado vigente antes de citar um artigo**.
**Status:** `VALIDADO` (aprovado pelo usuário em 2026-10-31, com ressalvas: interpretação dos itens 4.3 e 4.4 a confirmar; EC 115/2022, art. 65 da LGPD e vários referenciais de memória não verificados — ver `docs/qualidade/relatorio-producao-modulo-04.md`).

**Objetivos de aprendizagem.** (1) Explicar o objetivo, os fundamentos e o âmbito de aplicação da LGPD; (2) definir dado pessoal, dado sensível, anonimizado, titular, controlador, operador, encarregado e ANPD; (3) enumerar os dez princípios e as hipóteses legais de tratamento; (4) descrever os direitos do titular; (5) compreender as responsabilidades dos agentes, a segurança, o incidente e as sanções.

---

### 1. Introdução

A **LGPD** disciplina o **tratamento de dados pessoais**, inclusive nos meios digitais, por pessoa natural ou por pessoa jurídica de direito público ou privado, com o objetivo de **proteger os direitos fundamentais de liberdade e de privacidade** e o livre desenvolvimento da personalidade da pessoa natural. Sua ementa informa que **dispõe sobre a proteção de dados pessoais** e **altera a Lei nº 12.965/2014 (Marco Civil da Internet)** (ementa verificada). A proteção de dados também foi incluída entre os direitos e garantias fundamentais da Constituição por emenda constitucional (EC 115/2022; **não verificada** nesta etapa).

*Relações:* a LGPD depende de **segurança da informação** (Módulo 9, arquivos `01`, `10`, `11` e `13`), de **metadados e qualidade de dados** (Módulo 1, arquivo `10`), da **governança de TI** (arquivos `01` e `04` deste módulo) e do **mapeamento de fontes de dados** (Módulo 7, item 7.3).

### 2. Estrutura da lei

| Capítulo | Tema |
|---|---|
| I | Disposições preliminares (objeto, fundamentos, aplicação, exclusões, definições, princípios) |
| II | Tratamento de dados pessoais: Seção I (requisitos), II (dados sensíveis), III (crianças e adolescentes), IV (término) |
| III | Direitos do titular |
| IV | Tratamento de dados pessoais pelo poder público |
| V | Transferência internacional de dados |
| VI | Agentes de tratamento (controlador, operador, encarregado) e responsabilidade |
| VII | Segurança e boas práticas |
| VIII | Fiscalização e sanções administrativas |
| IX | Autoridade Nacional de Proteção de Dados (ANPD) e Conselho Nacional |
| X | Disposições finais e transitórias |

*(Capítulos I a III verificados; os demais, por resumo.)*

### 3. Fundamentos, aplicação e exclusões

#### 3.1 Fundamentos (art. 2º)

Respeito à **privacidade**; **autodeterminação informativa**; liberdade de expressão, de informação, de comunicação e de opinião; inviolabilidade da intimidade, da honra e da imagem; **desenvolvimento econômico e tecnológico e inovação**; livre iniciativa, livre concorrência e defesa do consumidor; direitos humanos, livre desenvolvimento da personalidade, dignidade e exercício da cidadania pelas pessoas naturais *(lista de memória, não verificada)*.

#### 3.2 Aplicação (art. 3º — verificado)

A lei se aplica a **qualquer operação de tratamento** realizada por **pessoa natural ou jurídica**, de direito **público ou privado**, **independentemente do meio, do país de sua sede ou do país onde estejam localizados os dados**, desde que:

1. a operação de tratamento seja realizada **no território nacional**; ou
2. a atividade de tratamento tenha por objetivo a **oferta ou o fornecimento de bens ou serviços** ou o tratamento de dados de **indivíduos localizados no território nacional**; ou
3. os dados pessoais objeto do tratamento tenham sido **coletados no território nacional** (consideram-se coletados no Brasil os dados de titular nele localizado no momento da coleta).

*Consequência:* a LGPD tem **alcance extraterritorial**; **não** se limita a empresas localizadas no Brasil.

#### 3.3 Exclusões (art. 4º — verificado)

A lei **não se aplica** ao tratamento de dados pessoais:

| Hipótese | Resumo |
|---|---|
| I | Realizado por **pessoa natural para fins exclusivamente particulares e não econômicos** |
| II | Realizado para fins **exclusivamente jornalísticos, artísticos ou acadêmicos** (para os acadêmicos, aplicam-se os arts. 7º e 11) |
| III | Realizado para fins **exclusivos de segurança pública, defesa nacional, segurança do Estado ou investigação e repressão de infrações penais** (regidos por legislação específica) |
| IV | Dados **provenientes de fora do território nacional** e que não sejam objeto de comunicação, uso compartilhado com agentes brasileiros ou transferência internacional a país diferente do de origem, desde que o país de origem proporcione grau de proteção adequado |

### 4. Definições (art. 5º — verificado)

O art. 5º define **19 termos**. Os principais:

| Termo | Definição (resumo) |
|---|---|
| **Dado pessoal** | Informação relacionada a **pessoa natural identificada ou identificável** |
| **Dado pessoal sensível** | Dado sobre **origem racial ou étnica, convicção religiosa, opinião política, filiação a sindicato ou a organização de caráter religioso, filosófico ou político, saúde ou vida sexual, dado genético ou biométrico**, quando **vinculado a uma pessoa natural** |
| **Dado anonimizado** | Dado relativo a titular que **não possa ser identificado**, considerando a utilização de meios técnicos razoáveis e disponíveis na ocasião do tratamento |
| **Banco de dados** | Conjunto estruturado de dados pessoais, em um ou vários locais |
| **Titular** | Pessoa natural a quem se referem os dados pessoais |
| **Controlador** | Pessoa natural ou jurídica, de direito público ou privado, a quem competem as **decisões referentes ao tratamento** |
| **Operador** | Pessoa natural ou jurídica, de direito público ou privado, que **realiza o tratamento em nome do controlador** |
| **Encarregado** | Pessoa ou entidade indicada pelo controlador e pelo operador para atuar como **canal de comunicação** entre o controlador, os titulares e a ANPD (redação conforme a página do Planalto, que registra alteração recente) |
| **Agentes de tratamento** | O controlador e o operador |
| **Tratamento** | Toda operação com dados pessoais (coleta, produção, recepção, classificação, utilização, acesso, reprodução, transmissão, distribuição, processamento, arquivamento, armazenamento, eliminação, avaliação, controle, modificação, comunicação, transferência, difusão ou extração) |
| **Anonimização** | Utilização de meios técnicos razoáveis pelos quais um dado **perde a possibilidade de associação**, direta ou indireta, a um indivíduo |
| **Consentimento** | **Manifestação livre, informada e inequívoca** pela qual o titular concorda com o tratamento de seus dados para uma **finalidade determinada** |
| **Bloqueio** | Suspensão temporária de qualquer operação de tratamento, com guarda do dado |
| **Eliminação** | Exclusão de dado ou de conjunto de dados armazenados em banco de dados |
| **Relatório de impacto à proteção de dados pessoais (RIPD)** | Documentação do controlador com a descrição dos processos de tratamento que podem gerar riscos às liberdades civis e aos direitos fundamentais, com medidas de mitigação |
| **Autoridade nacional** | Órgão da administração pública responsável por zelar, implementar e fiscalizar o cumprimento da lei (ANPD) |

Termos restantes: transferência internacional de dados, uso compartilhado de dados e órgão de pesquisa.

*Pessoa jurídica não é titular de dados pessoais* (a lei protege a **pessoa natural**); dados de pessoas jurídicas, por si, não são dados pessoais, mas podem conter dados de pessoas naturais (sócios, representantes).

*Dado anonimizado × pseudonimizado:* o **anonimizado** não é considerado dado pessoal, salvo se o processo puder ser **revertido** com esforços razoáveis *(art. 12; verificado)*; a **pseudonimização** mantém uma informação adicional, guardada separadamente pelo controlador, que permite a reidentificação, e **continua sendo dado pessoal** *(art. 13, §4º; verificado: a informação adicional fica sob guarda do controlador, em ambiente controlado e seguro)*.

### 5. Princípios (art. 6º — verificado: dez princípios)

O tratamento deve observar a **boa-fé** e os princípios:

| # | Princípio | Significado (resumo) |
|---|---|---|
| I | **Finalidade** | Propósitos **legítimos, específicos, explícitos e informados** ao titular, sem tratamento posterior incompatível |
| II | **Adequação** | Compatibilidade com as finalidades informadas, conforme o contexto |
| III | **Necessidade** | **Limitação ao mínimo necessário**: dados pertinentes, proporcionais e não excessivos |
| IV | **Livre acesso** | Consulta **facilitada e gratuita** sobre a forma e a duração do tratamento e a integralidade dos dados |
| V | **Qualidade dos dados** | **Exatidão, clareza, relevância e atualização** |
| VI | **Transparência** | Informações **claras, precisas e facilmente acessíveis**, observados os segredos comercial e industrial |
| VII | **Segurança** | Medidas técnicas e administrativas aptas a proteger os dados de acessos não autorizados e de situações acidentais ou ilícitas |
| VIII | **Prevenção** | Medidas para **prevenir danos** |
| IX | **Não discriminação** | Impossibilidade de tratamento para fins **discriminatórios ilícitos ou abusivos** |
| X | **Responsabilização e prestação de contas** | Demonstração da adoção de **medidas eficazes e capazes de comprovar** a observância e a eficácia |

*(O texto dos significados é resumo; conferir a redação do art. 6º.)*

### 6. Tratamento: hipóteses legais (bases legais)

#### 6.1 Dados pessoais — art. 7º (verificado: dez hipóteses)

O tratamento de dados pessoais somente pode ser realizado nas seguintes hipóteses:

| # | Hipótese |
|---|---|
| I | Mediante **consentimento** do titular |
| II | Para o cumprimento de **obrigação legal ou regulatória** pelo controlador |
| III | Pela **administração pública**, para tratamento e uso compartilhado de dados necessários à execução de **políticas públicas** |
| IV | Para a realização de **estudos por órgão de pesquisa**, garantida, sempre que possível, a anonimização |
| V | Quando necessário para a **execução de contrato** ou de procedimentos preliminares, a pedido do titular |
| VI | Para o **exercício regular de direitos** em processo judicial, administrativo ou arbitral |
| VII | Para a **proteção da vida** ou da incolumidade física do titular ou de terceiro |
| VIII | Para a **tutela da saúde**, exclusivamente por profissionais de saúde, serviços de saúde ou autoridade sanitária |
| IX | Quando necessário para atender aos **interesses legítimos** do controlador ou de terceiro, exceto se prevalecerem direitos e liberdades fundamentais do titular |
| X | Para a **proteção do crédito** |

**Atenção:** o **consentimento é uma das dez hipóteses, não a única**. Existe tratamento lícito sem consentimento (obrigação legal, execução de contrato, legítimo interesse etc.).

#### 6.2 Consentimento (arts. 7º e 8º)

Deve ser **livre, informado e inequívoco**, para **finalidades determinadas**; fornecido **por escrito ou por outro meio** que demonstre a manifestação de vontade (se escrito, em **cláusula destacada** das demais); o **ônus da prova** é do **controlador**; é **vedado** o tratamento com consentimento viciado; **autorizações genéricas são nulas**; pode ser **revogado a qualquer momento**, por manifestação expressa, de forma gratuita e facilitada, e os tratamentos realizados antes **permanecem válidos** (art. 8º e parágrafos, **verificado**). Se mudarem informações como finalidade, forma ou duração do tratamento, o titular deve ser avisado e pode revogar. A revogação **não** obriga, necessariamente, a eliminar dados que possam ser mantidos por **outra base legal** ou pelas hipóteses de conservação do art. 16 (**verificado**).

#### 6.3 Dados pessoais sensíveis (art. 11)

Só podem ser tratados (i) mediante **consentimento específico e destacado**, para finalidades específicas (inciso I), ou (ii) **sem consentimento**, nas hipóteses indispensáveis do inciso II: (a) **obrigação legal ou regulatória** pelo controlador; (b) uso compartilhado, pela administração pública, para **políticas públicas**; (c) **estudos por órgão de pesquisa**; (d) **exercício regular de direitos**; (e) **proteção da vida ou da incolumidade física**; (f) **tutela da saúde**, por profissionais de saúde ou autoridade sanitária; (g) **garantia da prevenção à fraude e à segurança do titular**, em processos de identificação e autenticação de cadastro em sistemas eletrônicos (art. 11, **verificado**). **O legítimo interesse (art. 7º, IX) e a proteção do crédito (art. 7º, X) não constam do art. 11.** Portanto, **o consentimento não é exigido apenas para dados sensíveis**: aplica-se também aos dados pessoais comuns quando a base legal for o consentimento.

#### 6.4 Crianças e adolescentes (art. 14)

O tratamento deve ser realizado no **melhor interesse** da criança ou do adolescente; para crianças, exige-se **consentimento específico e em destaque** dado por pelo menos um dos pais ou pelo responsável legal *(art. 14, §1º; verificado)*.

#### 6.5 Término do tratamento (arts. 15 e 16)

O tratamento termina quando a **finalidade é alcançada**, os dados deixam de ser necessários, expira o período, o titular revoga o consentimento ou a ANPD determina. Após o término, os dados são **eliminados**, salvo hipóteses de **conservação** (cumprimento de obrigação legal, estudo por órgão de pesquisa com anonimização sempre que possível, transferência a terceiro, uso exclusivo do controlador com dados anonimizados) *(arts. 15 e 16; verificados: quatro hipóteses de término e quatro finalidades de conservação)*.

### 7. Direitos do titular (art. 18 — verificado: nove direitos)

O titular pode obter do controlador, a qualquer momento e mediante requisição:

| # | Direito |
|---|---|
| I | **Confirmação** da existência de tratamento |
| II | **Acesso** aos dados |
| III | **Correção** de dados incompletos, inexatos ou desatualizados |
| IV | **Anonimização, bloqueio ou eliminação** de dados desnecessários, excessivos ou tratados em desconformidade com a lei |
| V | **Portabilidade** dos dados a outro fornecedor de serviço ou produto, mediante requisição expressa e observados os segredos comercial e industrial |
| VI | **Eliminação** dos dados pessoais tratados com o consentimento do titular, exceto nas hipóteses do art. 16 |
| VII | **Informação** das entidades públicas e privadas com as quais o controlador realizou **uso compartilhado** de dados |
| VIII | **Informação** sobre a possibilidade de **não fornecer consentimento** e sobre as consequências da negativa |
| IX | **Revogação do consentimento** |

*Prazos e procedimentos de atendimento dependem de regulamentação e do texto vigente: conferir.*

### 8. Agentes de tratamento e responsabilidade

| Agente | Papel |
|---|---|
| **Controlador** | Decide **finalidade e meios**; responde pelo cumprimento da lei; pode ser pessoa natural ou jurídica |
| **Operador** | Trata os dados **segundo as instruções do controlador**; **responde solidariamente** quando descumpre a legislação ou as instruções lícitas |
| **Encarregado** | Canal de comunicação com titulares e ANPD; orienta funcionários e contratados; sua **identidade e contatos** devem ser divulgados publicamente, preferencialmente no *site* do controlador (art. 41, §1º, **verificado**) |

- O **controlador ou operador** que, em razão do tratamento, causar **dano patrimonial, moral, individual ou coletivo** é obrigado a repará-lo (art. 42, **verificado**). O **operador** responde **solidariamente** quando descumpre a legislação ou as instruções lícitas do controlador, e passa a ser equiparado ao controlador (art. 42, §1º, I); admite-se a **inversão do ônus da prova** em processo civil (§2º) e o direito de regresso entre os responsáveis (§4º).
- A **ANPD** pode exigir o **relatório de impacto à proteção de dados pessoais** (art. 38, **verificado**).
- **Empresas públicas e sociedades de economia mista** que atuam em **regime de concorrência** têm, em regra, o mesmo tratamento das pessoas jurídicas de direito privado; quando **operacionalizam políticas públicas**, aplica-se o regime do poder público (art. 24, **verificado**).

### 9. Segurança, boas práticas e incidentes (Cap. VII)

- Os agentes devem adotar **medidas de segurança, técnicas e administrativas** aptas a proteger os dados de acessos não autorizados e de situações acidentais ou ilícitas de destruição, perda, alteração, comunicação ou difusão (art. 46) *(**verificado**)*.
- A segurança deve ser considerada **desde a concepção** do produto ou serviço até sua execução (*privacy by design*, art. 46, §2º, **verificado**).
- **Governança e boas práticas:** programa de governança em privacidade, políticas, treinamento, avaliação de riscos, plano de resposta a incidentes (arts. 50 e 51, **verificados**: a lei admite a formulação de regras de boas práticas e de governança e a ANPD estimula padrões técnicos).
- **Incidente de segurança** que possa acarretar **risco ou dano relevante** aos titulares: o controlador deve **comunicar à ANPD e ao titular** (art. 48, caput). A **lei não fixa número de dias**: determina **prazo razoável, definido pela ANPD** (§1º), e lista o conteúdo mínimo da comunicação (**verificado**). A **Resolução CD/ANPD nº 15, de 24 de abril de 2024**, segundo a página oficial da ANPD (consultada em 2026-10-31), fixa **três dias úteis** para comunicar à ANPD e ao titular (arts. 6º e 9º da Resolução), admitindo comunicação preliminar e informações complementares em até **vinte dias úteis**; a comunicação à ANPD **não dispensa** a informação aos titulares quando houver risco ou dano relevante.

### 10. Transferência internacional (Cap. V)

Permitida apenas nas **nove hipóteses** do art. 33 (**verificado**): (I) **países ou organismos com grau de proteção adequado**; (II) **garantias** oferecidas pelo controlador (cláusulas específicas, cláusulas-padrão, normas corporativas globais, selos, certificados e códigos de conduta); (III) cooperação jurídica internacional; (IV) proteção da vida; (V) autorização da ANPD; (VI) compromisso assumido em acordo de cooperação internacional; (VII) política pública; (VIII) **consentimento específico e em destaque**, com informação prévia do caráter internacional da operação; (IX) hipóteses do art. 7º, II, V e VI. A ANPD regulamenta o tema.

### 11. Fiscalização e sanções (Cap. VIII)

A **ANPD** fiscaliza e aplica sanções administrativas (art. 52, **verificado** no texto compilado):

| Sanção | Observação |
|---|---|
| **Advertência**, com prazo para medidas corretivas | |
| **Multa simples** de até **2% do faturamento** da pessoa jurídica (ou grupo/conglomerado) no Brasil no último exercício, **excluídos os tributos**, **limitada, no total, a R$ 50 milhões por infração** | Teto por infração |
| **Multa diária**, observado o limite total da multa simples | |
| **Publicização** da infração após apurada e confirmada | |
| **Bloqueio** dos dados pessoais a que se refere a infração | |
| **Eliminação** dos dados a que se refere a infração | |
| **Suspensão parcial do funcionamento do banco de dados** (até 6 meses, prorrogável) | |
| **Suspensão do exercício da atividade de tratamento** (até 6 meses, prorrogável) | |
| **Proibição parcial ou total** de atividades relacionadas a tratamento | |

*Os incisos VII a IX do art. 52 foram vetados; os incisos X a XII (suspensão parcial do banco de dados, suspensão da atividade de tratamento e proibição parcial ou total) foram acrescentados pela Lei nº 13.853/2019 (**verificado**). As sanções administrativas dos arts. 52 a 54 passaram a ser aplicáveis em **1º de agosto de 2021**, por alteração da Lei nº 14.010/2020 no art. 65 (por resumo da página; o art. 65 não foi lido na íntegra).* A **multa não é a única sanção** e **não** é calculada sobre o faturamento global, mas sobre o faturamento da pessoa jurídica no Brasil, com teto por infração.

### 12. A ANPD e as alterações da lei

A **Autoridade Nacional de Proteção de Dados (ANPD)** é o órgão responsável por zelar, implementar e fiscalizar o cumprimento da lei. Segundo o art. 55-A, na redação indicada no texto compilado (nota da Lei nº 15.352/2026), é **autarquia de natureza especial vinculada ao Ministério da Justiça e Segurança Pública**, com autonomia técnica, decisória, administrativa e financeira e sede no Distrito Federal (**verificado**). A criação da ANPD decorreu da Lei nº 13.853/2019 e a natureza de autarquia, da Lei nº 14.460/2022 (as notas do texto compilado registram a revogação de parágrafos do art. 55-A por esta última).

**Alterações registradas na página do Planalto** (itens marcados como **verificados** foram lidos no texto; os demais constam do resumo):

| Norma | Alterações (resumo) | Verificação |
|---|---|---|
| Medida Provisória nº 869/2018 e Lei nº 13.853/2019 | Alteram vários artigos, entre eles o objeto (art. 1º, parágrafo único), o art. 3º, II, o art. 5º, VIII (encarregado), o art. 7º, VIII e o art. 18; criam a estrutura da ANPD | Verificadas no texto |
| Lei nº 14.010/2020 | Dispõe, entre outros temas, sobre o prazo de aplicação das sanções | Por resumo |
| Medida Provisória nº 959/2020 e Lei nº 14.058/2020 | Alterações relacionadas ao período de vigência | Por resumo |
| Medida Provisória nº 1.124/2022 e Lei nº 14.460/2022 | Natureza jurídica da ANPD | Verificada nas notas do texto compilado (art. 55-A e art. 55-C, V) |
| Lei nº 15.352/2026 | Altera o art. 5º, VIII e XIX (encarregado e autoridade nacional), o título do Capítulo IX, o art. 55-A e o art. 55-C (incisos V-A, V-B e VI) | Verificada nas notas do texto compilado; conteúdo detalhado não analisado |
| Medida Provisória nº 1.317/2025 | Constava como alteração na página original do Planalto; **não aparece** no texto compilado lido | **Não confirmada** |

*Por isso, o edital menciona "e suas alterações": estudar a lei **no texto compilado atual**.*

### 13. Comparações conceituais

| Conceito A | Conceito B | Diferença principal |
|---|---|---|
| Dado pessoal | Dado pessoal sensível | Pessoa identificável × categorias de maior risco (origem racial, saúde, biometria etc.) |
| Dado pessoal | Dado anonimizado | Identifica ou torna identificável × não permite identificação (salvo reversão com esforços razoáveis) |
| Anonimização | Pseudonimização | Irreversível por meios razoáveis × reversível com informação adicional guardada à parte |
| Controlador | Operador | Decide as finalidades e meios × trata em nome do controlador |
| Controlador | Encarregado | Agente de tratamento × canal de comunicação |
| Consentimento | Legítimo interesse | Manifestação do titular × interesse do controlador/terceiro, com ponderação |
| Base legal | Princípio | Hipótese que autoriza o tratamento × diretriz que o tratamento deve observar |
| Bloqueio | Eliminação | Suspensão temporária com guarda × exclusão |
| ANPD | Encarregado | Autoridade fiscalizadora × representante do controlador |
| Multa simples | Multa diária | Teto de 2% do faturamento, até R$ 50 milhões × multa por dia de descumprimento, no mesmo limite |

### 14. Aplicações e cenários

**Cenário (didático): cadastro de visitantes e de fornecedores.** Uma empresa de grande porte cadastra visitantes (nome, documento, foto) e fornecedores (dados de representantes). Para cada fluxo, define **finalidade** (segurança patrimonial; execução de contrato), **base legal** (legítimo interesse ou execução de contrato, e não necessariamente consentimento), **minimiza** os dados (**necessidade**), define **prazo de retenção**, informa os titulares (**transparência**) e protege o acesso (**segurança**). Dados **biométricos** (foto para reconhecimento facial) são **sensíveis** e exigem fundamento próprio. *Limitação:* a escolha da base legal depende do contexto e deve ser documentada.

**Cenário (didático): incidente.** Uma planilha com dados de empregados é exposta por erro de compartilhamento. O controlador avalia **risco ou dano relevante**, aciona o plano de resposta a incidentes (Módulo 9, arquivo `06`), contém a exposição, **comunica à ANPD e aos titulares** nos termos da regulamentação e registra as medidas.

**Cenário (didático): mapeamento de dados.** O primeiro passo de conformidade é **mapear** quais dados pessoais existem, onde, para que fins, com quem são compartilhados e por quanto tempo (inventário de tratamentos), apoiando-se no mapeamento de fontes e nos metadados (Módulos 7 e 1).

### 15. Atenção para a prova

*Inferência técnica e recomendação pedagógica; sem atribuir frequência à banca.*

- **Âmbito:** aplica-se a tratamento por pessoa natural ou jurídica, pública ou privada, **no território nacional**, ou com objetivo de oferta de bens e serviços a indivíduos no Brasil, ou com dados **coletados** no Brasil — **há extraterritorialidade**. **Exclusões:** pessoa natural para fins **exclusivamente particulares e não econômicos**, jornalístico, artístico, acadêmico, segurança pública etc.
- **Consentimento:** é **uma** das dez bases do art. 7º; **não é exigido apenas para dados sensíveis**; pode ser **revogado**; a **revogação não implica**, necessariamente, a eliminação de todos os dados, se houver outra base legal (por exemplo, art. 16).
- **Dados sensíveis**: lista fechada de categorias; legítimo interesse **não** é base para sensíveis.
- Os **dez princípios** e os **nove direitos** do titular: reconhecer cada um pelo conceito.
- **Controlador × operador × encarregado**: papéis distintos.
- **Sanções**: multa de até **2%** do faturamento no Brasil, **limitada a R$ 50 milhões por infração**; há outras sanções além da multa.
- A LGPD protege **pessoas naturais**.
- *Evidência histórica (amostra de duas provas):* a Prova 6 de 2023 (Q57) pediu a **afirmação correta sobre a LGPD**; as alternativas incorretas tratavam do âmbito (como se aplicada apenas a empresas no Brasil e sem extraterritorialidade; como se abrangesse tratamento por pessoa natural para fins exclusivamente particulares e não econômicos), do consentimento (como exigido apenas para dados sensíveis) e da revogação (como se obrigasse a eliminar dados mesmo anonimizados e para pesquisa). A alternativa de gabarito foi a que descrevia a aplicação ao tratamento de dados pessoais coletados por pessoas físicas e jurídicas em território nacional. A Prova 15 de 2018 **não** trouxe a LGPD (o programa de 2018 não a citava). Duas provas não permitem inferir frequência.

### 16. Síntese

- LGPD: proteção de dados pessoais de **pessoas naturais**; protege liberdade, privacidade e livre desenvolvimento da personalidade.
- Aplicação: tratamento no Brasil, oferta a pessoas no Brasil ou dados coletados no Brasil; extraterritorial; exclusões (art. 4º).
- Definições: dado pessoal, sensível, anonimizado; titular, controlador, operador, encarregado, ANPD.
- 10 princípios; 10 bases legais; consentimento livre, informado e inequívoco; dados sensíveis (sem legítimo interesse).
- 9 direitos do titular; responsabilidade; RIPD; segurança e incidentes (comunicação à ANPD e ao titular).
- Sanções: advertência, multa (até 2% do faturamento, máximo R$ 50 milhões por infração), multa diária, publicização, bloqueio, eliminação, suspensões, proibição.
- Alterações posteriores: estudar o texto compilado.

### 17. Pontos para a futura produção de questões (registro)

Conceitos: âmbito; definições; princípios; bases legais; direitos do titular; agentes; incidentes; sanções. Distinções: dado pessoal×sensível; controlador×operador×encarregado; anonimizado×pseudonimizado; consentimento×legítimo interesse. Interpretação: identificar a base legal adequada a um cenário; avaliar se a LGPD se aplica a um tratamento; identificar o direito do titular exercido.

### 18. Referências

- BRASIL. **Lei nº 13.709, de 14 de agosto de 2018** (LGPD). Portal do Planalto, **texto compilado**: https://www.planalto.gov.br/ccivil_03/_ato2015-2018/2018/lei/l13709compilado.htm — **conferido em 2026-10-31**. A parte final (a partir do art. 55-L, inclusive o art. 65) foi obtida por resumo da página.
- ANPD. Página oficial *Comunicação de incidentes de segurança*: https://www.gov.br/anpd/pt-br/assuntos/comunicacao-de-incidentes-de-seguranca-cis (modificada em 26/08/2026) — **verificada** em 2026-10-31 (Resolução CD/ANPD nº 15/2024: três dias úteis; informações complementares em até vinte dias úteis). O texto da Resolução não foi lido.
- **Ainda não verificados:** EC 115/2022; art. 2º (fundamentos) e art. 65 na íntegra; MP 1.317/2025 (não consta do texto compilado).
- Edital Transpetro nº 04/2026.4, Anexo IV, item 4.6.
- Edital Transpetro nº 04/2026.4, Anexo IV, item 4.6.

