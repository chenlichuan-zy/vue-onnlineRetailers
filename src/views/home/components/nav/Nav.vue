<template>
  <div class="Nav">
    <div class="navList">
      <div class="navItem" v-for="(item, index) in navList" :key="index">
        <img :src="item.icon_url" alt="" />
        <span>{{ item.name }}</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  components: {},
  props: {
    navList: Array
  },
  data() {
    return {};
  }
};
</script>
<style scoped lang="less">
.Nav {
  width: 100%;
  background-color: #fff;
  .navList {
    width: 100%;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    padding: 10px 0;
    .navItem {
      width: 20%;
      display: flex;
      flex-direction: column;
      align-items: center;
      padding: 5px 0;
      img {
        width: 30px;
        height: 30px;
      }
      span {
        margin-top: 10px;
        font-size: 12px;
      }
    }
  }
}
</style>
