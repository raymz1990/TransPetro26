# TRANSPETRO 2026.4 — Ênfase 5
## Análise de Sistemas: Processos de Negócios

Plataforma de preparação para o Processo Seletivo Público da TRANSPETRO 2026.4, Ênfase 5, organizado pela Fundação Cesgranrio.

O projeto reúne conteúdo teórico, questões comentadas, simulados, revisões, flashcards e materiais de apoio para NotebookLM em um ambiente integrado de estudos.

---

## 1. Objetivo

Construir um ambiente completo de preparação para a prova, com foco em:

- Cobertura integral do conteúdo programático do edital.
- Fundamentação teórica aprofundada e didática.
- Preparação direcionada ao perfil da Fundação Cesgranrio.
- Questões oficiais, adaptadas e autorais.
- Simulados temáticos e completos.
- Revisão espaçada e caderno de erros.
- Acompanhamento de desempenho.
- Materiais complementares para NotebookLM.

O edital oficial é a referência principal para delimitação do conteúdo.

---

## 2. Conteúdo programático

A plataforma está organizada em nove módulos:

1. Arquitetura de Dados.
2. Gerenciamento de Projetos e Produtos.
3. Processos, Grupos de Processos e Áreas de Conhecimento.
4. Gestão e Governança em TI.
5. Engenharia de Software.
6. Experiência do Usuário.
7. Análise de Dados e Informações.
8. Lógica Matemática.
9. Segurança da Informação.

A organização interna dos módulos é didática e deve respeitar os subitens oficiais do Anexo IV do edital.

---

## 3. Funcionalidades previstas

### Estudos
- Conteúdo teórico organizado por módulo e assunto.
- Plano de estudos.
- Controle de progresso.
- Indicadores de domínio.

### Questões
- Banco de questões.
- Filtros por assunto, origem e dificuldade.
- Questões comentadas.
- Histórico de respostas.

### Simulados
- Simulados por assunto.
- Simulado específico com 50 questões.
- Simulado completo com 70 questões.
- Cronômetro.
- Correção comentada.
- Relatório de desempenho.

### Revisões
- Flashcards.
- Revisão espaçada.
- Caderno de erros.
- Histórico de dificuldades.

### Desempenho
- Percentual de acertos.
- Desempenho por módulo.
- Evolução nos simulados.
- Identificação de assuntos prioritários.

---

## 4. Tecnologias

| Tecnologia | Finalidade |
|---|---|
| Claude Code | Desenvolvimento e manutenção do projeto |
| HTML | Estrutura da plataforma |
| CSS | Identidade visual e responsividade |
| JavaScript | Funcionalidades e interações |
| JSON | Organização dos dados |
| localStorage | Persistência local |
| GitHub | Versionamento do projeto |
| GitHub Pages | Hospedagem estática |
| NotebookLM | Estudo complementar com fontes organizadas |

A plataforma deve funcionar sem backend, banco de dados remoto ou serviços externos para suas funcionalidades essenciais.

---

## 5. Identidade visual

Direção visual editorial, técnica e industrial.

Características:

- Tema escuro como padrão.
- Alternância entre tema escuro e claro.
- Paleta em grafite, azul-petróleo e tons neutros.
- Detalhes em âmbar.
- Tipografia com hierarquia clara.
- Navegação funcional.
- Interface responsiva.

A preferência de tema deve ser salva no navegador.

---

## 6. Como utilizar a plataforma

Após a implementação:

1. Abra a página inicial.
2. Consulte o plano de estudos.
3. Selecione um dos nove módulos.
4. Estude a teoria.
5. Resolva questões do assunto.
6. Registre os erros.
7. Realize as revisões programadas.
8. Faça simulados.
9. Acompanhe seu desempenho.

A plataforma deverá permitir o acompanhamento progressivo da preparação.

---

## 7. Execução local

A plataforma utiliza arquivos estáticos.

Para testar:

1. Entre na pasta `site/`.
2. Abra o arquivo `index.html` em um navegador moderno.

Caso sejam utilizados recursos que dependam de carregamento via HTTP, execute um servidor local simples, por exemplo:

```bash
python -m http.server 8000
```

Depois, acesse:

`http://localhost:8000/site/`

A implementação deve considerar as limitações do ambiente estático e do GitHub Pages.

---

## 8. Publicação no GitHub Pages

O projeto está preparado para publicação estática no GitHub Pages.

O fluxo previsto é:

1. Enviar o projeto para um repositório GitHub.
2. Configurar o GitHub Pages para utilizar o fluxo de publicação definido em `.github/workflows/deploy-pages.yml`.
3. Verificar a execução do workflow.
4. Acessar o endereço disponibilizado pelo GitHub Pages.

A configuração definitiva deve ser conferida no repositório e no workflow antes da publicação.

---

## 9. Armazenamento dos dados

O progresso, as preferências, as revisões e o caderno de erros utilizam `localStorage`.

Isso significa que:

- Os dados ficam armazenados no navegador.
- Não existe sincronização automática entre dispositivos.
- Limpar os dados do navegador pode apagar o progresso.
- O usuário deve ter opção de exportar e importar seus dados, quando essa funcionalidade estiver implementada.

Recomenda-se realizar backups periódicos.

---

## 10. NotebookLM

A pasta `notebooklm/` reúne materiais preparados para utilização como fontes no NotebookLM.

Podem ser disponibilizados:

- Conteúdos teóricos.
- Resumos.
- Mapas mentais.
- Glossários.
- Roteiros de revisão em áudio.
- Perguntas e respostas.
- Prompts de estudo.

Os arquivos são gerados por `python tools/build_notebooklm.py` (ver `notebooklm/README.md`).

Os materiais devem ser derivados do conteúdo revisado e validado do projeto.

---

## 11. Organização do projeto

Principais diretórios:

| Diretório | Finalidade |
|---|---|
| `.claude/skills/` | Instruções especializadas para Claude Code |
| `docs/` | Edital, estratégia e controle de qualidade |
| `prompts/` | Prompts específicos de execução |
| `conteudo/` | Material teórico dos nove módulos |
| `banco-questoes/` | Questões e simulados |
| `notebooklm/` | Materiais de apoio |
| `site/` | Plataforma de estudos |
| `.github/` | Automação de publicação |

---

## 12. Documentação principal

- `CLAUDE.md`: regras permanentes do projeto.
- `PROMPT-MESTRE.md`: metodologia e orientação de execução.
- `ESTRUTURA.txt`: arquitetura de diretórios e arquivos.
- `docs/edital/matriz-conteudo.md`: matriz de cobertura do edital.
- `docs/edital/controle-cobertura.md`: acompanhamento da produção.

---

## 13. Integridade e qualidade

O projeto segue os seguintes princípios:

- Fidelidade ao edital.
- Separação entre questões oficiais, adaptadas e autorais.
- Referências verificáveis.
- Correção técnica.
- Conteúdo completo e organizado.
- Validação dos gabaritos.
- Controle de qualidade antes da publicação.

Nenhuma questão autoral deve ser apresentada como questão oficial da Cesgranrio.

Nenhuma tendência estatística da banca deve ser afirmada sem evidências.

---

## 14. Estado do projeto

Este repositório representa a estrutura de desenvolvimento da plataforma.

A existência de diretórios, arquivos ou funcionalidades planejadas não significa que todo o conteúdo esteja concluído.

Consultar os checklists e o controle de cobertura para identificar o que está:

- Não iniciado.
- Em desenvolvimento.
- Em revisão.
- Validado.
- Concluído.

---

**Projeto:** TRANSPETRO 2026.4 — Ênfase 5  
**Banca:** Fundação Cesgranrio  
**Objetivo:** Preparação completa para Análise de Sistemas: Processos de Negócios.