<template>
  <div class="setname">
    <van-nav-bar
      title="设置名字"
      left-text="取消"
      right-text="完成"
      @click-left="onClickLeft"
      @click-right="onClickRight"
    />
    <van-cell-group inset :border="true">
      <van-field
        v-model="state.value"
        placeholder="更改昵称"
        :clearable="true"
        :maxlength="7"
      />
    </van-cell-group>
  </div>
</template>

<script>
import { useRouter } from "vue-router";
import { ref } from "vue";
import { reactive } from "vue";
// import { reactive } from "vue";
export default {
  setup() {
    let username = ref(localStorage.getItem("username"));
    const router = useRouter();
    //点击取消返回上一级
    const onClickLeft = () => {
      // router.push("/SetSelfInformation");
      router.go(-1);
    };
    //点击完成返回上一级，并且把数据重新存入本地
    const onClickRight = () => {
      router.go(-1);
      username = localStorage.setItem("username", state.value);
    };

    // 姓名的文本输入
    const state = reactive({
      value: username,
    });
    return {
      username,
      onClickLeft,
      onClickRight,
      state,
    };
  },
};
</script>

<style lang="less">
@import "../../assets/css/reset.less";
@import "../../assets/css/var.less";
.setname {
  .base-width();
  height: 100%;
  position: fixed;
  .van-nav-bar__text {
    color: #494949;
  }
  .van-cell-group {
    .base-width();
    margin: 16px 0 0 0;
  }
}
</style>
