<template>
  <div>
    <!-- 导航 -->
    <van-nav-bar :fixed="true" :placeholder="true" :z-index="10000"
      ><template #title><p style="font-weight: 800">联系人</p></template>
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
    <!-- 搜索 -->
    <van-search v-model="value" placeholder="搜索" />
    <!-- 联系人索引 -->

    <van-index-bar :sticky="true" :sticky-offset-top="46">
      <!-- 新的朋友 -->
      <div class="list-card" @click="newFriend">
        <van-image
          class="shadow"
          radius="7px"
          width="45px"
          height="45px"
          :src="require('../../assets/images/index/Message/icon_new@3x.png')"
          style="
            background: linear-gradient(-23deg, #ff514b, #ff814e);
            box-shadow: 0px 2px 4px 0px rgba(253, 73, 38, 0.61);
          "
        />
        <p
          class="title"
          style="
            font-size: 14px;
            font-weight: bold;
            color: #333333;
            line-height: 45px;
          "
        >
          新的好友
        </p>
        <span class="num">2</span>
      </div>
      <!-- 创建群聊 -->
      <div class="list-card">
        <van-image
          class="shadow"
          radius="7px"
          width="45px"
          height="45px"
          :src="require('../../assets/images/index/Message/icon_create@3x.png')"
          style="
            background: linear-gradient(-23deg, #ffb14b, #ffc34e);
            box-shadow: 0px 2px 4px 0px rgba(253, 73, 38, 0.61);
          "
        />
        <p
          @click="Groupchat"
          class="title"
          style="
            font-size: 14px;
            font-weight: bold;
            color: #333333;
            line-height: 45px;
          "
        >
          创建群聊
        </p>
      </div>
      <!-- 渲染列表 -->

      <div class="list" v-for="item1 in state.listData" :key="item1">
        <van-index-anchor :index="item1.prefix" />

        <van-swipe-cell v-for="(item, index) in item1.member" :key="index">
          <!-- 热区 -->
          <div class="zhezhao" @click="gotoChatroom(item.id)"></div>
          <div class="zhezhao2" @click="gotoChatdetails(item.id)"></div>

          <van-cell :border="false" style="height: 73px; disply: flex">
            <template #title>
              <van-image
                radius="7px"
                width="45px"
                height="45px"
                :src="item.img"
                style="float: left"
              />
              <p
                style="
                  font-size: 14px;
                  font-weight: bold;
                  color: #333333;
                  line-height: 45px;
                "
              >
                &emsp;{{ item.name }}
              </p>
            </template>
          </van-cell>
          <template #right>
            <van-button square type="danger" text="详情" />
          </template>
        </van-swipe-cell>
      </div>
    </van-index-bar>
  </div>
</template>

<script>
import { ref, reactive, onMounted } from "vue";
//引入整个路由
import { useRouter } from "vue-router";
import { getFriendDataApi } from "../../utils/api";

export default {
  setup() {
    const value = ref("");

    // 定义整个路由
    const router = useRouter();

    const back = () => {
      router.back();
    };

    //跳转添加好友
    const newFriend = () => {
      router.push("/newfriend");
    };

    const Groupchat = () => {
      router.push("/groupchat");
    };
    //渲染联系人数据
    const state = reactive({
      listData: "",
      listData2: "",
    });

    const randerList = async () => {
      const res = await getFriendDataApi();
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
      newFriend,
      randerList,
      state,
      gotoChatroom,
      gotoChatdetails,
      Groupchat,
    };
  },
};
</script>

<style lang="less" scoped>
@import "../../assets/css/var.less";

.list-card {
  position: relative;
  height: 60px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  background: #fff;
  .van-image {
    margin-left: 16px;
    margin-right: 13px;
  }
  font-weight: bold;
  color: #333333;
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
.van-swipe-cell__wrapper {
  height: 73px;
}
.van-cell__title {
  display: flex;
  justify-content: flex-start;
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
