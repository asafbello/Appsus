import NoteService from '../services/NoteService.js'
import HomePage from './HomePage.js'

export default {
    template: `
        <section v-if="note" class="noteCard">

            <section class="hero is-warning">
            <div class="hero-body">
              <div class="container">
                <h1 class="title">
                {{note.title}}
                </h1>
                <h2 class="subtitle">
                {{note.txt}} <br>
                <h4>Created at: {{convertTime(note.dateOfCreation)}}</h4>
        <router-link :to="'/MrKeeper/details/' + note.id + '/edit'" class="button is-warning">Edit</router-link>
        
                </h2>
              </div>
            </div>
          </section>
          
        </section>

    `,
    data() {
        return {
            note :  null
        }
    },
    created() {
        var noteId = +this.$route.params.id
        console.log(this.$route)
        NoteService.getNoteById(noteId)
         .then(note =>{
             this.note = note
         } )
        //  .catch(err => {
        //      this.$router.push('/')
        //  })
        
    },
     methods: {
          
             convertTime: (timeStamp) => {
                return new Date(timeStamp)
             }

             
         
     }
}