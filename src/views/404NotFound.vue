<template>
  <div id="NotFound">
    <img src="../assets/images/404page.png" />
    <h2>404</h2>
    <p>抱歉，页面不见了</p>
    <van-button
      type="warning"
      size="large"
      color="linear-gradient(to right, #ff6034, #ee0a24)"
      @click="goback"
      >返回</van-button
    >
  </div>
</template>
<script>
// 引入路由
import router from "@/router/index.js";

export default {
  setup() {
    // 点击后退上个页面
    const goback = () => {
      router.go(-1);
    };

    return { goback };
  },
};
</script>

<style lang="less" scoped>
#NotFound {
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  img {
    width: 100%;
  }
  h2 {
    font-size: 30px;
    margin-top: 20px;
  }
  p {
    font-size: 22px;
    color: grey;
    margin-top: 40px;
    margin-bottom: 100px;
  }
}
</style>
