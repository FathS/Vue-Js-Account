export default {
    getCity() {
        this.$axios.get("City/CityList/").then(response => {
            console.log(response.data);
            this.city = response.data;
        });
    }

};