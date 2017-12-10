"use strict";

console.log('bsd')

var tempBoard = buildBoard();
var gBoard = setMinesNegsCount(tempBoard);


var gLevel = {
    SIZE: 15,
    MINES: 2
};

var gState = {
    isGameOn: false,
    shownCount: 0,
    markedCount: 0,
    secsPassed: 0
};
var gTime = 0;

// gLevel.SIZE = +prompt('enter game size')

function lefClick(e) {


    var isRightMB;
    e = e || window.event;

    if ("which" in e)
        isRightMB = e.which == 3;
    else if ("button" in e)
        isRightMB = e.button == 2;

    console.log(e.path[0])
    if (isRightMB) {
        gState.markedCount++
        var pieceCoord = getCellCoord(e.path[0].id);
        var ii = pieceCoord.i
        var jj = pieceCoord.j
        var cell = gBoard[ii][jj]
        var selector = getSelector(pieceCoord);
        var elCell = document.querySelector(selector);
        elCell.classList.add('mark');
        gBoard[ii][jj] = false;
    }
}


function initGame() {
    renderBoard(gBoard);
    gState.isGameOn = true;
    var markedCountLeft ; 
   
    var elmarkedCount = document.querySelector('#timer');
}

function timer(status) {
    console.log('timer!!!!');
    var elTime = document.querySelector('#timer');
    var timeAdd = function () {
        gTime++;
        elTime.innerHTML = gTime;
    }
    gState.secsPassed = setInterval(timeAdd, 100);
}

function cellClicked(elCell) {
    if (gState.isGameOn) {
        if (gState.shownCount === 0) timer();

        var pieceCoord = getCellCoord(elCell.id);
        var ii = pieceCoord.i
        var jj = pieceCoord.j
        var cell = gBoard[ii][jj]
        console.log(cell)

        if (cell !== 11) {

            switch (cell) {
                case 0:
                    console.log('o')
                    elCell.classList.add('cell0');
                    expandShown(gBoard, elCell, ii, jj)
                    break;
                case true:
                    console.log('t')
                    elCell.classList.add('cellBomb');
                    endGame()
                    gState.shownCount++
                    break;
                default: console.log('num')
                    elCell.classList.add('cellNum');
                    elCell.innerText = cell;
                    gState.shownCount++

            }

            if (gState.shownCount === 225) clearInterval(gState.secsPassed);
            gBoard[ii][jj] = 11;
        }
        console.log('Count:', gState.shownCount)
    }
}

function endGame() {
    clearInterval(gState.secsPassed);
    gState.isGameOn = false;
    alert('game over')
    openCells()
}
function openCells() {
    for (var i = 0; i < gBoard.length; i++) {
        var row = gBoard[i];
        for (var j = 0; j < row.length; j++) {
            var cell = row[j];
            if (cell === true) {
                var coords = { 'i': i, 'j': j }
                var selector = getSelector(coords);
                var elCell = document.querySelector(selector);
                elCell.classList.add('cellBomb');

            }
        }

    }
}


function expandShown(board, elCell, i, j) {
    var cells = [];
    var cellI = i;
    var cellJ = j;

    for (var i = cellI - 2; i <= cellI + 2; i++) {
        if (i < 0 || i >= board.length) continue;
        for (var j = cellJ - 2; j <= cellJ + 2; j++) {
            if (j < 0 || j >= board[i].length) continue;
            if (i === cellI && j === cellJ) continue;
            if (board[i][j] >= 1) continue;
            if (board[i][j] < 1) {
                 gState.shownCount++
                var cellLoc = '-' + i + '-' + j
                cells.push(cellLoc);
            }
        }
    }
    var coords = [];
    for (var i = 0; i < cells.length; i++) {
        var element = cells[i];
        var cellLocation = getCellLoc(element);
        coords.push(cellLocation)
    }

    markCells(coords)

}

function markCells(coords) {
    for (var i = 0; i < coords.length; i++) {
        var coord = coords[i];
        var selector = getSelector(coord);
        var elCell = document.querySelector(selector);
        elCell.classList.add('cell0');
    }

}

function getSelector(coord) {
    return '#cell-' + coord.i + '-' + coord.j
}

function getCellLoc(strCellId) {
    var coord = {};
    coord.i = Math.abs(+strCellId.substring(0, strCellId.lastIndexOf('-')));
    coord.j = +strCellId.substring(strCellId.lastIndexOf('-') + 1);
    console.log('coord', coord);
    return coord;
}


function buildBoard() {
    var size =+prompt('enter board size');
    var board = [];
    for (var i = 0; i < size; i++) {
        board.push([]);
        for (var j = 0; j < size; j++) {
            board[i][j] = false;
            var rand = Math.random();
            if (rand > 0.8) {
                board[i][j] = true;
            }

        }
    }
    return board
    gLevel.SIZE = size;
    console.log(gLevel.SIZE)
    
}

function renderBoard(board) {
    var elBoard = document.querySelector('.gameBoard');
    var strHtml = '';
    for (var i = 0; i < board.length; i++) {
        var row = board[i];
        strHtml += '<tr>\n';
        for (var j = 0; j < row.length; j++) {
            // var cell = row[j];
            var tdId = 'cell-' + i + '-' + j;
            var cell = 'cell:' + row[j];
            // strHtml += '\t<td onclick= cellClicked(this) \>'
            // strHtml += cell;
            strHtml += '<td id="' + tdId + '" onclick="cellClicked(this)" oncontextmenu="lefClick(event)"  ' + cell
                + '</td>';
        }
        strHtml += '\n</tr>\n';

    }
    elBoard.innerHTML = strHtml;
}

function getCellCoord(strCellId) {
    var coord = {};
    coord.i = +strCellId.substring(5, strCellId.lastIndexOf('-'));
    coord.j = +strCellId.substring(strCellId.lastIndexOf('-') + 1);
    // console.log('coord', coord);
    return coord;
}




function countNegs(board, cellI, cellJ) {

    var count = 0;
    for (var i = cellI - 1; i <= cellI + 1; i++) {
        if (i < 0 || i >= board.length) continue;
        for (var j = cellJ - 1; j <= cellJ + 1; j++) {
            if (j < 0 || j >= board[i].length) continue;
            if (i === cellI && j === cellJ) continue;
            if (board[i][j] === true) count++;
        }
    }
    return count;
}

function setMinesNegsCount(board) {
    var newBord = board;
    for (var i = 0; i < board.length; i++) {
        var row = board[i];
        for (var j = 0; j < row.length; j++) {
            var cell = row[j];
            if (!cell) {

                //console.log('countNegs: ', countNegs(a, i, j))
                var bombCount = countNegs(board, i, j)
                newBord[i][j] = bombCount;
            }
        }

    }
    return newBord
}


