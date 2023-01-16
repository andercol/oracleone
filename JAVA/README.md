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

Nessa aula, aprendemos:

- que existe um bloco `finally`, útil para o fechamento de recursos (como conexão);
- quando há um bloco `finally` o bloco `catch` é opcional;
- que o bloco `finally` é sempre executado, sem ou com exceção;
- como usar o *try-with-resources*.

-----------------------------------------------------



### Conhecer as principais bibliotecas

#### **Java e java.lang: programe com a classe Object e String**

**1 . Organizando as classes com Pacotes**

Neste treinamento falaremos sobre a linguagem, seus pacotes como java.lang. Se você já assistiu aos cursos de orientação ao objeto, herança, interface e polimorfismo, você está no lugar certo e pode avançar nos seus conhecimentos assistindo estas aulas.

Organizaremos melhor nosso código por meio dos pacotes. Feito isso, poderemos pensar em como distribuir e documentar o que escrevemos.

Já que estamos falando sobre pacotes, veremos o primeiro fundamental da linguagem Java, o `java.lang`, e dentro dele as duas classes `String` do `java.object`.Veremos os detalhes sobre essas classes que fazem parte do dia a dia do desenvolvedor Java.

Portanto, se você quer avançar na plataforma Java, criar uma base cada vez mais madura para seus projetos te convido a assistir as próximas aulas deste curso.

O que aprendemos?

- packages servem para organizar o nosso código
- packages fazem parte do FQN (*Full Qualified Name*) da classe
- o nome completo da classe (FQN) é composto de: `PACKAGE.NOME_SIMPLES_CLASSE`
- a definição do package deve ser a primeira declaração no código fonte
- para facilitar o uso de classes de outros packages podemos importá-los
- os `import`s ficam logo após da declaração do `package`
- a nomenclatura padrão é usar o nome do domínio na web ao contrário junto com o nome do projeto, por exemplo:

```undefined
br.com.caelum.geradornotas
br.com.alura.gnarus
br.gov.rj.notas
de.adidas.lagerCOPIAR CÓDIGO
```

Uma vez organizado as nossas classes podemos revisar o modificadores de visibilidades que dependem dos pacotes.



**2 . Todos os modificadores de acesso**



Continuaremos estudando os modificadores de acesso/visibilidade. Por meio dos pacotes conseguimos explicar todos os modificadores e quais são suas diferenças. Se observarmos o seguinte esquema, veremos que está organizado na ordem do "mais visível" ao "menos visível", sendo o `public` visível em todas as áreas e `private` visível somente dentro da classe.

```java
| Modificadores de Acesso/Visibilidade |
|--------------------------------------|
| public                               |
| protected                            |
| <<package private>>                  |
| private                              |
```

Percebem que essa classe possui o modificador `public`, isso significa, como já sabemos, que ela é visível em todos os espaços dentro e fora do pacote. No código de `TesteSaca`, localizado no pacote `br.com.bytebank.banco.test`, há uma referência a classe `Conta`.

protected = public para as classes filhas

private = visivel só dentro da classe

<<package private>> (default) =  visivel só dentro do pacote

public = visivel em todo lugar

Temos quatro modificadores: `private`, `protected`, `default` e `public`. Onde a ordem do *MAIS* restritivo para o *MENOS* restritivo é: *private, default, protected e public*.

Nessa aula falamos novamente sobre visibilidade e aprendemos:

- existem 3 palavras chaves relacionado com a visibilidade: `private`, `protected`, `public`
- existem 4 níveis de visibilidade (de menor para maior):
  - `private` (visível apenas na classe)
  - *`<<package private>>`* (visível na classe E em qualquer outro membro do mesmo pacote, podendo ser chamado de default)
  - `protected` (visível na classe E em qualquer outro membro do mesmo pacote E para qualquer filho)
  - `public` (visível em qualquer pacote)
- os modificadores podem ser usados na definição da classe, atributo, construtor e método



**2 . Distribuição do seu código**

Já vimos nessa aula algumas tags (ou anotações) do *javadoc* como `@version` ou `@author`. Segue a lista completa:

- `@author` (usado na classe ou interface)
- `@version` (usado na classe ou interface)
- `@param` (usado no método e construtor)
- `@return` (usado apenas no método)
- `@exception` ou `@throws` (no método ou construtor)
- `@see`
- `@since`
- `@serial`
- `@deprecated`

Importante é que as tags do *javadoc* existem apenas para padronizar alguns dados fundamentais do seu código fonte como o autor e a versão.

# Outras anotações

Nos cursos você também já viu uma anotação fora do *javadoc*, a anotação `@Override`. Essa anotação é considerada uma configuração, nesse caso interpretado pelo compilador.

As anotações vão muito além das tags *javadoc* e são muito mais sofisticadas e poderosas. Elas só entraram na plataforma Java a partir da versão 1.5 enquanto o *javadoc* está presente desde o nascimento da plataforma Java. O interessante é que as anotações foram inspirados pelas tags do *javadoc*.

Se você ainda não está seguro sobre o uso das anotações, fique tranquilo pois você verá ainda muitas usadas pelas bibliotecas por ai para definir dados e configurações. Aguarde!



Seguindo de onde paramos anteriormente, nosso próximo objetivo é repassar todas as classes para uma nova equipe.

Em um primeiro momento nos parece que basta acionar o atalho "Ctrl + C" e "Ctrl + V" em todas as classes compiladas e trabalho concluído. No entanto, essa não é a forma mais inteligente de distribuir o meu código.

A ideia é que passemos para o desenvolvedor o código compilado dentro de um arquivo ".zip", e a documentação, afinal, ele não necessariamente precisa do código fonte, que é de nossa responsabilidade.

No entanto, o Java não chama esse tipo de arquivo de código compilado de ".zip", o tipo do arquivo na verdade é "JAR".

Poderíamos criar esse arquivo ".jar" manualmente, manipulando todo o conteúdo através do visualizador "Navigator". Porém, o Eclipse nos fornece facilidades para esse tipo de ação.

Na área "Package Explorer", selecionaremos nosso projeto `bytebank-herdado-conta`, clicaremos com o botão direito do mouse e selecionaremos a opção "Export".

Na caixa de diálogo que será aberta, veremos que há vários modos de exportar nosso projeto. Como queremos apenas o código compilado, selecionaremos a opção "JAR file" e em seguida "next" para avançarmos na exportação.

![exportando projeto](https://s3.amazonaws.com/caelum-online-public/843-java-packages/03/3_2_23_exportando+projeto.png)

Na nova caixa de diálogo, selecionaremos as pastas que serão exportadas. Não exportaremos os arquivos internos do Eclipse (`.classpath` e `.project`), e sim, todo o conteúdo da pasta `src`. Lembrando que não estamos exportando o código fonte, apenas o **código compilado**, que o Eclipse denomina "class files". Exportaremos o código para o desktop com o nome de `bytebank-1.0.jar`.

![exportando código compilado](https://s3.amazonaws.com/caelum-online-public/843-java-packages/03/3_2_24_exportanto+codigo+compilado.png)

Temos o arquivo JAR, que atua basicamente como um ".zip", mas em uma extensão diferente. Ao extrairmos os arquivos, veremos que todas as classes estarão presentes dentro da estrutura de pacotes.

Neste ponto do curso, já sabemos como exportar nosso projeto de forma inteligente e organizada. Como próximo passo, analisaremos o processo do ponto de vista da equipe que recebe o projeto.

No Eclipse, fecharemos todas classes que estão abertas através do atalho "Ctrl + Shift + W". Criaremos um novo projeto que chamaremos de `bytebank-biblioteca`. Para que não haja nenhuma confusão, fecharemos todos os outros projetos.

Clicaremos com o botão direito sobre `bytebank-biblioteca` e selecionaremos a opção "Close Unrelated Projects".

Normalmente, criamos uma pasta que armazenará todas as bibliotecas a serem utilizadas. Não existe um nome de pasta padrão, mas é muito comum utilizarmos o nome `libs`, que remete ao termo em inglês *library*. Nesta pasta arrastaremos nosso arquivo `bytebank-1.0.jar`.

O arquivo já faz parte do nosso projeto. O próximo passo é criar uma nova classe que chamaremos de `TesteBiblioteca`, que estará inserida em um novo pacote que nomearemos como `br.com.alura.bytebank`.



Observemos o código da nossa classe:

```typescript
package br.com.alura.bytebank

public class TesteBiblioteca { 

    public static void main(String[] args) { 

    }

}COPIAR CÓDIGO
```

Queremos utilizar a classe `Conta`.

```java
package br.com.alura.bytebank

public class TesteBiblioteca { 

    public static void main(String[] args) { 

        Conta c = new ContaCorrente(123, 321);

    }

}COPIAR CÓDIGO
```

Percebam que utilizamos os nomes simples das classes, o que gera erros na compilação do código. Precisamos utilizar o *full qualified name* neste caso, portanto, precisamos importar estas classes.

O Eclipse, nestes casos, sugere uma importação das classes. No entanto, essa opção não é mostrada, a sugestão é que se cria uma classe `Conta`, muito embora essa classe já exista dentro do arquivo `bytebank-1.0.jar`.

O que precisamos realizar é uma comunicação do Eclipse com os arquivos do projeto. Para isso existe uma configuração que ainda não realizamos, simplesmente copiamos o arquivo ".jar" para a ferramenta e isso não é o suficiente para que as classes se tornem visíveis e usuais.

Para realizarmos essa configuração, selecionamos o arquivo `bytebank-1.0.jar` na área do Package Explorer e pressionamos o botão direito do mouse, e selecionamos as opções "Build Path > Add to Build Path".

Assim feito, veremos que uma representação gráfica de jarra surge ao lado do nome do arquivo, apontado como `Referenced Libraries`, e dentro dele são exibidas todas os pacotes, que por sua vez, armazenam as classes.

![arquivo .jar no projeto](https://s3.amazonaws.com/caelum-online-public/843-java-packages/03/3_2_25_aqurivo+jar+no+projeto.png)

Com isso, voltando ao código de `TesteBiblioteca` o Eclipse sugere a importação das classes `Conta` e `ContaCorrente`, afinal, elas estão acessíveis.

Faremos um pequeno teste para avaliar se o nosso código está de fato funcional, acionando o método `deposita()`.

```java
package br.com.alura.bytebank

public class TesteBiblioteca { 

    public static void main(String[] args) { 

        Conta c = new ContaCorrente(123, 321);

        c.deposita(200.3);

        System.out.println(c.getSaldo());

    }

}COPIAR CÓDIGO
```

Tudo opera como o esperado.

Nesta aula aprendemos duas ações: primeiramente como criar a documentação dentro do código fonte e gerar os HTMLs organizados, depois, aprendemos como criar uma biblioteca que seja funcional para os desenvolvedores que recebem o projeto através de um arquivo ".jar".

O mundo Java possui uma série de ".jar"s, caso você queira criar um gráfico ou abrir uma conexão com um banco de dados, sempre haverá um ".jar" ou mais que auxiliarão em seu trabalho.



**3 . JAR executavel (opcional)**

Nesta aula, iremos nos aprofundar na questão das bibliotecas jar.

A forma como criamos um arquivo jar em nosso projeto será a mais comum quando utilizamos esse recurso.

Há na internet alguns repositórios de ".jar" que podem ser baixados; existem, ainda, ferramentas que podem nos auxiliar na plena utilização de ".jar", como quantas bibliotecas deste tipo precisaremos em um determinado projeto.

Há, também, ferramentas que ajudam a gerenciar as dependências que uma biblioteca ".jar" pode vir a ter, como Maven; na Alura temos [um curso](https://cursos.alura.com.br/course/maven-build-do-zero-a-web) dedicado a esta ferramenta. Quem utiliza o .NET sabe o que o Visual Studio possui um gerenciador de dependências integrado, o que não ocorre com o Eclipse.

No entanto, existem outras possíveis aplicações para a o ".jar". Na Alura, temos uma série de pastas com o nome dos professores e seus respectivos cursos. Juntamente com estas pastas temos o um arquivo ".jar" chamado `revisor-beta.jar`. Este ".jar" não foi pensado para ser uma biblioteca e ser usado através do desenvolvedor, mas sim uma ferramenta disponível para que os instrutores possam executar códigos e revisar a nomenclatura dos vídeos. Ou seja, este ".jar" foi pensado para o **usuário final** e não para o desenvolvedor.

Veremos rapidamente como esse ".jar" voltado para o usuário funciona; primeiramente, acessaremos o terminal e buscaremos por `revisor-beta.jar`

```ruby
Last login: Fri Mar 9 11:01:12 on console
Aluras - iMac:~ alura$ cd /Volumes/Dados_MAC/ 
Aluras - iMac: DADOS_MAC alura$ 1s
danilo-maximo     flavio-almeida      nico steppat
fabio-chaves      leonardo-codeiro    revisor-beta.jar
Aluras-iMac:DADOS_MAC alura$COPIAR CÓDIGO
```

Para que possamos executar o ".jar", precisamos utilizar a máquina virtual. Não iremos copiar esse ".jar" e cola-lo no Eclipse, pois trata-se de uma aplicativo para o usuário final.

```ruby
Last login: Fri Mar 9 11:01:12 on console
Aluras - iMac:~ alura$ cd /Volumes/Dados_MAC/ 
Aluras - iMac: DADOS_MAC alura$ 1s
danilo-maximo     flavio-almeida      nico steppat
fabio-chaves      leonardo-codeiro    revisor-beta.jar
Aluras-iMac:DADOS_MAC alura$ java -jar revistor-beta.jar
COPIAR CÓDIGO
```

Ao executarmos o ".jar", percebam que há uma interface gráfica, portanto existem classes no mundo Java que possibilitam a construção de uma caixa de diálogo com botões.

![interface jar](https://s3.amazonaws.com/caelum-online-public/843-java-packages/03/3_3_26_interface+jar.png)

Faremos algo parecido para a nossa aplicação. Não criaremos uma janela com botões, pois isso demandaria outro curso que se articule, mas criaremos um ".jar" que possa ser executado.

De volta ao Eclipse, abriremos novamente o projeto `bytebank-herdado-conta` e novamente criaremos um ".jar", mas desse vez com uma finalidade diferente: a aplicação utilizada pelo cliente.

Com o projeto `bytebank-herdado-conta` selecionado, pressionaremos o botão direito e escolheremos a opção "Export". Na caixa de diálogo aberta, selecionaremos o `JAR file` dentro da pasta `Java`.

![jar file](https://s3.amazonaws.com/caelum-online-public/843-java-packages/03/3_3_27_jar+file.png)

Como já sabemos, não iremos exportar os arquivos de configuração do Eclipse. Selecionaremos a pasta `src` e os três pacotes. A documentação (`doc`) também não será exportada. Modificaremos o nome do arquivo ".jar" para `bytebank-1.0-executavel`.

![configurações de exportação do arquivo jar](https://s3.amazonaws.com/caelum-online-public/843-java-packages/03/3_3_28_configuracoes+de+exportacao+do+arquivo+jar.png)

Assim feito, pressionaremos o botão "Next" para prosseguirmos com as configurações de exportação.

Veremos uma nova caixa de diálogo que apresenta opções a serem selecionadas, são eles "Export class files with compile errors" e "Export class files with compile warnings". As duas opções devem ser selecionadas, pressionaremos "Next".

![nova caixa de diálogo jar](https://s3.amazonaws.com/caelum-online-public/843-java-packages/03/3_3_29_nova+caixa+de+dialgo+jar.png)

Na próxima caixa de diálogo, veremos que na parte inferior existe o campo "Select the class of the application entry point". Nós deveríamos direcionar a entrada da aplicação; qualquer aplicação Java sendo executada mediante um ".jar" se inicia por um método `main()`, e esse método está dentro de uma classe, portanto precisamos definir de alguma forma qual será nossa classe inicial a ser enxergada pela máquina virtual como *entry point*.

Selecionaremos o botão "Browse" e serão exibidas as três classes que possuem o método `main()` no projeto, são elas `TesteContas`, `TesteSaca` e `TesteTributaveis`. Selecionaremos `TesteContas`, pois essa classe contem o `System.out.println()`, o que significa que teremos uma saída para verificar se a execução da aplicação funcionou.

![classes que contém o main](https://s3.amazonaws.com/caelum-online-public/843-java-packages/03/3_3_30_classes+que+contem+o+main.png)

A entrada da aplicação ou *entry point*, portanto, passou a ser `br.com.bytebank.baco.test.TesteContas`.

Para executarmos o arquivo ".jar" `bytebank-1.0-executavel`, iremos até o terminal e acionaremos o comando `java -jar`.

```ruby
Last login: Fri Mar 9 11:01:12 on console
Aluras - iMac:~ alura$ cd /Volumes/Dados_MAC/ 
Aluras - iMac: DADOS_MAC alura$ 1s
danilo-maximo     flavio-almeida      nico steppat
fabio-chaves      leonardo-codeiro    revisor-beta.jar
Aluras-iMac:DADOS_MAC alura$ java -jar revistor-beta.jar
Alura -iMac:DADDOS_MAC alura$ cd
Alura- iMac: alura$ pwd
/Users/alura 
Aluras-iMac:~ alura$ cd Desktop/
Aluras-iMac: Desktop alura$ 1s
Screen Shot 20-03-09 at 13-40-20-png desktop
bytebank-1.0-executavel.jar
Aluras-iMac:Desktop alura$ java -jar bytebank-1.0-executavel.jar
COPIAR CÓDIGO
```

Dentro do ".jar" existe uma configuração que se comunica com a máquina virtual indicado que a classe `TesteContas` contém o método `main()`. Ao executarmos o ".jar", perceberemos que não existe uma janela de diálogo com botões, pois não desenvolvemos nenhum tipo de interface gráfica. São exibidos apenas os valores de saída da console.

```makefile
CC:89.0
CP:210.0
COPIAR CÓDIGO
```

São os mesmos valores exibidos pelo Eclipse na linha de comando quando executamos a classe `TesteConta`.

Com isso, provamos que é possível criar um ".jar" voltado para o usuário final.

Faremos um pequeno teste: Transferiremos o arquivo ".jar" que acabamos de gerar (`bytebank-1.0-executavel`) para o projeto `bytebank-biblioteca`, na pasta `libs`.

![jar executável como biblioteca](https://s3.amazonaws.com/caelum-online-public/843-java-packages/03/3_3_31_jar+como+biblioteca.png)

Feito isso, selecionaremos o ".jar" e pressionaremos o botão direito e escolheremos as opções "Build Path > Add to Build Path", ou seja, adicionaremos esse ".jar" como se fosse uma biblioteca.

Ao abrirmos o arquivo, veremos os pacotes do projeto como o esperado, no entanto há uma pasta `META-INF`, uma pasta de configuração que contém um arquivo denominado `MANIFES.MF`.

Dentro desse arquivo há um conteúdo muito simples, contém a versão do arquivo e seu `main` class.

```makefile
Manifest-Version: 1.0
Main-Class: br.com.bytebank.banco.test.TesteContas
COPIAR CÓDIGO
```

Vemos como seria um ".jar" executável, que apresenta algumas diferenças. Nas próximas aulas falaremos de outras bibliotecas padrão do mundo Java.

Sabemos que um código produzido por um desenvolvedor Java pode ser utilizado por outros desenvolvedores. Nesse sentido, documentar o código e facilitar seu uso por outros desenvolvedores é uma boa prática a ser seguida.

Sobre a geração de documentação, podemos usar o Javadoc, já para distribuição podemos empacotar a aplicação em um `jar`. Vamos começar pelo Javadoc.

## Exercício Javadoc

> O Javadoc só estará disponível para instalações de JDK's e não para JRE's. Certifique-se de estar usando uma JDK.

1 - Quando criamos nossas classes, nada mais justo do que adicionarmos a informação sobre o autor. Nesse sentido, vamos alterar a classe `Cliente.java` e nela adicionar a meta informação sobre o autor e sua versão.

```kotlin
/**
* Classe que representa um cliente no ByteBank
*
* @author Nico Steppat
* @version 0.1
*/
public class Cliente {
    /* código omitido */
}COPIAR CÓDIGO
```

> Lembre-se que através do atalho `/**` o Eclipse automaticamente adiciona a documentação com `@author` para você. Vale a pena se habituar com esse atalho.

2 - Faça a mesma coisa para a classe `Conta.java`.

3 - Sabemos que uma documentação pode ir além do nome do autor e versão, por exemplo, documentando métodos e construtores. Utilizando o atalho `/**`, documente o construtor da classe `Conta.java`. O resultado da documentação deve ficar assim:

```java
/**
* @param agencia
* @param numero
*/
public Conta(int agencia, int numero) {
    /* código omitido */
}COPIAR CÓDIGO
```

O atalho `/**` apenas adiciona a informação sobre os parâmetros do método, sendo de responsabilidade do desenvolvedor completar a documentação.

```java
/**
* Construtor para inicializar o objeto Conta a partir da agencia e numero
* @param agencia
* @param numero
*/
public Conta(int agencia, int numero) {
    /* código omitido */
}COPIAR CÓDIGO
```

4 - Ainda na classe `Conta.java`, documente o método `saca`. Utilize mais uma vez o atalho `/**`:

```java
/**
* Valor precisa ser menor ou igual ao saldo
* @param valor 
* @throws SaldoInsuficienteException
*/
public void saca(double valor) throws SaldoInsuficienteException {
    /* código omitido */
}COPIAR CÓDIGO
```

5 - Através do *Quick Access*, procure por **Javadoc** em `View`. Selecionando a opção, será exibida a aba "Javadoc". Experimente clicar nas classes que você acabou de documentar. Na aba "javadoc" será exibida a documentação da classe.

6 - Além de exibirmos a documentação clicando em cada classe documentada, podemos gerar a documentação como arquivo para ser consultado. Para isso, acesse o menu `Project -> Generate Javadoc`.

Na lista de projetos exibidos, não esqueça de selecionar o projeto `bytebank-herdando-conta`. Certifique-se que em `Javadoc command` esta preenchido com o caminho da ferramenta `javadoc`. Utilize na opção *User standard docket* o caminho padrão projeto já preenchido, sem qualquer alteração. Por fim, clique no botão "Finish" para gerar a documentação.

7 - Verifique a pasta `doc` gerada com a documentação. Acesse o arquivo `doc/resources/index.html`. Essa página é o ponto de entrada para a documentação. Passeie pelas classes documentadas verificando o resultado.

Java é uma plataforma de desenvolvimento completa que se destaca com sua grande quantidade de projetos *open source*. Para a maioria dos problemas no dia a dia do desenvolvedor já existem bibliotecas para resolver. Ou seja, se você gostaria de se conectar com um banco dados, ou trabalhar no desenvolvimento web, na área de data science, criação de serviços ou Android, já existem bibliotecas para tal, muitas vezes mais do que uma.

Aí existe a necessidade de organizar, centralizar e versionar os JARs dessa biblioteca e gerenciar as dependências entre elas. Para resolver isso, foram criadas ferramentas especificas e no mundo Java se destacou o Maven. O Maven organiza os JARs (código compilado, código fonte e documentação) em um repositório central que é publico e pode ser pesquisado:

https://mvnrepository.com/

Lá você pode ver e até baixar os JARs, mas o melhor é que a ferramenta Maven pode fazer isso para você. Se ficou interessado em aprender o Maven que ainda tem outros recursos bem legais, dá uma olhada no nosso curso especifico:

[Maven: Build do zero a web](https://cursos.alura.com.br/course/maven-build-do-zero-a-web)

Obs: Se você é usuário Linux, o Maven é bem parecido com os gerenciadores `apt` ou `rpm`. No MacOS existe o `brew` com o mesmo propósito. No mundo .Net temos o `nuget` e a plataforma node.js usa `npm`. Gerenciar dependências é um problema do cotidiano do desenvolvedor, e cada sistema ou plataforma possui a sua solução.

Nessa aula mais leve vimos e aprendemos:

- quais comentários e tags (anotações) a usar para definir o *javadoc*
- como gerar o *javadoc* no Eclipse
- que *javadoc* é uma documentação para desenvolvedores
- que as classes Java padrão também usam *javadoc*
- como criar nossa própria biblioteca através do JAR (**J\**ava \**AR**chive)
- como importar a biblioteca no novo projeto
- como criar um JAR executável



**4. O pacote java.lang**

Quando falamos sobre exceções já vimos várias classes como `Exception`, `RuntimeException`, `NullPointerException` ou `ArithmeticException`.

Todas essas classes vem do pacote `java.lang` e por isso não era preciso importá-las.

Conheceremos um conceito fundamental da `String`: uma vez que foi criada, ela não poderá ser modificada posteriormente. Chamamos o conceito de um objeto não poder ser alterado de **imutabilidade**. Caso você queira alterar algo em uma `String`, você terá de criar uma `String` que refletirá uma nova ação, ou seja, teremos dois objetos, como duas "Aluras", sendo uma com "A" e outra com "a".

Ao consultarmos a documentação oficial, veremos que o `replace()` retorna uma String.

Se quisermos imprimir `alura`, deveremos criar uma `String` que chamaremos de `outra`, e que apontará para o objeto de nosso interesse.

```typescript
package br.com.bytebank.banco.test;

public class TesteString { 

    public static void main(String[] args) { 

        String nome = "Alura";

        String outra = nome.replace("A", "a");

        System.out.println(outra);
    }
}
COPIAR CÓDIGO
```

Com isso, temos o resultado impresso de `alura`.

Na verdade, temos duas `String` na memória, sendo uma `nome` que aponta para o objeto `Alura` e a `String` `outra` que aponta para um novo objeto, no caso, `alura`.

Todos os métodos funcionam nessa linha: devolvem uma nova `String`, respeitando o conceito de imutabilidade. Esse é um conceito importante e algumas classes do nosso projeto seguem essa ideia.

Nem todas classes são imutáveis, a nossa classe `Conta` não é imutável, afinal a ideia de uma conta é necessariamente dinâmica, o saldo de uma conta está sempre em movimento e transformação.

Nos vídeos talvez você tenha percebido que alguns métodos da classe `String` recebem uma variável do tipo `CharSequence`. O tipo `CharSequence` é uma interface que a própria classe `String` implementa (pois uma `String` é uma sequência de caracteres!):

```java
public class String implements CharSequence {COPIAR CÓDIGO
```

Quando usamos a classe `String` até poderíamos declarar a variável com o tipo da interface, mas isso é raro de se ver:

```bash
CharSequence seq = "é uma sequencia de caracteres";COPIAR CÓDIGO
```

O interessante é que existem outras classes que também implementam a interface `CharSequence`. Em outras palavras, existem outras classes que são sequências de caracteres além da classe `String`. Por quê?

# A classe `StringBuilder`

Vimos que a classe `String` é especial pois gera objetos imutáveis. Isso é considerado benéfico pensando no design mas é ruim pensando no desempenho (e por isso devemos usar aspas duplas na criação, pois a JVM quer contornar os problemas no desempenho com otimizações).

Agora vem um problema: imagina que você precisa criar um texto enorme e precisa concatenar muitas `String`, por exemplo:

```makefile
String texto = "Socorram";
texto = texto.concat("-");
texto = texto.concat("me");
texto = texto.concat(", ");
texto = texto.concat("subi ");
texto = texto.concat("no ");
texto = texto.concat("ônibus ");
texto = texto.concat("em ");
texto = texto.concat("Marrocos");
System.out.println(texto); COPIAR CÓDIGO
```

Nesse pequeno exemplo já criamos vários objetos, só porque estamos concatenando algumas Strings. Isso é nada bom pensando no desempenho e para resolver isso existe a classe `StringBuilder` que ajuda na concatenação de Strings de forma mais eficiente.

Veja o mesmo código usando o `StringBuilder`:

```go
StringBuilder builder = new StringBuilder("Socorram");
builder.append("-");
builder.append("me");
builder.append(", ");
builder.append("subi ");
builder.append("no ");
builder.append("ônibus ");
builder.append("em ");
builder.append("Marrocos");
String texto = builder.toString();
System.out.println(texto);COPIAR CÓDIGO
```

O `StringBuilder` é uma classe comum. Repare que usamos o `new` para a criação do objeto. Além disso, como o objeto é mutável, utilizamos a mesma referência, sem novas atribuições.

# A interface CharSequence

Agora o legal é que a classe `StringBuilder` também implementa a interface `CharSequence`:

```java
public class StringBuilder implements CharSequence {COPIAR CÓDIGO
CharSequence cs = new StringBuilder("também é uma sequencia de caracteres");COPIAR CÓDIGO
```

Isso faz que alguns métodos da classe `String` saibam trabalhar com o `StringBuilder`, por exemplo:

```java
String nome = "ALURA";
CharSequence cs = new StringBuilder("al");

nome = nome.replace("AL", cs);

System.out.println(nome);COPIAR CÓDIGO
```

Vice-versa a classe `StringBuilder` tem métodos que recebem o tipo `CharSequence`. Dessa forma podemos trabalhar de maneira compatível com as duas classes, baseado numa interface comum.



O que aprendemos?

Nessa aula aprendemos e conhecemos:

- o *package* `java.lang` é o único pacote que não precisa ser importado
- nele tem classes fundamentais que qualquer aplicação precisa, como a classe `String` e `System`
- objetos da classe `String` são imutáveis e usamos uma sintaxe literal para criar (*object literal*)
- qualquer método de alteração da classe `String` devolve uma nova `String` que representa a alteração
- a classe `String` é uma `CharSequence`
- se precisamos concatenar muitos `String` devemos usar a classe `StringBuilder`
- vimos vários métodos da classe String como `trim`, `charAt`, `contains`, `isEmpty`, `length`, `indexOf`, `replace`



**5. O pacote java.lang.Object**

O que é?

Visibilidade? Acesso?

Pacote?

```csharp
public class System { 

    public static ???? out

}
```



**System.out.println("Alura")**

System

	- classe, java.lang, acesso publico (public)

out

	- atributo, public, referencia, static

println

- metodo, publico, não static, sobrecarga  (varais versões do mesmo metodo), não joga exceções d tipo checked



![image-20230104192850321](../../../../../AppData/Roaming/Typora/typora-user-images/image-20230104192850321.png)



**6. O método toString()**

![image-20230104194623012](../../../../../AppData/Roaming/Typora/typora-user-images/image-20230104194623012.png)

O método `toString()` existe para devolver uma informação sobre o estado do objeto. o método `toString` deve devolver informações sobre o estado do objeto. É útil para a depuração no desenvolvimento.

O método `toString()` existe para ser sobrescrito.  é boa prática sobrescrever o método para dar um significado maior do que a saída padrão desse método.



### Java e java.util: Coleções, Wrappers e Lambda expressions

**01. Conheceno Arrays**

![image-20230105065737524](../../../../../AppData/Roaming/Typora/typora-user-images/image-20230105065737524.png)



**Array de referências**

![image-20230105071854053](../../../../../AppData/Roaming/Typora/typora-user-images/image-20230105071854053.png)

ao criar um array de objetos o valor padrão é null

![image-20230105072518420](../../../../../AppData/Roaming/Typora/typora-user-images/image-20230105072518420.png)

![image-20230105072804387](../../../../../AppData/Roaming/Typora/typora-user-images/image-20230105072804387.png)

Até agora vimos a forma "classica" de criar um objeto array usando a palavra chave `new`, por exemplo:

```cpp
int[] numeros = new int[6];
numeros[0] = 1;
numeros[1] = 2;
numeros[2] = 3;
numeros[3] = 4;
numeros[4] = 5;COPIAR CÓDIGO
```

No entanto também há uma forma literal. *Literal*, nesse contexto, significa usar valores diretamente, menos burocrático, mais direito. Veja a diferença:

```cpp
int[] refs = {1,2,3,4,5};COPIAR CÓDIGO
```

Usamos as chaves `{}` para indicar que se trata de um array e os valores já ficam declarados dentro das chaves.

Nessa aula sobre *Arrays* aprendemos:

- Um array é uma estrutura de dados e serve para guardar elementos (valores primitivos ou referências)
- Arrays usam colchetes (`[]`) sintaticamente
- Arrays têm um tamanho fixo!
- Um array também é um objeto!
- Arrays são *zero-based* (o primeiro elemento se encontra na posição `0`)
- Um array é sempre inicializado com os valores padrões.
- Ao acessar uma posição inválida recebemos a exceção `ArrayIndexOutOfBoundException`
- Arrays possuem um atributo `length` para saber o tamanho
- A forma literal de criar uma Array, com o uso de chaves {}.



**2.Guardando qualquer referência**

Array do tipo Object

![image-20230105073813214](../../../../../AppData/Roaming/Typora/typora-user-images/image-20230105073813214.png)

![image-20230105073913642](../../../../../AppData/Roaming/Typora/typora-user-images/image-20230105073913642.png)

Como nós estamos controlando a execução, sabemos que esta posição do array aponta para o objeto `ContaPoupanca`. `ref` é um objeto do tipo `ContaPoupanca()`, portanto, aponta para o objeto `ContaPoupanca`.

Por isso, queremos informar ao compilador que isso vai funcionar, que nós temos conhecimento de o código irá compilar. Fazemos isso por meio de um **cast** de referências. Transformamos uma referência de um tipo mais genérico, para uma de um tipo mais específico. Isso pode ser chamado também de **type cast**:

![image-20230105074327933](../../../../../AppData/Roaming/Typora/typora-user-images/image-20230105074327933.png)

# Cast explícito e implícito

Já falamos bastante sobre o *Type Cast* que é nada mais do que a conversão de um tipo para outro.

# Cast implícito e explícito de primitivos

Para ser correto, já vimos o cast acontecendo antes mesmo de defini-lo. Temos dois exemplos, o primeiro do mundo de primitivos:

```cpp
int numero = 3;
double valor = numero; //cast implícitoCOPIAR CÓDIGO
```

Repare que colocamos um valor da variável `numero` (tipo `int`) na variável `valor` (tipo `double`), sem usar um cast explícito. Isso funciona? A resposta é sim, pois qualquer inteiro cabe dentro de um double. Por isso o compilador fica quieto e não exige um *cast explicito*, mas nada impede de escrever:

```cpp
int numero = 3;
double valor = (double) numero; //cast explícitoCOPIAR CÓDIGO
```

Agora, o contrário não funciona sem cast, uma vez que um `double` não cabe em um `int`:

```cpp
double valor = 3.56;
int numero = (int) valor; //cast explicito é exigido pelo compiladorCOPIAR CÓDIGO
```

Nesse caso o compilador joga todo valor fracional fora e guarda apenas o valor inteiro.

# Cast implícito e explícito de referências

Nas referências, o mesmo princípio se aplica. Se o cast sempre funciona não é necessário deixá-lo explícito, por exemplo:

```java
ContaCorrente cc1 = new ContaCorrente(22, 33);
Conta conta = cc1; //cast implicitoCOPIAR CÓDIGO
```

Aqui também poderia ser explícito, mas novamente, o compilador não exige pois qualquer `ContaCorrente` é uma `Conta`:

```java
ContaCorrente cc1 = new ContaCorrente(22, 33);
Conta conta = (Conta) cc1; //cast explícito mas
```

# Type cast explícito sempre funciona?

A resposta é não. O cast explicito só funciona se ele for *possível*, mas há casos em que o compilador sabe que um cast é impossível e aí nem compila, nem com *type cast*. Por exemplo:

```java
Cliente cliente = new Cliente();
Conta conta = (Conta) cliente; //impossível, não compilaCOPIAR CÓDIGO
```

Como o cliente não estende a classe `Conta` ou implementa uma interface do tipo `Conta`, é impossível esse *cast* funcionar, pois uma referência do tipo `Conta` jamais pode apontar para um objeto do tipo `Cliente`.

A certificação Java tem muitas dessas perguntas sobre *cast* possível, impossível, explícito e implícito. Se você pretende tirar essa certificação, vale a pena estudar esse assunto com muita calma.



**3.Entendendo o array String args**

O Eclipse não passou nenhum parâmetro, e por isso nenhum foi exibido. No Eclipse, no botão verde com o símbolo de play, localizado na barra superior, há na direita uma seta menor, apontando para baixo. Clicando nela, na opção "Run Configurations" é possível manipularmos as configurações, ou seja, como a máquina virtual do Java chamará a nossa classe.

![imagem com um círculo verde, com um triangulo branco dentro, indicando uma função de play, ao lado, do lado exterior, há um triângulo menor, preto, que ao ser clicado exibe um menu com demias opções](https://caelum-online-public.s3.amazonaws.com/850-java-util/08/-transcricao-compressed_02.08_004_botao-verde.png)

Na lateral esquerda, há uma lista com todas as *run configurations* que já foram utilizadas para rodar os programas em nossa máquina.

Na parte superior temos diversas abas, uma delas é a `Arguments`, ou seja, argumentos. Nela, podemos inserir os parâmetros:

```undefined
1 2 oi nico java rocks e eh legalCOPIAR CÓDIGO
```

Clicamos em "Apply" e "Run". Temos o seguinte resultado no console:

```undefined
Funcionou!!
1
2
oi
nico
java
rocks
e
eh
legalCOPIAR CÓDIGO
```

Todos os parâmetros passados.

Agora já vimos os array de strings, bem como array de referências. Adiante, criaremos um array de objetos e falaremos sobre os métodos genéricos da classe `Object`, especialmente o `equals()`.

Nessa aula aprendemos:

- uma array do tipo `Object` pode guardar qualquer tipo de referência
- quando convertemos uma referência genérica para uma referência mais específica é preciso usar um *type cast*
- o cast só compila quando é possível, mesmo assim pode falhar na hora de rodar
- quando o *type cast* falha podemos receber uma `ClassCastException`
- para receber valores ao chamar o programa Java na linha de comando podemos usar o array `String[]` no método main



**4.ArrayList de Generics**

## Lista com capacidade predefinida

Falamos que o `ArrayList` é um array dinâmico, ou seja, por baixo dos panos é usado um array, mas sem se preocupar com os detalhes e limitações.

Agora pense que você precisa criar uma lista representando todos os 26 estados do Brasil. Você gostaria de usar um `ArrayList` para "fugir" do array, mas sabe que o `ArrayList` cria um array automaticamente, do tamanho que a classe acha conveniente.

Será que não há uma forma de criar essa lista já definindo o tamanho do array? Claro que tem e é muito simples. O construtor da classe `ArrayList` é sobrecarregado e possui um parâmetro que recebe a *capacidade*:

```java
ArrayList lista = new ArrayList(26); //capacidade inicialCOPIAR CÓDIGO
```

A lista continua dinâmica, mas o tamanho do array inicial é de 26!

## Lista a partir de outra

Outra forma de inicializar uma lista é baseado na outra que é muito comum no dia a dia. Para tal a `ArrayList` possui mais um construtor que recebe a lista base:

```csharp
ArrayList lista = new ArrayList(26); //capacidade inicial
lista.add("RJ");
lista.add("SP");
//outros estados
ArrayList nova = new ArrayList(lista); //criando baseado na primeira listaCOPIAR CÓDIGO
```

Quanto mais sabemos sobre as classes Java padrão mais fácil fica o nosso código.

O que aprendemos?

Nessa aula começamos a falar sobre lista e conhecemos a classe `java.util.ArrayList`. Aprendemos:

- que a classe `java.util.ArrayList` encapsula o uso do array e oferece vários métodos de mais alto nível
- que uma lista guarda referencias
- como usar métodos `size`, `get`, `remove`
- como usar o `foreach` para iterar a `ArrayList`
- que os generics parametrizam classes
- que no caso da `ArrayList` podemos definir o tipo dos elementos através de generics

Isso é apenas o início sobre esse poderoso pacote `java.util`.





**5. Equals e mais listas**

**6. LinkedList**

lista duplamente encadeada 

![image-20230108161340626](../../../../../AppData/Roaming/Typora/typora-user-images/image-20230108161340626.png)



O pacote `java.util` é de extrema importância no desenvolvimento Java. Sobre ele podemos afirmar que:

`List` é uma *interface*, a `ArrayList` e a `LinkedList` são implementações

Todas as listas garantem a ordem de inserção, as listas garantem a ordem de inserção. Isso significa que ao iterar recebemos os elementos na mesma ordem que eles foram inseridos.

Todas as listas possuem um índice, as listas sempre possuem um índice (podemos acessar o elemento através da posição).

Além disso, existe mais uma característica: lista aceitam elementos duplicados, mas sobre isso falaremos um pouco mais na frente.



LinkedList e ArrayList são duas implementações diferentes da interface `List`. A `LinkedList` é uma lista duplamente "linkada" e a `ArrayList` representa um array com redimensionamento dinâmico.

Cada uma das implementações tem as suas vantagens e desvantagens (na dúvida escolha `ArrayList`). Relacione as características as implementações:

- A) acesso fácil e performático pelo índice
- B) inserção e remoção performática em qualquer posição, também no início
- C) elementos precisam ser copiados quando não há mais capacidade
- D) acesso mais demorado pelo índice, é preciso pesquisar os elementos

- `ArrayList`: A e C
- `LinkedList`: B e D

O que aprendemos?

Nessa aula aprendemos:

- como implementar o método `equals` para definir a igualdade
- que o método `equals` é utilizado pelas listas
- que existe mais uma lista, a `java.util.LinkedList`
- a diferença entre `ArrayList` e `LinkedList`
- a interface `java.util.List` que define os métodos da lista



**7.A alternativa threadsafe**

![image-20230108162806041](../../../../../AppData/Roaming/Typora/typora-user-images/image-20230108162806041.png)



![image-20230108163326472](../../../../../AppData/Roaming/Typora/typora-user-images/image-20230108163326472.png)

Nessa aula vimos:

- o `java.util.Vector`, que é uma *ArrayList* thread safe
- a interface `java.util.Collection` que é a interface de todas as coleções
- as listas são sequencias que aceitam elementos duplicados
- os conjuntos (`java.util.Set`) também são coleções, mas não aceitam duplicados nem são listas



 **8.Autoboxing e Unboxing**

Nos arrays primitivos, cada casa guarda o valor primitivo, enquanto que no array de referência, cada uma armazena a referência que é utilizada para encontrá-lo. Contudo, no mundo das listas, elas só podem ser de referências. Só existem coleções de referências.

Contudo, um problema surgirá disso. Criaremos uma variável que guardará um valor primitivo:

Dentro dela, temos o valor `29`, que é um primitivo. Queremos armazená-lo em uma lista, e daí surge o problema, a lista só é capaz de guardar referências.

Ao chamarmos o método `add()`, veremos que o Eclipse mostra que ele já espera receber uma referência do tipo `Object`, ou seja, se tentarmos adicionar o primitivo idade:

Não deveria funcionar, porque `idade` não é uma referência, logo, não é compatível com o tipo `Object`.

Inicialmente, isto realmente não funcionava, contudo, atualmente o Java cria uma solução sem que seja necessária nenhuma ação por parte do programador.

Para cada primitivo no mundo Java, existe algo que o representa no mundo orientado a objetos. Isso significa que, para cada tipo primitivo, há uma classe que o representa.

Por exemplo, para representar o `int` primitivo, existe a classe `Integer`:

Internamente, o Java transforma o primitivo em um objeto, e armazena a referência no array.

Como havíamos falado, parametrizar o `ArrayList` é uma boa prática para nossas coleções, e para isso utilizamos os *generics*, representados pelos símbolos de menor e maior (`<>`). Desta forma garantimos maior segurança, já que afastamos problemas de cast. Se tentarmos inserir um *generics* de `int`, não funcionará:

Simplesmente porque `int` é um primitivo, não uma referência. Assim, o certo é utilizarmos o `Integer`:

![image-20230109185355993](../../../../../AppData/Roaming/Typora/typora-user-images/image-20230109185355993.png)

![image-20230109185456007](../../../../../AppData/Roaming/Typora/typora-user-images/image-20230109185456007.png)

![image-20230109185530663](../../../../../AppData/Roaming/Typora/typora-user-images/image-20230109185530663.png)

Percebemos que a classe `Integer` aparece riscada, o que indicada que este construtor não deveria mais estar sendo utilizado. Mas então, como construiremos o objeto? Neste caso, o construtor é descontinuado, surge a mensagem de que "*The constructor Int3eger(int) is deprecated*".

Neste caso, para criarmos um objeto, temos que utilizar a classe, com o método estático `valueOf()`, que receberá um primitivo `int`:

Ao utilizarmos o `new` em um objeto, delegamos a criação para um método. Abriremos o método `valueOf()` para visualizarmos sua construção, lembrando que estamos considerando a versão Java 9:

Wrappers = São classes que contém funcionalidades e encapsulam a variável de tipo primitivo!

[Diferença entre int e Integer em Java | Alura](https://www.alura.com.br/artigos/diferenca-entre-int-e-integer-em-java#:~:text=O Java%2C para economizar memória%2C possui um cache,fazer um boxing dos valores e os reutilizar.)

[Integer (Java Platform SE 7 ) (oracle.com)](https://docs.oracle.com/javase/7/docs/api/java/lang/Integer.html)

 **9.A Classe Number**



![image-20230109192521134](../../../../../AppData/Roaming/Typora/typora-user-images/image-20230109192521134.png)



![image-20230109193114964](../../../../../AppData/Roaming/Typora/typora-user-images/image-20230109193114964.png)



O que aprendemos?

Nessa aula focamos nas classes *WRAPPERS* e aprendemos que

- para cada primitivo existe uma classe chamada *Wrapper*
- para guardar um primitivo numa coleção é preciso criar um objeto que embrulha o valor
- a criação do objeto Wrapper é chamada de *autoboxing*
- a retirada do valor primitivo do objeto Wrapper é chamada de *unboxing*
- *autoboxing* e *unboxing* acontecem automaticamente.
- as classes wrapper possuem vários métodos auxiliares, por exemplo para o parsing
- todas as classes wrappers que representam um valor numérico possuem a classe `java.lang.Number` como mãe



 **10.Ordenação de listas**

Dando continuidade à aula anterior, nesta, criaremos mais um `comparator`.

Previamente, havíamos criado uma classe com o intuito de encapsular somente um método específico, cuja execução efetua a comparação utilizando os parâmetros definidos, e em seguida, fizemos sua implementação. Fizemos isto baseado em um critério numérico, entretanto, nesta aula, veremos como isso pode ser feito com base em um `String`, já que neste caso a comparação envolverá vários caracteres.



 **10.A ordem Natural**

No mundo Java existem duas interfaces para definir o critério de ordenação dos elementos de uma lista.

As interfaces são:

java.util.Comparator - Correto, o *comparator* é um parâmetro do método `sort` da lista e da classe `Collections`.

java.lang.Comparable - Correto, para definir a ordem natural dos elementos!

No contexto da aula, o que significa *ordem natural*?

​	É a ordem definida pelo próprio elemento da lista, no nosso exemplo a classe `Conta` define o seu próprio critério de ordenação implementando a interface `java.lang.Comparable`.

Nesse caso não é utilizado nenhum `Comparator`.

----



Vou te passar um desafio e fazer algumas perguntas relacionadas com listas. Para responder, investigue a documentação oficial da classe `Collections` dentro do pacote `java.util`:

- Como podemos inverter a ordem de uma lista?
- Como podemos embaralhar todos os elementos de uma lista?
- Como podemos rotacionar os elementos de uma lista?

Você consegue descobrir os métodos?

Para inverter a ordem de lista você pode usar o método `reverse` da classe `Collections`:

```lua
Collections.reverse(lista);COPIAR CÓDIGO
```

Para embaralhar existe o método `shuffle` e para rotacionar tem o método `rotate`:

```scss
Collections.shuffle(lista);
Collections.rotate(lista, 5); //rotacionar 5 posicoesCOPIAR CÓDIGO
```

Vale explorar essa classe!



Ordenar arrays também não é difícil basta usar o método `sort` da classe `Arrays`. A classe `Arrays` é parecida com `Collections` no sentido que também junta vários métodos utilitários:

Nessa aula fundamental e importante aprendemos que:

- para ordenar uma lista é preciso definir um critério de ordenação
- há duas formas de definir esse critério
  - pela interface `Comparator`
  - pela interface `Comparable` (*ordem natural*)
- o algoritmo de ordenação já foi implementado
  - na lista no método `sort`
  - na classe `Collections` pelo método `sort`
- a classe `Collections` é uma fachada com vários métodos auxiliares para trabalhar com as coleções, principalmente listas

Respira fundo, pois estamos quase no fim desse curso, no entanto falta ainda aprender (*finalmente!*) as famosas *lambda expressions*. Tá pronto para continuar?



 **11. Classes Anônimas e Lambdas**

Você já sabe agora que existem muitas coleções. Só nesse treinamento vimos `ArrayList`, `LinkedList` e `Vector`. Se você assistir ainda o curso dedicado as coleções você aprenderá as interfaces para fila (`Queue`), conjunto (`Set`) e mapa (`Map`) cada uma com várias implementações.

Aí vem uma pergunta: Como posso acessar (*iterar*) todas essas implementações de maneira uniforme sem saber os detalhes de cada implementação? A resposta está na "caixa de padrões de projeto" e se chama `Iterator`.

Uma `Iterator` é um objeto que possui no mínimo dois métodos: `hasNext()`e `next()`. Ou seja, você pode usá-lo para perguntar se existe um próximo elemento e pedir o próximo elemento. A notícia boa é que isso funciona com TODAS as implementações e aí a grande vantagem.

Veja o código para usar o `Iterator` de uma lista:

```csharp
List<String> nomes = new ArrayList<>();
nomes.add("Super Mario");
nomes.add("Yoshi"); 
nomes.add("Donkey Kong"); 

Iterator<String> it = nomes.iterator();

while(it.hasNext()) {
  System.out.println(it.next());
}COPIAR CÓDIGO
```

Se você entendeu esse código, você já aprendeu como iterar com filas, conjuntos ou mapas. Veja o uso do `Iterator` através de um conjunto:

```java
Set<String> nomes = new HashSet<>();
nomes.add("Super Mario");
nomes.add("Yoshi"); 
nomes.add("Donkey Kong"); 

Iterator<String> it = nomes.iterator();

while(it.hasNext()) {
  System.out.println(it.next());
}
```

**Outros métodos de Collections.**

Além do método `sort()` que vimos neste capítulo, a classe `Collections` também possui muitos outros métodos interessantes. Vamos dar uma olhada em alguns:

### `Collections.reverse()`

O método `reverse()` serve para inverter a ordem de uma lista. As vezes precisamos imprimir uma lista de nomes do último para o primeiro, ou uma lista de `ids` do maior para o menor e é nestas horas que utilizamos o reverse para inverter a ordem natural da lista para nós.

### `Collections.shuffle()`

O método `shuffle()` serve para embaralhar a ordem de uma lista. Por exemplo em um caso de um sistema de sorteio, em que precisamos de uma ordem aleatória na nossa lista, utilizamos o método shuffle para embaralhá-la.

### `Collections.singletonList()`

O método `singletonList()` nos devolve uma lista imutável que contêm um único elemento especificado. Ele é útil quando precisamos passar um único elemento para uma API que só aceita uma Collections daquele elemento.

### `Collections.nCopies()`

O método `nCopies()` nos retorna uma lista imutável com a quantidade escolhida de um determinado elemento. Se temos uma lista específica e precisamos obter uma outra lista imutável , contendo diversas cópias de um destes objetos, utilizamos o método nCopies(). O bom deste método é que mesmo que nós solicitemos uma lista com um número grande, como 10000 objetos, ele na verdade se referencia a apenas um, ocupando assim um pequeno espaço.

Este método também é utilizado para inicializar Listas recém criadas com Null, já que ele pode rapidamente criar diversos objetos, deste modo:

```
List<Type> list = new ArrayList<Type>(Collections.nCopies(1000, (Type)null));
```

Estes são apenas alguns exemplos dos diversos métodos da classe **Collections**.



---------------

## Uma nova coleção, o Set

Vamos aumentar o nosso modelo para começar a trabalhar com alunos, pois um curso tem alunos. Se queremos guardar os alunos, que pertencem a determinado curso, podemos muito bem criar uma lista de alunos na classe `Curso`, assim como temos uma lista de aulas. Mas queremos dar um passo além, mostrar que dentro da biblioteca de coleções há outras opções possíveis, em vez de `List`, que podem nos ajudar em um caso específico.

Se formos abrir a documentação do Java, vocês podem perceber que várias vezes podem aparecer a seguinte imagem:

![img](https://s3.amazonaws.com/caelum-online-public/java-collections/img/05/collections-interfaces.png)

Isso é a herança das interfaces, dentro da API de coleções. Até agora só trabalhamos com a interface `List`. Sim, ela é uma interface, tanto que nunca demos `new` em uma `List`, sempre em um `ArrayList` ou `LinkedList`. O interessante é que existem outras coleções, existe uma interface `Collection`, que é a "mãe" das outras coleções, que veremos daqui para frente.

A coleção que veremos neste capítulo é a segunda coleção mais utilizada, o `Set`, que lembra muito um conjunto matemático. Então, em vez de criarmos uma lista, criaremos um *set*. Para testá-lo, usaremos a classe `TestaAlunos` para testar os futuros alunos do nosso modelo (depois criaremos a classe `Aluno`). Como `Set` é uma interface, não podemos usar o `new`, então vamos dar `new` na implementação mais utilizada dela, o `HashSet`, que iremos entender com o tempo como é o seu funcionamento e quais suas grandes vantagens, comparados com o `ArrayList`:

A ordem da impressão saiu meio estranha. Os alunos não foram impressos na ordem em que foram adicionados. E é essa a primeira característica que podemos perceber quando estamos utilizando um conjunto, um *set*, não temos garantia da ordem em que os elementos vão ficar dentro desse conjunto, desse "saco de objetos". Um conjunto (diferente de uma lista, que representa uma sequência de objetos) é uma "sacola", e lá dentro está cheio de objetos, e você não sabe em que ordem eles estão.

Mas aí você pode pensar então que um conjunto é uma opção pior que uma lista. Não necessariamente. Muitas vezes, e você vai perceber que são mais do que imagina, não é necessário que haja uma ordem entre os elementos da coleção. Podemos simplesmente querer saber quais alunos estão matriculados no curso, não nos importa quem foi o primeiro aluno a se matricular, não temos essa necessidade neste caso. Mas se tivermos essa necessidade, usaríamos uma lista.

E não é por acaso que um conjunto não tenha os métodos de acesso que utilizam a ordem do elemento, como o método `get`, por exemplo. Claro, como não temos garantia da ordem dos elementos, não podemos invocar o `get` pedindo o quarto elemento, já que como não existe ordem, não existe esse quarto elemento.

Mas e para acessar esses elementos? Podemos fazer um `foreach`:

Com isso, imprimimos cada uma das `String`s que estão nesse conjunto.

## Vantagens do uso do HashSet

Por enquanto nós "perdemos" a ordem, se compararmos o conjunto com a lista. Então quais são as vantagens?

A primeira vantagem é que ele não aceita elementos repetidos. Podemos testar isso adicionando duas `String`s iguais e depois imprimi-las. Faça o teste:

```csharp
import java.util.*;

public class TestaAlunos {

    public static void main(String[] args) {

        Set<String> alunos = new HashSet<>();
        alunos.add("Rodrigo Turini");
        alunos.add("Alberto Souza");
        alunos.add("Nico Steppat");
        alunos.add("Nico Steppat"); // outro Nico Steppat, exatamente igual ao anterior

        System.out.println(alunos);    
    }
}COPIAR CÓDIGO
```

**Todos** os `Set`s do Java garantem para nós que só haverá um objeto dentro do conjunto, nenhum outro igual. Ele ignorará todos os outros elementos iguais, isso pode ser comprovado se imprimirmos o tamanho do conjunto, invocando o método `size`. No caso do exemplo acima, o resultado será **3**.

Mas a grande vantagem de se utilizar o conjunto é a velocidade de performance, quando utilizamos métodos que procuram objetos dentro de uma coleção (por exemplo, o método `contains`).

Toda coleção possui o método `contains`, isso porque esse método é da interface "mãe" das coleções, a `Collection`, logo uma lista também possui esse método.

O `contains` retorna um booleano dizendo se a coleção possui ou não determinado objeto que passamos para o método. Exemplo:

```java
boolean pauloEstaMatriculado = alunos.contains("Paulo Silveira");COPIAR CÓDIGO
```

E esse método é extremamente rápido quando executado em um `HashSet`. Muito mais rápido que em uma lista. Por quê?

Baseado no exemplo, o `contains` de uma lista faz uma busca linear, ou seja, busca elemento por elemento, para verificar que "Paulo Silveira" não se encontra no meio dos objetos da coleção. Já o `HashSet` utiliza uma **tabela de espalhamento** para tentar fazer a busca em tempo constante, tornando a busca mais rápida.

Em um conjunto com 10 mil, 100 mil objetos, realizando buscas frequentes, a diferença do tempo de execução entre o `HashSet` e uma lista é notável.

## Quando usar cada um?

Essa questão varia de acordo com a necessidade de cada um, o que é interessante é que podemos ser ainda mais genéricos quando declaramos as nossas coleções. `HashSet` implementa `Set`, que por sua vez implementa `Collection`, então podemos declarar um `HashSet` da seguinte forma:

```javascript
Collection<String> alunos = new HashSet<>();COPIAR CÓDIGO
```

Com isso, o nosso código continua compilando, já que a maioria dos métodos que vimos até aqui pertencem à interface `Collection`, assim o nosso código fica mais flexível.

Mas podemos perceber que ainda não podemos utilizar métodos que envolvam a ordem dos elementos. Para isso, podemos utilizar um recurso que utilizamos no capítulo passado, criar uma lista, passando a coleção por parâmetro para o construtor:

```javascript
List<String> alunosEmLista = new ArrayList<>(alunos);COPIAR CÓDIGO
```

Agora conseguimos ordenar essa lista, buscar pelo índice, e assim por diante. É comum utilizarmos várias coleções ao mesmo tempo, que compartilham os elementos entre si, para trabalharmos com eles da melhor forma.

### O que aprendemos neste capítulo:

- Uma nova coleção: `Set`.
- A implementação `HashSet`.
- Vantagens e desvantagens do `Set`.
- Mais sobre a interface `Collection`.



**Velocidade de busca das listas e conjuntos**

Crie a classe `TestaPerformance`, com um método `main` e um código que insere 50 mil números em uma `ArrayList` e os pesquisa. Vamos usar o método `currentTimeMillis()`, de `System`, para cronometrar o tempo gasto com a adição e pesquisa dos elementos:

```csharp
public class TestaPerformance {

    public static void main(String[] args) {

        Collection<Integer> numeros = new ArrayList<Integer>();

        long inicio = System.currentTimeMillis();

        for (int i = 1; i <= 50000; i++) {
            numeros.add(i);
        }

        for (Integer numero : numeros) {
            numeros.contains(numero);
        }

        long fim = System.currentTimeMillis();

        long tempoDeExecucao = fim - inicio;

        System.out.println("Tempo gasto: " + tempoDeExecucao);

    }

}COPIAR CÓDIGO
```

Troque o `ArrayList` por `HashSet` e verifique o tempo que vai demorar:

```xml
Collection<Integer> numeros = new HashSet<>();COPIAR CÓDIGO
```

O que é lento? A inserção dos 50 mil elementos ou as 50 mil buscas? Descubra computando o tempo gasto em cada `for` separadamente.

Se você passar de 50 mil para um número maior, como 100 mil, verá que isso inviabiliza por completo o uso de uma `List` em casos que quisermos utilizá-la essencialmente para pesquisas.

Crie a classe `TestaPerformance`, com um método `main` e um código que insere 50 mil números em uma `ArrayList` e os pesquisa. Vamos usar o método `currentTimeMillis()`, de `System`, para cronometrar o tempo gasto com a adição e pesquisa dos elementos:

```csharp
public class TestaPerformance {

    public static void main(String[] args) {

        Collection<Integer> numeros = new ArrayList<Integer>();

        long inicio = System.currentTimeMillis();

        for (int i = 1; i <= 50000; i++) {
            numeros.add(i);
        }

        for (Integer numero : numeros) {
            numeros.contains(numero);
        }

        long fim = System.currentTimeMillis();

        long tempoDeExecucao = fim - inicio;

        System.out.println("Tempo gasto: " + tempoDeExecucao);

    }

}COPIAR CÓDIGO
```

Troque o `ArrayList` por `HashSet` e verifique o tempo que vai demorar:

```xml
Collection<Integer> numeros = new HashSet<>();COPIAR CÓDIGO
```

O que é lento? A inserção dos 50 mil elementos ou as 50 mil buscas? Descubra computando o tempo gasto em cada `for` separadamente.

Se você passar de 50 mil para um número maior, como 100 mil, verá que isso inviabiliza por completo o uso de uma `List` em casos que quisermos utilizá-la essencialmente para pesquisas.

**Para saber mais: Coleções threadsafe**

**Para saber mais: Coleções threadsafe**



Uma das características mais interessantes de JVM é que ela sabe trabalhar em paralelo. Internamente isso é feito por meio de **Threads** que funcionam como pequenos processos dentro da JVM.

O problema é que as coleções que estamos usando até agora não foram feitas para serem manipuladas em paralelo. No entanto, nada impede que usemos um método da classe `Collections` para transformar uma coleção comum em uma coleção para threads. É justamente isso que o método faz, retorna um nova coleção que pode ser compartilhada entre threads sem perigos.



**Equals e hashcode**

Agora, queremos usufruir da grande vantagem dos `Set`s: **a velocidade**. Queremos perguntar para coleção, por exemplo, se determinado aluno está matriculado:

```csharp
System.out.println("O aluno " + a1.getNome() + " está matriculado?");
System.out.println(javaColecoes.estaMatriculado(a1));COPIAR CÓDIGO
```

Novamente, usaremos o TDD para criar o método automaticamente, basta usar o comando `CTRL + 1` e o Eclipse criará para você. Porém precisamos alterar o retorno para `boolean`. Já dentro do método, utilizaremos-nos de um outro método que está presente em todas as classes que implementam a interface `Collection`, o `contains`. Com isso, vamos delegar a funcionalidade do método `estaMatriculado` para um já existente:

```typescript
public boolean estaMatriculado(Aluno aluno) {
    return this.alunos.contains(aluno);
}COPIAR CÓDIGO
```

Agora, o `contains` utilizará a estrutura bem implementada da **tabela de espalhamento**, e irá retornar rapidamente `true` ou `false` para nós. Testando... Funciona! O aluno inserido algumas linhas antes, `a1`, está matriculado no curso. Se comentarmos a linha de inserção, o método nos retornará `false`.

## O método equals

Porém, existe um grande problema, bastante comum ao trabalhar com conjuntos, o problema do `equals`. Imagine que estamos nos utilizando de um *web service* e ele possui um formulário perguntando quem estamos procurando. Se vamos digitar no formulário, o seu retorno será uma String com o nome do aluno procurado:

```java
String alunoProcurado = "Rodrigo Turini";COPIAR CÓDIGO
```

Não podemos procurá-lo com o nosso método anterior, pois o método `estaMatriculado` recebe um objeto do tipo Aluno como parâmetro. Então vamos criar um objeto exatamente igual ao aluno `a1` criado anteriormente, e passá-lo na função, para saber se ele está ou não dentro do curso:

```csharp
Aluno turini = new Aluno("Rodrigo Turini", 34672);
System.out.println("E esse Turini, está matriculado?");
System.out.println(javaColecoes.estaMatriculado(turini));COPIAR CÓDIGO
```

Testando e... Deu `false`! Esse `turini` não é o mesmo aluno que adicionamos no curso como `a1`. Mas isso já sabíamos da orientação a objetos, se dermos um `new`, mesmo que o objeto contenha tudo igual, ele não fará referência ao primeiro, e portanto, são diferentes. Você pode testar executando o exemplo abaixo:

```csharp
public class TestaCursoComAluno {

    public static void main(String[] args) {

        Aluno aluno = new Aluno("Douglas Quintanilha", 11824763);
        Aluno alunoQueVeioDoFormulario = new Aluno("Douglas Quintanilha", 11824763);

        System.out.println("O aluno e igual ao aluno que veio do formulario?");
        System.out.println(aluno == alunoQueVeioDoFormulario);
    }
}

public class Aluno {

    private String nome;
    private int numeroMatricula;

    public Aluno(String nome, int numeroMatricula) {
        this.nome = nome;
        this.numeroMatricula = numeroMatricula;
    }
}COPIAR CÓDIGO
```

Olhando a documentação da interface `Collection` e indo no método `contains`, veremos que ele utiliza o método `equals`. Sabemos que a definição do `equals` usada pelo Java nem sempre é a que queremos. Usando nosso caso de alunos, sabemos que `a1.equals(turini) == true`, porém isso não é verdadeiro para o Java.

Por isso, precisamos reescrever o método `equals` na nossa classe `Aluno`. Para nós, dois alunos são iguais se ambos tiverem o mesmo nome, então vamos ao trabalho:

```typescript
@Override
public boolean equals(Object obj) {
    Aluno outroAluno = (Aluno) obj;
    return this.nome.equals(outroAluno.nome);
}COPIAR CÓDIGO
```

Lembrando que é preciso ter cuidado nos casos em que o nome seja `null`. Podemos nos defender disso colocando uma condição no construtor em que só seja possível criar o objeto se o nome não for `null`:

```csharp
public Aluno(String nome, int numeroMatricula) {
    if (nome == null) {
        throw new NullPointerException("Nome não pode ser nulo");
    }
    this.nome = nome;
    this.numeroMatricula = numeroMatricula;
}COPIAR CÓDIGO
```

E assim garantimos que no método `equals`, não teremos problemas com `NullPointerException`. Vamos testar agora e ver se "a1 é equals ao Turini":

```csharp
System.out.println("O a1 é equals ao Turini?");
System.out.println(a1.equals(turini));COPIAR CÓDIGO
```

E sim, é `true`! Porém, nossa comparação de cima ainda não funciona:

```csharp
Aluno turini = new Aluno("Rodrigo Turini", 34672);
System.out.println("E esse Turini, está matriculado?");
System.out.println(javaColecoes.estaMatriculado(turini));COPIAR CÓDIGO
```

Temos `false` como resultado. No entanto, se mudamos o `equals`, por que ele continua dizendo que `turini` não está matriculado? Ao comparar `turini` com `a1`, o resultado é `true` (como visto no nosso teste), porém o `estaMatriculado` nos retorna `false`.

Sempre que reescrever o método Equals é necessário reescrever o método hashCode.

## O método hashCode

Vamos à explicação: a estrutura `Set` usa uma **tabela de espalhamento** para realizar mais rapidamente suas buscas. Imagine que cada vez que você adiciona algo dentro do seu `Set` para espalhar os objetos, um número mágico é gerado e todos os objetos que o tenham são agrupados. E ao buscar, em vez de comparar o objeto com todos os outros objetos contidos dentro do `Set` (isso daria muitas comparações), ele gera novamente o mesmo número mágico, e compara apenas com aqueles que também tiveram como resultado esse número. Ou seja, ele compara apenas dentro do grupo de semelhança. No caso da matricula não reconhecida, o aluno `a1` estava num grupo diferente de `turini`, e por isso o método `contains` não conseguia encontrá-lo.

Como é gerado esse número mágico? Utilizando o método `hashCode`, por isso precisamos sobrescrevê-lo, mudando-o para quando criarmos um objeto `Aluno` com o mesmo nome, que esses objetos gerem o mesmo `hashCode` e portanto, fiquem no mesmo grupo. Podemos por exemplo pegar o primeiro caractere do nome. Dessa maneira, estaremos dividindo os grupos em grupos de alunos que começam com **A, B, C, D, ...**, e `Rodrigo Turini` tanto em `a1` quanto em `turini` estarão no grupo **R**:

```csharp
@Override
public int hashCode(){
    return this.nome.charAt(0);
}COPIAR CÓDIGO
```

Testando, vemos que funciona! Mas temos outro probleminha... O espalhamento é feito para que se tenha o menor número possível de objetos dentro de um grupo, e separando alfabeticamente como estamos fazendo, não é a maneira mais eficiente. Entrando na classe `String` do Java, vemos que ela tem o método `hashCode` implementado, e ele já faz uma conta bem difícil, para que haja o melhor espalhamento e assim, a busca seja bastante eficiente. Então, podemos fazer com que o nosso `hashCode` devolva o `hashCode` da `String` `nome`:

```csharp
@Override
public int hashCode(){
    return this.nome.hashCode();
}COPIAR CÓDIGO
```

Se rodarmos o código novamente, temos `true` em todos os testes. Considere a seguinte **regra**: caso você sobrescreva o método `equals`, obrigatoriamente deverá sobrescrever o método `hashCode`.

### O que aprendemos neste capítulo:

- Implementação das nossas próprias regras de comparação entre objetos de uma mesma classe.
- Sobrescrita do método `equals`.
- A necessidade de sobrescrever o método `hashCode` quando o `equals` for sobrescrito.

**Para saber mais: O contrato do método equals**

Nossa implementação do método `equals` é funcional, porém em alguns casos mais específicos podemos ter alguns problemas. Existe um contrato mais avançado que devemos seguir para implementar um método `equals` eficiente:

https://docs.oracle.com/javase/8/docs/api/java/lang/Object.html#equals-java.lang.Object-

Por conta dessas propriedades uma implementação sofisticada do método `equals` pode ser bem trabalhosa, por essa razão que as IDE's fornecem recursos que implementam esse método para nós.

No Eclipse você pode pressionar **CTRL + 3** e digitar **equals**.

![img](https://s3.amazonaws.com/caelum-online-public/java-collections/img/07/equals1.png)

Podemos ainda escolher os atributos que queremos utilizar na comparação:

![img](https://s3.amazonaws.com/caelum-online-public/java-collections/img/07/equals2.png)

Sendo assim, utilize esse recurso para implementar os métodos *equals* e *hashCode* da classe `Aluno`.
