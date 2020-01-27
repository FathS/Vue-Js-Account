<template>
  <div class="kgfd">
    <div class="container">
      <div class="kgfd-row">
        <div class="kgfd-col kgfd-col-6 card">
          <br />
          <a
            href="JavaScript:void(0);"
            @click="selectedComponent = 'appUserCreate'"
            style="padding-left:8px; color:green; font-weight:bold;"
          >
            Add
            <i class="fa fa-plus" aria-hidden="true"></i>
          </a>
          <br />
          <br />
          <table>
            <thead>
              <tr>
                <th>Name</th>
                <th>Surname</th>
                <th>Manager</th>
                <th>City</th>
                <th>Edit</th>
                <th style="text-align:center;">Delete</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="item in todosList" v-bind:key="item">
                <td>{{item.name}}</td>
                <td>{{item.surname}}</td>
                <td>{{item.manager}}</td>
                <td>{{item.city}}</td>
                <router-link :to="{ name:'detail', params: { id: item.id}}">
                  <td>
                    <i class="fa fa-pencil" aria-hidden="true"></i>
                  </td>
                </router-link>
                <td style="text-align:center;">
                  <i
                    class="fa fa-trash"
                    aria-hidden="true"
                    v-on:click="Delete(item.id)"
                    style="cursor:pointer;"
                  ></i>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div class="kgfd-col kgfd-col-6">
          <component @selectedComponent="selectedComponent = $event" :is="selectedComponent"></component>
        </div>
      </div>
    </div>
  </div>
</template>
<style scope>
div.card {
  background-color: #ffffff;
  border-radius: 5px;
  padding: 5px 15px;
  height: auto;
  overflow-x: auto;
  width: 100%;
}
</style>
<script>
import userCreate from "./Create.vue";
export default {
  data() {
    return {
      todosList: [],
      selectedComponent: ""
    };
  },
  // mounted() {
  //   axios.get("http://localhost:1256/Home/Index/").then(response => {
  //     this.todosList = response.data.slice();
  //   });
  // },
  created: function() {
    this.GetList();
  },
  methods: {
    // getUser(user) {
    //   swal("header", "body");
    // },
    GetList() {
      this.$axios.get("http://localhost:1256/Home/Index/").then(response => {
        this.todosList = response.data;
      });
    },
    Delete(id) {
      // axios
      //   .delete("http://localhost:1256/Home/Index/Delete/" + id).then(response => { this.todosList.splice(id, 1);
      //   });
      if (confirm("İşlemi Onaylıyor musunuz?")) {
        const url = "http://localhost:1256/Home/Delete/" + id;
        this.$axios.post(url);
        window.alert("Kayıt Silindi!");
      } else {
        window.alert("İşlem İptal Edildi.");
      }
    }
  },
  computed: {
    actives() {
      return this.todosList.filter(x => x.IsActive);
    }
  },
  components: {
    appUserCreate: userCreate
  }
};
</script>