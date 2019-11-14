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
    <router-view></router-view>
  </div>
</template>

<script>
// 这里导入的方法直接用，不需要用this
import { getHomeApi } from '@/serve/api/index'
export default {
  components: {},
  props: {},
  mounted () {
    this.getHomeAllData()
  },
  data () {
    return {
      active: 0
    }
  },
  methods: {
    async getHomeAllData () {
      const data = await getHomeApi()
      console.log(data)
    }
  }
}
</script>
<style scoped lang="less">
.dashboard {
  height: 100%;
  .van-tabbar {
    height: 55px;
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
