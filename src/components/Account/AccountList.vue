<template>
  <div class="kgfd">
    <div class="kgfd-row">
      <div class="kgfd-col card">
        <table class="kgfd-table">
          <tr>
            <th>Ad</th>
            <th>Soyad</th>
            <th>Email</th>
            <th>Durum</th>
            <th>Kayıt Tarihi</th>
            <th>Role</th>
            <th>Düzenle</th>
            <th style="text-align:center;">Sil</th>
            <th>Hesabı Dondur</th>
          </tr>
          <tr v-for="account in accounts" :key="account.id">
            <td>{{account.name}}</td>
            <td>{{account.surname}}</td>
            <td>{{account.email}}</td>
            <td>{{account.isActive}}</td>
            <td>{{account.createTime}}</td>
            <td>{{account.role}}</td>
            <router-link :to="{ name:'detailAccount', params: { id: account.id}}">
              <td style="text-align:center;">
                <i style="cursor:pointer; " class="fa fa-pencil" aria-hidden="true"></i>
              </td>
            </router-link>
            <td style="text-align:center;">
              <i
                class="fa fa-trash"
                aria-hidden="true"
                v-on:click="Delete(account.id)"
                style="cursor:pointer;"
              ></i>
            </td>

            <td
              @click="disableAccount(account.id)"
              style="cursor:pointer; color:red;"
              v-if="account.isActive"
            >Devre Dışı Bırak</td>
            <td
              @click="disableAccount(account.id)"
              style="cursor:pointer; color:green;"
              v-if="!account.isActive"
            >Hesabı Aktif Et</td>
          </tr>
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
    disableAccount(id) {
      this.$axios
        .post("Admin/DisabledAccount/" + id)
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