// Practice #4 Codewars - Sum without highest and lowest number
// Difficuilt Easiest
// https://www.codewars.com/kata/576b93db1129fcf2200001e6/javascript


const sumArray = (array) => {
  if (!Array.isArray(array) || array.length <= 1) {
    return 0;
  }

  const total = array.reduce((acc, currentValue) => acc + currentValue, 0);
  const min = Math.min(...array);
  const max = Math.max(...array);

  return total - min - max;
};
console.log(sumArray([0, 1, 6, 10, 10]));
