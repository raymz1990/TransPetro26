---
modulo: 01-arquitetura-dados
arquivo: 08-integracao-e-etl
itens_edital:
  - "1.19 Integração dos dados (ETL, Transferência de Arquivos e Integração via Base de Dados)"
ids_matriz: ["E5-020"]
escopo: "A — conteúdo expresso no edital (APIs e mensageria na seção 7 como complemento B para contraste)"
tipo_conteudo: "teoria"
status: "VALIDADO"
ultima_atualizacao: "2026-10-31"
---

# Integração de Dados: ETL, Transferência de Arquivos e Integração via Base de Dados

**Módulo:** M01 — Arquitetura de Dados
**Texto oficial (Anexo IV):** 1.19 "Integração dos dados (ETL, Transferência de Arquivos e Integração via Base de Dados)".
**Escopo:** A para os três estilos citados (ETL, transferência de arquivos, integração via base de dados). A seção 7 (APIs e mensageria) é **complemento B**, incluído para permitir comparação; não é exigência literal do edital.
**Status:** `VALIDADO` (aprovado pelo usuário em 2026-10-31; referências não verificadas listadas em `docs/qualidade/relatorio-producao-modulo-01.md`).

**Objetivos de aprendizagem.** (1) Explicar por que e como integrar dados de sistemas diferentes; (2) descrever as fases do ETL e as estratégias de extração e carga; (3) diferenciar ETL de ELT; (4) caracterizar a transferência de arquivos e a integração via base de dados, com vantagens e riscos; (5) escolher o estilo adequado a um cenário.

---

## 1. Introdução

Organizações possuem **muitos sistemas** (ERP, manutenção, financeiro, sensores, planilhas), cada um com seus dados, formatos e regras. **Integrar dados** é fazer informações de fontes distintas circularem e serem combinadas de forma consistente. As razões: consolidar visão única (relatórios, *data warehouse*), sincronizar sistemas operacionais, migrar dados, alimentar análises. O item 1.19 cita três estilos clássicos: **ETL**, **transferência de arquivos** e **integração via base de dados**.

*Relações:* o destino típico do ETL é um *data warehouse*/*data lake* (arquivo `09`; OLAP e DW no Módulo 7); a qualidade de dados e os metadados (arquivo `10`) são centrais; a integridade entre bancos distintos não é garantida pelo SGBD (arquivo `03`).

## 2. ETL (*Extract, Transform, Load*)

### 2.1 Visão geral

**ETL** é o processo de **extrair** dados de fontes, **transformá-los** (limpar, padronizar, combinar) e **carregá-los** em um destino analítico ou operacional.

```text
 Fontes                     Área de preparação (staging)              Destino
 ┌────────┐   Extração      ┌───────────────────────────┐  Carga   ┌───────────┐
 │ ERP    │────────────────►│  dados brutos             │          │ Data      │
 │ Sensores│                │  ↓ limpeza / padronização │─────────►│ Warehouse │
 │ Arquivos│                │  ↓ integração / regras    │          │ / Marts   │
 └────────┘                 │  ↓ chaves, histórico      │          └───────────┘
                            └───────────────────────────┘
```

### 2.2 Extração

Objetivo: obter dados das fontes **sem prejudicar** os sistemas operacionais.

| Estratégia | Descrição | Observações |
|---|---|---|
| **Completa** (*full*) | Lê toda a fonte a cada execução | Simples; custosa em grandes volumes |
| **Incremental por marca** | Usa coluna de data/versão (`data_alteracao`) | Exige que a fonte mantenha a marca; não detecta exclusões físicas |
| **Captura de dados de mudança (CDC)** | Identifica inserções/alterações/exclusões por **log do banco**, gatilhos ou comparação | Baixo impacto na fonte (log-based); mais complexo |
| **Por mensagem/evento** | A fonte publica eventos | Aproxima-se de integração em tempo real |

Também é preciso tratar **janelas** de extração (horários de baixa carga), **conectividade** com diferentes tipos de fonte (bancos, arquivos, APIs) e **consistência** (extrair de um instante consistente).

### 2.3 Transformação

Principais atividades:

| Atividade | Exemplos |
|---|---|
| **Limpeza** | Remover/corrigir nulos, duplicatas, valores inválidos |
| **Padronização** | Unificar formatos (datas, unidades, códigos, caixa alta/baixa) |
| **Conversão de tipos** | Texto → data/número |
| **Integração/conciliação** | Casar o mesmo cliente de sistemas diferentes (chave de negócio, *match*) |
| **Enriquecimento/derivação** | Cálculo de campos, lookup em tabelas de referência |
| **Agregação** | Resumos por período/dimensão |
| **Atribuição de chaves substitutas** | Substitui chaves de negócio por chaves internas do DW |
| **Tratamento de histórico** | Preservar versões de dimensões (dimensões lentamente mutáveis — arquivo `09`) |
| **Aplicação de regras de negócio** | Validações e classificações |

Dados que falham nas validações são desviados para **tabelas/arquivos de rejeição** com motivo, para análise e reprocessamento, em vez de serem perdidos ou carregados incorretos.

### 2.4 Carga

| Estratégia | Descrição |
|---|---|
| **Carga completa (*full load*)** | Substitui o conteúdo do destino |
| **Carga incremental** | Insere/atualiza somente o que mudou |
| **`INSERT`/`UPDATE`/`MERGE` (upsert)** | Atualiza o existente e insere o novo |
| **Carga em massa (*bulk load*)** | Gravação rápida, desativando temporariamente índices/restrições conforme o caso |
| **Idempotência** | Reexecutar a carga não duplica dados — propriedade desejável para recuperação |

### 2.5 Área de preparação (*staging area*)

Área intermediária (tabelas ou arquivos) onde os dados extraídos são mantidos **temporariamente**, longe das fontes e do destino, para transformação, auditoria e reprocessamento. Em arquiteturas de DW é a camada que recebe os dados dos sistemas transacionais antes de transformá-los e carregá-los. Não é voltada ao usuário final.

### 2.6 ETL × ELT

| Aspecto | **ETL** | **ELT** |
|---|---|---|
| Onde a transformação ocorre | Em servidor/ferramenta de ETL **antes** da carga | **No destino** (motor do DW/lake), após carga dos dados brutos |
| Dados brutos no destino | Normalmente não | Sim |
| Ajusta-se a | DW tradicional, volume moderado, regras complexas | Nuvem, grande volume, *data lakes*, poder de processamento do destino |
| Vantagem | Dados carregados já limpos | Flexibilidade, reprocessamento, aproveita paralelismo do destino |
| Risco | Gargalo no servidor de ETL | Dados brutos sensíveis armazenados; necessidade de governança |

### 2.7 Execução, orquestração e operação

- **Lote (*batch*)** × **tempo real/micro-lote (*streaming*)**: o lote roda em janelas (diário, horário); o *streaming* processa eventos continuamente.
- **Orquestração:** agendamento e dependências entre tarefas; reinício de falhas; alertas.
- **Auditoria e rastreabilidade (*lineage*):** registro de origem, volumes, horários e erros — apoio aos metadados (arquivo `10`).
- **Desempenho:** paralelismo, particionamento, cargas incrementais, índices, conexão em massa.
- **Segurança:** dados sensíveis (LGPD) em trânsito e em repouso; acesso restrito.
- **Ferramentas:** existem ferramentas de ETL/ELT comerciais e livres; o edital não indica nenhuma.

## 3. Transferência de arquivos

### 3.1 Conceito

Um sistema **gera um arquivo** (CSV, texto de largura fixa, XML, JSON, Parquet) com os dados, que é **transferido** e **lido/importado** por outro. É o estilo **mais simples e antigo**, muito comum entre organizações e legados.

### 3.2 Características

| Aspecto | Observação |
|---|---|
| Acoplamento | Baixo em tecnologia (basta combinar o **formato**), mas há acoplamento ao *layout* do arquivo |
| Modo | Geralmente **assíncrono em lote** (arquivo diário, por exemplo) |
| Transporte | SFTP/FTPS, compartilhamento de rede, armazenamento de objetos, *managed file transfer* |
| Contrato | Layout, delimitadores, codificação (UTF-8, ISO-8859-1), formato de datas e decimais, nomenclatura |
| Vantagens | Simplicidade, independência de plataformas, bom para grandes volumes e migrações, fácil de auditar |
| Limitações | **Latência** (dados defasados); detecção de arquivos incompletos/duplicados; erros de layout; ausência de transação entre sistemas; manutenção do contrato |

### 3.3 Boas práticas

- Definir **contrato de dados** (layout, versão, obrigatoriedade).
- Incluir **arquivo de controle** ou rodapé com contagem de registros e *checksum*, para validar integridade.
- Nomear por data/sequência, garantir **idempotência** (não processar duas vezes) e tratar **arquivos parciais** (gravar com nome temporário e renomear ao final).
- Validar na entrada, registrar rejeições, arquivar os originais.
- Proteger dados sensíveis (criptografia, controle de acesso).

## 4. Integração via base de dados

### 4.1 Conceito

Os sistemas **compartilham o mesmo banco** ou acessam diretamente o banco uns dos outros. Variações: **banco compartilhado** (várias aplicações leem/escrevem nas mesmas tabelas); **acesso direto** do consumidor ao banco do produtor (*database link*, visões expostas); **replicação** ou **federação** de dados; **tabelas de intercâmbio** (uma aplicação grava, outra lê).

### 4.2 Características

| Aspecto | Observação |
|---|---|
| Latência | Baixa; dados atuais disponíveis imediatamente |
| Consistência | Pode se apoiar em **transações e integridade do SGBD** quando o banco é o mesmo |
| Vantagens | Simplicidade técnica, sem formatos intermediários, consultas diretas, relatórios |
| **Limitações** | **Acoplamento forte ao esquema** (mudar uma tabela quebra os consumidores); contenção/concorrência; **desempenho** das aplicações operacionais afetado por consultas dos integradores; **segurança** (exposição de dados e de regras); dificuldade de evolução; viola o encapsulamento do sistema dono do dado |
| Mitigações | Expor **visões** ou um **esquema de integração** dedicado; permissões mínimas; réplicas de leitura; tabelas de intercâmbio versionadas |

*Exemplo didático:* o sistema de manutenção lê diretamente a tabela de equipamentos do ERP. Se o ERP alterar o tipo de uma coluna, a integração falha sem aviso. Alternativa: o ERP publica uma **visão** estável `v_equipamento_integracao`, que isola o consumidor de mudanças internas.

## 5. Comparação entre os estilos

| Critério | ETL | Transferência de arquivos | Integração via base de dados |
|---|---|---|---|
| Finalidade típica | Consolidar e transformar para análise | Troca simples entre sistemas, lotes, migração | Acesso imediato a dados de outro sistema |
| Latência | Lote ou micro-lote | Lote (horas/dias) | Tempo real/baixa |
| Acoplamento | Médio (conectores às fontes) | Baixo em tecnologia; contrato de layout | **Alto** (esquema) |
| Transformação | Central ao processo | Mínima ou no consumidor | Feita pelo consumidor ao ler |
| Qualidade de dados | Limpeza/validação integrada | Validação na importação | Depende do consumidor |
| Riscos | Complexidade, janelas, falhas de carga | Latência, arquivos incompletos/duplicados | Quebra por mudança de esquema, carga sobre o operacional |
| Escopo | Dados de vários sistemas para DW/lake | Dois sistemas ou lote | Mesmo banco ou bancos acessíveis |

## 6. Comparações conceituais

| Conceito A | Conceito B | Diferença principal |
|---|---|---|
| ETL | ELT | Transforma antes de carregar × carrega e transforma no destino |
| Extração completa | Extração incremental | Lê tudo × lê apenas mudanças |
| *Staging area* | Data warehouse | Área temporária de preparação × repositório analítico para o usuário |
| Lote | *Streaming* | Janelas periódicas × fluxo contínuo |
| Transferência de arquivos | Integração via BD | Assíncrona e desacoplada por contrato × direta e acoplada ao esquema |
| Replicação | ETL | Cópia (idealmente fiel) para disponibilidade/leitura × transformação para novo propósito |

## 7. Complemento (B): APIs e mensageria

*Esta seção não corresponde a item literal do edital.* Dois outros estilos de integração ajudam a contrastar os três acima: **chamada remota/API** (um sistema chama o serviço de outro de forma síncrona, por exemplo REST) e **mensageria** (sistemas trocam mensagens por filas/tópicos, de modo assíncrono e desacoplado no tempo). A classificação clássica de estilos de integração (transferência de arquivos, banco de dados compartilhado, chamada de procedimento remoto e mensageria) vem da literatura de padrões de integração corporativa.

## 8. Aplicações e cenários

**Cenário (didático): consolidação para um painel gerencial.** Dados de manutenção (sistema A), custos (ERP) e leituras de sensores (sistema C) precisam alimentar um painel. *Abordagem:* ETL noturno com extração incremental por data de alteração; *staging* para conciliar equipamentos pelo código; validação e tabela de rejeição; carga em dimensões e fatos do DW. *Limitação:* o painel reflete o estado até a última carga; para tempo real, considerar CDC/*streaming*.

**Cenário (didático): fornecedor externo envia dados diariamente.** Opta-se por **transferência de arquivos** com contrato de layout, arquivo de controle e SFTP. *Risco:* arquivo incompleto; mitigação com nome temporário/rename e verificação da contagem.

**Cenário (didático): dois módulos do mesmo sistema.** Módulos que já compartilham o mesmo banco usam **integração via base de dados**, com transações e integridade. *Cuidado:* mudanças de esquema exigem coordenação.

## 9. Atenção para a prova

*Inferência técnica e recomendação pedagógica; sem atribuir frequência à banca.*

- Memorizar a **ordem e o papel** das fases: **E**xtração, **T**ransformação, **C**arga; a transformação é **entre** extrair e carregar (no ELT é **depois** da carga).
- **Staging area:** camada de preparação entre o sistema transacional e o DW; não é o modelo dimensional nem a área de apresentação.
- Integração via banco de dados: **acoplamento forte ao esquema** é o principal ponto fraco; transferência de arquivos: **latência/lote** e contrato de layout.
- Cuidado com afirmações como "ETL é sempre em tempo real" ou "integração via arquivo garante consistência transacional entre sistemas" — incorretas por serem absolutas.
- *Evidência histórica (amostra de duas provas):* a Prova 15 de 2018 (Q22) tratou da camada de preparação (*data staging area*) usada para transferir e transformar dados dos sistemas transacionais para o DW. As provas catalogadas não trouxeram questão específica sobre transferência de arquivos ou integração via banco; duas provas não permitem inferir frequência.

## 10. Síntese

- **Integração:** ETL, transferência de arquivos, integração via base de dados (itens do edital).
- **ETL:** extrair (completa/incremental/CDC) → transformar (limpar, padronizar, integrar, derivar, chaves, histórico) → carregar (completa/incremental/upsert/bulk); *staging* intermediária; idempotência; rejeições.
- **ELT:** transforma no destino.
- **Arquivos:** simples, assíncrono, contrato de layout; latência; validar integridade.
- **Base de dados:** imediato, mas acoplado ao esquema; usar visões/esquemas de integração.

## 11. Pontos para a futura produção de questões (registro)

Conceitos: fases do ETL; *staging*; extração incremental/CDC; ELT; transferência de arquivos; integração via base. Distinções: ETL×ELT; arquivo×banco; completa×incremental. Interpretação: escolher o estilo para um cenário; identificar o risco principal de cada estilo.

## 12. Referências

Bibliografia de apoio (itens marcados **verificado** foram conferidos em catálogos online em 2026-10-31; os demais, **não verificados** — edição/ano/páginas pendentes):

- KIMBALL, R.; CASERTA, J. *The Data Warehouse ETL Toolkit*. Wiley.
- HOHPE, G.; WOOLF, B. *Enterprise Integration Patterns*. Addison-Wesley, 2003 (estilos de integração: transferência de arquivos, banco compartilhado, chamada remota, mensageria) — **verificado** (título, ano e os quatro estilos, por fontes secundárias).
- ELMASRI, R.; NAVATHE, S. B. *Sistemas de Banco de Dados*. São Paulo: Pearson (edição em português localizada: 6ª ed., 2011; o original em inglês, *Fundamentals of Database Systems*, 7ª ed., consta nos catálogos com ano 2015, 2016 ou 2017) — **verificado** em catálogos online.
- Edital Transpetro nº 04/2026.4, Anexo IV, item 1.19.
