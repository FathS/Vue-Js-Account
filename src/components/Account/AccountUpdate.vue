<template>
  <div class="kgfd">
    <div class="kgfd-row">
      <div class="kgfd-col kgfd-col-2">
        <div class="kgfd-formbox">
          <label for>Name</label>
          <input type="text" class="kgfd-form-input" v-model="account.name" />
        </div>
      </div>
      <div class="kgfd-col kgfd-col-2">
        <div class="kgfd-formbox">
          <label for>Surname</label>
          <input type="text" class="kgfd-form-input" v-model="account.surname" />
        </div>
      </div>
    </div>
    <div class="kgfd-row">
      <div class="kgfd-col kgfd-col-2">
        <div class="kgfd-formbox">
          <label for>Email</label>
          <input type="email" class="kgfd-form-input" v-model="account.email" />
        </div>
      </div>
      <div class="kgfd-col kgfd-col-2">
        <div class="kgfd-formbox">
          <label>Hesap Durumu</label>
          <el-select v-model="account.isActive" placeholder="Hesap Durum">
            <el-option :label="'Dondur'" value="False">Dondur</el-option>
            <el-option :label="'Aktif Et'" value="True">Aktif Et</el-option>
          </el-select>
        </div>
      </div>
    </div>
    <div class="kgfd-row">
      <div class="kgfd-col kgfd-col-2">
        <div class="kgfd-formbox">
          <label for>Password</label>
          <input :type="type" class="kgfd-form-input" v-model="account.password" />
          <a @click="ShowPassword()" class="showhidebtn" v-html="btn"></a>
        </div>
      </div>
      <div class="kgfd-col kgfd-col-2">
        <div class="kgfd-formbox">
          <label for>ConfirmPassword</label>
          <input :type="type" class="kgfd-form-input" v-model="account.confirmPassword" />
          <a @click="ShowPassword()" class="showhidebtn" v-html="btn"></a>
        </div>
      </div>
    </div>
    <div class="kgfd-row">
      <div class="kgfd-col kgfd-col-2">
        <div class="kgfd-formbox">
          <label for>Role</label>
          <input type="text" class="kgfd-form-input" v-model="account.role" />
        </div>
      </div>
      <div class="kgfd-col kgfd-col-2">
        <div class="kgfd-formbox">
          <label for>Age</label>
          <input type="text" class="kgfd-form-input" v-model="account.age" />
        </div>
      </div>
    </div>
    <div class="kgfd-row">
      <div class="kgfd-col kgfd-col-2">
        <div class="kgfd-formbox"></div>
        <button @click="updateAccount(account)" class="kgfd-btn kgfd-btn-success">Kaydet</button>
        <p>{{msg}}</p>
      </div>
    </div>
  </div>
</template>
<script>
const eye = '<i class="fa fa-eye" aria-hidden="true"></i>';
const eyeSlash = '<i class="fa fa-eye-slash" aria-hidden="true"></i>';
export default {
  data() {
    return {
      account: {
        isActive: null,
        name: "",
        surname: "",
        email: "",
        password: "",
        confirmPassword: "",
        age: "",
        role: ""
      },
      msg: "",
      btn: eye,
      type: "password"
    };
  },
  created() {
    this.$axios
      .get("Admin/DetailAccount/" + this.$route.params.id)
      .then(response => {
        this.account = response.data;
      });
  },
  methods: {
    disableAccount(account) {
      this.$axios
        .post("Account/DisabledAccount/", account)
        .then(response => {
          window.alert(response.data);
          this.$router.push("/Accounts");
        })
        .catch(error => {
          this.msg = error.response.data;
        });
    },
    updateAccount(account) {
      this.$axios
        .post("Admin/UpdateAccount/", account)
        .then(response => {
          this.msg = response.data;
        })
        .catch(error => {
          this.msg = error.response.data;
        });
    },
    ShowPassword() {
      if (this.type === "password") {
        this.type = "text";
        this.btn = eyeSlash;
      } else {
        this.type = "password";
        this.btn = eye;
      }
    }
  }
};
</script>
<style scoped>
.showhidebtn,
.deleteinput {
  position: absolute;
  right: 10px;
  top: 20;
  cursor: pointer;
}
</style>