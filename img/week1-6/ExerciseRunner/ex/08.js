'use strict';
console.log('Ex 8');

// 8. Read 3 numbers and print the smallest

var number1 = +prompt('emter  a number' );
var number2 =  +prompt('emter  a number' );
var number3 =  +prompt('emter a number' );

if (number1<number2 & number1<number3) {
    console.log(number1);
   }   else if (number2<number1 & number2<number3){
       console.log(number2);
   } else {
       console.log(number3);
   }

        

