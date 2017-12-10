'use strict';
console.log('51');


// o Create a monsters array with 4 monsters
// o Each monster should also have
//  id – a unique sequential number
//  name – read from user
//  power (random 1-100)
// o Write the function: findMostPowerful(monsters)
// o Write the function: breedMonsters(monster1, monster2)
// the function returns a new monster where power is an
// average, and name is a mix – half parent1, half parent2

var monster1 = {
    id: 1266,
    name: 'balbal',
    power: getRandomInt(1, 100)
}

var monster2 = {
    id: 1366,
    name: 'acac',
    power: getRandomInt(1, 100)
}
var monster3 = {
    id: 1466,
    name: 'avv',
    power: getRandomInt(1, 100)
}
var monster4 = {
    id: 1566,
    name: 'ass',
    power: getRandomInt(1, 100)
}

var monsters = [monster1, monster2, monster3, monster4];

// function findMostPowerful(monsters) {
//     var winnwer;
//     var maxPower = 0;
//     for (var i = 0; i < monsters.length; i++) {
//         var pow = monsters[i];
//         if (pow.power > maxPower) {
//             maxPower = pow.power
//             winnwer = monsters[i]
//         }
//     }
//     return winnwer
// }

function findMostPowerful(monsters) {
    var strongest = monsters[0];
    for (var i = 1; i < monsters.length; i++) {
        if (monsters[i].power > strongest.power)
            strongest = monsters[i];
    }
    return strongest;
}



function breedMonsters(monster1, monster2) {

    var babyMonster = {
        power: (monster1.power + monster2.power) / 2
    }
    var a = monster1.name;
    var halfName1 = a.substring(0, (a.length / 2));
    var b = monster2.name;
    var halfName2 = b.substring(0, (b.length / 2));
    var fullName = halfName2 + halfName1;

    var babyMonster = {
        power: (monster1.power + monster2.power) / 2,
        name: fullName
    }
    console.log(babyMonster)
}










function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
}

