var totalConta = 0;
var troco = 0;

class CaixaRegistradora {
  estoque = [{}];

  constructor(codigoBarra, preco, nome) {
    this.estoque["codigoBarra"] = codigoBarra;
    this.estoque["preco"] = preco;
    this.estoque["nome"] = nome;
  }
  adicionarProdutos(codigoBarra, preco, nome, quantidade) {
    if (codigoBarra && preco && nome && quantidade) {
      this.estoque.push({
        codigoBarra,
        preco,
        nome,
      });
      localStorage.setItem(codigoBarra, quantidade);
    }
  }
  iniciarAtendimento(cliente) {
    this.cliente = cliente;
  }
  passarCompra(codigoBarra, quantidade) {
    this.estoque.filter((e) => {
      if (e.codigoBarra == codigoBarra) {
        totalConta += e.preco * quantidade;
        let quantidadeAtualizada =
          localStorage.getItem(e.codigoBarra) - quantidade;
        localStorage.setItem(e.codigoBarra, quantidadeAtualizada);
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
}
let run = new CaixaRegistradora(0, 0, 0, 0);
run.estoque.shift();
localStorage.clear();

//Teste Adicionar Produtos
run.adicionarProdutos(1, 0.25, "pão francês", 100);
run.adicionarProdutos(2, 1.15, "pão de queijo", 100);
run.adicionarProdutos(3, 7.15, "pão de forma", 100);
console.log("Lista de itens em estoque abaixo", run.estoque);

//Teste iniciar atendimento
run.iniciarAtendimento("Jeremias");
console.log(`o atributo cliente é ${run.cliente}`);

//Teste passar compra
console.log(
  `antes de passar os itens a conta do cliente é R$ ${totalConta} e a quantidade de itens é:
  ${run.estoque[0].nome} - ${localStorage.getItem(
    run.estoque[0].codigoBarra
  )} unidades
  ${run.estoque[1].nome} - ${localStorage.getItem(
    run.estoque[1].codigoBarra
  )} unidades
  ${run.estoque[2].nome} - ${localStorage.getItem(
    run.estoque[2].codigoBarra
  )} unidades
`
);
run.passarCompra(1, 10);
run.passarCompra(2, 5);
run.passarCompra(3, 1);

console.log(
  `após passar os itens o total da conta é ${totalConta} e a quantidade de itens é:
  ${run.estoque[0].nome} - ${localStorage.getItem(
    run.estoque[0].codigoBarra
  )} unidades
  ${run.estoque[1].nome} - ${localStorage.getItem(
    run.estoque[1].codigoBarra
  )} unidades
  ${run.estoque[2].nome} - ${localStorage.getItem(
    run.estoque[2].codigoBarra
  )} unidades
  `
);

//Testar verifiar total
console.log(`o valor total da conta é R$ ${run.verificarTotal()}`);

//Testar fechar conta
console.log(`antes de fechar a conta do ${run.cliente} é R$${totalConta}`);
let dinheiro = 20;
run.fecharConta(dinheiro);
console.log(
  `após executar o fechar a conta, foi recebido um valor de R$ ${dinheiro}, o troco calculado foi de R$${troco} e os valores atualizados de cliente e total da conta são Valor (${run.cliente}) e R$ valor(${totalConta})`
);

//Testar o LocalStorage - add produto para ajustar estoque

console.log(localStorage.getItem(1))