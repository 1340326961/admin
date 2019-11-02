<template>
  <div>
    <xie-zi @onComplete="getdata"></xie-zi>
  </div>
</template>

<script>
import xieZi from '@/components/xiezi.vue'
export default {
  components: {
    xieZi
  },
  methods: {
    getdata(val) {
      console.log(val)
    }
  }
}
</script>

<style>

</style>