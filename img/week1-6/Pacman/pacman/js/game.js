'use strict';

var WALL = '#';
var FOOD = '.';
var SOOPERFOOD = '*'
var EMPTY = ' ';

var gBoard;
var gState = {
  score: 0,
  isGameDone: false
};

function init() {
  gBoard = buildBoard();
  printMat(gBoard, '.boardContainer');
  console.table(gBoard);
  document.querySelector(".modelAlart").style.display = 'none';
}

function buildBoard() {
  var SIZE = 10;
  var board = [];
  for (var i = 0; i < SIZE; i++) {
    board.push([]);
    for (var j = 0; j < SIZE; j++) {
      board[i][j] = FOOD;

      if (i === 0 || i === SIZE - 1 ||
        j === 0 || j === SIZE - 1 ||
        (j == 3 && i > 4 && i < SIZE - 2)) {

        board[i][j] = WALL;
      }
    }
  }
  board[1][1] =  SOOPERFOOD;
  board[8][1] =  SOOPERFOOD;
  board[1][8] =  SOOPERFOOD;
  board[8][8] =  SOOPERFOOD;
  createPacman(board);
  createGhosts(board);
  return board;
}

// This function is called from both pacman and ghost to check engage
function checkEngage(cell, opponent) {
  if (cell === opponent) {
    // TODO: basic support for eating power-ball (which is not in the game yet)
    if (gPacman.isSuper) {
      console.log('Ghost is dead');
    } else {
      clearInterval(gIntervalGhosts);
      gState.isGameDone = true;
      // TODO: GameOver popup with a play again button
      document.querySelector(".modelAlart").style.display = 'flex';
      return true;
    
    
    }
  }
  return false;
}


// this function updates both the model and the dom for the score
function updateScore(value) {
  gState.score += value;
  document.querySelector('header > h3 > span').innerText = gState.score;
}

function renderCell(location, value, color) {
  var cellSelector = '.cell' + location.i + '-' + location.j;
  var elCell = document.querySelector(cellSelector);
  elCell.innerHTML = value;
  elCell.style.color = color;
 
}

