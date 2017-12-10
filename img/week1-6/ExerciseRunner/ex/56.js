'use strict';
console.log('56');

// 56.Write a function that gets a 2d array and checks if it is a magic
// square:

function isMagicSquare(mat) {
    var isit = true;


    return isit
}


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


function sumDiagonals(mat) {
    var sumDiagonal1 = 0;
    for (var i = 0; i < mat.length; i++) {
        var row1 = mat[i][i];
        sumDiagonal1 += row1
    }
    var sumDiagonal2 = 0
    for (var j = (mat.length - 1); j > 0; j--) {
        var row2 = mat[j][j];
        sumDiagonal2 += row2
    }

    if (sumDiagonal2 = sumDiagonal1) {
        return sumDiagonal1
    } else {
        return null
    }

}

function creatSumrowS(mat) {
    var sumRows = [];
    for (var i = 0; i < mat.length; i++) {
        var arrayrow = sumRow(mat, i)
        sumRows.push(arrayrow)
    }
    var equelrows = sumRows[1]
    for (var j = 1; j < sumRows.length; j++) {
        if (equelrows !== sumRows[j]) return null
    }
    return equelrows

}

function sumRow(mat, rowIdx) {
    var sumRow = 0;
    for (var i = 0; i < mat.length; i++) {
        var col = mat[rowIdx];
        sumRow += col[i]
    }
    return sumRow
}

function creatSumColS(mat) {
    var sumCols = [];
    for (var i = 0; i < mat.length; i++) {
        var arrayCol = sumCol(mat, i)
        sumCols.push(arrayCol)
    }
    var equelCols = sumCols[1]
    for (var j = 1; j < sumCols.length; j++) {
        if (equelCols !== sumCols[j]) return null
    }
    return equelCols
}

function sumCol(mat, colIdx) {
    var sumCol = 0;
    for (var i = 0; i < mat.length; i++) {
        var row = mat[i];
        sumCol += row[colIdx]
    }
    return sumCol
}


function isMagicSquare(mat) {

    if (sumDiagonals(mat) === creatSumColS(mat) === creatSumrowS(mat)) {
        console.log('its megic')

    }
    console.log('never maind')
}
isMagicSquare(a)

