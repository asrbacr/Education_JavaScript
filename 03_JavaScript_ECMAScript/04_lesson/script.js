/* console.log("Start algorithm!");

// Синхронные команды выполнения
setTimeout(function timeout() {
  console.log("This will be printed after 5 seconds!");
}, 5000);

console.log("End synchronous code."); */

/* const xhr = new XMLHttpRequest();

// Открываем запрос. Первый аргумент это метод (GET, POST ...), второй адрес, куда нужно отправить запрос. У данного метода есть ещё аргументы, рассмотрим позже.
// xhr.open("GET", "https://api.github.com/users/octocat");
// xhr.open("GET", "https://catfact.ninja/fact");

// Отправляем запрос на сервер. Метод send() может принимать один аргумент - это тело запроса, если оно есть. Для методов POST мы бы передавали тут тело запроса, наш запрос GET не имеет тела запроса.
xhr.send();

// После отправки запроса нам нужно использовать методы слушатели, которые будут асинхронно выполнены при наступлении соответствующего события. Это методы onload, onerror и onprogress - мы сами определяем из функции.

// onload - будет вызван, когда сервер вернёт ответ. Это может быть положительный ответ сервера с кодом 200 (всё хорошо), так и ошибка, например страница не найдена, тогда код будет 404. Мы должны обрабатывать такие ситуации сами.
xhr.onload = function () {
  if (xhr.status != 200) {
    console.log(`Error ${xhr.status}: ${xhr.statusText}`);
  } else {
    console.log(`user: ${xhr.response}`); // response - это ответ сервера
  }
};

// onprogress - функция будет вызываться пока запрос находится в процессе, и позволяет отслеживать ход процесса отправки запроса и получения ответ от сервера. Бывает полезна при отладке сложных запросов.
xhr.onprogress = function (event) {
  console.log(`Get from server: ${event.loaded} bytes`);
};

// onerror - функция будет вызываться если в запросе пошло что-то не так. Например нет соединения с сервером или ошибка в адресе запроса.
xhr.onerror = function () {
  console.log("Request error!");
};

// Создан объект xhr и был выполнен запрос, но дальше он нам не нужен. Его нужно прервать.
// xhr.abort(); */

/* // XHR POST запрос
// Создадим объект FormData.
const formData = new FormData();

// Добавим в него два наших поля.
formData.append("name", "Slava");
formData.append("surname", "Belkin");

// Для создания запроса сначала нужно создать объект XMLHttpRequest, конструктор вызывается без аргументов.
const xhr = new XMLHttpRequest();

// Открываем запрос. -//-. В данном случае создаём POST запрос на тестовый сервер https://httpbin.org/post
xhr.open("POST", "https://httpbin.org/post");

// Отправляем запрос на сервер. Метод send() может принимать один аргумент - это тело запроса, если оно есть. Отправляем POST запрос, поэтому передаем в качестве аргумента объект FormData.
xhr.send(formData);

// После отправки запроса нам нужно использовать методы слушатели, которые будут асинхронно выполнены при наступлении соответствующего события. Это методы onload, onerror и onprogress - мы сами определяем из функции.
// onload - будет вызван, когда сервер вернёт ответ. Это может быть положительный ответ сервера с кодом 200 (всё хорошо), так и ошибка, например страница не найдена, тогда код будет 404. Мы должны обрабатывать такие ситуации сами.
xhr.onload = function (e) {
  if (xhr.status != 200) {
    console.log(`Error ${xhr.status}: ${xhr.statusText}`);
  } else {
    console.log(`ip: ${JSON.parse(xhr.response).origin}`); // httpbin.org
    console.log(`user: ${xhr.response}`); // response - это ответ сервера
  }
};

// onprogress - функция будет вызываться пока запрос находится в процессе, и позволяет отслеживать ход процесса отправки запроса и получения ответ от сервера. Бывает полезна при отладке сложных запросов.
xhr.onprogress = function (event) {
  console.log(`Get from server: ${event.loaded} bytes`);
};

// onerror - функция будет вызываться если в запросе пошло что-то не так. Например нет соединения с сервером или ошибка в адресе запроса.
xhr.onerror = function () {
  console.log("Request error!");
}; */

// JSON.stringify
// Объект -> JSON
const student = {
    name: "Slava",
    surname: "Belkin",
    age: 20,
    practice: {
        place: "IKTG",
        hours: 47,
    }
};
console.log(JSON.stringify(student, null, 4));
// Вывод в консоль. Все ключи стали обёрнуты в ковычки.
`{
    "name": "Slava",
    "surname": "Belkin",
    "age": 20,
    "practice": {
        "place": "IKTG",
        "hours": 47
    }
}`;