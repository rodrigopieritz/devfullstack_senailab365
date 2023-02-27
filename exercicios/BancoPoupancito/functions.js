/*
Um banco contratou você para criar uma 
classe que opere as contas do banco utilizando 
orientação a objetos.

Crie uma classe chamada Conta

A classe conta recebe dois atributos: saldo 
e senha(privado), e dois métodos deposito 
e retirada. o método deposito adiciona valor ao
 saldo (o usuário deve passar a senha, e ela deve
     ser igual à senha determinada no atributo), e
      o depósito retira valor do saldo.

Por fim, instancie um objeto chamado contaCorrente
 e teste as operações.
*/

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
