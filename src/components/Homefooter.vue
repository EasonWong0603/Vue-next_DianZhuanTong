<template>
  <footer>
    <van-tabbar
      v-model="active"
      :placeholder="true"
      :border="false"
      :route="true"
    >
      <!-- 首页图标 -->
      <van-tabbar-item to="/home/index">
        <span>首页</span>
        <template #icon="props">
          <img
            :src="props.active ? homeicon.indexactive : homeicon.indexinactive"
          />
        </template>
      </van-tabbar-item>
      <!-- 社区页图标 -->
      <van-tabbar-item to="/home/community">
        <span>社区</span>
        <template #icon="props">
          <img
            :src="
              props.active
                ? homeicon.communityactive
                : homeicon.communityinactive
            "
          />
        </template>
        <!-- 消息页图标 -->
      </van-tabbar-item>
      <van-tabbar-item to="/home/message">
        <span>消息</span>
        <template #icon="props">
          <img
            :src="
              props.active ? homeicon.messageactive : homeicon.messageinactive
            "
          />
        </template>
      </van-tabbar-item>
      <!-- 我的页图标 -->
      <van-tabbar-item to="/home/mine">
        <span>我的</span>
        <template #icon="props">
          <img
            :src="props.active ? homeicon.mineactive : homeicon.mineinactive"
          />
        </template>
      </van-tabbar-item>
    </van-tabbar>
  </footer>
</template>

<script>
import { ref } from "vue";

export default {
  setup() {
    // 激活首页面图标
    const active = ref(0);

    // 自定义图标路径
    const homeicon = {
      indexactive: require("@/assets/images/home/index_b.png"),
      indexinactive: require("../assets/images/home/coummunity_s.png"),
      communityactive: require("../assets/images/home/community_b.png"),
      communityinactive: require("../assets/images/home/coummunity_s.png"),
      messageactive: require("../assets/images/home/message_b.png"),
      messageinactive: require("../assets/images/home/message_s.png"),
      mineactive: require("../assets/images/home/mine_b.png"),
      mineinactive: require("../assets/images/home/mine_s.png"),
    };

    return {
      active,
      homeicon,
    };
  },
};
</script>

<style lang="less">
.van-tabbar {
  height: 49px;
  background: #f8f8f8;
  box-shadow: 0px -4px 8px 0px rgba(198, 198, 198, 0.38);
  // 激活样式
  .van-tabbar-item--active {
    color: #ff574b;
    position: relative;
    background: #f8f8f8;
    // 图标背后稍大的背景圆
    &::after {
      content: "";
      display: block;
      width: 50px;
      height: 50px;
      background: #f8f8f8;
      position: absolute;
      top: -20px;
      left: 0;
      right: 0;
      margin: auto;
      border-radius: 50%;
      box-shadow: 0px -8px 8px 0px rgba(198, 198, 198, 0.38);
    }

    img {
      position: relative;
      transform: translateY(-10px) scale(2);
      z-index: 10;
    }
  }
}
</style>
