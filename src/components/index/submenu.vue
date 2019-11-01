<template>
<div>
    <el-submenu :index="menu.path" >
          <template slot="title">
            <i class="el-icon-location"></i>
            <span>{{menu.name}}</span>
          </template>
          <div :key="i" v-for="(element,i) in menu.children">
            <el-submenu :index="element.path" v-if="element.children.length !==0">
              <template slot="title">
                <i class="el-icon-location"></i>
                <span>{{element.name}}</span>
              </template>
              <div :key="i2" v-for="(element2,i2) in element.children" >
              <submenu :menu="element2" :index="element2.path" v-if="element2.children.length !==0"></submenu>
              <el-menu-item v-else :index="element2.path">{{element2.name}}</el-menu-item>
            </div>
            </el-submenu>
            <el-menu-item v-else :index="element.path">{{element.name}}</el-menu-item>
          </div>
      </el-submenu>
</div>
</template>

<script>
export default {
  name:`submenu`,
  props:[`menu`],
  created () {
    console.log(this.menu)
  }
}
</script>

<style>

</style>