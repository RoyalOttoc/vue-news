import Vue from 'vue';
import Vuex from 'vuex';
import mutations from './mutations'
import actions from './actions'

Vue.use(Vuex);

export const store = new Vuex.Store({
    state: {
        news: [],
        asks: [],
        jobs: [],
        user: {},
        item: {}
    },
    getters: {
        fetchedAsks(state) {
            return state.asks
        },
        fetchedNews(state) {
            return state.news
        },
        fetchedItem(state) {
            return state.item
        }
    },
    mutations,
    actions

})