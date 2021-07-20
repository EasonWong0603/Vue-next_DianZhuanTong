<template>
  <div>
    <!-- 导航 -->
    <van-nav-bar title="新的好友" :fixed="true" :placeholder="true">
      <template #left>
        <van-icon
          :name="
            require('../../assets/images/index/Message/icon_left_arrow@3x.png')
          "
          size="12"
          @click="back"
        />
      </template>
    </van-nav-bar>
    <!-- 列表 -->
    <van-swipe-cell v-for="(item, index) in state.listData" :key="index">
      <div class="zhezhao" @click="gotoChatroom(item.id)"></div>
      <div class="zhezhao2" @click="gotoChatdetails(item.id)"></div>
      <span class="show">同意</span>
      <van-image
        class="left"
        radius="7px"
        width="45px"
        height="45px"
        :src="item.img"
      />
      <van-cell :border="false">
        <template #title>
          <div class="title">
            <p style="font-size: 14px; font-weight: bold; color: #333333">
              {{ item.name }}
            </p>
          </div>
        </template>
        <template #value>
          <p style="font-size: 10px; color: #bfbfbf">
            {{ item.content }}
          </p></template
        >
      </van-cell>
      <template #right>
        <van-button square type="danger" text="详情" />
      </template>
    </van-swipe-cell>
  </div>
</template>

<script>
import { ref } from "vue";
import { useRouter } from "vue-router";
import { reactive, onMounted } from "vue";
import { getNewfriendDataApi } from "../../utils/api";

export default {
  setup() {
    const value = ref("");

    const router = useRouter();
    //返回
    function back() {
      router.back();
    }
    //渲染添加好友列表
    const state = reactive({
      listData: "",
    });

    const randerList = async () => {
      const res = await getNewfriendDataApi();
      state.listData = res.data.result;
    };
    onMounted(() => {
      randerList();
    });

    //跳转聊天室
    const gotoChatroom = (id) => {
      router.push("/chatroom/" + id);
    };
    //跳转聊天详情
    const gotoChatdetails = (id) => {
      router.push("/chatdetails/" + id);
    };
    return {
      value,
      back,
      state,
      gotoChatroom,
      gotoChatdetails,
    };
  },
};
</script>

<style lang="less" scoped>
@import "../../assets/css/var.less";
.newlist {
  padding-left: 16px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  height: 73px;
  background: #fff;

  .unshow {
    text-align: center;
    line-height: 32px;
    display: block;
    width: 66px;
    height: 32px;
    border-radius: 16px;
    background: transparent;
    color: #bfbfbf;
  }
}
.show {
  position: absolute;
  top: 50%-20px;
  right: 14px;
  text-align: center;
  line-height: 32px;
  color: #fff;
  display: block;
  width: 66px;
  height: 32px;
  background: linear-gradient(-23deg, #ff514b, #ff814e);
  box-shadow: 0px 2px 4px 0px rgba(253, 73, 38, 0.61);
  border-radius: 16px;
  z-index: 10000;
}
.van-cell {
  padding-left: 60px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}
.van-swipe-cell {
  padding-left: 16px;
  height: 73px;
  background: #fff;
}
.van-image {
  position: absolute;

  top: 10px;
  z-index: 100;
}
.van-button--normal {
  height: 73px;
  width: 80px;
  border: 0;
  background: linear-gradient(-23deg, #2fb383, #28cfb3);
}
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
</style>
