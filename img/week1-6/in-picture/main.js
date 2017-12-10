

var gCurrQuestIdx = 0
var gQuests = createQuests();


function createQuests() {
    return [
        { id: 1, opts: ['hipster', 'hasidic'], correctOptIndex: 1 },
        { id: 2, opts: ['hipster', 'hasidic'], correctOptIndex: 0 },
        { id: 3, opts: ['hipster', 'hasidic'], correctOptIndex: 0 }
    ]
}

function renderQuest(idx) {
    var opts = gQuests[idx].opts;

    for (var i = 0; i < opts.length; i++) {
        console.log()
        var opt = opts[i];
        var elOpt = document.querySelector('.opt' + (i + 1));
        elOpt.innerText = opt;
    }


    var elPic = document.querySelector('.picture');
    elPic.innerHTML = '<img src="pic/' + gQuests[idx].id + '.jpg"/>';
}

function initGame() {
    gQuests = createQuests();
    renderQuest(gCurrQuestIdx);

}

function optClicked(selctOpt) {

    if (gCurrQuestIdx === 3) {
        alert('game over sachi')
        return
    }
    if (selctOpt === gQuests[gCurrQuestIdx].correctOptIndex) {
        gCurrQuestIdx++
        renderQuest(gCurrQuestIdx)
    }
}












