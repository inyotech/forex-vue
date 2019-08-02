<template>            
    <div class="m-3 csv-downloader text-center">
        <a :href="csvDownloadURL(base.currency_code, target.currency_code, months)">Download tabular rates as CSV</a>
    </div>
</template>

<script>
import * as api from '../store/api'

export default {
    computed: {
        base() {
            return this.$store.getters.base
        },
        target() {
            return this.$store.getters.target
        },
        months() {
            return this.$store.getters.months
        }
    },
    methods: {
        csvDownloadURL(base, target, months) {
            return api.csvDownloadURL(base, target, months)
        }
    }
}
</script>