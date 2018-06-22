/*

Задача 2

Написать функцию-банкомат.
На вход принимает число - сколько нужно выдать денег.
Возвращает строку, в которой перечислены номиналы и количество купюр,
из которых сложится запрошенная сумма.

Доступные номиналы:
[5000, 1000, 500, 100, 50]

Выдавать нужно минимальное количество купюр.

Например:
6200 -> '5000x1 1000x1 100x2'

Количество купюр в банкомате ограничено.
После каждой выдачи нужно обновлять количество оставшихся купюр.

Если введённая сумма не валидна или невозможно выдать запрошенную сумму,
банкомат возвращает ошибку

Например:
5555 -> '!'

*/

const cashBalance = {
  5000: 10,
  1000: 20,
  500: 50,
  100: 35,
  50: 1
};

function cashDispenser(input) {
  if (input % 50 !== 0) {
    return 'Invalid input';
  }

  const outputObj = {};
  let remainder = input;

  const banknoteValues = Object.keys(cashBalance).sort((a, b) => b - a);

  banknoteValues.forEach(value => {
    outputObj[value] = Math.floor(remainder / value);

    // If there is not enough banknotes give what has left
    if (cashBalance[value] < outputObj[value]) {
      outputObj[value] = cashBalance[value];
    }
    remainder -= value * outputObj[value];
  });

  // Return error, do not update cash balance
  if (remainder > 0) {
    return 'Not enough banknotes left';
  }

  const outputValues = banknoteValues.filter(value => outputObj[value] !== 0);

  // Enough money - update cash balance
  outputValues.forEach(value => {
    cashBalance[value] -= outputObj[value];
  });

  return outputValues.map(value => `${value}x${outputObj[value]}`).join(' ');
}

console.log(cashDispenser(6200)); // 5000x1 1000x1 100x2
console.log(cashDispenser(40)); // Invalid input
console.log(cashDispenser(50)); // 50x1
console.log(cashDispenser(50)); // Not enough banknotes left
console.log(cashDispenser(1000)); // 1000x1
console.log(cashDispenser(333)); // Invalid input
console.log(cashDispenser(100000000000)); // Not enough banknotes left
