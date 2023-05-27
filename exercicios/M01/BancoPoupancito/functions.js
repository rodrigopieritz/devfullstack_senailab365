var senhaAutorizada = 123;
console.log(senhaAutorizada);

class Conta {
  constructor(saldo,senha) {
    this.saldo = saldo;
    this.senha = senha;
  }
  depositar() {
    let password = prompt("Digite a senha");
    if (password == senhaAutorizada) {
      let valorDepositado = prompt("Qual Valor deseja depositar?");
      let novoSaldo = parseFloat(valorDepositado) + conta.saldo;
     console.log(novoSaldo);
     this.saldo = novoSaldo;
     alert (`Seu saldo em conta é de R$${conta.saldo}`);
    
    } else {
      alert("Senha incorreta");
    }
  }
  retirar() {
    let password = prompt("Digite a senha");
    if (password == senhaAutorizada) {
      let valorRetirada = prompt("Qual Valor deseja retirar?");
      let novoSaldo = conta.saldo - parseFloat(valorRetirada);
     console.log(novoSaldo);
     this.saldo = novoSaldo;
     alert (`Seu saldo em conta é de R$${conta.saldo}`);
    } else {
      alert("Senha incorreta");
    }
  }
  exibirSaldo() {
    let password = prompt("Digite a senha");
    if (password == senhaAutorizada) {
     alert (`Seu saldo em conta é de R$${conta.saldo}`);
    } else {
      alert("Senha incorreta");
    }
  }
}

var conta = new Conta(0,0);

console.log (conta.saldo, conta.senha);
