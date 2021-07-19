<template>
  <div id="NotFound">
    <img
      src="https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fhbimg.huabanimg.com%2F820debe8b6be1c8b143500696694685b9d17e26e48749-2x6FOf_fw658&refer=http%3A%2F%2Fhbimg.huabanimg.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1629198364&t=6c81303b777ea70f2332f650948630aa"
    />
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
  background: #7ebeed;

  img {
    width: 100%;
    // height: 100%;
  }
}
</style>
