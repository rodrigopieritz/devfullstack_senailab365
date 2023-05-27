const birthDay = "2023-02-19";
let today = parseFloat(Date.now());
const diffInDays =
  (parseFloat(Date.parse(birthDay)) - today) / (1000 * 60 * 60 * 24);

if (diffInDays < 0 && diffInDays > -1) {
  console.log("Feliz aniversário!");
} else if (diffInDays < -1) {
  console.log("Seu aniversário já passou. Agora só em 2024!");
} else {
  console.log(
    "Faltam " + Math.ceil(diffInDays) + " dias para o seu aniversário"
  );
}

setInterval(() => {
  if (diffInDays < 0 && diffInDays > -1) {
    console.log("Feliz aniversário!");
  } else if (diffInDays < -1) {
    console.log("Seu aniversário já passou. Agora só em 2024!");
  } else {
    console.log(
      "Faltam " + Math.ceil(diffInDays) + " dias para o seu aniversário"
    );
  }
}, 1000 * 5);
