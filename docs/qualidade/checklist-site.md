# Checklist de Qualidade — Plataforma de Estudos
## Transpetro 2026.4 — Ênfase 5: Análise de Sistemas: Processos de Negócios

**Arquivo:** `docs/qualidade/checklist-site.md`

**Documentos relacionados:**
- `CLAUDE.md`
- `README.md`
- `ESTRUTURA.txt`
- `docs/edital/matriz-conteudo.md`
- `docs/edital/controle-cobertura.md`
- `docs/edital/estrutura-prova.md`
- `docs/estrategia/metodologia-estudo.md`
- `.claude/skills/site-estatico/SKILL.md`

---

## 1. Objetivo

Estabelecer critérios obrigatórios para desenvolvimento, revisão, testes e publicação da plataforma de estudos.

A plataforma deverá atender a critérios de:

1. Funcionamento técnico;
2. Arquitetura estática;
3. Integridade dos dados;
4. Funcionalidades de estudo;
5. Navegação;
6. Responsividade;
7. Acessibilidade;
8. Identidade visual;
9. Desempenho;
10. Segurança e privacidade;
11. Compatibilidade com GitHub Pages;
12. Manutenibilidade.

**Regra fundamental:** uma página visualmente pronta não significa que a funcionalidade esteja implementada ou validada.

---

## 2. Premissas técnicas obrigatórias

A plataforma deverá respeitar as seguintes premissas:

| Característica | Requisito |
|---|---|
| Arquitetura | Estática |
| Estrutura | HTML, CSS e JavaScript |
| Dados de conteúdo | JSON e Markdown |
| Persistência individual | localStorage |
| Hospedagem | GitHub Pages |
| Backend | Não obrigatório |
| APIs externas | Não obrigatórias |
| Tema inicial | Dark |
| Alternância de tema | Dark/Light |
| Responsividade | Desktop, tablet e mobile |
| Idioma | Português brasileiro |
| Funcionamento | Sem dependência de serviços externos para funções essenciais |

### Regras

- Não criar backend para funcionalidades que podem ser executadas localmente.
- Não exigir banco de dados remoto.
- Não exigir autenticação para utilização local.
- Não utilizar APIs pagas ou serviços externos como dependência essencial.
- Não depender de bibliotecas externas para funcionalidades básicas sem justificativa.
- Utilizar caminhos compatíveis com publicação em subdiretório no GitHub Pages.

---

## 3. Checklist de estrutura e organização

```text
[ ] A estrutura de diretórios segue ESTRUTURA.txt?
[ ] Os arquivos estão organizados por responsabilidade?
[ ] HTML, CSS e JavaScript estão separados?
[ ] Os dados estão separados da lógica da aplicação?
[ ] Os arquivos JSON possuem estrutura consistente?
[ ] Os nomes dos arquivos seguem padrão?
[ ] Não existem arquivos duplicados sem justificativa?
[ ] Não existem arquivos temporários ou desnecessários?
[ ] Os caminhos relativos estão corretos?
[ ] Os diretórios necessários estão preservados no Git?
```

### Regras

- Não concentrar toda a aplicação em um único arquivo.
- Separar componentes visuais, lógica, dados e persistência.
- Manter os módulos JavaScript com responsabilidades definidas.
- Preservar a estrutura documentada.
- Atualizar `ESTRUTURA.txt` quando houver mudanças estruturais relevantes.

### Organização mínima

```text
site/
├── index.html
├── .nojekyll
├── assets/
│   ├── css/
│   ├── js/
│   └── data/
├── paginas/
├── componentes/
└── README.md
```

A estrutura completa deverá seguir o planejamento do projeto.

---

## 4. Checklist de funcionamento geral

```text
[ ] A página inicial carrega corretamente?
[ ] Não existem erros críticos no console?
[ ] Não existem erros de JavaScript?
[ ] Não existem arquivos essenciais ausentes?
[ ] Os arquivos JSON são carregados corretamente?
[ ] Os links internos funcionam?
[ ] A navegação entre páginas funciona?
[ ] Os botões executam suas funções?
[ ] Os formulários validam os dados?
[ ] As mensagens de erro são compreensíveis?
[ ] A aplicação funciona após atualizar a página?
[ ] Não existem elementos visuais sem função?
```

### Regras

- Não apresentar botões decorativos como funcionalidades implementadas.
- Não utilizar dados fictícios como se fossem dados reais de desempenho.
- Informar claramente quando uma funcionalidade ainda estiver em desenvolvimento.
- Tratar erros de carregamento sem deixar a interface em estado inconsistente.
- Não permitir que falhas em um módulo impeçam desnecessariamente o carregamento de toda a plataforma.

---

## 5. Checklist da página inicial

```text
[ ] O objetivo da plataforma está claro?
[ ] O progresso geral está disponível?
[ ] O próximo estudo está identificado?
[ ] As revisões pendentes são exibidas?
[ ] O acesso aos módulos é direto?
[ ] O acesso às questões é direto?
[ ] O acesso aos simulados é direto?
[ ] O desempenho é apresentado corretamente?
[ ] Os indicadores refletem dados reais?
[ ] A página evita excesso de informações?
```

A página inicial deverá funcionar como ponto de entrada para a rotina de estudos.

Não transformar a página em um dashboard genérico com indicadores decorativos.

Priorizar informações úteis para a próxima ação do estudante.

---

## 6. Checklist do conteúdo teórico

```text
[ ] Os nove módulos estão identificados?
[ ] Os conteúdos estão organizados conforme a matriz?
[ ] Os títulos estão corretos?
[ ] Os textos são carregados integralmente?
[ ] A hierarquia dos títulos está correta?
[ ] As tabelas são exibidas adequadamente?
[ ] Os diagramas são legíveis?
[ ] Os códigos são apresentados corretamente?
[ ] As referências estão disponíveis?
[ ] A navegação entre assuntos funciona?
[ ] O progresso por assunto é registrado?
[ ] Os conteúdos pendentes são identificados?
```

### Regras

- Não exibir conteúdos de outro módulo por erro de associação.
- Não marcar um assunto como concluído apenas por ter sido aberto.
- Diferenciar conteúdo disponível de conteúdo estudado.
- Preservar a identificação do item do edital.
- Permitir localizar assuntos por módulo e tópico.

A qualidade dos materiais deverá seguir `docs/qualidade/checklist-conteudo.md`.

---

## 7. Checklist do banco de questões

```text
[ ] As questões são carregadas corretamente?
[ ] Os IDs são únicos?
[ ] As alternativas A-E são exibidas?
[ ] A seleção de alternativas funciona?
[ ] É possível alterar uma resposta?
[ ] O gabarito permanece oculto durante a resolução?
[ ] A correção funciona corretamente?
[ ] Os comentários são exibidos?
[ ] A origem da questão é identificada?
[ ] Os filtros funcionam?
[ ] O histórico de respostas é preservado?
[ ] O caderno de erros recebe as questões correspondentes?
```

### Filtros mínimos

- Módulo;
- Assunto;
- Item do edital;
- Dificuldade;
- Origem;
- Situação de resolução.

A plataforma deverá diferenciar visualmente:

- Questão oficial;
- Questão adaptada;
- Questão autoral.

Não apresentar questões autorais como questões oficiais da Cesgranrio.

A validação das questões deverá seguir `docs/qualidade/checklist-questoes.md`.

---

## 8. Checklist dos simulados

```text
[ ] Os simulados disponíveis estão identificados?
[ ] A modalidade está informada?
[ ] A quantidade de questões está correta?
[ ] A estrutura do simulado completo respeita 70 questões?
[ ] O cronômetro funciona?
[ ] A navegação funciona?
[ ] O progresso é atualizado?
[ ] As respostas são preservadas?
[ ] O encerramento funciona?
[ ] A correção está correta?
[ ] O relatório é gerado?
[ ] O resultado é salvo no histórico?
[ ] A versão do simulado é registrada?
```

### Regras

- O simulado completo deverá respeitar 50 questões específicas, 10 de Português e 10 de Inglês.
- Não inventar distribuição oficial entre módulos.
- Não utilizar questões bloqueadas.
- Não mostrar gabarito durante a aplicação.
- Preservar as respostas quando houver atualização da página, dentro das limitações técnicas do armazenamento local.

A validação deverá seguir `docs/qualidade/checklist-simulados.md`.

---

## 9. Checklist dos flashcards e revisões

```text
[ ] Os flashcards são carregados?
[ ] A pergunta é exibida antes da resposta?
[ ] A resposta pode ser revelada?
[ ] A avaliação de domínio funciona?
[ ] Os cartões podem ser filtrados?
[ ] Os cartões estão associados ao edital?
[ ] As revisões possuem datas?
[ ] As revisões vencidas são identificadas?
[ ] O resultado da revisão é registrado?
[ ] O intervalo de revisão pode ser ajustado?
[ ] A revisão considera erros anteriores?
```

### Regras

- Não considerar um cartão revisado apenas porque foi aberto.
- Registrar a avaliação de domínio.
- Permitir reagendamento.
- Evitar perda do histórico.
- Integrar flashcards e revisões ao planejamento.

---

## 10. Checklist do caderno de erros

```text
[ ] Questões incorretas podem ser adicionadas?
[ ] A origem da questão é preservada?
[ ] O módulo e assunto são exibidos?
[ ] O motivo do erro pode ser registrado?
[ ] A classificação do erro funciona?
[ ] A ação corretiva pode ser definida?
[ ] A revisão pode ser programada?
[ ] O histórico é preservado?
[ ] É possível filtrar os erros?
[ ] É possível identificar erros recorrentes?
```

O caderno de erros deverá ser integrado ao banco de questões e ao planejamento.

Não apagar automaticamente um erro após uma única revisão.

---

## 11. Checklist do plano de estudos

```text
[ ] O planejamento diário funciona?
[ ] O planejamento semanal funciona?
[ ] É possível registrar atividades?
[ ] É possível alterar a duração planejada?
[ ] O tempo efetivamente estudado é registrado?
[ ] Atividades concluídas são identificadas?
[ ] Atividades pendentes são exibidas?
[ ] Atividades atrasadas são identificadas?
[ ] É possível reprogramar atividades?
[ ] As revisões entram no planejamento?
[ ] O planejamento pode ser ajustado?
```

### Regras

- Diferenciar tempo planejado e tempo realizado.
- Não registrar atividades não executadas como concluídas.
- Não apagar atividades atrasadas.
- Permitir reprogramação.
- Considerar prioridades e desempenho.
- Não gerar cronograma definitivo sem disponibilidade configurada.

---

## 12. Checklist de desempenho e estatísticas

```text
[ ] O total de questões resolvidas está correto?
[ ] O percentual de acertos está correto?
[ ] O percentual de erros está correto?
[ ] O aproveitamento por módulo está correto?
[ ] O aproveitamento por assunto está correto?
[ ] O histórico de simulados está disponível?
[ ] A evolução é calculada corretamente?
[ ] O tempo de estudo está correto?
[ ] O tempo por questão está disponível?
[ ] Os dados são atualizados após novas atividades?
```

### Indicadores

A plataforma poderá apresentar:

- Horas estudadas;
- Sessões realizadas;
- Questões resolvidas;
- Percentual de acertos;
- Desempenho por módulo;
- Desempenho por assunto;
- Simulados realizados;
- Revisões concluídas;
- Revisões pendentes;
- Erros recorrentes;
- Cobertura do edital.

### Regras de interpretação

- Não confundir quantidade de horas com domínio.
- Não confundir percentual de questões resolvidas com percentual de acertos.
- Não misturar questões oficiais, adaptadas e autorais sem identificação.
- Não apresentar dados fictícios como resultados reais.
- Não comparar avaliações com composições muito diferentes sem ressalvas.

---

## 13. Checklist de persistência e armazenamento

A persistência individual deverá utilizar `localStorage`.

```text
[ ] Os dados são salvos automaticamente quando necessário?
[ ] Os dados permanecem após atualizar a página?
[ ] O tema selecionado é preservado?
[ ] O progresso é preservado?
[ ] O histórico de questões é preservado?
[ ] Os resultados dos simulados são preservados?
[ ] O caderno de erros é preservado?
[ ] As revisões são preservadas?
[ ] Existe identificação da versão dos dados?
[ ] Existe tratamento de dados corrompidos?
[ ] Existe exportação de backup?
[ ] Existe importação de backup?
[ ] A importação valida o arquivo?
[ ] A importação evita substituir dados indevidamente?
```

### Estrutura de armazenamento

Organizar os dados por responsabilidade, evitando uma única estrutura desorganizada.

Exemplos:

- `settings`;
- `theme`;
- `study_progress`;
- `study_sessions`;
- `question_history`;
- `simulation_history`;
- `flashcard_progress`;
- `review_schedule`;
- `error_notebook`.

Os nomes são referências de organização; a implementação poderá utilizar outro padrão consistente.

### Versionamento

Implementar:

- Identificador de versão;
- Migração de estruturas antigas;
- Validação na leitura;
- Tratamento de falhas;
- Backup antes de operações destrutivas.

Não sobrescrever dados existentes durante atualizações sem estratégia de migração.

### Limitações

O usuário deverá ser informado de que:

- Os dados ficam no navegador utilizado;
- Não existe sincronização automática entre dispositivos;
- Limpar os dados do navegador pode apagar o histórico;
- O backup deve ser exportado periodicamente.

---

## 14. Checklist de exportação e importação

```text
[ ] A exportação gera arquivo válido?
[ ] O arquivo contém os dados do usuário?
[ ] A estrutura exportada possui versão?
[ ] A importação valida o formato?
[ ] A importação verifica campos obrigatórios?
[ ] A importação identifica arquivos inválidos?
[ ] Existe confirmação antes de substituir dados?
[ ] Existe possibilidade de recuperar backup anterior?
[ ] A operação preserva a integridade dos dados?
```

### Regras

- Utilizar formato estruturado, preferencialmente JSON.
- Não exportar dados internos desnecessários.
- Não importar arquivos sem validação.
- Não executar código recebido em arquivos de backup.
- Informar o resultado da operação.
- Evitar perda acidental do histórico.

---

## 15. Checklist de identidade visual

### 15.1. Diretrizes gerais

```text
[ ] O visual segue a identidade técnica/editorial?
[ ] O tema dark é aplicado inicialmente?
[ ] O tema light funciona?
[ ] A alternância de tema é preservada?
[ ] A paleta está consistente?
[ ] A tipografia é legível?
[ ] Os espaçamentos são consistentes?
[ ] Os componentes seguem o mesmo padrão?
[ ] A hierarquia visual está clara?
[ ] Os elementos decorativos são utilizados com moderação?
```

### 15.2. Identidade visual

Diretrizes:

- Estética técnica, editorial e industrial;
- Base em grafite e azul-marinho;
- Azul-petróleo como cor de destaque;
- Âmbar para acentos pontuais;
- Tipografia clara e funcional;
- Divisórias e grids discretos;
- Sidebar funcional;
- Indicadores de progresso sutis;
- Componentes com cantos moderados.

### 15.3. Elementos a evitar

- Dashboard administrativo genérico;
- Gradientes decorativos excessivos;
- Cards excessivamente arredondados;
- Emojis como substitutos de ícones;
- Animações sem função;
- Indicadores decorativos;
- Excesso de cores;
- Textos excessivamente pequenos;
- Elementos que dificultem a concentração.

### 15.4. Tema

```text
[ ] O tema dark é carregado sem flash de tema incorreto?
[ ] O tema light possui contraste adequado?
[ ] A preferência é salva?
[ ] Todos os componentes respeitam o tema?
[ ] Tabelas e gráficos são legíveis nos dois temas?
[ ] Formulários e botões mantêm contraste?
```

Aplicar a preferência de tema antes da renderização principal, quando tecnicamente possível.

---

## 16. Checklist de responsividade

Testar pelo menos nos seguintes cenários:

| Dispositivo | Verificação |
|---|---|
| Desktop | Navegação completa e área de conteúdo |
| Notebook | Layout e sidebar |
| Tablet | Reorganização de colunas |
| Smartphone | Navegação compacta e leitura |
| Smartphone pequeno | Ausência de rolagem horizontal indevida |

### Checklist

```text
[ ] O layout se adapta à largura da tela?
[ ] A navegação funciona em telas pequenas?
[ ] A sidebar possui comportamento adequado?
[ ] Os textos permanecem legíveis?
[ ] As tabelas possuem tratamento responsivo?
[ ] Os gráficos se adaptam?
[ ] Os botões são utilizáveis por toque?
[ ] Os formulários funcionam?
[ ] Os simulados funcionam em dispositivos móveis?
[ ] Não existe sobreposição de componentes?
```

Não considerar responsividade validada apenas por reduzir a largura da janela no desktop.

---

## 17. Checklist de acessibilidade

```text
[ ] Os elementos possuem estrutura semântica?
[ ] Os títulos respeitam a hierarquia?
[ ] Os botões possuem nomes acessíveis?
[ ] Os campos possuem rótulos?
[ ] Os elementos interativos podem ser utilizados por teclado?
[ ] O foco está visível?
[ ] As cores possuem contraste adequado?
[ ] As informações não dependem exclusivamente de cores?
[ ] As imagens possuem textos alternativos quando necessários?
[ ] As mensagens de erro são compreensíveis?
[ ] O conteúdo pode ser ampliado sem perda significativa?
[ ] Os componentes respeitam preferências de movimento reduzido?
```

### Diretrizes

Adotar boas práticas de acessibilidade baseadas em WCAG, considerando especialmente:

- Perceptibilidade;
- Operabilidade;
- Compreensibilidade;
- Robustez.

Não utilizar cores como único meio para diferenciar acertos, erros, pendências ou estados.

---

## 18. Checklist de desempenho

```text
[ ] O carregamento inicial é adequado?
[ ] Os arquivos CSS estão organizados?
[ ] O JavaScript evita processamento desnecessário?
[ ] Os arquivos JSON não possuem dados redundantes?
[ ] Os módulos podem ser carregados sob demanda quando adequado?
[ ] Os elementos visuais são otimizados?
[ ] Não existem dependências externas desnecessárias?
[ ] A aplicação funciona sem travamentos em simulados?
[ ] O armazenamento local não é acessado excessivamente?
[ ] Não existem erros de carregamento recorrentes?
```

### Regras

- Evitar bibliotecas grandes sem necessidade.
- Evitar carregar todo o banco de questões quando isso não for necessário.
- Utilizar carregamento modular.
- Evitar manipulações repetitivas e desnecessárias do DOM.
- Não bloquear a interface durante operações longas.
- Otimizar arquivos estáticos.

---

## 19. Checklist de segurança e privacidade

```text
[ ] Não existem senhas ou credenciais no código?
[ ] Não existem chaves de API expostas?
[ ] Não existem dados pessoais desnecessários?
[ ] Os dados importados são validados?
[ ] O conteúdo do usuário é tratado com segurança?
[ ] Não existe execução de código importado?
[ ] Não existe dependência de serviços externos não documentados?
[ ] Os dados locais são tratados de forma transparente?
[ ] Não existem permissões desnecessárias?
```

### Regras

- Não utilizar `eval()` para interpretar dados.
- Não executar scripts presentes em arquivos importados.
- Validar dados antes de inseri-los no DOM.
- Evitar uso inseguro de `innerHTML` com conteúdo não confiável.
- Não armazenar credenciais.
- Não coletar informações pessoais sem necessidade.
- Informar claramente como os dados são armazenados.

---

## 20. Checklist de compatibilidade com GitHub Pages

```text
[ ] O site funciona como hospedagem estática?
[ ] O arquivo index.html está no local correto?
[ ] O arquivo .nojekyll está presente?
[ ] Os caminhos funcionam no subdiretório do projeto?
[ ] Os links internos funcionam após publicação?
[ ] Os arquivos CSS carregam?
[ ] Os arquivos JavaScript carregam?
[ ] Os arquivos JSON carregam?
[ ] Não existem dependências de servidor?
[ ] O workflow de publicação está configurado?
[ ] A publicação funciona a partir do repositório?
[ ] O README explica como publicar?
```

### Regras

- Utilizar caminhos relativos compatíveis com o endereço do projeto.
- Não assumir que a aplicação estará hospedada na raiz do domínio.
- Não depender de rotas que exigem configuração de servidor.
- Não utilizar funcionalidades que dependam de backend.
- Verificar a configuração do GitHub Actions.
- Testar o endereço publicado, não apenas a versão local.

### Componentes HTML

O GitHub Pages não compõe automaticamente arquivos HTML separados.

Se houver componentes reutilizáveis, utilizar:

- Inclusão via JavaScript;
- Templates;
- Geração de páginas em tempo de build.

A solução escolhida deverá ser documentada e testada.

---

## 21. Checklist de testes funcionais

### Navegação

```text
[ ] Página inicial.
[ ] Sidebar.
[ ] Navegação entre módulos.
[ ] Navegação entre assuntos.
[ ] Links internos.
[ ] Alternância de tema.
```

### Estudo

```text
[ ] Abrir conteúdo.
[ ] Marcar assunto estudado.
[ ] Registrar sessão.
[ ] Consultar progresso.
[ ] Atualizar planejamento.
```

### Questões

```text
[ ] Filtrar questões.
[ ] Responder questão.
[ ] Alterar resposta.
[ ] Consultar correção.
[ ] Consultar comentário.
[ ] Registrar erro.
```

### Simulados

```text
[ ] Iniciar simulado.
[ ] Navegar entre questões.
[ ] Utilizar cronômetro.
[ ] Finalizar simulado.
[ ] Corrigir respostas.
[ ] Consultar relatório.
[ ] Salvar histórico.
```

### Revisões

```text
[ ] Consultar flashcards.
[ ] Revelar resposta.
[ ] Avaliar domínio.
[ ] Programar revisão.
[ ] Consultar pendências.
```

### Dados

```text
[ ] Salvar progresso.
[ ] Atualizar página.
[ ] Recuperar dados.
[ ] Exportar backup.
[ ] Importar backup.
[ ] Tratar arquivo inválido.
```

---

## 22. Checklist de testes técnicos

Executar testes em ambiente local e após publicação.

```text
[ ] Verificar console do navegador.
[ ] Verificar erros de rede.
[ ] Verificar caminhos de arquivos.
[ ] Verificar carregamento de JSON.
[ ] Verificar erros de sintaxe.
[ ] Verificar funções principais.
[ ] Verificar integridade do localStorage.
[ ] Verificar importação e exportação.
[ ] Verificar comportamento responsivo.
[ ] Verificar acessibilidade básica.
[ ] Verificar funcionamento em navegadores diferentes.
[ ] Verificar publicação no GitHub Pages.
```

### Navegadores de referência

- Google Chrome;
- Microsoft Edge;
- Mozilla Firefox.

A compatibilidade deverá ser testada nas versões disponíveis e atuais dos navegadores utilizados.

---

## 23. Critérios de reprovação

| Código | Problema | Gravidade |
|---|---|---|
| W01 | Página principal não carrega | Crítica |
| W02 | Funcionalidade essencial não funciona | Crítica |
| W03 | Perda de dados do usuário | Crítica |
| W04 | Erro de cálculo de desempenho | Crítica |
| W05 | Caminhos incompatíveis com GitHub Pages | Alta |
| W06 | Simulado não funciona | Alta |
| W07 | Banco de questões não carrega | Alta |
| W08 | Persistência inconsistente | Alta |
| W09 | Layout inadequado em dispositivos móveis | Média/Alta |
| W10 | Contraste insuficiente | Média/Alta |
| W11 | Erros visuais sem impacto funcional | Média |
| W12 | Documentação desatualizada | Média |

### Tratamento

- Crítica: bloquear publicação.
- Alta: corrigir antes da publicação.
- Média: corrigir antes da versão estável ou documentar a pendência.
- Baixa: registrar e programar correção.

Não considerar a plataforma pronta quando houver falhas críticas ou altas nas funcionalidades essenciais.

---

## 24. Status de validação

| Status | Significado |
|---|---|
| `EM_DESENVOLVIMENTO` | Em construção |
| `EM_REVISAO` | Em validação |
| `PENDENTE` | Possui problemas |
| `VALIDADO` | Atende aos critérios |
| `PUBLICADO` | Disponível no GitHub Pages |
| `BLOQUEADO` | Não pode ser publicado |
| `DESATUALIZADO` | Necessita atualização |

### Critérios para validação

A plataforma poderá receber status `VALIDADO` quando:

1. A estrutura estiver correta;
2. As páginas essenciais funcionarem;
3. Os dados forem preservados;
4. As funcionalidades principais forem testadas;
5. A responsividade estiver validada;
6. A identidade visual estiver consistente;
7. Não existirem erros críticos ou altos;
8. A compatibilidade estática estiver confirmada;
9. A exportação e importação funcionarem;
10. A documentação estiver atualizada.

---

## 25. Registro de revisão

Cada versão revisada deverá possuir um registro.

```text
Versão:
Data:
Ambiente: LOCAL / GITHUB PAGES

Páginas testadas:
Funcionalidades testadas:
Navegadores utilizados:
Dispositivos utilizados:

Persistência:
Exportação/importação:
Responsividade:
Acessibilidade:
Desempenho:
Compatibilidade:

Problemas identificados:
Ações corretivas:

Resultado:
Revisor:
Data da próxima revisão:
```

---

## 26. Instruções para o Claude Code

Antes de desenvolver, revisar ou publicar a plataforma:

1. Ler este checklist.
2. Consultar `CLAUDE.md`.
3. Consultar `ESTRUTURA.txt`.
4. Consultar a Skill `site-estatico`.
5. Conferir os arquivos existentes.
6. Verificar funcionalidades já implementadas.
7. Evitar recriar componentes existentes sem necessidade.
8. Implementar as funcionalidades por etapas.
9. Executar testes após cada etapa relevante.
10. Validar os dados e a persistência.
11. Testar em ambiente local.
12. Testar a publicação no GitHub Pages.
13. Atualizar a documentação.
14. Registrar problemas e pendências.

### Proibições

- Não apresentar protótipos como funcionalidades concluídas.
- Não utilizar dados fictícios como resultados reais.
- Não criar dependência de backend para funções essenciais.
- Não remover funcionalidades existentes sem justificativa.
- Não alterar estruturas de armazenamento sem migração.
- Não publicar com erros críticos.
- Não considerar a validação visual suficiente.
- Não afirmar que o site funciona no GitHub Pages sem testar o ambiente publicado.

---

## 27. Princípio final

A plataforma deverá ser confiável, funcional, leve e sustentável.

Sua qualidade será medida pela capacidade de apoiar efetivamente o estudo, preservar o progresso, oferecer avaliações corretas e permitir manutenção sem dependência de infraestrutura complexa.

**Uma plataforma de estudos não está pronta quando apenas parece funcionar. Está pronta quando suas funcionalidades foram testadas, seus dados são confiáveis e o estudante consegue utilizá-la sem obstáculos técnicos relevantes.**