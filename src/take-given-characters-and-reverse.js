/*
Реализуйте внутреннюю функцию takeLast(), которая возвращает последние n символов строки в обратном порядке.
Количество символов передаётся в takeLast() вторым параметром.
Если передаётся пустая строка или строка меньше необходимой длины, функция должна вернуть null.

Примеры
run('');       // null
run('cb');     // null
run('power');  // rewo
run('hexlet'); // telx
**/

const run = (text) => {
  const numOfChars = 4;
  function takeLast(str, n) {
    if (str === '' || str.length < n) return null;

    return str.slice(-n).split('').reverse().join('');
  }

  return takeLast(text, numOfChars);
};

console.log(run('power'));

export default run;
