import {Cliente} from "./Cliente.js"
import {ContaCorrente} from "./Conta/ContaCorrente.js"
import { ContaPoupanca } from "./Conta/ContaPoupanca.js";
import { ContaSalario } from "./Conta/ContaSalario.js";
import { Diretor } from "./Funcionarios/Diretor.js";
import { Gerente } from "./Funcionarios/Gerente.js";
import { SistemaAutenticacao } from "./SistemaAutenticacao.js";

const diretor = new Diretor("Rodrigo", 10000, 1234567890);
const gerente = new Gerente("Ricardo", 5000, 1234567890);
const cliente = new Cliente("Lais", 7894561379, "456");

diretor.cadastrarSenha("123456789");
gerente.cadastrarSenha("123");


const diretorEstaLogado = SistemaAutenticacao.login(diretor, "123456789");
const gerenteEstaLogado = SistemaAutenticacao.login(gerente, "123");
const clienteEstaLogado = SistemaAutenticacao.login(cliente, "456");

console.log(diretorEstaLogado, gerenteEstaLogado);

console.log(clienteEstaLogado);

/* 
const cliente1 = new Cliente("Ricardo", 11122233309);
const contaCorrenteRicardo = new ContaCorrente (cliente1, 1001);
const contaPoupanca = new ContaPoupanca(50, cliente1, 1001);
//const conta = new Conta(0, cliente1, 1001);

const contaSalario = new ContaSalario(cliente1);
contaSalario.depositar(100);
contaSalario.sacar(10);

console.log(contaSalario);

//contaCorrenteRicardo.depositar(500);
//contaCorrenteRicardo.sacar(100);
//contaPoupanca.sacar(10);

console.log(contaPoupanca);

console.log(contaCorrenteRicardo); */