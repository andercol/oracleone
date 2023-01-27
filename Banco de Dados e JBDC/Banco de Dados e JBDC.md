 **Introdução ao SQL com MySQL:Manipule e consulte dados.**

Para alinharmos as suas expectativas referente a esse treinamento, o nosso principal objetivo é apresentar o SQL para quem nunca teve contato antes. Por isso, abordaremos vários conceitos, mas sem nos aprofundar muito em cada um deles.

Isso por termos como propósito apresentar, para quem nunca viu banco de dados ou usou SQL, o primeiro contato com a ferramenta e também com o conceito da linguagem.

Aqui na plataforma Alura temos outro curso chamado [SQL Server: introdução ao SQL com Microsoft SQL Server 2017 neste link](https://cursos.alura.com.br/course/sql-com-sql-server-2017), que possui o mesmo treinamento que o curso que vamos realizar, com a diferença que este é para o banco MySQL.

Vamos iniciar esse treinamento efetuando o download e a instalação do MySQL. Vou contar um pouco também sobre o histórico do banco de dados, como surgiu, quais as principais características e vantagens, entre outros assuntos.

Iremos instalar os programas necessários e, para nos comunicar com o banco de dados, utilizaremos uma IDE, do inglês *Integrated Development Environment* (ambiente de desenvolvimento integrado), que é uma interface gráfica da própria MySQL chamada MySQL *Workbench*.

Dentro dessa interface, iremos aprender diversos conceitos da linguagem SQL, começando com como criar tabelas, compreendendo, por exemplo, o que é um campo, quais as categorias de campos que o MySQL suporta e o que é uma linha. Em seguida, vamos aprender como inserir, substituir e apagar os dados nas tabelas já criadas.

Após conhecermos todos esses processos de inclusão, alteração e exclusão de dados em tabelas, iremos aprender como consultá-los. A partir disso, vamos realizar uma carga de dados nas tabelas que estamos usando nesse curso e elaborar algumas seleções, sendo que essas podem ser simples ou de todos os campos. Também aprenderemos, por exemplo, a limitar essa seleção utilizando a cláusula *WHERE*.

Caso já conheça a linguagem SQL e gostaria de relembrar alguns conceitos, esse curso também é indicado. Mas se quiser se aprofundar mais, o recomendado é partir para os próximos cursos sobre esse tema, já que é deles em diante que vamos nos investigar mais sobre a manipulação, a consulta, como fazer programação e administrar o ambiente.

#### História do SQL

Vamos iniciar contando a história da linguagem SQL, para compreendermos quais foram os motivos, como surgiu e o seu histórico. 

A linguagem SQL foi desenvolvida no começo dos anos 70, na cidade de São José, Califórnia, em um projeto chamado *System R* da IBM, do inglês *International Business Machines*, cujo objetivo era comprovar a viabilidade da implementação de um modelo relacional, que um estudioso chamado Codd estava propondo.

Esse estudioso elaborou uma forma estruturada de realizar consultas nos bancos de dados que estavam surgindo, chamados “bancos de dados relacionais”.

Naquela época, os bancos de dados ainda não possuíam relacionamento entre as tabelas nas quais os dados eram armazenados. Era a categoria de banco de dados mais antigo, a sequencial, que efetuava a consulta dos registros de maneira sequencial, ou seja, um após o outro.

Com o surgimento dos bancos de dados relacionais (ou DBMS, do inglês, *Data Base Management System*, “Sistema de Gerenciamento de Banco de Dados"), Codd considerou criar uma linguagem que facilitasse a extração e manipulação de dados, além da manipulação das estruturas desse banco aproveitando a característica de relacionamento entre eles.

Porém, não era apenas a IBM que estava trabalhando com os novos bancos de dados relacionais. Por volta dos anos 80, a Oracle, dentre outras empresas, também estava buscando maneiras mais fáceis de manipular essas novas estruturas.

Mais para o final dos anos 80 e início dos 90, o órgão americano, o **ANSI** (da sigla *American National Standard Institute*), estabeleceu alguns padrões para as consultas dos bancos de dados relacionais.

Então, foi criada a linguagem *SQL*, do inglês *Structured English Query Language*, que traduzindo seria algo como “linguagem de consulta estruturada em inglês”. No inglês, geralmente, é pronunciado *SEQUEL* e não SQL, soletrando as letras - diferentemente do português, em que normalmente lemos como “ésse quê éle”.

O principal objetivo da linguagem SQL é padronizar a maneira como os registros são consultados nos bancos de dados relacionais. Atualmente, os bancos relacionais aderem ao padrão SQL, que vai além das consultas: é usado também, na criação, alteração, estruturação e manipulação do banco de dados, além da maneira como banco de dados interage com a segurança, entre outros usos.

Entre as vantagens do banco de dados relacional, a primeira é que essa padronização utilizando a linguagem SQL tem um custo reduzido do ***aprendizado\***. Por exemplo, o profissional com conhecimento sobre o SQL da Oracle conseguirá manipular facilmente o MySQL ou SQL Server da Microsoft. Por mais que existam diferenças - principalmente na parte de funções -, a adaptação do profissional não é uma questão complicada.

Outra vantagem, é a ***portabilidade\***. Por exemplo, é mais simples migrar sistemas que usam Oracle para SQL Server ou para MySQL, ou vice-versa. Lembrando que quanto mais for utilizado o SQL Standard definido pelo ANSI, mais fácil será essa portabilidade no futuro. Então, é útil evitar as funções específicas do banco de dados e permitir que o programa realize essa tarefa.

Já a ***longevidade\*** é a garantia de que os seus relatórios ou processos utilizando o SQL irão funcionar por um longo período, já que estarão sempre adaptados ao padrão ANSI. Ou seja, ao efetuar um upgrade de banco de dados o seu sistema não ficará fora de serviço.

Outro benefício é a ***comunicação\***. O fato da maioria utilizar SQL permite a facilidade de comunicação entre os sistemas. Como, por exemplo, processos de ETL, (*extract, transform and load*), ou de integração entre sistemas que ficam mais simples de serem desenvolvidos, já que ambos utilizam o SQL padrão.

Por último temos a ***liberdade de escolha\***. Por existir um padrão de linguagem, se a empresa for optar pelo uso de um banco de dados relacional não ficará presa à linguagem de comunicação, por exemplo, já que são bem semelhantes. Ao tomar essa decisão, a corporação irá utilizar outros critérios de escolha, como performance, hardware, custo, entre outros.

Contudo, essa padronização não possui apenas vantagens, há algumas desvantagens - ainda que poucas. A primeira é a privação da ***criatividade\***. O SQL possui limitações que podem não atender às novas demandas no mercado na linguagem SQL, principalmente com o surgimento das redes sociais e dos enormes volumes de dados, o chamado *big data*. Ou seja, há uma carência nas coletas de dados que estão trafegando na internet.

Para tal, estão surgindo outros bancos que usam padrões diferentes dos bancos de dados relacionais, o chamado *NoSQL*. Estes atendem de forma mais eficiente as demandas de tabelas de *big data* , como no caso das redes sociais. Lembrando que estamos nos referindo a estruturas que escapam do padrão ANSI e que, por isso, exigem um aprendizado mais específico.

Outro ponto é a escassez de estruturação da linguagem SQL, já que ela não possui *if*, *for* e *when*, isto é, comandos condicionais como as demais linguagens de programação.

Para conseguir suprir essa carência da estruturação, os bancos de dados relacionais da Oracle, SQL e MySQL criaram suas linguagens próprias internas que realizam esse conjunto de estruturação usando a linguagem SQL, mas que acaba se afastando um pouco do padrão ANSI.

Falando um pouco sobre o padrão ANSI, este possui três grupos de comandos. O primeiro, é o ***DDLs\***, ou *Data Definition Language* (linguagem de definição de dados). Os DDLs são a parte da linguagem SQL que permite a manipulação das estruturas do banco de dados. Como, por exemplo, criar um banco, tabelas, índices, apagar as tabelas e alterar a política de crescimento de índice. Ou seja, os comandos que envolvem a estrutura do banco de dados relacionais são os comandos do tipo DDL.

O segundo grupo de comandos são os chamados ***DML\***, ou *Data Manipulation Language* (linguagem de manipulação de dados). Esse grupo visa gerenciar os dados: incluindo, alterando e excluindo informações nas estruturas do banco, como as tabelas. Além disso, realizam as consultas, buscam as informações das estruturas e exibem para o usuário.

Finalmente, chegamos nos comandos ***DCL\***, ou *Data Control Language* ("linguagem de controle de dados"). Este grupo nos permite administrar o banco de dados como, por exemplo, o controle de acesso, o gerenciamento do usuário, gerenciar o que cada usuário(a) pode ou não visualizar, gerenciar o banco ao nível de estrutura (como a política de crescimento, como e onde será armazenado no disco), administrar os processos, saber quantos processos estão sendo executados, controle de log e assim por diante.

Nesse vídeo quis mostrar uma visão geral para vocês, não somente a história do SQL, mas também as suas características, vantagens, desvantagens e comandos dessa linguagem.

Vantagens:

* Aprendizado
* Portabilidade
* Longevidade
* Comunicação
* Liberdade de Escolha

Desvantagens:

* Falta de criatividade
* Falta de estruturação

Comandos:

* DDL - Os DDLs são a parte da linguagem SQL que permite a manipulação das estruturas do banco de dados.
* DML - Esse grupo visa gerenciar os dados: incluindo, alterando e excluindo informações nas estruturas do banco, como as tabelas.
* DCL - Este grupo nos permite administrar o banco de dados como, por exemplo, o controle de acesso, o gerenciamento do usuário, gerenciar o que cada usuário(a) pode ou não visualizar, gerenciar o banco ao nível de estrutura (como a política de crescimento, como e onde será armazenado no disco), administrar os processos, saber quantos processos estão sendo executados, controle de log e assim por diante.

### Definições

O objetivo nesse treinamento, como já mencionado, é apresentar para o(a) estudante o primeiro contato com a linguagem SQL.

Então, primeiramente, para compreender como o SQL funciona é preciso entender como trabalha o banco de dados. Visto que a maneira que o banco de dados é organizado está diretamente relacionado a forma que vamos criar os comandos SQL. Sendo assim, considerado um pré-requisito entender como opera um banco de dados.

Lembrando que nesse treinamento estamos usando o MySQL para mostrar como funciona a linguagem SQL, poderíamos utilizar Oracle ou SQL Server da Microsoft, por exemplo. Mas como esse curso faz parte de uma carreira mais completa de MySQL, utilizaremos esse banco de dados.

Vamos entender como é organizado o banco de dados. Os conceitos que vou apresentar podem até serem aplicados em outros bancos, como o da Oracle e SQL Server.

Conheceremos agora um pouco mais sobre esses conceitos.

O ***banco de dados\*** é um repositório que armazena dados que podem ser consultados, fica armazenado no disco rígido, como o SSD ou HDD, de outro modo, ocupa espaço no disco como, por exemplo, um arquivo word ou uma planilha de Excel. Ou seja, conseguimos no ambiente ir para um diretório específico e visualizar um ou mais arquivos que representam o banco de dados. Percebe-se, com isso, que a entidade maior é o próprio banco de dados.

No banco de dados há diversas ***entidades\***, estruturas que organizam como os dados são armazenados. Uma das principais entidades é a ***tabela\***, podendo conter várias no mesmo banco de dados.

Uma tabela, fazendo uma analogia, é como uma planilha no Excel — que há colunas e linhas. Mas, diferente da planilha de Excel, que ao gerar uma nova conseguimos visualizar uma série de colunas e linhas em branco, no momento de criação da tabela é preciso já estabelecer as ***definições\*** do que ela abrangerá.

Algumas dessas definições é a quantidade e categoria de cada ***campo\***. O campo seria a coluna, então podemos ter, por exemplo, campos da categoria `texto`, `número`, que podemos ter com casas decimais ou inteiros, `lógico`(verdadeiro ou falso), `binário`, que há bites armazenados que podem representar uma imagem ou algum outro arquivo diferente do formato texto e assim por diante. Portando, ao criar uma tabela, é necessário já definir quantos e as categorias de cada coluna.

Os valores de uma mesma coluna não podem ser de grupos diferentes, isto é, se o campo foi estabelecido como `numérico`, podemos apenas a armazenar números nesse campo. Se incluirmos algo que fuja muito, tipo um texto, o banco de dados retorna erro.

Já as linhas das tabelas, são chamadas ***registros\***. Este, diferente dos campos, possui número infinito - a depender do espaço em disco disponível para o banco de dados expandir. Inclusive, ao gerar um banco de dados podemos determinar políticas de crescimento ou o limite máximo que ele pode ampliar.

Outro conceito importante referente a tabela, é a ***chave primária\*** (*primary key*). No momento de criar uma tabela, não obrigatoriamente, podemos estabelecer uma chave primária, isso significa que os valores de um campo específico não podem se repetir em uma linha.

Por exemplo, vamos supor que a tabela seja a "tabela_cadastro_clientes" e temos na primeira coluna o "CPF" dos clientes e na terceira o "Nome". Se escolhermos o CPF como chave primária, isso quer dizer que não podemos ter dois registros (linhas) na tabela que tenham os mesmos valores na coluna "CPF". Isso faz sentido, já que ninguém possui CPF idênticos, já o nome é possível repetir, por não ser considerado chave primária.

Já se tivermos uma ***chave primária composta\***, o que não pode repetir é a combinação entre as colunas. Portando, chave primária são os valores de campos ou combinação entre campos — chave primária composta — que não podem se repetir nos registros da tabela.

No banco de dados podemos ter várias tabelas, cada uma possui fragmento da informação armazenada, podendo essas tabelas se relacionarem através da ***chave estrangeira\*** (*foreign key*). Como na "tabela_cadastro_clientes" que um campo é o "CPF" e o outro é "Nome" e na outra tabela que representa as vendas de produto para cada cliente, "tabela_vendas", e nesta também temos o campo "CPF".

Ao criarmos uma chave estrangeira entre os campos "CPF" da "tabela_vendas" e da "tabela_cadastro_clientes", isso significa que teremos uma ligação entre elas. Como mencionado em vídeos anteriores, o SQL surgiu da necessidade de manipular e armazenar dados em um banco de dados relacional, que possui relações entre as tabelas, isto é, possuem chaves estrangeiras. Isso faz com o que a informação tenha ***integridade\***, visto que não seria possível ter um cliente comprando um produto sem estar pré-cadastrado na tabela de clientes.

Anteriormente aos bancos de dados relacionais, eram utilizados os ***transacionais\***. Em outras palavras, não possuíam essa ligação entre as tabelas, podendo assim, registrar o CPF de um cliente na "tabela_vendas" que não esteja, necessariamente, pré-cadastrado na "tabela_cadastro_clientes". Isso gera um problema de integridade do dado, por isso, os bancos de dados relacionais surgiram para melhorar a qualidade da informação armazenada.

Nas tabelas também podemos encontrar os ***índices\***. Estes permitem encontrar informações da tabela de maneira mais rápida. Como exemplo, vamos imaginar que queremos obter todos os clientes que começam com o nome Victorino, se não tivermos um índice, o banco de dados relacional terá de percorrer registro por registro até encontrar o nome solicitado pela primeira vez e, após encontrar, informar e seguir buscando até o término das linhas para verificar se há mais de um cliente com esse nome.

Agora, se tivermos um índice para o campo "Nome" temos um algoritmo interno - como se já estivesse ordenado alfabeticamente os elementos da coluna "Nome". Isto é, já sabemos que o nome Victorino consta nos últimos registros com a inclusão do índice, não precisando percorrer todas as linhas até encontrar o primeiro nome com a letra **V**.

> O índice permite, neste caso, que a busca se inicie nas linhas que os nomes começam com a letra **V** e a partir disso, procurar o nome Victorino, tornando a busca mais rápida. Portanto, o índice serve para facilitar e agilizar a procura.

> Quando temos uma chave estrangeira, automaticamente o banco de dados cria índices nos campos que se interrelacionam, para que seja viável, por exemplo, ao cadastrar um cliente na "tabela_vendas" o banco de dados, internamente, verifique se o cliente consta na "tabela_cadastro_clientes" e para encontrar rápido é proveitoso que a tabela original já possua índice.

Recapitulando, no banco de dados há diversas tabelas, composta por campos (colunas) e registros (linhas), essas tabelas possuem chaves estrangeiras, primárias e podem conter índices.

Já quando estamos nos referindo a ***esquemas\*** (*Schemas*), é o conjunto de tabelas que representam o mesmo assunto. As tabelas de esquemas diferentes podem se relacionar, transformar em *Schemas* é apenas uma forma de agrupar as tabelas por tema, sendo mais utilizado no sentido de organização.

O banco de dados possui também a chamada ***View\*** (visão), um agrupamento de tabelas. Vamos aprender mais adiante nesse curso sobre query (consulta), e essa consulta pode me retornar não apenas as informações de uma determinada tabela, mas de duas os mais através das chaves estrangeiras. Após conseguir unir duas ou mais tabelas e gerar um resultado para essa consulta, podemos transformar-lá em uma **view**.

Isso significa que a view possui um comportamento similar a tabela, mas que por trás dela já há uma consulta estabelecida com as regras de negócio para agrupar as informações solicitadas.

Em SQL, tratamos as views como tabelas já existentes, contudo, na verdade, é uma lógica por trás. Algumas views podem ter *performances* não muito ágeis caso seja construída por comandos SQL muito custosos ou rebuscado.

Como já mencionado, temos no SQL comandos de consultas (*queries*) e ao realizar essa consulta precisamos definir em quais tabelas gostaríamos de buscar essas informações. Caso esses dados que queremos, esteja apenas em uma tabela, basta incluir o nome dela. Já se essas informações estiverem em mais de uma tabela, será necessário utilizar a cláusula `Join`.

O `Join` uni as tabelas através de um critério, ao elaborar essa consulta que junta tabelas podemos definir filtros, tal como clientes apenas no sexo masculino e/ou que moram apenas na região Sul. Essa consulta que aplicamos o filtro pode ser uma view.

Internamente, o banco de dados possuem as ***procedures\***. No começo desse treinamento havia mencionado que a linguagem SQL não é estruturada, mas a partir disso os estudiosos de banco de dados MySQL, Oracle e SQL Server criaram linguagens que não estão mais no padrão **ANSI**, mas linguagens proprietárias que permitem utilizar comando SQL para fazer algum tipo de lógica estruturada com *if*, *while*, entre outros comandos de repetições, por exemplo. Como se tivéssemos um programa em uma linguagem nativa do banco de dados utilizando comando SQL.

Nas *procedures*, podemos ter as ***funções\***. Estas são cálculos montados com campos que podemos usar dentro de um comando de consulta. Podemos criar uma função que facilite uma visualização ou contabilização e usa-lá para realizar as consultas.

O próprio banco MySQL possui um catálogo de funções: como tirar espaços em branco do registro, transformar letra maiúscula em minúscula, efetuar cálculos complexos como de datas — quantos dias tem entre determinadas datas, entre outras funções.

No banco de dados, também, temos o ***trigger\***. Este é um aviso programado caso algo ocorra no banco de dados ou tabela. Como, se quisermos ser avisados caso alguém realize alguma alteração ou delete informações nas tabelas. Este aviso poder ser uma função, uma *procedure* ou um único comando SQL, que será executado quando a condição da *trigger* for satisfeita.

Exemplificando, se tivermos duas tabelas "tabela_clientes" e a "tabela_taxas". Todo cliente cadastrado é preciso ir à tabela taxas e criar uma taxa com o valor zero na "tabela_taxas". Podemos ter uma *trigger* que toda vez que criado um cadastro na tabela de cliente, irá à tabela de taxas inserir o código do cliente e mais uma taxa *default* (padrão).

Com isso, estamos garantindo que ao incluir um novo cliente, ele(a) já terá um valor de taxa, mesmo que seja zero. O *trigger* pode ser utilizado para diversas outras situações no banco de dados.

Então, o banco de dados possui todos esses componentes: tabelas, *views*, *procedures* e funções. Espero que esses conceitos sejam úteis para incentivar vocês a conhecer mais sobre o que é um banco de dados.



#### Criando um banco de dados

[MySQL :: MySQL 8.0 Reference Manual :: 13.1.12 CREATE DATABASE Statement](https://dev.mysql.com/doc/refman/8.0/en/create-database.html)

Chegou a hora de você seguir todos os passos realizados por mim durante esta aula. Caso já tenha feito, excelente. Se ainda não, é importante que você execute o que foi visto nos vídeos para poder continuar com a próxima aula.

\1) Acesse o Workbench.

\2) No canto esquerdo temos uma estrutura em forma de árvore onde vemos o banco de dados, ou esquemas.

![1.png](https://caelum-online-public.s3.amazonaws.com/1220-mysqlintroducaoaosql/02/1.png)

\3) Abrindo um dos banco de dados podemos ver alguns dos seus componentes.

![2.png](https://caelum-online-public.s3.amazonaws.com/1220-mysqlintroducaoaosql/02/2.png)

\4) No menu do Workbench, temos o botão "+ SQL" onde uma área de edição será criada para que possamos incluir os comandos de SQL para gerenciar nossos bancos de dados.

\5) Efetue um duplo clique no banco de dados World. Depois, execute o seguinte comando na área de edição:

```sql
SELECT * FROM CITY;COPIAR CÓDIGO
```

\6) Clique em:

![3.png](https://caelum-online-public.s3.amazonaws.com/1220-mysqlintroducaoaosql/02/3.png)

E a consulta é executada.

![4.png](https://caelum-online-public.s3.amazonaws.com/1220-mysqlintroducaoaosql/02/4.png)

\7) Digite, abaixo, um novo comando:

```sql
SELECT * FROM COUNTRY;COPIAR CÓDIGO
```

\8) Clique em:

![5.png](https://caelum-online-public.s3.amazonaws.com/1220-mysqlintroducaoaosql/02/5.png)

E as duas consultas serão executadas.

\9) Se você selecionar uma área com alguns comandos e clicar em:

![6.png](https://caelum-online-public.s3.amazonaws.com/1220-mysqlintroducaoaosql/02/6.png)

Somente aquele comando selecionado é que será executado.

\10) Caso o comando esteja errado, abaixo você verá o resultado de cada execução.

\11) Vamos criar um banco de dados. Para isso, crie um novo script no Workbench e digite:

```sql
CREATE DATABASE SUCOS;COPIAR CÓDIGO
```

\12) Execute o comando. Note que o banco de dados é criado.

![7.png](https://caelum-online-public.s3.amazonaws.com/1220-mysqlintroducaoaosql/02/7.png)

\13) Podemos criar o banco de dados através de um assistente. Para isso, clique com o botão da direita do mouse sobre uma área qualquer onde fica a lista dos bancos de dados.

![8.png](https://caelum-online-public.s3.amazonaws.com/1220-mysqlintroducaoaosql/02/8.png)

E selecione Create Schema.

\14) Inclua o nome do banco de dados (ex: Sucos2).

\15) Clique em Apply.

\16) O comando SQL é exibido. Clique novamente em Apply e o novo banco é criado.

\17) Podemos apagar o banco de dados. Execute o comando:

```sql
DROP DATABASE SUCOS;COPIAR CÓDIGO
```

\18) Note que o banco não mais aparece na lista de bancos de dados.

![9.png](https://caelum-online-public.s3.amazonaws.com/1220-mysqlintroducaoaosql/02/9.png)

\19) Se escolhermos a base sucos2, com o botão da direita do mouse, podemos também apagar o banco clicando em Drop Schema.

![10.png](https://caelum-online-public.s3.amazonaws.com/1220-mysqlintroducaoaosql/02/10.png)

\20) É possível acessar o MySQL por linha de comando. Vá para o subdiretório c:\Program Files\MySQL\MySQL Server 8.0\bin

\21) Digite o comando:

```css
mysql -h localhost -u root -pCOPIAR CÓDIGO
```

Tecle enter e depois inclua a senha.

\22) Digite o comando:

```sql
CREATE DATABASE sucos;COPIAR CÓDIGO
```

Se você for conferir no Workbench veja que o banco de dados sucos foi acrescido à lista de bancos disponíveis.

\23) Para executar uma consulta no banco exemplo world digite:

```sql
USE world; <ENTER>
SELECT * FROM city; <ENTER>COPIAR CÓDIGO
```

Onde `<ENTER>` significa teclar a tecla Enter.

\24) Verá que a lista de cidades são listadas.

\25) Para sair digite:

```sql
exit
```



Nesta aula, aprendemos:

- A acessar e navegar pelo Workbench;
- A criar um banco de dados por linha de SQL ou pelo assistente;
- Como apagar um banco de dados por linha de SQL ou pelo assistente;
- Como acessar uma tabela por linha de comando ou pelo assistente;

--------

#### Tipos de dados



Sabemos que a entidade principal do banco de dados é a tabela, que possui colunas (campos) de diferentes categorias (tipos) e que, ao longo do mesmo campo, todos os valores devem ser do tipo estabelecido na criação da tabela.

Vamos entender agora quais são os principais tipos no caso do MySQL.

| **Tipo**  | **Valor em Bytes** | **Menor Valor(Com Sinal) - Signed** | **Menor Valor (Sem Sinal) - Unsigned** | **Maior Valor (Com Sinal) - Signed** | **Maior Valor (Sem Sinal) - Unsigned** |
| --------- | ------------------ | ----------------------------------- | -------------------------------------- | ------------------------------------ | -------------------------------------- |
| TINYINT   | 1                  | -128                                | 0                                      | 127                                  | 255                                    |
| SMALLINT  | 2                  | -32768                              | 0                                      | 32767                                | 65535                                  |
| MEDIUMINT | 3                  | -8388608                            | 0                                      | 8388607                              | 16777215                               |
| INT       | 4                  | -2147483648                         | 0                                      | 2147483647                           | 4294967295                             |
| BIGINT    | 8                  | -2xE63                              | 0                                      | 2xE63                                | 2xE64-1                                |



- Propriedade UNSIGNED: Não permite sinal no número. Por isso, o conjunto de valores válidos aumentam.

Iniciando pelo tipo `NUMÉRICOS`, temos duas categorias: `INTEIROS` e `DECIMAIS`. Nos números inteiros há diversos tipos que podem ser criados no MySQL e estão diretamente relacionados com o espaço que vou precisar para armazenar determinado número no banco de dados. Quanto maior o espaço, maior o conjunto de números possíveis a serem armazenados.

Observando a tabela, na coluna "TIPO" temos cinco categorias de números inteiros que podem ser armazenados no MySQL, o **TINYINT**, **SMALLINT**, **MEDIUMINT**, **INT** E **BIGINT**. No segundo campo, **Valor em Bytes** temos o número de bytes gastos para armazenar um número de determinado tipo, como o TINYINT que para armazenar é necessário 1 byte, o SMALLINT que gasta 2 bytes e assim sucessivamente.

Quanto maior a quantidade de bytes que posso armazenar, maior o espaço de números com os quais posso trabalhar. Então, por exemplo, o TINYINT fica entre -128 e 127, se for criado um número dessa categoria e enviado para armazenar o número 300, será retornado um erro, visto que esse tipo não suporta.

Temos também uma propriedade chamada `UNSIGNED`. É um atributo para números inteiros no MySQL utilizado para a definição de números positivos (sem sinal), visto que o sinal de menos (`-`) ocupa espaço de armazenamento. Então, se informar para o MySQL que uma coluna específica é do tipo inteiro e sem sinal, o conjunto de números para armazenar nesse tipo de campo é maior, visto que não é preciso armazenar no computador os sinais e até mesmo de números positivos, já que não é reservado um espaço para arquivar o sinal.

Exemplificando, se o TINYINT for do tipo UNSIGNED, consigo guardar de 0 a 255 e se for com sinal do -128 a 127, perceba haver uma diferença de espaços com o ganho do sinal.

Falando um pouco sobre os números `DECIMAIS`, temos dois tipos: de **PRECISÃO FIXA** e **PONTO FLUTUANTE**. Este significa que será realizado um arredondamento quando o número de casas decimais for superior ao número permitido pelo banco de dados. No ponto flutuante também temos dois tipos de valores decimais, o **FLOAT**, que trabalha com uma precisão simples de 4 bytes e o **DOUBLE**, com precisão dupla de 8 bytes. A diferença entre ambos é o tamanho de espaço de armazenamento.

O DOUBLE é mais usado para quando queremos ter números mais exatos nos cálculos, uma vez que ele faz arredondamentos mais precisos com números com mais casas decimais. Quando declaramos um número FLOAT ou DOUBLE, é possível especificar o número de dÍgitos e casas decimais.

Como exemplo, quando declaramos esse tipo, podemos especificar da seguinte forma `FLOAT (7,4)` isso significa que esse número do tipo FLOAT vai ter sete dígitos, sendo quatro casas decimais. Podemos inserir um número de casas decimais para além de quatro, como no caso do número `999,00009` com cinco casas decimais. O MySQL, atendendo a especificação, vai arredondar esse número para quatro casas decimais, armazenando o `999,0001`.

Nos `DECIMAIS FIXOS`, temos o **DECIMAL** ou **NUMERIC**, são análogos e sua definição é a quantidade máxima de dígitos que o número pode ter, no caso é 65 dígitos. Isso para números INTEIROS e DECIMAIS, ou seja, posso ter um número com um número inteiro e 64 casas decimais, ou posso ter um número com 64 números inteiros e apenas uma casa decimal.

Quando especificamos o número de casas decimais e a quantidade de dígitos, já estamos indicando o conjunto máximo e mínimo de dados. Vamos supor que temos `DECIMAL(5,2)`, isto é, o número é decimal com 5 dígitos e 2 casas decimais, só poderá armazenar entre -999,99 e 999,99, tal como especificamos no tamanho. Não será feita nenhuma aproximação, apenas vai ser gravado o número exato digitado para ser guardado no banco de dados.

Outro tipo numérico é o `BIT`, que armazena valores de até 64 bytes. Explicando um pouco sobre o BIT, se o campo for do tipo **BIT(1)**, é possível armazenar `1` ou `0`. Se for **BIT(2)** é viável armazenar `01`,`10`,`00` e `11`. Agora, se tiver um número de até 64 BITS, tenho o tamanho de 64 caracteres que podem ser gravado de 1 ou 0 que representa um número binário. Em campos do tipo `LÓGICO`, também é usado o BIT, sendo 1 (um) verdadeiro e 0 (zero) falso.

Os campos numéricos possuem alguns atributos. Já foi mencionado o `SIGNED` e `UNSIGNED`, que representam se haverá número negativo ou não, mas, agora vamos entender um pouco sobre o `ZEROFILL`, que preenche com zeros o que estiver faltando do número. Por exemplo, se tiver um campo do tipo `INT(4)` e pedir para solicitar o valor `5`, será gravado `0005`.

Outro atributo é o `AUTO_INCREMENT`. Esta propriedade é o próprio banco de dados que gera uma sequência numérica automaticamente. Se tiver uma tabela vazia com um campo desse tipo e for inserido um valor nessa coluna será atribuído o **valor 1**, se incluirmos mais um valor será gerado o **valor 2** e assim por diante. Essa sequência se inicia no 1 ou no 0, definido no próprio AUTO_INCREMENT, bem como, o valor do incremento que quero aplicar, podendo ser 0, 5, 10, 15, 20 ao invés de 1, 2, 3, 4.

O `OUT OF RANGE` é um erro que acontece quando tentamos gravar na base de dados um valor que está fora do espaço permitido.

Vamos compreender um pouco agora sobre os campos de `DATA` e `HORA`, temos cinco principais:

O campo `DATE` armazena um dia, no formato ano, mês e dia com traços entre eles, vai dia **1000-01-01** até **9999-12-31**. Já o `DATETIME`, guarda data e hora. A hora é importante principalmente quando tempos campos do tipo `LOG`, que possui o horário em que alguém fez alguma ação específica no sistema.

Seguindo, o `TIMESTAMP` é bem semelhante ao o **DATETIME**, contudo possui duas características principais: tem um *range* menor, que vai de **1970-01-01** a **2038-01-19** e possui fuso horário. Por isso o range fica menor, para armazenar mais informações.

Por mais que esse range de datas pareça pequeno, vale lembrar que utilizamos fuso horário para sistemas, por exemplo, de agendas para marcar reuniões em empresas que tiver funcionários(as) em diversos países. Por isso, o range até 2038 não é tão pequeno quanto parece, visto que ninguém irá marcar uma reunião de hoje até o ano de 2038.

O `TIME` armazena somente o horário e tem um range, de -838:59:59 a 839:59:59. Normalmente, usamos só para gravar uma hora no relógio que vai de meia-noite às onze e cinquenta e nove da noite do dia seguinte. Por isso, não é preciso ter 838 horas gravadas.

No campo `YEAR` é guardado somente o ano de 1901 a 2155. Podendo ser de duas ou quatro casas decimais, mas, normalmente utilizamos o DATE com uma data de primeiro de janeiro do ano que quero armazenar. Nesse treinamento ainda aprenderemos que existem funções do tipo data que conseguem extrair de um campo DATE, DATETIME ou TIMESTAMP o ano específico.

Falando um pouco do tipo `STRING`, são as cadeias de caracteres, os textos. Temos algumas categorias, começando pelo **CHAR** e o **VARCHAR**, ambos possuem o tamanho limite de 255 caracteres, a principal diferença são os espaços.

Caso tivermos um campo CHAR(4) e o utilizamos para armazenar as letras `"aa"`, no banco de dados será guardado dois espaços vazios, já que no campo foi estabelecido o caractere de tamanho quatro, ficaria `" aa"`. Isto é, esse campo ocupa maior espaço em disco, visto que grava os espaços vazios que, em algumas situações, pode ser desnecessário. Já quando nos referimos ao VARCHAR(4), se quisermos armazenar "aa", será guardado somente dois caracteres sem gastar espaço a mais no disco.

Temos também as STRINGS do tipo binário, o `BINARY` e o `VARBINARY`. Ambos possuem o mesmo conceito do CHAR e VARCHAR, um armazena os espaços e o outro não. O que os difere é que o armazenamento não é em caractere e sim em bytes, ou seja, o tamanho máximo é expresso em binário.

Outros campos do tipo `STRING` são o **BLOB** e o **TEXT**. No primeiro temos as variações de tamanho máximos **TINYBLOB**, **BLOB**, **MEDIUMBLOB** e **LONGBLOB** e no TEXT também, temos o **TINYTEXT**, **TEXT**, **MEDIUMTEXT** e **LONGTEXT**.

O BLOB é binário, então, em um LONGBLOB é possível guardar um grande binário no banco. Exemplo, posso gravar bytes de um arquivo no Word, ou os bytes de uma foto no banco de dados. Já o TEXT vai ser usado para armazenar textos.

Outro campo é o `ENUM`, é como se definíssemos opções. Por exemplo, se tivermos um campo chamado "SIZE" do tipo ENUM, na declaração é necessário inserir as opções que serão armazenadas nesse campo, no caso `Size ENUM ('x-small', 'small', 'médium', 'large', 'x-large')`, só conseguimos guardar no campo "SIZE" os textos nos parênteses.

Dois atributos importantes dos campos do tipo STRING são os `SET` e o `COLLATE`, estão relacionados com as cadeias de caracteres que serão usados para armazenar o texto. Caso queira guardar texto em alguma língua diferente é preciso selecionar na definição de campo o SET e o COLLATE especificando a língua utilizada, assim, será inserido no campo uma **tabela ask** maior ou menor dependendo do tipo que você está usando.

Finalmente, há alguns campos que aparecem mais nas versões atuais do MySQL, como o `SPACIAL`, para visualizar mapas. O tipo `POINT` grava o ponto usando a latitude e longitude no banco MYSQL que fornece algum determinado local que, como, restaurante, supermercado ou ponto turístico. Outro tipo é o `LINESTRING`, que representa uma linha. O `GEOMETRY` e `POLYGON`, que representam áreas no mapa.

Temos outros tipos, mas mencionei esses para dar um apanhado geral das possibilidades que temos para cria tabelas e quais as opções para definir o tipo de coluna.

![image-20230120062244916](../../../../../AppData/Roaming/Typora/typora-user-images/image-20230120062244916.png)



----

#### Criando a primeira tabela

Agora que já sabemos os tipos, vamos criar a primeira tabela no banco de dados. Lembrando que estamos fazendo um projeto de banco de dados para uma empresa de suco de frutas.

Conversando com a empresa, nos foi passado que gostariam de armazenar no MySQL os cadastros dos clientes com as seguintes informações: o CPF do cliente, o nome completo, o endereço completo (rua, bairro, cidade, estado e CEP), a data de nascimento, a idade, o sexo, o limite de crédito para efetuar a compra dos produtos, o volume mínimo de sucos que o cliente pode comprar e se já foi realizado a primeira compra.

Analisando essas informações, percebemos que cada uma é uma coluna e será necessário definir o tipo de cada campo. Vamos, então, para o Workbench que já temos o banco de dados **sucos**, mas sem nenhuma tabela ainda.

Vamos criar a primeira tabela, então. Na parte superior esquerda da tela, clique no ícone de um papel escrito SQL com um sinal de `(+)` embaixo. Significa que estamos criando um script SQL e irá abrir uma nova área que digitaremos os comandos.

Para criarmos uma tabela, basta escrever `CREATE TABLE`, note que o Workbench nos dá algumas opções do que pode ser o comando que estamos inserindo. Seguindo o comando, é preciso inserir um nome para a tabela, que vai ser "tbcliente". Neste treinamento não vamos nos preocupar tanto com nomenclatura, mas há boas práticas de como criar nomenclatura para tabelas, campos, índices, chave primária e estrangeira, e assim por diante.

Obs: Antes de criar a tabela garante que você selecionou o banco `sucos` usando o comando:

```perl
use sucos;COPIAR CÓDIGO
```

O comando básico para criar uma tabela no banco é:

```sql
CREATE TABLE tbcliente;COPIAR CÓDIGO
```

Seguindo com a nossa tabela, além do nome é preciso estabelecer as colunas e seus respectivos tipos. Clicando em "Enter" e abrindo um parêntese para especificar os campos, vamos iniciar pelo CPF, o número que identifica o cliente, pode ser que tenha pontos, traços e às vezes inicia com zero. Por essa razão, por mais que o CPF sejam números, é melhor armazenar como texto. Visto que se gravar como número no momento de gravar, os zeros no início serão **truncados**. Exemplificando, se tivermos um CPF com o número `00388323102`, o banco de dados guarda `3888323102`. Por isso, vamos considerar o CPF com o tipo VARCHAR.

```sql
CREATE TABLE tbcliente
(CPF VARCHAR(11),
....COPIAR CÓDIGO
```

Após a vírgula vamos inserir os próximos campos. O "NOME" também será VARCHAR e, por ter nomes compridos, vamos estabelecer 100 caracteres para reservar o nome. Continuando, temos "ENDERECO" que também devemos considerar haver nomes de ruas grandes, inclusive, às vezes é viável criar dois campos para gravar o endereço. Vamos inserir da seguinte maneira `ENDERECO1 VARCHAR(150),`, `ENDERECO2 VARCHAR(150),`, e depois o bairro `BAIRRO VARCHAR(50),`, a cidade `CIDADE VARCHAR(50),`, lembrando sempre de inserir uma vírgula em cada linha.

O próximo campo pedido pela empresa é o "ESTADO", que também será do tipo VARCHAR `ESTADO VARCHAR(50),` em seguida o `CEP VARCHAR(8),`. Na idade, como dificilmente as pessoas vão ter mais de 150 anos, não é preciso colocar um INT, um SMALLINT já atende o que precisamos `IDADE SMALLINT,`, o sexo, que vai ser uma letra M (masculino) e F (feminino), ficando `SEXO VARCHAR(1),`.

No nosso campo de limite de crédito estamos nos referindo a valores em dinheiro, valores decimais, como, limite de crédito de R$ 1.627.438,32. Então, vamos colocar `LIMITE_CREDITO FLOAT,`, caso queira deixar com espaço entre a palavra limite e crédito, basta inserir crase no início e fim, assim `limite credito`.

Perceba que não especificamos o número de caracteres no FLOAT, mas poderíamos colocar `FLOAT(10, 2),`. Contudo, mesmo sabendo que dinheiro tem duas casas decimais, vamos representar o número sem fixar o número de casas decimais.

> **Opinião do instrutor:** quando estamos falando de banco de dados, estamos falando sobre armazenar informação. Quando exibo a informação é que posso mostrá-la do jeito como ela deve ser representada. Ou seja, na minha opinião, você não precisa se preocupar com o formato do valor, do número, ou do texto no momento de armazená-lo no banco de dados, mas sim no momento de exibir em um relatório, em um programa. E aí você tem, não somente no SQL, mas também nas linguagens de programação com as quais vai trabalhar em conjunto com o anco de dados, de exibir a informação do jeito como ela tem que aparecer. Isto é, posso gravar um número com dez casas decimais, mas no momento em que eu for exibir, forço a exibir só com duas casas.

Já o volume de compras é expresso em litros, então, também não vamos nos preocupar se tem ou não casas decimais: `VOLUME_COMPRA FLOAT,`. Finalmente, o último campo, se o cliente já realizou uma primeira compra ou não. Neste caso vamos usar o campo BIT de um espaço apenas, para eu poder ter o 1 (realizou a primeira compra) ou o 0 (ainda não realizou a primeira compra): `PRIMEIRA_COMPRA BIT(1))`, esse último parêntese fecha o que inseri no início da inclusão de todas as colunas.

Código completo:

```scss
CREATE TABLE tbcliente
( CPF VARCHAR (11) ,
NOME VARCHAR (100) ,
ENDERECO1 VARCHAR (150) ,
ENDERECO2 VARCHAR (150) ,
BAIRRO VARCHAR (50) ,
CIDADE VARCHAR (50) ,
ESTADO VARCHAR (2) ,
CEP VARCHAR (8) ,
IDADE SMALLINT,
SEXO VARCHAR (1) ,
LIMITE_CREDITO FLOAT ,
VOLUME_COMPRA FLOAT ,
PRIMEIRA_COMPRA BIT (1));COPIAR CÓDIGO
```

Ficou assim, `CREATE TABLE,` logo depois o nome da tabela, abro parênteses, coloco todos os campos separados por vírgula, o nome do campo e o tipo, e fecho o parêntese. Vamos rodar agora, selecionando na parte superior à área que digitamos o comando, o ícone de raio. Na parte de "Action Output" é exibida uma mensagem informando que o comando foi executado com sucesso.

Na região de "Schemas", clicando em **sucos** com o botão direito do mouse e escolhendo a opção "Refresh All", note que a tabela "tbcliente" foi criada.

Fizemos o primeiro comando de SQL para criar uma tabela. Espero que tenham entendido e gostado, até a próxima aula!

Nesta aula, aprendemos:

- Como visualizar os dados de uma tabela;
- Como segregar a seleção de dados;
- A usar as condições de maior e menor na seleção de dados da tabela;
- Como filtrar dados através de datas.
- Como implementamos filtros compostos.



#### Java e JDBC: trabalhando com um bando de dados

Nesse curso, nós aprenderemos a configurar um banco de dados e fazer com que a nossa aplicação faça requisições a ele. Nós veremos como recuperar uma conexão com o nosso banco de dados, veremos como fechar essa conexão.

[00:19] Veremos também sobre transações e, além de tudo, nós também vamos executar comandos como `Insert`, `Delete`, tudo isso a partir da nossa aplicação. Nós iremos utilizar as classes e interfaces do pacote java.sql e veremos todos os conceitos necessários para que você possa trabalhar com as melhores práticas.

[00:42] A ideia é que ao final do curso, vocês sairão confiantes e com total conhecimento sobre o funcionamento de cada um dos recursos. E aí, vocês estão preparados?

##### Usando um banco de dados

![image-20230124072909679](D:/Users/Colin/AppData/Roaming/Typora/typora-user-images/image-20230124072909679.png)



No desenho, no começo do vídeo, é mostrado o comando necessário para inserir um produto: `INSERT INTO PRODUTO ('nome', 'descricao') VALUES ('Notebook', 'Notebook Samsung');` Esse comando não irá funcionar caso seja executado, pois não há aspas simples (') nos atributos da tabela. O correto seria: `INSERT INTO PRODUTO (nome, descricao) VALUES ('Notebook', 'Notebook Samsung');`

[00:00] Fala, aluno, tudo bom? Na última aula, nós aprendemos como configurar o nosso banco de dados. Uma vez configurado, nós conseguimos recuperar a conexão, nós conseguimos nos conectar no banco de dados e realizar alguns comandos. No nosso caso, nós inserimos um produto na nossa tabela Produto.

![Esquema iniciado no elemento "Aplicação Java" se conectando ao elemento "JDBC - Java Database Conectivity" e "Java.sql", que se conectam ao elemento "Driver MySql Java" e ao elemento "Driver SQL Server Java", os quais se conectam respectivamente aos databases "MySQL e "SQLServer".](https://caelum-online-public.s3.amazonaws.com/1451-jdbc/Transcri%C3%A7%C3%A3o/Imagens/aula1_video3_imagem1.PNG)

[00:22] A nossa motivação agora é que nós consigamos fazer essa mesma coisa, recuperar uma conexão, ou inserir um produto, ou listar um produto, mas agora a partir da nossa aplicação Java. A grande questão aqui é que a nossa aplicação, ela não consegue conversar com o nosso banco de dados de forma nativa.

[00:46] Aqui nós temos uma aplicação Java rodando Java, e aqui, do outro lado, nós temos um banco de dados que roda um protocolo conhecido só por ele. Então o Java não tem como chegar no banco de dados e simplesmente fazer uma conexão com o MySQL, por exemplo. Então, como nós vamos conseguir fazer essa conexão?

[01:09] Para facilitar a vida do desenvolvedor, os desenvolvedores, a equipe do MySQL, ela criou para nós uma biblioteca Java. Uma biblioteca Java aqui, entre a aplicação e o banco de dados. A biblioteca vai conhecer todo esse lado do MySQL e vai expor para a nossa aplicação, então ela vai expor de uma forma que a nossa aplicação conheça tudo o que eu preciso para me comunicar com o MySQL.

[01:52] Então essa biblioteca vai ser o nosso famoso JAR, o JAR que nós já conhecemos da nossa linguagem Java. Então esse JAR, ele é desenvolvido pela equipe de desenvolvimento do MySQL. Quando a minha aplicação chega no JAR, eu tenho alguns conjuntos no JAR de classes, de interfaces, que dado determinado comando, vai conseguir chegar no meu banco de dados.

[02:27] E essa biblioteca aqui, ela tem um nome, ela é na verdade um driver. Então para ficar mais bonito o desenho, vamos colocar o nome que é dado para essa biblioteca, esse JAR. Então ela é um driver. Então tenho aqui o meu driver MySQL Java. Agora, com esse driver, se eu quiser me comunicar, por exemplo, com outro banco de dados, que eu vou pegar, por exemplo, um SQL Server.

[03:10] Então agora eu não tenho mais um MySQL, eu tenho um SQL Server. Eu vou precisar só pegar um driver SQL, que a nossa aplicação vai conseguir se comunicar com o banco de dados SQL Server. Então seria algo semelhante a um driver SQL Server do Java. Uma vez que tenho esse novo driver, agora a minha aplicação passa a conhecer o protocolo que é utilizado no SQL Server. Então ligar aqui para o nosso desenho ficar bonito.

[04:04] Só que nesse segundo banco, já começamos a perceber um problema. Porque, o que acontece? No primeiro driver eu tenho um conjunto de classes e interfaces do MySQL. No segundo driver, eu tenho um conjunto de classe e interfaces do SQL Server. Então dificilmente nós vamos ter chamadas iguais, vamos ter classes iguais.

[04:28] Então, para representar o que eu estou querendo falar, vamos supor que eu quero pegar uma conexão do MySQL e na classe `MySqlConnector`, por exemplo, eu tenho um `MySqlConnector.getConnection();`, que vai receber alguns parâmetros, como `(usuário, )`, que nós passamos para o nosso banco de dados, `MySqlConnector.getConnection(usuario, senha, db, servidor);` e etc.

[05:05] Muito dificilmente vamos ter algo igual do lado do SQL Server. Então, por exemplo, vamos supor que o pessoal do SQL Server criou aqui uma classe `SqlServerConnectionProvider` e tem um método `SqlServerConnectionProvider.connect()`, que também pode receber um `SqlServerConnectionProvider.connect(usuário, senha);`, enfim, pode receber os atributos que precisam de conexão com o SQL Server.

[05:52] Então aqui nós já vemos um problema: se eu precisar mudar do MySQL para o SQL Server, eu vou ter que, na hora de pegar a conexão, vou ter que alterar a chamada desse método para eu poder utilizar um outro tipo de banco. Aqui nós estamos trabalhando com duas opções, mas ainda temos bancos como PostgreSQL e qualquer um que quiséssemos nos conectar dessa maneira, seria bem trabalhoso.

[06:28] Então foi aí que o Java nos facilitou com uma camada de abstração, que vai ficar antes desses drivers. Então aqui, para ajeitar o nosso desenho, vamos mudar a forma como estávamos pensando aqui. E eu tenho aqui, após a aplicação Java, essa abstração, que vai ficar entre os drivers e vai ficar entre a minha aplicação.

[07:14] Essa abstração, ela é chamada de JDBC, ou melhor dizendo, Java Database - calma, ele não pulou linha, ficou ruim de enxergar. Então vai ser Java Database Connectivity. Agora, esse JDBC também vai ter uma abstração, ou seja, essas bibliotecas, os drivers aqui, deverão implementar os métodos que eu tenho no meu JDBC. Agora a minha aplicação só precisa conhecer esse JDBC.

[08:00] Então com a minha aplicação conhecendo JDBC, o JDBC dado algum comando, ele vai saber para qual aplicação ou para qual banco de dados que eu quero me conectar. Esse JDBC nada mais é do que o nosso pacote java.sql. Então tudo o que tem dentro de java.sql, é o nosso JDBC, essa nossa camada, essa nossa abstração da conexão com o banco de dados.

[08:43] E para conseguirmos pegar uma conexão com qualquer banco de dados que quisermos nos comunicar, eu vou ter no JDBC uma interface chamada “Connection com” e eu tenho no java.sql um `Connection con = DriverManager();`, que ele vai pegar uma conexão. Como ele vai saber qual é a conexão que é para recuperar? Dentro dos parênteses, eu vou ter uma `Connection con = DriverManager(UrlDeConexao);`.

[09:22] Com essa URL, eu vou passar qual é o tipo do banco de dados que eu quero me comunicar, eu vou falar qual é o meu usuário, qual é a minha senha, vou falar onde que está esse banco de dados e qual é a minha Database. Uma vez que eu tenho aqui um *connection*, eu tenho a minha conexão recuperada, consigo agora, da minha aplicação, realizar qualquer comando que eu quiser.

[09:55] Então nesse desenho, nós já conseguimos ver que dessa maneira, pouco importa qual é o tipo de banco que eu vou ter do outro lado. Com a minha camada de abstração, com as minhas interfaces e com esse conjunto de classes que o JDBC traz para nós, essa conexão, para nós, fica bem mais simples, fica bem mais fácil de se conectar a um banco de dados. Então é isso, aluno. Espero que tenham gostado e até a próxima aula.

##### Listagem com Statement

Statement stm = con.createStatement();
		stm.execute("SELECT ID, NOME, DESCRICAO FROM PRODUTO");
		

		ResultSet rst = stm.getResultSet();
		
		while (rst.next()) {
			Integer id = rst.getInt("ID");
			System.out.println(id);
			String nome = rst.getString("NOME");
			System.out.println(nome);
			String descricao = rst.getString("DESCRICAO");
			System.out.println(descricao);



Nesta aula, aprendemos que:

- Para simplificar e encapsular a criação da conexão, devemos usar uma classe

   

  ```
  ConnectionFactory
  ```

  - A classe `ConnectionFactory` segue o padrão de criação *Factory Method*
  - O *Factory Method* encapsula a criação de um objeto

- Para executar um comando SQL, podemos usar a interface

   

  ```
  java.sql.Statement
  ```

  - O método `execute` envia o comando para o banco de dados
  - Dependendo do comando SQL, podemos recuperar a chave primária ou os registros selecionados



### **Usando PreparedStatement**

Nesta aula, aprendemos que:

- Ao executar SQL como

   

  ```
  Statement
  ```

  , temos um risco de segurança, chamado de

   

  *SQL Injection*

  - *SQL Injection* nada mais é do que passar um novo comando SQL como parâmetro

- Para evitar

   

  SQL Injection

  , devemos usar a interface

   

  ```
  PreparedStatement
  ```

  - Diferentemente do `Statement`, o `PreparedStatement` trata (*sanitiza*) cada parâmetro do comando SQL

  ##### Controle de transação

  Nesta aula, aprendemos que:

  - O banco de dados oferece um recurso chamado de

     

    transação

    , para juntar várias alterações como unidade de trabalho

    - Se uma alteração falha, nenhuma alteração é aplicada (é feito um *rollback* da transação)
    - Todas as alterações precisam funcionar para serem aceitas (é feito um `commit`)

  - `commit` e `rollback` são operações clássicas de transações

  - Para garantir o fechamento dos recursos, existe no Java uma cláusula

     

    try-with-resources

    - O recurso em questão deve usar a interface `Autoclosable`

##### O que é pool e datasource

Dando continuidade ao nosso curso de JDBC, eu gostaria de revisar agora como está a estrutura da nossa aplicação. Nós estamos comunicando a nossa aplicação em Java com o banco de dados MySQL. Só que nós vimos que essa aplicação, ela não se comunica com o banco de dados de forma nativa.

![Diagrama com área delimitada de "Aplicação Java - JVM" contendo o elemento "Main" conectado por uma seta de duplo sentido a "Connection Factory", ligado também por uma seta de duplo sentido ao elemento "JDBC / Driver MySQL (.JAR)", que por sua vez se liga ao banco de dados "MySQL" fora da área delimitada.](https://caelum-online-public.s3.amazonaws.com/1451-jdbc/Transcri%C3%A7%C3%A3o/Imagens/aula5_video1_imagem1.PNG)

[00:20] Justamente porque de um lado nós temos a linguagem Java e do outro lado, nós temos uma linguagem MySQL, que não nos importa qual é, mas nós sabemos que não é simplesmente codificar nas nossas classes que nós vamos conseguir comunicar com o MySQL. Então, para isso, nós vimos que é necessário um driver.

[00:46] Esse driver é específico dos bancos de dados. O que isso quer dizer? Hoje, utilizando o MySQL como base dados, nós vamos ter que utilizar um driver do próprio MySQL. Se um dia eu quiser trocar o meu banco de dados de MySQL para Postgre, eu vou ter que utilizar aqui um driver do Postgre.

[01:04] Só que isso já nos levantou uma outra dúvida: se eu tenho um driver específico, então quando eu for trocar o MySQL por um Postgre, então eu vou ter que sair procurando no código onde é utilizada essa implementação do driver, onde estamos chamando as classes, interfaces do driver, e vamos ter que alterar para classes e interfaces do Postgre.

[01:31] Só que nós vimos que não é necessário, porque nós temos uma interface, que é chamada JDBC, que ela tem as suas classes e interfaces, que expõe essa implementação dos drivers. Então quando eu quero solicitar uma conexão para o MySQL, eu vou na minha interface JDBC e eu solicito um `getConnection`, que é uma interface do próprio JDBC e ele que se vire com o driver e faça a requisição da minha conexão.

[02:08] Então, com a interface do JDBC, nós vimos que não precisamos conversar diretamente com as classes dos drivers, que são bem específicas. Com isso, nós vimos então que quando eu quero chamar, quando eu quero abrir uma conexão com o banco de dados o meu Driver manager, o meu get connection e passar a string de conexão entre parênteses. Só que nós vimos que quando necessitávamos abrir uma conexão, nós tínhamos que repetir esse código.



Então, nessa aula nós vamos ficando por aqui. Espero que vocês tenham entendido o desenho. Quem ainda está com alguma dúvida, na hora que formos programar, que formos codificar, eu acho que vai sanar essas dúvidas. A ideia agora é que a nossa aplicação agora, ela já vá para um patamar de uma aplicação real. Então é isso, aluno. Vejo vocês no próximo vídeo.

![Mesmo diagrama anterior, porém com o elemento "Datasource / Pool de Conexões C3P0 (.JAR)" entre "Connection Factory" e "JDBC / Driver MySQL (.JAR)" com as conexões por setas de duplo sentido.](https://caelum-online-public.s3.amazonaws.com/1451-jdbc/Transcri%C3%A7%C3%A3o/Imagens/aula5_video1_imagem2.PNG)



**O que aprendemos?**

Nesta aula, aprendemos que:

- É boa prática usar um ***pool\* de conexões**

- Um

   

  pool

   

  de conexões administra/controla a quantidade de conexões abertas

  - Normalmente tem um mínimo e máximo de conexões

- Como existe uma interface que representa a conexão (`java.sql.Connection`), também existe uma interface que representa o *pool* de conexões (`javax.sql.DataSource`)

- **C3PO** é uma implementação Java de um *pool* de conexão
