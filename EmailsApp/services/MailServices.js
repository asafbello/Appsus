
var mailsCopy = [];
var mails = [
    {
        id: 101,
        subject: 'invite to party',
        body: 'Exclusive: After Deadline this week revealed that Quentin Tarantino pitched a Star Trek film to JJ Abrams and Paramount, the whole thing is moving at warp speed. Tarantino met for hours in a writers room with Mark L. Smith, Lindsey Beer, and Drew Pearce. They kicked around ideas and one of them will get the job. I’m hearing the frontrunner is Smith, who wrote The Revenant. The film will most certainly go where no Star Trek has gone before: Tarantino has required it to be',
        isRead: false,
        sentAt: Date.now(),
        isActive: true
        
    },
    {
        id: 102,
        subject: 'recipe for dounts',
        body: 'secret pass a1secret food and ps4 game food and ps4 game food and ps4 game food and ps4 gameSmith is best known for writing the Alejandro Gonzalez Inarritu-directed The Revenant and subsequently overhauled Overlord, the WWII thriller that Abrams’ Bad Robot is producing for Paramount. Pearce’s script credits include Iron Man 3, Sherlock Holmes 3, Mission Impossible: Rogue Nation and the TV series Runaway TV; he just directed his script Hotel Artemis; Beer’s credits are mostly upcoming, and include the Doug Liman-directed Chaos Walking, as well as Godzilla Vs. Kong, Masters of the Universe, Barbarella and Dungeons and Dragons, all big scale stuff. food and ps4 game',
        isRead: false,
        sentAt: Date.now(),
        isActive: true
        
    },
    {
        id: 103,
        subject: 'Beitar Game',
        body: 'secret pass a1secret food and ps4They will lock one of the three quickly (if there is a front runner, it might be Smith), and the film will be scripted based on Tarantino’s idea while Tarantino is filming his next film about the Manson summer of 1969, which got set at Sony and has I, Tonya‘s Margot Robbie poised to play Sharon Tate, and Cruise, Leonardo DiCaprio and Brad Pitt all having met with the filmmaker about roles.ood and ps4 game',
        isRead: false,
        sentAt: Date.now(),
        isActive: true
        
    },
    {
        id: 104,
        subject: 'Movie',
        body: 'secret pass a1secret food and ps4 game food and ps4 game food and ps4 game food and ps4 game food and ps4 game',
        isRead: true,
        sentAt: Date.now(),
        isActive: true
        
    },
    {
        id: 105,
        subject: 'will lock one of the three quickly ',
        body: 'secret pass a1secret food and ps4They will lock one of the three quickly (if there is a front runner, it might be Smith), and the film will be scripted based on Tarantino’s idea while Tarantino is filming his next film about the Manson summer of 1969, which got set at Sony and has I, Tonya‘s Margot Robbie poised to play Sharon Tate, and Cruise, Leonardo DiCaprio and Brad Pitt all having met with the filmmaker about roles.ood and ps4 game',
        isRead: false,
        sentAt: Date.now(),
        isActive: true
        
    },
    {
        id: 106,
        subject: 'secret pass a1secret food and ps4They',
        body: 'secret pass a1secret food and ps4They will lock one of the three quickly (if there is a front runner, it might be Smith), and the film will be scripted based on Tarantino’s idea while Tarantino is filming his next film about the Manson summer of 1969, which got set at Sony and has I, Tonya‘s Margot Robbie poised to play Sharon Tate, and Cruise, Leonardo DiCaprio and Brad Pitt all having met with the filmmaker about roles.ood and ps4 game',
        isRead: false,
        sentAt: Date.now(),
        isActive: true
        
    },
    {
        id: 107,
        subject: 'film will be scripted based on Tarantino’s',
        body: 'secret pass a1secret food and ps4They will lock one of the three quickly (if there is a front runner, it might be Smith), and the film will be scripted based on Tarantino’s idea while Tarantino is filming his next film about the Manson summer of 1969, which got set at Sony and has I, Tonya‘s Margot Robbie poised to play Sharon Tate, and Cruise, Leonardo DiCaprio and Brad Pitt all having met with the filmmaker about roles.ood and ps4 game',
        isRead: false,
        sentAt: Date.now(),
        isActive: true
        
    },
    {
        id: 108,
        subject: 'will lock one of the three quickly',
        body: 'secret pass a1secret food and ps4They will lock one of the three quickly (if there is a front runner, it might be Smith), and the film will be scripted based on Tarantino’s idea while Tarantino is filming his next film about the Manson summer of 1969, which got set at Sony and has I, Tonya‘s Margot Robbie poised to play Sharon Tate, and Cruise, Leonardo DiCaprio and Brad Pitt all having met with the filmmaker about roles.ood and ps4 game',
        isRead: false,
        sentAt: Date.now(),
        isActive: true
        
    },
]

function getMails() {
    return new Promise((resolve, reject) => {
        setTimeout(() => { resolve(mails) }, 500)
    });
}

function getmailById(mailId) {
    return new Promise((resolve, reject) => {
        var foundMail = mails.find(mail => mail.id === mailId)
        if (foundMail) resolve(foundMail)
        else reject();
    })
}

function filterByTxt (searchedTerm) {
    mailsCopy = [];
    mails.forEach(mail => {
        if ((mail.subject.toLowerCase()).includes(searchedTerm)) {
            mailsCopy.push(mail)
        }})
    return Promise.resolve(mailsCopy);
} 

function deleteMail(mailId) {
    return new Promise((resolve, reject) => {
        var mailIdx = mails.findIndex(mail => mail.id === mailId)
        mails.splice(mailIdx, 1);
        resolve()
    });
}

function sortUnread () {
    mailsCopy = mails.filter(mail => !mail.isRead)
    return Promise.resolve(mailsCopy);
}

function sortRead () {
    mailsCopy = mails.filter(mail => mail.isRead)
    return Promise.resolve(mailsCopy);
}

 function compareByDate(a, b) {
    if (a.sentAt < b.sentAt)
        return 1;
    if (a.sentAt > b.sentAt)
        return -1;
    return 0;
}

function sortByDate() {
    mails = mails.sort(compareByDate);
}

function _getNextId() {
    var maxId = mails.reduce((acc, mail) => {
        return (mail.id > acc) ? mail.id : acc
    }, 0);
    return maxId + 1;
}


export default {
    getMails,
    getmailById,
    deleteMail,
    sortUnread,
    sortRead,
    sortByDate,
    _getNextId,
    filterByTxt
}