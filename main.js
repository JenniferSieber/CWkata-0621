// KATA 1 
//  https://www.codewars.com/kata/57089707fe2d01529f00024a/train/javascript
function checkAlive (health) {
  return health > 0 ? true : false;
}
console.log(checkAlive(10))
console.log(checkAlive(0))
console.log(checkAlive(-10))

 //KATA 2
 // https://www.codewars.com/kata/5703c093022cd1aae90012c9/train/javascript
// const find = (a,e) => a.includes(e) ? a.indexOf(e) : 'Not found';
// console.log(find())

// KATA 3
// https://www.codewars.com/kata/59811fd8a070625d4c000013/train/javascript
function integrate(coefficient, exponent) {
  let exp = exponent + 1;
  let result = coefficient / exp;
  return `${result}x^${exp}`;
  
}
console.log(integrate(3,2)) // '1x^3'

// KATA 4
// https://www.codewars.com/kata/56f699cd9400f5b7d8000b55/train/javascript
function fixTheMeerkat(arr) {
  return arr.reverse()
 }

//KATA 5
// https://www.codewars.com/kata/54fdaa4a50f167b5c000005f/train/javascript
function getStatus(isBusy) {
  let msg = (isBusy ? "busy" : "available");
  return {
    status: msg
  };
}
// KATA 6
//  https://www.codewars.com/kata/582e0e592029ea10530009ce/train/javascript
function duckDuckGoose(players, goose) {
  return players[(goose - 1) % players.length].name;
}

// KATA 7 
// https://www.codewars.com/kata/56f695399400f5d9ef000af5/train/javascript

const correctTail = (x,y)=>x.endsWith(y)

console.log(correctTail('Fox', 'x'))
console.log(correctTail('Fox', 'z'))
  