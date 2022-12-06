console.log(`Trabalhando com condicionais`);
constlistaDeDestinos = new array(
    `Salvador`,
    `São Paulo`,
    `Rio de Janeiro`

);
const idadeComprador = 15;
console.log("Destinos possíveis:");
conosole.log(listaDeDestinos);

if (idadeComprador >= 18) {
    console.log("Comprador maior de idade");
    listaDeDestinos.splice(1, 1);
}

if (idadeComprador >= 18) {
    console.log("Comprador maior de idade");
    listaDeDestinos.splice(1, 1); //removendo item
} else {
    //a pessoa é menor de idade
    if (estaAcompanhada) {
        console.log("Comprador está acompanhado");
    } else {
        console.log("Não é maior de Idade e não posso vender");

    }
}

if (idadeComprador >= 18) {
    console.log("Comprador maior de idadade");
    listaDeDestinos.splice(1, 1); // removendo item
} else if (estaAcompanhada == true) {
    console.log("Comprador está acompanhado");
    listaDeDestinos.splice(1, 1); //removedo item
} else {
    console.log("Não é maior de idade e não posso vender");
}
}