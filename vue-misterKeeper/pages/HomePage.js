import NoteService from '../services/NoteService.js'

export default {
    template: `
    
        <section class="note-section">
          
            <h1>My notes</h1>
            <router-link :to="'/MrKeeper/details/' + note.id" v-for="note in notes" class="noteCard" :key="note.id">
            <div class="card noteCard">
            <header class="card-header">
              <p class="card-header-title">
              {{note.title}}
              </p>
              <a href="#" class="card-header-icon" aria-label="more options">
                <span class="icon">
                  <i class="fa fa-angle-down" aria-hidden="true"></i>
                </span>
              </a>
            </header>
            <div class="card-content">
              <div class="content">
              {{note.txt}}
             
                <br>
               
              </div>
            </div>
            <footer class="card-footer">
              
            <router-link :to="'/MrKeeper/details/' + note.id + '/edit'" class="card-footer-item">Edit</router-link>
            
              <a href="#" class="card-footer-item" @click="deleteNote(note.id)">Delete</a>
              
            </footer>
          </div>
             </router-link> 
        </section>
    
    `,
    data() {
        return {
            notes: [],
            // newNote: NoteService.emptyNote(),
        }
    },
    created() {
        NoteService.getNotes()
            .then(notes => {
                // var userMsg = {txt: 'Cars Loaded', type: 'success' }
                // this.showUserMsg(userMsg);
                this.notes = notes
            })
            .catch(err => {
                // var userMsg = {txt: 'Cars Loaded Failed!', type: 'danger' }
                // this.showUserMsg(userMsg);
                this.cars = []
            })
    },

    methods: {
        deleteNote(noteId) {
            var userAnswer = confirm('Are you sure you want to delete this note?')
            if (userAnswer) {
                NoteService.deleteNote(noteId)
                    .then(_ => {
                        // var userMsg = {txt: `Car ${carId} was succesfuly deleted`, type: 'success' }
                        // this.showUserMsg(userMsg);
                        
                    })
                    .catch(err => {
                        // var userMsg = {txt: 'Car Delete Failed!', type: 'danger' }
                        // this.showUserMsg(userMsg);
                    })
            } else {
                return
            }

        },

    }





}