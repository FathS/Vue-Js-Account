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
        <br />
        <br />
        <br />
        <div style="margin-bottom:50px;">
          <span class="font-size-16 color-blue turkis" style="margin-right:20px;">Türkiye</span>
          <span class="font-size-30 color-blue i">İ</span>
          <span class="font-size-30 color-blue s">Ş</span>
          <span class="font-size-16 color-blue turkis" style="margin-left:20px;">Bankası</span>
          <span class="font-size-16 color-blue coronaopacity">
            Corona ile mücadele için
            <br />sosyal mesafeyi koruyalım
          </span>
        </div>

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

.color-blue {
  color: #020279;
  font-weight: bold;
}
.font-size-16 {
  font-size: 20px;
}
.font-size-30 {
  font-size: 40px;
}
.i {
  position: absolute;
  left: 90px;
  top: 80px;
  animation: i 12s infinite;
}

@keyframes i {
  0% {
    left: 90px;
  }
  
  100% {
    left: 70px;
  }
}
.s {
  position: absolute;
  top: 83px;
  left: 85px;
}

.coronaopacity {
  opacity: 0;
  animation: opencorona 11s infinite;
}

@keyframes opencorona {
  0% {
    opacity: 0;
  }
  25% {
    opacity: 0;
  }
  50% {
    opacity: 1;
    display: block;
  }
  75% {
    opacity: 1;
    display: block;
  }
  100% {
    opacity: 1;
    display: block;
  }
}

.turkis {
  opacity: 1;
  animation: closeturkis 11s infinite;
}

@keyframes closeturkis {
  0% {
    opacity: 1;
  }
  25% {
    opacity: 1;
  }
  50% {
    opacity: 0;
    display: none;
  }
  75% {
    opacity: 0;
    display: none;
  }
  100% {
    opacity: 0;
    display: none;
  }
}
</style>