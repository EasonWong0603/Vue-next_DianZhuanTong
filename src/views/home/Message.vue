<template>
  <div class="news">
    <!-- bar导航 -->
    <van-nav-bar title="消息" :fixed="true" :placeholder="true">
      <template #right>
        <van-icon
          :name="
            require('../../assets/images/index/Message/icon_maillist@3x.png')
          "
          @click="gotoMaillist"
          size="15"
        />&emsp;<!-- 气泡弹出框 -->
        <van-popover
          v-model:show="showPopover"
          :actions="actions"
          :overlay="true"
          placement="bottom-end"
          style="left: 237px"
          @select="onSelect"
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
    <!-- 列表项-系统通知-不可见 -->
    <div class="list">
      <van-swipe-cell>
        <div class="icon-left">
          <span></span>
          <van-image
            round
            width="40"
            height="40"
            :src="
              require('../../assets/images/index/Message/icon_tutor@3x.png')
            "
            style="
              background: linear-gradient(-23deg, #ff514b, #ff814e);
              box-shadow: 0px 2px 4px 0px rgba(253, 73, 38, 0.61);
            "
          />
        </div>
        <van-cell :border="false">
          <template #title>
            <div class="title">
              <p style="font-size: 14px; color: #282828">导师消息</p>
              <span class="time" style="color: #6b6b6b">5月14日</span>
            </div>
          </template>
          <template #value>
            <p style="font-size: 12px; color: #6b6b6b">
              欢迎李三加入点赚通导师行列中
            </p></template
          >
          <i></i>
        </van-cell>
        <template #right>
          <van-button square type="danger" text="删除" />
        </template>
        <!-- 未读消息提醒 -->
        <!-- <span class="num"></span> -->
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
              <p style="font-size: 14px; color: #282828">团队消息</p>
              <span class="time" style="color: #6b6b6b">5月14日</span>
            </div>
          </template>
          <template #value>
            <p style="font-size: 12px; color: #6b6b6b">
              新人入列，欢迎交流
            </p></template
          >
          <i></i>
        </van-cell>
        <template #right>
          <van-button square type="danger" text="删除" />
        </template>
        <!-- 未读消息提醒 -->
        <span class="num">1</span>
      </van-swipe-cell>
      <!-- 渲染列表项 -->
      <van-swipe-cell v-for="(item, index) in state.listData" :key="index">
        <div class="zhezhao" @click="gotoChatroom(item.id)"></div>
        <div class="zhezhao2" @click="dellist(item, index)"></div>
        <van-image round width="40" height="40" :src="item.headimg" />
        <van-cell :border="false">
          <template #title>
            <div class="title">
              <p style="font-size: 14px; color: #282828">{{ item.name }}</p>
              <span class="time" style="color: #6b6b6b">{{ item.time }}</span>
            </div>
          </template>
          <template #value>
            <p style="font-size: 12px; color: #6b6b6b">
              {{ item.content }}
            </p></template
          >
          <i></i>
        </van-cell>
        <template #right>
          <van-button square type="danger" text="删除" />
        </template>
        <!-- 未读消息提醒 -->
        <span class="num">99+</span>
      </van-swipe-cell>
    </div>
  </div>
</template>

<script>
import { getPersonlistDataApi } from "../../utils/api";
import { ref, onBeforeMount, reactive, onMounted} from "vue";
import { useRouter } from "vue-router";

import { } from "vue";

export default {
  setup() {
    const showPopover = ref(false);
    const actions = [
      {
        text: "添加朋友",
        icon: require("../../assets/images/index/Message/icon_popup_add@3x.png"),
        /* select: router.push("/maillist"), */
      },
      {
        text: "创建群聊",
        icon: require("../../assets/images/index/Message/icon_popup_create@3x.png"),
      },
    ];
    const router = useRouter();
    //渲染消息数据
    const state = reactive({
      listData: "",
    });

    const randerList = async () => {
      const res = await getPersonlistDataApi();
      state.listData = res.data.result;
    };
    onMounted(() => {
      randerList();
    });

    //跳转联系人列表
    const gotoMaillist = () => {
      router.push("/maillist");
    };
    //跳转聊天室
    const gotoChatroom = (id) => {
      router.push("/chatroom/" + id);
    };

    //滑动点击删除

    const dellist = (item, index) => {
      state.listData.splice(index, 1);
    };
    //气泡弹出框跳转
    const onSelect = (action) => {
      if (action.text === "添加朋友") {
        router.push("/newfriend");
      } else {
        router.push("/groupchat");
      }
    };

    // 别删，这个是底部导航需要的
    onBeforeMount(() => {
      localStorage.setItem("index", 2);
    });

    return {
      actions,
      showPopover,
      // change,
      gotoMaillist,
      gotoChatroom,
      dellist,
      randerList,
      state,
      onSelect,
      onBeforeMount,
    };
  },
};
</script>

<style lang="less" scoped>
@import "../../assets/css/var.less";
.van-swipe-cell {
  display: flex;
  position: relative;
  .zhezhao {
    width: 100%;
    height: 100%;
    position: absolute;
    z-index: 10000;
    top: 0px;
    left: 0px;
  }
  .zhezhao2 {
    width: 80px;
    height: 100%;
    position: absolute;
    z-index: 10000;
    top: 0px;
    right: -80px;
  }
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
    line-height: @s-font;
    padding: 0 3px 0 3px;
    position: absolute;
    z-index: 101;
    display: block;
    right: 15px;
    top: 50%;
    font-size: @xxs-font;
    font-weight: 100;
    color: #fff;
    height: @s-font;
    min-width: @s-font;
    background: linear-gradient(-23deg, #ff514b, #ff814e);
    border-radius: 7px;
    box-shadow: 0px 2px 4px 0px rgba(253, 73, 38, 0.61);
    text-align: center;
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
