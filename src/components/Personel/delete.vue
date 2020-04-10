<template>
  <div class="kgfd">
    <p style="font-weight:bold;">Silmek İstediğine Emin misin?</p>
    <button @click="Delete()">Evet</button>
    <router-link to="/Todoslist">Hayır</router-link>
  </div>
</template>
<script>
import router from "../../router";
export default {
  data() {
    return {};
  },
  methods: {
    Delete() {
      if (confirm("İşlemi Onaylıyor musunuz?")) {
        this.$axios
          .post("Home/Delete/" + this.$route.params.id)
          .then(response => {
            this.msg = response.data;
            window.alert(this.msg);
            router.push("/TodosList");
          });
      } else {
        window.alert("İşlem İptal Edildi.");
      }
    }
  }
};
</script>
<style scoped>
div.card {
  background-color: #ffffff;
  border-radius: 5px;
  padding: 5px 15px;
  height: auto;
  overflow-x: auto;
  width: 100%;
}
.popup {
  position: fixed;
  left: 0;
  top: 0;
  height: 100%;
  width: 100%;
  background-color: gray;
}
.activepop {
  display: block;
}
</style>