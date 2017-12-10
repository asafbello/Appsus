import MailServices from '../services/MailServices.js'


export default {
    template: `
<section>
     <div :class="{'is-active': test}">
        <div class="modal-background">
            <div class="modal-card">
                <header class="modal-card-head">
                    <p class="modal-card-title">Send a new mail</p>
                    <button class="delete" aria-label="close" @click="closeModal"></button>
                </header>
    <section class="modal-card-body">
        <!-- Content ... -->
        <div class="field">
            <label class="label">Name</label>
                <div class="control">
                    <input class="input" type="text" placeholder="Text input" v-model="subject">
                </div>
          </div>
    <div class="field">
            <span class="icon is-small is-left"></span>
            <span class="icon is-small is-right"></span>   
        <div class="field">
            <label class="label">Email</label>
        </div>
    </div>
        <div class="control has-icons-left has-icons-right">
                <input class="input is-danger" type="email" placeholder="Email input" value="hello@" v-model="to">
            <span class="icon is-small is-left">
                <i class="fa fa-envelope"></i>
            </span>
               <span class="icon is-small is-right"></span>
    <textarea class="textarea" placeholder="Your message" v-model="body"></textarea>
        </div>
      
    </section>
          <footer class="modal-card-foot">
            <button class="button" @click="sendMail">Send <img src="https://png.icons8.com/paper-plane/color/30/000000"></button>
            <button class="button" @click="closeModal">Cancel <img src="https://png.icons8.com/delete/nolan/30/000000"></button>
          </footer>
        </div>
      </div>
    </div>
    </div> 
</section>
    `,
    data() {
        return {
            subject: 'subject',
            status: 'is-active',
            test: false,
            title: 'hhhhhhhh',
            body: 'body',
            to: '@to:',            
        }
    },
    
    methods: {
        closeModal() {
            this.$emit('close')
        },

        sendMail() {
            var mail = {
                subject: this.subject,
                body: this.body,
                isRead: false,
                isActive: true,
                id: MailServices._getNextId(),
                sentAt: Date.now()
            }
            this.$emit('sent', mail);
        }
    }
}
