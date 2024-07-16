/* // Задача 1.

// Дан массив товаров:

productsData = [
  {
    id: 1,
    name: "Ноутбук",
    category: "Электроника",
  },
  {
    id: 2,
    name: "Смартфон",
    category: "Электроника",
  },
  {
    id: 3,
    name: "Кофемашина",
    category: "Бытовая техника",
  },
  {
    id: 4,
    name: "Фотокамера",
    category: "Электроника",
  },
  {
    id: 5,
    name: "Микроволновая печь",
    category: "Бытовая техника",
  },
  {
    id: 6,
    name: "Книга",
    category: "Книги",
  },
  {
    id: 7,
    name: "Футболка",
    category: "Одежда",
  },
  {
    id: 8,
    name: "Шапка",
    category: "Одежда",
  },
  {
    id: 9,
    name: "Стул",
    category: "Мебель",
  },
  {
    id: 10,
    name: "Стол",
    category: "Мебель",
  },
];

// Вы разрабатываете интернет-магазин и хотите добавить
// функциональность динамической фильтрации товаров по
// категориям. У вас есть форма с выпадающим списком (select), в
// котором пользователь может выбрать категорию товаров,
// значения необходимо сформировать исходя их имеющихся товаров.
// При выборе категории товаров, необходимо динамически обновлять
// список отображаемых товаров на странице, чтобы пользователь
// видел только товары из выбранной категории.
// 1. Создайте интерфейс веб-страницы, который включает в себя
// следующие элементы:
// a. Выпадающий список (select) с категориями товаров.
// b. Список товаров, который будет отображать товары в
// соответствии с выбранной категорией.
// c. Каждый товар в списке должен содержать название и
// категорию.

// При выборе категории товаров в выпадающем списке, форма
// должна следить за изменениями.
// Динамически обновляйте список товаров на странице, чтобы
// отображать только товары из выбранной категории.
// Стилизуйте элементы интерфейса с помощью CSS для улучшения
// внешнего вида.

function displayCatalog(selectCategory) {
   productHTML = ``;
  productsData.forEach((elem) => {
    if (selectCategory === "" || elem.category === selectCategory) {
      productHTML += createCard(elem);
    }
  });
  wrapperEl.innerHTML = productHTML;
}

function createCard(cardInfo) {
  return `
      <div class="card">
        <div class="card__h1">${cardInfo.id}</div>
        <div class="card__name">${cardInfo.name}</div>
        <div class="card__category">${cardInfo.category}</div>
     </div>`;
}

const wrapperEl = document.querySelector("div.wrapper");
const categorySelectEl = document.querySelector("#categorySelect");
categorySelectEl.addEventListener("change", () => {
  let selectCategory = categorySelectEl.value;
  console.log(selectCategory);
  displayCatalog(selectCategory);
}); */

// Задача 2.

// Бесконечная лента фотографий
// Для создания бесконечной ленты с фотографиями с использованием
// Unsplash API, выполните следующие шаги:
// 1. Зарегистрируйтесь на Unsplash:
// ○ Перейдите на веб-сайт Unsplash (https://unsplash.com/).
// ○ Нажмите кнопку "Join" или "Регистрация", чтобы создать аккаунт, если у вас его еще нет.
// ○ Войдите в свой аккаунт Unsplash.

// 2. Создайте приложение:
// ○ После входа в аккаунт Unsplash, перейдите на страницу разработчика Unsplash
// (https://unsplash.com/developers).
// ○ Нажмите на кнопку "Your apps".
// ○ Нажмите "New Application" (Новое приложение).
// ○ Заполните информацию о вашем приложении, такую как имя, описание и сайт (вы можете
// использовать http://localhost для тестового сайта).
// ○ После заполнения информации, нажмите "Create Application" (Создать приложение).

// 3. Получите API-ключ:
// ○ После создания приложения, вы получите API-ключ. Этот ключ будет
// отображаться в вашей панели управления приложением.
// ○ API-ключ представляет собой строку вида YOUR_ACCESS_KEY.
// Скопируйте его.
// 4. Измените код HTML и JavaScript:
// ○ Откройте вашу HTML-страницу в текстовом редакторе или
// интегрированной среде разработки.
// ○ Замените 'YOUR_ACCESS_KEY' в коде JavaScript на ваш собственный
// API-ключ.

// 5. Реализуйте загрузку фотографий при открытии страницы.

// 6. Реализуйте бесконечную подгрузку фотографий при прокручивании страницы.

const ApplicationID = 633735;
const AccessKey = "uGMHuoOpJPe-BjPUzZjirvGSO8GOJWX-gkY8Xj6Cpdc";
const SecretKey = "Rg_LoE-RJQByZimyznByAoC2cJaRhxxidDdjx6wftHg";
const containerEl = document.querySelector("#photo-container");
let countPage = 1;
document.addEventListener("DOMContentLoader", Main());
document.addEventListener("scroll", async function (e) {
  console.log(document.documentElement.scrollTop);
  console.log(document.documentElement.clientHeight - 100);

  if (
    document.documentElement.clientHeight >=
    document.documentElement.clientHeight - 100
  ) {
      countPage++;
      await fetchPhotoList(countPage);
      let imgsHTML = ``;
      const data = await fetchPhotoList(countPage);
      data.forEach((elem) => {
        imgsHTML += createImg(elem);
      });
      containerEl.insertAdjacentHTML("beforeend", imgsHTML);
  }
});

async function fetchPhotoList(page) {
  const response = await fetch(`https://api.unsplash.com/photos?page=${page}`, {
    headers: { Authorization: `Client-ID ${AccessKey}` },
  });
  if (!response.ok) {
    throw new Error(`Сервер ответил статусом ${response.status}`);
  }
  return await response.json();
}

async function Main() {
  let imgsHTML = ``;
  const data = await fetchPhotoList(countPage);
  data.forEach((elem) => {
    imgsHTML += createImg(elem);
  });
  containerEl.innerHTML = imgsHTML;
}

function createImg(objInfo) {
  return `
    <div class="photo">
          <img src="${objInfo.urls.small}" alt="${objInfo.alt_description}">
      </div>`;
}
