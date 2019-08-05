<template>
    <div class="mt-3 base-currency-selector text-center">
        <label for="base-selector">Base currency:&nbsp;</label>
        <select id="base-selector" 
            v-model="selected"
            @change="baseChanged" >
            <option v-for="currency in currencies" 
                :key="currency.currency_code" 
                :value="currency.currency_code" >
                {{currency.short_name}} {{currency.currency_name}}
            </option>
        </select>
    </div>
</template>

<script>
export default {
    data() {
        return {
            selected: 'USD'
        }
    },
    computed: {
        currentBase() {
            return this.$store.getters.base
        },
        currencies() {
            return this.$store.getters.currentRates
        },
    },
    methods: {
        baseChanged(event) {
            this.$store.dispatch('updateBase', { baseCode: this.selected })
        },
        isSelected(currencyCode) {
            return this.currentBase.currency_code == currencyCode
        }
    }
}
</script>

<style scoped>
</style>