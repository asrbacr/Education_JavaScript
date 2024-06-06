const express = require("express");
const fs = require("fs");
const path = require("path");
const Joi = require('joi');
const app = express();
const port = 3000;
const pathFile = path.join(__dirname, "users.json");
let uniqID = 3;

const userSchema = Joi.object({
  name: Joi.string().min(2).required(),
  surname: Joi.string().min(2).required(),
  age: Joi.number().min(0).required(),
  city: Joi.string(),
})

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
  const resultValidation = userSchema.validate(req.body);
  if (resultValidation.error) {
    return res.status(400).send({error: resultValidation.error.details});
  }

  const users = JSON.parse(fs.readFileSync(pathFile));
  const user = users.find((item) => item.id === +req.params.id);
  if (user) {
    user.name = req.body.name;
    user.surname = req.body.surname;
    user.age = req.body.age;
    user.city = req.body.city;
    fs.writeFileSync(pathFile, JSON.stringify(users, null, 3));
    res.send({ user });
  } else {
    res
      .status(404)
      .send({ user: null, error: "Пользователь не найден", status: "error" });
  }

  res.send({ user });
});

app.post("/users", (req, res) => {
  const resultValidation = userSchema.validate(req.body);
  if (resultValidation.error) {
    return res.status(400).send({error: resultValidation.error.details});
  }

  const users = JSON.parse(fs.readFileSync(pathFile));
  const user = {
    id: uniqID++,
    name: req.body.name,
    surname: req.body.surname,
    age: req.body.age,
    city: req.body.city,
  };
  users.push(user);
  fs.writeFileSync(pathFile, JSON.stringify(users, null, 3));
  res.send({ user });
});

app.delete("/users/:id", (req, res) => {
  const users = JSON.parse(fs.readFileSync(pathFile));
  const userIndex = users.findIndex((item) => item.id === +req.params.id);
  if (userIndex > -1) {
    users.splice(userIndex, 1);
    fs.writeFileSync(pathFile, JSON.stringify(users, null, 3));
    res.send({ status: 'Пользователь удалён'});
  } else {
    res
      .status(404)
      .send({ user: null, error: "Пользователь не найден", status: "error" });
  }
});

app.listen(port, () => console.log(`Сервер запущен на порту ${port}`));
