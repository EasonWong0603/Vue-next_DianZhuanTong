<!-- 加入点赚通 -->
<template>
  <div id="join">
    <!-- 头部导航 -->
    <header>
      <van-nav-bar title="加入点赚通" left-arrow @click-left="onClickLeft" />
    </header>
    <!-- 内容 -->
    <main>
      <!-- 立即邀请 -->
      <button @click="handleclick"></button>
    </main>
    <van-share-sheet
      v-model:show="showShare"
      title="立即分享给好友"
      :options="options"
      @select="onSelect"
    />
  </div>
</template>

<script>
// 引入路由
import router from "@/router/index.js";
import { ref } from "vue";
import { Toast } from "vant";

export default {
  setup() {
    // 后退上级路由
    const onClickLeft = () => {
      router.go(-1);
    };

    // 立即邀请
    const handleclick = () => {
      showShare.value = true;
    };

    // 引入分享组件
    const showShare = ref(false);
    const options = [
      [
        { name: "微信", icon: "wechat" },
        { name: "朋友圈", icon: "wechat-moments" },
        { name: "微博", icon: "weibo" },
        { name: "QQ", icon: "qq" },
      ],
      [
        { name: "复制链接", icon: "link" },
        { name: "分享海报", icon: "poster" },
        { name: "二维码", icon: "qrcode" },
        { name: "小程序码", icon: "weapp-qrcode" },
      ],
    ];

    // 分享成功
    const onSelect = () => {
      Toast.loading({
        message: "加载中...",
        forbidClick: true,
      });
      showShare.value = false;
    };

    return {
      onClickLeft,
      handleclick,
      options,
      showShare,
      onSelect,
    };
  },
};
</script>

<style lang="less">
// 引入自定义css
@import "../../assets/css/var.less";

// 加入点赚通区
#join {
  // 头部
  header {
    height: 39px;

    /* 头部导航组件 */
    .van-nav-bar {
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
    }
    .van-nav-bar__title {
      font-family: PingFang;
      font-weight: 500;
      color: #333333;
    }

    .van-nav-bar .van-icon {
      color: #b2b4b7;
    }
  }

  // 内容
  main {
    background: url("../../assets/images/index/Join/立即邀请@3x.png") no-repeat
      center center;
    background-size: 100% 100%;
    height: 1156px;
    position: relative;

    // 立即邀请
    button {
      width: 318px;
      height: 49px;
      border: none;
      background: transparent;
      position: absolute;
      top: 638px;
      left: 0;
      right: 0;
      margin: auto;
      border-radius: 25px;
    }
  }
}
</style>
