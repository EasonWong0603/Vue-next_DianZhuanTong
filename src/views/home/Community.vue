<template>
  <div class="community">
    <div class="head">
      <span class="s1">热门动态</span>
      <span class="s2">最新动态</span>
      <span class="s3">相机</span>
    </div>
  </div>
</template>

<script>
export default {
  setup() {},
};
</script>

<style lang="less" scoped>
@import "../../assets/css/var.less";
.community {
  width: 100%;
  height: 600px;
  .head {
    width: 375px;
    height: 44px;
    background: #f8f8f8;
    .flex-center-a();
    .s1 {
      width: 100px;
      height: 17px;
      font-size: 18px;
      font-family: PingFang;
      font-weight: bold;
      color: #ff504b;
      margin-left: 19px;
    }
    .s2 {
      width: 52px;
      height: 13px;
      font-size: 13px;
      font-family: PingFang;
      font-weight: 500;
      color: #666666;
      margin-right: 160px;
      margin-top: 5px;
    }
    .s3 {
      margin-top: 5px;
    }
  }
}
</style>
