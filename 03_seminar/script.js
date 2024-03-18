/* // Задание 1:

// 1. Написать функцию, которая принимает, имя, фамилия и возраст. Функция должна
// вывести в консоль строку:
// "Привет, `имя` `фамилия`. Вы уже большой, вам `возраст`."
function helloUser(name, lastname, age) {
  console.log(`Привет, ${name} ${lastname}. Вы уже большой, вам ${age}.`);
}

// 2. Создайте функцию, которая принимает число, а возвращает квадрат переданного
// ей числа.
const squarNumber = (numberUser) => numberUser ** 2;

// 3. Создайте функцию, которая принимает число.
// Функция должна вывести в консоль '+++', если число положительное, либо '---',
// если число было отрицательное. В случае, если было передано не число, либо ноль,
// функция ничего не должна выводить.
const positiveNumer = (number) => {
  if (typeof number !== "number") {
    return;
  } else if (number > 0) {
    console.log("+++");
  } else if (number < 0) {
    console.log("---");
  }
};

positiveNumer(0);
positiveNumer("6");
positiveNumer(-4);
positiveNumer("dsfsdf");
 */

/* // Задание 2:
// 1. Создайте функцию, которая параметрами принимает 3 числа и выводит в
// консоль сумму этих чисел.
// Создайте три переменные, со случайными значениями и продемонстрируйте работу
// данной функции.
const summNumber = (a, b, c) => console.log(a + b + c);
const a = Math.trunc(Math.random() * 10);
const b = Math.trunc(Math.random() * 10);
const c = Math.trunc(Math.random() * 10);

console.log(summNumber(a, b, c));

// 3. Дан код:

// ```
// func(2);
// func(3);
// func();

// function func(num = 5) {    тут значение по умолчанию
//   console.log(num * num);
// }
// ```

// Расскажите, каким будет результат каждого из вызовов функции. */

/* // Задание 3:

// 1. Создайте функцию, которая принимает число, а возвращает квадратный корень
// переданного числа.
// С помощью созданной функции найдите сумму корней чисел 3 и 4 и выведите данную
// сумму в консоль.
const root = (x) => Math.sqrt(x);
console.log(root(3) + root(4));

// 2. Создайте функцию, которая находит минимальное число из 2х переданных
// аргументов функции и вернет найденное значение.
const findMin = (x, y) => Mith.min(x, y); */

// Задание 4:

// 1. Создайте функцию, которая принимает параметром число от 1 до 7, а возвращает
// день недели на русском языке.
// const number = Number(prompt("Введите число от 1 до 7"));

// function dayWeek(num) {
//   switch (num) {
//     case 1:
//       return "Понедельник";
//     case 2:
//       return "Вторник";
//     case 3:
//       return "Среда";
//     case 4:
//       return "Четверг";
//     case 5:
//       return "Пятница";
//     case 6:
//       return "Суббота";
//     case 7:
//       return "Воскресенье";
//     default:
//       return "Неверное число";
//   }
// }

// console.log(dayWeek(number));

/* // 2. Создайте функцию, которой мы передаем имя и она возвращает приветствие в
// зависимости от времени суток (утро, день, вечер, ночь), например:
// "Добрый день, Иван." или "Доброй ночи, Иван.".
function helloUser(nameUser) {
  const now = new Date();
  const hour = now.getHours();
  //   if (hour >= 0 && hour < 6) {
  //     return `Доброй ночи, ${nameUser}.`;
  //   } else if (hour >= 6 && hour < 12) {
  //     return `Доброе утро, ${nameUser}.`;
  //   } else if (hour >= 12 && hour < 18) {
  //     return `Добрый день, ${nameUser}.`;
  //   } else {
  //     return `Добрый вечер, ${nameUser}.`;
  //   }
  if (hour < 6) {
    return `Доброй ночи, ${nameUser}.`;
  }
  if (hour < 12) {
    return `Доброе утро, ${nameUser}.`;
  }
  if (hour < 18) {
    return `Добрый день, ${nameUser}.`;
  }
  return `Добрый вечер, ${nameUser}.`;
}
console.log(helloUser("Василий")); */

// ----


/**
 * Функция возвращает приветствие
 * @param {string} name - Имя пользователя
 * @param {number} age - Возрат пользователя
 * @returns {string} Строка с приветствием
 */
function funct(name, age) {
    return `${name}, вам уже ${age}`;
}
