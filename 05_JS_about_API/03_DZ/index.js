// Задания семинара: https://github.com/Dmitriy-Karpenko-work/sem3.git

// Домашнее задание:

// Цель: Разработать веб-приложение, которое будет отображать новое случайное
// изображение из коллекции Unsplash, давая пользователю возможность узнать больше
// о фотографе и сделать "лайк" изображению.

// Регистрация на Unsplash:

// • Перейдите на веб-сайт Unsplash (https://unsplash.com/).
// • Зарегистрируйтесь или войдите в свой аккаунт. (если у вас не было регистрации
//     до этого, новый аккаунт создавать не нужно).

// Создание приложения:

// • Перейдите на страницу разработчика Unsplash (https://unsplash.com/developers).
// • Нажмите "New Application".
// • Заполните необходимую информацию о приложении
// (можете использовать http://localhost для тестирования).
// • Получите свой API-ключ после создания приложения.

// Разработка веб-приложения:

// • Создайте HTML-страницу с элементами: изображение, имя фотографа,
// кнопка "лайк" и счетчик лайков.
// • Используя JavaScript и ваш API-ключ, получите случайное
// изображение из Unsplash каждый раз, когда пользователь загружает страницу.
// Обратите внимание, что должно подгружаться всегда случайное изображение,
// для этого есть отдельная ручка (эндпоинт) у API.
const AccessKey = "uGMHuoOpJPe-BjPUzZjirvGSO8GOJWX-gkY8Xj6Cpdc";
const photoContainerEl = document.querySelector("#photo-container");
let isFetching = false;

document.addEventListener("DOMContentLoader", Main());

async function fetchPhotoRandom() {
  try {
    isFetching = true;
    const response = await fetch(`https://api.unsplash.com/photos/random`, {
      headers: { Authorization: `Client-ID ${AccessKey}` },
    });
    if (!response.ok) {
      throw new Error(`Сервер ответил статусом ${response.status}`);
    }
    return await response.json();
  } finally {
    isFetching = false;
  }
}

async function Main() {
  let imgsHTML = ``;
  const data = await fetchPhotoRandom();
  //   console.log(data);
  imgsHTML = createImg(data);
  photoContainerEl.innerHTML = imgsHTML;
  searchLike();
}

function createImg(objInfo) {
  return `
    <div class="wrapper">
        <p class="photo__author">${objInfo.user.name}</p>
        <div class="like">
          <div class="like__logo fa-regular fa-heart"></div>
          <p class="like__count">${objInfo.likes}</p>
        </div>
        <div class="photo">
          <img
            src="${objInfo.urls.small}"
            alt="${objInfo.alt_description}"
          />
        </div>
    </div>`;
}

// • Отобразите информацию о фотографе под изображением.
// • Реализуйте функционал "лайка". Каждый раз, когда пользователь нажимает
// кнопку "лайк", счетчик должен увеличиваться на единицу. Одну фотографию
// пользователь может лайкнуть только один раз. Также должна быть возможность
// снять лайк, если ему разонравилась картинка.

// fa-solid
function searchLike() {
  let isSwitch = false;
  const heartEl = document.querySelector(".fa-heart");
  heartEl.addEventListener("click", function (e) {
    const likeEl = heartEl.closest(".like");
    const likeCountEl = likeEl.querySelector(".like__count");
    const likeCountElText = Number(likeCountEl.textContent);

    if (!isSwitch) {
      heartEl.classList.remove("fa-regular");
      heartEl.classList.add("fa-solid");
      likeCountEl.remove();
      likeEl.insertAdjacentHTML(
        "beforeend",
        `<p class="like__count">${likeCountElText + 1}</p>`
      );
      isSwitch = true;
    } else {
      heartEl.classList.remove("fa-solid");
      heartEl.classList.add("fa-regular");
      likeCountEl.remove();
      likeEl.insertAdjacentHTML(
        "beforeend",
        `<p class="like__count">${likeCountElText - 1}</p>`
      );
      isSwitch = false;
    }
  });
}
// • Добавьте функцию сохранения количества лайков в локальное хранилище,
// чтобы при новой загрузке страницы счетчик не сбрасывался, если будет
// показана та же самая картинка.
// • Реализуйте возможность просмотра предыдущих фото с сохранением их
// в истории просмотров в localstorage.
// • Реализовать все с помощью async/await, без цепочем then.
