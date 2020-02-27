export default {
    data() {
        return {
            userBakiye: ""
        }
    },
    methods: {
        getBakiye() {
            this.$axios
                .get("Account/getBakiye/" + this.$store.getters.getUserId)
                .then(response => {
                    this.userBakiye = response.data.tl;
                })
                .catch(error => { });
        },
    },
    created() {
        this.getBakiye();
    }
}
