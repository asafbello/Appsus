// 21. Read numbers, until the number 999 is entered.
// For each number:
// o Print if it’s divided by 3
// o Print whether this num is much bigger (more than 10) than
// the previous number.
var  numPrev = 0;
var enterNum = +prompt('enter a number');

while (enterNum < 999) {
 if (enterNum % 3 === 0) console.log('it’s divided by 3');
 if ((enterNum-numPrev) > 10 ) console.log('it’s bigger then previos ');
 numPrev = enterNum
 var enterNum = +prompt('enter a number');
}
console.log('it’s to big');