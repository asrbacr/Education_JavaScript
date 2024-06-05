const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.send("<h1>Hello world!</h1>");
});

app.use(express.json());
app.post("/", (req, res) => {
  console.log(req.body);
  res.send("<h1>Hello world!</h1>");
});

app.put("/", (req, res) => {
  console.log(req.body);
  res.send("<h1>This is a put request!</h1>");
});

app.delete("/", (req, res) => {
  console.log(req.body); // тело передавать не принято
  res.send("<h1>This is a delete request!</h1>");
});

app.listen(3000);
