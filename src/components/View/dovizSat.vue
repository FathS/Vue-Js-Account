<template>
  <div>
    <div class="kgfd-formbox">
      <h1>Doviz Bozdur</h1>
      <el-select v-model="birim" placeholder=" Doviz Seçin">
        <el-option label="Dolar" value="Dolar"></el-option>
        <el-option label="Euro" value="Euro"></el-option>
      </el-select>
      {{birimMsg}}
      <label for>Bozdurmak İstediğiniz {{birim}} Tutar</label>
      <input type="text" class="kgfd-form-input" v-model="döviz" @keyup="deneme()" />
      <p style="color:red;">{{warning}}</p>
    </div>
    <div class="kgfd-formbox">
      <button class="kgfd-btn kgfd-btn-primary" :disabled="disabled" @click="DovizSat()">Bozdur</button>
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
      döviz: 0,
      msg: "",
      warning: "",
      disabled: false
    };
  },
  methods: {
    cancel() {
      serverBus.$emit("selectedComponent", this.selectedComponent);
    },
    deneme() {
      if (this.döviz <= 2) {
        this.warning = "2,00 " + this.birim + "'dan büyük tutar girmelisiniz.";
        this.this.disabled = true;
      } else {
        this.warning = "";
        this.disabled = false;
      }
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
  created() {
    if (this.döviz < 2) {
      this.disabled = true;
    } else {
      this.disabled = false;
    }
  }
};
</script>
<style scoped>
</style>