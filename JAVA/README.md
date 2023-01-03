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

![image-20221227080910846](../../../../../AppData/Roaming/Typora/typora-user-images/image-20221227080910846.png)



![image-20221227123709527](../../../../../AppData/Roaming/Typora/typora-user-images/image-20221227123709527.png)

Nessa aula aprendemos que:

- Não existe herança múltipla em Java.
- Conceitos de interface.
- Diferenças entre classes abstratas e interfaces.
- interfaces são uma alternativa a herança referente ao polimorfismo



##### 7. Praticando herança e interfaces

Nessa aula, aprendemos:

- Mais a fundo sobre o uso de interfaces
- Trabalhamos mais a fundo com herança
- Vimos outras aplicações de heranças e interfaces



### Java Exceções



##### 1. Pilha de execução

Nessa aula, aprendemos:

- O que é, para que serve e como funciona a pilha de execução.
- O que é depuração (debug) e para que serve.
- Como utilizar o Eclipse e sua perspectiva de debug.
- Como alternar entre perspectivas do Eclipse.

##### 2. Introdução a exceções, try catch

Nessa aula, aprendemos:

- O que são exceções, para que servem e porquê utilizá-las.
- Como analisar o rastro de exceções, ou *stacktrace*.
- Tratar exceções com os blocos `try-catch`.
- Manipular uma exceção lançada dentro do bloco catch.
- Tratar múltiplas exceções com mais de um bloco catch ou usando *Multi-Catch* utilizando o *pipe* (**`|`**).

##### 3. Lançamento de exceções

Nesta aula, aprendemos:

- Como lançar exceções.
- Como atribuir uma mensagem à exceção.

##### 5. Checked e Unchecked

![image-20230103073033611](../../../../../AppData/Roaming/Typora/typora-user-images/image-20230103073033611.png)

 Hierarquia de exceções

Anteriormente, estudamos hierarquia e vimos que é a classe do topo — `Throwable` — quem realmente faz as coisas. `Exception` e `RuntimeException` não possuem utilidade e cada uma só possui alguns construtores. Mas mesmo assim, nós estendemos `RuntimeException`, assim como `ArithmeticException` e `NullPointerException`.

Mas, não seria mais fácil cortar caminho e estender diretamente o `Throwable`? Considerando que `RuntimeException` e `Exception` não possuem utilidade? Errado! Com certeza existe um porquê disso.

![img](https://s3.amazonaws.com/caelum-online-public/834-java-excecoes/04/04.03_001_hierarquia-error.png)

Entendendo Erros

Classes erros são para desenvolvedores da maquina virtual java.

Existe uma outra hierarquia de classes que estende `Throwable`, como a classe `Error`. Entretanto, nós não a conhecemos muito bem, porque é uma hierarquia pensada para desenvolvedores de máquina virtual. Nós, desenvolvedores Java, não trabalhamos com essas classes diretamente. Quem cria e joga esses objetos na pilha é a máquina virtual, quando algo muito grave acontece.

**Para acessibilidade:** A hierarquia abordada contém uma classe mãe chamada `Throwable`. A partir dela, formam-se duas categorias: uma para exceções onde o desenvolvedor pode gerenciar e uma outra categoria voltada para erros da máquina virtual.

As exceções `ArithmeticException`, `NullPointerException` e `MinhaException` herdam de `RuntimeException`, que por sua vez, herda de `Exception` e `Exception` herda de `Throwable`, formando a primeira categoria de exceções. Já a segunda categoria de erros possui `StackOverflowError`, que herda de `VirtualMachineError`, que herda de `Error`, que herda de `Throwable`, formando a segunda categoria.

![image-20230103075730790](../../../../../AppData/Roaming/Typora/typora-user-images/image-20230103075730790.png)



Lembrando que a segunda categoria é a hierarquia utilizada pela *máquina virtual*. Entretanto, o que nos interessa é a hierarquia da `Exception`, a primeira categoria. E por que a classe `ArithmeticException` não estende diretamente da classe `Exception`? Por que a `MinhaExcecao` não estende a classe `Exception`? Vamos tentar resolver esse enigma.

Acessaremos a classe `MinhaExcecao`, e estenderemos diretamente da classe `Exception`. Repare que o código já para de compilar. Apareceu algum problema. Vamos ver a classe `Fluxo`.

Existe um erro de compilação na linha do `throw new MinhaExcecao("deu muito errado")`. Se retirarmos a palavra `throw` dessa frase, o problema desaparecerá. O problema é que o Java faz uma separação. Duas categorias de exceções são criadas dentro das exceções para o desenvolvedor de aplicações.

A primeira categoria é a que estende de `RuntimeException`, e a outra é a que estende diretamente de `Exception`. O compilador faz uma verificação sintática para ver quem dá `throw` nessas exceções. Isso significa que a exceção exige que fique explícito na assinatura do método que estamos *jogando* a exceção:

~~~java
private static void metodo2() throws MinhaExcecao {
    System.out.println("Ini do metodo2");
    throw new MinhaExcecao("deu muito errado");

    //System.out.println("Fim do metodo2");
}
~~~

Dessa forma, dizemos que o método joga uma exceção do tipo `MinhaExcecao`. Agora, o método volta a compilar. Quando usamos `throw new` de uma exceção que estende *diretamente* da classe `Exception`, o compilador exige que coloquemos, explicitamente, *throws* na assinatura do método.

A ideia é que o "perigo" — a exceção — fique explícita na assinatura do método. Com isso, temos duas categorias novas de `Exception`. A primeira é a que estende de `RuntimeException` e se chama ***Unchecked\***. A segunda categoria é a que estende diretamente de `Exception`, chamada de ***Checked\***.

## Por que Checked e Unchecked?

Na categoria *Unchecked*, o compilador não dá muita importância. Se dermos `throws` ou não, ele não toma atitude, ou seja, ele não **verifica** — *unchecked* (não verificado pelo compilador).

Já a categoria *Checked* é verificada pelo compilador. No `metodo2()`, somos obrigados a colocar `throws` na assinatura do método, pois a exceção do tipo `MinhaExcecao` estende diretamente de `Exception` e, por isso, é verificada pelo compilador.

Legal! Mas repare que a chamada do `metodo2()`, no `metodo1()`, não compila mais. Agora, isso acontece porque o compilador detecta que existe uma exceção *checked* na assinatura e, por isso, é necessário também deixar explícito o `throws MinhaExcecao` na assinatura do `metodo1()`.

~~~java
private static void metodo1() throws MinhaExcecao {}
~~~

Podemos colocar `throws` no método ou transferir a exceção para a categoria *unchecked*. Repare que colocamos `throws` nos dois métodos, mas não o colocamos em `main()` e, mesmo assim, o código compilou. Isso aconteceu porque estamos fazendo um tratamento da exceção com o `try-catch`. Ou seja, temos duas formas de resolver uma exceção *checked*.

Ou colocamos o `throws` na assinatura, ou fazemos um `try-catch`. Por exemplo:

~~~java
private static void metodo1() {
    System.out.println("Ini do metodo1");
    try {
        metodo2();
    } catch(MinhaExcecao ex) {}
    System.out.println("Fim do metodo1");
}
~~~

Assim, o compilador não se manifestou, pois estamos resolvendo o problema da exceção. Se estamos resolvendo, não é necessário colocar o `throws` na assinatura do método. Considerando que foi só um exemplo, vamos deixar como estava, pois já temos um `try-catch` em `main()`.

O conceito de exceções existe em várias linguagens, mas o que acabamos de estudar — *checked* e o *unchecked* — é algo específico do mundo Java.



1. Existe uma hierarquia grande de classes que representam exceções. Por exemplo, `ArithmeticException` é filha de `RuntimeException`, que herda de `Exception`, que por sua vez é filha da classe mais ancestral das exceções, `Throwable`. Conhecer bem essa hierarquia significa saber utilizar exceções em sua aplicação.
2. `Throwable` é a classe que precisa ser extendida para que seja possível jogar um objeto na pilha (através da palavra reservada `throw`)
3. A hierarquia iniciada com a classe `Throwable` é dividida em **exceções** e **erros**. Exceções são usadas em códigos de aplicação. Erros são usados exclusivamente pela máquina virtual. Classes que herdam de `Error` são usadas para comunicar erros na máquina virtual. Desenvolvedores de aplicação não devem criar erros que herdam de `Error`
4. `StackOverflowError` é um erro da máquina virtual para informar que a pilha de execução não tem mais memória.
5. Exceções são separadas em duas grandes categorias: aquelas que são obrigatoriamente verificadas pelo compilador e as que não são verificadas. As primeiras são denominadas *checked* e são criadas através do pertencimento a uma hieraquia que não passe por `RuntimeException`. As segundas são as *unchecked*, e são criadas como descendentes de `RuntimeException`.

Se você fez o exercício [Será que o Miguel entendeu a aula?](https://cursos.alura.com.br/course/java-excecoes/task/37907), vai lembrar o que aprendemos. Para fixar ainda mais, listamos os tópicos dessa aula:

- Existe uma hierarquia grande de classes que representam exceções. Por exemplo, `ArithmeticException` é filha de `RuntimeException`, que herda de `Exception`, que por sua vez é filha da classe mais ancestral das exceções, `Throwable`. Conhecer bem essa hierarquia significa saber utilizar exceções em sua aplicação.
- `Throwable` é a classe que precisa ser extendida para que seja possível jogar um objeto na pilha (através da palavra reservada `throw`)
- É na classe `Throwable` que temos praticamente todo o código relacionado às exceções, inclusive `getMessage()` e `printStackTrace()`. Todo o resto da hierarquia apenas possui algumas sobrecargas de construtores para comunicar mensagens específicas
- A hierarquia iniciada com a classe `Throwable` é dividida em **exceções** e **erros**. Exceções são usadas em códigos de aplicação. Erros são usados exclusivamente pela máquina virtual.
- Classes que herdam de `Error` são usadas para comunicar erros na máquina virtual. Desenvolvedores de aplicação não devem criar erros que herdam de `Error`.
- `StackOverflowError` é um erro da máquina virtual para informar que a pilha de execução não tem mais memória.
- Exceções são separadas em duas grandes categorias: aquelas que são obrigatoriamente verificadas pelo compilador e as que não são verificadas.
- As primeiras são denominadas *checked* e são criadas através do pertencimento a uma hierarquia que não passe por `RuntimeException`.
- As segundas são as *unchecked*, e são criadas como descendentes de `RuntimeException`.



##### 6. Aplicando Exceções

![image-20230103081226399](../../../../../AppData/Roaming/Typora/typora-user-images/image-20230103081226399.png)





![image-20230103182641141](../../../../../AppData/Roaming/Typora/typora-user-images/image-20230103182641141.png)





Anteriormente, criamos a nossa própria exceção `SaldoInsuficienteException`, do tipo *Unchecked*. Ou seja, ela estende a classe `RuntimeException` e o compilador não nos obriga a fazer nenhum tratamento.

Testaremos também a mesma exceção como *Checked*. Ela estenderá diretamente da classe `Exception` e verá o tratamento. Mas, como faremos esse tratamento?

Repare que, do jeito que a exceção está agora, o compilador não reclama por não ter um tratamento, visto que ela é *unchecked*, mas não tem problema se criarmos um `try-catch`:



![image-20230103183019901](../../../../../AppData/Roaming/Typora/typora-user-images/image-20230103183019901.png)

No vídeo, usamos uma exceção com o nome `SaldoInsuficienteException`. Discutir nomes pode ser algo subjetivo e exige conhecimentos sobre o assunto. Ou seja, é pauta de longas discussões, mas acreditamos que um nome um pouco mais genérico para nossa exceção também seria uma solução adequada.

Por exemplo, a exceção poderia se chamar `SacaException` ou `ContaException`. Repare que usamos o nome do método ou da classe. Para detalhar mais o problema (valor do saldo, etc) podemos utilizar a mensagem da exceção, como já fizemos no curso:

```cpp
throw new SacaException("Valor invalido: Saldo: " + this.saldo + ", Valor: " + valor);COPIAR CÓDIGO
```

Dessa forma, caso tenha outro problema, basta alterar a mensagem.

De qualquer forma, saiba que encontrar o nome perfeito para as suas classes e métodos não é uma tarefa fácil e pode tomar o seu tempo. Em alguns casos, já encontramos nomes nas classes que deixaram claro que isso é apenas algo provisório e que deve ser alterado quando houver um consenso no nome.



O que aprendemos?

Nessa aula, aprendemos e praticamos:

- como criar um bloco `catch` genérico usando a classe `Exception`;
- como criar uma exceção nova `SaldoInsuficienteException`;
- como transformar a exceção em *checked* ou *unchecked*.



##### 7. Finally e try with resources

