// 9. Write a function that prints a block of asterisks (*) by parameters: rows, cols
// ex: for 4,5.
// ******
// ******
// ******
// ******
// Now, print only the outline
// *****
// * *
// * *
// *****

//part 1:

// var numRows = +prompt('enter number of rows')
// var numCols = +prompt('enter numer of cols')
// var totalSterisks = ''

// for (var i = 0; i < (numRows); i++) {
//     totalSterisks += ('\n' + getAsterisks(numCols))
// }

// function getAsterisks(num) {
//     var str = '*';
//     for (var i = 0; i < (num - 1); i++) {
//         str += '*';
//     }
//     return str
// }
// console.log(totalSterisks)


// var str = '*';
// for (var i = 0; i < 3; i++) {
//     str += '\t';
// }
// str += '*';
// console.log(str)

//part 2:


var numRows = +prompt('enter number of rows')
var numCols = +prompt('enter numer of cols')
var totalSterisks = ''

totalSterisks += ('\n' + getAsterisks(numCols))

for (var i = 0; i < (numRows - 2); i++) {
    totalSterisks += ('\n' + getlesAsterisks(numCols - 1))
}

totalSterisks += ('\n' + getAsterisks(numCols))

function getlesAsterisks(num) {
    var str = '*';
    for (var i = 0; i < num; i++) {
        str += '\t';
    }
    str += '*';
    return str
}

function getAsterisks(num) {
    var str = '*';
    for (var i = 0; i < (num - 1); i++) {
        str += '\t' + '*';
    }
    return str
}
console.log(totalSterisks)


