<template>
  <div @click="goCache">
    page2
  </div>
</template>

<script>
export default {
  methods: {
    goCache() {
      this.$router.push({path:`/cache`})
    }
  }
}
</script>

<style>

</style>