// 33.Read 2 names and print the longer one

var name1 = prompt('name1?');
var name2 = prompt('name2?');

var longestName = name1.length > name2.length ? name1 : name2;
console.log(longestName)   