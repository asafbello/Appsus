export default {
    template: `
        <section >
        <div :class="{'is-active': test}">
        <div class="modal-background"></div>
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
              <input class="input" type="text" placeholder="Text input">
            </div>
          </div>
          
          <div class="field">
              <span class="icon is-small is-left">
              </span>
              <span class="icon is-small is-right">
              </span>
          <div class="field">
            <label class="label">Email</label>
            <div class="control has-icons-left has-icons-right">
              <input class="input is-danger" type="email" placeholder="Email input" value="hello@">
              <span class="icon is-small is-left">
                <i class="fa fa-envelope"></i>
              </span>
              <span class="icon is-small is-right">
              </span>
              <textarea class="textarea" placeholder="Your message"></textarea>
          <div class="field">
            <div class="control">
              <div class="select">
            
              </div>
            </div>
          </div>
          </section>
          <footer class="modal-card-foot">
            <button class="button is-success">Send mail</button>
            <button class="button" @click="closeModal">Cancel</button>
          </footer>
        </div>
      </div>
            
        </section>
    `,
    data() {
        return {
            status: 'is-active',
            test: false
        }
    },
    methods: {
        closeModal() {
            this.$emit('close')
        }
    }
}
