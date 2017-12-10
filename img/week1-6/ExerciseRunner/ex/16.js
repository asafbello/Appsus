'use strict';
console.log('Ex 16');

// 16.Write a function isEven that gets a number, and returns true if the number is
// even otherwise false.

function isEven(num) {
    if (num % 2 === 0 ) {
         return true;
    } else {
         return false; 
    }
}

var elNum = +prompt('number?');
console.log(isEven(elNum));