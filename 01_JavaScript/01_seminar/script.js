/* console.log("Текст из script.js!"); */

// Задание 2:
// 1. Создайте переменную `num` и присвойте ей значение `123`. Выведите значение этой переменной в консоль.
/* const num = 123;
console.log(num + " jdkfhs"); */

// 2. Создайте переменную `а` и присвойте ей значение `5`, переопределите переменную `а` на значение `7`, выведите переменную `а` в консоль.
/* let a = 5;
a = 7;
console.log(a); */

// 3. Создайте переменную `b`. Запишите в нее сумму чисел `1`, `2` и `3`. С помощью функции `console.log` выведите в консоль содержимое переменной `b`.
/* let b = 1 + 2 + " 3";
console.log(b); */

/* 4. Создайте два вида комментариев в вашем коде, добавьте в них произвольный текст. */
// однострочный комментарий

// Задание 3:
// 1. Создайте две переменные, одна будет хранить ваш возраст (девушкам всегда 18), а другая переменная будет хранить текущий год (все созданные переменные должны быть логично названы).
// - Создайте переменную суммы и присвойте сумму чисел из двух переменных.
// - Создайте переменную разности и присвойте разность текущего года и вашего возраста.
// - Создайте переменную произведения и присвойте произведение чисел двух переменных.
// - Создайте переменную частного и присвойте деление чисел текущего года к вашему возрасту.
// 2. Выведите в консоль все созданные переменные.
/* const myAge = Number.parseInt(prompt("Введите ваш возраст: "));
const year = 2024;
console.log(myAge, year);
const summ = myAge + year;
console.log(`Сумма равна ${summ}`); // Ковычки `` - f-строка
const def = year - myAge;
console.log(`Год рождения ${def}`);
const mul = year * myAge;
console.log(`Произведение чисел ${mul}`);
const div = year / myAge;
console.log(`Частное чисел ${div}`); */

/* const str = "12ы3.2";
console.log(str); // текст
console.log(-str); // добавить минус
console.log(+str); // добавить с плюсом
console.log(Number(str)); // 123.2
// parseInt и parseFloat - собирают строку по символьно
console.log(Number.parseInt(str)); // тип Number. превращает в целое
console.log(Number.parseFloat(str)); // тип Number. превращает в дробное */

// 3. Сложите все созданные переменные и выведите результат в консоль.
/* console.log(summ + def + mul + div); */

// Задание 4:
// Не запуская код, определите, что отобразится в консоли:
// `let a = 5 + 5 * 3 + 3;`                             // 23
// Не запуская код, определите, что отобразится в консоли:
// `let b = 8 / 2 + 2;`                                 // 6
// Не запуская код, определите, что отобразится в консоли:
// `let c = (2 + 3) * (2 + 3);`                         // 25
// Не запуская код, определите, что отобразится в консоли:
// `let d = (2 + 3) * 2 + 3;`                           // 13
// Не запуская код, определите, что отобразится в консоли:
// `let e = (2 * 8) / 4;`                               // 4
// Не запуская код, определите, что отобразится в консоли:
// `let f = 2 * (8 / 4);`                               // 4

// Задание 5:
// 1. Запишите в переменную `a` число `0.1`, а в переменную `b` - число `0.2`. Найдите сумму значений этих переменных и выведите ее на экран.
/* const a = 0.1;
const b = 0.2;
const summ = a + b;
console.log(Number(summ));
// Math.round(num * 10) / 10;
console.log(+summ.toFixed(1));

let num = 10.2525;
console.log(Math.round(num)); // 11
console.log(Math.floor(num)); // 10
console.log(Math.ceil(num)); // up 11
console.log(Math.trunc(num)); // fixed

console.log(Math.round(num * 10000) / 10000); // до числа кратного кол-ву 10000 */

// 2. Создайте переменную `c`, запишите в нее какое-нибудь положительное или отрицательное число. Выведите на экран это число с обратным знаком.
const c = 4;
console.log(+c);
console.log(-c);

// Задание 6:
// 1. Создайте строку с вашем именем и строку с вашей фамилией. Выведите эти данные в консоль.
const myName = "Василий";
const lastName = prompt("Введите вашу фамилию");
console.log("Имя и фамилия " + myName + " " + lastName);

// 2. Создайте переменную с текстом 'java' и переменную с текстом 'script'. С помощью этих переменных и операции конкатенации строк выведите в консоль строку 'javascript'.
const java = "java";
const script = "sctipt";
console.log(`Результат ${java + script}`);

// 3. Создайте переменную с текстом 'hello' и переменную с текстом 'world'. С помощью этих переменных и операции конкатенации строк выведите в консоль строку 'hello world', желательно использовать бэктики (обратные кавычки).
const hello = "hello";
const world = "world";
console.log(`текст ${hello} ${world}`.toUpperCase());
console.log(`текст ${hello} ${world}`.toLocaleLowerCase()); // для языков, где нет заглавных или строчных букв.