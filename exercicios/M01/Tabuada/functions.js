function generateTable() {
  let number = parseInt(document.getElementById("number").value);
  let item = "";
  if (number <= 10 && number >= 1) {
    let tableList = document.getElementById("tableList");
    for (var i = 1; i <= 10; i++)
      item += number + " x " + i + " = " + number * i + "<br/>";
    tableList.innerHTML = item;
  } else {
    alert("O número deve estar entre 1 e 10");
    tableList.innerHTML = "";
  }
}
