'use strict'


Vue.use(VueRouter);
const myRouter = new VueRouter({ routes: myRoutes })

new Vue({
    template: `
        <section>
                <h1>My App</h1> 
                <nav>
                    <router-link to="/" exact class="button is-dark">Home </router-link>
                    <router-link to="/note/create" class="button is-warning">Add</router-link>                    
                    <button class="button is-warning" @click="sortPrioority">Sort by priority</button>
                    <button class="button is-warning" @click="sortByDate">Sort newest</button>
                </nav>
                <router-view></router-view>
        </section>
    `,

    router: myRouter,
    methods: {
            

        
    },
}).$mount('#app')