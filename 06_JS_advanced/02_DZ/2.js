"use strict";

/*
###Задание 2
Вы разрабатываете систему отзывов для вашего веб-сайта. Пользователи могут 
оставлять отзывы, но чтобы исключить слишком короткие или слишком длинные 
сообщения, вы решаете установить ограничение, отзыв должен быть не менее 50 
символов в длину и не более 500. В случае неверной длины, необходимо выводить 
сообщение об ошибке, рядом с полем для ввода.

Создайте HTML-структуру. 
На странице должны отображаться товары, под каждым товаром должен быть список 
отзывов на данный товар. Под каждым списком отзывов должна быть форма, где можно
добавить отзыв для продукта.

При добавлении отзыва, он должен отображаться на странице под предыдущими 
отзывами, а не заменять их.
Массив initialData должен использоваться для начальной загрузки данных 
при запуске вашего приложения.

Каждый отзыв, как и продукт, должен иметь уникальный id, для упрощения, используем 
функцию `uid()`, она нам будет возвращать случайный id в виде небольшой строки.

ВНИМАНИЕ! Если вы не проходили на курсе работу с DOM, то можно это задание не 
делать, пока рано.
*/

function uid() {
  return Math.random().toString(36).slice(2);
}

const initialData = [
  {
    id: uid(),
    product: "Apple iPhone 13",
    reviews: [
      {
        id: uid(),
        text: "Отличный телефон! Батарея держится долго.",
      },
      {
        id: uid(),
        text: "Камера супер, фото выглядят просто потрясающе.",
      },
    ],
  },
  {
    id: uid(),
    product: "Samsung Galaxy Z Fold 3",
    reviews: [
      {
        id: uid(),
        text: "Интересный дизайн, но дорогой.",
      },
    ],
  },
  {
    id: uid(),
    product: "Sony PlayStation 5",
    reviews: [
      {
        id: uid(),
        text: "Люблю играть на PS5, графика на высоте.",
      },
    ],
  },
];
const containerEl = document.querySelector(".container");
let productHTML = ``;

initialData.forEach((el) => {
  productHTML += feedbackCart(el);
  containerEl.innerHTML = productHTML;
  feedbackCart(el);
});

const feedbackListEls = document.querySelectorAll(".feedback__list");
const feedbackInputEls = document.querySelectorAll(".feedback__input");
const feedbackButtonEls = document.querySelectorAll(".feedback__button");

feedbackButtonEls.forEach((feedbackButtonEl, i) => {
  feedbackButtonEl.addEventListener("click", () => {
    const feedbackText = feedbackInputEls[i].value.trim();
    if (feedbackText.length >= 50 && feedbackText.length <= 500) {
      const feedbackItemEl = document.createElement("li");
      feedbackItemEl.textContent = feedbackText;
      feedbackListEls[i].appendChild(feedbackItemEl);
      feedbackInputEls[i].value = "";
    } else {
      alert("Отзыв должен содержать от 50 до 500 символов.");
    }
  });
});

function feedbackList(el) {
  let cartListHTML = ``;
  el.reviews.forEach((elLi) => {
    cartListHTML += `<li class="feedback__li">${elLi.text}</li>`;
  });
  return cartListHTML;
}

function feedbackCart(el) {
  return `<div class="feedback">
      <h3 class="product">${el.product}</h3>
      <ul class="feedback__list">
        ${feedbackList(el)}
      </ul>

      <form action="#">
        <input class="feedback__input" type="text" name="add_feedback" required />
        <input class="feedback__button" type="button" value="Добавить отзыв" />
      </form>
    </div>`;
}
