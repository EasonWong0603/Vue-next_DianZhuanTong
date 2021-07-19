<!-- 钱包页 -->

<template>
  <div id="wallet">
    <!-- 头部 -->
    <header>
      <!-- 导航 -->
      <van-nav-bar
        title="钱包"
        left-arrow
        placeholder
        @click-left="onClickLeft"
        :border="false"
        style="background: transparent"
      />
      <!-- 余额 -->
      <div class="balance">
        <!-- 标题 -->
        <h2>&nbsp;余额（元）</h2>
        <!-- 金额 -->
        <p>0.00</p>
        <!-- 按钮 -->
        <div class="btn">
          <span>充值</span>
          <span>提现</span>
        </div>
      </div>
      <!-- 云背景 -->
      <img src="../../assets/images/mine/pic_shading@3x.png" />
    </header>
  </div>
</template>

<script>
export default {
  setup() {},
};
</script>

<style lang="less">
@import "../../assets/css/var.less";

#wallet {
  // 头部
  header {
    height: 237px;
    background: linear-gradient(-23deg, #ff504b, #ff814e);
    border-radius: 0px 0px 10px 10px;
    overflow: hidden;
    position: relative;

    // 导航文字颜色
    .van-nav-bar .van-icon,
    .van-nav-bar__title {
      color: #fff;
    }

    // 余额
    .balance {
      .flex-center-col();
      margin-top: 28px;
      position: relative;

      h2 {
        height: 12px;
        font-size: 12px;
        font-family: PingFang;
        font-weight: 500;
        color: #fff;
        line-height: 12px;
        margin-bottom: 11px;
      }

      p {
        font-size: 24px;
        font-family: PingFang;
        font-weight: bold;
        color: #ffffff;
        margin: 11px auto 21px;
      }

      .btn span {
        display: inline-block;
        text-align: center;
        width: 73px;
        height: 27px;
        line-height: 22px;
        border: 1px solid #f4f4f4;
        border-radius: 13px;
        font-size: 13px;
        font-family: PingFang;
        font-weight: 500;
        color: #fff;
        margin: 0 15px;
      }
    }

    // 背景云
    img {
      width: 100%;
      position: absolute;
      bottom: -20px;
      left: 0;
      opacity: 0.6;
    }
  }
}
</style>
