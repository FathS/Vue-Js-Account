<template>
  <div class="kgfd">
    <div class="kgfd-row">
      <div class="kgfd-col kgfd-col-2">
        <div class="kgfd-formbox">
          <h1>Doviz Satın Al</h1>

          <el-select v-model="birim" placeholder="Kur Seçin">
            <el-option label="Dolar" value="Dolar"></el-option>
            <el-option label="Euro" value="Euro"></el-option>
          </el-select>
          <label for>TL Tutarını Giriniz.</label>
          <input type="text" class="kgfd-form-input" v-model="TL" />
        </div>
      </div>
      <!-- <div class="kgfd-col kgfd-col-2">
        <div class="kgfd-formbox">
          <h1>Euro Satın Al</h1>
          <label for>TL Tutarını Giriniz.</label>
          <input type="text" class="kgfd-form-input" v-model="TL" />
        </div>
      </div>-->
    </div>
    <div class="kgfd-row">
      <div class="kgfd-col kgfd-col-2">
        <div class="kgfd-formbox">
          <button @click="DovizAl()" class="kgfd-btn kgfd-btn-primary">{{birim}} Satın Al</button>
        </div>
      </div>
      <!-- <div class="kgfd-col kgfd-col-2">
        <div class="kgfd-formbox">
          <button @click="DovizAl()" class="kgfd-btn kgfd-btn-primary">€ Satın Al</button>
        </div>
      </div>-->
    </div>
    <div class="kgfd-row">
      <p>{{msg}}</p>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      TL: "",
      msg: "",
      id: this.$store.getters.getUserId,
      birim: ""
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
        })
        .catch(error => {
          this.msg = error.response.data;
        });
    }
  }
};
</script>