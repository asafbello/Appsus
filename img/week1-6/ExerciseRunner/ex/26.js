// . Let the user guess a random number your program set, help the user by
// outputting Too Low or Too High.

var secretNum = 35;
var userGuess = +prompt('guess a  number!');

while (userGuess != secretNum ) {
    if (userGuess < secretNum) console.log('Too Low')
    if (userGuess > secretNum) console.log('too high')
    var userGuess = +prompt('guess a  number!');    
}
console.log('its right!!!!!!!!!!!!!!!!!!');