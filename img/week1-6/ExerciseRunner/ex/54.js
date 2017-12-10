'use strict';
console.log('54');


// 54.Fill up a 2d array with random numbers in a specified range.
// Create the following functions:
//  sumCol(mat, colIdx)
//  sumRow(mat, rowIdx)
//  findMax(mat ,colIdx)
//  findAvg(mat)

function createMat(n) {

    var mat = [];
    for (var i = 0; i < n; i++) {
        var row = [];
        for (var j = 0; j < n; j++) {
            row.push(Math.floor(Math.random() * 20) + 1)
        }
        mat.push(row)
    }
    return mat
}
var a = createMat(5);
console.table(a)

//Math.floor(Math.random() * 20) + 1
function sumCol(mat, colIdx) {
    var sumCol = 0;
    for (var i = 0; i < mat.length; i++) {
        var row = mat[i];
        sumCol += row[colIdx]
    }
    console.log(sumCol)
}
// var b = sumCol(a, 1); console.table(a)
// console.log(b)

function sumRow(mat, rowIdx) {
    var sumRow = 0;
    for (var i = 0; i < mat.length; i++) {
        var col = mat[rowIdx];
        sumRow += col[i]
    }
    return sumRow
}
// var b = sumRow(a, 2);
// console.log(b)

function findMax(mat ,colIdx) {
    var max = 0;
    for (var i = 0; i < mat.length; i++) {
        var row = mat[i];
        if(row[colIdx] > max) max = row[colIdx]
    }
    return max
}
// var b = findMax(a, 2);
// console.log(b)

function findAvg(mat) {
     var sumMat = 0;
    for (var i = 0; i < mat.length; i++) {
        // var sumRow = 0;
        var row = mat[i];
        for (var j = 0; j < row.length; j++) {
           sumMat += row[j] 
        }
        // sumMat += sumRow
    }
    var n = (mat.length)*(mat.length) ;
   console.log(sumMat/n)
}
//findAvg(a)