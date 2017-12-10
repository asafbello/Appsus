import NoteService from '../services/NoteService.js'

export default {
    template: `
<section class="note-section-wrapper"> 
    <section class="note-section">         
        <div  v-for="note in notes" class="notecard" :key="note.id">
            <div class="card">
                <router-link :to="'/MrKeeper/details/' + note.id" class="card-header">
                    <p class="card-header-title">
                        {{note.title}}
                    </p>
                </router-link>
                    <div class="content">
                    <router-link :to="'/MrKeeper/details/' + note.id" class="note-txt">{{note.txt}}</router-link>
                        <br>
                        <footer class="card-footer"> 
                        <router-link :to="'/MrKeeper/details/' + note.id + '/edit'"><img src="https://png.icons8.com/edit/ultraviolet/30/000000" class="card-footer-item"></router-link> 
                        <img src="https://png.icons8.com/disposal/office/30/000000" class="card-footer-item" @click.stop="deleteNote(note.id)">
                    </footer>
                    </div>
            </div>
          </div>       
    </section>
</section>  
    `,
    data() {
        return {
            notes: [],
        }
    },

    created() {
        NoteService.getNotes()
            .then(notes => {
                this.notes = notes
            })
            .catch(err => {
                this.cars = []
            })
    },

    methods: {
        deleteNote(noteId) {
            var userAnswer = confirm('Are you sure you want to delete this note?')
            if (userAnswer) {
                NoteService.deleteNote(noteId)
                    .then(notes => {
                        this.notes = notes;
                    })
                    .catch(err => {
                        console.log(err);
                    })
            } else {
                return
            }
        },
    }
}