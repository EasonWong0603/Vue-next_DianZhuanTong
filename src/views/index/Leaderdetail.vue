<template>
  <div class="bag" style="background: url(state.detailContent.headbg)">
    <img :src="state.detailContent.headbg" class="bagimg" />
    <div class="bagcon">
      <!-- 导航 -->
      <div class="nav">
        <img
          src="../../assets/images/index/leader/tuceng1.png"
          @click="onClickLeft"
          class="last"
        />
        <span class="money">详情</span>
        <img
          src="../../assets/images/index/leader/sandian.png"
          class="search"
        />
      </div>
      <router-view />
      <!-- 介绍 -->
      <div class="van-bg">
        <div class="van-card">
          <span class="focus" @click="follower" v-if="already">关注</span>
          <span class="nofocus" @click="followers" v-else>已关注</span>
          <div class="pre-bg">
            <img :src="state.detailContent.headimg" class="touxiang" />
          </div>
          <div class="van-content">
            <span class="name">{{ state.detailContent.name }}</span>
            <img
              src="../../assets/images/index/leader/redu@3x.png"
              class="icon"
            />
            <span class="count">{{ state.detailContent.hot }}</span>
          </div>
          <span class="num1">风险投资</span>
          <span class="num2">一级导师</span>
          <p class="battel">{{ state.detailContent.simpleIntro2 }}</p>
          <div class="care">
            <span>关注 {{ state.detailContent.attention }}</span>
            <span class="moudle"
              >粉丝 {{ state.detailContent.followerer }}</span
            >
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
        <van-tab title="评价"
          ><p class="titl">用户评价</p>
          <div class="imgname" v-for="item in state.talk" :key="item.id">
            <span class="coimg"
              ><img :src="item.headimg" class="comag" />
            </span>
            <span class="man">{{ item.name }}</span>
            <span class="lasttime">{{ item.lasttime }}</span>
            <p class="comment">{{ item.content }}</p>
          </div>
        </van-tab>
        <!-- 动态 -->
        <van-tab title="动态">
          <div>
            <span class="coimage"
              ><img
                src="../../assets/images/index/leader/touxiang.png"
                class="imangs"
            /></span>
            <span class="manname">白雅晴</span>
          </div>
          <p class="coent">
            人民币汇率双向波动增强，外汇市场主体更加适应和理性。8.11汇改以来，人民币汇率弹性不断提高，波动率已接近主要发达国家货币水平。人民币汇率双向波动成为常态
          </p>
          <!-- banner -->
          <img
            src="../../assets/images/index/leader/323@3x.png"
            class="banner"
          />
          <!-- 3个icon -->
          <div class="idea">
            <span class="icommg">
              <img
                src="../../assets/images/index/leader/zhuanfa@3x.png"
                class="iconimg"
              /><span class="word">转发</span>
            </span>
            <span class="icommg">
              <img
                src="../../assets/images/index/leader/pinglun@3x.png"
                class="iconimg"
              /><span class="word">1324</span>
            </span>
            <span class="icommg">
              <img
                src="../../assets/images/index/leader/zan@3x.png"
                class="iconimg"
              /><span class="word">2133</span>
            </span>
          </div></van-tab
        >
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
    </div>
  </div>
</template>

<script>
import {
  getLeaderbackDataApi,
  getPersonlistDataApi,
} from "../../../src/utils/api";
import { reactive, onMounted } from "vue";
import { ref } from "vue";
// 引入路由
import router from "@/router/index.js";

export default {
  props: { id: String },
  setup(props) {
    const state = reactive({
      detailContent: [],
      talk: [],
    });
    //评价
    const think = async () => {
      const res = await getPersonlistDataApi();
      // console.log(res);
      state.talk = res.data.result;
      console.log(state.talk);
    };
    //老师详情
    const login = async () => {
      const res = await getLeaderbackDataApi({ id: props.id });
      state.detailContent = res.data.backid;
      console.log(state.detailContent);
    };

    let already = ref(!localStorage.getItem("follower"));

    //关注 已关注
    const follower = () => {
      console.log(already.value);
      already.value = !already.value;
      localStorage.setItem("follower", already.value);
    };

    const followers = () => {
      already.value = !already.value;
      localStorage.removeItem("follower");
    };

    //跳转上一级
    const onClickLeft = () => {
      router.go(-1);
    };
    const active = ref(0);
    onMounted(() => {
      think();
      login();
      // let already = localStorage.getItem("follower");
    });

    const onClickIcon = () => {};

    const onClickButton = () => {};

    return {
      login,
      state,
      active,
      think,
      onClickIcon,
      onClickButton,
      onClickLeft,
      already,
      follower,
      followers,
    };
  },
};
</script>

<style lang="less">
@import "../../assets/css/var.less";

.bag {
  .bagimg {
    width: 100%;
    position: absolute;
  }
  //导航栏
  .nav {
    height: 44px;
    position: relative;
    .last {
      width: 9px;
      height: 16px;
      display: inline-block;
      margin-left: 17px;
      margin-top: 15px;
    }
    .money {
      height: 16px;
      font-size: 16px;
      font-family: PingFang;
      font-weight: 500;
      margin-left: 144px;
      position: absolute;
      top: 13px;
      width: 34px;
      color: #ffffff;
    }
    .search {
      height: 3px;
      display: inline-block;
      left: 342px;
      margin-top: 20px;
      position: absolute;
    }
  }
  // 介绍
  .van-bg {
    margin-top: 90px;

    .van-card {
      width: 341px;
      height: 170px;
      background: white;
      margin-top: 12px;
      border-radius: 7px 7px 0 0;
      margin: auto;
      position: relative;
      .focus {
        width: 73px;
        height: 27px;
        background: linear-gradient(-23deg, #ff514b, #ff814e);
        box-shadow: 0px 6px 12px 0px rgba(253, 73, 38, 0.49);
        border-radius: 13px;
        font-size: 15px;
        font-family: PingFang;
        font-weight: 500;
        color: #ffffff;
        line-height: 27px;
        text-align: center;
        text-shadow: 0px 1px 0px rgba(248, 84, 27, 0.48);
        position: absolute;
        left: 250px;
        margin-top: 8px;
      }
      .nofocus {
        width: 73px;
        height: 27px;
        text-shadow: 0px 1px 0px rgba(212, 206, 204, 0.48);
        background: linear-gradient(-23deg, #857d7d, #e0dddc);
        box-shadow: 0px 6px 12px 0px rgba(122, 117, 115, 0.49);
        border-radius: 13px;
        font-size: 15px;
        font-family: PingFang;
        font-weight: 500;
        color: #ffffff;
        line-height: 27px;
        text-align: center;
        position: absolute;
        left: 250px;
        margin-top: 8px;
      }
      .pre-bg {
        width: 70px;
        height: 70px;
        background-color: rgb(41, 24, 24);
        border-radius: 70px;
        display: inline-block;
        overflow: hidden;
        position: absolute;
        top: -40px;
        border: 1px solid rgb(255, 255, 255);
        // position: relative;
        box-shadow: 0px 6px 7px 0px rgba(255, 84, 68, 0.26);
        .touxiang {
          width: 70px;
          height: 70px;
          position: absolute;
        }
      }
      .van-content {
        display: flex;
        margin-top: 32px;
        position: relative;
      }

      .care {
        height: 11px;
        font-size: 12px;
        font-family: PingFang;
        font-weight: 500;
        color: #a5a5a5;
        line-height: 14px;
        margin-top: 16px;
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
      .icon {
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
        border-radius: 20px;
        text-align: center;
        line-height: 19px;
        margin-top: 10px;
      }
      .num2 {
        margin-left: 10px;
      }
    }
  }

  .van-tabs .van-tab__pane {
    padding-bottom: 50px;
  }

  //  立即咨询
  .van-action-bar {
    height: 52px;
    .price {
      font-weight: bold;
      color: #ff554b;
      margin-left: 22px;
      font-size: 20px;
    }
    .zixun {
      width: 95px;
      height: 11px;
      font-size: 11px;
      font-family: PingFang;
      font-weight: bold;
      color: #aaaaaa;
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

    //评价
    .van-tab__pane {
      background-color: white;
      .imgname {
        height: 74px;
        position: relative;
        border-bottom: 1px solid rgb(233, 233, 233);
        margin: 11px 20px 0 20px;

        .coimg {
          display: inline-block;
          width: 30px;
          height: 30px;
          border-radius: 80px;
          position: relative;
          .comag {
            width: 29px;
            height: 29px;
            position: absolute;
            top: 4px;
          }
        }
        .man {
          position: absolute;
          width: 59px;
          height: 30px;
          line-height: 30px;
          font-size: 13px;
          font-weight: bold;
          color: #333333;
          margin-left: 10px;
          display: inline-block;
          margin-top: 4px;
        }
        .lasttime {
          margin-left: 220px;
          position: absolute;
          top: 13px;
          color: rgb(187, 187, 187);
          right: 0;
        }
      }

      .comment {
        width: 300px;
        line-height: 18px;
        font-size: 13px;
        font-weight: 500;
        color: #aaaaaa;
        margin-top: 10px;
      }
    }

    //介绍老师
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
      width: 300px;
      font-family: PingFang;
      font-weight: 500;
      color: #aaaaaa;
      margin-left: 22px;
      height: 406px;
      line-height: 16px;
      font-size: 13px;
    }
    //动态
    .coimage {
      width: 40px;
      height: 40px;
      display: inline-block;
      margin-left: 22px;
      margin-top: 10px;
      .imangs {
        width: 40px;
        height: 40px;
        margin-top: 18px;
      }
    }
    .manname {
      width: 38px;
      height: 13px;
      font-size: 13px;
      font-family: PingFang;
      font-weight: bold;
      color: #333333;
      margin-left: 10px;
    }
    .coent {
      width: 300px;
      line-height: 18px;
      font-size: 13px;
      font-weight: 500;
      color: #aaaaaa;
      margin-left: 22px;
      margin-top: 18px;
    }
    .banner {
      width: 298px;
      height: 130px;
      margin: auto;
      margin-top: 14px;
    }
    .idea {
      margin-top: 24px;
      position: relative;
      .flex-around();
      .icommg {
        display: flex;
      }
      .iconimg {
        width: 12px;
        height: 12px;
        display: inline-block;
        margin-right: 6px;
      }
      .word {
        // position: absolute;
        font-family: PingFang;
        font-weight: 500;
        color: #999999;
      }
    }
  }
}
</style>
