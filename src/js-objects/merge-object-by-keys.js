/*
Реализуйте и экспортируйте по умолчанию функцию, которая заполняет объект данными из другого объекта по разрешенному списку ключей. Параметры:

Исходный объект
Список ключей которые нужно заменить
Данные, которые нужно сливать в исходный объект
В случае, когда список ключей пустой, нужно сливать все данные полностью.



// Вызовы ниже нужно рассматривать как независимые

fill(company, ['name'], data);
// {
//   name: 'Hexlet',
//   state: 'moderating',
// }


// {
//   name: 'Hexlet',
//   state: 'published',
// }
*/

const company = {
  name: null,
  state: 'moderating',
};

const data = {
  name: 'Hexlet',
  state: 'published',
};

export default function fill(targetObj, keys, sourceObj) {
  if (keys.length === 0) return Object.assign(targetObj, sourceObj);

  // const objForMerge = keys.reduce((obj, key) => {
  //   if (Object.hasOwn(sourceObj, key)) {
  //     // const newObj = { ...obj };
  //     obj[key] = sourceObj[key];
  //     console.log(obj);
  //     return obj;
  //   }
  //   return obj;
  // }, {});

  function updateObj(obj, key) {
    if (Object.hasOwn(sourceObj, key)) {
      const newObj = { ...obj };
      newObj[key] = sourceObj[key];

      return newObj;
    }
    return obj;
  }

  const objForMerge = keys.reduce(updateObj, {});

  console.log(objForMerge);

  //
  // for (const key of keys) {
  //   if (Object.hasOwn(sourceObj, key)) {
  //     objForMerge[key] = sourceObj[key];
  //   }
  // }

  return Object.assign(targetObj, objForMerge);
}

console.log(fill(company, ['name', 'address'], data));
console.log(fill(company, [], data));
