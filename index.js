import { Cliente } from "./Cliente.js";
import { ContaCorrente } from "./ContaCorrente.js";

console.log("Bem vindo ao Banco JS\n");
const client1 = new Cliente("Ricardo",64022151498);
const contaCorrenteCliente1 = new ContaCorrente(1001,client1);

contaCorrenteCliente1.depositar(20);


const  cliente2 = new Cliente("Eduardo",24022351465);
const contaCorrenteCliente2 = new ContaCorrente(1002,cliente2);
let contas = ContaCorrente.numeroDecontas > 1? "contas":"conta";
contaCorrenteCliente1.tranferir(20,contaCorrenteCliente2);
console.log(contaCorrenteCliente2.cliente);
console.log(contaCorrenteCliente1.cliente);
console.log("Existe:",ContaCorrente.numeroDecontas,contas,"no Banco JS");

