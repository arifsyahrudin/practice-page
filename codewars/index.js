// const filter_list = (num) => num.filter(fill => typeof fill === 'number')
// console.log(filter_list([1,2,'a','b']),[1,2])

// const digitize = num => String(num).split('').reverse().map(digit => Number(digit));

// console.log(digitize(35231));

const past = (h, m, s) => (h * 3600 + m*60 + s )* 1000;
console.log(past(0, 1, 1));
