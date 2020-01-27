<template>
  <div class="kgfd" style="padding:0; ">
    <div class="kgfd-row kgfd-header">
      <div class="kgfd-col kgfd-grid-nomargin">
        <router-link to="/" active-class="active" exact>
          <div class="link-btn">Home</div>
        </router-link>
        <router-link to="/personel" active-class="active">
          <div class="link-btn">Personel</div>
        </router-link>
        <div class="link-btn">City</div>
        <div class="link-btn">Manager</div>
      </div>
      <div class="kgfd-col kgfd-text-right kgfd-grid-nomargin">
        <a href class="btn-class">Button</a>
        <el-dropdown>
          <span class="el-dropdown-link">
            Options
            <i class="el-icon-arrow-down el-icon--right"></i>
          </span>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item icon="el-icon-plus">Action 1</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
      </div>
    </div>
  </div>
</template>
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
</style>