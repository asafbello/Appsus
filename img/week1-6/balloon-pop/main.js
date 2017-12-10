
var gBalloons = createBaloons();
var elBallons = document.querySelectorAll('.baloon');
var audioright = new Audio('sound/right.mp3');


var time = setInterval(moveUp, 1000);

function moveUp() {
    for (var i = 0; i < elBallons.length; i++) {
        var elBallon = elBallons[i];
        gBalloon = gBalloons[i]
        gBalloon.bottom += gBalloon.speed;
        elBallon.style.backgroundColor = gBalloon.color
        elBallon.style.bottom = gBalloon.bottom + 'px'

    }
}

function popBalloon(bal) {
    // elBallon = document.querySelector()
    bal.classList.add('pop');
    audioright.play();
}

function createBaloons() {
    var baloons = [];
    var baloon1 = { color: 'red', bottom: 0, speed: 5 };
    var baloon2 = { color: '#2c704c', bottom: 0, speed: 8 };
    baloons.push(baloon1);
    baloons.push(baloon2);
    return baloons;
}

