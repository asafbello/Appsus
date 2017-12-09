import NoteService from '../services/NoteService.js'


export default {
    template: `
<section class="bg-edit-form">

<form @submit.prevent="saveNote" class="edit-from">
    <div class="field">
    <label class="label">Note Title</label>
    <div class="control">
      <input class="input" type="text" placeholder="Note Title" v-model="NoteToUpdate.title" autofocus>
    </div>
  </div>
  

  <div class="field">
    <label class="label">Body</label>
    <div class="control">
      <textarea class="textarea" placeholder="Note Details" v-model="NoteToUpdate.txt"></textarea>
    </div>
  </div>

    
<div class="field">
  <label class="label">Priority</label>
  <div class="control">
    <div class="select">
      <select v-model="NoteToUpdate.priority">
      <option value="a">important</option>
      <option value="b">pretty important</option>
      <option value="c">default</option>
      <option value="d">Not important</option>
      </select>
    </div>
  </div>
</div>
  
  
    <div class="field is-grouped">
        <div class="control">
        <button class="ugly-btn"><img src="https://png.icons8.com/save/office/30/000000"></button>
        
        
        </div>
        <div class="control">
        <router-link  to="/MrKeeper"><img src="https://png.icons8.com/undo/office/30/000000"></router-link> 
          
        </div>
    </div>
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
            .then(note =>
                this.NoteToUpdate = Object.assign({}, note))

    },

    methods: {
        saveNote() {
            NoteService.saveNote(this.NoteToUpdate)
                .then(addedNote => {
                    this.$router.push('/MrKeeper')
                })
                .catch(err => {
                })
        },
    }
}