<template>
  <div class="news">
    <!-- bar导航 -->
    <van-nav-bar title="消息" fixed="true" placeholder="true">
      <template #right>
        <van-icon
          :name="
            require('../../assets/images/index/Message/icon_maillist@3x.png')
          "
          @click="gotoMaillist"
          size="15"
        />&emsp;
        <van-popover
          v-model:show="showPopover"
          :actions="actions"
          overlay="true"
          placement="bottom-end"
          style="left: 237px"
        >
          <template #reference>
            <van-icon
              :name="
                require('../../assets/images/index/Message/ic_join_dialing_norm@3x.png')
              "
              size="15"
            />
          </template>
        </van-popover>
      </template>
    </van-nav-bar>

    <!-- 通知栏 -->
    <van-notice-bar mode="closeable" color="#FF504B;"
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
    <!-- 列表项-系统通知-不可见 -->
    <van-swipe-cell>
      <div class="icon-left">
        <span></span>
        <van-image
          round
          width="40"
          height="40"
          :src="require('../../assets/images/index/Message/icon_tutor@3x.png')"
          style="
            background: linear-gradient(-23deg, #ff514b, #ff814e);
            box-shadow: 0px 2px 4px 0px rgba(253, 73, 38, 0.61);
          "
        />
      </div>
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
    <!-- 列表项-系统通知-不可见 -->
    <van-swipe-cell
      ><van-image
        round
        width="40"
        height="40"
        :src="require('../../assets/images/index/Message/icon_team@3x.png')"
        style="
          background: linear-gradient(-46deg, #ea7be1, #ff7f7f);
          box-shadow: 0px 2px 4px 0px rgba(253, 73, 38, 0.61);
        "
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
import { ref, onBeforeMount } from "vue";
import { useRouter } from "vue-router";
export default {
  setup() {
    const showPopover = ref(false);
    const actions = [
      {
        text: "添加朋友",
        icon: require("../../assets/images/index/Message/icon_popup_add@3x.png"),
      },
      {
        text: "创建群聊",
        icon: require("../../assets/images/index/Message/icon_popup_create@3x.png"),
      },
    ];
    const router = useRouter();
    function gotoMaillist() {
      router.push("/maillist");
    }

    // 别删，这个是底部导航需要的
    onBeforeMount(() => {
      localStorage.setItem("index", 2);
    });

    return {
      actions,
      showPopover,
      // change,
      gotoMaillist,
      onBeforeMount,
    };
  },
};
</script>

<style lang="less" scoped>
@import "../../assets/css/var.less";
.van-swipe-cell {
  display: flex;
  .van-image {
    position: absolute;
    left: @xs-font;
    top: @s-font;
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
        font-size: @s-font;
      }

      span {
        font-size: @xxs-font;
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
    font-size: @xs-font;
    color: #fff;
    height: @s-font;
    min-width: @s-font;
    background: linear-gradient(-23deg, #ff514b, #ff814e);
    border-radius: 7px;
    box-shadow: 0px 2px 4px 0px rgba(253, 73, 38, 0.61);
    text-align: center;
    line-height: @s-font;
    color: #f8f8f8;
  }
}
.van-notice-bar {
  height: 32px;
  font-size: @xs-font;
}
.van-nav-bar__content
  .van-nav-bar__right
  .van-popover__wrapper
  .van-badge__wrapper {
  margin-right: 10px;
  margin-top: 7px;
  height: 14px;
}
.van-popover .van-popover__arrow {
  right: var(--van-border-radius-sm);
}
</style>
