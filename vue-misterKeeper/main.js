'use strict'

import myRoutes from './routes.js'
import NoteService from './services/NoteService.js'

Vue.use(VueRouter);
const myRouter = new VueRouter({ routes: myRoutes })


export default {

    template: `
<section class="main-container">
    <section> 
        <section class="hero is-dark main-nav">
            <div class="hero-body">
                <div class="container">
                    <h1 class="title">
                        Keep IT!
                    </h1>
                        <h2 class="subtitle">
                             Write it down and never foget again!
                        </h2>
                    <nav class="nav">
                        <router-link to="/MrKeeper" exact class="button is-warning"> Home </router-link>
                        <router-link to="/MrKeeper/note/create" class="button is-warning">Add</router-link>                    
                        <button class="button is-warning" @click="sortPrioority">Sort by priority</button>
                        <button class="button is-warning" @click="sortByDate">Sort newest</button>
                    </nav>
                </div>
            </div>
      </section>
            <div class="container is-fluid"></div>
                <router-view></router-view>
                
        </section>
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