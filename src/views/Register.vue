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
      <!-- <van-field
        v-model="state.password"
        type="password"
        name="validatorMessage"
        label="密码"
        placeholder="请填写6-12位的密码"
        maxlength="12"
        :rules="[{ required: true, validator: validatorMessage }]" -->
      <!-- /> -->
      <van-field
        v-model="state.password"
        type="password"
        label="密码"
        name="validatorMessage"
        placeholder="请填写6-12位的密码"
        maxlength="12"
        :rules="[{ validator: validatorMessage }]"
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
        登录/自动注册
      </van-button>
    </div>
  </van-form>
</template>

<script>
import MineHeader from "@/components/MineHeader.vue";
import { reactive } from "vue";
import { useRouter } from "vue-router";

export default {
  setup() {
    const state = reactive({
      username: "",
      password: "",
    });
    const router = useRouter();

    //判断密码长度
    // const validatorMessage = (val) => {
    //   if (val.length < 6) {
    //     `密码少于6位`;
    //   }
    // };
    //const validatorMessage = (val) => `${val} 不合法，请重新输入`;
    const validatorMessage = (val) => {
      console.log(val.length);
      if (val.length < 6) {
        return `密码少于6位`;
      }
    };

    //提交按钮-本地储存密码，用户名，跳转到首页
    const onSubmit = (values) => {
      localStorage.setItem("username", values.username);
      localStorage.setItem("password", values.password);
      sessionStorage.setItem("token", values.username + values.password);
      router.push("/home");
    };

    return {
      state,
      onSubmit, //提交按钮
      validatorMessage, //检查密码长度
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
