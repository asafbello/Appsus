import NoteService from '../services/NoteService.js'

export default {
    template: `
 <section class="note-section-wrapper"> 
<section class="note-section">         
    <router-link :to="'/MrKeeper/details/' + note.id" v-for="note in notes" class="notecard" :key="note.id">
        <div class="card ">
            <header class="card-header">
              <p class="card-header-title">
                {{note.title}}
              </p>
            </header>
                <div class="card-content">
                    <div class="content">
                        {{note.txt}}
                        <br>
                 <footer class="card-footer"> 
                    <router-link :to="'/MrKeeper/details/' + note.id + '/edit'" class="card-footer-item">Edit</router-link>
                            <a href="#" class="card-footer-item" @click.stop="deleteNote(note.id)">Delete</a>
                             <img src="https://png.icons8.com/disposal/ultraviolet/30/000000"  class="card-footer-item">
                </footer>
                    </div>
                </div>

          </div>
            </router-link>         
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
                    .then(_ => {
                    })
                    .catch(err => {
                    })
            } else {
                return
            }
        },
    }
}