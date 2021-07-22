<template>
  <div class="membercenter">
    <MineHeader></MineHeader>
    <!-- 头部的导航栏，返回上一层 -->
    <van-nav-bar
      title="会员"
      :border="false"
      left-arrow
      @click-left="onClickLeft"
    />
    <!-- 姓名的盒子，姓名头像，成长值，积分，续费会员 -->
    <div class="namediv">
      <div class="namedivtop">
        <!-- 头像的盒子 判断，如果设置了头像就是设置的头像，没有就放自定义图片-->
        <div class="photo">
          <!-- 头像 -->
          <van-image
            round
            width="57px"
            height="57px"
            src="https://img.yzcdn.cn/vant/cat.jpeg"
          />
        </div>
        <!-- 介绍的盒子 -->
        <div class="information">
          <!-- 名字，获取注册时的名字 -->
          <div class="name">{{ username }}</div>
          <!-- 等级的红钻图片 -->
          <div class="vipimg">
            <img
              v-if="growthvalue >= 0 && growthvalue < 200"
              src="../../assets/images/mine/icon_v_v0@3x.png"
              alt=""
            />
            <img
              v-if="growthvalue >= 200 && growthvalue < 400"
              src="../../assets/images/mine/icon_v_v1@3x.png"
              alt=""
            />
            <img
              v-if="growthvalue >= 400 && growthvalue < 600"
              src="../../assets/images/mine/icon_v_v2@3x.png"
              alt=""
            />
            <img
              v-if="growthvalue >= 600 && growthvalue < 800"
              src="../../assets/images/mine/icon_v_v3@3x.png"
              alt=""
            />
            <img
              v-if="growthvalue >= 800 && growthvalue < 1000"
              src="../../assets/images/mine/icon_v_v4@3x.png"
              alt=""
            />
            <img
              v-if="growthvalue >= 1000"
              src="../../assets/images/mine/icon_v_v5@3x.png"
              alt=""
            />
          </div>
          <!-- 个人简介：一个判断 -->
          <div class="introduction">
            简介：{{ message ? message : "暂无介绍" }}
          </div>
          <div class="growthdiv">
            <div class="growthvalue">
              <h3 class="num">{{ growthvalue }}</h3>
              <span>成长值</span>
            </div>
            <!-- 积分 -->
            <div class="integral">
              <h3 class="num">0</h3>
              <span>积分</span>
            </div>
          </div>
          <!-- 成长值  -->
        </div>
        <!-- 会员等级 -->
        <div class="grade">
          <span>续费会员</span>
        </div>
      </div>
    </div>
    <h2>成长值</h2>
    <!-- 中间的成长值，按照成长值点亮星星 -->
    <div class="growthvaluemiddle">
      <div class="valuediv">
        <div class="valuespan">
          <span>{{ growthvalue + "/" }}</span>
          <i>1000</i>
        </div>
        <!-- 进度条 -->
        <van-progress
          color="#FF504B"
          :percentage="growthvalue / 10"
          stroke-width="6"
          style="width: 313px"
          :show-pivot="false"
        />
        <ul>
          <!-- 根据成长值调整钻的点亮 -->
          <li>
            <img
              class="orange"
              v-if="growthvalue >= 0"
              src="../../assets/images/mine/icon_v_v0@3x.png"
              alt=""
            />
          </li>
          <li>
            <img
              v-if="growthvalue < 200"
              class="gray"
              src="../../assets/images/mine/icon_v_v4@3x.png"
              alt=""
            />
            <img
              v-if="growthvalue >= 200"
              class="orange"
              src="../../assets/images/mine/icon_v_v1@3x.png"
              alt=""
            />
          </li>
          <li>
            <img
              class="gray"
              v-if="growthvalue < 400"
              src="../../assets/images/mine/icon_v_v4@3x.png"
              alt=""
            />
            <img
              class="orange"
              v-if="growthvalue >= 400"
              src="../../assets/images/mine/icon_v_v2@3x.png"
              alt=""
            />
          </li>
          <li>
            <img
              class="gray"
              v-if="growthvalue < 600"
              src="../../assets/images/mine/icon_v_v3@3x.png"
              alt=""
            />
            <img
              class="orange"
              v-if="growthvalue >= 600"
              src="../../assets/images/mine/icon_v_v0@3x.png"
              alt=""
            />
          </li>
          <li>
            <img
              class="gray"
              v-if="growthvalue < 800"
              src="../../assets/images/mine/icon_v_v4@3x.png"
              alt=""
            />
            <img
              class="orange"
              v-if="growthvalue >= 800"
              src="../../assets/images/mine/icon_v_v0@3x.png"
              alt=""
            />
          </li>
          <li>
            <img
              class="gray"
              v-if="growthvalue < 1000"
              src="../../assets/images/mine/icon_v_v5@3x.png"
              alt=""
            />
            <img
              class="orange"
              v-if="growthvalue >= 1000"
              src="../../assets/images/mine/icon_v_v0@3x.png"
              alt=""
            />
          </li>
        </ul>
        <!-- 距离下个级别的提示 -->
        <div class="next">
          距离下一等级换需要 <span>{{ 1000 - growthvalue }}</span> 成长值
        </div>
      </div>
    </div>
    <!-- 我的特权 -->
    <van-cell
      class="privilege"
      :center="true"
      title="我的特权"
      is-link
      @click="clicktoast"
    />
    <!-- <van-popup v-model:show="show">我的特权</van-popup> -->
    <!-- 成长任务 -->
    <div class="growthtask">
      <van-cell :center="true">成长任务</van-cell>
      <van-cell :center="true">
        初次绑定账号<span class="add">+15成长值</span>
        <van-button
          v-if="!growthvalue"
          round
          type="primary"
          size="small"
          icon-position="right"
          hairline="false"
          color="linear-gradient(-23deg, #ff504b, #ff814e)"
          @click="getvalue"
          >领取15成长值</van-button
        >
        <van-button
          :center="true"
          v-if="growthvalue"
          round
          type="primary"
          size="small"
          icon-position="right"
          text="已领取"
          :disabled="true"
          color="#E2E2E2"
          @click="getvalue"
        ></van-button>
      </van-cell>
      <van-cell :center="true" to="/SetSelfInformation">上传头像</van-cell>
      <van-cell :center="true" to="/feedback">特别感谢</van-cell>
    </div>
  </div>
</template>

<script>
import { ref } from "vue";
import { Toast } from "vant";
//引入整个路由
import { useRouter } from "vue-router";
import MineHeader from "@/components/MineHeader.vue";
export default {
  setup() {
    // 定义整个路由
    const router = useRouter();
    let username = ref(localStorage.getItem("username")); //获取本地姓名
    const message = ref(localStorage.getItem("message")); //获取个性签名
    let growthvalue = ref(
      localStorage.getItem("growthvalue")
        ? localStorage.getItem("growthvalue")
        : 0
    ); //成长值的值
    // 返回上个界面
    const onClickLeft = () => {
      router.go(-1);
    };
    // 我的特权的弹出层
    const clicktoast = () => {
      Toast("我的特权");
    };
    // 之前未绑定账号转到绑定账号页面
    const getvalue = () => {
      router.push("/SetSelfInformation");
    };

    return {
      username,
      message,
      growthvalue, //成长值的值
      onClickLeft, //返回
      clicktoast, //点击弹出
      getvalue, //
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
  height: 100%;
  position: fixed;
  top: -35px;
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
        .vipimg {
          // 红钻
          width: 21px;
          height: 20px;
          position: absolute;
          top: 0px;
          left: 70px;
          img {
            width: 21px;
            height: 20px;
          }
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
        .growthdiv {
          // 成长值和积分的盒子
          margin-top: 20px;
          .growthvalue {
            display: inline-block;
            margin: 0 88px 12px 0;
          }
          .integral {
            display: inline-block;
          }
          .num {
            width: 31px;
            height: 13px;
            font-size: 17px;
            font-family: PingFang SC;
            font-weight: 500;
            color: #ff564b;
            text-align: center;
            margin-bottom: 12px;
          }
          span {
            width: 36px;
            height: 11px;
            font-size: @xs-font;
            font-family: PingFang SC;
            font-weight: 400;
            color: #8a8a8a;
            line-height: 18px;
          }
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
        font-size: @xs-font;
        font-family: PingFang;
        font-weight: 400;
        color: #ffffff;
        line-height: 21px;
        text-align: center;
      }
    }
  }
  // 成长值的标题
  h2 {
    width: 36px;
    height: 12px;
    font-size: @xs-font;
    font-family: PingFang SC;
    font-weight: 500;
    color: #ff706c;
    line-height: 18px;
    margin-left: 15px;
    margin-top: 20px;
  }
  // 中间成长值的盒子
  .growthvaluemiddle {
    width: 346px;
    height: 119px;
    background: #ffffff;
    box-shadow: 0px 4px 16px 0px rgba(222, 222, 222, 0.21);
    border-radius: 10px;
    margin: 10px 14px 0 15px;
    // 成长值/1000的盒子样式
    .valuediv {
      width: 100%;
      text-align: center;

      .valuespan {
        // 成长值的标红
        height: 12px;
        font-size: @xs-font;
        font-family: PingFang SC;
        font-weight: 500;
        color: #ff706c;
        line-height: 18px;
        padding-top: 24px;
        i {
          // 1000
          color: #cdcdcd;
        }
      }
      .van-progress {
        // 进度条
        margin-left: 17px;
        position: absolute;
        top: 320px;
      }
      ul {
        // 钻的6张图的盒子
        width: 346px;
        height: 21px;
        display: flex;
        justify-content: space-between;
        padding: 6px;
        position: absolute;
        top: 325px;
        li {
          // 图片li的大小
          width: 21px;
          height: 21px;
          .gray {
            // 灰色图片
            width: 14px;
            height: 13px;
          }
          .orange {
            // 橘色图片
            width: 21px;
            height: 21px;
          }
        }
      }
      .next {
        // 距离下个等级差多少提示
        position: absolute;
        top: 360px;
        left: 24px;
        width: 180px;
        height: 13px;
        font-size: @xs-font;
        font-family: PingFang SC;
        font-weight: 500;
        color: #cdcdcd;
        line-height: 18px;
        span {
          // 差值的颜色
          color: #ff706c;
        }
      }
    }
  }
  .privilege {
    //我的特权
    width: 346px;
    height: 56px;
    background: #ffffff;
    box-shadow: 0px 0px 16px 0px rgba(221, 207, 199, 0.57);
    border-radius: 10px;
    margin: 16px 14px 0 15px;
  }
  .van-popup {
    //我的特权弹出层大小
    width: 100px;
    height: 100px;
    line-height: 100px;
    text-align: center;
  }
  .growthtask {
    width: 345px;
    height: 222px;
    background: #ffffff;
    box-shadow: 0px 4px 16px 0px rgba(222, 222, 222, 0.21);
    border-radius: 10px;
    position: absolute;
    margin: 15px 14px 0 15px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
  }
  .van-cell {
    border-radius: 10px;
  }

  .van-cell__value {
    font-size: 12px;
    font-family: PingFang SC;
    font-weight: 500;
    color: #323232 !important;
    height: 50px;
    line-height: 50px;
    border-radius: 10px;
    .add {
      font-size: 8px;
      font-family: PingFang SC;
      font-weight: 500;
      color: #fd504b;
      line-height: 12px;
      position: absolute;
      top: 38px;
      left: 0;
    }
    .van-button {
      height: 21px;
      border-radius: 32px;
      position: absolute;
      top: 15px;
      right: 13px;
      span {
        color: white;
      }
    }
  }
}
</style>
