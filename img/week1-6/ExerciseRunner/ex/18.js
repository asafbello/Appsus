// 18.Write a function: isOfAge that gets a name and an age, it the user is younger
// than eighteen, alert him that he is too young, this function also returns a
// boolean

function isOfAge(name,age) {
    if (age < 18) {
        alert('too young') 
        return false;
    } else {
        return true;
    }
}
var nameIn = prompt('name');
var ageIn = +prompt('age?');
console.log(isOfAge(ageIn));
  