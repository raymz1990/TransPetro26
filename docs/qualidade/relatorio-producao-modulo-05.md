# Relatório de Produção — Módulo 5: Engenharia de software
**Data:** 2026-10-31 · **Prompt:** 02 (Módulo 5 autorizado pelo usuário após a validação do Módulo 4)

| Campo | Informação |
|---|---|
| Módulo | M05 (item 5 do Anexo IV) |
| Itens oficiais | E5-041 (item 5, título) e E5-042 a E5-046 (subitens 5.1 a 5.5) |
| Arquivos produzidos | 7, em `conteudo/05-engenharia-software/` (≈ 15 mil palavras): 6 de escopo A e 1 complementar B (`01-fundamentos`, C5-002) |
| Itens cobertos (teoria produzida) | 5 de 5 subitens; item principal 5 incluído |
| Fontes consultadas | Edital; matriz aprovada; catálogo de provas; fontes secundárias (UML 2.5.1, ISO/IEC 25010, ISO/IEC/IEEE 29148, princípios ISTQB) |
| Revisão técnica | **Executada em 2026-10-31, parcial:** exemplos de código executados; aritmética conferida; versão e data da UML (página da OMG), versionamento semântico (semver.org), McCabe, Fagan e Gamma et al. verificados; **normas ISO inacessíveis (HTTP 403)** e demais pontos de memória não verificados |
| Status final | `VALIDADO` pelo usuário em 2026-10-31, **com ressalvas** (ver resultado da revisão) |

## Mapa

| Arquivo | Subitens | Observação |
|---|---|---|
| `01-fundamentos.md` | título do item 5 | Complemento B (C5-002): qualidade, manutenção, métricas |
| `02-requisitos-software.md` | 5.1 | Funcionais/não funcionais, levantamento, priorização, gerenciamento |
| `03-ciclo-de-vida.md` | 5.2 | Modelos de ciclo de vida; 'paradigmas' lido como paradigmas de ciclo de vida |
| `04-paradigmas.md` | 5.3 | Estruturado e orientado a objetos (conceitos); exemplos ilustrativos em Python (Java não é conteúdo da Ênfase 5) |
| `05-analise-e-projeto.md` | 5.3 | DFD, dicionário de dados, UML (14 diagramas), metodologias e ferramentas |
| `06-verificacao-e-validacao.md` | 5.4 | V&V, técnicas estáticas e dinâmicas, níveis, tipos, caixa-preta/branca, complexidade ciclomática, mutação |
| `07-testes-e-ambientes.md` | 5.5 | Ambientes, controle de versão, CI/CD, contêineres, IaC, DevOps; ambientes de teste |

## Dúvidas e ressalvas

1. **Item 5.2 ('seus paradigmas')** e **item 5.5 (ambientes)** têm redação genérica: adotadas leituras (paradigmas de ciclo de vida; ambiente em sentido amplo). **Confirmar** com o usuário.
2. **Terminologia de polimorfismo:** provas usaram 'polimorfismo' e 'sobrecarga' de modos distintos; o texto registra a variação.
3. **Verificações online:** UML 2.5.1 (14 diagramas; dez./2017), ISO/IEC 25010 (8 características em 2011; 9 em 2023, com renomeações) e ISO/IEC/IEEE 29148:2018 (existência) em fontes secundárias; princípios de teste ISTQB em fontes secundárias. **Não consultados** os textos oficiais.
4. **Pontos de memória sem fonte:** modelos de ciclo de vida e marcos do RUP, coesão e acoplamento, DFD e notações, GRASP/SOLID/GoF, técnicas de teste e cobertura, McCabe, Fagan, versionamento semântico, CI/CD, DevOps/CALMS.
5. **Escopo C/B:** métricas de software (pontos de função, qualidade) do programa de 2018 aparecem só como complemento.
6. Nenhuma questão, simulado, flashcard ou alteração no site; exemplos hipotéticos; nada inventado sobre sistemas da Transpetro.

## Evidência de provas (sem afirmar frequência)

2023: Q23 (testes estáticos), Q24 (requisito funcional), Q25 (modelos sequenciais), Q31 (teste de aceitação), Q32 (sobrecarga), Q54 (cascata). 2018: Q23 (fase de elaboração do PU), Q24 (teste de mutação), Q25 (complexidade ciclomática), Q27 (casos de uso), Q29 (polimorfismo). Sem questão: 5.5.

## Resultado da revisão (2026-10-31)

| Ponto | Resultado |
|---|---|
| Exemplos de código (Python): programa estruturado (saída 6), polimorfismo (saídas esperadas), função de desconto | **Executados:** todos produzem o resultado descrito |
| Aritmética: complexidade ciclomática 12 − 5 + 2 = 9; canais de comunicação; limites 17/18/19/64/65/66 e representantes 10/40/80 | **Conferida** |
| Teste de mutação: mutante `>=` no lugar de `>` | **Verificado em execução:** só um teste de fronteira (valor 1000) o distingue do original; o teste com valor 2000 não o detecta |
| Cobertura: um único teste verdadeiro cobre os comandos do desconto, mas não os dois resultados da decisão | **Conferido** |
| UML 2.5.1 | **Página da OMG:** versão 2.5.1, status formal, dezembro de 2017; os **14 diagramas** só em fontes secundárias (a página não os lista) |
| Versionamento semântico | **Confirmado** em semver.org |
| McCabe (1976), Fagan (1976), Gamma et al. (1994) | **Confirmados** (fontes secundárias e listagens) |
| ISO/IEC 25010, ISO/IEC/IEEE 29148 e 12207 | **Inacessíveis** (iso.org, HTTP 403); informações de fontes secundárias, quando existentes |
| Princípios de teste (ISTQB) | **Não confirmados em fonte primária** (a página pública não os lista; o sílabo não foi baixado) |
| Spiral de Boehm (1986/1988); Böhm–Jacopini; Dijkstra; DeMarco; Humble e Farley; Kim et al. | **Não verificados** |

**Correções feitas:** nenhum erro de conteúdo foi encontrado nos exemplos; ajustadas as referências para distinguir verificado, secundário e não verificado.

## Pendências

- Confirmação da interpretação dos itens 5.2 e 5.5; conferência dos textos oficiais (UML, ISO, sílabo ISTQB) quando houver acesso; aprovação do usuário para o Módulo 6.
