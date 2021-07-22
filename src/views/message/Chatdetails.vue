<template>
  <div>
    <!-- 导航 -->
    <div class="rander" v-for="item in state.listData" :key="item">
      <van-nav-bar :fixed="true" :placeholder="true" :z-index="10000"
        ><template #title><p style="font-weight: 800">聊天详情</p></template>
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

      <div class="contacts">
        <div class="left">
          <van-image radius="10px" width="60px" height="60px" :src="item.img" />

          <p class="name">{{ item.name }}</p>
        </div>
        <div class="right">
          <van-image
            radius="10px"
            width="60px"
            height="60px"
            :src="require('../../assets/images/index/Message/add.png')"
          />
        </div>
      </div>
      <!-- 开关 -->
      <div class="switch">
        <span class="title" style="font-size: 14px; font-weight: 500"
          >消息免打扰</span
        >
        <van-switch v-model="checked2" size="18px" active-color="#FF514B" />
      </div>
      <div class="switch">
        <span class="title" style="font-size: 14px; font-weight: 500"
          >清空聊天记录</span
        >
        <van-switch v-model="checked" size="18px" active-color="#FF514B" />
      </div>
    </div>
  </div>
</template>
<script>
import { reactive, onMounted, ref } from "vue";
import { useRouter } from "vue-router";
import { getFriendbackApi } from "../../utils/api";
export default {
  props: ["id"],
  setup(props) {
    const router = useRouter();
    const back = () => {
      router.back();
    };
    //渲染联系人数据
    const state = reactive({
      listData: "",
    });
    const randerList = async () => {
      const res = await getFriendbackApi({ id: props.id });
      state.listData = res.data;
    };
    onMounted(() => {
      randerList();
    });
    const checked = ref(false);
    const checked2 = ref(true);

    return {
      back,
      checked,
      state,
      randerList,
      checked2,
    };
  },
};
</script>

<style lang="less">
.contacts {
  height: 116px;
  width: 100%;
  background: #fff;
  padding: 17px 15px;
  .left {
    float: left;
    width: 60px;
    .name {
      font-size: 14px;
      padding-top: 7px;
      color: #b4b4b4;
      text-align: center;
    }
  }
  .right {
    margin-left: 10px;
    float: left;
  }
}
.switch {
  height: 52px;
  width: 100%;
  background: #fff;
  margin-top: 13px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 12px;
}
.van-switch__node {
  box-shadow: none;
}
</style>
