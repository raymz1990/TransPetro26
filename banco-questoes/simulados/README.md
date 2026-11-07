# Simulados — dados

Gerados por `python tools/lotes/simulados.py` (seleção determinística) a partir do banco de questões; validados por `python tools/validar_banco.py`. O site lê `site/assets/data/simulados.json` (gerado por `tools/build_site_data.py`).

| ID | Conteúdo | Questões | Tempo | Status |
|---|---|---|---|---|
| SIM-ESP-01 | Específicos, somente `validada` | 50 | 193 min | questões validadas |
| SIM-ESP-02 | Específicos, oficiais + autorais (disjunto do ESP-01) | 50 | 193 min | rascunho |
| SIM-COM-01 | Completo: 10 Português + 10 Inglês + 50 Específicos (as do ESP-01) | 70 | 270 min | rascunho (Gerais `em_revisao`) |
| SIM-GER-01 | Conhecimentos Gerais (as 20 do COM-01) | 20 | 77 min | rascunho |
| SIM-M01 a SIM-M09 | Um por módulo (até 15 questões) | 13 a 15 | 50 a 58 min | rascunho |
| SIM-DIAG-01 | Diagnóstico inicial (fáceis e médias, validadas) | 20 | 77 min | questões validadas |

## Critérios (todos do projeto, nenhum oficial)

- **Estrutura do completo:** a do edital (7.1.1): 70 questões, 1 ponto cada, 5 alternativas, 4h30; ordem como nas provas catalogadas (1 a 10 Português, 11 a 20 Inglês, 21 a 70 Específicos).
- **Distribuição dos 50 Específicos por módulo:** o edital **não informa** pesos por assunto. Usa-se distribuição **pedagógica**, proporcional ao número de itens do Anexo IV (M1 23, M2 7, M3 1, M4 6, M5 5, M6 11, M7 11, M8 9, M9 21 de 94), com piso de 3 por módulo: M1 10 a 11, M2 4, M3 3, M4 3, M5 3, M6 6 a 7, M7 6, M8 4, M9 10. **Não** é previsão da prova real.
- **Tempo:** proporcional ao da prova real (270 min para 70 questões = 3,86 min por questão).
- **Dificuldade:** meta de 30% fáceis, 50% médias e 20% difíceis (classificação pedagógica do projeto, não estatística da banca).
- **Itens:** a seleção prioriza itens do edital ainda não usados no simulado.
- **Limites do banco de Gerais:** 11 questões de Inglês: não há um segundo simulado completo com Inglês inédito.
- **Corte do edital** (apenas referência no resultado do completo): mínimo de 25 de 50 em Específicos e 10 de 20 em Gerais; zero em Português ou Inglês elimina (item 7.1.4.3).

Não declarar um simulado "validado" antes da revisão do usuário; "questões validadas" significa apenas que todas as questões têm `status_validacao = validada`.
