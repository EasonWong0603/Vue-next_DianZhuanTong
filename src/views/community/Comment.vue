<!-- 发布评论 -->

<template>
  <div id="comment">
    <!-- 头部 -->
    <header>
      <span @click="cancel">取消</span>
      <em>发表评论</em>
      <p><i @click="handleclick">发送</i></p>
    </header>
    <!-- 内容 -->
    <main>
      <textarea
        type="text"
        placeholder="写评论..."
        autofocus
        v-model="state.text"
      />
    </main>
  </div>
</template>

<script>
import { reactive } from "vue";
import { Toast } from "vant";
import router from "../../router/index";

export default {
  setup() {
    const state = reactive({
      text: "",
    });

    // 发送
    const handleclick = () => {
      if (!state.text == "") {
        Toast.loading({
          message: "正在发送...",
          forbidClick: true,
          duration: 800,
        });
        setTimeout(() => {
          state.text = "";
          Toast.success("发送成功");
          router.go(-1);
        }, 1500);
      } else {
        Toast.fail({ message: "内容不能为空", duration: 1000 });
      }
    };

    // 取消
    const cancel = () => {
      router.go(-1);
    };

    return {
      state,
      handleclick, // 发送
      cancel, // 取消
    };
  },
};
</script>

<style lang="less">
@import "../../assets/css/var.less";

#comment {
  height: 623px;

  // 头部
  header {
    width: 373px;
    height: 44px;
    background: #f8f8f8;
    .flex-between();

    // 取消
    span {
      margin-left: 17px;
      font-size: 13px;
      font-family: PingFang;
      font-weight: 500;
      color: #696969;
      flex: 1;
    }

    // 标题
    em {
      text-align: center;
      font-size: 16px;
      font-family: PingFang;
      font-weight: 500;
      color: #333333;
      flex: 1;
    }

    // 发送
    p {
      flex: 1;
      display: flex;
      justify-content: flex-end;

      i {
        width: 58px;
        height: 27px;
        .flex-center();
        margin-right: 13px;
        background: linear-gradient(-23deg, #ff514b, #ff814e);
        box-shadow: 0px 3px 6px 0px rgba(253, 73, 38, 0.61);
        border-radius: 13px;
        font-size: 13px;
        font-family: PingFang;
        font-weight: 500;
        color: #ffffff;
      }
    }
  }

  // 内容
  main {
    background: #fff;
    padding: 15px 18px;
    height: 100%;

    textarea {
      width: 100%;
      height: 100%;
      font-size: 16px;
      font-family: PingFang;
      font-weight: 400;
      color: #333;
      border: none;
    }

    *::-webkit-input-placeholder {
      color: #a6a6a6;
    }
  }
}
</style>
