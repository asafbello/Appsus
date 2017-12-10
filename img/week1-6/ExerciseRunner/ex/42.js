'use strict';
console.log('42/41');

// 41.Write a function sayNum(num) that prints each digit in words.
// For example:

function sayNum(num) {
    var strNum = '' + num
    var seyNum1 = []
    var verbalNum = ['One', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten']

    for (var i = 0; i < strNum.length; i++) {
        seyNum1.push(verbalNum[i])
    }
    return seyNum1
}
console.log(sayNum(123))