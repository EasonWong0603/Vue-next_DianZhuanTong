<template>
  <div class="set">
    <van-nav-bar title="设置" left-arrow @click-left="onClickLeft" />
    <van-cell
      class="selfset"
      :center="true"
      title="个人资料设置"
      to="/SetSelfInformation"
      is-link
    />
    <div class="setother">
      <!-- 清除缓存，轻浮动 -->
      <van-cell :center="true" @click="clean" title="清除缓存" is-link />
      <!--  -->
      <van-cell :center="true" title="关于我们" is-link @click="clicktoast1" />
      <van-cell :center="true" title="特别感谢" is-link @click="clicktoast2" />
    </div>
  </div>
</template>

<script>
import { Toast } from "vant";
//引入整个路由
import { useRouter } from "vue-router";
export default {
  setup() {
    // 定义整个路由
    const router = useRouter();

    const onClickLeft = () => {
      router.push("/home/mine");
    };
    const clean = () => {
      Toast.success("清除成功");
    };
    const clicktoast1 = () => {
      Toast("关于我们");
    };
    const clicktoast2 = () => {
      Toast("特别感谢");
    };

    return {
      onClickLeft,
      clean,
      clicktoast1,
      clicktoast2,
    };
  },
};
</script>

<style lang="less">
// 引入样式
@import "../../assets/css/reset.less";
@import "../../assets/css/var.less";
.set {
  .base-width;
  height: 100%;
  position: fixed;

  .van-icon {
    color: #9c9c9c;
  }
  .selfset {
    .base-width;
    height: 56px;
    background: #ffffff;
    box-shadow: 0px 0px 16px 0px rgba(221, 207, 199, 0.57);
    border-radius: 10px;
    margin-top: 16px !important;
  }
  .setother {
    .base-width;
    height: 170px;
    box-shadow: 0px 0px 16px 0px rgba(221, 207, 199, 0.57);
    border-radius: 10px;
    margin-top: 16px;
    .flex-y-around();
    background: #ffffff;
  }
  .van-cell {
    .base-width;
    height: 52px;
    line-height: 55px;
    border-radius: 10px;
  }
  // 设置的左边内容的内容和字体的设置
  .van-cell__title span {
    width: 71px;
    height: 11px;
    font-size: 12px;
    font-family: PingFang;
    font-weight: 500;
    color: #323232;
    line-height: 12px;
  }
  //关于我们弹出框里的内容大小设置
  .van-popup {
    width: 100px;
    height: 100px;
    line-height: 100px;
    text-align: center;
  }
}
</style>
