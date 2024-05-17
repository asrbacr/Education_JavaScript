const myPromise = new Promise((resolve, reject) => {});

myPromise
  .then((value) => {})
  .catch((error) => {
    console.log("ошибка");
  });

const url1 = "https://jsonplaceholder.typicode.com/users";

// fetch(url1)
//   .then((response) => response.json())
//   .then((data) => console.log(data))
//   .catch((error) => console.error(`ошибка ${error}`));

// --------------------
// Стандартная асинхронная ф-ция
const getData = (url) =>
  new Promise((resolve, reject) => {
    fetch(url).then((response) =>
      response
        .json()
        .then((data) => resolve(data))
        .catch((error) => reject(error))
    );
  });

// getData(url1)
//   .then((data) => console.log(data))
//   .catch((error) => console.log(error.message));

// --------------------
// Современный способ обработки входных данных
const getData2 = async (url) => {
  try {
    // ожидание результат работы ф-ции
    const res = await fetch(url);
    const data = await res.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};

// const fetchData = await getData2(url1);
// console.log(fetchData);

// VG7hcoFMcSvGDhlJh3ylikHVk7Q8Q4Op8ZFDomGN;
// GET https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY
const nasaUrl =
  "https://api.nasa.gov/planetary/apod?api_key=Oca6QFHJlYzXyIGDfPacf1cdscNN1IbTggMNOVNX&count=10";

const fetchData = await getData2(nasaUrl);
console.log(fetchData);

// -----------

const array = ["class", "ress", "pass"];
// создаём HTML
const catalogEl = document.querySelector("div.catalog");
fetchData.forEach((elem) => {
  catalogEl.insertAdjacentHTML(
    "beforeend",
    `
        <figure>
            <img src="${elem.url}" class="${array}"/>
            <figcaption>${elem.explanation}</figcaption>
        </figure>
    `
  );
});
