
// 30.Read a number and

elNum = +prompt('number?')

// o Calculate sum of its digits.

function sumNum(num) {
    var sum = 0;
    var str = '' + num
    for (var i = 0; i < str.length; i++) {
        sum += (+str[i]);
    }
    return sum
}
//console.log(sumNum(elNum))

// o Calculate multiply of its digits.

function multiplyNum(num) {

    var multipl = 1;
    var str = '' + num
    for (var i = 0; i < str.length; i++) {
        multipl *= (+str[i]);
    }
    return multipl
}
//console.log(multiplyNum(elNum))

// o Print it with swapped first and last digits (2731 => 1732)

function swapNum(num) {

    var str = '' + num;
    var newSwap = '';

    newSwap += str[str.length - 1]
    for (var i = 1; i < (str.length - 1); i++) {
        newSwap += str[i];
    }
    newSwap += str[0]

    return newSwap
}
//console.log(swapNum(elNum))

// o Check if its symmetric (such as: 95459)

function itSymmetric(num) {
    var str = '' + num;

    for (var i = 0; i < str.length - 1; i++) {
        if (str[i] !== str[(str.length - i) - 1]) {
            return false;
        }
    }
    return true;
}
//console.log(itSymmetric(elNum))

// o Print its reverse (BONUS: as number not as string).

function doReverse(num) {

    var str = '' + num;
    var reversNum = ''

    for (var i = 0; i < str.length; i++) {
        reversNum += str[(str.length-1)-i]
    
    }
    return reversNum
}
//console.log(doReverse(elNum))

// o Sum its first and last digit.

function sumFirstLast(num) {
    
    var str = '' + num;
    var sumDigit = 0 ;
    sumDigit += parseInt(str[str.length - 1])
    sumDigit +=  parseInt(str[0])

    return sumDigit
}
// console.log(sumFirstLast(elNum))

// o Print if it's an Armstrong number.
// i.e. 371 is an Armstrong number:
// 33 + 73 + 13 = 371

function isArmstrongNum(num) {
    
    str = '' + num;
    var sumEx3 = 0;

    for (var i = 0; i < str.length; i++) {
        var a = parseInt(str[i])
        sumEx3 += Math.pow(a, 3)  
    }
    if (sumEx3 === num ) {
        return true
    }
    return false
} 
//console.log(isArmstrongNum(elNum))


// o Print if it's a perfect number.
// Perfect number is number that sum of all his dividers is the
// number itself.
// i.e. 6 is a perfect number (1 + 2 + 3).
// Now read a number: max and prints all Armstorng and Perfect
// positive numbers until max


function isPerfectNum(num) {

    var count = 1;
    var sum  = 0;

    while (sum <= num){

        sum += count
        if (sum === num) return true
        count++
    }
    return false 
}
console.log(isPerfectNum(elNum));



