import PlacesServices from '../services/PlacesServices.js'

export default {

    template: `
    <section class="editPlaces" >
            {{place.fullAdress}}
          
            {{place.name}}<input type="text" v-model="newPlace.name" placeholder ='enter name..' autofocus>
            {{place.description}}<input type="text" v-model="newPlace.description" placeholder = 'enter description..' >
            <input type="text" v-model="newPlace.img" placeholder='enter imag..'>
            <select v-model="newPlace.tag">
            <option disabled value="">Please select tag</option>
            <option>food</option>
            <option>sport</option>
            <option>colture</option>
          </select>
          <span>Selected: {{ tag }}</span>
            <button v-on:click="savePlaceChanges">save</button>
            <button @click="closeCmp" >vvx</button>
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
            debugger;
            this.$emit('editPlace', null);

        }
    }
}

