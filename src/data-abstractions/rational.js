import getGcd from './utils.js';

// BEGIN (write your solution here)

console.log(getGcd(4, 3));

// const isEven = (num) =>  !(num % 2);

const getNumer = (rationalNumber) => rationalNumber.numer;
const getDenom = (rationalNumber) => rationalNumber.denom;

const makeRational = (numerator, denominator) => {
    const numer = numerator / getGcd(numerator, denominator);
    const denom = denominator / getGcd(numerator, denominator);

    return {
        numer,
        denom,
    }
};

const rat = makeRational(2, 8);
console.log(rat);
console.log(getNumer(rat));
console.log(getDenom(rat));

const getCommonDenominator = (denom1, denom2) => denom1 * denom2;
const getNumerMultiplier = (rat, commonDenom) => commonDenom / getDenom(rat);

const add = (rat1, rat2) => {
    const commonDenom = getCommonDenominator(getDenom(rat1), getDenom(rat2));
    const numerSum = getNumer(rat1) * getNumerMultiplier(rat1, commonDenom) + getNumer(rat2) * getNumerMultiplier(rat2, commonDenom);

    return makeRational(numerSum, commonDenom);
};

const sub = (rat1, rat2) => {
    const commonDenom = getCommonDenominator(getDenom(rat1), getDenom(rat2));
    const numerSub = getNumer(rat1) * getNumerMultiplier(rat1, commonDenom) - getNumer(rat2) * getNumerMultiplier(rat2, commonDenom);

    return makeRational(numerSub, commonDenom);
};

const rat1 = makeRational(1, 2);
const rat2 = makeRational(1, 3);

console.log(add(rat1, rat2));
console.log(sub(rat1, rat2));

// END

const ratToString = (rat) => `${getNumer(rat)}/${getDenom(rat)}`;

// export {
//     makeRational,
//     getNumer,
//     getDenom,
//     add,
//     sub,
//     ratToString,
// };
