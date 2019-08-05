<template>
    <ul class="target-currencies" >
        <TargetRateListElement v-for="currentRate in currentRates" 
            :rate="currentRate" 
            :key="currentRate.currency_code"
            @target-changed="targetChanged($event)" />
    </ul>
</template>

<script>
import TargetRateListElement from './targetratelistelement'

export default {
    components: {
        TargetRateListElement
    },
    computed: {
        currentRates() {
            return this.$store.getters.currentRates
        }
    },
    methods: {
        targetChanged(newTarget) {
            this.$store.dispatch('updateTarget', { targetCode: newTarget })
        }
    }
}
</script>

<style scoped>
ul.target-currencies {
    list-style-type: none;
    column-width: 200px;
    margin: auto;
    padding: 0;
    vertical-align: middle;
}
</style>