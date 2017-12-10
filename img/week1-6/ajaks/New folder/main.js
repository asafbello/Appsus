console.log('fdsb')


function getChest() {

    axios.get('http://www.clashapi.xyz/api/chests')
        .then(function (res) {
            var sortChest = [];
            res.data.forEach(function (element) {
                if (element.gemCost > 0) {
                    sortChest.push(element)
                }
            }, this);
            sortChest.sort(function (a, b) {
                return a.gemCost - b.gemCost
            });
            console.log(sortChest)
            sortChest.forEach(function (element) {
                renderRes(element.idName);
            }, this);
            console.log(sortChest);
        })

}

function renderRes(rese) {
    var elput = document.querySelector(".chests");
    var a = rese.replace(/[-][\d]+/g, "")
    elput.innerHTML += `<img src="http://www.clashapi.xyz/images/chests/${a}.png" >`

    console.log(a);
}

getChest();