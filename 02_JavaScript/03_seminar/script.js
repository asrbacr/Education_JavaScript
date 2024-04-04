/* // Задание 1 (тайминг 15 минут)
// 1. В html создать кнопку button
// 2. После загрузки страницы вывести в консоль текст
// “страница загрузилась”
window.addEventListener('load', function(e) {
    console.log("страница загрузилась");
})
    

// 3. Добавить событие onclick которое выводит в консоль
// текст “событие onclick”
const btnEl = document.querySelector('button.btn');
btnEl.addEventListener('click', function (e) {
    console.log("событие onclick");
});

// 4. Добавить событие addEventListener которое выводит в
// консоль текст “событие addEventListener”
btnEl.addEventListener('click', function (e) {
    console.log("событие addEventListener");
}); */

/* // Задание 2 (тайминг 30 минут)
// 1. Создать в html три кнопки button с нумерацией (1, 2, 3
// соответственно)
const contEl = document.querySelector("div.contaner");
const btn1 = document.createElement("button");
const btn2 = document.createElement("button");
const btn3 = document.createElement("button");
btn1.innerHTML = "Кнопка 1";
btn2.innerHTML = "Кнопка 2";
btn3.innerHTML = "Кнопка 3";
contEl.appendChild(btn1);
contEl.appendChild(btn2);
contEl.appendChild(btn3);

// 2. Добавить клик на кнопку , чтобы в консоль выводилась именно та
// кнопка на которую мы нажали
const clickFunc = function (e) {
    console.log(e.target.innerHTML);
};

btn1.addEventListener('click', clickFunc);
btn2.addEventListener('click', clickFunc);
btn3.addEventListener('click', clickFunc);

// 3. Добавить кнопку button с текстом 4, которая считает сколько раз на
// нее нажали и количество нажатий на эту кнопку выводит в консоль
const btn4 = document.createElement('button');
btn4.innerHTML = "Кнопка 4";
contEl.appendChild(btn4);
let count = 0;
btn4.addEventListener('click', function (e) {
    count++;
    console.log(count);
})

// 4. Создать кнопку button с текстом 5, При клике на которую, меняется
// текст данной кнопки на “Вы нажали на эту кнопку”
const btn5 = document.createElement('button');
btn5.innerHTML = "Кнопка 5";
contEl.appendChild(btn5);
btn5.addEventListener('click', function (e) {
    e.target.innerHTML = "Вы нажали на эту кнопку";
}); */

/* // Задание 3 (тайминг 30 минут)
// 1. Создать кнопку, которая добавляем заголовок h1 с текстом, “Новый
// заголовок, данный элемент нужно расположить после кнопки
const contEl = document.querySelector("div.contaner");
const btn1 = document.createElement("button");
btn1.innerHTML = "Добавить заголовок";
contEl.appendChild(btn1);
btn1.addEventListener("click", function (e) {
  const h1El = document.createElement("h1");
  h1El.innerHTML = "Новый заголовок";
  contEl.appendChild(h1El);
});

// 2. Создать вторую кнопку, которая будет удалять созданный заголовок h1
const btn2 = document.createElement("button");
btn2.innerHTML = "Удалить заголовки";
contEl.appendChild(btn2);
btn2.addEventListener("click", function (e) {
  const h1Array = contEl.querySelectorAll("h1");
  h1Array.forEach((el) => {
    el.remove();
  });
});

// 3. Создать третью кнопку, при наведении на которую в консоль будет
// выводиться текст “вы навели на данную кнопку” , как только вы
// убираем курсор мыши с кнопки, в консоли должен появиться текст
// “Наведения на кнопку больше нет”
const btn3 = document.createElement("button");
btn3.innerHTML = "Фокус наведения, подробнее в консоль";
contEl.appendChild(btn3);

btn3.addEventListener("mouseover", function (e) {
  console.log("вы навели на данную кнопку");
});

btn3.addEventListener("mouseout", function (e) {
  console.log("Наведения на кнопку больше нет");
}); */

/* // Задание 4 (тайминг 30 минут)
// 1. Создать в html список состоящий из 3-х произвольных элементов li
const contEl = document.querySelector("div.contaner");

// 2. Нужно создать кнопку которая будет добавлять элементы списка с
// текстом “новый элемент списка”
const btn1 = document.createElement("button");
btn1.innerHTML = "Добавить элемент";
contEl.appendChild(btn1);

const ulEl = document.querySelector("ul");
btn1.addEventListener("click", function (e) {
  const liEl = document.createElement("li");
  liEl.innerHTML = "новый элемент списка " + Math.random() * 10;
  ulEl.appendChild(liEl);
});

// 3. Создать кнопку, которая будет удалять первый элемент из
// созданного списка
const btn2 = document.createElement("button");
btn2.innerHTML = "Удалить элемент";
contEl.appendChild(btn2);

btn2.addEventListener("click", function (e) {
  const liArray = ulEl.querySelectorAll("li");
  if (liArray.length > 0) {
    liArray[0].remove();
  }
});

// 4. Создать кнопку, при клике на которую ей добавляется класс “click”
const btn3 = document.createElement("button");
btn3.innerHTML = "Добавить класс";
contEl.appendChild(btn3);

btn3.addEventListener('click', function (e) {
    e.target.setAttribute('class', 'click');
}); */
