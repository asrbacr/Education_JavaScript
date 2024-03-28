/* // Задание 1
// 1. Получите ссылку на первый абзац из дива с id, равным block, выведите его в консоль
//  2. Получите ссылку на первый абзац с классом www. и вывести его в консоль

const divEl = document.querySelector("div#block");
console.log(divEl);
console.log(document.querySelectorAll("div#block p.www")[0].innerHTML);
console.log(divEl.querySelectorAll("p.www")[1].textContent); */

/* // Задание 2
// 1. Дан тег <a class="link" href="#">link text html</a>
// Вам необходимо поменять текст внутри ссылки на “link text js”
// Заменить href, на значение https://developer.mozilla.org/ru/ 

const aEl = document.querySelector("a.link");
aEl.innerHTML = "link text js";
aEl.href = "https://developer.mozilla.org/ru/";

// 2. Дан тег <img class="photo" src="" alt=""> 
// Вам необходимо с помощью js поменять значение src на любое изображение из интернета
const imgEl = document.querySelector("img.photo");
imgEl.src =
  "https://sun9-43.userapi.com/impg/c856120/v856120054/24e732/GS5clv1Ff6A.jpg?size=807x504&quality=96&sign=92416309059be7801091318e2412ef53&c_uniq_tag=KIjWlhwuYeA06AEd0Ux21VlhIL3FScQVJbbXKjxk_6g&type=album";
  */

/* // Задание 3 
// 1. Дан тег <div class="content"></div>
const divEl = document.querySelector("div.content");

// 2. Создайте новый элемент p
const pEl = document.createElement("p");

// 3. Добавьте в него текст “Новый текстовый элемент”
pEl.innerHTML = "Новый текстовый элемент";

// 4. Добавьте созданный элемент внутри <div class="content"></div>
divEl.appendChild(pEl);

// 5. Удалите добавленный узел
pEl.remove(); */

/* // Задание 4
// 1. Создать элемент button, добавить в блок <div class="content"></div>
const divEl = document.querySelector("div.content");
const btnEl = document.createElement("button");
btnEl.innerHTML = "Кнопка";
divEl.appendChild(btnEl);

// 2. При клике на который в консоль выводится сколько раз
// пользователь нажал на данную кнопку
let count = 0;
btnEl.onclick = function (e) {
    count++;
    console.log(count);
} */

// Задание 4
// 1. Дан тег <div class="content"></div>
const divEl = document.querySelector("div.content");

// 2. Создайте с помощью javascript новый элемент button
const btnEl = document.createElement("button");
divEl.appendChild(btnEl);

// 3. Добавьте текст для кнопки “Отправить”
btnEl.innerHTML = "Отправить";

// 4. При клике на данную кнопку необходимо чтобы текст поменялся на
// “Текст отправлен”
btnEl.onclick = function (e) {
  console.log(e);
  e.target.innerHTML = "Текст отправлен"; // target - это присвоить
};

// classList - добавить класс к кнопке
btnEl.classList.add("btn");

// так писать плохо, потому что стиль заносится сразу в HTML
// btnEl.style.color = "blue";
