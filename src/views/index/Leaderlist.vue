<template>
  <div id="leaderdetail">
    <!-- 导航栏 -->
    <van-nav-bar title="投资理财" left-arrow>
      <template #right>
        <van-icon name="search" size="18" />
      </template>
    </van-nav-bar>
    <!-- 导师详情 -->
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
          <img src="../../assets/images/index/leader/redu@3x.png" /><span
            >2322</span
          >
          <img src="../../assets/images/index/leader/yonghu2@3x.png" /><span
            >2322</span
          >
        </div></template
      >
    </van-card>
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
    // const mylogin = () => {
    //   getLeaderlistDataApi(param).then((res) => {
    //     setData(res);
    //   });
    //   conole
    //   ksajfksldjf

    // const res = await getLeaderlistDataApi();
    // setData(res);
    // };

    const login = async () => {
      const res = await getLeaderlistDataApi();
      console.log(res);
      state.preData = res.data.result;
      console.log(res.data.result);
    };

    const gotoDetail = (id) => {
      router.push("/leaderdetail/" + id);
    };

    onMounted(() => {
      login();
    });

    return {
      login,
      state,
      gotoDetail,
    };
  },
};
</script>

<style lang="less">
#leaderdetail {
  .van-card {
    width: 341px;
    height: 144px;
    background: #ffffff;
    box-shadow: 0px 4px 14px 0px rgba(198, 198, 198, 0.61);
    border-radius: 4px;
    margin: auto;
    margin-top: 20px !important;
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
      margin-top: 36px;
    }
    .van-card__desc {
      height: 31px;
      font-size: 12px;
      font-family: PingFang;
      font-weight: 500;
      color: #a5a5a5;
      line-height: 21px;
    }

    .tag1,
    .tag2 {
      background: linear-gradient(#ff814e, #ff504b);
      display: inline-block;
      width: 60px;
      height: 21px;
      position: absolute;
      bottom: 40px;
      color: white;
      border-radius: 50px;
      line-height: 21px;
      text-align: center;
    }

    .tag2 {
      margin-left: 70px;
    }
    .image {
      position: absolute;
      margin-left: 54px;
      margin-top: 18px;
      display: flex;

      img {
        width: 13px;
        height: 13px;
        margin-left: 40px;
      }
      span {
        margin-left: 10px;
      }
      .van-image__img {
        width: 100%;
        height: 100%;
      }
    }
  }
}
</style>
