<template>
  <div class="set">
    <van-nav-bar title="设置" left-arrow @click-left="onClickLeft" />
    <van-cell title="个人资料设置" is-link />
  </div>
</template>

<script>
import { useRouter } from "vue-router";
export default {
  setup() {
    const router = useRouter();
    const onClickLeft = () => {
      router.push("/home/mine");
    };
    return {
      onClickLeft,
    };
  },
};
</script>

<style lang="less" scoped>
// 引入样式
@import "../../assets/css/reset.less";
@import "../../assets/css/var.less";
.set {
  .base-width;
  height: 812px;
}
</style>
