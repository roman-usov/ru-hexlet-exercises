/*
Реализуйте и экспортируйте по умолчанию функцию, которая выполняет глубокое копирование объектов.

import cloneDeep from '../objects.js';

// result имеет такую же структуру, как и data
const result = cloneDeep(data);

// Но внутри другие объекты
result.key2 !== data.key2; // true
result.key2.innerKey !== data.key2.innerKey; // true

Для решения этой задачи, нужно последовательно обойти исходный объект и скопировать его данные в другой объект.
Если значением какого-то свойства является объект, то нужно рекурсивно запустить реализованную функцию.

Подсказки
Для рекурсивного запуска понадобится имя для функции
_.isObject()
Object.entries()
Рекурсия
Для реализации этой задачи нельзя использовать функцию cloneDeep() библиотеки lodash.

*/

const data = {
  name: 'Roman',
  address: {
    country: 'Russia',
    region: {
      city: 'Moscow',
    },
  },
};

export default function cloneDeep (data) {
  // console.log('entry data', data);
  const result = {};

  const entries = Object.entries(data);
  // console.log('entries', entries);

  for(const [key, value] of entries) {
      result[key] = typeof value === 'object' ? cloneDeep(value) : value;
  }
  return result;
}

const clonedData = cloneDeep(data);

console.log(clonedData);
console.log(clonedData.address.region === data.address.region);
