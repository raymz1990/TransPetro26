# CLAUDE.md

# CONTEXTO DO PROJETO

Você está trabalhando no projeto de preparação para o Processo Seletivo Público TRANSPETRO 2026.4, Ênfase 5 — Análise de Sistemas: Processos de Negócios, organizado pela Fundação Cesgranrio.

Este projeto tem como finalidade desenvolver um ambiente completo de preparação para o concurso, com conteúdo teórico, questões, simulados, revisões e uma plataforma digital de estudos.

# 1. OBJETIVOS DO PROJETO

Produzir e manter:

1. Conteúdo teórico completo, didático e organizado estritamente conforme o Anexo IV do edital.
2. Questões comentadas, separadas por origem e classificação.
3. Simulados temáticos e simulados completos, respeitando a estrutura da prova.
4. Estratégias de resolução, comparações conceituais, pontos de atenção e pegadinhas.
5. Materiais em Markdown e PDF preparados para utilização no NotebookLM.
6. Uma plataforma estática em HTML, CSS e JavaScript, publicada pelo GitHub Pages.
7. Sistema de acompanhamento de estudos, revisões, flashcards e caderno de erros.

# 2. FONTES E INTEGRIDADE DO CONTEÚDO

A cópia do edital fornecida pelo usuário é a fonte primária e a referência definitiva para delimitação do conteúdo.

Ordem de consulta:

1. Edital oficial e seus anexos.
2. `docs/edital/matriz-conteudo.md`.
3. Materiais técnicos e bibliografia complementar.
4. Provas anteriores e fontes externas verificáveis.

Regras obrigatórias:

- Consulte primeiro `docs/edital/matriz-conteudo.md` para identificar o escopo do tópico.
- Confira o edital original sempre que houver dúvida sobre a interpretação ou abrangência de um item.
- Não confunda a Ênfase 5 com as Ênfases 4 ou 6.
- Não inclua Java/J2EE como conteúdo da Ênfase 5 apenas porque aparece na seção anterior do edital.
- Não invente incidência estatística, questões anteriores, gabaritos, referências bibliográficas ou citações.
- Não apresente conteúdo complementar como se fosse uma exigência literal do edital.
- Identifique claramente o que é conteúdo do edital, aprofundamento técnico e estratégia de prova.
- Quando utilizar fontes externas, registre a referência e permita sua verificação.
- Quando houver divergência entre fontes, apresente a divergência e priorize o edital para delimitar o programa.

## Classificação das questões

Toda questão deverá ser identificada por uma das seguintes categorias:

- **Oficial:** questão efetivamente aplicada em prova, com banca, concurso, ano e identificação verificáveis.
- **Adaptada:** questão baseada em questão anterior, com alterações devidamente identificadas e referência à origem.
- **Autoral:** questão criada pelo projeto, identificada como "questão autoral — estilo Cesgranrio".

Nunca atribua autoria à Cesgranrio para questões criadas pelo projeto.

# 3. PADRÃO DIDÁTICO

Utilize português brasileiro, linguagem objetiva e tecnicamente correta.

O conteúdo deverá explicar, conforme a necessidade de cada assunto:

- Conceito e definição.
- Finalidade e aplicação.
- Funcionamento e características.
- Classificações e componentes.
- Vantagens e limitações.
- Diferenças entre conceitos semelhantes.
- Exemplos práticos.
- Relações com outros assuntos do edital.
- Pontos de atenção para a prova.
- Síntese para revisão.

Diretrizes:

- Não produza conteúdo excessivamente resumido.
- Não transforme o material em uma enciclopédia sem foco na prova.
- Explique os conceitos antes de apresentar questões.
- Utilize tabelas comparativas quando facilitarem a compreensão.
- Destaque termos técnicos e diferenças conceituais.
- Apresente pegadinhas como hipóteses de atenção, sem afirmar frequência sem evidências.
- Sempre que possível, demonstre como um conceito pode ser cobrado em uma questão.

# 4. ESTRATÉGIA CESGRANRIO

A preparação deve considerar o perfil da banca Fundação Cesgranrio.

Para analisar o estilo da banca:

- Priorize provas anteriores da própria Cesgranrio.
- Considere questões de concursos e áreas tecnológicas relacionadas.
- Analise enunciados, alternativas, nível de interpretação e profundidade conceitual.
- Identifique padrões somente quando sustentados por questões efetivamente analisadas.
- Diferencie evidências observadas de hipóteses de preparação.
- Não generalize o comportamento da banca com base em amostras pequenas.

As questões devem ter cinco alternativas (A, B, C, D e E), salvo quando a fonte original apresentar outro formato.

Os comentários devem explicar:

- Por que a alternativa correta está correta.
- Por que cada alternativa incorreta está errada.
- Qual conceito está sendo avaliado.
- Qual confusão conceitual pode levar ao erro.
- Qual aprendizado deve ser levado para a revisão.

# 5. FLUXO DE TRABALHO

Ao desenvolver um tópico, siga esta sequência:

1. Identifique o tópico e seus subitens oficiais.
2. Consulte a matriz de cobertura do edital.
3. Monte um checklist de cobertura.
4. Produza o conteúdo teórico e os exemplos.
5. Realize revisão técnica e de aderência ao edital.
6. Produza questões e comentários.
7. Prepare o material para o NotebookLM.
8. Atualize a plataforma e seus índices.
9. Execute os checklists de qualidade.
10. Registre pendências e itens ainda não desenvolvidos.

Não considere uma atividade concluída enquanto houver pendências relevantes de cobertura ou validação.

# 6. SKILLS

Consulte e aplique as Skills em `.claude/skills/` conforme a atividade.

Skills previstas:

- `edital-e-cobertura`: delimitação do conteúdo e controle de aderência ao edital.
- `conteudo-didatico`: produção e revisão do material teórico.
- `questoes-cesgranrio`: elaboração e comentário de questões.
- `analise-banca`: análise de provas anteriores e identificação de padrões.
- `notebooklm-export`: preparação de fontes e materiais para NotebookLM.
- `simulados`: criação e validação de simulados.
- `site-estatico`: desenvolvimento e manutenção da plataforma.

As Skills complementam este arquivo e devem ser consultadas antes da execução das tarefas correspondentes.

Não replique instruções extensas das Skills neste arquivo. Mantenha aqui as regras gerais do projeto.

# 7. REGRAS PARA O SITE

Tecnologias:

- HTML.
- CSS.
- JavaScript.
- GitHub Pages.

Requisitos:

- Site estático, sem necessidade de servidor ou banco de dados.
- Não exigir API externa para funcionalidades essenciais.
- Compatibilidade com GitHub Pages.
- Layout responsivo para desktop e dispositivos móveis.
- Separação entre conteúdo, dados das questões, componentes e estilos.
- Código organizado, reutilizável e documentado.
- Evitar frameworks e dependências desnecessárias.

Persistência:

- Utilizar `localStorage` para registrar progresso, preferências, erros, revisões e demais dados locais.
- Informar que os dados ficam armazenados no navegador do usuário.
- Prever exportação e importação de dados quando aplicável.
- Não apresentar dados locais como se fossem sincronizados entre dispositivos.

Funcionalidades previstas:

- Plano de estudos.
- Conteúdo teórico organizado por assunto.
- Questões filtráveis por assunto, origem e dificuldade.
- Simulados por assunto.
- Simulado específico com 50 questões.
- Simulado completo com 70 questões.
- Cronômetro.
- Correção comentada.
- Caderno de erros.
- Revisão espaçada.
- Flashcards.
- Indicadores de desempenho.
- Acompanhamento de progresso.

A estrutura e a distribuição dos simulados devem respeitar o edital. Não invente pesos ou quantidades por assunto sem fundamentação.

# 8. IDENTIDADE VISUAL E INTERFACE

Criar uma identidade visual original para a plataforma Transpetro Ênfase 5.

## Proibições

- Layout genérico de dashboard de IA.
- Cards arredondados em excesso.
- Gradientes decorativos sem função.
- Emojis como ícones de navegação.
- Aparência de template administrativo pronto.
- Reprodução de interfaces de ferramentas de IA.

## Direção visual

- Estética editorial, técnica e industrial.
- Tema escuro como padrão.
- Tema claro como alternativa.
- Paleta escura em grafite, azul-petróleo e tons neutros, com detalhes em âmbar.
- Tipografia com hierarquia editorial clara.
- Grades, linhas divisórias e espaços bem definidos.
- Navegação lateral funcional.
- Indicadores de progresso discretos.
- Interface responsiva para desktop e celular.

## Tema

- Implementar alternância entre tema claro e escuro.
- O primeiro acesso deve iniciar no tema escuro.
- Salvar a preferência em `localStorage`.
- Respeitar a preferência já salva.
- Aplicar o tema antes da renderização visual, evitando mudança brusca de aparência.

A identidade visual deverá ser consistente em todas as páginas, incluindo simulados, questões, flashcards, revisões e caderno de erros.

Priorizar legibilidade, velocidade, organização e facilidade de navegação.

# 9. ORGANIZAÇÃO E QUALIDADE DO PROJETO

Antes de criar ou alterar arquivos:

- Verifique a estrutura existente.
- Preserve arquivos e funcionalidades já implementados.
- Evite duplicação de conteúdo.
- Atualize os índices e referências quando necessário.
- Mantenha os nomes de arquivos consistentes.
- Não sobrescreva conteúdo válido sem necessidade.

Antes de encerrar uma tarefa:

- Verifique a aderência ao edital.
- Verifique a integridade das referências.
- Verifique a consistência técnica.
- Verifique links e caminhos dos arquivos.
- Teste as funcionalidades afetadas.
- Verifique a responsividade quando houver alterações visuais.
- Registre o que foi concluído e o que permanece pendente.

Nunca declare que um conteúdo, simulado ou funcionalidade está completo sem ter realizado as verificações correspondentes.

# 10. PRINCÍPIO FUNDAMENTAL

O objetivo não é simplesmente produzir muitos arquivos ou páginas.

O objetivo é construir um material de preparação tecnicamente correto, completo em relação ao edital, direcionado à Fundação Cesgranrio e efetivamente útil para a aprovação no Processo Seletivo Público TRANSPETRO 2026.4 — Ênfase 5.