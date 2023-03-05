var totalConta = 0;
var troco = 0;
let total;

class CaixaRegistradora {
  estoque = [{}];

  constructor(codigoBarra, preco, nome) {
    this.estoque["codigoBarra"] = codigoBarra;
    this.estoque["preco"] = preco;
    this.estoque["nome"] = nome;
  }
  adicionarProdutos(codigoBarra, preco, nome) {
    if (codigoBarra && preco && nome) {
      this.estoque.push({
        codigoBarra,
        preco,
        nome,
        });
    }
  }
  iniciarAtendimento(cliente) {
    this.cliente = cliente;
  }
  passarCompra(codigoBarra, quantidade) {
    this.estoque.filter((e) => {
      if (e.codigoBarra == codigoBarra) {
        totalConta += e.preco * quantidade;
        }
    });
    return totalConta;
  }
  verificarTotal() {
    return totalConta;
  }
  fecharConta(dinheiro) {
    troco = dinheiro - totalConta;
    totalConta = 0;
    this.cliente = "";
    console.log("seu troco éR$" + troco);
  }
  removeProduct(codigoBarra, quantidade) {
    this.estoque.find((e) => {
      if (e.codigoBarra === codigoBarra && e.quantidade >= quantidade) {
        e.quantidade -= quantidade;
        localStorage.setItem("estoque", this.estoque);
      }
    });
  }
}

let run = new CaixaRegistradora(0, 0, 0, 0);
run.estoque.shift();

//Teste Adicionar Produtos
run.adicionarProdutos(1, 0.25, "pão francês");
run.adicionarProdutos(2, 1.15, "pão de queijo");
run.adicionarProdutos(3, 7.15, "pão de forma");
console.log("Lista de itens em estoque abaixo", run.estoque);

//Teste iniciar atendimento
run.iniciarAtendimento("Jeremias");
console.log(`o atributo cliente é ${run.cliente}`);

//Teste passar compra
console.log(
  `antes de passar o produto a conta do cliente é R$ ${totalConta}`
);
run.passarCompra(1, 10);
console.log(
  `após passar 10 pães franceses o total da conta é R$ ${totalConta}`
);

//Testar verifiar total
console.log(`o valor total da conta é R$ ${run.verificarTotal()}`);

//Testar fechar conta
console.log(`antes de fechar a conta do ${run.cliente} é R$${totalConta}`);
let dinheiro = 20;
run.fecharConta(dinheiro);
console.log(`após executar o fehcar a conta, foi recebido um valor de R$ ${dinheiro}, o troco calculado foi de R$${troco} e os valores atualizados de cliente e total da conta são Valor (${run.cliente}) e R$ valor(${totalConta})`);