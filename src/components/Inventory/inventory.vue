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
              <td v-else>Boşta</td>
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
      inventoryList: []
    };
  },
  methods: {
    getList() {
      this.$axios.get("Inventory/GetList/").then(response => {
        this.inventoryList = response.data;
      });
    }
  },
  created() {
    this.getList();
  }
};
</script>