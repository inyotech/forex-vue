<template>
    <div>
        <TargetRateList :currentRates="currentRates" />
        <RateChart />
        <BaseSelector />
        <MonthsSelector />
        <CSVDownloader />
        <RateTable />
    </div>
</template>

<script>
import TargetRateList from './targetratelist'
import RateChart from './ratechart'
import BaseSelector from './basecurrencyselector'
import MonthsSelector from './monthsrangeselector'
import CSVDownloader from './csvdownloader'
import RateTable from './ratetable'

export default {
    components: {
        TargetRateList,
        RateChart,
        BaseSelector,
        MonthsSelector,
        CSVDownloader,
        RateTable
    },
    computed: {
        currencies: function() {
            return this.$store.getters.currencies
        },

        currentRates: function() {
            return this.$store.getters.currentRates
        },

        rateHistory: function() {
            return this.$store.getters.rateHistory
        }
    },
    data() {
        return {
        }
    }
}
</script>

<style scoped>
</style>