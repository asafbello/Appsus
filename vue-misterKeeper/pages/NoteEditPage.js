import NoteService from '../services/NoteService.js'


export default {
    template: `
    <section>
        Add Note
        <form @submit.prevent="saveNote">
            <h3>Title</h3>
         <input type="text" v-model="NoteToUpdate.title" autofocus> <br>
            <h3>Content</h3>     
         <input type="text" v-model="NoteToUpdate.txt" autofocus> <br>
         <h3>Priority</h3>  
           
        <select v-model="NoteToUpdate.priority">
            <option value="a">important</option>
            <option value="b">pretty important</option>
            <option value="c">default</option>
            <option value="d">Not important</option>
        </select> <br>
            <button>{{(noteId)? 'Save' : 'Add'}}</button>
        </form>
    </section>
    
    `,
    data() {
        return {
            NoteToUpdate: NoteService.emptyNote(),
            noteId: +this.$route.params.id,
            selected: ''
        }
    },
    created() {
        if (!this.noteId) return;
        console.log('asafff ,', this.noteId)
        NoteService.getNoteById(this.noteId)
            .then(note => this.NoteToUpdate = note)

    },
    methods: {
        saveNote() {
            NoteService.saveNote(this.NoteToUpdate)
                .then(addedNote => {
                    this.$router.push('/')
                })
                .catch(err => {
                })
        },
    }
}