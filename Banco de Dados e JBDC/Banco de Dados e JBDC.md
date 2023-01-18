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

* DDL
* DML
* DCL
* 