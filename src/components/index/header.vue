<template>
  <div id="header">
    <div>
        <span :class="isCollapse?`collapseIcon`:''" @click="setisCollapse" class="iconfont listIcon">&#xe655;</span>
    </div>
  </div>
</template>

<script>
import {mapMutations,mapState} from 'vuex';
export default {
  computed: {
    ...mapState(['isCollapse'])
  },
  methods: {
    ...mapMutations(['setisCollapse'])
  }
}
</script>

<style lang="less">
  #header {
    text-align: left;
    .listIcon {
      font-size: 36px;
      display: inline-block;
      cursor:default;
    }
    .collapseIcon {
     transform: rotate(-90deg);
     transform-origin: center;
    }
  }
</style>