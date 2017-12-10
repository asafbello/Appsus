// 27.Write a program that generates 10 random numbers.
// The numbers should be generated so each number is greater than the ones
// generated before. To simplify, generate the first number n so it is between
// (0→1000), and each subsequent number will be in the range of ( n → n+1000)

var max = 0;
var min = 0;
var currNum = 0;

for (var i = 0; i < 10; i++) {
    max = (min + 1000)
    currNum = getRandomInt(min, max);
    min = currNum
    console.log(currNum);
}
function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
}
