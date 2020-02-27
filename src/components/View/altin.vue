<template>
  <div>
    <div class="kgfd-formbox">
      <h1>Altın Satın Al</h1>
      <el-select v-model="birim">
        <el-option label="Altın" value="Altin"></el-option>
      </el-select>
      <label for>Gram Giriniz</label>
      <input :type="type" class="kgfd-form-input" @keyup="altinHesapla()" v-model="gram" />
      <p style="color:red;">{{msg}}</p>
    </div>
    <div class="kgfd-formbox">
      <button @click="DovizAl()" class="kgfd-btn kgfd-btn-primary">{{birim}} Satın Al</button>
    </div>
  </div>
</template>
<script>
import service from "../../Helper/Service.js";
export default {
  data() {
    return {
      altin: "",
      gram: "",
      userBakiye: "",
      id: this.$store.getters.getUserId,
      msg: "",
      birim: "Altin",
      sonuc: "",
      type: "text"
    };
  },
  methods: {
    getAltin() {
      this.$axios.get("Doviz/Index/").then(response => {
        this.altin = response.data.altin;
      });
    },
    getBakiye() {
      this.$axios
        .get("Account/getBakiye/" + this.$store.getters.getUserId)
        .then(response => {
          this.userBakiye = response.data.tl;
        })
        .catch(error => {});
    },
    altinHesapla() {
      this.test();
      this.sonuc = this.altin * this.gram;
      if (this.sonuc > this.userBakiye) {
        this.msg =
          "Yetersiz Bakiye. Hesabınızda " + this.sonuc + " TL olmalıdır.";
      } else {
        this.msg = "";
      }
    },
    DovizAl(id, TL, birim) {
      this.$axios
        .get("Account/DovizCevir/", {
          params: {
            id: this.id,
            TL: this.gram,
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
    },
    test() {
      this.gram.replace("A", "B");
    }
  },
  created() {
    this.getAltin();
    this.getBakiye();
  }
};
</script>