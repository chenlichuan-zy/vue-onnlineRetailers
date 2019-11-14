<template>
  <div class="home">
    <!-- 头部 -->
    <Header />
    <!-- 轮播图 -->
    <Sowing :sowingList="sowingList" />
    <!-- 商品数据分类 -->
    <Nav :navList="navList" />
    <!-- 广告条 -->
    <div class="adver">
      <img :src="adverImg.image_url" alt="" class="adver-img" />
    </div>
  </div>
</template>

<script>
// 这里导入的方法直接用，不需要用this
import { getHomeApi } from "@/serve/api/index";
import Header from "./components/header/Header";
import Sowing from "./components/sowing/Sowing";
import Nav from "./components//nav/Nav";
export default {
  components: {
    Header,
    Sowing,
    Nav
  },
  created() {
    this.getHomeAllData();
  },
  props: {},
  data() {
    return {
      sowingList: [],
      navList: [],
      adverImg: ""
    };
  },
  methods: {
    async getHomeAllData() {
      const { data: res } = await getHomeApi();
      console.log("res", res);
      // 获取首页轮播图数据
      this.sowingList = res.list[0].icon_list;
      // 获取首页商品分类数据
      this.navList = res.list[2].icon_list;
      this.adverImg = res.home_ad;
      console.log(this.navList);
    }
  }
};
</script>
<style scoped lang="less">
.home {
  height: 100%;
  background-color: #eee;
  h1 {
    font-size: 17px;
  }
  .adver-img {
    width: 100%;
    height: 100%;
  }
}
</style>
