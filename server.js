import express, { response } from "express";

const app = express();
const arrResponse = [
  { name: "Hannah", company: "kogi" },
  { name: "Himus", company: "kogi top" },
];
app.get("/", (req, res) => {
  res.send(arrResponse);
});

app.listen(3000, () => {
  console.log("Servidor rodando na porta 3000");
});
