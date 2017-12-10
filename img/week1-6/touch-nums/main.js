console.log('hii')


var gNums = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16'];
shuffle(gNums);

var board = createBord(gNums);
renderBoard(board)

var gTime = 0;



function createBord(nums) {
    var mat = [];
    for (var i = 0; i < 4; i++) {
        var row = [];
        for (var j = 0; j < 4; j++) {
            var cell = gNums.pop();
            row.push(cell)
        }
        mat.push(row)
    }

    return mat
}
var f = 0;
var countNum = 1

function timer(status) {
    console.log('timer!!!!');
    var elTime = document.querySelector('#timer');
    var timeAdd = function () {
        gTime++;
        elTime.innerHTML = gTime;
    }
    f = setInterval(timeAdd, 100);
}


function numPressed(cell) {

    if (+cell.innerText === countNum) {
        cell.classList.add('cell');
        countNum++;
        timer();
    }
    if (countNum === 16) clearInterval(f);
}


function renderBoard(mat) {
    var elBoard = document.querySelector('#board');
    var strHtml = '';
    for (var i = 0; i < mat.length; i++) {
        var row = board[i];
        strHtml += '<tr>\n';
        for (var j = 0; j < row.length; j++) {
            var cell = row[j];
            strHtml += '\t<td onclick= numPressed(this)>'
            strHtml += cell;
            strHtml += ' </td>'
        }
        strHtml += '\n</tr>\n';

    }
    elBoard.innerHTML = strHtml;
    console.log(strHtml);
}
function shuffle(a) {
    var j, x, i;
    for (i = a.length - 1; i > 0; i--) {
        j = Math.floor(Math.random() * (i + 1));
        x = a[i];
        a[i] = a[j];
        a[j] = x;
    }
}



