<!-- 意见反馈 -->

<template>
  <div id="feedback">
    <!-- 头部 -->
    <header>
      <!-- 导航 -->
      <van-nav-bar title="意见反馈" left-arrow @click-left="onClickLeft" />
    </header>
    <!-- 内容 -->
    <main>
      <!-- 按钮 -->
      <div class="btns">
        <span
          v-for="(item, index) in state.list"
          :key="index"
          :class="{ active: index === state.num }"
          @click="fn(index)"
          >{{ item }}</span
        >
      </div>
      <!-- 输入内容 -->
      <van-cell-group inset>
        <van-field
          v-model="state.message"
          rows="4"
          autosize
          type="textarea"
          maxlength="200"
          placeholder="简要描述你要反馈的意见和建议"
          show-word-limit
          ref="myRef"
        />
      </van-cell-group>
      <!-- 拍照上传 -->
      <van-uploader :after-read="afterRead" />
    </main>
    <!-- 底部 -->
    <footer>
      <!-- 按钮 -->
      <div class="btn" @click="handleclick">提交意见</div>
    </footer>
  </div>
</template>

<script>
//引入整个路由
import { useRouter } from "vue-router";
import { reactive, ref, onMounted } from "vue";

import { Toast } from "vant";

export default {
  setup() {
    // 定义整个路由
    const router = useRouter();
    const state = reactive({
      message: "",
      list: ["账号问题", "支付问题", "其他问题"],
      num: 0,
    });

    // 导航后退
    const onClickLeft = () => {
      router.go(-1);
    };

    // 此时可以自行将文件上传至服务器
    const afterRead = (file) => {
      console.log(file);
    };

    // tap
    const fn = (i) => {
      state.num = i;
      myRef.value.focus();
    };

    // 输入框自动获取焦点
    const myRef = ref(null);

    onMounted(() => {
      myRef.value.focus();
    });

    // 提交反馈
    const handleclick = () => {
      if (state.message !== "") {
        Toast.loading({
          message: "正在发送...",
          forbidClick: true,
          duration: 1000,
        });
        setTimeout(() => {
          router.go(-1);
          state.message = "";
          myRef.value.focus();
          Toast.success("反馈成功");
        }, 1600);
      } else {
        Toast.fail("内容不能为空");
      }
    };

    return {
      state,
      onClickLeft,
      afterRead,
      fn,
      handleclick,
      myRef,
    };
  },
};
</script>

<style lang="less">
// 引入外部css
@import "../../assets/css/var.less";

#feedback {
  // 头部
  header {
    margin-bottom: 23px;

    // 导航标题
    .van-nav-bar__title {
      font-size: 16px;
      font-family: PingFang;
      font-weight: bold;
      color: #323232;
    }

    // 导航图标
    .van-nav-bar .van-icon {
      color: #9c9c9c;
      font-weight: bold;
    }
  }

  // 内容
  main {
    background: #fff;
    box-shadow: 0px 0px 16px 0px rgba(221, 207, 199, 0.6);
    border-radius: 15px;
    padding: 14px 19px 13px 15px;

    .van-cell {
      padding: 0;
    }

    .van-cell-group--inset {
      margin: 0;
    }

    .van-field__word-limit {
      color: #cdcdcd;
    }

    // 按钮
    .btns {
      margin-bottom: 5px;

      span {
        display: inline-block;
        width: 61px;
        height: 22px;
        line-height: 22px;
        text-align: center;
        border: 1px solid #bfbfbf;
        border-radius: 11px;
        font-size: 10px;
        font-family: PingFang;
        font-weight: 500;
        color: #cdcdcd;
        margin-right: 6px;
      }

      .active {
        border-color: #ff564b;
        color: #ff564b;
      }
    }

    // 拍照上传
    .van-uploader__upload {
      width: 55px;
      height: 55px;
      margin: 0;
      border-radius: 10px;
      background: #e2e2e2;
    }

    // 相机图标
    .van-uploader__upload-icon {
      color: #fff;
    }
  }

  // 底部
  footer {
    margin-top: 43px;
    .flex-center-j();

    // 按钮
    .btn {
      width: 249px;
      height: 41px;
      line-height: 41px;
      text-align: center;
      border-radius: 21px;
      font-size: 13px;
      font-family: PingFang;
      font-weight: bold;
      color: #ffffff;
      background: linear-gradient(-23deg, #ff514b, #ff814e);
      box-shadow: 0px 3px 6px 0px rgba(253, 73, 38, 0.61);
    }
  }
}
</style>
