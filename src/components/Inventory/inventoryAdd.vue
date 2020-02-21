<template>
  <div class="kgfd">
    <div class="kgfd-row">
      <div class="kgfd-col">
        <div class="kgfd-row">
          <div class="kgfd-col kgfd-col-2">
            <div class="kgfd-formbox">
              <label for>Name</label>
              <input type="text" class="kgfd-form-input" v-model="inventory.name" />
            </div>
          </div>
          <div class="kgfd-col kgfd-col-2">
            <div class="kgfd-formbox">
              <label for>Marka</label>
              <input type="text" class="kgfd-form-input" v-model="inventory.marka" />
            </div>
          </div>
        </div>
        <div class="kgfd-row">
          <div class="kgfd-col kgfd-col-2">
            <div class="kgfd-formbox">
              <label for>Model</label>
              <input type="text" class="kgfd-form-input" v-model="inventory.model" />
            </div>
          </div>
          <div class="kgfd-col kgfd-col-2">
            <div class="kgfd-formbox">
              <label for>Features</label>
              <input type="text" class="kgfd-form-input" v-model="inventory.feature" />
            </div>
          </div>
        </div>
        <div class="kgfd-row">
          <div class="kgfd-col kgfd-col-2">
            <div class="kgfd-formbox">
              <label for>Serial Number</label>
              <input type="text" class="kgfd-form-input" v-model="inventory.seriNo" />
            </div>
          </div>
        </div>
        <div class="kgfd-row">
          <div class="kgfd-col kgfd-col-2">
            <div class="kgfd-formbox">
              <div class="kgfd-formbox">
                <button class="kgfd-btn kgfd-btn-success" @click="AddInventory(inventory)">Ekle</button>
              </div>
            </div>
          </div>
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
      inventory: {
        name: "",
        marka: "",
        model: "",
        feature: "",
        seriNo: ""
      },
      msg: ""
    };
  },
  methods: {
    AddInventory(inventory) {
      this.$axios
        .post("Inventory/AddInventory/", inventory)
        .then(response => {
          this.msg = response.data;
        })
        .catch(
          error(x => {
            this.msg = error.response.data;
          })
        );
    }
  }
};
</script>