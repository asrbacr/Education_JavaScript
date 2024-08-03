/*
Задание 1: 
Давайте создадим класс для управления банковским счетом. В этом классе будет 
приватное свойство для хранения текущего баланса, а также методы для внесения 
и снятия денег со счета.
Необходимо реализовать класс BankAccount, в нем:
1. Приватное свойство #balance, которое инициализируется значением 0 и 
представляет собой текущий баланс счета.
2. Геттер balance, который позволит получить информацию о текущем балансе.
3. Метод deposit(amount), который позволит вносить средства на счет. 
Убедитесь, что сумма внесения не отрицательная, что значение является 
нормальным числом и дробная часть не превышает двух знаков, в противном случае 
выбрасывайте соответствующую ошибку.
4. Метод withdraw(amount), который позволит снимать средства со счета. 
Убедитесь, что сумма внесения не отрицательная, что значение является 
нормальным числом и дробная часть не превышает двух знаков, и сумма снятия 
не может превышать текущий баланс аккаунта в противном случае выбрасывайте 
соответствующую ошибку.
*/
/* class BankAccount {
  #balance = 0;

  get balance() {
    return this.#balance;
  }

  deposit(amount) {
    if (amount < 0 || !Number.isFinite(amount) || amount % 1 !== 0) {
      throw new Error("Invalid deposit amount");
    }
    this.#balance += amount;
  }

  withdraw(amount) {
    if (amount < 0 || !Number.isFinite(amount) || amount % 1 !== 0) {
      throw new Error("Invalid withdrawal amount");
    }
    if (amount > this.#balance) {
      throw new Error("Insufficient funds");
    }
    this.#balance -= amount;
  }
} */

class BankAccount {
  #balance = 0;

  getBalance() {
    return Math.round(this.#balance * 100) / 100;
  }

  deposit(amount) {
    this.#correctAmount(amount);
    this.#balance += amount;
  }
  
  withdraw(amount) {
    this.#correctAmount(amount);
    if (amount > this.#balance) {
      throw new Error("Недостаточно средств для снятия");
    }

    this.#balance -= amount;
  }

  #correctAmount(amount) {
    if (!Number.isFinite(amount)) {
      throw new Error("Сумма должна быть числом");
    }

    if (amount.toString().split(".")[1]?.length > 2) {
      throw new Error("Сумма должна иметь два знака после запятой");
    }

    if (amount <= 0) {
      throw new Error("Сумма не может быть отрицательной");
    }
  }
}

const account = new BankAccount();
account.deposit(400);
console.log(account.getBalance());

account.withdraw(200);
console.log(account.getBalance());
