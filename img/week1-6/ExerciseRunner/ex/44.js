'use strict';
console.log('44/43');


// 43.Write a function sumArrays that gets 2 arrays and returns a sum array:
// a. For example, for: [1, 4, 3] [2, 5, 1, 9] it returns: [3, 9, 4, 9]
// TIP: this can be done in a single loop by first identifying the big and
// small arrays.


function sumArrays(array1, array2) {

    var sumArrays = [];
    var a = 0;

    if (array1.length > array2.length) {
        for (var j = array2.length; j < array1.length; j++) {
            array2.push(0);
        }
        for (var i = 0; i < array1.length; i++) {
            a += array1[i] + array2[i]
            sumArrays.push(a)
            a = 0;
        }
    } else {
        for (var j = array1.length; j < array2.length; j++) {
            array1.push(0);
        }
        for (var i = 0; i < array2.length; i++) {
            a += array1[i] + array2[i]
            sumArrays.push(a)
            a = 0;
        }
    }
    return sumArrays

}
console.log(sumArrays(getArrayFromUser(), getArrayFromUser()))

function getArrayFromUser() {

    var num = +prompt('numer?');
    var arrays = [];

    while (num < 999) {
        arrays.push(num)
        num = +prompt('numer?');
    }
    return arrays
}

