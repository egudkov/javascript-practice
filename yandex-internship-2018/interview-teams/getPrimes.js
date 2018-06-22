/*

Написать функцию, которая возвращает n первых простых чисел.

Пример:

getPrimes(1) == [2]
getPrimes(2) == [2, 3]
getPrimes(5) == [2, 3, 5, 7, 11]

*/

function getPrimes(n) {
  let counter = 1;
  let currentNumber = 3;
  const primes = [2];

  while (counter < n) {
    let isPrime = true;

    for (let i = 0; i < primes.length; i++) {
      if (currentNumber % primes[i] === 0) {
        isPrime = false;
        break;
      }
    }

    if (isPrime) {
      primes.push(currentNumber);
      counter += 1;
    }

    // Все чётные числа не являются простыми т.к. делятся на 2
    // -> Проверяем только нечетные
    currentNumber += 2;
  }

  return primes;
}

console.log(getPrimes(1));
console.log(getPrimes(2));
console.log(getPrimes(5));
