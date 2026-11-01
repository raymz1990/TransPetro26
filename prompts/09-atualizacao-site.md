# 09 — ATUALIZAÇÃO E IMPLEMENTAÇÃO DO SITE DE ESTUDOS

## 1. Objetivo

Desenvolver, atualizar e integrar a plataforma de estudos do projeto:

**Transpetro 2026.4 — Ênfase 5: Análise de Sistemas: Processos de Negócios**

A plataforma deverá funcionar como um ambiente pessoal de preparação para o concurso, reunindo:

- Plano de estudos.
- Conteúdo teórico.
- Questões comentadas.
- Simulados.
- Flashcards.
- Revisões espaçadas.
- Caderno de erros.
- Cronômetro de estudos.
- Indicadores de desempenho.
- Progresso por módulo e assunto.
- Materiais de apoio do NotebookLM.

O resultado deverá ser um site estático, responsivo, funcional e compatível com GitHub Pages.

**Princípio central:** o site deverá refletir os materiais efetivamente produzidos e validados no projeto. Não crie conteúdos, questões, gabaritos ou indicadores fictícios para preencher a interface.

---

## 2. Preparação obrigatória

Antes de realizar qualquer alteração, leia:

- `CLAUDE.md`
- `PROMPT-MESTRE.md`
- `ESTRUTURA.txt`
- `.claude/skills/site-estatico/SKILL.md`

Verifique os materiais existentes em:

- `conteudo/`
- `banco-questoes/`
- `notebooklm/`
- `site/`

### Condições de desenvolvimento

Antes de implementar, identifique:

1. O que já existe.
2. O que está funcional.
3. O que está parcialmente implementado.
4. O que está ausente.
5. O que possui erros.
6. O que ainda está pendente de validação.
7. O que precisa ser atualizado.

Não recrie arquivos ou funcionalidades que já estejam funcionando sem necessidade.

Não substitua implementações existentes sem avaliar seus efeitos.

---

## 3. Arquitetura técnica

A plataforma deverá utilizar:

- HTML5.
- CSS3.
- JavaScript moderno.
- JSON para os dados estruturados.
- localStorage para persistência local.
- GitHub Pages para hospedagem.

### Restrições

- Não utilizar backend obrigatório.
- Não exigir banco de dados externo.
- Não depender de API paga.
- Não exigir autenticação.
- Não depender de servidor próprio.
- Não exigir instalação de pacotes para o uso normal da plataforma.
- Não utilizar frameworks pesados sem justificativa técnica.
- Não incluir dependências externas desnecessárias.

O site deverá funcionar como aplicação estática.

### Compatibilidade

Garantir funcionamento:

- Localmente por servidor HTTP.
- No GitHub Pages.
- Em navegadores modernos.
- Em desktop.
- Em tablets.
- Em smartphones.

Evitar caminhos absolutos que funcionem apenas no ambiente local.

Utilizar caminhos relativos compatíveis com o endereço do repositório no GitHub Pages.

---

## 4. Identidade visual

Manter uma identidade visual técnica, editorial e industrial.

### Direção visual

Referências conceituais:

- Ambiente corporativo de engenharia.
- Documentação técnica.
- Sistemas de controle e operação.
- Painéis analíticos.
- Publicações técnicas.

### Paleta

Tema escuro como padrão:

- Grafite.
- Azul-marinho.
- Azul petróleo.
- Cinza técnico.
- Âmbar para destaques.
- Cores de estado para alertas e progresso.

Tema claro como alternativa.

### Características

- Layout limpo.
- Hierarquia visual evidente.
- Tipografia legível.
- Navegação lateral funcional.
- Separadores discretos.
- Tabelas bem organizadas.
- Indicadores objetivos.
- Gráficos sem excesso de elementos.
- Animações discretas.
- Boa utilização do espaço.

### Evitar

- Aparência genérica de dashboard produzido por IA.
- Gradientes excessivos.
- Cards com bordas excessivamente arredondadas.
- Ícones decorativos sem função.
- Emojis na interface.
- Animações desnecessárias.
- Excesso de cores.
- Elementos que ocupam espaço sem acrescentar informação.

A interface deve priorizar produtividade e leitura prolongada.

---

## 5. Estrutura da aplicação

Verifique a estrutura atual de `site/` e implemente ou atualize as seguintes áreas.

### 5.1 Página inicial — Dashboard

Deverá apresentar:

- Nome do concurso.
- Ênfase.
- Data da prova, quando confirmada.
- Dias restantes, quando a data oficial estiver disponível.
- Progresso geral.
- Progresso por módulo.
- Horas estudadas.
- Questões respondidas.
- Taxa de acerto.
- Revisões pendentes.
- Flashcards pendentes.
- Últimos assuntos estudados.
- Próximas atividades.
- Acesso rápido às funcionalidades.

Os indicadores devem ser calculados com dados reais.

Não apresentar valores fictícios.

Se ainda não houver histórico, apresentar estado inicial informativo, sem simular desempenho.

### 5.2 Plano de estudos

Criar uma área para:

- Visualizar planejamento diário.
- Visualizar planejamento semanal.
- Visualizar planejamento mensal.
- Organizar assuntos.
- Registrar sessões de estudo.
- Marcar atividades concluídas.
- Registrar tempo dedicado.
- Acompanhar atrasos.
- Reorganizar atividades pendentes.

O planejamento deverá ser configurável.

Não fixar uma carga horária sem confirmação do usuário.

Permitir ajustar:

- Data de início.
- Data da prova.
- Horas disponíveis.
- Dias de estudo.
- Tempo por sessão.
- Prioridade dos módulos.

O plano deverá considerar a matriz de conteúdo e as prioridades registradas no projeto.

### 5.3 Conteúdo teórico

Criar uma área de navegação por:

- Módulo.
- Assunto.
- Subassunto.
- Item do edital.

Cada página deverá apresentar:

- Identificação do conteúdo.
- Referência ao edital.
- Texto teórico.
- Tabelas.
- Fórmulas.
- Exemplos.
- Pontos de atenção.
- Síntese.
- Referências.

Permitir:

- Marcar assunto como iniciado.
- Marcar assunto como concluído.
- Registrar nível de domínio.
- Adicionar observações.
- Criar marcador de revisão.

O status de domínio deverá ser independente do status de leitura.

Não marcar conteúdo como validado apenas porque foi acessado.

Conteúdos ainda não validados deverão apresentar identificação clara.

### 5.4 Questões

Criar banco de questões com:

- Filtro por módulo.
- Filtro por assunto.
- Filtro por origem.
- Filtro por dificuldade.
- Filtro por status.
- Busca textual.
- Resolução individual.
- Exibição do gabarito.
- Comentários.
- Histórico de tentativas.

Cada questão deverá preservar:

- ID.
- Origem.
- Fonte.
- Módulo.
- Assunto.
- Item do edital.
- Dificuldade.
- Enunciado.
- Alternativas.
- Gabarito.
- Comentários.
- Status de validação.

Separar visualmente:

- Oficiais.
- Adaptadas.
- Autorais.

Não exibir uma questão pendente como se fosse validada.

### 5.5 Simulados

Implementar:

- Simulado diagnóstico.
- Simulado por módulo.
- Simulado por assunto.
- Simulado de revisão.
- Simulado específico.
- Simulado completo.

As quantidades e estruturas deverão respeitar o edital oficial e os simulados efetivamente cadastrados.

Funcionalidades:

- Seleção de simulado.
- Início e encerramento.
- Cronômetro.
- Navegação entre questões.
- Marcação de questões.
- Salvamento de respostas.
- Finalização.
- Correção.
- Resultado.
- Desempenho por módulo.
- Desempenho por assunto.
- Revisão das respostas.

Não permita que a alteração de uma questão no banco modifique retroativamente uma tentativa já concluída.

O histórico deverá preservar a versão da questão utilizada na tentativa.

### 5.6 Flashcards

Implementar:

- Frente e verso.
- Revelação da resposta.
- Classificação de dificuldade.
- Registro de acerto e erro.
- Próxima revisão.
- Filtros por módulo.
- Filtros por assunto.
- Sessão de revisão.
- Estatísticas.

Separar os dados estáticos dos cartões do histórico pessoal de revisão.

Não permitir que a atualização do arquivo JSON apague o histórico do usuário.

### 5.7 Revisões espaçadas

Implementar:

- Revisões do dia.
- Revisões atrasadas.
- Revisões futuras.
- Revisões por módulo.
- Revisões por assunto.
- Histórico.
- Desempenho.

Utilizar os intervalos configurados no projeto como parâmetros iniciais.

Não tratar esses intervalos como regras científicas universais.

Permitir ajustar os intervalos futuramente sem perder o histórico.

### 5.8 Caderno de erros

Criar uma área que registre automaticamente erros originados de:

- Questões.
- Simulados.
- Flashcards.

Permitir também cadastro manual.

Cada ocorrência deverá conter:

- Data.
- Questão ou cartão de origem, quando existente.
- Módulo.
- Assunto.
- Item do edital.
- Tipo de erro.
- Resposta escolhida.
- Resposta correta.
- Justificativa.
- Observações.
- Ação corretiva.
- Status de resolução.
- Próxima revisão.

Categorias sugeridas:

- Falta de conhecimento.
- Confusão conceitual.
- Interpretação do enunciado.
- Desatenção.
- Erro de cálculo.
- Memorização insuficiente.
- Aplicação inadequada.
- Dúvida entre alternativas.

Permitir acompanhar reincidências.

### 5.9 Cronômetro

Implementar cronômetro de estudo com:

- Iniciar.
- Pausar.
- Retomar.
- Finalizar.
- Registrar sessão.
- Associar sessão a módulo e assunto.
- Registrar observação.

Permitir configurar a duração de uma sessão.

O tempo deverá ser registrado de forma consistente, inclusive quando a página for recarregada.

Evitar contabilizar duas vezes uma sessão.

### 5.10 Desempenho

Criar relatórios com:

- Horas por dia.
- Horas por semana.
- Horas por mês.
- Questões respondidas.
- Taxa de acerto.
- Desempenho por módulo.
- Desempenho por assunto.
- Evolução temporal.
- Revisões realizadas.
- Flashcards dominados.
- Erros recorrentes.

Os gráficos deverão utilizar dados efetivamente registrados.

Diferenciar:

- Ausência de dados.
- Desempenho zero.
- Conteúdo não estudado.
- Conteúdo ainda não avaliado.

---

## 6. Persistência e integridade dos dados

A plataforma deverá utilizar localStorage.

Crie uma camada centralizada de persistência, evitando gravações independentes e desorganizadas em cada página.

### Requisitos

- Estrutura de dados documentada.
- Chaves padronizadas.
- Controle de versão dos dados.
- Migração entre versões.
- Tratamento de dados ausentes.
- Tratamento de JSON inválido.
- Prevenção de duplicidades.
- Salvamento seguro.
- Recuperação após atualização da página.

### Separação dos dados

Manter separados:

1. Dados estáticos do projeto.
2. Preferências do usuário.
3. Histórico de estudos.
4. Histórico de questões.
5. Histórico de simulados.
6. Histórico de flashcards.
7. Revisões.
8. Caderno de erros.

### Backup

Implementar:

- Exportação completa dos dados em JSON.
- Importação de backup.
- Validação do arquivo importado.
- Confirmação antes de substituir dados existentes.
- Identificação da versão do backup.
- Mensagens de sucesso e erro.

Não apagar dados existentes durante uma atualização comum do site.

Não depender apenas de localStorage para informações que precisam ser preservadas indefinidamente: orientar o usuário a exportar backups periodicamente.

---

## 7. Organização dos dados JSON

Verifique os arquivos existentes em `site/assets/data/`.

A estrutura deverá permitir carregar separadamente:

- `edital.json`
- `conteudo.json`
- `questoes.json`
- `simulados.json`
- `flashcards.json`

Crie arquivos adicionais somente quando houver necessidade real.

### Regras

- IDs únicos e estáveis.
- Relacionamentos consistentes.
- Campos documentados.
- Tipos de dados previsíveis.
- Referências aos arquivos de origem.
- Status de validação.
- Compatibilidade com o banco de questões.

Evite duplicar conteúdo extenso em vários arquivos JSON.

Prefira armazenar o conteúdo em um único local e utilizar referências por ID.

Não inclua informações pessoais desnecessárias nos dados estáticos.

---

## 8. Componentes e organização do código

Organize o código de maneira modular.

Considere:

```text
site/
├── index.html
├── .nojekyll
├── assets/
│   ├── css/
│   │   ├── base.css
│   │   ├── layout.css
│   │   ├── components.css
│   │   ├── themes.css
│   │   └── responsive.css
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
│   └── data/
└── paginas/
```

A estrutura acima é uma referência. Adapte-a à implementação existente, preservando a organização e evitando duplicações.

### Regras de desenvolvimento

- Separar lógica, dados e apresentação.
- Evitar arquivos JavaScript excessivamente grandes.
- Evitar variáveis globais desnecessárias.
- Utilizar funções reutilizáveis.
- Tratar erros.
- Documentar funções complexas.
- Utilizar nomes consistentes.
- Evitar código duplicado.
- Não adicionar dependências sem justificativa.

### Componentes visuais

Criar componentes reutilizáveis para:

- Cabeçalho.
- Sidebar.
- Navegação.
- Rodapé.
- Cards informativos.
- Indicadores de progresso.
- Tabelas.
- Modais.
- Formulários.
- Mensagens.
- Gráficos.

Como GitHub Pages não compõe automaticamente arquivos HTML independentes, utilize templates JavaScript ou geração durante o desenvolvimento, sem introduzir backend obrigatório.

---

## 9. Navegação e experiência de uso

A navegação deverá ser consistente em todas as páginas.

### Sidebar

Organizar as áreas:

**Visão geral**
- Dashboard.
- Plano de estudos.

**Aprendizado**
- Conteúdo.
- Questões.
- Simulados.
- Flashcards.
- Revisões.

**Acompanhamento**
- Caderno de erros.
- Desempenho.

**Configurações**
- Tema.
- Preferências.
- Backup e restauração.

### Requisitos de navegação

- Item ativo identificado.
- Links funcionais.
- Breadcrumbs quando necessários.
- Botão de voltar.
- Navegação por teclado.
- Busca.
- Estados de carregamento.
- Mensagens de erro.
- Estados vazios informativos.

Não deixar botões decorativos sem funcionalidade.

Não criar páginas apenas para preencher o menu.

---

## 10. Tema claro e escuro

Implementar:

- Tema escuro como padrão.
- Alternância entre claro e escuro.
- Persistência da preferência.
- Aplicação do tema antes da renderização principal, evitando flash visual.
- Contraste adequado.
- Compatibilidade com gráficos e tabelas.

A preferência deverá permanecer após recarregar a página.

---

## 11. Responsividade e acessibilidade

Garantir:

- Layout adaptável.
- Sidebar recolhível em telas menores.
- Tabelas com tratamento para dispositivos móveis.
- Tipografia legível.
- Contraste adequado.
- Navegação por teclado.
- Foco visível.
- Labels em formulários.
- Uso adequado de elementos semânticos.
- Textos alternativos para imagens relevantes.

Não depender exclusivamente de cores para transmitir informações.

---

## 12. GitHub Pages e publicação

Verifique:

- Estrutura de diretórios.
- Arquivo `.nojekyll`.
- Caminhos relativos.
- Carregamento de JSON.
- Links internos.
- Arquivos CSS e JS.
- Configuração do workflow.
- Compatibilidade com o endereço do repositório.

Verifique o arquivo:

`.github/workflows/deploy-pages.yml`

Se necessário, atualize o workflow de publicação.

### Regras

- Não publicar arquivos de desenvolvimento desnecessários.
- Não incluir segredos ou credenciais.
- Não depender de caminhos locais.
- Não quebrar a navegação ao publicar em subdiretório.
- Não afirmar que o site foi publicado sem verificar a execução do workflow.

---

## 13. Testes obrigatórios

Antes de considerar a implementação concluída, execute testes.

### 13.1 Testes funcionais

Verificar:

- Navegação.
- Carregamento dos dados.
- Filtros.
- Busca.
- Questões.
- Correção.
- Simulados.
- Cronômetro.
- Flashcards.
- Revisões.
- Caderno de erros.
- Desempenho.
- Alternância de tema.
- Exportação.
- Importação.

### 13.2 Testes de persistência

Verificar:

1. Registrar uma sessão.
2. Recarregar a página.
3. Confirmar a permanência dos dados.
4. Realizar uma tentativa de questão.
5. Recarregar.
6. Confirmar o histórico.
7. Concluir um simulado.
8. Confirmar a preservação do resultado.
9. Exportar os dados.
10. Importar o backup em ambiente de teste.
11. Confirmar a integridade.

### 13.3 Testes de integridade

Verificar:

- IDs duplicados.
- Referências inexistentes.
- Questões sem gabarito.
- Simulados com questões ausentes.
- Flashcards sem conteúdo.
- Itens do edital sem referência.
- Arquivos JSON inválidos.
- Links quebrados.

### 13.4 Testes visuais

Verificar:

- Desktop.
- Tablet.
- Smartphone.
- Tema claro.
- Tema escuro.
- Telas sem dados.
- Conteúdo extenso.
- Tabelas grandes.
- Formulários.

### 13.5 Testes técnicos

Verificar:

- Erros no console.
- Recursos não carregados.
- Erros de JavaScript.
- Problemas de caminho.
- Erros de leitura dos JSON.
- Compatibilidade com GitHub Pages.

Registre os testes realizados e seus resultados.

Não declare um teste aprovado se ele não tiver sido executado.

---

## 14. Proteção dos dados existentes

Esta etapa é especialmente importante.

Antes de modificar:

- Faça inventário dos arquivos.
- Identifique os dados existentes.
- Verifique a versão da estrutura.
- Preserve histórico.
- Identifique possíveis incompatibilidades.

### Proibições

- Não apagar localStorage sem autorização.
- Não redefinir histórico de estudos.
- Não substituir IDs existentes sem migração.
- Não alterar gabaritos silenciosamente.
- Não apagar questões antigas sem justificativa.
- Não substituir conteúdo validado por conteúdo pendente.
- Não sobrescrever arquivos sem verificar seu conteúdo.
- Não remover funcionalidades existentes sem explicar o motivo.

Toda migração deverá preservar os dados compatíveis e apresentar tratamento explícito para incompatibilidades.

---

## 15. Indicadores de qualidade do site

Ao concluir, apresente:

| Indicador | Resultado |
|---|---|
| Páginas implementadas | Quantidade |
| Funcionalidades implementadas | Quantidade |
| Funcionalidades testadas | Quantidade |
| Testes aprovados | Quantidade |
| Testes reprovados | Quantidade |
| Erros críticos | Quantidade |
| Erros pendentes | Quantidade |
| Arquivos JSON validados | Quantidade |
| Compatibilidade GitHub Pages | Status |
| Responsividade | Status |
| Backup e restauração | Status |

Diferencie funcionalidade implementada de funcionalidade testada.

---

## 16. Execução por fases

Não implemente toda a plataforma de uma só vez.

### Fase 1 — Diagnóstico técnico

- Inspecionar a estrutura atual.
- Identificar funcionalidades existentes.
- Avaliar a arquitetura.
- Conferir dados JSON.
- Conferir relatórios de validação.
- Identificar riscos.
- Apresentar plano de implementação.

Não modificar arquivos nesta fase.

Aguardar aprovação.

### Fase 2 — Arquitetura e estrutura

- Definir a organização final.
- Implementar ou revisar a camada de dados.
- Implementar persistência.
- Implementar tema.
- Implementar navegação.
- Preparar componentes reutilizáveis.

Testar antes de avançar.

Aguardar aprovação.

### Fase 3 — Dashboard e plano de estudos

Implementar:

- Dashboard.
- Plano de estudos.
- Indicadores.
- Registro de sessões.
- Progresso.

Aguardar aprovação.

### Fase 4 — Conteúdo e questões

Implementar:

- Navegação por módulos.
- Conteúdo teórico.
- Questões.
- Filtros.
- Busca.
- Resolução.
- Comentários.
- Histórico.

Utilizar somente os materiais disponíveis e aprovados.

Aguardar aprovação.

### Fase 5 — Simulados

Implementar:

- Seleção.
- Execução.
- Cronômetro.
- Salvamento.
- Correção.
- Resultados.
- Histórico.

Aguardar aprovação.

### Fase 6 — Flashcards, revisões e caderno de erros

Implementar as três áreas de forma integrada.

Garantir que erros de questões e simulados alimentem o caderno de erros quando aplicável.

Aguardar aprovação.

### Fase 7 — Desempenho e backup

Implementar:

- Indicadores.
- Gráficos.
- Relatórios.
- Exportação.
- Importação.
- Recuperação de dados.

Aguardar aprovação.

### Fase 8 — Testes e publicação

Executar os testes funcionais, técnicos e visuais.

Corrigir problemas.

Verificar GitHub Pages.

Produzir relatório final.

Não publicar automaticamente sem autorização.

---

## 17. Critérios de aceite

A plataforma somente poderá ser considerada concluída quando:

- A navegação estiver funcional.
- As páginas principais estiverem implementadas.
- Os dados forem carregados corretamente.
- O tema estiver funcional.
- O progresso for persistente.
- Questões puderem ser resolvidas.
- Simulados puderem ser executados e corrigidos.
- Flashcards puderem ser revisados.
- Revisões estiverem integradas.
- Caderno de erros estiver funcional.
- Cronômetro registrar sessões.
- Indicadores refletirem dados reais.
- Backup e restauração funcionarem.
- Não existirem erros críticos conhecidos.
- Os testes obrigatórios tiverem sido executados.
- O site for compatível com GitHub Pages.

Funcionalidades pendentes deverão ser explicitamente identificadas.

---

## 18. Relatório final

Ao concluir cada fase, apresente:

1. Objetivo da fase.
2. Arquivos analisados.
3. Arquivos criados.
4. Arquivos modificados.
5. Funcionalidades implementadas.
6. Funcionalidades testadas.
7. Testes realizados.
8. Problemas encontrados.
9. Problemas corrigidos.
10. Pendências.
11. Riscos.
12. Próxima fase recomendada.

Ao concluir todo o projeto, apresente também:

- Como executar localmente.
- Como publicar no GitHub Pages.
- Como atualizar os conteúdos.
- Como realizar backup.
- Como restaurar dados.
- Como acompanhar o progresso.
- Limitações conhecidas.

---

## 19. Instrução final

A plataforma deverá ser desenvolvida como uma ferramenta real de preparação para concurso, não como uma demonstração visual.

Priorize nesta ordem:

1. Integridade dos dados.
2. Funcionalidade.
3. Usabilidade.
4. Qualidade do conteúdo.
5. Desempenho.
6. Estética.

Não utilize dados fictícios para preencher gráficos ou indicadores.

Não considere uma tela pronta apenas porque está visualmente agradável.

Não avance automaticamente entre as fases.

**Comece exclusivamente pela Fase 1 — Diagnóstico técnico. Não modifique nenhum arquivo nesta primeira execução. Apresente o diagnóstico e aguarde minha aprovação.**