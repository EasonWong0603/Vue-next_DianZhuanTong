<template>
  <footer>
    <van-tabbar v-model="active" :placeholder="true" :border="false">
      <van-tabbar-item to="/home/index">
        <span>首页</span>
        <template #icon="props">
          <img
            :src="
              props.active
                ? require('@/assets/images/home/index_b.png')
                : require('@/assets/images/home/index_s.png')
            "
          />
        </template>
      </van-tabbar-item>
      <van-tabbar-item to="/home/community">
        <span>社区</span>
        <template #icon="search">
          <img
            :src="
              search.active
                ? require('../assets/images/home/community_b.png')
                : require('../assets/images/home/coummunity_s.png')
            "
          />
        </template>
      </van-tabbar-item>
      <van-tabbar-item to="/home/message">
        <span>消息</span>
        <template #icon="search">
          <img
            :src="
              search.active
                ? require('../assets/images/home/message_b.png')
                : require('../assets/images/home/message_s.png')
            "
          />
        </template>
      </van-tabbar-item>
      <van-tabbar-item to="/home/mine">
        <span>我的</span>
        <template #icon="search">
          <img
            :src="
              search.active
                ? require('../assets/images/home/mine_b.png')
                : require('../assets/images/home/mine_s.png')
            "
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
    const active = ref(0);

    return {
      active,
    };
  },
};
</script>

<style lang="less">
.van-tabbar {
  height: 49px;
  background: #f8f8f8;
  box-shadow: 0px -4px 8px 0px rgba(198, 198, 198, 0.38);
}

.van-tabbar-item--active {
  color: #ff574b;
}

.van-tabbar-item--active {
  position: relative;
  background: #f8f8f8;

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
</style>
