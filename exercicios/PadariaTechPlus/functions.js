let valueList = [];
function itemRegister() {
  let itemPrice = parseFloat(document.getElementById("itemPrice").value);
  if (itemPrice != 0) {
    let display = document.getElementById("display");
    valueList.push(itemPrice);
    display.innerHTML = valueList;
    let totalValue = 0;
    for (var i = 0; i < valueList.length; i++) {
        totalValue += numbers[i];
        console.log(totalValue)
    //melhorar display com informação * usar for each
  }} else {
    
    alert("Compra Finalizada. O Total da Compra é R$" + totalValue);
     }
   }
console.log(valueList);
