<template>
  <div>
    <div class="kgfd-row">
      <div class="kgfd-col kgfd-col-6 kgfd-col-m12 kgfd-col-s12">
        <div class="kgfd-formbox" :class="{invalid: $v.contact.name.$error}">
          <label>Name</label>
          <input
            @input="$v.contact.name.$touch()"
            type="text"
            class="kgfd-form-input"
            v-model="contact.name"
          />
          <div v-if="!$v.contact.name.minLen">İsim en az 5 karakter olmalıdır</div>
        </div>
      </div>
      <div class="kgfd-col kgfd-col-6 kgfd-col-m12 kgfd-col-s12">
        <div class="kgfd-formbox">
          <label>Surname</label>
          <input type="text" class="kgfd-form-input" v-model="contact.surname" />
        </div>
      </div>
    </div>
    <div class="kgfd-row">
      <div class="kgfd-col kgfd-col-6 kgfd-col-m12 kgfd-col-s12">
        <div class="kgfd-formbox">
          <label>Gender</label>
          <el-select v-model="contact.gender" placeholder="Cinsiyet">
            <el-option value="Erkek">Male</el-option>
            <el-option value="Kadın">Female</el-option>
          </el-select>
        </div>
      </div>
      <div class="kgfd-col kgfd-col-6 kgfd-col-m12 kgfd-col-s12">
        <div class="kgfd-formbox">
          <label>Position</label>
          <input type="text" class="kgfd-form-input" v-model="contact.department" />
        </div>
      </div>
    </div>
    <div class="kgfd-row">
      <div class="kgfd-col kgfd-col-6 kgfd-col-m12 kgfd-col-s12">
        <div class="kgfd-formbox">
          <label>Doğum Tarihi</label>
          <el-date-picker v-model="contact.birthday" type="date" placeholder="Pick a day"></el-date-picker>
        </div>
      </div>
      <div class="kgfd-col kgfd-col-6 kgfd-col-m12 kgfd-col-s12">
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
      <div class="kgfd-col kgfd-col-6 kgfd-col-m12 kgfd-col-s12">
        <div class="kgfd-formbox">
          <label>City</label>
          <el-select
            v-model="contact.cityId"
            placeholder="Şehir Seçiniz"
            @change="getDistrict(contact.cityId)"
          >
            <el-option
              v-for="city in cityList"
              :key="city.value"
              :label="city.text"
              :value="city.value"
            ></el-option>
          </el-select>
        </div>
      </div>
      <div class="kgfd-col kgfd-col-6 kgfd-col-m12 kgfd-col-s12" v-if="selected">
        <div class="kgfd-formbox">
          <label>District</label>
          <el-select v-model="contact.districtId" placeholder="İlçe Seçiniz">
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
    <div class="kgfd-row">
      <div class="kgfd-col kgfd-col-12 kgfd-text-right">
        <div class="kgfd-formbox">
          <div style="text-align:left;">{{msg}}</div>
          <a
            href="JavaScript:Void(0);"
            v-on:click="keyupEvent(changeComp)"
            class="kgfd-btn kgfd-btn-link"
          >İptal</a>
          <button
            @click="createUser(contact)"
            type="submit"
            class="kgfd-btn kgfd-btn-success"
          >Kaydet</button>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import {
  required,
  email,
  numeric,
  minValue,
  minLength,
  sameAs,
  requiredUnless
} from "vuelidate/lib/validators";
export default {
  //   props: ["parentMessage"],

  validations: {
    contact: {
      name: {
        required,
        minLen: minLength(5)
      }
    }
  },

  data() {
    return {
      cityList: [],
      managerList: [],
      districts: [],
      id: 0,
      selected: false,
      contact: {
        name: "",
        surname: "",
        gender: "",
        department: "",
        birthday: "",
        cityId: null,
        managerId: null,
        districtId: null
      },
      changeComp: "",
      msg: ""
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
      this.$axios
        .post("Home/Add/", contact)
        .then(response => {
          this.msg = response.data;
          setTimeout(() => {
            window.location.reload();
          }, 2000);
        })
        .catch(error => {
          this.msg = error.response.data;
        });
    },
    keyupEvent() {
      this.$emit("selectedComponent", this.changeComp);
    },

    GetCityList() {
      this.$axios.get("City/CityList/").then(response => {
        this.cityList = response.data;
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
    getManagerList() {
      this.$axios.get("Home/managerList/").then(response => {
        this.managerList = response.data;
      });
    }
  },
  computed: {
    refresh() {
      window.location.reload();
    }
  }
};
</script>
<style scoped >
.invalid input {
  border: 1px solid red !important;
  background-color: #ffc9aa;
}
.invalid label {
  color: red !important;
}
</style>