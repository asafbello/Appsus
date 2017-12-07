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
          <a class="is-active">all</a>
          <a>Read</a>
          <a>Unread</a>
          <a>Newest</a>
          <a>Oldest</a>
        </p>
        <a class="panel-block is-active"  v-for="mail in mails" :class="{boldSubject: !mail.isRead}"  @click="mail.isRead = true">
          <span class="panel-icon">
            <i class="fa fa-book"></i>
          </span>
          {{mail.subject}}
        </a>
     
    
        <mailDetails :mail="selectedMail" v-if="selectedMail"></mailDetails>
        <div class="panel-block">
        </div>
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
          console.log({idFromParams})
          if (idFromParams){
             MailServices.getmailById(idFromParams)
             .then(mail => {
               this.selectedMail = mail

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