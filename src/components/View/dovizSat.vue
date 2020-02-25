<template>
  <div>
    <div class="kgfd-formbox">
      <h1>Doviz Bozdur</h1>
      <el-select v-model="birim" placeholder="Bozdurmak İstediğiniz Dovizi Seçin">
        <el-option label="Dolar" value="Dolar"></el-option>
        <el-option label="Euro" value="Euro"></el-option>
      </el-select>
      <label for>Bozdurmak İstediğiniz TL Tutarı</label>
      <input type="number" class="kgfd-form-input" v-model="döviz" />
    </div>
    <div class="kgfd-formbox">
      <button class="kgfd-btn kgfd-btn-primary" @click="DovizSat()">Bozdur</button>
      <button
        style="display:inline-block;"
        class="kgfd-btn kgfd-btn-warning"
        @click="cancel()"
      >İptal</button>
      <p>{{msg}}</p>
    </div>
  </div>
</template>
<script>
import { serverBus } from "../../main";
export default {
  data() {
    return {
      selectedComponent: "",
      id: this.$store.getters.getUserId,
      birim: "",
      döviz: "",
      msg: ""
    };
  },
  methods: {
    cancel() {
      serverBus.$emit("selectedComponent", this.selectedComponent);
    },
    DovizSat(id, döviz, birim) {
      this.$axios
        .get("Account/DovizSat/", {
          params: {
            id: this.id,
            döviz: this.döviz,
            birim: this.birim
          }
        })
        .then(response => {
          this.msg = response.data;
        })
        .catch(error => {
          this.msg = error.response.data;
        });
    }
  },
  created() {}
};
</script>
<style scoped>
</style>