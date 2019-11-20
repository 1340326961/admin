<template>
  <div>
    <baidu-map  :continuous-zoom="true" :scroll-wheel-zoom="true" :center="center" :zoom="zoom" @ready="handler"  class="bm-view">
      <bm-navigation anchor="BMAP_ANCHOR_TOP_RIGHT"></bm-navigation>
    </baidu-map>
  </div>
</template>

<script>
export default {
  data () {
    return {
      center: {lng: 0, lat: 0},
      zoom: 3
    }
  },
  methods: {
     handler ({BMap, map}) {
      console.log(BMap, map)
      this.center.lng = 116.404
      this.center.lat = 39.915
      this.zoom = 300
    }
  }
}
</script>

<style>
.bm-view {
  width: 100%;
  height: 800px;
}
</style>