/*
Задача 1

Арчибальд работает в колл-центре Tinkoff.ru. Он приходит на работу,
ищет свободный стол и садится за него.

Столы стоят в рядах и в рабках ряда пронумерованы: 1, 2 и тд. На
разных этажах ряды нумеруются с начала ряда или с его конца, так
исторически сложилось.

Сегодня утром Арчибальд отсчитал от начала ряда K столов, сел за
это рабочее место и обнаружил, что сидит за столом номер M. Он
решил, что по этим двум числам (K и M) можно определить, сколько
всего столов в ряду находится и попросил вас ему помочь.

Входные данные:
K и M (1 <= K,M <= 100)

Результат работы:
Одно число, количество столов в ряду. Если однозначно определить
нельзя, выведите 0.

Примеры:

Входные данные:
2 5

Результат работы:
6

*/

const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let numberOfTablesInRow = 0;

process.stdin.on('end', () => {
  process.exit(0);
});

rl.on('line', data => {
  const dataArr = data.split(' ');
  const k = parseInt(dataArr[0], 10);
  const m = parseInt(dataArr[1], 10);

  if (m === k) {
    numberOfTablesInRow = 0;
  } else {
    numberOfTablesInRow = m + k - 1;
  }

  console.log(numberOfTablesInRow);
});
