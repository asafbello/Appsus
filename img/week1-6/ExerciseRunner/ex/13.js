// o Keep a currentFloor variable, initialize it to 0
// o Ask the user which floor he needs
// o Validate its between -2 (parking) and 4
// o Update the currentFloor variable accordingly
// o If the user goes to 0 say 'Bye Bye'
// o If the user goes to parking output: 'Drive Safely'

var currentFloor = 0;
var askdFloor = +prompt('which floor you need?');
if (askdFloor >= -2 && askdFloor <= 4 ) {
currentFloor = askdFloor;
 if (askdFloor === 0 ) {
  console.log('Bye Bye');
 } else if (askdFloor === -2 ) {
     console.log('Drive Safely');

 }
}