# -*- coding: utf-8 -*-
"""T06 — Questões autorais de Conhecimentos Gerais (Língua Portuguesa e Língua Inglesa): AUT-000121 a AUT-000156.
Textos autorais (criados pelo projeto). Regras gramaticais conferidas pela teoria do projeto e pela norma-padrão;
VOLP/ABL e gramáticas de referência não foram consultados nesta etapa (ver ressalvas em docs/qualidade/relatorio-producao-gerais.md)."""
import sys, os
sys.path.insert(0, os.path.dirname(os.path.dirname(os.path.abspath(__file__))))
from qlib import *

ROT = "Questão autoral — estilo Cesgranrio."
LP = "gerais-lingua-portuguesa"; LI = "gerais-lingua-inglesa"
TEO = {"LP-%02d" % i: p for i, p in enumerate([
    "01-compreensao-de-textos", "02-ortografia-oficial", "03-coesao-textual", "04-significacao-das-palavras", "05-tempos-e-modos-verbais",
    "06-classes-de-palavras", "07-coordenacao-e-subordinacao", "08-pontuacao", "09-concordancia", "10-regencia", "11-crase",
    "12-colocacao-pronominal"], 1)}
TEO = {k: "conteudo-gerais/01-lingua-portuguesa/%s.md" % v for k, v in TEO.items()}
TEO["LI-01"] = "conteudo-gerais/02-lingua-inglesa/01-compreensao-de-texto.md"
TEO["LI-02"] = "conteudo-gerais/02-lingua-inglesa/02-itens-gramaticais.md"
NOME = {"LP-01": "Compreensão de textos", "LP-02": "Ortografia oficial", "LP-03": "Mecanismos de coesão textual", "LP-04": "Significação das palavras",
        "LP-05": "Tempos e modos verbais", "LP-06": "Classes de palavras", "LP-07": "Coordenação e subordinação", "LP-08": "Pontuação",
        "LP-09": "Concordância verbal e nominal", "LP-10": "Regência verbal e nominal", "LP-11": "Crase", "LP-12": "Colocação dos pronomes átonos",
        "LI-01": "Compreensão de texto em inglês", "LI-02": "Itens gramaticais em inglês"}

T1 = ("A transição energética costuma ser apresentada como uma corrida tecnológica, mas ela é, antes de tudo, um problema de organização. "
      "Novas fontes de energia exigem redes de transmissão adaptadas, regras de mercado claras e, principalmente, trabalhadores capacitados para operá-las. "
      "Sem esses elementos, a inovação, por mais promissora que seja, permanece restrita aos laboratórios e às apresentações de resultados.\n\n"
      "Por isso, as empresas do setor têm investido em programas de formação contínua. Esses programas, no entanto, só funcionam quando acompanhados de "
      "mudanças nos processos internos: de nada adianta treinar equipes se as decisões continuam concentradas em poucas mãos. "
      "Assim, a tecnologia deixa de ser o fim e passa a ser o meio de uma gestão mais transparente.")
TA = ("Digital twins are virtual replicas of physical assets, such as pumps, pipelines or entire refineries. Sensors installed on the equipment send data "
      "continuously to the model, which is then used to simulate how the asset behaves under different conditions. Engineers can, for example, test a "
      "maintenance plan on the virtual copy before applying it in the field, which reduces both costs and risks. However, a digital twin is only as "
      "reliable as the data that feeds it: if sensors are poorly calibrated, the simulations may lead teams to wrong decisions. For this reason, "
      "companies that adopt the technology usually invest first in data quality and only afterwards in more sophisticated models.")
TB = ("Phishing remains one of the most common ways to compromise a company's systems. Attackers send messages that look like they come from a trusted "
      "source and urge the reader to click a link or open an attachment. Although many people believe that only inexperienced employees fall for these "
      "messages, experience shows that anyone can be deceived when tired or in a hurry. Therefore, the best defence combines technical filters with "
      "regular training and a simple procedure to report suspicious emails.")

L_ = []
def G(mod, item, assunto, dif, hab, tq, enun, certa, erradas, an_certa, an_erradas, resol, ponto, rev, tags=()):
    n = 120 + len(L_) + 1
    pos = (n * 2 + n // 5) % 5
    alts = list(erradas); alts.insert(pos, certa)
    an = list(an_erradas); an.insert(pos, an_certa)
    L_.append(questao("AUT-%06d" % n, "autoral", ROT, mod, item, assunto, dif, hab, tq, enun, alts, "ABCDE"[pos], resol, an, ponto, rev,
                      fonte=None, verif="Conferida pela teoria do projeto e pela norma-padrão; sem consulta a VOLP/gramática de referência.",
                      tags=list(tags) + [item.lower()], teoria=TEO[item], extra={"id_matriz": item, "titulo_item": NOME[item]}))

# ---------------- LÍNGUA PORTUGUESA ----------------
G(LP, "LP-01", "Compreensão: ideia central do texto", "facil", "compreensao", "interpretativa",
  "Leia o texto a seguir.\n\n" + T1 + "\n\nA ideia central do texto é a de que",
  "o sucesso da transição energética depende de pessoas, regras e processos, e não apenas de avanços tecnológicos.",
  ["as empresas do setor devem substituir a formação de pessoal por novas tecnologias de transmissão.", "a inovação tecnológica é irrelevante para a transição energética, que depende apenas de regras de mercado.", "a transição energética é uma corrida tecnológica em que vencem as empresas com mais laboratórios.", "os programas de formação contínua bastam para tornar a gestão das empresas mais transparente."],
  "Resume o argumento do texto: a transição é, \"antes de tudo, um problema de organização\", e a tecnologia é meio.",
  ["O texto defende a capacitação de trabalhadores, e não sua substituição.", "O texto não considera a inovação irrelevante; afirma que ela fica restrita sem organização.", "Reproduz a visão que o autor contesta (\"costuma ser apresentada\"), e não a sua tese.", "O texto afirma que os programas só funcionam se acompanhados de mudanças nos processos, ou seja, não bastam."],
  "A **ideia central** costuma aparecer na tese que o autor opõe a uma visão comum (\"mas ela é, antes de tudo...\").",
  "Cuidado com alternativas que repetem a visão **contestada** pelo texto ou usam \"apenas\" e \"bastam\".", "Ideia central = tese do autor, não a opinião que ele refuta.", ["interpretacao"])
G(LP, "LP-01", "Compreensão: inferência", "media", "interpretacao", "interpretativa",
  "Leia o texto a seguir.\n\n" + T1 + "\n\nDe acordo com o texto, treinar equipes é insuficiente quando",
  "as decisões permanecem concentradas em poucas pessoas, sem mudança nos processos internos.",
  ["os trabalhadores treinados não dominam as novas fontes de energia.", "as regras de mercado são claras e estáveis para todas as empresas.", "a inovação tecnológica é apresentada em laboratórios e em eventos.", "os programas de formação contínua são oferecidos a todos os funcionários."],
  "O texto afirma: \"de nada adianta treinar equipes se as decisões continuam concentradas em poucas mãos\".",
  ["A insuficiência do treinamento decorre da concentração das decisões, e não da falta de domínio técnico.", "Regras de mercado claras são tratadas como elemento necessário, e não como obstáculo.", "A restrição da inovação aos laboratórios é consequência da falta de elementos de organização, e não o motivo da insuficiência do treinamento.", "A oferta a todos os funcionários não é apontada como problema."],
  "Resposta localizada no texto (trecho após os dois-pontos).", "Em questões de compreensão, **volte ao trecho** e compare, palavra a palavra, com a alternativa.", "\"De nada adianta... se...\" = condição de ineficácia.", ["inferencia"])
G(LP, "LP-02", "Ortografia: grafia correta de palavras", "media", "memorizacao", "conceitual",
  "Em qual alternativa todas as palavras estão grafadas de acordo com a ortografia oficial?",
  "exceção – ascensão – privilégio – beneficente",
  ["excessão – ascensão – privilégio – beneficente", "exceção – assenção – privilégio – beneficiente", "exceção – ascensão – previlégio – beneficente", "excessão – assenção – previlégio – beneficiente"],
  "Todas as grafias estão corretas: exceção (de *excetuar*), ascensão (subida), privilégio e beneficente.",
  ["\"Excessão\" está errada; o correto é \"exceção\" (*excesso* é outra palavra).", "\"Assenção\" e \"beneficiente\" estão erradas; os corretos são \"ascensão\" e \"beneficente\".", "\"Previlégio\" está errada; o correto é \"privilégio\".", "As quatro palavras estão grafadas de forma incorreta."],
  "Atenção às palavras de uso frequente: **exceção** (≠ excesso), **ascensão** (subida) × **assunção** (ato de assumir), **privilégio**, **beneficente** (≠ beneficiente).",
  "Palavras de memória: exceção, ascensão, privilégio, beneficente.", "Uma letra trocada elimina a alternativa.", ["grafia"])
G(LP, "LP-02", "Ortografia: acentuação gráfica após o Acordo Ortográfico", "media", "memorizacao", "conceitual",
  "De acordo com o Acordo Ortográfico em vigor, a alternativa em que todas as palavras estão corretamente acentuadas ou não acentuadas é",
  "ideia – joia – voo – herói",
  ["idéia – joia – voo – herói", "ideia – jóia – voo – herói", "ideia – joia – vôo – herói", "ideia – joia – voo – heroi"],
  "Desde 2009, os ditongos abertos *ei* e *oi* de palavras paroxítonas perdem o acento (ideia, joia), o hiato *oo* perde o acento (voo) e a oxítona terminada em *-oi* conserva o acento (herói).",
  ["\"Idéia\" não é mais acentuada.", "\"Jóia\" não é mais acentuada.", "\"Vôo\" não é mais acentuada: o hiato *oo* perdeu o acento.", "\"Herói\" é oxítona terminada em ditongo aberto *-oi* e mantém o acento."],
  "Memorize: **perdem** o acento *ideia, joia, assembleia, paranoico, voo, enjoo*; **mantêm** *herói, papéis, troféu, céu*.",
  "Paroxítonas: ei/oi abertos sem acento; oxítonas em éi, éu, ói: com acento.", "Regra do acento depende da posição da sílaba tônica.", ["acentuacao"])
G(LP, "LP-03", "Coesão: valor do conector \"Por isso\"", "media", "compreensao", "interpretativa",
  "Leia o texto a seguir.\n\n" + T1 + "\n\nNo início do segundo parágrafo, a expressão \"Por isso\" estabelece, em relação ao primeiro parágrafo, uma relação de",
  "conclusão (consequência).",
  ["oposição.", "concessão.", "comparação.", "alternância."],
  "\"Por isso\" retoma o que foi dito antes como causa e apresenta a consequência: as empresas investem em formação porque, sem pessoas capacitadas, a inovação fica restrita.",
  ["Oposição seria marcada por \"mas\" ou \"no entanto\".", "Concessão seria marcada por \"embora\" ou \"ainda que\".", "Comparação seria marcada por \"como\" ou \"assim como\".", "Alternância seria marcada por \"ou\" ou \"ora... ora\"."],
  "Conectores mais cobrados: **conclusão** (portanto, logo, por isso), **oposição** (mas, porém, no entanto), **concessão** (embora, apesar de), **causa** (porque, pois), **adição** (e, além disso).",
  "\"Por isso\" = conclusão/consequência, não causa.", "Troque o conector por outro de sentido conhecido e verifique se o sentido se mantém.", ["conectores"])
G(LP, "LP-03", "Coesão: referência e retomada", "media", "compreensao", "interpretativa",
  "Leia o texto a seguir.\n\n" + T1 + "\n\nNo segundo parágrafo, a expressão \"Esses programas\" retoma, no primeiro período do mesmo parágrafo, os(as)",
  "programas de formação contínua.",
  ["empresas do setor.", "redes de transmissão adaptadas.", "regras de mercado claras.", "apresentações de resultados."],
  "O pronome demonstrativo \"Esses\" retoma o termo mais próximo anterior que pode ser designado como \"programas\": \"programas de formação contínua\".",
  ["\"As empresas do setor\" são as que investem, e não os programas.", "As redes de transmissão são mencionadas no primeiro parágrafo e não são \"programas\".", "As regras de mercado não são retomadas por \"programas\".", "As apresentações de resultados não são retomadas por \"programas\"."],
  "Mecanismos de coesão referencial: **anáfora** (retoma o que veio antes) e **catáfora** (antecipa). Procure o termo **mais próximo** com o mesmo gênero e número.",
  "Pronome demonstrativo anafórico: o antecedente está **antes**.", "Teste de substituição: troque a expressão pelo antecedente e releia.", ["referenciacao"])
G(LP, "LP-04", "Significação: paráfrase de expressão concessiva", "media", "compreensao", "interpretativa",
  "Leia o texto a seguir.\n\n" + T1 + "\n\nA expressão \"por mais promissora que seja\" (1º parágrafo) pode ser substituída, sem alteração de sentido, por",
  "ainda que seja muito promissora.",
  ["porque é muito promissora.", "desde que seja muito promissora.", "uma vez que é muito promissora.", "logo que seja muito promissora."],
  "\"Por mais ... que\" introduz uma **concessão**: a inovação, mesmo sendo muito promissora, fica restrita sem organização. \"Ainda que\" é conjunção concessiva.",
  ["\"Porque\" indica causa, e não concessão.", "\"Desde que\" indica condição.", "\"Uma vez que\" indica causa.", "\"Logo que\" indica tempo."],
  "Substituir conectores exige reconhecer a **relação lógica**: concessão (embora, ainda que, por mais que), condição (se, desde que, caso), causa (porque, já que, uma vez que), tempo (quando, logo que).",
  "\"Por mais que\" = ainda que = embora.", "Reconheça a relação, e não só a palavra.", ["sinonimia", "concessao"])
G(LP, "LP-04", "Significação: parônimos infringir e infligir", "media", "memorizacao", "conceitual",
  "Complete as lacunas da frase: \"A empresa foi multada por ______ as normas ambientais, e o órgão fiscalizador ______ a pena prevista em lei.\"",
  "infringir – infligiu",
  ["infligir – infringiu", "infringir – infringiu", "infligir – infligiu", "infringir – infligiram"],
  "**Infringir** = violar, descumprir (normas, leis); **infligir** = aplicar, impor (pena, castigo). Violar as normas = infringir; aplicar a pena = infligir. O verbo concorda com \"o órgão\" (singular): infligiu.",
  ["Troca os verbos: violar normas é *infringir*, e aplicar pena é *infligir*.", "\"Infringiu a pena\" está incorreto; pena se *inflige*.", "\"Infligir as normas\" está incorreto; norma se *infringe*.", "A concordância está errada: o sujeito (\"o órgão\") é singular."],
  "Parônimos clássicos: **infringir** (violar) × **infligir** (aplicar); **iminente** (prestes a ocorrer) × **eminente** (notável); **descrição** × **discrição**.",
  "Infringir a lei; infligir a pena.", "Memorize o par pelo objeto: lei/norma (infringir); pena/castigo (infligir).", ["paronimos"])
G(LP, "LP-05", "Tempos e modos verbais: correlação imperfeito do subjuntivo e futuro do pretérito", "media", "aplicacao", "aplicada",
  "Complete a frase de acordo com a norma-padrão: \"Se o sistema ______ a falha a tempo, a equipe a corrigiria antes do início do expediente.\"",
  "detectasse",
  ["detectar", "detectou", "detectará", "detectaria"],
  "A oração principal está no **futuro do pretérito** (\"corrigiria\"); a condição hipotética correspondente é expressa pelo **pretérito imperfeito do subjuntivo**: \"se o sistema detectasse\".",
  ["\"Detectar\" (infinitivo) não pode ser empregado nessa construção condicional.", "\"Detectou\" (indicativo) não expressa a hipótese correlata ao futuro do pretérito.", "\"Detectará\" (futuro do presente) não combina com \"corrigiria\".", "\"Detectaria\" (futuro do pretérito) não pode aparecer na oração com \"se\"."],
  "Correlação: **se + imperfeito do subjuntivo → futuro do pretérito** (hipótese); **se + presente do indicativo → futuro do presente** (possibilidade real); **se + mais-que-perfeito do subjuntivo → futuro do pretérito composto** (hipótese passada).",
  "Se detectasse → corrigiria.", "Identifique o tempo da oração principal para escolher o da subordinada.", ["periodo-hipotetico"])
G(LP, "LP-05", "Tempos e modos verbais: futuro do subjuntivo do verbo \"propor\"", "media", "aplicacao", "aplicada",
  "Complete a frase de acordo com a norma-padrão: \"Quando o gerente ______ a alteração do cronograma, a equipe a avaliará.\"",
  "propuser",
  ["propor", "propôs", "proporá", "proponha"],
  "A conjunção **\"quando\"**, com ideia de ação futura, pede o **futuro do subjuntivo**. O verbo *propor* (derivado de *pôr*) conjuga-se como *pôr*: eu puser → ele propuser.",
  ["O infinitivo não completa a frase.", "\"Propôs\" é pretérito perfeito do indicativo; a ação ainda não ocorreu.", "\"Proporá\" é futuro do presente do indicativo, que não é empregado após \"quando\" nesse sentido.", "\"Proponha\" é presente do subjuntivo, que não se usa após \"quando\" com referência futura."],
  "Verbos derivados de **pôr** seguem o primitivo: **propuser, repuser, compuser, dispuser**. Após *quando, se, assim que, logo que* (ação futura): futuro do subjuntivo.",
  "Quando/se/assim que + ação futura → futuro do subjuntivo (propuser).", "Conjugue o verbo primitivo e acrescente o prefixo.", ["subjuntivo", "verbo-por"])
G(LP, "LP-06", "Classes de palavras: valor do \"que\"", "media", "analise", "conceitual",
  "Em qual das frases a palavra \"que\" é um pronome relativo?",
  "O sistema que adotamos é seguro.",
  ["Sabemos que o prazo terminou.", "O arquivo era tão grande que não coube no disco.", "Que bom que você chegou!", "Trabalhou mais que ele."],
  "No pronome relativo, \"que\" **retoma um antecedente** (\"sistema\") e pode ser substituído por \"o qual\": \"O sistema **o qual** adotamos...\".",
  ["Conjunção integrante, que introduz oração subordinada substantiva objetiva direta.", "Conjunção subordinativa consecutiva, que liga a consequência à intensidade (\"tão ... que\").", "O primeiro \"que\" é advérbio de intensidade (\"Que bom!\") e o segundo, conjunção integrante.", "Conjunção subordinativa comparativa (\"mais ... que\")."],
  "Teste: se **\"o qual / a qual / os quais\"** substitui o \"que\", ele é **pronome relativo**; se introduz uma oração que completa o verbo, é **conjunção integrante**.",
  "Que relativo = o qual; que integrante = não substituível.", "Substituição por \"o qual\" resolve a maioria dos casos.", ["que", "pronome-relativo"])
G(LP, "LP-06", "Classes de palavras: mau, mal", "facil", "aplicacao", "aplicada",
  "Complete as lacunas: \"O funcionário saiu-se ______ na prova, pois estava de ______ humor.\"",
  "mal – mau",
  ["mau – mal", "mal – mal", "mau – mau", "mal – meu"],
  "**Mal** é advérbio (oposto de *bem*; modifica o verbo *sair-se*) ou substantivo; **mau** é adjetivo (oposto de *bom*; modifica o substantivo *humor*): \"saiu-se mal\" (bem), \"de mau humor\" (bom).",
  ["Troca as palavras: advérbio no primeiro caso e adjetivo no segundo.", "\"Mal humor\" é incorreto; *humor* pede o adjetivo *mau*.", "\"Saiu-se mau\" é incorreto; o verbo pede advérbio (*mal*).", "\"Meu humor\" muda o sentido, e a combinação não faz sentido na frase."],
  "Teste de substituição: troque por **bem/bom**. Se couber \"bem\", use **mal**; se couber \"bom\", use **mau**.",
  "Mal ↔ bem (advérbio); mau ↔ bom (adjetivo).", "Substitua pelo antônimo.", ["mal-mau"])
G(LP, "LP-07", "Coordenação: oração coordenada sindética conclusiva", "media", "analise", "conceitual",
  "Leia o período: \"O prazo terminou; portanto, não aceitaremos novos pedidos.\"\n\nA segunda oração é classificada como coordenada sindética",
  "conclusiva.",
  ["adversativa.", "aditiva.", "explicativa.", "alternativa."],
  "\"Portanto\" é conjunção **conclusiva**: a segunda oração apresenta a conclusão decorrente da primeira.",
  ["Adversativas usam *mas, porém, contudo*.", "Aditivas usam *e, nem, também*.", "Explicativas usam *pois* (anteposto ao verbo), *porque*, *que*, justificando a primeira.", "Alternativas usam *ou, ora... ora, quer... quer*."],
  "Conjunções coordenativas: **aditivas** (e, nem), **adversativas** (mas, porém, contudo, todavia), **alternativas** (ou, ora), **conclusivas** (logo, portanto, por isso, pois posposto), **explicativas** (porque, pois anteposto, que).",
  "Portanto, logo, por conseguinte = conclusão.", "Pergunte: a segunda oração é conclusão ou explicação da primeira?", ["coordenacao"])
G(LP, "LP-07", "Subordinação: oração subordinada adverbial concessiva", "media", "analise", "conceitual",
  "Leia o texto a seguir.\n\n" + T1 + "\n\nNo trecho \"a inovação, por mais promissora que seja, permanece restrita aos laboratórios\", a oração \"por mais promissora que seja\" é classificada como subordinada adverbial",
  "concessiva.",
  ["causal.", "condicional.", "consecutiva.", "temporal."],
  "A oração apresenta um fato que **poderia impedir**, mas **não impede**, o que se afirma na principal: ideia de **concessão**.",
  ["A causal indicaria a razão (porque, já que).", "A condicional indicaria a condição (se, caso, desde que).", "A consecutiva indicaria a consequência da intensidade (tão ... que).", "A temporal indicaria o momento (quando, assim que)."],
  "Construções concessivas: **embora, ainda que, mesmo que, por mais que, apesar de que, conquanto**. O verbo costuma estar no **subjuntivo**.",
  "Por mais que / ainda que = concessiva.", "Procure o fato \"que seria esperado impedir\" a ação principal.", ["subordinacao"])
G(LP, "LP-08", "Pontuação: uso da vírgula", "media", "aplicacao", "conceitual",
  "A vírgula está empregada de acordo com a norma-padrão em",
  "Na reunião de ontem, o gerente apresentou os resultados.",
  ["O diretor da empresa, anunciou o novo plano.", "Os trabalhadores que cumprem as metas, receberão bônus.", "O gerente apresentou, os resultados na reunião.", "Quando chegou o relatório, não havia mais tempo, para corrigi-lo."],
  "A vírgula isola o **adjunto adverbial deslocado** (\"Na reunião de ontem\"), antes do sujeito. Não separa sujeito de verbo nem verbo de complemento.",
  ["Separa o sujeito (\"O diretor da empresa\") do verbo.", "Separa o sujeito (\"Os trabalhadores que cumprem as metas\") do verbo.", "Separa o verbo (\"apresentou\") de seu complemento.", "A segunda vírgula separa a oração principal da subordinada final reduzida, sem necessidade."],
  "**Nunca** se separa sujeito de verbo, nem verbo de complemento, com vírgula simples. Usa-se vírgula para **adjuntos deslocados, vocativos, apostos, enumerações e orações adverbiais antepostas**.",
  "Sem vírgula entre sujeito e verbo, nem entre verbo e objeto.", "Faça a ordem direta (sujeito, verbo, complemento) e veja onde a vírgula separa termos ligados.", ["virgula"])
G(LP, "LP-08", "Pontuação: oração adjetiva restritiva e explicativa", "dificil", "analise", "interpretativa",
  "Compare as frases.\n\nI – \"Os empregados que cumpriram as metas receberam bônus.\"\nII – \"Os empregados, que cumpriram as metas, receberam bônus.\"\n\nDe acordo com o sentido produzido pela pontuação,",
  "em I, apenas os empregados que cumpriram as metas receberam bônus; em II, todos os empregados cumpriram as metas e receberam bônus.",
  ["em I, todos os empregados cumpriram as metas; em II, apenas alguns receberam bônus.", "as duas frases têm o mesmo sentido, pois a vírgula é facultativa.", "em I, nenhum empregado recebeu bônus; em II, todos receberam bônus sem cumprir as metas.", "em I, a oração é explicativa; em II, a oração é restritiva."],
  "Sem vírgula, a oração adjetiva é **restritiva**: delimita o grupo (só os que cumpriram). Com vírgulas, é **explicativa**: acrescenta informação sobre todo o grupo (todos cumpriram).",
  ["Inverte os sentidos.", "A vírgula altera o sentido e não é facultativa nesse caso.", "Nenhuma frase diz isso.", "Inverte a classificação: I é restritiva, e II é explicativa."],
  "**Restritiva** (sem vírgula): limita o antecedente. **Explicativa** (entre vírgulas): informa algo sobre todo o antecedente.",
  "Sem vírgula = alguns; com vírgulas = todos.", "Pontuação muda o sentido: leia as duas versões em voz alta.", ["adjetiva", "virgula"])
G(LP, "LP-09", "Concordância verbal: verbos \"existir\" e \"haver\"", "media", "aplicacao", "conceitual",
  "Em qual alternativa a concordância está de acordo com a norma-padrão?",
  "Existem falhas que precisam ser corrigidas.",
  ["Houveram muitos problemas na migração.", "Fazem dois meses que o sistema foi implantado.", "Bastam um clique para concluir a operação.", "Alugam-se uma sala comercial no centro."],
  "**Existir** é verbo pessoal: concorda com o sujeito (\"falhas\"), logo, \"existem\".",
  ["\"Haver\" no sentido de *existir* é impessoal: \"Houve muitos problemas\".", "\"Fazer\" indicando tempo decorrido é impessoal: \"Faz dois meses\".", "O sujeito \"um clique\" é singular: \"Basta um clique\".", "O sujeito \"uma sala comercial\" é singular: \"Aluga-se uma sala comercial\"."],
  "Impessoais: **haver** (existir/tempo decorrido) e **fazer** (tempo) ficam no **singular**. Já **existir** concorda com o sujeito.",
  "Haver e fazer impessoais: singular. Existir: concorda.", "Reescreva com \"existir\" ou \"ter\" para testar.", ["concordancia-verbal"])
G(LP, "LP-09", "Concordância nominal: anexo, meio", "media", "aplicacao", "aplicada",
  "Complete as lacunas: \"Seguem ______ as planilhas solicitadas, mas a diretora ficou ______ satisfeita com os dados.\"",
  "anexas – meio",
  ["anexo – meio", "anexas – meia", "anexo – meia", "anexos – meio"],
  "**Anexo** é adjetivo e **concorda** com o substantivo (\"as planilhas\" → anexas). **Meio**, no sentido de *um pouco*, é **advérbio** e fica **invariável** (\"meio satisfeita\").",
  ["\"Anexo\" deve concordar com \"planilhas\" (feminino plural).", "\"Meia\" concordaria com \"satisfeita\", mas \"meio\" é advérbio e não varia.", "Erros nas duas lacunas.", "\"Anexos\" é masculino plural e não concorda com \"as planilhas\"."],
  "**Anexo**, **obrigado**, **mesmo**, **próprio** e **bastante** (adjetivo) variam; **meio** (advérbio) e **menos** não variam. \"Em anexo\" é invariável.",
  "Anexo concorda; meio (advérbio) não varia.", "Pergunte: a palavra qualifica um substantivo (varia) ou intensifica um adjetivo (não varia)?", ["concordancia-nominal"])
G(LP, "LP-10", "Regência verbal: obedecer, assistir, aspirar, esquecer", "media", "aplicacao", "conceitual",
  "Em qual alternativa a regência verbal está de acordo com a norma-padrão?",
  "Os funcionários obedecem às normas internas.",
  ["Prefiro mais trabalhar em casa do que no escritório.", "O gerente assistiu o treinamento.", "Aspiramos o cargo de analista.", "Esqueci-me que a reunião foi cancelada."],
  "**Obedecer** é transitivo indireto: \"obedecer **a** alguém/algo\"; a crase aparece pela contração com o artigo (\"às normas\").",
  ["\"Preferir\" pede \"preferir X **a** Y\", sem \"mais\" nem \"do que\".", "\"Assistir\", no sentido de presenciar, é transitivo indireto: \"assistiu **ao** treinamento\".", "\"Aspirar\", no sentido de almejar, é transitivo indireto: \"aspiramos **ao** cargo\".", "\"Esquecer-se\" pede preposição: \"esqueci-me **de que** a reunião...\"."],
  "Verbos clássicos: **assistir** (a, presenciar), **aspirar** (a, almejar), **obedecer/desobedecer** (a), **preferir** (X a Y), **esquecer-se/lembrar-se** (de), **visar** (a, objetivo).",
  "Assistir a, aspirar a, obedecer a, preferir X a Y.", "Memorize o verbo com a preposição.", ["regencia-verbal"])
G(LP, "LP-10", "Regência nominal: contrário a, favorável a", "media", "aplicacao", "aplicada",
  "Complete as lacunas: \"O gerente mostrou-se contrário ______ proposta e favorável ______ revisão do prazo.\"",
  "à – à",
  ["com a – à", "da – na", "à – com a", "pela – a"],
  "**Contrário** e **favorável** regem a preposição **a**. Com os substantivos femininos \"proposta\" e \"revisão\", ocorre a contração da preposição com o artigo: **à** (a + a).",
  ["\"Contrário com\" não é a regência do adjetivo.", "\"Contrário da\" e \"favorável na\" são regências inadequadas.", "\"Favorável com a\" é inadequado.", "\"Contrário pela\" é inadequado; \"favorável a\" sem artigo contraído perderia a crase."],
  "Regência nominal usual: **contrário a**, **favorável a**, **necessidade de**, **responsável por/de**, **aversão a/por**, **atento a**.",
  "Contrário a; favorável a.", "A regência do adjetivo é fixa: aprenda por listas.", ["regencia-nominal"])
G(LP, "LP-11", "Crase: emprego correto do acento grave", "media", "aplicacao", "conceitual",
  "O sinal indicativo de crase está empregado corretamente em",
  "A reunião começa às 14h.",
  ["Ele chegou à pé.", "Entregue o documento à ela.", "Fomos à Brasília.", "Estamos dispostos à colaborar."],
  "Em indicação de **hora determinada** com artigo feminino plural, ocorre crase: \"às 14h\" (a + as).",
  ["Antes de palavra masculina (\"pé\") não há crase.", "Antes de pronome pessoal (\"ela\") não há crase.", "\"Brasília\" não admite artigo; \"Fomos a Brasília\" (sem crase).", "Antes de verbo no infinitivo (\"colaborar\") não há crase."],
  "Sem crase antes de: **palavra masculina, verbo, pronome pessoal, cidades sem artigo, expressões com palavras repetidas** (cara a cara). Com crase: **horas**, locuções femininas (à vista, às vezes), **a + a(s)** do complemento feminino.",
  "Crase = a (preposição) + a(s) (artigo/pronome).", "Teste da substituição por termo masculino: \"ao\"?", ["crase"])
G(LP, "LP-11", "Crase: nome de lugar modificado", "dificil", "aplicacao", "conceitual",
  "O sinal indicativo de crase está empregado corretamente em",
  "Viajamos à Roma dos imperadores.",
  ["Viajamos à Roma.", "Falamos à elas sobre o prazo.", "Começou à chover.", "Estamos frente à frente."],
  "Nomes de cidades **não admitem artigo** (\"Viajamos a Roma\"), mas, **modificados por adjunto** (\"Roma dos imperadores\"), passam a admiti-lo: \"à Roma dos imperadores\".",
  ["Sem modificador, \"Roma\" não aceita artigo; não há crase.", "Antes de pronome pessoal não há crase.", "Antes de verbo não há crase.", "Em expressões com palavras repetidas (\"frente a frente\") não há crase."],
  "Teste clássico: **\"volto da...\"** → crase; **\"volto de...\"** → sem crase. \"Volto **da** Roma dos imperadores\", logo, **à**.",
  "Cidade modificada ganha artigo → crase.", "Substitua \"ir\" por \"voltar\": se aparecer \"da\", há crase.", ["crase"])
G(LP, "LP-12", "Colocação pronominal: ênclise e próclise", "media", "aplicacao", "conceitual",
  "De acordo com a norma-padrão, a colocação do pronome átono está correta em",
  "Avisaram-me do atraso.",
  ["Me avise quando terminar.", "Ninguém avisou-me do atraso.", "Nunca esquecerei-me do prazo.", "Quem avisou-me do atraso?"],
  "Sem palavra atrativa antes do verbo, a norma-padrão pede **ênclise**: \"Avisaram-me\".",
  ["Pronome oblíquo não inicia frase na norma-padrão; seria \"Avise-me\".", "\"Ninguém\" é pronome indefinido que atrai o pronome: \"Ninguém me avisou\".", "O advérbio \"nunca\" atrai o pronome: \"Nunca me esquecerei\".", "O pronome interrogativo \"quem\" atrai o pronome: \"Quem me avisou?\"."],
  "**Próclise** (antes do verbo) com palavra atrativa: *não, nunca, ninguém, que, quem, quando, se, todos, alguém, advérbios sem pausa*. **Ênclise** com verbo iniciando a frase. **Mesóclise** só com futuro do presente/pretérito sem atrativo.",
  "Sem atrativo: ênclise; com atrativo: próclise.", "Procure a palavra que vem antes do verbo e veja se atrai o pronome.", ["colocacao-pronominal"])
G(LP, "LP-12", "Colocação pronominal: palavra atrativa \"que\"", "media", "aplicacao", "conceitual",
  "De acordo com a norma-padrão, a colocação do pronome átono está correta em",
  "Ele disse que se esqueceu do prazo.",
  ["Ele disse que esqueceu-se do prazo.", "Como disse-me o gerente, o prazo acabou.", "Todos esforçaram-se para cumprir as metas.", "Alguém falou-me do prazo."],
  "A conjunção integrante **\"que\"** atrai o pronome: \"que **se** esqueceu\" (próclise).",
  ["Com \"que\" antes do verbo, a próclise é a colocação adequada.", "\"Como\" (conjunção) atrai o pronome: \"Como me disse o gerente\".", "\"Todos\" (indefinido) atrai: \"Todos se esforçaram\".", "\"Alguém\" (indefinido) atrai: \"Alguém me falou\"."],
  "Atrativos de próclise: **conjunções subordinativas** (que, se, quando, como), **pronomes relativos, interrogativos e indefinidos**, **advérbios**, **palavras negativas**.",
  "Que + verbo → pronome antes do verbo.", "Se há atrativo, próclise.", ["colocacao-pronominal"])

# ---------------- LÍNGUA INGLESA ----------------
G(LI, "LI-01", "Compreensão (inglês): ideia principal do texto", "media", "compreensao", "interpretativa",
  "Read the text below and answer.\n\n" + TA + "\n\nSegundo o texto, o que determina a confiabilidade de um gêmeo digital?",
  "a qualidade dos dados fornecidos pelos sensores que o alimentam.",
  ["o número de refinarias que o utilizam em campo.", "a sofisticação dos modelos de simulação adotados.", "a capacidade de substituir os engenheiros nas decisões de campo.", "a ausência de qualquer teste de planos de manutenção."],
  "O texto afirma que \"a digital twin is only as reliable as the data that feeds it\": a confiabilidade depende da qualidade dos dados dos sensores.",
  ["O texto cita refinarias apenas como exemplo de ativo, e não como critério.", "O texto diz que as empresas investem primeiro em qualidade de dados, e só depois em modelos mais sofisticados.", "O texto não afirma que o gêmeo digital substitui engenheiros; eles o usam para testar planos.", "O texto diz que os engenheiros podem testar planos de manutenção na cópia virtual."],
  "Palavras-chave: **only as reliable as the data that feeds it**. Leia o trecho e compare com as alternativas.",
  "\"Only as ... as\" = depende exclusivamente de.", "Em inglês, localize a frase-chave e traduza o trecho antes de ler as opções.", ["reading"])
G(LI, "LI-01", "Compreensão (inglês): finalidade do uso de gêmeos digitais", "media", "compreensao", "interpretativa",
  "Read the text below and answer.\n\n" + TA + "\n\nDe acordo com o texto, uma vantagem de testar planos de manutenção na cópia virtual é",
  "a redução de custos e de riscos.",
  ["o aumento do número de sensores instalados.", "a eliminação da necessidade de calibração.", "a certeza de que as simulações nunca falham.", "a dispensa de dados dos equipamentos."],
  "O texto afirma: \"which reduces both costs and risks\".",
  ["O texto não relaciona os testes ao número de sensores.", "O texto, ao contrário, alerta para sensores mal calibrados.", "O texto diz que as simulações podem induzir a erros se os dados forem ruins.", "O modelo depende de dados contínuos dos equipamentos."],
  "\"Which\" retoma a ideia de testar o plano na cópia virtual antes de aplicá-lo em campo.",
  "Both costs and risks = custos e riscos.", "Cuidado com alternativas absolutas (\"nunca\", \"eliminação\").", ["reading"])
G(LI, "LI-01", "Compreensão (inglês): referência do pronome \"which\"", "dificil", "interpretacao", "interpretativa",
  "Read the text below and answer.\n\n" + TA + "\n\nNo trecho \"which is then used to simulate how the asset behaves\", a palavra \"which\" refere-se a",
  "the model.",
  ["the equipment.", "the asset.", "the data.", "the field."],
  "\"Which\" retoma \"the model\", mencionado imediatamente antes: o modelo é então usado para simular o comportamento do ativo.",
  ["\"The equipment\" é onde os sensores estão instalados; o que é usado na simulação é o modelo.", "\"The asset\" é o objeto simulado, não o que é usado para simular.", "Os dados alimentam o modelo; \"which\" refere-se ao modelo, e não aos dados.", "\"The field\" aparece em outro período e não é retomado por \"which\"."],
  "Pronomes relativos em inglês retomam o **substantivo imediatamente anterior** (com ressalvas). Teste: substitua \"which\" por \"the model\" e releia.",
  "Which → antecedente mais próximo que faz sentido.", "Substituir o pronome pelo antecedente revela erros.", ["reading", "reference"])
G(LI, "LI-01", "Compreensão (inglês): vocabulário em contexto", "media", "compreensao", "interpretativa",
  "Read the text below and answer.\n\n" + TA + "\n\nNo contexto do texto, a expressão \"feeds it\" (\"the data that feeds it\") significa",
  "fornece informação a ele continuamente.",
  ["alimenta-o com comida.", "cobra pagamento dele.", "reduz o tamanho dele.", "o substitui por outro modelo."],
  "\"To feed\" tem, aqui, sentido figurado: **fornecer dados ao modelo**, alimentá-lo com informação.",
  ["Sentido literal, inadequado ao contexto.", "\"To feed\" não significa cobrar.", "Não há ideia de redução.", "Não há ideia de substituição."],
  "Em inglês técnico, **feed** = alimentar com dados; **feedback** = retorno de informação.",
  "Feed (data) = alimentar com dados.", "O contexto elimina o sentido literal.", ["reading", "vocabulary"])
G(LI, "LI-01", "Compreensão (inglês): ideia central sobre phishing", "media", "compreensao", "interpretativa",
  "Read the text below and answer.\n\n" + TB + "\n\nO texto defende que a melhor defesa contra o phishing",
  "combina filtros técnicos, treinamento regular e um procedimento simples para relatar e-mails suspeitos.",
  ["depende apenas de filtros técnicos, porque o erro humano não é relevante.", "consiste em treinar somente os funcionários inexperientes.", "é desnecessária, pois o phishing é raro em empresas.", "baseia-se na proibição do uso de e-mail corporativo."],
  "Na última frase: \"the best defence combines technical filters with regular training and a simple procedure to report suspicious emails\".",
  ["O texto afirma que qualquer pessoa pode ser enganada; por isso, o treinamento é parte da defesa.", "O texto afirma que qualquer pessoa pode ser enganada, não apenas os inexperientes.", "O texto diz que o phishing continua sendo uma das formas mais comuns de ataque.", "O texto não propõe proibir o e-mail."],
  "A **conclusão** vem marcada por \"Therefore\".", "Therefore = portanto: sinaliza a tese final.", "Leia a frase iniciada por *Therefore*.", ["reading"])
G(LI, "LI-01", "Compreensão (inglês): conectivo \"Although\"", "media", "analise", "interpretativa",
  "Read the text below and answer.\n\n" + TB + "\n\nNo trecho \"Although many people believe that only inexperienced employees fall for these messages, experience shows that anyone can be deceived\", o conectivo \"Although\" introduz uma ideia de",
  "contraste (concessão).",
  ["causa.", "finalidade.", "condição.", "tempo."],
  "\"Although\" equivale a \"embora\": apresenta uma crença que **contrasta** com a conclusão da frase principal.",
  ["Causa seria \"because\" ou \"since\".", "Finalidade seria \"so that\" ou \"in order to\".", "Condição seria \"if\" ou \"unless\".", "Tempo seria \"when\" ou \"while\" (no sentido temporal)."],
  "Conectivos: **although/though/even though** (embora), **however/nevertheless** (no entanto), **because/since** (porque), **therefore/thus** (portanto), **if/unless** (se/a menos que).",
  "Although = embora.", "Aprenda os conectivos por função.", ["reading", "connectors"])
G(LI, "LI-02", "Gramática (inglês): oração condicional hipotética", "media", "aplicacao", "aplicada",
  "Choose the alternative that correctly completes the sentence: \"If the main pump ______ , production would stop immediately.\"",
  "failed",
  ["fails", "will fail", "had failed", "failing"],
  "Para uma situação **hipotética** no presente/futuro (segundo condicional), usa-se **if + past simple** na condição e **would + verbo** na consequência: \"If the pump failed, production would stop\".",
  ["\"Fails\" (presente) pertence ao primeiro condicional, que pede \"will\" na consequência.", "\"Will\" não se usa depois de \"if\" na oração condicional.", "\"Had failed\" (past perfect) pertence ao terceiro condicional, com \"would have stopped\".", "\"Failing\" não completa a estrutura condicional."],
  "Condicionais: **zero** (if + presente, presente); **1º** (if + presente, will); **2º** (if + past simple, would); **3º** (if + past perfect, would have + particípio).",
  "If + past simple → would.", "Identifique o verbo da oração principal para escolher o tempo da condição.", ["conditionals"])
G(LI, "LI-02", "Gramática (inglês): voz passiva", "media", "aplicacao", "aplicada",
  "Choose the alternative that correctly completes the sentence: \"The audit report ______ by the compliance team last week.\"",
  "was reviewed",
  ["reviewed", "is reviewing", "has been reviewing", "were reviewed"],
  "A ação foi sofrida pelo relatório (sujeito paciente), no passado (\"last week\"): voz passiva no **past simple** = **was/were + particípio** (\"was reviewed\", pois \"report\" é singular).",
  ["\"Reviewed\" (ativa) exigiria que o sujeito praticasse a ação.", "\"Is reviewing\" (presente contínuo ativo) não combina com \"last week\".", "\"Has been reviewing\" (presente perfeito contínuo) não combina com \"last week\".", "\"Were reviewed\" não concorda com o sujeito singular."],
  "Passiva: **to be (no tempo da ação) + particípio**. Concordância do verbo *to be* com o sujeito.",
  "Passive past: was/were + past participle.", "Marcadores de tempo (last week) indicam o tempo verbal.", ["passive-voice"])
G(LI, "LI-02", "Gramática (inglês): pronomes relativos", "facil", "aplicacao", "aplicada",
  "Choose the alternative that correctly completes the sentence: \"The engineer ______ designed the system has just retired.\"",
  "who",
  ["whom", "whose", "which", "what"],
  "O antecedente é uma **pessoa** (\"the engineer\") e o relativo é **sujeito** de \"designed\": usa-se **who**.",
  ["\"Whom\" é objeto; aqui o relativo é sujeito.", "\"Whose\" indica posse.", "\"Which\" refere-se a coisas.", "\"What\" não é pronome relativo com antecedente expresso."],
  "Relativos: **who** (pessoa, sujeito), **whom** (pessoa, objeto), **whose** (posse), **which** (coisa), **that** (pessoa ou coisa, restritivo).",
  "Pessoa + sujeito = who.", "Pergunte: o relativo é sujeito ou objeto? Refere-se a pessoa ou a coisa?", ["relative-pronouns"])
G(LI, "LI-02", "Gramática (inglês): comparativo de superioridade", "facil", "aplicacao", "aplicada",
  "Choose the alternative that correctly completes the sentence: \"The new valve is ______ the old one.\"",
  "more durable than",
  ["durabler than", "most durable than", "as durable than", "more durably than"],
  "Adjetivos longos (três ou mais sílabas, como *durable*) formam o comparativo com **more + adjetivo + than**.",
  ["\"Durabler\" não existe; o sufixo *-er* é para adjetivos curtos.", "\"Most\" forma o superlativo, e não o comparativo.", "A comparação de igualdade usa \"as ... as\".", "\"Durably\" é advérbio; aqui se exige adjetivo."],
  "Comparativo: **curtos** (-er than: faster than); **longos** (more ... than). Superlativo: **the -est** / **the most**. Igualdade: **as ... as**.",
  "More + adjetivo longo + than.", "Conte as sílabas do adjetivo.", ["comparatives"])
G(LI, "LI-02", "Gramática (inglês): modal \"don't have to\"", "media", "compreensao", "interpretativa",
  "Na frase \"Employees don't have to change their passwords every month\", a expressão \"don't have to\" indica",
  "ausência de obrigação (não é necessário).",
  ["proibição.", "possibilidade remota.", "obrigação.", "habilidade."],
  "\"Don't have to\" indica **ausência de necessidade**: os funcionários **podem** mudar a senha, mas **não precisam**. A **proibição** seria expressa por \"must not / mustn't\".",
  ["Proibição é *mustn't* ou *can't*.", "A possibilidade remota seria expressa por *might* ou *could*.", "Obrigação seria *have to* ou *must*.", "Habilidade seria *can* ou *be able to*."],
  "**Must** (obrigação) × **mustn't** (proibição) × **don't have to** (não necessário) × **should** (conselho) × **can** (permissão/capacidade).",
  "Don't have to ≠ mustn't.", "A negação de *have to* não é a negação de *must*.", ["modals"])

# ---------------- grava ----------------
ids = [q["id"] for q in L_]
assert ids == ["AUT-%06d" % i for i in range(121, 121 + len(L_))]
lp = [q for q in L_ if q["modulo"] == LP]; li = [q for q in L_ if q["modulo"] == LI]
grava(lp, os.path.join(R, "banco-questoes/autorais/gerais/gerais-lingua-portuguesa.json"), "Questões autorais — Língua Portuguesa (Gerais)", "T06", "2026-11-06")
grava(li, os.path.join(R, "banco-questoes/autorais/gerais/gerais-lingua-inglesa.json"), "Questões autorais — Língua Inglesa (Gerais)", "T06", "2026-11-06")
from collections import Counter
print(len(L_), len(lp), len(li), Counter(q["gabarito"] for q in L_),
      "correta mais longa:", sum(1 for q in L_ if max(q["alternativas"], key=lambda k: len(q["alternativas"][k])) == q["gabarito"]))
