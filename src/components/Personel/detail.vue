<template>
  <div>
    <h1>Deneme</h1>
    <p v-if="!item">For Personel Detail Click On Row</p>
    <p>{{todosList.name}}</p>
    <p>{{todosList.surname}}</p>
  </div>
</template>
<script>
import { serverBus } from "../../main";

export default {
  data() {
    return {
      todosList: []
    };
  },
  created() {
    serverBus.$on("todosList", todosList => {
      this.todosList = todosList;
    });
  }
};
</script>