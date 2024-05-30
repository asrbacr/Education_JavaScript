const express = require("express");
const app = express();

/* app.get("/", function (req, res) {
  res.send(
    `
  <h1>main page</h1>);
  <a href="/about">Перейти на станицу about</a>
  
  `
  );
});
app.get("/about", function (req, res) {
  res.send(`
  <h1>about page</h1>);
  <a href="/">Перейти на главную страницу</a>
`);
}); */


app.use(express.static('pages'))


app.listen(3000);
