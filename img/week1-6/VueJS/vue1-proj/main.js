'use strict'

import CompanyService from './CompanyService.js'


new Vue({
    el: '#app',
    data: {
        message: 'Hello Vue.js!',
        userName: 'Puki',
        msg: 'how are you?',
        shouldShow : false,
        companies: []
    },
    methods: {
        doIt() {
            this.shouldShow = !this.shouldShow;
        }
    },
    created() {
        console.log('Vue instance was created!');
        CompanyService.getCompanies().then(function (companies) {
            this.companies = companies;
        })
    }

})

