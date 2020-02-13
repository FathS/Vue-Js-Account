<template>
  <div class="kgfd">
    <div class="kgfd-row kgfd-col-align-center">
      <div class="kgfd-col kgfd-col-3 kgfd-col-m12 kgfd-col-s12">
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
    <div class="kgfd-row kgfd-col-align-center">
      <div class="kgfd-col kgfd-col-3 kgfd-col-m12 kgfd-col-s12">
        <div class="kgfd-formbox">
          <label for>Password</label>
          <input type="password" class="kgfd-form-input" id="password" v-model="user.password" />
        </div>
      </div>
    </div>
    <div class="kgfd-row kgfd-col-align-center">
      <div class="kgfd-col kgfd-col-3 kgfd-col-m12 kgfd-col-s12">
        <div class="kgfd-formbox">
          <button type="submit" v-on:click="login(user)" class="kgfd-btn kgfd-btn-primary">Giriş Yap</button>
          <router-link to="/activeAccount">
            <a
              style="float: right; margin:20px 0 0 0; font-size:14px; font-weight:bold;"
            >{{activeAccount}}</a>
          </router-link>
          <p v-if="msgShow" style="color:red;">{{msg}}</p>
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
import AuthService from "../../services/AuthService";

export default {
  data() {
    return {
      user: {
        email: "",
        password: ""
      },
      surname: "",
      error: false,
      isSign: true,
      btnLogin: "",
      mystyle: {
        display: "block",
        cursor: "pointer"
      },
      btndisplay: "",
      msg: "",
      msgShow: true,
      activeAccount: ""
    };
  },
  mounted() {
    serverBus.$on("mystyle", mystyle => {
      this.mystyle.display = mystyle.display;
    });
  },
  methods: {
    login(user) {
      this.$axios
        .post("Account/Login/", user)
        .then(response => {
          console.log(response.data);
          const token = response.data.token;
          const name = response.data.name + " " + response.data.surname;
          const id = response.data.id;
          const expire = response.data.token.expire;
          this.$store.dispatch("login", { token, name, id, expire });
          this.loginSuccessful();
        })
        .catch(error => {
          if (
            error.response.data ==
            "Hesap Aktif Değil. Aktif Etmek için Tıklayınız"
          ) {
            this.activeAccount = error.response.data;
            this.msgShow = false;
          }
          if (
            error.response.data !=
            "Hesap Aktif Değil. Aktif Etmek için Tıklayınız"
          ) {
            this.msgShow = true;
            this.msg = error.response.data;
            this.activeAccount = "";
          }
        });
    },

    loginSuccessful() {
      this.error = true;
      serverBus.$emit("isSign", this.isSign);
      this.btnLogin = "Hoş Geldin" + " " + this.name;
      this.color = "green";
      this.mystyle.display = "none";
      this.$router.push("/");
      this.timerAlert();
    },
    loginFailed() {
      this.error = true;
      this.btnLogin = "Hatalı Giriş";
    },

    timerAlert() {
      setTimeout(() => {
        this.btndisplay = "none";
      }, 5000);
    }
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