<template>
  <van-cell is-link title="基础用法" @click="show = true" />
  <van-action-sheet
    v-model="show"
    :actions="action.actions"
    @select="onSelect"
  />
</template>

<script>
import { reactive } from "vue"; //按需引入

import { Toast } from "vant";
export default {
  setup() {
    //遮罩层
    const action = reactive({
      show: false,
      actions: [{ name: "选项一" }, { name: "选项二" }, { name: "选项三" }],
    });

    const onSelect = (item) => {
      this.show = false;
      Toast(item.name);
    };

    return {
      action,
      onSelect,
    };
  },
};
</script>

<style></style>
