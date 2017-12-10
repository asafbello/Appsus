'use strict';
console.log('37/36');

// 36. Write a function that gets a comma ',' delimited string that consists
// of names. Ex: 'igal,moshe,haim'
// and returns who has the longest name, and the shortest name.
// Tip: use the split function to covert a string to an array

function findLongestName(str) {
    var arrayStr = str.split(',');
    var bigName = arrayStr[0];
    var smallName = arrayStr[0];

    for (var i = 0; i < arrayStr.length; i++) {
        if (arrayStr[i].length > bigName.length) {
            bigName = arrayStr[i];
        }

        if (arrayStr[i].length < smallName.length) {
            smallName = arrayStr[i];
        }
    }

   console.log(bigName, smallName)
}
findLongestName('igal,moshe,haim');