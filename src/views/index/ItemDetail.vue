<!-- 项目详情页 -->
<template>
  <div id="itemdetail">
    <!-- 头部 -->
    <header>
      <!-- 头部导航 -->
      <van-nav-bar
        title="星时代金融投资"
        left-arrow
        :fixed="true"
        @click-left="onClickLeft"
        @click-right="onClickRight"
      >
        <!-- 自定义右边形状 -->
        <template #right>
          <van-icon name="weapp-nav" size="20" color="#9C9C9C" />
        </template>
      </van-nav-bar>
      <!-- 右边点击出现 -->
      <van-action-sheet
        v-model:show="show"
        :actions="actions"
        cancel-text="取消"
        close-on-click-action
        @cancel="onCancel"
      />
    </header>
    <!-- 内容 -->
    <main>
      <!-- tap -->
      <van-tabs v-model:active="active">
        <van-tab title="项目信息">
          <img src="../../assets/images/index/ItemDetail/形状@3x.png" />
        </van-tab>
        <van-tab title="安全保障">内容 2</van-tab>
        <van-tab title="指导名师">内容 3</van-tab>
      </van-tabs>
      <!-- 版心 -->
      <div class="template"></div>
    </main>
    <!-- 底部 -->
    <footer>
      <img src="../../assets/images/index/ItemDetail/联系导师@3x.png" />
    </footer>
  </div>
</template>

<script>
// 引入需要的组件
import { ref } from "vue";
import { Toast } from "vant";

// 引入路由
import router from "@/router/index.js";

export default {
  setup() {
    // tap信息
    const active = ref(0);

    // 导航信息
    const show = ref(false);
    const actions = [{ name: "分享" }, { name: "复制链接" }, { name: "举报" }];
    const onCancel = () => Toast("取消");

    // 导航左键事件
    const onClickLeft = () => {
      router.go(-1);
    };

    // 导航右键事件
    const onClickRight = () => {
      show.value = true;
    };

    return {
      onClickLeft,
      onClickRight,
      show,
      actions,
      onCancel,
      active,
    };
  },
};
</script>

<style lang="less">
@import "../../assets/css/var.less";

#itemdetail {
  // overflow: hidden;

  // 头部
  header {
    // 导航左边箭头
    .van-nav-bar .van-icon {
      color: #9c9c9c;
      font-size: 20px;
    }

    // 导航内容
    .van-nav-bar__title {
      font-size: 16px;
      font-family: PingFang;
      font-weight: bold;
      color: #333333;
    }
  }

  // 内容
  main {
    width: 100%;
    height: 923px;
    background: url("../../assets/images/index/ItemDetail/组@3x.png") no-repeat
      center center;
    background-size: 100%;
    .van-tab__pane {
      position: relative;
      img {
        position: absolute;
        top: 0;
        left: -36px;
        width: 373px;
      }
    }

    // 版心
    .template {
      background: url("../../assets/images/index/ItemDetail/组@3x.png")
        no-repeat center center;
      background-size: 100%;
    }

    // tap
    .van-tabs {
      width: 80%;
      position: absolute;
      top: 100px;
      left: 0;
      right: 0;
      margin: auto;
    }
  }

  // 底部
  footer {
    width: 100%;
    position: fixed;
    bottom: 0;
    left: 0;
    overflow: hidden;
    img {
      width: 102%;
    }
  }
}
</style>
