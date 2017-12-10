'use strict';
console.log('41/40');

// 40. Write a function: getLoremIpsum(wordsCount) that return a
// sentence with made-up words (google for: lorem ipsum...)

function getLoremIpsum(wordsCount) {

    var LoremIpsum = ''
    for (var i = 0; i < wordsCount; i++) {
    
    LoremIpsum += ( '' + (getWord()))
    } 

return LoremIpsum    
}


function getWord() {
    var alphabet = 'abcdefghijklmnopqrstuvwxyz'
    var wordLengh = getRandomInt(3, 6);
    var b = 0;
    var word = '';
    for (var i = 0; i < wordLengh; i++) {
        getRandomInt(0, 25)
        word += (alphabet[getRandomInt(0, 25)])
    }
    return word
}
function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min
}
console.log( getLoremIpsum(5))