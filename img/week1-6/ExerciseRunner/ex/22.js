// 22.Write the function myPow that gets 2 params: base, exp and returns the
// power.





function myPow(base,exp) {
   return Math.pow(base, exp);
    }

var base = +prompt('anter base:');
var exp = +prompt('enter exp:');
console.log(myPow(base,exp));        