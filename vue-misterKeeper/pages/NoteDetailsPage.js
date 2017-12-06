import NoteService from '../services/NoteService.js'

export default {
    template: `
        <section v-if="note">
        <router-link :to="'/MrKeeper/details/' + note.id + '/edit'">Edit</router-link>
            <h1>{{note.title}}</h1>
            <h2> {{note.txt}}</h2>
            <h4>{{note.dateOfCreation}}</h4>
            
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
        
    }
}