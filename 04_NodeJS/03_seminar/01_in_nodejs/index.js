/* // Задание №2
// 1. Создайте файл writePerson.js
// 2. Напишите код, который создаст файл person.json в директории
// запускаемого скрипта и запишет в файл следующий объект:
// 15 мин
// 💡 Подсказки:
// - Для преобразования объекта в текст используйте функцию JSON.stringify()
// - Для определения пути к файлу, используйте модуль path и его метод .join(),
// а также глобальное свойство __dirname
// - Используйте синхронный метод записи в файл

const fs = require('fs');
const path = require('path');

// рекомендация хранить имя файла всегда в отдельной константе
const pathFile = path.join(__dirname, 'person.json'); 

const obj = {
    name: "Иван",
    surname: "Иванов",
    age: 30,
    city: "Ярославль",
};

fs.writeFileSync(pathFile, JSON.stringify(obj, null, 3)); */

// Задание №3
// 1. Создайте файл changePerson.js рядом с файлом writePerson.js
// 2. Напишите в нем код, который
// ➜ прочитает файл person.json,
// ➜ уменьшит возраст на 10
// ➜ изменит город на “Ekaterinburg”
// ➜ перезапишет исходный файл person.json
// 15 мин
// 💡 Подсказки:
// - Для преобразования текста в объект, необходимо использовать
// функцию JSON.parse()
// - Также не забывайте, что путь к файлу необходимо формировать
// с помощью path.join() и __dirname
// - Используйте синхронные методы чтения и записи
const fs = require("fs");
const path = require("path");
const pathFile = path.join(__dirname, "person.json"); 

const obj = JSON.parse(fs.readFileSync(pathFile));

console.log(obj);
// obj.age -= 10;
obj.city = "Ekaterinburg";


fs.writeFileSync(pathFile, JSON.stringify(obj, null, 3));

const date = new Date();
const nameDate = date.getHours() + "-" + date.getSeconds();
console.log(nameDate);
