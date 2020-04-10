<template>
  <div class="kgfd">
    <div class="kgfd-row">
      <div class="kgfd-col">
        <form @submit.prevent="save()">
          <input type="file" name="image" ref="image" />
          <button type="submit">Kaydet</button>
        </form>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      image: "",
      msg: ""
    };
  },
  methods: {
    save() {
      let formData = new FormData();
      formData.append("image", this.$refs.image.files[0]);
      this.$axios.post("product/imageadd", formData).then(response => {
        this.msg = response.data;
      });
    }
  }
};
</script>