<template>
  <div class="dashboard">
    <Home />
  </div>
</template>

<script>
import Home from './../home/Home'
export default {
  components: {
    Home
  },
  props: {},
  data () {
    return {}
  }
}
</script>
<style scoped lang="less">
.dashboard {
  height: 100%;
}
</style>
