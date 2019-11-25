<template>
  <div class="category">
    <!-- 头部 -->
    <van-search placeholder="请输入搜索关键词" clearable show-action shape="round" @search="onSearch">
      <div slot="action" @click="onSearch">搜索</div>
    </van-search>
    <div class="listWrapper">
      <!-- 因为左侧分类在整个项目中用到的地方，所有不用封装组件 -->
      <!-- 左侧分类菜单 -->
      <div class="leftMenu" ref="wrapper">
        <ul class="oul">
          <li
            v-for="(category, index) in categoriesList"
            :key="category.id"
            :class="{ active: currentIndex == index }"
            @click="changeClick(index)"
          >
            {{ category.name }}
          </li>
        </ul>
      </div>
      <!-- 右侧详细数据 -->
      <RightList
        :key="currentIndex"
        :rightDataList="rightDataList"
        :currentIndex="rightIndexes[currentIndex]"
        :changeIndex="changeIndex"
        class="rightList"
      />
    </div>
  </div>
</template>

<script>
import BScroll from "better-scroll";
import { Toast } from "vant";
import { getCategoryList, getRightDataList } from "@/serve/api";
import RightList from "./children/RightList";
export default {
  components: {
    RightList
  },
  props: {},
  created() {
    this.getCategory();
  },
  data() {
    return {
      // 选中时的id
      currentIndex: 0,
      rightIndexes: [],
      // 定义分类数据
      categoriesList: [],
      // 获取右边的数据
      rightDataList: [],
      changeRightList: []
    };
  },
  methods: {
    // 点击搜索方法
    onSearch() {
      Toast({
        message: "还在开发中~~敬请期待",
        duration: 1000
      });
    },
    // 获取分类数据
    async getCategory() {
      const rightRes = await getCategoryList();
      if (rightRes.success) {
        this.categoriesList = rightRes.data.cate;
        this.rightIndexes = new Array(this.categoriesList.length).fill(0);
      }
      const rightList = await getRightDataList("/lk001");
      if (rightList.success) {
        this.rightDataList = rightList.data.cate;
      }
      this.$nextTick(() => {
        // 初始化bscroll的时候，一定要在数据完全获取之后进行初始化
        const bscroll = new BScroll(".leftMenu", {
          probeType: 3,
          click: true,
          scrollY: true,
          tap: true,
          mouseWheel: true
        });
      });
    },
    // 处理每个菜单点击事件
    async changeClick(id) {
      this.currentIndex = id;
      if (id >= 9) {
        const {
          data: { cate: res }
        } = await getRightDataList(`/lk0${id + 1}`);
        this.rightDataList = res;
      } else {
        const {
          data: { cate: res }
        } = await getRightDataList(`/lk00${id + 1}`);
        this.rightDataList = res;
      }
    },
    changeIndex(id) {
      this.rightIndexes[this.currentIndex] = id;

      console.log("index", this.rightIndexes);
    }
  }
};
</script>
<style scoped lang="less">
.category {
  width: 100%;
  height: 100%;
  background-color: #f5f5f5;
  position: relative;
  .van-search {
    width: 100%;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 99;
  }
  .listWrapper {
    width: 100%;
    display: flex;
    justify-content: space-between;
    flex-direction: row;
    overflow: hidden;
    padding-bottom: 15px;
    position: absolute;
    top: 50px;
    left: 0;
    // 切记一定要给父级设置高度
    .leftMenu {
      width: 20%;
      height: calc(100vh - 100px);
      overflow: hidden;
      ul {
        width: 100%;
        display: flex;
        flex-direction: column;
        li {
          padding: 14px 10px;
          font-size: 13px;
          background-color: #f5f5f5;
          text-align: center;
          border-bottom: 0.5px solid #ddd;
          color: #666;
        }
        .active {
          border-left: 3px solid #28be57;
          color: #28be57;
          background-color: #fff;
        }
      }
    }
    .rightList {
      width: 80%;
    }
  }
}
</style>
