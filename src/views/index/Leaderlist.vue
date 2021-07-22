<template>
  <div id="leaderdetail">
    <!-- 导航栏 -->
    <div class="nav">
      <img
        src="../../assets/images/index/leader/矢量智能对象@3x.png"
        @click="onClickLeft"
        class="last"
      />
      <span class="money">投资理财</span>
      <img
        src="../../assets/images/index/leader/放大镜.png"
        @click="gotosearch"
        class="search"
      />
    </div>
    <!-- 导师详情 -->
    <main>
      <van-card
        v-for="item in state.preData"
        :key="item.id"
        :desc="item.simpleIntro"
        :title="item.name"
        :thumb="item.headimg"
        @click="gotoDetail(item.id)"
      >
        <template #tags>
          <van-tag plain type="danger" class="tag1">{{
            item.perfession[0]
          }}</van-tag>
          <van-tag plain type="danger" class="tag2">{{
            item.perfession[1]
          }}</van-tag>
        </template>
        <template #footer>
          <div class="image">
            <img src="../../assets/images/index/leader/redu@3x.png" /><span>{{
              item.hot
            }}</span>
            <img src="../../assets/images/index/leader/yonghu2@3x.png" /><span
              >{{ item.follower }}</span
            >
          </div></template
        >
      </van-card>
    </main>
  </div>
  <router-view />
</template>

<script>
import { getLeaderlistDataApi } from "../../../src/utils/api";
import { reactive, onMounted } from "vue";
// 引入路由
import router from "@/router/index.js";

export default {
  setup() {
    const state = reactive({
      preData: "",
    });
    //返回上一级
    const onClickLeft = () => {
      router.go(-1);
    };
    //获取到时列表数据
    const login = async () => {
      const res = await getLeaderlistDataApi();
      console.log(res);
      state.preData = res.data.result;
      console.log(res.data.result);
    };
    //传id 去详情页面
    const gotoDetail = (id) => {
      router.push("/leaderdetail/" + id);
    };
    //跳转搜索页面
    const gotosearch = () => {
      router.push("/search");
    };

    onMounted(() => {
      login();
    });

    return {
      login,
      state,
      gotoDetail,
      gotosearch,
      onClickLeft,
    };
  },
};
</script>

<style lang="less">
#leaderdetail {
  //导航栏
  .nav {
    width: 100%;
    height: 44px;
    background: white;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 99;

    .last {
      width: 9px;
      height: 16px;
      display: inline-block;
      margin-left: 17px;
      background: white;
      margin-top: 15px;
    }
    .money {
      width: 68px;
      height: 16px;
      font-size: 16px;
      font-family: PingFang;
      font-weight: 500;
      color: #323232;
      margin-left: 127px;
      position: absolute;
      top: 13px;
      background: white;
    }
    .search {
      width: 17px;
      height: 16px;
      display: inline-block;
      left: 342px;
      margin-top: 15px;
      background: white;
      position: absolute;
    }
  }

  // 导师
  main {
    margin-top: 64px;
    padding-bottom: 20px;
  }

  .van-card {
    width: 341px;
    height: 144px;
    background: #ffffff;
    box-shadow: 0px 4px 14px 0px rgba(198, 198, 198, 0.61);
    border-radius: 4px;
    margin: 16px auto 0;
    // margin-top: 20px !important;
    .van-image__img {
      width: 100px;
      height: 113px;
      margin-top: 7px;
      margin-right: 8px;
      display: inline-block;
    }
    .van-card__title,
    .tag1,
    .van-card__desc {
      margin-left: 16px;
    }
    .van-card__title {
      margin-top: 8px;
    }
    .van-card__content {
      position: relative;
    }

    .van-multi-ellipsis--l2 {
      font-size: 15px;
      font-family: PingFang;
      font-weight: 500;
      color: #333333;
      line-height: 21px;
      font-weight: 800;
    }

    .van-ellipsis {
      width: 210px;
      height: 30px;
      white-space: normal;
      overflow: initial;
      margin-top: 32px;
    }
    .van-card__desc {
      height: 21px;
      font-size: 12px;
      font-family: PingFang;
      font-weight: 500;
      color: #a5a5a5;
      line-height: 18px;
    }

    .tag1,
    .tag2 {
      background: linear-gradient(#ff814e, #ff504b);
      display: inline-block;
      width: 60px;
      height: 18px;
      position: absolute;
      bottom: 40px;
      color: white;
      top: 36px;
      border-radius: 50px;
      line-height: 18px;
      text-align: center;
      box-shadow: 0px 1px 2px 0px rgba(253, 73, 38, 0.61);
    }

    .tag2 {
      margin-left: 84px;
    }
    .image {
      position: absolute;
      margin-left: 74px;
      margin-top: 18px;
      display: flex;

      img {
        width: 13px;
        height: 13px;
        margin-left: 40px;
      }
      span {
        margin-left: 8px;
        margin-top: 2px;
      }
      .van-image__img {
        width: 100%;
        height: 100%;
      }
    }
  }
}
</style>
