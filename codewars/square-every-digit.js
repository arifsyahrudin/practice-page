// Practice #6 Codewars - Square Every Digit
// Difficuilt Easiest
// 

// Option 1
// const squareDigits = (num) => {
//   const changeNum = Array.from(String(num), Number);
//   const squareNum = changeNum.map((digit) => Math.pow(digit, 2));
//   return parseInt(squareNum.join(""));
// }


// Option 2
const squareDigits = num => parseInt(Array.from(String(num), Number).map(digit => Math.pow(digit, 2)).join(""))
  
console.log(squareDigits(3212));
