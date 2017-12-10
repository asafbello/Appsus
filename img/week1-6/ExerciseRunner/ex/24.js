// 24.Write the function factorial that gets a number n and return n!


var num = 1
var num2 = 1

function factorial(n){
    for (var i = 0; i < (n-1); i++) {
     num = num*(num2+1);  
     num2++ 
        
    }
    return num;
}
var elnum = prompt('enter number')
console.log(factorial(elnum));