'use strict'

import MailServices from './services/MailServices.js'
import mailDetails from './cmps/mailDetails.js'

export default {

  template: `
        <section class="mails-homepage">
        <nav class="panel">
        <p class="panel-heading">
          My E-mails App
        </p>
        <div class="panel-block">
          <p class="control has-icons-left">
            <input class="input is-small" type="text" placeholder="search">
            <span class="icon is-small is-left">
              <i class="fa fa-search"></i>
            </span>
          </p>
        </div>
        <p class="panel-tabs">
          <a class="is-active" @click="sortAll">all</a>
          <a @click="sortRead">Read</a>
          <a @click="sortUnread">Unread</a>
          <a>Newest</a>
          <a>Oldest</a>
        </p>
        <a class="panel-block is-active"  v-for="mail in mails" :class="{boldSubject: !mail.isRead}"  @click="readMail(mail.id)">
          <span class="panel-icon">
          </span>
          
           {{mail.subject}}
           <button @click.stop="mail.isRead = !mail.isRead">
           <i class="fa fa-envelope" aria-hidden="true"></i></button>
          <a href="#" class="card-footer-item mail-item" @click="deleteMail(mail.id)"><i class="fa fa-trash" aria-hidden="true"></i> </a>
          
        </a>
     
    
        <div class="panel-block">
        </div>
        <mailDetails :mail="selectedMail" v-if="selectedMail" class="previewMail"></mailDetails>
      </nav>
                
        </section>
    `,

  // router: myRouter,
  data() {
    return {
      mails: [],
      isRead: MailServices.isRead,
      selectedMail: null
    }
  },
  created() {
    MailServices.getMails()
      .then(mails => {
        console.log(mails, 'mails')
        this.mails = mails
      })
      .catch(err => {
        this.mails = []
      })

    var idFromParams = +this.$route.params.id
    console.log({ idFromParams })
    if (idFromParams) {
      this.readMail(idFromParams);
    }
  },
  methods: {
    readMail(mailId) {
      console.log('readMail');
      MailServices.getmailById(mailId)
        .then(mail => {
          mail.isRead = true;
          this.selectedMail = mail
          this.$router.push('/EmailsApp/' + mailId);
        });
    },
    deleteMail(mailId) {
      MailServices. deleteMail(mailId)
    },
    sortUnread() {
      MailServices.sortUnread()
      MailServices.getCopyMails()
      .then(mails => {
        this.mails = mails
      })
    },
    sortRead() {
      MailServices.sortRead()
      MailServices.getCopyMails()
      .then(mails => {
        this.mails = mails
      })
    },
    sortAll() {
      MailServices.getMails()
      .then(mails => {
        this.mails = mails
      })
    }
  },
  components: {
    mailDetails,
  }
}















/* <section class="mails-homepage">
<nav class="panel">
<p class="panel-heading">
  My E-mails App
</p>
<div class="panel-block">
  <p class="control has-icons-left">
    <input class="input is-small" type="text" placeholder="search">
    <span class="icon is-small is-left">
      <i class="fa fa-search"></i>
    </span>
  </p>
</div>
<p class="panel-tabs">
  <a class="is-active">all</a>
  <a>Read</a>
  <a>Unread</a>
  <a>Newest</a>
  <a>Oldest</a>
</p>
<a class="panel-block is-active">
  <span class="panel-icon">
    <i class="fa fa-book"></i>
  </span>
  bulma
</a>


<div class="panel-block">

</div> */