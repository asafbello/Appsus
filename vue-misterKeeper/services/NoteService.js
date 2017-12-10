// import HomePage from '../HomePage.js'

var notes = [
    {
        id: 101,
        title: 'not important',
        txt: 'secret pass a1secret food and ps4 game food od and ps4 game food and ps4 game food andod and ps4 game food and ps4 game food andand ps4 game food and ps4 game food and ps4 game food and ps4 game',
        img: null,
        color: 'red',
        priority: 'd',
        dateOfCreation: Date.now(),
        strDate: moment().format('MMMM Do YYYY, h:mm:ss a')
    },
    {
        id: 102,
        title: 'default',
        txt: 'food and ps4 gamesfood and ps4 game food and ps4 game food and ps4 game food and ps4 game food and ps4 game',
        img: null,
        color: 'red',
        priority: 'c',
        dateOfCreation: Date.now(),
        strDate: moment().format('MMMM Do YYYY, h:mm:ss a')
        
    },
    {
        id: 55,
        title: 'pretty importantfood and ps4 game food and ps4 game',
        txt: 'just checking',
        img: null,
        color: 'red',
        priority: 'b',
        dateOfCreation: Date.now(),
        strDate: moment().format('MMMM Do YYYY, h:mm:ss a')
        
    },
    {
        id: 12,
        title: 'very important',
        txt: 'lorem bla bla bla food and ps4 game food and ps4 game food and ps4 game food and ps4 game',
        img: null,
        color: 'red',
        priority: 'a',
        dateOfCreation: Date.now(),
        strDate: moment().format('MMMM Do YYYY, h:mm:ss a')
        
    },
    {
        id: 101,
        title: 'not important',
        txt: 'secret pass a1secret food and ps4 game food and ps4 game food and ps4 game food and ps4 game food and ps4 game',
        img: null,
        color: 'red',
        priority: 'd',
        dateOfCreation: Date.now(),
        strDate: moment().format('MMMM Do YYYY, h:mm:ss a')
        
    },
    {
        id: 102,
        title: 'default',
        txt: 'food and ps4 gamesfood and ps4 game food and ps4 game food and ps4 game food and ps4 game food and ps4 game',
        img: null,
        color: 'red',
        priority: 'c',
        dateOfCreation: Date.now(),
        strDate: moment().format('MMMM Do YYYY, h:mm:ss a')
        
    },
    {
        id: 55,
        title: 'pretty importantfood and ps4 game food and ps4 game',
        txt: 'just checking',
        img: null,
        color: 'red',
        priority: 'b',
        dateOfCreation: Date.now(),
        strDate: moment().format('MMMM Do YYYY, h:mm:ss a')
        
    },
    {
        id: 12,
        title: 'very important',
        txt: 'lorem bla bla bla food and ps4 game food and ps4 game food and ps4 game food and ps4 game',
        img: null,
        color: 'red',
        priority: 'a',
        dateOfCreation: Date.now(),
        strDate: moment().format('MMMM Do YYYY, h:mm:ss a')
        
    }
]


function compare(a, b) {
    if (a.priority < b.priority)
        return -1;
    if (a.priority > b.priority)
        return 1;
    return 0;
}

function sortByPriority() {
    notes = notes.sort(compare);
}

function compareByDate(a, b) {
    if (a.dateOfCreation < b.dateOfCreation)
        return 1;
    if (a.dateOfCreation > b.dateOfCreation)
        return -1;
    return 0;
}

function sortByDate() {
    notes = notes.sort(compareByDate);
}

function emptyNote() {
    return { title: '', txt: '', dateOfCreation: Date.now(), priority: '', color: null, strDate: moment().format('MMMM Do YYYY, h:mm:ss a') }
}

function getColor(priority) {
    switch (priority) {

    }
}

function _getNextId() {
    var maxId = notes.reduce((acc, note) => {
        return (note.id > acc) ? note.id : acc
    }, 0);
    return maxId + 1;
}


function getNotes() {
    return new Promise((resolve, reject) => {
        setTimeout(() => { resolve(notes) }, 500)
    });
}

function saveNote(note) {
    return new Promise((resolve, reject) => {
        if (note.id) {
            var noteToUpdateIdx = notes.findIndex(currNote => currNote.id === note.id)
            notes.splice(noteToUpdateIdx, 1, note);
        } else {
            note.id = _getNextId();
            notes.unshift(note);
        }

        resolve(note)
    });
}

function deleteNote(noteId) {
    return new Promise((resolve, reject) => {
        var noteIdx = notes.findIndex(note => note.id === noteId)
        notes.splice(noteIdx, 1);
        resolve(notes);
    });
}


function getNoteById(noteid) {
    return new Promise((resolve, reject) => {
        var foundNote = notes.find(note => note.id === noteid)
        if (foundNote) resolve(foundNote)
        else reject();
    })
}

export default {
    getNotes,
    saveNote,
    deleteNote,
    emptyNote,
    getNoteById,
    sortByPriority,
    sortByDate,
    getColor
}