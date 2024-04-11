/* // 1. Создать файл index.html
// 2. Подключить data.js
// 3. Добавить блок <div class="content"></div>
// 4. Создать переменную data и добавить в нее JSON parse данные из файла data.js
// 5. Вывести в консоль объект data
// 6. С помощью foreach обойти массив data
// 7. Вывести все изображения из данных

// console.log(JSON.parse(dataInfo));

const divContEl = document.querySelector('div.container');

const parseResult = JSON.parse(dataInfo);

parseResult.forEach(elem => {
    const newDivEl = document.createElement('div');
    newDivEl.classList.add(elem["class"]);
    const imgEl = document.createElement('img');
    imgEl.setAttribute('src', elem.url); // можно так
    imgEl.width = elem.width;            // можно и так
    imgEl.height = elem.height;

    const textImgEl = document.createElement('p');
    textImgEl.innerHTML = elem.text;

    newDivEl.appendChild(imgEl);
    newDivEl.appendChild(textImgEl);
    divContEl.appendChild(newDivEl);
}); */

// реальный пример API
/* fetch("https://api.nbrb.by/exrates/rates?periodicity=0")
  .then((response) => response.json())
  .then((json) => console.log(json)); */

const divContEl = document.querySelector("div.container");

fetch("https://api.nbrb.by/exrates/rates?periodicity=0")
  .then((response) => response.json())
  .then((parseResult) =>
    parseResult.forEach((elem) => {
    //   console.log(elem);
      const newDivEl = document.createElement("div");
      divContEl.appendChild(newDivEl);
      newDivEl.classList.add("img__container");

      const textCurAbb = document.createElement("p");
      textCurAbb.innerHTML = elem.Cur_Abbreviation;
      newDivEl.appendChild(textCurAbb);

      const textCurScale = document.createElement("p");
      textCurScale.innerHTML = elem.Cur_Scale;
      newDivEl.appendChild(textCurScale);

      const textCurName = document.createElement("p");
      textCurName.innerHTML = elem.Cur_Name;
      newDivEl.appendChild(textCurName);

      const textCurOfficial = document.createElement("p");
      textCurOfficial.innerHTML = elem.Cur_OfficialRate;
      newDivEl.appendChild(textCurOfficial);

    })
  );
