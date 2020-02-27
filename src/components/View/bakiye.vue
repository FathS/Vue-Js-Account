<template>
  <div>
    <h2>Hesap Bakiye</h2>
    <span class="inline-block">TL Bakiye: ₺{{userBakiye.tl}}</span>
    <span class="inline-block">USD Bakiye: ${{userBakiye.usd}}</span>
    <span class="inline-block">EURO Bakiye: €{{userBakiye.euro}}</span>
    <span class="inline-block">Altın Bakiye: {{userBakiye.altin}} Gr.</span>
    <br />
    <br />
    <div v-if="bakiye">
      <h2>Hesap Hareketleri</h2>
      <table class="kgfd-table" style="margin-bottom:100px;">
        <thead>
          <tr>
            <th>Satın Alınan Dolar veya Euro</th>
            <th>Satın Alınan ₺</th>
            <th>Satılan ₺</th>
            <th>Satılan €</th>
            <th>Satılan $</th>
            <th>$ Kur</th>
            <th>€ Kur</th>
            <th>Tarih</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="item in hareketList" :key="item.id">
            <td v-if="item.dolarKur > 0">$ {{item.buyUsd}}</td>
            <td v-else>€ {{item.buyUsd}}</td>
            <td>₺ {{item.buyTl}}</td>
            <td v-if="item.sellTl != 0">₺ {{item.sellTl}}</td>
            <td v-else></td>
            <td v-if="item.selleuro != 0">€ {{item.selleuro}}</td>
            <td v-else></td>
            <td v-if="item.sellUsd != 0">$ {{item.sellUsd}}</td>
            <td v-else></td>
            <td>$ {{item.dolarKur}}</td>
            <td>€ {{item.euroKur}}</td>
            <td>{{item.date}}</td>
          </tr>
        </tbody>
        <h4>{{msg}}</h4>
      </table>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      userBakiye: {},
      hareketList: [],
      msg: "",
      bakiye: true
    };
  },
  created() {
    this.getUser();
    this.getHareketList();
  },
  methods: {
    getUser() {
      this.$axios
        .get("Account/getBakiye/" + this.$store.getters.getUserId)
        .then(response => {
          this.userBakiye = response.data;
        })
        .catch(error => {});
    },
    getHareketList() {
      this.$axios
        .get("Account/getHesapHareket/" + this.$store.getters.getUserId)
        .then(response => {
          this.hareketList = response.data;
        })
        .catch(error => {
          this.msg = error.response.data;
          if (error.response.data == "Hesap Hareketi Bulunamadı") {
            this.bakiye = false;
          }
        });
    }
  }
};
</script>
<style scoped>
span.inline-block {
  display: block;
}
.kgfd-table tbody tr:hover {
  background-color: #f0f0f0;
  cursor: pointer;
}
.kgfd-table tbody tr:nth-child(odd) {
  background-color: #f7f7f7;
  cursor: pointer;
}

table.kgfd-table thead {
  position: sticky !important;
  top: 0 !important;
  z-index: 1;
}
.sticky {
  position: sticky !important;
  top: 0 !important;
  z-index: 10;
}
</style>