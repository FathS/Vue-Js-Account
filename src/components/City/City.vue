<template>
  <div class="kgfd">
    <div class="kgfd-row">
      <div class="kgfd-col kgfd-col-2">
        <div class="kgfd-formbox">
          <label for>Şehir Ad</label>
          <input type="text" class="kgfd-form-input" v-model="citys.name" />
          <button
            style="margin-top:20px;"
            @click="AddCity(citys)"
            class="kgfd-btn kgfd-btn-success"
          >Ekle</button>
          <p>{{msg}}</p>
        </div>
      </div>
    </div>
    <div class="kgfd-row">
      <div class="kgfd-col kgfd-col-4">
        <el-select v-model="city.id" placeholder="Şehir Seçiniz" @change="getDistrict(city.id)">
          <el-option v-for="city in city" :key="city.value" :label="city.text" :value="city.value"></el-option>
        </el-select>
      </div>
    </div>
    <div class="kgfd-row">
      <div class="kgfd-col kgfd-col-4">
        <el-select v-model="districts.id" placeholder="İlçe Seçiniz" v-if="selected">
          <el-option
            v-for="district in districts"
            :key="district.id"
            :label="district.name"
            :value="district.id"
          ></el-option>
        </el-select>
      </div>
    </div>
  </div>
</template>
<script>
import service from '../../services/AuthService.js'

export default {
  data() {
    return {
      city: [],
      id: 0,
      districts: [],
      selected: false,
      citys: {
        name
      },
      msg: ""
    };
  },
  created() {},
  mounted() {
    this.getCity();
    
  },
  methods: {
    getCity() {
      this.$axios.get("City/CityList/").then(response => {
        console.log(response.data);
        this.city = response.data;
      });
    },
    getDistrict(id) {
      this.id = id;
      this.selected = true;
      this.$axios.get("City/DistrictList/" + this.id).then(response => {
        console.log(response.data);
        this.districts = response.data;
      });
    },
    AddCity(citys) {
      this.$axios.post("City/CityAdd/", citys).then(response => {
        this.msg = response.data;
        this.getCity();
      });
    }
  }
};
</script>