// Реализовать функцию round5, которой передается целое число, функция должна
// возвращать ближайшее целое число к тому что было передано, без остатка делящееся
// на 5.

function round5(val) {
  let modulIndex;
  let modulNumber;
  const roundNumber = 5; // Это значение делает функцию более уникальной,
  // можно вынести как параметр и получить более универсальную ф-цию
  const roundNumberHalf = Math.floor(roundNumber / 2);

  if (val < 0) {
    modulNumber = Math.abs(val);
    modulIndex = -1;
  } else {
    modulNumber = val;
    modulIndex = 1;
  }
  const number = modulNumber % roundNumber;

  if (number <= roundNumberHalf) {
    if ((modulNumber + number) % roundNumber === 0) {
      return (modulNumber + number) * modulIndex;
    } else {
      if (modulNumber - number === 0) {
        return 0;
      } else {
        return (modulNumber - number) * modulIndex;
      }
    }
  } else if (number > roundNumberHalf) {
    if ((modulNumber + (roundNumber - number)) % roundNumber === 0) {
      return (modulNumber + (roundNumber - number)) * modulIndex;
    } else {
      return (modulNumber - number) * modulIndex;
    }
  }


  // Я оставил код ниже, чтобы было понятно как я рассуждал.
  /*   switch (number) {
    case 1:
      if ((modulNumber + 1) % 5 === 0) {
        return (modulNumber + 1) * modulIndex;
      } else {
        if (modulNumber - 1 === 0) {
          return 0;
        } else {
          return (modulNumber - 1) * modulIndex;
        }
      }
    case 2:
      if ((modulNumber + 2) % 5 === 0) {
        return (modulNumber + 2) * modulIndex;
      } else {
        if (modulNumber - 2 === 0) {
          return 0;
        } else {
          return (modulNumber - 2) * modulIndex;
        }
      }
    case 3:
      if ((modulNumber + 2) % 5 === 0) {
        return (modulNumber + 2) * modulIndex;
      } else {
        return (modulNumber - 3) * modulIndex;
      }
    case 4:
      if ((modulNumber + 1) % 5 === 0) {
        return (modulNumber + 1) * modulIndex;
      } else {
        return (modulNumber - 4) * modulIndex;
      }
    default:
      return val;
  } */
}

console.log(round5(0)); // 0
console.log(round5(2)); // 0
console.log(round5(3)); // 5
console.log(round5(11)); // 10
console.log(round5(14)); // 15
console.log(round5(50)); // 50
console.log(round5(-2)); // 0
console.log(round5(-3)); // -5
