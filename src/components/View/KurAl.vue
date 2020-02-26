<template>
  <div class="kgfd">
    <div class="kgfd-row">
      <div class="kgfd-col kgfd-col-2" style="margin-top:20px;">
        <div class="kgfd-formbox">
          <h1>Doviz Satın Al</h1>

          <el-select v-model="birim" placeholder="Kur Seçin">
            <el-option label="Dolar" value="Dolar"></el-option>
            <el-option label="Euro" value="Euro"></el-option>
          </el-select>
          <label for>TL Tutarını Giriniz.</label>
          <input type="text" class="kgfd-form-input" v-model="TL" />
        </div>
        <div class="kgfd-formbox">
          <button @click="DovizAl()" class="kgfd-btn kgfd-btn-primary">{{birim}} Satın Al</button>
        </div>
        <p class="msg">{{msg}}</p>
        <div class="kgfd-formbox">
          <a
            class="kgfd-btn-act kgfd-btn-big button"
            @click="selectedComponent = 'doviz-sat'"
            v-if="selectedComponent == ''"
          >Döviz Bozdurmak İçin Tıklayın</a>
        </div>
        <component :is="selectedComponent"></component>
      </div>
      <div class="kgfd-col kgfd-col-3" style="margin-top:20px;">
        <Doviz />
      </div>
      <div class="kgfd-col kgfd-col-7 kgfd-card">
        <Bakiye />
      </div>
    </div>
  </div>
</template>
<script>
import { serverBus } from "../../main";
import Bakiye from "../View/bakiye.vue";
import DovizSat from "../View/dovizSat.vue";
import Doviz from "../View/doviz.vue";
export default {
  data() {
    return {
      TL: "",
      msg: "",
      id: this.$store.getters.getUserId,
      birim: "",
      selectedComponent: ""
    };
  },
  methods: {
    DovizAl(id, TL, birim) {
      this.$axios
        .get("Account/DovizCevir/", {
          params: {
            id: this.id,
            TL: this.TL,
            birim: this.birim
          }
        })
        .then(response => {
          this.msg = response.data;
          setTimeout(() => {
            window.location.reload();
            this.msg = response.data;
          }, 7000);
        })
        .catch(error => {
          this.msg = error.response.data;
        });
    }
  },
  components: {
    Bakiye,
    "doviz-sat": DovizSat,
    Doviz
  },
  mounted() {
    serverBus.$on("selectedComponent", selectedComponent => {
      this.selectedComponent = selectedComponent;
    });
  }
};
</script>
<style scoped>
.msg {
  font-weight: bold;
  color: #3a3a3a;
  font-size: 16px;
}
</style>