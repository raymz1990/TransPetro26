# Banco de questões — Módulo 9: Segurança da Informação (lote piloto, questões)

**Tipo:** questões **autorais** — **Questão autoral — estilo Cesgranrio.** Não são questões oficiais nem foram aplicadas pela Fundação Cesgranrio.
**Status:** validada 10. Gabaritos e comentários em `m09-seguranca-informacao-gabaritos-comentados.md`; dados estruturados em `m09-seguranca-informacao.json`.
**Data:** 2026-10-31 · **Itens do edital:** 9.2, 9.3, 9.4, 9.9, 9.11, 9.12, 9.14, 9.16, 9.19, 9.20.

---

## Questão 1 — AUT-000081

**AUT-000081** · Ataques: injeção de SQL e consulta parametrizada · item 9.4 · Média · Aplicação

*Questão autoral — estilo Cesgranrio.*

Um desenvolvedor escreveu o trecho a seguir, em Python, para autenticar um usuário a partir do campo de login do formulário.  
  
```python  
nome = request.args["nome"]  
sql = "SELECT * FROM usuarios WHERE login = '" + nome + "'"  
cursor.execute(sql)  
```  
  
Um teste de segurança envia, no campo, o valor ' OR '1'='1 e recebe todos os registros da tabela.  
  
A medida principal para eliminar essa vulnerabilidade é

(A) remover da entrada apenas a palavra OR antes de montar a consulta SQL.  
(B) usar consulta parametrizada, passando o valor de nome como parâmetro, e não por concatenação de texto.  
(C) limitar o tamanho do campo de login a 20 caracteres, pois a entrada maliciosa é longa.  
(D) trafegar a requisição por HTTPS, pois a criptografia do canal impede a alteração da consulta.  
(E) conceder ao usuário do banco de dados privilégios de administrador, para que a consulta nunca falhe.  

---

## Questão 2 — AUT-000082

**AUT-000082** · Operação de segurança: backup completo e diferencial · item 9.2 · Média · Resolução de problemas

*Questão autoral — estilo Cesgranrio.*

A política de backup de um servidor prevê um backup completo aos domingos e backups diferenciais de segunda-feira a sábado, sempre ao fim do dia. Na quinta-feira, antes do backup do dia, ocorre uma falha de disco, e é preciso restaurar o servidor ao estado do fim de quarta-feira.  
  
Para a restauração, são necessários

(A) 1 conjunto de backup, o completo de domingo.  
(B) 3 conjuntos de backup: o completo de domingo e os diferenciais de segunda e de terça-feira.  
(C) 4 conjuntos de backup: o completo de domingo e os diferenciais de segunda, terça e quarta-feira.  
(D) 2 conjuntos de backup: o completo de domingo e o diferencial de quarta-feira.  
(E) 5 conjuntos de backup: o completo e todos os diferenciais da semana, inclusive o de quinta-feira.  

---

## Questão 3 — AUT-000083

**AUT-000083** · Softwares maliciosos: classificação pelo comportamento · item 9.3 · Fácil · Aplicação

*Questão autoral — estilo Cesgranrio.*

Uma equipe de resposta a incidentes observa três comportamentos em diferentes máquinas:  
  
I – um código criptografa os arquivos do usuário e exibe uma mensagem exigindo pagamento para devolver o acesso;  
II – um código se propaga sozinho pela rede, explorando uma vulnerabilidade, sem depender de um arquivo hospedeiro nem de ação do usuário;  
III – um programa se apresenta como um utilitário legítimo, mas, ao ser executado, instala um acesso remoto oculto.  
  
Os comportamentos I, II e III correspondem, respectivamente, a

(A) ransomware, worm e cavalo de troia (trojan).  
(B) worm, ransomware e cavalo de troia (trojan).  
(C) ransomware, vírus e worm.  
(D) spyware, worm e rootkit.  
(E) cavalo de troia (trojan), ransomware e vírus.  

---

## Questão 4 — AUT-000084

**AUT-000084** · Autenticação multifator (MFA): fatores de autenticação · item 9.9 · Média · Análise

*Questão autoral — estilo Cesgranrio.*

Uma empresa avalia propostas para ativar a autenticação multifator (MFA) em seu portal. Segundo as categorias de fatores de autenticação (algo que o usuário sabe, algo que possui e algo que é), qual das combinações a seguir constitui, de fato, autenticação multifator?

(A) Senha e PIN, ambos memorizados pelo usuário e digitados em telas diferentes.  
(B) Duas senhas distintas, ambas definidas e conhecidas pelo próprio usuário do portal.  
(C) Impressão digital reconhecida isoladamente, como único mecanismo de verificação.  
(D) Código recebido por e-mail e código recebido por SMS, ambos enviados no mesmo momento.  
(E) Senha memorizada e código gerado por aplicativo autenticador instalado no celular do usuário.  

---

## Questão 5 — AUT-000085

**AUT-000085** · Inteligência de ameaças: IoC, TTP e níveis · item 9.12 · Média · Compreensão

*Questão autoral — estilo Cesgranrio.*

Uma equipe de segurança recebe três itens de inteligência de ameaças:  
  
I – o hash SHA-256 de um arquivo malicioso e o endereço IP de um servidor de comando e controle;  
II – a descrição de que um grupo costuma executar cargas por PowerShell e manter persistência por tarefas agendadas;  
III – um relatório para o conselho sobre as motivações e as tendências dos grupos que atacam o setor de energia.  
  
Os itens I, II e III correspondem, respectivamente, a

(A) TTP, indicador de comprometimento (IoC) e inteligência técnica.  
(B) inteligência estratégica, TTP e indicador de comprometimento (IoC).  
(C) indicador de comprometimento (IoC), TTP e inteligência estratégica.  
(D) indicador de comprometimento (IoC), inteligência estratégica e TTP.  
(E) TTP, inteligência estratégica e indicador de comprometimento (IoC).  

---

## Questão 6 — AUT-000086

**AUT-000086** · Resposta a incidentes: fases do ciclo (NIST SP 800-61 Rev. 2) · item 9.11 · Fácil · Aplicação

*Questão autoral — estilo Cesgranrio.*

Após detectar um servidor infectado por código malicioso, a equipe de resposta a incidentes isola o servidor da rede, remove o código malicioso, redefine as credenciais comprometidas e restaura o serviço a partir de um backup íntegro.  
  
No ciclo de vida da resposta a incidentes do NIST SP 800-61 (Rev. 2), essas atividades pertencem à fase de

(A) preparação.  
(B) detecção e análise.  
(C) atividade pós-incidente.  
(D) contenção, erradicação e recuperação.  
(E) preparação e detecção, em conjunto.  

---

## Questão 7 — AUT-000087

**AUT-000087** · Modelagem de ameaças: categorias do STRIDE · item 9.14 · Difícil · Análise

*Questão autoral — estilo Cesgranrio.*

Na modelagem de ameaças de um sistema de transferências, a equipe identifica as situações a seguir:  
  
I – um usuário nega ter aprovado uma operação, e o sistema não possui registros que comprovem a autoria;  
II – um atacante altera o valor de uma transferência enquanto os dados trafegam entre o aplicativo e o servidor;  
III – um atacante usa credenciais roubadas para se passar por outro usuário.  
  
Na classificação STRIDE, as situações I, II e III correspondem, respectivamente, às ameaças de

(A) repúdio, adulteração e falsificação de identidade.  
(B) adulteração, repúdio e divulgação de informações.  
(C) falsificação de identidade, adulteração e repúdio.  
(D) repúdio, divulgação de informações e elevação de privilégio.  
(E) negação de serviço, adulteração e falsificação de identidade.  

---

## Questão 8 — AUT-000088

**AUT-000088** · Gestão de riscos: perda esperada anual (SLE e ALE) · item 9.16 · Difícil · Resolução de problemas

*Questão autoral — estilo Cesgranrio.*

Um ativo de informação vale R$ 800.000. Estima-se que um incidente cause a perda de 25% desse valor (fator de exposição) e que ocorra, em média, 0,5 vez por ano. Um controle que custa R$ 40.000 por ano reduz a frequência esperada do incidente para 0,1 vez por ano, sem alterar o impacto.  
  
Com base na perda esperada anual (ALE = SLE × ARO), o benefício líquido anual do controle, isto é, a redução da perda esperada menos o custo do controle, é de

(A) R$ 80.000.  
(B) R$ 60.000.  
(C) R$ 40.000.  
(D) R$ 100.000.  
(E) R$ 20.000.  

---

## Questão 9 — AUT-000089

**AUT-000089** · Assinatura digital: propriedades garantidas · item 9.19 · Média · Análise

*Questão autoral — estilo Cesgranrio.*

Alice gera o resumo (hash) de um contrato, assina esse resumo com sua chave privada e envia o contrato, em texto claro, junto com a assinatura e seu certificado digital a Bob. Bob verifica a assinatura com a chave pública de Alice contida no certificado.  
  
As garantias oferecidas por esse procedimento são

(A) confidencialidade, integridade e autenticidade, mas não o não repúdio.  
(B) apenas confidencialidade, pois o contrato é protegido pela chave privada de Alice.  
(C) disponibilidade e integridade, pois a assinatura garante que o contrato sempre estará acessível.  
(D) confidencialidade e não repúdio, mas não a integridade, pois o contrato segue em texto claro.  
(E) integridade, autenticidade e não repúdio, mas não confidencialidade, pois o contrato segue em texto claro.  

---

## Questão 10 — AUT-000090

**AUT-000090** · Segurança em nuvem: responsabilidade compartilhada · item 9.20 · Fácil · Compreensão

*Questão autoral — estilo Cesgranrio.*

Uma empresa contrata uma ferramenta de gestão em modelo SaaS (software como serviço). Pelo modelo de responsabilidade compartilhada da computação em nuvem, a responsabilidade que permanece sempre com o cliente, mesmo nesse modelo, é a de proteger

(A) a segurança física dos datacenters em que a ferramenta é executada.  
(B) seus dados, as identidades dos usuários e as configurações de acesso à ferramenta.  
(C) o sistema operacional dos servidores que hospedam a ferramenta contratada.  
(D) a camada de virtualização e os servidores usados pelo provedor para executá-la.  
(E) a rede física e os equipamentos de conectividade do provedor da ferramenta.  

---

