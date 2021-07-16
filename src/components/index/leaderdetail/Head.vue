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
  <div class="van-bg">
    <div class="van-card">
      <div>
        <span class="name">白雅晴</span>
        <img src="./images/redu@3x.png" />
        <span class="count">68796</span>
      </div>
      <span class="num1">风险投资</span>
      <span class="num2">一级导师</span>
      <p class="battel">CBA证券分析师、股票操盘高手,有着丰富的经验</p>
      <div class="care">
        <span>关注365</span>
        <span class="moudle">粉丝342</span>
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
</template>

<script>
import { Toast } from "vant";

export default {
  setup() {
    const onClickIcon = () => Toast("点击图标");
    const onClickButton = () => Toast("点击按钮");
    return {
      onClickIcon,
      onClickButton,
    };
  },
};
</script>

<style lang="less" scoped>
// 介绍
.van-bg {
  background: #f0f0f0;
  margin-top: 12px;

  .van-card {
    width: 341px;
    height: 638px;

    border-radius: 7px;
    margin: auto;

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
      height: 14px;
      margin-left: 10px;
    }
    .count {
      width: 39px;
      height: 10px;
      font-size: 13px;
      font-family: PingFang;
      font-weight: 500;
      color: #f79b24;
      line-height: 29px;
      margin-left: 6px;
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
