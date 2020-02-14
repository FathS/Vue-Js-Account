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
        <el-select v-model="city.id" placeholder="Şehir Seçiniz" @change="getDistrict()">
          <el-option v-for="city in city" :key="city.value" :label="city.text" :value="city.value"></el-option>
        </el-select>
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
    <div class="kgfd-row" v-if="selected">
      <div class="kgfd-col kgfd-col-2">
        <div class="kgfd-formbox">
          <label for>İlçe Ad</label>
          <input type="text" class="kgfd-form-input" v-model="dists.name" />
          <button
            style="margin-top:20px;"
            @click="AddDist(dists)"
            class="kgfd-btn kgfd-btn-success"
          >Ekle</button>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import service from "../../services/AuthService.js";

export default {
  data() {
    return {
      city: [],
      //   id: 0,
      districts: [],
      selected: false,
      citys: {
        name
      },
      dists: {
        cityId: null,
        name: ""
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
        this.dists.cityId = response.data.value;
      });
    },
    getDistrict() {
      //   this.id = id;
      this.selected = true;
      this.$axios.get("City/DistrictList/" + this.city.id).then(response => {
        console.log(response.data);
        this.districts = response.data;
        this.dists.cityId = this.city.id;
      });
    },
    AddCity(citys) {
      this.$axios.post("City/CityAdd/", citys).then(response => {
        this.msg = response.data;
        this.getCity();
      });
    },

    AddDist(dists) {
      this.$axios.post("City/DistrictAdd/", dists).then(response => {
        this.msg = response.data;
        this.getDistrict();
      });
    }
  }
};
</script>