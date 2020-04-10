<template>
  <div class="kgfd">
    <div id="popup">
      <div class="popup-content">
        <div class="kgfd-row">
          <div class="kgfd-col kgfd-col-12">
            <p>Devam Etmek İstediğinize Emin misiniz?</p>
          </div>
        </div>
        <div class="kgfd-row">
          <div class="kgfd-col kgfd-col-12">
            <button class="kgfd-btn kgfd-btn-primary">Evet</button>
            <button @click="keyupEvent()" class="kgfd-btn kgfd-btn-warning">Hayır</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped>
#popup {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.4);
  z-index: 999;
  display: block;
  animation: popup 1s ease;
}
#popup .popup-content {
  position: fixed;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  background-color: #ffffff;
  box-shadow: 1px 1px 5px 1px #f1f1f1f1;
  border-radius: 7px;
  padding: 20px 10px;
}
</style>

<script>
export default {
  data() {
    return {
      selectComponent: ""
    };
  },
  methods: {
    keyupEvent() {
      this.$emit("SelectedComponent", this.selectComponent);
    }
  }
};
</script>