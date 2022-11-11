import crc32 from 'crc-32';

/*
map.js
Реализуйте и экспортируйте набор функций, для работы со словарём, построенным на хеш-таблице. Для простоты, наша реализация не поддерживает разрешение коллизий.

По сути в этом задании надо реализовать объекты. По понятным причинам использовать объекты для создания объектов нельзя. Представьте что в языке объектов нет и мы их хотим добавить.

make() — создаёт новый словарь
set(map, key, value) — устанавливает в словарь значение по ключу. Работает и для создания и для изменения. Функция возвращает true, если удалось установить значение. При возникновении коллизии, функция никак не меняет словарь и возвращает false
get(map, key, defaultValue = null) — возвращает значение указанного ключа. Параметр defaultValue — значение, которое функция возвращает, если в словаре нет ключа (по умолчанию равно null). При возникновении коллизии функция также возвращает значение по умолчанию
Функции set() и get() принимают первым параметром словарь. Передача идёт по ссылке, поэтому set() может изменить его напрямую.

import { make, set, get } from './map.js';

const map = make();
let result = get(map, 'key');
console.log(result); // => null

result = get(map, 'key', 'default_value');
console.log(result); // => "default_value"

set(map, 'key2', 'value2');
result = get(map, 'key2');
console.log(result); // => "value2"
Подсказки
Для внутреннего представления словаря, используйте массив, где индекс содержит хеш записи, а значение — key и value (их можно упаковать в массив).
Коллизии возникают, когда хеш одинаковый, а ключи разные.
Документация crc-32
* */


const data = 'Hello, world!'; // Любые данные, которые мы хотим хешировать
const hash = crc32.str(data);

console.log(hash);

const index = Math.abs(hash) % 1000; // по модулю
console.log(index); // => 338

function hashIndex(key) {
  const hash = crc32.str(key);

  return Math.abs(hash) % 1000;
}

export const make = () => ([]);

const map = make();

const newKey = 'testKey';
let newValue = 'newValue'

export const set = (dict, key, value) => {
  if (dict[hashIndex(key)] !== undefined && dict[hashIndex(key)][0] !== key) return false;

  dict[hashIndex(key)] = [key, value];

  return true;
};

set(map, 'test', 'value');
set(map, newKey, newValue);

newValue = 'newNewValue';
set(map, newKey, newValue);

set(map, 'aaaaa0.462031558722291', '1');
set(map, 'aaaaa0.0585754039730588', '2');

export const get = (dict, key, defaultValue = null) => {
  if (dict[hashIndex(key)] === undefined) return defaultValue;

  const [extractedKey, extractedValue] = dict[hashIndex(key)];

  if (extractedKey !== key) return defaultValue;

  if (defaultValue && extractedValue !== defaultValue) return defaultValue;

  // console.log(dict[hashIndex(key)][1]);
  return extractedValue;
}

get(map, 'test');
get(map, 'aaaaa0.0585754039730588')
