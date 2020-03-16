<template>
  <div class="kgfd" style="padding:0;">
    <div class="kgfd-row kgfd-header">
      <div class="kgfd-col kgfd-grid-nomargin">
        <router-link to="/" active-class="active" exact>
          <div class="link-btn">Home</div>
        </router-link>
        <router-link to="/aboutUS" active-class="active" exact>
          <div class="link-btn">About US</div>
        </router-link>
        <router-link v-if="token" to="/Todoslist" active-class="active">
          <div class="link-btn">User</div>
        </router-link>
        <router-link v-if="token" to="/City" active-class="active">
          <div v-if="token" class="link-btn">City</div>
        </router-link>
        <div
          v-if="token"
          @mouseover="changeActiveinv()"
          @mouseleave="changeActiveinvLeave()"
          class="link-btn"
          style="transform: scale(1);"
        >
          Inventory
          <i
            :class="{iconActive: isActiveinv, iconDisabled:!isActiveinv }"
            class="fa fa-chevron-up"
            aria-hidden="true"
          ></i>
        </div>
        <div
          @mouseover="changeActiveinv()"
          @mouseleave="changeActiveinvLeave()"
          class="acilir-menu-inventory"
          :class="{activeMenuinv:isActiveinv}"
        >
          <ul class="menu-link-inventory">
            <li>
              <router-link to="/Inventory">
                <i class="fa fa-chevron-right" aria-hidden="true"></i> Inventory List
              </router-link>
            </li>

            <li>
              <router-link to="/InventoryAdd">
                <i class="fa fa-chevron-right" aria-hidden="true"></i> Inventory Create
              </router-link>
            </li>
            <li>
              <i class="fa fa-chevron-right" aria-hidden="true"></i> Inventory To User Transfer
            </li>
          </ul>
        </div>
        <router-link to="/Accounts" active-class="active">
          <div v-if="token && role == 'Admin'" class="link-btn">Personel (Admin)</div>
        </router-link>
        <div v-if="token && role == 'User'" class="link-btn">Role User</div>
        <div
          @mouseover="changeOk()"
          @mouseleave="changeMouseLeave()"
          class="link-btn"
          style="transform: scale(1);"
        >
          Tümü
          <i
            :class="{iconActive: iconActive, iconDisabled:!iconActive }"
            class="fa fa-chevron-up"
            aria-hidden="true"
          ></i>
        </div>
        <div
          class="acilir-menu"
          :class="{activeMenu: iconActive}"
          @mouseover="changeOk()"
          @mouseleave="changeMouseLeave()"
        >
          <ul class="menu-link">
            <li>
              <router-link to="/">
                <i class="fa fa-home" aria-hidden="true"></i>
                Home
              </router-link>
            </li>

            <li>
              <router-link to="/Todoslist">
                <i class="fa fa-users" aria-hidden="true"></i>
                User
              </router-link>
            </li>
            <li>
              <router-link to="/City">
                <i class="fa fa-building" aria-hidden="true"></i>
                City
              </router-link>
            </li>
            <li>
              <router-link to="/Manager">
                <i class="fa fa-user-secret" aria-hidden="true"></i>
                Manager
              </router-link>
            </li>
            <li v-if="token && role == 'Admin'">
              <router-link to="/Accounts">
                <i class="fa fa-chevron-right" aria-hidden="true"></i>
                Personel (Admin)
              </router-link>
            </li>
            <li>
              <router-link to="/HavaDurum">
                <i class="fa fa-sun-o" aria-hidden="true"></i>
                Hava Durumu
              </router-link>
            </li>
            <li>
              <i class="fa fa-futbol-o" aria-hidden="true"></i>
              Spor
            </li>
            <li>
              <i class="fa fa-money" aria-hidden="true"></i>
              Finans
            </li>
            <li>
              <i class="fa fa-chevron-right" aria-hidden="true"></i>
              Gündem
            </li>
            <li>
              <i class="fa fa-chevron-right" aria-hidden="true"></i>
              Moda
            </li>
          </ul>
        </div>
      </div>
      <div class="kgfd-col kgfd-text-right kgfd-grid-nomargin">
        <!-- <span v-for="item in hava" :key="item" class="hava-durum-name">
          {{item.il}}
          <span style="display:block;">
            {{item.mak}}
            <img width="15" src="../../assets/images/hot.png" />
          </span>
        </span>
        <img class="hava-durum-img" src="../../assets/images/cloud.png" width="20px;" alt />-->
        <ul class="kgfd-doviz">
          <li>
            Dolar:
            Satış
            <span>{{doviz.dolar}}</span>
            Alış
            <span>{{doviz.dolarAlis}}</span>
          </li>
          <li>
            Euro:
            Satış
            <span>{{doviz.euro}}</span>
            Alış
            <span>{{doviz.euroAlis}}</span>
          </li>
        </ul>

        <a v-if="isSign" href class="btn-class"></a>
        <span class="clocks">{{clock}}</span>
        <router-link v-if="!token" to="/register" active-class="active">
          <a class="link-btn" href="Javascript:void(0);">Register</a>
        </router-link>
        <router-link v-if="!token" to="/login" active-class="active">
          <a class="link-btn" href="Javascript:void(0);">Login</a>
        </router-link>
        <el-dropdown v-if="token" style="padding:10px 0;">
          <span class="el-dropdown-link">
            {{name}}
            <i class="el-icon-arrow-down el-icon--right"></i>
          </span>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item>
              <router-link
                to="/ChangePassword"
                style="text-decoration:none; color:inherit;"
              >Change Password</router-link>
            </el-dropdown-item>
            <el-dropdown-item>
              <span v-on:click="disabledAccount(disabledUser)">Hesabı Dondur</span>
            </el-dropdown-item>
            <el-dropdown-item>
              <router-link
                :to="{name:'doviz'}"
                style="text-decoration:none; color:inherit;"
              >Doviz İşlemleri / Bakiyem</router-link>
            </el-dropdown-item>

            <el-dropdown-item>
              <span v-on:click="logout()">Logout</span>
            </el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
      </div>
    </div>
    <div :class="{menuslide: isActive}" :style="{width: width + 'px'}">
      <div class="hamburger" @click="open()" v-html="icon"></div>
      <ul class="menu-link" v-if="isShow" @click="open()">
        <router-link to="/">
          <li>Home</li>
        </router-link>
        <router-link v-if="token" to="/Todoslist">
          <li>TodosList</li>
        </router-link>
        <router-link v-if="token" to="/City">
          <li>City</li>
        </router-link>
        <router-link v-if="token" to="/Manager">
          <li>Manager</li>
        </router-link>
        <router-link v-if="!token" to="/register">
          <li>Register</li>
        </router-link>
        <router-link v-if="!token" to="/login">
          <li>Login</li>
        </router-link>
        <li>
          <el-dropdown v-if="token">
            <span class="el-dropdown-link">
              {{name}}
              <i class="el-icon-arrow-down el-icon--right"></i>
            </span>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item>
                <router-link
                  to="/ChangePassword"
                  style="text-decoration:none; color:inherit;"
                >Change Password</router-link>
              </el-dropdown-item>
              <el-dropdown-item>
                <span v-on:click="disabledAccount(disabledUser)">Hesabı Dondur</span>
              </el-dropdown-item>
              <el-dropdown-item>
                <span v-on:click="logout()">Logout</span>
              </el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
        </li>
      </ul>
    </div>
    <a id="scrolTop" href="#">
      <i class="fa fa-arrow-up" aria-hidden="true"></i>
    </a>
  </div>
</template>
<script>
import { serverBus } from "../../main";
const hamburgers = '<i class="fa fa-bars" aria-hidden="true"></i>';
const close = '<i class="fa fa-times" aria-hidden="true"></i>';

export default {
  data() {
    return {
      doviz: {},
      isSign: false,
      scroolActive: 0,
      mystyle: {
        display: "block",
        cursor: "pointer"
      },
      disabledUser: {
        id: this.$store.getters.getUserId,
        disabled: false
      },
      icon: hamburgers,
      isActive: true,
      isActiveinv: false,
      isShow: false,
      width: "",
      tokenss: this.$store.state.token,
      clock: new Date().toDateString(),
      iconActive: false,
      isActiveinv: false,
      cityname: "İSTANBUL",
      hava: {}
      // day: new Date()
    };
  },

  methods: {
    getDoviz() {
      this.$axios
        .get("Doviz/Index")
        .then(response => {
          this.doviz = response.data;
          console.log(response.data);
        })
        .catch(error => {
          window.alert(error.response.data);
        });
    },
    scroolShow() {
      if (window.scrollY > 20) {
        this.scroolActive = 1;
      } else {
        this.scroolActive = 0;
      }
    },
    getHavaDurum(cityName) {
      this.$axios
        .get("Hava/Durum/", {
          params: {
            cityName: this.cityname
          }
        })
        .then(response => {
          this.hava = response.data;
          console.log(response.data);
        });
    },
    logout() {
      serverBus.$emit("mystyle", this.mystyle.display);
      this.mystyle.display = "none";
      // this.isSign = false;
      // console.log(this.$store.state.token);
      // this.$store.state.token = false;
      // console.log(this.$store.state.token);
      // return this.$router.push("/");
      this.$store.dispatch("logout");
      this.$router.push("/login");
    },
    open() {
      if (this.icon == hamburgers) {
        this.icon = close;
        this.width = "250";
        this.isShow = true;
      } else {
        this.icon = hamburgers;
        this.width = "50";
        this.isShow = false;
      }
    },
    disabledAccount(disabledUser) {
      if (confirm("Hesabı Dondurmak İstediğinize Emin misiniz?")) {
        // const url = "http://localhost:5000/Home/DisabledAccount/";
        const url = this.$store.getters.apiUrl + "Account/DisabledAccount/";
        this.$axios
          .post("Account/DisabledAccount/", disabledUser)
          .then(response => {
            window.alert("Hesabınız Dondurulmuştur");
            setTimeout(() => {
              this.logout();
            }, 3000);
          })
          .catch(error => {
            console.log(error);
            this.errMsg = error.response.data;
          });
      }
    },
    changeOk() {
      if (!this.iconActive) {
        this.iconActive = true;
      }
    },
    changeMouseLeave() {
      if (this.iconActive) {
        this.iconActive = false;
      }
    },
    changeActiveinv() {
      if (!this.isActiveinv) {
        this.isActiveinv = true;
      }
    },
    changeActiveinvLeave() {
      if (this.isActiveinv) {
        this.isActiveinv = false;
      }
    }
  },
  mounted() {
    serverBus.$on("isSign", isSign => {
      this.isSign = isSign;
    });
    window.onscroll = function() {
      scrollFunction();
    };

    function scrollFunction() {
      if (
        document.body.scrollTop > 50 ||
        document.documentElement.scrollTop > 50
      ) {
        document.getElementById("scrolTop").style.display = "block";
      } else {
        document.getElementById("scrolTop").style.display = "none";
      }
    }
  },
  //storeden gelen token i burada değişken olarak kullanmak için yazılan computed methodu
  computed: {
    token() {
      return this.$store.getters.isLoggedIn;
    },
    //storeden gelen Adı Soyadı burada değişken olarak kullanmak için yazılan computed methodu
    name() {
      return this.$store.getters.getUser;
    },
    role() {
      return this.$store.getters.getRole;
    },
    userId() {
      return this.$store.getters.getUserId;
    }
  },
  created() {
    this.getDoviz();
    this.getHavaDurum();
    this.scroolShow();
  }
};
</script>
<style scoped>
#scrolTop {
  position: fixed;
  bottom: 20px;
  right: 10px;
  width: 50px;
  height: 50px;
  background-color: #86bde2;
  border-radius: 30px;
  display: none;
  cursor: pointer;
  animation: opacityScroll 1s ease;
  z-index: 999;
  text-align: center;
  color: #ffffff;
  font-size: 22px;
  line-height: 45px;
  font-weight: bold;
}
#scrolTop:hover {
  background-color: #70b3df;
}
@keyframes opacityScroll {
  0% {
    opacity: 0;
    width: 80px;
    height: 80px;
  }

  100% {
    opacity: 1;
    width: 50px;
    height: 50px;
  }
}
.menuslide {
  background-color: #86bde2;
  position: fixed;
  height: 100%;
  width: 50px;
  top: 0;
  left: 0;
  overflow: auto;
  -webkit-transition: all 300ms ease-out;
  transition: all 300ms ease-out;
  z-index: 1;
  display: none;
}

.hamburger {
  color: white;
  font-size: 20px;
  font-weight: bold;
  margin-right: 15px;
  margin-top: 10px;
  cursor: pointer;
  text-align: right;
}

.menu-link,
.menu-link-inventory {
  margin: 20px 20px;
  list-style: none;
  font-weight: bold;
  color: #ffffff;
  font-size: 18px;
}
.menu-link-inventory {
  margin: 20px 10px 10px 10px;
}
.menu-link li {
  padding: 0 0 15px 0;
  cursor: pointer;
  display: block;
}
.menu-link li:hover {
  opacity: 0.9;
}
.menu-link li i {
  color: #5a5a5a;
  font-size: 14px;
}
.menu-link li:hover i {
  transform: scale(1.5);
}

.menu-link-inventory li {
  padding: 0 0 20px 0;
  cursor: pointer;
  font-size: 16px;
  letter-spacing: 1px;
}
.menu-link-inventory li i {
  color: #5a5a5a;
  font-size: 14px;
}
.menu-link-inventory li:hover i {
  /* transform: scale(1.2); */
  font-size: 18px;
}
.menu-link-inventory li:hover {
  /* transform: scale(1.2); */
  opacity: 0.8;
  transition: all 200ms ease-out;
}

.kgfd-header {
  background: #ffffff;
  border: none;
  padding-left: 40px;
}
.active {
  background-color: #86bde2;
  color: #ffffff;
  padding: 10px 20px;
}
.link-btn {
  padding: 10px 10px;
  font-weight: bold;
  font-size: 16px;
  cursor: pointer;
  display: inline-block;
}

.link-btn:hover {
  transform: scale(1.1);
}
.btn-class {
  background-color: #ac0909;
  border: none;
  display: inline-block;
  padding: 10px 30px;
  color: #ffffff;
  font-weight: bold;
  box-shadow: 2px 2px 3px #cecece;
  margin-right: 20px;
}
.btn-class:hover {
  transform: scale(1.1);
  opacity: 0.8;
}
.Welcome {
  font-weight: bold;
  font-size: 14px;
}

.kgfd-doviz {
  list-style: none;
  display: inline-block;
}
.kgfd-doviz li {
  display: inline-block;
  padding: 0 7px;
  font-weight: bold;
  font-size: 14px;
}
.kgfd-doviz li span {
  color: #376937;
}
.clocks {
  font-weight: bold;
  padding-right: 10px;
  font-size: 14px;
}

.acilir-menu {
  position: absolute;
  top: 42px;
  background-color: #86bde2;
  box-shadow: 1px 1px 13px 2px #aac7db;
  opacity: 1;
  width: 0px;
  max-height: 100px;
  overflow-y: auto;
  scrollbar-width: thin;
  scrollbar-color: #f1f1f1 transparent;
  z-index: 1;
  border-radius: 0 0 4px 4px;
  transition: all 300ms ease-out;
}
.activeMenu {
  width: 1000px;
  max-height: 300px;
}

.iconActive {
  transform: translate(0) rotate(180deg);
  transition: all 300ms ease-out;
}
.iconDisabled {
  transform: translate(0) rotate(0deg);
  transition: all 300ms ease-out;
}

.acilir-menu:hover {
  display: block;
  -webkit-transition: all 300ms ease-out;
  transition: all 300ms ease-out;
}

.acilir-menu-inventory {
  position: absolute;
  width: 200px;
  height: 0;
  top: 42px;
  left: 200px;
  overflow-y: auto;
  scrollbar-width: thin;
  scrollbar-color: #86bde2 transparent;
  background-color: #86bde2;
  box-shadow: 1px 1px 13px 2px #aac7db;
  border-radius: 0 0 4px 4px;
  transition: all 300ms ease-out;
  z-index: 1;
}

.activeMenuinv {
  height: 200px;
}
.hava-durum-name {
  position: absolute;
  left: 250px;
  top: 2px;
  font-size: 12px;
  font-weight: bold;
}
.hava-durum-img {
  position: absolute;
  left: 250px;
  top: 14px;
}
@media only screen and (max-width: 991px) {
  .kgfd-header {
    display: none;
  }
  .menuslide {
    display: block;
  }
}
@media only screen and (max-width: 599px) {
  .kgfd-header {
    display: none;
  }
  .menuslide {
    display: block;
  }
}
</style>