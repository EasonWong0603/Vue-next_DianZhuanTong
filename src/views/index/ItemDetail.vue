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
        :placeholder="true"
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
      <van-tabs v-model:active="active" background="transparent">
        <van-tab title="项目信息">
          <div class="imagebox">
            <img
              class="tab-bg"
              src="../../assets/images/index/ItemDetail/01.png"
            />
          </div>
        </van-tab>
        <van-tab title="安全保障">
          <div class="imagebox">
            <img
              class="tab-bg"
              src="../../assets/images/index/ItemDetail/02.png"
            />
          </div>
        </van-tab>
        <van-tab title="指导名师">
          <div class="imagebox">
            <img
              class="tab-bg"
              src="../../assets/images/index/ItemDetail/03.png"
            />
            <!-- 点击关注 -->
            <div class="btn" @click="follow"></div>
          </div>
        </van-tab>
      </van-tabs>
      <!-- 模板 -->
      <div class="template"></div>
    </main>
    <!-- 底部 -->
    <footer>
      <img src="../../assets/images/index/ItemDetail/联系导师@3x.png" />
      <!-- 点击跳转导师列表 -->
      <div class="btn" @click="handleclick"></div>
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

    // 点击跳转老师页
    const handleclick = () => {
      router.push("/leaderlist");
    };

    // 点击关注
    const follow = () => {
      Toast.loading({
        message: "加载中...",
        forbidClick: true,
        duration: 1000,
      });
      setTimeout(() => {
        Toast.success("关注成功");
      }, 1500);
    };

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
      handleclick,
      follow,
    };
  },
};
</script>

<style lang="less">
@import "../../assets/css/var.less";

#itemdetail {
  position: relative;
  // 头部
  header {
    .van-nav-bar {
      z-index: 99 !important;
    }
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
    height: 834px;
    background: url("../../assets/images/index/ItemDetail/组@3x.png") no-repeat;
    background-size: 100%;
    position: relative;

    .van-tabs {
      position: absolute;
      top: 130px;
      width: 90%;
      left: 0;
      right: 0;
      margin: auto;

      .van-tabs__nav--line {
        z-index: 1;
      }

      .imagebox {
        padding-bottom: 760px;
      }

      .tab-bg {
        width: 100%;
        position: absolute;
        top: 0;
        left: 0;
      }

      .btn {
        position: absolute;
        top: 76px;
        right: 18px;
        width: 73px;
        height: 27px;
        background: transparent;
        border-radius: 13px;
      }
    }
  }

  // 底部
  footer {
    width: 100%;
    position: fixed;
    bottom: 0;
    left: 0;
    box-shadow: -1px -20px 27px 0px rgba(81, 81, 81, 0.05);

    img {
      width: 100%;
      height: 85px;
    }

    .btn {
      position: absolute;
      top: 22px;
      left: 0;
      right: 0;
      margin: auto;
      width: 90%;
      height: 40px;
      background: transparent;
      border-radius: 60px;
    }
  }
}
</style>
