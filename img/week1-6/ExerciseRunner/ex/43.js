'use strict';
console.log('43/42');

// 42.Write a function startWithS that gets an array of names and returns an
// array of names that start with S
// a. Refactor your function to work on any letter by adding a letter
// argument

function startWithS(names, letter) {
    var result = [];
    for (var i = 0; i < names.length; i++) {
        var firstInArr = names[i];
        if (firstInArr[0] === letter) {
            result.push(names[i])
        }
    }
    return result
}
console.log(startWithS(['anf', 'sbnf', 'sbn', 'dldld'], 's'));
