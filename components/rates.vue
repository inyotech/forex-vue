<template>
    <fieldset>
        <legend class="small text-muted">{{legend}}</legend>
        <TargetRateList />
        <RateChart />
        <BaseSelector />
        <MonthsSelector />
        <CSVDownloader />
        <RateTable />
    </fieldset>
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
        legend: function() {
            const base = this.$store.getters.base
            const dateOptions = {
                weekday: 'short',
                year: 'numeric',
                month: 'short',
                day: 'numeric'
            }
            const legend = `Global exchange rates based on the ${base.short_name} ${base.currency_name}, ` +
                `${(new Date()).toLocaleDateString('default', dateOptions)}`

            return legend
        },
    },
    data() {
        return {
        }
    }
}
</script>

<style scoped>
</style>