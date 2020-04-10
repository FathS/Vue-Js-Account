<template>
  <div class="kgfd">
    <form @submit.prevent="AddCategory()">
      <div class="kgfd-row">
        <div class="kgfd-col kgfd-col-5">
          <div class="kgfd-formbox" style="margin-top:20px;">
            <input
              type="text"
              class="kgfd-form kgfd-form-input"
              placeholder="Kategori Ad"
              v-model="category.name"
            />
          </div>
        </div>
        <div class="kgfd-col kgfd-col-5">
          <div class="kgfd-formbox" style="margin-top:20px;">
            <el-select v-model="categories.categoryid" placeholder="Kategoriler">
              <el-option
                v-for="category in categories"
                :key="category.categoryid"
                :label="category.name"
                :value="category.categoryid"
              ></el-option>
            </el-select>
          </div>
        </div>
      </div>
      <div class="kgfd-row">
        <div class="kgfd-col kgfd-col-6">
          <div class="kgfd-formbox">
            <button type="submit" class="kgfd-btn kgfd-btn-success">Kaydet</button>
            <router-link to="/Product-Create">
              <button class="kgfd-btn kgfd-btn-success">Ürün Ekle</button>
            </router-link>
          </div>
          <p>{{msg}}</p>
        </div>
      </div>
    </form>
  </div>
</template>
<script>
export default {
  data() {
    return {
      category: {
        name: ""
      },
      categories: [],
      msg: ""
    };
  },
  methods: {
    AddCategory() {
      console.log("Test");
      this.$axios
        .post("Category/CategoryCreate", this.category)
        .then(response => {
          this.msg = response.data;
          this.CategoryList();
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
  mounted() {
    this.CategoryList();
  }
};
</script>