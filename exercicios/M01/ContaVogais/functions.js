let string = "string";

function contaVogal(string) {
  if (typeof string != "string") {
    console.log("Erro: Isso não é uma string!");
  } else {
    let upperCase = string.toUpperCase();
    let upperString = upperCase.split("");
    let contaVogal = 0;
    for (let i = 0; i < upperCase.length; i++) {
      switch (upperString[i]) {
        case "A":
          contaVogal = contaVogal + 1;
          break;
        case "E":
          contaVogal = contaVogal + 1;
          break;
        case "I":
          contaVogal = contaVogal + 1;
          break;
        case "O":
          contaVogal = contaVogal + 1;
          break;
        case "U":
          contaVogal = contaVogal + 1;
          break;
      }
    }
    console.log(contaVogal);
  }
}

let newString = "Janeiro, Fevereiro, Março, Abril, Maio, Junho, Julho, Agosto, Setembro, Outubro, Novembro, Dezembro"
contaVogal(newString);