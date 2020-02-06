<template>
  <div class="kgfd">
    <div class="kgfd-row">
      <div class="kgfd-col">
        <p v-if="token != null">{{name}}</p>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {};
  },
  computed: {
    name() {
      return this.$store.getters.changeName;
    },
    token() {
      return this.$store.state.token;
    }
  },
  
};
</script>