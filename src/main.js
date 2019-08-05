import 'bootstrap/dist/css/bootstrap.min.css'
import './main.css'

import Vue from 'vue'
import store from './store/vuestore'
import App from './components/app'

let vm = new Vue({
    el: '#app',
    store,
    template: '<App/>',
    components: {
        App
    },
    created() {
        this.$store.dispatch('getAllData', { baseCode: 'USD', targetCode: 'EUR', months: 24 })
    }
})

