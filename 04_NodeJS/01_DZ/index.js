let countIndex = 1;
let countAbout = 1;
function makeCounterIndex() {
  return countIndex++;
}
function makeCounterAbout() {
  return countAbout++;
}

const http = require("http");

const server = http.createServer((req, res) => {
  switch (req.url) {
    case "/":
      countIndex = makeCounterIndex();
      //   countIndex = new CounterClass().makeCounter();
      console.log("Пользователь на Главной странице");
      res.writeHead(200, {
        "Content-Type": "text/html; charset=UTF-8",
      });
      res.end(`
        <h1>Корневая страница</h1>
        <p>Просмотров: ${countIndex}</p>
        <a href="./about">Ссылка на страницу /about</a>
        `);
      break;
    case "/about":
      countAbout = makeCounterAbout();
      console.log("Пользователь на странице about");
      res.writeHead(200, {
        "Content-Type": "text/html; charset=UTF-8",
      });
      res.end(`
        <h1>Страница about</h1>
        <p>Просмотров: ${countAbout}</p>
        <a href="./">Ссылка на страницу /</a>
        `);
      break;

    default:
      console.log("Пользователь на странице 404");
      res.writeHead(404, {
        "Content-Type": "text/html; charset=UTF-8",
      });
      res.end(`
      <h1>Страница не найдена</h1>
      <a href="./">Ссылка на страницу /</a>
      `);
      break;
  }
});

const port = 3000;

server.listen(port, () => {
  console.log(`Сервер напущен на порту: ${port}`);
});
