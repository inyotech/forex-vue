<template>
  <div class="rate-chart">
    <line-chart :chart-data="dataset" :title="chartTitle" />
  </div>
</template>

<script>
import LineChart from './linechart'


export default {
    components: {
        LineChart
    },
    computed: {
        dataset () {
            let labels = this.ratesData.map(rate => rate.rate_date)
            let data = this.ratesData.map(rate => rate.rate)
            return {
                labels,
                datasets: [{
                    label: 'Rates',
                    spanGaps: true,
                    pointRadius: 1,
                    data
                }]
            }
        },
        ratesData() {
            return this.$store.getters.rateHistory
        },
        chartTitle() {
            const base = this.$store.getters.base
            const target = this.$store.getters.target
            const title = `${target.short_name} ${target.currency_name} vs ` +
              `${base.short_name} ${base.currency_name}`
            return title
        }
    }
}
</script>
