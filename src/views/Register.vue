<template>
  <MineHeader></MineHeader>
  <van-form @submit="onSubmit">
    <!-- from组件 -->
    <van-cell-group inset class="register-van-form">
      <!-- 填写用户名 -->
      <van-field
        v-model="state.username"
        name="username"
        label="用户名"
        placeholder="请输入7个字以内的用户名"
        maxlength="7"
        :rules="[{ required: true, message: '请填写正确格式用户名' }]"
      />
      <van-field
        v-model="state.password"
        type="password"
        name="password"
        label="密码"
        placeholder="请填写6-12位的密码"
        :rules="[{ required: true, message: '请填写正确格式的密码' }]"
        @input="inputpw"
      />
    </van-cell-group>
    <div style="margin: 50px">
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

    //判断密码
    //input时检查密码难度

    //提交按钮-本地储存密码，用户名，跳转到首页
    const onSubmit = (values) => {
      localStorage.setItem("username", values.username);
      localStorage.setItem("password", values.password);
      router.push("/home");
    };

    return {
      state,
      onSubmit, //提交按钮
      //input时检查密码难度
    };
  },
  components: {
    MineHeader,
  },
};
</script>

<style lang="less" scoped>
.register-van-form {
  margin-top: 50px;
}
</style>
