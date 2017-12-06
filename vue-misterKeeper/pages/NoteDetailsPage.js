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
                <hr class="line7">
                </h1>
                <h2 class="subtitle">
                {{note.txt}} <br>
                <hr class="line7">                
                <p> {{convertTime(note.dateOfCreation)}}</p>
        <router-link :to="'/MrKeeper/details/' + note.id + '/edit'" class="button is-dark edit">Edit</router-link>
        <router-link to="/MrKeeper" exact class="button is-dark edit">Back </router-link>
        
        
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