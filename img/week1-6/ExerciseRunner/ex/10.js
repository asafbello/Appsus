'use strict';
console.log('Ex 10');

// 0.Ask the user how many friends he has on FB and print out an analysis:

var  friends = +prompt('enter how many friends do you have on fb?');

if ( friends > 500) {
console.log('OMG, celebrity!');
} else if ( friends > 300 &&  friends <= 500) {
   console.log('Well connected!');
}else if ( friends > 100) {
    console.log('Knows some people');
}else if ( friends < 100 && friends > 0 ) {
     console.log('Quite picky arent you');
} else if (friends === 0 ) {
console.log('Lets be friends');
}
    
