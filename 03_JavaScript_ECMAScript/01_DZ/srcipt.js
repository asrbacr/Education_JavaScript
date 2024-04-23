// 1) Дан массив const arr = [1, 5, 7, 9] с помощью Math.min и spread оператора,
// найти минимальное число в массиве, решение задание должно состоять из одной строки
// const minNumber = (...array) => Math.min(array);
const minNumber = (array) => Math.min(...array);

// const arr = [1, 5, 7, 9];
// console.log(minNumber(arr));

// 2) Напишите функцию createCounter, которая создает счетчик
// и возвращает объект с двумя методами: increment и decrement.
// Метод increment должен увеличивать значение счетчика на 1,
// а метод decrement должен уменьшать значение счетчика на 1.
// Значение счетчика должно быть доступно только через методы объекта, а не напрямую.

/* не уверен правильно ли я понял задание. на семинаре мы принимали число на вход, 
а тут нет, но число нужно принять, потому что к чему же мы тогда 
будем добавлять или уменьшать значение. */
function createCounter() {
  return {
    increment(num) {
      return ++num;
    },
    decrement(num) {
      return --num;
    },
  };
}

// const numberTest = createCounter();
// console.log(numberTest.increment(20));
// console.log(numberTest.decrement(5));

// 3) Напишите рекурсивную функцию findElementByClass, которая принимает корневой элемент дерева DOM
// и название класса в качестве аргументов и возвращает первый найденный элемент с указанным классом в этом дереве.
// Пример
const rootElement = document.getElementById("root");
console.log(rootElement);
// console.log(targetElement);
function findElementByClass(elemId, className) {
  if (!elemId || !elemId.className) {
    return null;
  }

  // if (elemId.classList.contain(className)) elemId;
  if (elemId.classList.contains(className)) {
    return elemId;
  }

  const elemIdChildren = elemId.children;
  for (let i = 0; i < elemIdChildren.length; i++) {
    const foundEl = findElementByClass(elemIdChildren[i], className);
    if (foundEl) {
      return foundEl;
    }
  }
  return null;
}

const targetElement = findElementByClass(rootElement, "my-class");
console.log(targetElement);
