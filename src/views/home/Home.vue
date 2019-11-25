<template>
  <div class="home">
    <div v-if="!isShowLoding">
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
      <!-- 显示抢购 -->
      <FlashSale />
      <!-- 抢购商品数据 -->
      <FlashGoods :falshSaleList="falshSaleList" />
      <!-- 显示切换商品数据 -->
      <Tabbar
        :tabbarAllList="tabbarAllList"
        :tabbarLeisureList="tabbarLeisureList"
        :tabbarPopularityList="tabbarPopularityList"
        :tabbarFieryList="tabbarFieryList"
      />
    </div>
    <van-loading v-else type="spinner" color="#75a342" />
  </div>
</template>

<script>
// 这里导入的方法直接用，不需要用this
import { getHomeApi } from "@/serve/api/index";
import Header from "./components/header/Header";
import Sowing from "./components/sowing/Sowing";
import Nav from "./components//nav/Nav";
import FlashSale from "./components/flash/FlashSale";
import FlashGoods from "./components/flash/FlashGoods";
import Tabbar from "./components/tabbar/Tabbar";
export default {
  components: {
    Header,
    Sowing,
    Nav,
    FlashSale,
    FlashGoods,
    Tabbar
  },
  created() {
    this.getHomeAllData();
  },
  props: {},
  data() {
    return {
      sowingList: [],
      navList: [],
      tabbarAllList: [],
      adverImg: "",
      //是否加载动画
      isShowLoding: true,
      falshSaleList: [],
      tabbarLeisureList: [],
      tabbarPopularityList: [],
      tabbarFieryList: []
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
      // 获取广告条数据
      this.adverImg = res.home_ad;
      // 获取限时抢购数据
      this.falshSaleList = res.list[3].product_list;
      // 获取切换全部商品数据
      this.tabbarAllList = res.list[12].product_list;
      // 获取休闲商品数据
      this.tabbarLeisureList = res.list[10].product_list;
      // 获取人气商品数据
      this.tabbarPopularityList = res.list[6].product_list;
      // 获取火爆商品数据
      this.tabbarFieryList = res.list[11].product_list;
      this.isShowLoding = false;
    }
  }
};
</script>
<style scoped lang="less">
.home {
  height: 200%;
  padding-top: 33px;
  background-color: #eee;
  .van-loading {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
  h1 {
    font-size: 17px;
  }
  .adver {
    background-color: #fff;
    .adver-img {
      width: 100%;
      height: 100%;
    }
  }
}
</style>
