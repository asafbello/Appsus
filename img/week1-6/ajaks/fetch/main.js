console.log('bsd')

function setContact() {
    var prmData = fetch('http://www.filltext.com/?rows=10&fname=%7bfirstName%7d&lname=%7blastName%7d&tel=%7bphone|format%7d&address=%7bstreetAddress%7d&city=%7bcity%7d&state=%7busState|abbr%7d&zip=%7bzip%7d&pretty=true');
// var elData = document.querySelector('.contact');
var  strTxt;
    // This is called Promise chaining
    prmData
        .then(function (res) {
            return res.json();
        })
        .then(function (data) {
            data.forEach(function(element) {
                 console.log('Data is: ', element);
               strTxt += `<br>naeme: ${element.fname}<br>
               lname:${element.lname} <br> tel:${element.tel}<br>`
            }, this);

        document.querySelector('.contact').innerHTML = strTxt

        });
}

setContact()