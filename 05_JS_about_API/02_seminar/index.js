/* // Задание 1
// Вам необходимо создать навигационное меню для веб-сайта, в
// котором меняется активный пункт при клике без фактического
// перехода на другие страницы. Меню должно обладать следующими
// характеристиками:
// 1. Подсветка активного пункта: При клике на пункт меню он
// должен становиться активным, и для активного пункта должен
// применяться определенный стиль (например, изменение цвета
// фона). Если выбрать другой пункт, предыдущий должен
// перестать быть активным.
// 2. Эффекты наведения: При наведении курсора на пункты меню
// должны применяться эффекты (например, изменение цвета
// текста или фона) для подсказки пользователю, что пункт меню
// является интерактивным.

const menuEl = document.querySelector('.menu');
menuEl.addEventListener('click', function (e) {
    if(!e.target.classList.contains('menu__link')){
        return;
    }
    menuEl.querySelector(".active").classList.remove("active");
    e.target.classList.add('active');

}); */

/* // Задание 2.

// Создайте простое модальное окно, которое появляется при клике
// на кнопку "Открыть модальное окно" и закрывается при клике на
// кнопку "Закрыть". Модальное окно должно содержать заголовок
// "Модальное окно" и кнопку для закрытия. Модальное окно должно
// плавно появляться и исчезать при открытии и закрытии.

const openModalButton = document.querySelector(".open-modal-button");
const modalWindow = document.querySelector(".modal-windows");

const closeModalHandler = (event) => {
  if (event.target.closest(".modal-windows")) {
    return;
  }
  if (event.target !== modalWindow && event.target !== openModalButton) {
    modalWindow.style.display = "none";
    console.log("Событие window");
    window.removeEventListener("click", closeModalHandler);
  }
};

openModalButton.addEventListener("click", function (e) {
  modalWindow.style.display = "block";
  console.log("Событие block");

  window.addEventListener("click", closeModalHandler);

  // if (e.target !== modalWindow && e.target !== openModalButton) {
  //     modalWindow.style.display = 'none';
  // }
}); */

/* // Задание 3.
 
// У вас есть кнопка "Купить". Создайте скрипт, который при клике 
// на эту кнопку меняет её текст на "Товар добавлен в корзину" в 
// течение 2 секунд, а затем возвращает исходный текст "Купить". 
// В обработчике события клика также проверьте, является ли 
// событие доверенным (event.isTrusted). Если событие является
// доверенным, выполните изменение текста кнопки и убедитесь, 
// что после 2 секунд текст возвращается в исходное состояние.

const buyButtonEl = document.querySelector(".buy-button");

buyButtonEl.addEventListener('click', function (e) {
    if (e.isTrusted) {
        e.target.innerHTML = 'Товар добавление в корзину';
        e.target.disabled = true;
        setTimeout(() => {
            e.target.innerHTML = 'Купить';
            e.target.disabled = false;
        }, 2000);
    }
}); */

// Задание 4

// Вам предоставляется задача создать простой онлайн опросник, который позволяет пользователям
// отвечать на вопросы с вариантами ответов. Ваша задача - разработать интерфейс и функциональность
// для этого опросника, используя HTML, CSS и JavaScript.
// 1. Создайте интерфейс с несколькими вопросами и вариантами ответов. Каждый вопрос должен
// иметь несколько вариантов ответов.
// 2. Реализуйте обработку событий, чтобы пользователи могли выбирать варианты ответов.
// 3. Добавьте кнопку "Завершить опрос", которая будет показывать результаты опроса.
// 4. При нажатии на кнопку "Завершить опрос", вы должны проверить, что пользователь ответил на все
// вопросы, и отобразить выбранные им варианты ответов.
// 5. Если пользователь не ответил на все вопросы, покажите ему сообщение о необходимости ответить
// на все вопросы перед завершением опроса.
// 6. По желанию можно добавить стилизацию опросника с использованием CSS для лучшего
// пользовательского опыта.

const questionEls = document.querySelectorAll(".question");
const submitButton = document.querySelector("#submit");
const resultEl = document.querySelector(".result");
const resultListEls = document.querySelector(".result-list");

submitButton.addEventListener("click", function (e) {
  const answers = [];
  questionEls.forEach((questionEl) => {
    const answerEl = questionEl.querySelector("input:checked");
    if (answerEl) {
      answers.push(answerEl.value);
      questionEl.classList.remove("red-border");
    } else {
      questionEl.classList.add("red-border");
    }
  });
  console.log(answers);

  if (questionEls.length === answers.length) {
    // alert("Пользователь всё ответил");
    resultEl.style.display = "block";
    resultListEls.innerHTML = answers
      .map(
        (answer, index) =>
          `<p id="result-q${index + 1}">Вопрос ${
            index + 1
          }: <span>${answer}</span></p>`
      )
      .join("");
  }
});
