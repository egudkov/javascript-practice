/*

Написать функцию compose.
Она последовательно применяет несколько функций следующим образом:

const square = (x) => x * x;
const times2 = (x) => x * 2;
const sum = (a, b) => a + b;

compose(square, times2)(x) === square(times2(x))
compose(square, times2, sum)(a, b) === square(times2(sum(a, b)))

*/

function compose(...funcs) {
  const funcArr = funcs.slice().reverse();

  return (...args) => {
    let result;

    funcArr.forEach((func, index) => {
      result = index === 0 ? func(...args) : func(result);
    });

    return result;
  };
}

const square = x => x * x;
const times2 = x => x * 2;
const sum = (a, b) => a + b;

console.log(compose(square, times2)(3));
console.log(compose(square, times2, sum)(2, 2));
