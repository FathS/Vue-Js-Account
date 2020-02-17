<template>
  <div class="kgfd">
    <div class="kgfd-row">
      <div class="kgfd-col kgfd-card">
        <router-link to="/register">
          <p style="font-size:22px; cursor:pointer; text-align:right;">
            <i class="fa fa-user-plus" aria-hidden="true"></i>
          </p>
        </router-link>
        <table class="kgfd-table">
          <thead>
            <tr>
              <th>Ad</th>
              <th>Soyad</th>
              <th>
                Email
                <i class="fa fa-address-card-o" aria-hidden="true"></i>
              </th>

              <th>
                Kayıt Tarihi
                <i class="fa fa-clock-o" aria-hidden="true"></i>
              </th>
              <th>
                Roles
                <i class="fa fa-user-circle-o" aria-hidden="true"></i>
                <i class="fa fa-user-o" aria-hidden="true"></i>
              </th>
              <th style="text-align:center;">Düzenle</th>
              <th style="text-align:center;">Sil</th>
              <th>Hesap Durum</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="account in accounts" :key="account.id">
              <td>{{account.name}}</td>
              <td>{{account.surname}}</td>
              <td>
                <i class="fa fa-address-card-o" aria-hidden="true"></i>
                {{account.email}}
              </td>

              <td>
                <i class="fa fa-clock-o" aria-hidden="true"></i>
                {{account.createTime}}
              </td>
              <td v-if="account.role == 'Admin'">
                <i class="fa fa-user-circle-o" aria-hidden="true"></i>
                {{account.role}}
              </td>
              <td v-else>
                <i class="fa fa-user-o" aria-hidden="true"></i>
                {{account.role}}
              </td>

              <td style="text-align:center !important;">
                <router-link :to="{ name:'detailAccount', params: { id: account.id}}">
                  <i style="cursor:pointer; " class="fa fa-pencil" aria-hidden="true"></i>
                </router-link>
              </td>

              <td style="text-align:center;">
                <i
                  class="fa fa-trash"
                  aria-hidden="true"
                  v-on:click="Delete(account.id)"
                  style="cursor:pointer;"
                ></i>
              </td>

              <td v-if="account.isActive">
                <span style="color:green; font-weight:bold;">Aktif</span> -
                <span
                  @click="AccountisActive(account.id)"
                  style="cursor:pointer; color:red;"
                >Pasif Yap</span>
              </td>
              <td v-if="!account.isActive">
                <span style="color:red; font-weight:bold;">Pasif</span> -
                <span
                  @click="AccountisActive(account.id)"
                  style="cursor:pointer; color:green;"
                >Aktif Et</span>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      accounts: []
    };
  },
  created() {
    this.$axios.get("Admin/AccountList/").then(response => {
      this.accounts = response.data;
    });
  },
  methods: {
    AccountisActive(id) {
      this.$axios
        .post("Admin/AccountisActive/" + id)
        .then(response => {
          window.alert(response.data);
          window.location.reload();
        })
        .catch(error => {
          window.alert(error.response.data);
          window.location.reload();
        });
    },
    Delete(id) {
      this.$axios
        .post("Admin/Delete/" + id)
        .then(response => {
          window.alert(response.data);
          window.location.reload();
        })
        .catch(error => {
          window.alert(error.response.data);
        });
    }
  }
};
</script>