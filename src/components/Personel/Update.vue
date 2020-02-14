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
      this.$axios.get("Home/Get/" + this.$route.params.id).then(response => {
        this.todosList = response.data;
      });
    },
    getCityList() {
      this.$axios.get("City/CityList/").then(response => {
        this.cityList = response.data;
      });
    },
    getManagerList() {
      this.$axios.get("Home/managerList/").then(response => {
        this.managerList = response.data;
      });
    },
    updateUser(todosList) {
      this.$axios.put("Home/Update/", todosList);
      return this.$router.push({ name: "todoslist" });
    }
  }
};
</script>