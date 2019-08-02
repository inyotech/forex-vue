import Vue from 'vue'
import Vuex from 'vuex'
import * as api from './api'

Vue.use(Vuex)

const state = {
    base: {},
    target: {},
    months: null,
    currentRates: [],
    rateHistory: []
}

const getters = {
    base: state => state.base,
    target: state => state.target,
    months: state => state.months,
    currencies: state => state.currencies,
    currentRates: state => state.currentRates,
    rateHistory: state => state.rateHistory
}

const mutations = {

    setBase(state, payload) {
        Vue.set(state, 'base', payload.base)
    },

    setTarget(state, payload) {
        Vue.set(state, 'target', payload.target)
    },

    setMonths(state, payload) {
        state.months = payload.months
    },

    setCurrentRates(state, payload) {
        Vue.set(state, 'currentRates', payload.latestRates)
    },

    setRateHistory(state, payload) {
        Vue.set(state, 'rateHistory', payload.rateHistory)
    },
 
}

const actions = {

    getRateHistory({ commit, dispatch, getters}, args) {
        return api.fetchRateHistory(args.baseCode, args.targetCode, args.months)
            .then(result => {
                console.log('ratehistory', result)
                commit('setRateHistory', { rateHistory: result.data.rate_history })
            })
    },

    updateBase({ dispatch, state }, args) {
        const baseCode = args.baseCode
        const targetCode = state.target.currency_code
        const months = state.months
        return dispatch('getAllData', { baseCode, targetCode, months })
    },

    updateTarget({ dispatch, state }, args) {
        const baseCode = state.base.currency_code
        const targetCode = args.targetCode
        const months = state.months
        return dispatch('getAllData', { baseCode, targetCode, months })
    },

    updateMonths({ commit, dispatch, state }, args) {
        const baseCode = state.base.currency_code
        const targetCode = state.target.currency_code
        const months = args.months
        return dispatch('getRateHistory', { baseCode, targetCode, months })
            .then(() => {
                commit('setMonths', { months })
            })
    },

    getAllData({ commit }, args) {
        return Promise.all([
            api.fetchCurrentRates(args.baseCode),
            api.fetchRateHistory(args.baseCode, args.targetCode, args.months)
        ])
        .then(results => {
            commit('setBase', { base: results[1].data.base })
            commit('setTarget', { target: results[1].data.target })
            commit('setMonths', { months: args.months })
            commit('setCurrentRates', { latestRates: results[0].data.latest_rates })
            commit('setRateHistory', { rateHistory: results[1].data.rate_history })
        })
    }
}

const store = new Vuex.Store({
    state,
    getters,
    mutations,
    actions
})

export default store
