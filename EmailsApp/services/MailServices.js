

var mails = [
    {
        id: 101,
        subject: 'invite to party',
        body: 'secret pass a1secret food and ps4 game food and ps4 game food and ps4 game food and ps4 game food and ps4 game',
        isRead: false,
        sentAt: Date.now()
    },
    {
        id: 102,
        subject: 'recipe for dounts',
        body: 'secret pass a1secret food and ps4 game food and ps4 game food and ps4 game food and ps4 game food and ps4 game',
        isRead: false,
        sentAt: Date.now()
    },
    {
        id: 103,
        subject: 'Beitar Game',
        body: 'secret pass a1secret food and ps4 game food and ps4 game food and ps4 game food and ps4 game food and ps4 game',
        isRead: false,
        sentAt: Date.now()
    },
    {
        id: 104,
        subject: 'Movie',
        body: 'secret pass a1secret food and ps4 game food and ps4 game food and ps4 game food and ps4 game food and ps4 game',
        isRead: true,
        sentAt: Date.now()
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







export default {
    getMails,
    getmailById
    
}