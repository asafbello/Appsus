'use strict';
console.log('Ex 9');

// 9. Read 2 positive numbers and calculate the difference (absolute value)
// o if the diff is smaller from both values say that those numbers
// are relatively-close
// o Validate that you got numbers
// (hint: search for something like: javascript check if number

var number1 = +prompt('enter  a positive number' );
var number2 =  +prompt('enter  a positive number' );

if (isNaN(number1) || isNaN(number2)) {
    console.log('not a number');
   }   else  {
 var difference = Math.abs(number1 - number2);
    if (difference < number1 & difference < number2) {
    console.log('those numbers are relatively close');
    }
}

