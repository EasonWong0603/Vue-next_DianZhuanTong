<template>
  <div id="NotFound">
    <!-- 404图片 -->
    <img src="../assets/images/404page.png" />
    <h2>404</h2>
    <p>抱歉，页面不见了{{ this }}</p>
    <!-- 返回上一级按钮 -->
    <van-button
      type="warning"
      size="large"
      color="linear-gradient(to right, #ff6034, #ee0a24)"
      @click="$router.go(-1)"
      >返回</van-button
    >
  </div>
</template>

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
  // 返回按钮
  .van-button--large {
    width: 80%;
    border-radius: 25px;
  }
}
</style>
