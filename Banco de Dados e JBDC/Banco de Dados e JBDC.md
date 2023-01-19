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

