let number = document.getElementById("number");
let message = document.getElementById("message");

const handleChangeNumber = (event) => {
  number = event.target.value;
};
const handleChangeMessage = (event) => {
  message = event.target.value;
};

number.addEventListener("change", handleChangeNumber);
message.addEventListener("change", handleChangeMessage);

function generate() {
let link = document.getElementById("link");
let messageb = message.replaceAll(" ","%20");
link.innerHTML = 'api.whatsapp.com/send?phone='+ number + '&text=' + messageb;
}
