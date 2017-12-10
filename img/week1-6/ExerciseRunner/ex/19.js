// 19.Read 10 numbers from the users and output "the number is even" if this is
// the case, else "the number is not even"


for (var i = 0; i < 2; i++) {
    var newNum = +prompt('number?');
    if (isEven(newNum)) {
        console.log('the number is even');
    } else {
        console.log("the number is not even");
    }

    } 
   
    function isEven(num) {
        return (num % 2 === 0);
    }

    //  if (num % 2 === 0 )
    //      return true;
    //   else 
    //      return false; 
    
