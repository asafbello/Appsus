import PlacesServices from '../services/PlacesServices.js'

export default {

    template: `
    <section class="editPlaces" >

    <div class="box">
    <article class="media">
      <div class="media-left">
      </div>
      <div class="media-content">
        <div class="content">
          <p>
            <strong>Edit place:</strong> <small>{{place.fullAdress}}</small> <button class="delete" @click="closeCmp"></button>
            <br>
            <div class="field">
            <label class="label">Name</label>
            <div class="control">
              <input class="input" type="text" v-model="newPlace.name" placeholder ='enter name..' autofocus>
            </div>
          </div>
          <div class="field">
          <label class="label">Name</label>
          <div class="control">
            <input class="input" type="text"  v-model="newPlace.description" placeholder = 'enter description..'>
          </div>
        </div>
          <label class="label">Name</label>
          <div class="control">
            <input class="input" type="text"  v-model="newPlace.description" placeholder = 'enter description..'>
          </div>
        </div>
        <div class="control">
        <div class="select"  v-model="newPlace.tag">
          <select>
            <option>fun</option>
            <option>food</option>
            <option>sport</option>
            <option>colture</option>
          </select>
        </div>
      </div>
        
        <span>Selected: {{ tag }}</span><br>
        <a class="button is-warning"  v-on:click="savePlaceChanges">Save Changes</a>
        <a class="button is-success" @click="closeCmp" >Undo</a>
    
  </div>
  
          </section>
            `,
    props: ['place'],
    data() {
        return {
            newPlace: {},
            img: '',
            tag: ''
        }
    },
    created() {
        this.newPlace = this.place;
    },
    methods: {
        savePlaceChanges() {
           PlacesServices.updatePlace(this.newPlace);
           this.closeCmp()
        },
        closeCmp() {
    
            this.$emit('editPlace', null);

        }
    }
}

