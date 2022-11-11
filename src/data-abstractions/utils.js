const getGcd = (a, b) => {
    const remainder = a % b;
    // console.log('firstRemainder', remainder);

    if (remainder) {
        return getGcd(b, remainder);
    } else {
       return Math.abs(b);
    }
};

export default getGcd;
