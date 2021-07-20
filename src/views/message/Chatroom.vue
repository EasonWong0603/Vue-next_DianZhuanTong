<template>
  <div>
    <van-nav-bar
      title="聊天室"
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
      <template #right>
        <van-icon
          name="ellipsis"
          size="20px"
          color="#969799"
          @click="chatDetails"
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
    const chatDetails = () => {
      router.push("/chatdetails");
    };
    return {
      back,
      chatDetails,
    };
  },
};
</script>

<style lang="less"></style>
