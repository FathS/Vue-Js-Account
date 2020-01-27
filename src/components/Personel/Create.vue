<template>
  <div>
    <div class="kgfd-row">
      <div class="kgfd-col kgfd-col-6">
        <div class="kgfd-formbox">
          <label>Name</label>
          <input type="text" class="kgfd-form-input" v-model="contact.name" />
        </div>
      </div>
      <div class="kgfd-col kgfd-col-6">
        <div class="kgfd-formbox">
          <label>Surname</label>
          <input type="text" class="kgfd-form-input" v-model="contact.surname" />
        </div>
      </div>
    </div>
    <div class="kgfd-row">
      <div class="kgfd-col kgfd-col-6">
        <div class="kgfd-formbox">
          <label>Gender</label>
          <el-select v-model="contact.gender" placeholder="Cinsiyet">
            <el-option value="Erkek">Male</el-option>
            <el-option value="Kadın">Female</el-option>
          </el-select>
        </div>
      </div>
      <div class="kgfd-col kgfd-col-6">
        <div class="kgfd-formbox">
          <label>Position</label>
          <input type="text" class="kgfd-form-input" v-model="contact.department" />
        </div>
      </div>
    </div>
    <div class="kgfd-row">
      <div class="kgfd-col kgfd-col-6">
        <div class="kgfd-formbox">
          <label>Doğum Tarihi</label>
          <el-date-picker v-model="contact.birthday" type="date" placeholder="Pick a day"></el-date-picker>
        </div>
      </div>
      <!-- <div class="kgfd-col kgfd-col-6">
        <div class="kgfd-formbox">
          <label>Resim Ekle</label>
          <input type="file" class="kgfd-form-input" @change="onFile()" />
        </div>
      </div>-->
    </div>
    <div class="kgfd-row">
      <div class="kgfd-col kgfd-col-6">
        <div class="kgfd-formbox">
          <label>City</label>
          <el-select v-model="contact.cityId" placeholder="Şehir Seçiniz">
            <el-option
              v-for="city in cityList"
              :key="city.value"
              :label="city.text"
              :value="city.value"
            ></el-option>
          </el-select>
        </div>
      </div>
      <div class="kgfd-col kgfd-col-6">
        <div class="kgfd-formbox">
          <label>Manager</label>
          <el-select v-model="contact.managerId" placeholder="Şehir Seçiniz">
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
      <div class="kgfd-col kgfd-col-12 kgfd-text-right">
        <div class="kgfd-formbox">
          <a
            href="JavaScript:Void(0);"
            v-on:click="keyupEvent(changeComp)"
            class="kgfd-btn kgfd-btn-link"
          >İptal</a>
          <a
            href="JavaScript:Void(0);"
            @click="createUser(contact)"
            class="kgfd-btn kgfd-btn-success"
          >Kaydet</a>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  //   props: ["parentMessage"],

  data() {
    return {
      cityList: [],
      managerList: [],
      contact: {
        name: "",
        surname: "",
        gender: "",
        department: "",
        birthday: "",
        cityId: null,
        managerId: null
      },
      changeComp: ""
    };
  },
  created: function() {
    this.GetCityList();
    this.getManagerList();
  },
  methods: {
    onFile(event) {
      this.contact.image = event.target.files[0];
    },
    createUser(contact) {
      const url = "http://localhost:1256/Home/Add/";
      return this.$axios.post(url, contact);
    },
    keyupEvent() {
      this.$emit("selectedComponent", this.changeComp);
    },

    GetCityList() {
      this.$axios.get("http://localhost:1256/Home/CityList/").then(response => {
        this.cityList = response.data;
      });
    },
    getManagerList() {
      this.$axios
        .get("http://localhost:1256/Home/managerList/")
        .then(response => {
          this.managerList = response.data;
        });
    }
  }
};
</script>