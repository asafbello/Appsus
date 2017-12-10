// 35. Write the function encrypt that gets a string and encrypt it by
// replacing each character c with c+5 (i.e. 'r' will be replaced by: 'w')



function  encrypt(str) {
   var alphabet = 'abcdefghijklmnopqrstuvwxyz'
  
   var count = 0; 
   var encryptStr = [];

    for (var i = 0; i < alphabet.length; i++) {
        if (str[count] === alphabet[i]) {
          encryptStr.push(alphabet[i+5]) 
          count++ 
        }
    }
    return encryptStr.join('')
}

// console.log(encrypt('ght'))


// write a function to decrypt a message.


function  decrypt(str) {

   var alphabet = 'abcdefghijklmnopqrstuvwxyz'
  
   var count = 0; 
   var decryptStr = [];

    for (var i = 0; i < alphabet.length; i++) {
        if (str[count] === alphabet[i]) {
          decryptStr.push(alphabet[i-5]) 
          count++ 
        }
    }
    return decryptStr.join('')
}

console.log(decrypt('fghi'))



