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
        <span class="active">账号问题</span>
        <span>支付问题</span>
        <span>其他问题</span>
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
        />
      </van-cell-group>
      <!-- 拍照上传 -->
      <van-uploader :after-read="afterRead" />
    </main>
    <!-- 底部 -->
    <footer>
      <!-- 按钮 -->
      <div class="btn">提交意见</div>
    </footer>
  </div>
</template>

<script>
import { reactive } from "vue";
// import { Field, CellGroup } from "vant";

export default {
  setup() {
    const state = reactive({
      message: "",
    });

    const afterRead = (file) => {
      // 此时可以自行将文件上传至服务器
      console.log(file);
    };

    return {
      state,
      afterRead,
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
      background: #dcdcdc;
      border-radius: 21px;
      font-size: 13px;
      font-family: PingFang;
      font-weight: bold;
      color: #ffffff;
    }
  }
}
</style>
