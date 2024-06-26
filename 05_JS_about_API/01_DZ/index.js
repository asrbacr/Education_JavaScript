// Необходимо создать веб-страницу с динамическими элементами с расписанием занятий.

const contentEl = document.querySelector("div.content");
const data = `[
  {
    "id": 1,
    "name": "Йога",
    "time": "10:00 - 11:00",
    "maxParticipants": 15,
    "currentParticipants": 8
  },
  {
    "id": 2,
    "name": "Пилатес",
    "time": "11:30 - 12:30",
    "maxParticipants": 10,
    "currentParticipants": 10
  },
  {
    "id": 3,
    "name": "Кроссфит",
    "time": "13:00 - 14:00",
    "maxParticipants": 20,
    "currentParticipants": 15
  },
  {
    "id": 4,
    "name": "Танцы",
    "time": "14:30 - 15:30",
    "maxParticipants": 12,
    "currentParticipants": 10
  },
  {
    "id": 5,
    "name": "Бокс",
    "time": "16:00 - 17:00",
    "maxParticipants": 8,
    "currentParticipants": 6
  }
]`;

const dataArray = JSON.parse(data);

// На странице должна быть таблица с расписанием занятий, на основе JSON-данных.
// Каждая строка таблицы должна содержать информацию о занятии, а именно:
// - название занятия
// - время проведения занятия
// - максимальное количество участников
// - текущее количество участников
// - кнопка "записаться"
// - кнопка "отменить запись"

function createTrainingHTML(training) {
  return `
    <div class="training" date-id="${training.id}">
      <h4 class="name">${training.name}</h4>
      <h5 class="time">${training.time}</h5>
      <div class="count-people">
        <div class="count-people__elem">
          <p class="count-people__header">Всего возможно:</p>
          <p class="count-people__max">${training.maxParticipants}</p>
        </div>
        <div class="count-people__elem">
          <p class="count-people__header">Уже записалось:</p>
          <p class="count-people__current">${training.currentParticipants}</p>
        </div>
      </div>
      <div class="button">
        <button class="training__remove training__block">Отменить запись</button>
        <button class="training__enrol">Записаться</button>
      </div>
    </div>`;
}

dataArray.forEach((elem) => {
  contentEl.insertAdjacentHTML("beforeend", createTrainingHTML(elem));
});

// Если максимальное количество участников достигнуто,
// либо пользователь уже записан на занятие,
// сделайте кнопку "записаться" неактивной.

isMaxPeopleTraining(dataArray);
function isMaxPeopleTraining(training) {
  const buttonEls = document.querySelectorAll("button.training__enrol");
  buttonEls.forEach((element) => {
    const parentEl = element.closest(".training");
    const maxParticipantsEl =
      +parentEl.querySelector(".count-people__max").textContent;
    const currentParticipantsEl = +parentEl.querySelector(
      ".count-people__current"
    ).textContent;

    if (currentParticipantsEl >= maxParticipantsEl) {
      element.classList.add("training__block");
    }
  });
}

// Кнопка "отменить запись" активна в случае,
// если пользователь записан на занятие, иначе она должна быть неактивна.

function isUserCurrentTraining(training) {
  const buttonEls = document.querySelectorAll("button.training__enrol");

  buttonEls.forEach((element) => {
    const parentEl = element.closest(".training");
    const maxParticipantsEl =
      +parentEl.querySelector(".count-people__max").textContent;
    const currentParticipantsEl = +parentEl.querySelector(
      ".count-people__current"
    ).textContent;

    if (currentParticipantsEl >= maxParticipantsEl) {
      element.classList.add("training__block");
    }
  });
}

// Пользователь может записаться на один курс только один раз.

// При нажатии на кнопку "записаться" увеличьте количество записанных участников.
// Если пользователь нажимает "отменить запись",
// уменьшите количество записанных участников.
// Обновляйте состояние кнопок и количество участников в реальном времени.

// Если количество участников уже максимально,
// то пользователь не может записаться, даже если он не записывался ранее.

// Сохраняйте данные в LocalStorage, чтобы они сохранялись
// и отображались при перезагрузке страницы.


// комментарий преподавателя
// Здравствуйте Василий.
// О, да тут не так много и осталось доделать...
// Отлично начали :)
// Проверьте, что в функциях training параметры используются.
// На счет 75-77 строк, лучше один раз вставить все, созбрать полностью весь html и за один раз вставить. Чем меньше будет дергать функции, которые работают с html, тем лучше. Эти функции медленные.
// Спасибо за работу.