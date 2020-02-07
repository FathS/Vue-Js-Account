<template>
  <div class="kgfd">
    <div class="kgfd-row">
      <div class="kgfd-col">
        <p v-if="token">Sayın {{name}} Sayfaya Hoş Geldin- {{token}}</p>
      </div>
    </div>
  </div>
</template>
<script>
import AuthService from "../services/AuthService";
export default {
  data() {
    return {};
  },
  computed: {
    name() {
      return this.$store.getters.getUser;
    },
    token() {
      return this.$store.state.token;
    }
    // token() {
    //   return this.$store.getters.isLoggedIn;
    // }
  }
  // async created() {
  //   if (!this.$store.getters.isLoggedIn) {
  //     this.$router.push("/login");
  //   }
  // }
};
</script>