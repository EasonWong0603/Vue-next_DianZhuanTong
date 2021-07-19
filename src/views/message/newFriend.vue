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
    <ul>
      <!-- 待同意 -->
      <li class="list">
        <van-image
          class="left"
          radius="7px"
          width="45px"
          height="45px"
          src="https://img.yzcdn.cn/vant/cat.jpeg"
        />
        <div class="center">
          <p class="title">这是联系人姓名</p>
          <span>这是内容</span>
        </div>
        <span class="show">同意</span>
        <!--  <span class="unshow">已同意</span> -->
      </li>
      <!-- 已同意 -->

      <li class="list">
        <van-image
          class="left"
          radius="7px"
          width="45px"
          height="45px"
          src="https://img.yzcdn.cn/vant/cat.jpeg"
        />
        <div class="center">
          <p class="title">这是联系人姓名</p>
          <span>这是内容</span>
        </div>
        <span class="unshow">已同意</span>
      </li>
    </ul>
  </div>
</template>

<script>
import { ref } from "vue";
import { useRouter } from "vue-router";

export default {
  setup() {
    const value = ref("");

    const router = useRouter();
    function back() {
      router.back();
    }

    return {
      value,
      back,
    };
  },
};
</script>

<style lang="less" scoped>
@import "../../assets/css/var.less";
.list {
  padding-left: 16px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  height: 73px;
  background: #fff;
  .center {
    width: 218px;
    margin-left: 14px;
    p {
      font-weight: bold;
      color: #333333;
      font-size: 14px;
      line-height: 24px;
    }
    span {
      font-size: 10px;
      color: #bfbfbf;
      line-height: 16px;
    }
  }
  .show {
    text-align: center;
    line-height: 32px;
    color: #fff;
    display: block;
    width: 66px;
    height: 32px;
    background: linear-gradient(-23deg, #ff514b, #ff814e);
    box-shadow: 0px 2px 4px 0px rgba(253, 73, 38, 0.61);
    border-radius: 16px;
  }
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
</style>
