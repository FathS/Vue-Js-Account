<template>
  <div class="kgfd">
    <div class="kgfd-row kgfd-col-align-right">
      <div class="kgfd-col kgfd-col-12 kgfd-grid-nopadding kgfd-col-m12 kgfd-col-s12">
        <!-- <router-link to="/childrentest">
          <p style="font-weight:bold;" v-if="token">Sayın {{name}} Sayfaya Hoş Geldin</p>
        </router-link>-->
        <a class="trans" href="#link1">
          <p style="font-weight:bold;" v-if="token">Sayın {{name}} Sayfaya Hoş Geldin</p>
        </a>
        <component id="link1" :is="selected"></component>
        <router-view />
        <div class="kgfd-row kgfd-col-align-right">
          <Doviz />
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import images from "../components/Image/image";
import Doviz from "../components/View/doviz.vue";
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
    "app-images": images,
    Doviz
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
.test {
  background-image: url("../assets/images/clouds.png");

  width: 150px;
  height: 50px;
  z-index: 1;
}
.trans {
  transition: all 300ms ease;
}
</style>