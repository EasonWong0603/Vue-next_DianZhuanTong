<template>
  <div class="bag">
    <!-- 导航 -->
    <van-nav-bar title="详情" left-arrow>
      <template #right>
        <van-icon name="search" size="18" />
      </template>
    </van-nav-bar>
  </div>
  <router-view />
  <!-- 介绍 -->
  <div class="van-bg" v-for="item in state" :key="item.id">
    <p>{{ item }}</p>
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
  <!-- 立即咨询 -->
  <van-action-bar>
    <van-action-bar-icon text="¥0.00" @click="onClickIcon" class="price" />
    <van-action-bar-icon
      text="已有1020人咨询"
      @click="onClickIcon"
      class="zixun"
    />
    <van-action-bar-button
      type="danger"
      text="立即咨询"
      @click="onClickButton"
    />
  </van-action-bar>
  <!-- 路由 -->
  <van-tabs v-model="active">
    <van-tab title="标签 1"
      ><h3>职业经历</h3>
      <p></p
    ></van-tab>
    <van-tab title="标签 2">内容 2</van-tab>
    <van-tab title="标签 3">内容 3</van-tab>
    <van-tab title="标签 4">内容 4</van-tab>
  </van-tabs>
</template>

<script>
import { getLeaderlistDataApi } from "../../../src/utils/api";
import { reactive, onMounted } from "vue";

export default {
  setup() {
    const state = reactive({
      detailContent: "",
      active: 2,
    });
    const login = async () => {
      const res = await getLeaderlistDataApi();
      console.log(res.data.result[0]);
      state.detailContent = res.data.result[0];
      console.log(state.detailContent);
    };
    onMounted(() => {
      login();
    });
    return {
      login,
      state,
    };
  },
};
</script>

<style lang="less">
// 介绍
.van-bg {
  background: #f0f0f0;

  .van-card {
    width: 341px;

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
    width: 47px;
    height: 13px;
    font-size: 10px;
    font-family: PingFang;
    font-weight: bold;
    color: #ff554b;
    .zixun {
      width: 85px;
      height: 11px;
      font-size: 11px;
      font-family: PingFang;
      font-weight: bold;
      color: #aaaaaa;
    }
    .van-button {
      width: 100px;
      height: 40px;
      background: linear-gradient(-23deg, #ff514b, #ff814e);
      box-shadow: 0px 5px 12px 0px rgba(253, 73, 38, 0.49);
      border-radius: 20px;
    }
  }
}
</style>
