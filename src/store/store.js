import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import createPersistedState from "vuex-persistedstate"
import addSeconds from "vue-date-fns";

Vue.use(Vuex)
Vue.use(axios)

const getDefaultState = () => {
    return {
        token: false,
        name: "",
        id: null,
        apiUrl: "http://localhost:1256/"
    };
};

export const store = new Vuex.Store({
    plugins: [createPersistedState()],
    // state: {
    //     id: null,
    //     name: "",
    //     token: false
    // },
    state: getDefaultState(),
    getters: {
        isLoggedIn: state => {
            return state.token;
        },
        getUser: state => {
            return state.name
        },
        getUserId: state => {
            return state.id
        },
        changeName: state => {
            return " Sayın " + state.name + " Sayfaya Hoş Geldin"
        },
        apiUrl: state => {
            return state.apiUrl
        }
    },
    mutations: {
        authUser: (state, token) => {
            state.token = token
        },
        getUser: (state, name) => {
            state.name = name;
        },
        getUserId: (state, id) => {
            state.id = id;
        },
        RESET: state => {
            Object.assign(state, getDefaultState());
        }
    },
    actions: {
        login: ({ commit, dispatch }, { token, name, id }) => {
            commit('authUser', token);
            commit('getUser', name);
            commit('getUserId', id);


            axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
        },
        logout: ({ commit }) => {
            commit('RESET', '');
        }
    },
})