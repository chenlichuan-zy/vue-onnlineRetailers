<template>
  <div class="dashboard">
    <van-tabbar v-model="active" active-color="#75a342">
      <van-tabbar-item replace to="/dashboard/home">
        <i class="iconfont icon-liuliangyunpingtaitubiao02"></i>
        <span>首页</span>
      </van-tabbar-item>
      <van-tabbar-item replace to="/dashboard/category">
        <i class="iconfont icon-leimupinleifenleileibie2"></i>
        <span>分类</span>
      </van-tabbar-item>
      <van-tabbar-item replace to="/dashboard/quality">
        <i class="iconfont icon-youxuan"></i>
        <span>优选</span>
      </van-tabbar-item>
      <van-tabbar-item replace to="/dashboard/cart">
        <i class="iconfont icon-gouwucheman"></i>
        <span>购物车</span>
      </van-tabbar-item>
      <van-tabbar-item replace to="/dashboard/mine">
        <i class="iconfont icon-wode"></i>
        <span>我的</span>
      </van-tabbar-item>
    </van-tabbar>
    <!-- dashboard是一级路由的页面，下面这里是二级路由的出口,切记一定要写出口 -->
    <!-- 保留组件状态，避免进行二次渲染 -->
    <keep-alive>
      <router-view v-if="$route.meta.keepAlive"></router-view>
    </keep-alive>
    <router-view v-if="!$route.meta.keepAlive"></router-view>
  </div>
</template>

<script>
export default {
  components: {},
  props: {},
  mounted() {},
  data() {
    return {
      active: 0
    };
  },
  methods: {}
};
</script>
<style scoped lang="less">
.dashboard {
  height: 100%;
  .van-tabbar {
    z-index: 99!important;
    .van-tabbar-item {
      text-align: center;
      .van-tabbar-item__icon {
        display: none;
      }
      span {
        margin-top: 5px;
      }
      .iconfont {
        display: block;
        font-size: 23px;
        margin-bottom: 5px;
      }
    }
  }
}
</style>
