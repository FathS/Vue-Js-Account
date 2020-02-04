import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
const store = new Vuex.Store({
    state: {
        userId
    },
    mutations: {
        addDataMutation(state, data) {
            state.userId.push(data)
        }
    },
    actions: {
        addDataAction(vueContext, data) {
            vueContext.commit('addDataMutation', data)
        }
    },
    getters: {
        getAddedUserId(state) {
            return state.userId
        }
    }
})