/*
Реализуйте и экспортируйте по умолчанию функцию для группировки объектов по заданному свойству.
Функция принимает аргументами массив объектов и название свойства для группировки.
Она должна возвращать объект, где ключ - это значение по заданному свойству,
а значение - массив с данными, подходящими для группы.

import groupBy from './groupBy.js';

const students = [
  { name: 'Tirion', class: 'B', mark: 3 },
  { name: 'Keit', class: 'A', mark: 3 },
  { name: 'Ramsey', class: 'A', mark: 4 },
];

groupBy([], ''); // {}

groupBy(students, 'mark');
// {
//   3: [
//     { name: "Tirion", class: "B", mark: 3 },
//     { name: "Keit", class: "A", mark: 3 },
//   ],
//   4: [
//     { name: "Ramsey", class: "A", mark: 4 },
//   ],
// }

Подсказки
Аналогичная функция есть в lodash, но вам её нужно создать самостоятельно
Алгоритм решения задачи с помощью цикла и редьюса одинаковый. Если вам так проще, сделайте сначала через цикл,
затем перепишите через reduce
Решение этой задачи аналогично решению задачи usersByAge из теории
* */

const students = [
  { name: 'Tirion', class: 'B', mark: 3 },
  { name: 'Keit', class: 'A', mark: 3 },
  { name: 'Ramsey', class: 'A', mark: 4 },
];

const groupBy = (arr, property) => arr.reduce((grouped, el) => {
    const groupingProperty = el[property];

    const group = grouped[groupingProperty] ?? [];

    // to create an object property from a variable, wrap it in brackets
    return { ...grouped, [groupingProperty] : [...group, el] };
  }, {});

const groupBy1 = (arr, property) => arr.reduce((grouped, el) => {
  const groupingProperty = el[property];

  if (Object.hasOwn(grouped, groupingProperty)) {
    grouped[groupingProperty] = [...grouped[groupingProperty], el];
  } else {
    grouped[groupingProperty] = [el];
  }

  return grouped;
}, {});

console.log(groupBy(students, 'mark'));
console.log(groupBy1([], ''));
