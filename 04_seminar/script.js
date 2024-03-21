/* // Задание 1:

// 1. Создайте массив с элементами 1, 2, 3.
// Выведите на экран каждый из этих элементов.
const array = [1, 2, 3];
console.log(array);

// 2. Создайте массив с произвольными элементами.
// Выведите на экран количество элементов в этом массиве.
const arrayTwo = [1, "test", -34, "2", true, 3];
console.log(arrayTwo.length);

// 3. Создайте массив с элементами 'a', 'b', 'c'. Запишите вместо первого элемента
// число 1, вместо второго - 2, вместо третьего - 3.
const arrayThree = ["a", "b", "c"];
console.log(arrayThree);
arrayThree[0] = 1;
arrayThree[1] = 2;
arrayThree[2] = 3;
console.log(arrayThree); */

/* // Задание 2:

// 1. Создайте массив с элементами 1, 2 и 3. С помощью оператора ++ увеличьте
// каждый элемент массива на единицу.
const array = [1, 2, 3];
for (let i = 0; i < array.length; i++) {
  array[i]++;
}
console.log(array);

let a = 5;
let b = a++;
console.log(a, b);

// 2. Узнайте длину следующего массива и объясните почему такое значение:
// ```
const arr = [];
arr[3] = "a";
arr[8] = "b";
console.log(arr);
console.log(arr[5]);
// ```

// 3. Пусть дан такой массив: `[1, 2, 3]`. Добавьте ему в конец элементы 4 и 5.
const arrayTree = [1, 2, 3];
arrayTree.push(4);
arrayTree.push(5);
console.log(arrayTree);

// 4. Создайте произвольный массив из 5 элементов, удалите из него два элемента.
// Проверьте, какое станет значение свойства length после этого.
const arrayFour = [1, "Hi", true, 4, 5];
// arrayFour.splice(2, 2);
// arrayFour.splice(2, 0, 500);
arrayFour.splice(2, 2, 500, 400);
console.log(arrayFour); */

/* // Задание 3:
//
// 1. С помощью цикла for выведите в консоль числа от 11 до 33.
// for (let i = 11; i <= 33; i++) {
//   console.log(i);
// }

// 2. С помощью цикла for выведите в консоль нечетные числа в промежутке от 1
// до 100 включительно.
// for (let i = 0; i < 100; i++) {
//   if (i & (2 !== 0)) {
//     console.log(i);
//   }
// }
// for (let i = 1; i < 100; i+=2) {
//   console.log(i);
// }

// 3. С помощью цикла for выведите в консоль числа от 100 до 0.
// for (let i = 100; i >= 0; i--) {
//   console.log(i);
// }

// 4. Создать переменную с заданным числом. Умножайте число на 3 столько раз,
// пока результат умножения не станет больше 1000. Какое число получится?
// Посчитайте количество итераций, необходимых для этого.
const num = 1;
let count = 0;
while (num < 1000) {
  num = num * 3;
  count++;
}

console.log(count); */

/* // Задание 4:

// 1. Создать массив `[2, 5, 9, 15, 1, 4]`.
// Выведите в консоль те элементы массива, которые больше 3-х, но меньше 10.
// const array = [2, 5, 9, 15, 1, 4];
// for (let i = 0; i < array.length; i++) {
//   if (array[i] > 3 && array[i] < 10) {
//     console.log(array[i]);
//   }
// }

// array.forEach((value, index) => {
//   console.log(`${index}: ${value}`);
// });

// array.forEach((element) => {
//   if (element > 3 && element < 10) {
//     console.log(element);
//   }
// });

// const filterArr = array.filter(function (value) {  // (value, index)
//   if (value > 3 && value < 10) return true;
//   return false;
// });
// console.log(filterArr);

// const filterArr = array.filter(value => value > 3 && value < 10);
// console.log(filterArr);

// 2. Найдите сумму четных чисел от 2 до 100.
// let sumNumber = 0;
// for (let i = 2; i <= 100; i += 2) {
//   sumNumber += i;
// }
// console.log(sumNumber);

// 3. Создать массив `[2, 5, 9, 3, 1, 4]`.
// Найдите сумму элементов этого массива.
// let sum = 0;
// const array = [2, 5, 9, 3, 1, 4];
// array.forEach((element) => {
//   sum += element;
// });
// console.log(sum);

// 4. С помощью цикла сформируйте строку '-1-2-3-4-5-6-7-8-9-'.
// let str = "-";
// for (let i = 0; i < 10; i++) {
//   str = str + i + "-";
// }
// console.log(str);

// 5. Создать массив `[2, 5, 9, 0, 3, 1, 4]`.
// Запустите цикл, который будет по очереди выводить элементы этого массива в
// консоль до тех пор, пока не встретится элемент со значением 0. После этого
// цикл должен завершить свою работу.
const array = [2, 5, 9, 0, 3, 1, 4];
for (let i = 0; i < array.length; i++) {
  if (array[i] === 0) {
    break;
  }
  console.log(array[i]);
}

while () {
    
} */

/* // Задание 5:
//
// 1. Создать массив из 10 случайных чисел от 0 до 100 включительно.
// Необходимо вывести в консоль все числа, которые делятся и на 2, и на 3.
// const array = [];
// for (let i = 0; i < 10; i++) {
//   array.push(getRandomInt(0, 100));
// }

// console.log(array);

// for (let i = 0; i < array.length; i++) {

//     if (array[i] % 2 === 0 && array[i] % 3 === 0) { // array[i] % 6 === 0
//       console.log(array[i]);
//     }
// }

// // Функция по генерации диапазона на js
// function getRandomInt(min, max) {
//   return Math.trunc(Math.random() * (max - min + 1)) + min;
// }

// 2. Дан массив: `[1, 2, 3, 2, 4, 3, 5, 6, 3, 2, 3]`. Подсчитайте количество
// цифр 3 в этом массиве.
// const array = [1, 2, 3, 2, 4, 3, 5, 6, 3, 2, 3];
// let count = 0;
// array.forEach((element) => {
//   if (element === 3) {
//     count++;
//   }
// });
// console.log(count);

// 4. Дан массив: `[1, 2, 3, 4, 5]`.
// С помощью метода splice преобразуйте массив в следующий: [1, 4, 5]
const array = [1, 2, 3, 4, 5];
array.splice(1, 2);
console.log(array); */
