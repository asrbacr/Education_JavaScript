"use strict";

/*
Используя Math.random() необходимо сгенерировать массив, содержащий 5 цифр в 
диапазоне [0, 9].
После создания массива необходимо вывести в консоль следующие значения:
1. Сумму элементов массива
2. Минимальное значение в массиве
3. Новый массив, содержащий индексы сгенерированного выше массива, в которых 
значение равно 3.
Пример: Если у нас сгенерировался массив [2, 3, 5, 7, 3], то мы должны вывести 
в консоль массив [1, 4]. Такой массив получился потому что в сгенерированном
массиве тройки лежат под индексами 1 и 4. Если троек в сгенерированном массиве
не окажется, значит нужно будет вывести пустой массив.
*/

const array = [];
for (let i = 0; i < 20; i++) {
  array.push(Math.trunc(Math.random() * 10));
}
console.log(array);

let summArray = 0;
for (let i = 0; i < array.length; i++) summArray += array[i];
console.log(summArray);

let minValueArray = array[0];
array.forEach((elem) => {
  if (elem < minValueArray) {
    minValueArray = elem;
  }
});
console.log(minValueArray);

const filterArray = [];
for (let i = 0; i < array.length; i++) {
  if (array[i] === 3) filterArray.push(i);
}

// Не понимаю, что с кодом не так? Но index не возвращается через filter.
// const filterArray = array.filter((value, index) => {
//   if (value === 3) {
//     return index;
//   }
// });
console.log(filterArray);
