import Vue from 'vue'
Vue.use(Vuex)
import Vuex from 'vuex'
const store = new Vuex.Store({
    state: {
        isNavOpen: false
    },
    mutations: {
        openNav(state) {
            state.isNavOpen = true
        },
        closeNav(state) {
            state.isNavOpen = false
        },
        toggleNav(state) {
            state.isNavOpen = !state.isNavOpen
        }
    }
})

export default store