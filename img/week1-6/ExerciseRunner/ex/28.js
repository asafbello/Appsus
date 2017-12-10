// 28. Write a program to compute the greatest common divisor (GCD) of two
// positive integers.



var num1 = 15
var num2 = 45
var greatCommNum = 0

for (var i = 0; i < (num1+1); i++) {
    if ((num1 % i == 0) && (num2 % i == 0)) {
        greatCommNum = i
    }
}
console.log(greatCommNum);