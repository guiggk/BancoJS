import { Cliente } from "./Cliente.js";

export class ContaCorrente{
    _agencia;
    _cliente;
    _saldo = 0;
   static numeroDecontas = 0;


    set cliente(novoValor){
        if(novoValor instanceof Cliente){
            this._cliente = novoValor;
        }
        
    }

    get cliente(){
        return this._cliente;
    }

    get saldo(){
        return this._saldo;
    }

    constructor(agencia,cliente){
        this._agencia = agencia;
        this._cliente = cliente;
        ContaCorrente.numeroDecontas++;

    }

    depositar(valor){
        if(valor > 0){
            this._saldo += valor;
            console.log("Valor depositado com sucesso!!, Sr."+this.cliente.nome);
            console.log("Seu saldo agora é R$"+this._saldo);
        }else{
            console.log("Coloque um valor positivo por favor!");
        }
    }
    sacar(valor){
        if(this._saldo >= valor){
            this._saldo -= valor;
            return valor;
        }else{
            console.log("Seu valor de saque é maior que seu saldo ");
        }
    }

    tranferir(valor,conta){
        const valorSacado = this.sacar(valor)
        conta.depositar(valorSacado);
    }
}
