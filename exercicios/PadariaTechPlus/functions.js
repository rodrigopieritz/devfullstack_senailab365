let valueList = [];
function itemRegister() {
  let itemPrice = parseFloat(document.getElementById("itemPrice").value);
  if (itemPrice != 0) {
    let displayItens = document.getElementById("displayItens");
    let displaySum = document.getElementById("displaySum");
    valueList.push(itemPrice);
    displayItens.innerHTML = valueList.forEach((mercadoria)=>{mercadoria});
    let totalValue = valueList.reduce((total, quantidade) => {
      return (total = total + quantidade);
    });
    displaySum.innerHTML = "TOTAL: R$" + totalValue;
  } else {
    alert(
      "Digite o total de dinheiro entregue para que o troco seja calculado"
    );
  }
}
