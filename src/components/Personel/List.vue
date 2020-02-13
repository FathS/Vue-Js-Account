<template>
  <div class="kgfd">
    <div class="container">
      <div class="kgfd-row">
        <div class="kgfd-col kgfd-col-6 card kgfd-col-m12 kgfd-col-s12" v-if="token != null">
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
          <table class="kgfd-table">
            <thead>
              <tr>
                <th>Name</th>
                <th>Surname</th>
                <th>Manager</th>
                <th>City</th>
                <th>District</th>
                <th>Edit</th>
                <th style="text-align:center;">Delete</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="item in todosList" v-bind:key="item" v-on:click="serverSelected()">
                <td>{{item.name}}</td>
                <td>{{item.surname}}</td>
                <td>{{item.manager}}</td>
                <td>{{item.city}}</td>
                <!-- <td v-if="item.district == null">İlçe Seçilmemiş</td> -->
                <td>{{item.district}}</td>
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
        <div class="kgfd-col kgfd-col-6 kgfd-col-m12 kgfd-col-s12">
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
import Detail from "./detail.vue";
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
    GetList() {
      this.$axios.get("Home/Index/").then(response => {
        this.todosList = response.data;
      });
    },
    Delete(id) {
      if (confirm("İşlemi Onaylıyor musunuz?")) {
        this.$axios.post("Home/Delete/" + id);
        window.alert("Kayıt Silindi!");
        window.location.reload();
      } else {
        window.alert("İşlem İptal Edildi.");
      }
    }
  },
  computed: {
    actives() {
      return this.todosList.filter(x => x.IsActive);
    },
    token() {
      return this.$store.state.token;
    }
  },
  components: {
    appUserCreate: userCreate
  }
};
</script>