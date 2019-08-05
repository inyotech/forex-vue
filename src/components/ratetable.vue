<template>
    <div class="mt-3">
        <ul class="mb-3 rates-table">
            <li v-for="(rate, index) in visibleRates" :key="index">
                {{rate.rate_date}}
                <span class="float-right">{{rate.rate.toFixed(2)}}</span>
            </li>
        </ul>
        <Paginator :current-page="currentPage" :total-pages="totalPages" @page-changed="pageChanged" />
    </div>
</template>

<script>
import Paginator from './paginator'

export default {
    components: {
        Paginator
    },
    data() {
        return {
            currentPage: 0,
            perPage: 40,
            totalPages: 0
        }
    },
    computed: {
        rates() {
            return this.$store.getters.rateHistory
        },
        visibleRates() {
            return this.rates.slice(this.currentPage * this.perPage, 
                                   (this.currentPage + 1) * this.perPage)
        }
    },
    methods: {
        pageChanged(newPage) {
            this.currentPage = newPage
        }
    },
    watch: {
        rates(newValue, oldValue) {
            this.totalPages = Math.ceil(this.rates.length / this.perPage)
            this.currentPage = 0
        }
    }

}
</script>

<style scoped>
ul.rates-table {
    column-width: 150px;
    list-style-type: none;
    margin: auto;
    padding: 0;
}

ul.rates-table li {
    padding: 0 .25em;
}

ul.rates-table li:nth-child(odd) {
    background: lightgray;
}
</style>