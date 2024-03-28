/* // Задание 1:

// 1. Создайте объект с ключами от 1 до 7, в качестве значений содержащий имена
// дней недели. Выведите на экран “Вторник”.
const week = {
  1: "Понедельник",
  2: "Вторник",
  3: "Среда",
  4: "Четверг",
  5: "Пятница",
  6: "Суббота",
  7: "Воскресенье",
};
console.log(week[2]);

// 2. Создайте объект user с ключами 'name', 'surname', 'age'. Выведите в консоль
// фамилию, имя и возраст одной строкой.
const user = {
  name: "Василий",
  surname: "Горулев",
  age: 30,
};
console.log(
  `Имя ${user.name}, Фамилия ${user.surname}, Возраст ${user.age} лет.`
);

// 3. Добавьте в объект user свойство отчество, которое пользователь должен
// ввести с клавиатуры.
user.patronymic = prompt("Введите отчество");
console.log(user);

// 4. Удалите свойство surname.
delete user.surname;
console.log(user); */

/* // Задание 2:

// 1. Создайте два массива: первый с названиями дней недели, а второй - с их
// порядковыми номерами:
// `['пн', 'вт', 'ср', 'чт', 'пт', 'сб', 'вс']`
// `[1, 2, 3, 4, 5, 6, 7]`

// 2. С помощью цикла создайте объект, ключами которого будут названия дней,
// а значениями - их номера.
const weekString = ["пн", "вт", "ср", "чт", "пт", "сб", "вс"];
const weekNumber = [1, 2, 3, 4, 5, 6, 7];
const week = {};
for (let i = 0; i < weekString.length; i++) {
  week[weekString[i]] = weekNumber[i];
}
console.log(week);

// 3. Создайте объект: `{x: 1, y: 2, z: 3}`. Переберите этот объект циклом и
// возведите каждый элемент этого объекта в квадрат.
const object = {
  x: 1,
  y: 2,
  z: 3,
};

for (const key in object) {
  object[key] **= 2;
}
console.log(object); */

/* // Задание 3:

// const obj = {
//   key1: {
//     key1: 1,
//     key2: 2,
//     key3: 3,
//   },
//   key2: {
//     key1: 4,
//     key2: 5,
//     key3: 6,
//   },
//   key3: {
//     key1: 7,
//     key2: 8,
//     key3: 9,
//   },
// };

// Найдите сумму всех чисел, приведенного объекта.

const obj = {
  iodsuf: {
    asd: 1,
    zxc: {
      khvxc: {
        ncxvm: 9,
      },
    },
    qwd: 3,
  },
  gerg: {
    joij: {
      shdjk: 100,
    },
    kjn: 5,
    iyu: 6,
  },
  xcnkv: {
    oirje: 7,
    iuhdv: 8,
  },
  idb: 1000,
};

function summGet(object) {
  let sum = 0;
  for (const key in object) {
    if (typeof obj[key] === "number") {
      sum += obj[key];
    } else {
      sum += sum(obj[key]);
    }
  }
  return sum;
}

console.log(summGet(obj)); */

/* // Задание 4:

// 1. Создайте объект riddle.
// 2. Добавьте свойства question со значениями(текст загадки) и
// answer (ответ на загадку).

const riddle = {
  question: "Зимой и летом одним цветом",
  answer: ["ёлка", "ель", "елка"],
  hints: ["Это зеленое", "Это с иголками", "Это из царства растений"],
  askQuestion() {
    let userAnswer = prompt(
      `Введите ответ на загадку : ${this.question}`
    ).toLocaleLowerCase();
    if (this.answer.includes(userAnswer)) {
      alert("Поздравляем!");
      return;
    }
    for (let i = 0; i < this.hints.length; i++) {
      alert(`${this.hints[i]}`);
      userAnswer = prompt(
        `Введите ответ на загадку : ${this.question}`
      ).toLocaleLowerCase();
      if (this.answer.includes(userAnswer)) {
        alert("Поздравляем!");
        return;
      }
    }
    alert("Соболезнуем(");
  },
};

riddle.askQuestion();

// 3. Создайте метод askQuestion который спрашивает у пользователя вопрос
// question и сравнивает ответ с answer.
// В случае верного ответа, необходимо поздравить пользователя.
// В случае, если пользователь ответил неверно, необходимо подсказать,
// подсказок может быть несколько.
// Если пользователь ответил неверно после всех подсказок, то в консоль
// выводится текст: “вы проиграли”. */
