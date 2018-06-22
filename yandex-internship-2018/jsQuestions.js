/**
 * Вопрос №1
 */

// Дан массив:
const arr = [
  { name: 'width', value: 10 },
  { name: 'height', value: 20 }
];

// Нужно из него получить объект: {width: 10, height: 20}

// Способ №1
const resultObj = {};

arr.forEach(obj => {
  resultObj[obj.name] = obj.value;
});

console.log(resultObj);

// Способ №2
const resultObj2 = arr.reduce((accumObj, obj) => {
  accumObj[obj.name] = obj.value;
  return accumObj;
}, {});

console.log(resultObj2);


/**
 * Вопрос №2
 */

// Что будет выведено на экран?
console.log(typeof (function () { })());

// Ответ - 'undefined' (строка)


/**
 * Вопрос №3
 */

// Что будет выведено на экран?
console.log(['1', 'z', '0', 2, true, false, {}, [], undefined, [0], ''].filter(Boolean));

// Ответ:
// ['1', 'z', '0', 2, true, {}, [], [0]]


/**
 * Вопрос №4
 */

// Есть массив:
const items = [1, 2];

// Напишите несколько способов, которыми можно добавить в этот массив
// ещё один элемент '3', чтобы получился массив [1, 2, 3]

// Ответ:
items.push(3);

// или:
items[items.length] = 3;

// Можно ещё так:
// items = items.concat([3]);
// но нужно тогда поменять const на let в объявлении items
