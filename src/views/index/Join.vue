<!-- 加入点赚通 -->
<template>
  <div id="join">
    <header>
      <van-nav-bar title="加入点赚通" left-arrow @click-left="onClickLeft" />
    </header>
  </div>
</template>

<script>
import router from "@/router/index.js";

export default {
  setup(props, context) {
    const onClickLeft = () => {
      router.go(-1);
      console.log(context);
      console.log(props);
    };
    return {
      onClickLeft,
    };
  },
};
</script>

<style lang="less">
@import "../../assets/css/var.less";

header {
  .van-nav-bar__title {
    font-family: PingFang;
    font-weight: 500;
    color: #333333;
  }

  .van-nav-bar .van-icon {
    color: #b2b4b7;
  }
}
</style>
