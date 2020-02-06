import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)


export const store = new Vuex.Store({
    state: {
        id: null,
        name: "",
        token: null
    },
    mutations: {
        // authUser(state, userData) {
        //     state.token = userData.token
        //     state.id = userData.id
        // }
    },
    actions: {
        // register({ commit }, authData) {
        //     const url = "http://localhost:1256/Home/Register/";
        //     axios
        //         .post(url, authData)
        //         .then(request => {
        //             router.push("/login")
        //         })
        //         .catch(error => {
        //             this.errorMsg = error;
        //         });
        // },
        // login({ commit }, authData) {
        //     const url = "http://localhost:1256/Home/Login/";
        //     axios
        //         .post(url, authData)
        //         .then(response => {
        //             console.log(response.data);
        //             this.state.name = response.data.name + " " + response.data.surname
        //             commit('authUser', {
        //                 token: response.data.token,
        //                 id: response.data.id,
        //             })
        //             router.push("/")
        //         })
        //         .catch(() => this.loginFailed());
        // }
    },
    getters: {
        changeName: state => {
            return " Sayın " + state.name + " Sayfaya Hoş Geldin"
        }
    }
})