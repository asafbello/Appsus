'use strict';
console.log('50');

// 50. Object as a Map - Write a function countWordApperances(txt) that
// return a map (object) in which the key is a word and the value is the
// count (how many times this word appeared in the text)


function countWordApperances(txt) {

    var wordCountMap = {}
    var words = txt.split(' ');
    for (var i = 0; i < words.length; i++) {
        var word = words[i];
        if (!wordCountMap[word]) {
            wordCountMap[word] = 0
        }
        wordCountMap[word]++
    }
    return wordCountMap
}

console.log(countWordApperances(' into a cocktail glaas cocktail cocktail a '))