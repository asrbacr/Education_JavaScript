"use strict";

/*
1. Необходимо вывести в консоль массив продуктов в котором есть хоть одна
фотография, используя метод filter. Исходные данные - массив products.
2. Необходимо отсортировать массив products используя метод sort по цене,
начиная с самой маленькой, заканчивая самой большой ценой, после чего вывести
отсортированный массив в консоль.
Если сложно работать с методами массива, то можно сделать и обычным циклом.
*/

const products = [
  {
    id: 3,
    price: 127,
    photos: ["1.jpg", "2.jpg"],
  },
  {
    id: 5,
    price: 499,
    photos: [],
  },
  {
    id: 10,
    price: 26,
    photos: ["3.jpg"],
  },
  {
    id: 8,
    price: 78,
  },
];

console.log(products);
console.log(products[3]);

// Рассуждение по поиску отсеиванию элементов без photos
/* const resultArray = [];
for (const item of products) {
  for (const key in item) {
    if (key === "photos") {
      resultArray.push(item);
      break;
    }
  }
}
console.log(resultArray); */

// Применение filter
const filterProducts = products.filter((elem) => {
  for (const key in elem) {
    if (key === "photos") {
      return true;
    }
  }
});
console.log(filterProducts);

const sortProduct = [];

filterProducts.sort((a, b) => {
  return a - b;
});
console.log(filterProducts);
