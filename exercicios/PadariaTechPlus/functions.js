let valueList = [];
let totalValue = 0;
function itemRegister() {
  let itemPrice = parseFloat(document.getElementById("itemPrice").value);
  if (itemPrice != 0) {
    let displayItens = document.getElementById("displayItens");
    let displaySum = document.getElementById("displaySum");
    valueList.push(itemPrice);
    
    displayItens.innerHTML = valueList.map(item=>`<li> R$ ${item}</li>`).join(``);
     let totalValue = valueList.reduce((total, quantidade) => {
      return (total = total + quantidade);
    });
    displaySum.innerHTML = "TOTAL: R$" + totalValue;
  } else {
   let money = 0;
   let totalValue = valueList.reduce((total, quantidade) => {
    return (total = total + quantidade);});
   let change = 0;
   money = parseFloat (prompt("Digite o valor total de dinehiro entregue, para que seja feito o cálculo do troco"));
   change = money - totalValue;
   alert( "seu troco é de R$ " + change);
   //substituir vírgula por ., prompt ( "Digite seu número" ).replace ( ",", ".") )
  }
}
