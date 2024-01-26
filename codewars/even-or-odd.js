// Practise Codewars - Even or Odd
// Difficuilt Easiest
// https://www.codewars.com/kata/53da3dbb4a5168369a0000fe/solutions/javascript?filter=me&sort=oldest&invalids=false


// option 1 
/*function evenOrOdd(number) {
    if(number % 2 === 0) {
        return 'Even'
    } else {
        return 'Odd'
    }
}
console.log(evenOrOdd(0)) */


// option 2
const evenOrOdd = number => number % 2 === 0 ? "Even" : "Odd";
console.log(evenOrOdd(0))