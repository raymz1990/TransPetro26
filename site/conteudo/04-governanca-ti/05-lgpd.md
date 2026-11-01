---
modulo: 04-governanca-ti
arquivo: 05-lgpd
itens_edital:
  - "4.6 Lei Geral de Proteção de Dados Pessoais - LGPD (Lei nº 13.709, de 14 de agosto de 2018, e suas alterações)."
ids_matriz: ["E5-040"]
escopo: "A — conteúdo expresso no edital (norma citada nominalmente, com 'suas alterações')."
tipo_conteudo: "teoria"
status: "VALIDADO"
ultima_atualizacao: "2026-10-31"
---

# Lei Geral de Proteção de Dados Pessoais (LGPD) — Lei nº 13.709/2018

**Módulo:** M04 — Gestão e governança em TI
**Texto oficial (Anexo IV):** 4.6 "Lei Geral de Proteção de Dados Pessoais - LGPD (Lei nº 13.709, de 14 de agosto de 2018, e suas alterações)."
**Fonte principal:** texto **compilado** da Lei nº 13.709/2018 no portal do Planalto (https://www.planalto.gov.br/ccivil_03/_ato2015-2018/2018/lei/l13709compilado.htm), **conferido em 2026-10-31** na revisão do módulo: leitura do texto até, aproximadamente, o art. 55 (com as notas de alteração) e dos arts. 55-A e 55-C; o **art. 65** (vigência) e a parte final foram obtidos por resumo da página. A página informa que não substitui a publicação no Diário Oficial. Como a lei é alterada com frequência, **confira o texto compilado vigente antes de citar um artigo**.
**Status:** `VALIDADO` (aprovado pelo usuário em 2026-10-31, com ressalvas: interpretação dos itens 4.3 e 4.4 a confirmar; EC 115/2022, art. 65 da LGPD e vários referenciais de memória não verificados — ver `docs/qualidade/relatorio-producao-modulo-04.md`).

**Objetivos de aprendizagem.** (1) Explicar o objetivo, os fundamentos e o âmbito de aplicação da LGPD; (2) definir dado pessoal, dado sensível, anonimizado, titular, controlador, operador, encarregado e ANPD; (3) enumerar os dez princípios e as hipóteses legais de tratamento; (4) descrever os direitos do titular; (5) compreender as responsabilidades dos agentes, a segurança, o incidente e as sanções.

---

## 1. Introdução

A **LGPD** disciplina o **tratamento de dados pessoais**, inclusive nos meios digitais, por pessoa natural ou por pessoa jurídica de direito público ou privado, com o objetivo de **proteger os direitos fundamentais de liberdade e de privacidade** e o livre desenvolvimento da personalidade da pessoa natural. Sua ementa informa que **dispõe sobre a proteção de dados pessoais** e **altera a Lei nº 12.965/2014 (Marco Civil da Internet)** (ementa verificada). A proteção de dados também foi incluída entre os direitos e garantias fundamentais da Constituição por emenda constitucional (EC 115/2022; **não verificada** nesta etapa).

*Relações:* a LGPD depende de **segurança da informação** (Módulo 9, arquivos `01`, `10`, `11` e `13`), de **metadados e qualidade de dados** (Módulo 1, arquivo `10`), da **governança de TI** (arquivos `01` e `04` deste módulo) e do **mapeamento de fontes de dados** (Módulo 7, item 7.3).

## 2. Estrutura da lei

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

## 3. Fundamentos, aplicação e exclusões

### 3.1 Fundamentos (art. 2º)

Respeito à **privacidade**; **autodeterminação informativa**; liberdade de expressão, de informação, de comunicação e de opinião; inviolabilidade da intimidade, da honra e da imagem; **desenvolvimento econômico e tecnológico e inovação**; livre iniciativa, livre concorrência e defesa do consumidor; direitos humanos, livre desenvolvimento da personalidade, dignidade e exercício da cidadania pelas pessoas naturais *(lista de memória, não verificada)*.

### 3.2 Aplicação (art. 3º — verificado)

A lei se aplica a **qualquer operação de tratamento** realizada por **pessoa natural ou jurídica**, de direito **público ou privado**, **independentemente do meio, do país de sua sede ou do país onde estejam localizados os dados**, desde que:

1. a operação de tratamento seja realizada **no território nacional**; ou
2. a atividade de tratamento tenha por objetivo a **oferta ou o fornecimento de bens ou serviços** ou o tratamento de dados de **indivíduos localizados no território nacional**; ou
3. os dados pessoais objeto do tratamento tenham sido **coletados no território nacional** (consideram-se coletados no Brasil os dados de titular nele localizado no momento da coleta).

*Consequência:* a LGPD tem **alcance extraterritorial**; **não** se limita a empresas localizadas no Brasil.

### 3.3 Exclusões (art. 4º — verificado)

A lei **não se aplica** ao tratamento de dados pessoais:

| Hipótese | Resumo |
|---|---|
| I | Realizado por **pessoa natural para fins exclusivamente particulares e não econômicos** |
| II | Realizado para fins **exclusivamente jornalísticos, artísticos ou acadêmicos** (para os acadêmicos, aplicam-se os arts. 7º e 11) |
| III | Realizado para fins **exclusivos de segurança pública, defesa nacional, segurança do Estado ou investigação e repressão de infrações penais** (regidos por legislação específica) |
| IV | Dados **provenientes de fora do território nacional** e que não sejam objeto de comunicação, uso compartilhado com agentes brasileiros ou transferência internacional a país diferente do de origem, desde que o país de origem proporcione grau de proteção adequado |

## 4. Definições (art. 5º — verificado)

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

## 5. Princípios (art. 6º — verificado: dez princípios)

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

## 6. Tratamento: hipóteses legais (bases legais)

### 6.1 Dados pessoais — art. 7º (verificado: dez hipóteses)

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

### 6.2 Consentimento (arts. 7º e 8º)

Deve ser **livre, informado e inequívoco**, para **finalidades determinadas**; fornecido **por escrito ou por outro meio** que demonstre a manifestação de vontade (se escrito, em **cláusula destacada** das demais); o **ônus da prova** é do **controlador**; é **vedado** o tratamento com consentimento viciado; **autorizações genéricas são nulas**; pode ser **revogado a qualquer momento**, por manifestação expressa, de forma gratuita e facilitada, e os tratamentos realizados antes **permanecem válidos** (art. 8º e parágrafos, **verificado**). Se mudarem informações como finalidade, forma ou duração do tratamento, o titular deve ser avisado e pode revogar. A revogação **não** obriga, necessariamente, a eliminar dados que possam ser mantidos por **outra base legal** ou pelas hipóteses de conservação do art. 16 (**verificado**).

### 6.3 Dados pessoais sensíveis (art. 11)

Só podem ser tratados (i) mediante **consentimento específico e destacado**, para finalidades específicas (inciso I), ou (ii) **sem consentimento**, nas hipóteses indispensáveis do inciso II: (a) **obrigação legal ou regulatória** pelo controlador; (b) uso compartilhado, pela administração pública, para **políticas públicas**; (c) **estudos por órgão de pesquisa**; (d) **exercício regular de direitos**; (e) **proteção da vida ou da incolumidade física**; (f) **tutela da saúde**, por profissionais de saúde ou autoridade sanitária; (g) **garantia da prevenção à fraude e à segurança do titular**, em processos de identificação e autenticação de cadastro em sistemas eletrônicos (art. 11, **verificado**). **O legítimo interesse (art. 7º, IX) e a proteção do crédito (art. 7º, X) não constam do art. 11.** Portanto, **o consentimento não é exigido apenas para dados sensíveis**: aplica-se também aos dados pessoais comuns quando a base legal for o consentimento.

### 6.4 Crianças e adolescentes (art. 14)

O tratamento deve ser realizado no **melhor interesse** da criança ou do adolescente; para crianças, exige-se **consentimento específico e em destaque** dado por pelo menos um dos pais ou pelo responsável legal *(art. 14, §1º; verificado)*.

### 6.5 Término do tratamento (arts. 15 e 16)

O tratamento termina quando a **finalidade é alcançada**, os dados deixam de ser necessários, expira o período, o titular revoga o consentimento ou a ANPD determina. Após o término, os dados são **eliminados**, salvo hipóteses de **conservação** (cumprimento de obrigação legal, estudo por órgão de pesquisa com anonimização sempre que possível, transferência a terceiro, uso exclusivo do controlador com dados anonimizados) *(arts. 15 e 16; verificados: quatro hipóteses de término e quatro finalidades de conservação)*.

## 7. Direitos do titular (art. 18 — verificado: nove direitos)

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

## 8. Agentes de tratamento e responsabilidade

| Agente | Papel |
|---|---|
| **Controlador** | Decide **finalidade e meios**; responde pelo cumprimento da lei; pode ser pessoa natural ou jurídica |
| **Operador** | Trata os dados **segundo as instruções do controlador**; **responde solidariamente** quando descumpre a legislação ou as instruções lícitas |
| **Encarregado** | Canal de comunicação com titulares e ANPD; orienta funcionários e contratados; sua **identidade e contatos** devem ser divulgados publicamente, preferencialmente no *site* do controlador (art. 41, §1º, **verificado**) |

- O **controlador ou operador** que, em razão do tratamento, causar **dano patrimonial, moral, individual ou coletivo** é obrigado a repará-lo (art. 42, **verificado**). O **operador** responde **solidariamente** quando descumpre a legislação ou as instruções lícitas do controlador, e passa a ser equiparado ao controlador (art. 42, §1º, I); admite-se a **inversão do ônus da prova** em processo civil (§2º) e o direito de regresso entre os responsáveis (§4º).
- A **ANPD** pode exigir o **relatório de impacto à proteção de dados pessoais** (art. 38, **verificado**).
- **Empresas públicas e sociedades de economia mista** que atuam em **regime de concorrência** têm, em regra, o mesmo tratamento das pessoas jurídicas de direito privado; quando **operacionalizam políticas públicas**, aplica-se o regime do poder público (art. 24, **verificado**).

## 9. Segurança, boas práticas e incidentes (Cap. VII)

- Os agentes devem adotar **medidas de segurança, técnicas e administrativas** aptas a proteger os dados de acessos não autorizados e de situações acidentais ou ilícitas de destruição, perda, alteração, comunicação ou difusão (art. 46) *(**verificado**)*.
- A segurança deve ser considerada **desde a concepção** do produto ou serviço até sua execução (*privacy by design*, art. 46, §2º, **verificado**).
- **Governança e boas práticas:** programa de governança em privacidade, políticas, treinamento, avaliação de riscos, plano de resposta a incidentes (arts. 50 e 51, **verificados**: a lei admite a formulação de regras de boas práticas e de governança e a ANPD estimula padrões técnicos).
- **Incidente de segurança** que possa acarretar **risco ou dano relevante** aos titulares: o controlador deve **comunicar à ANPD e ao titular** (art. 48, caput). A **lei não fixa número de dias**: determina **prazo razoável, definido pela ANPD** (§1º), e lista o conteúdo mínimo da comunicação (**verificado**). A **Resolução CD/ANPD nº 15, de 24 de abril de 2024**, segundo a página oficial da ANPD (consultada em 2026-10-31), fixa **três dias úteis** para comunicar à ANPD e ao titular (arts. 6º e 9º da Resolução), admitindo comunicação preliminar e informações complementares em até **vinte dias úteis**; a comunicação à ANPD **não dispensa** a informação aos titulares quando houver risco ou dano relevante.

## 10. Transferência internacional (Cap. V)

Permitida apenas nas **nove hipóteses** do art. 33 (**verificado**): (I) **países ou organismos com grau de proteção adequado**; (II) **garantias** oferecidas pelo controlador (cláusulas específicas, cláusulas-padrão, normas corporativas globais, selos, certificados e códigos de conduta); (III) cooperação jurídica internacional; (IV) proteção da vida; (V) autorização da ANPD; (VI) compromisso assumido em acordo de cooperação internacional; (VII) política pública; (VIII) **consentimento específico e em destaque**, com informação prévia do caráter internacional da operação; (IX) hipóteses do art. 7º, II, V e VI. A ANPD regulamenta o tema.

## 11. Fiscalização e sanções (Cap. VIII)

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

## 12. A ANPD e as alterações da lei

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

## 13. Comparações conceituais

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

## 14. Aplicações e cenários

**Cenário (didático): cadastro de visitantes e de fornecedores.** Uma empresa de grande porte cadastra visitantes (nome, documento, foto) e fornecedores (dados de representantes). Para cada fluxo, define **finalidade** (segurança patrimonial; execução de contrato), **base legal** (legítimo interesse ou execução de contrato, e não necessariamente consentimento), **minimiza** os dados (**necessidade**), define **prazo de retenção**, informa os titulares (**transparência**) e protege o acesso (**segurança**). Dados **biométricos** (foto para reconhecimento facial) são **sensíveis** e exigem fundamento próprio. *Limitação:* a escolha da base legal depende do contexto e deve ser documentada.

**Cenário (didático): incidente.** Uma planilha com dados de empregados é exposta por erro de compartilhamento. O controlador avalia **risco ou dano relevante**, aciona o plano de resposta a incidentes (Módulo 9, arquivo `06`), contém a exposição, **comunica à ANPD e aos titulares** nos termos da regulamentação e registra as medidas.

**Cenário (didático): mapeamento de dados.** O primeiro passo de conformidade é **mapear** quais dados pessoais existem, onde, para que fins, com quem são compartilhados e por quanto tempo (inventário de tratamentos), apoiando-se no mapeamento de fontes e nos metadados (Módulos 7 e 1).

## 15. Atenção para a prova

*Inferência técnica e recomendação pedagógica; sem atribuir frequência à banca.*

- **Âmbito:** aplica-se a tratamento por pessoa natural ou jurídica, pública ou privada, **no território nacional**, ou com objetivo de oferta de bens e serviços a indivíduos no Brasil, ou com dados **coletados** no Brasil — **há extraterritorialidade**. **Exclusões:** pessoa natural para fins **exclusivamente particulares e não econômicos**, jornalístico, artístico, acadêmico, segurança pública etc.
- **Consentimento:** é **uma** das dez bases do art. 7º; **não é exigido apenas para dados sensíveis**; pode ser **revogado**; a **revogação não implica**, necessariamente, a eliminação de todos os dados, se houver outra base legal (por exemplo, art. 16).
- **Dados sensíveis**: lista fechada de categorias; legítimo interesse **não** é base para sensíveis.
- Os **dez princípios** e os **nove direitos** do titular: reconhecer cada um pelo conceito.
- **Controlador × operador × encarregado**: papéis distintos.
- **Sanções**: multa de até **2%** do faturamento no Brasil, **limitada a R$ 50 milhões por infração**; há outras sanções além da multa.
- A LGPD protege **pessoas naturais**.
- *Evidência histórica (amostra de duas provas):* a Prova 6 de 2023 (Q57) pediu a **afirmação correta sobre a LGPD**; as alternativas incorretas tratavam do âmbito (como se aplicada apenas a empresas no Brasil e sem extraterritorialidade; como se abrangesse tratamento por pessoa natural para fins exclusivamente particulares e não econômicos), do consentimento (como exigido apenas para dados sensíveis) e da revogação (como se obrigasse a eliminar dados mesmo anonimizados e para pesquisa). A alternativa de gabarito foi a que descrevia a aplicação ao tratamento de dados pessoais coletados por pessoas físicas e jurídicas em território nacional. A Prova 15 de 2018 **não** trouxe a LGPD (o programa de 2018 não a citava). Duas provas não permitem inferir frequência.

## 16. Síntese

- LGPD: proteção de dados pessoais de **pessoas naturais**; protege liberdade, privacidade e livre desenvolvimento da personalidade.
- Aplicação: tratamento no Brasil, oferta a pessoas no Brasil ou dados coletados no Brasil; extraterritorial; exclusões (art. 4º).
- Definições: dado pessoal, sensível, anonimizado; titular, controlador, operador, encarregado, ANPD.
- 10 princípios; 10 bases legais; consentimento livre, informado e inequívoco; dados sensíveis (sem legítimo interesse).
- 9 direitos do titular; responsabilidade; RIPD; segurança e incidentes (comunicação à ANPD e ao titular).
- Sanções: advertência, multa (até 2% do faturamento, máximo R$ 50 milhões por infração), multa diária, publicização, bloqueio, eliminação, suspensões, proibição.
- Alterações posteriores: estudar o texto compilado.

## 17. Pontos para a futura produção de questões (registro)

Conceitos: âmbito; definições; princípios; bases legais; direitos do titular; agentes; incidentes; sanções. Distinções: dado pessoal×sensível; controlador×operador×encarregado; anonimizado×pseudonimizado; consentimento×legítimo interesse. Interpretação: identificar a base legal adequada a um cenário; avaliar se a LGPD se aplica a um tratamento; identificar o direito do titular exercido.

## 18. Referências

- BRASIL. **Lei nº 13.709, de 14 de agosto de 2018** (LGPD). Portal do Planalto, **texto compilado**: https://www.planalto.gov.br/ccivil_03/_ato2015-2018/2018/lei/l13709compilado.htm — **conferido em 2026-10-31**. A parte final (a partir do art. 55-L, inclusive o art. 65) foi obtida por resumo da página.
- ANPD. Página oficial *Comunicação de incidentes de segurança*: https://www.gov.br/anpd/pt-br/assuntos/comunicacao-de-incidentes-de-seguranca-cis (modificada em 26/08/2026) — **verificada** em 2026-10-31 (Resolução CD/ANPD nº 15/2024: três dias úteis; informações complementares em até vinte dias úteis). O texto da Resolução não foi lido.
- **Ainda não verificados:** EC 115/2022; art. 2º (fundamentos) e art. 65 na íntegra; MP 1.317/2025 (não consta do texto compilado).
- Edital Transpetro nº 04/2026.4, Anexo IV, item 4.6.
- Edital Transpetro nº 04/2026.4, Anexo IV, item 4.6.
