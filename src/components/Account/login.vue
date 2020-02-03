<template>
  <div class="kgfd">
    <div class="kgfd-row">
      <div class="kgfd-col kgfd-col-3">
        <div class="kgfd-formbox">
          <label for>E-mail</label>
          <input
            type="email"
            class="kgfd-form-input"
            id="email"
            v-model="user.email"
            title="Lütfen Geçerli Mail Adresi Giriniz"
          />
        </div>
      </div>
    </div>
    <div class="kgfd-row">
      <div class="kgfd-col kgfd-col-3">
        <div class="kgfd-formbox">
          <label for>Password</label>
          <input type="password" class="kgfd-form-input" id="password" v-model="user.password" />
        </div>
      </div>
    </div>
    <div class="kgfd-row">
      <div class="kgfd-col kgfd-col-12">
        <div class="kgfd-formbox">
          <button type="submit" v-on:click="login(user)" class="kgfd-btn kgfd-btn-primary">Giriş Yap</button>
        </div>
      </div>
    </div>
    <transition name="fade">
      <div
        v-if="error"
        v-bind:style="{backgroundColor: color, display: btndisplay}"
        class="alert alert-error"
      >{{btnLogin}}</div>
    </transition>
  </div>
</template>
<script>
import { serverBus } from "../../main";

export default {
  data() {
    return {
      user: {
        email: "",
        password: ""
      },
      error: false,
      isSign: true,

      btnLogin: "",
      mystyle: {
        display: "block",
        cursor: "pointer"
      }
    };
  },
  methods: {
    login(user) {
      const url = "http://localhost:1256/Home/Login/";
      this.$axios
        .post(url, user)
        .then(request => this.loginSuccessful())
        .catch(() => this.loginFailed());
    },
    loginSuccessful() {
      this.error = true;
      serverBus.$emit("isSign", this.isSign);
      this.btnLogin = "Hoş Geldin" + " " + this.user.email;
      this.color = "green";
      this.mystyle.display = "none";
      this.timerAlert();
    },
    loginFailed() {
      this.error = true;
      this.btnLogin = "Hatalı Giriş";
      delete localStorage.token;
    },
    successLogin(user) {
      this.btnLogin = "Hoş Geldin" + " " + user.name + " " + user.surname;
      this.show = false;
      this.color = "green";
      this.mystyle.display = "none";
      this.timerAlert();
    },
    timerAlert() {
      setTimeout(() => {
        this.btndisplay = "none";
        this.$router.push({ name: "todoslist" });
      }, 4000);
    }
  },
  mounted() {
    serverBus.$on("mystyle", mystyle => {
      this.mystyle.display = mystyle.display;
    });
    serverBus.$on("form", form => {
      this.form = form;
    });
  }
};
</script>
<style scoped>
.alert {
  font-size: 20px;
  padding: 20px 0;
  font-weight: bold;
  color: #ffffff;
  width: 200px;
  text-align: center;
  position: fixed;
  right: 0;
  bottom: 0;
  -webkit-transition: all 300ms ease;
  transition: all 300ms ease;
}
.alert-none {
  display: none;
  -webkit-transition: all 300ms ease;
  transition: all 300ms ease;
}
.alert.alert-error {
  background: #9c0404;
}
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}

.invalid input {
  border: 1px solid red !important;
  background-color: #ffc9aa;
}
.invalid label {
  color: red !important;
}

.warning-star {
  position: absolute;
  top: 35px;
  right: 5px;
  color: #b30505;
  cursor: pointer;
  -webkit-transition: all 300ms ease-out;
  transition: all 300ms ease-out;
}
.warning-star:hover::after {
  content: "Boş Bırakılamaz!";
  position: absolute;
  top: -50px;
  left: -150px;
  color: #b30505;
  font-weight: bold;
  background-color: #ffffff;
  /* box-shadow: 0px 0px 7px 15px #e6dfdf; */
  border-radius: 6px;
  line-height: normal;
  padding: 10px 15px 15px 15px;
  letter-spacing: 1px;
  -webkit-transition: all 300ms ease;
  transition: all 300ms ease;
  clip-path: polygon(
    0% 0%,
    100% 0%,
    100% 80%,
    75% 85%,
    65% 100%,
    50% 80%,
    0% 80%
  );
}
.showhidebtn,
.deleteinput {
  position: absolute;
  right: 10px;
  top: 20;
  cursor: pointer;
}
</style>