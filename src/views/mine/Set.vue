<template>
  <div class="set">
    <van-nav-bar title="设置" left-arrow @click-left="onClickLeft" />
    <van-cell class="selfset" :center="true" title="个人资料设置" is-link />
    <div class="setother">
      <van-cell :center="true" @click="clean" title="清除缓存" is-link />
      <van-cell :center="true" title="关于我们" is-link />
      <van-cell :center="true" title="特别感谢" is-link />
    </div>
  </div>
</template>

<script>
import { Toast } from "vant";
import { useRouter } from "vue-router";
export default {
  setup() {
    const router = useRouter();
    const onClickLeft = () => {
      router.push("/home/mine");
    };
    const clean = () => {
      Toast.success("清除成功");
    };
    return {
      onClickLeft,
      clean,
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
  height: 812px;
  .van-icon {
    color: #9c9c9c;
  }
  .selfset {
    .base-width;
    height: 56px;
    background: #ffffff;
    box-shadow: 0px 0px 16px 0px rgba(221, 207, 199, 0.57);
    border-radius: 10px;
    margin-top: 16px;
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
  .van-cell + .van-cell__title {
    .base-width;
    height: 52px;
    line-height: 55px;
    border-radius: 10px;
    box-shadow: 0px 0px 16px 0px rgba(221, 207, 199, 0.57);
    margin-top: 16px;
  }
  .van-cell__title span {
    width: 71px;
    height: 11px;
    font-size: 12px;
    font-family: PingFang;
    font-weight: 500;
    color: #323232;
    line-height: 12px;
  }
}
</style>
