<!-- 首页 -->

<template>
  <div id="index">
    <!-- 头部 -->
    <header>
      <!-- 头部上部分 -->
      <div class="head-top">
        <!-- 搜索框 -->
        <van-search
          v-model="state.value"
          placeholder="导师/项目"
          shape="round"
          background="transparent"
        />
        <!-- 右侧图标 -->
        <van-icon name="scan" size="24px" color="#fff" />
      </div>
      <!-- 头部图片 -->
      <div class="head-banner">
        <img src="" />
      </div>
    </header>
  </div>
</template>

<script>
import { reactive } from "vue";

export default {
  setup() {
    const state = reactive({
      value: "", // 搜索框
    });

    return { state };
  },
};
</script>

<style lang="less">
// 引入外部css
@import "../../assets/css/var.less";

#index {
  // 头部
  header {
    width: 375px;
    height: 228px;
    background: linear-gradient(186deg, #ff1a1a, #ff7428);
    opacity: 0.7;

    // 头部上部分
    .head-top {
      .flex-between();

      // 搜索框
      .van-search {
        width: 100%;
        box-shadow: 0px 1px 16px 0px rgba(255, 84, 68, 0.19);
      }

      // 搜索框图标
      .van-icon {
        margin-right: 3.2vw;
        color: rgba(255, 255, 255, 0.7);
        font-size: 18px;
      }

      // 搜索框背景
      .van-search__content {
        background: rgba(255, 255, 255, 0.4);
      }

      // placeholder文字样式
      input::-webkit-input-placeholder {
        color: rgba(255, 255, 255, 0.7);
        font-size: 13px;
        font-family: PingFang;
      }
    }

    // 头部图
    .head-banner {
      .flex-center-j();
      margin-top: 12px;

      img {
        width: 341px;
        height: 180px;
        border-radius: 5px;
        background: rgba(255, 84, 68, 0.19);
      }
    }
  }
}
</style>
