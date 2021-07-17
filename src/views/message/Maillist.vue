<template>
  <div>
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
    <van-search v-model="value" placeholder="搜索" />
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

<style lang="less" scoped></style>
