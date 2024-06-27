// Вашей задачей является создание веб-слайдера
// для отображения изображений на веб-странице.

// Создайте интерфейс веб-страницы,
// который включает в себя следующие элементы:
// a. Контейнер для отображения текущего изображения.
// b. Кнопки "Предыдущее изображение" и "Следующее изображение"
// для переключения между изображениями.
// c. Навигационные точки (индикаторы)
// для быстрого переключения между изображениями.

// Для создания элементов интерфейса используйте HTML.
const data = `[
    {
        "id": 1,
        "alt": "Котик 1",
        "src": "https://uj-images.ru/images/article/2022/02/61fe96af0dc95.webp"
    },
    {
        "id": 2,
        "alt": "Котик 2",
        "src": "https://koshka.top/uploads/posts/2021-12/1639894342_27-koshka-top-p-kotiki-na-rabochii-29.jpg"
    },
    {
        "id": 3,
        "alt": "Котик 3",
        "src": "https://tapety.tja.pl/obrazki/tja_normalne/102432.jpg"
    }
]`;

const arrayImageCats = JSON.parse(data);
const borderList = document.querySelector(".border-list");
const arrowLeft = document.querySelector(".arrow-left");
const arrowRight = document.querySelector(".arrow-right");
const dots = document.querySelector(".dots");

console.log(arrayImageCats);

const arrayTampHTML = [];
arrayImageCats.forEach((elem) => {
  let elemPush = `<img class="image image__none" src="${elem.src}" alt="${elem.alt}"/>`;
  if (elem.id === 1) {
    elemPush = `<img class="image image__active" src="${elem.src}" alt="${elem.alt}"/>`;
  }
  arrayTampHTML.push(elemPush);
});
// console.log(arrayTampHTML);
borderList.insertAdjacentHTML("beforeend", arrayTampHTML.join(""));

arrowRight.addEventListener('click', function (e) {
    
});

// При клике на кнопку "Предыдущее изображение"
// должно отображаться предыдущее изображение.
// При клике на кнопку "Следующее изображение"
// должно отображаться следующее изображение.
// При клике на навигационные точки, слайдер
// должен переключаться к соответствующему изображению.

// Слайдер должен циклически переключаться между изображениями,
// то есть после последнего изображения должно отображаться первое, и наоборот.

// Добавьте стилизацию для слайдера и элементов интерфейса
// с использованием CSS для улучшения внешнего вида.

// Примеры модальных окон:
// https://habr.com/ru/articles/716142/
// https://1stwebdesigner.com/15-modal-popup-windows-created-with-only-css/
