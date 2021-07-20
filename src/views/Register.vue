<template>
  <MineHeader></MineHeader>
  <van-form @submit="onSubmit">
    <!-- from组件 -->
    <van-cell-group inset>
      <!-- 填写用户名 -->
      <van-field
        v-model="state.username"
        name="username"
        label="用户名"
        placeholder="用户名"
        :rules="[{ required: true, message: '请填写用户名' }]"
      />
      <van-field
        v-model="state.password"
        type="password"
        name="password"
        label="密码"
        placeholder="密码"
        :rules="[{ required: true, message: '请填写密码' }]"
      />
    </van-cell-group>
    <div style="margin: 16px">
      <van-button
        round
        block
        type="primary"
        native-type="submit"
        color="linear-gradient(-23deg, #ff514b, #ff814e)"
      >
        提交
      </van-button>
    </div>
  </van-form>
</template>

<script>
import MineHeader from "@/components/mine/MineHeader.vue";
import { reactive } from "vue";
import { useRouter } from "vue-router";

export default {
  setup() {
    const state = reactive({
      username: "",
      password: "",
    });
    const router = useRouter();
    const onSubmit = (values) => {
      localStorage.setItem("username", values.username);
      localStorage.setItem("password", values.password);
      localStorage.setItem("index", 0);
      router.push("/home");
    };

    return {
      state,
      onSubmit,
    };
  },
  components: {
    MineHeader,
  },
};
</script>

<style lang="less" scoped></style>
