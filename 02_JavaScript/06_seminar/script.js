// Задание 1 (тайминг 25 минут)
// 1. Дан макет
// https://www.figma.com/file/mZwLT9fKktsWuVyfQRoST1/shop-(Copy)-(Copy)?node-id=73%3A140 в котором
// представлены товары на странице корзины
// 2. Необходимо создать файл data.js в котором создать
// переменную dataProducts в которую присвоить JSON
// данные по товарам.
// 3. Вам нужно самостоятельно создать JSON данные (не
// забыть про кавычки для ключей и значений
// 4. Добавить все данные из макета, чтобы в дальнейшим по
// ним мы смогли создать вёрстку
const data = JSON.parse(dataJS);
console.log(data);
const cartConteiner = document.querySelector("div.lists-cart__left");


data.forEach(element => {
    const tempEl = document.getElementById("cartTemplate");
    // console.log(element);

    const clone = tempEl.content.cloneNode(true);
    console.log(clone);
    clone.querySelector("img.cart__img").src = element.imgUrl;
    clone.querySelector("h3.cart__name").innerHTML = element.name;
    clone.querySelector("img.cart__img").innerHTML = element.category;
    clone.querySelector("span.cart__price_numder").innerHTML = element.price;
    clone.querySelector("span.cart__color_value").innerHTML = element.color;
    clone.querySelector("span.cart__size_value").innerHTML = element.size;
    clone.querySelector("input.quantity__number").value =
      element.quantity;

    cartConteiner.appendChild(clone);
});