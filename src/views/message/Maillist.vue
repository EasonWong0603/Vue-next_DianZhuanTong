<template>
  <div>
    <!-- 导航 -->
    <van-nav-bar title="联系人">
      <template #left>
        <van-icon
          :name="
            require('../../assets/images/index/Message/icon_left_arrow@3x.png')
          "
          size="12"
        />
      </template>
    </van-nav-bar>
    <!-- 搜索 -->
    <van-search v-model="value" placeholder="搜索" />
    <!-- 联系人索引 -->
    <div class="list-card">
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
      <span class="num">&nbsp;1&nbsp;</span>
    </div>
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

    <van-index-bar size="73px">
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
    </van-index-bar>
  </div>
</template>

<script>
import { Toast } from "vant";
import { ref } from "vue";
export default {
  setup() {
    const value = ref("");
    const onClickLeft = () => {
      Toast("返回");
    };
    return {
      value,
      onClickLeft,
    };
  },
};
</script>

<style lang="less" scoped>
@import "../../assets/css/var.less";

.list-card {
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
}
.van-index-bar {
  a .van-index-bar__index {
    line-height: 20px;
  }
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
</style>
