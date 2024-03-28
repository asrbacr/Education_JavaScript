"use strict";

/*
Необходимо реализовать четыре функции, каждая функция должна принимать по два
числа и выполнять одну из операций (каждая функция выполняет одну из них):
1. Сложение
2. Разность
3. Умножение
4. Деление
Необходимо сделать так, чтобы функция вернула число, например выражение
console.log(sum(2, 6)); должно вывести число 8 в консоль (sum - функция
сложения в данном примере, ваши названия функций могут отличаться).
Округлять значения, которые возвращают функции не нужно, однако, обратите
внимание на разность, функция должна вычесть из большего числа меньшее, либо
вернуть 0, если числа равны.
Функциям всегда передаются корректные числа, проверки на NaN, Infinity делать
не нужно.
Демонстрировать работы функций не обязательно.
*/

// Я уже самостоятельно решал это задание в директории (../02_DZ_plus/4.html)
const sum = (a, b) => a + b;
const mult = (a, b) => a * b;
function diff(a, b) {
  if (a > b) {
    return a - b;
  }
  return b - a;
}

// тут я тоже проверил делил большее на меньшее
function div(a, b) {
  if (a > b) {
    return ((a / b) * 100) / 100;
  }
  return ((b / a) * 100) / 100;
}
function resultOperation(a, b, operation) {
  switch (operation) {
    case "+":
      return sum(a, b);
      break;
    case "-":
      return diff(a, b);
      break;
    case "*":
      return mult(a, b);
      break;
    case "/":
      return div(a, b);
      break;
    default:
      return NaN;
      break;
  }
}

const numberOne = Number(prompt("Введите первое число"));
const operationSing = prompt("Введите операцию (+, -, *, /)");
const numberTwo = Number(prompt("Введите второе число"));

// Касательно вывода "Идея хорошая, реализация ..." xD
alert(
  `Результат: ${numberOne} ${operationSing} ${numberTwo} = ${resultOperation(
    numberOne,
    numberTwo,
    operationSing
  )}`
);
