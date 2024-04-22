/* // Задание 1 (тайминг 20 минут)
// 1. Создайте функцию mergeArrays, которая принимает два
// массива и возвращает новый массив, содержащий все
// элементы из обоих массивов. Используйте spread
// оператор для объединения массивов.
// mergeArrays([1, 2, 3], [4, 5, 6]); // Ожидаемый результат: [1,2, 3, 4, 5, 6]
// 2. Создайте функцию removeDuplicates, которая принимает
// любое количество аргументов и возвращает новый
// массив, содержащий только уникальные значения.
// Используйте rest оператор для сбора всех аргументов в
// массив а затем filter для определения дубликатов.
// removeDuplicates(1, 2, 3, 2, 4, 1, 5); // Ожидаемый результат: [1, 2, 3, 4, 5]

const mergeArrays = (arrayOne, arrayTwo) => [...arrayOne, ...arrayTwo];

// console.log(mergeArrays([1, 2, 3], [4, 5, 6]));

function removeDuplicates(...arrays) {
  return arrays.filter((elem, id) => {
    return arrays.indexOf(elem) === id;
  });
}

function removeDuplicatesTwo(...arrays) {
  const uniqArray = [...new Set(arrays)];
  return uniqArray;
}

console.log(removeDuplicates(1, 2, 3, 2, 4, 1, 5));
console.log(removeDuplicatesTwo(1, 2, 3, 2, 4, 1, 5)); */

/* // Задание 2 (Чистые функции 25минут)
// Текст задания
// 1. Напишите функцию getEvenNumbers, которая принимает массив
// чисел в качестве аргумента и возвращает новый массив,
// содержащий только четные числа.
// 2. Задача: Напишите функцию calculateAverage, которая принимает
// массив чисел в качестве аргумента и возвращает среднее значение
// этих чисел.
// 3. Напишите функцию capitalizeFirstLetter, которая принимает строку в
// качестве аргумента и возвращает новую строку, в которой первая
// буква каждого слова является заглавной.

// function getEvenNumbers(array) {
//   return array.filter((elem) => {
//     return elem % 2 === 0;
//   });
// }
// const getEvenNumbersTwo = (array) => array.filter((elem) => elem % 2 === 0);
// console.log(getEvenNumbers([1, 2, 3, 4, 5, 6]));

// function calculateAverage(array) {
//     return array.reduce((sum, elem) => (sum + elem)) / array.length;
// }
// console.log(calculateAverage([1, 2, 3, 4, 5, 6]));

function capitalizeFirstLetter(str) {
  // return str.replace(/\b\w/g, (char) => {
  return str.replace(/(^|\s)\S/g, (char) => {
    return char.toUpperCase();
  });
}

console.log(
  capitalizeFirstLetter("capitalizeFirstLetter sdfgkdfgDkfjj calculateAverage")
);
console.log(capitalizeFirstLetter("апишите функцию calculateAverage")); */

/* // Задание 3 (Замыкания 20 минут)
// 1. Напишите функцию createCalculator, которая принимает начальное
// значение и возвращает объект с двумя методами: add и subtract.
// Метод add должен увеличивать значение на переданное число, а
// метод subtract должен уменьшать значение на переданное число.
// Значение должно быть доступно только через методы объекта, а не
// напрямую.

function createCalculator(def) {
  return {
    value: def,
    add(num) {
      return (this.value += num);
    //   return (this.value + num);
    },
    subtract(num) {
      return (this.value -= num);
    //   return (this.value - num);
    },
    data() {
        return this.value;
    }
  };
}

const numberResult = createCalculator(10);
console.log(numberResult.add(5));
console.log(numberResult.add(5));
console.log(numberResult.add(5));
console.log(numberResult.add(5));
console.log(numberResult.subtract(3));
console.log(numberResult.data());
// console.log(numberResult); */

/* // Задание 4 (Лексический контекст 15 минут)
// 1. Напишите функцию createGreeting, которая принимает имя
// пользователя и возвращает функцию, которая будет выводить
// приветствие с использованием этого имени.
// // Пример использования:

function createGreeting(name) {
  // backNameFunction - может отсутствовать
  return function backNameFunction() {
    return `Hello, ${name}!`;
  };
}

const greeting = createGreeting("John");
console.log(greeting());
// greeting(); // Ожидаемый результат: "Hello, John!" */

/* // Задание 5 (тайминг 15 минут)
// 1. Задача: Напишите функцию createPasswordChecker, которая
// принимает допустимую длину пароля в качестве аргумента и
// возвращает функцию для проверки введенного пароля.
// Возвращаемая функция должна принимать пароль и возвращать
// true, если его длина соответствует допустимой, и false в противном
// случае.
// // Пример использования:
// const isPasswordValid = createPasswordChecker(8);
// console.log(isPasswordValid('password')); // Ожидаемый результат:
// false
// console.log(isPasswordValid('secret')); // Ожидаемый результат: true

function createPasswordChecker(passLength) {
  return function (password) {
    return password.length < passLength;
  };
}

const isPasswordValid = createPasswordChecker(8);
console.log(isPasswordValid("password"));
console.log(isPasswordValid("secret")); */

// Задание 6 (Рекурсия 25 минут)
// 1. Напишите рекурсивную функцию sumDigits, которая принимает
// положительное целое число в качестве аргумента и возвращает
// сумму его цифр.
// // Пример использования:
// console.log(sumDigits(123)); // Ожидаемый результат: 6 (1 + 2 + 3)
// console.log(sumDigits(456789)); // Ожидаемый результат: 39 (4 + 5 + 6 + 7 + 8 + 9)

function sumDigits(number) {
  if (number < 10) {
    return number;
  }
  return (number % 10) + sumDigits(Math.floor(number / 10));
}

console.log(sumDigits(123));
console.log(sumDigits(456789));
