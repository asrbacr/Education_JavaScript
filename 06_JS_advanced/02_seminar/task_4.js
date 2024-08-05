/*
Задание 4:
Пользователи вашего сайта могут добавлять элементы в список. Но есть условие: 
введенное значение должно содержать от 3 до 10 символов.
 
Создайте HTML-структуру:
 
```
<input type="text" class="user-input">
<button class="add-button">Добавить</button>
<ul class="item-list"></ul>
<div class="error-message"></div>
```
 
Необходимо обрабатывать событие добавления элемента в список. Функция, 
обрабатывающая событие, должна выбрасывать исключение, если длина введенного 
значения не соответствует требованиям.
Если исключение было выброшено, необходимо добавить сообщение об ошибке в div.
Не важно, была ошибка или нет, после того как мы совершим попытку добавления 
данных, необходимо вывести в консоль "Попытка добавления элемента завершена."
*/

const userInputEl = document.querySelector(".user-input");
const addButtonEl = document.querySelector(".add-button");
const itemListEl = document.querySelector(".item-list");
const errorMessageEl = document.querySelector(".error-message");

// addButtonEl.addEventListener('click', function (e) {
//     if (userInputEl.value.length < 3 || userInputEl.value.length > 10) {
//         errorMessageEl.textContent = "Значение не попадает в диапазон от 3 до 10 символов";
//         return;
//     }
//     try {
//         itemListEl.innerHTML += `<li>${userInputEl.value}</li>`;
//         errorMessageEl.textContent = "";
//     } catch (error) {
//         errorMessageEl.textContent = error.message;
//     } finally {
//         console.log("Попытка добавления элемента завершена.");
//     }
// });

addButtonEl.addEventListener("click", function (e) {
  const userInput = userInputEl.value.trim();
  if (userInputEl.value.length < 3 || userInputEl.value.length > 10) {
    errorMessageEl.textContent =
      "Значение не попадает в диапазон от 3 до 10 символов";
  } else {
    const liEl = document.createElement("li");
    liEl.textContent = userInput;
    itemListEl.append(liEl);
    userInputEl.value = '';
    massageEl.textContent = '';
  }
  console.log("Попытка добавления элемента завершена.");
});
