---
name: site-estatico
description: Define a arquitetura, implementação, validação e manutenção da plataforma estática de estudos do projeto Transpetro 2026.4 — Ênfase 5, utilizando HTML, CSS e JavaScript, com persistência local e publicação no GitHub Pages.
---

# Skill: Site Estático

## 1. Objetivo

Desenvolver e manter uma plataforma de estudos funcional para o concurso Transpetro 2026.4 — Ênfase 5: Análise de Sistemas: Processos de Negócios.

A plataforma deve integrar os materiais didáticos e as ferramentas de acompanhamento do candidato em uma aplicação web estática.

O projeto deve funcionar sem servidor próprio, banco de dados remoto ou API externa para suas funcionalidades essenciais.

Tecnologias principais:

- HTML5.
- CSS3.
- JavaScript.
- JSON.
- localStorage.
- GitHub Pages.

A aplicação deve ser responsiva, acessível, rápida e de fácil manutenção.

## 2. Quando utilizar esta Skill

Utilizar esta Skill para:

- Criar a plataforma inicial.
- Implementar páginas e componentes.
- Criar navegação.
- Integrar conteúdo didático.
- Implementar banco de questões.
- Criar simulados interativos.
- Implementar cronômetro.
- Criar flashcards.
- Implementar revisão espaçada.
- Criar caderno de erros.
- Implementar indicadores de desempenho.
- Criar importação e exportação de dados.
- Corrigir problemas visuais ou funcionais.
- Preparar publicação no GitHub Pages.
- Validar responsividade e acessibilidade.

## 3. Pré-requisitos

Antes de alterar o site:

1. Consultar `CLAUDE.md`.
2. Consultar `PROMPT-MESTRE.md`.
3. Consultar `ESTRUTURA.txt`.
4. Consultar `README.md`.
5. Consultar `docs/edital/matriz-conteudo.md`.
6. Consultar `docs/edital/controle-cobertura.md`.
7. Consultar as Skills de conteúdo, questões, simulados e NotebookLM.
8. Inspecionar os arquivos existentes em `site/`.

Não reconstruir funcionalidades que já estejam implementadas sem antes avaliar seu estado atual.

Não substituir arquivos funcionais por versões simplificadas sem justificativa.

## 4. Princípios arquiteturais

### 4.1. Aplicação estática

O site deve ser executado diretamente pelo navegador e publicado no GitHub Pages.

Não utilizar como requisito funcional:

- Backend próprio.
- Banco de dados remoto.
- Servidor de aplicação.
- Autenticação externa.
- API paga.
- Serviço de terceiros.
- Chaves de API.

Ferramentas externas podem ser utilizadas durante o desenvolvimento, mas não devem ser indispensáveis para a utilização normal da plataforma.

### 4.2. Separação de responsabilidades

Separar claramente:

- Estrutura HTML.
- Apresentação CSS.
- Comportamento JavaScript.
- Conteúdo didático.
- Banco de questões.
- Configurações dos simulados.
- Dados de progresso.
- Configurações do usuário.

Não concentrar toda a aplicação em um único arquivo.

### 4.3. Fonte única de conteúdo

Evitar duplicação desnecessária.

O conteúdo editorial deve ter sua referência nos arquivos Markdown de `conteudo/`.

Os arquivos JSON de `site/assets/data/` devem alimentar a aplicação.

O processo de atualização deve permitir converter ou sincronizar os materiais sem manter versões contraditórias.

### 4.4. Independência de execução

O site deve funcionar:

- No GitHub Pages.
- Em servidor HTTP local.
- Em navegadores modernos.
- Em desktop.
- Em dispositivos móveis.

Não depender de caminhos absolutos específicos da máquina de desenvolvimento.

## 5. Arquitetura de diretórios

Utilizar a estrutura definida em `ESTRUTURA.txt`.

Estrutura principal:

```text
site/
│
├── index.html
├── .nojekyll
│
├── assets/
│   ├── css/
│   │   ├── base.css
│   │   ├── layout.css
│   │   ├── components.css
│   │   ├── themes.css
│   │   └── responsive.css
│   │
│   ├── js/
│   │   ├── app.js
│   │   ├── theme.js
│   │   ├── navigation.js
│   │   ├── storage.js
│   │   ├── progress.js
│   │   ├── questions.js
│   │   ├── simulations.js
│   │   ├── flashcards.js
│   │   ├── reviews.js
│   │   ├── error-notebook.js
│   │   └── timer.js
│   │
│   └── data/
│       ├── edital.json
│       ├── conteudo.json
│       ├── questoes.json
│       ├── simulados.json
│       └── flashcards.json
│
├── paginas/
│   ├── plano-estudos.html
│   ├── conteudo.html
│   ├── questoes.html
│   ├── simulados.html
│   ├── flashcards.html
│   ├── revisoes.html
│   ├── caderno-erros.html
│   └── desempenho.html
│
└── componentes/
    ├── header.html
    ├── sidebar.html
    └── footer.html
```

A estrutura pode ser ajustada quando houver justificativa técnica.

### 5.1. Observação sobre componentes HTML

O GitHub Pages não realiza composição automática de arquivos HTML.

Portanto, arquivos em `componentes/` não serão incluídos automaticamente nas páginas.

Para reutilizar componentes, escolher uma estratégia compatível com a arquitetura estática:

- Renderização por JavaScript.
- Templates JavaScript.
- Geração de páginas durante o desenvolvimento.
- HTML compartilhado por um mecanismo simples de inclusão.

Não implementar requisições de componentes de forma que dependam de execução por `file://`.

A aplicação deve ser testada em servidor HTTP local e no GitHub Pages.

## 6. Identidade visual

### 6.1. Direção estética

Adotar uma identidade visual técnica, editorial e industrial.

Referências visuais:

- Ambientes corporativos de engenharia.
- Sistemas técnicos.
- Publicações editoriais.
- Documentação de tecnologia.
- Painéis de monitoramento discretos.

A interface deve transmitir organização, precisão e concentração.

### 6.2. Paleta de cores

Tema escuro como padrão.

Paleta sugerida:

| Elemento | Cor de referência |
|---|---|
| Fundo principal | Grafite profundo |
| Fundo secundário | Azul-marinho escuro |
| Superfícies | Grafite médio |
| Texto principal | Branco suave |
| Texto secundário | Cinza |
| Destaque principal | Azul petróleo |
| Destaque secundário | Âmbar |
| Sucesso | Verde discreto |
| Erro | Vermelho discreto |

Utilizar variáveis CSS para centralizar a paleta.

Evitar:

- Gradientes decorativos.
- Excesso de cores.
- Sombras exageradas.
- Cartões excessivamente arredondados.
- Elementos decorativos sem função.
- Aparência genérica de dashboard produzido automaticamente.

### 6.3. Tipografia

Utilizar tipografia legível e consistente.

Estabelecer hierarquia para:

- Títulos.
- Subtítulos.
- Corpo do texto.
- Metadados.
- Indicadores.
- Código e fórmulas.

Priorizar fontes de sistema ou fontes locais para evitar dependência externa.

### 6.4. Layout

A interface deve utilizar:

- Sidebar funcional.
- Área principal de conteúdo.
- Cabeçalho compacto.
- Indicadores de progresso discretos.
- Separadores visuais.
- Grids e tabelas quando apropriados.
- Espaçamento consistente.

A sidebar deve permitir acesso rápido às principais funcionalidades.

No mobile, a navegação deve ser adaptada sem comprometer a leitura.

## 7. Tema claro e escuro

O tema escuro deve ser o padrão inicial.

Implementar:

- Alternância entre tema claro e escuro.
- Persistência da preferência.
- Aplicação do tema antes da renderização visual.
- Contraste adequado em ambos os temas.

Utilizar variáveis CSS e um atributo de tema no elemento raiz.

A inicialização do tema deve ocorrer antes da exibição do conteúdo, evitando o flash de tema incorreto.

Não manter cores fixas incompatíveis com a troca de tema em componentes isolados.

## 8. Navegação e estrutura funcional

A plataforma deve possuir as seguintes áreas:

### 8.1. Página inicial

Apresentar:

- Identificação do concurso.
- Ênfase.
- Banca organizadora.
- Progresso geral.
- Resumo da rotina de estudos.
- Próximas revisões.
- Último simulado.
- Atalhos para as principais funcionalidades.

A página inicial deve priorizar informações úteis para iniciar o estudo.

Evitar indicadores decorativos sem utilidade prática.

### 8.2. Plano de estudos

Permitir:

- Visualização do plano diário.
- Visualização semanal.
- Visualização mensal.
- Organização por módulo.
- Registro de sessões de estudo.
- Marcação de atividades concluídas.
- Identificação de atividades pendentes.
- Ajuste manual de atividades.
- Registro de tempo estudado.

O plano deve ser orientado pela metodologia definida em `docs/estrategia/metodologia-estudo.md`.

Não gerar metas ou cronogramas arbitrários sem considerar a capacidade de estudo registrada.

### 8.3. Conteúdo

Permitir:

- Navegação pelos nove módulos.
- Visualização dos assuntos.
- Leitura do conteúdo.
- Identificação do item correspondente do edital.
- Marcação de conteúdo como estudado.
- Marcação de conteúdo como revisado.
- Acompanhamento da cobertura.

Manter a organização alinhada à matriz do edital.

### 8.4. Questões

Permitir:

- Seleção por módulo.
- Seleção por assunto.
- Seleção por dificuldade.
- Seleção por origem.
- Resolução individual.
- Exibição de comentários.
- Registro de acertos e erros.
- Marcação de questões.
- Inclusão no caderno de erros.

As questões devem preservar a identificação oficial, adaptada ou autoral.

### 8.5. Simulados

Permitir:

- Simulados completos de 70 questões.
- Simulados específicos de 50 questões.
- Simulados por módulo.
- Simulados por assunto.
- Simulados de revisão.
- Simulados diagnósticos.

Implementar:

- Cronômetro.
- Navegação entre questões.
- Seleção de alternativas.
- Marcação para revisão.
- Indicador de questões respondidas.
- Confirmação de entrega.
- Correção automática.
- Resultado detalhado.
- Gabarito comentado após finalização.

Não revelar respostas durante a aplicação de simulados avaliativos.

### 8.6. Flashcards

Permitir:

- Exibição da pergunta.
- Revelação da resposta.
- Navegação entre cartões.
- Classificação de dificuldade.
- Marcação de domínio.
- Registro de revisão.
- Filtros por módulo e assunto.

Os flashcards devem ser vinculados ao conteúdo do edital.

### 8.7. Revisões

Permitir:

- Visualização das revisões pendentes.
- Revisões do dia.
- Revisões atrasadas.
- Revisões futuras.
- Filtros por módulo.
- Registro de conclusão.
- Identificação de assuntos com dificuldade.

A fila deve seguir a metodologia de revisão definida no projeto.

### 8.8. Caderno de erros

Permitir:

- Registrar questões incorretas.
- Registrar questões acertadas com dificuldade.
- Classificar o tipo de erro.
- Adicionar observações.
- Revisar questões.
- Marcar erro como resolvido.
- Filtrar por módulo e assunto.

Tipos de erro sugeridos:

- Falta de conhecimento.
- Interpretação.
- Confusão conceitual.
- Cálculo.
- Desatenção.
- Gestão de tempo.
- Chute.
- Dúvida entre alternativas.

### 8.9. Desempenho

Apresentar:

- Aproveitamento geral.
- Aproveitamento por módulo.
- Aproveitamento por assunto.
- Histórico de simulados.
- Evolução temporal.
- Tempo médio por questão.
- Questões em branco.
- Principais dificuldades.
- Revisões concluídas.

Não apresentar estatísticas com aparência de precisão quando a amostra for insuficiente.

Explicitar limitações quando houver poucos registros.

## 9. Arquitetura JavaScript

### 9.1. Organização modular

Cada arquivo deve possuir responsabilidade bem definida.

| Arquivo | Responsabilidade |
|---|---|
| app.js | Inicialização e integração geral |
| theme.js | Tema claro e escuro |
| navigation.js | Navegação e menu |
| storage.js | Persistência local |
| progress.js | Progresso e indicadores |
| questions.js | Questões individuais |
| simulations.js | Aplicação e correção de simulados |
| flashcards.js | Cartões de revisão |
| reviews.js | Revisão espaçada |
| error-notebook.js | Caderno de erros |
| timer.js | Cronômetro |

Evitar variáveis globais desnecessárias.

Priorizar módulos JavaScript quando a estrutura de execução e os caminhos do projeto permitirem.

Não utilizar bibliotecas externas sem necessidade técnica justificada.

### 9.2. Inicialização

A inicialização deve:

1. Carregar as preferências do usuário.
2. Aplicar o tema.
3. Carregar os dados.
4. Inicializar a navegação.
5. Recuperar o progresso.
6. Inicializar a página atual.
7. Tratar falhas de carregamento.

Não permitir que a falha de um componente secundário impeça o funcionamento das demais áreas.

### 9.3. Tratamento de erros

Implementar mensagens claras para:

- Falha no carregamento de dados.
- JSON inválido.
- Dados locais corrompidos.
- Erro ao salvar progresso.
- Falha na importação.
- Estrutura de dados incompatível.
- Tentativa de acesso a conteúdo inexistente.

Evitar falhas silenciosas.

## 10. Persistência de dados

### 10.1. Tecnologia

Utilizar `localStorage` para persistir os dados do candidato.

Não exigir conta ou login.

Informar claramente que os dados permanecem no navegador e no dispositivo utilizado.

### 10.2. Dados persistidos

Armazenar:

- Preferências de tema.
- Configurações pessoais.
- Plano de estudos.
- Conteúdos estudados.
- Questões respondidas.
- Questões marcadas.
- Histórico de simulados.
- Flashcards revisados.
- Fila de revisão.
- Caderno de erros.
- Estatísticas de desempenho.

### 10.3. Organização das chaves

Utilizar prefixo e versão.

Exemplo:

```javascript
const STORAGE_PREFIX = "transpetro_enfase5";
const STORAGE_VERSION = 1;

const STORAGE_KEYS = {
  settings: `${STORAGE_PREFIX}_settings`,
  progress: `${STORAGE_PREFIX}_progress`,
  simulations: `${STORAGE_PREFIX}_simulations`,
  reviews: `${STORAGE_PREFIX}_reviews`,
  flashcards: `${STORAGE_PREFIX}_flashcards`,
  errors: `${STORAGE_PREFIX}_errors`
};
```

O exemplo é ilustrativo. A implementação definitiva deve utilizar um padrão único em toda a aplicação.

### 10.4. Versionamento e migração

Implementar controle de versão dos dados.

Quando a estrutura for alterada:

- Identificar a versão anterior.
- Migrar os dados compatíveis.
- Preservar informações existentes.
- Informar falhas de migração.
- Evitar apagar dados sem autorização.

Não modificar silenciosamente os dados armazenados.

### 10.5. Backup e restauração

Implementar:

- Exportação dos dados em JSON.
- Importação de arquivo JSON.
- Validação do arquivo importado.
- Confirmação antes de substituir dados existentes.
- Opção de preservar dados atuais.
- Mensagem de sucesso ou erro.

A exportação deve incluir a versão do esquema e a data de geração.

Não incluir arquivos de conteúdo estático desnecessariamente no backup pessoal.

### 10.6. Limitações do armazenamento

O localStorage possui capacidade limitada e está sujeito às regras do navegador.

Implementar:

- Tratamento de quota excedida.
- Tratamento de dados inválidos.
- Backup periódico sugerido ao usuário.
- Evitar armazenar conteúdo estático redundante.
- Evitar guardar grandes quantidades de dados desnecessários.

Para o volume esperado do projeto, priorizar uma implementação simples.

## 11. Modelo de dados

### 11.1. Conteúdo

Cada assunto deve possuir:

- ID.
- Módulo.
- Título.
- Descrição.
- Item do edital relacionado.
- Caminho ou identificador do material.
- Nível de profundidade.
- Status de produção.
- Status de estudo.

### 11.2. Questões

Cada questão deve possuir:

- ID.
- Origem.
- Módulo.
- Assunto.
- Dificuldade.
- Enunciado.
- Alternativas.
- Gabarito.
- Comentário.
- Referência.
- Status de validação.

### 11.3. Simulados

Cada simulado deve possuir:

- ID.
- Título.
- Tipo.
- Objetivo.
- Quantidade de questões.
- Lista de IDs das questões.
- Distribuição temática.
- Tempo configurado.
- Data de criação.
- Versão.

### 11.4. Tentativas

Cada tentativa deve possuir:

- ID da tentativa.
- ID do simulado.
- Data de início.
- Data de conclusão.
- Respostas.
- Tempo utilizado.
- Resultado.
- Questões marcadas.
- Status de conclusão.

Não sobrescrever tentativas anteriores.

Cada aplicação deve gerar um registro independente.

## 12. Interface e experiência do usuário

### 12.1. Princípios

Priorizar:

- Clareza.
- Consistência.
- Rapidez.
- Legibilidade.
- Baixa carga cognitiva.
- Navegação previsível.
- Feedback imediato.

### 12.2. Componentes

Criar componentes reutilizáveis para:

- Sidebar.
- Header.
- Footer.
- Botões.
- Indicadores de progresso.
- Tabelas.
- Listas.
- Formulários.
- Questões.
- Alternativas.
- Modais.
- Alertas.
- Cronômetro.
- Gráficos.

### 12.3. Feedback

Toda ação importante deve produzir feedback apropriado.

Exemplos:

- Questão salva.
- Atividade concluída.
- Simulado finalizado.
- Dados exportados.
- Dados importados.
- Erro ao salvar.
- Revisão registrada.

Não utilizar notificações excessivas.

### 12.4. Acessibilidade

Implementar:

- HTML semântico.
- Navegação por teclado.
- Estados de foco visíveis.
- Contraste adequado.
- Rótulos em campos.
- Textos alternativos em imagens.
- Botões com nomes acessíveis.
- Hierarquia correta de títulos.
- Feedback que não dependa exclusivamente de cores.

## 13. Responsividade

A aplicação deve funcionar em:

- Desktop.
- Notebook.
- Tablet.
- Smartphone.

Adaptar:

- Sidebar.
- Navegação.
- Tabelas.
- Questões.
- Simulados.
- Gráficos.
- Formulários.
- Modais.

Evitar rolagem horizontal desnecessária.

As questões devem ser confortáveis de ler e responder em telas menores.

## 14. Gráficos e indicadores

Utilizar visualizações simples e informativas.

Gráficos recomendados:

- Evolução de aproveitamento.
- Aproveitamento por módulo.
- Desempenho por assunto.
- Tempo de estudo.
- Revisões realizadas.

Não utilizar gráficos sem dados suficientes.

Não apresentar informações fictícias como se fossem resultados reais.

Quando não houver histórico, exibir uma mensagem orientando o candidato a realizar atividades.

Priorizar gráficos leves e sem dependências externas.

## 15. GitHub Pages

### 15.1. Publicação

O projeto deve ser compatível com GitHub Pages.

Configurar o workflow:

`.github/workflows/deploy-pages.yml`

O processo deve:

1. Obter o código do repositório.
2. Preparar os arquivos estáticos.
3. Validar a estrutura necessária.
4. Publicar a pasta `site/`.
5. Permitir atualização automática após alterações na branch configurada.

### 15.2. Caminhos relativos

Não assumir que o site será publicado na raiz do domínio.

O projeto pode ser publicado em um endereço com o nome do repositório no caminho.

Utilizar caminhos compatíveis com GitHub Pages.

Evitar referências absolutas como:

```text
/assets/css/base.css
```

quando isso puder causar falhas em publicações sob subdiretório.

Validar todos os caminhos de arquivos, imagens, scripts e dados JSON.

### 15.3. Arquivo .nojekyll

Manter `.nojekyll` quando necessário para evitar processamento indevido de diretórios e arquivos pelo Jekyll.

### 15.4. Teste de publicação

Após configurar a publicação:

- Verificar carregamento da página inicial.
- Verificar carregamento dos arquivos CSS.
- Verificar carregamento dos arquivos JavaScript.
- Verificar leitura dos arquivos JSON.
- Verificar navegação entre páginas.
- Verificar persistência.
- Verificar tema.
- Verificar responsividade.

## 16. Segurança e privacidade

Como a aplicação não exige backend:

- Não armazenar senhas.
- Não solicitar dados pessoais desnecessários.
- Não enviar dados do candidato para terceiros.
- Não inserir chaves de API no código.
- Não carregar scripts externos sem justificativa.
- Não executar conteúdo importado como código.
- Validar arquivos JSON importados.
- Evitar injeção de HTML com dados do usuário.

Utilizar `textContent` para inserir conteúdo textual dinâmico sempre que possível.

Quando for necessário renderizar HTML, sanitizar e controlar rigorosamente as fontes.

Informar ao usuário que limpar os dados do navegador pode apagar o progresso se não houver backup.

## 17. Desempenho

Priorizar:

- Carregamento rápido.
- Arquivos leves.
- CSS organizado.
- JavaScript modular.
- Carregamento sob demanda quando necessário.
- Dados JSON separados por funcionalidade, quando houver benefício.
- Imagens otimizadas.
- Ausência de bibliotecas desnecessárias.

Não carregar todo o banco de questões na página inicial.

Evitar renderizar centenas de elementos simultaneamente quando não forem necessários.

## 18. Testes e validação

### 18.1. Testes funcionais

Validar:

- Navegação.
- Tema claro e escuro.
- Carregamento de conteúdo.
- Questões.
- Correção.
- Simulados.
- Cronômetro.
- Flashcards.
- Revisões.
- Caderno de erros.
- Indicadores.
- Exportação.
- Importação.
- Persistência após recarregar a página.

### 18.2. Testes de integridade

Verificar:

- JSON válido.
- IDs únicos.
- Referências existentes.
- Questões com cinco alternativas.
- Gabaritos válidos.
- Simulados com quantidade correta.
- Correspondência entre questões e módulos.
- Ausência de referências quebradas.
- Ausência de dados fictícios nos indicadores.

### 18.3. Testes de responsividade

Testar pelo menos:

- Desktop.
- Tablet.
- Smartphone.

Verificar especialmente a aplicação de simulados e a leitura de conteúdo extenso.

### 18.4. Testes de persistência

Executar o seguinte cenário:

1. Abrir o site.
2. Alterar o tema.
3. Estudar um conteúdo.
4. Responder questões.
5. Registrar um erro.
6. Realizar parte de um simulado.
7. Recarregar a página.
8. Confirmar a recuperação dos dados.
9. Exportar o backup.
10. Limpar os dados de teste.
11. Importar o backup.
12. Confirmar a restauração.

Realizar os testes sem comprometer os dados reais do candidato.

## 19. Etapas de desenvolvimento

Não desenvolver toda a aplicação de uma só vez sem validação intermediária.

Seguir a sequência:

### Fase 1 — Auditoria
- Inspecionar a estrutura existente.
- Identificar funcionalidades implementadas.
- Verificar inconsistências.
- Documentar pendências.

### Fase 2 — Fundação
- Criar estrutura HTML.
- Criar layout.
- Implementar sidebar.
- Implementar navegação.
- Implementar temas.
- Implementar persistência.

### Fase 3 — Conteúdo
- Integrar módulos.
- Integrar assuntos.
- Integrar materiais didáticos.
- Implementar progresso de conteúdo.

### Fase 4 — Questões
- Integrar banco.
- Implementar filtros.
- Implementar resolução.
- Implementar comentários.
- Registrar desempenho.

### Fase 5 — Simulados
- Implementar seleção.
- Implementar cronômetro.
- Implementar navegação.
- Implementar entrega.
- Implementar correção.
- Implementar histórico.

### Fase 6 — Revisão
- Implementar flashcards.
- Implementar fila de revisão.
- Implementar caderno de erros.
- Integrar revisão espaçada.

### Fase 7 — Desempenho
- Implementar indicadores.
- Implementar gráficos.
- Implementar comparações históricas.

### Fase 8 — Publicação
- Configurar GitHub Pages.
- Testar caminhos.
- Validar responsividade.
- Validar persistência.
- Testar publicação.

### Fase 9 — Auditoria final
- Executar testes.
- Corrigir erros.
- Atualizar documentação.
- Registrar pendências.

## 20. Critérios de conclusão

A plataforma somente pode ser considerada funcional quando:

- [ ] Estrutura estática implementada.
- [ ] Navegação funcional.
- [ ] Tema escuro padrão.
- [ ] Alternância de tema funcional.
- [ ] Layout responsivo.
- [ ] Conteúdo integrado.
- [ ] Banco de questões integrado.
- [ ] Simulados funcionais.
- [ ] Cronômetro funcional.
- [ ] Correção automática funcional.
- [ ] Gabaritos comentados disponíveis.
- [ ] Flashcards funcionais.
- [ ] Revisão espaçada funcional.
- [ ] Caderno de erros funcional.
- [ ] Indicadores de desempenho funcionais.
- [ ] Persistência local validada.
- [ ] Exportação e importação validadas.
- [ ] Caminhos compatíveis com GitHub Pages.
- [ ] Ausência de erros críticos no console.
- [ ] Testes de responsividade concluídos.
- [ ] Documentação atualizada.

Funcionalidades ainda não implementadas devem ser identificadas como pendentes, nunca apresentadas como concluídas.

## 21. Comportamento obrigatório do Claude

Ao desenvolver ou atualizar a plataforma:

1. Inspecionar o código existente antes de alterar.
2. Preservar funcionalidades já validadas.
3. Respeitar a arquitetura estática.
4. Manter conteúdo e lógica separados.
5. Não adicionar dependências sem justificativa.
6. Não inventar dados para preencher a interface.
7. Não apresentar indicadores fictícios.
8. Validar todos os caminhos de publicação.
9. Testar as funcionalidades após alterações.
10. Verificar persistência antes de concluir.
11. Atualizar documentação.
12. Registrar problemas conhecidos.
13. Informar arquivos criados, modificados e removidos.
14. Não declarar funcionalidades concluídas sem teste.

## 22. Princípio central

A plataforma deve ser uma ferramenta de estudo confiável, não apenas uma interface visual.

A prioridade é oferecer conteúdo organizado, aplicação de questões, simulados realistas, acompanhamento de desempenho e preservação do progresso do candidato.

Toda funcionalidade deve ter propósito pedagógico ou operacional claro, funcionar sem serviços externos essenciais e ser sustentável dentro de uma arquitetura estática.