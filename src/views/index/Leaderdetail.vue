<template>
  <div class="bag">
    <!-- 导航 -->
    <van-nav-bar title="详情" left-arrow fixed="true">
      <template #right>
        <van-icon name="search" size="18" />
      </template>
    </van-nav-bar>
  </div>
  <router-view />
  <!-- 介绍 -->
  <div class="van-bg" v-for="item in state" :key="item.id">
    <!-- <p>{{ item }}</p> -->
    <div class="van-card">
      <div class="pre-bg"></div>
      <div class="van-content">
        <span class="name">{{ item.name }}</span>
        <img src="../../assets/images/index/leader/redu@3x.png" />
        <span class="count">{{ item.hot }}</span>
      </div>
      <span class="num1">风险投资</span>
      <span class="num2">一级导师</span>
      <p class="battel">{{ item.simpleIntro2 }}</p>
      <div class="care">
        <span>关注{{ item.attention }}</span>
        <span class="moudle">粉丝{{ item.follower }}</span>
      </div>
    </div>
  </div>
  <!-- 路由 -->
  <van-tabs v-model:active="active">
    <!-- 介绍老师 -->
    <van-tab title="介绍"
      ><p class="titl">职业经历</p>
      <p class="content">
        针对Facebook公司Libra项目的反对之声正此起彼伏。日前，众议院金融服务委员会已经致函Mark
        Zuckerberg、Sheryl Sandberg以及Calibra公司首席执行官David
        Marcus，要求暂停开发Libra项目以及Facebook为此设计的数字钱包Calibra。
        委员会方面指出，“就目前的情况来看，这类产品可能面向以瑞士为基础的全新全球性金融体系，旨在与美国的货币政策以及美元直接对抗。这不仅影响到Facebook公司超过20亿用户，同时也将在隐私、交易、国家安全以及货币政策等多个领域给投资者、消费者乃至更为广泛的全球经济带来新的问题。”针对Facebook公司Libra项目的反对之声正此起彼伏。日前，众议院金融服务委员会已经致函Mark
        Zuckerberg、Sheryl Sandberg以及Calibra公司首席执行官David
        Marcus，要求暂停开发Libra项目以及Facebook为此设计的数字钱包Calibra。
        委员会方面指出，“就目前的情况来看，这类产品可能面向以瑞士为基础的全新全球性金融体系，旨在与美国的货币政策以及美元直接对抗。这不仅影响到Facebook公司超过20亿用户，同时也将在隐私、交易、国家安全以及货币政策等多个领域给投资者、消费者乃至更为广泛的全球经济带来新的问题。”
      </p></van-tab
    >
    <!-- 评价 -->
    <van-tab title="评价"><p class="titl">用户评价</p></van-tab>
    <!-- 动态 -->
    <van-tab title="动态">内容 3</van-tab>
  </van-tabs>
  <!-- 立即咨询 -->
  <van-action-bar>
    <van-action-bar-icon text="¥0.00" @click="onClickIcon" class="price" />
    <van-action-bar-icon
      text="已有1020人咨询"
      @click="onClickIcon"
      class="zixun"
    />
    <div class="box">
      <van-action-bar-button
        id="but"
        type="danger"
        text="立即咨询"
        @click="onClickButton"
      />
    </div>
  </van-action-bar>
</template>

<script>
import { getLeaderlistDataApi, getFriendDataApi } from "../../../src/utils/api";
import { reactive, onMounted } from "vue";
import { ref } from "vue";

export default {
  setup() {
    const state = reactive({
      detailContent: "",
      // proData: "",
    });
    //评价
    const think = async () => {
      const res = await getFriendDataApi();
      console.log(res);
      // state.proData=
    };
    //老师名字等
    const login = async () => {
      const res = await getLeaderlistDataApi();
      console.log(res.data.result);
      state.detailContent = res.data.result[0];
      // console.log(state.detailContent);
    };
    const active = ref(2);
    onMounted(() => {
      login();
      think();
    });
    return {
      login,
      state,
      active,
      think,
    };
  },
};
</script>

<style lang="less">
// 导航
.bag {
  height: 46px;
}
// 介绍
.van-bg {
  background: #f0f0f0;

  .van-card {
    width: 341px;
    background: white;
    margin-top: 12px;

    border-radius: 7px;
    margin: auto;
    .pre-bg {
      width: 70px;
      height: 70px;
      background-color: rgb(41, 24, 24);
      border-radius: 70px;
      display: inline-block;
    }
    .van-content {
      display: flex;
    }

    .care {
      height: 11px;
      font-size: 12px;
      font-family: PingFang;
      font-weight: 500;
      color: #a5a5a5;
      line-height: 14px;
      margin-top: 17px;
      .moudle {
        margin-left: 13px;
      }
    }
    .battel {
      width: 270px;
      height: 21px;
      font-size: 12px;
      font-family: PingFang;
      font-weight: 500;
      color: #a5a5a5;
      line-height: 21px;
      margin-top: 14px;
    }
    .name {
      width: 49px;
      height: 16px;
      font-size: 16px;
      font-family: PingFang;
      font-weight: bold;
      color: #333333;
      line-height: 21px;
    }
    img {
      width: 12px;
      height: 16px;
      margin-left: 10px;
    }
    .count {
      width: 39px;
      height: 16px;
      font-size: 13px;
      font-family: PingFang;
      font-weight: 500;
      color: #f79b24;
      line-height: 16px;
      margin-left: 6px;
      margin-top: 2px;
    }
    .num1,
    .num2 {
      height: 19px;
      display: inline-block;
      font-size: 10px;
      font-family: PingFang;
      font-weight: 500;
      color: #ff504b;
      line-height: 14px;
      width: 58px;
      background: #ffdfdb;
      box-shadow: 0px 5px 10px 0px rgba(236, 236, 236, 0.49);
      border-radius: 7px;
      text-align: center;
      line-height: 19px;
      margin-top: 10px;
    }
    .num2 {
      margin-left: 10px;
    }
  }
}

//  立即咨询
.van-action-bar {
  height: 52px;
  .price {
    width: 50px;
    height: 13px;
    font-size: 10px;
    font-family: PingFang;
    font-weight: bold;
    color: #ff554b;
    display: inline;
    margin-left: 22px;
  }
  .zixun {
    width: 95px;
    height: 11px;
    font-size: 11px;
    font-family: PingFang;
    font-weight: bold;
    color: #aaaaaa;
    display: inline;
  }
  .box {
    width: 100px;
    height: 40px;
    margin-left: 80px;
    border-radius: 20px;
  }
  #but {
    --van-action-bar-height: 200px;
    background: linear-gradient(-23deg, #ff514b, #ff814e);
    box-shadow: 0px 5px 12px 0px rgba(253, 73, 38, 0.49);
    border-radius: 20px;
  }
}
//  路由
.van-tabs {
  width: 341px;
  height: 450px;
  margin: auto;
  background: white;
  .titl {
    width: 70px;
    height: 30px;
    font-size: 14px;
    font-weight: bold;
    color: #333333;
    line-height: 30px;
    margin-left: 22px;
    margin-top: 22px;
  }
  .content {
    width: 298px;
    height: 317px;
    font-size: 14px;
    font-family: PingFang;
    font-weight: bold;
    color: #aaaaaa;
    margin-left: 22px;
    margin-top: 16px;
  }
}
</style>
