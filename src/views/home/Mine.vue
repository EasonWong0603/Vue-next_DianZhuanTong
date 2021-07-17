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
      <!-- 会员，跳转到会员中心/组件 -->
      <van-grid
        class="membercenter"
        :border="false"
        :column-num="3"
        icon-size="50px"
      >
        <!-- 会员 -->
        <van-grid-item
          class="membercenterin"
          to="/membercenter"
          :icon="require('../../assets/images/mine/icon_vip.png')"
          text="会员"
        >
        </van-grid-item>
        <!-- 会员钱包，跳转到钱包页面 -->
        <van-grid-item
          class="membercenterin"
          to="/wallet"
          :icon="require('../../assets/images/mine/icon_wallet.png')"
          text="我的钱包"
        />
        <!-- 关注的文章 -->
        <van-grid-item
          class="membercenterin"
          :icon="require('../../assets/images/mine/icon_article.png')"
          text="关注文章"
        />
      </van-grid>
    </div>
    <!-- 会员福利-红包积分等等 -->
    <div class="memberwelfare">
      <!-- 我的红包 -->
      <van-cell
        :border="false"
        :icon="require('../../assets/images/mine/icon_honhbao.png')"
        title="我的红包"
        is-link
        value="根据红包页得红包数"
        url="index.vue"
      />
      <!-- 我的积分 -->
      <van-cell
        :border="false"
        :icon="require('../../assets/images/mine/icon_wdejifrn.png')"
        title="我的积分"
        is-link
        value=""
      />
      <!-- 邀请好友 -->
      <van-cell
        :border="false"
        :icon="require('../../assets/images/mine/icon_haoyou.png')"
        title="邀请好友"
        is-link
        value=""
      />
      <!-- 我的银行卡 -->
      <van-cell
        :border="false"
        :icon="require('../../assets/images/mine/icon_yinhangka.png')"
        title="我的银行卡"
        is-link
        value=""
      />
      <!-- 帮助中心 -->
      <van-cell
        :border="false"
        :icon="require('../../assets/images/mine/icon_help.png')"
        title="帮助中心"
        is-link
        value=""
      />
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
};
</script>

<style lang="less">
//引入样式
@import "../../assets/css/reset.less";
@import "../../assets/css/var.less";
//个人中心的页面大小和背景色
.mine {
  width: 375px;
  height: 812px;
  background: #ffffff;
  position: relative;
  //右上角设置的按钮
  .setupdiv {
    width: 19px;
    height: 19.5px;
    position: absolute;
    top: 55px;
    left: 314px;
  }
  //个人简介的盒子设置，分上下两部分
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
      //个简介的头像，以及名字等级，可复用
      .photo {
        //头像
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
        //个人信息
        width: 150px;
        height: 40px;
        position: absolute;
        left: 94px;
        top: 21px;
        .name {
          //姓名
          font-size: 16px;
          font-family: PingFang;
          font-weight: 500;
          color: #333333;
        }
        .introduction {
          // 简介
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
        // 会员等级
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
      // 个人信息的下部分，收藏等信息
      width: 346px;
      height: 62px;
      opacity: 0.51;
      border-radius: 10px;
      position: absolute;
      bottom: 0px;
      .flex-around;
      .num {
        //收藏关注等等的数量的样式
        width: 19px;
        height: 13px;
        font-size: 17px;
        font-family: PingFang;
        font-weight: 500;
        color: #333;
      }
      span {
        //收藏关注的字体设置
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
    // 会员中心
    .pos-left-width;
    height: 82px;
    background: #c70606;
    box-shadow: 0px 0px 16px 0px rgba(235, 195, 194, 0.48);
    border-radius: 10px;
    top: 286px;

    .membercenterin {
      width: 111px;
      height: 80px;
    }
    .van-grid-item__text {
      // 会员中心标题的颜色
      // width: 24px;
      height: 12px;
      font-size: 12px;
      font-family: PingFang;
      font-weight: 500;
      color: #333333;
      line-height: 19px;
      margin-top: 0px;
      margin-left: -29px;
    }
    .van-grid-item__icon {
      margin-left: -29px;
    }
  }
  .memberwelfare {
    // 会员福利盒子
    .pos-left-width;
    top: 382px;
    height: 238px;
    background: #ffffff;
    box-shadow: 0px 0px 16px 0px rgba(221, 207, 199, 0.57);
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    .van-cell__value {
      height: 12px;
      font-size: 13px;
      font-family: PingFang;
      font-weight: 500;
      color: #fc5d26;
      line-height: 18px;
    }
  }
}
</style>
