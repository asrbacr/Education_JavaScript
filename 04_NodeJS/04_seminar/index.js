const express = require("express");
const fs = require("fs");
const path = require("path");
const app = express();
const port = 3000;
const pathFile = path.join(__dirname, "users.json");

app.use(express.json());

app.get("/users", (req, res) => {
  //   const users = fs.readFileSync(pathFile);
  const users = JSON.parse(fs.readFileSync(pathFile));
  res.send({ users });
});

// request.params (через /:[параметр]), request.query (строка парсится автоматически)
app.get("/users/:id", (req, res) => {
  const users = JSON.parse(fs.readFileSync(pathFile));
  const user = users.find((item) => item.id === +req.params.id);
  if (user) {
    res.send({ user });
  } else {
    res
      .status(404)
      .send({ user: null, error: "Пользователь не найден", status: "error" });
  }

  res.send({ user });
});

app.put("/users/:id", (req, res) => {
  const users = JSON.parse(fs.readFileSync(pathFile));
  const user = users.find((item) => item.id === +req.params.id);
  if (user) {
    user.name = req.body.name;
    user.surname = req.body.surname;
    user.age = req.body.age;
    user.city = req.body.city;
    fs.writeFileSync(pathFile, JSON.stringify(users));
    res.send({ user });
  } else {
    res
      .status(404)
      .send({ user: null, error: "Пользователь не найден", status: "error" });
  }

  res.send({ user });
});

// app.post("/", (req, res) => res.send("Hello world!"));
// app.put("/", (req, res) => res.send("Hello world!"));
// app.delete("/", (req, res) => res.send("Hello world!"));

app.listen(port, () => console.log(`Сервер запущен на порту ${port}`));
