// Practice #5 Codewars - Reduce but Grow
// Diffiuilt Easiest
// https://www.codewars.com/kata/57f780909f7e8e3183000078/javascript

const grow  = (x) => x.reduce((acc, currentValue) => acc * currentValue, 1)
console.log(grow([1,2,3]))