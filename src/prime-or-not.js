const numbers = [2, 3, 19, 23, 47, 5, 7, 13];
const numbers1 = [49, 8, 4, 1, 0, -3, 9, 25];

const sayPrimeOrNot = (num) => {
  if (num <= 1) return false;

  for (let i = 2; i <= Math.sqrt(num); i += 1) {
    const remainder = num % i;

    if (!remainder) return false;
  }

  return true;
};

numbers.forEach((num, i) => {
  console.log(`num ${num}`, sayPrimeOrNot(num));
})

numbers1.forEach((num, i) => {
  console.log(`num ${num}`, sayPrimeOrNot(num));
})


console.log(sayPrimeOrNot(3));
