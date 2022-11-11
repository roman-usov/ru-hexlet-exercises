/*
smallestDivisor.js
Реализуйте тело функции smallestDivisor(), используя итеративный процесс. Функция должна находить наименьший делитель заданного числа.
Число, передаваемое в функцию, больше нуля.

Доп. условие: делитель должен быть больше единицы, за исключением случая, когда аргументом является единица (наименьшим делителем которой является также единица).

Например, наименьший делитель числа 15 это 3.

Идея алгоритма:

Попробуйте разделить число на 2
Если число делится без остатка, то это наименьший делитель
Если нет, то попробуйте следующий делитель
Если ничего не делит число без остатка, то переданное число является простым, так что его наименьший делитель — оно само (не считая 1)
Подсказки
Вспомните про оператор % (modulus или остаток от деления). Он вычисляет остаток от деления одного операнда на другой.
Например, 11 % 5 = 1, а 10 % 2 = 0. Так что если x % y это 0, то y делит x без остатка
* */

const smallestDivisor = (num, divisor = 3) => {
  if (num === 1 || num === divisor) return num;
  if (num % 2 === 0) return 2;
  if (num % divisor === 0) return divisor;
  const nextDivisor = divisor + 1;
  return  smallestDivisor(num, nextDivisor);
}

console.log(smallestDivisor(15)); // 3
console.log(smallestDivisor(17)); // 17
console.log(smallestDivisor(7)); // 7

const smallestDivisor1 = (num) => {
  const iter = (acc) => {
    // We use 'num / 2' in the condition below, and not 'num'.
    // This is a simple optimization: a number cannot be divided
    // by a number larger than its half.
    if (acc > num / 2) {
      return num;
    }
    if (num % acc === 0) {
      return acc;
    }
    return iter(acc + 1);
  };

  return iter(2);
}

console.log(smallestDivisor1(15)); // 3
console.log(smallestDivisor1(17)); // 17
console.log(smallestDivisor1(7)); // 7
