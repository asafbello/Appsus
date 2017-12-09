'use strict'

import MailServices from './services/MailServices.js'
import mailDetails from './cmps/mailDetails.js'
import NewMail from './cmps/NewMail.js'

export default {

  template: `
<section class="mails-homepage">
  <nav class="panel">
    <p class="panel-heading">
          My E-mails App <img src="https://png.icons8.com/postal/dusk/69/000000"><img src="https://png.icons8.com/plus/ultraviolet/30/000000" @click="openNewMail">
    </p>
      <div class="panel-block">
          <p class="control has-icons-left">
            <input class="input is-small" type="search" v-model="searchedTerm" @input="searchMail" placeholder="search">
            <span class="icon is-small is-left">
              <i class="fa fa-search"></i>
            </span>
          </p>
      </div>
        <p class="panel-tabs">
          <a class="is-active" @click="sortAll">all</a>
          <a @click="sortRead">Read</a>
          <a @click="sortUnread">Unread({{unReadIndicator}})</a>
          <a @click="sortByDate">Newest</a>   
        </p>
  <div class="panel-block-wrapper">
    <a class="panel-block is-active"  v-for="mail in mails" :class="{boldSubject: !mail.isRead}"  @click="readMail(mail.id)">
        <div class="subject-wrapper">
          <span class="panel">
            {{mail.subject}}
          </span>
      <div class="panel-icons">
          <i class="fa fa-envelope" aria-hidden="true" @click.stop="mail.isRead = !mail.isRead"></i>
        <span class="card-footer-item mail-item" @click="deleteMail(mail.id)">
          <span class="trash">
            <span></span>
            <i></i>
          </span>
        </span>
      </div>
    </div>
        <div :class="{ mobile: mail.isActive}" > <hr>{{mail.body}}</div>
    </a>
        </div>
  </nav>
        <mailDetails :mail="selectedMail" v-if="selectedMail" class="previewMail"></mailDetails>
        <new-mail v-if="isNewMailMode" @close="openNewMail" @sent="sendNewMail"></new-mail>        
</section>
    `,

  data() {
    return {
      mails: [],
      isRead: MailServices.isRead,
      selectedMail: null,
      isNewMailMode: false,
      searchedTerm: '',

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
    searchMail() {
      MailServices.filterByTxt(this.searchedTerm)
        .then(mails => {
          this.mails = mails
        })
    },

    sendNewMail(mail) {
      this.mails.unshift(mail)
      this.isNewMailMode = false;
    },

    openNewMail() {
      this.isNewMailMode = !this.isNewMailMode;
    },

    readMail(mailId) {
      MailServices.getmailById(mailId)
        .then(mail => {
          if (window.innerWidth < 768) {
            mail.isActive = !mail.isActive;
          }
          mail.isRead = true;
          this.selectedMail = mail;
          this.$router.push('/EmailsApp/' + mailId);
        });
    },

    deleteMail(mailId) {
      MailServices.deleteMail(mailId)
    },

    sortUnread() {
      MailServices.sortUnread()
        .then(mails => {
          this.mails = mails
        })
    },

    sortRead() {
      MailServices.sortRead()
        .then(mails => {
          this.mails = mails
        })
    },

    sortAll() {
      MailServices.getMails()
        .then(mails => {
          this.mails = mails
        })
    },

    sortByDate() {
      MailServices.sortByDate()
      console.log('newest')
    }
  },

  computed: {
    unReadIndicator() {
      return this.mails.filter(mail => !mail.isRead).length;
    }
  },

  components: {
    mailDetails,
    NewMail,
  }
}














