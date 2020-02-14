<template>
  <div class="kgfd">
    <div class="kgfd-row">
      <div class="kgfd-col kgfd-col-2">
        <div class="kgfd-formbox">
          <label>Hesap Durumu</label>

          <el-select v-model="account.isActive" placeholder="Hesap Durum">
            <el-option v-if="account.isActive == true" :label="'Dondur'" value="False">Dondur</el-option>
            <el-option v-if="account.isActive == false" :label="'Aktif Et'" value="True">Aktif Et</el-option>
          </el-select>
        </div>
        <button @click="disableAccount(account)" class="kgfd-btn kgfd-btn-success">Kaydet</button>
        <p>{{msg}}</p>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      account: {
        isActive: null
      },
      msg: ""
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
    }
  }
};
</script>