/*
Задание 2: 
Мы создаем приложение. У нас планируется два вида пользователей, обычные и 
премиум. Общие свойства этих пользователей необходимо вынести в базовый класс.
 
1. Создайте базовый класс User с базовой информацией (имя и фамилия, которые 
должны создаваться при создании экземпляра класса).
2. Создайте классы PremiumUser и RegularUser, которые наследуются от User. Класс
PremiumUser должен иметь свойство premiumExpiration (дата истечения срока
действия премиум аккаунта, должно задаваться при создании объекта), а у 
RegularUser такого свойства нет.
3. Создайте функцию getAccountInfo(user), которая принимает объект класса User 
и возвращает информацию о наличии и сроке действия премиум-аккаунта. Необходимо
использовать instanceof для проверки типа переданного пользователя и дать 
соответствующий ответ из функции (в свободном формате).
*/
class User {
  constructor(firstName, lastName) {
    if (this.constructor === User) {
      throw new Error("Вы не можете создать экземпляр абстрактного класса User.");
    }
    this.firstName = firstName;
    this.lastName = lastName;
  }
}

class PremiumUser extends User {
  constructor(firstName, lastName, premiumExpiration) {
    super(firstName, lastName);
    this.premiumExpiration = premiumExpiration;
  }
}

class RegularUser extends User {}

function getAccountInfo(user) {
  if (user instanceof PremiumUser) {
    return `${user.firstName} ${user.lastName} - премиум аккаунт истекает: ${user.premiumExpiration}`;
  } else if (user instanceof RegularUser) {
    return `${user.firstName} ${user.lastName} - обычный аккаунт`;
  } else {
    return "Ошибка";
  }
}

const user = new PremiumUser("Dina", "Kuznetsova", "20.08.2025");
const user2 = new RegularUser("Dina", "Kuznetsova");
const getTypeAccount3 = getAccountInfo({});

const getTypeAccount = getAccountInfo(user);
const getTypeAccount2 = getAccountInfo(user2);

console.log(getTypeAccount);
console.log(getTypeAccount2);
console.log(getTypeAccount3);

const user3 = new User("Dina", "Petrova");
getTypeAccount3 = getAccountInfo(user3);
console.log(getTypeAccount3);