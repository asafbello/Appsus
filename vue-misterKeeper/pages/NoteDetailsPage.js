import NoteService from '../services/NoteService.js'
import HomePage from './HomePage.js'

export default {
    template: `
<section v-if="note" class="noteCard">

    <section class="hero">
        <div class="hero-body">
            <div class="container">
                <h1 class="title">
                    {{note.title}}
                    <hr class="line7">
                </h1>
                    <h2 class="subtitle">
                        {{note.txt}} <br>
                            <hr class="line7">                
                                <p> {{note.strDate}}</p>
        <router-link :to="'/MrKeeper/details/' + note.id + '/edit'" class="edit"><img src="https://png.icons8.com/edit/ultraviolet/30/000000"></router-link>
        <router-link  to="/MrKeeper"><img src="https://png.icons8.com/undo/office/30/000000" class="edit"></router-link> 
        
                    </h2>
            </div>
        </div>
     </section>        
</section>

    `,
    data() {
        return {
            note: null
        }
    },

    created() {
        var noteId = +this.$route.params.id
        console.log(this.$route)
        NoteService.getNoteById(noteId)
            .then(note => {
                this.note = note
            })
    },

    methods: {
        convertTime: (timeStamp) => {
            return new Date(timeStamp)
        }
    }
}