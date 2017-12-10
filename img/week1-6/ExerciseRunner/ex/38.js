'use strict';
console.log('38/37');

// 37. Write a function: generatePass(passLength) that generates a
// password of a specified length. Password is made out of random singledigit
// numbers.

function generatePass(passLength) {
    
    var passLength = 5;
    var password = '';
    for (var i = 0; i < passLength; i++) {
        var a = (getRandomInt(0, 10))
        password += a
    }
    return password
}
function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min
}


console.log(generatePass(5));
