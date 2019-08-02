<template>
    <div class="custom-control custom-radio">
        <input type="radio" class="custom-control-input" 
            :id="'target-'+rate.currency_code" 
            name="target-group" 
            :value="rate.currency_code"
            @change="onChange"
            :checked="isChecked(rate.currency_code)" />
        <label class="custom-control-label" :for="'target-'+rate.currency_code">
            <img class="mx-1" :src="flag(rate.flag_image_file_name)" :alt="rate.currency_code" />
            {{rate.short_name}}&nbsp;{{rate.currency_name}}&nbsp;
        </label>
        <span class="float-right">{{rate.rate.toFixed(2)}}</span>
    </div>
</template>

<script>
import { getFlag } from '../flags'

export default {
    props: ['rate'],
    methods: {
        flag(fileName) {
            return getFlag(fileName)
        },
        onChange(event) {
            this.$emit('target-changed', event.target.value)
        },
        isChecked(currencyCode) {
            return currencyCode === this.$store.getters.target.currency_code
        }
    }
}
</script>

<style >
img {
    width: 20px;
    height: 15px;
}
</style>