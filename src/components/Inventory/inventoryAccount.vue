<template>
  <div class="kgfd">
    <div class="kgfd-row">
      <div class="kgfd-col kgfd-card">
        <div class="kgfd-row kgfd-col-align-center">
          <div class="kgfd-col">
            <p>
              <strong>{{user}} 'e Ait Envanter Listesi</strong>
            </p>
            <!-- <el-select
              v-model="inventoryList.id"
              @change="changeSecilen()"
              placeholder="Kullanıcı Seçiniz"
            >
              <el-option
                v-for="item in inventoryList"
                :key="item.id"
                :label="item.name"
                :value="item.id"
              ></el-option>
            </el-select>-->
          </div>
          <div class="kgfd-col kgfd-text-right">
            <Button @click="AddInventory()" class="kgfd-btn kgfd-btn-success">Envanter Ekle</Button>
          </div>
        </div>

        <table class="kgfd-table">
          <thead>
            <tr>
              <th>Kullanıcı</th>
              <th>Name</th>
              <th>Marka</th>
              <th>Model</th>
              <th>Feature</th>
              <th>Serial Number</th>
              <th>Create Time</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="item in inventory" :key="item.id">
              <td>{{item.accountMail}}</td>
              <td>{{item.name}}</td>
              <td>{{item.marka}}</td>
              <td>{{item.model}}</td>
              <td>{{item.feature}}</td>
              <td>{{item.seriNo}}</td>
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
      inventory: [],
      user: this.$route.params.name,
      inventoryList: []
    };
  },
  created() {
    this.getInventory();
    this.getList();
  },
  methods: {
    getInventory() {
      this.$axios
        .get("Inventory/GetInventory/" + this.$route.params.id)
        .then(response => {
          this.inventory = response.data;
          console.log(response.data);
        })
        .catch(error => {
          window.alert(error.response.data);
          this.$router.push("/Accounts");
        });
    },
    AddInventory(Id, UserId) {
      this.$axios
        .get("Inventory/AddTransfer/", {
          params: {
            Id: this,
            UserId: this.$route.params.id
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
        })
        .catch(error => {
          this.msg = error.response.data;
        });
    }
  }
};
</script>