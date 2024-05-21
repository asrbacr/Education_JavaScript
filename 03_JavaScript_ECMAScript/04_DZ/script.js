// ""Получение данных о пользователе""

// Реализуйте функцию getUserData, которая принимает идентификатор пользователя (ID) в качестве аргумента
// и использует fetch для получения данных о пользователе с заданным ID с удаленного сервера.
// Функция должна возвращать промис, который разрешается с данными о пользователе в виде объекта.
// Если пользователь с указанным ID не найден, промис должен быть отклонен с соответствующим сообщением об ошибке.

// Подсказка, с последовательностью действий:
// getUserData использует fetch для получения данных о пользователе с удаленного сервера.
// Если запрос успешен (с кодом 200), функция извлекает данные из ответа с помощью response.json()
// и возвращает объект с данными о пользователе.
// Если запрос неуспешен, функция отклоняет промис с сообщением об ошибке.

url = "https://jsonplaceholder.typicode.com/users";

function getUserData(id) {
  return fetch(`${url}/${id}`).then((response) => {
    if (response.status != 200) {
      return new Error("Пользователь не найден");
    } else {
      return response.json();
    }
  });
}

async function getUserDataAutoCod(id) {
  const response = await fetch(`${url}/${id}`);
  if (response.status != 200) {
    return new Error("Пользователь не найден");
  } else {
    return response.json();
  }
}

console.log(getUserData(5));
console.log("------------------------");
// ""Отправка данных на сервер""

// Реализуйте функцию saveUserData, которая принимает объект с данными о пользователе в качестве аргумента
// и использует fetch для отправки этих данных на удаленный сервер для сохранения.
// Функция должна возвращать промис, который разрешается, если данные успешно отправлены,
// или отклоняется в случае ошибки.

// *Подсказка *

async function saveUserData(user) {
  let response = await fetch("https://jsonplaceholder.typicode.com/users", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(user),
  });
  if (!response.ok) {
    console.log(response.status);
    throw new Error("Что-то пошло не так: " + response.status);
  } else {
    // console.log(response.status);
  }
}

// Пример использования функции
const user = {
  name: "John Smith",
  age: 30,
  email: "john@example.com",
};

saveUserData(user)
  .then(() => {
    // console.log("User data saved successfully");
  })
  .catch((error) => {
    console.log(error.message);
  });

// saveUserData использует fetch для отправки данных о пользователе на удаленный сервер для сохранения.
// Она отправляет POST-запрос на URL-адрес /users с указанием типа содержимого application/json и
// сериализует объект с данными о пользователе в JSON-строку с помощью JSON.stringify().
// Если запрос успешен (с кодом 200), функция разрешает промис.
// Если запрос неуспешен, функция отклоняет промис с сообщением об ошибке.

console.log("------------------------");
// ""Изменение стиля элемента через заданное время""

// Напишите функцию changeStyleDelayed, которая принимает идентификатор элемента и время задержки
// (в миллисекундах) в качестве аргументов. Функция должна изменить стиль элемента через указанное время.
const btnEl = document.querySelector(".btn");
btnEl.addEventListener("click", () => {
  changeStyleDelayed("my-element", 1000);
});
function changeStyleDelayed(nameClass, time) {
  const divEl = document.querySelector(`.${nameClass}`);
  setTimeout(() => {
    divEl.classList.toggle("colorBlue");
  }, time);
}

// Пример использования функции
// changeStyleDelayed("myElement", 2000); // Через 2 секунды изменяет стиль элемента с id 'myElement'"

console.log("------------------------");
// Дополнительное задание
// Задача 1:
// Необходимо получить список всех пользователей с помощью бесплатного API
// (https://jsonplaceholder.typicode.com/users) и отобразить их на странице.
// Пользователь должен иметь возможность удалить любого пользователя из списка.


async function getData(url) {
  try {
    // ожидание результат работы ф-ции
    const res = await fetch(url);
    const data = await res.json();
    return data;
  } catch (error) {
    console.log(error);
  }
}

const fetchData = await getData('https://jsonplaceholder.typicode.com/users');
console.log(fetchData);

const listUser = document.querySelector('div.users');
fetchData.forEach((el) => {
  listUser.insertAdjacentHTML("beforeend",
  `
  <div class="user-card">
    <p class="username">username: <span class="username__span">${el.username}</span></p>
    <p class="name title">Имя: <span class="name__span value">Chelsey Dietrich</span></p>
    <p class="title">Адрес: <span class="value">33263, Roscoeview, Skiles Walks, Suite 351</span></p>
    <p class="title">тел.: <span class="value">(254)954-1289</span></p>
  </div>
  `)
});


console.log("------------------------");
// Задача 2:
// Необходимо реализовать отрисовку 10 картинок собак из
// API https://dog.ceo/dog-api/ с интервалом в 3 секунды.
