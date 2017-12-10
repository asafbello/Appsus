// 32.Write A function that generates a random number between 0 and max
// (Parameter) Hint: Use Math.Random & Math.Floor
var elNum = +prompt('number?');

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
}
console.log(getRandomInt(0,elNum))
