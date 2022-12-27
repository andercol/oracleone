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



#### 3. Orientação a Objetos

Nessa aula aprendemos sobre atributos e criação de objetos.

Vimos:

- O que é uma classe
- Como criar uma classe
- Como criar um objeto ou instância de uma classe
- O que são atributos
- Como definir e visualizar valores de atributos
- Como funciona a atribuição de uma referência à uma variável
- 

3. #### Definindo comportamento

Nessa aula falamos sobre o *comportamento* que são os **métodos**.

Vimos:

- como definir métodos com parâmetros e retorno
- como retornar algo usando a palavra chave `return`
- como usar a referência `this` para acessar um atributo
- que podemos passar uma referência como parâmetro do método
- métodos são chamadas a partir da referência usando o operador `.`



##### 4. Composição de objetos

Aprendemos neste capítulo:

- Realizar o relacionamento entre classes através de composição;
- Vantagens de se isolar informações repetidas em outra classe;
- Detalhes da composição;
- `NullPointerException` para atributos não inicializados e seus cuidados.

##### 5. Encapsulamento e visibilidade

Aprendemos nesta aula:

- Atributos privados, restringindo o acesso aos atributos
- Encapsulamento de código
- Métodos de leitura dos atributos, os ***getters\***
- Métodos de modificação dos atributos, os ***setters\***
- *Getters* e *Setters* de referência



##### 6.Contrutores e membros estáticos

Aprendemos nesta aula:

- Construtor da classe, possibilitando receber argumentos e inicializar atributos a partir da criação de um objeto
  - Com isso, a inicialização dos atributos recebidos no construtor torna-se obrigatória
- Atributos da classe, os atributos estáticos
- Métodos da classe, os métodos estáticos
- Ausência de referência, do **`this`**, dentro de métodos estáticos





### heranca-interfaces-polimorfismo

##### 1. Introdução a herança

Nessa aula começamos a falar sobre a herança e aprendemos:

- quais problemas a herança pode resolver
- como usar herança no Java através de palavra chave `extends`
- ao herdar, a classe filha ganha todas as características (atributos) e todas as funcionalidades (métodos) da classe mãe
- conhecemos o primeiro benefício da herança: *Reutilização do código*

##### 2. Super e reescrita de métodos

O que aprendemos?

Nessa aula já entramos mais a fundo na herança. Aprendemos:

- que classe mãe é chamada de super ou base class
- que a classe filha também é chamada de sub class
- como aumentar a visibilidade de um membro (atributo, método) através do `protected`
- como acessar ou chamar um membro (atributo, método) através do `super`
- como redefinir um método através da sobrescrita



##### 3. Entendendo Polimorfismo



Nessa aula aprendemos que:

- objetos não mudam de tipo;
- a referência pode mudar, e aí entra o polimorfismo;
- o polimorfismo permite usar referências mais genéricas para a comunicação com um objeto;
- o uso de referências mais genéricas permite desacoplar sistemas.

##### 4. Herança e construtores

Nessa aula, vimos:

- Conceitos de herança, construtores e polimorfismo
- A utilização da anotação @Override
- Construtores não são herdados
- Um construtor da classe mãe pode ser chamado através do `super()`



##### 5. Classes e métodos abstratos

Nessa aula aprendemos:

- O que são classes abstratas
- Para que servem classes abstratas
- O que são métodos abstratos
- Para que servem métodos abstratos



##### 6. Interfaces



