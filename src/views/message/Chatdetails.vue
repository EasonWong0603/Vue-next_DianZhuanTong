<template>
  <div>
    <van-nav-bar
      title="聊天详情"
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
  </div>
</template>
<script>
import { useRouter } from "vue-router";

export default {
  setup() {
    const router = useRouter();
    const back = () => {
      router.back();
    };

    return {
      back,
    };
  },
};
</script>

<style lang="less"></style>
