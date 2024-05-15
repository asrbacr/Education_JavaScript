// Домашнее задание
// Задание 1: ""Управление персоналом компании""

// Реализуйте класс Employee (сотрудник), который имеет следующие свойства и методы:

// Свойство name (имя) - строка, имя сотрудника.
// Метод displayInfo() - выводит информацию о сотруднике (имя).

class Employee {
  constructor(name) {
    this.name = name;
  }
  displayInfo() {
    return console.log(`Name: ${this.name}`);
  }
}

// Реализуйте класс Manager (менеджер), который наследует класс Employee и имеет дополнительное свойство и метод:
// Свойство department (отдел) - строка, отдел, в котором работает менеджер.
// Метод displayInfo() - переопределяет метод displayInfo() родительского класса и выводит информацию о менеджере (имя и отдел).
class Manager extends Employee {
  constructor(name, department) {
    super(name);
    this.department = department;
  }
  displayInfo() {
    return console.log(`Name: ${this.name}
Department: ${this.department}`);
  }
}

// // Пример использования классов
const employee = new Employee("John Smith");
employee.displayInfo();
// Вывод:
// Name: John Smith

const manager = new Manager("Jane Doe", "Sales");
manager.displayInfo();
// Вывод:
// Name: Jane Doe
// Department: Sales

console.log("----------------------");

// ""Управление списком заказов""

// Реализуйте класс Order (заказ), который имеет следующие свойства и методы:

// Свойство orderNumber (номер заказа) - число, уникальный номер заказа.
// Свойство products (продукты) - массив, содержащий список продуктов в заказе.
// Метод addProduct(product) - принимает объект product и добавляет его в список продуктов заказа.
// Метод getTotalPrice() - возвращает общую стоимость заказа, основанную на ценах продуктов.

// Пример использования класса
class Product {
  /**
   * Класс Продукт
   * @param {string} name - Название товара
   * @param {integer} price - Цена товара
   */
  constructor(name, price) {
    this.name = name;
    if (price <= 0) {
      throw new Error("Стоимость не может быть отрицательной или равной 0");
    }
    this.price = price;
  }
}

class Order extends Product {
  #sum;
  /**
   * Класс товар наследует класс Продукт
   * @param {string} name - Название продукта из класса Продукт
   * @param {integer} price - Стоимость продукта из класса Продукт
   * @param {integer} orderNumber - Номер заказа
   */
  constructor(name, price, orderNumber, sum = 0) {
    super(name, price);
    this.orderNumber = orderNumber;
    this.#sum = sum;
  }

  /**
   * Метод добавление Продукта к заказу
   * @param {string} Product - Название продукта
   */
  addProduct(Product) {
    this.#sum += Product.price;
  }

  /**
   * Вывод общей суммы заказа
   * @returns {integer}
   */
  getTotalPrice() {
    return `${this.#sum}`;
  }
}

const order = new Order(12345);
//
const product1 = new Product("Phone", 500);
order.addProduct(product1);
//
const product2 = new Product("Headphones", 100);
order.addProduct(product2);

console.log(order.getTotalPrice()); // Вывод: 600

console.log("----------------------");

// Управление животными в зоопарке
// Вы разрабатываете систему управления животными в зоопарке. Вам нужно создать класс ZooAnimal, который будет иметь следующие характеристики:

// Приватные поля:
// * #name: имя животного (строка).
// * #age: возраст животного (число).
// * #gender: пол животного (строка).
// Публичные методы:
// * constructor(name, age, gender): конструктор класса, который инициализирует поля #name, #age и #gender.
// * changeName(newName): изменяет имя животного на новое.
// * changeAge(newAge): изменяет возраст животного на новый.

// Статическое поле:
// * MAX_AGE: максимально допустимый возраст для всех создаваемых объектов (число).

class ZooAnimal {
  #name;
  #age;
  #gender;
  static MAX_AGE = Infinity;
  /**
   * Класс животное. создаёт 1-ого животного
   * @param {string} name - Название/Имя животного
   * @param {integer} age - Возраст животного (это может быть только не отрицательное число)
   * @param {string} gender - Пол животного
   */
  constructor(name, age, gender) {
    this.#name = name;
    if (typeof age === typeof ZooAnimal.MAX_AGE && age > 0) {
      this.#age = age;
    } else {
      throw new Error("Возраст может быть только не отрицательное число");
    }
    this.#gender = gender;
  }

  /**
   * Метод смены Названия/Имени
   * @param {string} newName - Принимает новое Название/Имя животного
   */
  changeName(newName) {
    this.#name = newName;
  }

  /**
   * Метод смены Возраста
   * @param {integer} newAge - Принимает новое значение возраста
   */
  changeAge(newAge) {
    if (typeof newAge === typeof ZooAnimal.MAX_AGE && newAge > 0) {
      this.#age = newAge;
    } else {
      throw new Error("Возраст может быть только не отрицательное число");
    }
  }

  get Info() {
    return `Объект: ${this.#name}, 
Возраст: ${this.#age} год(а)/лет,
Пол: ${this.#gender}.`;
  }
}

const mouse = new ZooAnimal("Мышка Нарушка", 23, "девочка");
// mouse.changeAge('0');
// mouse.changeAge(0);
mouse.changeAge(3);
console.log(mouse.Info);

// Ваша задача: реализовать класс ZooAnimal с указанными характеристиками. Убедитесь, что вы используете приватные поля и статическое поле в соответствии с описанием.
