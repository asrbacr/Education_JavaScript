const http = require("http");

const server = http.createServer((req, res) => {
  console.log("Запрос получен");

  switch (req.url) {
    case "/":
      res.writeHead(200, {
        "Content-Type": "text/html; charset=UTF-8",
      });
      res.end("<h1>Добро пожаловать на мой сайт</h1>");
      break;
    case "/about":
      res.writeHead(200, {
        "Content-Type": "text/html; charset=UTF-8",
      });
      res.end("<h1>Обо мне</h1>");
      break;

    default:
      res.writeHead(404, {
        "Content-Type": "text/html; charset=UTF-8",
      });
      res.end("<h1>Страница не найдена</h1>");
      break;
  }
});

const port = 3000;

server.listen(port, () => {
  console.log(`Сервер напущен на порту: ${port}`);
});
