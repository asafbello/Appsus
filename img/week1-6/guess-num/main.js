
var secretNum = 35;

function guess() {
    var userGuess = +prompt('guess a  number!');
    var elAnswer = document.querySelector('.result');
   
   
    if (userGuess < secretNum) {
         elAnswer.innerText ='Too Low'
    }
    if (userGuess > secretNum) {
        elAnswer.innerText ='too high'
    }
    if (userGuess === secretNum) {
        elAnswer.innerText ='its right!!!!!!!!!!!!!!!!!!'
    }
}