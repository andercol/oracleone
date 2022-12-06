## Git e Github

**Git é um sistema de controle de versões**

***Outros sistemas de versionamento***
* CVS
* SVN
* Mercurial
* GIT

*****
####Principais comandos do Git
**git init** - inicia um repositório
**git status** - exibe o estado do repositório
**git add .** - adiciona todos os arquivos na área de monitoramento de alterações.
**git rm --cached file** - remove arquivos da área de monitoramento.
**git commit -m "mensagem"** - adiciona um comentário a uma modificação.
******

Ao executar o git status, recebemos alugmas informações que não são tão claras, como HEAD, working tree, index, etc.
Algumas definições são:
* ***HEAD***: Estado atual do nosso código, ou seja, onde o Git os colocou.
* ***Working tree***: Local onde os arquivos realmente estão sendo armazenados e editados.
* ***index***: Local onde o Git armazena o que está commitando, ou seja, o local entre o working tree e o repositório Git em si.

[Link Fundamentos de Git](https://git-scm.com/book/pt-br/v2/Fundamentos-de-Git-Gravando-Altera%C3%A7%C3%B5es-em-Seu-Reposit%C3%B3rio)

* ***git log*** - exibe uma lista de commits existentes.
* ***git config --local*** - modifica as configurações somente para o repositório local.
* ***git config --global*** - modifica as configurações para a maquina toda.
* ***git config --local user.name meuNome*** - grava o nome do usuário que está utilizando do git.

* ***git config user.email*** - exibe o email configurado do usuário.
* ***git log --oneline*** - exibi os commit de forma resumida, um por linha.

[git log cheatsheet](https://devhints.io/git-log)

* ***.gitignore*** - arquivo para adicionar lista de arquivos ou pastas que queremos que o git ignore.
----
_**Não realize commit de um código que ainda não está funcionando.**_

----

* ***git init --bare*** - cria um repositório puro, que só contem as alterações. Permite que utilizemos este repositório como um repositório remoto para outro repositório.

* ***git remote*** - exibe os repositorios remotos conectados.
***opções:***
    * -v exibe o endereço do servidor remoto.
    * _*add nome_repositorio enedereço*_ - adiciona um servidor remoto.
    ~~~
    git add origin d:\servidores\meu_repositorio_remoto 
    ~~~
    * _git remote rename_ - renomeia o repositório.
    ex.: _*git remote rename origin local*_ - renomeira de origin para local.
    
* ***git clone*** - clona um repositório.

* ***git push*** - empurra os arquivos local para o servidor.
ex. _git push local master_

---

***Branches*** ("ramos") são utilizados para desenvolver funcionalidades isoladas umas das outras. A branch master é a branch "padrão" quando você cria um repositório.

---
* ***git branch*** - visualiza as brachs existentes.

* ***git brach titulo*** - cria uma nova branch chamada "titulo".

* ***git checkout titulo*** - alterna para a branch titulo.

* ***git chckout -b lista*** - cria uma nova branch chamada "lista" e já alterna para ela.

----

* ***git log --graph*** - exibi as linhas de desenvolvimento.

* ***git log --oneline*** - exibe cada commit em uma linha.

* ***git log -p*** - exibi as alterações realizadas em cada commit.

* ***git log -n 2*** - exibe os dois ultimos commit.

* ***git merge*** - utilizado para juntar duas branchs. O merge junta os trabalhos e gera um merge commit. 

* ***git rebase*** - O rebase aplica os commits de outra branch na branch atual.

---

_**Sempre antes de iniciar uma desenvolvimento e antes de enviar os dados preciso verificar se a alguma alteração no repositorio remoto como o git pull local main**_

---

_**Ctrl+Z no Git**_

* ***git checkout -- nomeDoArquivo*** ou ***git restore nomeDoArquivo*** - desfaz uma alteração antes de adicionar a área de stage.

* ***git reset HEAD nomeDoArquivo*** ou ***git restore --staged nomeDoArquivo*** - retira um arquivo da area de stage.

* ***Para reverter um commit realizado*** - utilize _*git log*_ para visualizar os commits e anote o hash do commit que quer reverter.
    * ***git revert hashCommit*** - cria um novo commit desfazendo as alterações do commit que foi informado o hash.
    obs.: será aberto uma mensagem de commit que pode ser alterada.

---
Com o _git checkout_ nós desfazemos uma alteração que ainda não foi adicionada ao _index_ ou _stage_, ou seja, antes do git add. Depois de adicionar com _git add_, para desfazer uma alteração, precisamos tirá-la deste estado, com _git reset_. Agora, se já realizamos o _commit_, o comando _git rever_t pode nos salvar.

---
**Quardar alterações para continuar em outro momento**

* ***git stash*** - após realizar alguma alteração execute o comando para salvalo em uma área isolada que não será lista nos logs.

* ***git stash list*** - utilize para listar as alterações salvas na área de stash.

* ***git stash apply 0*** - onde "0" é o número da stash ira aplicar essas modificações, mas não ira remove-la da área de stash.

* ***git stash drop <numero>*** para remover uma alteração da área de stash.

* ***git stash pop*** remove a ultima alteração da área de stash e aplica ao código.

---
Quando precisamos pausar o desenvolvimento de alguma funcionalidade, ou correção, antes de finalizar, talvez não seja interessante realizar um _commit_, pois o nosso código pode não estar funcionando ainda. Nesse caso é interessante salvar o trabalho para podermos voltar a ele depois.

----
***Viajando no tempo***
* caso sejá necessário voltar em algum commit para visualiar alterações podemos fazer um checkout para o hash daquele commit.
* ***git checkout 5b0c801*** - irá retornar até o checkout de hash _5b0c801_.
_se realizarmos alguma alteração e commitar-mos está alteração ficara perdida._
* para realizar uma alteração apartir deste ponto precisamos criar uma nova branch e só depois criar um commit.
* para retornar ao ultimo commit é só realizar um checkout com o nome da branch.

---
***verificando alterações***

* ***git diff 5b0c801..9f97598*** - exibe as alterações realizadas entre o commit _5b0c801_ e o commit _9f97598_.
".." indica até.

* ***git diff*** - sem parametros exibi todas alterações realizada e que ainda não foram adicionadas na área de stage para ser commitado.

Com o comando git diff, nós vimos que é possível visualizarmos as mudanças realizadas em determinado código. Podemos ver as diferenças entre commits, branches, etc.

---
_**Tags e releases**_

* ***git tag -a < nome >*** - adiciona uma tag para marcar um ponto ou release.

    * ***-m "comentário"*** - o parametro -m permite adicionar um comentário.

    * ***git tab*** - exibe as tags criadas. 
    
    * ***git push local V0.1.0*** - envia uma tag para o servidor local.

---

Caso você esteja na branch master querendo mudar para main, pode rodar esses comandos no terminal ou Git Bash:
~~~
git branch -m master main
git push -u origin main
~~~