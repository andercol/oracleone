#### Formação JAVA

Antes de mais nada, vamos ver um pouco do que é o Java, o qual te trouxe até aqui: há cerca de vinte anos, quando a linguagem Java nasceu, ela chamava a atenção por conta das seguintes características:

Orientado a Objeto (O.O.)
Muitas bibliotecas
Parece com C++ (hoje em dia isso pode até ser uma desvantagem)
Roda em vários sistemas operacionais
Você pode estar pensando "poxa, mas a linguagem que uso no dia a dia, atualmente, já possui estas características!". É verdade. É por isto que queremos focar na plataforma Java, e não especificamente na linguagem em si, algo que ficará mais claro no decorrer do curso, e até mesmo nesta aula!

A plataforma Java traz:

Portabilidade
Fácil acesso e desenvolvimento
Segurança
Onipresença

-------

Já falamos um pouco sobre o Bytecode que é um código de máquina parecido com o Assembly. Talvez você (como eu!) estranhou o nome Bytecode, no entanto, tem uma explicação bem simples para tal. Existe um conjunto de comandos que a máquina virtual Java entende. Esses comandos também são chamados de opcodes (operation code), e cada opcode possui o tamanho de exatamente 1 Byte! E aí temos um opcode de 1 Byte ou, mais simples, Bytecode. :)



#### Instalação e o primeiro programa

Nessa aula você escreveu o seu primeiro código Java e aprendemos:

- qual é a diferença entre JRE e JDK
- como compilar um código fonte Java na linha de comando (`javac`)
- como executar o Bytecode na linha de comando (`java`)
- um programa Java deve estar escrito dentro de uma classe (`class`)
- toda instrução Java deve ser finalizada com `;`
- para abrir e fechar um bloco usaremos as chaves `{}`
- um programa Java possui uma entrada que é uma função (método) `main`
- para imprimir algo no console usamos a instrução `System.out.println()`



#### Começando com Eclipse

Este capítulo apresentou:

- O papel de um IDE e sua diferença de um editor
- Como fazer o download do Eclipse IDE
- Para que serve um workspace
- O conceito de perspectiva
- Como criar um projeto Java, inclusive classes e como executá-lo.
- Como exibir diferentes views

##### Tipos de variáveis



Nesta aula iniciamos nosso aprendizado com variáveis e tipos primitivos do Java. Os tipos vistos com mais detalhe foram int (inteiro) e double (decimal). Que usamos para fazer operações aritméticas e também concatenar com texto.

Durante o capítulo falamos sobre boas práticas na hora de nomear classes e também variáveis. Iniciamos as classes com letra maiúscula e as nossas funções e variáveis com letras minúsculas. Vamos falar mais sobre isto no futuro.

Foi possível entender um pouco de type casting e como podemos passar um valor de um tipo para uma variável de outro. Para alguns casos nós não precisamos fazer nada, pois o casting é implícito e em outros precisamos deixar claro para o compilador que sabemos o que estamos fazendo, mostrando entre parênteses o tipo que queremos que seja usado.

Com isso finalizamos esta aula. Próximo passo: caracteres! Espero vocês lá!



##### Trabalhando com caracteres

Este capítulo apresentou:

- O conceito e como declarar char e String

- Como concatenar Strings

- Atalho para criação da main

- Variáveis guardam valores e não referências.

  

##### Praticando condicionais

Nessa aula, aprendemos:

- como usar o `if`
- como usar as operações lógicas AND (`&&`) e OR (`||`)
- trabalhar com o escopo de variáveis

Também já vimos alguns atalhos no Eclipse:

- ```
  main + ctrl + espaço
  ```

  - para gerar o método `main`

- ```
  ctrl + shift + f
  ```

  - para formatar o código fonte

- ```
  sysout + ctrl + espaço
  ```

  - para gerar a instrução `System.out.println()`



##### Controlando fluxo com laços

Neste capítulo aprendemos:

- A sintaxe do `while` e `for`
- O operador `+=`
- O operador `++`
- Laços aninhados
- A funcionalidade do `break`



#### Orientação a Objetos

Nessa aula aprendemos sobre atributos e criação de objetos.

Vimos:

- O que é uma classe
- Como criar uma classe
- Como criar um objeto ou instância de uma classe
- O que são atributos
- Como definir e visualizar valores de atributos
- Como funciona a atribuição de uma referência à uma variável
