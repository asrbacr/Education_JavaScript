/*
Задание 3: 
Вы создаете интерфейс, где пользователь вводит число. Ваша задача — проверить, 
является ли введенное значение числом или нет, и дать соответствующий ответ.
1. Создайте HTML-структуру:
 
```
<input class="number-input" type="text" placeholder="Введите число">
<button class="check-button">Проверить</button>
<div class="message"></div>
```
 
Необходимо обрабатывать событие проверки числа пользователем, проверяющая 
функция должна использовать try и catch для проверки вводимого значения.
*/

const numberInputEl = document.querySelector(".number-input");
const checkButtonEl = document.querySelector(".check-button");
const massageEl = document.querySelector(".message");

// checkButtonEl.addEventListener('click', () => {
//         if (Number.isFinite(+numberInputEl.value) && numberInputEl.value !== '') {
//             massageEl.textContent = 'Число';
//         } else {
//             massageEl.textContent = 'Введено не число';
//         }
// });

// второй вариант
checkButtonEl.addEventListener("click", () => {
  try {
    if (!Number.isFinite(+numberInputEl.value) || numberInputEl.value === "") {
      throw new Error("Введено не число");
    }
    massageEl.textContent = "Число";
  } catch (error) {
    massageEl.textContent = error.message;
  }
});
