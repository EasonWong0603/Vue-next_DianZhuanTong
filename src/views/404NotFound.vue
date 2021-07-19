<template>
  <div id="NotFound">
    <img src="../assets/images/404page.png" />
  </div>
</template>

<style lang="less">
// 引入自定义样式
@import "../assets/css/var.less";

html,
body {
  height: 100%;
}

#NotFound {
  height: 100%;
  .flex-center();
  // background: orange;
  img {
    width: 100%;
  }
}
</style>
