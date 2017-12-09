'use strict'

import myRoutes from './routes.js'
import NoteService from './services/NoteService.js'

Vue.use(VueRouter);
const myRouter = new VueRouter({ routes: myRoutes })


export default {

    template: `
        <section class="main-container">
                
                <nav class="nav">
                    <router-link to="/MrKeeper" exact class="button is-warning"> Home </router-link>
                    <router-link to="/MrKeeper/note/create" class="button is-warning">Add</router-link>                    
                    <button class="button is-warning" @click="sortPrioority">Sort by priority</button>
                    <button class="button is-warning" @click="sortByDate">Sort newest</button>
                </nav>         
                <router-view></router-view>
        </section>
    `,

    router: myRouter,
    methods: {

        sortPrioority: function () {
            NoteService.sortByPriority()
        },

        sortByDate: function () {
            NoteService.sortByDate()
        }
    },
}