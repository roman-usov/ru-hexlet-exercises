/*const response = {
  data: {
    type: 'photos',
    id: '550e8400-e29b-41d4-a716-446655440000',
    attributes: {
      title: 'Ember Hamster',
      src: 'http://example.com/images/productivity.png'
    },
    relationships: {
      author: {
        links: {
          related: 'http://example.com/articles/1/author'
        },
      },
    },
    links: {
      self: 'http://example.com/photos/550e8400-e29b-41d4-a716-446655440000'
    },
  },
};

const { links, attributes: user, relationships: { author } } = response.data;

console.log(links);
console.log(user);
console.log(author);*/

/*
Реализуйте и экспортируйте по умолчанию функцию, которая принимает на вход список пользователей,
извлекает их имена, сортирует в алфавитном порядке и возвращает отсортированный список имен.

const users = [
  { name: 'Bronn', gender: 'male', birthday: '1973-03-23' },
  { name: 'Reigar', gender: 'male', birthday: '1973-11-03' },
  { name: 'Eiegon', gender: 'male', birthday: '1963-11-03' },
  { name: 'Sansa', gender: 'female', birthday: '2012-11-03' },
];

getSortedNames(users); // ['Bronn', 'Eiegon', 'Reigar', 'Sansa']
Попробуйте использовать деструктуризацию для извлечения имени прямо в цикле.
* */

const users = [
  { name: 'Bronn', gender: 'male', birthday: '1973-03-23' },
  { name: 'Reigar', gender: 'male', birthday: '1973-11-03' },
  { name: 'Eiegon', gender: 'male', birthday: '1963-11-03' },
  { name: 'Sansa', gender: 'female', birthday: '2012-11-03' },
];

const userNames = (users) => users.map(({ name }) => name).sort();

console.log(userNames(users));
