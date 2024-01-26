// Practice Codewars - Sum of Positive
// Difficuilt Easiest
// https://www.codewars.com/kata/5715eaedb436cf5606000381/javascript


/*const positiveSum = (arr) => {
  let result = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > 0) {
      result += arr[i];
    }
  }
  return result;
};*/

const positiveSum = arr => {
    return arr.reduce((accumulator, currentValue) => {
        return currentValue > 0 ? accumulator + currentValue : accumulator
    }, 0)

}
console.log(positiveSum([1,  2, 3, 4, 5]));
