<template>
  <div>
    <!-- 导航 -->
    <van-nav-bar
      title="联系人"
      :fixed="true"
      :placeholder="true"
      :z-index="10000"
    >
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
        <p class="title">新的好友</p>
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
        <p class="title">创建群聊</p>
      </div>
      <!-- A -->
      <van-index-anchor index="A" />
      <div class="list-card">
        <van-image
          radius="7px"
          width="45px"
          height="45px"
          src="https://img.yzcdn.cn/vant/cat.jpeg"
        />

        <p class="title">这是联系人姓名</p>
      </div>
      <!-- B -->
      <van-index-anchor index="B" />
      <div class="list-card">
        <van-image
          radius="7px"
          width="45px"
          height="45px"
          src="https://img.yzcdn.cn/vant/cat.jpeg"
        />
        <p class="title">这是联系人姓名</p>
      </div>
      <div class="list-card">
        <van-image
          radius="7px"
          width="45px"
          height="45px"
          src="https://img.yzcdn.cn/vant/cat.jpeg"
        />
        <p class="title">这是联系人姓名</p>
      </div>
      <div class="list-card">
        <van-image
          radius="7px"
          width="45px"
          height="45px"
          src="https://img.yzcdn.cn/vant/cat.jpeg"
        />
        <p class="title">这是联系人姓名</p>
      </div>
      <div class="list-card">
        <van-image
          radius="7px"
          width="45px"
          height="45px"
          src="https://img.yzcdn.cn/vant/cat.jpeg"
        />
        <p class="title">这是联系人姓名</p>
      </div>
      <div class="list-card">
        <van-image
          radius="7px"
          width="45px"
          height="45px"
          src="https://img.yzcdn.cn/vant/cat.jpeg"
        />
        <p class="title">这是联系人姓名</p>
      </div>
      <van-index-anchor index="C" />

      <div class="list-card">
        <van-image
          radius="7px"
          width="45px"
          height="45px"
          src="https://img.yzcdn.cn/vant/cat.jpeg"
        />
        <p class="title">这是联系人姓名</p>
      </div>
      <div class="list-card">
        <van-image
          radius="7px"
          width="45px"
          height="45px"
          src="https://img.yzcdn.cn/vant/cat.jpeg"
        />
        <p class="title">这是联系人姓名</p>
      </div>
      <div class="list-card">
        <van-image
          radius="7px"
          width="45px"
          height="45px"
          src="https://img.yzcdn.cn/vant/cat.jpeg"
        />
        <p class="title">这是联系人姓名</p>
      </div>
      <div class="list-card">
        <van-image
          radius="7px"
          width="45px"
          height="45px"
          src="https://img.yzcdn.cn/vant/cat.jpeg"
        />
        <p class="title">这是联系人姓名</p>
      </div>
      <div class="list-card">
        <van-image
          radius="7px"
          width="45px"
          height="45px"
          src="https://img.yzcdn.cn/vant/cat.jpeg"
        />
        <p class="title">这是联系人姓名</p>
      </div>
      <div class="list-card">
        <van-image
          radius="7px"
          width="45px"
          height="45px"
          src="https://img.yzcdn.cn/vant/cat.jpeg"
        />
        <p class="title">这是联系人姓名</p>
      </div>
      <div class="list-card">
        <van-image
          radius="7px"
          width="45px"
          height="45px"
          src="https://img.yzcdn.cn/vant/cat.jpeg"
        />
        <p class="title">这是联系人姓名</p>
      </div>
      <div class="list-card">
        <van-image
          radius="7px"
          width="45px"
          height="45px"
          src="https://img.yzcdn.cn/vant/cat.jpeg"
        />
        <p class="title">这是联系人姓名</p>
      </div>
      <van-index-anchor index="D" />

      <div class="list-card">
        <van-image
          radius="7px"
          width="45px"
          height="45px"
          src="https://img.yzcdn.cn/vant/cat.jpeg"
        />
        <p class="title">这是联系人姓名</p>
      </div>
      <div class="list-card">
        <van-image
          radius="7px"
          width="45px"
          height="45px"
          src="https://img.yzcdn.cn/vant/cat.jpeg"
        />
        <p class="title">这是联系人姓名</p>
      </div>
      <div class="list-card">
        <van-image
          radius="7px"
          width="45px"
          height="45px"
          src="https://img.yzcdn.cn/vant/cat.jpeg"
        />
        <p class="title">这是联系人姓名</p>
      </div>
      <div class="list-card">
        <van-image
          radius="7px"
          width="45px"
          height="45px"
          src="https://img.yzcdn.cn/vant/cat.jpeg"
        />
        <p class="title">这是联系人姓名</p>
      </div>
      <div class="list-card">
        <van-image
          radius="7px"
          width="45px"
          height="45px"
          src="https://img.yzcdn.cn/vant/cat.jpeg"
        />
        <p class="title">这是联系人姓名</p>
      </div>
      <van-index-anchor index="E" />

      <div class="list-card">
        <van-image
          radius="7px"
          width="45px"
          height="45px"
          src="https://img.yzcdn.cn/vant/cat.jpeg"
        />
        <p class="title">这是联系人姓名</p>
      </div>
      <div class="list-card">
        <van-image
          radius="7px"
          width="45px"
          height="45px"
          src="https://img.yzcdn.cn/vant/cat.jpeg"
        />
        <p class="title">这是联系人姓名</p>
      </div>
      <div class="list-card">
        <van-image
          radius="7px"
          width="45px"
          height="45px"
          src="https://img.yzcdn.cn/vant/cat.jpeg"
        />
        <p class="title">这是联系人姓名</p>
      </div></van-index-bar
    >
  </div>
</template>

<script>
import { ref } from "vue";
import { useRouter } from "vue-router";

export default {
  setup() {
    const value = ref("");

    const router = useRouter();
    const back = () => {
      router.back();
    };
    const newFriend = () => {
      router.push("/newfriend");
    };
    return {
      value,
      back,
      newFriend,
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
</style>
