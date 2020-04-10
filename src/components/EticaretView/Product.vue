<template>
  <div class="kgfd">
    <form @submit.prevent="ProductAdd()">
      <div class="kgfd-row">
        <div class="kgfd-col kgfd-col-6">
          <input
            type="text"
            v-model="product.name"
            class="kgfd-form kgfd-form-input"
            placeholder="Name"
          />
        </div>
        <div class="kgfd-col kgfd-col-6">
          <input
            type="text"
            v-model="product.size"
            class="kgfd-form kgfd-form-input"
            placeholder="Size"
          />
        </div>
      </div>
      <div class="kgfd-row">
        <div class="kgfd-col">
          <input
            type="text"
            v-model="product.price"
            class="kgfd-form kgfd-form-input"
            placeholder="Price"
          />
        </div>
        <div class="kgfd-col">
          <input
            type="text"
            v-model="product.amount"
            class="kgfd-form kgfd-form-input"
            placeholder="Amount"
          />
        </div>
      </div>
      <div class="kgfd-row">
        <div class="kgfd-col">
          <input
            type="text"
            v-model="product.title"
            class="kgfd-form kgfd-form-input"
            placeholder="Title"
          />
        </div>
        <div class="kgfd-col">
          <el-select v-model="product.categoryid" placeholder="Kategoriler">
            <el-option
              v-for="category in categories"
              :key="category.categoryid"
              :label="category.name"
              :value="category.categoryid"
            ></el-option>
          </el-select>
        </div>
      </div>
      <div class="kgfd-row">
        <div class="kgfd-col">
          <div
            style="background-color:red; width:100px; height:25px; position:absolute; z-index:-1"
          ></div>
          <input type="file" name="image" ref="image" />
        </div>
        <div class="kgfd-col">
          <button type="submit" class="kgfd-btn kgfd-btn-success">Kaydet</button>
          <router-link to="/Category-Create">
            <button class="kgfd-btn kgfd-btn-success">Kategori Ekle</button>
          </router-link>
        </div>
        {{msg}}
      </div>
    </form>
  </div>
</template>
<script>
export default {
  data() {
    return {
      product: {
        name: "",
        size: "",
        price: "",
        amount: "",
        title: "",
        categoryid: "",
        file: ""
      },
      image: "",
      categories: [],
      msg: ""
    };
  },
  methods: {
    ProductAdd() {
      let formData = new FormData();
      formData.append("image", this.$refs.image.files[0]);
      this.product.file = formData;
      this.$axios
        .post("Product/ProductCreate", this.product)
        .then(response => {
          this.msg = response.data;
        })
        .catch(error => {
          this.msg = error.response.data;
        });
    },
    CategoryList() {
      this.$axios.get("Category/CategoryList").then(response => {
        this.categories = response.data;
      });
    }
  },
  created() {
    this.CategoryList();
  }
};
</script>