// Задание 1: ""Управление библиотекой книг""

// Реализуйте объект Book, представляющий книгу, со следующими свойствами и методами:

// Свойство title (название) - строка, название книги.
// Свойство author (автор) - строка, имя автора книги.
// Свойство pages (количество страниц) - число, количество страниц в книге.
// Метод displayInfo() - выводит информацию о книге (название, автор и количество страниц).

/**
 * Класс книга. Применяется для создания экземпляра объекта книги.
 * @param {string} title - Название книги
 * @param {string} author - Автор книги
 * @param {integer} pages - Количество страниц в книге
 *
 * @returns {string} - строка с названием книги, автором и кол-вом страниц.
 */
function Book(title, author, pages) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.displayInfo = function () {
    return `Книга "${this.title}" автор ${this.author}, ${this.pages} страниц`;
  };
}

const mirOfVar = new Book("Война и мир", "Л.Н. Толстой", "1274");
console.log(mirOfVar.displayInfo());

// Задание 2: ""Управление списком студентов""
// Реализуйте класс Student, представляющий студента, со следующими свойствами и методами:
//
// Свойство name (имя) - строка, имя студента.
// Свойство age (возраст) - число, возраст студента.
// Свойство grade (класс) - строка, класс, в котором учится студент.
// Метод displayInfo() - выводит информацию о студенте (имя, возраст и класс).

class Student {
    /**
     * Конструктор студент
     * @param {string} name - Имя
     * @param {integer} age - Возраст
     * @param {string} grade - Код класса
     */
  constructor(name, age, grade) {
    this.name = name;
    this.age = age;
    this.grade = grade;
  }

  /**
   * Метод вывода информации о студенте
   * @returns {string} Имя студента, класс обучения и кол-во лет.
   */
  displayInfo() {
    return `${this.name}, студент ${this.grade} класса, ${this.age} лет.`;
  }
}

const Ivan = new Student('Иван', 20, '01-ОС');
console.log(Ivan.displayInfo());