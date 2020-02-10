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
            v-model="User.email"
            title="Lütfen Geçerli Mail Adresi Giriniz"
          />
        </div>
      </div>
    </div>
    <div class="kgfd-row">
      <div class="kgfd-col kgfd-col-3">
        <div class="kgfd-formbox">
          <label for>Password</label>
          <input type="password" class="kgfd-form-input" id="email" v-model="User.password" />
        </div>
      </div>
    </div>
    <div class="kgfd-row">
      <div class="kgfd-col kgfd-col-3">
        <div class="kgfd-formbox">
          <button class="kgfd-btn kgfd-btn-success" v-on:click="activeAccount(User)">Aktif Et</button>
        </div>
        <p>{{msg}}</p>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      User: {
        active: true,
        email: "",
        password: ""
      },
      msg: ""
    };
  },
  methods: {
    activeAccount(User) {
      const url = "http://localhost:1256/Home/ActiveAccount/";
      this.$axios
        .post(url, User)
        .then(response => {
          this.msg = response.data;
          setTimeout(() => {
            this.$router.push("/login");
          }, 3000);
        })
        .catch(error => {
          console.log(error);
          this.msg = error.response.data;
        });
    }
  }
};
</script>