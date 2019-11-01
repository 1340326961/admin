<template>
  <div>
    <button @click="downLoad()">文件下载</button>
  </div>
</template>

<script>
export default {
  methods: {
    downLoad() {
      this.$axios({
        method:"get",
        url:`http://192.168.4.3:59856/petroleum/downFiles?projectId=1`,
        responseType:`arraybuffer`
      }).then(res => {
        let blob = new Blob([res.data])
        let objectUrl = URL.createObjectURL(blob);
        window.location.href = objectUrl;
      })
    }
  }
}
</script>

<style>

</style>