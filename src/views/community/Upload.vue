<!-- 发布信息 -->

<template>
  <div id="upload">
    <!-- 头部 -->
    <header>
      <!-- 左箭头 -->
      <van-icon name="arrow-left" @click="cancel" />
      <!-- 发送 -->
      <i class="sendout" @click="sendout">发表</i>
    </header>
    <!-- 内容 -->
    <main>
      <van-field
        v-model="state.message"
        rows="4"
        type="textarea"
        placeholder="说点什么吧..."
        autofocus
      />
      <van-uploader v-model="state.fileList" multiple />
    </main>
  </div>
</template>

<script>
//引入整个路由
import { useRouter } from "vue-router";
import { reactive } from "vue";
import { Toast } from "vant";

export default {
  setup() {
    // 定义整个路由
    const router = useRouter();
    const state = reactive({
      message: "",
      fileList: [
        { url: require("../../assets/images/community/photo01.jpg") },
        { url: require("../../assets/images/community/photo02.jpg") },
      ],
    });

    // 回退上个页面
    const cancel = () => {
      router.go(-1);
    };

    // 发送
    const sendout = () => {
      if (!state.message == "") {
        Toast.loading({
          message: "正在发送...",
          forbidClick: true,
          duration: 800,
        });
        setTimeout(() => {
          Toast.success("发送成功");
          state.message = "";
          state.fileList = [];
          router.go(-1);
        }, 1500);
      } else {
        Toast.fail({ message: "内容不能为空", duration: 1000 });
      }
    };

    return {
      state,
      cancel,
      sendout,
    };
  },
};
</script>

<style lang="less">
@import "../../assets/css/var.less";
#upload {
  // 头部
  header {
    width: 373px;
    height: 44px;
    background: #f8f8f8;
    .flex-between();

    // 取消
    .van-icon {
      margin-left: 16px;
      font-size: 14px;
      font-weight: 500;
      color: #696969;
    }

    // 发送
    .sendout {
      width: 58px;
      height: 27px;
      .flex-center();
      margin-right: 15px;
      background: linear-gradient(-23deg, #ff514b, #ff814e);
      box-shadow: 0px 3px 6px 0px rgba(253, 73, 38, 0.61);
      border-radius: 13px;
      font-size: 13px;
      font-family: PingFang;
      font-weight: 500;
      color: #ffffff;
    }
  }

  // 内容
  main {
    background: white;
    padding-bottom: 52px;

    .van-cell {
      position: static;
    }

    // 输入内容
    .van-field__control {
      font-size: 16px;
      font-family: PingFang;
      font-weight: 400;
      color: #333;
    }

    // 文件上传
    .van-uploader {
      margin-left: 16px;
    }
  }
}
</style>
