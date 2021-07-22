<!-- 银行卡页 -->

<template>
  <div id="bankcard">
    <van-nav-bar
      title="我的银行卡"
      left-arrow
      @click-left="onClickLeft"
      fixed
      placeholder
    />
    <img src="../../assets/images/mine/yhk.jpg" />
  </div>
</template>
<script>
//引入整个路由
import { useRouter } from "vue-router";

export default {
  setup() {
    // 定义整个路由
    const router = useRouter();
    const onClickLeft = () => {
      router.go(-1);
    };

    return {
      onClickLeft,
    };
  },
};
</script>
<style lang="less">
#bankcard {
  .van-nav-bar .van-icon {
    color: rgb(128, 128, 128);
  }

  .van-nav-bar__title {
    color: rgb(128, 128, 128);
    font-weight: 600;
  }
  img {
    width: 100%;
  }
}
</style>
