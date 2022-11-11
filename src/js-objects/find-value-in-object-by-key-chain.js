const data = {
  user: 'ubuntu',
  hosts: {
    0: {
      name: 'web1',
    },
    1: {
      name: 'web2',
      null: 3,
      active: false,
    },
  },
};

export default function get(data, keys) {
  let counter = 0;
  let currValue = data;

  while(counter < keys.length) {
    const currKey = keys[counter];

    if (!Object.hasOwn(currValue, currKey)) return null;

    currValue = currValue[currKey];

    counter += 1;
  }

  return currValue;
}

/*export default function get(data, keys, currIndex = 0) {
  const counter = currIndex;
  const currKey = keys[counter];
  let currValue = data;

  if (counter >= keys.length) return currValue;

  if (!Object.hasOwn(currValue, currKey)) return null;

  currValue = currValue[currKey];

  return get(currValue, keys, counter + 1);
}*/

// BEGIN
export function simpleGet (data, keys) {
  let current = data;
  for (const key of keys) {
    const hasProperty = Object.hasOwn(current, key);
    if (!hasProperty) {
      return null;
    }
    current = current[key];
  }

  return current;
}
// END

console.log(get(data, ['undefined'])); // null
console.log(get(data, ['user'])); // 'ubuntu'
console.log(get(data, ['user', 'ubuntu'])); // null
console.log(get(data, ['hosts', 1, 'name'])); // 'web2'
console.log(get(data, ['hosts', 0])); // { name: 'web1' }
console.log(get(data, ['hosts', 1, null])); // 3
console.log(get(data, ['hosts', 1, 'active'])); // false
