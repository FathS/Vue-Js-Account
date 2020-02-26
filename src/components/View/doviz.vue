<template>
  <div>
    <div class="kgfd-row">
      <div class="kgfd-col kgfd-grid-nomargin">
        <h3>AMERIKAN DOLARI</h3>
      </div>
    </div>
    <div class="kgfd-row">
      <div class="kgfd-col line">
        <label>BANKA ALIŞ</label>
        <p>$ {{doviz.dolarAlis}}</p>
      </div>
      <div class="kgfd-col line">
        <label>BANKA SATIŞ</label>
        <p>$ {{doviz.dolar}}</p>
      </div>
    </div>
    <div class="kgfd-row">
      <div class="kgfd-col kgfd-grid-nomargin">
        <h3>EURO</h3>
      </div>
    </div>
    <div class="kgfd-row">
      <div class="kgfd-col line">
        <label>BANKA ALIŞ</label>
        <p>€ {{doviz.euroAlis}}</p>
      </div>
      <div class="kgfd-col line">
        <label>BANKA SATIŞ</label>
        <p>€ {{doviz.euro}}</p>
      </div>
    </div>
    <div class="kgfd-row">
      <div class="kgfd-col kgfd-grid-nomargin">
        <h3>ALTIN GR.</h3>
      </div>
    </div>
    <div class="kgfd-row">
      <div class="kgfd-col">
        <label>BANKA ALIŞ</label>
        <p>{{doviz.altinAlis}} ₺</p>
      </div>
      <div class="kgfd-col">
        <label>BANKA SATIŞ</label>
        <p>{{doviz.altin}} ₺</p>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      doviz: {}
    };
  },
  methods: {
    getDoviz() {
      this.$axios
        .get("Doviz/Index/")
        .then(response => {
          this.doviz = response.data;
          console.log(response.data);
        })
        .catch(error => {
          window.alert(error.response.data);
        });
    }
  },
  created() {
    this.getDoviz();
  }
};
</script>
<style scoped>
label + p {
  font-size: 18px;
  font-weight: bold;
  color: #252525;
}
label {
  font-size: 14px;
  color: #383838;
  font-weight: 600;
}
.line {
  border-bottom: 1px dotted #a1a1a1;
}
</style>