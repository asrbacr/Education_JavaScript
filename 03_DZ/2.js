"use strict";

/*
Необходимо попросить пользователя ввести число.
Если пользователь ввел отличное от числа значение, необходимо вывести в консоль
строку: "Значение задано неверно", иначе необходимо будет вызвать функцию 
(нужно будет ее создать), которая будет принимать введенное пользователем 
число. Функция должна вычесть из переданного ей числа 13% и вывести в консоль 
сообщение "Размер заработной платы за вычетом налогов равен N."
*/

const userData = Number(prompt("Введите число"));

if (!Number.isNaN(userData) && !Number.isFinite(userData)) {
  console.log("Значение задано неверно");
} else {
  console.log(
    `Размер заработной платы за вычетом налогов равен ${incomeTax(userData).toFixed(2)}.`
  );
}

/**
 * Функция для расчёта заработной платы за вычетом подоходного налога.
 * @param {number} salary - Размер заработной платы
 * @returns {string} Текстовое значение с фиксированным округлением до 2 символов после запятой.
 */
function incomeTax(salary) {
  return Math.round(salary * 0.87 * 100) / 100;
}
