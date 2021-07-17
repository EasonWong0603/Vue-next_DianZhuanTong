<template>
  <div class="mine">
    <MineHeader></MineHeader>
    <router-link to="/setup">
      <img
        class="setupdiv"
        src="../../assets/images/mine/icon_setup.png"
        alt=""
      />
    </router-link>
    <div class="namediv">
      <div class="namedivtop">
        <!-- 头像 判断，如果设置了头像就是设置的头像，没有就放自定义图片-->
        <div class="photo"></div>
        <!-- 介绍的盒子 -->
        <div class="information">
          <!-- 名字，获取注册时的名字 -->
          <div class="name">本地储存，获取名字</div>
          <!-- 个人简介：一个判断 -->
          <div class="introduction">
            简介,填写个人设置之后填写，如果没有填写就是暂无介绍
          </div>
        </div>
        <!-- 会员等级 -->
        <div class="grade">
          <span>VIP会员</span>
        </div>
      </div>
      <div class="namedivbottom">
        <!-- 收藏  -->
        <div class="collect">
          <h3 class="num">12</h3>
          <span>收藏</span>
        </div>
        <!-- 关注 -->
        <div class="attention">
          <h3 class="num">06</h3>
          <span>关注</span>
        </div>
        <!-- 粉丝 -->
        <div class="fans">
          <h3 class="num">88</h3>
          <span>粉丝</span>
        </div>
      </div>
    </div>
    <!-- 会员中心 -->
    <div>
      <!-- 会员，跳转到会员中心 -->
      <van-grid class="membercenter" :border="false">
        <van-grid-item
          to="/membercenter"
          :icon="require('../../assets/images/mine/icon_vip.png')"
          text="会员"
        >
        </van-grid-item>
        <van-grid-item
          to="/wallet"
          :icon="require('../../assets/images/mine/icon_wallet.png')"
          text="我的钱包"
        />
        <van-grid-item
          :icon="require('../../assets/images/mine/icon_wallet.png')"
          text="关注文章"
        />
      </van-grid>
    </div>
  </div>
</template>

<script>
import MineHeader from "@/components/mine/MineHeader.vue";
export default {
  data() {
    return {};
  },

  components: {
    MineHeader,
  },

  computed: {},

  mounted() {},

  methods: {},
};
</script>

<style lang="less" scoped>
@import "../../assets/css/reset.less";
@import "../../assets/css/var.less";
.mine {
  width: 375px;
  height: 812px;
  background: #ffffff;
  position: relative;
  .setupdiv {
    width: 19px;
    height: 19.5px;
    position: absolute;
    top: 55px;
    left: 314px;
  }
  .namediv {
    height: 171px;
    background: #ffffff url(../../assets/images/mine/pic_shading.png) no-repeat;
    background-position: bottom;
    background-size: 100%;
    box-shadow: 0px 4px 16px 0px rgba(255, 76, 71, 0.21);
    border-radius: 10px;
    top: 100px;
    .pos-left-width;
    .namedivtop {
      .photo {
        width: 57px;
        height: 57px;
        background: #ed5f5f;
        box-shadow: 1px 5px 7px 0px rgba(255, 77, 73, 0.38);
        border-radius: 50%;
        position: absolute;
        left: 20px;
        top: 13px;
      }
      .information {
        width: 150px;
        height: 40px;
        position: absolute;
        left: 94px;
        top: 21px;
        background: chocolate;
        .name {
          font-size: 16px;
          font-family: PingFang;
          font-weight: 500;
          color: #333333;
          background: cadetblue;
        }
        .introduction {
          width: 150px;
          height: 11px;
          font-size: 11px;
          font-family: PingFang;
          font-weight: 500;
          color: #b6b6b6;
          margin: 7px 0px 0px 1px;
        }
      }
      .grade {
        width: 76px;
        height: 21px;
        background: linear-gradient(-23deg, #ff504b, #ff814e);
        box-shadow: 0px 3px 4px 0px rgba(253, 73, 38, 0.58);
        border-radius: 10px 0px 10px 0px;
        position: absolute;
        left: 257px;
        top: 22px;
        font-size: 12px;
        font-family: PingFang;
        font-weight: 400;
        color: #ffffff;
        line-height: 21px;
        text-align: center;
      }
    }
    .namedivbottom {
      width: 346px;
      height: 62px;
      opacity: 0.51;
      border-radius: 10px;
      position: absolute;
      bottom: 0px;
      .flex-around;
      .num {
        width: 19px;
        height: 13px;
        font-size: 17px;
        font-family: PingFang;
        font-weight: 500;
        color: #333;
      }
      span {
        display: inline-block;
        width: 25px;
        height: 12px;
        font-size: 12px;
        font-family: PingFang;
        font-weight: 400;
        color: #8a8a8a;
        line-height: 18px;
        margin-top: 13px;
      }
    }
  }
  .membercenter {
    .pos-left-width;
    height: 82px;
    background: #ffffff;
    box-shadow: 0px 0px 16px 0px rgba(235, 195, 194, 0.48);
    border-radius: 10px;
    top: 286px;
    .member {
      width: 27px;
      display: flex;
      justify-content: column;
      .membericon {
        display: inline-block;
        width: 27px;
        height: 19px;
        box-shadow: 1px 1px 3px 0px rgba(71, 201, 231, 0.48);
      }
    }
  }
}
</style>
