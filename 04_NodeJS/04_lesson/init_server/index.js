const express = require("express");

const app = express();

let uniqueID = 0;
const articles = []; // импровизированная БД

app.use(express.json());

app.get("/articles", (req, res) => {
  res.send({ articles });
});

app.get("/articles/:id", (req, res) => {
  const article = articles.find(
    (article) => article.id === Number(req.params.id)
  );

  if (article) {
    res.send({ articles });
  } else {
    res.status(404);
    res.send({ article: null });
  }
});

app.post("/articles", (req, res) => {
  uniqueID += 1;

  articles.push({
    id: uniqueID,
    ...req.body,
  });

  res.send({
    id: uniqueID,
  });
});

app.listen(3000);
