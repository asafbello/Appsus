'use strict';
console.log('Ex 6');

// 6. Read a, b, c from the user, (for example: 2, -5, 2)
// your output should be something like:
// 2x2– 5x + 2 = 0
// x1 = 2 ; x2 = 0.5
// For being able 

var a = +prompt('emter  a number' );
var b = +prompt('emter  a number' );
var c = +prompt('emter a number' );

console.log(a + 'x\u00b2','+', b + 'x', '+', c , '=' , '0' );
Math.sqrt(4)
var X1 =(-b + Math.sqrt( ((b*b)- (4*a*c))))/(2*a);
console.log( 'x1=', X1);
var X2 = (-b - Math.sqrt( ((b*b)- (4*a*c))))/(2*a);
console.log( 'x2=', X2);