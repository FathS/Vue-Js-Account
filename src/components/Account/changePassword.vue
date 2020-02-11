<template>
  <div class="kgfd">
    <div class="kgfd-row">
      <div class="kgfd-col kgfd-col-3 kgfd-col-s12 kgfd-col-m12">
        <div class="kgfd-formbox">
          <label for>Old Password</label>
          <input type="password" class="kgfd-form-input" v-model="user.oldPassword" />
        </div>
      </div>
    </div>
    <div class="kgfd-row">
      <div class="kgfd-col kgfd-col-3 kgfd-col-s12 kgfd-col-m12">
        <div class="kgfd-formbox">
          <label for>New Password</label>
          <input type="password" class="kgfd-form-input" v-model="user.password" />
        </div>
      </div>
    </div>
    <div class="kgfd-row">
      <div class="kgfd-col kgfd-col-3 kgfd-col-s12 kgfd-col-m12">
        <div class="kgfd-formbox">
          <label for>Confirm Password</label>
          <input type="password" class="kgfd-form-input" v-model="user.confirPassword" />
        </div>
      </div>
    </div>
    <div class="kgfd-row">
      <div class="kgfd-col kgfd-col-12">
        <div class="kgfd-formbox">
          <button
            type="submit"
            v-on:click="changePass(user)"
            class="kgfd-btn kgfd-btn-primary"
          >Kaydet</button>
          <p style="color:red;">{{errMsg}}</p>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { serverBus } from "../../main";
export default {
  data() {
    return {
      user: {
        oldPassword: "",
        password: "",
        confirPassword: "",
        id: this.$store.getters.getUserId
      },
      errMsg: ""
    };
  },
  methods: {
    changePass(user) {
      // const url = "http://localhost:5000/Home/ChangePassword/";
      const url = this.$store.getters.apiUrl + "Home/ChangePassword/";
      this.$axios
        .post(url, user)
        .then(response => {
          window.alert("Şifreniz Güncellenmiştir.");
          this.$router.push("/");
        })
        .catch(error => {
          console.log(error);
          this.errMsg = error.response.data;
        });
    }
  }
};
</script>