<template>
  <div>
    <van-nav-bar title="详情" left-text="返回" @click-left="onClickLeft" />
  </div>
</template>

<script>
import { Toast } from "vant";

export default {
  methods: {
    onClickLeft() {
      Toast("返回");
    },
  },
};
</script>

<style lang="less" scoped></style>
