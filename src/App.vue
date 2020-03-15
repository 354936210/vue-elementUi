<template>
  <div id="app">
    <el-container>
      <el-header>
            <el-carousel height="60px" >
              <el-carousel-item v-for="item in 4" :key="item">
                <h3>{{ item }}</h3>
              </el-carousel-item>
            </el-carousel>
      </el-header>
      <el-container>
        <el-aside width="220px">
          <el-menu
            router
            default-active="About"
            class="el-menu-vertical-demo"
            @open="handleOpen"
            @close="handleClose"
            background-color="#D3DCE6">
            <el-submenu index="1">
              <template slot="title">
                <i class="el-icon-location"></i>
                <span>导航一</span>
              </template>
              <el-menu-item-group>
                <template slot="title">分组一</template>
                <el-menu-item index="testViews">表单</el-menu-item>
                <el-menu-item index="elTable">表格</el-menu-item>
              </el-menu-item-group>
              <el-menu-item-group title="分组2">
                <el-menu-item index="1-3">选项3</el-menu-item>
              </el-menu-item-group>
              <el-submenu index="1-4">
                <template slot="title">选项4</template>
                <el-menu-item index="1-4-1">选项1</el-menu-item>
              </el-submenu>
            </el-submenu>
            <el-menu-item index="About">
              <i class="el-icon-menu"></i>
              <span slot="title">导航二</span>
            </el-menu-item>
            <el-menu-item index="3">
              <i class="el-icon-document"></i>
              <span slot="title">导航三</span>
            </el-menu-item>
            <el-menu-item index="4">
              <i class="el-icon-setting"></i>
              <span slot="title">导航四</span>
            </el-menu-item>
          </el-menu>
        </el-aside>
        <el-main>    <router-view/></el-main>
      </el-container>
    </el-container>
<!--    <div id="nav">-->
<!--      <el-button @click="gotoMethod" size="mini">跳转到TestViews</el-button>-->
<!--      <router-link to="/about">About</router-link> |-->
<!--      <router-link to="/testViews">TestViews</router-link> |-->
<!--    </div>-->

  </div>
</template>
<script>

export default {
  methods: {
    gotoMethod: function () {
      this.$router.push('/testViews')
    },
    handleOpen (key, keyPath) {
      console.log(key, keyPath)
    },
    handleClose (key, keyPath) {
      console.log(key, keyPath)
    }
  }
}
</script>
<style>

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  height: 100%;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
.el-header, .el-footer {
  background-color: #B3C0D1;
  color: #333;
  text-align: center;
  height: 60px;
  padding: 0px;
}

.el-aside {
  background-color: #D3DCE6;
  color: #333;
  text-align: center;
  line-height: 200px;
}
.el-select {
  display: block;
  position: relative;
}
.el-main {
  background-color: #E9EEF3;
  color: #333;
}
.el-container{
  height: 100%;
}
body > .el-container {
  margin-bottom: 40px;
}
body {
  height: 100%;
}
  html {
    height: calc(100% - 16px);
  }

.el-carousel__item:nth-child(2n) {
  background-color: #bfbcb1;
}

.el-carousel__item:nth-child(2n+1) {
  background-color: #e6b8ad;
}
</style>
