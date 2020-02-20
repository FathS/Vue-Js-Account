<template>
  <div class="kgfd">
    <div class="kgfd-row">
      <div class="kgfd-col kgfd-col-2">
        <!-- <select name="" id="" v-model="cityName">
              <option value="istanbul">İstanbul</option>
              <option value="ankara">Ankara</option>
              <option value="izmir">İzmir</option>
        </select>-->
        <el-select v-model="name" placeholder="Şehir Seçiniz" @change="getHavaDurum(name)">
          <el-option label="Tüm İller" value></el-option>
          <el-option v-for="item in cityList" :key="item" :label="item.il" :value="item.il"></el-option>
          <!-- <el-option label="Ankara" value="ANKARA"></el-option>
          <el-option label="İzmir" value="İZMİR"></el-option>
          <el-option label="Amasya" value="AMASYA"></el-option>
          <el-option label="Van" value="VAN"></el-option>
          <el-option label="Bursa" value="BURSA"></el-option>
          <el-option label="Manisa" value="MANİSA"></el-option>-->
        </el-select>
      </div>
    </div>
    <div class="kgfd-row">
      <div class="kgfd-col kgfd-col-8 card kgfd-grid-nomargin kgfd-grid-nopadding">
        <table class="kgfd-table">
          <tr v-for="item in hava" :key="item">
            <td style="font-size:10px;">{{month}} - {{date}} - {{fullyear}}</td>
            <td>{{item.il}}</td>
            <td>{{item.bolge}} Bölgesi</td>
            <td v-if="item.mak >= 14" style="color:red;">
              {{item.mak}}
              <i class="fa fa-thermometer-full" aria-hidden="true"></i>
            </td>
            <td v-else-if="item.mak <= 15 && item.mak >= 9" style="color:orange;">
              {{item.mak}}
              <i class="fa fa-thermometer-empty" aria-hidden="true"></i>
            </td>
            <td v-else-if="item.mak <= 8" style="color:green;">
              {{item.mak}}
              <i class="fa fa-thermometer-empty" aria-hidden="true"></i>
            </td>
            <td v-if="item.durum == 'Parçalı ve az bulutlu'">
              {{item.durum}}
              <img style="width:20px;" src="../../assets/images/cloud.png" />
            </td>
            <td v-if="item.durum == 'Parçalı ve çok bulutlu'">
              {{item.durum}}
              <img style="width:20px;" src="../../assets/images/cloud-full.png" />
            </td>
            <td v-if="item.durum == 'Parçalı ve çok bulutlu, aralıklı yağmurlu'">
              {{item.durum}}
              <img style="width:20px;" src="../../assets/images/rain.png" />
            </td>
            <td
              v-if="item.durum == 'Parçalı ve çok bulutlu, sabah saatlerinde yer yer puslu ve sisli'"
            >
              {{item.durum}}
              <img style="width:20px;" src="../../assets/images/smog.png" />
            </td>
          </tr>
        </table>
        <div class="kgfd-row" v-if="name == ''" style="margin-top:50px;">
          <div class="kgfd-col">
            <div class="kgfd-pgn">
              <div class="kgfd-disabled">
                <i class="fa fa-angle-double-left" aria-hidden="true"></i>
              </div>
              <div @click="currentPagination(current-=1)" v-if="current != 1">
                <i class="fa fa-angle-left" aria-hidden="true"></i>
              </div>
              <div @click="currentPagination(1)" :class="{active: current == 1}">1</div>
              <div @click="currentPagination(2)" :class="{active: current == 2}">2</div>
              <div @click="currentPagination(3)" :class="{active: current == 3}">3</div>
              <div @click="currentPagination(4)" :class="{active: current == 4}">4</div>
              <div @click="currentPagination(current+=1)" v-if="current != 4">
                <i class="fa fa-angle-right" aria-hidden="true"></i>
              </div>
              <div>
                <i class="fa fa-angle-double-right" aria-hidden="true"></i>
              </div>
            </div>
          </div>
        </div>
        <!-- <div
          v-if="name == ''"
          class="block"
          style="display:flex; justify-content:center; margin-top:20px;"
        >
          <el-pagination layout="prev, pager, next" :total="50"></el-pagination>
        </div>-->
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      name: "",
      hava: [],
      cityList: [],
      date: new Date().getDate(),
      month: new Date().getMonth() + 1,
      fullyear: new Date().getFullYear(),
      pageSize: 10,
      current: 1
    };
  },
  mounted() {
    this.getHavaDurum();
    this.getCitylist();
  },
  created() {},
  methods: {
    getHavaDurum(cityName, pageSize, CurrentPage) {
      console.log(this.name);
      this.$axios
        .get("Hava/Durum/", {
          params: {
            cityName: this.name,
            pageSize: this.pageSize,
            CurrentPage: this.current
          }
        })
        .then(response => {
          this.hava = response.data;
          console.log(response.data);
        });
    },
    currentPagination(sayi) {
      this.current = sayi;
      this.getHavaDurum();
    },
    getCitylist() {
      this.$axios
        .get("Hava/CityList/")
        .then(response => {
          console.log(response.data);
          this.cityList = response.data;
        })
        .catch(
          error(x => {
            window.alert(error.response.data);
          })
        );
    }
  }
};
</script>
<style scoped>
table.kgfd-table tr td {
  border-left: 1px solid #c7c7c7;
  padding: 10px !important;
}
.card {
  position: relative;
  width: 100%;
  padding: 20px 20px;
  margin: 0 20px;
  border-radius: 2px;
  overflow-x: auto;
  background: #fcfcfc;
  box-shadow: 1px 5px 1px 10px #ffffff;
}
.active {
  background: #6bc0e7;
  color: #ffffff;
}
</style>