<template>
  <div class="kgfd">
    <div class="container">
      <div class="kgfd-row">
        <!-- {{todosList.id}} -->

        <div class="kgfd-col kgfd-col-3">
          <div class="kgfd-formbox">
            <label>Name</label>
            <input type="text" class="kgfd-form-input" v-model="todosList.name" />
          </div>
        </div>
        <div class="kgfd-col kgfd-col-3">
          <div class="kgfd-formbox">
            <label>Surname</label>
            <input type="text" class="kgfd-form-input" v-model="todosList.surname" />
          </div>
        </div>
      </div>
      <div class="kgfd-row">
        <div class="kgfd-col kgfd-col-3">
          <div class="kgfd-formbox">
            <label>Gender</label>
            <el-select v-model="todosList.gender" placeholder="Cinsiyet">
              <el-option value="Erkek">Male</el-option>
              <el-option value="Kadın">Female</el-option>
            </el-select>
          </div>
        </div>
        <div class="kgfd-col kgfd-col-3">
          <div class="kgfd-formbox">
            <label>Position</label>
            <input type="text" class="kgfd-form-input" v-model="todosList.department" />
          </div>
        </div>
      </div>
      <div class="kgfd-row">
        <div class="kgfd-col kgfd-col-3">
          <div class="kgfd-formbox">
            <label>Doğum Tarihi</label>
            <el-date-picker v-model="todosList.birthday" type="date" placeholder="Pick a day"></el-date-picker>
          </div>
        </div>
      </div>
      <div class="kgfd-row">
        <div class="kgfd-col kgfd-col-3">
          <div class="kgfd-formbox">
            <label>City</label>
            <el-select v-model="todosList.cityId" placeholder="Şehir Seçiniz">
              <el-option
                v-for="city in cityList"
                :key="city.value"
                :label="city.text"
                :value="city.value"
              ></el-option>
            </el-select>
          </div>
        </div>
        <div class="kgfd-col kgfd-col-3">
          <div class="kgfd-formbox">
            <label>Manager</label>
            <el-select v-model="todosList.managerId" placeholder="Şehir Seçiniz">
              <el-option
                v-for="manager in managerList"
                :key="manager.value"
                :label="manager.text"
                :value="manager.value"
              ></el-option>
            </el-select>
          </div>
        </div>
      </div>
      <div class="kgfd-row">
        <div class="kgfd-col kgfd-col-3">
          <div class="kgfd-formbox">
            <button
              type="submit"
              href="JavaScript:Void(0);"
              @click="updateUser(todosList)"
              class="kgfd-btn kgfd-btn-success"
            >Kaydet</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<style scope>
</style>
<script>
export default {
  data() {
    return {
      todosList: {
        name: "",
        surname: "",
        gender: "",
        department: "",
        birthday: "",
        cityId: null,
        managerId: null
      },
      cityList: [],
      managerList: []
    };
  },
  created() {
    this.getDetail();
    this.getCityList();
    this.getManagerList();
  },
  methods: {
    getDetail() {
      const url = this.$store.getters.apiUrl + "Home/Get/";
      this.$axios
        .get(url + this.$route.params.id)
        .then(response => {
          this.todosList = response.data;
        });
    },
    getCityList() {
      const url = this.$store.getters.apiUrl + "Home/CityList/";
      this.$axios.get(url).then(response => {
        this.cityList = response.data;
      });
    },
    getManagerList() {
      const url = this.$store.getters.apiUrl + "Home/managerList/";
      this.$axios
        .get(url)
        .then(response => {
          this.managerList = response.data;
        });
    },
    updateUser(todosList) {
      // const url = "http://localhost:5000/Home/Update/" + this.$route.params.id;
      const url = this.$store.getters.apiUrl + "Home/Update/" + this.$route.params.id;
      this.$axios.put(url, todosList);
      return this.$router.push({ name: "todoslist" });
    }
  }
};
</script>