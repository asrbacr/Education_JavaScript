/* // Задание 1.
// 1. Необходимо выводить на страницу текущую ширину 
// и высоту окна браузера, при изменении значений, вывод
// также должен меняться.
const widthBom = window.innerWidth;
const heightBom = window.innerHeight;
const resultEl = document.querySelector('.width-height');
resultEl.innerHTML = `
Высота: ${widthBom}
Ширина: ${heightBom}
`;

window.addEventListener('resize', () => {
    const resultEl = document.querySelector('.width-height');
    resultEl.innerHTML = `
    Высота: ${window.innerHeight}
    Ширина: ${window.innerWidth}
    `;
});

console.log(document.documentElement.clientWidth); // за минусом скролла
console.log(document.documentElement.clientHeight); */

/* // 2. При закрытии страницы (вкладки), необходимо выводить 
// всплывающее окно или диалоговое окно браузера и 
// спросить, уверен ли пользователь, что хочет покинуть 
// страницу?


// 3. Используйте объект history для управления историей
// переходов на веб-странице. Создайте кнопки "Назад" и
// "Вперед" для перемещения по истории. */

/* // Задание 2
// Даны html и css:
// <style>
//   .box {
//     width: 100px;
//     height: 100px;
//     background-color: lightblue;
//     margin: 10px;
//     display: inline-block;
//   }
// </style>

// <button id="addButton">Добавить элемент</button>
// <button id="removeButton">Удалить элемент</button>
// <button id="cloneButton">Клонировать элемент</button>
// <div id="container">
//   <div class="box">1</div>
//   <div class="box">2</div>
//   <div class="box">3</div>
// </div>

// Необходимо создать страницу, в которой будут работать
// все три кнопки.
// - При нажатии на кнопку "Добавить элемент" на страницу
// добавляется новый квадратный элемент (<div>) с размерами
// 100x100 пикселей. Этот элемент должен иметь класс .box
// и содержать текст, указывающий порядковый номер элемента
// (1, 2, 3 и так далее).
const addButtonEl = document.querySelector("#addButton");

const containerEl = document.querySelector("#container");

addButtonEl.addEventListener("click", function (e) {
  const boxsLength = containerEl.querySelectorAll(".box").length;

  containerEl.insertAdjacentHTML(
    "beforeend",
    `<div class="box">${boxsLength + 1}</div>`
  );
});

// - При нажатии на кнопку "Удалить элемент" удаляется
// последний добавленный элемент, если таковой имеется.
const removeButtonEl = document.querySelector("#removeButton");
removeButtonEl.addEventListener("click", function (e) {
  containerEl.lastElementChild?.remove();
});

// - При нажатии на кнопку "Клонировать элемент" создается
// копия последнего добавленного элемента и добавляется на
// страницу. Если последнего добавленного элемента нет на
// странице, необходимо вывести сообщение в alert, с надписью
// о невозможности клонирования, так как клонировать нечего.
const cloneButtonEl = document.querySelector("#cloneButton");
cloneButtonEl.addEventListener("click", function (e) {
  const cloneEl = containerEl.lastElementChild?.cloneNode(true);
  if (cloneEl) {
    containerEl.append(cloneEl);
  } else {
    alert('!!!');
  }
}); */

// Задание 3.
// Необходимо создать страницу со списком статей.
// Каждая статья состоит из id, заголовка, текста статьи.
// id - будем брать из unix timestamp.
// Необходимо подготовить список статей в JSON-формате,
// которые будут выводиться на странице при первом ее
// открытии.
// Необходимо реализовать возможность удаления статьи.
// Необходимо реализовать возможность добавления статьи.
// Необходимо реализовать возможность изменения статьи,
// ввод данных можно реализовать через prompt.
// Статьи должны сохраняться в локальное хранилище
// браузера, и должны быть доступны после перезагрузки
// страницы.

const bdJson = `[
  {
    "id": "1718993497005",
    "title": "Заголовок 1",
    "text": "Текст 1"
  },
  {
    "id": 1718993497008,
    "title": "Заголовок 2",
    "text": "Текст 2"
  }
]`;

const key = "articles";

const containerArticleEl = document.querySelector(".containerArticle");

if (!localStorage.getItem(key)) {
  localStorage.setItem(key, bdJson);
}
const articles = JSON.parse(localStorage.getItem(key));

// Вариант 1
// articles.forEach((elem) => {
//   containerArticleEl.insertAdjacentHTML("beforeend", createArticleHTML(elem));
// });

// Вариант 2
containerArticleEl.innerHTML = articles
  .map((elem) => createArticleHTML(elem))
  .join("");

containerArticleEl.addEventListener("click", function (e) {
  if (!e.target.classList.contains("removeArticle")) {
    return;
  }
  const articleEl = e.target.closest(".article");
  removeArticle(+articleEl.getAttribute("date-id"));

  articleEl.remove();
});

function removeArticle(articleId) {
  const articles = JSON.parse(localStorage.getItem(key));
  const articleIndex = articles.findIndex(
    (article) => article.id === articleId
  );
  articles.splice(articleIndex, 1);

  localStorage.setItem(key, JSON.stringify(articles));
}

const addNewArticleEl = document.querySelector(".addNewArticle");
addNewArticleEl.addEventListener("click", () => {
  const article = {
    id: Date.now(),
    title: prompt("Введите заголовок"),
    text: prompt("Введите текст"),
  };
  articles.push(article);
  localStorage.setItem(key, JSON.stringify(articles));

  containerArticleEl.insertAdjacentHTML(
    "beforeend",
    createArticleHTML(article)
  );
});

// const updateArticleEl = document.querySelector(".updateArticle");
containerArticleEl.addEventListener("click", (e) => {
  if (!e.target.classList.contains("updateArticle")) {
    return;
  }
  const articleEl = e.target.closest(".article");
  const article = articles.find(
    (article) => article.id === +articleEl.getAttribute("date-id")
  );

  article.title = prompt("Введите заголовок");
  article.text = prompt("Введите текст");

  articleEl.querySelector(".title").innerHTML = article.title;
  articleEl.querySelector(".text").innerHTML = article.text;
  localStorage.setItem(key, JSON.stringify(articles));
});

function createArticleHTML(article) {
  return `
        <div class="article" date-id="${article.id}">
            <div class="title">${article.title}</d>
            <div class="text">${article.text}</div>
            <button class="removeArticle">Удалить</button>
            <button class="updateArticle">Редактировать</button>
        </div>`;
}
