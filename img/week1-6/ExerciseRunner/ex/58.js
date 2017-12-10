'use strict';
console.log('58');


// 58.Bingo
// ערב בינגו חילקו טפסים המכילים  25מספרים אקראיים בין  1ל- .99
// הכנס/י ערכים אקראיים לשני טפסים שחולקו במסיבה והצג את הטפסים.
// שים לב שעליך לדאוג שמספר מסויים לא יופיע יותר מפעם אחת.
// כתב/י תוכנית שמדמה את רשימת המספרים שהוגרלו במסיבה עד לקבלת טופס מנצח ראשון.
// העזר ב setIntervalשייצר את המספרים בכל שניה. שים לב שמספר שכבר הוקרא לא יוקרא בשנית.
// ניצחון קורה כאשר כל המספרים בלוח הוקראו, הדפס את שם המנצח.
// כמו כן, יש להדפיס קריאות שמחה כאשר:
//  .1משתתף הצליח למלא שורה: יש! שורה!
//  .2משתתף הצליח למלא אלכסון ראשי: הידד, אלכסון ראשי!
//  .3משתתף הצליח למלא אלכסון משני: נהדר, אלכסון משני

var gPlayers = [
    { name: 'player1', hitsCount: 0, form: creatBingoBoard() },
    { name: 'player2', hitsCount: 0, form: creatBingoBoard() }
];
var gNumsToCall = numsGenerator();



function creatBingoBoard() {

    var mat = [];
    var nums = [];
    for (var i = 0; i < 99; i++) {
        nums.push(i)
    }

    for (var i = 0; i < 5; i++) {
        var row = [];
        for (var j = 0; j < 5; j++) {
            var max = nums.length
            var randIdx = Math.floor(Math.random() * nums.length);
            var choseNum = nums.splice(randIdx, 1)[0];

            row.push({ value: choseNum, isHit: false })
            //nums.splice(choseNum, 1)
        }
        mat.push(row)
    }
    return mat
}



function numsGenerator() {

    var nums = [];
    for (var i = 1; i <= 100; i++) {
        nums.push(i)
    }
    return nums
}

function fetchNum() {
    var randIdx = Math.floor(Math.random() * gNumsToCall.length);
    var choseNum = gNumsToCall.splice(randIdx, 1)[0];
    return choseNum
}

var int = setInterval(playBingo, 10);


function playBingo() {

    var isGameOn = true;
    var calledNum = fetchNum();
    console.log('num right now is' + calledNum)

    for (var i = 0; i < gPlayers.length; i++) {
        markHit(calledNum, i)
        isGameOn = checkBingo(i)
    }
}    

function checkBingo(player) {
    if (gPlayers[player].hitsCount > 24) {
        console.log('game Finshied')
        console.log('scorr:', gPlayers)
        clearInterval(int)
        return false
    }
    return true
}

function markHit(chosenum, player) {

    for (var i = 0; i < 5; i++) {
        var row = gPlayers[player].form[i];

        for (var j = 0; j < 5; j++) {
            var item = row[j].value;

            if (item === chosenum) {
                row[j].isHit = true
                gPlayers[player].hitsCount++
                var t = getRowStatus(row);
                if (t) console.log('finish row:', row[i])
                var matrix = gPlayers[player].form
                var k = getDiagonalsStatus(matrix)
                if (k) console.log('finish Diagonals:', matrix)

            }
        }
    }
}


function getRowStatus(row) {
    var rowIsComplete = true
    for (var i = 0; i < row.length && rowIsComplete; i++) {
        if (!row[i].isHit) rowIsComplete = false
    }
    return rowIsComplete
}


function getDiagonalsStatus(mat) {
    var diagonalsIsComplete1 = true

    for (var i = 0; i < mat.length && diagonalsIsComplete1; i++) {
        var cell = mat[i][i];
        if (!cell) diagonalsIsComplete1 = false
    }

    var diagonalsIsComplete2 = true
    for (var j = (mat.length - 1); j > 0; j--) {
        var cell2 = mat[j][j];
        if (!cell2) diagonalsIsComplete2 = false
    }

    if (diagonalsIsComplete1) return diagonalsIsComplete1
    if (diagonalsIsComplete2) return diagonalsIsComplete2

}


playBingo()
