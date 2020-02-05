<template>
  <div class="kgfd" style="padding:0; ">
    <div class="kgfd-row kgfd-header">
      <div class="kgfd-col kgfd-grid-nomargin">
        <router-link to="/" active-class="active" exact>
          <div class="link-btn">Home</div>
        </router-link>
        <router-link v-if="token != null" to="/Todoslist" active-class="active">
          <div class="link-btn">Todoslist</div>
        </router-link>
        <div v-if="token != null" class="link-btn">City</div>
        <div v-if="token != null" class="link-btn">Manager</div>
      </div>
      <div class="kgfd-col kgfd-text-right kgfd-grid-nomargin">
        <a v-if="isSign" href class="btn-class">Button</a>
        <router-link v-if="token == null" to="/register" active-class="active">
          <a class="link-btn" href="Javascript:void(0);">Register</a>
        </router-link>
        <router-link v-if="token == null" to="/login" active-class="active">
          <a class="link-btn" href="Javascript:void(0);">Login</a>
        </router-link>
        <el-dropdown v-if="token != null">
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
              <span v-on:click="logout()">Logout</span>
            </el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
      </div>
    </div>
  </div>
</template>
<script>
import { serverBus } from "../../main";
export default {
  data() {
    return {
      isSign: false,
      mystyle: {
        display: "block",
        cursor: "pointer"
      }
    };
  },
  methods: {
    logout() {
      serverBus.$emit("mystyle", this.mystyle.display);
      this.mystyle.display = "none";
      this.isSign = false;
      this.$store.state.token = null;

      return this.$router.push("/");
    }
  },
  mounted() {
    serverBus.$on("isSign", isSign => {
      this.isSign = isSign;
    });
  },
  //storeden gelen token i burada değişken olarak kullanmak için yazılan computed methodu
  computed: {
    token() {
      return this.$store.state.token;
    },
    
    name() {
      return this.$store.state.name;
    }
  }
};
</script>
<style scoped>
.kgfd-header {
  background: #ffffff;
  border: none;
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
</style>