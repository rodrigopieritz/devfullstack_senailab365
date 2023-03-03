

var senhaAutorizada = 1;

class Conta {
  constructor(saldo, senha) {
    this.saldo = saldo;
    this.senha = senha;
  }
  get saldo(){
    return this._saldo
  }
  set saldo(novoSaldo){
    this._saldo = novoSaldo;
  }
  
   depositar() {
    let password = prompt("Digite a senha");
    if (password == senhaAutorizada) {
      let valorDepositado = prompt("Qual Valor deseja depositar?");
      let novoSaldo = parseFloat(valorDepositado) + conta.saldo;
      conta.saldo = novoSaldo;
      alert(`Seu saldo em conta é de R$${conta.saldo}`);
      console.log(conta.saldo);
    } else {
      alert("Senha incorreta");
    }
  }
  retirar() {
    let password = prompt("Digite a senha");
    if (password == senhaAutorizada) {
      let valorRetirada = prompt("Qual Valor deseja retirar?");
      let novoSaldo = conta.saldo - parseFloat(valorRetirada);
      conta.saldo = novoSaldo;
      alert(`Seu saldo em conta é de R$${conta.saldo}`);
      console.log(conta.saldo);
    } else {
      alert("Senha incorreta");
    }
  }
  exibirSaldo() {
    let password = prompt("Digite a senha");
    if (password == senhaAutorizada) {
      alert(`Seu saldo em conta é de R$${conta.saldo}`);
      console.log(conta.saldo);
    } else {
      alert("Senha incorreta");
    }
 
}
}
var conta = new Conta(0, 0);
 
class Poupanca extends Conta {
constructor(saldo,senha,juros){
    super(saldo, senha);
    this.juros = juros;
}
atualizarJuros(){
    let novoSaldo = poupanca.saldo * (1+this.juros);
    poupanca.saldo = novoSaldo;
   alert(`Seu saldo em conta é de R$${poupanca.saldo}`);
   console.log(poupanca.saldo);
}
}

var poupanca = new Poupanca(0,0,0.007);


 /*
 aumentando o a taxa para 1.2% toda a 
 vez que o método for chamado.


class PoupancaPremium extends Poupanca {
    constructor(saldo, senha, juros){
        super(saldo, senha, juros);
}
atualizarJuros(){
    let novoSaldo = poupanca.saldo * (1+this.juros);
    this.saldo = novoSaldo;
    alert(`Seu saldo em conta é de R$${poupanca.saldo}`);
}
}
*/