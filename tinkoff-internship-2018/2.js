/*

Задача 2

Василиса в рамках курса по биоинформатике редактирует
последовательность ДНК волшебных существ. Последовательность
закодирована буквами английского алфавита, пробелом и
специальным символом @. Василиса ищет первое и последнее вхождение @
во всей данной последовательности, после чего проводит инверсию
(переворот) кусочка, оказавшегося между этими вхождениями
(гарантируется, что в последовательности есть хотя бы 2 символа @).
Какой результат получится у Василисы?

Входные данные:
Строка, состоящая из букв английского алфавита, пробелов и символов @,
длиной до 10 000 символов.

Результат работы:
Выведите ответ на задачу.

Примеры:

Входные данные:
one@live@not on evil@two

Результат работы:
one@live no ton@evil@two

*/

const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

process.stdin.on('end', () => {
  process.exit(0);
});

rl.on('line', inputStr => {
  const resultStr = inputStr.replace(/@.*@/, str => str.split('').reverse().join(''));

  console.log(resultStr);
});
