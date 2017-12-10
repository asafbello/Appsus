'use strict';

var gQuestsTree;
var gCurrQuest;
var gPrevQuest = null;
var gLastRes = null;

$(document).ready(init);

function init() {
    gQuestsTree = createQuest('Male?');

    gQuestsTree.yes = createQuest('Gandhi');
    gQuestsTree.no = createQuest('Rita');

    gCurrQuest = gQuestsTree;
}

function startGuessing() {

    var $btn = $(".gameStart")
    $btn.hide();
    renderQuest();

}

function renderQuest() {

    $(".gameQuest").show();
    $(".question").text(gCurrQuest.txt);
}

function userResponse(res) {

    // If this node has no children
    if (gCurrQuest.yes === null) {
        if (res === 'yes') {
            alert('Yes, I knew it!');
            // TODO: improve UX
        } else {
            // alert('I dont know...teach me!')
            // TODO: hide and show gameNewQuest section
            $(".gameQuest").hide();
            $(".question").hide();
            $('.gameNewQuest').show();
        }
    } else {
        // TODO: update the prev, curr and res global vars

        if (res === 'yes') {
            gCurrQuest = gCurrQuest.yes
        } else {
            gCurrQuest = gCurrQuest.no
        }
        $(".question").text(gCurrQuest.text);
        renderQuest();
      
    }
}


function addGuess() {
    // TODO: create 2 new Quests based on the inputs' values
    // TODO: connect the 2 Quests to the quetsions tree

    //gCurrQuest
    var $newGuess = $('#newGuess');
    var $newQuest = $('#newQuest');
    gCurrQuest.no = createQuest(gCurrQuest.txt)
    gCurrQuest.txt = $newQuest.val()
    gCurrQuest.yes = createQuest($newGuess.val());


    // quest1.yes = quest2
    // gLastRes = quest1


    console.log('gQuestsTree:', gQuestsTree, 'gLastRes.yes:', gLastRes)
    restartGame();


}

function createQuest(txt) {
    return {
        txt: txt,
        yes: null,
        no: null
    }
}

function restartGame() {
    $('.gameNewQuest').hide();
    $('.gameStart').show();
    $('.question').show();
    gCurrQuest = gQuestsTree;
    gPrevQuest = null;
    gLastRes = null;

}