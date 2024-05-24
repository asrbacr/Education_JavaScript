/* // Задание №0 (тайминг 10 минут)
// - Скачайте Node.js с сайта https://nodejs.org/
// - Установите Node.js
// - Создайте файл с простым скриптом, например
// console.log(“Hello!”), и попробуйте запустить скрипт
console.log("Hello!"); */

// Задание №5 (тайминг 10 минут)
// Основы Node.js
// Необходимо написать HTTP сервер и запустить сервер на порту 3000, который в браузере
// по URL “/” возвращает такую страницу:
// Подсказки:
// - Обязательно импортируйте модуль http для реализации сервера: const http =
// require('http');
// - Используйте метод модуля http .createServer(): http.createServer((req, res) => {});
// - Для запуска сервера не забудьте вызвать метод .listen(): server.listen(3000);
// - Обязательно установите заголовки ответа с помощью метода res.writeHead():
// 'Content-Type': 'text/html; charset=UTF-8'
// - Отправьте HTML код с помощью метода res.end()

const http = require("http");
// const server = http.createServer((req, res) => {
//   console.log("Запрос получен");
//   res.writeHead(200, { "Content-Type": "text/html; charset=UTF-8" });
//   res.end();
// });

function serverHandler(req, res) { // request - запрос, response - ответ
  if (req.url === "/") {
    res.writeHead(200, { "Content-Type": "text/html; charset=UTF-8" });
    res.end("<h1>Главная страница</h1>"); // Передаются данные
  } else if (req.url === "/about") {
    res.writeHead(200, { "Content-Type": "text/html; charset=UTF-8" });
    res.end("<h1>Обо мне</h1>");
  } else {
    res.writeHead(404, { "Content-Type": "text/html; charset=UTF-8" });
    res.end("<h1>Страница не найдена</h1>");
  }
}
const server = http.createServer(serverHandler); // это передаётся в createServer ссылка на ф-цию
server.listen(3000);

