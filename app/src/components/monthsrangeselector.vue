<template>
<div class="months-range-selector text-center">
    <div v-for="interval in intervals()" :key="interval"
        class="custom-control custom-radio custom-control-inline" >
        <input type="radio" 
            v-model="selected"
            :id="'interval-input-'+interval"
            class="custom-control-input" 
            @change="intervalChanged"
            name="interval-group"
            :value="interval"
            :checked="isChecked(interval)" />
        <label :for="'interval-input-'+interval" class="custom-control-label">
            {{interval}} Months
        </label>
    </div>
</div>
</template>

<script>
export default {
    data() {
        return {
            selected: 24
        }
    },
    methods: {
        intervals() {
            return [6, 12, 24, 36, 60]
        },
        isChecked(interval) {
            return interval === this.$store.getters.months
        },
        intervalChanged(value) {
            console.log('onchange', this.selected)
            this.$store.dispatch('updateMonths', { months: this.selected })
           
        }

    }
    
}
</script>