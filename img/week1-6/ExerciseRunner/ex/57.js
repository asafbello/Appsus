'use strict';
console.log('57');


// 57.Symmetric Matrix
// מטריצה סימטרית היא מטריצה שבה מתקיים: [.I,J]A=[J,I]A
// א. תן/י דוגמה למטריצה סימטרית בגודל .3 X 3
// ב. כתב/י פונקציה המחזירה אמת כאשר המטריצה היא סימטרית.

var matrix = [
    [0, 1, 2,],
    [1, 0, 1 ],
    [2, 3, 0]
]

console.table(matrix);

findSymmetricMat(matrix)


function findSymmetricMat(mat) {
   var isSymmetric = true;
    var halfMat = Math.ceil(mat.length/2);
    for (var i = 0; i < halfMat; i++) {
         var row = mat[i];
         for (var j = 0; j < row.length; j++) {
             if ( mat[i][j] !== mat[j][i] )
                 isSymmetric = false;
        }
    }
console.log(isSymmetric)


   // return isSymmetric
}
