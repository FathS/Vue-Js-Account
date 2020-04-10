<template>
  <div class="kgfd">
    <div class="kgfd-row">
      <div class="kgfd-col kgfd-col-4" v-for="item in products" :key="item.id">
        <div class="kgfd-card">
          <p>{{item.name}}</p>
          <p>{{item.size}}</p>
          <p>{{item.title}}</p>
          <p>{{item.amount}}</p>
          <p>{{item.price}}</p>
          <!-- <img src="../../assets/images/" alt /> -->
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      products: []
    };
  },
  methods: {
    getProductList() {
      this.$axios
        .get("Product/ProductList/" + this.$route.params.id)
        .then(response => {
          this.products = response.data;
        })
        .catch(error => {
          alert(error.response.data);
          this.$router.push("/");
        });
    }
  },
  watch: {
    "$route.params.id": function(id) {
      this.getProductList().then(data => {
        this.products = response.data;
      });
    }
  },
  mounted() {
    this.getProductList();
  }
};
</script>