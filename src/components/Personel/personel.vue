<template>
  <div class="kgfd">
    <div class="kgfd-row">
      <div class="kgfd-col kgfd-col-12">
        <h1>Login</h1>
      </div>
      <div class="kgfd-col kgfd-col-12">
        <div class="kgfd-row">
          <div class="kgfd-col kgfd-col-2">
            <div class="kgfd-formbox">
              <label for>Name</label>
              <input type="text" class="kgfd-form-input" v-model="user.name" />
            </div>
          </div>
        </div>
        <div class="kgfd-row">
          <div class="kgfd-col kgfd-col-2">
            <div class="kgfd-formbox">
              <label for>Surname</label>
              <input type="text" class="kgfd-form-input" v-model="user.surname" />
            </div>
          </div>
        </div>
        <div class="kgfd-row">
          <div class="kgfd-col kgfd-col-2">
            <div class="kgfd-formbox">
              <button
                v-on:click="login(user)"
                v-bind:style="{display: mystyle.display, cursor: mystyle.cursor}"
                class="kgfd-btn kgfd-btn-success"
              >Giriş Yap</button>
            </div>
          </div>
        </div>
      </div>
    </div>
    <transition name="fade">
      <div
        v-if="!show"
        v-bind:style="{backgroundColor: color, display: btndisplay}"
        class="alert alert-error"
      >{{btnuser}}</div>
    </transition>
  </div>
</template>
<script>
import { serverBus } from "../../main";
import Alert from "../Alert/alert.vue";
export default {
  data() {
    return {
      isSign: true,
      show: true,
      mystyle: {
        display: "block",
        cursor: "pointer"
      },
      user: {
        name: "",
        surname: ""
      },
      btnuser: "",
      color: "",
      btndisplay: ""
    };
  },
  methods: {
    login(user) {
      if (user.name == "" || user.surname == "") {
        this.btnuser = "Hatalı Giriş";
        this.show = false;
      } else {
        serverBus.$emit("isSign", this.isSign);
        this.successLogin(user);
      }
    },
    successLogin(user) {
      this.btnuser = "Hoş Geldin" + " " + user.name + " " + user.surname;
      this.show = false;
      this.color = "green";
      this.mystyle.display = "none";
      this.test();
    }
  },
  computed: {
    test() {
      setTimeout(function() {
        this.btndisplay = "none";
      }, 2000);
    }
  },
  mounted() {
    serverBus.$on("mystyle", mystyle => {
      this.mystyle.display = mystyle.display;
    });
  },
  components: {
    appAlert: Alert
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
</style>