function generateTable () {
    var breadPrice = parseFloat(document.getElementById("breadPrice").value);
    var tablePrice = document.getElementById('tablePrice');
    var item = '';
    
    for (var i=1; i<= 50; i++)
    item += i+" unid. = R$" + breadPrice * i+"<br/>";
    
    //precisa arredondar para 2 casas decimais depois da vírgula
    //inserir alert quando valor inválido (negativo ou 0)
    tablePrice.innerHTML = item;
    
    }