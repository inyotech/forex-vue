<script>
import { Line, mixins } from 'vue-chartjs'

let options = {
    title: {
        display: true,
        text: ''
    },
    scales: {
        yAxes: [{
            ticks: {
                beginAtZero: false
            },
            gridLines: {
                display: true
            }
        }],
        xAxes: [{
            type: 'time',
            distribution: 'linear',
            gridLines: {
                display: false
            }
        }]
    },
    legend: {
        display: false
    },
    responsive: true,
    maintainAspectRatio: false
}

export default {
    extends: Line,
    mixins: [mixins.reactiveProp],
    props: ['chartData', 'title'],
    watch: {
        'title': {
            handler (newOption, oldOption) {
                options.title.text = this.title
                this.$data._chart.destroy()
                this.renderChart(this.chartData, options)
            },
            deep: true
        }
    },
    mounted () {
        this.renderChart(this.chartData, options)
    }
}
</script>