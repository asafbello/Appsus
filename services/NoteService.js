

var notes = [
    {
        id: 101,
        title: 'not important',
        txt: 'secret pass a1secret',
        img: null,
        color: 'red',
        priority: 'd',
        dateOfCreation: Date.now()
    },

]


function compare(a, b) {
    if (a.priority < b.priority)
        return -1;
    if (a.priority > b.priority)
        return 1;
    return 0;
}


function compareByDate(a, b) {
    if (a.dateOfCreation < b.dateOfCreation)
        return 1;
    if (a.dateOfCreation > b.dateOfCreation)
        return -1;
    return 0;
}



export default {
    getNotes,

}