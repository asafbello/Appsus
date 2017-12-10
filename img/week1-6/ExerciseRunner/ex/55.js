'use strict';
console.log('55');

// 55. Write a function findMode(mat) that will find and print the number
// that occurs most times in a 2d array.

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


function findMode(mat) {
    var mostComenNum = 0;
    var objectMap = {};

    for (var i = 0; i < mat.length; i++) {
        var row = mat[i];
        for (var j = 0; j <row.length; j++) {
            var item = row[j]
            if (objectMap[item]) {
                objectMap[item]++;
            } else {
                objectMap[item] = 1;
            }
        }

    }

    console.log(objectMap)

    for (var key in objectMap) {
        if (objectMap[key] > mostComenNum ) {
            mostComenNum = objectMap[key]

        }
    }

   
    
    console.log(mostComenNum)
}
findMode(a)









// var matAsObject = [];
// for (var i = 0; i < mat.length; i++) {
//     var row = mat[i];
//     var rowAsObject = {};
//     for (var j = 0; j < mat.length; j++) {
//        rowAsObject[j] = row[j]  
//     }
//     matAsObject.push(rowAsObject)
// }   





