
// 11.Rolling Project: BankSystem
// o Initialize a variable: currentBalance with the value: 1000
// o prompt for the user secret pin code and how much he would
// like to withdraw, and then print a nice message with the new
// balance.
// o Check that the secret pin code is '0796', if not, tell the user its
// wrong and don’t let him withdraw
// o Add feature: don’t let the user withdraw more than he has in
// the account

var  currentBalance = 1000 ;
var enterPincod = prompt('enter secret pin code');
var withdraw = +prompt('how much would you like to withdraw?');

if (enterPincod === '0796' && currentBalance > withdraw  ) {
  currentBalance = (currentBalance - withdraw);
       console.log('your new balance'+ currentBalance );
 } else if (enterPincod != '0796')   {
   console.log('worng cod');
 } 

  // } else if (enterPincod ==! '0796') {
  //    console.log('wrong code');
  // } else if ( currentBalance < withdraw) {
  //    console.log('to law');
  // }
 
