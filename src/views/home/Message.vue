<template>
  <div class="news">
    <!-- bar导航 -->
    <van-nav-bar title="消息">
      <template #right>
        <van-icon name="manager-o" size="18" color="#333" />&emsp;
        <van-popover
          v-model:show="showPopover"
          :actions="actions"
          overlay="true"
          placement="bottom-end"
        >
          <template #reference>
            <van-icon name="plus" size="18" color="#333" />
          </template>
        </van-popover>
      </template>
    </van-nav-bar>
    <!-- 气泡弹出 -->
    <!-- 通知栏 -->
    <van-notice-bar mode="closeable"
      >技术是开发它的人的共同灵魂。</van-notice-bar
    >
    <!-- 列表项 -->
    <van-swipe-cell>
      <van-image
        round
        width="40"
        height="40"
        src="https://img.yzcdn.cn/vant/cat.jpeg"
      />
      <van-cell :border="false">
        <template #title>
          <div class="title">
            <p>这是标题这是标题</p>
            <span class="time">时间</span>
          </div>
        </template>
        <template #value> <p>这是内容</p></template>
        <i></i>
      </van-cell>
      <template #right>
        <van-button square type="danger" text="删除" />
      </template>
      <!-- 未读消息提醒 -->
      <span class="num">&nbsp;1&nbsp;</span>
    </van-swipe-cell>
  </div>
</template>

<script>
import { ref } from "vue";

export default {
  setup() {
    const showPopover = ref(false);
    const actions = [
      { text: "选项一", icon: "add-o" },
      { text: "选项二", icon: "music-o" },
    ];

    return {
      actions,
      showPopover,
    };
  },
};
</script>

<style lang="less" scoped>
.van-swipe-cell {
  display: flex;
  position: relative;
  .van-image {
    position: absolute;
    left: 12px;
    top: 14px;
    z-index: 100;
  }
  .van-cell {
    padding-left: 58px;
    width: 375px;
    flex-direction: column;
    align-items: flex-start;
    .title {
      display: flex;
      width: 305px;
      justify-content: space-between;
      p {
        font-size: 14px;
      }

      span {
        font-size: 10px;
        color: #6b6b6b;
      }
    }
  }
  .van-button--normal {
    height: 66px;
    width: 80px;
    border: 0;
    background: linear-gradient(-23deg, #ff514b, #ff814e);
  }
  .num {
    position: absolute;
    z-index: 101;
    display: block;
    right: 15px;
    top: 50%;
    font-size: 12px;
    color: #fff;
    height: 14px;
    min-width: 14px;
    background: linear-gradient(-23deg, #ff514b, #ff814e);
    border-radius: 7px;
    box-shadow: 0px 2px 4px 0px rgba(253, 73, 38, 0.61);
    text-align: center;
    line-height: 14px;
    color: #f8f8f8;
  }
}
</style>
