<template>
  <div class="membercenter">
    <MineHeader></MineHeader>

    <van-nav-bar
      title="会员"
      :border="false"
      left-arrow
      @click-left="onClickLeft"
    />

    <div class="namediv">
      <div class="namedivtop">
        <!-- 头像 判断，如果设置了头像就是设置的头像，没有就放自定义图片-->
        <div class="photo"></div>
        <!-- 介绍的盒子 -->
        <div class="information">
          <!-- 名字，获取注册时的名字 -->
          <div class="name">{{ username }}</div>
          <!-- 等级的红砖图片 -->
          <div class="vipimg"></div>
          <!-- 个人简介：一个判断 -->
          <div class="introduction">
            简介,填写个人设置之后填写，如果没有填写就是暂无介绍
          </div>
          <!-- 成长值  -->
          <div class="growthvalue">
            <h3 class="num">{{ "333改变" }}</h3>
            <span>成长值</span>
          </div>
          <!-- 积分 -->
          <div class="integral">
            <h3 class="num">0</h3>
            <span>积分</span>
          </div>
        </div>
        <!-- 会员等级 -->
        <div class="grade">
          <span>续费会员</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from "vue";
import MineHeader from "@/components/mine/MineHeader.vue";
export default {
  setup() {
    let username = ref(localStorage.getItem("username"));

    return {
      username,
    };
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
.membercenter {
  .base-width();
  height: 812px;
  background: #ffffff;
  position: relative;
  .van-nav-bar {
    .base-width();
    position: absolute;
    top: 50px;
    background: rgba(255, 255, 255, 0);
    .van-nav-bar__title {
      color: #ffffff;
      font-size: 16px;
    }
    .van-icon {
      color: #ffffff;
    }
  }

  //个人简介的盒子设置，分上下两部分
  .namediv {
    height: 127px;
    background: #ffffff url(../../assets/images/mine/pic_shading@3x.png)
      no-repeat;
    background-position: bottom;
    background-size: 100%;
    box-shadow: 0px 4px 16px 0px rgba(255, 76, 71, 0.21);
    border-radius: 10px;
    top: 110px;
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
  }
}
</style>
