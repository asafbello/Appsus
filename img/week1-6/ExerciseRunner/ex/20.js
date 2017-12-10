// 20.Read 10 numbers and print:
// o The maximum numbe
// o The minimum numbe
// o The average

var max = -Infinity;
var min = Infinity;
var average = 0;
var numPrev = 0;

for (var i = 0; i < 3; i++) {

    var newNum = +prompt('number?');
    if (newNum > max)  max = newNum;
    if (newNum < min)  min = newNum;
    

    numPrev = newNum;
    average += newNum;
}

    console.log('maximum number:', max);
    console.log('minimum number:', min);
    console.log('The average:',(average/3) );
