

import MailServices from '../services/MailServices.js'


export default {
    template: `
        <section >
       
            <article class="message">
            <div class="message-header">
            <h1>{{mail.subject}}</h1>
              <button class="delete" aria-label="delete"></button>
            </div>
            <div class="message-body">
             {{mail.body}}
            </div>
          </article>
            
        </section>
    `,
 
    props: ['mail']
}