import axios from 'axios';

const url = "http://localhost:1256/Home/Login/";

export default {
    login(user) {
        return axios
            .post(url, user)
            .then(response => response.data);
    },

};