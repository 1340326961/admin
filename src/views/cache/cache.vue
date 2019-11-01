<template>
  <div >
    <div @click="gopage1">
     <span v-for="(item,index) in wode" :key="index">{{item}}</span>
    </div>
  </div>
</template>

<script>
export default {
  beforeRouteLeave(to,from,next){
    from.meta.keepAlive = false; // 动态控制该页面是否缓存？
    // console.log(to,from) this.$destroy()销毁页面不缓存
    console.log(this.wode)
    next();
  },
  data () {
    return {
      wode:[`cache`]
    }
  },
  created () {
  },
  methods: {
    gopage1() {
      this.wode.push(`123`)
        this.$router.push({path:`/page2`})
    }
  }
}
</script>

<style>

</style>