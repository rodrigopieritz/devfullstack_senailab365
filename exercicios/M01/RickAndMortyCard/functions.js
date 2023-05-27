/*elementoImagens.innerHTML = "<img src=" + dados?.avatar_url + ".jpg>";

Utilize a API abaixo para buscar um json e criar um cartão com as informações de um usuário do Ricky and Morty.
Onde você vê o número um, pode mudar para qualquer número até 800 que vai buscar um personagem diferente.
https://rickandmortyapi.com/api/character/1 

*/


// Event Listeners
/*
let cardNumber = document.querySelector("cardNumber");
let handleChangeCardNumber = (event) => {
  cardNumber = event.target.value;
};
cardNumber.addEventListener("change", handleChangeCardNumber);
*/
var character = 1

async function loadAPI() {
  const response = await fetch (`https://rickandmortyapi.com/api/character/${character}`)
  const data = await response.json()
  console.log (data)
  // contador de episodeos
  // converter data de criação em data
  document.getElementById('cardNumber').innerHTML = `<h4> Card Number: ${character}</h4>`;
  document.getElementById('image').innerHTML = `<img id="profileImg" src="${data.image}">`;
  document.getElementById('name').innerHTML = `<h1>${data?.name}</h1>`;
  document.getElementById('species').innerHTML = `<h4> Species: ${data?.species}</h4>`;
  document.getElementById('origen').innerHTML = `<h4> Origen: ${data?.origin.name}</h4>`;
  document.getElementById('gender').innerHTML = `<h4> Gender: ${data?.gender}</h4>`;
  document.getElementById('status').innerHTML = `<h4> Status: ${data?.status}</h4>`;

}
loadAPI()

function change () {
  character = prompt ("Escolha um novo Card Number")
  console.log(character)
  loadAPI()
}