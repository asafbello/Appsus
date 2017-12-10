// 34.read a string and print:

var str = prompt('name?');

// o Its length

console.log(str.length);

// o Its first and last chars


var first = str.substring(0,1)
var last  = str.substring(str.length-1)
console.log(first+last)

// o in uppercase and lowercase

var big = str.toUpperCase()
console.log(big)

console.log(big.toLowerCase())

