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
    <div class="list" v-for="(item, index) in state.listData" :key="index">
      <!-- 同意按钮 -->
      <span class="show" @click="addClass(index)" v-if="!obj[index]">同意</span>
      <span class="unshow" v-else>已同意</span>
      <van-image
        class="left"
        radius="7px"
        width="45px"
        height="45px"
        :src="item.img"
      />
      <van-cell :border="false">
        <template #title>
          <div class="title">
            <p style="font-size: 14px; font-weight: bold; color: #333333">
              {{ item.name }}
            </p>
          </div>
        </template>
        <template #value>
          <p style="font-size: 10px; color: #bfbfbf">
            {{ item.content }}
          </p></template
        >
      </van-cell>
    </div>
  </div>
</template>

<script>
import { useRouter } from "vue-router";
import { ref, reactive, onMounted } from "vue";
import { getNewfriendDataApi } from "../../utils/api";

export default {
  setup() {
    const value = ref("");

    const router = useRouter();
    //返回
    function back() {
      router.back();
    }
    //渲染添加好友列表
    const state = reactive({
      listData: "",
    });

    const randerList = async () => {
      const res = await getNewfriendDataApi();
      state.listData = res.data.result;
    };
    onMounted(() => {
      randerList();
    });

    const obj = ref({});

    //点击按钮同意

    const addClass = (i) => {
      console.log(obj.value);
      if (!obj.value[i]) {
        obj.value[i] = true;
        console.log(obj.value);
      }
    };
    return {
      value,
      back,
      state,
      addClass,
      obj,
    };
  },
};
</script>

<style lang="less" scoped>
@import "../../assets/css/var.less";
.newlist {
  padding-left: 16px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  height: 73px;
  background: #fff;
}
.show {
  position: absolute;
  top: 50%-20px;
  right: 14px;
  text-align: center;
  line-height: 32px;
  display: block;
  width: 66px;
  height: 32px;
  border-radius: 16px;
  z-index: 10000;
  color: #fff;
  background: linear-gradient(-23deg, #ff514b, #ff814e);
  box-shadow: 0px 2px 4px 0px rgba(253, 73, 38, 0.61);
}

.unshow {
  position: absolute;
  top: 50%-20px;
  right: 14px;
  text-align: center;
  line-height: 32px;
  display: block;
  width: 66px;
  height: 32px;
  border-radius: 16px;
  z-index: 10000;
  color: #999;
}
.van-cell {
  padding-left: 60px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}
.list {
  padding-left: 16px;
  height: 73px;
  background: #fff;
  position: relative;
}
.van-image {
  position: absolute;
  top: 10px;
  z-index: 100;
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
