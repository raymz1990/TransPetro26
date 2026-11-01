---
modulo: 09-seguranca-informacao
arquivo: 12-criptografia-e-certificados
itens_edital:
  - "9.19 Norma ISO 27002, Criptografia, certificação digital e assinatura digital"
ids_matriz: ["E5-100"]
escopo: "A — conteúdo expresso no edital (partes 'Criptografia, certificação digital e assinatura digital' do item 9.19). ISO 27002: arquivo `11`."
tipo_conteudo: "teoria"
status: "VALIDADO"
ultima_atualizacao: "2026-10-31"
---

# Criptografia, Certificação Digital e Assinatura Digital

**Módulo:** M09 — Segurança da informação
**Texto oficial (Anexo IV):** 9.19 "Norma ISO 27002, Criptografia, certificação digital e assinatura digital" (este arquivo trata **criptografia, certificação digital e assinatura digital**).
**Escopo:** A. Relaciona-se a `05` (VPN, SSO), `11` e ao M04 (item 4.6).
**Status:** `VALIDADO` (aprovado pelo usuário em 2026-10-31, com ressalvas: interpretação do item 9.1 e escolha das versões do NIST SP 800-61 e do MITRE ATT&CK a confirmar; fontes de memória listadas em `docs/qualidade/relatorio-producao-modulo-09.md`). **Verificados** (2026-10-31): X.509 (RFC 5280: certificado vincula chave pública a sujeito, assinado por AC confiável); ICP-Brasil (gov.br/ITI: o ITI exerce o papel de **AC-Raiz**; modelo de **raiz única**). **Revisão:** MP 2.200-2/2001 (arts. 1º, 5º, 10 e 13) lida no Planalto; assinatura digital (*hash* assinado e verificação com a chave pública) e criptossistema híbrido/envelope (chave simétrica cifrada com a chave pública do destinatário) confirmados na Wikipedia. **Não confirmados:** SHA256withRSA, tamanhos de chave, algoritmos (AES, RSA, ECC, SHA-2) — de memória.

**Objetivos de aprendizagem.** (1) Distinguir criptografia simétrica, assimétrica, *hash* e criptografia híbrida; (2) explicar assinatura digital e envelope digital; (3) descrever certificado digital e ICP; (4) conhecer a ICP-Brasil; (5) reconhecer algoritmos e boas práticas.

---

## 1. Conceitos

**Criptografia** transforma dados legíveis (**texto claro**) em ilegíveis (**texto cifrado**) por meio de um **algoritmo** e uma **chave**; objetivos: **confidencialidade**, **integridade**, **autenticidade** e **não repúdio** (conforme o mecanismo). Princípio de Kerckhoffs (de memória): a segurança deve depender da **chave**, não do segredo do algoritmo. **Criptoanálise** estuda a quebra de cifras.

## 2. Tipos de criptografia

### 2.1 Simétrica (chave secreta)

**Mesma chave** para cifrar e decifrar. **Vantagens:** rápida; adequada a grandes volumes. **Desvantagens:** **distribuição segura da chave**; número de chaves cresce com o número de pares (n(n−1)/2). Algoritmos (de memória): **AES** (padrão atual; blocos de 128 bits; chaves de 128, 192 e 256), 3DES (legado), ChaCha20. Modos de operação de cifra de bloco: ECB (inseguro por revelar padrões), CBC, CTR, **GCM** (autenticado).

### 2.2 Assimétrica (chave pública)

**Par de chaves**: **pública** (divulgada) e **privada** (secreta); o que uma cifra, a outra decifra. **Vantagens:** resolve a distribuição de chaves; permite **assinatura digital**. **Desvantagens:** **lenta**, usada para pequenos dados e para trocar chaves. Algoritmos (de memória): **RSA**, **ECC** (curvas elípticas, ECDSA, ECDH), Diffie-Hellman (acordo de chaves), DSA.

| Uso do par | Cifra com | Decifra com | Garante |
|---|---|---|---|
| **Confidencialidade** | Chave **pública do destinatário** | Chave **privada do destinatário** | Só o destinatário lê |
| **Assinatura (autenticidade e não repúdio)** | Chave **privada do signatário** (sobre o *hash*) | Chave **pública do signatário** | Origem e integridade |

### 2.3 Função de *hash* (resumo criptográfico)

Função **unidirecional** que gera um **resumo de tamanho fixo**; pequena mudança na entrada altera muito o resultado (efeito avalanche). Propriedades: **resistência a pré-imagem**, **a segunda pré-imagem** e **a colisões** (de memória). Algoritmos: **SHA-2** (SHA-256, SHA-512) e **SHA-3**; **MD5 e SHA-1 estão obsoletos** para segurança. Usos: **integridade**, assinatura digital, armazenamento de senhas (com **sal** e funções lentas: bcrypt, scrypt, Argon2, PBKDF2). **HMAC:** *hash* com chave, garante integridade e autenticidade da mensagem. *Hash* **não é criptografia reversível**.

### 2.4 Criptografia híbrida e envelope digital

Combina as duas: usa **chave simétrica de sessão** (rápida) para cifrar os dados e **criptografia assimétrica** para proteger essa chave.

**Envelope digital** (a Wikipedia usa *envelope encryption* para a cifragem com criptossistema híbrido e redireciona "digital envelope" a *key encapsulation mechanism*; passos básicos verificados):
1. Gera-se uma **chave simétrica aleatória** (de sessão).
2. A **mensagem é cifrada** com essa chave simétrica.
3. A **chave simétrica é cifrada com a chave pública do destinatário** (formando o "envelope").
4. Envia-se a mensagem cifrada e o envelope.
5. O destinatário usa sua **chave privada** para abrir o envelope, obter a chave simétrica e decifrar a mensagem.

Vantagens: desempenho da simétrica e distribuição segura de chaves da assimétrica. TLS e e-mail seguro (S/MIME, PGP) usam esquemas híbridos.

## 3. Assinatura digital (processo geral verificado na Wikipedia; detalhes de memória)

Nota: a literatura atual diz que o *hash* é **assinado** com a chave privada; a descrição "cifrar o *hash* com a chave privada" é a forma didática comum. **Processo de assinatura:** (1) calcula-se o ***hash*** do documento; (2) o *hash* é **cifrado com a chave privada** do signatário (formando a assinatura); (3) a assinatura é anexada ao documento (com o certificado). **Verificação:** o destinatário (1) calcula o *hash* do documento recebido; (2) **decifra a assinatura com a chave pública** do signatário, obtendo o *hash* original; (3) compara os dois — se iguais, o documento está **íntegro** e a assinatura é **autêntica**.

| Propriedade | Como a assinatura digital a fornece |
|---|---|
| **Integridade** | Qualquer alteração muda o *hash* |
| **Autenticidade** | Só quem tem a chave privada pode assinar |
| **Não repúdio** | O signatário não pode negar (a chave privada é sua), desde que haja certificado e custódia adequada da chave |
| **Confidencialidade** | **Não** é fornecida (o documento pode ser lido) — usa-se criptografia à parte |

**Assinatura digital ≠ assinatura digitalizada ≠ assinatura eletrônica genérica:** a digital usa criptografia de chave pública e certificado. No Brasil, a **MP 2.200-2/2001** (verificada no Planalto) institui a ICP-Brasil (art. 1º) para garantir autenticidade, integridade e validade jurídica de documentos eletrônicos; as declarações em documentos produzidos com certificação da ICP-Brasil **presumem-se verdadeiras em relação aos signatários** (art. 10, §1º), e o §2º admite outros meios de comprovação aceitos pelas partes; a **Lei 14.063/2020** (de memória) trata de assinaturas eletrônicas simples, avançada e qualificada.

**SHA256withRSA** (SHA-256 com RSA; nomenclatura de bibliotecas, **de memória**): o ***hash*** do conteúdo é calculado com **SHA-256** e o resultado é **assinado (cifrado) com a chave privada RSA**. Atenção: não é "cifrar o documento com RSA".

## 4. Certificado digital e infraestrutura de chaves públicas

### 4.1 Certificado digital (X.509 — verificado)

Estrutura de dados que **vincula uma chave pública a um sujeito**, **assinada digitalmente por uma autoridade certificadora (AC) confiável** (RFC 5280). Conteúdo típico (de memória): versão, **número de série**, algoritmo de assinatura, **emissor**, **validade** (início e fim), **sujeito**, **chave pública**, extensões (uso da chave, pontos de revogação) e **assinatura da AC**. Tipos: certificados de pessoa física/jurídica, de servidor (SSL/TLS), de código, de e-mail.

### 4.2 ICP/PKI — Infraestrutura de Chaves Públicas

| Componente | Função |
|---|---|
| **AC** (Autoridade Certificadora) | **Emite**, renova e **revoga** certificados |
| **AR** (Autoridade de Registro) | **Identifica e valida** os requerentes e encaminha à AC |
| **AC Raiz** | Topo da cadeia; **autoassinada** |
| **Repositório / LCR (CRL), OCSP** | Publicação e consulta de **revogação** (CRL: lista; OCSP: consulta online) |
| **Titular** | Dono do certificado e da chave privada |
| **Terceira parte confiável (parte confiante)** | Quem confia no certificado |

**Cadeia de certificação (hierarquia):** AC raiz → ACs intermediárias → certificado do usuário/servidor. A confiança vem da **raiz** presente no repositório do sistema. A validação verifica **assinatura, validade, revogação e cadeia**.

### 4.3 ICP-Brasil (parcialmente verificada)

Infraestrutura oficial brasileira de chaves públicas, de **raiz única**: o **ITI** (Instituto Nacional de Tecnologia da Informação) exerce o papel de **AC-Raiz** (**verificado** em gov.br/iti). Instituída pela **MP 2.200-2/2001** (art. 1º, verificado); a **AC Raiz** é a primeira autoridade da cadeia e **não emite certificados para o usuário final** (art. 5º), e o ITI é a AC Raiz (art. 13). Estrutura (memória): **AC-Raiz (ITI)** → **ACs de 1º nível** → **ACs subsequentes** → **ARs**; o **Comitê Gestor** estabelece as políticas. Tipos de certificado: A1, A3 (assinatura), S, T (carimbo do tempo) e sua validade, mídia e tamanho de chave variam (de memória; não verificados).

**Carimbo do tempo:** prova **quando** o documento existia/foi assinado (Autoridade de Carimbo do Tempo); **assinaturas de longa duração** (de memória).

## 5. Protocolos que usam criptografia (resumo)

| Protocolo | Uso |
|---|---|
| **TLS** (sucessor do SSL) | Canal seguro (HTTPS): negocia chaves por criptografia assimétrica, cifra o tráfego com simétrica; certificado do servidor (de memória) |
| **IPsec** | Camada IP; VPN (`05`, RFC 4301 verificada) |
| **SSH** | Acesso remoto seguro |
| **S/MIME, PGP** | E-mail assinado/cifrado |
| **DNSSEC** | Assinatura de registros DNS |
| **Kerberos** | Autenticação por tickets (simétrica) |

## 6. Gestão de chaves e boas práticas

Geração segura (aleatoriedade adequada); **armazenamento protegido** (HSM, cartão/token, cofre); **rotação e expiração**; **separação de funções**; **backup e recuperação** de chaves; **revogação** em caso de comprometimento; uso de **algoritmos e tamanhos atuais** (AES-256/128, RSA ≥ 2048 bits, SHA-256 ou superior; recomendação de memória, a conferir em fonte); **evitar** algoritmos obsoletos (DES, RC4, MD5, SHA-1); **criptografia em trânsito, em repouso e em uso**; **política de criptografia** (ISO 27002; `11`). **Riscos:** perda ou roubo da chave privada, implementação incorreta, ataques de canal lateral, computação quântica ameaçando RSA e ECC (**criptografia pós-quântica**; de memória).

## 7. Comparações conceituais

| A | B | Diferença |
|---|---|---|
| Simétrica | Assimétrica | Uma chave, rápida × par de chaves, lenta, sem troca prévia de segredo |
| Criptografia | *Hash* | Reversível com chave × unidirecional |
| Assinatura digital | Envelope digital | Autenticidade, integridade, não repúdio × confidencialidade da chave de sessão |
| Chave pública | Privada | Divulgada × secreta |
| AC | AR | Emite e revoga × identifica e valida |
| CRL | OCSP | Lista de revogados × consulta online do estado |
| Assinatura digital | Assinatura digitalizada | Criptográfica, verificável × imagem de assinatura |
| Certificado | Chave | Documento que vincula identidade à chave pública × material criptográfico |

## 8. Atenção para a prova

*Inferência técnica e recomendação pedagógica; sem atribuir frequência à banca.*

- **Quem usa qual chave:** confidencialidade = pública do destinatário; assinatura = privada do signatário.
- Assinatura digital = *hash* do documento cifrado com a chave privada; **não** garante sigilo.
- Envelope digital = chave simétrica de sessão protegida com a chave pública do destinatário.
- *Evidência histórica (amostra de duas provas):* Prova 6 de 2023 — **Q41** (envelope digital; gabarito D). Prova 15 de 2018 — **Q50** (certificado digital: SHA256RSA; gabarito E) e **Q52** (hierarquia de certificação da ICP-Brasil; gabarito A). Gabaritos de terceiros, não validados. Duas provas não permitem inferir frequência.

## 9. Síntese

Simétrica (AES), assimétrica (RSA, ECC), *hash* (SHA-2), HMAC, híbrida e envelope digital. Assinatura digital: *hash* + chave privada; verificação com a pública. Certificado X.509 liga chave pública a sujeito, assinado por AC. ICP: AC, AR, raiz, LCR/OCSP. ICP-Brasil: raiz única (ITI).

## 10. Pontos para a futura produção de questões (registro)

Escolha de chave por finalidade; passos do envelope e da assinatura; componentes da ICP; hierarquia da ICP-Brasil; leitura de "SHA256withRSA"; algoritmos obsoletos.

## 11. Referências

- IETF RFC 5280 (X.509) — **verificada em 2026-10-31**. gov.br/ITI, ICP-Brasil — **verificada** (AC-Raiz, raiz única).
- Planalto, MP 2.200-2/2001 (arts. 1º, 5º, 10, 13) — **verificada em 2026-10-31**. Wikipedia, "Digital signature", "Hybrid cryptosystem" e "Key encapsulation mechanism" — **verificadas**. SHA256withRSA, algoritmos e tamanhos de chave, Lei 14.063/2020, tipos de certificado — **de memória, não confirmados**.
- Edital Transpetro nº 04/2026.4, Anexo IV, item 9.19. Provas: Transpetro 2023, Prova 6, Q41; Transpetro 2018, Prova 15, Q50 e Q52 (gabaritos de terceiros, não validados).
