<template>
  <van-nav-bar title="详情" />
</template>

<script>
import { Toast } from "vant";

export default {
  methods: {
    onClickLeft() {
      Toast("返回");
    },
    onClickRight() {
      Toast("按钮");
    },
  },
};
</script>
