class CaixaRegistradora {
  
  constructor(name, barCode, price) {
    this.name = name;
    this.barCode = barCode;
    this.price = price;
  }
  cadastrarItem() {
    let addName = prompt("Digite o nome do produto que deseja cadastrar");
    let addBarCode = prompt("Digite o código do produto que deseja cadastrar");
    let addPrice = prompt("Digite o preço do produto que deseja cadastrar");
    if (!addName || !addBarCode || !addPrice) {
      alert("todos os valores são obrigatórios. Inicie novamente o cadastro");
    } else {
      tabelaItens.push(new CaixaRegistradora(addName, addBarCode, addPrice));
      console.log(tabelaItens);
    }
  }
}
var itensCadastrados = new CaixaRegistradora("Item Padrão", "000000", 0);
let tabelaItens =[];
tabelaItens.push(new CaixaRegistradora("Pão Francês", "1", .25));
tabelaItens.push(new CaixaRegistradora("Pão de Queijo", "2", 1.25));
console.log(tabelaItens)

/*

class CashRegister {
  constructor() {}
  openRegister() {
    let costumerName = prompt("Informe o nome do cliente");
    this.readBarCode();
    //  console.log (costumerName);
  }
  readBarCode() {
    console.log("ler código de barra");
    console.log(costumerName);
    //buscar item e verificar se existe
    //chamar função para informar a quantidade do item
  }
  // itemQuantity () {
  // deverá ser inserida a quantidade do item
  //chamar method bill
  // }
}

var cashRegister = new CashRegister();
/*



Defina um método que receba codigoBarra: number; e quantidade: number; para o seu Manoel conseguir adicionar itens na caixa registradora. **Importante: A aplicação só poderá adicionar itens na caixa, se o código de barra dele existir.

vai no itens do estoque, ve o preço e adiciona nos itens conta

Defina um método que você consiga verificar o valor total da conta do cliente.
Defina um método fecharConta, no qual você passa o dinheiro e ele calcula o troco e zera a caixa registradora.

limpa a caixa egistradora
*/
