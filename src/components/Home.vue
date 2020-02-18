<template>
  <div class="kgfd">
    <div class="kgfd-row">
      <div class="kgfd-col">
        <p v-if="token">Sayın {{name}} Sayfaya Hoş Geldin- {{token}}</p>
      </div>
      <div class="kgfd-col kgfd-col-6 kgfd-col-m12 kgfd-col-s12">
        <component :is="selected"></component>
      </div>
    </div>
  </div>
</template>
<script>
import images from "../components/Image/image";
import AuthService from "../services/AuthService";
const hamburgers = '<i class="fa fa-bars" aria-hidden="true"></i>';
const close = '<i class="fa fa-times" aria-hidden="true"></i>';
export default {
  data() {
    return {
      selected: "app-images",
      tokenTime: 3000,
      token: this.$store.getters.isLoggedIn
    };
  },
  methods: {
    closeMenu() {},
    tokenExpire() {
      if (this.token != null) {
        if (this.tokenTime > 0) {
          setTimeout(() => {
            this.tokenTime -= 1;
            this.tokenExpire();
          }, 1000);
        } else {
          window.alert(
            "Oturum süreniz bitmiştir. Lütfen Tekrar Giriş Yapınız."
          );
          this.logout();
        }
      }
    },
    logout() {
      this.$store.dispatch("logout");
      this.$router.push("/login");
    }
  },
  components: {
    "app-images": images
  },
  created() {
    this.tokenExpire();
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
<style scoped>
</style>