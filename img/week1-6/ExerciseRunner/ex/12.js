// o Alert the user to think about some actor
// o Using the confirm function, ask the user 2 yes-no questions:
// ▪ Question 1: Male?
// ● Yes:
// o Question 2: Blond?
// ▪ Yes: Philip Seymour!
// ▪ No: Tom Cruise!
// ● No:
// o Question 2: English?
// ▪ Yes: Julianne Moore!
// ▪ No: Natalie Portman!

 alert('think about some actor');
var isMale = confirm('is it male?');
if (isMale) {
   var isBlond = confirm('Blond?') 
   if (isBlond) {
      console.log('Philip Seymour!'); 
   } else {
       console.log('Tom Cruise!');
   }
    
} else {
  var isEng = confirm(' English?');
    } if (isEng) {
        console.log('Julianne Moore!');
       }   else {
          console.log('Natalie Portman!'); 
       }


