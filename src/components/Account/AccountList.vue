<template>
  <div class="kgfd">
    <div class="kgfd-row">
      <div class="kgfd-col kgfd-col-m12 kgfd-col-s12 kgfd-card">
        <div class="kgfd-row">
          <div class="kgfd-col kgfd-col-4 kgfd-col-m12 kgfd-col-s12">
            <button
              v-if="link"
              @click="activeList()"
              class="kgfd-btn-link kgfd-btn-dark kgfd-grid-nopadding shorticon"
              :class="{active: id == 0}"
            >
              Aktif Kullanıcıları Listele
              <i class="fa fa-arrow-circle-down" aria-hidden="true"></i>
            </button>
            <button
              v-else
              @click="pasifList()"
              class="kgfd-btn-link kgfd-btn-dark kgfd-grid-nopadding"
              :class="{active: id == 1}"
            >
              Pasif Kullanıcıları Listele
              <i class="fa fa-arrow-circle-down" aria-hidden="true"></i>
            </button>
          </div>
          <div class="kgfd-col kgfd-col-2 kgfd-col-m12 kgfd-col-s12" style="margin-left:30px;">
            <input
              type="text"
              v-model="search"
              class="kgfd-form-input"
              placeholder="Search"
              style="border-bottom:1px solid gray; border-radius:1px;"
            />
          </div>
          <div class="kgfd-col">
            <router-link to="/register">
              <p style="font-size:22px; cursor:pointer; float:right; display:inline-block;">
                <i class="fa fa-user-plus" aria-hidden="true"></i>
              </p>
            </router-link>
          </div>
        </div>
        <br />
        <br />
        <table v-if="accounts.length" class="kgfd-table">
          <thead>
            <tr>
              <th>Ad</th>
              <th>Soyad</th>
              <th>
                Email
                <i
                  @click="listOrderBy(2)"
                  class="fa fa-sort"
                  :class="{active: id == 2}"
                  aria-hidden="true"
                ></i>
              </th>

              <th>
                Kayıt Tarihi
                <i
                  @click="listOrderBy(3)"
                  class="fa fa-sort"
                  :class="{active: id == 3}"
                  aria-hidden="true"
                ></i>
              </th>
              <th>
                Roles
                <i
                  @click="listOrderBy(4)"
                  class="fa fa-user-circle-o"
                  :class="{active: id == 4}"
                  aria-hidden="true"
                ></i>
                <i
                  @click="listOrderBy(5)"
                  class="fa fa-user-o"
                  :class="{active: id == 5}"
                  aria-hidden="true"
                ></i>
              </th>
              <th style="text-align:center;">Düzenle</th>
              <th style="text-align:center;">Sil</th>
              <th>Hesap Durum</th>
              <th>Resim</th>
              <th>Envanter Listesi</th>
              <th>Bakiye</th>
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

              <td v-if="account.role != 'Admin'" style="text-align:center;">
                <i
                  class="fa fa-trash"
                  aria-hidden="true"
                  v-on:click="Delete(account.id)"
                  style="cursor:pointer;"
                ></i>
              </td>
              <td v-else style="text-align:center;">
                <i class="fa fa-trash" aria-hidden="true" style="cursor:not-allowed;"></i>
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

              <td>
                <img src="../../assets/images/cloud.png" width="20px;" />
                <!-- <img :src="getImgUrl(account.image)" alt="haha" width="20px;" /> -->
              </td>
              <td>
                <router-link
                  :to="{ name:'UserInventory', params: { id: account.id, name:account.name +  account.surname}}"
                >Envanterim</router-link>
              </td>
              <td>{{account.bakiye}}</td>
            </tr>
          </tbody>
        </table>
        {{test}}
        <p style="padding-left:20px; margin-top:30px; font-weight:bold;">
          Toplam Kullanıcı Bakiyesi :
          <span v-if="totalRequest != 0">{{totalRequest}}</span>
        </p>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      search: null,
      accounts: [],
      link: false,
      id: 1,
      isActive: false,
      path: "../../assets/images/"
    };
  },
  created() {
    // this.AccountList();
    this.AccountList();
  },
  methods: {
    AccountList() {
      this.$axios.get("Admin/AccountList/" + this.id).then(response => {
        this.accounts = response.data;
        this.test = response.data.total;
        console.log(this.test);
      });
    },
    activeList() {
      this.link = false;
      this.id = 1;
      this.AccountList();
    },
    pasifList() {
      this.link = true;
      this.id = 0;
      this.AccountList();
    },
    listOrderBy(id) {
      this.isActive = !this.isActive;
      this.id = id;
      this.isActive = true;
      this.AccountList();
    },
    getImgUrl(pic) {
      return require("../../assets/images/" + pic);
    },
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
  },
  computed: {
    resultQuery() {
      if (this.search) {
        return this.accounts.filter(item => {
          return this.search
            .toLowerCase()
            .split(" ")
            .every(v => item.name.toLowerCase().includes(v));
        });
      } else {
        return this.accounts;
      }
    },
    activeClass: function() {
      return {
        active: this.isActive
      };
    },
    // Listedeli Toplam Bakiyeyi Göstermen için yazılan computed metodu
    totalRequest() {
      return this.accounts.reduce((acc, item) => acc + item.bakiye, 0);
    },

    //Listedeki isActive false olanları getirmek için yazılan computed metodu
    isactiveFalse() {
      return this.accounts.filter(x => x.isActive == false);

      console.log(accounts, "Active Olanlar");
    }
  }
};
</script>
<style scoped>
table.kgfd-table thead tr th i {
  cursor: pointer !important;
}
.active {
  color: black !important;
}
</style>