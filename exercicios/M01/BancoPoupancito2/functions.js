/*
Agora o banco quer criar uma nova classe chamada ContaPoupança. A conta poupança tem todos os métodos e atributos da classe Conta (herança). Porém, essa nova classe deve ter um novo método chamado atualizaJuros. Esse método deve pegar o valor do saldo e adicionar um ganho baseado em um índice de índice de 0.7% todas as vezes que for chamado.
*/

var senhaAutorizada = 123;

class Conta {
  constructor(saldo, senha) {
    this.saldo = saldo;
    this.senha = senha;
  }
  depositar() {
    let password = prompt("Digite a senha");
    if (password == senhaAutorizada) {
      let valorDepositado = prompt("Qual Valor deseja depositar?");
      let novoSaldo = parseFloat(valorDepositado) + conta.saldo;
      this.saldo = novoSaldo;
      alert(`Seu saldo em conta é de R$${conta.saldo}`);
    } else {
      alert("Senha incorreta");
    }
  }
  retirar() {
    let password = prompt("Digite a senha");
    if (password == senhaAutorizada) {
      let valorRetirada = prompt("Qual Valor deseja retirar?");
      let novoSaldo = conta.saldo - parseFloat(valorRetirada);
      this.saldo = novoSaldo;
      alert(`Seu saldo em conta é de R$${conta.saldo}`);
    } else {
      alert("Senha incorreta");
    }
  }
  exibirSaldo() {
    let password = prompt("Digite a senha");
    if (password == senhaAutorizada) {
      alert(`Seu saldo em conta é de R$${conta.saldo}`);
    } else {
      alert("Senha incorreta");
    }
  }
}

var conta = new Conta(0, 0);

class ContaCorrente extends Conta {
constructor(saldo,senha,juros){
    super(saldo, senha);
    this.juros = juros;
}
atualizarJuros(){
    let novoSaldo = contaCorrente.saldo * (1+this.juros);
    this.saldo = novoSaldo;
    alert(`Seu saldo em conta é de R$${contaCorrente.saldo}`);
}
}

var contaCorrente = new ContaCorrente(0,0,0.007);
