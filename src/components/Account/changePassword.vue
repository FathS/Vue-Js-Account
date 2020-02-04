<template>
  <div class="kgfd">
    <div class="kgfd-row">
      <div class="kgfd-col kgfd-col-3">
        <div class="kgfd-formbox">
          <label for>Old Password</label>
          <input
            type="password"
            class="kgfd-form-input"
            id="email"
            v-model="user.oldPassword"
            title="Lütfen Geçerli Mail Adresi Giriniz"
          />
        </div>
      </div>
    </div>
    <div class="kgfd-row">
      <div class="kgfd-col kgfd-col-3">
        <div class="kgfd-formbox">
          <label for>New Password</label>
          <input type="password" class="kgfd-form-input" id="newPassword" v-model="user.password" />
          {{user.password}}
        </div>
      </div>
    </div>
    <div class="kgfd-row">
      <div class="kgfd-col kgfd-col-3">
        <div class="kgfd-formbox">
          <label for>Confirm Password</label>
          <input
            type="password"
            class="kgfd-form-input"
            id="confirmPassword"
            v-model="user.confirPassword"
          />
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
        confirPassword: ""
      }
    };
  },
  methods: {
    changePass(user) {
      const url = "http://localhost:1256/Home/ChangePassword/";
      this.$axios
        .post(url, user)
        .then(request => {
          console.log(request);
        })
        .catch(() => this.loginFailed());
    }
  }
};
</script>