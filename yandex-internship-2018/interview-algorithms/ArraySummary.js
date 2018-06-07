/*

Задача 1

Написать функцию, которая преобразует массив в строку следуюшим образом:

[1, 4, 2, 3, 8, 5, 9, 11] -> '1-5,8-9,11'

Числа целые, положительные.

*/

function arraySummary(inputArr) {
  inputArr.sort((a, b) => a - b);

  let resultStr = `${inputArr[0]}`;
  // True if numbers go one by one: 1, 2, 3, ...
  let seqFlag = false;

  function transformer(elem, i, arr) {
    if (i === arr.length - 1) {
      if (seqFlag === true) {
        resultStr += `-${arr[i]}`;
      }

      return;
    }

    if (arr[i + 1] - arr[i] > 1) {
      if (seqFlag === true) {
        resultStr += `-${arr[i]}`;
      }
      resultStr += `,${arr[i + 1]}`;
      seqFlag = false;
    } else {
      seqFlag = true;
    }
  }

  inputArr.forEach(transformer);

  return resultStr;
}

console.log(arraySummary([1, 4, 2, 3, 8, 5, 9, 11])); // -> 1-5,8-9,11
console.log(arraySummary([1])); // -> 1
console.log(arraySummary([2, 1])); // -> 1-2
console.log(arraySummary([1, 5, 3, 10])); // -> 1,3,5,10
