const express = require("express");
const app = express();
app.use(express.json());

app.get('/', (request, response) => {
  response.send("servidor está funcionando");
});

app.listen(3333, () => {
  console.log("servidor está funcionando!");
});
