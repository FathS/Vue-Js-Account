export default {
    data() {
        return {
            cityList: [],
            managerList: [],
        }
    },
    methods: {
        GetCityList() {
            this.$axios.get("http://localhost:1256/Home/CityList/").then(response => {
                this.cityList = response.data;
            });
        },
        getManagerList() {
            this.$axios.get("http://localhost:1256/Home/managerList/").then(response => {
                this.managerList = response.data;
            });
        },
    }
}