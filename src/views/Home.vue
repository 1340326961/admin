<template>
  <div class="home">
    <el-container>
      <el-aside style="width:auto;">
        <!-- 导航 -->
        <nav-menu></nav-menu>
      </el-aside>
      <el-container>
        <el-header>
          <nav-header></nav-header>
        </el-header>
        <el-main class="main">
          <keep-alive>
            <router-view v-if="$route.meta.keepAlive"></router-view>
          </keep-alive>
            <router-view v-if="!$route.meta.keepAlive"></router-view>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
import navMenu from '@/components/index/navMenu';
import navHeader from '@/components/index/header'
export default {
  name: 'home',
  components: {
    navMenu,navHeader
  }
}
</script>
<style lang="less">
.home {
  height: 100%;
}
.el-container {
  height: 100%;
}
  .el-header, .el-footer {
    background-color: #B3C0D1;
    color: #333;
    text-align: center;
    line-height: 60px;
  }
  .el-main {
    background-color: #E9EEF3;
    color: #333;
    text-align: center;
    line-height: 160px;
  }
  .el-aside {
    background-color: #D3DCE6;
    color: #333;
    overflow: visible!important;
  }
  .main {
    text-align: left;
    padding: 0;
    margin: 20px;
    border-radius: 20px;
    box-shadow: 0px 0px 5px #888888;
    overflow: auto;
    background-color: #fff;
  }
</style>
