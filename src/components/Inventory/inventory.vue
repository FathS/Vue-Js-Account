<template>
  <div class="kgfd">
    <div class="kgfd-row">
      <div class="kgfd-col kgfd-card">
        <div class="kgfd-row">
          <div class="kgfd-col kgfd-col-2 kgfd-col-m12 kgfd-col-s12">
            <input
              type="text"
              v-model="search"
              class="kgfd-form-input"
              placeholder="Search"
              style="border-bottom:1px solid gray; border-radius:1px;"
            />
          </div>
          <div class="kgfd-col kgfd-col-2 kgfd-col-m12 kgfd-col-s12">
            <el-select
              v-model="accountList.id"
              @change="changeSecilen()"
              placeholder="Kullanıcı Seçiniz"
            >
              <el-option
                v-for="item in accountList"
                :key="item.id"
                :label="item.email"
                :value="item.id"
              ></el-option>
            </el-select>
          </div>
          <p>{{msg}}</p>
          <div class="kgfd-col">
            <router-link to="/InventoryAdd">
              <p style="font-size:22px; cursor:pointer; float:right; display:inline-block;">
                <i class="fa fa-plus" aria-hidden="true"></i>
              </p>
            </router-link>
          </div>
        </div>
        <table class="kgfd-table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Marka</th>
              <th>Model</th>
              <th>Feature</th>
              <th>Serial Number</th>
              <th>Status</th>
              <th>Account</th>
              <th>Create Time</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="item in inventoryList" :key="item.id">
              <td>{{item.name}}</td>
              <td>{{item.marka}}</td>
              <td>{{item.model}}</td>
              <td>{{item.feature}}</td>
              <td>{{item.seriNo}}</td>
              <td v-if="item.status">Kullanıcıda</td>
              <td v-else>Boşta</td>
              <td v-if="item.status">{{item.accountMail}}</td>
              <td v-else>
                <Button
                  class="kgfd-btn kgfd-btn-primary"
                  @click="AddInventory(item.id)"
                  :disabled="!secilen"
                  :class="{disabled: secilen == false}"
                >Atama Yap</Button>
              </td>
              <td>{{item.createTime}}</td>
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
      inventoryList: [],
      accountList: [],
      secilen: false,
      msg: ""
    };
  },
  methods: {
    getAccount() {
      this.$axios.get("Admin/AccountList/" + 2).then(response => {
        this.accountList = response.data;
        console.log(response.data);
      });
    },
    AddInventory(Id, UserId) {
      this.$axios
        .get("Inventory/AddTransfer/", {
          params: {
            Id,
            UserId: this.accountList.id
          }
        })
        .then(response => {
          this.msg = response.data;
        })
        .catch(error => {
          this.msg = error.response.data;
        });
    },
    getList() {
      this.$axios
        .get("Inventory/GetList/")
        .then(response => {
          this.inventoryList = response.data;
          console.log(response.data);
        })
        .catch(error => {
          this.msg = error.response.data;
        });
    },
    changeSecilen() {
      this.secilen = true;
    }
  },
  created() {
    this.getList();
    this.getAccount();
  }
};
</script>
<style scoped>
.disabled {
  cursor: not-allowed;
}
</style>