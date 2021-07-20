<template>
  <div class="inpu">
    <input type="text" v-model="textValue" />
    <span @click="handleClick">确定</span>
  </div>
  <ul>
    <li v-for="(item, index) in list" :key="index">
      {{ item }}
    </li>
  </ul>
</template>

<script>
import { reactive } from "vue";
export default {
  setup() {
    const state = reactive({
      list: ["宋晓丹", "宋你是谁"],
    });
    return { state };
  },
};
</script>

<style lang="less">
.inpu {
  width: 100%;
  height: 50px;
  background-color: white;
  input {
    width: 299px;
    height: 33px;
    background-color: #dddddd;
    margin-left: 20px;
    margin: auto;
    border: 0;
    border-radius: 10px;
    margin-top: 5px;
    margin-left: 20px;
  }
  span {
    width: 28px;
    height: 13px;
    font-size: 14px;
    font-family: PingFang;
    font-weight: bold;
    color: #333333;
    line-height: 139px;
    margin-left: 15px;
  }
}
</style>
