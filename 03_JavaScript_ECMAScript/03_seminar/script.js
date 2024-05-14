// call и apply
/* const product = {
  name: "smartphone",
  price: 500,

  getDescription(discount) {
    const finalPrice = this.price - discount;
    return `Товар ${this.name} будет стоять ${finalPrice}`;
  },
};

function calculateDiscount(procent) {
    return (this.price * procent) / 100;
}

const productDisc = calculateDiscount.call(product, 30);
console.log(productDisc);

const productDisc2 = calculateDiscount.apply(product, [50]);
console.log(productDisc2);

const descriptionDiscount = product.getDescription.call(product, productDisc);
console.log(descriptionDiscount); */

// Задание 1 (тайминг 20 минут)
// Напишите функцию getPrototypeChain(obj), которая будет
// возвращать цепочку прототипов для заданного объекта
// obj. Функция должна вернуть массив прототипов, начиная
// от самого объекта и заканчивая глобальным объектом
// Object.prototype.
/* function getPrototypeChain(object) {
  const parents = [];

  while (object !== null) {
    parents.push(object);
    object = Object.getPrototypeOf(object);
  }
  return parents;
}

console.log(getPrototypeChain({ a: 1 })); */

// Задание 4 (Class 30 минут)
// Создайте класс Animal, который будет представлять животное. У
// класса Animal должны быть следующие свойства и методы:
// ● Свойство name (строка) - имя животного.
// ● Метод speak() - выводит в консоль звук, издаваемый животным.
// Создайте подкласс Dog, который наследует класс Animal. Для
// подкласса Dog добавьте дополнительное свойство и метод:
// ● Свойство breed (строка) - порода собаки.
// ● Метод fetch() - выводит в консоль сообщение "Собака [name] принесла мяч.".
/* class Animal {
    constructor (name) {
        this.name = name;
    };
    speak(){
        console.log(`${this.name} издаёт звук`);
    }
}

// Слово super вызывает переменную из родительского класса
class Dog extends Animal {
    constructor (name, breed){
        super(name);
        this.breed = breed;
    };
    fetch() {
        console.log(`Собака породы ${this.breed} по кличке ${this.name} принесла мяч`);
    }
}

const animalDog = new Animal('Rax');
animalDog.speak();

// const dog = new Dog(animalDog.name, "dog");
const dog = new Dog("Bobike", "dog");
dog.speak();
dog.fetch();

// const animal1 = new Animal("Животное");
// animal1.speak(); // Вывод: Животное издает звук.
// const dog1 = new Dog("Бобик", "Дворняжка");
// dog1.speak(); // Вывод: Животное Бобик издает звук.
// console.log(dog1.breed); // Вывод: Дворняжка
// dog1.fetch(); // Вывод: Собака Бобик принесла мяч. */

// Создать класс "Пользователь" с приватными полями "имя", "возраст" и "электронная почта".
// Класс должен иметь публичные методы "изменить имя", "изменить возраст"
// и "изменить электронную почту", которые будут изменять соответствующие поля объекта.
// Также класс должен иметь статическое поле "максимальный возраст",
// которое будет задавать максимально допустимый возраст для всех создаваемых объектов.
/* class User {
    #name;
    #age;
    #email;
    static #maxAge = 99;
    constructor(name, age, email) {
        this.#name = name;
        this.#age = age;
        this.#email = email;
        if (age > User.#maxAge) {
            throw new Error ("Возраст недопустим");
        }
    }
    setName(newName) {
        this.#name = newName;
    }
    setAge(newAge) {
        if (newAge > User.#maxAge) {
            throw new Error ("Возраст недопустим");
        }
        this.#age = newAge;
    }
    setEmail(newEmail) {
        this.#email = newEmail;
    }
    getInfo() {
        console.log(`Информация об: имя ${this.#name}, возраст ${this.#age}, почта ${this.#email}`);
    }
}

const vasya = new User('Vasya', 15, 'mail@mail.ru');
vasya.getInfo();
vasya.setAge(50);
vasya.getInfo();
// vasya.setAge(100);
vasya.getInfo();

const lena = new User('Лена', 150, "mail@mail.ru");
lena.getInfo(); */

// Создать класс "Товар" с приватными полями "название", "цена" и
// "количество". Класс должен иметь публичные методы "изменить цену",
// "изменить количество" и "получить стоимость",
// которые будут изменять соответствующие поля объекта и
// возвращать стоимость товара соответственно. Также класс
// должен иметь статическое поле "максимальное количество",
// которое будет задавать максимально допустимое количество
// товара для всех создаваемых объектов.
class Produst {
  #name;
  #price;
  #quantity;
  static #maxQuantity = 10;
  constructor(name, price, quantity) {
    this.#name = name;
    this.#price = price;
    if (quantity > Produst.#maxQuantity) {
      throw new Error("Превышено допустимое количество");
    }
    this.#quantity = quantity;
  }

  /**
   * получить
   */
  get name() {
    return this.#name;
  }

  get price() {
    return this.#price;
  }

  get quantity() {
    return this.#quantity;
  }

  set newName(NewName) {
    this.#name = NewName;
  }

  /**
   * задать
   */
  set name (newName) {
    this.#name = newName;
  }
}

const phone = new Produst('iPhone', 10000, 3);
console.log(phone.name);
phone.newName = 'Sumsung';

console.log(phone.name);

phone.name = "Galaxy";
console.log(phone.name);