# Relatório da P3 — Qualidade e distribuição (T13 a T15)

**Data:** 2026-11-07. Detalhes da T13 em `relatorio-t13.md`.

## T13 — Qualidade e fontes
Gabaritos oficiais da Transpetro 2018 e 2023 conferidos por script contra os PDFs da Cesgranrio (63 de 63, sem divergência) e rótulo atualizado; 30 questões autorais resolvidas às cegas (30 de 30, mesmo modelo que as escreveu, portanto não é revisão humana); PMBOK 6 (49 processos), Scrum Guide e princípios do ISTQB confirmados em fontes secundárias. **Pendente:** 66 questões oficiais de outras provas com gabarito de espelho/não recomparado, textos primários PMI/ISO/ITIL, validação humana das 194 questões `em_revisao`.

## T14 — NotebookLM
`python tools/build_notebooklm.py` gera, em `notebooklm/`: 11 fontes completas (M01–M09, Português, Inglês; 1,8 MB no total da pasta), 22 arquivos de questões (sem gabarito e com gabarito comentado, origem indicada em cada questão), 11 resumos (seções "Síntese" extraídas), 11 mapas Mermaid (estrutura de títulos), 6 prompts e índice com exclusões. Excluído: raciocínio lógico complementar (RASCUNHO). **Pendente:** roteiros de podcast; PDFs; resumos/mapas são extração automática, não reescrita; não foi testado o envio ao NotebookLM.

## T15 — Auditoria do site
`python tools/auditar_site.py`: sintaxe dos 17 JS, referências do `index.html`, ausência de URL externa, 86 arquivos de conteúdo, IDs dos simulados, 284 questões A–E, contraste WCAG dos dois temas. Correções: tokens de cor (texto terciário, petróleo, erro e âmbar) ajustados para ≥ 4,5:1; link "Pular para o conteúdo"; menu lateral fechado no celular deixou de receber foco. No navegador: 11 rotas sem erro de console; exportar/importar (substituir e mesclar), backup inválido rejeitado, dado corrompido preservado em outra chave; 375 px sem rolagem horizontal; tema escuro inicial e persistência. **Não testado:** outros navegadores, leitor de tela, tablet (apenas larguras 375 px e desktop), uso prolongado.

## Pendências gerais
Ver as três seções acima; nada foi declarado completo além do que foi verificado.
