console.log('bsd')

var gNum1 = '';
var gNum2 = null;
var oper = false;
var  gres;



function addDigit(digit) {

    if (gNum2 === null) {
        var elDigit = digit.innerText
        gNum1 += elDigit;
        document.querySelector(".screen").innerHTML = gNum1;
    } else {
        var elDigit = digit.innerText
        gNum2 += elDigit;
        document.querySelector(".screen").innerHTML = gNum2.substring(1);
    }
}

function strCompu(op) {
    gNum2 = 0;
    oper = true;
    var a = op;
    console.log(a)
}

function result() {
    if (gNum1 && gNum2) {
        gres = parseInt(gNum1) + parseInt(gNum2)
        document.querySelector(".screen").innerHTML =  gres
    }
}
function nullify() {
    gNum1 = '';
    gNum2 = null;
    oper = false;
    document.querySelector(".screen").innerHTML = 0
}