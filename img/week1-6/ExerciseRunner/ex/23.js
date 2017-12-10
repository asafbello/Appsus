// 23.Write a function getAsterisks which gets a number, and returns a string
// containing asterisks according the number supplied.
// o Write a program that prints in the first line 1 asterisk, in the
// second 2 asterisk and so on until 10
// o After reaching a line with 10 asterisks, it goes backwards until
// a line with 1 asterisk
// o There is a new requirement to support any character (not
// necessarily asterisk), refactor your code, the character will be
// read from the user and be sent to the function.
// o Use Math.rand to generate a number between 1 and 10 and
// use it to draw asterisks rows at random lengths

 //PRT 1

//  function getAsterisks(num) {
//     var str = '*';
//     for (var i = 0; i < (num-1) ; i++) {
//     str += '*';
//     }
//     return str
//     }   
// var number = +prompt("number?");
// console.log(getAsterisks(number));

//PART 2
// var character = prompt('enter character');
// var exStr = 1

// for (var i  = 0; i  < 10; i ++) {
    
//     console.log(getAsterisks(exStr));  
//     exStr++

// }
// for (var i = 0; i < 10; i++) {
//     console.log(getAsterisks(exStr)); 
//     exStr = exStr-1 
// }
    

// function getAsterisks(num) {
//     var str = character ;
//     for (var i = 0; i < (num-1) ; i++) {
//     str += character;
//     }
//     return str    
// }

// last part!


 function getAsterisks(num) {
    var str = '*';
    for (var i = 0; i < (num-1) ; i++) {
    str += '*';
    }
    return str
}   

var number = Math.floor((Math.random() * 10) + 1);
console.log(getAsterisks(number));