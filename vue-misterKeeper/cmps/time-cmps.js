Vue.component('count-down', {
    template: `
        <div>
            {{timeRemains}}
        </div>
    `,
    props: ['from'],
    data() {
        return {
            timeRemains : 0
        }
    },
    created() {
        this.timeRemains = this.from;
        console.log('count down was created');
        var interval = setInterval(()=>{
            this.timeRemains--;
        }, 1000);
    },
});




Vue.component('show-time', {
    template: `
        <section v-on:click="timeClicked" v-bind:class="{light : isOn, dark : !isOn}">
            {{time}}
        </section>
    `,
    data() {
        return {
            time : Date.now(),
            interval : null,
            feedback : 1,
            isOn : false
        }
    },
    created() {
        console.log('show-time was created');
        this.interval = setInterval(()=>{
            this.time = Date.now()
        }, 1000);
    },
    destroyed() {
        console.log('show-time was destroyed');
        clearInterval(this.interval)
    },
    methods:{
        timeClicked() {
            this.isOn = !this.isOn;
            
        }
    }
});
