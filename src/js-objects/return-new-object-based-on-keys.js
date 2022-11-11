const data = {
  user: 'ubuntu',
  cores: 4,
  os: 'linux',
};

function pick(data, properties) {
  const result = {};

  const entries = Object.entries(data);

  for (const [key, value] of entries) {
    if (properties.some((property) => property === key)) {
      result[key] = value;
    }
  }

  return result;
}

// BEGIN
export default (data, keys) => {
  const result = {};

  for (const key of keys) {
    if (Object.hasOwn(data, key)) {
      result[key] = data[key];
    }
  }

  return result;
};
// END


console.log(pick(data, ['user']));
console.log(pick(data, ['user', 'os']));
console.log(pick(data, []));
console.log(pick(data, ['none', 'cores']));
