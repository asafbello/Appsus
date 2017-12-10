// 34. write a function myIndexOf(str, searchStr) that accepts 2 strings,
// and returns the location of the second string in the first, if not found
// return -1



function myIndexOf(str, searchStr) {
    var matchStr = 0;

    for (var i = 0; i < str.length; i++) {
        if (searchStr[0] === str[i]) {
            for (var j = 0; j < searchStr.length; j++) {
                if (searchStr[j] === str[i + j]) matchStr++
            }
            if (matchStr === searchStr.length) return i
        }
    }
}

console.log(myIndexOf('Manhattan is a cocktail made with whiskey,', 'made'))
