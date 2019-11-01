<template>
  <div>
    <!--  @open="handleOpen"
      @close="handleClose" -->
    <el-menu
    unique-opened
      :collapse="isCollapse"
      default-active="2"
      class="el-menu-vertical-demo"
      background-color="#545c64"
      text-color="#fff"
      active-text-color="#ffd04b"
      router
    >
    <!-- logo -->
      <el-menu-item-group class="isCollapseLogo" v-if="isCollapse">
        <img
          style="width: 30px;height:30px;"
          src="@/static/images/img-logo.png"
          alt=""
        >
      </el-menu-item-group>
      <li
        v-else
        class="logo"
      >
        <div class="logoBox noCollapse">
          <img
            class="logoImg"
            src="@/static/images/img-logo.png"
            alt=""
          >
          <span>admin</span>
        </div>
      </li>
    <!--  -->
      <el-submenu :index="item.path" :key="index" v-for="(item,index) in menu">
        <template slot="title">
          <i class="el-icon-location"></i>
          <span>{{item.name}}</span>
        </template>
        <div :key="i" v-for="(element,i) in item.children">
          <el-submenu :index="element.path" v-if="element.children.length !==0">
            <template slot="title">
              <i class="el-icon-location"></i>
              <span>{{element.name}}</span>
            </template>
            <!-- if element2还有的话 就调用自己  el-submenu 传入lement2.children-->
            <div :key="i2" v-for="(element2,i2) in element.children" >
              <submenu :menu="element2" :index="element2.path" v-if="element2.children.length !==0"></submenu>
              <el-menu-item v-else :index="element2.path">{{element2.name}}</el-menu-item>
            </div>
          </el-submenu>
          <el-menu-item v-else :index="element.path">{{element.name}}</el-menu-item>
        </div>
      </el-submenu>
    </el-menu>
  </div>
</template>

<script>
import { mapState } from "vuex";
import submenu from './submenu'
export default {
  components: {
    submenu
  },
  data() {
    return {
      menu:[]
    };
  },
  created () {
    this.$axios.post(`/getMenu`).then(res => {
      console.log(`router`,res.data)
      if (res.data.success === true) {
        this.menu = res.data.data
      }
    })
  },
  computed: {
    ...mapState(["isCollapse"])
  },
  methods: {
    // handleOpen(key, keyPath) {
    //   console.log(key, keyPath);
    // },
    // handleClose(key, keyPath) {
    //   console.log(key, keyPath);
    // }
  }
};
</script>

<style lang="less">
.el-menu-vertical-demo {
  width: 250px;
  text-align: left;
  margin-top: 60px;
  overflow: hidden;
}
.logo {
  width: 250px;
  height: 60px;
  background-color: rgb(225, 239, 250);
  .logoBox {
    height: 60px;
    text-align: center;
    line-height: 60px;
    img,
    span {
      display: inline-block;
      vertical-align: middle;
    }
  }
  .logoImg {
    width: 30px;
    height: 30px;
  }
}
.isCollapseLogo {
  text-align: center;
  background-color: rgb(225, 239, 250); 
  height:60px; 
  text-align:center;
}
</style>